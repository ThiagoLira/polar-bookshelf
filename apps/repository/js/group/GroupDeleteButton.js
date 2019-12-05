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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const Button_1 = __importDefault(require("reactstrap/lib/Button"));
const Dialogs_1 = require("../../../../web/js/ui/dialogs/Dialogs");
const UserGroups_1 = require("../../../../web/js/datastore/sharing/db/UserGroups");
const GroupDeletes_1 = require("../../../../web/js/datastore/sharing/rpc/GroupDeletes");
const Toaster_1 = require("../../../../web/js/ui/toaster/Toaster");
class GroupDeleteButton extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.onDelete = this.onDelete.bind(this);
        this.onDeleteConfirmed = this.onDeleteConfirmed.bind(this);
    }
    render() {
        const { groupData } = this.props;
        if (!groupData) {
            return React.createElement("div", null);
        }
        const { userGroup, id, group } = groupData;
        const isAdmin = UserGroups_1.UserGroups.hasAdminForGroup(id, userGroup);
        return (React.createElement("div", { className: "mr-1 ml-1" },
            React.createElement(Button_1.default, { color: "danger", size: "sm", hidden: !isAdmin, onClick: () => this.onDelete(group), className: "pl-2 pr-2" },
                React.createElement("i", { className: "fas fa-trash-alt", style: { marginRight: '5px' } }),
                " Delete")));
    }
    onDelete(group) {
        Dialogs_1.Dialogs.confirm({
            title: "Are you sure you want to delete this group?",
            subtitle: "Deleting is final and everyone will lose access to the annotations.  " +
                "They will still have access to their own annotations and the original documents.",
            type: 'danger',
            onConfirm: () => this.onDeleteConfirmed(group)
        });
    }
    onDeleteConfirmed(group) {
        Toaster_1.Toaster.info(`Going to delete group ${group.name}...`);
        const doHandle = () => __awaiter(this, void 0, void 0, function* () {
            yield GroupDeletes_1.GroupDeletes.exec({ groupID: group.id });
            Toaster_1.Toaster.success(`Deleted group ${group.name} successfully!`);
        });
        doHandle()
            .catch(err => {
            const msg = "Failed to delete group";
            Toaster_1.Toaster.error(msg);
            console.error(msg, err);
        });
    }
}
exports.GroupDeleteButton = GroupDeleteButton;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JvdXBEZWxldGVCdXR0b24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJHcm91cERlbGV0ZUJ1dHRvbi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQStCO0FBTS9CLG1FQUEyQztBQUMzQyxtRUFBOEQ7QUFDOUQsbUZBQThFO0FBQzlFLHdGQUFtRjtBQUNuRixtRUFBOEQ7QUFFOUQsTUFBYSxpQkFBa0IsU0FBUSxLQUFLLENBQUMsU0FBeUI7SUFFbEUsWUFBWSxLQUFhLEVBQUUsT0FBWTtRQUNuQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRXRCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFL0QsQ0FBQztJQUVNLE1BQU07UUFFVCxNQUFNLEVBQUMsU0FBUyxFQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUUvQixJQUFJLENBQUUsU0FBUyxFQUFFO1lBQ2IsT0FBTyxnQ0FBTSxDQUFDO1NBQ2pCO1FBRUQsTUFBTSxFQUFDLFNBQVMsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFDLEdBQUcsU0FBUyxDQUFDO1FBRXpDLE1BQU0sT0FBTyxHQUFHLHVCQUFVLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBRTNELE9BQU8sQ0FFSCw2QkFBSyxTQUFTLEVBQUMsV0FBVztZQUV0QixvQkFBQyxnQkFBTSxJQUFDLEtBQUssRUFBQyxRQUFRLEVBQ2QsSUFBSSxFQUFDLElBQUksRUFDVCxNQUFNLEVBQUUsQ0FBRSxPQUFPLEVBQ2pCLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUNuQyxTQUFTLEVBQUMsV0FBVztnQkFFekIsMkJBQUcsU0FBUyxFQUFDLGtCQUFrQixFQUFDLEtBQUssRUFBRSxFQUFDLFdBQVcsRUFBRSxLQUFLLEVBQUMsR0FBRzswQkFFekQsQ0FFUCxDQUVULENBQUM7SUFFTixDQUFDO0lBRU8sUUFBUSxDQUFDLEtBQVk7UUFFekIsaUJBQU8sQ0FBQyxPQUFPLENBQUM7WUFDWixLQUFLLEVBQUUsNkNBQTZDO1lBQ3BELFFBQVEsRUFBRSx1RUFBdUU7Z0JBQ3ZFLGtGQUFrRjtZQUM1RixJQUFJLEVBQUUsUUFBUTtZQUNkLFNBQVMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDO1NBQ2pELENBQUMsQ0FBQztJQUVQLENBQUM7SUFFTyxpQkFBaUIsQ0FBQyxLQUFZO1FBRWxDLGlCQUFPLENBQUMsSUFBSSxDQUFDLHlCQUF5QixLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQztRQUV2RCxNQUFNLFFBQVEsR0FBRyxHQUFTLEVBQUU7WUFFeEIsTUFBTSwyQkFBWSxDQUFDLElBQUksQ0FBQyxFQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQztZQUU3QyxpQkFBTyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsS0FBSyxDQUFDLElBQUksZ0JBQWdCLENBQUMsQ0FBQztRQUVqRSxDQUFDLENBQUEsQ0FBQztRQUVGLFFBQVEsRUFBRTthQUNMLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNULE1BQU0sR0FBRyxHQUFHLHdCQUF3QixDQUFDO1lBQ3JDLGlCQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ25CLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO0lBRVgsQ0FBQztDQUVKO0FBM0VELDhDQTJFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7UGVyc2lzdGVuY2VMYXllck1hbmFnZXJ9IGZyb20gJy4uLy4uLy4uLy4uL3dlYi9qcy9kYXRhc3RvcmUvUGVyc2lzdGVuY2VMYXllck1hbmFnZXInO1xuaW1wb3J0IHtHcm91cH0gZnJvbSBcIi4uLy4uLy4uLy4uL3dlYi9qcy9kYXRhc3RvcmUvc2hhcmluZy9kYi9Hcm91cHNcIjtcbmltcG9ydCB7R3JvdXBEb2NJbmZvQ2FyZH0gZnJvbSBcIi4vR3JvdXBEb2NJbmZvQ2FyZFwiO1xuaW1wb3J0IHtHcm91cERvY0luZm99IGZyb20gXCIuLi8uLi8uLi8uLi93ZWIvanMvZGF0YXN0b3JlL3NoYXJpbmcvR3JvdXBEb2NJbmZvc1wiO1xuaW1wb3J0IHtHcm91cERhdGF9IGZyb20gXCIuL0dyb3VwRGF0YVwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwicmVhY3RzdHJhcC9saWIvQnV0dG9uXCI7XG5pbXBvcnQge0RpYWxvZ3N9IGZyb20gXCIuLi8uLi8uLi8uLi93ZWIvanMvdWkvZGlhbG9ncy9EaWFsb2dzXCI7XG5pbXBvcnQge1VzZXJHcm91cHN9IGZyb20gXCIuLi8uLi8uLi8uLi93ZWIvanMvZGF0YXN0b3JlL3NoYXJpbmcvZGIvVXNlckdyb3Vwc1wiO1xuaW1wb3J0IHtHcm91cERlbGV0ZXN9IGZyb20gXCIuLi8uLi8uLi8uLi93ZWIvanMvZGF0YXN0b3JlL3NoYXJpbmcvcnBjL0dyb3VwRGVsZXRlc1wiO1xuaW1wb3J0IHtUb2FzdGVyfSBmcm9tIFwiLi4vLi4vLi4vLi4vd2ViL2pzL3VpL3RvYXN0ZXIvVG9hc3RlclwiO1xuXG5leHBvcnQgY2xhc3MgR3JvdXBEZWxldGVCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJUHJvcHMsIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG5cbiAgICAgICAgdGhpcy5vbkRlbGV0ZSA9IHRoaXMub25EZWxldGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkRlbGV0ZUNvbmZpcm1lZCA9IHRoaXMub25EZWxldGVDb25maXJtZWQuYmluZCh0aGlzKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgY29uc3Qge2dyb3VwRGF0YX0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGlmICghIGdyb3VwRGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuIDxkaXYvPjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHt1c2VyR3JvdXAsIGlkLCBncm91cH0gPSBncm91cERhdGE7XG5cbiAgICAgICAgY29uc3QgaXNBZG1pbiA9IFVzZXJHcm91cHMuaGFzQWRtaW5Gb3JHcm91cChpZCwgdXNlckdyb3VwKTtcblxuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1yLTEgbWwtMVwiPlxuXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cImRhbmdlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgaGlkZGVuPXshIGlzQWRtaW59XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLm9uRGVsZXRlKGdyb3VwKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBsLTIgcHItMlwiPlxuXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS10cmFzaC1hbHRcIiBzdHlsZT17e21hcmdpblJpZ2h0OiAnNXB4J319Lz4gRGVsZXRlXG5cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cblxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgb25EZWxldGUoZ3JvdXA6IEdyb3VwKSB7XG5cbiAgICAgICAgRGlhbG9ncy5jb25maXJtKHtcbiAgICAgICAgICAgIHRpdGxlOiBcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBncm91cD9cIixcbiAgICAgICAgICAgIHN1YnRpdGxlOiBcIkRlbGV0aW5nIGlzIGZpbmFsIGFuZCBldmVyeW9uZSB3aWxsIGxvc2UgYWNjZXNzIHRvIHRoZSBhbm5vdGF0aW9ucy4gIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICBcIlRoZXkgd2lsbCBzdGlsbCBoYXZlIGFjY2VzcyB0byB0aGVpciBvd24gYW5ub3RhdGlvbnMgYW5kIHRoZSBvcmlnaW5hbCBkb2N1bWVudHMuXCIsXG4gICAgICAgICAgICB0eXBlOiAnZGFuZ2VyJyxcbiAgICAgICAgICAgIG9uQ29uZmlybTogKCkgPT4gdGhpcy5vbkRlbGV0ZUNvbmZpcm1lZChncm91cClcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uRGVsZXRlQ29uZmlybWVkKGdyb3VwOiBHcm91cCkge1xuXG4gICAgICAgIFRvYXN0ZXIuaW5mbyhgR29pbmcgdG8gZGVsZXRlIGdyb3VwICR7Z3JvdXAubmFtZX0uLi5gKTtcblxuICAgICAgICBjb25zdCBkb0hhbmRsZSA9IGFzeW5jICgpID0+IHtcblxuICAgICAgICAgICAgYXdhaXQgR3JvdXBEZWxldGVzLmV4ZWMoe2dyb3VwSUQ6IGdyb3VwLmlkfSk7XG5cbiAgICAgICAgICAgIFRvYXN0ZXIuc3VjY2VzcyhgRGVsZXRlZCBncm91cCAke2dyb3VwLm5hbWV9IHN1Y2Nlc3NmdWxseSFgKTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIGRvSGFuZGxlKClcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1zZyA9IFwiRmFpbGVkIHRvIGRlbGV0ZSBncm91cFwiO1xuICAgICAgICAgICAgICAgIFRvYXN0ZXIuZXJyb3IobXNnKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKG1zZywgZXJyKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVByb3BzIHtcbiAgICByZWFkb25seSBncm91cERhdGE/OiBHcm91cERhdGE7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVN0YXRlIHtcbn1cbiJdfQ==