"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AppOrigin {
    static configure() {
        if (document && document.location && document.location.href) {
            const href = document.location.href;
            if (href.indexOf('getpolarized.io') !== -1) {
                document.domain = 'getpolarized.io';
            }
        }
    }
}
exports.AppOrigin = AppOrigin;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwT3JpZ2luLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQXBwT3JpZ2luLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsTUFBYSxTQUFTO0lBRVgsTUFBTSxDQUFDLFNBQVM7UUFFbkIsSUFBSSxRQUFRLElBQUksUUFBUSxDQUFDLFFBQVEsSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRTtZQUV6RCxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNwQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtnQkFDeEMsUUFBUSxDQUFDLE1BQU0sR0FBRyxpQkFBaUIsQ0FBQzthQUN2QztTQUVKO0lBRUwsQ0FBQztDQUVKO0FBZkQsOEJBZUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBjbGFzcyBBcHBPcmlnaW4ge1xuXG4gICAgcHVibGljIHN0YXRpYyBjb25maWd1cmUoKSB7XG5cbiAgICAgICAgaWYgKGRvY3VtZW50ICYmIGRvY3VtZW50LmxvY2F0aW9uICYmIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYpIHtcblxuICAgICAgICAgICAgY29uc3QgaHJlZiA9IGRvY3VtZW50LmxvY2F0aW9uLmhyZWY7XG4gICAgICAgICAgICBpZiAoaHJlZi5pbmRleE9mKCdnZXRwb2xhcml6ZWQuaW8nKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kb21haW4gPSAnZ2V0cG9sYXJpemVkLmlvJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9XG5cbn1cbiJdfQ==