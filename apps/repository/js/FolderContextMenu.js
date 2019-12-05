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
const react_context_menu_wrapper_1 = require("@burtonator/react-context-menu-wrapper");
const reactstrap_1 = require("reactstrap");
const FontAwesomeIcon_1 = require("../../../web/js/ui/fontawesome/FontAwesomeIcon");
let sequence = 0;
class FolderContextMenu extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
        this.id = 'folder-context-menu-' + sequence++;
        this.contextMenuHandlers = react_context_menu_wrapper_1.prepareContextMenuHandlers({ id: this.id });
    }
    render() {
        return (React.createElement("div", null,
            React.createElement("div", Object.assign({}, this.contextMenuHandlers), this.props.children),
            React.createElement(react_context_menu_wrapper_1.ContextMenuWrapper, { id: this.id },
                React.createElement("div", { className: "border shadow rounded pt-2 pb-2", style: {
                        backgroundColor: 'var(--white)'
                    } },
                    React.createElement(reactstrap_1.DropdownItem, { toggle: this.props.toggle, onClick: () => this.props.onCreateFolder() },
                        React.createElement(FontAwesomeIcon_1.FontAwesomeIcon, { name: "fas fa-folder-plus" }),
                        " Create Folder")))));
    }
}
exports.FolderContextMenu = FolderContextMenu;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9sZGVyQ29udGV4dE1lbnUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJGb2xkZXJDb250ZXh0TWVudS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsNkNBQStCO0FBQy9CLHVGQUlnRDtBQUNoRCwyQ0FBd0M7QUFDeEMsb0ZBQStFO0FBRS9FLElBQUksUUFBUSxHQUFXLENBQUMsQ0FBQztBQUV6QixNQUFhLGlCQUFrQixTQUFRLEtBQUssQ0FBQyxhQUE2QjtJQU10RSxZQUFZLEtBQWEsRUFBRSxPQUFZO1FBQ25DLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFdEIsSUFBSSxDQUFDLEVBQUUsR0FBRyxzQkFBc0IsR0FBRyxRQUFRLEVBQUUsQ0FBQztRQUU5QyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsdURBQTBCLENBQUMsRUFBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUM7SUFFekUsQ0FBQztJQUVNLE1BQU07UUFFVCxPQUFPLENBRUg7WUFFSSw2Q0FBUyxJQUFJLENBQUMsbUJBQW1CLEdBQzVCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNsQjtZQUVOLG9CQUFDLCtDQUFrQixJQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtnQkFFM0IsNkJBQUssU0FBUyxFQUFDLGlDQUFpQyxFQUMzQyxLQUFLLEVBQUU7d0JBQ0gsZUFBZSxFQUFFLGNBQWM7cUJBQ2xDO29CQUVGLG9CQUFDLHlCQUFZLElBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUN6QixPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUU7d0JBQ3BELG9CQUFDLGlDQUFlLElBQUMsSUFBSSxFQUFDLG9CQUFvQixHQUFFO3lDQUNqQyxDQUViLENBRVcsQ0FFbkIsQ0FFVCxDQUFDO0lBRU4sQ0FBQztDQUVKO0FBL0NELDhDQStDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7XG4gICAgQ29udGV4dE1lbnVIYW5kbGVycyxcbiAgICBDb250ZXh0TWVudVdyYXBwZXIsXG4gICAgcHJlcGFyZUNvbnRleHRNZW51SGFuZGxlcnNcbn0gZnJvbSAnQGJ1cnRvbmF0b3IvcmVhY3QtY29udGV4dC1tZW51LXdyYXBwZXInO1xuaW1wb3J0IHtEcm9wZG93bkl0ZW19IGZyb20gJ3JlYWN0c3RyYXAnO1xuaW1wb3J0IHtGb250QXdlc29tZUljb259IGZyb20gXCIuLi8uLi8uLi93ZWIvanMvdWkvZm9udGF3ZXNvbWUvRm9udEF3ZXNvbWVJY29uXCI7XG5cbmxldCBzZXF1ZW5jZTogbnVtYmVyID0gMDtcblxuZXhwb3J0IGNsYXNzIEZvbGRlckNvbnRleHRNZW51IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgcHJpdmF0ZSBjb250ZXh0TWVudUhhbmRsZXJzOiBDb250ZXh0TWVudUhhbmRsZXJzO1xuXG4gICAgcHJpdmF0ZSBpZDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcywgY29udGV4dDogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcblxuICAgICAgICB0aGlzLmlkID0gJ2ZvbGRlci1jb250ZXh0LW1lbnUtJyArIHNlcXVlbmNlKys7XG5cbiAgICAgICAgdGhpcy5jb250ZXh0TWVudUhhbmRsZXJzID0gcHJlcGFyZUNvbnRleHRNZW51SGFuZGxlcnMoe2lkOiB0aGlzLmlkfSk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgIDxkaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IHsuLi50aGlzLmNvbnRleHRNZW51SGFuZGxlcnN9PlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxDb250ZXh0TWVudVdyYXBwZXIgaWQ9e3RoaXMuaWR9PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIHNoYWRvdyByb3VuZGVkIHB0LTIgcGItMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndmFyKC0td2hpdGUpJ1xuICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIHRvZ2dsZT17dGhpcy5wcm9wcy50b2dnbGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMub25DcmVhdGVGb2xkZXIoKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBuYW1lPVwiZmFzIGZhLWZvbGRlci1wbHVzXCIvPiBDcmVhdGUgRm9sZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvQ29udGV4dE1lbnVXcmFwcGVyPlxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICApO1xuXG4gICAgfVxuXG59XG5cblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgcmVhZG9ubHkgb25DcmVhdGVGb2xkZXI6ICgpID0+IHZvaWQ7XG4gICAgcmVhZG9ubHkgdG9nZ2xlOiBib29sZWFuO1xufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbn1cblxuXG4iXX0=