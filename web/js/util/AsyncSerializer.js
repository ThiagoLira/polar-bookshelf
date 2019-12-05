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
const ArrayQueue_1 = require("./ArrayQueue");
const Latch_1 = require("polar-shared/src/util/Latch");
class AsyncSerializer {
    constructor() {
        this.blockers = new ArrayQueue_1.ArrayQueue();
    }
    execute(callable) {
        return __awaiter(this, void 0, void 0, function* () {
            const myBlocker = new Latch_1.Latch();
            try {
                const blocker = this.blockers.peek();
                if (blocker) {
                    yield blocker.get();
                }
                this.blockers.push(myBlocker);
                return yield callable();
            }
            finally {
                myBlocker.resolve(true);
                this.blockers.delete(myBlocker);
            }
        });
    }
}
exports.AsyncSerializer = AsyncSerializer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXN5bmNTZXJpYWxpemVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQXN5bmNTZXJpYWxpemVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBSUEsNkNBQXdDO0FBQ3hDLHVEQUFrRDtBQVNsRCxNQUFhLGVBQWU7SUFBNUI7UUFFWSxhQUFRLEdBQUcsSUFBSSx1QkFBVSxFQUFrQixDQUFDO0lBNEJ4RCxDQUFDO0lBMUJnQixPQUFPLENBQUksUUFBMEI7O1lBRTlDLE1BQU0sU0FBUyxHQUFHLElBQUksYUFBSyxFQUFXLENBQUM7WUFFdkMsSUFBSTtnQkFFQSxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUVyQyxJQUFJLE9BQU8sRUFBRTtvQkFHVCxNQUFNLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQztpQkFDdkI7Z0JBR0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBRTlCLE9BQU8sTUFBTSxRQUFRLEVBQUUsQ0FBQzthQUUzQjtvQkFBUztnQkFDTixTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUNuQztRQUVMLENBQUM7S0FBQTtDQUVKO0FBOUJELDBDQThCQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlcyBhIHNlcmlhbGl6ZXIgdGhhdCBtYWtlcyBzdXJlIHRoYXQgb25seSBPTkUgb3BlcmF0aW9uIGNhbiBoYXBwZW4gYXRcbiAqIG9uY2UuXG4gKi9cbmltcG9ydCB7QXJyYXlRdWV1ZX0gZnJvbSAnLi9BcnJheVF1ZXVlJztcbmltcG9ydCB7TGF0Y2h9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL3V0aWwvTGF0Y2hcIjtcblxuLyoqXG4gKiBBc3luYyBzZXJpYWxpemF0aW9uIGlzIHN0aWxsIGltcG9ydGFudCBhcyBOIG9wZXJhdGlvbnMgY291bGQgYmUgaW4gZmxpZ2h0IGFuZFxuICogbWlnaHQgbXV0YXRlIGFuIG9iamVjdC4gIElmIHdlIGVucXVldWUgYWxsIGF0IG9uY2UgYW5kIHRoZWlyIG9yZGVyIGlzXG4gKiBpbXBvcnRhbnQgd2UncmUgbm90IGd1YXJhbnRlZWQgdGhhdCB0aGUgbGFzdCBvbmUgd2lsbCB3aW4uICBUaGUgZmlyc3Qgb25lXG4gKiBjb3VsZCBibG9jayBmb3IgYSBiaXQsIHRoZW4gdGhlIHNlY29uZCBvbmUgY29tcGxldGVzLCB0aGVuIHRoZSBmaXJzdCBvbmVcbiAqIGlzIGFwcGxpZWQgYW5kIHdlIHdvdWxkIGVuZCB1cCB3aXRoIGludmFsaWQgZGF0YS5cbiAqL1xuZXhwb3J0IGNsYXNzIEFzeW5jU2VyaWFsaXplciB7XG5cbiAgICBwcml2YXRlIGJsb2NrZXJzID0gbmV3IEFycmF5UXVldWU8TGF0Y2g8Ym9vbGVhbj4+KCk7XG5cbiAgICBwdWJsaWMgYXN5bmMgZXhlY3V0ZTxUPihjYWxsYWJsZTogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuXG4gICAgICAgIGNvbnN0IG15QmxvY2tlciA9IG5ldyBMYXRjaDxib29sZWFuPigpO1xuXG4gICAgICAgIHRyeSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGJsb2NrZXIgPSB0aGlzLmJsb2NrZXJzLnBlZWsoKTtcblxuICAgICAgICAgICAgaWYgKGJsb2NrZXIpIHtcbiAgICAgICAgICAgICAgICAvLyBtYWtlIHN1cmUgdGhhdCB0aGUgcHJldmlvdXMgYmxvY2tlciBoYXMgYWxyZWFkeSBjb21wbGV0ZWQgc29cbiAgICAgICAgICAgICAgICAvLyB3ZSBjYW4ndCBwZXJmb3JtIHBhcmFsbGVsLlxuICAgICAgICAgICAgICAgIGF3YWl0IGJsb2NrZXIuZ2V0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHdlJ3JlIHJlYWR5IHRvIGV4ZWN1dGUgc28gcHVzaCBvdXIgYmxvY2tlciB0byB0aGUgcXVldWUuXG4gICAgICAgICAgICB0aGlzLmJsb2NrZXJzLnB1c2gobXlCbG9ja2VyKTtcblxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGNhbGxhYmxlKCk7XG5cbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIG15QmxvY2tlci5yZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgdGhpcy5ibG9ja2Vycy5kZWxldGUobXlCbG9ja2VyKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG59XG4iXX0=