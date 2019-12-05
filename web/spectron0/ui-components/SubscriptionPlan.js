"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const NullCollapse_1 = require("../../js/ui/null_collapse/NullCollapse");
class SubscriptionPlan extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const { props } = this;
        const border = this.props.selected ? 'border-success' : 'border-secondary';
        return (React.createElement("div", { className: "p-2 m-1 shadow rounded border " + border, style: { width: '8em' } },
            React.createElement("div", { style: { display: 'flex' } },
                React.createElement("div", { className: "mt-auto mb-auto" },
                    React.createElement("span", { className: "text-bold text-lg" }, props.name)),
                React.createElement("div", { className: "mt-auto mb-auto ml-auto" },
                    React.createElement(NullCollapse_1.NullCollapse, { open: props.selected },
                        React.createElement("i", { className: "text-xxl text-success far fa-check-circle" })))),
            React.createElement("div", { className: "" },
                React.createElement("span", { className: "text-bold text-grey900 text-xxxl" }, props.capacity),
                React.createElement("span", { className: "text-bold text-grey900 text-lg" },
                    " ",
                    props.unit)),
            React.createElement("div", { className: "" },
                React.createElement("span", { className: "text-xxl text-grey400" },
                    "$",
                    React.createElement("span", { className: "text-bold text-grey800" }, props.price)),
                React.createElement("span", { className: "text-grey300 text-md" }, " / mo"))));
    }
}
exports.SubscriptionPlan = SubscriptionPlan;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3Vic2NyaXB0aW9uUGxhbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlN1YnNjcmlwdGlvblBsYW4udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUUvQix5RUFBb0U7QUFFcEUsTUFBYSxnQkFBaUIsU0FBUSxLQUFLLENBQUMsU0FBeUI7SUFFakUsWUFBWSxLQUFhLEVBQUUsT0FBWTtRQUNuQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFTSxNQUFNO1FBRVQsTUFBTSxFQUFDLEtBQUssRUFBQyxHQUFHLElBQUksQ0FBQztRQUVyQixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDO1FBRTNFLE9BQU8sQ0FFSCw2QkFBSyxTQUFTLEVBQUUsZ0NBQWdDLEdBQUcsTUFBTSxFQUNwRCxLQUFLLEVBQUUsRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFDO1lBRXRCLDZCQUFLLEtBQUssRUFBRSxFQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUM7Z0JBQ3pCLDZCQUFLLFNBQVMsRUFBQyxpQkFBaUI7b0JBQzVCLDhCQUFNLFNBQVMsRUFBQyxtQkFBbUIsSUFBRSxLQUFLLENBQUMsSUFBSSxDQUFRLENBQ3JEO2dCQUVOLDZCQUFLLFNBQVMsRUFBQyx5QkFBeUI7b0JBRXBDLG9CQUFDLDJCQUFZLElBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxRQUFRO3dCQUM5QiwyQkFBRyxTQUFTLEVBQUMsMkNBQTJDLEdBQUssQ0FDbEQsQ0FFYixDQUVKO1lBRU4sNkJBQUssU0FBUyxFQUFDLEVBQUU7Z0JBQ2IsOEJBQU0sU0FBUyxFQUFDLGtDQUFrQyxJQUFFLEtBQUssQ0FBQyxRQUFRLENBQVE7Z0JBQzFFLDhCQUFNLFNBQVMsRUFBQyxnQ0FBZ0M7O29CQUFHLEtBQUssQ0FBQyxJQUFJLENBQVEsQ0FDbkU7WUFFTiw2QkFBSyxTQUFTLEVBQUMsRUFBRTtnQkFDYiw4QkFBTSxTQUFTLEVBQUMsdUJBQXVCOztvQkFBRSw4QkFBTSxTQUFTLEVBQUMsd0JBQXdCLElBQUUsS0FBSyxDQUFDLEtBQUssQ0FBUSxDQUFPO2dCQUM3Ryw4QkFBTSxTQUFTLEVBQUMsc0JBQXNCLFlBQWEsQ0FDakQsQ0FDSixDQUVULENBQUM7SUFDTixDQUFDO0NBRUo7QUE5Q0QsNENBOENDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdHN0cmFwL2xpYi9CdXR0b24nO1xuaW1wb3J0IHtOdWxsQ29sbGFwc2V9IGZyb20gJy4uLy4uL2pzL3VpL251bGxfY29sbGFwc2UvTnVsbENvbGxhcHNlJztcblxuZXhwb3J0IGNsYXNzIFN1YnNjcmlwdGlvblBsYW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJUHJvcHMsIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICBjb25zdCB7cHJvcHN9ID0gdGhpcztcblxuICAgICAgICBjb25zdCBib3JkZXIgPSB0aGlzLnByb3BzLnNlbGVjdGVkID8gJ2JvcmRlci1zdWNjZXNzJyA6ICdib3JkZXItc2Vjb25kYXJ5JztcblxuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17XCJwLTIgbS0xIHNoYWRvdyByb3VuZGVkIGJvcmRlciBcIiArIGJvcmRlcn1cbiAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogJzhlbSd9fT5cblxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCd9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC1hdXRvIG1iLWF1dG9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYm9sZCB0ZXh0LWxnXCI+e3Byb3BzLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LWF1dG8gbWItYXV0byBtbC1hdXRvXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxOdWxsQ29sbGFwc2Ugb3Blbj17cHJvcHMuc2VsZWN0ZWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInRleHQteHhsIHRleHQtc3VjY2VzcyBmYXIgZmEtY2hlY2stY2lyY2xlXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9OdWxsQ29sbGFwc2U+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYm9sZCB0ZXh0LWdyZXk5MDAgdGV4dC14eHhsXCI+e3Byb3BzLmNhcGFjaXR5fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ib2xkIHRleHQtZ3JleTkwMCB0ZXh0LWxnXCI+IHtwcm9wcy51bml0fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHhsIHRleHQtZ3JleTQwMFwiPiQ8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJvbGQgdGV4dC1ncmV5ODAwXCI+e3Byb3BzLnByaWNlfTwvc3Bhbj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JleTMwMCB0ZXh0LW1kXCI+IC8gbW88L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICApO1xuICAgIH1cblxufVxuXG5cbmludGVyZmFjZSBJUHJvcHMge1xuICAgIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbiAgICByZWFkb25seSBjYXBhY2l0eTogc3RyaW5nO1xuICAgIHJlYWRvbmx5IHVuaXQ6IHN0cmluZztcbiAgICByZWFkb25seSBwcmljZTogc3RyaW5nO1xuICAgIHJlYWRvbmx5IHNlbGVjdGVkPzogYm9vbGVhbjtcbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG5cbn1cbiJdfQ==