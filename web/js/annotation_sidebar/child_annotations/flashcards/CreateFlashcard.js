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
const CancelButton_1 = require("../CancelButton");
const NullCollapse_1 = require("../../../ui/null_collapse/NullCollapse");
const FlashcardInput_1 = require("./flashcard_input/FlashcardInput");
const ScrollIntoView_1 = require("../../../ui/ScrollIntoView");
class CreateFlashcard extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
        this.onCancel = this.onCancel.bind(this);
        this.state = {
            active: this.props.active || false
        };
    }
    render() {
        const cancelButton = React.createElement(CancelButton_1.CancelButton, { onClick: () => this.onCancel() });
        return React.createElement(NullCollapse_1.NullCollapse, { open: this.props.active },
            React.createElement(ScrollIntoView_1.ScrollIntoView, null,
                React.createElement(FlashcardInput_1.FlashcardInput, { id: 'edit-flashcard-for' + this.props.id, onFlashcard: this.props.onFlashcardCreated, defaultValue: this.props.defaultValue, cancelButton: cancelButton })));
    }
    onCancel() {
        if (this.props.onCancel) {
            this.props.onCancel();
        }
    }
}
exports.CreateFlashcard = CreateFlashcard;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3JlYXRlRmxhc2hjYXJkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQ3JlYXRlRmxhc2hjYXJkLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSw2Q0FBK0I7QUFDL0Isa0RBQTZDO0FBQzdDLHlFQUFvRTtBQUNwRSxxRUFBZ0U7QUFFaEUsK0RBQTBEO0FBRTFELE1BQWEsZUFBZ0IsU0FBUSxLQUFLLENBQUMsYUFBNkI7SUFFcEUsWUFBWSxLQUFhLEVBQUUsT0FBWTtRQUNuQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRXRCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFekMsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNULE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxLQUFLO1NBQ3JDLENBQUM7SUFFTixDQUFDO0lBRU0sTUFBTTtRQUVULE1BQU0sWUFBWSxHQUFHLG9CQUFDLDJCQUFZLElBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDO1FBRXJFLE9BQU8sb0JBQUMsMkJBQVksSUFBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNO1lBRXhDLG9CQUFDLCtCQUFjO2dCQUNYLG9CQUFDLCtCQUFjLElBQUMsRUFBRSxFQUFFLG9CQUFvQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUN4QyxXQUFXLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsRUFDMUMsWUFBWSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUNyQyxZQUFZLEVBQUUsWUFBWSxHQUFHLENBQ2hDLENBRU4sQ0FBQztJQUVwQixDQUFDO0lBRU8sUUFBUTtRQUVaLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUU7WUFDckIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUN6QjtJQUVMLENBQUM7Q0FFSjtBQXRDRCwwQ0FzQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0NhbmNlbEJ1dHRvbn0gZnJvbSBcIi4uL0NhbmNlbEJ1dHRvblwiO1xuaW1wb3J0IHtOdWxsQ29sbGFwc2V9IGZyb20gXCIuLi8uLi8uLi91aS9udWxsX2NvbGxhcHNlL051bGxDb2xsYXBzZVwiO1xuaW1wb3J0IHtGbGFzaGNhcmRJbnB1dH0gZnJvbSAnLi9mbGFzaGNhcmRfaW5wdXQvRmxhc2hjYXJkSW5wdXQnO1xuaW1wb3J0IHtGbGFzaGNhcmRDYWxsYmFja30gZnJvbSAnLi9mbGFzaGNhcmRfaW5wdXQvRmxhc2hjYXJkSW5wdXQnO1xuaW1wb3J0IHtTY3JvbGxJbnRvVmlld30gZnJvbSAnLi4vLi4vLi4vdWkvU2Nyb2xsSW50b1ZpZXcnO1xuXG5leHBvcnQgY2xhc3MgQ3JlYXRlRmxhc2hjYXJkIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcywgY29udGV4dDogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcblxuICAgICAgICB0aGlzLm9uQ2FuY2VsID0gdGhpcy5vbkNhbmNlbC5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBhY3RpdmU6IHRoaXMucHJvcHMuYWN0aXZlIHx8IGZhbHNlXG4gICAgICAgIH07XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuXG4gICAgICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IDxDYW5jZWxCdXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5vbkNhbmNlbCgpfS8+O1xuXG4gICAgICAgIHJldHVybiA8TnVsbENvbGxhcHNlIG9wZW49e3RoaXMucHJvcHMuYWN0aXZlfT5cblxuICAgICAgICAgICAgPFNjcm9sbEludG9WaWV3PlxuICAgICAgICAgICAgICAgIDxGbGFzaGNhcmRJbnB1dCBpZD17J2VkaXQtZmxhc2hjYXJkLWZvcicgKyB0aGlzLnByb3BzLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkZsYXNoY2FyZD17dGhpcy5wcm9wcy5vbkZsYXNoY2FyZENyZWF0ZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5kZWZhdWx0VmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbj17Y2FuY2VsQnV0dG9ufS8+XG4gICAgICAgICAgICA8L1Njcm9sbEludG9WaWV3PlxuXG4gICAgICAgIDwvTnVsbENvbGxhcHNlPjtcblxuICAgIH1cblxuICAgIHByaXZhdGUgb25DYW5jZWwoKSB7XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25DYW5jZWwpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25DYW5jZWwoKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG59XG5pbnRlcmZhY2UgSVByb3BzIHtcblxuICAgIHJlYWRvbmx5IGlkOiBzdHJpbmc7XG5cbiAgICByZWFkb25seSBhY3RpdmU6IGJvb2xlYW47XG5cbiAgICByZWFkb25seSBvbkZsYXNoY2FyZENyZWF0ZWQ6IEZsYXNoY2FyZENhbGxiYWNrO1xuXG4gICAgcmVhZG9ubHkgb25DYW5jZWw/OiAoKSA9PiB2b2lkO1xuXG4gICAgcmVhZG9ubHkgZGVmYXVsdFZhbHVlPzogc3RyaW5nO1xuXG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xufVxuXG5cbiJdfQ==