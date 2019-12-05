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
const DecksSync_1 = require("./DecksSync");
const SyncQueue_1 = require("../SyncQueue");
const NotesSync_1 = require("./NotesSync");
const Logger_1 = require("polar-shared/src/logger/Logger");
const log = Logger_1.Logger.create();
class AnkiSyncJob {
    constructor(syncProgressListener, deckDescriptors, noteDescriptors) {
        this.syncProgressListener = syncProgressListener;
        this.deckDescriptors = deckDescriptors;
        this.noteDescriptors = noteDescriptors;
    }
}
class PendingAnkiSyncJob extends AnkiSyncJob {
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            const startedAnkiSyncJob = new StartedAnkiSyncJob(this.syncProgressListener, this.deckDescriptors, this.noteDescriptors);
            return startedAnkiSyncJob.run();
        });
    }
}
exports.PendingAnkiSyncJob = PendingAnkiSyncJob;
class StartedAnkiSyncJob extends AnkiSyncJob {
    constructor() {
        super(...arguments);
        this.aborted = false;
    }
    abort() {
        this.aborted = true;
    }
    run() {
        return __awaiter(this, void 0, void 0, function* () {
            const syncQueue = new SyncQueue_1.SyncQueue(this, this.syncProgressListener);
            const decksSync = new DecksSync_1.DecksSync(syncQueue);
            log.info("Starting anki sync job with deckDescriptors: ", this.deckDescriptors);
            decksSync.enqueue(this.deckDescriptors);
            const notesSync = new NotesSync_1.NotesSync(syncQueue);
            notesSync.enqueue(this.noteDescriptors);
            yield syncQueue.execute();
            return this;
        });
    }
}
exports.StartedAnkiSyncJob = StartedAnkiSyncJob;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW5raVN5bmNKb2IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJBbmtpU3luY0pvYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUlBLDJDQUFzQztBQUN0Qyw0Q0FBdUM7QUFDdkMsMkNBQXNDO0FBQ3RDLDJEQUFzRDtBQUV0RCxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFNUIsTUFBZSxXQUFXO0lBTXRCLFlBQW1CLG9CQUEwQyxFQUMxQyxlQUFpQyxFQUNqQyxlQUFpQztRQUVoRCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsb0JBQW9CLENBQUM7UUFDakQsSUFBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7UUFDdkMsSUFBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7SUFFM0MsQ0FBQztDQUVKO0FBRUQsTUFBYSxrQkFBbUIsU0FBUSxXQUFXO0lBRWxDLEtBQUs7O1lBRWQsTUFBTSxrQkFBa0IsR0FBRyxJQUFJLGtCQUFrQixDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFDekIsSUFBSSxDQUFDLGVBQWUsRUFDcEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQ3hFLE9BQU8sa0JBQWtCLENBQUMsR0FBRyxFQUFFLENBQUM7UUFFcEMsQ0FBQztLQUFBO0NBRUo7QUFYRCxnREFXQztBQUVELE1BQWEsa0JBQW1CLFNBQVEsV0FBVztJQUFuRDs7UUFFVyxZQUFPLEdBQUcsS0FBSyxDQUFDO0lBMEIzQixDQUFDO0lBeEJVLEtBQUs7UUFDUixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUN4QixDQUFDO0lBRVksR0FBRzs7WUFFWixNQUFNLFNBQVMsR0FBRyxJQUFJLHFCQUFTLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1lBRWpFLE1BQU0sU0FBUyxHQUFHLElBQUkscUJBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUUzQyxHQUFHLENBQUMsSUFBSSxDQUFDLCtDQUErQyxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQTtZQUUvRSxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUV4QyxNQUFNLFNBQVMsR0FBRyxJQUFJLHFCQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7WUFFM0MsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7WUFFeEMsTUFBTSxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUM7WUFFMUIsT0FBTyxJQUFJLENBQUM7UUFFaEIsQ0FBQztLQUFBO0NBRUo7QUE1QkQsZ0RBNEJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTeW5jUHJvZ3Jlc3NMaXN0ZW5lcn0gZnJvbSAnLi4vU3luY1Byb2dyZXNzTGlzdGVuZXInO1xuaW1wb3J0IHtQZW5kaW5nU3luY0pvYiwgU3RhcnRlZFN5bmNKb2J9IGZyb20gJy4uL1N5bmNKb2InO1xuaW1wb3J0IHtEZWNrRGVzY3JpcHRvcn0gZnJvbSAnLi9EZWNrRGVzY3JpcHRvcic7XG5pbXBvcnQge05vdGVEZXNjcmlwdG9yfSBmcm9tICcuL05vdGVEZXNjcmlwdG9yJztcbmltcG9ydCB7RGVja3NTeW5jfSBmcm9tICcuL0RlY2tzU3luYyc7XG5pbXBvcnQge1N5bmNRdWV1ZX0gZnJvbSAnLi4vU3luY1F1ZXVlJztcbmltcG9ydCB7Tm90ZXNTeW5jfSBmcm9tICcuL05vdGVzU3luYyc7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9sb2dnZXIvTG9nZ2VyJztcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG5hYnN0cmFjdCBjbGFzcyBBbmtpU3luY0pvYiB7XG5cbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgc3luY1Byb2dyZXNzTGlzdGVuZXI6IFN5bmNQcm9ncmVzc0xpc3RlbmVyO1xuICAgIHByb3RlY3RlZCByZWFkb25seSBkZWNrRGVzY3JpcHRvcnM6IERlY2tEZXNjcmlwdG9yW107XG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IG5vdGVEZXNjcmlwdG9yczogTm90ZURlc2NyaXB0b3JbXTtcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihzeW5jUHJvZ3Jlc3NMaXN0ZW5lcjogU3luY1Byb2dyZXNzTGlzdGVuZXIsXG4gICAgICAgICAgICAgICAgICAgICAgIGRlY2tEZXNjcmlwdG9yczogRGVja0Rlc2NyaXB0b3JbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgbm90ZURlc2NyaXB0b3JzOiBOb3RlRGVzY3JpcHRvcltdKSB7XG5cbiAgICAgICAgdGhpcy5zeW5jUHJvZ3Jlc3NMaXN0ZW5lciA9IHN5bmNQcm9ncmVzc0xpc3RlbmVyO1xuICAgICAgICB0aGlzLmRlY2tEZXNjcmlwdG9ycyA9IGRlY2tEZXNjcmlwdG9ycztcbiAgICAgICAgdGhpcy5ub3RlRGVzY3JpcHRvcnMgPSBub3RlRGVzY3JpcHRvcnM7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGNsYXNzIFBlbmRpbmdBbmtpU3luY0pvYiBleHRlbmRzIEFua2lTeW5jSm9iIGltcGxlbWVudHMgUGVuZGluZ1N5bmNKb2Ige1xuXG4gICAgcHVibGljIGFzeW5jIHN0YXJ0KCk6IFByb21pc2U8U3RhcnRlZFN5bmNKb2I+IHtcblxuICAgICAgICBjb25zdCBzdGFydGVkQW5raVN5bmNKb2IgPSBuZXcgU3RhcnRlZEFua2lTeW5jSm9iKHRoaXMuc3luY1Byb2dyZXNzTGlzdGVuZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWNrRGVzY3JpcHRvcnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub3RlRGVzY3JpcHRvcnMpO1xuICAgICAgICByZXR1cm4gc3RhcnRlZEFua2lTeW5jSm9iLnJ1bigpO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBjbGFzcyBTdGFydGVkQW5raVN5bmNKb2IgZXh0ZW5kcyBBbmtpU3luY0pvYiBpbXBsZW1lbnRzIFN0YXJ0ZWRTeW5jSm9iIHtcblxuICAgIHB1YmxpYyBhYm9ydGVkID0gZmFsc2U7XG5cbiAgICBwdWJsaWMgYWJvcnQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYWJvcnRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIHJ1bigpOiBQcm9taXNlPHRoaXM+IHtcblxuICAgICAgICBjb25zdCBzeW5jUXVldWUgPSBuZXcgU3luY1F1ZXVlKHRoaXMsIHRoaXMuc3luY1Byb2dyZXNzTGlzdGVuZXIpO1xuXG4gICAgICAgIGNvbnN0IGRlY2tzU3luYyA9IG5ldyBEZWNrc1N5bmMoc3luY1F1ZXVlKTtcblxuICAgICAgICBsb2cuaW5mbyhcIlN0YXJ0aW5nIGFua2kgc3luYyBqb2Igd2l0aCBkZWNrRGVzY3JpcHRvcnM6IFwiLCB0aGlzLmRlY2tEZXNjcmlwdG9ycylcblxuICAgICAgICBkZWNrc1N5bmMuZW5xdWV1ZSh0aGlzLmRlY2tEZXNjcmlwdG9ycyk7XG5cbiAgICAgICAgY29uc3Qgbm90ZXNTeW5jID0gbmV3IE5vdGVzU3luYyhzeW5jUXVldWUpO1xuXG4gICAgICAgIG5vdGVzU3luYy5lbnF1ZXVlKHRoaXMubm90ZURlc2NyaXB0b3JzKTtcblxuICAgICAgICBhd2FpdCBzeW5jUXVldWUuZXhlY3V0ZSgpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgfVxuXG59XG4iXX0=