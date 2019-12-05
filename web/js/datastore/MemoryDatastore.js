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
const Datastore_1 = require("./Datastore");
const Preconditions_1 = require("polar-shared/src/Preconditions");
const Logger_1 = require("polar-shared/src/logger/Logger");
const Files_1 = require("polar-shared/src/util/Files");
const Optional_1 = require("polar-shared/src/util/ts/Optional");
const DatastoreMutation_1 = require("./DatastoreMutation");
const Datastores_1 = require("./Datastores");
const Functions_1 = require("polar-shared/src/util/Functions");
const ISODateTimeStrings_1 = require("polar-shared/src/metadata/ISODateTimeStrings");
const Prefs_1 = require("../util/prefs/Prefs");
const Datastore_2 = require("./Datastore");
const log = Logger_1.Logger.create();
class MemoryDatastore extends Datastore_1.AbstractDatastore {
    constructor() {
        super();
        this.id = 'memory';
        this.docMetas = {};
        this.files = {};
        this.prefs = new Prefs_1.NonPersistentPrefs();
        this.docMetas = {};
        this.created = ISODateTimeStrings_1.ISODateTimeStrings.create();
    }
    init(errorListener = Functions_1.NULL_FUNCTION) {
        return __awaiter(this, void 0, void 0, function* () {
            return {};
        });
    }
    stop() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    contains(fingerprint) {
        return __awaiter(this, void 0, void 0, function* () {
            return fingerprint in this.docMetas;
        });
    }
    delete(docMetaFileRef) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = {
                docMetaFile: {
                    path: `/${docMetaFileRef.fingerprint}.json`,
                    deleted: false
                },
                dataFile: {
                    path: '/' + Optional_1.Optional.of(docMetaFileRef.docFile)
                        .map(current => current.name)
                        .getOrUndefined(),
                    deleted: false
                }
            };
            if (yield this.contains(docMetaFileRef.fingerprint)) {
                result.docMetaFile.deleted = true;
                result.dataFile.deleted = true;
            }
            return result;
        });
    }
    writeFile(backend, ref, data, opts = new Datastore_2.DefaultWriteFileOpts()) {
        return __awaiter(this, void 0, void 0, function* () {
            const key = MemoryDatastore.toFileRefKey(backend, ref);
            let buff;
            if (typeof data === 'string') {
                buff = Buffer.from(data);
            }
            else if (data instanceof Buffer) {
                buff = data;
            }
            else {
                buff = yield Files_1.Files.readFileAsync(data.path);
            }
            const meta = opts.meta || {};
            this.files[key] = { buffer: buff, meta };
            return { backend, ref, url: 'NOT_IMPLEMENTED:none' };
        });
    }
    getFile(backend, ref) {
        const key = MemoryDatastore.toFileRefKey(backend, ref);
        if (!key) {
            throw new Error(`No file for ${backend} at ${ref.name}`);
        }
        const fileData = this.files[key];
        return { backend, ref, url: 'NOT_IMPLEMENTED:none' };
    }
    containsFile(backend, ref) {
        return __awaiter(this, void 0, void 0, function* () {
            const key = MemoryDatastore.toFileRefKey(backend, ref);
            return Preconditions_1.isPresent(this.files[key]);
        });
    }
    deleteFile(backend, ref) {
        return __awaiter(this, void 0, void 0, function* () {
            const key = MemoryDatastore.toFileRefKey(backend, ref);
            delete this.files[key];
        });
    }
    getDocMeta(fingerprint) {
        return __awaiter(this, void 0, void 0, function* () {
            const nrDocs = Object.keys(this.docMetas).length;
            log.info(`Fetching document from datastore with fingerprint ${fingerprint} of ${nrDocs} docs.`);
            return this.docMetas[fingerprint];
        });
    }
    write(fingerprint, data, docInfo, opts = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const datastoreMutation = opts.datastoreMutation || new DatastoreMutation_1.DefaultDatastoreMutation();
            Preconditions_1.Preconditions.assertTypeOf(data, "string", "data");
            this.docMetas[fingerprint] = data;
            datastoreMutation.written.resolve(true);
            datastoreMutation.committed.resolve(true);
        });
    }
    getDocMetaRefs() {
        return __awaiter(this, void 0, void 0, function* () {
            return Object.keys(this.docMetas)
                .map(fingerprint => ({ fingerprint }));
        });
    }
    snapshot(listener) {
        return __awaiter(this, void 0, void 0, function* () {
            return Datastores_1.Datastores.createCommittedSnapshot(this, listener);
        });
    }
    addDocMetaSnapshotEventListener(docMetaSnapshotEventListener) {
    }
    overview() {
        return __awaiter(this, void 0, void 0, function* () {
            const docMetaRefs = yield this.getDocMetaRefs();
            return { nrDocs: docMetaRefs.length, created: this.created };
        });
    }
    capabilities() {
        const networkLayers = new Set(['local']);
        return {
            networkLayers,
            permission: { mode: 'rw' }
        };
    }
    static toFileRefKey(backend, fileRef) {
        return `${backend}:${fileRef.name}`;
    }
    getPrefs() {
        return {
            get() {
                return {
                    prefs: this.prefs,
                    unsubscribe: Functions_1.NULL_FUNCTION
                };
            }
        };
    }
}
exports.MemoryDatastore = MemoryDatastore;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVtb3J5RGF0YXN0b3JlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiTWVtb3J5RGF0YXN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBR0EsMkNBV3FCO0FBQ3JCLGtFQUF3RTtBQUV4RSwyREFBc0Q7QUFDdEQsdURBQThEO0FBRzlELGdFQUEyRDtBQUUzRCwyREFBZ0Y7QUFDaEYsNkNBQXdDO0FBQ3hDLCtEQUE4RDtBQUU5RCxxRkFBbUc7QUFDbkcsK0NBQXdFO0FBR3hFLDJDQUFpRDtBQU9qRCxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFNUIsTUFBYSxlQUFnQixTQUFRLDZCQUFpQjtJQVlsRDtRQUNJLEtBQUssRUFBRSxDQUFDO1FBWEksT0FBRSxHQUFHLFFBQVEsQ0FBQztRQUlYLGFBQVEsR0FBb0MsRUFBRSxDQUFDO1FBRS9DLFVBQUssR0FBOEIsRUFBRSxDQUFDO1FBRXhDLFVBQUssR0FBRyxJQUFJLDBCQUFrQixFQUFFLENBQUM7UUFLOUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyx1Q0FBa0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUUvQyxDQUFDO0lBR1ksSUFBSSxDQUFDLGdCQUErQix5QkFBYTs7WUFDMUQsT0FBTyxFQUFFLENBQUM7UUFDZCxDQUFDO0tBQUE7SUFFWSxJQUFJOztRQUVqQixDQUFDO0tBQUE7SUFFWSxRQUFRLENBQUMsV0FBbUI7O1lBQ3JDLE9BQU8sV0FBVyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDeEMsQ0FBQztLQUFBO0lBRVksTUFBTSxDQUFDLGNBQThCOztZQUU5QyxNQUFNLE1BQU0sR0FBUTtnQkFDaEIsV0FBVyxFQUFFO29CQUNULElBQUksRUFBRSxJQUFJLGNBQWMsQ0FBQyxXQUFXLE9BQU87b0JBQzNDLE9BQU8sRUFBRSxLQUFLO2lCQUNqQjtnQkFDRCxRQUFRLEVBQUU7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QUcsSUFBSSxHQUFHLENBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBRXZELE9BQU87WUFDSCxhQUFhO1lBQ2IsVUFBVSxFQUFFLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBQztTQUMzQixDQUFDO0lBRU4sQ0FBQztJQUVPLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBZ0IsRUFBRSxPQUFnQjtRQUMxRCxPQUFPLEdBQUcsT0FBTyxJQUFJLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBRU0sUUFBUTtRQUVYLE9BQU87WUFFSCxHQUFHO2dCQUNDLE9BQU87b0JBQ0gsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO29CQUNqQixXQUFXLEVBQUUseUJBQWE7aUJBQzdCLENBQUM7WUFDTixDQUFDO1NBRUosQ0FBQztJQUVOLENBQUM7Q0FFSjtBQS9MRCwwQ0ErTEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIERhdGFzdG9yZSBqdXN0IGluIG1lbW9yeSB3aXRoIG5vIG9uIGRpc2sgcGVyc2lzdGVuY2UuXG4gKi9cbmltcG9ydCB7XG4gICAgQWJzdHJhY3REYXRhc3RvcmUsXG4gICAgRGF0YXN0b3JlLFxuICAgIERlbGV0ZVJlc3VsdCxcbiAgICBEb2NNZXRhU25hcHNob3RFdmVudExpc3RlbmVyLFxuICAgIEVycm9yTGlzdGVuZXIsXG4gICAgRmlsZU1ldGEsXG4gICAgU25hcHNob3RSZXN1bHQsXG4gICAgRGF0YXN0b3JlT3ZlcnZpZXcsXG4gICAgUHJlZnNQcm92aWRlcixcbiAgICBEYXRhc3RvcmVQcmVmc1xufSBmcm9tICcuL0RhdGFzdG9yZSc7XG5pbXBvcnQge2lzUHJlc2VudCwgUHJlY29uZGl0aW9uc30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9QcmVjb25kaXRpb25zJztcbmltcG9ydCB7RG9jTWV0YUZpbGVSZWYsIERvY01ldGFSZWZ9IGZyb20gJy4vRG9jTWV0YVJlZic7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7RmlsZUhhbmRsZSwgRmlsZXN9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC9GaWxlcyc7XG5pbXBvcnQge0JhY2tlbmR9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvZGF0YXN0b3JlL0JhY2tlbmQnO1xuaW1wb3J0IHtEb2NGaWxlTWV0YX0gZnJvbSAnLi9Eb2NGaWxlTWV0YSc7XG5pbXBvcnQge09wdGlvbmFsfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvdHMvT3B0aW9uYWwnO1xuaW1wb3J0IHtEb2NJbmZvfSBmcm9tICcuLi9tZXRhZGF0YS9Eb2NJbmZvJztcbmltcG9ydCB7RGF0YXN0b3JlTXV0YXRpb24sIERlZmF1bHREYXRhc3RvcmVNdXRhdGlvbn0gZnJvbSAnLi9EYXRhc3RvcmVNdXRhdGlvbic7XG5pbXBvcnQge0RhdGFzdG9yZXN9IGZyb20gJy4vRGF0YXN0b3Jlcyc7XG5pbXBvcnQge05VTExfRlVOQ1RJT059IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC9GdW5jdGlvbnMnO1xuaW1wb3J0IHtEaXNrSW5pdFJlc3VsdH0gZnJvbSAnLi9EaXNrRGF0YXN0b3JlJztcbmltcG9ydCB7SVNPRGF0ZVRpbWVTdHJpbmcsIElTT0RhdGVUaW1lU3RyaW5nc30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9tZXRhZGF0YS9JU09EYXRlVGltZVN0cmluZ3MnO1xuaW1wb3J0IHtEaWN0aW9uYXJ5UHJlZnMsIE5vblBlcnNpc3RlbnRQcmVmc30gZnJvbSAnLi4vdXRpbC9wcmVmcy9QcmVmcyc7XG5pbXBvcnQge1Byb3ZpZGVyc30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL1Byb3ZpZGVycyc7XG5pbXBvcnQge1dyaXRlRmlsZU9wdHN9IGZyb20gJy4vRGF0YXN0b3JlJztcbmltcG9ydCB7RGVmYXVsdFdyaXRlRmlsZU9wdHN9IGZyb20gJy4vRGF0YXN0b3JlJztcbmltcG9ydCB7RGF0YXN0b3JlQ2FwYWJpbGl0aWVzfSBmcm9tICcuL0RhdGFzdG9yZSc7XG5pbXBvcnQge05ldHdvcmtMYXllcn0gZnJvbSAnLi9EYXRhc3RvcmUnO1xuaW1wb3J0IHtXcml0ZU9wdHN9IGZyb20gJy4vRGF0YXN0b3JlJztcbmltcG9ydCB7SURvY0luZm99IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL21ldGFkYXRhL0lEb2NJbmZvXCI7XG5pbXBvcnQge0ZpbGVSZWZ9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL2RhdGFzdG9yZS9GaWxlUmVmXCI7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuZXhwb3J0IGNsYXNzIE1lbW9yeURhdGFzdG9yZSBleHRlbmRzIEFic3RyYWN0RGF0YXN0b3JlIGltcGxlbWVudHMgRGF0YXN0b3JlIHtcblxuICAgIHB1YmxpYyByZWFkb25seSBpZCA9ICdtZW1vcnknO1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBjcmVhdGVkOiBJU09EYXRlVGltZVN0cmluZztcblxuICAgIHByb3RlY3RlZCByZWFkb25seSBkb2NNZXRhczoge1tmaW5nZXJwcmludDogc3RyaW5nXTogc3RyaW5nfSA9IHt9O1xuXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IGZpbGVzOiB7W2tleTogc3RyaW5nXTogRmlsZURhdGF9ID0ge307XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IHByZWZzID0gbmV3IE5vblBlcnNpc3RlbnRQcmVmcygpO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5kb2NNZXRhcyA9IHt9O1xuICAgICAgICB0aGlzLmNyZWF0ZWQgPSBJU09EYXRlVGltZVN0cmluZ3MuY3JlYXRlKCk7XG5cbiAgICB9XG5cbiAgICAvLyBub2luc3BlY3Rpb24gVHNMaW50XG4gICAgcHVibGljIGFzeW5jIGluaXQoZXJyb3JMaXN0ZW5lcjogRXJyb3JMaXN0ZW5lciA9IE5VTExfRlVOQ1RJT04pOiBQcm9taXNlPERpc2tJbml0UmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgc3RvcCgpIHtcbiAgICAgICAgLy8gbm9vcFxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBjb250YWlucyhmaW5nZXJwcmludDogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybiBmaW5nZXJwcmludCBpbiB0aGlzLmRvY01ldGFzO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBkZWxldGUoZG9jTWV0YUZpbGVSZWY6IERvY01ldGFGaWxlUmVmKTogUHJvbWlzZTxSZWFkb25seTxEZWxldGVSZXN1bHQ+PiB7XG5cbiAgICAgICAgY29uc3QgcmVzdWx0OiBhbnkgPSB7XG4gICAgICAgICAgICBkb2NNZXRhRmlsZToge1xuICAgICAgICAgICAgICAgIHBhdGg6IGAvJHtkb2NNZXRhRmlsZVJlZi5maW5nZXJwcmludH0uanNvbmAsXG4gICAgICAgICAgICAgICAgZGVsZXRlZDogZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkYXRhRmlsZToge1xuICAgICAgICAgICAgICAgIHBhdGg6ICcvJyArIE9wdGlvbmFsLm9mKGRvY01ldGFGaWxlUmVmLmRvY0ZpbGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoY3VycmVudCA9PiBjdXJyZW50Lm5hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5nZXRPclVuZGVmaW5lZCgpLFxuICAgICAgICAgICAgICAgIGRlbGV0ZWQ6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGF3YWl0IHRoaXMuY29udGFpbnMoZG9jTWV0YUZpbGVSZWYuZmluZ2VycHJpbnQpKSB7XG4gICAgICAgICAgICByZXN1bHQuZG9jTWV0YUZpbGUuZGVsZXRlZCA9IHRydWU7XG4gICAgICAgICAgICByZXN1bHQuZGF0YUZpbGUuZGVsZXRlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuXG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIHdyaXRlRmlsZShiYWNrZW5kOiBCYWNrZW5kLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmOiBGaWxlUmVmLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogRmlsZUhhbmRsZSB8IEJ1ZmZlciB8IHN0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdHM6IFdyaXRlRmlsZU9wdHMgPSBuZXcgRGVmYXVsdFdyaXRlRmlsZU9wdHMoKSk6IFByb21pc2U8RG9jRmlsZU1ldGE+IHtcblxuICAgICAgICBjb25zdCBrZXkgPSBNZW1vcnlEYXRhc3RvcmUudG9GaWxlUmVmS2V5KGJhY2tlbmQsIHJlZik7XG5cbiAgICAgICAgbGV0IGJ1ZmY6IEJ1ZmZlciB8IHVuZGVmaW5lZDtcblxuICAgICAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBidWZmID0gQnVmZmVyLmZyb20oZGF0YSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZGF0YSBpbnN0YW5jZW9mIEJ1ZmZlcikge1xuICAgICAgICAgICAgYnVmZiA9IGRhdGE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBidWZmID0gYXdhaXQgRmlsZXMucmVhZEZpbGVBc3luYyhkYXRhLnBhdGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbWV0YSA9IG9wdHMubWV0YSB8fCB7fTtcblxuICAgICAgICB0aGlzLmZpbGVzW2tleV0gPSB7YnVmZmVyOiBidWZmISwgbWV0YX07XG5cbiAgICAgICAgcmV0dXJuIHtiYWNrZW5kLCByZWYsIHVybDogJ05PVF9JTVBMRU1FTlRFRDpub25lJ307XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0RmlsZShiYWNrZW5kOiBCYWNrZW5kLCByZWY6IEZpbGVSZWYpOiBEb2NGaWxlTWV0YSB7XG5cbiAgICAgICAgY29uc3Qga2V5ID0gTWVtb3J5RGF0YXN0b3JlLnRvRmlsZVJlZktleShiYWNrZW5kLCByZWYpO1xuXG4gICAgICAgIGlmICgha2V5KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vIGZpbGUgZm9yICR7YmFja2VuZH0gYXQgJHtyZWYubmFtZX1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGZpbGVEYXRhID0gdGhpcy5maWxlc1trZXldO1xuXG4gICAgICAgIHJldHVybiB7YmFja2VuZCwgcmVmLCB1cmw6ICdOT1RfSU1QTEVNRU5URUQ6bm9uZSd9O1xuXG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGNvbnRhaW5zRmlsZShiYWNrZW5kOiBCYWNrZW5kLCByZWY6IEZpbGVSZWYpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgY29uc3Qga2V5ID0gTWVtb3J5RGF0YXN0b3JlLnRvRmlsZVJlZktleShiYWNrZW5kLCByZWYpO1xuICAgICAgICByZXR1cm4gaXNQcmVzZW50KHRoaXMuZmlsZXNba2V5XSk7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGRlbGV0ZUZpbGUoYmFja2VuZDogQmFja2VuZCwgcmVmOiBGaWxlUmVmKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGNvbnN0IGtleSA9IE1lbW9yeURhdGFzdG9yZS50b0ZpbGVSZWZLZXkoYmFja2VuZCwgcmVmKTtcbiAgICAgICAgZGVsZXRlIHRoaXMuZmlsZXNba2V5XTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKi9cbiAgICBwdWJsaWMgYXN5bmMgZ2V0RG9jTWV0YShmaW5nZXJwcmludDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiB7XG5cbiAgICAgICAgY29uc3QgbnJEb2NzID0gT2JqZWN0LmtleXModGhpcy5kb2NNZXRhcykubGVuZ3RoO1xuXG4gICAgICAgIGxvZy5pbmZvKGBGZXRjaGluZyBkb2N1bWVudCBmcm9tIGRhdGFzdG9yZSB3aXRoIGZpbmdlcnByaW50ICR7ZmluZ2VycHJpbnR9IG9mICR7bnJEb2NzfSBkb2NzLmApO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmRvY01ldGFzW2ZpbmdlcnByaW50XTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXcml0ZSB0aGUgZGF0YXN0b3JlIHRvIGRpc2suXG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIHdyaXRlKGZpbmdlcnByaW50OiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHN0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgZG9jSW5mbzogSURvY0luZm8sXG4gICAgICAgICAgICAgICAgICAgICAgIG9wdHM6IFdyaXRlT3B0cyA9IHt9KTogUHJvbWlzZTx2b2lkPiB7XG5cbiAgICAgICAgY29uc3QgZGF0YXN0b3JlTXV0YXRpb24gPSBvcHRzLmRhdGFzdG9yZU11dGF0aW9uIHx8IG5ldyBEZWZhdWx0RGF0YXN0b3JlTXV0YXRpb24oKTtcblxuICAgICAgICBQcmVjb25kaXRpb25zLmFzc2VydFR5cGVPZihkYXRhLCBcInN0cmluZ1wiLCBcImRhdGFcIik7XG5cbiAgICAgICAgdGhpcy5kb2NNZXRhc1tmaW5nZXJwcmludF0gPSBkYXRhO1xuXG4gICAgICAgIGRhdGFzdG9yZU11dGF0aW9uLndyaXR0ZW4ucmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgZGF0YXN0b3JlTXV0YXRpb24uY29tbWl0dGVkLnJlc29sdmUodHJ1ZSk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgZ2V0RG9jTWV0YVJlZnMoKTogUHJvbWlzZTxEb2NNZXRhUmVmW10+IHtcblxuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5kb2NNZXRhcylcbiAgICAgICAgICAgIC5tYXAoZmluZ2VycHJpbnQgPT4gPERvY01ldGFSZWY+IHtmaW5nZXJwcmludH0pO1xuXG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIHNuYXBzaG90KGxpc3RlbmVyOiBEb2NNZXRhU25hcHNob3RFdmVudExpc3RlbmVyKTogUHJvbWlzZTxTbmFwc2hvdFJlc3VsdD4ge1xuXG4gICAgICAgIHJldHVybiBEYXRhc3RvcmVzLmNyZWF0ZUNvbW1pdHRlZFNuYXBzaG90KHRoaXMsIGxpc3RlbmVyKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBhZGREb2NNZXRhU25hcHNob3RFdmVudExpc3RlbmVyKGRvY01ldGFTbmFwc2hvdEV2ZW50TGlzdGVuZXI6IERvY01ldGFTbmFwc2hvdEV2ZW50TGlzdGVuZXIpOiB2b2lkIHtcbiAgICAgICAgLy8gbm9vcCBub3dcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgb3ZlcnZpZXcoKTogUHJvbWlzZTxEYXRhc3RvcmVPdmVydmlldz4ge1xuXG4gICAgICAgIGNvbnN0IGRvY01ldGFSZWZzID0gYXdhaXQgdGhpcy5nZXREb2NNZXRhUmVmcygpO1xuXG4gICAgICAgIHJldHVybiB7bnJEb2NzOiBkb2NNZXRhUmVmcy5sZW5ndGgsIGNyZWF0ZWQ6IHRoaXMuY3JlYXRlZH07XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgY2FwYWJpbGl0aWVzKCk6IERhdGFzdG9yZUNhcGFiaWxpdGllcyB7XG5cbiAgICAgICAgY29uc3QgbmV0d29ya0xheWVycyA9IG5ldyBTZXQ8TmV0d29ya0xheWVyPihbJ2xvY2FsJ10pO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZXR3b3JrTGF5ZXJzLFxuICAgICAgICAgICAgcGVybWlzc2lvbjoge21vZGU6ICdydyd9XG4gICAgICAgIH07XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyB0b0ZpbGVSZWZLZXkoYmFja2VuZDogQmFja2VuZCwgZmlsZVJlZjogRmlsZVJlZikge1xuICAgICAgICByZXR1cm4gYCR7YmFja2VuZH06JHtmaWxlUmVmLm5hbWV9YDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0UHJlZnMoKTogUHJlZnNQcm92aWRlciB7XG5cbiAgICAgICAgcmV0dXJuIHtcblxuICAgICAgICAgICAgZ2V0KCk6IERhdGFzdG9yZVByZWZzIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBwcmVmczogdGhpcy5wcmVmcyxcbiAgICAgICAgICAgICAgICAgICAgdW5zdWJzY3JpYmU6IE5VTExfRlVOQ1RJT05cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH07XG5cbiAgICB9XG5cbn1cblxuaW50ZXJmYWNlIEZpbGVEYXRhIHtcbiAgICBidWZmZXI6IEJ1ZmZlcjtcbiAgICBtZXRhOiBGaWxlTWV0YTtcbn1cbiJdfQ==