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
const Logger_1 = require("polar-shared/src/logger/Logger");
const AnkiSyncEngine_1 = require("../apps/sync/framework/anki/AnkiSyncEngine");
const RendererAnalytics_1 = require("../ga/RendererAnalytics");
const log = Logger_1.Logger.create();
class DocRepoAnkiSyncController {
    constructor(persistenceLayerProvider, syncBarProgress) {
        this.persistenceLayerProvider = persistenceLayerProvider;
        this.syncBarProgress = syncBarProgress;
    }
    start() {
        window.addEventListener("message", event => this.onMessageReceived(event), false);
    }
    onMessageReceived(event) {
        log.info("Received message: ", event);
        const triggerEvent = event.data;
        switch (event.data.type) {
            case "start-anki-sync":
                this.onStartSync()
                    .catch(err => log.error("Failed to start sync: ", err));
                break;
        }
        log.info("started");
    }
    onStartSync() {
        return __awaiter(this, void 0, void 0, function* () {
            RendererAnalytics_1.RendererAnalytics.event({ category: 'anki', action: 'sync-started' });
            let nrTasks = 0;
            let nrFailedTasks = 0;
            const syncProgressListener = syncProgress => {
                log.info("Sync progress: ", syncProgress);
                syncProgress.taskResult.map(taskResult => ++nrTasks);
                syncProgress.taskResult
                    .filter(taskResult => taskResult.failed === true)
                    .map(taskResult => ++nrFailedTasks);
                let message;
                syncProgress.taskResult.when(taskResult => {
                    message = taskResult.message;
                });
                this.syncBarProgress.dispatchEvent({
                    task: 'anki-sync',
                    message,
                    percentage: syncProgress.percentage
                });
            };
            const ankiSyncEngine = new AnkiSyncEngine_1.AnkiSyncEngine();
            const persistenceLayer = this.persistenceLayerProvider.get();
            const docMetaFiles = yield persistenceLayer.getDocMetaRefs();
            const docMetaSuppliers = docMetaFiles.map(docMetaFile => {
                return () => __awaiter(this, void 0, void 0, function* () {
                    log.info("Reading docMeta for anki sync: " + docMetaFile.fingerprint);
                    return (yield persistenceLayer.getDocMeta(docMetaFile.fingerprint));
                });
            });
            const pendingSyncJob = yield ankiSyncEngine.sync(docMetaSuppliers, syncProgressListener);
            this.syncBarProgress.dispatchEvent({
                task: 'anki-sync',
                message: "Starting anki sync...",
                percentage: 0
            });
            yield pendingSyncJob.start();
            this.syncBarProgress.dispatchEvent({
                task: 'anki-sync',
                message: `Anki sync complete. Completed ${nrTasks} with ${nrFailedTasks} failures.`,
                percentage: 100
            });
            RendererAnalytics_1.RendererAnalytics.event({ category: 'anki', action: 'sync-completed-' + nrTasks });
            RendererAnalytics_1.RendererAnalytics.event({ category: 'anki', action: 'sync-failed-' + nrFailedTasks });
        });
    }
}
exports.DocRepoAnkiSyncController = DocRepoAnkiSyncController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jUmVwb0Fua2lTeW5jQ29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkRvY1JlcG9BbmtpU3luY0NvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyREFBc0Q7QUFLdEQsK0VBQTBFO0FBRzFFLCtEQUEwRDtBQUUxRCxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFNUIsTUFBYSx5QkFBeUI7SUFLbEMsWUFBWSx3QkFBcUQsRUFBRSxlQUFrRDtRQUNqSCxJQUFJLENBQUMsd0JBQXdCLEdBQUcsd0JBQXdCLENBQUM7UUFDekQsSUFBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7SUFDM0MsQ0FBQztJQUVNLEtBQUs7UUFDUixNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3RGLENBQUM7SUFFTyxpQkFBaUIsQ0FBQyxLQUFVO1FBRWhDLEdBQUcsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFdEMsTUFBTSxZQUFZLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztRQUVoQyxRQUFRLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBRXJCLEtBQUssaUJBQWlCO2dCQUNsQixJQUFJLENBQUMsV0FBVyxFQUFFO3FCQUNiLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsd0JBQXdCLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFFNUQsTUFBTTtTQUViO1FBRUQsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUV4QixDQUFDO0lBRWEsV0FBVzs7WUFFckIscUNBQWlCLENBQUMsS0FBSyxDQUFDLEVBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFDLENBQUMsQ0FBQztZQUVwRSxJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUM7WUFDaEIsSUFBSSxhQUFhLEdBQUcsQ0FBQyxDQUFDO1lBRXRCLE1BQU0sb0JBQW9CLEdBQXlCLFlBQVksQ0FBQyxFQUFFO2dCQUU5RCxHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLFlBQVksQ0FBQyxDQUFDO2dCQUUxQyxZQUFZLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBRXJELFlBQVksQ0FBQyxVQUFVO3FCQUNsQixNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQztxQkFDaEQsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxhQUFhLENBQUMsQ0FBQztnQkFFeEMsSUFBSSxPQUEyQixDQUFDO2dCQUVoQyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtvQkFDdEMsT0FBTyxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUM7Z0JBQ2pDLENBQUMsQ0FBQyxDQUFDO2dCQUVILElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDO29CQUMvQixJQUFJLEVBQUUsV0FBVztvQkFDakIsT0FBTztvQkFDUCxVQUFVLEVBQUUsWUFBWSxDQUFDLFVBQVU7aUJBQ3RDLENBQUMsQ0FBQztZQUVQLENBQUMsQ0FBQztZQUVGLE1BQU0sY0FBYyxHQUFHLElBQUksK0JBQWMsRUFBRSxDQUFDO1lBRTVDLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLEdBQUcsRUFBRSxDQUFDO1lBRTdELE1BQU0sWUFBWSxHQUFHLE1BQU0sZ0JBQWdCLENBQUMsY0FBYyxFQUFFLENBQUM7WUFFN0QsTUFBTSxnQkFBZ0IsR0FDaEIsWUFBWSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBRTtnQkFDN0IsT0FBTyxHQUFTLEVBQUU7b0JBQ2QsR0FBRyxDQUFDLElBQUksQ0FBQyxpQ0FBaUMsR0FBRyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7b0JBQ3RFLE9BQU8sQ0FBQyxNQUFNLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUUsQ0FBQztnQkFDekUsQ0FBQyxDQUFBLENBQUM7WUFDTixDQUFDLENBQUMsQ0FBQztZQUVQLE1BQU0sY0FBYyxHQUFHLE1BQU0sY0FBYyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1lBRXpGLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDO2dCQUMvQixJQUFJLEVBQUUsV0FBVztnQkFDakIsT0FBTyxFQUFFLHVCQUF1QjtnQkFDaEMsVUFBVSxFQUFFLENBQUM7YUFDaEIsQ0FBQyxDQUFDO1lBRUgsTUFBTSxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUM7WUFFN0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUM7Z0JBQy9CLElBQUksRUFBRSxXQUFXO2dCQUNqQixPQUFPLEVBQUUsaUNBQWlDLE9BQU8sU0FBUyxhQUFhLFlBQVk7Z0JBQ25GLFVBQVUsRUFBRSxHQUFHO2FBQ2xCLENBQUMsQ0FBQztZQUVILHFDQUFpQixDQUFDLEtBQUssQ0FBQyxFQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLGlCQUFpQixHQUFHLE9BQU8sRUFBQyxDQUFDLENBQUM7WUFDakYscUNBQWlCLENBQUMsS0FBSyxDQUFDLEVBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsY0FBYyxHQUFHLGFBQWEsRUFBQyxDQUFDLENBQUM7UUFFeEYsQ0FBQztLQUFBO0NBRUo7QUFwR0QsOERBb0dDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtMb2dnZXJ9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge1N5bmNQcm9ncmVzc0xpc3RlbmVyfSBmcm9tICcuLi9hcHBzL3N5bmMvZnJhbWV3b3JrL1N5bmNQcm9ncmVzc0xpc3RlbmVyJztcbmltcG9ydCB7UGVyc2lzdGVuY2VMYXllcn0gZnJvbSAnLi4vZGF0YXN0b3JlL1BlcnNpc3RlbmNlTGF5ZXInO1xuaW1wb3J0IHtJRXZlbnREaXNwYXRjaGVyfSBmcm9tICcuLi9yZWFjdG9yL1NpbXBsZVJlYWN0b3InO1xuaW1wb3J0IHtTeW5jQmFyUHJvZ3Jlc3N9IGZyb20gJy4uL3VpL3N5bmNfYmFyL1N5bmNCYXInO1xuaW1wb3J0IHtBbmtpU3luY0VuZ2luZX0gZnJvbSAnLi4vYXBwcy9zeW5jL2ZyYW1ld29yay9hbmtpL0Fua2lTeW5jRW5naW5lJztcbmltcG9ydCB7RG9jTWV0YVN1cHBsaWVyQ29sbGVjdGlvbn0gZnJvbSAnLi4vbWV0YWRhdGEvRG9jTWV0YVN1cHBsaWVyQ29sbGVjdGlvbic7XG5pbXBvcnQge0lQcm92aWRlcn0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL1Byb3ZpZGVycyc7XG5pbXBvcnQge1JlbmRlcmVyQW5hbHl0aWNzfSBmcm9tICcuLi9nYS9SZW5kZXJlckFuYWx5dGljcyc7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuZXhwb3J0IGNsYXNzIERvY1JlcG9BbmtpU3luY0NvbnRyb2xsZXIge1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBwZXJzaXN0ZW5jZUxheWVyUHJvdmlkZXI6IElQcm92aWRlcjxQZXJzaXN0ZW5jZUxheWVyPjtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHN5bmNCYXJQcm9ncmVzczogSUV2ZW50RGlzcGF0Y2hlcjxTeW5jQmFyUHJvZ3Jlc3M+O1xuXG4gICAgY29uc3RydWN0b3IocGVyc2lzdGVuY2VMYXllclByb3ZpZGVyOiBJUHJvdmlkZXI8UGVyc2lzdGVuY2VMYXllcj4sIHN5bmNCYXJQcm9ncmVzczogSUV2ZW50RGlzcGF0Y2hlcjxTeW5jQmFyUHJvZ3Jlc3M+KSB7XG4gICAgICAgIHRoaXMucGVyc2lzdGVuY2VMYXllclByb3ZpZGVyID0gcGVyc2lzdGVuY2VMYXllclByb3ZpZGVyO1xuICAgICAgICB0aGlzLnN5bmNCYXJQcm9ncmVzcyA9IHN5bmNCYXJQcm9ncmVzcztcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhcnQoKSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBldmVudCA9PiB0aGlzLm9uTWVzc2FnZVJlY2VpdmVkKGV2ZW50KSwgZmFsc2UpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25NZXNzYWdlUmVjZWl2ZWQoZXZlbnQ6IGFueSkge1xuXG4gICAgICAgIGxvZy5pbmZvKFwiUmVjZWl2ZWQgbWVzc2FnZTogXCIsIGV2ZW50KTtcblxuICAgICAgICBjb25zdCB0cmlnZ2VyRXZlbnQgPSBldmVudC5kYXRhO1xuXG4gICAgICAgIHN3aXRjaCAoZXZlbnQuZGF0YS50eXBlKSB7XG5cbiAgICAgICAgICAgIGNhc2UgXCJzdGFydC1hbmtpLXN5bmNcIjpcbiAgICAgICAgICAgICAgICB0aGlzLm9uU3RhcnRTeW5jKClcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBsb2cuZXJyb3IoXCJGYWlsZWQgdG8gc3RhcnQgc3luYzogXCIsIGVycikpO1xuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGxvZy5pbmZvKFwic3RhcnRlZFwiKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgb25TdGFydFN5bmMoKSB7XG5cbiAgICAgICAgUmVuZGVyZXJBbmFseXRpY3MuZXZlbnQoe2NhdGVnb3J5OiAnYW5raScsIGFjdGlvbjogJ3N5bmMtc3RhcnRlZCd9KTtcblxuICAgICAgICBsZXQgbnJUYXNrcyA9IDA7XG4gICAgICAgIGxldCBuckZhaWxlZFRhc2tzID0gMDtcblxuICAgICAgICBjb25zdCBzeW5jUHJvZ3Jlc3NMaXN0ZW5lcjogU3luY1Byb2dyZXNzTGlzdGVuZXIgPSBzeW5jUHJvZ3Jlc3MgPT4ge1xuXG4gICAgICAgICAgICBsb2cuaW5mbyhcIlN5bmMgcHJvZ3Jlc3M6IFwiLCBzeW5jUHJvZ3Jlc3MpO1xuXG4gICAgICAgICAgICBzeW5jUHJvZ3Jlc3MudGFza1Jlc3VsdC5tYXAodGFza1Jlc3VsdCA9PiArK25yVGFza3MpO1xuXG4gICAgICAgICAgICBzeW5jUHJvZ3Jlc3MudGFza1Jlc3VsdFxuICAgICAgICAgICAgICAgIC5maWx0ZXIodGFza1Jlc3VsdCA9PiB0YXNrUmVzdWx0LmZhaWxlZCA9PT0gdHJ1ZSlcbiAgICAgICAgICAgICAgICAubWFwKHRhc2tSZXN1bHQgPT4gKytuckZhaWxlZFRhc2tzKTtcblxuICAgICAgICAgICAgbGV0IG1lc3NhZ2U6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgc3luY1Byb2dyZXNzLnRhc2tSZXN1bHQud2hlbih0YXNrUmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gdGFza1Jlc3VsdC5tZXNzYWdlO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMuc3luY0JhclByb2dyZXNzLmRpc3BhdGNoRXZlbnQoe1xuICAgICAgICAgICAgICAgIHRhc2s6ICdhbmtpLXN5bmMnLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgcGVyY2VudGFnZTogc3luY1Byb2dyZXNzLnBlcmNlbnRhZ2VcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgYW5raVN5bmNFbmdpbmUgPSBuZXcgQW5raVN5bmNFbmdpbmUoKTtcblxuICAgICAgICBjb25zdCBwZXJzaXN0ZW5jZUxheWVyID0gdGhpcy5wZXJzaXN0ZW5jZUxheWVyUHJvdmlkZXIuZ2V0KCk7XG5cbiAgICAgICAgY29uc3QgZG9jTWV0YUZpbGVzID0gYXdhaXQgcGVyc2lzdGVuY2VMYXllci5nZXREb2NNZXRhUmVmcygpO1xuXG4gICAgICAgIGNvbnN0IGRvY01ldGFTdXBwbGllcnM6IERvY01ldGFTdXBwbGllckNvbGxlY3Rpb25cbiAgICAgICAgICAgID0gZG9jTWV0YUZpbGVzLm1hcChkb2NNZXRhRmlsZSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbG9nLmluZm8oXCJSZWFkaW5nIGRvY01ldGEgZm9yIGFua2kgc3luYzogXCIgKyBkb2NNZXRhRmlsZS5maW5nZXJwcmludCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoYXdhaXQgcGVyc2lzdGVuY2VMYXllci5nZXREb2NNZXRhKGRvY01ldGFGaWxlLmZpbmdlcnByaW50KSkhO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBwZW5kaW5nU3luY0pvYiA9IGF3YWl0IGFua2lTeW5jRW5naW5lLnN5bmMoZG9jTWV0YVN1cHBsaWVycywgc3luY1Byb2dyZXNzTGlzdGVuZXIpO1xuXG4gICAgICAgIHRoaXMuc3luY0JhclByb2dyZXNzLmRpc3BhdGNoRXZlbnQoe1xuICAgICAgICAgICAgdGFzazogJ2Fua2ktc3luYycsXG4gICAgICAgICAgICBtZXNzYWdlOiBcIlN0YXJ0aW5nIGFua2kgc3luYy4uLlwiLFxuICAgICAgICAgICAgcGVyY2VudGFnZTogMFxuICAgICAgICB9KTtcblxuICAgICAgICBhd2FpdCBwZW5kaW5nU3luY0pvYi5zdGFydCgpO1xuXG4gICAgICAgIHRoaXMuc3luY0JhclByb2dyZXNzLmRpc3BhdGNoRXZlbnQoe1xuICAgICAgICAgICAgdGFzazogJ2Fua2ktc3luYycsXG4gICAgICAgICAgICBtZXNzYWdlOiBgQW5raSBzeW5jIGNvbXBsZXRlLiBDb21wbGV0ZWQgJHtuclRhc2tzfSB3aXRoICR7bnJGYWlsZWRUYXNrc30gZmFpbHVyZXMuYCxcbiAgICAgICAgICAgIHBlcmNlbnRhZ2U6IDEwMFxuICAgICAgICB9KTtcblxuICAgICAgICBSZW5kZXJlckFuYWx5dGljcy5ldmVudCh7Y2F0ZWdvcnk6ICdhbmtpJywgYWN0aW9uOiAnc3luYy1jb21wbGV0ZWQtJyArIG5yVGFza3N9KTtcbiAgICAgICAgUmVuZGVyZXJBbmFseXRpY3MuZXZlbnQoe2NhdGVnb3J5OiAnYW5raScsIGFjdGlvbjogJ3N5bmMtZmFpbGVkLScgKyBuckZhaWxlZFRhc2tzfSk7XG5cbiAgICB9XG5cbn1cbiJdfQ==