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
const Button_1 = __importDefault(require("reactstrap/lib/Button"));
const Input_1 = __importDefault(require("reactstrap/lib/Input"));
class FreeFormFeedback extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.text = "";
        this.onSendFeedback = this.onSendFeedback.bind(this);
        this.state = {
            completed: false
        };
    }
    render() {
        return React.createElement("div", { className: "" },
            React.createElement("div", null,
                "Thanks! How could we make Polar even better? We read ",
                React.createElement("b", null, "all"),
                " user feedback and your suggestions are very important to the future of Polar!"),
            React.createElement(Input_1.default, { type: "textarea", name: "text", onChange: value => this.text = value.target.value || "", style: {
                    width: '100%',
                    height: '100%'
                } }),
            React.createElement(Button_1.default, { color: "primary", onClick: () => this.onSendFeedback() }, "Send Feedback"));
    }
    onSendFeedback() {
    }
}
exports.FreeFormFeedback = FreeFormFeedback;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRnJlZUZvcm1GZWVkYmFjay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkZyZWVGb3JtRmVlZGJhY2sudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUMvQixtRUFBMkM7QUFDM0MsaUVBQXlDO0FBU3pDLE1BQWEsZ0JBQWlCLFNBQVEsS0FBSyxDQUFDLFNBQXlCO0lBSWpFLFlBQVksS0FBVSxFQUFFLE9BQVk7UUFDaEMsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztRQUhsQixTQUFJLEdBQVcsRUFBRSxDQUFDO1FBS3RCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFckQsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNULFNBQVMsRUFBRSxLQUFLO1NBQ25CLENBQUM7SUFFTixDQUFDO0lBRU0sTUFBTTtRQUVULE9BQU8sNkJBQUssU0FBUyxFQUFDLEVBQUU7WUFFcEI7O2dCQUVTLHFDQUFVO2lHQUdiO1lBRU4sb0JBQUMsZUFBSyxJQUFDLElBQUksRUFBQyxVQUFVLEVBQ2YsSUFBSSxFQUFDLE1BQU0sRUFDWCxRQUFRLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLEVBQUUsRUFDdkQsS0FBSyxFQUFFO29CQUNILEtBQUssRUFBRSxNQUFNO29CQUNiLE1BQU0sRUFBRSxNQUFNO2lCQUNqQixHQUFHO1lBRVgsb0JBQUMsZ0JBQU0sSUFBQyxLQUFLLEVBQUMsU0FBUyxFQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLG9CQUF3QixDQUVsRixDQUFDO0lBRVgsQ0FBQztJQUVPLGNBQWM7SUFTdEIsQ0FBQztDQUVKO0FBbkRELDRDQW1EQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3RzdHJhcC9saWIvQnV0dG9uJztcbmltcG9ydCBJbnB1dCBmcm9tICdyZWFjdHN0cmFwL2xpYi9JbnB1dCc7XG5pbXBvcnQge1JhdGluZ30gZnJvbSAnLi9GZWVkYmFjayc7XG5pbXBvcnQge0lTT0RhdGVUaW1lU3RyaW5nc30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9tZXRhZGF0YS9JU09EYXRlVGltZVN0cmluZ3MnO1xuaW1wb3J0IHtVc2VyRmVlZGJhY2tzfSBmcm9tICcuLi8uLi90ZWxlbWV0cnkvVXNlckZlZWRiYWNrJztcbmltcG9ydCB7TWFjaGluZUlEc30gZnJvbSAnLi4vLi4vdXRpbC9NYWNoaW5lSURzJztcblxuLyoqXG4gKiBARGVwcmVjYXRlZCB0aGlzIGlzIGR1cGxpY2F0ZWQgd2l0aCBTdWdnZXN0aW9ucy4gIFJlbW92ZS5cbiAqL1xuZXhwb3J0IGNsYXNzIEZyZWVGb3JtRmVlZGJhY2sgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICAgIHByaXZhdGUgdGV4dDogc3RyaW5nID0gXCJcIjtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBhbnksIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG5cbiAgICAgICAgdGhpcy5vblNlbmRGZWVkYmFjayA9IHRoaXMub25TZW5kRmVlZGJhY2suYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgY29tcGxldGVkOiBmYWxzZVxuICAgICAgICB9O1xuXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJcIj5cblxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICBUaGFua3MhIEhvdyBjb3VsZCB3ZSBtYWtlIFBvbGFyIGV2ZW4gYmV0dGVyPyBXZVxuICAgICAgICAgICAgICAgIHJlYWQgPGI+YWxsPC9iPiB1c2VyXG4gICAgICAgICAgICAgICAgZmVlZGJhY2sgYW5kIHlvdXIgc3VnZ2VzdGlvbnMgYXJlIHZlcnlcbiAgICAgICAgICAgICAgICBpbXBvcnRhbnQgdG8gdGhlIGZ1dHVyZSBvZiBQb2xhciFcbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRhcmVhXCJcbiAgICAgICAgICAgICAgICAgICBuYW1lPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3ZhbHVlID0+IHRoaXMudGV4dCA9IHZhbHVlLnRhcmdldC52YWx1ZSB8fCBcIlwifVxuICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMCUnXG4gICAgICAgICAgICAgICAgICAgfX0vPlxuXG4gICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIG9uQ2xpY2s9eygpID0+IHRoaXMub25TZW5kRmVlZGJhY2soKX0+U2VuZCBGZWVkYmFjazwvQnV0dG9uPlxuXG4gICAgICAgIDwvZGl2PjtcblxuICAgIH1cblxuICAgIHByaXZhdGUgb25TZW5kRmVlZGJhY2soKSB7XG5cbiAgICAgICAgLy8gVXNlckZlZWRiYWNrcy53cml0ZSh7XG4gICAgICAgIC8vICAgICBuZXRQcm9tb3RlclNjb3JlOiB0aGlzLnByb3BzLnJhdGluZyxcbiAgICAgICAgLy8gICAgIHRleHQ6IHRoaXMudGV4dCxcbiAgICAgICAgLy8gICAgIGNyZWF0ZWQ6IElTT0RhdGVUaW1lU3RyaW5ncy5jcmVhdGUoKSxcbiAgICAgICAgLy8gICAgIG1hY2hpbmU6IE1hY2hpbmVJRHMuZ2V0KClcbiAgICAgICAgLy8gfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoXCJnb3QgZXJyb3I6IFwiLCBlcnIpKTtcblxuICAgIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgcmVhZG9ubHkgcmF0aW5nOiBSYXRpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVN0YXRlIHtcbn1cbiJdfQ==