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
class ManualDropdown extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.toggle = this.toggle.bind(this);
        this.state = {
            open: false,
        };
    }
    render() {
        return (React.createElement(Dropdown_1.default, { id: this.props.id, isOpen: this.state.open, toggle: () => this.toggle(), direction: this.props.direction, size: this.props.size }, this.props.children));
    }
    toggle() {
        const open = !this.state.open;
        this.setState(Object.assign(Object.assign({}, this.state), { open }));
    }
}
exports.ManualDropdown = ManualDropdown;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFuYXVsRHJvcGRvd24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJNYW5hdWxEcm9wZG93bi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQStCO0FBQy9CLHVFQUE0RDtBQU01RCxNQUFhLGNBQWUsU0FBUSxLQUFLLENBQUMsU0FBeUI7SUFFL0QsWUFBWSxLQUFhLEVBQUUsT0FBWTtRQUNuQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRXRCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFckMsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNULElBQUksRUFBRSxLQUFLO1NBQ2QsQ0FBQztJQUVOLENBQUM7SUFFTSxNQUFNO1FBRVQsT0FBTyxDQUVILG9CQUFDLGtCQUFRLElBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUNqQixNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQ3ZCLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQzNCLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFDL0IsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUUxQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FFYixDQUVkLENBQUM7SUFFTixDQUFDO0lBRU8sTUFBTTtRQUVWLE1BQU0sSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7UUFFOUIsSUFBSSxDQUFDLFFBQVEsaUNBQUssSUFBSSxDQUFDLEtBQUssS0FBRSxJQUFJLElBQUUsQ0FBQztJQUV6QyxDQUFDO0NBRUo7QUF2Q0Qsd0NBdUNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IERyb3Bkb3duLCB7RGlyZWN0aW9ufSBmcm9tICdyZWFjdHN0cmFwL2xpYi9Ecm9wZG93bic7XG5pbXBvcnQgVG9vbHRpcCBmcm9tICdyZWFjdHN0cmFwL2xpYi9Ub29sdGlwJztcblxuLyoqXG4gKlxuICovXG5leHBvcnQgY2xhc3MgTWFudWFsRHJvcGRvd24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJUHJvcHMsIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG5cbiAgICAgICAgdGhpcy50b2dnbGUgPSB0aGlzLnRvZ2dsZS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBvcGVuOiBmYWxzZSxcbiAgICAgICAgfTtcblxuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgPERyb3Bkb3duIGlkPXt0aGlzLnByb3BzLmlkfVxuICAgICAgICAgICAgICAgICAgICAgIGlzT3Blbj17dGhpcy5zdGF0ZS5vcGVufVxuICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZT17KCkgPT4gdGhpcy50b2dnbGUoKX1cbiAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb249e3RoaXMucHJvcHMuZGlyZWN0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgIHNpemU9e3RoaXMucHJvcHMuc2l6ZX0+XG5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cblxuICAgICAgICAgICAgPC9Ecm9wZG93bj5cblxuICAgICAgICApO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSB0b2dnbGUoKTogdm9pZCB7XG5cbiAgICAgICAgY29uc3Qgb3BlbiA9ICF0aGlzLnN0YXRlLm9wZW47XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Li4udGhpcy5zdGF0ZSwgb3Blbn0pO1xuXG4gICAgfVxuXG59XG5cbmludGVyZmFjZSBJUHJvcHMge1xuXG4gICAgcmVhZG9ubHkgaWQ6IHN0cmluZztcbiAgICByZWFkb25seSBkaXJlY3Rpb24/OiBEaXJlY3Rpb247XG4gICAgcmVhZG9ubHkgc2l6ZT86IHN0cmluZztcblxufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcblxuICAgIHJlYWRvbmx5IG9wZW46IGJvb2xlYW47XG5cbn1cbiJdfQ==