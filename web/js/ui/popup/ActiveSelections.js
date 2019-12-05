"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Logger_1 = require("polar-shared/src/logger/Logger");
const Selections_1 = require("../../highlights/text/selection/Selections");
const Ranges_1 = require("../../highlights/text/selection/Ranges");
const log = Logger_1.Logger.create();
class ActiveSelections {
    static addEventListener(listener, target = document.body) {
        let originPoint;
        let activeSelection;
        let eventFired = 'none';
        const handleDestroyedSelection = () => {
            listener(Object.assign(Object.assign({}, activeSelection), { type: 'destroyed' }));
            activeSelection = undefined;
            eventFired = 'destroyed';
        };
        const onMouseUp = (event, element) => {
            const handleMouseEvent = () => {
                let hasActiveTextSelection = false;
                eventFired = 'none';
                try {
                    const view = event.view;
                    const selection = view.getSelection();
                    hasActiveTextSelection = this.hasActiveTextSelection(selection);
                    const point = this.eventToPoint(event);
                    if (!element) {
                        log.warn("No target element: ", event.target);
                        return;
                    }
                    if (activeSelection) {
                        handleDestroyedSelection();
                    }
                    if (hasActiveTextSelection) {
                        const mouseDirection = point.y - originPoint.y < 0 ? 'up' : 'down';
                        const range = selection.getRangeAt(0);
                        const boundingClientRect = range.getBoundingClientRect();
                        activeSelection = {
                            element,
                            originPoint: originPoint,
                            mouseDirection,
                            boundingClientRect,
                            selection,
                            view,
                            type: 'created'
                        };
                        listener(activeSelection);
                        eventFired = 'created';
                    }
                }
                finally {
                }
            };
            this.withTimeout(() => handleMouseEvent());
        };
        const onMouseDown = (event, type) => {
            if (!activeSelection) {
                originPoint = this.eventToPoint(event);
            }
            const element = this.targetElementForEvent(event);
            switch (type) {
                case "mouse":
                    window.addEventListener('mouseup', event => {
                        onMouseUp(event, element);
                    }, { once: true });
                    break;
                case "touch":
                    window.addEventListener('touchend', event => {
                        onMouseUp(event, element);
                    }, { once: true });
                    break;
            }
        };
        target.addEventListener('mousedown', (event) => {
            onMouseDown(event, 'mouse');
        });
        target.addEventListener('touchstart', (event) => {
            onMouseDown(event, 'touch');
        });
    }
    static withTimeout(callback) {
        setTimeout(() => callback(), 1);
    }
    static targetElementForEvent(event) {
        if (event.target instanceof Node) {
            if (event.target instanceof HTMLElement) {
                return event.target;
            }
            else {
                return event.target.parentElement;
            }
        }
        else {
            log.warn("Event target is not node: ", event.target);
        }
        return undefined;
    }
    static hasActiveTextSelection(selection) {
        const ranges = Selections_1.Selections.toRanges(selection);
        for (const range of ranges) {
            if (Ranges_1.Ranges.hasText(range)) {
                return true;
            }
        }
        return false;
    }
    static eventToPoint(event) {
        if ('offsetX' in event) {
            return {
                x: event.offsetX,
                y: event.offsetY
            };
        }
        if (!event.target) {
            throw new Error("No target");
        }
        if (event.changedTouches.length === 0) {
            log.warn("No touches found in event: ", event);
            throw new Error("No touches");
        }
        const rect = event.target.getBoundingClientRect();
        const x = event.changedTouches[0].pageX - rect.left;
        const y = event.changedTouches[0].pageY - rect.top;
        return { x, y };
    }
}
exports.ActiveSelections = ActiveSelections;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWN0aXZlU2VsZWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkFjdGl2ZVNlbGVjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQSwyREFBc0Q7QUFDdEQsMkVBQXNFO0FBQ3RFLG1FQUE4RDtBQUU5RCxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFLNUIsTUFBYSxnQkFBZ0I7SUFFbEIsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQWlDLEVBQ2pDLFNBQXNCLFFBQVEsQ0FBQyxJQUFJO1FBRTlELElBQUksV0FBOEIsQ0FBQztRQUVuQyxJQUFJLGVBQTRDLENBQUM7UUFJakQsSUFBSSxVQUFVLEdBQWUsTUFBTSxDQUFDO1FBV3BDLE1BQU0sd0JBQXdCLEdBQUcsR0FBRyxFQUFFO1lBRWxDLFFBQVEsaUNBQU0sZUFBZ0IsS0FBRSxJQUFJLEVBQUUsV0FBVyxJQUFHLENBQUM7WUFDckQsZUFBZSxHQUFHLFNBQVMsQ0FBQztZQUU1QixVQUFVLEdBQUcsV0FBVyxDQUFDO1FBRTdCLENBQUMsQ0FBQztRQUVGLE1BQU0sU0FBUyxHQUFHLENBQUMsS0FBOEIsRUFBRSxPQUFnQyxFQUFFLEVBQUU7WUFFbkYsTUFBTSxnQkFBZ0IsR0FBRyxHQUFHLEVBQUU7Z0JBRTFCLElBQUksc0JBQXNCLEdBQVksS0FBSyxDQUFDO2dCQUM1QyxVQUFVLEdBQUcsTUFBTSxDQUFDO2dCQUVwQixJQUFJO29CQUVBLE1BQU0sSUFBSSxHQUFXLEtBQUssQ0FBQyxJQUFLLENBQUM7b0JBQ2pDLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUcsQ0FBQztvQkFFdkMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUVoRSxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUV2QyxJQUFJLENBQUUsT0FBTyxFQUFFO3dCQUNY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QUFNLENBQUMsR0FBRyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBRW5ELE9BQU8sRUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUM7SUFFbEIsQ0FBQztDQUdKO0FBN09ELDRDQTZPQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UG9pbnR9IGZyb20gJy4uLy4uL1BvaW50JztcbmltcG9ydCB7TW91c2VEaXJlY3Rpb259IGZyb20gJy4vUG9wdXAnO1xuaW1wb3J0IHtTaW11bGF0ZX0gZnJvbSAncmVhY3QtZG9tL3Rlc3QtdXRpbHMnO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge1NlbGVjdGlvbnN9IGZyb20gJy4uLy4uL2hpZ2hsaWdodHMvdGV4dC9zZWxlY3Rpb24vU2VsZWN0aW9ucyc7XG5pbXBvcnQge1Jhbmdlc30gZnJvbSAnLi4vLi4vaGlnaGxpZ2h0cy90ZXh0L3NlbGVjdGlvbi9SYW5nZXMnO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbi8qKlxuICogTGlzdGVucyBmb3Igd2hlbiBhIG5ldyB0ZXh0IHNlbGVjdGlvbiBoYXMgYmVlbiBjcmVhdGVkXG4gKi9cbmV4cG9ydCBjbGFzcyBBY3RpdmVTZWxlY3Rpb25zIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgYWRkRXZlbnRMaXN0ZW5lcihsaXN0ZW5lcjogQWN0aXZlU2VsZWN0aW9uTGlzdGVuZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5ib2R5KTogdm9pZCB7XG5cbiAgICAgICAgbGV0IG9yaWdpblBvaW50OiBQb2ludCB8IHVuZGVmaW5lZDtcblxuICAgICAgICBsZXQgYWN0aXZlU2VsZWN0aW9uOiBBY3RpdmVTZWxlY3Rpb24gfCB1bmRlZmluZWQ7XG5cbiAgICAgICAgdHlwZSBFdmVudEZpcmVkID0gJ25vbmUnIHwgJ2NyZWF0ZWQnIHwgJ2Rlc3Ryb3llZCc7XG5cbiAgICAgICAgbGV0IGV2ZW50RmlyZWQ6IEV2ZW50RmlyZWQgPSAnbm9uZSc7XG5cbiAgICAgICAgLy8gVE9ETzogdGhpcyBjb2RlIGhhcyB0aGUgZm9sbG93aW5nIGtub3duIGlzc3VlczpcbiAgICAgICAgLy9cbiAgICAgICAgLy8gLSB3aGVuIGxlYXZpbmcgYW5kIHJlZW50ZXJpbmcgdGhlIHRhcmdldCBhbmQgcmVsZWFzaW5nIHRoZSBtb3VzZVxuICAgICAgICAvLyAgIHdlIGRvbid0IGRldGVjdCB0aGlzIGFuZCBkb24ndCBicmluZyB1cCB0aGUgc2VsZWN0aW9uIHdoZW4gdGhlIG1vdXNlXG4gICAgICAgIC8vICAgZW50ZXJzIGFnYWluLiAgSSB0aGluayB0aGlzIGNvdWxkIGJlIG1pdGlnYXRlZFxuICAgICAgICAvL1xuICAgICAgICAvLyAtIGlmIHdlIGNsaWNrIG91dHNpZGUgb2YgdGhlIG1haW4gaWZyYW1lIHRoZW4gd2UgZG9uJ3QgZ2V0IHRoZSBmb2xsb3dcbiAgICAgICAgLy8gICBvbiBldmVudHMuXG5cbiAgICAgICAgY29uc3QgaGFuZGxlRGVzdHJveWVkU2VsZWN0aW9uID0gKCkgPT4ge1xuXG4gICAgICAgICAgICBsaXN0ZW5lcih7IC4uLmFjdGl2ZVNlbGVjdGlvbiEsIHR5cGU6ICdkZXN0cm95ZWQnIH0pO1xuICAgICAgICAgICAgYWN0aXZlU2VsZWN0aW9uID0gdW5kZWZpbmVkO1xuXG4gICAgICAgICAgICBldmVudEZpcmVkID0gJ2Rlc3Ryb3llZCc7XG5cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBvbk1vdXNlVXAgPSAoZXZlbnQ6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50LCBlbGVtZW50OiBIVE1MRWxlbWVudCB8IHVuZGVmaW5lZCkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBoYW5kbGVNb3VzZUV2ZW50ID0gKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgbGV0IGhhc0FjdGl2ZVRleHRTZWxlY3Rpb246IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBldmVudEZpcmVkID0gJ25vbmUnO1xuXG4gICAgICAgICAgICAgICAgdHJ5IHtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2aWV3OiBXaW5kb3cgPSBldmVudC52aWV3ITtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gdmlldy5nZXRTZWxlY3Rpb24oKSE7XG5cbiAgICAgICAgICAgICAgICAgICAgaGFzQWN0aXZlVGV4dFNlbGVjdGlvbiA9IHRoaXMuaGFzQWN0aXZlVGV4dFNlbGVjdGlvbihzZWxlY3Rpb24pO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvaW50ID0gdGhpcy5ldmVudFRvUG9pbnQoZXZlbnQpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICghIGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZy53YXJuKFwiTm8gdGFyZ2V0IGVsZW1lbnQ6IFwiLCBldmVudC50YXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGFjdGl2ZVNlbGVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlRGVzdHJveWVkU2VsZWN0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoaGFzQWN0aXZlVGV4dFNlbGVjdGlvbikge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtb3VzZURpcmVjdGlvbjogTW91c2VEaXJlY3Rpb24gPSBwb2ludC55IC0gb3JpZ2luUG9pbnQhLnkgPCAwID8gJ3VwJyA6ICdkb3duJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmFuZ2UgPSBzZWxlY3Rpb24uZ2V0UmFuZ2VBdCgwKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYm91bmRpbmdDbGllbnRSZWN0ID0gcmFuZ2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVNlbGVjdGlvbiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpblBvaW50OiBvcmlnaW5Qb2ludCEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW91c2VEaXJlY3Rpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm91bmRpbmdDbGllbnRSZWN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdjcmVhdGVkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXIoYWN0aXZlU2VsZWN0aW9uKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRGaXJlZCA9ICdjcmVhdGVkJztcblxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgbW91c2V1cDogaGFzQWN0aXZlVGV4dFNlbGVjdGlvbjogJHtoYXNBY3RpdmVUZXh0U2VsZWN0aW9ufSwgZXZlbnRGaXJlZDogJHtldmVudEZpcmVkfWApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdGhpcy53aXRoVGltZW91dCgoKSA9PiBoYW5kbGVNb3VzZUV2ZW50KCkpO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgdHlwZSBFdmVudFR5cGUgPSAnbW91c2UnIHwgJ3RvdWNoJztcblxuICAgICAgICBjb25zdCBvbk1vdXNlRG93biA9IChldmVudDogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQsIHR5cGU6IEV2ZW50VHlwZSkgPT4ge1xuXG4gICAgICAgICAgICBpZiAoIWFjdGl2ZVNlbGVjdGlvbikge1xuICAgICAgICAgICAgICAgIG9yaWdpblBvaW50ID0gdGhpcy5ldmVudFRvUG9pbnQoZXZlbnQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy50YXJnZXRFbGVtZW50Rm9yRXZlbnQoZXZlbnQpO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcblxuICAgICAgICAgICAgICAgIGNhc2UgXCJtb3VzZVwiOlxuXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyBjb2RlIHByb3Blcmx5IGhhbmRsZXMgdGhlIG1vdXNlIGxlYXZpbmcgdGhlIHdpbmRvd1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZHVyaW5nIG1vdXNlIHVwIGFuZCB0aGVuIGxlYXZpbmcgd29ua3kgZXZlbnQgaGFuZGxlcnMuXG4gICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlVXAoZXZlbnQsIGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICB9LCB7b25jZTogdHJ1ZX0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBcInRvdWNoXCI6XG5cbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyBjb2RlIHByb3Blcmx5IGhhbmRsZXMgdGhlIG1vdXNlIGxlYXZpbmcgdGhlIHdpbmRvd1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZHVyaW5nIG1vdXNlIHVwIGFuZCB0aGVuIGxlYXZpbmcgd29ua3kgZXZlbnQgaGFuZGxlcnMuXG4gICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlVXAoZXZlbnQsIGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICB9LCB7b25jZTogdHJ1ZX0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfTtcblxuICAgICAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICBvbk1vdXNlRG93bihldmVudCwgJ21vdXNlJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgKGV2ZW50OiBUb3VjaEV2ZW50KSA9PiB7XG4gICAgICAgICAgICBvbk1vdXNlRG93bihldmVudCwgJ3RvdWNoJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFRPRE86IEkgcGxheWVkIHdpdGggY2xvc2luZyB0aGUgYW5ub3RhdGlvbiBiYXIgb24gcmlnaHQgY2xpY2sgYnV0XG4gICAgICAgIC8vIGl0IHdhcyBkaWZmaWN1bHQgdG8gc2V0dXAuIEl0IGhhZCB0aGUgZm9sbG93aW5nIHByb2JsZW1zOlxuICAgICAgICAvL1xuICAgICAgICAvL1xuICAgICAgICAvLyAxLiBXaGVuIHRoZSBzZWxlY3Rpb24gd2FzIGFjdGl2ZSwgYW5kIHdlIHJpZ2h0IGNsaWNrLCB0aGUgc2VsZWN0aW9uXG4gICAgICAgIC8vICAgIGRvZXMgbm90IGdvIGF3YXkuICBXaGljaCBtZWFucyB0aGF0IHRoZSBhbm5vdGF0aW9uIGJhciBzaG91bGQgc3RpbGxcbiAgICAgICAgLy8gICAgYmUgdXAuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIDIuIFRoZXJlIHdhcyBpbmNvbnNpc3RlbnQgYmVoYXZpb3IuICBJZiB3ZSByaWdodCBjbGljayB0aGVuIHRoZVxuICAgICAgICAvLyAgICBzZWxlY3Rpb24gZ29lcyBhd2F5IGlmIHdlIGNsaWNrIG91dHNpZGUgYnV0IHN0YXlzIGlmIHdlIGNsaWNrIGluc2lkZVxuICAgICAgICAvLyAgICB0aGUgc2VsZWN0aW9uLlxuICAgICAgICAvL1xuICAgICAgICAvLyAgMy4gVGhpcyBpc24ndCBhIE1BU1NJVkUgcHJvYmxlbSBzbyBwcm9iYWJseSBzaG91bGRuJ3Qgc3BlbmQgbXVjaCB0aW1lXG4gICAgICAgIC8vICAgIG9uIGl0LlxuXG4gICAgICAgIC8vIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdjb250ZXh0bWVudScsIChldmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICAvL1xuICAgICAgICAvLyAgICAgY29uc3QgaGFuZGxlTW91c2VFdmVudCA9ICgpID0+IHtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICAgICAgICBpZiAoYWN0aXZlU2VsZWN0aW9uKSB7XG4gICAgICAgIC8vICAgICAgICAgICAgIGhhbmRsZURlc3Ryb3llZFNlbGVjdGlvbigpO1xuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy9cbiAgICAgICAgLy8gICAgIH07XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgICB0aGlzLndpdGhUaW1lb3V0KCgpID0+IGhhbmRsZU1vdXNlRXZlbnQoKSk7XG4gICAgICAgIC8vXG4gICAgICAgIC8vIH0pO1xuXG4gICAgfVxuXG4gICAgLy8gbmVlZHMgdG8gYmUgY2FsbGVkIHZpYSBzZXRUaW1lb3V0IGJlY3Vhc2UgaWYgd2UgY2xpY2sgJ29uJyB0aGVcbiAgICAvLyBzZWxlY3Rpb24gdGhlcmUncyBhIGJ1ZyB3aGVyZSB0aGUgc2VsZWN0aW9uIGlzIHN0aWxsIHByZXNlbnQgYW5kXG4gICAgLy8gaXNuJ3QgcmVtb3ZlZC4gIEFsbG93aW5nIHRoZSBldmVudCB0byBjb21wbGV0ZSBieSB0YWtpbmcgdGhpc1xuICAgIC8vIGV2ZW50IGhhbmRsZXIgYW5kIHB1c2hpbmcgaXQgb24gdGhlIGV2ZW50IHF1ZXVlIGFsbG93cyB0aGVcbiAgICAvLyBzZWxlY3Rpb24gdG8gYmUgcmVtb3ZlZCBieSB0aGUgZGVmYXVsdCBoYW5kbGVyIG9uY2UgaXQgYnViYmxlc1xuICAgIC8vIHVwLlxuICAgIHByaXZhdGUgc3RhdGljIHdpdGhUaW1lb3V0KGNhbGxiYWNrOiAoKSA9PiB2b2lkKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gY2FsbGJhY2soKSwgMSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgdGFyZ2V0RWxlbWVudEZvckV2ZW50KGV2ZW50OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCk6IEhUTUxFbGVtZW50IHwgdW5kZWZpbmVkIHtcblxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0IGluc3RhbmNlb2YgTm9kZSkge1xuXG4gICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXZlbnQudGFyZ2V0O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQhO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsb2cud2FybihcIkV2ZW50IHRhcmdldCBpcyBub3Qgbm9kZTogXCIsIGV2ZW50LnRhcmdldCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgaGFzQWN0aXZlVGV4dFNlbGVjdGlvbihzZWxlY3Rpb246IFNlbGVjdGlvbikge1xuXG4gICAgICAgIGNvbnN0IHJhbmdlcyA9IFNlbGVjdGlvbnMudG9SYW5nZXMoc2VsZWN0aW9uKTtcblxuICAgICAgICBmb3IgKGNvbnN0IHJhbmdlIG9mIHJhbmdlcykge1xuICAgICAgICAgICAgaWYgKFJhbmdlcy5oYXNUZXh0KHJhbmdlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgZXZlbnRUb1BvaW50KGV2ZW50OiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCkge1xuXG4gICAgICAgIGlmICgnb2Zmc2V0WCcgaW4gZXZlbnQpIHtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB4OiBldmVudC5vZmZzZXRYLFxuICAgICAgICAgICAgICAgIHk6IGV2ZW50Lm9mZnNldFlcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghIGV2ZW50LnRhcmdldCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gdGFyZ2V0XCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGV2ZW50LmNoYW5nZWRUb3VjaGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgbG9nLndhcm4oXCJObyB0b3VjaGVzIGZvdW5kIGluIGV2ZW50OiBcIiAsIGV2ZW50KTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHRvdWNoZXNcIik7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZWN0ID0gKDxIVE1MRWxlbWVudD4gZXZlbnQudGFyZ2V0KS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICBjb25zdCB4ID0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVggLSByZWN0LmxlZnQ7XG4gICAgICAgIGNvbnN0IHkgPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWSAtIHJlY3QudG9wO1xuXG4gICAgICAgIHJldHVybiB7eCwgeX07XG5cbiAgICB9XG5cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFjdGl2ZVNlbGVjdGlvbkxpc3RlbmVyIHtcbiAgICAvLyBub2luc3BlY3Rpb24gVHNMaW50XG4gICAgKGV2ZW50OiBBY3RpdmVTZWxlY3Rpb25FdmVudCk6IHZvaWQ7XG59XG5cblxuZXhwb3J0IGludGVyZmFjZSBBY3RpdmVTZWxlY3Rpb24ge1xuXG4gICAgcmVhZG9ubHkgZWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gICAgcmVhZG9ubHkgb3JpZ2luUG9pbnQ6IFBvaW50O1xuICAgIHJlYWRvbmx5IG1vdXNlRGlyZWN0aW9uOiBNb3VzZURpcmVjdGlvbjtcbiAgICByZWFkb25seSBib3VuZGluZ0NsaWVudFJlY3Q6IENsaWVudFJlY3QgfCBET01SZWN0O1xuXG4gICAgLyoqXG4gICAgICogVGhlIGFjdHVhbCBzZWxlY3Rpb24gb2JqZWN0IHRoYXQgd2UncmUgd29ya2luZyB3aXRoLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNlbGVjdGlvbjogU2VsZWN0aW9uO1xuXG4gICAgcmVhZG9ubHkgdmlldzogV2luZG93O1xuXG4gICAgcmVhZG9ubHkgdHlwZTogQWN0aXZlU2VsZWN0aW9uVHlwZTtcblxufVxuXG5leHBvcnQgdHlwZSBBY3RpdmVTZWxlY3Rpb25UeXBlID0gJ2NyZWF0ZWQnIHwgJ2Rlc3Ryb3llZCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWN0aXZlU2VsZWN0aW9uRXZlbnQgZXh0ZW5kcyBBY3RpdmVTZWxlY3Rpb24ge1xuXG59XG4iXX0=