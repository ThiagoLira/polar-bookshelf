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
const Groups_1 = require("../../../../../web/js/datastore/sharing/db/Groups");
const GroupDocAnnotations_1 = require("../../../../../web/js/datastore/sharing/db/doc_annotations/GroupDocAnnotations");
const Logger_1 = require("polar-shared/src/logger/Logger");
const Toaster_1 = require("../../../../../web/js/ui/toaster/Toaster");
const FixedNav_1 = require("../../FixedNav");
const RepoHeader_1 = require("../../repo_header/RepoHeader");
const HighlightsTable_1 = require("./HighlightsTable");
const ProfileJoins_1 = require("../../../../../web/js/datastore/sharing/db/ProfileJoins");
const GroupNavbar_1 = require("../GroupNavbar");
const GroupURLs_1 = require("polar-webapp-links/src/groups/GroupURLs");
const log = Logger_1.Logger.create();
class HighlightsScreen extends React.Component {
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
            console.time('Groups.getByName');
            const group = yield Groups_1.Groups.getByName(groupName);
            console.timeEnd('Groups.getByName');
            if (!group) {
                Toaster_1.Toaster.error("No group named: " + groupName);
                return;
            }
            console.time('group-doc-annotations-list');
            const docAnnotations = yield GroupDocAnnotations_1.GroupDocAnnotations.list(group.id);
            console.timeEnd('group-doc-annotations-list');
            console.time('docAnnotationProfileRecords');
            const docAnnotationProfileRecords = yield ProfileJoins_1.ProfileJoins.join(docAnnotations);
            console.timeEnd('docAnnotationProfileRecords');
            this.setState(Object.assign(Object.assign({}, this.state), { groupHighlightsData: {
                    id: group.id,
                    group,
                    docAnnotationProfileRecords,
                } }));
        });
        doHandle().catch(err => log.error("Unable to get groups: ", err));
    }
    render() {
        return (React.createElement(FixedNav_1.FixedNav, { id: "doc-repository" },
            React.createElement("header", null,
                React.createElement(RepoHeader_1.RepoHeader, { persistenceLayerManager: this.props.persistenceLayerManager })),
            React.createElement(FixedNav_1.FixedNavBody, null,
                React.createElement("div", { className: "container mb-1" },
                    React.createElement("div", { className: "row" },
                        React.createElement("div", { className: "col" },
                            React.createElement("div", { className: "mt-2 p-2 border-top border-left border-right bg-grey000" },
                                React.createElement("div", null,
                                    React.createElement(GroupNavbar_1.GroupNavbar, { groupName: this.state.name }))),
                            React.createElement(HighlightsTable_1.HighlightsTable, { persistenceLayerManager: this.props.persistenceLayerManager, groupHighlightsData: this.state.groupHighlightsData })))))));
    }
}
exports.HighlightsScreen = HighlightsScreen;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGlnaGxpZ2h0c1NjcmVlbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkhpZ2hsaWdodHNTY3JlZW4udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUMvQiw4RUFBdUY7QUFDdkYsd0hBQW1IO0FBRW5ILDJEQUFzRDtBQUN0RCxzRUFBaUU7QUFDakUsNkNBQXNEO0FBQ3RELDZEQUF3RDtBQUV4RCx1REFBa0Q7QUFDbEQsMEZBQXFGO0FBQ3JGLGdEQUEyQztBQUMzQyx1RUFBa0U7QUFFbEUsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLE1BQWEsZ0JBQWlCLFNBQVEsS0FBSyxDQUFDLFNBQXlCO0lBRWpFLFlBQVksS0FBYSxFQUFFLE9BQVk7UUFDbkMsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztRQUV0QixNQUFNLFFBQVEsR0FBRyxxQkFBUyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXpELElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDVCxJQUFJLEVBQUUsUUFBUSxDQUFDLElBQUk7U0FDdEIsQ0FBQztJQUVOLENBQUM7SUFFTSxrQkFBa0I7UUFFckIsTUFBTSxRQUFRLEdBQUcsR0FBd0IsRUFBRTtZQUV2QyxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztZQUVsQyxPQUFPLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDakMsTUFBTSxLQUFLLEdBQUcsTUFBTSxlQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ2hELE9BQU8sQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUVwQyxJQUFJLENBQUUsS0FBSyxFQUFFO2dCQUNULGlCQUFPLENBQUMsS0FBSyxDQUFDLGtCQUFrQixHQUFHLFNBQVMsQ0FBQyxDQUFDO2dCQUM5QyxPQUFPO2FBQ1Y7WUFFRCxPQUFPLENBQUMsSUFBSSxDQUFDLDRCQUE0QixDQUFDLENBQUM7WUFDM0MsTUFBTSxjQUFjLEdBQUcsTUFBTSx5Q0FBbUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2hFLE9BQU8sQ0FBQyxPQUFPLENBQUMsNEJBQTRCLENBQUMsQ0FBQztZQUU5QyxPQUFPLENBQUMsSUFBSSxDQUFDLDZCQUE2QixDQUFDLENBQUM7WUFDNUMsTUFBTSwyQkFBMkIsR0FBRyxNQUFNLDJCQUFZLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQzVFLE9BQU8sQ0FBQyxPQUFPLENBQUMsNkJBQTZCLENBQUMsQ0FBQztZQUUvQyxJQUFJLENBQUMsUUFBUSxpQ0FDTixJQUFJLENBQUMsS0FBSyxLQUNiLG1CQUFtQixFQUFFO29CQUNqQixFQUFFLEVBQUUsS0FBSyxDQUFDLEVBQUU7b0JBQ1osS0FBSztvQkFDTCwyQkFBMkI7aUJBQzlCLElBQUUsQ0FBQztRQUVaLENBQUMsQ0FBQSxDQUFDO1FBRUYsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBRXRFLENBQUM7SUFFTSxNQUFNO1FBRVQsT0FBTyxDQUVILG9CQUFDLG1CQUFRLElBQUMsRUFBRSxFQUFDLGdCQUFnQjtZQUV6QjtnQkFFSSxvQkFBQyx1QkFBVSxJQUFDLHVCQUF1QixFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsdUJBQXVCLEdBQUcsQ0FFckU7WUFFVCxvQkFBQyx1QkFBWTtnQkFFVCw2QkFBSyxTQUFTLEVBQUMsZ0JBQWdCO29CQUMzQiw2QkFBSyxTQUFTLEVBQUMsS0FBSzt3QkFFaEIsNkJBQUssU0FBUyxFQUFDLEtBQUs7NEJBRWhCLDZCQUFLLFNBQVMsRUFBQyx5REFBeUQ7Z0NBRXBFO29DQUNJLG9CQUFDLHlCQUFXLElBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLENBQ3hDLENBRUo7NEJBRU4sb0JBQUMsaUNBQWUsSUFBQyx1QkFBdUIsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLHVCQUF1QixFQUMzRCxtQkFBbUIsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLG1CQUFtQixHQUFHLENBRXJFLENBRUosQ0FDSixDQUVLLENBRVIsQ0FFZCxDQUFDO0lBQ04sQ0FBQztDQUVKO0FBNUZELDRDQTRGQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7R3JvdXBOYW1lU3RyLCBHcm91cHN9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi93ZWIvanMvZGF0YXN0b3JlL3NoYXJpbmcvZGIvR3JvdXBzXCI7XG5pbXBvcnQge0dyb3VwRG9jQW5ub3RhdGlvbnN9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi93ZWIvanMvZGF0YXN0b3JlL3NoYXJpbmcvZGIvZG9jX2Fubm90YXRpb25zL0dyb3VwRG9jQW5ub3RhdGlvbnNcIjtcbmltcG9ydCB7R3JvdXBIaWdobGlnaHRzRGF0YX0gZnJvbSBcIi4vR3JvdXBIaWdobGlnaHRzRGF0YVwiO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL2xvZ2dlci9Mb2dnZXJcIjtcbmltcG9ydCB7VG9hc3Rlcn0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL3dlYi9qcy91aS90b2FzdGVyL1RvYXN0ZXJcIjtcbmltcG9ydCB7Rml4ZWROYXYsIEZpeGVkTmF2Qm9keX0gZnJvbSBcIi4uLy4uL0ZpeGVkTmF2XCI7XG5pbXBvcnQge1JlcG9IZWFkZXJ9IGZyb20gXCIuLi8uLi9yZXBvX2hlYWRlci9SZXBvSGVhZGVyXCI7XG5pbXBvcnQge1BlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vd2ViL2pzL2RhdGFzdG9yZS9QZXJzaXN0ZW5jZUxheWVyTWFuYWdlclwiO1xuaW1wb3J0IHtIaWdobGlnaHRzVGFibGV9IGZyb20gXCIuL0hpZ2hsaWdodHNUYWJsZVwiO1xuaW1wb3J0IHtQcm9maWxlSm9pbnN9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi93ZWIvanMvZGF0YXN0b3JlL3NoYXJpbmcvZGIvUHJvZmlsZUpvaW5zXCI7XG5pbXBvcnQge0dyb3VwTmF2YmFyfSBmcm9tIFwiLi4vR3JvdXBOYXZiYXJcIjtcbmltcG9ydCB7R3JvdXBVUkxzfSBmcm9tIFwicG9sYXItd2ViYXBwLWxpbmtzL3NyYy9ncm91cHMvR3JvdXBVUkxzXCI7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuZXhwb3J0IGNsYXNzIEhpZ2hsaWdodHNTY3JlZW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJUHJvcHMsIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG5cbiAgICAgICAgY29uc3QgZ3JvdXBVUkwgPSBHcm91cFVSTHMucGFyc2UoZG9jdW1lbnQubG9jYXRpb24uaHJlZik7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIG5hbWU6IGdyb3VwVVJMLm5hbWVcbiAgICAgICAgfTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBjb21wb25lbnRXaWxsTW91bnQoKTogdm9pZCB7XG5cbiAgICAgICAgY29uc3QgZG9IYW5kbGUgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IGdyb3VwTmFtZSA9IHRoaXMuc3RhdGUubmFtZTtcblxuICAgICAgICAgICAgY29uc29sZS50aW1lKCdHcm91cHMuZ2V0QnlOYW1lJyk7XG4gICAgICAgICAgICBjb25zdCBncm91cCA9IGF3YWl0IEdyb3Vwcy5nZXRCeU5hbWUoZ3JvdXBOYW1lKTtcbiAgICAgICAgICAgIGNvbnNvbGUudGltZUVuZCgnR3JvdXBzLmdldEJ5TmFtZScpO1xuXG4gICAgICAgICAgICBpZiAoISBncm91cCkge1xuICAgICAgICAgICAgICAgIFRvYXN0ZXIuZXJyb3IoXCJObyBncm91cCBuYW1lZDogXCIgKyBncm91cE5hbWUpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc29sZS50aW1lKCdncm91cC1kb2MtYW5ub3RhdGlvbnMtbGlzdCcpO1xuICAgICAgICAgICAgY29uc3QgZG9jQW5ub3RhdGlvbnMgPSBhd2FpdCBHcm91cERvY0Fubm90YXRpb25zLmxpc3QoZ3JvdXAuaWQpO1xuICAgICAgICAgICAgY29uc29sZS50aW1lRW5kKCdncm91cC1kb2MtYW5ub3RhdGlvbnMtbGlzdCcpO1xuXG4gICAgICAgICAgICBjb25zb2xlLnRpbWUoJ2RvY0Fubm90YXRpb25Qcm9maWxlUmVjb3JkcycpO1xuICAgICAgICAgICAgY29uc3QgZG9jQW5ub3RhdGlvblByb2ZpbGVSZWNvcmRzID0gYXdhaXQgUHJvZmlsZUpvaW5zLmpvaW4oZG9jQW5ub3RhdGlvbnMpO1xuICAgICAgICAgICAgY29uc29sZS50aW1lRW5kKCdkb2NBbm5vdGF0aW9uUHJvZmlsZVJlY29yZHMnKTtcblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZSxcbiAgICAgICAgICAgICAgICBncm91cEhpZ2hsaWdodHNEYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBncm91cC5pZCxcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXAsXG4gICAgICAgICAgICAgICAgICAgIGRvY0Fubm90YXRpb25Qcm9maWxlUmVjb3JkcyxcbiAgICAgICAgICAgICAgICB9fSk7XG5cbiAgICAgICAgfTtcblxuICAgICAgICBkb0hhbmRsZSgpLmNhdGNoKGVyciA9PiBsb2cuZXJyb3IoXCJVbmFibGUgdG8gZ2V0IGdyb3VwczogXCIsIGVycikpO1xuXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICA8Rml4ZWROYXYgaWQ9XCJkb2MtcmVwb3NpdG9yeVwiPlxuXG4gICAgICAgICAgICAgICAgPGhlYWRlcj5cblxuICAgICAgICAgICAgICAgICAgICA8UmVwb0hlYWRlciBwZXJzaXN0ZW5jZUxheWVyTWFuYWdlcj17dGhpcy5wcm9wcy5wZXJzaXN0ZW5jZUxheWVyTWFuYWdlcn0vPlxuXG4gICAgICAgICAgICAgICAgPC9oZWFkZXI+XG5cbiAgICAgICAgICAgICAgICA8Rml4ZWROYXZCb2R5PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG1iLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMiBwLTIgYm9yZGVyLXRvcCBib3JkZXItbGVmdCBib3JkZXItcmlnaHQgYmctZ3JleTAwMFwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcm91cE5hdmJhciBncm91cE5hbWU9e3RoaXMuc3RhdGUubmFtZX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhpZ2hsaWdodHNUYWJsZSBwZXJzaXN0ZW5jZUxheWVyTWFuYWdlcj17dGhpcy5wcm9wcy5wZXJzaXN0ZW5jZUxheWVyTWFuYWdlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncm91cEhpZ2hsaWdodHNEYXRhPXt0aGlzLnN0YXRlLmdyb3VwSGlnaGxpZ2h0c0RhdGF9Lz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8L0ZpeGVkTmF2Qm9keT5cblxuICAgICAgICAgICAgPC9GaXhlZE5hdj5cblxuICAgICAgICApO1xuICAgIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgcmVhZG9ubHkgcGVyc2lzdGVuY2VMYXllck1hbmFnZXI6IFBlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElTdGF0ZSB7XG4gICAgcmVhZG9ubHkgbmFtZTogR3JvdXBOYW1lU3RyO1xuICAgIHJlYWRvbmx5IGdyb3VwSGlnaGxpZ2h0c0RhdGE/OiBHcm91cEhpZ2hsaWdodHNEYXRhO1xufVxuIl19