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
const AnnotationType_1 = require("polar-shared/src/metadata/AnnotationType");
const AnnotationTypeDropdownItem_1 = require("./AnnotationTypeDropdownItem");
const Buttons_1 = require("../Buttons");
class AnnotationTypeSelector extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const options = [
            {
                annotationType: AnnotationType_1.AnnotationType.TEXT_HIGHLIGHT,
                label: 'text highlight'
            },
            {
                annotationType: AnnotationType_1.AnnotationType.AREA_HIGHLIGHT,
                label: 'area highlight'
            },
            {
                annotationType: AnnotationType_1.AnnotationType.COMMENT,
                label: 'comment'
            },
            {
                annotationType: AnnotationType_1.AnnotationType.FLASHCARD,
                label: 'flashcard'
            },
        ];
        const buttonProps = Buttons_1.Buttons.activeProps(this.props.selected.length > 0);
        return (React.createElement(reactstrap_1.UncontrolledDropdown, null,
            React.createElement(reactstrap_1.DropdownToggle, { color: buttonProps.color, outline: buttonProps.outline, size: "md", caret: true },
                React.createElement("i", { className: "fas fa-filter" }),
                " ",
                React.createElement("span", { className: "d-none-mobile" }, "Annotation Types")),
            React.createElement(reactstrap_1.DropdownMenu, { className: "shadow", right: true }, options.map((current, idx) => {
                const selected = this.props.selected.includes(current.annotationType);
                const computeNewSelected = () => {
                    const newSelected = selected ?
                        this.props.selected.filter(item => item != current.annotationType) :
                        [...this.props.selected, current.annotationType];
                    return newSelected;
                };
                const newSelected = computeNewSelected();
                const onClick = () => this.props.onSelected(newSelected);
                return React.createElement(AnnotationTypeDropdownItem_1.AnnotationTypeDropdownItem, { key: idx, selected: selected, onClick: onClick }, current.label);
            }))));
    }
}
exports.AnnotationTypeSelector = AnnotationTypeSelector;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW5ub3RhdGlvblR5cGVTZWxlY3Rvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkFubm90YXRpb25UeXBlU2VsZWN0b3IudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUMvQiwyQ0FBNEY7QUFDNUYsNkVBQXdFO0FBQ3hFLDZFQUF3RTtBQUN4RSx3Q0FBbUM7QUFFbkMsTUFBYSxzQkFBdUIsU0FBUSxLQUFLLENBQUMsYUFBNkI7SUFFM0UsWUFBWSxLQUFhLEVBQUUsT0FBWTtRQUNuQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFHTSxNQUFNO1FBT1QsTUFBTSxPQUFPLEdBQWtDO1lBQzNDO2dCQUNJLGNBQWMsRUFBRSwrQkFBYyxDQUFDLGNBQWM7Z0JBQzdDLEtBQUssRUFBRSxnQkFBZ0I7YUFDMUI7WUFDRDtnQkFDSSxjQUFjLEVBQUUsK0JBQWMsQ0FBQyxjQUFjO2dCQUM3QyxLQUFLLEVBQUUsZ0JBQWdCO2FBQzFCO1lBQ0Q7Z0JBQ0ksY0FBYyxFQUFFLCtCQUFjLENBQUMsT0FBTztnQkFDdEMsS0FBSyxFQUFFLFNBQVM7YUFDbkI7WUFDRDtnQkFDSSxjQUFjLEVBQUUsK0JBQWMsQ0FBQyxTQUFTO2dCQUN4QyxLQUFLLEVBQUUsV0FBVzthQUNyQjtTQUVKLENBQUM7UUFFRixNQUFNLFdBQVcsR0FBRyxpQkFBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFeEUsT0FBTyxDQUVILG9CQUFDLGlDQUFvQjtZQUVqQixvQkFBQywyQkFBYyxJQUFDLEtBQUssRUFBRSxXQUFXLENBQUMsS0FBSyxFQUN4QixPQUFPLEVBQUUsV0FBVyxDQUFDLE9BQU8sRUFDNUIsSUFBSSxFQUFDLElBQUksRUFDVCxLQUFLO2dCQUVqQiwyQkFBRyxTQUFTLEVBQUMsZUFBZSxHQUFFOztnQkFBQyw4QkFBTSxTQUFTLEVBQUMsZUFBZSx1QkFBd0IsQ0FFekU7WUFFakIsb0JBQUMseUJBQVksSUFBQyxTQUFTLEVBQUMsUUFBUSxFQUFDLEtBQUssVUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsRUFBRTtnQkFFMUIsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztnQkFFdEUsTUFBTSxrQkFBa0IsR0FBRyxHQUFHLEVBQUU7b0JBQzVCLE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxDQUFDO3dCQUMxQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7d0JBQ3BFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7b0JBRXJELE9BQU8sV0FBVyxDQUFDO2dCQUV2QixDQUFDLENBQUM7Z0JBRUYsTUFBTSxXQUFXLEdBQUcsa0JBQWtCLEVBQUUsQ0FBQztnQkFFekMsTUFBTSxPQUFPLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBRXpELE9BQU8sb0JBQUMsdURBQTBCLElBQUMsR0FBRyxFQUFFLEdBQUcsRUFDUixRQUFRLEVBQUUsUUFBUSxFQUNsQixPQUFPLEVBQUUsT0FBTyxJQUM5QyxPQUFPLENBQUMsS0FBSyxDQUNXLENBQUM7WUFFbEMsQ0FBQyxDQUFDLENBQ1MsQ0FFSSxDQUMxQixDQUFDO0lBRU4sQ0FBQztDQUdKO0FBbEZELHdEQWtGQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7RHJvcGRvd25JdGVtLCBEcm9wZG93bk1lbnUsIERyb3Bkb3duVG9nZ2xlLCBVbmNvbnRyb2xsZWREcm9wZG93bn0gZnJvbSAncmVhY3RzdHJhcCc7XG5pbXBvcnQge0Fubm90YXRpb25UeXBlfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy9tZXRhZGF0YS9Bbm5vdGF0aW9uVHlwZVwiO1xuaW1wb3J0IHtBbm5vdGF0aW9uVHlwZURyb3Bkb3duSXRlbX0gZnJvbSBcIi4vQW5ub3RhdGlvblR5cGVEcm9wZG93bkl0ZW1cIjtcbmltcG9ydCB7QnV0dG9uc30gZnJvbSBcIi4uL0J1dHRvbnNcIjtcblxuZXhwb3J0IGNsYXNzIEFubm90YXRpb25UeXBlU2VsZWN0b3IgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzLCBjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuICAgIH1cblxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICBpbnRlcmZhY2UgRHJvcGRvd25PcHRpb24ge1xuICAgICAgICAgICAgcmVhZG9ubHkgYW5ub3RhdGlvblR5cGU6IEFubm90YXRpb25UeXBlO1xuICAgICAgICAgICAgcmVhZG9ubHkgbGFiZWw6IHN0cmluZztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG9wdGlvbnM6IFJlYWRvbmx5QXJyYXk8RHJvcGRvd25PcHRpb24+ID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGFubm90YXRpb25UeXBlOiBBbm5vdGF0aW9uVHlwZS5URVhUX0hJR0hMSUdIVCxcbiAgICAgICAgICAgICAgICBsYWJlbDogJ3RleHQgaGlnaGxpZ2h0J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhbm5vdGF0aW9uVHlwZTogQW5ub3RhdGlvblR5cGUuQVJFQV9ISUdITElHSFQsXG4gICAgICAgICAgICAgICAgbGFiZWw6ICdhcmVhIGhpZ2hsaWdodCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYW5ub3RhdGlvblR5cGU6IEFubm90YXRpb25UeXBlLkNPTU1FTlQsXG4gICAgICAgICAgICAgICAgbGFiZWw6ICdjb21tZW50J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhbm5vdGF0aW9uVHlwZTogQW5ub3RhdGlvblR5cGUuRkxBU0hDQVJELFxuICAgICAgICAgICAgICAgIGxhYmVsOiAnZmxhc2hjYXJkJ1xuICAgICAgICAgICAgfSxcblxuICAgICAgICBdO1xuXG4gICAgICAgIGNvbnN0IGJ1dHRvblByb3BzID0gQnV0dG9ucy5hY3RpdmVQcm9wcyh0aGlzLnByb3BzLnNlbGVjdGVkLmxlbmd0aCA+IDApO1xuXG4gICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgIDxVbmNvbnRyb2xsZWREcm9wZG93bj5cblxuICAgICAgICAgICAgICAgIDxEcm9wZG93blRvZ2dsZSBjb2xvcj17YnV0dG9uUHJvcHMuY29sb3J9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmU9e2J1dHRvblByb3BzLm91dGxpbmV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJtZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmV0PlxuXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1maWx0ZXJcIi8+IDxzcGFuIGNsYXNzTmFtZT1cImQtbm9uZS1tb2JpbGVcIj5Bbm5vdGF0aW9uIFR5cGVzPC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgPC9Ecm9wZG93blRvZ2dsZT5cblxuICAgICAgICAgICAgICAgIDxEcm9wZG93bk1lbnUgY2xhc3NOYW1lPVwic2hhZG93XCIgcmlnaHQ+XG4gICAgICAgICAgICAgICAgICAgIHtvcHRpb25zLm1hcCgoY3VycmVudCwgaWR4KSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkID0gdGhpcy5wcm9wcy5zZWxlY3RlZC5pbmNsdWRlcyhjdXJyZW50LmFubm90YXRpb25UeXBlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tcHV0ZU5ld1NlbGVjdGVkID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1NlbGVjdGVkID0gc2VsZWN0ZWQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLnNlbGVjdGVkLmZpbHRlcihpdGVtID0+IGl0ZW0gIT0gY3VycmVudC5hbm5vdGF0aW9uVHlwZSkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbLi4udGhpcy5wcm9wcy5zZWxlY3RlZCwgY3VycmVudC5hbm5vdGF0aW9uVHlwZV07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3U2VsZWN0ZWQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1NlbGVjdGVkID0gY29tcHV0ZU5ld1NlbGVjdGVkKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9uQ2xpY2sgPSAoKSA9PiB0aGlzLnByb3BzLm9uU2VsZWN0ZWQobmV3U2VsZWN0ZWQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPEFubm90YXRpb25UeXBlRHJvcGRvd25JdGVtIGtleT17aWR4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17c2VsZWN0ZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50LmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Bbm5vdGF0aW9uVHlwZURyb3Bkb3duSXRlbT47XG5cbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnU+XG5cbiAgICAgICAgICAgIDwvVW5jb250cm9sbGVkRHJvcGRvd24+XG4gICAgICAgICk7XG5cbiAgICB9XG5cblxufVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcblxuICAgIHJlYWRvbmx5IHNlbGVjdGVkOiBSZWFkb25seUFycmF5PEFubm90YXRpb25UeXBlPjtcblxuICAgIHJlYWRvbmx5IG9uU2VsZWN0ZWQ6IChzZWxlY3RlZDogUmVhZG9ubHlBcnJheTxBbm5vdGF0aW9uVHlwZT4pID0+IHZvaWQ7XG5cbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG59XG4iXX0=