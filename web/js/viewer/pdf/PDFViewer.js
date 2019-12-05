"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Logger_1 = require("polar-shared/src/logger/Logger");
const Viewer_1 = require("../Viewer");
const RendererAnalytics_1 = require("../../ga/RendererAnalytics");
const ViewerTours_1 = require("../../apps/viewer/ViewerTours");
const Stopwatches_1 = require("polar-shared/src/util/Stopwatches");
const AppRuntime_1 = require("../../AppRuntime");
const WindowEvents_1 = require("../../util/dom/WindowEvents");
const log = Logger_1.Logger.create();
class PDFViewer extends Viewer_1.Viewer {
    constructor(model) {
        super();
        this.model = model;
    }
    start() {
        log.info("Starting PDFViewer");
        RendererAnalytics_1.RendererAnalytics.pageview("/pdfviewer");
        const stopwatch = Stopwatches_1.Stopwatches.create();
        this.model.registerListenerForDocumentLoaded(event => {
            ViewerTours_1.ViewerTours.createWhenNecessary(event.fingerprint);
            log.notice("Document load time: " + stopwatch.stop());
            this.sendResizeEvent();
        });
        this.disableSidebarKeyboardHandling();
    }
    docDetail() {
        return {
            fingerprint: this.currentDocFingerprint(),
            title: window.PDFViewerApplication.pdfDocument._pdfInfo.title,
            nrPages: window.PDFViewerApplication.pagesCount,
            filename: this.getFilename()
        };
    }
    disableSidebarKeyboardHandling() {
        const sidebarElement = document.querySelector(".polar-sidebar");
        sidebarElement.addEventListener("keypress", event => {
            event.stopPropagation();
        });
        sidebarElement.addEventListener("keydown", event => {
            event.stopPropagation();
        });
    }
    currentDocFingerprint() {
        if (window.PDFViewerApplication &&
            window.PDFViewerApplication.pdfDocument &&
            window.PDFViewerApplication.pdfDocument._pdfInfo &&
            window.PDFViewerApplication.pdfDocument._pdfInfo.fingerprint != null) {
            return window.PDFViewerApplication.pdfDocument._pdfInfo.fingerprint;
        }
    }
    sendResizeEvent() {
        if (AppRuntime_1.AppRuntime.isBrowser()) {
            WindowEvents_1.WindowEvents.sendResizeEvent();
        }
    }
}
exports.PDFViewer = PDFViewer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUERGVmlld2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUERGVmlld2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkRBQXNEO0FBQ3RELHNDQUFpQztBQUVqQyxrRUFBNkQ7QUFDN0QsK0RBQTBEO0FBRTFELG1FQUE4RDtBQUM5RCxpREFBNEM7QUFDNUMsOERBQXlEO0FBSXpELE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU1QixNQUFhLFNBQVUsU0FBUSxlQUFNO0lBSWpDLFlBQVksS0FBWTtRQUNwQixLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUFFTSxLQUFLO1FBRVIsR0FBRyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBRS9CLHFDQUFpQixDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUV6QyxNQUFNLFNBQVMsR0FBRyx5QkFBVyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRXZDLElBQUksQ0FBQyxLQUFLLENBQUMsaUNBQWlDLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFFakQseUJBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7WUFFbkQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsR0FBRyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUN0RCxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFJM0IsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsOEJBQThCLEVBQUUsQ0FBQztJQUUxQyxDQUFDO0lBRU0sU0FBUztRQUVaLE9BQU87WUFDSCxXQUFXLEVBQUUsSUFBSSxDQUFDLHFCQUFxQixFQUFFO1lBQ3pDLEtBQUssRUFBRSxNQUFNLENBQUMsb0JBQW9CLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxLQUFLO1lBQzdELE9BQU8sRUFBRSxNQUFNLENBQUMsb0JBQW9CLENBQUMsVUFBVTtZQUMvQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRTtTQUMvQixDQUFDO0lBRU4sQ0FBQztJQUVPLDhCQUE4QjtRQUVsQyxNQUFNLGNBQWMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFFLENBQUM7UUFFakUsY0FBYyxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsRUFBRTtZQUNoRCxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUM7UUFFSCxjQUFjLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxFQUFFO1lBQy9DLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7SUFLTyxxQkFBcUI7UUFFekIsSUFBSSxNQUFNLENBQUMsb0JBQW9CO1lBQzNCLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXO1lBQ3ZDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLENBQUMsUUFBUTtZQUNoRCxNQUFNLENBQUMsb0JBQW9CLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxXQUFXLElBQUksSUFBSSxFQUFFO1lBRXRFLE9BQU8sTUFBTSxDQUFDLG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDO1NBRXZFO0lBRUwsQ0FBQztJQUVPLGVBQWU7UUFFbkIsSUFBSSx1QkFBVSxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQ3hCLDJCQUFZLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDbEM7SUFFTCxDQUFDO0NBRUo7QUFqRkQsOEJBaUZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtMb2dnZXJ9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge1ZpZXdlcn0gZnJvbSAnLi4vVmlld2VyJztcbmltcG9ydCB7RG9jRGV0YWlsfSBmcm9tICcuLi8uLi9tZXRhZGF0YS9Eb2NEZXRhaWwnO1xuaW1wb3J0IHtSZW5kZXJlckFuYWx5dGljc30gZnJvbSAnLi4vLi4vZ2EvUmVuZGVyZXJBbmFseXRpY3MnO1xuaW1wb3J0IHtWaWV3ZXJUb3Vyc30gZnJvbSAnLi4vLi4vYXBwcy92aWV3ZXIvVmlld2VyVG91cnMnO1xuaW1wb3J0IHtNb2RlbH0gZnJvbSAnLi4vLi4vbW9kZWwvTW9kZWwnO1xuaW1wb3J0IHtTdG9wd2F0Y2hlc30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL1N0b3B3YXRjaGVzJztcbmltcG9ydCB7QXBwUnVudGltZX0gZnJvbSAnLi4vLi4vQXBwUnVudGltZSc7XG5pbXBvcnQge1dpbmRvd0V2ZW50c30gZnJvbSAnLi4vLi4vdXRpbC9kb20vV2luZG93RXZlbnRzJztcblxuZGVjbGFyZSB2YXIgd2luZG93OiBhbnk7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuZXhwb3J0IGNsYXNzIFBERlZpZXdlciBleHRlbmRzIFZpZXdlciB7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IG1vZGVsOiBNb2RlbDtcblxuICAgIGNvbnN0cnVjdG9yKG1vZGVsOiBNb2RlbCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXJ0KCkge1xuXG4gICAgICAgIGxvZy5pbmZvKFwiU3RhcnRpbmcgUERGVmlld2VyXCIpO1xuXG4gICAgICAgIFJlbmRlcmVyQW5hbHl0aWNzLnBhZ2V2aWV3KFwiL3BkZnZpZXdlclwiKTtcblxuICAgICAgICBjb25zdCBzdG9wd2F0Y2ggPSBTdG9wd2F0Y2hlcy5jcmVhdGUoKTtcblxuICAgICAgICB0aGlzLm1vZGVsLnJlZ2lzdGVyTGlzdGVuZXJGb3JEb2N1bWVudExvYWRlZChldmVudCA9PiB7XG5cbiAgICAgICAgICAgIFZpZXdlclRvdXJzLmNyZWF0ZVdoZW5OZWNlc3NhcnkoZXZlbnQuZmluZ2VycHJpbnQpO1xuXG4gICAgICAgICAgICBsb2cubm90aWNlKFwiRG9jdW1lbnQgbG9hZCB0aW1lOiBcIiArIHN0b3B3YXRjaC5zdG9wKCkpO1xuICAgICAgICAgICAgdGhpcy5zZW5kUmVzaXplRXZlbnQoKTtcblxuICAgICAgICAgICAgLy8gdGhpcy5oYW5kbGVDaHJvbWVTZWxlY3Rpb25GaXgoKTtcblxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmRpc2FibGVTaWRlYmFyS2V5Ym9hcmRIYW5kbGluZygpO1xuXG4gICAgfVxuXG4gICAgcHVibGljIGRvY0RldGFpbCgpOiBEb2NEZXRhaWwgfCB1bmRlZmluZWQge1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBmaW5nZXJwcmludDogdGhpcy5jdXJyZW50RG9jRmluZ2VycHJpbnQoKSxcbiAgICAgICAgICAgIHRpdGxlOiB3aW5kb3cuUERGVmlld2VyQXBwbGljYXRpb24ucGRmRG9jdW1lbnQuX3BkZkluZm8udGl0bGUsXG4gICAgICAgICAgICBuclBhZ2VzOiB3aW5kb3cuUERGVmlld2VyQXBwbGljYXRpb24ucGFnZXNDb3VudCxcbiAgICAgICAgICAgIGZpbGVuYW1lOiB0aGlzLmdldEZpbGVuYW1lKClcbiAgICAgICAgfTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgZGlzYWJsZVNpZGViYXJLZXlib2FyZEhhbmRsaW5nKCkge1xuXG4gICAgICAgIGNvbnN0IHNpZGViYXJFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb2xhci1zaWRlYmFyXCIpITtcblxuICAgICAgICBzaWRlYmFyRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNpZGViYXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgY3VycmVudCBkb2MgZmluZ2VycHJpbnQgb3IgbnVsbCBpZiBpdCBoYXNuJ3QgYmVlbiBsb2FkZWQgeWV0LlxuICAgICAqL1xuICAgIHByaXZhdGUgY3VycmVudERvY0ZpbmdlcnByaW50KCkge1xuXG4gICAgICAgIGlmICh3aW5kb3cuUERGVmlld2VyQXBwbGljYXRpb24gJiZcbiAgICAgICAgICAgIHdpbmRvdy5QREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZEb2N1bWVudCAmJlxuICAgICAgICAgICAgd2luZG93LlBERlZpZXdlckFwcGxpY2F0aW9uLnBkZkRvY3VtZW50Ll9wZGZJbmZvICYmXG4gICAgICAgICAgICB3aW5kb3cuUERGVmlld2VyQXBwbGljYXRpb24ucGRmRG9jdW1lbnQuX3BkZkluZm8uZmluZ2VycHJpbnQgIT0gbnVsbCkge1xuXG4gICAgICAgICAgICByZXR1cm4gd2luZG93LlBERlZpZXdlckFwcGxpY2F0aW9uLnBkZkRvY3VtZW50Ll9wZGZJbmZvLmZpbmdlcnByaW50O1xuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHByaXZhdGUgc2VuZFJlc2l6ZUV2ZW50KCkge1xuXG4gICAgICAgIGlmIChBcHBSdW50aW1lLmlzQnJvd3NlcigpKSB7XG4gICAgICAgICAgICBXaW5kb3dFdmVudHMuc2VuZFJlc2l6ZUV2ZW50KCk7XG4gICAgICAgIH1cblxuICAgIH1cblxufVxuIl19