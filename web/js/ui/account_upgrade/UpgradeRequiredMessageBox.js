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
const MessageBox_1 = require("../util/MessageBox");
const Button_1 = __importDefault(require("reactstrap/lib/Button"));
const BlackoutBox_1 = require("../util/BlackoutBox");
class UpgradeRequiredMessageBox extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.onUpgrade = this.onUpgrade.bind(this);
        this.onCancel = this.onCancel.bind(this);
    }
    onCancel() {
        this.props.dispose();
    }
    onUpgrade() {
        this.props.dispose();
        document.location.href = '#plans';
    }
    render() {
        return (React.createElement(BlackoutBox_1.BlackoutBox, null,
            React.createElement(MessageBox_1.MessageBox, { position: 'top' },
                React.createElement("div", { className: "text-center text-grey400 mb-2", style: { fontSize: '95px' } },
                    React.createElement("i", { className: "fas fa-smile" })),
                React.createElement("div", { className: "text-grey700 text-bold mb-3 text-center", style: { fontSize: '25px', fontWeight: 'bold' } }, "It's time to upgrade!"),
                React.createElement("div", { style: { maxWidth: '400px' }, className: "ml-auto mr-auto text-center" },
                    React.createElement("p", { className: "" }, "You've reach the limits of your plan."),
                    React.createElement("p", { className: "" }, "You'll need to upgrade to premium to add this document."),
                    React.createElement("i", { className: "fas fa-check text-success" }),
                    " More storage for larger repositories. ",
                    React.createElement("br", null),
                    React.createElement("i", { className: "fas fa-check text-success" }),
                    " Supports more devices for cross-device sync.",
                    React.createElement("br", null),
                    React.createElement("i", { className: "fas fa-check text-success" }),
                    " Helps fund future development of Polar.",
                    React.createElement("br", null)),
                React.createElement("div", { className: "text-center mt-4" },
                    React.createElement(Button_1.default, { color: "secondary", outline: true, size: "md", onClick: () => this.onCancel(), className: "" }, "No Thanks"),
                    React.createElement(Button_1.default, { color: "success", size: "md", onClick: () => this.onUpgrade(), className: "ml-1" }, "Upgrade")))));
    }
}
exports.UpgradeRequiredMessageBox = UpgradeRequiredMessageBox;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXBncmFkZVJlcXVpcmVkTWVzc2FnZUJveC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlVwZ3JhZGVSZXF1aXJlZE1lc3NhZ2VCb3gudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUMvQixtREFBOEM7QUFDOUMsbUVBQTJDO0FBRTNDLHFEQUFnRDtBQU1oRCxNQUFhLHlCQUEwQixTQUFRLEtBQUssQ0FBQyxTQUF5QjtJQUUxRSxZQUFZLEtBQWEsRUFBRSxPQUFZO1FBQ25DLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRTdDLENBQUM7SUFFTyxRQUFRO1FBQ1osSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRU8sU0FBUztRQUNiLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDckIsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO0lBQ3RDLENBQUM7SUFFTSxNQUFNO1FBRVQsT0FBTyxDQUFDLG9CQUFDLHlCQUFXO1lBRWhCLG9CQUFDLHVCQUFVLElBQUMsUUFBUSxFQUFDLEtBQUs7Z0JBRXRCLDZCQUFLLFNBQVMsRUFBQywrQkFBK0IsRUFDekMsS0FBSyxFQUFFLEVBQUMsUUFBUSxFQUFFLE1BQU0sRUFBQztvQkFFMUIsMkJBQUcsU0FBUyxFQUFDLGNBQWMsR0FBSyxDQUU5QjtnQkFFTiw2QkFBSyxTQUFTLEVBQUMseUNBQXlDLEVBQ25ELEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBQyw0QkFJNUM7Z0JBRU4sNkJBQUssS0FBSyxFQUFFLEVBQUMsUUFBUSxFQUFFLE9BQU8sRUFBQyxFQUFFLFNBQVMsRUFBQyw2QkFBNkI7b0JBR3BFLDJCQUFHLFNBQVMsRUFBQyxFQUFFLDRDQUVYO29CQUVKLDJCQUFHLFNBQVMsRUFBQyxFQUFFLDhEQUdYO29CQUVKLDJCQUFHLFNBQVMsRUFBQywyQkFBMkIsR0FBRTs7b0JBQXVDLCtCQUFLO29CQUN0RiwyQkFBRyxTQUFTLEVBQUMsMkJBQTJCLEdBQUU7O29CQUE2QywrQkFBSztvQkFDNUYsMkJBQUcsU0FBUyxFQUFDLDJCQUEyQixHQUFFOztvQkFBd0MsK0JBQUssQ0FFckY7Z0JBRU4sNkJBQUssU0FBUyxFQUFDLGtCQUFrQjtvQkFFN0Isb0JBQUMsZ0JBQU0sSUFBQyxLQUFLLEVBQUMsV0FBVyxFQUNqQixPQUFPLFFBQ1AsSUFBSSxFQUFDLElBQUksRUFDVCxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUM5QixTQUFTLEVBQUMsRUFBRSxnQkFJWDtvQkFFVCxvQkFBQyxnQkFBTSxJQUFDLEtBQUssRUFBQyxTQUFTLEVBQ2YsSUFBSSxFQUFDLElBQUksRUFDVCxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUMvQixTQUFTLEVBQUMsTUFBTSxjQUlmLENBRVAsQ0FHRyxDQUVILENBQUMsQ0FBQztJQUVwQixDQUFDO0NBRUo7QUF2RkQsOERBdUZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtNZXNzYWdlQm94fSBmcm9tIFwiLi4vdXRpbC9NZXNzYWdlQm94XCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJyZWFjdHN0cmFwL2xpYi9CdXR0b25cIjtcbmltcG9ydCB7TlVMTF9GVU5DVElPTn0gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvdXRpbC9GdW5jdGlvbnNcIjtcbmltcG9ydCB7QmxhY2tvdXRCb3h9IGZyb20gXCIuLi91dGlsL0JsYWNrb3V0Qm94XCI7XG5cbi8qKlxuICogTGlzdGVuIHRvIHRoZSBtYWNoaW5lIGRhdGFzdG9yZSBmb3IgdGhpcyB1c2VyIGFuZCBpZiB0aGVpciBhY2NvdW50IGlzbid0IGluXG4gKiBsaW5lIHdpdGggdGhlIG1hY2hpbmUgZGF0YSBzdG9yZSB0aGVuIHdlIGhhdmUgdG8gZm9yY2UgdGhlbSB0byB1cGdyYWRlLlxuICovXG5leHBvcnQgY2xhc3MgVXBncmFkZVJlcXVpcmVkTWVzc2FnZUJveCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcywgY29udGV4dDogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcblxuICAgICAgICB0aGlzLm9uVXBncmFkZSA9IHRoaXMub25VcGdyYWRlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25DYW5jZWwgPSB0aGlzLm9uQ2FuY2VsLmJpbmQodGhpcyk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uQ2FuY2VsKCkge1xuICAgICAgICB0aGlzLnByb3BzLmRpc3Bvc2UoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uVXBncmFkZSgpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5kaXNwb3NlKCk7XG4gICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgPSAnI3BsYW5zJztcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoPEJsYWNrb3V0Qm94PlxuXG4gICAgICAgICAgICA8TWVzc2FnZUJveCBwb3NpdGlvbj0ndG9wJz5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1ncmV5NDAwIG1iLTJcIlxuICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tmb250U2l6ZTogJzk1cHgnfX0+XG5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNtaWxlXCI+PC9pPlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZ3JleTcwMCB0ZXh0LWJvbGQgbWItMyB0ZXh0LWNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2ZvbnRTaXplOiAnMjVweCcsIGZvbnRXZWlnaHQ6ICdib2xkJ319PlxuXG4gICAgICAgICAgICAgICAgICAgIEl0J3MgdGltZSB0byB1cGdyYWRlIVxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWF4V2lkdGg6ICc0MDBweCd9fSBjbGFzc05hbWU9XCJtbC1hdXRvIG1yLWF1dG8gdGV4dC1jZW50ZXJcIj5cblxuXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgWW91J3ZlIHJlYWNoIHRoZSBsaW1pdHMgb2YgeW91ciBwbGFuLlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBZb3UnbGwgbmVlZCB0byB1cGdyYWRlIHRvIHByZW1pdW0gdG8gYWRkIHRoaXNcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNoZWNrIHRleHQtc3VjY2Vzc1wiLz4gTW9yZSBzdG9yYWdlIGZvciBsYXJnZXIgcmVwb3NpdG9yaWVzLiA8YnIvPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtY2hlY2sgdGV4dC1zdWNjZXNzXCIvPiBTdXBwb3J0cyBtb3JlIGRldmljZXMgZm9yIGNyb3NzLWRldmljZSBzeW5jLjxici8+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1jaGVjayB0ZXh0LXN1Y2Nlc3NcIi8+IEhlbHBzIGZ1bmQgZnV0dXJlIGRldmVsb3BtZW50IG9mIFBvbGFyLjxici8+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtNFwiPlxuXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMub25DYW5jZWwoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgTm8gVGhhbmtzXG5cbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInN1Y2Nlc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJtZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5vblVwZ3JhZGUoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0xXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIFVwZ3JhZGVcblxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgIDwvTWVzc2FnZUJveD5cblxuICAgICAgICA8L0JsYWNrb3V0Qm94Pik7XG5cbiAgICB9XG5cbn1cblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgcmVhZG9ubHkgZGlzcG9zZTogKCkgPT4gdm9pZDtcbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG59XG5cbiJdfQ==