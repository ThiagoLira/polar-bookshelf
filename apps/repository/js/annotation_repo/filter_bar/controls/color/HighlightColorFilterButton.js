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
const Functions_1 = require("polar-shared/src/util/Functions");
const IDs_1 = require("../../../../../../../web/js/util/IDs");
const ColorSelectorBox_1 = require("../../../../../../../web/js/ui/colors/ColorSelectorBox");
const DropdownChevron_1 = require("../../../../../../../web/js/ui/util/DropdownChevron");
const Buttons_1 = require("../Buttons");
class HighlightColorFilterButton extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
        this.deactivate = this.deactivate.bind(this);
        this.activate = this.activate.bind(this);
        this.onSelected = this.onSelected.bind(this);
        this.state = {
            open: false
        };
        this.id = IDs_1.IDs.create('highlight-color-filter-button');
    }
    deactivate() {
        this.setState({
            open: false
        });
    }
    activate() {
        this.setState({
            open: true
        });
    }
    render() {
        const { id, props } = this;
        const { selected } = props;
        const onSelected = props.onSelected || Functions_1.NULL_FUNCTION;
        const active = selected !== undefined && selected.length > 0;
        const buttonProps = Buttons_1.Buttons.activeProps(active);
        return (React.createElement("div", { className: this.props.className || '', style: this.props.style },
            React.createElement(reactstrap_1.Button, { color: buttonProps.color, outline: buttonProps.outline, id: id, size: "md", style: {
                    whiteSpace: 'nowrap'
                }, onClick: () => this.activate() },
                React.createElement("i", { className: "fas fa-swatchbook" }),
                " ",
                React.createElement("span", { className: "d-none-mobile" }, "Colors"),
                " ",
                React.createElement(DropdownChevron_1.DropdownChevron, null)),
            React.createElement(reactstrap_1.Popover, { placement: "bottom", trigger: "legacy", fade: false, delay: 0, isOpen: this.state.open, toggle: () => this.deactivate(), target: id },
                React.createElement(reactstrap_1.PopoverBody, { className: "shadow rounded p-2", style: { backgroundColor: 'var(--white)' } },
                    React.createElement(ColorSelectorBox_1.ColorSelectorBox, { selected: this.props.selected, onSelected: (color) => this.onSelected(color) })))));
    }
    onSelected(color) {
        const onSelected = this.props.onSelected || Functions_1.NULL_FUNCTION;
        this.deactivate();
        const selected = this.props.selected || [];
        const newSelected = selected.includes(color) ?
            selected.filter(current => current != color) :
            [...selected, color];
        onSelected(newSelected);
    }
}
exports.HighlightColorFilterButton = HighlightColorFilterButton;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGlnaGxpZ2h0Q29sb3JGaWx0ZXJCdXR0b24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJIaWdobGlnaHRDb2xvckZpbHRlckJ1dHRvbi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsNkNBQStCO0FBQy9CLDJDQUF3RDtBQUN4RCwrREFBOEQ7QUFDOUQsOERBQXlEO0FBQ3pELDZGQUFrRztBQUNsRyx5RkFBb0Y7QUFDcEYsd0NBQW1DO0FBRW5DLE1BQWEsMEJBQTJCLFNBQVEsS0FBSyxDQUFDLGFBQTZCO0lBSS9FLFlBQVksS0FBYSxFQUFFLE9BQVk7UUFDbkMsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztRQUV0QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUU3QyxJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1QsSUFBSSxFQUFFLEtBQUs7U0FDZCxDQUFDO1FBRUYsSUFBSSxDQUFDLEVBQUUsR0FBRyxTQUFHLENBQUMsTUFBTSxDQUFDLCtCQUErQixDQUFDLENBQUM7SUFFMUQsQ0FBQztJQUVPLFVBQVU7UUFFZCxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ1YsSUFBSSxFQUFFLEtBQUs7U0FDZCxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU8sUUFBUTtRQUVaLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDVixJQUFJLEVBQUUsSUFBSTtTQUNiLENBQUMsQ0FBQztJQUVQLENBQUM7SUFDTSxNQUFNO1FBRVQsTUFBTSxFQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUMsR0FBRyxJQUFJLENBQUM7UUFDekIsTUFBTSxFQUFDLFFBQVEsRUFBQyxHQUFHLEtBQUssQ0FBQztRQUV6QixNQUFNLFVBQVUsR0FBRyxLQUFLLENBQUMsVUFBVSxJQUFJLHlCQUFhLENBQUM7UUFFckQsTUFBTSxNQUFNLEdBQUcsUUFBUSxLQUFLLFNBQVMsSUFBSSxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUM3RCxNQUFNLFdBQVcsR0FBRyxpQkFBTyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVoRCxPQUFPLENBRUgsNkJBQUssU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxJQUFJLEVBQUUsRUFDckMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSztZQUV4QixvQkFBQyxtQkFBTSxJQUFDLEtBQUssRUFBRSxXQUFXLENBQUMsS0FBSyxFQUN4QixPQUFPLEVBQUUsV0FBVyxDQUFDLE9BQU8sRUFDNUIsRUFBRSxFQUFFLEVBQUUsRUFDTixJQUFJLEVBQUMsSUFBSSxFQUNULEtBQUssRUFBRTtvQkFDSCxVQUFVLEVBQUUsUUFBUTtpQkFDdkIsRUFDRCxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFFbEMsMkJBQUcsU0FBUyxFQUFDLG1CQUFtQixHQUFFOztnQkFBQyw4QkFBTSxTQUFTLEVBQUMsZUFBZSxhQUFjOztnQkFBQyxvQkFBQyxpQ0FBZSxPQUFFLENBRTlGO1lBRVQsb0JBQUMsb0JBQU8sSUFBQyxTQUFTLEVBQUMsUUFBUSxFQUNsQixPQUFPLEVBQUMsUUFBUSxFQUNoQixJQUFJLEVBQUUsS0FBSyxFQUNYLEtBQUssRUFBRSxDQUFDLEVBQ1IsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUN2QixNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxFQUMvQixNQUFNLEVBQUUsRUFBRTtnQkFFZixvQkFBQyx3QkFBVyxJQUFDLFNBQVMsRUFBQyxvQkFBb0IsRUFDOUIsS0FBSyxFQUFFLEVBQUMsZUFBZSxFQUFFLGNBQWMsRUFBQztvQkFJakQsb0JBQUMsbUNBQWdCLElBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUM3QixVQUFVLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FFeEQsQ0FFUixDQUVSLENBQ1QsQ0FBQztJQUVOLENBQUM7SUFFTyxVQUFVLENBQUMsS0FBZTtRQUU5QixNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsSUFBSSx5QkFBYSxDQUFDO1FBRTFELElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUVsQixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUM7UUFFM0MsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQzFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQztZQUM5QyxDQUFDLEdBQUcsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXpCLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUU1QixDQUFDO0NBRUo7QUF0R0QsZ0VBc0dDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtCdXR0b24sIFBvcG92ZXIsIFBvcG92ZXJCb2R5fSBmcm9tICdyZWFjdHN0cmFwJztcbmltcG9ydCB7TlVMTF9GVU5DVElPTn0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL0Z1bmN0aW9ucyc7XG5pbXBvcnQge0lEc30gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3dlYi9qcy91dGlsL0lEc1wiO1xuaW1wb3J0IHtDb2xvclNlbGVjdG9yQm94LCBDb2xvclN0cn0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3dlYi9qcy91aS9jb2xvcnMvQ29sb3JTZWxlY3RvckJveFwiO1xuaW1wb3J0IHtEcm9wZG93bkNoZXZyb259IGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi8uLi93ZWIvanMvdWkvdXRpbC9Ecm9wZG93bkNoZXZyb25cIjtcbmltcG9ydCB7QnV0dG9uc30gZnJvbSBcIi4uL0J1dHRvbnNcIjtcblxuZXhwb3J0IGNsYXNzIEhpZ2hsaWdodENvbG9yRmlsdGVyQnV0dG9uIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgcHJpdmF0ZSBpZDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcywgY29udGV4dDogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcblxuICAgICAgICB0aGlzLmRlYWN0aXZhdGUgPSB0aGlzLmRlYWN0aXZhdGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5hY3RpdmF0ZSA9IHRoaXMuYWN0aXZhdGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vblNlbGVjdGVkID0gdGhpcy5vblNlbGVjdGVkLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIG9wZW46IGZhbHNlXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5pZCA9IElEcy5jcmVhdGUoJ2hpZ2hsaWdodC1jb2xvci1maWx0ZXItYnV0dG9uJyk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGRlYWN0aXZhdGUoKSB7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBvcGVuOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFjdGl2YXRlKCkge1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgb3BlbjogdHJ1ZVxuICAgICAgICB9KTtcblxuICAgIH1cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuXG4gICAgICAgIGNvbnN0IHtpZCwgcHJvcHN9ID0gdGhpcztcbiAgICAgICAgY29uc3Qge3NlbGVjdGVkfSA9IHByb3BzO1xuXG4gICAgICAgIGNvbnN0IG9uU2VsZWN0ZWQgPSBwcm9wcy5vblNlbGVjdGVkIHx8IE5VTExfRlVOQ1RJT047XG5cbiAgICAgICAgY29uc3QgYWN0aXZlID0gc2VsZWN0ZWQgIT09IHVuZGVmaW5lZCAmJiBzZWxlY3RlZC5sZW5ndGggPiAwO1xuICAgICAgICBjb25zdCBidXR0b25Qcm9wcyA9IEJ1dHRvbnMuYWN0aXZlUHJvcHMoYWN0aXZlKTtcblxuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWUgfHwgJyd9XG4gICAgICAgICAgICAgICAgIHN0eWxlPXt0aGlzLnByb3BzLnN0eWxlfT5cblxuICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9e2J1dHRvblByb3BzLmNvbG9yfVxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZT17YnV0dG9uUHJvcHMub3V0bGluZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJtZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5hY3RpdmF0ZSgpfT5cblxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtc3dhdGNoYm9va1wiLz4gPHNwYW4gY2xhc3NOYW1lPVwiZC1ub25lLW1vYmlsZVwiPkNvbG9yczwvc3Bhbj4gPERyb3Bkb3duQ2hldnJvbi8+XG5cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cblxuICAgICAgICAgICAgICAgIDxQb3BvdmVyIHBsYWNlbWVudD1cImJvdHRvbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcj1cImxlZ2FjeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgZmFkZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk9ezB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgaXNPcGVuPXt0aGlzLnN0YXRlLm9wZW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlPXsoKSA9PiB0aGlzLmRlYWN0aXZhdGUoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9e2lkfT5cblxuICAgICAgICAgICAgICAgICAgICA8UG9wb3ZlckJvZHkgY2xhc3NOYW1lPVwic2hhZG93IHJvdW5kZWQgcC0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAndmFyKC0td2hpdGUpJ319PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7LypGSVhNRTogcmVzZXQgYnV0dG9uIGFuZCBtdWx0aS1jb2xvcnMqL31cblxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbG9yU2VsZWN0b3JCb3ggc2VsZWN0ZWQ9e3RoaXMucHJvcHMuc2VsZWN0ZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblNlbGVjdGVkPXsoY29sb3IpID0+IHRoaXMub25TZWxlY3RlZChjb2xvcil9Lz5cblxuICAgICAgICAgICAgICAgICAgICA8L1BvcG92ZXJCb2R5PlxuXG4gICAgICAgICAgICAgICAgPC9Qb3BvdmVyPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgb25TZWxlY3RlZChjb2xvcjogQ29sb3JTdHIpIHtcblxuICAgICAgICBjb25zdCBvblNlbGVjdGVkID0gdGhpcy5wcm9wcy5vblNlbGVjdGVkIHx8IE5VTExfRlVOQ1RJT047XG5cbiAgICAgICAgdGhpcy5kZWFjdGl2YXRlKCk7XG5cbiAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSB0aGlzLnByb3BzLnNlbGVjdGVkIHx8IFtdO1xuXG4gICAgICAgIGNvbnN0IG5ld1NlbGVjdGVkID0gc2VsZWN0ZWQuaW5jbHVkZXMoY29sb3IpID9cbiAgICAgICAgICAgIHNlbGVjdGVkLmZpbHRlcihjdXJyZW50ID0+IGN1cnJlbnQgIT0gY29sb3IpIDpcbiAgICAgICAgICAgIFsuLi5zZWxlY3RlZCwgY29sb3JdO1xuXG4gICAgICAgIG9uU2VsZWN0ZWQobmV3U2VsZWN0ZWQpO1xuXG4gICAgfVxuXG59XG5cbmludGVyZmFjZSBJUHJvcHMge1xuXG4gICAgcmVhZG9ubHkgY2xhc3NOYW1lPzogc3RyaW5nO1xuXG4gICAgcmVhZG9ubHkgc3R5bGU/OiBSZWFjdC5DU1NQcm9wZXJ0aWVzO1xuXG4gICAgcmVhZG9ubHkgc2l6ZT86IHN0cmluZztcblxuICAgIHJlYWRvbmx5IG9uU2VsZWN0ZWQ/OiAoc2VsZWN0ZWQ6IFJlYWRvbmx5QXJyYXk8Q29sb3JTdHI+KSA9PiB2b2lkO1xuXG4gICAgcmVhZG9ubHkgc2VsZWN0ZWQ/OiBSZWFkb25seUFycmF5PENvbG9yU3RyPjtcblxufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbiAgICByZWFkb25seSBvcGVuOiBib29sZWFuO1xufVxuIl19