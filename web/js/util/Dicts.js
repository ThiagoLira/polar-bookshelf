"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Dicts {
    static ownKeys(dict, callback) {
        for (let key in dict) {
            if (dict.hasOwnProperty(key)) {
                let value = dict[key];
                callback(key, value);
            }
        }
    }
}
exports.Dicts = Dicts;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGljdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJEaWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE1BQWEsS0FBSztJQVFkLE1BQU0sQ0FBQyxPQUFPLENBQUksSUFBd0IsRUFBRyxRQUE0QjtRQUVyRSxLQUFJLElBQUksR0FBRyxJQUFJLElBQUksRUFBRTtZQUVqQixJQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ3pCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDdEIsUUFBUSxDQUFDLEdBQUcsRUFBQyxLQUFLLENBQUMsQ0FBQzthQUN2QjtTQUVKO0lBRUwsQ0FBQztDQUVKO0FBckJELHNCQXFCQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBEaWN0cyB7XG5cbiAgICAvKipcbiAgICAgKiBXZSBpdGVyYXRlIG92ZXIgYWxsIGtleXMgaW4gdGhlIGRpY3Rpb25hcnkuICBFdmVuIGluaGVyaXRlZCBrZXlzLlxuICAgICAqXG4gICAgICogQHBhcmFtIGRpY3RcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICAgKi9cbiAgICBzdGF0aWMgb3duS2V5czxWPihkaWN0OiB7W2tleTogc3RyaW5nXTogVn0gLCBjYWxsYmFjazogT3duS2V5c0NhbGxiYWNrPFY+KSB7XG5cbiAgICAgICAgZm9yKGxldCBrZXkgaW4gZGljdCkge1xuXG4gICAgICAgICAgICBpZihkaWN0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBkaWN0W2tleV07XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soa2V5LHZhbHVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9XG5cbn1cblxuaW50ZXJmYWNlIE93bktleXNDYWxsYmFjazxWPiB7XG5cbiAgICAoa2V5OiBzdHJpbmcsIHZhbHVlOiBWKTogdm9pZDtcblxufVxuIl19