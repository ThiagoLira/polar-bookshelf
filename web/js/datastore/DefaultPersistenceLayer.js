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
const DocMeta_1 = require("../metadata/DocMeta");
const DocMetas_1 = require("../metadata/DocMetas");
const Preconditions_1 = require("polar-shared/src/Preconditions");
const Logger_1 = require("polar-shared/src/logger/Logger");
const Dictionaries_1 = require("polar-shared/src/util/Dictionaries");
const ISODateTimeStrings_1 = require("polar-shared/src/metadata/ISODateTimeStrings");
const Reducers_1 = require("polar-shared/src/util/Reducers");
const DatastoreMutation_1 = require("./DatastoreMutation");
const DatastoreMutations_1 = require("./DatastoreMutations");
const UUIDs_1 = require("../metadata/UUIDs");
const Functions_1 = require("polar-shared/src/util/Functions");
const log = Logger_1.Logger.create();
class DefaultPersistenceLayer {
    constructor(datastore) {
        this.id = 'default';
        this.datastore = datastore;
        this.datastoreMutations = DatastoreMutations_1.DatastoreMutations.create('written');
    }
    init(errorListener = Functions_1.NULL_FUNCTION, opts) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.datastore.init(errorListener, opts);
        });
    }
    stop() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.datastore.stop();
        });
    }
    contains(fingerprint) {
        return this.datastore.contains(fingerprint);
    }
    delete(docMetaFileRef, datastoreMutation = new DatastoreMutation_1.DefaultDatastoreMutation()) {
        return this.datastore.delete(docMetaFileRef, datastoreMutation);
    }
    getDocMeta(fingerprint) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.datastore.getDocMeta(fingerprint);
            if (!Preconditions_1.isPresent(data)) {
                return undefined;
            }
            if (!(typeof data === "string")) {
                throw new Error("Expected string and received: " + typeof data);
            }
            const docMeta = DocMetas_1.DocMetas.deserialize(data, fingerprint);
            return docMeta;
        });
    }
    writeDocMeta(docMeta, datastoreMutation) {
        return __awaiter(this, void 0, void 0, function* () {
            Preconditions_1.Preconditions.assertPresent(docMeta, "No docMeta");
            Preconditions_1.Preconditions.assertPresent(docMeta.docInfo, "No docInfo on docMeta");
            Preconditions_1.Preconditions.assertPresent(docMeta.docInfo.fingerprint, "No fingerprint on docInfo");
            return this.write(docMeta.docInfo.fingerprint, docMeta, { datastoreMutation });
        });
    }
    write(fingerprint, docMeta, opts = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const datastoreMutation = opts.datastoreMutation || new DatastoreMutation_1.DefaultDatastoreMutation();
            Preconditions_1.Preconditions.assertPresent(fingerprint, "fingerprint");
            Preconditions_1.Preconditions.assertPresent(docMeta, "docMeta");
            if (!(docMeta instanceof DocMeta_1.DocMeta)) {
                throw new Error("Can not sync anything other than DocMeta.");
            }
            docMeta = Dictionaries_1.Dictionaries.copyOf(docMeta);
            docMeta.docInfo.lastUpdated = ISODateTimeStrings_1.ISODateTimeStrings.create();
            docMeta.docInfo.nrComments = Object.values(docMeta.pageMetas)
                .map(current => Dictionaries_1.Dictionaries.countOf(current.comments))
                .reduce(Reducers_1.Reducers.SUM, 0);
            docMeta.docInfo.nrNotes = Object.values(docMeta.pageMetas)
                .map(current => Dictionaries_1.Dictionaries.countOf(current.notes))
                .reduce(Reducers_1.Reducers.SUM, 0);
            docMeta.docInfo.nrFlashcards = Object.values(docMeta.pageMetas)
                .map(current => Dictionaries_1.Dictionaries.countOf(current.flashcards))
                .reduce(Reducers_1.Reducers.SUM, 0);
            docMeta.docInfo.nrTextHighlights = Object.values(docMeta.pageMetas)
                .map(current => Dictionaries_1.Dictionaries.countOf(current.textHighlights))
                .reduce(Reducers_1.Reducers.SUM, 0);
            docMeta.docInfo.nrAreaHighlights = Object.values(docMeta.pageMetas)
                .map(current => Dictionaries_1.Dictionaries.countOf(current.areaHighlights))
                .reduce(Reducers_1.Reducers.SUM, 0);
            docMeta.docInfo.nrAnnotations =
                docMeta.docInfo.nrComments +
                    docMeta.docInfo.nrNotes +
                    docMeta.docInfo.nrFlashcards +
                    docMeta.docInfo.nrTextHighlights +
                    docMeta.docInfo.nrAreaHighlights;
            if (docMeta.docInfo.added === undefined) {
                docMeta.docInfo.added = ISODateTimeStrings_1.ISODateTimeStrings.create();
            }
            docMeta.docInfo.uuid = UUIDs_1.UUIDs.create();
            log.info(`Sync of docMeta with fingerprint: ${fingerprint} and UUID: ` + docMeta.docInfo.uuid);
            const data = DocMetas_1.DocMetas.serialize(docMeta, "");
            const docInfo = Object.assign({}, docMeta.docInfo);
            const syncMutation = new DatastoreMutation_1.DefaultDatastoreMutation();
            DatastoreMutations_1.DatastoreMutations.pipe(syncMutation, datastoreMutation, () => docInfo);
            const writeOpts = Object.assign(Object.assign({}, opts), { datastoreMutation: syncMutation });
            yield this.datastore.write(fingerprint, data, docInfo, writeOpts);
            return docInfo;
        });
    }
    synchronizeDocs(...docMetaRefs) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.datastore.synchronizeDocs(...docMetaRefs);
        });
    }
    getDocMetaRefs() {
        return this.datastore.getDocMetaRefs();
    }
    snapshot(listener, errorListener = Functions_1.NULL_FUNCTION) {
        return this.datastore.snapshot(listener, errorListener);
    }
    createBackup() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.datastore.createBackup();
        });
    }
    writeFile(backend, ref, data, opts) {
        return this.datastore.writeFile(backend, ref, data, opts);
    }
    containsFile(backend, ref) {
        return this.datastore.containsFile(backend, ref);
    }
    getFile(backend, ref, opts) {
        return this.datastore.getFile(backend, ref, opts);
    }
    deleteFile(backend, ref) {
        return this.datastore.deleteFile(backend, ref);
    }
    addDocMetaSnapshotEventListener(docMetaSnapshotEventListener) {
        this.datastore.addDocMetaSnapshotEventListener(docMetaSnapshotEventListener);
    }
    overview() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.datastore.overview();
        });
    }
    capabilities() {
        return this.datastore.capabilities();
    }
    deactivate() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.datastore.deactivate();
        });
    }
}
exports.DefaultPersistenceLayer = DefaultPersistenceLayer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVmYXVsdFBlcnNpc3RlbmNlTGF5ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJEZWZhdWx0UGVyc2lzdGVuY2VMYXllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQU1BLGlEQUE0QztBQUM1QyxtREFBOEM7QUFDOUMsa0VBQXdFO0FBQ3hFLDJEQUFzRDtBQUN0RCxxRUFBZ0U7QUFJaEUscUZBQWdGO0FBR2hGLDZEQUF3RDtBQUV4RCwyREFBZ0Y7QUFDaEYsNkRBQXdEO0FBQ3hELDZDQUF3QztBQUN4QywrREFBOEQ7QUFLOUQsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBUTVCLE1BQWEsdUJBQXVCO0lBUWhDLFlBQVksU0FBb0I7UUFOaEIsT0FBRSxHQUFHLFNBQVMsQ0FBQztRQU8zQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsdUNBQWtCLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFWSxJQUFJLENBQUMsZ0JBQStCLHlCQUFhLEVBQUUsSUFBd0I7O1lBQ3BGLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ25ELENBQUM7S0FBQTtJQUVZLElBQUk7O1lBQ2IsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2hDLENBQUM7S0FBQTtJQUVNLFFBQVEsQ0FBQyxXQUFtQjtRQUMvQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFTSxNQUFNLENBQUMsY0FBOEIsRUFDOUIsb0JBQWdELElBQUksNENBQXdCLEVBQUU7UUFFeEYsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsaUJBQWlCLENBQUMsQ0FB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LEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRU0sWUFBWSxDQUFDLE9BQWdCLEVBQUUsR0FBWTtRQUM5QyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRU0sT0FBTyxDQUFDLE9BQWdCLEVBQUUsR0FBWSxFQUFFLElBQWtCO1FBQzdELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRU0sVUFBVSxDQUFDLE9BQWdCLEVBQUUsR0FBWTtRQUM1QyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRU0sK0JBQStCLENBQUMsNEJBQTBEO1FBQzdGLElBQUksQ0FBQyxTQUFTLENBQUMsK0JBQStCLENBQUMsNEJBQTRCLENBQUMsQ0FBQztJQUNqRixDQUFDO0lBRVksUUFBUTs7WUFDakIsT0FBTyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDM0MsQ0FBQztLQUFBO0lBRU0sWUFBWTtRQUNmLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0lBRVksVUFBVTs7WUFDbkIsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3RDLENBQUM7S0FBQTtDQUVKO0FBOU1ELDBEQThNQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QmluYXJ5RmlsZURhdGEsIERhdGFzdG9yZSwgRGVsZXRlUmVzdWx0LCBEb2NNZXRhU25hcHNob3RFdmVudExpc3RlbmVyLCBFcnJvckxpc3RlbmVyLCBTbmFwc2hvdFJlc3VsdH0gZnJvbSAnLi9EYXRhc3RvcmUnO1xuaW1wb3J0IHtXcml0ZUZpbGVPcHRzfSBmcm9tICcuL0RhdGFzdG9yZSc7XG5pbXBvcnQge0dldEZpbGVPcHRzfSBmcm9tICcuL0RhdGFzdG9yZSc7XG5pbXBvcnQge0RhdGFzdG9yZUNhcGFiaWxpdGllc30gZnJvbSAnLi9EYXRhc3RvcmUnO1xuaW1wb3J0IHtEYXRhc3RvcmVPdmVydmlld30gZnJvbSAnLi9EYXRhc3RvcmUnO1xuaW1wb3J0IHtEYXRhc3RvcmVJbml0T3B0c30gZnJvbSAnLi9EYXRhc3RvcmUnO1xuaW1wb3J0IHtEb2NNZXRhfSBmcm9tICcuLi9tZXRhZGF0YS9Eb2NNZXRhJztcbmltcG9ydCB7RG9jTWV0YXN9IGZyb20gJy4uL21ldGFkYXRhL0RvY01ldGFzJztcbmltcG9ydCB7aXNQcmVzZW50LCBQcmVjb25kaXRpb25zfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL1ByZWNvbmRpdGlvbnMnO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge0RpY3Rpb25hcmllc30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL0RpY3Rpb25hcmllcyc7XG5pbXBvcnQge0RvY01ldGFGaWxlUmVmLCBEb2NNZXRhUmVmfSBmcm9tICcuL0RvY01ldGFSZWYnO1xuaW1wb3J0IHtQZXJzaXN0ZW5jZUxheWVyfSBmcm9tICcuL1BlcnNpc3RlbmNlTGF5ZXInO1xuaW1wb3J0IHtXcml0ZU9wdHN9IGZyb20gJy4vUGVyc2lzdGVuY2VMYXllcic7XG5pbXBvcnQge0lTT0RhdGVUaW1lU3RyaW5nc30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9tZXRhZGF0YS9JU09EYXRlVGltZVN0cmluZ3MnO1xuaW1wb3J0IHtCYWNrZW5kfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL2RhdGFzdG9yZS9CYWNrZW5kJztcbmltcG9ydCB7RG9jRmlsZU1ldGF9IGZyb20gJy4vRG9jRmlsZU1ldGEnO1xuaW1wb3J0IHtSZWR1Y2Vyc30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL1JlZHVjZXJzJztcbmltcG9ydCB7RG9jSW5mb30gZnJvbSAnLi4vbWV0YWRhdGEvRG9jSW5mbyc7XG5pbXBvcnQge0RhdGFzdG9yZU11dGF0aW9uLCBEZWZhdWx0RGF0YXN0b3JlTXV0YXRpb259IGZyb20gJy4vRGF0YXN0b3JlTXV0YXRpb24nO1xuaW1wb3J0IHtEYXRhc3RvcmVNdXRhdGlvbnN9IGZyb20gJy4vRGF0YXN0b3JlTXV0YXRpb25zJztcbmltcG9ydCB7VVVJRHN9IGZyb20gJy4uL21ldGFkYXRhL1VVSURzJztcbmltcG9ydCB7TlVMTF9GVU5DVElPTn0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL0Z1bmN0aW9ucyc7XG5pbXBvcnQge0lEb2NJbmZvfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy9tZXRhZGF0YS9JRG9jSW5mb1wiO1xuaW1wb3J0IHtJRG9jTWV0YX0gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvbWV0YWRhdGEvSURvY01ldGFcIjtcbmltcG9ydCB7RmlsZVJlZn0gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvZGF0YXN0b3JlL0ZpbGVSZWZcIjtcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG4vKipcbiAqIEZpcnN0IGxheWVyIGJlZm9yZSB0aGUgcmF3IGRhdGFzdG9yZS4gQXQgb25lIHBvaW50IHdlIGFsbG93ZWQgdGhlIGRhdGFzdG9yZVxuICogdG8gcGVyZm9ybSBhbGwgdGhlIGRhdGEgbWFuaXB1bGF0aW9uIC8gc2VyaWFsaXphdGlvbiBidXQgd2UgcmFuIGludG8gcHJvYmxlbXNcbiAqIHdpdGggbm9kZStjaHJvbWUgYmVoYXZpbmcgZGlmZmVyZW50bHkgc28gbm93IHdlIGp1c3QgbWFrZSBub2RlIHdvcmsgd2l0aCByYXdcbiAqIHN0cmluZ3MuXG4gKi9cbmV4cG9ydCBjbGFzcyBEZWZhdWx0UGVyc2lzdGVuY2VMYXllciBpbXBsZW1lbnRzIFBlcnNpc3RlbmNlTGF5ZXIge1xuXG4gICAgcHVibGljIHJlYWRvbmx5IGlkID0gJ2RlZmF1bHQnO1xuXG4gICAgcHVibGljIHJlYWRvbmx5IGRhdGFzdG9yZTogRGF0YXN0b3JlO1xuXG4gICAgcHJpdmF0ZSBkYXRhc3RvcmVNdXRhdGlvbnM6IERhdGFzdG9yZU11dGF0aW9ucztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGFzdG9yZTogRGF0YXN0b3JlKSB7XG4gICAgICAgIHRoaXMuZGF0YXN0b3JlID0gZGF0YXN0b3JlO1xuICAgICAgICB0aGlzLmRhdGFzdG9yZU11dGF0aW9ucyA9IERhdGFzdG9yZU11dGF0aW9ucy5jcmVhdGUoJ3dyaXR0ZW4nKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgaW5pdChlcnJvckxpc3RlbmVyOiBFcnJvckxpc3RlbmVyID0gTlVMTF9GVU5DVElPTiwgb3B0cz86IERhdGFzdG9yZUluaXRPcHRzKSB7XG4gICAgICAgIGF3YWl0IHRoaXMuZGF0YXN0b3JlLmluaXQoZXJyb3JMaXN0ZW5lciwgb3B0cyk7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIHN0b3AoKSB7XG4gICAgICAgIGF3YWl0IHRoaXMuZGF0YXN0b3JlLnN0b3AoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY29udGFpbnMoZmluZ2VycHJpbnQ6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhc3RvcmUuY29udGFpbnMoZmluZ2VycHJpbnQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBkZWxldGUoZG9jTWV0YUZpbGVSZWY6IERvY01ldGFGaWxlUmVmLFxuICAgICAgICAgICAgICAgICAgZGF0YXN0b3JlTXV0YXRpb246IERhdGFzdG9yZU11dGF0aW9uPGJvb2xlYW4+ID0gbmV3IERlZmF1bHREYXRhc3RvcmVNdXRhdGlvbigpKTogUHJvbWlzZTxEZWxldGVSZXN1bHQ+IHtcblxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhc3RvcmUuZGVsZXRlKGRvY01ldGFGaWxlUmVmLCBkYXRhc3RvcmVNdXRhdGlvbik7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIERvY01ldGEgb2JqZWN0IHdlIGN1cnJlbnRseSBpbiB0aGUgZGF0YXN0b3JlIGZvciB0aGlzIGdpdmVuXG4gICAgICogZmluZ2VycHJpbnQgb3IgbnVsbCBpZiBpdCBkb2VzIG5vdCBleGlzdC5cbiAgICAgKi9cbiAgICBwdWJsaWMgYXN5bmMgZ2V0RG9jTWV0YShmaW5nZXJwcmludDogc3RyaW5nKTogUHJvbWlzZTxJRG9jTWV0YSB8IHVuZGVmaW5lZD4ge1xuXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLmRhdGFzdG9yZS5nZXREb2NNZXRhKGZpbmdlcnByaW50KTtcblxuICAgICAgICBpZiAoIWlzUHJlc2VudChkYXRhKSkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghICh0eXBlb2YgZGF0YSA9PT0gXCJzdHJpbmdcIikpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkV4cGVjdGVkIHN0cmluZyBhbmQgcmVjZWl2ZWQ6IFwiICsgdHlwZW9mIGRhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZG9jTWV0YSA9IERvY01ldGFzLmRlc2VyaWFsaXplKGRhdGEsIGZpbmdlcnByaW50KTtcblxuICAgICAgICByZXR1cm4gZG9jTWV0YTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlbmllbmNlIG1ldGhvZCB0byBub3QgcmVxdWlyZSB0aGUgZmluZ2VycHJpbnQuXG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIHdyaXRlRG9jTWV0YShkb2NNZXRhOiBJRG9jTWV0YSwgZGF0YXN0b3JlTXV0YXRpb24/OiBEYXRhc3RvcmVNdXRhdGlvbjxJRG9jSW5mbz4pOiBQcm9taXNlPElEb2NJbmZvPiB7XG5cbiAgICAgICAgUHJlY29uZGl0aW9ucy5hc3NlcnRQcmVzZW50KGRvY01ldGEsIFwiTm8gZG9jTWV0YVwiKTtcbiAgICAgICAgUHJlY29uZGl0aW9ucy5hc3NlcnRQcmVzZW50KGRvY01ldGEuZG9jSW5mbywgXCJObyBkb2NJbmZvIG9uIGRvY01ldGFcIik7XG4gICAgICAgIFByZWNvbmRpdGlvbnMuYXNzZXJ0UHJlc2VudChkb2NNZXRhLmRvY0luZm8uZmluZ2VycHJpbnQsIFwiTm8gZmluZ2VycHJpbnQgb24gZG9jSW5mb1wiKTtcblxuICAgICAgICByZXR1cm4gdGhpcy53cml0ZShkb2NNZXRhLmRvY0luZm8uZmluZ2VycHJpbnQsIGRvY01ldGEsIHtkYXRhc3RvcmVNdXRhdGlvbn0pO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV3JpdGUgdGhlIGRhdGFzdG9yZSB0byBkaXNrLlxuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyB3cml0ZShmaW5nZXJwcmludDogc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICBkb2NNZXRhOiBJRG9jTWV0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgb3B0czogV3JpdGVPcHRzID0ge30pOiBQcm9taXNlPElEb2NJbmZvPiB7XG5cbiAgICAgICAgY29uc3QgZGF0YXN0b3JlTXV0YXRpb24gPSBvcHRzLmRhdGFzdG9yZU11dGF0aW9uIHx8IG5ldyBEZWZhdWx0RGF0YXN0b3JlTXV0YXRpb24oKTtcblxuICAgICAgICBQcmVjb25kaXRpb25zLmFzc2VydFByZXNlbnQoZmluZ2VycHJpbnQsIFwiZmluZ2VycHJpbnRcIik7XG4gICAgICAgIFByZWNvbmRpdGlvbnMuYXNzZXJ0UHJlc2VudChkb2NNZXRhLCBcImRvY01ldGFcIik7XG5cbiAgICAgICAgaWYgKCEgKGRvY01ldGEgaW5zdGFuY2VvZiBEb2NNZXRhKSkge1xuICAgICAgICAgICAgLy8gY2hlY2sgdG8gbWFrZSBzdXJlIG5vdGhpbmcgZnJvbSBKUy1sYW5kIGNhbiBjYWxsIHRoaXNcbiAgICAgICAgICAgIC8vIGluY29ycmVjdGx5LlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2FuIG5vdCBzeW5jIGFueXRoaW5nIG90aGVyIHRoYW4gRG9jTWV0YS5cIik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjcmVhdGUgYSBjb3B5IG9mIGRvY01ldGEgc28gd2UgY2FuIG11dGF0ZSBpdCB3aXRob3V0IHRoZSByaXNrIG9mXG4gICAgICAgIC8vIGZpcmluZyBldmVudCBsaXN0ZW5lcnMgdmlhIHByb3hpZXMgYW5kIHRoZW4gd2UgY2FuIHVwZGF0ZSB0aGVcbiAgICAgICAgLy8gbGFzdFVwZGF0ZWQgdGltZS4gIFdlJ3JlIGFsc28gZ29pbmcgdG8gaGF2ZSB0byBmaXJlIGFuZCBhZHZlcnRpc2VtZW50XG4gICAgICAgIC8vIHRoYXQgaXQncyBiZWVuIHVwZGF0ZWQuXG5cbiAgICAgICAgZG9jTWV0YSA9IERpY3Rpb25hcmllcy5jb3B5T2YoZG9jTWV0YSk7XG5cbiAgICAgICAgLy8gbm93IHVwZGF0ZSB0aGUgbGFzdFVwZGF0ZWQgdGltZXMgYmVmb3JlIHdlIGNvbW1pdCB0byBkaXNrLlxuICAgICAgICBkb2NNZXRhLmRvY0luZm8ubGFzdFVwZGF0ZWQgPSBJU09EYXRlVGltZVN0cmluZ3MuY3JlYXRlKCk7XG5cbiAgICAgICAgZG9jTWV0YS5kb2NJbmZvLm5yQ29tbWVudHMgPSBPYmplY3QudmFsdWVzKGRvY01ldGEucGFnZU1ldGFzKVxuICAgICAgICAgICAgLm1hcChjdXJyZW50ID0+IERpY3Rpb25hcmllcy5jb3VudE9mKGN1cnJlbnQuY29tbWVudHMpKVxuICAgICAgICAgICAgLnJlZHVjZShSZWR1Y2Vycy5TVU0sIDApO1xuXG4gICAgICAgIGRvY01ldGEuZG9jSW5mby5uck5vdGVzID0gT2JqZWN0LnZhbHVlcyhkb2NNZXRhLnBhZ2VNZXRhcylcbiAgICAgICAgICAgIC5tYXAoY3VycmVudCA9PiBEaWN0aW9uYXJpZXMuY291bnRPZihjdXJyZW50Lm5vdGVzKSlcbiAgICAgICAgICAgIC5yZWR1Y2UoUmVkdWNlcnMuU1VNLCAwKTtcblxuICAgICAgICBkb2NNZXRhLmRvY0luZm8ubnJGbGFzaGNhcmRzID0gT2JqZWN0LnZhbHVlcyhkb2NNZXRhLnBhZ2VNZXRhcylcbiAgICAgICAgICAgIC5tYXAoY3VycmVudCA9PiBEaWN0aW9uYXJpZXMuY291bnRPZihjdXJyZW50LmZsYXNoY2FyZHMpKVxuICAgICAgICAgICAgLnJlZHVjZShSZWR1Y2Vycy5TVU0sIDApO1xuXG4gICAgICAgIGRvY01ldGEuZG9jSW5mby5uclRleHRIaWdobGlnaHRzID0gT2JqZWN0LnZhbHVlcyhkb2NNZXRhLnBhZ2VNZXRhcylcbiAgICAgICAgICAgIC5tYXAoY3VycmVudCA9PiBEaWN0aW9uYXJpZXMuY291bnRPZihjdXJyZW50LnRleHRIaWdobGlnaHRzKSlcbiAgICAgICAgICAgIC5yZWR1Y2UoUmVkdWNlcnMuU1VNLCAwKTtcblxuICAgICAgICBkb2NNZXRhLmRvY0luZm8ubnJBcmVhSGlnaGxpZ2h0cyA9IE9iamVjdC52YWx1ZXMoZG9jTWV0YS5wYWdlTWV0YXMpXG4gICAgICAgICAgICAubWFwKGN1cnJlbnQgPT4gRGljdGlvbmFyaWVzLmNvdW50T2YoY3VycmVudC5hcmVhSGlnaGxpZ2h0cykpXG4gICAgICAgICAgICAucmVkdWNlKFJlZHVjZXJzLlNVTSwgMCk7XG5cbiAgICAgICAgZG9jTWV0YS5kb2NJbmZvLm5yQW5ub3RhdGlvbnMgPVxuICAgICAgICAgICAgZG9jTWV0YS5kb2NJbmZvLm5yQ29tbWVudHMgK1xuICAgICAgICAgICAgZG9jTWV0YS5kb2NJbmZvLm5yTm90ZXMgK1xuICAgICAgICAgICAgZG9jTWV0YS5kb2NJbmZvLm5yRmxhc2hjYXJkcyArXG4gICAgICAgICAgICBkb2NNZXRhLmRvY0luZm8ubnJUZXh0SGlnaGxpZ2h0cyArXG4gICAgICAgICAgICBkb2NNZXRhLmRvY0luZm8ubnJBcmVhSGlnaGxpZ2h0cztcblxuICAgICAgICBpZiAoZG9jTWV0YS5kb2NJbmZvLmFkZGVkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGRvY01ldGEuZG9jSW5mby5hZGRlZCA9IElTT0RhdGVUaW1lU3RyaW5ncy5jcmVhdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHVwZGF0ZSB0aGUgc2VxdWVuY2UgYmVmb3JlIHdlIHdyaXRlIGl0IG91dCB0byBkaXNrLlxuICAgICAgICBkb2NNZXRhLmRvY0luZm8udXVpZCA9IFVVSURzLmNyZWF0ZSgpO1xuXG4gICAgICAgIGxvZy5pbmZvKGBTeW5jIG9mIGRvY01ldGEgd2l0aCBmaW5nZXJwcmludDogJHtmaW5nZXJwcmludH0gYW5kIFVVSUQ6IGAgKyBkb2NNZXRhLmRvY0luZm8udXVpZCk7XG5cbiAgICAgICAgLy8gTk9URSB0aGF0IHdlIGFsd2F5cyB3cml0ZSB0aGUgc3RhdGUgd2l0aCBKU09OIHByZXR0eSBwcmludGluZy5cbiAgICAgICAgLy8gT3RoZXJ3aXNlIHRvb2xzIGxpa2UgZ2l0IGRpZmYgLCBldGMgd2lsbCBiZSBpbXBvc3NpYmxlIHRvIGRlYWwgd2l0aFxuICAgICAgICAvLyBpbiBwcmFjdGljZS5cbiAgICAgICAgY29uc3QgZGF0YSA9IERvY01ldGFzLnNlcmlhbGl6ZShkb2NNZXRhLCBcIlwiKTtcblxuICAgICAgICBjb25zdCBkb2NJbmZvID0gT2JqZWN0LmFzc2lnbih7fSwgZG9jTWV0YS5kb2NJbmZvKTtcblxuICAgICAgICBjb25zdCBzeW5jTXV0YXRpb24gPSBuZXcgRGVmYXVsdERhdGFzdG9yZU11dGF0aW9uPGJvb2xlYW4+KCk7XG5cbiAgICAgICAgRGF0YXN0b3JlTXV0YXRpb25zLnBpcGUoc3luY011dGF0aW9uLCBkYXRhc3RvcmVNdXRhdGlvbiwgKCkgPT4gZG9jSW5mbyk7XG5cbiAgICAgICAgY29uc3Qgd3JpdGVPcHRzID0ge1xuICAgICAgICAgICAgLi4ub3B0cyxcbiAgICAgICAgICAgIGRhdGFzdG9yZU11dGF0aW9uOiBzeW5jTXV0YXRpb24sXG4gICAgICAgIH07XG5cbiAgICAgICAgYXdhaXQgdGhpcy5kYXRhc3RvcmUud3JpdGUoZmluZ2VycHJpbnQsIGRhdGEsIGRvY0luZm8sIHdyaXRlT3B0cyk7XG5cbiAgICAgICAgcmV0dXJuIGRvY0luZm87XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgc3luY2hyb25pemVEb2NzKC4uLmRvY01ldGFSZWZzOiBEb2NNZXRhUmVmW10pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YXN0b3JlLnN5bmNocm9uaXplRG9jcyguLi5kb2NNZXRhUmVmcyk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldERvY01ldGFSZWZzKCk6IFByb21pc2U8RG9jTWV0YVJlZltdPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFzdG9yZS5nZXREb2NNZXRhUmVmcygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBhIGN1cnJlbnQgc25hcHNob3Qgb2YgdGhlIGludGVybmFsIHN0YXRlIG9mIHRoZSBEYXRhc3RvcmUgYnlcbiAgICAgKiByZWNlaXZpbmcgRG9jTWV0YVNuYXBzaG90RXZlbnQgb24gdGhlIGluaXRpYWwgc3RhdGUuXG4gICAgICovXG4gICAgcHVibGljIHNuYXBzaG90KGxpc3RlbmVyOiBEb2NNZXRhU25hcHNob3RFdmVudExpc3RlbmVyLFxuICAgICAgICAgICAgICAgICAgICBlcnJvckxpc3RlbmVyOiBFcnJvckxpc3RlbmVyID0gTlVMTF9GVU5DVElPTik6IFByb21pc2U8U25hcHNob3RSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YXN0b3JlLnNuYXBzaG90KGxpc3RlbmVyLCBlcnJvckxpc3RlbmVyKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgY3JlYXRlQmFja3VwKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhc3RvcmUuY3JlYXRlQmFja3VwKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHdyaXRlRmlsZShiYWNrZW5kOiBCYWNrZW5kLCByZWY6IEZpbGVSZWYsIGRhdGE6IEJpbmFyeUZpbGVEYXRhLCBvcHRzPzogV3JpdGVGaWxlT3B0cyk6IFByb21pc2U8RG9jRmlsZU1ldGE+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YXN0b3JlLndyaXRlRmlsZShiYWNrZW5kLCByZWYsIGRhdGEsIG9wdHMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjb250YWluc0ZpbGUoYmFja2VuZDogQmFja2VuZCwgcmVmOiBGaWxlUmVmKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFzdG9yZS5jb250YWluc0ZpbGUoYmFja2VuZCwgcmVmKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0RmlsZShiYWNrZW5kOiBCYWNrZW5kLCByZWY6IEZpbGVSZWYsIG9wdHM/OiBHZXRGaWxlT3B0cyk6IERvY0ZpbGVNZXRhIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YXN0b3JlLmdldEZpbGUoYmFja2VuZCwgcmVmLCBvcHRzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGVsZXRlRmlsZShiYWNrZW5kOiBCYWNrZW5kLCByZWY6IEZpbGVSZWYpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YXN0b3JlLmRlbGV0ZUZpbGUoYmFja2VuZCwgcmVmKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkRG9jTWV0YVNuYXBzaG90RXZlbnRMaXN0ZW5lcihkb2NNZXRhU25hcHNob3RFdmVudExpc3RlbmVyOiBEb2NNZXRhU25hcHNob3RFdmVudExpc3RlbmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGF0YXN0b3JlLmFkZERvY01ldGFTbmFwc2hvdEV2ZW50TGlzdGVuZXIoZG9jTWV0YVNuYXBzaG90RXZlbnRMaXN0ZW5lcik7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIG92ZXJ2aWV3KCk6IFByb21pc2U8RGF0YXN0b3JlT3ZlcnZpZXcgfCB1bmRlZmluZWQ+IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuZGF0YXN0b3JlLm92ZXJ2aWV3KCk7XG4gICAgfVxuXG4gICAgcHVibGljIGNhcGFiaWxpdGllcygpOiBEYXRhc3RvcmVDYXBhYmlsaXRpZXMge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhc3RvcmUuY2FwYWJpbGl0aWVzKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGRlYWN0aXZhdGUoKSB7XG4gICAgICAgIGF3YWl0IHRoaXMuZGF0YXN0b3JlLmRlYWN0aXZhdGUoKTtcbiAgICB9XG5cbn1cblxuIl19