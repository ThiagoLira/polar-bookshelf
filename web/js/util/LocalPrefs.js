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
class LocalPrefs {
    static mark(key, value = true) {
        if (value) {
            this.set(key, 'true');
        }
        else {
            this.set(key, 'false');
        }
    }
    static toggle(key, value = false) {
        this.mark(key, !this.isMarked(key, value));
    }
    static markOnceRequested(key) {
        const result = this.isMarked(key);
        this.mark(key);
        return result;
    }
    static markOnceExecuted(key, handler, otherwise) {
        return __awaiter(this, void 0, void 0, function* () {
            const marked = this.isMarked(key);
            if (marked) {
                if (otherwise) {
                    yield otherwise();
                }
                return;
            }
            yield handler();
            this.mark(key);
        });
    }
    static isMarked(key, defaultValue = false) {
        const currentValue = this.get(key).getOrElse(`${defaultValue}`);
        return currentValue === 'true';
    }
    static isDelayed(key, duration) {
        const durationMS = TimeDurations_1.TimeDurations.toMillis(duration);
        const pref = this.get(key).getOrUndefined();
        if (pref && pref.match(/[0-9]+/)) {
            const until = parseInt(pref, 10);
            const now = Date.now();
            if (now < until) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
    static computeDelay(key) {
        const pref = this.get(key).getOrUndefined();
        if (pref && pref.match(/[0-9]+/)) {
            const until = parseInt(pref, 10);
            const now = Date.now();
            return until - now;
        }
        else {
            return undefined;
        }
    }
    static markDelayed(key, duration) {
        const durationMS = TimeDurations_1.TimeDurations.toMillis(duration);
        const until = Date.now() + durationMS;
        this.set(key, `${until}`);
    }
    static defined(key) {
        return this.get(key).isPresent();
    }
    static get(key) {
        const storage = StorageBackends.get();
        return storage.get(key);
    }
    static set(key, value) {
        if (typeof value === 'number') {
            value = value.toString();
        }
        const storage = StorageBackends.get();
        storage.set(key, value);
    }
}
exports.LocalPrefs = LocalPrefs;
class StorageBackends {
    static get() {
        if (this.delegate) {
            return this.delegate;
        }
        return new LocalStorageBackend();
    }
}
exports.StorageBackends = StorageBackends;
class LocalStorageBackend {
    get(key) {
        return Optional_1.Optional.of(window.localStorage.getItem(key));
    }
    set(key, value) {
        window.localStorage.setItem(key, value);
    }
}
class MockStorageBackend {
    constructor() {
        this.backing = {};
    }
    get(key) {
        return Optional_1.Optional.of(this.backing[key]);
    }
    set(key, value) {
        this.backing[key] = value;
    }
}
exports.MockStorageBackend = MockStorageBackend;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9jYWxQcmVmcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkxvY2FsUHJlZnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMkQ7QUFDM0QsdUVBQStFO0FBTS9FLE1BQWEsVUFBVTtJQUVaLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBVyxFQUFFLFFBQWlCLElBQUk7UUFFakQsSUFBSSxLQUFLLEVBQUU7WUFDUCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztTQUN6QjthQUFNO1lBQ0gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDMUI7SUFDTCxDQUFDO0lBRU0sTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFXLEVBQUUsUUFBaUIsS0FBSztRQUNwRCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUtNLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxHQUFXO1FBRXZDLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVmLE9BQU8sTUFBTSxDQUFDO0lBRWxCLENBQUM7SUFFTSxNQUFNLENBQU8sZ0JBQWdCLENBQUMsR0FBVyxFQUNYLE9BQTRCLEVBQzVCLFNBQStCOztZQUVoRSxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRWxDLElBQUksTUFBTSxFQUFFO2dCQUVSLElBQUksU0FBUyxFQUFFO29CQUNYLE1BQU0sU0FBUyxFQUFFLENBQUM7aUJBQ3JCO2dCQUVELE9BQU87YUFDVjtZQUVELE1BQU0sT0FBTyxFQUFFLENBQUM7WUFFaEIsSUFBSSxDQUFD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ZixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDeEI7UUFFRCxPQUFPLElBQUksbUJBQW1CLEVBQUUsQ0FBQztJQUVyQyxDQUFDO0NBRUo7QUFkRCwwQ0FjQztBQVVELE1BQU0sbUJBQW1CO0lBRWQsR0FBRyxDQUFDLEdBQVc7UUFDbEIsT0FBTyxtQkFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFTSxHQUFHLENBQUMsR0FBVyxFQUFFLEtBQWE7UUFDakMsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzVDLENBQUM7Q0FFSjtBQUVELE1BQWEsa0JBQWtCO0lBQS9CO1FBRVksWUFBTyxHQUE0QixFQUFFLENBQUM7SUFVbEQsQ0FBQztJQVJVLEdBQUcsQ0FBQyxHQUFXO1FBQ2xCLE9BQU8sbUJBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFTSxHQUFHLENBQUMsR0FBVyxFQUFFLEtBQWE7UUFDakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7SUFDOUIsQ0FBQztDQUVKO0FBWkQsZ0RBWUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge09wdGlvbmFsfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvdHMvT3B0aW9uYWwnO1xuaW1wb3J0IHtEdXJhdGlvblN0ciwgVGltZUR1cmF0aW9uc30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL1RpbWVEdXJhdGlvbnMnO1xuaW1wb3J0IHtEdXJhdGlvbk1TfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvVGltZUR1cmF0aW9ucyc7XG5cbi8qKlxuICogQERlcHJlY2F0ZWQgdXNlIHRoZSBuZXcgSVByZWZzIHN5c3RlbXNcbiAqL1xuZXhwb3J0IGNsYXNzIExvY2FsUHJlZnMge1xuXG4gICAgcHVibGljIHN0YXRpYyBtYXJrKGtleTogc3RyaW5nLCB2YWx1ZTogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcblxuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KGtleSwgJ3RydWUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KGtleSwgJ2ZhbHNlJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHRvZ2dsZShrZXk6IHN0cmluZywgdmFsdWU6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICB0aGlzLm1hcmsoa2V5LCAhIHRoaXMuaXNNYXJrZWQoa2V5LCB2YWx1ZSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBpbml0aWFsIHZhbHVlIGlzIGZhbHNlLCBBZnRlciB0aGF0IHRoZSB2YWx1ZSBpcyB0cnVlLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgbWFya09uY2VSZXF1ZXN0ZWQoa2V5OiBzdHJpbmcpIHtcblxuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLmlzTWFya2VkKGtleSk7XG5cbiAgICAgICAgdGhpcy5tYXJrKGtleSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcblxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgbWFya09uY2VFeGVjdXRlZChrZXk6IHN0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlcjogKCkgPT4gUHJvbWlzZTx2b2lkPixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXJ3aXNlPzogKCkgPT4gUHJvbWlzZTx2b2lkPik6IFByb21pc2U8dm9pZD4ge1xuXG4gICAgICAgIGNvbnN0IG1hcmtlZCA9IHRoaXMuaXNNYXJrZWQoa2V5KTtcblxuICAgICAgICBpZiAobWFya2VkKSB7XG5cbiAgICAgICAgICAgIGlmIChvdGhlcndpc2UpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCBvdGhlcndpc2UoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgYXdhaXQgaGFuZGxlcigpO1xuXG4gICAgICAgIHRoaXMubWFyayhrZXkpO1xuXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBpc01hcmtlZChrZXk6IHN0cmluZywgZGVmYXVsdFZhbHVlOiBib29sZWFuID0gZmFsc2UpIHtcblxuICAgICAgICBjb25zdCBjdXJyZW50VmFsdWUgPVxuICAgICAgICAgICAgdGhpcy5nZXQoa2V5KS5nZXRPckVsc2UoYCR7ZGVmYXVsdFZhbHVlfWApO1xuXG4gICAgICAgIHJldHVybiBjdXJyZW50VmFsdWUgPT09ICd0cnVlJztcblxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgaXNEZWxheWVkKGtleTogc3RyaW5nLCBkdXJhdGlvbjogRHVyYXRpb25TdHIpIHtcblxuICAgICAgICBjb25zdCBkdXJhdGlvbk1TID0gVGltZUR1cmF0aW9ucy50b01pbGxpcyhkdXJhdGlvbik7XG5cbiAgICAgICAgY29uc3QgcHJlZiA9IHRoaXMuZ2V0KGtleSkuZ2V0T3JVbmRlZmluZWQoKTtcblxuICAgICAgICBpZiAocHJlZiAmJiBwcmVmLm1hdGNoKC9bMC05XSsvKSkge1xuXG4gICAgICAgICAgICBjb25zdCB1bnRpbCA9IHBhcnNlSW50KHByZWYsIDEwKTtcbiAgICAgICAgICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG5cbiAgICAgICAgICAgIGlmIChub3cgPCB1bnRpbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29tcHV0ZSBob3cgbG9uZyB0aGlzIGl0ZW0gaXMgZGVsYXllZC4gUmV0dXJucyBhIHBvc2l0aXZlIG51bWJlciBmb3IgdGhlXG4gICAgICogZGVsYXkgb3IgYSBuZWdhdGl2ZSBudW1iZXIgaWYgdGhlIGl0ZW0gZGVsYXkgaGFzIGV4cGlyZWQuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBjb21wdXRlRGVsYXkoa2V5OiBzdHJpbmcpOiBEdXJhdGlvbk1TIHwgdW5kZWZpbmVkIHtcblxuICAgICAgICBjb25zdCBwcmVmID0gdGhpcy5nZXQoa2V5KS5nZXRPclVuZGVmaW5lZCgpO1xuXG4gICAgICAgIGlmIChwcmVmICYmIHByZWYubWF0Y2goL1swLTldKy8pKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IHVudGlsID0gcGFyc2VJbnQocHJlZiwgMTApO1xuICAgICAgICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcblxuICAgICAgICAgICAgcmV0dXJuIHVudGlsIC0gbm93O1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIG1hcmtEZWxheWVkKGtleTogc3RyaW5nLCBkdXJhdGlvbjogRHVyYXRpb25TdHIpIHtcblxuICAgICAgICBjb25zdCBkdXJhdGlvbk1TID0gVGltZUR1cmF0aW9ucy50b01pbGxpcyhkdXJhdGlvbik7XG4gICAgICAgIGNvbnN0IHVudGlsID0gRGF0ZS5ub3coKSArIGR1cmF0aW9uTVM7XG4gICAgICAgIHRoaXMuc2V0KGtleSwgYCR7dW50aWx9YCk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gdHJ1ZSBpZiB0aGUgZ2l2ZW4gcHJlZiBpcyBkZWZpbmVkLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgZGVmaW5lZChrZXk6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoa2V5KS5pc1ByZXNlbnQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldChrZXk6IHN0cmluZyk6IE9wdGlvbmFsPHN0cmluZz4ge1xuXG4gICAgICAgIGNvbnN0IHN0b3JhZ2UgPSBTdG9yYWdlQmFja2VuZHMuZ2V0KCk7XG5cbiAgICAgICAgcmV0dXJuIHN0b3JhZ2UuZ2V0KGtleSk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpOiB2b2lkIHtcblxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS50b1N0cmluZygpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc3RvcmFnZSA9IFN0b3JhZ2VCYWNrZW5kcy5nZXQoKTtcblxuICAgICAgICBzdG9yYWdlLnNldChrZXksIHZhbHVlKTtcblxuICAgIH1cblxufVxuXG5leHBvcnQgY2xhc3MgU3RvcmFnZUJhY2tlbmRzIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgZGVsZWdhdGU/OiBJU3RvcmFnZUJhY2tlbmQ7XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCgpIHtcblxuICAgICAgICBpZiAodGhpcy5kZWxlZ2F0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVsZWdhdGU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3IExvY2FsU3RvcmFnZUJhY2tlbmQoKTtcblxuICAgIH1cblxufVxuXG5pbnRlcmZhY2UgSVN0b3JhZ2VCYWNrZW5kIHtcblxuICAgIGdldChrZXk6IHN0cmluZyk6IE9wdGlvbmFsPHN0cmluZz47XG5cbiAgICBzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkO1xuXG59XG5cbmNsYXNzIExvY2FsU3RvcmFnZUJhY2tlbmQge1xuXG4gICAgcHVibGljIGdldChrZXk6IHN0cmluZyk6IE9wdGlvbmFsPHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gT3B0aW9uYWwub2Yod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgdmFsdWUpO1xuICAgIH1cblxufVxuXG5leHBvcnQgY2xhc3MgTW9ja1N0b3JhZ2VCYWNrZW5kIHtcblxuICAgIHByaXZhdGUgYmFja2luZzoge1trZXk6IHN0cmluZ106IHN0cmluZ30gPSB7fTtcblxuICAgIHB1YmxpYyBnZXQoa2V5OiBzdHJpbmcpOiBPcHRpb25hbDxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIE9wdGlvbmFsLm9mKHRoaXMuYmFja2luZ1trZXldKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYmFja2luZ1trZXldID0gdmFsdWU7XG4gICAgfVxuXG59XG4iXX0=