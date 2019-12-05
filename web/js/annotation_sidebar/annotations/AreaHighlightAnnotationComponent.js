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
const AnnotationControlBar_1 = require("../AnnotationControlBar");
const ChildAnnotationSection_1 = require("../child_annotations/ChildAnnotationSection");
const ResponsiveImg_1 = require("../ResponsiveImg");
const HighlightColor_1 = require("polar-shared/src/metadata/HighlightColor");
const Image = (props) => {
    const { annotation } = props;
    const { img } = annotation;
    if (img) {
        return (React.createElement(ResponsiveImg_1.ResponsiveImg, { id: annotation.id, img: annotation.img, color: annotation.color }));
    }
    else {
        return (React.createElement("div", null, "No image"));
    }
};
class AreaHighlightAnnotationComponent extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }
    render() {
        const { props } = this;
        const { annotation } = this.props;
        const key = 'area-highlight' + annotation.id;
        const borderColor = HighlightColor_1.HighlightColors.toBackgroundColor(annotation.color, 0.7);
        return (React.createElement("div", { key: key, className: "p-1" },
            React.createElement("div", { className: "muted-color-root" },
                React.createElement("div", { style: {
                        borderLeft: `5px solid ${borderColor}`
                    } },
                    React.createElement(Image, { doc: props.doc, annotation: annotation })),
                React.createElement(AnnotationControlBar_1.AnnotationControlBar, { doc: this.props.doc, annotation: annotation })),
            React.createElement("div", { className: "comments" },
                React.createElement(ChildAnnotationSection_1.ChildAnnotationSection, { doc: this.props.doc, parent: annotation, docAnnotations: annotation.getChildren() }))));
    }
}
exports.AreaHighlightAnnotationComponent = AreaHighlightAnnotationComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXJlYUhpZ2hsaWdodEFubm90YXRpb25Db21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJBcmVhSGlnaGxpZ2h0QW5ub3RhdGlvbkNvbXBvbmVudC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsNkNBQStCO0FBRS9CLGtFQUE2RDtBQUM3RCx3RkFBbUY7QUFHbkYsb0RBQStDO0FBQy9DLDZFQUF5RTtBQUV6RSxNQUFNLEtBQUssR0FBRyxDQUFDLEtBQWEsRUFBRSxFQUFFO0lBRTVCLE1BQU0sRUFBQyxVQUFVLEVBQUMsR0FBRyxLQUFLLENBQUM7SUFDM0IsTUFBTSxFQUFDLEdBQUcsRUFBQyxHQUFHLFVBQVUsQ0FBQztJQUV6QixJQUFJLEdBQUcsRUFBRTtRQUVMLE9BQU8sQ0FDSCxvQkFBQyw2QkFBYSxJQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxVQUFVLENBQUMsS0FBSyxHQUFHLENBQ3BGLENBQUM7S0FDTDtTQUFNO1FBQ0gsT0FBTyxDQUNILDRDQUFtQixDQUN0QixDQUFDO0tBQ0w7QUFFTCxDQUFDLENBQUM7QUFFRixNQUFhLGdDQUFpQyxTQUFRLEtBQUssQ0FBQyxTQUF5QjtJQUVqRixZQUFZLEtBQWEsRUFBRSxPQUFZO1FBQ25DLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7SUFFcEIsQ0FBQztJQUVNLE1BQU07UUFDVCxNQUFNLEVBQUMsS0FBSyxFQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLE1BQU0sRUFBQyxVQUFVLEVBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBRWhDLE1BQU0sR0FBRyxHQUFHLGdCQUFnQixHQUFHLFVBQVUsQ0FBQyxFQUFFLENBQUM7UUFDN0MsTUFBTSxXQUFXLEdBQUcsZ0NBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRTdFLE9BQU8sQ0FNSCw2QkFBSyxHQUFHLEVBQUUsR0FBRyxFQUNSLFNBQVMsRUFBQyxLQUFLO1lBRWhCLDZCQUFLLFNBQVMsRUFBQyxrQkFBa0I7Z0JBRTdCLDZCQUFLLEtBQUssRUFBRTt3QkFDSixVQUFVLEVBQUUsYUFBYSxXQUFXLEVBQUU7cUJBQ3pDO29CQUVELG9CQUFDLEtBQUssSUFBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUcsRUFBRSxVQUFVLEVBQUUsVUFBVSxHQUFHLENBRTlDO2dCQUVOLG9CQUFDLDJDQUFvQixJQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFDbkIsVUFBVSxFQUFFLFVBQVUsR0FBRyxDQUU3QztZQUVOLDZCQUFLLFNBQVMsRUFBQyxVQUFVO2dCQUNyQixvQkFBQywrQ0FBc0IsSUFBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQ25CLE1BQU0sRUFBRSxVQUFVLEVBQ2xCLGNBQWMsRUFBRSxVQUFVLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FDakUsQ0FFSixDQUNULENBQUM7SUFFTixDQUFDO0NBRUo7QUFuREQsNEVBbURDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtEb2NBbm5vdGF0aW9ufSBmcm9tICcuLi9Eb2NBbm5vdGF0aW9uJztcbmltcG9ydCB7QW5ub3RhdGlvbkNvbnRyb2xCYXJ9IGZyb20gJy4uL0Fubm90YXRpb25Db250cm9sQmFyJztcbmltcG9ydCB7Q2hpbGRBbm5vdGF0aW9uU2VjdGlvbn0gZnJvbSAnLi4vY2hpbGRfYW5ub3RhdGlvbnMvQ2hpbGRBbm5vdGF0aW9uU2VjdGlvbic7XG5pbXBvcnQge0RvY30gZnJvbSAnLi4vLi4vbWV0YWRhdGEvRG9jJztcbmltcG9ydCB7TGF6eVByb3BzfSBmcm9tICcuLi8uLi9yZWFjdC9MYXp5Q29tcG9uZW50cyc7XG5pbXBvcnQge1Jlc3BvbnNpdmVJbWd9IGZyb20gJy4uL1Jlc3BvbnNpdmVJbWcnO1xuaW1wb3J0IHtIaWdobGlnaHRDb2xvcnN9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbWV0YWRhdGEvSGlnaGxpZ2h0Q29sb3InO1xuXG5jb25zdCBJbWFnZSA9IChwcm9wczogSVByb3BzKSA9PiB7XG5cbiAgICBjb25zdCB7YW5ub3RhdGlvbn0gPSBwcm9wcztcbiAgICBjb25zdCB7aW1nfSA9IGFubm90YXRpb247XG5cbiAgICBpZiAoaW1nKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxSZXNwb25zaXZlSW1nIGlkPXthbm5vdGF0aW9uLmlkfSBpbWc9e2Fubm90YXRpb24uaW1nfSBjb2xvcj17YW5ub3RhdGlvbi5jb2xvcn0vPlxuICAgICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2Pk5vIGltYWdlPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG59O1xuXG5leHBvcnQgY2xhc3MgQXJlYUhpZ2hsaWdodEFubm90YXRpb25Db21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJUHJvcHMsIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHt9O1xuXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge3Byb3BzfSA9IHRoaXM7XG4gICAgICAgIGNvbnN0IHthbm5vdGF0aW9ufSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgY29uc3Qga2V5ID0gJ2FyZWEtaGlnaGxpZ2h0JyArIGFubm90YXRpb24uaWQ7XG4gICAgICAgIGNvbnN0IGJvcmRlckNvbG9yID0gSGlnaGxpZ2h0Q29sb3JzLnRvQmFja2dyb3VuZENvbG9yKGFubm90YXRpb24uY29sb3IsIDAuNyk7XG5cbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgLy8gVE9ETzogd2UgbmVlZCB0aGUgYWJpbGl0eSB0byBzY3JvbGwgdG8gdGhlIG1vc3QgcmVjZW50XG4gICAgICAgICAgICAvLyBhbm5vdGF0aW9uIHRoYXQgaXMgY3JlYXRlZCBidXQgSSBuZWVkIGEgZnVuY3Rpb25hbCB3YXkgdG8gZG9cbiAgICAgICAgICAgIC8vIHRoaXMgYmVjYXVzZSBob3cgZG8gSSBkZXRlcm1pbmUgd2hlbiBpdCBsb3NlcyBmb2N1cz9cblxuICAgICAgICAgICAgPGRpdiBrZXk9e2tleX1cbiAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0xXCI+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm11dGVkLWNvbG9yLXJvb3RcIj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyTGVmdDogYDVweCBzb2xpZCAke2JvcmRlckNvbG9yfWBcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgZG9jPXtwcm9wcy5kb2N9IGFubm90YXRpb249e2Fubm90YXRpb259Lz5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8QW5ub3RhdGlvbkNvbnRyb2xCYXIgZG9jPXt0aGlzLnByb3BzLmRvY31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFubm90YXRpb249e2Fubm90YXRpb259Lz5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tZW50c1wiPlxuICAgICAgICAgICAgICAgICAgICA8Q2hpbGRBbm5vdGF0aW9uU2VjdGlvbiBkb2M9e3RoaXMucHJvcHMuZG9jfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQ9e2Fubm90YXRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY0Fubm90YXRpb25zPXthbm5vdGF0aW9uLmdldENoaWxkcmVuKCl9Lz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG5cbiAgICB9XG5cbn1cbmludGVyZmFjZSBJUHJvcHMgZXh0ZW5kcyBMYXp5UHJvcHMge1xuICAgIHJlYWRvbmx5IGRvYzogRG9jO1xuICAgIHJlYWRvbmx5IGFubm90YXRpb246IERvY0Fubm90YXRpb247XG59XG5cbmludGVyZmFjZSBJU3RhdGUgZXh0ZW5kcyBMYXp5UHJvcHMge1xufVxuXG4iXX0=