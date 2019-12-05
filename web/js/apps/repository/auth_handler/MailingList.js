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
const AuthHandler_1 = require("./AuthHandler");
const Mailchimp_1 = require("../../../util/thirdparty/Mailchimp");
const RendererAnalytics_1 = require("../../../ga/RendererAnalytics");
const LocalPrefs_1 = require("../../../util/LocalPrefs");
class MailingList {
    static subscribeWhenNecessary() {
        return __awaiter(this, void 0, void 0, function* () {
            const authHandler = AuthHandler_1.AuthHandlers.get();
            const optionalUserInfo = yield authHandler.userInfo();
            if (optionalUserInfo.isPresent()) {
                const userInfo = optionalUserInfo.get();
                yield LocalPrefs_1.LocalPrefs.markOnceExecuted('did-mailing-list', () => __awaiter(this, void 0, void 0, function* () {
                    if (userInfo.email) {
                        try {
                            RendererAnalytics_1.RendererAnalytics.event({ category: 'mailing-list', action: 'subscribed' });
                            yield Mailchimp_1.Mailchimp.subscribe(userInfo.email, userInfo.displayName || "");
                        }
                        catch (e) {
                            RendererAnalytics_1.RendererAnalytics.event({ category: 'mailing-list', action: 'failed' });
                            throw e;
                        }
                    }
                }));
            }
        });
    }
}
exports.MailingList = MailingList;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFpbGluZ0xpc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJNYWlsaW5nTGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUdBLCtDQUEyQztBQUMzQyxrRUFBNkQ7QUFDN0QscUVBQWdFO0FBQ2hFLHlEQUFvRDtBQUVwRCxNQUFhLFdBQVc7SUFNYixNQUFNLENBQU8sc0JBQXNCOztZQUV0QyxNQUFNLFdBQVcsR0FBRywwQkFBWSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBRXZDLE1BQU0sZ0JBQWdCLEdBQUcsTUFBTSxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7WUFFdEQsSUFBSSxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsRUFBRTtnQkFFOUIsTUFBTSxRQUFRLEdBQUcsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBRXhDLE1BQU0sdUJBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxHQUFTLEVBQUU7b0JBTTdELElBQUksUUFBUSxDQUFDLEtBQUssRUFBRTt3QkFDaEIsSUFBSTs0QkFDQSxxQ0FBaUIsQ0FBQyxLQUFLLENBQUMsRUFBQyxRQUFRLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUMsQ0FBQyxDQUFDOzRCQUMxRSxNQUFNLHFCQUFTLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLFdBQVcsSUFBSSxFQUFFLENBQUMsQ0FBQzt5QkFDekU7d0JBQUMsT0FBTyxDQUFDLEVBQUU7NEJBQ1IscUNBQWlCLENBQUMsS0FBSyxDQUFDLEVBQUMsUUFBUSxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFDLENBQUMsQ0FBQzs0QkFDdEUsTUFBTSxDQUFDLENBQUM7eUJBQ1g7cUJBQ0o7Z0JBRUwsQ0FBQyxDQUFBLENBQUMsQ0FBQzthQUVOO1FBRUwsQ0FBQztLQUFBO0NBRUo7QUF0Q0Qsa0NBc0NDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBNYWtlIHN1cmUgbmV3IFBvbGFyIHVzZXJzIGFyZSBvbiB0aGUgbWFpbGluZyBsaXN0LlxuICovXG5pbXBvcnQge0F1dGhIYW5kbGVyc30gZnJvbSAnLi9BdXRoSGFuZGxlcic7XG5pbXBvcnQge01haWxjaGltcH0gZnJvbSAnLi4vLi4vLi4vdXRpbC90aGlyZHBhcnR5L01haWxjaGltcCc7XG5pbXBvcnQge1JlbmRlcmVyQW5hbHl0aWNzfSBmcm9tICcuLi8uLi8uLi9nYS9SZW5kZXJlckFuYWx5dGljcyc7XG5pbXBvcnQge0xvY2FsUHJlZnN9IGZyb20gJy4uLy4uLy4uL3V0aWwvTG9jYWxQcmVmcyc7XG5cbmV4cG9ydCBjbGFzcyBNYWlsaW5nTGlzdCB7XG5cbiAgICAvKipcbiAgICAgKiBVc2UgdGhlIGF1dGggaGFuZGxlciB0byBzdWJzY3JpYmUgdGhlIHVzZXIgYnV0IG9ubHkgYWZ0ZXIgdGhleSd2ZVxuICAgICAqIGFncmVlZCB0byBzaWduIHVwIG9uIEZpcmViYXNlLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgc3Vic2NyaWJlV2hlbk5lY2Vzc2FyeSgpIHtcblxuICAgICAgICBjb25zdCBhdXRoSGFuZGxlciA9IEF1dGhIYW5kbGVycy5nZXQoKTtcblxuICAgICAgICBjb25zdCBvcHRpb25hbFVzZXJJbmZvID0gYXdhaXQgYXV0aEhhbmRsZXIudXNlckluZm8oKTtcblxuICAgICAgICBpZiAob3B0aW9uYWxVc2VySW5mby5pc1ByZXNlbnQoKSkge1xuXG4gICAgICAgICAgICBjb25zdCB1c2VySW5mbyA9IG9wdGlvbmFsVXNlckluZm8uZ2V0KCk7XG5cbiAgICAgICAgICAgIGF3YWl0IExvY2FsUHJlZnMubWFya09uY2VFeGVjdXRlZCgnZGlkLW1haWxpbmctbGlzdCcsIGFzeW5jICgpID0+IHtcblxuICAgICAgICAgICAgICAgIC8vIE5PVEU6IHRoaXMgd2lsbCBpbiBzb21lIHNpdHVhdGlvbnMgZG91YmxlIHN1YnNjcmliZSBwZW9wbGVcbiAgICAgICAgICAgICAgICAvLyBidXQgb25seSBpZiB0aGV5IG1pZ3JhdGUgdG8gYSBuZXcgbWFjaGluZSBhbmQgb25seSBpZiB0aGV5XG4gICAgICAgICAgICAgICAgLy8gaGF2ZW4ndCBhbHNvIG9wdGVkIG91dC5cblxuICAgICAgICAgICAgICAgIGlmICh1c2VySW5mby5lbWFpbCkge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgUmVuZGVyZXJBbmFseXRpY3MuZXZlbnQoe2NhdGVnb3J5OiAnbWFpbGluZy1saXN0JywgYWN0aW9uOiAnc3Vic2NyaWJlZCd9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IE1haWxjaGltcC5zdWJzY3JpYmUodXNlckluZm8uZW1haWwsIHVzZXJJbmZvLmRpc3BsYXlOYW1lIHx8IFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBSZW5kZXJlckFuYWx5dGljcy5ldmVudCh7Y2F0ZWdvcnk6ICdtYWlsaW5nLWxpc3QnLCBhY3Rpb246ICdmYWlsZWQnfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICB9XG5cbn1cbiJdfQ==