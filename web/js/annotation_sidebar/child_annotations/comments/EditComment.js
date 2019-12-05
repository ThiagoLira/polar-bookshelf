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
const Button_1 = __importDefault(require("reactstrap/lib/Button"));
const RichTextArea_1 = require("../../RichTextArea");
const RichTextFeatureIntro_1 = require("../../RichTextFeatureIntro");
class EditComment extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.html = "";
        this.onComment = this.onComment.bind(this);
        if (this.props.existingComment) {
            this.html = this.props.existingComment.content.HTML;
        }
        this.state = {
            iter: 0
        };
    }
    render() {
        const id = 'rich-text-editor-' + this.props.id;
        return (React.createElement("div", null,
            React.createElement(RichTextFeatureIntro_1.RichTextFeatureIntro, null),
            React.createElement("div", { id: "annotation-comment-box", className: "mt-1" },
                React.createElement("div", { className: "" },
                    React.createElement(RichTextArea_1.RichTextArea, { id: id, value: this.html, autofocus: true, onKeyDown: event => this.onKeyDown(event), onChange: (html) => this.onChange(html) })),
                React.createElement("div", { className: "flexbar w-100" },
                    React.createElement("div", { className: "flexbar-right mt-1 mb-1" },
                        this.props.cancelButton,
                        React.createElement(Button_1.default, { color: "primary", size: "sm", className: "ml-1", onClick: () => this.onComment() }, this.props.existingComment ? 'Update' : 'Comment'))))));
    }
    onKeyDown(event) {
        if (event.getModifierState("Control") && event.key === "Enter") {
            this.onComment();
        }
    }
    onChange(html) {
        this.html = html;
    }
    onComment() {
        this.props.onComment(this.html, this.props.existingComment);
        this.setState({
            iter: this.state.iter + 1
        });
    }
}
exports.EditComment = EditComment;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRWRpdENvbW1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJFZGl0Q29tbWVudC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQStCO0FBQy9CLG1FQUEyQztBQUMzQyxxREFBZ0Q7QUFFaEQscUVBQWdFO0FBRWhFLE1BQWEsV0FBWSxTQUFRLEtBQUssQ0FBQyxTQUF5QjtJQUk1RCxZQUFZLEtBQWEsRUFBRSxPQUFZO1FBQ25DLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFIbEIsU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUt0QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTNDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQUU7WUFDNUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsSUFBSyxDQUFDO1NBQ3hEO1FBRUQsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNULElBQUksRUFBRSxDQUFDO1NBQ1YsQ0FBQztJQUVOLENBQUM7SUFFTSxNQUFNO1FBRVQsTUFBTSxFQUFFLEdBQUcsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7UUFFL0MsT0FBTyxDQUNIO1lBRUksb0JBQUMsMkNBQW9CLE9BQUU7WUFFdkIsNkJBQUssRUFBRSxFQUFDLHdCQUF3QixFQUFDLFNBQVMsRUFBQyxNQUFNO2dCQUU3Qyw2QkFBSyxTQUFTLEVBQUMsRUFBRTtvQkFFYixvQkFBQywyQkFBWSxJQUFDLEVBQUUsRUFBRSxFQUFFLEVBQ04sS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQ2hCLFNBQVMsRUFBRSxJQUFJLEVBQ2YsU0FBUyxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFDekMsUUFBUSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBRXREO2dCQUVOLDZCQUFLLFNBQVMsRUFBQyxlQUFlO29CQUUxQiw2QkFBSyxTQUFTLEVBQUMseUJBQXlCO3dCQUVuQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVk7d0JBRXhCLG9CQUFDLGdCQUFNLElBQUMsS0FBSyxFQUFDLFNBQVMsRUFDZixJQUFJLEVBQUMsSUFBSSxFQUNULFNBQVMsRUFBQyxNQUFNLEVBQ2hCLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBRWxDLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FFN0MsQ0FFUCxDQUVKLENBRUosQ0FHSixDQUVULENBQUM7SUFFTixDQUFDO0lBRU8sU0FBUyxDQUFDLEtBQW9CO1FBTWxDLElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssT0FBTyxFQUFFO1lBQzVELElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUNwQjtJQUVMLENBQUM7SUFFTyxRQUFRLENBQUMsSUFBWTtRQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRU8sU0FBUztRQUViLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUU1RCxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ1YsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUM7U0FDNUIsQ0FBQyxDQUFDO0lBRVAsQ0FBQztDQUVKO0FBOUZELGtDQThGQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3RzdHJhcC9saWIvQnV0dG9uJztcbmltcG9ydCB7UmljaFRleHRBcmVhfSBmcm9tIFwiLi4vLi4vUmljaFRleHRBcmVhXCI7XG5pbXBvcnQge0NvbW1lbnR9IGZyb20gJy4uLy4uLy4uL21ldGFkYXRhL0NvbW1lbnQnO1xuaW1wb3J0IHtSaWNoVGV4dEZlYXR1cmVJbnRyb30gZnJvbSAnLi4vLi4vUmljaFRleHRGZWF0dXJlSW50cm8nO1xuXG5leHBvcnQgY2xhc3MgRWRpdENvbW1lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICAgIHByaXZhdGUgaHRtbDogc3RyaW5nID0gXCJcIjtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJUHJvcHMsIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG5cbiAgICAgICAgdGhpcy5vbkNvbW1lbnQgPSB0aGlzLm9uQ29tbWVudC5iaW5kKHRoaXMpO1xuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmV4aXN0aW5nQ29tbWVudCkge1xuICAgICAgICAgICAgdGhpcy5odG1sID0gdGhpcy5wcm9wcy5leGlzdGluZ0NvbW1lbnQuY29udGVudC5IVE1MITtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBpdGVyOiAwXG4gICAgICAgIH07XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuXG4gICAgICAgIGNvbnN0IGlkID0gJ3JpY2gtdGV4dC1lZGl0b3ItJyArIHRoaXMucHJvcHMuaWQ7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG5cbiAgICAgICAgICAgICAgICA8UmljaFRleHRGZWF0dXJlSW50cm8vPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImFubm90YXRpb24tY29tbWVudC1ib3hcIiBjbGFzc05hbWU9XCJtdC0xXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPFJpY2hUZXh0QXJlYSBpZD17aWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLmh0bWx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9mb2N1cz17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXtldmVudCA9PiB0aGlzLm9uS2V5RG93bihldmVudCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoaHRtbCkgPT4gdGhpcy5vbkNoYW5nZShodG1sKX0vPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleGJhciB3LTEwMFwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhiYXItcmlnaHQgbXQtMSBtYi0xXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jYW5jZWxCdXR0b259XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLm9uQ29tbWVudCgpfT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5leGlzdGluZ0NvbW1lbnQgPyAnVXBkYXRlJyA6ICdDb21tZW50J31cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCkge1xuXG4gICAgICAgIC8vIGlmIChldmVudC5rZXkgPT09IFwiRXNjYXBlXCIpIHtcbiAgICAgICAgLy8gICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgICAgIC8vIH1cblxuICAgICAgICBpZiAoZXZlbnQuZ2V0TW9kaWZpZXJTdGF0ZShcIkNvbnRyb2xcIikgJiYgZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgICAgIHRoaXMub25Db21tZW50KCk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHByaXZhdGUgb25DaGFuZ2UoaHRtbDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaHRtbCA9IGh0bWw7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkNvbW1lbnQoKTogdm9pZCB7XG5cbiAgICAgICAgdGhpcy5wcm9wcy5vbkNvbW1lbnQodGhpcy5odG1sLCB0aGlzLnByb3BzLmV4aXN0aW5nQ29tbWVudCk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpdGVyOiB0aGlzLnN0YXRlLml0ZXIgKyAxXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG59XG5cbmludGVyZmFjZSBJUHJvcHMge1xuXG4gICAgcmVhZG9ubHkgaWQ6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIFdoZW4gZ2l2ZW4gYSBjb21tZW50IHdlJ3JlIGVkaXRpbmcgYW4gZXhpc3RpbmcgY29tbWVudC5cbiAgICAgKi9cbiAgICByZWFkb25seSBleGlzdGluZ0NvbW1lbnQ/OiBDb21tZW50O1xuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHdoZW4gd2UgaGF2ZSBhIGNyZWF0ZWQgb3IgdXBkYXRlZCBhbiBleGlzdGluZyBjb21tZW50LiAgSWYgdGhlXG4gICAgICogJ2V4aXN0aW5nQ29tbWVudCcgaXMgc3BlY2lmaWVkIHdoZW4gd2UncmUgZG9pbmcgYW4gdXBkYXRlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG9uQ29tbWVudDogKGh0bWw6IHN0cmluZywgZXhpc3RpbmdDb21tZW50PzogQ29tbWVudCkgPT4gdm9pZDtcblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgcmVhZG9ubHkgY2FuY2VsQnV0dG9uOiBKU1guRWxlbWVudDtcblxufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbiAgICByZWFkb25seSBpdGVyOiBudW1iZXI7XG59XG5cblxuIl19