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
const DocMetaSnapshotEventListeners_1 = require("./DocMetaSnapshotEventListeners");
const DocMetas_1 = require("../metadata/DocMetas");
const TestingTime_1 = require("polar-shared/src/test/TestingTime");
const ProgressTracker_1 = require("polar-shared/src/util/ProgressTracker");
const chai_1 = require("chai");
const UUIDs_1 = require("../metadata/UUIDs");
const Functions_1 = require("polar-shared/src/util/Functions");
const Providers_1 = require("polar-shared/src/util/Providers");
const wait_for_expect_1 = __importDefault(require("wait-for-expect"));
const DocMetaRef_1 = require("./DocMetaRef");
const MetadataSerializer_1 = require("../metadata/MetadataSerializer");
const Reducers_1 = require("polar-shared/src/util/Reducers");
describe('DocMetaSnapshotEventListener', function () {
    let docMeta;
    let docMetaSnapshotEvents = [];
    let deduplicatedListener = Functions_1.ASYNC_NULL_FUNCTION;
    const progressTracker = new ProgressTracker_1.ProgressTracker({ total: 1, id: 'test' });
    progressTracker.incr();
    const progress = progressTracker.peek();
    const consistency = 'committed';
    beforeEach(function () {
        TestingTime_1.TestingTime.freeze();
        docMeta = DocMetas_1.MockDocMetas.createMockDocMeta();
        docMetaSnapshotEvents = [];
        const eventDeduplicator = DocMetaSnapshotEventListeners_1.DocMetaSnapshotEventListeners.createDeduplicatedListener((emittedEvent) => __awaiter(this, void 0, void 0, function* () {
            docMetaSnapshotEvents.push(emittedEvent);
        }));
        deduplicatedListener = eventDeduplicator.listener;
    });
    afterEach(function () {
        TestingTime_1.TestingTime.unfreeze();
    });
    function createDocMetaSnapshotEvent(mutationType = 'created') {
        const docMetaMutation = {
            fingerprint: docMeta.docInfo.fingerprint,
            dataProvider: Providers_1.AsyncProviders.of(MetadataSerializer_1.MetadataSerializer.serialize(docMeta)),
            docMetaProvider: Providers_1.AsyncProviders.of(docMeta),
            docInfoProvider: Providers_1.AsyncProviders.of(docMeta.docInfo),
            docMetaFileRefProvider: Providers_1.AsyncProviders.of(DocMetaRef_1.DocMetaFileRefs.createFromDocInfo(docMeta.docInfo)),
            mutationType
        };
        const docMetaSnapshotEvent = {
            datastore: 'memory',
            progress,
            consistency,
            docMetaMutations: [
                docMetaMutation
            ]
        };
        return docMetaSnapshotEvent;
    }
    function createFutureUUID() {
        TestingTime_1.TestingTime.forward(5000);
        return UUIDs_1.UUIDs.create();
    }
    function computeEmittedDocMetaMutations(event) {
        return docMetaSnapshotEvents.map(current => current.docMetaMutations.length)
            .reduce(Reducers_1.Reducers.SUM, 0);
    }
    it("basic duplicate suppression", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const docMetaSnapshotEvent = createDocMetaSnapshotEvent();
            chai_1.assert.equal(computeEmittedDocMetaMutations(docMetaSnapshotEvents), 0);
            yield deduplicatedListener(docMetaSnapshotEvent);
            chai_1.assert.equal(computeEmittedDocMetaMutations(docMetaSnapshotEvents), 1);
            yield deduplicatedListener(docMetaSnapshotEvent);
            yield wait_for_expect_1.default(() => {
                chai_1.assert.equal(computeEmittedDocMetaMutations(docMetaSnapshotEvents), 1);
            });
        });
    });
    it("Two 'created' (with differing times)", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const docMetaSnapshotEvent = createDocMetaSnapshotEvent();
            chai_1.assert.equal(computeEmittedDocMetaMutations(docMetaSnapshotEvents), 0);
            yield deduplicatedListener(docMetaSnapshotEvent);
            chai_1.assert.equal(computeEmittedDocMetaMutations(docMetaSnapshotEvents), 1);
            TestingTime_1.TestingTime.forward(60000);
            const futureUUID = createFutureUUID();
            chai_1.assert.notEqual(docMeta.docInfo.uuid, futureUUID);
            docMeta.docInfo.uuid = futureUUID;
            yield deduplicatedListener(docMetaSnapshotEvent);
            chai_1.assert.equal(computeEmittedDocMetaMutations(docMetaSnapshotEvents), 2);
            yield wait_for_expect_1.default(() => {
                chai_1.assert.equal(computeEmittedDocMetaMutations(docMetaSnapshotEvents), 2);
            });
        });
    });
    it("One created, then one updated.", function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield deduplicatedListener(createDocMetaSnapshotEvent('created'));
            docMeta.docInfo.uuid = createFutureUUID();
            yield deduplicatedListener(createDocMetaSnapshotEvent('updated'));
            yield wait_for_expect_1.default(() => {
                chai_1.assert.equal(docMetaSnapshotEvents.length, 2);
            });
        });
    });
    it("Two updated.", function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield deduplicatedListener(createDocMetaSnapshotEvent('updated'));
            docMeta.docInfo.uuid = createFutureUUID();
            yield deduplicatedListener(createDocMetaSnapshotEvent('updated'));
            yield wait_for_expect_1.default(() => {
                chai_1.assert.equal(docMetaSnapshotEvents.length, 2);
            });
        });
    });
    it("Created, then deleted, then created", function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield deduplicatedListener(createDocMetaSnapshotEvent('created'));
            docMeta.docInfo.uuid = createFutureUUID();
            yield deduplicatedListener(createDocMetaSnapshotEvent('deleted'));
            docMeta.docInfo.uuid = createFutureUUID();
            yield deduplicatedListener(createDocMetaSnapshotEvent('created'));
            yield wait_for_expect_1.default(() => {
                chai_1.assert.equal(docMetaSnapshotEvents.length, 3);
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jTWV0YVNuYXBzaG90RXZlbnRMaXN0ZW5lcnNUZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRG9jTWV0YVNuYXBzaG90RXZlbnRMaXN0ZW5lcnNUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRUEsbUZBQThFO0FBQzlFLG1EQUFrRDtBQUNsRCxtRUFBOEQ7QUFDOUQsMkVBQXNFO0FBRXRFLCtCQUE0QjtBQUM1Qiw2Q0FBd0M7QUFDeEMsK0RBQW1GO0FBQ25GLCtEQUErRDtBQUMvRCxzRUFBNEM7QUFDNUMsNkNBQTZDO0FBQzdDLHVFQUFrRTtBQUNsRSw2REFBd0Q7QUFJeEQsUUFBUSxDQUFDLDhCQUE4QixFQUFFO0lBRXJDLElBQUksT0FBaUIsQ0FBQztJQUV0QixJQUFJLHFCQUFxQixHQUEyQixFQUFFLENBQUM7SUFFdkQsSUFBSSxvQkFBb0IsR0FBaUMsK0JBQW1CLENBQUM7SUFFN0UsTUFBTSxlQUFlLEdBQUcsSUFBSSxpQ0FBZSxDQUFDLEVBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFDLENBQUMsQ0FBQztJQUNwRSxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7SUFFdkIsTUFBTSxRQUFRLEdBQUcsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3hDLE1BQU0sV0FBVyxHQUF5QixXQUFXLENBQUM7SUFFdEQsVUFBVSxDQUFDO1FBQ1AseUJBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUVyQixPQUFPLEdBQUcsdUJBQVksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBRTNDLHFCQUFxQixHQUFHLEVBQUUsQ0FBQztRQUUzQixNQUFNLGlCQUFpQixHQUFHLDZEQUE2QixDQUFDLDBCQUEwQixDQUFDLENBQU0sWUFBWSxFQUFDLEVBQUU7WUFDcEcscUJBQXFCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzdDLENBQUMsQ0FBQSxDQUFDLENBQUM7UUFFSCxv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Q0FBQztRQUVQLENBQUM7S0FBQSxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMscUNBQXFDLEVBQUU7O1lBRXRDLE1BQU0sb0JBQW9CLENBQUMsMEJBQTBCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUVsRSxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxnQkFBZ0IsRUFBRSxDQUFDO1lBRTFDLE1BQU0sb0JBQW9CLENBQUMsMEJBQTBCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUVsRSxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxnQkFBZ0IsRUFBRSxDQUFDO1lBRTFDLE1BQU0sb0JBQW9CLENBQUMsMEJBQTBCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUVsRSxNQUFNLHlCQUFhLENBQUMsR0FBRyxFQUFFO2dCQUNyQixhQUFNLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNsRCxDQUFDLENBQUMsQ0FBQztRQUVQLENBQUM7S0FBQSxDQUFDLENBQUM7QUFFUCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHtEb2NNZXRhU25hcHNob3RFdmVudCwgRG9jTWV0YVNuYXBzaG90RXZlbnRMaXN0ZW5lciwgRGF0YXN0b3JlQ29uc2lzdGVuY3ksIERvY01ldGFNdXRhdGlvbiwgTXV0YXRpb25UeXBlfSBmcm9tICcuL0RhdGFzdG9yZSc7XG5pbXBvcnQge0RvY01ldGFTbmFwc2hvdEV2ZW50TGlzdGVuZXJzfSBmcm9tICcuL0RvY01ldGFTbmFwc2hvdEV2ZW50TGlzdGVuZXJzJztcbmltcG9ydCB7TW9ja0RvY01ldGFzfSBmcm9tICcuLi9tZXRhZGF0YS9Eb2NNZXRhcyc7XG5pbXBvcnQge1Rlc3RpbmdUaW1lfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3Rlc3QvVGVzdGluZ1RpbWUnO1xuaW1wb3J0IHtQcm9ncmVzc1RyYWNrZXJ9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC9Qcm9ncmVzc1RyYWNrZXInO1xuaW1wb3J0IHthc3NlcnRKU09OfSBmcm9tICcuLi90ZXN0L0Fzc2VydGlvbnMnO1xuaW1wb3J0IHthc3NlcnR9IGZyb20gJ2NoYWknO1xuaW1wb3J0IHtVVUlEc30gZnJvbSAnLi4vbWV0YWRhdGEvVVVJRHMnO1xuaW1wb3J0IHtBU1lOQ19OVUxMX0ZVTkNUSU9OLCBOVUxMX0ZVTkNUSU9OfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvRnVuY3Rpb25zJztcbmltcG9ydCB7QXN5bmNQcm92aWRlcnN9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC9Qcm92aWRlcnMnO1xuaW1wb3J0IHdhaXRGb3JFeHBlY3QgZnJvbSAnd2FpdC1mb3ItZXhwZWN0JztcbmltcG9ydCB7RG9jTWV0YUZpbGVSZWZzfSBmcm9tICcuL0RvY01ldGFSZWYnO1xuaW1wb3J0IHtNZXRhZGF0YVNlcmlhbGl6ZXJ9IGZyb20gJy4uL21ldGFkYXRhL01ldGFkYXRhU2VyaWFsaXplcic7XG5pbXBvcnQge1JlZHVjZXJzfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvUmVkdWNlcnMnO1xuaW1wb3J0IHtEb2NNZXRhfSBmcm9tICcuLi9tZXRhZGF0YS9Eb2NNZXRhJztcbmltcG9ydCB7SURvY01ldGF9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL21ldGFkYXRhL0lEb2NNZXRhXCI7XG5cbmRlc2NyaWJlKCdEb2NNZXRhU25hcHNob3RFdmVudExpc3RlbmVyJywgZnVuY3Rpb24oKSB7XG5cbiAgICBsZXQgZG9jTWV0YTogSURvY01ldGE7XG5cbiAgICBsZXQgZG9jTWV0YVNuYXBzaG90RXZlbnRzOiBEb2NNZXRhU25hcHNob3RFdmVudFtdID0gW107XG5cbiAgICBsZXQgZGVkdXBsaWNhdGVkTGlzdGVuZXI6IERvY01ldGFTbmFwc2hvdEV2ZW50TGlzdGVuZXIgPSBBU1lOQ19OVUxMX0ZVTkNUSU9OO1xuXG4gICAgY29uc3QgcHJvZ3Jlc3NUcmFja2VyID0gbmV3IFByb2dyZXNzVHJhY2tlcih7dG90YWw6IDEsIGlkOiAndGVzdCd9KTtcbiAgICBwcm9ncmVzc1RyYWNrZXIuaW5jcigpO1xuXG4gICAgY29uc3QgcHJvZ3Jlc3MgPSBwcm9ncmVzc1RyYWNrZXIucGVlaygpO1xuICAgIGNvbnN0IGNvbnNpc3RlbmN5OiBEYXRhc3RvcmVDb25zaXN0ZW5jeSA9ICdjb21taXR0ZWQnO1xuXG4gICAgYmVmb3JlRWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgVGVzdGluZ1RpbWUuZnJlZXplKCk7XG5cbiAgICAgICAgZG9jTWV0YSA9IE1vY2tEb2NNZXRhcy5jcmVhdGVNb2NrRG9jTWV0YSgpO1xuXG4gICAgICAgIGRvY01ldGFTbmFwc2hvdEV2ZW50cyA9IFtdO1xuXG4gICAgICAgIGNvbnN0IGV2ZW50RGVkdXBsaWNhdG9yID0gRG9jTWV0YVNuYXBzaG90RXZlbnRMaXN0ZW5lcnMuY3JlYXRlRGVkdXBsaWNhdGVkTGlzdGVuZXIoYXN5bmMgZW1pdHRlZEV2ZW50ID0+IHtcbiAgICAgICAgICAgIGRvY01ldGFTbmFwc2hvdEV2ZW50cy5wdXNoKGVtaXR0ZWRFdmVudCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRlZHVwbGljYXRlZExpc3RlbmVyID0gZXZlbnREZWR1cGxpY2F0b3IubGlzdGVuZXI7XG5cbiAgICB9KTtcblxuICAgIGFmdGVyRWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgVGVzdGluZ1RpbWUudW5mcmVlemUoKTtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZURvY01ldGFTbmFwc2hvdEV2ZW50KG11dGF0aW9uVHlwZTogTXV0YXRpb25UeXBlID0gJ2NyZWF0ZWQnKTogRG9jTWV0YVNuYXBzaG90RXZlbnQge1xuXG4gICAgICAgIGNvbnN0IGRvY01ldGFNdXRhdGlvbjogRG9jTWV0YU11dGF0aW9uID0ge1xuICAgICAgICAgICAgZmluZ2VycHJpbnQ6IGRvY01ldGEuZG9jSW5mby5maW5nZXJwcmludCxcbiAgICAgICAgICAgIGRhdGFQcm92aWRlcjogQXN5bmNQcm92aWRlcnMub2YoTWV0YWRhdGFTZXJpYWxpemVyLnNlcmlhbGl6ZShkb2NNZXRhKSksXG4gICAgICAgICAgICBkb2NNZXRhUHJvdmlkZXI6IEFzeW5jUHJvdmlkZXJzLm9mKGRvY01ldGEpLFxuICAgICAgICAgICAgZG9jSW5mb1Byb3ZpZGVyOiBBc3luY1Byb3ZpZGVycy5vZihkb2NNZXRhLmRvY0luZm8pLFxuICAgICAgICAgICAgZG9jTWV0YUZpbGVSZWZQcm92aWRlcjogQXN5bmNQcm92aWRlcnMub2YoRG9jTWV0YUZpbGVSZWZzLmNyZWF0ZUZyb21Eb2NJbmZvKGRvY01ldGEuZG9jSW5mbykpLFxuICAgICAgICAgICAgbXV0YXRpb25UeXBlXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgZG9jTWV0YVNuYXBzaG90RXZlbnQgPSB7XG4gICAgICAgICAgICBkYXRhc3RvcmU6ICdtZW1vcnknLFxuICAgICAgICAgICAgcHJvZ3Jlc3MsXG4gICAgICAgICAgICBjb25zaXN0ZW5jeSxcbiAgICAgICAgICAgIGRvY01ldGFNdXRhdGlvbnM6IFtcbiAgICAgICAgICAgICAgICBkb2NNZXRhTXV0YXRpb25cbiAgICAgICAgICAgIF1cbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gZG9jTWV0YVNuYXBzaG90RXZlbnQ7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVGdXR1cmVVVUlEKCkge1xuICAgICAgICBUZXN0aW5nVGltZS5mb3J3YXJkKDUwMDApO1xuICAgICAgICByZXR1cm4gVVVJRHMuY3JlYXRlKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29tcHV0ZUVtaXR0ZWREb2NNZXRhTXV0YXRpb25zKGV2ZW50OiBEb2NNZXRhU25hcHNob3RFdmVudFtdKSB7XG5cbiAgICAgICAgcmV0dXJuIGRvY01ldGFTbmFwc2hvdEV2ZW50cy5tYXAoY3VycmVudCA9PiBjdXJyZW50LmRvY01ldGFNdXRhdGlvbnMubGVuZ3RoKVxuICAgICAgICAgICAgLnJlZHVjZShSZWR1Y2Vycy5TVU0sIDApO1xuXG4gICAgfVxuXG4gICAgaXQoXCJiYXNpYyBkdXBsaWNhdGUgc3VwcHJlc3Npb25cIiwgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgY29uc3QgZG9jTWV0YVNuYXBzaG90RXZlbnQgPSBjcmVhdGVEb2NNZXRhU25hcHNob3RFdmVudCgpO1xuXG4gICAgICAgIGFzc2VydC5lcXVhbChjb21wdXRlRW1pdHRlZERvY01ldGFNdXRhdGlvbnMoZG9jTWV0YVNuYXBzaG90RXZlbnRzKSwgMCk7XG5cbiAgICAgICAgYXdhaXQgZGVkdXBsaWNhdGVkTGlzdGVuZXIoZG9jTWV0YVNuYXBzaG90RXZlbnQpO1xuXG4gICAgICAgIGFzc2VydC5lcXVhbChjb21wdXRlRW1pdHRlZERvY01ldGFNdXRhdGlvbnMoZG9jTWV0YVNuYXBzaG90RXZlbnRzKSwgMSk7XG5cbiAgICAgICAgYXdhaXQgZGVkdXBsaWNhdGVkTGlzdGVuZXIoZG9jTWV0YVNuYXBzaG90RXZlbnQpO1xuXG4gICAgICAgIGF3YWl0IHdhaXRGb3JFeHBlY3QoKCkgPT4ge1xuICAgICAgICAgICAgYXNzZXJ0LmVxdWFsKGNvbXB1dGVFbWl0dGVkRG9jTWV0YU11dGF0aW9ucyhkb2NNZXRhU25hcHNob3RFdmVudHMpLCAxKTtcbiAgICAgICAgfSk7XG5cbiAgICB9KTtcblxuXG4gICAgaXQoXCJUd28gJ2NyZWF0ZWQnICh3aXRoIGRpZmZlcmluZyB0aW1lcylcIiwgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgY29uc3QgZG9jTWV0YVNuYXBzaG90RXZlbnQgPSBjcmVhdGVEb2NNZXRhU25hcHNob3RFdmVudCgpO1xuXG4gICAgICAgIGFzc2VydC5lcXVhbChjb21wdXRlRW1pdHRlZERvY01ldGFNdXRhdGlvbnMoZG9jTWV0YVNuYXBzaG90RXZlbnRzKSwgMCk7XG5cbiAgICAgICAgYXdhaXQgZGVkdXBsaWNhdGVkTGlzdGVuZXIoZG9jTWV0YVNuYXBzaG90RXZlbnQpO1xuXG4gICAgICAgIGFzc2VydC5lcXVhbChjb21wdXRlRW1pdHRlZERvY01ldGFNdXRhdGlvbnMoZG9jTWV0YVNuYXBzaG90RXZlbnRzKSwgMSk7XG5cbiAgICAgICAgVGVzdGluZ1RpbWUuZm9yd2FyZCg2MDAwMCk7XG4gICAgICAgIGNvbnN0IGZ1dHVyZVVVSUQgPSBjcmVhdGVGdXR1cmVVVUlEKCk7XG5cbiAgICAgICAgYXNzZXJ0Lm5vdEVxdWFsKGRvY01ldGEuZG9jSW5mby51dWlkLCBmdXR1cmVVVUlEKTtcblxuICAgICAgICBkb2NNZXRhLmRvY0luZm8udXVpZCA9IGZ1dHVyZVVVSUQ7XG5cbiAgICAgICAgYXdhaXQgZGVkdXBsaWNhdGVkTGlzdGVuZXIoZG9jTWV0YVNuYXBzaG90RXZlbnQpO1xuXG4gICAgICAgIGFzc2VydC5lcXVhbChjb21wdXRlRW1pdHRlZERvY01ldGFNdXRhdGlvbnMoZG9jTWV0YVNuYXBzaG90RXZlbnRzKSwgMik7XG5cbiAgICAgICAgYXdhaXQgd2FpdEZvckV4cGVjdCgoKSA9PiB7XG4gICAgICAgICAgICBhc3NlcnQuZXF1YWwoY29tcHV0ZUVtaXR0ZWREb2NNZXRhTXV0YXRpb25zKGRvY01ldGFTbmFwc2hvdEV2ZW50cyksIDIpO1xuICAgICAgICB9KTtcblxuICAgIH0pO1xuXG4gICAgaXQoXCJPbmUgY3JlYXRlZCwgdGhlbiBvbmUgdXBkYXRlZC5cIiwgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgYXdhaXQgZGVkdXBsaWNhdGVkTGlzdGVuZXIoY3JlYXRlRG9jTWV0YVNuYXBzaG90RXZlbnQoJ2NyZWF0ZWQnKSk7XG5cbiAgICAgICAgZG9jTWV0YS5kb2NJbmZvLnV1aWQgPSBjcmVhdGVGdXR1cmVVVUlEKCk7XG5cbiAgICAgICAgYXdhaXQgZGVkdXBsaWNhdGVkTGlzdGVuZXIoY3JlYXRlRG9jTWV0YVNuYXBzaG90RXZlbnQoJ3VwZGF0ZWQnKSk7XG5cbiAgICAgICAgYXdhaXQgd2FpdEZvckV4cGVjdCgoKSA9PiB7XG4gICAgICAgICAgICBhc3NlcnQuZXF1YWwoZG9jTWV0YVNuYXBzaG90RXZlbnRzLmxlbmd0aCwgMik7XG4gICAgICAgIH0pO1xuXG4gICAgfSk7XG5cbiAgICBpdChcIlR3byB1cGRhdGVkLlwiLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICBhd2FpdCBkZWR1cGxpY2F0ZWRMaXN0ZW5lcihjcmVhdGVEb2NNZXRhU25hcHNob3RFdmVudCgndXBkYXRlZCcpKTtcblxuICAgICAgICBkb2NNZXRhLmRvY0luZm8udXVpZCA9IGNyZWF0ZUZ1dHVyZVVVSUQoKTtcblxuICAgICAgICBhd2FpdCBkZWR1cGxpY2F0ZWRMaXN0ZW5lcihjcmVhdGVEb2NNZXRhU25hcHNob3RFdmVudCgndXBkYXRlZCcpKTtcblxuICAgICAgICBhd2FpdCB3YWl0Rm9yRXhwZWN0KCgpID0+IHtcbiAgICAgICAgICAgIGFzc2VydC5lcXVhbChkb2NNZXRhU25hcHNob3RFdmVudHMubGVuZ3RoLCAyKTtcbiAgICAgICAgfSk7XG5cbiAgICB9KTtcblxuICAgIGl0KFwiQ3JlYXRlZCwgdGhlbiBkZWxldGVkLCB0aGVuIGNyZWF0ZWRcIiwgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgYXdhaXQgZGVkdXBsaWNhdGVkTGlzdGVuZXIoY3JlYXRlRG9jTWV0YVNuYXBzaG90RXZlbnQoJ2NyZWF0ZWQnKSk7XG5cbiAgICAgICAgZG9jTWV0YS5kb2NJbmZvLnV1aWQgPSBjcmVhdGVGdXR1cmVVVUlEKCk7XG5cbiAgICAgICAgYXdhaXQgZGVkdXBsaWNhdGVkTGlzdGVuZXIoY3JlYXRlRG9jTWV0YVNuYXBzaG90RXZlbnQoJ2RlbGV0ZWQnKSk7XG5cbiAgICAgICAgZG9jTWV0YS5kb2NJbmZvLnV1aWQgPSBjcmVhdGVGdXR1cmVVVUlEKCk7XG5cbiAgICAgICAgYXdhaXQgZGVkdXBsaWNhdGVkTGlzdGVuZXIoY3JlYXRlRG9jTWV0YVNuYXBzaG90RXZlbnQoJ2NyZWF0ZWQnKSk7XG5cbiAgICAgICAgYXdhaXQgd2FpdEZvckV4cGVjdCgoKSA9PiB7XG4gICAgICAgICAgICBhc3NlcnQuZXF1YWwoZG9jTWV0YVNuYXBzaG90RXZlbnRzLmxlbmd0aCwgMyk7XG4gICAgICAgIH0pO1xuXG4gICAgfSk7XG5cbn0pO1xuIl19