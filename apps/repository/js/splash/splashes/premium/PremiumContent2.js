"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const NullCollapse_1 = require("../../../../../../web/js/ui/null_collapse/NullCollapse");
const Button_1 = __importDefault(require("reactstrap/lib/Button"));
const AccountActions_1 = require("../../../../../../web/js/accounts/AccountActions");
const Dialogs_1 = require("../../../../../../web/js/ui/dialogs/Dialogs");
const Logger_1 = require("polar-shared/src/logger/Logger");
const Toaster_1 = require("../../../../../../web/js/ui/toaster/Toaster");
const Numbers_1 = require("polar-shared/src/util/Numbers");
const PremiumCopy_1 = require("./PremiumCopy");
const Devices_1 = require("../../../../../../web/js/util/Devices");
const log = Logger_1.Logger.create();
function cancelSubscription() {
    const onConfirm = () => {
        Toaster_1.Toaster.info("Canceling plan.  One moment...");
        AccountActions_1.AccountActions.cancelSubscription()
            .catch(err => log.error("Unable to cancel plan: ", err));
    };
    Dialogs_1.Dialogs.confirm({
        title: `Are you sure you want to cancel your plan and revert to the free tier?`,
        subtitle: 'Your billing will automatically be updated and account pro-rated.',
        onConfirm
    });
}
exports.CancelSubscriptionButton = (props) => {
    return react_1.default.createElement(NullCollapse_1.NullCollapse, { open: props.plan !== 'free' },
        react_1.default.createElement(Button_1.default, { color: "secondary", size: "sm", onClick: () => cancelSubscription() }, "Cancel Subscription"));
};
exports.PlanIntervalButton = (props) => {
    return react_1.default.createElement(Button_1.default, { color: "secondary", size: "md", onClick: () => props.togglePlanInterval() },
        "Show ",
        props.planInterval === 'month' ? 'Yearly' : 'Monthly',
        " Plans");
};
const PlanPricing = (props) => {
    const computeMonthlyAmount = () => {
        switch (props.plan) {
            case "free":
                return 0.0;
            case "bronze":
                return 4.99;
            case "silver":
                return 9.99;
            case "gold":
                return 14.99;
        }
    };
    const computeYearlyAmount = () => {
        const monthlyAmount = computeMonthlyAmount();
        return Numbers_1.Numbers.toFixedFloat(monthlyAmount * 11, 2);
    };
    const amount = props.planInterval === 'month' ? computeMonthlyAmount() : computeYearlyAmount();
    return react_1.default.createElement("div", null,
        react_1.default.createElement("h3", { className: "text-xxlarge" },
            "$",
            amount,
            react_1.default.createElement("span", { className: "text-small" },
                "/",
                props.planInterval)));
};
exports.PricingOverview = () => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("div", { className: "text-center mb-3" },
            react_1.default.createElement("h1", null, "Pricing and Plans")),
        react_1.default.createElement("p", { className: "text-center mb-3 text-xlarge" }, "Polar is designed to scale to from both novice users to Power users. Just need to read a few PDFs. No problem. Need to manage and read hundreds to thousands of documents? No problem."),
        react_1.default.createElement("p", { className: "text-center mb-3 text-xlarge" },
            "Have an issue?  Feel free to send us an email at ",
            react_1.default.createElement("b", null, "support@getpolarized.io"))));
};
exports.FindPlan = () => {
    return react_1.default.createElement("div", null,
        react_1.default.createElement("h2", { className: "text-tint text-left" },
            "Find a plan",
            react_1.default.createElement("br", null)),
        react_1.default.createElement("p", null, "We have both yearly and monthly plans.  Get a free month of service if you buy for a whole year!"));
};
exports.FreePlan = () => {
    return react_1.default.createElement("div", null,
        react_1.default.createElement("h2", null, "Free"),
        react_1.default.createElement("h3", { className: "text-xxlarge" }, "$0"),
        react_1.default.createElement("p", { className: "text-small text-tint" }, "We want as many people to use Polar as possible. Most people easily stay within these limits."));
};
exports.BronzePlan = (props) => {
    return react_1.default.createElement("div", null,
        react_1.default.createElement("h2", null, "Bronze"),
        react_1.default.createElement(PlanPricing, { plan: 'bronze', planInterval: props.planInterval }),
        react_1.default.createElement("p", { className: "text-small text-tint" }, "Less than the price of a cup of coffee. Need more storage and ready to move up to the next level? We're ready when you are!"));
};
exports.SilverPlan = (props) => {
    return react_1.default.createElement("div", null,
        react_1.default.createElement("h2", null, "Silver"),
        react_1.default.createElement(PlanPricing, { plan: 'silver', planInterval: props.planInterval }),
        react_1.default.createElement("p", { className: "text-small text-tint" }, "Designed for Polar power users! Need more storage? Let's do this!"));
};
exports.GoldPlan = (props) => {
    return react_1.default.createElement("div", null,
        react_1.default.createElement("h2", null, "Gold"),
        react_1.default.createElement(PlanPricing, { plan: 'gold', planInterval: props.planInterval }),
        react_1.default.createElement("p", { className: "text-small text-tint" }, "You can't live without Polar and have a massive amount of data that you need to keep secure."),
        react_1.default.createElement("br", null));
};
class PremiumContent2 extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.togglePlanInterval = this.togglePlanInterval.bind(this);
        this.state = {
            planInterval: 'month'
        };
    }
    render() {
        if (Devices_1.Devices.isPhone()) {
            return (react_1.default.createElement(PremiumCopy_1.MobileContent, Object.assign({}, this.props, this.state, { togglePlanInterval: () => this.togglePlanInterval() })));
        }
        else {
            return (react_1.default.createElement(PremiumCopy_1.DesktopContent, Object.assign({}, this.props, this.state, { togglePlanInterval: () => this.togglePlanInterval() })));
        }
    }
    togglePlanInterval() {
        this.setState({
            planInterval: this.state.planInterval === 'month' ? 'year' : 'month'
        });
    }
}
exports.PremiumContent2 = PremiumContent2;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJlbWl1bUNvbnRlbnQyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUHJlbWl1bUNvbnRlbnQyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLGtEQUEwQjtBQUcxQix5RkFBb0Y7QUFDcEYsbUVBQTJDO0FBQzNDLHFGQUFnRjtBQUNoRix5RUFBb0U7QUFDcEUsMkRBQXNEO0FBQ3RELHlFQUFvRTtBQUNwRSwyREFBc0Q7QUFDdEQsK0NBQTREO0FBQzVELG1FQUE4RDtBQUU5RCxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFNUIsU0FBUyxrQkFBa0I7SUFFdkIsTUFBTSxTQUFTLEdBQUcsR0FBRyxFQUFFO1FBQ25CLGlCQUFPLENBQUMsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFFL0MsK0JBQWMsQ0FBQyxrQkFBa0IsRUFBRTthQUM5QixLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLHlCQUF5QixFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDakUsQ0FBQyxDQUFDO0lBRUYsaUJBQU8sQ0FBQyxPQUFPLENBQUM7UUFDWixLQUFLLEVBQUUsd0VBQXdFO1FBQy9FLFFBQVEsRUFBRSxtRUFBbUU7UUFDN0UsU0FBUztLQUNaLENBQUMsQ0FBQztBQUVQLENBQUM7QUFFWSxRQUFBLHdCQUF3QixHQUFHLENBQUMsS0FBYSxFQUFFLEVBQUU7SUFFdEQsT0FBTyw4QkFBQywyQkFBWSxJQUFDLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxLQUFLLE1BQU07UUFFNUMsOEJBQUMsZ0JBQU0sSUFBQyxLQUFLLEVBQUMsV0FBVyxFQUNqQixJQUFJLEVBQUMsSUFBSSxFQUNULE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSwwQkFJbEMsQ0FFRSxDQUFDO0FBQ3BCLENBQUMsQ0FBQztBQU9XLFFBQUEsa0JBQWtCLEdBQUcsQ0FBQyxLQUF3QixF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c291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50IHJlYWN0L25vLW11bHRpLWNvbXA6IDAsIHJlYWN0L3Byb3AtdHlwZXM6IDAgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1VzZXJJbmZvfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi93ZWIvanMvYXBwcy9yZXBvc2l0b3J5L2F1dGhfaGFuZGxlci9BdXRoSGFuZGxlcic7XG5pbXBvcnQge0FjY291bnRQbGFufSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi93ZWIvanMvYWNjb3VudHMvQWNjb3VudCc7XG5pbXBvcnQge051bGxDb2xsYXBzZX0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vd2ViL2pzL3VpL251bGxfY29sbGFwc2UvTnVsbENvbGxhcHNlJztcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3RzdHJhcC9saWIvQnV0dG9uJztcbmltcG9ydCB7QWNjb3VudEFjdGlvbnN9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3dlYi9qcy9hY2NvdW50cy9BY2NvdW50QWN0aW9ucyc7XG5pbXBvcnQge0RpYWxvZ3N9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3dlYi9qcy91aS9kaWFsb2dzL0RpYWxvZ3MnO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge1RvYXN0ZXJ9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3dlYi9qcy91aS90b2FzdGVyL1RvYXN0ZXInO1xuaW1wb3J0IHtOdW1iZXJzfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy91dGlsL051bWJlcnNcIjtcbmltcG9ydCB7RGVza3RvcENvbnRlbnQsIE1vYmlsZUNvbnRlbnR9IGZyb20gXCIuL1ByZW1pdW1Db3B5XCI7XG5pbXBvcnQge0RldmljZXN9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi93ZWIvanMvdXRpbC9EZXZpY2VzXCI7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuZnVuY3Rpb24gY2FuY2VsU3Vic2NyaXB0aW9uKCkge1xuXG4gICAgY29uc3Qgb25Db25maXJtID0gKCkgPT4ge1xuICAgICAgICBUb2FzdGVyLmluZm8oXCJDYW5jZWxpbmcgcGxhbi4gIE9uZSBtb21lbnQuLi5cIik7XG5cbiAgICAgICAgQWNjb3VudEFjdGlvbnMuY2FuY2VsU3Vic2NyaXB0aW9uKClcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gbG9nLmVycm9yKFwiVW5hYmxlIHRvIGNhbmNlbCBwbGFuOiBcIiwgZXJyKSk7XG4gICAgfTtcblxuICAgIERpYWxvZ3MuY29uZmlybSh7XG4gICAgICAgIHRpdGxlOiBgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGNhbmNlbCB5b3VyIHBsYW4gYW5kIHJldmVydCB0byB0aGUgZnJlZSB0aWVyP2AsXG4gICAgICAgIHN1YnRpdGxlOiAnWW91ciBiaWxsaW5nIHdpbGwgYXV0b21hdGljYWxseSBiZSB1cGRhdGVkIGFuZCBhY2NvdW50IHByby1yYXRlZC4nLFxuICAgICAgICBvbkNvbmZpcm1cbiAgICB9KTtcblxufVxuXG5leHBvcnQgY29uc3QgQ2FuY2VsU3Vic2NyaXB0aW9uQnV0dG9uID0gKHByb3BzOiBJUHJvcHMpID0+IHtcblxuICAgIHJldHVybiA8TnVsbENvbGxhcHNlIG9wZW49e3Byb3BzLnBsYW4gIT09ICdmcmVlJ30+XG5cbiAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjYW5jZWxTdWJzY3JpcHRpb24oKX0+XG5cbiAgICAgICAgICAgIENhbmNlbCBTdWJzY3JpcHRpb25cblxuICAgICAgICA8L0J1dHRvbj5cblxuICAgIDwvTnVsbENvbGxhcHNlPjtcbn07XG5cbmludGVyZmFjZSBQbGFuSW50ZXJ2YWxQcm9wcyB7XG4gICAgcmVhZG9ubHkgcGxhbkludGVydmFsOiBQbGFuSW50ZXJ2YWw7XG4gICAgcmVhZG9ubHkgdG9nZ2xlUGxhbkludGVydmFsOiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgUGxhbkludGVydmFsQnV0dG9uID0gKHByb3BzOiBQbGFuSW50ZXJ2YWxQcm9wcykgPT4ge1xuXG4gICAgcmV0dXJuIDxCdXR0b24gY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgIHNpemU9XCJtZFwiXG4gICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcHJvcHMudG9nZ2xlUGxhbkludGVydmFsKCl9PlxuXG4gICAgICAgICAgICBTaG93IHtwcm9wcy5wbGFuSW50ZXJ2YWwgPT09ICdtb250aCcgPyAnWWVhcmx5JyA6ICdNb250aGx5J30gUGxhbnNcblxuICAgICAgICA8L0J1dHRvbj47XG5cbn07XG5cblxuaW50ZXJmYWNlIFBsYW5QcmljaW5nUHJvcHMge1xuICAgIHJlYWRvbmx5IHBsYW46IEFjY291bnRQbGFuO1xuICAgIHJlYWRvbmx5IHBsYW5JbnRlcnZhbDogUGxhbkludGVydmFsO1xufVxuY29uc3QgUGxhblByaWNpbmcgPSAocHJvcHM6IFBsYW5QcmljaW5nUHJvcHMpID0+IHtcblxuICAgIGNvbnN0IGNvbXB1dGVNb250aGx5QW1vdW50ID0gKCkgPT4ge1xuXG4gICAgICAgIHN3aXRjaCAocHJvcHMucGxhbikge1xuXG4gICAgICAgICAgICBjYXNlIFwiZnJlZVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiAwLjA7XG4gICAgICAgICAgICBjYXNlIFwiYnJvbnplXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDQuOTk7XG4gICAgICAgICAgICBjYXNlIFwic2lsdmVyXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDkuOTk7XG4gICAgICAgICAgICBjYXNlIFwiZ29sZFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiAxNC45OTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuXG4gICAgY29uc3QgY29tcHV0ZVllYXJseUFtb3VudCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbW9udGhseUFtb3VudCA9IGNvbXB1dGVNb250aGx5QW1vdW50KCk7XG4gICAgICAgIHJldHVybiBOdW1iZXJzLnRvRml4ZWRGbG9hdChtb250aGx5QW1vdW50ICogMTEsIDIpO1xuICAgIH07XG5cbiAgICBjb25zdCBhbW91bnQgPSBwcm9wcy5wbGFuSW50ZXJ2YWwgPT09ICdtb250aCcgPyBjb21wdXRlTW9udGhseUFtb3VudCgpIDogY29tcHV0ZVllYXJseUFtb3VudCgpO1xuXG4gICAgcmV0dXJuIDxkaXY+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXh4bGFyZ2VcIj4ke2Ftb3VudH08c3BhblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1zbWFsbFwiPi97cHJvcHMucGxhbkludGVydmFsfTwvc3Bhbj5cbiAgICAgICAgPC9oMz5cblxuICAgIDwvZGl2PjtcblxufTtcblxuXG5leHBvcnQgY29uc3QgUHJpY2luZ092ZXJ2aWV3ID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLTNcIj5cbiAgICAgICAgICAgICAgICA8aDE+UHJpY2luZyBhbmQgUGxhbnM8L2gxPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLTMgdGV4dC14bGFyZ2VcIj5cbiAgICAgICAgICAgICAgICBQb2xhciBpcyBkZXNpZ25lZCB0byBzY2FsZSB0byBmcm9tIGJvdGggbm92aWNlIHVzZXJzIHRvXG4gICAgICAgICAgICAgICAgUG93ZXIgdXNlcnMuXG5cbiAgICAgICAgICAgICAgICBKdXN0IG5lZWQgdG8gcmVhZCBhIGZldyBQREZzLiBObyBwcm9ibGVtLiBOZWVkIHRvIG1hbmFnZVxuICAgICAgICAgICAgICAgIGFuZCByZWFkIGh1bmRyZWRzIHRvIHRob3VzYW5kcyBvZiBkb2N1bWVudHM/IE5vIHByb2JsZW0uXG4gICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLTMgdGV4dC14bGFyZ2VcIj5cbiAgICAgICAgICAgICAgICBIYXZlIGFuIGlzc3VlPyAgRmVlbCBmcmVlIHRvIHNlbmQgdXMgYW4gZW1haWwgYXQgPGI+c3VwcG9ydEBnZXRwb2xhcml6ZWQuaW88L2I+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgY29uc3QgRmluZFBsYW4gPSAoKSA9PiB7XG4gICAgcmV0dXJuIDxkaXY+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXRpbnQgdGV4dC1sZWZ0XCI+XG5cbiAgICAgICAgICAgIEZpbmQgYSBwbGFuPGJyLz5cblxuICAgICAgICAgICAgey8qPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1sYXJnZVwiPnRoYXQncyByaWdodCBmb3IgeW91Ljwvc3Bhbj4qL31cblxuICAgICAgICA8L2gyPlxuXG5cbiAgICAgICAgPHA+XG4gICAgICAgICAgICBXZSBoYXZlIGJvdGggeWVhcmx5IGFuZCBtb250aGx5IHBsYW5zLiAgR2V0IGEgZnJlZVxuICAgICAgICAgICAgbW9udGggb2Ygc2VydmljZSBpZiB5b3UgYnV5IGZvciBhIHdob2xlIHllYXIhXG4gICAgICAgIDwvcD5cblxuXG4gICAgPC9kaXY+XG59O1xuXG5leHBvcnQgY29uc3QgRnJlZVBsYW4gPSAoKSA9PiB7XG4gICAgcmV0dXJuIDxkaXY+XG4gICAgICAgIDxoMj5GcmVlPC9oMj5cblxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14eGxhcmdlXCI+JDA8L2gzPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtYWxsIHRleHQtdGludFwiPlxuICAgICAgICAgICAgV2Ugd2FudCBhcyBtYW55IHBlb3BsZSB0byB1c2UgUG9sYXIgYXNcbiAgICAgICAgICAgIHBvc3NpYmxlLiBNb3N0IHBlb3BsZVxuICAgICAgICAgICAgZWFzaWx5IHN0YXkgd2l0aGluIHRoZXNlIGxpbWl0cy5cbiAgICAgICAgPC9wPlxuXG4gICAgPC9kaXY+O1xufTtcblxuZXhwb3J0IGNvbnN0IEJyb256ZVBsYW4gPSAocHJvcHM6IElTdGF0ZSkgPT4ge1xuICAgIHJldHVybiA8ZGl2PlxuICAgICAgICA8aDI+QnJvbnplPC9oMj5cblxuICAgICAgICA8UGxhblByaWNpbmcgcGxhbj0nYnJvbnplJyBwbGFuSW50ZXJ2YWw9e3Byb3BzLnBsYW5JbnRlcnZhbH0vPlxuXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc21hbGwgdGV4dC10aW50XCI+TGVzc1xuICAgICAgICAgICAgdGhhbiB0aGUgcHJpY2Ugb2YgYSBjdXAgb2ZcbiAgICAgICAgICAgIGNvZmZlZS4gTmVlZCBtb3JlIHN0b3JhZ2UgYW5kIHJlYWR5IHRvXG4gICAgICAgICAgICBtb3ZlIHVwIHRvIHRoZSBuZXh0IGxldmVsPyBXZSdyZSByZWFkeVxuICAgICAgICAgICAgd2hlbiB5b3UgYXJlITwvcD5cblxuICAgIDwvZGl2Pjtcbn07XG5cbmV4cG9ydCBjb25zdCBTaWx2ZXJQbGFuID0gKHByb3BzOiBJU3RhdGUpID0+IHtcbiAgICByZXR1cm4gPGRpdj5cbiAgICAgICAgPGgyPlNpbHZlcjwvaDI+XG5cbiAgICAgICAgPFBsYW5QcmljaW5nIHBsYW49J3NpbHZlcicgcGxhbkludGVydmFsPXtwcm9wcy5wbGFuSW50ZXJ2YWx9Lz5cblxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtYWxsIHRleHQtdGludFwiPlxuICAgICAgICAgICAgRGVzaWduZWQgZm9yIFBvbGFyIHBvd2VyIHVzZXJzISBOZWVkXG4gICAgICAgICAgICBtb3JlIHN0b3JhZ2U/IExldCdzIGRvIHRoaXMhXG4gICAgICAgIDwvcD5cbiAgICA8L2Rpdj47XG59O1xuXG5leHBvcnQgY29uc3QgR29sZFBsYW4gPSAocHJvcHM6IElTdGF0ZSkgPT4ge1xuICAgIHJldHVybiA8ZGl2PlxuICAgICAgICA8aDI+R29sZDwvaDI+XG5cbiAgICAgICAgPFBsYW5QcmljaW5nIHBsYW49J2dvbGQnIHBsYW5JbnRlcnZhbD17cHJvcHMucGxhbkludGVydmFsfS8+XG5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbWFsbCB0ZXh0LXRpbnRcIj5cbiAgICAgICAgICAgIFlvdSBjYW4ndCBsaXZlIHdpdGhvdXQgUG9sYXJcbiAgICAgICAgICAgIGFuZCBoYXZlIGEgbWFzc2l2ZSBhbW91bnQgb2YgZGF0YSB0aGF0XG4gICAgICAgICAgICB5b3UgbmVlZCB0byBrZWVwIHNlY3VyZS5cbiAgICAgICAgPC9wPlxuICAgICAgICA8YnIvPlxuICAgIDwvZGl2Pjtcbn07XG5cblxuZXhwb3J0IGNsYXNzIFByZW1pdW1Db250ZW50MiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy50b2dnbGVQbGFuSW50ZXJ2YWwgPSB0aGlzLnRvZ2dsZVBsYW5JbnRlcnZhbC5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBwbGFuSW50ZXJ2YWw6ICdtb250aCdcbiAgICAgICAgfTtcblxuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgaWYgKERldmljZXMuaXNQaG9uZSgpKSB7XG5cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPE1vYmlsZUNvbnRlbnQgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLnRoaXMuc3RhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlUGxhbkludGVydmFsPXsoKSA9PiB0aGlzLnRvZ2dsZVBsYW5JbnRlcnZhbCgpfS8+XG4gICAgICAgICAgICApO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxEZXNrdG9wQ29udGVudCB7Li4udGhpcy5wcm9wc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLnRoaXMuc3RhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZVBsYW5JbnRlcnZhbD17KCkgPT4gdGhpcy50b2dnbGVQbGFuSW50ZXJ2YWwoKX0vPlxuICAgICAgICAgICAgKTtcblxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIHRvZ2dsZVBsYW5JbnRlcnZhbCgpIHtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHBsYW5JbnRlcnZhbDogdGhpcy5zdGF0ZS5wbGFuSW50ZXJ2YWwgPT09ICdtb250aCcgPyAneWVhcicgOiAnbW9udGgnXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG59XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICAgIHJlYWRvbmx5IHBsYW46IEFjY291bnRQbGFuO1xuICAgIHJlYWRvbmx5IHVzZXJJbmZvPzogVXNlckluZm87XG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xuICAgIHJlYWRvbmx5IHBsYW5JbnRlcnZhbDogUGxhbkludGVydmFsO1xufVxuXG5leHBvcnQgdHlwZSBQbGFuSW50ZXJ2YWwgPSAnbW9udGgnIHwgJ3llYXInO1xuIl19