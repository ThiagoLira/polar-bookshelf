"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const reactstrap_1 = require("reactstrap");
const LargeModal_1 = require("../large_modal/LargeModal");
const LargeModalBody_1 = require("../large_modal/LargeModalBody");
const Firebase_1 = require("../../firebase/Firebase");
const FirebaseUIAuth_1 = require("../../firebase/FirebaseUIAuth");
const Nav_1 = require("../util/Nav");
class CloudLoginModal extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        this.doAuthContainer();
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        this.doAuthContainer();
    }
    doAuthContainer() {
        if (this.props.isOpen) {
            Firebase_1.Firebase.init();
            const signInSuccessUrl = Nav_1.Nav.createHashURL('configured');
            FirebaseUIAuth_1.FirebaseUIAuth.login({ signInSuccessUrl });
        }
    }
    render() {
        return (react_1.default.createElement(LargeModal_1.LargeModal, { isOpen: this.props.isOpen },
            react_1.default.createElement(reactstrap_1.ModalHeader, null, "Login to Polar"),
            react_1.default.createElement(LargeModalBody_1.LargeModalBody, null,
                react_1.default.createElement("div", { id: "firebaseui-auth-container" })),
            react_1.default.createElement(reactstrap_1.ModalFooter, null,
                react_1.default.createElement(reactstrap_1.Button, { color: "secondary", onClick: () => this.props.onCancel() }, "Cancel"))));
    }
}
exports.CloudLoginModal = CloudLoginModal;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2xvdWRMb2dpbk1vZGFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQ2xvdWRMb2dpbk1vZGFsLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLGtEQUEwQjtBQUMxQiwyQ0FBb0c7QUFFcEcsMERBQXFEO0FBRXJELGtFQUE2RDtBQUM3RCxzREFBaUQ7QUFDakQsa0VBQTZEO0FBQzdELHFDQUFnQztBQUVoQyxNQUFhLGVBQWdCLFNBQVEsZUFBSyxDQUFDLFNBQXlCO0lBRWhFLFlBQVksS0FBYTtRQUNyQixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFYixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQ1osQ0FBQztJQUVOLENBQUM7SUFFTSxpQkFBaUI7UUFDcEIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFTSxrQkFBa0IsQ0FBQyxTQUEyQixFQUFFLFNBQTJCLEVBQUUsUUFBYztRQUM5RixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVPLGVBQWU7UUFFbkIsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUNuQixtQkFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1lBRWhCLE1BQU0sZ0JBQWdCLEdBQUcsU0FBRyxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUN6RCwrQkFBYyxDQUFDLEtBQUssQ0FBQyxFQUFDLGdCQUFnQixFQUFDLENBQUMsQ0FBQztTQUU1QztJQUVMLENBQUM7SUFFTSxNQUFNO1FBQ1QsT0FBTyxDQUVILDhCQUFDLHVCQUFVLElBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTTtZQUVqQyw4QkFBQyx3QkFBVyx5QkFBNkI7WUFDekMsOEJBQUMsK0JBQWM7Z0JBRVgsdUNBQUssRUFBRSxFQUFDLDJCQUEyQixHQUFPLENBRTdCO1lBQ2pCLDhCQUFDLHdCQUFXO2dCQUNSLDhCQUFDLG1CQUFNLElBQUMsS0FBSyxFQUFDLFdBQVcsRUFDakIsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLGFBRW5DLENBRUMsQ0FHTCxDQUVoQixDQUFDO0lBQ04sQ0FBQztDQUVKO0FBdkRELDBDQXVEQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludCByZWFjdC9uby1tdWx0aS1jb21wOiAwLCByZWFjdC9wcm9wLXR5cGVzOiAwICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtCdXR0b24sIE1vZGFsLCBNb2RhbEJvZHksIE1vZGFsRm9vdGVyLCBNb2RhbEhlYWRlciwgUG9wb3ZlciwgUG9wb3ZlckJvZHl9IGZyb20gJ3JlYWN0c3RyYXAnO1xuaW1wb3J0IFBvcHBlciBmcm9tICdwb3BwZXIuanMnO1xuaW1wb3J0IHtMYXJnZU1vZGFsfSBmcm9tICcuLi9sYXJnZV9tb2RhbC9MYXJnZU1vZGFsJztcbmltcG9ydCB7V2hhdHNOZXdDb250ZW50fSBmcm9tICcuLi8uLi8uLi8uLi9hcHBzL3JlcG9zaXRvcnkvanMvc3BsYXNoMi93aGF0c19uZXcvV2hhdHNOZXdDb250ZW50JztcbmltcG9ydCB7TGFyZ2VNb2RhbEJvZHl9IGZyb20gJy4uL2xhcmdlX21vZGFsL0xhcmdlTW9kYWxCb2R5JztcbmltcG9ydCB7RmlyZWJhc2V9IGZyb20gJy4uLy4uL2ZpcmViYXNlL0ZpcmViYXNlJztcbmltcG9ydCB7RmlyZWJhc2VVSUF1dGh9IGZyb20gJy4uLy4uL2ZpcmViYXNlL0ZpcmViYXNlVUlBdXRoJztcbmltcG9ydCB7TmF2fSBmcm9tICcuLi91dGlsL05hdic7XG5cbmV4cG9ydCBjbGFzcyBDbG91ZExvZ2luTW9kYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJUHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIH07XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgY29tcG9uZW50RGlkTW91bnQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZG9BdXRoQ29udGFpbmVyKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHM6IFJlYWRvbmx5PElQcm9wcz4sIHByZXZTdGF0ZTogUmVhZG9ubHk8SVN0YXRlPiwgc25hcHNob3Q/OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kb0F1dGhDb250YWluZXIoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGRvQXV0aENvbnRhaW5lcigpIHtcblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5pc09wZW4pIHtcbiAgICAgICAgICAgIEZpcmViYXNlLmluaXQoKTtcblxuICAgICAgICAgICAgY29uc3Qgc2lnbkluU3VjY2Vzc1VybCA9IE5hdi5jcmVhdGVIYXNoVVJMKCdjb25maWd1cmVkJyk7XG4gICAgICAgICAgICBGaXJlYmFzZVVJQXV0aC5sb2dpbih7c2lnbkluU3VjY2Vzc1VybH0pO1xuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgIDxMYXJnZU1vZGFsIGlzT3Blbj17dGhpcy5wcm9wcy5pc09wZW59PlxuXG4gICAgICAgICAgICAgICAgPE1vZGFsSGVhZGVyPkxvZ2luIHRvIFBvbGFyPC9Nb2RhbEhlYWRlcj5cbiAgICAgICAgICAgICAgICA8TGFyZ2VNb2RhbEJvZHk+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImZpcmViYXNldWktYXV0aC1jb250YWluZXJcIj48L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvTGFyZ2VNb2RhbEJvZHk+XG4gICAgICAgICAgICAgICAgPE1vZGFsRm9vdGVyPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLm9uQ2FuY2VsKCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgPC9Nb2RhbEZvb3Rlcj5cblxuXG4gICAgICAgICAgICA8L0xhcmdlTW9kYWw+XG5cbiAgICAgICAgKTtcbiAgICB9XG5cbn1cblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgcmVhZG9ubHkgaXNPcGVuOiBib29sZWFuO1xuICAgIHJlYWRvbmx5IG9uQ2FuY2VsOiAoKSA9PiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbn1cbiJdfQ==