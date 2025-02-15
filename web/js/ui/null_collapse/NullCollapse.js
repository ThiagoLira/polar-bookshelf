"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
class NullCollapse extends react_1.default.Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (this.props.open) {
            return this.props.children;
        }
        else {
            return null;
        }
    }
}
exports.NullCollapse = NullCollapse;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTnVsbENvbGxhcHNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiTnVsbENvbGxhcHNlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLGtEQUEwQjtBQWExQixNQUFhLFlBQWEsU0FBUSxlQUFLLENBQUMsU0FBeUI7SUFFN0QsWUFBWSxLQUFhO1FBQ3JCLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQixDQUFDO0lBR00sTUFBTTtRQUVULElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUU7WUFDakIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztTQUM5QjthQUFNO1lBQ0gsT0FBTyxJQUFJLENBQUM7U0FDZjtJQUVMLENBQUM7Q0FFSjtBQWpCRCxvQ0FpQkMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQgcmVhY3Qvbm8tbXVsdGktY29tcDogMCwgcmVhY3QvcHJvcC10eXBlczogMCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7SVN0eWxlTWFwfSBmcm9tICcuLi8uLi9yZWFjdC9JU3R5bGVNYXAnO1xuaW1wb3J0IHtQcm9ncmVzc30gZnJvbSAncmVhY3RzdHJhcCc7XG5pbXBvcnQge1JlYWN0b3J9IGZyb20gJy4uLy4uL3JlYWN0b3IvUmVhY3Rvcic7XG5pbXBvcnQgQ29sbGFwc2UgZnJvbSAncmVhY3RzdHJhcC9saWIvQ29sbGFwc2UnO1xuaW1wb3J0IHtJRXZlbnREaXNwYXRjaGVyfSBmcm9tICcuLi8uLi9yZWFjdG9yL1NpbXBsZVJlYWN0b3InO1xuaW1wb3J0IHtFdmVudExpc3RlbmVyfSBmcm9tICcuLi8uLi9yZWFjdG9yL0V2ZW50TGlzdGVuZXInO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbG9nZ2VyL0xvZ2dlcic7XG5cblxuLyoqXG4gKiBBIHNpbXBsZSBjb2xsYXBzZSB0aGF0IGp1c3QgcmVuZGVycyBhIG51bGwgY29tcG9uZW50IHdoZW4gbm90IG9wZW4uXG4gKi9cbmV4cG9ydCBjbGFzcyBOdWxsQ29sbGFwc2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJUHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cblxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vcGVuKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICB9XG5cbn1cblxuaW50ZXJmYWNlIElQcm9wcyB7XG5cbiAgICByZWFkb25seSBvcGVuPzogYm9vbGVhbjtcblxufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcblxuXG59XG4iXX0=