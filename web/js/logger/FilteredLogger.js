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
const LogLevel_1 = require("./LogLevel");
class FilteredLogger {
    constructor(delegate, level = LogLevel_1.LogLevel.INFO) {
        this.delegate = delegate;
        this.level = level;
        this.name = `filtered-logger -> ${delegate.name}`;
    }
    notice(msg, ...args) {
        this.delegate.notice(msg, ...args);
    }
    debug(msg, ...args) {
        if (this.level < LogLevel_1.LogLevel.DEBUG) {
            return;
        }
        this.delegate.debug(msg, ...args);
    }
    verbose(msg, ...args) {
        if (this.level < LogLevel_1.LogLevel.VERBOSE) {
            return;
        }
        this.delegate.verbose(msg, ...args);
    }
    info(msg, ...args) {
        if (this.level < LogLevel_1.LogLevel.INFO) {
            return;
        }
        this.delegate.info(msg, ...args);
    }
    warn(msg, ...args) {
        if (this.level < LogLevel_1.LogLevel.WARN) {
            return;
        }
        this.delegate.warn(msg, ...args);
    }
    error(msg, ...args) {
        if (this.level < LogLevel_1.LogLevel.ERROR) {
            return;
        }
        this.delegate.error(msg, ...args);
    }
    sync() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.delegate.sync();
        });
    }
}
exports.FilteredLogger = FilteredLogger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsdGVyZWRMb2dnZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJGaWx0ZXJlZExvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBLHlDQUFvQztBQUVwQyxNQUFhLGNBQWM7SUFFdkIsWUFBWSxRQUFpQixFQUFFLFFBQWtCLG1CQUFRLENBQUMsSUFBSTtRQUMxRCxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLHNCQUFzQixRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdEQsQ0FBQztJQVFNLE1BQU0sQ0FBQyxHQUFXLEVBQUUsR0FBRyxJQUFXO1FBQ3JDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFTSxLQUFLLENBQUMsR0FBVyxFQUFFLEdBQUcsSUFBVztRQUNwQyxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsbUJBQVEsQ0FBQyxLQUFLLEVBQUU7WUFBRSxPQUFPO1NBQUU7UUFDNUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVNLE9BQU8sQ0FBQyxHQUFXLEVBQUUsR0FBRyxJQUFXO1FBQ3RDLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxtQkFBUSxDQUFDLE9BQU8sRUFBRTtZQUFFLE9BQU87U0FBRTtRQUM5QyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRU0sSUFBSSxDQUFDLEdBQVcsRUFBRSxHQUFHLElBQVc7UUFDbkMsSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLG1CQUFRLENBQUMsSUFBSSxFQUFFO1lBQUUsT0FBTztTQUFFO1FBQzNDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFTSxJQUFJLENBQUMsR0FBVyxFQUFFLEdBQUcsSUFBVztRQUNuQyxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsbUJBQVEsQ0FBQyxJQUFJLEVBQUU7WUFBRSxPQUFPO1NBQUU7UUFDM0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVNLEtBQUssQ0FBQyxHQUFXLEVBQUUsR0FBRyxJQUFXO1FBQ3BDLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxtQkFBUSxDQUFDLEtBQUssRUFBRTtZQUFFLE9BQU87U0FBRTtRQUM1QyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRVksSUFBSTs7WUFDYixNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDL0IsQ0FBQztLQUFBO0NBRUo7QUEvQ0Qsd0NBK0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJTG9nZ2VyfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL2xvZ2dlci9JTG9nZ2VyJztcbmltcG9ydCB7TG9nTGV2ZWx9IGZyb20gJy4vTG9nTGV2ZWwnO1xuXG5leHBvcnQgY2xhc3MgRmlsdGVyZWRMb2dnZXIgaW1wbGVtZW50cyBJTG9nZ2VyIHtcblxuICAgIGNvbnN0cnVjdG9yKGRlbGVnYXRlOiBJTG9nZ2VyLCBsZXZlbDogTG9nTGV2ZWwgPSBMb2dMZXZlbC5JTkZPKSB7XG4gICAgICAgIHRoaXMuZGVsZWdhdGUgPSBkZWxlZ2F0ZTtcbiAgICAgICAgdGhpcy5sZXZlbCA9IGxldmVsO1xuICAgICAgICB0aGlzLm5hbWUgPSBgZmlsdGVyZWQtbG9nZ2VyIC0+ICR7ZGVsZWdhdGUubmFtZX1gO1xuICAgIH1cblxuICAgIHB1YmxpYyByZWFkb25seSBsZXZlbDogTG9nTGV2ZWw7XG5cbiAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBkZWxlZ2F0ZTogSUxvZ2dlcjtcblxuICAgIHB1YmxpYyBub3RpY2UobXNnOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICAgIHRoaXMuZGVsZWdhdGUubm90aWNlKG1zZywgLi4uYXJncyk7XG4gICAgfVxuXG4gICAgcHVibGljIGRlYnVnKG1zZzogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICBpZiAodGhpcy5sZXZlbCA8IExvZ0xldmVsLkRFQlVHKSB7IHJldHVybjsgfVxuICAgICAgICB0aGlzLmRlbGVnYXRlLmRlYnVnKG1zZywgLi4uYXJncyk7XG4gICAgfVxuXG4gICAgcHVibGljIHZlcmJvc2UobXNnOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICAgIGlmICh0aGlzLmxldmVsIDwgTG9nTGV2ZWwuVkVSQk9TRSkgeyByZXR1cm47IH1cbiAgICAgICAgdGhpcy5kZWxlZ2F0ZS52ZXJib3NlKG1zZywgLi4uYXJncyk7XG4gICAgfVxuXG4gICAgcHVibGljIGluZm8obXNnOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICAgIGlmICh0aGlzLmxldmVsIDwgTG9nTGV2ZWwuSU5GTykgeyByZXR1cm47IH1cbiAgICAgICAgdGhpcy5kZWxlZ2F0ZS5pbmZvKG1zZywgLi4uYXJncyk7XG4gICAgfVxuXG4gICAgcHVibGljIHdhcm4obXNnOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICAgIGlmICh0aGlzLmxldmVsIDwgTG9nTGV2ZWwuV0FSTikgeyByZXR1cm47IH1cbiAgICAgICAgdGhpcy5kZWxlZ2F0ZS53YXJuKG1zZywgLi4uYXJncyk7XG4gICAgfVxuXG4gICAgcHVibGljIGVycm9yKG1zZzogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICBpZiAodGhpcy5sZXZlbCA8IExvZ0xldmVsLkVSUk9SKSB7IHJldHVybjsgfVxuICAgICAgICB0aGlzLmRlbGVnYXRlLmVycm9yKG1zZywgLi4uYXJncyk7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIHN5bmMoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGF3YWl0IHRoaXMuZGVsZWdhdGUuc3luYygpO1xuICAgIH1cblxufVxuIl19