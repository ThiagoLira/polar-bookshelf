"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
class LoginRequired extends react_1.default.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return react_1.default.createElement("div", { className: "text-md" },
            react_1.default.createElement("p", null,
                "Please login to ",
                react_1.default.createElement("b", null, "cloud sync"),
                " to use document sharing."));
    }
}
exports.LoginRequired = LoginRequired;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9naW5SZXF1aXJlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkxvZ2luUmVxdWlyZWQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsa0RBQTBCO0FBRTFCLE1BQWEsYUFBYyxTQUFRLGVBQUssQ0FBQyxTQUF5QjtJQUU5RCxZQUFZLEtBQWE7UUFDckIsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRWpCLENBQUM7SUFFTSxNQUFNO1FBQ1QsT0FBTyx1Q0FBSyxTQUFTLEVBQUMsU0FBUztZQUUzQjs7Z0JBQ29CLHNEQUFpQjs0Q0FDakMsQ0FFRixDQUFDO0lBRVgsQ0FBQztDQUVKO0FBbEJELHNDQWtCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBjbGFzcyBMb2dpblJlcXVpcmVkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbWRcIj5cblxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgUGxlYXNlIGxvZ2luIHRvIDxiPmNsb3VkIHN5bmM8L2I+IHRvIHVzZSBkb2N1bWVudCBzaGFyaW5nLlxuICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgIDwvZGl2PjtcblxuICAgIH1cblxufVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG59XG4iXX0=