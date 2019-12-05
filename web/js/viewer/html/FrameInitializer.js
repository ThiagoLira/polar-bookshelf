"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Preconditions_1 = require("polar-shared/src/Preconditions");
const EventBridge_1 = require("./EventBridge");
const Logger_1 = require("polar-shared/src/logger/Logger");
const log = Logger_1.Logger.create();
class FrameInitializer {
    constructor(iframe, textLayer) {
        this.loaded = false;
        if (!iframe) {
            throw new Error("No iframe");
        }
        this.iframe = iframe;
        this.textLayer = textLayer;
    }
    start() {
        Preconditions_1.notNull(this.iframe.contentDocument)
            .addEventListener("readystatechange", this.onReadyStateChange.bind(this));
        this.checkLoaded();
    }
    checkLoaded() {
        if (!this.loaded) {
            this.loaded = true;
            this.onLoad();
            log.info("FrameInitializer: Document has finished loading");
        }
    }
    onReadyStateChange() {
        if (Preconditions_1.notNull(this.iframe.contentDocument).readyState === "complete") {
            this.checkLoaded();
        }
    }
    onLoad() {
        log.info("Frame loaded.  Sending pagesinit on .page");
        this.startEventBridge();
        this.updateDocTitle();
        this.dispatchPagesInit();
    }
    updateDocTitle() {
        const title = Preconditions_1.notNull(this.iframe.contentDocument).title;
        log.info("Setting title: " + title);
        document.title = title;
    }
    dispatchPagesInit() {
        const event = new Event('pagesinit', { bubbles: true });
        Preconditions_1.notNull(document.querySelector(".page")).dispatchEvent(event);
    }
    startEventBridge() {
        document.querySelectorAll(".page").forEach(pageElement => {
            const eventBridge = new EventBridge_1.EventBridge(pageElement, this.iframe);
            eventBridge.start()
                .catch(err => log.error("Could not run eventBridge: ", err));
        });
    }
}
exports.FrameInitializer = FrameInitializer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRnJhbWVJbml0aWFsaXplci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkZyYW1lSW5pdGlhbGl6ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxrRUFBdUQ7QUFDdkQsK0NBQTBDO0FBQzFDLDJEQUFzRDtBQUV0RCxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFPNUIsTUFBYSxnQkFBZ0I7SUFPekIsWUFBWSxNQUF5QixFQUFFLFNBQXNCO1FBRnJELFdBQU0sR0FBWSxLQUFLLENBQUM7UUFJNUIsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNULE1BQU0sSUFBSSxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDaEM7UUFFRCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztJQUUvQixDQUFDO0lBRU0sS0FBSztRQUVSLHVCQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUM7YUFDL0IsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBRTlFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUV2QixDQUFDO0lBRU8sV0FBVztRQUVmLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2QsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbkIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2QsR0FBRyxDQUFDLElBQUksQ0FBQyxpREFBaUQsQ0FBQyxDQUFDO1NBQy9EO0lBRUwsQ0FBQztJQUVNLGtCQUFrQjtRQUVyQixJQUFJLHVCQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQyxVQUFVLEtBQUssVUFBVSxFQUFFO1lBQ2hFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN0QjtJQUVMLENBQUM7SUFLTyxNQUFNO1FBRVYsR0FBRyxDQUFDLElBQUksQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUU3QixDQUFDO0lBRU8sY0FBYztRQUNsQixNQUFNLEtBQUssR0FBRyx1QkFBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ3pELEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDcEMsUUFBUSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQztJQUVPLGlCQUFpQjtRQUVyQixNQUFNLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FBQyxXQUFXLEVBQUUsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUd0RCx1QkFBTyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFbEUsQ0FBQztJQUVPLGdCQUFnQjtRQUVwQixRQUFRLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQ3JELE1BQU0sV0FBVyxHQUFHLElBQUkseUJBQVcsQ0FBZSxXQUFXLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzVFLFdBQVcsQ0FBQyxLQUFLLEVBQUU7aUJBQ2QsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyw2QkFBNkIsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3JFLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUVKO0FBakZELDRDQWlGQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7bm90TnVsbH0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9QcmVjb25kaXRpb25zJztcbmltcG9ydCB7RXZlbnRCcmlkZ2V9IGZyb20gJy4vRXZlbnRCcmlkZ2UnO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbG9nZ2VyL0xvZ2dlcic7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuLyoqXG4gKiBMaXN0ZW5zIGZvciB0aGUgaWZyYW1lIHRvIGxvYWQgYW5kIHRoZW4gc2VuZHMgdGhlIGV2ZW50cyB0byB0YXJnZXQgb2JqZWN0c1xuICogc28gdGhhdCB0aGF0IHRoZSBwYWdlIHN0YXJ0ZWQgLCBhbmQgdGhlbiBmaW5pc2hlZCBsb2FkaW5nLiAgV2UgdGhlblxuICogZGlzcGF0Y2hlZCB0d28gY2FsbGJhY2tzIG9uSUZyYW1lTG9hZGluZyBhbmQgb25JRnJhbWVMb2FkZWQuXG4gKi9cbmV4cG9ydCBjbGFzcyBGcmFtZUluaXRpYWxpemVyIHtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgaWZyYW1lOiBIVE1MSUZyYW1lRWxlbWVudDtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHRleHRMYXllcjogSFRNTEVsZW1lbnQ7XG5cbiAgICBwcml2YXRlIGxvYWRlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IoaWZyYW1lOiBIVE1MSUZyYW1lRWxlbWVudCwgdGV4dExheWVyOiBIVE1MRWxlbWVudCkge1xuXG4gICAgICAgIGlmICghaWZyYW1lKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBpZnJhbWVcIik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlmcmFtZSA9IGlmcmFtZTtcbiAgICAgICAgdGhpcy50ZXh0TGF5ZXIgPSB0ZXh0TGF5ZXI7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhcnQoKSB7XG5cbiAgICAgICAgbm90TnVsbCh0aGlzLmlmcmFtZS5jb250ZW50RG9jdW1lbnQpXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcInJlYWR5c3RhdGVjaGFuZ2VcIiwgdGhpcy5vblJlYWR5U3RhdGVDaGFuZ2UuYmluZCh0aGlzKSk7XG5cbiAgICAgICAgdGhpcy5jaGVja0xvYWRlZCgpO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjaGVja0xvYWRlZCgpIHtcblxuICAgICAgICBpZiAoIXRoaXMubG9hZGVkKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLm9uTG9hZCgpO1xuICAgICAgICAgICAgbG9nLmluZm8oXCJGcmFtZUluaXRpYWxpemVyOiBEb2N1bWVudCBoYXMgZmluaXNoZWQgbG9hZGluZ1wiKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHVibGljIG9uUmVhZHlTdGF0ZUNoYW5nZSgpIHtcblxuICAgICAgICBpZiAobm90TnVsbCh0aGlzLmlmcmFtZS5jb250ZW50RG9jdW1lbnQpLnJlYWR5U3RhdGUgPT09IFwiY29tcGxldGVcIikge1xuICAgICAgICAgICAgdGhpcy5jaGVja0xvYWRlZCgpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIHByaXZhdGUgb25Mb2FkKCkge1xuXG4gICAgICAgIGxvZy5pbmZvKFwiRnJhbWUgbG9hZGVkLiAgU2VuZGluZyBwYWdlc2luaXQgb24gLnBhZ2VcIik7XG4gICAgICAgIHRoaXMuc3RhcnRFdmVudEJyaWRnZSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZURvY1RpdGxlKCk7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hQYWdlc0luaXQoKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlRG9jVGl0bGUoKSB7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gbm90TnVsbCh0aGlzLmlmcmFtZS5jb250ZW50RG9jdW1lbnQpLnRpdGxlO1xuICAgICAgICBsb2cuaW5mbyhcIlNldHRpbmcgdGl0bGU6IFwiICsgdGl0bGUpO1xuICAgICAgICBkb2N1bWVudC50aXRsZSA9IHRpdGxlO1xuICAgIH1cblxuICAgIHByaXZhdGUgZGlzcGF0Y2hQYWdlc0luaXQoKSB7XG5cbiAgICAgICAgY29uc3QgZXZlbnQgPSBuZXcgRXZlbnQoJ3BhZ2VzaW5pdCcsIHtidWJibGVzOiB0cnVlfSk7XG5cbiAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV2ZW50LlxuICAgICAgICBub3ROdWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFnZVwiKSkuZGlzcGF0Y2hFdmVudChldmVudCk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXJ0RXZlbnRCcmlkZ2UoKSB7XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wYWdlXCIpLmZvckVhY2gocGFnZUVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgZXZlbnRCcmlkZ2UgPSBuZXcgRXZlbnRCcmlkZ2UoPEhUTUxFbGVtZW50PiBwYWdlRWxlbWVudCwgdGhpcy5pZnJhbWUpO1xuICAgICAgICAgICAgZXZlbnRCcmlkZ2Uuc3RhcnQoKVxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gbG9nLmVycm9yKFwiQ291bGQgbm90IHJ1biBldmVudEJyaWRnZTogXCIsIGVycikpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbn1cbiJdfQ==