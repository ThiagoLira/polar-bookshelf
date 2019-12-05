"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Logger_1 = require("polar-shared/src/logger/Logger");
const DocFormatFactory_1 = require("../../docformat/DocFormatFactory");
const KeyEvents_1 = require("../../KeyEvents");
const Elements_1 = require("../../util/Elements");
const RendererAnalytics_1 = require("../../ga/RendererAnalytics");
const Percentages_1 = require("polar-shared/src/util/Percentages");
const DocMetas_1 = require("../../metadata/DocMetas");
const log = Logger_1.Logger.create();
class PagemarkCoverageEventListener {
    constructor(controller, model) {
        this.keyActivated = false;
        this.controller = controller;
        this.model = model;
        this.docFormat = DocFormatFactory_1.DocFormatFactory.getInstance();
    }
    start() {
        log.info("Starting...");
        this.model.registerListenerForDocumentLoaded(() => this.onDocumentLoaded());
        window.addEventListener("message", event => this.onMessageReceived(event), false);
        log.info("Starting...done");
    }
    onMessageReceived(event) {
        log.info("Received message: ", event);
        const triggerEvent = event.data;
        switch (event.data.type) {
            case "create-pagemark-to-point":
                this.onContextMenuCreatePagemarkToPoint(triggerEvent)
                    .catch(err => log.error("Unable to create pagemark: ", err));
                break;
        }
    }
    onDocumentLoaded() {
        log.info("Document loaded... installing listeners...");
        document.addEventListener("keyup", event => this.keyListener(event));
        document.addEventListener("keydown", event => this.keyListener(event));
        const pageElements = Array.from(document.querySelectorAll(".page"));
        for (const pageElement of pageElements) {
            pageElement.addEventListener("click", event => this.mouseListener(event));
        }
        if (pageElements.length === 0) {
            log.warn("No pages found for click listener.");
        }
        else {
            log.debug("Added click listener to N pages: " + pageElements.length);
        }
        log.info("Document loaded... installing listeners...done");
    }
    keyListener(event) {
        if (!event) {
            throw new Error("no event");
        }
        this.keyActivated = KeyEvents_1.KeyEvents.isKeyMetaActive(event);
    }
    mouseListener(event) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!event) {
                throw new Error("no event");
            }
            if (!this.keyActivated) {
                return;
            }
            yield this.onMouseEventCreatePagemarkToPoint(event);
        });
    }
    onContextMenuCreatePagemarkToPoint(triggerEvent) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pageElement = this.docFormat.getPageElementFromPageNum(triggerEvent.pageNum);
                const pageNum = triggerEvent.pageNum;
                const verticalOffsetWithinPageElement = triggerEvent.points.pageOffset.y;
                this.createPagemarkAtPoint(pageNum, pageElement, verticalOffsetWithinPageElement)
                    .catch(err => log.error("Failed to create pagemark: ", err));
            }
            finally {
                RendererAnalytics_1.RendererAnalytics.event({ category: 'user', action: 'created-pagemark-via-context-menu' });
            }
        });
    }
    onMouseEventCreatePagemarkToPoint(event) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pageElement = Elements_1.Elements.untilRoot(event.currentTarget, ".page");
                const pageNum = this.docFormat.getPageNumFromPageElement(pageElement);
                const eventTargetOffset = Elements_1.Elements.getRelativeOffsetRect(event.target, pageElement);
                const verticalOffsetWithinPageElement = eventTargetOffset.top + event.offsetY;
                this.createPagemarkAtPoint(pageNum, pageElement, verticalOffsetWithinPageElement)
                    .catch(err => log.error("Failed to create pagemark: ", err));
            }
            finally {
                RendererAnalytics_1.RendererAnalytics.event({ category: 'user', action: 'created-pagemark-via-keyboard' });
            }
        });
    }
    createPagemarkAtPoint(pageNum, pageElement, verticalOffsetWithinPageElement) {
        return __awaiter(this, void 0, void 0, function* () {
            const pageHeight = pageElement.clientHeight;
            const percentage = Percentages_1.Percentages.calculate(verticalOffsetWithinPageElement, pageHeight, { noRound: true });
            log.info("percentage for pagemark: ", percentage);
            const docMeta = this.model.docMeta;
            yield DocMetas_1.DocMetas.withBatchedMutations(docMeta, () => __awaiter(this, void 0, void 0, function* () {
                this.model.erasePagemark(pageNum);
                yield this.model.createPagemarksForRange(pageNum, percentage);
            }));
        });
    }
}
exports.PagemarkCoverageEventListener = PagemarkCoverageEventListener;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFnZW1hcmtDb3ZlcmFnZUV2ZW50TGlzdGVuZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJQYWdlbWFya0NvdmVyYWdlRXZlbnRMaXN0ZW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUdBLDJEQUFzRDtBQUN0RCx1RUFBa0U7QUFDbEUsK0NBQTBDO0FBQzFDLGtEQUE2QztBQUM3QyxrRUFBNkQ7QUFDN0QsbUVBQThEO0FBRzlELHNEQUFpRDtBQUVqRCxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFNUIsTUFBYSw2QkFBNkI7SUFXdEMsWUFBWSxVQUF5QixFQUFFLEtBQVk7UUFOM0MsaUJBQVksR0FBWSxLQUFLLENBQUM7UUFPbEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxtQ0FBZ0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNwRCxDQUFDO0lBRU0sS0FBSztRQUVSLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO1FBQzVFLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFbEYsR0FBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBRWhDLENBQUM7SUFHTyxpQkFBaUIsQ0FBQyxLQUFVO1FBRWhDLEdBQUcsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFdEMsTUFBTSxZQUFZLEdBQUcsS0FBSyxDQUFD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QU8sRUFBRSxHQUFTLEVBQUU7Z0JBR3BELElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNsQyxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsdUJBQXVCLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBQ2xFLENBQUMsQ0FBQSxDQUFDLENBQUM7UUFFUCxDQUFDO0tBQUE7Q0FFSjtBQTNKRCxzRUEySkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1dlYkNvbnRyb2xsZXJ9IGZyb20gJy4uLy4uL2NvbnRyb2xsZXIvV2ViQ29udHJvbGxlcic7XG5pbXBvcnQge01vZGVsfSBmcm9tICcuLi8uLi9tb2RlbC9Nb2RlbCc7XG5pbXBvcnQge0RvY0Zvcm1hdH0gZnJvbSAnLi4vLi4vZG9jZm9ybWF0L0RvY0Zvcm1hdCc7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7RG9jRm9ybWF0RmFjdG9yeX0gZnJvbSAnLi4vLi4vZG9jZm9ybWF0L0RvY0Zvcm1hdEZhY3RvcnknO1xuaW1wb3J0IHtLZXlFdmVudHN9IGZyb20gJy4uLy4uL0tleUV2ZW50cyc7XG5pbXBvcnQge0VsZW1lbnRzfSBmcm9tICcuLi8uLi91dGlsL0VsZW1lbnRzJztcbmltcG9ydCB7UmVuZGVyZXJBbmFseXRpY3N9IGZyb20gJy4uLy4uL2dhL1JlbmRlcmVyQW5hbHl0aWNzJztcbmltcG9ydCB7UGVyY2VudGFnZXN9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC9QZXJjZW50YWdlcyc7XG5pbXBvcnQge1BhZ2VtYXJrTW9kZX0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9tZXRhZGF0YS9QYWdlbWFya01vZGUnO1xuaW1wb3J0IHtUcmlnZ2VyRXZlbnR9IGZyb20gJy4uLy4uL2NvbnRleHRtZW51L1RyaWdnZXJFdmVudCc7XG5pbXBvcnQge0RvY01ldGFzfSBmcm9tICcuLi8uLi9tZXRhZGF0YS9Eb2NNZXRhcyc7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuZXhwb3J0IGNsYXNzIFBhZ2VtYXJrQ292ZXJhZ2VFdmVudExpc3RlbmVyIHtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgY29udHJvbGxlcjogV2ViQ29udHJvbGxlcjtcbiAgICBwcml2YXRlIHJlYWRvbmx5IG1vZGVsOiBNb2RlbDtcblxuICAgIHByaXZhdGUga2V5QWN0aXZhdGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IGRvY0Zvcm1hdDogRG9jRm9ybWF0O1xuXG4gICAgLyoqXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29udHJvbGxlcjogV2ViQ29udHJvbGxlciwgbW9kZWw6IE1vZGVsKSB7XG4gICAgICAgIHRoaXMuY29udHJvbGxlciA9IGNvbnRyb2xsZXI7XG4gICAgICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcbiAgICAgICAgdGhpcy5kb2NGb3JtYXQgPSBEb2NGb3JtYXRGYWN0b3J5LmdldEluc3RhbmNlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXJ0KCkge1xuXG4gICAgICAgIGxvZy5pbmZvKFwiU3RhcnRpbmcuLi5cIik7XG5cbiAgICAgICAgdGhpcy5tb2RlbC5yZWdpc3Rlckxpc3RlbmVyRm9yRG9jdW1lbnRMb2FkZWQoKCkgPT4gdGhpcy5vbkRvY3VtZW50TG9hZGVkKCkpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgZXZlbnQgPT4gdGhpcy5vbk1lc3NhZ2VSZWNlaXZlZChldmVudCksIGZhbHNlKTtcblxuICAgICAgICBsb2cuaW5mbyhcIlN0YXJ0aW5nLi4uZG9uZVwiKTtcblxuICAgIH1cblxuICAgIC8vIGZvciBtZXNzYWdlIHNlbmQgZnJvbSB0aGUgY29udGV4dCBtZW51XG4gICAgcHJpdmF0ZSBvbk1lc3NhZ2VSZWNlaXZlZChldmVudDogYW55KSB7XG5cbiAgICAgICAgbG9nLmluZm8oXCJSZWNlaXZlZCBtZXNzYWdlOiBcIiwgZXZlbnQpO1xuXG4gICAgICAgIGNvbnN0IHRyaWdnZXJFdmVudCA9IGV2ZW50LmRhdGE7XG5cbiAgICAgICAgc3dpdGNoIChldmVudC5kYXRhLnR5cGUpIHtcblxuICAgICAgICAgICAgY2FzZSBcImNyZWF0ZS1wYWdlbWFyay10by1wb2ludFwiOlxuICAgICAgICAgICAgICAgIHRoaXMub25Db250ZXh0TWVudUNyZWF0ZVBhZ2VtYXJrVG9Qb2ludCh0cmlnZ2VyRXZlbnQpXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gbG9nLmVycm9yKFwiVW5hYmxlIHRvIGNyZWF0ZSBwYWdlbWFyazogXCIsIGVycikpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHByaXZhdGUgb25Eb2N1bWVudExvYWRlZCgpIHtcblxuICAgICAgICBsb2cuaW5mbyhcIkRvY3VtZW50IGxvYWRlZC4uLiBpbnN0YWxsaW5nIGxpc3RlbmVycy4uLlwiKTtcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZXZlbnQgPT4gdGhpcy5rZXlMaXN0ZW5lcihldmVudCkpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBldmVudCA9PiB0aGlzLmtleUxpc3RlbmVyKGV2ZW50KSk7XG5cbiAgICAgICAgY29uc3QgcGFnZUVsZW1lbnRzOiBIVE1MRWxlbWVudFtdXG4gICAgICAgICAgICA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wYWdlXCIpKTtcblxuICAgICAgICBmb3IgKGNvbnN0IHBhZ2VFbGVtZW50IG9mIHBhZ2VFbGVtZW50cykge1xuICAgICAgICAgICAgcGFnZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGV2ZW50ID0+IHRoaXMubW91c2VMaXN0ZW5lcihldmVudCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhZ2VFbGVtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGxvZy53YXJuKFwiTm8gcGFnZXMgZm91bmQgZm9yIGNsaWNrIGxpc3RlbmVyLlwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxvZy5kZWJ1ZyhcIkFkZGVkIGNsaWNrIGxpc3RlbmVyIHRvIE4gcGFnZXM6IFwiICsgcGFnZUVsZW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIH1cblxuICAgICAgICBsb2cuaW5mbyhcIkRvY3VtZW50IGxvYWRlZC4uLiBpbnN0YWxsaW5nIGxpc3RlbmVycy4uLmRvbmVcIik7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmFjayB0aGF0IHdlJ3ZlIHNlbGVjdGVkICdlJyBvbiB0aGUga2V5Ym9hcmQsXG4gICAgICovXG4gICAgcHJpdmF0ZSBrZXlMaXN0ZW5lcihldmVudDogS2V5Ym9hcmRFdmVudCkge1xuXG4gICAgICAgIGlmICghZXZlbnQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vIGV2ZW50XCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5rZXlBY3RpdmF0ZWQgPSBLZXlFdmVudHMuaXNLZXlNZXRhQWN0aXZlKGV2ZW50KTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgbW91c2VMaXN0ZW5lcihldmVudDogTW91c2VFdmVudCkge1xuXG4gICAgICAgIGlmICghZXZlbnQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vIGV2ZW50XCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLmtleUFjdGl2YXRlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgYXdhaXQgdGhpcy5vbk1vdXNlRXZlbnRDcmVhdGVQYWdlbWFya1RvUG9pbnQoZXZlbnQpO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBvbkNvbnRleHRNZW51Q3JlYXRlUGFnZW1hcmtUb1BvaW50KHRyaWdnZXJFdmVudDogVHJpZ2dlckV2ZW50KSB7XG5cbiAgICAgICAgdHJ5IHtcblxuICAgICAgICAgICAgY29uc3QgcGFnZUVsZW1lbnQgPSB0aGlzLmRvY0Zvcm1hdC5nZXRQYWdlRWxlbWVudEZyb21QYWdlTnVtKHRyaWdnZXJFdmVudC5wYWdlTnVtKTtcbiAgICAgICAgICAgIGNvbnN0IHBhZ2VOdW0gPSB0cmlnZ2VyRXZlbnQucGFnZU51bTtcbiAgICAgICAgICAgIGNvbnN0IHZlcnRpY2FsT2Zmc2V0V2l0aGluUGFnZUVsZW1lbnQgPSB0cmlnZ2VyRXZlbnQucG9pbnRzLnBhZ2VPZmZzZXQueTtcblxuICAgICAgICAgICAgdGhpcy5jcmVhdGVQYWdlbWFya0F0UG9pbnQocGFnZU51bSwgcGFnZUVsZW1lbnQsIHZlcnRpY2FsT2Zmc2V0V2l0aGluUGFnZUVsZW1lbnQpXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBsb2cuZXJyb3IoXCJGYWlsZWQgdG8gY3JlYXRlIHBhZ2VtYXJrOiBcIiwgZXJyKSk7XG5cbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIFJlbmRlcmVyQW5hbHl0aWNzLmV2ZW50KHtjYXRlZ29yeTogJ3VzZXInLCBhY3Rpb246ICdjcmVhdGVkLXBhZ2VtYXJrLXZpYS1jb250ZXh0LW1lbnUnfSk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzMyMzQyNTYvZmluZC1tb3VzZS1wb3NpdGlvbi1yZWxhdGl2ZS10by1lbGVtZW50XG4gICAgcHJpdmF0ZSBhc3luYyBvbk1vdXNlRXZlbnRDcmVhdGVQYWdlbWFya1RvUG9pbnQoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcblxuICAgICAgICB0cnkge1xuXG4gICAgICAgICAgICAvLyB0aGlzIHNob3VsZCBhbHdheXMgYmUgLnBhZ2Ugc2luY2Ugd2UncmUgdXNpbmcgY3VycmVudFRhcmdldFxuICAgICAgICAgICAgY29uc3QgcGFnZUVsZW1lbnQgPSBFbGVtZW50cy51bnRpbFJvb3QoPEhUTUxFbGVtZW50PiBldmVudC5jdXJyZW50VGFyZ2V0LCBcIi5wYWdlXCIpO1xuICAgICAgICAgICAgY29uc3QgcGFnZU51bSA9IHRoaXMuZG9jRm9ybWF0LmdldFBhZ2VOdW1Gcm9tUGFnZUVsZW1lbnQocGFnZUVsZW1lbnQpO1xuICAgICAgICAgICAgY29uc3QgZXZlbnRUYXJnZXRPZmZzZXQgPSBFbGVtZW50cy5nZXRSZWxhdGl2ZU9mZnNldFJlY3QoPEhUTUxFbGVtZW50PiBldmVudC50YXJnZXQsIHBhZ2VFbGVtZW50KTtcbiAgICAgICAgICAgIGNvbnN0IHZlcnRpY2FsT2Zmc2V0V2l0aGluUGFnZUVsZW1lbnQgPSBldmVudFRhcmdldE9mZnNldC50b3AgKyBldmVudC5vZmZzZXRZO1xuXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVBhZ2VtYXJrQXRQb2ludChwYWdlTnVtLCBwYWdlRWxlbWVudCwgdmVydGljYWxPZmZzZXRXaXRoaW5QYWdlRWxlbWVudClcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IGxvZy5lcnJvcihcIkZhaWxlZCB0byBjcmVhdGUgcGFnZW1hcms6IFwiLCBlcnIpKTtcblxuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgUmVuZGVyZXJBbmFseXRpY3MuZXZlbnQoe2NhdGVnb3J5OiAndXNlcicsIGFjdGlvbjogJ2NyZWF0ZWQtcGFnZW1hcmstdmlhLWtleWJvYXJkJ30pO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGNyZWF0ZVBhZ2VtYXJrQXRQb2ludChwYWdlTnVtOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZUVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsT2Zmc2V0V2l0aGluUGFnZUVsZW1lbnQ6IG51bWJlcikge1xuXG4gICAgICAgIGNvbnN0IHBhZ2VIZWlnaHQgPSBwYWdlRWxlbWVudC5jbGllbnRIZWlnaHQ7XG5cbiAgICAgICAgY29uc3QgcGVyY2VudGFnZSA9IFBlcmNlbnRhZ2VzLmNhbGN1bGF0ZSh2ZXJ0aWNhbE9mZnNldFdpdGhpblBhZ2VFbGVtZW50LCBwYWdlSGVpZ2h0LCB7bm9Sb3VuZDogdHJ1ZX0pO1xuXG4gICAgICAgIGxvZy5pbmZvKFwicGVyY2VudGFnZSBmb3IgcGFnZW1hcms6IFwiLCBwZXJjZW50YWdlKTtcblxuICAgICAgICBjb25zdCBkb2NNZXRhID0gdGhpcy5tb2RlbC5kb2NNZXRhO1xuXG4gICAgICAgIGF3YWl0IERvY01ldGFzLndpdGhCYXRjaGVkTXV0YXRpb25zKGRvY01ldGEsIGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIC8vIFRPRE86IGRvIG5vdCB1c2UgdGhlIG1vZGVsIGhlcmUgYW5kIGluc3RlYWQgbW92ZSB0aGlzIHRvIHRoZSBQYWdlbWFya3MgY29kZSB3aGljaFxuICAgICAgICAgICAgLy8gd2UgY2FuIHRlc3QgYmV0dGVyLi4uXG4gICAgICAgICAgICB0aGlzLm1vZGVsLmVyYXNlUGFnZW1hcmsocGFnZU51bSk7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLm1vZGVsLmNyZWF0ZVBhZ2VtYXJrc0ZvclJhbmdlKHBhZ2VOdW0sIHBlcmNlbnRhZ2UpO1xuICAgICAgICB9KTtcblxuICAgIH1cblxufVxuIl19