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
const DocFormatFactory_1 = require("../../../../docformat/DocFormatFactory");
const Component_1 = require("../../../../components/Component");
const Functions_1 = require("polar-shared/src/util/Functions");
const AnnotationRects_1 = require("../../../../metadata/AnnotationRects");
const AreaHighlightRect_1 = require("../../../../metadata/AreaHighlightRect");
const AreaHighlightRects_1 = require("../../../../metadata/AreaHighlightRects");
const BoxController_1 = require("../../../../boxes/controller/BoxController");
const BoxOptions_1 = require("../../../../boxes/controller/BoxOptions");
const AsyncSerializer_1 = require("../../../../util/AsyncSerializer");
const AreaHighlights_1 = require("../../../../metadata/AreaHighlights");
const Screenshots_1 = require("../../../../screenshots/Screenshots");
const HighlightColor_1 = require("polar-shared/src/metadata/HighlightColor");
const Rects_1 = require("../../../../Rects");
const Arrays_1 = require("polar-shared/src/util/Arrays");
const log = Logger_1.Logger.create();
class AreaHighlightComponent extends Component_1.Component {
    constructor(persistenceLayerProvider) {
        super();
        this.persistenceLayerProvider = persistenceLayerProvider;
        this.asyncSerializer = new AsyncSerializer_1.AsyncSerializer();
        this.docFormat = DocFormatFactory_1.DocFormatFactory.getInstance();
    }
    init(annotationEvent) {
        this.annotationEvent = annotationEvent;
        this.areaHighlight = annotationEvent.value;
        this.boxController = new BoxController_1.BoxController(boxMoveEvent => this.onBoxMoved(boxMoveEvent));
    }
    captureFirstScreenshot() {
        return __awaiter(this, void 0, void 0, function* () {
            const areaHighlight = this.areaHighlight;
            const { docMeta, pageMeta } = this.annotationEvent;
            const rect = Arrays_1.Arrays.first(Object.values(areaHighlight.rects));
            const areaHighlightRect = AreaHighlightRects_1.AreaHighlightRects.createFromRect(rect);
            const pageNum = pageMeta.pageInfo.num;
            const { pageDimensions } = AreaHighlights_1.AreaHighlights.computePageDimensions(pageNum);
            const boxRect = areaHighlightRect.toDimensionsFloor(pageDimensions);
            const target = document.getElementById(this.createID());
            const opts = {
                datastore: this.persistenceLayerProvider(),
                docMeta,
                pageMeta,
                pageNum,
                areaHighlight,
                target,
                areaHighlightRect,
                boxRect,
            };
            yield this.asyncSerializer.execute(() => __awaiter(this, void 0, void 0, function* () {
                this.areaHighlight = yield AreaHighlights_1.AreaHighlights.doWrite(opts);
            }));
        });
    }
    onBoxMoved(boxMoveEvent) {
        const annotationRect = AnnotationRects_1.AnnotationRects.createFromPositionedRect(boxMoveEvent.boxRect, boxMoveEvent.restrictionRect);
        const areaHighlightRect = new AreaHighlightRect_1.AreaHighlightRect(annotationRect);
        if (boxMoveEvent.state === "completed") {
            const annotationEvent = this.annotationEvent;
            const { docMeta, pageMeta } = annotationEvent;
            const pageNum = pageMeta.pageInfo.num;
            const areaHighlight = pageMeta.areaHighlights[this.areaHighlight.id];
            const { boxRect, target } = boxMoveEvent;
            const doWrite = () => __awaiter(this, void 0, void 0, function* () {
                const { pageDimensions } = AreaHighlights_1.AreaHighlights.computePageDimensions(pageNum);
                const extractedImage = yield Screenshots_1.Screenshots.capture(pageNum, boxRect, target);
                const toOverlayRect = () => {
                    let overlayRect = areaHighlightRect.toDimensions(pageDimensions);
                    overlayRect = AreaHighlights_1.AreaHighlights.toCorrectScale(overlayRect);
                    return overlayRect;
                };
                const overlayRect = toOverlayRect();
                const position = {
                    x: overlayRect.left,
                    y: overlayRect.top,
                    width: overlayRect.width,
                    height: overlayRect.height,
                };
                const rect = areaHighlightRect;
                const writeOpts = {
                    datastore: this.persistenceLayerProvider(),
                    docMeta,
                    pageMeta,
                    areaHighlight,
                    rect,
                    position,
                    extractedImage
                };
                const writer = AreaHighlights_1.AreaHighlights.write(writeOpts);
                const [writtenAreaHighlight, committer] = writer.prepare();
                this.areaHighlight = writtenAreaHighlight;
                yield committer.commit();
            });
            this.asyncSerializer.execute(() => __awaiter(this, void 0, void 0, function* () { return yield doWrite(); }))
                .catch(err => log.error("Unable to update screenshot: ", err));
        }
        else {
        }
    }
    render() {
        this.destroy();
        const annotationEvent = this.annotationEvent;
        const areaHighlight = this.areaHighlight;
        const boxController = this.boxController;
        log.debug("render()");
        const docMeta = annotationEvent.docMeta;
        const pageMeta = annotationEvent.pageMeta;
        const docInfo = docMeta.docInfo;
        const pageNum = pageMeta.pageInfo.num;
        const containerElement = this.docFormat.getPageElementFromPageNum(pageNum);
        const { pageDimensions, dimensionsElement } = AreaHighlights_1.AreaHighlights.computePageDimensions(pageNum);
        const color = areaHighlight.color || 'yellow';
        const backgroundColor = HighlightColor_1.HighlightColors.toBackgroundColor(color, 0.5);
        Functions_1.forDict(areaHighlight.rects, (key, rect) => {
            const toOverlayRect = () => {
                if (areaHighlight.position) {
                    let overlayRect = {
                        left: areaHighlight.position.x,
                        top: areaHighlight.position.y,
                        width: areaHighlight.position.width,
                        height: areaHighlight.position.height
                    };
                    if (this.docFormat.name === "pdf") {
                        const currentScale = this.docFormat.currentScale();
                        overlayRect = Rects_1.Rects.scale(Rects_1.Rects.createFromBasicRect(overlayRect), currentScale);
                    }
                    return overlayRect;
                }
                return areaHighlightRect.toDimensions(pageDimensions);
            };
            const areaHighlightRect = AreaHighlightRects_1.AreaHighlightRects.createFromRect(rect);
            const overlayRect = toOverlayRect();
            log.debug("Rendering annotation at: " + JSON.stringify(overlayRect, null, "  "));
            const id = this.createID();
            let highlightElement = document.getElementById(id);
            if (highlightElement === null) {
                highlightElement = document.createElement("div");
                highlightElement.setAttribute("id", id);
                containerElement.insertBefore(highlightElement, containerElement.firstChild);
                log.debug("Creating box controller for highlightElement: ", highlightElement);
                boxController.register(new BoxOptions_1.BoxOptions({
                    target: highlightElement,
                    restrictionElement: dimensionsElement,
                    intersectedElementsSelector: ".area-highlight"
                }));
            }
            highlightElement.setAttribute("data-type", "area-highlight");
            highlightElement.setAttribute("data-doc-fingerprint", docInfo.fingerprint);
            highlightElement.setAttribute("data-area-highlight-id", areaHighlight.id);
            highlightElement.setAttribute("data-annotation-id", areaHighlight.id);
            highlightElement.setAttribute("data-page-num", `${pageMeta.pageInfo.num}`);
            highlightElement.setAttribute("data-annotation-type", "area-highlight");
            highlightElement.setAttribute("data-annotation-id", areaHighlight.id);
            highlightElement.setAttribute("data-annotation-page-num", `${pageMeta.pageInfo.num}`);
            highlightElement.setAttribute("data-annotation-doc-fingerprint", docInfo.fingerprint);
            highlightElement.className = `area-highlight annotation area-highlight-${areaHighlight.id}`;
            highlightElement.style.position = "absolute";
            highlightElement.style.backgroundColor = backgroundColor;
            highlightElement.style.mixBlendMode = 'multiply';
            highlightElement.style.border = `1px solid #c6c6c6`;
            highlightElement.style.left = `${overlayRect.left}px`;
            highlightElement.style.top = `${overlayRect.top}px`;
            highlightElement.style.width = `${overlayRect.width}px`;
            highlightElement.style.height = `${overlayRect.height}px`;
            highlightElement.style.zIndex = '1';
        });
        if (!this.areaHighlight.image) {
            this.captureFirstScreenshot()
                .catch(err => log.error("Unable to capture first screenshot: ", err));
        }
    }
    createID() {
        return `area-highlight-${this.areaHighlight.id}`;
    }
    destroy() {
        const selector = `.area-highlight-${this.areaHighlight.id}`;
        const elements = document.querySelectorAll(selector);
        log.debug(`Found N elements for selector ${selector}: ` + elements.length);
        elements.forEach(highlightElement => {
            highlightElement.parentElement.removeChild(highlightElement);
        });
    }
}
exports.AreaHighlightComponent = AreaHighlightComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXJlYUhpZ2hsaWdodENvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkFyZWFIaWdobGlnaHRDb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyREFBc0Q7QUFFdEQsNkVBQXdFO0FBQ3hFLGdFQUEyRDtBQUMzRCwrREFBd0Q7QUFHeEQsMEVBQXFFO0FBQ3JFLDhFQUF5RTtBQUN6RSxnRkFBMkU7QUFDM0UsOEVBQXlFO0FBQ3pFLHdFQUFtRTtBQUtuRSxzRUFBaUU7QUFDakUsd0VBQW1FO0FBR25FLHFFQUFnRTtBQUNoRSw2RUFBeUU7QUFFekUsNkNBQXdDO0FBQ3hDLHlEQUFvRDtBQUVwRCxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFNUIsTUFBYSxzQkFBdUIsU0FBUSxxQkFBUztJQVVqRCxZQUFvQix3QkFBa0Q7UUFDbEUsS0FBSyxFQUFFLENBQUM7UUFEUSw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBRjlELG9CQUFlLEdBQUcsSUFBSSxpQ0FBZSxFQUFFLENBQUM7UUFJNUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxtQ0FBZ0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNwRCxDQUFDO0lBS00sSUFBSSxDQUFDLGVBQWdDO1FBSXhDLElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxhQUFhLEdBQUcsZUFBZSxDQUFDLEtBQUssQ0FBQztRQUUzQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksNkJBQWEsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUUxRixDQUFDO0lBRWEsc0JBQXNCOztZQUVoQyxNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYyxDQUFDO1lBQzFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFD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QUFLLElBQUksQ0FBQztZQUN4RCxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsV0FBVyxDQUFDLE1BQU0sSUFBSSxDQUFDO1lBRTFELGdCQUFnQixDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBRXhDLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFFLElBQUksQ0FBQyxhQUFjLENBQUMsS0FBSyxFQUFFO1lBRTdCLElBQUksQ0FBQyxzQkFBc0IsRUFBRTtpQkFDeEIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxzQ0FBc0MsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBRTdFO0lBRUwsQ0FBQztJQUtPLFFBQVE7UUFDWixPQUFPLGtCQUFrQixJQUFJLENBQUMsYUFBYyxDQUFDLEVBQUUsRUFBRSxDQUFDO0lBQ3RELENBQUM7SUFLTSxPQUFPO1FBRVYsTUFBTSxRQUFRLEdBQUcsbUJBQW1CLElBQUksQ0FBQyxhQUFjLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDN0QsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXJELEdBQUcsQ0FBQyxLQUFLLENBQUMsaUNBQWlDLFFBQVEsSUFBSSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUUzRSxRQUFRLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLEVBQUU7WUFDaEMsZ0JBQWdCLENBQUMsYUFBYyxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ2xFLENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQztDQUVKO0FBalNELHdEQWlTQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TG9nZ2VyfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy9sb2dnZXIvTG9nZ2VyXCI7XG5cbmltcG9ydCB7RG9jRm9ybWF0RmFjdG9yeX0gZnJvbSBcIi4uLy4uLy4uLy4uL2RvY2Zvcm1hdC9Eb2NGb3JtYXRGYWN0b3J5XCI7XG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvQ29tcG9uZW50XCI7XG5pbXBvcnQge2ZvckRpY3R9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL3V0aWwvRnVuY3Rpb25zXCI7XG5pbXBvcnQge0FyZWFIaWdobGlnaHR9IGZyb20gXCIuLi8uLi8uLi8uLi9tZXRhZGF0YS9BcmVhSGlnaGxpZ2h0XCI7XG5pbXBvcnQge0hpZ2hsaWdodENvbG9yLCBQb3NpdGlvbn0gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvbWV0YWRhdGEvSUJhc2VIaWdobGlnaHRcIjtcbmltcG9ydCB7QW5ub3RhdGlvblJlY3RzfSBmcm9tIFwiLi4vLi4vLi4vLi4vbWV0YWRhdGEvQW5ub3RhdGlvblJlY3RzXCI7XG5pbXBvcnQge0FyZWFIaWdobGlnaHRSZWN0fSBmcm9tIFwiLi4vLi4vLi4vLi4vbWV0YWRhdGEvQXJlYUhpZ2hsaWdodFJlY3RcIjtcbmltcG9ydCB7QXJlYUhpZ2hsaWdodFJlY3RzfSBmcm9tIFwiLi4vLi4vLi4vLi4vbWV0YWRhdGEvQXJlYUhpZ2hsaWdodFJlY3RzXCI7XG5pbXBvcnQge0JveENvbnRyb2xsZXJ9IGZyb20gXCIuLi8uLi8uLi8uLi9ib3hlcy9jb250cm9sbGVyL0JveENvbnRyb2xsZXJcIjtcbmltcG9ydCB7Qm94T3B0aW9uc30gZnJvbSBcIi4uLy4uLy4uLy4uL2JveGVzL2NvbnRyb2xsZXIvQm94T3B0aW9uc1wiO1xuaW1wb3J0IHtEb2NGb3JtYXR9IGZyb20gXCIuLi8uLi8uLi8uLi9kb2Nmb3JtYXQvRG9jRm9ybWF0XCI7XG5pbXBvcnQge0Fubm90YXRpb25FdmVudH0gZnJvbSAnLi4vLi4vLi4vLi4vYW5ub3RhdGlvbnMvY29tcG9uZW50cy9Bbm5vdGF0aW9uRXZlbnQnO1xuaW1wb3J0IHtCb3hNb3ZlRXZlbnR9IGZyb20gJy4uLy4uLy4uLy4uL2JveGVzL2NvbnRyb2xsZXIvQm94TW92ZUV2ZW50JztcbmltcG9ydCB7UGVyc2lzdGVuY2VMYXllclByb3ZpZGVyfSBmcm9tICcuLi8uLi8uLi8uLi9kYXRhc3RvcmUvUGVyc2lzdGVuY2VMYXllcic7XG5pbXBvcnQge0FzeW5jU2VyaWFsaXplcn0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbC9Bc3luY1NlcmlhbGl6ZXInO1xuaW1wb3J0IHtBcmVhSGlnaGxpZ2h0c30gZnJvbSAnLi4vLi4vLi4vLi4vbWV0YWRhdGEvQXJlYUhpZ2hsaWdodHMnO1xuaW1wb3J0IHtBcmVhSGlnaGxpZ2h0V3JpdGVPcHRzfSBmcm9tICcuLi8uLi8uLi8uLi9tZXRhZGF0YS9BcmVhSGlnaGxpZ2h0cyc7XG5pbXBvcnQge0RvV3JpdGVPcHRzfSBmcm9tICcuLi8uLi8uLi8uLi9tZXRhZGF0YS9BcmVhSGlnaGxpZ2h0cyc7XG5pbXBvcnQge1NjcmVlbnNob3RzfSBmcm9tICcuLi8uLi8uLi8uLi9zY3JlZW5zaG90cy9TY3JlZW5zaG90cyc7XG5pbXBvcnQge0hpZ2hsaWdodENvbG9yc30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9tZXRhZGF0YS9IaWdobGlnaHRDb2xvcic7XG5pbXBvcnQge0lMVFJlY3R9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC9yZWN0cy9JTFRSZWN0JztcbmltcG9ydCB7UmVjdHN9IGZyb20gJy4uLy4uLy4uLy4uL1JlY3RzJztcbmltcG9ydCB7QXJyYXlzfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy91dGlsL0FycmF5c1wiO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbmV4cG9ydCBjbGFzcyBBcmVhSGlnaGxpZ2h0Q29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgZG9jRm9ybWF0OiBEb2NGb3JtYXQ7XG5cbiAgICBwcml2YXRlIGFubm90YXRpb25FdmVudD86IEFubm90YXRpb25FdmVudDtcbiAgICBwcml2YXRlIGFyZWFIaWdobGlnaHQ/OiBBcmVhSGlnaGxpZ2h0O1xuICAgIHByaXZhdGUgYm94Q29udHJvbGxlcj86IEJveENvbnRyb2xsZXI7XG5cbiAgICBwcml2YXRlIGFzeW5jU2VyaWFsaXplciA9IG5ldyBBc3luY1NlcmlhbGl6ZXIoKTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGVyc2lzdGVuY2VMYXllclByb3ZpZGVyOiBQZXJzaXN0ZW5jZUxheWVyUHJvdmlkZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5kb2NGb3JtYXQgPSBEb2NGb3JtYXRGYWN0b3J5LmdldEluc3RhbmNlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQE92ZXJyaWRlXG4gICAgICovXG4gICAgcHVibGljIGluaXQoYW5ub3RhdGlvbkV2ZW50OiBBbm5vdGF0aW9uRXZlbnQpIHtcblxuICAgICAgICAvLyBUT0RPOiB3ZSBzaG91bGQgYSBzcGVjaWZpYyBldmVudCBjbGFzcyBmb3IgdGhpcyBkYXRhIHdoaWNoIGlzXG4gICAgICAgIC8vIGNhcHR1cmVkIHdpdGhpbiBhIGhpZ2hlciBsZXZlbCBhbm5vdGF0aW9uRXZlbnQuXG4gICAgICAgIHRoaXMuYW5ub3RhdGlvbkV2ZW50ID0gYW5ub3RhdGlvbkV2ZW50O1xuICAgICAgICB0aGlzLmFyZWFIaWdobGlnaHQgPSBhbm5vdGF0aW9uRXZlbnQudmFsdWU7XG5cbiAgICAgICAgdGhpcy5ib3hDb250cm9sbGVyID0gbmV3IEJveENvbnRyb2xsZXIoYm94TW92ZUV2ZW50ID0+IHRoaXMub25Cb3hNb3ZlZChib3hNb3ZlRXZlbnQpKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgY2FwdHVyZUZpcnN0U2NyZWVuc2hvdCgpIHtcblxuICAgICAgICBjb25zdCBhcmVhSGlnaGxpZ2h0ID0gdGhpcy5hcmVhSGlnaGxpZ2h0ITtcbiAgICAgICAgY29uc3QgeyBkb2NNZXRhLCBwYWdlTWV0YSB9ID0gdGhpcy5hbm5vdGF0aW9uRXZlbnQhO1xuXG4gICAgICAgIGNvbnN0IHJlY3QgPSBBcnJheXMuZmlyc3QoT2JqZWN0LnZhbHVlcyhhcmVhSGlnaGxpZ2h0LnJlY3RzKSk7XG4gICAgICAgIGNvbnN0IGFyZWFIaWdobGlnaHRSZWN0ID0gQXJlYUhpZ2hsaWdodFJlY3RzLmNyZWF0ZUZyb21SZWN0KHJlY3QhKTtcbiAgICAgICAgY29uc3QgcGFnZU51bSA9IHBhZ2VNZXRhLnBhZ2VJbmZvLm51bTtcblxuICAgICAgICBjb25zdCB7cGFnZURpbWVuc2lvbnN9ID0gQXJlYUhpZ2hsaWdodHMuY29tcHV0ZVBhZ2VEaW1lbnNpb25zKHBhZ2VOdW0pO1xuXG4gICAgICAgIGNvbnN0IGJveFJlY3QgPSBhcmVhSGlnaGxpZ2h0UmVjdC50b0RpbWVuc2lvbnNGbG9vcihwYWdlRGltZW5zaW9ucyk7XG5cbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gPEhUTUxFbGVtZW50PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmNyZWF0ZUlEKCkpO1xuXG4gICAgICAgIGNvbnN0IG9wdHM6IERvV3JpdGVPcHRzID0ge1xuICAgICAgICAgICAgZGF0YXN0b3JlOiB0aGlzLnBlcnNpc3RlbmNlTGF5ZXJQcm92aWRlcigpLFxuICAgICAgICAgICAgZG9jTWV0YSxcbiAgICAgICAgICAgIHBhZ2VNZXRhLFxuICAgICAgICAgICAgcGFnZU51bSxcbiAgICAgICAgICAgIGFyZWFIaWdobGlnaHQsXG4gICAgICAgICAgICB0YXJnZXQsXG4gICAgICAgICAgICBhcmVhSGlnaGxpZ2h0UmVjdCxcbiAgICAgICAgICAgIGJveFJlY3QsXG4gICAgICAgIH07XG5cbiAgICAgICAgYXdhaXQgdGhpcy5hc3luY1NlcmlhbGl6ZXIuZXhlY3V0ZShhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFyZWFIaWdobGlnaHQgPSBhd2FpdCBBcmVhSGlnaGxpZ2h0cy5kb1dyaXRlKG9wdHMpO1xuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgcHJpdmF0ZSBvbkJveE1vdmVkKGJveE1vdmVFdmVudDogQm94TW92ZUV2ZW50KSB7XG5cbiAgICAgICAgLy8gVE9ETzogYWN0dWFsbHkgSSB0aGluayB0aGlzIGJlbG9uZ3MgaW4gdGhlIGNvbnRyb2xsZXIuLi4gbm90IHRoZSB2aWV3XG5cbiAgICAgICAgY29uc3QgYW5ub3RhdGlvblJlY3QgPSBBbm5vdGF0aW9uUmVjdHMuY3JlYXRlRnJvbVBvc2l0aW9uZWRSZWN0KGJveE1vdmVFdmVudC5ib3hSZWN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94TW92ZUV2ZW50LnJlc3RyaWN0aW9uUmVjdCk7XG5cbiAgICAgICAgY29uc3QgYXJlYUhpZ2hsaWdodFJlY3QgPSBuZXcgQXJlYUhpZ2hsaWdodFJlY3QoYW5ub3RhdGlvblJlY3QpO1xuXG4gICAgICAgIGlmIChib3hNb3ZlRXZlbnQuc3RhdGUgPT09IFwiY29tcGxldGVkXCIpIHtcblxuICAgICAgICAgICAgY29uc3QgYW5ub3RhdGlvbkV2ZW50ID0gdGhpcy5hbm5vdGF0aW9uRXZlbnQhO1xuICAgICAgICAgICAgY29uc3QgeyBkb2NNZXRhLCBwYWdlTWV0YSB9ID0gYW5ub3RhdGlvbkV2ZW50O1xuICAgICAgICAgICAgY29uc3QgcGFnZU51bSA9IHBhZ2VNZXRhLnBhZ2VJbmZvLm51bTtcblxuICAgICAgICAgICAgY29uc3QgYXJlYUhpZ2hsaWdodCA9IHBhZ2VNZXRhLmFyZWFIaWdobGlnaHRzW3RoaXMuYXJlYUhpZ2hsaWdodCEuaWRdO1xuXG4gICAgICAgICAgICBjb25zdCB7Ym94UmVjdCwgdGFyZ2V0fSA9IGJveE1vdmVFdmVudDtcblxuICAgICAgICAgICAgY29uc3QgZG9Xcml0ZSA9IGFzeW5jICgpID0+IHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHtwYWdlRGltZW5zaW9uc30gPSBBcmVhSGlnaGxpZ2h0cy5jb21wdXRlUGFnZURpbWVuc2lvbnMocGFnZU51bSk7XG5cbiAgICAgICAgICAgICAgICAvLyBUT0RPOiB0aGlzIGlzIGEgcHJvYmxlbSBiZWNhdXNlIHRoZSBhcmVhIGhpZ2hsaWdodCBpc24ndCBjcmVhdGVkXG4gICAgICAgICAgICAgICAgLy8gdW50aWwgd2UgbXV0YXRlIGl0IGluIHRoZSBKU09OLi5cbiAgICAgICAgICAgICAgICBjb25zdCBleHRyYWN0ZWRJbWFnZVxuICAgICAgICAgICAgICAgICAgICA9IGF3YWl0IFNjcmVlbnNob3RzLmNhcHR1cmUocGFnZU51bSwgYm94UmVjdCwgdGFyZ2V0KTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHRvT3ZlcmxheVJlY3QgPSAoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IG92ZXJsYXlSZWN0ID0gYXJlYUhpZ2hsaWdodFJlY3QudG9EaW1lbnNpb25zKHBhZ2VEaW1lbnNpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmxheVJlY3QgPSBBcmVhSGlnaGxpZ2h0cy50b0NvcnJlY3RTY2FsZShvdmVybGF5UmVjdCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvdmVybGF5UmVjdDtcblxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBjb25zdCBvdmVybGF5UmVjdCA9IHRvT3ZlcmxheVJlY3QoKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uOiBQb3NpdGlvbiA9IHtcbiAgICAgICAgICAgICAgICAgICAgeDogb3ZlcmxheVJlY3QubGVmdCxcbiAgICAgICAgICAgICAgICAgICAgeTogb3ZlcmxheVJlY3QudG9wLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogb3ZlcmxheVJlY3Qud2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogb3ZlcmxheVJlY3QuaGVpZ2h0LFxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBjb25zdCByZWN0ID0gYXJlYUhpZ2hsaWdodFJlY3Q7XG5cbiAgICAgICAgICAgICAgICBjb25zdCB3cml0ZU9wdHM6IEFyZWFIaWdobGlnaHRXcml0ZU9wdHMgPSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFzdG9yZTogdGhpcy5wZXJzaXN0ZW5jZUxheWVyUHJvdmlkZXIoKSxcbiAgICAgICAgICAgICAgICAgICAgZG9jTWV0YSxcbiAgICAgICAgICAgICAgICAgICAgcGFnZU1ldGEsXG4gICAgICAgICAgICAgICAgICAgIGFyZWFIaWdobGlnaHQsXG4gICAgICAgICAgICAgICAgICAgIHJlY3QsXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLFxuICAgICAgICAgICAgICAgICAgICBleHRyYWN0ZWRJbWFnZVxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBjb25zdCB3cml0ZXIgPSBBcmVhSGlnaGxpZ2h0cy53cml0ZSh3cml0ZU9wdHMpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgW3dyaXR0ZW5BcmVhSGlnaGxpZ2h0LCBjb21taXR0ZXJdID0gd3JpdGVyLnByZXBhcmUoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuYXJlYUhpZ2hsaWdodCA9IHdyaXR0ZW5BcmVhSGlnaGxpZ2h0O1xuXG4gICAgICAgICAgICAgICAgYXdhaXQgY29tbWl0dGVyLmNvbW1pdCgpO1xuXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB0aGlzLmFzeW5jU2VyaWFsaXplci5leGVjdXRlKGFzeW5jICgpID0+IGF3YWl0IGRvV3JpdGUoKSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IGxvZy5lcnJvcihcIlVuYWJsZSB0byB1cGRhdGUgc2NyZWVuc2hvdDogXCIsIGVycikpO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBub29wXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBPdmVycmlkZVxuICAgICAqL1xuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgdGhpcy5kZXN0cm95KCk7XG5cbiAgICAgICAgY29uc3QgYW5ub3RhdGlvbkV2ZW50ID0gdGhpcy5hbm5vdGF0aW9uRXZlbnQhO1xuICAgICAgICBjb25zdCBhcmVhSGlnaGxpZ2h0ID0gdGhpcy5hcmVhSGlnaGxpZ2h0ITtcbiAgICAgICAgY29uc3QgYm94Q29udHJvbGxlciA9IHRoaXMuYm94Q29udHJvbGxlciE7XG5cbiAgICAgICAgbG9nLmRlYnVnKFwicmVuZGVyKClcIik7XG5cbiAgICAgICAgY29uc3QgZG9jTWV0YSA9IGFubm90YXRpb25FdmVudC5kb2NNZXRhO1xuICAgICAgICBjb25zdCBwYWdlTWV0YSA9IGFubm90YXRpb25FdmVudC5wYWdlTWV0YTtcbiAgICAgICAgY29uc3QgZG9jSW5mbyA9IGRvY01ldGEuZG9jSW5mbztcblxuICAgICAgICBjb25zdCBwYWdlTnVtID0gcGFnZU1ldGEucGFnZUluZm8ubnVtO1xuXG4gICAgICAgIC8vIHRoZSBjb250YWluZXIgbXVzdCBBTFdBWVMgYmUgdGhlIHBhZ2VFbGVtZW50IGJlY2F1c2UgaWYgd2UgdXNlIGFueVxuICAgICAgICAvLyBvdGhlciBjb250YWluZXIgUERGLmpzIGJyZWFrcy5cbiAgICAgICAgY29uc3QgY29udGFpbmVyRWxlbWVudCA9IHRoaXMuZG9jRm9ybWF0LmdldFBhZ2VFbGVtZW50RnJvbVBhZ2VOdW0ocGFnZU51bSk7XG5cbiAgICAgICAgY29uc3Qge3BhZ2VEaW1lbnNpb25zLCBkaW1lbnNpb25zRWxlbWVudH0gPSBBcmVhSGlnaGxpZ2h0cy5jb21wdXRlUGFnZURpbWVuc2lvbnMocGFnZU51bSk7XG5cbiAgICAgICAgY29uc3QgY29sb3I6IEhpZ2hsaWdodENvbG9yID0gYXJlYUhpZ2hsaWdodC5jb2xvciB8fCAneWVsbG93JztcblxuICAgICAgICBjb25zdCBiYWNrZ3JvdW5kQ29sb3IgPSBIaWdobGlnaHRDb2xvcnMudG9CYWNrZ3JvdW5kQ29sb3IoY29sb3IsIDAuNSk7XG5cbiAgICAgICAgZm9yRGljdChhcmVhSGlnaGxpZ2h0LnJlY3RzLCAoa2V5LCByZWN0KSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IHRvT3ZlcmxheVJlY3QgPSAoKTogSUxUUmVjdCA9PiB7XG5cbiAgICAgICAgICAgICAgICBpZiAoYXJlYUhpZ2hsaWdodC5wb3NpdGlvbikge1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBvdmVybGF5UmVjdCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IGFyZWFIaWdobGlnaHQucG9zaXRpb24ueCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogYXJlYUhpZ2hsaWdodC5wb3NpdGlvbi55LFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGFyZWFIaWdobGlnaHQucG9zaXRpb24ud2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGFyZWFIaWdobGlnaHQucG9zaXRpb24uaGVpZ2h0XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZG9jRm9ybWF0Lm5hbWUgPT09IFwicGRmXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRTY2FsZSA9IHRoaXMuZG9jRm9ybWF0LmN1cnJlbnRTY2FsZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmxheVJlY3QgPSBSZWN0cy5zY2FsZShSZWN0cy5jcmVhdGVGcm9tQmFzaWNSZWN0KG92ZXJsYXlSZWN0KSwgY3VycmVudFNjYWxlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvdmVybGF5UmVjdDtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFRPRE86IFRoaXMgaXMgZm9yIE9MREVSIGFyZWEgaGlnaGxpZ2h0cyBidXQgdGhlc2Ugd2lsbCBiZVxuICAgICAgICAgICAgICAgIC8vIGRlcHJlY2F0ZWQgcHJldHR5IHNvb24gYXMgdGhleSdyZSBub3QgcmVhbGx5IHVzZWQgdmVyeSBtdWNoXG4gICAgICAgICAgICAgICAgLy8gSSBpbWFnaW5lLlxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFyZWFIaWdobGlnaHRSZWN0LnRvRGltZW5zaW9ucyhwYWdlRGltZW5zaW9ucyk7XG5cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNvbnN0IGFyZWFIaWdobGlnaHRSZWN0ID0gQXJlYUhpZ2hsaWdodFJlY3RzLmNyZWF0ZUZyb21SZWN0KHJlY3QpO1xuICAgICAgICAgICAgY29uc3Qgb3ZlcmxheVJlY3QgPSB0b092ZXJsYXlSZWN0KCk7XG5cbiAgICAgICAgICAgIGxvZy5kZWJ1ZyhcIlJlbmRlcmluZyBhbm5vdGF0aW9uIGF0OiBcIiArIEpTT04uc3RyaW5naWZ5KG92ZXJsYXlSZWN0LCBudWxsLCBcIiAgXCIpKTtcblxuICAgICAgICAgICAgY29uc3QgaWQgPSB0aGlzLmNyZWF0ZUlEKCk7XG5cbiAgICAgICAgICAgIGxldCBoaWdobGlnaHRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuXG4gICAgICAgICAgICBpZiAoaGlnaGxpZ2h0RWxlbWVudCA9PT0gbnVsbCApIHtcblxuICAgICAgICAgICAgICAgIC8vIG9ubHkgY3JlYXRlIHRoZSBwYWdlbWFyayBpZiBpdCdzIG1pc3NpbmcuXG4gICAgICAgICAgICAgICAgaGlnaGxpZ2h0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgaGlnaGxpZ2h0RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpZCk7XG5cbiAgICAgICAgICAgICAgICBjb250YWluZXJFbGVtZW50Lmluc2VydEJlZm9yZShoaWdobGlnaHRFbGVtZW50LCBjb250YWluZXJFbGVtZW50LmZpcnN0Q2hpbGQpO1xuXG4gICAgICAgICAgICAgICAgbG9nLmRlYnVnKFwiQ3JlYXRpbmcgYm94IGNvbnRyb2xsZXIgZm9yIGhpZ2hsaWdodEVsZW1lbnQ6IFwiLCBoaWdobGlnaHRFbGVtZW50KTtcblxuICAgICAgICAgICAgICAgIGJveENvbnRyb2xsZXIucmVnaXN0ZXIobmV3IEJveE9wdGlvbnMoe1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IGhpZ2hsaWdodEVsZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgIHJlc3RyaWN0aW9uRWxlbWVudDogZGltZW5zaW9uc0VsZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgIGludGVyc2VjdGVkRWxlbWVudHNTZWxlY3RvcjogXCIuYXJlYS1oaWdobGlnaHRcIlxuICAgICAgICAgICAgICAgIH0pKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBUT0RPOiBhIGxvdCBvZiB0aGlzIGNvZGUgaXMgc2hhcmVkIHdpdGggcGFnZW1hcmtzLlxuXG4gICAgICAgICAgICBoaWdobGlnaHRFbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtdHlwZVwiLCBcImFyZWEtaGlnaGxpZ2h0XCIpO1xuICAgICAgICAgICAgaGlnaGxpZ2h0RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWRvYy1maW5nZXJwcmludFwiLCBkb2NJbmZvLmZpbmdlcnByaW50KTtcbiAgICAgICAgICAgIGhpZ2hsaWdodEVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS1hcmVhLWhpZ2hsaWdodC1pZFwiLCBhcmVhSGlnaGxpZ2h0LmlkKTtcbiAgICAgICAgICAgIGhpZ2hsaWdodEVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS1hbm5vdGF0aW9uLWlkXCIsIGFyZWFIaWdobGlnaHQuaWQpO1xuICAgICAgICAgICAgaGlnaGxpZ2h0RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXBhZ2UtbnVtXCIsIGAke3BhZ2VNZXRhLnBhZ2VJbmZvLm51bX1gKTtcblxuICAgICAgICAgICAgLy8gYW5ub3RhdGlvbiBkZXNjcmlwdG9yIG1ldGFkYXRhLlxuICAgICAgICAgICAgaGlnaGxpZ2h0RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWFubm90YXRpb24tdHlwZVwiLCBcImFyZWEtaGlnaGxpZ2h0XCIpO1xuICAgICAgICAgICAgaGlnaGxpZ2h0RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWFubm90YXRpb24taWRcIiwgYXJlYUhpZ2hsaWdodC5pZCk7XG4gICAgICAgICAgICBoaWdobGlnaHRFbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtYW5ub3RhdGlvbi1wYWdlLW51bVwiLCBgJHtwYWdlTWV0YS5wYWdlSW5mby5udW19YCk7XG4gICAgICAgICAgICBoaWdobGlnaHRFbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtYW5ub3RhdGlvbi1kb2MtZmluZ2VycHJpbnRcIiwgZG9jSW5mby5maW5nZXJwcmludCk7XG5cbiAgICAgICAgICAgIGhpZ2hsaWdodEVsZW1lbnQuY2xhc3NOYW1lID0gYGFyZWEtaGlnaGxpZ2h0IGFubm90YXRpb24gYXJlYS1oaWdobGlnaHQtJHthcmVhSGlnaGxpZ2h0LmlkfWA7XG5cbiAgICAgICAgICAgIGhpZ2hsaWdodEVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgICAgICAgICBoaWdobGlnaHRFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGJhY2tncm91bmRDb2xvcjtcbiAgICAgICAgICAgIChoaWdobGlnaHRFbGVtZW50LnN0eWxlIGFzIGFueSkubWl4QmxlbmRNb2RlID0gJ211bHRpcGx5JztcbiAgICAgICAgICAgIGhpZ2hsaWdodEVsZW1lbnQuc3R5bGUuYm9yZGVyID0gYDFweCBzb2xpZCAjYzZjNmM2YDtcblxuICAgICAgICAgICAgaGlnaGxpZ2h0RWxlbWVudC5zdHlsZS5sZWZ0ID0gYCR7b3ZlcmxheVJlY3QubGVmdH1weGA7XG4gICAgICAgICAgICBoaWdobGlnaHRFbGVtZW50LnN0eWxlLnRvcCA9IGAke292ZXJsYXlSZWN0LnRvcH1weGA7XG5cbiAgICAgICAgICAgIGhpZ2hsaWdodEVsZW1lbnQuc3R5bGUud2lkdGggPSBgJHtvdmVybGF5UmVjdC53aWR0aH1weGA7XG4gICAgICAgICAgICBoaWdobGlnaHRFbGVtZW50LnN0eWxlLmhlaWdodCA9IGAke292ZXJsYXlSZWN0LmhlaWdodH1weGA7XG5cbiAgICAgICAgICAgIGhpZ2hsaWdodEVsZW1lbnQuc3R5bGUuekluZGV4ID0gJzEnO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghIHRoaXMuYXJlYUhpZ2hsaWdodCEuaW1hZ2UpIHtcblxuICAgICAgICAgICAgdGhpcy5jYXB0dXJlRmlyc3RTY3JlZW5zaG90KClcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IGxvZy5lcnJvcihcIlVuYWJsZSB0byBjYXB0dXJlIGZpcnN0IHNjcmVlbnNob3Q6IFwiLCBlcnIpKTtcblxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSB1bmlxdWUgRE9NIElEIGZvciB0aGlzIHBhZ2VtYXJrLlxuICAgICAqL1xuICAgIHByaXZhdGUgY3JlYXRlSUQoKSB7XG4gICAgICAgIHJldHVybiBgYXJlYS1oaWdobGlnaHQtJHt0aGlzLmFyZWFIaWdobGlnaHQhLmlkfWA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQE92ZXJyaWRlXG4gICAgICovXG4gICAgcHVibGljIGRlc3Ryb3koKSB7XG5cbiAgICAgICAgY29uc3Qgc2VsZWN0b3IgPSBgLmFyZWEtaGlnaGxpZ2h0LSR7dGhpcy5hcmVhSGlnaGxpZ2h0IS5pZH1gO1xuICAgICAgICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuXG4gICAgICAgIGxvZy5kZWJ1ZyhgRm91bmQgTiBlbGVtZW50cyBmb3Igc2VsZWN0b3IgJHtzZWxlY3Rvcn06IGAgKyBlbGVtZW50cy5sZW5ndGgpO1xuXG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goaGlnaGxpZ2h0RWxlbWVudCA9PiB7XG4gICAgICAgICAgICBoaWdobGlnaHRFbGVtZW50LnBhcmVudEVsZW1lbnQhLnJlbW92ZUNoaWxkKGhpZ2hsaWdodEVsZW1lbnQpO1xuICAgICAgICB9KTtcblxuICAgIH1cblxufVxuIl19