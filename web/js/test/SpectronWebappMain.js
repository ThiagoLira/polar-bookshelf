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
const AppPath_1 = require("../electron/app_path/AppPath");
const SpectronMain2_1 = require("./SpectronMain2");
const PolarDataDir_1 = require("./PolarDataDir");
const WebserverConfig_1 = require("polar-shared-webserver/src/webserver/WebserverConfig");
const FileRegistry_1 = require("polar-shared-webserver/src/webserver/FileRegistry");
const Webserver_1 = require("polar-shared-webserver/src/webserver/Webserver");
class SpectronWebappMain {
    static run(opts) {
        console.log("Running spectron webapp with: ", opts);
        const { appRoot, webRoot, path, rewrites } = opts;
        AppPath_1.AppPath.set(appRoot);
        SpectronMain2_1.SpectronMain2.create().run((state) => __awaiter(this, void 0, void 0, function* () {
            yield PolarDataDir_1.PolarDataDir.useFreshDirectory('.polar-firebase-datastore');
            console.log("Running with app path: " + AppPath_1.AppPath.get());
            console.log("Running with web root: " + webRoot);
            const webserverConfig = WebserverConfig_1.WebserverConfigs.create({ dir: webRoot, port: 8005, rewrites });
            const fileRegistry = new FileRegistry_1.FileRegistry(webserverConfig);
            const webserver = new Webserver_1.Webserver(webserverConfig, fileRegistry);
            try {
                yield webserver.start();
            }
            catch (e) {
                console.warn("Webserver already running.");
            }
            const url = `http://localhost:8005${path}`;
            yield state.window.loadURL(url);
        }));
    }
}
exports.SpectronWebappMain = SpectronWebappMain;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3BlY3Ryb25XZWJhcHBNYWluLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiU3BlY3Ryb25XZWJhcHBNYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsMERBQXFEO0FBQ3JELG1EQUE4QztBQUM5QyxpREFBNEM7QUFDNUMsMEZBQXNGO0FBQ3RGLG9GQUErRTtBQUMvRSw4RUFBeUU7QUFHekUsTUFBYSxrQkFBa0I7SUFFcEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUF5QjtRQUV2QyxPQUFPLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRXBELE1BQU0sRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUMsR0FBRyxJQUFJLENBQUM7UUFFaEQsaUJBQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFckIsNkJBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBTSxLQUFLLEVBQUMsRUFBRTtZQUVyQyxNQUFNLDJCQUFZLENBQUMsaUJBQWlCLENBQUMsMkJBQTJCLENBQUMsQ0FBQztZQUtsRSxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixHQUFHLGlCQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUV2RCxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixHQUFHLE9BQU8sQ0FBQyxDQUFDO1lBRWpELE1BQU0sZUFBZSxHQUFHLGtDQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUMsQ0FBQyxDQUFDO1lBRXRGLE1BQU0sWUFBWSxHQUFHLElBQUksMkJBQVksQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUN2RCxNQUFNLFNBQVMsR0FBRyxJQUFJLHFCQUFTLENBQUMsZUFBZSxFQUFFLFlBQVksQ0FBQyxDQUFDO1lBRS9ELElBQUk7Z0JBQ0EsTUFBTSxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDM0I7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDUixPQUFPLENBQUMsSUFBSSxDQUFDLDRCQUE0QixDQUFDLENBQUM7YUFDOUM7WUFFRCxNQUFNLEdBQUcsR0FBRyx3QkFBd0IsSUFBSSxFQUFFLENBQUM7WUFDM0MsTUFBTSxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVwQyxDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRVAsQ0FBQztDQUVKO0FBdkNELGdEQXVDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXBwUGF0aH0gZnJvbSAnLi4vZWxlY3Ryb24vYXBwX3BhdGgvQXBwUGF0aCc7XG5pbXBvcnQge1NwZWN0cm9uTWFpbjJ9IGZyb20gJy4vU3BlY3Ryb25NYWluMic7XG5pbXBvcnQge1BvbGFyRGF0YURpcn0gZnJvbSAnLi9Qb2xhckRhdGFEaXInO1xuaW1wb3J0IHtXZWJzZXJ2ZXJDb25maWdzfSBmcm9tIFwicG9sYXItc2hhcmVkLXdlYnNlcnZlci9zcmMvd2Vic2VydmVyL1dlYnNlcnZlckNvbmZpZ1wiO1xuaW1wb3J0IHtGaWxlUmVnaXN0cnl9IGZyb20gXCJwb2xhci1zaGFyZWQtd2Vic2VydmVyL3NyYy93ZWJzZXJ2ZXIvRmlsZVJlZ2lzdHJ5XCI7XG5pbXBvcnQge1dlYnNlcnZlcn0gZnJvbSBcInBvbGFyLXNoYXJlZC13ZWJzZXJ2ZXIvc3JjL3dlYnNlcnZlci9XZWJzZXJ2ZXJcIjtcbmltcG9ydCB7UmV3cml0ZX0gZnJvbSBcInBvbGFyLXNoYXJlZC13ZWJzZXJ2ZXIvc3JjL3dlYnNlcnZlci9SZXdyaXRlc1wiO1xuXG5leHBvcnQgY2xhc3MgU3BlY3Ryb25XZWJhcHBNYWluIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgcnVuKG9wdHM6IElTcGVjdHJvbldlYmFwcE9wdHMpIHtcblxuICAgICAgICBjb25zb2xlLmxvZyhcIlJ1bm5pbmcgc3BlY3Ryb24gd2ViYXBwIHdpdGg6IFwiLCBvcHRzKTtcblxuICAgICAgICBjb25zdCB7YXBwUm9vdCwgd2ViUm9vdCwgcGF0aCwgcmV3cml0ZXN9ID0gb3B0cztcblxuICAgICAgICBBcHBQYXRoLnNldChhcHBSb290KTtcblxuICAgICAgICBTcGVjdHJvbk1haW4yLmNyZWF0ZSgpLnJ1bihhc3luYyBzdGF0ZSA9PiB7XG5cbiAgICAgICAgICAgIGF3YWl0IFBvbGFyRGF0YURpci51c2VGcmVzaERpcmVjdG9yeSgnLnBvbGFyLWZpcmViYXNlLWRhdGFzdG9yZScpO1xuXG4gICAgICAgICAgICAvLyB0aGUgd2Vic2VydmVyIG11c3QgYmUgcnVubmluZyBhcyBmaXJlYmFzZSB3b24ndCBsb2FkIHdpdGhvdXQgYmVpbmcgb24gYW5cbiAgICAgICAgICAgIC8vIEhUVFAgVVJMXG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUnVubmluZyB3aXRoIGFwcCBwYXRoOiBcIiArIEFwcFBhdGguZ2V0KCkpO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJ1bm5pbmcgd2l0aCB3ZWIgcm9vdDogXCIgKyB3ZWJSb290KTtcblxuICAgICAgICAgICAgY29uc3Qgd2Vic2VydmVyQ29uZmlnID0gV2Vic2VydmVyQ29uZmlncy5jcmVhdGUoe2Rpcjogd2ViUm9vdCwgcG9ydDogODAwNSwgcmV3cml0ZXN9KTtcblxuICAgICAgICAgICAgY29uc3QgZmlsZVJlZ2lzdHJ5ID0gbmV3IEZpbGVSZWdpc3RyeSh3ZWJzZXJ2ZXJDb25maWcpO1xuICAgICAgICAgICAgY29uc3Qgd2Vic2VydmVyID0gbmV3IFdlYnNlcnZlcih3ZWJzZXJ2ZXJDb25maWcsIGZpbGVSZWdpc3RyeSk7XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgd2Vic2VydmVyLnN0YXJ0KCk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwiV2Vic2VydmVyIGFscmVhZHkgcnVubmluZy5cIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHVybCA9IGBodHRwOi8vbG9jYWxob3N0OjgwMDUke3BhdGh9YDtcbiAgICAgICAgICAgIGF3YWl0IHN0YXRlLndpbmRvdy5sb2FkVVJMKHVybCk7XG5cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJU3BlY3Ryb25XZWJhcHBPcHRzIHtcblxuICAgIHJlYWRvbmx5IHdlYlJvb3Q6IHN0cmluZztcblxuICAgIHJlYWRvbmx5IGFwcFJvb3Q6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIFRoZSBwYXRoIHRvIGxvYWQgaW4gZWxlY3Ryb24gd2hlbiB0aGUgYXBwIGlzIHJlYWR5LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBhdGg6IHN0cmluZztcblxuICAgIHJlYWRvbmx5IHJld3JpdGVzPzogUmVhZG9ubHlBcnJheTxSZXdyaXRlPjtcblxufVxuIl19