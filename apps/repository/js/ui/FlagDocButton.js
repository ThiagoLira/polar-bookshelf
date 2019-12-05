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
const DocButton_1 = require("./DocButton");
const ToggleIcon_1 = require("./ToggleIcon");
class FlagDocButton extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }
    render() {
        return (React.createElement(DocButton_1.DocButton, { onClick: () => this.props.onClick() },
            React.createElement(ToggleIcon_1.ToggleIcon, { className: "fa fa-flag", title: "Flag document", active: this.props.active })));
    }
}
exports.FlagDocButton = FlagDocButton;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmxhZ0RvY0J1dHRvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkZsYWdEb2NCdXR0b24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUMvQiwyQ0FBc0M7QUFDdEMsNkNBQXdDO0FBRXhDLE1BQWEsYUFBYyxTQUFRLEtBQUssQ0FBQyxhQUE2QjtJQUVsRSxZQUFZLEtBQWEsRUFBRSxPQUFZO1FBQ25DLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUNaLENBQUM7SUFFTixDQUFDO0lBRU0sTUFBTTtRQUVULE9BQU8sQ0FBQyxvQkFBQyxxQkFBUyxJQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRTtZQUVsRCxvQkFBQyx1QkFBVSxJQUFDLFNBQVMsRUFBQyxZQUFZLEVBQ3RCLEtBQUssRUFBQyxlQUFlLEVBQ3JCLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUVoQyxDQUFDLENBQUM7SUFFbEIsQ0FBQztDQUVKO0FBdEJELHNDQXNCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7RG9jQnV0dG9ufSBmcm9tICcuL0RvY0J1dHRvbic7XG5pbXBvcnQge1RvZ2dsZUljb259IGZyb20gJy4vVG9nZ2xlSWNvbic7XG5cbmV4cG9ydCBjbGFzcyBGbGFnRG9jQnV0dG9uIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcywgY29udGV4dDogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICB9O1xuXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKDxEb2NCdXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5vbkNsaWNrKCl9PlxuXG4gICAgICAgICAgICA8VG9nZ2xlSWNvbiBjbGFzc05hbWU9XCJmYSBmYS1mbGFnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRmxhZyBkb2N1bWVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e3RoaXMucHJvcHMuYWN0aXZlfS8+XG5cbiAgICAgICAgPC9Eb2NCdXR0b24+KTtcblxuICAgIH1cblxufVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgICByZWFkb25seSBvbkNsaWNrOiAoKSA9PiB2b2lkO1xuICAgIHJlYWRvbmx5IGFjdGl2ZTogYm9vbGVhbjtcbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG59XG4iXX0=