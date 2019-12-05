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
const RendererAnalytics_1 = require("../../../../web/js/ga/RendererAnalytics");
const Button_1 = __importDefault(require("reactstrap/lib/Button"));
const EditIcon_1 = require("../../../../web/js/ui/standard_icons/EditIcon");
class EditButton extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (React.createElement(Button_1.default, { id: this.props.id, className: "text-muted p-1", size: "sm", color: "light", disabled: this.props.disabled, title: 'Edit ' + this.props.type, onClick: () => this.onClick() },
            React.createElement(EditIcon_1.EditIcon, null)));
    }
    onClick() {
        RendererAnalytics_1.RendererAnalytics.event({ category: 'annotation-edit', action: this.props.type });
        this.props.onClick();
    }
}
exports.EditButton = EditButton;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRWRpdEJ1dHRvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkVkaXRCdXR0b24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUMvQiwrRUFBMEU7QUFDMUUsbUVBQTJDO0FBQzNDLDRFQUF1RTtBQUl2RSxNQUFhLFVBQVcsU0FBUSxLQUFLLENBQUMsYUFBNkI7SUFFL0QsWUFBWSxLQUFhLEVBQUUsT0FBWTtRQUNuQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFTSxNQUFNO1FBRVQsT0FBTyxDQUVILG9CQUFDLGdCQUFNLElBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUNqQixTQUFTLEVBQUMsZ0JBQWdCLEVBQzFCLElBQUksRUFBQyxJQUFJLEVBQ1QsS0FBSyxFQUFDLE9BQU8sRUFDYixRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQzdCLEtBQUssRUFBRSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQ2hDLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBRWpDLG9CQUFDLG1CQUFRLE9BQUUsQ0FFTixDQUNaLENBQUM7SUFFTixDQUFDO0lBRU8sT0FBTztRQUVYLHFDQUFpQixDQUFDLEtBQUssQ0FBQyxFQUFDLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBQ2hGLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7SUFFekIsQ0FBQztDQUVKO0FBaENELGdDQWdDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7UmVuZGVyZXJBbmFseXRpY3N9IGZyb20gJy4uLy4uLy4uLy4uL3dlYi9qcy9nYS9SZW5kZXJlckFuYWx5dGljcyc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0c3RyYXAvbGliL0J1dHRvbic7XG5pbXBvcnQge0VkaXRJY29ufSBmcm9tICcuLi8uLi8uLi8uLi93ZWIvanMvdWkvc3RhbmRhcmRfaWNvbnMvRWRpdEljb24nO1xuXG4vKipcbiAqL1xuZXhwb3J0IGNsYXNzIEVkaXRCdXR0b24gZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzLCBjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgPEJ1dHRvbiBpZD17dGhpcy5wcm9wcy5pZH1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZCBwLTFcIlxuICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RoaXMucHJvcHMuZGlzYWJsZWR9XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXsnRWRpdCAnICsgdGhpcy5wcm9wcy50eXBlfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLm9uQ2xpY2soKX0+XG5cbiAgICAgICAgICAgICAgICA8RWRpdEljb24vPlxuXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgb25DbGljaygpIHtcblxuICAgICAgICBSZW5kZXJlckFuYWx5dGljcy5ldmVudCh7Y2F0ZWdvcnk6ICdhbm5vdGF0aW9uLWVkaXQnLCBhY3Rpb246IHRoaXMucHJvcHMudHlwZX0pO1xuICAgICAgICB0aGlzLnByb3BzLm9uQ2xpY2soKTtcblxuICAgIH1cblxufVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgICAvKipcbiAgICAgKiBDYWxsZWQgd2hlbiB0aGUgYnV0dG9uIGlzIGNsaWNrZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaWQ6IHN0cmluZztcbiAgICByZWFkb25seSBvbkNsaWNrOiAoKSA9PiB2b2lkO1xuICAgIHJlYWRvbmx5IHR5cGU6ICdjb21tZW50JyB8ICdmbGFzaGNhcmQnO1xuICAgIHJlYWRvbmx5IGRpc2FibGVkPzogYm9vbGVhbjtcbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG5cbn1cbiJdfQ==