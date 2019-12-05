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
const NullCollapse_1 = require("../../../../web/js/ui/null_collapse/NullCollapse");
class LinkHost extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const parseHost = () => {
            const { url } = this.props;
            if (!url) {
                return undefined;
            }
            const parsedURL = new URL(url);
            return parsedURL.host;
        };
        const host = parseHost();
        return (React.createElement("div", null,
            React.createElement(NullCollapse_1.NullCollapse, { open: host !== undefined },
                React.createElement("div", { className: "mr-1" }, host))));
    }
}
exports.LinkHost = LinkHost;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGlua0hvc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJMaW5rSG9zdC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsNkNBQStCO0FBRS9CLG1GQUE4RTtBQUU5RSxNQUFhLFFBQVMsU0FBUSxLQUFLLENBQUMsU0FBeUI7SUFFekQsWUFBWSxLQUFhLEVBQUUsT0FBWTtRQUNuQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFTSxNQUFNO1FBRVQsTUFBTSxTQUFTLEdBQUcsR0FBRyxFQUFFO1lBRW5CLE1BQU0sRUFBQyxHQUFHLEVBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBRXpCLElBQUksQ0FBRSxHQUFHLEVBQUU7Z0JBQ1AsT0FBTyxTQUFTLENBQUM7YUFDcEI7WUFFRCxNQUFNLFNBQVMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUUvQixPQUFPLFNBQVMsQ0FBQyxJQUFJLENBQUM7UUFFMUIsQ0FBQyxDQUFDO1FBRUYsTUFBTSxJQUFJLEdBQUcsU0FBUyxFQUFFLENBQUM7UUFFekIsT0FBTyxDQUVIO1lBQ0ksb0JBQUMsMkJBQVksSUFBQyxJQUFJLEVBQUUsSUFBSSxLQUFLLFNBQVM7Z0JBQ2xDLDZCQUFLLFNBQVMsRUFBQyxNQUFNLElBQ2hCLElBQUksQ0FDSCxDQUNLLENBQ2IsQ0FFVCxDQUFDO0lBQ04sQ0FBQztDQUVKO0FBckNELDRCQXFDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7R3JvdXBEb2NJbmZvfSBmcm9tIFwiLi4vLi4vLi4vLi4vd2ViL2pzL2RhdGFzdG9yZS9zaGFyaW5nL0dyb3VwRG9jSW5mb3NcIjtcbmltcG9ydCB7TnVsbENvbGxhcHNlfSBmcm9tIFwiLi4vLi4vLi4vLi4vd2ViL2pzL3VpL251bGxfY29sbGFwc2UvTnVsbENvbGxhcHNlXCI7XG5cbmV4cG9ydCBjbGFzcyBMaW5rSG9zdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcywgY29udGV4dDogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuXG4gICAgICAgIGNvbnN0IHBhcnNlSG9zdCA9ICgpID0+IHtcblxuICAgICAgICAgICAgY29uc3Qge3VybH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgICAgICBpZiAoISB1cmwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBwYXJzZWRVUkwgPSBuZXcgVVJMKHVybCk7XG5cbiAgICAgICAgICAgIHJldHVybiBwYXJzZWRVUkwuaG9zdDtcblxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGhvc3QgPSBwYXJzZUhvc3QoKTtcblxuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxOdWxsQ29sbGFwc2Ugb3Blbj17aG9zdCAhPT0gdW5kZWZpbmVkfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aG9zdH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9OdWxsQ29sbGFwc2U+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICApO1xuICAgIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgcmVhZG9ubHkgdXJsPzogc3RyaW5nO1xuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVN0YXRlIHtcbn1cbiJdfQ==