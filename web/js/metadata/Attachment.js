"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SerializedObject_1 = require("./SerializedObject");
const Preconditions_1 = require("polar-shared/src/Preconditions");
class Attachment extends SerializedObject_1.SerializedObject {
    constructor(opts) {
        super(opts);
        this.fileRef = opts.fileRef;
        this.init(opts);
    }
    validate() {
        super.validate();
        Preconditions_1.Preconditions.assertPresent(this.fileRef, "data");
    }
}
exports.Attachment = Attachment;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXR0YWNobWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkF0dGFjaG1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5REFBb0Q7QUFDcEQsa0VBQTZEO0FBSTdELE1BQWEsVUFBVyxTQUFRLG1DQUFnQjtJQUk1QyxZQUFtQixJQUFTO1FBRXhCLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVaLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUU1QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRXBCLENBQUM7SUFHTSxRQUFRO1FBRVgsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRWpCLDZCQUFhLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFFdEQsQ0FBQztDQUVKO0FBdkJELGdDQXVCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U2VyaWFsaXplZE9iamVjdH0gZnJvbSAnLi9TZXJpYWxpemVkT2JqZWN0JztcbmltcG9ydCB7UHJlY29uZGl0aW9uc30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9QcmVjb25kaXRpb25zJztcbmltcG9ydCB7SUF0dGFjaG1lbnR9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL21ldGFkYXRhL0lBdHRhY2htZW50XCI7XG5pbXBvcnQge0JhY2tlbmRGaWxlUmVmfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy9kYXRhc3RvcmUvQmFja2VuZEZpbGVSZWZcIjtcblxuZXhwb3J0IGNsYXNzIEF0dGFjaG1lbnQgZXh0ZW5kcyBTZXJpYWxpemVkT2JqZWN0IGltcGxlbWVudHMgSUF0dGFjaG1lbnQge1xuXG4gICAgcHVibGljIHJlYWRvbmx5IGZpbGVSZWY6IEJhY2tlbmRGaWxlUmVmO1xuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKG9wdHM6IGFueSkge1xuXG4gICAgICAgIHN1cGVyKG9wdHMpO1xuXG4gICAgICAgIHRoaXMuZmlsZVJlZiA9IG9wdHMuZmlsZVJlZjtcblxuICAgICAgICB0aGlzLmluaXQob3B0cyk7XG5cbiAgICB9XG5cblxuICAgIHB1YmxpYyB2YWxpZGF0ZSgpIHtcblxuICAgICAgICBzdXBlci52YWxpZGF0ZSgpO1xuXG4gICAgICAgIFByZWNvbmRpdGlvbnMuYXNzZXJ0UHJlc2VudCh0aGlzLmZpbGVSZWYsIFwiZGF0YVwiKTtcblxuICAgIH1cblxufVxuXG4iXX0=