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
const chai_1 = require("chai");
const Assertions_1 = require("../test/Assertions");
const DocMetas_1 = require("../metadata/DocMetas");
const DefaultPersistenceLayer_1 = require("./DefaultPersistenceLayer");
const Preconditions_1 = require("polar-shared/src/Preconditions");
const os_1 = __importDefault(require("os"));
const Files_1 = require("polar-shared/src/util/Files");
const FilePaths_1 = require("polar-shared/src/util/FilePaths");
const Dictionaries_1 = require("polar-shared/src/util/Dictionaries");
const Directories_1 = require("./Directories");
const MockPHZWriter_1 = require("../phz/MockPHZWriter");
const Backend_1 = require("polar-shared/src/datastore/Backend");
const DatastoreMutation_1 = require("./DatastoreMutation");
const Datastores_1 = require("./Datastores");
const DiskDatastore_1 = require("./DiskDatastore");
const TestingTime_1 = require("polar-shared/src/test/TestingTime");
const Latch_1 = require("polar-shared/src/util/Latch");
const tmpdir = os_1.default.tmpdir();
class DatastoreTester {
    static test(datastoreFactory, hasLocalFiles = true) {
        describe('DatastoreTester tests', function () {
            const fingerprint = "0x001";
            const dataDir = FilePaths_1.FilePaths.join(tmpdir, 'test-data-dir');
            let datastore;
            let persistenceLayer;
            let docMeta;
            let directories;
            beforeEach(function () {
                return __awaiter(this, void 0, void 0, function* () {
                    try {
                        console.log("===== before test ====");
                        console.log("Removing directory recursively: " + dataDir);
                        yield Files_1.Files.removeDirectoryRecursivelyAsync(dataDir);
                        Directories_1.GlobalDataDir.set(dataDir);
                        console.log("Creating new datastore");
                        datastore = yield datastoreFactory();
                        directories = new Directories_1.Directories();
                        persistenceLayer = new DefaultPersistenceLayer_1.DefaultPersistenceLayer(datastore);
                        console.log("Init of new persistence layer...");
                        yield persistenceLayer.init();
                        console.log("Init of new persistence layer...done");
                        console.log("Purge of new persistence layer...");
                        yield Datastores_1.Datastores.purge(datastore, purgeEvent => console.log("Purged: ", purgeEvent));
                        console.log("Purge of new persistence layer...done");
                        docMeta = DocMetas_1.MockDocMetas.createWithinInitialPagemarks(fingerprint, 14);
                        docMeta.docInfo.filename = `${fingerprint}.phz`;
                        yield persistenceLayer.delete({ fingerprint, docInfo: docMeta.docInfo });
                        const contains = yield persistenceLayer.contains(fingerprint);
                        chai_1.assert.equal(contains, false, "Document already exists in persistence layer: " + fingerprint);
                        yield Files_1.Files.createDirAsync(directories.dataDir);
                        yield Files_1.Files.createDirAsync(directories.stashDir);
                        yield MockPHZWriter_1.MockPHZWriter.write(FilePaths_1.FilePaths.create(directories.stashDir, `${fingerprint}.phz`));
                        const datastoreMutation = new DatastoreMutation_1.DefaultDatastoreMutation();
                        yield persistenceLayer.write(fingerprint, docMeta, { datastoreMutation });
                        yield datastoreMutation.written.get();
                        yield datastoreMutation.committed.get();
                    }
                    catch (e) {
                        console.error("beforeEach failed: ", e);
                        throw e;
                    }
                });
            });
            afterEach(function () {
                return __awaiter(this, void 0, void 0, function* () {
                    try {
                        console.log("===== after test ====");
                        yield Datastores_1.Datastores.purge(persistenceLayer.datastore, purgeEvent => console.log("Purged: ", purgeEvent));
                        yield persistenceLayer.stop();
                    }
                    catch (e) {
                        console.error("afterEach failed: ", e);
                        throw e;
                    }
                });
            });
            it("write and read data to disk", function () {
                return __awaiter(this, void 0, void 0, function* () {
                    const docMeta0 = yield persistenceLayer.getDocMeta(fingerprint);
                    chai_1.assert.ok(docMeta0.docInfo.lastUpdated !== undefined);
                    delete docMeta0.docInfo.lastUpdated;
                    delete docMeta0.docInfo.nrComments;
                    delete docMeta0.docInfo.nrFlashcards;
                    delete docMeta0.docInfo.nrAreaHighlights;
                    delete docMeta0.docInfo.nrTextHighlights;
                    delete docMeta0.docInfo.nrNotes;
                    delete docMeta0.docInfo.nrAnnotations;
                    delete docMeta0.docInfo.uuid;
                    docMeta.docInfo.uuid = '__canonicalized__';
                    docMeta0.docInfo.uuid = '__canonicalized__';
                    chai_1.assert.equal(Preconditions_1.isPresent(docMeta0), true, "docMeta0 is not present");
                    Assertions_1.assertJSON(Dictionaries_1.Dictionaries.sorted(docMeta), Dictionaries_1.Dictionaries.sorted(docMeta0));
                });
            });
            it("data contains no whitespace", function () {
                return __awaiter(this, void 0, void 0, function* () {
                    const data = yield datastore.getDocMeta(fingerprint);
                    chai_1.assert.isNotNull(data);
                    chai_1.assert.equal(data.indexOf("\n"), -1);
                });
            });
            it("read non-existant fingerprint", function () {
                return __awaiter(this, void 0, void 0, function* () {
                    const nonExistantDocMeta = yield persistenceLayer.getDocMeta('0x666');
                    chai_1.assert.ok(nonExistantDocMeta === undefined);
                });
            });
            it("Delete DocMeta and the associated stash file...", function () {
                return __awaiter(this, void 0, void 0, function* () {
                    const docMetaFileRef = {
                        fingerprint,
                        docFile: {
                            name: `${fingerprint}.phz`
                        },
                        docInfo: docMeta.docInfo
                    };
                    const docPath = FilePaths_1.FilePaths.join(directories.stashDir, `${fingerprint}.phz`);
                    const statePath = FilePaths_1.FilePaths.join(directories.dataDir, fingerprint, 'state.json');
                    if (hasLocalFiles) {
                        chai_1.assert.ok(yield Files_1.Files.existsAsync(docPath));
                        chai_1.assert.ok(yield Files_1.Files.existsAsync(statePath));
                    }
                    yield persistenceLayer.delete(docMetaFileRef);
                    if (hasLocalFiles) {
                        chai_1.assert.ok(!(yield Files_1.Files.existsAsync(docPath)));
                        chai_1.assert.ok(!(yield Files_1.Files.existsAsync(statePath)));
                    }
                    yield persistenceLayer.delete(docMetaFileRef);
                    yield persistenceLayer.delete(docMetaFileRef);
                    yield persistenceLayer.delete(docMetaFileRef);
                });
            });
            it("adding binary files", function () {
                return __awaiter(this, void 0, void 0, function* () {
                    const data = 'fake image data';
                    const fileRef = { name: 'test.jpg' };
                    yield datastore.deleteFile(Backend_1.Backend.IMAGE, fileRef);
                    yield datastore.deleteFile(Backend_1.Backend.IMAGE, fileRef);
                    chai_1.assert.ok(!(yield datastore.containsFile(Backend_1.Backend.IMAGE, fileRef)), "Datastore already contains file!");
                    const meta = {
                        "foo": "bar"
                    };
                    yield datastore.writeFile(Backend_1.Backend.IMAGE, fileRef, data, { meta });
                    yield datastore.writeFile(Backend_1.Backend.IMAGE, fileRef, data, { meta });
                    chai_1.assert.ok(yield datastore.containsFile(Backend_1.Backend.IMAGE, fileRef));
                    const datastoreFile = datastore.getFile(Backend_1.Backend.IMAGE, fileRef);
                    chai_1.assert.ok(datastoreFile, "no result");
                    yield datastore.deleteFile(Backend_1.Backend.IMAGE, fileRef);
                    yield datastore.deleteFile(Backend_1.Backend.IMAGE, fileRef);
                });
            });
            it("getDocMetaFiles", function () {
                return __awaiter(this, void 0, void 0, function* () {
                    const docMetaFiles = yield datastore.getDocMetaRefs();
                    chai_1.assert.equal(docMetaFiles.length > 0, true);
                    chai_1.assert.equal(docMetaFiles.map((current) => current.fingerprint).includes(fingerprint), true);
                });
            });
            it("overview", function () {
                return __awaiter(this, void 0, void 0, function* () {
                    const overview = yield datastore.overview();
                    chai_1.assert.isDefined(overview);
                });
            });
            it("snapshot and make sure we receive a terminated batch at committed consistency.", function () {
                return __awaiter(this, void 0, void 0, function* () {
                    const writtenSnapshotReceived = new Latch_1.Latch();
                    const committedSnapshotReceived = new Latch_1.Latch();
                    const snapshotResult = yield datastore.snapshot((docMetaSnapshotEvent) => __awaiter(this, void 0, void 0, function* () {
                        if (docMetaSnapshotEvent.batch) {
                            if (docMetaSnapshotEvent.batch.terminated) {
                                if (docMetaSnapshotEvent.consistency === 'committed') {
                                    committedSnapshotReceived.resolve(true);
                                    writtenSnapshotReceived.resolve(true);
                                }
                                if (docMetaSnapshotEvent.consistency === 'written') {
                                    writtenSnapshotReceived.resolve(true);
                                }
                            }
                        }
                    }));
                    yield writtenSnapshotReceived.get();
                    yield committedSnapshotReceived.get();
                    if (snapshotResult.unsubscribe) {
                        snapshotResult.unsubscribe();
                    }
                });
            });
            it("createBackup", function () {
                return __awaiter(this, void 0, void 0, function* () {
                    if (!(datastore instanceof DiskDatastore_1.DiskDatastore)) {
                        console.log("Skipping (not DiskDatastore)");
                        return;
                    }
                    try {
                        TestingTime_1.TestingTime.freeze();
                        const now = new Date();
                        console.log("Creating backup at: " + now.toUTCString());
                        const backupDir = FilePaths_1.FilePaths.join(dataDir, ".backup-2012-03-02");
                        yield datastore.createBackup();
                        console.log("Testing for backup dir: " + backupDir);
                        chai_1.assert.ok(yield Files_1.Files.existsAsync(backupDir));
                        chai_1.assert.ok(!(yield Files_1.Files.existsAsync(FilePaths_1.FilePaths.join(backupDir, ".backup-2012-03-02"))));
                        const statePath = FilePaths_1.FilePaths.join(backupDir, '0x001', 'state.json');
                        chai_1.assert.ok(yield Files_1.Files.existsAsync(statePath));
                    }
                    finally {
                        TestingTime_1.TestingTime.unfreeze();
                    }
                });
            });
        });
    }
}
exports.DatastoreTester = DatastoreTester;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0YXN0b3JlVGVzdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRGF0YXN0b3JlVGVzdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0JBQTRCO0FBQzVCLG1EQUE4QztBQUM5QyxtREFBa0Q7QUFDbEQsdUVBQWtFO0FBRWxFLGtFQUF5RDtBQUV6RCw0Q0FBb0I7QUFDcEIsdURBQWtEO0FBQ2xELCtEQUEwRDtBQUMxRCxxRUFBZ0U7QUFDaEUsK0NBQXlEO0FBQ3pELHdEQUFtRDtBQUVuRCxnRUFBMkQ7QUFHM0QsMkRBQTZEO0FBQzdELDZDQUF3QztBQUN4QyxtREFBOEM7QUFDOUMsbUVBQThEO0FBRzlELHVEQUFrRDtBQUVsRCxNQUFNLE1BQU0sR0FBRyxZQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFM0IsTUFBYSxlQUFlO0lBRWpCLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQTBDLEVBQUUsZ0JBQXlCLElBQUk7UUFFeEYsUUFBUSxDQUFDLHVCQUF1QixFQUFFO1lBRTlCLE1BQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQztZQUU1QixNQUFNLE9BQU8sR0FBRyxxQkFBUyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsZUFBZSxDQUFDLENBQUM7WUFFeEQsSUFBSSxTQUFvQixDQUFDO1lBQ3pCLElBQUksZ0JBQXlDLENBQUM7WUFFOUMsSUFBSSxPQUFpQixDQUFDO1lBRXRCLElBQUksV0FBd0IsQ0FBQztZQUU3QixVQUFVLENBQUM7O29CQUVQLElBQUk7d0JBRUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO3dCQUV0QyxPQUFPLENBQUMsR0FBRyxDQUFDLGtDQUFrQyxHQUFHLE9BQU8sQ0FBQyxDQUFDO3dCQUUxRCxNQUFNLGFBQUssQ0FBQywrQkFBK0IsQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFFckQsMkJBQWEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQzNCLE9B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QU0sR0FBRyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7d0JBR3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEdBQUcsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7d0JBRXhELE1BQU0sU0FBUyxHQUFHLHFCQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO3dCQUVoRSxNQUFNLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQzt3QkFFL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsR0FBRyxTQUFTLENBQUMsQ0FBQzt3QkFFcEQsYUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLGFBQUssQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQzt3QkFFOUMsYUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFFLENBQUEsTUFBTSxhQUFLLENBQUMsV0FBVyxDQUFDLHFCQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDLENBQUEsQ0FBQyxDQUFDO3dCQUV0RixNQUFNLFNBQVMsR0FBRyxxQkFBUyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLFlBQVksQ0FBQyxDQUFDO3dCQUNuRSxhQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sYUFBSyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO3FCQUVqRDs0QkFBUzt3QkFFTix5QkFBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO3FCQUUxQjtnQkFHTCxDQUFDO2FBQUEsQ0FBQyxDQUFDO1FBRVAsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDO0NBRUo7QUEzVEQsMENBMlRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthc3NlcnR9IGZyb20gJ2NoYWknO1xuaW1wb3J0IHthc3NlcnRKU09OfSBmcm9tICcuLi90ZXN0L0Fzc2VydGlvbnMnO1xuaW1wb3J0IHtNb2NrRG9jTWV0YXN9IGZyb20gJy4uL21ldGFkYXRhL0RvY01ldGFzJztcbmltcG9ydCB7RGVmYXVsdFBlcnNpc3RlbmNlTGF5ZXJ9IGZyb20gJy4vRGVmYXVsdFBlcnNpc3RlbmNlTGF5ZXInO1xuaW1wb3J0IHtEb2NNZXRhfSBmcm9tICcuLi9tZXRhZGF0YS9Eb2NNZXRhJztcbmltcG9ydCB7aXNQcmVzZW50fSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL1ByZWNvbmRpdGlvbnMnO1xuXG5pbXBvcnQgb3MgZnJvbSAnb3MnO1xuaW1wb3J0IHtGaWxlc30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL0ZpbGVzJztcbmltcG9ydCB7RmlsZVBhdGhzfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvRmlsZVBhdGhzJztcbmltcG9ydCB7RGljdGlvbmFyaWVzfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvRGljdGlvbmFyaWVzJztcbmltcG9ydCB7RGlyZWN0b3JpZXMsIEdsb2JhbERhdGFEaXJ9IGZyb20gJy4vRGlyZWN0b3JpZXMnO1xuaW1wb3J0IHtNb2NrUEhaV3JpdGVyfSBmcm9tICcuLi9waHovTW9ja1BIWldyaXRlcic7XG5pbXBvcnQge0RvY01ldGFGaWxlUmVmfSBmcm9tICcuL0RvY01ldGFSZWYnO1xuaW1wb3J0IHtCYWNrZW5kfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL2RhdGFzdG9yZS9CYWNrZW5kJztcbmltcG9ydCB7RGF0YXN0b3JlfSBmcm9tICcuL0RhdGFzdG9yZSc7XG5pbXBvcnQge0RvY0luZm99IGZyb20gJy4uL21ldGFkYXRhL0RvY0luZm8nO1xuaW1wb3J0IHtEZWZhdWx0RGF0YXN0b3JlTXV0YXRpb259IGZyb20gJy4vRGF0YXN0b3JlTXV0YXRpb24nO1xuaW1wb3J0IHtEYXRhc3RvcmVzfSBmcm9tICcuL0RhdGFzdG9yZXMnO1xuaW1wb3J0IHtEaXNrRGF0YXN0b3JlfSBmcm9tICcuL0Rpc2tEYXRhc3RvcmUnO1xuaW1wb3J0IHtUZXN0aW5nVGltZX0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy90ZXN0L1Rlc3RpbmdUaW1lJztcbmltcG9ydCB7SURvY0luZm99IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL21ldGFkYXRhL0lEb2NJbmZvXCI7XG5pbXBvcnQge0lEb2NNZXRhfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy9tZXRhZGF0YS9JRG9jTWV0YVwiO1xuaW1wb3J0IHtMYXRjaH0gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvdXRpbC9MYXRjaFwiO1xuXG5jb25zdCB0bXBkaXIgPSBvcy50bXBkaXIoKTtcblxuZXhwb3J0IGNsYXNzIERhdGFzdG9yZVRlc3RlciB7XG5cbiAgICBwdWJsaWMgc3RhdGljIHRlc3QoZGF0YXN0b3JlRmFjdG9yeTogKCkgPT4gUHJvbWlzZTxEYXRhc3RvcmU+LCBoYXNMb2NhbEZpbGVzOiBib29sZWFuID0gdHJ1ZSkge1xuXG4gICAgICAgIGRlc2NyaWJlKCdEYXRhc3RvcmVUZXN0ZXIgdGVzdHMnLCBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgY29uc3QgZmluZ2VycHJpbnQgPSBcIjB4MDAxXCI7XG5cbiAgICAgICAgICAgIGNvbnN0IGRhdGFEaXIgPSBGaWxlUGF0aHMuam9pbih0bXBkaXIsICd0ZXN0LWRhdGEtZGlyJyk7XG5cbiAgICAgICAgICAgIGxldCBkYXRhc3RvcmU6IERhdGFzdG9yZTtcbiAgICAgICAgICAgIGxldCBwZXJzaXN0ZW5jZUxheWVyOiBEZWZhdWx0UGVyc2lzdGVuY2VMYXllcjtcblxuICAgICAgICAgICAgbGV0IGRvY01ldGE6IElEb2NNZXRhO1xuXG4gICAgICAgICAgICBsZXQgZGlyZWN0b3JpZXM6IERpcmVjdG9yaWVzO1xuXG4gICAgICAgICAgICBiZWZvcmVFYWNoKGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgdHJ5IHtcblxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIj09PT09IGJlZm9yZSB0ZXN0ID09PT1cIik7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZW1vdmluZyBkaXJlY3RvcnkgcmVjdXJzaXZlbHk6IFwiICsgZGF0YURpcik7XG5cbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgRmlsZXMucmVtb3ZlRGlyZWN0b3J5UmVjdXJzaXZlbHlBc3luYyhkYXRhRGlyKTtcblxuICAgICAgICAgICAgICAgICAgICBHbG9iYWxEYXRhRGlyLnNldChkYXRhRGlyKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDcmVhdGluZyBuZXcgZGF0YXN0b3JlXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIGRhdGFzdG9yZSA9IGF3YWl0IGRhdGFzdG9yZUZhY3RvcnkoKTtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0b3JpZXMgPSBuZXcgRGlyZWN0b3JpZXMoKTtcblxuICAgICAgICAgICAgICAgICAgICBwZXJzaXN0ZW5jZUxheWVyID0gbmV3IERlZmF1bHRQZXJzaXN0ZW5jZUxheWVyKGRhdGFzdG9yZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJJbml0IG9mIG5ldyBwZXJzaXN0ZW5jZSBsYXllci4uLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgcGVyc2lzdGVuY2VMYXllci5pbml0KCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSW5pdCBvZiBuZXcgcGVyc2lzdGVuY2UgbGF5ZXIuLi5kb25lXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUHVyZ2Ugb2YgbmV3IHBlcnNpc3RlbmNlIGxheWVyLi4uXCIpO1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCBEYXRhc3RvcmVzLnB1cmdlKGRhdGFzdG9yZSwgcHVyZ2VFdmVudCA9PiBjb25zb2xlLmxvZyhcIlB1cmdlZDogXCIsIHB1cmdlRXZlbnQpKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQdXJnZSBvZiBuZXcgcGVyc2lzdGVuY2UgbGF5ZXIuLi5kb25lXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIGRvY01ldGEgPSBNb2NrRG9jTWV0YXMuY3JlYXRlV2l0aGluSW5pdGlhbFBhZ2VtYXJrcyhmaW5nZXJwcmludCwgMTQpO1xuXG4gICAgICAgICAgICAgICAgICAgIGRvY01ldGEuZG9jSW5mby5maWxlbmFtZSA9IGAke2ZpbmdlcnByaW50fS5waHpgO1xuXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHBlcnNpc3RlbmNlTGF5ZXIuZGVsZXRlKHsgZmluZ2VycHJpbnQsIGRvY0luZm86IGRvY01ldGEuZG9jSW5mbyB9KTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250YWlucyA9IGF3YWl0IHBlcnNpc3RlbmNlTGF5ZXIuY29udGFpbnMoZmluZ2VycHJpbnQpO1xuXG4gICAgICAgICAgICAgICAgICAgIGFzc2VydC5lcXVhbChjb250YWlucywgZmFsc2UsIFwiRG9jdW1lbnQgYWxyZWFkeSBleGlzdHMgaW4gcGVyc2lzdGVuY2UgbGF5ZXI6IFwiICsgZmluZ2VycHJpbnQpO1xuXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IEZpbGVzLmNyZWF0ZURpckFzeW5jKGRpcmVjdG9yaWVzLmRhdGFEaXIpO1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCBGaWxlcy5jcmVhdGVEaXJBc3luYyhkaXJlY3Rvcmllcy5zdGFzaERpcik7XG5cbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgTW9ja1BIWldyaXRlci53cml0ZShGaWxlUGF0aHMuY3JlYXRlKGRpcmVjdG9yaWVzLnN0YXNoRGlyLCBgJHtmaW5nZXJwcmludH0ucGh6YCkpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFzdG9yZU11dGF0aW9uID0gbmV3IERlZmF1bHREYXRhc3RvcmVNdXRhdGlvbjxJRG9jSW5mbz4oKTtcblxuICAgICAgICAgICAgICAgICAgICBhd2FpdCBwZXJzaXN0ZW5jZUxheWVyLndyaXRlKGZpbmdlcnByaW50LCBkb2NNZXRhLCB7IGRhdGFzdG9yZU11dGF0aW9uIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSB3ZSdyZSBhbHdheXMgdXNpbmcgdGhlIGRhdGFzdG9yZSBtdXRhdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgZGF0YXN0b3JlTXV0YXRpb24ud3JpdHRlbi5nZXQoKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBJIHRoaW5rIHRoaXMgaXMgYWNjZXB0YWJsZSBhcyBvdXIgY29uc2lzdGVuY3kgaXNcbiAgICAgICAgICAgICAgICAgICAgLy8gbG9jYWwgZmlyc3QuXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IGRhdGFzdG9yZU11dGF0aW9uLmNvbW1pdHRlZC5nZXQoKTtcblxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcImJlZm9yZUVhY2ggZmFpbGVkOiBcIiwgZSk7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgYWZ0ZXJFYWNoKGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgdHJ5IHtcblxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIj09PT09IGFmdGVyIHRlc3QgPT09PVwiKTtcblxuICAgICAgICAgICAgICAgICAgICBhd2FpdCBEYXRhc3RvcmVzLnB1cmdlKHBlcnNpc3RlbmNlTGF5ZXIuZGF0YXN0b3JlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB1cmdlRXZlbnQgPT4gY29uc29sZS5sb2coXCJQdXJnZWQ6IFwiLCBwdXJnZUV2ZW50KSk7XG5cbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgcGVyc2lzdGVuY2VMYXllci5zdG9wKCk7XG5cbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJhZnRlckVhY2ggZmFpbGVkOiBcIiwgZSk7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaXQoXCJ3cml0ZSBhbmQgcmVhZCBkYXRhIHRvIGRpc2tcIiwgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBsZXQgY29udGFpbnMgPSBhd2FpdCBwZXJzaXN0ZW5jZUxheWVyLmNvbnRhaW5zKGZpbmdlcnByaW50KTtcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vIGFzc2VydC5vayghIGNvbnRhaW5zKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGRvY01ldGEwID0gYXdhaXQgcGVyc2lzdGVuY2VMYXllci5nZXREb2NNZXRhKGZpbmdlcnByaW50KTtcblxuICAgICAgICAgICAgICAgIGFzc2VydC5vayhkb2NNZXRhMCEuZG9jSW5mby5sYXN0VXBkYXRlZCAhPT0gdW5kZWZpbmVkKTtcblxuICAgICAgICAgICAgICAgIGRlbGV0ZSBkb2NNZXRhMCEuZG9jSW5mby5sYXN0VXBkYXRlZDtcbiAgICAgICAgICAgICAgICBkZWxldGUgZG9jTWV0YTAhLmRvY0luZm8ubnJDb21tZW50cztcbiAgICAgICAgICAgICAgICBkZWxldGUgZG9jTWV0YTAhLmRvY0luZm8ubnJGbGFzaGNhcmRzO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBkb2NNZXRhMCEuZG9jSW5mby5uckFyZWFIaWdobGlnaHRzO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBkb2NNZXRhMCEuZG9jSW5mby5uclRleHRIaWdobGlnaHRzO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBkb2NNZXRhMCEuZG9jSW5mby5uck5vdGVzO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBkb2NNZXRhMCEuZG9jSW5mby5uckFubm90YXRpb25zO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBkb2NNZXRhMCEuZG9jSW5mby51dWlkO1xuXG4gICAgICAgICAgICAgICAgZG9jTWV0YSEuZG9jSW5mby51dWlkID0gJ19fY2Fub25pY2FsaXplZF9fJztcbiAgICAgICAgICAgICAgICBkb2NNZXRhMCEuZG9jSW5mby51dWlkID0gJ19fY2Fub25pY2FsaXplZF9fJztcblxuICAgICAgICAgICAgICAgIGFzc2VydC5lcXVhbChpc1ByZXNlbnQoZG9jTWV0YTApLCB0cnVlLCBcImRvY01ldGEwIGlzIG5vdCBwcmVzZW50XCIpO1xuXG4gICAgICAgICAgICAgICAgYXNzZXJ0SlNPTihEaWN0aW9uYXJpZXMuc29ydGVkKGRvY01ldGEpLCBEaWN0aW9uYXJpZXMuc29ydGVkKGRvY01ldGEwKSk7XG5cbiAgICAgICAgICAgIH0pO1xuXG5cblxuICAgICAgICAgICAgaXQoXCJkYXRhIGNvbnRhaW5zIG5vIHdoaXRlc3BhY2VcIiwgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZGF0YXN0b3JlLmdldERvY01ldGEoZmluZ2VycHJpbnQpO1xuXG4gICAgICAgICAgICAgICAgYXNzZXJ0LmlzTm90TnVsbChkYXRhKTtcbiAgICAgICAgICAgICAgICBhc3NlcnQuZXF1YWwoZGF0YSEuaW5kZXhPZihcIlxcblwiKSwgLTEpO1xuXG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICBpdChcInJlYWQgbm9uLWV4aXN0YW50IGZpbmdlcnByaW50XCIsIGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgbm9uRXhpc3RhbnREb2NNZXRhID0gYXdhaXQgcGVyc2lzdGVuY2VMYXllci5nZXREb2NNZXRhKCcweDY2NicpO1xuXG4gICAgICAgICAgICAgICAgYXNzZXJ0Lm9rKG5vbkV4aXN0YW50RG9jTWV0YSA9PT0gdW5kZWZpbmVkKTtcblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGl0KFwiRGVsZXRlIERvY01ldGEgYW5kIHRoZSBhc3NvY2lhdGVkIHN0YXNoIGZpbGUuLi5cIiwgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBkb2NNZXRhRmlsZVJlZjogRG9jTWV0YUZpbGVSZWYgPSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbmdlcnByaW50LFxuICAgICAgICAgICAgICAgICAgICBkb2NGaWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBgJHtmaW5nZXJwcmludH0ucGh6YFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBkb2NJbmZvOiBkb2NNZXRhLmRvY0luZm9cbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgLy8gbWFrZSBzdXJlIHRoZSBmaWxlcyBleGlzdCBvbiBkaXNrLi4uXG5cbiAgICAgICAgICAgICAgICBjb25zdCBkb2NQYXRoID0gRmlsZVBhdGhzLmpvaW4oZGlyZWN0b3JpZXMuc3Rhc2hEaXIsIGAke2ZpbmdlcnByaW50fS5waHpgKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZVBhdGggPSBGaWxlUGF0aHMuam9pbihkaXJlY3Rvcmllcy5kYXRhRGlyLCBmaW5nZXJwcmludCwgJ3N0YXRlLmpzb24nKTtcblxuICAgICAgICAgICAgICAgIGlmIChoYXNMb2NhbEZpbGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGFzc2VydC5vayhhd2FpdCBGaWxlcy5leGlzdHNBc3luYyhkb2NQYXRoKSk7XG4gICAgICAgICAgICAgICAgICAgIGFzc2VydC5vayhhd2FpdCBGaWxlcy5leGlzdHNBc3luYyhzdGF0ZVBhdGgpKTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGF3YWl0IHBlcnNpc3RlbmNlTGF5ZXIuZGVsZXRlKGRvY01ldGFGaWxlUmVmKTtcblxuICAgICAgICAgICAgICAgIGlmIChoYXNMb2NhbEZpbGVzKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gbWFrZSBzdXJlIHRoZSBmaWxlcyB3ZXJlIGRlbGV0ZWRcblxuICAgICAgICAgICAgICAgICAgICBhc3NlcnQub2soISBhd2FpdCBGaWxlcy5leGlzdHNBc3luYyhkb2NQYXRoKSk7XG4gICAgICAgICAgICAgICAgICAgIGFzc2VydC5vayghIGF3YWl0IEZpbGVzLmV4aXN0c0FzeW5jKHN0YXRlUGF0aCkpO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gcGVyZm9ybSB0aGUgZGVsZXRlIG11bHRpcGxlIHRpbWVzIG5vdyB0byBtYWtlIHN1cmUgd2UncmVcbiAgICAgICAgICAgICAgICAvLyBpZGVtcG90ZW50IGZvciBkZWxldGVzXG4gICAgICAgICAgICAgICAgYXdhaXQgcGVyc2lzdGVuY2VMYXllci5kZWxldGUoZG9jTWV0YUZpbGVSZWYpO1xuICAgICAgICAgICAgICAgIGF3YWl0IHBlcnNpc3RlbmNlTGF5ZXIuZGVsZXRlKGRvY01ldGFGaWxlUmVmKTtcbiAgICAgICAgICAgICAgICBhd2FpdCBwZXJzaXN0ZW5jZUxheWVyLmRlbGV0ZShkb2NNZXRhRmlsZVJlZik7XG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpdChcImFkZGluZyBiaW5hcnkgZmlsZXNcIiwgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gJ2Zha2UgaW1hZ2UgZGF0YSc7XG4gICAgICAgICAgICAgICAgY29uc3QgZmlsZVJlZiA9IHtuYW1lOiAndGVzdC5qcGcnfTtcblxuICAgICAgICAgICAgICAgIGF3YWl0IGRhdGFzdG9yZS5kZWxldGVGaWxlKEJhY2tlbmQuSU1BR0UsIGZpbGVSZWYpO1xuICAgICAgICAgICAgICAgIGF3YWl0IGRhdGFzdG9yZS5kZWxldGVGaWxlKEJhY2tlbmQuSU1BR0UsIGZpbGVSZWYpO1xuXG4gICAgICAgICAgICAgICAgYXNzZXJ0Lm9rKCEgYXdhaXQgZGF0YXN0b3JlLmNvbnRhaW5zRmlsZShCYWNrZW5kLklNQUdFLCBmaWxlUmVmKSwgXCJEYXRhc3RvcmUgYWxyZWFkeSBjb250YWlucyBmaWxlIVwiKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IG1ldGEgPSB7XG4gICAgICAgICAgICAgICAgICAgIFwiZm9vXCI6IFwiYmFyXCJcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgYXdhaXQgZGF0YXN0b3JlLndyaXRlRmlsZShCYWNrZW5kLklNQUdFLCBmaWxlUmVmLCBkYXRhLCB7bWV0YX0pO1xuICAgICAgICAgICAgICAgIGF3YWl0IGRhdGFzdG9yZS53cml0ZUZpbGUoQmFja2VuZC5JTUFHRSwgZmlsZVJlZiwgZGF0YSwge21ldGF9KTtcblxuICAgICAgICAgICAgICAgIGFzc2VydC5vayhhd2FpdCBkYXRhc3RvcmUuY29udGFpbnNGaWxlKEJhY2tlbmQuSU1BR0UsIGZpbGVSZWYpKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFzdG9yZUZpbGUgPSBkYXRhc3RvcmUuZ2V0RmlsZShCYWNrZW5kLklNQUdFLCBmaWxlUmVmKTtcbiAgICAgICAgICAgICAgICBhc3NlcnQub2soZGF0YXN0b3JlRmlsZSwgXCJubyByZXN1bHRcIik7XG5cbiAgICAgICAgICAgICAgICAvLyBub2luc3BlY3Rpb24gVHNMaW50XG4gICAgICAgICAgICAgICAgLy8gYXNzZXJ0LmVxdWFsKGRhdGFzdG9yZUZpbGUuZ2V0KCkubWV0YVsnZm9vJ10sICdiYXInKTtcblxuICAgICAgICAgICAgICAgIC8vIGFzc2VydEpTT04oZGF0YXN0b3JlRmlsZS5nZXQoKS5tZXRhLCBtZXRhLCBcIm1ldGEgdmFsdWVzXG4gICAgICAgICAgICAgICAgLy8gZGlmZmVyXCIpO1xuXG4gICAgICAgICAgICAgICAgYXdhaXQgZGF0YXN0b3JlLmRlbGV0ZUZpbGUoQmFja2VuZC5JTUFHRSwgZmlsZVJlZik7XG4gICAgICAgICAgICAgICAgLy8gbWFrZSBzdXJlIHdlJ3JlIGlkZW1wb3RlbnQgZm9yIG91ciB3cml0ZXMuXG4gICAgICAgICAgICAgICAgYXdhaXQgZGF0YXN0b3JlLmRlbGV0ZUZpbGUoQmFja2VuZC5JTUFHRSwgZmlsZVJlZik7XG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpdChcImdldERvY01ldGFGaWxlc1wiLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGRvY01ldGFGaWxlcyA9IGF3YWl0IGRhdGFzdG9yZS5nZXREb2NNZXRhUmVmcygpO1xuXG4gICAgICAgICAgICAgICAgYXNzZXJ0LmVxdWFsKGRvY01ldGFGaWxlcy5sZW5ndGggPiAwLCB0cnVlKTtcblxuICAgICAgICAgICAgICAgIGFzc2VydC5lcXVhbChkb2NNZXRhRmlsZXMubWFwKChjdXJyZW50KSA9PiBjdXJyZW50LmZpbmdlcnByaW50KS5pbmNsdWRlcyhmaW5nZXJwcmludCksIHRydWUpO1xuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaXQoXCJvdmVydmlld1wiLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgIC8vIHJpZ2h0IG5vdyBqdXN0IG1ha2Ugc3VyZSB3ZSBjYW4gY2FsbCBpdCBhbmQgdGhhdCB0aGUgdmFsdWVcbiAgICAgICAgICAgICAgICAvLyBpdCByZXR1cm5zIGlzIGlzIG5vdCB1bmRlZmluZWQuXG4gICAgICAgICAgICAgICAgY29uc3Qgb3ZlcnZpZXcgPSBhd2FpdCBkYXRhc3RvcmUub3ZlcnZpZXcoKTtcbiAgICAgICAgICAgICAgICBhc3NlcnQuaXNEZWZpbmVkKG92ZXJ2aWV3KTtcblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGl0KFwic25hcHNob3QgYW5kIG1ha2Ugc3VyZSB3ZSByZWNlaXZlIGEgdGVybWluYXRlZCBiYXRjaCBhdCBjb21taXR0ZWQgY29uc2lzdGVuY3kuXCIsIGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgd3JpdHRlblNuYXBzaG90UmVjZWl2ZWQgPSBuZXcgTGF0Y2g8Ym9vbGVhbj4oKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21taXR0ZWRTbmFwc2hvdFJlY2VpdmVkID0gbmV3IExhdGNoPGJvb2xlYW4+KCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBzbmFwc2hvdFJlc3VsdCA9IGF3YWl0IGRhdGFzdG9yZS5zbmFwc2hvdChhc3luYyBkb2NNZXRhU25hcHNob3RFdmVudCA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGRvY01ldGFTbmFwc2hvdEV2ZW50LmJhdGNoKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkb2NNZXRhU25hcHNob3RFdmVudC5iYXRjaC50ZXJtaW5hdGVkKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGRvY01ldGFTbmFwc2hvdEV2ZW50LmNvbnNpc3RlbmN5ID09PSAnY29tbWl0dGVkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21taXR0ZWRTbmFwc2hvdFJlY2VpdmVkLnJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIHdlIGhhdmUgcmVjZWl2ZWQgdGhlIGNvbW1pdHRlZCB3ZSBhbHNvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlY2VpdmVkIHRoZSB3cml0dGVuLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cml0dGVuU25hcHNob3RSZWNlaXZlZC5yZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggZG9jTWV0YVNuYXBzaG90RXZlbnQuY29uc2lzdGVuY3kgPT09ICd3cml0dGVuJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cml0dGVuU25hcHNob3RSZWNlaXZlZC5yZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGF3YWl0IHdyaXR0ZW5TbmFwc2hvdFJlY2VpdmVkLmdldCgpO1xuICAgICAgICAgICAgICAgIGF3YWl0IGNvbW1pdHRlZFNuYXBzaG90UmVjZWl2ZWQuZ2V0KCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoc25hcHNob3RSZXN1bHQudW5zdWJzY3JpYmUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdW5zdWJzY3JpYmUgdG8gdGhlIHNuYXBzaG90IGlmIG5lY2Vzc2FyeVxuICAgICAgICAgICAgICAgICAgICBzbmFwc2hvdFJlc3VsdC51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICAgICAgaXQoXCJjcmVhdGVCYWNrdXBcIiwgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoISAoZGF0YXN0b3JlIGluc3RhbmNlb2YgRGlza0RhdGFzdG9yZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTa2lwcGluZyAobm90IERpc2tEYXRhc3RvcmUpXCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdHJ5IHtcblxuICAgICAgICAgICAgICAgICAgICBUZXN0aW5nVGltZS5mcmVlemUoKTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIEZyaSwgMDIgTWFyIDIwMTIgMTE6Mzg6NDkgR01UXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ3JlYXRpbmcgYmFja3VwIGF0OiBcIiArIG5vdy50b1VUQ1N0cmluZygpKTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBiYWNrdXBEaXIgPSBGaWxlUGF0aHMuam9pbihkYXRhRGlyLCBcIi5iYWNrdXAtMjAxMi0wMy0wMlwiKTtcblxuICAgICAgICAgICAgICAgICAgICBhd2FpdCBkYXRhc3RvcmUuY3JlYXRlQmFja3VwKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJUZXN0aW5nIGZvciBiYWNrdXAgZGlyOiBcIiArIGJhY2t1cERpcik7XG5cbiAgICAgICAgICAgICAgICAgICAgYXNzZXJ0Lm9rKGF3YWl0IEZpbGVzLmV4aXN0c0FzeW5jKGJhY2t1cERpcikpO1xuXG4gICAgICAgICAgICAgICAgICAgIGFzc2VydC5vayghIGF3YWl0IEZpbGVzLmV4aXN0c0FzeW5jKEZpbGVQYXRocy5qb2luKGJhY2t1cERpciwgXCIuYmFja3VwLTIwMTItMDMtMDJcIikpKTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZVBhdGggPSBGaWxlUGF0aHMuam9pbihiYWNrdXBEaXIsICcweDAwMScsICdzdGF0ZS5qc29uJyk7XG4gICAgICAgICAgICAgICAgICAgIGFzc2VydC5vayhhd2FpdCBGaWxlcy5leGlzdHNBc3luYyhzdGF0ZVBhdGgpKTtcblxuICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG5cbiAgICAgICAgICAgICAgICAgICAgVGVzdGluZ1RpbWUudW5mcmVlemUoKTtcblxuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9KTtcblxuICAgIH1cblxufVxuIl19