"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const react_fast_compare_1 = __importDefault(require("react-fast-compare"));
class FastComponent extends React.Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (!react_fast_compare_1.default(this.props, nextProps)) {
            return true;
        }
        return false;
    }
}
exports.FastComponent = FastComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmFzdENvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkZhc3RDb21wb25lbnQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUUvQiw0RUFBMkM7QUFLM0MsTUFBc0IsYUFBaUIsU0FBUSxLQUFLLENBQUMsU0FBWTtJQUV0RCxxQkFBcUIsQ0FBQyxTQUFzQixFQUFFLFNBQXdCLEVBQUUsV0FBZ0I7UUFFM0YsSUFBSSxDQUFFLDRCQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsRUFBRTtZQUNwQyxPQUFPLElBQUksQ0FBQztTQUNmO1FBTUQsT0FBTyxLQUFLLENBQUM7SUFFakIsQ0FBQztDQUVKO0FBaEJELHNDQWdCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IGRlZXBFcXVhbCBmcm9tIFwicmVhY3QtZmFzdC1jb21wYXJlXCI7XG5cbi8qKlxuICogTGlrZSBQdXJlQ29tcG9uZW50IGJ1dCBkb2VzIGEgZGVlcCBjb21wYXJpc29uLlxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRmFzdENvbXBvbmVudDxQPiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQPiB7XG5cbiAgICBwdWJsaWMgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wczogUmVhZG9ubHk8UD4sIG5leHRTdGF0ZTogUmVhZG9ubHk8YW55PiwgbmV4dENvbnRleHQ6IGFueSk6IGJvb2xlYW4ge1xuXG4gICAgICAgIGlmICghIGRlZXBFcXVhbCh0aGlzLnByb3BzLCBuZXh0UHJvcHMpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmICghIGRlZXBFcXVhbCh0aGlzLnN0YXRlLCBuZXh0U3RhdGUpKSB7XG4gICAgICAgIC8vICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcblxuICAgIH1cblxufVxuXG4iXX0=