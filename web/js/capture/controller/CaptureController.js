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
const ResourcePaths_1 = require("../../electron/webresource/ResourcePaths");
const electron_1 = require("electron");
const Preconditions_1 = require("polar-shared/src/Preconditions");
const Logger_1 = require("polar-shared/src/logger/Logger");
const BrowserRegistry_1 = __importDefault(require("../BrowserRegistry"));
const BrowserProfiles_1 = require("../BrowserProfiles");
const Capture_1 = require("../Capture");
const Directories_1 = require("../../datastore/Directories");
const PHZLoader_1 = require("../../apps/main/file_loaders/PHZLoader");
const log = Logger_1.Logger.create();
class CaptureController {
    constructor(cacheRegistry, fileRegistry) {
        this.cacheRegistry = cacheRegistry;
        this.fileRegistry = fileRegistry;
        this.directories = new Directories_1.Directories();
        this.phzLoader = new PHZLoader_1.PHZLoader(cacheRegistry, fileRegistry);
    }
    start() {
        electron_1.ipcMain.on('capture-controller-start-capture', (event, message) => {
            this.startCapture(event.sender, message.url)
                .catch(err => log.error("Could not start capture: ", err));
        });
    }
    startCapture(webContents, url) {
        return __awaiter(this, void 0, void 0, function* () {
            webContents = yield this.loadApp(webContents, url);
            const captureResult = yield this.runCapture(webContents, url);
            yield this.loadPHZ(webContents, captureResult.path);
        });
    }
    loadApp(webContents, url) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                log.debug("Starting capture for URL: " + url);
                const appPath = ResourcePaths_1.ResourcePaths.absoluteFromRelativePath('./apps/capture/progress/index.html');
                const appURL = 'file://' + appPath;
                webContents.once("did-finish-load", () => {
                    resolve(webContents);
                });
                log.debug("Loading app: ", appURL);
                yield webContents.loadURL(appURL);
            }));
        });
    }
    runCapture(webContents, url) {
        return __awaiter(this, void 0, void 0, function* () {
            Preconditions_1.Preconditions.assertNotNull(webContents, "webContents");
            const progressForwarder = new ProgressForwarder({ webContents });
            const captureOpts = {
                pendingWebRequestsCallback: (event) => progressForwarder.pendingWebRequestsCallback(event),
                amp: true
            };
            const browser = BrowserRegistry_1.default.DEFAULT;
            const browserProfile = BrowserProfiles_1.BrowserProfiles.toBrowserProfile(browser, "WEBVIEW");
            browserProfile.navigation.navigated.dispatchEvent({ link: url });
            browserProfile.navigation.captured.dispatchEvent({});
            const capture = new Capture_1.Capture(browserProfile, captureOpts);
            const captureResult = yield capture.start();
            log.info("captureResult: ", captureResult);
            return captureResult;
        });
    }
    loadPHZ(webContents, path) {
        return __awaiter(this, void 0, void 0, function* () {
            const loadedFile = yield this.phzLoader.registerForLoad(path);
            log.debug(`Loading PHZ URL via: `, loadedFile.webResource);
            loadedFile.webResource.loadWebContents(webContents);
        });
    }
}
exports.CaptureController = CaptureController;
class ProgressForwarder {
    constructor(opts) {
        this.webContents = opts.webContents;
        Preconditions_1.Preconditions.assertNotNull(this.webContents, "webContents");
    }
    pendingWebRequestsCallback(event) {
        this.webContents.send("capture-progress-update", event);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FwdHVyZUNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJDYXB0dXJlQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLDRFQUF1RTtBQUN2RSx1Q0FBaUM7QUFDakMsa0VBQTZEO0FBQzdELDJEQUFzRDtBQUN0RCx5RUFBaUQ7QUFDakQsd0RBQW1EO0FBQ25ELHdDQUFtQztBQUluQyw2REFBd0Q7QUFFeEQsc0VBQWlFO0FBR2pFLE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU1QixNQUFhLGlCQUFpQjtJQU0xQixZQUE2QixhQUE0QixFQUM1QixZQUEwQjtRQUQxQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUx0QyxnQkFBVyxHQUFnQixJQUFJLHlCQUFXLEVBQUUsQ0FBQztRQU8xRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUkscUJBQVMsQ0FBQyxhQUFhLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFFaEUsQ0FBQztJQUtNLEtBQUs7UUFFUixrQkFBTyxDQUFDLEVBQUUsQ0FBQyxrQ0FBa0MsRUFBRSxDQUFDLEtBQXFCLEVBQUUsT0FBNEIsRUFBRSxFQUFFO1lBRW5HLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDO2lCQUN2QyxLQUFLLENBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLDJCQUEyQixFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFcEUsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDO0lBU2UsWUFBWSxDQUFDLFdBQWlDLEVBQUUsR0FBVzs7WUFFdkUsV0FBVyxHQUFHLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFFbkQsTUFBTSxhQUFhLEdBQUcsTUFB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LENBQUMseUJBQXlCLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFFNUQsQ0FBQztDQUVKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtSZXNvdXJjZVBhdGhzfSBmcm9tIFwiLi4vLi4vZWxlY3Ryb24vd2VicmVzb3VyY2UvUmVzb3VyY2VQYXRoc1wiO1xuaW1wb3J0IHtpcGNNYWlufSBmcm9tICdlbGVjdHJvbic7XG5pbXBvcnQge1ByZWNvbmRpdGlvbnN9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvUHJlY29uZGl0aW9ucyc7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCBCcm93c2VyUmVnaXN0cnkgZnJvbSAnLi4vQnJvd3NlclJlZ2lzdHJ5JztcbmltcG9ydCB7QnJvd3NlclByb2ZpbGVzfSBmcm9tICcuLi9Ccm93c2VyUHJvZmlsZXMnO1xuaW1wb3J0IHtDYXB0dXJlfSBmcm9tICcuLi9DYXB0dXJlJztcbmltcG9ydCB7UGVuZGluZ1dlYlJlcXVlc3RzRXZlbnR9IGZyb20gJy4uLy4uL3dlYnJlcXVlc3RzL1BlbmRpbmdXZWJSZXF1ZXN0c0xpc3RlbmVyJztcbmltcG9ydCB7Q2FwdHVyZU9wdHN9IGZyb20gJy4uL0NhcHR1cmVPcHRzJztcbmltcG9ydCB7U3RhcnRDYXB0dXJlTWVzc2FnZX0gZnJvbSAnLi9DYXB0dXJlQ2xpZW50JztcbmltcG9ydCB7RGlyZWN0b3JpZXN9IGZyb20gJy4uLy4uL2RhdGFzdG9yZS9EaXJlY3Rvcmllcyc7XG5pbXBvcnQge0NhY2hlUmVnaXN0cnl9IGZyb20gJy4uLy4uL2JhY2tlbmQvcHJveHlzZXJ2ZXIvQ2FjaGVSZWdpc3RyeSc7XG5pbXBvcnQge1BIWkxvYWRlcn0gZnJvbSBcIi4uLy4uL2FwcHMvbWFpbi9maWxlX2xvYWRlcnMvUEhaTG9hZGVyXCI7XG5pbXBvcnQge0ZpbGVSZWdpc3RyeX0gZnJvbSBcInBvbGFyLXNoYXJlZC13ZWJzZXJ2ZXIvc3JjL3dlYnNlcnZlci9GaWxlUmVnaXN0cnlcIjtcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG5leHBvcnQgY2xhc3MgQ2FwdHVyZUNvbnRyb2xsZXIge1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBkaXJlY3RvcmllczogRGlyZWN0b3JpZXMgPSBuZXcgRGlyZWN0b3JpZXMoKTtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgcGh6TG9hZGVyOiBQSFpMb2FkZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNhY2hlUmVnaXN0cnk6IENhY2hlUmVnaXN0cnksXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByZWFkb25seSBmaWxlUmVnaXN0cnk6IEZpbGVSZWdpc3RyeSkge1xuXG4gICAgICAgIHRoaXMucGh6TG9hZGVyID0gbmV3IFBIWkxvYWRlcihjYWNoZVJlZ2lzdHJ5LCBmaWxlUmVnaXN0cnkpO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3RhcnQgdGhlIHNlcnZpY2UgdG8gcmVjZWl2ZSBhbmQgaGFuZGxlIElQQyBtZXNzYWdlcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhcnQoKSB7XG5cbiAgICAgICAgaXBjTWFpbi5vbignY2FwdHVyZS1jb250cm9sbGVyLXN0YXJ0LWNhcHR1cmUnLCAoZXZlbnQ6IEVsZWN0cm9uLkV2ZW50LCBtZXNzYWdlOiBTdGFydENhcHR1cmVNZXNzYWdlKSA9PiB7XG5cbiAgICAgICAgICAgIHRoaXMuc3RhcnRDYXB0dXJlKGV2ZW50LnNlbmRlciwgbWVzc2FnZS51cmwpXG4gICAgICAgICAgICAgICAgLmNhdGNoKCBlcnIgPT4gbG9nLmVycm9yKFwiQ291bGQgbm90IHN0YXJ0IGNhcHR1cmU6IFwiLCBlcnIpKTtcblxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHdlYkNvbnRlbnRzIHtFbGVjdHJvbi5XZWJDb250ZW50c30gVGhlIHdlYkNvbnRlbnRzIG9mIHRoZSBkaWFsb2dcbiAgICAgKiBib3ggdGhhdCBzdGFydGVkIHRoZSB3aG9sZSBjYXB0dXJlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHVybCB7c3RyaW5nfVxuICAgICAqL1xuICAgIHByb3RlY3RlZCBhc3luYyBzdGFydENhcHR1cmUod2ViQ29udGVudHM6IEVsZWN0cm9uLldlYkNvbnRlbnRzLCB1cmw6IHN0cmluZykge1xuXG4gICAgICAgIHdlYkNvbnRlbnRzID0gYXdhaXQgdGhpcy5sb2FkQXBwKHdlYkNvbnRlbnRzLCB1cmwpO1xuXG4gICAgICAgIGNvbnN0IGNhcHR1cmVSZXN1bHQgPSBhd2FpdCB0aGlzLnJ1bkNhcHR1cmUod2ViQ29udGVudHMsIHVybCk7XG4gICAgICAgIC8vXG4gICAgICAgIC8vIGxldCBjYXB0dXJlUmVzdWx0ID0ge1xuICAgICAgICAvLyAgICAgcGF0aDpcbiAgICAgICAgLy8gXCIvaG9tZS9idXJ0b24vLnBvbGFyL3N0YXNoL1VLX3VudmVpbHNfbmV3X1RlbXBlc3RfZmlnaHRlcl9qZXRfbW9kZWxfX19CQkNfTmV3cy5waHpcIlxuICAgICAgICAvLyB9O1xuXG4gICAgICAgIC8vIG5vdyBsb2FkIHRoZSBwaHogaW4gdGhlIHRhcmdldCB3aW5kb3dcblxuICAgICAgICBhd2FpdCB0aGlzLmxvYWRQSFood2ViQ29udGVudHMsIGNhcHR1cmVSZXN1bHQucGF0aCk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGxvYWRBcHAod2ViQ29udGVudHM6IEVsZWN0cm9uLldlYkNvbnRlbnRzLCB1cmw6IHN0cmluZyk6IFByb21pc2U8RWxlY3Ryb24uV2ViQ29udGVudHM+IHtcblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8RWxlY3Ryb24uV2ViQ29udGVudHM+KGFzeW5jIHJlc29sdmUgPT4ge1xuXG4gICAgICAgICAgICBsb2cuZGVidWcoXCJTdGFydGluZyBjYXB0dXJlIGZvciBVUkw6IFwiICsgdXJsKTtcblxuICAgICAgICAgICAgY29uc3QgYXBwUGF0aCA9IFJlc291cmNlUGF0aHMuYWJzb2x1dGVGcm9tUmVsYXRpdmVQYXRoKCcuL2FwcHMvY2FwdHVyZS9wcm9ncmVzcy9pbmRleC5odG1sJyk7XG4gICAgICAgICAgICBjb25zdCBhcHBVUkwgPSAnZmlsZTovLycgKyBhcHBQYXRoO1xuXG4gICAgICAgICAgICB3ZWJDb250ZW50cy5vbmNlKFwiZGlkLWZpbmlzaC1sb2FkXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHdlYkNvbnRlbnRzKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBsb2cuZGVidWcoXCJMb2FkaW5nIGFwcDogXCIsIGFwcFVSTCk7XG5cbiAgICAgICAgICAgIGF3YWl0IHdlYkNvbnRlbnRzLmxvYWRVUkwoYXBwVVJMKTtcblxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHdlYkNvbnRlbnRzIFRoZSB3ZWJDb250ZW50cyBwYWdlIHRoYXQgc2hvdWxkIGJlIHVwZGF0ZWQgd2l0aCBvdXJcbiAgICAgKiBwcm9ncmVzcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB1cmwgVGhlIFVSTCB0byBjYXB0dXJlLlxuICAgICAqXG4gICAgICovXG4gICAgcHJpdmF0ZSBhc3luYyBydW5DYXB0dXJlKHdlYkNvbnRlbnRzOiBFbGVjdHJvbi5XZWJDb250ZW50cywgdXJsOiBzdHJpbmcpIHtcblxuICAgICAgICBQcmVjb25kaXRpb25zLmFzc2VydE5vdE51bGwod2ViQ29udGVudHMsIFwid2ViQ29udGVudHNcIik7XG5cbiAgICAgICAgY29uc3QgcHJvZ3Jlc3NGb3J3YXJkZXIgPSBuZXcgUHJvZ3Jlc3NGb3J3YXJkZXIoe3dlYkNvbnRlbnRzfSk7XG5cbiAgICAgICAgY29uc3QgY2FwdHVyZU9wdHM6IENhcHR1cmVPcHRzID0ge1xuICAgICAgICAgICAgcGVuZGluZ1dlYlJlcXVlc3RzQ2FsbGJhY2s6IChldmVudCkgPT4gcHJvZ3Jlc3NGb3J3YXJkZXIucGVuZGluZ1dlYlJlcXVlc3RzQ2FsbGJhY2soZXZlbnQpLFxuICAgICAgICAgICAgYW1wOiB0cnVlXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgYnJvd3NlciA9IEJyb3dzZXJSZWdpc3RyeS5ERUZBVUxUO1xuXG4gICAgICAgIC8vIGJyb3dzZXIgPSBCcm93c2Vycy50b1Byb2ZpbGUoYnJvd3NlciwgXCJoZWFkbGVzc1wiKTtcbiAgICAgICAgLy8gVE9ETzogdGhpcyBzaG91bGQgYmUgJ2RlZmF1bHQnIG5vdCAnaGlkZGVuJ1xuXG4gICAgICAgIC8vIGJyb3dzZXIgPSBCcm93c2Vycy50b1Byb2ZpbGUoYnJvd3NlciwgXCJkZWZhdWx0XCIpO1xuICAgICAgICBjb25zdCBicm93c2VyUHJvZmlsZSA9IEJyb3dzZXJQcm9maWxlcy50b0Jyb3dzZXJQcm9maWxlKGJyb3dzZXIsIFwiV0VCVklFV1wiKTtcblxuICAgICAgICBicm93c2VyUHJvZmlsZS5uYXZpZ2F0aW9uLm5hdmlnYXRlZC5kaXNwYXRjaEV2ZW50KHtsaW5rOiB1cmx9KTtcbiAgICAgICAgYnJvd3NlclByb2ZpbGUubmF2aWdhdGlvbi5jYXB0dXJlZC5kaXNwYXRjaEV2ZW50KHt9KTtcblxuICAgICAgICBjb25zdCBjYXB0dXJlID0gbmV3IENhcHR1cmUoYnJvd3NlclByb2ZpbGUsIGNhcHR1cmVPcHRzKTtcblxuICAgICAgICBjb25zdCBjYXB0dXJlUmVzdWx0ID0gYXdhaXQgY2FwdHVyZS5zdGFydCgpO1xuXG4gICAgICAgIGxvZy5pbmZvKFwiY2FwdHVyZVJlc3VsdDogXCIsIGNhcHR1cmVSZXN1bHQpO1xuXG4gICAgICAgIHJldHVybiBjYXB0dXJlUmVzdWx0O1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gd2ViQ29udGVudHMge0VsZWN0cm9uLldlYkNvbnRlbnRzfVxuICAgICAqIEBwYXJhbSBwYXRoIHtzdHJpbmd9IFRoZSBwYXRoIHRvIG91ciBwaHogZmlsZS5cbiAgICAgKi9cbiAgICBwcml2YXRlIGFzeW5jIGxvYWRQSFood2ViQ29udGVudHM6IEVsZWN0cm9uLldlYkNvbnRlbnRzLCBwYXRoOiBzdHJpbmcpIHtcblxuICAgICAgICBjb25zdCBsb2FkZWRGaWxlID0gYXdhaXQgdGhpcy5waHpMb2FkZXIucmVnaXN0ZXJGb3JMb2FkKHBhdGgpO1xuXG4gICAgICAgIGxvZy5kZWJ1ZyhgTG9hZGluZyBQSFogVVJMIHZpYTogYCwgbG9hZGVkRmlsZS53ZWJSZXNvdXJjZSk7XG5cbiAgICAgICAgbG9hZGVkRmlsZS53ZWJSZXNvdXJjZS5sb2FkV2ViQ29udGVudHMod2ViQ29udGVudHMpO1xuXG4gICAgfVxuXG59XG5cblxuY2xhc3MgUHJvZ3Jlc3NGb3J3YXJkZXIge1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSB3ZWJDb250ZW50czogRWxlY3Ryb24uV2ViQ29udGVudHM7XG5cbiAgICBjb25zdHJ1Y3RvcihvcHRzOiBhbnkpIHtcblxuICAgICAgICB0aGlzLndlYkNvbnRlbnRzID0gb3B0cy53ZWJDb250ZW50cztcblxuICAgICAgICBQcmVjb25kaXRpb25zLmFzc2VydE5vdE51bGwodGhpcy53ZWJDb250ZW50cywgXCJ3ZWJDb250ZW50c1wiKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBwZW5kaW5nV2ViUmVxdWVzdHNDYWxsYmFjayhldmVudDogUGVuZGluZ1dlYlJlcXVlc3RzRXZlbnQpIHtcblxuICAgICAgICB0aGlzLndlYkNvbnRlbnRzLnNlbmQoXCJjYXB0dXJlLXByb2dyZXNzLXVwZGF0ZVwiLCBldmVudCk7XG5cbiAgICB9XG5cbn1cbiJdfQ==