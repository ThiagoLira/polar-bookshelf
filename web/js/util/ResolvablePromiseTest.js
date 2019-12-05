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
const ResolvablePromise_1 = require("./ResolvablePromise");
describe('ResolvablePromise', function () {
    it("Without awaiting the promise", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const resolvablePromise = new ResolvablePromise_1.ResolvablePromise();
            resolvablePromise.resolve('hello');
            chai_1.assert.equal(yield resolvablePromise, 'hello');
        });
    });
    it("double await", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const resolvablePromise = new ResolvablePromise_1.ResolvablePromise();
            resolvablePromise.resolve('hello');
            chai_1.assert.equal(yield resolvablePromise, 'hello');
            chai_1.assert.equal(yield resolvablePromise, 'hello');
        });
    });
    it('reject2', function () {
        return __awaiter(this, void 0, void 0, function* () {
            let resolve = () => { };
            let reject = () => { };
            const promise = new Promise((_resolve, _reject) => {
                resolve = _resolve;
                reject = _reject;
            });
            let failures = 0;
            promise.catch(err => ++failures);
            promise.catch(err => ++failures);
            reject(new Error("it broke"));
            try {
                yield promise;
            }
            catch (e) {
                ++failures;
            }
            chai_1.assert.equal(failures, 3);
            promise.catch(err => ++failures);
            try {
                yield promise;
            }
            catch (e) {
                ++failures;
            }
            chai_1.assert.equal(failures, 5);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVzb2x2YWJsZVByb21pc2VUZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUmVzb2x2YWJsZVByb21pc2VUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsK0JBQTRCO0FBQzVCLDJEQUFzRDtBQUd0RCxRQUFRLENBQUMsbUJBQW1CLEVBQUU7SUFFMUIsRUFBRSxDQUFDLDhCQUE4QixFQUFFOztZQUUvQixNQUFNLGlCQUFpQixHQUFHLElBQUkscUNBQWlCLEVBQVUsQ0FBQztZQUUxRCxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFbkMsYUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLGlCQUFpQixFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRW5ELENBQUM7S0FBQSxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsY0FBYyxFQUFFOztZQUVmLE1BQU0saUJBQWlCLEdBQUcsSUFBSSxxQ0FBaUIsRUFBVSxDQUFDO1lBRTFELGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUVuQyxhQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0saUJBQWlCLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDL0MsYUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLGlCQUFpQixFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRW5ELENBQUM7S0FBQSxDQUFDLENBQUM7SUE4QkgsRUFBRSxDQUFDLFNBQVMsRUFBRTs7WUFHVixJQUFJLE9BQU8sR0FBNkIsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDO1lBR2pELElBQUksTUFBTSxHQUEyQixHQUFHLEVBQUUsR0FBRSxDQUFDLENBQUM7WUFHOUMsTUFBTSxPQUFPLEdBQUcsSUFBSSxPQUFPLENBQVMsQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLEVBQUU7Z0JBQ3RELE9BQU8sR0FBRyxRQUFRLENBQUM7Z0JBQ25CLE1BQU0sR0FBRyxPQUFPLENBQUM7WUFDckIsQ0FBQyxDQUFDLENBQUM7WUFFSCxJQUFJLFFBQVEsR0FBRyxDQUFDLENBQUM7WUFFakIsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDakMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFFakMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFFOUIsSUFBSTtnQkFDQSxNQUFNLE9BQU8sQ0FBQzthQUNqQjtZQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNSLEVBQUUsUUFBUSxDQUFDO2FBQ2Q7WUFFRCxhQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUkxQixPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUVqQyxJQUFJO2dCQUNBLE1BQU0sT0FBTyxDQUFDO2FBQ2pCO1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1IsRUFBRSxRQUFRLENBQUM7YUFDZDtZQUVELGFBQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRTlCLENBQUM7S0FBQSxDQUFDLENBQUM7QUFtQ1AsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Fzc2VydH0gZnJvbSAnY2hhaSc7XG5pbXBvcnQge1Jlc29sdmFibGVQcm9taXNlfSBmcm9tICcuL1Jlc29sdmFibGVQcm9taXNlJztcblxuXG5kZXNjcmliZSgnUmVzb2x2YWJsZVByb21pc2UnLCBmdW5jdGlvbigpIHtcblxuICAgIGl0KFwiV2l0aG91dCBhd2FpdGluZyB0aGUgcHJvbWlzZVwiLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICBjb25zdCByZXNvbHZhYmxlUHJvbWlzZSA9IG5ldyBSZXNvbHZhYmxlUHJvbWlzZTxzdHJpbmc+KCk7XG5cbiAgICAgICAgcmVzb2x2YWJsZVByb21pc2UucmVzb2x2ZSgnaGVsbG8nKTtcblxuICAgICAgICBhc3NlcnQuZXF1YWwoYXdhaXQgcmVzb2x2YWJsZVByb21pc2UsICdoZWxsbycpO1xuXG4gICAgfSk7XG5cbiAgICBpdChcImRvdWJsZSBhd2FpdFwiLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICBjb25zdCByZXNvbHZhYmxlUHJvbWlzZSA9IG5ldyBSZXNvbHZhYmxlUHJvbWlzZTxzdHJpbmc+KCk7XG5cbiAgICAgICAgcmVzb2x2YWJsZVByb21pc2UucmVzb2x2ZSgnaGVsbG8nKTtcblxuICAgICAgICBhc3NlcnQuZXF1YWwoYXdhaXQgcmVzb2x2YWJsZVByb21pc2UsICdoZWxsbycpO1xuICAgICAgICBhc3NlcnQuZXF1YWwoYXdhaXQgcmVzb2x2YWJsZVByb21pc2UsICdoZWxsbycpO1xuXG4gICAgfSk7XG4gICAgLy9cbiAgICAvLyBpdChcInJlamVjdFwiLCBhc3luYyBmdW5jdGlvbigpIHtcbiAgICAvL1xuICAgIC8vICAgICBjb25zdCBwcm9taXNlID0gbmV3IFJlc29sdmFibGVQcm9taXNlPHN0cmluZz4oKTtcbiAgICAvL1xuICAgIC8vICAgICBsZXQgZmFpbHVyZXMgPSAwO1xuICAgIC8vXG4gICAgLy8gICAgIGxldCBzdWNjZXNzOiBib29sZWFuID0gZmFsc2U7XG4gICAgLy9cbiAgICAvLyAgICAgcHJvbWlzZS5jYXRjaChlcnIgPT4gKytmYWlsdXJlcyk7XG4gICAgLy8gICAgIHByb21pc2UudGhlbigoKSA9PiBzdWNjZXNzID0gdHJ1ZSk7XG4gICAgLy9cbiAgICAvLyAgICAgY29uc29sZS5sb2coXCJGSVhNRTogXCIsIHByb21pc2UucmVqZWN0KTtcbiAgICAvL1xuICAgIC8vICAgICBwcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ2hlbGxvJykpO1xuICAgIC8vXG4gICAgLy8gICAgIHRyeSB7XG4gICAgLy9cbiAgICAvLyAgICAgICAgIGF3YWl0IHByb21pc2U7XG4gICAgLy9cbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwiVGhpcyBzaG91bGQgaGF2ZSBmYWlsZWRcIik7XG4gICAgLy8gICAgICAgICBhc3NlcnQuZmFpbChcIlNob3VsZCBub3Qgc3VjY2VlZFwiKTtcbiAgICAvL1xuICAgIC8vICAgICB9IGNhdGNoIChlKSB7XG4gICAgLy8gICAgICAgICArK2ZhaWx1cmVzO1xuICAgIC8vICAgICB9XG4gICAgLy9cbiAgICAvLyB9KTtcblxuICAgIGl0KCdyZWplY3QyJywgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgLy8gbm9pbnNwZWN0aW9uIFRzTGludFxuICAgICAgICBsZXQgcmVzb2x2ZTogKHZhbHVlPzogc3RyaW5nKSA9PiB2b2lkID0gKCkgPT4ge307XG5cbiAgICAgICAgLy8gbm9pbnNwZWN0aW9uIFRzTGludFxuICAgICAgICBsZXQgcmVqZWN0OiAocmVhc29uPzogYW55KSA9PiB2b2lkID0gKCkgPT4ge307XG5cbiAgICAgICAgLy8gbm9pbnNwZWN0aW9uIFRzTGludFxuICAgICAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2U8c3RyaW5nPigoX3Jlc29sdmUsIF9yZWplY3QpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUgPSBfcmVzb2x2ZTtcbiAgICAgICAgICAgIHJlamVjdCA9IF9yZWplY3Q7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBmYWlsdXJlcyA9IDA7XG5cbiAgICAgICAgcHJvbWlzZS5jYXRjaChlcnIgPT4gKytmYWlsdXJlcyk7XG4gICAgICAgIHByb21pc2UuY2F0Y2goZXJyID0+ICsrZmFpbHVyZXMpO1xuXG4gICAgICAgIHJlamVjdChuZXcgRXJyb3IoXCJpdCBicm9rZVwiKSk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IHByb21pc2U7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICsrZmFpbHVyZXM7XG4gICAgICAgIH1cblxuICAgICAgICBhc3NlcnQuZXF1YWwoZmFpbHVyZXMsIDMpO1xuXG4gICAgICAgIC8vIEZJWE1FTCBhbHNvIHRlc3QgdGhhdCBpdCBnaXZlIHVzIHRoZSBlcnJvciBBRlRFciB3ZSByZWplY3QgaXQuXG5cbiAgICAgICAgcHJvbWlzZS5jYXRjaChlcnIgPT4gKytmYWlsdXJlcyk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IHByb21pc2U7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICsrZmFpbHVyZXM7XG4gICAgICAgIH1cblxuICAgICAgICBhc3NlcnQuZXF1YWwoZmFpbHVyZXMsIDUpO1xuXG4gICAgfSk7XG5cbiAgICAvL1xuICAgIC8vIGl0KFwicmVqZWN0M1wiLCBhc3luYyBmdW5jdGlvbigpIHtcbiAgICAvL1xuICAgIC8vICAgICBjb25zdCByZXNvbHZhYmxlUHJvbWlzZSA9IG5ldyBSZXNvbHZhYmxlUHJvbWlzZTxzdHJpbmc+KCk7XG4gICAgLy9cbiAgICAvLyAgICAgbGV0IGZhaWx1cmVzID0gMDtcbiAgICAvL1xuICAgIC8vICAgICBsZXQgc3VjY2VzczogYm9vbGVhbiA9IGZhbHNlO1xuICAgIC8vXG4gICAgLy8gICAgIHJlc29sdmFibGVQcm9taXNlLnByb21pc2UuY2F0Y2goZXJyID0+IHtcbiAgICAvLyAgICAgICAgICsrZmFpbHVyZXM7XG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcIkZJWE1FIDY2NiBoZXJlXCIpO1xuICAgIC8vICAgICB9ICk7XG4gICAgLy9cbiAgICAvLyAgICAgcmVzb2x2YWJsZVByb21pc2UucHJvbWlzZS50aGVuKCgpID0+IHN1Y2Nlc3MgPSB0cnVlKTtcbiAgICAvL1xuICAgIC8vICAgICByZXNvbHZhYmxlUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdoZWxsbycpKTtcbiAgICAvL1xuICAgIC8vICAgICBjb25zb2xlLmxvZyhcIkZJWE1FOiA5OSBoZXJlXCIpO1xuICAgIC8vXG4gICAgLy8gICAgIC8vIHRyeSB7XG4gICAgLy8gICAgIC8vXG4gICAgLy8gICAgIC8vICAgICBhd2FpdCAocmVzb2x2YWJsZVByb21pc2UucHJvbWlzZSk7XG4gICAgLy8gICAgIC8vXG4gICAgLy8gICAgIC8vICAgICBjb25zb2xlLmxvZyhcIkZJWE1FOiAxMjM0IFRoaXMgc2hvdWxkIGhhdmUgZmFpbGVkXCIpO1xuICAgIC8vICAgICAvLyAgICAgYXNzZXJ0LmZhaWwoXCJTaG91bGQgbm90IHN1Y2NlZWRcIik7XG4gICAgLy8gICAgIC8vXG4gICAgLy8gICAgIC8vIH0gY2F0Y2ggKGUpIHtcbiAgICAvLyAgICAgLy8gICAgICsrZmFpbHVyZXM7XG4gICAgLy8gICAgIC8vIH1cbiAgICAvL1xuICAgIC8vIH0pO1xuXG59KTtcblxuIl19