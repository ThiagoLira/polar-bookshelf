"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Timeouts_1 = require("../util/Timeouts");
const Objects_1 = require("polar-shared/src/util/Objects");
class Throttler {
    constructor(delegate, opts = new DefaultThrottlerOpts()) {
        this.nrRequestsOutstanding = 0;
        this.lastExecuted = 0;
        this.delegate = delegate;
        this.opts = Objects_1.Objects.defaults(opts, new DefaultThrottlerOpts());
    }
    exec() {
        ++this.nrRequestsOutstanding;
        if (this.nrRequestsOutstanding > this.opts.maxRequests) {
            this.doExec();
        }
        else {
            if (this.timeout === undefined) {
                this.timeout =
                    Timeouts_1.Timeouts.setTimeout(() => this.doExecViaTimeout(), this.opts.maxTimeout);
            }
        }
    }
    doExecViaTimeout() {
        this.doExec();
        this.timeout = undefined;
    }
    doExec() {
        if (this.nrRequestsOutstanding === 0) {
            return;
        }
        try {
            this.delegate();
        }
        finally {
            if (this.timeout !== undefined) {
                this.timeout.clear();
                this.timeout = undefined;
            }
            this.nrRequestsOutstanding = 0;
        }
    }
    trace() {
        const now = Date.now();
        const delta = Math.floor(now - this.lastExecuted);
        this.lastExecuted = now;
    }
}
exports.Throttler = Throttler;
class DefaultThrottlerOpts {
    constructor() {
        this.maxRequests = 50;
        this.maxTimeout = 250;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhyb3R0bGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVGhyb3R0bGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0NBQTBDO0FBRTFDLDJEQUFzRDtBQU10RCxNQUFhLFNBQVM7SUFZbEIsWUFBWSxRQUFvQixFQUNwQixPQUErQixJQUFJLG9CQUFvQixFQUFFO1FBUDdELDBCQUFxQixHQUFXLENBQUMsQ0FBQztRQUlsQyxpQkFBWSxHQUFXLENBQUMsQ0FBQztRQUs3QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLGlCQUFPLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLG9CQUFvQixFQUFFLENBQUMsQ0FBQztJQUVuRSxDQUFDO0lBTU0sSUFBSTtRQUVQLEVBQUUsSUFBSSxDQUFDLHFCQUFxQixDQUFDO1FBTTdCLElBQUksSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BELElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNqQjthQUFNO1lBSUgsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLFNBQVMsRUFBRTtnQkFFNUIsSUFBSSxDQUFDLE9BQU87b0JBQ1IsbUJBQVEsQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUVoRjtTQUVKO0lBRUwsQ0FBQztJQUVPLGdCQUFnQjtRQUVwQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFFZCxJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQztJQUU3QixDQUFDO0lBRU8sTUFBTTtRQUVWLElBQUksSUFBSSxDQUFDLHFCQUFxQixLQUFLLENBQUMsRUFBRTtZQUVsQyxPQUFPO1NBQ1Y7UUFFRCxJQUFJO1lBSUEsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBRW5CO2dCQUFTO1lBRU4sSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLFNBQVMsRUFBRTtnQkFDNUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7YUFDNUI7WUFFRCxJQUFJLENBQUMscUJBQXFCLEdBQUcsQ0FBQyxDQUFDO1NBQ2xDO0lBRUwsQ0FBQztJQUVPLEtBQUs7UUFFVCxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFFdkIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRWxELElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDO0lBRTVCLENBQUM7Q0FFSjtBQTVGRCw4QkE0RkM7QUFnQkQsTUFBTSxvQkFBb0I7SUFBMUI7UUFDb0IsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIsZUFBVSxHQUFHLEdBQUcsQ0FBQztJQUNyQyxDQUFDO0NBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1RpbWVvdXRzfSBmcm9tICcuLi91dGlsL1RpbWVvdXRzJztcbmltcG9ydCB7VGltZW91dH0gZnJvbSAnLi4vdXRpbC9UaW1lb3V0cyc7XG5pbXBvcnQge09iamVjdHN9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL3V0aWwvT2JqZWN0c1wiO1xuXG4vKipcbiAqIFRocm90dGxlcyBhIHNldCBvZiBvcGVyYXRpb25zIHRvIGEgbWF4IG9mIE4gb3BlcmF0aW9ucyBhdCBvbmNlIG9yIFRcbiAqIG1pbGxpc2Vjb25kcywgd2hpY2hldmVyIGhhcHBlbnMgZmlyc3QuXG4gKi9cbmV4cG9ydCBjbGFzcyBUaHJvdHRsZXIge1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBkZWxlZ2F0ZTogKCkgPT4gdm9pZDtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgb3B0czogVGhyb3R0bGVyT3B0cztcblxuICAgIHByaXZhdGUgbnJSZXF1ZXN0c091dHN0YW5kaW5nOiBudW1iZXIgPSAwO1xuXG4gICAgcHJpdmF0ZSB0aW1lb3V0PzogVGltZW91dDtcblxuICAgIHByaXZhdGUgbGFzdEV4ZWN1dGVkOiBudW1iZXIgPSAwO1xuXG4gICAgY29uc3RydWN0b3IoZGVsZWdhdGU6ICgpID0+IHZvaWQsXG4gICAgICAgICAgICAgICAgb3B0czogUGFydGlhbDxUaHJvdHRsZXJPcHRzPiA9IG5ldyBEZWZhdWx0VGhyb3R0bGVyT3B0cygpKSB7XG5cbiAgICAgICAgdGhpcy5kZWxlZ2F0ZSA9IGRlbGVnYXRlO1xuICAgICAgICB0aGlzLm9wdHMgPSBPYmplY3RzLmRlZmF1bHRzKG9wdHMsIG5ldyBEZWZhdWx0VGhyb3R0bGVyT3B0cygpKTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4ZWMgdGhlIGRlbGVnYXRlIGZ1bmN0aW9uIGJ1dCBvbmx5IGV4ZWN1dGUgaWYgdGhlIHRpbWVvdXQgaGFzIGV4cGlyZWRcbiAgICAgKiBvciB0aGUgbWF4aXVtIG51bWJlciBvZiBvcGVyYXRpb25zIGhhcyBwYXNzZWQuXG4gICAgICovXG4gICAgcHVibGljIGV4ZWMoKSB7XG5cbiAgICAgICAgKyt0aGlzLm5yUmVxdWVzdHNPdXRzdGFuZGluZztcblxuICAgICAgICAvLyBUT0RPOiBpdCBtaWdodCBiZSBuaWNlIHRvIHB1dCBhIG1pblRpbWVvdXQgaGVyZSB0b28gYW5kIGlmIHdlIGdpdmVcbiAgICAgICAgLy8gdG9vIG1hbnkgcmVxdWVzdHMgd2UgZG9uJ3QgZW1pdCBpZiBCRUZPUkUgdGhlIG1pbiB0aW1lb3V0LiAgVGhpcyB3YXlcbiAgICAgICAgLy8gaWYgd2UgZ2l2ZSBpdCB0b28gbWFueSByZXN1bHRzIGF0IG9uY2Ugd2Ugd2FpdCBmb3IgdGhlIG1pbnVtdW1cbiAgICAgICAgLy8gaW50ZXJ2YWwgYXMgaXQgZG9lc24ndCBtYWtlIHNlbnNlIHRvIHVwZGF0ZSB0b28gbWFueSBhdCBvbmNlLlxuICAgICAgICBpZiAodGhpcy5uclJlcXVlc3RzT3V0c3RhbmRpbmcgPiB0aGlzLm9wdHMubWF4UmVxdWVzdHMpIHtcbiAgICAgICAgICAgIHRoaXMuZG9FeGVjKCk7XG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIC8vIHdlIG1pZ2h0IGhhdmUgdG8gc2V0dXAgdmlhIHRoZSB0aW1lb3V0IG5vdy5cblxuICAgICAgICAgICAgaWYgKHRoaXMudGltZW91dCA9PT0gdW5kZWZpbmVkKSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVvdXQgPVxuICAgICAgICAgICAgICAgICAgICBUaW1lb3V0cy5zZXRUaW1lb3V0KCgpID0+IHRoaXMuZG9FeGVjVmlhVGltZW91dCgpLCB0aGlzLm9wdHMubWF4VGltZW91dCk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGRvRXhlY1ZpYVRpbWVvdXQoKSB7XG5cbiAgICAgICAgdGhpcy5kb0V4ZWMoKTtcblxuICAgICAgICB0aGlzLnRpbWVvdXQgPSB1bmRlZmluZWQ7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGRvRXhlYygpIHtcblxuICAgICAgICBpZiAodGhpcy5uclJlcXVlc3RzT3V0c3RhbmRpbmcgPT09IDApIHtcbiAgICAgICAgICAgIC8vIHdlIGhhdmUgYWxyZWFkeSBiZWVuIGV4ZWN1dGVkIHNvIHdlJ3JlIGRvbmUgbm93LlxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdHJ5IHtcblxuICAgICAgICAgICAgLy8gdGhpcy50cmFjZSgpO1xuXG4gICAgICAgICAgICB0aGlzLmRlbGVnYXRlKCk7XG5cbiAgICAgICAgfSBmaW5hbGx5IHtcblxuICAgICAgICAgICAgaWYgKHRoaXMudGltZW91dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aW1lb3V0LmNsZWFyKCk7XG4gICAgICAgICAgICAgICAgdGhpcy50aW1lb3V0ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLm5yUmVxdWVzdHNPdXRzdGFuZGluZyA9IDA7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHByaXZhdGUgdHJhY2UoKSB7XG5cbiAgICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcblxuICAgICAgICBjb25zdCBkZWx0YSA9IE1hdGguZmxvb3Iobm93IC0gdGhpcy5sYXN0RXhlY3V0ZWQpO1xuXG4gICAgICAgIHRoaXMubGFzdEV4ZWN1dGVkID0gbm93O1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGhyb3R0bGVyT3B0cyB7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbWF4IG51bWJlciBvZiBvcGVyYXRpb25zIHVudGlsIHdlIGV4ZWN1dGUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbWF4UmVxdWVzdHM6IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIFRoZSBtYXggdGltZSB1bnRpbCB3ZSBleGVjdXRlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG1heFRpbWVvdXQ6IG51bWJlcjtcblxufVxuXG5jbGFzcyBEZWZhdWx0VGhyb3R0bGVyT3B0cyBpbXBsZW1lbnRzIFRocm90dGxlck9wdHMge1xuICAgIHB1YmxpYyByZWFkb25seSBtYXhSZXF1ZXN0cyA9IDUwO1xuICAgIHB1YmxpYyByZWFkb25seSBtYXhUaW1lb3V0ID0gMjUwO1xufVxuIl19