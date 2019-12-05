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
class StatsLogger {
    constructor() {
        this.name = "stats";
        this.stats = new FilteredStats();
    }
    notice(msg, ...args) {
        ++this.stats.notice;
    }
    debug(msg, ...args) {
        ++this.stats.debug;
    }
    verbose(msg, ...args) {
        ++this.stats.verbose;
    }
    info(msg, ...args) {
        ++this.stats.info;
    }
    warn(msg, ...args) {
        ++this.stats.warn;
    }
    error(msg, ...args) {
        ++this.stats.error;
    }
    sync() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
exports.StatsLogger = StatsLogger;
class FilteredStats {
    constructor() {
        this.notice = 0;
        this.debug = 0;
        this.verbose = 0;
        this.info = 0;
        this.warn = 0;
        this.error = 0;
    }
}
exports.FilteredStats = FilteredStats;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RhdHNMb2dnZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJTdGF0c0xvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQU1BLE1BQWEsV0FBVztJQUF4QjtRQUVvQixTQUFJLEdBQVcsT0FBTyxDQUFDO1FBRXZCLFVBQUssR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFDO0lBOEJoRCxDQUFDO0lBNUJVLE1BQU0sQ0FBQyxHQUFXLEVBQUUsR0FBRyxJQUFXO1FBQ3JDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7SUFDeEIsQ0FBQztJQUVNLEtBQUssQ0FBQyxHQUFXLEVBQUUsR0FBRyxJQUFXO1FBQ3BDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUVNLE9BQU8sQ0FBQyxHQUFXLEVBQUUsR0FBRyxJQUFXO1FBQ3RDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7SUFDekIsQ0FBQztJQUVNLElBQUksQ0FBQyxHQUFXLEVBQUUsR0FBRyxJQUFXO1FBQ25DLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7SUFDdEIsQ0FBQztJQUVNLElBQUksQ0FBQyxHQUFXLEVBQUUsR0FBRyxJQUFXO1FBQ25DLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7SUFDdEIsQ0FBQztJQUVNLEtBQUssQ0FBQyxHQUFXLEVBQUUsR0FBRyxJQUFXO1FBQ3BDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUVZLElBQUk7O1FBRWpCLENBQUM7S0FBQTtDQUVKO0FBbENELGtDQWtDQztBQUVELE1BQWEsYUFBYTtJQUExQjtRQUNXLFdBQU0sR0FBVyxDQUFDLENBQUM7UUFDbkIsVUFBSyxHQUFXLENBQUMsQ0FBQztRQUNsQixZQUFPLEdBQVcsQ0FBQyxDQUFDO1FBQ3BCLFNBQUksR0FBVyxDQUFDLENBQUM7UUFDakIsU0FBSSxHQUFXLENBQUMsQ0FBQztRQUNqQixVQUFLLEdBQVcsQ0FBQyxDQUFDO0lBQzdCLENBQUM7Q0FBQTtBQVBELHNDQU9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJTG9nZ2VyfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL2xvZ2dlci9JTG9nZ2VyJztcblxuLyoqXG4gKiBEb2VzIG5vdGhpbmcgb3RoZXIgdGhhbiBjb2xsZWN0IHN0YXRzIG9uIHdoaWNoIG1ldGhvZHMgd2VyZSBjYWxsZWQgZm9yXG4gKiB0ZXN0aW5nIHB1cnBvc2VzLlxuICovXG5leHBvcnQgY2xhc3MgU3RhdHNMb2dnZXIgaW1wbGVtZW50cyBJTG9nZ2VyIHtcblxuICAgIHB1YmxpYyByZWFkb25seSBuYW1lOiBzdHJpbmcgPSBcInN0YXRzXCI7XG5cbiAgICBwdWJsaWMgcmVhZG9ubHkgc3RhdHMgPSBuZXcgRmlsdGVyZWRTdGF0cygpO1xuXG4gICAgcHVibGljIG5vdGljZShtc2c6IHN0cmluZywgLi4uYXJnczogYW55W10pIHtcbiAgICAgICAgKyt0aGlzLnN0YXRzLm5vdGljZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGVidWcobXNnOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICAgICsrdGhpcy5zdGF0cy5kZWJ1ZztcbiAgICB9XG5cbiAgICBwdWJsaWMgdmVyYm9zZShtc2c6IHN0cmluZywgLi4uYXJnczogYW55W10pIHtcbiAgICAgICAgKyt0aGlzLnN0YXRzLnZlcmJvc2U7XG4gICAgfVxuXG4gICAgcHVibGljIGluZm8obXNnOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICAgICsrdGhpcy5zdGF0cy5pbmZvO1xuICAgIH1cblxuICAgIHB1YmxpYyB3YXJuKG1zZzogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICArK3RoaXMuc3RhdHMud2FybjtcbiAgICB9XG5cbiAgICBwdWJsaWMgZXJyb3IobXNnOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICAgICsrdGhpcy5zdGF0cy5lcnJvcjtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgc3luYygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgLy8gbm9vcFxuICAgIH1cblxufVxuXG5leHBvcnQgY2xhc3MgRmlsdGVyZWRTdGF0cyB7XG4gICAgcHVibGljIG5vdGljZTogbnVtYmVyID0gMDtcbiAgICBwdWJsaWMgZGVidWc6IG51bWJlciA9IDA7XG4gICAgcHVibGljIHZlcmJvc2U6IG51bWJlciA9IDA7XG4gICAgcHVibGljIGluZm86IG51bWJlciA9IDA7XG4gICAgcHVibGljIHdhcm46IG51bWJlciA9IDA7XG4gICAgcHVibGljIGVycm9yOiBudW1iZXIgPSAwO1xufVxuIl19