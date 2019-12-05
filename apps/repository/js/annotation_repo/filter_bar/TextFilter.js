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
const InputGroup_1 = __importDefault(require("reactstrap/lib/InputGroup"));
const Input_1 = __importDefault(require("reactstrap/lib/Input"));
const Platforms_1 = require("polar-shared/src/util/Platforms");
class TextFilter extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const width = Platforms_1.Platforms.isMobile() ? '150px' : '250px';
        return (React.createElement(InputGroup_1.default, { size: "md" },
            React.createElement(Input_1.default, { id: "filter_title", type: "text", placeholder: "Filter by text", style: { width }, onChange: (value) => this.props.updateFilters({ text: value.target.value }) })));
    }
}
exports.TextFilter = TextFilter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGV4dEZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlRleHRGaWx0ZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUMvQiwyRUFBbUQ7QUFDbkQsaUVBQXlDO0FBRXpDLCtEQUEwRDtBQUUxRCxNQUFhLFVBQVcsU0FBUSxLQUFLLENBQUMsYUFBNkI7SUFFL0QsWUFBWSxLQUFhLEVBQUUsT0FBWTtRQUNuQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBRTFCLENBQUM7SUFFTSxNQUFNO1FBRVQsTUFBTSxLQUFLLEdBQUcscUJBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFFdkQsT0FBTyxDQUNILG9CQUFDLG9CQUFVLElBQUMsSUFBSSxFQUFDLElBQUk7WUFFakIsb0JBQUMsZUFBSyxJQUFDLEVBQUUsRUFBQyxjQUFjLEVBQ2pCLElBQUksRUFBQyxNQUFNLEVBQ1gsV0FBVyxFQUFDLGdCQUFnQixFQUM1QixLQUFLLEVBQUUsRUFBQyxLQUFLLEVBQUMsRUFDZCxRQUFRLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLEVBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFDLENBQUMsR0FBRyxDQUUxRSxDQUVoQixDQUFDO0lBRU4sQ0FBQztDQUVKO0FBMUJELGdDQTBCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbnB1dEdyb3VwIGZyb20gJ3JlYWN0c3RyYXAvbGliL0lucHV0R3JvdXAnO1xuaW1wb3J0IElucHV0IGZyb20gJ3JlYWN0c3RyYXAvbGliL0lucHV0JztcbmltcG9ydCB7VXBkYXRlRmlsdGVyc0NhbGxiYWNrfSBmcm9tICcuLi9Bbm5vdGF0aW9uUmVwb0ZpbHRlcnNIYW5kbGVyJztcbmltcG9ydCB7UGxhdGZvcm1zfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy91dGlsL1BsYXRmb3Jtc1wiO1xuXG5leHBvcnQgY2xhc3MgVGV4dEZpbHRlciBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJUHJvcHMsIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuXG4gICAgICAgIGNvbnN0IHdpZHRoID0gUGxhdGZvcm1zLmlzTW9iaWxlKCkgPyAnMTUwcHgnIDogJzI1MHB4JztcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPElucHV0R3JvdXAgc2l6ZT1cIm1kXCI+XG5cbiAgICAgICAgICAgICAgICA8SW5wdXQgaWQ9XCJmaWx0ZXJfdGl0bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRmlsdGVyIGJ5IHRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRofX1cbiAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gdGhpcy5wcm9wcy51cGRhdGVGaWx0ZXJzKHt0ZXh0OiB2YWx1ZS50YXJnZXQudmFsdWV9KX0vPlxuXG4gICAgICAgICAgICA8L0lucHV0R3JvdXA+XG5cbiAgICAgICAgKTtcblxuICAgIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElQcm9wcyB7XG5cbiAgICByZWFkb25seSB1cGRhdGVGaWx0ZXJzOiBVcGRhdGVGaWx0ZXJzQ2FsbGJhY2s7XG5cbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG5cbn1cbiJdfQ==