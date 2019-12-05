"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const RatingButton_1 = require("./RatingButton");
class RatingButtonSet extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const { ratings, taskRep } = this.props;
        return ratings.map(rating => React.createElement(RatingButton_1.RatingButton, { key: rating, taskRep: taskRep, rating: rating, onRating: () => this.props.onRating(taskRep, rating) }));
    }
}
exports.RatingButtonSet = RatingButtonSet;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmF0aW5nQnV0dG9uU2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUmF0aW5nQnV0dG9uU2V0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSw2Q0FBK0I7QUFJL0IsaURBQTRDO0FBRTVDLE1BQWEsZUFBbUIsU0FBUSxLQUFLLENBQUMsU0FBNEI7SUFFdEUsWUFBWSxLQUFnQixFQUFFLE9BQVk7UUFDdEMsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRU0sTUFBTTtRQUVULE1BQU0sRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUV0QyxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxvQkFBQywyQkFBWSxJQUFDLEdBQUcsRUFBRSxNQUFNLEVBQ1gsT0FBTyxFQUFFLE9BQU8sRUFDaEIsTUFBTSxFQUFFLE1BQU0sRUFDZCxRQUFRLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUV4RyxDQUFDO0NBRUo7QUFqQkQsMENBaUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtUYXNrUmVwfSBmcm9tIFwicG9sYXItc3BhY2VkLXJlcGV0aXRpb24vc3JjL3NwYWNlZF9yZXBldGl0aW9uL3NjaGVkdWxlci9TMlBsdXMvVGFza3NDYWxjdWxhdG9yXCI7XG5pbXBvcnQge1JhdGluZ0NhbGxiYWNrfSBmcm9tIFwiLi9SZXZpZXdlclwiO1xuaW1wb3J0IHtSYXRpbmd9IGZyb20gXCJwb2xhci1zcGFjZWQtcmVwZXRpdGlvbi1hcGkvc3JjL3NjaGVkdWxlci9TMlBsdXMvUzJQbHVzXCI7XG5pbXBvcnQge1JhdGluZ0J1dHRvbn0gZnJvbSBcIi4vUmF0aW5nQnV0dG9uXCI7XG5cbmV4cG9ydCBjbGFzcyBSYXRpbmdCdXR0b25TZXQ8QT4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzPEE+LCBJU3RhdGU+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJUHJvcHM8QT4sIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICBjb25zdCB7cmF0aW5ncywgdGFza1JlcH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIHJldHVybiByYXRpbmdzLm1hcChyYXRpbmcgPT4gPFJhdGluZ0J1dHRvbiBrZXk9e3JhdGluZ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tSZXA9e3Rhc2tSZXB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXRpbmc9e3JhdGluZ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUmF0aW5nPXsoKSA9PiB0aGlzLnByb3BzLm9uUmF0aW5nKHRhc2tSZXAsIHJhdGluZyl9Lz4pO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVByb3BzPEE+IHtcblxuICAgIHJlYWRvbmx5IHRhc2tSZXA6IFRhc2tSZXA8QT47XG4gICAgcmVhZG9ubHkgcmF0aW5nczogUmVhZG9ubHlBcnJheTxSYXRpbmc+O1xuICAgIHJlYWRvbmx5IG9uUmF0aW5nOiBSYXRpbmdDYWxsYmFjazxBPjtcblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElTdGF0ZSB7XG5cbn1cbiJdfQ==