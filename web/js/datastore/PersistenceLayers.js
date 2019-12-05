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
const Functions_1 = require("polar-shared/src/util/Functions");
const AsyncWorkQueue_1 = require("polar-shared/src/util/AsyncWorkQueue");
const Datastore_1 = require("./Datastore");
const UUIDs_1 = require("../metadata/UUIDs");
const ProgressTracker_1 = require("polar-shared/src/util/ProgressTracker");
const DocMetas_1 = require("../metadata/DocMetas");
const DefaultPersistenceLayer_1 = require("./DefaultPersistenceLayer");
const Preconditions_1 = require("polar-shared/src/Preconditions");
const URLs_1 = require("polar-shared/src/util/URLs");
const Logger_1 = require("polar-shared/src/logger/Logger");
const BackendFileRefs_1 = require("./BackendFileRefs");
const log = Logger_1.Logger.create();
class PersistenceLayers {
    static changeVisibility(store, docMeta, visibility) {
        return __awaiter(this, void 0, void 0, function* () {
            log.info("Changing document visibility changed to: ", visibility);
            const backendFileRefs = BackendFileRefs_1.BackendFileRefs.toBackendFileRefs(docMeta);
            const writeFileOpts = { visibility, updateMeta: true };
            const toWriteFilePromise = (backendFileRef) => __awaiter(this, void 0, void 0, function* () {
                yield store.writeFile(backendFileRef.backend, backendFileRef, undefined, writeFileOpts);
            });
            const toWriteFilePromises = () => {
                return backendFileRefs.map(current => toWriteFilePromise(current));
            };
            const toWriteDocMetaPromise = () => __awaiter(this, void 0, void 0, function* () {
                docMeta.docInfo.visibility = visibility;
                yield store.writeDocMeta(docMeta);
            });
            const writeFilePromises = toWriteFilePromises();
            const writeDocMetaPromise = toWriteDocMetaPromise();
            const promises = [...writeFilePromises, writeDocMetaPromise];
            yield Promise.all(promises);
            log.info("Document visibility changed to: ", visibility);
        });
    }
    static toPersistenceLayer(input) {
        return new DefaultPersistenceLayer_1.DefaultPersistenceLayer(input);
    }
    static toSyncDocMap(datastore, progressStateListener = Functions_1.NULL_FUNCTION) {
        return __awaiter(this, void 0, void 0, function* () {
            const docMetaFiles = yield datastore.getDocMetaRefs();
            return this.toSyncDocMapFromDocs(datastore, docMetaFiles, progressStateListener);
        });
    }
    static toSyncDocMapFromDocs(datastore, docMetaRefs, progressStateListener = Functions_1.NULL_FUNCTION) {
        return __awaiter(this, void 0, void 0, function* () {
            const syncDocsMap = {};
            const work = [];
            const asyncWorkQueue = new AsyncWorkQueue_1.AsyncWorkQueue(work);
            const init = {
                total: docMetaRefs.length,
                id: `datastore:${datastore.id}#toSyncDocMapFromDocs`
            };
            const progressTracker = new ProgressTracker_1.ProgressTracker(init);
            for (const docMetaRef of docMetaRefs) {
                work.push(() => __awaiter(this, void 0, void 0, function* () {
                    let docMeta = docMetaRef.docMeta;
                    if (!docMeta) {
                        const data = yield datastore.getDocMeta(docMetaRef.fingerprint);
                        if (Preconditions_1.isPresent(data)) {
                            docMeta = DocMetas_1.DocMetas.deserialize(data, docMetaRef.fingerprint);
                        }
                    }
                    if (Preconditions_1.isPresent(docMeta)) {
                        syncDocsMap[docMetaRef.fingerprint] = Datastore_1.SyncDocs.fromDocInfo(docMeta.docInfo, 'created');
                        progressStateListener(progressTracker.peek());
                    }
                    else {
                    }
                }));
            }
            yield asyncWorkQueue.execute();
            progressStateListener(progressTracker.terminate());
            return syncDocsMap;
        });
    }
    static merge(syncOrigin0, syncOrigin1, listener = Functions_1.ASYNC_NULL_FUNCTION) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.transfer(syncOrigin0, syncOrigin1, listener);
            yield this.transfer(syncOrigin1, syncOrigin0, listener);
        });
    }
    static synchronizeOrigins(localSyncOrigin, cloudSyncOrigin, listener = Functions_1.ASYNC_NULL_FUNCTION) {
        return __awaiter(this, void 0, void 0, function* () {
            log.notice("Transferring from local -> cloud...");
            const localToCloud = yield PersistenceLayers.transfer(localSyncOrigin, cloudSyncOrigin, listener, 'local-to-cloud');
            log.notice("Transferring from local -> cloud...done", localToCloud);
            log.notice("Transferring from cloud -> local...");
            const cloudToLocal = yield PersistenceLayers.transfer(cloudSyncOrigin, localSyncOrigin, listener, 'cloud-to-local');
            log.notice("Transferring from cloud -> local...done", cloudToLocal);
        });
    }
    static transfer(source, target, listener = Functions_1.ASYNC_NULL_FUNCTION, id = 'none') {
        return __awaiter(this, void 0, void 0, function* () {
            const result = {
                docMeta: {
                    total: 0,
                    writes: 0
                },
                files: {
                    total: 0,
                    writes: 0
                }
            };
            function handleSyncFile(syncDoc, fileRef) {
                return __awaiter(this, void 0, void 0, function* () {
                    ++result.files.total;
                    const containsFile = (datastore, id) => __awaiter(this, void 0, void 0, function* () {
                        try {
                            return yield datastore.containsFile(fileRef.backend, fileRef);
                        }
                        catch (e) {
                            log.error(`Could not get file ${fileRef.name} for doc with fingerprint: ${syncDoc.fingerprint} from ${id}`, fileRef, e);
                            throw e;
                        }
                    });
                    const targetContainsFile = yield containsFile(target.datastore, 'target');
                    if (!targetContainsFile) {
                        const sourceContainsFile = yield containsFile(source.datastore, 'source');
                        if (sourceContainsFile) {
                            const sourceFile = source.datastore.getFile(fileRef.backend, fileRef);
                            const blob = yield URLs_1.URLs.toBlob(sourceFile.url);
                            yield target.datastore.writeFile(sourceFile.backend, fileRef, blob);
                            ++result.files.writes;
                        }
                        else {
                            log.warn(`Both the target and source files are missing in doc ${syncDoc.fingerprint} (${syncDoc.title}): `, fileRef);
                        }
                    }
                });
            }
            function handleSyncDoc(sourceSyncDoc, targetSyncDoc) {
                return __awaiter(this, void 0, void 0, function* () {
                    ++result.docMeta.total;
                    for (const sourceSyncFile of sourceSyncDoc.files) {
                        if (sourceSyncFile.name) {
                            yield handleSyncFile(sourceSyncDoc, sourceSyncFile);
                        }
                    }
                    let doWriteDocMeta = !targetSyncDoc;
                    if (targetSyncDoc) {
                        const cmp = UUIDs_1.UUIDs.compare(targetSyncDoc.uuid, sourceSyncDoc.uuid);
                        doWriteDocMeta = cmp < 0;
                    }
                    if (doWriteDocMeta) {
                        const data = yield source.datastore.getDocMeta(sourceSyncDoc.fingerprint);
                        if (data) {
                            yield target.datastore.write(sourceSyncDoc.fingerprint, data, sourceSyncDoc.docMetaFileRef.docInfo);
                        }
                        else {
                            log.warn("No data for fingerprint: " + sourceSyncDoc.fingerprint);
                        }
                        ++result.docMeta.writes;
                    }
                    const progress = progressTracker.incr();
                    const docMetaSnapshotEvent = {
                        datastore: source.datastore.id,
                        progress,
                        consistency: 'committed',
                        docMetaMutations: []
                    };
                    yield listener(docMetaSnapshotEvent);
                });
            }
            const docFileAsyncWorkQueue = new AsyncWorkQueue_1.AsyncWorkQueue([]);
            const docMetaAsyncWorkQueue = new AsyncWorkQueue_1.AsyncWorkQueue([]);
            const sourceSyncDocs = Object.values(source.syncDocMap);
            const progressID = `transfer:source=${source.datastore.id},target=${target.datastore.id}`;
            const progressTracker = new ProgressTracker_1.ProgressTracker({ total: sourceSyncDocs.length, id: progressID });
            for (const sourceSyncDoc of sourceSyncDocs) {
                const targetSyncDoc = target.syncDocMap[sourceSyncDoc.fingerprint];
                const handler = () => __awaiter(this, void 0, void 0, function* () {
                    try {
                        yield handleSyncDoc(sourceSyncDoc, targetSyncDoc);
                    }
                    catch (e) {
                        log.error("Unable to sync between source and target: ", { sourceSyncDoc, targetSyncDoc }, e);
                    }
                });
                docMetaAsyncWorkQueue.enqueue(handler);
            }
            const docFileExecutionPromise = docFileAsyncWorkQueue.execute();
            const docMetaExecutionPromise = docMetaAsyncWorkQueue.execute();
            yield Promise.all([docFileExecutionPromise, docMetaExecutionPromise]);
            yield listener({
                datastore: source.datastore.id,
                progress: progressTracker.terminate(),
                consistency: 'committed',
                docMetaMutations: []
            });
            return result;
        });
    }
}
exports.PersistenceLayers = PersistenceLayers;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGVyc2lzdGVuY2VMYXllcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJQZXJzaXN0ZW5jZUxheWVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBLCtEQUFtRjtBQUNuRix5RUFBbUY7QUFFbkYsMkNBQXlIO0FBQ3pILDZDQUF3QztBQUN4QywyRUFBd0Y7QUFDeEYsbURBQThDO0FBQzlDLHVFQUFrRTtBQUVsRSxrRUFBeUQ7QUFDekQscURBQWdEO0FBQ2hELDJEQUFzRDtBQUN0RCx1REFBa0Q7QUFLbEQsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLE1BQWEsaUJBQWlCO0lBUW5CLE1BQU0sQ0FBTyxnQkFBZ0IsQ0FBQyxLQUF1QixFQUN2QixPQUFpQixFQUNqQixVQUFzQjs7WUFFdkQsR0FBRyxDQUFDLElBQUksQ0FBQywyQ0FBMkMsRUFBRSxVQUFVLENBQUMsQ0FBQztZQUVsRSxNQUFNLGVBQWUsR0FBRyxpQ0FBZSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRW5FLE1BQU0sYUFBYSxHQUFHLEVBQUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUMsQ0FBQztZQUVyRCxNQUFNLGtCQUFrQixHQUFHLENBQU8sY0FBOEIsRUFBaUIsRUFBRTtnQkFFL0UsTUFBTSxLQUFLLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQ3RCLGNBQWMsRUFDZCxTQUFVLEVBQ1YsYUFBYSxDQUFDLENBQUM7WUFFekMsQ0FBQyxDQUFBLENBQUM7WUFFRixNQUFNLG1CQUFtQixHQUFHLEdBQWlDLEVBQUU7Z0JBQzNELE9BQU8sZUFBZSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDdkUsQ0FBQyxDQUFDO1lBRUYsTUFBTSxxQkFBcUIsR0FBRyxHQUF3QixFQUFFO2dCQUVwRCxPQUFPLENB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RUFBRSxDQUFDO1lBQ2hFLE1BQU0sdUJBQXVCLEdBQUcscUJBQXFCLENBQUMsT0FBTyxFQUFFLENBQUM7WUFFaEUsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsdUJBQXVCLEVBQUUsdUJBQXVCLENBQUMsQ0FBQyxDQUFDO1lBRXRFLE1BQU0sUUFBUSxDQUFDO2dCQUNYLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUU7Z0JBQzlCLFFBQVEsRUFBRSxlQUFlLENBQUMsU0FBUyxFQUFFO2dCQUNyQyxXQUFXLEVBQUUsV0FBVztnQkFDeEIsZ0JBQWdCLEVBQUUsRUFBRTthQUN2QixDQUFDLENBQUM7WUFFSCxPQUFPLE1BQU0sQ0FBQztRQUVsQixDQUFDO0tBQUE7Q0FFSjtBQXpWRCw4Q0F5VkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BlcnNpc3RlbmNlTGF5ZXJ9IGZyb20gXCIuL1BlcnNpc3RlbmNlTGF5ZXJcIjtcbmltcG9ydCB7QVNZTkNfTlVMTF9GVU5DVElPTiwgTlVMTF9GVU5DVElPTn0gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvdXRpbC9GdW5jdGlvbnNcIjtcbmltcG9ydCB7QXN5bmNGdW5jdGlvbiwgQXN5bmNXb3JrUXVldWV9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC9Bc3luY1dvcmtRdWV1ZSc7XG5pbXBvcnQge0RvY01ldGFSZWZ9IGZyb20gXCIuL0RvY01ldGFSZWZcIjtcbmltcG9ydCB7RGF0YXN0b3JlLCBEb2NNZXRhU25hcHNob3RFdmVudCwgRG9jTWV0YVNuYXBzaG90RXZlbnRMaXN0ZW5lciwgU3luY0RvYywgU3luY0RvY01hcCwgU3luY0RvY3N9IGZyb20gJy4vRGF0YXN0b3JlJztcbmltcG9ydCB7VVVJRHN9IGZyb20gJy4uL21ldGFkYXRhL1VVSURzJztcbmltcG9ydCB7UHJvZ3Jlc3NMaXN0ZW5lciwgUHJvZ3Jlc3NUcmFja2VyfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvUHJvZ3Jlc3NUcmFja2VyJztcbmltcG9ydCB7RG9jTWV0YXN9IGZyb20gJy4uL21ldGFkYXRhL0RvY01ldGFzJztcbmltcG9ydCB7RGVmYXVsdFBlcnNpc3RlbmNlTGF5ZXJ9IGZyb20gJy4vRGVmYXVsdFBlcnNpc3RlbmNlTGF5ZXInO1xuaW1wb3J0IHtEb2NNZXRhfSBmcm9tICcuLi9tZXRhZGF0YS9Eb2NNZXRhJztcbmltcG9ydCB7aXNQcmVzZW50fSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL1ByZWNvbmRpdGlvbnMnO1xuaW1wb3J0IHtVUkxzfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy91dGlsL1VSTHNcIjtcbmltcG9ydCB7TG9nZ2VyfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy9sb2dnZXIvTG9nZ2VyXCI7XG5pbXBvcnQge0JhY2tlbmRGaWxlUmVmc30gZnJvbSAnLi9CYWNrZW5kRmlsZVJlZnMnO1xuaW1wb3J0IHtJRG9jTWV0YX0gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvbWV0YWRhdGEvSURvY01ldGFcIjtcbmltcG9ydCB7QmFja2VuZEZpbGVSZWZ9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL2RhdGFzdG9yZS9CYWNrZW5kRmlsZVJlZlwiO1xuaW1wb3J0IHtWaXNpYmlsaXR5fSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy9kYXRhc3RvcmUvVmlzaWJpbGl0eVwiO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbmV4cG9ydCBjbGFzcyBQZXJzaXN0ZW5jZUxheWVycyB7XG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgdmlzaWJpbGl0eSBvZiB0aGUgZ2l2ZW4gRG9jTWV0YSBpbmNsdWRpbmcgc2V0dGluZyB0aGUgdmlzaWJpbGl0eVxuICAgICAqIGl0c2VsZiBvbiB0aGUgRG9jSW5mbyBidXQgYWxzbyBzZXR0aW5nIHRoZSB2aXNpYmlsaXR5IGZvciB0aGUgaW5kaXZpZHVhbFxuICAgICAqIGZpbGVzLlxuICAgICAqXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBjaGFuZ2VWaXNpYmlsaXR5KHN0b3JlOiBQZXJzaXN0ZW5jZUxheWVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2NNZXRhOiBJRG9jTWV0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogVmlzaWJpbGl0eSkge1xuXG4gICAgICAgIGxvZy5pbmZvKFwiQ2hhbmdpbmcgZG9jdW1lbnQgdmlzaWJpbGl0eSBjaGFuZ2VkIHRvOiBcIiwgdmlzaWJpbGl0eSk7XG5cbiAgICAgICAgY29uc3QgYmFja2VuZEZpbGVSZWZzID0gQmFja2VuZEZpbGVSZWZzLnRvQmFja2VuZEZpbGVSZWZzKGRvY01ldGEpO1xuXG4gICAgICAgIGNvbnN0IHdyaXRlRmlsZU9wdHMgPSB7dmlzaWJpbGl0eSwgdXBkYXRlTWV0YTogdHJ1ZX07XG5cbiAgICAgICAgY29uc3QgdG9Xcml0ZUZpbGVQcm9taXNlID0gYXN5bmMgKGJhY2tlbmRGaWxlUmVmOiBCYWNrZW5kRmlsZVJlZik6IFByb21pc2U8dm9pZD4gPT4ge1xuXG4gICAgICAgICAgICBhd2FpdCBzdG9yZS53cml0ZUZpbGUoYmFja2VuZEZpbGVSZWYuYmFja2VuZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZW5kRmlsZVJlZixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmRlZmluZWQhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdyaXRlRmlsZU9wdHMpO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgdG9Xcml0ZUZpbGVQcm9taXNlcyA9ICgpOiBSZWFkb25seUFycmF5PFByb21pc2U8dm9pZD4+ID0+IHtcbiAgICAgICAgICAgIHJldHVybiBiYWNrZW5kRmlsZVJlZnMubWFwKGN1cnJlbnQgPT4gdG9Xcml0ZUZpbGVQcm9taXNlKGN1cnJlbnQpKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCB0b1dyaXRlRG9jTWV0YVByb21pc2UgPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cbiAgICAgICAgICAgIGRvY01ldGEuZG9jSW5mby52aXNpYmlsaXR5ID0gdmlzaWJpbGl0eTtcblxuICAgICAgICAgICAgYXdhaXQgc3RvcmUud3JpdGVEb2NNZXRhKGRvY01ldGEpO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3Qgd3JpdGVGaWxlUHJvbWlzZXMgPSB0b1dyaXRlRmlsZVByb21pc2VzKCk7XG4gICAgICAgIGNvbnN0IHdyaXRlRG9jTWV0YVByb21pc2UgPSB0b1dyaXRlRG9jTWV0YVByb21pc2UoKTtcblxuICAgICAgICBjb25zdCBwcm9taXNlcyA9IFsuLi53cml0ZUZpbGVQcm9taXNlcywgd3JpdGVEb2NNZXRhUHJvbWlzZV07XG5cbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuXG4gICAgICAgIGxvZy5pbmZvKFwiRG9jdW1lbnQgdmlzaWJpbGl0eSBjaGFuZ2VkIHRvOiBcIiwgdmlzaWJpbGl0eSk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHRvUGVyc2lzdGVuY2VMYXllcihpbnB1dDogRGF0YXN0b3JlICk6IFBlcnNpc3RlbmNlTGF5ZXIge1xuICAgICAgICByZXR1cm4gbmV3IERlZmF1bHRQZXJzaXN0ZW5jZUxheWVyKGlucHV0KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIHRvU3luY0RvY01hcChkYXRhc3RvcmU6IERhdGFzdG9yZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmVzc1N0YXRlTGlzdGVuZXI6IFByb2dyZXNzTGlzdGVuZXIgPSBOVUxMX0ZVTkNUSU9OKSB7XG5cbiAgICAgICAgY29uc3QgZG9jTWV0YUZpbGVzID0gYXdhaXQgZGF0YXN0b3JlLmdldERvY01ldGFSZWZzKCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMudG9TeW5jRG9jTWFwRnJvbURvY3MoZGF0YXN0b3JlLCBkb2NNZXRhRmlsZXMsIHByb2dyZXNzU3RhdGVMaXN0ZW5lcik7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIHRvU3luY0RvY01hcEZyb21Eb2NzKGRhdGFzdG9yZTogRGF0YXN0b3JlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jTWV0YVJlZnM6IERvY01ldGFSZWZbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2dyZXNzU3RhdGVMaXN0ZW5lcjogUHJvZ3Jlc3NMaXN0ZW5lciA9IE5VTExfRlVOQ1RJT04pIHtcblxuICAgICAgICBjb25zdCBzeW5jRG9jc01hcDogU3luY0RvY01hcCA9IHt9O1xuXG4gICAgICAgIGNvbnN0IHdvcms6IEFzeW5jRnVuY3Rpb25bXSA9IFtdO1xuICAgICAgICBjb25zdCBhc3luY1dvcmtRdWV1ZSA9IG5ldyBBc3luY1dvcmtRdWV1ZSh3b3JrKTtcblxuICAgICAgICBjb25zdCBpbml0ID0ge1xuICAgICAgICAgICAgdG90YWw6IGRvY01ldGFSZWZzLmxlbmd0aCxcbiAgICAgICAgICAgIGlkOiBgZGF0YXN0b3JlOiR7ZGF0YXN0b3JlLmlkfSN0b1N5bmNEb2NNYXBGcm9tRG9jc2BcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBwcm9ncmVzc1RyYWNrZXIgPSBuZXcgUHJvZ3Jlc3NUcmFja2VyKGluaXQpO1xuXG4gICAgICAgIGZvciAoY29uc3QgZG9jTWV0YVJlZiBvZiBkb2NNZXRhUmVmcykge1xuXG4gICAgICAgICAgICB3b3JrLnB1c2goYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgbGV0IGRvY01ldGE6IElEb2NNZXRhIHwgdW5kZWZpbmVkID0gZG9jTWV0YVJlZi5kb2NNZXRhO1xuXG4gICAgICAgICAgICAgICAgaWYgKCEgZG9jTWV0YSkge1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBkYXRhc3RvcmUuZ2V0RG9jTWV0YShkb2NNZXRhUmVmLmZpbmdlcnByaW50KTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNQcmVzZW50KGRhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2NNZXRhID0gRG9jTWV0YXMuZGVzZXJpYWxpemUoZGF0YSEsIGRvY01ldGFSZWYuZmluZ2VycHJpbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoaXNQcmVzZW50KGRvY01ldGEpKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgc3luY0RvY3NNYXBbZG9jTWV0YVJlZi5maW5nZXJwcmludF0gPSBTeW5jRG9jcy5mcm9tRG9jSW5mbyhkb2NNZXRhIS5kb2NJbmZvLCAnY3JlYXRlZCcpO1xuXG4gICAgICAgICAgICAgICAgICAgIHByb2dyZXNzU3RhdGVMaXN0ZW5lcihwcm9ncmVzc1RyYWNrZXIucGVlaygpKTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZXJlIGlzIG5vIGRvYyBmb3IgdGhpcyBmaW5nZXJwcmludC5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cblxuICAgICAgICBhd2FpdCBhc3luY1dvcmtRdWV1ZS5leGVjdXRlKCk7XG5cbiAgICAgICAgcHJvZ3Jlc3NTdGF0ZUxpc3RlbmVyKHByb2dyZXNzVHJhY2tlci50ZXJtaW5hdGUoKSk7XG5cbiAgICAgICAgcmV0dXJuIHN5bmNEb2NzTWFwO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWVyZ2UgYm90aCBvcmlnaW5zIHNvIHRoYXQgdGhleSBjb250YWlucyB0aGUgc2FtZSBkb2N1bWVudHMuIE9sZGVyXG4gICAgICogZG9jdW1lbnRzIGFyZSB1cGdyYWRlZCB0byB0aGUgbGF0ZXN0IHZlcnNpb24gYW5kIG1pc3NpbmcgZG9jdW1lbnRzIGFyZVxuICAgICAqIGNvcGllZC4gIEF0IHRoZSBlbmQgYm90aCBvcmlnaW5zIHdpbGwgaGF2ZSB0aGUgdW5pb24gb2YgYm90aCBzZXRzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgbWVyZ2Uoc3luY09yaWdpbjA6IFN5bmNPcmlnaW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeW5jT3JpZ2luMTogU3luY09yaWdpbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyOiBEb2NNZXRhU25hcHNob3RFdmVudExpc3RlbmVyID0gQVNZTkNfTlVMTF9GVU5DVElPTikge1xuXG4gICAgICAgIGF3YWl0IHRoaXMudHJhbnNmZXIoc3luY09yaWdpbjAsIHN5bmNPcmlnaW4xLCBsaXN0ZW5lcik7XG5cbiAgICAgICAgLy8gbm93IHRyYW5zZmVyIHRoZSBvdGhlciB3YXkuLi5cblxuICAgICAgICBhd2FpdCB0aGlzLnRyYW5zZmVyKHN5bmNPcmlnaW4xLCBzeW5jT3JpZ2luMCwgbGlzdGVuZXIpO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWFrZSBzdXJlIHRoZSBsYXRlc3QgdmVyc2lvbiBvZiB0aGUgZmlsZXMgYXJlIGluIGJvdGggb3JpZ2lucy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIHN5bmNocm9uaXplT3JpZ2lucyhsb2NhbFN5bmNPcmlnaW46IFN5bmNPcmlnaW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvdWRTeW5jT3JpZ2luOiBTeW5jT3JpZ2luLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyOiBEb2NNZXRhU25hcHNob3RFdmVudExpc3RlbmVyID0gQVNZTkNfTlVMTF9GVU5DVElPTik6IFByb21pc2U8dm9pZD4ge1xuXG4gICAgICAgIC8vIGxvZy5ub3RpY2UoXCJsb2NhbDogXCIgKyBsb2NhbFN5bmNPcmlnaW4uZGF0YXN0b3JlLmlkKTtcbiAgICAgICAgLy8gbG9nLm5vdGljZShcImNsb3VkOiBcIiArIGNsb3VkU3luY09yaWdpbi5kYXRhc3RvcmUuaWQpO1xuXG4gICAgICAgIGxvZy5ub3RpY2UoXCJUcmFuc2ZlcnJpbmcgZnJvbSBsb2NhbCAtPiBjbG91ZC4uLlwiKTtcbiAgICAgICAgY29uc3QgbG9jYWxUb0Nsb3VkID0gYXdhaXQgUGVyc2lzdGVuY2VMYXllcnMudHJhbnNmZXIobG9jYWxTeW5jT3JpZ2luLCBjbG91ZFN5bmNPcmlnaW4sIGxpc3RlbmVyLCAnbG9jYWwtdG8tY2xvdWQnKTtcbiAgICAgICAgbG9nLm5vdGljZShcIlRyYW5zZmVycmluZyBmcm9tIGxvY2FsIC0+IGNsb3VkLi4uZG9uZVwiLCBsb2NhbFRvQ2xvdWQpO1xuXG4gICAgICAgIGxvZy5ub3RpY2UoXCJUcmFuc2ZlcnJpbmcgZnJvbSBjbG91ZCAtPiBsb2NhbC4uLlwiKTtcbiAgICAgICAgY29uc3QgY2xvdWRUb0xvY2FsID0gYXdhaXQgUGVyc2lzdGVuY2VMYXllcnMudHJhbnNmZXIoY2xvdWRTeW5jT3JpZ2luLCBsb2NhbFN5bmNPcmlnaW4sIGxpc3RlbmVyLCAnY2xvdWQtdG8tbG9jYWwnKTtcbiAgICAgICAgbG9nLm5vdGljZShcIlRyYW5zZmVycmluZyBmcm9tIGNsb3VkIC0+IGxvY2FsLi4uZG9uZVwiLCBjbG91ZFRvTG9jYWwpO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3luY2hyb25pemUgdGhlIHNvdXJjZSB3aXRoIHRoZSB0YXJnZXQgc28gdGhhdCB3ZSBrbm93IHRoZXkgYXJlIGJvdGggaW5cbiAgICAgKiBzeW5jLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgdHJhbnNmZXIoc291cmNlOiBTeW5jT3JpZ2luLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBTeW5jT3JpZ2luLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXI6IERvY01ldGFTbmFwc2hvdEV2ZW50TGlzdGVuZXIgPSBBU1lOQ19OVUxMX0ZVTkNUSU9OLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHN0cmluZyA9ICdub25lJyk6IFByb21pc2U8VHJhbnNmZXJSZXN1bHQ+IHtcblxuICAgICAgICAvLyBUT0RPOiBpbmNsdWRlIHdhcm5pbmdzIGFzIHBhcnQgb2YgdGhlIHRyYW5zZmVyIHNvIHRoYXQgdGhleSBjYW4gYmVcbiAgICAgICAgLy8gbG9nZ2VkIGFuZCBzbyB0aGF0IHdlIGNhbiB0ZWxsIHRoZSB1c2VyLlxuXG4gICAgICAgIC8vIFRPRE86IG5vIGVycm9ycyBhcmUgYWN0dWFsbHkgcmFpc2VkIG9uIHRoZSBjb3B5IG9wZXJhdGlvbnMgdGhhdCBhcmVcbiAgICAgICAgLy8gb3BlcmF0aW5nIGluIHRoZSBhc3luYyBxdWV1ZS4gIFRoZXNlIG5lZWQgdG8gYmUgYnViYmxlZCB1cC4gIFRoaXNcbiAgICAgICAgLy8gZnVuY3Rpb24gY291bGQganVzdCB0YWtlIGFuIGVycm9yIGxpc3RlbmVyIGFuZCBjYWxsIGJhY2sgdGhhdCB3YXlcbiAgICAgICAgLy8gb3Igd2UgY291bGQgcmVqZWN0IHRoZSBwcm9taXNlIHJlc3VsdC5cblxuICAgICAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICAgICAgICBkb2NNZXRhOiB7XG4gICAgICAgICAgICAgICAgdG90YWw6IDAsXG4gICAgICAgICAgICAgICAgd3JpdGVzOiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmlsZXM6IHtcbiAgICAgICAgICAgICAgICB0b3RhbDogMCxcbiAgICAgICAgICAgICAgICB3cml0ZXM6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBhc3luYyBmdW5jdGlvbiBoYW5kbGVTeW5jRmlsZShzeW5jRG9jOiBTeW5jRG9jLCBmaWxlUmVmOiBCYWNrZW5kRmlsZVJlZikge1xuXG4gICAgICAgICAgICArK3Jlc3VsdC5maWxlcy50b3RhbDtcblxuICAgICAgICAgICAgY29uc3QgY29udGFpbnNGaWxlID0gYXN5bmMgKGRhdGFzdG9yZTogRGF0YXN0b3JlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAnc291cmNlJyB8ICd0YXJnZXQnKTogUHJvbWlzZTxib29sZWFuPiA9PiB7XG5cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgZGF0YXN0b3JlLmNvbnRhaW5zRmlsZShmaWxlUmVmLmJhY2tlbmQsIGZpbGVSZWYpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nLmVycm9yKGBDb3VsZCBub3QgZ2V0IGZpbGUgJHtmaWxlUmVmLm5hbWV9IGZvciBkb2Mgd2l0aCBmaW5nZXJwcmludDogJHtzeW5jRG9jLmZpbmdlcnByaW50fSBmcm9tICR7aWR9YCwgZmlsZVJlZiwgZSk7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjb25zdCB0YXJnZXRDb250YWluc0ZpbGUgPSBhd2FpdCBjb250YWluc0ZpbGUodGFyZ2V0LmRhdGFzdG9yZSwgJ3RhcmdldCcpO1xuXG4gICAgICAgICAgICBpZiAoISB0YXJnZXRDb250YWluc0ZpbGUpIHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHNvdXJjZUNvbnRhaW5zRmlsZSA9ICBhd2FpdCBjb250YWluc0ZpbGUoc291cmNlLmRhdGFzdG9yZSwgJ3NvdXJjZScpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHNvdXJjZUNvbnRhaW5zRmlsZSkge1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNvdXJjZUZpbGUgPSBzb3VyY2UuZGF0YXN0b3JlLmdldEZpbGUoZmlsZVJlZi5iYWNrZW5kLCBmaWxlUmVmKTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBibG9iID0gYXdhaXQgVVJMcy50b0Jsb2Ioc291cmNlRmlsZS51cmwpO1xuXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRhcmdldC5kYXRhc3RvcmUud3JpdGVGaWxlKHNvdXJjZUZpbGUuYmFja2VuZCwgZmlsZVJlZiwgYmxvYik7XG5cbiAgICAgICAgICAgICAgICAgICAgKytyZXN1bHQuZmlsZXMud3JpdGVzO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nLndhcm4oYEJvdGggdGhlIHRhcmdldCBhbmQgc291cmNlIGZpbGVzIGFyZSBtaXNzaW5nIGluIGRvYyAke3N5bmNEb2MuZmluZ2VycHJpbnR9ICgke3N5bmNEb2MudGl0bGV9KTogYCwgZmlsZVJlZik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBIYW5kbGUgc3luY2hyb25pemluZyB0aGUgaW5kaXZpZHVhbCBkb2NzIGZpbGVzIGZyb20gYSByZWZlcmVuY2UuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSBzb3VyY2VTeW5jRG9jIFRoZSBzb3VyY2Ugc3luYyBkb2Mgd2UncmUgdHJ5aW5nIHRvIGVuc3VyZSBpc1xuICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICBpbiB0aGUgdGFyZ2V0IGRhdGFzdG9yZSBhbmQgdXAgdG8gZGF0ZS5cbiAgICAgICAgICogQHBhcmFtIFt0YXJnZXRTeW5jRG9jXSBUaGUgdGFyZ2V0U3luY0RvYyB3aGljaCBtYXkgbm90IGV4aXN0IHlldCBpblxuICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldCBkYXRhc3RvcmUuXG4gICAgICAgICAqL1xuICAgICAgICBhc3luYyBmdW5jdGlvbiBoYW5kbGVTeW5jRG9jKHNvdXJjZVN5bmNEb2M6IFN5bmNEb2MsIHRhcmdldFN5bmNEb2M/OiBTeW5jRG9jKSB7XG5cbiAgICAgICAgICAgICsrcmVzdWx0LmRvY01ldGEudG90YWw7XG5cbiAgICAgICAgICAgIGZvciAoY29uc3Qgc291cmNlU3luY0ZpbGUgb2Ygc291cmNlU3luY0RvYy5maWxlcykge1xuXG4gICAgICAgICAgICAgICAgaWYgKHNvdXJjZVN5bmNGaWxlLm5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogaWYgd2UgdXNlIHRoZSBzZWNvbmQgcXVldWUgaXQgc3RpbGwgbG9ja3MgdXAuXG4gICAgICAgICAgICAgICAgICAgIC8vIGF3YWl0IGRvY0ZpbGVBc3luY1dvcmtRdWV1ZS5lbnF1ZXVlKGFzeW5jICgpID0+XG4gICAgICAgICAgICAgICAgICAgIC8vIGhhbmRsZVN0YXNoRmlsZShkb2NGaWxlKSk7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IGhhbmRsZVN5bmNGaWxlKHNvdXJjZVN5bmNEb2MsIHNvdXJjZVN5bmNGaWxlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGRvV3JpdGVEb2NNZXRhOiBib29sZWFuID0gISB0YXJnZXRTeW5jRG9jO1xuXG4gICAgICAgICAgICBpZiAodGFyZ2V0U3luY0RvYykge1xuXG4gICAgICAgICAgICAgICAgY29uc3QgY21wID0gVVVJRHMuY29tcGFyZSh0YXJnZXRTeW5jRG9jLnV1aWQsIHNvdXJjZVN5bmNEb2MudXVpZCk7XG5cbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBpZiB0aGUgY29tcGFyaXNvbiBpcyB6ZXJvIHRoZW4gdGVjaG5pY2FsbHkgd2VcbiAgICAgICAgICAgICAgICAvLyBoYXZlIGEgY29uZmxpY3Qgd2hpY2ggd2UgbmVlZCB0byBzdXJmYWNlIHRvIHRoZSB1c2VyIGJ1dCB0aGlzXG4gICAgICAgICAgICAgICAgLy8gaXMgaW5zYW5lbHkgcmFyZS5cblxuICAgICAgICAgICAgICAgIGRvV3JpdGVEb2NNZXRhID0gY21wIDwgMDtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZG9Xcml0ZURvY01ldGEpIHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBzb3VyY2UuZGF0YXN0b3JlLmdldERvY01ldGEoc291cmNlU3luY0RvYy5maW5nZXJwcmludCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0YXJnZXQuZGF0YXN0b3JlLndyaXRlKHNvdXJjZVN5bmNEb2MuZmluZ2VycHJpbnQsIGRhdGEhLCBzb3VyY2VTeW5jRG9jLmRvY01ldGFGaWxlUmVmLmRvY0luZm8pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZy53YXJuKFwiTm8gZGF0YSBmb3IgZmluZ2VycHJpbnQ6IFwiICsgc291cmNlU3luY0RvYy5maW5nZXJwcmludCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgKytyZXN1bHQuZG9jTWV0YS53cml0ZXM7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgcHJvZ3Jlc3MgPSBwcm9ncmVzc1RyYWNrZXIuaW5jcigpO1xuXG4gICAgICAgICAgICBjb25zdCBkb2NNZXRhU25hcHNob3RFdmVudDogRG9jTWV0YVNuYXBzaG90RXZlbnQgPSB7XG4gICAgICAgICAgICAgICAgZGF0YXN0b3JlOiBzb3VyY2UuZGF0YXN0b3JlLmlkLFxuICAgICAgICAgICAgICAgIHByb2dyZXNzLFxuXG4gICAgICAgICAgICAgICAgLy8gdGhpcyBzaG91bGQgYmUgY29tbWl0dGVkIGFzIHdlJ3JlIHN0YXJ0aW5nIHdpdGggdGhlIHNvdXJjZVxuICAgICAgICAgICAgICAgIC8vIHdoaWNoIHdlIHRoaW5rIHNob3VsZCBiZSBhdCB0aGUgY29tbW1pdHRlZCBsZXZlbCB0byBzdGFydFxuICAgICAgICAgICAgICAgIC8vIHdpdGhcblxuICAgICAgICAgICAgICAgIGNvbnNpc3RlbmN5OiAnY29tbWl0dGVkJyxcblxuICAgICAgICAgICAgICAgIC8vIFRPRE86IHdlJ3JlIG5vdCByZS1lbWl0dGluZyB0aGUgZG9jIG11dGF0aW9ucyBhdCB0aGlzIHN0YWdlXG4gICAgICAgICAgICAgICAgLy8gYXMgSSB0aGluayB0aGlzIGlzIHRoZSBhcHByb3ByaWF0ZSBhY3Rpb24gc2luY2Ugd2Ugc2hvdWxkXG4gICAgICAgICAgICAgICAgLy8gYWxyZWFkeSBrbm93IHRoYXQgdGhleSBoYXZlIGJlZW4gcHJlc2VudCBhbmQgd2UncmUganVzdFxuICAgICAgICAgICAgICAgIC8vIGVtaXR0aW5nIHByb2dyZXNzLlxuICAgICAgICAgICAgICAgIGRvY01ldGFNdXRhdGlvbnM6IFtcbiAgICAgICAgICAgICAgICBdXG5cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGF3YWl0IGxpc3RlbmVyKGRvY01ldGFTbmFwc2hvdEV2ZW50KTtcblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZG9jRmlsZUFzeW5jV29ya1F1ZXVlID0gbmV3IEFzeW5jV29ya1F1ZXVlKFtdKTtcbiAgICAgICAgY29uc3QgZG9jTWV0YUFzeW5jV29ya1F1ZXVlID0gbmV3IEFzeW5jV29ya1F1ZXVlKFtdKTtcblxuICAgICAgICBjb25zdCBzb3VyY2VTeW5jRG9jcyA9IE9iamVjdC52YWx1ZXMoc291cmNlLnN5bmNEb2NNYXApO1xuXG4gICAgICAgIGNvbnN0IHByb2dyZXNzSURcbiAgICAgICAgICAgID0gYHRyYW5zZmVyOnNvdXJjZT0ke3NvdXJjZS5kYXRhc3RvcmUuaWR9LHRhcmdldD0ke3RhcmdldC5kYXRhc3RvcmUuaWR9YDtcblxuICAgICAgICBjb25zdCBwcm9ncmVzc1RyYWNrZXIgPSBuZXcgUHJvZ3Jlc3NUcmFja2VyKHt0b3RhbDogc291cmNlU3luY0RvY3MubGVuZ3RoLCBpZDogcHJvZ3Jlc3NJRH0pO1xuXG4gICAgICAgIGZvciAoY29uc3Qgc291cmNlU3luY0RvYyBvZiBzb3VyY2VTeW5jRG9jcykge1xuXG4gICAgICAgICAgICBjb25zdCB0YXJnZXRTeW5jRG9jID0gdGFyZ2V0LnN5bmNEb2NNYXBbc291cmNlU3luY0RvYy5maW5nZXJwcmludF07XG5cbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZXIgPSBhc3luYyAoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCBoYW5kbGVTeW5jRG9jKHNvdXJjZVN5bmNEb2MsIHRhcmdldFN5bmNEb2MpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nLmVycm9yKFwiVW5hYmxlIHRvIHN5bmMgYmV0d2VlbiBzb3VyY2UgYW5kIHRhcmdldDogXCIsIHtzb3VyY2VTeW5jRG9jLCB0YXJnZXRTeW5jRG9jfSwgZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBkb2NNZXRhQXN5bmNXb3JrUXVldWUuZW5xdWV1ZShoYW5kbGVyKTtcblxuXG4gICAgICAgIH1cblxuICAgICAgICAvLyBidWlsZCBhIHdvcmsgcXVldWUgb2YgYXN5bmMgZnVuY3Rpb25zIG91dCBvZiB0aGUgZG9jTWV0YUZpbGVzLlxuXG4gICAgICAgIGNvbnN0IGRvY0ZpbGVFeGVjdXRpb25Qcm9taXNlID0gZG9jRmlsZUFzeW5jV29ya1F1ZXVlLmV4ZWN1dGUoKTtcbiAgICAgICAgY29uc3QgZG9jTWV0YUV4ZWN1dGlvblByb21pc2UgPSBkb2NNZXRhQXN5bmNXb3JrUXVldWUuZXhlY3V0ZSgpO1xuXG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKFtkb2NGaWxlRXhlY3V0aW9uUHJvbWlzZSwgZG9jTWV0YUV4ZWN1dGlvblByb21pc2VdKTtcblxuICAgICAgICBhd2FpdCBsaXN0ZW5lcih7XG4gICAgICAgICAgICBkYXRhc3RvcmU6IHNvdXJjZS5kYXRhc3RvcmUuaWQsXG4gICAgICAgICAgICBwcm9ncmVzczogcHJvZ3Jlc3NUcmFja2VyLnRlcm1pbmF0ZSgpLFxuICAgICAgICAgICAgY29uc2lzdGVuY3k6ICdjb21taXR0ZWQnLFxuICAgICAgICAgICAgZG9jTWV0YU11dGF0aW9uczogW11cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcblxuICAgIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRyYW5zZmVyUmVzdWx0IHtcblxuICAgIGRvY01ldGE6IFRyYW5zZmVyTWV0cmljcztcblxuICAgIGZpbGVzOiBUcmFuc2Zlck1ldHJpY3M7XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFuc2Zlck1ldHJpY3Mge1xuICAgIHRvdGFsOiBudW1iZXI7XG4gICAgd3JpdGVzOiBudW1iZXI7XG59XG5cblxuZXhwb3J0IGludGVyZmFjZSBTeW5jT3JpZ2luIHtcblxuICAgIHJlYWRvbmx5IGRhdGFzdG9yZTogRGF0YXN0b3JlO1xuICAgIHJlYWRvbmx5IHN5bmNEb2NNYXA6IFN5bmNEb2NNYXA7XG5cbn1cblxuIl19