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
const Toaster_1 = require("../toaster/Toaster");
const Firebase_1 = require("../../firebase/Firebase");
const Groups_1 = require("../../datastore/sharing/db/Groups");
const EventListener_1 = require("../../reactor/EventListener");
const Logger_1 = require("polar-shared/src/logger/Logger");
const GroupSharingRecords_1 = require("./GroupSharingRecords");
const GroupSharingControl_1 = require("./GroupSharingControl");
const LoginRequired_1 = require("./LoginRequired");
const log = Logger_1.Logger.create();
class GroupSharing extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.releaser = new EventListener_1.Releaser();
        this.onConnectivity = this.onConnectivity.bind(this);
        this.state = {
            connectivity: 'unknown',
            contactProfiles: [],
            members: [],
            groups: [],
        };
    }
    componentDidMount() {
        const errorHandler = (err) => {
            const msg = "Unable to get group notifications: ";
            log.error(msg, err);
            Toaster_1.Toaster.error(msg, err.message);
        };
        const contactsHandler = (contactProfiles) => {
            if (this.releaser.released) {
                return;
            }
            this.setState(Object.assign(Object.assign({}, this.state), { contactProfiles }));
        };
        const membersHandler = (members) => {
            if (this.releaser.released) {
                return;
            }
            this.setState(Object.assign(Object.assign({}, this.state), { members }));
        };
        const groupsHandler = (groups) => {
            if (this.releaser.released) {
                return;
            }
            this.setState(Object.assign(Object.assign({}, this.state), { groups }));
        };
        const doHandle = () => __awaiter(this, void 0, void 0, function* () {
            const user = yield Firebase_1.Firebase.currentUser();
            if (!user) {
                this.onConnectivity('unauthenticated');
                return;
            }
            this.onConnectivity('authenticated');
            const docMeta = this.props.doc.docMeta;
            const fingerprint = docMeta.docInfo.fingerprint;
            const uid = user.uid;
            const groupID = Groups_1.Groups.createIDForKey(uid, fingerprint);
            GroupSharingRecords_1.GroupSharingRecords.fetch(groupID, contacts => contactsHandler(contacts), members => membersHandler(members), groups => groupsHandler(groups), err => errorHandler(err));
        });
        doHandle().catch(err => errorHandler(err));
    }
    componentWillUnmount() {
        this.releaser.release();
    }
    render() {
        switch (this.state.connectivity) {
            case "unknown":
                return react_1.default.createElement("div", null);
            case "unauthenticated":
                return react_1.default.createElement(LoginRequired_1.LoginRequired, null);
            case "authenticated":
                return react_1.default.createElement(GroupSharingControl_1.GroupSharingControl, Object.assign({}, this.props, this.state));
        }
    }
    onConnectivity(connectivity) {
        this.setState(Object.assign(Object.assign({}, this.state), { connectivity }));
    }
}
exports.GroupSharing = GroupSharing;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JvdXBTaGFyaW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiR3JvdXBTaGFyaW5nLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLGtEQUEwQjtBQUMxQixnREFBMkM7QUFDM0Msc0RBQWlEO0FBQ2pELDhEQUE4RTtBQUM5RSwrREFBcUQ7QUFDckQsMkRBQXNEO0FBR3RELCtEQUkrQjtBQUMvQiwrREFBNkU7QUFDN0UsbURBQThDO0FBRzlDLE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUs1QixNQUFhLFlBQWEsU0FBUSxlQUFLLENBQUMsU0FBeUI7SUFJN0QsWUFBWSxLQUFhO1FBQ3JCLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUhFLGFBQVEsR0FBRyxJQUFJLHdCQUFRLEVBQUUsQ0FBQztRQUt6QyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXJELElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDVCxZQUFZLEVBQUUsU0FBUztZQUN2QixlQUFlLEVBQUUsRUFBRTtZQUNuQixPQUFPLEVBQUUsRUFBRTtZQUNYLE1BQU0sRUFBRSxFQUFFO1NBQ2IsQ0FBQztJQUVOLENBQUM7SUFFTSxpQkFBaUI7UUFFcEIsTUFBTSxZQUFZLEdBQUcsQ0FBQyxHQUFVLEVBQUUsRUFBRTtZQUNoQyxNQUFNLEdBQUcsR0FBRyxxQ0FBcUMsQ0FBQztZQUNsRCxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUNwQixpQkFBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3BDLENBQUMsQ0FBQztRQUdGLE1BQU0sZUFBZSxHQUFHLENBQUMsZUFBOEMsRUFBRSxFQUFFO1lBRXZFLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUU7Z0JBQ3hCLE9BQU87YUFDVjtZQUVELElBQUksQ0FBQyxRQUFRLGlDQUFLLElBQUksQ0FBQyxLQUFLLEtBQUUsZUFBZSxJQUFFLENBQUM7UUFFcEQsQ0FBQyxDQUFDO1FBRUYsTUFBTSxjQUFjLEdBQUcsQ0FBQyxPQUFvQyxFQUFFLEVBQUU7WUFFNUQsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRTtnQkFDeEIsT0FBTzthQUNWO1lBRUQsSUFBSSxDQUFDLFFBQVEsaUNBQUssSUFBSSxDQUFDLEtBQUssS0FBRSxPQUFPLElBQUUsQ0FBQztRQUU1QyxDQUFDLENBQUM7UUFFRixNQUFNLGFBQWEsR0FBRyxDQUFDLE1BQTRCLEVBQUUsRUFBRTtZQUVuRCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFO2dCQUN4QixPQUFPO2FBQ1Y7WUFFRCxJQUFJLENBQUMsUUFBUSxpQ0FBSyxJQUFJLENBQUMsS0FBSyxLQUFFLE1BQU0sSUFBRSxDQUFDO1FBRTNDLENBQUMsQ0FBQztRQUVGLE1BQU0sUUFBUSxHQUFHLEdBQVMsRUFBRTtZQUV4QixNQUFNLElBQUksR0FBRyxNQUFNLG1CQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7WUFFMUMsSUFBSSxDQUFFLElBQUksRUFBRTtnQkFDUixJQUFJLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLENBQUM7Z0JBQ3ZDLE9BQU87YUFDVjtZQUVELElBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUM7WUFFckMsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDO1lBQ3ZDLE1BQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO1lBRWhELE1BQU0sR0FBRyxHQUFHLElBQUssQ0FBQyxHQUFHLENBQUM7WUFFdEIsTUFBTSxPQUFPLEdBQUcsZUFBTSxDQUFDLGNBQWMsQ0FBQyxHQUFHLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFFeEQseUNBQW1CLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFDUCxRQUFRLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsRUFDckMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEVBQ2xDLE1BQU0sQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxFQUMvQixHQUFHLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRXhELENBQUMsQ0FBQSxDQUFDO1FBRUYsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFFL0MsQ0FBQztJQUVNLG9CQUFvQjtRQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFTSxNQUFNO1FBRVQsUUFBUSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRTtZQUU3QixLQUFLLFNBQVM7Z0JBQ1YsT0FBTywwQ0FBTSxDQUFDO1lBQ2xCLEtBQUssaUJBQWlCO2dCQUNsQixPQUFPLDhCQUFDLDZCQUFhLE9BQUUsQ0FBQztZQUM1QixLQUFLLGVBQWU7Z0JBQ2hCLE9BQU8sOEJBQUMseUNBQW1CLG9CQUFLLElBQUksQ0FBQyxLQUFLLEVBQU0sSUFBSSxDQUFDLEtBQUssRUFBRyxDQUFDO1NBQ3JFO0lBRUwsQ0FBQztJQUVPLGNBQWMsQ0FBQyxZQUEwQjtRQUM3QyxJQUFJLENBQUMsUUFBUSxpQ0FBSyxJQUFJLENBQUMsS0FBSyxLQUFFLFlBQVksSUFBRSxDQUFDO0lBQ2pELENBQUM7Q0FFSjtBQTdHRCxvQ0E2R0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtUb2FzdGVyfSBmcm9tICcuLi90b2FzdGVyL1RvYXN0ZXInO1xuaW1wb3J0IHtGaXJlYmFzZX0gZnJvbSAnLi4vLi4vZmlyZWJhc2UvRmlyZWJhc2UnO1xuaW1wb3J0IHtHcm91cCwgR3JvdXBOYW1lU3RyLCBHcm91cHN9IGZyb20gJy4uLy4uL2RhdGFzdG9yZS9zaGFyaW5nL2RiL0dyb3Vwcyc7XG5pbXBvcnQge1JlbGVhc2VyfSBmcm9tICcuLi8uLi9yZWFjdG9yL0V2ZW50TGlzdGVuZXInO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge0RvY30gZnJvbSAnLi4vLi4vbWV0YWRhdGEvRG9jJztcbmltcG9ydCB7UHJlY29uZGl0aW9uc30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9QcmVjb25kaXRpb25zJztcbmltcG9ydCB7XG4gICAgQ29udGFjdFByb2ZpbGUsXG4gICAgR3JvdXBTaGFyaW5nUmVjb3JkcyxcbiAgICBNZW1iZXJSZWNvcmRcbn0gZnJvbSAnLi9Hcm91cFNoYXJpbmdSZWNvcmRzJztcbmltcG9ydCB7R3JvdXBTaGFyaW5nQ29udHJvbCwgSW52aXRhdGlvblJlcXVlc3R9IGZyb20gJy4vR3JvdXBTaGFyaW5nQ29udHJvbCc7XG5pbXBvcnQge0xvZ2luUmVxdWlyZWR9IGZyb20gXCIuL0xvZ2luUmVxdWlyZWRcIjtcbmltcG9ydCB7R3JvdXBOYW1lc30gZnJvbSBcIi4uLy4uL2RhdGFzdG9yZS9zaGFyaW5nL2RiL0dyb3VwTmFtZXNcIjtcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG4vKipcbiAqIEFsbG93IHRoZSB1c2VyIHRvIHNlbGVjdCBmcm9tIG9uZSBvciBtb3JlIG9mIHRoZWlyIGNvbnRhY3RzLlxuICovXG5leHBvcnQgY2xhc3MgR3JvdXBTaGFyaW5nIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgcmVsZWFzZXIgPSBuZXcgUmVsZWFzZXIoKTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJUHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMub25Db25uZWN0aXZpdHkgPSB0aGlzLm9uQ29ubmVjdGl2aXR5LmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGNvbm5lY3Rpdml0eTogJ3Vua25vd24nLFxuICAgICAgICAgICAgY29udGFjdFByb2ZpbGVzOiBbXSxcbiAgICAgICAgICAgIG1lbWJlcnM6IFtdLFxuICAgICAgICAgICAgZ3JvdXBzOiBbXSxcbiAgICAgICAgfTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBjb21wb25lbnREaWRNb3VudCgpOiB2b2lkIHtcblxuICAgICAgICBjb25zdCBlcnJvckhhbmRsZXIgPSAoZXJyOiBFcnJvcikgPT4ge1xuICAgICAgICAgICAgY29uc3QgbXNnID0gXCJVbmFibGUgdG8gZ2V0IGdyb3VwIG5vdGlmaWNhdGlvbnM6IFwiO1xuICAgICAgICAgICAgbG9nLmVycm9yKG1zZywgZXJyKTtcbiAgICAgICAgICAgIFRvYXN0ZXIuZXJyb3IobXNnLCBlcnIubWVzc2FnZSk7XG4gICAgICAgIH07XG5cblxuICAgICAgICBjb25zdCBjb250YWN0c0hhbmRsZXIgPSAoY29udGFjdFByb2ZpbGVzOiBSZWFkb25seUFycmF5PENvbnRhY3RQcm9maWxlPikgPT4ge1xuXG4gICAgICAgICAgICBpZiAodGhpcy5yZWxlYXNlci5yZWxlYXNlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Li4udGhpcy5zdGF0ZSwgY29udGFjdFByb2ZpbGVzfSk7XG5cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBtZW1iZXJzSGFuZGxlciA9IChtZW1iZXJzOiBSZWFkb25seUFycmF5PE1lbWJlclJlY29yZD4pID0+IHtcblxuICAgICAgICAgICAgaWYgKHRoaXMucmVsZWFzZXIucmVsZWFzZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoey4uLnRoaXMuc3RhdGUsIG1lbWJlcnN9KTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGdyb3Vwc0hhbmRsZXIgPSAoZ3JvdXBzOiBSZWFkb25seUFycmF5PEdyb3VwPikgPT4ge1xuXG4gICAgICAgICAgICBpZiAodGhpcy5yZWxlYXNlci5yZWxlYXNlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Li4udGhpcy5zdGF0ZSwgZ3JvdXBzfSk7XG5cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBkb0hhbmRsZSA9IGFzeW5jICgpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IEZpcmViYXNlLmN1cnJlbnRVc2VyKCk7XG5cbiAgICAgICAgICAgIGlmICghIHVzZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uQ29ubmVjdGl2aXR5KCd1bmF1dGhlbnRpY2F0ZWQnKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMub25Db25uZWN0aXZpdHkoJ2F1dGhlbnRpY2F0ZWQnKTtcblxuICAgICAgICAgICAgY29uc3QgZG9jTWV0YSA9IHRoaXMucHJvcHMuZG9jLmRvY01ldGE7XG4gICAgICAgICAgICBjb25zdCBmaW5nZXJwcmludCA9IGRvY01ldGEuZG9jSW5mby5maW5nZXJwcmludDtcblxuICAgICAgICAgICAgY29uc3QgdWlkID0gdXNlciEudWlkO1xuXG4gICAgICAgICAgICBjb25zdCBncm91cElEID0gR3JvdXBzLmNyZWF0ZUlERm9yS2V5KHVpZCwgZmluZ2VycHJpbnQpO1xuXG4gICAgICAgICAgICBHcm91cFNoYXJpbmdSZWNvcmRzLmZldGNoKGdyb3VwSUQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhY3RzID0+IGNvbnRhY3RzSGFuZGxlcihjb250YWN0cyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lbWJlcnMgPT4gbWVtYmVyc0hhbmRsZXIobWVtYmVycyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwcyA9PiBncm91cHNIYW5kbGVyKGdyb3VwcyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVyciA9PiBlcnJvckhhbmRsZXIoZXJyKSk7XG5cbiAgICAgICAgfTtcblxuICAgICAgICBkb0hhbmRsZSgpLmNhdGNoKGVyciA9PiBlcnJvckhhbmRsZXIoZXJyKSk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgY29tcG9uZW50V2lsbFVubW91bnQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucmVsZWFzZXIucmVsZWFzZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgc3dpdGNoICh0aGlzLnN0YXRlLmNvbm5lY3Rpdml0eSkge1xuXG4gICAgICAgICAgICBjYXNlIFwidW5rbm93blwiOlxuICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2Lz47XG4gICAgICAgICAgICBjYXNlIFwidW5hdXRoZW50aWNhdGVkXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxMb2dpblJlcXVpcmVkLz47XG4gICAgICAgICAgICBjYXNlIFwiYXV0aGVudGljYXRlZFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiA8R3JvdXBTaGFyaW5nQ29udHJvbCB7Li4udGhpcy5wcm9wc30gey4uLnRoaXMuc3RhdGV9Lz47XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHByaXZhdGUgb25Db25uZWN0aXZpdHkoY29ubmVjdGl2aXR5OiBDb25uZWN0aXZpdHkpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Li4udGhpcy5zdGF0ZSwgY29ubmVjdGl2aXR5fSk7XG4gICAgfVxuXG59XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICAgIHJlYWRvbmx5IGRvYzogRG9jO1xuICAgIHJlYWRvbmx5IG9uQ2FuY2VsOiAoKSA9PiB2b2lkO1xuICAgIHJlYWRvbmx5IG9uRG9uZTogKGludml0YXRpb246IEludml0YXRpb25SZXF1ZXN0LCBncm91cHM6IFJlYWRvbmx5QXJyYXk8R3JvdXBOYW1lU3RyPikgPT4gdm9pZDtcbiAgICByZWFkb25seSBvbkRlbGV0ZTogKG1lbWJlcjogTWVtYmVyUmVjb3JkKSA9PiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbiAgICByZWFkb25seSBjb250YWN0UHJvZmlsZXM6IFJlYWRvbmx5QXJyYXk8Q29udGFjdFByb2ZpbGU+O1xuICAgIHJlYWRvbmx5IGdyb3VwczogUmVhZG9ubHlBcnJheTxHcm91cD47XG4gICAgcmVhZG9ubHkgbWVtYmVyczogUmVhZG9ubHlBcnJheTxNZW1iZXJSZWNvcmQ+O1xuICAgIHJlYWRvbmx5IGNvbm5lY3Rpdml0eTogQ29ubmVjdGl2aXR5O1xufVxuXG5leHBvcnQgdHlwZSBDb25uZWN0aXZpdHkgPSAndW5rbm93bicgfCAndW5hdXRoZW50aWNhdGVkJyB8ICdhdXRoZW50aWNhdGVkJztcbiJdfQ==