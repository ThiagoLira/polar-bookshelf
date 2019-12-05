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
const DiskDatastore_1 = require("../../../../datastore/DiskDatastore");
const FlashcardDescriptors_1 = require("./FlashcardDescriptors");
const DefaultPersistenceLayer_1 = require("../../../../datastore/DefaultPersistenceLayer");
const chai_1 = require("chai");
describe('FlashcardDescriptors', function () {
    xit("basic", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const diskDatastore = new DiskDatastore_1.DiskDatastore();
            const persistenceLayer = new DefaultPersistenceLayer_1.DefaultPersistenceLayer(diskDatastore);
            yield persistenceLayer.init();
            const docMeta = yield persistenceLayer.getDocMeta("12FWNxnJk2yGPAXKQgH7");
            const docMetaSupplierCollection = [() => __awaiter(this, void 0, void 0, function* () { return docMeta; })];
            const flashcardDescriptors = yield FlashcardDescriptors_1.FlashcardDescriptors.toFlashcardDescriptors(docMetaSupplierCollection);
            chai_1.assert.equal(flashcardDescriptors.length, 2);
            console.log("FIXME: ", JSON.stringify(flashcardDescriptors, null, "  "));
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmxhc2hjYXJkRGVzY3JpcHRvcnNUZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRmxhc2hjYXJkRGVzY3JpcHRvcnNUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRUEsdUVBQWtFO0FBQ2xFLGlFQUE0RDtBQUc1RCwyRkFBc0Y7QUFDdEYsK0JBQTRCO0FBRTVCLFFBQVEsQ0FBQyxzQkFBc0IsRUFBRTtJQUU3QixHQUFHLENBQUMsT0FBTyxFQUFFOztZQUVULE1BQU0sYUFBYSxHQUFHLElBQUksNkJBQWEsRUFBRSxDQUFDO1lBQzFDLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxpREFBdUIsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNwRSxNQUFNLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDO1lBRTlCLE1BQU0sT0FBTyxHQUFHLE1BQU0sZ0JBQWdCLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUFDLENBQUM7WUFFMUUsTUFBTSx5QkFBeUIsR0FBOEIsQ0FBRSxHQUFTLEVBQUUsZ0RBQUMsT0FBQSxPQUFRLENBQUEsR0FBQSxDQUFDLENBQUM7WUFFckYsTUFBTSxvQkFBb0IsR0FBRyxNQUFNLDJDQUFvQixDQUFDLHNCQUFzQixDQUFDLHlCQUF5QixDQUFDLENBQUM7WUFFMUcsYUFBTSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFFN0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUU3RSxDQUFDO0tBQUEsQ0FBQyxDQUFDO0FBR1AsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge01lZGlhQ29udGVudHN9IGZyb20gJy4vTWVkaWFDb250ZW50cyc7XG5pbXBvcnQge2Fzc2VydEpTT059IGZyb20gJy4uLy4uLy4uLy4uL3Rlc3QvQXNzZXJ0aW9ucyc7XG5pbXBvcnQge0Rpc2tEYXRhc3RvcmV9IGZyb20gJy4uLy4uLy4uLy4uL2RhdGFzdG9yZS9EaXNrRGF0YXN0b3JlJztcbmltcG9ydCB7Rmxhc2hjYXJkRGVzY3JpcHRvcnN9IGZyb20gJy4vRmxhc2hjYXJkRGVzY3JpcHRvcnMnO1xuaW1wb3J0IHtEb2NNZXRhU3VwcGxpZXJDb2xsZWN0aW9ufSBmcm9tICcuLi8uLi8uLi8uLi9tZXRhZGF0YS9Eb2NNZXRhU3VwcGxpZXJDb2xsZWN0aW9uJztcbmltcG9ydCB7RG9jTWV0YX0gZnJvbSAnLi4vLi4vLi4vLi4vbWV0YWRhdGEvRG9jTWV0YSc7XG5pbXBvcnQge0RlZmF1bHRQZXJzaXN0ZW5jZUxheWVyfSBmcm9tICcuLi8uLi8uLi8uLi9kYXRhc3RvcmUvRGVmYXVsdFBlcnNpc3RlbmNlTGF5ZXInO1xuaW1wb3J0IHthc3NlcnR9IGZyb20gJ2NoYWknO1xuXG5kZXNjcmliZSgnRmxhc2hjYXJkRGVzY3JpcHRvcnMnLCBmdW5jdGlvbigpIHtcblxuICAgIHhpdChcImJhc2ljXCIsIGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGNvbnN0IGRpc2tEYXRhc3RvcmUgPSBuZXcgRGlza0RhdGFzdG9yZSgpO1xuICAgICAgICBjb25zdCBwZXJzaXN0ZW5jZUxheWVyID0gbmV3IERlZmF1bHRQZXJzaXN0ZW5jZUxheWVyKGRpc2tEYXRhc3RvcmUpO1xuICAgICAgICBhd2FpdCBwZXJzaXN0ZW5jZUxheWVyLmluaXQoKTtcblxuICAgICAgICBjb25zdCBkb2NNZXRhID0gYXdhaXQgcGVyc2lzdGVuY2VMYXllci5nZXREb2NNZXRhKFwiMTJGV054bkprMnlHUEFYS1FnSDdcIik7XG5cbiAgICAgICAgY29uc3QgZG9jTWV0YVN1cHBsaWVyQ29sbGVjdGlvbjogRG9jTWV0YVN1cHBsaWVyQ29sbGVjdGlvbiA9IFsgYXN5bmMgKCkgPT4gZG9jTWV0YSFdO1xuXG4gICAgICAgIGNvbnN0IGZsYXNoY2FyZERlc2NyaXB0b3JzID0gYXdhaXQgRmxhc2hjYXJkRGVzY3JpcHRvcnMudG9GbGFzaGNhcmREZXNjcmlwdG9ycyhkb2NNZXRhU3VwcGxpZXJDb2xsZWN0aW9uKTtcblxuICAgICAgICBhc3NlcnQuZXF1YWwoZmxhc2hjYXJkRGVzY3JpcHRvcnMubGVuZ3RoLCAyKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhcIkZJWE1FOiBcIiwgSlNPTi5zdHJpbmdpZnkoZmxhc2hjYXJkRGVzY3JpcHRvcnMsIG51bGwsIFwiICBcIikpO1xuXG4gICAgfSk7XG5cblxufSk7XG4iXX0=