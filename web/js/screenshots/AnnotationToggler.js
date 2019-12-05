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
const Promises_1 = require("../util/Promises");
const MIN_PAINT_INTERVAL = 1000 / 60;
class AnnotationToggler {
    constructor() {
        this.SELECTOR = ".page .pagemark, .page .text-highlight, .page .area-highlight";
        this.annotationStyles = [];
    }
    getAnnotationElements() {
        return Array.from(document.querySelectorAll(this.SELECTOR));
    }
    hide() {
        return __awaiter(this, void 0, void 0, function* () {
            yield Promises_1.Promises.requestAnimationFrame(() => this.hideAnnotations());
            yield Promises_1.Promises.waitFor(MIN_PAINT_INTERVAL);
        });
    }
    hideAnnotations() {
        for (const annotationElement of this.getAnnotationElements()) {
            const styleRestore = {
                visibility: annotationElement.style.visibility
            };
            annotationElement.style.visibility = 'hidden';
            this.annotationStyles.push({ element: annotationElement, styleRestore });
        }
    }
    show() {
        for (const annotationStyle of this.annotationStyles) {
            annotationStyle.element.style.visibility =
                annotationStyle.styleRestore.visibility;
        }
    }
}
exports.AnnotationToggler = AnnotationToggler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW5ub3RhdGlvblRvZ2dsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJBbm5vdGF0aW9uVG9nZ2xlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUVBLCtDQUEwQztBQUUxQyxNQUFNLGtCQUFrQixHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7QUFFckMsTUFBYSxpQkFBaUI7SUFBOUI7UUFFWSxhQUFRLEdBQUcsK0RBQStELENBQUM7UUFFM0UscUJBQWdCLEdBQXNCLEVBQUUsQ0FBQztJQTZDckQsQ0FBQztJQTNDVyxxQkFBcUI7UUFDekIsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRVksSUFBSTs7WUFJYixNQUFNLG1CQUFRLENBQUMscUJBQXFCLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7WUFJbkUsTUFBTSxtQkFBUSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBRS9DLENBQUM7S0FBQTtJQUVPLGVBQWU7UUFFbkIsS0FBSyxNQUFNLGlCQUFpQixJQUFJLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxFQUFFO1lBRTFELE1BQU0sWUFBWSxHQUFpQjtnQkFDL0IsVUFBVSxFQUFFLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxVQUFVO2FBQ2pELENBQUM7WUFFRixpQkFBaUIsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztZQUU5QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEVBQUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFlBQVksRUFBQyxDQUFDLENBQUM7U0FFMUU7SUFFTCxDQUFDO0lBRU0sSUFBSTtRQUVQLEtBQUssTUFBTSxlQUFlLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBRWpELGVBQWUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFVBQVU7Z0JBQ3BDLGVBQWUsQ0FBQyxZQUFZLENBQUMsVUFBVyxDQUFDO1NBRWhEO0lBRUwsQ0FBQztDQUVKO0FBakRELDhDQWlEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QW5ub3RhdGlvblN0eWxlfSBmcm9tICcuL2VsZWN0cm9uL0VsZWN0cm9uU2NyZWVuc2hvdHMnO1xuaW1wb3J0IHtTdHlsZVJlc3RvcmV9IGZyb20gJy4vZWxlY3Ryb24vRWxlY3Ryb25TY3JlZW5zaG90cyc7XG5pbXBvcnQge1Byb21pc2VzfSBmcm9tICcuLi91dGlsL1Byb21pc2VzJztcblxuY29uc3QgTUlOX1BBSU5UX0lOVEVSVkFMID0gMTAwMCAvIDYwO1xuXG5leHBvcnQgY2xhc3MgQW5ub3RhdGlvblRvZ2dsZXIge1xuXG4gICAgcHJpdmF0ZSBTRUxFQ1RPUiA9IFwiLnBhZ2UgLnBhZ2VtYXJrLCAucGFnZSAudGV4dC1oaWdobGlnaHQsIC5wYWdlIC5hcmVhLWhpZ2hsaWdodFwiO1xuXG4gICAgcHJpdmF0ZSBhbm5vdGF0aW9uU3R5bGVzOiBBbm5vdGF0aW9uU3R5bGVbXSA9IFtdO1xuXG4gICAgcHJpdmF0ZSBnZXRBbm5vdGF0aW9uRWxlbWVudHMoKTogUmVhZG9ubHlBcnJheTxIVE1MRWxlbWVudD4ge1xuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuU0VMRUNUT1IpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgaGlkZSgpIHtcblxuICAgICAgICAvLyBUT0RPOiB0aGlzIHNob3VsZCBiZSB0aGUgUFJPUEVSIHdheSB0byBkbyB0aGlzIGJ1dCBvbiBteSBtYWNoaW5lXG4gICAgICAgIC8vIHRoaXMgc3RpbGwgZG9lc24ndCB3b3JrLlxuICAgICAgICBhd2FpdCBQcm9taXNlcy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy5oaWRlQW5ub3RhdGlvbnMoKSk7XG5cbiAgICAgICAgLy8gd2FpdCBmb3IgYXQgbGVhc3QgMS82MHRoIG9mIGEgc2Vjb25kIHdoaWNoIGlzIHRoZSBkdXJhdGlvbiB0aGF0IG1vc3RcbiAgICAgICAgLy8gbWFjaGluZXMgdGFyZ2V0LiAgVGhpcyBpcyBwcm9iYWJseSB0b28gbG9uZyBpbiBwcmFjdGljZSB0aG91Z2guXG4gICAgICAgIGF3YWl0IFByb21pc2VzLndhaXRGb3IoTUlOX1BBSU5UX0lOVEVSVkFMKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgaGlkZUFubm90YXRpb25zKCkge1xuXG4gICAgICAgIGZvciAoY29uc3QgYW5ub3RhdGlvbkVsZW1lbnQgb2YgdGhpcy5nZXRBbm5vdGF0aW9uRWxlbWVudHMoKSkge1xuXG4gICAgICAgICAgICBjb25zdCBzdHlsZVJlc3RvcmU6IFN0eWxlUmVzdG9yZSA9IHtcbiAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBhbm5vdGF0aW9uRWxlbWVudC5zdHlsZS52aXNpYmlsaXR5XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBhbm5vdGF0aW9uRWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG5cbiAgICAgICAgICAgIHRoaXMuYW5ub3RhdGlvblN0eWxlcy5wdXNoKHtlbGVtZW50OiBhbm5vdGF0aW9uRWxlbWVudCwgc3R5bGVSZXN0b3JlfSk7XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHVibGljIHNob3coKSB7XG5cbiAgICAgICAgZm9yIChjb25zdCBhbm5vdGF0aW9uU3R5bGUgb2YgdGhpcy5hbm5vdGF0aW9uU3R5bGVzKSB7XG5cbiAgICAgICAgICAgIGFubm90YXRpb25TdHlsZS5lbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPVxuICAgICAgICAgICAgICAgIGFubm90YXRpb25TdHlsZS5zdHlsZVJlc3RvcmUudmlzaWJpbGl0eSE7XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG59XG5cbiJdfQ==