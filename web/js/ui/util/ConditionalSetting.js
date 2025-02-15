"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Optional_1 = require("polar-shared/src/util/ts/Optional");
class ConditionalSetting {
    constructor(key) {
        this.key = key;
    }
    accept(predicate) {
        return predicate(this.get());
    }
    get() {
        return Optional_1.Optional.of(window.localStorage.getItem(this.key));
    }
    set(value) {
        window.localStorage.setItem(this.key, value);
    }
}
exports.ConditionalSetting = ConditionalSetting;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uZGl0aW9uYWxTZXR0aW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQ29uZGl0aW9uYWxTZXR0aW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsZ0VBQTJEO0FBRTNELE1BQWEsa0JBQWtCO0lBSTNCLFlBQVksR0FBVztRQUNuQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNuQixDQUFDO0lBUU0sTUFBTSxDQUFDLFNBQTRCO1FBQ3RDLE9BQU8sU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFTSxHQUFHO1FBQ04sT0FBTyxtQkFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRU0sR0FBRyxDQUFDLEtBQWE7UUFDcEIsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNqRCxDQUFDO0NBRUo7QUExQkQsZ0RBMEJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPcHRpb25hbH0gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvdXRpbC90cy9PcHRpb25hbFwiO1xuXG5leHBvcnQgY2xhc3MgQ29uZGl0aW9uYWxTZXR0aW5nIHtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkga2V5OiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihrZXk6IHN0cmluZykge1xuICAgICAgICB0aGlzLmtleSA9IGtleTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcnVlIGlmIHRoaXMgbWF0Y2hlcyB0aGUgY29uZGl0aW9uIHRvIHRyaWdnZXIgc29tZSB2YWx1ZSBiYXNlZCBvbiB0aGlzXG4gICAgICogc2V0dGluZy4gIEFmdGVyIG1hdGNoaW5nIGl0J3MgcHJvYmFibHkgYmVzdCB0byB1cGRhdGUgdGhlIHZhbHVlIGJhc2VkXG4gICAgICogb24gZWl0aGVyIGltcGxpY2l0IG9yIG1hbnVhbCBhY2NlcHRhbmNlLlxuICAgICAqIEBwYXJhbSBwcmVkaWNhdGVcbiAgICAgKi9cbiAgICBwdWJsaWMgYWNjZXB0KHByZWRpY2F0ZTogUHJlZGljYXRlPHN0cmluZz4pIHtcbiAgICAgICAgcmV0dXJuIHByZWRpY2F0ZSh0aGlzLmdldCgpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0KCk6IE9wdGlvbmFsPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gT3B0aW9uYWwub2Yod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMua2V5KSk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLmtleSwgdmFsdWUpO1xuICAgIH1cblxufVxuXG5leHBvcnQgdHlwZSBQcmVkaWNhdGU8VD4gPSAodmFsdWU6IE9wdGlvbmFsPFQ+KSA9PiBib29sZWFuO1xuIl19