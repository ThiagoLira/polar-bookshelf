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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Button_1 = __importDefault(require("reactstrap/lib/Button"));
const Logger_1 = require("polar-shared/src/logger/Logger");
const Toaster_1 = require("../../../../web/js/ui/toaster/Toaster");
const GroupDatastores_1 = require("../../../../web/js/datastore/sharing/GroupDatastores");
const GroupDocs_1 = require("../../../../web/js/datastore/sharing/db/GroupDocs");
const AuthHandler_1 = require("../../../../web/js/apps/repository/auth_handler/AuthHandler");
const log = Logger_1.Logger.create();
class GroupDocAddButton extends react_1.default.PureComponent {
    constructor(props) {
        super(props);
        this.onJoin = this.onJoin.bind(this);
        this.state = {};
    }
    render() {
        return (react_1.default.createElement("div", { className: "mr-1 ml-1" },
            react_1.default.createElement(Button_1.default, { color: "success", size: "sm", onClick: () => this.onJoin(), className: "pl-2 pr-2" },
                react_1.default.createElement("i", { className: "fas fa-plus", style: { marginRight: '5px' } }),
                " Add")));
    }
    onJoin() {
        const handler = () => __awaiter(this, void 0, void 0, function* () {
            yield AuthHandler_1.AuthHandlers.requireAuthentication();
            const { groupID, fingerprint } = this.props;
            Toaster_1.Toaster.info("Adding document to your document repository...");
            const docRefs = yield GroupDocs_1.GroupDocs.getByFingerprint(groupID, fingerprint);
            if (docRefs.length === 0) {
                Toaster_1.Toaster.error("No group docs to add");
                return;
            }
            const docRef = docRefs[0];
            const groupDocRef = {
                groupID,
                docRef
            };
            const persistenceLayer = this.props.persistenceLayerProvider();
            yield GroupDatastores_1.GroupDatastores.importFromGroup(persistenceLayer, groupDocRef);
            Toaster_1.Toaster.success("Adding document to your document repository...done");
        });
        handler()
            .catch(err => log.error("Unable to join group: ", err));
    }
}
exports.GroupDocAddButton = GroupDocAddButton;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JvdXBEb2NBZGRCdXR0b24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJHcm91cERvY0FkZEJ1dHRvbi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQSxrREFBMEI7QUFDMUIsbUVBQTJDO0FBTzNDLDJEQUFzRDtBQUN0RCxtRUFBOEQ7QUFDOUQsMEZBRzhEO0FBSTlELGlGQUE0RTtBQUM1RSw2RkFBeUY7QUFFekYsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLE1BQWEsaUJBQWtCLFNBQVEsZUFBSyxDQUFDLGFBQTZCO0lBRXRFLFlBQVksS0FBYTtRQUNyQixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFYixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXJDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFDWixDQUFDO0lBRU4sQ0FBQztJQUdNLE1BQU07UUFFVCxPQUFPLENBRUgsdUNBQUssU0FBUyxFQUFDLFdBQVc7WUFFdEIsOEJBQUMsZ0JBQU0sSUFBQyxLQUFLLEVBQUMsU0FBUyxFQUNmLElBQUksRUFBQyxJQUFJLEVBQ1QsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFDNUIsU0FBUyxFQUFDLFdBQVc7Z0JBRXpCLHFDQUFHLFNBQVMsRUFBQyxhQUFhLEVBQUMsS0FBSyxFQUFFLEVBQUMsV0FBVyxFQUFFLEtBQUssRUFBQyxHQUFHO3VCQUVwRCxDQUVQLENBRVQsQ0FBQztJQUVOLENBQUM7SUFFTyxNQUFNO1FBRVYsTUFBTSxPQUFPLEdBQUcsR0FBUyxFQUFFO1lBRXZCLE1BQU0sMEJBQVksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1lBRTNDLE1BQU0sRUFBQyxPQUFPLEVBQUUsV0FBVyxFQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUUxQyxpQkFBTyxDQUFDLElBQUksQ0FBQyxnREFBZ0QsQ0FBQyxDQUFDO1lBRS9ELE1BQU0sT0FBTyxHQUFHLE1BQU0scUJBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFFdkUsSUFBSSxPQUFPLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtnQkFDdEIsaUJBQU8sQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQztnQkFDdEMsT0FBTzthQUNWO1lBRUQsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRTFCLE1BQU0sV0FBVyxHQUFnQjtnQkFDN0IsT0FBTztnQkFDUCxNQUFNO2FBQ1QsQ0FBQztZQUVGLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1lBRS9ELE1BQU0saUNBQWUsQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFFckUsaUJBQU8sQ0FBQyxPQUFPLENBQUMsb0RBQW9ELENBQUMsQ0FBQztRQUUxRSxDQUFDLENBQUEsQ0FBQztRQUVGLE9BQU8sRUFBRTthQUNKLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsd0JBQXdCLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNoRSxDQUFDO0NBRUo7QUF0RUQsOENBc0VDIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50IHJlYWN0L25vLW11bHRpLWNvbXA6IDAsIHJlYWN0L3Byb3AtdHlwZXM6IDAgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0c3RyYXAvbGliL0J1dHRvbic7XG5pbXBvcnQge0dyb3VwSURTdHJ9IGZyb20gXCIuLi8uLi8uLi8uLi93ZWIvanMvZGF0YXN0b3JlL0RhdGFzdG9yZVwiO1xuaW1wb3J0IHtOVUxMX0ZVTkNUSU9OfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy91dGlsL0Z1bmN0aW9uc1wiO1xuaW1wb3J0IHtcbiAgICBHcm91cEpvaW5SZXF1ZXN0LFxuICAgIEdyb3VwSm9pbnNcbn0gZnJvbSBcIi4uLy4uLy4uLy4uL3dlYi9qcy9kYXRhc3RvcmUvc2hhcmluZy9ycGMvR3JvdXBKb2luc1wiO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL2xvZ2dlci9Mb2dnZXJcIjtcbmltcG9ydCB7VG9hc3Rlcn0gZnJvbSBcIi4uLy4uLy4uLy4uL3dlYi9qcy91aS90b2FzdGVyL1RvYXN0ZXJcIjtcbmltcG9ydCB7XG4gICAgR3JvdXBEYXRhc3RvcmVzLFxuICAgIEdyb3VwRG9jUmVmXG59IGZyb20gXCIuLi8uLi8uLi8uLi93ZWIvanMvZGF0YXN0b3JlL3NoYXJpbmcvR3JvdXBEYXRhc3RvcmVzXCI7XG5pbXBvcnQgeyBEb2NSZWYgfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL2dyb3Vwcy9Eb2NSZWYnO1xuaW1wb3J0IHtQZXJzaXN0ZW5jZUxheWVyTWFuYWdlcn0gZnJvbSBcIi4uLy4uLy4uLy4uL3dlYi9qcy9kYXRhc3RvcmUvUGVyc2lzdGVuY2VMYXllck1hbmFnZXJcIjtcbmltcG9ydCB7UGVyc2lzdGVuY2VMYXllclByb3ZpZGVyfSBmcm9tIFwiLi4vLi4vLi4vLi4vd2ViL2pzL2RhdGFzdG9yZS9QZXJzaXN0ZW5jZUxheWVyXCI7XG5pbXBvcnQge0dyb3VwRG9jc30gZnJvbSBcIi4uLy4uLy4uLy4uL3dlYi9qcy9kYXRhc3RvcmUvc2hhcmluZy9kYi9Hcm91cERvY3NcIjtcbmltcG9ydCB7QXV0aEhhbmRsZXJzfSBmcm9tIFwiLi4vLi4vLi4vLi4vd2ViL2pzL2FwcHMvcmVwb3NpdG9yeS9hdXRoX2hhbmRsZXIvQXV0aEhhbmRsZXJcIjtcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG5leHBvcnQgY2xhc3MgR3JvdXBEb2NBZGRCdXR0b24gZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLm9uSm9pbiA9IHRoaXMub25Kb2luLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgfTtcblxuICAgIH1cblxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1yLTEgbWwtMVwiPlxuXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInN1Y2Nlc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMub25Kb2luKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwbC0yIHByLTJcIj5cblxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtcGx1c1wiIHN0eWxlPXt7bWFyZ2luUmlnaHQ6ICc1cHgnfX0vPiBBZGRcblxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICApO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkpvaW4oKSB7XG5cbiAgICAgICAgY29uc3QgaGFuZGxlciA9IGFzeW5jICgpID0+IHtcblxuICAgICAgICAgICAgYXdhaXQgQXV0aEhhbmRsZXJzLnJlcXVpcmVBdXRoZW50aWNhdGlvbigpO1xuXG4gICAgICAgICAgICBjb25zdCB7Z3JvdXBJRCwgZmluZ2VycHJpbnR9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICAgICAgVG9hc3Rlci5pbmZvKFwiQWRkaW5nIGRvY3VtZW50IHRvIHlvdXIgZG9jdW1lbnQgcmVwb3NpdG9yeS4uLlwiKTtcblxuICAgICAgICAgICAgY29uc3QgZG9jUmVmcyA9IGF3YWl0IEdyb3VwRG9jcy5nZXRCeUZpbmdlcnByaW50KGdyb3VwSUQsIGZpbmdlcnByaW50KTtcblxuICAgICAgICAgICAgaWYgKGRvY1JlZnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgVG9hc3Rlci5lcnJvcihcIk5vIGdyb3VwIGRvY3MgdG8gYWRkXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgZG9jUmVmID0gZG9jUmVmc1swXTtcblxuICAgICAgICAgICAgY29uc3QgZ3JvdXBEb2NSZWY6IEdyb3VwRG9jUmVmID0ge1xuICAgICAgICAgICAgICAgIGdyb3VwSUQsXG4gICAgICAgICAgICAgICAgZG9jUmVmXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjb25zdCBwZXJzaXN0ZW5jZUxheWVyID0gdGhpcy5wcm9wcy5wZXJzaXN0ZW5jZUxheWVyUHJvdmlkZXIoKTtcblxuICAgICAgICAgICAgYXdhaXQgR3JvdXBEYXRhc3RvcmVzLmltcG9ydEZyb21Hcm91cChwZXJzaXN0ZW5jZUxheWVyLCBncm91cERvY1JlZik7XG5cbiAgICAgICAgICAgIFRvYXN0ZXIuc3VjY2VzcyhcIkFkZGluZyBkb2N1bWVudCB0byB5b3VyIGRvY3VtZW50IHJlcG9zaXRvcnkuLi5kb25lXCIpO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgaGFuZGxlcigpXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IGxvZy5lcnJvcihcIlVuYWJsZSB0byBqb2luIGdyb3VwOiBcIiwgZXJyKSk7XG4gICAgfVxuXG59XG5cbmludGVyZmFjZSBJUHJvcHMge1xuXG4gICAgcmVhZG9ubHkgcGVyc2lzdGVuY2VMYXllclByb3ZpZGVyOiBQZXJzaXN0ZW5jZUxheWVyUHJvdmlkZXI7XG4gICAgcmVhZG9ubHkgZ3JvdXBJRDogR3JvdXBJRFN0cjtcbiAgICByZWFkb25seSBmaW5nZXJwcmludDogc3RyaW5nO1xuXG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xufVxuIl19