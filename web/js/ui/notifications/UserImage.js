"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
class Img extends react_1.default.Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (this.props.image) {
            return react_1.default.createElement("img", { alt: this.props.name, src: this.props.image.url, className: "rounded", style: {
                    maxHeight: '32px',
                    maxWidth: '32px'
                } });
        }
        else {
            return react_1.default.createElement("div", null);
        }
    }
}
exports.Img = Img;
class UserImage extends react_1.default.PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        return (react_1.default.createElement(Img, Object.assign({}, this.props)));
    }
}
exports.UserImage = UserImage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlckltYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVXNlckltYWdlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGtEQUEwQjtBQUkxQixNQUFhLEdBQUksU0FBUSxlQUFLLENBQUMsU0FBeUI7SUFFcEQsWUFBWSxLQUFhO1FBQ3JCLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUVqQixDQUFDO0lBRU0sTUFBTTtRQUVULElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUU7WUFFbEIsT0FBTyx1Q0FBSyxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQ3BCLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQU0sQ0FBQyxHQUFHLEVBQzFCLFNBQVMsRUFBQyxTQUFTLEVBQ25CLEtBQUssRUFBRTtvQkFDSCxTQUFTLEVBQUUsTUFBTTtvQkFDakIsUUFBUSxFQUFFLE1BQU07aUJBQ25CLEdBQUcsQ0FBQztTQUVwQjthQUFNO1lBQ0gsT0FBTywwQ0FBVyxDQUFDO1NBQ3RCO0lBRUwsQ0FBQztDQUVKO0FBekJELGtCQXlCQztBQUVELE1BQWEsU0FBVSxTQUFRLGVBQUssQ0FBQyxhQUE2QjtJQUU5RCxZQUFZLEtBQWE7UUFDckIsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRWpCLENBQUM7SUFFTSxNQUFNO1FBRVQsT0FBTyxDQUVILDhCQUFDLEdBQUcsb0JBQUssSUFBSSxDQUFDLEtBQUssRUFBRyxDQUV6QixDQUFDO0lBRU4sQ0FBQztDQUVKO0FBakJELDhCQWlCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7SW1hZ2V9IGZyb20gJy4uLy4uL2RhdGFzdG9yZS9zaGFyaW5nL2RiL0ltYWdlcyc7XG5cbmV4cG9ydCBjbGFzcyBJbWcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJUHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5pbWFnZSkge1xuXG4gICAgICAgICAgICByZXR1cm4gPGltZyBhbHQ9e3RoaXMucHJvcHMubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17dGhpcy5wcm9wcy5pbWFnZSEudXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heEhlaWdodDogJzMycHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnMzJweCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH19Lz47XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiA8ZGl2PjwvZGl2PjtcbiAgICAgICAgfVxuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBjbGFzcyBVc2VySW1hZ2UgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgPEltZyB7Li4udGhpcy5wcm9wc30vPlxuXG4gICAgICAgICk7XG5cbiAgICB9XG5cbn1cblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuICAgIHJlYWRvbmx5IGltYWdlOiBJbWFnZSB8IG51bGw7XG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xufVxuIl19