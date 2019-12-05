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
const EmbeddedImages_1 = require("../splash2/whats_new/EmbeddedImages");
const Card_1 = __importDefault(require("reactstrap/lib/Card"));
const CardHeader_1 = __importDefault(require("reactstrap/lib/CardHeader"));
const CardBody_1 = __importDefault(require("reactstrap/lib/CardBody"));
const log = Logger_1.Logger.create();
const SURVEY_LINK = 'https://kevinburton1.typeform.com/to/BuX1Ef';
class SurveyCard extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (React.createElement(Card_1.default, null,
            React.createElement(CardHeader_1.default, null,
                React.createElement("b", null, "Take our Survey")),
            React.createElement(CardBody_1.default, null,
                React.createElement("div", { className: "mt-2 mb-2 intro" },
                    React.createElement("p", { className: "text-center" },
                        React.createElement("a", { href: SURVEY_LINK },
                            React.createElement("img", { src: EmbeddedImages_1.EmbeddedImages.SURVEY }))),
                    React.createElement("p", null,
                        "Could you take 2 minutes and ",
                        React.createElement("a", { href: SURVEY_LINK }, "answer 10 questions"),
                        " about your use of Polar?  We're trying to focus on the most important features for our user base and your feedback is critical!")))));
    }
}
exports.default = SurveyCard;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3VydmV5Q2FyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlN1cnZleUNhcmQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUMvQiwyREFBc0Q7QUFDdEQsd0VBQW1FO0FBQ25FLCtEQUF1QztBQUN2QywyRUFBbUQ7QUFDbkQsdUVBQStDO0FBRS9DLE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU1QixNQUFNLFdBQVcsR0FBRyw2Q0FBNkMsQ0FBQztBQUVsRSxNQUFxQixVQUFXLFNBQVEsS0FBSyxDQUFDLFNBQW1CO0lBRTdELFlBQVksS0FBVSxFQUFFLE9BQVk7UUFDaEMsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztJQUUxQixDQUFDO0lBRU0sTUFBTTtRQUVULE9BQU8sQ0FFSCxvQkFBQyxjQUFJO1lBQ0Qsb0JBQUMsb0JBQVU7Z0JBQUMsaURBQXNCLENBQWE7WUFDL0Msb0JBQUMsa0JBQVE7Z0JBRUwsNkJBQUssU0FBUyxFQUFDLGlCQUFpQjtvQkFFNUIsMkJBQUcsU0FBUyxFQUFDLGFBQWE7d0JBRTFCLDJCQUFHLElBQUksRUFBRSxXQUFXOzRCQUNwQiw2QkFBSyxHQUFHLEVBQUUsK0JBQWMsQ0FBQyxNQUFNLEdBQVEsQ0FDbkMsQ0FFQTtvQkFFSjs7d0JBQzZCLDJCQUFHLElBQUksRUFBRSxXQUFXLDBCQUM3QzsySkFJQSxDQUVGLENBRUMsQ0FDUixDQUVWLENBQUM7SUFDTixDQUFDO0NBRUo7QUF6Q0QsNkJBeUNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge0VtYmVkZGVkSW1hZ2VzfSBmcm9tICcuLi9zcGxhc2gyL3doYXRzX25ldy9FbWJlZGRlZEltYWdlcyc7XG5pbXBvcnQgQ2FyZCBmcm9tICdyZWFjdHN0cmFwL2xpYi9DYXJkJztcbmltcG9ydCBDYXJkSGVhZGVyIGZyb20gJ3JlYWN0c3RyYXAvbGliL0NhcmRIZWFkZXInO1xuaW1wb3J0IENhcmRCb2R5IGZyb20gJ3JlYWN0c3RyYXAvbGliL0NhcmRCb2R5JztcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG5jb25zdCBTVVJWRVlfTElOSyA9ICdodHRwczovL2tldmluYnVydG9uMS50eXBlZm9ybS5jb20vdG8vQnVYMUVmJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3VydmV5Q2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxhbnksIGFueT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IGFueSwgY29udGV4dDogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcblxuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgPENhcmQ+XG4gICAgICAgICAgICAgICAgPENhcmRIZWFkZXI+PGI+VGFrZSBvdXIgU3VydmV5PC9iPjwvQ2FyZEhlYWRlcj5cbiAgICAgICAgICAgICAgICA8Q2FyZEJvZHk+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yIG1iLTIgaW50cm9cIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17U1VSVkVZX0xJTkt9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e0VtYmVkZGVkSW1hZ2VzLlNVUlZFWX0+PC9pbWc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICBDb3VsZCB5b3UgdGFrZSAyIG1pbnV0ZXMgYW5kIDxhIGhyZWY9e1NVUlZFWV9MSU5LfT5hbnN3ZXIgMTAgcXVlc3Rpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+IGFib3V0XG4gICAgICAgICAgICAgICAgICAgICAgICB5b3VyIHVzZSBvZiBQb2xhcj8gIFdlJ3JlIHRyeWluZyB0byBmb2N1cyBvbiB0aGUgbW9zdFxuICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0YW50IGZlYXR1cmVzIGZvciBvdXIgdXNlciBiYXNlIGFuZCB5b3VyIGZlZWRiYWNrXG4gICAgICAgICAgICAgICAgICAgICAgICBpcyBjcml0aWNhbCFcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvQ2FyZEJvZHk+XG4gICAgICAgICAgICA8L0NhcmQ+XG5cbiAgICAgICAgKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUHJvcHMge1xuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVN0YXRlIHtcblxufVxuIl19