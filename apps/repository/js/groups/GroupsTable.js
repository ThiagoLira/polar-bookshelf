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
const GroupCard_1 = require("./GroupCard");
const LoadingProgress_1 = require("../../../../web/js/ui/LoadingProgress");
class GroupsTable extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const { groups } = this.props;
        if (!groups) {
            return React.createElement(LoadingProgress_1.LoadingProgress, null);
        }
        return (React.createElement("div", { className: "border-bottom" }, groups.map(group => React.createElement(GroupCard_1.GroupCard, { key: group.id, group: group }))));
    }
}
exports.GroupsTable = GroupsTable;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JvdXBzVGFibGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJHcm91cHNUYWJsZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsNkNBQStCO0FBRy9CLDJDQUFzQztBQUN0QywyRUFBc0U7QUFFdEUsTUFBYSxXQUFZLFNBQVEsS0FBSyxDQUFDLFNBQXlCO0lBRTVELFlBQVksS0FBYSxFQUFFLE9BQVk7UUFDbkMsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRU0sTUFBTTtRQUVULE1BQU0sRUFBQyxNQUFNLEVBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBRTVCLElBQUksQ0FBRSxNQUFNLEVBQUU7WUFDVixPQUFPLG9CQUFDLGlDQUFlLE9BQUUsQ0FBQztTQUM3QjtRQUVELE9BQU8sQ0FFSCw2QkFBSyxTQUFTLEVBQUMsZUFBZSxJQUN6QixNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQ2hCLG9CQUFDLHFCQUFTLElBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssR0FBRyxDQUFDLENBQzVDLENBRVQsQ0FBQztJQUNOLENBQUM7Q0FFSjtBQXhCRCxrQ0F3QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1BlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyfSBmcm9tICcuLi8uLi8uLi8uLi93ZWIvanMvZGF0YXN0b3JlL1BlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyJztcbmltcG9ydCB7R3JvdXB9IGZyb20gXCIuLi8uLi8uLi8uLi93ZWIvanMvZGF0YXN0b3JlL3NoYXJpbmcvZGIvR3JvdXBzXCI7XG5pbXBvcnQge0dyb3VwQ2FyZH0gZnJvbSBcIi4vR3JvdXBDYXJkXCI7XG5pbXBvcnQge0xvYWRpbmdQcm9ncmVzc30gZnJvbSBcIi4uLy4uLy4uLy4uL3dlYi9qcy91aS9Mb2FkaW5nUHJvZ3Jlc3NcIjtcblxuZXhwb3J0IGNsYXNzIEdyb3Vwc1RhYmxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzLCBjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgY29uc3Qge2dyb3Vwc30gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGlmICghIGdyb3Vwcykge1xuICAgICAgICAgICAgcmV0dXJuIDxMb2FkaW5nUHJvZ3Jlc3MvPjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLWJvdHRvbVwiPlxuICAgICAgICAgICAgICAgIHtncm91cHMubWFwKGdyb3VwID0+XG4gICAgICAgICAgICAgICAgICAgIDxHcm91cENhcmQga2V5PXtncm91cC5pZH0gZ3JvdXA9e2dyb3VwfS8+KX1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVByb3BzIHtcbiAgICByZWFkb25seSBwZXJzaXN0ZW5jZUxheWVyTWFuYWdlcjogUGVyc2lzdGVuY2VMYXllck1hbmFnZXI7XG4gICAgcmVhZG9ubHkgZ3JvdXBzPzogUmVhZG9ubHlBcnJheTxHcm91cD47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVN0YXRlIHtcbn1cbiJdfQ==