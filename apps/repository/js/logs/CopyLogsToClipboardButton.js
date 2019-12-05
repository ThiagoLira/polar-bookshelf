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
const MemoryLogger_1 = require("../../../../web/js/logger/MemoryLogger");
const Toaster_1 = require("../../../../web/js/ui/toaster/Toaster");
const Clipboards_1 = require("../../../../web/js/util/system/clipboard/Clipboards");
const Button_1 = __importDefault(require("reactstrap/lib/Button"));
const log = Logger_1.Logger.create();
class Styles {
}
class CopyLogsToClipboardButton extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (React.createElement(Button_1.default, { size: "sm", onClick: () => this.onClick() }, "Copy to Clipboard"));
    }
    onClick() {
        const messages = MemoryLogger_1.MemoryLogger.toView();
        const text = messages.map(current => {
            if (current.args && current.args.length > 0) {
                const args = JSON.stringify(current.args);
                return `${current.timestamp}: ${current.msg}: ${args}`;
            }
            else {
                return `${current.timestamp}: ${current.msg}`;
            }
        }).join("\n");
        Clipboards_1.Clipboards.getInstance().writeText(text);
        Toaster_1.Toaster.success("Wrote log output to clipboard.");
    }
}
exports.default = CopyLogsToClipboardButton;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29weUxvZ3NUb0NsaXBib2FyZEJ1dHRvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNvcHlMb2dzVG9DbGlwYm9hcmRCdXR0b24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUMvQiwyREFBc0Q7QUFDdEQseUVBQW9FO0FBQ3BFLG1FQUE4RDtBQUM5RCxvRkFBK0U7QUFDL0UsbUVBQTJDO0FBRTNDLE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU1QixNQUFNLE1BQU07Q0FFWDtBQUVELE1BQXFCLHlCQUEwQixTQUFRLEtBQUssQ0FBQyxTQUF5QjtJQUVsRixZQUFZLEtBQWEsRUFBRSxPQUFZO1FBQ25DLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFHMUIsQ0FBQztJQUVNLE1BQU07UUFFVCxPQUFPLENBQ0gsb0JBQUMsZ0JBQU0sSUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLHdCQUV0QyxDQUNaLENBQUM7SUFFTixDQUFDO0lBRU8sT0FBTztRQUVYLE1BQU0sUUFBUSxHQUFHLDJCQUFZLENBQUMsTUFBTSxFQUFFLENBQUM7UUFFdkMsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUVoQyxJQUFJLE9BQU8sQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUN6QyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDMUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxTQUFTLEtBQUssT0FBTyxDQUFDLEdBQUcsS0FBSyxJQUFJLEVBQUUsQ0FBQzthQUMxRDtpQkFBTTtnQkFDSCxPQUFPLEdBQUcsT0FBTyxDQUFDLFNBQVMsS0FBSyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7YUFDakQ7UUFFTCxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFZCx1QkFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV6QyxpQkFBTyxDQUFDLE9BQU8sQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO0lBRXRELENBQUM7Q0FFSjtBQXZDRCw0Q0F1Q0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7TWVtb3J5TG9nZ2VyfSBmcm9tICcuLi8uLi8uLi8uLi93ZWIvanMvbG9nZ2VyL01lbW9yeUxvZ2dlcic7XG5pbXBvcnQge1RvYXN0ZXJ9IGZyb20gJy4uLy4uLy4uLy4uL3dlYi9qcy91aS90b2FzdGVyL1RvYXN0ZXInO1xuaW1wb3J0IHtDbGlwYm9hcmRzfSBmcm9tICcuLi8uLi8uLi8uLi93ZWIvanMvdXRpbC9zeXN0ZW0vY2xpcGJvYXJkL0NsaXBib2FyZHMnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdHN0cmFwL2xpYi9CdXR0b24nO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbmNsYXNzIFN0eWxlcyB7XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29weUxvZ3NUb0NsaXBib2FyZEJ1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcywgY29udGV4dDogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcblxuXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEJ1dHRvbiBzaXplPVwic21cIiBvbkNsaWNrPXsoKSA9PiB0aGlzLm9uQ2xpY2soKX0+XG4gICAgICAgICAgICAgICAgQ29weSB0byBDbGlwYm9hcmRcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICApO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkNsaWNrKCkge1xuXG4gICAgICAgIGNvbnN0IG1lc3NhZ2VzID0gTWVtb3J5TG9nZ2VyLnRvVmlldygpO1xuXG4gICAgICAgIGNvbnN0IHRleHQgPSBtZXNzYWdlcy5tYXAoY3VycmVudCA9PiB7XG5cbiAgICAgICAgICAgIGlmIChjdXJyZW50LmFyZ3MgJiYgY3VycmVudC5hcmdzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhcmdzID0gSlNPTi5zdHJpbmdpZnkoY3VycmVudC5hcmdzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7Y3VycmVudC50aW1lc3RhbXB9OiAke2N1cnJlbnQubXNnfTogJHthcmdzfWA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBgJHtjdXJyZW50LnRpbWVzdGFtcH06ICR7Y3VycmVudC5tc2d9YDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KS5qb2luKFwiXFxuXCIpO1xuXG4gICAgICAgIENsaXBib2FyZHMuZ2V0SW5zdGFuY2UoKS53cml0ZVRleHQodGV4dCk7XG5cbiAgICAgICAgVG9hc3Rlci5zdWNjZXNzKFwiV3JvdGUgbG9nIG91dHB1dCB0byBjbGlwYm9hcmQuXCIpO1xuXG4gICAgfVxuXG59XG5cblxuXG5leHBvcnQgaW50ZXJmYWNlIElQcm9wcyB7XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJU3RhdGUge1xuXG59XG4iXX0=