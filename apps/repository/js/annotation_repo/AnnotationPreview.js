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
const ResponsiveImg_1 = require("../../../../web/js/annotation_sidebar/ResponsiveImg");
const DateTimeTableCell_1 = require("../DateTimeTableCell");
const FastComponent_1 = require("../../../../web/js/react/FastComponent");
const Body = (props) => {
    const { text, img } = props;
    const createStyle = () => {
        if (props.color) {
            return {
                borderLeftColor: props.color,
                borderLeftWidth: '2px',
                borderLeftStyle: 'solid',
                paddingLeft: '5px'
            };
        }
        return {};
    };
    const style = createStyle();
    if (img) {
        return React.createElement("div", { style: style },
            React.createElement(ResponsiveImg_1.ResponsiveImg, { id: props.id, img: img, defaultText: " " }));
    }
    else {
        return (React.createElement("div", { id: props.id, style: style },
            React.createElement("div", { dangerouslySetInnerHTML: { __html: text || 'no text' } })));
    }
};
class AnnotationPreview extends FastComponent_1.FastComponent {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }
    render() {
        return React.createElement("div", { id: this.props.id },
            React.createElement(Body, Object.assign({}, this.props)),
            React.createElement(DateTimeTableCell_1.DateTimeTableCell, { datetime: this.props.created, className: "text-muted text-xs" }));
    }
}
exports.AnnotationPreview = AnnotationPreview;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW5ub3RhdGlvblByZXZpZXcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJBbm5vdGF0aW9uUHJldmlldy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsNkNBQStCO0FBQy9CLHVGQUFrRjtBQUNsRiw0REFBdUQ7QUFHdkQsMEVBQXFFO0FBSXJFLE1BQU0sSUFBSSxHQUFHLENBQUMsS0FBYSxFQUFFLEVBQUU7SUFFM0IsTUFBTSxFQUFDLElBQUksRUFBRSxHQUFHLEVBQUMsR0FBRyxLQUFLLENBQUM7SUFFMUIsTUFBTSxXQUFXLEdBQUcsR0FBd0IsRUFBRTtRQUUxQyxJQUFJLEtBQUssQ0FBQyxLQUFLLEVBQUU7WUFFYixPQUFPO2dCQUNILGVBQWUsRUFBRSxLQUFLLENBQUMsS0FBSztnQkFDNUIsZUFBZSxFQUFFLEtBQUs7Z0JBQ3RCLGVBQWUsRUFBRSxPQUFPO2dCQUN4QixXQUFXLEVBQUUsS0FBSzthQUNyQixDQUFDO1NBRUw7UUFFRCxPQUFPLEVBQUUsQ0FBQztJQUVkLENBQUMsQ0FBQztJQUVGLE1BQU0sS0FBSyxHQUFHLFdBQVcsRUFBRSxDQUFDO0lBRTVCLElBQUksR0FBRyxFQUFFO1FBQ0wsT0FBTyw2QkFBSyxLQUFLLEVBQUUsS0FBSztZQUNwQixvQkFBQyw2QkFBYSxJQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFDLEdBQUcsR0FBRSxDQUN0RCxDQUFDO0tBRVY7U0FBTTtRQUNILE9BQU8sQ0FDSCw2QkFBSyxFQUFFLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSztZQUMzQiw2QkFBSyx1QkFBdUIsRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLElBQUksU0FBUyxFQUFDLEdBQVEsQ0FDL0QsQ0FDVCxDQUFDO0tBQ0w7QUFFTCxDQUFDLENBQUM7QUFFRixNQUFhLGlCQUFrQixTQUFRLDZCQUFxQjtJQUV4RCxZQUFZLEtBQWEsRUFBRSxPQUFZO1FBQ25DLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7SUFFcEIsQ0FBQztJQUVNLE1BQU07UUFFVCxPQUFPLDZCQUFLLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFFekIsb0JBQUMsSUFBSSxvQkFBSyxJQUFJLENBQUMsS0FBSyxFQUFHO1lBRXZCLG9CQUFDLHFDQUFpQixJQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUMsb0JBQW9CLEdBQUUsQ0FFL0UsQ0FBQztJQUVYLENBQUM7Q0FFSjtBQXJCRCw4Q0FxQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1Jlc3BvbnNpdmVJbWd9IGZyb20gJy4uLy4uLy4uLy4uL3dlYi9qcy9hbm5vdGF0aW9uX3NpZGViYXIvUmVzcG9uc2l2ZUltZyc7XG5pbXBvcnQge0RhdGVUaW1lVGFibGVDZWxsfSBmcm9tICcuLi9EYXRlVGltZVRhYmxlQ2VsbCc7XG5pbXBvcnQge0ltZ30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9tZXRhZGF0YS9JbWcnO1xuaW1wb3J0IHtJU09EYXRlVGltZVN0cmluZ30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9tZXRhZGF0YS9JU09EYXRlVGltZVN0cmluZ3MnO1xuaW1wb3J0IHtGYXN0Q29tcG9uZW50fSBmcm9tICcuLi8uLi8uLi8uLi93ZWIvanMvcmVhY3QvRmFzdENvbXBvbmVudCc7XG5pbXBvcnQge1JlcG9IaWdobGlnaHRJbmZvfSBmcm9tIFwiLi4vUmVwb0Fubm90YXRpb25cIjtcbmltcG9ydCB7SGlnaGxpZ2h0Q29sb3J9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL21ldGFkYXRhL0lCYXNlSGlnaGxpZ2h0XCI7XG5cbmNvbnN0IEJvZHkgPSAocHJvcHM6IElQcm9wcykgPT4ge1xuXG4gICAgY29uc3Qge3RleHQsIGltZ30gPSBwcm9wcztcblxuICAgIGNvbnN0IGNyZWF0ZVN0eWxlID0gKCk6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPT4ge1xuXG4gICAgICAgIGlmIChwcm9wcy5jb2xvcikge1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGJvcmRlckxlZnRDb2xvcjogcHJvcHMuY29sb3IsXG4gICAgICAgICAgICAgICAgYm9yZGVyTGVmdFdpZHRoOiAnMnB4JyxcbiAgICAgICAgICAgICAgICBib3JkZXJMZWZ0U3R5bGU6ICdzb2xpZCcsXG4gICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICc1cHgnXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge307XG5cbiAgICB9O1xuXG4gICAgY29uc3Qgc3R5bGUgPSBjcmVhdGVTdHlsZSgpO1xuXG4gICAgaWYgKGltZykge1xuICAgICAgICByZXR1cm4gPGRpdiBzdHlsZT17c3R5bGV9PlxuICAgICAgICAgICAgPFJlc3BvbnNpdmVJbWcgaWQ9e3Byb3BzLmlkfSBpbWc9e2ltZ30gZGVmYXVsdFRleHQ9XCIgXCIvPlxuICAgICAgICA8L2Rpdj47XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBpZD17cHJvcHMuaWR9IHN0eWxlPXtzdHlsZX0+XG4gICAgICAgICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogdGV4dCB8fCAnbm8gdGV4dCd9fT48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxufTtcblxuZXhwb3J0IGNsYXNzIEFubm90YXRpb25QcmV2aWV3IGV4dGVuZHMgRmFzdENvbXBvbmVudDxJUHJvcHM+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJUHJvcHMsIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHt9O1xuXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gPGRpdiBpZD17dGhpcy5wcm9wcy5pZH0+XG5cbiAgICAgICAgICAgIDxCb2R5IHsuLi50aGlzLnByb3BzfS8+XG5cbiAgICAgICAgICAgIDxEYXRlVGltZVRhYmxlQ2VsbCBkYXRldGltZT17dGhpcy5wcm9wcy5jcmVhdGVkfSBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkIHRleHQteHNcIi8+XG5cbiAgICAgICAgPC9kaXY+O1xuXG4gICAgfVxuXG59XG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgICByZWFkb25seSBpZDogc3RyaW5nO1xuICAgIHJlYWRvbmx5IHRleHQ/OiBzdHJpbmc7XG4gICAgcmVhZG9ubHkgaW1nPzogSW1nO1xuICAgIHJlYWRvbmx5IGNyZWF0ZWQ6IElTT0RhdGVUaW1lU3RyaW5nO1xuICAgIHJlYWRvbmx5IGNvbG9yOiBIaWdobGlnaHRDb2xvciB8IHVuZGVmaW5lZDtcbn1cbiJdfQ==