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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const CloudLoginModal_1 = require("./CloudLoginModal");
const Firebase_1 = require("../../firebase/Firebase");
const firebase = __importStar(require("../../firebase/lib/firebase"));
const Logger_1 = require("polar-shared/src/logger/Logger");
const CloudSyncConfiguredModal_1 = require("./CloudSyncConfiguredModal");
const RendererAnalytics_1 = require("../../ga/RendererAnalytics");
const Nav_1 = require("../util/Nav");
const InviteUsersModal_1 = require("./InviteUsersModal");
const Invitations_1 = require("../../datastore/Invitations");
const URLs_1 = require("polar-shared/src/util/URLs");
const EnableCloudSyncButton_1 = require("./EnableCloudSyncButton");
const AccountDropdown_1 = require("./AccountDropdown");
const AuthHandler_1 = require("../../apps/repository/auth_handler/AuthHandler");
const AccountControlDropdown_1 = require("./AccountControlDropdown");
const log = Logger_1.Logger.create();
class CloudAuthButton extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.enableCloudSync = this.enableCloudSync.bind(this);
        let stage;
        if (document.location.hash === '#login') {
            RendererAnalytics_1.RendererAnalytics.event({ category: 'cloud', action: 'login' });
            stage = 'login';
        }
        if (document.location.hash === "#configured") {
            RendererAnalytics_1.RendererAnalytics.event({ category: 'cloud', action: 'configured' });
            stage = 'configured';
        }
        this.state = {
            mode: 'none',
            stage
        };
        log.info("auth state: ", this.state);
        Firebase_1.Firebase.init();
        firebase.auth()
            .onAuthStateChanged((user) => this.onAuth(user), (err) => this.onAuthError(err));
    }
    render() {
        const AccountButton = () => {
            if (this.state.userInfo) {
                return react_1.default.createElement(AccountControlDropdown_1.AccountControlDropdown, { userInfo: this.state.userInfo, onInvite: () => this.changeAuthStage('invite'), onLogout: () => this.logout() });
            }
            else {
                return react_1.default.createElement(AccountDropdown_1.AccountDropdown, { onInvite: () => this.changeAuthStage('invite'), onLogout: () => this.logout() });
            }
        };
        if (this.state.mode === 'needs-auth') {
            return (react_1.default.createElement("div", null,
                react_1.default.createElement(EnableCloudSyncButton_1.EnableCloudSyncButton, { onClick: () => this.enableCloudSync() }),
                react_1.default.createElement(CloudLoginModal_1.CloudLoginModal, { isOpen: this.state.stage === 'login', onCancel: () => this.changeAuthStage() })));
        }
        else if (this.state.mode === 'authenticated') {
            return (react_1.default.createElement("div", null,
                react_1.default.createElement(CloudSyncConfiguredModal_1.CloudSyncConfiguredModal, { isOpen: this.state.stage === 'configured', onCancel: () => this.changeAuthStage() }),
                react_1.default.createElement(InviteUsersModal_1.InviteUsersModal, { isOpen: this.state.stage === 'invite', onCancel: () => this.changeAuthStage(), onInvite: (emailAddresses) => this.onInvitedUsers(emailAddresses) }),
                react_1.default.createElement(AccountButton, null)));
        }
        else {
            return (react_1.default.createElement("div", null));
        }
    }
    logout() {
        this.props.persistenceLayerManager.reset();
        firebase.auth().signOut()
            .then(() => {
            window.location.href = Nav_1.Nav.createHashURL('logout');
            window.location.reload();
        })
            .catch(err => log.error("Unable to logout: ", err));
    }
    onInvitedUsers(emailAddresses) {
        const handleInvitedUsers = () => __awaiter(this, void 0, void 0, function* () {
            yield Invitations_1.Invitations.sendInvites(...emailAddresses);
            this.changeAuthStage();
        });
        handleInvitedUsers()
            .catch(err => log.error("Unable to invite users: ", err));
    }
    enableCloudSync() {
        this.changeAuthStage('login');
    }
    changeAuthStage(stage) {
        if (stage === 'login') {
            const base = URLs_1.URLs.toBase(document.location.href);
            const newLocation = new URL('/apps/repository/login.html', base).toString();
            window.location.href = newLocation;
            return;
        }
        if (stage) {
            RendererAnalytics_1.RendererAnalytics.event({ category: 'cloud', action: 'stage-' + stage });
            document.location.hash = stage;
        }
        else {
            document.location.hash = '';
        }
        this.setState({
            mode: this.state.mode,
            stage
        });
    }
    onAuth(user) {
        AuthHandler_1.AuthHandlers.get().userInfo()
            .then((userInfo) => {
            let mode = 'needs-auth';
            if (user) {
                mode = 'authenticated';
            }
            this.setState({
                mode,
                userInfo: userInfo.getOrUndefined()
            });
        })
            .catch(err => log.error("Unable to get user info: ", err));
    }
    onAuthError(err) {
        log.error("Authentication error: ", err);
    }
}
exports.CloudAuthButton = CloudAuthButton;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2xvdWRBdXRoQnV0dG9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQ2xvdWRBdXRoQnV0dG9uLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxrREFBMEI7QUFDMUIsdURBQWtEO0FBQ2xELHNEQUFpRDtBQUNqRCxzRUFBd0Q7QUFDeEQsMkRBQXNEO0FBRXRELHlFQUFvRTtBQUNwRSxrRUFBNkQ7QUFDN0QscUNBQWdDO0FBQ2hDLHlEQUFvRDtBQUNwRCw2REFBd0Q7QUFDeEQscURBQWdEO0FBQ2hELG1FQUE4RDtBQUM5RCx1REFBa0Q7QUFDbEQsZ0ZBQXNGO0FBQ3RGLHFFQUFnRTtBQUVoRSxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFNUIsTUFBYSxlQUFnQixTQUFRLGVBQUssQ0FBQyxTQUF5QjtJQUVoRSxZQUFZLEtBQWE7UUFDckIsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRWIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV2RCxJQUFJLEtBQTRCLENBQUM7UUFFakMsSUFBSSxRQUFRLENBQUMsUUFBUyxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7WUFDdEMscUNBQWlCLENBQUMsS0FBSyxDQUFDLEVBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFDLENBQUMsQ0FBQztZQUM5RCxLQUFLLEdBQUcsT0FBTyxDQUFDO1NBQ25CO1FBRUQsSUFBSSxRQUFRLENBQUMsUUFBUyxDQUFDLElBQUksS0FBSyxhQUFhLEVBQUU7WUFDM0MscUNBQWlCLENBQUMsS0FBSyxDQUFDLEVBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFDLENBQUMsQ0FBQztZQUNuRSxLQUFLLEdBQUcsWUFBWSxDQUFDO1NBQ3hCO1FBRUQsSUFBSSxDQUFDLEtB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Q0FBQztTQUNoQztRQUVELElBQUksQ0FBQyxRQUFRLENBQUM7WUFDVixJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJO1lBQ3JCLEtBQUs7U0FDUixDQUFDLENBQUM7SUFFUCxDQUFDO0lBRU8sTUFBTSxDQUFDLElBQTBCO1FBRXJDLDBCQUFZLENBQUMsR0FBRyxFQUFFLENBQUMsUUFBUSxFQUFFO2FBQ3hCLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBRWYsSUFBSSxJQUFJLEdBQWEsWUFBWSxDQUFDO1lBRWxDLElBQUksSUFBSSxFQUFFO2dCQUNOLElBQUksR0FBRyxlQUFlLENBQUM7YUFDMUI7WUFFRCxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUNWLElBQUk7Z0JBQ0osUUFBUSxFQUFFLFFBQVEsQ0FBQyxjQUFjLEVBQUU7YUFDdEMsQ0FBQyxDQUFDO1FBR1AsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQywyQkFBMkIsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBRW5FLENBQUM7SUFFTyxXQUFXLENBQUMsR0FBd0I7UUFDeEMsR0FBRyxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUM3QyxDQUFDO0NBRUo7QUFwTEQsMENBb0xDIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50IHJlYWN0L25vLW11bHRpLWNvbXA6IDAsIHJlYWN0L3Byb3AtdHlwZXM6IDAgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0Nsb3VkTG9naW5Nb2RhbH0gZnJvbSAnLi9DbG91ZExvZ2luTW9kYWwnO1xuaW1wb3J0IHtGaXJlYmFzZX0gZnJvbSAnLi4vLi4vZmlyZWJhc2UvRmlyZWJhc2UnO1xuaW1wb3J0ICogYXMgZmlyZWJhc2UgZnJvbSAnLi4vLi4vZmlyZWJhc2UvbGliL2ZpcmViYXNlJztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL2xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IHtQZXJzaXN0ZW5jZUxheWVyTWFuYWdlcn0gZnJvbSAnLi4vLi4vZGF0YXN0b3JlL1BlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyJztcbmltcG9ydCB7Q2xvdWRTeW5jQ29uZmlndXJlZE1vZGFsfSBmcm9tICcuL0Nsb3VkU3luY0NvbmZpZ3VyZWRNb2RhbCc7XG5pbXBvcnQge1JlbmRlcmVyQW5hbHl0aWNzfSBmcm9tICcuLi8uLi9nYS9SZW5kZXJlckFuYWx5dGljcyc7XG5pbXBvcnQge05hdn0gZnJvbSAnLi4vdXRpbC9OYXYnO1xuaW1wb3J0IHtJbnZpdGVVc2Vyc01vZGFsfSBmcm9tICcuL0ludml0ZVVzZXJzTW9kYWwnO1xuaW1wb3J0IHtJbnZpdGF0aW9uc30gZnJvbSAnLi4vLi4vZGF0YXN0b3JlL0ludml0YXRpb25zJztcbmltcG9ydCB7VVJMc30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL1VSTHMnO1xuaW1wb3J0IHtFbmFibGVDbG91ZFN5bmNCdXR0b259IGZyb20gJy4vRW5hYmxlQ2xvdWRTeW5jQnV0dG9uJztcbmltcG9ydCB7QWNjb3VudERyb3Bkb3dufSBmcm9tICcuL0FjY291bnREcm9wZG93bic7XG5pbXBvcnQge0F1dGhIYW5kbGVycywgVXNlckluZm99IGZyb20gJy4uLy4uL2FwcHMvcmVwb3NpdG9yeS9hdXRoX2hhbmRsZXIvQXV0aEhhbmRsZXInO1xuaW1wb3J0IHtBY2NvdW50Q29udHJvbERyb3Bkb3dufSBmcm9tICcuL0FjY291bnRDb250cm9sRHJvcGRvd24nO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbmV4cG9ydCBjbGFzcyBDbG91ZEF1dGhCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJUHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlQ2xvdWRTeW5jID0gdGhpcy5lbmFibGVDbG91ZFN5bmMuYmluZCh0aGlzKTtcblxuICAgICAgICBsZXQgc3RhZ2U6IEF1dGhTdGFnZSB8IHVuZGVmaW5lZDtcblxuICAgICAgICBpZiAoZG9jdW1lbnQubG9jYXRpb24hLmhhc2ggPT09ICcjbG9naW4nKSB7XG4gICAgICAgICAgICBSZW5kZXJlckFuYWx5dGljcy5ldmVudCh7Y2F0ZWdvcnk6ICdjbG91ZCcsIGFjdGlvbjogJ2xvZ2luJ30pO1xuICAgICAgICAgICAgc3RhZ2UgPSAnbG9naW4nO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRvY3VtZW50LmxvY2F0aW9uIS5oYXNoID09PSBcIiNjb25maWd1cmVkXCIpIHtcbiAgICAgICAgICAgIFJlbmRlcmVyQW5hbHl0aWNzLmV2ZW50KHtjYXRlZ29yeTogJ2Nsb3VkJywgYWN0aW9uOiAnY29uZmlndXJlZCd9KTtcbiAgICAgICAgICAgIHN0YWdlID0gJ2NvbmZpZ3VyZWQnO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIG1vZGU6ICdub25lJyxcbiAgICAgICAgICAgIHN0YWdlXG4gICAgICAgIH07XG5cbiAgICAgICAgbG9nLmluZm8oXCJhdXRoIHN0YXRlOiBcIiwgdGhpcy5zdGF0ZSk7XG5cbiAgICAgICAgRmlyZWJhc2UuaW5pdCgpO1xuXG4gICAgICAgIGZpcmViYXNlLmF1dGgoKVxuICAgICAgICAgICAgLm9uQXV0aFN0YXRlQ2hhbmdlZCgodXNlcikgPT4gdGhpcy5vbkF1dGgodXNlciksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlcnIpID0+IHRoaXMub25BdXRoRXJyb3IoZXJyKSk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuXG4gICAgICAgIGNvbnN0IEFjY291bnRCdXR0b24gPSAoKSA9PiB7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLnVzZXJJbmZvKSB7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gPEFjY291bnRDb250cm9sRHJvcGRvd24gdXNlckluZm89e3RoaXMuc3RhdGUudXNlckluZm99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSW52aXRlPXsoKSA9PiB0aGlzLmNoYW5nZUF1dGhTdGFnZSgnaW52aXRlJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTG9nb3V0PXsoKSA9PiB0aGlzLmxvZ291dCgpfS8+O1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxBY2NvdW50RHJvcGRvd24gb25JbnZpdGU9eygpID0+IHRoaXMuY2hhbmdlQXV0aFN0YWdlKCdpbnZpdGUnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkxvZ291dD17KCkgPT4gdGhpcy5sb2dvdXQoKX0vPjtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUubW9kZSA9PT0gJ25lZWRzLWF1dGgnKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPEVuYWJsZUNsb3VkU3luY0J1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLmVuYWJsZUNsb3VkU3luYygpfS8+XG5cbiAgICAgICAgICAgICAgICAgICAgPENsb3VkTG9naW5Nb2RhbCBpc09wZW49e3RoaXMuc3RhdGUuc3RhZ2UgPT09ICdsb2dpbid9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DYW5jZWw9eygpID0+IHRoaXMuY2hhbmdlQXV0aFN0YWdlKCl9Lz5cblxuXG4gICAgICAgICAgICAgICAgICAgIHsvKjxDbG91ZFN5bmNPdmVydmlld01vZGFsIGlzT3Blbj17dGhpcy5zdGF0ZS5zdGFnZSA9PT0gJ292ZXJ2aWV3J30qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qb25DYW5jZWw9eygpID0+IHRoaXMuY2hhbmdlQXV0aFN0YWdlKCl9Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKm9uU2lnbnVwPXsoKSA9PiB0aGlzLmNoYW5nZUF1dGhTdGFnZSgnbG9naW4nKX0vPiovfVxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLm1vZGUgPT09ICdhdXRoZW50aWNhdGVkJykge1xuXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPENsb3VkU3luY0NvbmZpZ3VyZWRNb2RhbCBpc09wZW49e3RoaXMuc3RhdGUuc3RhZ2UgPT09ICdjb25maWd1cmVkJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNhbmNlbD17KCkgPT4gdGhpcy5jaGFuZ2VBdXRoU3RhZ2UoKX0vPlxuXG4gICAgICAgICAgICAgICAgICAgIDxJbnZpdGVVc2Vyc01vZGFsIGlzT3Blbj17dGhpcy5zdGF0ZS5zdGFnZSA9PT0gJ2ludml0ZSd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2FuY2VsPXsoKSA9PiB0aGlzLmNoYW5nZUF1dGhTdGFnZSgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkludml0ZT17KGVtYWlsQWRkcmVzc2VzKSA9PiB0aGlzLm9uSW52aXRlZFVzZXJzKGVtYWlsQWRkcmVzc2VzKX0vPlxuXG4gICAgICAgICAgICAgICAgICAgIDxBY2NvdW50QnV0dG9uLz5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICApO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gKDxkaXY+PC9kaXY+KTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsb2dvdXQoKSB7XG5cbiAgICAgICAgdGhpcy5wcm9wcy5wZXJzaXN0ZW5jZUxheWVyTWFuYWdlci5yZXNldCgpO1xuXG4gICAgICAgIGZpcmViYXNlLmF1dGgoKS5zaWduT3V0KClcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcblxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gTmF2LmNyZWF0ZUhhc2hVUkwoJ2xvZ291dCcpO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcblxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gbG9nLmVycm9yKFwiVW5hYmxlIHRvIGxvZ291dDogXCIsIGVycikpO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkludml0ZWRVc2VycyhlbWFpbEFkZHJlc3NlczogUmVhZG9ubHlBcnJheTxzdHJpbmc+KSB7XG5cbiAgICAgICAgY29uc3QgaGFuZGxlSW52aXRlZFVzZXJzID0gYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgICAgICBhd2FpdCBJbnZpdGF0aW9ucy5zZW5kSW52aXRlcyguLi5lbWFpbEFkZHJlc3Nlcyk7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZUF1dGhTdGFnZSgpO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgaGFuZGxlSW52aXRlZFVzZXJzKClcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gbG9nLmVycm9yKFwiVW5hYmxlIHRvIGludml0ZSB1c2VyczogXCIsIGVycikpO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBlbmFibGVDbG91ZFN5bmMoKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlQXV0aFN0YWdlKCdsb2dpbicpO1xuICAgIH1cblxuICAgIHByaXZhdGUgY2hhbmdlQXV0aFN0YWdlKHN0YWdlPzogQXV0aFN0YWdlKSB7XG5cbiAgICAgICAgaWYgKHN0YWdlID09PSAnbG9naW4nKSB7XG4gICAgICAgICAgICBjb25zdCBiYXNlID0gVVJMcy50b0Jhc2UoZG9jdW1lbnQubG9jYXRpb24hLmhyZWYpO1xuICAgICAgICAgICAgY29uc3QgbmV3TG9jYXRpb24gPSBuZXcgVVJMKCcvYXBwcy9yZXBvc2l0b3J5L2xvZ2luLmh0bWwnLCBiYXNlKS50b1N0cmluZygpO1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBuZXdMb2NhdGlvbjtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdGFnZSkge1xuXG4gICAgICAgICAgICBSZW5kZXJlckFuYWx5dGljcy5ldmVudCh7Y2F0ZWdvcnk6ICdjbG91ZCcsIGFjdGlvbjogJ3N0YWdlLScgKyBzdGFnZX0pO1xuXG4gICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbiEuaGFzaCA9IHN0YWdlO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbiEuaGFzaCA9ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBtb2RlOiB0aGlzLnN0YXRlLm1vZGUsXG4gICAgICAgICAgICBzdGFnZVxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgb25BdXRoKHVzZXI6IGZpcmViYXNlLlVzZXIgfCBudWxsKSB7XG5cbiAgICAgICAgQXV0aEhhbmRsZXJzLmdldCgpLnVzZXJJbmZvKClcbiAgICAgICAgICAgIC50aGVuKCh1c2VySW5mbykgPT4ge1xuXG4gICAgICAgICAgICAgICAgbGV0IG1vZGU6IEF1dGhNb2RlID0gJ25lZWRzLWF1dGgnO1xuXG4gICAgICAgICAgICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kZSA9ICdhdXRoZW50aWNhdGVkJztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgbW9kZSxcbiAgICAgICAgICAgICAgICAgICAgdXNlckluZm86IHVzZXJJbmZvLmdldE9yVW5kZWZpbmVkKClcbiAgICAgICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBsb2cuZXJyb3IoXCJVbmFibGUgdG8gZ2V0IHVzZXIgaW5mbzogXCIsIGVycikpO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkF1dGhFcnJvcihlcnI6IGZpcmViYXNlLmF1dGguRXJyb3IpIHtcbiAgICAgICAgbG9nLmVycm9yKFwiQXV0aGVudGljYXRpb24gZXJyb3I6IFwiLCBlcnIpO1xuICAgIH1cblxufVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgICByZWFkb25seSBwZXJzaXN0ZW5jZUxheWVyTWFuYWdlcjogUGVyc2lzdGVuY2VMYXllck1hbmFnZXI7XG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xuICAgIHJlYWRvbmx5IG1vZGU6IEF1dGhNb2RlO1xuICAgIHJlYWRvbmx5IHN0YWdlPzogQXV0aFN0YWdlO1xuICAgIHJlYWRvbmx5IHVzZXJJbmZvPzogVXNlckluZm87XG59XG5cbnR5cGUgQXV0aE1vZGUgPSAnbm9uZScgfCAnbmVlZHMtYXV0aCcgfCAnYXV0aGVudGljYXRlZCc7XG5cbnR5cGUgQXV0aFN0YWdlID0gJ292ZXJ2aWV3JyB8ICdsb2dpbicgfCAnY29uZmlndXJlZCcgfCAnaW52aXRlJztcbiJdfQ==