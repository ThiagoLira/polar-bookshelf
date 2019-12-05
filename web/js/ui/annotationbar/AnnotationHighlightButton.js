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
class AnnotationHighlightButton extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement(reactstrap_1.Button, { size: "lg", type: "button", className: "btn p-1 m-1 annotationbar-btn", title: "", "aria-label": "", onClick: () => this.props.onHighlightedColor(this.props.dispatchColor), style: {} },
            React.createElement("span", { className: "fas fa-highlighter", "aria-hidden": "true", style: { color: this.props.styleColor } })));
    }
}
exports.AnnotationHighlightButton = AnnotationHighlightButton;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW5ub3RhdGlvbkhpZ2hsaWdodEJ1dHRvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkFubm90YXRpb25IaWdobGlnaHRCdXR0b24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUMvQiwyQ0FBa0M7QUFLbEMsTUFBYSx5QkFBMEIsU0FBUSxLQUFLLENBQUMsU0FBeUI7SUFFMUUsWUFBWSxLQUFVO1FBQ2xCLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQixDQUFDO0lBRU0sTUFBTTtRQUNULE9BQU8sQ0FDSCxvQkFBQyxtQkFBTSxJQUFDLElBQUksRUFBQyxJQUFJLEVBQ1QsSUFBSSxFQUFDLFFBQVEsRUFDYixTQUFTLEVBQUMsK0JBQStCLEVBQ3pDLEtBQUssRUFBQyxFQUFFLGdCQUNHLEVBQUUsRUFDYixPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxFQUN0RSxLQUFLLEVBQUUsRUFBRztZQUVkLDhCQUFNLFNBQVMsRUFBQyxvQkFBb0IsaUJBQ2xCLE1BQU0sRUFDbEIsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FFM0MsQ0FDWixDQUFDO0lBRU4sQ0FBQztDQUVKO0FBekJELDhEQXlCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7QnV0dG9ufSBmcm9tICdyZWFjdHN0cmFwJztcbmltcG9ydCB7SGlnaGxpZ2h0Q29sb3J9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL21ldGFkYXRhL0lCYXNlSGlnaGxpZ2h0XCI7XG5cbi8qKlxuICovXG5leHBvcnQgY2xhc3MgQW5ub3RhdGlvbkhpZ2hsaWdodEJ1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxCdXR0b24gc2l6ZT1cImxnXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBwLTEgbS0xIGFubm90YXRpb25iYXItYnRuXCJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJcIlxuICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5vbkhpZ2hsaWdodGVkQ29sb3IodGhpcy5wcm9wcy5kaXNwYXRjaENvbG9yKX1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgfX0+XG5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYXMgZmEtaGlnaGxpZ2h0ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IHRoaXMucHJvcHMuc3R5bGVDb2xvciB9fS8+XG5cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICApO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVByb3BzIHtcbiAgICByZWFkb25seSBkaXNwYXRjaENvbG9yOiBIaWdobGlnaHRDb2xvcjtcbiAgICByZWFkb25seSBzdHlsZUNvbG9yOiBzdHJpbmc7XG4gICAgcmVhZG9ubHkgb25IaWdobGlnaHRlZENvbG9yOiAoY29sb3I6IEhpZ2hsaWdodENvbG9yKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElTdGF0ZSB7XG59XG5cbiJdfQ==