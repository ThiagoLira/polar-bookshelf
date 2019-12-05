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
const ProfileJoins_1 = require("../../../../../web/js/datastore/sharing/db/ProfileJoins");
const HighlightCard_1 = require("../highlights/HighlightCard");
const GroupHighlightURLs_1 = require("polar-webapp-links/src/groups/GroupHighlightURLs");
const log = Logger_1.Logger.create();
class GroupHighlightScreen extends React.Component {
    constructor(props, context) {
        super(props, context);
        const parsedURL = GroupHighlightURLs_1.GroupHighlightURLs.parse(document.location.href);
        this.state = Object.assign({}, parsedURL);
    }
    componentWillMount() {
        const doHandle = () => __awaiter(this, void 0, void 0, function* () {
            const groupName = this.state.name;
            const group = yield Groups_1.Groups.getByName(groupName);
            if (!group) {
                Toaster_1.Toaster.error("No group named: " + groupName);
                return;
            }
            const docAnnotation = yield GroupDocAnnotations_1.GroupDocAnnotations.get(group.id, this.state.id);
            const docAnnotationProfileRecord = yield ProfileJoins_1.ProfileJoins.record(docAnnotation);
            this.setState(Object.assign(Object.assign({}, this.state), { groupHighlightData: {
                    id: group.id,
                    group,
                    docAnnotationProfileRecord,
                } }));
        });
        doHandle().catch(err => log.error("Unable to get groups: ", err));
    }
    render() {
        const { groupHighlightData } = this.state;
        if (!groupHighlightData) {
            return React.createElement("div", null);
        }
        return (React.createElement(FixedNav_1.FixedNav, { id: "doc-repository" },
            React.createElement("header", null,
                React.createElement(RepoHeader_1.RepoHeader, { persistenceLayerManager: this.props.persistenceLayerManager })),
            React.createElement(FixedNav_1.FixedNavBody, null,
                React.createElement("div", { className: "container" },
                    React.createElement("div", { className: "row" },
                        React.createElement("div", { className: "col" },
                            React.createElement("div", { className: "border-bottom mt-2" },
                                React.createElement(HighlightCard_1.HighlightCard, { persistenceLayerProvider: () => this.props.persistenceLayerManager.get(), groupID: groupHighlightData.group.id, groupName: groupHighlightData.group.name, docAnnotationProfileRecord: groupHighlightData.docAnnotationProfileRecord }))))))));
    }
}
exports.GroupHighlightScreen = GroupHighlightScreen;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JvdXBIaWdobGlnaHRTY3JlZW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJHcm91cEhpZ2hsaWdodFNjcmVlbi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQStCO0FBQy9CLDhFQUF5RTtBQUN6RSx3SEFBbUg7QUFDbkgsMkRBQXNEO0FBQ3RELHNFQUFpRTtBQUNqRSw2Q0FBc0Q7QUFDdEQsNkRBQXdEO0FBRXhELDBGQUFxRjtBQUVyRiwrREFBMEQ7QUFDMUQseUZBQXVHO0FBRXZHLE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU1QixNQUFhLG9CQUFxQixTQUFRLEtBQUssQ0FBQyxTQUF5QjtJQUVyRSxZQUFZLEtBQWEsRUFBRSxPQUFZO1FBQ25DLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFdEIsTUFBTSxTQUFTLEdBQUcsdUNBQWtCLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFbkUsSUFBSSxDQUFDLEtBQUsscUJBQ0gsU0FBUyxDQUNmLENBQUM7SUFFTixDQUFDO0lBRU0sa0JBQWtCO1FBRXJCLE1BQU0sUUFBUSxHQUFHLEdBQXdCLEVBQUU7WUFFdkMsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFFbEMsTUFBTSxLQUFLLEdBQUcsTUFBTSxlQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBRWhELElBQUksQ0FBRSxLQUFLLEVBQUU7Z0JBQ1QsaUJBQU8sQ0FBQyxLQUFLLENBQUMsa0JBQWtCLEdBQUcsU0FBUyxDQUFDLENBQUM7Z0JBQzlDLE9BQU87YUFDVjtZQUVELE1BQU0sYUFBYSxHQUFHLE1BQU0seUNBQW1CLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUU3RSxNQUFNLDBCQUEwQixHQUFHLE1BQU0sMkJBQVksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7WUFFNUUsSUFBSSxDQUFDLFFBQVEsaUNBQ04sSUFBSSxDQUFDLEtBQUssS0FDYixrQkFBa0IsRUFBRTtvQkFDaEIsRUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFO29CQUNaLEtBQUs7b0JBQ0wsMEJBQTBCO2lCQUM3QixJQUFFLENBQUM7UUFFWixDQUFDLENBQUEsQ0FBQztRQUVGLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsd0JBQXdCLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUV0RSxDQUFDO0lBRU0sTUFBTTtRQUVULE1BQU0sRUFBQyxrQkFBa0IsRUFBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFFeEMsSUFBSSxDQUFFLGtCQUFrQixFQUFFO1lBQ3RCLE9BQU8sZ0NBQU0sQ0FBQztTQUNqQjtRQUVELE9BQU8sQ0FFSCxvQkFBQyxtQkFBUSxJQUFDLEVBQUUsRUFBQyxnQkFBZ0I7WUFFekI7Z0JBRUksb0JBQUMsdUJBQVUsSUFBQyx1QkFBdUIsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLHVCQUF1QixHQUFHLENBRXJFO1lBRVQsb0JBQUMsdUJBQVk7Z0JBRVQsNkJBQUssU0FBUyxFQUFDLFdBQVc7b0JBRXRCLDZCQUFLLFNBQVMsRUFBQyxLQUFLO3dCQUVoQiw2QkFBSyxTQUFTLEVBQUMsS0FBSzs0QkFFaEIsNkJBQUssU0FBUyxFQUFDLG9CQUFvQjtnQ0FFL0Isb0JBQUMsNkJBQWEsSUFBQyx3QkFBd0IsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLHVCQUF1QixDQUFDLEdBQUcsRUFBRSxFQUN4RSxPQUFPLEVBQUUsa0JBQWtCLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFDcEMsU0FBUyxFQUFFLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxJQUFLLEVBQ3pDLDBCQUEwQixFQUFFLGtCQUFrQixDQUFDLDBCQUEwQixHQUFHLENBQ3pGLENBRUosQ0FFSixDQUVKLENBRUssQ0FFUixDQUVkLENBQUM7SUFDTixDQUFDO0NBRUo7QUEzRkQsb0RBMkZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtHcm91cHN9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi93ZWIvanMvZGF0YXN0b3JlL3NoYXJpbmcvZGIvR3JvdXBzXCI7XG5pbXBvcnQge0dyb3VwRG9jQW5ub3RhdGlvbnN9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi93ZWIvanMvZGF0YXN0b3JlL3NoYXJpbmcvZGIvZG9jX2Fubm90YXRpb25zL0dyb3VwRG9jQW5ub3RhdGlvbnNcIjtcbmltcG9ydCB7TG9nZ2VyfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy9sb2dnZXIvTG9nZ2VyXCI7XG5pbXBvcnQge1RvYXN0ZXJ9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi93ZWIvanMvdWkvdG9hc3Rlci9Ub2FzdGVyXCI7XG5pbXBvcnQge0ZpeGVkTmF2LCBGaXhlZE5hdkJvZHl9IGZyb20gXCIuLi8uLi9GaXhlZE5hdlwiO1xuaW1wb3J0IHtSZXBvSGVhZGVyfSBmcm9tIFwiLi4vLi4vcmVwb19oZWFkZXIvUmVwb0hlYWRlclwiO1xuaW1wb3J0IHtQZXJzaXN0ZW5jZUxheWVyTWFuYWdlcn0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL3dlYi9qcy9kYXRhc3RvcmUvUGVyc2lzdGVuY2VMYXllck1hbmFnZXJcIjtcbmltcG9ydCB7UHJvZmlsZUpvaW5zfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vd2ViL2pzL2RhdGFzdG9yZS9zaGFyaW5nL2RiL1Byb2ZpbGVKb2luc1wiO1xuaW1wb3J0IHtHcm91cEhpZ2hsaWdodERhdGF9IGZyb20gXCIuL0dyb3VwSGlnaGxpZ2h0RGF0YVwiO1xuaW1wb3J0IHtIaWdobGlnaHRDYXJkfSBmcm9tIFwiLi4vaGlnaGxpZ2h0cy9IaWdobGlnaHRDYXJkXCI7XG5pbXBvcnQge0dyb3VwSGlnaGxpZ2h0VVJMLCBHcm91cEhpZ2hsaWdodFVSTHN9IGZyb20gXCJwb2xhci13ZWJhcHAtbGlua3Mvc3JjL2dyb3Vwcy9Hcm91cEhpZ2hsaWdodFVSTHNcIjtcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG5leHBvcnQgY2xhc3MgR3JvdXBIaWdobGlnaHRTY3JlZW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJUHJvcHMsIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG5cbiAgICAgICAgY29uc3QgcGFyc2VkVVJMID0gR3JvdXBIaWdobGlnaHRVUkxzLnBhcnNlKGRvY3VtZW50LmxvY2F0aW9uLmhyZWYpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICAuLi5wYXJzZWRVUkxcbiAgICAgICAgfTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBjb21wb25lbnRXaWxsTW91bnQoKTogdm9pZCB7XG5cbiAgICAgICAgY29uc3QgZG9IYW5kbGUgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IGdyb3VwTmFtZSA9IHRoaXMuc3RhdGUubmFtZTtcblxuICAgICAgICAgICAgY29uc3QgZ3JvdXAgPSBhd2FpdCBHcm91cHMuZ2V0QnlOYW1lKGdyb3VwTmFtZSk7XG5cbiAgICAgICAgICAgIGlmICghIGdyb3VwKSB7XG4gICAgICAgICAgICAgICAgVG9hc3Rlci5lcnJvcihcIk5vIGdyb3VwIG5hbWVkOiBcIiArIGdyb3VwTmFtZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBkb2NBbm5vdGF0aW9uID0gYXdhaXQgR3JvdXBEb2NBbm5vdGF0aW9ucy5nZXQoZ3JvdXAuaWQsIHRoaXMuc3RhdGUuaWQpO1xuXG4gICAgICAgICAgICBjb25zdCBkb2NBbm5vdGF0aW9uUHJvZmlsZVJlY29yZCA9IGF3YWl0IFByb2ZpbGVKb2lucy5yZWNvcmQoZG9jQW5ub3RhdGlvbik7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUsXG4gICAgICAgICAgICAgICAgZ3JvdXBIaWdobGlnaHREYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBncm91cC5pZCxcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXAsXG4gICAgICAgICAgICAgICAgICAgIGRvY0Fubm90YXRpb25Qcm9maWxlUmVjb3JkLFxuICAgICAgICAgICAgICAgIH19KTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIGRvSGFuZGxlKCkuY2F0Y2goZXJyID0+IGxvZy5lcnJvcihcIlVuYWJsZSB0byBnZXQgZ3JvdXBzOiBcIiwgZXJyKSk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuXG4gICAgICAgIGNvbnN0IHtncm91cEhpZ2hsaWdodERhdGF9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBpZiAoISBncm91cEhpZ2hsaWdodERhdGEpIHtcbiAgICAgICAgICAgIHJldHVybiA8ZGl2Lz47XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICA8Rml4ZWROYXYgaWQ9XCJkb2MtcmVwb3NpdG9yeVwiPlxuXG4gICAgICAgICAgICAgICAgPGhlYWRlcj5cblxuICAgICAgICAgICAgICAgICAgICA8UmVwb0hlYWRlciBwZXJzaXN0ZW5jZUxheWVyTWFuYWdlcj17dGhpcy5wcm9wcy5wZXJzaXN0ZW5jZUxheWVyTWFuYWdlcn0vPlxuXG4gICAgICAgICAgICAgICAgPC9oZWFkZXI+XG5cbiAgICAgICAgICAgICAgICA8Rml4ZWROYXZCb2R5PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLWJvdHRvbSBtdC0yXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIaWdobGlnaHRDYXJkIHBlcnNpc3RlbmNlTGF5ZXJQcm92aWRlcj17KCkgPT4gdGhpcy5wcm9wcy5wZXJzaXN0ZW5jZUxheWVyTWFuYWdlci5nZXQoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwSUQ9e2dyb3VwSGlnaGxpZ2h0RGF0YS5ncm91cC5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwTmFtZT17Z3JvdXBIaWdobGlnaHREYXRhLmdyb3VwLm5hbWUhfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jQW5ub3RhdGlvblByb2ZpbGVSZWNvcmQ9e2dyb3VwSGlnaGxpZ2h0RGF0YS5kb2NBbm5vdGF0aW9uUHJvZmlsZVJlY29yZH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvRml4ZWROYXZCb2R5PlxuXG4gICAgICAgICAgICA8L0ZpeGVkTmF2PlxuXG4gICAgICAgICk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVByb3BzIHtcbiAgICByZWFkb25seSBwZXJzaXN0ZW5jZUxheWVyTWFuYWdlcjogUGVyc2lzdGVuY2VMYXllck1hbmFnZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVN0YXRlIGV4dGVuZHMgR3JvdXBIaWdobGlnaHRVUkwge1xuICAgIHJlYWRvbmx5IGdyb3VwSGlnaGxpZ2h0RGF0YT86IEdyb3VwSGlnaGxpZ2h0RGF0YTtcbn1cbiJdfQ==