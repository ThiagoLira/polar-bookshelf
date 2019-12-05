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
const CardBody_1 = require("./CardBody");
const AnnotationPreview_1 = require("../../annotation_repo/AnnotationPreview");
const RatingButtons_1 = require("../RatingButtons");
class ReadingCard extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const taskRep = this.props.taskRep;
        const { id, action, created, color } = taskRep;
        return React.createElement(CardBody_1.CardBody, { taskRep: taskRep },
            React.createElement(CardBody_1.CardBody.Main, { taskRep: taskRep },
                React.createElement(AnnotationPreview_1.AnnotationPreview, { id: id, text: action.text, created: created, color: color })),
            React.createElement(CardBody_1.CardBody.Footer, { taskRep: taskRep },
                React.createElement(RatingButtons_1.RatingButtons, { taskRep: taskRep, stage: taskRep.stage, onRating: this.props.onRating })));
    }
}
exports.ReadingCard = ReadingCard;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVhZGluZ0NhcmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJSZWFkaW5nQ2FyZC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsNkNBQStCO0FBRS9CLHlDQUFvQztBQUNwQywrRUFBMEU7QUFDMUUsb0RBQStDO0FBSS9DLE1BQWEsV0FBWSxTQUFRLEtBQUssQ0FBQyxTQUF5QjtJQUU1RCxZQUFZLEtBQWEsRUFBRSxPQUFZO1FBQ25DLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFFMUIsQ0FBQztJQUVNLE1BQU07UUFFVCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQztRQUNuQyxNQUFNLEVBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFDLEdBQUcsT0FBTyxDQUFDO1FBRTdDLE9BQU8sb0JBQUMsbUJBQVEsSUFBQyxPQUFPLEVBQUUsT0FBTztZQUU3QixvQkFBQyxtQkFBUSxDQUFDLElBQUksSUFBQyxPQUFPLEVBQUUsT0FBTztnQkFFM0Isb0JBQUMscUNBQWlCLElBQUMsRUFBRSxFQUFFLEVBQUUsRUFDTixJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksRUFDakIsT0FBTyxFQUFFLE9BQU8sRUFDaEIsS0FBSyxFQUFFLEtBQUssR0FBRyxDQUV0QjtZQUVoQixvQkFBQyxtQkFBUSxDQUFDLE1BQU0sSUFBQyxPQUFPLEVBQUUsT0FBTztnQkFFN0Isb0JBQUMsNkJBQWEsSUFBQyxPQUFPLEVBQUUsT0FBTyxFQUNoQixLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUssRUFDcEIsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLENBRWpDLENBRVgsQ0FBQztJQUVoQixDQUFDO0NBRUo7QUFuQ0Qsa0NBbUNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtUYXNrUmVwfSBmcm9tIFwicG9sYXItc3BhY2VkLXJlcGV0aXRpb24vc3JjL3NwYWNlZF9yZXBldGl0aW9uL3NjaGVkdWxlci9TMlBsdXMvVGFza3NDYWxjdWxhdG9yXCI7XG5pbXBvcnQge0NhcmRCb2R5fSBmcm9tIFwiLi9DYXJkQm9keVwiO1xuaW1wb3J0IHtBbm5vdGF0aW9uUHJldmlld30gZnJvbSBcIi4uLy4uL2Fubm90YXRpb25fcmVwby9Bbm5vdGF0aW9uUHJldmlld1wiO1xuaW1wb3J0IHtSYXRpbmdCdXR0b25zfSBmcm9tIFwiLi4vUmF0aW5nQnV0dG9uc1wiO1xuaW1wb3J0IHtSYXRpbmdDYWxsYmFja30gZnJvbSBcIi4uL1Jldmlld2VyXCI7XG5pbXBvcnQge1JlYWRpbmdUYXNrQWN0aW9ufSBmcm9tIFwiLi9SZWFkaW5nVGFza0FjdGlvblwiO1xuXG5leHBvcnQgY2xhc3MgUmVhZGluZ0NhcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJUHJvcHMsIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuXG4gICAgICAgIGNvbnN0IHRhc2tSZXAgPSB0aGlzLnByb3BzLnRhc2tSZXA7XG4gICAgICAgIGNvbnN0IHtpZCwgYWN0aW9uLCBjcmVhdGVkLCBjb2xvcn0gPSB0YXNrUmVwO1xuXG4gICAgICAgIHJldHVybiA8Q2FyZEJvZHkgdGFza1JlcD17dGFza1JlcH0+XG5cbiAgICAgICAgICAgIDxDYXJkQm9keS5NYWluIHRhc2tSZXA9e3Rhc2tSZXB9PlxuXG4gICAgICAgICAgICAgICAgPEFubm90YXRpb25QcmV2aWV3IGlkPXtpZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17YWN0aW9uLnRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZWQ9e2NyZWF0ZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXtjb2xvcn0vPlxuXG4gICAgICAgICAgICA8L0NhcmRCb2R5Lk1haW4+XG5cbiAgICAgICAgICAgIDxDYXJkQm9keS5Gb290ZXIgdGFza1JlcD17dGFza1JlcH0+XG5cbiAgICAgICAgICAgICAgICA8UmF0aW5nQnV0dG9ucyB0YXNrUmVwPXt0YXNrUmVwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YWdlPXt0YXNrUmVwLnN0YWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUmF0aW5nPXt0aGlzLnByb3BzLm9uUmF0aW5nfS8+XG5cbiAgICAgICAgICAgIDwvQ2FyZEJvZHkuRm9vdGVyPlxuXG4gICAgICAgIDwvQ2FyZEJvZHk+O1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVByb3BzIHtcbiAgICByZWFkb25seSB0YXNrUmVwOiBUYXNrUmVwPFJlYWRpbmdUYXNrQWN0aW9uPjtcbiAgICByZWFkb25seSBvblJhdGluZzogUmF0aW5nQ2FsbGJhY2s8UmVhZGluZ1Rhc2tBY3Rpb24+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElTdGF0ZSB7XG59XG4iXX0=