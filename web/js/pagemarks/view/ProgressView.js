"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Logger_1 = require("polar-shared/src/logger/Logger");
const Functions_1 = require("polar-shared/src/util/Functions");
const DocMetaDescriber_1 = require("../../metadata/DocMetaDescriber");
const DocMetas_1 = require("../../metadata/DocMetas");
const log = Logger_1.Logger.create();
class ProgressView {
    constructor(model) {
        this.model = model;
    }
    start() {
        log.info("Starting...");
        this.model.registerListenerForDocumentLoaded(documentLoadedEvent => {
            log.info("onDocumentLoaded");
            const docMeta = documentLoadedEvent.docMeta;
            Functions_1.forDict(docMeta.pageMetas, (key, pageMeta) => {
                pageMeta.pagemarks.addTraceListener(() => {
                    this.update();
                });
            });
        });
    }
    update() {
        const perc = DocMetas_1.DocMetas.computeProgress(this.model.docMeta);
        log.info("Percentage is now: " + perc);
        const progressElement = document.querySelector("#polar-progress progress");
        progressElement.value = perc;
        const description = DocMetaDescriber_1.DocMetaDescriber.describe(this.model.docMeta);
        const docOverview = document.querySelector("#polar-doc-overview");
        if (docOverview) {
            docOverview.textContent = description;
        }
    }
}
exports.ProgressView = ProgressView;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZ3Jlc3NWaWV3LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUHJvZ3Jlc3NWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsMkRBQXNEO0FBQ3RELCtEQUF3RDtBQUN4RCxzRUFBaUU7QUFDakUsc0RBQWlEO0FBRWpELE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUs1QixNQUFhLFlBQVk7SUFJckIsWUFBWSxLQUFZO1FBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUFFTSxLQUFLO1FBRVIsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUV4QixJQUFJLENBQUMsS0FBSyxDQUFDLGlDQUFpQyxDQUFDLG1CQUFtQixDQUFDLEVBQUU7WUFFL0QsR0FBRyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBRTdCLE1BQU0sT0FBTyxHQUFHLG1CQUFtQixDQUFDLE9BQU8sQ0FBQztZQUU1QyxtQkFBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxHQUFHLEVBQUUsUUFBUSxFQUFFLEVBQUU7Z0JBRXpDLFFBQVEsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxFQUFFO29CQUNyQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ2xCLENBQUMsQ0FBQyxDQUFDO1lBRVAsQ0FBQyxDQUFDLENBQUM7UUFFUCxDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7SUFFTSxNQUFNO1FBS1QsTUFBTSxJQUFJLEdBQUcsbUJBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUUxRCxHQUFHLENBQUMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxDQUFDO1FBRXZDLE1BQU0sZUFBZSxHQUF5QixRQUFRLENBQUMsYUFBYSxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFDakcsZUFBZSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFJN0IsTUFBTSxXQUFXLEdBQUcsbUNBQWdCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFbEUsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBRWxFLElBQUksV0FBVyxFQUFFO1lBQ2IsV0FBVyxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7U0FDekM7SUFFTCxDQUFDO0NBRUo7QUF0REQsb0NBc0RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtNb2RlbH0gZnJvbSAnLi4vLi4vbW9kZWwvTW9kZWwnO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge2ZvckRpY3R9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC9GdW5jdGlvbnMnO1xuaW1wb3J0IHtEb2NNZXRhRGVzY3JpYmVyfSBmcm9tICcuLi8uLi9tZXRhZGF0YS9Eb2NNZXRhRGVzY3JpYmVyJztcbmltcG9ydCB7RG9jTWV0YXN9IGZyb20gJy4uLy4uL21ldGFkYXRhL0RvY01ldGFzJztcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG4vKipcbiAqIFVwZGF0ZXMgb3VyIHByb2dyZXNzIGFzIHdlIHJlYWQgdGhlIGRvYy5cbiAqL1xuZXhwb3J0IGNsYXNzIFByb2dyZXNzVmlldyB7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IG1vZGVsOiBNb2RlbDtcblxuICAgIGNvbnN0cnVjdG9yKG1vZGVsOiBNb2RlbCkge1xuICAgICAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXJ0KCkge1xuXG4gICAgICAgIGxvZy5pbmZvKFwiU3RhcnRpbmcuLi5cIik7XG5cbiAgICAgICAgdGhpcy5tb2RlbC5yZWdpc3Rlckxpc3RlbmVyRm9yRG9jdW1lbnRMb2FkZWQoZG9jdW1lbnRMb2FkZWRFdmVudCA9PiB7XG5cbiAgICAgICAgICAgIGxvZy5pbmZvKFwib25Eb2N1bWVudExvYWRlZFwiKTtcblxuICAgICAgICAgICAgY29uc3QgZG9jTWV0YSA9IGRvY3VtZW50TG9hZGVkRXZlbnQuZG9jTWV0YTtcblxuICAgICAgICAgICAgZm9yRGljdChkb2NNZXRhLnBhZ2VNZXRhcywgKGtleSwgcGFnZU1ldGEpID0+IHtcblxuICAgICAgICAgICAgICAgIHBhZ2VNZXRhLnBhZ2VtYXJrcy5hZGRUcmFjZUxpc3RlbmVyKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlKCkge1xuXG4gICAgICAgIC8vIFRPRE86IHRoaXMgc2hvdWxkIGxpc3RlbiBkaXJlY3RseSB0byB0aGUgbW9kZWwgYW5kIHRoZSBwYWdlbWFya3NcbiAgICAgICAgLy8gdGhlbXNlbHZlcy5cblxuICAgICAgICBjb25zdCBwZXJjID0gRG9jTWV0YXMuY29tcHV0ZVByb2dyZXNzKHRoaXMubW9kZWwuZG9jTWV0YSk7XG5cbiAgICAgICAgbG9nLmluZm8oXCJQZXJjZW50YWdlIGlzIG5vdzogXCIgKyBwZXJjKTtcblxuICAgICAgICBjb25zdCBwcm9ncmVzc0VsZW1lbnQgPSA8SFRNTFByb2dyZXNzRWxlbWVudD4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwb2xhci1wcm9ncmVzcyBwcm9ncmVzc1wiKTtcbiAgICAgICAgcHJvZ3Jlc3NFbGVtZW50LnZhbHVlID0gcGVyYztcblxuICAgICAgICAvLyBub3cgdXBkYXRlIHRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgZG9jIGF0IHRoZSBib3R0b20uXG5cbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBEb2NNZXRhRGVzY3JpYmVyLmRlc2NyaWJlKHRoaXMubW9kZWwuZG9jTWV0YSk7XG5cbiAgICAgICAgY29uc3QgZG9jT3ZlcnZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BvbGFyLWRvYy1vdmVydmlld1wiKTtcblxuICAgICAgICBpZiAoZG9jT3ZlcnZpZXcpIHtcbiAgICAgICAgICAgIGRvY092ZXJ2aWV3LnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XG4gICAgICAgIH1cblxuICAgIH1cblxufVxuIl19