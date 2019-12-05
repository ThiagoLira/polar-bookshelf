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
const React = __importStar(require("react"));
const Logger_1 = require("polar-shared/src/logger/Logger");
const CardHeader_1 = __importDefault(require("reactstrap/lib/CardHeader"));
const Card_1 = __importDefault(require("reactstrap/lib/Card"));
const CardBody_1 = __importDefault(require("reactstrap/lib/CardBody"));
const log = Logger_1.Logger.create();
class DonationsCard extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (React.createElement(Card_1.default, null,
            React.createElement(CardHeader_1.default, null,
                React.createElement("b", null, "Donate to Polar")),
            React.createElement(CardBody_1.default, null,
                React.createElement("div", { className: "mb-2 intro" },
                    React.createElement("p", null,
                        React.createElement("b", null, "Can you make a donation to Polar? "),
                        "We have an ",
                        React.createElement("a", { href: "https://opencollective.com/polar-bookshelf/donate" }, "Open Collective"),
                        " setup to accept donations.  If you use Polar at work ask your employer if they can make a donation. Many larger employers will both match donations and support projects that help their employees."),
                    React.createElement("p", { className: "text-center m-2" },
                        React.createElement("a", { href: "https://opencollective.com/polar-bookshelf/donate", target: "_blank" },
                            React.createElement("img", { src: "https://opencollective.com/polar-bookshelf/donate/button@2x.png?color=blue", width: "300" })))))));
    }
}
exports.default = DonationsCard;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9uYXRpb25zQ2FyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkRvbmF0aW9uc0NhcmQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUMvQiwyREFBc0Q7QUFDdEQsMkVBQW1EO0FBQ25ELCtEQUF1QztBQUN2Qyx1RUFBK0M7QUFFL0MsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLE1BQXFCLGFBQWMsU0FBUSxLQUFLLENBQUMsU0FBbUI7SUFFaEUsWUFBWSxLQUFVLEVBQUUsT0FBWTtRQUNoQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBRTFCLENBQUM7SUFFTSxNQUFNO1FBRVQsT0FBTyxDQUVILG9CQUFDLGNBQUk7WUFDRCxvQkFBQyxvQkFBVTtnQkFBQyxpREFBc0IsQ0FBYTtZQUMvQyxvQkFBQyxrQkFBUTtnQkFFTCw2QkFBSyxTQUFTLEVBQUMsWUFBWTtvQkFFdkI7d0JBQ0ksb0VBQXlDOzt3QkFDOUIsMkJBQ1gsSUFBSSxFQUFDLG1EQUFtRCxzQkFDMUM7K05BSWQ7b0JBRUosMkJBQUcsU0FBUyxFQUFDLGlCQUFpQjt3QkFDMUIsMkJBQUcsSUFBSSxFQUFDLG1EQUFtRCxFQUFDLE1BQU0sRUFBQyxRQUFROzRCQUN2RSw2QkFBSyxHQUFHLEVBQUMsNEVBQTRFLEVBQUMsS0FBSyxFQUFDLEtBQUssR0FBRyxDQUNwRyxDQUNKLENBRUYsQ0FFQyxDQUNSLENBRVYsQ0FBQztJQUNOLENBQUM7Q0FFSjtBQXpDRCxnQ0F5Q0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCBDYXJkSGVhZGVyIGZyb20gJ3JlYWN0c3RyYXAvbGliL0NhcmRIZWFkZXInO1xuaW1wb3J0IENhcmQgZnJvbSAncmVhY3RzdHJhcC9saWIvQ2FyZCc7XG5pbXBvcnQgQ2FyZEJvZHkgZnJvbSAncmVhY3RzdHJhcC9saWIvQ2FyZEJvZHknO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERvbmF0aW9uc0NhcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8YW55LCBhbnk+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBhbnksIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgIDxDYXJkPlxuICAgICAgICAgICAgICAgIDxDYXJkSGVhZGVyPjxiPkRvbmF0ZSB0byBQb2xhcjwvYj48L0NhcmRIZWFkZXI+XG4gICAgICAgICAgICAgICAgPENhcmRCb2R5PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMiBpbnRyb1wiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj5DYW4geW91IG1ha2UgYSBkb25hdGlvbiB0byBQb2xhcj8gPC9iPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdlIGhhdmUgYW4gPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9vcGVuY29sbGVjdGl2ZS5jb20vcG9sYXItYm9va3NoZWxmL2RvbmF0ZVwiPk9wZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb2xsZWN0aXZlPC9hPiBzZXR1cCB0byBhY2NlcHQgZG9uYXRpb25zLiAgSWYgeW91IHVzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBvbGFyIGF0IHdvcmsgYXNrIHlvdXIgZW1wbG95ZXIgaWYgdGhleSBjYW4gbWFrZSBhIGRvbmF0aW9uLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hbnkgbGFyZ2VyIGVtcGxveWVycyB3aWxsIGJvdGggbWF0Y2ggZG9uYXRpb25zIGFuZCBzdXBwb3J0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdHMgdGhhdCBoZWxwIHRoZWlyIGVtcGxveWVlcy5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbS0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vb3BlbmNvbGxlY3RpdmUuY29tL3BvbGFyLWJvb2tzaGVsZi9kb25hdGVcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL29wZW5jb2xsZWN0aXZlLmNvbS9wb2xhci1ib29rc2hlbGYvZG9uYXRlL2J1dHRvbkAyeC5wbmc/Y29sb3I9Ymx1ZVwiIHdpZHRoPVwiMzAwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8L0NhcmRCb2R5PlxuICAgICAgICAgICAgPC9DYXJkPlxuXG4gICAgICAgICk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVByb3BzIHtcblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElTdGF0ZSB7XG5cbn1cbiJdfQ==