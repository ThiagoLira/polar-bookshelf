"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const LargeModal_1 = require("../../ui/large_modal/LargeModal");
const reactstrap_1 = require("reactstrap");
const LargeModalBody_1 = require("../../ui/large_modal/LargeModalBody");
const LifecycleEvents_1 = require("../../ui/util/LifecycleEvents");
const LocalPrefs_1 = require("../../util/LocalPrefs");
class MobileDisclaimer extends react_1.default.PureComponent {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.onOK = this.onOK.bind(this);
        this.state = {
            open: true
        };
    }
    render() {
        return (react_1.default.createElement(LargeModal_1.LargeModal, { isOpen: this.state.open, toggle: () => this.toggle() },
            react_1.default.createElement(LargeModalBody_1.LargeModalBody, null,
                react_1.default.createElement("h2", null,
                    "Polar Mobile ",
                    react_1.default.createElement("b", null, "Preview")),
                react_1.default.createElement("p", null,
                    "This is a ",
                    react_1.default.createElement("b", null, "alpha"),
                    " version of Polar for mobile."),
                react_1.default.createElement("p", null, "It will probably break and not work properly. Feel free to play with it but understand that it's going to have significant bugs.")),
            react_1.default.createElement(reactstrap_1.ModalFooter, null,
                react_1.default.createElement(reactstrap_1.Button, { color: "secondary", onClick: () => this.onOK() }, "OK"))));
    }
    onOK() {
        LocalPrefs_1.LocalPrefs.mark(LifecycleEvents_1.LifecycleEvents.WEBAPP_PREVIEW_WARNING_SHOWN);
        this.setState({ open: false });
    }
    toggle() {
        this.setState(Object.assign(Object.assign({}, this.state), { open: !this.state.open }));
    }
}
exports.MobileDisclaimer = MobileDisclaimer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9iaWxlRGlzY2xhaW1lci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIk1vYmlsZURpc2NsYWltZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsa0RBQTBCO0FBQzFCLGdFQUEyRDtBQUMzRCwyQ0FBK0M7QUFDL0Msd0VBQW1FO0FBQ25FLG1FQUE4RDtBQUM5RCxzREFBaUQ7QUFFakQsTUFBYSxnQkFBaUIsU0FBUSxlQUFLLENBQUMsYUFBNkI7SUFFckUsWUFBWSxLQUFVO1FBQ2xCLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUViLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVqQyxJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1QsSUFBSSxFQUFFLElBQUk7U0FDYixDQUFDO0lBRU4sQ0FBQztJQUVNLE1BQU07UUFFVCxPQUFPLENBRUgsOEJBQUMsdUJBQVUsSUFBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQ3ZCLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBR25DLDhCQUFDLCtCQUFjO2dCQUVYOztvQkFBaUIsbURBQWMsQ0FBSztnQkFFcEM7O29CQUNjLGlEQUFZO29EQUN0QjtnQkFFSiw0S0FJSSxDQUVTO1lBRWpCLDhCQUFDLHdCQUFXO2dCQUVSLDhCQUFDLG1CQUFNLElBQUMsS0FBSyxFQUFDLFdBQVcsRUFDakIsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsU0FFekIsQ0FFQyxDQUVMLENBRWhCLENBQUM7SUFDTixDQUFDO0lBRU8sSUFBSTtRQUNSLHVCQUFVLENBQUMsSUFBSSxDQUFDLGlDQUFlLENBQUMsNEJBQTRCLENBQUMsQ0FBQztRQUU5RCxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUM7SUFFakMsQ0FBQztJQUVPLE1BQU07UUFFVixJQUFJLENBQUMsUUFBUSxpQ0FBSyxJQUFJLENBQUMsS0FBSyxLQUFFLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFFLENBQUM7SUFFM0QsQ0FBQztDQUVKO0FBakVELDRDQWlFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0xhcmdlTW9kYWx9IGZyb20gJy4uLy4uL3VpL2xhcmdlX21vZGFsL0xhcmdlTW9kYWwnO1xuaW1wb3J0IHtCdXR0b24sIE1vZGFsRm9vdGVyfSBmcm9tICdyZWFjdHN0cmFwJztcbmltcG9ydCB7TGFyZ2VNb2RhbEJvZHl9IGZyb20gJy4uLy4uL3VpL2xhcmdlX21vZGFsL0xhcmdlTW9kYWxCb2R5JztcbmltcG9ydCB7TGlmZWN5Y2xlRXZlbnRzfSBmcm9tICcuLi8uLi91aS91dGlsL0xpZmVjeWNsZUV2ZW50cyc7XG5pbXBvcnQge0xvY2FsUHJlZnN9IGZyb20gJy4uLy4uL3V0aWwvTG9jYWxQcmVmcyc7XG5cbmV4cG9ydCBjbGFzcyBNb2JpbGVEaXNjbGFpbWVyIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy50b2dnbGUgPSB0aGlzLnRvZ2dsZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uT0sgPSB0aGlzLm9uT0suYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgb3BlbjogdHJ1ZVxuICAgICAgICB9O1xuXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICA8TGFyZ2VNb2RhbCBpc09wZW49e3RoaXMuc3RhdGUub3Blbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZT17KCkgPT4gdGhpcy50b2dnbGUoKX0+XG5cblxuICAgICAgICAgICAgICAgIDxMYXJnZU1vZGFsQm9keT5cblxuICAgICAgICAgICAgICAgICAgICA8aDI+UG9sYXIgTW9iaWxlIDxiPlByZXZpZXc8L2I+PC9oMj5cblxuICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMgaXMgYSA8Yj5hbHBoYTwvYj4gdmVyc2lvbiBvZiBQb2xhciBmb3IgbW9iaWxlLlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICBJdCB3aWxsIHByb2JhYmx5IGJyZWFrIGFuZCBub3Qgd29yayBwcm9wZXJseS4gRmVlbCBmcmVlXG4gICAgICAgICAgICAgICAgICAgICAgICB0byBwbGF5IHdpdGggaXQgYnV0IHVuZGVyc3RhbmQgdGhhdCBpdCdzIGdvaW5nIHRvIGhhdmVcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpZ25pZmljYW50IGJ1Z3MuXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgIDwvTGFyZ2VNb2RhbEJvZHk+XG5cbiAgICAgICAgICAgICAgICA8TW9kYWxGb290ZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5vbk9LKCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgT0tcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG5cbiAgICAgICAgICAgICAgICA8L01vZGFsRm9vdGVyPlxuXG4gICAgICAgICAgICA8L0xhcmdlTW9kYWw+XG5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uT0soKTogdm9pZCB7XG4gICAgICAgIExvY2FsUHJlZnMubWFyayhMaWZlY3ljbGVFdmVudHMuV0VCQVBQX1BSRVZJRVdfV0FSTklOR19TSE9XTik7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7b3BlbjogZmFsc2V9KTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgdG9nZ2xlKCk6IHZvaWQge1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoey4uLnRoaXMuc3RhdGUsIG9wZW46ICF0aGlzLnN0YXRlLm9wZW59KTtcblxuICAgIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElQcm9wcyB7XG5cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElTdGF0ZSB7XG4gICAgcmVhZG9ubHkgb3BlbjogYm9vbGVhbjtcblxufVxuIl19