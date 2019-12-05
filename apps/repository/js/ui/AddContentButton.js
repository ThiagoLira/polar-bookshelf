"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
const AppRuntime_1 = require("../../../../web/js/AppRuntime");
const DropdownToggle_1 = __importDefault(require("reactstrap/lib/DropdownToggle"));
const DropdownMenu_1 = __importDefault(require("reactstrap/lib/DropdownMenu"));
const ManaulDropdown_1 = require("../doc_repo/ManaulDropdown");
const SimpleTooltipEx_1 = require("../../../../web/js/ui/tooltip/SimpleTooltipEx");
const AddContentDropdownItem_1 = require("./AddContentDropdownItem");
const AccountUpgrader_1 = require("../../../../web/js/ui/account_upgrade/AccountUpgrader");
const Logger_1 = require("polar-shared/src/logger/Logger");
const log = Logger_1.Logger.create();
class AddContentButton extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
        this.toggle = this.toggle.bind(this);
        this.doAddFilesFromDisk = this.doAddFilesFromDisk.bind(this);
        this.doCaptureWebPage = this.doCaptureWebPage.bind(this);
        this.doFileUpload = this.doFileUpload.bind(this);
        this.triggerFileUpload = this.triggerFileUpload.bind(this);
        this.state = {
            open: false
        };
    }
    render() {
        return (React.createElement(ManaulDropdown_1.ManualDropdown, { id: "add-content-dropdown", direction: "down", size: "md" },
            React.createElement(SimpleTooltipEx_1.SimpleTooltipEx, { text: "Add content by importing PDFs from your local drive or capturing web pages from the Internet.", placement: "bottom" },
                React.createElement(DropdownToggle_1.default, { size: "md", style: { fontWeight: 'bold' }, color: "success", caret: true },
                    React.createElement("i", { className: "fas fa-plus mr-1" }),
                    " Add \u00A0")),
            React.createElement(DropdownMenu_1.default, { className: "shadow" },
                React.createElement(AddContentDropdownItem_1.AddContentDropdownItem, { id: "add-content-import-from-disk", hidden: AppRuntime_1.AppRuntime.isBrowser(), tooltip: "Add PDF files from disk in bulk.  Select one PDF or multiple PDFs at once.", onClick: () => this.doAddFilesFromDisk() },
                    React.createElement("i", { className: "fas fa-hdd" }),
                    "\u00A0 Add Files from Disk"),
                React.createElement(AddContentDropdownItem_1.AddContentDropdownItem, { id: "add-content-import-from-disk-via-file-upload", hidden: AppRuntime_1.AppRuntime.isElectron(), tooltip: "Upload PDF files from disk in bulk.  Select one PDF or multiple PDFs at once.", onClick: () => this.doFileUpload() },
                    React.createElement("i", { className: "fas fa-hdd" }),
                    "\u00A0 Upload Documents"),
                React.createElement(AddContentDropdownItem_1.AddContentDropdownItem, { id: "add-content-capture-web-page", hidden: AppRuntime_1.AppRuntime.isBrowser(), tooltip: "Capture a web page from the web and save it for annotation and long term archival.", onClick: () => this.doCaptureWebPage() },
                    React.createElement("i", { className: "fab fa-chrome" }),
                    "\u00A0 Capture Web Page"))));
    }
    doAccountVerifiedAction(delegate) {
        const handler = () => __awaiter(this, void 0, void 0, function* () {
            const accountUpgrader = new AccountUpgrader_1.AccountUpgrader();
            if (yield accountUpgrader.upgradeRequired()) {
                accountUpgrader.startUpgrade();
                return;
            }
            delegate();
        });
        handler()
            .catch(err => log.error("Unable to add to repository: ", err));
    }
    doAddFilesFromDisk() {
        this.doAccountVerifiedAction(() => this.props.importFromDisk());
    }
    doCaptureWebPage() {
        this.doAccountVerifiedAction(() => this.props.captureWebPage());
    }
    doFileUpload() {
        this.doAccountVerifiedAction(() => this.triggerFileUpload());
    }
    triggerFileUpload() {
        document.getElementById('file-upload').click();
    }
    toggle() {
        this.setState(Object.assign(Object.assign({}, this.state), { open: !this.state.open }));
    }
}
exports.AddContentButton = AddContentButton;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRkQ29udGVudEJ1dHRvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkFkZENvbnRlbnRCdXR0b24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUMvQiw4REFBeUQ7QUFDekQsbUZBQTJEO0FBQzNELCtFQUF1RDtBQUN2RCwrREFBMEQ7QUFDMUQsbUZBQThFO0FBQzlFLHFFQUFnRTtBQUNoRSwyRkFBc0Y7QUFDdEYsMkRBQXNEO0FBRXRELE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU1QixNQUFhLGdCQUFpQixTQUFRLEtBQUssQ0FBQyxhQUE2QjtJQUVyRSxZQUFZLEtBQWEsRUFBRSxPQUFZO1FBQ25DLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTNELElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDVCxJQUFJLEVBQUUsS0FBSztTQUNkLENBQUM7SUFFTixDQUFDO0lBRU0sTUFBTTtRQUVULE9BQU8sQ0FFSCxvQkFBQywrQkFBYyxJQUFDLEVBQUUsRUFBQyxzQkFBc0IsRUFD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YWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7QXBwUnVudGltZX0gZnJvbSAnLi4vLi4vLi4vLi4vd2ViL2pzL0FwcFJ1bnRpbWUnO1xuaW1wb3J0IERyb3Bkb3duVG9nZ2xlIGZyb20gJ3JlYWN0c3RyYXAvbGliL0Ryb3Bkb3duVG9nZ2xlJztcbmltcG9ydCBEcm9wZG93bk1lbnUgZnJvbSAncmVhY3RzdHJhcC9saWIvRHJvcGRvd25NZW51JztcbmltcG9ydCB7TWFudWFsRHJvcGRvd259IGZyb20gJy4uL2RvY19yZXBvL01hbmF1bERyb3Bkb3duJztcbmltcG9ydCB7U2ltcGxlVG9vbHRpcEV4fSBmcm9tICcuLi8uLi8uLi8uLi93ZWIvanMvdWkvdG9vbHRpcC9TaW1wbGVUb29sdGlwRXgnO1xuaW1wb3J0IHtBZGRDb250ZW50RHJvcGRvd25JdGVtfSBmcm9tICcuL0FkZENvbnRlbnREcm9wZG93bkl0ZW0nO1xuaW1wb3J0IHtBY2NvdW50VXBncmFkZXJ9IGZyb20gXCIuLi8uLi8uLi8uLi93ZWIvanMvdWkvYWNjb3VudF91cGdyYWRlL0FjY291bnRVcGdyYWRlclwiO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL2xvZ2dlci9Mb2dnZXJcIjtcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG5leHBvcnQgY2xhc3MgQWRkQ29udGVudEJ1dHRvbiBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJUHJvcHMsIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG5cbiAgICAgICAgdGhpcy50b2dnbGUgPSB0aGlzLnRvZ2dsZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRvQWRkRmlsZXNGcm9tRGlzayA9IHRoaXMuZG9BZGRGaWxlc0Zyb21EaXNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZG9DYXB0dXJlV2ViUGFnZSA9IHRoaXMuZG9DYXB0dXJlV2ViUGFnZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRvRmlsZVVwbG9hZCA9IHRoaXMuZG9GaWxlVXBsb2FkLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudHJpZ2dlckZpbGVVcGxvYWQgPSB0aGlzLnRyaWdnZXJGaWxlVXBsb2FkLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIG9wZW46IGZhbHNlXG4gICAgICAgIH07XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgIDxNYW51YWxEcm9wZG93biBpZD1cImFkZC1jb250ZW50LWRyb3Bkb3duXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb249XCJkb3duXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibWRcIj5cblxuICAgICAgICAgICAgICAgIDxTaW1wbGVUb29sdGlwRXggdGV4dD1cIkFkZCBjb250ZW50IGJ5IGltcG9ydGluZyBQREZzIGZyb20geW91ciBsb2NhbCBkcml2ZSBvciBjYXB0dXJpbmcgd2ViIHBhZ2VzIGZyb20gdGhlIEludGVybmV0LlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJib3R0b21cIj5cblxuICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25Ub2dnbGUgc2l6ZT1cIm1kXCIgc3R5bGU9e3tmb250V2VpZ2h0OiAnYm9sZCd9fSBjb2xvcj1cInN1Y2Nlc3NcIiBjYXJldD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1wbHVzIG1yLTFcIiAvPiBBZGQgJm5ic3A7XG4gICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd25Ub2dnbGU+XG5cbiAgICAgICAgICAgICAgICA8L1NpbXBsZVRvb2x0aXBFeD5cblxuICAgICAgICAgICAgICAgIDxEcm9wZG93bk1lbnUgY2xhc3NOYW1lPVwic2hhZG93XCI+XG5cbiAgICAgICAgICAgICAgICAgICAgPEFkZENvbnRlbnREcm9wZG93bkl0ZW0gaWQ9XCJhZGQtY29udGVudC1pbXBvcnQtZnJvbS1kaXNrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZGVuPXtBcHBSdW50aW1lLmlzQnJvd3NlcigpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwPVwiQWRkIFBERiBmaWxlcyBmcm9tIGRpc2sgaW4gYnVsay4gIFNlbGVjdCBvbmUgUERGIG9yIG11bHRpcGxlIFBERnMgYXQgb25jZS5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmRvQWRkRmlsZXNGcm9tRGlzaygpfT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWhkZFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwOyBBZGQgRmlsZXMgZnJvbSBEaXNrXG5cbiAgICAgICAgICAgICAgICAgICAgPC9BZGRDb250ZW50RHJvcGRvd25JdGVtPlxuXG4gICAgICAgICAgICAgICAgICAgIDxBZGRDb250ZW50RHJvcGRvd25JdGVtIGlkPVwiYWRkLWNvbnRlbnQtaW1wb3J0LWZyb20tZGlzay12aWEtZmlsZS11cGxvYWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRkZW49e0FwcFJ1bnRpbWUuaXNFbGVjdHJvbigpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwPVwiVXBsb2FkIFBERiBmaWxlcyBmcm9tIGRpc2sgaW4gYnVsay4gIFNlbGVjdCBvbmUgUERGIG9yIG11bHRpcGxlIFBERnMgYXQgb25jZS5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmRvRmlsZVVwbG9hZCgpfT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWhkZFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwOyBVcGxvYWQgRG9jdW1lbnRzXG5cbiAgICAgICAgICAgICAgICAgICAgPC9BZGRDb250ZW50RHJvcGRvd25JdGVtPlxuXG4gICAgICAgICAgICAgICAgICAgIDxBZGRDb250ZW50RHJvcGRvd25JdGVtIGlkPVwiYWRkLWNvbnRlbnQtY2FwdHVyZS13ZWItcGFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGRlbj17QXBwUnVudGltZS5pc0Jyb3dzZXIoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcD1cIkNhcHR1cmUgYSB3ZWIgcGFnZSBmcm9tIHRoZSB3ZWIgYW5kIHNhdmUgaXQgZm9yIGFubm90YXRpb24gYW5kIGxvbmcgdGVybSBhcmNoaXZhbC5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmRvQ2FwdHVyZVdlYlBhZ2UoKX0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1jaHJvbWVcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDsgQ2FwdHVyZSBXZWIgUGFnZVxuXG4gICAgICAgICAgICAgICAgICAgIDwvQWRkQ29udGVudERyb3Bkb3duSXRlbT5cblxuICAgICAgICAgICAgICAgIDwvRHJvcGRvd25NZW51PlxuXG4gICAgICAgICAgICA8L01hbnVhbERyb3Bkb3duPlxuXG4gICAgICAgICk7XG5cbiAgICB9XG4gICAgcHJpdmF0ZSBkb0FjY291bnRWZXJpZmllZEFjdGlvbihkZWxlZ2F0ZTogKCkgPT4gdm9pZCkge1xuXG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSBhc3luYyAoKSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IGFjY291bnRVcGdyYWRlciA9IG5ldyBBY2NvdW50VXBncmFkZXIoKTtcblxuICAgICAgICAgICAgaWYgKGF3YWl0IGFjY291bnRVcGdyYWRlci51cGdyYWRlUmVxdWlyZWQoKSkge1xuICAgICAgICAgICAgICAgIGFjY291bnRVcGdyYWRlci5zdGFydFVwZ3JhZGUoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRlbGVnYXRlKCk7XG5cbiAgICAgICAgfTtcblxuICAgICAgICBoYW5kbGVyKClcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gbG9nLmVycm9yKFwiVW5hYmxlIHRvIGFkZCB0byByZXBvc2l0b3J5OiBcIiwgZXJyKSk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGRvQWRkRmlsZXNGcm9tRGlzaygpIHtcbiAgICAgICAgdGhpcy5kb0FjY291bnRWZXJpZmllZEFjdGlvbigoKSA9PiB0aGlzLnByb3BzLmltcG9ydEZyb21EaXNrKCkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZG9DYXB0dXJlV2ViUGFnZSgpIHtcbiAgICAgICAgdGhpcy5kb0FjY291bnRWZXJpZmllZEFjdGlvbigoKSA9PiB0aGlzLnByb3BzLmNhcHR1cmVXZWJQYWdlKCkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZG9GaWxlVXBsb2FkKCkge1xuICAgICAgICB0aGlzLmRvQWNjb3VudFZlcmlmaWVkQWN0aW9uKCgpID0+IHRoaXMudHJpZ2dlckZpbGVVcGxvYWQoKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB0cmlnZ2VyRmlsZVVwbG9hZCgpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbGUtdXBsb2FkJykhLmNsaWNrKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB0b2dnbGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoey4uLnRoaXMuc3RhdGUsIG9wZW46ICF0aGlzLnN0YXRlLm9wZW59KTtcbiAgICB9XG5cbn1cblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgcmVhZG9ubHkgaW1wb3J0RnJvbURpc2s6ICgpID0+IHZvaWQ7XG4gICAgcmVhZG9ubHkgY2FwdHVyZVdlYlBhZ2U6ICgpID0+IHZvaWQ7XG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xuICAgIHJlYWRvbmx5IG9wZW46IGJvb2xlYW47XG59XG4iXX0=