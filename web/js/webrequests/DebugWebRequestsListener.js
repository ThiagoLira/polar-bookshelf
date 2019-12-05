"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Logger_1 = require("polar-shared/src/logger/Logger");
const BaseWebRequestsListener_1 = require("./BaseWebRequestsListener");
const log = Logger_1.Logger.create();
class DebugWebRequestsListener extends BaseWebRequestsListener_1.BaseWebRequestsListener {
    constructor() {
        super();
        this.pending = 0;
    }
    onWebRequestEvent(event) {
        const { name, details, callback } = event;
        if (name === "onCompleted" || name === "onErrorOccurred") {
            --this.pending;
        }
        log.info(`${name} (pending=${this.pending}): `, JSON.stringify(details, null, "  "));
        if (name === "onBeforeRequest") {
            ++this.pending;
        }
        if (callback) {
            callback({ cancel: false });
        }
    }
}
exports.DebugWebRequestsListener = DebugWebRequestsListener;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVidWdXZWJSZXF1ZXN0c0xpc3RlbmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRGVidWdXZWJSZXF1ZXN0c0xpc3RlbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsMkRBQXNEO0FBQ3RELHVFQUFrRTtBQUVsRSxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFXNUIsTUFBYSx3QkFBeUIsU0FBUSxpREFBdUI7SUFTakU7UUFFSSxLQUFLLEVBQUUsQ0FBQztRQU5KLFlBQU8sR0FBRyxDQUFDLENBQUM7SUFRcEIsQ0FBQztJQU1NLGlCQUFpQixDQUFDLEtBQTRCO1FBRWpELE1BQU0sRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBQyxHQUFHLEtBQUssQ0FBQztRQUV4QyxJQUFJLElBQUksS0FBSyxhQUFhLElBQUksSUFBSSxLQUFLLGlCQUFpQixFQUFFO1lBR3RELEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUNsQjtRQUVELEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLGFBQWEsSUFBSSxDQUFDLE9BQU8sS0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBRXJGLElBQUksSUFBSSxLQUFLLGlCQUFpQixFQUFFO1lBRTVCLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUNsQjtRQUVELElBQUksUUFBUSxFQUFFO1lBR1YsUUFBUSxDQUFDLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUM7U0FDN0I7SUFFTCxDQUFDO0NBRUo7QUE1Q0QsNERBNENDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJTmFtZWRXZWJSZXF1ZXN0RXZlbnR9IGZyb20gJy4vV2ViUmVxdWVzdFJlYWN0b3InO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge0Jhc2VXZWJSZXF1ZXN0c0xpc3RlbmVyfSBmcm9tICcuL0Jhc2VXZWJSZXF1ZXN0c0xpc3RlbmVyJztcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG4vKipcbiAqIEEgc2ltcGxlIGRlYnVnIHdlYiByZXF1ZXN0cyBsaXN0ZW5lciB3aGljaCBqdXN0IHRyYWNlcyB0aGUgb3V0cHV0IHNvIHRoYXQgd2VcbiAqIGNhbiBiZXR0ZXIgdW5kZXJzdGFuZCB0aGUgZXZlbnQgZmxvdy5cbiAqXG4gKiBNYWluIEFQSSBkb2N1bWVudGF0aW9uIGlzIGhlcmU6XG4gKlxuICogaHR0cHM6Ly9lbGVjdHJvbmpzLm9yZy9kb2NzL2FwaS93ZWItcmVxdWVzdFxuICpcbiAqL1xuZXhwb3J0IGNsYXNzIERlYnVnV2ViUmVxdWVzdHNMaXN0ZW5lciBleHRlbmRzIEJhc2VXZWJSZXF1ZXN0c0xpc3RlbmVyIHtcblxuICAgIC8qKlxuICAgICAqIFRoZSBudW1iZXIgb2YgcGVuZGluZyByZXF1ZXN0c1xuICAgICAqL1xuICAgIHByaXZhdGUgcGVuZGluZyA9IDA7XG5cbiAgICAvKipcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgICAgICBzdXBlcigpO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHdoZW4gd2UgcmVjZWl2ZSBhbiBldmVudC4gIEFsbCB0aGUgZXZlbnRzIGdpdmUgdXMgYSAnZGV0YWlscydcbiAgICAgKiBvYmplY3QuXG4gICAgICovXG4gICAgcHVibGljIG9uV2ViUmVxdWVzdEV2ZW50KGV2ZW50OiBJTmFtZWRXZWJSZXF1ZXN0RXZlbnQpIHtcblxuICAgICAgICBjb25zdCB7bmFtZSwgZGV0YWlscywgY2FsbGJhY2t9ID0gZXZlbnQ7XG5cbiAgICAgICAgaWYgKG5hbWUgPT09IFwib25Db21wbGV0ZWRcIiB8fCBuYW1lID09PSBcIm9uRXJyb3JPY2N1cnJlZFwiKSB7XG4gICAgICAgICAgICAvLyB0aGlzIHJlcXVlc3QgaGFzIGFscmVhZHkgY29tcGxldGVkIHNvIGlzIG5vdCBjb25zaWRlcmVkIGFnYWluc3RcbiAgICAgICAgICAgIC8vIHBlbmRpbmcgYW55IGxvbmdlclxuICAgICAgICAgICAgLS10aGlzLnBlbmRpbmc7XG4gICAgICAgIH1cblxuICAgICAgICBsb2cuaW5mbyhgJHtuYW1lfSAocGVuZGluZz0ke3RoaXMucGVuZGluZ30pOiBgLCBKU09OLnN0cmluZ2lmeShkZXRhaWxzLCBudWxsLCBcIiAgXCIpKTtcblxuICAgICAgICBpZiAobmFtZSA9PT0gXCJvbkJlZm9yZVJlcXVlc3RcIikge1xuICAgICAgICAgICAgLy8gYWZ0ZXIgdGhpcyByZXF1ZXN0IHRoZSBwZW5kaW5nIHdpbGwgYmUgaW5jcmVtZW50ZWQuXG4gICAgICAgICAgICArK3RoaXMucGVuZGluZztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgLy8gdGhlIGNhbGxiYWNrIGFsd2F5cyBoYXMgdG8gYmUgdXNlZCBvciB0aGUgcmVxdWVzdHMgd2lsbCBiZVxuICAgICAgICAgICAgLy8gY2FuY2VsbGVkLlxuICAgICAgICAgICAgY2FsbGJhY2soe2NhbmNlbDogZmFsc2V9KTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG59XG4iXX0=