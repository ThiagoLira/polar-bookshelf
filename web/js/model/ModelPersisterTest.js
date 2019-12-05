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
const MockAdvertisingPersistenceLayer_1 = require("../datastore/advertiser/MockAdvertisingPersistenceLayer");
const DefaultPersistenceLayer_1 = require("../datastore/DefaultPersistenceLayer");
const MemoryDatastore_1 = require("../datastore/MemoryDatastore");
const ModelPersister_1 = require("./ModelPersister");
const DocMetas_1 = require("../metadata/DocMetas");
const chai_1 = require("chai");
const Promises_1 = require("../util/Promises");
const wait_for_expect_1 = __importDefault(require("wait-for-expect"));
const PersistenceLayerHandler_1 = require("../datastore/PersistenceLayerHandler");
describe('ModelPersister', function () {
    this.timeout(10000);
    function assertWrites(nrWrites) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Promises_1.Promises.waitFor(1000);
            yield wait_for_expect_1.default(() => {
                chai_1.assert.equal(modelPersister.nrWrites, nrWrites);
            });
            yield Promises_1.Promises.waitFor(1000);
            yield wait_for_expect_1.default(() => {
                chai_1.assert.equal(modelPersister.nrWrites, nrWrites);
            });
        });
    }
    let persistenceLayer;
    let docMeta;
    let modelPersister;
    beforeEach(function () {
        console.log("beforeEach:");
        persistenceLayer =
            new MockAdvertisingPersistenceLayer_1.MockAdvertisingPersistenceLayer(new DefaultPersistenceLayer_1.DefaultPersistenceLayer(new MemoryDatastore_1.MemoryDatastore()), true);
        docMeta = DocMetas_1.MockDocMetas.createMockDocMeta();
        const persistenceLayerHandler = new PersistenceLayerHandler_1.DefaultPersistenceLayerHandler(persistenceLayer);
        modelPersister = new ModelPersister_1.ModelPersister(persistenceLayerHandler, docMeta);
        docMeta = modelPersister.docMeta;
    });
    describe('batched', function () {
        it("with simple write", function () {
            return __awaiter(this, void 0, void 0, function* () {
                docMeta.docInfo.title = 'asdf';
                yield assertWrites(1);
            });
        });
        it("with batched write", function () {
            return __awaiter(this, void 0, void 0, function* () {
                DocMetas_1.DocMetas.withBatchedMutations(docMeta, () => {
                    docMeta.docInfo.title = 'asdf';
                    docMeta.docInfo.description = 'hello world';
                    const pageMeta = DocMetas_1.DocMetas.getPageMeta(docMeta, 1);
                    pageMeta.pageInfo.dimensions = { width: 100, height: 100 };
                });
                yield assertWrites(1);
            });
        });
        it("with no batched write", function () {
            return __awaiter(this, void 0, void 0, function* () {
                DocMetas_1.DocMetas.withBatchedMutations(docMeta, () => {
                });
                yield assertWrites(0);
            });
        });
    });
    describe('skipped', function () {
        it("with skipped write", function () {
            return __awaiter(this, void 0, void 0, function* () {
                DocMetas_1.DocMetas.withSkippedMutations(docMeta, () => {
                    docMeta.docInfo.title = 'asdf';
                    docMeta.docInfo.description = 'hello world';
                    const pageMeta = DocMetas_1.DocMetas.getPageMeta(docMeta, 1);
                    pageMeta.pageInfo.dimensions = { width: 100, height: 100 };
                });
                yield assertWrites(0);
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kZWxQZXJzaXN0ZXJUZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiTW9kZWxQZXJzaXN0ZXJUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkdBQXdHO0FBQ3hHLGtGQUE2RTtBQUM3RSxrRUFBNkQ7QUFDN0QscURBQWdEO0FBQ2hELG1EQUE0RDtBQUM1RCwrQkFBNEI7QUFDNUIsK0NBQTBDO0FBQzFDLHNFQUE0QztBQUU1QyxrRkFBb0Y7QUFHcEYsUUFBUSxDQUFDLGdCQUFnQixFQUFFO0lBRXZCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFcEIsU0FBZSxZQUFZLENBQUMsUUFBZ0I7O1lBRXhDLE1BQU0sbUJBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFN0IsTUFBTSx5QkFBYSxDQUFDLEdBQUcsRUFBRTtnQkFDckIsYUFBTSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ3BELENBQUMsQ0FBQyxDQUFDO1lBRUgsTUFBTSxtQkFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUU3QixNQUFNLHlCQUFhLENBQUMsR0FBRyxFQUFFO2dCQUNyQixhQUFNLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDcEQsQ0FBQyxDQUFDLENBQUM7UUFFUCxDQUFDO0tBQUE7SUFFRCxJQUFJLGdCQUFpRCxDQUFDO0lBRXRELElBQUksT0FBaUIsQ0FBQztJQUV0QixJQUFJLGNBQThCLENBQUM7SUFFbkMsVUFBVSxDQUFDO1FBRVAsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQTtRQUUxQixnQkFBZ0I7WUFDWixJQUFJLGlFQUErQixDQUMvQixJQUFJLGlEQUF1QixDQUN2QixJQUFJLGlDQUFlLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRTFDLE9BQU8sR0FBRyx1QkFBWSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFFM0MsTUFBTSx1QkFBdUIsR0FBRyxJQUFJLHdEQUE4QixDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDckYsY0FBYyxHQUFHLElBQUksK0JBQWMsQ0FBQyx1QkFBdUIsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUV0RSxPQUFPLEdBQUcsY0FBYyxDQUFDLE9BQU8sQ0FBQztJQUdyQyxDQUFDLENBQUMsQ0FBQztJQUdILFFBQVEsQ0FBQyxTQUFTLEVBQUU7UUFFaEIsRUFBRSxDQUFDLG1CQUFtQixFQUFFOztnQkFFcEIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO2dCQUUvQixNQUFNLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUUxQixDQUFDO1NBQUEsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLG9CQUFvQixFQUFFOztnQkFFckIsbUJBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO29CQUN4QyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7b0JBQy9CLE9BQU8sQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLGFBQWEsQ0FBQztvQkFFNUMsTUFBTSxRQUFRLEdBQUcsbUJBQVEsQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUNsRCxRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsR0FBRyxFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQyxDQUFDO2dCQUU3RCxDQUFDLENBQUMsQ0FBQztnQkFFSCxNQUFNLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUUxQixDQUFDO1NBQUEsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLHVCQUF1QixFQUFFOztnQkFFeEIsbUJBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO2dCQUU1QyxDQUFDLENBQUMsQ0FBQztnQkFFSCxNQUFNLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUUxQixDQUFDO1NBQUEsQ0FBQyxDQUFDO0lBRVAsQ0FBQyxDQUFDLENBQUM7SUFFSCxRQUFRLENBQUMsU0FBUyxFQUFFO1FBRWhCLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRTs7Z0JBRXJCLG1CQUFRLENBQUMsb0JBQW9CLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtvQkFFeEMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO29CQUMvQixPQUFPLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxhQUFhLENBQUM7b0JBRTVDLE1BQU0sUUFBUSxHQUFHLG1CQUFRLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDbEQsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEdBQUcsRUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUMsQ0FBQztnQkFDN0QsQ0FBQyxDQUFDLENBQUM7Z0JBRUgsTUFBTSxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFMUIsQ0FBQztTQUFBLENBQUMsQ0FBQztJQUVQLENBQUMsQ0FBQyxDQUFDO0FBRVAsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge01vY2tBZHZlcnRpc2luZ1BlcnNpc3RlbmNlTGF5ZXJ9IGZyb20gXCIuLi9kYXRhc3RvcmUvYWR2ZXJ0aXNlci9Nb2NrQWR2ZXJ0aXNpbmdQZXJzaXN0ZW5jZUxheWVyXCI7XG5pbXBvcnQge0RlZmF1bHRQZXJzaXN0ZW5jZUxheWVyfSBmcm9tICcuLi9kYXRhc3RvcmUvRGVmYXVsdFBlcnNpc3RlbmNlTGF5ZXInO1xuaW1wb3J0IHtNZW1vcnlEYXRhc3RvcmV9IGZyb20gJy4uL2RhdGFzdG9yZS9NZW1vcnlEYXRhc3RvcmUnO1xuaW1wb3J0IHtNb2RlbFBlcnNpc3Rlcn0gZnJvbSAnLi9Nb2RlbFBlcnNpc3Rlcic7XG5pbXBvcnQge0RvY01ldGFzLCBNb2NrRG9jTWV0YXN9IGZyb20gJy4uL21ldGFkYXRhL0RvY01ldGFzJztcbmltcG9ydCB7YXNzZXJ0fSBmcm9tICdjaGFpJztcbmltcG9ydCB7UHJvbWlzZXN9IGZyb20gXCIuLi91dGlsL1Byb21pc2VzXCI7XG5pbXBvcnQgd2FpdEZvckV4cGVjdCBmcm9tICd3YWl0LWZvci1leHBlY3QnO1xuaW1wb3J0IHtEb2NNZXRhfSBmcm9tIFwiLi4vbWV0YWRhdGEvRG9jTWV0YVwiO1xuaW1wb3J0IHtEZWZhdWx0UGVyc2lzdGVuY2VMYXllckhhbmRsZXJ9IGZyb20gJy4uL2RhdGFzdG9yZS9QZXJzaXN0ZW5jZUxheWVySGFuZGxlcic7XG5pbXBvcnQge0lEb2NNZXRhfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy9tZXRhZGF0YS9JRG9jTWV0YVwiO1xuXG5kZXNjcmliZSgnTW9kZWxQZXJzaXN0ZXInLCBmdW5jdGlvbigpIHtcblxuICAgIHRoaXMudGltZW91dCgxMDAwMCk7XG5cbiAgICBhc3luYyBmdW5jdGlvbiBhc3NlcnRXcml0ZXMobnJXcml0ZXM6IG51bWJlcikge1xuXG4gICAgICAgIGF3YWl0IFByb21pc2VzLndhaXRGb3IoMTAwMCk7XG5cbiAgICAgICAgYXdhaXQgd2FpdEZvckV4cGVjdCgoKSA9PiB7XG4gICAgICAgICAgICBhc3NlcnQuZXF1YWwobW9kZWxQZXJzaXN0ZXIubnJXcml0ZXMsIG5yV3JpdGVzKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXdhaXQgUHJvbWlzZXMud2FpdEZvcigxMDAwKTtcblxuICAgICAgICBhd2FpdCB3YWl0Rm9yRXhwZWN0KCgpID0+IHtcbiAgICAgICAgICAgIGFzc2VydC5lcXVhbChtb2RlbFBlcnNpc3Rlci5ucldyaXRlcywgbnJXcml0ZXMpO1xuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIGxldCBwZXJzaXN0ZW5jZUxheWVyOiBNb2NrQWR2ZXJ0aXNpbmdQZXJzaXN0ZW5jZUxheWVyO1xuXG4gICAgbGV0IGRvY01ldGE6IElEb2NNZXRhO1xuXG4gICAgbGV0IG1vZGVsUGVyc2lzdGVyOiBNb2RlbFBlcnNpc3RlcjtcblxuICAgIGJlZm9yZUVhY2goZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJiZWZvcmVFYWNoOlwiKVxuXG4gICAgICAgIHBlcnNpc3RlbmNlTGF5ZXIgPVxuICAgICAgICAgICAgbmV3IE1vY2tBZHZlcnRpc2luZ1BlcnNpc3RlbmNlTGF5ZXIoXG4gICAgICAgICAgICAgICAgbmV3IERlZmF1bHRQZXJzaXN0ZW5jZUxheWVyKFxuICAgICAgICAgICAgICAgICAgICBuZXcgTWVtb3J5RGF0YXN0b3JlKCkpLCB0cnVlKTtcblxuICAgICAgICBkb2NNZXRhID0gTW9ja0RvY01ldGFzLmNyZWF0ZU1vY2tEb2NNZXRhKCk7XG5cbiAgICAgICAgY29uc3QgcGVyc2lzdGVuY2VMYXllckhhbmRsZXIgPSBuZXcgRGVmYXVsdFBlcnNpc3RlbmNlTGF5ZXJIYW5kbGVyKHBlcnNpc3RlbmNlTGF5ZXIpO1xuICAgICAgICBtb2RlbFBlcnNpc3RlciA9IG5ldyBNb2RlbFBlcnNpc3RlcihwZXJzaXN0ZW5jZUxheWVySGFuZGxlciwgZG9jTWV0YSk7XG5cbiAgICAgICAgZG9jTWV0YSA9IG1vZGVsUGVyc2lzdGVyLmRvY01ldGE7XG5cblxuICAgIH0pO1xuXG5cbiAgICBkZXNjcmliZSgnYmF0Y2hlZCcsIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGl0KFwid2l0aCBzaW1wbGUgd3JpdGVcIiwgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgIGRvY01ldGEuZG9jSW5mby50aXRsZSA9ICdhc2RmJztcblxuICAgICAgICAgICAgYXdhaXQgYXNzZXJ0V3JpdGVzKDEpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KFwid2l0aCBiYXRjaGVkIHdyaXRlXCIsIGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICBEb2NNZXRhcy53aXRoQmF0Y2hlZE11dGF0aW9ucyhkb2NNZXRhLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZG9jTWV0YS5kb2NJbmZvLnRpdGxlID0gJ2FzZGYnO1xuICAgICAgICAgICAgICAgIGRvY01ldGEuZG9jSW5mby5kZXNjcmlwdGlvbiA9ICdoZWxsbyB3b3JsZCc7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBwYWdlTWV0YSA9IERvY01ldGFzLmdldFBhZ2VNZXRhKGRvY01ldGEsIDEpO1xuICAgICAgICAgICAgICAgIHBhZ2VNZXRhLnBhZ2VJbmZvLmRpbWVuc2lvbnMgPSB7d2lkdGg6IDEwMCwgaGVpZ2h0OiAxMDB9O1xuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgYXdhaXQgYXNzZXJ0V3JpdGVzKDEpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KFwid2l0aCBubyBiYXRjaGVkIHdyaXRlXCIsIGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICBEb2NNZXRhcy53aXRoQmF0Y2hlZE11dGF0aW9ucyhkb2NNZXRhLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gbm8gd3JpdGVzXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgYXdhaXQgYXNzZXJ0V3JpdGVzKDApO1xuXG4gICAgICAgIH0pO1xuXG4gICAgfSk7XG5cbiAgICBkZXNjcmliZSgnc2tpcHBlZCcsIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGl0KFwid2l0aCBza2lwcGVkIHdyaXRlXCIsIGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICBEb2NNZXRhcy53aXRoU2tpcHBlZE11dGF0aW9ucyhkb2NNZXRhLCAoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBkb2NNZXRhLmRvY0luZm8udGl0bGUgPSAnYXNkZic7XG4gICAgICAgICAgICAgICAgZG9jTWV0YS5kb2NJbmZvLmRlc2NyaXB0aW9uID0gJ2hlbGxvIHdvcmxkJztcblxuICAgICAgICAgICAgICAgIGNvbnN0IHBhZ2VNZXRhID0gRG9jTWV0YXMuZ2V0UGFnZU1ldGEoZG9jTWV0YSwgMSk7XG4gICAgICAgICAgICAgICAgcGFnZU1ldGEucGFnZUluZm8uZGltZW5zaW9ucyA9IHt3aWR0aDogMTAwLCBoZWlnaHQ6IDEwMH07XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgYXdhaXQgYXNzZXJ0V3JpdGVzKDApO1xuXG4gICAgICAgIH0pO1xuXG4gICAgfSk7XG5cbn0pO1xuIl19