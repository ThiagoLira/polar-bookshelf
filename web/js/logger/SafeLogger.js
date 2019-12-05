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
class SafeLogger {
    constructor(delegate) {
        this.delegate = delegate;
        this.name = 'safe-logger+' + delegate.name;
    }
    notice(msg, ...args) {
        this.withTryCatch(() => this.delegate.notice(msg, ...args));
    }
    warn(msg, ...args) {
        this.withTryCatch(() => this.delegate.warn(msg, ...args));
    }
    error(msg, ...args) {
        this.withTryCatch(() => this.delegate.error(msg, ...args));
    }
    info(msg, ...args) {
        this.withTryCatch(() => this.delegate.info(msg, ...args));
    }
    verbose(msg, ...args) {
        this.withTryCatch(() => this.delegate.verbose(msg, ...args));
    }
    debug(msg, ...args) {
        this.withTryCatch(() => this.delegate.debug(msg, ...args));
    }
    sync() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.delegate.sync();
        });
    }
    withTryCatch(logFunction) {
        try {
            logFunction();
        }
        catch (e) {
            console.error("Unable to log: ", e);
        }
    }
}
exports.SafeLogger = SafeLogger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2FmZUxvZ2dlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlNhZmVMb2dnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFVQSxNQUFhLFVBQVU7SUFNbkIsWUFBWSxRQUFpQjtRQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLGNBQWMsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDO0lBQy9DLENBQUM7SUFFTSxNQUFNLENBQUMsR0FBVyxFQUFFLEdBQUcsSUFBVztRQUNyQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVNLElBQUksQ0FBQyxHQUFXLEVBQUUsR0FBRyxJQUFXO1FBQ25DLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRU0sS0FBSyxDQUFDLEdBQVcsRUFBRSxHQUFHLElBQVc7UUFDcEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFTSxJQUFJLENBQUMsR0FBVyxFQUFFLEdBQUcsSUFBVztRQUNuQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVNLE9BQU8sQ0FBQyxHQUFXLEVBQUUsR0FBRyxJQUFXO1FBQ3RDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRU0sS0FBSyxDQUFDLEdBQVcsRUFBRSxHQUFHLElBQVc7UUFDcEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFHWSxJQUFJOztZQUNiLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMvQixDQUFDO0tBQUE7SUFFTyxZQUFZLENBQUMsV0FBdUI7UUFFeEMsSUFBSTtZQUNBLFdBQVcsRUFBRSxDQUFDO1NBQ2pCO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFHUixPQUFPLENBQUMsS0FBSyxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3ZDO0lBRUwsQ0FBQztDQUVKO0FBcERELGdDQW9EQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU2ltcGxlIGxvZ2dlciB0aGF0IGp1c3Qgd3JpdGVzIHRvIHRoZSBjb25zb2xlLlxuICovXG5pbXBvcnQge0lMb2dnZXJ9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbG9nZ2VyL0lMb2dnZXInO1xuXG4vKipcbiAqIEEgbG9nZ2VyIHRoYXQgY2FsbHMgYSBkZWxlZ2F0ZSB3aXRoIHRyeS9jYXRjaCBhbmQgdGhlbiBkb2VzIGEgY29uc29sZS5lcnJvclxuICogaWYgdGhlIHVuZGVybHlpbmcgbG9nZ2VyIGZhaWxzLlxuICpcbiAqL1xuZXhwb3J0IGNsYXNzIFNhZmVMb2dnZXIgaW1wbGVtZW50cyBJTG9nZ2VyIHtcblxuICAgIHB1YmxpYyByZWFkb25seSBuYW1lOiBzdHJpbmcgO1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBkZWxlZ2F0ZTogSUxvZ2dlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRlbGVnYXRlOiBJTG9nZ2VyKSB7XG4gICAgICAgIHRoaXMuZGVsZWdhdGUgPSBkZWxlZ2F0ZTtcbiAgICAgICAgdGhpcy5uYW1lID0gJ3NhZmUtbG9nZ2VyKycgKyBkZWxlZ2F0ZS5uYW1lO1xuICAgIH1cblxuICAgIHB1YmxpYyBub3RpY2UobXNnOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICAgIHRoaXMud2l0aFRyeUNhdGNoKCgpID0+IHRoaXMuZGVsZWdhdGUubm90aWNlKG1zZywgLi4uYXJncykpO1xuICAgIH1cblxuICAgIHB1YmxpYyB3YXJuKG1zZzogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICB0aGlzLndpdGhUcnlDYXRjaCgoKSA9PiB0aGlzLmRlbGVnYXRlLndhcm4obXNnLCAuLi5hcmdzKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGVycm9yKG1zZzogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICB0aGlzLndpdGhUcnlDYXRjaCgoKSA9PiB0aGlzLmRlbGVnYXRlLmVycm9yKG1zZywgLi4uYXJncykpO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbmZvKG1zZzogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICB0aGlzLndpdGhUcnlDYXRjaCgoKSA9PiB0aGlzLmRlbGVnYXRlLmluZm8obXNnLCAuLi5hcmdzKSk7XG4gICAgfVxuXG4gICAgcHVibGljIHZlcmJvc2UobXNnOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICAgIHRoaXMud2l0aFRyeUNhdGNoKCgpID0+IHRoaXMuZGVsZWdhdGUudmVyYm9zZShtc2csIC4uLmFyZ3MpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGVidWcobXNnOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICAgIHRoaXMud2l0aFRyeUNhdGNoKCgpID0+IHRoaXMuZGVsZWdhdGUuZGVidWcobXNnLCAuLi5hcmdzKSk7XG4gICAgfVxuXG5cbiAgICBwdWJsaWMgYXN5bmMgc3luYygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgYXdhaXQgdGhpcy5kZWxlZ2F0ZS5zeW5jKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB3aXRoVHJ5Q2F0Y2gobG9nRnVuY3Rpb246ICgpID0+IHZvaWQpIHtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbG9nRnVuY3Rpb24oKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgLy8gTk9URSB0aGF0IHdlIGNhbid0IGxvZyBhbnl0aGluZyBzYWZlbHkgYWJvdXQgdGhlIG9yaWdpbmFsXG4gICAgICAgICAgICAvLyBmYWlsdXJlIGJlY2F1c2UgaWYgd2UgZG8gdGhlbiB3ZSBtaWdodCBjYXVzZSB0aGUgc2FtZSBwcm9ibGVtLlxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlVuYWJsZSB0byBsb2c6IFwiLCBlKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG59XG4iXX0=