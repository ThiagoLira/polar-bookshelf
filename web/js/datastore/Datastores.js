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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MemoryDatastore_1 = require("./MemoryDatastore");
const DiskDatastore_1 = require("./DiskDatastore");
const Logger_1 = require("polar-shared/src/logger/Logger");
const DocMetaRef_1 = require("./DocMetaRef");
const DocMetas_1 = require("../metadata/DocMetas");
const Functions_1 = require("polar-shared/src/util/Functions");
const Percentages_1 = require("polar-shared/src/util/Percentages");
const ProgressTracker_1 = require("polar-shared/src/util/ProgressTracker");
const Providers_1 = require("polar-shared/src/util/Providers");
const DefaultPersistenceLayer_1 = require("./DefaultPersistenceLayer");
const deep_equal_1 = __importDefault(require("deep-equal"));
const Preconditions_1 = require("polar-shared/src/Preconditions");
const AsyncWorkQueue_1 = require("polar-shared/src/util/AsyncWorkQueue");
const log = Logger_1.Logger.create();
const ENV_POLAR_DATASTORE = 'POLAR_DATASTORE';
class Datastores {
    static create() {
        const name = process.env[ENV_POLAR_DATASTORE];
        if (name === 'MEMORY') {
            log.info("Using memory datastore");
            return new MemoryDatastore_1.MemoryDatastore();
        }
        return new DiskDatastore_1.DiskDatastore();
    }
    static getDocMetas(datastore, listener, docMetaRefs) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!docMetaRefs) {
                docMetaRefs = yield datastore.getDocMetaRefs();
            }
            for (const docMetaRef of docMetaRefs) {
                const docMetaData = yield datastore.getDocMeta(docMetaRef.fingerprint);
                if (!docMetaData) {
                    throw new Error("Could not find docMeta for fingerprint: " + docMetaRef.fingerprint);
                }
                const docMeta = DocMetas_1.DocMetas.deserialize(docMetaData, docMetaRef.fingerprint);
                listener(docMeta);
            }
        });
    }
    static createCommittedSnapshot(datastore, listener, batch) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!batch) {
                batch = {
                    id: 0,
                    terminated: false
                };
            }
            const docMetaFiles = yield datastore.getDocMetaRefs();
            const progressTracker = new ProgressTracker_1.ProgressTracker({ total: docMetaFiles.length, id: `datastore:${datastore.id}#snapshot` });
            for (const docMetaFile of docMetaFiles) {
                const dataProvider = Providers_1.AsyncProviders.memoize(() => __awaiter(this, void 0, void 0, function* () { return yield datastore.getDocMeta(docMetaFile.fingerprint); }));
                const docMetaProvider = Providers_1.AsyncProviders.memoize(() => __awaiter(this, void 0, void 0, function* () { return DocMetas_1.DocMetas.deserialize((yield dataProvider()), docMetaFile.fingerprint); }));
                const docInfoProvider = Providers_1.AsyncProviders.memoize(() => __awaiter(this, void 0, void 0, function* () { return (yield docMetaProvider()).docInfo; }));
                const docMetaFileRefProvider = Providers_1.AsyncProviders.memoize(() => __awaiter(this, void 0, void 0, function* () { return DocMetaRef_1.DocMetaFileRefs.createFromDocInfo(yield docInfoProvider()); }));
                const docMetaMutation = {
                    fingerprint: docMetaFile.fingerprint,
                    docMetaFileRefProvider,
                    dataProvider,
                    docMetaProvider,
                    docInfoProvider,
                    mutationType: 'created'
                };
                yield listener({
                    datastore: datastore.id,
                    progress: progressTracker.incr(),
                    consistency: 'committed',
                    docMetaMutations: [docMetaMutation],
                    batch
                });
            }
            yield listener({
                datastore: datastore.id,
                progress: progressTracker.terminate(),
                consistency: 'committed',
                docMetaMutations: [],
                batch: {
                    id: batch.id,
                    terminated: true,
                }
            });
            return {};
        });
    }
    static purge(datastore, purgeListener = Functions_1.NULL_FUNCTION) {
        return __awaiter(this, void 0, void 0, function* () {
            log.debug("Getting doc meta refs...");
            const docMetaFiles = yield datastore.getDocMetaRefs();
            log.debug("Getting doc meta refs...done");
            let completed = 0;
            const total = docMetaFiles.length;
            const work = [];
            const asyncWorkQueue = new AsyncWorkQueue_1.AsyncWorkQueue(work);
            for (const docMetaFile of docMetaFiles) {
                work.push(() => __awaiter(this, void 0, void 0, function* () {
                    log.debug(`Purging file: ${docMetaFile.fingerprint} in datastore ${datastore.id}`);
                    const data = yield datastore.getDocMeta(docMetaFile.fingerprint);
                    const docMeta = DocMetas_1.DocMetas.deserialize(data, docMetaFile.fingerprint);
                    const docMetaFileRef = DocMetaRef_1.DocMetaFileRefs.createFromDocInfo(docMeta.docInfo);
                    yield datastore.delete(docMetaFileRef);
                    ++completed;
                    const progress = Percentages_1.Percentages.calculate(completed, total);
                    purgeListener({ completed, total, progress });
                }));
            }
            yield asyncWorkQueue.execute();
            if (total === 0) {
                purgeListener({ completed, total, progress: 100 });
            }
        });
    }
    static checkConsistency(datastore0, datastore1) {
        return __awaiter(this, void 0, void 0, function* () {
            const manifest0 = yield this.toDocInfoManifest(datastore0);
            const manifest1 = yield this.toDocInfoManifest(datastore1);
            const consistent = deep_equal_1.default(manifest0, manifest1);
            return { consistent, manifest0, manifest1 };
        });
    }
    static toDocInfoManifest(datastore) {
        return __awaiter(this, void 0, void 0, function* () {
            const persistenceLayer = new DefaultPersistenceLayer_1.DefaultPersistenceLayer(datastore);
            const docMetaFiles = (yield datastore.getDocMetaRefs())
                .sort((d0, d1) => d0.fingerprint.localeCompare(d1.fingerprint));
            const result = [];
            for (const docMetaFile of docMetaFiles) {
                const docMeta = yield persistenceLayer.getDocMeta(docMetaFile.fingerprint);
                Preconditions_1.Preconditions.assertPresent(docMeta, "toDocInfoManifest could not find docMeta for " + docMetaFile.fingerprint);
                result.push(docMeta.docInfo);
            }
            return result;
        });
    }
    static assertNetworkLayer(datastore, networkLayer) {
        if (!networkLayer) {
            return;
        }
        const capabilities = datastore.capabilities();
        if (!capabilities.networkLayers.has(networkLayer)) {
            throw new Error(`Datastore '${datastore.id}' does not support ${networkLayer} only ${capabilities.networkLayers}`);
        }
    }
}
exports.Datastores = Datastores;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0YXN0b3Jlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkRhdGFzdG9yZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFQSx1REFBa0Q7QUFDbEQsbURBQThDO0FBQzlDLDJEQUFzRDtBQUN0RCw2Q0FBeUQ7QUFFekQsbURBQThDO0FBQzlDLCtEQUE4RDtBQUM5RCxtRUFBOEQ7QUFDOUQsMkVBQXNFO0FBQ3RFLCtEQUErRDtBQUMvRCx1RUFBa0U7QUFFbEUsNERBQW1DO0FBQ25DLGtFQUE2RDtBQUM3RCx5RUFBbUY7QUFJbkYsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLE1BQU0sbUJBQW1CLEdBQUcsaUJBQWlCLENBQUM7QUFFOUMsTUFBYSxVQUFVO0lBRVosTUFBTSxDQUFDLE1BQU07UUFFaEIsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBRTlDLElBQUksSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUNuQixHQUFHLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLENBQUM7WUFDbkMsT0FBTyxJQUFJLGlDQUFlLEVBQUUsQ0FBQztTQUNoQztRQUVELE9BQU8sSUFBSSw2QkFBYSxFQUFFLENBQUM7SUFFL0IsQ0FBQztJQUVNLE1BQU0sQ0FBTyxXQUFXLENBQUMsU0FBb0IsRUFDcEIsUUFBeUIsRUFDekIsV0FBMEI7O1lBRXRELElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQ2QsV0FBVyxHQUFHLE1BQU0sU0FBUyxDQUFDLGNBQWMsRUFBRSxDQUFDO2FBQ2xEO1lBRUQsS0FBSyxNQUFNLFVBQVUsSUFBSSxXQUFXLEVBQUU7Z0JBQ2xDLE1BQU0sV0FBVyxHQUFHLE1BQU0sU0FBUyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBRXZFLElBQUssQ0FBRSxXQUFXLEVBQUU7b0JBQ2hCLE1BQU0sSUFBSSxL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QUFPLE1BQU0sQ0FBQztRQUVsQixDQUFDO0tBQUE7SUFLTSxNQUFNLENBQUMsa0JBQWtCLENBQUMsU0FBb0IsRUFBRSxZQUEyQjtRQUU5RSxJQUFJLENBQUUsWUFBWSxFQUFFO1lBRWhCLE9BQU87U0FDVjtRQUVELE1BQU0sWUFBWSxHQUFHLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUU5QyxJQUFJLENBQUUsWUFBWSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFDaEQsTUFBTSxJQUFJLEtBQUssQ0FBQyxjQUFjLFNBQVMsQ0FBQyxFQUFFLHNCQUFzQixZQUFZLFNBQVMsWUFBWSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7U0FDdEg7SUFFTCxDQUFDO0NBR0o7QUF2T0QsZ0NBdU9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEYXRhc3RvcmUsIERvY01ldGFNdXRhdGlvbiwgRG9jTWV0YVNuYXBzaG90QmF0Y2gsIERvY01ldGFTbmFwc2hvdEV2ZW50TGlzdGVuZXIsIFNuYXBzaG90UmVzdWx0fSBmcm9tICcuL0RhdGFzdG9yZSc7XG5pbXBvcnQge05ldHdvcmtMYXllcn0gZnJvbSAnLi9EYXRhc3RvcmUnO1xuaW1wb3J0IHtNZW1vcnlEYXRhc3RvcmV9IGZyb20gJy4vTWVtb3J5RGF0YXN0b3JlJztcbmltcG9ydCB7RGlza0RhdGFzdG9yZX0gZnJvbSAnLi9EaXNrRGF0YXN0b3JlJztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL2xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IHtEb2NNZXRhRmlsZVJlZnMsIERvY01ldGFSZWZ9IGZyb20gJy4vRG9jTWV0YVJlZic7XG5pbXBvcnQge0RvY01ldGF9IGZyb20gJy4uL21ldGFkYXRhL0RvY01ldGEnO1xuaW1wb3J0IHtEb2NNZXRhc30gZnJvbSAnLi4vbWV0YWRhdGEvRG9jTWV0YXMnO1xuaW1wb3J0IHtOVUxMX0ZVTkNUSU9OfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvRnVuY3Rpb25zJztcbmltcG9ydCB7UGVyY2VudGFnZXN9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC9QZXJjZW50YWdlcyc7XG5pbXBvcnQge1Byb2dyZXNzVHJhY2tlcn0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL1Byb2dyZXNzVHJhY2tlcic7XG5pbXBvcnQge0FzeW5jUHJvdmlkZXJzfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvUHJvdmlkZXJzJztcbmltcG9ydCB7RGVmYXVsdFBlcnNpc3RlbmNlTGF5ZXJ9IGZyb20gJy4vRGVmYXVsdFBlcnNpc3RlbmNlTGF5ZXInO1xuaW1wb3J0IHtEb2NJbmZvfSBmcm9tICcuLi9tZXRhZGF0YS9Eb2NJbmZvJztcbmltcG9ydCBkZWVwRXF1YWwgZnJvbSAnZGVlcC1lcXVhbCc7XG5pbXBvcnQge1ByZWNvbmRpdGlvbnN9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvUHJlY29uZGl0aW9ucyc7XG5pbXBvcnQge0FzeW5jRnVuY3Rpb24sIEFzeW5jV29ya1F1ZXVlfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvQXN5bmNXb3JrUXVldWUnO1xuaW1wb3J0IHtJRG9jSW5mb30gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvbWV0YWRhdGEvSURvY0luZm9cIjtcbmltcG9ydCB7SURvY01ldGF9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL21ldGFkYXRhL0lEb2NNZXRhXCI7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuY29uc3QgRU5WX1BPTEFSX0RBVEFTVE9SRSA9ICdQT0xBUl9EQVRBU1RPUkUnO1xuXG5leHBvcnQgY2xhc3MgRGF0YXN0b3JlcyB7XG5cbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZSgpOiBEYXRhc3RvcmUge1xuXG4gICAgICAgIGNvbnN0IG5hbWUgPSBwcm9jZXNzLmVudltFTlZfUE9MQVJfREFUQVNUT1JFXTtcblxuICAgICAgICBpZiAobmFtZSA9PT0gJ01FTU9SWScpIHtcbiAgICAgICAgICAgIGxvZy5pbmZvKFwiVXNpbmcgbWVtb3J5IGRhdGFzdG9yZVwiKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTWVtb3J5RGF0YXN0b3JlKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3IERpc2tEYXRhc3RvcmUoKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgZ2V0RG9jTWV0YXMoZGF0YXN0b3JlOiBEYXRhc3RvcmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcjogRG9jTWV0YUxpc3RlbmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jTWV0YVJlZnM/OiBEb2NNZXRhUmVmW10pIHtcblxuICAgICAgICBpZiAoIWRvY01ldGFSZWZzKSB7XG4gICAgICAgICAgICBkb2NNZXRhUmVmcyA9IGF3YWl0IGRhdGFzdG9yZS5nZXREb2NNZXRhUmVmcygpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChjb25zdCBkb2NNZXRhUmVmIG9mIGRvY01ldGFSZWZzKSB7XG4gICAgICAgICAgICBjb25zdCBkb2NNZXRhRGF0YSA9IGF3YWl0IGRhdGFzdG9yZS5nZXREb2NNZXRhKGRvY01ldGFSZWYuZmluZ2VycHJpbnQpO1xuXG4gICAgICAgICAgICBpZiAoICEgZG9jTWV0YURhdGEpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBkb2NNZXRhIGZvciBmaW5nZXJwcmludDogXCIgKyBkb2NNZXRhUmVmLmZpbmdlcnByaW50KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgZG9jTWV0YSA9IERvY01ldGFzLmRlc2VyaWFsaXplKGRvY01ldGFEYXRhLCBkb2NNZXRhUmVmLmZpbmdlcnByaW50KTtcbiAgICAgICAgICAgIGxpc3RlbmVyKGRvY01ldGEpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBjb21taXR0ZWQgc25hcHNob3QgZnJvbSBhbiBleGlzdGluZyBkYXRhc3RvcmUgc28gdGhhdCBsZWdhY3lcbiAgICAgKiBvbmVzIHNlZW0gdG8gc3VwcG9ydCBzbmFwc2hvdHMgdGhvdWdoIHRoZXkgbWlnaHQgbm90IHN1cHBvcnQgdXBkYXRlcyBvZlxuICAgICAqIHRoZSBsaXN0ZW5lcnMuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBjcmVhdGVDb21taXR0ZWRTbmFwc2hvdChkYXRhc3RvcmU6IERhdGFzdG9yZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyOiBEb2NNZXRhU25hcHNob3RFdmVudExpc3RlbmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmF0Y2g/OiBEb2NNZXRhU25hcHNob3RCYXRjaCk6IFByb21pc2U8U25hcHNob3RSZXN1bHQ+IHtcblxuICAgICAgICBpZiAoISBiYXRjaCkge1xuXG4gICAgICAgICAgICAvLyBmb3IgbW9zdCBvZiBvdXIgdXNhZ2VzIHdlIGp1c3QgcmVjZWl2ZSB0aGUgZmlyc3QgYmF0Y2ggYW5kIHdlJ3JlXG4gICAgICAgICAgICAvLyBkb25lIGF0IHRoYXQgcG9pbnQuXG5cbiAgICAgICAgICAgIGJhdGNoID0ge1xuICAgICAgICAgICAgICAgIGlkOiAwLFxuICAgICAgICAgICAgICAgIHRlcm1pbmF0ZWQ6IGZhbHNlXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkb2NNZXRhRmlsZXMgPSBhd2FpdCBkYXRhc3RvcmUuZ2V0RG9jTWV0YVJlZnMoKTtcblxuICAgICAgICBjb25zdCBwcm9ncmVzc1RyYWNrZXIgPSBuZXcgUHJvZ3Jlc3NUcmFja2VyKHt0b3RhbDogZG9jTWV0YUZpbGVzLmxlbmd0aCwgaWQ6IGBkYXRhc3RvcmU6JHtkYXRhc3RvcmUuaWR9I3NuYXBzaG90YH0pO1xuXG4gICAgICAgIC8vIFRPRE86IHdlIGNhbGwgdGhlIGxpc3RlbmVyIHRvbyBtYW55IHRpbWVzIGhlcmUgYnV0IHdlIG1pZ2h0IHdhbnQgdG9cbiAgICAgICAgLy8gYmF0Y2ggaXQgaW4gdGhlIGZ1dHVyZSBzbyB0aGF0IHRoZSBsaXN0ZW5lciBkb2Vzbid0IGdldCBjYWxsZWQgdG9vXG4gICAgICAgIC8vIG9mdGVuIGFzIGl0IHdvdWxkIHVwZGF0ZSB0aGUgVUkgdG9vIGZyZXF1ZW50bHkuICBXZSBuZWVkIHRvIGNvbXB1dGVcbiAgICAgICAgLy8gdGhlIGlkZWFsIGJhdGNoIHNpemUgc28gd2Ugc2hvdWxkIHByb2JhYmx5IGNvbXB1dGUgaXQgYXM6XG5cbiAgICAgICAgLy8gY29uc3QgcGVyY01heCA9IDEwMDtcbiAgICAgICAgLy8gY29uc3QgbWluQmF0Y2hTaXplID0gMTtcbiAgICAgICAgLy8gY29uc3QgbWF4QmF0Y2hTaXplID0gMjA7XG4gICAgICAgIC8vXG4gICAgICAgIC8vIE1hdGgubWF4KG1pbkJhdGNoU2l6ZSwgTWF0aC5taW4obWF4QmF0Y2hTaXplLCBkb2NNZXRhRmlsZXMubGVuZ3RoIC9cbiAgICAgICAgLy8gcGVyY01heCkpICAgVGhpcyB3aWxsIGdpdmUgdXMgYW4gaWRlYWwgYmF0Y2ggc2l6ZSBzbyB0aGF0IHdlIHVwZGF0ZVxuICAgICAgICAvLyB0aGUgVUkgZXZlcnkgMSUgT1IgdGhlIG1heEJhdGNoU2l6ZS4uLlxuXG4gICAgICAgIGZvciAoY29uc3QgZG9jTWV0YUZpbGUgb2YgZG9jTWV0YUZpbGVzKSB7XG5cbiAgICAgICAgICAgIC8vIC8vIFRPRE86IGluIHRoZSBjbG91ZCBzdG9yZSBpbXBsZW1lbnRhdGlvbiBpdCB3aWxsIHByb2JhYmx5IGJlIG11Y2hcbiAgICAgICAgICAgIC8vIC8vIGZhc3RlciB0byB1c2UgYSBmaWxlIEpVU1QgZm9yIHRoZSBEb2NJbmZvIHRvIHNwZWVkIHVwIGxvYWRpbmcuXG4gICAgICAgICAgICBjb25zdCBkYXRhUHJvdmlkZXIgPSBBc3luY1Byb3ZpZGVycy5tZW1vaXplKGFzeW5jICgpID0+IGF3YWl0IGRhdGFzdG9yZS5nZXREb2NNZXRhKGRvY01ldGFGaWxlLmZpbmdlcnByaW50KSk7XG4gICAgICAgICAgICBjb25zdCBkb2NNZXRhUHJvdmlkZXIgPSBBc3luY1Byb3ZpZGVycy5tZW1vaXplKGFzeW5jICgpID0+IERvY01ldGFzLmRlc2VyaWFsaXplKChhd2FpdCBkYXRhUHJvdmlkZXIoKSkhLCBkb2NNZXRhRmlsZS5maW5nZXJwcmludCkpO1xuICAgICAgICAgICAgY29uc3QgZG9jSW5mb1Byb3ZpZGVyID0gQXN5bmNQcm92aWRlcnMubWVtb2l6ZShhc3luYyAoKSA9PiAoYXdhaXQgZG9jTWV0YVByb3ZpZGVyKCkpLmRvY0luZm8pO1xuICAgICAgICAgICAgY29uc3QgZG9jTWV0YUZpbGVSZWZQcm92aWRlciA9IEFzeW5jUHJvdmlkZXJzLm1lbW9pemUoYXN5bmMgKCkgPT4gRG9jTWV0YUZpbGVSZWZzLmNyZWF0ZUZyb21Eb2NJbmZvKGF3YWl0IGRvY0luZm9Qcm92aWRlcigpKSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGRvY01ldGFNdXRhdGlvbjogRG9jTWV0YU11dGF0aW9uID0ge1xuICAgICAgICAgICAgICAgIGZpbmdlcnByaW50OiBkb2NNZXRhRmlsZS5maW5nZXJwcmludCxcbiAgICAgICAgICAgICAgICBkb2NNZXRhRmlsZVJlZlByb3ZpZGVyLFxuICAgICAgICAgICAgICAgIGRhdGFQcm92aWRlcixcbiAgICAgICAgICAgICAgICBkb2NNZXRhUHJvdmlkZXIsXG4gICAgICAgICAgICAgICAgZG9jSW5mb1Byb3ZpZGVyLFxuICAgICAgICAgICAgICAgIG11dGF0aW9uVHlwZTogJ2NyZWF0ZWQnXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBhd2FpdCBsaXN0ZW5lcih7XG4gICAgICAgICAgICAgICAgZGF0YXN0b3JlOiBkYXRhc3RvcmUuaWQsXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3M6IHByb2dyZXNzVHJhY2tlci5pbmNyKCksXG4gICAgICAgICAgICAgICAgY29uc2lzdGVuY3k6ICdjb21taXR0ZWQnLFxuICAgICAgICAgICAgICAgIGRvY01ldGFNdXRhdGlvbnM6IFtkb2NNZXRhTXV0YXRpb25dLFxuICAgICAgICAgICAgICAgIGJhdGNoXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICAgICAgYXdhaXQgbGlzdGVuZXIoe1xuICAgICAgICAgICAgZGF0YXN0b3JlOiBkYXRhc3RvcmUuaWQsXG4gICAgICAgICAgICBwcm9ncmVzczogcHJvZ3Jlc3NUcmFja2VyLnRlcm1pbmF0ZSgpLFxuICAgICAgICAgICAgY29uc2lzdGVuY3k6ICdjb21taXR0ZWQnLFxuICAgICAgICAgICAgZG9jTWV0YU11dGF0aW9uczogW10sXG4gICAgICAgICAgICBiYXRjaDoge1xuICAgICAgICAgICAgICAgIGlkOiBiYXRjaC5pZCxcbiAgICAgICAgICAgICAgICB0ZXJtaW5hdGVkOiB0cnVlLFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4geyB9O1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGFsbCB0aGUgZG9jcyBpbiBhIGRhdGFzdG9yZS4gIE9ubHkgZG8gdGhpcyBmb3IgdGVzdGluZyBhbmQgZm9yXG4gICAgICogdmVyeSBpbXBvcnRhbnQgdXNlIGNhc2VzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgcHVyZ2UoZGF0YXN0b3JlOiBEYXRhc3RvcmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdXJnZUxpc3RlbmVyOiBQdXJnZUxpc3RlbmVyID0gTlVMTF9GVU5DVElPTikge1xuXG4gICAgICAgIGxvZy5kZWJ1ZyhcIkdldHRpbmcgZG9jIG1ldGEgcmVmcy4uLlwiKTtcbiAgICAgICAgY29uc3QgZG9jTWV0YUZpbGVzID0gYXdhaXQgZGF0YXN0b3JlLmdldERvY01ldGFSZWZzKCk7XG4gICAgICAgIGxvZy5kZWJ1ZyhcIkdldHRpbmcgZG9jIG1ldGEgcmVmcy4uLmRvbmVcIik7XG5cbiAgICAgICAgbGV0IGNvbXBsZXRlZDogbnVtYmVyID0gMDtcbiAgICAgICAgY29uc3QgdG90YWw6IG51bWJlciA9IGRvY01ldGFGaWxlcy5sZW5ndGg7XG5cbiAgICAgICAgY29uc3Qgd29yazogQXN5bmNGdW5jdGlvbltdID0gW107XG5cbiAgICAgICAgY29uc3QgYXN5bmNXb3JrUXVldWUgPSBuZXcgQXN5bmNXb3JrUXVldWUod29yayk7XG5cbiAgICAgICAgZm9yIChjb25zdCBkb2NNZXRhRmlsZSBvZiBkb2NNZXRhRmlsZXMpIHtcblxuICAgICAgICAgICAgLy8gVE9ETzogd2UncmUgbm90IHB1cmdpbmcgdGhlIGZpbGVzIGFzc29jaWF0ZWQgd2l0aCB0aGUgZG9jcy4uLiB0aGVcbiAgICAgICAgICAgIC8vIHN0YXNoIGZpbGUgaXMgcHVyZ2VkIGFzIHBhcnQgb2YgdGhlIGRlbGV0ZSByaWdodCBub3cgYW5kIEkgY291bGRcbiAgICAgICAgICAgIC8vIHB1dCB0aGUgb3RoZXIgZmlsZXMgdGhlcmUgYXMgd2VsbCBzbyB0aGF0IHdheSB3ZSBhbHdheXMgbWFrZSBzdXJlXG4gICAgICAgICAgICAvLyB0aGVyZSBhcmUgbm8gZGVwZW5kZW5jaWVzIHRhbmdsaW5nXG5cbiAgICAgICAgICAgIC8vIFRPRE86IHVzZSBhIFByb2dyZXNzVHJhY2tlciBoZXJlIGluc3RlYWQgb2YgY29tcHV0aW5nIHRoZSBwcm9ncmVzc1xuICAgICAgICAgICAgLy8gZGlyZWN0bHkgd2hpY2ggaXMgZXJyb3IgcHJvbmUuXG5cbiAgICAgICAgICAgIHdvcmsucHVzaChhc3luYyAoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBsb2cuZGVidWcoYFB1cmdpbmcgZmlsZTogJHtkb2NNZXRhRmlsZS5maW5nZXJwcmludH0gaW4gZGF0YXN0b3JlICR7ZGF0YXN0b3JlLmlkfWApO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGRhdGFzdG9yZS5nZXREb2NNZXRhKGRvY01ldGFGaWxlLmZpbmdlcnByaW50KTtcbiAgICAgICAgICAgICAgICBjb25zdCBkb2NNZXRhID0gRG9jTWV0YXMuZGVzZXJpYWxpemUoZGF0YSEsIGRvY01ldGFGaWxlLmZpbmdlcnByaW50KTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGRvY01ldGFGaWxlUmVmID0gRG9jTWV0YUZpbGVSZWZzLmNyZWF0ZUZyb21Eb2NJbmZvKGRvY01ldGEuZG9jSW5mbyk7XG5cbiAgICAgICAgICAgICAgICBhd2FpdCBkYXRhc3RvcmUuZGVsZXRlKGRvY01ldGFGaWxlUmVmKTtcblxuICAgICAgICAgICAgICAgICsrY29tcGxldGVkO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvZ3Jlc3MgPSBQZXJjZW50YWdlcy5jYWxjdWxhdGUoY29tcGxldGVkLCB0b3RhbCk7XG5cbiAgICAgICAgICAgICAgICBwdXJnZUxpc3RlbmVyKHtjb21wbGV0ZWQsIHRvdGFsLCBwcm9ncmVzc30pO1xuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICAgICAgYXdhaXQgYXN5bmNXb3JrUXVldWUuZXhlY3V0ZSgpO1xuXG4gICAgICAgIGlmICh0b3RhbCA9PT0gMCkge1xuICAgICAgICAgICAgcHVyZ2VMaXN0ZW5lcih7Y29tcGxldGVkLCB0b3RhbCwgcHJvZ3Jlc3M6IDEwMH0pO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb21wYXJlIHR3byBmaWxlc3lzdGVtcyBhbmQgbWFrZSBzdXJlIHRoZXkncmUgY29uc2lzdGVudC5cbiAgICAgKlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgY2hlY2tDb25zaXN0ZW5jeShkYXRhc3RvcmUwOiBEYXRhc3RvcmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFzdG9yZTE6IERhdGFzdG9yZSk6IFByb21pc2U8RGF0YXN0b3JlQ29uc2lzdGVuY3k+IHtcblxuICAgICAgICAvLyBnZXQgdGhlIGRvY01ldGFzIGluIGJvdGgsIHRoZW4gY29tcGFyZSB0aGVtLi4uXG5cbiAgICAgICAgY29uc3QgbWFuaWZlc3QwID0gYXdhaXQgdGhpcy50b0RvY0luZm9NYW5pZmVzdChkYXRhc3RvcmUwKTtcbiAgICAgICAgY29uc3QgbWFuaWZlc3QxID0gYXdhaXQgdGhpcy50b0RvY0luZm9NYW5pZmVzdChkYXRhc3RvcmUxKTtcblxuICAgICAgICBjb25zdCBjb25zaXN0ZW50ID0gZGVlcEVxdWFsKG1hbmlmZXN0MCwgbWFuaWZlc3QxKTtcblxuICAgICAgICByZXR1cm4ge2NvbnNpc3RlbnQsIG1hbmlmZXN0MCwgbWFuaWZlc3QxfTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgdG9Eb2NJbmZvTWFuaWZlc3QoZGF0YXN0b3JlOiBEYXRhc3RvcmUpOiBQcm9taXNlPFJlYWRvbmx5QXJyYXk8SURvY0luZm8+PiB7XG5cbiAgICAgICAgY29uc3QgcGVyc2lzdGVuY2VMYXllciA9IG5ldyBEZWZhdWx0UGVyc2lzdGVuY2VMYXllcihkYXRhc3RvcmUpO1xuXG4gICAgICAgIGNvbnN0IGRvY01ldGFGaWxlcyA9XG4gICAgICAgICAgICAoYXdhaXQgZGF0YXN0b3JlLmdldERvY01ldGFSZWZzKCkpXG4gICAgICAgICAgICAgICAgLnNvcnQoKGQwLCBkMSkgPT4gZDAuZmluZ2VycHJpbnQubG9jYWxlQ29tcGFyZShkMS5maW5nZXJwcmludCkpO1xuXG4gICAgICAgIGNvbnN0IHJlc3VsdDogSURvY0luZm9bXSA9IFtdO1xuXG4gICAgICAgIGZvciAoY29uc3QgZG9jTWV0YUZpbGUgb2YgZG9jTWV0YUZpbGVzKSB7XG4gICAgICAgICAgICBjb25zdCBkb2NNZXRhID0gYXdhaXQgcGVyc2lzdGVuY2VMYXllci5nZXREb2NNZXRhKGRvY01ldGFGaWxlLmZpbmdlcnByaW50KTtcbiAgICAgICAgICAgIFByZWNvbmRpdGlvbnMuYXNzZXJ0UHJlc2VudChkb2NNZXRhLCBcInRvRG9jSW5mb01hbmlmZXN0IGNvdWxkIG5vdCBmaW5kIGRvY01ldGEgZm9yIFwiICsgZG9jTWV0YUZpbGUuZmluZ2VycHJpbnQpO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goZG9jTWV0YSEuZG9jSW5mbyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXNzZXJ0IHRoYXQgdGhlIHNwZWNpZmllZCBuZXR3b3JrIGxheWVyIGlzIHN1cHBvcnRlZCBieSB0aGlzIGRhdGFzdG9yZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGFzc2VydE5ldHdvcmtMYXllcihkYXRhc3RvcmU6IERhdGFzdG9yZSwgbmV0d29ya0xheWVyPzogTmV0d29ya0xheWVyKSB7XG5cbiAgICAgICAgaWYgKCEgbmV0d29ya0xheWVyKSB7XG4gICAgICAgICAgICAvLyB3ZSBzdXBwb3J0IHRoaXMgYmVjYXVzZSBpdCdzIG5vdCBzcGVjaWZpZWQuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYXBhYmlsaXRpZXMgPSBkYXRhc3RvcmUuY2FwYWJpbGl0aWVzKCk7XG5cbiAgICAgICAgaWYgKCEgY2FwYWJpbGl0aWVzLm5ldHdvcmtMYXllcnMuaGFzKG5ldHdvcmtMYXllcikpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRGF0YXN0b3JlICcke2RhdGFzdG9yZS5pZH0nIGRvZXMgbm90IHN1cHBvcnQgJHtuZXR3b3JrTGF5ZXJ9IG9ubHkgJHtjYXBhYmlsaXRpZXMubmV0d29ya0xheWVyc31gKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG5cbn1cblxuZXhwb3J0IHR5cGUgRG9jTWV0YUxpc3RlbmVyID0gKGRvY01ldGE6IElEb2NNZXRhKSA9PiB2b2lkO1xuXG5leHBvcnQgaW50ZXJmYWNlIFB1cmdlRXZlbnQge1xuICAgIHJlYWRvbmx5IGNvbXBsZXRlZDogbnVtYmVyO1xuICAgIHJlYWRvbmx5IHRvdGFsOiBudW1iZXI7XG4gICAgcmVhZG9ubHkgcHJvZ3Jlc3M6IG51bWJlcjtcbn1cblxuZXhwb3J0IHR5cGUgUHVyZ2VMaXN0ZW5lciA9IChwdXJnZUV2ZW50OiBQdXJnZUV2ZW50KSA9PiB2b2lkO1xuXG5leHBvcnQgaW50ZXJmYWNlIERhdGFzdG9yZUNvbnNpc3RlbmN5IHtcbiAgICByZWFkb25seSBjb25zaXN0ZW50OiBib29sZWFuO1xuICAgIHJlYWRvbmx5IG1hbmlmZXN0MDogUmVhZG9ubHlBcnJheTxJRG9jSW5mbz47XG4gICAgcmVhZG9ubHkgbWFuaWZlc3QxOiBSZWFkb25seUFycmF5PElEb2NJbmZvPjtcbn1cbiJdfQ==