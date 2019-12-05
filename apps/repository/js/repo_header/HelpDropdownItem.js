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
const TrackedDropdownLink_1 = require("./TrackedDropdownLink");
class HelpDropdownItem extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (React.createElement(TrackedDropdownLink_1.TrackedDropdownLink, { trackingCategory: 'help-dropdown-click', id: this.props.id, link: this.props.link, title: this.props.title, tooltip: this.props.tooltip, hidden: this.props.hidden, icon: this.props.icon }));
    }
}
exports.HelpDropdownItem = HelpDropdownItem;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVscERyb3Bkb3duSXRlbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkhlbHBEcm9wZG93bkl0ZW0udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUMvQiwrREFBMEQ7QUFJMUQsTUFBYSxnQkFBaUIsU0FBUSxLQUFLLENBQUMsYUFBNkI7SUFFckUsWUFBWSxLQUFhLEVBQUUsT0FBWTtRQUNuQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFTSxNQUFNO1FBRVQsT0FBTyxDQUNILG9CQUFDLHlDQUFtQixJQUFDLGdCQUFnQixFQUFDLHFCQUFxQixFQUN0QyxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQ2pCLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFDckIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUN2QixPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQzNCLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFDekIsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLENBQ2hELENBQUM7SUFFTixDQUFDO0NBRUo7QUFwQkQsNENBb0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtUcmFja2VkRHJvcGRvd25MaW5rfSBmcm9tICcuL1RyYWNrZWREcm9wZG93bkxpbmsnO1xuXG4vKipcbiAqL1xuZXhwb3J0IGNsYXNzIEhlbHBEcm9wZG93bkl0ZW0gZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzLCBjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxUcmFja2VkRHJvcGRvd25MaW5rIHRyYWNraW5nQ2F0ZWdvcnk9J2hlbHAtZHJvcGRvd24tY2xpY2snXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17dGhpcy5wcm9wcy5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbms9e3RoaXMucHJvcHMubGlua31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXt0aGlzLnByb3BzLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcD17dGhpcy5wcm9wcy50b29sdGlwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZGVuPXt0aGlzLnByb3BzLmhpZGRlbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249e3RoaXMucHJvcHMuaWNvbn0vPlxuICAgICAgICApO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVByb3BzIHtcblxuICAgIHJlYWRvbmx5IGlkOiBzdHJpbmc7XG4gICAgcmVhZG9ubHkgdGl0bGU6IHN0cmluZztcbiAgICByZWFkb25seSB0b29sdGlwOiBzdHJpbmc7XG4gICAgcmVhZG9ubHkgaWNvbjogc3RyaW5nO1xuICAgIHJlYWRvbmx5IGhpZGRlbj86IGJvb2xlYW47XG5cbiAgICByZWFkb25seSBsaW5rOiBzdHJpbmc7XG5cbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG5cbn1cbiJdfQ==