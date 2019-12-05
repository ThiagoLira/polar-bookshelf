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
const SpectronRenderer_1 = require("../../js/test/SpectronRenderer");
const DiskDatastore_1 = require("../../js/datastore/DiskDatastore");
const DefaultPersistenceLayer_1 = require("../../js/datastore/DefaultPersistenceLayer");
const DocMetas_1 = require("../../js/metadata/DocMetas");
const chai_1 = require("chai");
const DatastoreTester_1 = require("../../js/datastore/DatastoreTester");
const Promises_1 = require("../../js/util/Promises");
const FirebaseDatastore_1 = require("../../js/datastore/FirebaseDatastore");
const FirebaseTestRunner_1 = require("../../js/firebase/FirebaseTestRunner");
const CloudAwareDatastore_1 = require("../../js/datastore/CloudAwareDatastore");
const FilePaths_1 = require("polar-shared/src/util/FilePaths");
const Files_1 = require("polar-shared/src/util/Files");
const DatastoreMutation_1 = require("../../js/datastore/DatastoreMutation");
const PolarDataDir_1 = require("../../js/test/PolarDataDir");
const Datastores_1 = require("../../js/datastore/Datastores");
const Functions_1 = require("polar-shared/src/util/Functions");
const Logging_1 = require("../../js/logger/Logging");
const wait_for_expect_1 = __importDefault(require("wait-for-expect"));
const Latch_1 = require("polar-shared/src/util/Latch");
const TIMEOUT = 30000;
Logging_1.Logging.initForTesting();
mocha.setup('bdd');
mocha.timeout(TIMEOUT);
function createDatastore() {
    return __awaiter(this, void 0, void 0, function* () {
        const diskDatastore = new DiskDatastore_1.DiskDatastore();
        const firebaseDatastore = new FirebaseDatastore_1.FirebaseDatastore();
        yield Promise.all([diskDatastore.init(), firebaseDatastore.init()]);
        const cloudAwareDatastore = new CloudAwareDatastore_1.CloudAwareDatastore(diskDatastore, firebaseDatastore);
        cloudAwareDatastore.shutdownHook = () => __awaiter(this, void 0, void 0, function* () {
            yield wait_for_expect_1.default(() => __awaiter(this, void 0, void 0, function* () {
                console.log("Checking consistency...");
                const consistency = yield Datastores_1.Datastores.checkConsistency(diskDatastore, firebaseDatastore);
                if (!consistency.consistent) {
                    console.log("Filesystems are NOT consistent: ", consistency.manifest0, consistency.manifest1);
                }
                chai_1.assert.ok(consistency.consistent, "Datastores are not consistent");
            }), TIMEOUT);
        });
        return cloudAwareDatastore;
    });
}
SpectronRenderer_1.SpectronRenderer.run((state) => __awaiter(void 0, void 0, void 0, function* () {
    new FirebaseTestRunner_1.FirebaseTestRunner(state).run(() => __awaiter(void 0, void 0, void 0, function* () {
        yield PolarDataDir_1.PolarDataDir.useFreshDirectory('.test-firebase-cloud-aware-datastore');
        const fingerprint = "0x001";
        describe('Cloud datastore tests', function () {
            beforeEach(function () {
                return __awaiter(this, void 0, void 0, function* () {
                    try {
                        console.log("==== BEGIN beforeEach: ");
                        console.log("Removing files from: " + PolarDataDir_1.PolarDataDir.get());
                        yield Files_1.Files.removeDirectoryRecursivelyAsync(PolarDataDir_1.PolarDataDir.get());
                        console.log("Initializing firebase datastore...");
                        const firebaseDatastore = new FirebaseDatastore_1.FirebaseDatastore();
                        yield firebaseDatastore.init();
                        console.log("Initializing firebase datastore...done");
                        console.log("Purging firebase datastore...");
                        yield Datastores_1.Datastores.purge(firebaseDatastore, purgeEvent => console.log("Purged: ", purgeEvent));
                        console.log("Purging firebase datastore...done");
                        yield firebaseDatastore.stop();
                    }
                    catch (e) {
                        console.error("Caught exception in beforeEach: ", e);
                        throw e;
                    }
                    finally {
                        console.log("==== END beforeEach");
                    }
                });
            });
            function testForConsistency(testFunction = Functions_1.ASYNC_NULL_FUNCTION) {
                return __awaiter(this, void 0, void 0, function* () {
                    const cloudAwareDatastore = yield createDatastore();
                    const persistenceLayer = new DefaultPersistenceLayer_1.DefaultPersistenceLayer(cloudAwareDatastore);
                    try {
                        yield persistenceLayer.init();
                        yield wait_for_expect_1.default(() => __awaiter(this, void 0, void 0, function* () {
                            const consistency = yield Datastores_1.Datastores.checkConsistency(cloudAwareDatastore.local, cloudAwareDatastore.cloud);
                            chai_1.assert.ok(consistency.consistent);
                        }));
                        yield testFunction(persistenceLayer, cloudAwareDatastore);
                    }
                    finally {
                        yield persistenceLayer.stop();
                    }
                });
            }
            it("Test8: Sync with extra files in the local store", function () {
                return __awaiter(this, void 0, void 0, function* () {
                    const datastore = new DiskDatastore_1.DiskDatastore();
                    yield datastore.init();
                    yield datastore.writeDocMeta(DocMetas_1.MockDocMetas.createMockDocMeta('0x0004'));
                    yield datastore.writeDocMeta(DocMetas_1.MockDocMetas.createMockDocMeta('0x0005'));
                    yield datastore.stop();
                    yield testForConsistency((persistenceLayer, cloudAwareDatastore) => __awaiter(this, void 0, void 0, function* () {
                        for (const currentFingerprint of ['0x0004', '0x0005']) {
                            chai_1.assert.ok(yield cloudAwareDatastore.local.contains(currentFingerprint));
                            chai_1.assert.ok(yield cloudAwareDatastore.cloud.contains(currentFingerprint));
                        }
                    }));
                });
            });
            it("Test9: Sync with extra files in the firebase store", function () {
                return __awaiter(this, void 0, void 0, function* () {
                    const datastore = new FirebaseDatastore_1.FirebaseDatastore();
                    yield datastore.init();
                    yield datastore.writeDocMeta(DocMetas_1.MockDocMetas.createMockDocMeta('0x0004'));
                    yield datastore.writeDocMeta(DocMetas_1.MockDocMetas.createMockDocMeta('0x0005'));
                    yield datastore.stop();
                    yield testForConsistency((persistenceLayer, cloudAwareDatastore) => __awaiter(this, void 0, void 0, function* () {
                        for (const currentFingerprint of ['0x0004', '0x0005']) {
                            chai_1.assert.ok(yield cloudAwareDatastore.local.contains(currentFingerprint));
                            chai_1.assert.ok(yield cloudAwareDatastore.cloud.contains(currentFingerprint));
                        }
                    }));
                });
            });
            it("Test1: null test to make sure we have no documents on startup", function () {
                return __awaiter(this, void 0, void 0, function* () {
                    const persistenceLayer = new DefaultPersistenceLayer_1.DefaultPersistenceLayer(yield createDatastore());
                    yield persistenceLayer.init();
                    const docMetaFiles = yield persistenceLayer.getDocMetaRefs();
                    chai_1.assert.equal(docMetaFiles.length, 0);
                    yield persistenceLayer.stop();
                });
            });
            it("Test2: Basic synchronization tests", function () {
                return __awaiter(this, void 0, void 0, function* () {
                    const firebaseDatastore = new FirebaseDatastore_1.FirebaseDatastore();
                    yield firebaseDatastore.init();
                    yield Datastores_1.Datastores.purge(firebaseDatastore);
                    const firestorePersistenceLayer = new DefaultPersistenceLayer_1.DefaultPersistenceLayer(firebaseDatastore);
                    yield firestorePersistenceLayer.writeDocMeta(DocMetas_1.MockDocMetas.createMockDocMeta('0x001'));
                    const cloudAwareDatastore = yield createDatastore();
                    const persistenceLayer = new DefaultPersistenceLayer_1.DefaultPersistenceLayer(cloudAwareDatastore);
                    const initialDocLatch = new Latch_1.Latch();
                    const externallyWrittenDocLatch = new Latch_1.Latch();
                    cloudAwareDatastore.addDocMetaSnapshotEventListener((docMetaSnapshotEvent) => __awaiter(this, void 0, void 0, function* () {
                        for (const docMutation of docMetaSnapshotEvent.docMetaMutations) {
                            if (docMutation.fingerprint === '0x001') {
                                initialDocLatch.resolve(true);
                                continue;
                            }
                            if (docMutation.fingerprint === '0x002') {
                                externallyWrittenDocLatch.resolve(true);
                                continue;
                            }
                        }
                    }));
                    yield persistenceLayer.init();
                    yield initialDocLatch.get();
                    yield firestorePersistenceLayer.writeDocMeta(DocMetas_1.MockDocMetas.createMockDocMeta('0x002'));
                    yield externallyWrittenDocLatch.get();
                    yield wait_for_expect_1.default(() => __awaiter(this, void 0, void 0, function* () {
                        chai_1.assert.ok(yield persistenceLayer.contains('0x002'), "Does not contain second doc");
                    }));
                    console.log("WORKED");
                    yield persistenceLayer.stop();
                    yield firestorePersistenceLayer.stop();
                });
            });
            it("Test3: Write a basic doc with synchronization listener", function () {
                return __awaiter(this, void 0, void 0, function* () {
                    const cloudAwareDatastore = yield createDatastore();
                    const persistenceLayer = new DefaultPersistenceLayer_1.DefaultPersistenceLayer(cloudAwareDatastore);
                    const latch0 = new Latch_1.Latch();
                    const latch1 = new Latch_1.Latch();
                    cloudAwareDatastore.addSynchronizationEventListener(docMetaSnapshotEvent => {
                        if (docMetaSnapshotEvent.consistency !== 'committed') {
                            return;
                        }
                        for (const docMetaMutation of docMetaSnapshotEvent.docMetaMutations) {
                            if (docMetaMutation.fingerprint === '0x002') {
                                latch0.resolve(true);
                            }
                            if (docMetaMutation.fingerprint === '0x003') {
                                latch1.resolve(true);
                            }
                        }
                    });
                    yield persistenceLayer.init();
                    const docMeta = DocMetas_1.MockDocMetas.createMockDocMeta('0x002');
                    yield persistenceLayer.writeDocMeta(docMeta);
                    const firebasePersistenceLayer = new DefaultPersistenceLayer_1.DefaultPersistenceLayer(new FirebaseDatastore_1.FirebaseDatastore());
                    yield firebasePersistenceLayer.init();
                    yield firebasePersistenceLayer.writeDocMeta(DocMetas_1.MockDocMetas.createMockDocMeta('0x003'));
                    yield latch0.get();
                    yield latch1.get();
                    yield persistenceLayer.stop();
                    yield firebasePersistenceLayer.stop();
                });
            });
            it("Test4: Write a basic doc", function () {
                return __awaiter(this, void 0, void 0, function* () {
                    const persistenceLayer = new DefaultPersistenceLayer_1.DefaultPersistenceLayer(yield createDatastore());
                    yield persistenceLayer.init();
                    const docMeta = DocMetas_1.MockDocMetas.createMockDocMeta();
                    const datastoreMutation = new DatastoreMutation_1.DefaultDatastoreMutation();
                    let writtenDuration = 0;
                    let committedDuration = 0;
                    const before = Date.now();
                    datastoreMutation.written.get().then(() => writtenDuration = Date.now() - before);
                    datastoreMutation.committed.get().then(() => committedDuration = Date.now() - before);
                    yield persistenceLayer.write(fingerprint, docMeta, { datastoreMutation });
                    console.log(`writtenDuration: ${writtenDuration}, committedDuration: ${committedDuration}`);
                    yield persistenceLayer.stop();
                });
            });
            it("Test5: Test an existing firebase store with existing data replicating to a new CloudDatastore.", function () {
                return __awaiter(this, void 0, void 0, function* () {
                    let err;
                    const errorListener = (error) => {
                        console.error("Got error:  ", err);
                        err = error;
                    };
                    const sourcePersistenceLayer = new DefaultPersistenceLayer_1.DefaultPersistenceLayer(new FirebaseDatastore_1.FirebaseDatastore());
                    yield sourcePersistenceLayer.init(errorListener);
                    yield sourcePersistenceLayer.writeDocMeta(DocMetas_1.MockDocMetas.createMockDocMeta(fingerprint));
                    yield sourcePersistenceLayer.stop();
                    const targetPersistenceLayer = new DefaultPersistenceLayer_1.DefaultPersistenceLayer(yield createDatastore());
                    yield targetPersistenceLayer.init(errorListener);
                    yield wait_for_expect_1.default(() => __awaiter(this, void 0, void 0, function* () {
                        const dataDir = PolarDataDir_1.PolarDataDir.get();
                        const path = FilePaths_1.FilePaths.join(dataDir, fingerprint, 'state.json');
                        chai_1.assert.ok(yield Files_1.Files.existsAsync(path), "Path does not exist: " + path);
                    }));
                    yield targetPersistenceLayer.stop();
                    chai_1.assert.ok(err === undefined, "Received an error: " + err);
                });
            });
            it("Test6: Verify unsubscribe works.", function () {
                return __awaiter(this, void 0, void 0, function* () {
                    yield Files_1.Files.removeDirectoryRecursivelyAsync(PolarDataDir_1.PolarDataDir.get());
                    const targetPersistenceLayer = new DefaultPersistenceLayer_1.DefaultPersistenceLayer(yield createDatastore());
                    yield targetPersistenceLayer.init();
                    yield Datastores_1.Datastores.purge(targetPersistenceLayer.datastore);
                    const docMetaFiles = yield targetPersistenceLayer.getDocMetaRefs();
                    chai_1.assert.equal(docMetaFiles.length, 0);
                    let gotEventAfterUnsubscribe = false;
                    let unsubscribed = false;
                    const snapshotResult = yield targetPersistenceLayer.snapshot((event) => __awaiter(this, void 0, void 0, function* () {
                        console.log("GOT AN EVENT with consistency: " + event.consistency, event);
                        if (event.consistency !== 'committed') {
                            return;
                        }
                        if (!unsubscribed) {
                            return;
                        }
                        gotEventAfterUnsubscribe = true;
                    }));
                    snapshotResult.unsubscribe();
                    unsubscribed = true;
                    const sidePersistenceLayer = new DefaultPersistenceLayer_1.DefaultPersistenceLayer(new FirebaseDatastore_1.FirebaseDatastore());
                    yield sidePersistenceLayer.init();
                    yield sidePersistenceLayer.writeDocMeta(DocMetas_1.MockDocMetas.createMockDocMeta());
                    yield sidePersistenceLayer.stop();
                    yield Promises_1.Promises.waitFor(5000);
                    chai_1.assert.ok(gotEventAfterUnsubscribe === false, "Nope.. we still got the event");
                });
            });
            xit("Test7: Test a remote write and a local replication to disk", function () {
                return __awaiter(this, void 0, void 0, function* () {
                    const sourcePersistenceLayer = new DefaultPersistenceLayer_1.DefaultPersistenceLayer(new FirebaseDatastore_1.FirebaseDatastore());
                    yield sourcePersistenceLayer.init();
                    const targetPersistenceLayer = new DefaultPersistenceLayer_1.DefaultPersistenceLayer(yield createDatastore());
                    yield targetPersistenceLayer.init();
                    const docMeta = DocMetas_1.MockDocMetas.createWithinInitialPagemarks(fingerprint, 14);
                    yield sourcePersistenceLayer.write(fingerprint, docMeta);
                    yield wait_for_expect_1.default(() => __awaiter(this, void 0, void 0, function* () {
                        const dataDir = PolarDataDir_1.PolarDataDir.get();
                        const path = FilePaths_1.FilePaths.join(dataDir, '0x001', 'state.json');
                        chai_1.assert.ok(yield Files_1.Files.existsAsync(path), 'Path for fingerprint never appeared');
                    }));
                    yield sourcePersistenceLayer.stop();
                    yield targetPersistenceLayer.stop();
                });
            });
        });
        DatastoreTester_1.DatastoreTester.test(createDatastore, false);
    })).catch(err => console.error(err));
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbnRlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxRUFBZ0U7QUFDaEUsb0VBQStEO0FBQy9ELHdGQUFtRjtBQUNuRix5REFBd0Q7QUFDeEQsK0JBQTRCO0FBQzVCLHdFQUFtRTtBQUNuRSxxREFBZ0Q7QUFDaEQsNEVBQXVFO0FBQ3ZFLDZFQUF3RTtBQUN4RSxnRkFBMkU7QUFDM0UsK0RBQTBEO0FBQzFELHVEQUFrRDtBQUNsRCw0RUFBOEU7QUFFOUUsNkRBQXdEO0FBQ3hELDhEQUF5RDtBQUN6RCwrREFBb0U7QUFDcEUscURBQWdEO0FBRWhELHNFQUE0QztBQUU1Qyx1REFBa0Q7QUFFbEQsTUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDO0FBRXRCLGlCQUFPLENBQUMsY0FBYyxFQUFFLENBQUM7QUFFekIsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNuQixLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBRXZCLFNBQWUsZUFBZTs7UUFFMUIsTUFBTSxhQUFhLEdBQUcsSUFBSSw2QkFBYSxFQUFFLENBQUM7UUFDMUMsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLHFDQUFpQixFQUFFLENBQUM7UUFFbEQsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxFQUFFLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUVwRSxNQUFNLG1CQUFtQixHQUFHLElBQUkseUNBQW1CLENBQUMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLENBQUM7UUFFdEYsbUJBQW1CLENBQUMsWUFBWSxHQUFHLEdBQVMsRUFBRTtZQUUxQyxNQUFNLHlCQUFhLENBQUMsR0FBUyxFQUFFO2dCQUUzQixPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7Z0JBRXZDLE1BQU0sV0FB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LENBQUMsQ0FBQztvQkFDcEYsTUFBTSxzQkFBc0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFFcEMsTUFBTSxPQUFPLEdBQUcsdUJBQVksQ0FBQyw0QkFBNEIsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUM7b0JBQzNFLE1BQU0sc0JBQXNCLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQztvQkFFekQsTUFBTSx5QkFBYSxDQUFDLEdBQVMsRUFBRTt3QkFDM0IsTUFBTSxPQUFPLEdBQUcsMkJBQVksQ0FBQyxHQUFHLEVBQUUsQ0FBQzt3QkFDbkMsTUFBTSxJQUFJLEdBQUcscUJBQVMsQ0FBQyxJQUFJLENBQUMsT0FBUSxFQUFFLE9BQU8sRUFBRSxZQUFZLENBQUMsQ0FBQzt3QkFDN0QsYUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLGFBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUscUNBQXFDLENBQUMsQ0FBQztvQkFDcEYsQ0FBQyxDQUFBLENBQUMsQ0FBQztvQkFFSCxNQUFNLHNCQUFzQixDQUFDLElBQUksRUFBRSxDQUFDO29CQUNwQyxNQUFNLHNCQUFzQixDQUFDLElBQUksRUFBRSxDQUFDO2dCQUV4QyxDQUFDO2FBQUEsQ0FBQyxDQUFDO1FBRVAsQ0FBQyxDQUFDLENBQUM7UUFFSCxpQ0FBZSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFFakQsQ0FBQyxDQUFBLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFFeEMsQ0FBQyxDQUFBLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U3BlY3Ryb25SZW5kZXJlcn0gZnJvbSAnLi4vLi4vanMvdGVzdC9TcGVjdHJvblJlbmRlcmVyJztcbmltcG9ydCB7RGlza0RhdGFzdG9yZX0gZnJvbSAnLi4vLi4vanMvZGF0YXN0b3JlL0Rpc2tEYXRhc3RvcmUnO1xuaW1wb3J0IHtEZWZhdWx0UGVyc2lzdGVuY2VMYXllcn0gZnJvbSAnLi4vLi4vanMvZGF0YXN0b3JlL0RlZmF1bHRQZXJzaXN0ZW5jZUxheWVyJztcbmltcG9ydCB7TW9ja0RvY01ldGFzfSBmcm9tICcuLi8uLi9qcy9tZXRhZGF0YS9Eb2NNZXRhcyc7XG5pbXBvcnQge2Fzc2VydH0gZnJvbSBcImNoYWlcIjtcbmltcG9ydCB7RGF0YXN0b3JlVGVzdGVyfSBmcm9tICcuLi8uLi9qcy9kYXRhc3RvcmUvRGF0YXN0b3JlVGVzdGVyJztcbmltcG9ydCB7UHJvbWlzZXN9IGZyb20gJy4uLy4uL2pzL3V0aWwvUHJvbWlzZXMnO1xuaW1wb3J0IHtGaXJlYmFzZURhdGFzdG9yZX0gZnJvbSAnLi4vLi4vanMvZGF0YXN0b3JlL0ZpcmViYXNlRGF0YXN0b3JlJztcbmltcG9ydCB7RmlyZWJhc2VUZXN0UnVubmVyfSBmcm9tICcuLi8uLi9qcy9maXJlYmFzZS9GaXJlYmFzZVRlc3RSdW5uZXInO1xuaW1wb3J0IHtDbG91ZEF3YXJlRGF0YXN0b3JlfSBmcm9tICcuLi8uLi9qcy9kYXRhc3RvcmUvQ2xvdWRBd2FyZURhdGFzdG9yZSc7XG5pbXBvcnQge0ZpbGVQYXRoc30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL0ZpbGVQYXRocyc7XG5pbXBvcnQge0ZpbGVzfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvRmlsZXMnO1xuaW1wb3J0IHtEZWZhdWx0RGF0YXN0b3JlTXV0YXRpb259IGZyb20gJy4uLy4uL2pzL2RhdGFzdG9yZS9EYXRhc3RvcmVNdXRhdGlvbic7XG5pbXBvcnQge0RvY0luZm99IGZyb20gJy4uLy4uL2pzL21ldGFkYXRhL0RvY0luZm8nO1xuaW1wb3J0IHtQb2xhckRhdGFEaXJ9IGZyb20gJy4uLy4uL2pzL3Rlc3QvUG9sYXJEYXRhRGlyJztcbmltcG9ydCB7RGF0YXN0b3Jlc30gZnJvbSAnLi4vLi4vanMvZGF0YXN0b3JlL0RhdGFzdG9yZXMnO1xuaW1wb3J0IHtBU1lOQ19OVUxMX0ZVTkNUSU9OfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvRnVuY3Rpb25zJztcbmltcG9ydCB7TG9nZ2luZ30gZnJvbSAnLi4vLi4vanMvbG9nZ2VyL0xvZ2dpbmcnO1xuaW1wb3J0IHtQZXJzaXN0ZW5jZUxheWVyfSBmcm9tICcuLi8uLi9qcy9kYXRhc3RvcmUvUGVyc2lzdGVuY2VMYXllcic7XG5pbXBvcnQgd2FpdEZvckV4cGVjdCBmcm9tICd3YWl0LWZvci1leHBlY3QnO1xuaW1wb3J0IHtJRG9jSW5mb30gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvbWV0YWRhdGEvSURvY0luZm9cIjtcbmltcG9ydCB7TGF0Y2h9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL3V0aWwvTGF0Y2hcIjtcblxuY29uc3QgVElNRU9VVCA9IDMwMDAwO1xuXG5Mb2dnaW5nLmluaXRGb3JUZXN0aW5nKCk7XG5cbm1vY2hhLnNldHVwKCdiZGQnKTtcbm1vY2hhLnRpbWVvdXQoVElNRU9VVCk7XG5cbmFzeW5jIGZ1bmN0aW9uIGNyZWF0ZURhdGFzdG9yZSgpIHtcblxuICAgIGNvbnN0IGRpc2tEYXRhc3RvcmUgPSBuZXcgRGlza0RhdGFzdG9yZSgpO1xuICAgIGNvbnN0IGZpcmViYXNlRGF0YXN0b3JlID0gbmV3IEZpcmViYXNlRGF0YXN0b3JlKCk7XG5cbiAgICBhd2FpdCBQcm9taXNlLmFsbChbZGlza0RhdGFzdG9yZS5pbml0KCksIGZpcmViYXNlRGF0YXN0b3JlLmluaXQoKV0pO1xuXG4gICAgY29uc3QgY2xvdWRBd2FyZURhdGFzdG9yZSA9IG5ldyBDbG91ZEF3YXJlRGF0YXN0b3JlKGRpc2tEYXRhc3RvcmUsIGZpcmViYXNlRGF0YXN0b3JlKTtcblxuICAgIGNsb3VkQXdhcmVEYXRhc3RvcmUuc2h1dGRvd25Ib29rID0gYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgIGF3YWl0IHdhaXRGb3JFeHBlY3QoYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNoZWNraW5nIGNvbnNpc3RlbmN5Li4uXCIpO1xuXG4gICAgICAgICAgICBjb25zdCBjb25zaXN0ZW5jeSA9IGF3YWl0IERhdGFzdG9yZXMuY2hlY2tDb25zaXN0ZW5jeShkaXNrRGF0YXN0b3JlLCBmaXJlYmFzZURhdGFzdG9yZSk7XG5cbiAgICAgICAgICAgIGlmICghIGNvbnNpc3RlbmN5LmNvbnNpc3RlbnQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZpbGVzeXN0ZW1zIGFyZSBOT1QgY29uc2lzdGVudDogXCIsIGNvbnNpc3RlbmN5Lm1hbmlmZXN0MCwgY29uc2lzdGVuY3kubWFuaWZlc3QxKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYXNzZXJ0Lm9rKGNvbnNpc3RlbmN5LmNvbnNpc3RlbnQsIFwiRGF0YXN0b3JlcyBhcmUgbm90IGNvbnNpc3RlbnRcIik7XG5cbiAgICAgICAgfSwgVElNRU9VVCk7XG5cbiAgICB9O1xuXG4gICAgcmV0dXJuIGNsb3VkQXdhcmVEYXRhc3RvcmU7XG59XG5cblNwZWN0cm9uUmVuZGVyZXIucnVuKGFzeW5jIChzdGF0ZSkgPT4ge1xuXG4gICAgbmV3IEZpcmViYXNlVGVzdFJ1bm5lcihzdGF0ZSkucnVuKGFzeW5jICgpID0+IHtcblxuICAgICAgICBhd2FpdCBQb2xhckRhdGFEaXIudXNlRnJlc2hEaXJlY3RvcnkoJy50ZXN0LWZpcmViYXNlLWNsb3VkLWF3YXJlLWRhdGFzdG9yZScpO1xuXG4gICAgICAgIGNvbnN0IGZpbmdlcnByaW50ID0gXCIweDAwMVwiO1xuXG4gICAgICAgIC8vIEZJWE1FOiB0aGVyZSdzIGFub3RiaGVyIGlzc3VlIGhlcmUgYW5kIHRoYXQgaW52b2x2ZXMgdGhlIEZJUlNUIHN5bmMuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIHdlIGhhdmUgdG8gZGV0ZWN0IHRoYXQgdGhlcmUgYXJlIGZpbGVzIE9OIERJU0sgYW5kIG5vdCBpbiB0aGUgY2xvdWQsXG4gICAgICAgIC8vIHRoZW4gdHJhbnNmZXIgdGhlbSB0byB0aGUgY2xvdWQuICBBdCB0aGF0IG9pbnQgdGhlIHVzZXIgaXMgc3luYydkXG4gICAgICAgIC8vIHdpdGggdGhlIGNsb3VkLlxuXG4gICAgICAgIC8vIEZJWE1FOiBzdGF0ZXMgdGhhdCBuZWVkIHRvIGJlIGhhbmRsZWQgaW4gVUkuLi4uXG4gICAgICAgIC8vXG4gICAgICAgIC8vIC0gTUVSR0Ugc2hvdWxkIGJlIHRoZSBpZGVhbCBzaXR1YXRpb24gTk9UIHRyYW5zZmVyLi4uIHRoaXMgaXMgZWFzaWVyXG4gICAgICAgIC8vICAgdG8gaW1wbGVtZW50LlxuXG5cbiAgICAgICAgZGVzY3JpYmUoJ0Nsb3VkIGRhdGFzdG9yZSB0ZXN0cycsIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICBiZWZvcmVFYWNoKGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgdHJ5IHtcblxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIj09PT0gQkVHSU4gYmVmb3JlRWFjaDogXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVtb3ZpbmcgZmlsZXMgZnJvbTogXCIgKyBQb2xhckRhdGFEaXIuZ2V0KCkpO1xuXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IEZpbGVzLnJlbW92ZURpcmVjdG9yeVJlY3Vyc2l2ZWx5QXN5bmMoUG9sYXJEYXRhRGlyLmdldCgpISk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJJbml0aWFsaXppbmcgZmlyZWJhc2UgZGF0YXN0b3JlLi4uXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpcmViYXNlRGF0YXN0b3JlID0gbmV3IEZpcmViYXNlRGF0YXN0b3JlKCk7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IGZpcmViYXNlRGF0YXN0b3JlLmluaXQoKTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkluaXRpYWxpemluZyBmaXJlYmFzZSBkYXRhc3RvcmUuLi5kb25lXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUHVyZ2luZyBmaXJlYmFzZSBkYXRhc3RvcmUuLi5cIik7XG5cbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgRGF0YXN0b3Jlcy5wdXJnZShmaXJlYmFzZURhdGFzdG9yZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdXJnZUV2ZW50ID0+IGNvbnNvbGUubG9nKFwiUHVyZ2VkOiBcIiwgcHVyZ2VFdmVudCkpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUHVyZ2luZyBmaXJlYmFzZSBkYXRhc3RvcmUuLi5kb25lXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IGZpcmViYXNlRGF0YXN0b3JlLnN0b3AoKTtcblxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkNhdWdodCBleGNlcHRpb24gaW4gYmVmb3JlRWFjaDogXCIsIGUpO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiPT09PSBFTkQgYmVmb3JlRWFjaFwiKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0eXBlIENvbnNpc3RlbmN5VGVzdEZ1bmN0aW9uID0gKHBlcnNpc3RlbmNlTGF5ZXI6IFBlcnNpc3RlbmNlTGF5ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3VkQXdhcmVEYXRhc3RvcmU6IENsb3VkQXdhcmVEYXRhc3RvcmUpID0+IFByb21pc2U8dm9pZD47XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVGhpcyB3aWxsIGluaXQgdGhlIGNsb3VkIGRhdGFzdG9yZSwgdGhlbiB3YWl0IGZvciB0aGVtIHRvIGJlY29tZVxuICAgICAgICAgICAgICogY29uc2lzdGVudCwgdGhlbiB3ZSBydW4gdGhlIHRlc3QgZnVuY3Rpb24gdG8gdmVyaWZ5IHRoYXQgdGhlXG4gICAgICAgICAgICAgKiBkYXRhc3RvcmUgaXMgdmFsaWQuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGFzeW5jIGZ1bmN0aW9uIHRlc3RGb3JDb25zaXN0ZW5jeSh0ZXN0RnVuY3Rpb246IENvbnNpc3RlbmN5VGVzdEZ1bmN0aW9uID0gQVNZTkNfTlVMTF9GVU5DVElPTikge1xuXG4gICAgICAgICAgICAgICAgY29uc3QgY2xvdWRBd2FyZURhdGFzdG9yZSA9IGF3YWl0IGNyZWF0ZURhdGFzdG9yZSgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHBlcnNpc3RlbmNlTGF5ZXIgPSBuZXcgRGVmYXVsdFBlcnNpc3RlbmNlTGF5ZXIoY2xvdWRBd2FyZURhdGFzdG9yZSk7XG5cbiAgICAgICAgICAgICAgICB0cnkge1xuXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHBlcnNpc3RlbmNlTGF5ZXIuaW5pdCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHdhaXRGb3JFeHBlY3QoYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb25zaXN0ZW5jeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gYXdhaXQgRGF0YXN0b3Jlcy5jaGVja0NvbnNpc3RlbmN5KGNsb3VkQXdhcmVEYXRhc3RvcmUubG9jYWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvdWRBd2FyZURhdGFzdG9yZS5jbG91ZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2VydC5vayhjb25zaXN0ZW5jeS5jb25zaXN0ZW50KTtcblxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0ZXN0RnVuY3Rpb24ocGVyc2lzdGVuY2VMYXllciwgY2xvdWRBd2FyZURhdGFzdG9yZSk7XG5cbiAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCBwZXJzaXN0ZW5jZUxheWVyLnN0b3AoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaXQoXCJUZXN0ODogU3luYyB3aXRoIGV4dHJhIGZpbGVzIGluIHRoZSBsb2NhbCBzdG9yZVwiLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFzdG9yZSA9IG5ldyBEaXNrRGF0YXN0b3JlKCk7XG4gICAgICAgICAgICAgICAgYXdhaXQgZGF0YXN0b3JlLmluaXQoKTtcblxuICAgICAgICAgICAgICAgIGF3YWl0IGRhdGFzdG9yZS53cml0ZURvY01ldGEoTW9ja0RvY01ldGFzLmNyZWF0ZU1vY2tEb2NNZXRhKCcweDAwMDQnKSk7XG4gICAgICAgICAgICAgICAgYXdhaXQgZGF0YXN0b3JlLndyaXRlRG9jTWV0YShNb2NrRG9jTWV0YXMuY3JlYXRlTW9ja0RvY01ldGEoJzB4MDAwNScpKTtcbiAgICAgICAgICAgICAgICBhd2FpdCBkYXRhc3RvcmUuc3RvcCgpO1xuXG4gICAgICAgICAgICAgICAgYXdhaXQgdGVzdEZvckNvbnNpc3RlbmN5KGFzeW5jIChwZXJzaXN0ZW5jZUxheWVyLCBjbG91ZEF3YXJlRGF0YXN0b3JlKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBjdXJyZW50RmluZ2VycHJpbnQgb2YgWycweDAwMDQnLCAnMHgwMDA1J10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2VydC5vayhhd2FpdCBjbG91ZEF3YXJlRGF0YXN0b3JlLmxvY2FsLmNvbnRhaW5zKGN1cnJlbnRGaW5nZXJwcmludCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXJ0Lm9rKGF3YWl0IGNsb3VkQXdhcmVEYXRhc3RvcmUuY2xvdWQuY29udGFpbnMoY3VycmVudEZpbmdlcnByaW50KSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaXQoXCJUZXN0OTogU3luYyB3aXRoIGV4dHJhIGZpbGVzIGluIHRoZSBmaXJlYmFzZSBzdG9yZVwiLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFzdG9yZSA9IG5ldyBGaXJlYmFzZURhdGFzdG9yZSgpO1xuICAgICAgICAgICAgICAgIGF3YWl0IGRhdGFzdG9yZS5pbml0KCk7XG5cbiAgICAgICAgICAgICAgICBhd2FpdCBkYXRhc3RvcmUud3JpdGVEb2NNZXRhKE1vY2tEb2NNZXRhcy5jcmVhdGVNb2NrRG9jTWV0YSgnMHgwMDA0JykpO1xuICAgICAgICAgICAgICAgIGF3YWl0IGRhdGFzdG9yZS53cml0ZURvY01ldGEoTW9ja0RvY01ldGFzLmNyZWF0ZU1vY2tEb2NNZXRhKCcweDAwMDUnKSk7XG4gICAgICAgICAgICAgICAgYXdhaXQgZGF0YXN0b3JlLnN0b3AoKTtcblxuICAgICAgICAgICAgICAgIGF3YWl0IHRlc3RGb3JDb25zaXN0ZW5jeShhc3luYyAocGVyc2lzdGVuY2VMYXllciwgY2xvdWRBd2FyZURhdGFzdG9yZSkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgY3VycmVudEZpbmdlcnByaW50IG9mIFsnMHgwMDA0JywgJzB4MDAwNSddKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NlcnQub2soYXdhaXQgY2xvdWRBd2FyZURhdGFzdG9yZS5sb2NhbC5jb250YWlucyhjdXJyZW50RmluZ2VycHJpbnQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2VydC5vayhhd2FpdCBjbG91ZEF3YXJlRGF0YXN0b3JlLmNsb3VkLmNvbnRhaW5zKGN1cnJlbnRGaW5nZXJwcmludCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGl0KFwiVGVzdDE6IG51bGwgdGVzdCB0byBtYWtlIHN1cmUgd2UgaGF2ZSBubyBkb2N1bWVudHMgb24gc3RhcnR1cFwiLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHBlcnNpc3RlbmNlTGF5ZXIgPSBuZXcgRGVmYXVsdFBlcnNpc3RlbmNlTGF5ZXIoYXdhaXQgY3JlYXRlRGF0YXN0b3JlKCkpO1xuXG4gICAgICAgICAgICAgICAgYXdhaXQgcGVyc2lzdGVuY2VMYXllci5pbml0KCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBkb2NNZXRhRmlsZXMgPSBhd2FpdCBwZXJzaXN0ZW5jZUxheWVyLmdldERvY01ldGFSZWZzKCk7XG4gICAgICAgICAgICAgICAgYXNzZXJ0LmVxdWFsKGRvY01ldGFGaWxlcy5sZW5ndGgsIDApO1xuXG4gICAgICAgICAgICAgICAgYXdhaXQgcGVyc2lzdGVuY2VMYXllci5zdG9wKCk7XG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpdChcIlRlc3QyOiBCYXNpYyBzeW5jaHJvbml6YXRpb24gdGVzdHNcIiwgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBmaXJzdCBwdXJnZSB0aGUgZmlyZWJhc2UgZGF0YXN0b3JlXG5cbiAgICAgICAgICAgICAgICBjb25zdCBmaXJlYmFzZURhdGFzdG9yZSA9IG5ldyBGaXJlYmFzZURhdGFzdG9yZSgpO1xuXG4gICAgICAgICAgICAgICAgYXdhaXQgZmlyZWJhc2VEYXRhc3RvcmUuaW5pdCgpO1xuXG4gICAgICAgICAgICAgICAgYXdhaXQgRGF0YXN0b3Jlcy5wdXJnZShmaXJlYmFzZURhdGFzdG9yZSk7XG5cbiAgICAgICAgICAgICAgICAvLyB0aGVuIHdyaXRlIGFuIGluaXRpYWwgZG9jIHRvIGl0Li4uXG5cbiAgICAgICAgICAgICAgICBjb25zdCBmaXJlc3RvcmVQZXJzaXN0ZW5jZUxheWVyID0gbmV3IERlZmF1bHRQZXJzaXN0ZW5jZUxheWVyKGZpcmViYXNlRGF0YXN0b3JlKTtcblxuICAgICAgICAgICAgICAgIGF3YWl0IGZpcmVzdG9yZVBlcnNpc3RlbmNlTGF5ZXIud3JpdGVEb2NNZXRhKE1vY2tEb2NNZXRhcy5jcmVhdGVNb2NrRG9jTWV0YSgnMHgwMDEnKSk7XG5cbiAgICAgICAgICAgICAgICAvLyBub3cgc3RhcnR1cCBhIG5ldyBjbG91ZCBwZXJzaXN0ZW5jZSBsYXllciBhbmQgbWFrZSBzdXJlIHdlXG4gICAgICAgICAgICAgICAgLy8gZ2V0IHRoZSBkb2MgaW4gZmlyZWJhc2Ugd3JpdHRlbiBsb2NhbGx5LlxuXG4gICAgICAgICAgICAgICAgY29uc3QgY2xvdWRBd2FyZURhdGFzdG9yZSA9IGF3YWl0IGNyZWF0ZURhdGFzdG9yZSgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHBlcnNpc3RlbmNlTGF5ZXIgPSBuZXcgRGVmYXVsdFBlcnNpc3RlbmNlTGF5ZXIoY2xvdWRBd2FyZURhdGFzdG9yZSk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBpbml0aWFsRG9jTGF0Y2ggPSBuZXcgTGF0Y2g8Ym9vbGVhbj4oKTtcbiAgICAgICAgICAgICAgICBjb25zdCBleHRlcm5hbGx5V3JpdHRlbkRvY0xhdGNoID0gbmV3IExhdGNoPGJvb2xlYW4+KCk7XG5cbiAgICAgICAgICAgICAgICBjbG91ZEF3YXJlRGF0YXN0b3JlLmFkZERvY01ldGFTbmFwc2hvdEV2ZW50TGlzdGVuZXIoYXN5bmMgZG9jTWV0YVNuYXBzaG90RXZlbnQgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZG9jTXV0YXRpb24gb2YgZG9jTWV0YVNuYXBzaG90RXZlbnQuZG9jTWV0YU11dGF0aW9ucykge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZG9jTXV0YXRpb24uZmluZ2VycHJpbnQgPT09ICcweDAwMScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsRG9jTGF0Y2gucmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRvY011dGF0aW9uLmZpbmdlcnByaW50ID09PSAnMHgwMDInKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh0ZXJuYWxseVdyaXR0ZW5Eb2NMYXRjaC5yZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgYXdhaXQgcGVyc2lzdGVuY2VMYXllci5pbml0KCk7XG5cbiAgICAgICAgICAgICAgICBhd2FpdCBpbml0aWFsRG9jTGF0Y2guZ2V0KCk7XG5cbiAgICAgICAgICAgICAgICBhd2FpdCBmaXJlc3RvcmVQZXJzaXN0ZW5jZUxheWVyLndyaXRlRG9jTWV0YShNb2NrRG9jTWV0YXMuY3JlYXRlTW9ja0RvY01ldGEoJzB4MDAyJykpO1xuXG4gICAgICAgICAgICAgICAgYXdhaXQgZXh0ZXJuYWxseVdyaXR0ZW5Eb2NMYXRjaC5nZXQoKTtcblxuICAgICAgICAgICAgICAgIGF3YWl0IHdhaXRGb3JFeHBlY3QoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBhc3NlcnQub2soYXdhaXQgcGVyc2lzdGVuY2VMYXllci5jb250YWlucygnMHgwMDInKSwgXCJEb2VzIG5vdCBjb250YWluIHNlY29uZCBkb2NcIik7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIldPUktFRFwiKTtcblxuICAgICAgICAgICAgICAgIGF3YWl0IHBlcnNpc3RlbmNlTGF5ZXIuc3RvcCgpO1xuICAgICAgICAgICAgICAgIGF3YWl0IGZpcmVzdG9yZVBlcnNpc3RlbmNlTGF5ZXIuc3RvcCgpO1xuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaXQoXCJUZXN0MzogV3JpdGUgYSBiYXNpYyBkb2Mgd2l0aCBzeW5jaHJvbml6YXRpb24gbGlzdGVuZXJcIiwgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjbG91ZEF3YXJlRGF0YXN0b3JlID0gYXdhaXQgY3JlYXRlRGF0YXN0b3JlKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgcGVyc2lzdGVuY2VMYXllciA9IG5ldyBEZWZhdWx0UGVyc2lzdGVuY2VMYXllcihjbG91ZEF3YXJlRGF0YXN0b3JlKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGxhdGNoMCA9IG5ldyBMYXRjaDxib29sZWFuPigpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxhdGNoMSA9IG5ldyBMYXRjaDxib29sZWFuPigpO1xuXG4gICAgICAgICAgICAgICAgY2xvdWRBd2FyZURhdGFzdG9yZS5hZGRTeW5jaHJvbml6YXRpb25FdmVudExpc3RlbmVyKGRvY01ldGFTbmFwc2hvdEV2ZW50ID0+IHtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoZG9jTWV0YVNuYXBzaG90RXZlbnQuY29uc2lzdGVuY3kgIT09ICdjb21taXR0ZWQnICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBkb2NNZXRhTXV0YXRpb24gb2YgZG9jTWV0YVNuYXBzaG90RXZlbnQuZG9jTWV0YU11dGF0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRvY01ldGFNdXRhdGlvbi5maW5nZXJwcmludCA9PT0gJzB4MDAyJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhdGNoMC5yZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRvY01ldGFNdXRhdGlvbi5maW5nZXJwcmludCA9PT0gJzB4MDAzJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhdGNoMS5yZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGF3YWl0IHBlcnNpc3RlbmNlTGF5ZXIuaW5pdCgpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZG9jTWV0YSA9IE1vY2tEb2NNZXRhcy5jcmVhdGVNb2NrRG9jTWV0YSgnMHgwMDInKTtcbiAgICAgICAgICAgICAgICBhd2FpdCBwZXJzaXN0ZW5jZUxheWVyLndyaXRlRG9jTWV0YShkb2NNZXRhKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGZpcmViYXNlUGVyc2lzdGVuY2VMYXllciA9IG5ldyBEZWZhdWx0UGVyc2lzdGVuY2VMYXllcihuZXcgRmlyZWJhc2VEYXRhc3RvcmUoKSk7XG4gICAgICAgICAgICAgICAgYXdhaXQgZmlyZWJhc2VQZXJzaXN0ZW5jZUxheWVyLmluaXQoKTtcbiAgICAgICAgICAgICAgICBhd2FpdCBmaXJlYmFzZVBlcnNpc3RlbmNlTGF5ZXIud3JpdGVEb2NNZXRhKE1vY2tEb2NNZXRhcy5jcmVhdGVNb2NrRG9jTWV0YSgnMHgwMDMnKSk7XG5cbiAgICAgICAgICAgICAgICBhd2FpdCBsYXRjaDAuZ2V0KCk7XG4gICAgICAgICAgICAgICAgYXdhaXQgbGF0Y2gxLmdldCgpO1xuXG4gICAgICAgICAgICAgICAgYXdhaXQgcGVyc2lzdGVuY2VMYXllci5zdG9wKCk7XG4gICAgICAgICAgICAgICAgYXdhaXQgZmlyZWJhc2VQZXJzaXN0ZW5jZUxheWVyLnN0b3AoKTtcblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGl0KFwiVGVzdDQ6IFdyaXRlIGEgYmFzaWMgZG9jXCIsIGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgY29uc3QgcGVyc2lzdGVuY2VMYXllciA9IG5ldyBEZWZhdWx0UGVyc2lzdGVuY2VMYXllcihhd2FpdCBjcmVhdGVEYXRhc3RvcmUoKSk7XG5cbiAgICAgICAgICAgICAgICBhd2FpdCBwZXJzaXN0ZW5jZUxheWVyLmluaXQoKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGRvY01ldGEgPSBNb2NrRG9jTWV0YXMuY3JlYXRlTW9ja0RvY01ldGEoKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFzdG9yZU11dGF0aW9uID0gbmV3IERlZmF1bHREYXRhc3RvcmVNdXRhdGlvbjxJRG9jSW5mbz4oKTtcblxuICAgICAgICAgICAgICAgIGxldCB3cml0dGVuRHVyYXRpb246IG51bWJlciA9IDA7XG4gICAgICAgICAgICAgICAgbGV0IGNvbW1pdHRlZER1cmF0aW9uOiBudW1iZXIgPSAwO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgYmVmb3JlID0gRGF0ZS5ub3coKTtcblxuICAgICAgICAgICAgICAgIGRhdGFzdG9yZU11dGF0aW9uLndyaXR0ZW4uZ2V0KCkudGhlbigoKSA9PiB3cml0dGVuRHVyYXRpb24gPSBEYXRlLm5vdygpIC0gYmVmb3JlKTtcbiAgICAgICAgICAgICAgICBkYXRhc3RvcmVNdXRhdGlvbi5jb21taXR0ZWQuZ2V0KCkudGhlbigoKSA9PiBjb21taXR0ZWREdXJhdGlvbiA9IERhdGUubm93KCkgLSBiZWZvcmUpO1xuXG4gICAgICAgICAgICAgICAgYXdhaXQgcGVyc2lzdGVuY2VMYXllci53cml0ZShmaW5nZXJwcmludCwgZG9jTWV0YSwge2RhdGFzdG9yZU11dGF0aW9ufSk7XG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgd3JpdHRlbkR1cmF0aW9uOiAke3dyaXR0ZW5EdXJhdGlvbn0sIGNvbW1pdHRlZER1cmF0aW9uOiAke2NvbW1pdHRlZER1cmF0aW9ufWApO1xuXG4gICAgICAgICAgICAgICAgYXdhaXQgcGVyc2lzdGVuY2VMYXllci5zdG9wKCk7XG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpdChcIlRlc3Q1OiBUZXN0IGFuIGV4aXN0aW5nIGZpcmViYXNlIHN0b3JlIHdpdGggZXhpc3RpbmcgZGF0YSByZXBsaWNhdGluZyB0byBhIG5ldyBDbG91ZERhdGFzdG9yZS5cIiwgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICBsZXQgZXJyOiBFcnJvciB8IHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yTGlzdGVuZXIgPSAoZXJyb3I6IEVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJHb3QgZXJyb3I6ICBcIiwgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgZXJyID0gZXJyb3I7XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHNvdXJjZVBlcnNpc3RlbmNlTGF5ZXIgPSBuZXcgRGVmYXVsdFBlcnNpc3RlbmNlTGF5ZXIobmV3IEZpcmViYXNlRGF0YXN0b3JlKCkpO1xuICAgICAgICAgICAgICAgIGF3YWl0IHNvdXJjZVBlcnNpc3RlbmNlTGF5ZXIuaW5pdChlcnJvckxpc3RlbmVyKTtcbiAgICAgICAgICAgICAgICBhd2FpdCBzb3VyY2VQZXJzaXN0ZW5jZUxheWVyLndyaXRlRG9jTWV0YShNb2NrRG9jTWV0YXMuY3JlYXRlTW9ja0RvY01ldGEoZmluZ2VycHJpbnQpKTtcbiAgICAgICAgICAgICAgICBhd2FpdCBzb3VyY2VQZXJzaXN0ZW5jZUxheWVyLnN0b3AoKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldFBlcnNpc3RlbmNlTGF5ZXIgPSBuZXcgRGVmYXVsdFBlcnNpc3RlbmNlTGF5ZXIoYXdhaXQgY3JlYXRlRGF0YXN0b3JlKCkpO1xuXG4gICAgICAgICAgICAgICAgYXdhaXQgdGFyZ2V0UGVyc2lzdGVuY2VMYXllci5pbml0KGVycm9yTGlzdGVuZXIpO1xuXG4gICAgICAgICAgICAgICAgYXdhaXQgd2FpdEZvckV4cGVjdChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFEaXIgPSBQb2xhckRhdGFEaXIuZ2V0KCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhdGggPSBGaWxlUGF0aHMuam9pbihkYXRhRGlyISwgZmluZ2VycHJpbnQsICdzdGF0ZS5qc29uJyk7XG4gICAgICAgICAgICAgICAgICAgIGFzc2VydC5vayhhd2FpdCBGaWxlcy5leGlzdHNBc3luYyhwYXRoKSwgXCJQYXRoIGRvZXMgbm90IGV4aXN0OiBcIiArIHBhdGgpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgYXdhaXQgdGFyZ2V0UGVyc2lzdGVuY2VMYXllci5zdG9wKCk7XG5cbiAgICAgICAgICAgICAgICAvLyB2ZXJpZnkgdGhhdCB3ZSBoYXZlIHJlY2VpdmVkIG5vIGVycm9ycy5cbiAgICAgICAgICAgICAgICBhc3NlcnQub2soZXJyID09PSB1bmRlZmluZWQsIFwiUmVjZWl2ZWQgYW4gZXJyb3I6IFwiICsgZXJyKTtcblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGl0KFwiVGVzdDY6IFZlcmlmeSB1bnN1YnNjcmliZSB3b3Jrcy5cIiwgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICBhd2FpdCBGaWxlcy5yZW1vdmVEaXJlY3RvcnlSZWN1cnNpdmVseUFzeW5jKFBvbGFyRGF0YURpci5nZXQoKSEpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0UGVyc2lzdGVuY2VMYXllciA9IG5ldyBEZWZhdWx0UGVyc2lzdGVuY2VMYXllcihhd2FpdCBjcmVhdGVEYXRhc3RvcmUoKSk7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGFyZ2V0UGVyc2lzdGVuY2VMYXllci5pbml0KCk7XG5cbiAgICAgICAgICAgICAgICBhd2FpdCBEYXRhc3RvcmVzLnB1cmdlKHRhcmdldFBlcnNpc3RlbmNlTGF5ZXIuZGF0YXN0b3JlKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGRvY01ldGFGaWxlcyA9IGF3YWl0IHRhcmdldFBlcnNpc3RlbmNlTGF5ZXIuZ2V0RG9jTWV0YVJlZnMoKTtcbiAgICAgICAgICAgICAgICBhc3NlcnQuZXF1YWwoZG9jTWV0YUZpbGVzLmxlbmd0aCwgMCk7XG5cbiAgICAgICAgICAgICAgICBsZXQgZ290RXZlbnRBZnRlclVuc3Vic2NyaWJlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgbGV0IHVuc3Vic2NyaWJlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgc25hcHNob3RSZXN1bHQgPSBhd2FpdCB0YXJnZXRQZXJzaXN0ZW5jZUxheWVyLnNuYXBzaG90KGFzeW5jIGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJHT1QgQU4gRVZFTlQgd2l0aCBjb25zaXN0ZW5jeTogXCIgKyBldmVudC5jb25zaXN0ZW5jeSwgZXZlbnQpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChldmVudC5jb25zaXN0ZW5jeSAhPT0gJ2NvbW1pdHRlZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICghIHVuc3Vic2NyaWJlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZ290RXZlbnRBZnRlclVuc3Vic2NyaWJlID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgc25hcHNob3RSZXN1bHQudW5zdWJzY3JpYmUhKCk7XG4gICAgICAgICAgICAgICAgdW5zdWJzY3JpYmVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHNpZGVQZXJzaXN0ZW5jZUxheWVyID0gbmV3IERlZmF1bHRQZXJzaXN0ZW5jZUxheWVyKG5ldyBGaXJlYmFzZURhdGFzdG9yZSgpKTtcbiAgICAgICAgICAgICAgICBhd2FpdCBzaWRlUGVyc2lzdGVuY2VMYXllci5pbml0KCk7XG4gICAgICAgICAgICAgICAgYXdhaXQgc2lkZVBlcnNpc3RlbmNlTGF5ZXIud3JpdGVEb2NNZXRhKE1vY2tEb2NNZXRhcy5jcmVhdGVNb2NrRG9jTWV0YSgpKTtcbiAgICAgICAgICAgICAgICBhd2FpdCBzaWRlUGVyc2lzdGVuY2VMYXllci5zdG9wKCk7XG5cbiAgICAgICAgICAgICAgICAvLyBUT0RPOiB1bmZvcnR1bmF0ZWx5LCB3ZSBIQVZFIHRvIHNsZWVwIGhlcmUgYmVjYXVzZSB3ZSdyZVxuICAgICAgICAgICAgICAgIC8vIHdhaXRpbmcgZm9yIGFueSBsYWdnaW5nIGV2ZW50c1xuICAgICAgICAgICAgICAgIGF3YWl0IFByb21pc2VzLndhaXRGb3IoNTAwMCk7XG5cbiAgICAgICAgICAgICAgICBhc3NlcnQub2soZ290RXZlbnRBZnRlclVuc3Vic2NyaWJlID09PSBmYWxzZSwgXCJOb3BlLi4gd2Ugc3RpbGwgZ290IHRoZSBldmVudFwiKTtcblxuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICAgICAgLy8gRklYTUU6IHRoaXMgd29udCcgd29yayB5ZXQgZHVlIHRvIHRoZSBzbmFwc2hvdCBpc3N1ZS5cbiAgICAgICAgICAgIHhpdChcIlRlc3Q3OiBUZXN0IGEgcmVtb3RlIHdyaXRlIGFuZCBhIGxvY2FsIHJlcGxpY2F0aW9uIHRvIGRpc2tcIiwgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBzb3VyY2VQZXJzaXN0ZW5jZUxheWVyID0gbmV3IERlZmF1bHRQZXJzaXN0ZW5jZUxheWVyKG5ldyBGaXJlYmFzZURhdGFzdG9yZSgpKTtcbiAgICAgICAgICAgICAgICBhd2FpdCBzb3VyY2VQZXJzaXN0ZW5jZUxheWVyLmluaXQoKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldFBlcnNpc3RlbmNlTGF5ZXIgPSBuZXcgRGVmYXVsdFBlcnNpc3RlbmNlTGF5ZXIoYXdhaXQgY3JlYXRlRGF0YXN0b3JlKCkpO1xuICAgICAgICAgICAgICAgIGF3YWl0IHRhcmdldFBlcnNpc3RlbmNlTGF5ZXIuaW5pdCgpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZG9jTWV0YSA9IE1vY2tEb2NNZXRhcy5jcmVhdGVXaXRoaW5Jbml0aWFsUGFnZW1hcmtzKGZpbmdlcnByaW50LCAxNCk7XG4gICAgICAgICAgICAgICAgYXdhaXQgc291cmNlUGVyc2lzdGVuY2VMYXllci53cml0ZShmaW5nZXJwcmludCwgZG9jTWV0YSk7XG5cbiAgICAgICAgICAgICAgICBhd2FpdCB3YWl0Rm9yRXhwZWN0KGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YURpciA9IFBvbGFyRGF0YURpci5nZXQoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGF0aCA9IEZpbGVQYXRocy5qb2luKGRhdGFEaXIhLCAnMHgwMDEnLCAnc3RhdGUuanNvbicpO1xuICAgICAgICAgICAgICAgICAgICBhc3NlcnQub2soYXdhaXQgRmlsZXMuZXhpc3RzQXN5bmMocGF0aCksICdQYXRoIGZvciBmaW5nZXJwcmludCBuZXZlciBhcHBlYXJlZCcpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgYXdhaXQgc291cmNlUGVyc2lzdGVuY2VMYXllci5zdG9wKCk7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGFyZ2V0UGVyc2lzdGVuY2VMYXllci5zdG9wKCk7XG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIERhdGFzdG9yZVRlc3Rlci50ZXN0KGNyZWF0ZURhdGFzdG9yZSwgZmFsc2UpO1xuXG4gICAgfSkuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XG5cbn0pO1xuXG5cbiJdfQ==