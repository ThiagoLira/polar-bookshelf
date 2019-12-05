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
const Logger_1 = require("polar-shared/src/logger/Logger");
const BrowserProfiles_1 = require("../web/js/capture/BrowserProfiles");
const DiskDatastore_1 = require("../web/js/datastore/DiskDatastore");
const Args_1 = require("../web/js/electron/capture/Args");
const Capture_1 = require("../web/js/capture/Capture");
const BrowserRegistry_1 = __importDefault(require("../web/js/capture/BrowserRegistry"));
const Cmdline_1 = require("../web/js/electron/Cmdline");
const electron = require('electron');
const app = electron.app;
const log = Logger_1.Logger.create();
const diskDatastore = new DiskDatastore_1.DiskDatastore();
const args = Args_1.Args.parse(process.argv);
const browser = BrowserRegistry_1.default[args.browser];
if (!browser) {
    throw new Error("No browser defined for: " + args.browser);
}
app.on('ready', function () {
    (() => __awaiter(this, void 0, void 0, function* () {
        yield diskDatastore.init();
        let url = Cmdline_1.Cmdline.getURLArg(process.argv);
        if (!url) {
            if (!url) {
                console.warn("URL is required.");
                app.quit();
                return;
            }
            url = "https://www.example.com";
        }
        log.info("Using browser profile: " + args.profile);
        const browserProfile = BrowserProfiles_1.BrowserProfiles.toBrowserProfile(browser, args.profile);
        browserProfile.navigation.navigated.dispatchEvent({ link: url });
        browserProfile.navigation.captured.dispatchEvent({});
        console.log("Going to capture URL: " + url);
        const captureOpts = {
            amp: args.amp
        };
        const capture = new Capture_1.Capture(browserProfile, captureOpts);
        yield capture.start();
        if (args.quit) {
            log.info("Capture finished.  Quitting now");
            app.quit();
        }
        else {
            log.info("Not quitting (yielding to --no-quit=true).");
        }
    }))().catch(err => console.error(err));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FwdHVyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhcHR1cmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBc0Q7QUFDdEQsdUVBQWtFO0FBQ2xFLHFFQUFnRTtBQUNoRSwwREFBcUQ7QUFDckQsdURBQWtEO0FBQ2xELHdGQUFnRTtBQUNoRSx3REFBbUQ7QUFFbkQsTUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ3JDLE1BQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUM7QUFHekIsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLE1BQU0sYUFBYSxHQUFHLElBQUksNkJBQWEsRUFBRSxDQUFDO0FBRTFDLE1BQU0sSUFBSSxHQUFHLFdBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRXRDLE1BQU0sT0FBTyxHQUFHLHlCQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBRTlDLElBQUksQ0FBRSxPQUFPLEVBQUU7SUFDWCxNQUFNLElBQUksS0FBSyxDQUFDLDBCQUEwQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztDQUM5RDtBQUVELEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFO0lBRVosQ0FBQyxHQUFTLEVBQUU7UUFFUixNQUFNLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUszQixJQUFJLEdBQUcsR0FBRyxpQkFBTyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFMUMsSUFBSSxDQUFFLEdBQUcsRUFBRTtZQUVQLElBQUksQ0FBRSxHQUFHLEVBQUU7Z0JBQ1AsT0FBTyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO2dCQUNqQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ1gsT0FBTzthQUNWO1lBRUQsR0FBRyxHQUFHLHlCQUF5QixDQUFDO1NBRW5DO1FBRUQsR0FBRyxDQUFDLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFbkQsTUFBTSxjQUFjLEdBQUcsaUNBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRy9FLGNBQWMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxFQUFDLElBQUksRUFBRSxHQUFHLEVBQUMsQ0FBQyxDQUFDO1FBQy9ELGNBQWMsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUVyRCxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBRzVDLE1BQU0sV0FBVyxHQUFHO1lBQ2hCLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRztTQUNoQixDQUFDO1FBRUYsTUFBTSxPQUFPLEdBQUcsSUFBSSxpQkFBTyxDQUFDLGNBQWMsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUV6RCxNQUFNLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUV0QixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDWCxHQUFHLENBQUMsSUFBSSxDQUFDLGlDQUFpQyxDQUFDLENBQUM7WUFDNUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2Q7YUFBTTtZQUNILEdBQUcsQ0FBQyxJQUFJLENBQUMsNENBQTRDLENBQUMsQ0FBQTtTQUN6RDtJQUVMLENBQUMsQ0FBQSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFFMUMsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0xvZ2dlcn0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7QnJvd3NlclByb2ZpbGVzfSBmcm9tICcuLi93ZWIvanMvY2FwdHVyZS9Ccm93c2VyUHJvZmlsZXMnO1xuaW1wb3J0IHtEaXNrRGF0YXN0b3JlfSBmcm9tICcuLi93ZWIvanMvZGF0YXN0b3JlL0Rpc2tEYXRhc3RvcmUnO1xuaW1wb3J0IHtBcmdzfSBmcm9tICcuLi93ZWIvanMvZWxlY3Ryb24vY2FwdHVyZS9BcmdzJztcbmltcG9ydCB7Q2FwdHVyZX0gZnJvbSAnLi4vd2ViL2pzL2NhcHR1cmUvQ2FwdHVyZSc7XG5pbXBvcnQgQnJvd3NlclJlZ2lzdHJ5IGZyb20gJy4uL3dlYi9qcy9jYXB0dXJlL0Jyb3dzZXJSZWdpc3RyeSc7XG5pbXBvcnQge0NtZGxpbmV9IGZyb20gJy4uL3dlYi9qcy9lbGVjdHJvbi9DbWRsaW5lJztcblxuY29uc3QgZWxlY3Ryb24gPSByZXF1aXJlKCdlbGVjdHJvbicpO1xuY29uc3QgYXBwID0gZWxlY3Ryb24uYXBwO1xuXG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuY29uc3QgZGlza0RhdGFzdG9yZSA9IG5ldyBEaXNrRGF0YXN0b3JlKCk7XG5cbmNvbnN0IGFyZ3MgPSBBcmdzLnBhcnNlKHByb2Nlc3MuYXJndik7XG5cbmNvbnN0IGJyb3dzZXIgPSBCcm93c2VyUmVnaXN0cnlbYXJncy5icm93c2VyXTtcblxuaWYgKCEgYnJvd3Nlcikge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk5vIGJyb3dzZXIgZGVmaW5lZCBmb3I6IFwiICsgYXJncy5icm93c2VyKTtcbn1cblxuYXBwLm9uKCdyZWFkeScsIGZ1bmN0aW9uKCkge1xuXG4gICAgKGFzeW5jICgpID0+IHtcblxuICAgICAgICBhd2FpdCBkaXNrRGF0YXN0b3JlLmluaXQoKTtcblxuICAgICAgICAvLyBUT0RPIGRvbid0IHVzZSBkaXJlY3RvcnkgbG9nZ2luZyBub3cgYXMgaXQgaXMgYnJva2VuLlxuICAgICAgICAvLyBhd2FpdCBMb2dnZXIuaW5pdChkaXNrRGF0YXN0b3JlLmxvZ3NEaXIpO1xuXG4gICAgICAgIGxldCB1cmwgPSBDbWRsaW5lLmdldFVSTEFyZyhwcm9jZXNzLmFyZ3YpO1xuXG4gICAgICAgIGlmICghIHVybCkge1xuXG4gICAgICAgICAgICBpZiAoISB1cmwpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJVUkwgaXMgcmVxdWlyZWQuXCIpO1xuICAgICAgICAgICAgICAgIGFwcC5xdWl0KCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1cmwgPSBcImh0dHBzOi8vd3d3LmV4YW1wbGUuY29tXCI7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGxvZy5pbmZvKFwiVXNpbmcgYnJvd3NlciBwcm9maWxlOiBcIiArIGFyZ3MucHJvZmlsZSk7XG5cbiAgICAgICAgY29uc3QgYnJvd3NlclByb2ZpbGUgPSBCcm93c2VyUHJvZmlsZXMudG9Ccm93c2VyUHJvZmlsZShicm93c2VyLCBhcmdzLnByb2ZpbGUpO1xuXG4gICAgICAgIC8vIHdlIGFscmVhZHkga25vdyBhbGwgdGhlIGlucHV0cyBoZXJlLi4uXG4gICAgICAgIGJyb3dzZXJQcm9maWxlLm5hdmlnYXRpb24ubmF2aWdhdGVkLmRpc3BhdGNoRXZlbnQoe2xpbms6IHVybH0pO1xuICAgICAgICBicm93c2VyUHJvZmlsZS5uYXZpZ2F0aW9uLmNhcHR1cmVkLmRpc3BhdGNoRXZlbnQoe30pO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiR29pbmcgdG8gY2FwdHVyZSBVUkw6IFwiICsgdXJsKTtcblxuICAgICAgICAvLyBUT0RPOiBzeW5jIHVwIGFyZ3MgKyBDYXB0dXJlT3B0c1xuICAgICAgICBjb25zdCBjYXB0dXJlT3B0cyA9IHtcbiAgICAgICAgICAgIGFtcDogYXJncy5hbXBcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBjYXB0dXJlID0gbmV3IENhcHR1cmUoYnJvd3NlclByb2ZpbGUsIGNhcHR1cmVPcHRzKTtcblxuICAgICAgICBhd2FpdCBjYXB0dXJlLnN0YXJ0KCk7XG5cbiAgICAgICAgaWYgKGFyZ3MucXVpdCkge1xuICAgICAgICAgICAgbG9nLmluZm8oXCJDYXB0dXJlIGZpbmlzaGVkLiAgUXVpdHRpbmcgbm93XCIpO1xuICAgICAgICAgICAgYXBwLnF1aXQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxvZy5pbmZvKFwiTm90IHF1aXR0aW5nICh5aWVsZGluZyB0byAtLW5vLXF1aXQ9dHJ1ZSkuXCIpXG4gICAgICAgIH1cblxuICAgIH0pKCkuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XG5cbn0pO1xuIl19