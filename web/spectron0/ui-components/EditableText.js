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
class EditableText extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.toggle = this.toggle.bind(this);
        this.onDone = this.onDone.bind(this);
        this.onCancel = this.onCancel.bind(this);
        this.state = {
            editing: false
        };
    }
    render() {
        if (this.state.editing) {
            return React.createElement("div", null,
                React.createElement("input", { type: "text", className: "p-0", onKeyDown: event => this.onKeyDown(event), defaultValue: this.props.value }));
        }
        else {
            return (React.createElement("div", { onDoubleClick: () => this.toggle(), style: {
                    padding: '2px'
                } }, this.props.value));
        }
    }
    onKeyDown(event) {
        if (event.key === "Escape") {
            this.onCancel();
        }
        if (event.getModifierState("Control") && event.key === "Enter") {
            this.onDone();
        }
    }
    onCancel() {
        this.props.onCancel();
        this.toggle();
    }
    onDone() {
        this.toggle();
    }
    toggle() {
        console.log("FIXME: toggling");
        this.setState({ editing: !this.state.editing });
    }
}
exports.EditableText = EditableText;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRWRpdGFibGVUZXh0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRWRpdGFibGVUZXh0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSw2Q0FBK0I7QUFNL0IsTUFBYSxZQUFhLFNBQVEsS0FBSyxDQUFDLFNBQXlCO0lBRTdELFlBQVksS0FBYSxFQUFFLE9BQVk7UUFDbkMsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztRQUV0QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV6QyxJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1QsT0FBTyxFQUFFLEtBQUs7U0FDakIsQ0FBQztJQUVOLENBQUM7SUFFTSxNQUFNO1FBT1QsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRTtZQUNwQixPQUFPO2dCQUNILCtCQUFPLElBQUksRUFBQyxNQUFNLEVBQ1gsU0FBUyxFQUFDLEtBQUssRUFDZixTQUFTLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUN6QyxZQUFZLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FDdEMsQ0FBQztTQUNWO2FBQU07WUFFSCxPQUFPLENBRUgsNkJBQUssYUFBYSxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFDbEMsS0FBSyxFQUFFO29CQUNILE9BQU8sRUFBRSxLQUFLO2lCQUNqQixJQUNELElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUNmLENBRVQsQ0FBQztTQUVMO0lBRUwsQ0FBQztJQUVPLFNBQVMsQ0FBQyxLQUF1QztRQUVyRCxJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssUUFBUSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNuQjtRQUVELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssT0FBTyxFQUFFO1lBQzVELElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNqQjtJQUVMLENBQUM7SUFFTyxRQUFRO1FBQ1osSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVPLE1BQU07UUFDVixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVPLE1BQU07UUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFDLE9BQU8sRUFBRSxDQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQztJQUNuRCxDQUFDO0NBRUo7QUF4RUQsb0NBd0VDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQgUG9wb3ZlciBmcm9tICdyZWFjdHN0cmFwL2xpYi9Qb3BvdmVyJztcbmltcG9ydCBQb3BvdmVyQm9keSBmcm9tICdyZWFjdHN0cmFwL2xpYi9Qb3BvdmVyQm9keSc7XG5pbXBvcnQge0J1dHRvbiwgSW5wdXR9IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5cbmV4cG9ydCBjbGFzcyBFZGl0YWJsZVRleHQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJUHJvcHMsIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG5cbiAgICAgICAgdGhpcy50b2dnbGUgPSB0aGlzLnRvZ2dsZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uRG9uZSA9IHRoaXMub25Eb25lLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25DYW5jZWwgPSB0aGlzLm9uQ2FuY2VsLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGVkaXRpbmc6IGZhbHNlXG4gICAgICAgIH07XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuXG4gICAgICAgIC8vIFRPRE86IGlmIHdlIGNsaWNrIG91dHNpZGUgb2YgdGhlIGlucHV0IGl0IHNob3VsZCBzdG9wIGFuZC9vciBiZSBhY2NlcHRlZCBvciBhdCBsZWFzdFxuICAgICAgICAvLyBvYnZpb3VzbHkgc3RpbGwgYmVpbmcgZWRpdGVkLlxuXG4gICAgICAgIC8vIEZJWE1FOiB0aGUgZXNjYXBlIGtleSBmaW5kaW5nIGlzbid0IGFjdGl2ZSB3aGVuIHRoaXMgY29tcG9uZW50IGlzIGFjdGl2ZS4uLlxuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmVkaXRpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiA8ZGl2PlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMFwiXG4gICAgICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17ZXZlbnQgPT4gdGhpcy5vbktleURvd24oZXZlbnQpfVxuICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMudmFsdWV9Lz5cbiAgICAgICAgICAgIDwvZGl2PjtcbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgICAgIDxkaXYgb25Eb3VibGVDbGljaz17KCkgPT4gdGhpcy50b2dnbGUoKX1cbiAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzJweCdcbiAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy52YWx1ZX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgKTtcblxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uS2V5RG93bihldmVudDogUmVhY3QuS2V5Ym9hcmRFdmVudDxIVE1MRWxlbWVudD4pIHtcblxuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICAgICAgICB0aGlzLm9uQ2FuY2VsKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXZlbnQuZ2V0TW9kaWZpZXJTdGF0ZShcIkNvbnRyb2xcIikgJiYgZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgICAgIHRoaXMub25Eb25lKCk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHByaXZhdGUgb25DYW5jZWwoKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25DYW5jZWwoKTtcbiAgICAgICAgdGhpcy50b2dnbGUoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uRG9uZSgpIHtcbiAgICAgICAgdGhpcy50b2dnbGUoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHRvZ2dsZSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJGSVhNRTogdG9nZ2xpbmdcIik7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2VkaXRpbmc6ICEgdGhpcy5zdGF0ZS5lZGl0aW5nfSk7XG4gICAgfVxuXG59XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICAgIHJlYWRvbmx5IHZhbHVlOiBzdHJpbmc7XG4gICAgcmVhZG9ubHkgb25Eb25lOiAodmFsdWU6IHN0cmluZykgPT4gdm9pZDtcbiAgICByZWFkb25seSBvbkNhbmNlbDogKCkgPT4gdm9pZDtcbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG5cbiAgICByZWFkb25seSBlZGl0aW5nPzogYm9vbGVhbjtcblxufVxuXG4iXX0=