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
const electron_1 = require("electron");
const BrowserWindows_1 = require("../BrowserWindows");
const Logger_1 = require("polar-shared/src/logger/Logger");
const Optional_1 = require("polar-shared/src/util/ts/Optional");
const ContentCaptureFunctions_1 = require("../renderer/ContentCaptureFunctions");
const Functions_1 = require("polar-shared/src/util/Functions");
const Reactor_1 = require("../../reactor/Reactor");
const WebContentsPromises_1 = require("../../electron/framework/WebContentsPromises");
const AppLauncher_1 = require("../../apps/main/AppLauncher");
const PDFDownloadHandlers_1 = require("../PDFDownloadHandlers");
const log = Logger_1.Logger.create();
class StandardWebContentsDriver {
    constructor(browserProfile) {
        this.reactor = new Reactor_1.Reactor();
        this.browserProfile = browserProfile;
    }
    init(webContents) {
        return __awaiter(this, void 0, void 0, function* () {
            const browserWindowOptions = this.computeBrowserWindowOptions();
            yield this.doInit(browserWindowOptions);
        });
    }
    getWebContents() {
        return __awaiter(this, void 0, void 0, function* () {
            return Optional_1.Optional.of(this.webContents).get();
        });
    }
    destroy() {
        return __awaiter(this, void 0, void 0, function* () {
            log.info("Destroying window...");
            Optional_1.Optional.of(this.browserWindow)
                .map(browserWindow => {
                if (!browserWindow.isDestroyed()) {
                    browserWindow.close();
                }
            });
            log.info("Destroying window...done");
        });
    }
    loadURL(url, waitForFinishLoad = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const opts = {
                extraHeaders: `pragma: no-cache\nreferer: ${url}\n`,
                userAgent: this.browserProfile.userAgent
            };
            const result = WebContentsPromises_1.WebContentsPromises.once(this.webContents).didFinishLoad();
            yield this.webContents.loadURL(url, opts);
            if (waitForFinishLoad) {
                return result;
            }
            else {
                return Promise.resolve();
            }
        });
    }
    progressUpdated(event) {
    }
    addEventListener(eventName, eventListener) {
        this.reactor.addEventListener(eventName, eventListener);
    }
    computeBrowserWindowOptions() {
        return BrowserWindows_1.BrowserWindows.toBrowserWindowOptions(this.browserProfile);
    }
    doInit(browserWindowOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            log.info("Using browserWindowOptions: ", browserWindowOptions);
            const window = new electron_1.BrowserWindow(browserWindowOptions);
            yield this.initWebContents(window, window.webContents, browserWindowOptions);
            this.initReactor();
        });
    }
    initWebContents(browserWindow, webContents, browserWindowOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            this.browserWindow = browserWindow;
            this.webContents = webContents;
            yield this.initWebContentsEvents(webContents);
            if (!browserWindowOptions.show) {
                yield BrowserWindows_1.BrowserWindows.onceReadyToShow(browserWindow);
            }
            yield StandardWebContentsDriver.configureWebContents(webContents, this.browserProfile);
        });
    }
    initWebContentsEvents(webContents) {
        return __awaiter(this, void 0, void 0, function* () {
            const onDownloadedHandler = () => {
                this.destroy()
                    .catch(err => log.error(err));
            };
            const onDownloadHandler = () => {
                let rootWebContents = webContents;
                while (rootWebContents.hostWebContents) {
                    rootWebContents = rootWebContents.hostWebContents;
                }
                const browserWindowID = rootWebContents.id;
                log.info("Getting BrowserWindow from ID: " + browserWindowID);
                const browserWindow = electron_1.BrowserWindow.fromId(browserWindowID);
                if (browserWindow) {
                    browserWindow.close();
                }
                else {
                    log.warn("No browser window to clsoe");
                }
                AppLauncher_1.AppLauncher.launchRepositoryApp()
                    .catch(err => log.error(err));
            };
            PDFDownloadHandlers_1.PDFDownloadHandlers.create(webContents, () => onDownloadedHandler(), () => onDownloadHandler());
            webContents.on('dom-ready', (e) => {
                log.info("dom-ready: ", e);
                StandardWebContentsDriver.configureWebContents(webContents, this.browserProfile)
                    .catch((err) => log.error("Could not configure web contents: ", err));
            });
            webContents.on('will-navigate', (e, url) => {
            });
            webContents.on('did-fail-load', (event, errorCode, errorDescription, validateURL, isMainFrame) => {
                log.info("did-fail-load: ", { event, errorCode, errorDescription, validateURL, isMainFrame }, event);
            });
        });
    }
    static configureWebContents(webContents, browserProfile) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = webContents.getURL();
            log.info("Configuring webContents with URL: " + url);
            log.info("Muting audio...");
            webContents.setAudioMuted(!browserProfile.webaudio);
            let deviceEmulation = browserProfile.deviceEmulation;
            deviceEmulation = Object.assign({}, deviceEmulation);
            log.info("Emulating device...");
            webContents.enableDeviceEmulation(deviceEmulation);
            webContents.setUserAgent(browserProfile.userAgent);
            const windowDimensions = {
                width: deviceEmulation.screenSize.width,
                height: deviceEmulation.screenSize.height,
            };
            log.info("Using window dimensions: ", windowDimensions);
            const configureBrowserScript = Functions_1.Functions.functionToScript(ContentCaptureFunctions_1.configureBrowser, windowDimensions);
            yield webContents.executeJavaScript(configureBrowserScript);
        });
    }
    initReactor() {
        log.info("Initializing reactor for 'close'");
        this.reactor.registerEvent('close');
        this.browserWindow.on('close', () => {
            log.info("Firing event listener 'close'");
            this.reactor.dispatchEvent('close', {});
        });
    }
}
exports.StandardWebContentsDriver = StandardWebContentsDriver;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RhbmRhcmRXZWJDb250ZW50c0RyaXZlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlN0YW5kYXJkV2ViQ29udGVudHNEcml2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBa0U7QUFFbEUsc0RBQWlEO0FBQ2pELDJEQUFzRDtBQUN0RCxnRUFBMkQ7QUFDM0QsaUZBQXFFO0FBQ3JFLCtEQUEwRDtBQUUxRCxtREFBOEM7QUFFOUMsc0ZBQWlGO0FBVWpGLDZEQUF3RDtBQUN4RCxnRUFBMkQ7QUFHM0QsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBSzVCLE1BQWEseUJBQXlCO0lBVWxDLFlBQVksY0FBOEI7UUFGaEMsWUFBTyxHQUFHLElBQUksaUJBQU8sRUFBb0IsQ0FBQztRQUdoRCxJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztJQUN6QyxDQUFDO0lBRVksSUFBSSxDQUFDLFdBQXlCOztZQUV2QyxNQUFNLG9CQUFvQixHQUFHLElBQUksQ0FBQywyQkFBMkIsRUFBRSxDQUFDO1lBRWhFLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBRTVDLENBQUM7S0FBQTtJQUdZLGNBQWM7O1lBQ3ZCLE9BQU8sbUJBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQy9DLENBQUM7S0FBQTtJQUVZLE9BQU87O1lBQ2hCLEdBQUcsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQztZQUVqQyxtQkFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO2lCQUMxQixHQUFHLENBQUMsYUFBYSxDQUFDLEVBQUU7Z0JBRWpCLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLEVBQUU7b0JBQzlCLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztpQkFDekI7WUFFTCxDQUFDLENB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QUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXBDLElBQUksQ0FBQyxhQUFjLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7WUFDakMsR0FBRyxDQUFDLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO1lBQzFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM1QyxDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7Q0FFSjtBQXpORCw4REF5TkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Jyb3dzZXJXaW5kb3csIERvd25sb2FkSXRlbSwgV2ViQ29udGVudHN9IGZyb20gJ2VsZWN0cm9uJztcbmltcG9ydCB7V2ViQ29udGVudHNEcml2ZXIsIFdlYkNvbnRlbnRzRXZlbnQsIFdlYkNvbnRlbnRzRXZlbnROYW1lfSBmcm9tICcuL1dlYkNvbnRlbnRzRHJpdmVyJztcbmltcG9ydCB7QnJvd3NlcldpbmRvd3N9IGZyb20gJy4uL0Jyb3dzZXJXaW5kb3dzJztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL2xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IHtPcHRpb25hbH0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL3RzL09wdGlvbmFsJztcbmltcG9ydCB7Y29uZmlndXJlQnJvd3Nlcn0gZnJvbSAnLi4vcmVuZGVyZXIvQ29udGVudENhcHR1cmVGdW5jdGlvbnMnO1xuaW1wb3J0IHtGdW5jdGlvbnN9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC9GdW5jdGlvbnMnO1xuaW1wb3J0IHtCcm93c2VyUHJvZmlsZX0gZnJvbSAnLi4vQnJvd3NlclByb2ZpbGUnO1xuaW1wb3J0IHtSZWFjdG9yfSBmcm9tICcuLi8uLi9yZWFjdG9yL1JlYWN0b3InO1xuaW1wb3J0IHtQZW5kaW5nV2ViUmVxdWVzdHNFdmVudH0gZnJvbSAnLi4vLi4vd2VicmVxdWVzdHMvUGVuZGluZ1dlYlJlcXVlc3RzTGlzdGVuZXInO1xuaW1wb3J0IHtXZWJDb250ZW50c1Byb21pc2VzfSBmcm9tICcuLi8uLi9lbGVjdHJvbi9mcmFtZXdvcmsvV2ViQ29udGVudHNQcm9taXNlcyc7XG5pbXBvcnQge0ZpbGVQYXRoc30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL0ZpbGVQYXRocyc7XG5pbXBvcnQge1RvYXN0ZXJNZXNzYWdlc30gZnJvbSAnLi4vLi4vdWkvdG9hc3Rlci9Ub2FzdGVyTWVzc2FnZXMnO1xuaW1wb3J0IHtUb2FzdGVyTWVzc2FnZVR5cGV9IGZyb20gJy4uLy4uL3VpL3RvYXN0ZXIvVG9hc3Rlcic7XG5pbXBvcnQgQnJvd3NlcldpbmRvd0NvbnN0cnVjdG9yT3B0aW9ucyA9IEVsZWN0cm9uLkJyb3dzZXJXaW5kb3dDb25zdHJ1Y3Rvck9wdGlvbnM7XG5pbXBvcnQgYmFzZSA9IE1vY2hhLnJlcG9ydGVycy5iYXNlO1xuaW1wb3J0IHtQREZJbXBvcnRlcn0gZnJvbSAnLi4vLi4vYXBwcy9yZXBvc2l0b3J5L2ltcG9ydGVycy9QREZJbXBvcnRlcic7XG5pbXBvcnQge0ZpbGVJbXBvcnRDbGllbnR9IGZyb20gJy4uLy4uL2FwcHMvcmVwb3NpdG9yeS9GaWxlSW1wb3J0Q2xpZW50JztcbmltcG9ydCB7UHJvZ3Jlc3NUcmFja2VyfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvUHJvZ3Jlc3NUcmFja2VyJztcbmltcG9ydCB7UHJvZ3Jlc3NNZXNzYWdlc30gZnJvbSAnLi4vLi4vdWkvcHJvZ3Jlc3NfYmFyL1Byb2dyZXNzTWVzc2FnZXMnO1xuaW1wb3J0IHtBcHBMYXVuY2hlcn0gZnJvbSAnLi4vLi4vYXBwcy9tYWluL0FwcExhdW5jaGVyJztcbmltcG9ydCB7UERGRG93bmxvYWRIYW5kbGVyc30gZnJvbSAnLi4vUERGRG93bmxvYWRIYW5kbGVycyc7XG5pbXBvcnQge0lEaW1lbnNpb25zfSBmcm9tIFwiLi4vLi4vdXRpbC9JRGltZW5zaW9uc1wiO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbi8qKlxuICogVXNlZCBieSB0aGUgaGlkZGVuIGFuZCBoZWFkbGVzcyBkcml2ZXIuXG4gKi9cbmV4cG9ydCBjbGFzcyBTdGFuZGFyZFdlYkNvbnRlbnRzRHJpdmVyIGltcGxlbWVudHMgV2ViQ29udGVudHNEcml2ZXIge1xuXG4gICAgcHVibGljIHdlYkNvbnRlbnRzPzogV2ViQ29udGVudHM7XG5cbiAgICBwdWJsaWMgYnJvd3NlclByb2ZpbGU6IEJyb3dzZXJQcm9maWxlO1xuXG4gICAgcHJvdGVjdGVkIGJyb3dzZXJXaW5kb3c/OiBCcm93c2VyV2luZG93O1xuXG4gICAgcHJvdGVjdGVkIHJlYWN0b3IgPSBuZXcgUmVhY3RvcjxXZWJDb250ZW50c0V2ZW50PigpO1xuXG4gICAgY29uc3RydWN0b3IoYnJvd3NlclByb2ZpbGU6IEJyb3dzZXJQcm9maWxlKSB7XG4gICAgICAgIHRoaXMuYnJvd3NlclByb2ZpbGUgPSBicm93c2VyUHJvZmlsZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgaW5pdCh3ZWJDb250ZW50cz86IFdlYkNvbnRlbnRzKSB7XG5cbiAgICAgICAgY29uc3QgYnJvd3NlcldpbmRvd09wdGlvbnMgPSB0aGlzLmNvbXB1dGVCcm93c2VyV2luZG93T3B0aW9ucygpO1xuXG4gICAgICAgIGF3YWl0IHRoaXMuZG9Jbml0KGJyb3dzZXJXaW5kb3dPcHRpb25zKTtcblxuICAgIH1cblxuXG4gICAgcHVibGljIGFzeW5jIGdldFdlYkNvbnRlbnRzKCk6IFByb21pc2U8RWxlY3Ryb24uV2ViQ29udGVudHM+IHtcbiAgICAgICAgcmV0dXJuIE9wdGlvbmFsLm9mKHRoaXMud2ViQ29udGVudHMpLmdldCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBkZXN0cm95KCkge1xuICAgICAgICBsb2cuaW5mbyhcIkRlc3Ryb3lpbmcgd2luZG93Li4uXCIpO1xuXG4gICAgICAgIE9wdGlvbmFsLm9mKHRoaXMuYnJvd3NlcldpbmRvdylcbiAgICAgICAgICAgIC5tYXAoYnJvd3NlcldpbmRvdyA9PiB7XG5cbiAgICAgICAgICAgICAgICBpZiAoIWJyb3dzZXJXaW5kb3cuaXNEZXN0cm95ZWQoKSkge1xuICAgICAgICAgICAgICAgICAgICBicm93c2VyV2luZG93LmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICBsb2cuaW5mbyhcIkRlc3Ryb3lpbmcgd2luZG93Li4uZG9uZVwiKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB1cmwgVGhlIFVSTCB0byBsb2FkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHdhaXRGb3JGaW5pc2hMb2FkIFdoZW4gdHJ1ZSwgd2FpdCBmb3IgdGhlICdkaWQtZmluaXNoLWxvYWQnIGV2ZW50XG4gICAgICogd2hpY2ggaXMgdGhlIGRlZmF1bHQgc2luY2UgdGhlIG9sZCBjYXB0dXJlIHN5c3RlbSB3YXMgYmFzZWQgb24gdGhlXG4gICAgICogICAgIGJyb3dzZXIgbG9hZGluZyBldmVudCBzdHJlYW0gYW5kIHdlIGFzc3VtZWQgdGhlIGxvYWQgZXZlbnQgd291bGRcbiAgICAgKiAgICAgbWVhbiB0aGUgcGFnZSB3YXMgZmluaXNoZWQgcmVuZGVyaW5nIC0gd2hpY2ggaXMgbm90IHJlYWxseSB0cnVlLlxuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyBsb2FkVVJMKHVybDogc3RyaW5nLCB3YWl0Rm9yRmluaXNoTG9hZDogYm9vbGVhbiA9IHRydWUpOiBQcm9taXNlPHZvaWQ+IHtcblxuICAgICAgICBjb25zdCBvcHRzID0ge1xuXG4gICAgICAgICAgICAvLyB0aGUgbm8tY2FjaGUgaGVhZGVyIGlzIG5lZWRlZCBoZXJlIHNvIHRoYXQgd2UgZG9uJ3QgbG9hZCB0aGUgZGF0YVxuICAgICAgICAgICAgLy8gaW50byB0aGUgY2FjaGUgYW5kIHRoZW4gYWNjaWRlbnRhbGx5IGxvYWQgaXQuXG4gICAgICAgICAgICAvLyBleHRyYUhlYWRlcnM6IGBwcmFnbWE6IG5vLWNhY2hlLCBuby1zdG9yZVxcbnJlZmVyZXI6ICR7dXJsfVxcbmAsXG4gICAgICAgICAgICBleHRyYUhlYWRlcnM6IGBwcmFnbWE6IG5vLWNhY2hlXFxucmVmZXJlcjogJHt1cmx9XFxuYCxcbiAgICAgICAgICAgIHVzZXJBZ2VudDogdGhpcy5icm93c2VyUHJvZmlsZS51c2VyQWdlbnRcblxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFdlYkNvbnRlbnRzUHJvbWlzZXMub25jZSh0aGlzLndlYkNvbnRlbnRzISkuZGlkRmluaXNoTG9hZCgpO1xuXG4gICAgICAgIGF3YWl0IHRoaXMud2ViQ29udGVudHMhLmxvYWRVUkwodXJsLCBvcHRzKVxuXG4gICAgICAgIGlmICh3YWl0Rm9yRmluaXNoTG9hZCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHVibGljIHByb2dyZXNzVXBkYXRlZChldmVudDogUGVuZGluZ1dlYlJlcXVlc3RzRXZlbnQpOiB2b2lkIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWU6IFdlYkNvbnRlbnRzRXZlbnROYW1lLCBldmVudExpc3RlbmVyOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgICAgIHRoaXMucmVhY3Rvci5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZXZlbnRMaXN0ZW5lcik7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNvbXB1dGVCcm93c2VyV2luZG93T3B0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIEJyb3dzZXJXaW5kb3dzLnRvQnJvd3NlcldpbmRvd09wdGlvbnModGhpcy5icm93c2VyUHJvZmlsZSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGFzeW5jIGRvSW5pdChicm93c2VyV2luZG93T3B0aW9uczogQnJvd3NlcldpbmRvd0NvbnN0cnVjdG9yT3B0aW9ucykge1xuXG4gICAgICAgIGxvZy5pbmZvKFwiVXNpbmcgYnJvd3NlcldpbmRvd09wdGlvbnM6IFwiLCBicm93c2VyV2luZG93T3B0aW9ucyk7XG5cbiAgICAgICAgY29uc3Qgd2luZG93ID0gbmV3IEJyb3dzZXJXaW5kb3coYnJvd3NlcldpbmRvd09wdGlvbnMpO1xuXG4gICAgICAgIGF3YWl0IHRoaXMuaW5pdFdlYkNvbnRlbnRzKHdpbmRvdywgd2luZG93LndlYkNvbnRlbnRzLCBicm93c2VyV2luZG93T3B0aW9ucyk7XG5cbiAgICAgICAgdGhpcy5pbml0UmVhY3RvcigpO1xuXG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGFzeW5jIGluaXRXZWJDb250ZW50cyhicm93c2VyV2luZG93OiBCcm93c2VyV2luZG93LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2ViQ29udGVudHM6IFdlYkNvbnRlbnRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJvd3NlcldpbmRvd09wdGlvbnM6IEJyb3dzZXJXaW5kb3dDb25zdHJ1Y3Rvck9wdGlvbnMpIHtcblxuICAgICAgICB0aGlzLmJyb3dzZXJXaW5kb3cgPSBicm93c2VyV2luZG93O1xuICAgICAgICB0aGlzLndlYkNvbnRlbnRzID0gd2ViQ29udGVudHM7XG5cbiAgICAgICAgYXdhaXQgdGhpcy5pbml0V2ViQ29udGVudHNFdmVudHMod2ViQ29udGVudHMpO1xuXG4gICAgICAgIGlmICggISBicm93c2VyV2luZG93T3B0aW9ucy5zaG93KSB7XG4gICAgICAgICAgICBhd2FpdCBCcm93c2VyV2luZG93cy5vbmNlUmVhZHlUb1Nob3coYnJvd3NlcldpbmRvdyk7XG4gICAgICAgIH1cblxuICAgICAgICBhd2FpdCBTdGFuZGFyZFdlYkNvbnRlbnRzRHJpdmVyLmNvbmZpZ3VyZVdlYkNvbnRlbnRzKHdlYkNvbnRlbnRzLCB0aGlzLmJyb3dzZXJQcm9maWxlKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgaW5pdFdlYkNvbnRlbnRzRXZlbnRzKHdlYkNvbnRlbnRzOiBXZWJDb250ZW50cykge1xuXG5cbiAgICAgICAgY29uc3Qgb25Eb3dubG9hZGVkSGFuZGxlciA9ICgpID0+IHtcblxuICAgICAgICAgICAgdGhpcy5kZXN0cm95KClcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IGxvZy5lcnJvcihlcnIpKTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IG9uRG93bmxvYWRIYW5kbGVyID0gKCkgPT4ge1xuXG4gICAgICAgICAgICBsZXQgcm9vdFdlYkNvbnRlbnRzID0gd2ViQ29udGVudHM7XG5cbiAgICAgICAgICAgIHdoaWxlIChyb290V2ViQ29udGVudHMuaG9zdFdlYkNvbnRlbnRzKSB7XG4gICAgICAgICAgICAgICAgcm9vdFdlYkNvbnRlbnRzID0gcm9vdFdlYkNvbnRlbnRzLmhvc3RXZWJDb250ZW50cztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgYnJvd3NlcldpbmRvd0lEID0gcm9vdFdlYkNvbnRlbnRzLmlkO1xuXG4gICAgICAgICAgICBsb2cuaW5mbyhcIkdldHRpbmcgQnJvd3NlcldpbmRvdyBmcm9tIElEOiBcIiArIGJyb3dzZXJXaW5kb3dJRCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGJyb3dzZXJXaW5kb3cgPSBCcm93c2VyV2luZG93LmZyb21JZChicm93c2VyV2luZG93SUQpO1xuXG4gICAgICAgICAgICBpZiAoYnJvd3NlcldpbmRvdykge1xuICAgICAgICAgICAgICAgIGJyb3dzZXJXaW5kb3cuY2xvc2UoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbG9nLndhcm4oXCJObyBicm93c2VyIHdpbmRvdyB0byBjbHNvZVwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQXBwTGF1bmNoZXIubGF1bmNoUmVwb3NpdG9yeUFwcCgpXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBsb2cuZXJyb3IoZXJyKSk7XG5cbiAgICAgICAgfTtcblxuICAgICAgICBQREZEb3dubG9hZEhhbmRsZXJzLmNyZWF0ZSh3ZWJDb250ZW50cywgKCkgPT4gb25Eb3dubG9hZGVkSGFuZGxlcigpLCAoKSA9PiBvbkRvd25sb2FkSGFuZGxlcigpKTtcblxuICAgICAgICB3ZWJDb250ZW50cy5vbignZG9tLXJlYWR5JywgKGUpID0+IHtcblxuICAgICAgICAgICAgbG9nLmluZm8oXCJkb20tcmVhZHk6IFwiLCBlKTtcblxuICAgICAgICAgICAgU3RhbmRhcmRXZWJDb250ZW50c0RyaXZlci5jb25maWd1cmVXZWJDb250ZW50cyh3ZWJDb250ZW50cywgdGhpcy5icm93c2VyUHJvZmlsZSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycjogRXJyb3IpID0+IGxvZy5lcnJvcihcIkNvdWxkIG5vdCBjb25maWd1cmUgd2ViIGNvbnRlbnRzOiBcIiwgZXJyKSk7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgd2ViQ29udGVudHMub24oJ3dpbGwtbmF2aWdhdGUnLCAoZSwgdXJsKSA9PiB7XG4gICAgICAgICAgICAvLyBsb2cuaW5mbyhcIkNhbmNlbGluZyBuYXZpZ2F0aW9uLi4uXCIpO1xuICAgICAgICAgICAgLy8gZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB3ZWJDb250ZW50cy5vbignZGlkLWZhaWwtbG9hZCcsIChldmVudCwgZXJyb3JDb2RlLCBlcnJvckRlc2NyaXB0aW9uLCB2YWxpZGF0ZVVSTCwgaXNNYWluRnJhbWUpID0+IHtcbiAgICAgICAgICAgIGxvZy5pbmZvKFwiZGlkLWZhaWwtbG9hZDogXCIgLCB7ZXZlbnQsIGVycm9yQ29kZSwgZXJyb3JEZXNjcmlwdGlvbiwgdmFsaWRhdGVVUkwsIGlzTWFpbkZyYW1lfSwgZXZlbnQpO1xuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgY29uZmlndXJlV2ViQ29udGVudHMod2ViQ29udGVudHM6IFdlYkNvbnRlbnRzLCBicm93c2VyUHJvZmlsZTogQnJvd3NlclByb2ZpbGUpIHtcblxuICAgICAgICBjb25zdCB1cmwgPSB3ZWJDb250ZW50cy5nZXRVUkwoKTtcblxuICAgICAgICBsb2cuaW5mbyhcIkNvbmZpZ3VyaW5nIHdlYkNvbnRlbnRzIHdpdGggVVJMOiBcIiArIHVybCk7XG5cbiAgICAgICAgLy8gd2UgbmVlZCB0byBtdXRlIGJ5IGRlZmF1bHQgZXNwZWNpYWxseSBpZiB0aGUgd2luZG93IGlzIGhpZGRlbi5cbiAgICAgICAgbG9nLmluZm8oXCJNdXRpbmcgYXVkaW8uLi5cIik7XG4gICAgICAgIHdlYkNvbnRlbnRzLnNldEF1ZGlvTXV0ZWQoISBicm93c2VyUHJvZmlsZS53ZWJhdWRpbyk7XG5cbiAgICAgICAgbGV0IGRldmljZUVtdWxhdGlvbiA9IGJyb3dzZXJQcm9maWxlLmRldmljZUVtdWxhdGlvbjtcblxuICAgICAgICBkZXZpY2VFbXVsYXRpb24gPSBPYmplY3QuYXNzaWduKHt9LCBkZXZpY2VFbXVsYXRpb24pO1xuXG4gICAgICAgIGxvZy5pbmZvKFwiRW11bGF0aW5nIGRldmljZS4uLlwiKTtcbiAgICAgICAgd2ViQ29udGVudHMuZW5hYmxlRGV2aWNlRW11bGF0aW9uKGRldmljZUVtdWxhdGlvbik7XG5cbiAgICAgICAgd2ViQ29udGVudHMuc2V0VXNlckFnZW50KGJyb3dzZXJQcm9maWxlLnVzZXJBZ2VudCk7XG5cbiAgICAgICAgY29uc3Qgd2luZG93RGltZW5zaW9uczogSURpbWVuc2lvbnMgPSB7XG4gICAgICAgICAgICB3aWR0aDogZGV2aWNlRW11bGF0aW9uLnNjcmVlblNpemUud2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IGRldmljZUVtdWxhdGlvbi5zY3JlZW5TaXplLmhlaWdodCxcbiAgICAgICAgfTtcblxuICAgICAgICBsb2cuaW5mbyhcIlVzaW5nIHdpbmRvdyBkaW1lbnNpb25zOiBcIiwgd2luZG93RGltZW5zaW9ucyk7XG5cbiAgICAgICAgY29uc3QgY29uZmlndXJlQnJvd3NlclNjcmlwdCA9IEZ1bmN0aW9ucy5mdW5jdGlvblRvU2NyaXB0KGNvbmZpZ3VyZUJyb3dzZXIsIHdpbmRvd0RpbWVuc2lvbnMpO1xuXG4gICAgICAgIGF3YWl0IHdlYkNvbnRlbnRzLmV4ZWN1dGVKYXZhU2NyaXB0KGNvbmZpZ3VyZUJyb3dzZXJTY3JpcHQpO1xuXG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGluaXRSZWFjdG9yKCkge1xuXG4gICAgICAgIGxvZy5pbmZvKFwiSW5pdGlhbGl6aW5nIHJlYWN0b3IgZm9yICdjbG9zZSdcIik7XG5cbiAgICAgICAgdGhpcy5yZWFjdG9yLnJlZ2lzdGVyRXZlbnQoJ2Nsb3NlJyk7XG5cbiAgICAgICAgdGhpcy5icm93c2VyV2luZG93IS5vbignY2xvc2UnLCAoKSA9PiB7XG4gICAgICAgICAgICBsb2cuaW5mbyhcIkZpcmluZyBldmVudCBsaXN0ZW5lciAnY2xvc2UnXCIpO1xuICAgICAgICAgICAgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoJ2Nsb3NlJywge30pO1xuICAgICAgICB9KTtcblxuICAgIH1cblxufVxuIl19