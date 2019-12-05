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
const SettingsDropdownItem_1 = require("./SettingsDropdownItem");
const SettingsFeatureToggleDropdown_1 = require("./SettingsFeatureToggleDropdown");
class SettingsDropdown extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (React.createElement(reactstrap_1.UncontrolledDropdown, { className: "ml-1", hidden: this.props.hidden, size: "md", id: "settings-dropdown" },
            React.createElement(reactstrap_1.DropdownToggle, { className: "text-muted border", color: "light", caret: true },
                React.createElement("i", { className: "fas fa-cog", style: { fontSize: '17px' } })),
            React.createElement(reactstrap_1.DropdownMenu, { className: "shadow", right: true },
                React.createElement(SettingsDropdownItem_1.SettingsDropdownItem, { name: "settings-auto-resume", defaultValue: true, prefs: this.props.prefs, title: "Automatically Resume Reading Position", tooltip: "Automatically resume the current reading position when opening documents." }),
                React.createElement(SettingsFeatureToggleDropdown_1.SettingsFeatureToggleDropdown, { name: "groups", title: "Enable groups", tooltip: "Enable groups support for sharing documents with other Polar users" }))));
    }
}
exports.SettingsDropdown = SettingsDropdown;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2V0dGluZ3NEcm9wZG93bi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlNldHRpbmdzRHJvcGRvd24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUMvQiwyQ0FBOEU7QUFDOUUsaUVBQTREO0FBRTVELG1GQUE4RTtBQUU5RSxNQUFhLGdCQUFpQixTQUFRLEtBQUssQ0FBQyxhQUE2QjtJQUVyRSxZQUFZLEtBQWEsRUFBRSxPQUFZO1FBQ25DLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVNLE1BQU07UUFFVCxPQUFPLENBRUgsb0JBQUMsaUNBQW9CLElBQUMsU0FBUyxFQUFDLE1BQU0sRUFDaEIsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUN6QixJQUFJLEVBQUMsSUFBSSxFQUNULEVBQUUsRUFBQyxtQkFBbUI7WUFFeEMsb0JBQUMsMkJBQWMsSUFBQyxTQUFTLEVBQUMsbUJBQW1CLEVBQzdCLEtBQUssRUFBQyxPQUFPLEVBQ2IsS0FBSztnQkFFakIsMkJBQUcsU0FBUyxFQUFDLFlBQVksRUFBQyxLQUFLLEVBQUUsRUFBQyxRQUFRLEVBQUUsTUFBTSxFQUFDLEdBQUcsQ0FFekM7WUFFakIsb0JBQUMseUJBQVksSUFBQyxTQUFTLEVBQUMsUUFBUSxFQUFDLEtBQUs7Z0JBRWxDLG9CQUFDLDJDQUFvQixJQUFDLElBQUksRUFBQyxzQkFBc0IsRUFDM0IsWUFBWSxFQUFFLElBQUksRUFDbEIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUN2QixLQUFLLEVBQUMsdUNBQXVDLEVBQzdDLE9BQU8sRUFBQywyRUFBMkUsR0FBRTtnQkFFM0csb0JBQUMsNkRBQTZCLElBQUMsSUFBSSxFQUFDLFFBQVEsRUFDYixLQUFLLEVBQUMsZUFBZSxFQUNyQixPQUFPLEVBQUMsb0VBQW9FLEdBQUUsQ0FFbEcsQ0FFSSxDQUMxQixDQUFDO0lBRU4sQ0FBQztDQUdKO0FBM0NELDRDQTJDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7RHJvcGRvd25NZW51LCBEcm9wZG93blRvZ2dsZSwgVW5jb250cm9sbGVkRHJvcGRvd259IGZyb20gJ3JlYWN0c3RyYXAnO1xuaW1wb3J0IHtTZXR0aW5nc0Ryb3Bkb3duSXRlbX0gZnJvbSAnLi9TZXR0aW5nc0Ryb3Bkb3duSXRlbSc7XG5pbXBvcnQge1ByZWZzfSBmcm9tICcuLi8uLi8uLi8uLi93ZWIvanMvdXRpbC9wcmVmcy9QcmVmcyc7XG5pbXBvcnQge1NldHRpbmdzRmVhdHVyZVRvZ2dsZURyb3Bkb3dufSBmcm9tIFwiLi9TZXR0aW5nc0ZlYXR1cmVUb2dnbGVEcm9wZG93blwiO1xuXG5leHBvcnQgY2xhc3MgU2V0dGluZ3NEcm9wZG93biBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJUHJvcHMsIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICA8VW5jb250cm9sbGVkRHJvcGRvd24gY2xhc3NOYW1lPVwibWwtMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZGVuPXt0aGlzLnByb3BzLmhpZGRlbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic2V0dGluZ3MtZHJvcGRvd25cIj5cblxuICAgICAgICAgICAgICAgIDxEcm9wZG93blRvZ2dsZSBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkIGJvcmRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJldD5cblxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtY29nXCIgc3R5bGU9e3tmb250U2l6ZTogJzE3cHgnfX0vPlxuXG4gICAgICAgICAgICAgICAgPC9Ecm9wZG93blRvZ2dsZT5cblxuICAgICAgICAgICAgICAgIDxEcm9wZG93bk1lbnUgY2xhc3NOYW1lPVwic2hhZG93XCIgcmlnaHQ+XG5cbiAgICAgICAgICAgICAgICAgICAgPFNldHRpbmdzRHJvcGRvd25JdGVtIG5hbWU9XCJzZXR0aW5ncy1hdXRvLXJlc3VtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVmcz17dGhpcy5wcm9wcy5wcmVmc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiQXV0b21hdGljYWxseSBSZXN1bWUgUmVhZGluZyBQb3NpdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwPVwiQXV0b21hdGljYWxseSByZXN1bWUgdGhlIGN1cnJlbnQgcmVhZGluZyBwb3NpdGlvbiB3aGVuIG9wZW5pbmcgZG9jdW1lbnRzLlwiLz5cblxuICAgICAgICAgICAgICAgICAgICA8U2V0dGluZ3NGZWF0dXJlVG9nZ2xlRHJvcGRvd24gbmFtZT1cImdyb3Vwc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkVuYWJsZSBncm91cHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcD1cIkVuYWJsZSBncm91cHMgc3VwcG9ydCBmb3Igc2hhcmluZyBkb2N1bWVudHMgd2l0aCBvdGhlciBQb2xhciB1c2Vyc1wiLz5cblxuICAgICAgICAgICAgICAgIDwvRHJvcGRvd25NZW51PlxuXG4gICAgICAgICAgICA8L1VuY29udHJvbGxlZERyb3Bkb3duPlxuICAgICAgICApO1xuXG4gICAgfVxuXG5cbn1cblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgcmVhZG9ubHkgcHJlZnM6ICgpID0+IFByZWZzIHwgdW5kZWZpbmVkO1xuICAgIHJlYWRvbmx5IGhpZGRlbj86IGJvb2xlYW47XG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xuXG59XG4iXX0=