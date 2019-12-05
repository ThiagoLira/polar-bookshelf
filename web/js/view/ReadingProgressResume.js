"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Elements_1 = require("../util/Elements");
const DocFormatFactory_1 = require("../docformat/DocFormatFactory");
const Rects_1 = require("../Rects");
const Arrays_1 = require("polar-shared/src/util/Arrays");
class ReadingProgressResume {
    static resume(docMeta) {
        setTimeout(() => this.doResume(docMeta), 1);
    }
    static doResume(docMeta) {
        const targetPagemark = this.computeTargetPagemark(docMeta);
        if (!targetPagemark) {
            return false;
        }
        const pages = document.querySelectorAll(".page");
        const pageNum = targetPagemark.pageNum;
        const pageElement = pages[pageNum - 1];
        const scrollParent = this.getScrollParent(pageElement);
        const pageOffset = Elements_1.Elements.getRelativeOffsetRect(pageElement, scrollParent);
        const pageTop = pageOffset.top;
        const pageHeight = Math.floor(pageElement.clientHeight);
        const computePagemarkHeight = () => {
            const docFormat = DocFormatFactory_1.DocFormatFactory.getInstance();
            if (docFormat.name === 'pdf') {
                const pagemarkBottom = Math.floor(Rects_1.Rects.createFromBasicRect(targetPagemark.pagemark.rect).bottom);
                const pagemarkBottomPerc = pagemarkBottom / 100;
                return pageHeight * pagemarkBottomPerc;
            }
            else {
                const pagemarkElements = Array.from(pageElement.querySelectorAll(".pagemark"))
                    .sort((a, b) => a.getBoundingClientRect().bottom - b.getBoundingClientRect().bottom);
                const pagemarkElement = Arrays_1.Arrays.last(pagemarkElements);
                if (pagemarkElement) {
                    return pagemarkElement.clientHeight;
                }
                else {
                    throw new Error("No pagemarkElement");
                }
            }
        };
        const pagemarkHeight = computePagemarkHeight();
        const windowDelta = window.innerHeight * (0.2);
        const newScrollTop = Math.floor(pageTop + pagemarkHeight - windowDelta);
        scrollParent.scrollTop = newScrollTop;
        return true;
    }
    static pdfjsVersion() {
        const win = window;
        if (win && win.pdfjsLib) {
            return (win.pdfjsLib.version);
        }
        return undefined;
    }
    static getScrollParent(element) {
        const docFormat = DocFormatFactory_1.DocFormatFactory.getInstance();
        if (docFormat.name === 'pdf') {
            return document.querySelector("#viewerContainer");
        }
        if (docFormat.name === 'html') {
            return document.querySelector(".polar-viewer");
        }
        return Elements_1.Elements.getScrollParent(element);
    }
    static computePagemarks(docMeta) {
        const result = [];
        for (const pageMeta of Object.values(docMeta.pageMetas)) {
            const pagemarks = Object.values(pageMeta.pagemarks || {});
            const pagemarkHolders = pagemarks.map(pagemark => {
                return {
                    pageNum: pageMeta.pageInfo.num,
                    pagemark
                };
            });
            result.push(...pagemarkHolders);
        }
        return result;
    }
    static computeTargetPagemark(docMeta) {
        const pagemarkHolders = this.computePagemarks(docMeta);
        let result;
        const comparePagemarks = (p0, p1) => {
            if (!p0) {
                return p1;
            }
            if (p0.pageNum < p1.pageNum) {
                return p1;
            }
            if (p0.pageNum === p1.pageNum) {
                if (Rects_1.Rects.createFromBasicRect(p0.pagemark.rect).bottom <
                    Rects_1.Rects.createFromBasicRect(p1.pagemark.rect).bottom) {
                    return p1;
                }
            }
            return p0;
        };
        for (const pagemarkHolder of pagemarkHolders) {
            result = comparePagemarks(result, pagemarkHolder);
        }
        return result;
    }
}
exports.ReadingProgressResume = ReadingProgressResume;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVhZGluZ1Byb2dyZXNzUmVzdW1lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUmVhZGluZ1Byb2dyZXNzUmVzdW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0NBQTBDO0FBQzFDLG9FQUErRDtBQUcvRCxvQ0FBK0I7QUFJL0IseURBQW9EO0FBRXBELE1BQWEscUJBQXFCO0lBRXZCLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBaUI7UUFDbEMsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVPLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBaUI7UUFFckMsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTNELElBQUksQ0FBRSxjQUFjLEVBQUU7WUFDbEIsT0FBTyxLQUFLLENBQUM7U0FDaEI7UUFFRCxNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFakQsTUFBTSxPQUFPLEdBQUcsY0FBYyxDQUFDLE9BQU8sQ0FBQztRQUV2QyxNQUFNLFdBQVcsR0FBaUIsS0FBSyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUVyRCxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXZELE1BQU0sVUFBVSxHQUFHLG1CQUFRLENBQUMscUJBQXFCLENBQUMsV0FBVyxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBRTdFLE1BQU0sT0FBTyxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUM7UUFDL0IsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFeEQsTUFBTSxxQkFBcUIsR0FBRyxHQUFXLEVBQUU7WUFFdkMsTUFBTSxTQUFTLEdB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LE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxlQUFlLENBQUMsQ0FBQztTQUVuQztRQUVELE9BQU8sTUFBTSxDQUFDO0lBRWxCLENBQUM7SUFFTyxNQUFNLENBQUMscUJBQXFCLENBQUMsT0FBaUI7UUFFbEQsTUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXZELElBQUksTUFBa0MsQ0FBQztRQU12QyxNQUFNLGdCQUFnQixHQUFHLENBQUMsRUFBOEIsRUFBRSxFQUFrQixFQUFFLEVBQUU7WUFFNUUsSUFBSSxDQUFDLEVBQUUsRUFBRTtnQkFDTCxPQUFPLEVBQUUsQ0FBQzthQUNiO1lBRUQsSUFBSSxFQUFFLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxPQUFPLEVBQUU7Z0JBQ3pCLE9BQU8sRUFBRSxDQUFDO2FBQ2I7WUFFRCxJQUFJLEVBQUUsQ0FBQyxPQUFPLEtBQUssRUFBRSxDQUFDLE9BQU8sRUFBRTtnQkFJM0IsSUFBSSxhQUFLLENBQUMsbUJBQW1CLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNO29CQUNsRCxhQUFLLENBQUMsbUJBQW1CLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUU7b0JBRXBELE9BQU8sRUFBRSxDQUFDO2lCQUViO2FBRUo7WUFFRCxPQUFPLEVBQUUsQ0FBQztRQUVkLENBQUMsQ0FBQztRQUdGLEtBQUssTUFBTSxjQUFjLElBQUksZUFBZSxFQUFFO1lBQzFDLE1BQU0sR0FBRyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsY0FBYyxDQUFDLENBQUM7U0FDckQ7UUFFRCxPQUFPLE1BQU0sQ0FBQztJQUVsQixDQUFDO0NBRUo7QUFqTEQsc0RBaUxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFbGVtZW50c30gZnJvbSAnLi4vdXRpbC9FbGVtZW50cyc7XG5pbXBvcnQge0RvY0Zvcm1hdEZhY3Rvcnl9IGZyb20gJy4uL2RvY2Zvcm1hdC9Eb2NGb3JtYXRGYWN0b3J5JztcbmltcG9ydCB7RG9jTWV0YX0gZnJvbSAnLi4vbWV0YWRhdGEvRG9jTWV0YSc7XG5pbXBvcnQge1BhZ2VtYXJrfSBmcm9tICcuLi9tZXRhZGF0YS9QYWdlbWFyayc7XG5pbXBvcnQge1JlY3RzfSBmcm9tICcuLi9SZWN0cyc7XG5pbXBvcnQge1JlZHVjZXJzfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvUmVkdWNlcnMnO1xuaW1wb3J0IHtJRG9jTWV0YX0gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvbWV0YWRhdGEvSURvY01ldGFcIjtcbmltcG9ydCB7SVBhZ2VtYXJrfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy9tZXRhZGF0YS9JUGFnZW1hcmtcIjtcbmltcG9ydCB7QXJyYXlzfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy91dGlsL0FycmF5c1wiO1xuXG5leHBvcnQgY2xhc3MgUmVhZGluZ1Byb2dyZXNzUmVzdW1lIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgcmVzdW1lKGRvY01ldGE6IElEb2NNZXRhKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5kb1Jlc3VtZShkb2NNZXRhKSwgMSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgZG9SZXN1bWUoZG9jTWV0YTogSURvY01ldGEpIHtcblxuICAgICAgICBjb25zdCB0YXJnZXRQYWdlbWFyayA9IHRoaXMuY29tcHV0ZVRhcmdldFBhZ2VtYXJrKGRvY01ldGEpO1xuXG4gICAgICAgIGlmICghIHRhcmdldFBhZ2VtYXJrKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGFnZVwiKTtcblxuICAgICAgICBjb25zdCBwYWdlTnVtID0gdGFyZ2V0UGFnZW1hcmsucGFnZU51bTtcblxuICAgICAgICBjb25zdCBwYWdlRWxlbWVudCA9IDxIVE1MRWxlbWVudD4gcGFnZXNbcGFnZU51bSAtIDFdO1xuXG4gICAgICAgIGNvbnN0IHNjcm9sbFBhcmVudCA9IHRoaXMuZ2V0U2Nyb2xsUGFyZW50KHBhZ2VFbGVtZW50KTtcblxuICAgICAgICBjb25zdCBwYWdlT2Zmc2V0ID0gRWxlbWVudHMuZ2V0UmVsYXRpdmVPZmZzZXRSZWN0KHBhZ2VFbGVtZW50LCBzY3JvbGxQYXJlbnQpO1xuXG4gICAgICAgIGNvbnN0IHBhZ2VUb3AgPSBwYWdlT2Zmc2V0LnRvcDtcbiAgICAgICAgY29uc3QgcGFnZUhlaWdodCA9IE1hdGguZmxvb3IocGFnZUVsZW1lbnQuY2xpZW50SGVpZ2h0KTtcblxuICAgICAgICBjb25zdCBjb21wdXRlUGFnZW1hcmtIZWlnaHQgPSAoKTogbnVtYmVyID0+IHtcblxuICAgICAgICAgICAgY29uc3QgZG9jRm9ybWF0ID0gRG9jRm9ybWF0RmFjdG9yeS5nZXRJbnN0YW5jZSgpO1xuXG4gICAgICAgICAgICBpZiAoZG9jRm9ybWF0Lm5hbWUgPT09ICdwZGYnKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBwYWdlbWFya0JvdHRvbVxuICAgICAgICAgICAgICAgICAgICA9IE1hdGguZmxvb3IoUmVjdHMuY3JlYXRlRnJvbUJhc2ljUmVjdCh0YXJnZXRQYWdlbWFyay5wYWdlbWFyay5yZWN0KS5ib3R0b20pO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgcGFnZW1hcmtCb3R0b21QZXJjID0gcGFnZW1hcmtCb3R0b20gLyAxMDA7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gcGFnZUhlaWdodCAqIHBhZ2VtYXJrQm90dG9tUGVyYztcblxuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIC8vIFRPRE86IHNob3VsZCBiZSBzb3J0ZWQgYnkgdGltZSBhbmQgbm90IGJ5IHBvc2l0aW9uLlxuICAgICAgICAgICAgICAgIGNvbnN0IHBhZ2VtYXJrRWxlbWVudHNcbiAgICAgICAgICAgICAgICAgICAgPSBBcnJheS5mcm9tKHBhZ2VFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucGFnZW1hcmtcIikpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tIC0gYi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b20pO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgcGFnZW1hcmtFbGVtZW50ID0gQXJyYXlzLmxhc3QocGFnZW1hcmtFbGVtZW50cyk7XG5cbiAgICAgICAgICAgICAgICBpZiAocGFnZW1hcmtFbGVtZW50KSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gaW4gSFRNTCBtb2RlIG9yIFBERnMgd2l0aCBzbWFsbGVyXG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhZ2VtYXJrRWxlbWVudC5jbGllbnRIZWlnaHQ7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBwYWdlbWFya0VsZW1lbnRcIik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfTtcblxuICAgICAgICAvLyBub3cgY29tcHV0ZSB0aGUgaGVpZ2h0IG9mIHRoZSBwYWdlbWFyayBzbyB0aGF0IHdlIHNjcm9sbCB0byB0aGF0XG4gICAgICAgIC8vIHBvaW50LlxuICAgICAgICBjb25zdCBwYWdlbWFya0hlaWdodCA9IGNvbXB1dGVQYWdlbWFya0hlaWdodCgpO1xuXG4gICAgICAgIC8vIGJ1dCBhZGp1c3QgaXQgYSBiaXQgc28gdGhhdCB0aGUgYm90dG9tIHBvcnRpb24gb2YgdGhlIHBhZ2VtYXJrIGlzXG4gICAgICAgIC8vIHZpc2libGUgYnkgY29tcHV0aW5nIHRoZSBoZWlnaHQgb2YgdGhlIHdpbmRvdyBhbmQgc2hpZnRpbmcgaXRcbiAgICAgICAgY29uc3Qgd2luZG93RGVsdGEgPSB3aW5kb3cuaW5uZXJIZWlnaHQgKiAoMC4yKTtcblxuICAgICAgICBjb25zdCBuZXdTY3JvbGxUb3AgPSBNYXRoLmZsb29yKHBhZ2VUb3AgKyBwYWdlbWFya0hlaWdodCAtIHdpbmRvd0RlbHRhKTtcblxuICAgICAgICBzY3JvbGxQYXJlbnQuc2Nyb2xsVG9wID0gbmV3U2Nyb2xsVG9wO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgcGRmanNWZXJzaW9uKCkge1xuXG4gICAgICAgIGNvbnN0IHdpbiA9ICg8YW55PiB3aW5kb3cpO1xuXG4gICAgICAgIGlmICh3aW4gJiYgd2luLnBkZmpzTGliKSB7XG4gICAgICAgICAgICByZXR1cm4gKHdpbi5wZGZqc0xpYi52ZXJzaW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBnZXRTY3JvbGxQYXJlbnQoZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcblxuICAgICAgICBjb25zdCBkb2NGb3JtYXQgPSBEb2NGb3JtYXRGYWN0b3J5LmdldEluc3RhbmNlKCk7XG5cbiAgICAgICAgaWYgKGRvY0Zvcm1hdC5uYW1lID09PSAncGRmJykge1xuICAgICAgICAgICAgcmV0dXJuIDxIVE1MRWxlbWVudD4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN2aWV3ZXJDb250YWluZXJcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZG9jRm9ybWF0Lm5hbWUgPT09ICdodG1sJykge1xuICAgICAgICAgICAgcmV0dXJuIDxIVE1MRWxlbWVudD4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb2xhci12aWV3ZXJcIik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gIDxIVE1MRWxlbWVudD4gRWxlbWVudHMuZ2V0U2Nyb2xsUGFyZW50KGVsZW1lbnQpO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgY29tcHV0ZVBhZ2VtYXJrcyhkb2NNZXRhOiBJRG9jTWV0YSkge1xuXG4gICAgICAgIGNvbnN0IHJlc3VsdDogUGFnZW1hcmtIb2xkZXJbXSA9IFtdO1xuXG4gICAgICAgIGZvciAoY29uc3QgcGFnZU1ldGEgb2YgT2JqZWN0LnZhbHVlcyhkb2NNZXRhLnBhZ2VNZXRhcykpIHtcblxuICAgICAgICAgICAgY29uc3QgcGFnZW1hcmtzID0gT2JqZWN0LnZhbHVlcyhwYWdlTWV0YS5wYWdlbWFya3MgfHwge30pO1xuXG4gICAgICAgICAgICBjb25zdCBwYWdlbWFya0hvbGRlcnMgPVxuICAgICAgICAgICAgICAgIHBhZ2VtYXJrcy5tYXAoIHBhZ2VtYXJrID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VOdW06IHBhZ2VNZXRhLnBhZ2VJbmZvLm51bSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VtYXJrXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKC4uLnBhZ2VtYXJrSG9sZGVycyk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBjb21wdXRlVGFyZ2V0UGFnZW1hcmsoZG9jTWV0YTogSURvY01ldGEpOiBQYWdlbWFya0hvbGRlciB8IHVuZGVmaW5lZCB7XG5cbiAgICAgICAgY29uc3QgcGFnZW1hcmtIb2xkZXJzID0gdGhpcy5jb21wdXRlUGFnZW1hcmtzKGRvY01ldGEpO1xuXG4gICAgICAgIGxldCByZXN1bHQ6IFBhZ2VtYXJrSG9sZGVyIHwgdW5kZWZpbmVkO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDb21wYXJlIHR3byBwYWdlbWFya3MgYW5kIHJldHVybiB0aGUgb25lIHRoYXQgaXMgZmFydGhlc3QgZG93biB0aGVcbiAgICAgICAgICogcGFnZS5cbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IGNvbXBhcmVQYWdlbWFya3MgPSAocDA6IFBhZ2VtYXJrSG9sZGVyIHwgdW5kZWZpbmVkLCBwMTogUGFnZW1hcmtIb2xkZXIpID0+IHtcblxuICAgICAgICAgICAgaWYgKCFwMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHAwLnBhZ2VOdW0gPCBwMS5wYWdlTnVtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHAxO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocDAucGFnZU51bSA9PT0gcDEucGFnZU51bSkge1xuXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogc2hvdWxkIGJlIGJ5IHRpbWUgYW5kIG5vdCBieSBwb3NpdGlvbi5cblxuICAgICAgICAgICAgICAgIGlmIChSZWN0cy5jcmVhdGVGcm9tQmFzaWNSZWN0KHAwLnBhZ2VtYXJrLnJlY3QpLmJvdHRvbSA8XG4gICAgICAgICAgICAgICAgICAgIFJlY3RzLmNyZWF0ZUZyb21CYXNpY1JlY3QocDEucGFnZW1hcmsucmVjdCkuYm90dG9tKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHAxO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBwMDtcblxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIFRPRE86IHRoaXMgY291bGQgYmUgY2xlYW5lciB2aWEgYSBzb3J0ICsgcmVkdWNlL2xhc3RcbiAgICAgICAgZm9yIChjb25zdCBwYWdlbWFya0hvbGRlciBvZiBwYWdlbWFya0hvbGRlcnMpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGNvbXBhcmVQYWdlbWFya3MocmVzdWx0LCBwYWdlbWFya0hvbGRlcik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuXG4gICAgfVxuXG59XG5cbmludGVyZmFjZSBUYXJnZXRQYWdlbWFyayB7XG4gICAgcmVhZG9ubHkgcGFnZU51bTogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgUGFnZW1hcmtIb2xkZXIge1xuICAgIHJlYWRvbmx5IHBhZ2VOdW06IG51bWJlcjtcbiAgICByZWFkb25seSBwYWdlbWFyazogSVBhZ2VtYXJrO1xufVxuXG4iXX0=