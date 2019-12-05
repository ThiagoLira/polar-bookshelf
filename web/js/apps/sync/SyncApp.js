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
const AnkiSyncEngine_1 = require("./framework/anki/AnkiSyncEngine");
const DocMetaSet_1 = require("../../metadata/DocMetaSet");
const Logger_1 = require("polar-shared/src/logger/Logger");
const DefaultPersistenceLayer_1 = require("../../datastore/DefaultPersistenceLayer");
const DiskDatastore_1 = require("../../datastore/DiskDatastore");
const ProgressLog_1 = require("../../ui/progress_log/ProgressLog");
const log = Logger_1.Logger.create();
class SyncApp {
    constructor() {
        this.progressLog = new ProgressLog_1.ProgressLog();
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            const url = new URL(window.location.href);
            let fingerprint = url.searchParams.get("fingerprint");
            if (!fingerprint) {
                fingerprint = '110dd61fd57444010b1ab5ff38782f0f';
            }
            const ankiSyncEngine = new AnkiSyncEngine_1.AnkiSyncEngine();
            const datastore = new DiskDatastore_1.DiskDatastore();
            yield datastore.init();
            const persistenceLayer = new DefaultPersistenceLayer_1.DefaultPersistenceLayer(datastore);
            yield persistenceLayer.init();
            const docMeta = yield persistenceLayer.getDocMeta(fingerprint);
            if (!docMeta) {
                throw new Error("No DocMeta for fingerprint: " + fingerprint);
            }
            log.info("Syncing document with title: ", docMeta.docInfo.title);
            const docMetaSet = new DocMetaSet_1.DocMetaSet(docMeta);
            const syncProgressListener = syncProgress => {
                log.info("Sync progress: ", syncProgress);
                let message;
                syncProgress.taskResult.when(taskResult => {
                    message = taskResult.message;
                });
                this.progressLog.update({
                    percentage: syncProgress.percentage,
                    message
                });
            };
        });
    }
}
exports.SyncApp = SyncApp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3luY0FwcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlN5bmNBcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxvRUFBK0Q7QUFDL0QsMERBQXFEO0FBRXJELDJEQUFzRDtBQUN0RCxxRkFBZ0Y7QUFDaEYsaUVBQTREO0FBQzVELG1FQUE4RDtBQUU5RCxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFNUIsTUFBYSxPQUFPO0lBQXBCO1FBRVksZ0JBQVcsR0FBZ0IsSUFBSSx5QkFBVyxFQUFFLENBQUM7SUF5RHpELENBQUM7SUF2RGdCLEtBQUs7O1lBRWQsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUUxQyxJQUFJLFdBQVcsR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUV0RCxJQUFJLENBQUUsV0FBVyxFQUFFO2dCQUVmLFdBQVcsR0FBRyxrQ0FBa0MsQ0FBQzthQUNwRDtZQUVELE1BQU0sY0FBYyxHQUFHLElBQUksK0JBQWMsRUFBRSxDQUFDO1lBRTVDLE1BQU0sU0FBUyxHQUFHLElBQUksNkJBQWEsRUFBRSxDQUFDO1lBRXRDLE1BQU0sU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO1lBRXZCLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxpREFBdUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUVoRSxNQUFNLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDO1lBRTlCLE1BQU0sT0FBTyxHQUFHLE1BQU0sZ0JBQWdCLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBRS9ELElBQUksQ0FBRSxPQUFPLEVBQUU7Z0JBQ1gsTUFBTSxJQUFJLEtBQUssQ0FBQyw4QkFBOEIsR0FBRyxXQUFXLENBQUMsQ0FBQzthQUNqRTtZQUVELEdBQUcsQ0FBQyxJQUFJLENBQUMsK0JBQStCLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUVqRSxNQUFNLFVBQVUsR0FBRyxJQUFJLHVCQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFM0MsTUFBTSxvQkFBb0IsR0FBeUIsWUFBWSxDQUFDLEVBQUU7Z0JBQzlELEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsWUFBWSxDQUFDLENBQUM7Z0JBRTFDLElBQUksT0FBMkIsQ0FBQztnQkFFaEMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7b0JBQ3RDLE9BQU8sR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDO2dCQUNqQyxDQUFDLENBQUMsQ0FBQztnQkFFSCxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQztvQkFDcEIsVUFBVSxFQUFFLFlBQVksQ0FBQyxVQUFVO29CQUNuQyxPQUFPO2lCQUNWLENBQUMsQ0FBQztZQUVQLENBQUMsQ0FBQztRQVFOLENBQUM7S0FBQTtDQUVKO0FBM0RELDBCQTJEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QW5raVN5bmNFbmdpbmV9IGZyb20gJy4vZnJhbWV3b3JrL2Fua2kvQW5raVN5bmNFbmdpbmUnO1xuaW1wb3J0IHtEb2NNZXRhU2V0fSBmcm9tICcuLi8uLi9tZXRhZGF0YS9Eb2NNZXRhU2V0JztcbmltcG9ydCB7U3luY1Byb2dyZXNzTGlzdGVuZXJ9IGZyb20gJy4vZnJhbWV3b3JrL1N5bmNQcm9ncmVzc0xpc3RlbmVyJztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL2xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IHtEZWZhdWx0UGVyc2lzdGVuY2VMYXllcn0gZnJvbSAnLi4vLi4vZGF0YXN0b3JlL0RlZmF1bHRQZXJzaXN0ZW5jZUxheWVyJztcbmltcG9ydCB7RGlza0RhdGFzdG9yZX0gZnJvbSAnLi4vLi4vZGF0YXN0b3JlL0Rpc2tEYXRhc3RvcmUnO1xuaW1wb3J0IHtQcm9ncmVzc0xvZ30gZnJvbSAnLi4vLi4vdWkvcHJvZ3Jlc3NfbG9nL1Byb2dyZXNzTG9nJztcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG5leHBvcnQgY2xhc3MgU3luY0FwcCB7XG5cbiAgICBwcml2YXRlIHByb2dyZXNzTG9nOiBQcm9ncmVzc0xvZyA9IG5ldyBQcm9ncmVzc0xvZygpO1xuXG4gICAgcHVibGljIGFzeW5jIHN0YXJ0KCkge1xuXG4gICAgICAgIGNvbnN0IHVybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuXG4gICAgICAgIGxldCBmaW5nZXJwcmludCA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwiZmluZ2VycHJpbnRcIik7XG5cbiAgICAgICAgaWYgKCEgZmluZ2VycHJpbnQpIHtcbiAgICAgICAgICAgIC8vIFRPRE86IGZvciBub3cganVzdCBzeW5jIHRoZSBkZWZhdWx0IC8gZXhhbXBsZSBkb2N1bWVudCBmb3IgdGVzdGluZ1xuICAgICAgICAgICAgZmluZ2VycHJpbnQgPSAnMTEwZGQ2MWZkNTc0NDQwMTBiMWFiNWZmMzg3ODJmMGYnO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYW5raVN5bmNFbmdpbmUgPSBuZXcgQW5raVN5bmNFbmdpbmUoKTtcblxuICAgICAgICBjb25zdCBkYXRhc3RvcmUgPSBuZXcgRGlza0RhdGFzdG9yZSgpO1xuXG4gICAgICAgIGF3YWl0IGRhdGFzdG9yZS5pbml0KCk7XG5cbiAgICAgICAgY29uc3QgcGVyc2lzdGVuY2VMYXllciA9IG5ldyBEZWZhdWx0UGVyc2lzdGVuY2VMYXllcihkYXRhc3RvcmUpO1xuXG4gICAgICAgIGF3YWl0IHBlcnNpc3RlbmNlTGF5ZXIuaW5pdCgpO1xuXG4gICAgICAgIGNvbnN0IGRvY01ldGEgPSBhd2FpdCBwZXJzaXN0ZW5jZUxheWVyLmdldERvY01ldGEoZmluZ2VycHJpbnQpO1xuXG4gICAgICAgIGlmICghIGRvY01ldGEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIERvY01ldGEgZm9yIGZpbmdlcnByaW50OiBcIiArIGZpbmdlcnByaW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxvZy5pbmZvKFwiU3luY2luZyBkb2N1bWVudCB3aXRoIHRpdGxlOiBcIiwgZG9jTWV0YS5kb2NJbmZvLnRpdGxlKTtcblxuICAgICAgICBjb25zdCBkb2NNZXRhU2V0ID0gbmV3IERvY01ldGFTZXQoZG9jTWV0YSk7XG5cbiAgICAgICAgY29uc3Qgc3luY1Byb2dyZXNzTGlzdGVuZXI6IFN5bmNQcm9ncmVzc0xpc3RlbmVyID0gc3luY1Byb2dyZXNzID0+IHtcbiAgICAgICAgICAgIGxvZy5pbmZvKFwiU3luYyBwcm9ncmVzczogXCIsIHN5bmNQcm9ncmVzcyk7XG5cbiAgICAgICAgICAgIGxldCBtZXNzYWdlOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgIHN5bmNQcm9ncmVzcy50YXNrUmVzdWx0LndoZW4odGFza1Jlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IHRhc2tSZXN1bHQubWVzc2FnZTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzTG9nLnVwZGF0ZSh7XG4gICAgICAgICAgICAgICAgcGVyY2VudGFnZTogc3luY1Byb2dyZXNzLnBlcmNlbnRhZ2UsXG4gICAgICAgICAgICAgICAgbWVzc2FnZVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfTtcblxuICAgICAgICAvLyBjb25zdCBwZW5kaW5nU3luY0pvYiA9IGFua2lTeW5jRW5naW5lLnN5bmMoZG9jTWV0YVNldCwgc3luY1Byb2dyZXNzTGlzdGVuZXIpO1xuICAgICAgICAvL1xuICAgICAgICAvLyBhd2FpdCBwZW5kaW5nU3luY0pvYi5zdGFydCgpO1xuICAgICAgICAvL1xuICAgICAgICAvLyB0aGlzLnByb2dyZXNzTG9nLnVwZGF0ZSh7IHBlcmNlbnRhZ2U6IDEwMCwgbWVzc2FnZTogJ1N5bmMgY29tcGxldGUnIH0pO1xuXG4gICAgfVxuXG59XG4iXX0=