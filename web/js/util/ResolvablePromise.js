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
class ResolvablePromise {
    constructor() {
        this.resolve = () => { };
        this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
        });
    }
    get() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.promise;
        });
    }
    set(value) {
        this.resolve(value);
    }
    catch(onrejected) {
        return this.promise.catch(onrejected);
    }
    then(onresolved, onrejected) {
        return this.promise.then(onresolved, onrejected);
    }
    finally(onfinally) {
        return this.promise.finally(onfinally);
    }
}
exports.ResolvablePromise = ResolvablePromise;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVzb2x2YWJsZVByb21pc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJSZXNvbHZhYmxlUHJvbWlzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUtBLE1BQWEsaUJBQWlCO0lBWTFCO1FBTE8sWUFBTyxHQUF3QixHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFPNUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUM5QyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUUzQixDQUFDLENBQUMsQ0FBQztJQUdQLENBQUM7SUFFWSxHQUFHOztZQUNaLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN4QixDQUFDO0tBQUE7SUFFTSxHQUFHLENBQUMsS0FBUTtRQUNmLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUVNLEtBQUssQ0FBa0IsVUFBd0M7UUFDbEUsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRU0sSUFBSSxDQUFpQyxVQUFrRixFQUNsRixVQUF5QztRQUVqRixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUVyRCxDQUFDO0lBRU0sT0FBTyxDQUFDLFNBQTJDO1FBQ3RELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDM0MsQ0FBQztDQUdKO0FBOUNELDhDQThDQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQERlcHJlY2F0ZWQgVHJ5IHRvIG1vdmUgdG8gdXNpbmcgTGF0Y2ggaW5zdGVhZCBvZiBSZXNvbHZhYmxlUHJvbWlzZS5cbiAqIFRoaXMgaGFzIGEgYnVnIHdoZXJlIHJlamVjdCBmYWlscyBhbmQgSSB0aGluayBpdCdzIGJlY2F1c2UgaXQncyBhIHByb21pc2VcbiAqIGFyb3VuZCBhIHByb21pc2UgYW5kIG5vZGUgZ2V0cyBjb25mdXNlZC5cbiAqL1xuZXhwb3J0IGNsYXNzIFJlc29sdmFibGVQcm9taXNlPFQ+IGltcGxlbWVudHMgUHJvbWlzZTxUPiB7XG5cbiAgICBwdWJsaWMgcmVhZG9ubHkgW1N5bWJvbC50b1N0cmluZ1RhZ106IFwiUHJvbWlzZVwiO1xuXG4gICAgcHVibGljIHByb21pc2U6IFByb21pc2U8VD47XG5cbiAgICAvLyBub2luc3BlY3Rpb24gVHNMaW50XG4gICAgcHVibGljIHJlc29sdmU6ICh2YWx1ZT86IFQpID0+IHZvaWQgPSAoKSA9PiB7IH07XG5cbiAgICAvLyBub2luc3BlY3Rpb24gVHNMaW50XG4gICAgLy8gcHVibGljIHJlamVjdDogKHJlYXNvbj86IGFueSkgPT4gdm9pZCA9ICgpID0+IHsgfTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgICAgIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlPFQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICAgICAgICAvLyB0aGlzLnJlamVjdCA9IHJlamVjdDtcbiAgICAgICAgfSk7XG5cblxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBnZXQoKTogUHJvbWlzZTxUPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb21pc2U7XG4gICAgfVxuXG4gICAgcHVibGljIHNldCh2YWx1ZTogVCkge1xuICAgICAgICB0aGlzLnJlc29sdmUodmFsdWUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjYXRjaDxUUmVzdWx0ID0gbmV2ZXI+KG9ucmVqZWN0ZWQ/OiBPblJlamVjdGVkQ2FsbGJhY2s8VFJlc3VsdD4pOiBQcm9taXNlPFQgfCBUUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb21pc2UuY2F0Y2gob25yZWplY3RlZCk7XG4gICAgfVxuXG4gICAgcHVibGljIHRoZW48VFJlc3VsdDEgPSBULCBUUmVzdWx0MiA9IG5ldmVyPihvbnJlc29sdmVkPzogKCh2YWx1ZTogVCkgPT4gKFByb21pc2VMaWtlPFRSZXN1bHQxPiB8IFRSZXN1bHQxKSkgfCBudWxsIHwgdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25yZWplY3RlZD86IE9uUmVqZWN0ZWRDYWxsYmFjazxUUmVzdWx0Mj4pOiBQcm9taXNlPFRSZXN1bHQxIHwgVFJlc3VsdDI+IHtcblxuICAgICAgICByZXR1cm4gdGhpcy5wcm9taXNlLnRoZW4ob25yZXNvbHZlZCwgb25yZWplY3RlZCk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgZmluYWxseShvbmZpbmFsbHk/OiAoKCkgPT4gdm9pZCkgfCB1bmRlZmluZWQgfCBudWxsKTogUHJvbWlzZTxUPiB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb21pc2UuZmluYWxseShvbmZpbmFsbHkpO1xuICAgIH1cblxuXG59XG5cbnR5cGUgT25SZXNvbHZlZENhbGxiYWNrPFQ+ID0gKChyZWFzb246IGFueSkgPT4gKFByb21pc2VMaWtlPFQ+IHwgVCkpIHwgbnVsbCB8IHVuZGVmaW5lZDtcblxudHlwZSBPblJlamVjdGVkQ2FsbGJhY2s8VD4gPSAoKHJlYXNvbjogYW55KSA9PiAoUHJvbWlzZUxpa2U8VD4gfCBUKSkgfCBudWxsIHwgdW5kZWZpbmVkO1xuXG4iXX0=