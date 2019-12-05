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
const Promises_1 = require("./Promises");
const Latch_1 = require("polar-shared/src/util/Latch");
describe('Promises', function () {
    it("Basic", function () {
        return __awaiter(this, void 0, void 0, function* () {
        });
    });
    describe("any", function () {
        return __awaiter(this, void 0, void 0, function* () {
            it("with one successful", function () {
                return __awaiter(this, void 0, void 0, function* () {
                    const p = new Latch_1.Latch();
                    const result = Promises_1.Promises.any(p.get());
                    p.resolve(true);
                    chai_1.assert.equal(yield result, true);
                });
            });
            it("with one rejected", function () {
                return __awaiter(this, void 0, void 0, function* () {
                    const p = new Latch_1.Latch();
                    const result = Promises_1.Promises.any(p.get());
                    p.reject(new Error("this is a fake error"));
                    yield assertThrowsAsync(() => __awaiter(this, void 0, void 0, function* () { return yield result; }));
                });
            });
            it("with two successful", function () {
                return __awaiter(this, void 0, void 0, function* () {
                    const p0 = new Latch_1.Latch();
                    const p1 = new Latch_1.Latch();
                    const result = Promises_1.Promises.any(p0.get(), p1.get());
                    p0.resolve("p0");
                    p1.resolve("p1");
                    chai_1.assert.equal(yield result, "p0");
                });
            });
            it("with first successful", function () {
                return __awaiter(this, void 0, void 0, function* () {
                    const p0 = new Latch_1.Latch();
                    const p1 = new Latch_1.Latch();
                    const result = Promises_1.Promises.any(p0.get(), p1.get());
                    p0.resolve("p0");
                    p1.reject(new Error("fake"));
                    chai_1.assert.equal(yield result, "p0");
                });
            });
            it("with second successful", function () {
                return __awaiter(this, void 0, void 0, function* () {
                    const p0 = new Latch_1.Latch();
                    const p1 = new Latch_1.Latch();
                    const result = Promises_1.Promises.any(p0.get(), p1.get());
                    p0.reject(new Error("fake"));
                    p1.resolve("p1");
                    chai_1.assert.equal(yield result, "p1");
                });
            });
            it("with both failing", function () {
                return __awaiter(this, void 0, void 0, function* () {
                    const p0 = new Latch_1.Latch();
                    const p1 = new Latch_1.Latch();
                    const result = Promises_1.Promises.any(p0.get(), p1.get());
                    p0.reject(new Error("fake"));
                    p1.reject(new Error("fake"));
                    yield assertThrowsAsync(() => __awaiter(this, void 0, void 0, function* () { return yield result; }));
                });
            });
        });
    });
});
function assertThrowsAsync(func) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield func();
            chai_1.assert.isTrue(false, "Did not throw an exception.");
        }
        catch (e) {
        }
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvbWlzZXNUZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUHJvbWlzZXNUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsK0JBQTRCO0FBQzVCLHlDQUFvQztBQUNwQyx1REFBa0Q7QUFFbEQsUUFBUSxDQUFDLFVBQVUsRUFBRTtJQUVqQixFQUFFLENBQUMsT0FBTyxFQUFFOztRQUVaLENBQUM7S0FBQSxDQUFDLENBQUM7SUFFSCxRQUFRLENBQUMsS0FBSyxFQUFFOztZQUVaLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRTs7b0JBRXRCLE1BQU0sQ0FBQyxHQUFHLElBQUksYUFBSyxFQUFXLENBQUM7b0JBRS9CLE1BQU0sTUFBTSxHQUFHLG1CQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO29CQUVyQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUVoQixhQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUVyQyxDQUFDO2FBQUEsQ0FBQyxDQUFDO1lBRUgsRUFBRSxDQUFDLG1CQUFtQixFQUFFOztvQkFFcEIsTUFBTSxDQUFDLEdBQUcsSUFBSSxhQUFLLEVBQVcsQ0FBQztvQkFFL0IsTUFBTSxNQUFNLEdBQUcsbUJBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7b0JBRXJDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDO29CQUU1QyxNQUFNLGlCQUFpQixDQUFDLEdBQVMsRUFBRSxnREFBQyxPQUFBLE1BQU0sTUFBTSxDQUFBLEdBQUEsQ0FBQyxDQUFDO2dCQUV0RCxDQUFDO2FBQUEsQ0FBQyxDQUFDO1lBRUgsRUFBRSxDQUFDLHFCQUFxQixFQUFFOztvQkFFdEIsTUFBTSxFQUFFLEdBQUcsSUFBSSxhQUFLLEVB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YWknO1xuaW1wb3J0IHtQcm9taXNlc30gZnJvbSAnLi9Qcm9taXNlcyc7XG5pbXBvcnQge0xhdGNofSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy91dGlsL0xhdGNoXCI7XG5cbmRlc2NyaWJlKCdQcm9taXNlcycsIGZ1bmN0aW9uKCkge1xuXG4gICAgaXQoXCJCYXNpY1wiLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgIH0pO1xuXG4gICAgZGVzY3JpYmUoXCJhbnlcIiwgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgaXQoXCJ3aXRoIG9uZSBzdWNjZXNzZnVsXCIsIGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICBjb25zdCBwID0gbmV3IExhdGNoPGJvb2xlYW4+KCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IFByb21pc2VzLmFueShwLmdldCgpKTtcblxuICAgICAgICAgICAgcC5yZXNvbHZlKHRydWUpO1xuXG4gICAgICAgICAgICBhc3NlcnQuZXF1YWwoYXdhaXQgcmVzdWx0LCB0cnVlKTtcblxuICAgICAgICB9KTtcblxuICAgICAgICBpdChcIndpdGggb25lIHJlamVjdGVkXCIsIGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICBjb25zdCBwID0gbmV3IExhdGNoPGJvb2xlYW4+KCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IFByb21pc2VzLmFueShwLmdldCgpKTtcblxuICAgICAgICAgICAgcC5yZWplY3QobmV3IEVycm9yKFwidGhpcyBpcyBhIGZha2UgZXJyb3JcIikpO1xuXG4gICAgICAgICAgICBhd2FpdCBhc3NlcnRUaHJvd3NBc3luYyhhc3luYyAoKSA9PiBhd2FpdCByZXN1bHQpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KFwid2l0aCB0d28gc3VjY2Vzc2Z1bFwiLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgY29uc3QgcDAgPSBuZXcgTGF0Y2g8c3RyaW5nPigpO1xuICAgICAgICAgICAgY29uc3QgcDEgPSBuZXcgTGF0Y2g8c3RyaW5nPigpO1xuXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBQcm9taXNlcy5hbnkocDAuZ2V0KCksIHAxLmdldCgpKTtcblxuICAgICAgICAgICAgcDAucmVzb2x2ZShcInAwXCIpO1xuICAgICAgICAgICAgcDEucmVzb2x2ZShcInAxXCIpO1xuXG4gICAgICAgICAgICBhc3NlcnQuZXF1YWwoYXdhaXQgcmVzdWx0LCBcInAwXCIpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KFwid2l0aCBmaXJzdCBzdWNjZXNzZnVsXCIsIGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICBjb25zdCBwMCA9IG5ldyBMYXRjaDxzdHJpbmc+KCk7XG4gICAgICAgICAgICBjb25zdCBwMSA9IG5ldyBMYXRjaDxzdHJpbmc+KCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IFByb21pc2VzLmFueShwMC5nZXQoKSwgcDEuZ2V0KCkpO1xuXG4gICAgICAgICAgICBwMC5yZXNvbHZlKFwicDBcIik7XG4gICAgICAgICAgICBwMS5yZWplY3QobmV3IEVycm9yKFwiZmFrZVwiKSk7XG5cbiAgICAgICAgICAgIGFzc2VydC5lcXVhbChhd2FpdCByZXN1bHQsIFwicDBcIik7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoXCJ3aXRoIHNlY29uZCBzdWNjZXNzZnVsXCIsIGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICBjb25zdCBwMCA9IG5ldyBMYXRjaDxzdHJpbmc+KCk7XG4gICAgICAgICAgICBjb25zdCBwMSA9IG5ldyBMYXRjaDxzdHJpbmc+KCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IFByb21pc2VzLmFueShwMC5nZXQoKSwgcDEuZ2V0KCkpO1xuXG4gICAgICAgICAgICBwMC5yZWplY3QobmV3IEVycm9yKFwiZmFrZVwiKSk7XG4gICAgICAgICAgICBwMS5yZXNvbHZlKFwicDFcIik7XG5cbiAgICAgICAgICAgIGFzc2VydC5lcXVhbChhd2FpdCByZXN1bHQsIFwicDFcIik7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoXCJ3aXRoIGJvdGggZmFpbGluZ1wiLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgY29uc3QgcDAgPSBuZXcgTGF0Y2g8c3RyaW5nPigpO1xuICAgICAgICAgICAgY29uc3QgcDEgPSBuZXcgTGF0Y2g8c3RyaW5nPigpO1xuXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBQcm9taXNlcy5hbnkocDAuZ2V0KCksIHAxLmdldCgpKTtcblxuICAgICAgICAgICAgcDAucmVqZWN0KG5ldyBFcnJvcihcImZha2VcIikpO1xuICAgICAgICAgICAgcDEucmVqZWN0KG5ldyBFcnJvcihcImZha2VcIikpO1xuXG4gICAgICAgICAgICBhd2FpdCBhc3NlcnRUaHJvd3NBc3luYyhhc3luYyAoKSA9PiBhd2FpdCByZXN1bHQpO1xuXG4gICAgICAgIH0pO1xuXG5cbiAgICB9KTtcblxufSk7XG5cbmFzeW5jIGZ1bmN0aW9uIGFzc2VydFRocm93c0FzeW5jKGZ1bmM6ICgpID0+IFByb21pc2U8YW55Pikge1xuXG4gICAgdHJ5IHtcblxuICAgICAgICBhd2FpdCBmdW5jKCk7XG4gICAgICAgIGFzc2VydC5pc1RydWUoZmFsc2UsIFwiRGlkIG5vdCB0aHJvdyBhbiBleGNlcHRpb24uXCIpO1xuXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBub29wXG4gICAgfVxuXG59XG4iXX0=