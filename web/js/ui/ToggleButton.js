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
class ToggleButton extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = { value: this.props.initialValue !== undefined ? this.props.initialValue : false };
        this.toggle = this.toggle.bind(this);
    }
    render() {
        const createIconClassName = () => {
            if (this.props.iconClassName) {
                return this.props.iconClassName;
            }
            if (this.state.value) {
                return 'fas fa-check';
            }
            else {
                return 'fas fa-minus';
            }
        };
        const bgClassName = this.state.value ? 'bg-primary' : 'bg-secondary';
        const iconClassName = createIconClassName();
        ;
        return (React.createElement(Button_1.default, { id: this.props.id || "", color: "light p-0 pr-0 border rounded", onClick: () => this.toggle(), size: this.props.size || 'sm' },
            React.createElement("div", { style: { display: 'flex' } },
                React.createElement("div", { className: bgClassName + " p-1 text-light rounded-left", style: { verticalAlign: 'middle', textAlign: 'center', width: '2.5em' } },
                    "\u00A0",
                    React.createElement("i", { className: iconClassName }),
                    "\u00A0"),
                React.createElement("div", { className: "p-1 pr-2 d-none-mobile", style: { verticalAlign: 'middle' } },
                    "\u00A0",
                    this.props.label))));
    }
    toggle() {
        const value = !this.state.value;
        this.setState(Object.assign(Object.assign({}, this.state), { value }));
        this.props.onChange(value);
    }
}
exports.ToggleButton = ToggleButton;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9nZ2xlQnV0dG9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVG9nZ2xlQnV0dG9uLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBK0I7QUFDL0IsbUVBQTJDO0FBRTNDLE1BQWEsWUFBYSxTQUFRLEtBQUssQ0FBQyxTQUF5QjtJQUU3RCxZQUFZLEtBQWEsRUFBRSxPQUFZO1FBQ25DLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUMsQ0FBQztRQUU5RixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRXpDLENBQUM7SUFFTSxNQUFNO1FBRVQsTUFBTSxtQkFBbUIsR0FBRyxHQUFHLEVBQUU7WUFFN0IsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRTtnQkFDMUIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQzthQUNuQztZQUVELElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUU7Z0JBQ2xCLE9BQU8sY0FBYyxDQUFDO2FBQ3pCO2lCQUFNO2dCQUNILE9BQU8sY0FBYyxDQUFDO2FBQ3pCO1FBRUwsQ0FBQyxDQUFDO1FBRUYsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDO1FBQ3JFLE1BQU0sYUFBYSxHQUFHLG1CQUFtQixFQUFFLENBQUM7UUFBQSxDQUFDO1FBRTdDLE9BQU8sQ0FFSCxvQkFBQyxnQkFBTSxJQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQ3ZCLEtBQUssRUFBQywrQkFBK0IsRUFDckMsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFDNUIsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFLLElBQUk7WUFFbEMsNkJBQUssS0FBSyxFQUFFLEVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBQztnQkFFekIsNkJBQUssU0FBUyxFQUFFLFdBQVcsR0FBRyw4QkFBOEIsRUFDdkQsS0FBSyxFQUFFLEVBQUMsYUFBYSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUM7O29CQUVoRSwyQkFBRyxTQUFTLEVBQUUsYUFBYSxHQUFNOzZCQUVyQztnQkFFTiw2QkFBSyxTQUFTLEVBQUMsd0JBQXdCLEVBQ2xDLEtBQUssRUFBRSxFQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUM7O29CQUMxQixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FDckIsQ0FFSixDQUVELENBRVosQ0FBQztJQUNOLENBQUM7SUFFTSxNQUFNO1FBRVQsTUFBTSxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUNoQyxJQUFJLENBQUMsUUFBUSxpQ0FBSyxJQUFJLENBQUMsS0FBSyxLQUFFLEtBQUssSUFBRSxDQUFDO1FBRXRDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRS9CLENBQUM7Q0FHSjtBQXBFRCxvQ0FvRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0c3RyYXAvbGliL0J1dHRvbic7XG5cbmV4cG9ydCBjbGFzcyBUb2dnbGVCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJUHJvcHMsIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHt2YWx1ZTogdGhpcy5wcm9wcy5pbml0aWFsVmFsdWUgIT09IHVuZGVmaW5lZCA/IHRoaXMucHJvcHMuaW5pdGlhbFZhbHVlIDogZmFsc2V9O1xuXG4gICAgICAgIHRoaXMudG9nZ2xlID0gdGhpcy50b2dnbGUuYmluZCh0aGlzKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgY29uc3QgY3JlYXRlSWNvbkNsYXNzTmFtZSA9ICgpID0+IHtcblxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuaWNvbkNsYXNzTmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzLmljb25DbGFzc05hbWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdmYXMgZmEtY2hlY2snO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2ZhcyBmYS1taW51cyc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBiZ0NsYXNzTmFtZSA9IHRoaXMuc3RhdGUudmFsdWUgPyAnYmctcHJpbWFyeScgOiAnYmctc2Vjb25kYXJ5JztcbiAgICAgICAgY29uc3QgaWNvbkNsYXNzTmFtZSA9IGNyZWF0ZUljb25DbGFzc05hbWUoKTs7XG5cbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgPEJ1dHRvbiBpZD17dGhpcy5wcm9wcy5pZCB8fCBcIlwifVxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImxpZ2h0IHAtMCBwci0wIGJvcmRlciByb3VuZGVkXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy50b2dnbGUoKX1cbiAgICAgICAgICAgICAgICAgICAgc2l6ZT17dGhpcy5wcm9wcy5zaXplICB8fCAnc20nfT5cblxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCd9fT5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YmdDbGFzc05hbWUgKyBcIiBwLTEgdGV4dC1saWdodCByb3VuZGVkLWxlZnRcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3ZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLCB0ZXh0QWxpZ246ICdjZW50ZXInLCB3aWR0aDogJzIuNWVtJ319PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDs8aSBjbGFzc05hbWU9e2ljb25DbGFzc05hbWV9PjwvaT4mbmJzcDtcblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMSBwci0yIGQtbm9uZS1tb2JpbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7dmVydGljYWxBbGlnbjogJ21pZGRsZSd9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwO3t0aGlzLnByb3BzLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L0J1dHRvbj5cblxuICAgICAgICApO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b2dnbGUoKSB7XG5cbiAgICAgICAgY29uc3QgdmFsdWUgPSAhdGhpcy5zdGF0ZS52YWx1ZTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Li4udGhpcy5zdGF0ZSwgdmFsdWV9KTtcblxuICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHZhbHVlKTtcblxuICAgIH1cblxuXG59XG5cblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgcmVhZG9ubHkgaWQ/OiBzdHJpbmc7XG4gICAgcmVhZG9ubHkgaW5pdGlhbFZhbHVlPzogYm9vbGVhbjtcbiAgICByZWFkb25seSBsYWJlbDogc3RyaW5nO1xuICAgIHJlYWRvbmx5IGljb25DbGFzc05hbWU/OiBzdHJpbmc7XG4gICAgcmVhZG9ubHkgb25DaGFuZ2U6ICh2YWx1ZTogYm9vbGVhbikgPT4gdm9pZDtcbiAgICByZWFkb25seSBzaXplPzogJ3NtJyB8ICdtZCcgfCAnbGcnO1xufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcblxuICAgIHJlYWRvbmx5IHZhbHVlOiBib29sZWFuO1xuXG59XG5cblxuIl19