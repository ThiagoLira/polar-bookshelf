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
const Firebase_1 = require("../firebase/Firebase");
const Fetch_1 = require("polar-shared/src/util/Fetch");
class AccountActions {
    static cancelSubscription() {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `https://us-central1-polar-cors.cloudfunctions.net/StripeCancelSubscription/`;
            const data = yield this.createAccountData();
            yield this.executeAccountMethod(url, data);
        });
    }
    static changePlan(plan) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = `https://us-central1-polar-cors.cloudfunctions.net/StripeChangePlan/`;
            const accountData = yield this.createAccountData();
            const data = Object.assign({ plan }, accountData);
            yield this.executeAccountMethod(url, data);
        });
    }
    static executeAccountMethod(url, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = JSON.stringify(data);
            const init = {
                mode: 'cors',
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body
            };
            const response = yield Fetch_1.Fetches.fetch(url, init);
            if (response.status !== 200) {
                throw new Error("Request: " + response.status + ": " + response.statusText);
            }
        });
    }
    static createAccountData() {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield Firebase_1.Firebase.currentUser();
            if (!user) {
                throw new Error("No account");
            }
            return {
                email: user.email,
                uid: user.uid
            };
        });
    }
}
exports.AccountActions = AccountActions;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNjb3VudEFjdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJBY2NvdW50QWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLG1EQUE4QztBQUM5Qyx1REFBaUU7QUFHakUsTUFBYSxjQUFjO0lBRWhCLE1BQU0sQ0FBTyxrQkFBa0I7O1lBQ2xDLE1BQU0sR0FBRyxHQUFHLDZFQUE2RSxDQUFDO1lBQzFGLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7WUFFNUMsTUFBTSxJQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRS9DLENBQUM7S0FBQTtJQUVNLE1BQU0sQ0FBTyxVQUFVLENBQUMsSUFBaUI7O1lBQzVDLE1BQU0sR0FBRyxHQUFHLHFFQUFxRSxDQUFDO1lBQ2xGLE1BQU0sV0FBVyxHQUFHLE1BQU0sSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7WUFDbkQsTUFBTSxJQUFJLG1CQUFJLElBQUksSUFBSyxXQUFXLENBQUMsQ0FBQztZQUVwQyxNQUFNLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFL0MsQ0FBQztLQUFBO0lBRU8sTUFBTSxDQUFPLG9CQUFvQixDQUFDLEdBQVcsRUFBRSxJQUFTOztZQUU1RCxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRWxDLE1BQU0sSUFBSSxHQUFnQjtnQkFDdEIsSUFBSSxFQUFFLE1BQU07Z0JBQ1osTUFBTSxFQUFFLE1BQU07Z0JBQ2QsT0FBTyxFQUFFO29CQUNMLGNBQWMsRUFBRSxrQkFBa0I7aUJBQ3JDO2dCQUNELElBQUk7YUFDUCxDQUFDO1lBRUYsTUFBTSxRQUFRLEdBQUcsTUFBTSxlQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUVoRCxJQUFJLFFBQVEsQ0FBQyxNQUFNLEtBQUssR0FBRyxFQUFFO2dCQUN6QixNQUFNLElBQUksS0FBSyxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDL0U7UUFFTCxDQUFDO0tBQUE7SUFFTyxNQUFNLENBQU8saUJBQWlCOztZQUVsQyxNQUFNLElBQUksR0FBRyxNQUFNLG1CQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7WUFFMUMsSUFBSSxDQUFFLElBQUksRUFBRTtnQkFDUixNQUFNLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQ2pDO1lBRUQsT0FBTztnQkFDSCxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQU07Z0JBQ2xCLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRzthQUNoQixDQUFDO1FBRU4sQ0FBQztLQUFBO0NBRUo7QUF2REQsd0NBdURDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtGaXJlYmFzZX0gZnJvbSAnLi4vZmlyZWJhc2UvRmlyZWJhc2UnO1xuaW1wb3J0IHtGZXRjaGVzLCBSZXF1ZXN0SW5pdH0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL0ZldGNoJztcbmltcG9ydCB7QWNjb3VudFBsYW59IGZyb20gXCIuL0FjY291bnRcIjtcblxuZXhwb3J0IGNsYXNzIEFjY291bnRBY3Rpb25zIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgY2FuY2VsU3Vic2NyaXB0aW9uKCkge1xuICAgICAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly91cy1jZW50cmFsMS1wb2xhci1jb3JzLmNsb3VkZnVuY3Rpb25zLm5ldC9TdHJpcGVDYW5jZWxTdWJzY3JpcHRpb24vYDtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuY3JlYXRlQWNjb3VudERhdGEoKTtcblxuICAgICAgICBhd2FpdCB0aGlzLmV4ZWN1dGVBY2NvdW50TWV0aG9kKHVybCwgZGF0YSk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGNoYW5nZVBsYW4ocGxhbjogQWNjb3VudFBsYW4pIHtcbiAgICAgICAgY29uc3QgdXJsID0gYGh0dHBzOi8vdXMtY2VudHJhbDEtcG9sYXItY29ycy5jbG91ZGZ1bmN0aW9ucy5uZXQvU3RyaXBlQ2hhbmdlUGxhbi9gO1xuICAgICAgICBjb25zdCBhY2NvdW50RGF0YSA9IGF3YWl0IHRoaXMuY3JlYXRlQWNjb3VudERhdGEoKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IHtwbGFuLCAuLi5hY2NvdW50RGF0YX07XG5cbiAgICAgICAgYXdhaXQgdGhpcy5leGVjdXRlQWNjb3VudE1ldGhvZCh1cmwsIGRhdGEpO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgYXN5bmMgZXhlY3V0ZUFjY291bnRNZXRob2QodXJsOiBzdHJpbmcsIGRhdGE6IGFueSkge1xuXG4gICAgICAgIGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcblxuICAgICAgICBjb25zdCBpbml0OiBSZXF1ZXN0SW5pdCA9IHtcbiAgICAgICAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHlcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IEZldGNoZXMuZmV0Y2godXJsLCBpbml0KTtcblxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9PSAyMDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlcXVlc3Q6IFwiICsgcmVzcG9uc2Uuc3RhdHVzICsgXCI6IFwiICsgcmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGFzeW5jIGNyZWF0ZUFjY291bnREYXRhKCk6IFByb21pc2U8QWNjb3VudERhdGE+IHtcblxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgRmlyZWJhc2UuY3VycmVudFVzZXIoKTtcblxuICAgICAgICBpZiAoISB1c2VyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBhY2NvdW50XCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsISxcbiAgICAgICAgICAgIHVpZDogdXNlci51aWRcbiAgICAgICAgfTtcblxuICAgIH1cblxufVxuXG5pbnRlcmZhY2UgQWNjb3VudERhdGEge1xuICAgIHJlYWRvbmx5IGVtYWlsOiBzdHJpbmc7XG4gICAgcmVhZG9ubHkgdWlkOiBzdHJpbmc7XG59XG4iXX0=