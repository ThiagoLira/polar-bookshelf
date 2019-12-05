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
const CardBody_1 = __importDefault(require("reactstrap/lib/CardBody"));
const Card_1 = __importDefault(require("reactstrap/lib/Card"));
const log = Logger_1.Logger.create();
class GithubStarsCard extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (React.createElement(Card_1.default, null,
            React.createElement(CardHeader_1.default, null,
                React.createElement("b", null, "Github Stars")),
            React.createElement(CardBody_1.default, null,
                React.createElement("div", { className: "mt-2 mb-2 intro" },
                    React.createElement("p", null, "Liking Polar?  Would you mind giving us a star on Github?"),
                    React.createElement("p", { className: "text-center" },
                        React.createElement("a", { href: "https://github.com/burtonator/polar-bookshelf" },
                            React.createElement("img", { height: "100", src: "https://img.shields.io/github/stars/burtonator/polar-bookshelf.svg?style=social&label=Star" })))))));
    }
}
exports.default = GithubStarsCard;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2l0aHViU3RhcnNDYXJkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiR2l0aHViU3RhcnNDYXJkLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBK0I7QUFDL0IsMkRBQXNEO0FBQ3RELDJFQUFtRDtBQUNuRCx1RUFBK0M7QUFDL0MsK0RBQXVDO0FBRXZDLE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU1QixNQUFxQixlQUFnQixTQUFRLEtBQUssQ0FBQyxTQUFtQjtJQUVsRSxZQUFZLEtBQVUsRUFBRSxPQUFZO1FBQ2hDLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFFMUIsQ0FBQztJQUVNLE1BQU07UUFFVCxPQUFPLENBRUgsb0JBQUMsY0FBSTtZQUNELG9CQUFDLG9CQUFVO2dCQUFDLDhDQUFtQixDQUFhO1lBQzVDLG9CQUFDLGtCQUFRO2dCQUVMLDZCQUFLLFNBQVMsRUFBQyxpQkFBaUI7b0JBRTVCLDJGQUdJO29CQUVKLDJCQUFHLFNBQVMsRUFBQyxhQUFhO3dCQUN0QiwyQkFBRyxJQUFJLEVBQUMsK0NBQStDOzRCQUNuRCw2QkFBSyxNQUFNLEVBQUMsS0FBSyxFQUNaLEdBQUcsRUFBQyw0RkFBNEYsR0FBRSxDQUN2RyxDQUNKLENBRUYsQ0FFQyxDQUNSLENBRVYsQ0FBQztJQUNOLENBQUM7Q0FFSjtBQXJDRCxrQ0FxQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCBDYXJkSGVhZGVyIGZyb20gJ3JlYWN0c3RyYXAvbGliL0NhcmRIZWFkZXInO1xuaW1wb3J0IENhcmRCb2R5IGZyb20gJ3JlYWN0c3RyYXAvbGliL0NhcmRCb2R5JztcbmltcG9ydCBDYXJkIGZyb20gJ3JlYWN0c3RyYXAvbGliL0NhcmQnO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdpdGh1YlN0YXJzQ2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxhbnksIGFueT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IGFueSwgY29udGV4dDogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcblxuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgPENhcmQ+XG4gICAgICAgICAgICAgICAgPENhcmRIZWFkZXI+PGI+R2l0aHViIFN0YXJzPC9iPjwvQ2FyZEhlYWRlcj5cbiAgICAgICAgICAgICAgICA8Q2FyZEJvZHk+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yIG1iLTIgaW50cm9cIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTGlraW5nIFBvbGFyPyAgV291bGQgeW91IG1pbmQgZ2l2aW5nIHVzIGEgc3RhciBvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdpdGh1Yj9cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2J1cnRvbmF0b3IvcG9sYXItYm9va3NoZWxmXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgaGVpZ2h0PVwiMTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2ltZy5zaGllbGRzLmlvL2dpdGh1Yi9zdGFycy9idXJ0b25hdG9yL3BvbGFyLWJvb2tzaGVsZi5zdmc/c3R5bGU9c29jaWFsJmxhYmVsPVN0YXJcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPC9DYXJkQm9keT5cbiAgICAgICAgICAgIDwvQ2FyZD5cblxuICAgICAgICApO1xuICAgIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElQcm9wcyB7XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJU3RhdGUge1xuXG59XG4iXX0=