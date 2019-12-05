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
const ElectronScreenshots_1 = require("./electron/ElectronScreenshots");
const DocFormatFactory_1 = require("../docformat/DocFormatFactory");
const Buffers_1 = require("polar-shared/src/util/Buffers");
const Canvases_1 = require("polar-shared/src/util/Canvases");
const Logger_1 = require("polar-shared/src/logger/Logger");
const AppRuntime_1 = require("../AppRuntime");
const BrowserScreenshots_1 = require("./browser/BrowserScreenshots");
const log = Logger_1.Logger.create();
class Screenshots {
    static capture(pageNum, boxRect, element) {
        return __awaiter(this, void 0, void 0, function* () {
            const docFormat = DocFormatFactory_1.DocFormatFactory.getInstance();
            switch (docFormat.name) {
                case 'pdf':
                    return this.captureViaCanvas(pageNum, boxRect);
                case 'html':
                    if (AppRuntime_1.AppRuntime.isBrowser()) {
                        return this.captureViaBrowser(boxRect, element);
                    }
                    else {
                        return this.captureViaElectron(boxRect, element);
                    }
            }
        });
    }
    static captureViaElectron(rect, element) {
        return __awaiter(this, void 0, void 0, function* () {
            log.debug("Capturing via electron");
            const { width, height } = rect;
            const boundingClientRect = element.getBoundingClientRect();
            const target = {
                x: boundingClientRect.left,
                y: boundingClientRect.top,
                width, height
            };
            const capturedScreenshot = yield ElectronScreenshots_1.ElectronScreenshots.capture(target, { type: 'png' });
            const buffer = capturedScreenshot.data;
            const data = Buffers_1.Buffers.toArrayBuffer(buffer);
            return { data, type: 'image/png', width, height };
        });
    }
    static captureViaCanvas(pageNum, rect) {
        return __awaiter(this, void 0, void 0, function* () {
            const docFormat = DocFormatFactory_1.DocFormatFactory.getInstance();
            log.debug(`Capturing via canvas with docFormat: ${docFormat.name} for page ${pageNum}`);
            const canvas = yield docFormat.getCanvas(pageNum);
            return yield Canvases_1.Canvases.extract(canvas, rect);
        });
    }
    static captureViaBrowser(boxRect, element) {
        return __awaiter(this, void 0, void 0, function* () {
            const browserScreenshot = yield BrowserScreenshots_1.BrowserScreenshots.capture(boxRect, element);
            if (browserScreenshot) {
                return {
                    data: browserScreenshot.dataURL,
                    type: browserScreenshot.type,
                    width: boxRect.width,
                    height: boxRect.height
                };
            }
            else {
                throw new Error("Unable to take screenshot via browser");
            }
        });
    }
}
exports.Screenshots = Screenshots;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2NyZWVuc2hvdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJTY3JlZW5zaG90cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBLHdFQUFtRTtBQUNuRSxvRUFBK0Q7QUFFL0QsMkRBQXNEO0FBQ3RELDZEQUF3RDtBQUV4RCwyREFBc0Q7QUFDdEQsOENBQXlDO0FBQ3pDLHFFQUFnRTtBQUVoRSxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFLNUIsTUFBYSxXQUFXO0lBVWIsTUFBTSxDQUFPLE9BQU8sQ0FBQyxPQUFlLEVBQ2YsT0FBZ0IsRUFDaEIsT0FBb0I7O1lBRTVDLE1BQU0sU0FBUyxHQUFHLG1DQUFnQixDQUFDLFdBQVcsRUFBRSxDQUFDO1lBRWpELFFBQVEsU0FBUyxDQUFDLElBQUksRUFBRTtnQkFFcEIsS0FBSyxLQUFLO29CQUNOLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztnQkFFbkQsS0FBSyxNQUFNO29CQUVQLElBQUksdUJBQVUsQ0FBQyxTQUFTLEVBQUUsRUFBRTt3QkFDeEIsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO3FCQUNuRDt5QkFBTTt3QkFDSCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7cUJBQ3BEO2FBRVI7UUFFTCxDQUFDO0tBQUE7SUFJTyxNQUFNLENBQU8sa0JBQWtCLENBQUMsSUFBYSxFQUFFLE9BQW9COztZQUV2RSxHQUFHLENBQUMsS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUM7WUFFcEMsTUFBTSxFQUFDLEtBQUssRUFBRSxNQUFNLEVBQUMsR0FBRyxJQUFJLENBQUM7WUFFN0IsTUFBTSxrQkFBa0IsR0FBRyxPQUFPLENBQUMscUJBQXFCLEVBQUUsQ0FBQztZQUUzRCxNQUFNLE1BQU0sR0FBa0I7Z0JBQzFCLENBQUMsRUFBRSxrQkFBa0IsQ0FBQyxJQUFJO2dCQUMxQixDQUFDLEVBQUUsa0JBQWtCLENBQUMsR0FBRztnQkFDekIsS0FBSyxFQUFFLE1BQU07YUFDaEIsQ0FBQztZQUVGLE1BQU0sa0JBQWtCLEdBQUcsTUFBTSx5Q0FBbUIsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUM7WUFFcEYsTUFBTSxNQUFNLEdBQVksa0JBQWtCLENBQUMsSUFBSSxDQUFDO1lBQ2hELE1BQU0sSUFBSSxHQUFHLGlCQUFPLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRTNDLE9BQU8sRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFDLENBQUM7UUFFcEQsQ0FBQztLQUFBO0lBRU8sTUFBTSxDQUFPLGdCQUFnQixDQUFDLE9BQWUsRUFBRSxJQUFhOztZQUVoRSxNQUFNLFNBQVMsR0FBRyxtQ0FBZ0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUVqRCxHQUFHLENBQUMsS0FBSyxDQUFDLHdDQUF3QyxTQUFTLENBQUMsSUFBSSxhQUFhLE9BQU8sRUFBRSxDQUFDLENBQUM7WUFFeEYsTUFBTSxNQUFNLEdBQUcsTUFBTSxTQUFTLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRWxELE9BQU8sTUFBTSxtQkFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFaEQsQ0FBQztLQUFBO0lBRU8sTUFBTSxDQUFPLGlCQUFpQixDQUFDLE9BQWdCLEVBQ2hCLE9BQW9COztZQUd2RCxNQUFNLGlCQUFpQixHQUFHLE1BQU0sdUNBQWtCLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztZQUU3RSxJQUFJLGlCQUFpQixFQUFFO2dCQUVuQixPQUFPO29CQUNILElBQUksRUFBRSxpQkFBaUIsQ0FBQyxPQUFPO29CQUMvQixJQUFJLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDNUIsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLO29CQUNwQixNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU07aUJBQ3pCLENBQUM7YUFFTDtpQkFBTTtnQkFDSCxNQUFNLElBQUksS0FBSyxDQUFDLHVDQUF1QyxDQUFDLENBQUM7YUFDNUQ7UUFFTCxDQUFDO0tBQUE7Q0FFSjtBQTNGRCxrQ0EyRkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NhcHR1cmVUYXJnZXR9IGZyb20gJy4vZWxlY3Ryb24vRWxlY3Ryb25TY3JlZW5zaG90cyc7XG5pbXBvcnQge0VsZWN0cm9uU2NyZWVuc2hvdHN9IGZyb20gJy4vZWxlY3Ryb24vRWxlY3Ryb25TY3JlZW5zaG90cyc7XG5pbXBvcnQge0RvY0Zvcm1hdEZhY3Rvcnl9IGZyb20gJy4uL2RvY2Zvcm1hdC9Eb2NGb3JtYXRGYWN0b3J5JztcbmltcG9ydCB7SUxUUmVjdH0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL3JlY3RzL0lMVFJlY3QnO1xuaW1wb3J0IHtCdWZmZXJzfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvQnVmZmVycyc7XG5pbXBvcnQge0NhbnZhc2VzfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvQ2FudmFzZXMnO1xuaW1wb3J0IHtFeHRyYWN0ZWRJbWFnZX0gZnJvbSAnLi9TY3JlZW5zaG90JztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL2xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IHtBcHBSdW50aW1lfSBmcm9tICcuLi9BcHBSdW50aW1lJztcbmltcG9ydCB7QnJvd3NlclNjcmVlbnNob3RzfSBmcm9tICcuL2Jyb3dzZXIvQnJvd3NlclNjcmVlbnNob3RzJztcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG4vKipcbiAqIENhcHR1cmVzIHNjcmVlbnNob3RzIG9mIGEgZG9jdW1lbnQgaW4gdGhlIG1vc3QgZWxlZ2FudCB3YXkgcG9zc2libGUuXG4gKi9cbmV4cG9ydCBjbGFzcyBTY3JlZW5zaG90cyB7XG5cbiAgICAvKipcbiAgICAgKiBDYXB0dXJlIGEgc2NyZWVuc2hvdCB1c2luZyB0aGUgcmlnaHQgc3RyYXRlZ3kgKHZpYSBQREYgY2FudmFzIG9yXG4gICAgICogRWxlY3Ryb24pXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcGFnZU51bSBUaGUgcGFnZSBudW1iZXIgdGhhdCB0aGUgYW5ub3RhdGlvbiBpcyBhdHRhY2hlZC5cbiAgICAgKiBAcGFyYW0gYm94UmVjdCBUaGUgcmVjdCB3aXRoaW4gdGhlIHBhZ2Ugb2YgZm9yIHRoZSBib3ggKGFic29sdXRlbHkgcG9zaXRpb25lZCBhcyBwaXhlbHMpLlxuICAgICAqIEBwYXJhbSBlbGVtZW50IFRoZSBhY3R1YWwgSFRNTCBlbGVtZW50IHRoYXQgcmVwcmVzZW50cyB0aGUgYW5ub3RhdGlvbiBvbiBzY3JlZW4uXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBjYXB0dXJlKHBhZ2VOdW06IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94UmVjdDogSUxUUmVjdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudDogSFRNTEVsZW1lbnQpOiBQcm9taXNlPEV4dHJhY3RlZEltYWdlPiB7XG5cbiAgICAgICAgY29uc3QgZG9jRm9ybWF0ID0gRG9jRm9ybWF0RmFjdG9yeS5nZXRJbnN0YW5jZSgpO1xuXG4gICAgICAgIHN3aXRjaCAoZG9jRm9ybWF0Lm5hbWUpIHtcblxuICAgICAgICAgICAgY2FzZSAncGRmJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jYXB0dXJlVmlhQ2FudmFzKHBhZ2VOdW0sIGJveFJlY3QpO1xuXG4gICAgICAgICAgICBjYXNlICdodG1sJzpcblxuICAgICAgICAgICAgICAgIGlmIChBcHBSdW50aW1lLmlzQnJvd3NlcigpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNhcHR1cmVWaWFCcm93c2VyKGJveFJlY3QsIGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNhcHR1cmVWaWFFbGVjdHJvbihib3hSZWN0LCBlbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLy8gVE9ETzogQ29tcHV0aW5nIHRoZSBib3VuZGluZyByZWN0IGRpcmVjdGx5IHdvdWxkIGJlIGEgYmV0dGVyIG9wdGlvbiBoZXJlLlxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgYXN5bmMgY2FwdHVyZVZpYUVsZWN0cm9uKHJlY3Q6IElMVFJlY3QsIGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogUHJvbWlzZTxFeHRyYWN0ZWRJbWFnZT4gIHtcblxuICAgICAgICBsb2cuZGVidWcoXCJDYXB0dXJpbmcgdmlhIGVsZWN0cm9uXCIpO1xuXG4gICAgICAgIGNvbnN0IHt3aWR0aCwgaGVpZ2h0fSA9IHJlY3Q7XG5cbiAgICAgICAgY29uc3QgYm91bmRpbmdDbGllbnRSZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICBjb25zdCB0YXJnZXQ6IENhcHR1cmVUYXJnZXQgPSB7XG4gICAgICAgICAgICB4OiBib3VuZGluZ0NsaWVudFJlY3QubGVmdCxcbiAgICAgICAgICAgIHk6IGJvdW5kaW5nQ2xpZW50UmVjdC50b3AsXG4gICAgICAgICAgICB3aWR0aCwgaGVpZ2h0XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgY2FwdHVyZWRTY3JlZW5zaG90ID0gYXdhaXQgRWxlY3Ryb25TY3JlZW5zaG90cy5jYXB0dXJlKHRhcmdldCwge3R5cGU6ICdwbmcnfSk7XG5cbiAgICAgICAgY29uc3QgYnVmZmVyID0gPEJ1ZmZlcj4gY2FwdHVyZWRTY3JlZW5zaG90LmRhdGE7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBCdWZmZXJzLnRvQXJyYXlCdWZmZXIoYnVmZmVyKTtcblxuICAgICAgICByZXR1cm4ge2RhdGEsIHR5cGU6ICdpbWFnZS9wbmcnLCB3aWR0aCwgaGVpZ2h0fTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGFzeW5jIGNhcHR1cmVWaWFDYW52YXMocGFnZU51bTogbnVtYmVyLCByZWN0OiBJTFRSZWN0KTogUHJvbWlzZTxFeHRyYWN0ZWRJbWFnZT4ge1xuXG4gICAgICAgIGNvbnN0IGRvY0Zvcm1hdCA9IERvY0Zvcm1hdEZhY3RvcnkuZ2V0SW5zdGFuY2UoKTtcblxuICAgICAgICBsb2cuZGVidWcoYENhcHR1cmluZyB2aWEgY2FudmFzIHdpdGggZG9jRm9ybWF0OiAke2RvY0Zvcm1hdC5uYW1lfSBmb3IgcGFnZSAke3BhZ2VOdW19YCk7XG5cbiAgICAgICAgY29uc3QgY2FudmFzID0gYXdhaXQgZG9jRm9ybWF0LmdldENhbnZhcyhwYWdlTnVtKTtcblxuICAgICAgICByZXR1cm4gYXdhaXQgQ2FudmFzZXMuZXh0cmFjdChjYW52YXMsIHJlY3QpO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgYXN5bmMgY2FwdHVyZVZpYUJyb3dzZXIoYm94UmVjdDogSUxUUmVjdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50OiBIVE1MRWxlbWVudCkge1xuXG4gICAgICAgIC8vIHdlIGhhdmUgdG8gY2FwdHVyZSB2aWEgb3VyIGV4dGVuc2lvblxuICAgICAgICBjb25zdCBicm93c2VyU2NyZWVuc2hvdCA9IGF3YWl0IEJyb3dzZXJTY3JlZW5zaG90cy5jYXB0dXJlKGJveFJlY3QsIGVsZW1lbnQpO1xuXG4gICAgICAgIGlmIChicm93c2VyU2NyZWVuc2hvdCkge1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGRhdGE6IGJyb3dzZXJTY3JlZW5zaG90LmRhdGFVUkwsXG4gICAgICAgICAgICAgICAgdHlwZTogYnJvd3NlclNjcmVlbnNob3QudHlwZSxcbiAgICAgICAgICAgICAgICB3aWR0aDogYm94UmVjdC53aWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGJveFJlY3QuaGVpZ2h0XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gdGFrZSBzY3JlZW5zaG90IHZpYSBicm93c2VyXCIpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbn1cbiJdfQ==