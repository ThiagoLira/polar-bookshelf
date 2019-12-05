"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Splash_1 = require("../../Splash");
const SplitLayout_1 = require("../../../../../../web/js/ui/split_layout/SplitLayout");
const SplitLayoutRight_1 = require("../../../../../../web/js/ui/split_layout/SplitLayoutRight");
const CallToActionLink_1 = require("../components/CallToActionLink");
exports.SURVEY_LINK = 'https://kevinburton1.typeform.com/to/BuX1Ef';
class Survey extends react_1.default.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (react_1.default.createElement(Splash_1.Splash, { settingKey: this.props.settingKey },
            react_1.default.createElement(SplitLayout_1.SplitLayout, null,
                react_1.default.createElement(SplitLayout_1.SplitLayoutLeft, null,
                    react_1.default.createElement("h2", null, "What do you think of Polar?"),
                    react_1.default.createElement("p", { className: "h5" },
                        "Could you take ",
                        react_1.default.createElement("b", null, "2 minutes"),
                        " and answer 10 questions about your use of Polar?"),
                    react_1.default.createElement("p", { className: "text-center mt-4" },
                        react_1.default.createElement(CallToActionLink_1.CallToActionLink, { href: exports.SURVEY_LINK, eventCategory: 'splash-survey' }, "Provide Feedback")),
                    react_1.default.createElement("p", { className: "text-center text-muted" },
                        "We read ",
                        react_1.default.createElement("i", null, "every"),
                        " response and your feedback is critical to the success of Polar!")),
                react_1.default.createElement(SplitLayoutRight_1.SplitLayoutRight, null,
                    react_1.default.createElement("p", { className: "text-center m-2" },
                        react_1.default.createElement("i", { style: { fontSize: '200px' }, className: "text-primary fas fa-bullhorn" }))))));
    }
}
exports.Survey = Survey;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3VydmV5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiU3VydmV5LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLGtEQUEwQjtBQUMxQix5Q0FBb0M7QUFFcEMsc0ZBQWtHO0FBQ2xHLGdHQUEyRjtBQUMzRixxRUFBZ0U7QUFFbkQsUUFBQSxXQUFXLEdBQUcsNkNBQTZDLENBQUM7QUFJekUsTUFBYSxNQUFPLFNBQVEsZUFBSyxDQUFDLFNBQXlCO0lBRXZELFlBQVksS0FBYTtRQUNyQixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakIsQ0FBQztJQUVNLE1BQU07UUFDVCxPQUFPLENBRUgsOEJBQUMsZUFBTSxJQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVU7WUFFckMsOEJBQUMseUJBQVc7Z0JBRVIsOEJBQUMsNkJBQWU7b0JBRVosd0VBQW9DO29CQUVwQyxxQ0FBRyxTQUFTLEVBQUMsSUFBSTs7d0JBQ0UscURBQWdCOzRFQUUvQjtvQkFFSixxQ0FBRyxTQUFTLEVBQUMsa0JBQWtCO3dCQUczQiw4QkFBQyxtQ0FBZ0IsSUFBQyxJQUFJLEVBQUUsbUJBQVcsRUFBRSxhQUFhLEVBQUMsZUFBZSx1QkFFL0MsQ0FFbkI7b0JBRUoscUNBQUcsU0FBUyxFQUFDLHdCQUF3Qjs7d0JBQ3pCLGlEQUFZOzJGQUVwQixDQUVVO2dCQUVsQiw4QkFBQyxtQ0FBZ0I7b0JBRWIscUNBQUcsU0FBUyxFQUFDLGlCQUFpQjt3QkFFMUIscUNBQUcsS0FBSyxFQUFFLEVBQUMsUUFBUSxFQUFFLE9BQU8sRUFBQyxFQUFFLFNBQVMsRUFBQyw4QkFBOEIsR0FBSyxDQUU1RSxDQUVXLENBRVQsQ0FFVCxDQUVaLENBQUM7SUFDTixDQUFDO0NBRUo7QUF2REQsd0JBdURDIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50IHJlYWN0L25vLW11bHRpLWNvbXA6IDAsIHJlYWN0L3Byb3AtdHlwZXM6IDAgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1NwbGFzaH0gZnJvbSAnLi4vLi4vU3BsYXNoJztcbmltcG9ydCB7RW1iZWRkZWRJbWFnZXN9IGZyb20gJy4uLy4uLy4uL3NwbGFzaDIvd2hhdHNfbmV3L0VtYmVkZGVkSW1hZ2VzJztcbmltcG9ydCB7U3BsaXRMYXlvdXQsIFNwbGl0TGF5b3V0TGVmdH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vd2ViL2pzL3VpL3NwbGl0X2xheW91dC9TcGxpdExheW91dCc7XG5pbXBvcnQge1NwbGl0TGF5b3V0UmlnaHR9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3dlYi9qcy91aS9zcGxpdF9sYXlvdXQvU3BsaXRMYXlvdXRSaWdodCc7XG5pbXBvcnQge0NhbGxUb0FjdGlvbkxpbmt9IGZyb20gJy4uL2NvbXBvbmVudHMvQ2FsbFRvQWN0aW9uTGluayc7XG5cbmV4cG9ydCBjb25zdCBTVVJWRVlfTElOSyA9ICdodHRwczovL2tldmluYnVydG9uMS50eXBlZm9ybS5jb20vdG8vQnVYMUVmJztcblxuLy8gaHR0cHM6Ly9rZXZpbmJ1cnRvbjEudHlwZWZvcm0uY29tL3RvL0J1WDFFZlxuXG5leHBvcnQgY2xhc3MgU3VydmV5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICA8U3BsYXNoIHNldHRpbmdLZXk9e3RoaXMucHJvcHMuc2V0dGluZ0tleX0+XG5cbiAgICAgICAgICAgICAgICA8U3BsaXRMYXlvdXQ+XG5cbiAgICAgICAgICAgICAgICAgICAgPFNwbGl0TGF5b3V0TGVmdD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPldoYXQgZG8geW91IHRoaW5rIG9mIFBvbGFyPzwvaDI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImg1XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ291bGQgeW91IHRha2UgPGI+MiBtaW51dGVzPC9iPiBhbmQgYW5zd2VyIDEwIHF1ZXN0aW9ucyBhYm91dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHlvdXIgdXNlIG9mIFBvbGFyP1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC00XCI+XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYWxsVG9BY3Rpb25MaW5rIGhyZWY9e1NVUlZFWV9MSU5LfSBldmVudENhdGVnb3J5PSdzcGxhc2gtc3VydmV5Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJvdmlkZSBGZWVkYmFja1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FsbFRvQWN0aW9uTGluaz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LW11dGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgV2UgcmVhZCA8aT5ldmVyeTwvaT4gcmVzcG9uc2UgYW5kIHlvdXIgZmVlZGJhY2sgaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjcml0aWNhbCB0byB0aGUgc3VjY2VzcyBvZiBQb2xhciFcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgICA8L1NwbGl0TGF5b3V0TGVmdD5cblxuICAgICAgICAgICAgICAgICAgICA8U3BsaXRMYXlvdXRSaWdodD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbS0yXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBzdHlsZT17e2ZvbnRTaXplOiAnMjAwcHgnfX0gY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5IGZhcyBmYS1idWxsaG9yblwiPjwvaT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvU3BsaXRMYXlvdXRSaWdodD5cblxuICAgICAgICAgICAgICAgIDwvU3BsaXRMYXlvdXQ+XG5cbiAgICAgICAgICAgIDwvU3BsYXNoPlxuXG4gICAgICAgICk7XG4gICAgfVxuXG59XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICAgIHJlYWRvbmx5IHNldHRpbmdLZXk6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG59XG5cbiJdfQ==