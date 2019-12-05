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
const FeatureToggles_1 = require("polar-shared/src/util/FeatureToggles");
const ICON_ON = "fas fa-check text-primary";
const ICON_OFF = "fas fa-minus";
class SettingsFeatureToggleDropdown extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const marked = FeatureToggles_1.FeatureToggles.get(this.props.name);
        const icon = marked ? ICON_ON : ICON_OFF;
        return (React.createElement(TrackedDropdownItem_1.TrackedDropdownItem, { trackingCategory: 'settings-dropdown-click', id: 'setting-' + this.props.name, title: this.props.title, tooltip: this.props.tooltip, icon: icon, hidden: false, onClick: () => FeatureToggles_1.FeatureToggles.toggle(this.props.name) }));
    }
    onClick() {
    }
}
exports.SettingsFeatureToggleDropdown = SettingsFeatureToggleDropdown;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2V0dGluZ3NGZWF0dXJlVG9nZ2xlRHJvcGRvd24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJTZXR0aW5nc0ZlYXR1cmVUb2dnbGVEcm9wZG93bi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsNkNBQStCO0FBQy9CLCtEQUEwRDtBQUMxRCx5RUFBb0U7QUFFcEUsTUFBTSxPQUFPLEdBQUcsMkJBQTJCLENBQUM7QUFDNUMsTUFBTSxRQUFRLEdBQUcsY0FBYyxDQUFDO0FBRWhDLE1BQWEsNkJBQThCLFNBQVEsS0FBSyxDQUFDLGFBQTZCO0lBRWxGLFlBQVksS0FBYSxFQUFFLE9BQVk7UUFDbkMsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRU0sTUFBTTtRQUVULE1BQU0sTUFBTSxHQUFHLCtCQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFbkQsTUFBTSxJQUFJLEdBQVcsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQTtRQUVoRCxPQUFPLENBRUgsb0JBQUMseUNBQW1CLElBQUMsZ0JBQWdCLEVBQUMseUJBQXlCLEVBQzFDLEVBQUUsRUFBRSxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQ2hDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFDdkIsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUMzQixJQUFJLEVBQUUsSUFBSSxFQUNWLE1BQU0sRUFBRSxLQUFLLEVBQ2IsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLCtCQUFjLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FFaEYsQ0FBQztJQUVOLENBQUM7SUFFTyxPQUFPO0lBQ2YsQ0FBQztDQUVKO0FBN0JELHNFQTZCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7VHJhY2tlZERyb3Bkb3duSXRlbX0gZnJvbSAnLi9UcmFja2VkRHJvcGRvd25JdGVtJztcbmltcG9ydCB7RmVhdHVyZVRvZ2dsZXN9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL3V0aWwvRmVhdHVyZVRvZ2dsZXNcIjtcblxuY29uc3QgSUNPTl9PTiA9IFwiZmFzIGZhLWNoZWNrIHRleHQtcHJpbWFyeVwiO1xuY29uc3QgSUNPTl9PRkYgPSBcImZhcyBmYS1taW51c1wiO1xuXG5leHBvcnQgY2xhc3MgU2V0dGluZ3NGZWF0dXJlVG9nZ2xlRHJvcGRvd24gZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzLCBjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgY29uc3QgbWFya2VkID0gRmVhdHVyZVRvZ2dsZXMuZ2V0KHRoaXMucHJvcHMubmFtZSk7XG5cbiAgICAgICAgY29uc3QgaWNvbjogc3RyaW5nID0gbWFya2VkID8gSUNPTl9PTiA6IElDT05fT0ZGXG5cbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgPFRyYWNrZWREcm9wZG93bkl0ZW0gdHJhY2tpbmdDYXRlZ29yeT0nc2V0dGluZ3MtZHJvcGRvd24tY2xpY2snXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17J3NldHRpbmctJyArIHRoaXMucHJvcHMubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXt0aGlzLnByb3BzLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcD17dGhpcy5wcm9wcy50b29sdGlwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17aWNvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGRlbj17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBGZWF0dXJlVG9nZ2xlcy50b2dnbGUodGhpcy5wcm9wcy5uYW1lKX0vPlxuXG4gICAgICAgICk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uQ2xpY2soKSB7XG4gICAgfVxuXG59XG5cbmludGVyZmFjZSBJUHJvcHMge1xuXG4gICAgLy8gdGhlIHNldHRpbmcgbmFtZVxuICAgIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcblxuICAgIHJlYWRvbmx5IHRpdGxlOiBzdHJpbmc7XG5cbiAgICByZWFkb25seSB0b29sdGlwOiBzdHJpbmc7XG5cbiAgICByZWFkb25seSBoaWRkZW4/OiBib29sZWFuO1xuXG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xuXG59XG4iXX0=