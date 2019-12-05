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
const IXYRects_1 = require("polar-shared/src/util/rects/IXYRects");
const Screenshot_1 = require("../Screenshot");
const ClientRects_1 = require("polar-shared/src/util/rects/ClientRects");
const Logger_1 = require("polar-shared/src/logger/Logger");
const ScreenshotDelegate_1 = require("./ScreenshotDelegate");
const electron_1 = require("electron");
const AppRuntime_1 = require("../../AppRuntime");
const Promises_1 = require("../../util/Promises");
const AnnotationToggler_1 = require("../AnnotationToggler");
const log = Logger_1.Logger.create();
const MIN_PAINT_INTERVAL = 1000 / 60;
class ElectronScreenshots {
    static supported() {
        return AppRuntime_1.AppRuntime.isElectron();
    }
    static capture(target, opts = new Screenshot_1.DefaultCaptureOpts()) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.supported()) {
                throw new Error("Captured screenshots not supported");
            }
            const screenshotRequest = yield this.doCapture(target, opts);
            log.info("Sending screenshot request: ", screenshotRequest);
            const id = this.getWebContentsID();
            const annotationToggler = new AnnotationToggler_1.AnnotationToggler();
            yield annotationToggler.hide();
            const capturedScreenshot = yield this.getRemoteDelegate().capture(id, screenshotRequest);
            yield Promises_1.Promises.requestAnimationFrame(() => annotationToggler.show());
            return capturedScreenshot;
        });
    }
    static captureToFile(target, dest, opts) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    static getRemoteDelegate() {
        return electron_1.remote.getGlobal(ScreenshotDelegate_1.ScreenshotDelegate.DELEGATE_NAME);
    }
    static getWebContentsID() {
        return electron_1.remote.getCurrentWebContents().id;
    }
    static doCapture(target, opts) {
        return __awaiter(this, void 0, void 0, function* () {
            let rect;
            if (target instanceof HTMLElement) {
                log.info("Using HTML element to build rect from bounding client rect.");
                rect = IXYRects_1.IXYRects.createFromClientRect(target.getBoundingClientRect());
            }
            else if (ClientRects_1.ClientRects.instanceOf(target)) {
                rect = {
                    x: target.left,
                    y: target.top,
                    width: target.width,
                    height: target.height
                };
                log.info("Using client rect: ", rect);
            }
            else if (IXYRects_1.IXYRects.instanceOf(target)) {
                log.info("Using IXYRect");
                rect = target;
            }
            else {
                throw new Error("Unknown target type.");
            }
            const screenshotRequest = {
                rect,
                resize: opts.resize,
                crop: opts.crop,
                type: opts.type
            };
            return screenshotRequest;
        });
    }
}
exports.ElectronScreenshots = ElectronScreenshots;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRWxlY3Ryb25TY3JlZW5zaG90cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkVsZWN0cm9uU2NyZWVuc2hvdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQSxtRUFBOEQ7QUFDOUQsOENBS3VCO0FBQ3ZCLHlFQUFvRTtBQUNwRSwyREFBc0Q7QUFDdEQsNkRBSThCO0FBQzlCLHVDQUFnQztBQUNoQyxpREFBNEM7QUFDNUMsa0RBQTZDO0FBQzdDLDREQUF1RDtBQUV2RCxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFNUIsTUFBTSxrQkFBa0IsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO0FBT3JDLE1BQWEsbUJBQW1CO0lBRXJCLE1BQU0sQ0FBQyxTQUFTO1FBQ25CLE9BQU8sdUJBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBZU0sTUFBTSxDQUFPLE9BQU8sQ0FBQyxNQUFxQixFQUNyQixPQUFvQixJQUFJLCtCQUFrQixFQUFFOztZQUVwRSxJQUFLLENBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFO2dCQUNyQixNQUFNLElBQUksS0FBSyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7YUFDekQ7WUFFRCxNQUFNLGlCQUFpQixHQUFHLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFFN0QsR0FBRyxDQUFDLElBQUksQ0FBQyw4QkFBOEIsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1lBSTVELE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBY25DLE1BQU0saUJBQWlCLEdBQUcsSUFBSSxxQ0FBaUIsRUFBRSxDQUFDO1lBRWxELE1BQU0saUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUM7WUFFL0IsTUFBTSxrQkFBa0IsR0FDbEIsTUFBTSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLGlCQUFpQixDQUFDLENBQUM7WUFFcEUsTUFBTSxtQkFBUSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsRUFBRSxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7WUFFckUsT0FBTyxrQkFBa0IsQ0FBQztRQUU5QixDQUFDO0tBQUE7SUFFTSxNQUFNLENBQU8sYUFBYSxDQUFDLE1BQXFCLEVBQ3JCLElBQVksRUFDWixJQUFpQjs7UUFPbkQsQ0FBQztLQUFBO0lBRU8sTUFBTSxDQUFDLGlCQUFpQjtRQUM1QixPQUFPLGlCQUFNLENBQUMsU0FBUyxDQUFDLHVDQUFrQixDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFTyxNQUFNLENBQUMsZ0JBQWdCO1FBQzNCLE9BQU8saUJBQU0sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUM3QyxDQUFDO0lBRU8sTUFBTSxDQUFPLFNBQVMsQ0FBQyxNQUFxQixFQUFFLElBQWlCOztZQUVuRSxJQUFJLElBQWEsQ0FBQztZQUVsQixJQUFJLE1BQU0sWUFBWSxXQUFXLEVBQUU7Z0JBRS9CLEdBQUcsQ0FBQyxJQUFJLENBQUMsNkRBQTZELENBQUMsQ0FBQztnQkFFeEUsSUFBSSxHQUFHLG1CQUFRLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLHFCQUFxQixFQUFFLENBQUMsQ0FBQzthQUV4RTtpQkFBTSxJQUFJLHlCQUFXLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUV2QyxJQUFJLEdBQUc7b0JBQ0gsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxJQUFJO29CQUNkLENBQUMsRUFBRSxNQUFNLENBQUMsR0FBRztvQkFDYixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7b0JBQ25CLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTTtpQkFDeEIsQ0FBQztnQkFFRixHQUFHLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxDQUFDO2FBRXpDO2lCQUFNLElBQUksbUJBQVEsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQ3BDLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7Z0JBQzFCLElBQUksR0FBRyxNQUFNLENBQUM7YUFDakI7aUJBQU07Z0JBQ0gsTUFBTSxJQUFJLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO2FBQzNDO1lBRUQsTUFBTSxpQkFBaUIsR0FBc0I7Z0JBQ3pDLElBQUk7Z0JBQ0osTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO2dCQUNuQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7Z0JBQ2YsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO2FBQ2xCLENBQUM7WUFFRixPQUFPLGlCQUFpQixDQUFDO1FBRTdCLENBQUM7S0FBQTtDQUVKO0FBckhELGtEQXFIQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SVhZUmVjdH0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL3JlY3RzL0lYWVJlY3QnO1xuaW1wb3J0IHtJWFlSZWN0c30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL3JlY3RzL0lYWVJlY3RzJztcbmltcG9ydCB7XG4gICAgQ2FwdHVyZU9wdHMsXG4gICAgRGVmYXVsdENhcHR1cmVPcHRzLFxuICAgIFNjcmVlbnNob3QsXG4gICAgU2NyZWVuc2hvdFJlcXVlc3Rcbn0gZnJvbSAnLi4vU2NyZWVuc2hvdCc7XG5pbXBvcnQge0NsaWVudFJlY3RzfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvcmVjdHMvQ2xpZW50UmVjdHMnO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge1xuICAgIElTY3JlZW5zaG90RGVsZWdhdGUsXG4gICAgU2NyZWVuc2hvdERlbGVnYXRlLFxuICAgIFdlYkNvbnRlbnRzSURcbn0gZnJvbSAnLi9TY3JlZW5zaG90RGVsZWdhdGUnO1xuaW1wb3J0IHtyZW1vdGV9IGZyb20gJ2VsZWN0cm9uJztcbmltcG9ydCB7QXBwUnVudGltZX0gZnJvbSAnLi4vLi4vQXBwUnVudGltZSc7XG5pbXBvcnQge1Byb21pc2VzfSBmcm9tICcuLi8uLi91dGlsL1Byb21pc2VzJztcbmltcG9ydCB7QW5ub3RhdGlvblRvZ2dsZXJ9IGZyb20gJy4uL0Fubm90YXRpb25Ub2dnbGVyJztcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG5jb25zdCBNSU5fUEFJTlRfSU5URVJWQUwgPSAxMDAwIC8gNjA7XG5cbi8qKlxuICogQ3JlYXRlIGEgc2NyZWVuc2hvdCBvZiB0aGUgZGlzcGxheSBkaXJlY3RseSB1c2luZyBFbGVjdHJvbi5cbiAqXG4gKiBARWxlY3Ryb25SZW5kZXJlckNvbnRleHRcbiAqL1xuZXhwb3J0IGNsYXNzIEVsZWN0cm9uU2NyZWVuc2hvdHMge1xuXG4gICAgcHVibGljIHN0YXRpYyBzdXBwb3J0ZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBBcHBSdW50aW1lLmlzRWxlY3Ryb24oKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBzY3JlZW5zaG90IGFuZCByZXR1cm4gYSBOYXRpdmVJbWFnZSBvZiB0aGUgcmVzdWx0LlxuICAgICAqXG4gICAgICogaHR0cHM6Ly9naXRodWIuY29tL2VsZWN0cm9uL2VsZWN0cm9uL2Jsb2IvbWFzdGVyL2RvY3MvYXBpL25hdGl2ZS1pbWFnZS5tZFxuICAgICAqXG4gICAgICogQHBhcmFtIHRhcmdldCBTcGVjaWZ5IGVpdGhlciByZWN0IG9yIGVsZW1lbnQgdG8gY2FwdHVyZSBhcyBwcm9wZXJ0aWVzLlxuICAgICAqXG4gICAgICogQHBhcmFtIG9wdHMgVGhlIG9wdGlvbnMgdG8gc3BlY2lmeSB3aGVuIGNhcHR1cmluZy5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2V9IGZvciB7TmF0aXZlSW1hZ2V9LiBZb3UgY2FuIGNhbGwgdG9EYXRhVVJMIG9uIHRoZSBpbWFnZVxuICAgICAqICAgICAgICAgd2l0aCBzY2FsZUZhY3RvciBhcyBhbiBvcHRpb24uXG4gICAgICpcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGNhcHR1cmUodGFyZ2V0OiBDYXB0dXJlVGFyZ2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRzOiBDYXB0dXJlT3B0cyA9IG5ldyBEZWZhdWx0Q2FwdHVyZU9wdHMoKSk6IFByb21pc2U8U2NyZWVuc2hvdD4ge1xuXG4gICAgICAgIGlmICggISB0aGlzLnN1cHBvcnRlZCgpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYXB0dXJlZCBzY3JlZW5zaG90cyBub3Qgc3VwcG9ydGVkXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2NyZWVuc2hvdFJlcXVlc3QgPSBhd2FpdCB0aGlzLmRvQ2FwdHVyZSh0YXJnZXQsIG9wdHMpO1xuXG4gICAgICAgIGxvZy5pbmZvKFwiU2VuZGluZyBzY3JlZW5zaG90IHJlcXVlc3Q6IFwiLCBzY3JlZW5zaG90UmVxdWVzdCk7XG5cbiAgICAgICAgLy8gY29uc3QgaWQ6IFdlYkNvbnRlbnRzSUQgPSB3ZWJDb250ZW50cy5pZDtcblxuICAgICAgICBjb25zdCBpZCA9IHRoaXMuZ2V0V2ViQ29udGVudHNJRCgpO1xuXG4gICAgICAgIC8vIE5PVEU6IGl0IHRha2VzIGFib3V0IDIwbXMgZm9yIHRoZSBtYWluIHByb2Nlc3MgdG8gY2FwdHVyZSB0aGUgZGF0YVxuICAgICAgICAvLyBhbm90aGVyIDMwbXMgdG8gc2VuZCBpdCB0byB0aGUgcmVuZGVyZXIuICBIYWxmIHRoZSBtYWluIHByb2Nlc3MgdGltZVxuICAgICAgICAvLyBpcyB0YWtlbiBjYXB0dXJpbmcgdGhlIGltYWdlIGFuZCB0aGUgb3RoZXIgdGltZSBpcyBzcGVudCBjb252ZXJ0aW5nXG4gICAgICAgIC8vIGl0IHRvIGEgUE5HLlxuICAgICAgICAvL1xuICAgICAgICAvLyBUT0RPOiBJIGNvdWxkIHNoYXZlIDIwbXMgYnkgY29udmVydGluZyB0aGUgaW1hZ2UgdG8gUE5HIHdpdGhpbiB0aGVcbiAgICAgICAgLy8gcmVuZGVyZXIgYWZ0ZXIgdGhlIGFuaW1hdGlvbnMgYXJlIHJlc3RvcmVkIGJ1dCB0aGF0J3Mgbm90IHJlYWxseVxuICAgICAgICAvLyB0b28gaW1wcmVzc2l2ZS5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gVE9ETzogZXZlbiBhIDUwbXMgZmxhc2ggaXMga2luZCBvZiBhbm5veWluZyBidXQgbm90IHRoZSBlbmQgb2YgdGhlXG4gICAgICAgIC8vIHdvcmxkLlxuXG4gICAgICAgIGNvbnN0IGFubm90YXRpb25Ub2dnbGVyID0gbmV3IEFubm90YXRpb25Ub2dnbGVyKCk7XG5cbiAgICAgICAgYXdhaXQgYW5ub3RhdGlvblRvZ2dsZXIuaGlkZSgpO1xuXG4gICAgICAgIGNvbnN0IGNhcHR1cmVkU2NyZWVuc2hvdFxuICAgICAgICAgICAgPSBhd2FpdCB0aGlzLmdldFJlbW90ZURlbGVnYXRlKCkuY2FwdHVyZShpZCwgc2NyZWVuc2hvdFJlcXVlc3QpO1xuXG4gICAgICAgIGF3YWl0IFByb21pc2VzLnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiBhbm5vdGF0aW9uVG9nZ2xlci5zaG93KCkpO1xuXG4gICAgICAgIHJldHVybiBjYXB0dXJlZFNjcmVlbnNob3Q7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGNhcHR1cmVUb0ZpbGUodGFyZ2V0OiBDYXB0dXJlVGFyZ2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXN0OiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdHM6IENhcHR1cmVPcHRzKTogUHJvbWlzZTx2b2lkPiB7XG5cbiAgICAgICAgLy8gVE9ETzogdGhlIGlkZWEgaGVyZSBpcyB0aGF0IHdlIGNvdWxkIGRpcmVjdGx5IHdyaXRlIHRvIHRoZSBkYXRhc3RvcmVcbiAgICAgICAgLy8gZnJvbSB3aXRoaW4gdGhlIG1haW4gcHJvY2Vzc1xuXG4gICAgICAgIC8vIG5vb3AgZm9yIG5vd1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0UmVtb3RlRGVsZWdhdGUoKTogSVNjcmVlbnNob3REZWxlZ2F0ZSB7XG4gICAgICAgIHJldHVybiByZW1vdGUuZ2V0R2xvYmFsKFNjcmVlbnNob3REZWxlZ2F0ZS5ERUxFR0FURV9OQU1FKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBnZXRXZWJDb250ZW50c0lEKCk6IFdlYkNvbnRlbnRzSUQge1xuICAgICAgICByZXR1cm4gcmVtb3RlLmdldEN1cnJlbnRXZWJDb250ZW50cygpLmlkO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGFzeW5jIGRvQ2FwdHVyZSh0YXJnZXQ6IENhcHR1cmVUYXJnZXQsIG9wdHM6IENhcHR1cmVPcHRzKTogUHJvbWlzZTxTY3JlZW5zaG90UmVxdWVzdD4ge1xuXG4gICAgICAgIGxldCByZWN0OiBJWFlSZWN0O1xuXG4gICAgICAgIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuXG4gICAgICAgICAgICBsb2cuaW5mbyhcIlVzaW5nIEhUTUwgZWxlbWVudCB0byBidWlsZCByZWN0IGZyb20gYm91bmRpbmcgY2xpZW50IHJlY3QuXCIpO1xuXG4gICAgICAgICAgICByZWN0ID0gSVhZUmVjdHMuY3JlYXRlRnJvbUNsaWVudFJlY3QodGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpKTtcblxuICAgICAgICB9IGVsc2UgaWYgKENsaWVudFJlY3RzLmluc3RhbmNlT2YodGFyZ2V0KSkge1xuXG4gICAgICAgICAgICByZWN0ID0ge1xuICAgICAgICAgICAgICAgIHg6IHRhcmdldC5sZWZ0LFxuICAgICAgICAgICAgICAgIHk6IHRhcmdldC50b3AsXG4gICAgICAgICAgICAgICAgd2lkdGg6IHRhcmdldC53aWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHRhcmdldC5oZWlnaHRcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGxvZy5pbmZvKFwiVXNpbmcgY2xpZW50IHJlY3Q6IFwiLCByZWN0KTtcblxuICAgICAgICB9IGVsc2UgaWYgKElYWVJlY3RzLmluc3RhbmNlT2YodGFyZ2V0KSkge1xuICAgICAgICAgICAgbG9nLmluZm8oXCJVc2luZyBJWFlSZWN0XCIpO1xuICAgICAgICAgICAgcmVjdCA9IHRhcmdldDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVua25vd24gdGFyZ2V0IHR5cGUuXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2NyZWVuc2hvdFJlcXVlc3Q6IFNjcmVlbnNob3RSZXF1ZXN0ID0ge1xuICAgICAgICAgICAgcmVjdCxcbiAgICAgICAgICAgIHJlc2l6ZTogb3B0cy5yZXNpemUsXG4gICAgICAgICAgICBjcm9wOiBvcHRzLmNyb3AsXG4gICAgICAgICAgICB0eXBlOiBvcHRzLnR5cGVcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gc2NyZWVuc2hvdFJlcXVlc3Q7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IHR5cGUgQ2FwdHVyZVRhcmdldCA9IElYWVJlY3QgfCBDbGllbnRSZWN0O1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0eWxlUmVzdG9yZSB7XG4gICAgcmVhZG9ubHkgdmlzaWJpbGl0eTogc3RyaW5nIHwgbnVsbDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBbm5vdGF0aW9uU3R5bGUge1xuICAgIHJlYWRvbmx5IGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICAgIHJlYWRvbmx5IHN0eWxlUmVzdG9yZTogU3R5bGVSZXN0b3JlO1xufVxuXG4iXX0=