"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AnnotationType_1 = require("polar-shared/src/metadata/AnnotationType");
class AnnotationHolders {
    static fromDocMeta(docMeta) {
        const result = [];
        for (const pageMeta of Object.values(docMeta.pageMetas || {})) {
            const pageInfo = pageMeta.pageInfo;
            const docInfo = docMeta.docInfo;
            result.push(...Object.values(pageMeta.areaHighlights || {})
                .map(current => this.fromAreaHighlight(current, pageInfo, docInfo)));
            result.push(...Object.values(pageMeta.textHighlights || {})
                .map(current => this.fromTextHighlight(current, pageInfo, docInfo)));
            result.push(...Object.values(pageMeta.comments || {})
                .map(current => this.fromComment(current, pageInfo, docInfo)));
            result.push(...Object.values(pageMeta.flashcards || {})
                .map(current => this.fromFlashcard(current, pageInfo, docInfo)));
        }
        return result;
    }
    static fromAreaHighlight(value, pageInfo, docInfo) {
        return { type: AnnotationType_1.AnnotationType.AREA_HIGHLIGHT, annotation: value, docInfo, pageInfo };
    }
    static fromTextHighlight(value, pageInfo, docInfo) {
        return { type: AnnotationType_1.AnnotationType.TEXT_HIGHLIGHT, annotation: value, docInfo, pageInfo };
    }
    static fromComment(value, pageInfo, docInfo) {
        return { type: AnnotationType_1.AnnotationType.COMMENT, annotation: value, docInfo, pageInfo };
    }
    static fromFlashcard(value, pageInfo, docInfo) {
        return { type: AnnotationType_1.AnnotationType.FLASHCARD, annotation: value, docInfo, pageInfo };
    }
}
exports.AnnotationHolders = AnnotationHolders;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW5ub3RhdGlvbkhvbGRlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJBbm5vdGF0aW9uSG9sZGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUtBLDZFQUF3RTtBQVl4RSxNQUFhLGlCQUFpQjtJQUVuQixNQUFNLENBQUMsV0FBVyxDQUFDLE9BQWlCO1FBRXZDLE1BQU0sTUFBTSxHQUF1QixFQUFFLENBQUM7UUFFdEMsS0FBSyxNQUFNLFFBQVEsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLElBQUksRUFBRSxDQUFDLEVBQUU7WUFFM0QsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQztZQUNuQyxNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDO1lBRWhDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxjQUFjLElBQUksRUFBRSxDQUFDO2lCQUN0RCxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFekUsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLGNBQWMsSUFBSSxFQUFFLENBQUM7aUJBQ3RELEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUV6RSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQztpQkFDaEQsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUVuRSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLEVBQUUsQ0FBQztpQkFDbEQsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUV4RTtRQUVELE9BQU8sTUFBTSxDQUFDO0lBRWxCLENBQUM7SUFFTSxNQUFNLENBQUMsaUJBQWlCLENBQUMsS0FBcUIsRUFBRSxRQUFvQixFQUFFLE9BQWtCO1FBQzNGLE9BQU8sRUFBQyxJQUFJLEVBQUUsK0JBQWMsQ0FBQyxjQUFjLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFDLENBQUM7SUFDdkYsQ0FBQztJQUdNLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxLQUFxQixFQUFFLFFBQW9CLEVBQUUsT0FBa0I7UUFDM0YsT0FBTyxFQUFDLElBQUksRUFBRSwrQkFBYyxDQUFDLGNBQWMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUMsQ0FBQztJQUN2RixDQUFDO0lBRU0sTUFBTSxDQUFDLFdBQVcsQ0FBQyxLQUFlLEVBQUUsUUFBb0IsRUFBRSxPQUFrQjtRQUMvRSxPQUFPLEVBQUMsSUFBSSxFQUFFLCtCQUFjLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBQyxDQUFDO0lBQ2hGLENBQUM7SUFFTSxNQUFNLENBQUMsYUFBYSxDQUFDLEtBQWlCLEVBQUUsUUFBb0IsRUFBRSxPQUFrQjtRQUNuRixPQUFPLEVBQUMsSUFBSSxFQUFFLCtCQUFjLENBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBQyxDQUFDO0lBQ2xGLENBQUM7Q0FFSjtBQTlDRCw4Q0E4Q0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RvY01ldGF9IGZyb20gXCIuL0RvY01ldGFcIjtcbmltcG9ydCB7QW5ub3RhdGlvbkhvbGRlcn0gZnJvbSBcIi4vQW5ub3RhdGlvbkhvbGRlclwiO1xuaW1wb3J0IHtBcmVhSGlnaGxpZ2h0fSBmcm9tICcuL0FyZWFIaWdobGlnaHQnO1xuaW1wb3J0IHtQYWdlSW5mb30gZnJvbSAnLi9QYWdlSW5mbyc7XG5pbXBvcnQge0RvY0luZm99IGZyb20gJy4vRG9jSW5mbyc7XG5pbXBvcnQge0Fubm90YXRpb25UeXBlfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL21ldGFkYXRhL0Fubm90YXRpb25UeXBlJztcbmltcG9ydCB7VGV4dEhpZ2hsaWdodH0gZnJvbSAnLi9UZXh0SGlnaGxpZ2h0JztcbmltcG9ydCB7Q29tbWVudH0gZnJvbSAnLi9Db21tZW50JztcbmltcG9ydCB7Rmxhc2hjYXJkfSBmcm9tICcuL0ZsYXNoY2FyZCc7XG5pbXBvcnQge0lEb2NJbmZvfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy9tZXRhZGF0YS9JRG9jSW5mb1wiO1xuaW1wb3J0IHtJRG9jTWV0YX0gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvbWV0YWRhdGEvSURvY01ldGFcIjtcbmltcG9ydCB7SVBhZ2VJbmZvfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy9tZXRhZGF0YS9JUGFnZUluZm9cIjtcbmltcG9ydCB7SUNvbW1lbnR9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL21ldGFkYXRhL0lDb21tZW50XCI7XG5pbXBvcnQge0lGbGFzaGNhcmR9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL21ldGFkYXRhL0lGbGFzaGNhcmRcIjtcbmltcG9ydCB7SVRleHRIaWdobGlnaHR9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL21ldGFkYXRhL0lUZXh0SGlnaGxpZ2h0XCI7XG5pbXBvcnQge0lBcmVhSGlnaGxpZ2h0fSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy9tZXRhZGF0YS9JQXJlYUhpZ2hsaWdodFwiO1xuXG5leHBvcnQgY2xhc3MgQW5ub3RhdGlvbkhvbGRlcnMge1xuXG4gICAgcHVibGljIHN0YXRpYyBmcm9tRG9jTWV0YShkb2NNZXRhOiBJRG9jTWV0YSk6IFJlYWRvbmx5QXJyYXk8QW5ub3RhdGlvbkhvbGRlcj4ge1xuXG4gICAgICAgIGNvbnN0IHJlc3VsdDogQW5ub3RhdGlvbkhvbGRlcltdID0gW107XG5cbiAgICAgICAgZm9yIChjb25zdCBwYWdlTWV0YSBvZiBPYmplY3QudmFsdWVzKGRvY01ldGEucGFnZU1ldGFzIHx8IHt9KSkge1xuXG4gICAgICAgICAgICBjb25zdCBwYWdlSW5mbyA9IHBhZ2VNZXRhLnBhZ2VJbmZvO1xuICAgICAgICAgICAgY29uc3QgZG9jSW5mbyA9IGRvY01ldGEuZG9jSW5mbztcblxuICAgICAgICAgICAgcmVzdWx0LnB1c2goLi4uT2JqZWN0LnZhbHVlcyhwYWdlTWV0YS5hcmVhSGlnaGxpZ2h0cyB8fCB7fSlcbiAgICAgICAgICAgICAgICAubWFwKGN1cnJlbnQgPT4gdGhpcy5mcm9tQXJlYUhpZ2hsaWdodChjdXJyZW50LCBwYWdlSW5mbywgZG9jSW5mbykpKTtcblxuICAgICAgICAgICAgcmVzdWx0LnB1c2goLi4uT2JqZWN0LnZhbHVlcyhwYWdlTWV0YS50ZXh0SGlnaGxpZ2h0cyB8fCB7fSlcbiAgICAgICAgICAgICAgICAubWFwKGN1cnJlbnQgPT4gdGhpcy5mcm9tVGV4dEhpZ2hsaWdodChjdXJyZW50LCBwYWdlSW5mbywgZG9jSW5mbykpKTtcblxuICAgICAgICAgICAgcmVzdWx0LnB1c2goLi4uT2JqZWN0LnZhbHVlcyhwYWdlTWV0YS5jb21tZW50cyB8fCB7fSlcbiAgICAgICAgICAgICAgICAubWFwKGN1cnJlbnQgPT4gdGhpcy5mcm9tQ29tbWVudChjdXJyZW50LCBwYWdlSW5mbywgZG9jSW5mbykpKTtcblxuICAgICAgICAgICAgcmVzdWx0LnB1c2goLi4uT2JqZWN0LnZhbHVlcyhwYWdlTWV0YS5mbGFzaGNhcmRzIHx8IHt9KVxuICAgICAgICAgICAgICAgIC5tYXAoY3VycmVudCA9PiB0aGlzLmZyb21GbGFzaGNhcmQoY3VycmVudCwgcGFnZUluZm8sIGRvY0luZm8pKSk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGZyb21BcmVhSGlnaGxpZ2h0KHZhbHVlOiBJQXJlYUhpZ2hsaWdodCwgcGFnZUluZm8/OiBJUGFnZUluZm8sIGRvY0luZm8/OiBJRG9jSW5mbyk6IEFubm90YXRpb25Ib2xkZXIge1xuICAgICAgICByZXR1cm4ge3R5cGU6IEFubm90YXRpb25UeXBlLkFSRUFfSElHSExJR0hULCBhbm5vdGF0aW9uOiB2YWx1ZSwgZG9jSW5mbywgcGFnZUluZm99O1xuICAgIH1cblxuXG4gICAgcHVibGljIHN0YXRpYyBmcm9tVGV4dEhpZ2hsaWdodCh2YWx1ZTogSVRleHRIaWdobGlnaHQsIHBhZ2VJbmZvPzogSVBhZ2VJbmZvLCBkb2NJbmZvPzogSURvY0luZm8pOiBBbm5vdGF0aW9uSG9sZGVyIHtcbiAgICAgICAgcmV0dXJuIHt0eXBlOiBBbm5vdGF0aW9uVHlwZS5URVhUX0hJR0hMSUdIVCwgYW5ub3RhdGlvbjogdmFsdWUsIGRvY0luZm8sIHBhZ2VJbmZvfTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGZyb21Db21tZW50KHZhbHVlOiBJQ29tbWVudCwgcGFnZUluZm8/OiBJUGFnZUluZm8sIGRvY0luZm8/OiBJRG9jSW5mbyk6IEFubm90YXRpb25Ib2xkZXIge1xuICAgICAgICByZXR1cm4ge3R5cGU6IEFubm90YXRpb25UeXBlLkNPTU1FTlQsIGFubm90YXRpb246IHZhbHVlLCBkb2NJbmZvLCBwYWdlSW5mb307XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBmcm9tRmxhc2hjYXJkKHZhbHVlOiBJRmxhc2hjYXJkLCBwYWdlSW5mbz86IElQYWdlSW5mbywgZG9jSW5mbz86IElEb2NJbmZvKTogQW5ub3RhdGlvbkhvbGRlciB7XG4gICAgICAgIHJldHVybiB7dHlwZTogQW5ub3RhdGlvblR5cGUuRkxBU0hDQVJELCBhbm5vdGF0aW9uOiB2YWx1ZSwgZG9jSW5mbywgcGFnZUluZm99O1xuICAgIH1cblxufVxuIl19