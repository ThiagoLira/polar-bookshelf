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
class Navbar extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (React.createElement("div", null,
            React.createElement("p", null,
                "Location: ",
                document.location.href),
            React.createElement("p", null,
                React.createElement(react_router_dom_1.Link, { to: {
                        pathname: "/",
                        hash: "",
                    } }, "Link to #")),
            React.createElement("p", null,
                React.createElement(react_router_dom_1.Link, { to: {
                        pathname: "/",
                        hash: "hello"
                    } }, "#hello")),
            React.createElement("p", null,
                React.createElement(react_router_dom_1.Link, { to: {
                        pathname: "/user",
                        hash: ""
                    } }, "/user"))));
    }
}
exports.Navbar = Navbar;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmF2YmFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiTmF2YmFyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSw2Q0FBK0I7QUFDL0IsdURBQXNDO0FBRXRDLE1BQWEsTUFBTyxTQUFRLEtBQUssQ0FBQyxTQUF5QjtJQUV2RCxZQUFZLEtBQWEsRUFBRSxPQUFZO1FBQ25DLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVNLE1BQU07UUFFVCxPQUFPLENBQ0g7WUFFSTs7Z0JBQ2UsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ2pDO1lBRUo7Z0JBQ0ksb0JBQUMsdUJBQUksSUFDRCxFQUFFLEVBQUU7d0JBQ0EsUUFBUSxFQUFFLEdBQUc7d0JBQ2IsSUFBSSxFQUFFLEVBQUU7cUJBQ1gsZ0JBSUUsQ0FDUDtZQUVKO2dCQUNJLG9CQUFDLHVCQUFJLElBQ0QsRUFBRSxFQUFFO3dCQUNBLFFBQVEsRUFBRSxHQUFHO3dCQUNiLElBQUksRUFBRSxPQUFPO3FCQUNoQixhQUlFLENBQ1A7WUFHSjtnQkFDSSxvQkFBQyx1QkFBSSxJQUNELEVBQUUsRUFBRTt3QkFDQSxRQUFRLEVBQUUsT0FBTzt3QkFDakIsSUFBSSxFQUFFLEVBQUU7cUJBQ1gsWUFJRSxDQUNQLENBRUYsQ0FDVCxDQUFDO0lBRU4sQ0FBQztDQUVKO0FBekRELHdCQXlEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7TGlua30gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuZXhwb3J0IGNsYXNzIE5hdmJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcywgY29udGV4dDogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuXG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIExvY2F0aW9uOiB7ZG9jdW1lbnQubG9jYXRpb24uaHJlZn1cbiAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IFwiL1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc2g6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgTGluayB0byAjXG5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgdG89e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogXCIvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzaDogXCJoZWxsb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgI2hlbGxvXG5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvcD5cblxuXG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICB0bz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBcIi91c2VyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzaDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC91c2VyXG5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG5cbiAgICB9XG5cbn1cblxuaW50ZXJmYWNlIElQcm9wcyB7XG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xufVxuXG5cbiJdfQ==