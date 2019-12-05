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
class DocSidebarButton extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            open: false,
        };
    }
    render() {
        const color = this.props.selected ? 'primary' : 'secondary';
        return (React.createElement(reactstrap_1.Button, { size: "sm", color: color, onClick: () => this.props.onChange(!this.props.selected) },
            React.createElement("i", { className: "fas fa-info-circle" })));
    }
}
exports.DocSidebarButton = DocSidebarButton;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jU2lkZWJhckJ1dHRvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkRvY1NpZGViYXJCdXR0b24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUMvQiwyQ0FBa0M7QUFLbEMsTUFBYSxnQkFBaUIsU0FBUSxLQUFLLENBQUMsU0FBeUI7SUFFakUsWUFBWSxLQUFhLEVBQUUsT0FBWTtRQUNuQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRXRCLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDVCxJQUFJLEVBQUUsS0FBSztTQUNkLENBQUM7SUFFTixDQUFDO0lBRU0sTUFBTTtRQUVULE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQztRQUU1RCxPQUFPLENBRUgsb0JBQUMsbUJBQU0sSUFBQyxJQUFJLEVBQUMsSUFBSSxFQUNULEtBQUssRUFBRSxLQUFLLEVBQ1osT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7WUFFN0QsMkJBQUcsU0FBUyxFQUFDLG9CQUFvQixHQUFFLENBRTlCLENBRVosQ0FBQztJQUVOLENBQUM7Q0FFSjtBQTdCRCw0Q0E2QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0J1dHRvbn0gZnJvbSBcInJlYWN0c3RyYXBcIjtcblxuLyoqXG4gKiBCdXR0b24gdG8gZW5hYmxlIHRoZSByaWdodCBzaWRlYmFyXG4gKi9cbmV4cG9ydCBjbGFzcyBEb2NTaWRlYmFyQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzLCBjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBvcGVuOiBmYWxzZSxcbiAgICAgICAgfTtcblxuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgY29uc3QgY29sb3IgPSB0aGlzLnByb3BzLnNlbGVjdGVkID8gJ3ByaW1hcnknIDogJ3NlY29uZGFyeSc7XG5cbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgPEJ1dHRvbiBzaXplPVwic21cIlxuICAgICAgICAgICAgICAgICAgICBjb2xvcj17Y29sb3J9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMub25DaGFuZ2UoISB0aGlzLnByb3BzLnNlbGVjdGVkKX0+XG5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtaW5mby1jaXJjbGVcIi8+XG5cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuXG4gICAgICAgICk7XG5cbiAgICB9XG5cbn1cblxuaW50ZXJmYWNlIElQcm9wcyB7XG5cbiAgICByZWFkb25seSBzZWxlY3RlZDogYm9vbGVhbjtcbiAgICByZWFkb25seSBvbkNoYW5nZTogKHNlbGVjdGVkOiBib29sZWFuKSA9PiB2b2lkO1xuXG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xuXG59XG4iXX0=