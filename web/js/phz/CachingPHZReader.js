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
const PHZReader_1 = require("polar-content-capture/src/phz/PHZReader");
const Logger_1 = require("polar-shared/src/logger/Logger");
const log = Logger_1.Logger.create();
class CachingPHZReader {
    constructor(path, timeout = 60000) {
        this.reopened = 0;
        this.path = path;
        this.timeout = timeout;
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            this.delegate = new PHZReader_1.PHZReader();
            yield this.delegate.init(this.path);
            setTimeout(() => __awaiter(this, void 0, void 0, function* () {
                yield this.close();
            }), this.timeout);
        });
    }
    getMetadata() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.openWhenNecessary();
            return yield this.delegate.getMetadata();
        });
    }
    getResources() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.openWhenNecessary();
            return yield this.delegate.getResources();
        });
    }
    getResource(resourceEntry) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.openWhenNecessary();
            return yield this.delegate.getResource(resourceEntry);
        });
    }
    getResourceAsStream(resourceEntry) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.openWhenNecessary();
            return yield this.delegate.getResourceAsStream(resourceEntry);
        });
    }
    close() {
        return __awaiter(this, void 0, void 0, function* () {
            const delegate = this.delegate;
            this.delegate = undefined;
            yield delegate.close();
        });
    }
    openWhenNecessary() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.delegate) {
                return;
            }
            log.info("Caching PHZReader being re-opened: " + this.path);
            ++this.reopened;
            yield this.init();
        });
    }
}
exports.CachingPHZReader = CachingPHZReader;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FjaGluZ1BIWlJlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNhY2hpbmdQSFpSZWFkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx1RUFBa0U7QUFFbEUsMkRBQXNEO0FBR3RELE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU1QixNQUFhLGdCQUFnQjtJQW9CekIsWUFBWSxJQUFZLEVBQUUsVUFBa0IsS0FBSztRQUYxQyxhQUFRLEdBQVcsQ0FBQyxDQUFDO1FBSXhCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBRTNCLENBQUM7SUFPWSxJQUFJOztZQUViLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxxQkFBUyxFQUFFLENBQUM7WUFDaEMsTUFBTSxJQUFJLENBQUMsUUFBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFckMsVUFBVSxDQUFDLEdBQVMsRUFBRTtnQkFFbEIsTUFBTSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7WUFFdkIsQ0FBQyxDQUFBLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXJCLENBQUM7S0FBQTtJQUVZLFdBQVc7O1lBQ3BCLE1BQU0sSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7WUFDL0IsT0FBTyxNQUFNLElBQUksQ0FBQyxRQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDOUMsQ0FBQztLQUFBO0lBS1ksWUFBWTs7WUFDckIsTUFBTSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUMvQixPQUFPLE1BQU0sSUFBSSxDQUFDLFFBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMvQyxDQUFDO0tBQUE7SUFPWSxXQUFXLENBQUMsYUFBNEI7O1lBQ2pELE1BQU0sSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7WUFDL0IsT0FBTyxNQUFNLElBQUksQ0FBQyxRQUFTLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzNELENBQUM7S0FBQTtJQUVZLG1CQUFtQixDQUFDLGFBQTRCOztZQUN6RCxNQUFNLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBQy9CLE9BQU8sTUFBTSxJQUFJLENBQUMsUUFBUyxDQUFDLG1CQUFtQixDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ25FLENBQUM7S0FBQTtJQUVZLEtBQUs7O1lBSWQsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUUvQixJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQztZQUUxQixNQUFNLFFBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUU1QixDQUFDO0tBQUE7SUFFYSxpQkFBaUI7O1lBRTNCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFFZixPQUFPO2FBQ1Y7WUFFRCxHQUFHLENBQUMsSUFBSSxDQUFDLHFDQUFxQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM1RCxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUM7WUFFaEIsTUFBTSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFdEIsQ0FBQztLQUFBO0NBRUo7QUFuR0QsNENBbUdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQSFpSZWFkZXJ9IGZyb20gJ3BvbGFyLWNvbnRlbnQtY2FwdHVyZS9zcmMvcGh6L1BIWlJlYWRlcic7XG5pbXBvcnQge1Jlc291cmNlRW50cnl9IGZyb20gJ3BvbGFyLWNvbnRlbnQtY2FwdHVyZS9zcmMvcGh6L1Jlc291cmNlRW50cnknO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge0NvbXByZXNzZWRSZWFkZXJ9IGZyb20gJ3BvbGFyLWNvbnRlbnQtY2FwdHVyZS9zcmMvcGh6L0NvbXByZXNzZWRSZWFkZXInO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbmV4cG9ydCBjbGFzcyBDYWNoaW5nUEhaUmVhZGVyIGltcGxlbWVudHMgQ29tcHJlc3NlZFJlYWRlciB7XG5cbiAgICBwdWJsaWMgcGF0aDogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGRlbGVnYXRlIFBIWlJlYWRlciB0aGF0IGFjdHVhbGx5IHBlcmZvcm1zIHRoZSBJTy5cbiAgICAgKlxuICAgICAqL1xuICAgIHB1YmxpYyBkZWxlZ2F0ZT86IFBIWlJlYWRlcjtcblxuICAgIC8qKlxuICAgICAqIFRoZSBhbW91bnQgb2YgdGltZSB3ZSBzaG91bGQgd2FpdCBhZnRlciBpbml0IHRvIGNsb3NlIHRoZSBmaWxlLlxuICAgICAqL1xuICAgIHB1YmxpYyB0aW1lb3V0OiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbnVtYmVyIG9mIHRpbWVzIHRoZSByZWFkZXIgaGFzIGJlZW4gcmUtb3BlbmVkLlxuICAgICAqL1xuICAgIHB1YmxpYyByZW9wZW5lZDogbnVtYmVyID0gMDtcblxuICAgIGNvbnN0cnVjdG9yKHBhdGg6IHN0cmluZywgdGltZW91dDogbnVtYmVyID0gNjAwMDApIHtcblxuICAgICAgICB0aGlzLnBhdGggPSBwYXRoO1xuICAgICAgICB0aGlzLnRpbWVvdXQgPSB0aW1lb3V0O1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdCBtdXN0IGJlIGNhbGxlZCB0byBsb2FkIHRoZSBlbnRyaWVzIHdoaWNoIHdlIGNhbiB3b3JrIHdpdGguXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPHZvaWQ+fVxuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyBpbml0KCkge1xuXG4gICAgICAgIHRoaXMuZGVsZWdhdGUgPSBuZXcgUEhaUmVhZGVyKCk7XG4gICAgICAgIGF3YWl0IHRoaXMuZGVsZWdhdGUhLmluaXQodGhpcy5wYXRoKTtcblxuICAgICAgICBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcblxuICAgICAgICAgICAgYXdhaXQgdGhpcy5jbG9zZSgpO1xuXG4gICAgICAgIH0sIHRoaXMudGltZW91dCk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgZ2V0TWV0YWRhdGEoKSB7XG4gICAgICAgIGF3YWl0IHRoaXMub3BlbldoZW5OZWNlc3NhcnkoKTtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuZGVsZWdhdGUhLmdldE1ldGFkYXRhKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGp1c3QgdGhlIHJlc291cmNlcyBmcm9tIHRoZSBtZXRhZGF0YS5cbiAgICAgKi9cbiAgICBwdWJsaWMgYXN5bmMgZ2V0UmVzb3VyY2VzKCkge1xuICAgICAgICBhd2FpdCB0aGlzLm9wZW5XaGVuTmVjZXNzYXJ5KCk7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmRlbGVnYXRlIS5nZXRSZXNvdXJjZXMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWFkIGEgcmVzb3VyY2UgZnJvbSBkaXNrIGFuZCBjYWxsIHRoZSBjYWxsYmFjayB3aXRoIHRoZSBuZXcgY29udGVudCBvbmNlXG4gICAgICogaXQncyByZWFkeSBmb3IgdXNhZ2UuXG4gICAgICpcbiAgICAgKi9cbiAgICBwdWJsaWMgYXN5bmMgZ2V0UmVzb3VyY2UocmVzb3VyY2VFbnRyeTogUmVzb3VyY2VFbnRyeSk6IFByb21pc2U8QnVmZmVyPiB7XG4gICAgICAgIGF3YWl0IHRoaXMub3BlbldoZW5OZWNlc3NhcnkoKTtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuZGVsZWdhdGUhLmdldFJlc291cmNlKHJlc291cmNlRW50cnkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBnZXRSZXNvdXJjZUFzU3RyZWFtKHJlc291cmNlRW50cnk6IFJlc291cmNlRW50cnkpOiBQcm9taXNlPE5vZGVKUy5SZWFkYWJsZVN0cmVhbT4ge1xuICAgICAgICBhd2FpdCB0aGlzLm9wZW5XaGVuTmVjZXNzYXJ5KCk7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmRlbGVnYXRlIS5nZXRSZXNvdXJjZUFzU3RyZWFtKHJlc291cmNlRW50cnkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBjbG9zZSgpIHtcblxuICAgICAgICAvLyBjb3B5IHRoZSBkZWxlZ2F0ZSBzbyB0aGF0IG5vdGhpbmcgY2FuIHNlZSB0aGlzLmRlbGVnYXRlIGFzIGJlaW5nXG4gICAgICAgIC8vIG5vbi1udWxsIHdoaWxlIHdlIGNsb3NlIGVsc2Ugd2Ugd291bGQgaGF2ZSBhIHJhY2UuXG4gICAgICAgIGNvbnN0IGRlbGVnYXRlID0gdGhpcy5kZWxlZ2F0ZTtcblxuICAgICAgICB0aGlzLmRlbGVnYXRlID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIGF3YWl0IGRlbGVnYXRlIS5jbG9zZSgpO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBvcGVuV2hlbk5lY2Vzc2FyeSgpIHtcblxuICAgICAgICBpZiAodGhpcy5kZWxlZ2F0ZSkge1xuICAgICAgICAgICAgLy8gd2UgYXJlIGRvbmUuICBUaGVyZSBpcyBhbHJlYWR5IGEgZGVsZWdhdGUgd2UgY2FuIHVzZS5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxvZy5pbmZvKFwiQ2FjaGluZyBQSFpSZWFkZXIgYmVpbmcgcmUtb3BlbmVkOiBcIiArIHRoaXMucGF0aCk7XG4gICAgICAgICsrdGhpcy5yZW9wZW5lZDtcblxuICAgICAgICBhd2FpdCB0aGlzLmluaXQoKTtcblxuICAgIH1cblxufVxuIl19