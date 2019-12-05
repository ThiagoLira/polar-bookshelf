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
const Logger_1 = require("polar-shared/src/logger/Logger");
const SimpleTabs_1 = require("../../../../web/js/ui/simple_tab/SimpleTabs");
const SimpleTab_1 = require("../../../../web/js/ui/simple_tab/SimpleTab");
const log = Logger_1.Logger.create();
class GroupNavbar extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (React.createElement("div", null,
            React.createElement("div", { style: { display: 'flex' }, className: "w-100 ml-1" },
                React.createElement("div", { style: { flexGrow: 1 } },
                    React.createElement("h3", null, this.props.groupName))),
            React.createElement(SimpleTabs_1.SimpleTabs, null,
                React.createElement(SimpleTab_1.SimpleTab, { id: "group-nav-highlights", target: { pathname: `/group/${this.props.groupName}` }, text: "Highlights" }),
                React.createElement(SimpleTab_1.SimpleTab, { id: "group-nav-documents", target: { pathname: `/group/${this.props.groupName}/docs` }, text: "Documents" }))));
    }
}
exports.GroupNavbar = GroupNavbar;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JvdXBOYXZiYXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJHcm91cE5hdmJhci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsNkNBQStCO0FBRS9CLDJEQUFzRDtBQUN0RCw0RUFBdUU7QUFDdkUsMEVBQXFFO0FBRXJFLE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU1QixNQUFhLFdBQVksU0FBUSxLQUFLLENBQUMsU0FBeUI7SUFFNUQsWUFBWSxLQUFhLEVBQUUsT0FBWTtRQUNuQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBRzFCLENBQUM7SUFHTSxNQUFNO1FBRVQsT0FBTyxDQUNIO1lBRUksNkJBQUssS0FBSyxFQUFFLEVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBQyxFQUN4QixTQUFTLEVBQUMsWUFBWTtnQkFFdkIsNkJBQUssS0FBSyxFQUFFLEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBQztvQkFDckIsZ0NBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQU0sQ0FDN0IsQ0FFSjtZQUVOLG9CQUFDLHVCQUFVO2dCQUNQLG9CQUFDLHFCQUFTLElBQUMsRUFBRSxFQUFDLHNCQUFzQixFQUFDLE1BQU0sRUFBRSxFQUFDLFFBQVEsRUFBRSxVQUFVLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLEVBQUMsRUFBRSxJQUFJLEVBQUMsWUFBWSxHQUFFO2dCQUM5RyxvQkFBQyxxQkFBUyxJQUFDLEVBQUUsRUFBQyxxQkFBcUIsRUFBQyxNQUFNLEVBQUUsRUFBQyxRQUFRLEVBQUUsVUFBVSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsT0FBTyxFQUFDLEVBQUUsSUFBSSxFQUFDLFdBQVcsR0FBRSxDQUN4RyxDQUNYLENBRVQsQ0FBQztJQUNOLENBQUM7Q0FFSjtBQWhDRCxrQ0FnQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0dyb3VwTmFtZVN0cn0gZnJvbSBcIi4uLy4uLy4uLy4uL3dlYi9qcy9kYXRhc3RvcmUvc2hhcmluZy9kYi9Hcm91cHNcIjtcbmltcG9ydCB7TG9nZ2VyfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy9sb2dnZXIvTG9nZ2VyXCI7XG5pbXBvcnQge1NpbXBsZVRhYnN9IGZyb20gXCIuLi8uLi8uLi8uLi93ZWIvanMvdWkvc2ltcGxlX3RhYi9TaW1wbGVUYWJzXCI7XG5pbXBvcnQge1NpbXBsZVRhYn0gZnJvbSBcIi4uLy4uLy4uLy4uL3dlYi9qcy91aS9zaW1wbGVfdGFiL1NpbXBsZVRhYlwiO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbmV4cG9ydCBjbGFzcyBHcm91cE5hdmJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcywgY29udGV4dDogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcblxuXG4gICAgfVxuXG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4J319XG4gICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEwMCBtbC0xXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2ZsZXhHcm93OiAxfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+e3RoaXMucHJvcHMuZ3JvdXBOYW1lfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8U2ltcGxlVGFicz5cbiAgICAgICAgICAgICAgICAgICAgPFNpbXBsZVRhYiBpZD1cImdyb3VwLW5hdi1oaWdobGlnaHRzXCIgdGFyZ2V0PXt7cGF0aG5hbWU6IGAvZ3JvdXAvJHt0aGlzLnByb3BzLmdyb3VwTmFtZX1gfX0gdGV4dD1cIkhpZ2hsaWdodHNcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxTaW1wbGVUYWIgaWQ9XCJncm91cC1uYXYtZG9jdW1lbnRzXCIgdGFyZ2V0PXt7cGF0aG5hbWU6IGAvZ3JvdXAvJHt0aGlzLnByb3BzLmdyb3VwTmFtZX0vZG9jc2B9fSB0ZXh0PVwiRG9jdW1lbnRzXCIvPlxuICAgICAgICAgICAgICAgIDwvU2ltcGxlVGFicz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVByb3BzIHtcbiAgICByZWFkb25seSBncm91cE5hbWU6IEdyb3VwTmFtZVN0cjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJU3RhdGUge1xufVxuIl19