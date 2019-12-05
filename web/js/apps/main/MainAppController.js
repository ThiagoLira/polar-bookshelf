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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const ResourcePaths_1 = require("../../electron/webresource/ResourcePaths");
const Logger_1 = require("polar-shared/src/logger/Logger");
const Services_1 = require("../../util/services/Services");
const MainAppBrowserWindowFactory_1 = require("./MainAppBrowserWindowFactory");
const AppLauncher_1 = require("./AppLauncher");
const Hashcodes_1 = require("polar-shared/src/util/Hashcodes");
const SingletonBrowserWindow_1 = require("../../electron/framework/SingletonBrowserWindow");
const process_1 = __importDefault(require("process"));
const Capture_1 = require("../../capture/Capture");
const Directories_1 = require("../../datastore/Directories");
const FileImportClient_1 = require("../repository/FileImportClient");
const MainAppExceptionHandlers_1 = require("./MainAppExceptionHandlers");
const FileImportRequests_1 = require("../repository/FileImportRequests");
const log = Logger_1.Logger.create();
class MainAppController {
    constructor(fileLoader, webserver) {
        this.fileLoader = fileLoader;
        this.webserver = webserver;
        this.directories = new Directories_1.Directories();
    }
    cmdCaptureWebPage() {
        return __awaiter(this, void 0, void 0, function* () {
            const browserWindowOptions = Object.assign({}, MainAppBrowserWindowFactory_1.BROWSER_WINDOW_OPTIONS);
            browserWindowOptions.width = browserWindowOptions.width * .9;
            browserWindowOptions.height = browserWindowOptions.height * .9;
            browserWindowOptions.center = true;
            const url = ResourcePaths_1.ResourcePaths.resourceURLFromRelativeURL('./apps/capture/start-capture/index.html');
            yield MainAppBrowserWindowFactory_1.MainAppBrowserWindowFactory.createWindow(browserWindowOptions, url);
        });
    }
    cmdCaptureWebPageWithBrowser(captureOpts = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const captureResult = yield Capture_1.Capture.trigger(captureOpts);
            yield this.handleLoadDoc(captureResult.path);
        });
    }
    cmdNewWindow() {
        return __awaiter(this, void 0, void 0, function* () {
            yield MainAppBrowserWindowFactory_1.MainAppBrowserWindowFactory.createWindow();
        });
    }
    cmdImport() {
        return __awaiter(this, void 0, void 0, function* () {
            const files = yield this.promptImportDocs();
            if (files) {
                FileImportClient_1.FileImportClient.send(FileImportRequests_1.FileImportRequests.fromPaths(files));
            }
        });
    }
    cmdExit() {
        this.exitApp();
    }
    cmdToggleDevTools(item, focusedWindow) {
        log.info("Toggling dev tools in: " + focusedWindow);
        focusedWindow.webContents.toggleDevTools();
    }
    exitApp() {
        const doProcessExit = true;
        const doAppQuit = true;
        const doServicesStop = true;
        const doWindowGC = false;
        const doCloseWindows = false;
        const doDestroyWindows = false;
        MainAppExceptionHandlers_1.MainAppExceptionHandlers.register();
        log.info("Exiting app...");
        if (doWindowGC) {
            log.info("Getting all browser windows...");
            const browserWindows = electron_1.BrowserWindow.getAllWindows();
            log.info("Getting all browser windows...done");
            log.info("Closing/destroying all windows...");
            for (const browserWindow of browserWindows) {
                const id = browserWindow.id;
                if (!browserWindow.isDestroyed()) {
                    if (doCloseWindows && browserWindow.isClosable()) {
                        log.info(`Closing window id=${id}`);
                        browserWindow.close();
                    }
                    if (doDestroyWindows) {
                        log.info(`Destroying window id=${id}`);
                        browserWindow.destroy();
                    }
                }
                else {
                    log.info(`Skipping destroy window (is destroyed) id=${id}`);
                }
            }
            log.info("Closing/destroying all windows...done");
        }
        if (doServicesStop) {
            log.info("Stopping services...");
            Services_1.Services.stop({
                webserver: this.webserver,
            });
            log.info("Stopping services...done");
        }
        if (doAppQuit) {
            log.info("Quitting app...");
            electron_1.app.quit();
            log.info("Quitting app...done");
        }
        if (doProcessExit) {
            log.info("Process exit...");
            process_1.default.exit();
            log.info("Process exit...done");
        }
    }
    handleLoadDoc(path, newWindow = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const extraTags = { 'type': 'viewer' };
            const browserWindowTag = { name: 'viewer', value: Hashcodes_1.Hashcodes.createID(path) };
            return yield SingletonBrowserWindow_1.SingletonBrowserWindow.getInstance(browserWindowTag, () => __awaiter(this, void 0, void 0, function* () {
                const computeWindow = () => __awaiter(this, void 0, void 0, function* () {
                    const createWindow = () => __awaiter(this, void 0, void 0, function* () {
                        return yield MainAppBrowserWindowFactory_1.MainAppBrowserWindowFactory.createWindow(MainAppBrowserWindowFactory_1.BROWSER_WINDOW_OPTIONS, 'about:blank');
                    });
                    if (newWindow) {
                        return createWindow();
                    }
                    const focusedWindow = electron_1.BrowserWindow.getFocusedWindow();
                    if (focusedWindow) {
                        return focusedWindow;
                    }
                    else {
                        return yield createWindow();
                    }
                });
                const window = yield computeWindow();
                return yield this.loadDoc(path, window);
            }), extraTags);
        });
    }
    loadDoc(path, targetWindow) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!targetWindow) {
                throw new Error("No target window given");
            }
            const loadedFile = yield this.fileLoader.registerForLoad(path);
            log.info("Loading webapp at: " + loadedFile.webResource);
            loadedFile.webResource.load(targetWindow);
            targetWindow.webContents.once('did-finish-load', () => {
                if (loadedFile.title) {
                    targetWindow.setTitle(loadedFile.title);
                }
                if (loadedFile.docDimensions) {
                    const [width, height] = targetWindow.getSize();
                    const idealWidth = loadedFile.docDimensions.width + 100;
                    if (width < idealWidth) {
                        log.info("Adjusting window width");
                        targetWindow.setSize(idealWidth, height);
                    }
                }
            });
            return targetWindow;
        });
    }
    activateMainWindow() {
        let browserWindows = electron_1.BrowserWindow.getAllWindows();
        browserWindows = browserWindows.filter(browserWindow => browserWindow.isVisible());
        if (browserWindows.length === 0) {
            AppLauncher_1.AppLauncher.launchRepositoryApp()
                .catch(err => log.error("Unable to open repository app: ", err));
            return;
        }
        const mainWindow = browserWindows[0];
        if (mainWindow.isMinimized()) {
            mainWindow.restore();
        }
        mainWindow.focus();
    }
    promptImportDocs() {
        return __awaiter(this, void 0, void 0, function* () {
            const downloadsDir = electron_1.app.getPath('downloads');
            return new Promise((resolve) => {
                electron_1.dialog.showOpenDialog({
                    title: "Import Document",
                    defaultPath: downloadsDir,
                    filters: [
                        { name: 'Docs', extensions: ['pdf', "phz", "PDF"] }
                    ],
                    properties: ['openFile', 'multiSelections']
                }, (paths) => {
                    resolve(paths);
                });
            });
        });
    }
}
exports.MainAppController = MainAppController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFpbkFwcENvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJNYWluQXBwQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUFvRDtBQUNwRCw0RUFBdUU7QUFDdkUsMkRBQXNEO0FBQ3RELDJEQUFzRDtBQUN0RCwrRUFBa0c7QUFDbEcsK0NBQTBDO0FBQzFDLCtEQUEwRDtBQUMxRCw0RkFBdUY7QUFDdkYsc0RBQThCO0FBQzlCLG1EQUE4QztBQUM5Qyw2REFBd0Q7QUFDeEQscUVBQWdFO0FBSWhFLHlFQUFvRTtBQUVwRSx5RUFBb0U7QUFHcEUsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLE1BQWEsaUJBQWlCO0lBUTFCLFlBQVksVUFBc0IsRUFDdEIsU0FBb0I7UUFDNUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLHlCQUFXLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0lBRVksaUJBQWlCOztZQUUxQixNQUFNLG9CQUFvQixHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLG9EQUFzQixDQUFDLENBQUM7WUFFdkUsb0JBQW9CLENBQUMsS0FBSyxHQUFHLG9CQUFvQixDQUFDLEtBQU0sR0FBRyxFQUFFLENBQUM7WUFDOUQsb0JBQW9CLENBQUMsTUFBTSxHQUFHLG9CQUFvQixDQUFDLE1BQU8sR0FBRyxFQUFFLENBQUM7WUFDaEUsb0JBQW9CLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUVuQyxNQUFNLEdBQUcsR0FBRyw2QkFBYSxDQUFDLDBCQUEwQixDQUFDLHlDQUF5QyxDQUFDLENBQUM7WUFFaEcsTUFBTSx5REFBMkIsQ0FBQyxZQUFZLENBQUMsb0JBQW9CLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFF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QUM7Z0JBRW5CLENBQUMsQ0FBQyxDQUFDO1lBRVAsQ0FBQyxDQUFDLENBQUM7UUFFUCxDQUFDO0tBQUE7Q0FFSjtBQXRSRCw4Q0FzUkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2FwcCwgQnJvd3NlcldpbmRvdywgZGlhbG9nfSBmcm9tICdlbGVjdHJvbic7XG5pbXBvcnQge1Jlc291cmNlUGF0aHN9IGZyb20gJy4uLy4uL2VsZWN0cm9uL3dlYnJlc291cmNlL1Jlc291cmNlUGF0aHMnO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge1NlcnZpY2VzfSBmcm9tICcuLi8uLi91dGlsL3NlcnZpY2VzL1NlcnZpY2VzJztcbmltcG9ydCB7QlJPV1NFUl9XSU5ET1dfT1BUSU9OUywgTWFpbkFwcEJyb3dzZXJXaW5kb3dGYWN0b3J5fSBmcm9tICcuL01haW5BcHBCcm93c2VyV2luZG93RmFjdG9yeSc7XG5pbXBvcnQge0FwcExhdW5jaGVyfSBmcm9tICcuL0FwcExhdW5jaGVyJztcbmltcG9ydCB7SGFzaGNvZGVzfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvSGFzaGNvZGVzJztcbmltcG9ydCB7U2luZ2xldG9uQnJvd3NlcldpbmRvd30gZnJvbSAnLi4vLi4vZWxlY3Ryb24vZnJhbWV3b3JrL1NpbmdsZXRvbkJyb3dzZXJXaW5kb3cnO1xuaW1wb3J0IHByb2Nlc3MgZnJvbSAncHJvY2Vzcyc7XG5pbXBvcnQge0NhcHR1cmV9IGZyb20gJy4uLy4uL2NhcHR1cmUvQ2FwdHVyZSc7XG5pbXBvcnQge0RpcmVjdG9yaWVzfSBmcm9tICcuLi8uLi9kYXRhc3RvcmUvRGlyZWN0b3JpZXMnO1xuaW1wb3J0IHtGaWxlSW1wb3J0Q2xpZW50fSBmcm9tICcuLi9yZXBvc2l0b3J5L0ZpbGVJbXBvcnRDbGllbnQnO1xuaW1wb3J0IHtDYXB0dXJlT3B0c30gZnJvbSAnLi4vLi4vY2FwdHVyZS9DYXB0dXJlT3B0cyc7XG5pbXBvcnQge1BsYXRmb3JtLCBQbGF0Zm9ybXN9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC9QbGF0Zm9ybXMnO1xuaW1wb3J0IE1lbnVJdGVtID0gRWxlY3Ryb24uTWVudUl0ZW07XG5pbXBvcnQge01haW5BcHBFeGNlcHRpb25IYW5kbGVyc30gZnJvbSAnLi9NYWluQXBwRXhjZXB0aW9uSGFuZGxlcnMnO1xuaW1wb3J0IHtGaWxlTG9hZGVyfSBmcm9tICcuL2ZpbGVfbG9hZGVycy9GaWxlTG9hZGVyJztcbmltcG9ydCB7RmlsZUltcG9ydFJlcXVlc3RzfSBmcm9tICcuLi9yZXBvc2l0b3J5L0ZpbGVJbXBvcnRSZXF1ZXN0cyc7XG5pbXBvcnQge1dlYnNlcnZlcn0gZnJvbSBcInBvbGFyLXNoYXJlZC13ZWJzZXJ2ZXIvc3JjL3dlYnNlcnZlci9XZWJzZXJ2ZXJcIjtcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG5leHBvcnQgY2xhc3MgTWFpbkFwcENvbnRyb2xsZXIge1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBmaWxlTG9hZGVyOiBGaWxlTG9hZGVyO1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSB3ZWJzZXJ2ZXI6IFdlYnNlcnZlcjtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgZGlyZWN0b3JpZXM6IERpcmVjdG9yaWVzO1xuXG4gICAgY29uc3RydWN0b3IoZmlsZUxvYWRlcjogRmlsZUxvYWRlcixcbiAgICAgICAgICAgICAgICB3ZWJzZXJ2ZXI6IFdlYnNlcnZlcikge1xuICAgICAgICB0aGlzLmZpbGVMb2FkZXIgPSBmaWxlTG9hZGVyO1xuICAgICAgICB0aGlzLndlYnNlcnZlciA9IHdlYnNlcnZlcjtcbiAgICAgICAgdGhpcy5kaXJlY3RvcmllcyA9IG5ldyBEaXJlY3RvcmllcygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBjbWRDYXB0dXJlV2ViUGFnZSgpIHtcblxuICAgICAgICBjb25zdCBicm93c2VyV2luZG93T3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIEJST1dTRVJfV0lORE9XX09QVElPTlMpO1xuXG4gICAgICAgIGJyb3dzZXJXaW5kb3dPcHRpb25zLndpZHRoID0gYnJvd3NlcldpbmRvd09wdGlvbnMud2lkdGghICogLjk7XG4gICAgICAgIGJyb3dzZXJXaW5kb3dPcHRpb25zLmhlaWdodCA9IGJyb3dzZXJXaW5kb3dPcHRpb25zLmhlaWdodCEgKiAuOTtcbiAgICAgICAgYnJvd3NlcldpbmRvd09wdGlvbnMuY2VudGVyID0gdHJ1ZTtcblxuICAgICAgICBjb25zdCB1cmwgPSBSZXNvdXJjZVBhdGhzLnJlc291cmNlVVJMRnJvbVJlbGF0aXZlVVJMKCcuL2FwcHMvY2FwdHVyZS9zdGFydC1jYXB0dXJlL2luZGV4Lmh0bWwnKTtcblxuICAgICAgICBhd2FpdCBNYWluQXBwQnJvd3NlcldpbmRvd0ZhY3RvcnkuY3JlYXRlV2luZG93KGJyb3dzZXJXaW5kb3dPcHRpb25zLCB1cmwpO1xuXG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGNtZENhcHR1cmVXZWJQYWdlV2l0aEJyb3dzZXIoY2FwdHVyZU9wdHM6IFBhcnRpYWw8Q2FwdHVyZU9wdHM+ID0ge30pIHtcblxuICAgICAgICBjb25zdCBjYXB0dXJlUmVzdWx0ID0gYXdhaXQgQ2FwdHVyZS50cmlnZ2VyKGNhcHR1cmVPcHRzKTtcbiAgICAgICAgYXdhaXQgdGhpcy5oYW5kbGVMb2FkRG9jKGNhcHR1cmVSZXN1bHQucGF0aCk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgY21kTmV3V2luZG93KCkge1xuICAgICAgICBhd2FpdCBNYWluQXBwQnJvd3NlcldpbmRvd0ZhY3RvcnkuY3JlYXRlV2luZG93KCk7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGNtZEltcG9ydCgpIHtcblxuICAgICAgICBjb25zdCBmaWxlcyA9IGF3YWl0IHRoaXMucHJvbXB0SW1wb3J0RG9jcygpO1xuXG4gICAgICAgIC8vIHNlbmQgdGhlIG1lc3NhZ2VzIHRvIHRoZSByZW5kZXJlciBjb250ZXh0IG5vdyBzbyB0aGF0IHdlIGNhbiBidWxrXG4gICAgICAgIC8vIGltcG9ydCB0aGVtIGludG8gdGhlIHJlcG8uXG4gICAgICAgIGlmIChmaWxlcykge1xuICAgICAgICAgICAgRmlsZUltcG9ydENsaWVudC5zZW5kKEZpbGVJbXBvcnRSZXF1ZXN0cy5mcm9tUGF0aHMoZmlsZXMpKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHVibGljIGNtZEV4aXQoKSB7XG4gICAgICAgIHRoaXMuZXhpdEFwcCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbWRUb2dnbGVEZXZUb29scyhpdGVtOiBNZW51SXRlbSwgZm9jdXNlZFdpbmRvdzogQnJvd3NlcldpbmRvdykge1xuICAgICAgICBsb2cuaW5mbyhcIlRvZ2dsaW5nIGRldiB0b29scyBpbjogXCIgKyBmb2N1c2VkV2luZG93KTtcbiAgICAgICAgZm9jdXNlZFdpbmRvdy53ZWJDb250ZW50cy50b2dnbGVEZXZUb29scygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBleGl0QXBwKCkge1xuXG4gICAgICAgIC8vIHdlIGhhdmUgYSBjb2xsZWN0aW9uIG9mIGZsYWdzIGhlcmUgY29udHJvbGxpbmcgc2h1dGRvd24gYXMgRWxlY3Ryb25cbiAgICAgICAgLy8gaXMgcGlja3kgaW4gc29tZSBzaXR1YXRpb25zIHJlZ2FyZGluZyByYWlzaW5nIGV4Y2VwdGlvbnMgYW5kIHdlJ3JlXG4gICAgICAgIC8vIHN0aWxsIHRyeWluZyB0byB0cmFjayBkb3duIHRoZSBwcm9wZXIgd2F5IHRvIGhhbmRsZSBhcHAgcXVpdC5cblxuICAgICAgICBjb25zdCBkb1Byb2Nlc3NFeGl0ID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgZG9BcHBRdWl0ID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgZG9TZXJ2aWNlc1N0b3AgPSB0cnVlO1xuXG4gICAgICAgIGNvbnN0IGRvV2luZG93R0MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBkb0Nsb3NlV2luZG93cyA9IGZhbHNlO1xuICAgICAgICBjb25zdCBkb0Rlc3Ryb3lXaW5kb3dzID0gZmFsc2U7XG5cbiAgICAgICAgLy8gdGhlIGV4Y2VwdGlvbiBoYW5kbGVycyBuZWVkIHRvIGJlIHJlLXJlZ2lzdGVyZWQgYXMgSSB0aGluayB0aGV5J3JlXG4gICAgICAgIC8vIGJlaW5nIHJlbW92ZWQgb24gZXhpdCAocG9zc2libHkgYnkgc2VudHJ5PylcbiAgICAgICAgTWFpbkFwcEV4Y2VwdGlvbkhhbmRsZXJzLnJlZ2lzdGVyKCk7XG5cbiAgICAgICAgbG9nLmluZm8oXCJFeGl0aW5nIGFwcC4uLlwiKTtcblxuICAgICAgICBpZiAoZG9XaW5kb3dHQykge1xuXG4gICAgICAgICAgICBsb2cuaW5mbyhcIkdldHRpbmcgYWxsIGJyb3dzZXIgd2luZG93cy4uLlwiKTtcbiAgICAgICAgICAgIGNvbnN0IGJyb3dzZXJXaW5kb3dzID0gQnJvd3NlcldpbmRvdy5nZXRBbGxXaW5kb3dzKCk7XG4gICAgICAgICAgICBsb2cuaW5mbyhcIkdldHRpbmcgYWxsIGJyb3dzZXIgd2luZG93cy4uLmRvbmVcIik7XG5cbiAgICAgICAgICAgIGxvZy5pbmZvKFwiQ2xvc2luZy9kZXN0cm95aW5nIGFsbCB3aW5kb3dzLi4uXCIpO1xuXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGJyb3dzZXJXaW5kb3cgb2YgYnJvd3NlcldpbmRvd3MpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpZCA9IGJyb3dzZXJXaW5kb3cuaWQ7XG5cbiAgICAgICAgICAgICAgICBpZiAoISBicm93c2VyV2luZG93LmlzRGVzdHJveWVkKCkpIHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoZG9DbG9zZVdpbmRvd3MgJiYgYnJvd3NlcldpbmRvdy5pc0Nsb3NhYmxlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZy5pbmZvKGBDbG9zaW5nIHdpbmRvdyBpZD0ke2lkfWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJvd3NlcldpbmRvdy5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGRvRGVzdHJveVdpbmRvd3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZy5pbmZvKGBEZXN0cm95aW5nIHdpbmRvdyBpZD0ke2lkfWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJvd3NlcldpbmRvdy5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZy5pbmZvKGBTa2lwcGluZyBkZXN0cm95IHdpbmRvdyAoaXMgZGVzdHJveWVkKSBpZD0ke2lkfWApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsb2cuaW5mbyhcIkNsb3NpbmcvZGVzdHJveWluZyBhbGwgd2luZG93cy4uLmRvbmVcIik7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkb1NlcnZpY2VzU3RvcCkge1xuXG4gICAgICAgICAgICBsb2cuaW5mbyhcIlN0b3BwaW5nIHNlcnZpY2VzLi4uXCIpO1xuXG4gICAgICAgICAgICBTZXJ2aWNlcy5zdG9wKHtcbiAgICAgICAgICAgICAgICB3ZWJzZXJ2ZXI6IHRoaXMud2Vic2VydmVyLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGxvZy5pbmZvKFwiU3RvcHBpbmcgc2VydmljZXMuLi5kb25lXCIpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZG9BcHBRdWl0KSB7XG4gICAgICAgICAgICBsb2cuaW5mbyhcIlF1aXR0aW5nIGFwcC4uLlwiKTtcblxuICAgICAgICAgICAgYXBwLnF1aXQoKTtcblxuICAgICAgICAgICAgbG9nLmluZm8oXCJRdWl0dGluZyBhcHAuLi5kb25lXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRvUHJvY2Vzc0V4aXQpIHtcbiAgICAgICAgICAgIGxvZy5pbmZvKFwiUHJvY2VzcyBleGl0Li4uXCIpO1xuICAgICAgICAgICAgcHJvY2Vzcy5leGl0KCk7XG4gICAgICAgICAgICBsb2cuaW5mbyhcIlByb2Nlc3MgZXhpdC4uLmRvbmVcIik7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSB1c2VyIGFza2VkIHRvIG9wZW4gYSBmaWxlIGZyb20gdGhlIGNvbW1hbmQgbGluZSBvciB2aWEgT1MgZXZlbnQuXG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIGhhbmRsZUxvYWREb2MocGF0aDogc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1dpbmRvdzogYm9vbGVhbiA9IHRydWUpOiBQcm9taXNlPEJyb3dzZXJXaW5kb3c+IHtcblxuICAgICAgICBjb25zdCBleHRyYVRhZ3MgPSB7J3R5cGUnOiAndmlld2VyJ307XG5cbiAgICAgICAgY29uc3QgYnJvd3NlcldpbmRvd1RhZyA9IHtuYW1lOiAndmlld2VyJywgdmFsdWU6IEhhc2hjb2Rlcy5jcmVhdGVJRChwYXRoKX07XG5cbiAgICAgICAgcmV0dXJuIGF3YWl0IFNpbmdsZXRvbkJyb3dzZXJXaW5kb3cuZ2V0SW5zdGFuY2UoYnJvd3NlcldpbmRvd1RhZywgYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBjb21wdXRlV2luZG93ID0gYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgY29uc3QgY3JlYXRlV2luZG93ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgTWFpbkFwcEJyb3dzZXJXaW5kb3dGYWN0b3J5LmNyZWF0ZVdpbmRvdyhCUk9XU0VSX1dJTkRPV19PUFRJT05TLCAnYWJvdXQ6YmxhbmsnKTtcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgaWYgKG5ld1dpbmRvdykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3JlYXRlV2luZG93KCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgZm9jdXNlZFdpbmRvdyA9IEJyb3dzZXJXaW5kb3cuZ2V0Rm9jdXNlZFdpbmRvdygpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGZvY3VzZWRXaW5kb3cpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZvY3VzZWRXaW5kb3c7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGNyZWF0ZVdpbmRvdygpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3Qgd2luZG93ID0gYXdhaXQgY29tcHV0ZVdpbmRvdygpO1xuXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5sb2FkRG9jKHBhdGgsIHdpbmRvdyk7XG5cbiAgICAgICAgfSwgZXh0cmFUYWdzKTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExvYWQgdGhlIGdpdmVuIFBERiBmaWxlIGluIHRoZSBnaXZlbiB0YXJnZXQgd2luZG93LlxuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyBsb2FkRG9jKHBhdGg6IHN0cmluZywgdGFyZ2V0V2luZG93OiBCcm93c2VyV2luZG93KTogUHJvbWlzZTxCcm93c2VyV2luZG93PiB7XG5cbiAgICAgICAgaWYgKCF0YXJnZXRXaW5kb3cpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHRhcmdldCB3aW5kb3cgZ2l2ZW5cIik7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBsb2FkZWRGaWxlID0gYXdhaXQgdGhpcy5maWxlTG9hZGVyLnJlZ2lzdGVyRm9yTG9hZChwYXRoKTtcblxuICAgICAgICBsb2cuaW5mbyhcIkxvYWRpbmcgd2ViYXBwIGF0OiBcIiArIGxvYWRlZEZpbGUud2ViUmVzb3VyY2UpO1xuXG4gICAgICAgIGxvYWRlZEZpbGUud2ViUmVzb3VyY2UubG9hZCh0YXJnZXRXaW5kb3cpO1xuXG4gICAgICAgIHRhcmdldFdpbmRvdy53ZWJDb250ZW50cy5vbmNlKCdkaWQtZmluaXNoLWxvYWQnLCAoKSA9PiB7XG5cbiAgICAgICAgICAgIGlmIChsb2FkZWRGaWxlLnRpdGxlKSB7XG4gICAgICAgICAgICAgICAgLy8gVE9ETzogdGhpcyBzaG91bGQgYmUgZHJpdmVuIGZyb20gdGhlIERvY01ldGEgYW5kIHRoZSBEb2NNZXRhXG4gICAgICAgICAgICAgICAgLy8gc2hvdWxkIGJlIGluaXRpYWxpemVkIGZyb20gdGhlIGRlc2NyaXB0b3IuXG4gICAgICAgICAgICAgICAgdGFyZ2V0V2luZG93LnNldFRpdGxlKGxvYWRlZEZpbGUudGl0bGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobG9hZGVkRmlsZS5kb2NEaW1lbnNpb25zKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBbd2lkdGgsIGhlaWdodF0gPSB0YXJnZXRXaW5kb3cuZ2V0U2l6ZSgpO1xuXG4gICAgICAgICAgICAgICAgLy8gY29tcHV0ZSB0aGUgaWRlYWwgd2lkdGggcGx1cyBhIHNtYWxsIGJ1ZmZlciBmb3IgdGhlIHNpZGVzLlxuICAgICAgICAgICAgICAgIGNvbnN0IGlkZWFsV2lkdGggPSBsb2FkZWRGaWxlLmRvY0RpbWVuc2lvbnMud2lkdGggKyAxMDA7XG5cbiAgICAgICAgICAgICAgICBpZiAod2lkdGggPCBpZGVhbFdpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZy5pbmZvKFwiQWRqdXN0aW5nIHdpbmRvdyB3aWR0aFwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0V2luZG93LnNldFNpemUoaWRlYWxXaWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGFyZ2V0V2luZG93O1xuXG4gICAgfVxuXG4gICAgcHVibGljIGFjdGl2YXRlTWFpbldpbmRvdygpIHtcblxuICAgICAgICBsZXQgYnJvd3NlcldpbmRvd3MgPSBCcm93c2VyV2luZG93LmdldEFsbFdpbmRvd3MoKTtcblxuICAgICAgICBicm93c2VyV2luZG93cyA9IGJyb3dzZXJXaW5kb3dzLmZpbHRlciggYnJvd3NlcldpbmRvdyA9PiBicm93c2VyV2luZG93LmlzVmlzaWJsZSgpKTtcblxuICAgICAgICBpZiAoYnJvd3NlcldpbmRvd3MubGVuZ3RoID09PSAwKSB7XG5cbiAgICAgICAgICAgIEFwcExhdW5jaGVyLmxhdW5jaFJlcG9zaXRvcnlBcHAoKVxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gbG9nLmVycm9yKFwiVW5hYmxlIHRvIG9wZW4gcmVwb3NpdG9yeSBhcHA6IFwiLCBlcnIpKTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbWFpbldpbmRvdyA9IGJyb3dzZXJXaW5kb3dzWzBdO1xuXG4gICAgICAgIGlmIChtYWluV2luZG93LmlzTWluaW1pemVkKCkpIHtcbiAgICAgICAgICAgIG1haW5XaW5kb3cucmVzdG9yZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgbWFpbldpbmRvdy5mb2N1cygpO1xuXG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBPcGVuIGEgZGlhbG9nIGJveCBmb3IgYSBQREYgZmlsZS5cbiAgICAgKi9cbiAgICBwcml2YXRlIGFzeW5jIHByb21wdEltcG9ydERvY3MoKTogUHJvbWlzZTxzdHJpbmdbXSB8IHVuZGVmaW5lZD4ge1xuXG4gICAgICAgIGNvbnN0IGRvd25sb2Fkc0RpciA9IGFwcC5nZXRQYXRoKCdkb3dubG9hZHMnKTtcblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8c3RyaW5nW10gfCB1bmRlZmluZWQ+KChyZXNvbHZlKSA9PiB7XG5cbiAgICAgICAgICAgIGRpYWxvZy5zaG93T3BlbkRpYWxvZyh7XG4gICAgICAgICAgICAgICAgICB0aXRsZTogXCJJbXBvcnQgRG9jdW1lbnRcIixcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRQYXRoOiBkb3dubG9hZHNEaXIsXG4gICAgICAgICAgICAgICAgICBmaWx0ZXJzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiAnRG9jcycsIGV4dGVuc2lvbnM6IFsncGRmJywgXCJwaHpcIiwgXCJQREZcIl0gfVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IFsnb3BlbkZpbGUnLCAnbXVsdGlTZWxlY3Rpb25zJ11cbiAgICAgICAgICAgICAgICAgIC8vIHByb3BlcnRpZXM6IFsnb3BlbkZpbGUnXVxuICAgICAgICAgICAgICB9LCAocGF0aHMpID0+IHtcblxuICAgICAgICAgICAgICAgIHJlc29sdmUocGF0aHMpO1xuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9KTtcblxuICAgIH1cblxufVxuXG4iXX0=