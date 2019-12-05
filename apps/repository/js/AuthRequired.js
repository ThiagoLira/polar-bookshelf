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
const AuthHandler_1 = require("../../../web/js/apps/repository/auth_handler/AuthHandler");
class AuthRequired extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        if (this.props.authStatus === 'needs-authentication') {
            const authHandler = AuthHandler_1.AuthHandlers.get();
            authHandler.authenticate();
            return React.createElement("div", null);
        }
        return this.props.children;
    }
}
exports.AuthRequired = AuthRequired;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXV0aFJlcXVpcmVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQXV0aFJlcXVpcmVkLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSw2Q0FBK0I7QUFFL0IsMEZBR2tFO0FBRWxFLE1BQWEsWUFBYSxTQUFRLEtBQUssQ0FBQyxTQUF5QjtJQUU3RCxZQUFZLEtBQWEsRUFBRSxPQUFZO1FBQ25DLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFFMUIsQ0FBQztJQUVNLE1BQU07UUFFVCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxLQUFLLHNCQUFzQixFQUFFO1lBQ2xELE1BQU0sV0FBVyxHQUFHLDBCQUFZLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDdkMsV0FBVyxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQzNCLE9BQU8sZ0NBQU0sQ0FBQztTQUNqQjtRQUVELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7SUFFL0IsQ0FBQztDQUVKO0FBbkJELG9DQW1CQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL2xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IHtcbiAgICBBdXRoSGFuZGxlcnMsXG4gICAgQXV0aFN0YXR1c1xufSBmcm9tIFwiLi4vLi4vLi4vd2ViL2pzL2FwcHMvcmVwb3NpdG9yeS9hdXRoX2hhbmRsZXIvQXV0aEhhbmRsZXJcIjtcblxuZXhwb3J0IGNsYXNzIEF1dGhSZXF1aXJlZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcywgY29udGV4dDogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcblxuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuYXV0aFN0YXR1cyA9PT0gJ25lZWRzLWF1dGhlbnRpY2F0aW9uJykge1xuICAgICAgICAgICAgY29uc3QgYXV0aEhhbmRsZXIgPSBBdXRoSGFuZGxlcnMuZ2V0KCk7XG4gICAgICAgICAgICBhdXRoSGFuZGxlci5hdXRoZW50aWNhdGUoKTtcbiAgICAgICAgICAgIHJldHVybiA8ZGl2Lz47XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbjtcblxuICAgIH1cblxufVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgICByZWFkb25seSBhdXRoU3RhdHVzOiBBdXRoU3RhdHVzO1xuXG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xuXG59XG5cbiJdfQ==