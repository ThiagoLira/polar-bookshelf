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
const react_moment_1 = __importDefault(require("react-moment"));
class DocAnnotationMoment extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (React.createElement("div", { className: "mt-auto mb-auto text-muted" },
            React.createElement(react_moment_1.default, { style: {
                    fontSize: '12px'
                }, withTitle: true, titleFormat: "D MMM YYYY hh:MM A", fromNow: true }, this.props.created)));
    }
}
exports.DocAnnotationMoment = DocAnnotationMoment;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jQW5ub3RhdGlvbk1vbWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkRvY0Fubm90YXRpb25Nb21lbnQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUMvQixnRUFBa0M7QUFPbEMsTUFBYSxtQkFBb0IsU0FBUSxLQUFLLENBQUMsU0FBeUI7SUFFcEUsWUFBWSxLQUFhLEVBQUUsT0FBWTtRQUNuQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBRTFCLENBQUM7SUFFTSxNQUFNO1FBRVQsT0FBTyxDQUNILDZCQUFLLFNBQVMsRUFBQyw0QkFBNEI7WUFFdkMsb0JBQUMsc0JBQU0sSUFBQyxLQUFLLEVBQUU7b0JBQ0gsUUFBUSxFQUFFLE1BQU07aUJBQ25CLEVBQ0QsU0FBUyxFQUFFLElBQUksRUFDZixXQUFXLEVBQUMsb0JBQW9CLEVBQUMsT0FBTyxVQUMzQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FDZCxDQUNQLENBQ1QsQ0FBQztJQUVOLENBQUM7Q0FFSjtBQXhCRCxrREF3QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTW9tZW50IGZyb20gJ3JlYWN0LW1vbWVudCc7XG5pbXBvcnQge0lTT0RhdGVUaW1lU3RyaW5nfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy9tZXRhZGF0YS9JU09EYXRlVGltZVN0cmluZ3NcIjtcblxuXG4vKipcbiAqIEEgZ2VuZXJpYyB3cmFwcGVyIHRoYXQgZGV0ZXJtaW5lcyB3aGljaCBzdWItY29tcG9uZW50IHRvIHJlbmRlci5cbiAqL1xuZXhwb3J0IGNsYXNzIERvY0Fubm90YXRpb25Nb21lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJUHJvcHMsIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LWF1dG8gbWItYXV0byB0ZXh0LW11dGVkXCI+XG4gICAgICAgICAgICAgICAgey8qVE9ETzogbWFrZSB0aGlzIGludG8gaXRzIG93biBjb21wb25lbnQuLi4gKi99XG4gICAgICAgICAgICAgICAgPE1vbWVudCBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTJweCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICB3aXRoVGl0bGU9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZUZvcm1hdD1cIkQgTU1NIFlZWVkgaGg6TU0gQVwiIGZyb21Ob3c+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNyZWF0ZWR9XG4gICAgICAgICAgICAgICAgPC9Nb21lbnQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcblxuICAgIH1cblxufVxuaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgcmVhZG9ubHkgY3JlYXRlZDogSVNPRGF0ZVRpbWVTdHJpbmc7XG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xuXG59XG5cblxuIl19