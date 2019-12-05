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
const Firebase_1 = require("../../../web/js/firebase/Firebase");
const FirebaseUIAuth_1 = require("../../../web/js/firebase/FirebaseUIAuth");
const firebase = __importStar(require("../../../web/js/firebase/lib/firebase"));
const URLs_1 = require("polar-shared/src/util/URLs");
const AppRuntime_1 = require("../../../web/js/AppRuntime");
const Optional_1 = require("polar-shared/src/util/ts/Optional");
const RendererAnalytics_1 = require("../../../web/js/ga/RendererAnalytics");
class SignInSuccessURLs {
    static get() {
        return Optional_1.Optional.first(this.getCustom(), this.getDefault()).get();
    }
    static getCustom() {
        const url = new URL(document.location.href);
        return Optional_1.Optional.of(url.searchParams.get('signInSuccessUrl'))
            .getOrUndefined();
    }
    static getDefault() {
        const base = URLs_1.URLs.toBase(document.location.href);
        const signInPath = AppRuntime_1.AppRuntime.isBrowser() ? "/" : '/#configured';
        return new URL(signInPath, base).toString();
    }
}
class InitialLogin {
    static get() {
        const key = "has-login";
        const result = localStorage.getItem(key) !== 'true';
        localStorage.setItem(key, 'true');
        return result;
    }
    static sentAnalytics() {
        if (this.get()) {
            const runtime = AppRuntime_1.AppRuntime.type();
            const category = runtime + '-login';
            RendererAnalytics_1.RendererAnalytics.event({ category, action: 'initial' });
        }
    }
}
window.addEventListener('load', () => __awaiter(void 0, void 0, void 0, function* () {
    Firebase_1.Firebase.init();
    if (firebase.auth().currentUser === null) {
        const signInSuccessUrl = SignInSuccessURLs.get();
        FirebaseUIAuth_1.FirebaseUIAuth.login({ signInSuccessUrl });
    }
    RendererAnalytics_1.RendererAnalytics.pageviewFromLocation();
    InitialLogin.sentAnalytics();
}));
Firebase_1.Firebase.init();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFFM0QsNEVBQXVFO0FBQ3ZFLGdGQUFrRTtBQUNsRSxxREFBZ0Q7QUFDaEQsMkRBQXNEO0FBQ3RELGdFQUEyRDtBQUMzRCw0RUFBdUU7QUFHdkUsTUFBTSxpQkFBaUI7SUFNWixNQUFNLENBQUMsR0FBRztRQUViLE9BQU8sbUJBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBRXJFLENBQUM7SUFLTyxNQUFNLENBQUMsU0FBUztRQUVwQixNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxRQUFRLENBQUMsUUFBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTdDLE9BQU8sbUJBQVEsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQzthQUN2RCxjQUFjLEVBQUUsQ0FBQztJQUUxQixDQUFDO0lBRU8sTUFBTSxDQUFDLFVBQVU7UUFFckIsTUFBTSxJQUFJLEdBQUcsV0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWxELE1BQU0sVUFBVSxHQUNWLHVCQUFVLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDO1FBRXBELE9BQU8sSUFBSSxHQUFHLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBRWhELENBQUM7Q0FFSjtBQUVELE1BQU0sWUFBWTtJQUVQLE1BQU0sQ0FBQyxHQUFHO1FBRWIsTUFBTSxHQUFHLEdBQUcsV0FBVyxDQUFDO1FBRXhCLE1BQU0sTUFBTSxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssTUFBTSxDQUFDO1FBRXBELFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRWxDLE9BQU8sTUFBTSxDQUFDO0lBRWxCLENBQUM7SUFFTSxNQUFNLENBQUMsYUFBYTtRQUV2QixJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUVaLE1BQU0sT0FBTyxHQUFHLHVCQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDbEMsTUFBTSxRQUFRLEdBQUcsT0FBTyxHQUFHLFFBQVEsQ0FBQztZQUNwQyxxQ0FBaUIsQ0FBQyxLQUFLLENBQUMsRUFBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBQyxDQUFDLENBQUM7U0FFMUQ7SUFFTCxDQUFDO0NBRUo7QUFHRCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLEdBQVMsRUFBRTtJQUV2QyxtQkFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0lBRWhCLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLFdBQVcsS0FBSyxJQUFJLEVBQUU7UUFFdEMsTUFBTSxnQkFBZ0IsR0FBRyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUVqRCwrQkFBYyxDQUFDLEtBQUssQ0FBQyxFQUFDLGdCQUFnQixFQUFDLENBQUMsQ0FBQztLQUU1QztJQUVELHFDQUFpQixDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFFekMsWUFBWSxDQUFDLGFBQWEsRUFBRSxDQUFDO0FBRWpDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxtQkFBUSxDQUFDLElBQUksRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtGaXJlYmFzZX0gZnJvbSAnLi4vLi4vLi4vd2ViL2pzL2ZpcmViYXNlL0ZpcmViYXNlJztcbmltcG9ydCB7TmF2fSBmcm9tICcuLi8uLi8uLi93ZWIvanMvdWkvdXRpbC9OYXYnO1xuaW1wb3J0IHtGaXJlYmFzZVVJQXV0aH0gZnJvbSAnLi4vLi4vLi4vd2ViL2pzL2ZpcmViYXNlL0ZpcmViYXNlVUlBdXRoJztcbmltcG9ydCAqIGFzIGZpcmViYXNlIGZyb20gJy4uLy4uLy4uL3dlYi9qcy9maXJlYmFzZS9saWIvZmlyZWJhc2UnO1xuaW1wb3J0IHtVUkxzfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvVVJMcyc7XG5pbXBvcnQge0FwcFJ1bnRpbWV9IGZyb20gJy4uLy4uLy4uL3dlYi9qcy9BcHBSdW50aW1lJztcbmltcG9ydCB7T3B0aW9uYWx9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC90cy9PcHRpb25hbCc7XG5pbXBvcnQge1JlbmRlcmVyQW5hbHl0aWNzfSBmcm9tICcuLi8uLi8uLi93ZWIvanMvZ2EvUmVuZGVyZXJBbmFseXRpY3MnO1xuXG4vLyBUT0RPOiB1bmlmeSBhbGwgU2lnbkluU3VjY2Vzc1VSTHMgLyBMb2dpblVSTHMgYW5kIGFueSB1c2Ugb2Ygc2lnbkluU3VjY2Vzc1VybFxuY2xhc3MgU2lnbkluU3VjY2Vzc1VSTHMge1xuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSByaWdodCBzaWduIGluIFVSTCBlaXRoZXIgdGhlIGRlZmF1bHQgb3IgYSBjdXN0b20gaWYgc3BlY2lmaWVkXG4gICAgICogYnkgYSBVUkwgcGFyYW0uXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBnZXQoKSB7XG5cbiAgICAgICAgcmV0dXJuIE9wdGlvbmFsLmZpcnN0KHRoaXMuZ2V0Q3VzdG9tKCksIHRoaXMuZ2V0RGVmYXVsdCgpKS5nZXQoKTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFsbG93IHRoZSB1c2VyIHRvIHNldCBhIGN1c3RvbSBzaWduSW5TdWNjZXNzVXJsIGFzIGEgcGFyYW0uXG4gICAgICovXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0Q3VzdG9tKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG5cbiAgICAgICAgY29uc3QgdXJsID0gbmV3IFVSTChkb2N1bWVudC5sb2NhdGlvbiEuaHJlZik7XG5cbiAgICAgICAgcmV0dXJuIE9wdGlvbmFsLm9mKHVybC5zZWFyY2hQYXJhbXMuZ2V0KCdzaWduSW5TdWNjZXNzVXJsJykpXG4gICAgICAgICAgICAuZ2V0T3JVbmRlZmluZWQoKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGdldERlZmF1bHQoKTogc3RyaW5nIHtcblxuICAgICAgICBjb25zdCBiYXNlID0gVVJMcy50b0Jhc2UoZG9jdW1lbnQubG9jYXRpb24hLmhyZWYpO1xuXG4gICAgICAgIGNvbnN0IHNpZ25JblBhdGhcbiAgICAgICAgICAgID0gQXBwUnVudGltZS5pc0Jyb3dzZXIoKSA/IFwiL1wiIDogJy8jY29uZmlndXJlZCc7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBVUkwoc2lnbkluUGF0aCwgYmFzZSkudG9TdHJpbmcoKTtcblxuICAgIH1cblxufVxuXG5jbGFzcyBJbml0aWFsTG9naW4ge1xuXG4gICAgcHVibGljIHN0YXRpYyBnZXQoKSB7XG5cbiAgICAgICAgY29uc3Qga2V5ID0gXCJoYXMtbG9naW5cIjtcblxuICAgICAgICBjb25zdCByZXN1bHQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpICE9PSAndHJ1ZSc7XG5cbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCAndHJ1ZScpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHNlbnRBbmFseXRpY3MoKSB7XG5cbiAgICAgICAgaWYgKHRoaXMuZ2V0KCkpIHtcblxuICAgICAgICAgICAgY29uc3QgcnVudGltZSA9IEFwcFJ1bnRpbWUudHlwZSgpO1xuICAgICAgICAgICAgY29uc3QgY2F0ZWdvcnkgPSBydW50aW1lICsgJy1sb2dpbic7XG4gICAgICAgICAgICBSZW5kZXJlckFuYWx5dGljcy5ldmVudCh7Y2F0ZWdvcnksIGFjdGlvbjogJ2luaXRpYWwnfSk7XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG59XG5cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBhc3luYyAoKSA9PiB7XG5cbiAgICBGaXJlYmFzZS5pbml0KCk7XG5cbiAgICBpZiAoZmlyZWJhc2UuYXV0aCgpLmN1cnJlbnRVc2VyID09PSBudWxsKSB7XG5cbiAgICAgICAgY29uc3Qgc2lnbkluU3VjY2Vzc1VybCA9IFNpZ25JblN1Y2Nlc3NVUkxzLmdldCgpO1xuXG4gICAgICAgIEZpcmViYXNlVUlBdXRoLmxvZ2luKHtzaWduSW5TdWNjZXNzVXJsfSk7XG5cbiAgICB9XG5cbiAgICBSZW5kZXJlckFuYWx5dGljcy5wYWdldmlld0Zyb21Mb2NhdGlvbigpO1xuXG4gICAgSW5pdGlhbExvZ2luLnNlbnRBbmFseXRpY3MoKTtcblxufSk7XG5cbkZpcmViYXNlLmluaXQoKTtcblxuIl19