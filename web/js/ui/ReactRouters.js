"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ReactRouters {
    static createLocationWithPathnameHash() {
        const computePathname = () => {
            return document.location.hash ?
                document.location.pathname + '' + document.location.hash : document.location.pathname;
        };
        return {
            get pathname() {
                return computePathname();
            },
            get search() {
                return document.location.search;
            },
            get hash() {
                return document.location.hash;
            },
            state: null,
        };
    }
}
exports.ReactRouters = ReactRouters;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVhY3RSb3V0ZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUmVhY3RSb3V0ZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsTUFBYSxZQUFZO0lBSWQsTUFBTSxDQUFDLDhCQUE4QjtRQUV4QyxNQUFNLGVBQWUsR0FBRyxHQUFHLEVBQUU7WUFDekIsT0FBTyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUMzQixRQUFRLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxFQUFFLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO1FBRTlGLENBQUMsQ0FBQztRQUVGLE9BQU87WUFDSCxJQUFJLFFBQVE7Z0JBQ1IsT0FBTyxlQUFlLEVBQUUsQ0FBQztZQUM3QixDQUFDO1lBQ0QsSUFBSSxNQUFNO2dCQUNOLE9BQU8sUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFDcEMsQ0FBQztZQUNELElBQUksSUFBSTtnQkFDSixPQUFPLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2xDLENBQUM7WUFDRCxLQUFLLEVBQUUsSUFBSTtTQUNkLENBQUM7SUFFTixDQUFDO0NBRUo7QUEzQkQsb0NBMkJDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFJlYWN0Um91dGVycyB7XG4gICAgLyoqXG4gICAgICogVGhpcyBpcyBhIGJpZyBvZiBhIGhhY2sgdG8gc3VwcG9ydCByb3V0ZXMgd2l0aCBoYXNoZXMgaW4gdGhlbSB3aXRoIHJlYWN0IHJvdXRlci5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZUxvY2F0aW9uV2l0aFBhdGhuYW1lSGFzaCgpIHtcblxuICAgICAgICBjb25zdCBjb21wdXRlUGF0aG5hbWUgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQubG9jYXRpb24uaGFzaCA/XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24ucGF0aG5hbWUgKyAnJyArIGRvY3VtZW50LmxvY2F0aW9uLmhhc2ggOiBkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBnZXQgcGF0aG5hbWUoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbXB1dGVQYXRobmFtZSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdldCBzZWFyY2goKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50LmxvY2F0aW9uLnNlYXJjaDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXQgaGFzaCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQubG9jYXRpb24uaGFzaDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdGF0ZTogbnVsbCxcbiAgICAgICAgfTtcblxuICAgIH1cblxufVxuIl19