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
const RatingButtonSet_1 = require("./RatingButtonSet");
class RatingButtons extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const Learning = () => {
            return React.createElement(RatingButtonSet_1.RatingButtonSet, { taskRep: this.props.taskRep, ratings: ['again', 'good', 'easy'], onRating: this.props.onRating });
        };
        const Review = () => {
            return React.createElement(RatingButtonSet_1.RatingButtonSet, { taskRep: this.props.taskRep, ratings: ['again', 'hard', 'good', 'easy'], onRating: this.props.onRating });
        };
        if (['new', 'learning'].includes(this.props.stage)) {
            return React.createElement(Learning, null);
        }
        else {
            return React.createElement(Review, null);
        }
    }
}
exports.RatingButtons = RatingButtons;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmF0aW5nQnV0dG9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlJhdGluZ0J1dHRvbnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUkvQix1REFBa0Q7QUFFbEQsTUFBYSxhQUFpQixTQUFRLEtBQUssQ0FBQyxTQUE0QjtJQUVwRSxZQUFZLEtBQWdCLEVBQUUsT0FBWTtRQUN0QyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFTSxNQUFNO1FBRVQsTUFBTSxRQUFRLEdBQUcsR0FBRyxFQUFFO1lBQ2xCLE9BQU8sb0JBQUMsaUNBQWUsSUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQzNCLE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLEVBQ2xDLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxDQUFDO1FBQzdELENBQUMsQ0FBQztRQUVGLE1BQU0sTUFBTSxHQUFHLEdBQUcsRUFBRTtZQUNoQixPQUFPLG9CQUFDLGlDQUFlLElBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUMzQixPQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsRUFDMUMsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLENBQUM7UUFDN0QsQ0FBQyxDQUFDO1FBRUYsSUFBSSxDQUFDLEtBQUssRUFBRSxVQUFVLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNoRCxPQUFPLG9CQUFDLFFBQVEsT0FBRSxDQUFDO1NBQ3RCO2FBQU07WUFDSCxPQUFPLG9CQUFDLE1BQU0sT0FBRSxDQUFDO1NBQ3BCO0lBRUwsQ0FBQztDQUVKO0FBNUJELHNDQTRCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7VGFza1JlcH0gZnJvbSBcInBvbGFyLXNwYWNlZC1yZXBldGl0aW9uL3NyYy9zcGFjZWRfcmVwZXRpdGlvbi9zY2hlZHVsZXIvUzJQbHVzL1Rhc2tzQ2FsY3VsYXRvclwiO1xuaW1wb3J0IHtSYXRpbmdDYWxsYmFja30gZnJvbSBcIi4vUmV2aWV3ZXJcIjtcbmltcG9ydCB7U3RhZ2V9IGZyb20gXCJwb2xhci1zcGFjZWQtcmVwZXRpdGlvbi1hcGkvc3JjL3NjaGVkdWxlci9TMlBsdXMvUzJQbHVzXCI7XG5pbXBvcnQge1JhdGluZ0J1dHRvblNldH0gZnJvbSBcIi4vUmF0aW5nQnV0dG9uU2V0XCI7XG5cbmV4cG9ydCBjbGFzcyBSYXRpbmdCdXR0b25zPEE+IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wczxBPiwgSVN0YXRlPiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzPEE+LCBjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgY29uc3QgTGVhcm5pbmcgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gPFJhdGluZ0J1dHRvblNldCB0YXNrUmVwPXt0aGlzLnByb3BzLnRhc2tSZXB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXRpbmdzPXtbJ2FnYWluJywgJ2dvb2QnLCAnZWFzeSddfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25SYXRpbmc9e3RoaXMucHJvcHMub25SYXRpbmd9Lz47XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgUmV2aWV3ID0gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIDxSYXRpbmdCdXR0b25TZXQgdGFza1JlcD17dGhpcy5wcm9wcy50YXNrUmVwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF0aW5ncz17WydhZ2FpbicsICdoYXJkJywgJ2dvb2QnLCAnZWFzeSddfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25SYXRpbmc9e3RoaXMucHJvcHMub25SYXRpbmd9Lz47XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKFsnbmV3JywgJ2xlYXJuaW5nJ10uaW5jbHVkZXModGhpcy5wcm9wcy5zdGFnZSkpIHtcbiAgICAgICAgICAgIHJldHVybiA8TGVhcm5pbmcvPjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiA8UmV2aWV3Lz47XG4gICAgICAgIH1cblxuICAgIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElQcm9wczxBPiB7XG5cbiAgICByZWFkb25seSB0YXNrUmVwOiBUYXNrUmVwPEE+O1xuICAgIHJlYWRvbmx5IHN0YWdlOiBTdGFnZTtcbiAgICByZWFkb25seSBvblJhdGluZzogUmF0aW5nQ2FsbGJhY2s8QT47XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJU3RhdGUge1xuXG59XG4iXX0=