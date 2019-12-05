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
const react_select_1 = __importDefault(require("react-select"));
const TagOptions_1 = require("../../../../apps/repository/js/TagOptions");
const Tags_1 = require("polar-shared/src/tags/Tags");
class TagFilter extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            open: false,
        };
    }
    render() {
        if (this.props.disabled) {
            return React.createElement("div", null);
        }
        const tags = Tags_1.Tags.regularTagsThenFolderTagsSorted(this.props.tags);
        const options = TagOptions_1.TagOptions.fromTags(tags, true);
        return (React.createElement(react_select_1.default, { escapeClearsValue: true, isMulti: true, isClearable: true, classNamePrefix: "select", onChange: (value, action) => this.handleChange(value, action), placeholder: "Filter by tag or folder ...", options: options }));
    }
    handleChange(selectedOptions, action) {
        const tagValues = selectedOptions;
        const tags = TagOptions_1.TagOptions.toTags(tagValues);
        this.props.onChange(tags);
    }
}
exports.TagFilter = TagFilter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFnRmlsdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVGFnRmlsdGVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBK0I7QUFDL0IsZ0VBQWtDO0FBQ2xDLDBFQUFxRTtBQUNyRSxxREFBcUQ7QUFJckQsTUFBYSxTQUFVLFNBQVEsS0FBSyxDQUFDLFNBQXlCO0lBRTFELFlBQVksS0FBYSxFQUFFLE9BQVk7UUFDbkMsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztRQUV0QixJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1QsSUFBSSxFQUFFLEtBQUs7U0FDZCxDQUFDO0lBRU4sQ0FBQztJQUVNLE1BQU07UUFFVCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFO1lBQ3JCLE9BQU8sZ0NBQU0sQ0FBQztTQUNqQjtRQUVELE1BQU0sSUFBSSxHQUFHLFdBQUksQ0FBQywrQkFBK0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRW5FLE1BQU0sT0FBTyxHQUFHLHVCQUFVLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVoRCxPQUFPLENBRUgsb0JBQUMsc0JBQU0sSUFDSCxpQkFBaUIsUUFDakIsT0FBTyxRQUNQLFdBQVcsUUFFWCxlQUFlLEVBQUMsUUFBUSxFQUN4QixRQUFRLEVBQUUsQ0FBQyxLQUEyQixFQUFFLE1BQWtCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxFQUUvRixXQUFXLEVBQUMsNkJBQTZCLEVBQ3pDLE9BQU8sRUFBRSxPQUFPLEdBQ2xCLENBRUwsQ0FBQztJQUVOLENBQUM7SUFDTyxZQUFZLENBQUMsZUFBcUMsRUFBRSxNQUFrQjtRQUkxRSxNQUFNLFNBQVMsR0FBRyxlQUE4QixDQUFDO1FBRWpELE1BQU0sSUFBSSxHQUFHLHVCQUFVLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRTlCLENBQUM7Q0FFSjtBQWpERCw4QkFpREMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2VsZWN0IGZyb20gJ3JlYWN0LXNlbGVjdCc7XG5pbXBvcnQge1RhZ09wdGlvbnN9IGZyb20gJy4uLy4uLy4uLy4uL2FwcHMvcmVwb3NpdG9yeS9qcy9UYWdPcHRpb25zJztcbmltcG9ydCB7VGFnLCBUYWdzfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3RhZ3MvVGFncyc7XG5pbXBvcnQge1RhZ09wdGlvbn0gZnJvbSAnLi4vLi4vLi4vLi4vYXBwcy9yZXBvc2l0b3J5L2pzL1RhZ09wdGlvbic7XG5pbXBvcnQge0FjdGlvbk1ldGEsIFZhbHVlVHlwZX0gZnJvbSBcInJlYWN0LXNlbGVjdC9saWIvdHlwZXNcIjtcblxuZXhwb3J0IGNsYXNzIFRhZ0ZpbHRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcywgY29udGV4dDogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgb3BlbjogZmFsc2UsXG4gICAgICAgIH07XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gPGRpdi8+O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdGFncyA9IFRhZ3MucmVndWxhclRhZ3NUaGVuRm9sZGVyVGFnc1NvcnRlZCh0aGlzLnByb3BzLnRhZ3MpO1xuXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBUYWdPcHRpb25zLmZyb21UYWdzKHRhZ3MsIHRydWUpO1xuXG4gICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgICBlc2NhcGVDbGVhcnNWYWx1ZVxuICAgICAgICAgICAgICAgIGlzTXVsdGlcbiAgICAgICAgICAgICAgICBpc0NsZWFyYWJsZVxuICAgICAgICAgICAgICAgIC8vIG9uS2V5RG93bj17ZXZlbnQgPT4gdGhpcy5vbktleURvd24oZXZlbnQpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZVByZWZpeD1cInNlbGVjdFwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZTogVmFsdWVUeXBlPFRhZ09wdGlvbj4sIGFjdGlvbjogQWN0aW9uTWV0YSkgPT4gdGhpcy5oYW5kbGVDaGFuZ2UodmFsdWUsIGFjdGlvbikgfVxuICAgICAgICAgICAgICAgIC8vIGRlZmF1bHRWYWx1ZT17dGhpcy5zdGF0ZS5kZWZhdWx0VmFsdWV9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJGaWx0ZXIgYnkgdGFnIG9yIGZvbGRlciAuLi5cIlxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICk7XG5cbiAgICB9XG4gICAgcHJpdmF0ZSBoYW5kbGVDaGFuZ2Uoc2VsZWN0ZWRPcHRpb25zOiBWYWx1ZVR5cGU8VGFnT3B0aW9uPiwgYWN0aW9uOiBBY3Rpb25NZXRhKSB7XG5cbiAgICAgICAgLy8gYXMgc28gYXMgd2UgaGFuZGxlIHRoZSBjaGFuZ2Ugd2UgdG9nZ2xlIG9mZlxuXG4gICAgICAgIGNvbnN0IHRhZ1ZhbHVlcyA9IHNlbGVjdGVkT3B0aW9ucyBhcyBUYWdPcHRpb25bXTtcblxuICAgICAgICBjb25zdCB0YWdzID0gVGFnT3B0aW9ucy50b1RhZ3ModGFnVmFsdWVzKTtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh0YWdzKTtcblxuICAgIH1cblxufVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcblxuICAgIHJlYWRvbmx5IHRhZ3M6IFJlYWRvbmx5QXJyYXk8VGFnPjtcbiAgICByZWFkb25seSBvbkNoYW5nZTogKHRhZ3M6IFJlYWRvbmx5QXJyYXk8VGFnPikgPT4gdm9pZDtcbiAgICByZWFkb25seSBkaXNhYmxlZD86IGJvb2xlYW47XG5cbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG4gICAgcmVhZG9ubHkgb3BlbjogYm9vbGVhbjtcbn1cblxuIl19