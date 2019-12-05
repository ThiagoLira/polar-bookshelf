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
const chai_1 = require("chai");
const Batcher_1 = require("./Batcher");
const Assertions_1 = require("../../test/Assertions");
describe('Batcher', function () {
    it("Verify first active and then passive batches.", function () {
        return __awaiter(this, void 0, void 0, function* () {
            let mockExecutor = new MockExecutor();
            let batcher = new Batcher_1.Batcher(() => mockExecutor.execute());
            let b0 = batcher.enqueue();
            let b1 = batcher.enqueue();
            chai_1.assert.ok(b0 instanceof Batcher_1.ActiveBatch);
            chai_1.assert.ok(b1 instanceof Batcher_1.PassiveBatch);
        });
    });
    it("Stats across iterations", function () {
        return __awaiter(this, void 0, void 0, function* () {
            let mockExecutor = new MockExecutor();
            let batcher = new Batcher_1.Batcher(() => mockExecutor.execute());
            let b0 = batcher.enqueue();
            let b1 = batcher.enqueue();
            let b2 = batcher.enqueue();
            chai_1.assert.equal(mockExecutor.completions.length, 3);
            mockExecutor.completions.forEach(completion => completion.resolve());
            yield b0.run();
            chai_1.assert.equal(b0.ticket.executed, true);
            Assertions_1.assertJSON(b0, {
                "batched": 3,
                "batches": 1,
                "ticketsPerBatch": [
                    3
                ],
                "tickets": [],
                "ticket": {
                    "executed": true,
                    "promise": {}
                }
            });
            chai_1.assert.equal(b1.ticket.executed, true);
            chai_1.assert.equal(b2.ticket.executed, true);
        });
    });
});
class MockExecutor {
    constructor() {
        this.completions = [];
        this.resolve = false;
        this.reject = false;
    }
    execute() {
        return new Promise((resolve, reject) => {
            if (this.resolve) {
                resolve();
                return;
            }
            if (this.reject) {
                reject(new Error("Rejecting result"));
                return;
            }
            this.completions.push({ resolve, reject });
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmF0Y2hlclRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJCYXRjaGVyVGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLCtCQUE0QjtBQUM1Qix1Q0FBNkQ7QUFDN0Qsc0RBQWlEO0FBRWpELFFBQVEsQ0FBQyxTQUFTLEVBQUU7SUFFaEIsRUFBRSxDQUFDLCtDQUErQyxFQUFFOztZQUVoRCxJQUFJLFlBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1lBRXRDLElBQUksT0FBTyxHQUFHLElBQUksaUJBQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztZQUV4RCxJQUFJLEVBQUUsR0FBRyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDM0IsSUFBSSxFQUFFLEdBQUcsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBRTNCLGFBQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxZQUFZLHFCQUFXLENBQUMsQ0FBQztZQUNyQyxhQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsWUFBWSxzQkFBWSxDQUFDLENBQUM7UUFFMUMsQ0FBQztLQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyx5QkFBeUIsRUFBRTs7WUFFMUIsSUFBSSxZQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztZQUV0QyxJQUFJLE9BQU8sR0FBRyxJQUFJLGlCQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7WUFFeEQsSUFBSSxFQUFFLEdBQUcsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQzNCLElBQUksRUFBRSxHQUFHLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUMzQixJQUFJLEVBQUUsR0FBRyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7WUFFM0IsYUFBTSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztZQUVqRCxZQUFZLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1lBRXJFLE1BQU0sRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBRWYsYUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUN2Qyx1QkFBVSxDQUFDLEVBQUUsRUFBRTtnQkFDWCxTQUFTLEVBQUUsQ0FBQztnQkFDWixTQUFTLEVBQUUsQ0FBQztnQkFDWixpQkFBaUIsRUFBRTtvQkFDZixDQUFDO2lCQUNKO2dCQUNELFNBQVMsRUFBRSxFQUFFO2dCQUNiLFFBQVEsRUFBRTtvQkFDTixVQUFVLEVBQUUsSUFBSTtvQkFDaEIsU0FBUyxFQUFFLEVBQUU7aUJBQ2hCO2FBQ0osQ0FBQyxDQUFDO1lBRUgsYUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUN2QyxhQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRTNDLENBQUM7S0FBQSxDQUFDLENBQUM7QUFFUCxDQUFDLENBQUMsQ0FBQztBQUVILE1BQU0sWUFBWTtJQUFsQjtRQUVvQixnQkFBVyxHQUF1QixFQUFFLENBQUM7UUFFOUMsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUV6QixXQUFNLEdBQVksS0FBSyxDQUFDO0lBc0JuQyxDQUFDO0lBcEJHLE9BQU87UUFFSCxPQUFPLElBQUksT0FBTyxDQUFPLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBRXpDLElBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDYixPQUFPLEVBQUUsQ0FBQztnQkFDVixPQUFPO2FBQ1Y7WUFFRCxJQUFHLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ1osTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztnQkFDdEMsT0FBTzthQUNWO1lBRUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFDLENBQUMsQ0FBQztRQUU3QyxDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7Q0FFSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YXNzZXJ0fSBmcm9tICdjaGFpJztcbmltcG9ydCB7QWN0aXZlQmF0Y2gsIEJhdGNoZXIsIFBhc3NpdmVCYXRjaH0gZnJvbSAnLi9CYXRjaGVyJztcbmltcG9ydCB7YXNzZXJ0SlNPTn0gZnJvbSAnLi4vLi4vdGVzdC9Bc3NlcnRpb25zJztcblxuZGVzY3JpYmUoJ0JhdGNoZXInLCBmdW5jdGlvbigpIHtcblxuICAgIGl0KFwiVmVyaWZ5IGZpcnN0IGFjdGl2ZSBhbmQgdGhlbiBwYXNzaXZlIGJhdGNoZXMuXCIsIGFzeW5jIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBsZXQgbW9ja0V4ZWN1dG9yID0gbmV3IE1vY2tFeGVjdXRvcigpO1xuXG4gICAgICAgIGxldCBiYXRjaGVyID0gbmV3IEJhdGNoZXIoKCkgPT4gbW9ja0V4ZWN1dG9yLmV4ZWN1dGUoKSk7XG5cbiAgICAgICAgbGV0IGIwID0gYmF0Y2hlci5lbnF1ZXVlKCk7XG4gICAgICAgIGxldCBiMSA9IGJhdGNoZXIuZW5xdWV1ZSgpO1xuXG4gICAgICAgIGFzc2VydC5vayhiMCBpbnN0YW5jZW9mIEFjdGl2ZUJhdGNoKTtcbiAgICAgICAgYXNzZXJ0Lm9rKGIxIGluc3RhbmNlb2YgUGFzc2l2ZUJhdGNoKTtcblxuICAgIH0pO1xuXG4gICAgaXQoXCJTdGF0cyBhY3Jvc3MgaXRlcmF0aW9uc1wiLCBhc3luYyBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgbGV0IG1vY2tFeGVjdXRvciA9IG5ldyBNb2NrRXhlY3V0b3IoKTtcblxuICAgICAgICBsZXQgYmF0Y2hlciA9IG5ldyBCYXRjaGVyKCgpID0+IG1vY2tFeGVjdXRvci5leGVjdXRlKCkpO1xuXG4gICAgICAgIGxldCBiMCA9IGJhdGNoZXIuZW5xdWV1ZSgpO1xuICAgICAgICBsZXQgYjEgPSBiYXRjaGVyLmVucXVldWUoKTtcbiAgICAgICAgbGV0IGIyID0gYmF0Y2hlci5lbnF1ZXVlKCk7XG5cbiAgICAgICAgYXNzZXJ0LmVxdWFsKG1vY2tFeGVjdXRvci5jb21wbGV0aW9ucy5sZW5ndGgsIDMpO1xuXG4gICAgICAgIG1vY2tFeGVjdXRvci5jb21wbGV0aW9ucy5mb3JFYWNoKGNvbXBsZXRpb24gPT4gY29tcGxldGlvbi5yZXNvbHZlKCkpO1xuXG4gICAgICAgIGF3YWl0IGIwLnJ1bigpO1xuXG4gICAgICAgIGFzc2VydC5lcXVhbChiMC50aWNrZXQuZXhlY3V0ZWQsIHRydWUpO1xuICAgICAgICBhc3NlcnRKU09OKGIwLCB7XG4gICAgICAgICAgICBcImJhdGNoZWRcIjogMyxcbiAgICAgICAgICAgIFwiYmF0Y2hlc1wiOiAxLFxuICAgICAgICAgICAgXCJ0aWNrZXRzUGVyQmF0Y2hcIjogW1xuICAgICAgICAgICAgICAgIDNcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcInRpY2tldHNcIjogW10sXG4gICAgICAgICAgICBcInRpY2tldFwiOiB7XG4gICAgICAgICAgICAgICAgXCJleGVjdXRlZFwiOiB0cnVlLFxuICAgICAgICAgICAgICAgIFwicHJvbWlzZVwiOiB7fVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBhc3NlcnQuZXF1YWwoYjEudGlja2V0LmV4ZWN1dGVkLCB0cnVlKTtcbiAgICAgICAgYXNzZXJ0LmVxdWFsKGIyLnRpY2tldC5leGVjdXRlZCwgdHJ1ZSk7XG5cbiAgICB9KTtcblxufSk7XG5cbmNsYXNzIE1vY2tFeGVjdXRvciB7XG5cbiAgICBwdWJsaWMgcmVhZG9ubHkgY29tcGxldGlvbnM6IENvbXBsZXRpb248dm9pZD5bXSA9IFtdO1xuXG4gICAgcHVibGljIHJlc29sdmU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHB1YmxpYyByZWplY3Q6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGV4ZWN1dGUoKTogUHJvbWlzZTx2b2lkPiB7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcblxuICAgICAgICAgICAgaWYodGhpcy5yZXNvbHZlKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYodGhpcy5yZWplY3QpIHtcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKFwiUmVqZWN0aW5nIHJlc3VsdFwiKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmNvbXBsZXRpb25zLnB1c2goe3Jlc29sdmUsIHJlamVjdH0pO1xuXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG59XG5cbmludGVyZmFjZSBDb21wbGV0aW9uPFQ+IHtcblxuICAgIHJlYWRvbmx5IHJlc29sdmU6ICgpID0+IFQ7XG4gICAgcmVhZG9ubHkgcmVqZWN0OiAoZXJyOiBFcnJvcikgPT4gdm9pZDtcblxufVxuIl19