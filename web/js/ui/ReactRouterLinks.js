"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ReactRouterLinks {
    static isActive(target) {
        const { pathname, hash } = target;
        const canonicalizeHash = (hash) => {
            if (!hash) {
                return "#";
            }
            if (!hash.startsWith("#")) {
                return "#" + hash;
            }
            return hash;
        };
        return document.location.pathname === pathname &&
            canonicalizeHash(document.location.hash) === canonicalizeHash(hash);
    }
}
exports.ReactRouterLinks = ReactRouterLinks;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVhY3RSb3V0ZXJMaW5rcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlJlYWN0Um91dGVyTGlua3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxNQUFhLGdCQUFnQjtJQUVsQixNQUFNLENBQUMsUUFBUSxDQUFDLE1BQWM7UUFFakMsTUFBTSxFQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUMsR0FBRyxNQUFNLENBQUM7UUFFaEMsTUFBTSxnQkFBZ0IsR0FBRyxDQUFDLElBQWEsRUFBVSxFQUFFO1lBRS9DLElBQUksQ0FBRSxJQUFJLEVBQUU7Z0JBQ1IsT0FBTyxHQUFHLENBQUM7YUFDZDtZQUVELElBQUksQ0FBRSxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUN4QixPQUFPLEdBQUcsR0FBRyxJQUFJLENBQUM7YUFDckI7WUFFRCxPQUFPLElBQUksQ0FBQztRQUVoQixDQUFDLENBQUM7UUFFRixPQUFPLFFBQVEsQ0FBQyxRQUFRLENBQUMsUUFBUSxLQUFLLFFBQVE7WUFDdkMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUUvRSxDQUFDO0NBRUo7QUF6QkQsNENBeUJDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFJlYWN0Um91dGVyTGlua3Mge1xuXG4gICAgcHVibGljIHN0YXRpYyBpc0FjdGl2ZSh0YXJnZXQ6IFRhcmdldCkge1xuXG4gICAgICAgIGNvbnN0IHtwYXRobmFtZSwgaGFzaH0gPSB0YXJnZXQ7XG5cbiAgICAgICAgY29uc3QgY2Fub25pY2FsaXplSGFzaCA9IChoYXNoPzogc3RyaW5nKTogc3RyaW5nID0+IHtcblxuICAgICAgICAgICAgaWYgKCEgaGFzaCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBcIiNcIjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCEgaGFzaC5zdGFydHNXaXRoKFwiI1wiKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBcIiNcIiArIGhhc2g7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBoYXNoO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lID09PSBwYXRobmFtZSAmJlxuICAgICAgICAgICAgICAgY2Fub25pY2FsaXplSGFzaChkb2N1bWVudC5sb2NhdGlvbi5oYXNoKSA9PT0gY2Fub25pY2FsaXplSGFzaChoYXNoKTtcblxuICAgIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRhcmdldCB7XG4gICAgcmVhZG9ubHkgcGF0aG5hbWU6IHN0cmluZztcbiAgICByZWFkb25seSBoYXNoPzogc3RyaW5nO1xufVxuIl19