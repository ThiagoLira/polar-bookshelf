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
const SimpleTooltip_1 = require("../../../../web/js/ui/tooltip/SimpleTooltip");
const RendererAnalytics_1 = require("../../../../web/js/ga/RendererAnalytics");
const reactstrap_1 = require("reactstrap");
const Optional_1 = require("polar-shared/src/util/ts/Optional");
const FontAwesomeIcon_1 = require("../../../../web/js/ui/fontawesome/FontAwesomeIcon");
class TrackedDropdownItem extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (React.createElement(reactstrap_1.DropdownItem, { id: this.props.id, size: "sm", hidden: Optional_1.Optional.of(this.props.hidden).getOrElse(false), onClick: () => this.onClick() },
            React.createElement("div", { style: {
                    display: 'flex'
                } },
                React.createElement("div", { className: "text-muted", style: {
                        width: '22px',
                        display: 'flex'
                    } },
                    React.createElement("div", { className: "m-auto" },
                        React.createElement(FontAwesomeIcon_1.FontAwesomeIcon, { name: this.props.icon }))),
                "\u00A0 ",
                this.props.title),
            React.createElement(SimpleTooltip_1.SimpleTooltip, { target: this.props.id, show: 0, placement: "left" }, this.props.tooltip)));
    }
    onClick() {
        const action = this.props.title.replace(/ /g, '').toLowerCase();
        if (this.props.trackingCategory) {
            RendererAnalytics_1.RendererAnalytics.event({ category: this.props.trackingCategory, action });
        }
        this.props.onClick();
    }
}
exports.TrackedDropdownItem = TrackedDropdownItem;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHJhY2tlZERyb3Bkb3duSXRlbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlRyYWNrZWREcm9wZG93bkl0ZW0udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUMvQiwrRUFBMEU7QUFDMUUsK0VBQTBFO0FBQzFFLDJDQUF3QztBQUN4QyxnRUFBMkQ7QUFDM0QsdUZBQWtGO0FBSWxGLE1BQWEsbUJBQW9CLFNBQVEsS0FBSyxDQUFDLGFBQStDO0lBRTFGLFlBQVksS0FBK0IsRUFBRSxPQUFZO1FBQ3JELEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVNLE1BQU07UUFFVCxPQUFPLENBRUgsb0JBQUMseUJBQVksSUFBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQ2pCLElBQUksRUFBQyxJQUFJLEVBQ1QsTUFBTSxFQUFFLG1CQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUN2RCxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUV2Qyw2QkFBSyxLQUFLLEVBQUU7b0JBQ1IsT0FBTyxFQUFFLE1BQU07aUJBQ2xCO2dCQUVHLDZCQUFLLFNBQVMsRUFBQyxZQUFZLEVBQ3RCLEtBQUssRUFBRTt3QkFDSCxLQUFLLEVBQUUsTUFBTTt3QkFDYixPQUFPLEVBQUUsTUFBTTtxQkFDbEI7b0JBR0YsNkJBQUssU0FBUyxFQUFDLFFBQVE7d0JBQ25CLG9CQUFDLGlDQUFlLElBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLENBQ3ZDLENBRUo7O2dCQUVFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUV0QjtZQUdOLG9CQUFDLDZCQUFhLElBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUNyQixJQUFJLEVBQUUsQ0FBQyxFQUNQLFNBQVMsRUFBQyxNQUFNLElBRTFCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUVQLENBRUwsQ0FDbEIsQ0FBQztJQUVOLENBQUM7SUFFTyxPQUFPO1FBRVgsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUVoRSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEVBQUU7WUFDN0IscUNBQWlCLENBQUMsS0FBSyxDQUFDLEVBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsTUFBTSxFQUFDLENBQUMsQ0FBQztTQUM1RTtRQUVELElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7SUFFekIsQ0FBQztDQUVKO0FBOURELGtEQThEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7U2ltcGxlVG9vbHRpcH0gZnJvbSAnLi4vLi4vLi4vLi4vd2ViL2pzL3VpL3Rvb2x0aXAvU2ltcGxlVG9vbHRpcCc7XG5pbXBvcnQge1JlbmRlcmVyQW5hbHl0aWNzfSBmcm9tICcuLi8uLi8uLi8uLi93ZWIvanMvZ2EvUmVuZGVyZXJBbmFseXRpY3MnO1xuaW1wb3J0IHtEcm9wZG93bkl0ZW19IGZyb20gJ3JlYWN0c3RyYXAnO1xuaW1wb3J0IHtPcHRpb25hbH0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL3RzL09wdGlvbmFsJztcbmltcG9ydCB7Rm9udEF3ZXNvbWVJY29ufSBmcm9tIFwiLi4vLi4vLi4vLi4vd2ViL2pzL3VpL2ZvbnRhd2Vzb21lL0ZvbnRBd2Vzb21lSWNvblwiO1xuXG4vKipcbiAqL1xuZXhwb3J0IGNsYXNzIFRyYWNrZWREcm9wZG93bkl0ZW0gZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PFRyYWNrZWREcm9wZG93bkl0ZW1Qcm9wcywgSVN0YXRlPiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogVHJhY2tlZERyb3Bkb3duSXRlbVByb3BzLCBjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBpZD17dGhpcy5wcm9wcy5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZGVuPXtPcHRpb25hbC5vZih0aGlzLnByb3BzLmhpZGRlbikuZ2V0T3JFbHNlKGZhbHNlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5vbkNsaWNrKCl9PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCdcbiAgICAgICAgICAgICAgICB9fT5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMjJweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4J1xuICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBuYW1lPXt0aGlzLnByb3BzLmljb259Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICZuYnNwOyB7dGhpcy5wcm9wcy50aXRsZX1cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgICAgICA8U2ltcGxlVG9vbHRpcCB0YXJnZXQ9e3RoaXMucHJvcHMuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvdz17MH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJsZWZ0XCI+XG5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMudG9vbHRpcH1cblxuICAgICAgICAgICAgICAgIDwvU2ltcGxlVG9vbHRpcD5cblxuICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XG4gICAgICAgICk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uQ2xpY2soKSB7XG5cbiAgICAgICAgY29uc3QgYWN0aW9uID0gdGhpcy5wcm9wcy50aXRsZS5yZXBsYWNlKC8gL2csICcnKS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnRyYWNraW5nQ2F0ZWdvcnkpIHtcbiAgICAgICAgICAgIFJlbmRlcmVyQW5hbHl0aWNzLmV2ZW50KHtjYXRlZ29yeTogdGhpcy5wcm9wcy50cmFja2luZ0NhdGVnb3J5LCBhY3Rpb259KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucHJvcHMub25DbGljaygpO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhY2tlZERyb3Bkb3duSXRlbVByb3BzIHtcblxuICAgIHJlYWRvbmx5IGlkOiBzdHJpbmc7XG4gICAgcmVhZG9ubHkgdGl0bGU6IHN0cmluZztcbiAgICByZWFkb25seSB0b29sdGlwOiBzdHJpbmc7XG4gICAgcmVhZG9ubHkgaWNvbj86IHN0cmluZztcbiAgICByZWFkb25seSBoaWRkZW4/OiBib29sZWFuO1xuICAgIHJlYWRvbmx5IGNsYXNzTmFtZT86IHN0cmluZztcblxuICAgIHJlYWRvbmx5IHRyYWNraW5nQ2F0ZWdvcnk/OiBzdHJpbmc7XG4gICAgcmVhZG9ubHkgb25DbGljazogKCkgPT4gdm9pZDtcblxufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcblxufVxuIl19