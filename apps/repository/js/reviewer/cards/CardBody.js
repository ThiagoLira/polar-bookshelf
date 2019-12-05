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
class CardBody extends React.Component {
    render() {
        return this.props.children;
    }
}
exports.CardBody = CardBody;
CardBody.Main = class extends React.Component {
    render() {
        return React.createElement("div", { className: "p-1", style: {
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                overflowY: 'auto'
            } },
            React.createElement("div", { style: {
                    flexGrow: 1
                } }, this.props.children));
    }
};
CardBody.Footer = class extends React.Component {
    render() {
        return React.createElement("div", null,
            React.createElement("div", { className: "text-sm text-grey700 mb-1 ml-1" },
                React.createElement("b", null, "stage: "),
                " ",
                this.props.taskRep.stage),
            React.createElement("div", { style: {}, className: "text-center" }, this.props.children));
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FyZEJvZHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJDYXJkQm9keS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsNkNBQStCO0FBRy9CLE1BQWEsUUFBUyxTQUFRLEtBQUssQ0FBQyxTQUF5QjtJQUVsRCxNQUFNO1FBQ1QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztJQUMvQixDQUFDOztBQUpMLDRCQXFEQztBQS9DaUIsYUFBSSxHQUFHLEtBQU0sU0FBUSxLQUFLLENBQUMsU0FBeUI7SUFFdkQsTUFBTTtRQUVULE9BQU8sNkJBQUssU0FBUyxFQUFDLEtBQUssRUFDdEIsS0FBSyxFQUFFO2dCQUNILFFBQVEsRUFBRSxDQUFDO2dCQUNYLE9BQU8sRUFBRSxNQUFNO2dCQUNmLGFBQWEsRUFBRSxRQUFRO2dCQUN2QixTQUFTLEVBQUUsTUFBTTthQUNwQjtZQUVGLDZCQUFLLEtBQUssRUFBRTtvQkFDUixRQUFRLEVBQUUsQ0FBQztpQkFDZCxJQUVJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUVsQixDQUVKLENBQUE7SUFFVixDQUFDO0NBRUosQ0FBQztBQUVZLGVBQU0sR0FBRyxLQUFNLFNBQVEsS0FBSyxDQUFDLFNBQXlCO0lBRXpELE1BQU07UUFFVCxPQUFPO1lBRUgsNkJBQUssU0FBUyxFQUFDLGdDQUFnQztnQkFDM0MseUNBQWM7O2dCQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FDdEM7WUFFTiw2QkFBSyxLQUFLLEVBQUUsRUFBRSxFQUNULFNBQVMsRUFBQyxhQUFhLElBQ3ZCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNsQixDQUVKLENBQUM7SUFFWCxDQUFDO0NBRUosQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7VGFza1JlcH0gZnJvbSBcInBvbGFyLXNwYWNlZC1yZXBldGl0aW9uL3NyYy9zcGFjZWRfcmVwZXRpdGlvbi9zY2hlZHVsZXIvUzJQbHVzL1Rhc2tzQ2FsY3VsYXRvclwiO1xuXG5leHBvcnQgY2xhc3MgQ2FyZEJvZHkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgTWFpbiA9IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgICAgICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwicC0xXCJcbiAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgIGZsZXhHcm93OiAxLFxuICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgICAgICAgICAgICAgICBvdmVyZmxvd1k6ICdhdXRvJ1xuICAgICAgICAgICAgICAgICB9fT5cblxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgZmxleEdyb3c6IDFcbiAgICAgICAgICAgICAgICB9fT5cblxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgcHVibGljIHN0YXRpYyBGb290ZXIgPSBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgICAgIHJldHVybiA8ZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JleTcwMCBtYi0xIG1sLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgPGI+c3RhZ2U6IDwvYj4ge3RoaXMucHJvcHMudGFza1JlcC5zdGFnZX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t9fVxuICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PjtcblxuICAgICAgICB9XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUHJvcHMge1xuICAgIHJlYWRvbmx5IHRhc2tSZXA6IFRhc2tSZXA8YW55Pjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJU3RhdGUge1xuXG59XG4iXX0=