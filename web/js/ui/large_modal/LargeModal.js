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
const Functions_1 = require("polar-shared/src/util/Functions");
class LargeModal extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const minWidth = this.props.minWidth || '90%';
        const maxWidth = this.props.maxWidth || '90%';
        return (React.createElement(reactstrap_1.Modal, { isOpen: this.props.isOpen, size: "lg", fade: false, centered: this.props.centered, toggle: this.props.toggle ? this.props.toggle : Functions_1.NULL_FUNCTION, style: {
                overflowY: 'initial',
                minWidth,
                maxWidth
            } }, this.props.children));
    }
}
exports.LargeModal = LargeModal;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGFyZ2VNb2RhbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkxhcmdlTW9kYWwudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUMvQiwyQ0FBaUM7QUFDakMsK0RBQThEO0FBTTlELE1BQWEsVUFBVyxTQUFRLEtBQUssQ0FBQyxTQUF5QjtJQUUzRCxZQUFZLEtBQWEsRUFBRSxPQUFZO1FBQ25DLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFFMUIsQ0FBQztJQUVNLE1BQU07UUFFVCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsSUFBSSxLQUFLLENBQUM7UUFDOUMsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLElBQUksS0FBSyxDQUFDO1FBRzlDLE9BQU8sQ0FFSCxvQkFBQyxrQkFBSyxJQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFDekIsSUFBSSxFQUFDLElBQUksRUFDVCxJQUFJLEVBQUUsS0FBSyxFQUNYLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFDN0IsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMseUJBQWEsRUFDN0QsS0FBSyxFQUFFO2dCQUNILFNBQVMsRUFBRSxTQUFTO2dCQUNwQixRQUFRO2dCQUNSLFFBQVE7YUFDWCxJQUVILElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUVoQixDQUVYLENBQUM7SUFDTixDQUFDO0NBRUo7QUFqQ0QsZ0NBaUNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtNb2RhbH0gZnJvbSAncmVhY3RzdHJhcCc7XG5pbXBvcnQge05VTExfRlVOQ1RJT059IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC9GdW5jdGlvbnMnO1xuXG4vKipcbiAqIE1vZGFsIHRoYXQgaXMgbGFyZ2UgYW5kIGZpdHMgbmVhcmx5IHRoZSBmdWxsIHNjcmVlbi4gTXVzdCB1c2UgdGhpcyB3aXRoIGFcbiAqIExhcmdlTW9kYWxCb2R5LlxuICovXG5leHBvcnQgY2xhc3MgTGFyZ2VNb2RhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcywgY29udGV4dDogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcblxuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgY29uc3QgbWluV2lkdGggPSB0aGlzLnByb3BzLm1pbldpZHRoIHx8ICc5MCUnO1xuICAgICAgICBjb25zdCBtYXhXaWR0aCA9IHRoaXMucHJvcHMubWF4V2lkdGggfHwgJzkwJSc7XG5cbiAgICAgICAgLy8gbm9pbnNwZWN0aW9uIFRzTGludFxuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICA8TW9kYWwgaXNPcGVuPXt0aGlzLnByb3BzLmlzT3Blbn1cbiAgICAgICAgICAgICAgICAgICBzaXplPVwibGdcIlxuICAgICAgICAgICAgICAgICAgIGZhZGU9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgIGNlbnRlcmVkPXt0aGlzLnByb3BzLmNlbnRlcmVkfVxuICAgICAgICAgICAgICAgICAgIHRvZ2dsZT17dGhpcy5wcm9wcy50b2dnbGUgPyB0aGlzLnByb3BzLnRvZ2dsZSA6IE5VTExfRlVOQ1RJT059XG4gICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3dZOiAnaW5pdGlhbCcsXG4gICAgICAgICAgICAgICAgICAgICAgIG1pbldpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aFxuICAgICAgICAgICAgICAgICAgIH19PlxuXG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG5cbiAgICAgICAgICAgIDwvTW9kYWw+XG5cbiAgICAgICAgKTtcbiAgICB9XG5cbn1cblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgcmVhZG9ubHkgY2VudGVyZWQ/OiBib29sZWFuO1xuICAgIHJlYWRvbmx5IGlzT3BlbjogYm9vbGVhbjtcbiAgICByZWFkb25seSB0b2dnbGU/OiAoKSA9PiB2b2lkO1xuICAgIHJlYWRvbmx5IG1pbldpZHRoPzogc3RyaW5nIHwgbnVtYmVyO1xuICAgIHJlYWRvbmx5IG1heFdpZHRoPzogc3RyaW5nIHwgbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcblxufVxuIl19