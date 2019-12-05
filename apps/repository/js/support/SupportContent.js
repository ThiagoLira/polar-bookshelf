"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const NullCollapse_1 = require("../../../../web/js/ui/null_collapse/NullCollapse");
const MachineIDs_1 = require("../../../../web/js/util/MachineIDs");
class SupportContent extends react_1.default.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (react_1.default.createElement("div", { className: "container" },
            react_1.default.createElement("div", { className: "row", id: "support" },
                react_1.default.createElement("div", { className: "col" },
                    react_1.default.createElement("div", { className: "mb-3" },
                        react_1.default.createElement("h1", null, "Support Plans")),
                    react_1.default.createElement(NullCollapse_1.NullCollapse, { open: this.props.plan === 'free' },
                        react_1.default.createElement("p", { className: "text-xl" }, "Polar has two main support options.  Premium and Community."),
                        react_1.default.createElement("h2", null, "Premium"),
                        react_1.default.createElement("p", { className: "text-lg" },
                            "All users of ",
                            react_1.default.createElement("a", { href: "#plans" }, "Polar Premium"),
                            " benefit from direct support with 24 hour response time.  This includes the ",
                            react_1.default.createElement("b", null, "bronze"),
                            ",",
                            react_1.default.createElement("b", null, "silver"),
                            ", and ",
                            react_1.default.createElement("b", null, "gold"),
                            " plans."),
                        react_1.default.createElement("p", { className: "text-lg" }, "Additionally, bug fixes and feature requests from premium users carry greater priority in our milestone planning."),
                        react_1.default.createElement("h2", null, "Community"),
                        react_1.default.createElement("p", { className: "text-lg" },
                            "Users on the free tier can use our community resources and reach out on ",
                            react_1.default.createElement("a", { href: "https://discord.gg/GT8MhA6" }, "Discord"),
                            " or ",
                            react_1.default.createElement("a", { href: "https://github.com/burtonator/polar-bookshelf/issues" }, "Create an issue on Github"),
                            "."),
                        react_1.default.createElement("p", { className: "text-lg" }, "We try our best to address your issues but obviously we focus on premium users first.  Premium also means you take advantage of all the other features included there including cloud sync.")),
                    react_1.default.createElement(NullCollapse_1.NullCollapse, { open: this.props.plan !== 'free' },
                        react_1.default.createElement("p", { className: "text-lg" },
                            "As a premium user on the ",
                            react_1.default.createElement("b", null, this.props.plan),
                            " you quality for premium support."),
                        react_1.default.createElement("p", { className: "text-lg" }, "You can contact support directly at:"),
                        react_1.default.createElement("h3", null,
                            react_1.default.createElement("b", null,
                                "support+",
                                MachineIDs_1.MachineIDs.get().substring(0, 5),
                                "@getpolarized.io")))))));
    }
}
exports.SupportContent = SupportContent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3VwcG9ydENvbnRlbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJTdXBwb3J0Q29udGVudC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxrREFBMEI7QUFFMUIsbUZBQThFO0FBQzlFLG1FQUE4RDtBQUU5RCxNQUFhLGNBQWUsU0FBUSxlQUFLLENBQUMsU0FBeUI7SUFFL0QsWUFBWSxLQUFhO1FBQ3JCLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQixDQUFDO0lBRU0sTUFBTTtRQUlULE9BQU8sQ0FDSCx1Q0FBSyxTQUFTLEVBQUMsV0FBVztZQUV0Qix1Q0FBSyxTQUFTLEVBQUMsS0FBSyxFQUFDLEVBQUUsRUFBQyxTQUFTO2dCQUU3Qix1Q0FBSyxTQUFTLEVBQUMsS0FBSztvQkFDaEIsdUNBQUssU0FBUyxFQUFDLE1BQU07d0JBQ2pCLDBEQUFzQixDQUNwQjtvQkFFTiw4QkFBQywyQkFBWSxJQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxNQUFNO3dCQUUxQyxxQ0FBRyxTQUFTLEVBQUMsU0FBUyxrRUFFbEI7d0JBRUosb0RBQWdCO3dCQUVoQixxQ0FBRyxTQUFTLEVBQUMsU0FBUzs7NEJBQ0wscUNBQUcsSUFBSSxFQUFDLFFBQVEsb0JBQWtCOzs0QkFFdEIsa0RBQWE7OzRCQUN0QyxrREFBYTs7NEJBQU0sZ0RBQVc7c0NBQzlCO3dCQUVKLHFDQUFHLFNBQVMsRUFBQyxTQUFTLHdIQUlsQjt3QkFFSixzREFBa0I7d0JBRWxCLHFDQUFHLFNBQVMsRUFBQyxTQUFTOzs0QkFFRCxxQ0FBRyxJQUFJLEVBQUMsNEJBQTRCLGNBQVk7OzRCQUFJLHFDQUFHLElBQUksRUFBQyxzREFBc0QsZ0NBQThCO2dDQUNqSzt3QkFFSixxQ0FBRyxTQUFTLEVBQUMsU0FBUyxrTUFLbEIsQ0FFTztvQkFFZiw4QkFBQywyQkFBWSxJQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxNQUFNO3dCQUUxQyxxQ0FBRyxTQUFTLEVBQUMsU0FBUzs7NEJBQ08seUNBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUs7Z0VBRWpEO3dCQUVKLHFDQUFHLFNBQVMsRUFBQyxTQUFTLDJDQUVsQjt3QkFFSjs0QkFDSTs7Z0NBQVksdUJBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQzttREFBcUIsQ0FDaEUsQ0FFTSxDQUViLENBRUosQ0FFSixDQUNULENBQUM7SUFDTixDQUFDO0NBRUo7QUFsRkQsd0NBa0ZDIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50IHJlYWN0L25vLW11bHRpLWNvbXA6IDAsIHJlYWN0L3Byb3AtdHlwZXM6IDAgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0FjY291bnRQbGFufSBmcm9tICcuLi8uLi8uLi8uLi93ZWIvanMvYWNjb3VudHMvQWNjb3VudCc7XG5pbXBvcnQge051bGxDb2xsYXBzZX0gZnJvbSAnLi4vLi4vLi4vLi4vd2ViL2pzL3VpL251bGxfY29sbGFwc2UvTnVsbENvbGxhcHNlJztcbmltcG9ydCB7TWFjaGluZUlEc30gZnJvbSAnLi4vLi4vLi4vLi4vd2ViL2pzL3V0aWwvTWFjaGluZUlEcyc7XG5cbmV4cG9ydCBjbGFzcyBTdXBwb3J0Q29udGVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICAvKiBXQVJOOiB0YWtlbiBkaXJlY3RseSBmcm9tIHBvbGFyLXNpdGUgKi9cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgaWQ9XCJzdXBwb3J0XCI+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5TdXBwb3J0IFBsYW5zPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8TnVsbENvbGxhcHNlIG9wZW49e3RoaXMucHJvcHMucGxhbiA9PT0gJ2ZyZWUnfT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUG9sYXIgaGFzIHR3byBtYWluIHN1cHBvcnQgb3B0aW9ucy4gIFByZW1pdW0gYW5kIENvbW11bml0eS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+UHJlbWl1bTwvaDI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFsbCB1c2VycyBvZiA8YSBocmVmPVwiI3BsYW5zXCI+UG9sYXIgUHJlbWl1bTwvYT4gYmVuZWZpdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tIGRpcmVjdCBzdXBwb3J0IHdpdGggMjQgaG91ciByZXNwb25zZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lLiAgVGhpcyBpbmNsdWRlcyB0aGUgPGI+YnJvbnplPC9iPixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+c2lsdmVyPC9iPiwgYW5kIDxiPmdvbGQ8L2I+IHBsYW5zLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkaXRpb25hbGx5LCBidWcgZml4ZXMgYW5kIGZlYXR1cmUgcmVxdWVzdHMgZnJvbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVtaXVtIHVzZXJzIGNhcnJ5IGdyZWF0ZXIgcHJpb3JpdHkgaW4gb3VyIG1pbGVzdG9uZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFubmluZy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+Q29tbXVuaXR5PC9oMj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXNlcnMgb24gdGhlIGZyZWUgdGllciBjYW4gdXNlIG91ciBjb21tdW5pdHkgcmVzb3VyY2VzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuZCByZWFjaCBvdXQgb24gPGEgaHJlZj1cImh0dHBzOi8vZGlzY29yZC5nZy9HVDhNaEE2XCI+RGlzY29yZDwvYT4gb3IgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9idXJ0b25hdG9yL3BvbGFyLWJvb2tzaGVsZi9pc3N1ZXNcIj5DcmVhdGUgYW4gaXNzdWUgb24gR2l0aHViPC9hPi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdlIHRyeSBvdXIgYmVzdCB0byBhZGRyZXNzIHlvdXIgaXNzdWVzIGJ1dCBvYnZpb3VzbHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2UgZm9jdXMgb24gcHJlbWl1bSB1c2VycyBmaXJzdC4gIFByZW1pdW0gYWxzbyBtZWFuc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5b3UgdGFrZSBhZHZhbnRhZ2Ugb2YgYWxsIHRoZSBvdGhlciBmZWF0dXJlcyBpbmNsdWRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVyZSBpbmNsdWRpbmcgY2xvdWQgc3luYy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTnVsbENvbGxhcHNlPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8TnVsbENvbGxhcHNlIG9wZW49e3RoaXMucHJvcHMucGxhbiAhPT0gJ2ZyZWUnfT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXMgYSBwcmVtaXVtIHVzZXIgb24gdGhlIDxiPnt0aGlzLnByb3BzLnBsYW59PC9iPiB5b3VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVhbGl0eSBmb3IgcHJlbWl1bSBzdXBwb3J0LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWW91IGNhbiBjb250YWN0IHN1cHBvcnQgZGlyZWN0bHkgYXQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj5zdXBwb3J0K3tNYWNoaW5lSURzLmdldCgpLnN1YnN0cmluZygwLCA1KX1AZ2V0cG9sYXJpemVkLmlvPC9iPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTnVsbENvbGxhcHNlPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxufVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgICByZWFkb25seSBwbGFuOiBBY2NvdW50UGxhbjtcbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG59XG5cbiJdfQ==