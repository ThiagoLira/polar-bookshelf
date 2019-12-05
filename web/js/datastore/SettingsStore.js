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
const Directories_1 = require("./Directories");
const FilePaths_1 = require("polar-shared/src/util/FilePaths");
const Files_1 = require("polar-shared/src/util/Files");
const Settings_1 = require("./Settings");
const Logger_1 = require("polar-shared/src/logger/Logger");
const AppRuntime_1 = require("../AppRuntime");
const Providers_1 = require("polar-shared/src/util/Providers");
const log = Logger_1.Logger.create();
class SettingsStore {
    static load() {
        return __awaiter(this, void 0, void 0, function* () {
            if (AppRuntime_1.AppRuntime.isElectron()) {
                const settingsPath = FilePaths_1.FilePaths.create(this.directories.configDir, "settings.json");
                if (yield Files_1.Files.existsAsync(settingsPath)) {
                    log.info("Loaded settings from: " + settingsPath);
                    const data = yield Files_1.Files.readFileAsync(settingsPath);
                    const settings = JSON.parse(data.toString("UTF-8"));
                    return Providers_1.Providers.of(settings);
                }
            }
            return Providers_1.Providers.of(new Settings_1.DefaultSettings());
        });
    }
    static write(settings) {
        return __awaiter(this, void 0, void 0, function* () {
            if (AppRuntime_1.AppRuntime.isElectron()) {
                const settingsPath = FilePaths_1.FilePaths.create(this.directories.configDir, "settings.json");
                const data = JSON.stringify(settings, null, "  ");
                yield Files_1.Files.writeFileAsync(settingsPath, data);
                log.info("Wrote settings to: " + settingsPath);
            }
        });
    }
}
exports.SettingsStore = SettingsStore;
SettingsStore.directories = new Directories_1.Directories();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2V0dGluZ3NTdG9yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlNldHRpbmdzU3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBMEM7QUFDMUMsK0RBQTBEO0FBQzFELHVEQUFrRDtBQUVsRCx5Q0FBcUQ7QUFDckQsMkRBQXNEO0FBQ3RELDhDQUF5QztBQUN6QywrREFBb0U7QUFFcEUsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLE1BQWEsYUFBYTtJQUlmLE1BQU0sQ0FBTyxJQUFJOztZQUVwQixJQUFJLHVCQUFVLENBQUMsVUFBVSxFQUFFLEVBQUU7Z0JBRXpCLE1BQU0sWUFBWSxHQUFHLHFCQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLGVBQWUsQ0FBQyxDQUFDO2dCQUVuRixJQUFJLE1BQU0sYUFBSyxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsRUFBRTtvQkFDdkMsR0FBRyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxZQUFZLENBQUMsQ0FBQztvQkFDbEQsTUFBTSxJQUFJLEdBQUcsTUFBTSxhQUFLLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUNyRCxNQUFNLFFBQVEsR0FBYyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztvQkFDL0QsT0FBTyxxQkFBUyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDakM7YUFFSjtZQUVELE9BQU8scUJBQVMsQ0FBQyxFQUFFLENBQUMsSUFBSSwwQkFBZSxFQUFFLENBQUMsQ0FBQztRQUcvQyxDQUFDO0tBQUE7SUFFTSxNQUFNLENBQU8sS0FBSyxDQUFDLFFBQWtCOztZQUV4QyxJQUFJLHVCQUFVLENBQUMsVUFBVSxFQUFFLEVBQUU7Z0JBQ3pCLE1BQU0sWUFBWSxHQUFHLHFCQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLGVBQWUsQ0FBQyxDQUFDO2dCQUNuRixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ2xELE1BQU0sYUFBSyxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBRS9DLEdBQUcsQ0FBQyxJQUFJLENBQUMscUJBQXFCLEdBQUcsWUFBWSxDQUFDLENBQUM7YUFDbEQ7UUFFTCxDQUFDO0tBQUE7O0FBbENMLHNDQW9DQztBQWxDMkIseUJBQVcsR0FBRyxJQUFJLHlCQUFXLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0b3JpZXN9IGZyb20gJy4vRGlyZWN0b3JpZXMnO1xuaW1wb3J0IHtGaWxlUGF0aHN9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC9GaWxlUGF0aHMnO1xuaW1wb3J0IHtGaWxlc30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL0ZpbGVzJztcbmltcG9ydCB7T3B0aW9uYWx9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC90cy9PcHRpb25hbCc7XG5pbXBvcnQge1NldHRpbmdzLCBEZWZhdWx0U2V0dGluZ3N9IGZyb20gJy4vU2V0dGluZ3MnO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge0FwcFJ1bnRpbWV9IGZyb20gJy4uL0FwcFJ1bnRpbWUnO1xuaW1wb3J0IHtQcm92aWRlciwgUHJvdmlkZXJzfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvUHJvdmlkZXJzJztcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG5leHBvcnQgY2xhc3MgU2V0dGluZ3NTdG9yZSB7XG5cbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBkaXJlY3RvcmllcyA9IG5ldyBEaXJlY3RvcmllcygpO1xuXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBsb2FkKCk6IFByb21pc2U8UHJvdmlkZXI8U2V0dGluZ3M+PiB7XG5cbiAgICAgICAgaWYgKEFwcFJ1bnRpbWUuaXNFbGVjdHJvbigpKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IHNldHRpbmdzUGF0aCA9IEZpbGVQYXRocy5jcmVhdGUodGhpcy5kaXJlY3Rvcmllcy5jb25maWdEaXIsIFwic2V0dGluZ3MuanNvblwiKTtcblxuICAgICAgICAgICAgaWYgKGF3YWl0IEZpbGVzLmV4aXN0c0FzeW5jKHNldHRpbmdzUGF0aCkpIHtcbiAgICAgICAgICAgICAgICBsb2cuaW5mbyhcIkxvYWRlZCBzZXR0aW5ncyBmcm9tOiBcIiArIHNldHRpbmdzUGF0aCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IEZpbGVzLnJlYWRGaWxlQXN5bmMoc2V0dGluZ3NQYXRoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzZXR0aW5ncyA9IDxTZXR0aW5ncz4gSlNPTi5wYXJzZShkYXRhLnRvU3RyaW5nKFwiVVRGLThcIikpO1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm92aWRlcnMub2Yoc2V0dGluZ3MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvdmlkZXJzLm9mKG5ldyBEZWZhdWx0U2V0dGluZ3MoKSk7XG5cblxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgd3JpdGUoc2V0dGluZ3M6IFNldHRpbmdzKSB7XG5cbiAgICAgICAgaWYgKEFwcFJ1bnRpbWUuaXNFbGVjdHJvbigpKSB7XG4gICAgICAgICAgICBjb25zdCBzZXR0aW5nc1BhdGggPSBGaWxlUGF0aHMuY3JlYXRlKHRoaXMuZGlyZWN0b3JpZXMuY29uZmlnRGlyLCBcInNldHRpbmdzLmpzb25cIik7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5zdHJpbmdpZnkoc2V0dGluZ3MsIG51bGwsIFwiICBcIik7XG4gICAgICAgICAgICBhd2FpdCBGaWxlcy53cml0ZUZpbGVBc3luYyhzZXR0aW5nc1BhdGgsIGRhdGEpO1xuXG4gICAgICAgICAgICBsb2cuaW5mbyhcIldyb3RlIHNldHRpbmdzIHRvOiBcIiArIHNldHRpbmdzUGF0aCk7XG4gICAgICAgIH1cblxuICAgIH1cblxufVxuIl19