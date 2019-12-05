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
const URLs_1 = require("polar-shared/src/util/URLs");
const Firebase_1 = require("../../../firebase/Firebase");
const AppRuntime_1 = require("../../../AppRuntime");
const Optional_1 = require("polar-shared/src/util/ts/Optional");
class AuthHandlers {
    static get() {
        if (AppRuntime_1.AppRuntime.isElectron()) {
            return new ElectronAuthHandler();
        }
        else if (AppRuntime_1.AppRuntime.isBrowser()) {
            return new BrowserAuthHandler();
        }
        else {
            throw new Error("No auth handler.");
        }
    }
    static requireAuthentication(signInSuccessUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            const authHandler = this.get();
            yield authHandler.requireAuthentication(signInSuccessUrl);
        });
    }
}
exports.AuthHandlers = AuthHandlers;
class DefaultAuthHandler {
    authenticate(signInSuccessUrl) {
        const createNewLocation = () => {
            if (signInSuccessUrl) {
                return signInSuccessUrl;
            }
            const base = URLs_1.URLs.toBase(document.location.href);
            return new URL('/apps/repository/login.html', base).toString();
        };
        window.location.href = createNewLocation();
    }
    requireAuthentication(signInSuccessUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            const userInfo = yield this.userInfo();
            if (userInfo.isPresent()) {
                return;
            }
            this.authenticate(signInSuccessUrl);
        });
    }
    userInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            return Optional_1.Optional.empty();
        });
    }
}
class FirebaseAuthHandler extends DefaultAuthHandler {
    userInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            Firebase_1.Firebase.init();
            const user = yield this.currentUser();
            if (user === null) {
                return Optional_1.Optional.empty();
            }
            return Optional_1.Optional.of({
                displayName: Optional_1.Optional.of(user.displayName).getOrUndefined(),
                email: Optional_1.Optional.of(user.email).get(),
                emailVerified: user.emailVerified,
                photoURL: Optional_1.Optional.of(user.photoURL).getOrUndefined(),
                uid: user.uid,
                creationTime: user.metadata.creationTime
            });
        });
    }
    currentUser() {
        return __awaiter(this, void 0, void 0, function* () {
            return Firebase_1.Firebase.currentUser();
        });
    }
}
exports.FirebaseAuthHandler = FirebaseAuthHandler;
class BrowserAuthHandler extends FirebaseAuthHandler {
    authenticate() {
        return __awaiter(this, void 0, void 0, function* () {
            Firebase_1.Firebase.init();
            const base = URLs_1.URLs.toBase(document.location.href);
            const newLocation = new URL('/login.html', base).toString();
            window.location.href = newLocation;
        });
    }
    status() {
        return __awaiter(this, void 0, void 0, function* () {
            Firebase_1.Firebase.init();
            if ((yield this.currentUser()) === null) {
                return 'needs-authentication';
            }
            return undefined;
        });
    }
}
exports.BrowserAuthHandler = BrowserAuthHandler;
class ElectronAuthHandler extends FirebaseAuthHandler {
    status() {
        return __awaiter(this, void 0, void 0, function* () {
            return undefined;
        });
    }
}
exports.ElectronAuthHandler = ElectronAuthHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXV0aEhhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJBdXRoSGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHFEQUFnRDtBQUNoRCx5REFBb0Q7QUFFcEQsb0RBQStDO0FBQy9DLGdFQUEyRDtBQXlCM0QsTUFBYSxZQUFZO0lBRWQsTUFBTSxDQUFDLEdBQUc7UUFFYixJQUFJLHVCQUFVLENBQUMsVUFBVSxFQUFFLEVBQUU7WUFJekIsT0FBTyxJQUFJLG1CQUFtQixFQUFFLENBQUM7U0FFcEM7YUFBTSxJQUFJLHVCQUFVLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFFL0IsT0FBTyxJQUFJLGtCQUFrQixFQUFFLENBQUM7U0FFbkM7YUFBTTtZQUNILE1BQU0sSUFBSSxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQztTQUN2QztJQUVMLENBQUM7SUFFTSxNQUFNLENBQU8scUJBQXFCLENBQUMsZ0JBQXlCOztZQUMvRCxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDL0IsTUFBTSxXQUFXLENBQUMscUJBQXFCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUM5RCxDQUFDO0tBQUE7Q0FHSjtBQTFCRCxvQ0EwQkM7QUFFRCxNQUFlLGtCQUFrQjtJQUV0QixZQUFZLENBQUMsZ0JBQXlCO1FBRXpDLE1BQU0saUJBQWlCLEdBQUcsR0FBRyxFQUFFO1lBRTNCLElBQUksZ0JBQWdCLEVBQUU7Z0JBQ2xCLE9BQU8sZ0JBQWdCLENBQUM7YUFDM0I7WUFFRCxNQUFNLElBQUksR0FBRyxXQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEQsT0FBTyxJQUFJLEdBQUcsQ0FBQyw2QkFBNkIsRUFBRSxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUVuRSxDQUFDLENBQUM7UUFFRixNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxpQkFBaUIsRUFBRSxDQUFDO0lBRS9DLENBQUM7SUFFWSxxQkFBcUIsQ0FBQyxnQkFBeUI7O1lBRXhELE1BQU0sUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBRXZDLElBQUksUUFBUSxDQUFDLFNBQVMsRUFBRSxFQUFFO2dCQUN0QixPQUFPO2FBQ1Y7WUFFRCxJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFFeEMsQ0FBQztLQUFBO0lBRVksUUFBUTs7WUFDakIsT0FBTyxtQkFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzVCLENBQUM7S0FBQTtDQUlKO0FBRUQsTUFBc0IsbUJBQW9CLFNBQVEsa0JBQWtCO0lBRW5ELFFBQVE7O1lBRWpCLG1CQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7WUFFaEIsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFFdEMsSUFBSSxJQUFJLEtBQUssSUFBSSxFQUFFO2dCQUNmLE9BQU8sbUJBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUMzQjtZQUVELE9BQU8sbUJBQVEsQ0FBQyxFQUFFLENBQUM7Z0JBQ2YsV0FBVyxFQUFFLG1CQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxjQUFjLEVBQUU7Z0JBQzNELEtBQUssRUFBRSxtQkFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFO2dCQUNwQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7Z0JBQ2pDLFFBQVEsRUFBRSxtQkFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsY0FBYyxFQUFFO2dCQUNyRCxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUc7Z0JBQ2IsWUFBWSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBYTthQUM1QyxDQUFDLENBQUM7UUFFUCxDQUFDO0tBQUE7SUFFZSxXQUFXOztZQUN2QixPQUFPLG1CQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbEMsQ0FBQztLQUFBO0NBRUo7QUEzQkQsa0RBMkJDO0FBRUQsTUFBYSxrQkFBbUIsU0FBUSxtQkFBbUI7SUFFMUMsWUFBWTs7WUFFckIsbUJBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUVoQixNQUFNLElBQUksR0FBRyxXQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEQsTUFBTSxXQUFXLEdBQUcsSUFBSSxHQUFHLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBRTVELE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQztRQUV2QyxDQUFDO0tBQUE7SUFFWSxNQUFNOztZQUVmLG1CQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7WUFFaEIsSUFBSSxDQUFBLE1BQU0sSUFBSSxDQUFDLFdBQVcsRUFBRSxNQUFLLElBQUksRUFBRTtnQkFDbkMsT0FBTyxzQkFBc0IsQ0FBQzthQUNqQztZQUVELE9BQU8sU0FBUyxDQUFDO1FBRXJCLENBQUM7S0FBQTtDQUVKO0FBekJELGdEQXlCQztBQUVELE1BQWEsbUJBQW9CLFNBQVEsbUJBQW1CO0lBRTNDLE1BQU07O1lBRWYsT0FBTyxTQUFTLENBQUM7UUFFckIsQ0FBQztLQUFBO0NBRUo7QUFSRCxrREFRQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7VVJMc30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL1VSTHMnO1xuaW1wb3J0IHtGaXJlYmFzZX0gZnJvbSAnLi4vLi4vLi4vZmlyZWJhc2UvRmlyZWJhc2UnO1xuaW1wb3J0ICogYXMgZmlyZWJhc2UgZnJvbSAnLi4vLi4vLi4vZmlyZWJhc2UvbGliL2ZpcmViYXNlJztcbmltcG9ydCB7QXBwUnVudGltZX0gZnJvbSAnLi4vLi4vLi4vQXBwUnVudGltZSc7XG5pbXBvcnQge09wdGlvbmFsfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvdHMvT3B0aW9uYWwnO1xuaW1wb3J0IHtJU09EYXRlVGltZVN0cmluZ30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9tZXRhZGF0YS9JU09EYXRlVGltZVN0cmluZ3MnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEF1dGhIYW5kbGVyIHtcblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHNpZ25JblN1Y2Nlc3NVcmwgVGhlIFVSTCB0byByZWRpcmVjdCB0byBpZiB3ZSdyZSBsb2dnaW5nIGluIHRvIGFcbiAgICAgKiBzcGVjaWZpYyBwb3J0aW9uIG9mIHRoZSBhcHAuXG4gICAgICovXG4gICAgYXV0aGVudGljYXRlKHNpZ25JblN1Y2Nlc3NVcmw/OiBzdHJpbmcpOiB2b2lkO1xuXG4gICAgc3RhdHVzKCk6IFByb21pc2U8QXV0aFN0YXR1cz47XG5cbiAgICB1c2VySW5mbygpOiBQcm9taXNlPE9wdGlvbmFsPFVzZXJJbmZvPj47XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIG9wZXJhdGlvbiByZXF1aXJlcyBhdXRoZW50aWNhdGlvbiBzbyByZWRpcmVjdCB0aGUgdXNlciB0byBsb2dpbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzaWduSW5TdWNjZXNzVXJsXG4gICAgICovXG4gICAgcmVxdWlyZUF1dGhlbnRpY2F0aW9uKHNpZ25JblN1Y2Nlc3NVcmw/OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+O1xuXG59XG5cbmV4cG9ydCBjbGFzcyBBdXRoSGFuZGxlcnMge1xuXG4gICAgcHVibGljIHN0YXRpYyBnZXQoKTogQXV0aEhhbmRsZXIge1xuXG4gICAgICAgIGlmIChBcHBSdW50aW1lLmlzRWxlY3Ryb24oKSkge1xuXG4gICAgICAgICAgICAvLyBUT0RPOiBFbGVjdHJvbiBjYW4gYWN1dGFsbHkgdXNlIHRoZSBCcm93c2VyQXV0aEhhbmRsZXJcbiAgICAgICAgICAgIC8vIGp1c3QgZmluZS4uLlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBFbGVjdHJvbkF1dGhIYW5kbGVyKCk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChBcHBSdW50aW1lLmlzQnJvd3NlcigpKSB7XG5cbiAgICAgICAgICAgIHJldHVybiBuZXcgQnJvd3NlckF1dGhIYW5kbGVyKCk7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIGF1dGggaGFuZGxlci5cIik7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgcmVxdWlyZUF1dGhlbnRpY2F0aW9uKHNpZ25JblN1Y2Nlc3NVcmw/OiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgYXV0aEhhbmRsZXIgPSB0aGlzLmdldCgpO1xuICAgICAgICBhd2FpdCBhdXRoSGFuZGxlci5yZXF1aXJlQXV0aGVudGljYXRpb24oc2lnbkluU3VjY2Vzc1VybCk7XG4gICAgfVxuXG5cbn1cblxuYWJzdHJhY3QgY2xhc3MgRGVmYXVsdEF1dGhIYW5kbGVyIGltcGxlbWVudHMgQXV0aEhhbmRsZXIge1xuXG4gICAgcHVibGljIGF1dGhlbnRpY2F0ZShzaWduSW5TdWNjZXNzVXJsPzogc3RyaW5nKTogdm9pZCB7XG5cbiAgICAgICAgY29uc3QgY3JlYXRlTmV3TG9jYXRpb24gPSAoKSA9PiB7XG5cbiAgICAgICAgICAgIGlmIChzaWduSW5TdWNjZXNzVXJsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNpZ25JblN1Y2Nlc3NVcmw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGJhc2UgPSBVUkxzLnRvQmFzZShkb2N1bWVudC5sb2NhdGlvbiEuaHJlZik7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFVSTCgnL2FwcHMvcmVwb3NpdG9yeS9sb2dpbi5odG1sJywgYmFzZSkudG9TdHJpbmcoKTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gY3JlYXRlTmV3TG9jYXRpb24oKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyByZXF1aXJlQXV0aGVudGljYXRpb24oc2lnbkluU3VjY2Vzc1VybD86IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuXG4gICAgICAgIGNvbnN0IHVzZXJJbmZvID0gYXdhaXQgdGhpcy51c2VySW5mbygpO1xuXG4gICAgICAgIGlmICh1c2VySW5mby5pc1ByZXNlbnQoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hdXRoZW50aWNhdGUoc2lnbkluU3VjY2Vzc1VybCk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgdXNlckluZm8oKTogUHJvbWlzZTxPcHRpb25hbDxVc2VySW5mbz4+IHtcbiAgICAgICAgcmV0dXJuIE9wdGlvbmFsLmVtcHR5KCk7XG4gICAgfVxuXG4gICAgcHVibGljIGFic3RyYWN0IHN0YXR1cygpOiBQcm9taXNlPEF1dGhTdGF0dXM+O1xuXG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBGaXJlYmFzZUF1dGhIYW5kbGVyIGV4dGVuZHMgRGVmYXVsdEF1dGhIYW5kbGVyIHtcblxuICAgIHB1YmxpYyBhc3luYyB1c2VySW5mbygpOiBQcm9taXNlPE9wdGlvbmFsPFVzZXJJbmZvPj4ge1xuXG4gICAgICAgIEZpcmViYXNlLmluaXQoKTtcblxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgdGhpcy5jdXJyZW50VXNlcigpO1xuXG4gICAgICAgIGlmICh1c2VyID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gT3B0aW9uYWwuZW1wdHkoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBPcHRpb25hbC5vZih7XG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogT3B0aW9uYWwub2YodXNlci5kaXNwbGF5TmFtZSkuZ2V0T3JVbmRlZmluZWQoKSxcbiAgICAgICAgICAgIGVtYWlsOiBPcHRpb25hbC5vZih1c2VyLmVtYWlsKS5nZXQoKSxcbiAgICAgICAgICAgIGVtYWlsVmVyaWZpZWQ6IHVzZXIuZW1haWxWZXJpZmllZCxcbiAgICAgICAgICAgIHBob3RvVVJMOiBPcHRpb25hbC5vZih1c2VyLnBob3RvVVJMKS5nZXRPclVuZGVmaW5lZCgpLFxuICAgICAgICAgICAgdWlkOiB1c2VyLnVpZCxcbiAgICAgICAgICAgIGNyZWF0aW9uVGltZTogdXNlci5tZXRhZGF0YS5jcmVhdGlvblRpbWUhXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGFzeW5jIGN1cnJlbnRVc2VyKCk6IFByb21pc2U8ZmlyZWJhc2UuVXNlciB8IG51bGw+IHtcbiAgICAgICAgcmV0dXJuIEZpcmViYXNlLmN1cnJlbnRVc2VyKCk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBjbGFzcyBCcm93c2VyQXV0aEhhbmRsZXIgZXh0ZW5kcyBGaXJlYmFzZUF1dGhIYW5kbGVyIHtcblxuICAgIHB1YmxpYyBhc3luYyBhdXRoZW50aWNhdGUoKTogUHJvbWlzZTx2b2lkPiB7XG5cbiAgICAgICAgRmlyZWJhc2UuaW5pdCgpO1xuXG4gICAgICAgIGNvbnN0IGJhc2UgPSBVUkxzLnRvQmFzZShkb2N1bWVudC5sb2NhdGlvbiEuaHJlZik7XG4gICAgICAgIGNvbnN0IG5ld0xvY2F0aW9uID0gbmV3IFVSTCgnL2xvZ2luLmh0bWwnLCBiYXNlKS50b1N0cmluZygpO1xuXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gbmV3TG9jYXRpb247XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgc3RhdHVzKCk6IFByb21pc2U8QXV0aFN0YXR1cz4ge1xuXG4gICAgICAgIEZpcmViYXNlLmluaXQoKTtcblxuICAgICAgICBpZiAoYXdhaXQgdGhpcy5jdXJyZW50VXNlcigpID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gJ25lZWRzLWF1dGhlbnRpY2F0aW9uJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGNsYXNzIEVsZWN0cm9uQXV0aEhhbmRsZXIgZXh0ZW5kcyBGaXJlYmFzZUF1dGhIYW5kbGVyIHtcblxuICAgIHB1YmxpYyBhc3luYyBzdGF0dXMoKTogUHJvbWlzZTxBdXRoU3RhdHVzPiB7XG5cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcblxuICAgIH1cblxufVxuXG5leHBvcnQgdHlwZSBBdXRoU3RhdHVzID0gJ25lZWRzLWF1dGhlbnRpY2F0aW9uJyB8ICB1bmRlZmluZWQ7XG5cbi8qKlxuICogQSBnZW5lcmljIFVzZXJJbmZvIG9iamVjdCBmb3IgdGhpcyBhdXRoIGhhbmRsZXIuIElmIHRoZXJlJ3Mgbm8gZW1haWwgdGhlIHVzZXJcbiAqIGlzIGFub255bW91cyBhbmQgaGFzbid0IHlldCBjcmVhdGVkIGFuIGFjY291bnQuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVXNlckluZm8ge1xuXG4gICAgcmVhZG9ubHkgZGlzcGxheU5hbWU/OiBzdHJpbmc7XG4gICAgcmVhZG9ubHkgZW1haWw6IHN0cmluZztcbiAgICByZWFkb25seSBlbWFpbFZlcmlmaWVkOiBib29sZWFuO1xuICAgIHJlYWRvbmx5IHBob3RvVVJMPzogc3RyaW5nO1xuICAgIHJlYWRvbmx5IHVpZDogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRpbWUgdGhlIGFjY291bnQgd2FzIGNyZWF0ZWQgb24gb3VyIGVuZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBjcmVhdGlvblRpbWU6IElTT0RhdGVUaW1lU3RyaW5nO1xuXG59XG4iXX0=