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
class Row extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (React.createElement("div", { className: this.props.className, id: this.props.id, style: Object.assign(Object.assign({}, (this.props.style || {})), { display: 'flex', flexDirection: 'row' }) }, this.props.children));
    }
}
exports.Row = Row;
Row.Main = class extends React.PureComponent {
    render() {
        return (React.createElement("div", { className: "react-row-main", style: {
                flexGrow: 1,
                display: 'flex'
            } },
            React.createElement("div", { className: "mt-auto mb-auto" }, this.props.children)));
    }
};
Row.Left = class extends React.PureComponent {
    render() {
        return (React.createElement("div", { className: "mt-auto mb-auto", style: {
                display: 'flex'
            } }, this.props.children));
    }
};
Row.Right = class extends React.PureComponent {
    render() {
        return (React.createElement("div", { className: "mt-auto mb-auto", style: {
                display: 'flex'
            } }, this.props.children));
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm93LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUm93LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSw2Q0FBK0I7QUFFL0IsTUFBYSxHQUFJLFNBQVEsS0FBSyxDQUFDLGFBQTBCO0lBRXJELFlBQVksS0FBYSxFQUFFLE9BQVk7UUFDbkMsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRU0sTUFBTTtRQUVULE9BQU8sQ0FFSCw2QkFBSyxTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQy9CLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFDakIsS0FBSyxrQ0FDRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxLQUMzQixPQUFPLEVBQUUsTUFBTSxFQUNmLGFBQWEsRUFBRSxLQUFLLE9BR3hCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUVsQixDQUNULENBQUM7SUFFTixDQUFDOztBQXZCTCxrQkFpRkM7QUF4RFUsUUFBSSxHQUFHLEtBQU0sU0FBUSxLQUFLLENBQUMsYUFBdUI7SUFFOUMsTUFBTTtRQUVULE9BQU8sQ0FFSCw2QkFBSyxTQUFTLEVBQUMsZ0JBQWdCLEVBQzFCLEtBQUssRUFBRTtnQkFDSCxRQUFRLEVBQUUsQ0FBQztnQkFDWCxPQUFPLEVBQUUsTUFBTTthQUNsQjtZQUVGLDZCQUFLLFNBQVMsRUFBQyxpQkFBaUIsSUFDM0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2xCLENBRUosQ0FDVCxDQUFDO0lBQ04sQ0FBQztDQUVKLENBQUM7QUFFSyxRQUFJLEdBQUcsS0FBTSxTQUFRLEtBQUssQ0FBQyxhQUF1QjtJQUU5QyxNQUFNO1FBRVQsT0FBTyxDQUVILDZCQUFLLFNBQVMsRUFBQyxpQkFBaUIsRUFDM0IsS0FBSyxFQUFFO2dCQUNILE9BQU8sRUFBRSxNQUFNO2FBQ2xCLElBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2xCLENBQ1QsQ0FBQztJQUNOLENBQUM7Q0FFSixDQUFDO0FBRUssU0FBSyxHQUFHLEtBQU0sU0FBUSxLQUFLLENBQUMsYUFBdUI7SUFFL0MsTUFBTTtRQUVULE9BQU8sQ0FFSCw2QkFBSyxTQUFTLEVBQUMsaUJBQWlCLEVBQzNCLEtBQUssRUFBRTtnQkFDSixPQUFPLEVBQUUsTUFBTTthQUNqQixJQUNELElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNsQixDQUNULENBQUM7SUFDTixDQUFDO0NBRUosQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGNsYXNzIFJvdyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8SVByb3BzLCBhbnk+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJUHJvcHMsIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWV9XG4gICAgICAgICAgICAgICAgIGlkPXt0aGlzLnByb3BzLmlkfVxuICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgLi4uKHRoaXMucHJvcHMuc3R5bGUgfHwge30pLFxuICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ3JvdydcbiAgICAgICAgICAgICAgICAgfX0+XG5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG5cbiAgICB9XG5cbiAgICBzdGF0aWMgTWFpbiA9IGNsYXNzIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxhbnksIGFueT57XG5cbiAgICAgICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVhY3Qtcm93LW1haW5cIlxuICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4R3JvdzogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCdcbiAgICAgICAgICAgICAgICAgICAgIH19PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtYXV0byBtYi1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICBzdGF0aWMgTGVmdCA9IGNsYXNzIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxhbnksIGFueT57XG5cbiAgICAgICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtYXV0byBtYi1hdXRvXCJcbiAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnXG4gICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgc3RhdGljIFJpZ2h0ID0gY2xhc3MgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PGFueSwgYW55PntcblxuICAgICAgICBwdWJsaWMgcmVuZGVyKCkge1xuXG4gICAgICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC1hdXRvIG1iLWF1dG9cIlxuICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4J1xuICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxufVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgICByZWFkb25seSBpZD86IHN0cmluZztcbiAgICByZWFkb25seSBjbGFzc05hbWU/OiBzdHJpbmc7XG4gICAgcmVhZG9ubHkgc3R5bGU/OiBSZWFjdC5DU1NQcm9wZXJ0aWVzO1xufVxuIl19