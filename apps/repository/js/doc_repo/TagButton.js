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
const Creatable_1 = __importDefault(require("react-select/lib/Creatable"));
const reactstrap_1 = require("reactstrap");
const Blackout_1 = require("../../../../web/js/ui/blackout/Blackout");
const TagOptions_1 = require("../TagOptions");
const SimpleTooltipEx_1 = require("../../../../web/js/ui/tooltip/SimpleTooltipEx");
class TagButton extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.toggle = this.toggle.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            popoverOpen: false,
        };
        this.id = this.props.id || 'tag-button-' + Math.floor(Math.random() * 10000);
    }
    render() {
        const options = this.props.tagsProvider().map(current => {
            return {
                value: current.id,
                label: current.label
            };
        });
        return (React.createElement("div", null,
            React.createElement(SimpleTooltipEx_1.SimpleTooltipEx, { text: `
                                 Tag multiple documents at once.  To
                                 find untagged documents sort by the
                                 'Tags' column (twice).  Once to sort
                                 alphabetically and then second click
                                 will reverse the sort showing
                                 untagged documents.`, disabled: this.props.disabled, placement: "bottom" },
                React.createElement(reactstrap_1.Button, { color: "light", id: this.id, size: "md", disabled: this.props.disabled, onClick: this.toggle, className: "border" },
                    React.createElement("i", { className: "fa fa-tag doc-button doc-button-selectable" }))),
            React.createElement(reactstrap_1.Popover, { placement: "bottom", isOpen: this.state.popoverOpen, target: this.id, toggle: this.toggle, trigger: "legacy", fade: false, delay: 0, className: "tag-input-popover" },
                React.createElement(reactstrap_1.PopoverBody, null,
                    React.createElement(Creatable_1.default, { isMulti: true, isClearable: true, autoFocus: true, onKeyDown: event => this.onKeyDown(event), classNamePrefix: "select", onChange: this.handleChange, options: options })))));
    }
    onKeyDown(event) {
        if (event.key === "Escape") {
            this.toggle();
        }
        if (event.getModifierState("Control") && event.key === "Enter") {
            this.toggle();
        }
    }
    toggle() {
        if (this.props.disabled) {
            return;
        }
        const popoverOpen = !this.state.popoverOpen;
        if (popoverOpen) {
            this.selectedTags = undefined;
            Blackout_1.Blackout.enable();
        }
        else {
            Blackout_1.Blackout.disable();
            if (this.props.onSelectedTags && this.selectedTags) {
                this.props.onSelectedTags(this.selectedTags);
            }
        }
        this.setState(Object.assign(Object.assign({}, this.state), { popoverOpen }));
    }
    handleChange(selectedOptions) {
        const tagSelectOptions = selectedOptions;
        if (!tagSelectOptions || tagSelectOptions.length === 0) {
            this.selectedTags = undefined;
        }
        else {
            this.selectedTags = TagOptions_1.TagOptions.toTags(selectedOptions);
        }
    }
}
exports.TagButton = TagButton;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFnQnV0dG9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVGFnQnV0dG9uLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBK0I7QUFDL0IsMkVBQXlEO0FBQ3pELDJDQUF3RDtBQUN4RCxzRUFBaUU7QUFFakUsOENBQXlDO0FBQ3pDLG1GQUE4RTtBQUc5RSxNQUFhLFNBQVUsU0FBUSxLQUFLLENBQUMsU0FBeUI7SUFNMUQsWUFBWSxLQUFhLEVBQUUsT0FBWTtRQUNuQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRXRCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWpELElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDVCxXQUFXLEVBQUUsS0FBSztTQUNyQixDQUFDO1FBRUYsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsS0FBSyxDQUFDLENBQUM7SUFFakYsQ0FBQztJQUVNLE1BQU07UUFFVCxNQUFNLE9BQU8sR0FDVCxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNwQyxPQUFPO2dCQUNILEtBQUssRUFBRSxPQUFPLENBQUMsRUFBRTtnQkFDakIsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLO2FBQ3ZCLENBQUM7UUFDTixDQUFDLENBQUMsQ0FBQztRQUVQ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O1xuaW1wb3J0IENyZWF0YWJsZVNlbGVjdCBmcm9tICdyZWFjdC1zZWxlY3QvbGliL0NyZWF0YWJsZSc7XG5pbXBvcnQge0J1dHRvbiwgUG9wb3ZlciwgUG9wb3ZlckJvZHl9IGZyb20gJ3JlYWN0c3RyYXAnO1xuaW1wb3J0IHtCbGFja291dH0gZnJvbSAnLi4vLi4vLi4vLi4vd2ViL2pzL3VpL2JsYWNrb3V0L0JsYWNrb3V0JztcbmltcG9ydCB7VGFnT3B0aW9ufSBmcm9tICcuLi9UYWdPcHRpb24nO1xuaW1wb3J0IHtUYWdPcHRpb25zfSBmcm9tICcuLi9UYWdPcHRpb25zJztcbmltcG9ydCB7U2ltcGxlVG9vbHRpcEV4fSBmcm9tICcuLi8uLi8uLi8uLi93ZWIvanMvdWkvdG9vbHRpcC9TaW1wbGVUb29sdGlwRXgnO1xuaW1wb3J0IHtUYWd9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdGFncy9UYWdzJztcblxuZXhwb3J0IGNsYXNzIFRhZ0J1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgcHJpdmF0ZSBpZDogc3RyaW5nO1xuXG4gICAgcHJpdmF0ZSBzZWxlY3RlZFRhZ3M/OiBSZWFkb25seUFycmF5PFRhZz47XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzLCBjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuXG4gICAgICAgIHRoaXMudG9nZ2xlID0gdGhpcy50b2dnbGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbktleURvd24gPSB0aGlzLm9uS2V5RG93bi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHBvcG92ZXJPcGVuOiBmYWxzZSxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmlkID0gdGhpcy5wcm9wcy5pZCB8fCAndGFnLWJ1dHRvbi0nICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDApO1xuXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICBjb25zdCBvcHRpb25zOiBUYWdPcHRpb25bXSA9XG4gICAgICAgICAgICB0aGlzLnByb3BzLnRhZ3NQcm92aWRlcigpLm1hcChjdXJyZW50ID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogY3VycmVudC5pZCxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGN1cnJlbnQubGFiZWxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgPGRpdj5cblxuICAgICAgICAgICAgICAgIDxTaW1wbGVUb29sdGlwRXggdGV4dD17YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGFnIG11bHRpcGxlIGRvY3VtZW50cyBhdCBvbmNlLiAgVG9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbmQgdW50YWdnZWQgZG9jdW1lbnRzIHNvcnQgYnkgdGhlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnVGFncycgY29sdW1uICh0d2ljZSkuICBPbmNlIHRvIHNvcnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFscGhhYmV0aWNhbGx5IGFuZCB0aGVuIHNlY29uZCBjbGlja1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lsbCByZXZlcnNlIHRoZSBzb3J0IHNob3dpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVudGFnZ2VkIGRvY3VtZW50cy5gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJib3R0b21cIj5cblxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXt0aGlzLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJtZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy50b2dnbGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXRhZyBkb2MtYnV0dG9uIGRvYy1idXR0b24tc2VsZWN0YWJsZVwiLz5cblxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cblxuICAgICAgICAgICAgICAgIDwvU2ltcGxlVG9vbHRpcEV4PlxuXG4gICAgICAgICAgICAgICAgPFBvcG92ZXIgcGxhY2VtZW50PVwiYm90dG9tXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBpc09wZW49e3RoaXMuc3RhdGUucG9wb3Zlck9wZW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PXt0aGlzLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZT17dGhpcy50b2dnbGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcj1cImxlZ2FjeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgZmFkZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk9ezB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGFnLWlucHV0LXBvcG92ZXJcIj5cblxuICAgICAgICAgICAgICAgICAgICA8UG9wb3ZlckJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q3JlYXRhYmxlU2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNNdWx0aVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQ2xlYXJhYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0ZvY3VzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXtldmVudCA9PiB0aGlzLm9uS2V5RG93bihldmVudCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lUHJlZml4PVwic2VsZWN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9Qb3BvdmVyQm9keT5cblxuICAgICAgICAgICAgICAgIDwvUG9wb3Zlcj5cblxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgb25LZXlEb3duKGV2ZW50OiBSZWFjdC5LZXlib2FyZEV2ZW50PEhUTUxFbGVtZW50Pikge1xuXG4gICAgICAgIGlmIChldmVudC5rZXkgPT09IFwiRXNjYXBlXCIpIHtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXZlbnQuZ2V0TW9kaWZpZXJTdGF0ZShcIkNvbnRyb2xcIikgJiYgZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHByaXZhdGUgdG9nZ2xlKCkge1xuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwb3BvdmVyT3BlbiA9ICEgdGhpcy5zdGF0ZS5wb3BvdmVyT3BlbjtcblxuICAgICAgICBpZiAocG9wb3Zlck9wZW4pIHtcblxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFRhZ3MgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgIEJsYWNrb3V0LmVuYWJsZSgpO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIEJsYWNrb3V0LmRpc2FibGUoKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMub25TZWxlY3RlZFRhZ3MgJiYgdGhpcy5zZWxlY3RlZFRhZ3MpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uU2VsZWN0ZWRUYWdzKHRoaXMuc2VsZWN0ZWRUYWdzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Li4udGhpcy5zdGF0ZSwgcG9wb3Zlck9wZW59KTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgaGFuZGxlQ2hhbmdlKHNlbGVjdGVkT3B0aW9uczogYW55KSB7XG5cbiAgICAgICAgLy8gYXMgc28gYXMgd2UgaGFuZGxlIHRoZSBjaGFuZ2Ugd2UgdG9nZ2xlIG9mZlxuXG4gICAgICAgIGNvbnN0IHRhZ1NlbGVjdE9wdGlvbnM6IFRhZ09wdGlvbltdID0gc2VsZWN0ZWRPcHRpb25zO1xuXG4gICAgICAgIGlmICghIHRhZ1NlbGVjdE9wdGlvbnMgfHwgdGFnU2VsZWN0T3B0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRUYWdzID0gdW5kZWZpbmVkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFRhZ3MgPSBUYWdPcHRpb25zLnRvVGFncyhzZWxlY3RlZE9wdGlvbnMpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbn1cblxuaW50ZXJmYWNlIElQcm9wcyB7XG5cbiAgICByZWFkb25seSBpZD86IHN0cmluZztcblxuICAgIHJlYWRvbmx5IGRpc2FibGVkPzogYm9vbGVhbjtcblxuICAgIHJlYWRvbmx5IGhpZGRlbj86IGJvb2xlYW47XG5cbiAgICByZWFkb25seSB0YWdzUHJvdmlkZXI6ICgpID0+IFJlYWRvbmx5QXJyYXk8VGFnPjtcblxuICAgIHJlYWRvbmx5IG9uU2VsZWN0ZWRUYWdzPzogKHRhZ3M6IFJlYWRvbmx5QXJyYXk8VGFnPikgPT4gdm9pZDtcblxufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbiAgICByZWFkb25seSBwb3BvdmVyT3BlbjogYm9vbGVhbjtcbn1cbiJdfQ==