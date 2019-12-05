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
const MainAppBrowserWindowFactory_1 = require("./MainAppBrowserWindowFactory");
const ResourcePaths_1 = require("../../electron/webresource/ResourcePaths");
const SingletonBrowserWindow_1 = require("../../electron/framework/SingletonBrowserWindow");
const Logger_1 = require("polar-shared/src/logger/Logger");
const Dictionaries_1 = require("polar-shared/src/util/Dictionaries");
const PDFDownloadHandlers_1 = require("../../capture/PDFDownloadHandlers");
const log = Logger_1.Logger.create();
class AppLauncher {
    static launchRepositoryApp() {
        return __awaiter(this, void 0, void 0, function* () {
            const browserWindowTag = { name: 'app', value: 'repository' };
            const browserWindow = yield SingletonBrowserWindow_1.SingletonBrowserWindow.getInstance(browserWindowTag, () => __awaiter(this, void 0, void 0, function* () {
                const url = ResourcePaths_1.ResourcePaths.resourceURLFromRelativeURL('/', false);
                log.info("Loading app from URL: " + url);
                const browserWindowOptions = Dictionaries_1.Dictionaries.copyOf(MainAppBrowserWindowFactory_1.BROWSER_WINDOW_OPTIONS);
                browserWindowOptions.webPreferences.partition = 'persist:polar-app';
                return yield MainAppBrowserWindowFactory_1.MainAppBrowserWindowFactory.createWindow(browserWindowOptions, url);
            }));
            PDFDownloadHandlers_1.PDFDownloadHandlers.create(browserWindow.webContents);
            browserWindow.focus();
            return browserWindow;
        });
    }
}
exports.AppLauncher = AppLauncher;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwTGF1bmNoZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJBcHBMYXVuY2hlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBLCtFQUFrRztBQUNsRyw0RUFBdUU7QUFDdkUsNEZBQXVGO0FBQ3ZGLDJEQUFzRDtBQUN0RCxxRUFBZ0U7QUFDaEUsMkVBQXNFO0FBRXRFLE1BQU0sR0FBRyxHQUFJLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU3QixNQUFhLFdBQVc7SUFLYixNQUFNLENBQU8sbUJBQW1COztZQUVuQyxNQUFNLGdCQUFnQixHQUFHLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFDLENBQUM7WUFFNUQsTUFBTSxhQUFhLEdBQUcsTUFBTSwrQ0FBc0IsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLEVBQUUsR0FBUyxFQUFFO2dCQUV4RixNQUFNLEdBQUcsR0FBRyw2QkFBYSxDQUFDLDBCQUEwQixDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDakUsR0FBRyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxHQUFHLENBQUMsQ0FBQztnQkFFekMsTUFBTSxvQkFBb0IsR0FBRywyQkFBWSxDQUFDLE1BQU0sQ0FBQyxvREFBc0IsQ0FBQyxDQUFDO2dCQUl6RSxvQkFBb0IsQ0FBQyxjQUFlLENBQUMsU0FBUyxHQUFHLG1CQUFtQixDQUFDO2dCQUVyRSxPQUFPLE1BQU0seURBQTJCLENBQUMsWUFBWSxDQUFDLG9CQUFvQixFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBRXJGLENBQUMsQ0FBQSxDQUFDLENBQUM7WUFFSCx5Q0FBbUIsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBRXRELGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUV0QixPQUFPLGFBQWEsQ0FBQztRQUV6QixDQUFDO0tBQUE7Q0FFSjtBQWhDRCxrQ0FnQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Jyb3dzZXJXaW5kb3d9IGZyb20gXCJlbGVjdHJvblwiO1xuaW1wb3J0IHtCUk9XU0VSX1dJTkRPV19PUFRJT05TLCBNYWluQXBwQnJvd3NlcldpbmRvd0ZhY3Rvcnl9IGZyb20gJy4vTWFpbkFwcEJyb3dzZXJXaW5kb3dGYWN0b3J5JztcbmltcG9ydCB7UmVzb3VyY2VQYXRoc30gZnJvbSAnLi4vLi4vZWxlY3Ryb24vd2VicmVzb3VyY2UvUmVzb3VyY2VQYXRocyc7XG5pbXBvcnQge1NpbmdsZXRvbkJyb3dzZXJXaW5kb3d9IGZyb20gJy4uLy4uL2VsZWN0cm9uL2ZyYW1ld29yay9TaW5nbGV0b25Ccm93c2VyV2luZG93JztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy9sb2dnZXIvTG9nZ2VyXCI7XG5pbXBvcnQge0RpY3Rpb25hcmllc30gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvdXRpbC9EaWN0aW9uYXJpZXNcIjtcbmltcG9ydCB7UERGRG93bmxvYWRIYW5kbGVyc30gZnJvbSAnLi4vLi4vY2FwdHVyZS9QREZEb3dubG9hZEhhbmRsZXJzJztcblxuY29uc3QgbG9nID0gIExvZ2dlci5jcmVhdGUoKTtcblxuZXhwb3J0IGNsYXNzIEFwcExhdW5jaGVyIHtcblxuICAgIC8qKlxuICAgICAqIExhdW5jaCB0aGUgcmVwb3NpdG9yeSBhcHAgb3IgZm9jdXMgaXQgaWYgaXQncyBhbHJlYWR5IGNyZWF0ZWQuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBsYXVuY2hSZXBvc2l0b3J5QXBwKCk6IFByb21pc2U8QnJvd3NlcldpbmRvdz4ge1xuXG4gICAgICAgIGNvbnN0IGJyb3dzZXJXaW5kb3dUYWcgPSB7bmFtZTogJ2FwcCcsIHZhbHVlOiAncmVwb3NpdG9yeSd9O1xuXG4gICAgICAgIGNvbnN0IGJyb3dzZXJXaW5kb3cgPSBhd2FpdCBTaW5nbGV0b25Ccm93c2VyV2luZG93LmdldEluc3RhbmNlKGJyb3dzZXJXaW5kb3dUYWcsIGFzeW5jICgpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgdXJsID0gUmVzb3VyY2VQYXRocy5yZXNvdXJjZVVSTEZyb21SZWxhdGl2ZVVSTCgnLycsIGZhbHNlKTtcbiAgICAgICAgICAgIGxvZy5pbmZvKFwiTG9hZGluZyBhcHAgZnJvbSBVUkw6IFwiICsgdXJsKTtcblxuICAgICAgICAgICAgY29uc3QgYnJvd3NlcldpbmRvd09wdGlvbnMgPSBEaWN0aW9uYXJpZXMuY29weU9mKEJST1dTRVJfV0lORE9XX09QVElPTlMpO1xuXG4gICAgICAgICAgICAvLyB1c2UgYSAncG9sYXItYXBwJyBzZXNzaW9uIHNvIHdlIGRvbid0IHVzZSB0aGUgZGVmYXVsdCBzZXNzaW9uXG4gICAgICAgICAgICAvLyB3aGljaCBpcyBpbnRlcmNlcHRlZC5cbiAgICAgICAgICAgIGJyb3dzZXJXaW5kb3dPcHRpb25zLndlYlByZWZlcmVuY2VzIS5wYXJ0aXRpb24gPSAncGVyc2lzdDpwb2xhci1hcHAnO1xuXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgTWFpbkFwcEJyb3dzZXJXaW5kb3dGYWN0b3J5LmNyZWF0ZVdpbmRvdyhicm93c2VyV2luZG93T3B0aW9ucywgdXJsKTtcblxuICAgICAgICB9KTtcblxuICAgICAgICBQREZEb3dubG9hZEhhbmRsZXJzLmNyZWF0ZShicm93c2VyV2luZG93LndlYkNvbnRlbnRzKTtcblxuICAgICAgICBicm93c2VyV2luZG93LmZvY3VzKCk7XG5cbiAgICAgICAgcmV0dXJuIGJyb3dzZXJXaW5kb3c7XG5cbiAgICB9XG5cbn1cbiJdfQ==