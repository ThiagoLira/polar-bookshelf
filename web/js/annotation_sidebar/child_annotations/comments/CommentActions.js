"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Logger_1 = require("polar-shared/src/logger/Logger");
const Refs_1 = require("polar-shared/src/metadata/Refs");
const Comments_1 = require("../../../metadata/Comments");
const ISODateTimeStrings_1 = require("polar-shared/src/metadata/ISODateTimeStrings");
const DocMetas_1 = require("../../../metadata/DocMetas");
const log = Logger_1.Logger.create();
class CommentActions {
    static delete(comment) {
        log.info("Comment deleted: ", comment);
        delete comment.pageMeta.comments[comment.id];
    }
    static create(docMeta, annotation, html) {
        const ref = Refs_1.Refs.createFromAnnotationType(annotation.id, annotation.annotationType);
        const comment = Comments_1.Comments.createHTMLComment(html, ref);
        const pageMeta = DocMetas_1.DocMetas.getPageMeta(docMeta, annotation.pageMeta.pageInfo.num);
        pageMeta.comments[comment.id] = comment;
    }
    static update(docMeta, annotation, html, existingComment) {
        const ref = Refs_1.Refs.createFromAnnotationType(annotation.id, annotation.annotationType);
        const comment = Comments_1.Comments.createHTMLComment(html, ref, existingComment.created, ISODateTimeStrings_1.ISODateTimeStrings.create());
        DocMetas_1.DocMetas.withBatchedMutations(docMeta, () => {
            delete annotation.pageMeta.comments[existingComment.id];
            annotation.pageMeta.comments[comment.id] = comment;
        });
    }
}
exports.CommentActions = CommentActions;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tbWVudEFjdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJDb21tZW50QWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJEQUFzRDtBQUV0RCx5REFBb0Q7QUFFcEQseURBQW9EO0FBQ3BELHFGQUFnRjtBQUNoRix5REFBb0Q7QUFHcEQsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBSzVCLE1BQWEsY0FBYztJQUVoQixNQUFNLENBQUMsTUFBTSxDQUFDLE9BQXVCO1FBQ3hDLEdBQUcsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdkMsT0FBTyxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVNLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBaUIsRUFDakIsVUFBMEIsRUFDMUIsSUFBWTtRQUU3QixNQUFNLEdBQUcsR0FBRyxXQUFJLENBQUMsd0JBQXdCLENBQUMsVUFBVSxDQUFDLEVBQUUsRUFDYixVQUFVLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFckUsTUFBTSxPQUFPLEdBQUcsbUJBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFHdEQsTUFBTSxRQUFRLEdBQUcsbUJBQVEsQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRWpGLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQztJQUU1QyxDQUFDO0lBRU0sTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFpQixFQUNqQixVQUF5QixFQUN6QixJQUFZLEVBQ1osZUFBd0I7UUFFekMsTUFBTSxHQUFHLEdBQUcsV0FBSSxDQUFDLHdCQUF3QixDQUFDLFVBQVUsQ0FBQyxFQUFFLEVBQ2IsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRXJFLE1BQU0sT0FBTyxHQUFHLG1CQUFRLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUNKLEdBQUcsRUFDSCxlQUFlLENBQUMsT0FBTyxFQUN2Qix1Q0FBa0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBRXhFLG1CQUFRLENBQUMsb0JBQW9CLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtZQUV4QyxPQUFPLFVBQVUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN4RCxVQUFVLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDO1FBRXZELENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQztDQUVKO0FBN0NELHdDQTZDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TG9nZ2VyfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy9sb2dnZXIvTG9nZ2VyXCI7XG5pbXBvcnQge0RvY0Fubm90YXRpb24sIElEb2NBbm5vdGF0aW9ufSBmcm9tIFwiLi4vLi4vRG9jQW5ub3RhdGlvblwiO1xuaW1wb3J0IHtSZWZzfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy9tZXRhZGF0YS9SZWZzXCI7XG5pbXBvcnQge0NvbW1lbnR9IGZyb20gXCIuLi8uLi8uLi9tZXRhZGF0YS9Db21tZW50XCI7XG5pbXBvcnQge0NvbW1lbnRzfSBmcm9tIFwiLi4vLi4vLi4vbWV0YWRhdGEvQ29tbWVudHNcIjtcbmltcG9ydCB7SVNPRGF0ZVRpbWVTdHJpbmdzfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy9tZXRhZGF0YS9JU09EYXRlVGltZVN0cmluZ3NcIjtcbmltcG9ydCB7RG9jTWV0YXN9IGZyb20gXCIuLi8uLi8uLi9tZXRhZGF0YS9Eb2NNZXRhc1wiO1xuaW1wb3J0IHtJRG9jTWV0YX0gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvbWV0YWRhdGEvSURvY01ldGFcIjtcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG4vKipcbiAqIEFjdGlvbnMgdGhhdCBjYW4gYmUgcGVyZm9ybWVkIG9uIGNvbW1lbnRzIGluIHRoZSBVSVxuICovXG5leHBvcnQgY2xhc3MgQ29tbWVudEFjdGlvbnMge1xuXG4gICAgcHVibGljIHN0YXRpYyBkZWxldGUoY29tbWVudDogSURvY0Fubm90YXRpb24pIHtcbiAgICAgICAgbG9nLmluZm8oXCJDb21tZW50IGRlbGV0ZWQ6IFwiLCBjb21tZW50KTtcbiAgICAgICAgZGVsZXRlIGNvbW1lbnQucGFnZU1ldGEuY29tbWVudHNbY29tbWVudC5pZF07XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGUoZG9jTWV0YTogSURvY01ldGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgYW5ub3RhdGlvbjogSURvY0Fubm90YXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgaHRtbDogc3RyaW5nKSB7XG5cbiAgICAgICAgY29uc3QgcmVmID0gUmVmcy5jcmVhdGVGcm9tQW5ub3RhdGlvblR5cGUoYW5ub3RhdGlvbi5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5ub3RhdGlvbi5hbm5vdGF0aW9uVHlwZSk7XG5cbiAgICAgICAgY29uc3QgY29tbWVudCA9IENvbW1lbnRzLmNyZWF0ZUhUTUxDb21tZW50KGh0bWwsIHJlZik7XG5cbiAgICAgICAgLy8gbWFrZSBzdXJlIHRvIHVwZGF0ZSBvbiB0aGUgcHJpbWFyeSBwYWdlIG1ldGFcbiAgICAgICAgY29uc3QgcGFnZU1ldGEgPSBEb2NNZXRhcy5nZXRQYWdlTWV0YShkb2NNZXRhLCBhbm5vdGF0aW9uLnBhZ2VNZXRhLnBhZ2VJbmZvLm51bSk7XG5cbiAgICAgICAgcGFnZU1ldGEuY29tbWVudHNbY29tbWVudC5pZF0gPSBjb21tZW50O1xuXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyB1cGRhdGUoZG9jTWV0YTogSURvY01ldGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgYW5ub3RhdGlvbjogRG9jQW5ub3RhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICBodG1sOiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdDb21tZW50OiBDb21tZW50KSB7XG5cbiAgICAgICAgY29uc3QgcmVmID0gUmVmcy5jcmVhdGVGcm9tQW5ub3RhdGlvblR5cGUoYW5ub3RhdGlvbi5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5ub3RhdGlvbi5hbm5vdGF0aW9uVHlwZSk7XG5cbiAgICAgICAgY29uc3QgY29tbWVudCA9IENvbW1lbnRzLmNyZWF0ZUhUTUxDb21tZW50KGh0bWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ0NvbW1lbnQuY3JlYXRlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIElTT0RhdGVUaW1lU3RyaW5ncy5jcmVhdGUoKSk7XG5cbiAgICAgICAgRG9jTWV0YXMud2l0aEJhdGNoZWRNdXRhdGlvbnMoZG9jTWV0YSwgKCkgPT4ge1xuXG4gICAgICAgICAgICBkZWxldGUgYW5ub3RhdGlvbi5wYWdlTWV0YS5jb21tZW50c1tleGlzdGluZ0NvbW1lbnQuaWRdO1xuICAgICAgICAgICAgYW5ub3RhdGlvbi5wYWdlTWV0YS5jb21tZW50c1tjb21tZW50LmlkXSA9IGNvbW1lbnQ7XG5cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbn1cbiJdfQ==