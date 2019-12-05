"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LoginURLs {
    static create(signInSuccessUrl) {
        if (signInSuccessUrl) {
            return '/login.html?signInSuccessUrl=' + encodeURIComponent(signInSuccessUrl);
        }
        else {
            return '/login.html';
        }
    }
}
exports.LoginURLs = LoginURLs;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9naW5VUkxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiTG9naW5VUkxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsTUFBYSxTQUFTO0lBT1gsTUFBTSxDQUFDLE1BQU0sQ0FBQyxnQkFBeUI7UUFFMUMsSUFBSSxnQkFBZ0IsRUFBRTtZQUNsQixPQUFPLCtCQUErQixHQUFHLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLENBQUM7U0FDakY7YUFBTTtZQUNILE9BQU8sYUFBYSxDQUFDO1NBQ3hCO0lBRUwsQ0FBQztDQUVKO0FBakJELDhCQWlCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8gVE9ETzogdW5pZnkgYWxsIFNpZ25JblN1Y2Nlc3NVUkxzIC8gTG9naW5VUkxzIGFuZCBhbnkgdXNlIG9mIHNpZ25JblN1Y2Nlc3NVcmxcbmV4cG9ydCBjbGFzcyBMb2dpblVSTHMge1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGxvZ2luIFVSTC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzaWduSW5TdWNjZXNzVXJsIHJlZGlyIHRvIGEgY3VzdG9tIHNpZ24gaW4gVVJMLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlKHNpZ25JblN1Y2Nlc3NVcmw/OiBzdHJpbmcpIHtcblxuICAgICAgICBpZiAoc2lnbkluU3VjY2Vzc1VybCkge1xuICAgICAgICAgICAgcmV0dXJuICcvbG9naW4uaHRtbD9zaWduSW5TdWNjZXNzVXJsPScgKyBlbmNvZGVVUklDb21wb25lbnQoc2lnbkluU3VjY2Vzc1VybCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gJy9sb2dpbi5odG1sJztcbiAgICAgICAgfVxuXG4gICAgfVxuXG59XG4iXX0=