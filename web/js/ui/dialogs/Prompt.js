"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const reactstrap_1 = require("reactstrap");
const Label_1 = __importDefault(require("reactstrap/lib/Label"));
const Input_1 = __importDefault(require("reactstrap/lib/Input"));
const DialogContainer_1 = require("./DialogContainer");
const InputValidators_1 = require("./InputValidators");
class Prompt extends react_1.default.PureComponent {
    constructor(props) {
        super(props);
        this.value = '';
        this.onCancel = this.onCancel.bind(this);
        this.onDone = this.onDone.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.state = {};
    }
    render() {
        const id = 'prompt-' + Math.floor(10000 * Math.random());
        const { validation } = this.state;
        const InputValidationMessage = () => {
            if (validation) {
                return react_1.default.createElement("div", { className: "mt-1 mb-1" },
                    react_1.default.createElement("div", { className: "alert alert-danger p-1", role: "alert" }, validation.message));
            }
            else {
                return react_1.default.createElement("div", null);
            }
        };
        return (react_1.default.createElement(DialogContainer_1.DialogContainer, { open: true },
            react_1.default.createElement("div", { className: "p-3" },
                react_1.default.createElement(InputValidationMessage, null),
                react_1.default.createElement(Label_1.default, { className: "font-weight-bold", for: id },
                    react_1.default.createElement("h4", null, this.props.title)),
                react_1.default.createElement("div", { className: "mt-1 mb-3" },
                    react_1.default.createElement(Input_1.default, { type: "text", name: id, id: id, style: {
                            width: '450px',
                            maxWidth: '100vh'
                        }, onKeyDown: event => this.onKeyDown(event), defaultValue: this.props.defaultValue || '', onChange: (event) => this.value = event.target.value, autoFocus: true, placeholder: this.props.placeholder || '' })),
                react_1.default.createElement("div", { className: "text-right" },
                    react_1.default.createElement(reactstrap_1.Button, { color: "light", size: "lg", className: "", onClick: () => this.onCancel() }, "Cancel"),
                    react_1.default.createElement(reactstrap_1.Button, { color: "primary", size: "lg", className: "ml-1", onClick: () => this.onDone(this.value) }, "Done")))));
    }
    onKeyDown(event) {
        if (event.key === "Enter") {
            this.onDone(this.value);
        }
        if (event.key === "Escape") {
            this.onCancel();
        }
    }
    onCancel() {
        this.props.onCancel();
    }
    onDone(value) {
        const validator = this.props.validator || InputValidators_1.NULL_INPUT_VALIDATOR;
        const validation = validator(value);
        if (validation) {
            this.setState({ validation });
            return;
        }
        this.props.onDone(value);
    }
}
exports.Prompt = Prompt;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvbXB0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUHJvbXB0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGtEQUEwQjtBQUMxQiwyQ0FBa0M7QUFDbEMsaUVBQXlDO0FBQ3pDLGlFQUF5QztBQUN6Qyx1REFBa0Q7QUFFbEQsdURBQXVEO0FBTXZELE1BQWEsTUFBTyxTQUFRLGVBQUssQ0FBQyxhQUFrQztJQUloRSxZQUFZLEtBQWtCO1FBQzFCLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUhULFVBQUssR0FBVyxFQUFFLENBQUM7UUFLdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFM0MsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUVaLENBQUM7SUFFTixDQUFDO0lBRU0sTUFBTTtRQUVULE1BQU0sRUFBRSxHQUFHLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUV6RCxNQUFNLEVBQUMsVUFBVSxFQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUVoQyxNQUFNLHNCQUFzQixHQUFHLEdBQUcsRUFBRTtZQUVoQyxJQUFJLFVBQVUsRUFBRTtnQkFDWixPQUFPLHVDQUFLLFNBQVMsRUFBQyxXQUFXO29CQUM3Qix1Q0FBSyxTQUFTLEVBQUMsd0JBQXdCLEVBQUMsSUFBSSxFQUFDLE9BQU8sSUFDL0MsVUFBVSxDQUFDLE9BQU8sQ0FDakIsQ0FDSixDQUFDO2FBQ1Y7aUJBQU07Z0JBQ0gsT0FBTywwQ0FBTSxDQUFDO2FBQ2pCO1FBRUwsQ0FBQyxDQUFDO1FBRUYsT0FBTyxDQUVILDhCQUFDLGlDQUFlLElBQUMsSUFBSSxFQUFFLElBQUk7WUFFeEIsdUNBQUssU0FBUyxFQUFDLEtBQUs7Z0JBRWhCLDhCQUFDLHNCQUFzQixPQUFFO2dCQUV6Qiw4QkFBQyxlQUFLLElBQUMsU0FBUyxFQUFDLGtCQUFrQixFQUM1QixHQUFHLEVBQUUsRUFBRTtvQkFDViwwQ0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBTSxDQUN2QjtnQkFFUix1Q0FBSyxTQUFTLEVBQUMsV0FBVztvQkFDdEIsOEJBQUMsZUFBSyxJQUFDLElBQUksRUFBQyxNQUFNLEVBQ1gsSUFBSSxFQUFFLEVBQUUsRUFDUixFQUFFLEVBQUUsRUFBRSxFQUNOLEtBQUssRUFBRTs0QkFDSCxLQUFLLEVBQUUsT0FBTzs0QkFDZCxRQUFRLEVBQUUsT0FBTzt5QkFDcEIsRUFDRCxTQUFTLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUN6QyxZQUFZLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLElBQUssRUFBRSxFQUM1QyxRQUFRLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQ3BELFNBQVMsUUFDVCxXQUFXLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLElBQUksRUFBRSxHQUFHLENBQ2pEO2dCQUVMLHVDQUFLLFNBQVMsRUFBQyxZQUFZO29CQUV2Qiw4QkFBQyxtQkFBTSxJQUFDLEtBQUssRUFBQyxPQUFPLEVBQ2IsSUFBSSxFQUFDLElBQUksRUFDVCxTQUFTLEVBQUMsRUFBRSxFQUNaLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLGFBQWlCO29CQUV2RCw4QkFBQyxtQkFBTSxJQUFDLEtBQUssRUFBQyxTQUFTLEVBQ2YsSUFBSSxFQUFDLElBQUksRUFDVCxTQUFTLEVBQUMsTUFBTSxFQUNoQixPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQWUsQ0FFM0QsQ0FDTCxDQUVTLENBRXJCLENBQUM7SUFDTixDQUFDO0lBRU8sU0FBUyxDQUFDLEtBQXVDO1FBRXJELElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSyxPQUFPLEVBQUU7WUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDM0I7UUFFRCxJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssUUFBUSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNuQjtJQUVMLENBQUM7SUFFTyxRQUFRO1FBQ1osSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRU8sTUFBTSxDQUFDLEtBQWE7UUFFeEIsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLElBQUksc0NBQW9CLENBQUM7UUFFL0QsTUFBTSxVQUFVLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXBDLElBQUksVUFBVSxFQUFFO1lBQ1osSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLENBQUM7WUFDNUIsT0FBTztTQUNWO1FBRUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0IsQ0FBQztDQUVKO0FBbkhELHdCQW1IQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0J1dHRvbn0gZnJvbSAncmVhY3RzdHJhcCc7XG5pbXBvcnQgTGFiZWwgZnJvbSAncmVhY3RzdHJhcC9saWIvTGFiZWwnO1xuaW1wb3J0IElucHV0IGZyb20gJ3JlYWN0c3RyYXAvbGliL0lucHV0JztcbmltcG9ydCB7RGlhbG9nQ29udGFpbmVyfSBmcm9tICcuL0RpYWxvZ0NvbnRhaW5lcic7XG5pbXBvcnQge0lucHV0VmFsaWRhdG9yfSBmcm9tICcuL0lucHV0VmFsaWRhdG9ycyc7XG5pbXBvcnQge05VTExfSU5QVVRfVkFMSURBVE9SfSBmcm9tICcuL0lucHV0VmFsaWRhdG9ycyc7XG5pbXBvcnQge0lucHV0VmFsaWRhdGlvbn0gZnJvbSAnLi9JbnB1dFZhbGlkYXRvcnMnO1xuXG4vKipcbiAqIEFzayB0aGUgdXNlciBmb3IgYSB0ZXh0IHN0cmluZ1xuICovXG5leHBvcnQgY2xhc3MgUHJvbXB0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxQcm9tcHRQcm9wcywgSVN0YXRlPiB7XG5cbiAgICBwcml2YXRlIHZhbHVlOiBzdHJpbmcgPSAnJztcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBQcm9tcHRQcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5vbkNhbmNlbCA9IHRoaXMub25DYW5jZWwuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkRvbmUgPSB0aGlzLm9uRG9uZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uS2V5RG93biA9IHRoaXMub25LZXlEb3duLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcblxuICAgICAgICB9O1xuXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICBjb25zdCBpZCA9ICdwcm9tcHQtJyArIE1hdGguZmxvb3IoMTAwMDAgKiBNYXRoLnJhbmRvbSgpKTtcblxuICAgICAgICBjb25zdCB7dmFsaWRhdGlvbn0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGNvbnN0IElucHV0VmFsaWRhdGlvbk1lc3NhZ2UgPSAoKSA9PiB7XG5cbiAgICAgICAgICAgIGlmICh2YWxpZGF0aW9uKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwibXQtMSBtYi0xXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyIHAtMVwiIHJvbGU9XCJhbGVydFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3ZhbGlkYXRpb24ubWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gPGRpdi8+O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgPERpYWxvZ0NvbnRhaW5lciBvcGVuPXt0cnVlfT5cblxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTNcIj5cblxuICAgICAgICAgICAgICAgICAgIDxJbnB1dFZhbGlkYXRpb25NZXNzYWdlLz5cblxuICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yPXtpZH0+XG4gICAgICAgICAgICAgICAgICAgICAgIDxoND57dGhpcy5wcm9wcy50aXRsZX08L2g0PlxuICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XG5cbiAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEgbWItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17aWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnNDUwcHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnMTAwdmgnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXtldmVudCA9PiB0aGlzLm9uS2V5RG93bihldmVudCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMuZGVmYXVsdFZhbHVlICB8fCAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHRoaXMudmFsdWUgPSBldmVudC50YXJnZXQudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvRm9jdXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0aGlzLnByb3BzLnBsYWNlaG9sZGVyIHx8ICcnfS8+XG4gICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJsZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMub25DYW5jZWwoKX0+Q2FuY2VsPC9CdXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMub25Eb25lKHRoaXMudmFsdWUpfT5Eb25lPC9CdXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9EaWFsb2dDb250YWluZXI+XG5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uS2V5RG93bihldmVudDogUmVhY3QuS2V5Ym9hcmRFdmVudDxIVE1MRWxlbWVudD4pIHtcblxuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgICAgIHRoaXMub25Eb25lKHRoaXMudmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgICAgICAgdGhpcy5vbkNhbmNlbCgpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uQ2FuY2VsKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnByb3BzLm9uQ2FuY2VsKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkRvbmUodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuXG4gICAgICAgIGNvbnN0IHZhbGlkYXRvciA9IHRoaXMucHJvcHMudmFsaWRhdG9yIHx8IE5VTExfSU5QVVRfVkFMSURBVE9SO1xuXG4gICAgICAgIGNvbnN0IHZhbGlkYXRpb24gPSB2YWxpZGF0b3IodmFsdWUpO1xuXG4gICAgICAgIGlmICh2YWxpZGF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt2YWxpZGF0aW9ufSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnByb3BzLm9uRG9uZSh2YWx1ZSk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvbXB0UHJvcHMge1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgZGVmYXVsdFZhbHVlPzogc3RyaW5nO1xuICAgIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuICAgIHZhbGlkYXRvcj86IElucHV0VmFsaWRhdG9yO1xuICAgIG9uQ2FuY2VsOiAoKSA9PiB2b2lkO1xuICAgIG9uRG9uZTogKHZhbHVlOiBzdHJpbmcpID0+IHZvaWQ7XG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xuICAgIHJlYWRvbmx5IHZhbGlkYXRpb24/OiBJbnB1dFZhbGlkYXRpb247XG59XG5cbiJdfQ==