"use strict";
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
const Logger_1 = require("polar-shared/src/logger/Logger");
const Toaster_1 = require("../../../web/js/ui/toaster/Toaster");
const Button_1 = __importDefault(require("reactstrap/lib/Button"));
const Nav_1 = require("../../../web/js/ui/util/Nav");
const RendererAnalytics_1 = require("../../../web/js/ga/RendererAnalytics");
const AppRuntime_1 = require("../../../web/js/AppRuntime");
const Platforms_1 = require("polar-shared/src/util/Platforms");
const log = Logger_1.Logger.create();
class ChromeExtensionInstallButton extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.open = false;
        this.onClick = this.onClick.bind(this);
        this.state = {
            open: this.open,
        };
    }
    render() {
        const hidden = AppRuntime_1.AppRuntime.isElectron() || !Platforms_1.Platforms.isDesktop();
        return (React.createElement("div", { className: "ml-1 mr-1 d-none-mobile" },
            React.createElement(Button_1.default, { hidden: hidden, onClick: () => this.onClick(), color: "light", className: "border", size: "md" },
                React.createElement("div", { style: { display: 'flex' } },
                    React.createElement("div", null,
                        React.createElement("img", { style: {
                                height: '22px',
                                marginRight: '5px'
                            }, src: "/web/assets/images/chrome.svg", title: "chrome" })),
                    React.createElement("div", null, "Install Chrome Extension")))));
    }
    onClick() {
        RendererAnalytics_1.RendererAnalytics.event({ category: 'chrome-extension', action: 'manual-installation-triggered' });
        Nav_1.Nav.openLinkWithNewTab("https://chrome.google.com/webstore/detail/polar-pdf-web-and-documen/jkfdkjomocoaljglgddnmhcbolldcafd");
    }
    onSuccess() {
        Toaster_1.Toaster.success("Chrome extension installed successfully!");
    }
    onFailure(error) {
        Toaster_1.Toaster.error("Failed to install chrome extension: " + error);
    }
}
exports.ChromeExtensionInstallButton = ChromeExtensionInstallButton;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hyb21lRXh0ZW5zaW9uSW5zdGFsbEJ1dHRvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNocm9tZUV4dGVuc2lvbkluc3RhbGxCdXR0b24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUMvQiwyREFBc0Q7QUFDdEQsZ0VBQTJEO0FBQzNELG1FQUEyQztBQUMzQyxxREFBZ0Q7QUFDaEQsNEVBQXVFO0FBQ3ZFLDJEQUFzRDtBQUN0RCwrREFBMEQ7QUFFMUQsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLE1BQWEsNEJBQTZCLFNBQVEsS0FBSyxDQUFDLFNBQXlCO0lBSTdFLFlBQVksS0FBYSxFQUFFLE9BQVk7UUFDbkMsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztRQUhsQixTQUFJLEdBQVksS0FBSyxDQUFDO1FBSzFCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFdkMsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNULElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtTQUNsQixDQUFDO0lBRU4sQ0FBQztJQUVNLE1BQU07UUFFVCxNQUFNLE1BQU0sR0FBRyx1QkFBVSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUUscUJBQVMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUVsRSxPQUFPLENBRUgsNkJBQUssU0FBUyxFQUFDLHlCQUF5QjtZQUVwQyxvQkFBQyxnQkFBTSxJQUFDLE1BQU0sRUFBRSxNQUFNLEVBQ2QsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFDN0IsS0FBSyxFQUFDLE9BQU8sRUFDYixTQUFTLEVBQUMsUUFBUSxFQUNsQixJQUFJLEVBQUMsSUFBSTtnQkFFYiw2QkFBSyxLQUFLLEVBQUUsRUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFDO29CQUV6Qjt3QkFDSSw2QkFBSyxLQUFLLEVBQUU7Z0NBQ0osTUFBTSxFQUFFLE1BQU07Z0NBQ2QsV0FBVyxFQUFFLEtBQUs7NkJBQ3BCLEVBQ0QsR0FBRyxFQUFDLCtCQUErQixFQUFDLEtBQUssRUFBQyxRQUFRLEdBQUUsQ0FDdkQ7b0JBRU4sNERBRU0sQ0FFSixDQUVELENBRVAsQ0FFVCxDQUFDO0lBRU4sQ0FBQztJQUVPLE9BQU87UUFFWCxxQ0FBaUIsQ0FBQyxLQUFLLENBQUMsRUFBQyxRQUFRLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxFQUFFLCtCQUErQixFQUFDLENBQUMsQ0FBQztRQUVqRyxTQUFHLENBQUMsa0JBQWtCLENBQUMsc0dBQXNHLENBQUMsQ0FBQztJQUVuSSxDQUFDO0lBRU8sU0FBUztRQUNiLGlCQUFPLENBQUMsT0FBTyxDQUFDLDBDQUEwQyxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVPLFNBQVMsQ0FBQyxLQUFhO1FBQzNCLGlCQUFPLENBQUMsS0FBSyxDQUFDLHNDQUFzQyxHQUFHLEtBQUssQ0FBQyxDQUFDO0lBQ2xFLENBQUM7Q0FFSjtBQXJFRCxvRUFxRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7VG9hc3Rlcn0gZnJvbSAnLi4vLi4vLi4vd2ViL2pzL3VpL3RvYXN0ZXIvVG9hc3Rlcic7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0c3RyYXAvbGliL0J1dHRvbic7XG5pbXBvcnQge05hdn0gZnJvbSAnLi4vLi4vLi4vd2ViL2pzL3VpL3V0aWwvTmF2JztcbmltcG9ydCB7UmVuZGVyZXJBbmFseXRpY3N9IGZyb20gJy4uLy4uLy4uL3dlYi9qcy9nYS9SZW5kZXJlckFuYWx5dGljcyc7XG5pbXBvcnQge0FwcFJ1bnRpbWV9IGZyb20gJy4uLy4uLy4uL3dlYi9qcy9BcHBSdW50aW1lJztcbmltcG9ydCB7UGxhdGZvcm1zfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy91dGlsL1BsYXRmb3Jtc1wiO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbmV4cG9ydCBjbGFzcyBDaHJvbWVFeHRlbnNpb25JbnN0YWxsQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgICBwcml2YXRlIG9wZW46IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJUHJvcHMsIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG5cbiAgICAgICAgdGhpcy5vbkNsaWNrID0gdGhpcy5vbkNsaWNrLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIG9wZW46IHRoaXMub3BlbixcbiAgICAgICAgfTtcblxuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgY29uc3QgaGlkZGVuID0gQXBwUnVudGltZS5pc0VsZWN0cm9uKCkgfHwgISBQbGF0Zm9ybXMuaXNEZXNrdG9wKCk7XG5cbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC0xIG1yLTEgZC1ub25lLW1vYmlsZVwiPlxuXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBoaWRkZW49e2hpZGRlbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMub25DbGljaygpfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIm1kXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4J319PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzIycHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICc1cHgnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL3dlYi9hc3NldHMvaW1hZ2VzL2Nocm9tZS5zdmdcIiB0aXRsZT1cImNocm9tZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluc3RhbGwgQ2hyb21lIEV4dGVuc2lvblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cblxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgb25DbGljaygpOiB2b2lkIHtcblxuICAgICAgICBSZW5kZXJlckFuYWx5dGljcy5ldmVudCh7Y2F0ZWdvcnk6ICdjaHJvbWUtZXh0ZW5zaW9uJywgYWN0aW9uOiAnbWFudWFsLWluc3RhbGxhdGlvbi10cmlnZ2VyZWQnfSk7XG5cbiAgICAgICAgTmF2Lm9wZW5MaW5rV2l0aE5ld1RhYihcImh0dHBzOi8vY2hyb21lLmdvb2dsZS5jb20vd2Vic3RvcmUvZGV0YWlsL3BvbGFyLXBkZi13ZWItYW5kLWRvY3VtZW4vamtmZGtqb21vY29hbGpnbGdkZG5taGNib2xsZGNhZmRcIik7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uU3VjY2VzcygpIHtcbiAgICAgICAgVG9hc3Rlci5zdWNjZXNzKFwiQ2hyb21lIGV4dGVuc2lvbiBpbnN0YWxsZWQgc3VjY2Vzc2Z1bGx5IVwiKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uRmFpbHVyZShlcnJvcjogc3RyaW5nKSB7XG4gICAgICAgIFRvYXN0ZXIuZXJyb3IoXCJGYWlsZWQgdG8gaW5zdGFsbCBjaHJvbWUgZXh0ZW5zaW9uOiBcIiArIGVycm9yKTtcbiAgICB9XG5cbn1cblxuaW50ZXJmYWNlIElQcm9wcyB7XG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xuXG59XG5cbiJdfQ==