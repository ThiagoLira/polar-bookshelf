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
class ViewOrEdit extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
        this.html = "";
        this.state = {
            mode: this.props.mode || 'view'
        };
    }
    render() {
        switch (this.state.mode) {
            case 'view':
                return this.props.view;
            case 'edit':
                return this.props.edit;
        }
    }
}
exports.ViewOrEdit = ViewOrEdit;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmlld09yRWRpdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlZpZXdPckVkaXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQU0vQixNQUFhLFVBQVcsU0FBUSxLQUFLLENBQUMsYUFBNkI7SUFJL0QsWUFBWSxLQUFhLEVBQUUsT0FBWTtRQUNuQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBSGxCLFNBQUksR0FBVyxFQUFFLENBQUM7UUFLdEIsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNULElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxNQUFNO1NBQ2xDLENBQUM7SUFFTixDQUFDO0lBRU0sTUFBTTtRQUVULFFBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUU7WUFFckIsS0FBSyxNQUFNO2dCQUNQLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFFM0IsS0FBSyxNQUFNO2dCQUNQLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7U0FFOUI7SUFFTCxDQUFDO0NBRUo7QUEzQkQsZ0NBMkJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG4vKipcbiAqIFNpbXBsZSBIb0MgdGhhdCBhbGxvd3MgdGhlIHVzZXIgdG8gdG9nZ2xlIGJldHdlZW4gZWRpdCBhbmQgdmlldyBtb2RlIGZvciBhXG4gKiBjb21wb25lbnQuXG4gKi9cbmV4cG9ydCBjbGFzcyBWaWV3T3JFZGl0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgcHJpdmF0ZSBodG1sOiBzdHJpbmcgPSBcIlwiO1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcywgY29udGV4dDogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbW9kZTogdGhpcy5wcm9wcy5tb2RlIHx8ICd2aWV3J1xuICAgICAgICB9O1xuXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICBzd2l0Y2ggKHRoaXMuc3RhdGUubW9kZSkge1xuXG4gICAgICAgICAgICBjYXNlICd2aWV3JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy52aWV3O1xuXG4gICAgICAgICAgICBjYXNlICdlZGl0JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5lZGl0O1xuXG4gICAgICAgIH1cblxuICAgIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgcmVhZG9ubHkgbW9kZT86IE1vZGU7XG4gICAgcmVhZG9ubHkgdmlldzogSlNYLkVsZW1lbnQ7XG4gICAgcmVhZG9ubHkgZWRpdDogSlNYLkVsZW1lbnQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVN0YXRlIHtcbiAgICByZWFkb25seSBtb2RlOiBNb2RlO1xufVxuXG5leHBvcnQgdHlwZSBNb2RlID0gJ3ZpZXcnIHwgJ2VkaXQnO1xuIl19