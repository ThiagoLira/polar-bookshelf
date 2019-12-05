"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Splitter_1 = require("../ui/splitter/Splitter");
const React = __importStar(require("react"));
const ReactDOM = __importStar(require("react-dom"));
const AnnotationSidebar_1 = require("./AnnotationSidebar");
const Logger_1 = require("polar-shared/src/logger/Logger");
const Docs_1 = require("../metadata/Docs");
const log = Logger_1.Logger.create();
class AnnotationSidebars {
    static create(docMeta, persistenceLayerProvider) {
        const splitter = new Splitter_1.Splitter('.polar-viewer', '.polar-sidebar');
        const polarSidebar = document.querySelector(".polar-sidebar");
        polarSidebar.style.display = 'block';
        splitter.collapse();
        const doc = Docs_1.Docs.create(docMeta, persistenceLayerProvider().capabilities().permission);
        ReactDOM.render(React.createElement(AnnotationSidebar_1.AnnotationSidebar, { doc: doc, persistenceLayerProvider: persistenceLayerProvider }), document.querySelector('.polar-sidebar'));
        return splitter;
    }
    static scrollToAnnotation(id, pageNum) {
        const selector = `.page div[data-annotation-id='${id}']`;
        const pageElements = Array.from(document.querySelectorAll(".page"));
        const pageElement = pageElements[pageNum - 1];
        if (!pageElement) {
            log.error(`Could not find page ${pageNum} of N pages: ${pageElements.length}`);
            return;
        }
        this.scrollToElement(pageElement);
        const annotationElement = document.querySelector(selector);
        if (annotationElement) {
            this.scrollToElement(annotationElement);
        }
        else {
            log.warn("Could not find annotation element: " + selector);
        }
    }
    static scrollToElement(element) {
        const options = {
            behavior: 'instant',
            block: 'center',
            inline: 'center'
        };
        element.scrollIntoView(options);
    }
}
exports.AnnotationSidebars = AnnotationSidebars;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW5ub3RhdGlvblNpZGViYXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQW5ub3RhdGlvblNpZGViYXJzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxzREFBaUQ7QUFDakQsNkNBQStCO0FBQy9CLG9EQUFzQztBQUN0QywyREFBc0Q7QUFFdEQsMkRBQXNEO0FBRXRELDJDQUFzQztBQUd0QyxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFNUIsTUFBYSxrQkFBa0I7SUFFcEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFpQixFQUNqQix3QkFBZ0Q7UUFFakUsTUFBTSxRQUFRLEdBQUcsSUFBSSxtQkFBUSxDQUFDLGVBQWUsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1FBRWpFLE1BQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQWlCLENBQUM7UUFDOUUsWUFBWSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBRXJDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUVwQixNQUFNLEdBQUcsR0FBRyxXQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRXZGLFFBQVEsQ0FBQyxNQUFNLENBQ1gsb0JBQUMscUNBQWlCLElBQUMsR0FBRyxFQUFFLEdBQUcsRUFDUix3QkFBd0IsRUFBRSx3QkFBd0IsR0FBSSxFQUN6RSxRQUFRLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFnQixDQUMxRCxDQUFDO1FBRUYsT0FBTyxRQUFRLENBQUM7SUFFcEIsQ0FBQztJQUVNLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxFQUFVLEVBQUUsT0FBZTtRQUV4RCxNQUFNLFFBQVEsR0FBRyxpQ0FBaUMsRUFBRSxJQUFJLENBQUM7UUFFekQsTUFBTSxZQUFZLEdBQWtCLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDbkYsTUFBTSxXQUFXLEdBQUcsWUFBWSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUU5QyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2QsR0FBRyxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsT0FBTyxnQkFBZ0IsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7WUFDL0UsT0FBTztTQUNWO1FBRUQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUVsQyxNQUFNLGlCQUFpQixHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFM0QsSUFBSSxpQkFBaUIsRUFBRTtZQUNuQixJQUFJLENBQUMsZUFBZSxDQUFDLGlCQUFnQyxDQUFDLENBQUM7U0FDMUQ7YUFBTTtZQUNILEdBQUcsQ0FBQyxJQUFJLENBQUMscUNBQXFDLEdBQUcsUUFBUSxDQUFDLENBQUM7U0FDOUQ7SUFhTCxDQUFDO0lBRU8sTUFBTSxDQUFDLGVBQWUsQ0FBQyxPQUFvQjtRQUUvQyxNQUFNLE9BQU8sR0FBRztZQUNaLFFBQVEsRUFBRSxTQUFTO1lBQ25CLEtBQUssRUFBRSxRQUFRO1lBQ2YsTUFBTSxFQUFFLFFBQVE7U0FDbkIsQ0FBQztRQUlGLE9BQU8sQ0FBQyxjQUFjLENBQUMsT0FBZ0MsQ0FBQyxDQUFDO0lBRTdELENBQUM7Q0FHSjtBQTFFRCxnREEwRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NwbGl0dGVyfSBmcm9tICcuLi91aS9zcGxpdHRlci9TcGxpdHRlcic7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHtBbm5vdGF0aW9uU2lkZWJhcn0gZnJvbSAnLi9Bbm5vdGF0aW9uU2lkZWJhcic7XG5pbXBvcnQge0RvY01ldGF9IGZyb20gJy4uL21ldGFkYXRhL0RvY01ldGEnO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge1BlcnNpc3RlbmNlTGF5ZXJ9IGZyb20gJy4uL2RhdGFzdG9yZS9QZXJzaXN0ZW5jZUxheWVyJztcbmltcG9ydCB7RG9jc30gZnJvbSAnLi4vbWV0YWRhdGEvRG9jcyc7XG5pbXBvcnQge0lEb2NNZXRhfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy9tZXRhZGF0YS9JRG9jTWV0YVwiO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbmV4cG9ydCBjbGFzcyBBbm5vdGF0aW9uU2lkZWJhcnMge1xuXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGUoZG9jTWV0YTogSURvY01ldGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgcGVyc2lzdGVuY2VMYXllclByb3ZpZGVyOiAoKSA9PiBQZXJzaXN0ZW5jZUxheWVyKTogU3BsaXR0ZXIge1xuXG4gICAgICAgIGNvbnN0IHNwbGl0dGVyID0gbmV3IFNwbGl0dGVyKCcucG9sYXItdmlld2VyJywgJy5wb2xhci1zaWRlYmFyJyk7XG5cbiAgICAgICAgY29uc3QgcG9sYXJTaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb2xhci1zaWRlYmFyXCIpISBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgcG9sYXJTaWRlYmFyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG4gICAgICAgIHNwbGl0dGVyLmNvbGxhcHNlKCk7XG5cbiAgICAgICAgY29uc3QgZG9jID0gRG9jcy5jcmVhdGUoZG9jTWV0YSwgcGVyc2lzdGVuY2VMYXllclByb3ZpZGVyKCkuY2FwYWJpbGl0aWVzKCkucGVybWlzc2lvbik7XG5cbiAgICAgICAgUmVhY3RET00ucmVuZGVyKFxuICAgICAgICAgICAgPEFubm90YXRpb25TaWRlYmFyIGRvYz17ZG9jfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcnNpc3RlbmNlTGF5ZXJQcm92aWRlcj17cGVyc2lzdGVuY2VMYXllclByb3ZpZGVyfSAvPixcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb2xhci1zaWRlYmFyJykgYXMgSFRNTEVsZW1lbnRcbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gc3BsaXR0ZXI7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHNjcm9sbFRvQW5ub3RhdGlvbihpZDogc3RyaW5nLCBwYWdlTnVtOiBudW1iZXIpIHtcblxuICAgICAgICBjb25zdCBzZWxlY3RvciA9IGAucGFnZSBkaXZbZGF0YS1hbm5vdGF0aW9uLWlkPScke2lkfSddYDtcblxuICAgICAgICBjb25zdCBwYWdlRWxlbWVudHM6IEhUTUxFbGVtZW50W10gPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGFnZVwiKSk7XG4gICAgICAgIGNvbnN0IHBhZ2VFbGVtZW50ID0gcGFnZUVsZW1lbnRzW3BhZ2VOdW0gLSAxXTtcblxuICAgICAgICBpZiAoIXBhZ2VFbGVtZW50KSB7XG4gICAgICAgICAgICBsb2cuZXJyb3IoYENvdWxkIG5vdCBmaW5kIHBhZ2UgJHtwYWdlTnVtfSBvZiBOIHBhZ2VzOiAke3BhZ2VFbGVtZW50cy5sZW5ndGh9YCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNjcm9sbFRvRWxlbWVudChwYWdlRWxlbWVudCk7XG5cbiAgICAgICAgY29uc3QgYW5ub3RhdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcblxuICAgICAgICBpZiAoYW5ub3RhdGlvbkVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9FbGVtZW50KGFubm90YXRpb25FbGVtZW50IGFzIEhUTUxFbGVtZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxvZy53YXJuKFwiQ291bGQgbm90IGZpbmQgYW5ub3RhdGlvbiBlbGVtZW50OiBcIiArIHNlbGVjdG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRPRE86IGRpc2FibGUgdGhpcyBmb3Igbm93IGJlY2F1c2Ugd2l0aCB0aGUgcGFnZW1hcmsgdGhlIGZsYXNoIGRvZXNcbiAgICAgICAgLy8gbm90IGFjdHVhbGx5IHdvcmsuIE1pZ3JhdGUgdG8gdXNpbmcgc29tZSB0eXBlIG9mIHBvaW50ZXIgc2hvd2luZyB0aGVcbiAgICAgICAgLy8gcGxhY2UgdGhlIGFubm90YXRpb24gaXMgbWFya2VkLlxuICAgICAgICAvL1xuICAgICAgICAvLyBjb25zdCBmbGFzaENsYXNzID0gJ2ZsYXNoLWJhY2tncm91bmQtY29sb3InO1xuICAgICAgICAvL1xuICAgICAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKS5mb3JFYWNoKGN1cnJlbnQgPT4ge1xuICAgICAgICAvLyAgICAgY3VycmVudC5jbGFzc0xpc3QuYWRkKGZsYXNoQ2xhc3MpO1xuICAgICAgICAvLyAgICAgc2V0VGltZW91dCgoKSA9PiBjdXJyZW50LmNsYXNzTGlzdC5yZW1vdmUoZmxhc2hDbGFzcyksIDEwMDApO1xuICAgICAgICAvLyB9KTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIHNjcm9sbFRvRWxlbWVudChlbGVtZW50OiBIVE1MRWxlbWVudCkge1xuXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBiZWhhdmlvcjogJ2luc3RhbnQnLFxuICAgICAgICAgICAgYmxvY2s6ICdjZW50ZXInLFxuICAgICAgICAgICAgaW5saW5lOiAnY2VudGVyJ1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIE5PVEUgdGhhdCAnaW5zdGFudCcgaXMgYXBwYXJlbnRseSB1bnN1cHBvcnRlZCBpbiB0aGUgdHlwZXNjcmlwdCB0eXBlXG4gICAgICAgIC8vIGJ1dCBpdCdzIHN1cHBvcnRlZCBpbiBKYXZhc2NyaXB0LlxuICAgICAgICBlbGVtZW50LnNjcm9sbEludG9WaWV3KG9wdGlvbnMgYXMgU2Nyb2xsSW50b1ZpZXdPcHRpb25zKTtcblxuICAgIH1cblxuXG59XG4iXX0=