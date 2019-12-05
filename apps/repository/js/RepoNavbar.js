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
const NavLogo_1 = require("./nav/NavLogo");
const GDPRNotice_1 = require("../../../web/js/ui/gdpr/GDPRNotice");
const SimpleTabs_1 = require("../../../web/js/ui/simple_tab/SimpleTabs");
const SimpleTab_1 = require("../../../web/js/ui/simple_tab/SimpleTab");
const FeatureToggle_1 = require("../../../web/js/ui/FeatureToggle");
const Styles = {
    sidebar: {
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: 'var(--white)',
        zIndex: 99999,
        height: 'calc(100%)',
    },
    subheader: {
        display: 'table'
    },
    subheaderItem: {}
};
class RepoNavbar extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            expanded: false
        };
    }
    render() {
        const display = this.state.expanded ? 'block' : 'none';
        const sidebarStyle = Object.assign({}, Styles.sidebar, { display });
        const NavButtons = () => (React.createElement("div", { style: { display: 'flex' } },
            React.createElement("div", { className: "mt-auto mb-auto" },
                React.createElement(NavLogo_1.NavLogo, null)),
            React.createElement("div", { className: "mt-auto mb-auto d-none-mobile" },
                React.createElement("div", { className: "ml-4" },
                    React.createElement(SimpleTabs_1.SimpleTabs, null,
                        React.createElement(SimpleTab_1.SimpleTab, { id: "nav-tab-document-repository", target: { pathname: "/", hash: "#" }, text: "Document Repository" }),
                        React.createElement(SimpleTab_1.SimpleTab, { id: "nav-tab-annotations", target: { pathname: "/", hash: "#annotations" }, text: "Annotations" }),
                        React.createElement(SimpleTab_1.SimpleTab, { id: "nav-tab-statistics", target: { pathname: "/", hash: "#stats" }, text: "Statistics" }),
                        React.createElement(FeatureToggle_1.FeatureToggle, { name: 'groups' },
                            React.createElement(SimpleTab_1.SimpleTab, { id: "nav-tab-groups", target: { pathname: "/groups" }, text: "Groups" })))))));
        return (React.createElement("div", { className: "repo-sidebar" },
            React.createElement(GDPRNotice_1.GDPRNotice, null),
            React.createElement("div", null,
                React.createElement(NavButtons, null)),
            React.createElement("section", { className: "sidebar", style: sidebarStyle, "data-expanded": this.state.expanded },
                React.createElement("div", { className: "subheader", style: Styles.subheader },
                    React.createElement(NavButtons, null)))));
    }
}
exports.RepoNavbar = RepoNavbar;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVwb05hdmJhci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlJlcG9OYXZiYXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUUvQiwyQ0FBc0M7QUFDdEMsbUVBQThEO0FBQzlELHlFQUFvRTtBQUNwRSx1RUFBa0U7QUFDbEUsb0VBQWlFO0FBRWpFLE1BQU0sTUFBTSxHQUFjO0lBRXRCLE9BQU8sRUFBRTtRQUNMLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLEdBQUcsRUFBRSxDQUFDO1FBQ04sSUFBSSxFQUFFLENBQUM7UUFFUCxlQUFlLEVBQUUsY0FBYztRQUMvQixNQUFNLEVBQUUsS0FBSztRQUNiLE1BQU0sRUFBRSxZQUFZO0tBR3ZCO0lBRUQsU0FBUyxFQUFFO1FBQ1AsT0FBTyxFQUFFLE9BQU87S0FDbkI7SUFFRCxhQUFhLEVBQUUsRUFDZDtDQUVKLENBQUM7QUFLRixNQUFhLFVBQVcsU0FBUSxLQUFLLENBQUMsU0FBeUI7SUFFM0QsWUFBWSxLQUFhLEVBQUUsT0FBWTtRQUNuQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRXRCLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDVCxRQUFRLEVBQUUsS0FBSztTQUNsQixDQUFDO0lBRU4sQ0FBQztJQUVNLE1BQU07UUFFVCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFFdkQsTUFBTSxZQUFZLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLE9BQU8sRUFBRSxFQUFDLE9BQU8sRUFBQyxDQUFDLENBQUM7UUFFbEUsTUFBTSxVQUFVLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FFckIsNkJBQUssS0FBSyxFQUFFLEVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBQztZQUV6Qiw2QkFBSyxTQUFTLEVBQUMsaUJBQWlCO2dCQUM1QixvQkFBQyxpQkFBTyxPQUFFLENBQ1I7WUFFTiw2QkFBSyxTQUFTLEVBQUMsK0JBQStCO2dCQUUxQyw2QkFBSyxTQUFTLEVBQUMsTUFBTTtvQkFDakIsb0JBQUMsdUJBQVU7d0JBQ1Asb0JBQUMscUJBQVMsSUFBQyxFQUFFLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxFQUFFLEVBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFDLEVBQUUsSUFBSSxFQUFDLHFCQUFxQixHQUFFO3dCQUM1RyxvQkFBQyxxQkFBUyxJQUFDLEVBQUUsRUFBQyxxQkFBcUIsRUFBQyxNQUFNLEVBQUUsRUFBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUMsRUFBRSxJQUFJLEVBQUMsYUFBYSxHQUFFO3dCQUN2RyxvQkFBQyxxQkFBUyxJQUFDLEVBQUUsRUFBQyxvQkFBb0IsRUFBQyxNQUFNLEVBQUUsRUFBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUMsRUFBRSxJQUFJLEVBQUMsWUFBWSxHQUFFO3dCQUUvRixvQkFBQyw2QkFBYSxJQUFDLElBQUksRUFBQyxRQUFROzRCQUN4QixvQkFBQyxxQkFBUyxJQUFDLEVBQUUsRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLEVBQUUsRUFBQyxRQUFRLEVBQUUsU0FBUyxFQUFDLEVBQUUsSUFBSSxFQUFDLFFBQVEsR0FBRSxDQUNqRSxDQUVQLENBQ1gsQ0FFSixDQUVKLENBQ1QsQ0FBQztRQUVGLE9BQU8sQ0FFSCw2QkFBSyxTQUFTLEVBQUMsY0FBYztZQUV6QixvQkFBQyx1QkFBVSxPQUFFO1lBRWI7Z0JBQ0ksb0JBQUMsVUFBVSxPQUFFLENBQ1g7WUFLTixpQ0FBUyxTQUFTLEVBQUMsU0FBUyxFQUNuQixLQUFLLEVBQUUsWUFBWSxtQkFDSixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVE7Z0JBRXZDLDZCQUFLLFNBQVMsRUFBQyxXQUFXLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxTQUFTO29CQUU5QyxvQkFBQyxVQUFVLE9BQUUsQ0FFWCxDQUVBLENBQ1IsQ0FFVCxDQUFDO0lBRU4sQ0FBQztDQUVKO0FBM0VELGdDQTJFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7SVN0eWxlTWFwfSBmcm9tICcuLi8uLi8uLi93ZWIvanMvcmVhY3QvSVN0eWxlTWFwJztcbmltcG9ydCB7TmF2TG9nb30gZnJvbSAnLi9uYXYvTmF2TG9nbyc7XG5pbXBvcnQge0dEUFJOb3RpY2V9IGZyb20gJy4uLy4uLy4uL3dlYi9qcy91aS9nZHByL0dEUFJOb3RpY2UnO1xuaW1wb3J0IHtTaW1wbGVUYWJzfSBmcm9tIFwiLi4vLi4vLi4vd2ViL2pzL3VpL3NpbXBsZV90YWIvU2ltcGxlVGFic1wiO1xuaW1wb3J0IHtTaW1wbGVUYWJ9IGZyb20gXCIuLi8uLi8uLi93ZWIvanMvdWkvc2ltcGxlX3RhYi9TaW1wbGVUYWJcIjtcbmltcG9ydCB7IEZlYXR1cmVUb2dnbGUgfSBmcm9tICcuLi8uLi8uLi93ZWIvanMvdWkvRmVhdHVyZVRvZ2dsZSc7XG5cbmNvbnN0IFN0eWxlczogSVN0eWxlTWFwID0ge1xuXG4gICAgc2lkZWJhcjoge1xuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAvLyBkaXNwbGF5OiAnbm9uZScsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3ZhcigtLXdoaXRlKScsXG4gICAgICAgIHpJbmRleDogOTk5OTksXG4gICAgICAgIGhlaWdodDogJ2NhbGMoMTAwJSknLFxuICAgICAgICAvLyBwYWRkaW5nTGVmdDogJzFweCcsXG4gICAgICAgIC8vIHBhZGRpbmdUb3A6ICcxcHgnXG4gICAgfSxcblxuICAgIHN1YmhlYWRlcjoge1xuICAgICAgICBkaXNwbGF5OiAndGFibGUnXG4gICAgfSxcblxuICAgIHN1YmhlYWRlckl0ZW06IHtcbiAgICB9XG5cbn07XG5cbi8qKlxuICogU2ltcGxlIGhlYWRlciBmb3IgdGhlIHJlcG9zaXRvcnkgd2hpY2ggc3VwcG9ydHMgYXJiaXRyYXJ5IGNoaWxkcmVuLlxuICovXG5leHBvcnQgY2xhc3MgUmVwb05hdmJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcywgY29udGV4dDogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgZXhwYW5kZWQ6IGZhbHNlXG4gICAgICAgIH07XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuXG4gICAgICAgIGNvbnN0IGRpc3BsYXkgPSB0aGlzLnN0YXRlLmV4cGFuZGVkID8gJ2Jsb2NrJyA6ICdub25lJztcblxuICAgICAgICBjb25zdCBzaWRlYmFyU3R5bGUgPSBPYmplY3QuYXNzaWduKHt9LCBTdHlsZXMuc2lkZWJhciwge2Rpc3BsYXl9KTtcblxuICAgICAgICBjb25zdCBOYXZCdXR0b25zID0gKCkgPT4gKFxuXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnfX0+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LWF1dG8gbWItYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgICA8TmF2TG9nby8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LWF1dG8gbWItYXV0byBkLW5vbmUtbW9iaWxlXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U2ltcGxlVGFicz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2ltcGxlVGFiIGlkPVwibmF2LXRhYi1kb2N1bWVudC1yZXBvc2l0b3J5XCIgdGFyZ2V0PXt7cGF0aG5hbWU6IFwiL1wiLCBoYXNoOiBcIiNcIn19IHRleHQ9XCJEb2N1bWVudCBSZXBvc2l0b3J5XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTaW1wbGVUYWIgaWQ9XCJuYXYtdGFiLWFubm90YXRpb25zXCIgdGFyZ2V0PXt7cGF0aG5hbWU6IFwiL1wiLCBoYXNoOiBcIiNhbm5vdGF0aW9uc1wifX0gdGV4dD1cIkFubm90YXRpb25zXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTaW1wbGVUYWIgaWQ9XCJuYXYtdGFiLXN0YXRpc3RpY3NcIiB0YXJnZXQ9e3twYXRobmFtZTogXCIvXCIsIGhhc2g6IFwiI3N0YXRzXCJ9fSB0ZXh0PVwiU3RhdGlzdGljc1wiLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGZWF0dXJlVG9nZ2xlIG5hbWU9J2dyb3Vwcyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTaW1wbGVUYWIgaWQ9XCJuYXYtdGFiLWdyb3Vwc1wiIHRhcmdldD17e3BhdGhuYW1lOiBcIi9ncm91cHNcIn19IHRleHQ9XCJHcm91cHNcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GZWF0dXJlVG9nZ2xlPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1NpbXBsZVRhYnM+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVwby1zaWRlYmFyXCI+XG5cbiAgICAgICAgICAgICAgICA8R0RQUk5vdGljZS8+XG5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8TmF2QnV0dG9ucy8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICB7LypSZXdvcmsgdGhpcyBzbyB0aGF0IEkgY2FuIGFjY2VwdCB0aGUgRVNDIGtleSBiaW5kaW5nIGhlcmUuKi99XG4gICAgICAgICAgICAgICAgey8qaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMzc0NDA0MDgvaG93LXRvLWRldGVjdC1lc2Mta2V5LXByZXNzLWluLXJlYWN0LWFuZC1ob3ctdG8taGFuZGxlLWl0LzQ2MTIzOTYyKi99XG5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzaWRlYmFyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17c2lkZWJhclN0eWxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtZXhwYW5kZWQ9e3RoaXMuc3RhdGUuZXhwYW5kZWR9PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ViaGVhZGVyXCIgc3R5bGU9e1N0eWxlcy5zdWJoZWFkZXJ9PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2QnV0dG9ucy8+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICApO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2lkZWJhclN0YXR1cyB7XG4gICAgcmVhZG9ubHkgZXhwYW5kZWQ6IGJvb2xlYW47XG59XG5cbmludGVyZmFjZSBJUHJvcHMge1xufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbiAgICByZWFkb25seSBleHBhbmRlZDogYm9vbGVhbjtcbn1cblxuIl19