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
const Button_1 = __importDefault(require("reactstrap/lib/Button"));
class GroupHit extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (React.createElement("tr", { className: "", style: { display: 'table-row' } },
            React.createElement("td", null, this.props.name),
            React.createElement("td", null, this.props.description),
            React.createElement("td", { className: "text-right" }, this.props.nrMembers),
            React.createElement("td", null,
                React.createElement(Button_1.default, { color: "primary", size: "sm", className: "ml-1", onClick: () => this.props.onAdd() }, "Add"))));
    }
}
exports.GroupHit = GroupHit;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JvdXBIaXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJHcm91cEhpdC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQStCO0FBQy9CLG1FQUEyQztBQUUzQyxNQUFhLFFBQVMsU0FBUSxLQUFLLENBQUMsYUFBNkI7SUFFN0QsWUFBWSxLQUFhLEVBQUUsT0FBWTtRQUNuQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFTSxNQUFNO1FBRVQsT0FBTyxDQUVILDRCQUFJLFNBQVMsRUFBQyxFQUFFLEVBQUMsS0FBSyxFQUFFLEVBQUMsT0FBTyxFQUFFLFdBQVcsRUFBQztZQUUxQyxnQ0FDSyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDZjtZQUVMLGdDQUNLLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUN0QjtZQUVMLDRCQUFJLFNBQVMsRUFBQyxZQUFZLElBQ3JCLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUNwQjtZQUVMO2dCQUVJLG9CQUFDLGdCQUFNLElBQUMsS0FBSyxFQUFDLFNBQVMsRUFDZixJQUFJLEVBQUMsSUFBSSxFQUNULFNBQVMsRUFBQyxNQUFNLEVBQ2hCLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxVQUVoQyxDQUVSLENBRUosQ0FFUixDQUFDO0lBQ04sQ0FBQztDQUVKO0FBeENELDRCQXdDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCdXR0b24gZnJvbSBcInJlYWN0c3RyYXAvbGliL0J1dHRvblwiO1xuXG5leHBvcnQgY2xhc3MgR3JvdXBIaXQgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzLCBjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cIlwiIHN0eWxlPXt7ZGlzcGxheTogJ3RhYmxlLXJvdyd9fT5cblxuICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMubmFtZX1cbiAgICAgICAgICAgICAgICA8L3RkPlxuXG4gICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICA8L3RkPlxuXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMubnJNZW1iZXJzfVxuICAgICAgICAgICAgICAgIDwvdGQ+XG5cbiAgICAgICAgICAgICAgICA8dGQ+XG5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5vbkFkZCgpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIEFkZFxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cblxuICAgICAgICAgICAgICAgIDwvdGQ+XG5cbiAgICAgICAgICAgIDwvdHI+XG5cbiAgICAgICAgKTtcbiAgICB9XG5cbn1cblxuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG4gICAgcmVhZG9ubHkgZGVzY3JpcHRpb246IHN0cmluZztcbiAgICByZWFkb25seSBuck1lbWJlcnM6IG51bWJlcjtcbiAgICByZWFkb25seSBvbkFkZDogKCkgPT4gdm9pZDtcbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG5cbn1cbiJdfQ==