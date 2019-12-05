"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class KeyEvents {
    static isKeyMetaActive(event) {
        if (this.isMacOS()) {
            return event.metaKey && event.altKey;
        }
        else {
            return event.ctrlKey && event.altKey;
        }
    }
    static isMacOS() {
        return navigator.platform === "MacIntel";
    }
}
exports.KeyEvents = KeyEvents;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2V5RXZlbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiS2V5RXZlbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsTUFBYSxTQUFTO0lBS1gsTUFBTSxDQUFDLGVBQWUsQ0FBQyxLQUFvQjtRQUU5QyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUNoQixPQUFPLEtBQUssQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQztTQUN4QzthQUFNO1lBQ0gsT0FBTyxLQUFLLENBQUMsT0FBTyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUM7U0FDeEM7SUFFTCxDQUFDO0lBRU0sTUFBTSxDQUFDLE9BQU87UUFDakIsT0FBTyxTQUFTLENBQUMsUUFBUSxLQUFLLFVBQVUsQ0FBQztJQUM3QyxDQUFDO0NBRUo7QUFuQkQsOEJBbUJDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEtleUV2ZW50cyB7XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gdHJ1ZSBpZiB0aGUgJ21ldGEnIGtleXMgYXJlIGFjdGl2ZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGlzS2V5TWV0YUFjdGl2ZShldmVudDogS2V5Ym9hcmRFdmVudCkge1xuXG4gICAgICAgIGlmICh0aGlzLmlzTWFjT1MoKSkge1xuICAgICAgICAgICAgcmV0dXJuIGV2ZW50Lm1ldGFLZXkgJiYgZXZlbnQuYWx0S2V5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGV2ZW50LmN0cmxLZXkgJiYgZXZlbnQuYWx0S2V5O1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGlzTWFjT1MoKSB7XG4gICAgICAgIHJldHVybiBuYXZpZ2F0b3IucGxhdGZvcm0gPT09IFwiTWFjSW50ZWxcIjtcbiAgICB9XG5cbn1cbiJdfQ==