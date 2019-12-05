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
const Logger_1 = require("polar-shared/src/logger/Logger");
const Dialogs_1 = require("../../../ui/dialogs/Dialogs");
const Functions_1 = require("polar-shared/src/util/Functions");
const log = Logger_1.Logger.create();
const Styles = {
    DropdownMenu: {
        zIndex: 999,
        fontSize: '14px'
    },
};
class FlashcardDropdown extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.toggle = this.toggle.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.onDeleteSelected = this.onDeleteSelected.bind(this);
        this.state = {
            open: false,
        };
    }
    render() {
        const toggleID = this.props.id + '-dropdown-toggle';
        return (React.createElement("div", { className: "text-right ml-1" },
            React.createElement(reactstrap_1.Dropdown, { id: this.props.id, isOpen: this.state.open, toggle: this.toggle },
                React.createElement(reactstrap_1.DropdownToggle, { color: "light", disabled: this.props.disabled, className: "doc-dropdown-button btn text-muted pl-1 pr-1", id: toggleID },
                    React.createElement("i", { className: "fas fa-ellipsis-h" })),
                React.createElement(reactstrap_1.DropdownMenu, { right: true },
                    React.createElement(reactstrap_1.DropdownItem, { className: "text-danger", onClick: () => this.onDeleteSelected() }, "Delete")))));
    }
    onDeleteSelected() {
        Dialogs_1.Dialogs.confirm({
            title: "Are you sure you want to delete this flashcard?",
            subtitle: "Once deleted this flashcard will no longer be available.",
            type: 'danger',
            onCancel: Functions_1.NULL_FUNCTION,
            onConfirm: () => this.props.onDelete(this.props.flashcard)
        });
    }
    onDelete() {
        this.props.onDelete(this.props.flashcard);
    }
    toggle() {
        this.setState({
            open: !this.state.open
        });
    }
}
exports.FlashcardDropdown = FlashcardDropdown;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmxhc2hjYXJkRHJvcGRvd24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJGbGFzaGNhcmREcm9wZG93bi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsNkNBQStCO0FBQy9CLDJDQUFnRjtBQUNoRiwyREFBc0Q7QUFHdEQseURBQW9EO0FBQ3BELCtEQUE4RDtBQUU5RCxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFNUIsTUFBTSxNQUFNLEdBQWM7SUFFdEIsWUFBWSxFQUFFO1FBQ1YsTUFBTSxFQUFFLEdBQUc7UUFDWCxRQUFRLEVBQUUsTUFBTTtLQUNuQjtDQUVKLENBQUM7QUFFRixNQUFhLGlCQUFrQixTQUFRLEtBQUssQ0FBQyxTQUF5QjtJQUVsRSxZQUFZLEtBQWEsRUFBRSxPQUFZO1FBQ25DLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXpELElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDVCxJQUFJLEVBQUUsS0FBSztTQUNkLENBQUM7SUFFTixDQUFDO0lBRU0sTUFBTTtRQUVULE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLGtCQUFrQixDQUFDO1FBRXBELE9BQU8sQ0FFSCw2QkFBSyxTQUFTLEVBQUMsaUJBQWlCO1lBRTVCLG9CQUFDLHFCQUFRLElBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07Z0JBRXJFLG9CQUFDLDJCQUFjLElBQUMsS0FBSyxFQUFDLE9BQU8sRUFDYixRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQzdCLFNBQVMsRUFBQyw4Q0FBOEMsRUFDeEQsRUFBRSxFQUFFLFFBQVE7b0JBRXhCLDJCQUFHLFNBQVMsRUFBQyxtQkFBbUIsR0FBRSxDQUVyQjtnQkFFakIsb0JBQUMseUJBQVksSUFBQyxLQUFLO29CQUlmLG9CQUFDLHlCQUFZLElBQUMsU0FBUyxFQUFDLGFBQWEsRUFBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLGFBRTdELENBRUosQ0FHUixDQUVULENBRVQsQ0FBQztJQUVOLENBQUM7SUFFTyxnQkFBZ0I7UUFFcEIsaUJBQU8sQ0FBQyxPQUFPLENBQUM7WUFDWixLQUFLLEVBQUUsaURBQWlEO1lBQ3hELFFBQVEsRUFBRSwwREFBMEQ7WUFDcEUsSUFBSSxFQUFFLFFBQVE7WUFDZCxRQUFRLEVBQUUseUJBQWE7WUFDdkIsU0FBUyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDO1NBQzdELENBQUMsQ0FBQztJQUVQLENBQUM7SUFFTyxRQUFRO1FBQ1osSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRU8sTUFBTTtRQUVWLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDVixJQUFJLEVBQUUsQ0FBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUk7U0FDMUIsQ0FBQyxDQUFDO0lBRVAsQ0FBQztDQUVKO0FBN0VELDhDQTZFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7RHJvcGRvd24sIERyb3Bkb3duSXRlbSwgRHJvcGRvd25NZW51LCBEcm9wZG93blRvZ2dsZX0gZnJvbSAncmVhY3RzdHJhcCc7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7SVN0eWxlTWFwfSBmcm9tICcuLi8uLi8uLi9yZWFjdC9JU3R5bGVNYXAnO1xuaW1wb3J0IHtEb2NBbm5vdGF0aW9ufSBmcm9tICcuLi8uLi9Eb2NBbm5vdGF0aW9uJztcbmltcG9ydCB7RGlhbG9nc30gZnJvbSBcIi4uLy4uLy4uL3VpL2RpYWxvZ3MvRGlhbG9nc1wiO1xuaW1wb3J0IHtOVUxMX0ZVTkNUSU9OfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy91dGlsL0Z1bmN0aW9uc1wiO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbmNvbnN0IFN0eWxlczogSVN0eWxlTWFwID0ge1xuXG4gICAgRHJvcGRvd25NZW51OiB7XG4gICAgICAgIHpJbmRleDogOTk5LFxuICAgICAgICBmb250U2l6ZTogJzE0cHgnXG4gICAgfSxcblxufTtcblxuZXhwb3J0IGNsYXNzIEZsYXNoY2FyZERyb3Bkb3duIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzLCBjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuXG4gICAgICAgIHRoaXMudG9nZ2xlID0gdGhpcy50b2dnbGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkRlbGV0ZSA9IHRoaXMub25EZWxldGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkRlbGV0ZVNlbGVjdGVkID0gdGhpcy5vbkRlbGV0ZVNlbGVjdGVkLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIG9wZW46IGZhbHNlLFxuICAgICAgICB9O1xuXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICBjb25zdCB0b2dnbGVJRCA9IHRoaXMucHJvcHMuaWQgKyAnLWRyb3Bkb3duLXRvZ2dsZSc7XG5cbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0IG1sLTFcIj5cblxuICAgICAgICAgICAgICAgIDxEcm9wZG93biBpZD17dGhpcy5wcm9wcy5pZH0gaXNPcGVuPXt0aGlzLnN0YXRlLm9wZW59IHRvZ2dsZT17dGhpcy50b2dnbGV9PlxuXG4gICAgICAgICAgICAgICAgICAgIDxEcm9wZG93blRvZ2dsZSBjb2xvcj1cImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZG9jLWRyb3Bkb3duLWJ1dHRvbiBidG4gdGV4dC1tdXRlZCBwbC0xIHByLTFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e3RvZ2dsZUlEfT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWVsbGlwc2lzLWhcIi8+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93blRvZ2dsZT5cblxuICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25NZW51IHJpZ2h0PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyo8RHJvcGRvd25JdGVtIGRpdmlkZXIgLz4qL31cblxuICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiIG9uQ2xpY2s9eygpID0+IHRoaXMub25EZWxldGVTZWxlY3RlZCgpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZWxldGVcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd25NZW51PlxuXG5cbiAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICApO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkRlbGV0ZVNlbGVjdGVkKCkge1xuXG4gICAgICAgIERpYWxvZ3MuY29uZmlybSh7XG4gICAgICAgICAgICB0aXRsZTogXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgZmxhc2hjYXJkP1wiLFxuICAgICAgICAgICAgc3VidGl0bGU6IFwiT25jZSBkZWxldGVkIHRoaXMgZmxhc2hjYXJkIHdpbGwgbm8gbG9uZ2VyIGJlIGF2YWlsYWJsZS5cIixcbiAgICAgICAgICAgIHR5cGU6ICdkYW5nZXInLFxuICAgICAgICAgICAgb25DYW5jZWw6IE5VTExfRlVOQ1RJT04sXG4gICAgICAgICAgICBvbkNvbmZpcm06ICgpID0+IHRoaXMucHJvcHMub25EZWxldGUodGhpcy5wcm9wcy5mbGFzaGNhcmQpXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkRlbGV0ZSgpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkRlbGV0ZSh0aGlzLnByb3BzLmZsYXNoY2FyZCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB0b2dnbGUoKSB7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBvcGVuOiAhIHRoaXMuc3RhdGUub3BlblxuICAgICAgICB9KTtcblxuICAgIH1cblxufVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgICByZWFkb25seSBpZDogc3RyaW5nO1xuICAgIHJlYWRvbmx5IGRpc2FibGVkPzogYm9vbGVhbjtcbiAgICByZWFkb25seSBmbGFzaGNhcmQ6IERvY0Fubm90YXRpb247XG4gICAgcmVhZG9ubHkgb25EZWxldGU6IChmbGFzaGNhcmQ6IERvY0Fubm90YXRpb24pID0+IHZvaWQ7XG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xuXG4gICAgb3BlbjogYm9vbGVhbjtcblxufVxuIl19