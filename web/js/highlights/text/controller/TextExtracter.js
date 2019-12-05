"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TextRect_1 = require("../../../metadata/TextRect");
const Preconditions_1 = require("polar-shared/src/Preconditions");
const JQuery_1 = __importDefault(require("../../../ui/JQuery"));
class TextExtracter {
    static toTextSelections(textHighlightRows) {
        let result = [];
        textHighlightRows.forEach(function (textHighlightRow) {
            Preconditions_1.Preconditions.assertNotNull(textHighlightRow.rectElements, "rectElements");
            textHighlightRow.rectElements.forEach(function (rectElement) {
                const textSelection = new TextRect_1.TextRect({
                    rect: rectElement.rect,
                    text: JQuery_1.default(rectElement.element).text()
                });
                result.push(textSelection);
            });
        });
        return result;
    }
}
exports.TextExtracter = TextExtracter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGV4dEV4dHJhY3Rlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlRleHRFeHRyYWN0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSx5REFBb0Q7QUFDcEQsa0VBQTZEO0FBQzdELGdFQUFtQztBQUtuQyxNQUFhLGFBQWE7SUFFdEIsTUFBTSxDQUFDLGdCQUFnQixDQUFDLGlCQUFxQztRQUV6RCxJQUFJLE1BQU0sR0FBZSxFQUV4QixDQUFDO1FBRUYsaUJBQWlCLENBQUMsT0FBTyxDQUFDLFVBQVUsZ0JBQWdCO1lBRWhELDZCQUFhLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxjQUFjLENBQUMsQ0FBQztZQUUzRSxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVMsV0FBVztnQkFFdEQsTUFBTSxhQUFhLEdBQUcsSUFBSSxtQkFBUSxDQUFDO29CQUMvQixJQUFJLEVBQUUsV0FBVyxDQUFDLElBQUk7b0JBQ3RCLElBQUksRUFBRSxnQkFBQyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUU7aUJBQ3RDLENBQUMsQ0FBQztnQkFFSCxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBRS9CLENBQUMsQ0FBQyxDQUFDO1FBRVAsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLE1BQU0sQ0FBQztJQUVsQixDQUFDO0NBRUo7QUE3QkQsc0NBNkJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtUZXh0SGlnaGxpZ2h0Um93fSBmcm9tICcuL1RleHRIaWdobGlnaHRSb3cnO1xuaW1wb3J0IHtUZXh0UmVjdH0gZnJvbSAnLi4vLi4vLi4vbWV0YWRhdGEvVGV4dFJlY3QnO1xuaW1wb3J0IHtQcmVjb25kaXRpb25zfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL1ByZWNvbmRpdGlvbnMnO1xuaW1wb3J0ICQgZnJvbSAnLi4vLi4vLi4vdWkvSlF1ZXJ5JztcblxuLyoqXG4gKiBUYWtlcyBUZXh0SGlnaGxpZ2h0Um93cyBhbmQgdGhlbiBidWlsZHMgYWRqYWNlbnQgdGVzdCBydW5zIGZyb20gdGhlIGRhdGEuXG4gKi9cbmV4cG9ydCBjbGFzcyBUZXh0RXh0cmFjdGVyIHtcblxuICAgIHN0YXRpYyB0b1RleHRTZWxlY3Rpb25zKHRleHRIaWdobGlnaHRSb3dzOiBUZXh0SGlnaGxpZ2h0Um93W10pIHtcblxuICAgICAgICBsZXQgcmVzdWx0OiBUZXh0UmVjdFtdID0gW1xuXG4gICAgICAgIF07XG5cbiAgICAgICAgdGV4dEhpZ2hsaWdodFJvd3MuZm9yRWFjaChmdW5jdGlvbiAodGV4dEhpZ2hsaWdodFJvdykge1xuXG4gICAgICAgICAgICBQcmVjb25kaXRpb25zLmFzc2VydE5vdE51bGwodGV4dEhpZ2hsaWdodFJvdy5yZWN0RWxlbWVudHMsIFwicmVjdEVsZW1lbnRzXCIpO1xuXG4gICAgICAgICAgICB0ZXh0SGlnaGxpZ2h0Um93LnJlY3RFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKHJlY3RFbGVtZW50KSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCB0ZXh0U2VsZWN0aW9uID0gbmV3IFRleHRSZWN0KHtcbiAgICAgICAgICAgICAgICAgICAgcmVjdDogcmVjdEVsZW1lbnQucmVjdCxcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJChyZWN0RWxlbWVudC5lbGVtZW50KS50ZXh0KClcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHRleHRTZWxlY3Rpb24pO1xuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuXG4gICAgfVxuXG59XG4iXX0=