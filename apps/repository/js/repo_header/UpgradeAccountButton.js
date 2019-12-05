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
const AccountProvider_1 = require("../../../../web/js/accounts/AccountProvider");
class UpgradeAccountButton extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const account = AccountProvider_1.AccountProvider.get();
        if (account && account.plan === 'gold') {
            return null;
        }
        return (React.createElement(reactstrap_1.Button, { color: "light", size: "md", className: "border border-success" }, "Upgrade Account"));
    }
}
exports.UpgradeAccountButton = UpgradeAccountButton;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXBncmFkZUFjY291bnRCdXR0b24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJVcGdyYWRlQWNjb3VudEJ1dHRvbi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsNkNBQStCO0FBQy9CLDJDQUFrQztBQUNsQyxpRkFBNEU7QUFFNUUsTUFBYSxvQkFBcUIsU0FBUSxLQUFLLENBQUMsYUFBNkI7SUFFekUsWUFBWSxLQUFhLEVBQUUsT0FBWTtRQUNuQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFTSxNQUFNO1FBRVQsTUFBTSxPQUFPLEdBQUcsaUNBQWUsQ0FBQyxHQUFHLEVBQUUsQ0FBQTtRQUVyQyxJQUFJLE9BQU8sSUFBSSxPQUFPLENBQUMsSUFBSSxLQUFLLE1BQU0sRUFBRTtZQUVwQyxPQUFPLElBQUksQ0FBQztTQUNmO1FBRUQsT0FBTyxDQUNILG9CQUFDLG1CQUFNLElBQUMsS0FBSyxFQUFDLE9BQU8sRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLFNBQVMsRUFBQyx1QkFBdUIsc0JBRXhELENBQ1osQ0FBQztJQUVOLENBQUM7Q0FHSjtBQXhCRCxvREF3QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0J1dHRvbn0gZnJvbSAncmVhY3RzdHJhcCc7XG5pbXBvcnQge0FjY291bnRQcm92aWRlcn0gZnJvbSBcIi4uLy4uLy4uLy4uL3dlYi9qcy9hY2NvdW50cy9BY2NvdW50UHJvdmlkZXJcIjtcblxuZXhwb3J0IGNsYXNzIFVwZ3JhZGVBY2NvdW50QnV0dG9uIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcywgY29udGV4dDogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuXG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBBY2NvdW50UHJvdmlkZXIuZ2V0KClcblxuICAgICAgICBpZiAoYWNjb3VudCAmJiBhY2NvdW50LnBsYW4gPT09ICdnb2xkJykge1xuICAgICAgICAgICAgLy8gYWxyZWFkeSBhdCBtYXggYWNjb3VudCBsZXZlbFxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cImxpZ2h0XCIgc2l6ZT1cIm1kXCIgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1zdWNjZXNzXCI+XG4gICAgICAgICAgICAgICAgVXBncmFkZSBBY2NvdW50XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgKTtcblxuICAgIH1cblxuXG59XG5cbmludGVyZmFjZSBJUHJvcHMge1xufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcblxufVxuIl19