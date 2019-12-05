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
const CloudSyncOverviewContent_1 = require("./CloudSyncOverviewContent");
class CloudSyncOverviewModal extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (React.createElement(reactstrap_1.Modal, { isOpen: this.props.isOpen, size: "lg" },
            React.createElement(reactstrap_1.ModalBody, null,
                React.createElement(CloudSyncOverviewContent_1.CloudSyncOverviewContent, null)),
            React.createElement(reactstrap_1.ModalFooter, null,
                React.createElement(reactstrap_1.Button, { color: "secondary", onClick: () => this.props.onCancel() }, "Cancel"),
                React.createElement(reactstrap_1.Button, { color: "primary", onClick: () => this.props.onSignup() }, "Login"),
                ' ')));
    }
}
exports.CloudSyncOverviewModal = CloudSyncOverviewModal;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2xvdWRTeW5jT3ZlcnZpZXdNb2RhbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNsb3VkU3luY092ZXJ2aWV3TW9kYWwudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUMvQiwyQ0FBaUU7QUFDakUseUVBQW9FO0FBRXBFLE1BQWEsc0JBQXVCLFNBQVEsS0FBSyxDQUFDLFNBQXlCO0lBRXZFLFlBQVksS0FBYSxFQUFFLE9BQVk7UUFDbkMsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztJQUUxQixDQUFDO0lBRU0sTUFBTTtRQUVULE9BQU8sQ0FFSCxvQkFBQyxrQkFBSyxJQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUMsSUFBSTtZQUV2QyxvQkFBQyxzQkFBUztnQkFFTixvQkFBQyxtREFBd0IsT0FBRSxDQUVuQjtZQUNaLG9CQUFDLHdCQUFXO2dCQUVSLG9CQUFDLG1CQUFNLElBQUMsS0FBSyxFQUFDLFdBQVcsRUFDakIsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLGFBRW5DO2dCQUVULG9CQUFDLG1CQUFNLElBQUMsS0FBSyxFQUFDLFNBQVMsRUFDZixPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsWUFFbkM7Z0JBQUMsR0FBRyxDQUVILENBQ1YsQ0FFWCxDQUFDO0lBQ04sQ0FBQztDQUVKO0FBcENELHdEQW9DQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7QnV0dG9uLCBNb2RhbCwgTW9kYWxCb2R5LCBNb2RhbEZvb3Rlcn0gZnJvbSAncmVhY3RzdHJhcCc7XG5pbXBvcnQge0Nsb3VkU3luY092ZXJ2aWV3Q29udGVudH0gZnJvbSAnLi9DbG91ZFN5bmNPdmVydmlld0NvbnRlbnQnO1xuXG5leHBvcnQgY2xhc3MgQ2xvdWRTeW5jT3ZlcnZpZXdNb2RhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcywgY29udGV4dDogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcblxuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgPE1vZGFsIGlzT3Blbj17dGhpcy5wcm9wcy5pc09wZW59IHNpemU9XCJsZ1wiPlxuICAgICAgICAgICAgICAgIHsvKjxNb2RhbEhlYWRlcj5Qb2xhciBDbG91ZCBTeW5jPC9Nb2RhbEhlYWRlcj4qL31cbiAgICAgICAgICAgICAgICA8TW9kYWxCb2R5PlxuXG4gICAgICAgICAgICAgICAgICAgIDxDbG91ZFN5bmNPdmVydmlld0NvbnRlbnQvPlxuXG4gICAgICAgICAgICAgICAgPC9Nb2RhbEJvZHk+XG4gICAgICAgICAgICAgICAgPE1vZGFsRm9vdGVyPlxuXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMub25DYW5jZWwoKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMub25TaWdudXAoKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICBMb2dpblxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj57JyAnfVxuXG4gICAgICAgICAgICAgICAgPC9Nb2RhbEZvb3Rlcj5cbiAgICAgICAgICAgIDwvTW9kYWw+XG5cbiAgICAgICAgKTtcbiAgICB9XG5cbn1cblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgcmVhZG9ubHkgaXNPcGVuOiBib29sZWFuO1xuICAgIHJlYWRvbmx5IG9uQ2FuY2VsOiAoKSA9PiB2b2lkO1xuICAgIHJlYWRvbmx5IG9uU2lnbnVwOiAoKSA9PiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcblxufVxuIl19