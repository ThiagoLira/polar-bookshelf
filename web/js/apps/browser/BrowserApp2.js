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
const URLs_1 = require("polar-shared/src/util/URLs");
const Strings_1 = require("polar-shared/src/util/Strings");
const log = Logger_1.Logger.create();
class BrowserApp2 {
    constructor() {
        this.loadedURL = false;
        this.webviewNavigated = false;
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            yield DocumentReadyStates_1.DocumentReadyStates.waitFor(document, 'complete');
            const navigationReactor = new SimpleReactor_1.SimpleReactor();
            ReactDOM.render(React.createElement(BrowserNavBar_1.BrowserNavBar, { onLoadURL: (url) => this.onLoadURL(url), onBrowserChanged: (browserName) => this.onBrowserChanged(browserName), onTriggerCapture: () => this.onTriggerCapture(), onReload: () => this.onReload(), navigationReactor: navigationReactor }), document.getElementById('browser-navbar-parent'));
            const content = this.getContentHost();
            content.addEventListener('dom-ready', () => __awaiter(this, void 0, void 0, function* () {
                content.insertCSS('html, body { overflow: hidden !important; }');
                ['did-start-loading', 'did-stop-loading', 'did-fail-load', 'dom-ready']
                    .map(eventListenerName => content.addEventListener(eventListenerName, () => this.refreshTitle(eventListenerName)));
                content.getWebContents().addListener('will-navigate', (event, url) => {
                    log.debug("WebContents event: will-navigate: " + url);
                    this.onWebviewNavigated(url, 'will-navigate');
                });
                const onDidStartNavigation = (eventName, url, isMainPage) => {
                    const context = { eventName, url, isMainPage };
                    log.debug(`${eventName}`, context);
                    if (this.webviewNavigated) {
                        log.debug(`${eventName}: already called for eventName `, context);
                        return;
                    }
                    const currentURL = content.getURL();
                    if (Strings_1.Strings.empty(currentURL)) {
                        log.debug(`${eventName}: empty URL: `, context);
                        return;
                    }
                    if (!URLs_1.URLs.isWebScheme(currentURL)) {
                        log.debug(`${eventName}: not a web URL: `, context);
                        return;
                    }
                    if (!isMainPage) {
                        log.debug(`${eventName}: not the main page: `, context);
                        return;
                    }
                    this.onWebviewNavigated(currentURL, eventName);
                    log.info("Dispatching navigation reactor event for did-start-loading: " + currentURL);
                    navigationReactor.dispatchEvent({ url: currentURL, type: 'did-start-loading' });
                    this.webviewNavigated = true;
                };
                content.getWebContents()
                    .addListener('did-frame-finish-load', (event, isMainFrame, frameProcessId, frameRoutingId) => {
                    const eventName = 'did-frame-finish-load';
                    log.debug(`${eventName}: isMainFrame: ${isMainFrame}: ` + content.getURL());
                    if (!isMainFrame) {
                        log.debug(`${eventName}: skipping (not main frame)`);
                        return;
                    }
                    if (!this.loadedURL) {
                        log.debug(`${eventName}: skipping (URL not loaded)`);
                        return;
                    }
                    if (!this.webviewNavigated) {
                        log.debug(`${eventName}: skipping (webview not navigated)`);
                        return;
                    }
                    if (this.progressBar) {
                        log.debug(`${eventName}: destroying progeress bar`);
                        this.progressBar.destroy();
                    }
                    const currentURL = content.getURL();
                    navigationReactor.dispatchEvent({ url: currentURL, type: 'did-stop-loading' });
                });
                content.addEventListener('did-fail-load', () => {
                    log.warn("Load of URL failed.");
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
        WebContentsNotifiers_1.WebContentsNotifiers.dispatchEvent(BrowserAppEvent_1.BrowserAppEvent.PROVIDE_URL, value);
    }
    onTriggerCapture() {
        this.createProgressBar();
        WebContentsNotifiers_1.WebContentsNotifiers.dispatchEvent(BrowserAppEvent_1.BrowserAppEvent.TRIGGER_CAPTURE, {});
    }
    onBrowserChanged(browserName) {
        const browser = BrowserRegistry_1.default[browserName];
        WebContentsNotifiers_1.WebContentsNotifiers.dispatchEvent(BrowserAppEvent_1.BrowserAppEvent.CONFIGURE_WINDOW, browser);
    }
    onReload() {
        const content = this.getContentHost();
        this.onLoadURL(content.getURL());
    }
    onWebviewNavigated(url, eventName) {
        log.debug("within onWebviewNavigated");
        if (!Preconditions_1.isPresent(url) || isSplashPage(url)) {
            log.debug(`SKIPPING onWebviewNavigated: (${eventName}: ${url}`);
            return;
        }
        log.debug(`HANDLING onWebviewNavigated: (${eventName}: ${url}`);
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
exports.BrowserApp2 = BrowserApp2;
function isSplashPage(url) {
    return url.endsWith('/apps/browser/splash.html');
}
var TriggerBrowserLoad;
(function (TriggerBrowserLoad) {
    TriggerBrowserLoad.MESSAGE_TYPE = 'trigger-browser-load-url';
})(TriggerBrowserLoad = exports.TriggerBrowserLoad || (exports.TriggerBrowserLoad = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnJvd3NlckFwcDIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJCcm93c2VyQXBwMi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkRBQXNEO0FBQ3RELG9HQUErRjtBQUMvRix1REFBa0Q7QUFDbEQsb0RBQXNDO0FBQ3RDLDZDQUErQjtBQUMvQix5REFBb0Q7QUFDcEQsNEVBQXVFO0FBQ3ZFLGtFQUF5RDtBQUN6RCxvRkFBNEQ7QUFDNUQsK0RBQTBEO0FBQzFELG1FQUE4RDtBQUM5RCxxRkFBZ0Y7QUFDaEYscURBQWdEO0FBQ2hELDJEQUFzRDtBQUV0RCxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFNUIsTUFBYSxXQUFXO0lBQXhCO1FBS1ksY0FBUyxHQUFZLEtBQUssQ0FBQztRQUUzQixxQkFBZ0IsR0FBWSxLQUFLLENBQUM7SUFnUTlDLENBQUM7SUE1UGdCLEtBQUs7O1lBRWQsTUFBTSx5Q0FBbUIsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBRXhELE1BQU0saUJBQWlCLEdBQUcsSUFBSSw2QkFBYSxFQUFtQixDQUFDO1lBRS9ELFFBQVEsQ0FBQyxNQUFNLENBQ1gsb0JBQUMsNkJBQWEsSUFBQyxTQUFTLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQ3ZDLGdCQUFnQixFQUFFLENBQUMsV0FBbUIsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxFQUM3RSxnQkFBZ0IsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsRUFDL0MsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFDL0IsaUJBQWlCLEVBQUUsaUJBQWlCLEdBQUksRUFDdkQsUUFBUSxDQUFDLGNBQWMsQ0FBQyx1QkFBdUIsQ0FBZ0IsQ0FDbEUsQ0FBQztZQUVGLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUV0QyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLEdBQVMsRUFBRTtnQkFFN0MsT0FBTyxDQUFDLFNBQVMsQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDO2dCQUdqRSxDQUFDLG1CQUFtQixFQUFFLGtCQUFrQixFQUFFLGVBQWUsRUFBRSxXQUFXLENBQUU7cUJBQ25FLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQixFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBRXZILE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxXQUFXLENBQUMsZUFBZSxFQUFFLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFO29CQUNqRSxHQUFHLENBQUMsS0FBSyxDQUFDLG9DQUFvQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO29CQUN0RCxJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxFQUFFLGVBQWUsQ0FBQyxDQUFDO2dCQUVsRCxDQUFDLENBQUMsQ0FBQztnQkFFSCxNQUFNLG9CQUFvQixHQUFHLENBQUMsU0FBaUIsRUFBRSxHQUFXLEVBQUUsVUFBbUIsRUFBRSxFQUFFO29CQUVqRixNQUFNLE9BQU8sR0FBRyxFQUFDLFNBQVMsRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFDLENBQUM7b0JBRTdDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxTQUFTLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztvQkFFbkMsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7d0JBQ3ZCLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxTQUFTLGlDQUFpQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO3dCQUNsRSxPQUFPO3FCQUNWO29CQU1ELE1BQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztvQkFFcEMsSUFBSSxpQkFBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsRUFBRTt3QkFDM0IsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLFNBQVMsZUFBZSxFQUFFLE9BQU8sQ0FBQyxDQUFDO3dCQUNoRCxPQUFPO3FCQUNWO29CQUVELElBQUksQ0FBRSxXQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxFQUFFO3dCQUNoQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsU0FBUyxtQkFBbUIsRUFBRSxPQUFPLENBQUMsQ0FBQzt3QkFDcEQsT0FBTztxQkFDVjtvQkFFRCxJQUFJLENBQUMsVUFBVSxFQUFFO3dCQUNiLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxTQUFTLHVCQUF1QixFQUFFLE9BQU8sQ0FBQyxDQUFDO3dCQUN4RCxPQUFPO3FCQUNWO29CQUVELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLEVBQUUsU0FBUyxDQUFDLENBQUM7b0JBRS9DLEdBQUcsQ0FBQyxJQUFJLENBQUMsOERBQThELEdBQUcsVUFBVSxDQUFDLENBQUM7b0JBQ3RGLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxFQUFDLEdBQUcsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLG1CQUFtQixFQUFDLENBQUMsQ0FBQztvQkFFOUUsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztnQkFFakMsQ0FBQyxDQUFDO2dCQVFGLE9BQU8sQ0FBQyxjQUFjLEVBQUU7cUJBQ25CLFdBQVcsQ0FBQyx1QkFBdUIsRUFBRSxDQUFDLEtBQXFCLEVBQ3JCLFdBQW9CLEVBQ3BCLGNBQXNCLEVBQ3RCLGNBQXNCLEVBQUUsRUFBRTtvQkFFN0QsTUFBTSxTQUFTLEdBQUcsdUJBQXVCLENBQUM7b0JBRTFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxTQUFTLGtCQUFrQixXQUFXLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztvQkFFNUUsSUFBSSxDQUFDLFdBQVcsRUFBRTt3QkFDZCxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsU0FBUyw2QkFBNkIsQ0FBQyxDQUFDO3dCQUNyRCxPQUFPO3FCQUNWO29CQUVELElBQUksQ0FBRSxJQUFJLENBQUMsU0FBUyxFQUFFO3dCQUNsQixHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsU0FBUyw2QkFBNkIsQ0FBQyxDQUFDO3dCQUNyRCxPQUFPO3FCQUNWO29CQUVELElBQUksQ0FBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7d0JBQ3pCLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxTQUFTLG9DQUFvQyxDQUFDLENBQUM7d0JBQzVELE9BQU87cUJBQ1Y7b0JBRUQsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO3dCQUNsQixHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsU0FBUyw0QkFBNEIsQ0FBQyxDQUFDO3dCQUNwRCxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO3FCQUM5QjtvQkFFRCxNQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBRXBDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxFQUFDLEdBQUcsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixFQUFDLENBQUMsQ0FBQztnQkFFakYsQ0FBQyxDQUFDLENBQUM7Z0JBRVAsT0FBTyxDQUFDLGdCQUFnQixDQUFDLGVBQWUsRUFBRSxHQUFHLEVBQUU7b0JBQzNDLEdBQUcsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztnQkFDcEMsQ0FBQyxDQUFDLENBQUM7Z0JBRUgsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRXpDLENBQUMsQ0FBQSxDQUFDLENBQUM7UUFFUCxDQUFDO0tBQUE7SUFFTyxzQkFBc0IsQ0FBQyxPQUE0QjtRQUV2RCxPQUFPLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxtQkFBaUQsRUFBRSxFQUFFO1lBRTlGLE1BQU0sTUFBTSxHQUFHLFdBQVcsQ0FBQztZQUUzQixRQUFRLG1CQUFtQixDQUFDLEtBQUssRUFBRTtnQkFFL0IsS0FBSyxDQUFDLENBQUM7b0JBQ0gsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsbUJBQW1CLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ3BELE1BQU07Z0JBRVYsS0FBSyxDQUFDO29CQUNGLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNuRCxNQUFNO2dCQUVWLEtBQUssQ0FBQztvQkFDRixPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDbkQsTUFBTTtnQkFFVixLQUFLLENBQUM7b0JBQ0YsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsbUJBQW1CLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ3BELE1BQU07YUFFYjtRQUVMLENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQztJQUVPLFNBQVMsQ0FBQyxLQUFhO1FBRTNCLElBQUkseUJBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBRSxLQUFLLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ2pGLEdBQUcsQ0FBQyxLQUFLLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxDQUFDO1lBQ2pDLE9BQU87U0FDVjtRQUVELEdBQUcsQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQyxDQUFDO1FBRW5DLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLDJDQUFvQixDQUFDLGFBQWEsQ0FBQyxpQ0FBZSxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUUzRSxDQUFDO0lBRU8sZ0JBQWdCO1FBRXBCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3pCLDJDQUFvQixDQUFDLGFBQWEsQ0FBQyxpQ0FBZSxDQUFDLGVBQWUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUU1RSxDQUFDO0lBRU8sZ0JBQWdCLENBQUMsV0FBbUI7UUFFeEMsTUFBTSxPQUFPLEdBQUcseUJBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUU3QywyQ0FBb0IsQ0FBQyxhQUFhLENBQUMsaUNBQWUsQ0FBQyxnQkFBZ0IsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUVsRixDQUFDO0lBRU8sUUFBUTtRQUVaLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUV0QyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBRXJDLENBQUM7SUFPTyxrQkFBa0IsQ0FBQyxHQUFXLEVBQUUsU0FBaUI7UUFFckQsR0FBRyxDQUFDLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1FBRXZDLElBQUksQ0FBRSx5QkFBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLFlBQVksQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN2QyxHQUFHLENBQUMsS0FBSyxDQUFDLGlDQUFpQyxTQUFTLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQztZQUNoRSxPQUFPO1NBQ1Y7UUFFRCxHQUFHLENBQUMsS0FBSyxDQUFDLGlDQUFpQyxTQUFTLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQztRQUVoRSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUVoQyxDQUFDO0lBRU8sZUFBZTtRQUVuQixRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVPLGlCQUFpQjtRQUdyQixJQUFJLENBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixJQUFJLENBQUMsV0FBVyxHQUFHLHlCQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQy9DO0lBRUwsQ0FBQztJQUVPLFNBQVMsQ0FBQyxHQUFXO1FBQ3pCLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFzQixDQUFDO1FBQ3hFLE9BQU8sQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO0lBQ3hCLENBQUM7SUFFTyxvQkFBb0I7UUFFeEIsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzFDLE1BQU0sc0JBQXNCLEdBQ3RCLElBQUksK0NBQXNCLENBQUMsV0FBVyxDQUFDLGFBQWMsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUUxRSxzQkFBc0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUVuQyxDQUFDO0lBRU8sWUFBWSxDQUFDLFNBQWlCO1FBQ2xDLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUMxQyxRQUFRLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM1QyxDQUFDO0lBRU8sY0FBYztRQUNsQixPQUFPLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUF5QixDQUFDO0lBQ3RFLENBQUM7Q0FFSjtBQXZRRCxrQ0F1UUM7QUFFRCxTQUFTLFlBQVksQ0FBQyxHQUFXO0lBQzdCLE9BQU8sR0FBRyxDQUFDLFFBQVEsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO0FBQ3JELENBQUM7QUFrQkQsSUFBaUIsa0JBQWtCLENBU2xDO0FBVEQsV0FBaUIsa0JBQWtCO0lBRWxCLCtCQUFZLEdBQUcsMEJBQTBCLENBQUM7QUFPM0QsQ0FBQyxFQVRnQixrQkFBa0IsR0FBbEIsMEJBQWtCLEtBQWxCLDBCQUFrQixRQVNsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TG9nZ2VyfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL2xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IHtXZWJDb250ZW50c05vdGlmaWVyc30gZnJvbSAnLi4vLi4vZWxlY3Ryb24vd2ViX2NvbnRlbnRzX25vdGlmaWVyL1dlYkNvbnRlbnRzTm90aWZpZXJzJztcbmltcG9ydCB7QnJvd3NlckFwcEV2ZW50fSBmcm9tICcuL0Jyb3dzZXJBcHBFdmVudCc7XG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtCcm93c2VyTmF2QmFyfSBmcm9tICcuL3JlYWN0L0Jyb3dzZXJOYXZCYXInO1xuaW1wb3J0IHtEb2N1bWVudFJlYWR5U3RhdGVzfSBmcm9tICcuLi8uLi91dGlsL2RvbS9Eb2N1bWVudFJlYWR5U3RhdGVzJztcbmltcG9ydCB7aXNQcmVzZW50fSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL1ByZWNvbmRpdGlvbnMnO1xuaW1wb3J0IEJyb3dzZXJSZWdpc3RyeSBmcm9tICcuLi8uLi9jYXB0dXJlL0Jyb3dzZXJSZWdpc3RyeSc7XG5pbXBvcnQge1NpbXBsZVJlYWN0b3J9IGZyb20gJy4uLy4uL3JlYWN0b3IvU2ltcGxlUmVhY3Rvcic7XG5pbXBvcnQge1Byb2dyZXNzQmFyfSBmcm9tICcuLi8uLi91aS9wcm9ncmVzc19iYXIvUHJvZ3Jlc3NCYXInO1xuaW1wb3J0IHtCYWNrZ3JvdW5kRnJhbWVSZXNpemVyfSBmcm9tICcuLi8uLi92aWV3ZXIvaHRtbC9CYWNrZ3JvdW5kRnJhbWVSZXNpemVyJztcbmltcG9ydCB7VVJMc30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL1VSTHMnO1xuaW1wb3J0IHtTdHJpbmdzfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy91dGlsL1N0cmluZ3NcIjtcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG5leHBvcnQgY2xhc3MgQnJvd3NlckFwcDIge1xuXG4gICAgLyoqXG4gICAgICogVHJ1ZW4gd2hlbiB0aGUgdXNlciBoYXMgbG9hZGVkIGFuIGV4dGVybmFsIFVSTC5cbiAgICAgKi9cbiAgICBwcml2YXRlIGxvYWRlZFVSTDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgcHJpdmF0ZSB3ZWJ2aWV3TmF2aWdhdGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBwcml2YXRlIHByb2dyZXNzQmFyOiBQcm9ncmVzc0JhciB8IHVuZGVmaW5lZDtcblxuICAgIHB1YmxpYyBhc3luYyBzdGFydCgpIHtcblxuICAgICAgICBhd2FpdCBEb2N1bWVudFJlYWR5U3RhdGVzLndhaXRGb3IoZG9jdW1lbnQsICdjb21wbGV0ZScpO1xuXG4gICAgICAgIGNvbnN0IG5hdmlnYXRpb25SZWFjdG9yID0gbmV3IFNpbXBsZVJlYWN0b3I8TmF2aWdhdGlvbkV2ZW50PigpO1xuXG4gICAgICAgIFJlYWN0RE9NLnJlbmRlcihcbiAgICAgICAgICAgIDxCcm93c2VyTmF2QmFyIG9uTG9hZFVSTD17KHVybCkgPT4gdGhpcy5vbkxvYWRVUkwodXJsKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQnJvd3NlckNoYW5nZWQ9eyhicm93c2VyTmFtZTogc3RyaW5nKSA9PiB0aGlzLm9uQnJvd3NlckNoYW5nZWQoYnJvd3Nlck5hbWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgb25UcmlnZ2VyQ2FwdHVyZT17KCkgPT4gdGhpcy5vblRyaWdnZXJDYXB0dXJlKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBvblJlbG9hZD17KCkgPT4gdGhpcy5vblJlbG9hZCgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGlvblJlYWN0b3I9e25hdmlnYXRpb25SZWFjdG9yfSAvPixcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdicm93c2VyLW5hdmJhci1wYXJlbnQnKSBhcyBIVE1MRWxlbWVudFxuICAgICAgICApO1xuXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnRIb3N0KCk7XG5cbiAgICAgICAgY29udGVudC5hZGRFdmVudExpc3RlbmVyKCdkb20tcmVhZHknLCBhc3luYyAoKSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnRlbnQuaW5zZXJ0Q1NTKCdodG1sLCBib2R5IHsgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50OyB9Jyk7XG5cblxuICAgICAgICAgICAgWydkaWQtc3RhcnQtbG9hZGluZycsICdkaWQtc3RvcC1sb2FkaW5nJywgJ2RpZC1mYWlsLWxvYWQnLCAnZG9tLXJlYWR5JyBdXG4gICAgICAgICAgICAgICAgLm1hcChldmVudExpc3RlbmVyTmFtZSA9PiBjb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRMaXN0ZW5lck5hbWUsICgpID0+IHRoaXMucmVmcmVzaFRpdGxlKGV2ZW50TGlzdGVuZXJOYW1lKSkpO1xuXG4gICAgICAgICAgICBjb250ZW50LmdldFdlYkNvbnRlbnRzKCkuYWRkTGlzdGVuZXIoJ3dpbGwtbmF2aWdhdGUnLCAoZXZlbnQsIHVybCkgPT4ge1xuICAgICAgICAgICAgICAgIGxvZy5kZWJ1ZyhcIldlYkNvbnRlbnRzIGV2ZW50OiB3aWxsLW5hdmlnYXRlOiBcIiArIHVybCk7XG4gICAgICAgICAgICAgICAgdGhpcy5vbldlYnZpZXdOYXZpZ2F0ZWQodXJsLCAnd2lsbC1uYXZpZ2F0ZScpO1xuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc3Qgb25EaWRTdGFydE5hdmlnYXRpb24gPSAoZXZlbnROYW1lOiBzdHJpbmcsIHVybDogc3RyaW5nLCBpc01haW5QYWdlOiBib29sZWFuKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjb250ZXh0ID0ge2V2ZW50TmFtZSwgdXJsLCBpc01haW5QYWdlfTtcblxuICAgICAgICAgICAgICAgIGxvZy5kZWJ1ZyhgJHtldmVudE5hbWV9YCwgY29udGV4dCk7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy53ZWJ2aWV3TmF2aWdhdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZy5kZWJ1ZyhgJHtldmVudE5hbWV9OiBhbHJlYWR5IGNhbGxlZCBmb3IgZXZlbnROYW1lIGAsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogcmVmYWN0b3IgdGhpcyBzbyBpdCBvbmx5IHdvcmtzIG9uIHRoZSB0b3AgbGV2ZWxcbiAgICAgICAgICAgICAgICAvLyBuYXZpZ2F0aW9uIGNoYW5nZXMgYnV0IHdlIHdlcmVuJ3QgYWJsZSB0byBkbyB0aGlzIGJlY2F1c2VcbiAgICAgICAgICAgICAgICAvLyB0aGUgZXZlbnQgd2UncmUgcmVjZWl2aW5nIGlzIGdlbmVyaWMuXG5cbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50VVJMID0gY29udGVudC5nZXRVUkwoKTtcblxuICAgICAgICAgICAgICAgIGlmIChTdHJpbmdzLmVtcHR5KGN1cnJlbnRVUkwpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZy5kZWJ1ZyhgJHtldmVudE5hbWV9OiBlbXB0eSBVUkw6IGAsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCEgVVJMcy5pc1dlYlNjaGVtZShjdXJyZW50VVJMKSkge1xuICAgICAgICAgICAgICAgICAgICBsb2cuZGVidWcoYCR7ZXZlbnROYW1lfTogbm90IGEgd2ViIFVSTDogYCwgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIWlzTWFpblBhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nLmRlYnVnKGAke2V2ZW50TmFtZX06IG5vdCB0aGUgbWFpbiBwYWdlOiBgLCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMub25XZWJ2aWV3TmF2aWdhdGVkKGN1cnJlbnRVUkwsIGV2ZW50TmFtZSk7XG5cbiAgICAgICAgICAgICAgICBsb2cuaW5mbyhcIkRpc3BhdGNoaW5nIG5hdmlnYXRpb24gcmVhY3RvciBldmVudCBmb3IgZGlkLXN0YXJ0LWxvYWRpbmc6IFwiICsgY3VycmVudFVSTCk7XG4gICAgICAgICAgICAgICAgbmF2aWdhdGlvblJlYWN0b3IuZGlzcGF0Y2hFdmVudCh7dXJsOiBjdXJyZW50VVJMLCB0eXBlOiAnZGlkLXN0YXJ0LWxvYWRpbmcnfSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLndlYnZpZXdOYXZpZ2F0ZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvLyBjb250ZW50LmdldFdlYkNvbnRlbnRzKCkuYWRkTGlzdGVuZXIoJ2RpZC1zdGFydC1uYXZpZ2F0aW9uJywgKGV2ZW50LCB1cmwsIGlzSW5QbGFjZSwgaXNNYWluRnJhbWUpID0+IHtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyAgICAgb25EaWRTdGFydE5hdmlnYXRpb24oJ2RpZC1zdGFydC1uYXZpZ2F0aW9uJywgdXJsLCBpc01haW5GcmFtZSk7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gfSk7XG5cbiAgICAgICAgICAgIGNvbnRlbnQuZ2V0V2ViQ29udGVudHMoKVxuICAgICAgICAgICAgICAgIC5hZGRMaXN0ZW5lcignZGlkLWZyYW1lLWZpbmlzaC1sb2FkJywgKGV2ZW50OiBFbGVjdHJvbi5FdmVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc01haW5GcmFtZTogYm9vbGVhbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcmFtZVByb2Nlc3NJZDogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lUm91dGluZ0lkOiBudW1iZXIpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBldmVudE5hbWUgPSAnZGlkLWZyYW1lLWZpbmlzaC1sb2FkJztcblxuICAgICAgICAgICAgICAgICAgICBsb2cuZGVidWcoYCR7ZXZlbnROYW1lfTogaXNNYWluRnJhbWU6ICR7aXNNYWluRnJhbWV9OiBgICsgY29udGVudC5nZXRVUkwoKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc01haW5GcmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9nLmRlYnVnKGAke2V2ZW50TmFtZX06IHNraXBwaW5nIChub3QgbWFpbiBmcmFtZSlgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICghIHRoaXMubG9hZGVkVVJMKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2cuZGVidWcoYCR7ZXZlbnROYW1lfTogc2tpcHBpbmcgKFVSTCBub3QgbG9hZGVkKWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCEgdGhpcy53ZWJ2aWV3TmF2aWdhdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2cuZGVidWcoYCR7ZXZlbnROYW1lfTogc2tpcHBpbmcgKHdlYnZpZXcgbm90IG5hdmlnYXRlZClgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb2dyZXNzQmFyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2cuZGVidWcoYCR7ZXZlbnROYW1lfTogZGVzdHJveWluZyBwcm9nZXJlc3MgYmFyYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2dyZXNzQmFyLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRVUkwgPSBjb250ZW50LmdldFVSTCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIG5hdmlnYXRpb25SZWFjdG9yLmRpc3BhdGNoRXZlbnQoe3VybDogY3VycmVudFVSTCwgdHlwZTogJ2RpZC1zdG9wLWxvYWRpbmcnfSk7XG5cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29udGVudC5hZGRFdmVudExpc3RlbmVyKCdkaWQtZmFpbC1sb2FkJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxvZy53YXJuKFwiTG9hZCBvZiBVUkwgZmFpbGVkLlwiKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLmZvcndhcmRDb25zb2xlTWVzc2FnZXMoY29udGVudCk7XG5cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGZvcndhcmRDb25zb2xlTWVzc2FnZXMoY29udGVudDogRWxlY3Ryb24uV2Vidmlld1RhZykge1xuXG4gICAgICAgIGNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcignY29uc29sZS1tZXNzYWdlJywgKGNvbnNvbGVNZXNzYWdlRXZlbnQ6IEVsZWN0cm9uLkNvbnNvbGVNZXNzYWdlRXZlbnQpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgcHJlZml4ID0gJ1dFQlZJRVc6ICc7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoY29uc29sZU1lc3NhZ2VFdmVudC5sZXZlbCkge1xuXG4gICAgICAgICAgICAgICAgY2FzZSAtMTpcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhwcmVmaXggKyBjb25zb2xlTWVzc2FnZUV2ZW50Lm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5pbmZvKHByZWZpeCArIGNvbnNvbGVNZXNzYWdlRXZlbnQubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4ocHJlZml4ICsgY29uc29sZU1lc3NhZ2VFdmVudC5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IocHJlZml4ICsgY29uc29sZU1lc3NhZ2VFdmVudC5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgb25Mb2FkVVJMKHZhbHVlOiBzdHJpbmcpIHtcblxuICAgICAgICBpZiAoaXNQcmVzZW50KHZhbHVlKSAmJiAhIHZhbHVlLnN0YXJ0c1dpdGgoXCJodHRwOlwiKSAmJiAhIHZhbHVlLnN0YXJ0c1dpdGgoXCJodHRwczpcIikpIHtcbiAgICAgICAgICAgIGxvZy5kZWJ1ZyhcIk5vdCBhIFVSTDogXCIgKyB2YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsb2cuZGVidWcoXCJMb2FkaW5nIFVSTDogXCIgKyB2YWx1ZSk7XG5cbiAgICAgICAgdGhpcy5sb2FkZWRVUkwgPSB0cnVlO1xuICAgICAgICBXZWJDb250ZW50c05vdGlmaWVycy5kaXNwYXRjaEV2ZW50KEJyb3dzZXJBcHBFdmVudC5QUk9WSURFX1VSTCwgdmFsdWUpO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblRyaWdnZXJDYXB0dXJlKCkge1xuXG4gICAgICAgIHRoaXMuY3JlYXRlUHJvZ3Jlc3NCYXIoKTtcbiAgICAgICAgV2ViQ29udGVudHNOb3RpZmllcnMuZGlzcGF0Y2hFdmVudChCcm93c2VyQXBwRXZlbnQuVFJJR0dFUl9DQVBUVVJFLCB7fSk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uQnJvd3NlckNoYW5nZWQoYnJvd3Nlck5hbWU6IHN0cmluZykge1xuXG4gICAgICAgIGNvbnN0IGJyb3dzZXIgPSBCcm93c2VyUmVnaXN0cnlbYnJvd3Nlck5hbWVdO1xuXG4gICAgICAgIFdlYkNvbnRlbnRzTm90aWZpZXJzLmRpc3BhdGNoRXZlbnQoQnJvd3NlckFwcEV2ZW50LkNPTkZJR1VSRV9XSU5ET1csIGJyb3dzZXIpO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblJlbG9hZCgpIHtcblxuICAgICAgICBjb25zdCBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50SG9zdCgpO1xuXG4gICAgICAgIHRoaXMub25Mb2FkVVJMKGNvbnRlbnQuZ2V0VVJMKCkpO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2hvdWxkIGJlIGNhbGxlZCBldmVyeSB0aW1lIHdlIGNoYW5nZSB0aGUgaGlnaCBsZXZlbCBVUkwgYmVpbmcgdmlld2VkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHVybFxuICAgICAqL1xuICAgIHByaXZhdGUgb25XZWJ2aWV3TmF2aWdhdGVkKHVybDogc3RyaW5nLCBldmVudE5hbWU6IHN0cmluZykge1xuXG4gICAgICAgIGxvZy5kZWJ1ZyhcIndpdGhpbiBvbldlYnZpZXdOYXZpZ2F0ZWRcIik7XG5cbiAgICAgICAgaWYgKCEgaXNQcmVzZW50KHVybCkgfHwgaXNTcGxhc2hQYWdlKHVybCkpIHtcbiAgICAgICAgICAgIGxvZy5kZWJ1ZyhgU0tJUFBJTkcgb25XZWJ2aWV3TmF2aWdhdGVkOiAoJHtldmVudE5hbWV9OiAke3VybH1gKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxvZy5kZWJ1ZyhgSEFORExJTkcgb25XZWJ2aWV3TmF2aWdhdGVkOiAoJHtldmVudE5hbWV9OiAke3VybH1gKTtcblxuICAgICAgICB0aGlzLmNoYW5nZVVSTCh1cmwpO1xuICAgICAgICB0aGlzLmNyZWF0ZVByb2dyZXNzQmFyKCk7XG4gICAgICAgIHRoaXMuc2Nyb2xsUGFnZVRvVG9wKCk7XG4gICAgICAgIHRoaXMuc3RhcnRSZXNpemluZ1dlYnZpZXcoKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgc2Nyb2xsUGFnZVRvVG9wKCkge1xuICAgICAgICAvLyBzY3JvbGwgdG8gdGhlIHRvcCBvZiB0aGUgcGFnZS4uLlxuICAgICAgICBkb2N1bWVudC5ib2R5LnNjcm9sbFRvKDAsIDApO1xuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlUHJvZ3Jlc3NCYXIoKSB7XG4gICAgICAgIC8vIGNyZWF0ZSBhIHByb2dyZXNzIGJhciBzbyB3ZSBrbm93IHRoYXQgdGhlIHBhZ2UgaXMgbG9hZGluZ1xuXG4gICAgICAgIGlmICghIHRoaXMucHJvZ3Jlc3NCYXIpIHtcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIgPSBQcm9ncmVzc0Jhci5jcmVhdGUodHJ1ZSk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHByaXZhdGUgY2hhbmdlVVJMKHVybDogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3VybC1iYXJcIikhIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgIGVsZW1lbnQudmFsdWUgPSB1cmw7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGFydFJlc2l6aW5nV2VidmlldygpIHtcblxuICAgICAgICBjb25zdCBjb250ZW50SG9zdCA9IHRoaXMuZ2V0Q29udGVudEhvc3QoKTtcbiAgICAgICAgY29uc3QgYmFja2dyb3VuZEZyYW1lUmVzaXplclxuICAgICAgICAgICAgPSBuZXcgQmFja2dyb3VuZEZyYW1lUmVzaXplcihjb250ZW50SG9zdC5wYXJlbnRFbGVtZW50ISwgY29udGVudEhvc3QpO1xuXG4gICAgICAgIGJhY2tncm91bmRGcmFtZVJlc2l6ZXIuc3RhcnQoKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgcmVmcmVzaFRpdGxlKGV2ZW50TmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnRIb3N0ID0gdGhpcy5nZXRDb250ZW50SG9zdCgpO1xuICAgICAgICBkb2N1bWVudC50aXRsZSA9IGNvbnRlbnRIb3N0LmdldFRpdGxlKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRDb250ZW50SG9zdCgpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKSEgYXMgRWxlY3Ryb24uV2Vidmlld1RhZztcbiAgICB9XG5cbn1cblxuZnVuY3Rpb24gaXNTcGxhc2hQYWdlKHVybDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHVybC5lbmRzV2l0aCgnL2FwcHMvYnJvd3Nlci9zcGxhc2guaHRtbCcpO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5hdmlnYXRpb25FdmVudCB7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgVVJMIGF0IHRoZSB0aW1lIG9mIG5hdmlnYXRpb24uXG4gICAgICovXG4gICAgcmVhZG9ubHkgdXJsOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdHlwZSBvZiBuYXZpZ2F0aW9uIChzdGFydCBvciBzdG9wIGxvYWRpbmcpLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHR5cGU6IE5hdmlnYXRpb25FdmVudFR5cGU7XG5cbn1cblxuZXhwb3J0IHR5cGUgTmF2aWdhdGlvbkV2ZW50VHlwZSA9ICdkaWQtc3RhcnQtbG9hZGluZycgfCAnZGlkLXN0b3AtbG9hZGluZyc7XG5cbmV4cG9ydCBuYW1lc3BhY2UgVHJpZ2dlckJyb3dzZXJMb2FkIHtcblxuICAgIGV4cG9ydCBjb25zdCBNRVNTQUdFX1RZUEUgPSAndHJpZ2dlci1icm93c2VyLWxvYWQtdXJsJztcblxuICAgIGV4cG9ydCBpbnRlcmZhY2UgTWVzc2FnZSB7XG4gICAgICAgIHR5cGU6IHN0cmluZztcbiAgICAgICAgdXJsOiBzdHJpbmc7XG4gICAgfVxuXG59XG4iXX0=