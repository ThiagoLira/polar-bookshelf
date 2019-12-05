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
const react_context_menu_wrapper_1 = require("@burtonator/react-context-menu-wrapper");
const React = __importStar(require("react"));
const react_dropdown_1 = __importDefault(require("@burtonator/react-dropdown"));
const Functions_1 = require("polar-shared/src/util/Functions");
class ContextMenu extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement(react_context_menu_wrapper_1.ContextMenuWrapper, { id: this.props.id },
            React.createElement(react_dropdown_1.default, { open: true, onToggle: Functions_1.NULL_FUNCTION, onSelect: Functions_1.NULL_FUNCTION }, this.props.children)));
    }
}
exports.ContextMenu = ContextMenu;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGV4dE1lbnUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJDb250ZXh0TWVudS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsdUZBQTBFO0FBQzFFLDZDQUErQjtBQUMvQixnRkFBa0U7QUFDbEUsK0RBQThEO0FBTTlELE1BQWEsV0FBWSxTQUFRLEtBQUssQ0FBQyxTQUF5QjtJQUU1RCxZQUFZLEtBQWE7UUFDckIsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pCLENBQUM7SUFFTSxNQUFNO1FBRVQsT0FBTyxDQUVILG9CQUFDLCtDQUFrQixJQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFFakMsb0JBQUMsd0JBQVEsSUFBQyxJQUFJLEVBQUUsSUFBSSxFQUNWLFFBQVEsRUFBRSx5QkFBYSxFQUN2QixRQUFRLEVBQUUseUJBQWEsSUFJNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBRWIsQ0FFTSxDQUV4QixDQUFDO0lBRU4sQ0FBQztDQUVKO0FBNUJELGtDQTRCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29udGV4dE1lbnVXcmFwcGVyfSBmcm9tICdAYnVydG9uYXRvci9yZWFjdC1jb250ZXh0LW1lbnUtd3JhcHBlcic7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRHJvcGRvd24sIHtEcm9wZG93bk1lbnV9IGZyb20gXCJAYnVydG9uYXRvci9yZWFjdC1kcm9wZG93blwiO1xuaW1wb3J0IHtOVUxMX0ZVTkNUSU9OfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvRnVuY3Rpb25zJztcblxuLyoqXG4gKiBCYXNpYyBjb250ZXh0IG1lbnUgdGhhdCBhbGxvd3MgeW91IHRvIGp1c3Qgc3BlY2lmeSB0aGUgbWVudSBpdGVtcyBhc1xuICogY2hpbGRyZW4uXG4gKi9cbmV4cG9ydCBjbGFzcyBDb250ZXh0TWVudSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICA8Q29udGV4dE1lbnVXcmFwcGVyIGlkPXt0aGlzLnByb3BzLmlkfT5cblxuICAgICAgICAgICAgICAgIDxEcm9wZG93biBvcGVuPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBvblRvZ2dsZT17TlVMTF9GVU5DVElPTn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Q9e05VTExfRlVOQ1RJT059PlxuXG4gICAgICAgICAgICAgICAgICAgIHsvKiBkcm9wZG93biBhbmQgbWVudSBpdGVtcyBoZXJlKi99XG5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG5cbiAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxuXG4gICAgICAgICAgICA8L0NvbnRleHRNZW51V3JhcHBlcj5cblxuICAgICAgICApO1xuXG4gICAgfVxuXG59XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICAgIHJlYWRvbmx5IGlkOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xuXG59XG4iXX0=