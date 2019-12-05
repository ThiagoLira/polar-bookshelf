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
const react_context_menu_wrapper_2 = require("@burtonator/react-context-menu-wrapper");
const react_dropdown_1 = __importStar(require("@burtonator/react-dropdown"));
const Functions_1 = require("polar-shared/src/util/Functions");
const KeyBoundMenuItem_1 = require("./KeyBoundMenuItem");
let sequence = 0;
class DocContextMenu extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.id = 'doc-context-menu-' + sequence++;
        this.contextMenuHandlers = react_context_menu_wrapper_1.prepareContextMenuHandlers({ id: this.id });
    }
    render() {
        return (React.createElement("div", null,
            React.createElement("div", Object.assign({}, this.contextMenuHandlers), this.props.children),
            React.createElement(react_context_menu_wrapper_2.ContextMenuWrapper, { id: this.id },
                React.createElement(react_dropdown_1.default, { open: true, onToggle: Functions_1.NULL_FUNCTION, onSelect: Functions_1.NULL_FUNCTION },
                    React.createElement(react_dropdown_1.DropdownMenu, null,
                        React.createElement(react_dropdown_1.MenuItem, { onSelect: () => this.props.onSetTitle() },
                            React.createElement(KeyBoundMenuItem_1.KeyBoundMenuItem, { text: "Set Title", keyBinding: "C-t" })),
                        React.createElement(react_dropdown_1.MenuItem, { onSelect: () => this.props.onSetTitle() },
                            React.createElement(KeyBoundMenuItem_1.KeyBoundMenuItem, { text: "Do something else", keyBinding: "C-f" })),
                        React.createElement(react_dropdown_1.MenuItem, { onSelect: () => this.props.onSetTitle() },
                            React.createElement("div", { className: "text-danger" }, "Delete")))))));
    }
}
exports.DocContextMenu = DocContextMenu;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jQ29udGV4dE1lbnUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJEb2NDb250ZXh0TWVudS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsNkNBQStCO0FBQy9CLHVGQUFrRjtBQUVsRix1RkFBMEU7QUFFMUUsNkVBQTRFO0FBQzVFLCtEQUE4RDtBQUM5RCx5REFBb0Q7QUFFcEQsSUFBSSxRQUFRLEdBQVcsQ0FBQyxDQUFDO0FBRXpCLE1BQWEsY0FBZSxTQUFRLEtBQUssQ0FBQyxTQUF5QjtJQU0vRCxZQUFZLEtBQWEsRUFBRSxPQUFZO1FBQ25DLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFdEIsSUFBSSxDQUFDLEVBQUUsR0FBRyxtQkFBbUIsR0FBRyxRQUFRLEVBQUUsQ0FBQztRQUUzQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsdURBQTBCLENBQUMsRUFBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUM7SUFFekUsQ0FBQztJQUVNLE1BQU07UUFFVCxPQUFPLENBRUg7WUFFSSw2Q0FBUyxJQUFJLENBQUMsbUJBQW1CLEdBQzVCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNsQjtZQUVOLG9CQUFDLCtDQUFrQixJQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtnQkFFM0Isb0JBQUMsd0JBQVEsSUFBQyxJQUFJLEVBQUUsSUFBSSxFQUNWLFFBQVEsRUFBRSx5QkFBYSxFQUN2QixRQUFRLEVBQUUseUJBQWE7b0JBRTdCLG9CQUFDLDZCQUFZO3dCQUVULG9CQUFDLHlCQUFRLElBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFOzRCQUU3QyxvQkFBQyxtQ0FBZ0IsSUFBQyxJQUFJLEVBQUMsV0FBVyxFQUFDLFVBQVUsRUFBQyxLQUFLLEdBQUUsQ0FFOUM7d0JBRVgsb0JBQUMseUJBQVEsSUFBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUU7NEJBRTdDLG9CQUFDLG1DQUFnQixJQUFDLElBQUksRUFBQyxtQkFBbUIsRUFBQyxVQUFVLEVBQUMsS0FBSyxHQUFFLENBRXREO3dCQUdYLG9CQUFDLHlCQUFRLElBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFOzRCQUU3Qyw2QkFBSyxTQUFTLEVBQUMsYUFBYSxhQUV0QixDQUVDLENBRUEsQ0FFUixDQUVNLENBRW5CLENBRVQsQ0FBQztJQUVOLENBQUM7Q0FFSjtBQWxFRCx3Q0FrRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3ByZXBhcmVDb250ZXh0TWVudUhhbmRsZXJzfSBmcm9tICdAYnVydG9uYXRvci9yZWFjdC1jb250ZXh0LW1lbnUtd3JhcHBlcic7XG5pbXBvcnQge0NvbnRleHRNZW51SGFuZGxlcnN9IGZyb20gJ0BidXJ0b25hdG9yL3JlYWN0LWNvbnRleHQtbWVudS13cmFwcGVyJztcbmltcG9ydCB7Q29udGV4dE1lbnVXcmFwcGVyfSBmcm9tICdAYnVydG9uYXRvci9yZWFjdC1jb250ZXh0LW1lbnUtd3JhcHBlcic7XG5pbXBvcnQge0NvbnRleHRNZW51fSBmcm9tICcuLi8uLi9qcy91aS9jb250ZXh0X21lbnUvQ29udGV4dE1lbnUnO1xuaW1wb3J0IERyb3Bkb3duLCB7RHJvcGRvd25NZW51LCBNZW51SXRlbX0gZnJvbSAnQGJ1cnRvbmF0b3IvcmVhY3QtZHJvcGRvd24nO1xuaW1wb3J0IHtOVUxMX0ZVTkNUSU9OfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvRnVuY3Rpb25zJztcbmltcG9ydCB7S2V5Qm91bmRNZW51SXRlbX0gZnJvbSAnLi9LZXlCb3VuZE1lbnVJdGVtJztcblxubGV0IHNlcXVlbmNlOiBudW1iZXIgPSAwO1xuXG5leHBvcnQgY2xhc3MgRG9jQ29udGV4dE1lbnUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICAgIHByaXZhdGUgY29udGV4dE1lbnVIYW5kbGVyczogQ29udGV4dE1lbnVIYW5kbGVycztcblxuICAgIHByaXZhdGUgaWQ6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJUHJvcHMsIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG5cbiAgICAgICAgdGhpcy5pZCA9ICdkb2MtY29udGV4dC1tZW51LScgKyBzZXF1ZW5jZSsrO1xuXG4gICAgICAgIHRoaXMuY29udGV4dE1lbnVIYW5kbGVycyA9IHByZXBhcmVDb250ZXh0TWVudUhhbmRsZXJzKHtpZDogdGhpcy5pZH0pO1xuXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICA8ZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiB7Li4udGhpcy5jb250ZXh0TWVudUhhbmRsZXJzfT5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8Q29udGV4dE1lbnVXcmFwcGVyIGlkPXt0aGlzLmlkfT5cblxuICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd24gb3Blbj17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVG9nZ2xlPXtOVUxMX0ZVTkNUSU9OfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Q9e05VTExfRlVOQ1RJT059PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25NZW51PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIG9uU2VsZWN0PXsoKSA9PiB0aGlzLnByb3BzLm9uU2V0VGl0bGUoKX0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEtleUJvdW5kTWVudUl0ZW0gdGV4dD1cIlNldCBUaXRsZVwiIGtleUJpbmRpbmc9XCJDLXRcIi8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIG9uU2VsZWN0PXsoKSA9PiB0aGlzLnByb3BzLm9uU2V0VGl0bGUoKX0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEtleUJvdW5kTWVudUl0ZW0gdGV4dD1cIkRvIHNvbWV0aGluZyBlbHNlXCIga2V5QmluZGluZz1cIkMtZlwiLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBvblNlbGVjdD17KCkgPT4gdGhpcy5wcm9wcy5vblNldFRpdGxlKCl9PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlbGV0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd25NZW51PlxuXG4gICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24+XG5cbiAgICAgICAgICAgICAgICA8L0NvbnRleHRNZW51V3JhcHBlcj5cblxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgKTtcblxuICAgIH1cblxufVxuXG5cbmludGVyZmFjZSBJUHJvcHMge1xuICAgIG9uU2V0VGl0bGU6ICgpID0+IHZvaWQ7XG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xufVxuXG5cbiJdfQ==