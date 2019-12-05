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
class PreviewDisclaimer extends react_1.default.PureComponent {
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
                    "Polar Web ",
                    react_1.default.createElement("b", null, "Preview")),
                react_1.default.createElement("p", null, "This is a preview version of Polar for the web."),
                react_1.default.createElement("p", null,
                    "It works natively with ",
                    react_1.default.createElement("b", null, "Polar Cloud Sync"),
                    ".  If you use the same account, your desktop files and annotations will work on the web and be transparently synchronized."),
                react_1.default.createElement("p", null,
                    "It's ",
                    react_1.default.createElement("b", null, "near real time!"),
                    "  Any changes you make on the web will instantly be reflected on your desktop and other browser tabs."),
                react_1.default.createElement("p", null, "It's mostly functional but has the following limitations."),
                react_1.default.createElement("ul", null,
                    react_1.default.createElement("li", null, "Only PDF documents work for now. Captured web content doesn't yet work."),
                    react_1.default.createElement("li", null, "Won't work on mobile just yet.  The UI doesn't adjust to a smaller display but we're working on reworking this."),
                    react_1.default.createElement("li", null, "The Chrome Extension doesn't yet work with the webapp."),
                    react_1.default.createElement("li", null, "Anki sync won't work and is desktop specific (won't ever work on the webapp)."))),
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
exports.PreviewDisclaimer = PreviewDisclaimer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJldmlld0Rpc2NsYWltZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJQcmV2aWV3RGlzY2xhaW1lci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxrREFBMEI7QUFHMUIsZ0VBQTJEO0FBQzNELDJDQUE0RDtBQUM1RCx3RUFBbUU7QUFDbkUsbUVBQThEO0FBQzlELHNEQUFpRDtBQUdqRCxNQUFhLGlCQUFrQixTQUFRLGVBQUssQ0FBQyxhQUE2QjtJQUV0RSxZQUFZLEtBQVU7UUFDbEIsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRWIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWpDLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDVCxJQUFJLEVBQUUsSUFBSTtTQUNiLENBQUM7SUFFTixDQUFDO0lBRU0sTUFBTTtRQUVULE9BQU8sQ0FFSCw4QkFBQyx1QkFBVSxJQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFDdkIsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFHbkMsOEJBQUMsK0JBQWM7Z0JBRVg7O29CQUFjLG1EQUFjLENBQUs7Z0JBRWpDLDJGQUVJO2dCQUVKOztvQkFDMkIsNERBQXVCO2lKQUc5QztnQkFFSjs7b0JBQ1MsMkRBQXNCOzRIQUczQjtnQkFFSixxR0FHSTtnQkFFSjtvQkFFSSxvSEFBZ0Y7b0JBQ2hGLDRKQUF3SDtvQkFDeEgsbUdBQStEO29CQUMvRCwwSEFBc0YsQ0FFckYsQ0FFUTtZQUVqQiw4QkFBQyx3QkFBVztnQkFFUiw4QkFBQyxtQkFBTSxJQUFDLEtBQUssRUFBQyxXQUFXLEVBQ2pCLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFNBRXpCLENBRUMsQ0FFTCxDQUVoQixDQUFDO0lBQ04sQ0FBQztJQUVPLElBQUk7UUFDUix1QkFBVSxDQUFDLElBQUksQ0FBQyxpQ0FBZSxDQUFDLDRCQUE0QixDQUFDLENBQUM7UUFFOUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDO0lBRWpDLENBQUM7SUFFTyxNQUFNO1FBRVYsSUFBSSxDQUFDLFFBQVEsaUNBQUssSUFBSSxDQUFDLEtBQUssS0FBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksSUFBRSxDQUFDO0lBRTNELENBQUM7Q0FFSjtBQXJGRCw4Q0FxRkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtQcm9ncmVzc30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL1Byb2dyZXNzVHJhY2tlcic7XG5pbXBvcnQgTW9kYWwgZnJvbSAncmVhY3RzdHJhcC9saWIvTW9kYWwnO1xuaW1wb3J0IHtMYXJnZU1vZGFsfSBmcm9tICcuLi8uLi91aS9sYXJnZV9tb2RhbC9MYXJnZU1vZGFsJztcbmltcG9ydCB7QnV0dG9uLCBNb2RhbEZvb3RlciwgTW9kYWxIZWFkZXJ9IGZyb20gJ3JlYWN0c3RyYXAnO1xuaW1wb3J0IHtMYXJnZU1vZGFsQm9keX0gZnJvbSAnLi4vLi4vdWkvbGFyZ2VfbW9kYWwvTGFyZ2VNb2RhbEJvZHknO1xuaW1wb3J0IHtMaWZlY3ljbGVFdmVudHN9IGZyb20gJy4uLy4uL3VpL3V0aWwvTGlmZWN5Y2xlRXZlbnRzJztcbmltcG9ydCB7TG9jYWxQcmVmc30gZnJvbSAnLi4vLi4vdXRpbC9Mb2NhbFByZWZzJztcbmltcG9ydCB7TGF0Y2h9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL3V0aWwvTGF0Y2hcIjtcblxuZXhwb3J0IGNsYXNzIFByZXZpZXdEaXNjbGFpbWVyIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy50b2dnbGUgPSB0aGlzLnRvZ2dsZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uT0sgPSB0aGlzLm9uT0suYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgb3BlbjogdHJ1ZVxuICAgICAgICB9O1xuXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICA8TGFyZ2VNb2RhbCBpc09wZW49e3RoaXMuc3RhdGUub3Blbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZT17KCkgPT4gdGhpcy50b2dnbGUoKX0+XG5cblxuICAgICAgICAgICAgICAgIDxMYXJnZU1vZGFsQm9keT5cblxuICAgICAgICAgICAgICAgICAgICA8aDI+UG9sYXIgV2ViIDxiPlByZXZpZXc8L2I+PC9oMj5cblxuICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMgaXMgYSBwcmV2aWV3IHZlcnNpb24gb2YgUG9sYXIgZm9yIHRoZSB3ZWIuXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIEl0IHdvcmtzIG5hdGl2ZWx5IHdpdGggPGI+UG9sYXIgQ2xvdWQgU3luYzwvYj4uICBJZiB5b3VcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZSB0aGUgc2FtZSBhY2NvdW50LCB5b3VyIGRlc2t0b3AgZmlsZXMgYW5kIGFubm90YXRpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWxsIHdvcmsgb24gdGhlIHdlYiBhbmQgYmUgdHJhbnNwYXJlbnRseSBzeW5jaHJvbml6ZWQuXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIEl0J3MgPGI+bmVhciByZWFsIHRpbWUhPC9iPiAgQW55IGNoYW5nZXMgeW91IG1ha2Ugb24gdGhlIHdlYlxuICAgICAgICAgICAgICAgICAgICAgICAgd2lsbCBpbnN0YW50bHkgYmUgcmVmbGVjdGVkIG9uIHlvdXIgZGVza3RvcCBhbmQgb3RoZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyb3dzZXIgdGFicy5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgSXQncyBtb3N0bHkgZnVuY3Rpb25hbCBidXQgaGFzIHRoZSBmb2xsb3dpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0YXRpb25zLlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgPHVsPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+T25seSBQREYgZG9jdW1lbnRzIHdvcmsgZm9yIG5vdy4gQ2FwdHVyZWQgd2ViIGNvbnRlbnQgZG9lc24ndCB5ZXQgd29yay48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPldvbid0IHdvcmsgb24gbW9iaWxlIGp1c3QgeWV0LiAgVGhlIFVJIGRvZXNuJ3QgYWRqdXN0IHRvIGEgc21hbGxlciBkaXNwbGF5IGJ1dCB3ZSdyZSB3b3JraW5nIG9uIHJld29ya2luZyB0aGlzLjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+VGhlIENocm9tZSBFeHRlbnNpb24gZG9lc24ndCB5ZXQgd29yayB3aXRoIHRoZSB3ZWJhcHAuPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5BbmtpIHN5bmMgd29uJ3Qgd29yayBhbmQgaXMgZGVza3RvcCBzcGVjaWZpYyAod29uJ3QgZXZlciB3b3JrIG9uIHRoZSB3ZWJhcHApLjwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cblxuICAgICAgICAgICAgICAgIDwvTGFyZ2VNb2RhbEJvZHk+XG5cbiAgICAgICAgICAgICAgICA8TW9kYWxGb290ZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5vbk9LKCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgT0tcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG5cbiAgICAgICAgICAgICAgICA8L01vZGFsRm9vdGVyPlxuXG4gICAgICAgICAgICA8L0xhcmdlTW9kYWw+XG5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uT0soKTogdm9pZCB7XG4gICAgICAgIExvY2FsUHJlZnMubWFyayhMaWZlY3ljbGVFdmVudHMuV0VCQVBQX1BSRVZJRVdfV0FSTklOR19TSE9XTik7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7b3BlbjogZmFsc2V9KTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgdG9nZ2xlKCk6IHZvaWQge1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoey4uLnRoaXMuc3RhdGUsIG9wZW46ICF0aGlzLnN0YXRlLm9wZW59KTtcblxuICAgIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElQcm9wcyB7XG5cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElTdGF0ZSB7XG4gICAgcmVhZG9ubHkgb3BlbjogYm9vbGVhbjtcblxufVxuIl19