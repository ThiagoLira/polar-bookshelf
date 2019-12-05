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
const WhatsNewContent_1 = require("./WhatsNewContent");
const Button_1 = __importDefault(require("reactstrap/lib/Button"));
const ModalFooter_1 = __importDefault(require("reactstrap/lib/ModalFooter"));
const LargeModal_1 = require("../../../../../web/js/ui/large_modal/LargeModal");
const LargeModalBody_1 = require("../../../../../web/js/ui/large_modal/LargeModalBody");
class WhatsNewModal extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.onDone = this.onDone.bind(this);
        this.state = {
            open: true
        };
    }
    render() {
        return (React.createElement("div", null,
            React.createElement(LargeModal_1.LargeModal, { isOpen: this.state.open, minWidth: "350px", maxWidth: "900px" },
                React.createElement(LargeModalBody_1.LargeModalBody, null,
                    React.createElement(WhatsNewContent_1.WhatsNewContent, null)),
                React.createElement(ModalFooter_1.default, null,
                    React.createElement(Button_1.default, { color: "primary", onClick: () => this.onDone() }, "Close")))));
    }
    onDone() {
        this.setState({ open: false });
        if (this.props.onDone) {
            this.props.onDone();
        }
    }
}
exports.WhatsNewModal = WhatsNewModal;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2hhdHNOZXdNb2RhbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIldoYXRzTmV3TW9kYWwudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUMvQix1REFBa0Q7QUFDbEQsbUVBQTJDO0FBQzNDLDZFQUFxRDtBQUNyRCxnRkFBMkU7QUFDM0Usd0ZBQW1GO0FBRW5GLE1BQWEsYUFBYyxTQUFRLEtBQUssQ0FBQyxTQUF5QjtJQUU5RCxZQUFZLEtBQWEsRUFBRSxPQUFZO1FBQ25DLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVyQyxJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1QsSUFBSSxFQUFFLElBQUk7U0FDYixDQUFDO0lBRU4sQ0FBQztJQUVNLE1BQU07UUFFVCxPQUFPLENBRUg7WUFFSSxvQkFBQyx1QkFBVSxJQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFDdkIsUUFBUSxFQUFDLE9BQU8sRUFDaEIsUUFBUSxFQUFDLE9BQU87Z0JBRXhCLG9CQUFDLCtCQUFjO29CQUVYLG9CQUFDLGlDQUFlLE9BQUUsQ0FFTDtnQkFFakIsb0JBQUMscUJBQVc7b0JBQ1Isb0JBQUMsZ0JBQU0sSUFBQyxLQUFLLEVBQUMsU0FBUyxFQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFlBQWdCLENBQzFELENBRUwsQ0FFWCxDQUVULENBQUM7SUFDTixDQUFDO0lBRU8sTUFBTTtRQUVWLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQztRQUU3QixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQ25CLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDdkI7SUFFTCxDQUFDO0NBRUo7QUFsREQsc0NBa0RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtXaGF0c05ld0NvbnRlbnR9IGZyb20gJy4vV2hhdHNOZXdDb250ZW50JztcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3RzdHJhcC9saWIvQnV0dG9uJztcbmltcG9ydCBNb2RhbEZvb3RlciBmcm9tICdyZWFjdHN0cmFwL2xpYi9Nb2RhbEZvb3Rlcic7XG5pbXBvcnQge0xhcmdlTW9kYWx9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3dlYi9qcy91aS9sYXJnZV9tb2RhbC9MYXJnZU1vZGFsJztcbmltcG9ydCB7TGFyZ2VNb2RhbEJvZHl9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3dlYi9qcy91aS9sYXJnZV9tb2RhbC9MYXJnZU1vZGFsQm9keSc7XG5cbmV4cG9ydCBjbGFzcyBXaGF0c05ld01vZGFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzLCBjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuXG4gICAgICAgIHRoaXMub25Eb25lID0gdGhpcy5vbkRvbmUuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgb3BlbjogdHJ1ZVxuICAgICAgICB9O1xuXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICA8ZGl2PlxuXG4gICAgICAgICAgICAgICAgPExhcmdlTW9kYWwgaXNPcGVuPXt0aGlzLnN0YXRlLm9wZW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluV2lkdGg9XCIzNTBweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg9XCI5MDBweFwiPlxuXG4gICAgICAgICAgICAgICAgICAgIDxMYXJnZU1vZGFsQm9keT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPFdoYXRzTmV3Q29udGVudC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9MYXJnZU1vZGFsQm9keT5cblxuICAgICAgICAgICAgICAgICAgICA8TW9kYWxGb290ZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIG9uQ2xpY2s9eygpID0+IHRoaXMub25Eb25lKCl9PkNsb3NlPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvTW9kYWxGb290ZXI+XG5cbiAgICAgICAgICAgICAgICA8L0xhcmdlTW9kYWw+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkRvbmUoKSB7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7b3BlbjogZmFsc2V9KTtcblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkRvbmUpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25Eb25lKCk7XG4gICAgICAgIH1cblxuICAgIH1cblxufVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuIHdlIGNsaWNrIHRoZSBvayBidXR0b24uXG4gICAgICovXG4gICAgb25Eb25lPzogKCkgPT4gdm9pZDtcblxufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbiAgICBvcGVuOiBib29sZWFuO1xufVxuIl19