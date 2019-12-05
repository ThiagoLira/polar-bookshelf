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
const Logger_1 = require("polar-shared/src/logger/Logger");
const Stopwatches_1 = require("polar-shared/src/util/Stopwatches");
const log = Logger_1.Logger.create();
class ScreenshotDelegate {
    capture(id, screenshotRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            const nativeImage = yield Stopwatches_1.Stopwatches.withStopwatchAsync(() => this.captureNativeImage(id, screenshotRequest), stopwatch => log.debug("captureNativeImage took: " + stopwatch));
            return Stopwatches_1.Stopwatches.withStopwatch(() => this.toCapturedScreenshot(nativeImage, screenshotRequest), stopwatch => log.debug("toCapturedScreenshot took: " + stopwatch));
        });
    }
    captureNativeImage(id, screenshotRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            const webContentsInstance = electron_1.webContents.fromId(id);
            if (!screenshotRequest) {
                throw new Error("screenshotRequest required");
            }
            let rect = screenshotRequest.rect;
            if (!rect) {
                throw new Error("No rect");
            }
            rect = {
                x: Math.round(screenshotRequest.rect.x),
                y: Math.round(screenshotRequest.rect.y),
                width: Math.round(screenshotRequest.rect.width),
                height: Math.round(screenshotRequest.rect.height)
            };
            return new Promise((resolve) => {
                webContentsInstance.capturePage(rect, (image) => {
                    if (screenshotRequest.resize) {
                        if (screenshotRequest.resize.width !== undefined ||
                            screenshotRequest.resize.height !== undefined) {
                            log.info("Resizing image to: ", screenshotRequest.resize);
                            image = image.resize(screenshotRequest.resize);
                        }
                    }
                    if (screenshotRequest.crop) {
                        log.info("Cropping image to: ", screenshotRequest.resize);
                        image = image.crop(screenshotRequest.crop);
                    }
                    resolve(image);
                });
            });
        });
    }
    toCapturedScreenshot(image, screenshotRequest) {
        const toData = () => {
            switch (screenshotRequest.type) {
                case 'data-url':
                    return image.toDataURL();
                case 'png':
                    return image.toPNG();
            }
        };
        const data = toData();
        const size = image.getSize();
        const capturedScreenshot = {
            data,
            dimensions: {
                width: size.width,
                height: size.height
            },
            type: screenshotRequest.type
        };
        return capturedScreenshot;
    }
}
exports.ScreenshotDelegate = ScreenshotDelegate;
ScreenshotDelegate.DELEGATE_NAME = "screenshotDelegate";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2NyZWVuc2hvdERlbGVnYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiU2NyZWVuc2hvdERlbGVnYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRUEsdUNBQXFDO0FBQ3JDLDJEQUFzRDtBQUN0RCxtRUFBOEQ7QUFFOUQsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBSzVCLE1BQWEsa0JBQWtCO0lBSWQsT0FBTyxDQUFDLEVBQWlCLEVBQUUsaUJBQW9DOztZQUV4RSxNQUFNLFdBQVcsR0FDYixNQUFNLHlCQUFXLENBQUMsa0JBQWtCLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEVBQUUsRUFBRSxpQkFBaUIsQ0FBQyxFQUNwRCxTQUFTLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsMkJBQTJCLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUUxRyxPQUFPLHlCQUFXLENBQUMsYUFBYSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLEVBQUUsaUJBQWlCLENBQUMsRUFDL0QsU0FBUyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLDZCQUE2QixHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFFeEcsQ0FBQztLQUFBO0lBYWEsa0JBQWtCLENBQUMsRUFBaUIsRUFBRSxpQkFBb0M7O1lBRXBGLE1BQU0sbUJBQW1CLEdBQUcsc0JBQVcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7WUFFbkQsSUFBSSxDQUFFLGlCQUFpQixFQUFFO2dCQUNyQixNQUFNLElBQUksS0FBSyxDQUFDLDRCQUE0QixDQUFDLENBQUM7YUFDakQ7WUFFRCxJQUFJLElBQUksR0FBdUIsaUJBQWlCLENBQUMsSUFBSSxDQUFDO1lBRXRELElBQUksQ0FBRSxJQUFJLEVBQUU7Z0JBQ1IsTUFBTSxJQUFJLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUM5QjtZQUtELElBQUksR0FBRztnQkFDSCxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUN2QyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUN2QyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUMvQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO2FBQ3BELENBQUM7WUFFRixPQUFPLElBQUksT0FBTyxDQUF1QixDQUFDLE9BQU8sRUFBRSxFQUFFO2dCQUVqRCxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUU7b0JBRTVDLElBQUksaUJBQWlCLENBQUMsTUFBTSxFQUFFO3dCQUUxQixJQUFJLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxLQUFLLEtBQUssU0FBUzs0QkFDNUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUU7NEJBRS9DLEdBQUcsQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUM7NEJBRTFELEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDO3lCQUVsRDtxQkFFSjtvQkFFRCxJQUFJLGlCQUFpQixDQUFDLElBQUksRUFBRTt3QkFDeEIsR0FBRyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQzt3QkFDMUQsS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7cUJBQzlDO29CQUVELE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFFbkIsQ0FBQyxDQUFDLENBQUM7WUFFUCxDQUFDLENBQUMsQ0FBQztRQUVQLENBQUM7S0FBQTtJQUVPLG9CQUFvQixDQUFDLEtBQTJCLEVBQzNCLGlCQUFvQztRQUU3RCxNQUFNLE1BQU0sR0FBRyxHQUFHLEVBQUU7WUFFaEIsUUFBUSxpQkFBaUIsQ0FBQyxJQUFJLEVBQUU7Z0JBRTVCLEtBQUssVUFBVTtvQkFDWCxPQUFPLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDN0IsS0FBSyxLQUFLO29CQUNOLE9BQU8sS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO2FBRTVCO1FBRUwsQ0FBQyxDQUFDO1FBRUYsTUFBTSxJQUFJLEdBQUcsTUFBTSxFQUFFLENBQUM7UUFFdEIsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRTdCLE1BQU0sa0JBQWtCLEdBQWU7WUFDbkMsSUFBSTtZQUNKLFVBQVUsRUFBRTtnQkFDUixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7Z0JBQ2pCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTthQUN0QjtZQUNELElBQUksRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO1NBQy9CLENBQUM7UUFFRixPQUFPLGtCQUFrQixDQUFDO0lBRTlCLENBQUM7O0FBL0dMLGdEQWlIQztBQS9HaUIsZ0NBQWEsR0FBRyxvQkFBb0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U2NyZWVuc2hvdH0gZnJvbSAnLi4vU2NyZWVuc2hvdCc7XG5pbXBvcnQge1NjcmVlbnNob3RSZXF1ZXN0fSBmcm9tICcuLi9TY3JlZW5zaG90JztcbmltcG9ydCB7d2ViQ29udGVudHN9IGZyb20gJ2VsZWN0cm9uJztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL2xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IHtTdG9wd2F0Y2hlc30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL1N0b3B3YXRjaGVzJztcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG4vKipcbiAqIEhhbmRsZXMgdGhlIGFjdHVhbCBzY3JlZW5zaG90c1xuICovXG5leHBvcnQgY2xhc3MgU2NyZWVuc2hvdERlbGVnYXRlIGltcGxlbWVudHMgSVNjcmVlbnNob3REZWxlZ2F0ZSB7XG5cbiAgICBwdWJsaWMgc3RhdGljIERFTEVHQVRFX05BTUUgPSBcInNjcmVlbnNob3REZWxlZ2F0ZVwiO1xuXG4gICAgcHVibGljIGFzeW5jIGNhcHR1cmUoaWQ6IFdlYkNvbnRlbnRzSUQsIHNjcmVlbnNob3RSZXF1ZXN0OiBTY3JlZW5zaG90UmVxdWVzdCk6IFByb21pc2U8U2NyZWVuc2hvdD4ge1xuXG4gICAgICAgIGNvbnN0IG5hdGl2ZUltYWdlID1cbiAgICAgICAgICAgIGF3YWl0IFN0b3B3YXRjaGVzLndpdGhTdG9wd2F0Y2hBc3luYygoKSA9PiB0aGlzLmNhcHR1cmVOYXRpdmVJbWFnZShpZCwgc2NyZWVuc2hvdFJlcXVlc3QpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3B3YXRjaCA9PiBsb2cuZGVidWcoXCJjYXB0dXJlTmF0aXZlSW1hZ2UgdG9vazogXCIgKyBzdG9wd2F0Y2gpKTtcblxuICAgICAgICByZXR1cm4gU3RvcHdhdGNoZXMud2l0aFN0b3B3YXRjaCgoKSA9PiB0aGlzLnRvQ2FwdHVyZWRTY3JlZW5zaG90KG5hdGl2ZUltYWdlLCBzY3JlZW5zaG90UmVxdWVzdCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3B3YXRjaCA9PiBsb2cuZGVidWcoXCJ0b0NhcHR1cmVkU2NyZWVuc2hvdCB0b29rOiBcIiArIHN0b3B3YXRjaCkpO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgc2NyZWVuc2hvdCBhbmQgcmV0dXJuIGEgTmF0aXZlSW1hZ2Ugb2YgdGhlIHJlc3VsdC5cbiAgICAgKlxuICAgICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9lbGVjdHJvbi9lbGVjdHJvbi9ibG9iL21hc3Rlci9kb2NzL2FwaS9uYXRpdmUtaW1hZ2UubWRcbiAgICAgKlxuICAgICAqIEBwYXJhbSBpZCB0aGUgSUQgZm8gdGhlIHdlYkNvbnRlbnRzIHRvIHNjcmVlbnNob3QgZnJvbS5cbiAgICAgKiBAcGFyYW0gc2NyZWVuc2hvdFJlcXVlc3QgVGhlIHJlY3QgZGF0YSBmb3Igd2hlcmUgdG8gY2FwdHVyZSBvbiB0aGUgcGFnZS5cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlfSBmb3Ige05hdGl2ZUltYWdlfS4gWW91IGNhbiBjYWxsIHRvRGF0ZVVSTCBvbiB0aGUgaW1hZ2VcbiAgICAgKiAgICAgICAgIHdpdGggc2NhbGVGYWN0b3IgYXMgYW4gb3B0aW9uLlxuICAgICAqXG4gICAgICovXG4gICAgcHJpdmF0ZSBhc3luYyBjYXB0dXJlTmF0aXZlSW1hZ2UoaWQ6IFdlYkNvbnRlbnRzSUQsIHNjcmVlbnNob3RSZXF1ZXN0OiBTY3JlZW5zaG90UmVxdWVzdCk6IFByb21pc2U8RWxlY3Ryb24uTmF0aXZlSW1hZ2U+IHtcblxuICAgICAgICBjb25zdCB3ZWJDb250ZW50c0luc3RhbmNlID0gd2ViQ29udGVudHMuZnJvbUlkKGlkKTtcblxuICAgICAgICBpZiAoISBzY3JlZW5zaG90UmVxdWVzdCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwic2NyZWVuc2hvdFJlcXVlc3QgcmVxdWlyZWRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcmVjdDogRWxlY3Ryb24uUmVjdGFuZ2xlID0gc2NyZWVuc2hvdFJlcXVlc3QucmVjdDtcblxuICAgICAgICBpZiAoISByZWN0KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyByZWN0XCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdGhpcyBpcyBhIHdvcmthcm91bmQgZm9yIGNhcHR1cmluZyB0aGUgaW1hZ2UuICBUaGUgbnVtYmVycyBhcmVcbiAgICAgICAgLy8gc29tZXRpbWVzIGZsb2F0aW5nIHBvaW50IGFuZCBJIGFzc3VtZSBFbGVjdHJvbiBuYXRpdmUgZnVuY3Rpb25zIGRvbid0XG4gICAgICAgIC8vIGxpa2UgdGhpcy5cbiAgICAgICAgcmVjdCA9IHtcbiAgICAgICAgICAgIHg6IE1hdGgucm91bmQoc2NyZWVuc2hvdFJlcXVlc3QucmVjdC54KSxcbiAgICAgICAgICAgIHk6IE1hdGgucm91bmQoc2NyZWVuc2hvdFJlcXVlc3QucmVjdC55KSxcbiAgICAgICAgICAgIHdpZHRoOiBNYXRoLnJvdW5kKHNjcmVlbnNob3RSZXF1ZXN0LnJlY3Qud2lkdGgpLFxuICAgICAgICAgICAgaGVpZ2h0OiBNYXRoLnJvdW5kKHNjcmVlbnNob3RSZXF1ZXN0LnJlY3QuaGVpZ2h0KVxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxFbGVjdHJvbi5OYXRpdmVJbWFnZT4oKHJlc29sdmUpID0+IHtcblxuICAgICAgICAgICAgd2ViQ29udGVudHNJbnN0YW5jZS5jYXB0dXJlUGFnZShyZWN0LCAoaW1hZ2UpID0+IHtcblxuICAgICAgICAgICAgICAgIGlmIChzY3JlZW5zaG90UmVxdWVzdC5yZXNpemUpIHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoc2NyZWVuc2hvdFJlcXVlc3QucmVzaXplLndpZHRoICE9PSB1bmRlZmluZWQgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjcmVlbnNob3RSZXF1ZXN0LnJlc2l6ZS5oZWlnaHQgIT09IHVuZGVmaW5lZCkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2cuaW5mbyhcIlJlc2l6aW5nIGltYWdlIHRvOiBcIiwgc2NyZWVuc2hvdFJlcXVlc3QucmVzaXplKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2UgPSBpbWFnZS5yZXNpemUoc2NyZWVuc2hvdFJlcXVlc3QucmVzaXplKTtcblxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoc2NyZWVuc2hvdFJlcXVlc3QuY3JvcCkge1xuICAgICAgICAgICAgICAgICAgICBsb2cuaW5mbyhcIkNyb3BwaW5nIGltYWdlIHRvOiBcIiwgc2NyZWVuc2hvdFJlcXVlc3QucmVzaXplKTtcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2UgPSBpbWFnZS5jcm9wKHNjcmVlbnNob3RSZXF1ZXN0LmNyb3ApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJlc29sdmUoaW1hZ2UpO1xuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgdG9DYXB0dXJlZFNjcmVlbnNob3QoaW1hZ2U6IEVsZWN0cm9uLk5hdGl2ZUltYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NyZWVuc2hvdFJlcXVlc3Q6IFNjcmVlbnNob3RSZXF1ZXN0KSB7XG5cbiAgICAgICAgY29uc3QgdG9EYXRhID0gKCkgPT4ge1xuXG4gICAgICAgICAgICBzd2l0Y2ggKHNjcmVlbnNob3RSZXF1ZXN0LnR5cGUpIHtcblxuICAgICAgICAgICAgICAgIGNhc2UgJ2RhdGEtdXJsJzpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGltYWdlLnRvRGF0YVVSTCgpO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3BuZyc6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpbWFnZS50b1BORygpO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBkYXRhID0gdG9EYXRhKCk7XG5cbiAgICAgICAgY29uc3Qgc2l6ZSA9IGltYWdlLmdldFNpemUoKTtcblxuICAgICAgICBjb25zdCBjYXB0dXJlZFNjcmVlbnNob3Q6IFNjcmVlbnNob3QgPSB7XG4gICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgZGltZW5zaW9uczoge1xuICAgICAgICAgICAgICAgIHdpZHRoOiBzaXplLndpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodDogc2l6ZS5oZWlnaHRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0eXBlOiBzY3JlZW5zaG90UmVxdWVzdC50eXBlXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIGNhcHR1cmVkU2NyZWVuc2hvdDtcblxuICAgIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElTY3JlZW5zaG90RGVsZWdhdGUge1xuICAgIGNhcHR1cmUoaWQ6IFdlYkNvbnRlbnRzSUQsIHNjcmVlbnNob3RSZXF1ZXN0OiBTY3JlZW5zaG90UmVxdWVzdCk6IFByb21pc2U8U2NyZWVuc2hvdD47XG59XG5cbmV4cG9ydCB0eXBlIFdlYkNvbnRlbnRzSUQgPSBudW1iZXI7XG4iXX0=