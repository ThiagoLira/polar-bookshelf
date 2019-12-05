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
const FixedBuffer_1 = require("../util/FixedBuffer");
const ISODateTimeStrings_1 = require("polar-shared/src/metadata/ISODateTimeStrings");
const Strings_1 = require("polar-shared/src/util/Strings");
const capacity = Strings_1.Strings.toNumber(process.env.POLAR_LOG_CAPACITY, 250);
let IDX_GENERATOR = 0;
const buffer = new FixedBuffer_1.FixedBuffer(capacity);
class MemoryLogger {
    constructor() {
        this.name = 'memory-logger';
    }
    notice(msg, ...args) {
        buffer.write(createLogMessage('notice', msg, args));
    }
    info(msg, ...args) {
        buffer.write(createLogMessage('info', msg, args));
    }
    warn(msg, ...args) {
        buffer.write(createLogMessage('warn', msg, args));
    }
    error(msg, ...args) {
        buffer.write(createLogMessage('error', msg, args));
    }
    verbose(msg, ...args) {
        buffer.write(createLogMessage('verbose', msg, args));
    }
    debug(msg, ...args) {
        buffer.write(createLogMessage('debug', msg, args));
    }
    getOutput() {
        return buffer.toView().join("\n");
    }
    toJSON() {
        return JSON.stringify(buffer.toView(), null, "  ");
    }
    sync() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    static addEventListener(eventListener) {
        return buffer.addEventListener(eventListener);
    }
    static toView() {
        return buffer.toView();
    }
    static clear() {
        buffer.clear();
        buffer.write(createLogMessage('info', "Log messages cleared", []));
    }
}
exports.MemoryLogger = MemoryLogger;
function createLogMessage(level, msg, args) {
    return {
        timestamp: ISODateTimeStrings_1.ISODateTimeStrings.create(),
        idx: IDX_GENERATOR++,
        level,
        msg,
        args
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVtb3J5TG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiTWVtb3J5TG9nZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0EscURBQWdEO0FBR2hELHFGQUFnRjtBQUNoRiwyREFBc0Q7QUFFdEQsTUFBTSxRQUFRLEdBQUcsaUJBQU8sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUV2RSxJQUFJLGFBQWEsR0FBRyxDQUFDLENBQUM7QUFFdEIsTUFBTSxNQUFNLEdBQUcsSUFBSSx5QkFBVyxDQUFhLFFBQVEsQ0FBQyxDQUFDO0FBTXJELE1BQWEsWUFBWTtJQUF6QjtRQUVvQixTQUFJLEdBQVcsZUFBZSxDQUFDO0lBbURuRCxDQUFDO0lBakRVLE1BQU0sQ0FBQyxHQUFXLEVBQUUsR0FBRyxJQUFXO1FBQ3JDLE1BQU0sQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFTSxJQUFJLENBQUMsR0FBVyxFQUFFLEdBQUcsSUFBVztRQUNuQyxNQUFNLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRU0sSUFBSSxDQUFDLEdBQVcsRUFBRSxHQUFHLElBQVc7UUFDbkMsTUFBTSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVNLEtBQUssQ0FBQyxHQUFXLEVBQUUsR0FBRyxJQUFXO1FBQ3BDLE1BQU0sQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFTSxPQUFPLENBQUMsR0FBVyxFQUFFLEdBQUcsSUFBVztRQUN0QyxNQUFNLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRU0sS0FBSyxDQUFDLEdBQVcsRUFBRSxHQUFHLElBQVc7UUFDcEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVNLFNBQVM7UUFDWixPQUFPLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVNLE1BQU07UUFDVCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRVksSUFBSTs7UUFFakIsQ0FBQztLQUFBO0lBRU0sTUFBTSxDQUFDLGdCQUFnQixDQUFDLGFBQXdDO1FBQ25FLE9BQU8sTUFBTSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFTSxNQUFNLENBQUMsTUFBTTtRQUNoQixPQUFPLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRU0sTUFBTSxDQUFDLEtBQUs7UUFDZixNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDZixNQUFNLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFFLE1BQU0sRUFBRSxzQkFBc0IsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7Q0FFSjtBQXJERCxvQ0FxREM7QUFFRCxTQUFTLGdCQUFnQixDQUFDLEtBQW1CLEVBQ25CLEdBQVcsRUFDWCxJQUF3QjtJQUU5QyxPQUFPO1FBQ0gsU0FBUyxFQUFFLHVDQUFrQixDQUFDLE1BQU0sRUFBRTtRQUN0QyxHQUFHLEVBQUUsYUFBYSxFQUFFO1FBQ3BCLEtBQUs7UUFDTCxHQUFHO1FBQ0gsSUFBSTtLQUNQLENBQUM7QUFFTixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJTG9nZ2VyfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL2xvZ2dlci9JTG9nZ2VyJztcbmltcG9ydCB7Rml4ZWRCdWZmZXJ9IGZyb20gJy4uL3V0aWwvRml4ZWRCdWZmZXInO1xuaW1wb3J0IHtMb2dMZXZlbE5hbWUsIExvZ01lc3NhZ2V9IGZyb20gJy4vTG9nZ2luZyc7XG5pbXBvcnQge0V2ZW50TGlzdGVuZXIsIFJlbGVhc2VhYmxlfSBmcm9tICcuLi9yZWFjdG9yL0V2ZW50TGlzdGVuZXInO1xuaW1wb3J0IHtJU09EYXRlVGltZVN0cmluZ3N9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbWV0YWRhdGEvSVNPRGF0ZVRpbWVTdHJpbmdzJztcbmltcG9ydCB7U3RyaW5nc30gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvdXRpbC9TdHJpbmdzXCI7XG5cbmNvbnN0IGNhcGFjaXR5ID0gU3RyaW5ncy50b051bWJlcihwcm9jZXNzLmVudi5QT0xBUl9MT0dfQ0FQQUNJVFksIDI1MCk7XG5cbmxldCBJRFhfR0VORVJBVE9SID0gMDtcblxuY29uc3QgYnVmZmVyID0gbmV3IEZpeGVkQnVmZmVyPExvZ01lc3NhZ2U+KGNhcGFjaXR5KTtcblxuLyoqXG4gKiBXcml0ZSBsb2cgbWVzc2FnZXMgdG8gYW4gaW50ZXJuYWwgYnVmZmVyIGZvciB0ZXN0aW5nIGxvZyBvdXRwdXQgb2ZcbiAqIGNvbXBvbmVudHMuXG4gKi9cbmV4cG9ydCBjbGFzcyBNZW1vcnlMb2dnZXIgaW1wbGVtZW50cyBJTG9nZ2VyIHtcblxuICAgIHB1YmxpYyByZWFkb25seSBuYW1lOiBzdHJpbmcgPSAnbWVtb3J5LWxvZ2dlcic7XG5cbiAgICBwdWJsaWMgbm90aWNlKG1zZzogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICBidWZmZXIud3JpdGUoY3JlYXRlTG9nTWVzc2FnZSgnbm90aWNlJywgbXNnLCBhcmdzKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGluZm8obXNnOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICAgIGJ1ZmZlci53cml0ZShjcmVhdGVMb2dNZXNzYWdlKCAnaW5mbycsIG1zZywgYXJncykpO1xuICAgIH1cblxuICAgIHB1YmxpYyB3YXJuKG1zZzogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICBidWZmZXIud3JpdGUoY3JlYXRlTG9nTWVzc2FnZSggJ3dhcm4nLCBtc2csIGFyZ3MpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZXJyb3IobXNnOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICAgIGJ1ZmZlci53cml0ZShjcmVhdGVMb2dNZXNzYWdlKCAnZXJyb3InLCBtc2csIGFyZ3MpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdmVyYm9zZShtc2c6IHN0cmluZywgLi4uYXJnczogYW55W10pIHtcbiAgICAgICAgYnVmZmVyLndyaXRlKGNyZWF0ZUxvZ01lc3NhZ2UoICd2ZXJib3NlJywgbXNnLCBhcmdzKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGRlYnVnKG1zZzogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICBidWZmZXIud3JpdGUoY3JlYXRlTG9nTWVzc2FnZSggJ2RlYnVnJywgbXNnLCBhcmdzKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldE91dHB1dCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYnVmZmVyLnRvVmlldygpLmpvaW4oXCJcXG5cIik7XG4gICAgfVxuXG4gICAgcHVibGljIHRvSlNPTigpIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGJ1ZmZlci50b1ZpZXcoKSwgbnVsbCwgXCIgIFwiKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgc3luYygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgLy8gbm9vcFxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgYWRkRXZlbnRMaXN0ZW5lcihldmVudExpc3RlbmVyOiBFdmVudExpc3RlbmVyPExvZ01lc3NhZ2U+KTogUmVsZWFzZWFibGUge1xuICAgICAgICByZXR1cm4gYnVmZmVyLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRMaXN0ZW5lcik7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyB0b1ZpZXcoKTogUmVhZG9ubHlBcnJheTxMb2dNZXNzYWdlPiB7XG4gICAgICAgIHJldHVybiBidWZmZXIudG9WaWV3KCk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBjbGVhcigpOiB2b2lkIHtcbiAgICAgICAgYnVmZmVyLmNsZWFyKCk7XG4gICAgICAgIGJ1ZmZlci53cml0ZShjcmVhdGVMb2dNZXNzYWdlKCAnaW5mbycsIFwiTG9nIG1lc3NhZ2VzIGNsZWFyZWRcIiwgW10pKTtcbiAgICB9XG5cbn1cblxuZnVuY3Rpb24gY3JlYXRlTG9nTWVzc2FnZShsZXZlbDogTG9nTGV2ZWxOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtc2c6IHN0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnczogUmVhZG9ubHlBcnJheTxhbnk+KTogTG9nTWVzc2FnZSB7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0aW1lc3RhbXA6IElTT0RhdGVUaW1lU3RyaW5ncy5jcmVhdGUoKSxcbiAgICAgICAgaWR4OiBJRFhfR0VORVJBVE9SKyssXG4gICAgICAgIGxldmVsLFxuICAgICAgICBtc2csXG4gICAgICAgIGFyZ3NcbiAgICB9O1xuXG59XG5cblxuIl19