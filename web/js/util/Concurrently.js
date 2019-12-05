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
class Concurrently {
    static waitForPredicate(callable, predicate, intervalMS = 250) {
        return new Promise((resolve, reject) => {
            let executor = () => __awaiter(this, void 0, void 0, function* () {
                try {
                    let val = yield callable();
                    if (predicate(val)) {
                        resolve(val);
                        return;
                    }
                    else {
                        setTimeout(executor, intervalMS);
                    }
                }
                catch (e) {
                    reject(e);
                }
            });
            setTimeout(executor, 0);
        });
    }
}
exports.Concurrently = Concurrently;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uY3VycmVudGx5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQ29uY3VycmVudGx5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsTUFBYSxZQUFZO0lBUWQsTUFBTSxDQUFDLGdCQUFnQixDQUFJLFFBQXFCLEVBQUUsU0FBdUIsRUFBRSxhQUFxQixHQUFHO1FBRXRHLE9BQU8sSUFBSSxPQUFPLENBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFFdEMsSUFBSSxRQUFRLEdBQUcsR0FBUyxFQUFFO2dCQUV0QixJQUFJO29CQUVBLElBQUksR0FBRyxHQUFHLE1BQU0sUUFBUSxFQUFFLENBQUM7b0JBRTNCLElBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFO3dCQUVmLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDYixPQUFPO3FCQUVWO3lCQUFNO3dCQUNILFVBQVUsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7cUJBQ3BDO2lCQUdKO2dCQUFDLE9BQU8sQ0FBQyxFQUFFO29CQUNSLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDYjtZQUVMLENBQUMsQ0FBQSxDQUFDO1lBRUYsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUU1QixDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7Q0FFSjtBQXhDRCxvQ0F3Q0MiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQ29uY3VycmVudGx5IHtcblxuICAgIC8qKlxuICAgICAqIEtlZXAgZXhlY3V0aW5nIHRoZSBhc3luYyBmdW5jdGlvbiBpbiB0aGUgYmFja2dyb3VuZCB1bnRpbCB0aGUgcHJlZGljYXRlXG4gICAgICogcmV0dXJucyB0cnVlLiAgVGhpcyBjYW4gYmUgdXNlZCBmb3IgdGVzdGluZyBvciB3aGVyZSB3ZSBleHBlY3QgYSB2YWx1ZVxuICAgICAqIHRvIGJlIHVwZGF0ZWQgeWV0IGhhdmUgbm8gZXZlbnQgbm90aWZpY2F0aW9uIG9mIHdoZW4gaXQgd2lsbCBhY3R1YWxseVxuICAgICAqIGhhcHBlbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHdhaXRGb3JQcmVkaWNhdGU8VD4oY2FsbGFibGU6IENhbGxhYmxlPFQ+LCBwcmVkaWNhdGU6IFByZWRpY2F0ZTxUPiwgaW50ZXJ2YWxNUzogbnVtYmVyID0gMjUwKTogUHJvbWlzZTxUPiB7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPFQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcblxuICAgICAgICAgICAgbGV0IGV4ZWN1dG9yID0gYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgdHJ5IHtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgdmFsID0gYXdhaXQgY2FsbGFibGUoKTtcblxuICAgICAgICAgICAgICAgICAgICBpZihwcmVkaWNhdGUodmFsKSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHZhbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZXhlY3V0b3IsIGludGVydmFsTVMpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgc2V0VGltZW91dChleGVjdXRvciwgMCk7XG5cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBDYWxsYWJsZTxUPiB7XG4gICAgKCk6IFByb21pc2U8VD47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJlZGljYXRlPFQ+IHtcbiAgICAodmFsOiBUKTogYm9vbGVhbjtcbn1cbiJdfQ==