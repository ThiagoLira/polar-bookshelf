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
const AsyncSerializer_1 = require("./AsyncSerializer");
const chai_1 = require("chai");
const Assertions_1 = require("../test/Assertions");
const Latch_1 = require("polar-shared/src/util/Latch");
describe('AsyncSerializer', function () {
    it('with no existing entries', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const queue = new AsyncSerializer_1.AsyncSerializer();
            let executed = false;
            yield queue.execute(() => __awaiter(this, void 0, void 0, function* () { return executed = true; }));
            chai_1.assert.ok(executed);
        });
    });
    it('with two executions and the second completing before the first', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const latch = new Latch_1.Latch();
            const queue = new AsyncSerializer_1.AsyncSerializer();
            const order = [];
            const latch0 = new Latch_1.Latch();
            const latch1 = new Latch_1.Latch();
            queue.execute(() => __awaiter(this, void 0, void 0, function* () { return yield latch0.get(); }))
                .then(() => {
                order.push(0);
            })
                .catch(err => latch.reject(err));
            queue.execute(() => __awaiter(this, void 0, void 0, function* () { return yield latch1.get(); }))
                .then(() => {
                order.push(1);
                latch.resolve(true);
            })
                .catch(err => latch.reject(err));
            latch1.resolve(true);
            latch0.resolve(true);
            yield latch.get();
            Assertions_1.assertJSON(order, [0, 1]);
        });
    });
    it('with normal failed execution not blocking us', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const latch = new Latch_1.Latch();
            const queue = new AsyncSerializer_1.AsyncSerializer();
            const order = [];
            const latch0 = new Latch_1.Latch();
            const latch1 = new Latch_1.Latch();
            let error;
            queue.execute(() => __awaiter(this, void 0, void 0, function* () { return yield latch0.get(); }))
                .catch(err => error = err);
            queue.execute(() => __awaiter(this, void 0, void 0, function* () { return yield latch1.get(); }))
                .then(() => {
                order.push(1);
                latch.resolve(true);
            })
                .catch(err => latch.reject(err));
            latch1.resolve(true);
            latch0.reject(new Error("this is an error"));
            yield latch.get();
            Assertions_1.assertJSON(order, [1]);
            chai_1.assert.equal(error !== undefined, true);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXN5bmNTZXJpYWxpemVyVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkFzeW5jU2VyaWFsaXplclRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx1REFBa0Q7QUFFbEQsK0JBQTRCO0FBQzVCLG1EQUE4QztBQUM5Qyx1REFBa0Q7QUFFbEQsUUFBUSxDQUFDLGlCQUFpQixFQUFFO0lBRXhCLEVBQUUsQ0FBQywwQkFBMEIsRUFBRTs7WUFFM0IsTUFBTSxLQUFLLEdBQUcsSUFBSSxpQ0FBZSxFQUFFLENBQUM7WUFFcEMsSUFBSSxRQUFRLEdBQVksS0FBSyxDQUFDO1lBRTlCLE1BQU0sS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFTLEVBQUUsZ0RBQUMsT0FBQSxRQUFRLEdBQUcsSUFBSSxDQUFBLEdBQUEsQ0FBQyxDQUFDO1lBRWpELGFBQU0sQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFeEIsQ0FBQztLQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxnRUFBZ0UsRUFBRTs7WUFFakUsTUFBTSxLQUFLLEdBQUcsSUFBSSxhQUFLLEVBQUUsQ0FBQztZQUMxQixNQUFNLEtBQUssR0FBRyxJQUFJLGlDQUFlLEVBQUUsQ0FBQztZQUVwQyxNQUFNLEtBQUssR0FBYSxFQUFFLENBQUM7WUFFM0IsTUFBTSxNQUFNLEdBQUcsSUFBSSxhQUFLLEVBQUUsQ0FBQztZQUMzQixNQUFNLE1BQU0sR0FBRyxJQUFJLGFBQUssRUFBRSxDQUFDO1lBRTNCLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBUyxFQUFFLGdEQUFDLE9BQUEsTUFBTSxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUEsR0FBQSxDQUFDO2lCQUN4QyxJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUNQLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEIsQ0FBQyxDQUFDO2lCQUNELEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUVyQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQVMsRUFBRSxnREFBQyxPQUFBLE1BQU0sTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFBLEdBQUEsQ0FBQztpQkFDeEMsSUFBSSxDQUFDLEdBQUcsRUFBRTtnQkFDUCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNkLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEIsQ0FBQyxDQUFDO2lCQUNELEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUVyQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3JCLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFckIsTUFBTSxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUM7WUFFbEIsdUJBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUU5QixDQUFDO0tBQUEsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDhDQUE4QyxFQUFFOztZQUUvQyxNQUFNLEtBQUssR0FBRyxJQUFJLGFBQUssRUFBRSxDQUFDO1lBQzFCLE1BQU0sS0FBSyxHQUFHLElBQUksaUNBQWUsRUFBRSxDQUFDO1lBRXBDLE1BQU0sS0FBSyxHQUFhLEVBQUUsQ0FBQztZQUUzQixNQUFNLE1BQU0sR0FBRyxJQUFJLGFBQUssRUFBRSxDQUFDO1lBQzNCLE1BQU0sTUFBTSxHQUFHLElBQUksYUFBSyxFQUFFLENBQUM7WUFFM0IsSUFBSSxLQUF3QixDQUFDO1lBRTdCLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBUyxFQUFFLGdEQUFDLE9BQUEsTUFBTSxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUEsR0FBQSxDQUFDO2lCQUN4QyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFFL0IsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFTLEVBQUUsZ0RBQUMsT0FBQSxNQUFNLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQSxHQUFBLENBQUM7aUJBQ3hDLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQ1AsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDZCxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3hCLENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFFckMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNyQixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztZQUU3QyxNQUFNLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUVsQix1QkFBVSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFdkIsYUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUssU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRTVDLENBQUM7S0FBQSxDQUFDLENBQUM7QUFFUCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXN5bmNTZXJpYWxpemVyfSBmcm9tICcuL0FzeW5jU2VyaWFsaXplcic7XG5cbmltcG9ydCB7YXNzZXJ0fSBmcm9tICdjaGFpJztcbmltcG9ydCB7YXNzZXJ0SlNPTn0gZnJvbSAnLi4vdGVzdC9Bc3NlcnRpb25zJztcbmltcG9ydCB7TGF0Y2h9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL3V0aWwvTGF0Y2hcIjtcblxuZGVzY3JpYmUoJ0FzeW5jU2VyaWFsaXplcicsIGZ1bmN0aW9uKCkge1xuXG4gICAgaXQoJ3dpdGggbm8gZXhpc3RpbmcgZW50cmllcycsIGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGNvbnN0IHF1ZXVlID0gbmV3IEFzeW5jU2VyaWFsaXplcigpO1xuXG4gICAgICAgIGxldCBleGVjdXRlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgICAgIGF3YWl0IHF1ZXVlLmV4ZWN1dGUoYXN5bmMgKCkgPT4gZXhlY3V0ZWQgPSB0cnVlKTtcblxuICAgICAgICBhc3NlcnQub2soZXhlY3V0ZWQpO1xuXG4gICAgfSk7XG5cbiAgICBpdCgnd2l0aCB0d28gZXhlY3V0aW9ucyBhbmQgdGhlIHNlY29uZCBjb21wbGV0aW5nIGJlZm9yZSB0aGUgZmlyc3QnLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICBjb25zdCBsYXRjaCA9IG5ldyBMYXRjaCgpO1xuICAgICAgICBjb25zdCBxdWV1ZSA9IG5ldyBBc3luY1NlcmlhbGl6ZXIoKTtcblxuICAgICAgICBjb25zdCBvcmRlcjogbnVtYmVyW10gPSBbXTtcblxuICAgICAgICBjb25zdCBsYXRjaDAgPSBuZXcgTGF0Y2goKTtcbiAgICAgICAgY29uc3QgbGF0Y2gxID0gbmV3IExhdGNoKCk7XG5cbiAgICAgICAgcXVldWUuZXhlY3V0ZShhc3luYyAoKSA9PiBhd2FpdCBsYXRjaDAuZ2V0KCkpXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgb3JkZXIucHVzaCgwKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IGxhdGNoLnJlamVjdChlcnIpKTtcblxuICAgICAgICBxdWV1ZS5leGVjdXRlKGFzeW5jICgpID0+IGF3YWl0IGxhdGNoMS5nZXQoKSlcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBvcmRlci5wdXNoKDEpO1xuICAgICAgICAgICAgICAgIGxhdGNoLnJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBsYXRjaC5yZWplY3QoZXJyKSk7XG5cbiAgICAgICAgbGF0Y2gxLnJlc29sdmUodHJ1ZSk7XG4gICAgICAgIGxhdGNoMC5yZXNvbHZlKHRydWUpO1xuXG4gICAgICAgIGF3YWl0IGxhdGNoLmdldCgpO1xuXG4gICAgICAgIGFzc2VydEpTT04ob3JkZXIsIFswLCAxXSk7XG5cbiAgICB9KTtcblxuICAgIGl0KCd3aXRoIG5vcm1hbCBmYWlsZWQgZXhlY3V0aW9uIG5vdCBibG9ja2luZyB1cycsIGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGNvbnN0IGxhdGNoID0gbmV3IExhdGNoKCk7XG4gICAgICAgIGNvbnN0IHF1ZXVlID0gbmV3IEFzeW5jU2VyaWFsaXplcigpO1xuXG4gICAgICAgIGNvbnN0IG9yZGVyOiBudW1iZXJbXSA9IFtdO1xuXG4gICAgICAgIGNvbnN0IGxhdGNoMCA9IG5ldyBMYXRjaCgpO1xuICAgICAgICBjb25zdCBsYXRjaDEgPSBuZXcgTGF0Y2goKTtcblxuICAgICAgICBsZXQgZXJyb3I6IEVycm9yIHwgdW5kZWZpbmVkO1xuXG4gICAgICAgIHF1ZXVlLmV4ZWN1dGUoYXN5bmMgKCkgPT4gYXdhaXQgbGF0Y2gwLmdldCgpKVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBlcnJvciA9IGVycik7XG5cbiAgICAgICAgcXVldWUuZXhlY3V0ZShhc3luYyAoKSA9PiBhd2FpdCBsYXRjaDEuZ2V0KCkpXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgb3JkZXIucHVzaCgxKTtcbiAgICAgICAgICAgICAgICBsYXRjaC5yZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gbGF0Y2gucmVqZWN0KGVycikpO1xuXG4gICAgICAgIGxhdGNoMS5yZXNvbHZlKHRydWUpO1xuICAgICAgICBsYXRjaDAucmVqZWN0KG5ldyBFcnJvcihcInRoaXMgaXMgYW4gZXJyb3JcIikpO1xuXG4gICAgICAgIGF3YWl0IGxhdGNoLmdldCgpO1xuXG4gICAgICAgIGFzc2VydEpTT04ob3JkZXIsIFsxXSk7XG5cbiAgICAgICAgYXNzZXJ0LmVxdWFsKGVycm9yICE9PSB1bmRlZmluZWQsIHRydWUpO1xuXG4gICAgfSk7XG5cbn0pO1xuIl19