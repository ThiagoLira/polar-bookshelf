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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const electron_updater_1 = require("electron-updater");
const Logger_1 = require("polar-shared/src/logger/Logger");
const process_1 = __importDefault(require("process"));
const Broadcasters_1 = require("../ipc/Broadcasters");
const Version_1 = require("polar-shared/src/util/Version");
const ToasterMessages_1 = require("../ui/toaster/ToasterMessages");
const Toaster_1 = require("../ui/toaster/Toaster");
const TimeDurations_1 = require("polar-shared/src/util/TimeDurations");
const AppUpdates_1 = require("./AppUpdates");
const ENABLE_AUTO_UPDATE = true;
const RANDOM_DELAY = TimeDurations_1.TimeDurations.toRandom('3d');
const AUTO_UPDATE_DELAY_INITIAL = RANDOM_DELAY;
const AUTO_UPDATE_DELAY_RECHECK = RANDOM_DELAY;
const log = Logger_1.Logger.create();
electron_updater_1.autoUpdater.autoDownload = false;
electron_updater_1.autoUpdater.allowPrerelease = process_1.default.env.POLAR_AUTO_UPDATER_ALLOW_PRERELEASE === 'true';
log.info("Allowing pre-releases for auto-updates: " + electron_updater_1.autoUpdater.allowPrerelease);
class Updates {
    static checkForUpdates(menuItem) {
        if (this.performingUpdate) {
            return;
        }
        updater = menuItem;
        updater.enabled = false;
        this.checkForUpdatesManually();
    }
    static checkForUpdatesManually() {
        if (this.performingUpdate) {
            return;
        }
        log.info("Checking for updates manually.");
        Updates.updateRequestedManually = true;
        this.doCheckForUpdates()
            .catch(err => log.error("Error handling updates: " + err));
    }
    static scheduleAutoUpdate(delay = AUTO_UPDATE_DELAY_RECHECK) {
        log.info("Scheduling auto update for N ms: " + delay);
        setTimeout(() => this.doAutoUpdate(), delay);
    }
    static doAutoUpdate() {
        log.info("Checking for updates...");
        this.doCheckForUpdates()
            .then((updateCheckResult) => {
            log.info("Update result: ", updateCheckResult);
            this.scheduleAutoUpdate();
        })
            .catch(err => {
            log.error("Failed to check for updates: ", err);
            this.scheduleAutoUpdate();
        });
    }
    static doCheckForUpdates() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.performingUpdate) {
                log.warn("Update already running. Skipping.");
                return undefined;
            }
            return yield electron_updater_1.autoUpdater.checkForUpdates();
        });
    }
    static hasUpdated() {
        return this.updatedVersion !== undefined;
    }
    static quitAndInstall() {
        electron_updater_1.autoUpdater.quitAndInstall();
    }
}
exports.Updates = Updates;
Updates.updateRequestedManually = false;
Updates.performingUpdate = false;
let updater;
electron_updater_1.autoUpdater.on('checking-for-update', (info) => {
    Updates.performingUpdate = true;
});
electron_updater_1.autoUpdater.on('error', (error) => {
    log.info('update error:', error);
    ToasterMessages_1.ToasterMessages.send({
        type: Toaster_1.ToasterMessageType.ERROR,
        message: 'Error: ' + error == null ? "unknown" : (error.stack || error).toString()
    });
    Updates.updateRequestedManually = false;
    Updates.performingUpdate = false;
});
electron_updater_1.autoUpdater.on('update-cancelled', (info) => {
    log.info('update-cancelled');
    Updates.performingUpdate = false;
});
electron_updater_1.autoUpdater.on('update-available', (info) => {
    try {
        log.info("update-available: ", info);
        if (info && info.version) {
            const fromVersion = Version_1.Version.get();
            const toVersion = info.version;
            if (Updates.updatedVersion === toVersion) {
                log.warn(`Already updated to version ${toVersion} (not re-downloading)`);
                return;
            }
            Updates.updatedVersion = toVersion;
            const appUpdate = {
                fromVersion,
                toVersion,
                automatic: !Updates.updateRequestedManually
            };
            Broadcasters_1.Broadcasters.send("app-update:available", appUpdate);
            ToasterMessages_1.ToasterMessages.send({
                type: Toaster_1.ToasterMessageType.INFO,
                message: `Downloading app update to version ${toVersion}`
            });
            log.info("Downloading update: " + toVersion, info);
        }
        electron_updater_1.autoUpdater.downloadUpdate()
            .then(() => __awaiter(void 0, void 0, void 0, function* () {
            log.info("Update downloaded.");
        }))
            .catch(err => log.error("Error handling updates: " + err));
    }
    finally {
        Updates.updateRequestedManually = false;
    }
});
electron_updater_1.autoUpdater.on('update-not-available', () => {
    log.info('update-not-available');
    if (Updates.updateRequestedManually) {
        ToasterMessages_1.ToasterMessages.send({
            type: Toaster_1.ToasterMessageType.INFO,
            title: 'No update available',
            message: 'The current version of Polar is up-to-date',
            options: {
                requiresAcknowledgment: true,
                preventDuplicates: true
            }
        });
        if (updater) {
            updater.enabled = true;
            updater = null;
        }
    }
    Updates.updateRequestedManually = false;
});
electron_updater_1.autoUpdater.on('update-downloaded', () => {
    log.info('update-downloaded');
    Broadcasters_1.Broadcasters.send("app-update:update-downloaded", { status: true });
    Updates.updateRequestedManually = false;
    Updates.performingUpdate = false;
});
electron_updater_1.autoUpdater.on('download-progress', (progress) => {
    log.info(`Auto update download progress: ${progress.percent}. `, progress);
    Broadcasters_1.Broadcasters.send("app-update:download-progress", progress);
    Broadcasters_1.Broadcasters.send("download-progress", progress);
});
electron_1.ipcMain.on('app-update:check-for-update', () => {
    Updates.checkForUpdatesManually();
});
electron_1.ipcMain.on('app-update:quit-and-install', () => {
    electron_updater_1.autoUpdater.quitAndInstall();
});
if (ENABLE_AUTO_UPDATE && AppUpdates_1.AppUpdates.platformSupportsUpdates()) {
    log.info("Auto updates enabled.");
    Updates.scheduleAutoUpdate(AUTO_UPDATE_DELAY_INITIAL);
}
else {
    log.info("Auto updates disabled.");
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXBkYXRlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlVwZGF0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBc0M7QUFDdEMsdURBQTRFO0FBRTVFLDJEQUFzRDtBQUV0RCxzREFBOEI7QUFDOUIsc0RBQWlEO0FBQ2pELDJEQUFzRDtBQUV0RCxtRUFBOEQ7QUFDOUQsbURBQXlEO0FBQ3pELHVFQUFrRTtBQUdsRSw2Q0FBd0M7QUFFeEMsTUFBTSxrQkFBa0IsR0FBRyxJQUFJLENBQUM7QUFFaEMsTUFBTSxZQUFZLEdBQUcsNkJBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7QUFLbEQsTUFBTSx5QkFBeUIsR0FBRyxZQUFZLENBQUM7QUFDL0MsTUFBTSx5QkFBeUIsR0FBRyxZQUFZLENBQUM7QUFNL0MsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBSTVCLDhCQUFXLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztBQUdqQyw4QkFBVyxDQUFDLGVBQWUsR0FBRyxpQkFBTyxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsS0FBSyxNQUFNLENBQUM7QUFFekYsR0FBRyxDQUFDLElBQUksQ0FBQywwQ0FBMEMsR0FBRyw4QkFBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBRW5GLE1BQWEsT0FBTztJQVlULE1BQU0sQ0FBQyxlQUFlLENBQUMsUUFBMkI7UUFFckQsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDdkIsT0FBTztTQUNWO1FBRUQsT0FBTyxHQUFHLFFBQVEsQ0FBQztRQUNuQixPQUFPLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUV4QixJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztJQUVuQyxDQUFDO0lBRU0sTUFBTSxDQUFDLHVCQUF1QjtRQUVqQyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUN2QixPQUFPO1NBQ1Y7UUFFRCxHQUFHLENBQUMs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QUFtQixFQUFFLENBQUMsUUFBc0IsRUFBRSxFQUFFO0lBTzNELEdBQUcsQ0FBQyxJQUFJLENBQUMsa0NBQWtDLFFBQVEsQ0FBQyxPQUFPLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztJQU8zRSwyQkFBWSxDQUFDLElBQUksQ0FBQyw4QkFBOEIsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUU1RCwyQkFBWSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUVyRCxDQUFDLENBQUMsQ0FBQztBQUVILGtCQUFPLENBQUMsRUFBRSxDQUFDLDZCQUE2QixFQUFFLEdBQUcsRUFBRTtJQUMzQyxPQUFPLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztBQUN0QyxDQUFDLENBQUMsQ0FBQztBQUVILGtCQUFPLENBQUMsRUFBRSxDQUFDLDZCQUE2QixFQUFFLEdBQUcsRUFBRTtJQUMzQyw4QkFBVyxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQ2pDLENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBSSxrQkFBa0IsSUFBSSx1QkFBVSxDQUFDLHVCQUF1QixFQUFFLEVBQUU7SUFDNUQsR0FBRyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0lBRWxDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0NBQ3pEO0tBQU07SUFDSCxHQUFHLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLENBQUM7Q0FDdEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2FwcCwgaXBjTWFpbn0gZnJvbSAnZWxlY3Ryb24nO1xuaW1wb3J0IHthdXRvVXBkYXRlciwgVXBkYXRlQ2hlY2tSZXN1bHQsIFVwZGF0ZUluZm99IGZyb20gJ2VsZWN0cm9uLXVwZGF0ZXInO1xuaW1wb3J0IHtQcm9ncmVzc0luZm99IGZyb20gXCJidWlsZGVyLXV0aWwtcnVudGltZVwiO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbG9nZ2VyL0xvZ2dlcic7XG5cbmltcG9ydCBwcm9jZXNzIGZyb20gJ3Byb2Nlc3MnO1xuaW1wb3J0IHtCcm9hZGNhc3RlcnN9IGZyb20gJy4uL2lwYy9Ccm9hZGNhc3RlcnMnO1xuaW1wb3J0IHtWZXJzaW9ufSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvVmVyc2lvbic7XG5pbXBvcnQge0FwcFVwZGF0ZX0gZnJvbSAnLi9BcHBVcGRhdGUnO1xuaW1wb3J0IHtUb2FzdGVyTWVzc2FnZXN9IGZyb20gJy4uL3VpL3RvYXN0ZXIvVG9hc3Rlck1lc3NhZ2VzJztcbmltcG9ydCB7VG9hc3Rlck1lc3NhZ2VUeXBlfSBmcm9tICcuLi91aS90b2FzdGVyL1RvYXN0ZXInO1xuaW1wb3J0IHtUaW1lRHVyYXRpb25zfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvVGltZUR1cmF0aW9ucyc7XG5pbXBvcnQge1BsYXRmb3JtLCBQbGF0Zm9ybXN9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC9QbGF0Zm9ybXMnO1xuaW1wb3J0IHtEaXN0Q29uZmlnfSBmcm9tICcuLi9kaXN0X2NvbmZpZy9EaXN0Q29uZmlnJztcbmltcG9ydCB7QXBwVXBkYXRlc30gZnJvbSAnLi9BcHBVcGRhdGVzJztcblxuY29uc3QgRU5BQkxFX0FVVE9fVVBEQVRFID0gdHJ1ZTtcblxuY29uc3QgUkFORE9NX0RFTEFZID0gVGltZUR1cmF0aW9ucy50b1JhbmRvbSgnM2QnKTtcblxuLy8gY29uc3QgQVVUT19VUERBVEVfREVMQVlfSU5JVElBTCA9IFRpbWVEdXJhdGlvbnMudG9NaWxsaXMoJzJtJyk7XG4vLyBjb25zdCBBVVRPX1VQREFURV9ERUxBWV9SRUNIRUNLID0gVGltZUR1cmF0aW9ucy50b01pbGxpcygnMWgnKTtcblxuY29uc3QgQVVUT19VUERBVEVfREVMQVlfSU5JVElBTCA9IFJBTkRPTV9ERUxBWTtcbmNvbnN0IEFVVE9fVVBEQVRFX0RFTEFZX1JFQ0hFQ0sgPSBSQU5ET01fREVMQVk7XG5cbi8vIGJvcnJvd2VkIGZyb20gaGVyZSBhbmQgcG9ydGVkIHRvIHR5cGVzY3JpcHQ6XG4vL1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL2VsZWN0cm9uLXVzZXJsYW5kL2VsZWN0cm9uLWJ1aWxkZXIvYmxvYi9kb2NzL2VuY2Fwc3VsYXRlZCUyMG1hbnVhbCUyMHVwZGF0ZSUyMHZpYSUyMG1lbnUuanNcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG4vLyBhdXRvRG93bmxvYWQgaGFzIHRvIGJlIGZhbHNlIGJlY2F1c2Ugd2UgbG9vayBhdCB0aGUgdmVyc2lvbiBudW1iZXIgd2UncmVcbi8vIGRvd25sb2FkaW5nIHRvIGF2b2lkIGRvd25sb2FkaW5nIGl0IG11bHRpcGxlIHRpbWVzLlxuYXV0b1VwZGF0ZXIuYXV0b0Rvd25sb2FkID0gZmFsc2U7XG5cbi8vIHRoaXMgaXMgc28gdGhhdCB3ZSBjYW5cbmF1dG9VcGRhdGVyLmFsbG93UHJlcmVsZWFzZSA9IHByb2Nlc3MuZW52LlBPTEFSX0FVVE9fVVBEQVRFUl9BTExPV19QUkVSRUxFQVNFID09PSAndHJ1ZSc7XG5cbmxvZy5pbmZvKFwiQWxsb3dpbmcgcHJlLXJlbGVhc2VzIGZvciBhdXRvLXVwZGF0ZXM6IFwiICsgYXV0b1VwZGF0ZXIuYWxsb3dQcmVyZWxlYXNlKTtcblxuZXhwb3J0IGNsYXNzIFVwZGF0ZXMge1xuXG4gICAgcHVibGljIHN0YXRpYyB1cGRhdGVSZXF1ZXN0ZWRNYW51YWxseTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgcHVibGljIHN0YXRpYyBwZXJmb3JtaW5nVXBkYXRlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY3VycmVudCB2ZXJzaW9uIHRoYXQgd2FzIHVwZGF0ZWQgdG8gcHJldmVudCBkdXBsaWNhdGUgdXBkYXRlcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHVwZGF0ZWRWZXJzaW9uPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG4gICAgLy8gZXhwb3J0IHRoaXMgdG8gTWVudUl0ZW0gY2xpY2sgY2FsbGJhY2tcbiAgICBwdWJsaWMgc3RhdGljIGNoZWNrRm9yVXBkYXRlcyhtZW51SXRlbTogRWxlY3Ryb24uTWVudUl0ZW0pIHtcblxuICAgICAgICBpZiAodGhpcy5wZXJmb3JtaW5nVXBkYXRlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB1cGRhdGVyID0gbWVudUl0ZW07XG4gICAgICAgIHVwZGF0ZXIuZW5hYmxlZCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuY2hlY2tGb3JVcGRhdGVzTWFudWFsbHkoKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgY2hlY2tGb3JVcGRhdGVzTWFudWFsbHkoKSB7XG5cbiAgICAgICAgaWYgKHRoaXMucGVyZm9ybWluZ1VwZGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbG9nLmluZm8oXCJDaGVja2luZyBmb3IgdXBkYXRlcyBtYW51YWxseS5cIik7XG5cbiAgICAgICAgVXBkYXRlcy51cGRhdGVSZXF1ZXN0ZWRNYW51YWxseSA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5kb0NoZWNrRm9yVXBkYXRlcygpXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IGxvZy5lcnJvcihcIkVycm9yIGhhbmRsaW5nIHVwZGF0ZXM6IFwiICsgZXJyICkpO1xuXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBzY2hlZHVsZUF1dG9VcGRhdGUoZGVsYXk6IG51bWJlciA9IEFVVE9fVVBEQVRFX0RFTEFZX1JFQ0hFQ0spIHtcblxuICAgICAgICBsb2cuaW5mbyhcIlNjaGVkdWxpbmcgYXV0byB1cGRhdGUgZm9yIE4gbXM6IFwiICsgZGVsYXkpO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5kb0F1dG9VcGRhdGUoKSwgZGVsYXkpO1xuXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBkb0F1dG9VcGRhdGUoKSB7XG5cbiAgICAgICAgbG9nLmluZm8oXCJDaGVja2luZyBmb3IgdXBkYXRlcy4uLlwiKTtcblxuICAgICAgICB0aGlzLmRvQ2hlY2tGb3JVcGRhdGVzKClcbiAgICAgICAgICAgIC50aGVuKCh1cGRhdGVDaGVja1Jlc3VsdCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgbG9nLmluZm8oXCJVcGRhdGUgcmVzdWx0OiBcIiwgdXBkYXRlQ2hlY2tSZXN1bHQpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVBdXRvVXBkYXRlKCk7XG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBsb2cuZXJyb3IoXCJGYWlsZWQgdG8gY2hlY2sgZm9yIHVwZGF0ZXM6IFwiLCBlcnIpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVBdXRvVXBkYXRlKCk7XG4gICAgICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgZG9DaGVja0ZvclVwZGF0ZXMoKTogUHJvbWlzZTxVcGRhdGVDaGVja1Jlc3VsdCB8IHVuZGVmaW5lZD4ge1xuXG4gICAgICAgIGlmICh0aGlzLnBlcmZvcm1pbmdVcGRhdGUpIHtcbiAgICAgICAgICAgIGxvZy53YXJuKFwiVXBkYXRlIGFscmVhZHkgcnVubmluZy4gU2tpcHBpbmcuXCIpO1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhd2FpdCBhdXRvVXBkYXRlci5jaGVja0ZvclVwZGF0ZXMoKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgaGFzVXBkYXRlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXBkYXRlZFZlcnNpb24gIT09IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHF1aXRBbmRJbnN0YWxsKCkge1xuICAgICAgICBhdXRvVXBkYXRlci5xdWl0QW5kSW5zdGFsbCgpO1xuICAgIH1cblxufVxuXG5sZXQgdXBkYXRlcjogRWxlY3Ryb24uTWVudUl0ZW0gfCBudWxsO1xuXG4vLyBleHBvcnQgZGVjbGFyZSB0eXBlIFVwZGF0ZXJFdmVudHMgPSBcImxvZ2luXCIgfCBcImNoZWNraW5nLWZvci11cGRhdGVcIiB8IFwidXBkYXRlLWF2YWlsYWJsZVwiIHwgXCJ1cGRhdGUtY2FuY2VsbGVkXCIgfCBcImRvd25sb2FkLXByb2dyZXNzXCIgfCBcInVwZGF0ZS1kb3dubG9hZGVkXCIgfCBcImVycm9yXCI7XG5cblxuYXV0b1VwZGF0ZXIub24oJ2NoZWNraW5nLWZvci11cGRhdGUnLCAoaW5mbzogVXBkYXRlSW5mbykgPT4ge1xuICAgIFVwZGF0ZXMucGVyZm9ybWluZ1VwZGF0ZSA9IHRydWU7XG59KTtcblxuYXV0b1VwZGF0ZXIub24oJ2Vycm9yJywgKGVycm9yKSA9PiB7XG5cbiAgICBsb2cuaW5mbygndXBkYXRlIGVycm9yOicsIGVycm9yKTtcblxuICAgIFRvYXN0ZXJNZXNzYWdlcy5zZW5kKHtcbiAgICAgICAgdHlwZTogVG9hc3Rlck1lc3NhZ2VUeXBlLkVSUk9SLFxuICAgICAgICBtZXNzYWdlOiAnRXJyb3I6ICcgKyBlcnJvciA9PSBudWxsID8gXCJ1bmtub3duXCIgOiAoZXJyb3Iuc3RhY2sgfHwgZXJyb3IpLnRvU3RyaW5nKClcbiAgICB9KTtcblxuICAgIFVwZGF0ZXMudXBkYXRlUmVxdWVzdGVkTWFudWFsbHkgPSBmYWxzZTtcblxuICAgIFVwZGF0ZXMucGVyZm9ybWluZ1VwZGF0ZSA9IGZhbHNlO1xuXG59KTtcblxuYXV0b1VwZGF0ZXIub24oJ3VwZGF0ZS1jYW5jZWxsZWQnLCAoaW5mbzogVXBkYXRlSW5mbykgPT4ge1xuICAgIGxvZy5pbmZvKCd1cGRhdGUtY2FuY2VsbGVkJyk7XG4gICAgVXBkYXRlcy5wZXJmb3JtaW5nVXBkYXRlID0gZmFsc2U7XG59KTtcblxuYXV0b1VwZGF0ZXIub24oJ3VwZGF0ZS1hdmFpbGFibGUnLCAoaW5mbzogVXBkYXRlSW5mbykgPT4ge1xuXG4gICAgdHJ5IHtcblxuICAgICAgICBsb2cuaW5mbyhcInVwZGF0ZS1hdmFpbGFibGU6IFwiLCBpbmZvKTtcblxuICAgICAgICBpZiAoaW5mbyAmJiBpbmZvLnZlcnNpb24pIHtcbiAgICAgICAgICAgIGNvbnN0IGZyb21WZXJzaW9uID0gVmVyc2lvbi5nZXQoKTtcbiAgICAgICAgICAgIGNvbnN0IHRvVmVyc2lvbiA9IGluZm8udmVyc2lvbjtcblxuICAgICAgICAgICAgaWYgKFVwZGF0ZXMudXBkYXRlZFZlcnNpb24gPT09IHRvVmVyc2lvbikge1xuICAgICAgICAgICAgICAgIGxvZy53YXJuKGBBbHJlYWR5IHVwZGF0ZWQgdG8gdmVyc2lvbiAke3RvVmVyc2lvbn0gKG5vdCByZS1kb3dubG9hZGluZylgKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFVwZGF0ZXMudXBkYXRlZFZlcnNpb24gPSB0b1ZlcnNpb247XG5cbiAgICAgICAgICAgIGNvbnN0IGFwcFVwZGF0ZTogQXBwVXBkYXRlID0ge1xuICAgICAgICAgICAgICAgIGZyb21WZXJzaW9uLFxuICAgICAgICAgICAgICAgIHRvVmVyc2lvbixcbiAgICAgICAgICAgICAgICBhdXRvbWF0aWM6ICEgVXBkYXRlcy51cGRhdGVSZXF1ZXN0ZWRNYW51YWxseVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgQnJvYWRjYXN0ZXJzLnNlbmQoXCJhcHAtdXBkYXRlOmF2YWlsYWJsZVwiLCBhcHBVcGRhdGUpO1xuXG4gICAgICAgICAgICBUb2FzdGVyTWVzc2FnZXMuc2VuZCh7XG4gICAgICAgICAgICAgICAgdHlwZTogVG9hc3Rlck1lc3NhZ2VUeXBlLklORk8sXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogYERvd25sb2FkaW5nIGFwcCB1cGRhdGUgdG8gdmVyc2lvbiAke3RvVmVyc2lvbn1gXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbG9nLmluZm8oXCJEb3dubG9hZGluZyB1cGRhdGU6IFwiICsgdG9WZXJzaW9uLCBpbmZvKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgYXV0b1VwZGF0ZXIuZG93bmxvYWRVcGRhdGUoKVxuICAgICAgICAgICAgLnRoZW4oYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgbG9nLmluZm8oXCJVcGRhdGUgZG93bmxvYWRlZC5cIik7XG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IGxvZy5lcnJvcihcIkVycm9yIGhhbmRsaW5nIHVwZGF0ZXM6IFwiICsgZXJyKSk7XG5cblxuXG4gICAgfSBmaW5hbGx5IHtcbiAgICAgICAgVXBkYXRlcy51cGRhdGVSZXF1ZXN0ZWRNYW51YWxseSA9IGZhbHNlO1xuICAgIH1cblxufSk7XG5cbmF1dG9VcGRhdGVyLm9uKCd1cGRhdGUtbm90LWF2YWlsYWJsZScsICgpID0+IHtcblxuICAgIGxvZy5pbmZvKCd1cGRhdGUtbm90LWF2YWlsYWJsZScpO1xuXG4gICAgaWYgKFVwZGF0ZXMudXBkYXRlUmVxdWVzdGVkTWFudWFsbHkpIHtcblxuICAgICAgICBUb2FzdGVyTWVzc2FnZXMuc2VuZCh7XG4gICAgICAgICAgICB0eXBlOiBUb2FzdGVyTWVzc2FnZVR5cGUuSU5GTyxcbiAgICAgICAgICAgIHRpdGxlOiAnTm8gdXBkYXRlIGF2YWlsYWJsZScsXG4gICAgICAgICAgICBtZXNzYWdlOiAnVGhlIGN1cnJlbnQgdmVyc2lvbiBvZiBQb2xhciBpcyB1cC10by1kYXRlJyxcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICByZXF1aXJlc0Fja25vd2xlZGdtZW50OiB0cnVlLFxuICAgICAgICAgICAgICAgIHByZXZlbnREdXBsaWNhdGVzOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh1cGRhdGVyKSB7XG4gICAgICAgICAgICB1cGRhdGVyIS5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHVwZGF0ZXIgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBVcGRhdGVzLnVwZGF0ZVJlcXVlc3RlZE1hbnVhbGx5ID0gZmFsc2U7XG5cbn0pO1xuXG5hdXRvVXBkYXRlci5vbigndXBkYXRlLWRvd25sb2FkZWQnLCAoKSA9PiB7XG5cbiAgICBsb2cuaW5mbygndXBkYXRlLWRvd25sb2FkZWQnKTtcblxuICAgIC8vIFRvYXN0ZXJNZXNzYWdlcy5zZW5kKHtcbiAgICAvLyAgICAgdHlwZTogVG9hc3Rlck1lc3NhZ2VUeXBlLlNVQ0NFU1MsXG4gICAgLy8gICAgIHRpdGxlOiAnVXBkYXRlIGRvd25sb2FkZWQnLFxuICAgIC8vICAgICBtZXNzYWdlOiAnQSBuZXcgdXBkYXRlIGZvciBQb2xhciB3YXMgZG93bmxvYWRlZC4gIFBsZWFzZSByZXN0YXJ0LicsXG4gICAgLy8gICAgIG9wdGlvbnM6IHtcbiAgICAvLyAgICAgICAgIHJlcXVpcmVzQWNrbm93bGVkZ21lbnQ6IHRydWUsXG4gICAgLy8gICAgICAgICBwcmV2ZW50RHVwbGljYXRlczogdHJ1ZVxuICAgIC8vICAgICB9XG4gICAgLy8gfSk7XG5cbiAgICBCcm9hZGNhc3RlcnMuc2VuZChcImFwcC11cGRhdGU6dXBkYXRlLWRvd25sb2FkZWRcIiwge3N0YXR1czogdHJ1ZX0gKTtcblxuICAgIFVwZGF0ZXMudXBkYXRlUmVxdWVzdGVkTWFudWFsbHkgPSBmYWxzZTtcbiAgICBVcGRhdGVzLnBlcmZvcm1pbmdVcGRhdGUgPSBmYWxzZTtcblxufSk7XG5cbmF1dG9VcGRhdGVyLm9uKCdkb3dubG9hZC1wcm9ncmVzcycsIChwcm9ncmVzczogUHJvZ3Jlc3NJbmZvKSA9PiB7XG5cbiAgICAvLyBQcm9ncmVzc0JhclxuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2VsZWN0cm9uLXVzZXJsYW5kL2VsZWN0cm9uLWJ1aWxkZXIvYmxvYi9kb2NzL2F1dG8tdXBkYXRlLm1kI2V2ZW50LWRvd25sb2FkLXByb2dyZXNzXG4gICAgLy8gYnl0ZXNQZXJTZWNvbmQgcGVyY2VudCB0b3RhbCB0cmFuc2ZlcnJlZFxuXG4gICAgbG9nLmluZm8oYEF1dG8gdXBkYXRlIGRvd25sb2FkIHByb2dyZXNzOiAke3Byb2dyZXNzLnBlcmNlbnR9LiBgLCBwcm9ncmVzcyk7XG5cbiAgICAvLyBUT0RPOiB3ZSdyZSBydW5uaW5nIGluIHRoZSBtYWluIHByb2Nlc3MgaGVyZS4gV2UgY291bGQgdXNlIHRoZSBJUENcbiAgICAvLyBicm9hZGNhc3RlciB0byBzZW5kIG1lc3NhZ2UgdG8gZXZlcnkgcmVuZGVyZXIgYW5kIGhhdmUgYSBjb250cm9sbGVyXG4gICAgLy8gcnVubmluZyB0aGVyZSwgbGlzdGVuaW5nIGZvciB0aGUgbWVzc2FnZXMgb24gZG93bmxvYWQgcHJvZ3Jlc3MgdXBkYXRlc1xuICAgIC8vIGFuZCB0aGVuIGRpc3BsYXkgdGhlIGFwcHJvcHJpYXRlIFVJLlxuXG4gICAgQnJvYWRjYXN0ZXJzLnNlbmQoXCJhcHAtdXBkYXRlOmRvd25sb2FkLXByb2dyZXNzXCIsIHByb2dyZXNzKTtcblxuICAgIEJyb2FkY2FzdGVycy5zZW5kKFwiZG93bmxvYWQtcHJvZ3Jlc3NcIiwgcHJvZ3Jlc3MpO1xuXG59KTtcblxuaXBjTWFpbi5vbignYXBwLXVwZGF0ZTpjaGVjay1mb3ItdXBkYXRlJywgKCkgPT4ge1xuICAgIFVwZGF0ZXMuY2hlY2tGb3JVcGRhdGVzTWFudWFsbHkoKTtcbn0pO1xuXG5pcGNNYWluLm9uKCdhcHAtdXBkYXRlOnF1aXQtYW5kLWluc3RhbGwnLCAoKSA9PiB7XG4gICAgYXV0b1VwZGF0ZXIucXVpdEFuZEluc3RhbGwoKTtcbn0pO1xuXG5pZiAoRU5BQkxFX0FVVE9fVVBEQVRFICYmIEFwcFVwZGF0ZXMucGxhdGZvcm1TdXBwb3J0c1VwZGF0ZXMoKSkge1xuICAgIGxvZy5pbmZvKFwiQXV0byB1cGRhdGVzIGVuYWJsZWQuXCIpO1xuXG4gICAgVXBkYXRlcy5zY2hlZHVsZUF1dG9VcGRhdGUoQVVUT19VUERBVEVfREVMQVlfSU5JVElBTCk7XG59IGVsc2Uge1xuICAgIGxvZy5pbmZvKFwiQXV0byB1cGRhdGVzIGRpc2FibGVkLlwiKTtcbn1cblxuIl19