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
const Toaster_1 = require("../ui/toaster/Toaster");
class ToasterLogger {
    constructor() {
        this.name = 'toaster-logger';
    }
    notice(msg, ...args) {
    }
    warn(msg, ...args) {
    }
    error(msg, ...args) {
        if (args.length > 0 && args[0] instanceof Error) {
            Toaster_1.Toaster.persistentError("An internal error has occurred.");
        }
        else {
            Toaster_1.Toaster.error(msg);
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
exports.ToasterLogger = ToasterLogger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9hc3RlckxvZ2dlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlRvYXN0ZXJMb2dnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFJQSxtREFBOEM7QUFPOUMsTUFBYSxhQUFhO0lBQTFCO1FBRW9CLFNBQUksR0FBVyxnQkFBZ0IsQ0FBQztJQWdDcEQsQ0FBQztJQTlCVSxNQUFNLENBQUMsR0FBVyxFQUFFLEdBQUcsSUFBVztJQUN6QyxDQUFDO0lBRU0sSUFBSSxDQUFDLEdBQVcsRUFBRSxHQUFHLElBQVc7SUFFdkMsQ0FBQztJQUVNLEtBQUssQ0FBQyxHQUFXLEVBQUUsR0FBRyxJQUFXO1FBRXBDLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLEtBQUssRUFBRTtZQUM3QyxpQkFBTyxDQUFDLGVBQWUsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1NBQzlEO2FBQU07WUFDSCxpQkFBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN0QjtJQUVMLENBQUM7SUFFTSxJQUFJLENBQUMsR0FBVyxFQUFFLEdBQUcsSUFBVztJQUN2QyxDQUFDO0lBRU0sT0FBTyxDQUFDLEdBQVcsRUFBRSxHQUFHLElBQVc7SUFDMUMsQ0FBQztJQUVNLEtBQUssQ0FBQyxHQUFXLEVBQUUsR0FBRyxJQUFXO0lBQ3hDLENBQUM7SUFFWSxJQUFJOztRQUVqQixDQUFDO0tBQUE7Q0FFSjtBQWxDRCxzQ0FrQ0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFNpbXBsZSBsb2dnZXIgdGhhdCBqdXN0IHdyaXRlcyB0byB0aGUgY29uc29sZS5cbiAqL1xuaW1wb3J0IHtJTG9nZ2VyfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL2xvZ2dlci9JTG9nZ2VyJztcbmltcG9ydCB7VG9hc3Rlcn0gZnJvbSAnLi4vdWkvdG9hc3Rlci9Ub2FzdGVyJztcblxuLyoqXG4gKiBDcmVhdGVzIGEgdG9hc3Qgd2hlbiB3aGVuIGFuIGVycm9yIG9yIGEgd2FybmluZyBpcyBkaXNwbGF5ZWQuIE5vIG90aGVyXG4gKiBtZXNzYWdlcyBhcmUgZGlzcGxheWVkIHRob3VnaCBiZWNhdXNlIGl0IHdvdWxkIGJlIHNpbGx5IHRvIHJlbmRlciB0aGVtXG4gKiBvdGhlcndpc2UuXG4gKi9cbmV4cG9ydCBjbGFzcyBUb2FzdGVyTG9nZ2VyIGltcGxlbWVudHMgSUxvZ2dlciB7XG5cbiAgICBwdWJsaWMgcmVhZG9ubHkgbmFtZTogc3RyaW5nID0gJ3RvYXN0ZXItbG9nZ2VyJztcblxuICAgIHB1YmxpYyBub3RpY2UobXNnOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgfVxuXG4gICAgcHVibGljIHdhcm4obXNnOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICAgIC8vIFRvYXN0ZXIud2FybmluZyhtc2cpO1xuICAgIH1cblxuICAgIHB1YmxpYyBlcnJvcihtc2c6IHN0cmluZywgLi4uYXJnczogYW55W10pIHtcblxuICAgICAgICBpZiAoYXJncy5sZW5ndGggPiAwICYmIGFyZ3NbMF0gaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgVG9hc3Rlci5wZXJzaXN0ZW50RXJyb3IoXCJBbiBpbnRlcm5hbCBlcnJvciBoYXMgb2NjdXJyZWQuXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgVG9hc3Rlci5lcnJvcihtc2cpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgaW5mbyhtc2c6IHN0cmluZywgLi4uYXJnczogYW55W10pIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgdmVyYm9zZShtc2c6IHN0cmluZywgLi4uYXJnczogYW55W10pIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGVidWcobXNnOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIHN5bmMoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIC8vIG5vb3BcbiAgICB9XG5cbn1cbiJdfQ==