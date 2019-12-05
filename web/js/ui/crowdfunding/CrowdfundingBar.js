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
const Button_1 = __importDefault(require("reactstrap/lib/Button"));
const Nav_1 = require("../util/Nav");
const CrowdfundingProgress_1 = require("./CrowdfundingProgress");
const RendererAnalytics_1 = require("../../ga/RendererAnalytics");
class CrowdfundingBar extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.onMoreInfo = this.onMoreInfo.bind(this);
        this.onDonate = this.onDonate.bind(this);
    }
    render() {
        return (React.createElement("div", { className: "mt-1 mb-1 rounded p-2", style: { backgroundColor: '#F3CF32', fontWeight: 'bold' } },
            React.createElement("div", { style: { display: 'flex' } },
                React.createElement("div", { className: "mt-auto mb-auto" }, "Please help Polar remain Open Source by donating to our crowdfunding campaign."),
                React.createElement("div", { className: "mt-auto mb-auto", style: { flexGrow: 1 } },
                    React.createElement(CrowdfundingProgress_1.CrowdfundingProgress, null)),
                React.createElement("div", { className: "mt-auto mb-auto", style: {
                        justifyContent: 'flex-end',
                    } },
                    React.createElement(Button_1.default, { color: "secondary", size: "sm", onClick: () => this.onMoreInfo(), style: { fontWeight: 'bold' } }, "More Info"),
                    React.createElement(Button_1.default, { className: "ml-2", color: "success", size: "sm", onClick: () => this.onDonate(), style: { fontWeight: 'bold' } }, "Donate Now")))));
    }
    onMoreInfo() {
        RendererAnalytics_1.RendererAnalytics.event({ category: 'crowdfunding-bar', action: 'more-info' });
        Nav_1.Nav.openLinkWithNewTab("https://getpolarized.io/2019/04/11/Polar-Initial-Crowdfunding-Campaign.html");
    }
    onDonate() {
        RendererAnalytics_1.RendererAnalytics.event({ category: 'crowdfunding-bar', action: 'donate' });
        Nav_1.Nav.openLinkWithNewTab("https://opencollective.com/polar-bookshelf");
    }
}
exports.CrowdfundingBar = CrowdfundingBar;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3Jvd2RmdW5kaW5nQmFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQ3Jvd2RmdW5kaW5nQmFyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBK0I7QUFDL0IsbUVBQTJDO0FBQzNDLHFDQUFnQztBQUNoQyxpRUFBNEQ7QUFDNUQsa0VBQTZEO0FBRTdELE1BQWEsZUFBZ0IsU0FBUSxLQUFLLENBQUMsU0FBeUI7SUFFaEUsWUFBWSxLQUFhLEVBQUUsT0FBWTtRQUNuQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRXRCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUU3QyxDQUFDO0lBRU0sTUFBTTtRQUdULE9BQU8sQ0FFSCw2QkFBSyxTQUFTLEVBQUMsdUJBQXVCLEVBQ2pDLEtBQUssRUFBRSxFQUFDLGVBQWUsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBQztZQUl4RCw2QkFBSyxLQUFLLEVBQUUsRUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFDO2dCQUV6Qiw2QkFBSyxTQUFTLEVBQUMsaUJBQWlCLHFGQUsxQjtnQkFFTiw2QkFBSyxTQUFTLEVBQUMsaUJBQWlCLEVBQUMsS0FBSyxFQUFFLEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBQztvQkFRakQsb0JBQUMsMkNBQW9CLE9BQUUsQ0FFckI7Z0JBRU4sNkJBQUssU0FBUyxFQUFDLGlCQUFpQixFQUMzQixLQUFLLEVBQUU7d0JBQ0gsY0FBYyxFQUFFLFVBQVU7cUJBQzdCO29CQUVGLG9CQUFDLGdCQUFNLElBQUMsS0FBSyxFQUFDLFdBQVcsRUFDakIsSUFBSSxFQUFDLElBQUksRUFDVCxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxFQUNoQyxLQUFLLEVBQUUsRUFBQyxVQUFVLEVBQUUsTUFBTSxFQUFDLGdCQUFvQjtvQkFFdkQsb0JBQUMsZ0JBQU0sSUFBQyxTQUFTLEVBQUMsTUFBTSxFQUNoQixLQUFLLEVBQUMsU0FBUyxFQUNmLElBQUksRUFBQyxJQUFJLEVBQ1QsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFDOUIsS0FBSyxFQUFFLEVBQUMsVUFBVSxFQUFFLE1BQU0sRUFBQyxpQkFBcUIsQ0FHdEQsQ0FHSixDQUVKLENBR1QsQ0FBQztJQUVOLENBQUM7SUFFTyxVQUFVO1FBQ2QscUNBQWlCLENBQUMsS0FBSyxDQUFDLEVBQUMsUUFBUSxFQUFFLGtCQUFrQixFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUMsQ0FBQyxDQUFDO1FBQzdFLFNBQUcsQ0FBQyxrQkFBa0IsQ0FBQyw2RUFBNkUsQ0FBQyxDQUFDO0lBQzFHLENBQUM7SUFFTyxRQUFRO1FBQ1oscUNBQWlCLENBQUMsS0FBSyxDQUFDLEVBQUMsUUFBUSxFQUFFLGtCQUFrQixFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUMsQ0FBQyxDQUFDO1FBQzFFLFNBQUcsQ0FBQyxrQkFBa0IsQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7Q0FFSjtBQWhGRCwwQ0FnRkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0c3RyYXAvbGliL0J1dHRvbic7XG5pbXBvcnQge05hdn0gZnJvbSAnLi4vdXRpbC9OYXYnO1xuaW1wb3J0IHtDcm93ZGZ1bmRpbmdQcm9ncmVzc30gZnJvbSAnLi9Dcm93ZGZ1bmRpbmdQcm9ncmVzcyc7XG5pbXBvcnQge1JlbmRlcmVyQW5hbHl0aWNzfSBmcm9tICcuLi8uLi9nYS9SZW5kZXJlckFuYWx5dGljcyc7XG5cbmV4cG9ydCBjbGFzcyBDcm93ZGZ1bmRpbmdCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJUHJvcHMsIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG5cbiAgICAgICAgdGhpcy5vbk1vcmVJbmZvID0gdGhpcy5vbk1vcmVJbmZvLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25Eb25hdGUgPSB0aGlzLm9uRG9uYXRlLmJpbmQodGhpcyk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuXG5cbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xIG1iLTEgcm91bmRlZCBwLTJcIlxuICAgICAgICAgICAgICAgICBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJyNGM0NGMzInLCBmb250V2VpZ2h0OiAnYm9sZCd9fT5cblxuICAgICAgICAgICAgICAgIHsvKjxQcm9ncmVzcyB2YWx1ZT17NTV9IGNsYXNzTmFtZT1cInctMTAwXCIvPiovfVxuXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4J319PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtYXV0byBtYi1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LypQb2xhciBuZWVkcyB5b3VyIGhlbHAgdG8gcmVtYWluIE9wZW4gU291cmNlLiAgUGxlYXNlIGhlbHAgZnVuZCBvdXIgY3Jvd2RmdW5kaW5nIGNhbXBhaWduLiovfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBQbGVhc2UgaGVscCBQb2xhciByZW1haW4gT3BlbiBTb3VyY2UgYnkgZG9uYXRpbmcgdG8gb3VyIGNyb3dkZnVuZGluZyBjYW1wYWlnbi5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LWF1dG8gbWItYXV0b1wiIHN0eWxlPXt7ZmxleEdyb3c6IDF9fT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgey8qPHRhYmxlPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjx0ZD4qL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPHByb2dyZXNzIHZhbHVlPXswLjV9Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LypzdHlsZT17e2NvbG9yOiAnYmx1ZScsIHdpZHRoOiAnMTAwJSd9fT48L3Byb2dyZXNzPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjwvdGQ+Ki99XG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyo8L3RhYmxlPiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgPENyb3dkZnVuZGluZ1Byb2dyZXNzLz5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LWF1dG8gbWItYXV0b1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLm9uTW9yZUluZm8oKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tmb250V2VpZ2h0OiAnYm9sZCd9fT5Nb3JlIEluZm88L0J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJtbC0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJzdWNjZXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5vbkRvbmF0ZSgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2ZvbnRXZWlnaHQ6ICdib2xkJ319PkRvbmF0ZSBOb3c8L0J1dHRvbj5cblxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICApO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbk1vcmVJbmZvKCkge1xuICAgICAgICBSZW5kZXJlckFuYWx5dGljcy5ldmVudCh7Y2F0ZWdvcnk6ICdjcm93ZGZ1bmRpbmctYmFyJywgYWN0aW9uOiAnbW9yZS1pbmZvJ30pO1xuICAgICAgICBOYXYub3BlbkxpbmtXaXRoTmV3VGFiKFwiaHR0cHM6Ly9nZXRwb2xhcml6ZWQuaW8vMjAxOS8wNC8xMS9Qb2xhci1Jbml0aWFsLUNyb3dkZnVuZGluZy1DYW1wYWlnbi5odG1sXCIpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25Eb25hdGUoKSB7XG4gICAgICAgIFJlbmRlcmVyQW5hbHl0aWNzLmV2ZW50KHtjYXRlZ29yeTogJ2Nyb3dkZnVuZGluZy1iYXInLCBhY3Rpb246ICdkb25hdGUnfSk7XG4gICAgICAgIE5hdi5vcGVuTGlua1dpdGhOZXdUYWIoXCJodHRwczovL29wZW5jb2xsZWN0aXZlLmNvbS9wb2xhci1ib29rc2hlbGZcIik7XG4gICAgfVxuXG59XG5cblxuaW50ZXJmYWNlIElQcm9wcyB7XG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xufVxuXG5cbiJdfQ==