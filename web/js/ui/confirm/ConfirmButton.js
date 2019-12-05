"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const reactstrap_1 = require("reactstrap");
class ConfirmButton extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.onCancel = this.onCancel.bind(this);
        this.toggle = this.toggle.bind(this);
        this.state = {
            popoverOpen: false
        };
    }
    render() {
        return (react_1.default.createElement("div", null,
            react_1.default.createElement(reactstrap_1.Button, { id: this.props.id, onClick: this.toggle }, this.props.children),
            react_1.default.createElement(reactstrap_1.Popover, { placement: this.props.placement || 'bottom', isOpen: this.state.popoverOpen, target: this.props.id, toggle: this.toggle },
                react_1.default.createElement(reactstrap_1.PopoverBody, null,
                    react_1.default.createElement("div", { className: "w-100 text-center lead p-1" }, this.props.prompt),
                    react_1.default.createElement(reactstrap_1.Button, { color: "secondary", size: "sm", className: "m-1", onClick: () => this.onCancel() }, "Cancel"),
                    react_1.default.createElement(reactstrap_1.Button, { color: "primary", size: "sm", className: "m-1", onClick: () => this.props.onConfirm() }, "Confirm")))));
    }
    onCancel() {
        this.setState({
            popoverOpen: false
        });
    }
    toggle() {
        this.setState({
            popoverOpen: !this.state.popoverOpen
        });
    }
}
exports.ConfirmButton = ConfirmButton;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uZmlybUJ1dHRvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNvbmZpcm1CdXR0b24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0Esa0RBQTBCO0FBQzFCLDJDQUF3RDtBQUd4RCxNQUFhLGFBQWMsU0FBUSxlQUFLLENBQUMsU0FBeUI7SUFFOUQsWUFBWSxLQUFhO1FBQ3JCLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUViLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVyQyxJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1QsV0FBVyxFQUFFLEtBQUs7U0FDckIsQ0FBQztJQUVOLENBQUM7SUFFTSxNQUFNO1FBQ1QsT0FBTyxDQUNIO1lBRUksOEJBQUMsbUJBQU0sSUFBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLElBQzFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNmO1lBRVQsOEJBQUMsb0JBQU8sSUFBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLElBQUksUUFBUSxFQUMzQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQzlCLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFDckIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO2dCQUV4Qiw4QkFBQyx3QkFBVztvQkFFUix1Q0FBSyxTQUFTLEVBQUMsNEJBQTRCLElBQ3RDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUNoQjtvQkFFTiw4QkFBQyxtQkFBTSxJQUFDLEtBQUssRUFBQyxXQUFXLEVBQ2pCLElBQUksRUFBQyxJQUFJLEVBQ1QsU0FBUyxFQUFDLEtBQUssRUFDZixPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxhQUFpQjtvQkFFdkQsOEJBQUMsbUJBQU0sSUFBQyxLQUFLLEVBQUMsU0FBUyxFQUNmLElBQUksRUFBQyxJQUFJLEVBQ1QsU0FBUyxFQUFDLEtBQUssRUFDZixPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsY0FBa0IsQ0FFckQsQ0FFUixDQUVSLENBQ1QsQ0FBQztJQUNOLENBQUM7SUFFTyxRQUFRO1FBQ1osSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNWLFdBQVcsRUFBRSxLQUFLO1NBQ3JCLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTyxNQUFNO1FBQ1YsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNWLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVztTQUN2QyxDQUFDLENBQUM7SUFDUCxDQUFDO0NBRUo7QUEvREQsc0NBK0RDIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50IHJlYWN0L25vLW11bHRpLWNvbXA6IDAsIHJlYWN0L3Byb3AtdHlwZXM6IDAgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0J1dHRvbiwgUG9wb3ZlciwgUG9wb3ZlckJvZHl9IGZyb20gJ3JlYWN0c3RyYXAnO1xuaW1wb3J0IFBvcHBlciBmcm9tICdwb3BwZXIuanMnO1xuXG5leHBvcnQgY2xhc3MgQ29uZmlybUJ1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5vbkNhbmNlbCA9IHRoaXMub25DYW5jZWwuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy50b2dnbGUgPSB0aGlzLnRvZ2dsZS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBwb3BvdmVyT3BlbjogZmFsc2VcbiAgICAgICAgfTtcblxuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBpZD17dGhpcy5wcm9wcy5pZH0gb25DbGljaz17dGhpcy50b2dnbGV9PlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cblxuICAgICAgICAgICAgICAgIDxQb3BvdmVyIHBsYWNlbWVudD17dGhpcy5wcm9wcy5wbGFjZW1lbnQgfHwgJ2JvdHRvbSd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgaXNPcGVuPXt0aGlzLnN0YXRlLnBvcG92ZXJPcGVufVxuICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD17dGhpcy5wcm9wcy5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGU9e3RoaXMudG9nZ2xlfT5cblxuICAgICAgICAgICAgICAgICAgICA8UG9wb3ZlckJvZHk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMDAgdGV4dC1jZW50ZXIgbGVhZCBwLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5wcm9tcHR9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm0tMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMub25DYW5jZWwoKX0+Q2FuY2VsPC9CdXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibS0xXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5vbkNvbmZpcm0oKX0+Q29uZmlybTwvQnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvUG9wb3ZlckJvZHk+XG5cbiAgICAgICAgICAgICAgICA8L1BvcG92ZXI+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25DYW5jZWwoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgcG9wb3Zlck9wZW46IGZhbHNlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgdG9nZ2xlKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHBvcG92ZXJPcGVuOiAhdGhpcy5zdGF0ZS5wb3BvdmVyT3BlblxuICAgICAgICB9KTtcbiAgICB9XG5cbn1cblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgaWQ6IHN0cmluZztcbiAgICBwcm9tcHQ6IHN0cmluZztcbiAgICBwbGFjZW1lbnQ/OiBQb3BwZXIuUGxhY2VtZW50O1xuICAgIC8vIG9uQ2FuY2VsOiAoKSA9PiB2b2lkO1xuICAgIG9uQ29uZmlybTogKCkgPT4gdm9pZDtcbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG4gICAgcG9wb3Zlck9wZW46IGJvb2xlYW47XG59XG4iXX0=