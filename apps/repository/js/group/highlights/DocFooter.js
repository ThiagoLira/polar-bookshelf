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
const GroupDocAddButton_1 = require("../GroupDocAddButton");
class DocFooter extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const { props } = this;
        const { docAnnotationProfileRecord } = props;
        const { profile } = this.props.docAnnotationProfileRecord;
        const docAnnotation = docAnnotationProfileRecord.value;
        if (profile) {
            return (React.createElement("div", { style: { display: 'flex' }, className: "pt-1" },
                React.createElement("div", { className: "text-bold mt-auto mb-auto", style: { flexGrow: 1 } }, docAnnotation.docRef.title || ""),
                React.createElement("div", { className: "text-bold mt-auto mb-auto" },
                    React.createElement(GroupDocAddButton_1.GroupDocAddButton, { persistenceLayerProvider: this.props.persistenceLayerProvider, groupID: this.props.groupID, fingerprint: docAnnotation.docRef.fingerprint }))));
        }
        else {
            return (React.createElement("div", null));
        }
    }
}
exports.DocFooter = DocFooter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jRm9vdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRG9jRm9vdGVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSw2Q0FBK0I7QUFTL0IsNERBQXVEO0FBR3ZELE1BQWEsU0FBVSxTQUFRLEtBQUssQ0FBQyxTQUF5QjtJQUUxRCxZQUFZLEtBQWEsRUFBRSxPQUFZO1FBQ25DLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVNLE1BQU07UUFFVCxNQUFNLEVBQUMsS0FBSyxFQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLE1BQU0sRUFBQywwQkFBMEIsRUFBQyxHQUFHLEtBQUssQ0FBQztRQUMzQyxNQUFNLEVBQUMsT0FBTyxFQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQywwQkFBMEIsQ0FBQztRQUN4RCxNQUFNLGFBQWEsR0FBRywwQkFBMEIsQ0FBQyxLQUFLLENBQUM7UUFFdkQsSUFBSSxPQUFPLEVBQUU7WUFFVCxPQUFPLENBRUgsNkJBQUssS0FBSyxFQUFFLEVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBQyxFQUFFLFNBQVMsRUFBQyxNQUFNO2dCQUUzQyw2QkFBSyxTQUFTLEVBQUMsMkJBQTJCLEVBQ3JDLEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUMsSUFFcEIsYUFBYSxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUksRUFBRSxDQUUvQjtnQkFFTiw2QkFBSyxTQUFTLEVBQUMsMkJBQTJCO29CQUV0QyxvQkFBQyxxQ0FBaUIsSUFBQyx3QkFBd0IsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLHdCQUF3QixFQUM3RCxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQzNCLFdBQVcsRUFBRSxhQUFhLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxDQUNqRSxDQUVKLENBRVQsQ0FBQztTQUVMO2FBQU07WUFFSCxPQUFPLENBQ0gsZ0NBQU0sQ0FDVCxDQUFDO1NBRUw7SUFFTCxDQUFDO0NBRUo7QUEvQ0QsOEJBK0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtQZXJzaXN0ZW5jZUxheWVyUHJvdmlkZXJ9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi93ZWIvanMvZGF0YXN0b3JlL1BlcnNpc3RlbmNlTGF5ZXJcIjtcbmltcG9ydCB7R3JvdXBEb2NBbm5vdGF0aW9ufSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vd2ViL2pzL2RhdGFzdG9yZS9zaGFyaW5nL2RiL2RvY19hbm5vdGF0aW9ucy9Hcm91cERvY0Fubm90YXRpb25zXCI7XG5pbXBvcnQge0RvY0Fubm90YXRpb25Db21wb25lbnR9IGZyb20gXCIuL2Fubm90YXRpb25zL0RvY0Fubm90YXRpb25Db21wb25lbnRcIjtcbmltcG9ydCB7UHJvZmlsZVJlY29yZH0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL3dlYi9qcy9kYXRhc3RvcmUvc2hhcmluZy9kYi9Qcm9maWxlSm9pbnNcIjtcbmltcG9ydCB7UHJvZmlsZX0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL3dlYi9qcy9kYXRhc3RvcmUvc2hhcmluZy9kYi9Qcm9maWxlc1wiO1xuaW1wb3J0IHtEb2NBbm5vdGF0aW9uTW9tZW50fSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vd2ViL2pzL2Fubm90YXRpb25fc2lkZWJhci9Eb2NBbm5vdGF0aW9uTW9tZW50XCI7XG5pbXBvcnQge0Jhc2VEb2NBbm5vdGF0aW9ufSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vd2ViL2pzL2RhdGFzdG9yZS9zaGFyaW5nL2RiL2RvY19hbm5vdGF0aW9ucy9CYXNlRG9jQW5ub3RhdGlvblwiO1xuaW1wb3J0IHtSZWxhdGl2ZU1vbWVudH0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL3dlYi9qcy91aS91dGlsL1JlbGF0aXZlTW9tZW50XCI7XG5pbXBvcnQge0dyb3VwRG9jQWRkQnV0dG9ufSBmcm9tIFwiLi4vR3JvdXBEb2NBZGRCdXR0b25cIjtcbmltcG9ydCB7R3JvdXBJRFN0cn0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL3dlYi9qcy9kYXRhc3RvcmUvRGF0YXN0b3JlXCI7XG5cbmV4cG9ydCBjbGFzcyBEb2NGb290ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJUHJvcHMsIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICBjb25zdCB7cHJvcHN9ID0gdGhpcztcbiAgICAgICAgY29uc3Qge2RvY0Fubm90YXRpb25Qcm9maWxlUmVjb3JkfSA9IHByb3BzO1xuICAgICAgICBjb25zdCB7cHJvZmlsZX0gPSB0aGlzLnByb3BzLmRvY0Fubm90YXRpb25Qcm9maWxlUmVjb3JkO1xuICAgICAgICBjb25zdCBkb2NBbm5vdGF0aW9uID0gZG9jQW5ub3RhdGlvblByb2ZpbGVSZWNvcmQudmFsdWU7XG5cbiAgICAgICAgaWYgKHByb2ZpbGUpIHtcblxuICAgICAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCd9fSBjbGFzc05hbWU9XCJwdC0xXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWJvbGQgbXQtYXV0byBtYi1hdXRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2ZsZXhHcm93OiAxfX0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtkb2NBbm5vdGF0aW9uLmRvY1JlZi50aXRsZSB8fCBcIlwifVxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ib2xkIG10LWF1dG8gbWItYXV0b1wiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JvdXBEb2NBZGRCdXR0b24gcGVyc2lzdGVuY2VMYXllclByb3ZpZGVyPXt0aGlzLnByb3BzLnBlcnNpc3RlbmNlTGF5ZXJQcm92aWRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncm91cElEPXt0aGlzLnByb3BzLmdyb3VwSUR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmluZ2VycHJpbnQ9e2RvY0Fubm90YXRpb24uZG9jUmVmLmZpbmdlcnByaW50fS8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2Lz5cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVByb3BzIHtcblxuICAgIHJlYWRvbmx5IHBlcnNpc3RlbmNlTGF5ZXJQcm92aWRlcjogUGVyc2lzdGVuY2VMYXllclByb3ZpZGVyO1xuICAgIHJlYWRvbmx5IGdyb3VwSUQ6IEdyb3VwSURTdHI7XG4gICAgcmVhZG9ubHkgZG9jQW5ub3RhdGlvblByb2ZpbGVSZWNvcmQ6IFByb2ZpbGVSZWNvcmQ8QmFzZURvY0Fubm90YXRpb24+O1xuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVN0YXRlIHtcbn1cbiJdfQ==