"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Preconditions_1 = require("polar-shared/src/Preconditions");
require("../../../../lib/TextHighlighter.js");
class TextHighlighterFactory {
    static newInstance(element, options) {
        Preconditions_1.Preconditions.assertNotNull(element, "element");
        return new global.TextHighlighter(element, options);
    }
}
exports.TextHighlighterFactory = TextHighlighterFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGV4dEhpZ2hsaWdodGVyRmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlRleHRIaWdobGlnaHRlckZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxrRUFBd0U7QUFFeEUsT0FBTyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7QUFJOUMsTUFBYSxzQkFBc0I7SUFFeEIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxPQUFvQixFQUFFLE9BQVk7UUFDeEQsNkJBQWEsQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ2hELE9BQU8sSUFBSSxNQUFNLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN4RCxDQUFDO0NBRUo7QUFQRCx3REFPQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aXNQcmVzZW50LCBQcmVjb25kaXRpb25zfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL1ByZWNvbmRpdGlvbnMnO1xuXG5yZXF1aXJlKFwiLi4vLi4vLi4vLi4vbGliL1RleHRIaWdobGlnaHRlci5qc1wiKTtcblxuZGVjbGFyZSB2YXIgZ2xvYmFsOiBhbnk7XG5cbmV4cG9ydCBjbGFzcyBUZXh0SGlnaGxpZ2h0ZXJGYWN0b3J5IHtcblxuICAgIHB1YmxpYyBzdGF0aWMgbmV3SW5zdGFuY2UoZWxlbWVudDogSFRNTEVsZW1lbnQsIG9wdGlvbnM6IGFueSk6IGFueSB7XG4gICAgICAgIFByZWNvbmRpdGlvbnMuYXNzZXJ0Tm90TnVsbChlbGVtZW50LCBcImVsZW1lbnRcIik7XG4gICAgICAgIHJldHVybiBuZXcgZ2xvYmFsLlRleHRIaWdobGlnaHRlcihlbGVtZW50LCBvcHRpb25zKTtcbiAgICB9XG5cbn1cbiJdfQ==