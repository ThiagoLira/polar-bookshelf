"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SerializedObject_1 = require("./SerializedObject");
const PagemarkType_1 = require("polar-shared/src/metadata/PagemarkType");
const Preconditions_1 = require("polar-shared/src/Preconditions");
class DocInfo extends SerializedObject_1.SerializedObject {
    constructor(val) {
        super();
        this.progress = 0;
        this.pagemarkType = PagemarkType_1.PagemarkType.SINGLE_COLUMN;
        this.properties = {};
        this.archived = false;
        this.flagged = false;
        this.tags = {};
        this.attachments = {};
        this.nrPages = val.nrPages;
        this.fingerprint = val.fingerprint;
        this.init(val);
    }
    setup() {
        this.progress = Preconditions_1.Preconditions.defaultValue(this.progress, 0);
        this.pagemarkType = this.pagemarkType || PagemarkType_1.PagemarkType.SINGLE_COLUMN;
        this.properties = Preconditions_1.Preconditions.defaultValue(this.properties, {});
    }
    validate() {
        Preconditions_1.Preconditions.assertNumber(this.nrPages, "nrPages");
        Preconditions_1.Preconditions.assertPresent(this.fingerprint, "fingerprint");
    }
}
exports.DocInfo = DocInfo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jSW5mby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkRvY0luZm8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFJQSx5REFBb0Q7QUFDcEQseUVBQW9FO0FBQ3BFLGtFQUE2RDtBQWE3RCxNQUFhLE9BQVEsU0FBUSxtQ0FBZ0I7SUEwQ3pDLFlBQVksR0FBYTtRQUVyQixLQUFLLEVBQUUsQ0FBQztRQXhDTCxhQUFRLEdBQVcsQ0FBQyxDQUFDO1FBQ3JCLGlCQUFZLEdBQUcsMkJBQVksQ0FBQyxhQUFhLENBQUM7UUFPMUMsZUFBVSxHQUEyQixFQUFFLENBQUM7UUFDeEMsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixZQUFPLEdBQVksS0FBSyxDQUFDO1FBSXpCLFNBQUksR0FBeUIsRUFBRSxDQUFDO1FBbUJoQyxnQkFBVyxHQUErQixFQUFFLENBQUM7UUFTaEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDO1FBQzNCLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDLFdBQVcsQ0FBQztRQUVuQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRW5CLENBQUM7SUFFTSxLQUFLO1FBRVIsSUFBSSxDQUFDLFFBQVEsR0FBRyw2QkFBYSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksSUFBSSwyQkFBWSxDQUFDLGFBQWEsQ0FBQztRQUNwRSxJQUFJLENBQUMsVUFBVSxHQUFHLDZCQUFhLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFdEUsQ0FBQztJQUVNLFFBQVE7UUFDWCw2QkFBYSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ3BELDZCQUFhLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDakUsQ0FBQztDQUVKO0FBbEVELDBCQWtFQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogTGlnaHR3ZWlnaHQgbWV0YWRhdGEgYWJvdXQgYSBkb2N1bWVudC4gV2UgZG8gbm90IGluY2x1ZGUgZnVsbCBwYWdlIG1ldGFkYXRhXG4gKiB3aXRoIHRoaXMgb2JqZWN0IHdoaWNoIG1ha2VzIGl0IGxpZ2h0d2VpZ2h0IHRvIHBhc3MgYXJvdW5kLlxuICovXG5pbXBvcnQge1NlcmlhbGl6ZWRPYmplY3R9IGZyb20gJy4vU2VyaWFsaXplZE9iamVjdCc7XG5pbXBvcnQge1BhZ2VtYXJrVHlwZX0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9tZXRhZGF0YS9QYWdlbWFya1R5cGUnO1xuaW1wb3J0IHtQcmVjb25kaXRpb25zfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL1ByZWNvbmRpdGlvbnMnO1xuaW1wb3J0IHtJU09EYXRlU3RyaW5nLCBJU09EYXRlVGltZVN0cmluZ30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9tZXRhZGF0YS9JU09EYXRlVGltZVN0cmluZ3MnO1xuaW1wb3J0IHtIYXNoY29kZX0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9tZXRhZGF0YS9IYXNoY29kZSc7XG5pbXBvcnQge1JlYWRpbmdPdmVydmlld30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9tZXRhZGF0YS9SZWFkaW5nT3ZlcnZpZXcnO1xuaW1wb3J0IHtBdHRhY2htZW50fSBmcm9tICcuL0F0dGFjaG1lbnQnO1xuaW1wb3J0IHtCYWNrZW5kfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL2RhdGFzdG9yZS9CYWNrZW5kJztcbmltcG9ydCB7VGFnfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3RhZ3MvVGFncyc7XG5pbXBvcnQge0RvY011dGF0aW5nLCBJRG9jSW5mbywgU2hhcmVTdHJhdGVneSwgU3RvcmVkUmVzb3VyY2V9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL21ldGFkYXRhL0lEb2NJbmZvXCI7XG5pbXBvcnQge1Zpc2liaWxpdHl9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL2RhdGFzdG9yZS9WaXNpYmlsaXR5XCI7XG5pbXBvcnQge0lEb2NBdXRob3J9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL21ldGFkYXRhL0lEb2NBdXRob3JcIjtcbmltcG9ydCB7SVRodW1ibmFpbH0gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvbWV0YWRhdGEvSVRodW1ibmFpbFwiO1xuaW1wb3J0IHtJVGV4dH0gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvbWV0YWRhdGEvVGV4dFwiO1xuXG5leHBvcnQgY2xhc3MgRG9jSW5mbyBleHRlbmRzIFNlcmlhbGl6ZWRPYmplY3QgaW1wbGVtZW50cyBJRG9jSW5mbyB7XG5cbiAgICBwdWJsaWMgbnJQYWdlczogbnVtYmVyO1xuICAgIHB1YmxpYyBmaW5nZXJwcmludDogc3RyaW5nO1xuICAgIHB1YmxpYyBwcm9ncmVzczogbnVtYmVyID0gMDtcbiAgICBwdWJsaWMgcGFnZW1hcmtUeXBlID0gUGFnZW1hcmtUeXBlLlNJTkdMRV9DT0xVTU47XG4gICAgcHVibGljIHRpdGxlPzogc3RyaW5nO1xuICAgIHB1YmxpYyBzdWJ0aXRsZT86IHN0cmluZztcbiAgICBwdWJsaWMgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gICAgcHVibGljIHVybD86IHN0cmluZztcbiAgICBwdWJsaWMgbGFzdE9wZW5lZD86IElTT0RhdGVUaW1lU3RyaW5nO1xuICAgIHB1YmxpYyBsYXN0VXBkYXRlZD86IElTT0RhdGVUaW1lU3RyaW5nO1xuICAgIHB1YmxpYyBwcm9wZXJ0aWVzOiB7W2lkOiBzdHJpbmddOiBzdHJpbmd9ID0ge307XG4gICAgcHVibGljIGFyY2hpdmVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHVibGljIGZsYWdnZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwdWJsaWMgYmFja2VuZD86IEJhY2tlbmQ7XG4gICAgcHVibGljIGZpbGVuYW1lPzogc3RyaW5nO1xuICAgIHB1YmxpYyBhZGRlZD86IElTT0RhdGVUaW1lU3RyaW5nO1xuICAgIHB1YmxpYyB0YWdzPzoge1tpZDogc3RyaW5nXTogVGFnfSA9IHt9O1xuICAgIHB1YmxpYyBuckNvbW1lbnRzPzogbnVtYmVyO1xuICAgIHB1YmxpYyBuck5vdGVzPzogbnVtYmVyO1xuICAgIHB1YmxpYyBuckZsYXNoY2FyZHM/OiBudW1iZXI7XG4gICAgcHVibGljIG5yVGV4dEhpZ2hsaWdodHM/OiBudW1iZXI7XG4gICAgcHVibGljIG5yQXJlYUhpZ2hsaWdodHM/OiBudW1iZXI7XG4gICAgcHVibGljIG5yQW5ub3RhdGlvbnM/OiBudW1iZXI7XG4gICAgcHVibGljIHV1aWQ/OiBzdHJpbmc7XG4gICAgcHVibGljIGhhc2hjb2RlPzogSGFzaGNvZGU7XG4gICAgcHVibGljIHJlZmVycmVyPzogc3RyaW5nO1xuICAgIHB1YmxpYyBzaGFyZVN0cmF0ZWd5PzogU2hhcmVTdHJhdGVneTtcbiAgICBwdWJsaWMgc3RvcmVkUmVzb3VyY2VzPzogU2V0PFN0b3JlZFJlc291cmNlPjtcbiAgICBwdWJsaWMgbXV0YXRpbmc/OiBEb2NNdXRhdGluZztcbiAgICBwdWJsaWMgcHVibGlzaGVkPzogSVNPRGF0ZVN0cmluZyB8IElTT0RhdGVUaW1lU3RyaW5nO1xuICAgIHB1YmxpYyBwdWJsaXNoZXI/OiBzdHJpbmc7XG4gICAgcHVibGljIGRvaT86IHN0cmluZztcbiAgICBwdWJsaWMgcG1pZD86IHN0cmluZztcbiAgICBwdWJsaWMgcmVhZGluZ1BlckRheT86IFJlYWRpbmdPdmVydmlldztcbiAgICBwdWJsaWMgdmlzaWJpbGl0eT86IFZpc2liaWxpdHk7XG4gICAgcHVibGljIGF0dGFjaG1lbnRzOiB7W2lkOiBzdHJpbmddOiBBdHRhY2htZW50fSA9IHt9O1xuICAgIHB1YmxpYyBhdXRob3JzPzogUmVhZG9ubHlBcnJheTxJRG9jQXV0aG9yPjtcbiAgICBwdWJsaWMgdGh1bWJuYWlscz86IHsgW2lkOiBzdHJpbmddOiBJVGh1bWJuYWlsIH07XG4gICAgcHVibGljIHN1bW1hcnk/OiBJVGV4dDtcblxuICAgIGNvbnN0cnVjdG9yKHZhbDogSURvY0luZm8pIHtcblxuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMubnJQYWdlcyA9IHZhbC5uclBhZ2VzO1xuICAgICAgICB0aGlzLmZpbmdlcnByaW50ID0gdmFsLmZpbmdlcnByaW50O1xuXG4gICAgICAgIHRoaXMuaW5pdCh2YWwpO1xuXG4gICAgfVxuXG4gICAgcHVibGljIHNldHVwKCkge1xuXG4gICAgICAgIHRoaXMucHJvZ3Jlc3MgPSBQcmVjb25kaXRpb25zLmRlZmF1bHRWYWx1ZSh0aGlzLnByb2dyZXNzLCAwKTtcbiAgICAgICAgdGhpcy5wYWdlbWFya1R5cGUgPSB0aGlzLnBhZ2VtYXJrVHlwZSB8fCBQYWdlbWFya1R5cGUuU0lOR0xFX0NPTFVNTjtcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzID0gUHJlY29uZGl0aW9ucy5kZWZhdWx0VmFsdWUodGhpcy5wcm9wZXJ0aWVzLCB7fSk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgdmFsaWRhdGUoKSB7XG4gICAgICAgIFByZWNvbmRpdGlvbnMuYXNzZXJ0TnVtYmVyKHRoaXMubnJQYWdlcywgXCJuclBhZ2VzXCIpO1xuICAgICAgICBQcmVjb25kaXRpb25zLmFzc2VydFByZXNlbnQodGhpcy5maW5nZXJwcmludCwgXCJmaW5nZXJwcmludFwiKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IHR5cGUgRG9jSW5mb0xpa2UgPSBEb2NJbmZvIHwgSURvY0luZm87XG4iXX0=