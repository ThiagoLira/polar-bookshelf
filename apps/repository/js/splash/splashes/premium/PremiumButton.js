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
const Nav_1 = require("../../../../../../web/js/ui/util/Nav");
const AccountActions_1 = require("../../../../../../web/js/accounts/AccountActions");
const Logger_1 = require("polar-shared/src/logger/Logger");
const NullCollapse_1 = require("../../../../../../web/js/ui/null_collapse/NullCollapse");
const Dialogs_1 = require("../../../../../../web/js/ui/dialogs/Dialogs");
const Toaster_1 = require("../../../../../../web/js/ui/toaster/Toaster");
const log = Logger_1.Logger.create();
class PremiumButton extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }
    render() {
        const { to, from, userInfo, interval } = this.props;
        const currentPlan = to === from;
        const email = userInfo ? userInfo.email : undefined;
        const buy = from === 'free';
        const text = buy ? "Buy" : "Upgrade";
        const computePlan = () => {
            if (interval === 'year') {
                return `${to}_${interval}`;
            }
            return to;
        };
        const plan = computePlan();
        const buyHandler = () => {
            if (email) {
                Nav_1.Nav.openLinkWithNewTab(`https://getpolarized.io/pay.html?email=${email}&plan=${plan}`);
            }
            else {
                Nav_1.Nav.openLinkWithNewTab(`https://getpolarized.io/pay.html?plan=${plan}`);
            }
        };
        const changeHandler = () => {
            const onConfirm = () => {
                console.log("Changing plan to: " + to);
                Toaster_1.Toaster.info(`Changing plan to ${to}.  One moment...`);
                AccountActions_1.AccountActions.changePlan(to)
                    .catch(err => log.error("Unable to upgrade plan: ", err));
            };
            Dialogs_1.Dialogs.confirm({
                title: `Are you sure you want to ${to}?`,
                subtitle: 'Your billing will automatically be updated and account pro-rated.',
                type: 'warning',
                onConfirm
            });
        };
        const handler = buy ? buyHandler : changeHandler;
        return (React.createElement("div", null,
            React.createElement(NullCollapse_1.NullCollapse, { open: !currentPlan },
                React.createElement(Button_1.default, { color: "primary", size: "lg", onClick: () => handler() }, text))));
    }
}
exports.PremiumButton = PremiumButton;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJlbWl1bUJ1dHRvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlByZW1pdW1CdXR0b24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUMvQixtRUFBMkM7QUFDM0MsOERBQXlEO0FBRXpELHFGQUFnRjtBQUNoRiwyREFBc0Q7QUFDdEQseUZBQW9GO0FBQ3BGLHlFQUFvRTtBQUNwRSx5RUFBb0U7QUFJcEUsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLE1BQWEsYUFBYyxTQUFRLEtBQUssQ0FBQyxTQUF5QjtJQUU5RCxZQUFZLEtBQWEsRUFBRSxPQUFZO1FBQ25DLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUNaLENBQUM7SUFFTixDQUFDO0lBRU0sTUFBTTtRQUVULE1BQU0sRUFBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBSWxELE1BQU0sV0FBVyxHQUFHLEVBQUUsS0FBSyxJQUFJLENBQUM7UUFFaEMsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFHcEQsTUFBTSxHQUFHLEdBQUcsSUFBSSxLQUFLLE1BQU0sQ0FBQztRQUU1QixNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBRXJDLE1BQU0sV0FBVyxHQUFHLEdBQUcsRUFBRTtZQUVyQixJQUFJLFFBQVEsS0FBSyxNQUFNLEVBQUU7Z0JBQ3JCLE9BQU8sR0FBRyxFQUFFLElBQUksUUFBUSxFQUFFLENBQUM7YUFDOUI7WUFFRCxPQUFPLEVBQUUsQ0FBQztRQUVkLENBQUMsQ0FBQztRQUVGLE1BQU0sSUFBSSxHQUFHLFdBQVcsRUFBRSxDQUFDO1FBRTNCLE1BQU0sVUFBVSxHQUFHLEdBQUcsRUFBRTtZQUtwQixJQUFJLEtBQUssRUFBRTtnQkFDUCxTQUFHLENBQUMsa0JBQWtCLENBQUMsMENBQTBDLEtBQUssU0FBUyxJQUFJLEVBQUUsQ0FBQyxDQUFDO2FBQzFGO2lCQUFNO2dCQUNILFNBQUcsQ0FBQyxrQkFBa0IsQ0FBQyx5Q0FBeUMsSUFBSSxFQUFFLENBQUMsQ0FBQzthQUMzRTtRQUVMLENBQUMsQ0FBQztRQUVGLE1BQU0sYUFBYSxHQUFHLEdBQUcsRUFBRTtZQUV2QixNQUFNLFNBQVMsR0FBRyxHQUFHLEVBQUU7Z0JBRW5CLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEdBQUcsRUFBRSxDQUFDLENBQUM7Z0JBRXZDLGlCQUFPLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLGtCQUFrQixDQUFDLENBQUM7Z0JBRXZELCtCQUFjLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQztxQkFDeEIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQywwQkFBMEIsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ2xFLENBQUMsQ0FBQztZQUVGLGlCQUFPLENBQUMsT0FBTyxDQUFDO2dCQUNaLEtBQUssRUFBRSw0QkFBNEIsRUFBRSxHQUFHO2dCQUN4QyxRQUFRLEVBQUUsbUVBQW1FO2dCQUM3RSxJQUFJLEVBQUUsU0FBUztnQkFDZixTQUFTO2FBQ1osQ0FBQyxDQUFDO1FBRVAsQ0FBQyxDQUFDO1FBRUYsTUFBTSxPQUFPLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQztRQUVqRCxPQUFPLENBQ0g7WUFFSSxvQkFBQywyQkFBWSxJQUFDLElBQUksRUFBRSxDQUFFLFdBQVc7Z0JBRTdCLG9CQUFDLGdCQUFNLElBQUMsS0FBSyxFQUFDLFNBQVMsRUFDZixJQUFJLEVBQUMsSUFBSSxFQUNULE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFFM0IsSUFBSSxDQUVBLENBRUUsQ0FFYixDQUNULENBQUM7SUFDTixDQUFDO0NBRUo7QUE1RkQsc0NBNEZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdHN0cmFwL2xpYi9CdXR0b24nO1xuaW1wb3J0IHtOYXZ9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3dlYi9qcy91aS91dGlsL05hdic7XG5pbXBvcnQge1VzZXJJbmZvfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi93ZWIvanMvYXBwcy9yZXBvc2l0b3J5L2F1dGhfaGFuZGxlci9BdXRoSGFuZGxlcic7XG5pbXBvcnQge0FjY291bnRBY3Rpb25zfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi93ZWIvanMvYWNjb3VudHMvQWNjb3VudEFjdGlvbnMnO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge051bGxDb2xsYXBzZX0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vd2ViL2pzL3VpL251bGxfY29sbGFwc2UvTnVsbENvbGxhcHNlJztcbmltcG9ydCB7RGlhbG9nc30gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vd2ViL2pzL3VpL2RpYWxvZ3MvRGlhbG9ncyc7XG5pbXBvcnQge1RvYXN0ZXJ9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3dlYi9qcy91aS90b2FzdGVyL1RvYXN0ZXInO1xuaW1wb3J0IHtBY2NvdW50UGxhbn0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uL3dlYi9qcy9hY2NvdW50cy9BY2NvdW50XCI7XG5pbXBvcnQge1BsYW5JbnRlcnZhbH0gZnJvbSBcIi4vUHJlbWl1bUNvbnRlbnQyXCI7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuZXhwb3J0IGNsYXNzIFByZW1pdW1CdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJUHJvcHMsIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgfTtcblxuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgY29uc3Qge3RvLCBmcm9tLCB1c2VySW5mbywgaW50ZXJ2YWx9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICAvLyB0cnVlIHdoZW4gdGhpcyBpcyB0aGUgY3VycmVudCBwbGFuIGFuZCB3ZSBkbyBub3QgbmVlZCB0byBzaG93IHRoZVxuICAgICAgICAvLyBidXR0b25cbiAgICAgICAgY29uc3QgY3VycmVudFBsYW4gPSB0byA9PT0gZnJvbTtcblxuICAgICAgICBjb25zdCBlbWFpbCA9IHVzZXJJbmZvID8gdXNlckluZm8uZW1haWwgOiB1bmRlZmluZWQ7XG5cbiAgICAgICAgLy8gdHJ1ZSBpZiB3ZSdyZSBCVVlJTkcgYSBuZXcgcGxhbi4uLlxuICAgICAgICBjb25zdCBidXkgPSBmcm9tID09PSAnZnJlZSc7XG5cbiAgICAgICAgY29uc3QgdGV4dCA9IGJ1eSA/IFwiQnV5XCIgOiBcIlVwZ3JhZGVcIjtcblxuICAgICAgICBjb25zdCBjb21wdXRlUGxhbiA9ICgpID0+IHtcblxuICAgICAgICAgICAgaWYgKGludGVydmFsID09PSAneWVhcicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7dG99XyR7aW50ZXJ2YWx9YDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRvO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgcGxhbiA9IGNvbXB1dGVQbGFuKCk7XG5cbiAgICAgICAgY29uc3QgYnV5SGFuZGxlciA9ICgpID0+IHtcbiAgICAgICAgICAgIC8vIGlmIHdlJ3JlIGJ1eWluZyBhIE5FVyBwcm9kdWN0IGdvIGFoZWFkIGFuZCByZWRpcmVjdCB1cyB0b1xuICAgICAgICAgICAgLy8gc3RyaXBlIGFuZCB1c2UgdGhlaXIgQlVZIHBhY2thZ2UuICBUaGlzIGlzIGJldHRlciB0aGFuIGVtYmVkZGluZ1xuICAgICAgICAgICAgLy8gdGhlIHN0cmlwZSBTREsgYW5kIGFsc28gc3RyaXBlIEFMU08gbmVlZHMgdG8gcnVuIG92ZXIgSFRUUFNcblxuICAgICAgICAgICAgaWYgKGVtYWlsKSB7XG4gICAgICAgICAgICAgICAgTmF2Lm9wZW5MaW5rV2l0aE5ld1RhYihgaHR0cHM6Ly9nZXRwb2xhcml6ZWQuaW8vcGF5Lmh0bWw/ZW1haWw9JHtlbWFpbH0mcGxhbj0ke3BsYW59YCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIE5hdi5vcGVuTGlua1dpdGhOZXdUYWIoYGh0dHBzOi8vZ2V0cG9sYXJpemVkLmlvL3BheS5odG1sP3BsYW49JHtwbGFufWApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgY2hhbmdlSGFuZGxlciA9ICgpID0+IHtcblxuICAgICAgICAgICAgY29uc3Qgb25Db25maXJtID0gKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDaGFuZ2luZyBwbGFuIHRvOiBcIiArIHRvKTtcblxuICAgICAgICAgICAgICAgIFRvYXN0ZXIuaW5mbyhgQ2hhbmdpbmcgcGxhbiB0byAke3RvfS4gIE9uZSBtb21lbnQuLi5gKTtcblxuICAgICAgICAgICAgICAgIEFjY291bnRBY3Rpb25zLmNoYW5nZVBsYW4odG8pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gbG9nLmVycm9yKFwiVW5hYmxlIHRvIHVwZ3JhZGUgcGxhbjogXCIsIGVycikpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgRGlhbG9ncy5jb25maXJtKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogYEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byAke3RvfT9gLFxuICAgICAgICAgICAgICAgIHN1YnRpdGxlOiAnWW91ciBiaWxsaW5nIHdpbGwgYXV0b21hdGljYWxseSBiZSB1cGRhdGVkIGFuZCBhY2NvdW50IHByby1yYXRlZC4nLFxuICAgICAgICAgICAgICAgIHR5cGU6ICd3YXJuaW5nJyxcbiAgICAgICAgICAgICAgICBvbkNvbmZpcm1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgaGFuZGxlciA9IGJ1eSA/IGJ1eUhhbmRsZXIgOiBjaGFuZ2VIYW5kbGVyO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuXG4gICAgICAgICAgICAgICAgPE51bGxDb2xsYXBzZSBvcGVuPXshIGN1cnJlbnRQbGFufT5cblxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVyKCl9PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGV4dH1cblxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cblxuICAgICAgICAgICAgICAgIDwvTnVsbENvbGxhcHNlPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUHJvcHMge1xuICAgIHJlYWRvbmx5IGZyb206IEFjY291bnRQbGFuO1xuICAgIHJlYWRvbmx5IHRvOiBBY2NvdW50UGxhbjtcbiAgICByZWFkb25seSBpbnRlcnZhbDogUGxhbkludGVydmFsO1xuICAgIHJlYWRvbmx5IHVzZXJJbmZvPzogVXNlckluZm87XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJU3RhdGUge1xuXG59XG4iXX0=