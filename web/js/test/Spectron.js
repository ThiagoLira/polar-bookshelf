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
const electron_1 = __importDefault(require("electron"));
const SpectronOutputMonitorService_1 = require("./SpectronOutputMonitorService");
const Logger_1 = require("polar-shared/src/logger/Logger");
const { Application } = require('spectron');
const log = Logger_1.Logger.create();
const TIMEOUT = 600000;
const ELECTRON_PATH = electron_1.default;
class Spectron {
    static setup(dir, ...args) {
        console.log("Configuring spectron...");
        let spectronOutputMonitorService;
        beforeEach(function () {
            return __awaiter(this, void 0, void 0, function* () {
                this.timeout(TIMEOUT);
                console.log("Starting spectron with dir: " + dir);
                console.log("ELECTRON_PATH ", ELECTRON_PATH);
                this.app = new Application({
                    path: ELECTRON_PATH,
                    args: [dir, ...args],
                    startTimeout: TIMEOUT,
                    waitTimeout: TIMEOUT
                });
                console.log("Starting app...");
                const app = yield this.app.start();
                console.log("Starting app...done");
                spectronOutputMonitorService = new SpectronOutputMonitorService_1.SpectronOutputMonitorService(app);
                spectronOutputMonitorService.start();
                return app;
            });
        });
        afterEach(function () {
            return __awaiter(this, void 0, void 0, function* () {
                console.log("Going to shutdown now... ");
                if (spectronOutputMonitorService) {
                    spectronOutputMonitorService.stop();
                    spectronOutputMonitorService._doLogForwarding();
                }
                if (this.app && this.app.isRunning()) {
                    return this.app.stop();
                }
                else {
                    console.log("App already stopped.");
                }
            });
        });
    }
    static run(callback) {
    }
}
exports.Spectron = Spectron;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3BlY3Ryb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJTcGVjdHJvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBLHdEQUFvQztBQUNwQyxpRkFBNEU7QUFFNUUsMkRBQXNEO0FBR3RELE1BQU0sRUFBQyxXQUFXLEVBQUMsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFFMUMsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLE1BQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQztBQWdCdkIsTUFBTSxhQUFhLEdBQVEsa0JBQVksQ0FBQztBQVF4QyxNQUFhLFFBQVE7SUFLVixNQUFNLENBQUMsS0FBSyxDQUFDLEdBQVcsRUFBRSxHQUFHLElBQVc7UUFFM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBT3ZDLElBQUksNEJBQTBELENBQUM7UUFFL0QsVUFBVSxDQUFDOztnQkFFUCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUV0QixPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixHQUFHLEdBQUcsQ0FBRSxDQUFDO2dCQUNuRCxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLGFBQWEsQ0FBQyxDQUFDO2dCQUU3QyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksV0FBVyxDQUFDO29CQUt2QixJQUFJLEVBQUUsYUFBYTtvQkFNbkIsSUFBSSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDO29CQUVwQixZQUFZLEVBQUUsT0FBTztvQkFDckIsV0FBVyxFQUFFLE9BQU87aUJBRXZCLENBQUMsQ0FBQztnQkFFSCxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7Z0JBQy9CLE1BQU0sR0FBRyxHQUFHLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO2dCQUVuQyw0QkFBNEIsR0FBRyxJQUFJLDJEQUE0QixDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNyRSw0QkFBNEIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFFckMsT0FBTyxHQUFHLENBQUM7WUFFZixDQUFDO1NBQUEsQ0FBQyxDQUFDO1FBRUgsU0FBUyxDQUFDOztnQkFFTixPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUM7Z0JBRXpDLElBQUksNEJBQTRCLEVBQUU7b0JBQzlCLDRCQUE0QixDQUFDLElBQUksRUFBRSxDQUFDO29CQUNwQyw0QkFBNEIsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2lCQUNuRDtnQkFNRCxJQUFJLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsRUFBRTtvQkFDbEMsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO2lCQUMxQjtxQkFBTTtvQkFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7aUJBQ3ZDO1lBRUwsQ0FBQztTQUFBLENBQUMsQ0FBQztJQUVQLENBQUM7SUFFTSxNQUFNLENBQUMsR0FBRyxDQUFDLFFBQXFCO0lBR3ZDLENBQUM7Q0FFSjtBQWhGRCw0QkFnRkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBlbGVjdHJvblBhdGggZnJvbSAnZWxlY3Ryb24nO1xuaW1wb3J0IHtTcGVjdHJvbk91dHB1dE1vbml0b3JTZXJ2aWNlfSBmcm9tICcuL1NwZWN0cm9uT3V0cHV0TW9uaXRvclNlcnZpY2UnO1xuaW1wb3J0IHtUZXN0UmVzdWx0UmVhZGVyfSBmcm9tICcuL3Jlc3VsdHMvVGVzdFJlc3VsdFJlYWRlcic7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCBwcm9jZXNzIGZyb20gJ3Byb2Nlc3MnO1xuXG5jb25zdCB7QXBwbGljYXRpb259ID0gcmVxdWlyZSgnc3BlY3Ryb24nKTtcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG5jb25zdCBUSU1FT1VUID0gNjAwMDAwO1xuXG4vLyBTdHJpbmcgcGF0aCB0byB0aGUgRWxlY3Ryb24gYXBwbGljYXRpb24gZXhlY3V0YWJsZSB0byBsYXVuY2guIE5vdGU6IElmIHlvdVxuLy8gd2FudCB0byBpbnZva2UgZWxlY3Ryb24gZGlyZWN0bHkgd2l0aCB5b3VyIGFwcCdzIG1haW4gc2NyaXB0IHRoZW4geW91IHNob3VsZFxuLy8gc3BlY2lmeSBwYXRoIGFzIGVsZWN0cm9uIHZpYSBlbGVjdHJvbi1wcmVidWlsdCBhbmQgc3BlY2lmeSB5b3VyIGFwcCdzIG1haW5cbi8vIHNjcmlwdCBwYXRoIGFzIHRoZSBmaXJzdCBhcmd1bWVudCBpbiB0aGUgYXJncyBhcnJheS5cblxuLy8gVE9ETzogcmlnaHQgbm93IHRoaXMgaXMgYSByZWFsbHkgYmFkIGlkZWEgdG8gZW5hYmxlLiAgRm9yIHN0YXJ0ZXJzIGl0IGRvZXNuJ3Rcbi8vIGFjdHVhbGx5IHdvcmsgdGhlIHdheSBJIHdvdWxkIGV4cGVjdCBhbmQgd2UncmUgZ29pbmcgdG8gbmVlZCBhIGJldHRlciB3YXlcbi8vIHRvIGRvIHRlc3Rpbmcgb2YgcHJlLWluc3RhbGxlZCBhcHBzLiAgQWRkaXRpb25hbGx5LCB0aGUgbG9nIG1lc3NhZ2UgaXMgaGlkZGVuXG4vLyBzbyB0aGVyZSdzIG5vIHdheSB0byBrbm93IHdoYXQgaXMgYWN0dWFsbHkgZ29pbmcgb24gdW5kZXIgdGhlIHN1cmZhY2UuXG4vL1xuLy8gY29uc3QgRUxFQ1RST05fUEFUSDogYW55ID1cbi8vICAgICBPcHRpb25hbC5vZig8YW55PiBwcm9jZXNzLmVudi5QT0xBUl9FTEVDVFJPTl9QQVRIKVxuLy8gICAgIC5nZXRPckVsc2UoZWxlY3Ryb25QYXRoKTtcblxuY29uc3QgRUxFQ1RST05fUEFUSDogYW55ID0gZWxlY3Ryb25QYXRoO1xuXG4vKipcbiAqIEJhc2ljIHNwZWN0cm9uIHN0YXJ0dXAgYW5kIHRlYXJkb3duIGZvciBvdXIgdXNhZ2UuICBXZSBhbHNvIHN0YXJ0IGFuXG4gKiBhcHAgdGhhdCBtb25pdG9ycyB0aGUgbWFpbiBwcm9jZXNzIGxvZ3MgYW5kIGZvcndhcmRzIHRoZW0gdG8gdGhlIGNvbnNvbGUuXG4gKlxuICogVGhpcyBhbHNvIGN1dHMgZG93biBvbiBhbGwgdGhlIGJvaWxlcnBsYXRlIHRoYXQgd2UgbmVlZCBmcm9tIFNwZWN0cm9uLlxuICovXG5leHBvcnQgY2xhc3MgU3BlY3Ryb24ge1xuXG4gICAgLyoqXG4gICAgICogVGhlIGRpcmVjdG9yeSB0byBydW4gdGhlIHNwZWNzIGZyb20uIFVzdWFsbHkgX19kaXJuYW1lIGluIHlvdXIgc3BlYy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHNldHVwKGRpcjogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSkge1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ29uZmlndXJpbmcgc3BlY3Ryb24uLi5cIik7XG5cbiAgICAgICAgLy8gVE9ETzogc2luY2Ugc3BlY3Ryb24gcmVxdWlyZXMgYSB3aW5kb3cgdG8gb3BlcmF0ZSwgd2Ugc2hvdWxkIEFMV0FZU1xuICAgICAgICAvLyBjcmVhdGUgYSB3aW5kb3cgYW5kIHRoZW4gcmV0dXJuIGl0IHRvIHRoZSB1c2VyIHNvIHRoYXQgdGhleSBjYW5cbiAgICAgICAgLy8gd29yayB3aXRoIGl0IGRpcmVjdGx5LiAgV2Ugc2hvdWxkIGRvIHRoaXMgd2l0aGluIHNldHVwKCkgYW5kIHJlcXVpcmVcbiAgICAgICAgLy8gYSBVUkwgdG8gbG9hZCBzbyB0aGF0IHRlc3RpbmcgYWx3YXlzIGZ1bmN0aW9ucyBwcm9wZXJseS5cblxuICAgICAgICBsZXQgc3BlY3Ryb25PdXRwdXRNb25pdG9yU2VydmljZTogU3BlY3Ryb25PdXRwdXRNb25pdG9yU2VydmljZTtcblxuICAgICAgICBiZWZvcmVFYWNoKGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICB0aGlzLnRpbWVvdXQoVElNRU9VVCk7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU3RhcnRpbmcgc3BlY3Ryb24gd2l0aCBkaXI6IFwiICsgZGlyICk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVMRUNUUk9OX1BBVEggXCIsIEVMRUNUUk9OX1BBVEgpO1xuXG4gICAgICAgICAgICB0aGlzLmFwcCA9IG5ldyBBcHBsaWNhdGlvbih7XG5cbiAgICAgICAgICAgICAgICAvLyBZb3VyIGVsZWN0cm9uIHBhdGggY2FuIGJlIGFueSBiaW5hcnlcbiAgICAgICAgICAgICAgICAvLyBpLmUgZm9yIE9TWCBhbiBleGFtcGxlIHBhdGggY291bGQgYmUgJy9BcHBsaWNhdGlvbnMvTXlBcHAuYXBwL0NvbnRlbnRzL01hY09TL015QXBwJ1xuICAgICAgICAgICAgICAgIC8vIEJ1dCBmb3IgdGhlIHNha2Ugb2YgdGhlIGV4YW1wbGUgd2UgZmV0Y2ggaXQgZnJvbSBvdXIgbm9kZV9tb2R1bGVzLlxuICAgICAgICAgICAgICAgIHBhdGg6IEVMRUNUUk9OX1BBVEgsXG5cbiAgICAgICAgICAgICAgICAvLyBBc3N1bWluZyB5b3UgaGF2ZSB0aGUgZm9sbG93aW5nIGRpcmVjdG9yeSBzdHJ1Y3R1cmVcblxuICAgICAgICAgICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgbGluZSB0ZWxscyBzcGVjdHJvbiB0byBsb29rIGFuZCB1c2UgdGhlIG1haW4uanMgZmlsZVxuICAgICAgICAgICAgICAgIC8vIGFyZ3M6IFtwYXRoLmpvaW4oZGlyLCAnLi4vLi4vLi4nKV1cbiAgICAgICAgICAgICAgICBhcmdzOiBbZGlyLCAuLi5hcmdzXSxcblxuICAgICAgICAgICAgICAgIHN0YXJ0VGltZW91dDogVElNRU9VVCxcbiAgICAgICAgICAgICAgICB3YWl0VGltZW91dDogVElNRU9VVFxuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJTdGFydGluZyBhcHAuLi5cIik7XG4gICAgICAgICAgICBjb25zdCBhcHAgPSBhd2FpdCB0aGlzLmFwcC5zdGFydCgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJTdGFydGluZyBhcHAuLi5kb25lXCIpO1xuXG4gICAgICAgICAgICBzcGVjdHJvbk91dHB1dE1vbml0b3JTZXJ2aWNlID0gbmV3IFNwZWN0cm9uT3V0cHV0TW9uaXRvclNlcnZpY2UoYXBwKTtcbiAgICAgICAgICAgIHNwZWN0cm9uT3V0cHV0TW9uaXRvclNlcnZpY2Uuc3RhcnQoKTtcblxuICAgICAgICAgICAgcmV0dXJuIGFwcDtcblxuICAgICAgICB9KTtcblxuICAgICAgICBhZnRlckVhY2goYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiR29pbmcgdG8gc2h1dGRvd24gbm93Li4uIFwiKTtcblxuICAgICAgICAgICAgaWYgKHNwZWN0cm9uT3V0cHV0TW9uaXRvclNlcnZpY2UpIHtcbiAgICAgICAgICAgICAgICBzcGVjdHJvbk91dHB1dE1vbml0b3JTZXJ2aWNlLnN0b3AoKTtcbiAgICAgICAgICAgICAgICBzcGVjdHJvbk91dHB1dE1vbml0b3JTZXJ2aWNlLl9kb0xvZ0ZvcndhcmRpbmcoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gVE9ETzogdGhlcmUncyBhIGJ1ZyBoZXJlIHdoZXJlIGlmIG1vY2hhIHRpbWVzIG91dCBpdCB3b24ndCBhbGxvd1xuICAgICAgICAgICAgLy8gdXMgdG8gc3RhcnR1cCB0aGVuIHdlIGNhbid0IGFjdHVhbGx5IHN0b3AgYW5kIHdlIGxlYXZlIGJlaGluZFxuICAgICAgICAgICAgLy8gd2luZG93cyB0aGF0IGFyZSBpbnZhbGlkLlxuXG4gICAgICAgICAgICBpZiAodGhpcy5hcHAgJiYgdGhpcy5hcHAuaXNSdW5uaW5nKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hcHAuc3RvcCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFwcCBhbHJlYWR5IHN0b3BwZWQuXCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBydW4oY2FsbGJhY2s6IFJ1bkNhbGxiYWNrKSB7XG5cblxuICAgIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJ1bkNhbGxiYWNrIHtcblxuICAgICh0ZXN0UmVzdWx0UmVhZGVyOiBUZXN0UmVzdWx0UmVhZGVyKTogdm9pZDtcblxufVxuXG5cbi8qKlxuICogVGhlIFNwZWN0cm9uIEFwcGxpY2F0aW9uIG9iamVjdCB3aXRoIG91ciBjdXN0b20gdHlwZSBhbm5vdGF0aW9ucy4gIFdlIGhhZFxuICogdG8gYWRkIHRoaXMgYXMgYXJvdW5kIGZvciBUeXBlc2NyaXB0IGNhdXNpbmcgU3BlY3Ryb24gYW5kIGpxdWVyeSB0byBjb2xsaWRlLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFRBcHBsaWNhdGlvbiB7XG5cbiAgICBjbGllbnQ6IFRCcm93c2VyO1xuXG4gICAgc3RvcCgpOiB2b2lkO1xuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVEJyb3dzZXIge1xuXG4gICAgZ2V0V2luZG93Q291bnQoKTogUHJvbWlzZTxudW1iZXI+O1xuXG4gICAgd2luZG93SGFuZGxlKCk6IHN0cmluZztcblxuICAgIHdpbmRvd0hhbmRsZXMoKTogV2luZG93SGFuZGxlW107XG5cbiAgICB3aW5kb3cod2luZG93SGFuZGxlOiBXaW5kb3dIYW5kbGUpOiB2b2lkO1xuXG4gICAgZ2V0VGl0bGUoKTogc3RyaW5nO1xuXG4gICAgZXhlY3V0ZUFzeW5jPFQ+KGNhbGxiYWNrOiBFeGVjdXRlQXN5bmNGdW5jdGlvbjxUPik6IFByb21pc2U8VD47XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBFeGVjdXRlQXN5bmNGdW5jdGlvbjxUPiB7XG4gICAgKGRvbmU6ICh2YWw6IFQpID0+IHZvaWQpOiB2b2lkO1xufVxuXG50eXBlIFdpbmRvd0hhbmRsZSA9IHN0cmluZztcblxuIl19