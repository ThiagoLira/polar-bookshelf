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
const electron_1 = require("electron");
const IFrames_1 = require("../../util/dom/IFrames");
const DocumentReadyStates_1 = require("../../util/dom/DocumentReadyStates");
const Logger_1 = require("polar-shared/src/logger/Logger");
const Events_1 = require("../../util/dom/Events");
const Nav_1 = require("../../ui/util/Nav");
const log = Logger_1.Logger.create();
class LinkHandler {
    constructor(iframe) {
        this.iframe = iframe;
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            const doc = yield IFrames_1.IFrames.waitForContentDocument(this.iframe);
            yield DocumentReadyStates_1.DocumentReadyStates.waitFor(doc, 'interactive');
            Array.from(doc.querySelectorAll('iframe'))
                .map(current => new LinkHandler(current))
                .forEach(linkHandler => linkHandler.start());
            this.setupEventHandlers(doc);
        });
    }
    setupEventHandlers(doc) {
        this.setupClickHandlers(doc);
        this.setupKeyDownHandlers(doc);
        this.setupBeforeUnload(doc);
        log.info("Added event handlers to prevent link navigation");
    }
    setupClickHandlers(doc) {
        doc.querySelectorAll('a')
            .forEach(anchor => anchor.addEventListener('click', event => {
            event.preventDefault();
            event.stopPropagation();
            this.handleLinkEvent(event);
        }));
    }
    setupKeyDownHandlers(doc) {
        doc.querySelectorAll('a')
            .forEach(anchor => anchor.addEventListener('keydown', event => {
            if (event.key === 'Enter' || event.key === 'Return') {
                event.preventDefault();
                event.stopPropagation();
                this.handleLinkEvent(event);
            }
        }));
    }
    handleLinkEvent(event) {
        const anchor = Events_1.Events.getAnchor(event.target);
        if (anchor) {
            const href = anchor.href;
            log.info("Opening URL: " + href);
            if (electron_1.shell) {
                electron_1.shell.openExternal(href)
                    .catch(err => console.error(err));
            }
            else {
                Nav_1.Nav.openLinkWithNewTab(href);
            }
        }
    }
    setupBeforeUnload(doc) {
        doc.addEventListener('beforeunload', (event) => {
            event.preventDefault();
            event.stopPropagation();
        });
    }
}
exports.LinkHandler = LinkHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGlua0hhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJMaW5rSGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHVDQUErQjtBQUMvQixvREFBK0M7QUFDL0MsNEVBQXVFO0FBQ3ZFLDJEQUFzRDtBQUN0RCxrREFBNkM7QUFDN0MsMkNBQXNDO0FBRXRDLE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQU81QixNQUFhLFdBQVc7SUFJcEIsWUFBWSxNQUF5QjtRQUNqQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN6QixDQUFDO0lBRVksS0FBSzs7WUFFZCxNQUFNLEdBQUcsR0FBRyxNQUFNLGlCQUFPLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRTlELE1BQU0seUNBQW1CLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxhQUFhLENBQUMsQ0FBQztZQUd0RCxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDckMsR0FBRyxDQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7aUJBQ3pDLE9BQU8sQ0FBRSxXQUFXLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBRSxDQUFDO1lBRW5ELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUdqQyxDQUFDO0tBQUE7SUFFTyxrQkFBa0IsQ0FBQyxHQUFpQjtRQUN4QyxJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUU1QixHQUFHLENBQUMsSUFBSSxDQUFDLGlEQUFpRCxDQUFDLENBQUM7SUFFaEUsQ0FBQztJQUVPLGtCQUFrQixDQUFDLEdBQWlCO1FBR3hDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUM7YUFDcEIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsRUFBRTtZQUN4RCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDdkIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVaLENBQUM7SUFFTyxvQkFBb0IsQ0FBQyxHQUFpQjtRQUUxQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDO2FBQ3BCLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLEVBQUU7WUFFMUQsSUFBSSxLQUFLLENBQUMsR0FBRyxLQUFLLE9BQU8sSUFBSSxLQUFLLENBQUMsR0FBRyxLQUFLLFFBQVEsRUFBRTtnQkFDakQsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDL0I7UUFFTCxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRVosQ0FBQztJQUVPLGVBQWUsQ0FBQyxLQUFZO1FBRWhDLE1BQU0sTUFBTSxHQUFHLGVBQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTlDLElBQUksTUFBTSxFQUFFO1lBQ1IsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztZQUN6QixHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsQ0FBQztZQUVqQyxJQUFJLGdCQUFLLEVBQUU7Z0JBQ1AsZ0JBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO3FCQUNuQixLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFFekM7aUJBQU07Z0JBQ0gsU0FBRyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2hDO1NBRUo7SUFFTCxDQUFDO0lBRU8saUJBQWlCLENBQUMsR0FBaUI7UUFHdkMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQzNDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDO0NBRUo7QUExRkQsa0NBMEZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtzaGVsbH0gZnJvbSAnZWxlY3Ryb24nO1xuaW1wb3J0IHtJRnJhbWVzfSBmcm9tICcuLi8uLi91dGlsL2RvbS9JRnJhbWVzJztcbmltcG9ydCB7RG9jdW1lbnRSZWFkeVN0YXRlc30gZnJvbSAnLi4vLi4vdXRpbC9kb20vRG9jdW1lbnRSZWFkeVN0YXRlcyc7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7RXZlbnRzfSBmcm9tICcuLi8uLi91dGlsL2RvbS9FdmVudHMnO1xuaW1wb3J0IHtOYXZ9IGZyb20gJy4uLy4uL3VpL3V0aWwvTmF2JztcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG4vKipcbiAqIFRoZSBsaW5rIGhhbmRsZXIgd29ya3Mgd2l0aCB0aGUgdGhlIGlmcmFtZSwgYW5kIGFsbCBjaGlsZCBpZnJhbWVzLCBhbmRcbiAqIGludGVyY2VwdHMgYWxsIGxpbmsgY2xpY2tzLCBhbmQgYWJvcnRzIHRoZW0sIGZvcndhcmRpbmcgdGhlbSB0byB0aGUgc2hlbGxcbiAqIGlmIHdlJ3JlIHJ1bm5pbmcgd2l0aGluIEVsZWN0cm9uLlxuICovXG5leHBvcnQgY2xhc3MgTGlua0hhbmRsZXIge1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBpZnJhbWU6IEhUTUxJRnJhbWVFbGVtZW50O1xuXG4gICAgY29uc3RydWN0b3IoaWZyYW1lOiBIVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0aGlzLmlmcmFtZSA9IGlmcmFtZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgc3RhcnQoKSB7XG5cbiAgICAgICAgY29uc3QgZG9jID0gYXdhaXQgSUZyYW1lcy53YWl0Rm9yQ29udGVudERvY3VtZW50KHRoaXMuaWZyYW1lKTtcblxuICAgICAgICBhd2FpdCBEb2N1bWVudFJlYWR5U3RhdGVzLndhaXRGb3IoZG9jLCAnaW50ZXJhY3RpdmUnKTtcblxuICAgICAgICAvLyBub3cgc2V0dXAgY2hpbGQgaWZyYW1lIGhhbmRsZXJzXG4gICAgICAgIEFycmF5LmZyb20oZG9jLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lmcmFtZScpKVxuICAgICAgICAgICAgLm1hcCggY3VycmVudCA9PiBuZXcgTGlua0hhbmRsZXIoY3VycmVudCkpXG4gICAgICAgICAgICAuZm9yRWFjaCggbGlua0hhbmRsZXIgPT4gbGlua0hhbmRsZXIuc3RhcnQoKSApO1xuXG4gICAgICAgIHRoaXMuc2V0dXBFdmVudEhhbmRsZXJzKGRvYyk7XG5cblxuICAgIH1cblxuICAgIHByaXZhdGUgc2V0dXBFdmVudEhhbmRsZXJzKGRvYzogSFRNTERvY3VtZW50KSB7XG4gICAgICAgIHRoaXMuc2V0dXBDbGlja0hhbmRsZXJzKGRvYyk7XG4gICAgICAgIHRoaXMuc2V0dXBLZXlEb3duSGFuZGxlcnMoZG9jKTtcbiAgICAgICAgdGhpcy5zZXR1cEJlZm9yZVVubG9hZChkb2MpO1xuXG4gICAgICAgIGxvZy5pbmZvKFwiQWRkZWQgZXZlbnQgaGFuZGxlcnMgdG8gcHJldmVudCBsaW5rIG5hdmlnYXRpb25cIik7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIHNldHVwQ2xpY2tIYW5kbGVycyhkb2M6IEhUTUxEb2N1bWVudCkge1xuXG4gICAgICAgIC8vIGNsaWNrIGFuZCBlbnRlciBuZWVkIHRvIGJlIGFib3J0ZWQgaGVyZS4uXG4gICAgICAgIGRvYy5xdWVyeVNlbGVjdG9yQWxsKCdhJylcbiAgICAgICAgICAgIC5mb3JFYWNoKGFuY2hvciA9PiBhbmNob3IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUxpbmtFdmVudChldmVudCk7XG4gICAgICAgICAgICB9KSk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIHNldHVwS2V5RG93bkhhbmRsZXJzKGRvYzogSFRNTERvY3VtZW50KSB7XG5cbiAgICAgICAgZG9jLnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKVxuICAgICAgICAgICAgLmZvckVhY2goYW5jaG9yID0+IGFuY2hvci5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZXZlbnQgPT4ge1xuXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJyB8fCBldmVudC5rZXkgPT09ICdSZXR1cm4nKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUxpbmtFdmVudChldmVudCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9KSk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGhhbmRsZUxpbmtFdmVudChldmVudDogRXZlbnQpIHtcblxuICAgICAgICBjb25zdCBhbmNob3IgPSBFdmVudHMuZ2V0QW5jaG9yKGV2ZW50LnRhcmdldCk7XG5cbiAgICAgICAgaWYgKGFuY2hvcikge1xuICAgICAgICAgICAgY29uc3QgaHJlZiA9IGFuY2hvci5ocmVmO1xuICAgICAgICAgICAgbG9nLmluZm8oXCJPcGVuaW5nIFVSTDogXCIgKyBocmVmKTtcblxuICAgICAgICAgICAgaWYgKHNoZWxsKSB7XG4gICAgICAgICAgICAgICAgc2hlbGwub3BlbkV4dGVybmFsKGhyZWYpXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBOYXYub3BlbkxpbmtXaXRoTmV3VGFiKGhyZWYpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHByaXZhdGUgc2V0dXBCZWZvcmVVbmxvYWQoZG9jOiBIVE1MRG9jdW1lbnQpIHtcblxuICAgICAgICAvLyBwcmV2ZW50IHRoZSBkb2N1bWVudCBmcm9tIGJlaW5nIHVubG9hZGVkLlxuICAgICAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcignYmVmb3JldW5sb2FkJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG59XG4iXX0=