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
const Datastore_1 = require("./Datastore");
const Directories_1 = require("./Directories");
const Preconditions_1 = require("polar-shared/src/Preconditions");
class DelegatedDatastore extends Datastore_1.AbstractDatastore {
    constructor(delegate) {
        super();
        Preconditions_1.Preconditions.assertPresent(delegate, 'delegate');
        this.id = 'delegated:' + delegate.id;
        this.delegate = delegate;
        this.directories = new Directories_1.Directories();
        this.filesDir = this.directories.filesDir;
    }
    contains(fingerprint) {
        return this.delegate.contains(fingerprint);
    }
    delete(docMetaFileRef, datastoreMutation) {
        return this.delegate.delete(docMetaFileRef, datastoreMutation);
    }
    writeFile(backend, ref, data, opts) {
        return this.delegate.writeFile(backend, ref, data, opts);
    }
    containsFile(backend, ref) {
        return this.delegate.containsFile(backend, ref);
    }
    getFile(backend, ref, opts) {
        return this.delegate.getFile(backend, ref, opts);
    }
    deleteFile(backend, ref) {
        return this.delegate.deleteFile(backend, ref);
    }
    getDocMeta(fingerprint) {
        return this.delegate.getDocMeta(fingerprint);
    }
    getDocMetaRefs() {
        return this.delegate.getDocMetaRefs();
    }
    snapshot(listener) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.delegate.snapshot(listener);
        });
    }
    createBackup() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.delegate.createBackup();
        });
    }
    init() {
        return this.delegate.init();
    }
    stop() {
        return this.delegate.stop();
    }
    write(fingerprint, data, docInfo, opts) {
        return this.delegate.write(fingerprint, data, docInfo, opts);
    }
    synchronizeDocs(...docMetaRefs) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.delegate.synchronizeDocs(...docMetaRefs);
        });
    }
    addDocMetaSnapshotEventListener(docMetaSnapshotEventListener) {
        this.delegate.addDocMetaSnapshotEventListener(docMetaSnapshotEventListener);
    }
    overview() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.delegate.overview();
        });
    }
    capabilities() {
        return this.delegate.capabilities();
    }
    getPrefs() {
        return this.delegate.getPrefs();
    }
}
exports.DelegatedDatastore = DelegatedDatastore;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVsZWdhdGVkRGF0YXN0b3JlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRGVsZWdhdGVkRGF0YXN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsMkNBQWtMO0FBS2xMLCtDQUEwQztBQUUxQyxrRUFBNkQ7QUFZN0QsTUFBYSxrQkFBbUIsU0FBUSw2QkFBaUI7SUFVckQsWUFBWSxRQUFtQjtRQUMzQixLQUFLLEVBQUUsQ0FBQztRQUNSLDZCQUFhLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsRUFBRSxHQUFHLFlBQVksR0FBRyxRQUFRLENBQUMsRUFBRSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSx5QkFBVyxFQUFFLENBQUM7UUFDckMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQztJQUU5QyxDQUFDO0lBRU0sUUFBUSxDQUFDLFdBQW1CO1FBQy9CLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVNLE1BQU0sQ0FBQyxjQUE4QixFQUFFLGlCQUE4QztRQUN4RixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFTSxTQUFTLENBQUMsT0FBZ0IsRUFBRSxHQUFZLEVBQUUsSUFBb0IsRUFBRSxJQUFvQjtRQUN2RixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFTSxZQUFZLENBQUMsT0FBZ0IsRUFBRSxHQUFZO1FBQzlDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFTSxPQUFPLENBQUMsT0FBZ0IsRUFBRSxHQUFZLEVBQUUsSUFBa0I7UUFDN0QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFTSxVQUFVLENBQUMsT0FBZ0IsRUFBRSxHQUFZO1FBQzVDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFTSxVQUFVLENBQUMsV0FBbUI7UUFDakMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRU0sY0FBYztRQUNqQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDMUMsQ0FBQztJQUVZLFFBQVEsQ0FBQyxRQUFzQzs7WUFDeEQsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1QyxDQUFDO0tBQUE7SUFFWSxZQUFZOztZQUNyQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDeEMsQ0FBQztLQUFBO0lBRU0sSUFBSTtRQUNQLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBRU0sSUFBSTtRQUNQLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBRU0sS0FBSyxDQUFDLFdBQW1CLEVBQUUsSUFBUyxFQUFFLE9BQWlCLEVBQUUsSUFBZ0I7UUFDNUUsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRVksZUFBZSxDQUFDLEdBQUcsV0FBeUI7O1lBQ3JELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQztRQUN6RCxDQUFDO0tBQUE7SUFFTSwrQkFBK0IsQ0FBQyw0QkFBMEQ7UUFDN0YsSUFBSSxDQUFDLFFBQVEsQ0FBQywrQkFBK0IsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO0lBQ2hGLENBQUM7SUFFWSxRQUFROztZQUNqQixPQUFPLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUMxQyxDQUFDO0tBQUE7SUFFTSxZQUFZO1FBQ2YsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hDLENBQUM7SUFFTSxRQUFRO1FBQ1gsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BDLENBQUM7Q0FFSjtBQTVGRCxnREE0RkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Fic3RyYWN0RGF0YXN0b3JlLCBCaW5hcnlGaWxlRGF0YSwgRGF0YXN0b3JlLCBEYXRhc3RvcmVJRCwgRGF0YXN0b3JlT3ZlcnZpZXcsIERvY01ldGFTbmFwc2hvdEV2ZW50TGlzdGVuZXIsIEluaXRSZXN1bHQsIFByZWZzUHJvdmlkZXIsIFNuYXBzaG90UmVzdWx0fSBmcm9tICcuL0RhdGFzdG9yZSc7XG5pbXBvcnQge0RlbGV0ZVJlc3VsdH0gZnJvbSAnLi9EYXRhc3RvcmUnO1xuaW1wb3J0IHtXcml0ZUZpbGVPcHRzfSBmcm9tICcuL0RhdGFzdG9yZSc7XG5pbXBvcnQge0RhdGFzdG9yZUNhcGFiaWxpdGllc30gZnJvbSAnLi9EYXRhc3RvcmUnO1xuaW1wb3J0IHtHZXRGaWxlT3B0c30gZnJvbSAnLi9EYXRhc3RvcmUnO1xuaW1wb3J0IHtEaXJlY3Rvcmllc30gZnJvbSAnLi9EaXJlY3Rvcmllcyc7XG5pbXBvcnQge0RvY01ldGFGaWxlUmVmLCBEb2NNZXRhUmVmfSBmcm9tICcuL0RvY01ldGFSZWYnO1xuaW1wb3J0IHtQcmVjb25kaXRpb25zfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL1ByZWNvbmRpdGlvbnMnO1xuaW1wb3J0IHtCYWNrZW5kfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL2RhdGFzdG9yZS9CYWNrZW5kJztcbmltcG9ydCB7RG9jRmlsZU1ldGF9IGZyb20gJy4vRG9jRmlsZU1ldGEnO1xuaW1wb3J0IHtPcHRpb25hbH0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL3RzL09wdGlvbmFsJztcbmltcG9ydCB7SURvY0luZm99IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbWV0YWRhdGEvSURvY0luZm8nO1xuaW1wb3J0IHtXcml0ZU9wdHN9IGZyb20gJy4vRGF0YXN0b3JlJztcbmltcG9ydCB7RGF0YXN0b3JlTXV0YXRpb259IGZyb20gJy4vRGF0YXN0b3JlTXV0YXRpb24nO1xuaW1wb3J0IHtGaWxlUmVmfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy9kYXRhc3RvcmUvRmlsZVJlZlwiO1xuXG4vKipcbiAqIEEgZGF0YXN0b3JlIHRoYXQganVzdCBmb3J3YXJkcyBldmVudHMgdG8gdGhlIGdpdmVuIGRlbGVnYXRlLlxuICovXG5leHBvcnQgY2xhc3MgRGVsZWdhdGVkRGF0YXN0b3JlIGV4dGVuZHMgQWJzdHJhY3REYXRhc3RvcmUgaW1wbGVtZW50cyBEYXRhc3RvcmUge1xuXG4gICAgcHVibGljIHJlYWRvbmx5IGlkOiBEYXRhc3RvcmVJRDtcblxuICAgIHB1YmxpYyByZWFkb25seSBkaXJlY3RvcmllczogRGlyZWN0b3JpZXM7XG5cbiAgICBwdWJsaWMgcmVhZG9ubHkgZmlsZXNEaXI6IHN0cmluZztcblxuICAgIHByb3RlY3RlZCByZWFkb25seSBkZWxlZ2F0ZTogRGF0YXN0b3JlO1xuXG4gICAgY29uc3RydWN0b3IoZGVsZWdhdGU6IERhdGFzdG9yZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBQcmVjb25kaXRpb25zLmFzc2VydFByZXNlbnQoZGVsZWdhdGUsICdkZWxlZ2F0ZScpO1xuICAgICAgICB0aGlzLmlkID0gJ2RlbGVnYXRlZDonICsgZGVsZWdhdGUuaWQ7XG4gICAgICAgIHRoaXMuZGVsZWdhdGUgPSBkZWxlZ2F0ZTtcbiAgICAgICAgdGhpcy5kaXJlY3RvcmllcyA9IG5ldyBEaXJlY3RvcmllcygpO1xuICAgICAgICB0aGlzLmZpbGVzRGlyID0gdGhpcy5kaXJlY3Rvcmllcy5maWxlc0RpcjtcblxuICAgIH1cblxuICAgIHB1YmxpYyBjb250YWlucyhmaW5nZXJwcmludDogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlbGVnYXRlLmNvbnRhaW5zKGZpbmdlcnByaW50KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGVsZXRlKGRvY01ldGFGaWxlUmVmOiBEb2NNZXRhRmlsZVJlZiwgZGF0YXN0b3JlTXV0YXRpb24/OiBEYXRhc3RvcmVNdXRhdGlvbjxib29sZWFuPik6IFByb21pc2U8UmVhZG9ubHk8RGVsZXRlUmVzdWx0Pj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5kZWxlZ2F0ZS5kZWxldGUoZG9jTWV0YUZpbGVSZWYsIGRhdGFzdG9yZU11dGF0aW9uKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgd3JpdGVGaWxlKGJhY2tlbmQ6IEJhY2tlbmQsIHJlZjogRmlsZVJlZiwgZGF0YTogQmluYXJ5RmlsZURhdGEsIG9wdHM/OiBXcml0ZUZpbGVPcHRzKTogUHJvbWlzZTxEb2NGaWxlTWV0YT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5kZWxlZ2F0ZS53cml0ZUZpbGUoYmFja2VuZCwgcmVmLCBkYXRhLCBvcHRzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY29udGFpbnNGaWxlKGJhY2tlbmQ6IEJhY2tlbmQsIHJlZjogRmlsZVJlZik6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5kZWxlZ2F0ZS5jb250YWluc0ZpbGUoYmFja2VuZCwgcmVmKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0RmlsZShiYWNrZW5kOiBCYWNrZW5kLCByZWY6IEZpbGVSZWYsIG9wdHM/OiBHZXRGaWxlT3B0cyk6IERvY0ZpbGVNZXRhIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVsZWdhdGUuZ2V0RmlsZShiYWNrZW5kLCByZWYsIG9wdHMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBkZWxldGVGaWxlKGJhY2tlbmQ6IEJhY2tlbmQsIHJlZjogRmlsZVJlZik6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5kZWxlZ2F0ZS5kZWxldGVGaWxlKGJhY2tlbmQsIHJlZik7XG4gICAgfVxuXG4gICAgcHVibGljIGdldERvY01ldGEoZmluZ2VycHJpbnQ6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nIHwgbnVsbD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5kZWxlZ2F0ZS5nZXREb2NNZXRhKGZpbmdlcnByaW50KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0RG9jTWV0YVJlZnMoKTogUHJvbWlzZTxEb2NNZXRhUmVmW10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVsZWdhdGUuZ2V0RG9jTWV0YVJlZnMoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgc25hcHNob3QobGlzdGVuZXI6IERvY01ldGFTbmFwc2hvdEV2ZW50TGlzdGVuZXIpOiBQcm9taXNlPFNuYXBzaG90UmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlbGVnYXRlLnNuYXBzaG90KGxpc3RlbmVyKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgY3JlYXRlQmFja3VwKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5kZWxlZ2F0ZS5jcmVhdGVCYWNrdXAoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgaW5pdCgpOiBQcm9taXNlPEluaXRSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVsZWdhdGUuaW5pdCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdG9wKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5kZWxlZ2F0ZS5zdG9wKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHdyaXRlKGZpbmdlcnByaW50OiBzdHJpbmcsIGRhdGE6IGFueSwgZG9jSW5mbzogSURvY0luZm8sIG9wdHM/OiBXcml0ZU9wdHMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVsZWdhdGUud3JpdGUoZmluZ2VycHJpbnQsIGRhdGEsIGRvY0luZm8sIG9wdHMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBzeW5jaHJvbml6ZURvY3MoLi4uZG9jTWV0YVJlZnM6IERvY01ldGFSZWZbXSk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5kZWxlZ2F0ZS5zeW5jaHJvbml6ZURvY3MoLi4uZG9jTWV0YVJlZnMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGREb2NNZXRhU25hcHNob3RFdmVudExpc3RlbmVyKGRvY01ldGFTbmFwc2hvdEV2ZW50TGlzdGVuZXI6IERvY01ldGFTbmFwc2hvdEV2ZW50TGlzdGVuZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kZWxlZ2F0ZS5hZGREb2NNZXRhU25hcHNob3RFdmVudExpc3RlbmVyKGRvY01ldGFTbmFwc2hvdEV2ZW50TGlzdGVuZXIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBvdmVydmlldygpOiBQcm9taXNlPERhdGFzdG9yZU92ZXJ2aWV3IHwgdW5kZWZpbmVkPiB7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmRlbGVnYXRlLm92ZXJ2aWV3KCk7XG4gICAgfVxuXG4gICAgcHVibGljIGNhcGFiaWxpdGllcygpOiBEYXRhc3RvcmVDYXBhYmlsaXRpZXMge1xuICAgICAgICByZXR1cm4gdGhpcy5kZWxlZ2F0ZS5jYXBhYmlsaXRpZXMoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0UHJlZnMoKTogUHJlZnNQcm92aWRlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlbGVnYXRlLmdldFByZWZzKCk7XG4gICAgfVxuXG59XG5cbiJdfQ==