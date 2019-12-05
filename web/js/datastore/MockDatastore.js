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
const MemoryDatastore_1 = require("./MemoryDatastore");
const DocMetas_1 = require("../metadata/DocMetas");
class MockDatastore extends MemoryDatastore_1.MemoryDatastore {
    constructor() {
        super();
    }
    init() {
        const _super = Object.create(null, {
            init: { get: () => super.init }
        });
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield _super.init.call(this);
            const mockDockMetas = [
                DocMetas_1.MockDocMetas.createWithinInitialPagemarks('0x001', 1),
                DocMetas_1.MockDocMetas.createWithinInitialPagemarks('0x002', 2)
            ];
            return result;
        });
    }
}
exports.MockDatastore = MockDatastore;
class MockReadableBinaryDatastore {
    containsFile(backend, ref) {
        return __awaiter(this, void 0, void 0, function* () {
            return false;
        });
    }
    getFile(backend, ref, opts) {
        throw new Error("noop");
    }
}
exports.MockReadableBinaryDatastore = MockReadableBinaryDatastore;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9ja0RhdGFzdG9yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIk1vY2tEYXRhc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFHQSx1REFBa0Q7QUFDbEQsbURBQWtEO0FBTWxELE1BQWEsYUFBYyxTQUFRLGlDQUFlO0lBRTlDO1FBQ0ksS0FBSyxFQUFFLENBQUM7SUFDWixDQUFDO0lBRVksSUFBSTs7Ozs7WUFFYixNQUFNLE1BQU0sR0FBRyxNQUFNLE9BQU0sSUFBSSxXQUFFLENBQUM7WUFFbEMsTUFBTSxhQUFhLEdBQUc7Z0JBQ2xCLHVCQUFZLENBQUMsNEJBQTRCLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztnQkFDckQsdUJBQVksQ0FBQyw0QkFBNEIsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO2FBQ3hELENBQUM7WUFFRixPQUFPLE1BQU0sQ0FBQztRQUVsQixDQUFDO0tBQUE7Q0FFSjtBQW5CRCxzQ0FtQkM7QUFFRCxNQUFhLDJCQUEyQjtJQUd2QixZQUFZLENBQUMsT0FBZ0IsRUFBRSxHQUFZOztZQUNwRCxPQUFPLEtBQUssQ0FBQztRQUNqQixDQUFDO0tBQUE7SUFFTSxPQUFPLENBQUMsT0FBZ0IsRUFBRSxHQUFZLEVBQUUsSUFBa0I7UUFDN0QsTUFBTSxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM1QixDQUFDO0NBSUo7QUFiRCxrRUFhQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogRGF0YXN0b3JlIGp1c3QgaW4gbWVtb3J5IHdpdGggbm8gb24gZGlzayBwZXJzaXN0ZW5jZS5cbiAqL1xuaW1wb3J0IHtNZW1vcnlEYXRhc3RvcmV9IGZyb20gJy4vTWVtb3J5RGF0YXN0b3JlJztcbmltcG9ydCB7TW9ja0RvY01ldGFzfSBmcm9tICcuLi9tZXRhZGF0YS9Eb2NNZXRhcyc7XG5pbXBvcnQge0dldEZpbGVPcHRzLCBJbml0UmVzdWx0LCBSZWFkYWJsZUJpbmFyeURhdGFzdG9yZX0gZnJvbSAnLi9EYXRhc3RvcmUnO1xuaW1wb3J0IHtEb2NGaWxlTWV0YX0gZnJvbSBcIi4vRG9jRmlsZU1ldGFcIjtcbmltcG9ydCB7IEJhY2tlbmQgfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL2RhdGFzdG9yZS9CYWNrZW5kJztcbmltcG9ydCB7IEZpbGVSZWYgfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL2RhdGFzdG9yZS9GaWxlUmVmJztcblxuZXhwb3J0IGNsYXNzIE1vY2tEYXRhc3RvcmUgZXh0ZW5kcyBNZW1vcnlEYXRhc3RvcmUge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGluaXQoKTogUHJvbWlzZTxJbml0UmVzdWx0PiB7XG5cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc3VwZXIuaW5pdCgpO1xuXG4gICAgICAgIGNvbnN0IG1vY2tEb2NrTWV0YXMgPSBbXG4gICAgICAgICAgICBNb2NrRG9jTWV0YXMuY3JlYXRlV2l0aGluSW5pdGlhbFBhZ2VtYXJrcygnMHgwMDEnLCAxKSxcbiAgICAgICAgICAgIE1vY2tEb2NNZXRhcy5jcmVhdGVXaXRoaW5Jbml0aWFsUGFnZW1hcmtzKCcweDAwMicsIDIpXG4gICAgICAgIF07XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcblxuICAgIH1cblxufVxuXG5leHBvcnQgY2xhc3MgTW9ja1JlYWRhYmxlQmluYXJ5RGF0YXN0b3JlIGltcGxlbWVudHMgUmVhZGFibGVCaW5hcnlEYXRhc3RvcmUge1xuXG5cbiAgICBwdWJsaWMgYXN5bmMgY29udGFpbnNGaWxlKGJhY2tlbmQ6IEJhY2tlbmQsIHJlZjogRmlsZVJlZik6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEZpbGUoYmFja2VuZDogQmFja2VuZCwgcmVmOiBGaWxlUmVmLCBvcHRzPzogR2V0RmlsZU9wdHMpOiBEb2NGaWxlTWV0YSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vb3BcIik7XG4gICAgfVxuXG5cblxufVxuIl19