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
const LargeModal_1 = require("../../../../web/js/ui/large_modal/LargeModal");
const LargeModalBody_1 = require("../../../../web/js/ui/large_modal/LargeModalBody");
const ConditionalSetting_1 = require("../../../../web/js/ui/util/ConditionalSetting");
const Button_1 = __importDefault(require("reactstrap/lib/Button"));
const Label_1 = __importDefault(require("reactstrap/lib/Label"));
const FormGroup_1 = __importDefault(require("reactstrap/lib/FormGroup"));
const Input_1 = __importDefault(require("reactstrap/lib/Input"));
const ModalFooter_1 = __importDefault(require("reactstrap/lib/ModalFooter"));
const log = Logger_1.Logger.create();
const Styles = {
    label: {
        cursor: 'pointer',
        userSelect: 'none'
    }
};
class Splash extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.doNotShowAgain = false;
        this.state = {
            open: true
        };
        this.onClose = this.onClose.bind(this);
        this.onLater = this.onLater.bind(this);
        this.onDoNotShowAgain = this.onDoNotShowAgain.bind(this);
    }
    render() {
        const CloseButton = () => {
            if (this.props.disableClose) {
                return (React.createElement("div", null));
            }
            else {
                return (React.createElement(Button_1.default, { color: "primary", size: "sm", onClick: () => this.onClose() }, "Close"));
            }
        };
        const DontShowAgain = () => {
            if (this.props.disableDontShowAgain) {
                return (React.createElement("div", null));
            }
            else {
                return (React.createElement(FormGroup_1.default, { check: true },
                    React.createElement(Label_1.default, { check: true, style: Styles.label },
                        React.createElement(Input_1.default, { type: "checkbox", onChange: (event) => this.onDoNotShowAgain(!this.doNotShowAgain) }),
                        "Don't show again")));
            }
        };
        return (React.createElement(LargeModal_1.LargeModal, { isOpen: this.state.open },
            React.createElement(LargeModalBody_1.LargeModalBody, null, this.props.children),
            React.createElement(ModalFooter_1.default, null,
                React.createElement(DontShowAgain, null),
                React.createElement(Button_1.default, { color: "secondary", size: "sm", onClick: () => this.onLater() }, "Later"),
                React.createElement(CloseButton, null))));
    }
    onDoNotShowAgain(value) {
        this.doNotShowAgain = value;
    }
    onLater() {
        const conditionalSetting = new ConditionalSetting_1.ConditionalSetting(this.props.settingKey);
        const after = Date.now() + (24 * 60 * 60 * 1000);
        conditionalSetting.set(`${after}`);
        this.setState({ open: false });
        document.location.href = '#';
    }
    onClose() {
        if (this.doNotShowAgain) {
            const conditionalSetting = new ConditionalSetting_1.ConditionalSetting(this.props.settingKey);
            conditionalSetting.set('do-not-show-again');
        }
        this.setState({ open: false });
    }
}
exports.Splash = Splash;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3BsYXNoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiU3BsYXNoLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBK0I7QUFDL0IsMkRBQXNEO0FBQ3RELDZFQUF3RTtBQUN4RSxxRkFBZ0Y7QUFFaEYsc0ZBQWlGO0FBQ2pGLG1FQUEyQztBQUMzQyxpRUFBeUM7QUFDekMseUVBQWlEO0FBQ2pELGlFQUF5QztBQUN6Qyw2RUFBcUQ7QUFFckQsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLE1BQU0sTUFBTSxHQUFjO0lBQ3RCLEtBQUssRUFBRTtRQUNILE1BQU0sRUFBRSxTQUFTO1FBQ2pCLFVBQVUsRUFBRSxNQUFNO0tBQ3JCO0NBQ0osQ0FBQztBQUVGLE1BQWEsTUFBTyxTQUFRLEtBQUssQ0FBQyxTQUF5QjtJQUl2RCxZQUFZLEtBQWEsRUFBRSxPQUFZO1FBQ25DLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFIbEIsbUJBQWMsR0FBWSxLQUFLLENBQUM7UUFLcEMsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNULElBQUksRUFBRSxJQUFJO1NBQ2IsQ0FBQztRQUVGLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUU3RCxDQUFDO0lBRU0sTUFBTTtRQUVULE1BQU0sV0FBVyxHQUFHLEdBQUcsRUFBRTtZQUVyQixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFO2dCQUN6QixPQUFPLENBQUMsZ0NBQU0sQ0FBQyxDQUFDO2FBQ25CO2lCQUFNO2dCQUNILE9BQU8sQ0FBQyxvQkFBQyxnQkFBTSxJQUFDLEtBQUssRUFBQyxTQUFTLEVBQ2YsSUFBSSxFQUFDLElBQUksRUFDVCxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxZQUFnQixDQUFDLENBQUM7YUFDbEU7UUFFTCxDQUFDLENBQUM7UUFFRixNQUFNLGFBQWEsR0FBRyxHQUFHLEVBQUU7WUFFdkIsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLG9CQUFvQixFQUFFO2dCQUNqQyxPQUFPLENBQUMsZ0NBQU0sQ0FBQyxDQUFDO2FBQ25CO2lCQUFNO2dCQUNILE9BQU8sQ0FBQyxvQkFBQyxtQkFBUyxJQUFDLEtBQUs7b0JBQ3BCLG9CQUFDLGVBQUssSUFBQyxLQUFLLFFBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO3dCQUU1QixvQkFBQyxlQUFLLElBQUMsSUFBSSxFQUFDLFVBQVUsRUFDZixRQUFRLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRzsyQ0FJdEUsQ0FDQSxDQUFDLENBQUM7YUFDakI7UUFFTCxDQUFDLENBQUM7UUFFRixPQUFPLENBRUgsb0JBQUMsdUJBQVUsSUFBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJO1lBRS9CLG9CQUFDLCtCQUFjLFFBRVYsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBRVA7WUFFakIsb0JBQUMscUJBQVc7Z0JBRVIsb0JBQUMsYUFBYSxPQUFFO2dCQUdoQixvQkFBQyxnQkFBTSxJQUFDLEtBQUssRUFBQyxXQUFXLEVBQ2pCLElBQUksRUFBQyxJQUFJLEVBQ1QsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsWUFBZ0I7Z0JBRXJELG9CQUFDLFdBQVcsT0FBRSxDQUVKLENBRUwsQ0FFaEIsQ0FBQztJQUVOLENBQUM7SUFFTyxnQkFBZ0IsQ0FBQyxLQUFjO1FBQ25DLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO0lBQ2hDLENBQUM7SUFFTyxPQUFPO1FBSVgsTUFBTSxrQkFBa0IsR0FDbEIsSUFBSSx1Q0FBa0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRXBELE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO1FBRWpELGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLENBQUM7UUFFbkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDO1FBRTdCLFFBQVEsQ0FBQyxRQUFTLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztJQUVsQyxDQUFDO0lBR08sT0FBTztRQUVYLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUVyQixNQUFNLGtCQUFrQixHQUNsQixJQUFJLHVDQUFrQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7WUFFcEQsa0JBQWtCLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7U0FFL0M7UUFFRCxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUM7SUFFakMsQ0FBQztDQUVKO0FBcEhELHdCQW9IQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL2xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IHtMYXJnZU1vZGFsfSBmcm9tICcuLi8uLi8uLi8uLi93ZWIvanMvdWkvbGFyZ2VfbW9kYWwvTGFyZ2VNb2RhbCc7XG5pbXBvcnQge0xhcmdlTW9kYWxCb2R5fSBmcm9tICcuLi8uLi8uLi8uLi93ZWIvanMvdWkvbGFyZ2VfbW9kYWwvTGFyZ2VNb2RhbEJvZHknO1xuaW1wb3J0IHtJU3R5bGVNYXB9IGZyb20gJy4uLy4uLy4uLy4uL3dlYi9qcy9yZWFjdC9JU3R5bGVNYXAnO1xuaW1wb3J0IHtDb25kaXRpb25hbFNldHRpbmd9IGZyb20gJy4uLy4uLy4uLy4uL3dlYi9qcy91aS91dGlsL0NvbmRpdGlvbmFsU2V0dGluZyc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0c3RyYXAvbGliL0J1dHRvbic7XG5pbXBvcnQgTGFiZWwgZnJvbSAncmVhY3RzdHJhcC9saWIvTGFiZWwnO1xuaW1wb3J0IEZvcm1Hcm91cCBmcm9tICdyZWFjdHN0cmFwL2xpYi9Gb3JtR3JvdXAnO1xuaW1wb3J0IElucHV0IGZyb20gJ3JlYWN0c3RyYXAvbGliL0lucHV0JztcbmltcG9ydCBNb2RhbEZvb3RlciBmcm9tICdyZWFjdHN0cmFwL2xpYi9Nb2RhbEZvb3Rlcic7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuY29uc3QgU3R5bGVzOiBJU3R5bGVNYXAgPSB7XG4gICAgbGFiZWw6IHtcbiAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAgIHVzZXJTZWxlY3Q6ICdub25lJ1xuICAgIH1cbn07XG5cbmV4cG9ydCBjbGFzcyBTcGxhc2ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICAgIHByaXZhdGUgZG9Ob3RTaG93QWdhaW46IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJUHJvcHMsIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIG9wZW46IHRydWVcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLm9uQ2xvc2UgPSB0aGlzLm9uQ2xvc2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkxhdGVyID0gdGhpcy5vbkxhdGVyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25Eb05vdFNob3dBZ2FpbiA9IHRoaXMub25Eb05vdFNob3dBZ2Fpbi5iaW5kKHRoaXMpO1xuXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICBjb25zdCBDbG9zZUJ1dHRvbiA9ICgpID0+IHtcblxuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuZGlzYWJsZUNsb3NlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICg8ZGl2Lz4pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKDxCdXR0b24gY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5vbkNsb3NlKCl9PkNsb3NlPC9CdXR0b24+KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IERvbnRTaG93QWdhaW4gPSAoKSA9PiB7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmRpc2FibGVEb250U2hvd0FnYWluKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICg8ZGl2Lz4pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKDxGb3JtR3JvdXAgY2hlY2s+XG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjaGVjayBzdHlsZT17U3R5bGVzLmxhYmVsfT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gdGhpcy5vbkRvTm90U2hvd0FnYWluKCF0aGlzLmRvTm90U2hvd0FnYWluKX0vPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICBEb24ndCBzaG93IGFnYWluXG5cbiAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD4pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgPExhcmdlTW9kYWwgaXNPcGVuPXt0aGlzLnN0YXRlLm9wZW59PlxuXG4gICAgICAgICAgICAgICAgPExhcmdlTW9kYWxCb2R5PlxuXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuXG4gICAgICAgICAgICAgICAgPC9MYXJnZU1vZGFsQm9keT5cblxuICAgICAgICAgICAgICAgIDxNb2RhbEZvb3Rlcj5cblxuICAgICAgICAgICAgICAgICAgICA8RG9udFNob3dBZ2Fpbi8+XG5cbiAgICAgICAgICAgICAgICAgICAgey8qVE9ETzogbWFrZSBsYXRlciBzaG93IHVwIGEgd2VlayBsYXRlci4uLiovfVxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMub25MYXRlcigpfT5MYXRlcjwvQnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgIDxDbG9zZUJ1dHRvbi8+XG5cbiAgICAgICAgICAgICAgICA8L01vZGFsRm9vdGVyPlxuXG4gICAgICAgICAgICA8L0xhcmdlTW9kYWw+XG5cbiAgICAgICAgKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgb25Eb05vdFNob3dBZ2Fpbih2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLmRvTm90U2hvd0FnYWluID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkxhdGVyKCkge1xuXG4gICAgICAgIC8vIFRPRE8gbWlncmF0ZSB0byBQcmVmcy5tYXJrRGVsYXllZFxuXG4gICAgICAgIGNvbnN0IGNvbmRpdGlvbmFsU2V0dGluZ1xuICAgICAgICAgICAgPSBuZXcgQ29uZGl0aW9uYWxTZXR0aW5nKHRoaXMucHJvcHMuc2V0dGluZ0tleSk7XG5cbiAgICAgICAgY29uc3QgYWZ0ZXIgPSBEYXRlLm5vdygpICsgKDI0ICogNjAgKiA2MCAqIDEwMDApO1xuXG4gICAgICAgIGNvbmRpdGlvbmFsU2V0dGluZy5zZXQoYCR7YWZ0ZXJ9YCk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7b3BlbjogZmFsc2V9KTtcblxuICAgICAgICBkb2N1bWVudC5sb2NhdGlvbiEuaHJlZiA9ICcjJztcblxuICAgIH1cblxuXG4gICAgcHJpdmF0ZSBvbkNsb3NlKCkge1xuXG4gICAgICAgIGlmICh0aGlzLmRvTm90U2hvd0FnYWluKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGNvbmRpdGlvbmFsU2V0dGluZ1xuICAgICAgICAgICAgICAgID0gbmV3IENvbmRpdGlvbmFsU2V0dGluZyh0aGlzLnByb3BzLnNldHRpbmdLZXkpO1xuXG4gICAgICAgICAgICBjb25kaXRpb25hbFNldHRpbmcuc2V0KCdkby1ub3Qtc2hvdy1hZ2FpbicpO1xuXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtvcGVuOiBmYWxzZX0pO1xuXG4gICAgfVxuXG59XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICAgIHJlYWRvbmx5IHNldHRpbmdLZXk6IHN0cmluZztcblxuICAgIHJlYWRvbmx5IGRpc2FibGVEb250U2hvd0FnYWluPzogYm9vbGVhbjtcbiAgICByZWFkb25seSBkaXNhYmxlQ2xvc2U/OiBib29sZWFuO1xufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbiAgICByZWFkb25seSBvcGVuOiBib29sZWFuO1xufVxuXG4iXX0=