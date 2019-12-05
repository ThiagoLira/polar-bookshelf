"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DocFormatFactory_1 = require("../../docformat/DocFormatFactory");
const AnnotationPointers_1 = require("../../annotations/AnnotationPointers");
const Logger_1 = require("polar-shared/src/logger/Logger");
const Pagemarks_1 = require("../../metadata/Pagemarks");
const PagemarkRects_1 = require("../../metadata/PagemarkRects");
const PagemarkMode_1 = require("polar-shared/src/metadata/PagemarkMode");
const Rects_1 = require("../../Rects");
const Optional_1 = require("polar-shared/src/util/ts/Optional");
const RendererAnalytics_1 = require("../../ga/RendererAnalytics");
const DocMetas_1 = require("../../metadata/DocMetas");
const log = Logger_1.Logger.create();
class PagemarkController {
    constructor(model) {
        this.model = model;
        this.docFormat = DocFormatFactory_1.DocFormatFactory.getInstance();
    }
    start() {
        window.addEventListener("message", event => this.onMessageReceived(event), false);
    }
    onMessageReceived(event) {
        log.info("Received message: ", event);
        const triggerEvent = event.data;
        switch (event.data.type) {
            case "create-pagemark":
                this.onCreatePagemark(triggerEvent);
                break;
            case "delete-pagemark":
                this.onDeletePagemark(triggerEvent);
                break;
            case "set-pagemark-mode-pre-read":
                this.onSetPagemarkMode(triggerEvent, PagemarkMode_1.PagemarkMode.PRE_READ);
                break;
            case "set-pagemark-mode-read":
                this.onSetPagemarkMode(triggerEvent, PagemarkMode_1.PagemarkMode.READ);
                break;
            case "set-pagemark-mode-ignored":
                this.onSetPagemarkMode(triggerEvent, PagemarkMode_1.PagemarkMode.IGNORED);
                break;
            case "set-pagemark-mode-table-of-contents":
                this.onSetPagemarkMode(triggerEvent, PagemarkMode_1.PagemarkMode.TABLE_OF_CONTENTS);
                break;
            case "set-pagemark-mode-table-of-appendix":
                this.onSetPagemarkMode(triggerEvent, PagemarkMode_1.PagemarkMode.APPENDIX);
                break;
            case "set-pagemark-mode-table-of-references":
                this.onSetPagemarkMode(triggerEvent, PagemarkMode_1.PagemarkMode.REFERENCES);
                break;
        }
    }
    onCreatePagemark(triggerEvent) {
        RendererAnalytics_1.RendererAnalytics.event({ category: 'user', action: 'created-pagemark' });
        let elements = document.elementsFromPoint(triggerEvent.points.client.x, triggerEvent.points.client.y);
        elements = elements.filter(element => element.matches(".page"));
        if (elements.length === 1) {
            const pageElement = elements[0];
            log.info("Creating box on pageElement: ", pageElement);
            const pageNum = this.docFormat.getPageNumFromPageElement(pageElement);
            const pageElementPoint = triggerEvent.points.pageOffset;
            const boxRect = Rects_1.Rects.createFromBasicRect({
                left: pageElementPoint.x,
                top: pageElementPoint.y,
                width: 300,
                height: 300
            });
            log.info("Placing box at: ", boxRect);
            const containerRect = Rects_1.Rects.createFromBasicRect({
                left: 0,
                top: 0,
                width: pageElement.offsetWidth,
                height: pageElement.offsetHeight
            });
            const pagemarkRect = PagemarkRects_1.PagemarkRects.createFromPositionedRect(boxRect, containerRect);
            const pagemark = Pagemarks_1.Pagemarks.create({ rect: pagemarkRect });
            Pagemarks_1.Pagemarks.updatePagemark(this.model.docMeta, pageNum, pagemark);
            log.info("Using pagemarkRect: ", pagemarkRect);
        }
        else {
            log.warn("Wrong number of elements selected: " + elements.length);
        }
    }
    onDeletePagemark(triggerEvent) {
        RendererAnalytics_1.RendererAnalytics.event({ category: 'user', action: 'deleted-pagemark' });
        log.info("Deleting pagemark: ", triggerEvent);
        const pagemarkIDRef = this.toPagemarkID(triggerEvent);
        if (pagemarkIDRef) {
            Pagemarks_1.Pagemarks.deletePagemark(this.model.docMeta, pagemarkIDRef.pageNum, pagemarkIDRef.id);
        }
    }
    onSetPagemarkMode(triggerEvent, mode) {
        log.info("Setting pagemark mode: ", mode);
        const pagemarkIDRef = this.toPagemarkID(triggerEvent);
        if (pagemarkIDRef) {
            const pageNum = pagemarkIDRef.pageNum;
            const pageMeta = DocMetas_1.DocMetas.getPageMeta(this.model.docMeta, pageNum);
            const pagemark = pageMeta.pagemarks[pagemarkIDRef.id];
            if (pagemark) {
                const pagemarkPTR = {
                    ref: {
                        pageNum,
                        pagemark
                    },
                    batch: pagemark.batch,
                };
                Pagemarks_1.Pagemarks.replacePagemark(this.model.docMeta, pagemarkPTR, { mode });
            }
        }
    }
    toPagemarkID(triggerEvent) {
        const annotationPointers = AnnotationPointers_1.AnnotationPointers.toAnnotationPointers(".pagemark", triggerEvent);
        log.info("Working with annotationPointers: ", annotationPointers);
        return Optional_1.Optional.first(...annotationPointers).map(annotationPointer => {
            const pageMeta = DocMetas_1.DocMetas.getPageMeta(this.model.docMeta, annotationPointer.pageNum);
            return {
                pageNum: annotationPointer.pageNum,
                id: annotationPointer.id
            };
        }).getOrUndefined();
    }
}
exports.PagemarkController = PagemarkController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFnZW1hcmtDb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUGFnZW1hcmtDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsdUVBQWtFO0FBR2xFLDZFQUF3RTtBQUN4RSwyREFBc0Q7QUFDdEQsd0RBQWdFO0FBQ2hFLGdFQUEyRDtBQUMzRCx5RUFBb0U7QUFDcEUsdUNBQWtDO0FBQ2xDLGdFQUEyRDtBQUMzRCxrRUFBNkQ7QUFFN0Qsc0RBQWlEO0FBRWpELE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU1QixNQUFhLGtCQUFrQjtJQVUzQixZQUFZLEtBQVk7UUFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxtQ0FBZ0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNwRCxDQUFDO0lBRU0sS0FBSztRQUVSLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFFdEYsQ0FBQztJQUVPLGlCQUFpQixDQUFDLEtBQVU7UUFFaEMsR0FBRyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV0QyxNQUFNLFlBQVksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBRWhDLFFBQVEsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFFckIsS0FBSyxpQkFBaUI7Z0JBQ2xCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDcEMsTUFBTTtZQUVWLEtBQUssaUJBQWlCO2dCQUNsQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQ3BDLE1BQU07WUFFVixLQUFLLDRCQUE0QjtnQkFDN0IsSUFBSSxDQUFDLGlC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S0FBSyxFQUFFLFFBQVEsQ0FBQyxLQUFLO2lCQUV4QixDQUFDO2dCQUVGLHFCQUFTLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxFQUFDLElBQUksRUFBQyxDQUFDLENBQUM7YUFFdEU7U0FFSjtJQUdMLENBQUM7SUFDTyxZQUFZLENBQUMsWUFBMEI7UUFFM0MsTUFBTSxrQkFBa0IsR0FDbEIsdUNBQWtCLENBQUMsb0JBQW9CLENBQUMsV0FBVyxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBRXpFLEdBQUcsQ0FBQyxJQUFJLENBQUMsbUNBQW1DLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUVsRSxPQUFPLG1CQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsa0JBQWtCLENBQUMsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsRUFBRTtZQUNqRSxNQUFNLFFBQVEsR0FBRyxtQkFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUVyRixPQUFPO2dCQUNILE9BQU8sRUFBRSxpQkFBaUIsQ0FBQyxPQUFPO2dCQUNsQyxFQUFFLEVBQUUsaUJBQWlCLENBQUMsRUFBRTthQUMzQixDQUFDO1FBRU4sQ0FBQyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7SUFFeEIsQ0FBQztDQUdKO0FBeE1ELGdEQXdNQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TW9kZWx9IGZyb20gJy4uLy4uL21vZGVsL01vZGVsJztcbmltcG9ydCB7RG9jRm9ybWF0RmFjdG9yeX0gZnJvbSAnLi4vLi4vZG9jZm9ybWF0L0RvY0Zvcm1hdEZhY3RvcnknO1xuaW1wb3J0IHtEb2NGb3JtYXR9IGZyb20gJy4uLy4uL2RvY2Zvcm1hdC9Eb2NGb3JtYXQnO1xuaW1wb3J0IHtUcmlnZ2VyRXZlbnR9IGZyb20gJy4uLy4uL2NvbnRleHRtZW51L1RyaWdnZXJFdmVudCc7XG5pbXBvcnQge0Fubm90YXRpb25Qb2ludGVyc30gZnJvbSAnLi4vLi4vYW5ub3RhdGlvbnMvQW5ub3RhdGlvblBvaW50ZXJzJztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL2xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IHtQYWdlbWFya1BUUiwgUGFnZW1hcmtzfSBmcm9tICcuLi8uLi9tZXRhZGF0YS9QYWdlbWFya3MnO1xuaW1wb3J0IHtQYWdlbWFya1JlY3RzfSBmcm9tICcuLi8uLi9tZXRhZGF0YS9QYWdlbWFya1JlY3RzJztcbmltcG9ydCB7UGFnZW1hcmtNb2RlfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL21ldGFkYXRhL1BhZ2VtYXJrTW9kZSc7XG5pbXBvcnQge1JlY3RzfSBmcm9tICcuLi8uLi9SZWN0cyc7XG5pbXBvcnQge09wdGlvbmFsfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvdHMvT3B0aW9uYWwnO1xuaW1wb3J0IHtSZW5kZXJlckFuYWx5dGljc30gZnJvbSAnLi4vLi4vZ2EvUmVuZGVyZXJBbmFseXRpY3MnO1xuaW1wb3J0IHtQYWdlbWFya0lEUmVmfSBmcm9tICcuLi8uLi9tZXRhZGF0YS9QYWdlbWFyayc7XG5pbXBvcnQge0RvY01ldGFzfSBmcm9tICcuLi8uLi9tZXRhZGF0YS9Eb2NNZXRhcyc7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuZXhwb3J0IGNsYXNzIFBhZ2VtYXJrQ29udHJvbGxlciB7XG5cbiAgICBwcml2YXRlIG1vZGVsOiBNb2RlbDtcblxuICAgIHByaXZhdGUgZG9jRm9ybWF0OiBEb2NGb3JtYXQ7XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBtb2RlbCB7TW9kZWx9XG4gICAgICovXG4gICAgY29uc3RydWN0b3IobW9kZWw6IE1vZGVsKSB7XG4gICAgICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcbiAgICAgICAgdGhpcy5kb2NGb3JtYXQgPSBEb2NGb3JtYXRGYWN0b3J5LmdldEluc3RhbmNlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXJ0KCkge1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBldmVudCA9PiB0aGlzLm9uTWVzc2FnZVJlY2VpdmVkKGV2ZW50KSwgZmFsc2UpO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbk1lc3NhZ2VSZWNlaXZlZChldmVudDogYW55KSB7XG5cbiAgICAgICAgbG9nLmluZm8oXCJSZWNlaXZlZCBtZXNzYWdlOiBcIiwgZXZlbnQpO1xuXG4gICAgICAgIGNvbnN0IHRyaWdnZXJFdmVudCA9IGV2ZW50LmRhdGE7XG5cbiAgICAgICAgc3dpdGNoIChldmVudC5kYXRhLnR5cGUpIHtcblxuICAgICAgICAgICAgY2FzZSBcImNyZWF0ZS1wYWdlbWFya1wiOlxuICAgICAgICAgICAgICAgIHRoaXMub25DcmVhdGVQYWdlbWFyayh0cmlnZ2VyRXZlbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwiZGVsZXRlLXBhZ2VtYXJrXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5vbkRlbGV0ZVBhZ2VtYXJrKHRyaWdnZXJFdmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCJzZXQtcGFnZW1hcmstbW9kZS1wcmUtcmVhZFwiOlxuICAgICAgICAgICAgICAgIHRoaXMub25TZXRQYWdlbWFya01vZGUodHJpZ2dlckV2ZW50LCBQYWdlbWFya01vZGUuUFJFX1JFQUQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwic2V0LXBhZ2VtYXJrLW1vZGUtcmVhZFwiOlxuICAgICAgICAgICAgICAgIHRoaXMub25TZXRQYWdlbWFya01vZGUodHJpZ2dlckV2ZW50LCBQYWdlbWFya01vZGUuUkVBRCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCJzZXQtcGFnZW1hcmstbW9kZS1pZ25vcmVkXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5vblNldFBhZ2VtYXJrTW9kZSh0cmlnZ2VyRXZlbnQsIFBhZ2VtYXJrTW9kZS5JR05PUkVEKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcInNldC1wYWdlbWFyay1tb2RlLXRhYmxlLW9mLWNvbnRlbnRzXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5vblNldFBhZ2VtYXJrTW9kZSh0cmlnZ2VyRXZlbnQsIFBhZ2VtYXJrTW9kZS5UQUJMRV9PRl9DT05URU5UUyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCJzZXQtcGFnZW1hcmstbW9kZS10YWJsZS1vZi1hcHBlbmRpeFwiOlxuICAgICAgICAgICAgICAgIHRoaXMub25TZXRQYWdlbWFya01vZGUodHJpZ2dlckV2ZW50LCBQYWdlbWFya01vZGUuQVBQRU5ESVgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwic2V0LXBhZ2VtYXJrLW1vZGUtdGFibGUtb2YtcmVmZXJlbmNlc1wiOlxuICAgICAgICAgICAgICAgIHRoaXMub25TZXRQYWdlbWFya01vZGUodHJpZ2dlckV2ZW50LCBQYWdlbWFya01vZGUuUkVGRVJFTkNFUyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkNyZWF0ZVBhZ2VtYXJrKHRyaWdnZXJFdmVudDogVHJpZ2dlckV2ZW50KSB7XG5cbiAgICAgICAgUmVuZGVyZXJBbmFseXRpY3MuZXZlbnQoe2NhdGVnb3J5OiAndXNlcicsIGFjdGlvbjogJ2NyZWF0ZWQtcGFnZW1hcmsnfSk7XG5cbiAgICAgICAgLy8gY29udmVydCB0aGUgcG9pbnQgb24gdGhlIHBhZ2UgYW5kIHRoZW4gc2F2ZSBpdCBpbnRvIHRoZVxuICAgICAgICAvLyBtb2RlbC9kb2NNZXRhLi4uIHRoZSB2aWV3IHdpbGwgZG8gdGhlIHJlc3QuXG5cbiAgICAgICAgLy8gRklYTUUgbWlncmF0ZSB0aGlzIHRvIEFubm90YXRpb25SZWN0cyBub3cgYXMgdGhpcyBzaGFyZXMgYSBsb3Qgb2ZcbiAgICAgICAgLy8gY29kZSBoZXJlLi4uXG5cbiAgICAgICAgbGV0IGVsZW1lbnRzID0gZG9jdW1lbnQuZWxlbWVudHNGcm9tUG9pbnQodHJpZ2dlckV2ZW50LnBvaW50cy5jbGllbnQueCwgdHJpZ2dlckV2ZW50LnBvaW50cy5jbGllbnQueSk7XG5cbiAgICAgICAgZWxlbWVudHMgPSBlbGVtZW50cy5maWx0ZXIoZWxlbWVudCA9PiBlbGVtZW50Lm1hdGNoZXMoXCIucGFnZVwiKSk7XG5cbiAgICAgICAgaWYgKGVsZW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuXG4gICAgICAgICAgICBjb25zdCBwYWdlRWxlbWVudCA9IDxIVE1MRWxlbWVudD4gZWxlbWVudHNbMF07XG5cbiAgICAgICAgICAgIGxvZy5pbmZvKFwiQ3JlYXRpbmcgYm94IG9uIHBhZ2VFbGVtZW50OiBcIiwgcGFnZUVsZW1lbnQpO1xuXG4gICAgICAgICAgICBjb25zdCBwYWdlTnVtID0gdGhpcy5kb2NGb3JtYXQuZ2V0UGFnZU51bUZyb21QYWdlRWxlbWVudChwYWdlRWxlbWVudCk7XG5cbiAgICAgICAgICAgIC8vIGdldCB0aGUgcG9pbnQgd2l0aGluIHRoZSBlbGVtZW50IGl0c2VsZi4uXG4gICAgICAgICAgICBjb25zdCBwYWdlRWxlbWVudFBvaW50ID0gdHJpZ2dlckV2ZW50LnBvaW50cy5wYWdlT2Zmc2V0O1xuXG4gICAgICAgICAgICBjb25zdCBib3hSZWN0ID0gUmVjdHMuY3JlYXRlRnJvbUJhc2ljUmVjdCh7XG4gICAgICAgICAgICAgICAgbGVmdDogcGFnZUVsZW1lbnRQb2ludC54LFxuICAgICAgICAgICAgICAgIHRvcDogcGFnZUVsZW1lbnRQb2ludC55LFxuICAgICAgICAgICAgICAgIHdpZHRoOiAzMDAsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMDBcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBsb2cuaW5mbyhcIlBsYWNpbmcgYm94IGF0OiBcIiwgYm94UmVjdCk7XG5cbiAgICAgICAgICAgIC8vIGdldCBhIHJlY3QgZm9yIHRoZSBlbGVtZW50Li4uIHdlIHJlYWxseSBvbmx5IG5lZWQgdGhlIGRpbWVuc2lvbnNcbiAgICAgICAgICAgIC8vIHRob3VnaC4uIG5vdCB0aGUgd2lkdGggYW5kIGhlaWdodC5cbiAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lclJlY3QgPSBSZWN0cy5jcmVhdGVGcm9tQmFzaWNSZWN0KHtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICB3aWR0aDogcGFnZUVsZW1lbnQub2Zmc2V0V2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBwYWdlRWxlbWVudC5vZmZzZXRIZWlnaHRcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zdCBwYWdlbWFya1JlY3QgPSBQYWdlbWFya1JlY3RzLmNyZWF0ZUZyb21Qb3NpdGlvbmVkUmVjdChib3hSZWN0LCBjb250YWluZXJSZWN0KTtcblxuICAgICAgICAgICAgY29uc3QgcGFnZW1hcmsgPSBQYWdlbWFya3MuY3JlYXRlKHtyZWN0OiBwYWdlbWFya1JlY3R9KTtcblxuICAgICAgICAgICAgUGFnZW1hcmtzLnVwZGF0ZVBhZ2VtYXJrKHRoaXMubW9kZWwuZG9jTWV0YSwgcGFnZU51bSwgcGFnZW1hcmspO1xuXG4gICAgICAgICAgICBsb2cuaW5mbyhcIlVzaW5nIHBhZ2VtYXJrUmVjdDogXCIsIHBhZ2VtYXJrUmVjdCk7XG5cbiAgICAgICAgICAgIC8vIFRPRE86IGRvIHdlIHNvbWVob3cgbmVlZCB0byBmb2N1cyB0aGUgbmV3IHBhZ2VtYXJrLi4uXG5cbiAgICAgICAgICAgIC8vIHRoZSBvbmx5IHdheSB0byBkbyB0aGlzIGlzIHRvIHdhaXQgdW50aWwgdGhlIGNvbXBvbmVudCBpcyBhZGRlZFxuICAgICAgICAgICAgLy8gdG8gdGhlIERPTSBhbmQgSSB0aGluayB3ZSBjYW4gZG8gdGhpcyBieSBhZGRpbmcgYW4gZXZlbnRcbiAgICAgICAgICAgIC8vIGxpc3RlbmVyIHRoYXQganVzdCBmaXJlcyBvbmNlIGFuZCB0aGVuIGNhbGwgZm9jdXMoKSBvbiB0aGVcbiAgICAgICAgICAgIC8vIGVsZW1lbnQuXG5cbiAgICAgICAgICAgIC8vIHVwZGF0ZSB0aGUgRG9jTWV0YSB3aXRoIGEgcGFnZW1hcmsgb24gdGhpcyBwYWdlLi5cblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbG9nLndhcm4oXCJXcm9uZyBudW1iZXIgb2YgZWxlbWVudHMgc2VsZWN0ZWQ6IFwiICsgZWxlbWVudHMubGVuZ3RoKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkRlbGV0ZVBhZ2VtYXJrKHRyaWdnZXJFdmVudDogVHJpZ2dlckV2ZW50KSB7XG5cbiAgICAgICAgUmVuZGVyZXJBbmFseXRpY3MuZXZlbnQoe2NhdGVnb3J5OiAndXNlcicsIGFjdGlvbjogJ2RlbGV0ZWQtcGFnZW1hcmsnfSk7XG5cbiAgICAgICAgbG9nLmluZm8oXCJEZWxldGluZyBwYWdlbWFyazogXCIsIHRyaWdnZXJFdmVudCk7XG5cbiAgICAgICAgY29uc3QgcGFnZW1hcmtJRFJlZiA9IHRoaXMudG9QYWdlbWFya0lEKHRyaWdnZXJFdmVudCk7XG5cbiAgICAgICAgaWYgKHBhZ2VtYXJrSURSZWYpIHtcbiAgICAgICAgICAgIFBhZ2VtYXJrcy5kZWxldGVQYWdlbWFyayh0aGlzLm1vZGVsLmRvY01ldGEsIHBhZ2VtYXJrSURSZWYucGFnZU51bSwgcGFnZW1hcmtJRFJlZi5pZCk7XG4gICAgICAgIH1cblxuICAgIH1cblxuXG4gICAgcHJpdmF0ZSBvblNldFBhZ2VtYXJrTW9kZSh0cmlnZ2VyRXZlbnQ6IFRyaWdnZXJFdmVudCwgbW9kZTogUGFnZW1hcmtNb2RlKSB7XG5cbiAgICAgICAgbG9nLmluZm8oXCJTZXR0aW5nIHBhZ2VtYXJrIG1vZGU6IFwiLCBtb2RlKTtcblxuICAgICAgICBjb25zdCBwYWdlbWFya0lEUmVmID0gdGhpcy50b1BhZ2VtYXJrSUQodHJpZ2dlckV2ZW50KTtcblxuICAgICAgICBpZiAocGFnZW1hcmtJRFJlZikge1xuXG4gICAgICAgICAgICBjb25zdCBwYWdlTnVtID0gcGFnZW1hcmtJRFJlZi5wYWdlTnVtO1xuICAgICAgICAgICAgY29uc3QgcGFnZU1ldGEgPSBEb2NNZXRhcy5nZXRQYWdlTWV0YSh0aGlzLm1vZGVsLmRvY01ldGEsIHBhZ2VOdW0pO1xuICAgICAgICAgICAgY29uc3QgcGFnZW1hcmsgPSBwYWdlTWV0YS5wYWdlbWFya3NbcGFnZW1hcmtJRFJlZi5pZF07XG5cblxuICAgICAgICAgICAgaWYgKHBhZ2VtYXJrKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBwYWdlbWFya1BUUjogUGFnZW1hcmtQVFIgPSB7XG5cbiAgICAgICAgICAgICAgICAgICAgcmVmOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlTnVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFnZW1hcmtcbiAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICBiYXRjaDogcGFnZW1hcmsuYmF0Y2gsXG5cbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgUGFnZW1hcmtzLnJlcGxhY2VQYWdlbWFyayh0aGlzLm1vZGVsLmRvY01ldGEsIHBhZ2VtYXJrUFRSLCB7bW9kZX0pO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG5cbiAgICB9XG4gICAgcHJpdmF0ZSB0b1BhZ2VtYXJrSUQodHJpZ2dlckV2ZW50OiBUcmlnZ2VyRXZlbnQpOiBQYWdlbWFya0lEUmVmIHwgdW5kZWZpbmVkIHtcblxuICAgICAgICBjb25zdCBhbm5vdGF0aW9uUG9pbnRlcnNcbiAgICAgICAgICAgID0gQW5ub3RhdGlvblBvaW50ZXJzLnRvQW5ub3RhdGlvblBvaW50ZXJzKFwiLnBhZ2VtYXJrXCIsIHRyaWdnZXJFdmVudCk7XG5cbiAgICAgICAgbG9nLmluZm8oXCJXb3JraW5nIHdpdGggYW5ub3RhdGlvblBvaW50ZXJzOiBcIiwgYW5ub3RhdGlvblBvaW50ZXJzKTtcblxuICAgICAgICByZXR1cm4gT3B0aW9uYWwuZmlyc3QoLi4uYW5ub3RhdGlvblBvaW50ZXJzKS5tYXAoYW5ub3RhdGlvblBvaW50ZXIgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFnZU1ldGEgPSBEb2NNZXRhcy5nZXRQYWdlTWV0YSh0aGlzLm1vZGVsLmRvY01ldGEsIGFubm90YXRpb25Qb2ludGVyLnBhZ2VOdW0pO1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHBhZ2VOdW06IGFubm90YXRpb25Qb2ludGVyLnBhZ2VOdW0sXG4gICAgICAgICAgICAgICAgaWQ6IGFubm90YXRpb25Qb2ludGVyLmlkXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIH0pLmdldE9yVW5kZWZpbmVkKCk7XG5cbiAgICB9XG5cblxufVxuIl19