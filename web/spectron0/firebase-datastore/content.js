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
const DefaultPersistenceLayer_1 = require("../../js/datastore/DefaultPersistenceLayer");
const DocMetas_1 = require("../../js/metadata/DocMetas");
const chai_1 = require("chai");
const DatastoreTester_1 = require("../../js/datastore/DatastoreTester");
const FirebaseDatastore_1 = require("../../js/datastore/FirebaseDatastore");
const FirebaseTestRunner_1 = require("../../js/firebase/FirebaseTestRunner");
const DatastoreMutation_1 = require("../../js/datastore/DatastoreMutation");
const Datastores_1 = require("../../js/datastore/Datastores");
const wait_for_expect_1 = __importDefault(require("wait-for-expect"));
const Logger_1 = require("polar-shared/src/logger/Logger");
const Latch_1 = require("polar-shared/src/util/Latch");
const log = Logger_1.Logger.create();
mocha.setup('bdd');
mocha.timeout(600000);
const fingerprint = "0x001";
SpectronRenderer_1.SpectronRenderer.run((state) => __awaiter(void 0, void 0, void 0, function* () {
    new FirebaseTestRunner_1.FirebaseTestRunner(state).run(() => __awaiter(void 0, void 0, void 0, function* () {
        const firebaseDatastore = new FirebaseDatastore_1.FirebaseDatastore();
        yield firebaseDatastore.init();
        describe('FirebaseDatastore tests', function () {
            xit("Make sure we get events from the datastore", function () {
                return __awaiter(this, void 0, void 0, function* () {
                    let datastore = new FirebaseDatastore_1.FirebaseDatastore();
                    const persistenceLayer = new DefaultPersistenceLayer_1.DefaultPersistenceLayer(datastore);
                    yield persistenceLayer.init();
                    yield Datastores_1.Datastores.purge(datastore, purgeEvent => {
                        log.info("purgeEvent: ", purgeEvent);
                    });
                    yield wait_for_expect_1.default(() => __awaiter(this, void 0, void 0, function* () {
                        const docMetaFiles = yield persistenceLayer.getDocMetaRefs();
                        chai_1.assert.equal(docMetaFiles.length, 0);
                    }));
                    const docMeta = DocMetas_1.MockDocMetas.createWithinInitialPagemarks(fingerprint, 14);
                    const datastoreMutation = new DatastoreMutation_1.DefaultDatastoreMutation();
                    const docReplicationEventListenerCalled = false;
                    yield persistenceLayer.write(fingerprint, docMeta, { datastoreMutation });
                    chai_1.assert.isFalse(docReplicationEventListenerCalled, "No doc replication event listener called");
                    yield wait_for_expect_1.default(() => __awaiter(this, void 0, void 0, function* () {
                        const docMetaFiles = yield persistenceLayer.getDocMetaRefs();
                        chai_1.assert.equal(docMetaFiles.length, 1);
                    }));
                    yield persistenceLayer.stop();
                    datastore = new FirebaseDatastore_1.FirebaseDatastore();
                    const docMutationLatch = new Latch_1.Latch();
                    const docReplicationLatch = new Latch_1.Latch();
                    yield datastore.init();
                    yield docMutationLatch.get();
                    yield docReplicationLatch.get();
                    yield datastore.stop();
                });
            });
            xit("Make sure we get replication events from a second datastore to the first", function () {
                return __awaiter(this, void 0, void 0, function* () {
                    class ReplicationTester {
                        constructor() {
                            this.hasDocReplicationEvent = false;
                        }
                        init() {
                            return __awaiter(this, void 0, void 0, function* () {
                                this.datastore = new FirebaseDatastore_1.FirebaseDatastore();
                                this.persistenceLayer = new DefaultPersistenceLayer_1.DefaultPersistenceLayer(this.datastore);
                                yield this.persistenceLayer.init();
                                return this;
                            });
                        }
                        setup() {
                            return __awaiter(this, void 0, void 0, function* () {
                                return this;
                            });
                        }
                        write() {
                            return __awaiter(this, void 0, void 0, function* () {
                                const docMeta = DocMetas_1.MockDocMetas.createWithinInitialPagemarks(fingerprint, 14);
                                yield this.persistenceLayer.write(fingerprint, docMeta);
                                yield this.persistenceLayer.delete({ fingerprint, docInfo: docMeta.docInfo });
                                return this;
                            });
                        }
                        stop() {
                            return __awaiter(this, void 0, void 0, function* () {
                                yield this.persistenceLayer.stop();
                            });
                        }
                    }
                    const replicationTester0 = yield new ReplicationTester().init();
                    const replicationTester1 = yield new ReplicationTester().init();
                    yield replicationTester0.setup();
                    yield replicationTester1.setup();
                    yield replicationTester1.write();
                    chai_1.assert.ok(replicationTester0.hasDocReplicationEvent, "replicationTester0 failed");
                    chai_1.assert.ok(!replicationTester1.hasDocReplicationEvent, "replicationTester1 failed");
                    yield replicationTester0.stop();
                    yield replicationTester1.stop();
                });
            });
        });
        DatastoreTester_1.DatastoreTester.test(() => __awaiter(void 0, void 0, void 0, function* () { return firebaseDatastore; }), false);
    })).catch(err => console.error(err));
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbnRlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxRUFBZ0U7QUFDaEUsd0ZBQW1GO0FBQ25GLHlEQUF3RDtBQUN4RCwrQkFBNEI7QUFDNUIsd0VBQW1FO0FBQ25FLDRFQUF1RTtBQUN2RSw2RUFBd0U7QUFDeEUsNEVBQThFO0FBRzlFLDhEQUF5RDtBQUN6RCxzRUFBNEM7QUFDNUMsMkRBQXNEO0FBRXRELHVEQUFrRDtBQUVsRCxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFNUIsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNuQixLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBRXRCLE1BQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQztBQUU1QixtQ0FBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBTyxLQUFLLEVBQUUsRUFBRTtJQUVqQyxJQUFJLHVDQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFTLEVBQUU7UUFFekMsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLHFDQUFpQixFQUFFLENBQUM7UUFFbEQsTUFBTSxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUUvQixRQUFRLENBQUMseUJBQXlCLEVBQUU7WUFFaEMsR0FBRyxDQUFDLDRDQUE0QyxFQUFFOztvQkFFOUMsSUFBSSxTQUFTLEdBQUcsSUFBSSxxQ0FBaUIsRUFBRSxDQUFDO29CQUV4QyxNQUFNLGdCQUFnQixHQUFHLElBQUksaURBQXVCLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBRWhFLE1BQU0sZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBRTlCLE1BQU0sdUJBQVUsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxFQUFFO3dCQUMzQyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMs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QUFpQixFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ2hFLE1BQU0sa0JBQWtCLEdBQUcsTUFBTSxJQUFJLGlCQUFpQixFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBRWhFLE1BQU0sa0JBQWtCLENBQUMsS0FBSyxFQUFFLENBQUM7b0JBQ2pDLE1BQU0sa0JBQWtCLENBQUMsS0FBSyxFQUFFLENBQUM7b0JBRWpDLE1BQU0sa0JBQWtCLENBQUMsS0FBSyxFQUFFLENBQUM7b0JBRWpDLGFBQU0sQ0FBQyxFQUFFLENBQUMsa0JBQWtCLENBQUMsc0JBQXNCLEVBQUUsMkJBQTJCLENBQUMsQ0FBQztvQkFDbEYsYUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLHNCQUFzQixFQUFFLDJCQUEyQixDQUFDLENBQUM7b0JBRW5GLE1BQU0sa0JBQWtCLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ2hDLE1BQU0sa0JBQWtCLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBRXBDLENBQUM7YUFBQSxDQUFDLENBQUM7UUFHUCxDQUFDLENBQUMsQ0FBQztRQUVILGlDQUFlLENBQUMsSUFBSSxDQUFDLEdBQVMsRUFBRSxrREFBQyxPQUFBLGlCQUFpQixDQUFBLEdBQUEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUUvRCxDQUFDLENBQUEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUV4QyxDQUFDLENBQUEsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTcGVjdHJvblJlbmRlcmVyfSBmcm9tICcuLi8uLi9qcy90ZXN0L1NwZWN0cm9uUmVuZGVyZXInO1xuaW1wb3J0IHtEZWZhdWx0UGVyc2lzdGVuY2VMYXllcn0gZnJvbSAnLi4vLi4vanMvZGF0YXN0b3JlL0RlZmF1bHRQZXJzaXN0ZW5jZUxheWVyJztcbmltcG9ydCB7TW9ja0RvY01ldGFzfSBmcm9tICcuLi8uLi9qcy9tZXRhZGF0YS9Eb2NNZXRhcyc7XG5pbXBvcnQge2Fzc2VydH0gZnJvbSBcImNoYWlcIjtcbmltcG9ydCB7RGF0YXN0b3JlVGVzdGVyfSBmcm9tICcuLi8uLi9qcy9kYXRhc3RvcmUvRGF0YXN0b3JlVGVzdGVyJztcbmltcG9ydCB7RmlyZWJhc2VEYXRhc3RvcmV9IGZyb20gJy4uLy4uL2pzL2RhdGFzdG9yZS9GaXJlYmFzZURhdGFzdG9yZSc7XG5pbXBvcnQge0ZpcmViYXNlVGVzdFJ1bm5lcn0gZnJvbSAnLi4vLi4vanMvZmlyZWJhc2UvRmlyZWJhc2VUZXN0UnVubmVyJztcbmltcG9ydCB7RGVmYXVsdERhdGFzdG9yZU11dGF0aW9ufSBmcm9tICcuLi8uLi9qcy9kYXRhc3RvcmUvRGF0YXN0b3JlTXV0YXRpb24nO1xuaW1wb3J0IHtEb2NJbmZvfSBmcm9tICcuLi8uLi9qcy9tZXRhZGF0YS9Eb2NJbmZvJztcbmltcG9ydCB7UGVyc2lzdGVuY2VMYXllcn0gZnJvbSAnLi4vLi4vanMvZGF0YXN0b3JlL1BlcnNpc3RlbmNlTGF5ZXInO1xuaW1wb3J0IHtEYXRhc3RvcmVzfSBmcm9tICcuLi8uLi9qcy9kYXRhc3RvcmUvRGF0YXN0b3Jlcyc7XG5pbXBvcnQgd2FpdEZvckV4cGVjdCBmcm9tICd3YWl0LWZvci1leHBlY3QnO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge0lEb2NJbmZvfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy9tZXRhZGF0YS9JRG9jSW5mb1wiO1xuaW1wb3J0IHtMYXRjaH0gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvdXRpbC9MYXRjaFwiO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbm1vY2hhLnNldHVwKCdiZGQnKTtcbm1vY2hhLnRpbWVvdXQoNjAwMDAwKTtcblxuY29uc3QgZmluZ2VycHJpbnQgPSBcIjB4MDAxXCI7XG5cblNwZWN0cm9uUmVuZGVyZXIucnVuKGFzeW5jIChzdGF0ZSkgPT4ge1xuXG4gICAgbmV3IEZpcmViYXNlVGVzdFJ1bm5lcihzdGF0ZSkucnVuKGFzeW5jICgpID0+IHtcblxuICAgICAgICBjb25zdCBmaXJlYmFzZURhdGFzdG9yZSA9IG5ldyBGaXJlYmFzZURhdGFzdG9yZSgpO1xuXG4gICAgICAgIGF3YWl0IGZpcmViYXNlRGF0YXN0b3JlLmluaXQoKTtcblxuICAgICAgICBkZXNjcmliZSgnRmlyZWJhc2VEYXRhc3RvcmUgdGVzdHMnLCBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgeGl0KFwiTWFrZSBzdXJlIHdlIGdldCBldmVudHMgZnJvbSB0aGUgZGF0YXN0b3JlXCIsIGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgbGV0IGRhdGFzdG9yZSA9IG5ldyBGaXJlYmFzZURhdGFzdG9yZSgpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgcGVyc2lzdGVuY2VMYXllciA9IG5ldyBEZWZhdWx0UGVyc2lzdGVuY2VMYXllcihkYXRhc3RvcmUpO1xuXG4gICAgICAgICAgICAgICAgYXdhaXQgcGVyc2lzdGVuY2VMYXllci5pbml0KCk7XG5cbiAgICAgICAgICAgICAgICBhd2FpdCBEYXRhc3RvcmVzLnB1cmdlKGRhdGFzdG9yZSwgcHVyZ2VFdmVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxvZy5pbmZvKFwicHVyZ2VFdmVudDogXCIsIHB1cmdlRXZlbnQpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgYXdhaXQgd2FpdEZvckV4cGVjdChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRvY01ldGFGaWxlcyA9IGF3YWl0IHBlcnNpc3RlbmNlTGF5ZXIuZ2V0RG9jTWV0YVJlZnMoKTtcbiAgICAgICAgICAgICAgICAgICAgYXNzZXJ0LmVxdWFsKGRvY01ldGFGaWxlcy5sZW5ndGgsIDApO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZG9jTWV0YSA9IE1vY2tEb2NNZXRhcy5jcmVhdGVXaXRoaW5Jbml0aWFsUGFnZW1hcmtzKGZpbmdlcnByaW50LCAxNCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhc3RvcmVNdXRhdGlvbiA9IG5ldyBEZWZhdWx0RGF0YXN0b3JlTXV0YXRpb248SURvY0luZm8+KCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBkb2NSZXBsaWNhdGlvbkV2ZW50TGlzdGVuZXJDYWxsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIC8vIGRhdGFzdG9yZS5hZGREb2NNZXRhU3luY2hyb25pemF0aW9uRXZlbnRMaXN0ZW5lcigoZG9jTXV0YXRpb24pID0+IHtcbiAgICAgICAgICAgICAgICAvLyAgICAgZG9jUmVwbGljYXRpb25FdmVudExpc3RlbmVyQ2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAvLyB9KTtcblxuICAgICAgICAgICAgICAgIGF3YWl0IHBlcnNpc3RlbmNlTGF5ZXIud3JpdGUoZmluZ2VycHJpbnQsIGRvY01ldGEsIHtkYXRhc3RvcmVNdXRhdGlvbn0pO1xuXG4gICAgICAgICAgICAgICAgYXNzZXJ0LmlzRmFsc2UoZG9jUmVwbGljYXRpb25FdmVudExpc3RlbmVyQ2FsbGVkLCBcIk5vIGRvYyByZXBsaWNhdGlvbiBldmVudCBsaXN0ZW5lciBjYWxsZWRcIik7XG5cbiAgICAgICAgICAgICAgICBhd2FpdCB3YWl0Rm9yRXhwZWN0KGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZG9jTWV0YUZpbGVzID0gYXdhaXQgcGVyc2lzdGVuY2VMYXllci5nZXREb2NNZXRhUmVmcygpO1xuICAgICAgICAgICAgICAgICAgICBhc3NlcnQuZXF1YWwoZG9jTWV0YUZpbGVzLmxlbmd0aCwgMSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBhd2FpdCBwZXJzaXN0ZW5jZUxheWVyLnN0b3AoKTtcblxuICAgICAgICAgICAgICAgIC8vIG5vdyBjcmVhdGUgYSBuZXcgZGF0YXN0b3JlIHRvIG1ha2Ugc3VyZSB3ZSBnZXQgdGhlIGV2ZW50cyB3ZVxuICAgICAgICAgICAgICAgIC8vIG5lZWQuXG5cbiAgICAgICAgICAgICAgICBkYXRhc3RvcmUgPSBuZXcgRmlyZWJhc2VEYXRhc3RvcmUoKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGRvY011dGF0aW9uTGF0Y2ggPSBuZXcgTGF0Y2g8Ym9vbGVhbj4oKTtcbiAgICAgICAgICAgICAgICBjb25zdCBkb2NSZXBsaWNhdGlvbkxhdGNoID0gbmV3IExhdGNoPGJvb2xlYW4+KCk7XG5cbiAgICAgICAgICAgICAgICAvLyBkYXRhc3RvcmUuYWRkRG9jTWV0YVNuYXBzaG90RXZlbnRMaXN0ZW5lcigoZG9jTWV0YVNuYXBzaG90RXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIkZJWE1FOiBoZXJlIGF0IGxlYXN0OiBcIiwgZG9jTWV0YVNuYXBzaG90RXZlbnQpO1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gICAgIGZvciAoY29uc3QgZG9jTWV0YU11dGF0aW9uIG9mIGRvY01ldGFTbmFwc2hvdEV2ZW50LmRvY01ldGFNdXRhdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgY29uc3Qge211dGF0aW9uVHlwZX0gPSBkb2NNZXRhTXV0YXRpb247XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNvbnN0IGRvY0luZm8gPSBhd2FpdCBkb2NNZXRhTXV0YXRpb24uZG9jSW5mb1Byb3ZpZGVyKCk7XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGlmIChkb2NJbmZvLmZpbmdlcnByaW50ID09PSBmaW5nZXJwcmludCAmJiBtdXRhdGlvblR5cGUgPT09ICdjcmVhdGVkJykge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRklYTUU6IGdvdCBmaXJzdFwiKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBkb2NNdXRhdGlvbkxhdGNoLnJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyBkYXRhc3RvcmUuYWRkRG9jTWV0YVN5bmNocm9uaXphdGlvbkV2ZW50TGlzdGVuZXIoKGRvY01ldGFTbmFwc2hvdEV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJGSVhNRTogaGVyZSBhdCBsZWFzdDogXCIsIGRvY01ldGFTbmFwc2hvdEV2ZW50KTtcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vICAgICBmb3IgKGNvbnN0IGRvY01ldGFNdXRhdGlvbiBvZiBkb2NNZXRhU25hcHNob3RFdmVudC5kb2NNZXRhTXV0YXRpb25zKSB7XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNvbnN0IHttdXRhdGlvblR5cGUgfSA9IGRvY01ldGFNdXRhdGlvbjtcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgY29uc3QgZG9jSW5mbyA9IGRvY01ldGFNdXRhdGlvbi5kb2NJbmZvUHJvdmlkZXIoKTtcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgaWYgKGRvY0luZm8uZmluZ2VycHJpbnQgPT09IGZpbmdlcnByaW50ICYmICBtdXRhdGlvblR5cGUgPT09ICdjcmVhdGVkJykge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRklYTUU6IGdvdCBzZWNvbmRlXCIpO1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGRvY1JlcGxpY2F0aW9uTGF0Y2gucmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vIH0pO1xuXG4gICAgICAgICAgICAgICAgYXdhaXQgZGF0YXN0b3JlLmluaXQoKTtcblxuICAgICAgICAgICAgICAgIC8vIGlmIHRoaXMgbGF0Y2ggaXMgcmVzb2x2ZWQgd2UndmUgZm91bmQgb3VyIHZhbHVlLlxuICAgICAgICAgICAgICAgIGF3YWl0IGRvY011dGF0aW9uTGF0Y2guZ2V0KCk7XG4gICAgICAgICAgICAgICAgYXdhaXQgZG9jUmVwbGljYXRpb25MYXRjaC5nZXQoKTtcblxuICAgICAgICAgICAgICAgIGF3YWl0IGRhdGFzdG9yZS5zdG9wKCk7XG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB4aXQoXCJNYWtlIHN1cmUgd2UgZ2V0IHJlcGxpY2F0aW9uIGV2ZW50cyBmcm9tIGEgc2Vjb25kIGRhdGFzdG9yZSB0byB0aGUgZmlyc3RcIiwgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICBjbGFzcyBSZXBsaWNhdGlvblRlc3RlciB7XG5cbiAgICAgICAgICAgICAgICAgICAgcHVibGljIGRhdGFzdG9yZT86IEZpcmViYXNlRGF0YXN0b3JlO1xuXG4gICAgICAgICAgICAgICAgICAgIHB1YmxpYyBwZXJzaXN0ZW5jZUxheWVyPzogUGVyc2lzdGVuY2VMYXllcjtcblxuICAgICAgICAgICAgICAgICAgICBwdWJsaWMgaGFzRG9jUmVwbGljYXRpb25FdmVudDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgIHB1YmxpYyBhc3luYyBpbml0KCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhc3RvcmUgPSBuZXcgRmlyZWJhc2VEYXRhc3RvcmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGVyc2lzdGVuY2VMYXllciA9IG5ldyBEZWZhdWx0UGVyc2lzdGVuY2VMYXllcih0aGlzLmRhdGFzdG9yZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnBlcnNpc3RlbmNlTGF5ZXIuaW5pdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBwdWJsaWMgYXN5bmMgc2V0dXAoKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuZGF0YXN0b3JlIS5hZGREb2NNZXRhU3luY2hyb25pemF0aW9uRXZlbnRMaXN0ZW5lcigoZG9jUmVwbGljYXRpb25FdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuaGFzRG9jUmVwbGljYXRpb25FdmVudCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHB1YmxpYyBhc3luYyB3cml0ZSgpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZG9jTWV0YSA9IE1vY2tEb2NNZXRhcy5jcmVhdGVXaXRoaW5Jbml0aWFsUGFnZW1hcmtzKGZpbmdlcnByaW50LCAxNCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucGVyc2lzdGVuY2VMYXllciEud3JpdGUoZmluZ2VycHJpbnQsIGRvY01ldGEpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnBlcnNpc3RlbmNlTGF5ZXIhLmRlbGV0ZSh7ZmluZ2VycHJpbnQsIGRvY0luZm86IGRvY01ldGEuZG9jSW5mb30pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcHVibGljIGFzeW5jIHN0b3AoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnBlcnNpc3RlbmNlTGF5ZXIhLnN0b3AoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgcmVwbGljYXRpb25UZXN0ZXIwID0gYXdhaXQgbmV3IFJlcGxpY2F0aW9uVGVzdGVyKCkuaW5pdCgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlcGxpY2F0aW9uVGVzdGVyMSA9IGF3YWl0IG5ldyBSZXBsaWNhdGlvblRlc3RlcigpLmluaXQoKTtcblxuICAgICAgICAgICAgICAgIGF3YWl0IHJlcGxpY2F0aW9uVGVzdGVyMC5zZXR1cCgpO1xuICAgICAgICAgICAgICAgIGF3YWl0IHJlcGxpY2F0aW9uVGVzdGVyMS5zZXR1cCgpO1xuXG4gICAgICAgICAgICAgICAgYXdhaXQgcmVwbGljYXRpb25UZXN0ZXIxLndyaXRlKCk7XG5cbiAgICAgICAgICAgICAgICBhc3NlcnQub2socmVwbGljYXRpb25UZXN0ZXIwLmhhc0RvY1JlcGxpY2F0aW9uRXZlbnQsIFwicmVwbGljYXRpb25UZXN0ZXIwIGZhaWxlZFwiKTtcbiAgICAgICAgICAgICAgICBhc3NlcnQub2soIXJlcGxpY2F0aW9uVGVzdGVyMS5oYXNEb2NSZXBsaWNhdGlvbkV2ZW50LCBcInJlcGxpY2F0aW9uVGVzdGVyMSBmYWlsZWRcIik7XG5cbiAgICAgICAgICAgICAgICBhd2FpdCByZXBsaWNhdGlvblRlc3RlcjAuc3RvcCgpO1xuICAgICAgICAgICAgICAgIGF3YWl0IHJlcGxpY2F0aW9uVGVzdGVyMS5zdG9wKCk7XG5cbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgRGF0YXN0b3JlVGVzdGVyLnRlc3QoYXN5bmMgKCkgPT4gZmlyZWJhc2VEYXRhc3RvcmUsIGZhbHNlKTtcblxuICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpO1xuXG59KTtcbiJdfQ==