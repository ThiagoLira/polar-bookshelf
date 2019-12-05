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
const DatastoreFileCache_1 = require("./DatastoreFileCache");
const DelegatedDatastore_1 = require("./DelegatedDatastore");
const log = Logger_1.Logger.create();
class DataFileCacheDatastore extends DelegatedDatastore_1.DelegatedDatastore {
    constructor(delegate) {
        super(delegate);
    }
    getFile(backend, ref, opts) {
        const hit = DatastoreFileCache_1.DatastoreFileCache.getFile(backend, ref);
        if (hit.isPresent()) {
            log.debug("Found file in datastore cache: ", { backend, ref });
            return hit.get();
        }
        return super.getFile(backend, ref, opts);
    }
    deleteFile(backend, ref) {
        const _super = Object.create(null, {
            deleteFile: { get: () => super.deleteFile }
        });
        return __awaiter(this, void 0, void 0, function* () {
            DatastoreFileCache_1.DatastoreFileCache.evictFile(backend, ref);
            return _super.deleteFile.call(this, backend, ref);
        });
    }
}
exports.DataFileCacheDatastore = DataFileCacheDatastore;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0YUZpbGVDYWNoZURhdGFzdG9yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkRhdGFGaWxlQ2FjaGVEYXRhc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFZQSwyREFBc0Q7QUFDdEQsNkRBQXdEO0FBQ3hELDZEQUF3RDtBQUd4RCxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFNNUIsTUFBYSxzQkFBdUIsU0FBUSx1Q0FBa0I7SUFFMUQsWUFBWSxRQUFtQjtRQUMzQixLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUVNLE9BQU8sQ0FBQyxPQUFnQixFQUFFLEdBQVksRUFBRSxJQUFrQjtRQUU3RCxNQUFNLEdBQUcsR0FBRyx1Q0FBa0IsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRXJELElBQUksR0FBRyxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQ2pCLEdBQUcsQ0FBQyxLQUFLLENBQUMsaUNBQWlDLEVBQUUsRUFBQyxPQUFPLEVBQUUsR0FBRyxFQUFDLENBQUMsQ0FBQztZQUM3RCxPQUFPLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUNwQjtRQUVELE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBRTdDLENBQUM7SUFFWSxVQUFVLENBQUMsT0FBZ0IsRUFBRSxHQUFZOzs7OztZQUNsRCx1Q0FBa0IsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQzNDLE9BQU8sT0FBTSxVQUFVLFlBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtRQUMxQyxDQUFDO0tBQUE7Q0FFSjtBQXhCRCx3REF3QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RhdGFzdG9yZSwgRGF0YXN0b3JlSUQsIEVycm9yTGlzdGVuZXIsIEluaXRSZXN1bHR9IGZyb20gJy4vRGF0YXN0b3JlJztcbmltcG9ydCB7QmluYXJ5RmlsZURhdGF9IGZyb20gJy4vRGF0YXN0b3JlJztcbmltcG9ydCB7V3JpdGVGaWxlT3B0c30gZnJvbSAnLi9EYXRhc3RvcmUnO1xuaW1wb3J0IHtpc0JpbmFyeUZpbGVEYXRhfSBmcm9tICcuL0RhdGFzdG9yZSc7XG5pbXBvcnQge0dldEZpbGVPcHRzfSBmcm9tICcuL0RhdGFzdG9yZSc7XG5pbXBvcnQge0RvY01ldGFSZWZ9IGZyb20gJy4vRG9jTWV0YVJlZic7XG5pbXBvcnQge0Rpc2tEYXRhc3RvcmV9IGZyb20gJy4vRGlza0RhdGFzdG9yZSc7XG5pbXBvcnQge1JlbW90ZURhdGFzdG9yZX0gZnJvbSAnLi9SZW1vdGVEYXRhc3RvcmUnO1xuaW1wb3J0IHtCYWNrZW5kfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL2RhdGFzdG9yZS9CYWNrZW5kJztcbmltcG9ydCB7RG9jRmlsZU1ldGF9IGZyb20gJy4vRG9jRmlsZU1ldGEnO1xuaW1wb3J0IHtCbG9ic30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL0Jsb2JzJztcbmltcG9ydCB7T3B0aW9uYWx9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC90cy9PcHRpb25hbCc7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7RGF0YXN0b3JlRmlsZUNhY2hlfSBmcm9tICcuL0RhdGFzdG9yZUZpbGVDYWNoZSc7XG5pbXBvcnQge0RlbGVnYXRlZERhdGFzdG9yZX0gZnJvbSAnLi9EZWxlZ2F0ZWREYXRhc3RvcmUnO1xuaW1wb3J0IHtGaWxlUmVmfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy9kYXRhc3RvcmUvRmlsZVJlZlwiO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbi8qKlxuICogQmFzaWMgZGVsZWdhdGVkIGRhdGFzdG9yZSBzbyB0aGF0IHdlIGNhbiByZXNvbHZlIGZpbGVzIGZvcm0gdGhlIGxvY2FsIGZpbGVcbiAqIGNhY2hlIGJlZm9yZSBnb2luZyB0byB0aGUgbmV0d29yayB2ZXJzaW9uLlxuICovXG5leHBvcnQgY2xhc3MgRGF0YUZpbGVDYWNoZURhdGFzdG9yZSBleHRlbmRzIERlbGVnYXRlZERhdGFzdG9yZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihkZWxlZ2F0ZTogRGF0YXN0b3JlKSB7XG4gICAgICAgIHN1cGVyKGRlbGVnYXRlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0RmlsZShiYWNrZW5kOiBCYWNrZW5kLCByZWY6IEZpbGVSZWYsIG9wdHM/OiBHZXRGaWxlT3B0cyk6IERvY0ZpbGVNZXRhIHtcblxuICAgICAgICBjb25zdCBoaXQgPSBEYXRhc3RvcmVGaWxlQ2FjaGUuZ2V0RmlsZShiYWNrZW5kLCByZWYpO1xuXG4gICAgICAgIGlmIChoaXQuaXNQcmVzZW50KCkpIHtcbiAgICAgICAgICAgIGxvZy5kZWJ1ZyhcIkZvdW5kIGZpbGUgaW4gZGF0YXN0b3JlIGNhY2hlOiBcIiwge2JhY2tlbmQsIHJlZn0pO1xuICAgICAgICAgICAgcmV0dXJuIGhpdC5nZXQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdXBlci5nZXRGaWxlKGJhY2tlbmQsIHJlZiwgb3B0cyk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgZGVsZXRlRmlsZShiYWNrZW5kOiBCYWNrZW5kLCByZWY6IEZpbGVSZWYpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgRGF0YXN0b3JlRmlsZUNhY2hlLmV2aWN0RmlsZShiYWNrZW5kLCByZWYpO1xuICAgICAgICByZXR1cm4gc3VwZXIuZGVsZXRlRmlsZShiYWNrZW5kLCByZWYpO1xuICAgIH1cblxufVxuXG4iXX0=