"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const GroupMemberInvitations_1 = require("../../datastore/sharing/db/GroupMemberInvitations");
const Logger_1 = require("polar-shared/src/logger/Logger");
const Toaster_1 = require("../toaster/Toaster");
const NotificationButton_1 = require("./NotificationButton");
const Platforms_1 = require("polar-shared/src/util/Platforms");
const log = Logger_1.Logger.create();
class Notifications extends react_1.default.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            invitations: []
        };
        GroupMemberInvitations_1.GroupMemberInvitations.onSnapshot(invitations => {
            console.log("Got invitations: ", invitations);
            this.setState({ invitations });
        }).catch(err => {
            const msg = "Unable to get group notifications: ";
            log.error(msg, err);
            Toaster_1.Toaster.error(msg, err.message);
        });
    }
    render() {
        if (Platforms_1.Platforms.isMobile()) {
            return react_1.default.createElement("div", null);
        }
        return (react_1.default.createElement(NotificationButton_1.NotificationButton, { persistenceLayerProvider: this.props.persistenceLayerProvider, invitations: this.state.invitations }));
    }
}
exports.Notifications = Notifications;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm90aWZpY2F0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIk5vdGlmaWNhdGlvbnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsa0RBQTBCO0FBRTFCLDhGQUF5RjtBQUV6RiwyREFBc0Q7QUFDdEQsZ0RBQTJDO0FBQzNDLDZEQUF3RDtBQUN4RCwrREFBMEQ7QUFFMUQsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLE1BQWEsYUFBYyxTQUFRLGVBQUssQ0FBQyxhQUE2QjtJQUVsRSxZQUFZLEtBQWE7UUFDckIsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRWIsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNULFdBQVcsRUFBRSxFQUFFO1NBQ2xCLENBQUM7UUFFRiwrQ0FBc0IsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFFNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxXQUFXLENBQUMsQ0FBQztZQUU5QyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsQ0FBQztRQUVqQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDWCxNQUFNLEdBQUcsR0FBRyxxQ0FBcUMsQ0FBQztZQUNsRCxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUNwQixpQkFBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3BDLENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQztJQUVNLE1BQU07UUFFVCxJQUFJLHFCQUFTLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDdEIsT0FBTywwQ0FBTSxDQUFDO1NBQ2pCO1FBRUQsT0FBTyxDQUVILDhCQUFDLHVDQUFrQixJQUFDLHdCQUF3QixFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsd0JBQXdCLEVBQzdELFdBQVcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxDQUU3RCxDQUFDO0lBRU4sQ0FBQztDQUdKO0FBdkNELHNDQXVDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0dyb3VwTWVtYmVySW52aXRhdGlvbn0gZnJvbSAnLi4vLi4vZGF0YXN0b3JlL3NoYXJpbmcvZGIvR3JvdXBNZW1iZXJJbnZpdGF0aW9ucyc7XG5pbXBvcnQge0dyb3VwTWVtYmVySW52aXRhdGlvbnN9IGZyb20gJy4uLy4uL2RhdGFzdG9yZS9zaGFyaW5nL2RiL0dyb3VwTWVtYmVySW52aXRhdGlvbnMnO1xuaW1wb3J0IHtQZXJzaXN0ZW5jZUxheWVyUHJvdmlkZXJ9IGZyb20gJy4uLy4uL2RhdGFzdG9yZS9QZXJzaXN0ZW5jZUxheWVyJztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL2xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IHtUb2FzdGVyfSBmcm9tICcuLi90b2FzdGVyL1RvYXN0ZXInO1xuaW1wb3J0IHtOb3RpZmljYXRpb25CdXR0b259IGZyb20gJy4vTm90aWZpY2F0aW9uQnV0dG9uJztcbmltcG9ydCB7UGxhdGZvcm1zfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy91dGlsL1BsYXRmb3Jtc1wiO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbmV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb25zIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGludml0YXRpb25zOiBbXVxuICAgICAgICB9O1xuXG4gICAgICAgIEdyb3VwTWVtYmVySW52aXRhdGlvbnMub25TbmFwc2hvdChpbnZpdGF0aW9ucyA9PiB7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiR290IGludml0YXRpb25zOiBcIiwgaW52aXRhdGlvbnMpO1xuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtpbnZpdGF0aW9uc30pO1xuXG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICBjb25zdCBtc2cgPSBcIlVuYWJsZSB0byBnZXQgZ3JvdXAgbm90aWZpY2F0aW9uczogXCI7XG4gICAgICAgICAgICBsb2cuZXJyb3IobXNnLCBlcnIpO1xuICAgICAgICAgICAgVG9hc3Rlci5lcnJvcihtc2csIGVyci5tZXNzYWdlKTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuXG4gICAgICAgIGlmIChQbGF0Zm9ybXMuaXNNb2JpbGUoKSkge1xuICAgICAgICAgICAgcmV0dXJuIDxkaXYvPjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgIDxOb3RpZmljYXRpb25CdXR0b24gcGVyc2lzdGVuY2VMYXllclByb3ZpZGVyPXt0aGlzLnByb3BzLnBlcnNpc3RlbmNlTGF5ZXJQcm92aWRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW52aXRhdGlvbnM9e3RoaXMuc3RhdGUuaW52aXRhdGlvbnN9Lz5cblxuICAgICAgICApO1xuXG4gICAgfVxuXG5cbn1cblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgcmVhZG9ubHkgcGVyc2lzdGVuY2VMYXllclByb3ZpZGVyOiBQZXJzaXN0ZW5jZUxheWVyUHJvdmlkZXI7XG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xuICAgIHJlYWRvbmx5IGludml0YXRpb25zOiBSZWFkb25seUFycmF5PEdyb3VwTWVtYmVySW52aXRhdGlvbj47XG59XG4iXX0=