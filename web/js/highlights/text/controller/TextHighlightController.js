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
const Preconditions_1 = require("polar-shared/src/Preconditions");
const DocFormatFactory_1 = require("../../../docformat/DocFormatFactory");
const KeyEvents_1 = require("../../../KeyEvents");
const TextHighlighterFactory_1 = require("./TextHighlighterFactory");
const TextExtracter_1 = require("./TextExtracter");
const TextHighlightRecords_1 = require("../../../metadata/TextHighlightRecords");
const SelectedContents_1 = require("../selection/SelectedContents");
const Hashcodes_1 = require("polar-shared/src/util/Hashcodes");
const TextHighlights_1 = require("../../../metadata/TextHighlights");
const AnnotationPointers_1 = require("../../../annotations/AnnotationPointers");
const Optional_1 = require("polar-shared/src/util/ts/Optional");
const Elements_1 = require("../../../util/Elements");
const DocMetas_1 = require("../../../metadata/DocMetas");
const TextSelections_1 = require("./TextSelections");
const TextHighlightRows_1 = require("./TextHighlightRows");
const log = Logger_1.Logger.create();
class TextHighlightController {
    constructor(model) {
        this.model = Preconditions_1.Preconditions.assertNotNull(model, "model");
        this.docFormat = DocFormatFactory_1.DocFormatFactory.getInstance();
    }
    onDocumentLoaded() {
        log.debug("TextHighlightController.onDocumentLoaded: ", this.model.docMeta);
    }
    start() {
        this.registerKeyDownListener();
        this.registerDocumentLoadedListener();
        this.registerWindowMessageListener();
    }
    registerKeyDownListener() {
        document.addEventListener("keydown", event => this.onKeyDown(event));
    }
    registerDocumentLoadedListener() {
        this.model.registerListenerForDocumentLoaded(() => this.onDocumentLoaded());
    }
    registerWindowMessageListener() {
        window.addEventListener("message", event => this.onMessageReceived(event), false);
    }
    onKeyDown(event) {
        return __awaiter(this, void 0, void 0, function* () {
            if (KeyEvents_1.KeyEvents.isKeyMetaActive(event)) {
                if (event.code) {
                    const getPageNum = () => {
                        const sel = window.getSelection();
                        if (sel.rangeCount >= 1) {
                            const range = sel.getRangeAt(0);
                            const startElement = range.startContainer instanceof Element ?
                                range.startContainer :
                                range.startContainer.parentElement;
                            if (startElement && startElement instanceof HTMLElement) {
                                const pageElement = Elements_1.Elements.untilRoot(startElement, ".page");
                                if (pageElement) {
                                    return parseInt(pageElement.getAttribute("data-page-number"), 10);
                                }
                            }
                        }
                        return undefined;
                    };
                    const pageNum = getPageNum();
                    switch (event.code) {
                        case "KeyT":
                            if (pageNum) {
                                yield this.doHighlight(pageNum);
                            }
                            break;
                        default:
                            break;
                    }
                }
            }
        });
    }
    onMessageReceived(event) {
        const triggerEvent = event.data;
        switch (event.data.type) {
            case "create-text-highlight":
                const typedMessage = event.data;
                const highlightColor = typedMessage.value.highlightColor;
                const pageNum = typedMessage.value.pageNum;
                this.doHighlight(pageNum, typedMessage.value.highlightColor)
                    .catch(err => log.error("Unable to create text highlight", err));
                break;
            case "delete-text-highlight":
                this.onTextHighlightDeleted(triggerEvent);
                break;
            case "scroll-to-text-highlight":
                this.onScrollToTextHighlight(triggerEvent);
                break;
            default:
                break;
        }
    }
    doHighlight(pageNum, highlightColor = 'yellow') {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.docFormat.name === "html") {
                yield this.doHighlightModern(highlightColor, pageNum);
            }
            else {
                this.doHighlightLegacy(highlightColor, pageNum);
            }
        });
    }
    doHighlightLegacy(highlightColor, pageNum) {
        const textHighlighter = this.createLegacyTextHighlighter(highlightColor, pageNum);
        textHighlighter.doHighlight();
    }
    doHighlightModern(highlightColor, pageNum) {
        return __awaiter(this, void 0, void 0, function* () {
            log.info("Doing modern text highlight");
            yield this.onTextHighlightCreatedModern(highlightColor, pageNum);
        });
    }
    createLegacyTextHighlighter(highlightColor, pageNum) {
        let sequence = 0;
        const controller = this;
        let textHighlighter;
        const textHighlighterOptions = {
            highlightedClass: "text-highlight-span",
            color: '',
            manual: true,
            onBeforeHighlight: (range) => {
                return true;
            },
            onAfterHighlight: (range, highlightElements) => {
                const id = sequence++;
                const highlightClazz = "text-highlight-" + id;
                highlightElements.forEach(function (highlightElement) {
                    highlightElement.className = highlightElement.className + " " + highlightClazz;
                });
                (() => __awaiter(this, void 0, void 0, function* () {
                    yield controller.onTextHighlightCreatedLegacy("." + highlightClazz, highlightColor, pageNum);
                    textHighlighter.removeHighlights();
                    log.info("Highlight completed.");
                }))().catch(err => log.error("Unable to highlight: ", err));
            },
            onRemoveHighlight(hlt) {
                log.info("onRemoveHighlight hlt: ", hlt);
                return true;
            }
        };
        const targetDocument = this.docFormat.targetDocument();
        textHighlighter = TextHighlighterFactory_1.TextHighlighterFactory.newInstance(targetDocument.body, textHighlighterOptions);
        return textHighlighter;
    }
    onTextHighlightCreatedLegacy(selector, highlightColor, pageNum) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.createTextHighlight(pageNum, () => __awaiter(this, void 0, void 0, function* () {
                log.info("TextHighlightController.onTextHighlightCreatedLegacy");
                const textHighlightRows = TextHighlightRows_1.TextHighlightRows.createFromSelector(selector);
                const rects = textHighlightRows.map(current => current.rect);
                const text = this.extractText(selector);
                const textSelections = TextExtracter_1.TextExtracter.toTextSelections(textHighlightRows);
                return TextHighlightRecords_1.TextHighlightRecords.create(rects, textSelections, { TEXT: text }, highlightColor);
            }));
        });
    }
    onTextHighlightCreatedModern(highlightColor, pageNum) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.createTextHighlight(pageNum, () => __awaiter(this, void 0, void 0, function* () {
                const win = Preconditions_1.notNull(this.docFormat.targetDocument()).defaultView;
                log.info("TextHighlightController.onTextHighlightCreatedModern");
                const selectedContent = SelectedContents_1.SelectedContents.compute(win);
                const rectTexts = selectedContent.rectTexts;
                const rects = rectTexts.map(current => current.boundingPageRect);
                const text = selectedContent.text;
                const textSelections = TextSelections_1.TextSelections.compute(selectedContent);
                return TextHighlightRecords_1.TextHighlightRecords.create(rects, textSelections, { TEXT: text }, highlightColor);
            }));
        });
    }
    createTextHighlight(pageNum, factory) {
        return __awaiter(this, void 0, void 0, function* () {
            const doc = Preconditions_1.notNull(this.docFormat.targetDocument());
            const win = doc.defaultView;
            const screenshotID = Hashcodes_1.Hashcodes.createRandomID();
            const textHighlightRecord = yield factory();
            const pageMeta = DocMetas_1.DocMetas.getPageMeta(this.model.docMeta, pageNum);
            log.info("Added text highlight to model");
            win.getSelection().empty();
            pageMeta.textHighlights[textHighlightRecord.id] = textHighlightRecord.value;
            return textHighlightRecord;
        });
    }
    extractText(selector) {
        let result = "";
        const elements = Array.from(document.querySelectorAll(selector));
        if (elements.length === 0) {
            return "";
        }
        let bottom;
        let right;
        const elementFontSizeInPixels = (element) => {
            const computedStyle = window.getComputedStyle(element, null);
            const fontSize = computedStyle.getPropertyValue('font-size');
            return parseInt(fontSize);
        };
        for (const element of Array.from(elements)) {
            const rect = element.getBoundingClientRect();
            if (bottom !== undefined && rect.bottom !== bottom) {
                result += "\n";
            }
            else {
                if (right !== undefined) {
                    const gap = rect.left - right;
                    if (gap >= 1) {
                        result += " ";
                    }
                }
            }
            result += element.innerText;
            bottom = rect.bottom;
            right = rect.right;
        }
        return result;
    }
    onScrollToTextHighlight(triggerEvent) {
        const annotationPointers = AnnotationPointers_1.AnnotationPointers.toAnnotationPointers(".text-highlight", triggerEvent);
        Optional_1.Optional.first(...annotationPointers).map(annotationDescriptor => {
            const id = annotationDescriptor.id;
            const element = document.querySelector(`.annotations div[data-annotation-id='${id}']`);
            element.scrollIntoView();
        });
    }
    onTextHighlightDeleted(triggerEvent) {
        log.info("Deleting text highlight from model: ", triggerEvent);
        const annotationPointers = AnnotationPointers_1.AnnotationPointers.toAnnotationPointers(".text-highlight", triggerEvent);
        Optional_1.Optional.first(...annotationPointers).map(annotationDescriptor => {
            log.info("Deleting annotationDescriptor: ", JSON.stringify(annotationDescriptor, null, "  "));
            const pageMeta = DocMetas_1.DocMetas.getPageMeta(this.model.docMeta, annotationDescriptor.pageNum);
            const textHighlight = pageMeta.textHighlights[annotationDescriptor.id];
            TextHighlights_1.TextHighlights.deleteTextHighlight(pageMeta, textHighlight);
        });
        log.info("Deleting text highlight");
    }
}
exports.TextHighlightController = TextHighlightController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGV4dEhpZ2hsaWdodENvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJUZXh0SGlnaGxpZ2h0Q29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUVBLDJEQUFzRDtBQUV0RCxrRUFBc0U7QUFDdEUsMEVBQXFFO0FBRXJFLGtEQUE2QztBQUM3QyxxRUFBZ0U7QUFDaEUsbURBQThDO0FBQzlDLGlGQUFpRztBQUNqRyxvRUFBK0Q7QUFDL0QsK0RBQTBEO0FBQzFELHFFQUFnRTtBQUNoRSxnRkFBMkU7QUFDM0UsZ0VBQTJEO0FBRzNELHFEQUFnRDtBQUNoRCx5REFBb0Q7QUFFcEQscURBQWdEO0FBQ2hELDJEQUFzRDtBQUV0RCxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFNUIsTUFBYSx1QkFBdUI7SUFFaEMsWUFBWSxLQUFZO1FBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsNkJBQWEsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxTQUFTLEdBQUcsbUNBQWdCLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDcEQsQ0FBQztJQU1NLGdCQUFnQjtRQUNuQixHQUFHLENBQUMsS0FBSyxDQUFDLDRDQUE0QyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDaEYsQ0FBQztJQUVNLEtBQUs7UUFFUixJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsOEJBQThCLEVBQUUsQ0FBQztRQUN0QyxJQUFJLENBQUMsNkJBQTZCLEVBQUUsQ0FBQztJQUV6QyxDQUFDO0lBRU8sdUJBQXVCO1FBQzNCLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDekUsQ0FBQztJ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QUFDLEVBQUUsQ0FBQztZQUVuQyxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLHdDQUF3QyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3ZGLE9BQVEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUU5QixDQUFDLENBQUMsQ0FBQztJQUdQLENBQUM7SUFLTyxzQkFBc0IsQ0FBQyxZQUEwQjtRQUVyRCxHQUFHLENBQUMsSUFBSSxDQUFDLHNDQUFzQyxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBRS9ELE1BQU0sa0JBQWtCLEdBQ2xCLHVDQUFrQixDQUFDLG9CQUFvQixDQUFDLGlCQUFpQixFQUFFLFlBQVksQ0FBQyxDQUFDO1FBRy9FLG1CQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsa0JBQWtCLENBQUMsQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsRUFBRTtZQUU3RCxHQUFHLENBQUMsSUFBSSxDQUFDLGlDQUFpQyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7WUFFOUYsTUFBTSxRQUFRLEdBQUcsbUJBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsb0JBQW9CLENBQUMsT0FBTyxDQUFDLENBQUM7WUFHeEYsTUFBTSxhQUFhLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUV2RSwrQkFBYyxDQUFDLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUVoRSxDQUFDLENBQUMsQ0FBQztRQUVILEdBQUcsQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUV4QyxDQUFDO0NBRUo7QUFqY0QsMERBaWNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtNb2RlbH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvTW9kZWwnO1xuaW1wb3J0IHtUcmlnZ2VyRXZlbnR9IGZyb20gJy4uLy4uLy4uL2NvbnRleHRtZW51L1RyaWdnZXJFdmVudCc7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7VGV4dEhpZ2hsaWdodFJvd30gZnJvbSAnLi9UZXh0SGlnaGxpZ2h0Um93JztcbmltcG9ydCB7bm90TnVsbCwgUHJlY29uZGl0aW9uc30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9QcmVjb25kaXRpb25zJztcbmltcG9ydCB7RG9jRm9ybWF0RmFjdG9yeX0gZnJvbSAnLi4vLi4vLi4vZG9jZm9ybWF0L0RvY0Zvcm1hdEZhY3RvcnknO1xuaW1wb3J0IHtEb2NGb3JtYXR9IGZyb20gJy4uLy4uLy4uL2RvY2Zvcm1hdC9Eb2NGb3JtYXQnO1xuaW1wb3J0IHtLZXlFdmVudHN9IGZyb20gJy4uLy4uLy4uL0tleUV2ZW50cyc7XG5pbXBvcnQge1RleHRIaWdobGlnaHRlckZhY3Rvcnl9IGZyb20gJy4vVGV4dEhpZ2hsaWdodGVyRmFjdG9yeSc7XG5pbXBvcnQge1RleHRFeHRyYWN0ZXJ9IGZyb20gJy4vVGV4dEV4dHJhY3Rlcic7XG5pbXBvcnQge1RleHRIaWdobGlnaHRSZWNvcmQsIFRleHRIaWdobGlnaHRSZWNvcmRzfSBmcm9tICcuLi8uLi8uLi9tZXRhZGF0YS9UZXh0SGlnaGxpZ2h0UmVjb3Jkcyc7XG5pbXBvcnQge1NlbGVjdGVkQ29udGVudHN9IGZyb20gJy4uL3NlbGVjdGlvbi9TZWxlY3RlZENvbnRlbnRzJztcbmltcG9ydCB7SGFzaGNvZGVzfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvSGFzaGNvZGVzJztcbmltcG9ydCB7VGV4dEhpZ2hsaWdodHN9IGZyb20gJy4uLy4uLy4uL21ldGFkYXRhL1RleHRIaWdobGlnaHRzJztcbmltcG9ydCB7QW5ub3RhdGlvblBvaW50ZXJzfSBmcm9tICcuLi8uLi8uLi9hbm5vdGF0aW9ucy9Bbm5vdGF0aW9uUG9pbnRlcnMnO1xuaW1wb3J0IHtPcHRpb25hbH0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL3RzL09wdGlvbmFsJztcbmltcG9ydCB7VHlwZWRNZXNzYWdlfSBmcm9tICcuLi8uLi8uLi91dGlsL1R5cGVkTWVzc2FnZSc7XG5pbXBvcnQge0hpZ2hsaWdodENyZWF0ZWRFdmVudH0gZnJvbSAnLi4vLi4vLi4vY29tbWVudHMvcmVhY3QvSGlnaGxpZ2h0Q3JlYXRlZEV2ZW50JztcbmltcG9ydCB7RWxlbWVudHN9IGZyb20gJy4uLy4uLy4uL3V0aWwvRWxlbWVudHMnO1xuaW1wb3J0IHtEb2NNZXRhc30gZnJvbSBcIi4uLy4uLy4uL21ldGFkYXRhL0RvY01ldGFzXCI7XG5pbXBvcnQge0hpZ2hsaWdodENvbG9yfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy9tZXRhZGF0YS9JQmFzZUhpZ2hsaWdodFwiO1xuaW1wb3J0IHtUZXh0U2VsZWN0aW9uc30gZnJvbSBcIi4vVGV4dFNlbGVjdGlvbnNcIjtcbmltcG9ydCB7VGV4dEhpZ2hsaWdodFJvd3N9IGZyb20gXCIuL1RleHRIaWdobGlnaHRSb3dzXCI7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuZXhwb3J0IGNsYXNzIFRleHRIaWdobGlnaHRDb250cm9sbGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKG1vZGVsOiBNb2RlbCkge1xuICAgICAgICB0aGlzLm1vZGVsID0gUHJlY29uZGl0aW9ucy5hc3NlcnROb3ROdWxsKG1vZGVsLCBcIm1vZGVsXCIpO1xuICAgICAgICB0aGlzLmRvY0Zvcm1hdCA9IERvY0Zvcm1hdEZhY3RvcnkuZ2V0SW5zdGFuY2UoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IG1vZGVsOiBNb2RlbDtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgZG9jRm9ybWF0OiBEb2NGb3JtYXQ7XG5cbiAgICBwdWJsaWMgb25Eb2N1bWVudExvYWRlZCgpIHtcbiAgICAgICAgbG9nLmRlYnVnKFwiVGV4dEhpZ2hsaWdodENvbnRyb2xsZXIub25Eb2N1bWVudExvYWRlZDogXCIsIHRoaXMubW9kZWwuZG9jTWV0YSk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXJ0KCkge1xuXG4gICAgICAgIHRoaXMucmVnaXN0ZXJLZXlEb3duTGlzdGVuZXIoKTtcbiAgICAgICAgdGhpcy5yZWdpc3RlckRvY3VtZW50TG9hZGVkTGlzdGVuZXIoKTtcbiAgICAgICAgdGhpcy5yZWdpc3RlcldpbmRvd01lc3NhZ2VMaXN0ZW5lcigpO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZWdpc3RlcktleURvd25MaXN0ZW5lcigpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZXZlbnQgPT4gdGhpcy5vbktleURvd24oZXZlbnQpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlZ2lzdGVyRG9jdW1lbnRMb2FkZWRMaXN0ZW5lcigpIHtcbiAgICAgICAgdGhpcy5tb2RlbC5yZWdpc3Rlckxpc3RlbmVyRm9yRG9jdW1lbnRMb2FkZWQoKCkgPT4gdGhpcy5vbkRvY3VtZW50TG9hZGVkKCkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVnaXN0ZXJXaW5kb3dNZXNzYWdlTGlzdGVuZXIoKSB7XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIGV2ZW50ID0+IHRoaXMub25NZXNzYWdlUmVjZWl2ZWQoZXZlbnQpLCBmYWxzZSk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIG9uS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCkge1xuXG4gICAgICAgIGlmIChLZXlFdmVudHMuaXNLZXlNZXRhQWN0aXZlKGV2ZW50KSkge1xuXG4gICAgICAgICAgICBpZiAoZXZlbnQuY29kZSkge1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZ2V0UGFnZU51bSA9ICgpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWwgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkhO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWwucmFuZ2VDb3VudCA+PSAxKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJhbmdlID0gc2VsLmdldFJhbmdlQXQoMCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0RWxlbWVudCA9IHJhbmdlLnN0YXJ0Q29udGFpbmVyIGluc3RhbmNlb2YgRWxlbWVudCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFuZ2Uuc3RhcnRDb250YWluZXIgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhbmdlLnN0YXJ0Q29udGFpbmVyLnBhcmVudEVsZW1lbnQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGFydEVsZW1lbnQgJiYgc3RhcnRFbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhZ2VFbGVtZW50ID0gRWxlbWVudHMudW50aWxSb290KHN0YXJ0RWxlbWVudCwgXCIucGFnZVwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYWdlRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQocGFnZUVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1wYWdlLW51bWJlclwiKSwgMTApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHBhZ2VOdW0gPSBnZXRQYWdlTnVtKCk7XG5cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGV2ZW50LmNvZGUpIHtcblxuICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiB3ZSBzaG91bGQgbm90IHVzZSAnY29kZScgYnV0IHNob3VsZCB1c2UgJ2tleScuLi4gVGhlXG4gICAgICAgICAgICAgICAgICAgIC8vIHByb2JsZW0gaXMgdGhhdCBvbiBPUyBYIHRoZSBrZXkgY29kZSByZXR1cm5lZCAnRGVhZCcgYnV0IHdhc1xuICAgICAgICAgICAgICAgICAgICAvLyB3b3JraW5nIGJlZm9yZS4gIE5vdCBzdXJlIHdoeSBpdCBzdGFydGVkIGJyZWFraW5nLlxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiS2V5VFwiOlxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFnZU51bSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuZG9IaWdobGlnaHQocGFnZU51bSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHByaXZhdGUgb25NZXNzYWdlUmVjZWl2ZWQoZXZlbnQ6IGFueSkge1xuXG4gICAgICAgIC8vIGxvZy5pbmZvKFwiUmVjZWl2ZWQgbWVzc2FnZTogXCIsIGV2ZW50KTtcblxuICAgICAgICBjb25zdCB0cmlnZ2VyRXZlbnQgPSBldmVudC5kYXRhO1xuXG4gICAgICAgIHN3aXRjaCAoZXZlbnQuZGF0YS50eXBlKSB7XG5cbiAgICAgICAgICAgIGNhc2UgXCJjcmVhdGUtdGV4dC1oaWdobGlnaHRcIjpcblxuICAgICAgICAgICAgICAgIGNvbnN0IHR5cGVkTWVzc2FnZTogVHlwZWRNZXNzYWdlPEhpZ2hsaWdodENyZWF0ZWRFdmVudD4gPSBldmVudC5kYXRhO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgaGlnaGxpZ2h0Q29sb3IgPSB0eXBlZE1lc3NhZ2UudmFsdWUuaGlnaGxpZ2h0Q29sb3I7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFnZU51bSA9IHR5cGVkTWVzc2FnZS52YWx1ZS5wYWdlTnVtO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5kb0hpZ2hsaWdodChwYWdlTnVtLCB0eXBlZE1lc3NhZ2UudmFsdWUuaGlnaGxpZ2h0Q29sb3IpXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gbG9nLmVycm9yKFwiVW5hYmxlIHRvIGNyZWF0ZSB0ZXh0IGhpZ2hsaWdodFwiLCBlcnIpKTtcblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwiZGVsZXRlLXRleHQtaGlnaGxpZ2h0XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5vblRleHRIaWdobGlnaHREZWxldGVkKHRyaWdnZXJFdmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCJzY3JvbGwtdG8tdGV4dC1oaWdobGlnaHRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLm9uU2Nyb2xsVG9UZXh0SGlnaGxpZ2h0KHRyaWdnZXJFdmVudCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgLy8gbG9nLndhcm4oXCJVbmhhbmRsZWQgbWVzc2FnZTogXCIgKyBldmVudC5kYXRhLnR5cGUsIGV2ZW50LmRhdGEpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgZG9IaWdobGlnaHQocGFnZU51bTogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlnaGxpZ2h0Q29sb3I6IEhpZ2hsaWdodENvbG9yID0gJ3llbGxvdycpIHtcblxuICAgICAgICBpZiAodGhpcy5kb2NGb3JtYXQubmFtZSA9PT0gXCJodG1sXCIpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZG9IaWdobGlnaHRNb2Rlcm4oaGlnaGxpZ2h0Q29sb3IsIHBhZ2VOdW0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kb0hpZ2hsaWdodExlZ2FjeShoaWdobGlnaHRDb2xvciwgcGFnZU51bSk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHB1YmxpYyBkb0hpZ2hsaWdodExlZ2FjeShoaWdobGlnaHRDb2xvcjogSGlnaGxpZ2h0Q29sb3IsIHBhZ2VOdW06IG51bWJlcikge1xuXG4gICAgICAgIGNvbnN0IHRleHRIaWdobGlnaHRlciA9IHRoaXMuY3JlYXRlTGVnYWN5VGV4dEhpZ2hsaWdodGVyKGhpZ2hsaWdodENvbG9yLCBwYWdlTnVtKTtcbiAgICAgICAgdGV4dEhpZ2hsaWdodGVyLmRvSGlnaGxpZ2h0KCk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgZG9IaWdobGlnaHRNb2Rlcm4oaGlnaGxpZ2h0Q29sb3I6IEhpZ2hsaWdodENvbG9yLCBwYWdlTnVtOiBudW1iZXIpIHtcblxuICAgICAgICBsb2cuaW5mbyhcIkRvaW5nIG1vZGVybiB0ZXh0IGhpZ2hsaWdodFwiKTtcbiAgICAgICAgYXdhaXQgdGhpcy5vblRleHRIaWdobGlnaHRDcmVhdGVkTW9kZXJuKGhpZ2hsaWdodENvbG9yLCBwYWdlTnVtKTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCB0ZXh0IGhpZ2hsaWdodGluZyBpbiB0aGUgY3VycmVudCBkb2N1bWVudCB3aXRoIHRoZSBoaWdobGlnaHRlci5cbiAgICAgKi9cbiAgICBwdWJsaWMgY3JlYXRlTGVnYWN5VGV4dEhpZ2hsaWdodGVyKGhpZ2hsaWdodENvbG9yOiBIaWdobGlnaHRDb2xvciwgcGFnZU51bTogbnVtYmVyKSB7XG5cbiAgICAgICAgbGV0IHNlcXVlbmNlID0gMDtcblxuICAgICAgICBjb25zdCBjb250cm9sbGVyID0gdGhpcztcblxuICAgICAgICBsZXQgdGV4dEhpZ2hsaWdodGVyOiBhbnkgfCB1bmRlZmluZWQ7XG5cbiAgICAgICAgY29uc3QgdGV4dEhpZ2hsaWdodGVyT3B0aW9ucyA9IHtcblxuICAgICAgICAgICAgaGlnaGxpZ2h0ZWRDbGFzczogXCJ0ZXh0LWhpZ2hsaWdodC1zcGFuXCIsXG4gICAgICAgICAgICBjb2xvcjogJycsIC8vIHRoaXMgd29ya3MgYW5kIHRoZSBjb2xvciBpc24ndCBjaGFuZ2VkLlxuICAgICAgICAgICAgbWFudWFsOiB0cnVlLFxuXG4gICAgICAgICAgICBvbkJlZm9yZUhpZ2hsaWdodDogKHJhbmdlOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBsb2cuaW5mbyhcIm9uQmVmb3JlSGlnaGxpZ2h0IHJhbmdlOiBcIiwgcmFuZ2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgb25BZnRlckhpZ2hsaWdodDogKHJhbmdlOiBhbnksIGhpZ2hsaWdodEVsZW1lbnRzOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBsb2cuaW5mbyhcIm9uQWZ0ZXJIaWdobGlnaHQgcmFuZ2U6IFwiLCByYW5nZSk7XG4gICAgICAgICAgICAgICAgLy8gbG9nLmluZm8oXCJvbkFmdGVySGlnaGxpZ2h0IGhsdHM6IFwiLCBoaWdobGlnaHRFbGVtZW50cyk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBpZCA9IHNlcXVlbmNlKys7XG4gICAgICAgICAgICAgICAgY29uc3QgaGlnaGxpZ2h0Q2xhenogPSBcInRleHQtaGlnaGxpZ2h0LVwiICsgaWQ7XG5cbiAgICAgICAgICAgICAgICBoaWdobGlnaHRFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGhpZ2hsaWdodEVsZW1lbnQ6IGFueSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBoaWdobGlnaHRFbGVtZW50LnN0eWxlLmNvbG9yID0gJ2JsdWUnO1xuICAgICAgICAgICAgICAgICAgICBoaWdobGlnaHRFbGVtZW50LmNsYXNzTmFtZSA9IGhpZ2hsaWdodEVsZW1lbnQuY2xhc3NOYW1lICsgXCIgXCIgKyBoaWdobGlnaHRDbGF6ejtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIChhc3luYyAoKSA9PiAge1xuXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IGNvbnRyb2xsZXIub25UZXh0SGlnaGxpZ2h0Q3JlYXRlZExlZ2FjeShcIi5cIiArIGhpZ2hsaWdodENsYXp6LCBoaWdobGlnaHRDb2xvciwgcGFnZU51bSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlIHVuZGVybHlpbmcgPHNwYW4+IGhpZ2hsaWdodHMgbmVlZCB0byBiZSByZW1vdmVkIG5vdy5cblxuICAgICAgICAgICAgICAgICAgICB0ZXh0SGlnaGxpZ2h0ZXIucmVtb3ZlSGlnaGxpZ2h0cygpO1xuXG4gICAgICAgICAgICAgICAgICAgIGxvZy5pbmZvKFwiSGlnaGxpZ2h0IGNvbXBsZXRlZC5cIik7XG5cbiAgICAgICAgICAgICAgICB9KSgpLmNhdGNoKGVyciA9PiBsb2cuZXJyb3IoXCJVbmFibGUgdG8gaGlnaGxpZ2h0OiBcIiwgZXJyKSk7XG5cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIG9uUmVtb3ZlSGlnaGxpZ2h0KGhsdDogYW55KSB7XG4gICAgICAgICAgICAgICAgbG9nLmluZm8oXCJvblJlbW92ZUhpZ2hsaWdodCBobHQ6IFwiLCBobHQpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgdGFyZ2V0RG9jdW1lbnQgPSB0aGlzLmRvY0Zvcm1hdC50YXJnZXREb2N1bWVudCgpO1xuXG4gICAgICAgIHRleHRIaWdobGlnaHRlciA9IFRleHRIaWdobGlnaHRlckZhY3RvcnkubmV3SW5zdGFuY2UodGFyZ2V0RG9jdW1lbnQhLmJvZHksIHRleHRIaWdobGlnaHRlck9wdGlvbnMpO1xuXG4gICAgICAgIHJldHVybiB0ZXh0SGlnaGxpZ2h0ZXI7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgYnkgdGhlIGNvbnRyb2xsZXIgd2hlbiB3ZSBoYXZlIGEgbmV3IGhpZ2hsaWdodCBjcmVhdGVkIHNvIHRoYXRcbiAgICAgKiB3ZSBjYW4gdXBkYXRlIHRoZSBtb2RlbC5cbiAgICAgKi9cbiAgICBwcml2YXRlIGFzeW5jIG9uVGV4dEhpZ2hsaWdodENyZWF0ZWRMZWdhY3koc2VsZWN0b3I6IHN0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlnaGxpZ2h0Q29sb3I6IEhpZ2hsaWdodENvbG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlTnVtOiBudW1iZXIpIHtcblxuICAgICAgICBhd2FpdCB0aGlzLmNyZWF0ZVRleHRIaWdobGlnaHQocGFnZU51bSwgYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgICAgICAvLyBGSVhNRTogZ2V0IHRoZSBuZXcgaGlnaGxpZ2h0ZXIgd29ya2luZyBGSVJTVCB3aXRob3V0IHRleHQgYW5kIHdpdGhvdXRcbiAgICAgICAgICAgIC8vIHJvd3MgLCBvciBvdGhlciBhZHZhbmNlZCBmZWF0dXJlcy5cblxuICAgICAgICAgICAgbG9nLmluZm8oXCJUZXh0SGlnaGxpZ2h0Q29udHJvbGxlci5vblRleHRIaWdobGlnaHRDcmVhdGVkTGVnYWN5XCIpO1xuXG4gICAgICAgICAgICBjb25zdCB0ZXh0SGlnaGxpZ2h0Um93czogVGV4dEhpZ2hsaWdodFJvd1tdID0gVGV4dEhpZ2hsaWdodFJvd3MuY3JlYXRlRnJvbVNlbGVjdG9yKHNlbGVjdG9yKTtcblxuICAgICAgICAgICAgY29uc3QgcmVjdHMgPSB0ZXh0SGlnaGxpZ2h0Um93cy5tYXAoY3VycmVudCA9PiBjdXJyZW50LnJlY3QpO1xuXG4gICAgICAgICAgICAvLyBUT0RPOiBkb24ndCBkbyB0aGlzIGZyb20gdGhlIHNlbGVjdG9yIGJlY2F1c2UgdGhlIHRleHRIaWdobGlnaHRSb3dzXG4gICAgICAgICAgICAvLyB3b3VsZCBiZSBhIGxvdCBiZXR0ZXIgc2luY2Ugd2UgaGF2ZSB0aGUgcmF3IGVsZW1lbnRzIHRvIHdvcmsgd2l0aC5cblxuICAgICAgICAgICAgLy8gRklYTUU6IEkgY2FuIGNhbGwgc2VsZWN0aW9uLnRvU3RyaW5nKCkgdG8gZ2V0IHRoZSB2YWx1ZSBhcyBhIHN0cmluZy5cbiAgICAgICAgICAgIC8vIEkgZG9uJ3QgbmVlZCB0byB1c2UgZXh0cmFjdFRleHQgb24gdGhlIHNlbGVjdG9yIGFueSBtb3JlLlxuXG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gdGhpcy5leHRyYWN0VGV4dChzZWxlY3Rvcik7XG5cbiAgICAgICAgICAgIGNvbnN0IHRleHRTZWxlY3Rpb25zID0gVGV4dEV4dHJhY3Rlci50b1RleHRTZWxlY3Rpb25zKHRleHRIaWdobGlnaHRSb3dzKTtcblxuICAgICAgICAgICAgcmV0dXJuIFRleHRIaWdobGlnaHRSZWNvcmRzLmNyZWF0ZShyZWN0cywgdGV4dFNlbGVjdGlvbnMsIHtURVhUOiB0ZXh0fSwgaGlnaGxpZ2h0Q29sb3IpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIGJ5IHRoZSBjb250cm9sbGVyIHdoZW4gd2UgaGF2ZSBhIG5ldyBoaWdobGlnaHQgY3JlYXRlZCBzbyB0aGF0XG4gICAgICogd2UgY2FuIHVwZGF0ZSB0aGUgbW9kZWwuXG4gICAgICovXG4gICAgcHJpdmF0ZSBhc3luYyBvblRleHRIaWdobGlnaHRDcmVhdGVkTW9kZXJuKGhpZ2hsaWdodENvbG9yOiBIaWdobGlnaHRDb2xvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZU51bTogbnVtYmVyKSB7XG5cbiAgICAgICAgLy8gRklYTUU6IGdldCB0aGUgbmV3IGhpZ2hsaWdodGVyIHdvcmtpbmcgRklSU1Qgd2l0aG91dCB0ZXh0IGFuZCB3aXRob3V0XG4gICAgICAgIC8vIHJvd3MgLCBvciBvdGhlciBhZHZhbmNlZCBmZWF0dXJlcy5cblxuICAgICAgICBhd2FpdCB0aGlzLmNyZWF0ZVRleHRIaWdobGlnaHQocGFnZU51bSwgYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCB3aW4gPSBub3ROdWxsKHRoaXMuZG9jRm9ybWF0LnRhcmdldERvY3VtZW50KCkpLmRlZmF1bHRWaWV3ITtcblxuICAgICAgICAgICAgbG9nLmluZm8oXCJUZXh0SGlnaGxpZ2h0Q29udHJvbGxlci5vblRleHRIaWdobGlnaHRDcmVhdGVkTW9kZXJuXCIpO1xuXG4gICAgICAgICAgICAvLyByaWdodCBub3cgd2UncmUgbm90IGltcGxlbWVudGluZyByb3dzLi4uXG4gICAgICAgICAgICAvLyBsZXQgdGV4dEhpZ2hsaWdodFJvd3MgPSBUZXh0SGlnaGxpZ2h0Um93cy5jcmVhdGVGcm9tU2VsZWN0b3Ioc2VsZWN0b3IpO1xuXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZENvbnRlbnQgPSBTZWxlY3RlZENvbnRlbnRzLmNvbXB1dGUod2luKTtcblxuICAgICAgICAgICAgY29uc3QgcmVjdFRleHRzOiBhbnlbXSA9IHNlbGVjdGVkQ29udGVudC5yZWN0VGV4dHM7XG4gICAgICAgICAgICBjb25zdCByZWN0cyA9IHJlY3RUZXh0cy5tYXAoY3VycmVudCA9PiBjdXJyZW50LmJvdW5kaW5nUGFnZVJlY3QpO1xuXG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gc2VsZWN0ZWRDb250ZW50LnRleHQ7XG5cbiAgICAgICAgICAgIGNvbnN0IHRleHRTZWxlY3Rpb25zID0gVGV4dFNlbGVjdGlvbnMuY29tcHV0ZShzZWxlY3RlZENvbnRlbnQpO1xuXG4gICAgICAgICAgICByZXR1cm4gVGV4dEhpZ2hsaWdodFJlY29yZHMuY3JlYXRlKHJlY3RzLCB0ZXh0U2VsZWN0aW9ucywge1RFWFQ6IHRleHR9LCBoaWdobGlnaHRDb2xvcik7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gbGV0IHJlY3RzID0gdGV4dEhpZ2hsaWdodFJvd3MubWFwKGN1cnJlbnQgPT4gY3VycmVudC5yZWN0KTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gLy8gVE9ETzogZG9uJ3QgZG8gdGhpcyBmcm9tIHRoZSBzZWxlY3RvciBiZWNhdXNlIHRoZSB0ZXh0SGlnaGxpZ2h0Um93c1xuICAgICAgICAvLyAvLyB3b3VsZCBiZSBhIGxvdCBiZXR0ZXIgc2luY2Ugd2UgaGF2ZSB0aGUgcmF3IGVsZW1lbnRzIHRvIHdvcmsgd2l0aC5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gLy8gRklYTUU6IEkgY2FuIGNhbGwgc2VsZWN0aW9uLnRvU3RyaW5nKCkgdG8gZ2V0IHRoZSB2YWx1ZSBhcyBhIHN0cmluZy5cbiAgICAgICAgLy8gLy8gSSBkb24ndCBuZWVkIHRvIHVzZSBleHRyYWN0VGV4dCBvbiB0aGUgc2VsZWN0b3IgYW55IG1vcmUuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIGxldCB0ZXh0ID0gdGhpcy5leHRyYWN0VGV4dChzZWxlY3Rvcik7XG4gICAgICAgIC8vXG4gICAgICAgIC8vIGxldCB0ZXh0U2VsZWN0aW9ucyA9IFRleHRFeHRyYWN0ZXIudG9UZXh0U2VsZWN0aW9ucyh0ZXh0SGlnaGxpZ2h0Um93cyk7XG4gICAgICAgIC8vXG4gICAgICAgIC8vIGxldCB0ZXh0SGlnaGxpZ2h0UmVjb3JkID0gVGV4dEhpZ2hsaWdodFJlY29yZHMuY3JlYXRlKHJlY3RzLCB0ZXh0U2VsZWN0aW9ucywgdGV4dCk7XG4gICAgICAgIC8vXG4gICAgICAgIC8vIC8vIG5vdyB1cGRhdGUgdGhlIG1vZGUgYmFzZWQgb24gdGhlIGN1cnJlbnQgcGFnZSBtZXRhZGF0YVxuICAgICAgICAvL1xuICAgICAgICAvLyBsZXQgY3VycmVudFBhZ2VNZXRhID0gdGhpcy5kb2NGb3JtYXQuZ2V0Q3VycmVudFBhZ2VNZXRhKCk7XG4gICAgICAgIC8vXG4gICAgICAgIC8vIGxldCBwYWdlTWV0YSA9IHRoaXMubW9kZWwuZG9jTWV0YS5nZXRQYWdlTWV0YShjdXJyZW50UGFnZU1ldGEucGFnZU51bSk7XG4gICAgICAgIC8vXG4gICAgICAgIC8vIHBhZ2VNZXRhLnRleHRIaWdobGlnaHRzW3RleHRIaWdobGlnaHRSZWNvcmQuaWRdID0gdGV4dEhpZ2hsaWdodFJlY29yZC52YWx1ZTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gbG9nLmluZm8oXCJBZGRlZCB0ZXh0IGhpZ2hsaWdodCB0byBtb2RlbFwiKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBjcmVhdGVUZXh0SGlnaGxpZ2h0KHBhZ2VOdW06IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWN0b3J5OiAoKSA9PiBQcm9taXNlPFRleHRIaWdobGlnaHRSZWNvcmQ+KTogUHJvbWlzZTxUZXh0SGlnaGxpZ2h0UmVjb3JkPiB7XG5cbiAgICAgICAgLy8gVE9ETzogdGhpcyByZWFsbHkgbmVlZHMgdG8gYmUgcmV3b3JrZWQgc28gSSBjYW4gdGVzdCBpdCBwcm9wZXJseSB3aXRoXG4gICAgICAgIC8vIHNvbWUgc29ydCBvZiBzY3JlZW5zaG90IHByb3ZpZGVyXG5cbiAgICAgICAgY29uc3QgZG9jID0gbm90TnVsbCh0aGlzLmRvY0Zvcm1hdC50YXJnZXREb2N1bWVudCgpKTtcbiAgICAgICAgY29uc3Qgd2luID0gZG9jLmRlZmF1bHRWaWV3ITtcblxuICAgICAgICBjb25zdCBzY3JlZW5zaG90SUQgPSBIYXNoY29kZXMuY3JlYXRlUmFuZG9tSUQoKTtcblxuICAgICAgICAvLyBzdGFydCB0aGUgc2NyZWVuc2hvdCBub3cgYnV0IGRvbid0IGF3YWl0IGl0IHlldC4gIHRoaXMgd2F5IHdlJ3JlIG5vdFxuICAgICAgICAvLyBibG9ja2luZyB0aGUgY3JlYXRpb24gb2YgdGhlIHNjcmVlbnNob3QgaW4gdGhlIFVJLlxuICAgICAgICAvLyBjb25zdCBzZWxlY3Rpb25TY3JlZW5zaG90ID0gU2VsZWN0aW9uU2NyZWVuc2hvdHMuY2FwdHVyZShkb2MsIHdpbik7XG5cbiAgICAgICAgY29uc3QgdGV4dEhpZ2hsaWdodFJlY29yZCA9IGF3YWl0IGZhY3RvcnkoKTtcblxuICAgICAgICBjb25zdCBwYWdlTWV0YSA9IERvY01ldGFzLmdldFBhZ2VNZXRhKHRoaXMubW9kZWwuZG9jTWV0YSwgcGFnZU51bSk7XG5cbiAgICAgICAgbG9nLmluZm8oXCJBZGRlZCB0ZXh0IGhpZ2hsaWdodCB0byBtb2RlbFwiKTtcblxuICAgICAgICAvLyBub3cgY2xlYXIgdGhlIHNlbGVjdGlvbiBzaW5jZSB3ZSBqdXN0IGhpZ2hsaWdodGVkIGl0LlxuICAgICAgICB3aW4uZ2V0U2VsZWN0aW9uKCkhLmVtcHR5KCk7XG5cbiAgICAgICAgcGFnZU1ldGEudGV4dEhpZ2hsaWdodHNbdGV4dEhpZ2hsaWdodFJlY29yZC5pZF0gPSB0ZXh0SGlnaGxpZ2h0UmVjb3JkLnZhbHVlO1xuXG4gICAgICAgIHJldHVybiB0ZXh0SGlnaGxpZ2h0UmVjb3JkO1xuXG4gICAgfVxuXG4gICAgcHVibGljIGV4dHJhY3RUZXh0KHNlbGVjdG9yOiBzdHJpbmcpIHtcblxuICAgICAgICBsZXQgcmVzdWx0ID0gXCJcIjtcblxuICAgICAgICBjb25zdCBlbGVtZW50czogSFRNTEVsZW1lbnRbXVxuICAgICAgICAgICAgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKTtcblxuICAgICAgICBpZiAoZWxlbWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBib3R0b206IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgICAgICAgbGV0IHJpZ2h0OiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cbiAgICAgICAgY29uc3QgZWxlbWVudEZvbnRTaXplSW5QaXhlbHMgPSAoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBudW1iZXIgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQsIG51bGwpO1xuICAgICAgICAgICAgY29uc3QgZm9udFNpemUgPSBjb21wdXRlZFN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ2ZvbnQtc2l6ZScpO1xuICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KGZvbnRTaXplKTtcbiAgICAgICAgfTtcblxuICAgICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgQXJyYXkuZnJvbShlbGVtZW50cykpIHtcblxuICAgICAgICAgICAgY29uc3QgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgICAgIC8vIGNvbnN0IGZvbnRTaXplID0gZWxlbWVudEZvbnRTaXplSW5QaXhlbHMoZWxlbWVudCk7XG5cbiAgICAgICAgICAgIC8vIEZpcnN0LCBoYW5kbGUgc3BhY2luZyBmb3IgdGhlIGxheW91dCB3aGljaCBtb3N0bHkganVzdCBhcHBsaWVzXG4gICAgICAgICAgICAvLyB0byBQREYuanMgYnV0IGFsc28gd29ya3MgZm9yIGh0bWwgYnV0IHRoaXMgaXMgYWxtb3N0IGFsd2F5c1xuICAgICAgICAgICAgLy8gZmxvd2luZyB0ZXh0IHNvIHByZXR0eSBtdWNoIGFsd2F5cyBqdXN0IHdvcmtzLiAgUERGLmpzIGlzIHRoZVxuICAgICAgICAgICAgLy8gb3V0bGllciB0aG91Z2guXG5cbiAgICAgICAgICAgIGlmIChib3R0b20gIT09IHVuZGVmaW5lZCAmJiByZWN0LmJvdHRvbSAhPT0gYm90dG9tKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ICs9IFwiXFxuXCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgaWYgKHJpZ2h0ICE9PSB1bmRlZmluZWQpIHtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBnYXAgPSByZWN0LmxlZnQgLSByaWdodDtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoZ2FwID49IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSBcIiBcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFNlY29uZCwganVzdCBhcHBlbmQgdGhlIHRleHQgbm93LlxuXG4gICAgICAgICAgICByZXN1bHQgKz0gZWxlbWVudC5pbm5lclRleHQ7XG5cbiAgICAgICAgICAgIGJvdHRvbSA9IHJlY3QuYm90dG9tO1xuICAgICAgICAgICAgcmlnaHQgPSByZWN0LnJpZ2h0O1xuXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblNjcm9sbFRvVGV4dEhpZ2hsaWdodCh0cmlnZ2VyRXZlbnQ6IFRyaWdnZXJFdmVudCkge1xuXG4gICAgICAgIGNvbnN0IGFubm90YXRpb25Qb2ludGVyc1xuICAgICAgICAgICAgPSBBbm5vdGF0aW9uUG9pbnRlcnMudG9Bbm5vdGF0aW9uUG9pbnRlcnMoXCIudGV4dC1oaWdobGlnaHRcIiwgdHJpZ2dlckV2ZW50KTtcblxuICAgICAgICBPcHRpb25hbC5maXJzdCguLi5hbm5vdGF0aW9uUG9pbnRlcnMpLm1hcChhbm5vdGF0aW9uRGVzY3JpcHRvciA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IGlkID0gYW5ub3RhdGlvbkRlc2NyaXB0b3IuaWQ7XG5cbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuYW5ub3RhdGlvbnMgZGl2W2RhdGEtYW5ub3RhdGlvbi1pZD0nJHtpZH0nXWApO1xuICAgICAgICAgICAgZWxlbWVudCEuc2Nyb2xsSW50b1ZpZXcoKTtcblxuICAgICAgICB9KTtcblxuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQSB0ZXh0IGhpZ2hsaWdodCB3YXMgZGVsZXRlZCBzbyB1cGRhdGUgdGhlIG1vZGVsIG5vdy5cbiAgICAgKi9cbiAgICBwcml2YXRlIG9uVGV4dEhpZ2hsaWdodERlbGV0ZWQodHJpZ2dlckV2ZW50OiBUcmlnZ2VyRXZlbnQpIHtcblxuICAgICAgICBsb2cuaW5mbyhcIkRlbGV0aW5nIHRleHQgaGlnaGxpZ2h0IGZyb20gbW9kZWw6IFwiLCB0cmlnZ2VyRXZlbnQpO1xuXG4gICAgICAgIGNvbnN0IGFubm90YXRpb25Qb2ludGVyc1xuICAgICAgICAgICAgPSBBbm5vdGF0aW9uUG9pbnRlcnMudG9Bbm5vdGF0aW9uUG9pbnRlcnMoXCIudGV4dC1oaWdobGlnaHRcIiwgdHJpZ2dlckV2ZW50KTtcblxuICAgICAgICAvLyBzaG91bGQgd2UganVzdCBzZW5kIHRoaXMgZXZlbnQgdG8gYWxsIHRoZSB0aGUgd2luZG93cz9cbiAgICAgICAgT3B0aW9uYWwuZmlyc3QoLi4uYW5ub3RhdGlvblBvaW50ZXJzKS5tYXAoYW5ub3RhdGlvbkRlc2NyaXB0b3IgPT4ge1xuXG4gICAgICAgICAgICBsb2cuaW5mbyhcIkRlbGV0aW5nIGFubm90YXRpb25EZXNjcmlwdG9yOiBcIiwgSlNPTi5zdHJpbmdpZnkoYW5ub3RhdGlvbkRlc2NyaXB0b3IsIG51bGwsIFwiICBcIikpO1xuXG4gICAgICAgICAgICBjb25zdCBwYWdlTWV0YSA9IERvY01ldGFzLmdldFBhZ2VNZXRhKHRoaXMubW9kZWwuZG9jTWV0YSwgYW5ub3RhdGlvbkRlc2NyaXB0b3IucGFnZU51bSk7XG5cbiAgICAgICAgICAgIC8vIGtlZXAgdGhlIGN1cnJlbnQgaGlnaGxpZ2h0LlxuICAgICAgICAgICAgY29uc3QgdGV4dEhpZ2hsaWdodCA9IHBhZ2VNZXRhLnRleHRIaWdobGlnaHRzW2Fubm90YXRpb25EZXNjcmlwdG9yLmlkXTtcblxuICAgICAgICAgICAgVGV4dEhpZ2hsaWdodHMuZGVsZXRlVGV4dEhpZ2hsaWdodChwYWdlTWV0YSwgdGV4dEhpZ2hsaWdodCk7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbG9nLmluZm8oXCJEZWxldGluZyB0ZXh0IGhpZ2hsaWdodFwiKTtcblxuICAgIH1cblxufVxuXG5cbiJdfQ==