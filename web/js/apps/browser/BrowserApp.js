"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Logger_1 = require("polar-shared/src/logger/Logger");
const WebContentsNotifiers_1 = require("../../electron/web_contents_notifier/WebContentsNotifiers");
const BrowserAppEvent_1 = require("./BrowserAppEvent");
const ReactDOM = __importStar(require("react-dom"));
const React = __importStar(require("react"));
const BrowserNavBar_1 = require("./react/BrowserNavBar");
const DocumentReadyStates_1 = require("../../util/dom/DocumentReadyStates");
const Preconditions_1 = require("polar-shared/src/Preconditions");
const BrowserRegistry_1 = __importDefault(require("../../capture/BrowserRegistry"));
const SimpleReactor_1 = require("../../reactor/SimpleReactor");
const ProgressBar_1 = require("../../ui/progress_bar/ProgressBar");
const BackgroundFrameResizer_1 = require("../../viewer/html/BackgroundFrameResizer");
const RendererAnalytics_1 = require("../../ga/RendererAnalytics");
const log = Logger_1.Logger.create();
class BrowserApp {
    constructor() {
        this.loadedURL = false;
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            yield DocumentReadyStates_1.DocumentReadyStates.waitFor(document, 'complete');
            const navigationReactor = new SimpleReactor_1.SimpleReactor();
            ReactDOM.render(React.createElement(BrowserNavBar_1.BrowserNavBar, { onLoadURL: (url) => this.onLoadURL(url), onBrowserChanged: (browserName) => this.onBrowserChanged(browserName), onTriggerCapture: () => this.onTriggerCapture(), onReload: () => this.onReload(), navigationReactor: navigationReactor }), document.getElementById('browser-navbar-parent'));
            const content = this.getContentHost();
            content.addEventListener('dom-ready', () => __awaiter(this, void 0, void 0, function* () {
                content.insertCSS('html, body { overflow: hidden !important; }');
                content.addEventListener('will-navigate', (event) => {
                    this.onWebviewNavigated(event.url);
                });
                ['did-start-loading', 'did-stop-loading', 'did-fail-load', 'dom-ready']
                    .map(eventListenerName => content.addEventListener(eventListenerName, () => this.refreshTitle(eventListenerName)));
                ['did-start-loading', 'did-frame-navigate']
                    .map(eventListenerName => content.addEventListener(eventListenerName, (event) => {
                    const currentURL = content.getURL();
                    this.onWebviewNavigated(currentURL);
                    if (this.loadedURL) {
                        return;
                    }
                    if (currentURL && currentURL !== '' && !currentURL.startsWith("file:")) {
                        this.loadedURL = true;
                    }
                    else {
                        return;
                    }
                    navigationReactor.dispatchEvent({ url: currentURL, type: 'did-start-loading' });
                }));
                content.addEventListener('did-stop-loading', (event) => {
                    if (!this.loadedURL) {
                        return;
                    }
                    if (this.progressBar) {
                        this.progressBar.destroy();
                    }
                    const currentURL = content.getURL();
                    navigationReactor.dispatchEvent({ url: currentURL, type: 'did-stop-loading' });
                });
                content.addEventListener('did-fail-load', (event) => {
                    log.warn("Load of URL failed.", event);
                });
                this.forwardConsoleMessages(content);
            }));
        });
    }
    forwardConsoleMessages(content) {
        content.addEventListener('console-message', (consoleMessageEvent) => {
            const prefix = 'WEBVIEW: ';
            switch (consoleMessageEvent.level) {
                case -1:
                    console.debug(prefix + consoleMessageEvent.message);
                    break;
                case 0:
                    console.info(prefix + consoleMessageEvent.message);
                    break;
                case 1:
                    console.warn(prefix + consoleMessageEvent.message);
                    break;
                case 2:
                    console.error(prefix + consoleMessageEvent.message);
                    break;
            }
        });
    }
    onLoadURL(value) {
        if (Preconditions_1.isPresent(value) && !value.startsWith("http:") && !value.startsWith("https:")) {
            log.debug("Not a URL: " + value);
            return;
        }
        log.debug("Loading URL: " + value);
        this.loadedURL = true;
        RendererAnalytics_1.RendererAnalytics.event({ category: 'content-capture', action: 'loaded-url' });
        WebContentsNotifiers_1.WebContentsNotifiers.dispatchEvent(BrowserAppEvent_1.BrowserAppEvent.PROVIDE_URL, value);
    }
    onTriggerCapture() {
        RendererAnalytics_1.RendererAnalytics.event({ category: 'content-capture', action: 'triggered' });
        WebContentsNotifiers_1.WebContentsNotifiers.dispatchEvent(BrowserAppEvent_1.BrowserAppEvent.TRIGGER_CAPTURE, {});
    }
    onBrowserChanged(browserName) {
        const browser = BrowserRegistry_1.default[browserName];
        RendererAnalytics_1.RendererAnalytics.event({ category: 'content-capture', action: 'browser-changed' });
        WebContentsNotifiers_1.WebContentsNotifiers.dispatchEvent(BrowserAppEvent_1.BrowserAppEvent.CONFIGURE_WINDOW, browser);
    }
    onReload() {
        const content = this.getContentHost();
        this.onLoadURL(content.getURL());
    }
    onWebviewNavigated(url) {
        if (!Preconditions_1.isPresent(url) || url.startsWith("file:")) {
            return;
        }
        this.changeURL(url);
        this.createProgressBar();
        this.scrollPageToTop();
        this.startResizingWebview();
    }
    scrollPageToTop() {
        document.body.scrollTo(0, 0);
    }
    createProgressBar() {
        if (!this.progressBar) {
            this.progressBar = ProgressBar_1.ProgressBar.create(true);
        }
    }
    changeURL(url) {
        const element = document.querySelector("#url-bar");
        element.value = url;
    }
    startResizingWebview() {
        const contentHost = this.getContentHost();
        const backgroundFrameResizer = new BackgroundFrameResizer_1.BackgroundFrameResizer(contentHost.parentElement, contentHost);
        backgroundFrameResizer.start();
    }
    refreshTitle(eventName) {
        const contentHost = this.getContentHost();
        document.title = contentHost.getTitle();
    }
    getContentHost() {
        return document.querySelector("#content");
    }
}
exports.BrowserApp = BrowserApp;
var TriggerBrowserLoad;
(function (TriggerBrowserLoad) {
    TriggerBrowserLoad.MESSAGE_TYPE = 'trigger-browser-load-url';
})(TriggerBrowserLoad = exports.TriggerBrowserLoad || (exports.TriggerBrowserLoad = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnJvd3NlckFwcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkJyb3dzZXJBcHAudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJEQUFzRDtBQUN0RCxvR0FBK0Y7QUFDL0YsdURBQWtEO0FBQ2xELG9EQUFzQztBQUN0Qyw2Q0FBK0I7QUFDL0IseURBQW9EO0FBQ3BELDRFQUF1RTtBQUN2RSxrRUFBeUQ7QUFDekQsb0ZBQTREO0FBQzVELCtEQUEwRDtBQUMxRCxtRUFBOEQ7QUFDOUQscUZBQWdGO0FBQ2hGLGtFQUE2RDtBQUU3RCxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFNUIsTUFBYSxVQUFVO0lBQXZCO1FBS1ksY0FBUyxHQUFZLEtBQUssQ0FBQztJQXNOdkMsQ0FBQztJQWxOZ0IsS0FBSzs7WUFFZCxNQUFNLHlDQUFtQixDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFFeEQsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLDZCQUFhLEVBQW1CLENBQUM7WUFFL0QsUUFBUSxDQUFDLE1BQU0sQ0FDWCxvQkFBQyw2QkFBYSxJQUFDLFNBQVMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFDdkMsZ0JBQWdCLEVBQUUsQ0FBQyxXQUFtQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLEVBQzdFLGdCQUFnQixFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxFQUMvQyxRQUFRLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUMvQixpQkFBaUIsRUFBRSxpQkFBaUIsR0FBSSxFQUN2RCxRQUFRLENBQUMsY0FBYyxDQUFDLHVCQUF1QixDQUFnQixDQUNsRSxDQUFDO1lBRUYsTUFBTSxPQUFPLEdB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YSxDQUFDLFVBQVUsQ0FBc0IsQ0FBQztRQUN4RSxPQUFPLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztJQUN4QixDQUFDO0lBRU8sb0JBQW9CO1FBRXhCLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUMxQyxNQUFNLHNCQUFzQixHQUN0QixJQUFJLCtDQUFzQixDQUFDLFdBQVcsQ0FBQyxhQUFjLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFFMUUsc0JBQXNCLENBQUMsS0FBSyxFQUFFLENBQUM7SUFFbkMsQ0FBQztJQUVPLFlBQVksQ0FBQyxTQUFpQjtRQUNsQyxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDMUMsUUFBUSxDQUFDLEtBQUssR0FBRyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDNUMsQ0FBQztJQUVPLGNBQWM7UUFDbEIsT0FBTyxRQUFRLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBeUIsQ0FBQztJQUN0RSxDQUFDO0NBRUo7QUEzTkQsZ0NBMk5DO0FBa0JELElBQWlCLGtCQUFrQixDQVNsQztBQVRELFdBQWlCLGtCQUFrQjtJQUVsQiwrQkFBWSxHQUFHLDBCQUEwQixDQUFDO0FBTzNELENBQUMsRUFUZ0Isa0JBQWtCLEdBQWxCLDBCQUFrQixLQUFsQiwwQkFBa0IsUUFTbEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0xvZ2dlcn0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7V2ViQ29udGVudHNOb3RpZmllcnN9IGZyb20gJy4uLy4uL2VsZWN0cm9uL3dlYl9jb250ZW50c19ub3RpZmllci9XZWJDb250ZW50c05vdGlmaWVycyc7XG5pbXBvcnQge0Jyb3dzZXJBcHBFdmVudH0gZnJvbSAnLi9Ccm93c2VyQXBwRXZlbnQnO1xuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7QnJvd3Nlck5hdkJhcn0gZnJvbSAnLi9yZWFjdC9Ccm93c2VyTmF2QmFyJztcbmltcG9ydCB7RG9jdW1lbnRSZWFkeVN0YXRlc30gZnJvbSAnLi4vLi4vdXRpbC9kb20vRG9jdW1lbnRSZWFkeVN0YXRlcyc7XG5pbXBvcnQge2lzUHJlc2VudH0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9QcmVjb25kaXRpb25zJztcbmltcG9ydCBCcm93c2VyUmVnaXN0cnkgZnJvbSAnLi4vLi4vY2FwdHVyZS9Ccm93c2VyUmVnaXN0cnknO1xuaW1wb3J0IHtTaW1wbGVSZWFjdG9yfSBmcm9tICcuLi8uLi9yZWFjdG9yL1NpbXBsZVJlYWN0b3InO1xuaW1wb3J0IHtQcm9ncmVzc0Jhcn0gZnJvbSAnLi4vLi4vdWkvcHJvZ3Jlc3NfYmFyL1Byb2dyZXNzQmFyJztcbmltcG9ydCB7QmFja2dyb3VuZEZyYW1lUmVzaXplcn0gZnJvbSAnLi4vLi4vdmlld2VyL2h0bWwvQmFja2dyb3VuZEZyYW1lUmVzaXplcic7XG5pbXBvcnQge1JlbmRlcmVyQW5hbHl0aWNzfSBmcm9tICcuLi8uLi9nYS9SZW5kZXJlckFuYWx5dGljcyc7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuZXhwb3J0IGNsYXNzIEJyb3dzZXJBcHAge1xuXG4gICAgLyoqXG4gICAgICogVHJ1ZW4gd2hlbiB0aGUgdXNlciBoYXMgbG9hZGVkIGFuIGV4dGVybmFsIFVSTC5cbiAgICAgKi9cbiAgICBwcml2YXRlIGxvYWRlZFVSTDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgcHJpdmF0ZSBwcm9ncmVzc0JhcjogUHJvZ3Jlc3NCYXIgfCB1bmRlZmluZWQ7XG5cbiAgICBwdWJsaWMgYXN5bmMgc3RhcnQoKSB7XG5cbiAgICAgICAgYXdhaXQgRG9jdW1lbnRSZWFkeVN0YXRlcy53YWl0Rm9yKGRvY3VtZW50LCAnY29tcGxldGUnKTtcblxuICAgICAgICBjb25zdCBuYXZpZ2F0aW9uUmVhY3RvciA9IG5ldyBTaW1wbGVSZWFjdG9yPE5hdmlnYXRpb25FdmVudD4oKTtcblxuICAgICAgICBSZWFjdERPTS5yZW5kZXIoXG4gICAgICAgICAgICA8QnJvd3Nlck5hdkJhciBvbkxvYWRVUkw9eyh1cmwpID0+IHRoaXMub25Mb2FkVVJMKHVybCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBvbkJyb3dzZXJDaGFuZ2VkPXsoYnJvd3Nlck5hbWU6IHN0cmluZykgPT4gdGhpcy5vbkJyb3dzZXJDaGFuZ2VkKGJyb3dzZXJOYW1lKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVHJpZ2dlckNhcHR1cmU9eygpID0+IHRoaXMub25UcmlnZ2VyQ2FwdHVyZSgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgb25SZWxvYWQ9eygpID0+IHRoaXMub25SZWxvYWQoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRpb25SZWFjdG9yPXtuYXZpZ2F0aW9uUmVhY3Rvcn0gLz4sXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnJvd3Nlci1uYXZiYXItcGFyZW50JykgYXMgSFRNTEVsZW1lbnRcbiAgICAgICAgKTtcblxuICAgICAgICBjb25zdCBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50SG9zdCgpO1xuXG4gICAgICAgIGNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcignZG9tLXJlYWR5JywgYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgICAgICBjb250ZW50Lmluc2VydENTUygnaHRtbCwgYm9keSB7IG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDsgfScpO1xuXG4gICAgICAgICAgICBjb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3dpbGwtbmF2aWdhdGUnLCAoZXZlbnQ6IEVsZWN0cm9uLldpbGxOYXZpZ2F0ZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbldlYnZpZXdOYXZpZ2F0ZWQoZXZlbnQudXJsKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBbJ2RpZC1zdGFydC1sb2FkaW5nJywgJ2RpZC1zdG9wLWxvYWRpbmcnLCAnZGlkLWZhaWwtbG9hZCcsICdkb20tcmVhZHknIF1cbiAgICAgICAgICAgICAgICAubWFwKGV2ZW50TGlzdGVuZXJOYW1lID0+IGNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudExpc3RlbmVyTmFtZSwgKCkgPT4gdGhpcy5yZWZyZXNoVGl0bGUoZXZlbnRMaXN0ZW5lck5hbWUpKSk7XG5cbiAgICAgICAgICAgIFsnZGlkLXN0YXJ0LWxvYWRpbmcnLCAnZGlkLWZyYW1lLW5hdmlnYXRlJyBdXG4gICAgICAgICAgICAgICAgLm1hcChldmVudExpc3RlbmVyTmFtZSA9PiBjb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRMaXN0ZW5lck5hbWUsIChldmVudCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IHJlZmFjdG9yIHRoaXMgc28gaXQgb25seSB3b3JrcyBvbiB0aGUgdG9wIGxldmVsXG4gICAgICAgICAgICAgICAgICAgIC8vIG5hdmlnYXRpb24gY2hhbmdlcyBidXQgd2Ugd2VyZW4ndCBhYmxlIHRvIGRvIHRoaXMgYmVjYXVzZVxuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgZXZlbnQgd2UncmUgcmVjZWl2aW5nIGlzIGdlbmVyaWMuXG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudFVSTCA9IGNvbnRlbnQuZ2V0VVJMKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbldlYnZpZXdOYXZpZ2F0ZWQoY3VycmVudFVSTCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubG9hZGVkVVJMKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFVSTCAmJiBjdXJyZW50VVJMICE9PSAnJyAmJiAhIGN1cnJlbnRVUkwuc3RhcnRzV2l0aChcImZpbGU6XCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRlZFVSTCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uUmVhY3Rvci5kaXNwYXRjaEV2ZW50KHt1cmw6IGN1cnJlbnRVUkwsIHR5cGU6ICdkaWQtc3RhcnQtbG9hZGluZyd9KTtcblxuICAgICAgICAgICAgICAgIH0pKTtcblxuICAgICAgICAgICAgLy8gQ29ycmVzcG9uZHMgdG8gdGhlIHBvaW50cyBpbiB0aW1lIHdoZW4gdGhlIHNwaW5uZXIgb2YgdGhlIHRhYlxuICAgICAgICAgICAgLy8gc3RvcHMgc3Bpbm5pbmcuXG4gICAgICAgICAgICBjb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RpZC1zdG9wLWxvYWRpbmcnLCAoZXZlbnQpID0+IHtcblxuICAgICAgICAgICAgICAgIGlmICghIHRoaXMubG9hZGVkVVJMKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9ncmVzc0Jhcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2dyZXNzQmFyLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50VVJMID0gY29udGVudC5nZXRVUkwoKTtcblxuICAgICAgICAgICAgICAgIG5hdmlnYXRpb25SZWFjdG9yLmRpc3BhdGNoRXZlbnQoe3VybDogY3VycmVudFVSTCwgdHlwZTogJ2RpZC1zdG9wLWxvYWRpbmcnfSk7XG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2RpZC1mYWlsLWxvYWQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBsb2cud2FybihcIkxvYWQgb2YgVVJMIGZhaWxlZC5cIiwgZXZlbnQpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMuZm9yd2FyZENvbnNvbGVNZXNzYWdlcyhjb250ZW50KTtcblxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgZm9yd2FyZENvbnNvbGVNZXNzYWdlcyhjb250ZW50OiBFbGVjdHJvbi5XZWJ2aWV3VGFnKSB7XG5cbiAgICAgICAgY29udGVudC5hZGRFdmVudExpc3RlbmVyKCdjb25zb2xlLW1lc3NhZ2UnLCAoY29uc29sZU1lc3NhZ2VFdmVudDogRWxlY3Ryb24uQ29uc29sZU1lc3NhZ2VFdmVudCkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBwcmVmaXggPSAnV0VCVklFVzogJztcblxuICAgICAgICAgICAgc3dpdGNoIChjb25zb2xlTWVzc2FnZUV2ZW50LmxldmVsKSB7XG5cbiAgICAgICAgICAgICAgICBjYXNlIC0xOlxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKHByZWZpeCArIGNvbnNvbGVNZXNzYWdlRXZlbnQubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmluZm8ocHJlZml4ICsgY29uc29sZU1lc3NhZ2VFdmVudC5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihwcmVmaXggKyBjb25zb2xlTWVzc2FnZUV2ZW50Lm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihwcmVmaXggKyBjb25zb2xlTWVzc2FnZUV2ZW50Lm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkxvYWRVUkwodmFsdWU6IHN0cmluZykge1xuXG4gICAgICAgIGlmIChpc1ByZXNlbnQodmFsdWUpICYmICEgdmFsdWUuc3RhcnRzV2l0aChcImh0dHA6XCIpICYmICEgdmFsdWUuc3RhcnRzV2l0aChcImh0dHBzOlwiKSkge1xuICAgICAgICAgICAgbG9nLmRlYnVnKFwiTm90IGEgVVJMOiBcIiArIHZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxvZy5kZWJ1ZyhcIkxvYWRpbmcgVVJMOiBcIiArIHZhbHVlKTtcblxuICAgICAgICB0aGlzLmxvYWRlZFVSTCA9IHRydWU7XG5cbiAgICAgICAgUmVuZGVyZXJBbmFseXRpY3MuZXZlbnQoe2NhdGVnb3J5OiAnY29udGVudC1jYXB0dXJlJywgYWN0aW9uOiAnbG9hZGVkLXVybCd9KTtcblxuICAgICAgICBXZWJDb250ZW50c05vdGlmaWVycy5kaXNwYXRjaEV2ZW50KEJyb3dzZXJBcHBFdmVudC5QUk9WSURFX1VSTCwgdmFsdWUpO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblRyaWdnZXJDYXB0dXJlKCkge1xuXG4gICAgICAgIFJlbmRlcmVyQW5hbHl0aWNzLmV2ZW50KHtjYXRlZ29yeTogJ2NvbnRlbnQtY2FwdHVyZScsIGFjdGlvbjogJ3RyaWdnZXJlZCd9KTtcblxuICAgICAgICBXZWJDb250ZW50c05vdGlmaWVycy5kaXNwYXRjaEV2ZW50KEJyb3dzZXJBcHBFdmVudC5UUklHR0VSX0NBUFRVUkUsIHt9KTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgb25Ccm93c2VyQ2hhbmdlZChicm93c2VyTmFtZTogc3RyaW5nKSB7XG5cbiAgICAgICAgY29uc3QgYnJvd3NlciA9IEJyb3dzZXJSZWdpc3RyeVticm93c2VyTmFtZV07XG5cbiAgICAgICAgUmVuZGVyZXJBbmFseXRpY3MuZXZlbnQoe2NhdGVnb3J5OiAnY29udGVudC1jYXB0dXJlJywgYWN0aW9uOiAnYnJvd3Nlci1jaGFuZ2VkJ30pO1xuXG4gICAgICAgIFdlYkNvbnRlbnRzTm90aWZpZXJzLmRpc3BhdGNoRXZlbnQoQnJvd3NlckFwcEV2ZW50LkNPTkZJR1VSRV9XSU5ET1csIGJyb3dzZXIpO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblJlbG9hZCgpIHtcblxuICAgICAgICBjb25zdCBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50SG9zdCgpO1xuXG4gICAgICAgIHRoaXMub25Mb2FkVVJMKGNvbnRlbnQuZ2V0VVJMKCkpO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2hvdWxkIGJlIGNhbGxlZCBldmVyeSB0aW1lIHdlIGNoYW5nZSB0aGUgaGlnaCBsZXZlbCBVUkwgYmVpbmcgdmlld2VkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHVybFxuICAgICAqL1xuICAgIHByaXZhdGUgb25XZWJ2aWV3TmF2aWdhdGVkKHVybDogc3RyaW5nKSB7XG5cbiAgICAgICAgaWYgKCEgaXNQcmVzZW50KHVybCkgfHwgdXJsLnN0YXJ0c1dpdGgoXCJmaWxlOlwiKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jaGFuZ2VVUkwodXJsKTtcbiAgICAgICAgdGhpcy5jcmVhdGVQcm9ncmVzc0JhcigpO1xuICAgICAgICB0aGlzLnNjcm9sbFBhZ2VUb1RvcCgpO1xuICAgICAgICB0aGlzLnN0YXJ0UmVzaXppbmdXZWJ2aWV3KCk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIHNjcm9sbFBhZ2VUb1RvcCgpIHtcbiAgICAgICAgLy8gc2Nyb2xsIHRvIHRoZSB0b3Agb2YgdGhlIHBhZ2UuLi5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5zY3JvbGxUbygwLCAwKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZVByb2dyZXNzQmFyKCkge1xuICAgICAgICAvLyBjcmVhdGUgYSBwcm9ncmVzcyBiYXIgc28gd2Uga25vdyB0aGF0IHRoZSBwYWdlIGlzIGxvYWRpbmdcblxuICAgICAgICBpZiAoISB0aGlzLnByb2dyZXNzQmFyKSB7XG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzQmFyID0gUHJvZ3Jlc3NCYXIuY3JlYXRlKHRydWUpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGNoYW5nZVVSTCh1cmw6IHN0cmluZykge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN1cmwtYmFyXCIpISBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICBlbGVtZW50LnZhbHVlID0gdXJsO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhcnRSZXNpemluZ1dlYnZpZXcoKSB7XG5cbiAgICAgICAgY29uc3QgY29udGVudEhvc3QgPSB0aGlzLmdldENvbnRlbnRIb3N0KCk7XG4gICAgICAgIGNvbnN0IGJhY2tncm91bmRGcmFtZVJlc2l6ZXJcbiAgICAgICAgICAgID0gbmV3IEJhY2tncm91bmRGcmFtZVJlc2l6ZXIoY29udGVudEhvc3QucGFyZW50RWxlbWVudCEsIGNvbnRlbnRIb3N0KTtcblxuICAgICAgICBiYWNrZ3JvdW5kRnJhbWVSZXNpemVyLnN0YXJ0KCk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIHJlZnJlc2hUaXRsZShldmVudE5hbWU6IHN0cmluZykge1xuICAgICAgICBjb25zdCBjb250ZW50SG9zdCA9IHRoaXMuZ2V0Q29udGVudEhvc3QoKTtcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBjb250ZW50SG9zdC5nZXRUaXRsZSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0Q29udGVudEhvc3QoKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIikhIGFzIEVsZWN0cm9uLldlYnZpZXdUYWc7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmF2aWdhdGlvbkV2ZW50IHtcblxuICAgIC8qKlxuICAgICAqIFRoZSBVUkwgYXQgdGhlIHRpbWUgb2YgbmF2aWdhdGlvbi5cbiAgICAgKi9cbiAgICByZWFkb25seSB1cmw6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIFRoZSB0eXBlIG9mIG5hdmlnYXRpb24gKHN0YXJ0IG9yIHN0b3AgbG9hZGluZykuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdHlwZTogTmF2aWdhdGlvbkV2ZW50VHlwZTtcblxufVxuXG5leHBvcnQgdHlwZSBOYXZpZ2F0aW9uRXZlbnRUeXBlID0gJ2RpZC1zdGFydC1sb2FkaW5nJyB8ICdkaWQtc3RvcC1sb2FkaW5nJztcblxuZXhwb3J0IG5hbWVzcGFjZSBUcmlnZ2VyQnJvd3NlckxvYWQge1xuXG4gICAgZXhwb3J0IGNvbnN0IE1FU1NBR0VfVFlQRSA9ICd0cmlnZ2VyLWJyb3dzZXItbG9hZC11cmwnO1xuXG4gICAgZXhwb3J0IGludGVyZmFjZSBNZXNzYWdlIHtcbiAgICAgICAgdHlwZTogc3RyaW5nO1xuICAgICAgICB1cmw6IHN0cmluZztcbiAgICB9XG5cbn1cbiJdfQ==