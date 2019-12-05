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
const FontAwesomeIcon_1 = require("../../../../../../../web/js/ui/fontawesome/FontAwesomeIcon");
class AnnotationTypeDropdownItem extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const { selected } = this.props;
        const iconName = selected ? "far fa-check-square" : "far fa-square";
        return (React.createElement(reactstrap_1.DropdownItem, { onClick: () => this.props.onClick(), className: selected ? 'font-weight-bold' : undefined },
            React.createElement(FontAwesomeIcon_1.FontAwesomeIcon, { name: iconName }),
            " ",
            this.props.children));
    }
}
exports.AnnotationTypeDropdownItem = AnnotationTypeDropdownItem;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW5ub3RhdGlvblR5cGVEcm9wZG93bkl0ZW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJBbm5vdGF0aW9uVHlwZURyb3Bkb3duSXRlbS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsNkNBQStCO0FBQy9CLDJDQUF3QztBQUN4QyxnR0FBMkY7QUFFM0YsTUFBYSwwQkFBMkIsU0FBUSxLQUFLLENBQUMsYUFBNkI7SUFFL0UsWUFBWSxLQUFhLEVBQUUsT0FBWTtRQUNuQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFHTSxNQUFNO1FBRVQsTUFBTSxFQUFDLFFBQVEsRUFBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFFOUIsTUFBTSxRQUFRLEdBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDO1FBRXJFLE9BQU8sQ0FDSCxvQkFBQyx5QkFBWSxJQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxFQUNuQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsU0FBUztZQUM5RCxvQkFBQyxpQ0FBZSxJQUFDLElBQUksRUFBRSxRQUFRLEdBQUc7O1lBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQzVDLENBQ2xCLENBQUM7SUFFTixDQUFDO0NBRUo7QUF0QkQsZ0VBc0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtEcm9wZG93bkl0ZW19IGZyb20gJ3JlYWN0c3RyYXAnO1xuaW1wb3J0IHtGb250QXdlc29tZUljb259IGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi8uLi93ZWIvanMvdWkvZm9udGF3ZXNvbWUvRm9udEF3ZXNvbWVJY29uXCI7XG5cbmV4cG9ydCBjbGFzcyBBbm5vdGF0aW9uVHlwZURyb3Bkb3duSXRlbSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJUHJvcHMsIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG4gICAgfVxuXG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuXG4gICAgICAgIGNvbnN0IHtzZWxlY3RlZH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGNvbnN0IGljb25OYW1lID0gIHNlbGVjdGVkID8gXCJmYXIgZmEtY2hlY2stc3F1YXJlXCIgOiBcImZhciBmYS1zcXVhcmVcIjtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLm9uQ2xpY2soKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzZWxlY3RlZCA/ICdmb250LXdlaWdodC1ib2xkJyA6IHVuZGVmaW5lZH0+XG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBuYW1lPXtpY29uTmFtZX0vPiB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxuICAgICAgICApO1xuXG4gICAgfVxuXG59XG5cbmludGVyZmFjZSBJUHJvcHMge1xuXG4gICAgcmVhZG9ubHkgc2VsZWN0ZWQ6IGJvb2xlYW47XG4gICAgcmVhZG9ubHkgb25DbGljazogKCkgPT4gdm9pZDtcblxufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbn1cbiJdfQ==