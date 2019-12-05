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
const PackageManifest_1 = require("../../util/PackageManifest");
class VersionAnnotatingLogger {
    constructor(delegate) {
        this.delegate = delegate;
        this.name = `version-annotating-logger -> ${delegate.name}`;
        const packageManifest = new PackageManifest_1.PackageManifest();
        this.versionAnnotation = `[${packageManifest.version()}]`;
    }
    notice(msg, ...args) {
        this.delegate.notice(this.versionAnnotation + ` ${msg}`, ...args);
    }
    info(msg, ...args) {
        this.delegate.info(this.versionAnnotation + ` ${msg}`, ...args);
    }
    warn(msg, ...args) {
        this.delegate.warn(this.versionAnnotation + ` ${msg}`, ...args);
    }
    error(msg, ...args) {
        this.delegate.error(this.versionAnnotation + ` ${msg}`, ...args);
    }
    verbose(msg, ...args) {
        this.delegate.verbose(this.versionAnnotation + ` ${msg}`, ...args);
    }
    debug(msg, ...args) {
        this.delegate.debug(this.versionAnnotation + ` ${msg}`, ...args);
    }
    sync() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.delegate.sync();
        });
    }
}
exports.VersionAnnotatingLogger = VersionAnnotatingLogger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmVyc2lvbkFubm90YXRpbmdMb2dnZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJWZXJzaW9uQW5ub3RhdGluZ0xvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUlBLGdFQUEyRDtBQUszRCxNQUFhLHVCQUF1QjtJQU9oQyxZQUFZLFFBQWlCO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsZ0NBQWdDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM1RCxNQUFNLGVBQWUsR0FBRyxJQUFJLGlDQUFlLEVBQUUsQ0FBQztRQUU5QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxlQUFlLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQztJQUU5RCxDQUFDO0lBRU0sTUFBTSxDQUFDLEdBQVcsRUFBRSxHQUFHLElBQVc7UUFDckMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksR0FBRyxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBRU0sSUFBSSxDQUFDLEdBQVcsRUFBRSxHQUFHLElBQVc7UUFDbkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksR0FBRyxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRU0sSUFBSSxDQUFDLEdBQVcsRUFBRSxHQUFHLElBQVc7UUFDbkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksR0FBRyxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRU0sS0FBSyxDQUFDLEdBQVcsRUFBRSxHQUFHLElBQVc7UUFDcEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksR0FBRyxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBRU0sT0FBTyxDQUFDLEdBQVcsRUFBRSxHQUFHLElBQVc7UUFDdEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksR0FBRyxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRU0sS0FBSyxDQUFDLEdBQVcsRUFBRSxHQUFHLElBQVc7UUFDcEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksR0FBRyxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBRVksSUFBSTs7WUFDYixNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDL0IsQ0FBQztLQUFBO0NBRUo7QUE1Q0QsMERBNENDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTaW1wbGUgbG9nZ2VyIHRoYXQganVzdCB3cml0ZXMgdG8gdGhlIGNvbnNvbGUuXG4gKi9cbmltcG9ydCB7SUxvZ2dlcn0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9sb2dnZXIvSUxvZ2dlcic7XG5pbXBvcnQge1BhY2thZ2VNYW5pZmVzdH0gZnJvbSAnLi4vLi4vdXRpbC9QYWNrYWdlTWFuaWZlc3QnO1xuXG4vKipcbiAqIEFubm90YXRlcyBsb2dzIGJ5IGluY2x1ZGluZyB0aGUgdmVyc2lvblxuICovXG5leHBvcnQgY2xhc3MgVmVyc2lvbkFubm90YXRpbmdMb2dnZXIgaW1wbGVtZW50cyBJTG9nZ2VyIHtcblxuICAgIHB1YmxpYyByZWFkb25seSBuYW1lOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSByZWFkb25seSBkZWxlZ2F0ZTogSUxvZ2dlcjtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgdmVyc2lvbkFubm90YXRpb246IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRlbGVnYXRlOiBJTG9nZ2VyKSB7XG4gICAgICAgIHRoaXMuZGVsZWdhdGUgPSBkZWxlZ2F0ZTtcbiAgICAgICAgdGhpcy5uYW1lID0gYHZlcnNpb24tYW5ub3RhdGluZy1sb2dnZXIgLT4gJHtkZWxlZ2F0ZS5uYW1lfWA7XG4gICAgICAgIGNvbnN0IHBhY2thZ2VNYW5pZmVzdCA9IG5ldyBQYWNrYWdlTWFuaWZlc3QoKTtcbiAgICAgICAgLy8gdGhpcy52ZXJzaW9uQW5ub3RhdGlvbiA9IGBbJHtwYWNrYWdlTWFuaWZlc3QubmFtZSgpfS0ke3BhY2thZ2VNYW5pZmVzdC52ZXJzaW9uKCl9XWA7XG4gICAgICAgIHRoaXMudmVyc2lvbkFubm90YXRpb24gPSBgWyR7cGFja2FnZU1hbmlmZXN0LnZlcnNpb24oKX1dYDtcblxuICAgIH1cblxuICAgIHB1YmxpYyBub3RpY2UobXNnOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICAgIHRoaXMuZGVsZWdhdGUubm90aWNlKHRoaXMudmVyc2lvbkFubm90YXRpb24gKyBgICR7bXNnfWAsIC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbmZvKG1zZzogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICB0aGlzLmRlbGVnYXRlLmluZm8odGhpcy52ZXJzaW9uQW5ub3RhdGlvbiArIGAgJHttc2d9YCwgLi4uYXJncyk7XG4gICAgfVxuXG4gICAgcHVibGljIHdhcm4obXNnOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICAgIHRoaXMuZGVsZWdhdGUud2Fybih0aGlzLnZlcnNpb25Bbm5vdGF0aW9uICsgYCAke21zZ31gLCAuLi5hcmdzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZXJyb3IobXNnOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICAgIHRoaXMuZGVsZWdhdGUuZXJyb3IodGhpcy52ZXJzaW9uQW5ub3RhdGlvbiArIGAgJHttc2d9YCwgLi4uYXJncyk7XG4gICAgfVxuXG4gICAgcHVibGljIHZlcmJvc2UobXNnOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICAgIHRoaXMuZGVsZWdhdGUudmVyYm9zZSh0aGlzLnZlcnNpb25Bbm5vdGF0aW9uICsgYCAke21zZ31gLCAuLi5hcmdzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGVidWcobXNnOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICAgIHRoaXMuZGVsZWdhdGUuZGVidWcodGhpcy52ZXJzaW9uQW5ub3RhdGlvbiArIGAgJHttc2d9YCwgLi4uYXJncyk7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIHN5bmMoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGF3YWl0IHRoaXMuZGVsZWdhdGUuc3luYygpO1xuICAgIH1cblxufVxuIl19