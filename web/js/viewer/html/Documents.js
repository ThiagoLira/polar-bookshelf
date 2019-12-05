"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Documents {
    static height(doc) {
        if (doc === null || doc === undefined) {
            return undefined;
        }
        const potentialScrollHeights = [
            doc.documentElement ? doc.documentElement.scrollHeight : undefined,
            doc.body ? doc.body.scrollHeight : undefined
        ];
        const scrollHeights = potentialScrollHeights
            .filter(current => current !== undefined)
            .map(current => current);
        if (scrollHeights.length === 0) {
            return undefined;
        }
        return Math.max(...scrollHeights);
    }
}
exports.Documents = Documents;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jdW1lbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRG9jdW1lbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsTUFBYSxTQUFTO0lBRVgsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFnQztRQUtqRCxJQUFJLEdBQUcsS0FBSyxJQUFJLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtZQUNuQyxPQUFPLFNBQVMsQ0FBQztTQUNwQjtRQUVELE1BQU0sc0JBQXNCLEdBQUc7WUFDM0IsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFNBQVM7WUFDbEUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFNBQVM7U0FDL0MsQ0FBQztRQUVGLE1BQU0sYUFBYSxHQUNmLHNCQUFzQjthQUNyQixNQUFNLENBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEtBQUssU0FBUyxDQUFDO2FBQ3pDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQVEsQ0FBQyxDQUFDO1FBRTlCLElBQUksYUFBYSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDNUIsT0FBTyxTQUFTLENBQUM7U0FDcEI7UUFFRCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxhQUFhLENBQUMsQ0FBQztJQUV0QyxDQUFDO0NBRUo7QUE3QkQsOEJBNkJDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIERvY3VtZW50cyB7XG5cbiAgICBwdWJsaWMgc3RhdGljIGhlaWdodChkb2M6IERvY3VtZW50IHwgdW5kZWZpbmVkIHwgbnVsbCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG5cbiAgICAgICAgLy8gVE9ETzogbm90IHVzaW5nIGFueSBhZHZhbmNlZCBpbXBvcnRzIGhlcmUgc28gdGhhdCB0aGlzIGNhbiBlYXNpbHlcbiAgICAgICAgLy8gYmUgdXNlZCBpbiBhIHJlbmRlcmVyIGZ1bmN0aW9uLlxuXG4gICAgICAgIGlmIChkb2MgPT09IG51bGwgfHwgZG9jID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwb3RlbnRpYWxTY3JvbGxIZWlnaHRzID0gW1xuICAgICAgICAgICAgZG9jLmRvY3VtZW50RWxlbWVudCA/IGRvYy5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0IDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgZG9jLmJvZHkgPyBkb2MuYm9keS5zY3JvbGxIZWlnaHQgOiB1bmRlZmluZWRcbiAgICAgICAgXTtcblxuICAgICAgICBjb25zdCBzY3JvbGxIZWlnaHRzID1cbiAgICAgICAgICAgIHBvdGVudGlhbFNjcm9sbEhlaWdodHNcbiAgICAgICAgICAgIC5maWx0ZXIoIGN1cnJlbnQgPT4gY3VycmVudCAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgLm1hcChjdXJyZW50ID0+IGN1cnJlbnQhKTtcblxuICAgICAgICBpZiAoc2Nyb2xsSGVpZ2h0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gTWF0aC5tYXgoLi4uc2Nyb2xsSGVpZ2h0cyk7XG5cbiAgICB9XG5cbn1cbiJdfQ==