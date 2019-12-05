"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Tokens {
    static hyphenToCamelCase(key) {
        key = key.replace(/-([a-zA-Z])/g, (match) => {
            return match.replace("-", "").toUpperCase();
        });
        return key;
    }
}
exports.Tokens = Tokens;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9rZW5zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVG9rZW5zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsTUFBYSxNQUFNO0lBRWYsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEdBQVc7UUFFaEMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDeEMsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNoRCxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sR0FBRyxDQUFDO0lBRWYsQ0FBQztDQUVKO0FBWkQsd0JBWUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgVG9rZW5zIHtcblxuICAgIHN0YXRpYyBoeXBoZW5Ub0NhbWVsQ2FzZShrZXk6IHN0cmluZykge1xuXG4gICAgICAgIGtleSA9IGtleS5yZXBsYWNlKC8tKFthLXpBLVpdKS9nLCAobWF0Y2gpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBtYXRjaC5yZXBsYWNlKFwiLVwiLCBcIlwiKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4ga2V5O1xuXG4gICAgfVxuXG59XG4iXX0=