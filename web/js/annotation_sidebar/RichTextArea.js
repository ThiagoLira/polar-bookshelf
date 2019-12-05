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
const RichTextEditor4_1 = require("../apps/card_creator/elements/schemaform/RichTextEditor4");
class RichTextArea extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const autofocus = this.props.autofocus !== undefined ? this.props.autofocus : false;
        let label = React.createElement("label", { className: "text-muted" }, this.props.label);
        if (this.props.label === undefined) {
            label = undefined;
        }
        const Label = () => {
            if (this.props.label) {
                return (React.createElement("div", null, label));
            }
            else {
                return (React.createElement("div", null));
            }
        };
        return (React.createElement("div", { id: this.props.id, className: "rich-text-area" },
            React.createElement("div", null,
                React.createElement(Label, null),
                React.createElement("div", { className: "border rounded mb-1 rich-text-area-input" },
                    React.createElement(RichTextEditor4_1.RichTextEditor4, { id: `rich-text-area-${this.props.id}`, value: this.props.value || '', defaultValue: this.props.defaultValue, autofocus: autofocus, onKeyDown: this.props.onKeyDown, onRichTextMutator: this.props.onRichTextMutator, onChange: (html) => this.props.onChange(html) })))));
    }
}
exports.RichTextArea = RichTextArea;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmljaFRleHRBcmVhLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUmljaFRleHRBcmVhLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSw2Q0FBK0I7QUFDL0IsOEZBQXlGO0FBSXpGLE1BQWEsWUFBYSxTQUFRLEtBQUssQ0FBQyxTQUF5QjtJQUU3RCxZQUFZLEtBQWEsRUFBRSxPQUFZO1FBQ25DLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFFMUIsQ0FBQztJQUVNLE1BQU07UUFFVCxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFFcEYsSUFBSSxLQUFLLEdBQTRCLCtCQUFPLFNBQVMsRUFBQyxZQUFZLElBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQVMsQ0FBQztRQUU5RixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUNoQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1NBQ3JCO1FBRUQsTUFBTSxLQUFLLEdBQUcsR0FBRyxFQUFFO1lBRWYsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRTtnQkFDbEIsT0FBTyxDQUFDLGlDQUFNLEtBQUssQ0FBTyxDQUFDLENBQUM7YUFDL0I7aUJBQU07Z0JBQ0gsT0FBTyxDQUFFLGdDQUFXLENBQUUsQ0FBQzthQUMxQjtRQUVMLENBQUMsQ0FBQztRQUVGLE9BQU8sQ0FFSCw2QkFBSyxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsU0FBUyxFQUFDLGdCQUFnQjtZQUU5QztnQkFFSSxvQkFBQyxLQUFLLE9BQUU7Z0JBRVIsNkJBQUssU0FBUyxFQUFDLDBDQUEwQztvQkFFckQsb0JBQUMsaUNBQWUsSUFBQyxFQUFFLEVBQUUsa0JBQWtCLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLEVBQ3JDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxFQUFFLEVBQzdCLFlBQVksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFDckMsU0FBUyxFQUFFLFNBQVMsRUFDcEIsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUMvQixpQkFBaUIsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixFQUMvQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBRS9ELENBRUosQ0FFSixDQUVULENBQUM7SUFFTixDQUFDO0NBRUo7QUF2REQsb0NBdURDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtSaWNoVGV4dEVkaXRvcjR9IGZyb20gJy4uL2FwcHMvY2FyZF9jcmVhdG9yL2VsZW1lbnRzL3NjaGVtYWZvcm0vUmljaFRleHRFZGl0b3I0JztcbmltcG9ydCB7UmljaFRleHRNdXRhdG9yfSBmcm9tICcuLi9hcHBzL2NhcmRfY3JlYXRvci9lbGVtZW50cy9zY2hlbWFmb3JtL1JpY2hUZXh0TXV0YXRvcic7XG5pbXBvcnQge0hUTUxTdHJ9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL3V0aWwvU3RyaW5nc1wiO1xuXG5leHBvcnQgY2xhc3MgUmljaFRleHRBcmVhIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzLCBjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICBjb25zdCBhdXRvZm9jdXMgPSB0aGlzLnByb3BzLmF1dG9mb2N1cyAhPT0gdW5kZWZpbmVkID8gdGhpcy5wcm9wcy5hdXRvZm9jdXMgOiBmYWxzZTtcblxuICAgICAgICBsZXQgbGFiZWw6IEpTWC5FbGVtZW50IHwgdW5kZWZpbmVkID0gPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj57dGhpcy5wcm9wcy5sYWJlbH08L2xhYmVsPjtcblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5sYWJlbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBsYWJlbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IExhYmVsID0gKCkgPT4ge1xuXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5sYWJlbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoPGRpdj57bGFiZWx9PC9kaXY+KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICggPGRpdj48L2Rpdj4gKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgIDxkaXYgaWQ9e3RoaXMucHJvcHMuaWR9IGNsYXNzTmFtZT1cInJpY2gtdGV4dC1hcmVhXCI+XG5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXIgcm91bmRlZCBtYi0xIHJpY2gtdGV4dC1hcmVhLWlucHV0XCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSaWNoVGV4dEVkaXRvcjQgaWQ9e2ByaWNoLXRleHQtYXJlYS0ke3RoaXMucHJvcHMuaWR9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMudmFsdWUgfHwgJyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5kZWZhdWx0VmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9mb2N1cz17YXV0b2ZvY3VzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbktleURvd249e3RoaXMucHJvcHMub25LZXlEb3dufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblJpY2hUZXh0TXV0YXRvcj17dGhpcy5wcm9wcy5vblJpY2hUZXh0TXV0YXRvcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhodG1sKSA9PiB0aGlzLnByb3BzLm9uQ2hhbmdlKGh0bWwpfS8+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgKTtcblxuICAgIH1cblxufVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgICByZWFkb25seSBpZDogc3RyaW5nO1xuICAgIHJlYWRvbmx5IHZhbHVlPzogc3RyaW5nO1xuICAgIHJlYWRvbmx5IGRlZmF1bHRWYWx1ZT86IHN0cmluZztcbiAgICByZWFkb25seSBsYWJlbD86IHN0cmluZztcbiAgICByZWFkb25seSBhdXRvZm9jdXM/OiBib29sZWFuO1xuICAgIHJlYWRvbmx5IG9uQ2hhbmdlOiAoaHRtbDogSFRNTFN0cikgPT4gdm9pZDtcbiAgICByZWFkb25seSBvbktleURvd24/OiAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHZvaWQ7XG4gICAgcmVhZG9ubHkgb25SaWNoVGV4dE11dGF0b3I/OiAobXV0YXRvcjogUmljaFRleHRNdXRhdG9yKSA9PiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbn1cbiJdfQ==