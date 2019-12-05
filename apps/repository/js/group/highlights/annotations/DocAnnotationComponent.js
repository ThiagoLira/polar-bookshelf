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
const TextHighlightDocAnnotationComponent_1 = require("./TextHighlightDocAnnotationComponent");
const Logger_1 = require("polar-shared/src/logger/Logger");
const Preconditions_1 = require("polar-shared/src/Preconditions");
const AnnotationType_1 = require("polar-shared/src/metadata/AnnotationType");
const AreaHighlightDocAnnotationComponent_1 = require("./AreaHighlightDocAnnotationComponent");
const log = Logger_1.Logger.create();
class DocAnnotationComponent extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }
    render() {
        const { docAnnotationProfileRecord } = this.props;
        const docAnnotation = docAnnotationProfileRecord.value;
        if (!Preconditions_1.isPresent(docAnnotation.id)) {
            log.warn("No annotation id!", docAnnotation);
            return;
        }
        if (docAnnotation.id.trim() === '') {
            log.warn("Empty annotation id");
            return;
        }
        const key = 'doc-annotation-' + docAnnotation.id;
        if (docAnnotation.annotationType === AnnotationType_1.AnnotationType.AREA_HIGHLIGHT) {
            return (React.createElement(AreaHighlightDocAnnotationComponent_1.AreaHighlightDocAnnotationComponent, { key: key, persistenceLayerProvider: this.props.persistenceLayerProvider, docAnnotationProfileRecord: docAnnotationProfileRecord }));
        }
        else if (docAnnotation.annotationType === AnnotationType_1.AnnotationType.TEXT_HIGHLIGHT) {
            return (React.createElement(TextHighlightDocAnnotationComponent_1.TextHighlightDocAnnotationComponent, { key: key, docAnnotationProfileRecord: docAnnotationProfileRecord }));
        }
        else {
            return React.createElement("div", null);
        }
    }
}
exports.DocAnnotationComponent = DocAnnotationComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jQW5ub3RhdGlvbkNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkRvY0Fubm90YXRpb25Db21wb25lbnQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUUvQiwrRkFBMEY7QUFDMUYsMkRBQXNEO0FBQ3RELGtFQUF5RDtBQUN6RCw2RUFBd0U7QUFFeEUsK0ZBQTBGO0FBRzFGLE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUs1QixNQUFhLHNCQUF1QixTQUFRLEtBQUssQ0FBQyxTQUF5QjtJQUV2RSxZQUFZLEtBQWEsRUFBRSxPQUFZO1FBQ25DLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7SUFFcEIsQ0FBQztJQUVNLE1BQU07UUFFVCxNQUFNLEVBQUMsMEJBQTBCLEVBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ2hELE1BQU0sYUFBYSxHQUFHLDBCQUEwQixDQUFDLEtBQUssQ0FBQztRQUV2RCxJQUFJLENBQUUseUJBQVMsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDL0IsR0FBRyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxhQUFhLENBQUMsQ0FBQztZQUM3QyxPQUFPO1NBQ1Y7UUFFRCxJQUFJLGFBQWEsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ2hDLEdBQUcsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztZQUNoQyxPQUFPO1NBQ1Y7UUFFRCxNQUFNLEdBQUcsR0FBRyxpQkFBaUIsR0FBRyxhQUFhLENBQUMsRUFBRSxDQUFDO1FBRWpELElBQUksYUFBYSxDQUFDLGNBQWMsS0FBSywrQkFBYyxDQUFDLGNBQWMsRUFBRTtZQUVoRSxPQUFPLENBRUgsb0JBQUMseUVBQW1DLElBQUMsR0FBRyxFQUFFLEdBQUcsRUFDUix3QkFBd0IsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLHdCQUF3QixFQUM3RCwwQkFBMEIsRUFBRSwwQkFBMEIsR0FBRyxDQUNqRyxDQUFDO1NBRUw7YUFBTSxJQUFJLGFBQWEsQ0FBQyxjQUFjLEtBQUssK0JBQWMsQ0FBQyxjQUFjLEVBQUU7WUFFdkUsT0FBTyxDQUNILG9CQUFDLHlFQUFtQyxJQUFDLEdBQUcsRUFBRSxHQUFHLEVBQ1IsMEJBQTBCLEVBQUUsMEJBQTBCLEdBQUcsQ0FDakcsQ0FBQztTQUVMO2FBQU07WUFDSCxPQUFPLGdDQUFNLENBQUM7U0FDakI7SUFHTCxDQUFDO0NBRUo7QUFqREQsd0RBaURDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtCYXNlRG9jQW5ub3RhdGlvbn0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uL3dlYi9qcy9kYXRhc3RvcmUvc2hhcmluZy9kYi9kb2NfYW5ub3RhdGlvbnMvQmFzZURvY0Fubm90YXRpb25cIjtcbmltcG9ydCB7VGV4dEhpZ2hsaWdodERvY0Fubm90YXRpb25Db21wb25lbnR9IGZyb20gXCIuL1RleHRIaWdobGlnaHREb2NBbm5vdGF0aW9uQ29tcG9uZW50XCI7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvbG9nZ2VyL0xvZ2dlclwiO1xuaW1wb3J0IHtpc1ByZXNlbnR9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvUHJlY29uZGl0aW9ucyc7XG5pbXBvcnQge0Fubm90YXRpb25UeXBlfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy9tZXRhZGF0YS9Bbm5vdGF0aW9uVHlwZVwiO1xuaW1wb3J0IHtQZXJzaXN0ZW5jZUxheWVyUHJvdmlkZXJ9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi93ZWIvanMvZGF0YXN0b3JlL1BlcnNpc3RlbmNlTGF5ZXJcIjtcbmltcG9ydCB7QXJlYUhpZ2hsaWdodERvY0Fubm90YXRpb25Db21wb25lbnR9IGZyb20gXCIuL0FyZWFIaWdobGlnaHREb2NBbm5vdGF0aW9uQ29tcG9uZW50XCI7XG5pbXBvcnQge1Byb2ZpbGVSZWNvcmR9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi8uLi93ZWIvanMvZGF0YXN0b3JlL3NoYXJpbmcvZGIvUHJvZmlsZUpvaW5zXCI7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuLyoqXG4gKiBBIGdlbmVyaWMgd3JhcHBlciB0aGF0IGRldGVybWluZXMgd2hpY2ggc3ViLWNvbXBvbmVudCB0byByZW5kZXIuXG4gKi9cbmV4cG9ydCBjbGFzcyBEb2NBbm5vdGF0aW9uQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzLCBjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7fTtcblxuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgY29uc3Qge2RvY0Fubm90YXRpb25Qcm9maWxlUmVjb3JkfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IGRvY0Fubm90YXRpb24gPSBkb2NBbm5vdGF0aW9uUHJvZmlsZVJlY29yZC52YWx1ZTtcblxuICAgICAgICBpZiAoISBpc1ByZXNlbnQoZG9jQW5ub3RhdGlvbi5pZCkpIHtcbiAgICAgICAgICAgIGxvZy53YXJuKFwiTm8gYW5ub3RhdGlvbiBpZCFcIiwgZG9jQW5ub3RhdGlvbik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZG9jQW5ub3RhdGlvbi5pZC50cmltKCkgPT09ICcnKSB7XG4gICAgICAgICAgICBsb2cud2FybihcIkVtcHR5IGFubm90YXRpb24gaWRcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBrZXkgPSAnZG9jLWFubm90YXRpb24tJyArIGRvY0Fubm90YXRpb24uaWQ7XG5cbiAgICAgICAgaWYgKGRvY0Fubm90YXRpb24uYW5ub3RhdGlvblR5cGUgPT09IEFubm90YXRpb25UeXBlLkFSRUFfSElHSExJR0hUKSB7XG5cbiAgICAgICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgICAgICA8QXJlYUhpZ2hsaWdodERvY0Fubm90YXRpb25Db21wb25lbnQga2V5PXtrZXl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcnNpc3RlbmNlTGF5ZXJQcm92aWRlcj17dGhpcy5wcm9wcy5wZXJzaXN0ZW5jZUxheWVyUHJvdmlkZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY0Fubm90YXRpb25Qcm9maWxlUmVjb3JkPXtkb2NBbm5vdGF0aW9uUHJvZmlsZVJlY29yZH0vPlxuICAgICAgICAgICAgKTtcblxuICAgICAgICB9IGVsc2UgaWYgKGRvY0Fubm90YXRpb24uYW5ub3RhdGlvblR5cGUgPT09IEFubm90YXRpb25UeXBlLlRFWFRfSElHSExJR0hUKSB7XG5cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPFRleHRIaWdobGlnaHREb2NBbm5vdGF0aW9uQ29tcG9uZW50IGtleT17a2V5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2NBbm5vdGF0aW9uUHJvZmlsZVJlY29yZD17ZG9jQW5ub3RhdGlvblByb2ZpbGVSZWNvcmR9Lz5cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiA8ZGl2Lz47XG4gICAgICAgIH1cblxuXG4gICAgfVxuXG59XG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgICByZWFkb25seSBwZXJzaXN0ZW5jZUxheWVyUHJvdmlkZXI6IFBlcnNpc3RlbmNlTGF5ZXJQcm92aWRlcjtcbiAgICByZWFkb25seSBkb2NBbm5vdGF0aW9uUHJvZmlsZVJlY29yZDogUHJvZmlsZVJlY29yZDxCYXNlRG9jQW5ub3RhdGlvbj47XG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xuXG59XG5cbiJdfQ==