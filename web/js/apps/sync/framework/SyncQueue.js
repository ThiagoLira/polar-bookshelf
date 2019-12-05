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
const SyncState_1 = require("./SyncState");
const Logger_1 = require("polar-shared/src/logger/Logger");
const Percentages_1 = require("polar-shared/src/util/Percentages");
const Optional_1 = require("polar-shared/src/util/ts/Optional");
const log = Logger_1.Logger.create();
class SyncQueue {
    constructor(abortable, syncProgressListener) {
        this.pending = [];
        this.total = 0;
        this.syncProgress = {
            percentage: 0,
            state: SyncState_1.SyncState.STARTED,
            error: undefined,
            taskResult: Optional_1.Optional.empty()
        };
        this.abortable = abortable;
        this.syncProgressListener = syncProgressListener;
    }
    add(...task) {
        this.pending.push(...task);
        ++this.total;
    }
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            let syncTask;
            let idx = 0;
            while ((syncTask = this.pending.shift()) !== undefined) {
                if (this.abortable.aborted) {
                    log.info("Aborting sync.");
                    return;
                }
                try {
                    this.syncProgress.taskResult = yield syncTask();
                }
                catch (e) {
                    this.syncProgress.error = e;
                    this.syncProgress.state = SyncState_1.SyncState.FAILED;
                    this.fireSyncProgress();
                    break;
                }
                ++idx;
                this.syncProgress.percentage = Percentages_1.Percentages.calculate(idx, this.total);
                this.fireSyncProgress();
            }
        });
    }
    size() {
        return this.pending.length;
    }
    fireSyncProgress() {
        if (this.syncProgress.percentage === 100) {
            this.syncProgress.state = SyncState_1.SyncState.COMPLETED;
        }
        this.syncProgressListener(Object.freeze(Object.assign({}, this.syncProgress)));
    }
}
exports.SyncQueue = SyncQueue;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3luY1F1ZXVlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiU3luY1F1ZXVlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBR0EsMkNBQXNDO0FBRXRDLDJEQUFzRDtBQUN0RCxtRUFBOEQ7QUFDOUQsZ0VBQTJEO0FBRTNELE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQVM1QixNQUFhLFNBQVM7SUE0QmxCLFlBQVksU0FBb0IsRUFBRSxvQkFBMEM7UUExQjNELFlBQU8sR0FBZSxFQUFFLENBQUM7UUFLbEMsVUFBSyxHQUFHLENBQUMsQ0FBQztRQU1ELGlCQUFZLEdBQWlCO1lBQzFDLFVBQVUsRUFBRSxDQUFDO1lBQ2IsS0FBSyxFQUFFLHFCQUFTLENBQUMsT0FBTztZQUN4QixLQUFLLEVBQUUsU0FBUztZQUNoQixVQUFVLEVBQUUsbUJBQVEsQ0FBQyxLQUFLLEVBQUU7U0FDL0IsQ0FBQztRQVdFLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxvQkFBb0IsQ0FBQztJQUNyRCxDQUFDO0lBS00sR0FBRyxDQUFDLEdBQUcsSUFBZ0I7UUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUMzQixFQUFFLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUtZLE9BQU87O1lBRWhCLElBQUksUUFBOEIsQ0FBQztZQUVuQyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFHWixPQUFPLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsS0FBSyxTQUFTLEVBQUU7Z0JBRXBELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUU7b0JBQ3hCLEdBQUcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztvQkFDM0IsT0FBTztpQkFDVjtnQkFFRCxJQUFJO29CQUVBLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxHQUFHLE1BQU0sUUFBUSxFQUFFLENBQUM7aUJBRW5EO2dCQUFDLE9BQU8sQ0FBQyxFQUFFO29CQUVSLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztvQkFDNUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEdBQUcscUJBQVMsQ0FBQyxNQUFNLENBQUM7b0JBRTNDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO29CQUV4QixNQUFNO2lCQUNUO2dCQUVELEVBQUUsR0FBRyxDQUFDO2dCQUNOLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxHQUFHLHlCQUFXLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBRXRFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2FBRTNCO1FBRUwsQ0FBQztLQUFBO0lBRU0sSUFBSTtRQUNQLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7SUFDL0IsQ0FBQztJQUVPLGdCQUFnQjtRQUVwQixJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxLQUFLLEdBQUcsRUFBRTtZQUN0QyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssR0FBRyxxQkFBUyxDQUFDLFNBQVMsQ0FBQztTQUNqRDtRQUVELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFbkYsQ0FBQztDQUVKO0FBL0ZELDhCQStGQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U3luY1Byb2dyZXNzTGlzdGVuZXJ9IGZyb20gJy4vU3luY1Byb2dyZXNzTGlzdGVuZXInO1xuaW1wb3J0IHtBYm9ydGFibGV9IGZyb20gJy4vQWJvcnRhYmxlJztcbmltcG9ydCB7U3luY1Byb2dyZXNzfSBmcm9tICcuL1N5bmNQcm9ncmVzcyc7XG5pbXBvcnQge1N5bmNTdGF0ZX0gZnJvbSAnLi9TeW5jU3RhdGUnO1xuaW1wb3J0IHtTeW5jVGFza30gZnJvbSAnLi9TeW5jVGFzayc7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7UGVyY2VudGFnZXN9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC9QZXJjZW50YWdlcyc7XG5pbXBvcnQge09wdGlvbmFsfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvdHMvT3B0aW9uYWwnO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbi8qKlxuICogQSBxdWV1ZSB0aGF0IHN1cHBvcnRzIGFkZGluZyB0YXNrcyBhbmQgZXhlY3V0aW5nL2RyYWluaW5nIGRyYWluaW5nIGFsbCB0YXNrcy5cbiAqXG4gKiBUaGUgcXVldWUgY2FuIGJlIGV4cGFuZGVkIGJ5IGFkZGluZyBtb3JlIHRhc2tzLiAgR2VuZXJhbGx5IHRoZSBpZGVhIGlzIHRoYXRcbiAqIHRoZSB1c2VyIHBlcmZvcm1zIHZhcmlvdXMgc3RlcHMgYW5kIGJldHdlZW4gZWFjaCBzdGVwIGl0IGRyYWlucyB0aGUgcXVldWUgYnlcbiAqIGV4ZWN1dGluZyBhbGwgdGFza3MuXG4gKi9cbmV4cG9ydCBjbGFzcyBTeW5jUXVldWUge1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBwZW5kaW5nOiBTeW5jVGFza1tdID0gW107XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdG90YWwgbnVtYmVyIG9mIHRhc2tzIHRoYXQgaGF2ZSBiZWVuIHN1Ym1pdHRlZC5cbiAgICAgKi9cbiAgICBwcml2YXRlIHRvdGFsID0gMDtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgYWJvcnRhYmxlOiBBYm9ydGFibGU7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IHN5bmNQcm9ncmVzc0xpc3RlbmVyOiBTeW5jUHJvZ3Jlc3NMaXN0ZW5lcjtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgc3luY1Byb2dyZXNzOiBTeW5jUHJvZ3Jlc3MgPSB7XG4gICAgICAgIHBlcmNlbnRhZ2U6IDAsXG4gICAgICAgIHN0YXRlOiBTeW5jU3RhdGUuU1RBUlRFRCxcbiAgICAgICAgZXJyb3I6IHVuZGVmaW5lZCxcbiAgICAgICAgdGFza1Jlc3VsdDogT3B0aW9uYWwuZW1wdHkoKVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBhYm9ydGFibGUgVGhlIGFib3J0YWJsZSBzZXJ2aWNlIHJ1bm5pbmcgdGhlIHN5bmMuIFdoZW4gYWJvcnRlZCBpc1xuICAgICAqIHRydWUgd2UgbmVlZCB0byBzdG9wIHRoZSBzeW5jLlxuICAgICAqXG4gICAgICogQHBhcmFtIHN5bmNQcm9ncmVzc0xpc3RlbmVyIEEgY2FsbGJhY2sgZm9yIHRoZSBzdGF0ZSB3aGlsZSB3ZSdyZVxuICAgICAqICAgICBleGVjdXRpbmcuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoYWJvcnRhYmxlOiBBYm9ydGFibGUsIHN5bmNQcm9ncmVzc0xpc3RlbmVyOiBTeW5jUHJvZ3Jlc3NMaXN0ZW5lcikge1xuICAgICAgICB0aGlzLmFib3J0YWJsZSA9IGFib3J0YWJsZTtcbiAgICAgICAgdGhpcy5zeW5jUHJvZ3Jlc3NMaXN0ZW5lciA9IHN5bmNQcm9ncmVzc0xpc3RlbmVyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCB0YXNrcyB0aGF0IG5lZWQgZXhlY3V0aW5nLlxuICAgICAqL1xuICAgIHB1YmxpYyBhZGQoLi4udGFzazogU3luY1Rhc2tbXSkge1xuICAgICAgICB0aGlzLnBlbmRpbmcucHVzaCguLi50YXNrKTtcbiAgICAgICAgKyt0aGlzLnRvdGFsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4ZWN1dGUgYWxsIHRhc2tzIGluIHRoZSBxdWV1ZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgYXN5bmMgZXhlY3V0ZSgpIHtcblxuICAgICAgICBsZXQgc3luY1Rhc2s6IFN5bmNUYXNrIHwgdW5kZWZpbmVkO1xuXG4gICAgICAgIGxldCBpZHggPSAwO1xuXG4gICAgICAgIC8vIG5vaW5zcGVjdGlvbiBUc0xpbnRcbiAgICAgICAgd2hpbGUgKChzeW5jVGFzayA9IHRoaXMucGVuZGluZy5zaGlmdCgpKSAhPT0gdW5kZWZpbmVkKSB7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmFib3J0YWJsZS5hYm9ydGVkKSB7XG4gICAgICAgICAgICAgICAgbG9nLmluZm8oXCJBYm9ydGluZyBzeW5jLlwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRyeSB7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnN5bmNQcm9ncmVzcy50YXNrUmVzdWx0ID0gYXdhaXQgc3luY1Rhc2soKTtcblxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zeW5jUHJvZ3Jlc3MuZXJyb3IgPSBlO1xuICAgICAgICAgICAgICAgIHRoaXMuc3luY1Byb2dyZXNzLnN0YXRlID0gU3luY1N0YXRlLkZBSUxFRDtcblxuICAgICAgICAgICAgICAgIHRoaXMuZmlyZVN5bmNQcm9ncmVzcygpO1xuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICsraWR4O1xuICAgICAgICAgICAgdGhpcy5zeW5jUHJvZ3Jlc3MucGVyY2VudGFnZSA9IFBlcmNlbnRhZ2VzLmNhbGN1bGF0ZShpZHgsIHRoaXMudG90YWwpO1xuXG4gICAgICAgICAgICB0aGlzLmZpcmVTeW5jUHJvZ3Jlc3MoKTtcblxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc2l6ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGVuZGluZy5sZW5ndGg7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmaXJlU3luY1Byb2dyZXNzKCkge1xuXG4gICAgICAgIGlmICh0aGlzLnN5bmNQcm9ncmVzcy5wZXJjZW50YWdlID09PSAxMDApIHtcbiAgICAgICAgICAgIHRoaXMuc3luY1Byb2dyZXNzLnN0YXRlID0gU3luY1N0YXRlLkNPTVBMRVRFRDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3luY1Byb2dyZXNzTGlzdGVuZXIoT2JqZWN0LmZyZWV6ZShPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN5bmNQcm9ncmVzcykpKTtcblxuICAgIH1cblxufVxuIl19