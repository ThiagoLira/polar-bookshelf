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
const CaptureOpts_1 = require("./CaptureOpts");
const Logger_1 = require("polar-shared/src/logger/Logger");
const Preconditions_1 = require("polar-shared/src/Preconditions");
const PendingWebRequestsListener_1 = require("../webrequests/PendingWebRequestsListener");
const DebugWebRequestsListener_1 = require("../webrequests/DebugWebRequestsListener");
const WebRequestReactor_1 = require("../webrequests/WebRequestReactor");
const WebContentsDriver_1 = require("./drivers/WebContentsDriver");
const Optional_1 = require("polar-shared/src/util/ts/Optional");
const Functions_1 = require("polar-shared/src/util/Functions");
const ContentCaptureExecutor_1 = require("./ContentCaptureExecutor");
const BrowserRegistry_1 = __importDefault(require("./BrowserRegistry"));
const BrowserProfiles_1 = require("./BrowserProfiles");
const Strings_1 = require("polar-shared/src/util/Strings");
const Latch_1 = require("polar-shared/src/util/Latch");
const Objects_1 = require("polar-shared/src/util/Objects");
const log = Logger_1.Logger.create();
const EXECUTE_CAPTURE_DELAY = 1500;
class Capture {
    constructor(browserProfile, captureOpts = {}) {
        this.webRequestReactors = [];
        this.result = new Latch_1.Latch();
        this.browserProfile = Preconditions_1.Preconditions.assertNotNull(browserProfile, "browser");
        this.captureOpts = Objects_1.Objects.defaults(captureOpts, new CaptureOpts_1.DefaultCaptureOpts());
        this.pendingWebRequestsListener = new PendingWebRequestsListener_1.PendingWebRequestsListener();
        this.debugWebRequestsListener = new DebugWebRequestsListener_1.DebugWebRequestsListener();
        if (captureOpts.pendingWebRequestsCallback) {
            this.pendingWebRequestsListener.addEventListener(captureOpts.pendingWebRequestsCallback);
        }
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            const driver = yield WebContentsDriver_1.WebContentsDriverFactory.create(this.browserProfile);
            this.driver = driver;
            this.webContents = yield driver.getWebContents();
            this.driver.addEventListener('close', () => {
                this.stop();
            });
            this.onWebRequest(this.webContents.session.webRequest);
            this.browserProfile.navigation.navigated.addEventListener(event => {
                const url = event.link;
                Preconditions_1.Preconditions.assertNotNull(url, "url");
                if (Strings_1.Strings.empty(url)) {
                    throw new Error("URL may not be empty");
                }
                this.loadURL(event.link)
                    .catch(err => log.error("Could not load URL: " + event.link, err));
            });
            if (this.captureOpts.link) {
                this.browserProfile.navigation.navigated.dispatchEvent({
                    link: this.captureOpts.link
                });
            }
            return this.result.get();
        });
    }
    loadURL(url) {
        return __awaiter(this, void 0, void 0, function* () {
            const latch = new Latch_1.Latch();
            this.driver.loadURL(url)
                .then(() => {
                latch.resolve(true);
            })
                .catch(err => {
                log.error("Loading URL failed: ", err);
                latch.resolve(true);
            });
            yield Promise.all([latch.get()]);
            yield this.handleLoad(url);
        });
    }
    handleLoad(url) {
        return __awaiter(this, void 0, void 0, function* () {
            const ampURL = yield this.getAmpURL();
            if (this.captureOpts.amp && ampURL && ampURL !== url) {
                log.info("Found AMP URL.  Redirecting then loading: " + ampURL);
                yield this.loadURL(ampURL);
                return;
            }
            return yield this.capture();
        });
    }
    stop() {
        this.webRequestReactors.forEach(webRequestReactor => {
            log.info("Stopping webRequestReactor...");
            webRequestReactor.stop();
            log.info("Stopping webRequestReactor...done");
        });
    }
    capture() {
        return __awaiter(this, void 0, void 0, function* () {
            log.debug("Awaiting captured");
            yield this.browserProfile.navigation.captured.once();
            return this.executeContentCapture();
        });
    }
    getAmpURL() {
        return __awaiter(this, void 0, void 0, function* () {
            function fetchAmpURL() {
                const link = document.querySelector("link[rel='amphtml']");
                if (link) {
                    return link.href;
                }
                return null;
            }
            return yield this.webContents.executeJavaScript(Functions_1.Functions.functionToScript(fetchAmpURL));
        });
    }
    executeContentCapture() {
        return __awaiter(this, void 0, void 0, function* () {
            const captureResult = yield ContentCaptureExecutor_1.ContentCaptureExecutor.execute(this.webContents, this.driver.browserProfile);
            if (this.browserProfile.destroy) {
                Optional_1.Optional.of(this.driver).when(driver => driver.destroy());
            }
            this.result.resolve(captureResult);
        });
    }
    onWebRequest(webRequest) {
        if (this.browserProfile.useReactor) {
            const webRequestReactor = new WebRequestReactor_1.WebRequestReactor(webRequest);
            webRequestReactor.start();
            this.webRequestReactors.push(webRequestReactor);
            this.pendingWebRequestsListener.register(webRequestReactor);
        }
    }
    static trigger(captureOpts = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const browser = BrowserRegistry_1.default.DEFAULT;
            const browserProfile = BrowserProfiles_1.BrowserProfiles.toBrowserProfile(browser, 'DEFAULT');
            const capture = new Capture(browserProfile, captureOpts);
            return capture.start();
        });
    }
}
exports.Capture = Capture;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FwdHVyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNhcHR1cmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEQ7QUFHOUQsMkRBQXNEO0FBQ3RELGtFQUE2RDtBQUM3RCwwRkFBcUY7QUFDckYsc0ZBQWlGO0FBQ2pGLHdFQUFtRTtBQUNuRSxtRUFBd0Y7QUFFeEYsZ0VBQTJEO0FBQzNELCtEQUEwRDtBQUUxRCxxRUFBZ0U7QUFFaEUsd0VBQWdEO0FBQ2hELHVEQUFrRDtBQUNsRCwyREFBc0Q7QUFDdEQsdURBQWtEO0FBQ2xELDJEQUFzRDtBQUV0RCxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFVNUIsTUFBTSxxQkFBcUIsR0FBRyxJQUFJLENBQUM7QUFFbkMsTUFBYSxPQUFPO0lBa0JoQixZQUFZLGNBQThCLEVBQUUsY0FBb0MsRUFBRTtRQVJsRSx1QkFBa0IsR0FBd0IsRUFBRSxDQUFDO1FBRXJELFdBQU0sR0FBRyxJQUFJLGFBQUssRUFBaUIsQ0FBQztRQVF4QyxJQUFJLENBQUMsY0FBYyxHQUFHLDZCQUFhLENBQUMsYUFBYSxDQUFDLGNBQWMsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUM3RSxJQUFJLENBQUMsV0FBVyxHQUFHLGlCQUFPLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxJQUFJLGdDQUFrQixFQUFFLENBQUMsQ0FBQztRQUUzRSxJQUFJLENBQUMsMEJBQTBCLEdBQUcsSUFBSSx1REFBMEIsRUFBRSxDQUFDO1FBQ25FLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxJQUFJLG1EQUF3QixFQUFFLENBQUM7UUFFL0QsSUFBSSxXQUFXLENBQUMsMEJBQTBCLEVBQUU7WUFDeEMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1NBQzVGO0lBRUwsQ0FBQztJQUVZLEtBQUs7O1lBRWQsTUFBTSxNQUFNLEdB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QUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7YUFDN0Q7WUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUV2QyxDQUFDO0tBQUE7SUFRTSxZQUFZLENBQUMsVUFBc0I7UUFFdEMsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsRUFBRTtZQUVoQyxNQUFNLGlCQUFpQixHQUFHLElBQUkscUNBQWlCLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDNUQsaUJBQWlCLENBQUMsS0FBSyxFQUFFLENBQUM7WUFFMUIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1lBRWhELElBQUksQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsQ0FBQztTQUUvRDtJQUVMLENBQUM7SUFFTSxNQUFNLENBQU8sT0FBTyxDQUFDLGNBQW9DLEVBQUU7O1lBRTlELE1BQU0sT0FBTyxHQUFHLHlCQUFlLENBQUMsT0FBTyxDQUFDO1lBQ3hDLE1BQU0sY0FBYyxHQUFHLGlDQUFlLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQzVFLE1BQU0sT0FBTyxHQUFHLElBQUksT0FBTyxDQUFDLGNBQWMsRUFBRSxXQUFXLENBQUMsQ0FBQztZQUN6RCxPQUFPLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUUzQixDQUFDO0tBQUE7Q0FFSjtBQXpORCwwQkF5TkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NhcHR1cmVPcHRzLCBEZWZhdWx0Q2FwdHVyZU9wdHN9IGZyb20gJy4vQ2FwdHVyZU9wdHMnO1xuaW1wb3J0IHtXZWJDb250ZW50cywgV2ViUmVxdWVzdH0gZnJvbSAnZWxlY3Ryb24nO1xuaW1wb3J0IHtDYXB0dXJlUmVzdWx0fSBmcm9tICcuL0NhcHR1cmVSZXN1bHQnO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge1ByZWNvbmRpdGlvbnN9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvUHJlY29uZGl0aW9ucyc7XG5pbXBvcnQge1BlbmRpbmdXZWJSZXF1ZXN0c0xpc3RlbmVyfSBmcm9tICcuLi93ZWJyZXF1ZXN0cy9QZW5kaW5nV2ViUmVxdWVzdHNMaXN0ZW5lcic7XG5pbXBvcnQge0RlYnVnV2ViUmVxdWVzdHNMaXN0ZW5lcn0gZnJvbSAnLi4vd2VicmVxdWVzdHMvRGVidWdXZWJSZXF1ZXN0c0xpc3RlbmVyJztcbmltcG9ydCB7V2ViUmVxdWVzdFJlYWN0b3J9IGZyb20gJy4uL3dlYnJlcXVlc3RzL1dlYlJlcXVlc3RSZWFjdG9yJztcbmltcG9ydCB7V2ViQ29udGVudHNEcml2ZXIsIFdlYkNvbnRlbnRzRHJpdmVyRmFjdG9yeX0gZnJvbSAnLi9kcml2ZXJzL1dlYkNvbnRlbnRzRHJpdmVyJztcbmltcG9ydCB7QnJvd3NlclByb2ZpbGV9IGZyb20gJy4vQnJvd3NlclByb2ZpbGUnO1xuaW1wb3J0IHtPcHRpb25hbH0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL3RzL09wdGlvbmFsJztcbmltcG9ydCB7RnVuY3Rpb25zfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvRnVuY3Rpb25zJztcbmltcG9ydCB7UHJvbWlzZXN9IGZyb20gJy4uL3V0aWwvUHJvbWlzZXMnO1xuaW1wb3J0IHtDb250ZW50Q2FwdHVyZUV4ZWN1dG9yfSBmcm9tICcuL0NvbnRlbnRDYXB0dXJlRXhlY3V0b3InO1xuaW1wb3J0IHtSZXNvbHZhYmxlUHJvbWlzZX0gZnJvbSAnLi4vdXRpbC9SZXNvbHZhYmxlUHJvbWlzZSc7XG5pbXBvcnQgQnJvd3NlclJlZ2lzdHJ5IGZyb20gJy4vQnJvd3NlclJlZ2lzdHJ5JztcbmltcG9ydCB7QnJvd3NlclByb2ZpbGVzfSBmcm9tICcuL0Jyb3dzZXJQcm9maWxlcyc7XG5pbXBvcnQge1N0cmluZ3N9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL3V0aWwvU3RyaW5nc1wiO1xuaW1wb3J0IHtMYXRjaH0gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvdXRpbC9MYXRjaFwiO1xuaW1wb3J0IHtPYmplY3RzfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy91dGlsL09iamVjdHNcIjtcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG4vKipcbiAqIFRoaXMgaXMgYSBoYXJkIGNvZGVkIGRlbGF5IHRvIGhvbGQgb2ZmIGNhcHR1cmluZyB0aGUgY29udGVudCB1bnRpbCB0aGUgcGFnZVxuICogaGFzIGZpbmlzaGVkIGV4ZWN1dGluZyBhbGwgb25Mb2FkIGhhbmRsZXJzLiBJIG5lZWQgb3VyIG93biB3YXkgdG8gaGFuZGxlIHRoaXNcbiAqIHdpdGhpbiB0aGUgY2FwdHVyZSBtYWluIHByb2Nlc3MuIE1heWJlIEkgY291bGQgYWRkIG91ciBvd24gbG9hZGVyIHRvIHRoZSBFTkRcbiAqIG9mIHRoZSBsaXN0IGFuZCBvbmx5IHJ1biBvbmNlIG91ciBsb2FkZXIgZnVuY3Rpb24gZmluaXNoZXMgbGFzdC5cbiAqXG4gKiBAdHlwZSB7bnVtYmVyfVxuICovXG5jb25zdCBFWEVDVVRFX0NBUFRVUkVfREVMQVkgPSAxNTAwO1xuXG5leHBvcnQgY2xhc3MgQ2FwdHVyZSB7XG5cbiAgICBwdWJsaWMgcmVhZG9ubHkgYnJvd3NlclByb2ZpbGU6IEJyb3dzZXJQcm9maWxlO1xuXG4gICAgcHVibGljIHJlYWRvbmx5IGNhcHR1cmVPcHRzOiBDYXB0dXJlT3B0cztcblxuICAgIHB1YmxpYyByZWFkb25seSBwZW5kaW5nV2ViUmVxdWVzdHNMaXN0ZW5lcjogUGVuZGluZ1dlYlJlcXVlc3RzTGlzdGVuZXI7XG5cbiAgICBwdWJsaWMgcmVhZG9ubHkgZGVidWdXZWJSZXF1ZXN0c0xpc3RlbmVyOiBEZWJ1Z1dlYlJlcXVlc3RzTGlzdGVuZXI7XG5cbiAgICBwdWJsaWMgcmVhZG9ubHkgd2ViUmVxdWVzdFJlYWN0b3JzOiBXZWJSZXF1ZXN0UmVhY3RvcltdID0gW107XG5cbiAgICBwcml2YXRlIHJlc3VsdCA9IG5ldyBMYXRjaDxDYXB0dXJlUmVzdWx0PigpO1xuXG4gICAgcHJpdmF0ZSB3ZWJDb250ZW50cz86IFdlYkNvbnRlbnRzO1xuXG4gICAgcHJpdmF0ZSBkcml2ZXI/OiBXZWJDb250ZW50c0RyaXZlcjtcblxuICAgIGNvbnN0cnVjdG9yKGJyb3dzZXJQcm9maWxlOiBCcm93c2VyUHJvZmlsZSwgY2FwdHVyZU9wdHM6IFBhcnRpYWw8Q2FwdHVyZU9wdHM+ID0ge30pIHtcblxuICAgICAgICB0aGlzLmJyb3dzZXJQcm9maWxlID0gUHJlY29uZGl0aW9ucy5hc3NlcnROb3ROdWxsKGJyb3dzZXJQcm9maWxlLCBcImJyb3dzZXJcIik7XG4gICAgICAgIHRoaXMuY2FwdHVyZU9wdHMgPSBPYmplY3RzLmRlZmF1bHRzKGNhcHR1cmVPcHRzLCBuZXcgRGVmYXVsdENhcHR1cmVPcHRzKCkpO1xuXG4gICAgICAgIHRoaXMucGVuZGluZ1dlYlJlcXVlc3RzTGlzdGVuZXIgPSBuZXcgUGVuZGluZ1dlYlJlcXVlc3RzTGlzdGVuZXIoKTtcbiAgICAgICAgdGhpcy5kZWJ1Z1dlYlJlcXVlc3RzTGlzdGVuZXIgPSBuZXcgRGVidWdXZWJSZXF1ZXN0c0xpc3RlbmVyKCk7XG5cbiAgICAgICAgaWYgKGNhcHR1cmVPcHRzLnBlbmRpbmdXZWJSZXF1ZXN0c0NhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLnBlbmRpbmdXZWJSZXF1ZXN0c0xpc3RlbmVyLmFkZEV2ZW50TGlzdGVuZXIoY2FwdHVyZU9wdHMucGVuZGluZ1dlYlJlcXVlc3RzQ2FsbGJhY2spO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgc3RhcnQoKTogUHJvbWlzZTxDYXB0dXJlUmVzdWx0PiB7XG5cbiAgICAgICAgY29uc3QgZHJpdmVyID0gYXdhaXQgV2ViQ29udGVudHNEcml2ZXJGYWN0b3J5LmNyZWF0ZSh0aGlzLmJyb3dzZXJQcm9maWxlKTtcblxuICAgICAgICB0aGlzLmRyaXZlciA9IGRyaXZlcjtcblxuICAgICAgICB0aGlzLndlYkNvbnRlbnRzID0gYXdhaXQgZHJpdmVyLmdldFdlYkNvbnRlbnRzKCk7XG5cbiAgICAgICAgdGhpcy5kcml2ZXIhLmFkZEV2ZW50TGlzdGVuZXIoJ2Nsb3NlJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMub25XZWJSZXF1ZXN0KHRoaXMud2ViQ29udGVudHMuc2Vzc2lvbi53ZWJSZXF1ZXN0KTtcblxuICAgICAgICB0aGlzLmJyb3dzZXJQcm9maWxlLm5hdmlnYXRpb24ubmF2aWdhdGVkLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCB1cmwgPSBldmVudC5saW5rO1xuXG4gICAgICAgICAgICBQcmVjb25kaXRpb25zLmFzc2VydE5vdE51bGwodXJsLCBcInVybFwiKTtcblxuICAgICAgICAgICAgaWYgKCBTdHJpbmdzLmVtcHR5KHVybCkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVUkwgbWF5IG5vdCBiZSBlbXB0eVwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5sb2FkVVJMKGV2ZW50LmxpbmspXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBsb2cuZXJyb3IoXCJDb3VsZCBub3QgbG9hZCBVUkw6IFwiICsgZXZlbnQubGluaywgZXJyKSk7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMuY2FwdHVyZU9wdHMubGluaykge1xuXG4gICAgICAgICAgICB0aGlzLmJyb3dzZXJQcm9maWxlLm5hdmlnYXRpb24ubmF2aWdhdGVkLmRpc3BhdGNoRXZlbnQoe1xuICAgICAgICAgICAgICAgIGxpbms6IHRoaXMuY2FwdHVyZU9wdHMubGlua1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5yZXN1bHQuZ2V0KCk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGxvYWRVUkwodXJsOiBzdHJpbmcpIHtcblxuICAgICAgICAvLyB3YWl0IHVudGlsIHRoZSBtYWluIFVSTCBsb2Fkcy5cblxuICAgICAgICBjb25zdCBsYXRjaCA9IG5ldyBMYXRjaCgpO1xuXG4gICAgICAgIHRoaXMuZHJpdmVyIS5sb2FkVVJMKHVybClcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBsYXRjaC5yZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGxvZy5lcnJvcihcIkxvYWRpbmcgVVJMIGZhaWxlZDogXCIsIGVycik7XG4gICAgICAgICAgICAgICAgbGF0Y2gucmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHdhaXQgYSBtaW5pbXVtIGFtb3VudCBvZiB0aW1lIGZvciB0aGUgcGFnZSB0byBsb2FkIHNvIHRoYXQgd2UgY2FuXG4gICAgICAgIC8vIG1ha2Ugc3VyZSB0aGF0IGFsbCBzdGF0aWMgY29udGVudCBoYXMgZXhlY3V0ZWQuXG4gICAgICAgIC8vIGNvbnN0IG1pbkRlbGF5UHJvbWlzZSA9IFByb21pc2VzLndhaXRGb3IoRVhFQ1VURV9DQVBUVVJFX0RFTEFZKTtcblxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChbIGxhdGNoLmdldCgpIF0pO1xuXG4gICAgICAgIC8vIHRoZSBwYWdlIGxvYWRlZCBub3cuLi4gY2FwdHVyZSB0aGUgY29udGVudC5cbiAgICAgICAgYXdhaXQgdGhpcy5oYW5kbGVMb2FkKHVybCk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGhhbmRsZUxvYWQodXJsOiBzdHJpbmcpIHtcblxuICAgICAgICAvLyBzZWUgaWYgd2UgZmlyc3QgbmVlZCB0byBoYW5kbGUgdGhlIHBhZ2UgaW4gYW55IHNwZWNpYWwgbWFubmVyLlxuXG4gICAgICAgIC8vIEZJWE1FOiBtYWtlIHRoaXMgaW50byBzb21lIHR5cGUgb2YgY29udGVudCBoYW5kbGVycyBzeXN0ZW1cbiAgICAgICAgLy8gc28gdGhhdCB3ZSBjYW4gYWRkIG9uZSBvZmYgZXh0ZW5zaW9ucyBsaWtlIHJlbG9hZGluZyB0aGUgYSBwYWdlXG4gICAgICAgIC8vIHdoZW4gQU1QIG9yIG90aGVyIGZlYXR1cmVzIGFyZSBkZXRlY3RlZC4gIFdlIGNvdWxkIGFsc28gZG8gQU1QXG4gICAgICAgIC8vIGVhcmxpZXIgSSB0aGluIGxpa2Ugb24tZG9tLXJlYWR5LlxuICAgICAgICAvL1xuXG4gICAgICAgIGNvbnN0IGFtcFVSTCA9IGF3YWl0IHRoaXMuZ2V0QW1wVVJMKCk7XG5cbiAgICAgICAgLy8gVE9ETzogaWYgd2UgZW5kIHVwIGhhbmRsaW5nIG11bHRpcGxlIHR5cGVzIG9mIFVSTHMgaW4gdGhlIGZ1dHVyZVxuICAgICAgICAvLyB3ZSBtaWdodCB3YW50IHRvIGJ1aWxkIHVwIGEgaGlzdG9yeSB0byBwcmV2ZW50IGVuZGxlc3MgbG9vcHMgb3JcbiAgICAgICAgLy8ganVzdCBrZWVwIHRyYWNrIG9mIHRoZSByZWRpcmVjdCBjb3VudC5cbiAgICAgICAgaWYgKHRoaXMuY2FwdHVyZU9wdHMuYW1wICYmIGFtcFVSTCAmJiBhbXBVUkwgIT09IHVybCkge1xuXG4gICAgICAgICAgICBsb2cuaW5mbyhcIkZvdW5kIEFNUCBVUkwuICBSZWRpcmVjdGluZyB0aGVuIGxvYWRpbmc6IFwiICsgYW1wVVJMKTtcblxuICAgICAgICAgICAgYXdhaXQgdGhpcy5sb2FkVVJMKGFtcFVSTCk7XG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmNhcHR1cmUoKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBzdG9wKCkge1xuXG4gICAgICAgIHRoaXMud2ViUmVxdWVzdFJlYWN0b3JzLmZvckVhY2god2ViUmVxdWVzdFJlYWN0b3IgPT4ge1xuICAgICAgICAgICAgbG9nLmluZm8oXCJTdG9wcGluZyB3ZWJSZXF1ZXN0UmVhY3Rvci4uLlwiKTtcbiAgICAgICAgICAgIHdlYlJlcXVlc3RSZWFjdG9yLnN0b3AoKTtcbiAgICAgICAgICAgIGxvZy5pbmZvKFwiU3RvcHBpbmcgd2ViUmVxdWVzdFJlYWN0b3IuLi5kb25lXCIpO1xuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuIHRoZSBvbkxvYWQgaGFuZGxlciBpcyBleGVjdXRlZCBhbmQgd2UncmUgcmVhZHkgdG8gc3RhcnQgdGhlXG4gICAgICogY2FwdHVyZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgYXN5bmMgY2FwdHVyZSgpIHtcblxuICAgICAgICBsb2cuZGVidWcoXCJBd2FpdGluZyBjYXB0dXJlZFwiKTtcblxuICAgICAgICBhd2FpdCB0aGlzLmJyb3dzZXJQcm9maWxlLm5hdmlnYXRpb24uY2FwdHVyZWQub25jZSgpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmV4ZWN1dGVDb250ZW50Q2FwdHVyZSgpO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VlIGlmIHRoZSBwYWdlIGhhcyBhIHJlbD1hbXBodG1sIFVSTC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8c3RyaW5nPn1cbiAgICAgKi9cbiAgICBwcml2YXRlIGFzeW5jIGdldEFtcFVSTCgpIHtcblxuICAgICAgICAvKiogQFJlbmRlcmVyQ29udGV4dCAqL1xuICAgICAgICBmdW5jdGlvbiBmZXRjaEFtcFVSTCgpIHtcblxuICAgICAgICAgICAgY29uc3QgbGluayA9IDxIVE1MTGlua0VsZW1lbnQ+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJsaW5rW3JlbD0nYW1waHRtbCddXCIpO1xuXG4gICAgICAgICAgICBpZiAobGluaykge1xuICAgICAgICAgICAgICAgIHJldHVybiBsaW5rLmhyZWY7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy53ZWJDb250ZW50cyEuZXhlY3V0ZUphdmFTY3JpcHQoRnVuY3Rpb25zLmZ1bmN0aW9uVG9TY3JpcHQoZmV0Y2hBbXBVUkwpKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBleGVjdXRlQ29udGVudENhcHR1cmUoKSB7XG5cbiAgICAgICAgY29uc3QgY2FwdHVyZVJlc3VsdFxuICAgICAgICAgICAgPSBhd2FpdCBDb250ZW50Q2FwdHVyZUV4ZWN1dG9yLmV4ZWN1dGUodGhpcy53ZWJDb250ZW50cyEsIHRoaXMuZHJpdmVyIS5icm93c2VyUHJvZmlsZSk7XG5cbiAgICAgICAgaWYgKHRoaXMuYnJvd3NlclByb2ZpbGUuZGVzdHJveSkge1xuICAgICAgICAgICAgT3B0aW9uYWwub2YodGhpcy5kcml2ZXIpLndoZW4oZHJpdmVyID0+IGRyaXZlci5kZXN0cm95KCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZXN1bHQucmVzb2x2ZShjYXB0dXJlUmVzdWx0KTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuIHdlIGhhdmUgYSB3ZWIgcmVxdWVzdCB0byBsaXN0ZW4gdG8uIEVpdGhlciB0aGUgZmlyc3Qgb25lXG4gICAgICogb3Igc3Vic2VxdWVudCBvbmVzIGZyb20gaWZyYW1lcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB3ZWJSZXF1ZXN0XG4gICAgICovXG4gICAgcHVibGljIG9uV2ViUmVxdWVzdCh3ZWJSZXF1ZXN0OiBXZWJSZXF1ZXN0KSB7XG5cbiAgICAgICAgaWYgKHRoaXMuYnJvd3NlclByb2ZpbGUudXNlUmVhY3Rvcikge1xuXG4gICAgICAgICAgICBjb25zdCB3ZWJSZXF1ZXN0UmVhY3RvciA9IG5ldyBXZWJSZXF1ZXN0UmVhY3Rvcih3ZWJSZXF1ZXN0KTtcbiAgICAgICAgICAgIHdlYlJlcXVlc3RSZWFjdG9yLnN0YXJ0KCk7XG5cbiAgICAgICAgICAgIHRoaXMud2ViUmVxdWVzdFJlYWN0b3JzLnB1c2god2ViUmVxdWVzdFJlYWN0b3IpO1xuXG4gICAgICAgICAgICB0aGlzLnBlbmRpbmdXZWJSZXF1ZXN0c0xpc3RlbmVyLnJlZ2lzdGVyKHdlYlJlcXVlc3RSZWFjdG9yKTtcblxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIHRyaWdnZXIoY2FwdHVyZU9wdHM6IFBhcnRpYWw8Q2FwdHVyZU9wdHM+ID0ge30pOiBQcm9taXNlPENhcHR1cmVSZXN1bHQ+IHtcblxuICAgICAgICBjb25zdCBicm93c2VyID0gQnJvd3NlclJlZ2lzdHJ5LkRFRkFVTFQ7XG4gICAgICAgIGNvbnN0IGJyb3dzZXJQcm9maWxlID0gQnJvd3NlclByb2ZpbGVzLnRvQnJvd3NlclByb2ZpbGUoYnJvd3NlciwgJ0RFRkFVTFQnKTtcbiAgICAgICAgY29uc3QgY2FwdHVyZSA9IG5ldyBDYXB0dXJlKGJyb3dzZXJQcm9maWxlLCBjYXB0dXJlT3B0cyk7XG4gICAgICAgIHJldHVybiBjYXB0dXJlLnN0YXJ0KCk7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBDYXB0dXJlUmVzdWx0Q2FsbGJhY2sge1xuICAgIChjYXB0dXJlUmVzdWx0OiBDYXB0dXJlUmVzdWx0KTogdm9pZDtcbn1cbiJdfQ==