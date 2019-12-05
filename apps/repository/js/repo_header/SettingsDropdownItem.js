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
const TrackedDropdownItem_1 = require("./TrackedDropdownItem");
const ICON_ON = "fas fa-check text-primary";
const ICON_OFF = "fas fa-minus";
class SettingsDropdownItem extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const prefs = this.props.prefs();
        const hidden = prefs === undefined;
        let marked = false;
        let icon = ICON_OFF;
        if (prefs) {
            marked = prefs.isMarked(this.props.name, this.props.defaultValue);
            icon = marked ? ICON_ON : ICON_OFF;
        }
        return (React.createElement(TrackedDropdownItem_1.TrackedDropdownItem, { trackingCategory: 'settings-dropdown-click', id: 'setting-' + this.props.name, title: this.props.title, tooltip: this.props.tooltip, icon: icon, hidden: hidden, onClick: () => this.onClick() }));
    }
    onClick() {
        const prefs = this.props.prefs();
        prefs.toggleMarked(this.props.name, this.props.defaultValue);
    }
}
exports.SettingsDropdownItem = SettingsDropdownItem;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2V0dGluZ3NEcm9wZG93bkl0ZW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJTZXR0aW5nc0Ryb3Bkb3duSXRlbS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsNkNBQStCO0FBQy9CLCtEQUEwRDtBQUcxRCxNQUFNLE9BQU8sR0FBRywyQkFBMkIsQ0FBQztBQUM1QyxNQUFNLFFBQVEsR0FBRyxjQUFjLENBQUM7QUFJaEMsTUFBYSxvQkFBcUIsU0FBUSxLQUFLLENBQUMsYUFBNkI7SUFFekUsWUFBWSxLQUFhLEVBQUUsT0FBWTtRQUNuQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFTSxNQUFNO1FBRVQsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUVqQyxNQUFNLE1BQU0sR0FBRyxLQUFLLEtBQUssU0FBUyxDQUFDO1FBRW5DLElBQUksTUFBTSxHQUFZLEtBQUssQ0FBQztRQUM1QixJQUFJLElBQUksR0FBVyxRQUFRLENBQUM7UUFFNUIsSUFBSSxLQUFLLEVBQUU7WUFDUCxNQUFNLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ2xFLElBQUksR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1NBQ3RDO1FBRUQsT0FBTyxDQUVILG9CQUFDLHlDQUFtQixJQUFDLGdCQUFnQixFQUFDLHlCQUF5QixFQUMxQyxFQUFFLEVBQUUsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUNoQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQ3ZCLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFDM0IsSUFBSSxFQUFFLElBQUksRUFDVixNQUFNLEVBQUUsTUFBTSxFQUNkLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FFeEQsQ0FBQztJQUVOLENBQUM7SUFFTyxPQUFPO1FBQ1gsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUcsQ0FBQztRQUNsQyxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDakUsQ0FBQztDQUVKO0FBdkNELG9EQXVDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7VHJhY2tlZERyb3Bkb3duSXRlbX0gZnJvbSAnLi9UcmFja2VkRHJvcGRvd25JdGVtJztcbmltcG9ydCB7UHJlZnN9IGZyb20gJy4uLy4uLy4uLy4uL3dlYi9qcy91dGlsL3ByZWZzL1ByZWZzJztcblxuY29uc3QgSUNPTl9PTiA9IFwiZmFzIGZhLWNoZWNrIHRleHQtcHJpbWFyeVwiO1xuY29uc3QgSUNPTl9PRkYgPSBcImZhcyBmYS1taW51c1wiO1xuXG4vKipcbiAqL1xuZXhwb3J0IGNsYXNzIFNldHRpbmdzRHJvcGRvd25JdGVtIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcywgY29udGV4dDogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuXG4gICAgICAgIGNvbnN0IHByZWZzID0gdGhpcy5wcm9wcy5wcmVmcygpO1xuXG4gICAgICAgIGNvbnN0IGhpZGRlbiA9IHByZWZzID09PSB1bmRlZmluZWQ7XG5cbiAgICAgICAgbGV0IG1hcmtlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgICAgICBsZXQgaWNvbjogc3RyaW5nID0gSUNPTl9PRkY7XG5cbiAgICAgICAgaWYgKHByZWZzKSB7XG4gICAgICAgICAgICBtYXJrZWQgPSBwcmVmcy5pc01hcmtlZCh0aGlzLnByb3BzLm5hbWUsIHRoaXMucHJvcHMuZGVmYXVsdFZhbHVlKTtcbiAgICAgICAgICAgIGljb24gPSBtYXJrZWQgPyBJQ09OX09OIDogSUNPTl9PRkY7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICA8VHJhY2tlZERyb3Bkb3duSXRlbSB0cmFja2luZ0NhdGVnb3J5PSdzZXR0aW5ncy1kcm9wZG93bi1jbGljaydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXsnc2V0dGluZy0nICsgdGhpcy5wcm9wcy5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3RoaXMucHJvcHMudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwPXt0aGlzLnByb3BzLnRvb2x0aXB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPXtpY29ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZGVuPXtoaWRkZW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLm9uQ2xpY2soKX0vPlxuXG4gICAgICAgICk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uQ2xpY2soKSB7XG4gICAgICAgIGNvbnN0IHByZWZzID0gdGhpcy5wcm9wcy5wcmVmcygpITtcbiAgICAgICAgcHJlZnMudG9nZ2xlTWFya2VkKHRoaXMucHJvcHMubmFtZSwgdGhpcy5wcm9wcy5kZWZhdWx0VmFsdWUpO1xuICAgIH1cblxufVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcblxuICAgIC8vIHRoZSBzZXR0aW5nIG5hbWVcbiAgICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG5cbiAgICByZWFkb25seSBkZWZhdWx0VmFsdWU6IGJvb2xlYW47XG5cbiAgICByZWFkb25seSB0aXRsZTogc3RyaW5nO1xuXG4gICAgcmVhZG9ubHkgdG9vbHRpcDogc3RyaW5nO1xuXG4gICAgcmVhZG9ubHkgaGlkZGVuPzogYm9vbGVhbjtcblxuICAgIHJlYWRvbmx5IHByZWZzOiAoKSA9PiBQcmVmcyB8IHVuZGVmaW5lZDtcblxufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcblxufVxuIl19