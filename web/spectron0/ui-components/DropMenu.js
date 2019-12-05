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
const Dropdown_1 = __importDefault(require("reactstrap/lib/Dropdown"));
const DropdownToggle_1 = __importDefault(require("reactstrap/lib/DropdownToggle"));
class DropMenu extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.onToggle = this.onToggle.bind(this);
        this.onClick = this.onClick.bind(this);
        this.state = {
            open: this.props.open ? true : false
        };
    }
    render() {
        return (React.createElement(Dropdown_1.default, { tag: "div", direction: "right", isOpen: this.state.open, onClick: event => this.onClick(event), toggle: () => this.onToggle() },
            React.createElement(DropdownToggle_1.default, { className: "", color: "light", caret: true }, "Dropdown"),
            this.props.children));
    }
    onToggle() {
        console.log("FIXME ontoggle called");
        this.setState(Object.assign(Object.assign({}, this.state), { open: !this.state.open }));
    }
    onClick(event) {
        console.log("FIXME: Caought onClick");
        event.preventDefault();
        event.stopPropagation();
        return false;
    }
}
exports.DropMenu = DropMenu;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHJvcE1lbnUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJEcm9wTWVudS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQStCO0FBQy9CLHVFQUErQztBQUMvQyxtRkFBMkQ7QUFFM0QsTUFBYSxRQUFTLFNBQVEsS0FBSyxDQUFDLFNBQXlCO0lBRXpELFlBQVksS0FBYSxFQUFFLE9BQVk7UUFDbkMsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztRQUV0QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFdkMsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNULElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLO1NBQ3ZDLENBQUM7SUFFTixDQUFDO0lBRU0sTUFBTTtRQUVULE9BQU8sQ0FFSCxvQkFBQyxrQkFBUSxJQUFDLEdBQUcsRUFBQyxLQUFLLEVBQ1QsU0FBUyxFQUFDLE9BQU8sRUFDakIsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUN2QixPQUFPLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUNyQyxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUVuQyxvQkFBQyx3QkFBYyxJQUFDLFNBQVMsRUFBQyxFQUFFLEVBQ1osS0FBSyxFQUFDLE9BQU8sRUFBQyxLQUFLLHFCQUVsQjtZQUVoQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FFYixDQUVkLENBQUM7SUFDTixDQUFDO0lBRU8sUUFBUTtRQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsUUFBUSxpQ0FBTSxJQUFJLENBQUMsS0FBSyxLQUFFLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFHLENBQUM7SUFDN0QsQ0FBQztJQUVPLE9BQU8sQ0FBQyxLQUF1QjtRQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDdEMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0NBRUo7QUFoREQsNEJBZ0RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IERyb3Bkb3duIGZyb20gJ3JlYWN0c3RyYXAvbGliL0Ryb3Bkb3duJztcbmltcG9ydCBEcm9wZG93blRvZ2dsZSBmcm9tICdyZWFjdHN0cmFwL2xpYi9Ecm9wZG93blRvZ2dsZSc7XG5cbmV4cG9ydCBjbGFzcyBEcm9wTWVudSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcywgY29udGV4dDogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcblxuICAgICAgICB0aGlzLm9uVG9nZ2xlID0gdGhpcy5vblRvZ2dsZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uQ2xpY2sgPSB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgb3BlbjogdGhpcy5wcm9wcy5vcGVuID8gdHJ1ZSA6IGZhbHNlXG4gICAgICAgIH07XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgIDxEcm9wZG93biB0YWc9XCJkaXZcIlxuICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbj1cInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICBpc09wZW49e3RoaXMuc3RhdGUub3Blbn1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtldmVudCA9PiB0aGlzLm9uQ2xpY2soZXZlbnQpfVxuICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZT17KCkgPT4gdGhpcy5vblRvZ2dsZSgpfT5cblxuICAgICAgICAgICAgICAgIDxEcm9wZG93blRvZ2dsZSBjbGFzc05hbWU9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImxpZ2h0XCIgY2FyZXQ+XG4gICAgICAgICAgICAgICAgICAgIERyb3Bkb3duXG4gICAgICAgICAgICAgICAgPC9Ecm9wZG93blRvZ2dsZT5cblxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuXG4gICAgICAgICAgICA8L0Ryb3Bkb3duPlxuXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblRvZ2dsZSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJGSVhNRSBvbnRvZ2dsZSBjYWxsZWRcIik7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyAuLi50aGlzLnN0YXRlLCBvcGVuOiAhdGhpcy5zdGF0ZS5vcGVuIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25DbGljayhldmVudDogUmVhY3QuTW91c2VFdmVudCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkZJWE1FOiBDYW91Z2h0IG9uQ2xpY2tcIik7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG59XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICAgIHJlYWRvbmx5IG9wZW4/OiBib29sZWFuO1xufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbiAgICByZWFkb25seSBvcGVuOiBib29sZWFuO1xufVxuXG5cbiJdfQ==