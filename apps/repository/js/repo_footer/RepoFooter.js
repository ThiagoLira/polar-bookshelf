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
const react_router_dom_1 = require("react-router-dom");
const reactstrap_1 = require("reactstrap");
class RepoFooter extends React.PureComponent {
    render() {
        return (React.createElement("footer", { className: "d-none-desktop d-none-tablet border-top" },
            React.createElement("div", { className: "mt-1 mb-1", style: {
                    display: 'flex'
                } },
                React.createElement("div", { className: "m-auto" },
                    React.createElement(react_router_dom_1.Link, { to: { pathname: "/", hash: "#annotations" } },
                        React.createElement(reactstrap_1.Button, { size: "lg", color: "light" },
                            React.createElement("i", { className: "fas fa-home" })))),
                React.createElement("div", { className: "m-auto" },
                    React.createElement(react_router_dom_1.Link, { to: { pathname: "/", hash: "#stats" } },
                        React.createElement(reactstrap_1.Button, { size: "lg", color: "light" },
                            React.createElement("i", { className: "fas fa-chart-line" })))))));
    }
}
exports.RepoFooter = RepoFooter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVwb0Zvb3Rlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlJlcG9Gb290ZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUMvQix1REFBc0M7QUFDdEMsMkNBQWtDO0FBS2xDLE1BQWEsVUFBVyxTQUFRLEtBQUssQ0FBQyxhQUFxQjtJQUVoRCxNQUFNO1FBRVQsT0FBTyxDQUVILGdDQUFRLFNBQVMsRUFBQyx5Q0FBeUM7WUFFdkQsNkJBQUssU0FBUyxFQUFDLFdBQVcsRUFDckIsS0FBSyxFQUFFO29CQUNILE9BQU8sRUFBRSxNQUFNO2lCQUNsQjtnQkFFRiw2QkFBSyxTQUFTLEVBQUMsUUFBUTtvQkFDbkIsb0JBQUMsdUJBQUksSUFBQyxFQUFFLEVBQUUsRUFBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUM7d0JBQzNDLG9CQUFDLG1CQUFNLElBQUMsSUFBSSxFQUFDLElBQUksRUFDVCxLQUFLLEVBQUMsT0FBTzs0QkFDakIsMkJBQUcsU0FBUyxFQUFDLGFBQWEsR0FBRSxDQUN2QixDQUNOLENBQ0w7Z0JBRU4sNkJBQUssU0FBUyxFQUFDLFFBQVE7b0JBQ25CLG9CQUFDLHVCQUFJLElBQUMsRUFBRSxFQUFFLEVBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFDO3dCQUNyQyxvQkFBQyxtQkFBTSxJQUFDLElBQUksRUFBQyxJQUFJLEVBQ1QsS0FBSyxFQUFDLE9BQU87NEJBQ2pCLDJCQUFHLFNBQVMsRUFBQyxtQkFBbUIsR0FBRSxDQUM3QixDQUNOLENBQ0wsQ0FFSixDQUVELENBR1osQ0FBQztJQUVOLENBQUM7Q0FFSjtBQXhDRCxnQ0F3Q0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0xpbmt9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQge0J1dHRvbn0gZnJvbSBcInJlYWN0c3RyYXBcIjtcblxuLyoqXG4gKiBTaW1wbGUgaGVhZGVyIGZvciB0aGUgcmVwb3NpdG9yeSB3aGljaCBzdXBwb3J0cyBhcmJpdHJhcnkgY2hpbGRyZW4uXG4gKi9cbmV4cG9ydCBjbGFzcyBSZXBvRm9vdGVyIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxJUHJvcHM+IHtcblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJkLW5vbmUtZGVza3RvcCBkLW5vbmUtdGFibGV0IGJvcmRlci10b3BcIj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMSBtYi0xXCJcbiAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnXG4gICAgICAgICAgICAgICAgICAgICB9fT5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89e3twYXRobmFtZTogXCIvXCIsIGhhc2g6IFwiI2Fubm90YXRpb25zXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHNpemU9XCJsZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImxpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1ob21lXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89e3twYXRobmFtZTogXCIvXCIsIGhhc2g6IFwiI3N0YXRzXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHNpemU9XCJsZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImxpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1jaGFydC1saW5lXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2Zvb3Rlcj5cblxuXG4gICAgICAgICk7XG5cbiAgICB9XG5cbn1cblxuaW50ZXJmYWNlIElQcm9wcyB7XG59XG4iXX0=