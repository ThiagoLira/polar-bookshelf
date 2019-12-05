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
const DocFormat_1 = require("./DocFormat");
const Preconditions_1 = require("polar-shared/src/Preconditions");
const Optional_1 = require("polar-shared/src/util/ts/Optional");
class HTMLFormat extends DocFormat_1.DocFormat {
    constructor() {
        super();
        this.name = 'html';
    }
    getCurrentPageDetail() {
        const pageElement = Preconditions_1.notNull(this.getCurrentPageElement());
        const pageNum = this.getPageNumFromPageElement(pageElement);
        const dimensions = {
            width: pageElement.offsetWidth,
            height: pageElement.offsetHeight
        };
        return { pageElement, pageNum, dimensions };
    }
    currentDocFingerprint() {
        const polarFingerprint = this._queryFingerprintElement();
        if (polarFingerprint !== null) {
            return Optional_1.Optional.of(polarFingerprint.getAttribute("content")).getOrUndefined();
        }
        return undefined;
    }
    setCurrentDocFingerprint(fingerprint) {
        const polarFingerprint = this._queryFingerprintElement();
        polarFingerprint.setAttribute("content", fingerprint);
    }
    _queryFingerprintElement() {
        return Preconditions_1.notNull(document.querySelector("meta[name='polar-fingerprint']"));
    }
    currentState() {
        return {
            nrPages: 1,
            currentPageNumber: 1,
        };
    }
    textHighlightOptions() {
        return {};
    }
    currentScale() {
        return Optional_1.Optional.of(document.querySelector("meta[name='polar-scale']"))
            .map(current => current.getAttribute('content'))
            .map(current => parseFloat(current))
            .get();
    }
    targetDocument() {
        return Optional_1.Optional.of(document.querySelector("iframe")).get().contentDocument;
    }
    getCanvas(pageNum) {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error("Not supported");
        });
    }
}
exports.HTMLFormat = HTMLFormat;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSFRNTEZvcm1hdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkhUTUxGb3JtYXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBaUU7QUFDakUsa0VBQXVEO0FBQ3ZELGdFQUEyRDtBQUczRCxNQUFhLFVBQVcsU0FBUSxxQkFBUztJQU1yQztRQUNJLEtBQUssRUFBRSxDQUFDO1FBTEksU0FBSSxHQUFHLE1BQU0sQ0FBQztJQU05QixDQUFDO0lBS00sb0JBQW9CO1FBRXZCLE1BQU0sV0FBVyxHQUFHLHVCQUFPLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUMsQ0FBQztRQUMxRCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMseUJBQXlCLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFNUQsTUFBTSxVQUFVLEdBQUc7WUFDZixLQUFLLEVBQUUsV0FBVyxDQUFDLFdBQVc7WUFDOUIsTUFBTSxFQUFFLFdBQVcsQ0FBQyxZQUFZO1NBQ25DLENBQUM7UUFFRixPQUFPLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsQ0FBQztJQUVoRCxDQUFDO0lBS00scUJBQXFCO1FBRXhCLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7UUFFekQsSUFBSSxnQkFBZ0IsS0FBSyxJQUFJLEVBQUU7WUFDM0IsT0FBTyxtQkFBUSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFFLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUNsRjtRQUVELE9BQU8sU0FBUyxDQUFDO0lBRXJCLENBQUM7SUFFRCx3QkFBd0IsQ0FBQyxXQUFtQjtRQUN4QyxNQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1FBQ3pELGdCQUFnQixDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVPLHdCQUF3QjtRQUM1QixPQUFPLHVCQUFPLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUtNLFlBQVk7UUFFZixPQUFPO1lBQ0gsT0FBTyxFQUFFLENBQUM7WUFDVixpQkFBaUIsRUFBRSxDQUFDO1NBQ3ZCLENBQUM7SUFFTixDQUFDO0lBRUQsb0JBQW9CO1FBQ2hCLE9BQU8sRUFDTixDQUFDO0lBQ04sQ0FBQztJQUVNLFlBQVk7UUFFZixPQUFPLG1CQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsMEJBQTBCLENBQUMsQ0FBQzthQUNqRSxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQy9DLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNuQyxHQUFHLEVBQUUsQ0FBQztJQXVCZixDQUFDO0lBRU0sY0FBYztRQUNqQixPQUFPLG1CQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxlQUFlLENBQUM7SUFDL0UsQ0FBQztJQUVZLFNBQVMsQ0FBQyxPQUFlOztZQUVsQyxNQUFNLElBQUksS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBRXJDLENBQUM7S0FBQTtDQUVKO0FBNUdELGdDQTRHQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RG9jRm9ybWF0LCBEb2NGb3JtYXROYW1lLCBQYWdlRGV0YWlsfSBmcm9tICcuL0RvY0Zvcm1hdCc7XG5pbXBvcnQge25vdE51bGx9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvUHJlY29uZGl0aW9ucyc7XG5pbXBvcnQge09wdGlvbmFsfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvdHMvT3B0aW9uYWwnO1xuaW1wb3J0IHtVUkxzfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvVVJMcyc7XG5cbmV4cG9ydCBjbGFzcyBIVE1MRm9ybWF0IGV4dGVuZHMgRG9jRm9ybWF0IHtcblxuICAgIHB1YmxpYyByZWFkb25seSBuYW1lID0gJ2h0bWwnO1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCB8IHVuZGVmaW5lZDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBhbGwgdGhlIG1ldGFkYXRhIGFib3V0IHRoZSBjdXJyZW50IHBhZ2UuXG4gICAgICovXG4gICAgcHVibGljIGdldEN1cnJlbnRQYWdlRGV0YWlsKCk6IFBhZ2VEZXRhaWwge1xuXG4gICAgICAgIGNvbnN0IHBhZ2VFbGVtZW50ID0gbm90TnVsbCh0aGlzLmdldEN1cnJlbnRQYWdlRWxlbWVudCgpKTtcbiAgICAgICAgY29uc3QgcGFnZU51bSA9IHRoaXMuZ2V0UGFnZU51bUZyb21QYWdlRWxlbWVudChwYWdlRWxlbWVudCk7XG5cbiAgICAgICAgY29uc3QgZGltZW5zaW9ucyA9IHtcbiAgICAgICAgICAgIHdpZHRoOiBwYWdlRWxlbWVudC5vZmZzZXRXaWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogcGFnZUVsZW1lbnQub2Zmc2V0SGVpZ2h0XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHsgcGFnZUVsZW1lbnQsIHBhZ2VOdW0sIGRpbWVuc2lvbnMgfTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgY3VycmVudCBkb2MgZmluZ2VycHJpbnQgb3IgbnVsbCBpZiBpdCBoYXNuJ3QgYmVlbiBsb2FkZWQgeWV0LlxuICAgICAqL1xuICAgIHB1YmxpYyBjdXJyZW50RG9jRmluZ2VycHJpbnQoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcblxuICAgICAgICBjb25zdCBwb2xhckZpbmdlcnByaW50ID0gdGhpcy5fcXVlcnlGaW5nZXJwcmludEVsZW1lbnQoKTtcblxuICAgICAgICBpZiAocG9sYXJGaW5nZXJwcmludCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIE9wdGlvbmFsLm9mKHBvbGFyRmluZ2VycHJpbnQuZ2V0QXR0cmlidXRlKFwiY29udGVudFwiKSEpLmdldE9yVW5kZWZpbmVkKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuXG4gICAgfVxuXG4gICAgc2V0Q3VycmVudERvY0ZpbmdlcnByaW50KGZpbmdlcnByaW50OiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgcG9sYXJGaW5nZXJwcmludCA9IHRoaXMuX3F1ZXJ5RmluZ2VycHJpbnRFbGVtZW50KCk7XG4gICAgICAgIHBvbGFyRmluZ2VycHJpbnQuc2V0QXR0cmlidXRlKFwiY29udGVudFwiLCBmaW5nZXJwcmludCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfcXVlcnlGaW5nZXJwcmludEVsZW1lbnQoKTogRWxlbWVudCB7XG4gICAgICAgIHJldHVybiBub3ROdWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtZXRhW25hbWU9J3BvbGFyLWZpbmdlcnByaW50J11cIikpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgZG9jLlxuICAgICAqL1xuICAgIHB1YmxpYyBjdXJyZW50U3RhdGUoKSB7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5yUGFnZXM6IDEsXG4gICAgICAgICAgICBjdXJyZW50UGFnZU51bWJlcjogMSxcbiAgICAgICAgfTtcblxuICAgIH1cblxuICAgIHRleHRIaWdobGlnaHRPcHRpb25zKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHB1YmxpYyBjdXJyZW50U2NhbGUoKSB7XG5cbiAgICAgICAgcmV0dXJuIE9wdGlvbmFsLm9mKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtZXRhW25hbWU9J3BvbGFyLXNjYWxlJ11cIikpXG4gICAgICAgICAgICAubWFwKGN1cnJlbnQgPT4gY3VycmVudC5nZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnKSlcbiAgICAgICAgICAgIC5tYXAoY3VycmVudCA9PiBwYXJzZUZsb2F0KGN1cnJlbnQpKVxuICAgICAgICAgICAgLmdldCgpO1xuXG4gICAgICAgIC8qXG4gICAgICAgIGxldCBzZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic2VsZWN0XCIpO1xuICAgICAgICBsZXQgdmFsdWUgPSBzZWxlY3Qub3B0aW9uc1tzZWxlY3Quc2VsZWN0ZWRJbmRleF0udmFsdWU7XG5cbiAgICAgICAgaWYoIXZhbHVlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBzY2FsZSB2YWx1ZVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZXN1bHQgPSBwYXJzZUludCh2YWx1ZSk7XG5cbiAgICAgICAgaWYoaXNOYU4ocmVzdWx0KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm90IGEgbnVtYmVyIGZyb206IFwiICsgdmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYocmVzdWx0IDw9IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlNjYWxlIGlzIHRvbyBzbWFsbDogXCIgKyByZXN1bHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgKi9cblxuICAgIH1cblxuICAgIHB1YmxpYyB0YXJnZXREb2N1bWVudCgpOiBIVE1MRG9jdW1lbnQgfCBudWxsIHtcbiAgICAgICAgcmV0dXJuIE9wdGlvbmFsLm9mKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpZnJhbWVcIikpLmdldCgpLmNvbnRlbnREb2N1bWVudDtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgZ2V0Q2FudmFzKHBhZ2VOdW06IG51bWJlcik6IFByb21pc2U8SFRNTENhbnZhc0VsZW1lbnQ+IHtcblxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJOb3Qgc3VwcG9ydGVkXCIpO1xuXG4gICAgfVxuXG59XG4iXX0=