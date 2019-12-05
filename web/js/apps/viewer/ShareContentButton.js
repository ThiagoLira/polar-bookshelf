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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Button_1 = __importDefault(require("reactstrap/lib/Button"));
const PopoverBody_1 = __importDefault(require("reactstrap/lib/PopoverBody"));
const reactstrap_1 = require("reactstrap");
const ShareContentControl_1 = require("./ShareContentControl");
const Visibility_1 = require("polar-shared/src/datastore/Visibility");
class Styles {
}
Styles.dropdownChevron = {
    display: 'inline-block',
    width: 0,
    height: 0,
    marginLeft: '.255em',
    verticalAlign: '.255em',
    borderTop: '.3em solid',
    borderRight: '.3em solid transparent',
    borderBottom: 0,
    borderLeft: '.3em solid transparent',
    color: 'var(--secondary)'
};
Styles.shareControlButtonParent = {};
class ShareContentButton extends react_1.default.PureComponent {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.onDone = this.onDone.bind(this);
        this.state = {
            open: false,
            visibility: this.props.visibility || Visibility_1.Visibility.PRIVATE
        };
    }
    render() {
        const buttonIconClass = this.state.visibility === Visibility_1.Visibility.PRIVATE ? "fas fa-lock" : "fas fa-lock-open";
        return (react_1.default.createElement("div", { style: Styles.shareControlButtonParent, className: "mr-1 ml-1" },
            react_1.default.createElement(Button_1.default, { color: "primary", id: "share-control-button", size: "sm", disabled: this.props.disabled, hidden: this.props.hidden, onClick: () => this.toggle(true), style: { fontSize: '15px' }, className: "pl-2 pr-2 p-1" },
                react_1.default.createElement("div", { style: { display: 'flex',
                        marginTop: 'auto',
                        marginBottom: 'auto' } },
                    react_1.default.createElement("div", { className: "mt-auto mb-auto" },
                        react_1.default.createElement("i", { className: buttonIconClass, style: { marginRight: '5px' } })),
                    react_1.default.createElement("div", { className: "mt-auto mb-auto" }, "Share"),
                    react_1.default.createElement("div", { className: "mt-auto mb-auto" },
                        react_1.default.createElement("span", { className: "text-white", style: Styles.dropdownChevron })))),
            react_1.default.createElement(reactstrap_1.Popover, { trigger: "legacy", placement: "bottom", fade: false, delay: 0, isOpen: this.state.open, toggle: () => this.toggle(false), target: "share-control-button", className: "", style: { maxWidth: '600px' } },
                react_1.default.createElement(PopoverBody_1.default, { className: "shadow" },
                    react_1.default.createElement(ShareContentControl_1.ShareContentControl, { datastoreCapabilities: this.props.datastoreCapabilities, createShareLink: this.props.createShareLink, visibility: this.state.visibility, onVisibilityChanged: (visibility) => __awaiter(this, void 0, void 0, function* () { return this.onVisibilityChanged(visibility); }), onDone: () => this.onDone() })))));
    }
    toggle(open) {
        this.setState(Object.assign(Object.assign({}, this.state), { open }));
    }
    onVisibilityChanged(visibility) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.props.onVisibilityChanged(visibility);
            this.setState(Object.assign(Object.assign({}, this.state), { visibility }));
        });
    }
    onDone() {
        this.toggle(false);
        this.props.onDone();
    }
}
exports.ShareContentButton = ShareContentButton;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2hhcmVDb250ZW50QnV0dG9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiU2hhcmVDb250ZW50QnV0dG9uLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBLGtEQUEwQjtBQUMxQixtRUFBMkM7QUFDM0MsNkVBQXFEO0FBQ3JELDJDQUFtQztBQUVuQywrREFBMEQ7QUFDMUQsc0VBQWlFO0FBRWpFLE1BQU0sTUFBTTs7QUFFTSxzQkFBZSxHQUF3QjtJQUVqRCxPQUFPLEVBQUUsY0FBYztJQUN2QixLQUFLLEVBQUUsQ0FBQztJQUNSLE1BQU0sRUFBRSxDQUFDO0lBQ1QsVUFBVSxFQUFFLFFBQVE7SUFDcEIsYUFBYSxFQUFFLFFBQVE7SUFDdkIsU0FBUyxFQUFFLFlBQVk7SUFDdkIsV0FBVyxFQUFFLHdCQUF3QjtJQUNyQyxZQUFZLEVBQUUsQ0FBQztJQUNmLFVBQVUsRUFBRSx3QkFBd0I7SUFDcEMsS0FBSyxFQUFFLGtCQUFrQjtDQUU1QixDQUFDO0FBRVksK0JBQXdCLEdBQXdCLEVBUzdELENBQUM7QUFJTixNQUFhLGtCQUFtQixTQUFRLGVBQUssQ0FBQyxhQUE2QjtJQUV2RSxZQUFZLEtBQWE7UUFDckIsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRWIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXJDLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDVCxJQUFJLEVBQUUsS0FBSztZQUNYLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsSUFBSSx1QkFBVSxDQUFDLE9BQU87U0FDMUQsQ0FBQztJQUVOLENBQUM7SUFFTSxNQUFNO1FBRVQsTUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FB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LCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQgcmVhY3Qvbm8tbXVsdGktY29tcDogMCwgcmVhY3QvcHJvcC10eXBlczogMCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3RzdHJhcC9saWIvQnV0dG9uJztcbmltcG9ydCBQb3BvdmVyQm9keSBmcm9tICdyZWFjdHN0cmFwL2xpYi9Qb3BvdmVyQm9keSc7XG5pbXBvcnQge1BvcG92ZXJ9IGZyb20gJ3JlYWN0c3RyYXAnO1xuaW1wb3J0IHtEYXRhc3RvcmVDYXBhYmlsaXRpZXN9IGZyb20gJy4uLy4uL2RhdGFzdG9yZS9EYXRhc3RvcmUnO1xuaW1wb3J0IHtTaGFyZUNvbnRlbnRDb250cm9sfSBmcm9tICcuL1NoYXJlQ29udGVudENvbnRyb2wnO1xuaW1wb3J0IHtWaXNpYmlsaXR5fSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy9kYXRhc3RvcmUvVmlzaWJpbGl0eVwiO1xuXG5jbGFzcyBTdHlsZXMge1xuXG4gICAgcHVibGljIHN0YXRpYyBkcm9wZG93bkNoZXZyb246IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XG5cbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgIHdpZHRoOiAwLFxuICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgIG1hcmdpbkxlZnQ6ICcuMjU1ZW0nLFxuICAgICAgICB2ZXJ0aWNhbEFsaWduOiAnLjI1NWVtJyxcbiAgICAgICAgYm9yZGVyVG9wOiAnLjNlbSBzb2xpZCcsXG4gICAgICAgIGJvcmRlclJpZ2h0OiAnLjNlbSBzb2xpZCB0cmFuc3BhcmVudCcsXG4gICAgICAgIGJvcmRlckJvdHRvbTogMCxcbiAgICAgICAgYm9yZGVyTGVmdDogJy4zZW0gc29saWQgdHJhbnNwYXJlbnQnLFxuICAgICAgICBjb2xvcjogJ3ZhcigtLXNlY29uZGFyeSknXG5cbiAgICB9O1xuXG4gICAgcHVibGljIHN0YXRpYyBzaGFyZUNvbnRyb2xCdXR0b25QYXJlbnQ6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XG5cbiAgICAgICAgLy8gcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIC8vIHRvcDogJzkwcHgnLFxuICAgICAgICAvLyByaWdodDogJzUwcHgnLFxuICAgICAgICAvLyB6SW5kZXg6IDEwLFxuXG4gICAgICAgIC8vIG1hcmdpbkxlZnQ6ICc1cHgnXG5cbiAgICB9O1xuXG59XG5cbmV4cG9ydCBjbGFzcyBTaGFyZUNvbnRlbnRCdXR0b24gZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnRvZ2dsZSA9IHRoaXMudG9nZ2xlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25Eb25lID0gdGhpcy5vbkRvbmUuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgb3BlbjogZmFsc2UsXG4gICAgICAgICAgICB2aXNpYmlsaXR5OiB0aGlzLnByb3BzLnZpc2liaWxpdHkgfHwgVmlzaWJpbGl0eS5QUklWQVRFXG4gICAgICAgIH07XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuXG4gICAgICAgIGNvbnN0IGJ1dHRvbkljb25DbGFzcyA9IHRoaXMuc3RhdGUudmlzaWJpbGl0eSA9PT0gVmlzaWJpbGl0eS5QUklWQVRFID8gXCJmYXMgZmEtbG9ja1wiIDogXCJmYXMgZmEtbG9jay1vcGVuXCI7XG5cbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgPGRpdiBzdHlsZT17U3R5bGVzLnNoYXJlQ29udHJvbEJ1dHRvblBhcmVudH1cbiAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXItMSBtbC0xXCI+XG5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInNoYXJlLWNvbnRyb2wtYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZGRlbj17dGhpcy5wcm9wcy5oaWRkZW59XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnRvZ2dsZSh0cnVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Zm9udFNpemU6ICcxNXB4J319XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwbC0yIHByLTIgcC0xXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAnYXV0bycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJ2F1dG8nfX0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtYXV0byBtYi1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtidXR0b25JY29uQ2xhc3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5SaWdodDogJzVweCd9fT48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC1hdXRvIG1iLWF1dG9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaGFyZVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtYXV0byBtYi1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiIHN0eWxlPXtTdHlsZXMuZHJvcGRvd25DaGV2cm9ufT48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgPFBvcG92ZXIgdHJpZ2dlcj1cImxlZ2FjeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50PVwiYm90dG9tXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBmYWRlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICBkZWxheT17MH1cbiAgICAgICAgICAgICAgICAgICAgICAgICBpc09wZW49e3RoaXMuc3RhdGUub3Blbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGU9eygpID0+IHRoaXMudG9nZ2xlKGZhbHNlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJzaGFyZS1jb250cm9sLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21heFdpZHRoOiAnNjAwcHgnfX0+XG5cbiAgICAgICAgICAgICAgICAgICAgPFBvcG92ZXJCb2R5IGNsYXNzTmFtZT1cInNoYWRvd1wiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2hhcmVDb250ZW50Q29udHJvbCBkYXRhc3RvcmVDYXBhYmlsaXRpZXM9e3RoaXMucHJvcHMuZGF0YXN0b3JlQ2FwYWJpbGl0aWVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlU2hhcmVMaW5rPXt0aGlzLnByb3BzLmNyZWF0ZVNoYXJlTGlua31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk9e3RoaXMuc3RhdGUudmlzaWJpbGl0eX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVmlzaWJpbGl0eUNoYW5nZWQ9e2FzeW5jIHZpc2liaWxpdHkgPT4gdGhpcy5vblZpc2liaWxpdHlDaGFuZ2VkKHZpc2liaWxpdHkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Eb25lPXsoKSA9PiB0aGlzLm9uRG9uZSgpfS8+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9Qb3BvdmVyQm9keT5cblxuICAgICAgICAgICAgICAgIDwvUG9wb3Zlcj5cblxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgdG9nZ2xlKG9wZW46IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Li4udGhpcy5zdGF0ZSwgb3Blbn0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgb25WaXNpYmlsaXR5Q2hhbmdlZCh2aXNpYmlsaXR5OiBWaXNpYmlsaXR5KSB7XG5cbiAgICAgICAgYXdhaXQgdGhpcy5wcm9wcy5vblZpc2liaWxpdHlDaGFuZ2VkKHZpc2liaWxpdHkpO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoey4uLnRoaXMuc3RhdGUsIHZpc2liaWxpdHl9KTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgb25Eb25lKCkge1xuICAgICAgICB0aGlzLnRvZ2dsZShmYWxzZSk7XG4gICAgICAgIHRoaXMucHJvcHMub25Eb25lKCk7XG4gICAgfVxuXG59XG5cbmludGVyZmFjZSBJUHJvcHMge1xuXG4gICAgcmVhZG9ubHkgZGF0YXN0b3JlQ2FwYWJpbGl0aWVzOiBEYXRhc3RvcmVDYXBhYmlsaXRpZXM7XG5cbiAgICByZWFkb25seSBjcmVhdGVTaGFyZUxpbms6ICgpID0+IFByb21pc2U8c3RyaW5nIHwgdW5kZWZpbmVkPjtcblxuICAgIHJlYWRvbmx5IHZpc2liaWxpdHk/OiBWaXNpYmlsaXR5O1xuXG4gICAgcmVhZG9ubHkgb25WaXNpYmlsaXR5Q2hhbmdlZDogKHZpc2liaWxpdHk6IFZpc2liaWxpdHkpID0+IFByb21pc2U8dm9pZD47XG5cbiAgICByZWFkb25seSBvbkRvbmU6ICgpID0+IHZvaWQ7XG5cbiAgICByZWFkb25seSBkaXNhYmxlZD86IGJvb2xlYW47XG5cbiAgICByZWFkb25seSBoaWRkZW4/OiBib29sZWFuO1xuXG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xuICAgIHJlYWRvbmx5IG9wZW46IGJvb2xlYW47XG4gICAgcmVhZG9ubHkgdmlzaWJpbGl0eTogVmlzaWJpbGl0eTtcbn1cbiJdfQ==