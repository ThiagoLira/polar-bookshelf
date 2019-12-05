"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const electron_in_page_search_1 = __importDefault(require("electron-in-page-search"));
class InPageSearch {
    static execute() {
        const webContents = electron_1.BrowserWindow.getFocusedWindow().webContents;
        const inPageSearch = electron_in_page_search_1.default(webContents);
        inPageSearch.openSearchWindow();
    }
}
exports.InPageSearch = InPageSearch;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5QYWdlU2VhcmNoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiSW5QYWdlU2VhcmNoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsdUNBQXVDO0FBQ3ZDLHNGQUFtRDtBQUVuRCxNQUFhLFlBQVk7SUFFZCxNQUFNLENBQUMsT0FBTztRQUNqQixNQUFNLFdBQVcsR0FBRyx3QkFBYSxDQUFDLGdCQUFnQixFQUFHLENBQUMsV0FBVyxDQUFDO1FBQ2xFLE1BQU0sWUFBWSxHQUFHLGlDQUFZLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDL0MsWUFBWSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDcEMsQ0FBQztDQUVKO0FBUkQsb0NBUUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Jyb3dzZXJXaW5kb3d9IGZyb20gJ2VsZWN0cm9uJztcbmltcG9ydCBzZWFyY2hJblBhZ2UgZnJvbSAnZWxlY3Ryb24taW4tcGFnZS1zZWFyY2gnO1xuXG5leHBvcnQgY2xhc3MgSW5QYWdlU2VhcmNoIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgZXhlY3V0ZSgpIHtcbiAgICAgICAgY29uc3Qgd2ViQ29udGVudHMgPSBCcm93c2VyV2luZG93LmdldEZvY3VzZWRXaW5kb3coKSEud2ViQ29udGVudHM7XG4gICAgICAgIGNvbnN0IGluUGFnZVNlYXJjaCA9IHNlYXJjaEluUGFnZSh3ZWJDb250ZW50cyk7XG4gICAgICAgIGluUGFnZVNlYXJjaC5vcGVuU2VhcmNoV2luZG93KCk7XG4gICAgfVxuXG59XG4iXX0=