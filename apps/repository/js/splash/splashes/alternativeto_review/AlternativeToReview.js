"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Splash_1 = require("../../Splash");
const EventTrackedLink_1 = require("../components/EventTrackedLink");
const LINK = 'https://alternativeto.net/discussions/AddThread/?urlName=applications&itemId=e992e321-70ca-4d8f-aa59-d5a2be633787&type=review';
const EVENT_CATEGORY = 'splash-alternative-to-review';
class AlternativeToReview extends react_1.default.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (react_1.default.createElement(Splash_1.Splash, { settingKey: this.props.settingKey },
            react_1.default.createElement("div", { style: {
                    display: 'flex'
                } },
                react_1.default.createElement("div", { className: "w-100" },
                    react_1.default.createElement("h2", null, "Could You Review Polar on AlternativeTo?"),
                    react_1.default.createElement("p", { className: "h5" },
                        "Could you take ",
                        react_1.default.createElement("b", null, "1 minute"),
                        " and leave us a review?"),
                    react_1.default.createElement("p", null, "Many users use this site to discover new software and we think they could benefit from using Polar.")),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("p", { className: "text-center m-2" },
                        react_1.default.createElement(EventTrackedLink_1.EventTrackedLink, { className: "", eventCategory: EVENT_CATEGORY, eventAction: 'clicked-image', href: LINK },
                            react_1.default.createElement("i", { style: { fontSize: '125px' }, className: "fas fa-vote-yea" }))))),
            react_1.default.createElement("p", { className: "text-center mt-4 p-2" },
                react_1.default.createElement(EventTrackedLink_1.EventTrackedLink, { eventCategory: EVENT_CATEGORY, eventAction: 'clicked-cta', href: LINK }, "Review Polar on AlternativeTo"))));
    }
}
exports.AlternativeToReview = AlternativeToReview;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWx0ZXJuYXRpdmVUb1Jldmlldy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkFsdGVybmF0aXZlVG9SZXZpZXcudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0Esa0RBQTBCO0FBQzFCLHlDQUFvQztBQUNwQyxxRUFBZ0U7QUFFaEUsTUFBTSxJQUFJLEdBQUcsK0hBQStILENBQUM7QUFDN0ksTUFBTSxjQUFjLEdBQUcsOEJBQThCLENBQUM7QUFFdEQsTUFBYSxtQkFBb0IsU0FBUSxlQUFLLENBQUMsU0FBeUI7SUFFcEUsWUFBWSxLQUFhO1FBQ3JCLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQixDQUFDO0lBRU0sTUFBTTtRQUNULE9BQU8sQ0FFSCw4QkFBQyxlQUFNLElBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVTtZQUVyQyx1Q0FBSyxLQUFLLEVBQUU7b0JBQ1IsT0FBTyxFQUFFLE1BQU07aUJBQ2Q7Z0JBRUQsdUNBQUssU0FBUyxFQUFDLE9BQU87b0JBRWxCLHFGQUFpRDtvQkFFakQscUNBQUcsU0FBUyxFQUFDLElBQUk7O3dCQUNFLG9EQUFlO2tEQUM5QjtvQkFFSiwrSUFHSSxDQUVGO2dCQUVOO29CQUVJLHFDQUFHLFNBQVMsRUFBQyxpQkFBaUI7d0JBRTFCLDhCQUFDLG1DQUFnQixJQUFDLFNBQVMsRUFBQyxFQUFFLEVBQ1osYUFBYSxFQUFFLGNBQWMsRUFDN0IsV0FBVyxFQUFDLGVBQWUsRUFDM0IsSUFBSSxFQUFFLElBQUk7NEJBRXhCLHFDQUFHLEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUMsRUFBRSxTQUFTLEVBQUMsaUJBQWlCLEdBQUssQ0FFaEQsQ0FFbkIsQ0FFRixDQUdKO1lBRU4scUNBQUcsU0FBUyxFQUFDLHNCQUFzQjtnQkFFL0IsOEJBQUMsbUNBQWdCLElBQUMsYUFBYSxFQUFFLGNBQWMsRUFDN0IsV0FBVyxFQUFDLGFBQWEsRUFDekIsSUFBSSxFQUFFLElBQUksb0NBSVQsQ0FFbkIsQ0FFQyxDQUVaLENBQUM7SUFDTixDQUFDO0NBRUo7QUFuRUQsa0RBbUVDIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50IHJlYWN0L25vLW11bHRpLWNvbXA6IDAsIHJlYWN0L3Byb3AtdHlwZXM6IDAgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1NwbGFzaH0gZnJvbSAnLi4vLi4vU3BsYXNoJztcbmltcG9ydCB7RXZlbnRUcmFja2VkTGlua30gZnJvbSAnLi4vY29tcG9uZW50cy9FdmVudFRyYWNrZWRMaW5rJztcblxuY29uc3QgTElOSyA9ICdodHRwczovL2FsdGVybmF0aXZldG8ubmV0L2Rpc2N1c3Npb25zL0FkZFRocmVhZC8/dXJsTmFtZT1hcHBsaWNhdGlvbnMmaXRlbUlkPWU5OTJlMzIxLTcwY2EtNGQ4Zi1hYTU5LWQ1YTJiZTYzMzc4NyZ0eXBlPXJldmlldyc7XG5jb25zdCBFVkVOVF9DQVRFR09SWSA9ICdzcGxhc2gtYWx0ZXJuYXRpdmUtdG8tcmV2aWV3JztcblxuZXhwb3J0IGNsYXNzIEFsdGVybmF0aXZlVG9SZXZpZXcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJUHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgIDxTcGxhc2ggc2V0dGluZ0tleT17dGhpcy5wcm9wcy5zZXR0aW5nS2V5fT5cblxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnXG4gICAgICAgICAgICAgICAgICAgIH19PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMDBcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkNvdWxkIFlvdSBSZXZpZXcgUG9sYXIgb24gQWx0ZXJuYXRpdmVUbz88L2gyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJoNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvdWxkIHlvdSB0YWtlIDxiPjEgbWludXRlPC9iPiBhbmQgbGVhdmUgdXMgYSByZXZpZXc/XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hbnkgdXNlcnMgdXNlIHRoaXMgc2l0ZSB0byBkaXNjb3ZlciBuZXcgc29mdHdhcmUgYW5kXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2UgdGhpbmsgdGhleSBjb3VsZCBiZW5lZml0IGZyb20gdXNpbmcgUG9sYXIuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbS0yXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RXZlbnRUcmFja2VkTGluayBjbGFzc05hbWU9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50Q2F0ZWdvcnk9e0VWRU5UX0NBVEVHT1JZfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50QWN0aW9uPSdjbGlja2VkLWltYWdlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e0xJTkt9PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIHN0eWxlPXt7Zm9udFNpemU6ICcxMjVweCd9fSBjbGFzc05hbWU9XCJmYXMgZmEtdm90ZS15ZWFcIj48L2k+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0V2ZW50VHJhY2tlZExpbms+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC00IHAtMlwiPlxuXG4gICAgICAgICAgICAgICAgICAgIDxFdmVudFRyYWNrZWRMaW5rIGV2ZW50Q2F0ZWdvcnk9e0VWRU5UX0NBVEVHT1JZfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudEFjdGlvbj0nY2xpY2tlZC1jdGEnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e0xJTkt9PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICBSZXZpZXcgUG9sYXIgb24gQWx0ZXJuYXRpdmVUb1xuXG4gICAgICAgICAgICAgICAgICAgIDwvRXZlbnRUcmFja2VkTGluaz5cblxuICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgPC9TcGxhc2g+XG5cbiAgICAgICAgKTtcbiAgICB9XG5cbn1cblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgcmVhZG9ubHkgc2V0dGluZ0tleTogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbn1cblxuIl19