"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const firebase = __importStar(require("./lib/firebase"));
const firebaseui_1 = __importDefault(require("./lib/firebaseui"));
const SIGN_IN_SUCCESS_URL = 'http://localhost:8005/';
const TOS_URL = 'https://getpolarized.io/terms-of-service.html';
const PRIVACY_POLICY_URL = 'https://getpolarized.io/terms-of-service.html';
class FirebaseUIAuth {
    static login(partialOpts = {}) {
        const opts = Object.assign({ containerSelector: '#firebaseui-auth-container', signInSuccessUrl: SIGN_IN_SUCCESS_URL }, partialOpts);
        const uiConfig = {
            callbacks: {
                signInSuccessWithAuthResult: (authResult, redirectUrl) => {
                    return true;
                },
            },
            queryParameterForWidgetMode: 'mode',
            signInSuccessUrl: opts.signInSuccessUrl,
            signInOptions: [
                {
                    provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                    customParameters: {
                        prompt: 'select_account'
                    }
                },
                firebase.auth.EmailAuthProvider.PROVIDER_ID,
            ],
            tosUrl: TOS_URL,
            privacyPolicyUrl: () => {
                window.location.assign(PRIVACY_POLICY_URL);
            }
        };
        const ui = new firebaseui_1.default.auth.AuthUI(firebase.auth());
        ui.start(opts.containerSelector, uiConfig);
        return ui;
    }
}
exports.FirebaseUIAuth = FirebaseUIAuth;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlyZWJhc2VVSUF1dGguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJGaXJlYmFzZVVJQXV0aC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFJQSx5REFBMkM7QUFDM0Msa0VBQTBDO0FBSTFDLE1BQU0sbUJBQW1CLEdBQUcsd0JBQXdCLENBQUM7QUFDckQsTUFBTSxPQUFPLEdBQUcsK0NBQStDLENBQUM7QUFDaEUsTUFBTSxrQkFBa0IsR0FBRywrQ0FBK0MsQ0FBQztBQUUzRSxNQUFhLGNBQWM7SUFPaEIsTUFBTSxDQUFDLEtBQUssQ0FBQyxjQUE4QyxFQUFFO1FBRWhFLE1BQU0sSUFBSSxtQkFDTixpQkFBaUIsRUFBRSw0QkFBNEIsRUFDL0MsZ0JBQWdCLEVBQUUsbUJBQW1CLElBQ2xDLFdBQVcsQ0FDakIsQ0FBQztRQUdGLE1BQU0sUUFBUSxHQUEyQjtZQUtyQyxTQUFTLEVBQUU7Z0JBRVAsMkJBQTJCLEVBQUUsQ0FBQyxVQUFlLEVBQ2YsV0FBbUIsRUFBRSxFQUFFO29CQUVqRCxPQUFPLElBQUksQ0FBQztnQkFFaEIsQ0FBQzthQUVKO1lBQ0QsMkJBQTJCLEVBQUUsTUFBTTtZQUVuQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsZ0JBQWdCO1lBQ3ZDLGFBQWEsRUFBRTtnQkFDWDtvQkFDSSxRQUFRLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXO29CQUN0RCxnQkFBZ0IsRUFBRTt3QkFHZCxNQUFNLEVBQUUsZ0JBQWdCO3FCQUMzQjtpQkFDSjtnQkFRRCxRQUFRLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVc7YUFHOUM7WUFHRCxNQUFNLEVBQUUsT0FBTztZQUdmLGdCQUFnQixFQUFFLEdBQUcsRUFBRTtnQkFDbkIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUMvQyxDQUFDO1NBRUosQ0FBQztRQUtGLE1BQU0sRUFBRSxHQUFHLElBQUksb0JBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBRXZELEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRTNDLE9BQU8sRUFBRSxDQUFDO0lBRWQsQ0FBQztDQUVKO0FBNUVELHdDQTRFQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZSc7XG4vLyBpbXBvcnQgZmlyZWJhc2V1aSBmcm9tICdmaXJlYmFzZXVpJztcbi8vIGltcG9ydCBBdXRoVUkgPSBmaXJlYmFzZXVpLmF1dGguQXV0aFVJO1xuXG5pbXBvcnQgKiBhcyBmaXJlYmFzZSBmcm9tICcuL2xpYi9maXJlYmFzZSc7XG5pbXBvcnQgZmlyZWJhc2V1aSBmcm9tICcuL2xpYi9maXJlYmFzZXVpJztcbmltcG9ydCB7T2JqZWN0c30gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvdXRpbC9PYmplY3RzXCI7XG5cbi8vIG5vaW5zcGVjdGlvbiBUc0xpbnQ6IG1heC1saW5lLWxlbmd0aFxuY29uc3QgU0lHTl9JTl9TVUNDRVNTX1VSTCA9ICdodHRwOi8vbG9jYWxob3N0OjgwMDUvJztcbmNvbnN0IFRPU19VUkwgPSAnaHR0cHM6Ly9nZXRwb2xhcml6ZWQuaW8vdGVybXMtb2Ytc2VydmljZS5odG1sJztcbmNvbnN0IFBSSVZBQ1lfUE9MSUNZX1VSTCA9ICdodHRwczovL2dldHBvbGFyaXplZC5pby90ZXJtcy1vZi1zZXJ2aWNlLmh0bWwnO1xuXG5leHBvcnQgY2xhc3MgRmlyZWJhc2VVSUF1dGgge1xuXG4gICAgLyoqXG4gICAgICogU3RhcnQgdGhlIGxvZ2luIGFuZCByZW5kZXIgdGhlIGxvZ2luIGJveCB0byB0aGUgZ2l2ZW4gc2VsZWN0b3IuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcGFydGlhbE9wdHMgVGhlIG9wdHMgdG8gdXNlIHdoZW4gYXV0aGVudGljYXRpbmcuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBsb2dpbihwYXJ0aWFsT3B0czogUGFydGlhbDxGaXJlYmFzZVVJQXV0aE9wdGlvbnM+ID0ge30pOiBmaXJlYmFzZXVpLmF1dGguQXV0aFVJIHtcblxuICAgICAgICBjb25zdCBvcHRzID0ge1xuICAgICAgICAgICAgY29udGFpbmVyU2VsZWN0b3I6ICcjZmlyZWJhc2V1aS1hdXRoLWNvbnRhaW5lcicsXG4gICAgICAgICAgICBzaWduSW5TdWNjZXNzVXJsOiBTSUdOX0lOX1NVQ0NFU1NfVVJMLFxuICAgICAgICAgICAgLi4ucGFydGlhbE9wdHMsXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gRmlyZWJhc2VVSSBjb25maWcuXG4gICAgICAgIGNvbnN0IHVpQ29uZmlnOiBmaXJlYmFzZXVpLmF1dGguQ29uZmlnID0ge1xuXG4gICAgICAgICAgICAvLyBwb3B1cE1vZGU6IHRydWUsXG4gICAgICAgICAgICAvLyBzaWduSW5GbG93OiAncG9wdXAnLFxuXG4gICAgICAgICAgICBjYWxsYmFja3M6IHtcblxuICAgICAgICAgICAgICAgIHNpZ25JblN1Y2Nlc3NXaXRoQXV0aFJlc3VsdDogKGF1dGhSZXN1bHQ6IGFueSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWRpcmVjdFVybDogc3RyaW5nKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG5cbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcXVlcnlQYXJhbWV0ZXJGb3JXaWRnZXRNb2RlOiAnbW9kZScsXG5cbiAgICAgICAgICAgIHNpZ25JblN1Y2Nlc3NVcmw6IG9wdHMuc2lnbkluU3VjY2Vzc1VybCxcbiAgICAgICAgICAgIHNpZ25Jbk9wdGlvbnM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHByb3ZpZGVyOiBmaXJlYmFzZS5hdXRoLkdvb2dsZUF1dGhQcm92aWRlci5QUk9WSURFUl9JRCxcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tUGFyYW1ldGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRm9yY2VzIGFjY291bnQgc2VsZWN0aW9uIGV2ZW4gd2hlbiBvbmUgYWNjb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaXMgYXZhaWxhYmxlLlxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvbXB0OiAnc2VsZWN0X2FjY291bnQnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgLy8gTGVhdmUgdGhlIGxpbmVzIGFzIGlzIGZvciB0aGUgcHJvdmlkZXJzIHlvdSB3YW50IHRvIG9mZmVyXG4gICAgICAgICAgICAgICAgLy8geW91ciB1c2Vycy5cblxuICAgICAgICAgICAgICAgIC8vIGZpcmViYXNlLmF1dGguRmFjZWJvb2tBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQsXG4gICAgICAgICAgICAgICAgLy8gZmlyZWJhc2UuYXV0aC5Ud2l0dGVyQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lELFxuICAgICAgICAgICAgICAgIC8vIGZpcmViYXNlLmF1dGguR2l0aHViQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lELFxuICAgICAgICAgICAgICAgIGZpcmViYXNlLmF1dGguRW1haWxBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQsXG4gICAgICAgICAgICAgICAgLy8gZmlyZWJhc2UuYXV0aC5QaG9uZUF1dGhQcm92aWRlci5QUk9WSURFUl9JRCxcbiAgICAgICAgICAgICAgICAvLyBmaXJlYmFzZXVpLmF1dGguQW5vbnltb3VzQXV0aFByb3ZpZGVyLlBST1ZJREVSX0lEXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgLy8gdG9zVXJsIGFuZCBwcml2YWN5UG9saWN5VXJsIGFjY2VwdCBlaXRoZXIgdXJsIHN0cmluZyBvciBhXG4gICAgICAgICAgICAvLyBjYWxsYmFjayBmdW5jdGlvbi4gVGVybXMgb2Ygc2VydmljZSB1cmwvY2FsbGJhY2suXG4gICAgICAgICAgICB0b3NVcmw6IFRPU19VUkwsXG5cbiAgICAgICAgICAgIC8vIFByaXZhY3kgcG9saWN5IHVybC9jYWxsYmFjay5cbiAgICAgICAgICAgIHByaXZhY3lQb2xpY3lVcmw6ICgpID0+IHtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uYXNzaWduKFBSSVZBQ1lfUE9MSUNZX1VSTCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfTtcblxuICAgICAgICAvLyBUT0RPOiBpbmNsdWRlIG1ldHJpY3Mgb24gdGVoIG51bWJlciBvZiBhdXRob3JpemF0aW9ucyBzdGFydGVkIHZzIGNvbXBsZXRlZC5cblxuICAgICAgICAvLyBJbml0aWFsaXplIHRoZSBGaXJlYmFzZVVJIFdpZGdldCB1c2luZyBGaXJlYmFzZS5cbiAgICAgICAgY29uc3QgdWkgPSBuZXcgZmlyZWJhc2V1aS5hdXRoLkF1dGhVSShmaXJlYmFzZS5hdXRoKCkpO1xuICAgICAgICAvLyBUaGUgc3RhcnQgbWV0aG9kIHdpbGwgd2FpdCB1bnRpbCB0aGUgRE9NIGlzIGxvYWRlZC5cbiAgICAgICAgdWkuc3RhcnQob3B0cy5jb250YWluZXJTZWxlY3RvciwgdWlDb25maWcpO1xuXG4gICAgICAgIHJldHVybiB1aTtcblxuICAgIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZpcmViYXNlVUlBdXRoT3B0aW9ucyB7XG4gICAgcmVhZG9ubHkgY29udGFpbmVyU2VsZWN0b3I6IHN0cmluZztcbiAgICByZWFkb25seSBzaWduSW5TdWNjZXNzVXJsOiBzdHJpbmc7XG59XG4iXX0=