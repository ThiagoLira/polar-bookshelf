"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Preconditions_1 = require("polar-shared/src/Preconditions");
const Event_1 = require("./Event");
const Logger_1 = require("polar-shared/src/logger/Logger");
const log = Logger_1.Logger.create();
class Reactor {
    constructor() {
        this.events = {};
    }
    registerEvent(eventName) {
        Preconditions_1.Preconditions.assertNotNull(eventName, "eventName");
        if (Preconditions_1.isPresent(this.events[eventName])) {
            return this;
        }
        const event = new Event_1.Event(eventName);
        this.events[eventName] = event;
        return this;
    }
    hasRegisteredEvent(eventName) {
        return Preconditions_1.isPresent(this.events[eventName]);
    }
    eventNames() {
        return Object.keys(this.events);
    }
    clearEvent(eventName) {
        const event = new Event_1.Event(eventName);
        this.events[eventName] = event;
        return this;
    }
    size(eventName) {
        if (this.events[eventName]) {
            return this.events[eventName].size();
        }
        return 0;
    }
    dispatchEvent(eventName, value) {
        Preconditions_1.Preconditions.assertNotNull(eventName, "eventName");
        const event = this.events[eventName];
        if (!event) {
            throw new Error("No events for event name: " + eventName);
        }
        event.getListeners().forEach((listener) => {
            try {
                listener(value);
            }
            catch (e) {
                log.error("listener generated unhandled exception: ", e);
            }
        });
        return this;
    }
    addEventListener(eventName, eventListener) {
        Preconditions_1.Preconditions.assertNotNull(eventName, "eventName");
        if (typeof eventListener !== "function") {
            throw new Error("listener is not a function: " + typeof eventListener);
        }
        if (this.events[eventName] === undefined) {
            throw new Error("No registered event for event name: " + eventName);
        }
        this.events[eventName].registerListener(eventListener);
        const release = () => {
            this.removeEventListener(eventName, eventListener);
        };
        return { eventListener, release };
    }
    removeEventListener(eventName, listener) {
        if (this.events[eventName]) {
            return this.events[eventName].removeListener(listener);
        }
        return false;
    }
    once(eventName) {
        return new Promise((resolve => {
            const listener = (event) => {
                resolve(event);
                this.removeEventListener(eventName, listener);
            };
            this.addEventListener(eventName, listener);
        }));
    }
    getEventListeners(eventName) {
        Preconditions_1.Preconditions.assertNotNull(eventName, "eventName");
        return this.events[eventName].getListeners();
    }
    hasEventListeners(eventName) {
        return this.hasRegisteredEvent(eventName) && this.events[eventName].hasListeners();
    }
}
exports.Reactor = Reactor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVhY3Rvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlJlYWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxrRUFBd0U7QUFDeEUsbUNBQThCO0FBRTlCLDJEQUFzRDtBQUd0RCxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFNUIsTUFBYSxPQUFPO0lBQXBCO1FBRXFCLFdBQU0sR0FBK0IsRUFBRSxDQUFDO0lBd0k3RCxDQUFDO0lBdElVLGFBQWEsQ0FBQyxTQUFpQjtRQUVsQyw2QkFBYSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFFcEQsSUFBSSx5QkFBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRTtZQUduQyxPQUFPLElBQUksQ0FBQztTQUNmO1FBRUQsTUFBTSxLQUFLLEdBQUcsSUFBSSxhQUFLLENBQUksU0FBUyxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxLQUFLLENBQUM7UUFFL0IsT0FBTyxJQUFJLENBQUM7SUFFaEIsQ0FBQztJQUVNLGtCQUFrQixDQUFDLFNBQWlCO1FBQ3ZDLE9BQU8seUJBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVNLFVBQVU7UUFDYixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFTSxVQUFVLENBQUMsU0FBaUI7UUFFL0IsTUFBTSxLQUFLLEdBQUcsSUFBSSxhQUFLLENBQUksU0FBUyxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDL0IsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVNLElBQUksQ0FBQyxTQUFpQjtRQUV6QixJQUFJLElB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UyxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN2RixDQUFDO0NBRUo7QUExSUQsMEJBMElDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpc1ByZXNlbnQsIFByZWNvbmRpdGlvbnN9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvUHJlY29uZGl0aW9ucyc7XG5pbXBvcnQge0V2ZW50fSBmcm9tICcuL0V2ZW50JztcbmltcG9ydCB7RXZlbnRMaXN0ZW5lciwgUmVnaXN0ZXJlZEV2ZW50TGlzdGVuZXJ9IGZyb20gJy4vRXZlbnRMaXN0ZW5lcic7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7SVNpbXBsZVJlYWN0b3J9IGZyb20gJy4vU2ltcGxlUmVhY3Rvcic7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuZXhwb3J0IGNsYXNzIFJlYWN0b3I8Vj4gaW1wbGVtZW50cyBJUmVhY3RvcjxWPiB7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IGV2ZW50czoge1tuYW1lOiBzdHJpbmddOiBFdmVudDxWPn0gPSB7fTtcblxuICAgIHB1YmxpYyByZWdpc3RlckV2ZW50KGV2ZW50TmFtZTogc3RyaW5nKTogdGhpcyB7XG5cbiAgICAgICAgUHJlY29uZGl0aW9ucy5hc3NlcnROb3ROdWxsKGV2ZW50TmFtZSwgXCJldmVudE5hbWVcIik7XG5cbiAgICAgICAgaWYgKGlzUHJlc2VudCh0aGlzLmV2ZW50c1tldmVudE5hbWVdKSkge1xuICAgICAgICAgICAgLy8gYWxyZWFkeSByZWdpc3RlcmVkIHNvIGRvbid0IGRvdWJsZSByZWdpc3RlciB3aGljaCB3b3VsZCBraWxsXG4gICAgICAgICAgICAvLyB0aGUgZXhpc3RpbmcgbGlzdGVuZXJzLlxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBldmVudCA9IG5ldyBFdmVudDxWPihldmVudE5hbWUpO1xuICAgICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdID0gZXZlbnQ7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgaGFzUmVnaXN0ZXJlZEV2ZW50KGV2ZW50TmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBpc1ByZXNlbnQodGhpcy5ldmVudHNbZXZlbnROYW1lXSk7XG4gICAgfVxuXG4gICAgcHVibGljIGV2ZW50TmFtZXMoKTogc3RyaW5nW10ge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5ldmVudHMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbGVhckV2ZW50KGV2ZW50TmFtZTogc3RyaW5nKSB7XG4gICAgICAgIC8vIHJlcGxhY2UgaXQgd2l0aCBhIG5ldyBldmVudCB0byBjbGVhciB0aGUgcHJldmlvdXMgbGlzdGVuZXJzLlxuICAgICAgICBjb25zdCBldmVudCA9IG5ldyBFdmVudDxWPihldmVudE5hbWUpO1xuICAgICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdID0gZXZlbnQ7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHB1YmxpYyBzaXplKGV2ZW50TmFtZTogc3RyaW5nKSB7XG5cbiAgICAgICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmV2ZW50c1tldmVudE5hbWVdLnNpemUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIGV2ZW50TmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnQgdG8gZGlzcGF0Y2guXG4gICAgICogQHBhcmFtIHZhbHVlIFRoZSBldmVudCB2YWx1ZSB0byBkaXNwYXRjaCB0byBsaXN0ZW5lcnMgb2YgdGhhdCBldmVudCBuYW1lLlxuICAgICAqIEByZXR1cm4ge1JlYWN0b3J9XG4gICAgICovXG4gICAgcHVibGljIGRpc3BhdGNoRXZlbnQoZXZlbnROYW1lOiBzdHJpbmcsIHZhbHVlOiBWKSB7XG5cbiAgICAgICAgUHJlY29uZGl0aW9ucy5hc3NlcnROb3ROdWxsKGV2ZW50TmFtZSwgXCJldmVudE5hbWVcIik7XG5cbiAgICAgICAgY29uc3QgZXZlbnQgPSB0aGlzLmV2ZW50c1tldmVudE5hbWVdO1xuXG4gICAgICAgIGlmICghIGV2ZW50KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBldmVudHMgZm9yIGV2ZW50IG5hbWU6IFwiICsgZXZlbnROYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGV2ZW50LmdldExpc3RlbmVycygpLmZvckVhY2goKGxpc3RlbmVyKSA9PiB7XG5cbiAgICAgICAgICAgIHRyeSB7XG5cbiAgICAgICAgICAgICAgICBsaXN0ZW5lcih2YWx1ZSk7XG5cbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBsb2cuZXJyb3IoXCJsaXN0ZW5lciBnZW5lcmF0ZWQgdW5oYW5kbGVkIGV4Y2VwdGlvbjogXCIsIGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgfVxuXG4gICAgcHVibGljIGFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lOiBzdHJpbmcsIGV2ZW50TGlzdGVuZXI6IEV2ZW50TGlzdGVuZXI8Vj4pOiBSZWdpc3RlcmVkRXZlbnRMaXN0ZW5lcjxWPiB7XG5cbiAgICAgICAgUHJlY29uZGl0aW9ucy5hc3NlcnROb3ROdWxsKGV2ZW50TmFtZSwgXCJldmVudE5hbWVcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBldmVudExpc3RlbmVyICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImxpc3RlbmVyIGlzIG5vdCBhIGZ1bmN0aW9uOiBcIiArIHR5cGVvZiBldmVudExpc3RlbmVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmV2ZW50c1tldmVudE5hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHJlZ2lzdGVyZWQgZXZlbnQgZm9yIGV2ZW50IG5hbWU6IFwiICsgZXZlbnROYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0ucmVnaXN0ZXJMaXN0ZW5lcihldmVudExpc3RlbmVyKTtcblxuICAgICAgICBjb25zdCByZWxlYXNlID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZXZlbnRMaXN0ZW5lcik7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHtldmVudExpc3RlbmVyLCByZWxlYXNlfTtcblxuICAgIH1cblxuICAgIHB1YmxpYyByZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZTogc3RyaW5nLCBsaXN0ZW5lcjogRXZlbnRMaXN0ZW5lcjxWPik6IGJvb2xlYW4ge1xuXG4gICAgICAgIGlmICh0aGlzLmV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ldmVudHNbZXZlbnROYW1lXS5yZW1vdmVMaXN0ZW5lcihsaXN0ZW5lcik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgb25jZShldmVudE5hbWU6IHN0cmluZyk6IFByb21pc2U8Vj4ge1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxWPigocmVzb2x2ZSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IGxpc3RlbmVyID0gKGV2ZW50OiBWKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShldmVudCk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgbGlzdGVuZXIpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgbGlzdGVuZXIpO1xuXG4gICAgICAgIH0pKTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIGV2ZW50TmFtZSB7U3RyaW5nfSBUaGUgbmFtZSBvZiB0aGUgZXZlbnQgZm9yIHRoZSBsaXN0ZW5lcnMuXG4gICAgICovXG4gICAgcHVibGljIGdldEV2ZW50TGlzdGVuZXJzKGV2ZW50TmFtZTogc3RyaW5nKSB7XG4gICAgICAgIFByZWNvbmRpdGlvbnMuYXNzZXJ0Tm90TnVsbChldmVudE5hbWUsIFwiZXZlbnROYW1lXCIpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmV2ZW50c1tldmVudE5hbWVdLmdldExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBoYXNFdmVudExpc3RlbmVycyhldmVudE5hbWU6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gdGhpcy5oYXNSZWdpc3RlcmVkRXZlbnQoZXZlbnROYW1lKSAmJiB0aGlzLmV2ZW50c1tldmVudE5hbWVdLmhhc0xpc3RlbmVycygpO1xuICAgIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElSZWFjdG9yPFY+IHtcbiAgICBvbmNlKGV2ZW50TmFtZTogc3RyaW5nKTogUHJvbWlzZTxWPjtcbiAgICBhZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZTogc3RyaW5nLCBsaXN0ZW5lcjogRXZlbnRMaXN0ZW5lcjxWPik6IFJlZ2lzdGVyZWRFdmVudExpc3RlbmVyPFY+O1xuICAgIGRpc3BhdGNoRXZlbnQoZXZlbnROYW1lOiBzdHJpbmcsIHZhbHVlOiBWKTogdm9pZDtcbiAgICBoYXNSZWdpc3RlcmVkRXZlbnQoZXZlbnROYW1lOiBzdHJpbmcpOiBib29sZWFuO1xuICAgIGhhc0V2ZW50TGlzdGVuZXJzKGV2ZW50TmFtZTogc3RyaW5nKTogYm9vbGVhbjtcbiAgICByZWdpc3RlckV2ZW50KGV2ZW50TmFtZTogc3RyaW5nKTogSVJlYWN0b3I8Vj47XG4gICAgc2l6ZShldmVudE5hbWU6IHN0cmluZyk6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJTXV0YWJsZVJlYWN0b3I8Vj4gZXh0ZW5kcyBJUmVhY3RvcjxWPiB7XG4gICAgY2xlYXJFdmVudChldmVudE5hbWU6IHN0cmluZyk6IHZvaWQ7XG4gICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWU6IHN0cmluZywgbGlzdGVuZXI6IEV2ZW50TGlzdGVuZXI8Vj4pOiBib29sZWFuO1xuICAgIGdldEV2ZW50TGlzdGVuZXJzKGV2ZW50TmFtZTogc3RyaW5nKTogQXJyYXk8RXZlbnRMaXN0ZW5lcjxWPj47XG4gICAgc2l6ZShldmVudE5hbWU6IHN0cmluZyk6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJTmFtZWRFdmVudERpc3BhdGNoZXI8Vj4gZXh0ZW5kcyBJUmVhY3RvcjxWPiB7XG5cbn1cbiJdfQ==