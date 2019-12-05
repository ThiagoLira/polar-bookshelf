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
const AnnotationTypes_1 = require("../../../../../../web/js/metadata/AnnotationTypes");
const HighlightColor_1 = require("polar-shared/src/metadata/HighlightColor");
const TextHighlights_1 = require("../../../../../../web/js/metadata/TextHighlights");
class TextHighlightDocAnnotationComponent extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }
    render() {
        const { props } = this;
        const { docAnnotationProfileRecord } = props;
        const docAnnotation = docAnnotationProfileRecord.value;
        const original = docAnnotation.original;
        const attrType = AnnotationTypes_1.AnnotationTypes.toDataAttribute(docAnnotation.annotationType);
        const html = TextHighlights_1.TextHighlights.toHTML(original) || "";
        const key = 'text-highlight-' + docAnnotation.id;
        const borderColor = HighlightColor_1.HighlightColors.toBackgroundColor(original.color, 0.7);
        return (React.createElement("div", { className: "m-0 mb-2" },
            React.createElement("div", { key: key, "data-annotation-id": docAnnotation.id, "data-annotation-type": attrType, "data-annotation-color": original.color, className: attrType },
                React.createElement("div", { style: { display: 'flex', flexDirection: 'column' } },
                    React.createElement("div", { style: { display: 'flex' } },
                        React.createElement("div", { className: "p-1", style: {
                                borderLeft: `5px solid ${borderColor}`
                            } }),
                        React.createElement("div", { className: "text-sm", dangerouslySetInnerHTML: { __html: html } }),
                        React.createElement("div", null)),
                    React.createElement("div", null)))));
    }
}
exports.TextHighlightDocAnnotationComponent = TextHighlightDocAnnotationComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGV4dEhpZ2hsaWdodERvY0Fubm90YXRpb25Db21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJUZXh0SGlnaGxpZ2h0RG9jQW5ub3RhdGlvbkNvbXBvbmVudC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsNkNBQStCO0FBQy9CLHVGQUFrRjtBQUNsRiw2RUFBeUU7QUFHekUscUZBQWdGO0FBTWhGLE1BQWEsbUNBQW9DLFNBQVEsS0FBSyxDQUFDLFNBQXlCO0lBRXBGLFlBQVksS0FBYSxFQUFFLE9BQVk7UUFDbkMsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztRQUV0QixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUVwQixDQUFDO0lBRU0sTUFBTTtRQUVULE1BQU0sRUFBQyxLQUFLLEVBQUMsR0FBRyxJQUFJLENBQUM7UUFDckIsTUFBTSxFQUFDLDBCQUEwQixFQUFDLEdBQUcsS0FBSyxDQUFDO1FBQzNDLE1BQU0sYUFBYSxHQUFHLDBCQUEwQixDQUFDLEtBQUssQ0FBQztRQUN2RCxNQUFNLFFBQVEsR0FBRyxhQUFhLENBQUMsUUFBMEIsQ0FBQztRQUUxRCxNQUFNLFFBQVEsR0FBRyxpQ0FBZSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFL0UsTUFBTSxJQUFJLEdBQUcsK0JBQWMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBRW5ELE1BQU0sR0FBRyxHQUFHLGlCQUFpQixHQUFHLGFBQWEsQ0FBQyxFQUFFLENBQUM7UUFFakQsTUFBTSxXQUFXLEdBQUcsZ0NBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRTNFLE9BQU8sQ0FFSCw2QkFBSyxTQUFTLEVBQUMsVUFBVTtZQUVyQiw2QkFBSyxHQUFHLEVBQUUsR0FBRyx3QkFDWSxhQUFhLENBQUMsRUFBRSwwQkFDZCxRQUFRLDJCQUNQLFFBQVEsQ0FBQyxLQUFLLEVBQ3JDLFNBQVMsRUFBRSxRQUFRO2dCQU9wQiw2QkFBSyxLQUFLLEVBQUUsRUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUM7b0JBRWxELDZCQUFLLEtBQUssRUFBRSxFQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUM7d0JBRXpCLDZCQUFLLFNBQVMsRUFBQyxLQUFLLEVBQ2YsS0FBSyxFQUFFO2dDQUNILFVBQVUsRUFBRSxhQUFhLFdBQVcsRUFBRTs2QkFDekMsR0FFQTt3QkFFTiw2QkFBSyxTQUFTLEVBQUMsU0FBUyxFQUNuQix1QkFBdUIsRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUMsR0FFdEM7d0JBRU4sZ0NBQU0sQ0FFSjtvQkFHTixnQ0FDTSxDQUVKLENBRUosQ0FFSixDQUNULENBQUM7SUFDTixDQUFDO0NBRUo7QUF2RUQsa0ZBdUVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtBbm5vdGF0aW9uVHlwZXN9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi93ZWIvanMvbWV0YWRhdGEvQW5ub3RhdGlvblR5cGVzXCI7XG5pbXBvcnQge0hpZ2hsaWdodENvbG9yc30gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvbWV0YWRhdGEvSGlnaGxpZ2h0Q29sb3JcIjtcbmltcG9ydCB7QmFzZURvY0Fubm90YXRpb259IGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi93ZWIvanMvZGF0YXN0b3JlL3NoYXJpbmcvZGIvZG9jX2Fubm90YXRpb25zL0Jhc2VEb2NBbm5vdGF0aW9uXCI7XG5pbXBvcnQge0lUZXh0SGlnaGxpZ2h0fSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy9tZXRhZGF0YS9JVGV4dEhpZ2hsaWdodFwiO1xuaW1wb3J0IHtUZXh0SGlnaGxpZ2h0c30gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uL3dlYi9qcy9tZXRhZGF0YS9UZXh0SGlnaGxpZ2h0c1wiO1xuaW1wb3J0IHtQcm9maWxlUmVjb3JkfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vd2ViL2pzL2RhdGFzdG9yZS9zaGFyaW5nL2RiL1Byb2ZpbGVKb2luc1wiO1xuXG4vKipcbiAqIEEgZ2VuZXJpYyB3cmFwcGVyIHRoYXQgZGV0ZXJtaW5lcyB3aGljaCBzdWItY29tcG9uZW50IHRvIHJlbmRlci5cbiAqL1xuZXhwb3J0IGNsYXNzIFRleHRIaWdobGlnaHREb2NBbm5vdGF0aW9uQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzLCBjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7fTtcblxuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgY29uc3Qge3Byb3BzfSA9IHRoaXM7XG4gICAgICAgIGNvbnN0IHtkb2NBbm5vdGF0aW9uUHJvZmlsZVJlY29yZH0gPSBwcm9wcztcbiAgICAgICAgY29uc3QgZG9jQW5ub3RhdGlvbiA9IGRvY0Fubm90YXRpb25Qcm9maWxlUmVjb3JkLnZhbHVlO1xuICAgICAgICBjb25zdCBvcmlnaW5hbCA9IGRvY0Fubm90YXRpb24ub3JpZ2luYWwgYXMgSVRleHRIaWdobGlnaHQ7XG5cbiAgICAgICAgY29uc3QgYXR0clR5cGUgPSBBbm5vdGF0aW9uVHlwZXMudG9EYXRhQXR0cmlidXRlKGRvY0Fubm90YXRpb24uYW5ub3RhdGlvblR5cGUpO1xuXG4gICAgICAgIGNvbnN0IGh0bWwgPSBUZXh0SGlnaGxpZ2h0cy50b0hUTUwob3JpZ2luYWwpIHx8IFwiXCI7XG5cbiAgICAgICAgY29uc3Qga2V5ID0gJ3RleHQtaGlnaGxpZ2h0LScgKyBkb2NBbm5vdGF0aW9uLmlkO1xuXG4gICAgICAgIGNvbnN0IGJvcmRlckNvbG9yID0gSGlnaGxpZ2h0Q29sb3JzLnRvQmFja2dyb3VuZENvbG9yKG9yaWdpbmFsLmNvbG9yLCAwLjcpO1xuXG4gICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS0wIG1iLTJcIj5cblxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtrZXl9XG4gICAgICAgICAgICAgICAgICAgICBkYXRhLWFubm90YXRpb24taWQ9e2RvY0Fubm90YXRpb24uaWR9XG4gICAgICAgICAgICAgICAgICAgICBkYXRhLWFubm90YXRpb24tdHlwZT17YXR0clR5cGV9XG4gICAgICAgICAgICAgICAgICAgICBkYXRhLWFubm90YXRpb24tY29sb3I9e29yaWdpbmFsLmNvbG9yfVxuICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXthdHRyVHlwZX0+XG5cbiAgICAgICAgICAgICAgICAgICAgey8qTk9URTogdGhpcyBIVE1MIGxheW91dCBpcyBzcGVjaWZpY2FsbHkgZGVzaWduZWQgdG8gcHJldmVudCAqL31cbiAgICAgICAgICAgICAgICAgICAgey8qZXhjZXNzIEhUTUwgZWxlbWVudCBjb3B5aW5nIHdoZW4gdGhlIHVzZXIgZG91YmxlIGNsaWNrcyB0aGUgKi99XG4gICAgICAgICAgICAgICAgICAgIHsvKnRleHQuICBQbGFjaW5nIHRoZSBlbGVtZW50cyBpbiB0aGUgZGl2IGxheW91dCBiZWxvdyAod2l0aCAqL31cbiAgICAgICAgICAgICAgICAgICAgey8qdHJhaWxpbmcgZW1wdHkgZGl2IGluIGEgZmxleGJveCBwYXJlbnQpIHByZXZlbnRzIHRoZSBmb3JtICovfVxuICAgICAgICAgICAgICAgICAgICB7Lypib3hlcyB0aGF0IGZvbGxvdyBmcm9tIGJlaW5nIHNlbGVjdGVkLiovfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJ319PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnfX0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckxlZnQ6IGA1cHggc29saWQgJHtib3JkZXJDb2xvcn1gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBodG1sfX0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG59XG5pbnRlcmZhY2UgSVByb3BzIHtcblxuICAgIHJlYWRvbmx5IGRvY0Fubm90YXRpb25Qcm9maWxlUmVjb3JkOiBQcm9maWxlUmVjb3JkPEJhc2VEb2NBbm5vdGF0aW9uPjtcblxufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcblxufVxuXG4iXX0=