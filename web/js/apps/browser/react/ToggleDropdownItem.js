"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const reactstrap_1 = require("reactstrap");
const Styles = {
    Label: {
        marginLeft: "5px"
    },
    Input: {}
};
class ToggleDropdownItem extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }
    render() {
        return (react_1.default.createElement(reactstrap_1.DropdownItem, null,
            react_1.default.createElement(reactstrap_1.Label, { style: Styles.Label, check: true },
                react_1.default.createElement(reactstrap_1.Input, { type: "checkbox", checked: this.props.enabled, style: Styles.Input }),
                this.props.children)));
    }
    ;
}
exports.ToggleDropdownItem = ToggleDropdownItem;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9nZ2xlRHJvcGRvd25JdGVtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVG9nZ2xlRHJvcGRvd25JdGVtLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGtEQUEwQjtBQUMxQiwyQ0FBb0U7QUFHcEUsTUFBTSxNQUFNLEdBQWM7SUFFdEIsS0FBSyxFQUFFO1FBQ0gsVUFBVSxFQUFFLEtBQUs7S0FDcEI7SUFFRCxLQUFLLEVBQUUsRUFFTjtDQUVKLENBQUM7QUFFRixNQUFhLGtCQUFtQixTQUFRLGVBQUssQ0FBQyxTQUF5QjtJQUVuRSxZQUFZLEtBQVU7UUFDbEIsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRWIsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNULElBQUksRUFBRSxLQUFLO1NBQ2QsQ0FBQztJQUNOLENBQUM7SUFFTSxNQUFNO1FBQ1QsT0FBTyxDQUNILDhCQUFDLHlCQUFZO1lBRVQsOEJBQUMsa0JBQUssSUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFBRSxLQUFLO2dCQUM3Qiw4QkFBQyxrQkFBSyxJQUFDLElBQUksRUFBQyxVQUFVLEVBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSyxHQUFJO2dCQUUxRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FFaEIsQ0FFRyxDQUNsQixDQUFDO0lBQ04sQ0FBQztJQUFBLENBQUM7Q0FFTDtBQXpCRCxnREF5QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtEcm9wZG93bkl0ZW0sIERyb3Bkb3duTWVudSwgTGFiZWwsIElucHV0fSBmcm9tICdyZWFjdHN0cmFwJztcbmltcG9ydCB7SVN0eWxlTWFwfSBmcm9tICcuLi8uLi8uLi9yZWFjdC9JU3R5bGVNYXAnO1xuXG5jb25zdCBTdHlsZXM6IElTdHlsZU1hcCA9IHtcblxuICAgIExhYmVsOiB7XG4gICAgICAgIG1hcmdpbkxlZnQ6IFwiNXB4XCJcbiAgICB9LFxuXG4gICAgSW5wdXQ6IHtcbiAgICAgICAgLy8gbWFyZ2luTGVmdDogXCI1cHhcIlxuICAgIH1cblxufTtcblxuZXhwb3J0IGNsYXNzIFRvZ2dsZURyb3Bkb3duSXRlbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIG9wZW46IGZhbHNlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0+XG5cbiAgICAgICAgICAgICAgICA8TGFiZWwgc3R5bGU9e1N0eWxlcy5MYWJlbH0gY2hlY2s+XG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXt0aGlzLnByb3BzLmVuYWJsZWR9IHN0eWxlPXtTdHlsZXMuSW5wdXR9IC8+XG5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG5cbiAgICAgICAgICAgICAgICA8L0xhYmVsPlxuXG4gICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cbiAgICAgICAgKTtcbiAgICB9O1xuXG59XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICAgIGVuYWJsZWQ6IGJvb2xlYW47XG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xuXG59XG4iXX0=