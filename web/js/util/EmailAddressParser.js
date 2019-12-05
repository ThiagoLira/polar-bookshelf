"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EmailAddressParser {
    static parse(text) {
        const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
        let m = null;
        const result = [];
        do {
            m = re.exec(text);
            if (m) {
                result.push(m[0]);
            }
        } while (m);
        return result;
    }
}
exports.EmailAddressParser = EmailAddressParser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW1haWxBZGRyZXNzUGFyc2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRW1haWxBZGRyZXNzUGFyc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsTUFBYSxrQkFBa0I7SUFJcEIsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFZO1FBRTVCLE1BQU0sRUFBRSxHQUFHLHdJQUF3SSxDQUFDO1FBRXBKLElBQUksQ0FBQyxHQUEyQixJQUFJLENBQUM7UUFFckMsTUFBTSxNQUFNLEdBQWEsRUFBRSxDQUFDO1FBRTVCLEdBQUc7WUFFQyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUVsQixJQUFJLENBQUMsRUFBRTtnQkFDSCxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3JCO1NBRUosUUFBUSxDQUFDLEVBQUU7UUFFWixPQUFPLE1BQU0sQ0FBQztJQUVsQixDQUFDO0NBRUo7QUExQkQsZ0RBMEJDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEVtYWlsQWRkcmVzc1BhcnNlciB7XG5cbiAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xNDQ0MDQ0NC9leHRyYWN0LWFsbC1lbWFpbC1hZGRyZXNzZXMtZnJvbS1idWxrLXRleHQtdXNpbmctanF1ZXJ5XG5cbiAgICBwdWJsaWMgc3RhdGljIHBhcnNlKHRleHQ6IHN0cmluZyk6IFJlYWRvbmx5QXJyYXk8RW1haWxBZGRyZXNzPiB7XG5cbiAgICAgICAgY29uc3QgcmUgPSAvW2EtejAtOSEjJCUmJyorLz0/Xl9ge3x9fi1dKyg/OlxcLlthLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSspKkAoPzpbYS16MC05XSg/OlthLXowLTktXSpbYS16MC05XSk/XFwuKStbYS16MC05XSg/OlthLXowLTktXSpbYS16MC05XSk/L2c7XG5cbiAgICAgICAgbGV0IG06IFJlZ0V4cEV4ZWNBcnJheSB8IG51bGwgPSBudWxsO1xuXG4gICAgICAgIGNvbnN0IHJlc3VsdDogc3RyaW5nW10gPSBbXTtcblxuICAgICAgICBkbyB7XG5cbiAgICAgICAgICAgIG0gPSByZS5leGVjKHRleHQpO1xuXG4gICAgICAgICAgICBpZiAobSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKG1bMF0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gd2hpbGUgKG0pO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IHR5cGUgRW1haWxBZGRyZXNzID0gc3RyaW5nO1xuIl19