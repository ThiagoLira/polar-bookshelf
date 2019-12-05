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
const reactstrap_1 = require("reactstrap");
class RefreshButton extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            nav: 'none'
        };
    }
    componentDidMount() {
        this.props.navigationReactor.addEventListener(event => {
            if (event.type === 'did-start-loading') {
                this.setState({
                    nav: 'loading'
                });
            }
            if (event.type === 'did-stop-loading') {
                this.setState({
                    nav: 'loaded'
                });
            }
        });
    }
    render() {
        let navButtonClassName = '';
        let disabled = false;
        switch (this.state.nav) {
            case 'none':
                navButtonClassName = 'fas fa-sync fa-lg';
                disabled = true;
                break;
            case 'loading':
                navButtonClassName = 'fas fa-sync fa-lg fa-spin';
                disabled = false;
                break;
            case 'loaded':
                navButtonClassName = 'fas fa-sync fa-lg';
                disabled = false;
                break;
        }
        ;
        return (React.createElement(reactstrap_1.InputGroupAddon, { addonType: "prepend", title: "Refresh the current page" },
            React.createElement(reactstrap_1.Button, { type: "button", className: "btn btn-outline-secondary", "aria-label": "", disabled: disabled, onClick: this.props.onReload },
                React.createElement("span", { className: navButtonClassName, "aria-hidden": "true" }))));
    }
}
exports.RefreshButton = RefreshButton;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVmcmVzaEJ1dHRvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlJlZnJlc2hCdXR0b24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUMvQiwyQ0FBbUQ7QUFJbkQsTUFBYSxhQUFjLFNBQVEsS0FBSyxDQUFDLFNBQXdCO0lBRTdELFlBQVksS0FBYSxFQUFFLE9BQWM7UUFDckMsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztRQUV0QixJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1QsR0FBRyxFQUFFLE1BQU07U0FDZCxDQUFDO0lBRU4sQ0FBQztJQUVNLGlCQUFpQjtRQUVwQixJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxFQUFFO1lBRWxELElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxtQkFBbUIsRUFBRTtnQkFFcEMsSUFBSSxDQUFDLFFBQVEsQ0FBRTtvQkFDWCxHQUFHLEVBQUUsU0FBUztpQkFDakIsQ0FBQyxDQUFDO2FBRU47WUFFRCxJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssa0JBQWtCLEVBQUU7Z0JBRW5DLElBQUksQ0FBQyxRQUFRLENBQUU7b0JBQ1gsR0FBRyxFQUFFLFFBQVE7aUJBQ2hCLENBQUMsQ0FBQzthQUVOO1FBRUwsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDO0lBRU0sTUFBTTtRQUVULElBQUksa0JBQWtCLEdBQUcsRUFBRSxDQUFDO1FBQzVCLElBQUksUUFBUSxHQUFHLEtBQUssQ0FBQztRQUVyQixRQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFO1lBQ3BCLEtBQUssTUFBTTtnQkFDUCxrQkFBa0IsR0FBRyxtQkFBbUIsQ0FBQztnQkFDekMsUUFBUSxHQUFHLElBQUksQ0FBQztnQkFDaEIsTUFBTTtZQUNWLEtBQUssU0FBUztnQkFDVixrQkFBa0IsR0FBRywyQkFBMkIsQ0FBQztnQkFDakQsUUFBUSxHQUFHLEtBQUssQ0FBQztnQkFDakIsTUFBTTtZQUNWLEtBQUssUUFBUTtnQkFDVCxrQkFBa0IsR0FBRyxtQkFBbUIsQ0FBQztnQkFDekMsUUFBUSxHQUFHLEtBQUssQ0FBQztnQkFDakIsTUFBTTtTQUNiO1FBQUEsQ0FBQztRQUVGLE9BQU8sQ0FFSCxvQkFBQyw0QkFBZSxJQUFDLFNBQVMsRUFBQyxTQUFTLEVBQ25CLEtBQUssRUFBQywwQkFBMEI7WUFFN0Msb0JBQUMsbUJBQU0sSUFBQyxJQUFJLEVBQUMsUUFBUSxFQUNiLFNBQVMsRUFBQywyQkFBMkIsZ0JBQzFCLEVBQUUsRUFDYixRQUFRLEVBQUUsUUFBUSxFQUNsQixPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRO2dCQUVoQyw4QkFBTSxTQUFTLEVBQUUsa0JBQWtCLGlCQUFjLE1BQU0sR0FBUSxDQUUxRCxDQUVLLENBRXJCLENBQUM7SUFFTixDQUFDO0NBRUo7QUE1RUQsc0NBNEVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtCdXR0b24sIElucHV0R3JvdXBBZGRvbn0gZnJvbSAncmVhY3RzdHJhcCc7XG5pbXBvcnQge0lTaW1wbGVSZWFjdG9yfSBmcm9tICcuLi8uLi8uLi9yZWFjdG9yL1NpbXBsZVJlYWN0b3InO1xuaW1wb3J0IHtOYXZpZ2F0aW9uRXZlbnRUeXBlLCBOYXZpZ2F0aW9uRXZlbnR9IGZyb20gJy4uL0Jyb3dzZXJBcHAnO1xuXG5leHBvcnQgY2xhc3MgUmVmcmVzaEJ1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIFN0YXRlPiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzLCBjb250ZXh0OiBTdGF0ZSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIG5hdjogJ25vbmUnXG4gICAgICAgIH07XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgY29tcG9uZW50RGlkTW91bnQoKTogdm9pZCB7XG5cbiAgICAgICAgdGhpcy5wcm9wcy5uYXZpZ2F0aW9uUmVhY3Rvci5hZGRFdmVudExpc3RlbmVyKGV2ZW50ID0+IHtcblxuICAgICAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09ICdkaWQtc3RhcnQtbG9hZGluZycpIHtcblxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoIHtcbiAgICAgICAgICAgICAgICAgICAgbmF2OiAnbG9hZGluZydcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ2RpZC1zdG9wLWxvYWRpbmcnKSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKCB7XG4gICAgICAgICAgICAgICAgICAgIG5hdjogJ2xvYWRlZCdcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICBsZXQgbmF2QnV0dG9uQ2xhc3NOYW1lID0gJyc7XG4gICAgICAgIGxldCBkaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgICAgIHN3aXRjaCAodGhpcy5zdGF0ZS5uYXYpIHtcbiAgICAgICAgICAgIGNhc2UgJ25vbmUnOlxuICAgICAgICAgICAgICAgIG5hdkJ1dHRvbkNsYXNzTmFtZSA9ICdmYXMgZmEtc3luYyBmYS1sZyc7XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbG9hZGluZyc6XG4gICAgICAgICAgICAgICAgbmF2QnV0dG9uQ2xhc3NOYW1lID0gJ2ZhcyBmYS1zeW5jIGZhLWxnIGZhLXNwaW4nO1xuICAgICAgICAgICAgICAgIGRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdsb2FkZWQnOlxuICAgICAgICAgICAgICAgIG5hdkJ1dHRvbkNsYXNzTmFtZSA9ICdmYXMgZmEtc3luYyBmYS1sZyc7XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICA8SW5wdXRHcm91cEFkZG9uIGFkZG9uVHlwZT1cInByZXBlbmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlJlZnJlc2ggdGhlIGN1cnJlbnQgcGFnZVwiPlxuXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLm9uUmVsb2FkfT5cblxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e25hdkJ1dHRvbkNsYXNzTmFtZX0gYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG5cbiAgICAgICAgICAgIDwvSW5wdXRHcm91cEFkZG9uPlxuXG4gICAgICAgICk7XG5cbiAgICB9XG5cbn1cblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgbmF2aWdhdGlvblJlYWN0b3I6IElTaW1wbGVSZWFjdG9yPE5hdmlnYXRpb25FdmVudD47XG4gICAgb25SZWxvYWQ6ICgpID0+IHZvaWQ7XG4gICAgZGlzYWJsZWQ/OiBib29sZWFuO1xuXG59XG5cbmludGVyZmFjZSBTdGF0ZSB7XG4gICAgLy8gd2hhdCdzIGhhcHBlbmluZyB3aXRoIHRoZSBsb2FkIHN0YXR1cy5cbiAgICBuYXY6ICdub25lJyB8ICdsb2FkaW5nJyB8ICdsb2FkZWQnO1xufVxuIl19