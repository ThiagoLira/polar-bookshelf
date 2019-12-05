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
const SafeLogger_1 = require("./SafeLogger");
class MultiLogger {
    constructor(...delegates) {
        delegates = MultiLogger.toSafeLoggers(delegates);
        this.delegates = delegates;
        this.name = 'multi-logger|'
            + this.delegates.map(delegate => delegate.name).join("+");
    }
    notice(msg, ...args) {
        this.delegates.forEach(delegate => delegate.notice(msg, ...args));
    }
    warn(msg, ...args) {
        this.delegates.forEach(delegate => delegate.warn(msg, ...args));
    }
    error(msg, ...args) {
        this.delegates.forEach(delegate => delegate.error(msg, ...args));
    }
    info(msg, ...args) {
        this.delegates.forEach(delegate => delegate.info(msg, ...args));
    }
    verbose(msg, ...args) {
        this.delegates.forEach(delegate => delegate.verbose(msg, ...args));
    }
    debug(msg, ...args) {
        this.delegates.forEach(delegate => delegate.debug(msg, ...args));
    }
    sync() {
        return __awaiter(this, void 0, void 0, function* () {
            for (const delegate of this.delegates) {
                yield delegate.sync();
            }
        });
    }
    static toSafeLoggers(delegates) {
        return delegates.map(current => {
            if (current instanceof SafeLogger_1.SafeLogger) {
                return current;
            }
            else {
                return new SafeLogger_1.SafeLogger(current);
            }
        });
    }
}
exports.MultiLogger = MultiLogger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTXVsdGlMb2dnZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJNdWx0aUxvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUlBLDZDQUF3QztBQUt4QyxNQUFhLFdBQVc7SUFNcEIsWUFBWSxHQUFHLFNBQW9CO1FBSS9CLFNBQVMsR0FBRyxXQUFXLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRWpELElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBRTNCLElBQUksQ0FBQyxJQUFJLEdBQUcsZUFBZTtjQUNyQixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVNLE1BQU0sQ0FBQyxHQUFXLEVBQUUsR0FBRyxJQUFXO1FBQ3JDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFFTSxJQUFJLENBQUMsR0FBVyxFQUFFLEdBQUcsSUFBVztRQUNuQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRU0sS0FBSyxDQUFDLEdBQVcsRUFBRSxHQUFHLElBQVc7UUFDcEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUVNLElBQUksQ0FBQyxHQUFXLEVBQUUsR0FBRyxJQUFXO1FBQ25DLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFTSxPQUFPLENBQUMsR0FBVyxFQUFFLEdBQUcsSUFBVztRQUN0QyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRU0sS0FBSyxDQUFDLEdBQVcsRUFBRSxHQUFHLElBQVc7UUFDcEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUVZLElBQUk7O1lBRWIsS0FBSyxNQUFNLFFBQVEsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNuQyxNQUFNLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUN6QjtRQUVMLENBQUM7S0FBQTtJQUVPLE1BQU0sQ0FBQyxhQUFhLENBQUMsU0FBb0I7UUFFN0MsT0FBTyxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQzNCLElBQUksT0FBTyxZQUFZLHVCQUFVLEVBQUU7Z0JBQy9CLE9BQU8sT0FBTyxDQUFDO2FBQ2xCO2lCQUFNO2dCQUNILE9BQU8sSUFBSSx1QkFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ2xDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDO0NBSUo7QUFoRUQsa0NBZ0VDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTaW1wbGUgbG9nZ2VyIHRoYXQganVzdCB3cml0ZXMgdG8gdGhlIGNvbnNvbGUuXG4gKi9cbmltcG9ydCB7SUxvZ2dlcn0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9sb2dnZXIvSUxvZ2dlcic7XG5pbXBvcnQge1NhZmVMb2dnZXJ9IGZyb20gJy4vU2FmZUxvZ2dlcic7XG5cbi8qKlxuICogQWxsb3dzIHVzIHRvIGxvZyB0byBtdWx0aXBsZSBkZWxlZ2F0ZXMgYXQgb25jZS5cbiAqL1xuZXhwb3J0IGNsYXNzIE11bHRpTG9nZ2VyIGltcGxlbWVudHMgSUxvZ2dlciB7XG5cbiAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZTogc3RyaW5nIDtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgZGVsZWdhdGVzOiBJTG9nZ2VyW107XG5cbiAgICBjb25zdHJ1Y3RvciguLi5kZWxlZ2F0ZXM6IElMb2dnZXJbXSkge1xuXG4gICAgICAgIC8vIE1ha2UgdGhlIGRlbGVnYXRlcyB1c2Ugc2FmZSBsb2dnZXJzIHNvIHRoYXQgaWYgYW55IG9uZSBmYWlscyB0aGVcbiAgICAgICAgLy8gZXhjZXB0aW9ucyBhcmUgaGFuZGxlZCBncmFjZWZ1bGx5IGFuZCBkb24ndCBjaG9rZSBvdGhlciBsb2dnZXJzLlxuICAgICAgICBkZWxlZ2F0ZXMgPSBNdWx0aUxvZ2dlci50b1NhZmVMb2dnZXJzKGRlbGVnYXRlcyk7XG5cbiAgICAgICAgdGhpcy5kZWxlZ2F0ZXMgPSBkZWxlZ2F0ZXM7XG5cbiAgICAgICAgdGhpcy5uYW1lID0gJ211bHRpLWxvZ2dlcnwnXG4gICAgICAgICAgICArIHRoaXMuZGVsZWdhdGVzLm1hcChkZWxlZ2F0ZSA9PiBkZWxlZ2F0ZS5uYW1lKS5qb2luKFwiK1wiKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbm90aWNlKG1zZzogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICB0aGlzLmRlbGVnYXRlcy5mb3JFYWNoKGRlbGVnYXRlID0+IGRlbGVnYXRlLm5vdGljZShtc2csIC4uLmFyZ3MpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgd2Fybihtc2c6IHN0cmluZywgLi4uYXJnczogYW55W10pIHtcbiAgICAgICAgdGhpcy5kZWxlZ2F0ZXMuZm9yRWFjaChkZWxlZ2F0ZSA9PiBkZWxlZ2F0ZS53YXJuKG1zZywgLi4uYXJncykpO1xuICAgIH1cblxuICAgIHB1YmxpYyBlcnJvcihtc2c6IHN0cmluZywgLi4uYXJnczogYW55W10pIHtcbiAgICAgICAgdGhpcy5kZWxlZ2F0ZXMuZm9yRWFjaChkZWxlZ2F0ZSA9PiBkZWxlZ2F0ZS5lcnJvcihtc2csIC4uLmFyZ3MpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaW5mbyhtc2c6IHN0cmluZywgLi4uYXJnczogYW55W10pIHtcbiAgICAgICAgdGhpcy5kZWxlZ2F0ZXMuZm9yRWFjaChkZWxlZ2F0ZSA9PiBkZWxlZ2F0ZS5pbmZvKG1zZywgLi4uYXJncykpO1xuICAgIH1cblxuICAgIHB1YmxpYyB2ZXJib3NlKG1zZzogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICB0aGlzLmRlbGVnYXRlcy5mb3JFYWNoKGRlbGVnYXRlID0+IGRlbGVnYXRlLnZlcmJvc2UobXNnLCAuLi5hcmdzKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGRlYnVnKG1zZzogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICB0aGlzLmRlbGVnYXRlcy5mb3JFYWNoKGRlbGVnYXRlID0+IGRlbGVnYXRlLmRlYnVnKG1zZywgLi4uYXJncykpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBzeW5jKCk6IFByb21pc2U8dm9pZD4ge1xuXG4gICAgICAgIGZvciAoY29uc3QgZGVsZWdhdGUgb2YgdGhpcy5kZWxlZ2F0ZXMpIHtcbiAgICAgICAgICAgIGF3YWl0IGRlbGVnYXRlLnN5bmMoKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgdG9TYWZlTG9nZ2VycyhkZWxlZ2F0ZXM6IElMb2dnZXJbXSkge1xuXG4gICAgICAgIHJldHVybiBkZWxlZ2F0ZXMubWFwKGN1cnJlbnQgPT4ge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnQgaW5zdGFuY2VvZiBTYWZlTG9nZ2VyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgU2FmZUxvZ2dlcihjdXJyZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cblxuXG59XG4iXX0=