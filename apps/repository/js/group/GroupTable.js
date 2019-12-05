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
const GroupDocInfoCard_1 = require("./GroupDocInfoCard");
const LoadingProgress_1 = require("../../../../web/js/ui/LoadingProgress");
const Pagination_1 = require("../../../../web/js/ui/Pagination");
class GroupTable extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const { groupData } = this.props;
        if (!groupData) {
            return React.createElement(LoadingProgress_1.LoadingProgress, null);
        }
        return (React.createElement(Pagination_1.Pagination, { results: groupData.groupDocInfos },
            React.createElement("div", { className: "border-bottom" }, groupData.groupDocInfos.map(groupDocInfo => React.createElement(GroupDocInfoCard_1.GroupDocInfoCard, Object.assign({ persistenceLayerProvider: () => this.props.persistenceLayerManager.get(), key: groupDocInfo.fingerprint }, groupDocInfo))))));
    }
}
exports.GroupTable = GroupTable;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JvdXBUYWJsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkdyb3VwVGFibGUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUUvQix5REFBb0Q7QUFFcEQsMkVBQXNFO0FBQ3RFLGlFQUE0RDtBQUU1RCxNQUFhLFVBQVcsU0FBUSxLQUFLLENBQUMsU0FBeUI7SUFFM0QsWUFBWSxLQUFhLEVBQUUsT0FBWTtRQUNuQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFTSxNQUFNO1FBRVQsTUFBTSxFQUFDLFNBQVMsRUFBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFFL0IsSUFBSSxDQUFFLFNBQVMsRUFBRTtZQUNiLE9BQU8sb0JBQUMsaUNBQWUsT0FBRSxDQUFDO1NBQzdCO1FBRUQsT0FBTyxDQUVILG9CQUFDLHVCQUFVLElBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxhQUFhO1lBQ3hDLDZCQUFLLFNBQVMsRUFBQyxlQUFlLElBRXpCLFNBQVMsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQ3hDLG9CQUFDLG1DQUFnQixrQkFBQyx3QkFBd0IsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLHVCQUF1QixDQUFDLEdBQUcsRUFBRSxFQUN4RSxHQUFHLEVBQUUsWUFBWSxDQUFDLFdBQVcsSUFBTSxZQUFZLEVBQUcsQ0FBQyxDQUN2RSxDQUNHLENBRWhCLENBQUM7SUFDTixDQUFDO0NBRUo7QUE1QkQsZ0NBNEJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtQZXJzaXN0ZW5jZUxheWVyTWFuYWdlcn0gZnJvbSAnLi4vLi4vLi4vLi4vd2ViL2pzL2RhdGFzdG9yZS9QZXJzaXN0ZW5jZUxheWVyTWFuYWdlcic7XG5pbXBvcnQge0dyb3VwRG9jSW5mb0NhcmR9IGZyb20gXCIuL0dyb3VwRG9jSW5mb0NhcmRcIjtcbmltcG9ydCB7R3JvdXBEYXRhfSBmcm9tIFwiLi9Hcm91cERhdGFcIjtcbmltcG9ydCB7TG9hZGluZ1Byb2dyZXNzfSBmcm9tIFwiLi4vLi4vLi4vLi4vd2ViL2pzL3VpL0xvYWRpbmdQcm9ncmVzc1wiO1xuaW1wb3J0IHtQYWdpbmF0aW9ufSBmcm9tIFwiLi4vLi4vLi4vLi4vd2ViL2pzL3VpL1BhZ2luYXRpb25cIjtcblxuZXhwb3J0IGNsYXNzIEdyb3VwVGFibGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJUHJvcHMsIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICBjb25zdCB7Z3JvdXBEYXRhfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgaWYgKCEgZ3JvdXBEYXRhKSB7XG4gICAgICAgICAgICByZXR1cm4gPExvYWRpbmdQcm9ncmVzcy8+O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgPFBhZ2luYXRpb24gcmVzdWx0cz17Z3JvdXBEYXRhLmdyb3VwRG9jSW5mb3N9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLWJvdHRvbVwiPlxuXG4gICAgICAgICAgICAgICAgICAgIHtncm91cERhdGEuZ3JvdXBEb2NJbmZvcy5tYXAoZ3JvdXBEb2NJbmZvID0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JvdXBEb2NJbmZvQ2FyZCBwZXJzaXN0ZW5jZUxheWVyUHJvdmlkZXI9eygpID0+IHRoaXMucHJvcHMucGVyc2lzdGVuY2VMYXllck1hbmFnZXIuZ2V0KCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2dyb3VwRG9jSW5mby5maW5nZXJwcmludH0gey4uLmdyb3VwRG9jSW5mb30vPil9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L1BhZ2luYXRpb24+XG5cbiAgICAgICAgKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUHJvcHMge1xuICAgIHJlYWRvbmx5IHBlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyOiBQZXJzaXN0ZW5jZUxheWVyTWFuYWdlcjtcbiAgICByZWFkb25seSBncm91cERhdGE/OiBHcm91cERhdGE7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVN0YXRlIHtcbn1cbiJdfQ==