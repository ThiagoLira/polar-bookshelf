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
const reactstrap_1 = require("reactstrap");
const AccountUpgrades_1 = require("../../accounts/AccountUpgrades");
const RendererAnalytics_1 = require("../../ga/RendererAnalytics");
const UpgradeRequired_1 = require("./UpgradeRequired");
const Arrays_1 = require("polar-shared/src/util/Arrays");
const MESSAGE = createRandomizedUpgradeMessage();
const GoPremium = (props) => {
    RendererAnalytics_1.RendererAnalytics.event({ category: 'upgrade', action: 'triggered-upgrade-required' });
    const onClick = () => {
        RendererAnalytics_1.RendererAnalytics.event({ category: 'upgrade', action: 'clicked-button-to-plans' });
        document.location.hash = 'plans';
    };
    return React.createElement("div", { className: "mt-1 mb-1 p-1 rounded", style: {
            backgroundColor: '#ffcccc',
            fontWeight: 'bold'
        } },
        React.createElement(reactstrap_1.Button, { color: "primary", size: "sm", style: { fontWeight: 'bold' }, onClick: () => onClick() },
            React.createElement("i", { className: "fas fa-certificate" }),
            "\u00A0 Go Premium!"),
        React.createElement("span", { className: "ml-1" }, MESSAGE));
};
const NullComponent = () => {
    return React.createElement("div", null);
};
class AccountUpgradeBarView extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const { plan, accountUsage } = this.props;
        if (plan && accountUsage) {
            const planRequiredForUpgrade = AccountUpgrades_1.AccountUpgrades.upgradeRequired(plan, accountUsage);
            if (planRequiredForUpgrade) {
                return React.createElement(UpgradeRequired_1.UpgradeRequired, { planRequired: planRequiredForUpgrade });
            }
        }
        if (!plan || plan === 'free') {
            return React.createElement(GoPremium, null);
        }
        else {
            return React.createElement(NullComponent, null);
        }
    }
}
exports.AccountUpgradeBarView = AccountUpgradeBarView;
function createRandomizedUpgradeMessage() {
    const messages = [
        "Want a dark mode? How about ePub support? Go premium and support Polar development!",
        "Premium users help support future Polar development and are generally pretty awesome.",
        "Guess who else used Polar Premium? Einstein! You want to be like Einstein don't you?",
        "It's scientifically proven that Polar premium adds 100 years to your life!",
        "Polar Premium users help keep Polar ad-free and no annoying banners (like this one).",
        "Keep Polar ad-free!  Upgrading to premium helps support Polar and unlocks additional storage."
    ];
    const randomized = Arrays_1.Arrays.shuffle(...messages);
    return Arrays_1.Arrays.first(randomized);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNjb3VudFVwZ3JhZGVCYXJWaWV3LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQWNjb3VudFVwZ3JhZGVCYXJWaWV3LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSw2Q0FBK0I7QUFDL0IsMkNBQWtDO0FBQ2xDLG9FQUE2RTtBQUU3RSxrRUFBNkQ7QUFDN0QsdURBQWtEO0FBQ2xELHlEQUFvRDtBQUVwRCxNQUFNLE9BQU8sR0FBRyw4QkFBOEIsRUFBRSxDQUFDO0FBTWpELE1BQU0sU0FBUyxHQUFHLENBQUMsS0FBMkIsRUFBRSxFQUFFO0lBRTlDLHFDQUFpQixDQUFDLEtBQUssQ0FBQyxFQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDRCQUE0QixFQUFDLENBQUMsQ0FBQztJQUVyRixNQUFNLE9BQU8sR0FBRyxHQUFHLEVBQUU7UUFDakIscUNBQWlCLENBQUMsS0FBSyxDQUFDLEVBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUseUJBQXlCLEVBQUMsQ0FBQyxDQUFDO1FBQ2xGLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztJQUNyQyxDQUFDLENBQUM7SUFFRixPQUFPLDZCQUFLLFNBQVMsRUFBQyx1QkFBdUIsRUFDakMsS0FBSyxFQUFFO1lBQ0gsZUFBZSxFQUFFLFNBQVM7WUFDMUIsVUFBVSxFQUFFLE1BQU07U0FDckI7UUFFVCxvQkFBQyxtQkFBTSxJQUFDLEtBQUssRUFBQyxTQUFTLEVBQ2YsSUFBSSxFQUFDLElBQUksRUFDVCxLQUFLLEVBQUUsRUFBQyxVQUFVLEVBQUUsTUFBTSxFQUFDLEVBQzNCLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxPQUFPLEVBQUU7WUFFNUIsMkJBQUcsU0FBUyxFQUFDLG9CQUFvQixHQUFFO2lDQUk5QjtRQUVULDhCQUFNLFNBQVMsRUFBQyxNQUFNLElBQ2pCLE9BQU8sQ0FDTCxDQUVMLENBQUM7QUFFWCxDQUFDLENBQUM7QUFHRixNQUFNLGFBQWEsR0FBRyxHQUFHLEVBQUU7SUFDdkIsT0FBTyxnQ0FBTSxDQUFDO0FBQ2xCLENBQUMsQ0FBQztBQU1GLE1BQWEscUJBQXNCLFNBQVEsS0FBSyxDQUFDLFNBQXlCO0lBRXRFLFlBQVksS0FBYSxFQUFFLE9BQVk7UUFDbkMsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRU0sTUFBTTtRQUVULE1BQU0sRUFBQyxJQUFJLEVBQUUsWUFBWSxFQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUV4QyxJQUFJLElBQUksSUFBSSxZQUFZLEVBQUU7WUFFdEIsTUFBTSxzQkFBc0IsR0FBRyxpQ0FBZSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsWUFBWSxDQUFDLENBQUM7WUFFbkYsSUFBSSxzQkFBc0IsRUFBRTtnQkFDeEIsT0FBTyxvQkFBQyxpQ0FBZSxJQUFDLFlBQVksRUFBRSxzQkFBc0IsR0FBRyxDQUFDO2FBQ25FO1NBRUo7UUFFRCxJQUFJLENBQUUsSUFBSSxJQUFJLElBQUksS0FBSyxNQUFNLEVBQUU7WUFDM0IsT0FBTyxvQkFBQyxTQUFTLE9BQUUsQ0FBQztTQUN2QjthQUFNO1lBQ0gsT0FBTyxvQkFBQyxhQUFhLE9BQUUsQ0FBQztTQUMzQjtJQUVMLENBQUM7Q0FFSjtBQTVCRCxzREE0QkM7QUFVRCxTQUFVLDhCQUE4QjtJQUVwQyxNQUFNLFFBQVEsR0FBRztRQUNiLHFGQUFxRjtRQUNyRix1RkFBdUY7UUFDdkYsc0ZBQXNGO1FBQ3RGLDRFQUE0RTtRQUM1RSxzRkFBc0Y7UUFDdEYsK0ZBQStGO0tBQ2xHLENBQUM7SUFFRixNQUFNLFVBQVUsR0FBRyxlQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUM7SUFFL0MsT0FBTyxlQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBRXBDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0J1dHRvbn0gZnJvbSBcInJlYWN0c3RyYXBcIjtcbmltcG9ydCB7QWNjb3VudFVwZ3JhZGVzLCBBY2NvdW50VXNhZ2V9IGZyb20gXCIuLi8uLi9hY2NvdW50cy9BY2NvdW50VXBncmFkZXNcIjtcbmltcG9ydCB7QWNjb3VudFBsYW59IGZyb20gXCIuLi8uLi9hY2NvdW50cy9BY2NvdW50XCI7XG5pbXBvcnQge1JlbmRlcmVyQW5hbHl0aWNzfSBmcm9tIFwiLi4vLi4vZ2EvUmVuZGVyZXJBbmFseXRpY3NcIjtcbmltcG9ydCB7VXBncmFkZVJlcXVpcmVkfSBmcm9tIFwiLi9VcGdyYWRlUmVxdWlyZWRcIjtcbmltcG9ydCB7QXJyYXlzfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy91dGlsL0FycmF5c1wiO1xuXG5jb25zdCBNRVNTQUdFID0gY3JlYXRlUmFuZG9taXplZFVwZ3JhZGVNZXNzYWdlKCk7XG5cbmludGVyZmFjZSBVcGdyYWRlUmVxdWlyZWRQcm9wcyB7XG4gICAgcmVhZG9ubHkgcGxhblJlcXVpcmVkPzogQWNjb3VudFBsYW47XG59XG5cbmNvbnN0IEdvUHJlbWl1bSA9IChwcm9wczogVXBncmFkZVJlcXVpcmVkUHJvcHMpID0+IHtcblxuICAgIFJlbmRlcmVyQW5hbHl0aWNzLmV2ZW50KHtjYXRlZ29yeTogJ3VwZ3JhZGUnLCBhY3Rpb246ICd0cmlnZ2VyZWQtdXBncmFkZS1yZXF1aXJlZCd9KTtcblxuICAgIGNvbnN0IG9uQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIFJlbmRlcmVyQW5hbHl0aWNzLmV2ZW50KHtjYXRlZ29yeTogJ3VwZ3JhZGUnLCBhY3Rpb246ICdjbGlja2VkLWJ1dHRvbi10by1wbGFucyd9KTtcbiAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaGFzaCA9ICdwbGFucyc7XG4gICAgfTtcblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cIm10LTEgbWItMSBwLTEgcm91bmRlZFwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmY2NjYycsXG4gICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJ1xuICAgICAgICAgICAgICAgIH19PlxuXG4gICAgICAgIDxCdXR0b24gY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7Zm9udFdlaWdodDogJ2JvbGQnfX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKCl9PlxuXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtY2VydGlmaWNhdGVcIi8+XG4gICAgICAgICAgICAmbmJzcDtcbiAgICAgICAgICAgIEdvIFByZW1pdW0hXG5cbiAgICAgICAgPC9CdXR0b24+XG5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtMVwiPlxuICAgICAgICAgICAge01FU1NBR0V9XG4gICAgICAgIDwvc3Bhbj5cblxuICAgIDwvZGl2PjtcblxufTtcblxuXG5jb25zdCBOdWxsQ29tcG9uZW50ID0gKCkgPT4ge1xuICAgIHJldHVybiA8ZGl2Lz47XG59O1xuXG4vKipcbiAqIExpc3RlbiB0byB0aGUgbWFjaGluZSBkYXRhc3RvcmUgZm9yIHRoaXMgdXNlciBhbmQgaWYgdGhlaXIgYWNjb3VudCBpc24ndCBpblxuICogbGluZSB3aXRoIHRoZSBtYWNoaW5lIGRhdGEgc3RvcmUgdGhlbiB3ZSBoYXZlIHRvIGZvcmNlIHRoZW0gdG8gdXBncmFkZS5cbiAqL1xuZXhwb3J0IGNsYXNzIEFjY291bnRVcGdyYWRlQmFyVmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcywgY29udGV4dDogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuXG4gICAgICAgIGNvbnN0IHtwbGFuLCBhY2NvdW50VXNhZ2V9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBpZiAocGxhbiAmJiBhY2NvdW50VXNhZ2UpIHtcblxuICAgICAgICAgICAgY29uc3QgcGxhblJlcXVpcmVkRm9yVXBncmFkZSA9IEFjY291bnRVcGdyYWRlcy51cGdyYWRlUmVxdWlyZWQocGxhbiwgYWNjb3VudFVzYWdlKTtcblxuICAgICAgICAgICAgaWYgKHBsYW5SZXF1aXJlZEZvclVwZ3JhZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gPFVwZ3JhZGVSZXF1aXJlZCBwbGFuUmVxdWlyZWQ9e3BsYW5SZXF1aXJlZEZvclVwZ3JhZGV9Lz47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghIHBsYW4gfHwgcGxhbiA9PT0gJ2ZyZWUnKSB7XG4gICAgICAgICAgICByZXR1cm4gPEdvUHJlbWl1bS8+O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIDxOdWxsQ29tcG9uZW50Lz47XG4gICAgICAgIH1cblxuICAgIH1cblxufVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgICByZWFkb25seSBwbGFuPzogQWNjb3VudFBsYW47XG4gICAgcmVhZG9ubHkgYWNjb3VudFVzYWdlPzogQWNjb3VudFVzYWdlO1xufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbn1cblxuZnVuY3Rpb24gIGNyZWF0ZVJhbmRvbWl6ZWRVcGdyYWRlTWVzc2FnZSgpIHtcblxuICAgIGNvbnN0IG1lc3NhZ2VzID0gW1xuICAgICAgICBcIldhbnQgYSBkYXJrIG1vZGU/IEhvdyBhYm91dCBlUHViIHN1cHBvcnQ/IEdvIHByZW1pdW0gYW5kIHN1cHBvcnQgUG9sYXIgZGV2ZWxvcG1lbnQhXCIsXG4gICAgICAgIFwiUHJlbWl1bSB1c2VycyBoZWxwIHN1cHBvcnQgZnV0dXJlIFBvbGFyIGRldmVsb3BtZW50IGFuZCBhcmUgZ2VuZXJhbGx5IHByZXR0eSBhd2Vzb21lLlwiLFxuICAgICAgICBcIkd1ZXNzIHdobyBlbHNlIHVzZWQgUG9sYXIgUHJlbWl1bT8gRWluc3RlaW4hIFlvdSB3YW50IHRvIGJlIGxpa2UgRWluc3RlaW4gZG9uJ3QgeW91P1wiLFxuICAgICAgICBcIkl0J3Mgc2NpZW50aWZpY2FsbHkgcHJvdmVuIHRoYXQgUG9sYXIgcHJlbWl1bSBhZGRzIDEwMCB5ZWFycyB0byB5b3VyIGxpZmUhXCIsXG4gICAgICAgIFwiUG9sYXIgUHJlbWl1bSB1c2VycyBoZWxwIGtlZXAgUG9sYXIgYWQtZnJlZSBhbmQgbm8gYW5ub3lpbmcgYmFubmVycyAobGlrZSB0aGlzIG9uZSkuXCIsXG4gICAgICAgIFwiS2VlcCBQb2xhciBhZC1mcmVlISAgVXBncmFkaW5nIHRvIHByZW1pdW0gaGVscHMgc3VwcG9ydCBQb2xhciBhbmQgdW5sb2NrcyBhZGRpdGlvbmFsIHN0b3JhZ2UuXCJcbiAgICBdO1xuXG4gICAgY29uc3QgcmFuZG9taXplZCA9IEFycmF5cy5zaHVmZmxlKC4uLm1lc3NhZ2VzKTtcblxuICAgIHJldHVybiBBcnJheXMuZmlyc3QocmFuZG9taXplZCk7XG5cbn1cbiJdfQ==