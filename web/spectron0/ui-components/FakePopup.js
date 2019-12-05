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
const Popover_1 = __importDefault(require("reactstrap/lib/Popover"));
const PopoverBody_1 = __importDefault(require("reactstrap/lib/PopoverBody"));
const reactstrap_1 = require("reactstrap");
const log = Logger_1.Logger.create();
class FakePopup extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.id = 'fake-popup';
        this.toggle = this.toggle.bind(this);
        this.deactivate = this.deactivate.bind(this);
        this.state = {
            open: false,
        };
    }
    toggle() {
        console.log("FIXME: toggle");
        this.setState({ open: !this.state.open });
    }
    deactivate() {
        console.log("FIXME: deactivate");
        this.setState({ open: false });
    }
    render() {
        return (React.createElement("div", { className: "mt-auto mb-auto" },
            React.createElement(reactstrap_1.Button, { id: this.id, className: "fa fa-tag doc-button doc-button-inactive" }),
            React.createElement(Popover_1.default, { placement: "bottom", isOpen: this.state.open, target: this.id, delay: 0, toggle: () => this.toggle(), className: "tag-input-popover shadow" },
                React.createElement(PopoverBody_1.default, { style: {}, className: "shadow" }, "this is the fake body"))));
    }
    onCancel() {
        this.setState(Object.assign(Object.assign({}, this.state), { open: false }));
    }
    onDone() {
        this.setState(Object.assign(Object.assign({}, this.state), { open: false }));
    }
    onKeyDown(event) {
        if (event.key === "Escape") {
            this.onCancel();
        }
        if (event.getModifierState("Control") && event.key === "Enter") {
            this.onDone();
        }
    }
}
exports.FakePopup = FakePopup;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmFrZVBvcHVwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRmFrZVBvcHVwLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBK0I7QUFDL0IsMkRBQXNEO0FBQ3RELHFFQUE2QztBQUM3Qyw2RUFBcUQ7QUFDckQsMkNBQWtDO0FBRWxDLE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUc1QixNQUFhLFNBQVUsU0FBUSxLQUFLLENBQUMsU0FBeUI7SUFJMUQsWUFBWSxLQUFhLEVBQUUsT0FBWTtRQUNuQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBSFQsT0FBRSxHQUFHLFlBQVksQ0FBQztRQUsvQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFN0MsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNULElBQUksRUFBRSxLQUFLO1NBQ2QsQ0FBQztJQUVOLENBQUM7SUFFTyxNQUFNO1FBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLENBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFTyxVQUFVO1FBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRU0sTUFBTTtRQUVULE9BQU8sQ0FFSCw2QkFBSyxTQUFTLEVBQUMsaUJBQWlCO1lBRTVCLG9CQUFDLG1CQUFNLElBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQ1gsU0FBUyxFQUFDLDBDQUEwQyxHQUFFO1lBRTlELG9CQUFDLGlCQUFPLElBQUMsU0FBUyxFQUFDLFFBQVEsRUFDbEIsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUN2QixNQUFNLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFDZixLQUFLLEVBQUUsQ0FBQyxFQUNSLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQzNCLFNBQVMsRUFBQywwQkFBMEI7Z0JBSXpDLG9CQUFDLHFCQUFXLElBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUMsUUFBUSw0QkFNNUIsQ0FDUixDQUVSLENBRVQsQ0FBQztJQUVOLENBQUM7SUFFTyxRQUFRO1FBQ1osSUFBSSxDQUFDLFFBQVEsaUNBQUssSUFBSSxDQUFDLEtBQUssS0FBRSxJQUFJLEVBQUUsS0FBSyxJQUFFLENBQUM7SUFDaEQsQ0FBQztJQUVPLE1BQU07UUFFVixJQUFJLENBQUMsUUFBUSxpQ0FBSyxJQUFJLENBQUMsS0FBSyxLQUFFLElBQUksRUFBRSxLQUFLLElBQUUsQ0FBQztJQUdoRCxDQUFDO0lBRU8sU0FBUyxDQUFDLEtBQXVDO1FBRXJELElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSyxRQUFRLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ25CO1FBRUQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSyxPQUFPLEVBQUU7WUFDNUQsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ2pCO0lBRUwsQ0FBQztDQUVKO0FBbEZELDhCQWtGQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL2xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IFBvcG92ZXIgZnJvbSAncmVhY3RzdHJhcC9saWIvUG9wb3Zlcic7XG5pbXBvcnQgUG9wb3ZlckJvZHkgZnJvbSAncmVhY3RzdHJhcC9saWIvUG9wb3ZlckJvZHknO1xuaW1wb3J0IHtCdXR0b259IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuXG5leHBvcnQgY2xhc3MgRmFrZVBvcHVwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IGlkID0gJ2Zha2UtcG9wdXAnO1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcywgY29udGV4dDogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcblxuICAgICAgICB0aGlzLnRvZ2dsZSA9IHRoaXMudG9nZ2xlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZGVhY3RpdmF0ZSA9IHRoaXMuZGVhY3RpdmF0ZS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBvcGVuOiBmYWxzZSxcbiAgICAgICAgfTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgdG9nZ2xlKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkZJWE1FOiB0b2dnbGVcIik7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe29wZW46ICEgdGhpcy5zdGF0ZS5vcGVufSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkZWFjdGl2YXRlKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkZJWE1FOiBkZWFjdGl2YXRlXCIpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtvcGVuOiBmYWxzZX0pO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC1hdXRvIG1iLWF1dG9cIj5cblxuICAgICAgICAgICAgICAgIDxCdXR0b24gaWQ9e3RoaXMuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmYSBmYS10YWcgZG9jLWJ1dHRvbiBkb2MtYnV0dG9uLWluYWN0aXZlXCIvPlxuXG4gICAgICAgICAgICAgICAgPFBvcG92ZXIgcGxhY2VtZW50PVwiYm90dG9tXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBpc09wZW49e3RoaXMuc3RhdGUub3Blbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9e3RoaXMuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk9ezB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlPXsoKSA9PiB0aGlzLnRvZ2dsZSgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRhZy1pbnB1dC1wb3BvdmVyIHNoYWRvd1wiPlxuICAgICAgICAgICAgICAgICAgICB7Lyo8UG9wb3ZlckhlYWRlcj5Qb3BvdmVyIFRpdGxlPC9Qb3BvdmVySGVhZGVyPiovfVxuXG4gICAgICAgICAgICAgICAgICAgIHsvKnN0eWxlPXt7Ym9yZGVyV2lkdGg6ICcxcHgnLCBiYWNrZ3JvdW5kQ29sb3I6IHRydWUgPyBcIiNiOTRhNDhcIiA6IFwiI2FhYVwifX0qL31cbiAgICAgICAgICAgICAgICAgICAgPFBvcG92ZXJCb2R5IHN0eWxlPXt7fX0gY2xhc3NOYW1lPVwic2hhZG93XCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKlRPRE8gdW5pZnkgdGhpcyB3aXRoIFRhZ0lucHV0V2lkZ2V0Ki99XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMgaXMgdGhlIGZha2UgYm9keVxuXG4gICAgICAgICAgICAgICAgICAgIDwvUG9wb3ZlckJvZHk+XG4gICAgICAgICAgICAgICAgPC9Qb3BvdmVyPlxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICApO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkNhbmNlbCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Li4udGhpcy5zdGF0ZSwgb3BlbjogZmFsc2V9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uRG9uZSgpIHtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHsuLi50aGlzLnN0YXRlLCBvcGVuOiBmYWxzZX0pO1xuXG5cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uS2V5RG93bihldmVudDogUmVhY3QuS2V5Ym9hcmRFdmVudDxIVE1MRWxlbWVudD4pIHtcblxuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICAgICAgICB0aGlzLm9uQ2FuY2VsKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXZlbnQuZ2V0TW9kaWZpZXJTdGF0ZShcIkNvbnRyb2xcIikgJiYgZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgICAgIHRoaXMub25Eb25lKCk7XG4gICAgICAgIH1cblxuICAgIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElQcm9wcyB7XG5cbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG5cbiAgICByZWFkb25seSBvcGVuOiBib29sZWFuO1xuXG59XG5cbiJdfQ==