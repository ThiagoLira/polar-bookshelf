"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AnnotationSidebars_1 = require("./AnnotationSidebars");
const Logger_1 = require("polar-shared/src/logger/Logger");
const LocalPrefs_1 = require("../util/LocalPrefs");
const log = Logger_1.Logger.create();
const PREF_SIDEBAR_OPEN = 'annotation-sidebar-open';
class AnnotationSidebarService {
    constructor(model) {
        this.model = model;
    }
    start() {
        this.model.registerListenerForDocumentLoaded(event => this.onDocumentLoaded(event));
        window.addEventListener("message", event => this.onMessageReceived(event), false);
        if (!LocalPrefs_1.LocalPrefs.defined(PREF_SIDEBAR_OPEN)) {
            LocalPrefs_1.LocalPrefs.mark(PREF_SIDEBAR_OPEN);
        }
        return this;
    }
    onDocumentLoaded(event) {
        log.debug("Creating annotation sidebar");
        this.splitter = AnnotationSidebars_1.AnnotationSidebars.create(event.docMeta, this.model.persistenceLayerProvider);
        if (LocalPrefs_1.LocalPrefs.isMarked(PREF_SIDEBAR_OPEN)) {
            this.splitter.expand();
        }
        else {
            this.splitter.collapse();
        }
    }
    onMessageReceived(event) {
        log.info("Received message: ", event);
        switch (event.data.type) {
            case "toggle-annotation-sidebar":
                this.toggleAnnotationSidebar();
                break;
        }
    }
    toggleAnnotationSidebar() {
        const state = this.splitter.toggle();
        if (state === 'expanded') {
            LocalPrefs_1.LocalPrefs.mark(PREF_SIDEBAR_OPEN);
        }
        else {
            LocalPrefs_1.LocalPrefs.mark(PREF_SIDEBAR_OPEN, false);
        }
    }
}
exports.AnnotationSidebarService = AnnotationSidebarService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW5ub3RhdGlvblNpZGViYXJTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQW5ub3RhdGlvblNpZGViYXJTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsNkRBQXdEO0FBQ3hELDJEQUFzRDtBQUV0RCxtREFBOEM7QUFFOUMsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLE1BQU0saUJBQWlCLEdBQUcseUJBQXlCLENBQUM7QUFFcEQsTUFBYSx3QkFBd0I7SUFNakMsWUFBbUIsS0FBWTtRQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBRU0sS0FBSztRQUVSLElBQUksQ0FBQyxLQUFLLENBQUMsaUNBQWlDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUVwRixNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRWxGLElBQUksQ0FBRSx1QkFBVSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFO1lBR3pDLHVCQUFVLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7U0FDdEM7UUFFRCxPQUFPLElBQUksQ0FBQztJQUVoQixDQUFDO0lBRU8sZ0JBQWdCLENBQUMsS0FBMEI7UUFFL0MsR0FBRyxDQUFDLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxRQUFRLEdBQUcsdUNBQWtCLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQ2IsSUFBSSxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBRS9FLElBQUksdUJBQVUsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsRUFBRTtZQUN4QyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQzFCO2FBQU07WUFDSCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQzVCO0lBRUwsQ0FBQztJQUVPLGlCQUFpQixDQUFDLEtBQVU7UUFFaEMsR0FBRyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV0QyxRQUFRLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBRXJCLEtBQUssMkJBQTJCO2dCQUM1QixJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztnQkFDL0IsTUFBTTtTQUViO0lBRUwsQ0FBQztJQUVPLHVCQUF1QjtRQUUzQixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRXRDLElBQUksS0FBSyxLQUFLLFVBQVUsRUFBRTtZQUN0Qix1QkFBVSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1NBQ3RDO2FBQU07WUFDSCx1QkFBVSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUM3QztJQUVMLENBQUM7Q0FFSjtBQWxFRCw0REFrRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RvY3VtZW50TG9hZGVkRXZlbnQsIE1vZGVsfSBmcm9tICcuLi9tb2RlbC9Nb2RlbCc7XG5pbXBvcnQge0Fubm90YXRpb25TaWRlYmFyc30gZnJvbSAnLi9Bbm5vdGF0aW9uU2lkZWJhcnMnO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge1NwbGl0dGVyfSBmcm9tICcuLi91aS9zcGxpdHRlci9TcGxpdHRlcic7XG5pbXBvcnQge0xvY2FsUHJlZnN9IGZyb20gJy4uL3V0aWwvTG9jYWxQcmVmcyc7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuY29uc3QgUFJFRl9TSURFQkFSX09QRU4gPSAnYW5ub3RhdGlvbi1zaWRlYmFyLW9wZW4nO1xuXG5leHBvcnQgY2xhc3MgQW5ub3RhdGlvblNpZGViYXJTZXJ2aWNlIHtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgbW9kZWw6IE1vZGVsO1xuXG4gICAgcHJpdmF0ZSBzcGxpdHRlcj86IFNwbGl0dGVyO1xuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKG1vZGVsOiBNb2RlbCkge1xuICAgICAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXJ0KCkge1xuXG4gICAgICAgIHRoaXMubW9kZWwucmVnaXN0ZXJMaXN0ZW5lckZvckRvY3VtZW50TG9hZGVkKGV2ZW50ID0+IHRoaXMub25Eb2N1bWVudExvYWRlZChldmVudCkpO1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBldmVudCA9PiB0aGlzLm9uTWVzc2FnZVJlY2VpdmVkKGV2ZW50KSwgZmFsc2UpO1xuXG4gICAgICAgIGlmICghIExvY2FsUHJlZnMuZGVmaW5lZChQUkVGX1NJREVCQVJfT1BFTikpIHtcbiAgICAgICAgICAgIC8vIG1ha2UgdGhlIHNpZGViYXIgb3BlbiBieSBkZWZhdWx0IG5vdyBzbyB3ZSBjYW4gbWFrZSB0aGlzIGZlYXR1cmVcbiAgICAgICAgICAgIC8vIG1vcmUgZGlzY292ZXJhYmxlLlxuICAgICAgICAgICAgTG9jYWxQcmVmcy5tYXJrKFBSRUZfU0lERUJBUl9PUEVOKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkRvY3VtZW50TG9hZGVkKGV2ZW50OiBEb2N1bWVudExvYWRlZEV2ZW50KSB7XG5cbiAgICAgICAgbG9nLmRlYnVnKFwiQ3JlYXRpbmcgYW5ub3RhdGlvbiBzaWRlYmFyXCIpO1xuICAgICAgICB0aGlzLnNwbGl0dGVyID0gQW5ub3RhdGlvblNpZGViYXJzLmNyZWF0ZShldmVudC5kb2NNZXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1vZGVsLnBlcnNpc3RlbmNlTGF5ZXJQcm92aWRlcik7XG5cbiAgICAgICAgaWYgKExvY2FsUHJlZnMuaXNNYXJrZWQoUFJFRl9TSURFQkFSX09QRU4pKSB7XG4gICAgICAgICAgICB0aGlzLnNwbGl0dGVyLmV4cGFuZCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zcGxpdHRlci5jb2xsYXBzZSgpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uTWVzc2FnZVJlY2VpdmVkKGV2ZW50OiBhbnkpIHtcblxuICAgICAgICBsb2cuaW5mbyhcIlJlY2VpdmVkIG1lc3NhZ2U6IFwiLCBldmVudCk7XG5cbiAgICAgICAgc3dpdGNoIChldmVudC5kYXRhLnR5cGUpIHtcblxuICAgICAgICAgICAgY2FzZSBcInRvZ2dsZS1hbm5vdGF0aW9uLXNpZGViYXJcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUFubm90YXRpb25TaWRlYmFyKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSB0b2dnbGVBbm5vdGF0aW9uU2lkZWJhcigpIHtcblxuICAgICAgICBjb25zdCBzdGF0ZSA9IHRoaXMuc3BsaXR0ZXIhLnRvZ2dsZSgpO1xuXG4gICAgICAgIGlmIChzdGF0ZSA9PT0gJ2V4cGFuZGVkJykge1xuICAgICAgICAgICAgTG9jYWxQcmVmcy5tYXJrKFBSRUZfU0lERUJBUl9PUEVOKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIExvY2FsUHJlZnMubWFyayhQUkVGX1NJREVCQVJfT1BFTiwgZmFsc2UpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbn1cbiJdfQ==