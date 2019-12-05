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
class SplitBarLeft extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const width = this.props.width || 250;
        return (React.createElement("div", { className: "split-bar-left", style: {
                marginTop: 'auto',
                marginBottom: 'auto',
                width,
                whiteSpace: 'nowrap'
            } }, this.props.children));
    }
}
exports.SplitBarLeft = SplitBarLeft;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3BsaXRCYXJMZWZ0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiU3BsaXRCYXJMZWZ0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSw2Q0FBK0I7QUFFL0IsTUFBYSxZQUFhLFNBQVEsS0FBSyxDQUFDLGFBQTBCO0lBRTlELFlBQVksS0FBVSxFQUFFLE9BQVk7UUFDaEMsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRU0sTUFBTTtRQUVULE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLEdBQUcsQ0FBQztRQUV0QyxPQUFPLENBRUgsNkJBQUssU0FBUyxFQUFDLGdCQUFnQixFQUMxQixLQUFLLEVBQUU7Z0JBQ0gsU0FBUyxFQUFFLE1BQU07Z0JBQ2pCLFlBQVksRUFBRSxNQUFNO2dCQUNwQixLQUFLO2dCQUNMLFVBQVUsRUFBRSxRQUFRO2FBQ3ZCLElBRUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBRWxCLENBRVQsQ0FBQztJQUNOLENBQUM7Q0FFSjtBQTNCRCxvQ0EyQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGNsYXNzIFNwbGl0QmFyTGVmdCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8SVByb3BzLCBhbnk+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBhbnksIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICBjb25zdCB3aWR0aCA9IHRoaXMucHJvcHMud2lkdGggfHwgMjUwO1xuXG4gICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BsaXQtYmFyLWxlZnRcIlxuICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAnYXV0bycsXG4gICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICdhdXRvJyxcbiAgICAgICAgICAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCdcbiAgICAgICAgICAgICAgICAgfX0+XG5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cblxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgKTtcbiAgICB9XG5cbn1cblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgcmVhZG9ubHkgd2lkdGg/OiBudW1iZXI7XG59XG4iXX0=