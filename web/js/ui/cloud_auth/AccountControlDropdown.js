"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Button_1 = __importDefault(require("reactstrap/lib/Button"));
const PopoverBody_1 = __importDefault(require("reactstrap/lib/PopoverBody"));
const reactstrap_1 = require("reactstrap");
const Functions_1 = require("polar-shared/src/util/Functions");
const AccountControlBar_1 = require("./AccountControlBar");
const DropdownChevron_1 = require("../util/DropdownChevron");
class AccountControlDropdown extends react_1.default.PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        return (react_1.default.createElement("div", null,
            react_1.default.createElement(Button_1.default, { color: "light", id: "account-control-button", size: "md", onClick: () => Functions_1.NULL_FUNCTION, style: { whiteSpace: 'nowrap' }, className: "header-filter-clickable pl-2 pr-2 border" },
                react_1.default.createElement("i", { className: "fas fa-user", style: { marginRight: '5px' } }),
                react_1.default.createElement(DropdownChevron_1.DropdownChevron, null)),
            react_1.default.createElement(reactstrap_1.UncontrolledPopover, { trigger: "legacy", placement: "bottom", target: "account-control-button", delay: { show: 0, hide: 0 }, style: { maxWidth: '600px' } },
                react_1.default.createElement(PopoverBody_1.default, { className: "shadow" },
                    react_1.default.createElement(AccountControlBar_1.AccountControlBar, { userInfo: this.props.userInfo, onInvite: this.props.onInvite, onLogout: this.props.onLogout })))));
    }
}
exports.AccountControlDropdown = AccountControlDropdown;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNjb3VudENvbnRyb2xEcm9wZG93bi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkFjY291bnRDb250cm9sRHJvcGRvd24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0Esa0RBQTBCO0FBRTFCLG1FQUEyQztBQUMzQyw2RUFBcUQ7QUFDckQsMkNBQStDO0FBQy9DLCtEQUE4RDtBQUM5RCwyREFBc0Q7QUFDdEQsNkRBQXdEO0FBRXhELE1BQWEsc0JBQXVCLFNBQVEsZUFBSyxDQUFDLGFBQTZCO0lBSTNFLFlBQVksS0FBYTtRQUNyQixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFHakIsQ0FBQztJQUVNLE1BQU07UUFFVCxPQUFPLENBRUg7WUFFSSw4QkFBQyxnQkFBTSxJQUFDLEtBQUssRUFBQyxPQUFPLEVBQ2IsRUFBRSxFQUFDLHdCQUF3QixFQUMzQixJQUFJLEVBQUMsSUFBSSxFQUNULE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyx5QkFBYSxFQUM1QixLQUFLLEVBQUUsRUFBQyxVQUFVLEVBQUUsUUFBUSxFQUFDLEVBQzdCLFNBQVMsRUFBQywwQ0FBMEM7Z0JBQ3hELHFDQUFHLFNBQVMsRUFBQyxhQUFhLEVBQUMsS0FBSyxFQUFFLEVBQUMsV0FBVyxFQUFFLEtBQUssRUFBQyxHQUFHO2dCQU16RCw4QkFBQyxpQ0FBZSxPQUFFLENBRWI7WUFFVCw4QkFBQyxnQ0FBbUIsSUFBQyxPQUFPLEVBQUMsUUFBUSxFQUNoQixTQUFTLEVBQUMsUUFBUSxFQUNsQixNQUFNLEVBQUMsd0JBQXdCLEVBQy9CLEtBQUssRUFBRSxFQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBQyxFQUN6QixLQUFLLEVBQUUsRUFBQyxRQUFRLEVBQUUsT0FBTyxFQUFDO2dCQUUzQyw4QkFBQyxxQkFBVyxJQUFDLFNBQVMsRUFBQyxRQUFRO29CQUMzQiw4QkFBQyxxQ0FBaUIsSUFBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQzdCLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFDN0IsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLENBRXpDLENBRUksQ0FFcEIsQ0FFVCxDQUFDO0lBRU4sQ0FBQztDQUVKO0FBckRELHdEQXFEQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludCByZWFjdC9uby1tdWx0aS1jb21wOiAwLCByZWFjdC9wcm9wLXR5cGVzOiAwICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtVc2VySW5mb30gZnJvbSAnLi4vLi4vLi4vLi4vd2ViL2pzL2FwcHMvcmVwb3NpdG9yeS9hdXRoX2hhbmRsZXIvQXV0aEhhbmRsZXInO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdHN0cmFwL2xpYi9CdXR0b24nO1xuaW1wb3J0IFBvcG92ZXJCb2R5IGZyb20gJ3JlYWN0c3RyYXAvbGliL1BvcG92ZXJCb2R5JztcbmltcG9ydCB7VW5jb250cm9sbGVkUG9wb3Zlcn0gZnJvbSAncmVhY3RzdHJhcCc7XG5pbXBvcnQge05VTExfRlVOQ1RJT059IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC9GdW5jdGlvbnMnO1xuaW1wb3J0IHtBY2NvdW50Q29udHJvbEJhcn0gZnJvbSAnLi9BY2NvdW50Q29udHJvbEJhcic7XG5pbXBvcnQge0Ryb3Bkb3duQ2hldnJvbn0gZnJvbSAnLi4vdXRpbC9Ecm9wZG93bkNoZXZyb24nO1xuXG5leHBvcnQgY2xhc3MgQWNjb3VudENvbnRyb2xEcm9wZG93biBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuXG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICA8ZGl2PlxuXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYWNjb3VudC1jb250cm9sLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gTlVMTF9GVU5DVElPTn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2hpdGVTcGFjZTogJ25vd3JhcCd9fVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGVhZGVyLWZpbHRlci1jbGlja2FibGUgcGwtMiBwci0yIGJvcmRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdXNlclwiIHN0eWxlPXt7bWFyZ2luUmlnaHQ6ICc1cHgnfX0vPlxuXG4gICAgICAgICAgICAgICAgICAgIHsvKjxzcGFuIGNsYXNzTmFtZT1cImQtbm9uZS1tb2JpbGVcIj4qL31cbiAgICAgICAgICAgICAgICAgICAgey8qICAgIHtBcHBSdW50aW1lLmlzQnJvd3NlcigpID8gJ0FjY291bnQnIDogJ0Nsb3VkIFN5bmMnfSovfVxuICAgICAgICAgICAgICAgICAgICB7Lyo8L3NwYW4+Ki99XG5cbiAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duQ2hldnJvbi8+XG5cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cblxuICAgICAgICAgICAgICAgIDxVbmNvbnRyb2xsZWRQb3BvdmVyIHRyaWdnZXI9XCJsZWdhY3lcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cImJvdHRvbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiYWNjb3VudC1jb250cm9sLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk9e3tzaG93OiAwLCBoaWRlOiAwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21heFdpZHRoOiAnNjAwcHgnfX0+XG5cbiAgICAgICAgICAgICAgICAgICAgPFBvcG92ZXJCb2R5IGNsYXNzTmFtZT1cInNoYWRvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFjY291bnRDb250cm9sQmFyIHVzZXJJbmZvPXt0aGlzLnByb3BzLnVzZXJJbmZvfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSW52aXRlPXt0aGlzLnByb3BzLm9uSW52aXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTG9nb3V0PXt0aGlzLnByb3BzLm9uTG9nb3V0fS8+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9Qb3BvdmVyQm9keT5cblxuICAgICAgICAgICAgICAgIDwvVW5jb250cm9sbGVkUG9wb3Zlcj5cblxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgKTtcblxuICAgIH1cblxufVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcblxuICAgIHJlYWRvbmx5IHVzZXJJbmZvOiBVc2VySW5mbztcblxuICAgIHJlYWRvbmx5IG9uSW52aXRlOiAoKSA9PiB2b2lkO1xuXG4gICAgcmVhZG9ubHkgb25Mb2dvdXQ6ICgpID0+IHZvaWQ7XG5cbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG59XG4iXX0=