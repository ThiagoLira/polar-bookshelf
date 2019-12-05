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
const DocButton_1 = require("./DocButton");
const ToggleIcon_1 = require("./ToggleIcon");
class ArchiveDocButton extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }
    render() {
        return (React.createElement(DocButton_1.DocButton, { onClick: () => this.props.onClick() },
            React.createElement(ToggleIcon_1.ToggleIcon, { className: "fa fa-check", title: "Archive document", active: this.props.active })));
    }
}
exports.ArchiveDocButton = ArchiveDocButton;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXJjaGl2ZURvY0J1dHRvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkFyY2hpdmVEb2NCdXR0b24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUMvQiwyQ0FBc0M7QUFDdEMsNkNBQXdDO0FBRXhDLE1BQWEsZ0JBQWlCLFNBQVEsS0FBSyxDQUFDLGFBQTZCO0lBRXJFLFlBQVksS0FBYSxFQUFFLE9BQVk7UUFDbkMsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztRQUV0QixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQ1osQ0FBQztJQUVOLENBQUM7SUFFTSxNQUFNO1FBRVQsT0FBTyxDQUFDLG9CQUFDLHFCQUFTLElBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFO1lBRWxELG9CQUFDLHVCQUFVLElBQUMsU0FBUyxFQUFDLGFBQWEsRUFDdkIsS0FBSyxFQUFDLGtCQUFrQixFQUN4QixNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FFaEMsQ0FBQyxDQUFDO0lBRWxCLENBQUM7Q0FFSjtBQXRCRCw0Q0FzQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0RvY0J1dHRvbn0gZnJvbSAnLi9Eb2NCdXR0b24nO1xuaW1wb3J0IHtUb2dnbGVJY29ufSBmcm9tICcuL1RvZ2dsZUljb24nO1xuXG5leHBvcnQgY2xhc3MgQXJjaGl2ZURvY0J1dHRvbiBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJUHJvcHMsIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgfTtcblxuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuICg8RG9jQnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMub25DbGljaygpfT5cblxuICAgICAgICAgICAgPFRvZ2dsZUljb24gY2xhc3NOYW1lPVwiZmEgZmEtY2hlY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJBcmNoaXZlIGRvY3VtZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17dGhpcy5wcm9wcy5hY3RpdmV9Lz5cblxuICAgICAgICA8L0RvY0J1dHRvbj4pO1xuXG4gICAgfVxuXG59XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICAgIHJlYWRvbmx5IG9uQ2xpY2s6ICgpID0+IHZvaWQ7XG4gICAgcmVhZG9ubHkgYWN0aXZlOiBib29sZWFuO1xufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbn1cbiJdfQ==