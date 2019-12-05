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
const SimpleTooltipEx_1 = require("../../../../../web/js/ui/tooltip/SimpleTooltipEx");
class MultiDeleteButton extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }
    render() {
        return (React.createElement("div", null,
            React.createElement(SimpleTooltipEx_1.SimpleTooltipEx, { text: "Delete multiple documents at once.", disabled: this.props.disabled, placement: "bottom" },
                React.createElement(Button_1.default, { id: "multi-delete-button", size: "md", color: "light", className: "border", disabled: this.props.disabled, onClick: () => this.onClick() },
                    React.createElement("span", { className: "text-danger" },
                        React.createElement("i", { className: "fas fa-trash-alt" }))))));
    }
    onClick() {
        if (this.props.disabled) {
            return;
        }
        this.props.onClick();
    }
}
exports.MultiDeleteButton = MultiDeleteButton;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTXVsdGlEZWxldGVCdXR0b24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJNdWx0aURlbGV0ZUJ1dHRvbi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQStCO0FBQy9CLG1FQUEyQztBQUMzQyxzRkFBaUY7QUFFakYsTUFBYSxpQkFBa0IsU0FBUSxLQUFLLENBQUMsU0FBeUI7SUFFbEUsWUFBWSxLQUFhLEVBQUUsT0FBWTtRQUNuQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRXRCLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFDWixDQUFDO0lBRU4sQ0FBQztJQUVNLE1BQU07UUFFVCxPQUFPLENBQUM7WUFFSixvQkFBQyxpQ0FBZSxJQUFDLElBQUksRUFBQyxvQ0FBb0MsRUFDekMsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUM3QixTQUFTLEVBQUMsUUFBUTtnQkFFL0Isb0JBQUMsZ0JBQU0sSUFBQyxFQUFFLEVBQUMscUJBQXFCLEVBQ3hCLElBQUksRUFBQyxJQUFJLEVBQ1QsS0FBSyxFQUFDLE9BQU8sRUFDYixTQUFTLEVBQUMsUUFBUSxFQUNsQixRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQzdCLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO29CQUVqQyw4QkFBTSxTQUFTLEVBQUMsYUFBYTt3QkFDekIsMkJBQUcsU0FBUyxFQUFDLGtCQUFrQixHQUFLLENBQ2pDLENBRUYsQ0FFSyxDQUVoQixDQUFDLENBQUM7SUFFWixDQUFDO0lBRU8sT0FBTztRQUVYLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUU7WUFDckIsT0FBTztTQUNWO1FBRUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUV6QixDQUFDO0NBRUo7QUEvQ0QsOENBK0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdHN0cmFwL2xpYi9CdXR0b24nO1xuaW1wb3J0IHtTaW1wbGVUb29sdGlwRXh9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3dlYi9qcy91aS90b29sdGlwL1NpbXBsZVRvb2x0aXBFeCc7XG5cbmV4cG9ydCBjbGFzcyBNdWx0aURlbGV0ZUJ1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcywgY29udGV4dDogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICB9O1xuXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKDxkaXY+XG5cbiAgICAgICAgICAgIDxTaW1wbGVUb29sdGlwRXggdGV4dD1cIkRlbGV0ZSBtdWx0aXBsZSBkb2N1bWVudHMgYXQgb25jZS5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50PVwiYm90dG9tXCI+XG5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIGlkPVwibXVsdGktZGVsZXRlLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLm9uQ2xpY2soKX0+XG5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS10cmFzaC1hbHRcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cblxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuXG4gICAgICAgICAgICA8L1NpbXBsZVRvb2x0aXBFeD5cblxuICAgICAgICA8L2Rpdj4pO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkNsaWNrKCkge1xuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnByb3BzLm9uQ2xpY2soKTtcblxuICAgIH1cblxufVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgICByZWFkb25seSBkaXNhYmxlZD86IGJvb2xlYW47XG4gICAgcmVhZG9ubHkgb25DbGljazogKCkgPT4gdm9pZDtcbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG59XG4iXX0=