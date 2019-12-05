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
const AppPath_1 = require("../../electron/app_path/AppPath");
const WebserverConfig_1 = require("polar-shared-webserver/src/webserver/WebserverConfig");
const FileRegistry_1 = require("polar-shared-webserver/src/webserver/FileRegistry");
const Webserver_1 = require("polar-shared-webserver/src/webserver/Webserver");
class WebserverTester {
    static run(dir) {
        return __awaiter(this, void 0, void 0, function* () {
            AppPath_1.AppPath.set(dir);
            const webserverConfig = new WebserverConfig_1.WebserverConfig(AppPath_1.AppPath.get(), 8005);
            const fileRegistry = new FileRegistry_1.FileRegistry(webserverConfig);
            const webserver = new Webserver_1.Webserver(webserverConfig, fileRegistry);
            try {
                yield webserver.start();
            }
            catch (e) {
                console.warn("Webserver already running.");
                throw e;
            }
        });
    }
}
exports.WebserverTester = WebserverTester;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2Vic2VydmVyVGVzdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiV2Vic2VydmVyVGVzdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsNkRBQXdEO0FBRXhELDBGQUFxRjtBQUNyRixvRkFBK0U7QUFDL0UsOEVBQXlFO0FBRXpFLE1BQWEsZUFBZTtJQUVqQixNQUFNLENBQU8sR0FBRyxDQUFDLEdBQVc7O1lBRS9CLGlCQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLE1BQU0sZUFBZSxHQUFHLElBQUksaUNBQWUsQ0FBQyxpQkFBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ2pFLE1BQU0sWUFBWSxHQUFHLElBQUksMkJBQVksQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUN2RCxNQUFNLFNBQVMsR0FBRyxJQUFJLHFCQUFTLENBQUMsZUFBZSxFQUFFLFlBQVksQ0FBQyxDQUFDO1lBRS9ELElBQUk7Z0JBQ0EsTUFBTSxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDM0I7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDUixPQUFPLENBQUMsSUFBSSxDQUFDLDRCQUE0QixDQUFDLENBQUM7Z0JBQzNDLE1BQU0sQ0FBQyxDQUFDO2FBQ1g7UUFFTCxDQUFDO0tBQUE7Q0FFSjtBQWxCRCwwQ0FrQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FwcFBhdGh9IGZyb20gXCIuLi8uLi9lbGVjdHJvbi9hcHBfcGF0aC9BcHBQYXRoXCI7XG5pbXBvcnQge0FzeW5jRnVuY3Rpb259IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC9Bc3luY1dvcmtRdWV1ZSc7XG5pbXBvcnQge1dlYnNlcnZlckNvbmZpZ30gZnJvbSBcInBvbGFyLXNoYXJlZC13ZWJzZXJ2ZXIvc3JjL3dlYnNlcnZlci9XZWJzZXJ2ZXJDb25maWdcIjtcbmltcG9ydCB7RmlsZVJlZ2lzdHJ5fSBmcm9tIFwicG9sYXItc2hhcmVkLXdlYnNlcnZlci9zcmMvd2Vic2VydmVyL0ZpbGVSZWdpc3RyeVwiO1xuaW1wb3J0IHtXZWJzZXJ2ZXJ9IGZyb20gXCJwb2xhci1zaGFyZWQtd2Vic2VydmVyL3NyYy93ZWJzZXJ2ZXIvV2Vic2VydmVyXCI7XG5cbmV4cG9ydCBjbGFzcyBXZWJzZXJ2ZXJUZXN0ZXIge1xuXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBydW4oZGlyOiBzdHJpbmcpIHtcblxuICAgICAgICBBcHBQYXRoLnNldChkaXIpO1xuICAgICAgICBjb25zdCB3ZWJzZXJ2ZXJDb25maWcgPSBuZXcgV2Vic2VydmVyQ29uZmlnKEFwcFBhdGguZ2V0KCksIDgwMDUpO1xuICAgICAgICBjb25zdCBmaWxlUmVnaXN0cnkgPSBuZXcgRmlsZVJlZ2lzdHJ5KHdlYnNlcnZlckNvbmZpZyk7XG4gICAgICAgIGNvbnN0IHdlYnNlcnZlciA9IG5ldyBXZWJzZXJ2ZXIod2Vic2VydmVyQ29uZmlnLCBmaWxlUmVnaXN0cnkpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCB3ZWJzZXJ2ZXIuc3RhcnQoKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiV2Vic2VydmVyIGFscmVhZHkgcnVubmluZy5cIik7XG4gICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG5cbiAgICB9XG5cbn1cblxuIl19