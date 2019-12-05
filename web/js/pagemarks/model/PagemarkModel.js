"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DocMetaModel_1 = require("../../metadata/DocMetaModel");
const PageMetas_1 = require("../../metadata/PageMetas");
class PagemarkModel extends DocMetaModel_1.DocMetaModel {
    registerListener(docMeta, callback) {
        PageMetas_1.PageMetas.createModel(docMeta, "pagemarks", callback);
    }
}
exports.PagemarkModel = PagemarkModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFnZW1hcmtNb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlBhZ2VtYXJrTW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSw4REFBeUQ7QUFDekQsd0RBQW1EO0FBT25ELE1BQWEsYUFBYyxTQUFRLDJCQUFZO0lBRXBDLGdCQUFnQixDQUFDLE9BQWlCLEVBQUUsUUFBbUQ7UUFDMUYscUJBQVMsQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUMxRCxDQUFDO0NBRUo7QUFORCxzQ0FNQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RG9jTWV0YX0gZnJvbSAnLi4vLi4vbWV0YWRhdGEvRG9jTWV0YSc7XG5pbXBvcnQge0RvY01ldGFNb2RlbH0gZnJvbSAnLi4vLi4vbWV0YWRhdGEvRG9jTWV0YU1vZGVsJztcbmltcG9ydCB7UGFnZU1ldGFzfSBmcm9tICcuLi8uLi9tZXRhZGF0YS9QYWdlTWV0YXMnO1xuaW1wb3J0IHtBbm5vdGF0aW9uRXZlbnR9IGZyb20gJy4uLy4uL2Fubm90YXRpb25zL2NvbXBvbmVudHMvQW5ub3RhdGlvbkV2ZW50JztcbmltcG9ydCB7SURvY01ldGF9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL21ldGFkYXRhL0lEb2NNZXRhXCI7XG5cbi8qKlxuICpcbiAqL1xuZXhwb3J0IGNsYXNzIFBhZ2VtYXJrTW9kZWwgZXh0ZW5kcyBEb2NNZXRhTW9kZWwge1xuXG4gICAgcHVibGljIHJlZ2lzdGVyTGlzdGVuZXIoZG9jTWV0YTogSURvY01ldGEsIGNhbGxiYWNrOiAoY29tcG9uZW50RXZlbnQ6IEFubm90YXRpb25FdmVudCkgPT4gdm9pZCkge1xuICAgICAgICBQYWdlTWV0YXMuY3JlYXRlTW9kZWwoZG9jTWV0YSwgXCJwYWdlbWFya3NcIiwgY2FsbGJhY2spO1xuICAgIH1cblxufVxuIl19