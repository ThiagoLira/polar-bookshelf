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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Firebase_1 = require("../../../../web/js/firebase/Firebase");
const firebase = __importStar(require("../../../../web/js/firebase/lib/firebase"));
const Logger_1 = require("polar-shared/src/logger/Logger");
const log = Logger_1.Logger.create();
class CloudService {
    constructor(persistenceLayerManager) {
        this.persistenceLayerManager = persistenceLayerManager;
    }
    start() {
        Firebase_1.Firebase.init();
        firebase.auth()
            .onAuthStateChanged((user) => this.onAuth(user), (err) => this.onAuthError(err));
    }
    onAuth(user) {
        this.handleAuth(user)
            .catch(err => log.error("Failed to handle auth: ", err));
    }
    handleAuth(user) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.persistenceLayerManager.requiresReset()) {
                return;
            }
            if (user) {
                log.notice(`Authenticated as: ${user.displayName} (${user.email})`);
                log.info("Switching to cloud persistence layer");
                yield this.persistenceLayerManager.change('cloud');
            }
            else {
                yield this.persistenceLayerManager.change('local');
            }
        });
    }
    onAuthError(err) {
        log.error("Authentication error: ", err);
    }
}
exports.CloudService = CloudService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2xvdWRTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQ2xvdWRTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1FQUE4RDtBQUM5RCxtRkFBcUU7QUFDckUsMkRBQXNEO0FBR3RELE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU1QixNQUFhLFlBQVk7SUFJckIsWUFBWSx1QkFBZ0Q7UUFDeEQsSUFBSSxDQUFDLHVCQUF1QixHQUFHLHVCQUF1QixDQUFDO0lBQzNELENBQUM7SUFFTSxLQUFLO1FBRVIsbUJBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUVoQixRQUFRLENBQUMsSUFBSSxFQUFFO2FBQ1Ysa0JBQWtCLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQzNCLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFFNUQsQ0FBQztJQUdPLE1BQU0sQ0FBQyxJQUEwQjtRQUVyQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQzthQUNoQixLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLHlCQUF5QixFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFFakUsQ0FBQztJQUVhLFVBQVUsQ0FBQyxJQUEwQjs7WUFJL0MsSUFBSSxJQUFJLENBQUMsdUJBQXVCLENBQUMsYUFBYSxFQUFFLEVBQUU7Z0JBRzlDLE9BQU87YUFDVjtZQUVELElBQUksSUFBSSxFQUFFO2dCQUVOLEdBQUcsQ0FBQyxNQUFNLENBQUMscUJBQXFCLElBQUksQ0FBQyxXQUFXLEtBQUssSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7Z0JBRXBFLEdBQUcsQ0FBQyxJQUFJLENBQUMsc0NBQXNDLENBQUMsQ0FBQztnQkFFakQsTUFBTSxJQUFJLENBQUMsdUJBQXVCLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3REO2lCQUFNO2dCQUNILE1BQU0sSUFBSSxDQUFDLHVCQUF1QixDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUN0RDtRQUVMLENBQUM7S0FBQTtJQUVPLFdBQVcsQ0FBQyxHQUF3QjtRQUN4QyxHQUFHLENBQUMsS0FBSyxDQUFDLHdCQUF3QixFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Q0FFSjtBQXJERCxvQ0FxREMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0ZpcmViYXNlfSBmcm9tICcuLi8uLi8uLi8uLi93ZWIvanMvZmlyZWJhc2UvRmlyZWJhc2UnO1xuaW1wb3J0ICogYXMgZmlyZWJhc2UgZnJvbSAnLi4vLi4vLi4vLi4vd2ViL2pzL2ZpcmViYXNlL2xpYi9maXJlYmFzZSc7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7UGVyc2lzdGVuY2VMYXllck1hbmFnZXJ9IGZyb20gJy4uLy4uLy4uLy4uL3dlYi9qcy9kYXRhc3RvcmUvUGVyc2lzdGVuY2VMYXllck1hbmFnZXInO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbmV4cG9ydCBjbGFzcyBDbG91ZFNlcnZpY2Uge1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBwZXJzaXN0ZW5jZUxheWVyTWFuYWdlcjogUGVyc2lzdGVuY2VMYXllck1hbmFnZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihwZXJzaXN0ZW5jZUxheWVyTWFuYWdlcjogUGVyc2lzdGVuY2VMYXllck1hbmFnZXIpIHtcbiAgICAgICAgdGhpcy5wZXJzaXN0ZW5jZUxheWVyTWFuYWdlciA9IHBlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGFydCgpIHtcblxuICAgICAgICBGaXJlYmFzZS5pbml0KCk7XG5cbiAgICAgICAgZmlyZWJhc2UuYXV0aCgpXG4gICAgICAgICAgICAub25BdXRoU3RhdGVDaGFuZ2VkKCh1c2VyKSA9PiB0aGlzLm9uQXV0aCh1c2VyKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGVycikgPT4gdGhpcy5vbkF1dGhFcnJvcihlcnIpKTtcblxuICAgIH1cblxuXG4gICAgcHJpdmF0ZSBvbkF1dGgodXNlcjogZmlyZWJhc2UuVXNlciB8IG51bGwpIHtcblxuICAgICAgICB0aGlzLmhhbmRsZUF1dGgodXNlcilcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gbG9nLmVycm9yKFwiRmFpbGVkIHRvIGhhbmRsZSBhdXRoOiBcIiwgZXJyKSk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGhhbmRsZUF1dGgodXNlcjogZmlyZWJhc2UuVXNlciB8IG51bGwpIHtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm9uQXV0aDogXCIsIHVzZXIpO1xuXG4gICAgICAgIGlmICh0aGlzLnBlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyLnJlcXVpcmVzUmVzZXQoKSkge1xuICAgICAgICAgICAgLy8gd2hlbiB3ZSdyZSByZXNldHRpbmcgZG9uJ3QgYXR0ZW1wdCB0byBjaGFuZ2UgdGhlIHBlcnNpc3RlbmNlXG4gICAgICAgICAgICAvLyBsYXllclxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHVzZXIpIHtcblxuICAgICAgICAgICAgbG9nLm5vdGljZShgQXV0aGVudGljYXRlZCBhczogJHt1c2VyLmRpc3BsYXlOYW1lfSAoJHt1c2VyLmVtYWlsfSlgKTtcblxuICAgICAgICAgICAgbG9nLmluZm8oXCJTd2l0Y2hpbmcgdG8gY2xvdWQgcGVyc2lzdGVuY2UgbGF5ZXJcIik7XG5cbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGVyc2lzdGVuY2VMYXllck1hbmFnZXIuY2hhbmdlKCdjbG91ZCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wZXJzaXN0ZW5jZUxheWVyTWFuYWdlci5jaGFuZ2UoJ2xvY2FsJyk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHByaXZhdGUgb25BdXRoRXJyb3IoZXJyOiBmaXJlYmFzZS5hdXRoLkVycm9yKSB7XG4gICAgICAgIGxvZy5lcnJvcihcIkF1dGhlbnRpY2F0aW9uIGVycm9yOiBcIiwgZXJyKTtcbiAgICB9XG5cbn1cbiJdfQ==