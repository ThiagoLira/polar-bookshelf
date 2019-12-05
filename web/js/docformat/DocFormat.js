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
const Preconditions_1 = require("polar-shared/src/Preconditions");
const Elements_1 = require("../util/Elements");
class DocFormat {
    init() {
    }
    currentScale() {
        return 1.0;
    }
    getPageNumFromPageElement(pageElement) {
        Preconditions_1.Preconditions.assertNotNull(pageElement, "pageElement");
        const dataPageNum = Preconditions_1.notNull(pageElement.getAttribute("data-page-number"));
        return parseInt(dataPageNum);
    }
    getPageElementFromPageNum(pageNum) {
        if (!pageNum) {
            throw new Error("Page number not specified");
        }
        const pageElements = document.querySelectorAll(".page");
        const pageElement = pageElements[pageNum - 1];
        if (!pageElement) {
            throw new Error("Unable to find page element for page num: " + pageNum);
        }
        return pageElement;
    }
    getCurrentPageElement() {
        const pageElements = document.querySelectorAll(".page");
        if (pageElements.length === 1) {
            return pageElements[0];
        }
        const result = {
            element: null,
            visibility: 0
        };
        pageElements.forEach(pageElement => {
            const element = pageElement;
            const visibility = Elements_1.Elements.calculateVisibilityForDiv(element);
            if (visibility > result.visibility) {
                result.element = element;
                result.visibility = visibility;
            }
        });
        return result.element;
    }
    getCurrentPageDetail() {
        const pageElement = Preconditions_1.notNull(this.getCurrentPageElement());
        const pageNum = this.getPageNumFromPageElement(pageElement);
        return { pageElement, pageNum };
    }
    supportThumbnails() {
        return false;
    }
    textHighlightOptions() {
        return {};
    }
    targetDocument() {
        throw new Error("Not implemented");
    }
    docDetail() {
        const fingerprint = this.currentDocFingerprint();
        if (!fingerprint) {
            throw new Error("No document loaded");
        }
        return { fingerprint };
    }
    getCanvas(pageNum) {
        return __awaiter(this, void 0, void 0, function* () {
            const pageElement = this.getPageElementFromPageNum(pageNum);
            return pageElement.querySelector("canvas");
        });
    }
}
exports.DocFormat = DocFormat;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jRm9ybWF0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRG9jRm9ybWF0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsa0VBQXNFO0FBQ3RFLCtDQUEwQztBQU8xQyxNQUFzQixTQUFTO0lBT3BCLElBQUk7SUFFWCxDQUFDO0lBRU0sWUFBWTtRQUNmLE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQztJQUVNLHlCQUF5QixDQUFDLFdBQXdCO1FBQ3JELDZCQUFhLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUN4RCxNQUFNLFdBQVcsR0FBRyx1QkFBTyxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO1FBQzFFLE9BQU8sUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFTSx5QkFBeUIsQ0FBQyxPQUFlO1FBRTVDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDVixNQUFNLElBQUksS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUM7U0FDaEQ7UUFFRCxNQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFJeEQsTUFBTSxXQUFXLEdBQUcsWUFBWSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUU5QyxJQUFJLENBQUUsV0FBVyxFQUFFO1lBQ2YsTUFBTSxJQUFJLEtBQUssQ0FBQyw0Q0FBNEMsR0FBRyxPQUFPLENBQUMsQ0FBQztTQUMzRTtRQUVELE9BQXFCLFdBQVcsQ0FBQztJQUVyQyxDQUFDO0lBTU0scUJBQXFCO1FBRXhCLE1BQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUV4RCxJQUFJLFlBQVksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBSzNCLE9BQU8sWUFBWSxDQUFDLENBQUMsQ0FBZ0IsQ0FBQztTQUV6QztRQUVELE1BQU0sTUFBTSxHQUF3QjtZQUNoQyxPQUFPLEVBQUUsSUFBSTtZQUNiLFVBQVUsRUFBRSxDQUFDO1NBQ2hCLENBQUM7UUFFRixZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBRS9CLE1BQU0sT0FBTyxHQUFpQixXQUFXLENBQUM7WUFFMUMsTUFBTSxVQUFVLEdBQUcsbUJBQVEsQ0FBQyx5QkFBeUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUUvRCxJQUFLLFVBQVUsR0FBRyxNQUFNLENBQUMsVUFBVSxFQUFFO2dCQUNqQyxNQUFNLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztnQkFDekIsTUFBTSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7YUFFbEM7UUFFTCxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUUxQixDQUFDO0lBS00sb0JBQW9CO1FBRXZCLE1BQU0sV0FBVyxHQUFHLHVCQUFPLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUMsQ0FBQztRQUMxRCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMseUJBQXlCLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFNUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsQ0FBQztJQUVwQyxDQUFDO0lBWU0saUJBQWlCO1FBQ3BCLE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFTSxvQkFBb0I7UUFDdkIsT0FBTyxFQUFFLENBQUM7SUFDZCxDQUFDO0lBRU0sY0FBYztRQUNqQixNQUFNLElBQUksS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVNLFNBQVM7UUFFWixNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUVqRCxJQUFJLENBQUUsV0FBVyxFQUFFO1lBQ2YsTUFBTSxJQUFJLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1NBQ3pDO1FBRUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxDQUFDO0lBRTNCLENBQUM7SUFFWSxTQUFTLENBQUMsT0FBZTs7WUFFbEMsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRTVELE9BQTJCLFdBQVcsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFbkUsQ0FBQztLQUFBO0NBRUo7QUF2SUQsOEJBdUlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtub3ROdWxsLCBQcmVjb25kaXRpb25zfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL1ByZWNvbmRpdGlvbnMnO1xuaW1wb3J0IHtFbGVtZW50c30gZnJvbSAnLi4vdXRpbC9FbGVtZW50cyc7XG5pbXBvcnQge0RvY0RldGFpbH0gZnJvbSAnLi4vbWV0YWRhdGEvRG9jRGV0YWlsJztcbmltcG9ydCB7SURpbWVuc2lvbnN9IGZyb20gXCIuLi91dGlsL0lEaW1lbnNpb25zXCI7XG5cbi8qKlxuICogR2V0IHRoZSBwcm9wZXIgZG9jRm9ybWF0IHRvIHdvcmsgd2l0aC5cbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIERvY0Zvcm1hdCB7XG5cbiAgICBwdWJsaWMgYWJzdHJhY3QgcmVhZG9ubHkgbmFtZTogRG9jRm9ybWF0TmFtZTtcblxuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuIHRoZSB2aWV3ZXIgaXMgc3RhcnRlZCBzbyB3ZSBjYW4gbWFrZSBhbnkgbmVjZXNzYXJ5IGNoYW5nZXMuXG4gICAgICovXG4gICAgcHVibGljIGluaXQoKSB7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgY3VycmVudFNjYWxlKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiAxLjA7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFBhZ2VOdW1Gcm9tUGFnZUVsZW1lbnQocGFnZUVsZW1lbnQ6IEhUTUxFbGVtZW50KTogbnVtYmVyIHtcbiAgICAgICAgUHJlY29uZGl0aW9ucy5hc3NlcnROb3ROdWxsKHBhZ2VFbGVtZW50LCBcInBhZ2VFbGVtZW50XCIpO1xuICAgICAgICBjb25zdCBkYXRhUGFnZU51bSA9IG5vdE51bGwocGFnZUVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1wYWdlLW51bWJlclwiKSk7XG4gICAgICAgIHJldHVybiBwYXJzZUludChkYXRhUGFnZU51bSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFBhZ2VFbGVtZW50RnJvbVBhZ2VOdW0ocGFnZU51bTogbnVtYmVyKTogSFRNTEVsZW1lbnQge1xuXG4gICAgICAgIGlmICghcGFnZU51bSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUGFnZSBudW1iZXIgbm90IHNwZWNpZmllZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBhZ2VFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGFnZVwiKTtcblxuICAgICAgICAvLyBub3RlIHRoYXQgZWxlbWVudHMgYXJlIDAgYmFzZWQgaW5kZXhlcyBidXQgb3VyIHBhZ2VzIGFyZSAxIGJhc2VkXG4gICAgICAgIC8vIGluZGV4ZXMuXG4gICAgICAgIGNvbnN0IHBhZ2VFbGVtZW50ID0gcGFnZUVsZW1lbnRzW3BhZ2VOdW0gLSAxXTtcblxuICAgICAgICBpZiAoISBwYWdlRWxlbWVudCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5hYmxlIHRvIGZpbmQgcGFnZSBlbGVtZW50IGZvciBwYWdlIG51bTogXCIgKyBwYWdlTnVtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiA8SFRNTEVsZW1lbnQ+IHBhZ2VFbGVtZW50O1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBjdXJyZW50IHBhZ2UgbnVtYmVyIGJhc2VkIG9uIHdoaWNoIHBhZ2UgaXMgb2NjdXB5aW5nIHRoZSBsYXJnZXN0XG4gICAgICogcGVyY2VudGFnZSBvZiB0aGUgdmlld3BvcnQuXG4gICAgICovXG4gICAgcHVibGljIGdldEN1cnJlbnRQYWdlRWxlbWVudCgpOiBIVE1MRWxlbWVudCB8IG51bGwge1xuXG4gICAgICAgIGNvbnN0IHBhZ2VFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGFnZVwiKTtcblxuICAgICAgICBpZiAocGFnZUVsZW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuXG4gICAgICAgICAgICAvLyBpZiB3ZSBvbmx5IGhhdmUgb25lIHBhZ2UsIGp1c3QgZ28gd2l0aCB0aGF0IGFzIHRoZXJlIGFyZSBubyBvdGhlclxuICAgICAgICAgICAgLy8gb3B0aW9ucy4gIFRoaXMgd2FzIGFkZGVkIHRvIGF2b2lkIGEgYnVnIGluIGNhbGN1bGF0ZSB2aXNpYmlsaXR5XG4gICAgICAgICAgICAvLyBidXQgaXQgd29ya3MuXG4gICAgICAgICAgICByZXR1cm4gcGFnZUVsZW1lbnRzWzBdIGFzIEhUTUxFbGVtZW50O1xuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZXN1bHQgPSA8Q3VycmVudFBhZ2VFbGVtZW50PiB7XG4gICAgICAgICAgICBlbGVtZW50OiBudWxsLFxuICAgICAgICAgICAgdmlzaWJpbGl0eTogMFxuICAgICAgICB9O1xuXG4gICAgICAgIHBhZ2VFbGVtZW50cy5mb3JFYWNoKHBhZ2VFbGVtZW50ID0+IHtcblxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IDxIVE1MRWxlbWVudD4gcGFnZUVsZW1lbnQ7XG5cbiAgICAgICAgICAgIGNvbnN0IHZpc2liaWxpdHkgPSBFbGVtZW50cy5jYWxjdWxhdGVWaXNpYmlsaXR5Rm9yRGl2KGVsZW1lbnQpO1xuXG4gICAgICAgICAgICBpZiAoIHZpc2liaWxpdHkgPiByZXN1bHQudmlzaWJpbGl0eSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgICAgICAgICByZXN1bHQudmlzaWJpbGl0eSA9IHZpc2liaWxpdHk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0LmVsZW1lbnQ7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgYWxsIHRoZSBtZXRhZGF0YSBhYm91dCB0aGUgY3VycmVudCBwYWdlLlxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRDdXJyZW50UGFnZURldGFpbCgpOiBQYWdlRGV0YWlsIHtcblxuICAgICAgICBjb25zdCBwYWdlRWxlbWVudCA9IG5vdE51bGwodGhpcy5nZXRDdXJyZW50UGFnZUVsZW1lbnQoKSk7XG4gICAgICAgIGNvbnN0IHBhZ2VOdW0gPSB0aGlzLmdldFBhZ2VOdW1Gcm9tUGFnZUVsZW1lbnQocGFnZUVsZW1lbnQpO1xuXG4gICAgICAgIHJldHVybiB7IHBhZ2VFbGVtZW50LCBwYWdlTnVtIH07XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGN1cnJlbnQgZG9jIGZpbmdlcnByaW50IG9yIG51bGwgaWYgaXQgaGFzbid0IGJlZW4gbG9hZGVkIHlldC5cbiAgICAgKi9cbiAgICBwdWJsaWMgYWJzdHJhY3QgY3VycmVudERvY0ZpbmdlcnByaW50KCk6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgZG9jLlxuICAgICAqL1xuICAgIHB1YmxpYyBhYnN0cmFjdCBjdXJyZW50U3RhdGUoKTogQ3VycmVudERvY1N0YXRlO1xuXG4gICAgcHVibGljIHN1cHBvcnRUaHVtYm5haWxzKCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcHVibGljIHRleHRIaWdobGlnaHRPcHRpb25zKCkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgcHVibGljIHRhcmdldERvY3VtZW50KCk6IEhUTUxEb2N1bWVudCB8IG51bGwge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJOb3QgaW1wbGVtZW50ZWRcIik7XG4gICAgfVxuXG4gICAgcHVibGljIGRvY0RldGFpbCgpOiBEb2NEZXRhaWwge1xuXG4gICAgICAgIGNvbnN0IGZpbmdlcnByaW50ID0gdGhpcy5jdXJyZW50RG9jRmluZ2VycHJpbnQoKTtcblxuICAgICAgICBpZiAoISBmaW5nZXJwcmludCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gZG9jdW1lbnQgbG9hZGVkXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgZmluZ2VycHJpbnQgfTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBnZXRDYW52YXMocGFnZU51bTogbnVtYmVyKTogUHJvbWlzZTxIVE1MQ2FudmFzRWxlbWVudD4ge1xuXG4gICAgICAgIGNvbnN0IHBhZ2VFbGVtZW50ID0gdGhpcy5nZXRQYWdlRWxlbWVudEZyb21QYWdlTnVtKHBhZ2VOdW0pO1xuXG4gICAgICAgIHJldHVybiA8SFRNTENhbnZhc0VsZW1lbnQ+IHBhZ2VFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJjYW52YXNcIik7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBQYWdlRGV0YWlsIHtcbiAgICByZWFkb25seSBwYWdlRWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gICAgcmVhZG9ubHkgcGFnZU51bTogbnVtYmVyO1xuICAgIHJlYWRvbmx5IGRpbWVuc2lvbnM/OiBJRGltZW5zaW9ucztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDdXJyZW50UGFnZUVsZW1lbnQge1xuICAgIGVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbDtcbiAgICB2aXNpYmlsaXR5OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3VycmVudERvY1N0YXRlIHtcblxuICAgIHJlYWRvbmx5IG5yUGFnZXM6IG51bWJlcjtcblxuICAgIHJlYWRvbmx5IGN1cnJlbnRQYWdlTnVtYmVyOiBudW1iZXI7XG5cbn1cblxuZXhwb3J0IHR5cGUgRG9jRm9ybWF0TmFtZSA9ICdodG1sJyB8ICdwZGYnO1xuIl19