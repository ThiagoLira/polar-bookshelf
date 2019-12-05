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
const Logger_1 = require("polar-shared/src/logger/Logger");
const CloudAuthButton_1 = require("../../../../web/js/ui/cloud_auth/CloudAuthButton");
const LinkDropdown_1 = require("./LinkDropdown");
const HelpDropdown_1 = require("./HelpDropdown");
const SettingsDropdown_1 = require("./SettingsDropdown");
const ChromeExtensionInstallButton_1 = require("../ChromeExtensionInstallButton");
const Notifications_1 = require("../../../../web/js/ui/notifications/Notifications");
const Platforms_1 = require("polar-shared/src/util/Platforms");
const RepoNavbar_1 = require("../RepoNavbar");
const UpgradeAccountButton_1 = require("./UpgradeAccountButton");
const log = Logger_1.Logger.create();
const Styles = {};
class RepoHeader extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const Settings = () => {
            const prefs = () => {
                const persistenceLayer = this.props.persistenceLayerManager.get();
                if (!persistenceLayer) {
                    return undefined;
                }
                return persistenceLayer.datastore.getPrefs().get().prefs;
            };
            return (React.createElement(SettingsDropdown_1.SettingsDropdown, { prefs: prefs, hidden: Platforms_1.Platforms.isMobile() }));
        };
        return (React.createElement("div", { className: "border-bottom" },
            React.createElement("div", { className: "ml-1 mr-1 mt-1", style: {
                    display: 'flex'
                } },
                React.createElement("div", null,
                    React.createElement(RepoNavbar_1.RepoNavbar, null)),
                React.createElement("div", { style: {
                        flexGrow: 1,
                        display: 'flex'
                    } },
                    React.createElement("div", { className: "ml-auto mt-auto mb-auto", style: { display: 'flex' } },
                        React.createElement(UpgradeAccountButton_1.UpgradeAccountButton, null),
                        React.createElement(ChromeExtensionInstallButton_1.ChromeExtensionInstallButton, null),
                        React.createElement(Notifications_1.Notifications, { persistenceLayerProvider: () => this.props.persistenceLayerManager.get() }),
                        React.createElement(CloudAuthButton_1.CloudAuthButton, { persistenceLayerManager: this.props.persistenceLayerManager }),
                        React.createElement(LinkDropdown_1.LinkDropdown, { hidden: Platforms_1.Platforms.isMobile() }),
                        React.createElement(HelpDropdown_1.HelpDropdown, null),
                        React.createElement(Settings, null))))));
    }
}
exports.RepoHeader = RepoHeader;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVwb0hlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlJlcG9IZWFkZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUMvQiwyREFBc0Q7QUFFdEQsc0ZBQWlGO0FBSWpGLGlEQUE0QztBQUM1QyxpREFBNEM7QUFDNUMseURBQW9EO0FBRXBELGtGQUE2RTtBQUM3RSxxRkFBZ0Y7QUFFaEYsK0RBQTBEO0FBQzFELDhDQUF5QztBQUN6QyxpRUFBNEQ7QUFFNUQsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLE1BQU0sTUFBTSxHQUFjLEVBRXpCLENBQUM7QUFLRixNQUFhLFVBQVcsU0FBUSxLQUFLLENBQUMsYUFBNkI7SUFFL0QsWUFBWSxLQUFhLEVBQUUsT0FBWTtRQUNuQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFTSxNQUFNO1FBRVQsTUFBTSxRQUFRLEdBQUcsR0FBRyxFQUFFO1lBRWxCLE1BQU0sS0FBSyxHQUFHLEdBQXNCLEVBQUU7Z0JBRWxDLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxHQUFHLEVBQUUsQ0FBQztnQkFFbEUsSUFBSSxDQUFFLGdCQUFnQixFQUFFO29CQUNwQixPQUFPLFNBQVMsQ0FBQztpQkFDcEI7Z0JBRUQsT0FBTyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBRTdELENBQUMsQ0FBQztZQUVGLE9BQU8sQ0FBRSxvQkFBQyxtQ0FBZ0IsSUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxxQkFBUyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUUsQ0FBQztRQUUvRSxDQUFDLENBQUM7UUFFRixPQUFPLENBRUgsNkJBQUssU0FBUyxFQUFDLGVBQWU7WUFFMUIsNkJBQUssU0FBUyxFQUFDLGdCQUFnQixFQUMxQixLQUFLLEVBQUU7b0JBQ0osT0FBTyxFQUFFLE1BQU07aUJBQ2pCO2dCQUVGO29CQUNJLG9CQUFDLHVCQUFVLE9BQUUsQ0FDWDtnQkFFTiw2QkFBSyxLQUFLLEVBQUU7d0JBQ0osUUFBUSxFQUFFLENBQUM7d0JBQ1gsT0FBTyxFQUFFLE1BQU07cUJBQ2pCO29CQUVGLDZCQUFLLFNBQVMsRUFBQyx5QkFBeUIsRUFDbkMsS0FBSyxFQUFFLEVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBQzt3QkFFekIsb0JBQUMsMkNBQW9CLE9BQUU7d0JBRXZCLG9CQUFDLDJEQUE0QixPQUFFO3dCQUUvQixvQkFBQyw2QkFBYSxJQUFDLHdCQUF3QixFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsdUJBQXVCLENBQUMsR0FBRyxFQUFFLEdBQUc7d0JBRTFGLG9CQUFDLGlDQUFlLElBQUMsdUJBQXVCLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsR0FBSTt3QkFFaEYsb0JBQUMsMkJBQVksSUFBQyxNQUFNLEVBQUUscUJBQVMsQ0FBQyxRQUFRLEVBQUUsR0FBRzt3QkFFN0Msb0JBQUMsMkJBQVksT0FBRTt3QkFFZixvQkFBQyxRQUFRLE9BQUUsQ0FFVCxDQUVKLENBRUosQ0FFSixDQUVULENBQUM7SUFFTixDQUFDO0NBRUo7QUF6RUQsZ0NBeUVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge0lTdHlsZU1hcH0gZnJvbSAnLi4vLi4vLi4vLi4vd2ViL2pzL3JlYWN0L0lTdHlsZU1hcCc7XG5pbXBvcnQge0Nsb3VkQXV0aEJ1dHRvbn0gZnJvbSAnLi4vLi4vLi4vLi4vd2ViL2pzL3VpL2Nsb3VkX2F1dGgvQ2xvdWRBdXRoQnV0dG9uJztcbmltcG9ydCB7UGVyc2lzdGVuY2VMYXllck1hbmFnZXJ9IGZyb20gJy4uLy4uLy4uLy4uL3dlYi9qcy9kYXRhc3RvcmUvUGVyc2lzdGVuY2VMYXllck1hbmFnZXInO1xuaW1wb3J0IHtSZXBvU2lkZWJhcn0gZnJvbSAnLi4vUmVwb1NpZGViYXInO1xuaW1wb3J0IHtTcGxpdEJhciwgU3BsaXRCYXJSaWdodH0gZnJvbSAnLi4vU3BsaXRCYXInO1xuaW1wb3J0IHtMaW5rRHJvcGRvd259IGZyb20gJy4vTGlua0Ryb3Bkb3duJztcbmltcG9ydCB7SGVscERyb3Bkb3dufSBmcm9tICcuL0hlbHBEcm9wZG93bic7XG5pbXBvcnQge1NldHRpbmdzRHJvcGRvd259IGZyb20gJy4vU2V0dGluZ3NEcm9wZG93bic7XG5pbXBvcnQge1ByZWZzfSBmcm9tICcuLi8uLi8uLi8uLi93ZWIvanMvdXRpbC9wcmVmcy9QcmVmcyc7XG5pbXBvcnQge0Nocm9tZUV4dGVuc2lvbkluc3RhbGxCdXR0b259IGZyb20gJy4uL0Nocm9tZUV4dGVuc2lvbkluc3RhbGxCdXR0b24nO1xuaW1wb3J0IHtOb3RpZmljYXRpb25zfSBmcm9tICcuLi8uLi8uLi8uLi93ZWIvanMvdWkvbm90aWZpY2F0aW9ucy9Ob3RpZmljYXRpb25zJztcbmltcG9ydCB7U3BsaXRCYXJMZWZ0fSBmcm9tICcuLi9TcGxpdEJhckxlZnQnO1xuaW1wb3J0IHtQbGF0Zm9ybXN9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL3V0aWwvUGxhdGZvcm1zXCI7XG5pbXBvcnQge1JlcG9OYXZiYXJ9IGZyb20gXCIuLi9SZXBvTmF2YmFyXCI7XG5pbXBvcnQge1VwZ3JhZGVBY2NvdW50QnV0dG9ufSBmcm9tIFwiLi9VcGdyYWRlQWNjb3VudEJ1dHRvblwiO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbmNvbnN0IFN0eWxlczogSVN0eWxlTWFwID0ge1xuXG59O1xuXG4vKipcbiAqIFNpbXBsZSBoZWFkZXIgZm9yIHRoZSByZXBvc2l0b3J5IHdoaWNoIHN1cHBvcnRzIGFyYml0cmFyeSBjaGlsZHJlbi5cbiAqL1xuZXhwb3J0IGNsYXNzIFJlcG9IZWFkZXIgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzLCBjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgY29uc3QgU2V0dGluZ3MgPSAoKSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IHByZWZzID0gKCk6IFByZWZzIHwgdW5kZWZpbmVkID0+IHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHBlcnNpc3RlbmNlTGF5ZXIgPSB0aGlzLnByb3BzLnBlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyLmdldCgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCEgcGVyc2lzdGVuY2VMYXllcikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBwZXJzaXN0ZW5jZUxheWVyLmRhdGFzdG9yZS5nZXRQcmVmcygpLmdldCgpLnByZWZzO1xuXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICByZXR1cm4gKCA8U2V0dGluZ3NEcm9wZG93biBwcmVmcz17cHJlZnN9IGhpZGRlbj17UGxhdGZvcm1zLmlzTW9iaWxlKCl9Lz4gKTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLWJvdHRvbVwiPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC0xIG1yLTEgbXQtMVwiXG4gICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnXG4gICAgICAgICAgICAgICAgICAgICB9fT5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlcG9OYXZiYXIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleEdyb3c6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnXG4gICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtYXV0byBtdC1hdXRvIG1iLWF1dG9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4J319PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFVwZ3JhZGVBY2NvdW50QnV0dG9uLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaHJvbWVFeHRlbnNpb25JbnN0YWxsQnV0dG9uLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOb3RpZmljYXRpb25zIHBlcnNpc3RlbmNlTGF5ZXJQcm92aWRlcj17KCkgPT4gdGhpcy5wcm9wcy5wZXJzaXN0ZW5jZUxheWVyTWFuYWdlci5nZXQoKX0vPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENsb3VkQXV0aEJ1dHRvbiBwZXJzaXN0ZW5jZUxheWVyTWFuYWdlcj17dGhpcy5wcm9wcy5wZXJzaXN0ZW5jZUxheWVyTWFuYWdlcn0gLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rRHJvcGRvd24gaGlkZGVuPXtQbGF0Zm9ybXMuaXNNb2JpbGUoKX0vPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlbHBEcm9wZG93bi8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2V0dGluZ3MvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICApO1xuXG4gICAgfVxuXG59XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICAgIHJlYWRvbmx5IHBlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyOiBQZXJzaXN0ZW5jZUxheWVyTWFuYWdlcjtcbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG5cbn1cbiJdfQ==