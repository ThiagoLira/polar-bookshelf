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
const Optional_1 = require("polar-shared/src/util/ts/Optional");
const TimeDurations_1 = require("polar-shared/src/util/TimeDurations");
const Preconditions_1 = require("polar-shared/src/Preconditions");
class Prefs {
    mark(key, value = true) {
        if (value) {
            this.set(key, 'true');
        }
        else {
            this.set(key, 'false');
        }
    }
    toggleMarked(key, value = false) {
        this.mark(key, !this.isMarked(key, value));
    }
    isMarked(key, defaultValue = false) {
        const currentValue = this.get(key).getOrElse(`${defaultValue}`);
        return currentValue === 'true';
    }
    markDelayed(key, duration = "1w") {
        const durationMS = TimeDurations_1.TimeDurations.toMillis(duration);
        const after = Date.now() + durationMS;
        this.set(key, `${after}`);
    }
    isMarkedDelayed(key) {
        const val = this.get(key).getOrElse('');
        if (val.match(/[0-9]+/)) {
            return Date.now() < parseInt(val);
        }
        return false;
    }
    defined(key) {
        return this.get(key).isPresent();
    }
}
exports.Prefs = Prefs;
class DictionaryPrefs extends Prefs {
    constructor(delegate = {}) {
        super();
        this.delegate = {};
        this.delegate = delegate;
    }
    get(key) {
        return Optional_1.Optional.of(this.delegate[key]);
    }
    set(key, value) {
        this.delegate[key] = value;
    }
    toDict() {
        return Object.assign({}, this.delegate);
    }
}
exports.DictionaryPrefs = DictionaryPrefs;
class CompositePrefs {
    constructor(delegates) {
        this.delegate = Preconditions_1.Preconditions.assertPresent(delegates[0], 'delegate');
        this.delegates = delegates;
    }
    defined(key) {
        return this.delegate.defined(key);
    }
    get(key) {
        return this.delegate.get(key);
    }
    isMarked(key, defaultValue) {
        return this.delegate.isMarked(key, defaultValue);
    }
    isMarkedDelayed(key) {
        return this.delegate.isMarkedDelayed(key);
    }
    mark(key, value) {
        return this.delegate.mark(key, value);
    }
    markDelayed(key, duration) {
        return this.delegate.markDelayed(key, duration);
    }
    toDict() {
        return this.delegate.toDict();
    }
    toggleMarked(key, value) {
        return this.toggleMarked(key, value);
    }
    commit() {
        return __awaiter(this, void 0, void 0, function* () {
            for (const delegate of this.delegates) {
                yield this.delegate.commit();
            }
        });
    }
    set(key, value) {
        for (const delegate of this.delegates) {
            this.delegate.set(key, value);
        }
    }
}
exports.CompositePrefs = CompositePrefs;
class NonPersistentPrefs extends DictionaryPrefs {
    commit() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
exports.NonPersistentPrefs = NonPersistentPrefs;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJlZnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJQcmVmcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUUzRCx1RUFBa0U7QUFDbEUsa0VBQTZEO0FBRTdELE1BQXNCLEtBQUs7SUFPaEIsSUFBSSxDQUFDLEdBQVcsRUFBRSxRQUFpQixJQUFJO1FBRTFDLElBQUksS0FBSyxFQUFFO1lBQ1AsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDekI7YUFBTTtZQUNILElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQzFCO0lBRUwsQ0FBQztJQUVNLFlBQVksQ0FBQyxHQUFXLEVBQUUsUUFBaUIsS0FBSztRQUNuRCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVNLFFBQVEsQ0FBQyxHQUFXLEVBQUUsZUFBd0IsS0FBSztRQUV0RCxNQUFNLFlBQVksR0FDZCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLFlBQVksRUFBRSxDQUFDLENBQUM7UUFFL0MsT0FBTyxZQUFZLEtBQUssTUFBTSxDQUFDO0lBRW5DLENBQUM7SUFFTSxXQUFXLENBQUMsR0FBVyxFQUFFLFdBQXdCLElBQUk7UUFFeEQsTUFBTSxVQUFVLEdBQUcsNkJBQWEsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDcEQsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLFVBQVUsQ0FBQztRQUN0QyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEtBQUssRUFBRSxDQUFDLENBQUM7SUFFOUIsQ0FBQztJQUVNLGVBQWUsQ0FBQyxHQUFXO1FBRTlCLE1B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YTtRQUVqQyxLQUFLLE1BQU0sUUFBUSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ2pDO0lBRUwsQ0FBQztDQUVKO0FBOURELHdDQThEQztBQUVELE1BQWEsa0JBQW1CLFNBQVEsZUFBZTtJQUV0QyxNQUFNOztRQUVuQixDQUFDO0tBQUE7Q0FFSjtBQU5ELGdEQU1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPcHRpb25hbH0gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvdXRpbC90cy9PcHRpb25hbFwiO1xuaW1wb3J0IHtEdXJhdGlvblN0cn0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL1RpbWVEdXJhdGlvbnMnO1xuaW1wb3J0IHtUaW1lRHVyYXRpb25zfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvVGltZUR1cmF0aW9ucyc7XG5pbXBvcnQge1ByZWNvbmRpdGlvbnN9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL1ByZWNvbmRpdGlvbnNcIjtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFByZWZzIHtcblxuICAgIC8vIFRPRE86IG1pZ3JhdGUgdG8gdXNpbmcgS2V5VmFsdWVTdG9yZVxuXG4gICAgLyoqXG4gICAgICogQSBtYXJrZWQgcHJlZiBpcyBhIHByZWYgdGhhdCBpcyBib29sZWFuIHRydWUgb3IgZmFsc2VcbiAgICAgKi9cbiAgICBwdWJsaWMgbWFyayhrZXk6IHN0cmluZywgdmFsdWU6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XG5cbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnNldChrZXksICd0cnVlJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldChrZXksICdmYWxzZScpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgdG9nZ2xlTWFya2VkKGtleTogc3RyaW5nLCB2YWx1ZTogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMubWFyayhrZXksICF0aGlzLmlzTWFya2VkKGtleSwgdmFsdWUpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaXNNYXJrZWQoa2V5OiBzdHJpbmcsIGRlZmF1bHRWYWx1ZTogYm9vbGVhbiA9IGZhbHNlKSB7XG5cbiAgICAgICAgY29uc3QgY3VycmVudFZhbHVlID1cbiAgICAgICAgICAgIHRoaXMuZ2V0KGtleSkuZ2V0T3JFbHNlKGAke2RlZmF1bHRWYWx1ZX1gKTtcblxuICAgICAgICByZXR1cm4gY3VycmVudFZhbHVlID09PSAndHJ1ZSc7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgbWFya0RlbGF5ZWQoa2V5OiBzdHJpbmcsIGR1cmF0aW9uOiBEdXJhdGlvblN0ciA9IFwiMXdcIikge1xuXG4gICAgICAgIGNvbnN0IGR1cmF0aW9uTVMgPSBUaW1lRHVyYXRpb25zLnRvTWlsbGlzKGR1cmF0aW9uKTtcbiAgICAgICAgY29uc3QgYWZ0ZXIgPSBEYXRlLm5vdygpICsgZHVyYXRpb25NUztcbiAgICAgICAgdGhpcy5zZXQoa2V5LCBgJHthZnRlcn1gKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBpc01hcmtlZERlbGF5ZWQoa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcblxuICAgICAgICBjb25zdCB2YWwgPSB0aGlzLmdldChrZXkpLmdldE9yRWxzZSgnJyk7XG5cbiAgICAgICAgaWYgKHZhbC5tYXRjaCgvWzAtOV0rLykpIHtcbiAgICAgICAgICAgIHJldHVybiBEYXRlLm5vdygpIDwgcGFyc2VJbnQodmFsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybiB0cnVlIGlmIHRoZSBnaXZlbiBwcmVmIGlzIGRlZmluZWQuXG4gICAgICovXG4gICAgcHVibGljIGRlZmluZWQoa2V5OiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KGtleSkuaXNQcmVzZW50KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGEgY3VycmVudCBwcmVmIHZhbHVlLlxuICAgICAqL1xuICAgIHB1YmxpYyBhYnN0cmFjdCBnZXQoa2V5OiBzdHJpbmcpOiBPcHRpb25hbDxzdHJpbmc+O1xuXG4gICAgLyoqXG4gICAgICogU2V0IGEgY3VycmVudCBwcmVmIHZhbHVlLlxuICAgICAqL1xuICAgIHB1YmxpYyBhYnN0cmFjdCBzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkO1xuXG4gICAgcHVibGljIGFic3RyYWN0IHRvRGljdCgpOiBTdHJpbmdUb1N0cmluZ0RpY3Q7XG5cbn1cblxuLyoqXG4gKiBBIHByZWZzIG9iamVjdCB0aGF0IGNhbiBiZSBwZXJzaXN0ZWQgdG8gZGlza1xuICovXG5leHBvcnQgaW50ZXJmYWNlIFBlcnNpc3RlbnRQcmVmcyBleHRlbmRzIFByZWZzIHtcblxuICAgIC8qKlxuICAgICAqIENvbW1pdCB0aGlzIHByZWZzLlxuICAgICAqL1xuICAgIGNvbW1pdCgpOiBQcm9taXNlPHZvaWQ+O1xuXG59XG5cbi8qKlxuICogUHJlZnMgb2JqZWN0IGp1c3QgYmFja2VkIGJ5IGEgbG9jYWwgZGljdGlvbmFyeS5cbiAqL1xuZXhwb3J0IGNsYXNzIERpY3Rpb25hcnlQcmVmcyBleHRlbmRzIFByZWZzIHtcblxuICAgIHByb3RlY3RlZCBkZWxlZ2F0ZTogU3RyaW5nVG9TdHJpbmdEaWN0ID0ge307XG5cbiAgICBjb25zdHJ1Y3RvcihkZWxlZ2F0ZTogU3RyaW5nVG9TdHJpbmdEaWN0ID0ge30pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5kZWxlZ2F0ZSA9IGRlbGVnYXRlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQoa2V5OiBzdHJpbmcpOiBPcHRpb25hbDxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIE9wdGlvbmFsLm9mKHRoaXMuZGVsZWdhdGVba2V5XSk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldChrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLmRlbGVnYXRlW2tleV0gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9EaWN0KCk6IFN0cmluZ1RvU3RyaW5nRGljdCB7XG4gICAgICAgIHJldHVybiB7Li4udGhpcy5kZWxlZ2F0ZX07XG4gICAgfVxuXG59XG5cbmV4cG9ydCBjbGFzcyBDb21wb3NpdGVQcmVmcyBpbXBsZW1lbnRzIFBlcnNpc3RlbnRQcmVmcyB7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcHJpbWFyeSBkZWxlZ2F0ZVxuICAgICAqL1xuICAgIHByaXZhdGUgZGVsZWdhdGU6IFBlcnNpc3RlbnRQcmVmcztcblxuICAgIHByaXZhdGUgZGVsZWdhdGVzOiBSZWFkb25seUFycmF5PFBlcnNpc3RlbnRQcmVmcz47XG5cbiAgICBjb25zdHJ1Y3RvcihkZWxlZ2F0ZXM6IFJlYWRvbmx5QXJyYXk8UGVyc2lzdGVudFByZWZzPikge1xuICAgICAgICB0aGlzLmRlbGVnYXRlID0gUHJlY29uZGl0aW9ucy5hc3NlcnRQcmVzZW50KGRlbGVnYXRlc1swXSwgJ2RlbGVnYXRlJyk7XG4gICAgICAgIHRoaXMuZGVsZWdhdGVzID0gZGVsZWdhdGVzO1xuICAgIH1cblxuICAgIHB1YmxpYyBkZWZpbmVkKGtleTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlbGVnYXRlLmRlZmluZWQoa2V5KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0KGtleTogc3RyaW5nKTogT3B0aW9uYWw8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlbGVnYXRlLmdldChrZXkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBpc01hcmtlZChrZXk6IHN0cmluZywgZGVmYXVsdFZhbHVlPzogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5kZWxlZ2F0ZS5pc01hcmtlZChrZXksIGRlZmF1bHRWYWx1ZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGlzTWFya2VkRGVsYXllZChrZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5kZWxlZ2F0ZS5pc01hcmtlZERlbGF5ZWQoa2V5KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbWFyayhrZXk6IHN0cmluZywgdmFsdWU/OiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlbGVnYXRlLm1hcmsoa2V5LCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgcHVibGljIG1hcmtEZWxheWVkKGtleTogc3RyaW5nLCBkdXJhdGlvbj86IHN0cmluZyk6IHZvaWQge1xuICAgICAgICByZXR1cm4gdGhpcy5kZWxlZ2F0ZS5tYXJrRGVsYXllZChrZXksIGR1cmF0aW9uKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9EaWN0KCk6IFN0cmluZ1RvU3RyaW5nRGljdCB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlbGVnYXRlLnRvRGljdCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b2dnbGVNYXJrZWQoa2V5OiBzdHJpbmcsIHZhbHVlPzogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICByZXR1cm4gdGhpcy50b2dnbGVNYXJrZWQoa2V5LCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGNvbW1pdCgpOiBQcm9taXNlPHZvaWQ+IHtcblxuICAgICAgICBmb3IgKGNvbnN0IGRlbGVnYXRlIG9mIHRoaXMuZGVsZWdhdGVzKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmRlbGVnYXRlLmNvbW1pdCgpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG5cbiAgICAgICAgZm9yIChjb25zdCBkZWxlZ2F0ZSBvZiB0aGlzLmRlbGVnYXRlcykge1xuICAgICAgICAgICAgdGhpcy5kZWxlZ2F0ZS5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgIH1cblxufVxuXG5leHBvcnQgY2xhc3MgTm9uUGVyc2lzdGVudFByZWZzIGV4dGVuZHMgRGljdGlvbmFyeVByZWZzIGltcGxlbWVudHMgUGVyc2lzdGVudFByZWZzIHtcblxuICAgIHB1YmxpYyBhc3luYyBjb21taXQoKTogUHJvbWlzZTx2b2lkPiB7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTdHJpbmdUb1N0cmluZ0RpY3Qge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZztcbn1cbiJdfQ==