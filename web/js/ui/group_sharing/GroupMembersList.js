"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const GroupMemberEntry_1 = require("./GroupMemberEntry");
const NullCollapse_1 = require("../null_collapse/NullCollapse");
class GroupMembersList extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const members = this.props.members || [];
        return react_1.default.createElement("div", null,
            react_1.default.createElement(NullCollapse_1.NullCollapse, { open: members.length > 0 },
                react_1.default.createElement("div", { className: "font-weight-bold mt-1 mb-1" }, "Currently shared with:")),
            members.map(item => react_1.default.createElement(GroupMemberEntry_1.GroupMemberEntry, { key: item.id, member: item, onDelete: this.props.onDelete })));
    }
}
exports.GroupMembersList = GroupMembersList;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JvdXBNZW1iZXJzTGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkdyb3VwTWVtYmVyc0xpc3QudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsa0RBQTBCO0FBQzFCLHlEQUFvRDtBQUVwRCxnRUFBMkQ7QUFLM0QsTUFBYSxnQkFBaUIsU0FBUSxlQUFLLENBQUMsU0FBeUI7SUFFakUsWUFBWSxLQUFhO1FBQ3JCLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUViLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFDWixDQUFDO0lBRU4sQ0FBQztJQUVNLE1BQU07UUFFVCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUM7UUFFekMsT0FBTztZQUVILDhCQUFDLDJCQUFZLElBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQztnQkFFbEMsdUNBQUssU0FBUyxFQUFDLDRCQUE0Qiw2QkFFckMsQ0FFSztZQUVkLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FDaEIsOEJBQUMsbUNBQWdCLElBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQ1osTUFBTSxFQUFFLElBQUksRUFDWixRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUNyRCxDQUFDO0lBRVgsQ0FBQztDQUdKO0FBakNELDRDQWlDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0dyb3VwTWVtYmVyRW50cnl9IGZyb20gJy4vR3JvdXBNZW1iZXJFbnRyeSc7XG5pbXBvcnQge01lbWJlclJlY29yZH0gZnJvbSAnLi9Hcm91cFNoYXJpbmdSZWNvcmRzJztcbmltcG9ydCB7TnVsbENvbGxhcHNlfSBmcm9tICcuLi9udWxsX2NvbGxhcHNlL051bGxDb2xsYXBzZSc7XG5cbi8qKlxuICogQWxsb3cgdGhlIHVzZXIgdG8gc2VsZWN0IGZyb20gb25lIG9yIG1vcmUgb2YgdGhlaXIgY29udGFjdHMuXG4gKi9cbmV4cG9ydCBjbGFzcyBHcm91cE1lbWJlcnNMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICB9O1xuXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICBjb25zdCBtZW1iZXJzID0gdGhpcy5wcm9wcy5tZW1iZXJzIHx8IFtdO1xuXG4gICAgICAgIHJldHVybiA8ZGl2PlxuXG4gICAgICAgICAgICA8TnVsbENvbGxhcHNlIG9wZW49e21lbWJlcnMubGVuZ3RoID4gMH0+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGQgbXQtMSBtYi0xXCI+XG4gICAgICAgICAgICAgICAgICAgIEN1cnJlbnRseSBzaGFyZWQgd2l0aDpcbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9OdWxsQ29sbGFwc2U+XG5cbiAgICAgICAgICAgIHttZW1iZXJzLm1hcChpdGVtID0+XG4gICAgICAgICAgICAgICAgPEdyb3VwTWVtYmVyRW50cnkga2V5PXtpdGVtLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lbWJlcj17aXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRlbGV0ZT17dGhpcy5wcm9wcy5vbkRlbGV0ZX0vPil9XG4gICAgICAgIDwvZGl2PjtcblxuICAgIH1cblxuXG59XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICAgIHJlYWRvbmx5IG9uRGVsZXRlOiAobWVtYmVyOiBNZW1iZXJSZWNvcmQpID0+IHZvaWQ7XG4gICAgcmVhZG9ubHkgbWVtYmVycz86IFJlYWRvbmx5QXJyYXk8TWVtYmVyUmVjb3JkPjtcbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG59XG4iXX0=