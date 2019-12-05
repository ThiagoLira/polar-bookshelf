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
const EditComment_1 = require("./EditComment");
const CancelButton_1 = require("../CancelButton");
const NullCollapse_1 = require("../../../ui/null_collapse/NullCollapse");
class CreateComment extends React.PureComponent {
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
            React.createElement(EditComment_1.EditComment, { id: 'edit-comment-for' + this.props.id, onComment: (html) => this.props.onComment(html), cancelButton: cancelButton }));
    }
    onCancel() {
        this.props.onCancel();
    }
}
exports.CreateComment = CreateComment;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3JlYXRlQ29tbWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNyZWF0ZUNvbW1lbnQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUMvQiwrQ0FBMEM7QUFDMUMsa0RBQTZDO0FBQzdDLHlFQUFvRTtBQUVwRSxNQUFhLGFBQWMsU0FBUSxLQUFLLENBQUMsYUFBNkI7SUFFbEUsWUFBWSxLQUFhLEVBQUUsT0FBWTtRQUNuQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRXRCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFekMsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNULE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxLQUFLO1NBQ3JDLENBQUM7SUFFTixDQUFDO0lBRU0sTUFBTTtRQUVULE1BQU0sWUFBWSxHQUFHLG9CQUFDLDJCQUFZLElBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDO1FBRXJFLE9BQU8sb0JBQUMsMkJBQVksSUFBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNO1lBRXhDLG9CQUFDLHlCQUFXLElBQUMsRUFBRSxFQUFFLGtCQUFrQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUN0QyxTQUFTLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUMvQyxZQUFZLEVBQUUsWUFBWSxHQUFHLENBRS9CLENBQUM7SUFFcEIsQ0FBQztJQUVPLFFBQVE7UUFDWixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzFCLENBQUM7Q0FFSjtBQS9CRCxzQ0ErQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0VkaXRDb21tZW50fSBmcm9tIFwiLi9FZGl0Q29tbWVudFwiO1xuaW1wb3J0IHtDYW5jZWxCdXR0b259IGZyb20gXCIuLi9DYW5jZWxCdXR0b25cIjtcbmltcG9ydCB7TnVsbENvbGxhcHNlfSBmcm9tIFwiLi4vLi4vLi4vdWkvbnVsbF9jb2xsYXBzZS9OdWxsQ29sbGFwc2VcIjtcblxuZXhwb3J0IGNsYXNzIENyZWF0ZUNvbW1lbnQgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzLCBjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuXG4gICAgICAgIHRoaXMub25DYW5jZWwgPSB0aGlzLm9uQ2FuY2VsLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGFjdGl2ZTogdGhpcy5wcm9wcy5hY3RpdmUgfHwgZmFsc2VcbiAgICAgICAgfTtcblxuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgY29uc3QgY2FuY2VsQnV0dG9uID0gPENhbmNlbEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLm9uQ2FuY2VsKCl9Lz47XG5cbiAgICAgICAgcmV0dXJuIDxOdWxsQ29sbGFwc2Ugb3Blbj17dGhpcy5wcm9wcy5hY3RpdmV9PlxuXG4gICAgICAgICAgICA8RWRpdENvbW1lbnQgaWQ9eydlZGl0LWNvbW1lbnQtZm9yJyArIHRoaXMucHJvcHMuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgb25Db21tZW50PXsoaHRtbCkgPT4gdGhpcy5wcm9wcy5vbkNvbW1lbnQoaHRtbCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uPXtjYW5jZWxCdXR0b259Lz5cblxuICAgICAgICA8L051bGxDb2xsYXBzZT47XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uQ2FuY2VsKCkge1xuICAgICAgICB0aGlzLnByb3BzLm9uQ2FuY2VsKCk7XG4gICAgfVxuXG59XG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgICByZWFkb25seSBpZDogc3RyaW5nO1xuICAgIHJlYWRvbmx5IGFjdGl2ZTogYm9vbGVhbjtcbiAgICByZWFkb25seSBvbkNvbW1lbnQ6IChodG1sOiBzdHJpbmcpID0+IHZvaWQ7XG4gICAgcmVhZG9ubHkgb25DYW5jZWw6ICgpID0+IHZvaWQ7XG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xufVxuXG5cbiJdfQ==