"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AreaHighlightRect_1 = require("./AreaHighlightRect");
class AreaHighlightRects {
    static createFromRect(rect) {
        return new AreaHighlightRect_1.AreaHighlightRect({
            left: rect.left,
            top: rect.top,
            width: rect.width,
            height: rect.height
        });
    }
}
exports.AreaHighlightRects = AreaHighlightRects;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXJlYUhpZ2hsaWdodFJlY3RzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQXJlYUhpZ2hsaWdodFJlY3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsMkRBQXNEO0FBR3RELE1BQWEsa0JBQWtCO0lBRXBCLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBa0I7UUFFM0MsT0FBTyxJQUFJLHFDQUFpQixDQUFDO1lBQ3pCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRztZQUNiLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07U0FDdEIsQ0FBQyxDQUFDO0lBRVAsQ0FBQztDQUVKO0FBYkQsZ0RBYUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1JlY3R9IGZyb20gXCIuLi9SZWN0XCI7XG5pbXBvcnQge0FyZWFIaWdobGlnaHRSZWN0fSBmcm9tIFwiLi9BcmVhSGlnaGxpZ2h0UmVjdFwiO1xuaW1wb3J0IHtJUmVjdH0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL3JlY3RzL0lSZWN0JztcblxuZXhwb3J0IGNsYXNzIEFyZWFIaWdobGlnaHRSZWN0cyB7XG5cbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZUZyb21SZWN0KHJlY3Q6IFJlY3QgfCBJUmVjdCkge1xuXG4gICAgICAgIHJldHVybiBuZXcgQXJlYUhpZ2hsaWdodFJlY3Qoe1xuICAgICAgICAgICAgbGVmdDogcmVjdC5sZWZ0LFxuICAgICAgICAgICAgdG9wOiByZWN0LnRvcCxcbiAgICAgICAgICAgIHdpZHRoOiByZWN0LndpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiByZWN0LmhlaWdodFxuICAgICAgICB9KTtcblxuICAgIH1cblxufVxuIl19