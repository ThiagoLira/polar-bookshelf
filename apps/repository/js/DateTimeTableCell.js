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
const Preconditions_1 = require("polar-shared/src/Preconditions");
const react_moment_1 = __importDefault(require("react-moment"));
class DateTimeTableCell extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        if (Preconditions_1.isPresent(this.props.datetime)) {
            return (React.createElement("div", { className: this.props.className },
                React.createElement(react_moment_1.default, { withTitle: true, titleFormat: "D MMM YYYY hh:MM A", filter: (value) => value.replace(/^an? /g, '1 '), fromNow: true, ago: true }, this.props.datetime)));
        }
        else {
            return null;
        }
    }
}
exports.DateTimeTableCell = DateTimeTableCell;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0ZVRpbWVUYWJsZUNlbGwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJEYXRlVGltZVRhYmxlQ2VsbC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQStCO0FBQy9CLGtFQUF5RDtBQUN6RCxnRUFBa0M7QUFHbEMsTUFBYSxpQkFBa0IsU0FBUSxLQUFLLENBQUMsYUFBMEI7SUFFbkUsWUFBWSxLQUFhLEVBQUUsT0FBWTtRQUNuQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFTSxNQUFNO1FBRVQsSUFBSSx5QkFBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFFaEMsT0FBTyxDQUVILDZCQUFLLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVM7Z0JBQ2hDLG9CQUFDLHNCQUFNLElBQUMsU0FBUyxFQUFFLElBQUksRUFDZixXQUFXLEVBQUMsb0JBQW9CLEVBQ2hDLE1BQU0sRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEVBQ2hELE9BQU8sUUFBQyxHQUFHLFVBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFTLENBQ2hCLENBQ1AsQ0FFVCxDQUFDO1NBRUw7YUFBTTtZQUNILE9BQU8sSUFBSSxDQUFDO1NBQ2Y7SUFFTCxDQUFDO0NBRUo7QUE3QkQsOENBNkJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtpc1ByZXNlbnR9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvUHJlY29uZGl0aW9ucyc7XG5pbXBvcnQgTW9tZW50IGZyb20gJ3JlYWN0LW1vbWVudCc7XG5pbXBvcnQge0lTT0RhdGVUaW1lU3RyaW5nfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL21ldGFkYXRhL0lTT0RhdGVUaW1lU3RyaW5ncyc7XG5cbmV4cG9ydCBjbGFzcyBEYXRlVGltZVRhYmxlQ2VsbCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8SVByb3BzLCBhbnk+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJUHJvcHMsIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICBpZiAoaXNQcmVzZW50KHRoaXMucHJvcHMuZGF0ZXRpbWUpKSB7XG5cbiAgICAgICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWV9PlxuICAgICAgICAgICAgICAgICAgICA8TW9tZW50IHdpdGhUaXRsZT17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZUZvcm1hdD1cIkQgTU1NIFlZWVkgaGg6TU0gQVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyPXsodmFsdWUpID0+IHZhbHVlLnJlcGxhY2UoL15hbj8gL2csICcxICcpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb21Ob3cgYWdvPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuZGF0ZXRpbWUhfVxuICAgICAgICAgICAgICAgICAgICA8L01vbWVudD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgKTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgIH1cblxufVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgICByZWFkb25seSBkYXRldGltZTogSVNPRGF0ZVRpbWVTdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkO1xuICAgIHJlYWRvbmx5IGNsYXNzTmFtZTogc3RyaW5nO1xufVxuIl19