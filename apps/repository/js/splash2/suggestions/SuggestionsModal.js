"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Toaster_1 = require("../../../../../web/js/ui/toaster/Toaster");
const MachineIDs_1 = require("../../../../../web/js/util/MachineIDs");
const ISODateTimeStrings_1 = require("polar-shared/src/metadata/ISODateTimeStrings");
const UserFeedback_1 = require("../../../../../web/js/telemetry/UserFeedback");
const Suggestions_1 = require("../../../../../web/js/ui/feedback/Suggestions");
const LocalPrefs_1 = require("../../../../../web/js/util/LocalPrefs");
const SplashKeys_1 = require("../SplashKeys");
const RendererAnalytics_1 = require("../../../../../web/js/ga/RendererAnalytics");
const Version_1 = require("polar-shared/src/util/Version");
class SuggestionsModal extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.onSuggestion = this.onSuggestion.bind(this);
    }
    render() {
        return (react_1.default.createElement(Suggestions_1.Suggestions, { category: "user-suggestions", title: "How should we improve Polar?", description: "We need your help to improve Polar!  In your opinion what should we do to make it better?", onDone: text => this.onSuggestion(text) }));
    }
    onSuggestion(text) {
        Toaster_1.Toaster.success("Thanks for your feedback!");
        const netPromoterScore = LocalPrefs_1.LocalPrefs.get(SplashKeys_1.SplashKeys.NET_PROMOTER_SCORE)
            .map(current => Number.parseInt(current))
            .map(current => current)
            .getOrNull();
        if (netPromoterScore === null) {
            RendererAnalytics_1.RendererAnalytics.event({ category: 'suggestions-splash', action: 'no-nps' });
        }
        const version = Version_1.Version.get();
        const userFeedback = {
            machine: MachineIDs_1.MachineIDs.get(),
            text,
            netPromoterScore,
            created: ISODateTimeStrings_1.ISODateTimeStrings.create(),
            version
        };
        UserFeedback_1.UserFeedbacks.write(userFeedback)
            .catch(err => console.error("Unable to write user feedback: ", err));
    }
}
exports.SuggestionsModal = SuggestionsModal;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3VnZ2VzdGlvbnNNb2RhbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlN1Z2dlc3Rpb25zTW9kYWwudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0Esa0RBQTBCO0FBRzFCLHNFQUFpRTtBQUNqRSxzRUFBaUU7QUFDakUscUZBQWdGO0FBQ2hGLCtFQUEyRTtBQUMzRSwrRUFBMEU7QUFDMUUsc0VBQWlFO0FBQ2pFLDhDQUF5QztBQUd6QyxrRkFBNkU7QUFDN0UsMkRBQXNEO0FBRXRELE1BQWEsZ0JBQWlCLFNBQVEsZUFBSyxDQUFDLFNBQXlCO0lBRWpFLFlBQVksS0FBYTtRQUNyQixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDYixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFTSxNQUFNO1FBRVQsT0FBTyxDQUVILDhCQUFDLHlCQUFXLElBQUMsUUFBUSxFQUFFLGtCQUFrQixFQUM1QixLQUFLLEVBQUUsOEJBQThCLEVBQ3JDLFdBQVcsRUFBQywyRkFBMkYsRUFDdkcsTUFBTSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUUxRCxDQUFDO0lBQ04sQ0FBQztJQUVPLFlBQVksQ0FBQyxJQUFZO1FBRTdCLGlCQUFPLENBQUMsT0FBTyxDQUFDLDJCQUEyQixDQUFDLENBQUM7UUFFN0MsTUFBTSxnQkFBZ0IsR0FBRyx1QkFBVSxDQUFDLEdBQUcsQ0FBQyx1QkFBVSxDQUFDLGtCQUFrQixDQUFDO2FBQ2pFLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDeEMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBMkIsQ0FBQzthQUMzQyxTQUFTLEVBQUUsQ0FBQztRQUVqQixJQUFJLGdCQUFnQixLQUFLLElBQUksRUFBRTtZQUMzQixxQ0FBaUIsQ0FBQyxLQUFLLENBQUMsRUFBQyxRQUFRLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBQyxDQUFDLENBQUM7U0FDL0U7UUFFRCxNQUFNLE9BQU8sR0FBRyxpQkFBTyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBRTlCLE1BQU0sWUFBWSxHQUFpQjtZQUMvQixPQUFPLEVBQUUsdUJBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDekIsSUFBSTtZQUNKLGdCQUFnQjtZQUNoQixPQUFPLEVBQUUsdUNBQWtCLENBQUMsTUFBTSxFQUFFO1lBQ3BDLE9BQU87U0FDVixDQUFDO1FBRUYsNEJBQWEsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDO2FBQzVCLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsaUNBQWlDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUU3RSxDQUFDO0NBQ0o7QUE5Q0QsNENBOENDIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50IHJlYWN0L25vLW11bHRpLWNvbXA6IDAsIHJlYWN0L3Byb3AtdHlwZXM6IDAgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0ZlZWRiYWNrfSBmcm9tICcuLi8uLi8uLi8uLi8uLi93ZWIvanMvdWkvZmVlZGJhY2svRmVlZGJhY2snO1xuaW1wb3J0IHtSYXRpbmd9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3dlYi9qcy91aS9mZWVkYmFjay9GZWVkYmFjayc7XG5pbXBvcnQge1RvYXN0ZXJ9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3dlYi9qcy91aS90b2FzdGVyL1RvYXN0ZXInO1xuaW1wb3J0IHtNYWNoaW5lSURzfSBmcm9tICcuLi8uLi8uLi8uLi8uLi93ZWIvanMvdXRpbC9NYWNoaW5lSURzJztcbmltcG9ydCB7SVNPRGF0ZVRpbWVTdHJpbmdzfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL21ldGFkYXRhL0lTT0RhdGVUaW1lU3RyaW5ncyc7XG5pbXBvcnQge1VzZXJGZWVkYmFja3N9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3dlYi9qcy90ZWxlbWV0cnkvVXNlckZlZWRiYWNrJztcbmltcG9ydCB7U3VnZ2VzdGlvbnN9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3dlYi9qcy91aS9mZWVkYmFjay9TdWdnZXN0aW9ucyc7XG5pbXBvcnQge0xvY2FsUHJlZnN9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3dlYi9qcy91dGlsL0xvY2FsUHJlZnMnO1xuaW1wb3J0IHtTcGxhc2hLZXlzfSBmcm9tICcuLi9TcGxhc2hLZXlzJztcbmltcG9ydCB7VXNlckZlZWRiYWNrfSBmcm9tICcuLi8uLi8uLi8uLi8uLi93ZWIvanMvdGVsZW1ldHJ5L1VzZXJGZWVkYmFjayc7XG5pbXBvcnQge05ldFByb21vdGVyU2NvcmV9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3dlYi9qcy90ZWxlbWV0cnkvVXNlckZlZWRiYWNrJztcbmltcG9ydCB7UmVuZGVyZXJBbmFseXRpY3N9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3dlYi9qcy9nYS9SZW5kZXJlckFuYWx5dGljcyc7XG5pbXBvcnQge1ZlcnNpb259IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC9WZXJzaW9uJztcblxuZXhwb3J0IGNsYXNzIFN1Z2dlc3Rpb25zTW9kYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJUHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLm9uU3VnZ2VzdGlvbiA9IHRoaXMub25TdWdnZXN0aW9uLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICA8U3VnZ2VzdGlvbnMgY2F0ZWdvcnk9e1widXNlci1zdWdnZXN0aW9uc1wifVxuICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtcIkhvdyBzaG91bGQgd2UgaW1wcm92ZSBQb2xhcj9cIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIldlIG5lZWQgeW91ciBoZWxwIHRvIGltcHJvdmUgUG9sYXIhICBJbiB5b3VyIG9waW5pb24gd2hhdCBzaG91bGQgd2UgZG8gdG8gbWFrZSBpdCBiZXR0ZXI/XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBvbkRvbmU9e3RleHQgPT4gdGhpcy5vblN1Z2dlc3Rpb24odGV4dCl9Lz5cblxuICAgICAgICApO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25TdWdnZXN0aW9uKHRleHQ6IHN0cmluZykge1xuXG4gICAgICAgIFRvYXN0ZXIuc3VjY2VzcyhcIlRoYW5rcyBmb3IgeW91ciBmZWVkYmFjayFcIik7XG5cbiAgICAgICAgY29uc3QgbmV0UHJvbW90ZXJTY29yZSA9IExvY2FsUHJlZnMuZ2V0KFNwbGFzaEtleXMuTkVUX1BST01PVEVSX1NDT1JFKVxuICAgICAgICAgICAgLm1hcChjdXJyZW50ID0+IE51bWJlci5wYXJzZUludChjdXJyZW50KSlcbiAgICAgICAgICAgIC5tYXAoY3VycmVudCA9PiBjdXJyZW50IGFzIE5ldFByb21vdGVyU2NvcmUpXG4gICAgICAgICAgICAuZ2V0T3JOdWxsKCk7XG5cbiAgICAgICAgaWYgKG5ldFByb21vdGVyU2NvcmUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIFJlbmRlcmVyQW5hbHl0aWNzLmV2ZW50KHtjYXRlZ29yeTogJ3N1Z2dlc3Rpb25zLXNwbGFzaCcsIGFjdGlvbjogJ25vLW5wcyd9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHZlcnNpb24gPSBWZXJzaW9uLmdldCgpO1xuXG4gICAgICAgIGNvbnN0IHVzZXJGZWVkYmFjazogVXNlckZlZWRiYWNrID0ge1xuICAgICAgICAgICAgbWFjaGluZTogTWFjaGluZUlEcy5nZXQoKSxcbiAgICAgICAgICAgIHRleHQsXG4gICAgICAgICAgICBuZXRQcm9tb3RlclNjb3JlLFxuICAgICAgICAgICAgY3JlYXRlZDogSVNPRGF0ZVRpbWVTdHJpbmdzLmNyZWF0ZSgpLFxuICAgICAgICAgICAgdmVyc2lvblxuICAgICAgICB9O1xuXG4gICAgICAgIFVzZXJGZWVkYmFja3Mud3JpdGUodXNlckZlZWRiYWNrKVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKFwiVW5hYmxlIHRvIHdyaXRlIHVzZXIgZmVlZGJhY2s6IFwiLCBlcnIpKTtcblxuICAgIH1cbn1cblxuaW50ZXJmYWNlIElQcm9wcyB7XG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xufVxuXG4iXX0=