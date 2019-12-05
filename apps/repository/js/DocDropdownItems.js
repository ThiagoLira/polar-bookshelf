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
const electron_1 = require("electron");
const Directories_1 = require("../../../web/js/datastore/Directories");
const FilePaths_1 = require("polar-shared/src/util/FilePaths");
const Toaster_1 = require("../../../web/js/ui/toaster/Toaster");
const Clipboards_1 = require("../../../web/js/util/system/clipboard/Clipboards");
const reactstrap_1 = require("reactstrap");
const AppRuntime_1 = require("../../../web/js/AppRuntime");
const Dialogs_1 = require("../../../web/js/ui/dialogs/Dialogs");
const Functions_1 = require("polar-shared/src/util/Functions");
const FontAwesomeIcon_1 = require("../../../web/js/ui/fontawesome/FontAwesomeIcon");
const FeatureToggles_1 = require("polar-shared/src/util/FeatureToggles");
class DocDropdownItems extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.onDelete = this.onDelete.bind(this);
        this.onSetTitle = this.onSetTitle.bind(this);
        this.onCopyURL = this.onCopyURL.bind(this);
        this.onDeleteRequested = this.onDeleteRequested.bind(this);
        this.onSetTitleRequested = this.onSetTitleRequested.bind(this);
    }
    render() {
        const selected = this.props.getSelected();
        if (selected.length === 0) {
            return React.createElement("div", null);
        }
        const isMulti = selected.length > 1;
        const repoDocInfo = selected[0];
        const computeFolder = () => {
            const tags = this.props.filters.filteredTags.get();
            if (tags.length === 1 && tags[0].id.startsWith('/')) {
                return tags[0];
            }
            return undefined;
        };
        const folder = computeFolder();
        return (React.createElement("div", null,
            React.createElement(reactstrap_1.DropdownItem, { toggle: this.props.toggle, hidden: isMulti, onClick: () => this.props.onDocumentLoadRequested(repoDocInfo) },
                React.createElement(FontAwesomeIcon_1.FontAwesomeIcon, { name: "fas fa-eye" }),
                "Open Document"),
            React.createElement(reactstrap_1.DropdownItem, { toggle: this.props.toggle, hidden: isMulti, onClick: () => this.onSetTitleRequested(repoDocInfo) },
                React.createElement(FontAwesomeIcon_1.FontAwesomeIcon, { name: "fas fa-pencil-alt" }),
                "Rename"),
            React.createElement(reactstrap_1.DropdownItem, { toggle: this.props.toggle, hidden: !folder, onClick: () => this.props.onRemoveFromFolder(folder, selected) },
                React.createElement(FontAwesomeIcon_1.FontAwesomeIcon, { name: "fas fa-folder-minus" }),
                "Remove from Folder"),
            React.createElement(reactstrap_1.DropdownItem, { toggle: this.props.toggle, hidden: !repoDocInfo.url || isMulti, onClick: () => this.onCopyURL(repoDocInfo.url) },
                React.createElement(FontAwesomeIcon_1.FontAwesomeIcon, { name: "fas fa-external-link-alt" }),
                "Copy Original URL"),
            React.createElement(reactstrap_1.DropdownItem, { toggle: this.props.toggle, hidden: isMulti || AppRuntime_1.AppRuntime.isBrowser(), disabled: !repoDocInfo.filename, onClick: () => this.onShowFile(repoDocInfo.filename) },
                React.createElement(FontAwesomeIcon_1.FontAwesomeIcon, { name: "far fa-file" }),
                "Show File"),
            React.createElement(reactstrap_1.DropdownItem, { hidden: isMulti, divider: true }),
            React.createElement(reactstrap_1.DropdownItem, { toggle: this.props.toggle, disabled: !repoDocInfo.filename, hidden: isMulti || AppRuntime_1.AppRuntime.isBrowser(), onClick: () => this.onCopyFilePath(repoDocInfo.filename) },
                React.createElement(FontAwesomeIcon_1.FontAwesomeIcon, { name: "far fa-clone" }),
                "Copy File Path"),
            React.createElement(reactstrap_1.DropdownItem, { toggle: this.props.toggle, hidden: isMulti || !FeatureToggles_1.FeatureToggles.get('developer'), onClick: () => this.onCopyText(repoDocInfo.fingerprint, "Document ID copied to clipboard") },
                React.createElement(FontAwesomeIcon_1.FontAwesomeIcon, { name: "far fa-clone" }),
                "Copy Document ID"),
            React.createElement(reactstrap_1.DropdownItem, { hidden: isMulti, divider: true }),
            React.createElement(reactstrap_1.DropdownItem, { toggle: this.props.toggle, className: "text-danger", onClick: () => this.onDeleteRequested(selected) },
                React.createElement(FontAwesomeIcon_1.FontAwesomeIcon, { name: "fas fa-trash-alt" }),
                "Delete")));
    }
    onSetTitleRequested(repoDocInfo) {
        Dialogs_1.Dialogs.prompt({ title: "Enter a new title for the document:",
            defaultValue: repoDocInfo.title,
            onCancel: Functions_1.NULL_FUNCTION,
            onDone: (value) => this.onSetTitle(repoDocInfo, value) });
    }
    onDeleteRequested(repoDocInfos) {
        this.onDelete(repoDocInfos);
    }
    onDelete(repoDocInfos) {
        this.props.onDelete(repoDocInfos);
    }
    onShowFile(filename) {
        const directories = new Directories_1.Directories();
        const path = FilePaths_1.FilePaths.join(directories.stashDir, filename);
        electron_1.shell.showItemInFolder(path);
    }
    onCopyFilePath(filename) {
        const directories = new Directories_1.Directories();
        const path = FilePaths_1.FilePaths.join(directories.stashDir, filename);
        this.copyText(path);
        Toaster_1.Toaster.success("File path copied to clipboard!");
    }
    onCopyText(text, message) {
        this.copyText(text);
        Toaster_1.Toaster.success(message);
    }
    onCopyURL(url) {
        this.copyText(url);
        Toaster_1.Toaster.success("URL copied to clipboard!");
    }
    copyText(text) {
        Clipboards_1.Clipboards.getInstance().writeText(text);
    }
    onSetTitle(repoDocInfo, title) {
        this.props.onSetTitle(repoDocInfo, title);
    }
}
exports.DocDropdownItems = DocDropdownItems;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jRHJvcGRvd25JdGVtcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkRvY0Ryb3Bkb3duSXRlbXMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUUvQix1Q0FBK0I7QUFDL0IsdUVBQWtFO0FBQ2xFLCtEQUEwRDtBQUMxRCxnRUFBMkQ7QUFDM0QsaUZBQTRFO0FBQzVFLDJDQUF3QztBQUN4QywyREFBc0Q7QUFDdEQsZ0VBQTJEO0FBQzNELCtEQUE4RDtBQUM5RCxvRkFBK0U7QUFDL0UseUVBQW9FO0FBSXBFLE1BQWEsZ0JBQWlCLFNBQVEsS0FBSyxDQUFDLFNBQXlCO0lBRWpFLFlBQVksS0FBYSxFQUFFLE9BQVk7UUFDbkMsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztRQUV0QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUUzQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUVuRSxDQUFDO0lBRU0sTUFBTTtRQUVULE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFMUMsSUFBSSxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUV2QixPQUFPLGdDQUFNLENBQUM7U0FDakI7UUFJRCxN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LENBQUMsQ0FBQztJQUM5QyxDQUFDO0NBRUo7QUE5S0QsNENBOEtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtSZXBvRG9jSW5mb30gZnJvbSAnLi9SZXBvRG9jSW5mbyc7XG5pbXBvcnQge3NoZWxsfSBmcm9tICdlbGVjdHJvbic7XG5pbXBvcnQge0RpcmVjdG9yaWVzfSBmcm9tICcuLi8uLi8uLi93ZWIvanMvZGF0YXN0b3JlL0RpcmVjdG9yaWVzJztcbmltcG9ydCB7RmlsZVBhdGhzfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvRmlsZVBhdGhzJztcbmltcG9ydCB7VG9hc3Rlcn0gZnJvbSAnLi4vLi4vLi4vd2ViL2pzL3VpL3RvYXN0ZXIvVG9hc3Rlcic7XG5pbXBvcnQge0NsaXBib2FyZHN9IGZyb20gJy4uLy4uLy4uL3dlYi9qcy91dGlsL3N5c3RlbS9jbGlwYm9hcmQvQ2xpcGJvYXJkcyc7XG5pbXBvcnQge0Ryb3Bkb3duSXRlbX0gZnJvbSAncmVhY3RzdHJhcCc7XG5pbXBvcnQge0FwcFJ1bnRpbWV9IGZyb20gJy4uLy4uLy4uL3dlYi9qcy9BcHBSdW50aW1lJztcbmltcG9ydCB7RGlhbG9nc30gZnJvbSAnLi4vLi4vLi4vd2ViL2pzL3VpL2RpYWxvZ3MvRGlhbG9ncyc7XG5pbXBvcnQge05VTExfRlVOQ1RJT059IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC9GdW5jdGlvbnMnO1xuaW1wb3J0IHtGb250QXdlc29tZUljb259IGZyb20gXCIuLi8uLi8uLi93ZWIvanMvdWkvZm9udGF3ZXNvbWUvRm9udEF3ZXNvbWVJY29uXCI7XG5pbXBvcnQge0ZlYXR1cmVUb2dnbGVzfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy91dGlsL0ZlYXR1cmVUb2dnbGVzXCI7XG5pbXBvcnQge0ZpbHRlcnN9IGZyb20gXCIuL2RvY19yZXBvL0RvY1JlcG9GaWx0ZXJzXCI7XG5pbXBvcnQge1RhZ30gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvdGFncy9UYWdzXCI7XG5cbmV4cG9ydCBjbGFzcyBEb2NEcm9wZG93bkl0ZW1zIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzLCBjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuXG4gICAgICAgIHRoaXMub25EZWxldGUgPSB0aGlzLm9uRGVsZXRlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25TZXRUaXRsZSA9IHRoaXMub25TZXRUaXRsZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uQ29weVVSTCA9IHRoaXMub25Db3B5VVJMLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5vbkRlbGV0ZVJlcXVlc3RlZCA9IHRoaXMub25EZWxldGVSZXF1ZXN0ZWQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vblNldFRpdGxlUmVxdWVzdGVkID0gdGhpcy5vblNldFRpdGxlUmVxdWVzdGVkLmJpbmQodGhpcyk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkID0gdGhpcy5wcm9wcy5nZXRTZWxlY3RlZCgpO1xuXG4gICAgICAgIGlmIChzZWxlY3RlZC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIC8vIHRoZXJlJ3Mgbm90aGluZyB0byByZW5kZXIgbm93Li4uXG4gICAgICAgICAgICByZXR1cm4gPGRpdi8+O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdHJ1ZSBpZiBtdWx0aXBsZSBpdGVtcyBhcmUgc2VsZWN0ZWQgc2luY2Ugc29tZSBhY3Rpb25zIGNhbid0IHdvcmtcbiAgICAgICAgLy8gb24gbXVsdGlwbGUgaXRlbXMuXG4gICAgICAgIGNvbnN0IGlzTXVsdGkgPSBzZWxlY3RlZC5sZW5ndGggPiAxO1xuICAgICAgICBjb25zdCByZXBvRG9jSW5mbyA9IHNlbGVjdGVkWzBdO1xuXG4gICAgICAgIGNvbnN0IGNvbXB1dGVGb2xkZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YWdzID0gdGhpcy5wcm9wcy5maWx0ZXJzLmZpbHRlcmVkVGFncy5nZXQoKTtcbiAgICAgICAgICAgIGlmICh0YWdzLmxlbmd0aCA9PT0gMSAmJiB0YWdzWzBdLmlkLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0YWdzWzBdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgZm9sZGVyID0gY29tcHV0ZUZvbGRlcigpO1xuXG4gICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgIDxkaXY+XG5cbiAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIHRvZ2dsZT17dGhpcy5wcm9wcy50b2dnbGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRkZW49e2lzTXVsdGl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLm9uRG9jdW1lbnRMb2FkUmVxdWVzdGVkKHJlcG9Eb2NJbmZvKX0+XG5cbiAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBuYW1lPVwiZmFzIGZhLWV5ZVwiLz5cblxuICAgICAgICAgICAgICAgICAgICBPcGVuIERvY3VtZW50XG4gICAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XG5cbiAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIHRvZ2dsZT17dGhpcy5wcm9wcy50b2dnbGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRkZW49e2lzTXVsdGl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLm9uU2V0VGl0bGVSZXF1ZXN0ZWQocmVwb0RvY0luZm8pfT5cblxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIG5hbWU9XCJmYXMgZmEtcGVuY2lsLWFsdFwiLz5cbiAgICAgICAgICAgICAgICAgICAgUmVuYW1lXG4gICAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XG5cbiAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIHRvZ2dsZT17dGhpcy5wcm9wcy50b2dnbGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRkZW49eyEgZm9sZGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5vblJlbW92ZUZyb21Gb2xkZXIoZm9sZGVyISwgc2VsZWN0ZWQpfT5cbiAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBuYW1lPVwiZmFzIGZhLWZvbGRlci1taW51c1wiLz5cbiAgICAgICAgICAgICAgICAgICAgUmVtb3ZlIGZyb20gRm9sZGVyXG4gICAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XG5cbiAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIHRvZ2dsZT17dGhpcy5wcm9wcy50b2dnbGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRkZW49eyEgcmVwb0RvY0luZm8udXJsIHx8IGlzTXVsdGl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLm9uQ29weVVSTChyZXBvRG9jSW5mby51cmwhKX0+XG5cbiAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBuYW1lPVwiZmFzIGZhLWV4dGVybmFsLWxpbmstYWx0XCIvPlxuICAgICAgICAgICAgICAgICAgICBDb3B5IE9yaWdpbmFsIFVSTFxuICAgICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxuXG4gICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbSB0b2dnbGU9e3RoaXMucHJvcHMudG9nZ2xlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZGVuPXtpc011bHRpIHx8IEFwcFJ1bnRpbWUuaXNCcm93c2VyKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ISByZXBvRG9jSW5mby5maWxlbmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMub25TaG93RmlsZShyZXBvRG9jSW5mby5maWxlbmFtZSEpfT5cblxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIG5hbWU9XCJmYXIgZmEtZmlsZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgU2hvdyBGaWxlXG4gICAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XG5cbiAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIGhpZGRlbj17aXNNdWx0aX0gZGl2aWRlciAvPlxuXG4gICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbSB0b2dnbGU9e3RoaXMucHJvcHMudG9nZ2xlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyEgcmVwb0RvY0luZm8uZmlsZW5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRkZW49e2lzTXVsdGkgfHwgQXBwUnVudGltZS5pc0Jyb3dzZXIoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMub25Db3B5RmlsZVBhdGgocmVwb0RvY0luZm8uZmlsZW5hbWUhKX0+XG5cbiAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBuYW1lPVwiZmFyIGZhLWNsb25lXCIvPlxuXG4gICAgICAgICAgICAgICAgICAgIENvcHkgRmlsZSBQYXRoXG4gICAgICAgICAgICAgICAgPC9Ecm9wZG93bkl0ZW0+XG5cbiAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIHRvZ2dsZT17dGhpcy5wcm9wcy50b2dnbGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRkZW49e2lzTXVsdGkgfHwgISBGZWF0dXJlVG9nZ2xlcy5nZXQoJ2RldmVsb3BlcicpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5vbkNvcHlUZXh0KHJlcG9Eb2NJbmZvLmZpbmdlcnByaW50LCBcIkRvY3VtZW50IElEIGNvcGllZCB0byBjbGlwYm9hcmRcIil9PlxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIG5hbWU9XCJmYXIgZmEtY2xvbmVcIi8+XG4gICAgICAgICAgICAgICAgICAgIENvcHkgRG9jdW1lbnQgSURcbiAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duSXRlbT5cblxuICAgICAgICAgICAgICAgIHsvKlRPRE86IG1heWJlIGxvYWQgb3JpZ2luYWwgVVJMIHRvbz8qL31cblxuICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gaGlkZGVuPXtpc011bHRpfSBkaXZpZGVyIC8+XG5cbiAgICAgICAgICAgICAgICA8RHJvcGRvd25JdGVtIHRvZ2dsZT17dGhpcy5wcm9wcy50b2dnbGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLm9uRGVsZXRlUmVxdWVzdGVkKHNlbGVjdGVkKX0+XG4gICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gbmFtZT1cImZhcyBmYS10cmFzaC1hbHRcIi8+XG4gICAgICAgICAgICAgICAgICAgIERlbGV0ZVxuICAgICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICApO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblNldFRpdGxlUmVxdWVzdGVkKHJlcG9Eb2NJbmZvOiBSZXBvRG9jSW5mbykge1xuXG4gICAgICAgIERpYWxvZ3MucHJvbXB0KHt0aXRsZTogXCJFbnRlciBhIG5ldyB0aXRsZSBmb3IgdGhlIGRvY3VtZW50OlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiByZXBvRG9jSW5mby50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2FuY2VsOiBOVUxMX0ZVTkNUSU9OLFxuICAgICAgICAgICAgICAgICAgICAgICAgb25Eb25lOiAodmFsdWUpID0+IHRoaXMub25TZXRUaXRsZShyZXBvRG9jSW5mbywgdmFsdWUpfSk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uRGVsZXRlUmVxdWVzdGVkKHJlcG9Eb2NJbmZvczogUmVhZG9ubHlBcnJheTxSZXBvRG9jSW5mbz4pIHtcbiAgICAgICAgdGhpcy5vbkRlbGV0ZShyZXBvRG9jSW5mb3MpO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkRlbGV0ZShyZXBvRG9jSW5mb3M6IFJlYWRvbmx5QXJyYXk8UmVwb0RvY0luZm8+KSB7XG4gICAgICAgIHRoaXMucHJvcHMub25EZWxldGUocmVwb0RvY0luZm9zKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uU2hvd0ZpbGUoZmlsZW5hbWU6IHN0cmluZykge1xuXG4gICAgICAgIGNvbnN0IGRpcmVjdG9yaWVzID0gbmV3IERpcmVjdG9yaWVzKCk7XG4gICAgICAgIGNvbnN0IHBhdGggPSBGaWxlUGF0aHMuam9pbihkaXJlY3Rvcmllcy5zdGFzaERpciwgZmlsZW5hbWUpO1xuICAgICAgICBzaGVsbC5zaG93SXRlbUluRm9sZGVyKHBhdGgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25Db3B5RmlsZVBhdGgoZmlsZW5hbWU6IHN0cmluZykge1xuXG4gICAgICAgIGNvbnN0IGRpcmVjdG9yaWVzID0gbmV3IERpcmVjdG9yaWVzKCk7XG4gICAgICAgIGNvbnN0IHBhdGggPSBGaWxlUGF0aHMuam9pbihkaXJlY3Rvcmllcy5zdGFzaERpciwgZmlsZW5hbWUpO1xuXG4gICAgICAgIHRoaXMuY29weVRleHQocGF0aCk7XG4gICAgICAgIFRvYXN0ZXIuc3VjY2VzcyhcIkZpbGUgcGF0aCBjb3BpZWQgdG8gY2xpcGJvYXJkIVwiKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgb25Db3B5VGV4dCh0ZXh0OiBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgICB0aGlzLmNvcHlUZXh0KHRleHQpO1xuICAgICAgICBUb2FzdGVyLnN1Y2Nlc3MobWVzc2FnZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkNvcHlVUkwodXJsOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5jb3B5VGV4dCh1cmwpO1xuICAgICAgICBUb2FzdGVyLnN1Y2Nlc3MoXCJVUkwgY29waWVkIHRvIGNsaXBib2FyZCFcIik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjb3B5VGV4dCh0ZXh0OiBzdHJpbmcpIHtcbiAgICAgICAgQ2xpcGJvYXJkcy5nZXRJbnN0YW5jZSgpLndyaXRlVGV4dCh0ZXh0KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uU2V0VGl0bGUocmVwb0RvY0luZm86IFJlcG9Eb2NJbmZvLCB0aXRsZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25TZXRUaXRsZShyZXBvRG9jSW5mbywgdGl0bGUpO1xuICAgIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE9uUmVtb3ZlRnJvbUZvbGRlckNhbGxiYWNrIHtcbiAgICAoZm9sZGVyOiBUYWcsIHJlcG9Eb2NJbmZvczogUmVhZG9ubHlBcnJheTxSZXBvRG9jSW5mbz4pOiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgICByZWFkb25seSBmaWx0ZXJzOiBGaWx0ZXJzO1xuICAgIHJlYWRvbmx5IGdldFNlbGVjdGVkOiAoKSA9PiBSZWFkb25seUFycmF5PFJlcG9Eb2NJbmZvPjtcbiAgICByZWFkb25seSB0b2dnbGU6IGJvb2xlYW47XG4gICAgcmVhZG9ubHkgb25EZWxldGU6IChyZXBvRG9jSW5mb3M6IFJlYWRvbmx5QXJyYXk8UmVwb0RvY0luZm8+KSA9PiB2b2lkO1xuICAgIHJlYWRvbmx5IG9uU2V0VGl0bGU6IChyZXBvRG9jSW5mbzogUmVwb0RvY0luZm8sIHRpdGxlOiBzdHJpbmcpID0+IHZvaWQ7XG4gICAgcmVhZG9ubHkgb25Eb2N1bWVudExvYWRSZXF1ZXN0ZWQ6IChyZXBvRG9jSW5mbzogUmVwb0RvY0luZm8pID0+IHZvaWQ7XG4gICAgcmVhZG9ubHkgb25SZW1vdmVGcm9tRm9sZGVyOiBPblJlbW92ZUZyb21Gb2xkZXJDYWxsYmFjaztcbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG5cbn1cblxuIl19