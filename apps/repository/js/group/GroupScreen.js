"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const FixedNav_1 = require("../FixedNav");
const RepoHeader_1 = require("../repo_header/RepoHeader");
const Groups_1 = require("../../../../web/js/datastore/sharing/db/Groups");
const Logger_1 = require("polar-shared/src/logger/Logger");
const GroupTable_1 = require("./GroupTable");
const GroupDocInfos_1 = require("../../../../web/js/datastore/sharing/GroupDocInfos");
const Toaster_1 = require("../../../../web/js/ui/toaster/Toaster");
const VerticalAlign_1 = require("../../../../web/js/ui/util/VerticalAlign");
const UserGroups_1 = require("../../../../web/js/datastore/sharing/db/UserGroups");
const GroupDeleteButton_1 = require("./GroupDeleteButton");
const GroupNavbar_1 = require("./GroupNavbar");
const GroupURLs_1 = require("polar-webapp-links/src/groups/GroupURLs");
const log = Logger_1.Logger.create();
class GroupScreen extends React.Component {
    constructor(props, context) {
        super(props, context);
        const groupURL = GroupURLs_1.GroupURLs.parse(document.location.href);
        this.state = {
            name: groupURL.name
        };
    }
    componentWillMount() {
        const doHandle = () => __awaiter(this, void 0, void 0, function* () {
            const groupName = this.state.name;
            if (!groupName) {
                Toaster_1.Toaster.error("No group name");
                return;
            }
            const group = yield Groups_1.Groups.getByName(groupName);
            if (!group) {
                Toaster_1.Toaster.error("No group named: " + groupName);
                return;
            }
            const groupDocInfos = yield GroupDocInfos_1.GroupDocInfos.list(group.id);
            const userGroup = yield UserGroups_1.UserGroups.get();
            this.setState(Object.assign(Object.assign({}, this.state), { groupData: {
                    id: group.id,
                    group,
                    groupDocInfos,
                    userGroup
                } }));
        });
        doHandle().catch(err => log.error("Unable to get groups: ", err));
    }
    render() {
        return (React.createElement(FixedNav_1.FixedNav, { id: "doc-repository" },
            React.createElement("header", null,
                React.createElement(RepoHeader_1.RepoHeader, { persistenceLayerManager: this.props.persistenceLayerManager })),
            React.createElement(FixedNav_1.FixedNavBody, null,
                React.createElement("div", { className: "container" },
                    React.createElement("div", { className: "row" },
                        React.createElement("div", { className: "col" },
                            React.createElement("div", { className: "mt-2 p-2 border-top border-left border-right bg-grey000" },
                                React.createElement("div", null,
                                    React.createElement(GroupNavbar_1.GroupNavbar, { groupName: this.state.name },
                                        React.createElement(VerticalAlign_1.VerticalAlign, null,
                                            React.createElement(GroupDeleteButton_1.GroupDeleteButton, { groupData: this.state.groupData }))))),
                            React.createElement(GroupTable_1.GroupTable, { persistenceLayerManager: this.props.persistenceLayerManager, groupData: this.state.groupData })))))));
    }
}
exports.GroupScreen = GroupScreen;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JvdXBTY3JlZW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJHcm91cFNjcmVlbi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQStCO0FBQy9CLDBDQUFtRDtBQUNuRCwwREFBcUQ7QUFFckQsMkVBQXNFO0FBQ3RFLDJEQUFzRDtBQUN0RCw2Q0FBd0M7QUFDeEMsc0ZBQWlGO0FBQ2pGLG1FQUE4RDtBQUM5RCw0RUFBdUU7QUFFdkUsbUZBQThFO0FBQzlFLDJEQUFzRDtBQUN0RCwrQ0FBMEM7QUFDMUMsdUVBQWtFO0FBRWxFLE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU1QixNQUFhLFdBQVksU0FBUSxLQUFLLENBQUMsU0FBeUI7SUFFNUQsWUFBWSxLQUFhLEVBQUUsT0FBWTtRQUNuQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRXRCLE1BQU0sUUFBUSxHQUFHLHFCQUFTLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFekQsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNULElBQUksRUFBRSxRQUFRLENBQUMsSUFBSTtTQUN0QixDQUFDO0lBRU4sQ0FBQztJQUVNLGtCQUFrQjtRQUVyQixNQUFNLFFBQVEsR0FBRyxHQUF3QixFQUFFO1lBRXZDLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1lBRWxDLElBQUksQ0FBRSxTQUFTLEVBQUU7Z0JBQ2IsaUJBQU8sQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUM7Z0JBQy9CLE9BQU87YUFDVjtZQUVELE1BQU0sS0FBSyxHQUFHLE1BQU0sZUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUVoRCxJQUFJLENBQUUsS0FBSyxFQUFFO2dCQUNULGlCQUFPLENBQUMsS0FBSyxDQUFDLGtCQUFrQixHQUFHLFNBQVMsQ0FBQyxDQUFDO2dCQUM5QyxPQUFPO2FBQ1Y7WUFLRCxNQUFNLGFBQWEsR0FBRyxNQUFNLDZCQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUV6RCxNQUFNLFNBQVMsR0FBRyxNQUFNLHVCQUFVLENBQUMsR0FBRyxFQUFFLENBQUM7WUFFekMsSUFBSSxDQUFDLFFBQVEsaUNBQ04sSUFBSSxDQUFDLEtBQUssS0FDYixTQUFTLEVBQUU7b0JBQ1AsRUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO29CQUNaLEtBQUs7b0JBQ0wsYUFBYTtvQkFDYixTQUFTO2lCQUNaLElBQUUsQ0FBQztRQUVaLENBQUMsQ0FBQSxDQUFDO1FBRUYsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBRXRFLENBQUM7SUFFTSxNQUFNO1FBRVQsT0FBTyxDQUVILG9CQUFDLG1CQUFRLElBQUMsRUFBRSxFQUFDLGdCQUFnQjtZQUV6QjtnQkFFSSxvQkFBQyx1QkFBVSxJQUFDLHVCQUF1QixFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsdUJBQXVCLEdBQUcsQ0FFckU7WUFFVCxvQkFBQyx1QkFBWTtnQkFFVCw2QkFBSyxTQUFTLEVBQUMsV0FBVztvQkFDdEIsNkJBQUssU0FBUyxFQUFDLEtBQUs7d0JBRWhCLDZCQUFLLFNBQVMsRUFBQyxLQUFLOzRCQUVoQiw2QkFBSyxTQUFTLEVBQUMseURBQXlEO2dDQUVwRTtvQ0FDSSxvQkFBQyx5QkFBVyxJQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUk7d0NBRW5DLG9CQUFDLDZCQUFhOzRDQUNWLG9CQUFDLHFDQUFpQixJQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxDQUN6QyxDQUVOLENBQ1osQ0FFSjs0QkFFTixvQkFBQyx1QkFBVSxJQUFDLHVCQUF1QixFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsdUJBQXVCLEVBQzNELFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxDQUU1QyxDQUVKLENBQ0osQ0FFSyxDQUVSLENBRWQsQ0FBQztJQUNOLENBQUM7Q0FFSjtBQXJHRCxrQ0FxR0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0ZpeGVkTmF2LCBGaXhlZE5hdkJvZHl9IGZyb20gJy4uL0ZpeGVkTmF2JztcbmltcG9ydCB7UmVwb0hlYWRlcn0gZnJvbSAnLi4vcmVwb19oZWFkZXIvUmVwb0hlYWRlcic7XG5pbXBvcnQge1BlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyfSBmcm9tICcuLi8uLi8uLi8uLi93ZWIvanMvZGF0YXN0b3JlL1BlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyJztcbmltcG9ydCB7R3JvdXBzfSBmcm9tIFwiLi4vLi4vLi4vLi4vd2ViL2pzL2RhdGFzdG9yZS9zaGFyaW5nL2RiL0dyb3Vwc1wiO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL2xvZ2dlci9Mb2dnZXJcIjtcbmltcG9ydCB7R3JvdXBUYWJsZX0gZnJvbSBcIi4vR3JvdXBUYWJsZVwiO1xuaW1wb3J0IHtHcm91cERvY0luZm9zfSBmcm9tIFwiLi4vLi4vLi4vLi4vd2ViL2pzL2RhdGFzdG9yZS9zaGFyaW5nL0dyb3VwRG9jSW5mb3NcIjtcbmltcG9ydCB7VG9hc3Rlcn0gZnJvbSBcIi4uLy4uLy4uLy4uL3dlYi9qcy91aS90b2FzdGVyL1RvYXN0ZXJcIjtcbmltcG9ydCB7VmVydGljYWxBbGlnbn0gZnJvbSBcIi4uLy4uLy4uLy4uL3dlYi9qcy91aS91dGlsL1ZlcnRpY2FsQWxpZ25cIjtcbmltcG9ydCB7R3JvdXBEYXRhfSBmcm9tIFwiLi9Hcm91cERhdGFcIjtcbmltcG9ydCB7VXNlckdyb3Vwc30gZnJvbSBcIi4uLy4uLy4uLy4uL3dlYi9qcy9kYXRhc3RvcmUvc2hhcmluZy9kYi9Vc2VyR3JvdXBzXCI7XG5pbXBvcnQge0dyb3VwRGVsZXRlQnV0dG9ufSBmcm9tICcuL0dyb3VwRGVsZXRlQnV0dG9uJztcbmltcG9ydCB7R3JvdXBOYXZiYXJ9IGZyb20gXCIuL0dyb3VwTmF2YmFyXCI7XG5pbXBvcnQge0dyb3VwVVJMc30gZnJvbSBcInBvbGFyLXdlYmFwcC1saW5rcy9zcmMvZ3JvdXBzL0dyb3VwVVJMc1wiO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbmV4cG9ydCBjbGFzcyBHcm91cFNjcmVlbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcywgY29udGV4dDogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcblxuICAgICAgICBjb25zdCBncm91cFVSTCA9IEdyb3VwVVJMcy5wYXJzZShkb2N1bWVudC5sb2NhdGlvbi5ocmVmKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbmFtZTogZ3JvdXBVUkwubmFtZVxuICAgICAgICB9O1xuXG4gICAgfVxuXG4gICAgcHVibGljIGNvbXBvbmVudFdpbGxNb3VudCgpOiB2b2lkIHtcblxuICAgICAgICBjb25zdCBkb0hhbmRsZSA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblxuICAgICAgICAgICAgY29uc3QgZ3JvdXBOYW1lID0gdGhpcy5zdGF0ZS5uYW1lO1xuXG4gICAgICAgICAgICBpZiAoISBncm91cE5hbWUpIHtcbiAgICAgICAgICAgICAgICBUb2FzdGVyLmVycm9yKFwiTm8gZ3JvdXAgbmFtZVwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGdyb3VwID0gYXdhaXQgR3JvdXBzLmdldEJ5TmFtZShncm91cE5hbWUpO1xuXG4gICAgICAgICAgICBpZiAoISBncm91cCkge1xuICAgICAgICAgICAgICAgIFRvYXN0ZXIuZXJyb3IoXCJObyBncm91cCBuYW1lZDogXCIgKyBncm91cE5hbWUpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gVE9ETyBJIGRvbnQnIGxpa2UgaG93IHRoZXNlIGFyZSBhbGwgZGVwZW5kZW50IG9uIGVhY2ggb3RoZXJcbiAgICAgICAgICAgIC8vIGFzIHRoZXJlIGlzIGV4Y2VzcyBsYXRlbmN5IGhlcmUuXG5cbiAgICAgICAgICAgIGNvbnN0IGdyb3VwRG9jSW5mb3MgPSBhd2FpdCBHcm91cERvY0luZm9zLmxpc3QoZ3JvdXAuaWQpO1xuXG4gICAgICAgICAgICBjb25zdCB1c2VyR3JvdXAgPSBhd2FpdCBVc2VyR3JvdXBzLmdldCgpO1xuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLFxuICAgICAgICAgICAgICAgIGdyb3VwRGF0YToge1xuICAgICAgICAgICAgICAgICAgICBpZDogZ3JvdXAuaWQsXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwLFxuICAgICAgICAgICAgICAgICAgICBncm91cERvY0luZm9zLFxuICAgICAgICAgICAgICAgICAgICB1c2VyR3JvdXBcbiAgICAgICAgICAgICAgICB9fSk7XG5cbiAgICAgICAgfTtcblxuICAgICAgICBkb0hhbmRsZSgpLmNhdGNoKGVyciA9PiBsb2cuZXJyb3IoXCJVbmFibGUgdG8gZ2V0IGdyb3VwczogXCIsIGVycikpO1xuXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICA8Rml4ZWROYXYgaWQ9XCJkb2MtcmVwb3NpdG9yeVwiPlxuXG4gICAgICAgICAgICAgICAgPGhlYWRlcj5cblxuICAgICAgICAgICAgICAgICAgICA8UmVwb0hlYWRlciBwZXJzaXN0ZW5jZUxheWVyTWFuYWdlcj17dGhpcy5wcm9wcy5wZXJzaXN0ZW5jZUxheWVyTWFuYWdlcn0vPlxuXG4gICAgICAgICAgICAgICAgPC9oZWFkZXI+XG5cbiAgICAgICAgICAgICAgICA8Rml4ZWROYXZCb2R5PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTIgcC0yIGJvcmRlci10b3AgYm9yZGVyLWxlZnQgYm9yZGVyLXJpZ2h0IGJnLWdyZXkwMDBcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JvdXBOYXZiYXIgZ3JvdXBOYW1lPXt0aGlzLnN0YXRlLm5hbWV9PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWZXJ0aWNhbEFsaWduPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyb3VwRGVsZXRlQnV0dG9uIGdyb3VwRGF0YT17dGhpcy5zdGF0ZS5ncm91cERhdGF9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WZXJ0aWNhbEFsaWduPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Hcm91cE5hdmJhcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcm91cFRhYmxlIHBlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyPXt0aGlzLnByb3BzLnBlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncm91cERhdGE9e3RoaXMuc3RhdGUuZ3JvdXBEYXRhfS8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPC9GaXhlZE5hdkJvZHk+XG5cbiAgICAgICAgICAgIDwvRml4ZWROYXY+XG5cbiAgICAgICAgKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUHJvcHMge1xuICAgIHJlYWRvbmx5IHBlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyOiBQZXJzaXN0ZW5jZUxheWVyTWFuYWdlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJU3RhdGUge1xuICAgIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbiAgICByZWFkb25seSBncm91cERhdGE/OiBHcm91cERhdGE7XG59XG4iXX0=