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
const FileLogger_1 = require("./FileLogger");
const Directories_1 = require("../datastore/Directories");
const FilePaths_1 = require("polar-shared/src/util/FilePaths");
class PersistentErrorLogger {
    constructor(delegate) {
        this.name = 'persistent-error-logger';
        this.delegate = delegate;
    }
    notice(msg, ...args) {
        this.delegate.notice(msg, ...args);
    }
    error(msg, ...args) {
        this.delegate.error(msg, ...args);
    }
    info(msg, ...args) {
    }
    warn(msg, ...args) {
    }
    verbose(msg, ...args) {
    }
    debug(msg, ...args) {
    }
    sync() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.delegate.sync();
        });
    }
    static create() {
        return __awaiter(this, void 0, void 0, function* () {
            const directories = new Directories_1.Directories();
            const path = FilePaths_1.FilePaths.create(directories.logsDir, "error.log");
            const fileLogger = yield FileLogger_1.FileLogger.create(path);
            return new PersistentErrorLogger(fileLogger);
        });
    }
}
exports.PersistentErrorLogger = PersistentErrorLogger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGVyc2lzdGVudEVycm9yTG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUGVyc2lzdGVudEVycm9yTG9nZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBSUEsNkNBQXdDO0FBQ3hDLDBEQUFxRDtBQUNyRCwrREFBMEQ7QUFNMUQsTUFBYSxxQkFBcUI7SUFNOUIsWUFBb0IsUUFBaUI7UUFKckIsU0FBSSxHQUFXLHlCQUF5QixDQUFDO1FBS3JELElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzdCLENBQUM7SUFFTSxNQUFNLENBQUMsR0FBVyxFQUFFLEdBQUcsSUFBVztRQUNyQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRU0sS0FBSyxDQUFDLEdBQVcsRUFBRSxHQUFHLElBQVc7UUFDcEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVNLElBQUksQ0FBQyxHQUFXLEVBQUUsR0FBRyxJQUFXO0lBRXZDLENBQUM7SUFFTSxJQUFJLENBQUMsR0FBVyxFQUFFLEdBQUcsSUFBVztJQUV2QyxDQUFDO0lBRU0sT0FBTyxDQUFDLEdBQVcsRUFBRSxHQUFHLElBQVc7SUFFMUMsQ0FBQztJQUVNLEtBQUssQ0FBQyxHQUFXLEVBQUUsR0FBRyxJQUFXO0lBRXhDLENBQUM7SUFFWSxJQUFJOztZQUNiLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMvQixDQUFDO0tBQUE7SUFFTSxNQUFNLENBQU8sTUFBTTs7WUFDdEIsTUFBTSxXQUFXLEdBQUcsSUFBSSx5QkFBVyxFQUFFLENBQUM7WUFDdEMsTUFBTSxJQUFJLEdBQUcscUJBQVMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQztZQUNoRSxNQUFNLFVBQVUsR0FBRyxNQUFNLHVCQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2pELE9BQU8sSUFBSSxxQkFBcUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNqRCxDQUFDO0tBQUE7Q0FFSjtBQTdDRCxzREE2Q0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFNpbXBsZSBsb2dnZXIgdGhhdCBqdXN0IHdyaXRlcyB0byB0aGUgY29uc29sZS5cbiAqL1xuaW1wb3J0IHtJTG9nZ2VyfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL2xvZ2dlci9JTG9nZ2VyJztcbmltcG9ydCB7RmlsZUxvZ2dlcn0gZnJvbSAnLi9GaWxlTG9nZ2VyJztcbmltcG9ydCB7RGlyZWN0b3JpZXN9IGZyb20gJy4uL2RhdGFzdG9yZS9EaXJlY3Rvcmllcyc7XG5pbXBvcnQge0ZpbGVQYXRoc30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL0ZpbGVQYXRocyc7XG5cbi8qKlxuICogQSBsb2dnZXIgd2hpY2ggd3JpdGVzIHRvIGRpc2sgYnV0IE9OTFkgaWYgdGhleSBhcmUgZXJyb3JzLiAgVGhpcyBpcyBuZWVkZWRcbiAqIGZvciBwZXJmb3JtYW5jZSByZWFzb25zIGFzIGVsZWN0cm9uLWxvZyBpc24ndCBhbWF6aW5nbHkgZmFzdC5cbiAqL1xuZXhwb3J0IGNsYXNzIFBlcnNpc3RlbnRFcnJvckxvZ2dlciBpbXBsZW1lbnRzIElMb2dnZXIge1xuXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWU6IHN0cmluZyA9ICdwZXJzaXN0ZW50LWVycm9yLWxvZ2dlcic7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IGRlbGVnYXRlOiBJTG9nZ2VyO1xuXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcihkZWxlZ2F0ZTogSUxvZ2dlcikge1xuICAgICAgICB0aGlzLmRlbGVnYXRlID0gZGVsZWdhdGU7XG4gICAgfVxuXG4gICAgcHVibGljIG5vdGljZShtc2c6IHN0cmluZywgLi4uYXJnczogYW55W10pIHtcbiAgICAgICAgdGhpcy5kZWxlZ2F0ZS5ub3RpY2UobXNnLCAuLi5hcmdzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZXJyb3IobXNnOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICAgIHRoaXMuZGVsZWdhdGUuZXJyb3IobXNnLCAuLi5hcmdzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaW5mbyhtc2c6IHN0cmluZywgLi4uYXJnczogYW55W10pIHtcbiAgICAgICAgLy8gbm9vcFxuICAgIH1cblxuICAgIHB1YmxpYyB3YXJuKG1zZzogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICAvLyBub29wXG4gICAgfVxuXG4gICAgcHVibGljIHZlcmJvc2UobXNnOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICAgIC8vIG5vb3BcbiAgICB9XG5cbiAgICBwdWJsaWMgZGVidWcobXNnOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICAgIC8vIG5vb3BcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgc3luYygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgYXdhaXQgdGhpcy5kZWxlZ2F0ZS5zeW5jKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBjcmVhdGUoKTogUHJvbWlzZTxQZXJzaXN0ZW50RXJyb3JMb2dnZXI+IHtcbiAgICAgICAgY29uc3QgZGlyZWN0b3JpZXMgPSBuZXcgRGlyZWN0b3JpZXMoKTtcbiAgICAgICAgY29uc3QgcGF0aCA9IEZpbGVQYXRocy5jcmVhdGUoZGlyZWN0b3JpZXMubG9nc0RpciwgXCJlcnJvci5sb2dcIik7XG4gICAgICAgIGNvbnN0IGZpbGVMb2dnZXIgPSBhd2FpdCBGaWxlTG9nZ2VyLmNyZWF0ZShwYXRoKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQZXJzaXN0ZW50RXJyb3JMb2dnZXIoZmlsZUxvZ2dlcik7XG4gICAgfVxuXG59XG4iXX0=