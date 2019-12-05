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
const StandardWebContentsDriver_1 = require("./StandardWebContentsDriver");
const CaptureWebviewWebContentsDriver_1 = require("./CaptureWebviewWebContentsDriver");
const BrowserWebContentsDriver_1 = require("./BrowserWebContentsDriver");
class WebContentsDriverFactory {
    static create(browserProfile) {
        return __awaiter(this, void 0, void 0, function* () {
            let webContentsDriver;
            if (browserProfile.profile === DriverType.WEBVIEW) {
                webContentsDriver = new CaptureWebviewWebContentsDriver_1.CaptureWebviewWebContentsDriver(browserProfile);
            }
            else if (browserProfile.profile === DriverType.BROWSER) {
                webContentsDriver = new BrowserWebContentsDriver_1.BrowserWebContentsDriver(browserProfile);
            }
            else {
                webContentsDriver = new StandardWebContentsDriver_1.StandardWebContentsDriver(browserProfile);
            }
            yield webContentsDriver.init();
            return webContentsDriver;
        });
    }
}
exports.WebContentsDriverFactory = WebContentsDriverFactory;
var DriverType;
(function (DriverType) {
    DriverType["HEADLESS"] = "HEADLESS";
    DriverType["HIDDEN"] = "HIDDEN";
    DriverType["WEBVIEW"] = "WEBVIEW";
    DriverType["BROWSER"] = "BROWSER";
})(DriverType = exports.DriverType || (exports.DriverType = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2ViQ29udGVudHNEcml2ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJXZWJDb250ZW50c0RyaXZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBLDJFQUFzRTtBQUd0RSx1RkFBa0Y7QUFDbEYseUVBQW9FO0FBZ0NwRSxNQUFhLHdCQUF3QjtJQUUxQixNQUFNLENBQU8sTUFBTSxDQUFDLGNBQThCOztZQUVyRCxJQUFJLGlCQUFvQyxDQUFDO1lBRXpDLElBQUksY0FBYyxDQUFDLE9BQU8sS0FBSyxVQUFVLENBQUMsT0FBTyxFQUFFO2dCQUMvQyxpQkFBaUIsR0FBRyxJQUFJLGlFQUErQixDQUFDLGNBQWMsQ0FBQyxDQUFDO2FBQzNFO2lCQUFNLElBQUksY0FBYyxDQUFDLE9BQU8sS0FBSyxVQUFVLENBQUMsT0FBTyxFQUFFO2dCQUN0RCxpQkFBaUIsR0FBRyxJQUFJLG1EQUF3QixDQUFDLGNBQWMsQ0FBQyxDQUFDO2FBQ3BFO2lCQUFNO2dCQUNILGlCQUFpQixHQUFHLElBQUkscURBQXlCLENBQUMsY0FBYyxDQUFDLENBQUM7YUFDckU7WUFFRCxNQUFNLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFDO1lBQy9CLE9BQU8saUJBQWlCLENBQUM7UUFDN0IsQ0FBQztLQUFBO0NBRUo7QUFsQkQsNERBa0JDO0FBRUQsSUFBWSxVQWNYO0FBZEQsV0FBWSxVQUFVO0lBRWxCLG1DQUFxQixDQUFBO0lBRXJCLCtCQUFpQixDQUFBO0lBR2pCLGlDQUFtQixDQUFBO0lBS25CLGlDQUFtQixDQUFBO0FBRXZCLENBQUMsRUFkVyxVQUFVLEdBQVYsa0JBQVUsS0FBVixrQkFBVSxRQWNyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBXZWJDb250ZW50cyA9IEVsZWN0cm9uLldlYkNvbnRlbnRzO1xuaW1wb3J0IHtTdGFuZGFyZFdlYkNvbnRlbnRzRHJpdmVyfSBmcm9tICcuL1N0YW5kYXJkV2ViQ29udGVudHNEcml2ZXInO1xuaW1wb3J0IHtCcm93c2VyUHJvZmlsZX0gZnJvbSAnLi4vQnJvd3NlclByb2ZpbGUnO1xuaW1wb3J0IHtQZW5kaW5nV2ViUmVxdWVzdHNFdmVudH0gZnJvbSAnLi4vLi4vd2VicmVxdWVzdHMvUGVuZGluZ1dlYlJlcXVlc3RzTGlzdGVuZXInO1xuaW1wb3J0IHtDYXB0dXJlV2Vidmlld1dlYkNvbnRlbnRzRHJpdmVyfSBmcm9tICcuL0NhcHR1cmVXZWJ2aWV3V2ViQ29udGVudHNEcml2ZXInO1xuaW1wb3J0IHtCcm93c2VyV2ViQ29udGVudHNEcml2ZXJ9IGZyb20gJy4vQnJvd3NlcldlYkNvbnRlbnRzRHJpdmVyJztcblxuZXhwb3J0IGludGVyZmFjZSBXZWJDb250ZW50c0RyaXZlciB7XG5cbiAgICByZWFkb25seSBicm93c2VyUHJvZmlsZTogQnJvd3NlclByb2ZpbGU7XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIGluaXQoKTogUHJvbWlzZTx2b2lkPjtcblxuICAgIGdldFdlYkNvbnRlbnRzKCk6IFByb21pc2U8V2ViQ29udGVudHM+O1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBkZXN0cm95KCk6IHZvaWQ7XG5cbiAgICBsb2FkVVJMKHVybDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPjtcblxuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuIHByb2dyZXNzIGZvciB0aGUgbG9hZGluZyBwYWdlIGhhcyBiZWVuIHVwZGF0ZWQuXG4gICAgICovXG4gICAgcHJvZ3Jlc3NVcGRhdGVkKGV2ZW50OiBQZW5kaW5nV2ViUmVxdWVzdHNFdmVudCk6IHZvaWQ7XG5cbiAgICAvKipcbiAgICAgKiBBbGxvd3MgdXMgdG8gbGlzdGVuIHRvIGNsb3NlLCBldGMuXG4gICAgICovXG4gICAgYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWU6IFdlYkNvbnRlbnRzRXZlbnROYW1lLCBldmVudExpc3RlbmVyOiAoKSA9PiB2b2lkKTogdm9pZDtcblxufVxuXG5leHBvcnQgY2xhc3MgV2ViQ29udGVudHNEcml2ZXJGYWN0b3J5IHtcblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgY3JlYXRlKGJyb3dzZXJQcm9maWxlOiBCcm93c2VyUHJvZmlsZSk6IFByb21pc2U8V2ViQ29udGVudHNEcml2ZXI+IHtcblxuICAgICAgICBsZXQgd2ViQ29udGVudHNEcml2ZXI6IFdlYkNvbnRlbnRzRHJpdmVyO1xuXG4gICAgICAgIGlmIChicm93c2VyUHJvZmlsZS5wcm9maWxlID09PSBEcml2ZXJUeXBlLldFQlZJRVcpIHtcbiAgICAgICAgICAgIHdlYkNvbnRlbnRzRHJpdmVyID0gbmV3IENhcHR1cmVXZWJ2aWV3V2ViQ29udGVudHNEcml2ZXIoYnJvd3NlclByb2ZpbGUpO1xuICAgICAgICB9IGVsc2UgaWYgKGJyb3dzZXJQcm9maWxlLnByb2ZpbGUgPT09IERyaXZlclR5cGUuQlJPV1NFUikge1xuICAgICAgICAgICAgd2ViQ29udGVudHNEcml2ZXIgPSBuZXcgQnJvd3NlcldlYkNvbnRlbnRzRHJpdmVyKGJyb3dzZXJQcm9maWxlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdlYkNvbnRlbnRzRHJpdmVyID0gbmV3IFN0YW5kYXJkV2ViQ29udGVudHNEcml2ZXIoYnJvd3NlclByb2ZpbGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgYXdhaXQgd2ViQ29udGVudHNEcml2ZXIuaW5pdCgpO1xuICAgICAgICByZXR1cm4gd2ViQ29udGVudHNEcml2ZXI7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBlbnVtIERyaXZlclR5cGUge1xuXG4gICAgSEVBRExFU1MgPSAnSEVBRExFU1MnLFxuXG4gICAgSElEREVOID0gJ0hJRERFTicsXG5cbiAgICAvLyBhIGhpZGRlbiBwYWdlIHdpdGggYSBob3N0ZWQgd2VidmlldyBjb250cm9sLlxuICAgIFdFQlZJRVcgPSAnV0VCVklFVycsXG5cbiAgICAvLyBhIGZ1bGwgYnJvd3NlciB2aWV3IHRoYXQgZW5hYmxlcyB0aGUgdXNlciB0byBjbGljayBhIGNhcHR1cmUgYnV0dG9uIGFuZFxuICAgIC8vIGludGVyYWN0IHdpdGggdGhlIHBhZ2UuXG5cbiAgICBCUk9XU0VSID0gJ0JST1dTRVInLFxuXG59XG5cbmV4cG9ydCB0eXBlIFdlYkNvbnRlbnRzRXZlbnROYW1lID0gJ2Nsb3NlJztcblxuZXhwb3J0IGludGVyZmFjZSBXZWJDb250ZW50c0V2ZW50IHtcblxufVxuIl19