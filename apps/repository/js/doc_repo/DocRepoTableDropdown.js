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
const ListSelector_1 = require("../../../../web/js/ui/list_selector/ListSelector");
const LightboxPopover_1 = require("../../../../web/js/ui/lightbox_popover/LightboxPopover");
const DocRepoTableColumns_1 = require("./DocRepoTableColumns");
const Dropdown_1 = __importDefault(require("reactstrap/lib/Dropdown"));
const DropdownToggle_1 = __importDefault(require("reactstrap/lib/DropdownToggle"));
const DropdownMenu_1 = __importDefault(require("reactstrap/lib/DropdownMenu"));
const PopoverBody_1 = __importDefault(require("reactstrap/lib/PopoverBody"));
const DropdownItem_1 = __importDefault(require("reactstrap/lib/DropdownItem"));
const Styles = {
    LightboxPopover: {
        fontSize: '14px',
    }
};
class DocRepoTableDropdown extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.open = false;
        this.selected = 'none';
        this.toggle = this.toggle.bind(this);
        this.select = this.select.bind(this);
        this.state = {
            open: this.open,
            selected: this.selected,
        };
    }
    render() {
        const columns = this.props.options || Object.values(new DocRepoTableColumns_1.DocRepoTableColumns());
        return (React.createElement("div", { className: "text-right" },
            React.createElement(Dropdown_1.default, { id: this.props.id, isOpen: this.state.open, toggle: this.toggle },
                React.createElement(DropdownToggle_1.default, { color: "light", size: "md", className: "table-dropdown-button btn text-muted p-1 m-0", id: this.props.id + '-dropdown-toggle' },
                    React.createElement("i", { className: "fas fa-ellipsis-h" })),
                React.createElement(DropdownMenu_1.default, { className: "shadow", right: true },
                    React.createElement(DropdownItem_1.default, { onClick: () => this.select('change-columns') }, "Change Columns"))),
            React.createElement(LightboxPopover_1.LightboxPopover, { placement: 'bottom', open: this.selected === 'change-columns', target: this.props.id + '-dropdown-toggle', className: "p-0", style: Styles.LightboxPopover },
                React.createElement(PopoverBody_1.default, null,
                    React.createElement(ListSelector_1.ListSelector, { options: columns, id: this.props.id + 'list-options', title: "Select columns to display in the table:", onCancel: () => this.select('none'), onSet: (options) => this.onSelectedColumns(options), onChange: (value) => console.log(value) })))));
    }
    toggle() {
        if (this.selected !== 'none') {
            this.open = false;
        }
        else {
            this.open = !this.state.open;
        }
        this.refresh();
    }
    select(selected) {
        this.selected = selected;
        this.refresh();
    }
    refresh() {
        this.setState({
            open: this.open,
            selected: this.selected
        });
    }
    onSelectedColumns(options) {
        this.select('none');
        if (this.props.onSelectedColumns) {
            this.props.onSelectedColumns(options);
        }
    }
}
exports.DocRepoTableDropdown = DocRepoTableDropdown;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jUmVwb1RhYmxlRHJvcGRvd24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJEb2NSZXBvVGFibGVEcm9wZG93bi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQStCO0FBRS9CLG1GQUE4RjtBQUM5Riw0RkFBdUY7QUFDdkYsK0RBQTBEO0FBQzFELHVFQUErQztBQUMvQyxtRkFBMkQ7QUFDM0QsK0VBQXVEO0FBQ3ZELDZFQUFxRDtBQUNyRCwrRUFBdUQ7QUFFdkQsTUFBTSxNQUFNLEdBQWM7SUFFdEIsZUFBZSxFQUFFO1FBQ2IsUUFBUSxFQUFFLE1BQU07S0FFbkI7Q0FFSixDQUFDO0FBRUYsTUFBYSxvQkFBcUIsU0FBUSxLQUFLLENBQUMsU0FBeUI7SUFLckUsWUFBWSxLQUFhLEVBQUUsT0FBWTtRQUNuQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBSmxCLFNBQUksR0FBWSxLQUFLLENBQUM7UUFDdEIsYUFBUSxHQUFtQixNQUFNLENBQUM7UUFLdEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBS3JDLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDVCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7U0FDMUIsQ0FBQztJQUVOLENBQUM7SUFFTSxNQUFNO1FBRVQsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLHlDQUFtQixFQUFFLENBQUMsQ0FBQztRQUUvRSxPQUFPLENBRUgsNkJBQUssU0FBUyxFQUFDLFlBQVk7WUFFdkIsb0JBQUMsa0JBQVEsSUFBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQ2pCLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFDdkIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO2dCQUV6QixvQkFBQyx3QkFBYyxJQUFDLEtBQUssRUFBQyxPQUFPLEVBQ2IsSUFBSSxFQUFDLElBQUksRUFDVCxTQUFTLEVBQUMsOENBQThDLEVBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLGtCQUFrQjtvQkFDM0csMkJBQUcsU0FBUyxFQUFDLG1CQUFtQixHQUFLLENBQ3hCO2dCQUVqQixvQkFBQyxzQkFBWSxJQUFDLFNBQVMsRUFBQyxRQUFRLEVBQUMsS0FBSztvQkFFbEMsb0JBQUMsc0JBQVksSUFBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxxQkFFM0MsQ0FFSixDQUdSO1lBRVgsb0JBQUMsaUNBQWUsSUFBQyxTQUFTLEVBQUUsUUFBUSxFQUNuQixJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsS0FBSyxnQkFBZ0IsRUFDeEMsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLGtCQUFrQixFQUMxQyxTQUFTLEVBQUMsS0FBSyxFQUNmLEtBQUssRUFBRSxNQUFNLENBQUMsZUFBZTtnQkFFMUMsb0JBQUMscUJBQVc7b0JBRVIsb0JBQUMsMkJBQVksSUFBQyxPQUFPLEVBQUUsT0FBTyxFQUNoQixFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUcsY0FBYyxFQUNsQyxLQUFLLEVBQUMseUNBQXlDLEVBQy9DLFFBQVEsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUNuQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsRUFDbkQsUUFBUSxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUV0QyxDQUVMLENBRUEsQ0FFaEIsQ0FDVCxDQUFDO0lBRU4sQ0FBQztJQUVPLE1BQU07UUFFVixJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssTUFBTSxFQUFFO1lBQzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1NBQ3JCO2FBQU07WUFDSCxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7U0FDakM7UUFFRCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFFbkIsQ0FBQztJQUVPLE1BQU0sQ0FBQyxRQUF3QjtRQUNuQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVPLE9BQU87UUFFWCxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ1YsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1NBQzFCLENBQUMsQ0FBQztJQUVQLENBQUM7SUFJTyxpQkFBaUIsQ0FBQyxPQUF5QjtRQUUvQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXBCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRTtZQUM5QixJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3pDO0lBRUwsQ0FBQztDQUVKO0FBbEhELG9EQWtIQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7SVN0eWxlTWFwfSBmcm9tICcuLi8uLi8uLi8uLi93ZWIvanMvcmVhY3QvSVN0eWxlTWFwJztcbmltcG9ydCB7TGlzdE9wdGlvblR5cGUsIExpc3RTZWxlY3Rvcn0gZnJvbSBcIi4uLy4uLy4uLy4uL3dlYi9qcy91aS9saXN0X3NlbGVjdG9yL0xpc3RTZWxlY3RvclwiO1xuaW1wb3J0IHtMaWdodGJveFBvcG92ZXJ9IGZyb20gJy4uLy4uLy4uLy4uL3dlYi9qcy91aS9saWdodGJveF9wb3BvdmVyL0xpZ2h0Ym94UG9wb3Zlcic7XG5pbXBvcnQge0RvY1JlcG9UYWJsZUNvbHVtbnN9IGZyb20gJy4vRG9jUmVwb1RhYmxlQ29sdW1ucyc7XG5pbXBvcnQgRHJvcGRvd24gZnJvbSAncmVhY3RzdHJhcC9saWIvRHJvcGRvd24nO1xuaW1wb3J0IERyb3Bkb3duVG9nZ2xlIGZyb20gJ3JlYWN0c3RyYXAvbGliL0Ryb3Bkb3duVG9nZ2xlJztcbmltcG9ydCBEcm9wZG93bk1lbnUgZnJvbSAncmVhY3RzdHJhcC9saWIvRHJvcGRvd25NZW51JztcbmltcG9ydCBQb3BvdmVyQm9keSBmcm9tICdyZWFjdHN0cmFwL2xpYi9Qb3BvdmVyQm9keSc7XG5pbXBvcnQgRHJvcGRvd25JdGVtIGZyb20gJ3JlYWN0c3RyYXAvbGliL0Ryb3Bkb3duSXRlbSc7XG5cbmNvbnN0IFN0eWxlczogSVN0eWxlTWFwID0ge1xuXG4gICAgTGlnaHRib3hQb3BvdmVyOiB7XG4gICAgICAgIGZvbnRTaXplOiAnMTRweCcsXG4gICAgICAgIC8vIG1pbldpZHRoOiAnNTAwcHgnXG4gICAgfVxuXG59O1xuXG5leHBvcnQgY2xhc3MgRG9jUmVwb1RhYmxlRHJvcGRvd24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICAgIHByaXZhdGUgb3BlbjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgc2VsZWN0ZWQ6IFNlbGVjdGVkT3B0aW9uID0gJ25vbmUnO1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcywgY29udGV4dDogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcblxuICAgICAgICB0aGlzLnRvZ2dsZSA9IHRoaXMudG9nZ2xlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc2VsZWN0ID0gdGhpcy5zZWxlY3QuYmluZCh0aGlzKTtcbiAgICAgICAgLy8gdGhpcy5vbkRlbGV0ZSA9IHRoaXMub25EZWxldGUuYmluZCh0aGlzKTtcbiAgICAgICAgLy8gdGhpcy5vblNldFRpdGxlID0gdGhpcy5vblNldFRpdGxlLmJpbmQodGhpcyk7XG4gICAgICAgIC8vIHRoaXMub25Db3B5VVJMID0gdGhpcy5vbkNvcHlVUkwuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgb3BlbjogdGhpcy5vcGVuLFxuICAgICAgICAgICAgc2VsZWN0ZWQ6IHRoaXMuc2VsZWN0ZWQsXG4gICAgICAgIH07XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuXG4gICAgICAgIGNvbnN0IGNvbHVtbnMgPSB0aGlzLnByb3BzLm9wdGlvbnMgfHwgT2JqZWN0LnZhbHVlcyhuZXcgRG9jUmVwb1RhYmxlQ29sdW1ucygpKTtcblxuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj5cblxuICAgICAgICAgICAgICAgIDxEcm9wZG93biBpZD17dGhpcy5wcm9wcy5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXNPcGVuPXt0aGlzLnN0YXRlLm9wZW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZT17dGhpcy50b2dnbGV9PlxuXG4gICAgICAgICAgICAgICAgICAgIDxEcm9wZG93blRvZ2dsZSBjb2xvcj1cImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJtZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0YWJsZS1kcm9wZG93bi1idXR0b24gYnRuIHRleHQtbXV0ZWQgcC0xIG0tMFwiIGlkPXt0aGlzLnByb3BzLmlkICsgJy1kcm9wZG93bi10b2dnbGUnfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1lbGxpcHNpcy1oXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duVG9nZ2xlPlxuXG4gICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bk1lbnUgY2xhc3NOYW1lPVwic2hhZG93XCIgcmlnaHQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gb25DbGljaz17KCkgPT4gdGhpcy5zZWxlY3QoJ2NoYW5nZS1jb2x1bW5zJyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENoYW5nZSBDb2x1bW5zXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cblxuICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duTWVudT5cblxuXG4gICAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cblxuICAgICAgICAgICAgICAgIDxMaWdodGJveFBvcG92ZXIgcGxhY2VtZW50PXsnYm90dG9tJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW49e3RoaXMuc2VsZWN0ZWQgPT09ICdjaGFuZ2UtY29sdW1ucyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9e3RoaXMucHJvcHMuaWQgKyAnLWRyb3Bkb3duLXRvZ2dsZSd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e1N0eWxlcy5MaWdodGJveFBvcG92ZXJ9PlxuXG4gICAgICAgICAgICAgICAgICAgIDxQb3BvdmVyQm9keT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RTZWxlY3RvciBvcHRpb25zPXtjb2x1bW5zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17dGhpcy5wcm9wcy5pZCArICdsaXN0LW9wdGlvbnMnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlNlbGVjdCBjb2x1bW5zIHRvIGRpc3BsYXkgaW4gdGhlIHRhYmxlOlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2FuY2VsPXsoKSA9PiB0aGlzLnNlbGVjdCgnbm9uZScpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblNldD17KG9wdGlvbnMpID0+IHRoaXMub25TZWxlY3RlZENvbHVtbnMob3B0aW9ucyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IGNvbnNvbGUubG9nKHZhbHVlKX0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdFNlbGVjdG9yPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvUG9wb3ZlckJvZHk+XG5cbiAgICAgICAgICAgICAgICA8L0xpZ2h0Ym94UG9wb3Zlcj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIHRvZ2dsZSgpIHtcblxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZCAhPT0gJ25vbmUnKSB7XG4gICAgICAgICAgICB0aGlzLm9wZW4gPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMub3BlbiA9ICEgdGhpcy5zdGF0ZS5vcGVuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZWZyZXNoKCk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIHNlbGVjdChzZWxlY3RlZDogU2VsZWN0ZWRPcHRpb24pIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IHNlbGVjdGVkO1xuICAgICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlZnJlc2goKSB7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBvcGVuOiB0aGlzLm9wZW4sXG4gICAgICAgICAgICBzZWxlY3RlZDogdGhpcy5zZWxlY3RlZFxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIC8vIHRoaXMub25TZXRUaXRsZSA9IHRoaXMub25TZXRUaXRsZS5iaW5kKHRoaXMpO1xuXG4gICAgcHJpdmF0ZSBvblNlbGVjdGVkQ29sdW1ucyhvcHRpb25zOiBMaXN0T3B0aW9uVHlwZVtdKSB7XG5cbiAgICAgICAgdGhpcy5zZWxlY3QoJ25vbmUnKTtcblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vblNlbGVjdGVkQ29sdW1ucykge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdGVkQ29sdW1ucyhvcHRpb25zKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG59XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgb3B0aW9ucz86IExpc3RPcHRpb25UeXBlW107XG4gICAgb25TZWxlY3RlZENvbHVtbnM/OiAob3B0aW9uczogTGlzdE9wdGlvblR5cGVbXSkgPT4gdm9pZDtcbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG5cbiAgICBvcGVuOiBib29sZWFuO1xuICAgIHNlbGVjdGVkOiBTZWxlY3RlZE9wdGlvbjtcblxufVxuXG50eXBlIFNlbGVjdGVkT3B0aW9uID0gJ2NoYW5nZS1jb2x1bW5zJyB8ICdub25lJztcbiJdfQ==