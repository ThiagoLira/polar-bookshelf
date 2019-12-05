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
Object.defineProperty(exports, "__esModule", { value: true });
const Logger_1 = require("polar-shared/src/logger/Logger");
const StandardWebContentsDriver_1 = require("./StandardWebContentsDriver");
const ResourcePaths_1 = require("../../electron/webresource/ResourcePaths");
const Preconditions_1 = require("polar-shared/src/Preconditions");
const BrowserWindows_1 = require("../BrowserWindows");
const electron_1 = require("electron");
const Functions_1 = require("polar-shared/src/util/Functions");
const WebContentsNotifier_1 = require("../../electron/web_contents_notifier/WebContentsNotifier");
const BrowserAppEvent_1 = require("../../apps/browser/BrowserAppEvent");
const BrowserProfiles_1 = require("../BrowserProfiles");
const log = Logger_1.Logger.create();
class AbstractWebviewWebContentsDriver extends StandardWebContentsDriver_1.StandardWebContentsDriver {
    constructor(browserProfile, appPath) {
        super(browserProfile);
        this.appPath = appPath;
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.doInit();
            yield this.doInitWebview();
        });
    }
    waitForWebview() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(resolve => {
                this.browserWindow.webContents.once('did-attach-webview', (event, newWebContents) => {
                    resolve(newWebContents);
                });
            });
        });
    }
    progressUpdated(event) {
    }
    doInit() {
        return __awaiter(this, void 0, void 0, function* () {
            this.browserWindowOptions = BrowserWindows_1.BrowserWindows.toBrowserWindowOptions(this.browserProfile);
            const hostBrowserWindowOptions = this.computeHostBrowserWindowOptions();
            log.info("Using hostBrowserWindowOptions: ", hostBrowserWindowOptions);
            this.browserWindow = new electron_1.BrowserWindow(hostBrowserWindowOptions);
            this.webContents = this.browserWindow.webContents;
            const hostBrowserView = new HostBrowserView(this, this.browserWindow);
            const guestBrowserView = new GuestBrowserView(this, this.browserWindow);
            this.browserView =
                new DelegatedBrowserView([hostBrowserView, guestBrowserView]);
            WebContentsNotifier_1.WebContentsNotifier.on(this.browserWindow.webContents, BrowserAppEvent_1.BrowserAppEvent.PROVIDE_URL, (event) => {
                const link = event.message;
                log.info("Got link for navigation: " + link);
                this.browserProfile.navigation.navigated.dispatchEvent({ link });
            });
            WebContentsNotifier_1.WebContentsNotifier.on(this.browserWindow.webContents, BrowserAppEvent_1.BrowserAppEvent.TRIGGER_CAPTURE, (event) => {
                log.info("Got content capture click");
                this.browserProfile.navigation.captured.dispatchEvent({});
            });
            WebContentsNotifier_1.WebContentsNotifier.on(this.browserWindow.webContents, BrowserAppEvent_1.BrowserAppEvent.CONFIGURE_WINDOW, (event) => {
                const browser = event.message;
                log.info("Changing browser to: ", browser);
                const navigation = this.browserProfile.navigation;
                this.browserProfile = BrowserProfiles_1.BrowserProfiles.toBrowserProfile(browser, this.browserProfile.profile);
                this.browserProfile =
                    Object.freeze(Object.assign({}, this.browserProfile, { navigation }));
                this.browserWindowOptions = this.computeHostBrowserWindowOptions();
                log.info("Changing browser profile to: ", this.browserProfile);
                this.browserView.configure(this.browserProfile)
                    .catch((err) => log.error("Unable to configure: ", err));
            });
            this.initReactor();
        });
    }
    handleConfigureWindow() {
        return __awaiter(this, void 0, void 0, function* () {
            log.info("Changing browser profile to: ", this.browserProfile);
            yield StandardWebContentsDriver_1.StandardWebContentsDriver.configureWebContents(this.webContents, this.browserProfile);
            yield this.doInitGuestWebviewDimensions();
        });
    }
    doInitWebview() {
        return __awaiter(this, void 0, void 0, function* () {
            const window = Preconditions_1.notNull(this.browserWindow);
            const resourceURL = ResourcePaths_1.ResourcePaths.resourceURLFromRelativeURL(this.appPath);
            yield window.loadURL(resourceURL);
            this.webContents = yield this.waitForWebview();
            yield this.initWebContents(this.browserWindow, this.webContents, this.browserWindowOptions);
            yield this.doInitGuestWebviewDimensions();
        });
    }
    computeHostBrowserWindowOptions() {
        const browserWindowOptions = BrowserWindows_1.BrowserWindows.toBrowserWindowOptions(this.browserProfile);
        if (this.browserProfile.hosted) {
            browserWindowOptions.width = Preconditions_1.notNull(browserWindowOptions.width) * 1.35;
        }
        browserWindowOptions.height = Math.round(Preconditions_1.notNull(browserWindowOptions.width) * (11 / 8.5));
        browserWindowOptions.minHeight = (browserWindowOptions.height / 2);
        browserWindowOptions.enableLargerThanScreen = false;
        return browserWindowOptions;
    }
    getBrowserWindow() {
        return this.browserWindow;
    }
    doInitGuestWebviewDimensions() {
        return __awaiter(this, void 0, void 0, function* () {
            const window = Preconditions_1.notNull(this.browserWindow);
            function setWebviewDimensions(browserWindowOptions) {
                const querySelector = document.querySelector('webview');
                querySelector.style.height = `${browserWindowOptions.height}px`;
                querySelector.style.width = `${browserWindowOptions.width}px`;
            }
            yield window.webContents.executeJavaScript(Functions_1.Functions.functionToScript(setWebviewDimensions, this.browserWindowOptions));
        });
    }
}
exports.AbstractWebviewWebContentsDriver = AbstractWebviewWebContentsDriver;
class DelegatedBrowserView {
    constructor(delegates) {
        this.delegates = delegates;
    }
    configure(browserProfile) {
        return __awaiter(this, void 0, void 0, function* () {
            for (const delegate of this.delegates) {
                delegate.configure(browserProfile)
                    .catch(err => log.error("Unable to configure for browser profile: ", browserProfile));
            }
        });
    }
}
class HostBrowserView {
    constructor(driver, window) {
        this.driver = driver;
        this.window = window;
    }
    configure(browserProfile) {
        return __awaiter(this, void 0, void 0, function* () {
            this.browserProfile = browserProfile;
            this.browserWindowOptions = BrowserWindows_1.BrowserWindows.toBrowserWindowOptions(this.browserProfile);
            yield this.doInitGuestWebviewDimensions();
            this.changeWindowSize();
        });
    }
    doInitGuestWebviewDimensions() {
        return __awaiter(this, void 0, void 0, function* () {
            const window = Preconditions_1.notNull(this.window);
            function setWebviewDimensions(browserWindowOptions) {
                const querySelector = document.querySelector('webview');
                querySelector.style.height = `${browserWindowOptions.height}px`;
                querySelector.style.width = `${browserWindowOptions.width}px`;
            }
            const script = Functions_1.Functions.functionToScript(setWebviewDimensions, this.browserWindowOptions);
            yield this.window.webContents.executeJavaScript(script);
        });
    }
    changeWindowSize() {
        const width = this.browserWindowOptions.width + 50;
        const height = this.window.getSize()[1];
        this.window.setSize(width, height);
    }
}
class GuestBrowserView {
    constructor(driver, window) {
        this.nrConfigured = 0;
        this.driver = driver;
        this.window = window;
        this.waitForWebContents()
            .then((webContents) => {
            this.webContents = webContents;
        })
            .catch(err => log.error("Unable to get guest webview: ", err));
    }
    configure(browserProfile) {
        return __awaiter(this, void 0, void 0, function* () {
            this.browserProfile = browserProfile;
            this.browserWindowOptions = BrowserWindows_1.BrowserWindows.toBrowserWindowOptions(this.browserProfile);
            yield StandardWebContentsDriver_1.StandardWebContentsDriver.configureWebContents(this.webContents, browserProfile);
            if (this.nrConfigured > 0) {
                log.info("Reloading page after configure");
                this.webContents.reload();
            }
            ++this.nrConfigured;
        });
    }
    waitForWebContents() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(resolve => {
                this.window.webContents.once('did-attach-webview', (event, newWebContents) => {
                    resolve(newWebContents);
                });
            });
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWJzdHJhY3RXZWJ2aWV3V2ViQ29udGVudHNEcml2ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJBYnN0cmFjdFdlYnZpZXdXZWJDb250ZW50c0RyaXZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJEQUFzRDtBQUN0RCwyRUFBc0U7QUFDdEUsNEVBQXVFO0FBQ3ZFLGtFQUF1RDtBQUN2RCxzREFBaUQ7QUFDakQsdUNBQXVDO0FBQ3ZDLCtEQUEwRDtBQUcxRCxrR0FBNkY7QUFFN0Ysd0VBQW1FO0FBRW5FLHdEQUFtRDtBQUduRCxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFNNUIsTUFBc0IsZ0NBQWlDLFNBQVEscURBQXlCO0lBUXBGLFlBQXNCLGNBQThCLEVBQUUsT0FBZTtRQUNqRSxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDM0IsQ0FBQztJQUVZLElBQUk7O1lBRWIsTUFBTSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFJcEIsTUFBTSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFFL0IsQ0FBQztLQUFBO0lBRWUsY0FBYzs7WUFFMUIsT0FBTyxJQUFJLE9BQU8sQ0FBYyxPQUFPLENBQUMsRUFBRTtnQkFDdEMsSUFBSSxDQUFDLGFBQWMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUMsS0FBSyxFQUFFLGNBQTJCLEVBQUUsRUFBRTtvQkFDOUYsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO2dCQUM1QixDQUFDLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQyxDQUFDO1FBRVAsQ0FBQztLQUFBO0lBR00sZUFBZSxDQUFDLEtBQThCO0lBRXJELENBQUM7SUFPZSxNQUFNOztZQUVsQixJQUFJLENBQUMsb0JBQW9CLEdBQUcsK0JBQWMsQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENB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LFdBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUM5QjtZQUVELEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUN4QixDQUFDO0tBQUE7SUFFYSxrQkFBa0I7O1lBRTVCLE9BQU8sSUFBSSxPQUFPLENBQWMsT0FBTyxDQUFDLEVBQUU7Z0JBQ3RDLElBQUksQ0FBQyxNQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLEtBQUssRUFBRSxjQUEyQixFQUFFLEVBQUU7b0JBQ3ZGLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztnQkFDNUIsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDLENBQUMsQ0FBQztRQUVQLENBQUM7S0FBQTtDQUVKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtMb2dnZXJ9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge1N0YW5kYXJkV2ViQ29udGVudHNEcml2ZXJ9IGZyb20gJy4vU3RhbmRhcmRXZWJDb250ZW50c0RyaXZlcic7XG5pbXBvcnQge1Jlc291cmNlUGF0aHN9IGZyb20gJy4uLy4uL2VsZWN0cm9uL3dlYnJlc291cmNlL1Jlc291cmNlUGF0aHMnO1xuaW1wb3J0IHtub3ROdWxsfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL1ByZWNvbmRpdGlvbnMnO1xuaW1wb3J0IHtCcm93c2VyV2luZG93c30gZnJvbSAnLi4vQnJvd3NlcldpbmRvd3MnO1xuaW1wb3J0IHtCcm93c2VyV2luZG93fSBmcm9tIFwiZWxlY3Ryb25cIjtcbmltcG9ydCB7RnVuY3Rpb25zfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvRnVuY3Rpb25zJztcbmltcG9ydCB7UGVuZGluZ1dlYlJlcXVlc3RzRXZlbnR9IGZyb20gJy4uLy4uL3dlYnJlcXVlc3RzL1BlbmRpbmdXZWJSZXF1ZXN0c0xpc3RlbmVyJztcbmltcG9ydCB7QnJvd3NlclByb2ZpbGV9IGZyb20gJy4uL0Jyb3dzZXJQcm9maWxlJztcbmltcG9ydCB7V2ViQ29udGVudHNOb3RpZmllcn0gZnJvbSAnLi4vLi4vZWxlY3Ryb24vd2ViX2NvbnRlbnRzX25vdGlmaWVyL1dlYkNvbnRlbnRzTm90aWZpZXInO1xuaW1wb3J0IHtNYWluSVBDRXZlbnR9IGZyb20gJy4uLy4uL2VsZWN0cm9uL2ZyYW1ld29yay9JUENNYWluUHJvbWlzZXMnO1xuaW1wb3J0IHtCcm93c2VyQXBwRXZlbnR9IGZyb20gJy4uLy4uL2FwcHMvYnJvd3Nlci9Ccm93c2VyQXBwRXZlbnQnO1xuaW1wb3J0IHtCcm93c2VyfSBmcm9tICdwb2xhci1jb250ZW50LWNhcHR1cmUvc3JjL2NhcHR1cmUvQnJvd3Nlcic7XG5pbXBvcnQge0Jyb3dzZXJQcm9maWxlc30gZnJvbSAnLi4vQnJvd3NlclByb2ZpbGVzJztcbmltcG9ydCBXZWJDb250ZW50cyA9IEVsZWN0cm9uLldlYkNvbnRlbnRzO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbi8qKlxuICogQSBkcml2ZXIgd2hpY2ggY3JlYXRlcyBhbiBhcHAgdGhhdCB1c2VzIGEgPHdlYnZpZXc+IGhvc3QgY29udHJvbCBmb3Igb3VyXG4gKiBjb250ZW50LlxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RXZWJ2aWV3V2ViQ29udGVudHNEcml2ZXIgZXh0ZW5kcyBTdGFuZGFyZFdlYkNvbnRlbnRzRHJpdmVyIHtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgYXBwUGF0aDogc3RyaW5nO1xuXG4gICAgcHJpdmF0ZSBicm93c2VyV2luZG93T3B0aW9ucz86IEVsZWN0cm9uLkJyb3dzZXJXaW5kb3dDb25zdHJ1Y3Rvck9wdGlvbnM7XG5cbiAgICBwcml2YXRlIGJyb3dzZXJWaWV3PzogQnJvd3NlclZpZXc7XG5cbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IoYnJvd3NlclByb2ZpbGU6IEJyb3dzZXJQcm9maWxlLCBhcHBQYXRoOiBzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIoYnJvd3NlclByb2ZpbGUpO1xuICAgICAgICB0aGlzLmFwcFBhdGggPSBhcHBQYXRoO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBpbml0KCkge1xuXG4gICAgICAgIGF3YWl0IHRoaXMuZG9Jbml0KCk7XG5cbiAgICAgICAgLy8gVE9ETzogdGhpcyBtaWdodCBhY3R1YWxseSBOT1QgYmUgbmVlZGVkIG5vdyBvciB3ZSBjb3VsZCByZWZhY3RvclxuICAgICAgICAvLyB0aGlzIHRvIGxvYWQgYXMgcGFydCBvZiB0aGUgR3Vlc3RCcm93c2VyVmlldyBzZXR1cC4uXG4gICAgICAgIGF3YWl0IHRoaXMuZG9Jbml0V2VidmlldygpO1xuXG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGFzeW5jIHdhaXRGb3JXZWJ2aWV3KCk6IFByb21pc2U8V2ViQ29udGVudHM+IHtcblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8V2ViQ29udGVudHM+KHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgdGhpcy5icm93c2VyV2luZG93IS53ZWJDb250ZW50cy5vbmNlKCdkaWQtYXR0YWNoLXdlYnZpZXcnLCAoZXZlbnQsIG5ld1dlYkNvbnRlbnRzOiBXZWJDb250ZW50cykgPT4ge1xuICAgICAgICAgICAgICAgIHJlc29sdmUobmV3V2ViQ29udGVudHMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG5cbiAgICBwdWJsaWMgcHJvZ3Jlc3NVcGRhdGVkKGV2ZW50OiBQZW5kaW5nV2ViUmVxdWVzdHNFdmVudCk6IHZvaWQge1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogZG9Jbml0IG1ldGhvZCBmb3IgY3JlYXRpbmcgdGhlIHdpbmRvdyB3aGljaCBkaWZmZXJzIGZyb20gdGhlXG4gICAgICogU3RhbmRhcmRXZWJDb250ZW50c0RyaXZlciBpbiB0aGF0IHdlIGhhdmUgdG8gaGF2ZSB0aGUgcGFyZW50IHdpbmRvd1xuICAgICAqIGEgcmVhc29uYWJseSBicm93c2VyIGhlaWdodCBhbmQgdGhlIHdlYnZpZXcgY29udGVudCB0aGUgQUNUVUFMIGhlaWdodC5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgYXN5bmMgZG9Jbml0KCkge1xuXG4gICAgICAgIHRoaXMuYnJvd3NlcldpbmRvd09wdGlvbnMgPSBCcm93c2VyV2luZG93cy50b0Jyb3dzZXJXaW5kb3dPcHRpb25zKHRoaXMuYnJvd3NlclByb2ZpbGUpO1xuXG4gICAgICAgIGNvbnN0IGhvc3RCcm93c2VyV2luZG93T3B0aW9ucyA9IHRoaXMuY29tcHV0ZUhvc3RCcm93c2VyV2luZG93T3B0aW9ucygpO1xuXG4gICAgICAgIGxvZy5pbmZvKFwiVXNpbmcgaG9zdEJyb3dzZXJXaW5kb3dPcHRpb25zOiBcIiwgaG9zdEJyb3dzZXJXaW5kb3dPcHRpb25zKTtcblxuICAgICAgICB0aGlzLmJyb3dzZXJXaW5kb3cgPSBuZXcgQnJvd3NlcldpbmRvdyhob3N0QnJvd3NlcldpbmRvd09wdGlvbnMpO1xuICAgICAgICB0aGlzLndlYkNvbnRlbnRzID0gdGhpcy5icm93c2VyV2luZG93LndlYkNvbnRlbnRzO1xuXG4gICAgICAgIGNvbnN0IGhvc3RCcm93c2VyVmlldyA9IG5ldyBIb3N0QnJvd3NlclZpZXcodGhpcywgdGhpcy5icm93c2VyV2luZG93KTtcbiAgICAgICAgY29uc3QgZ3Vlc3RCcm93c2VyVmlldyA9IG5ldyBHdWVzdEJyb3dzZXJWaWV3KHRoaXMsIHRoaXMuYnJvd3NlcldpbmRvdyk7XG5cbiAgICAgICAgdGhpcy5icm93c2VyVmlldyA9XG4gICAgICAgICAgICBuZXcgRGVsZWdhdGVkQnJvd3NlclZpZXcoW2hvc3RCcm93c2VyVmlldywgZ3Vlc3RCcm93c2VyVmlld10pO1xuXG4gICAgICAgIFdlYkNvbnRlbnRzTm90aWZpZXIub24odGhpcy5icm93c2VyV2luZG93LndlYkNvbnRlbnRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJyb3dzZXJBcHBFdmVudC5QUk9WSURFX1VSTCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZXZlbnQ6IE1haW5JUENFdmVudDxzdHJpbmc+KSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IGxpbmsgPSBldmVudC5tZXNzYWdlO1xuXG4gICAgICAgICAgICBsb2cuaW5mbyhcIkdvdCBsaW5rIGZvciBuYXZpZ2F0aW9uOiBcIiArIGxpbmspO1xuICAgICAgICAgICAgdGhpcy5icm93c2VyUHJvZmlsZS5uYXZpZ2F0aW9uLm5hdmlnYXRlZC5kaXNwYXRjaEV2ZW50KHtsaW5rfSk7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgV2ViQ29udGVudHNOb3RpZmllci5vbih0aGlzLmJyb3dzZXJXaW5kb3cud2ViQ29udGVudHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQnJvd3NlckFwcEV2ZW50LlRSSUdHRVJfQ0FQVFVSRSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZXZlbnQ6IE1haW5JUENFdmVudDx2b2lkPikgPT4ge1xuXG4gICAgICAgICAgIGxvZy5pbmZvKFwiR290IGNvbnRlbnQgY2FwdHVyZSBjbGlja1wiKTtcbiAgICAgICAgICAgdGhpcy5icm93c2VyUHJvZmlsZS5uYXZpZ2F0aW9uLmNhcHR1cmVkLmRpc3BhdGNoRXZlbnQoe30pO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIFdlYkNvbnRlbnRzTm90aWZpZXIub24odGhpcy5icm93c2VyV2luZG93LndlYkNvbnRlbnRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJyb3dzZXJBcHBFdmVudC5DT05GSUdVUkVfV0lORE9XLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChldmVudDogTWFpbklQQ0V2ZW50PEJyb3dzZXI+KSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IGJyb3dzZXIgPSBldmVudC5tZXNzYWdlO1xuXG4gICAgICAgICAgICBsb2cuaW5mbyhcIkNoYW5naW5nIGJyb3dzZXIgdG86IFwiLCBicm93c2VyKTtcblxuICAgICAgICAgICAgY29uc3QgbmF2aWdhdGlvbiA9IHRoaXMuYnJvd3NlclByb2ZpbGUubmF2aWdhdGlvbjtcbiAgICAgICAgICAgIHRoaXMuYnJvd3NlclByb2ZpbGUgPSBCcm93c2VyUHJvZmlsZXMudG9Ccm93c2VyUHJvZmlsZShicm93c2VyLCB0aGlzLmJyb3dzZXJQcm9maWxlLnByb2ZpbGUpO1xuICAgICAgICAgICAgLy8gbmVlZCB0byBwcmVzZXJ2ZSB0aGUgbmF2aWdhdGlvbiBvYmplY3Qgc28gdGhhdCBub3RpZmljYXRpb25zXG4gICAgICAgICAgICAvLyB3b3JrIHByb3Blcmx5LlxuICAgICAgICAgICAgdGhpcy5icm93c2VyUHJvZmlsZSA9XG4gICAgICAgICAgICAgICAgT2JqZWN0LmZyZWV6ZShcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5icm93c2VyUHJvZmlsZSwge25hdmlnYXRpb259KSk7XG5cbiAgICAgICAgICAgIHRoaXMuYnJvd3NlcldpbmRvd09wdGlvbnMgPSB0aGlzLmNvbXB1dGVIb3N0QnJvd3NlcldpbmRvd09wdGlvbnMoKTtcblxuICAgICAgICAgICAgbG9nLmluZm8oXCJDaGFuZ2luZyBicm93c2VyIHByb2ZpbGUgdG86IFwiLCB0aGlzLmJyb3dzZXJQcm9maWxlKTtcblxuICAgICAgICAgICAgdGhpcy5icm93c2VyVmlldyEuY29uZmlndXJlKHRoaXMuYnJvd3NlclByb2ZpbGUpXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnI6IEVycm9yKSA9PiBsb2cuZXJyb3IoXCJVbmFibGUgdG8gY29uZmlndXJlOiBcIiwgZXJyKSk7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5pbml0UmVhY3RvcigpO1xuXG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGFzeW5jIGhhbmRsZUNvbmZpZ3VyZVdpbmRvdygpIHtcblxuICAgICAgICBsb2cuaW5mbyhcIkNoYW5naW5nIGJyb3dzZXIgcHJvZmlsZSB0bzogXCIsIHRoaXMuYnJvd3NlclByb2ZpbGUpO1xuXG4gICAgICAgIGF3YWl0IFN0YW5kYXJkV2ViQ29udGVudHNEcml2ZXIuY29uZmlndXJlV2ViQ29udGVudHModGhpcy53ZWJDb250ZW50cyEsIHRoaXMuYnJvd3NlclByb2ZpbGUpO1xuICAgICAgICBhd2FpdCB0aGlzLmRvSW5pdEd1ZXN0V2Vidmlld0RpbWVuc2lvbnMoKTtcblxuICAgIH1cblxuICAgIHByb3RlY3RlZCBhc3luYyBkb0luaXRXZWJ2aWV3KCkge1xuXG4gICAgICAgIGNvbnN0IHdpbmRvdyA9IG5vdE51bGwodGhpcy5icm93c2VyV2luZG93KTtcblxuICAgICAgICAvLyBvay4uLiBub3cgdGhlIHBhZ2UgaXNuJ3Qgc2V0dXAgcHJvcGVybHkgYW5kIHdlIG5lZWQgdG8gbG9hZCB0aGUgYXBwXG4gICAgICAgIC8vIGFuZCB0aGVuIGFkanVzdCB0aGUgd2VidmlldyBwcm9wZXJseS5cblxuICAgICAgICBjb25zdCByZXNvdXJjZVVSTCA9IFJlc291cmNlUGF0aHMucmVzb3VyY2VVUkxGcm9tUmVsYXRpdmVVUkwodGhpcy5hcHBQYXRoKTtcblxuICAgICAgICBhd2FpdCB3aW5kb3cubG9hZFVSTChyZXNvdXJjZVVSTCk7XG4gICAgICAgICAgICAvLyAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XG5cbiAgICAgICAgLy8gVEhJUyBpcyBvdXIgZ3Vlc3Qgd2VidmlldyB0aGF0IHdlIHNob3VsZCBiZSB1c2luZy5cbiAgICAgICAgdGhpcy53ZWJDb250ZW50cyA9IGF3YWl0IHRoaXMud2FpdEZvcldlYnZpZXcoKTtcblxuICAgICAgICBhd2FpdCB0aGlzLmluaXRXZWJDb250ZW50cyh0aGlzLmJyb3dzZXJXaW5kb3chLCB0aGlzLndlYkNvbnRlbnRzLCB0aGlzLmJyb3dzZXJXaW5kb3dPcHRpb25zISk7XG5cbiAgICAgICAgLy8gYXdhaXQgdGhpcy5jb25maWd1cmVXZWJDb250ZW50cyh0aGlzLndlYkNvbnRlbnRzKTtcblxuICAgICAgICBhd2FpdCB0aGlzLmRvSW5pdEd1ZXN0V2Vidmlld0RpbWVuc2lvbnMoKTtcblxuICAgIH1cblxuICAgIHByb3RlY3RlZCBjb21wdXRlSG9zdEJyb3dzZXJXaW5kb3dPcHRpb25zKCkge1xuXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgYnJvd3NlciB3aW5kb3cuXG4gICAgICAgIGNvbnN0IGJyb3dzZXJXaW5kb3dPcHRpb25zID0gQnJvd3NlcldpbmRvd3MudG9Ccm93c2VyV2luZG93T3B0aW9ucyh0aGlzLmJyb3dzZXJQcm9maWxlKTtcblxuICAgICAgICBpZiAodGhpcy5icm93c2VyUHJvZmlsZS5ob3N0ZWQpIHtcbiAgICAgICAgICAgIC8vIGluY3JlYXNlIG91ciBob3N0ZWQgYnJvd3NlciBzbGlnaHRseVxuICAgICAgICAgICAgYnJvd3NlcldpbmRvd09wdGlvbnMud2lkdGggPSBub3ROdWxsKGJyb3dzZXJXaW5kb3dPcHRpb25zLndpZHRoKSAqIDEuMzU7XG4gICAgICAgIH1cblxuICAgICAgICBicm93c2VyV2luZG93T3B0aW9ucy5oZWlnaHQgPSBNYXRoLnJvdW5kKG5vdE51bGwoYnJvd3NlcldpbmRvd09wdGlvbnMud2lkdGgpICogKDExIC8gOC41KSk7XG4gICAgICAgIGJyb3dzZXJXaW5kb3dPcHRpb25zLm1pbkhlaWdodCA9IChicm93c2VyV2luZG93T3B0aW9ucy5oZWlnaHQgLyAyKTtcblxuICAgICAgICAvLyBUT0RPOiBtYWtlIHRoaXMgcGFydCBvZiB0aGUgcHJvZmlsZS5cbiAgICAgICAgYnJvd3NlcldpbmRvd09wdGlvbnMuZW5hYmxlTGFyZ2VyVGhhblNjcmVlbiA9IGZhbHNlO1xuICAgICAgICAvLyBicm93c2VyV2luZG93T3B0aW9ucy53ZWJQcmVmZXJlbmNlcyEuem9vbUZhY3RvciA9IDEuMFxuXG4gICAgICAgIHJldHVybiBicm93c2VyV2luZG93T3B0aW9ucztcblxuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXRCcm93c2VyV2luZG93KCk6IEJyb3dzZXJXaW5kb3cgfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5icm93c2VyV2luZG93O1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgZG9Jbml0R3Vlc3RXZWJ2aWV3RGltZW5zaW9ucygpIHtcblxuICAgICAgICBjb25zdCB3aW5kb3cgPSBub3ROdWxsKHRoaXMuYnJvd3NlcldpbmRvdyk7XG5cbiAgICAgICAgLy8gQEVsZWN0cm9uUmVuZGVyZXJDb250ZXh0XG4gICAgICAgIC8vIG5vaW5zcGVjdGlvbiBUc0xpbnQ6IG5vLXNoYWRvd2VkLXZhcmlhYmxlXG4gICAgICAgIGZ1bmN0aW9uIHNldFdlYnZpZXdEaW1lbnNpb25zKGJyb3dzZXJXaW5kb3dPcHRpb25zOiBFbGVjdHJvbi5Ccm93c2VyV2luZG93Q29uc3RydWN0b3JPcHRpb25zKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5U2VsZWN0b3IgPSA8SFRNTEVsZW1lbnQ+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3dlYnZpZXcnKSE7XG5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiYnJvd3NlcldpbmRvd09wdGlvbnM6IFwiLCBicm93c2VyV2luZG93T3B0aW9ucyk7XG5cbiAgICAgICAgICAgIHF1ZXJ5U2VsZWN0b3Iuc3R5bGUuaGVpZ2h0ID0gYCR7YnJvd3NlcldpbmRvd09wdGlvbnMuaGVpZ2h0fXB4YDtcbiAgICAgICAgICAgIHF1ZXJ5U2VsZWN0b3Iuc3R5bGUud2lkdGggPSBgJHticm93c2VyV2luZG93T3B0aW9ucy53aWR0aH1weGA7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGF3YWl0IHdpbmRvdy53ZWJDb250ZW50cy5leGVjdXRlSmF2YVNjcmlwdChGdW5jdGlvbnMuZnVuY3Rpb25Ub1NjcmlwdChzZXRXZWJ2aWV3RGltZW5zaW9ucywgdGhpcy5icm93c2VyV2luZG93T3B0aW9ucykpO1xuXG4gICAgfVxuXG59XG5cbmludGVyZmFjZSBCcm93c2VyVmlldyB7XG4gICAgY29uZmlndXJlKGJyb3dzZXJQcm9maWxlOiBCcm93c2VyUHJvZmlsZSk6IFByb21pc2U8dm9pZD47XG59XG5cbmNsYXNzIERlbGVnYXRlZEJyb3dzZXJWaWV3IGltcGxlbWVudHMgQnJvd3NlclZpZXcge1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBkZWxlZ2F0ZXM6IEJyb3dzZXJWaWV3W107XG5cbiAgICBjb25zdHJ1Y3RvcihkZWxlZ2F0ZXM6IEJyb3dzZXJWaWV3W10pIHtcbiAgICAgICAgdGhpcy5kZWxlZ2F0ZXMgPSBkZWxlZ2F0ZXM7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGNvbmZpZ3VyZShicm93c2VyUHJvZmlsZTogQnJvd3NlclByb2ZpbGUpOiBQcm9taXNlPHZvaWQ+IHtcblxuICAgICAgICBmb3IgKGNvbnN0IGRlbGVnYXRlIG9mIHRoaXMuZGVsZWdhdGVzKSB7XG5cbiAgICAgICAgICAgIGRlbGVnYXRlLmNvbmZpZ3VyZShicm93c2VyUHJvZmlsZSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IGxvZy5lcnJvcihcIlVuYWJsZSB0byBjb25maWd1cmUgZm9yIGJyb3dzZXIgcHJvZmlsZTogXCIsIGJyb3dzZXJQcm9maWxlKSk7XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG59XG5cbmNsYXNzIEhvc3RCcm93c2VyVmlldyBpbXBsZW1lbnRzIEJyb3dzZXJWaWV3IHtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgZHJpdmVyOiBBYnN0cmFjdFdlYnZpZXdXZWJDb250ZW50c0RyaXZlcjtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHdpbmRvdzogQnJvd3NlcldpbmRvdztcblxuICAgIHByaXZhdGUgYnJvd3NlclByb2ZpbGU/OiBCcm93c2VyUHJvZmlsZTtcbiAgICBwcml2YXRlIGJyb3dzZXJXaW5kb3dPcHRpb25zPzogRWxlY3Ryb24uQnJvd3NlcldpbmRvd0NvbnN0cnVjdG9yT3B0aW9ucztcblxuICAgIGNvbnN0cnVjdG9yKGRyaXZlcjogQWJzdHJhY3RXZWJ2aWV3V2ViQ29udGVudHNEcml2ZXIsXG4gICAgICAgICAgICAgICAgd2luZG93OiBFbGVjdHJvbi5Ccm93c2VyV2luZG93KSB7XG4gICAgICAgIHRoaXMuZHJpdmVyID0gZHJpdmVyO1xuICAgICAgICB0aGlzLndpbmRvdyA9IHdpbmRvdztcblxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBjb25maWd1cmUoYnJvd3NlclByb2ZpbGU6IEJyb3dzZXJQcm9maWxlKSB7XG5cbiAgICAgICAgdGhpcy5icm93c2VyUHJvZmlsZSA9IGJyb3dzZXJQcm9maWxlO1xuICAgICAgICB0aGlzLmJyb3dzZXJXaW5kb3dPcHRpb25zID0gQnJvd3NlcldpbmRvd3MudG9Ccm93c2VyV2luZG93T3B0aW9ucyh0aGlzLmJyb3dzZXJQcm9maWxlISk7XG5cbiAgICAgICAgYXdhaXQgdGhpcy5kb0luaXRHdWVzdFdlYnZpZXdEaW1lbnNpb25zKCk7XG4gICAgICAgIHRoaXMuY2hhbmdlV2luZG93U2l6ZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoaXMgY29uZmlndXJlcyB0aGUgPHdlYnZpZXc+IGVsZW1lbnQgd2lkdGggYW5kIGhlaWdodCBwcm9wZXJseS5cbiAgICAgKi9cbiAgICBwcml2YXRlIGFzeW5jIGRvSW5pdEd1ZXN0V2Vidmlld0RpbWVuc2lvbnMoKSB7XG5cbiAgICAgICAgY29uc3Qgd2luZG93ID0gbm90TnVsbCh0aGlzLndpbmRvdyk7XG5cbiAgICAgICAgLy8gY2hhbmdlIHRoZSBzaXplIG9mIHRoZSA8d2Vidmlldz4gZWxlbWVudFxuXG4gICAgICAgIC8vIEBFbGVjdHJvblJlbmRlcmVyQ29udGV4dFxuICAgICAgICAvLyBub2luc3BlY3Rpb24gVHNMaW50OiBuby1zaGFkb3dlZC12YXJpYWJsZVxuICAgICAgICBmdW5jdGlvbiBzZXRXZWJ2aWV3RGltZW5zaW9ucyhicm93c2VyV2luZG93T3B0aW9uczogRWxlY3Ryb24uQnJvd3NlcldpbmRvd0NvbnN0cnVjdG9yT3B0aW9ucykge1xuXG4gICAgICAgICAgICBjb25zdCBxdWVyeVNlbGVjdG9yID0gPEhUTUxFbGVtZW50PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd3ZWJ2aWV3JykhO1xuXG4gICAgICAgICAgICBxdWVyeVNlbGVjdG9yLnN0eWxlLmhlaWdodCA9IGAke2Jyb3dzZXJXaW5kb3dPcHRpb25zLmhlaWdodH1weGA7XG4gICAgICAgICAgICBxdWVyeVNlbGVjdG9yLnN0eWxlLndpZHRoID0gYCR7YnJvd3NlcldpbmRvd09wdGlvbnMud2lkdGh9cHhgO1xuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzY3JpcHQgPSBGdW5jdGlvbnMuZnVuY3Rpb25Ub1NjcmlwdChzZXRXZWJ2aWV3RGltZW5zaW9ucywgdGhpcy5icm93c2VyV2luZG93T3B0aW9ucyk7XG5cbiAgICAgICAgYXdhaXQgdGhpcy53aW5kb3cud2ViQ29udGVudHMuZXhlY3V0ZUphdmFTY3JpcHQoc2NyaXB0KTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgY2hhbmdlV2luZG93U2l6ZSgpIHtcblxuICAgICAgICBjb25zdCB3aWR0aCA9IHRoaXMuYnJvd3NlcldpbmRvd09wdGlvbnMhLndpZHRoISArIDUwO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSB0aGlzLndpbmRvdy5nZXRTaXplKClbMV07XG5cbiAgICAgICAgdGhpcy53aW5kb3cuc2V0U2l6ZSh3aWR0aCwgaGVpZ2h0KTtcbiAgICB9XG5cblxufVxuXG5jbGFzcyBHdWVzdEJyb3dzZXJWaWV3IGltcGxlbWVudHMgQnJvd3NlclZpZXcge1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBkcml2ZXI6IEFic3RyYWN0V2Vidmlld1dlYkNvbnRlbnRzRHJpdmVyO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgd2luZG93OiBCcm93c2VyV2luZG93O1xuXG4gICAgcHJpdmF0ZSBicm93c2VyUHJvZmlsZT86IEJyb3dzZXJQcm9maWxlO1xuICAgIHByaXZhdGUgYnJvd3NlcldpbmRvd09wdGlvbnM/OiBFbGVjdHJvbi5Ccm93c2VyV2luZG93Q29uc3RydWN0b3JPcHRpb25zO1xuXG4gICAgcHJpdmF0ZSB3ZWJDb250ZW50cz86IFdlYkNvbnRlbnRzO1xuXG4gICAgLy8gdGhlIG51aW1iZXIgb2YgdGltZXMgdGhpcyBwYWdlIGhhcyBiZWVuIGNvbmZpZ3VyZWQuXG4gICAgcHJpdmF0ZSBuckNvbmZpZ3VyZWQgPSAwO1xuXG4gICAgY29uc3RydWN0b3IoZHJpdmVyOiBBYnN0cmFjdFdlYnZpZXdXZWJDb250ZW50c0RyaXZlcixcbiAgICAgICAgICAgICAgICB3aW5kb3c6IEVsZWN0cm9uLkJyb3dzZXJXaW5kb3cpIHtcblxuICAgICAgICB0aGlzLmRyaXZlciA9IGRyaXZlcjtcbiAgICAgICAgdGhpcy53aW5kb3cgPSB3aW5kb3c7XG5cbiAgICAgICAgdGhpcy53YWl0Rm9yV2ViQ29udGVudHMoKVxuICAgICAgICAgICAgLnRoZW4oKHdlYkNvbnRlbnRzKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy53ZWJDb250ZW50cyA9IHdlYkNvbnRlbnRzO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gbG9nLmVycm9yKFwiVW5hYmxlIHRvIGdldCBndWVzdCB3ZWJ2aWV3OiBcIiwgZXJyKSk7XG5cblxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBjb25maWd1cmUoYnJvd3NlclByb2ZpbGU6IEJyb3dzZXJQcm9maWxlKSB7XG5cbiAgICAgICAgdGhpcy5icm93c2VyUHJvZmlsZSA9IGJyb3dzZXJQcm9maWxlO1xuICAgICAgICB0aGlzLmJyb3dzZXJXaW5kb3dPcHRpb25zID0gQnJvd3NlcldpbmRvd3MudG9Ccm93c2VyV2luZG93T3B0aW9ucyh0aGlzLmJyb3dzZXJQcm9maWxlISk7XG5cbiAgICAgICAgLy8gdGhpcyBjb25maWd1cmVzIHRoZSBndWVzdCB3ZWIgY29udGVudHMgd2hpY2ggbG9hZHMgdGhlIHdlYnNpdGUgd2UncmVcbiAgICAgICAgLy8gY2FwdHVyaW5nIGFuZCB0ZWxscyBpdCBhYm91dCBicm93c2VyIGVtdWxhdGlvbiwgd2lkdGgsIGV0Yy5cbiAgICAgICAgYXdhaXQgU3RhbmRhcmRXZWJDb250ZW50c0RyaXZlci5jb25maWd1cmVXZWJDb250ZW50cyh0aGlzLndlYkNvbnRlbnRzISwgYnJvd3NlclByb2ZpbGUpO1xuXG4gICAgICAgIGlmICh0aGlzLm5yQ29uZmlndXJlZCA+IDApIHtcbiAgICAgICAgICAgIGxvZy5pbmZvKFwiUmVsb2FkaW5nIHBhZ2UgYWZ0ZXIgY29uZmlndXJlXCIpO1xuICAgICAgICAgICAgdGhpcy53ZWJDb250ZW50cyEucmVsb2FkKCk7XG4gICAgICAgIH1cblxuICAgICAgICArK3RoaXMubnJDb25maWd1cmVkO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgd2FpdEZvcldlYkNvbnRlbnRzKCkge1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxXZWJDb250ZW50cz4ocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICB0aGlzLndpbmRvdyEud2ViQ29udGVudHMub25jZSgnZGlkLWF0dGFjaC13ZWJ2aWV3JywgKGV2ZW50LCBuZXdXZWJDb250ZW50czogV2ViQ29udGVudHMpID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKG5ld1dlYkNvbnRlbnRzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgIH1cblxufVxuIl19