"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const FeatureToggles_1 = require("polar-shared/src/util/FeatureToggles");
class FeatureToggle extends react_1.default.Component {
    render() {
        if (FeatureToggles_1.FeatureToggles.get(this.props.name)) {
            return this.props.children;
        }
        return [];
    }
}
exports.FeatureToggle = FeatureToggle;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmVhdHVyZVRvZ2dsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkZlYXR1cmVUb2dnbGUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsa0RBQTBCO0FBQzFCLHlFQUFvRTtBQUVwRSxNQUFhLGFBQWMsU0FBUSxlQUFLLENBQUMsU0FBeUI7SUFFdkQsTUFBTTtRQUVULElBQUksK0JBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNyQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO1NBQzlCO1FBRUQsT0FBTyxFQUFFLENBQUM7SUFFZCxDQUFDO0NBRUo7QUFaRCxzQ0FZQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0ZlYXR1cmVUb2dnbGVzfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy91dGlsL0ZlYXR1cmVUb2dnbGVzXCI7XG5cbmV4cG9ydCBjbGFzcyBGZWF0dXJlVG9nZ2xlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuXG4gICAgICAgIGlmIChGZWF0dXJlVG9nZ2xlcy5nZXQodGhpcy5wcm9wcy5uYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW47XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gW107XG5cbiAgICB9XG5cbn1cblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbn1cbiJdfQ==