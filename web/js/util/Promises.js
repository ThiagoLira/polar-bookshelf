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
const Logger_1 = require("polar-shared/src/logger/Logger");
const Functions_1 = require("polar-shared/src/util/Functions");
const Latch_1 = require("polar-shared/src/util/Latch");
const log = Logger_1.Logger.create();
class Promises {
    static any(p0, ...morePromises) {
        return __awaiter(this, void 0, void 0, function* () {
            const promises = [p0, ...morePromises];
            const latch = new Latch_1.Latch();
            const errors = [];
            const onError = (err) => {
                errors.push(err);
                if (errors.length === promises.length) {
                    latch.reject(errors[0]);
                }
            };
            for (const promise of promises) {
                promise.then(value => latch.resolve(value))
                    .catch(err => onError(err));
            }
            return latch.get();
        });
    }
    static executeInBackground(promises, errorHandler) {
        for (const promise of promises) {
            promise.then(Functions_1.NULL_FUNCTION)
                .catch(err => errorHandler(err));
        }
    }
    static waitFor(timeout) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve();
                }, timeout);
            });
        });
    }
    static of(val) {
        return new Promise(resolve => {
            resolve(val);
        });
    }
    static withTimeout(timeout, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    callback().then(result => resolve(result))
                        .catch(err => reject(err));
                }, timeout);
            });
        });
    }
    static toVoidPromise(delegate) {
        return __awaiter(this, void 0, void 0, function* () {
            yield delegate();
        });
    }
    static executeLogged(func) {
        func().catch(err => log.error("Caught error: ", err));
    }
    static requestAnimationFrame(callback = Functions_1.NULL_FUNCTION) {
        return new Promise(resolve => {
            callback();
            window.requestAnimationFrame(() => resolve());
        });
    }
    static toDelayed(delegate) {
        return () => {
            return new Promise((resolve, reject) => {
                try {
                    resolve(delegate());
                }
                catch (err) {
                    reject(err);
                }
            });
        };
    }
}
exports.Promises = Promises;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvbWlzZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJQcm9taXNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJEQUFzRDtBQUN0RCwrREFBOEQ7QUFDOUQsdURBQWtEO0FBRWxELE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU1QixNQUFhLFFBQVE7SUFRVixNQUFNLENBQU8sR0FBRyxDQUFJLEVBQWMsRUFBRSxHQUFHLFlBQStCOztZQUV6RSxNQUFNLFFBQVEsR0FBRyxDQUFDLEVBQUUsRUFBRSxHQUFHLFlBQVksQ0FBQyxDQUFDO1lBRXZDLE1BQU0sS0FBSyxHQUFHLElBQUksYUFBSyxFQUFLLENBQUM7WUFFN0IsTUFBTSxNQUFNLEdBQVksRUFBRSxDQUFDO1lBRTNCLE1BQU0sT0FBTyxHQUFHLENBQUMsR0FBVSxFQUFFLEVBQUU7Z0JBRTNCLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBRWpCLElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxRQUFRLENBQUMsTUFBTSxFQUFFO29CQUNuQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUMzQjtZQUVMLENBQUMsQ0FBQztZQUVGLEtBQUssTUFBTSxPQUFPLElBQUksUUFBUSxFQUFFO2dCQUU1QixPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztxQkFDbkMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFFdEM7WUFFRCxPQUFPLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUV2QixDQUFDO0tBQUE7SUFNTSxNQUFNLENBQUMsbUJBQW1CLENBQUMsUUFBcUMsRUFDckMsWUFBa0M7UUFFaEUsS0FBSyxNQUFNLE9BQU8sSUFBSSxRQUFRLEVBQUU7WUFDNUIsT0FBTyxDQUFDLElBQUksQ0FBQyx5QkFBYSxDQUFDO2lCQUNuQixLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUMzQztJQUVMLENBQUM7SUFTTSxNQUFNLENBQU8sT0FBTyxDQUFDLE9BQWU7O1lBRXZDLE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBRXpCLFVBQVUsQ0FBQyxHQUFHLEVBQUU7b0JBQ1osT0FBTyxFQUFFLENBQUM7Z0JBQ2QsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBRWhCLENBQUMsQ0FBQyxDQUFDO1FBRVAsQ0FBQztLQUFBO0lBU00sTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFRO1FBQ3JCLE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQVFNLE1BQU0sQ0FBTyxXQUFXLENBQUksT0FBZSxFQUFFLFFBQTBCOztZQUUxRSxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO2dCQUVuQyxVQUFVLENBQUMsR0FBRyxFQUFFO29CQUNaLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQzt5QkFDL0IsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUVoQixDQUFDLENBQUMsQ0FBQztRQUVQLENBQUM7S0FBQTtJQUVNLE1BQU0sQ0FBTyxhQUFhLENBQUMsUUFBNEI7O1lBQzFELE1BQU0sUUFBUSxFQUFFLENBQUM7UUFDckIsQ0FBQztLQUFBO0lBVU0sTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUF3QjtRQUNoRCxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGdCQUFnQixFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVNLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxXQUF1Qix5QkFBYTtRQUNwRSxPQUFPLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ3pCLFFBQVEsRUFBRSxDQUFDO1lBQ1gsTUFBTSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDbEQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBR00sTUFBTSxDQUFDLFNBQVMsQ0FBSSxRQUEwQjtRQUVqRCxPQUFPLEdBQUcsRUFBRTtZQUNSLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7Z0JBQ25DLElBQUk7b0JBQ0EsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7aUJBQ3ZCO2dCQUFDLE9BQU0sR0FBRyxFQUFFO29CQUNULE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDZjtZQUNMLENBQUMsQ0FBQyxDQUFDO1FBRVAsQ0FBQyxDQUFDO0lBRU4sQ0FBQztDQUVKO0FBN0lELDRCQTZJQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TG9nZ2VyfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL2xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IHtOVUxMX0ZVTkNUSU9OfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvRnVuY3Rpb25zJztcbmltcG9ydCB7TGF0Y2h9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL3V0aWwvTGF0Y2hcIjtcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG5leHBvcnQgY2xhc3MgUHJvbWlzZXMge1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIHRoZSByZXN1bHQgb2YgQU5ZIG9mIHRoZXNlIHByb21pc2VzIGFuZCBwcmVmZXIgYSBzdWNjZXNzZnVsIHZhbHVlXG4gICAgICogYnV0IHJlamVjdCBpZiBBTEwgb2YgdGhlbSBmYWlsIHdpdGggdGhlIGZpcnN0IGVycm9yLlxuICAgICAqXG4gICAgICogV2UgcmVxdWlyZSBhdCBsZWFzdCAxIHByb21pc2UgYnV0IHlvdSBjYW4gc3BlY2lmeSB1cCB0byBOXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBhbnk8VD4ocDA6IFByb21pc2U8VD4sIC4uLm1vcmVQcm9taXNlczogQXJyYXk8UHJvbWlzZTxUPj4pOiBQcm9taXNlPFQ+IHtcblxuICAgICAgICBjb25zdCBwcm9taXNlcyA9IFtwMCwgLi4ubW9yZVByb21pc2VzXTtcblxuICAgICAgICBjb25zdCBsYXRjaCA9IG5ldyBMYXRjaDxUPigpO1xuXG4gICAgICAgIGNvbnN0IGVycm9yczogRXJyb3JbXSA9IFtdO1xuXG4gICAgICAgIGNvbnN0IG9uRXJyb3IgPSAoZXJyOiBFcnJvcikgPT4ge1xuXG4gICAgICAgICAgICBlcnJvcnMucHVzaChlcnIpO1xuXG4gICAgICAgICAgICBpZiAoZXJyb3JzLmxlbmd0aCA9PT0gcHJvbWlzZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgbGF0Y2gucmVqZWN0KGVycm9yc1swXSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfTtcblxuICAgICAgICBmb3IgKGNvbnN0IHByb21pc2Ugb2YgcHJvbWlzZXMpIHtcblxuICAgICAgICAgICAgcHJvbWlzZS50aGVuKHZhbHVlID0+IGxhdGNoLnJlc29sdmUodmFsdWUpKVxuICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gb25FcnJvcihlcnIpKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGxhdGNoLmdldCgpO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXhlY3V0ZSBhbGwgdGhlIHByb21pc2VzIGluIHRoaXMgYXJyYXkgaW4gdGhlIGJhY2tncm91bmQgYW5kIHVzZSBhbGwgdGhlXG4gICAgICogZXJyb3IgaGFuZGxlciBvbiBhbGwgb2YgdGhlbS5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGV4ZWN1dGVJbkJhY2tncm91bmQocHJvbWlzZXM6IFJlYWRvbmx5QXJyYXk8UHJvbWlzZTxhbnk+PixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JIYW5kbGVyOiAoZXJyOiBFcnJvcikgPT4gdm9pZCkge1xuXG4gICAgICAgIGZvciAoY29uc3QgcHJvbWlzZSBvZiBwcm9taXNlcykge1xuICAgICAgICAgICAgcHJvbWlzZS50aGVuKE5VTExfRlVOQ1RJT04pXG4gICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBlcnJvckhhbmRsZXIoZXJyKSk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEEgcHJvbWlzZSBiYXNlZCB0aW1lb3V0LiAgVGhpcyBqdXN0IHJldHVybnMgYSBwcm9taXNlIHdoaWNoIHJldHVybnNcbiAgICAgKiBvbmNlIHRoZSB0aW1lb3V0IGhhcyBleHBpcmVkLiBZb3UgY2FuIHRoZW4gY2FsbCAudGhlbigpIG9yIGp1c3QgYXdhaXRcbiAgICAgKiB0aGUgdGltZW91dC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB0aW1lb3V0XG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyB3YWl0Rm9yKHRpbWVvdXQ6IG51bWJlcikge1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcblxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfSwgdGltZW91dCk7XG5cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFJldHVybiBhIHByb21pc2UgdGhhdCByZXR1cm5zIGEgbGl0ZXJhbCB2YWx1ZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB2YWxcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBvZih2YWw6IGFueSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKHZhbCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQ2FsbHMgdGhlIGdpdmVuIGNhbGxiYWNrIGFzIGEgcHJvbWlzZSB3aGljaCB3ZSBjYW4gYXdhaXQgYnV0IHJ1bnMgaXQgd2l0aFxuICAgICAqIHRoZSBiYWNrZ3JvdW5kIGV2ZW50IGxvb3AgdmlhIHRpbWVvdXQgdG8gYXZvaWQgbG9ja2luZyB1cCB0aGUgVUkgd2l0aCBsb25nZXJcbiAgICAgKiBydW5uaW5nIHRhc2tzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgd2l0aFRpbWVvdXQ8VD4odGltZW91dDogbnVtYmVyLCBjYWxsYmFjazogKCkgPT4gUHJvbWlzZTxUPiApIHtcblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpLnRoZW4ocmVzdWx0ID0+IHJlc29sdmUocmVzdWx0KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiByZWplY3QoZXJyKSk7XG4gICAgICAgICAgICB9LCB0aW1lb3V0KTtcblxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgdG9Wb2lkUHJvbWlzZShkZWxlZ2F0ZTogKCkgPT4gUHJvbWlzZTxhbnk+KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGF3YWl0IGRlbGVnYXRlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXhlY3V0ZSBhIGZ1bmN0aW9uIHdoaWNoIGlzIGFzeW5jIGFuZCBsb2cgYW55IGVycm9ycyBpdCBnZW5lcmF0ZXMuXG4gICAgICpcbiAgICAgKiBUaGlzIGlzIGhlbHBmdWwgaWYgd2UgZG9uJ3QgY2FyZSBhYm91dCB0aGUgcmVzdWx0IGJ1dCBkbyB3YW50IHRvIGtub3dcbiAgICAgKiBpZiBpdCBoYXMgZmFpbGVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIGZ1bmNcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGV4ZWN1dGVMb2dnZWQoZnVuYzogKCkgPT4gUHJvbWlzZTxhbnk+KSB7XG4gICAgICAgIGZ1bmMoKS5jYXRjaChlcnIgPT4gbG9nLmVycm9yKFwiQ2F1Z2h0IGVycm9yOiBcIiwgZXJyKSk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2FsbGJhY2s6ICgpID0+IHZvaWQgPSBOVUxMX0ZVTkNUSU9OKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHJlc29sdmUoKSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgcHVibGljIHN0YXRpYyB0b0RlbGF5ZWQ8VD4oZGVsZWdhdGU6ICgpID0+IFByb21pc2U8VD4pIHtcblxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGRlbGVnYXRlKCkpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH07XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb21wbGV0aW9uPFQ+IHtcblxuICAgIHJlYWRvbmx5IHJlc29sdmU6IFJlc29sdmVGdW5jdGlvbjxUPjtcbiAgICByZWFkb25seSByZWplY3Q6IFJlamVjdEZ1bmN0aW9uO1xuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVzb2x2ZUZ1bmN0aW9uPFQ+IHtcbiAgICAodmFsdWU6IFQpOiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlamVjdEZ1bmN0aW9uIHtcbiAgICAoZXJyb3I6IEVycm9yKTogdm9pZDtcbn1cbiJdfQ==