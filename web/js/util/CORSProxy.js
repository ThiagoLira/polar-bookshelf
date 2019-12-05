"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CORSProxy {
    static createProxyURL(targetURL) {
        return "https://us-central1-polar-cors.cloudfunctions.net/cors?url=" + encodeURIComponent(targetURL);
    }
}
exports.CORSProxy = CORSProxy;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ09SU1Byb3h5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQ09SU1Byb3h5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsTUFBYSxTQUFTO0lBUVgsTUFBTSxDQUFDLGNBQWMsQ0FBQyxTQUFpQjtRQUsxQyxPQUFPLDZEQUE2RCxHQUFHLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBRXpHLENBQUM7Q0FFSjtBQWpCRCw4QkFpQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2VuY29kZX0gZnJvbSAncHVueWNvZGUnO1xuXG5leHBvcnQgY2xhc3MgQ09SU1Byb3h5IHtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIHByb3h5IFVSTCB3aGljaCBhZGRzIENPUlMgaGVhZGVycyB0byBhbGxvdyB1cyB0byBkb3dubG9hZCBpdFxuICAgICAqIGZyb20gd2l0aGluIHRoZSBQb2xhciB3ZWJhcHAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdGFyZ2V0VVJMXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGVQcm94eVVSTCh0YXJnZXRVUkw6IHN0cmluZykge1xuXG4gICAgICAgIC8vIFRPRE86IGlzIGl0IHBvc3NpYmxlIHRvIG1ha2UgdGhpcyB1c2UgdGhlIENETiBzbyB3ZSBoYXZlIG9uZSBpblxuICAgICAgICAvLyBldmVyeSBkYXRhY2VudGVyP1xuXG4gICAgICAgIHJldHVybiBcImh0dHBzOi8vdXMtY2VudHJhbDEtcG9sYXItY29ycy5jbG91ZGZ1bmN0aW9ucy5uZXQvY29ycz91cmw9XCIgKyBlbmNvZGVVUklDb21wb25lbnQodGFyZ2V0VVJMKTtcblxuICAgIH1cblxufVxuIl19