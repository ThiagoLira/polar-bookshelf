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
const Dialogs_1 = require("../../ui/dialogs/Dialogs");
const Functions_1 = require("polar-shared/src/util/Functions");
class CommentDropdown extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.open = false;
        this.toggle = this.toggle.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.onDeleteSelected = this.onDeleteSelected.bind(this);
        this.state = {
            open: this.open,
        };
    }
    render() {
        const toggleID = this.props.id + '-dropdown-toggle';
        return (React.createElement("div", { className: "text-right" },
            React.createElement(reactstrap_1.Dropdown, { id: this.props.id, isOpen: this.state.open, toggle: this.toggle },
                React.createElement(reactstrap_1.DropdownToggle, { color: "light", className: "doc-dropdown-button btn text-muted pl-1 pr-1", disabled: this.props.disabled, id: toggleID },
                    React.createElement("i", { className: "fas fa-ellipsis-h" })),
                React.createElement(reactstrap_1.DropdownMenu, { right: true },
                    React.createElement(reactstrap_1.DropdownItem, { className: "text-danger", onClick: () => this.onDeleteSelected() }, "Delete")))));
    }
    onDeleteSelected() {
        Dialogs_1.Dialogs.confirm({
            title: "Are you sure you want to delete this comment? ",
            subtitle: 'This will permanently delete this comment.',
            type: 'danger',
            onCancel: Functions_1.NULL_FUNCTION,
            onConfirm: () => this.onDelete()
        });
    }
    onDelete() {
        this.props.onDelete(this.props.comment);
    }
    toggle() {
        this.open = !this.state.open;
        this.refresh();
    }
    refresh() {
        this.setState({
            open: this.open,
        });
    }
}
exports.CommentDropdown = CommentDropdown;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tbWVudERyb3Bkb3duLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQ29tbWVudERyb3Bkb3duLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSw2Q0FBK0I7QUFDL0IsMkNBQWdGO0FBRWhGLHNEQUFpRDtBQUNqRCwrREFBOEQ7QUFFOUQsTUFBYSxlQUFnQixTQUFRLEtBQUssQ0FBQyxTQUF5QjtJQUloRSxZQUFZLEtBQWEsRUFBRSxPQUFZO1FBQ25DLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFIbEIsU0FBSSxHQUFZLEtBQUssQ0FBQztRQUsxQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFekQsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNULElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtTQUNsQixDQUFDO0lBRU4sQ0FBQztJQUVNLE1BQU07UUFFVCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsR0FBRyxrQkFBa0IsQ0FBQztRQUVwRCxPQUFPLENBRUgsNkJBQUssU0FBUyxFQUFDLFlBQVk7WUFFdkIsb0JBQUMscUJBQVEsSUFBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQ2pCLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFDdkIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO2dCQUV6QixvQkFBQywyQkFBYyxJQUFDLEtBQUssRUFBQyxPQUFPLEVBQ2IsU0FBUyxFQUFDLDhDQUE4QyxFQUN4RCxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQzdCLEVBQUUsRUFBRSxRQUFRO29CQUV4QiwyQkFBRyxTQUFTLEVBQUMsbUJBQW1CLEdBQUUsQ0FFckI7Z0JBRWpCLG9CQUFDLHlCQUFZLElBQUMsS0FBSztvQkFFZixvQkFBQyx5QkFBWSxJQUFDLFNBQVMsRUFBQyxhQUFhLEVBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxhQUU3RCxDQUVKLENBR1IsQ0FFVCxDQUVULENBQUM7SUFFTixDQUFDO0lBRU8sZ0JBQWdCO1FBRXBCLGlCQUFPLENBQUMsT0FBTyxDQUFDO1lBQ1osS0FBSyxFQUFFLGdEQUFnRDtZQUN2RCxRQUFRLEVBQUUsNENBQTRDO1lBQ3RELElBQUksRUFBRSxRQUFRO1lBQ2QsUUFBUSxFQUFFLHlCQUFhO1lBQ3ZCLFNBQVMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1NBQ25DLENBQUMsQ0FBQztJQUVQLENBQUM7SUFFTyxRQUFRO1FBQ1osSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRU8sTUFBTTtRQUVWLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztRQUU5QixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFFbkIsQ0FBQztJQUVPLE9BQU87UUFFWCxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ1YsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1NBQ2xCLENBQUMsQ0FBQztJQUVQLENBQUM7Q0FFSjtBQXZGRCwwQ0F1RkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0Ryb3Bkb3duLCBEcm9wZG93bkl0ZW0sIERyb3Bkb3duTWVudSwgRHJvcGRvd25Ub2dnbGV9IGZyb20gJ3JlYWN0c3RyYXAnO1xuaW1wb3J0IHtEb2NBbm5vdGF0aW9ufSBmcm9tICcuLi9Eb2NBbm5vdGF0aW9uJztcbmltcG9ydCB7RGlhbG9nc30gZnJvbSBcIi4uLy4uL3VpL2RpYWxvZ3MvRGlhbG9nc1wiO1xuaW1wb3J0IHtOVUxMX0ZVTkNUSU9OfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy91dGlsL0Z1bmN0aW9uc1wiO1xuXG5leHBvcnQgY2xhc3MgQ29tbWVudERyb3Bkb3duIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgICBwcml2YXRlIG9wZW46IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJUHJvcHMsIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG5cbiAgICAgICAgdGhpcy50b2dnbGUgPSB0aGlzLnRvZ2dsZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uRGVsZXRlID0gdGhpcy5vbkRlbGV0ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uRGVsZXRlU2VsZWN0ZWQgPSB0aGlzLm9uRGVsZXRlU2VsZWN0ZWQuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgb3BlbjogdGhpcy5vcGVuLFxuICAgICAgICB9O1xuXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICBjb25zdCB0b2dnbGVJRCA9IHRoaXMucHJvcHMuaWQgKyAnLWRyb3Bkb3duLXRvZ2dsZSc7XG5cbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+XG5cbiAgICAgICAgICAgICAgICA8RHJvcGRvd24gaWQ9e3RoaXMucHJvcHMuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlzT3Blbj17dGhpcy5zdGF0ZS5vcGVufVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGU9e3RoaXMudG9nZ2xlfT5cblxuICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25Ub2dnbGUgY29sb3I9XCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkb2MtZHJvcGRvd24tYnV0dG9uIGJ0biB0ZXh0LW11dGVkIHBsLTEgcHItMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXt0b2dnbGVJRH0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1lbGxpcHNpcy1oXCIvPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd25Ub2dnbGU+XG5cbiAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duTWVudSByaWdodD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiIG9uQ2xpY2s9eygpID0+IHRoaXMub25EZWxldGVTZWxlY3RlZCgpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZWxldGVcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd25NZW51PlxuXG5cbiAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICApO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkRlbGV0ZVNlbGVjdGVkKCkge1xuXG4gICAgICAgIERpYWxvZ3MuY29uZmlybSh7XG4gICAgICAgICAgICB0aXRsZTogXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgY29tbWVudD8gXCIsXG4gICAgICAgICAgICBzdWJ0aXRsZTogJ1RoaXMgd2lsbCBwZXJtYW5lbnRseSBkZWxldGUgdGhpcyBjb21tZW50LicsXG4gICAgICAgICAgICB0eXBlOiAnZGFuZ2VyJyxcbiAgICAgICAgICAgIG9uQ2FuY2VsOiBOVUxMX0ZVTkNUSU9OLFxuICAgICAgICAgICAgb25Db25maXJtOiAoKSA9PiB0aGlzLm9uRGVsZXRlKClcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uRGVsZXRlKCkge1xuICAgICAgICB0aGlzLnByb3BzLm9uRGVsZXRlKHRoaXMucHJvcHMuY29tbWVudCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB0b2dnbGUoKSB7XG5cbiAgICAgICAgdGhpcy5vcGVuID0gISB0aGlzLnN0YXRlLm9wZW47XG5cbiAgICAgICAgdGhpcy5yZWZyZXNoKCk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIHJlZnJlc2goKSB7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBvcGVuOiB0aGlzLm9wZW4sXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG59XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICAgIHJlYWRvbmx5IGlkOiBzdHJpbmc7XG4gICAgcmVhZG9ubHkgY29tbWVudDogRG9jQW5ub3RhdGlvbjtcbiAgICByZWFkb25seSBvbkRlbGV0ZTogKGNvbW1lbnQ6IERvY0Fubm90YXRpb24pID0+IHZvaWQ7XG4gICAgcmVhZG9ubHkgZGlzYWJsZWQ/OiBib29sZWFuO1xufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcblxuICAgIG9wZW46IGJvb2xlYW47XG5cbn1cbiJdfQ==