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
class TimeAnnotatingLogger {
    constructor(delegate) {
        this.delegate = delegate;
        this.name = `time-annotating-logger -> ${delegate.name}`;
    }
    notice(msg, ...args) {
        this.delegate.notice(this.createTimestamp() + `: ${msg}`, ...args);
    }
    info(msg, ...args) {
        this.delegate.info(this.createTimestamp() + `: ${msg}`, ...args);
    }
    warn(msg, ...args) {
        this.delegate.warn(this.createTimestamp() + `: ${msg}`, ...args);
    }
    error(msg, ...args) {
        this.delegate.error(this.createTimestamp() + `: ${msg}`, ...args);
    }
    verbose(msg, ...args) {
        this.delegate.verbose(this.createTimestamp() + `: ${msg}`, ...args);
    }
    debug(msg, ...args) {
        this.delegate.debug(this.createTimestamp() + `: ${msg}`, ...args);
    }
    sync() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    createTimestamp() {
        return new Date().toUTCString();
    }
}
exports.TimeAnnotatingLogger = TimeAnnotatingLogger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGltZUFubm90YXRpbmdMb2dnZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJUaW1lQW5ub3RhdGluZ0xvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE1BQWEsb0JBQW9CO0lBSzdCLFlBQVksUUFBaUI7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLElBQUksR0FBRyw2QkFBNkIsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzdELENBQUM7SUFFTSxNQUFNLENBQUMsR0FBVyxFQUFFLEdBQUcsSUFBVztRQUNyQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLEdBQUcsS0FBSyxHQUFHLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFTSxJQUFJLENBQUMsR0FBVyxFQUFFLEdBQUcsSUFBVztRQUNuQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLEdBQUcsS0FBSyxHQUFHLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFFTSxJQUFJLENBQUMsR0FBVyxFQUFFLEdBQUcsSUFBVztRQUNuQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLEdBQUcsS0FBSyxHQUFHLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFFTSxLQUFLLENBQUMsR0FBVyxFQUFFLEdBQUcsSUFBVztRQUNwQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLEdBQUcsS0FBSyxHQUFHLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFFTSxPQUFPLENBQUMsR0FBVyxFQUFFLEdBQUcsSUFBVztRQUN0QyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLEdBQUcsS0FBSyxHQUFHLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFTSxLQUFLLENBQUMsR0FBVyxFQUFFLEdBQUcsSUFBVztRQUNwQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLEdBQUcsS0FBSyxHQUFHLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFFWSxJQUFJOztRQUVqQixDQUFDO0tBQUE7SUFFTyxlQUFlO1FBQ25CLE9BQU8sSUFBSSxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0NBRUo7QUExQ0Qsb0RBMENDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTaW1wbGUgbG9nZ2VyIHRoYXQganVzdCB3cml0ZXMgdG8gdGhlIGNvbnNvbGUuXG4gKi9cbmltcG9ydCB7SUxvZ2dlcn0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9sb2dnZXIvSUxvZ2dlcic7XG5cbi8qKlxuICogQW5ub3RhdGVzIGxvZ3MgYnkgaW5jbHVkaW5nIHRoZSB0aW1lLlxuICovXG5leHBvcnQgY2xhc3MgVGltZUFubm90YXRpbmdMb2dnZXIgaW1wbGVtZW50cyBJTG9nZ2VyIHtcblxuICAgIHB1YmxpYyByZWFkb25seSBuYW1lOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSByZWFkb25seSBkZWxlZ2F0ZTogSUxvZ2dlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRlbGVnYXRlOiBJTG9nZ2VyKSB7XG4gICAgICAgIHRoaXMuZGVsZWdhdGUgPSBkZWxlZ2F0ZTtcbiAgICAgICAgdGhpcy5uYW1lID0gYHRpbWUtYW5ub3RhdGluZy1sb2dnZXIgLT4gJHtkZWxlZ2F0ZS5uYW1lfWA7XG4gICAgfVxuXG4gICAgcHVibGljIG5vdGljZShtc2c6IHN0cmluZywgLi4uYXJnczogYW55W10pIHtcbiAgICAgICAgdGhpcy5kZWxlZ2F0ZS5ub3RpY2UodGhpcy5jcmVhdGVUaW1lc3RhbXAoKSArIGA6ICR7bXNnfWAsIC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbmZvKG1zZzogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICB0aGlzLmRlbGVnYXRlLmluZm8odGhpcy5jcmVhdGVUaW1lc3RhbXAoKSArIGA6ICR7bXNnfWAsIC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIHB1YmxpYyB3YXJuKG1zZzogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICB0aGlzLmRlbGVnYXRlLndhcm4odGhpcy5jcmVhdGVUaW1lc3RhbXAoKSArIGA6ICR7bXNnfWAsIC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIHB1YmxpYyBlcnJvcihtc2c6IHN0cmluZywgLi4uYXJnczogYW55W10pIHtcbiAgICAgICAgdGhpcy5kZWxlZ2F0ZS5lcnJvcih0aGlzLmNyZWF0ZVRpbWVzdGFtcCgpICsgYDogJHttc2d9YCwgLi4uYXJncyk7XG4gICAgfVxuXG4gICAgcHVibGljIHZlcmJvc2UobXNnOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICAgIHRoaXMuZGVsZWdhdGUudmVyYm9zZSh0aGlzLmNyZWF0ZVRpbWVzdGFtcCgpICsgYDogJHttc2d9YCwgLi4uYXJncyk7XG4gICAgfVxuXG4gICAgcHVibGljIGRlYnVnKG1zZzogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICB0aGlzLmRlbGVnYXRlLmRlYnVnKHRoaXMuY3JlYXRlVGltZXN0YW1wKCkgKyBgOiAke21zZ31gLCAuLi5hcmdzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgc3luYygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgLy8gbm9vcFxuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlVGltZXN0YW1wKCkge1xuICAgICAgICByZXR1cm4gbmV3IERhdGUoKS50b1VUQ1N0cmluZygpO1xuICAgIH1cblxufVxuIl19