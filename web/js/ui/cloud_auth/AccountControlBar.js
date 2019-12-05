"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Button_1 = __importDefault(require("reactstrap/lib/Button"));
const RendererAnalytics_1 = require("../../ga/RendererAnalytics");
const LogoutButton = (props) => {
    return react_1.default.createElement(Button_1.default, { id: "cloud-sync-logout", color: "secondary", outline: true, size: "sm", onClick: () => props.onLogout(), className: "ml-1" },
        react_1.default.createElement("i", { className: "fas fa-sign-out-alt mr-1" }),
        "Logout");
};
const UserImage = (props) => {
    if (props.userInfo.photoURL) {
        return react_1.default.createElement("div", { style: { height: '100px', width: '100px' } },
            react_1.default.createElement("img", { className: "rounded border m-auto", style: {
                    maxHeight: '100px',
                    maxWidth: '100px'
                }, src: props.userInfo.photoURL }));
    }
    else {
        return react_1.default.createElement("div", null);
    }
};
const InviteUsersButton = (props) => {
    return react_1.default.createElement(Button_1.default, { id: "cloud-sync-invite-users", color: "secondary", size: "sm", onClick: () => props.onInvite() },
        react_1.default.createElement("i", { className: "fas fa-user-plus mr-1" }),
        "Invite Users");
};
const ViewPlansAndPricingButton = () => {
    const handler = () => {
        RendererAnalytics_1.RendererAnalytics.event({ category: 'premium', action: 'view-plans-and-pricing-button' });
        document.location.hash = "plans";
    };
    return react_1.default.createElement(Button_1.default, { color: "success", size: "md", onClick: handler },
        react_1.default.createElement("i", { className: "fas fa-certificate" }),
        "\u00A0 View Plans and Pricing");
};
class AccountControlBar extends react_1.default.PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        const props = this.props;
        return (react_1.default.createElement("div", null,
            react_1.default.createElement("div", null,
                react_1.default.createElement("div", { style: {
                        display: 'flex',
                        verticalAlign: 'top'
                    } },
                    react_1.default.createElement("div", { className: "pl-0 p-0 pr-2" },
                        react_1.default.createElement(UserImage, Object.assign({}, props))),
                    react_1.default.createElement("div", { className: "p-1" },
                        react_1.default.createElement("div", { style: { fontWeight: 'bold' } }, this.props.userInfo.displayName || 'Anonymous'),
                        react_1.default.createElement("div", { className: "text-muted", style: { fontSize: "14px" } }, this.props.userInfo.email || ''),
                        react_1.default.createElement("div", { style: { display: 'block', whiteSpace: 'nowrap' }, className: "mt-2" },
                            react_1.default.createElement(InviteUsersButton, Object.assign({}, props)),
                            react_1.default.createElement(LogoutButton, Object.assign({}, props))))),
                react_1.default.createElement("div", { className: "mt-2 pt-2 border-top text-center" },
                    react_1.default.createElement(ViewPlansAndPricingButton, null)))));
    }
}
exports.AccountControlBar = AccountControlBar;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNjb3VudENvbnRyb2xCYXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJBY2NvdW50Q29udHJvbEJhci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxrREFBMEI7QUFFMUIsbUVBQTJDO0FBQzNDLGtFQUE2RDtBQUU3RCxNQUFNLFlBQVksR0FBRyxDQUFDLEtBQWEsRUFBRSxFQUFFO0lBRW5DLE9BQU8sOEJBQUMsZ0JBQU0sSUFBQyxFQUFFLEVBQUMsbUJBQW1CLEVBQ3RCLEtBQUssRUFBQyxXQUFXLEVBQ2pCLE9BQU8sUUFDUCxJQUFJLEVBQUMsSUFBSSxFQUNULE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEVBQy9CLFNBQVMsRUFBQyxNQUFNO1FBRTNCLHFDQUFHLFNBQVMsRUFBQywwQkFBMEIsR0FBRTtpQkFJcEMsQ0FBQztBQUVkLENBQUMsQ0FBQztBQUVGLE1BQU0sU0FBUyxHQUFHLENBQUMsS0FBYSxFQUFFLEVBQUU7SUFFaEMsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRTtRQUV6QixPQUFPLHVDQUFLLEtBQUssRUFBRSxFQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBQztZQUVoRCx1Q0FBSyxTQUFTLEVBQUMsdUJBQXVCLEVBQ2pDLEtBQUssRUFBRTtvQkFDSCxTQUFTLEVBQUUsT0FBTztvQkFDbEIsUUFBUSxFQUFFLE9BQU87aUJBQ3BCLEVBQ0QsR0FBRyxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLENBQ2xDLENBQUM7S0FDVjtTQUFNO1FBQ0gsT0FBTywwQ0FBTSxDQUFDO0tBQ2pCO0FBRUwsQ0FBQyxDQUFDO0FBRUYsTUFBTSxpQkFBaUIsR0FBRyxDQUFDLEtBQWEsRUFBRSxFQUFFO0lBRXhDLE9BQU8sOEJBQUMsZ0JBQU0sSUFBQyxFQUFFLEVBQUMseUJBQXlCLEVBQzVCLEtBQUssRUFBQyxXQUFXLEVBQ2pCLElBQUksRUFBQyxJQUFJLEVBQ1QsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUU7UUFFMUMscUNBQUcsU0FBUyxFQUFDLHVCQUF1QixHQUFFO3VCQUlqQyxDQUFDO0FBRWQsQ0FBQyxDQUFDO0FBRUYsTUFBTSx5QkFBeUIsR0FBRyxHQUFHLEVBQUU7SUFFbkMsTUFBTSxPQUFPLEdBQUcsR0FBRyxFQUFFO1FBRWpCLHFDQUFpQixDQUFDLEtBQUssQ0FBQyxFQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLCtCQUErQixFQUFDLENBQUMsQ0FBQztRQUV4RixRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7SUFFckMsQ0FBQyxDQUFDO0lBRUYsT0FBTyw4QkFBQyxnQkFBTSxJQUFDLEtBQUssRUFBQyxTQUFTLEVBQ2YsSUFBSSxFQUFDLElBQUksRUFDVCxPQUFPLEVBQUUsT0FBTztRQUUzQixxQ0FBRyxTQUFTLEVBQUMsb0JBQW9CLEdBQUU7d0NBSTlCLENBQUM7QUFDZCxDQUFDLENBQUM7QUFFRixNQUFhLGlCQUFrQixTQUFRLGVBQUssQ0FBQyxhQUE2QjtJQUV0RSxZQUFZLEtBQWE7UUFDckIsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRWpCLENBQUM7SUFFTSxNQUFNO1FBSVQsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUV6QixPQUFPLENBRUg7WUFFSTtnQkFDSSx1Q0FBSyxLQUFLLEVBQUU7d0JBQ1IsT0FBTyxFQUFFLE1BQU07d0JBQ2YsYUFBYSxFQUFFLEtBQUs7cUJBQ3ZCO29CQUVHLHVDQUFLLFNBQVMsRUFBQyxlQUFlO3dCQUUxQiw4QkFBQyxTQUFTLG9CQUFLLEtBQUssRUFBRyxDQUVyQjtvQkFFTix1Q0FBSyxTQUFTLEVBQUMsS0FBSzt3QkFFaEIsdUNBQUssS0FBSyxFQUFFLEVBQUMsVUFBVSxFQUFFLE1BQU0sRUFBQyxJQUMzQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxXQUFXLElBQUksV0FBVyxDQUM3Qzt3QkFFTix1Q0FBSyxTQUFTLEVBQUMsWUFBWSxFQUFDLEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUMsSUFDaEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FDOUI7d0JBRU4sdUNBQUssS0FBSyxFQUFFLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFDLEVBQUUsU0FBUyxFQUFDLE1BQU07NEJBRWxFLDhCQUFDLGlCQUFpQixvQkFBSyxLQUFLLEVBQUc7NEJBRS9CLDhCQUFDLFlBQVksb0JBQUssS0FBSyxFQUFHLENBRXhCLENBRUosQ0FHSjtnQkFFTix1Q0FBSyxTQUFTLEVBQUMsa0NBQWtDO29CQUU3Qyw4QkFBQyx5QkFBeUIsT0FBRSxDQUUxQixDQUVKLENBRUosQ0FFVCxDQUFDO0lBRU4sQ0FBQztDQUVKO0FBbEVELDhDQWtFQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludCByZWFjdC9uby1tdWx0aS1jb21wOiAwLCByZWFjdC9wcm9wLXR5cGVzOiAwICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtVc2VySW5mb30gZnJvbSAnLi4vLi4vLi4vLi4vd2ViL2pzL2FwcHMvcmVwb3NpdG9yeS9hdXRoX2hhbmRsZXIvQXV0aEhhbmRsZXInO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdHN0cmFwL2xpYi9CdXR0b24nO1xuaW1wb3J0IHtSZW5kZXJlckFuYWx5dGljc30gZnJvbSAnLi4vLi4vZ2EvUmVuZGVyZXJBbmFseXRpY3MnO1xuXG5jb25zdCBMb2dvdXRCdXR0b24gPSAocHJvcHM6IElQcm9wcykgPT4ge1xuXG4gICAgcmV0dXJuIDxCdXR0b24gaWQ9XCJjbG91ZC1zeW5jLWxvZ291dFwiXG4gICAgICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgIG91dGxpbmVcbiAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHByb3BzLm9uTG9nb3V0KCl9XG4gICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtMVwiPlxuXG4gICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zaWduLW91dC1hbHQgbXItMVwiLz5cblxuICAgICAgICBMb2dvdXRcblxuICAgIDwvQnV0dG9uPjtcblxufTtcblxuY29uc3QgVXNlckltYWdlID0gKHByb3BzOiBJUHJvcHMpID0+IHtcblxuICAgIGlmIChwcm9wcy51c2VySW5mby5waG90b1VSTCkge1xuXG4gICAgICAgIHJldHVybiA8ZGl2IHN0eWxlPXt7aGVpZ2h0OiAnMTAwcHgnLCB3aWR0aDogJzEwMHB4J319PlxuXG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInJvdW5kZWQgYm9yZGVyIG0tYXV0b1wiXG4gICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6ICcxMDBweCcsXG4gICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzEwMHB4J1xuICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICBzcmM9e3Byb3BzLnVzZXJJbmZvLnBob3RvVVJMfS8+XG4gICAgICAgIDwvZGl2PjtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gPGRpdi8+O1xuICAgIH1cblxufTtcblxuY29uc3QgSW52aXRlVXNlcnNCdXR0b24gPSAocHJvcHM6IElQcm9wcykgPT4ge1xuXG4gICAgcmV0dXJuIDxCdXR0b24gaWQ9XCJjbG91ZC1zeW5jLWludml0ZS11c2Vyc1wiXG4gICAgICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcHJvcHMub25JbnZpdGUoKX0+XG5cbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXVzZXItcGx1cyBtci0xXCIvPlxuXG4gICAgICAgIEludml0ZSBVc2Vyc1xuXG4gICAgPC9CdXR0b24+O1xuXG59O1xuXG5jb25zdCBWaWV3UGxhbnNBbmRQcmljaW5nQnV0dG9uID0gKCkgPT4ge1xuXG4gICAgY29uc3QgaGFuZGxlciA9ICgpID0+IHtcblxuICAgICAgICBSZW5kZXJlckFuYWx5dGljcy5ldmVudCh7Y2F0ZWdvcnk6ICdwcmVtaXVtJywgYWN0aW9uOiAndmlldy1wbGFucy1hbmQtcHJpY2luZy1idXR0b24nfSk7XG5cbiAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaGFzaCA9IFwicGxhbnNcIjtcblxuICAgIH07XG5cbiAgICByZXR1cm4gPEJ1dHRvbiBjb2xvcj1cInN1Y2Nlc3NcIlxuICAgICAgICAgICAgICAgICAgIHNpemU9XCJtZFwiXG4gICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlcn0+XG5cbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNlcnRpZmljYXRlXCIvPlxuICAgICAgICAmbmJzcDtcbiAgICAgICAgVmlldyBQbGFucyBhbmQgUHJpY2luZ1xuXG4gICAgPC9CdXR0b24+O1xufTtcblxuZXhwb3J0IGNsYXNzIEFjY291bnRDb250cm9sQmFyIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuXG5cblxuICAgICAgICBjb25zdCBwcm9wcyA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgPGRpdj5cblxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ246ICd0b3AnXG4gICAgICAgICAgICAgICAgICAgIH19PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsLTAgcC0wIHByLTJcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxVc2VySW1hZ2Ugey4uLnByb3BzfS8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMVwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2ZvbnRXZWlnaHQ6ICdib2xkJ319PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy51c2VySW5mby5kaXNwbGF5TmFtZSB8fCAnQW5vbnltb3VzJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiIHN0eWxlPXt7Zm9udFNpemU6IFwiMTRweFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnVzZXJJbmZvLmVtYWlsIHx8ICcnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdibG9jaycsIHdoaXRlU3BhY2U6ICdub3dyYXAnfX0gY2xhc3NOYW1lPVwibXQtMlwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnZpdGVVc2Vyc0J1dHRvbiB7Li4ucHJvcHN9Lz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9nb3V0QnV0dG9uIHsuLi5wcm9wc30vPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yIHB0LTIgYm9yZGVyLXRvcCB0ZXh0LWNlbnRlclwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8Vmlld1BsYW5zQW5kUHJpY2luZ0J1dHRvbi8+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgKTtcblxuICAgIH1cblxufVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcblxuICAgIHJlYWRvbmx5IHVzZXJJbmZvOiBVc2VySW5mbztcblxuICAgIHJlYWRvbmx5IG9uSW52aXRlOiAoKSA9PiB2b2lkO1xuXG4gICAgcmVhZG9ubHkgb25Mb2dvdXQ6ICgpID0+IHZvaWQ7XG5cbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG59XG4iXX0=