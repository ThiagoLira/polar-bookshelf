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
class CrowdfundingStatus extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (React.createElement("div", { className: "p-1 border rounded", style: {
                backgroundColor: 'lightyellow',
                display: 'flex'
            } },
            React.createElement("div", { className: "mt-auto mb-auto w-100" },
                React.createElement("progress", { className: "mt-auto mb-auto w-100", value: 0.33 })),
            React.createElement("div", { className: "mt-auto mb-auto ml-1", style: { whiteSpace: 'nowrap' } },
                React.createElement("span", { style: { fontWeight: 'bold' } }, "$3,300"),
                " of ",
                React.createElement("span", { className: "text-muted" }, "$5,000"),
                " raised"),
            React.createElement("div", { className: "mv-auto ml-1" },
                React.createElement(Button_1.default, { color: "success", size: "sm" }, "Donate"))));
    }
}
exports.CrowdfundingStatus = CrowdfundingStatus;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3Jvd2RmdW5kaW5nU3RhdHVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQ3Jvd2RmdW5kaW5nU3RhdHVzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBK0I7QUFDL0IsbUVBQTJDO0FBRTNDLE1BQWEsa0JBQW1CLFNBQVEsS0FBSyxDQUFDLFNBQXlCO0lBRW5FLFlBQVksS0FBYSxFQUFFLE9BQVk7UUFDbkMsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRU0sTUFBTTtRQUVULE9BQU8sQ0FFSCw2QkFBSyxTQUFTLEVBQUMsb0JBQW9CLEVBQzlCLEtBQUssRUFBRTtnQkFDSCxlQUFlLEVBQUUsYUFBYTtnQkFDOUIsT0FBTyxFQUFFLE1BQU07YUFDbEI7WUFFRiw2QkFBSyxTQUFTLEVBQUMsdUJBQXVCO2dCQUNsQyxrQ0FBVSxTQUFTLEVBQUMsdUJBQXVCLEVBQUMsS0FBSyxFQUFFLElBQUksR0FBRyxDQUN4RDtZQUVOLDZCQUFLLFNBQVMsRUFBQyxzQkFBc0IsRUFBQyxLQUFLLEVBQUUsRUFBQyxVQUFVLEVBQUUsUUFBUSxFQUFDO2dCQUMvRCw4QkFBTSxLQUFLLEVBQUUsRUFBQyxVQUFVLEVBQUUsTUFBTSxFQUFDLGFBQWU7O2dCQUFJLDhCQUFNLFNBQVMsRUFBQyxZQUFZLGFBQWM7MEJBQzVGO1lBRU4sNkJBQUssU0FBUyxFQUFDLGNBQWM7Z0JBQ3pCLG9CQUFDLGdCQUFNLElBQUMsS0FBSyxFQUFDLFNBQVMsRUFBQyxJQUFJLEVBQUMsSUFBSSxhQUFnQixDQUMvQyxDQUVKLENBRVQsQ0FBQztJQUNOLENBQUM7Q0FFSjtBQWpDRCxnREFpQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0c3RyYXAvbGliL0J1dHRvbic7XG5cbmV4cG9ydCBjbGFzcyBDcm93ZGZ1bmRpbmdTdGF0dXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJUHJvcHMsIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMSBib3JkZXIgcm91bmRlZFwiXG4gICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdsaWdodHllbGxvdycsXG4gICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCdcbiAgICAgICAgICAgICAgICAgfX0+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LWF1dG8gbWItYXV0byB3LTEwMFwiPlxuICAgICAgICAgICAgICAgICAgICA8cHJvZ3Jlc3MgY2xhc3NOYW1lPVwibXQtYXV0byBtYi1hdXRvIHctMTAwXCIgdmFsdWU9ezAuMzN9Lz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtYXV0byBtYi1hdXRvIG1sLTFcIiBzdHlsZT17e3doaXRlU3BhY2U6ICdub3dyYXAnfX0+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7Zm9udFdlaWdodDogJ2JvbGQnfX0+JDMsMzAwPC9zcGFuPiBvZiA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+JDUsMDAwPC9zcGFuPiByYWlzZWRcbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXYtYXV0byBtbC0xXCI+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJzdWNjZXNzXCIgc2l6ZT1cInNtXCI+RG9uYXRlPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICk7XG4gICAgfVxuXG59XG5cblxuaW50ZXJmYWNlIElQcm9wcyB7XG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xuXG59XG4iXX0=