"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const NullCollapse_1 = require("../null_collapse/NullCollapse");
class DialogContainer extends react_1.default.PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        return (react_1.default.createElement(NullCollapse_1.NullCollapse, { open: this.props.open },
            react_1.default.createElement("div", { className: "", style: {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    display: 'flex'
                } },
                react_1.default.createElement("div", { style: {
                        margin: 'auto',
                        zIndex: 100000000,
                    } },
                    react_1.default.createElement("div", { className: "m-1 rounded", style: {
                            backgroundColor: 'var(--white)',
                            maxWidth: '650px'
                        } }, this.props.children)))));
    }
}
exports.DialogContainer = DialogContainer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGlhbG9nQ29udGFpbmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRGlhbG9nQ29udGFpbmVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGtEQUEwQjtBQUMxQixnRUFBMkQ7QUFLM0QsTUFBYSxlQUFnQixTQUFRLGVBQUssQ0FBQyxhQUFtQztJQUUxRSxZQUFZLEtBQVU7UUFDbEIsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRWpCLENBQUM7SUFFTSxNQUFNO1FBRVQsT0FBTyxDQUVILDhCQUFDLDJCQUFZLElBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSTtZQUUvQix1Q0FBSyxTQUFTLEVBQUMsRUFBRSxFQUNaLEtBQUssRUFBRTtvQkFDSCxRQUFRLEVBQUUsVUFBVTtvQkFDcEIsR0FBRyxFQUFFLENBQUM7b0JBQ04sSUFBSSxFQUFFLENBQUM7b0JBQ1AsS0FBSyxFQUFFLE1BQU07b0JBQ2IsTUFBTSxFQUFFLE1BQU07b0JBQ2QsT0FBTyxFQUFFLE1BQU07aUJBQ25CO2dCQUVELHVDQUFLLEtBQUssRUFBRTt3QkFDSixNQUFNLEVBQUUsTUFBTTt3QkFDZCxNQUFNLEVBQUUsU0FBUztxQkFDbkI7b0JBRUYsdUNBQUssU0FBUyxFQUFDLGFBQWEsRUFDdkIsS0FBSyxFQUFFOzRCQUNILGVBQWUsRUFBRSxjQUFjOzRCQUMvQixRQUFRLEVBQUUsT0FBTzt5QkFDcEIsSUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDbEIsQ0FFSixDQUVKLENBRUssQ0FFbEIsQ0FBQztJQUVOLENBQUM7Q0FFSjtBQTlDRCwwQ0E4Q0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtOdWxsQ29sbGFwc2V9IGZyb20gJy4uL251bGxfY29sbGFwc2UvTnVsbENvbGxhcHNlJztcblxuLyoqXG4gKiBVc2VkIHRvIGhvbGQgYSBkaWFsb2cgYW5kIHRvIGNlbnRlciBpdCBvbiB0aGUgc2NyZWVuIGFuZCBzbyBmb3J0aC5cbiAqL1xuZXhwb3J0IGNsYXNzIERpYWxvZ0NvbnRhaW5lciBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8Q29uZmlybVByb3BzLCBJU3RhdGU+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICA8TnVsbENvbGxhcHNlIG9wZW49e3RoaXMucHJvcHMub3Blbn0+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiXG4gICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnXG4gICAgICAgICAgICAgICAgICAgIH19PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46ICdhdXRvJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB6SW5kZXg6IDEwMDAwMDAwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTEgcm91bmRlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd2YXIoLS13aGl0ZSknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6ICc2NTBweCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L051bGxDb2xsYXBzZT5cblxuICAgICAgICApO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlybVByb3BzIHtcbiAgICByZWFkb25seSBvcGVuOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElTdGF0ZSB7XG5cbn1cbiJdfQ==