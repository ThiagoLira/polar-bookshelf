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
const Optional_1 = require("polar-shared/src/util/ts/Optional");
class CaptureButton extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.onTriggerCapture = this.onTriggerCapture.bind(this);
    }
    render() {
        return (React.createElement(reactstrap_1.InputGroupAddon, { addonType: "append" },
            React.createElement(reactstrap_1.Button, { type: "button", className: "btn", color: "primary", title: "Capture the HTML page and save locally", "aria-label": "", disabled: this.props.disabled, onClick: this.onTriggerCapture },
                React.createElement("span", { className: "fas fa-cloud-download-alt fa-lg", "aria-hidden": "true" }))));
    }
    onTriggerCapture() {
        Optional_1.Optional.of(this.props.onTriggerCapture).map(callback => callback());
    }
}
exports.CaptureButton = CaptureButton;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FwdHVyZUJ1dHRvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNhcHR1cmVCdXR0b24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUMvQiwyQ0FBbUQ7QUFDbkQsZ0VBQTJEO0FBSTNELE1BQWEsYUFBYyxTQUFRLEtBQUssQ0FBQyxTQUFzQjtJQUUzRCxZQUFZLEtBQWEsRUFBRSxPQUFZO1FBQ25DLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVNLE1BQU07UUFFVCxPQUFPLENBRUgsb0JBQUMsNEJBQWUsSUFBQyxTQUFTLEVBQUMsUUFBUTtZQUUvQixvQkFBQyxtQkFBTSxJQUFDLElBQUksRUFBQyxRQUFRLEVBQ2IsU0FBUyxFQUFDLEtBQUssRUFDZixLQUFLLEVBQUMsU0FBUyxFQUNmLEtBQUssRUFBQyx3Q0FBd0MsZ0JBQ25DLEVBQUUsRUFDYixRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBRTdCLE9BQU8sRUFBRSxJQUFJLENBQUMsZ0JBQWdCO2dCQUVsQyw4QkFBTSxTQUFTLEVBQUMsaUNBQWlDLGlCQUFhLE1BQU0sR0FBUSxDQUV2RSxDQUVLLENBRXJCLENBQUM7SUFDTixDQUFDO0lBRU8sZ0JBQWdCO1FBQ3BCLG1CQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7Q0FFSjtBQW5DRCxzQ0FtQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0J1dHRvbiwgSW5wdXRHcm91cEFkZG9ufSBmcm9tICdyZWFjdHN0cmFwJztcbmltcG9ydCB7T3B0aW9uYWx9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC90cy9PcHRpb25hbCc7XG5pbXBvcnQge0lTaW1wbGVSZWFjdG9yfSBmcm9tICcuLi8uLi8uLi9yZWFjdG9yL1NpbXBsZVJlYWN0b3InO1xuaW1wb3J0IHtOYXZpZ2F0aW9uRXZlbnR9IGZyb20gJy4uL0Jyb3dzZXJBcHAnO1xuXG5leHBvcnQgY2xhc3MgQ2FwdHVyZUJ1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIGFueT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcywgY29udGV4dDogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcbiAgICAgICAgdGhpcy5vblRyaWdnZXJDYXB0dXJlID0gdGhpcy5vblRyaWdnZXJDYXB0dXJlLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICA8SW5wdXRHcm91cEFkZG9uIGFkZG9uVHlwZT1cImFwcGVuZFwiPlxuXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0blwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJDYXB0dXJlIHRoZSBIVE1MIHBhZ2UgYW5kIHNhdmUgbG9jYWxseVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25UcmlnZ2VyQ2FwdHVyZX0+XG5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmFzIGZhLWNsb3VkLWRvd25sb2FkLWFsdCBmYS1sZ1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj5cblxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuXG4gICAgICAgICAgICA8L0lucHV0R3JvdXBBZGRvbj5cblxuICAgICAgICApO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25UcmlnZ2VyQ2FwdHVyZSgpIHtcbiAgICAgICAgT3B0aW9uYWwub2YodGhpcy5wcm9wcy5vblRyaWdnZXJDYXB0dXJlKS5tYXAoY2FsbGJhY2sgPT4gY2FsbGJhY2soKSk7XG4gICAgfVxuXG59XG5cbmludGVyZmFjZSBJUHJvcHMge1xuXG4gICAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICAgIG9uVHJpZ2dlckNhcHR1cmU/OiAoKSA9PiB2b2lkO1xuXG59XG4iXX0=