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
const RendererAnalytics_1 = require("../ga/RendererAnalytics");
const GALoggers_1 = require("./GALoggers");
class GALogger {
    constructor() {
        this.name = 'ga-logger';
    }
    notice(msg, ...args) {
    }
    warn(msg, ...args) {
    }
    error(msg, ...args) {
        const error = GALoggers_1.GALoggers.getError(args);
        const event = GALoggers_1.GALoggers.toEvent(error);
        if (event) {
            RendererAnalytics_1.RendererAnalytics.event(event);
        }
    }
    info(msg, ...args) {
    }
    verbose(msg, ...args) {
    }
    debug(msg, ...args) {
    }
    sync() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
exports.GALogger = GALogger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR0FMb2dnZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJHQUxvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBLCtEQUEwRDtBQUMxRCwyQ0FBc0M7QUFLdEMsTUFBYSxRQUFRO0lBQXJCO1FBRW9CLFNBQUksR0FBVyxXQUFXLENBQUM7SUFzQy9DLENBQUM7SUFwQ1UsTUFBTSxDQUFDLEdBQVcsRUFBRSxHQUFHLElBQVc7SUFFekMsQ0FBQztJQUVNLElBQUksQ0FBQyxHQUFXLEVBQUUsR0FBRyxJQUFXO0lBRXZDLENBQUM7SUFFTSxLQUFLLENBQUMsR0FBVyxFQUFFLEdBQUcsSUFBVztRQUVwQyxNQUFNLEtBQUssR0FBRyxxQkFBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV2QyxNQUFNLEtBQUssR0FBRyxxQkFBUyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV2QyxJQUFJLEtBQUssRUFBRTtZQUNQLHFDQUFpQixDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNsQztJQUVMLENBQUM7SUFFTSxJQUFJLENBQUMsR0FBVyxFQUFFLEdBQUcsSUFBVztJQUV2QyxDQUFDO0lBRU0sT0FBTyxDQUFDLEdBQVcsRUFBRSxHQUFHLElBQVc7SUFFMUMsQ0FBQztJQUVNLEtBQUssQ0FBQyxHQUFXLEVBQUUsR0FBRyxJQUFXO0lBRXhDLENBQUM7SUFFWSxJQUFJOztRQUVqQixDQUFDO0tBQUE7Q0FFSjtBQXhDRCw0QkF3Q0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lMb2dnZXJ9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbG9nZ2VyL0lMb2dnZXInO1xuaW1wb3J0IHtSZW5kZXJlckFuYWx5dGljc30gZnJvbSAnLi4vZ2EvUmVuZGVyZXJBbmFseXRpY3MnO1xuaW1wb3J0IHtHQUxvZ2dlcnN9IGZyb20gJy4vR0FMb2dnZXJzJztcblxuLyoqXG4gKiBMb2dzIGVycm9ycyBhcyBjdXN0b20gZXZlbnRzIHdpdGhpbiBHQS5cbiAqL1xuZXhwb3J0IGNsYXNzIEdBTG9nZ2VyIGltcGxlbWVudHMgSUxvZ2dlciB7XG5cbiAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZTogc3RyaW5nID0gJ2dhLWxvZ2dlcic7XG5cbiAgICBwdWJsaWMgbm90aWNlKG1zZzogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICAvLyBub29wXG4gICAgfVxuXG4gICAgcHVibGljIHdhcm4obXNnOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICAgIC8vIG5vb3BcbiAgICB9XG5cbiAgICBwdWJsaWMgZXJyb3IobXNnOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKSB7XG5cbiAgICAgICAgY29uc3QgZXJyb3IgPSBHQUxvZ2dlcnMuZ2V0RXJyb3IoYXJncyk7XG5cbiAgICAgICAgY29uc3QgZXZlbnQgPSBHQUxvZ2dlcnMudG9FdmVudChlcnJvcik7XG5cbiAgICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgICAgICBSZW5kZXJlckFuYWx5dGljcy5ldmVudChldmVudCk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHB1YmxpYyBpbmZvKG1zZzogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICAvLyBub29wXG4gICAgfVxuXG4gICAgcHVibGljIHZlcmJvc2UobXNnOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICAgIC8vIG5vb3BcbiAgICB9XG5cbiAgICBwdWJsaWMgZGVidWcobXNnOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICAgIC8vIG5vb3BcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgc3luYygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgLy8gbm9vcFxuICAgIH1cblxufVxuXG4iXX0=