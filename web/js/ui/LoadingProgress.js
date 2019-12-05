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
class LoadingProgress extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (React.createElement("div", { className: "mt-2 mb-2", style: {
                display: 'flex',
                color: 'var(--primary)',
                opacity: 0.8
            } },
            React.createElement("div", { className: "fa-6x ml-auto mr-auto" },
                React.createElement("i", { className: "fas fa-circle-notch fa-spin" }))));
    }
}
exports.LoadingProgress = LoadingProgress;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9hZGluZ1Byb2dyZXNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiTG9hZGluZ1Byb2dyZXNzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSw2Q0FBK0I7QUFFL0IsTUFBYSxlQUFnQixTQUFRLEtBQUssQ0FBQyxTQUF5QjtJQUVoRSxZQUFZLEtBQWEsRUFBRSxPQUFZO1FBQ25DLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVNLE1BQU07UUFFVCxPQUFPLENBQ0gsNkJBQUssU0FBUyxFQUFDLFdBQVcsRUFDckIsS0FBSyxFQUFFO2dCQUNILE9BQU8sRUFBRSxNQUFNO2dCQUNmLEtBQUssRUFBRSxnQkFBZ0I7Z0JBQ3ZCLE9BQU8sRUFBRSxHQUFHO2FBQ2Y7WUFFRiw2QkFBSyxTQUFTLEVBQUMsdUJBQXVCO2dCQUNsQywyQkFBRyxTQUFTLEVBQUMsNkJBQTZCLEdBQUUsQ0FDMUMsQ0FFSixDQUNULENBQUM7SUFDTixDQUFDO0NBRUo7QUF4QkQsMENBd0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgY2xhc3MgTG9hZGluZ1Byb2dyZXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzLCBjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMiBtYi0yXCJcbiAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAndmFyKC0tcHJpbWFyeSknLFxuICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC44XG4gICAgICAgICAgICAgICAgIH19PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmYS02eCBtbC1hdXRvIG1yLWF1dG9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNpcmNsZS1ub3RjaCBmYS1zcGluXCIvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUHJvcHMge1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElTdGF0ZSB7XG59XG4iXX0=