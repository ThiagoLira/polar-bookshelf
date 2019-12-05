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
const React = __importStar(require("react"));
const react_context_menu_wrapper_1 = require("@burtonator/react-context-menu-wrapper");
const react_context_menu_wrapper_2 = require("@burtonator/react-context-menu-wrapper");
const DropdownItem_1 = __importDefault(require("reactstrap/lib/DropdownItem"));
let sequence = 0;
class TabButtonContextMenu extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.id = 'doc-context-menu2-' + sequence++;
        this.contextMenuHandlers = react_context_menu_wrapper_1.prepareContextMenuHandlers({ id: this.id });
    }
    render() {
        return (React.createElement("div", null,
            React.createElement("div", Object.assign({}, this.contextMenuHandlers), this.props.children),
            React.createElement(react_context_menu_wrapper_2.ContextMenuWrapper, { id: this.id },
                React.createElement("div", { className: "border shadow rounded pt-2 pb-2", style: { backgroundColor: 'var(--white)' } },
                    React.createElement(DropdownItem_1.default, { toggle: false, onClick: () => this.props.onClose() }, "Close Tab"),
                    React.createElement(DropdownItem_1.default, { toggle: false, onClick: () => this.props.onCloseOtherTabs() }, "Close Other Tabs")))));
    }
}
exports.TabButtonContextMenu = TabButtonContextMenu;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFiQnV0dG9uQ29udGV4dE1lbnUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJUYWJCdXR0b25Db250ZXh0TWVudS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQStCO0FBQy9CLHVGQUFrRjtBQUVsRix1RkFBMEU7QUFDMUUsK0VBQXVEO0FBRXZELElBQUksUUFBUSxHQUFXLENBQUMsQ0FBQztBQUV6QixNQUFhLG9CQUFxQixTQUFRLEtBQUssQ0FBQyxTQUF5QjtJQU1yRSxZQUFZLEtBQWEsRUFBRSxPQUFZO1FBQ25DLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFdEIsSUFBSSxDQUFDLEVBQUUsR0FBRyxvQkFBb0IsR0FBRyxRQUFRLEVBQUUsQ0FBQztRQUU1QyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsdURBQTBCLENBQUMsRUFBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUM7SUFFekUsQ0FBQztJQUVNLE1BQU07UUFFVCxPQUFPLENBRUg7WUFFSSw2Q0FBUyxJQUFJLENBQUMsbUJBQW1CLEdBQzVCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNsQjtZQUVOLG9CQUFDLCtDQUFrQixJQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtnQkFFM0IsNkJBQUssU0FBUyxFQUFDLGlDQUFpQyxFQUMzQyxLQUFLLEVBQUUsRUFBQyxlQUFlLEVBQUUsY0FBYyxFQUFDO29CQUV6QyxvQkFBQyxzQkFBWSxJQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLGdCQUVqRDtvQkFFZixvQkFBQyxzQkFBWSxJQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsdUJBRTFELENBRWIsQ0FFVyxDQUVuQixDQUVULENBQUM7SUFFTixDQUFDO0NBRUo7QUFoREQsb0RBZ0RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtwcmVwYXJlQ29udGV4dE1lbnVIYW5kbGVyc30gZnJvbSAnQGJ1cnRvbmF0b3IvcmVhY3QtY29udGV4dC1tZW51LXdyYXBwZXInO1xuaW1wb3J0IHtDb250ZXh0TWVudUhhbmRsZXJzfSBmcm9tICdAYnVydG9uYXRvci9yZWFjdC1jb250ZXh0LW1lbnUtd3JhcHBlcic7XG5pbXBvcnQge0NvbnRleHRNZW51V3JhcHBlcn0gZnJvbSAnQGJ1cnRvbmF0b3IvcmVhY3QtY29udGV4dC1tZW51LXdyYXBwZXInO1xuaW1wb3J0IERyb3Bkb3duSXRlbSBmcm9tICdyZWFjdHN0cmFwL2xpYi9Ecm9wZG93bkl0ZW0nO1xuXG5sZXQgc2VxdWVuY2U6IG51bWJlciA9IDA7XG5cbmV4cG9ydCBjbGFzcyBUYWJCdXR0b25Db250ZXh0TWVudSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgcHJpdmF0ZSBjb250ZXh0TWVudUhhbmRsZXJzOiBDb250ZXh0TWVudUhhbmRsZXJzO1xuXG4gICAgcHJpdmF0ZSBpZDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcywgY29udGV4dDogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcblxuICAgICAgICB0aGlzLmlkID0gJ2RvYy1jb250ZXh0LW1lbnUyLScgKyBzZXF1ZW5jZSsrO1xuXG4gICAgICAgIHRoaXMuY29udGV4dE1lbnVIYW5kbGVycyA9IHByZXBhcmVDb250ZXh0TWVudUhhbmRsZXJzKHtpZDogdGhpcy5pZH0pO1xuXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICA8ZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiB7Li4udGhpcy5jb250ZXh0TWVudUhhbmRsZXJzfT5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8Q29udGV4dE1lbnVXcmFwcGVyIGlkPXt0aGlzLmlkfT5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciBzaGFkb3cgcm91bmRlZCBwdC0yIHBiLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAndmFyKC0td2hpdGUpJ319PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIHRvZ2dsZT17ZmFsc2V9IG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMub25DbG9zZSgpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDbG9zZSBUYWJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIHRvZ2dsZT17ZmFsc2V9IG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMub25DbG9zZU90aGVyVGFicygpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDbG9zZSBPdGhlciBUYWJzXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvQ29udGV4dE1lbnVXcmFwcGVyPlxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICApO1xuXG4gICAgfVxuXG59XG5cblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgcmVhZG9ubHkgb25DbG9zZTogKCkgPT4gdm9pZDtcbiAgICByZWFkb25seSBvbkNsb3NlT3RoZXJUYWJzOiAoKSA9PiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbn1cblxuXG4iXX0=