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
const AnnotationType_1 = require("polar-shared/src/metadata/AnnotationType");
const FlashcardIcon_1 = require("./FlashcardIcon");
const CommentIcon_1 = require("./CommentIcon");
const HighlighterIcon_1 = require("./HighlighterIcon");
class AnnotationIcon extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        switch (this.props.type) {
            case AnnotationType_1.AnnotationType.FLASHCARD:
                return (React.createElement(FlashcardIcon_1.FlashcardIcon, null));
            case AnnotationType_1.AnnotationType.COMMENT:
                return (React.createElement(CommentIcon_1.CommentIcon, null));
            case AnnotationType_1.AnnotationType.AREA_HIGHLIGHT:
                return (React.createElement(HighlighterIcon_1.HighlighterIcon, { color: this.props.color }));
            case AnnotationType_1.AnnotationType.TEXT_HIGHLIGHT:
                return (React.createElement(HighlighterIcon_1.HighlighterIcon, { color: this.props.color }));
            default:
                return (React.createElement("div", null, "none"));
        }
        return (React.createElement("span", { className: "fas fa-highlighter text-secondary", "aria-hidden": "true" }));
    }
}
exports.AnnotationIcon = AnnotationIcon;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW5ub3RhdGlvbkljb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJBbm5vdGF0aW9uSWNvbi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsNkNBQStCO0FBQy9CLDZFQUF3RTtBQUN4RSxtREFBOEM7QUFDOUMsK0NBQTBDO0FBQzFDLHVEQUFrRDtBQUtsRCxNQUFhLGNBQWUsU0FBUSxLQUFLLENBQUMsYUFBNkI7SUFFbkUsWUFBWSxLQUFhLEVBQUUsT0FBWTtRQUNuQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFTSxNQUFNO1FBRVQsUUFBUSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRTtZQUVyQixLQUFLLCtCQUFjLENBQUMsU0FBUztnQkFDekIsT0FBTyxDQUFFLG9CQUFDLDZCQUFhLE9BQUUsQ0FBRSxDQUFDO1lBRWhDLEtBQUssK0JBQWMsQ0FBQyxPQUFPO2dCQUN2QixPQUFPLENBQUUsb0JBQUMseUJBQVcsT0FBRSxDQUFFLENBQUM7WUFFOUIsS0FBSywrQkFBYyxDQUFDLGNBQWM7Z0JBQzlCLE9BQU8sQ0FBRSxvQkFBQyxpQ0FBZSxJQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQU0sR0FBRyxDQUFFLENBQUM7WUFFNUQsS0FBSywrQkFBYyxDQUFDLGNBQWM7Z0JBQzlCLE9BQU8sQ0FBRSxvQkFBQyxpQ0FBZSxJQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQU0sR0FBRyxDQUFFLENBQUM7WUFFNUQ7Z0JBQ0ksT0FBTyxDQUFFLHdDQUFlLENBQUUsQ0FBQztTQUVsQztRQUVELE9BQU8sQ0FFSCw4QkFBTSxTQUFTLEVBQUMsbUNBQW1DLGlCQUNqQyxNQUFNLEdBQUUsQ0FFN0IsQ0FBQztJQUVOLENBQUM7Q0FHSjtBQXJDRCx3Q0FxQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0Fubm90YXRpb25UeXBlfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL21ldGFkYXRhL0Fubm90YXRpb25UeXBlJztcbmltcG9ydCB7Rmxhc2hjYXJkSWNvbn0gZnJvbSAnLi9GbGFzaGNhcmRJY29uJztcbmltcG9ydCB7Q29tbWVudEljb259IGZyb20gJy4vQ29tbWVudEljb24nO1xuaW1wb3J0IHtIaWdobGlnaHRlckljb259IGZyb20gJy4vSGlnaGxpZ2h0ZXJJY29uJztcbmltcG9ydCB7SGlnaGxpZ2h0Q29sb3J9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL21ldGFkYXRhL0lCYXNlSGlnaGxpZ2h0XCI7XG5cbi8qKlxuICovXG5leHBvcnQgY2xhc3MgQW5ub3RhdGlvbkljb24gZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzLCBjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgc3dpdGNoICh0aGlzLnByb3BzLnR5cGUpIHtcblxuICAgICAgICAgICAgY2FzZSBBbm5vdGF0aW9uVHlwZS5GTEFTSENBUkQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICggPEZsYXNoY2FyZEljb24vPiApO1xuXG4gICAgICAgICAgICBjYXNlIEFubm90YXRpb25UeXBlLkNPTU1FTlQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICggPENvbW1lbnRJY29uLz4gKTtcblxuICAgICAgICAgICAgY2FzZSBBbm5vdGF0aW9uVHlwZS5BUkVBX0hJR0hMSUdIVDpcbiAgICAgICAgICAgICAgICByZXR1cm4gKCA8SGlnaGxpZ2h0ZXJJY29uIGNvbG9yPXt0aGlzLnByb3BzLmNvbG9yIX0vPiApO1xuXG4gICAgICAgICAgICBjYXNlIEFubm90YXRpb25UeXBlLlRFWFRfSElHSExJR0hUOlxuICAgICAgICAgICAgICAgIHJldHVybiAoIDxIaWdobGlnaHRlckljb24gY29sb3I9e3RoaXMucHJvcHMuY29sb3IhfS8+ICk7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICggPGRpdj5ub25lPC9kaXY+ICk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZhcyBmYS1oaWdobGlnaHRlciB0ZXh0LXNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIi8+XG5cbiAgICAgICAgKTtcblxuICAgIH1cblxuXG59XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICAgIHR5cGU6IEFubm90YXRpb25UeXBlO1xuICAgIGNvbG9yPzogSGlnaGxpZ2h0Q29sb3I7XG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xufVxuIl19