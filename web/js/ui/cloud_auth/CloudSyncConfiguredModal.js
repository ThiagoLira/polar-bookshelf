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
const CloudSyncConfiguredContent_1 = require("./CloudSyncConfiguredContent");
class CloudSyncConfiguredModal extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (React.createElement(reactstrap_1.Modal, { isOpen: this.props.isOpen, size: "lg" },
            React.createElement(reactstrap_1.ModalBody, null,
                React.createElement(CloudSyncConfiguredContent_1.CloudSyncConfiguredContent, null)),
            React.createElement(reactstrap_1.ModalFooter, null,
                React.createElement(reactstrap_1.Button, { color: "secondary", onClick: () => this.props.onCancel() }, "OK"))));
    }
}
exports.CloudSyncConfiguredModal = CloudSyncConfiguredModal;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2xvdWRTeW5jQ29uZmlndXJlZE1vZGFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQ2xvdWRTeW5jQ29uZmlndXJlZE1vZGFsLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSw2Q0FBK0I7QUFDL0IsMkNBQWlFO0FBQ2pFLDZFQUF3RTtBQUV4RSxNQUFhLHdCQUF5QixTQUFRLEtBQUssQ0FBQyxTQUF5QjtJQUV6RSxZQUFZLEtBQWEsRUFBRSxPQUFZO1FBQ25DLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFFMUIsQ0FBQztJQUVNLE1BQU07UUFFVCxPQUFPLENBRUgsb0JBQUMsa0JBQUssSUFBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFDLElBQUk7WUFFdkMsb0JBQUMsc0JBQVM7Z0JBRU4sb0JBQUMsdURBQTBCLE9BQUUsQ0FFckI7WUFDWixvQkFBQyx3QkFBVztnQkFFUixvQkFBQyxtQkFBTSxJQUFDLEtBQUssRUFBQyxXQUFXLEVBQ2pCLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxTQUVuQyxDQUVDLENBQ1YsQ0FFWCxDQUFDO0lBQ04sQ0FBQztDQUVKO0FBL0JELDREQStCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7QnV0dG9uLCBNb2RhbCwgTW9kYWxCb2R5LCBNb2RhbEZvb3Rlcn0gZnJvbSAncmVhY3RzdHJhcCc7XG5pbXBvcnQge0Nsb3VkU3luY0NvbmZpZ3VyZWRDb250ZW50fSBmcm9tICcuL0Nsb3VkU3luY0NvbmZpZ3VyZWRDb250ZW50JztcblxuZXhwb3J0IGNsYXNzIENsb3VkU3luY0NvbmZpZ3VyZWRNb2RhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcywgY29udGV4dDogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcblxuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgPE1vZGFsIGlzT3Blbj17dGhpcy5wcm9wcy5pc09wZW59IHNpemU9XCJsZ1wiPlxuICAgICAgICAgICAgICAgIHsvKjxNb2RhbEhlYWRlcj5Qb2xhciBDbG91ZCBTeW5jPC9Nb2RhbEhlYWRlcj4qL31cbiAgICAgICAgICAgICAgICA8TW9kYWxCb2R5PlxuXG4gICAgICAgICAgICAgICAgICAgIDxDbG91ZFN5bmNDb25maWd1cmVkQ29udGVudC8+XG5cbiAgICAgICAgICAgICAgICA8L01vZGFsQm9keT5cbiAgICAgICAgICAgICAgICA8TW9kYWxGb290ZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5vbkNhbmNlbCgpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIE9LXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgPC9Nb2RhbEZvb3Rlcj5cbiAgICAgICAgICAgIDwvTW9kYWw+XG5cbiAgICAgICAgKTtcbiAgICB9XG5cbn1cblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgcmVhZG9ubHkgaXNPcGVuOiBib29sZWFuO1xuICAgIHJlYWRvbmx5IG9uQ2FuY2VsOiAoKSA9PiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcblxufVxuIl19