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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Datastore_1 = require("./Datastore");
const Optional_1 = require("polar-shared/src/util/ts/Optional");
const DatastoreMutation_1 = require("./DatastoreMutation");
const Logger_1 = require("polar-shared/src/logger/Logger");
const DocMetaComparisonIndex_1 = require("./DocMetaComparisonIndex");
const PersistenceLayers_1 = require("./PersistenceLayers");
const DocMetaSnapshotEventListeners_1 = require("./DocMetaSnapshotEventListeners");
const Functions_1 = require("polar-shared/src/util/Functions");
const SimpleReactor_1 = require("../reactor/SimpleReactor");
const firebase = __importStar(require("../firebase/lib/firebase"));
const Dictionaries_1 = require("polar-shared/src/util/Dictionaries");
const Datastores_1 = require("./Datastores");
const Either_1 = require("../util/Either");
const BackendFileRefs_1 = require("./BackendFileRefs");
const Latch_1 = require("polar-shared/src/util/Latch");
const Prefs_1 = require("../util/prefs/Prefs");
const log = Logger_1.Logger.create();
class CloudAwareDatastore extends Datastore_1.AbstractDatastore {
    constructor(local, cloud) {
        super();
        this.id = 'cloud-aware';
        this.fileSynchronizationEventDispatcher = new SimpleReactor_1.SimpleReactor();
        this.synchronizationEventDispatcher = new SimpleReactor_1.SimpleReactor();
        this.docMetaSnapshotEventDispatcher = new SimpleReactor_1.SimpleReactor();
        this.docMetaComparisonIndex = new DocMetaComparisonIndex_1.DocMetaComparisonIndex();
        this.shutdownHook = Functions_1.ASYNC_NULL_FUNCTION;
        this.local = local;
        this.cloud = cloud;
    }
    init(errorListener = Functions_1.NULL_FUNCTION, opts = { noInitialSnapshot: false, noSync: false }) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Promise.all([
                this.cloud.init(errorListener, { noInitialSnapshot: true }),
                this.local.init(errorListener)
            ]);
            const snapshotListener = (event) => __awaiter(this, void 0, void 0, function* () { return this.docMetaSnapshotEventDispatcher.dispatchEvent(event); });
            if (!opts.noSync) {
                this.primarySnapshot = yield this.snapshot(snapshotListener, errorListener);
            }
            return {};
        });
    }
    stop() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.shutdownHook();
            if (this.primarySnapshot && this.primarySnapshot.unsubscribe) {
                this.primarySnapshot.unsubscribe();
            }
            yield Promise.all([this.cloud.stop(), this.local.stop()]);
        });
    }
    contains(fingerprint) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.local.contains(fingerprint);
        });
    }
    getDocMeta(fingerprint) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.local.getDocMeta(fingerprint);
        });
    }
    writeFile(backend, ref, data, opts = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const datastoreMutation = opts.datastoreMutation || new DatastoreMutation_1.DefaultDatastoreMutation();
            const result = yield this.local.writeFile(backend, ref, data, opts);
            datastoreMutation.written.resolve(true);
            this.cloud.writeFile(backend, ref, data, opts)
                .then(() => {
                datastoreMutation.committed.resolve(true);
            })
                .catch(err => log.error("Unable to write file to cloud: ", err));
            return result;
        });
    }
    getFile(backend, ref, opts = {}) {
        Datastores_1.Datastores.assertNetworkLayer(this, opts.networkLayer);
        if (!opts.networkLayer || opts.networkLayer === 'local') {
            return this.local.getFile(backend, ref);
        }
        else {
            return this.cloud.getFile(backend, ref);
        }
    }
    containsFile(backend, ref) {
        return this.local.containsFile(backend, ref);
    }
    deleteFile(backend, ref) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.cloud.deleteFile(backend, ref);
            return this.local.deleteFile(backend, ref);
        });
    }
    delete(docMetaFileRef, datastoreMutation = new DatastoreMutation_1.DefaultDatastoreMutation()) {
        return __awaiter(this, void 0, void 0, function* () {
            datastoreMutation.written.get()
                .then(() => {
                this.docMetaComparisonIndex.remove(docMetaFileRef.fingerprint);
            })
                .catch(err => log.error("Could not handle delete: ", err));
            yield this.datastoreMutations.executeBatchedWrite(datastoreMutation, (remoteCoordinator) => __awaiter(this, void 0, void 0, function* () {
                yield this.cloud.delete(docMetaFileRef, remoteCoordinator);
            }), (localCoordinator) => __awaiter(this, void 0, void 0, function* () {
                yield this.local.delete(docMetaFileRef, localCoordinator);
            }));
            return {};
        });
    }
    write(fingerprint, data, docInfo, opts = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const datastoreMutation = opts.datastoreMutation || new DatastoreMutation_1.DefaultDatastoreMutation();
            const writeFileDatastoreMutation = new DatastoreMutation_1.DefaultDatastoreMutation();
            if (opts.writeFile) {
                yield this.writeFile(opts.writeFile.backend, opts.writeFile, opts.writeFile.data, { datastoreMutation: writeFileDatastoreMutation });
            }
            else {
                writeFileDatastoreMutation.written.resolve(true);
                writeFileDatastoreMutation.committed.resolve(true);
            }
            datastoreMutation
                .written.get().then(() => {
                this.docMetaComparisonIndex.updateUsingDocInfo(docInfo);
            })
                .catch(err => log.error("Could not handle delete: ", err));
            yield this.datastoreMutations.executeBatchedWrite(datastoreMutation, (remoteCoordinator) => __awaiter(this, void 0, void 0, function* () {
                yield writeFileDatastoreMutation.committed.get();
                yield this.cloud.write(fingerprint, data, docInfo, { datastoreMutation: remoteCoordinator });
            }), (localCoordinator) => __awaiter(this, void 0, void 0, function* () {
                yield this.local.write(fingerprint, data, docInfo, { datastoreMutation: localCoordinator });
            }));
        });
    }
    getDocMetaRefs() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.local.getDocMetaRefs();
        });
    }
    synchronizeDocs(...docMetaRefs) {
        return __awaiter(this, void 0, void 0, function* () {
            log.info("CloudAwareDatastore: synchronizeDocs: ", docMetaRefs);
            const toSyncOrigin = (datastore, ...docMetaRefs) => __awaiter(this, void 0, void 0, function* () {
                const syncDocMap = yield PersistenceLayers_1.PersistenceLayers.toSyncDocMapFromDocs(datastore, docMetaRefs);
                return {
                    datastore,
                    syncDocMap
                };
            });
            const clearDocMeta = (...docMetaRefs) => {
                return docMetaRefs.map(current => {
                    return {
                        fingerprint: current.fingerprint
                    };
                });
            };
            const cloudSyncOrigin = yield toSyncOrigin(this.cloud, ...clearDocMeta(...docMetaRefs));
            const localSyncOrigin = yield toSyncOrigin(this.local, ...docMetaRefs);
            yield PersistenceLayers_1.PersistenceLayers.synchronizeOrigins(localSyncOrigin, cloudSyncOrigin, Functions_1.ASYNC_NULL_FUNCTION);
        });
    }
    snapshot(docMetaSnapshotEventListener, errorListener = Functions_1.NULL_FUNCTION) {
        return __awaiter(this, void 0, void 0, function* () {
            const isPrimarySnapshot = this.primarySnapshot === undefined;
            const snapshotID = CloudAwareDatastore.SNAPSHOT_ID++;
            const deduplicatedListener = DocMetaSnapshotEventListeners_1.DocMetaSnapshotEventListeners.createDeduplicatedListener((docMetaSnapshotEvent) => __awaiter(this, void 0, void 0, function* () {
                yield docMetaSnapshotEventListener(docMetaSnapshotEvent);
            }));
            class InitialSnapshotLatch {
                constructor(id) {
                    this.syncDocMap = {};
                    this.latch = new Latch_1.Latch();
                    this.hasInitialTerminatedBatch = false;
                    this.pending = 0;
                    this.id = id;
                }
                handleSnapshot(docMetaSnapshotEvent) {
                    return __awaiter(this, void 0, void 0, function* () {
                        try {
                            if (this.hasInitialTerminatedBatch) {
                                return;
                            }
                            if (!docMetaSnapshotEvent.batch || docMetaSnapshotEvent.batch.id !== 0) {
                                return;
                            }
                            ++this.pending;
                            const syncDocs = yield Datastore_1.DocMetaSnapshotEvents.toSyncDocs(docMetaSnapshotEvent);
                            Datastore_1.SyncDocMaps.putAll(this.syncDocMap, syncDocs);
                            if (docMetaSnapshotEvent.consistency === 'committed' &&
                                docMetaSnapshotEvent.batch.terminated) {
                                const nrDocs = Dictionaries_1.Dictionaries.size(this.syncDocMap);
                                this.hasInitialTerminatedBatch = true;
                            }
                        }
                        finally {
                            --this.pending;
                            if (this.hasInitialTerminatedBatch && this.pending === 0) {
                                this.latch.resolve(true);
                            }
                        }
                    });
                }
                createSnapshot(datastore) {
                    return datastore.snapshot((docMetaSnapshotEvent) => __awaiter(this, void 0, void 0, function* () {
                        if (!initialSyncCompleted) {
                            yield this.handleSnapshot(docMetaSnapshotEvent);
                        }
                        yield synchronizingListener(docMetaSnapshotEvent);
                    }), errorListener);
                }
            }
            let initialSyncCompleted = false;
            const localInitialSnapshotLatch = new InitialSnapshotLatch('local');
            const cloudInitialSnapshotLatch = new InitialSnapshotLatch('cloud');
            const synchronizingEventDeduplicator = DocMetaSnapshotEventListeners_1.DocMetaSnapshotEventListeners.createDeduplicatedListener((docMetaSnapshotEvent) => __awaiter(this, void 0, void 0, function* () {
                const handleEvent = () => __awaiter(this, void 0, void 0, function* () {
                    try {
                        if (initialSyncCompleted && isPrimarySnapshot) {
                            yield this.handleSnapshotSynchronization(docMetaSnapshotEvent, deduplicatedListener.listener);
                        }
                    }
                    finally {
                        yield docMetaSnapshotEventListener(docMetaSnapshotEvent);
                    }
                });
                handleEvent()
                    .catch(err => {
                    log.error(`Unable to handle synchronizing snapshot ${snapshotID}`, err);
                    errorListener(err);
                });
            }), this.docMetaComparisonIndex);
            const synchronizingListener = synchronizingEventDeduplicator.listener;
            log.info("Local snapshot...");
            const localSnapshotResultPromise = localInitialSnapshotLatch.createSnapshot(this.local);
            yield localInitialSnapshotLatch.latch.get();
            log.info("Local snapshot...done");
            log.info("Cloud snapshot...");
            const cloudSnapshotResultPromise = cloudInitialSnapshotLatch.createSnapshot(this.cloud);
            yield cloudInitialSnapshotLatch.latch.get();
            log.info("Cloud snapshot...done");
            const localSyncOrigin = {
                datastore: this.local,
                syncDocMap: localInitialSnapshotLatch.syncDocMap
            };
            const cloudSyncOrigin = {
                datastore: this.cloud,
                syncDocMap: cloudInitialSnapshotLatch.syncDocMap
            };
            if (isPrimarySnapshot) {
                yield PersistenceLayers_1.PersistenceLayers.synchronizeOrigins(localSyncOrigin, cloudSyncOrigin, deduplicatedListener.listener);
            }
            initialSyncCompleted = true;
            yield localSnapshotResultPromise;
            const cloudSnapshotResult = yield cloudSnapshotResultPromise;
            log.notice("INITIAL SNAPSHOT COMPLETE");
            return {
                unsubscribe: cloudSnapshotResult.unsubscribe
            };
        });
    }
    handleSnapshotSynchronization(docMetaSnapshotEvent, listener) {
        return __awaiter(this, void 0, void 0, function* () {
            const toLocalSyncOrigin = () => __awaiter(this, void 0, void 0, function* () {
                const docaMetaFiles = docMetaSnapshotEvent.docMetaMutations.map(current => {
                    return { fingerprint: current.fingerprint };
                });
                const syncDocMap = yield PersistenceLayers_1.PersistenceLayers.toSyncDocMapFromDocs(this.local, docaMetaFiles);
                return {
                    datastore: this.local,
                    syncDocMap
                };
            });
            const toCloudSyncOrigin = () => __awaiter(this, void 0, void 0, function* () {
                const syncDocs = yield Datastore_1.DocMetaSnapshotEvents.toSyncDocs(docMetaSnapshotEvent);
                return {
                    datastore: this.cloud,
                    syncDocMap: Datastore_1.SyncDocMaps.fromArray(syncDocs)
                };
            });
            if (docMetaSnapshotEvent.consistency !== 'committed') {
                return;
            }
            for (const docMetaMutation of docMetaSnapshotEvent.docMetaMutations) {
                if (docMetaMutation.mutationType === 'created' || docMetaMutation.mutationType === 'updated') {
                    const cloudSyncOrigin = yield toCloudSyncOrigin();
                    const localSyncOrigin = yield toLocalSyncOrigin();
                    log.info("Transferring from cloud -> local...");
                    yield PersistenceLayers_1.PersistenceLayers.transfer(cloudSyncOrigin, localSyncOrigin, listener, 'cloud-to-local');
                    log.info("Transferring from cloud -> local...done");
                }
                if (docMetaMutation.mutationType === 'deleted') {
                    const docMetaFileRef = yield docMetaMutation.docMetaFileRefProvider();
                    const fileRefs = BackendFileRefs_1.BackendFileRefs.toBackendFileRefs(Either_1.Either.ofRight(docMetaFileRef.docInfo));
                    for (const fileRef of fileRefs) {
                        yield this.local.deleteFile(fileRef.backend, fileRef);
                    }
                    yield this.local.delete(docMetaFileRef);
                    log.info("File deleted: ", docMetaFileRef);
                }
            }
            this.synchronizationEventDispatcher.dispatchEvent(Object.assign(Object.assign({}, docMetaSnapshotEvent), { dest: 'local' }));
        });
    }
    addFileSynchronizationEventListener(eventListener) {
        this.fileSynchronizationEventDispatcher.addEventListener(eventListener);
    }
    addSynchronizationEventListener(eventListener) {
        this.synchronizationEventDispatcher.addEventListener(eventListener);
    }
    addDocMetaSnapshotEventListener(docMetaSnapshotEventListener) {
        this.docMetaSnapshotEventDispatcher.addEventListener(docMetaSnapshotEventListener);
    }
    deactivate() {
        return __awaiter(this, void 0, void 0, function* () {
            yield firebase.auth().signOut();
        });
    }
    overview() {
        return __awaiter(this, void 0, void 0, function* () {
            return Optional_1.Optional.first(yield this.local.overview(), yield this.cloud.overview()).getOrUndefined();
        });
    }
    capabilities() {
        const networkLayers = new Set(['local', 'web']);
        return {
            networkLayers,
            permission: { mode: 'rw' }
        };
    }
    getPrefs() {
        const cloudPrefs = this.cloud.getPrefs();
        const localPrefs = this.local.getPrefs();
        const prefs = new Prefs_1.CompositePrefs([cloudPrefs.get().prefs, localPrefs.get().prefs]);
        return {
            get() {
                return {
                    prefs: prefs,
                    unsubscribe: Functions_1.NULL_FUNCTION
                };
            }
        };
    }
}
exports.CloudAwareDatastore = CloudAwareDatastore;
CloudAwareDatastore.SNAPSHOT_ID = 0;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2xvdWRBd2FyZURhdGFzdG9yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNsb3VkQXdhcmVEYXRhc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBcUJxQjtBQVVyQixnRUFBMkQ7QUFFM0QsMkRBQWdGO0FBRWhGLDJEQUFzRDtBQUN0RCxxRUFBZ0U7QUFDaEUsMkRBQWtFO0FBQ2xFLG1GQUFpRztBQUNqRywrREFBbUY7QUFDbkYsNERBQXlFO0FBRXpFLG1FQUFxRDtBQUNyRCxxRUFBZ0U7QUFDaEUsNkNBQXdDO0FBQ3hDLDJDQUFzQztBQUN0Qyx1REFBa0Q7QUFHbEQsdURBQWtEO0FBQ2xELCtDQUFvRTtBQUVwRSxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFhNUIsTUFBYSxtQkFBb0IsU0FBUSw2QkFBaUI7SUF3QnRELFlBQVksS0FBZ0IsRUFBRSxLQUFnQjtRQUMxQyxLQUFLLEVBQUUsQ0FBQztRQW5CSSxPQUFFLEdBQUcsYUFBYSxDQUFDO1FBTWxCLHVDQUFrQyxHQUErQyxJQUFJLDZCQUFhLEVBQUUsQ0FBQztRQUVyRyxtQ0FBOEIsR0FBMkMsSUFBSSw2QkFBYSxFQUFFLENBQUM7UUFFN0YsbUNBQThCLEdBQTJDLElBQUksNkJBQWEsRUFBRSxDQUFDO1FBRTdGLDJCQUFzQixHQUFHLElBQUksK0NBQXNCLEVBQUUsQ0FBQztRQUloRSxpQkFBWSxHQUFrQiwrQkFBbUIsQ0FBQztRQUlyRCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBRVksSUFBSSxDQUFDLGdCQUErQix5QkFBYSxFQUM1QyxPQUEwQixFQUFDLGlCQUFpQixFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFDOztZQUVqRixNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUM7Z0JBQ2QsSUFB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LEVBQUUsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFDO1NBQzNCLENBQUM7SUFFTixDQUFDO0lBRU0sUUFBUTtRQUVYLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDekMsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUt6QyxNQUFNLEtBQUssR0FBRyxJQUFJLHNCQUFjLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBRW5GLE9BQU87WUFDSCxHQUFHO2dCQUNDLE9BQU87b0JBQ0gsS0FBSyxFQUFFLEtBQUs7b0JBQ1osV0FBVyxFQUFFLHlCQUFhO2lCQUM3QixDQUFDO1lBQ04sQ0FBQztTQUNKLENBQUM7SUFFTixDQUFDOztBQWpoQkwsa0RBbWhCQztBQS9nQmtCLCtCQUFXLEdBQUcsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBBYnN0cmFjdERhdGFzdG9yZSxcbiAgICBCaW5hcnlGaWxlRGF0YSxcbiAgICBEYXRhc3RvcmUsXG4gICAgRGF0YXN0b3JlT3ZlcnZpZXcsXG4gICAgRGF0YXN0b3JlUHJlZnMsXG4gICAgRGVsZXRlUmVzdWx0LFxuICAgIERvY01ldGFTbmFwc2hvdEV2ZW50LFxuICAgIERvY01ldGFTbmFwc2hvdEV2ZW50TGlzdGVuZXIsXG4gICAgRG9jTWV0YVNuYXBzaG90RXZlbnRzLFxuICAgIEVycm9yTGlzdGVuZXIsXG4gICAgRmlsZVN5bmNocm9uaXphdGlvbkV2ZW50LFxuICAgIEZpbGVTeW5jaHJvbml6YXRpb25FdmVudExpc3RlbmVyLFxuICAgIEluaXRSZXN1bHQsXG4gICAgUHJlZnNQcm92aWRlcixcbiAgICBTbmFwc2hvdFJlc3VsdCxcbiAgICBTeW5jRG9jTWFwLFxuICAgIFN5bmNEb2NNYXBzLFxuICAgIFN5bmNocm9uaXphdGlvbkV2ZW50LFxuICAgIFN5bmNocm9uaXphdGlvbkV2ZW50TGlzdGVuZXIsXG4gICAgU3luY2hyb25pemluZ0RhdGFzdG9yZVxufSBmcm9tICcuL0RhdGFzdG9yZSc7XG5pbXBvcnQge1dyaXRlRmlsZU9wdHN9IGZyb20gJy4vRGF0YXN0b3JlJztcbmltcG9ydCB7RGF0YXN0b3JlQ2FwYWJpbGl0aWVzfSBmcm9tICcuL0RhdGFzdG9yZSc7XG5pbXBvcnQge05ldHdvcmtMYXllcn0gZnJvbSAnLi9EYXRhc3RvcmUnO1xuaW1wb3J0IHtHZXRGaWxlT3B0c30gZnJvbSAnLi9EYXRhc3RvcmUnO1xuaW1wb3J0IHtEYXRhc3RvcmVJbml0T3B0c30gZnJvbSAnLi9EYXRhc3RvcmUnO1xuaW1wb3J0IHtXcml0ZU9wdHN9IGZyb20gJy4vRGF0YXN0b3JlJztcbmltcG9ydCB7RG9jTWV0YUZpbGVSZWYsIERvY01ldGFSZWZ9IGZyb20gJy4vRG9jTWV0YVJlZic7XG5pbXBvcnQge0JhY2tlbmR9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvZGF0YXN0b3JlL0JhY2tlbmQnO1xuaW1wb3J0IHtEb2NGaWxlTWV0YX0gZnJvbSAnLi9Eb2NGaWxlTWV0YSc7XG5pbXBvcnQge09wdGlvbmFsfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvdHMvT3B0aW9uYWwnO1xuaW1wb3J0IHtEb2NJbmZvfSBmcm9tICcuLi9tZXRhZGF0YS9Eb2NJbmZvJztcbmltcG9ydCB7RGF0YXN0b3JlTXV0YXRpb24sIERlZmF1bHREYXRhc3RvcmVNdXRhdGlvbn0gZnJvbSAnLi9EYXRhc3RvcmVNdXRhdGlvbic7XG5pbXBvcnQge1VVSUR9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbWV0YWRhdGEvVVVJRCc7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvbG9nZ2VyL0xvZ2dlclwiO1xuaW1wb3J0IHtEb2NNZXRhQ29tcGFyaXNvbkluZGV4fSBmcm9tICcuL0RvY01ldGFDb21wYXJpc29uSW5kZXgnO1xuaW1wb3J0IHtQZXJzaXN0ZW5jZUxheWVycywgU3luY09yaWdpbn0gZnJvbSAnLi9QZXJzaXN0ZW5jZUxheWVycyc7XG5pbXBvcnQge0RvY01ldGFTbmFwc2hvdEV2ZW50TGlzdGVuZXJzLCBFdmVudERlZHVwbGljYXRvcn0gZnJvbSAnLi9Eb2NNZXRhU25hcHNob3RFdmVudExpc3RlbmVycyc7XG5pbXBvcnQge0FTWU5DX05VTExfRlVOQ1RJT04sIE5VTExfRlVOQ1RJT059IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC9GdW5jdGlvbnMnO1xuaW1wb3J0IHtJRXZlbnREaXNwYXRjaGVyLCBTaW1wbGVSZWFjdG9yfSBmcm9tICcuLi9yZWFjdG9yL1NpbXBsZVJlYWN0b3InO1xuaW1wb3J0IHtBc3luY0Z1bmN0aW9ufSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvQXN5bmNXb3JrUXVldWUnO1xuaW1wb3J0ICogYXMgZmlyZWJhc2UgZnJvbSAnLi4vZmlyZWJhc2UvbGliL2ZpcmViYXNlJztcbmltcG9ydCB7RGljdGlvbmFyaWVzfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvRGljdGlvbmFyaWVzJztcbmltcG9ydCB7RGF0YXN0b3Jlc30gZnJvbSAnLi9EYXRhc3RvcmVzJztcbmltcG9ydCB7RWl0aGVyfSBmcm9tICcuLi91dGlsL0VpdGhlcic7XG5pbXBvcnQge0JhY2tlbmRGaWxlUmVmc30gZnJvbSAnLi9CYWNrZW5kRmlsZVJlZnMnO1xuaW1wb3J0IHtJRG9jSW5mb30gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvbWV0YWRhdGEvSURvY0luZm9cIjtcbmltcG9ydCB7RmlsZVJlZn0gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvZGF0YXN0b3JlL0ZpbGVSZWZcIjtcbmltcG9ydCB7TGF0Y2h9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL3V0aWwvTGF0Y2hcIjtcbmltcG9ydCB7Q29tcG9zaXRlUHJlZnMsIFBlcnNpc3RlbnRQcmVmc30gZnJvbSBcIi4uL3V0aWwvcHJlZnMvUHJlZnNcIjtcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG5leHBvcnQgaW50ZXJmYWNlIENsb3VkQXdhcmVEZWxldGVSZXN1bHQgZXh0ZW5kcyBEZWxldGVSZXN1bHQge1xuXG59XG5cbi8qKlxuICogQSBDbG91ZEF3YXJlRGF0YXN0b3JlIGFsbG93cyB1cyB0byBoYXZlIG9uZSBkYXRhc3RvcmUgd2l0aCBhIGxvY2FsIGNvcHkgYW5kXG4gKiByZW1vdGUgZGF0YXN0b3JlIGJhY2tpbmcgdGhlbS4gIFJlYWRzIGFyZSByZXNvbHZlZCB2aWEgdGhlIGxvY2FsIGRhdGEgc3RvcmVcbiAqIGFuZCB3cml0ZXMgYXJlIHJlc29sdmVkIHRvIGJvdGggdGhlIHJlbW90ZSBhbmQgbG9jYWwgY29uY3VycmVudGx5LlxuICogVGhlIHJldmVyc2UgaXMgdHJ1ZSB0b28uIElmIHdlIHN0YXJ0dXAgYW5kIHRoZXJlIGlzIGFuIGV4Y2VzcyBmaWxlIGluIHRoZVxuICogcmVtb3RlLCBpdCdzIGNvcGllZCBsb2NhbC5cbiAqL1xuZXhwb3J0IGNsYXNzIENsb3VkQXdhcmVEYXRhc3RvcmUgZXh0ZW5kcyBBYnN0cmFjdERhdGFzdG9yZSBpbXBsZW1lbnRzIERhdGFzdG9yZSwgU3luY2hyb25pemluZ0RhdGFzdG9yZSB7XG5cbiAgICAvLyBhbGxvd3MgdXMgdG8ga2VlcCB0cmFjayBvZiB0aGUgc25hcHNob3QgaWQgc28gdGhhdCB3aGVuIHdlIHJlcG9ydCBlcnJvcnNcbiAgICAvLyB3ZSBjYW4ga25vdyB3aGljaCBzbmFwc2hvdCBmYWlsZWQuXG4gICAgcHJpdmF0ZSBzdGF0aWMgU05BUFNIT1RfSUQgPSAwO1xuXG4gICAgcHVibGljIHJlYWRvbmx5IGlkID0gJ2Nsb3VkLWF3YXJlJztcblxuICAgIHB1YmxpYyByZWFkb25seSBsb2NhbDogRGF0YXN0b3JlO1xuXG4gICAgcHVibGljIHJlYWRvbmx5IGNsb3VkOiBEYXRhc3RvcmU7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IGZpbGVTeW5jaHJvbml6YXRpb25FdmVudERpc3BhdGNoZXI6IElFdmVudERpc3BhdGNoZXI8RmlsZVN5bmNocm9uaXphdGlvbkV2ZW50PiA9IG5ldyBTaW1wbGVSZWFjdG9yKCk7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IHN5bmNocm9uaXphdGlvbkV2ZW50RGlzcGF0Y2hlcjogSUV2ZW50RGlzcGF0Y2hlcjxTeW5jaHJvbml6YXRpb25FdmVudD4gPSBuZXcgU2ltcGxlUmVhY3RvcigpO1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBkb2NNZXRhU25hcHNob3RFdmVudERpc3BhdGNoZXI6IElFdmVudERpc3BhdGNoZXI8RG9jTWV0YVNuYXBzaG90RXZlbnQ+ID0gbmV3IFNpbXBsZVJlYWN0b3IoKTtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgZG9jTWV0YUNvbXBhcmlzb25JbmRleCA9IG5ldyBEb2NNZXRhQ29tcGFyaXNvbkluZGV4KCk7XG5cbiAgICBwcml2YXRlIHByaW1hcnlTbmFwc2hvdD86IFNuYXBzaG90UmVzdWx0O1xuXG4gICAgcHVibGljIHNodXRkb3duSG9vazogQXN5bmNGdW5jdGlvbiA9IEFTWU5DX05VTExfRlVOQ1RJT047XG5cbiAgICBjb25zdHJ1Y3Rvcihsb2NhbDogRGF0YXN0b3JlLCBjbG91ZDogRGF0YXN0b3JlKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubG9jYWwgPSBsb2NhbDtcbiAgICAgICAgdGhpcy5jbG91ZCA9IGNsb3VkO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBpbml0KGVycm9yTGlzdGVuZXI6IEVycm9yTGlzdGVuZXIgPSBOVUxMX0ZVTkNUSU9OLFxuICAgICAgICAgICAgICAgICAgICAgIG9wdHM6IERhdGFzdG9yZUluaXRPcHRzID0ge25vSW5pdGlhbFNuYXBzaG90OiBmYWxzZSwgbm9TeW5jOiBmYWxzZX0pOiBQcm9taXNlPEluaXRSZXN1bHQ+IHtcblxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICB0aGlzLmNsb3VkLmluaXQoZXJyb3JMaXN0ZW5lciwge25vSW5pdGlhbFNuYXBzaG90OiB0cnVlfSksXG4gICAgICAgICAgICB0aGlzLmxvY2FsLmluaXQoZXJyb3JMaXN0ZW5lcilcbiAgICAgICAgXSk7XG5cbiAgICAgICAgY29uc3Qgc25hcHNob3RMaXN0ZW5lciA9IGFzeW5jIChldmVudDogRG9jTWV0YVNuYXBzaG90RXZlbnQpID0+IHRoaXMuZG9jTWV0YVNuYXBzaG90RXZlbnREaXNwYXRjaGVyLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuXG4gICAgICAgIGlmICghIG9wdHMubm9TeW5jKSB7XG4gICAgICAgICAgICB0aGlzLnByaW1hcnlTbmFwc2hvdCA9IGF3YWl0IHRoaXMuc25hcHNob3Qoc25hcHNob3RMaXN0ZW5lciwgZXJyb3JMaXN0ZW5lcik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge307XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgc3RvcCgpIHtcblxuICAgICAgICAvLyBUT0RPOiBhbGwgc25hcHNob3RzIHRoYXQgaGF2ZSBiZWVuIGhhbmRlZCBvdXQgc2hvdWxkIGJlIHN0b3BwZWQuLi5cblxuICAgICAgICAvLyB3ZSBoYXZlIHRvIGhhdmUgdGhlIHNodXRkb3duIHJ1biBCRUZPUkUgd2UgYWN0dWFsbHkgc2h1dCBkb3duIG9yIHdlXG4gICAgICAgIC8vIG1pZ2h0IGJlIHdlaXJkIGFuZCB1bnVzdWFsIGJlaGF2aW9yLlxuICAgICAgICBhd2FpdCB0aGlzLnNodXRkb3duSG9vaygpO1xuXG4gICAgICAgIGlmICh0aGlzLnByaW1hcnlTbmFwc2hvdCAmJiB0aGlzLnByaW1hcnlTbmFwc2hvdC51bnN1YnNjcmliZSkge1xuICAgICAgICAgICAgdGhpcy5wcmltYXJ5U25hcHNob3QudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKFt0aGlzLmNsb3VkLnN0b3AoKSwgdGhpcy5sb2NhbC5zdG9wKCldKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBjb250YWlucyhmaW5nZXJwcmludDogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvY2FsLmNvbnRhaW5zKGZpbmdlcnByaW50KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgZ2V0RG9jTWV0YShmaW5nZXJwcmludDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvY2FsLmdldERvY01ldGEoZmluZ2VycHJpbnQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyB3cml0ZUZpbGUoYmFja2VuZDogQmFja2VuZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZjogRmlsZVJlZixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IEJpbmFyeUZpbGVEYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0czogV3JpdGVGaWxlT3B0cyA9IHt9KTogUHJvbWlzZTxEb2NGaWxlTWV0YT4ge1xuXG4gICAgICAgIGNvbnN0IGRhdGFzdG9yZU11dGF0aW9uID0gb3B0cy5kYXRhc3RvcmVNdXRhdGlvbiB8fCBuZXcgRGVmYXVsdERhdGFzdG9yZU11dGF0aW9uKCk7XG5cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5sb2NhbC53cml0ZUZpbGUoYmFja2VuZCwgcmVmLCBkYXRhLCBvcHRzKTtcbiAgICAgICAgZGF0YXN0b3JlTXV0YXRpb24ud3JpdHRlbi5yZXNvbHZlKHRydWUpO1xuXG4gICAgICAgIC8vIGRvbid0IGF3YWl0IHRoZSBjbG91ZCB3cml0ZS4gIE9uY2UgaXQncyB3cml0dGVuIGxvY2FsbHkgd2UncmUgZmluZVxuICAgICAgICAvLyBpZiBpdCdzIG5vdCBpbiB0aGUgY2xvdWQgd2UgZ2V0IGFuIGVycm9yIGxvZ2dlZCBhbmQgd2Ugc2hvdWxkIGFsc29cbiAgICAgICAgLy8gaGF2ZSB0YXNrIHByb2dyZXNzIGluIHRoZSBmdXR1cmUuXG4gICAgICAgIHRoaXMuY2xvdWQud3JpdGVGaWxlKGJhY2tlbmQsIHJlZiwgZGF0YSwgb3B0cylcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBkYXRhc3RvcmVNdXRhdGlvbi5jb21taXR0ZWQucmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IGxvZy5lcnJvcihcIlVuYWJsZSB0byB3cml0ZSBmaWxlIHRvIGNsb3VkOiBcIiwgZXJyKSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcblxuICAgIH1cblxuICAgIHB1YmxpYyBnZXRGaWxlKGJhY2tlbmQ6IEJhY2tlbmQsIHJlZjogRmlsZVJlZiwgb3B0czogR2V0RmlsZU9wdHMgPSB7fSk6IERvY0ZpbGVNZXRhIHtcblxuICAgICAgICBEYXRhc3RvcmVzLmFzc2VydE5ldHdvcmtMYXllcih0aGlzLCBvcHRzLm5ldHdvcmtMYXllcik7XG5cbiAgICAgICAgaWYgKCEgb3B0cy5uZXR3b3JrTGF5ZXIgfHwgb3B0cy5uZXR3b3JrTGF5ZXIgPT09ICdsb2NhbCcpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxvY2FsLmdldEZpbGUoYmFja2VuZCwgcmVmKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNsb3VkLmdldEZpbGUoYmFja2VuZCwgcmVmKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHVibGljIGNvbnRhaW5zRmlsZShiYWNrZW5kOiBCYWNrZW5kLCByZWY6IEZpbGVSZWYpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWwuY29udGFpbnNGaWxlKGJhY2tlbmQsIHJlZik7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGRlbGV0ZUZpbGUoYmFja2VuZDogQmFja2VuZCwgcmVmOiBGaWxlUmVmKTogUHJvbWlzZTx2b2lkPiB7XG5cbiAgICAgICAgYXdhaXQgdGhpcy5jbG91ZC5kZWxldGVGaWxlKGJhY2tlbmQsIHJlZik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWwuZGVsZXRlRmlsZShiYWNrZW5kLCByZWYpO1xuXG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGRlbGV0ZShkb2NNZXRhRmlsZVJlZjogRG9jTWV0YUZpbGVSZWYsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhc3RvcmVNdXRhdGlvbjogRGF0YXN0b3JlTXV0YXRpb248Ym9vbGVhbj4gPSBuZXcgRGVmYXVsdERhdGFzdG9yZU11dGF0aW9uKCkpOlxuICAgICAgICBQcm9taXNlPFJlYWRvbmx5PENsb3VkQXdhcmVEZWxldGVSZXN1bHQ+PiB7XG5cbiAgICAgICAgZGF0YXN0b3JlTXV0YXRpb24ud3JpdHRlbi5nZXQoKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgdGhpcy5kb2NNZXRhQ29tcGFyaXNvbkluZGV4LnJlbW92ZShkb2NNZXRhRmlsZVJlZi5maW5nZXJwcmludCk7XG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAvLyB0aGlzIHNob3VsZCBuZXZlciBmYWlsIGluIHByYWN0aWNlLlxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBsb2cuZXJyb3IoXCJDb3VsZCBub3QgaGFuZGxlIGRlbGV0ZTogXCIsIGVycikpO1xuXG4gICAgICAgIGF3YWl0IHRoaXMuZGF0YXN0b3JlTXV0YXRpb25zLmV4ZWN1dGVCYXRjaGVkV3JpdGUoZGF0YXN0b3JlTXV0YXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXN5bmMgKHJlbW90ZUNvb3JkaW5hdG9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuY2xvdWQuZGVsZXRlKGRvY01ldGFGaWxlUmVmLCByZW1vdGVDb29yZGluYXRvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3luYyAobG9jYWxDb29yZGluYXRvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmxvY2FsLmRlbGV0ZShkb2NNZXRhRmlsZVJlZiwgbG9jYWxDb29yZGluYXRvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHt9O1xuXG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIHdyaXRlKGZpbmdlcnByaW50OiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHN0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgZG9jSW5mbzogSURvY0luZm8sXG4gICAgICAgICAgICAgICAgICAgICAgIG9wdHM6IFdyaXRlT3B0cyA9IHt9KTogUHJvbWlzZTx2b2lkPiB7XG5cbiAgICAgICAgY29uc3QgZGF0YXN0b3JlTXV0YXRpb24gPSBvcHRzLmRhdGFzdG9yZU11dGF0aW9uIHx8IG5ldyBEZWZhdWx0RGF0YXN0b3JlTXV0YXRpb24oKTtcblxuICAgICAgICBjb25zdCB3cml0ZUZpbGVEYXRhc3RvcmVNdXRhdGlvbiA9IG5ldyBEZWZhdWx0RGF0YXN0b3JlTXV0YXRpb248Ym9vbGVhbj4oKTtcblxuICAgICAgICBpZiAob3B0cy53cml0ZUZpbGUpIHtcblxuICAgICAgICAgICAgYXdhaXQgdGhpcy53cml0ZUZpbGUob3B0cy53cml0ZUZpbGUuYmFja2VuZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdHMud3JpdGVGaWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0cy53cml0ZUZpbGUuZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhc3RvcmVNdXRhdGlvbjogd3JpdGVGaWxlRGF0YXN0b3JlTXV0YXRpb259KTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd3JpdGVGaWxlRGF0YXN0b3JlTXV0YXRpb24ud3JpdHRlbi5yZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgd3JpdGVGaWxlRGF0YXN0b3JlTXV0YXRpb24uY29tbWl0dGVkLnJlc29sdmUodHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBkYXRhc3RvcmVNdXRhdGlvblxuICAgICAgICAgICAgLndyaXR0ZW4uZ2V0KCkudGhlbigoKSA9PiB7XG5cbiAgICAgICAgICAgIHRoaXMuZG9jTWV0YUNvbXBhcmlzb25JbmRleC51cGRhdGVVc2luZ0RvY0luZm8oZG9jSW5mbyk7XG5cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVyciA9PiBsb2cuZXJyb3IoXCJDb3VsZCBub3QgaGFuZGxlIGRlbGV0ZTogXCIsIGVycikpO1xuXG5cbiAgICAgICAgYXdhaXQgdGhpcy5kYXRhc3RvcmVNdXRhdGlvbnMuZXhlY3V0ZUJhdGNoZWRXcml0ZShkYXRhc3RvcmVNdXRhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXN5bmMgKHJlbW90ZUNvb3JkaW5hdG9yKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJlZm9yZSB3ZSB3cml0ZSB0aGUgRG9jTWV0YSBkYXRhIHRvIHRoZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2xvdWQgd2UgaGF2ZSB0byB3YWl0IHVudGlsIHRoZSBmaWxlIGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB3cml0dGVuLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgd3JpdGVGaWxlRGF0YXN0b3JlTXV0YXRpb24uY29tbWl0dGVkLmdldCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmNsb3VkLndyaXRlKGZpbmdlcnByaW50LCBkYXRhLCBkb2NJbmZvLCB7ZGF0YXN0b3JlTXV0YXRpb246IHJlbW90ZUNvb3JkaW5hdG9yfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXN5bmMgKGxvY2FsQ29vcmRpbmF0b3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMubG9jYWwud3JpdGUoZmluZ2VycHJpbnQsIGRhdGEsIGRvY0luZm8sIHtkYXRhc3RvcmVNdXRhdGlvbjogbG9jYWxDb29yZGluYXRvcn0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBnZXREb2NNZXRhUmVmcygpOiBQcm9taXNlPERvY01ldGFSZWZbXT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbC5nZXREb2NNZXRhUmVmcygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBzeW5jaHJvbml6ZURvY3MoLi4uZG9jTWV0YVJlZnM6IERvY01ldGFSZWZbXSkge1xuXG4gICAgICAgIGxvZy5pbmZvKFwiQ2xvdWRBd2FyZURhdGFzdG9yZTogc3luY2hyb25pemVEb2NzOiBcIiwgZG9jTWV0YVJlZnMpO1xuXG4gICAgICAgIGNvbnN0IHRvU3luY09yaWdpbiA9IGFzeW5jIChkYXRhc3RvcmU6IERhdGFzdG9yZSwgLi4uZG9jTWV0YVJlZnM6IERvY01ldGFSZWZbXSk6IFByb21pc2U8U3luY09yaWdpbj4gPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBzeW5jRG9jTWFwID0gYXdhaXQgUGVyc2lzdGVuY2VMYXllcnMudG9TeW5jRG9jTWFwRnJvbURvY3MoZGF0YXN0b3JlLCBkb2NNZXRhUmVmcyk7XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZGF0YXN0b3JlLFxuICAgICAgICAgICAgICAgIHN5bmNEb2NNYXBcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBjbGVhckRvY01ldGEgPSAoLi4uZG9jTWV0YVJlZnM6IERvY01ldGFSZWZbXSk6IERvY01ldGFSZWZbXSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZG9jTWV0YVJlZnMubWFwKGN1cnJlbnQgPT4ge1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgZmluZ2VycHJpbnQ6IGN1cnJlbnQuZmluZ2VycHJpbnRcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBjbG91ZFN5bmNPcmlnaW4gPSBhd2FpdCB0b1N5bmNPcmlnaW4odGhpcy5jbG91ZCwgLi4uY2xlYXJEb2NNZXRhKC4uLmRvY01ldGFSZWZzKSk7XG4gICAgICAgIGNvbnN0IGxvY2FsU3luY09yaWdpbiA9IGF3YWl0IHRvU3luY09yaWdpbih0aGlzLmxvY2FsLCAuLi5kb2NNZXRhUmVmcyk7XG5cbiAgICAgICAgLy8gVE9ETzogdGhlcmUgYXJlIG5vIGV2ZW50cyB3aXRoIHRoaXMgYW5kIHRoZSBVSSB3b24ndCBiZSB1cGRhdGVkLlxuICAgICAgICAvLyB0aGUgcHJvYmxtZSBpcyB0aGF0IEkgZG9uJ3QgdGhpbmsgd2UgY2FuIHJlLXNlbmQgdGhlIGV2ZW50IGRhdGFcbiAgICAgICAgLy8gYmVjYXVzZSB3ZSBvbmx5IHdhbnQgdGhlIHByb2dyZXNzIHVwZGF0ZWQuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIFRPRE86IHdlIGNvdWxkIHJlc29sdmUgdGhpcyBieSByZW1vdmluZyB0aGUgbXV0YXRpb25zIGFuZCBqdXN0XG4gICAgICAgIC8vIHNlbmRpbmcgdGhlIHByb2dyZXNzIGRhdGEuXG5cbiAgICAgICAgYXdhaXQgUGVyc2lzdGVuY2VMYXllcnMuc3luY2hyb25pemVPcmlnaW5zKGxvY2FsU3luY09yaWdpbiwgY2xvdWRTeW5jT3JpZ2luLCBBU1lOQ19OVUxMX0ZVTkNUSU9OKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBzbmFwc2hvdChkb2NNZXRhU25hcHNob3RFdmVudExpc3RlbmVyOiBEb2NNZXRhU25hcHNob3RFdmVudExpc3RlbmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvckxpc3RlbmVyOiBFcnJvckxpc3RlbmVyID0gTlVMTF9GVU5DVElPTik6IFByb21pc2U8U25hcHNob3RSZXN1bHQ+IHtcblxuICAgICAgICBjb25zdCBpc1ByaW1hcnlTbmFwc2hvdDogYm9vbGVhbiA9IHRoaXMucHJpbWFyeVNuYXBzaG90ID09PSB1bmRlZmluZWQ7XG5cbiAgICAgICAgY29uc3Qgc25hcHNob3RJRCA9IENsb3VkQXdhcmVEYXRhc3RvcmUuU05BUFNIT1RfSUQrKztcblxuICAgICAgICBjb25zdCBkZWR1cGxpY2F0ZWRMaXN0ZW5lciA9IERvY01ldGFTbmFwc2hvdEV2ZW50TGlzdGVuZXJzLmNyZWF0ZURlZHVwbGljYXRlZExpc3RlbmVyKGFzeW5jIGRvY01ldGFTbmFwc2hvdEV2ZW50ID0+IHtcbiAgICAgICAgICAgIGF3YWl0IGRvY01ldGFTbmFwc2hvdEV2ZW50TGlzdGVuZXIoZG9jTWV0YVNuYXBzaG90RXZlbnQpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjbGFzcyBJbml0aWFsU25hcHNob3RMYXRjaCB7XG5cbiAgICAgICAgICAgIHB1YmxpYyByZWFkb25seSBzeW5jRG9jTWFwOiBTeW5jRG9jTWFwID0ge307XG4gICAgICAgICAgICBwdWJsaWMgcmVhZG9ubHkgbGF0Y2ggPSBuZXcgTGF0Y2g8Ym9vbGVhbj4oKTtcbiAgICAgICAgICAgIHB1YmxpYyByZWFkb25seSBpZDogQ2xvdWREYXRhc3RvcmVJRDtcblxuICAgICAgICAgICAgcHJpdmF0ZSBoYXNJbml0aWFsVGVybWluYXRlZEJhdGNoOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAgICAgICAgIHByaXZhdGUgcGVuZGluZzogbnVtYmVyID0gMDtcblxuICAgICAgICAgICAgY29uc3RydWN0b3IoaWQ6IENsb3VkRGF0YXN0b3JlSUQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHByaXZhdGUgYXN5bmMgaGFuZGxlU25hcHNob3QoZG9jTWV0YVNuYXBzaG90RXZlbnQ6IERvY01ldGFTbmFwc2hvdEV2ZW50KSB7XG5cbiAgICAgICAgICAgICAgICAvLyBjb25zdCBzbmFwRGVzYyA9XG4gICAgICAgICAgICAgICAgLy8gRG9jTWV0YVNuYXBzaG90RXZlbnRzLmZvcm1hdChkb2NNZXRhU25hcHNob3RFdmVudCk7XG5cbiAgICAgICAgICAgICAgICB0cnkge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmhhc0luaXRpYWxUZXJtaW5hdGVkQmF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICghIGRvY01ldGFTbmFwc2hvdEV2ZW50LmJhdGNoIHx8IGRvY01ldGFTbmFwc2hvdEV2ZW50LmJhdGNoLmlkICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICArK3RoaXMucGVuZGluZztcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzeW5jRG9jcyA9IGF3YWl0IERvY01ldGFTbmFwc2hvdEV2ZW50cy50b1N5bmNEb2NzKGRvY01ldGFTbmFwc2hvdEV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgU3luY0RvY01hcHMucHV0QWxsKHRoaXMuc3luY0RvY01hcCwgc3luY0RvY3MpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChkb2NNZXRhU25hcHNob3RFdmVudC5jb25zaXN0ZW5jeSA9PT0gJ2NvbW1pdHRlZCcgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY01ldGFTbmFwc2hvdEV2ZW50LmJhdGNoIS50ZXJtaW5hdGVkKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5yRG9jcyA9IERpY3Rpb25hcmllcy5zaXplKHRoaXMuc3luY0RvY01hcCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFzSW5pdGlhbFRlcm1pbmF0ZWRCYXRjaCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcblxuICAgICAgICAgICAgICAgICAgICAtLXRoaXMucGVuZGluZztcblxuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmhhc0luaXRpYWxUZXJtaW5hdGVkQmF0Y2ggJiYgdGhpcy5wZW5kaW5nID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhdGNoLnJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwdWJsaWMgY3JlYXRlU25hcHNob3QoZGF0YXN0b3JlOiBEYXRhc3RvcmUpIHtcblxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhc3RvcmUuc25hcHNob3QoYXN5bmMgZG9jTWV0YVNuYXBzaG90RXZlbnQgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICghIGluaXRpYWxTeW5jQ29tcGxldGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmhhbmRsZVNuYXBzaG90KGRvY01ldGFTbmFwc2hvdEV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIGFsd2F5cyBmb3J3YXJkIHRvIHRoZSBzeW5jaHJvbml6aW5nIGxpc3RlbmVyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHN5bmNocm9uaXppbmdMaXN0ZW5lcihkb2NNZXRhU25hcHNob3RFdmVudCk7XG5cbiAgICAgICAgICAgICAgICB9LCBlcnJvckxpc3RlbmVyKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaW5pdGlhbFN5bmNDb21wbGV0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgICAgICAvLyBUaGUgd2F5IHRoaXMgYWxnb3JpdGhtIHdvcmtzIGlzIHRoYXQgd2UgbG9hZCB0aGUgbG9jYWwgc3RvcmUgZmlyc3RcbiAgICAgICAgLy8gYW5kIG9uIHRoZSBmaXJzdCBzbmFwc2hvdCB3ZSBrZWVwIGFuIGluZGV4IG9mIHRoZSBmaW5nZXJwcmludCB0b1xuICAgICAgICAvLyBVVUlELi4uIHRoZW4gd2Ugd2FpdCB1bnRpbCB3ZSBjYW4gZ2V0IHRoZSBzaW1pbGFyIGluZGV4IGZyb20gdGhlXG4gICAgICAgIC8vICdjb21taXR0ZWQnIHZlcnNpb24gb2YgdGhlIGNsb3VkIGRhdGFzdG9yZSwgdGhlbiB3ZSBwZXJmb3JtIGFcbiAgICAgICAgLy8gc3luY2hyb25pemUgYmFzZWQgb24gdGhpcyBtZXRhZGF0YS4uLiBhdCB3aGljaCBwb2ludCB3ZSBzeW5jaHJvbml6ZVxuICAgICAgICAvLyBib3RoIGRhdGFzb3VyY2VzLlxuXG4gICAgICAgIGNvbnN0IGxvY2FsSW5pdGlhbFNuYXBzaG90TGF0Y2ggPSBuZXcgSW5pdGlhbFNuYXBzaG90TGF0Y2goJ2xvY2FsJyk7XG4gICAgICAgIGNvbnN0IGNsb3VkSW5pdGlhbFNuYXBzaG90TGF0Y2ggPSBuZXcgSW5pdGlhbFNuYXBzaG90TGF0Y2goJ2Nsb3VkJyk7XG5cbiAgICAgICAgY29uc3Qgc3luY2hyb25pemluZ0V2ZW50RGVkdXBsaWNhdG9yOiBFdmVudERlZHVwbGljYXRvclxuICAgICAgICAgICAgPSBEb2NNZXRhU25hcHNob3RFdmVudExpc3RlbmVycy5jcmVhdGVEZWR1cGxpY2F0ZWRMaXN0ZW5lcihhc3luYyBkb2NNZXRhU25hcHNob3RFdmVudCA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZUV2ZW50ID0gYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgdHJ5IHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5pdGlhbFN5bmNDb21wbGV0ZWQgJiYgaXNQcmltYXJ5U25hcHNob3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuaGFuZGxlU25hcHNob3RTeW5jaHJvbml6YXRpb24oZG9jTWV0YVNuYXBzaG90RXZlbnQsIGRlZHVwbGljYXRlZExpc3RlbmVyLmxpc3RlbmVyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gbmVlZCB0byBwYXNzIG9uIHRoZXNlIGV2ZW50cyBhZnRlciB0aGUgcmVwbGljYXRpb24uXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IGRvY01ldGFTbmFwc2hvdEV2ZW50TGlzdGVuZXIoZG9jTWV0YVNuYXBzaG90RXZlbnQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaGFuZGxlRXZlbnQoKVxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsb2cuZXJyb3IoYFVuYWJsZSB0byBoYW5kbGUgc3luY2hyb25pemluZyBzbmFwc2hvdCAke3NuYXBzaG90SUR9YCwgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JMaXN0ZW5lcihlcnIpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0sIHRoaXMuZG9jTWV0YUNvbXBhcmlzb25JbmRleCk7XG5cbiAgICAgICAgY29uc3Qgc3luY2hyb25pemluZ0xpc3RlbmVyID0gc3luY2hyb25pemluZ0V2ZW50RGVkdXBsaWNhdG9yLmxpc3RlbmVyO1xuXG4gICAgICAgIGxvZy5pbmZvKFwiTG9jYWwgc25hcHNob3QuLi5cIik7XG4gICAgICAgIGNvbnN0IGxvY2FsU25hcHNob3RSZXN1bHRQcm9taXNlID0gbG9jYWxJbml0aWFsU25hcHNob3RMYXRjaC5jcmVhdGVTbmFwc2hvdCh0aGlzLmxvY2FsKTtcbiAgICAgICAgYXdhaXQgbG9jYWxJbml0aWFsU25hcHNob3RMYXRjaC5sYXRjaC5nZXQoKTtcbiAgICAgICAgbG9nLmluZm8oXCJMb2NhbCBzbmFwc2hvdC4uLmRvbmVcIik7XG5cbiAgICAgICAgbG9nLmluZm8oXCJDbG91ZCBzbmFwc2hvdC4uLlwiKTtcbiAgICAgICAgY29uc3QgY2xvdWRTbmFwc2hvdFJlc3VsdFByb21pc2UgPSBjbG91ZEluaXRpYWxTbmFwc2hvdExhdGNoLmNyZWF0ZVNuYXBzaG90KHRoaXMuY2xvdWQpO1xuICAgICAgICBhd2FpdCBjbG91ZEluaXRpYWxTbmFwc2hvdExhdGNoLmxhdGNoLmdldCgpO1xuICAgICAgICBsb2cuaW5mbyhcIkNsb3VkIHNuYXBzaG90Li4uZG9uZVwiKTtcblxuICAgICAgICBjb25zdCBsb2NhbFN5bmNPcmlnaW46IFN5bmNPcmlnaW4gPSB7XG4gICAgICAgICAgICBkYXRhc3RvcmU6IHRoaXMubG9jYWwsXG4gICAgICAgICAgICBzeW5jRG9jTWFwOiBsb2NhbEluaXRpYWxTbmFwc2hvdExhdGNoLnN5bmNEb2NNYXBcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBjbG91ZFN5bmNPcmlnaW46IFN5bmNPcmlnaW4gPSB7XG4gICAgICAgICAgICBkYXRhc3RvcmU6IHRoaXMuY2xvdWQsXG4gICAgICAgICAgICBzeW5jRG9jTWFwOiBjbG91ZEluaXRpYWxTbmFwc2hvdExhdGNoLnN5bmNEb2NNYXBcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoaXNQcmltYXJ5U25hcHNob3QpIHtcblxuICAgICAgICAgICAgYXdhaXQgUGVyc2lzdGVuY2VMYXllcnMuc3luY2hyb25pemVPcmlnaW5zKGxvY2FsU3luY09yaWdpbiwgY2xvdWRTeW5jT3JpZ2luLCBkZWR1cGxpY2F0ZWRMaXN0ZW5lci5saXN0ZW5lcik7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGluaXRpYWxTeW5jQ29tcGxldGVkID0gdHJ1ZTtcblxuICAgICAgICBhd2FpdCBsb2NhbFNuYXBzaG90UmVzdWx0UHJvbWlzZTtcbiAgICAgICAgY29uc3QgY2xvdWRTbmFwc2hvdFJlc3VsdCA9IGF3YWl0IGNsb3VkU25hcHNob3RSZXN1bHRQcm9taXNlO1xuXG4gICAgICAgIGxvZy5ub3RpY2UoXCJJTklUSUFMIFNOQVBTSE9UIENPTVBMRVRFXCIpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1bnN1YnNjcmliZTogY2xvdWRTbmFwc2hvdFJlc3VsdC51bnN1YnNjcmliZVxuICAgICAgICB9O1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBoYW5kbGVTbmFwc2hvdFN5bmNocm9uaXphdGlvbihkb2NNZXRhU25hcHNob3RFdmVudDogRG9jTWV0YVNuYXBzaG90RXZlbnQsIGxpc3RlbmVyOiBEb2NNZXRhU25hcHNob3RFdmVudExpc3RlbmVyKSB7XG5cbiAgICAgICAgY29uc3QgdG9Mb2NhbFN5bmNPcmlnaW4gPSBhc3luYyAoKTogUHJvbWlzZTxTeW5jT3JpZ2luPiA9PiB7XG5cbiAgICAgICAgICAgIC8vIFRPRE86IHdlIHNob3VsZCBoYXZlIHByb2dyZXNzIG9uIHRoaXMuLi5cblxuICAgICAgICAgICAgY29uc3QgZG9jYU1ldGFGaWxlczogRG9jTWV0YVJlZltdID1cbiAgICAgICAgICAgICAgICBkb2NNZXRhU25hcHNob3RFdmVudC5kb2NNZXRhTXV0YXRpb25zLm1hcChjdXJyZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtmaW5nZXJwcmludDogY3VycmVudC5maW5nZXJwcmludH07XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHN5bmNEb2NNYXAgPSBhd2FpdCBQZXJzaXN0ZW5jZUxheWVycy50b1N5bmNEb2NNYXBGcm9tRG9jcyh0aGlzLmxvY2FsLCBkb2NhTWV0YUZpbGVzKTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBkYXRhc3RvcmU6IHRoaXMubG9jYWwsXG4gICAgICAgICAgICAgICAgc3luY0RvY01hcFxuICAgICAgICAgICAgfTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHRvQ2xvdWRTeW5jT3JpZ2luID0gYXN5bmMgKCk6IFByb21pc2U8U3luY09yaWdpbj4gPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBzeW5jRG9jcyA9IGF3YWl0IERvY01ldGFTbmFwc2hvdEV2ZW50cy50b1N5bmNEb2NzKGRvY01ldGFTbmFwc2hvdEV2ZW50KTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBkYXRhc3RvcmU6IHRoaXMuY2xvdWQsXG4gICAgICAgICAgICAgICAgc3luY0RvY01hcDogU3luY0RvY01hcHMuZnJvbUFycmF5KHN5bmNEb2NzKVxuICAgICAgICAgICAgfTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChkb2NNZXRhU25hcHNob3RFdmVudC5jb25zaXN0ZW5jeSAhPT0gJ2NvbW1pdHRlZCcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoY29uc3QgZG9jTWV0YU11dGF0aW9uIG9mIGRvY01ldGFTbmFwc2hvdEV2ZW50LmRvY01ldGFNdXRhdGlvbnMpIHtcblxuICAgICAgICAgICAgaWYgKGRvY01ldGFNdXRhdGlvbi5tdXRhdGlvblR5cGUgPT09ICdjcmVhdGVkJyB8fCBkb2NNZXRhTXV0YXRpb24ubXV0YXRpb25UeXBlID09PSAndXBkYXRlZCcpIHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGNsb3VkU3luY09yaWdpbiA9IGF3YWl0IHRvQ2xvdWRTeW5jT3JpZ2luKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxTeW5jT3JpZ2luID0gYXdhaXQgdG9Mb2NhbFN5bmNPcmlnaW4oKTtcblxuICAgICAgICAgICAgICAgIGxvZy5pbmZvKFwiVHJhbnNmZXJyaW5nIGZyb20gY2xvdWQgLT4gbG9jYWwuLi5cIik7XG4gICAgICAgICAgICAgICAgYXdhaXQgUGVyc2lzdGVuY2VMYXllcnMudHJhbnNmZXIoY2xvdWRTeW5jT3JpZ2luLCBsb2NhbFN5bmNPcmlnaW4sIGxpc3RlbmVyLCAnY2xvdWQtdG8tbG9jYWwnKTtcbiAgICAgICAgICAgICAgICBsb2cuaW5mbyhcIlRyYW5zZmVycmluZyBmcm9tIGNsb3VkIC0+IGxvY2FsLi4uZG9uZVwiKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZG9jTWV0YU11dGF0aW9uLm11dGF0aW9uVHlwZSA9PT0gJ2RlbGV0ZWQnKSB7XG4gICAgICAgICAgICAgICAgLy8gVE9ETzogaG93IGRvIHdlIGhhbmRsZSB0aGlzIHZpYSB0cmFuc2ZlciB0aGUgZnVuY3Rpb24uLi5cbiAgICAgICAgICAgICAgICAvLyB3ZSdyZSBhbHNvIG5vdCByZWNlaXZpbmcgZXZlbnRzIGZvciB0aGlzIGluIHRoZSBVSSBzbyBub1xuICAgICAgICAgICAgICAgIC8vIHByb2dyZXNzIHVwZGF0ZXMuXG4gICAgICAgICAgICAgICAgY29uc3QgZG9jTWV0YUZpbGVSZWYgPSBhd2FpdCBkb2NNZXRhTXV0YXRpb24uZG9jTWV0YUZpbGVSZWZQcm92aWRlcigpO1xuXG4gICAgICAgICAgICAgICAgLy8gV2UgaGF2ZSB0byBoYW5kbGUgZGVsZXRpbmcgdGhlIGJpbmFyeSBmaWxlcyBsb2NhbGx5Li4uXG4gICAgICAgICAgICAgICAgY29uc3QgZmlsZVJlZnMgPSBCYWNrZW5kRmlsZVJlZnMudG9CYWNrZW5kRmlsZVJlZnMoRWl0aGVyLm9mUmlnaHQoZG9jTWV0YUZpbGVSZWYuZG9jSW5mbykpO1xuXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBmaWxlUmVmIG9mIGZpbGVSZWZzKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IGRvIHRoaXMgaW4gcGFyYWxsZWwuLi5cbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5sb2NhbC5kZWxldGVGaWxlKGZpbGVSZWYuYmFja2VuZCwgZmlsZVJlZik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogZG8gYm90aCB0aGUgbWFpbiBkZWxldGUgYW5kIGVhY2ggZmlsZSBkZWxldGUgaW5cbiAgICAgICAgICAgICAgICAvLyBwYXJhbGxlbC5cblxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMubG9jYWwuZGVsZXRlKGRvY01ldGFGaWxlUmVmKTtcbiAgICAgICAgICAgICAgICBsb2cuaW5mbyhcIkZpbGUgZGVsZXRlZDogXCIgLCBkb2NNZXRhRmlsZVJlZik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3luY2hyb25pemF0aW9uRXZlbnREaXNwYXRjaGVyLmRpc3BhdGNoRXZlbnQoe1xuICAgICAgICAgICAgLi4uZG9jTWV0YVNuYXBzaG90RXZlbnQsXG4gICAgICAgICAgICBkZXN0OiAnbG9jYWwnXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgcHVibGljIGFkZEZpbGVTeW5jaHJvbml6YXRpb25FdmVudExpc3RlbmVyKGV2ZW50TGlzdGVuZXI6IEZpbGVTeW5jaHJvbml6YXRpb25FdmVudExpc3RlbmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZmlsZVN5bmNocm9uaXphdGlvbkV2ZW50RGlzcGF0Y2hlci5hZGRFdmVudExpc3RlbmVyKGV2ZW50TGlzdGVuZXIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRTeW5jaHJvbml6YXRpb25FdmVudExpc3RlbmVyKGV2ZW50TGlzdGVuZXI6IFN5bmNocm9uaXphdGlvbkV2ZW50TGlzdGVuZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zeW5jaHJvbml6YXRpb25FdmVudERpc3BhdGNoZXIuYWRkRXZlbnRMaXN0ZW5lcihldmVudExpc3RlbmVyKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkRG9jTWV0YVNuYXBzaG90RXZlbnRMaXN0ZW5lcihkb2NNZXRhU25hcHNob3RFdmVudExpc3RlbmVyOiBEb2NNZXRhU25hcHNob3RFdmVudExpc3RlbmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZG9jTWV0YVNuYXBzaG90RXZlbnREaXNwYXRjaGVyLmFkZEV2ZW50TGlzdGVuZXIoZG9jTWV0YVNuYXBzaG90RXZlbnRMaXN0ZW5lcik7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGRlYWN0aXZhdGUoKSB7XG4gICAgICAgIGF3YWl0IGZpcmViYXNlLmF1dGgoKS5zaWduT3V0KCk7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIG92ZXJ2aWV3KCk6IFByb21pc2U8RGF0YXN0b3JlT3ZlcnZpZXcgfCB1bmRlZmluZWQ+IHtcblxuICAgICAgICByZXR1cm4gT3B0aW9uYWwuZmlyc3QoYXdhaXQgdGhpcy5sb2NhbC5vdmVydmlldygpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5jbG91ZC5vdmVydmlldygpKS5nZXRPclVuZGVmaW5lZCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjYXBhYmlsaXRpZXMoKTogRGF0YXN0b3JlQ2FwYWJpbGl0aWVzIHtcblxuICAgICAgICAvLyB3ZSBzdXBwb3J0IGJvdGggJ2xvY2FsJyBhbmQgJ3dlYicgaGVyZSBzaW5jZSB0aGlzIGlzIGEgY29tYmluYXRpb25cbiAgICAgICAgLy8gb2YgYm90aCBmaXJlYmFzZSBhbmQgdGhlIGRpc2sgZGF0YXN0b3JlLlxuICAgICAgICBjb25zdCBuZXR3b3JrTGF5ZXJzID0gbmV3IFNldDxOZXR3b3JrTGF5ZXI+KFsnbG9jYWwnLCAnd2ViJ10pO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZXR3b3JrTGF5ZXJzLFxuICAgICAgICAgICAgcGVybWlzc2lvbjoge21vZGU6ICdydyd9XG4gICAgICAgIH07XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0UHJlZnMoKTogUHJlZnNQcm92aWRlciB7XG5cbiAgICAgICAgY29uc3QgY2xvdWRQcmVmcyA9IHRoaXMuY2xvdWQuZ2V0UHJlZnMoKTtcbiAgICAgICAgY29uc3QgbG9jYWxQcmVmcyA9IHRoaXMubG9jYWwuZ2V0UHJlZnMoKTtcblxuICAgICAgICAvLyBUT0RPOiBhZGQgc3VwcG9ydCBmb3IgdGhlIGV2ZW50IGxpc3RlbmVyIHZlcnNpb24gc28gSSBjYW4gZ2V0IHRoZSBtb3N0IHJlY2VudFxuICAgICAgICAvLyB2ZXJzaW9uIG9mIHRoZSBwcmVmcyBhcyBJIHRoaW5rIHdlIG5lZWQgdGhhdCBmb3IgZmlyZWJhc2Ugc3VwcG9ydC5cblxuICAgICAgICBjb25zdCBwcmVmcyA9IG5ldyBDb21wb3NpdGVQcmVmcyhbY2xvdWRQcmVmcy5nZXQoKS5wcmVmcywgbG9jYWxQcmVmcy5nZXQoKS5wcmVmc10pO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBnZXQoKTogRGF0YXN0b3JlUHJlZnMge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHByZWZzOiBwcmVmcyxcbiAgICAgICAgICAgICAgICAgICAgdW5zdWJzY3JpYmU6IE5VTExfRlVOQ1RJT05cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgfVxuXG59XG5cblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgZG9jIGFuZCBpdHMgVVVJRC4gIFRoZSBVVUlEIGlzIG9wdGlvbmFsIHRob3VnaCBhcyBvbGRlciBkb2NzXG4gKiBtYXkgbm90IGhhdmUgYSBkb2MgYnV0IGluIHByYWN0aWNlIGFsbW9zdCBhbGwgZG9jcyB3aWxsIGhhdmUgYSBVVUlELlxuICovXG5leHBvcnQgaW50ZXJmYWNlIERvY1VVSUQge1xuICAgIGZpbmdlcnByaW50OiBzdHJpbmc7XG4gICAgdXVpZD86IFVVSUQ7XG59XG5cbmV4cG9ydCB0eXBlIENsb3VkRGF0YXN0b3JlSUQgPSAnbG9jYWwnIHwgJ2Nsb3VkJztcblxuIl19