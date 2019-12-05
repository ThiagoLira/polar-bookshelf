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
const TriggerEvent_1 = require("../contextmenu/TriggerEvent");
const Logger_1 = require("polar-shared/src/logger/Logger");
const CommentPopupBoxes_1 = require("./react/CommentPopupBoxes");
const SimpleReactor_1 = require("../reactor/SimpleReactor");
const log = Logger_1.Logger.create();
class CommentsController {
    constructor(model) {
        this.commentEventDispatcher = new SimpleReactor_1.SimpleReactor();
        this.model = model;
    }
    start() {
        window.addEventListener("message", event => this.onMessageReceived(event), false);
        CommentPopupBoxes_1.CommentPopupBoxes.create(this.commentEventDispatcher, (commentCreatedEvent) => this.onCommentCreated(commentCreatedEvent));
    }
    onMessageReceived(event) {
        const data = event.data;
        if (data) {
            if (data.type === 'add-comment') {
                const triggerEvent = TriggerEvent_1.TriggerEvent.create(event.data);
                log.debug("Creating comment from trigger event: ", triggerEvent);
                const annotationDescriptors = Object.values(triggerEvent.matchingSelectors)
                    .map(current => current.annotationDescriptors)
                    .reduce((prev, curr) => [...curr, ...prev], []);
                if (annotationDescriptors.length === 1) {
                    const annotationDescriptor = annotationDescriptors[0];
                    this.triggerCreateCommentPopup(triggerEvent, annotationDescriptor)
                        .catch(err => log.error("Could not create comment: ", err));
                }
                else {
                    log.warn("Too many descriptors");
                }
            }
        }
    }
    onCommentCreated(commentCreatedEvent) {
    }
    triggerCreateCommentPopup(triggerEvent, annotationDescriptor) {
        return __awaiter(this, void 0, void 0, function* () {
            this.commentEventDispatcher.dispatchEvent({
                point: triggerEvent.points.client,
                pageNum: triggerEvent.pageNum,
                annotationDescriptor,
                type: 'create'
            });
        });
    }
}
exports.CommentsController = CommentsController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tbWVudHNDb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQ29tbWVudHNDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsOERBQXlEO0FBQ3pELDJEQUFzRDtBQUN0RCxpRUFBNEQ7QUFDNUQsNERBQXVEO0FBT3ZELE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU1QixNQUFhLGtCQUFrQjtJQU0zQixZQUFZLEtBQVk7UUFJUCwyQkFBc0IsR0FBRyxJQUFJLDZCQUFhLEVBQXFCLENBQUM7UUFIN0UsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUlNLEtBQUs7UUFFUixNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRWxGLHFDQUFpQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsc0JBQXNCLEVBQzNCLENBQUMsbUJBQW1CLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7SUFFbEcsQ0FBQztJQUVPLGlCQUFpQixDQUFDLEtBQVU7UUFFaEMsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztRQUV4QixJQUFJLElBQUksRUFBRTtZQUVOLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxhQUFhLEVBQUU7Z0JBRTdCLE1BQU0sWUFBWSxHQUFHLDJCQUFZLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFFckQsR0FBRyxDQUFDLEtBQUssQ0FBQyx1Q0FBdUMsRUFBRSxZQUFZLENBQUMsQ0FBQztnQkFNakUsTUFBTSxxQkFBcUIsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQztxQkFDdEUsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDO3FCQUM3QyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBRXBELElBQUkscUJBQXFCLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtvQkFFcEMsTUFBTSxvQkFBb0IsR0FBRyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFFdEQsSUFBSSxDQUFDLHlCQUF5QixDQUFDLFlBQVksRUFBRSxvQkFBb0IsQ0FBQzt5QkFDN0QsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyw0QkFBNEIsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO2lCQUVuRTtxQkFBTTtvQkFDSCxHQUFHLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUM7aUJBQ3BDO2FBRUo7U0FFSjtJQUVMLENBQUM7SUFFTyxnQkFBZ0IsQ0FBQyxtQkFBd0M7SUFVakUsQ0FBQztJQUVhLHlCQUF5QixDQUFDLFlBQTBCLEVBQzFCLG9CQUEwQzs7WUFFOUUsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGFBQWEsQ0FBQztnQkFDdEMsS0FBSyxFQUFFLFlBQVksQ0FBQyxNQUFNLENBQUMsTUFBTTtnQkFDakMsT0FBTyxFQUFFLFlBQVksQ0FBQyxPQUFPO2dCQUM3QixvQkFBb0I7Z0JBQ3BCLElBQUksRUFBRSxRQUFRO2FBQ2pCLENBQUMsQ0FBQztRQUVQLENBQUM7S0FBQTtDQUVKO0FBbEZELGdEQWtGQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7VHJpZ2dlckV2ZW50fSBmcm9tICcuLi9jb250ZXh0bWVudS9UcmlnZ2VyRXZlbnQnO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge0NvbW1lbnRQb3B1cEJveGVzfSBmcm9tICcuL3JlYWN0L0NvbW1lbnRQb3B1cEJveGVzJztcbmltcG9ydCB7U2ltcGxlUmVhY3Rvcn0gZnJvbSAnLi4vcmVhY3Rvci9TaW1wbGVSZWFjdG9yJztcbmltcG9ydCB7Q29tbWVudElucHV0RXZlbnR9IGZyb20gJy4vcmVhY3QvQ29tbWVudElucHV0RXZlbnQnO1xuaW1wb3J0IHtDb21tZW50c30gZnJvbSAnLi4vbWV0YWRhdGEvQ29tbWVudHMnO1xuaW1wb3J0IHtNb2RlbH0gZnJvbSAnLi4vbW9kZWwvTW9kZWwnO1xuaW1wb3J0IHtBbm5vdGF0aW9uRGVzY3JpcHRvcn0gZnJvbSAnLi4vbWV0YWRhdGEvQW5ub3RhdGlvbkRlc2NyaXB0b3InO1xuaW1wb3J0IHtDb21tZW50Q3JlYXRlZEV2ZW50fSBmcm9tICcuL3JlYWN0L0NvbW1lbnRDcmVhdGVkRXZlbnQnO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbmV4cG9ydCBjbGFzcyBDb21tZW50c0NvbnRyb2xsZXIge1xuXG4gICAgcHJpdmF0ZSBwb3B1cEVsZW1lbnQ/OiBIVE1MRWxlbWVudDtcblxuICAgIHByaXZhdGUgbW9kZWw6IE1vZGVsO1xuXG4gICAgY29uc3RydWN0b3IobW9kZWw6IE1vZGVsKSB7XG4gICAgICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IGNvbW1lbnRFdmVudERpc3BhdGNoZXIgPSBuZXcgU2ltcGxlUmVhY3RvcjxDb21tZW50SW5wdXRFdmVudD4oKTtcblxuICAgIHB1YmxpYyBzdGFydCgpOiB2b2lkIHtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgZXZlbnQgPT4gdGhpcy5vbk1lc3NhZ2VSZWNlaXZlZChldmVudCksIGZhbHNlKTtcblxuICAgICAgICBDb21tZW50UG9wdXBCb3hlcy5jcmVhdGUodGhpcy5jb21tZW50RXZlbnREaXNwYXRjaGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNvbW1lbnRDcmVhdGVkRXZlbnQpID0+IHRoaXMub25Db21tZW50Q3JlYXRlZChjb21tZW50Q3JlYXRlZEV2ZW50KSk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uTWVzc2FnZVJlY2VpdmVkKGV2ZW50OiBhbnkpIHtcblxuICAgICAgICBjb25zdCBkYXRhID0gZXZlbnQuZGF0YTtcblxuICAgICAgICBpZiAoZGF0YSkge1xuXG4gICAgICAgICAgICBpZiAoZGF0YS50eXBlID09PSAnYWRkLWNvbW1lbnQnKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCB0cmlnZ2VyRXZlbnQgPSBUcmlnZ2VyRXZlbnQuY3JlYXRlKGV2ZW50LmRhdGEpO1xuXG4gICAgICAgICAgICAgICAgbG9nLmRlYnVnKFwiQ3JlYXRpbmcgY29tbWVudCBmcm9tIHRyaWdnZXIgZXZlbnQ6IFwiLCB0cmlnZ2VyRXZlbnQpO1xuXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogdGhpcyBpcyBub3QgcmlnaHQgYnV0IGJldHRlciB0aGFuIG5vdGhpbmcgZm9yIG5vdy4gIFdlXG4gICAgICAgICAgICAgICAgLy8gc2hvdWxkIGhhdmUgdGhlIGNvbnRleHQgbWVudSBzeXN0ZW0gcGljayB0aGUgcHJvcGVyIGFubm90YXRpb25cbiAgICAgICAgICAgICAgICAvLyB0byBzZW5kLlxuXG4gICAgICAgICAgICAgICAgY29uc3QgYW5ub3RhdGlvbkRlc2NyaXB0b3JzID0gT2JqZWN0LnZhbHVlcyh0cmlnZ2VyRXZlbnQubWF0Y2hpbmdTZWxlY3RvcnMpXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoY3VycmVudCA9PiBjdXJyZW50LmFubm90YXRpb25EZXNjcmlwdG9ycylcbiAgICAgICAgICAgICAgICAgICAgLnJlZHVjZSgocHJldiwgY3VycikgPT4gWy4uLmN1cnIsIC4uLnByZXZdLCBbXSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoYW5ub3RhdGlvbkRlc2NyaXB0b3JzLmxlbmd0aCA9PT0gMSkge1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFubm90YXRpb25EZXNjcmlwdG9yID0gYW5ub3RhdGlvbkRlc2NyaXB0b3JzWzBdO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJpZ2dlckNyZWF0ZUNvbW1lbnRQb3B1cCh0cmlnZ2VyRXZlbnQsIGFubm90YXRpb25EZXNjcmlwdG9yKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBsb2cuZXJyb3IoXCJDb3VsZCBub3QgY3JlYXRlIGNvbW1lbnQ6IFwiLCBlcnIpKTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZy53YXJuKFwiVG9vIG1hbnkgZGVzY3JpcHRvcnNcIik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkNvbW1lbnRDcmVhdGVkKGNvbW1lbnRDcmVhdGVkRXZlbnQ6IENvbW1lbnRDcmVhdGVkRXZlbnQpOiB2b2lkIHtcblxuICAgICAgICAvLyAvLyBGSVhNRTogd2UgaGF2ZSB0byBhc3NpZ24gYSBsaW5rIHRvIHRoZSBjb21tZW50IHNvIHRoYXQgd2Uga25vdyB0byB3aGF0IGl0IGlzIGF0dGFjaGVkLlxuICAgICAgICAvLyBjb25zdCBjb21tZW50ID0gQ29tbWVudHMuY3JlYXRlVGV4dENvbW1lbnQoY29tbWVudENyZWF0ZWRFdmVudC50ZXh0KTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gY29uc3QgZG9jTWV0YSA9IHRoaXMubW9kZWwuZG9jTWV0YTtcbiAgICAgICAgLy8gY29uc3QgcGFnZU1ldGEgPSBkb2NNZXRhLmdldFBhZ2VNZXRhKGNvbW1lbnRDcmVhdGVkRXZlbnQucGFnZU51bSk7XG4gICAgICAgIC8vXG4gICAgICAgIC8vIHBhZ2VNZXRhLmNvbW1lbnRzW2NvbW1lbnQuaWRdID0gY29tbWVudDtcblxuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgdHJpZ2dlckNyZWF0ZUNvbW1lbnRQb3B1cCh0cmlnZ2VyRXZlbnQ6IFRyaWdnZXJFdmVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5ub3RhdGlvbkRlc2NyaXB0b3I6IEFubm90YXRpb25EZXNjcmlwdG9yKSB7XG5cbiAgICAgICAgdGhpcy5jb21tZW50RXZlbnREaXNwYXRjaGVyLmRpc3BhdGNoRXZlbnQoe1xuICAgICAgICAgICAgcG9pbnQ6IHRyaWdnZXJFdmVudC5wb2ludHMuY2xpZW50LFxuICAgICAgICAgICAgcGFnZU51bTogdHJpZ2dlckV2ZW50LnBhZ2VOdW0sXG4gICAgICAgICAgICBhbm5vdGF0aW9uRGVzY3JpcHRvcixcbiAgICAgICAgICAgIHR5cGU6ICdjcmVhdGUnXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG59XG4iXX0=