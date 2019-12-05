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
const WebExtensions_1 = require("polar-web-extension-api/src/WebExtensions");
const Results_1 = require("polar-shared/src/util/Results");
const Canvases_1 = require("polar-shared/src/util/Canvases");
const AnnotationToggler_1 = require("../AnnotationToggler");
const Toaster_1 = require("../../ui/toaster/Toaster");
class BrowserScreenshots {
    static capture(rect, element) {
        return __awaiter(this, void 0, void 0, function* () {
            const { width, height } = rect;
            const boundingClientRect = element.getBoundingClientRect();
            rect = {
                left: boundingClientRect.left,
                top: boundingClientRect.top,
                width, height
            };
            if (chrome && chrome.runtime && chrome.runtime.sendMessage) {
                const captureWithRemoteCrop = () => __awaiter(this, void 0, void 0, function* () {
                    const request = {
                        type: 'browser-screenshot',
                        rect
                    };
                    const response = yield WebExtensions_1.webextensions.Messaging.sendMessage(request);
                    if (!response) {
                        throw new Error("No response from web extension");
                    }
                    const result = Results_1.Results.create(response);
                    return result.get();
                });
                const captureWithLocalCrop = () => __awaiter(this, void 0, void 0, function* () {
                    const annotationToggler = new AnnotationToggler_1.AnnotationToggler();
                    try {
                        yield annotationToggler.hide();
                        const request = {
                            type: 'browser-screenshot',
                        };
                        const response = yield WebExtensions_1.webextensions.Messaging.sendMessage(request);
                        if (!response) {
                            Toaster_1.Toaster.error("Area highlights not yet supported in the Polar webapp. ");
                            throw new Error("No response from web extension");
                        }
                        const result = Results_1.Results.create(response);
                        const uncropped = result.get();
                        const croppedImage = yield Canvases_1.Canvases.crop(uncropped.dataURL, rect);
                        return {
                            type: uncropped.type,
                            dataURL: croppedImage
                        };
                    }
                    catch (e) {
                        throw e;
                    }
                    finally {
                        annotationToggler.show();
                    }
                });
                return yield captureWithLocalCrop();
            }
            else {
                throw new Error("No web extension support");
            }
        });
    }
}
exports.BrowserScreenshots = BrowserScreenshots;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnJvd3NlclNjcmVlbnNob3RzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQnJvd3NlclNjcmVlbnNob3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsNkVBQXdFO0FBR3hFLDJEQUFzRDtBQUN0RCw2REFBd0Q7QUFDeEQsNERBQXVEO0FBQ3ZELHNEQUFpRDtBQUVqRCxNQUFhLGtCQUFrQjtJQUVwQixNQUFNLENBQU8sT0FBTyxDQUFDLElBQWEsRUFBRSxPQUFvQjs7WUFFM0QsTUFBTSxFQUFDLEtBQUssRUFBRSxNQUFNLEVBQUMsR0FBRyxJQUFJLENBQUM7WUFFN0IsTUFBTSxrQkFBa0IsR0FBRyxPQUFPLENBQUMscUJBQXFCLEVBQUUsQ0FBQztZQUczRCxJQUFJLEdBQUc7Z0JBQ0gsSUFBSSxFQUFFLGtCQUFrQixDQUFDLElBQUk7Z0JBQzdCLEdBQUcsRUFBRSxrQkFBa0IsQ0FBQyxHQUFHO2dCQUMzQixLQUFLLEVBQUUsTUFBTTthQUNoQixDQUFDO1lBRUYsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLE9BQU8sSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRTtnQkFFeEQsTUFBTSxxQkFBcUIsR0FBRyxHQUFTLEVBQUU7b0JBRXJDLE1BQU0sT0FBTyxHQUFHO3dCQUNaLElBQUksRUFBRSxvQkFBb0I7d0JBQzFCLElBQUk7cUJBQ1AsQ0FBQztvQkFFRixNQUFNLFFBQVEsR0FDUixNQUFNLDZCQUFhLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFFekQsSUFBSSxDQUFFLFFBQVEsRUFBRTt3QkFDWixNQUFNLElBQUksS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7cUJBQ3JEO29CQUVELE1BQU0sTUFBTSxHQUE4QixpQkFBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFFbkUsT0FBTyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBRXhCLENBQUMsQ0FBQSxDQUFDO2dCQUVGLE1BQU0sb0JBQW9CLEdBQUcsR0FBUyxFQUFFO29CQUVwQyxNQUFNLGlCQUFpQixHQUFHLElBQUkscUNBQWlCLEVBQUUsQ0FBQztvQkFFbEQsSUFBSTt3QkFFQSxNQUFNLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFDO3dCQUUvQixNQUFNLE9BQU8sR0FBRzs0QkFDWixJQUFJLEVBQUUsb0JBQW9CO3lCQUM3QixDQUFDO3dCQUVGLE1BQU0sUUFBUSxHQUNSLE1BQU0sNkJBQWEsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUV6RCxJQUFJLENBQUMsUUFBUSxFQUFFOzRCQUNYLGlCQUFPLENBQUMsS0FBSyxDQUFDLHlEQUF5RCxDQUFDLENBQUM7NEJBRXpFLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQzt5QkFDckQ7d0JBRUQsTUFBTSxNQUFNLEdBQThCLGlCQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3dCQUVuRSxNQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUM7d0JBRS9CLE1BQU0sWUFBWSxHQUNaLE1BQU0sbUJBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQzt3QkFFbkQsT0FBTzs0QkFDSCxJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUk7NEJBQ3BCLE9BQU8sRUFBRSxZQUFZO3lCQUN4QixDQUFDO3FCQUVMO29CQUFDLE9BQU8sQ0FBQyxFQUFFO3dCQUNSLE1BQU0sQ0FBQyxDQUFDO3FCQUNYOzRCQUFTO3dCQUNOLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFDO3FCQUM1QjtnQkFFTCxDQUFDLENBQUEsQ0FBQztnQkFFRixPQUFPLE1BQU0sb0JBQW9CLEVBQUUsQ0FBQzthQUV2QztpQkFBTTtnQkFDSCxNQUFNLElBQUksS0FBSyxDQUFDLDBCQUEwQixDQUFDLENBQUM7YUFDL0M7UUFFTCxDQUFDO0tBQUE7Q0FFSjtBQXRGRCxnREFzRkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3dlYmV4dGVuc2lvbnN9IGZyb20gJ3BvbGFyLXdlYi1leHRlbnNpb24tYXBpL3NyYy9XZWJFeHRlbnNpb25zJztcbmltcG9ydCB7UmVzdWx0fSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvUmVzdWx0JztcbmltcG9ydCB7SUxUUmVjdH0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL3JlY3RzL0lMVFJlY3QnO1xuaW1wb3J0IHtSZXN1bHRzfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvUmVzdWx0cyc7XG5pbXBvcnQge0NhbnZhc2VzfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvQ2FudmFzZXMnO1xuaW1wb3J0IHtBbm5vdGF0aW9uVG9nZ2xlcn0gZnJvbSAnLi4vQW5ub3RhdGlvblRvZ2dsZXInO1xuaW1wb3J0IHtUb2FzdGVyfSBmcm9tICcuLi8uLi91aS90b2FzdGVyL1RvYXN0ZXInO1xuXG5leHBvcnQgY2xhc3MgQnJvd3NlclNjcmVlbnNob3RzIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgY2FwdHVyZShyZWN0OiBJTFRSZWN0LCBlbGVtZW50OiBIVE1MRWxlbWVudCk6IFByb21pc2U8QnJvd3NlclNjcmVlbnNob3QgfCB1bmRlZmluZWQ+IHtcblxuICAgICAgICBjb25zdCB7d2lkdGgsIGhlaWdodH0gPSByZWN0O1xuXG4gICAgICAgIGNvbnN0IGJvdW5kaW5nQ2xpZW50UmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgLy8gdXBkYXRlIHRoZSByZWN0IHRvIHJlZmxlY3QgdGhlIGVsZW1lbnQgbm90IHRoZSBpZnJhbWUgcG9zaXRpb24uXG4gICAgICAgIHJlY3QgPSB7XG4gICAgICAgICAgICBsZWZ0OiBib3VuZGluZ0NsaWVudFJlY3QubGVmdCxcbiAgICAgICAgICAgIHRvcDogYm91bmRpbmdDbGllbnRSZWN0LnRvcCxcbiAgICAgICAgICAgIHdpZHRoLCBoZWlnaHRcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoY2hyb21lICYmIGNocm9tZS5ydW50aW1lICYmIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGNhcHR1cmVXaXRoUmVtb3RlQ3JvcCA9IGFzeW5jICgpID0+IHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdicm93c2VyLXNjcmVlbnNob3QnLFxuICAgICAgICAgICAgICAgICAgICByZWN0XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlOiBCcm93c2VyU2NyZWVuc2hvdFxuICAgICAgICAgICAgICAgICAgICA9IGF3YWl0IHdlYmV4dGVuc2lvbnMuTWVzc2FnaW5nLnNlbmRNZXNzYWdlKHJlcXVlc3QpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCEgcmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gcmVzcG9uc2UgZnJvbSB3ZWIgZXh0ZW5zaW9uXCIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdDogUmVzdWx0PEJyb3dzZXJTY3JlZW5zaG90PiA9IFJlc3VsdHMuY3JlYXRlKHJlc3BvbnNlKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQuZ2V0KCk7XG5cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNvbnN0IGNhcHR1cmVXaXRoTG9jYWxDcm9wID0gYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgY29uc3QgYW5ub3RhdGlvblRvZ2dsZXIgPSBuZXcgQW5ub3RhdGlvblRvZ2dsZXIoKTtcblxuICAgICAgICAgICAgICAgIHRyeSB7XG5cbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgYW5ub3RhdGlvblRvZ2dsZXIuaGlkZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYnJvd3Nlci1zY3JlZW5zaG90JyxcbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZTogQnJvd3NlclNjcmVlbnNob3RcbiAgICAgICAgICAgICAgICAgICAgICAgID0gYXdhaXQgd2ViZXh0ZW5zaW9ucy5NZXNzYWdpbmcuc2VuZE1lc3NhZ2UocmVxdWVzdCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3Rlci5lcnJvcihcIkFyZWEgaGlnaGxpZ2h0cyBub3QgeWV0IHN1cHBvcnRlZCBpbiB0aGUgUG9sYXIgd2ViYXBwLiBcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUb2FzdGVyLmVycm9yKFwiVW5hYmxlIHRvIGNhcHR1cmUgc2NyZWVuc2hvdC4gTWFrZSBzdXJlIHRoZSBsYXRlc3QgdmVyc2lvbiBvZiB0aGUgUG9sYXIgd2ViIGV4dGVuc2lvbiBpcyBpbnN0YWxsZWQuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gcmVzcG9uc2UgZnJvbSB3ZWIgZXh0ZW5zaW9uXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0OiBSZXN1bHQ8QnJvd3NlclNjcmVlbnNob3Q+ID0gUmVzdWx0cy5jcmVhdGUocmVzcG9uc2UpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHVuY3JvcHBlZCA9IHJlc3VsdC5nZXQoKTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjcm9wcGVkSW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgID0gYXdhaXQgQ2FudmFzZXMuY3JvcCh1bmNyb3BwZWQuZGF0YVVSTCwgcmVjdCk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHVuY3JvcHBlZC50eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVVSTDogY3JvcHBlZEltYWdlXG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgYW5ub3RhdGlvblRvZ2dsZXIuc2hvdygpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGNhcHR1cmVXaXRoTG9jYWxDcm9wKCk7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHdlYiBleHRlbnNpb24gc3VwcG9ydFwiKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQnJvd3NlclNjcmVlbnNob3Qge1xuICAgIHJlYWRvbmx5IGRhdGFVUkw6IHN0cmluZztcbiAgICByZWFkb25seSB0eXBlOiAnaW1hZ2UvcG5nJztcbn1cbiJdfQ==