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
const CacheRegistry_1 = require("../../backend/proxyserver/CacheRegistry");
const Directories_1 = require("../../datastore/Directories");
const CaptureController_1 = require("../../capture/controller/CaptureController");
const MainAppController_1 = require("./MainAppController");
const MainAppMenu_1 = require("./MainAppMenu");
const Cmdline_1 = require("../../electron/Cmdline");
const Logger_1 = require("polar-shared/src/logger/Logger");
const ScreenshotService_1 = require("../../screenshots/electron/ScreenshotService");
const DocLoaderService_1 = require("./doc_loaders/electron/ipc/DocLoaderService");
const AppLauncher_1 = require("./AppLauncher");
const DocInfoBroadcasterService_1 = require("../../datastore/advertiser/DocInfoBroadcasterService");
const process_1 = __importDefault(require("process"));
const AppPath_1 = require("../../electron/app_path/AppPath");
const MainAPI_1 = require("./MainAPI");
const MainAppExceptionHandlers_1 = require("./MainAppExceptionHandlers");
const FileImportClient_1 = require("../repository/FileImportClient");
const RendererAnalyticsService_1 = require("../../ga/RendererAnalyticsService");
const AnalyticsFileLoader_1 = require("./file_loaders/AnalyticsFileLoader");
const DefaultFileLoader_1 = require("./file_loaders/DefaultFileLoader");
const FileImportRequests_1 = require("../repository/FileImportRequests");
const DefaultRewrites_1 = require("polar-backend-shared/src/webserver/DefaultRewrites");
const WebserverConfig_1 = require("polar-shared-webserver/src/webserver/WebserverConfig");
const FileRegistry_1 = require("polar-shared-webserver/src/webserver/FileRegistry");
const Webserver_1 = require("polar-shared-webserver/src/webserver/Webserver");
const log = Logger_1.Logger.create();
const WEBSERVER_PORT = 8500;
const PROXYSERVER_PORT = 8600;
class MainApp {
    constructor(datastore) {
        this.datastore = datastore;
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            MainAppExceptionHandlers_1.MainAppExceptionHandlers.register();
            global.datastore = this.datastore;
            const webserverConfig = WebserverConfig_1.WebserverConfigs.create({
                dir: AppPath_1.AppPath.get(),
                port: WEBSERVER_PORT,
                host: 'localhost',
                useSSL: false,
                rewrites: DefaultRewrites_1.DefaultRewrites.create()
            });
            const fileRegistry = new FileRegistry_1.FileRegistry(webserverConfig);
            const cacheRegistry = new CacheRegistry_1.CacheRegistry();
            const directories = new Directories_1.Directories();
            const captureController = new CaptureController_1.CaptureController(cacheRegistry, fileRegistry);
            const defaultFileLoader = new DefaultFileLoader_1.DefaultFileLoader(fileRegistry, cacheRegistry);
            const screenshotService = new ScreenshotService_1.ScreenshotService();
            screenshotService.start();
            new RendererAnalyticsService_1.RendererAnalyticsService().start();
            yield directories.init();
            log.info("Electron app path is: " + electron_1.app.getAppPath());
            const webserver = new Webserver_1.Webserver(webserverConfig, fileRegistry);
            yield webserver.start();
            log.info("App loaded from: ", electron_1.app.getAppPath());
            log.info("Stash dir: ", directories.stashDir);
            log.info("Logs dir: ", directories.logsDir);
            const mainWindow = yield AppLauncher_1.AppLauncher.launchRepositoryApp();
            captureController.start();
            const fileLoader = new AnalyticsFileLoader_1.AnalyticsFileLoader(defaultFileLoader);
            yield new DocInfoBroadcasterService_1.DocInfoBroadcasterService().start();
            log.info("Running with process.args: ", JSON.stringify(process_1.default.argv));
            const mainAppController = new MainAppController_1.MainAppController(fileLoader, webserver);
            global.mainAppController = mainAppController;
            const mainAppAPI = new MainAPI_1.MainAPI(mainAppController, webserver);
            mainAppAPI.start();
            const mainAppService = new DocLoaderService_1.DocLoaderService(mainAppController);
            mainAppService.start();
            const mainAppMenu = new MainAppMenu_1.MainAppMenu(mainAppController);
            mainAppMenu.setup();
            electron_1.app.on('open-file', (event, path) => __awaiter(this, void 0, void 0, function* () {
                log.info("Open file called for: ", path);
                FileImportClient_1.FileImportClient.send(FileImportRequests_1.FileImportRequests.fromPath(path));
            }));
            electron_1.app.on('second-instance', (event, commandLine) => __awaiter(this, void 0, void 0, function* () {
                log.info("Someone opened a second instance.");
                const fileArg = Cmdline_1.Cmdline.getDocArg(commandLine);
                if (fileArg) {
                    FileImportClient_1.FileImportClient.send(FileImportRequests_1.FileImportRequests.fromPath(fileArg));
                }
                else {
                    mainAppController.activateMainWindow();
                }
            }));
            electron_1.app.on('window-all-closed', function () {
                log.info("No windows left. Quitting app.");
                const forcedExit = () => {
                    try {
                        log.info("Forcing app quit...");
                        electron_1.app.quit();
                        log.info("Forcing process exit...");
                        process_1.default.exit();
                    }
                    catch (e) {
                        log.error("Unable to force exit: ", e);
                    }
                };
                const gracefulExit = () => {
                    try {
                        mainAppController.exitApp();
                    }
                    catch (e) {
                        log.error("Failed graceful exit: ", e);
                        forcedExit();
                    }
                };
                gracefulExit();
            });
            electron_1.app.on('activate', function () {
                return __awaiter(this, void 0, void 0, function* () {
                    const visibleWindows = electron_1.BrowserWindow.getAllWindows()
                        .filter(current => current.isVisible());
                    if (visibleWindows.length === 0) {
                        AppLauncher_1.AppLauncher.launchRepositoryApp()
                            .catch(err => log.error("Could not launch repository app: ", err));
                    }
                });
            });
            return { mainWindow, mainAppController };
        });
    }
}
exports.MainApp = MainApp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFpbkFwcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIk1haW5BcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBNEM7QUFDNUMsMkVBQXNFO0FBQ3RFLDZEQUF3RDtBQUN4RCxrRkFBNkU7QUFDN0UsMkRBQXNEO0FBQ3RELCtDQUEwQztBQUMxQyxvREFBK0M7QUFDL0MsMkRBQXNEO0FBRXRELG9GQUErRTtBQUMvRSxrRkFBNkU7QUFDN0UsK0NBQTBDO0FBQzFDLG9HQUErRjtBQUMvRixzREFBOEI7QUFDOUIsNkRBQXdEO0FBQ3hELHVDQUFrQztBQUNsQyx5RUFBb0U7QUFDcEUscUVBQWdFO0FBQ2hFLGdGQUEyRTtBQUMzRSw0RUFBdUU7QUFDdkUsd0VBQW1FO0FBQ25FLHlFQUFvRTtBQUNwRSx3RkFBbUY7QUFDbkYsMEZBQXNGO0FBQ3RGLG9GQUErRTtBQUMvRSw4RUFBeUU7QUFJekUsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLE1BQU0sY0FBYyxHQUFHLElBQUksQ0FBQztBQUk1QixNQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQztBQUU5QixNQUFhLE9BQU87SUFJaEIsWUFBWSxTQUFvQjtRQUM1QixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztJQUMvQixDQUFDO0lBRVksS0FBSzs7WUFFZCxtREFBd0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUlwQyxNQUFNLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7WUFFbEMsTUFBTSxlQUFlLEdBQUcsa0NBQWdCLENBQUMsTUFBTSxDQUFDO2dCQUM1QyxHQUFHLEVBQUUsaUJBQU8sQ0FBQyxHQUFHLEVBQUU7Z0JBQ2xCLElBQUksRUFBRSxjQUFjO2dCQUNwQixJQUFJLEVBQUUsV0FBVztnQkFDakIsTUFBTSxFQUFFLEtBQUs7Z0JBQ2IsUUFBUSxFQUFFLGlDQUFlLENBQUMsTUFBTSxFQUFFO2FB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QUU7eUJBQy9DLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO29CQUU1QyxJQUFJLGNBQWMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO3dCQUU3Qix5QkFBVyxDQUFDLG1CQUFtQixFQUFFOzZCQUM1QixLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLG1DQUFtQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7cUJBRTFFO2dCQUVMLENBQUM7YUFBQSxDQUFDLENBQUM7WUFFSCxPQUFPLEVBQUMsVUFBVSxFQUFFLGlCQUFpQixFQUFDLENBQUM7UUFFM0MsQ0FBQztLQUFBO0NBRUo7QUE1TEQsMEJBNExDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthcHAsIEJyb3dzZXJXaW5kb3d9IGZyb20gJ2VsZWN0cm9uJztcbmltcG9ydCB7Q2FjaGVSZWdpc3RyeX0gZnJvbSAnLi4vLi4vYmFja2VuZC9wcm94eXNlcnZlci9DYWNoZVJlZ2lzdHJ5JztcbmltcG9ydCB7RGlyZWN0b3JpZXN9IGZyb20gJy4uLy4uL2RhdGFzdG9yZS9EaXJlY3Rvcmllcyc7XG5pbXBvcnQge0NhcHR1cmVDb250cm9sbGVyfSBmcm9tICcuLi8uLi9jYXB0dXJlL2NvbnRyb2xsZXIvQ2FwdHVyZUNvbnRyb2xsZXInO1xuaW1wb3J0IHtNYWluQXBwQ29udHJvbGxlcn0gZnJvbSAnLi9NYWluQXBwQ29udHJvbGxlcic7XG5pbXBvcnQge01haW5BcHBNZW51fSBmcm9tICcuL01haW5BcHBNZW51JztcbmltcG9ydCB7Q21kbGluZX0gZnJvbSAnLi4vLi4vZWxlY3Ryb24vQ21kbGluZSc7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7RGF0YXN0b3JlfSBmcm9tICcuLi8uLi9kYXRhc3RvcmUvRGF0YXN0b3JlJztcbmltcG9ydCB7U2NyZWVuc2hvdFNlcnZpY2V9IGZyb20gJy4uLy4uL3NjcmVlbnNob3RzL2VsZWN0cm9uL1NjcmVlbnNob3RTZXJ2aWNlJztcbmltcG9ydCB7RG9jTG9hZGVyU2VydmljZX0gZnJvbSAnLi9kb2NfbG9hZGVycy9lbGVjdHJvbi9pcGMvRG9jTG9hZGVyU2VydmljZSc7XG5pbXBvcnQge0FwcExhdW5jaGVyfSBmcm9tICcuL0FwcExhdW5jaGVyJztcbmltcG9ydCB7RG9jSW5mb0Jyb2FkY2FzdGVyU2VydmljZX0gZnJvbSAnLi4vLi4vZGF0YXN0b3JlL2FkdmVydGlzZXIvRG9jSW5mb0Jyb2FkY2FzdGVyU2VydmljZSc7XG5pbXBvcnQgcHJvY2VzcyBmcm9tIFwicHJvY2Vzc1wiO1xuaW1wb3J0IHtBcHBQYXRofSBmcm9tICcuLi8uLi9lbGVjdHJvbi9hcHBfcGF0aC9BcHBQYXRoJztcbmltcG9ydCB7TWFpbkFQSX0gZnJvbSAnLi9NYWluQVBJJztcbmltcG9ydCB7TWFpbkFwcEV4Y2VwdGlvbkhhbmRsZXJzfSBmcm9tICcuL01haW5BcHBFeGNlcHRpb25IYW5kbGVycyc7XG5pbXBvcnQge0ZpbGVJbXBvcnRDbGllbnR9IGZyb20gJy4uL3JlcG9zaXRvcnkvRmlsZUltcG9ydENsaWVudCc7XG5pbXBvcnQge1JlbmRlcmVyQW5hbHl0aWNzU2VydmljZX0gZnJvbSAnLi4vLi4vZ2EvUmVuZGVyZXJBbmFseXRpY3NTZXJ2aWNlJztcbmltcG9ydCB7QW5hbHl0aWNzRmlsZUxvYWRlcn0gZnJvbSAnLi9maWxlX2xvYWRlcnMvQW5hbHl0aWNzRmlsZUxvYWRlcic7XG5pbXBvcnQge0RlZmF1bHRGaWxlTG9hZGVyfSBmcm9tICcuL2ZpbGVfbG9hZGVycy9EZWZhdWx0RmlsZUxvYWRlcic7XG5pbXBvcnQge0ZpbGVJbXBvcnRSZXF1ZXN0c30gZnJvbSAnLi4vcmVwb3NpdG9yeS9GaWxlSW1wb3J0UmVxdWVzdHMnO1xuaW1wb3J0IHtEZWZhdWx0UmV3cml0ZXN9IGZyb20gXCJwb2xhci1iYWNrZW5kLXNoYXJlZC9zcmMvd2Vic2VydmVyL0RlZmF1bHRSZXdyaXRlc1wiO1xuaW1wb3J0IHtXZWJzZXJ2ZXJDb25maWdzfSBmcm9tIFwicG9sYXItc2hhcmVkLXdlYnNlcnZlci9zcmMvd2Vic2VydmVyL1dlYnNlcnZlckNvbmZpZ1wiO1xuaW1wb3J0IHtGaWxlUmVnaXN0cnl9IGZyb20gXCJwb2xhci1zaGFyZWQtd2Vic2VydmVyL3NyYy93ZWJzZXJ2ZXIvRmlsZVJlZ2lzdHJ5XCI7XG5pbXBvcnQge1dlYnNlcnZlcn0gZnJvbSBcInBvbGFyLXNoYXJlZC13ZWJzZXJ2ZXIvc3JjL3dlYnNlcnZlci9XZWJzZXJ2ZXJcIjtcblxuZGVjbGFyZSB2YXIgZ2xvYmFsOiBhbnk7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuY29uc3QgV0VCU0VSVkVSX1BPUlQgPSA4NTAwO1xuXG4vLyBUT0RPOiByZWZhY3RvciB0aGUgcHJveHkgc2VydmVyIGlzbid0IHVzZWQgYW55IGxvbmdlciBidXQgaXQgaXMgcmVmZXJlbmNlZFxuLy8gaW4gYSBudW1iZXIgb2YgcGxhY2VzIGluY2x1ZGluZyB0aGUgY2FjaGUgY29uZmlnIGFuZCByZWdpc3RyeS5cbmNvbnN0IFBST1hZU0VSVkVSX1BPUlQgPSA4NjAwO1xuXG5leHBvcnQgY2xhc3MgTWFpbkFwcCB7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IGRhdGFzdG9yZTogRGF0YXN0b3JlO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YXN0b3JlOiBEYXRhc3RvcmUpIHtcbiAgICAgICAgdGhpcy5kYXRhc3RvcmUgPSBkYXRhc3RvcmU7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIHN0YXJ0KCk6IFByb21pc2U8TWFpbkFwcFN0YXJ0ZWQ+IHtcblxuICAgICAgICBNYWluQXBwRXhjZXB0aW9uSGFuZGxlcnMucmVnaXN0ZXIoKTtcblxuICAgICAgICAvLyBzaGFyZSB0aGUgZGlzayBkYXRhc3RvcmUgd2l0aCB0aGUgcmVtb3RlLlxuICAgICAgICAvLyBUT0RPOiBtb3ZlIHRoaXMgc28gdGhhdCB3ZSBkb24ndCBleHBvc2UgJ2dsb2JhbCcgaGVyZS5cbiAgICAgICAgZ2xvYmFsLmRhdGFzdG9yZSA9IHRoaXMuZGF0YXN0b3JlO1xuXG4gICAgICAgIGNvbnN0IHdlYnNlcnZlckNvbmZpZyA9IFdlYnNlcnZlckNvbmZpZ3MuY3JlYXRlKHtcbiAgICAgICAgICAgIGRpcjogQXBwUGF0aC5nZXQoKSxcbiAgICAgICAgICAgIHBvcnQ6IFdFQlNFUlZFUl9QT1JULFxuICAgICAgICAgICAgaG9zdDogJ2xvY2FsaG9zdCcsXG4gICAgICAgICAgICB1c2VTU0w6IGZhbHNlLFxuICAgICAgICAgICAgcmV3cml0ZXM6IERlZmF1bHRSZXdyaXRlcy5jcmVhdGUoKVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBmaWxlUmVnaXN0cnkgPSBuZXcgRmlsZVJlZ2lzdHJ5KHdlYnNlcnZlckNvbmZpZyk7XG5cbiAgICAgICAgY29uc3QgY2FjaGVSZWdpc3RyeSA9IG5ldyBDYWNoZVJlZ2lzdHJ5KCk7XG5cbiAgICAgICAgY29uc3QgZGlyZWN0b3JpZXMgPSBuZXcgRGlyZWN0b3JpZXMoKTtcblxuICAgICAgICBjb25zdCBjYXB0dXJlQ29udHJvbGxlciA9IG5ldyBDYXB0dXJlQ29udHJvbGxlcihjYWNoZVJlZ2lzdHJ5LCBmaWxlUmVnaXN0cnkpO1xuXG4gICAgICAgIC8vIGNvbnN0IGRpYWxvZ1dpbmRvd1NlcnZpY2UgPSBuZXcgRGlhbG9nV2luZG93U2VydmljZSgpO1xuXG4gICAgICAgIGNvbnN0IGRlZmF1bHRGaWxlTG9hZGVyID0gbmV3IERlZmF1bHRGaWxlTG9hZGVyKGZpbGVSZWdpc3RyeSwgY2FjaGVSZWdpc3RyeSk7XG5cbiAgICAgICAgY29uc3Qgc2NyZWVuc2hvdFNlcnZpY2UgPSBuZXcgU2NyZWVuc2hvdFNlcnZpY2UoKTtcbiAgICAgICAgc2NyZWVuc2hvdFNlcnZpY2Uuc3RhcnQoKTtcblxuICAgICAgICBuZXcgUmVuZGVyZXJBbmFseXRpY3NTZXJ2aWNlKCkuc3RhcnQoKTtcblxuICAgICAgICBhd2FpdCBkaXJlY3Rvcmllcy5pbml0KCk7XG5cbiAgICAgICAgbG9nLmluZm8oXCJFbGVjdHJvbiBhcHAgcGF0aCBpczogXCIgKyBhcHAuZ2V0QXBwUGF0aCgpKTtcblxuICAgICAgICAvLyAqKiogc3RhcnQgdGhlIHdlYnNlcnZlclxuXG4gICAgICAgIGNvbnN0IHdlYnNlcnZlciA9IG5ldyBXZWJzZXJ2ZXIod2Vic2VydmVyQ29uZmlnLCBmaWxlUmVnaXN0cnkpO1xuICAgICAgICBhd2FpdCB3ZWJzZXJ2ZXIuc3RhcnQoKTtcblxuICAgICAgICBsb2cuaW5mbyhcIkFwcCBsb2FkZWQgZnJvbTogXCIsIGFwcC5nZXRBcHBQYXRoKCkpO1xuICAgICAgICBsb2cuaW5mbyhcIlN0YXNoIGRpcjogXCIsIGRpcmVjdG9yaWVzLnN0YXNoRGlyKTtcbiAgICAgICAgbG9nLmluZm8oXCJMb2dzIGRpcjogXCIsIGRpcmVjdG9yaWVzLmxvZ3NEaXIpO1xuXG4gICAgICAgIC8vIE5PVEU6IHJlbW92aW5nIHRoZSBuZXh0IHRocmVlIGxpbmVzIHJlbW92ZXMgdGhlIGNvbG9ycyBpbiB0aGVcbiAgICAgICAgLy8gdG9vbGJhci4gY29uc3QgYXBwSWNvbiA9IG5ldyBUcmF5KGFwcF9pY29uKTtcbiAgICAgICAgLy8gYXBwSWNvbi5zZXRUb29sVGlwKCdQb2xhciBCb29rc2hlbGYnKTtcbiAgICAgICAgLy8gYXBwSWNvbi5zZXRDb250ZXh0TWVudShjb250ZXh0TWVudSk7XG5cbiAgICAgICAgY29uc3QgbWFpbldpbmRvdyA9IGF3YWl0IEFwcExhdW5jaGVyLmxhdW5jaFJlcG9zaXRvcnlBcHAoKTtcblxuICAgICAgICAvLyBjcmVhdGUgYSBzZXNzaW9uIGFuZCBjb25maWd1cmUgaXQgZm9yIHRoZSBwb2xhciB3aGljaCBpcyBwZXJzaXN0ZW50XG4gICAgICAgIC8vIGFjcm9zcyByZXN0YXJ0cyBzbyB0aGF0IHdlIGRvIG5vdCBsb3NlIGNvb2tpZXMsIGV0Yy5cblxuICAgICAgICAvLyBtYWluU2Vzc2lvbi5jb29raWVzLmdldCh7fSwgKGVyciwgY29va2llcykgPT4ge1xuICAgICAgICAvL1xuICAgICAgICAvLyAgICAgY29va2llcy5maWx0ZXIoY29va2llID0+IHtcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcIkZvdW5kIGNvb2tpZTogXCIgLCBjb29raWUpO1xuICAgICAgICAvLyAgICAgfSk7XG4gICAgICAgIC8vXG4gICAgICAgIC8vIH0pO1xuXG4gICAgICAgIC8vIGNvbnN0IGNhY2hlSW50ZXJjZXB0b3JTZXJ2aWNlID1cbiAgICAgICAgLy8gICAgIG5ldyBDYWNoaW5nU3RyZWFtSW50ZXJjZXB0b3JTZXJ2aWNlKGNhY2hlUmVnaXN0cnksIG1haW5TZXNzaW9uLnByb3RvY29sKTtcblxuICAgICAgICAvLyBhd2FpdCBjYWNoZUludGVyY2VwdG9yU2VydmljZS5zdGFydCgpXG4gICAgICAgIC8vICAgICAuY2F0Y2goZXJyID0+IGxvZy5lcnJvcihlcnIpKTtcblxuICAgICAgICBjYXB0dXJlQ29udHJvbGxlci5zdGFydCgpO1xuXG4gICAgICAgIGNvbnN0IGZpbGVMb2FkZXIgPSBuZXcgQW5hbHl0aWNzRmlsZUxvYWRlcihkZWZhdWx0RmlsZUxvYWRlcik7XG5cbiAgICAgICAgYXdhaXQgbmV3IERvY0luZm9Ccm9hZGNhc3RlclNlcnZpY2UoKS5zdGFydCgpO1xuXG4gICAgICAgIGxvZy5pbmZvKFwiUnVubmluZyB3aXRoIHByb2Nlc3MuYXJnczogXCIsIEpTT04uc3RyaW5naWZ5KHByb2Nlc3MuYXJndikpO1xuXG4gICAgICAgIGNvbnN0IG1haW5BcHBDb250cm9sbGVyID0gbmV3IE1haW5BcHBDb250cm9sbGVyKGZpbGVMb2FkZXIsIHdlYnNlcnZlcik7XG5cbiAgICAgICAgZ2xvYmFsLm1haW5BcHBDb250cm9sbGVyID0gbWFpbkFwcENvbnRyb2xsZXI7XG5cbiAgICAgICAgY29uc3QgbWFpbkFwcEFQSSA9IG5ldyBNYWluQVBJKG1haW5BcHBDb250cm9sbGVyLCB3ZWJzZXJ2ZXIpO1xuICAgICAgICBtYWluQXBwQVBJLnN0YXJ0KCk7XG5cbiAgICAgICAgY29uc3QgbWFpbkFwcFNlcnZpY2UgPSBuZXcgRG9jTG9hZGVyU2VydmljZShtYWluQXBwQ29udHJvbGxlcik7XG4gICAgICAgIG1haW5BcHBTZXJ2aWNlLnN0YXJ0KCk7XG5cbiAgICAgICAgLy8gVE9ETzogaGFuZGxlIHRoZSBjb21tYW5kIGxpbmUgaGVyZS4uIElFIGlmIHNvbWVvbmUgb3BlbnMgdXAgYSBmaWxlXG4gICAgICAgIC8vIHZpYSBhcmd1bWVudC5cblxuICAgICAgICBjb25zdCBtYWluQXBwTWVudSA9IG5ldyBNYWluQXBwTWVudShtYWluQXBwQ29udHJvbGxlcik7XG4gICAgICAgIG1haW5BcHBNZW51LnNldHVwKCk7XG5cbiAgICAgICAgYXBwLm9uKCdvcGVuLWZpbGUnLCBhc3luYyAoZXZlbnQsIHBhdGgpID0+IHtcblxuICAgICAgICAgICAgbG9nLmluZm8oXCJPcGVuIGZpbGUgY2FsbGVkIGZvcjogXCIsIHBhdGgpO1xuICAgICAgICAgICAgRmlsZUltcG9ydENsaWVudC5zZW5kKEZpbGVJbXBvcnRSZXF1ZXN0cy5mcm9tUGF0aChwYXRoKSk7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXBwLm9uKCdzZWNvbmQtaW5zdGFuY2UnLCBhc3luYyAoZXZlbnQsIGNvbW1hbmRMaW5lKSA9PiB7XG5cbiAgICAgICAgICAgIGxvZy5pbmZvKFwiU29tZW9uZSBvcGVuZWQgYSBzZWNvbmQgaW5zdGFuY2UuXCIpO1xuXG4gICAgICAgICAgICBjb25zdCBmaWxlQXJnID0gQ21kbGluZS5nZXREb2NBcmcoY29tbWFuZExpbmUpO1xuXG4gICAgICAgICAgICBpZiAoZmlsZUFyZykge1xuXG4gICAgICAgICAgICAgICAgRmlsZUltcG9ydENsaWVudC5zZW5kKEZpbGVJbXBvcnRSZXF1ZXN0cy5mcm9tUGF0aChmaWxlQXJnKSk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbWFpbkFwcENvbnRyb2xsZXIuYWN0aXZhdGVNYWluV2luZG93KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gcXVpdCB3aGVuIGFsbCB3aW5kb3dzIGFyZSBjbG9zZWQuXG4gICAgICAgIGFwcC5vbignd2luZG93LWFsbC1jbG9zZWQnLCBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgLy8gZGV0ZXJtaW5lIGlmIHdlIG5lZWQgdG8gcXVpdDpcbiAgICAgICAgICAgIGxvZy5pbmZvKFwiTm8gd2luZG93cyBsZWZ0LiBRdWl0dGluZyBhcHAuXCIpO1xuXG4gICAgICAgICAgICBjb25zdCBmb3JjZWRFeGl0ID0gKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgdHJ5IHtcblxuICAgICAgICAgICAgICAgICAgICBsb2cuaW5mbyhcIkZvcmNpbmcgYXBwIHF1aXQuLi5cIik7XG4gICAgICAgICAgICAgICAgICAgIGFwcC5xdWl0KCk7XG4gICAgICAgICAgICAgICAgICAgIGxvZy5pbmZvKFwiRm9yY2luZyBwcm9jZXNzIGV4aXQuLi5cIik7XG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3MuZXhpdCgpO1xuXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICBsb2cuZXJyb3IoXCJVbmFibGUgdG8gZm9yY2UgZXhpdDogXCIsIGUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3QgZ3JhY2VmdWxFeGl0ID0gKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgbWFpbkFwcENvbnRyb2xsZXIuZXhpdEFwcCgpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nLmVycm9yKFwiRmFpbGVkIGdyYWNlZnVsIGV4aXQ6IFwiLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yY2VkRXhpdCgpO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBncmFjZWZ1bEV4aXQoKTtcblxuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGFwcC5vbignYWN0aXZhdGUnLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgLy8gT24gT1MgWCBpdCdzIGNvbW1vbiB0byByZS1jcmVhdGUgYSB3aW5kb3cgaW4gdGhlIGFwcCB3aGVuIHRoZVxuICAgICAgICAgICAgLy8gZG9jayBpY29uIGlzIGNsaWNrZWQgYW5kIHRoZXJlIGFyZSBubyBvdGhlciB3aW5kb3dzIG9wZW4uIFRoZVxuICAgICAgICAgICAgLy8gd2F5XG4gICAgICAgICAgICAvLyB3ZSBoYW5kbGUgdGhpcyBub3cgaXMgdGhhdCBpZiB0aGVyZSBhcmUgbm8gd2luZG93cyBvcGVuIHdlXG4gICAgICAgICAgICAvLyByZS1jcmVhdGUgdGhlIGRvY3VtZW50IHJlcG9zaXRvcnkgc28gdGhleSBjYW4gc2VsZWN0IG9uZS5cbiAgICAgICAgICAgIC8vIE90aGVyd2lzZSB3ZSBqdXN0IHJlLWZvY3VzIHRoZSBtb3N0IHJlY2VudGx5IHVzZWQgd2luZG93LlxuXG4gICAgICAgICAgICBjb25zdCB2aXNpYmxlV2luZG93cyA9IEJyb3dzZXJXaW5kb3cuZ2V0QWxsV2luZG93cygpXG4gICAgICAgICAgICAgICAgLmZpbHRlcihjdXJyZW50ID0+IGN1cnJlbnQuaXNWaXNpYmxlKCkpO1xuXG4gICAgICAgICAgICBpZiAodmlzaWJsZVdpbmRvd3MubGVuZ3RoID09PSAwKSB7XG5cbiAgICAgICAgICAgICAgICBBcHBMYXVuY2hlci5sYXVuY2hSZXBvc2l0b3J5QXBwKClcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBsb2cuZXJyb3IoXCJDb3VsZCBub3QgbGF1bmNoIHJlcG9zaXRvcnkgYXBwOiBcIiwgZXJyKSk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4ge21haW5XaW5kb3csIG1haW5BcHBDb250cm9sbGVyfTtcblxuICAgIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1haW5BcHBTdGFydGVkIHtcbiAgICBtYWluV2luZG93OiBCcm93c2VyV2luZG93O1xuICAgIG1haW5BcHBDb250cm9sbGVyOiBNYWluQXBwQ29udHJvbGxlcjtcbn1cblxuIl19