"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Logger_1 = require("polar-shared/src/logger/Logger");
const SimpleReactor_1 = require("../../reactor/SimpleReactor");
const CommentPopupBars_1 = require("../../comments/react/CommentPopupBars");
const RendererAnalytics_1 = require("../../ga/RendererAnalytics");
const ControlledAnnotationBars_1 = require("./ControlledAnnotationBars");
const Docs_1 = require("../../metadata/Docs");
const log = Logger_1.Logger.create();
class AnnotationBarService {
    constructor(model) {
        this.model = model;
    }
    start() {
        this.model.registerListenerForDocumentLoaded(event => this.onDocumentLoaded(event));
        document.body.addEventListener('click', event => {
            if (event.target instanceof HTMLElement) {
                const annotationType = event.target.getAttribute('data-annotation-type');
                if (annotationType === 'text-highlight') {
                }
            }
        });
    }
    onClick() {
    }
    onDocumentLoaded(event) {
        log.debug("Creating annotation bar");
        const commentBarControlledPopupProps = {
            id: 'commentbar',
            placement: 'bottom',
            popupStateEventDispatcher: new SimpleReactor_1.SimpleReactor(),
            triggerPopupEventDispatcher: new SimpleReactor_1.SimpleReactor()
        };
        const commentPopupBarCallbacks = {
            onComment: (commentCreatedEvent) => {
            }
        };
        CommentPopupBars_1.CommentPopupBars.create(commentBarControlledPopupProps, commentPopupBarCallbacks);
        const popupStateEventDispatcher = new SimpleReactor_1.SimpleReactor();
        const triggerPopupEventDispatcher = new SimpleReactor_1.SimpleReactor();
        const annotationBarControlledPopupProps = {
            id: 'annotationbar',
            placement: 'top',
            popupStateEventDispatcher,
            triggerPopupEventDispatcher
        };
        const onComment = (commentTriggerEvent) => {
            const activeSelection = commentTriggerEvent.activeSelection;
            commentBarControlledPopupProps.triggerPopupEventDispatcher.dispatchEvent({
                point: {
                    x: activeSelection.boundingClientRect.left + (activeSelection.boundingClientRect.width / 2),
                    y: activeSelection.boundingClientRect.bottom
                },
                offset: {
                    x: 0,
                    y: 10
                },
                pageNum: commentTriggerEvent.pageNum,
                selection: activeSelection.selection,
            });
        };
        const onHighlighted = (highlightCreatedEvent) => {
            RendererAnalytics_1.RendererAnalytics.event({ category: 'annotations', action: 'text-highlight-created-via-annotation-bar' });
            delete highlightCreatedEvent.activeSelection;
            const message = {
                type: 'create-text-highlight',
                value: highlightCreatedEvent
            };
            window.postMessage(message, '*');
        };
        const annotationBarCallbacks = {
            onHighlighted,
            onComment
        };
        const persistenceLayer = this.model.persistenceLayerProvider();
        const doc = Docs_1.Docs.create(event.docMeta, persistenceLayer.capabilities().permission);
        if (doc.mutable) {
            ControlledAnnotationBars_1.ControlledAnnotationBars.create(annotationBarControlledPopupProps, annotationBarCallbacks);
        }
    }
}
exports.AnnotationBarService = AnnotationBarService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW5ub3RhdGlvbkJhclNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJBbm5vdGF0aW9uQmFyU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLDJEQUFzRDtBQUV0RCwrREFBMEQ7QUFJMUQsNEVBQXVFO0FBS3ZFLGtFQUE2RDtBQUM3RCx5RUFBb0U7QUFDcEUsOENBQXlDO0FBRXpDLE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU1QixNQUFhLG9CQUFvQjtJQUk3QixZQUFZLEtBQVk7UUFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUVNLEtBQUs7UUFDUixJQUFJLENBQUMsS0FBSyxDQUFDLGlDQUFpQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDcEYsUUFBUSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLEVBQUU7WUFFNUMsSUFBSSxLQUFLLENBQUMsTUFBTSxZQUFZLFdBQVcsRUFBRTtnQkFFckMsTUFBTSxjQUFjLEdBQ2QsS0FBSyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsc0JBQXNCLENBQUMsQ0FBQztnQkFFeEQsSUFBSSxjQUFjLEtBQUssZ0JBQWdCLEVBQUU7aUJBSXhDO2FBRUo7UUFFTCxDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7SUFFTyxPQUFPO0lBRWYsQ0FBQztJQUVPLGdCQUFnQixDQUFDLEtBQTBCO1FBQy9DLEdBQUcsQ0FBQyxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUVyQyxNQUFNLDhCQUE4QixHQUF5QjtZQUN6RCxFQUFFLEVBQUUsWUFBWTtZQUNoQixTQUFTLEVBQUUsUUFBUTtZQUNuQix5QkFBeUIsRUFBRSxJQUFJLDZCQUFhLEVBQW1CO1lBQy9ELDJCQUEyQixFQUFFLElBQUksNkJBQWEsRUFBcUI7U0FDdEUsQ0FBQztRQUVGLE1BQU0sd0JBQXdCLEdBQTZCO1lBRXZELFNBQVMsRUFBRSxDQUFDLG1CQUF3QyxFQUFFLEVBQUU7WUFDeEQsQ0FBQztTQUVKLENBQUM7UUFFRixtQ0FBZ0IsQ0FBQyxNQUFNLENBQUMsOEJBQThCLEVBQUUsd0JBQXdCLENBQUMsQ0FBQztRQU1sRixNQUFNLHlCQUF5QixHQUFHLElBQUksNkJBQWEsRUFBbUIsQ0FBQztRQUN2RSxNQUFNLDJCQUEyQixHQUFHLElBQUksNkJBQWEsRUFBcUIsQ0FBQztRQUUzRSxNQUFNLGlDQUFpQyxHQUF5QjtZQUM1RCxFQUFFLEVBQUUsZUFBZTtZQUNuQixTQUFTLEVBQUUsS0FBSztZQUNoQix5QkFBeUI7WUFDekIsMkJBQTJCO1NBQzlCLENBQUM7UUFFRixNQUFNLFNBQVMsR0FDWCxDQUFDLG1CQUF3QyxFQUFFLEVBQUU7WUFFekMsTUFBTSxlQUFlLEdBQUcsbUJBQW1CLENBQUMsZUFBZSxDQUFDO1lBRTVELDhCQUE4QixDQUFDLDJCQUEyQixDQUFDLGFBQWEsQ0FBQztnQkFDckUsS0FBSyxFQUFFO29CQUNILENBQUMsRUFBRSxlQUFlLENBQUMsa0JBQWtCLENBQUMsSUFBSSxHQUFHLENBQUMsZUFBZSxDQUFDLGtCQUFrQixDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7b0JBQzNGLENBQUMsRUFBRSxlQUFlLENBQUMsa0JBQWtCLENBQUMsTUFBTTtpQkFDL0M7Z0JBQ0QsTUFBTSxFQUFFO29CQUNKLENBQUMsRUFBRSxDQUFDO29CQUNKLENBQUMsRUFBRSxFQUFFO2lCQUNSO2dCQUNELE9BQU8sRUFBRSxtQkFBbUIsQ0FBQyxPQUFPO2dCQUNwQyxTQUFTLEVBQUUsZUFBZSxDQUFDLFNBQVM7YUFFdkMsQ0FBQyxDQUFDO1FBRVAsQ0FBQyxDQUFDO1FBRU4sTUFBTSxhQUFhLEdBQTBCLENBQUMscUJBQTRDLEVBQUUsRUFBRTtZQUUxRixxQ0FBaUIsQ0FBQyxLQUFLLENBQUMsRUFBQyxRQUFRLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSwyQ0FBMkMsRUFBQyxDQUFDLENBQUM7WUFJeEcsT0FBYyxxQkFBc0IsQ0FBQyxlQUFlLENBQUM7WUFFckQsTUFBTSxPQUFPLEdBQXdDO2dCQUNqRCxJQUFJLEVBQUUsdUJBQXVCO2dCQUM3QixLQUFLLEVBQUUscUJBQXFCO2FBQy9CLENBQUM7WUFFRixNQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztRQUVyQyxDQUFDLENBQUM7UUFFRixNQUFNLHNCQUFzQixHQUEyQjtZQUNuRCxhQUFhO1lBQ2IsU0FBUztTQUNaLENBQUM7UUFFRixNQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztRQUMvRCxNQUFNLEdBQUcsR0FBRyxXQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFbkYsSUFBSSxHQUFHLENBQUMsT0FBTyxFQUFFO1lBQ2IsbURBQXdCLENBQUMsTUFBTSxDQUFDLGlDQUFpQyxFQUFFLHNCQUFzQixDQUFDLENBQUM7U0FDOUY7SUFFTCxDQUFDO0NBRUo7QUF0SEQsb0RBc0hDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEb2N1bWVudExvYWRlZEV2ZW50LCBNb2RlbH0gZnJvbSAnLi4vLi4vbW9kZWwvTW9kZWwnO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge0NvbnRyb2xsZWRQb3B1cFByb3BzfSBmcm9tICcuLi9wb3B1cC9Db250cm9sbGVkUG9wdXAnO1xuaW1wb3J0IHtTaW1wbGVSZWFjdG9yfSBmcm9tICcuLi8uLi9yZWFjdG9yL1NpbXBsZVJlYWN0b3InO1xuaW1wb3J0IHtUcmlnZ2VyUG9wdXBFdmVudH0gZnJvbSAnLi4vcG9wdXAvVHJpZ2dlclBvcHVwRXZlbnQnO1xuaW1wb3J0IHtDb21tZW50UG9wdXBCYXJDYWxsYmFja3N9IGZyb20gJy4uLy4uL2NvbW1lbnRzL3JlYWN0L0NvbW1lbnRQb3B1cEJhcic7XG5pbXBvcnQge0NvbW1lbnRDcmVhdGVkRXZlbnR9IGZyb20gJy4uLy4uL2NvbW1lbnRzL3JlYWN0L0NvbW1lbnRDcmVhdGVkRXZlbnQnO1xuaW1wb3J0IHtDb21tZW50UG9wdXBCYXJzfSBmcm9tICcuLi8uLi9jb21tZW50cy9yZWFjdC9Db21tZW50UG9wdXBCYXJzJztcbmltcG9ydCB7QW5ub3RhdGlvbkJhckNhbGxiYWNrcywgQ29tbWVudFRyaWdnZXJFdmVudCwgT25Db21tZW50Q2FsbGJhY2ssIE9uSGlnaGxpZ2h0ZWRDYWxsYmFja30gZnJvbSAnLi9Bbm5vdGF0aW9uQmFyJztcbmltcG9ydCB7SGlnaGxpZ2h0Q3JlYXRlZEV2ZW50fSBmcm9tICcuLi8uLi9jb21tZW50cy9yZWFjdC9IaWdobGlnaHRDcmVhdGVkRXZlbnQnO1xuaW1wb3J0IHtUeXBlZE1lc3NhZ2V9IGZyb20gJy4uLy4uL3V0aWwvVHlwZWRNZXNzYWdlJztcbmltcG9ydCB7UG9wdXBTdGF0ZUV2ZW50fSBmcm9tICcuLi9wb3B1cC9Qb3B1cFN0YXRlRXZlbnQnO1xuaW1wb3J0IHtSZW5kZXJlckFuYWx5dGljc30gZnJvbSAnLi4vLi4vZ2EvUmVuZGVyZXJBbmFseXRpY3MnO1xuaW1wb3J0IHtDb250cm9sbGVkQW5ub3RhdGlvbkJhcnN9IGZyb20gJy4vQ29udHJvbGxlZEFubm90YXRpb25CYXJzJztcbmltcG9ydCB7RG9jc30gZnJvbSAnLi4vLi4vbWV0YWRhdGEvRG9jcyc7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuZXhwb3J0IGNsYXNzIEFubm90YXRpb25CYXJTZXJ2aWNlIHtcblxuICAgIHByaXZhdGUgbW9kZWw6IE1vZGVsO1xuXG4gICAgY29uc3RydWN0b3IobW9kZWw6IE1vZGVsKSB7XG4gICAgICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhcnQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubW9kZWwucmVnaXN0ZXJMaXN0ZW5lckZvckRvY3VtZW50TG9hZGVkKGV2ZW50ID0+IHRoaXMub25Eb2N1bWVudExvYWRlZChldmVudCkpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuXG4gICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGFubm90YXRpb25UeXBlXG4gICAgICAgICAgICAgICAgICAgID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1hbm5vdGF0aW9uLXR5cGUnKTtcblxuICAgICAgICAgICAgICAgIGlmIChhbm5vdGF0aW9uVHlwZSA9PT0gJ3RleHQtaGlnaGxpZ2h0Jykge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHRyaWdnZXIgdGhlIHBvcHVwIGhlcmUgc28gd2UgY2FuIGNoYW5nZSB0aGUgdHlwZXMuXG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgb25DbGljaygpIHtcblxuICAgIH1cblxuICAgIHByaXZhdGUgb25Eb2N1bWVudExvYWRlZChldmVudDogRG9jdW1lbnRMb2FkZWRFdmVudCkge1xuICAgICAgICBsb2cuZGVidWcoXCJDcmVhdGluZyBhbm5vdGF0aW9uIGJhclwiKTtcblxuICAgICAgICBjb25zdCBjb21tZW50QmFyQ29udHJvbGxlZFBvcHVwUHJvcHM6IENvbnRyb2xsZWRQb3B1cFByb3BzID0ge1xuICAgICAgICAgICAgaWQ6ICdjb21tZW50YmFyJyxcbiAgICAgICAgICAgIHBsYWNlbWVudDogJ2JvdHRvbScsXG4gICAgICAgICAgICBwb3B1cFN0YXRlRXZlbnREaXNwYXRjaGVyOiBuZXcgU2ltcGxlUmVhY3RvcjxQb3B1cFN0YXRlRXZlbnQ+KCksXG4gICAgICAgICAgICB0cmlnZ2VyUG9wdXBFdmVudERpc3BhdGNoZXI6IG5ldyBTaW1wbGVSZWFjdG9yPFRyaWdnZXJQb3B1cEV2ZW50PigpXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgY29tbWVudFBvcHVwQmFyQ2FsbGJhY2tzOiBDb21tZW50UG9wdXBCYXJDYWxsYmFja3MgPSB7XG5cbiAgICAgICAgICAgIG9uQ29tbWVudDogKGNvbW1lbnRDcmVhdGVkRXZlbnQ6IENvbW1lbnRDcmVhdGVkRXZlbnQpID0+IHtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9O1xuXG4gICAgICAgIENvbW1lbnRQb3B1cEJhcnMuY3JlYXRlKGNvbW1lbnRCYXJDb250cm9sbGVkUG9wdXBQcm9wcywgY29tbWVudFBvcHVwQmFyQ2FsbGJhY2tzKTtcblxuICAgICAgICAvLyBUT0RPOiBqdXN0IHRpZSB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgcG9wdXAgdG8gdGhlIHZpc2libGl0eSBvZiB0aGVcbiAgICAgICAgLy8gcmVnaW9uLi4gd2hlbiB0aGUgcmVnaW9uIHZhbmlzaGVzIHRoZW4ganVzdCBjbG9zZSB0aGUgcG9wdXAgT1IgdGhlXG4gICAgICAgIC8vIHRleHQgYXJlYSBpcyBjbG9zZSBvYnZpb3VzbHkuXG5cbiAgICAgICAgY29uc3QgcG9wdXBTdGF0ZUV2ZW50RGlzcGF0Y2hlciA9IG5ldyBTaW1wbGVSZWFjdG9yPFBvcHVwU3RhdGVFdmVudD4oKTtcbiAgICAgICAgY29uc3QgdHJpZ2dlclBvcHVwRXZlbnREaXNwYXRjaGVyID0gbmV3IFNpbXBsZVJlYWN0b3I8VHJpZ2dlclBvcHVwRXZlbnQ+KCk7XG5cbiAgICAgICAgY29uc3QgYW5ub3RhdGlvbkJhckNvbnRyb2xsZWRQb3B1cFByb3BzOiBDb250cm9sbGVkUG9wdXBQcm9wcyA9IHtcbiAgICAgICAgICAgIGlkOiAnYW5ub3RhdGlvbmJhcicsXG4gICAgICAgICAgICBwbGFjZW1lbnQ6ICd0b3AnLFxuICAgICAgICAgICAgcG9wdXBTdGF0ZUV2ZW50RGlzcGF0Y2hlcixcbiAgICAgICAgICAgIHRyaWdnZXJQb3B1cEV2ZW50RGlzcGF0Y2hlclxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IG9uQ29tbWVudDogT25Db21tZW50Q2FsbGJhY2sgPVxuICAgICAgICAgICAgKGNvbW1lbnRUcmlnZ2VyRXZlbnQ6IENvbW1lbnRUcmlnZ2VyRXZlbnQpID0+IHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGFjdGl2ZVNlbGVjdGlvbiA9IGNvbW1lbnRUcmlnZ2VyRXZlbnQuYWN0aXZlU2VsZWN0aW9uO1xuXG4gICAgICAgICAgICAgICAgY29tbWVudEJhckNvbnRyb2xsZWRQb3B1cFByb3BzLnRyaWdnZXJQb3B1cEV2ZW50RGlzcGF0Y2hlci5kaXNwYXRjaEV2ZW50KHtcbiAgICAgICAgICAgICAgICAgICAgcG9pbnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IGFjdGl2ZVNlbGVjdGlvbi5ib3VuZGluZ0NsaWVudFJlY3QubGVmdCArIChhY3RpdmVTZWxlY3Rpb24uYm91bmRpbmdDbGllbnRSZWN0LndpZHRoIC8gMiksXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBhY3RpdmVTZWxlY3Rpb24uYm91bmRpbmdDbGllbnRSZWN0LmJvdHRvbVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvZmZzZXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiAxMFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBwYWdlTnVtOiBjb21tZW50VHJpZ2dlckV2ZW50LnBhZ2VOdW0sXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbjogYWN0aXZlU2VsZWN0aW9uLnNlbGVjdGlvbixcblxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IG9uSGlnaGxpZ2h0ZWQ6IE9uSGlnaGxpZ2h0ZWRDYWxsYmFjayA9IChoaWdobGlnaHRDcmVhdGVkRXZlbnQ6IEhpZ2hsaWdodENyZWF0ZWRFdmVudCkgPT4ge1xuXG4gICAgICAgICAgICBSZW5kZXJlckFuYWx5dGljcy5ldmVudCh7Y2F0ZWdvcnk6ICdhbm5vdGF0aW9ucycsIGFjdGlvbjogJ3RleHQtaGlnaGxpZ2h0LWNyZWF0ZWQtdmlhLWFubm90YXRpb24tYmFyJ30pO1xuXG4gICAgICAgICAgICAvLyBUT0RPOiB0aGlzIGlzIGp1c3QgYSBoYWNrIGZvciBub3cuICBXZSBzaG91bGQgc2VuZCBhIGRlZGljYXRlZFxuICAgICAgICAgICAgLy8gb2JqZWN0LlxuICAgICAgICAgICAgZGVsZXRlICg8YW55PiBoaWdobGlnaHRDcmVhdGVkRXZlbnQpLmFjdGl2ZVNlbGVjdGlvbjtcblxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZTogVHlwZWRNZXNzYWdlPEhpZ2hsaWdodENyZWF0ZWRFdmVudD4gPSB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2NyZWF0ZS10ZXh0LWhpZ2hsaWdodCcsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGhpZ2hsaWdodENyZWF0ZWRFdmVudFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgd2luZG93LnBvc3RNZXNzYWdlKG1lc3NhZ2UsICcqJyk7XG5cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBhbm5vdGF0aW9uQmFyQ2FsbGJhY2tzOiBBbm5vdGF0aW9uQmFyQ2FsbGJhY2tzID0ge1xuICAgICAgICAgICAgb25IaWdobGlnaHRlZCxcbiAgICAgICAgICAgIG9uQ29tbWVudFxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHBlcnNpc3RlbmNlTGF5ZXIgPSB0aGlzLm1vZGVsLnBlcnNpc3RlbmNlTGF5ZXJQcm92aWRlcigpO1xuICAgICAgICBjb25zdCBkb2MgPSBEb2NzLmNyZWF0ZShldmVudC5kb2NNZXRhLCBwZXJzaXN0ZW5jZUxheWVyLmNhcGFiaWxpdGllcygpLnBlcm1pc3Npb24pO1xuXG4gICAgICAgIGlmIChkb2MubXV0YWJsZSkge1xuICAgICAgICAgICAgQ29udHJvbGxlZEFubm90YXRpb25CYXJzLmNyZWF0ZShhbm5vdGF0aW9uQmFyQ29udHJvbGxlZFBvcHVwUHJvcHMsIGFubm90YXRpb25CYXJDYWxsYmFja3MpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbn1cbiJdfQ==