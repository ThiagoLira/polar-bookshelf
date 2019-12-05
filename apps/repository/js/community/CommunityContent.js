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
const DonationsCard_1 = __importDefault(require("./DonationsCard"));
const GithubStarsCard_1 = __importDefault(require("./GithubStarsCard"));
const SurveyCard_1 = __importDefault(require("./SurveyCard"));
const log = Logger_1.Logger.create();
class CommunityContent extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }
    render() {
        return (React.createElement("div", null,
            React.createElement("div", { className: "container-fluid p-0" },
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col-lg-6" },
                        React.createElement(DonationsCard_1.default, null)),
                    React.createElement("div", { className: "col-lg-6" },
                        React.createElement(GithubStarsCard_1.default, null))),
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col-lg-6" },
                        React.createElement(SurveyCard_1.default, null))))));
    }
}
exports.default = CommunityContent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tbXVuaXR5Q29udGVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNvbW11bml0eUNvbnRlbnQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUMvQiwyREFBc0Q7QUFDdEQsb0VBQTRDO0FBQzVDLHdFQUFnRDtBQUNoRCw4REFBc0M7QUFFdEMsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLE1BQXFCLGdCQUFpQixTQUFRLEtBQUssQ0FBQyxTQUF5QjtJQUV6RSxZQUFZLEtBQWEsRUFBRSxPQUFZO1FBQ25DLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUNaLENBQUM7SUFFTixDQUFDO0lBRU0sTUFBTTtRQUVULE9BQU8sQ0FFSDtZQUVJLDZCQUFLLFNBQVMsRUFBQyxxQkFBcUI7Z0JBRWhDLDZCQUFLLFNBQVMsRUFBQyxLQUFLO29CQUVoQiw2QkFBSyxTQUFTLEVBQUMsVUFBVTt3QkFDckIsb0JBQUMsdUJBQWEsT0FBRSxDQUNkO29CQUVOLDZCQUFLLFNBQVMsRUFBQyxVQUFVO3dCQUNyQixvQkFBQyx5QkFBZSxPQUFFLENBQ2hCLENBRUo7Z0JBR04sNkJBQUssU0FBUyxFQUFDLEtBQUs7b0JBT2hCLDZCQUFLLFNBQVMsRUFBQyxVQUFVO3dCQUNyQixvQkFBQyxvQkFBVSxPQUFFLENBQ1gsQ0FHSixDQUVKLENBK0JKLENBRVQsQ0FBQztJQUNOLENBQUM7Q0FFSjtBQWpGRCxtQ0FpRkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCBEb25hdGlvbnNDYXJkIGZyb20gJy4vRG9uYXRpb25zQ2FyZCc7XG5pbXBvcnQgR2l0aHViU3RhcnNDYXJkIGZyb20gJy4vR2l0aHViU3RhcnNDYXJkJztcbmltcG9ydCBTdXJ2ZXlDYXJkIGZyb20gJy4vU3VydmV5Q2FyZCc7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tbXVuaXR5Q29udGVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcywgY29udGV4dDogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICB9O1xuXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICA8ZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgcC0wXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEb25hdGlvbnNDYXJkLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdpdGh1YlN0YXJzQ2FyZC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8TWFpbGluZ0xpc3RDYXJkLz4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKjwvZGl2PiovfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3VydmV5Q2FyZC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgICAgIHsvKjxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uc1wiPiovfVxuXG4gICAgICAgICAgICAgICAgICAgIHsvKjxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uXCI+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyo8YSBocmVmPVwiaHR0cHM6Ly9kaXNjb3JkLmdnL0dUOE1oQTZcIj4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8aW1nIHNyYz1cImh0dHBzOi8vaW1nLnNoaWVsZHMuaW8vZGlzY29yZC80Nzc1NjA5NjQzMzQ3NDc2Njguc3ZnP2xvZ289ZGlzY29yZFwiLz4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKjwvYT4qL31cbiAgICAgICAgICAgICAgICAgICAgey8qPC9kaXY+Ki99XG5cbiAgICAgICAgICAgICAgICAgICAgey8qPGRpdiBjbGFzc05hbWU9XCJidXR0b25cIj4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYnVydG9uYXRvci9wb2xhci1ib29rc2hlbGYvcmVsZWFzZXNcIj4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8aW1nIHNyYz1cImh0dHBzOi8vaW1nLnNoaWVsZHMuaW8vZ2l0aHViL2Rvd25sb2Fkcy9idXJ0b25hdG9yL3BvbGFyLWJvb2tzaGVsZi90b3RhbC5zdmdcIi8+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyo8L2E+Ki99XG4gICAgICAgICAgICAgICAgICAgIHsvKjwvZGl2PiovfVxuXG4gICAgICAgICAgICAgICAgICAgIHsvKjxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uXCI+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyo8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2J1cnRvbmF0b3IvcG9sYXItYm9va3NoZWxmXCI+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPGltZyBzcmM9XCJodHRwczovL2ltZy5zaGllbGRzLmlvL2dpdGh1Yi9zdGFycy9idXJ0b25hdG9yL3BvbGFyLWJvb2tzaGVsZi5zdmc/c3R5bGU9c29jaWFsJmxhYmVsPVN0YXJcIi8+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyo8L2E+Ki99XG4gICAgICAgICAgICAgICAgICAgIHsvKjwvZGl2PiovfVxuXG4gICAgICAgICAgICAgICAgICAgIHsvKjxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uXCI+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyo8YSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9nZXRwb2xhcml6ZWQ/cmVmX3NyYz10d3NyYyU1RXRmd1wiPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxpbWcgc3JjPVwiaHR0cHM6Ly9pbWcuc2hpZWxkcy5pby90d2l0dGVyL2ZvbGxvdy9nZXRwb2xhcml6ZWQuc3ZnP3N0eWxlPXNvY2lhbCZsYWJlbD1Gb2xsb3dcIi8+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyo8L2E+Ki99XG4gICAgICAgICAgICAgICAgICAgIHsvKjwvZGl2PiovfVxuXG4gICAgICAgICAgICAgICAgey8qPC9kaXY+Ki99XG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVByb3BzIHtcblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElTdGF0ZSB7XG5cbn1cbiJdfQ==