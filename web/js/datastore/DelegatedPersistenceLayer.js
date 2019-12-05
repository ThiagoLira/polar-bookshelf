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
class DelegatedPersistenceLayer {
    constructor(delegate) {
        this.id = 'delegated';
        this.delegate = delegate;
        this.datastore = delegate.datastore;
    }
    addDocMetaSnapshotEventListener(docMetaSnapshotEventListener) {
        this.delegate.addDocMetaSnapshotEventListener(docMetaSnapshotEventListener);
    }
    contains(fingerprint) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.delegate.contains(fingerprint);
        });
    }
    containsFile(backend, ref) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.delegate.containsFile(backend, ref);
        });
    }
    deleteFile(backend, ref) {
        return this.datastore.deleteFile(backend, ref);
    }
    deactivate() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.delegate.deactivate();
        });
    }
    delete(docMetaFileRef, datastoreMutation) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.delegate.delete(docMetaFileRef, datastoreMutation);
        });
    }
    getDocMeta(fingerprint) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.delegate.getDocMeta(fingerprint);
        });
    }
    getDocMetaRefs() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.delegate.getDocMetaRefs();
        });
    }
    getFile(backend, ref, opts) {
        return this.delegate.getFile(backend, ref, opts);
    }
    init(errorListener, opts) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.delegate.init(errorListener, opts);
        });
    }
    snapshot(listener, errorListener) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.delegate.snapshot(listener, errorListener);
        });
    }
    createBackup() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.delegate.createBackup();
        });
    }
    stop() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.delegate.stop();
        });
    }
    write(fingerprint, docMeta, opts) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.delegate.write(fingerprint, docMeta, opts);
        });
    }
    writeDocMeta(docMeta, datastoreMutation) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.delegate.writeDocMeta(docMeta, datastoreMutation);
        });
    }
    synchronizeDocs(...docMetaRefs) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.delegate.synchronizeDocs(...docMetaRefs);
        });
    }
    writeFile(backend, ref, data, opts) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.delegate.writeFile(backend, ref, data, opts);
        });
    }
    overview() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.delegate.overview();
        });
    }
    capabilities() {
        return this.delegate.capabilities();
    }
}
exports.DelegatedPersistenceLayer = DelegatedPersistenceLayer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVsZWdhdGVkUGVyc2lzdGVuY2VMYXllci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkRlbGVnYXRlZFBlcnNpc3RlbmNlTGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUF1QkEsTUFBYSx5QkFBeUI7SUFRbEMsWUFBWSxRQUEwQjtRQU50QixPQUFFLEdBQXVCLFdBQVcsQ0FBQztRQU9qRCxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUM7SUFDeEMsQ0FBQztJQUVNLCtCQUErQixDQUFDLDRCQUEwRDtRQUM3RixJQUFJLENBQUMsUUFBUSxDQUFDLCtCQUErQixDQUFDLDRCQUE0QixDQUFDLENBQUM7SUFDaEYsQ0FBQztJQUVZLFFBQVEsQ0FBQyxXQUFtQjs7WUFDckMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMvQyxDQUFDO0tBQUE7SUFFWSxZQUFZLENBQUMsT0FBZ0IsRUFBRSxHQUFZOztZQUNwRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNwRCxDQUFDO0tBQUE7SUFFTSxVQUFVLENBQUMsT0FBZ0IsRUFBRSxHQUFZO1FBQzVDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFWSxVQUFVOztZQUNuQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDdEMsQ0FBQztLQUFBO0lBRVksTUFBTSxDQUFDLGNBQThCLEVBQUUsaUJBQThDOztZQUM5RixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1FBQ25FLENBQUM7S0FBQTtJQUVZLFVBQVUsQ0FBQyxXQUFtQjs7WUFDdkMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNqRCxDQUFDO0tBQUE7SUFFWSxjQUFjOztZQUN2QixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDMUMsQ0FBQztLQUFBO0lBRU0sT0FBTyxDQUFDLE9BQWdCLEVBQUUsR0FBWSxFQUFFLElBQWtCO1FBQzdELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRVksSUFBSSxDQUFDLGFBQTZCLEVBQUUsSUFBd0I7O1lBQ3JFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ25ELENBQUM7S0FBQTtJQUVZLFFBQVEsQ0FBQyxRQUFzQyxFQUFFLGFBQTZCOztZQUN2RixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUMzRCxDQUFDO0tBQUE7SUFFWSxZQUFZOztZQUNyQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDeEMsQ0FBQztLQUFBO0lBRVksSUFBSTs7WUFDYixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDaEMsQ0FBQztLQUFBO0lBRVksS0FBSyxDQUFDLFdBQW1CLEVBQUUsT0FBaUIsRUFBRSxJQUFnQjs7WUFDdkUsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzNELENBQUM7S0FBQTtJQUVZLFlBQVksQ0FBQyxPQUFpQixFQUFFLGlCQUErQzs7WUFDeEYsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztRQUNsRSxDQUFDO0tBQUE7SUFFWSxlQUFlLENBQUMsR0FBRyxXQUF5Qjs7WUFDckQsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFDO1FBQ3pELENBQUM7S0FBQTtJQUVZLFNBQVMsQ0FBQyxPQUFnQixFQUFFLEdBQVksRUFBRSxJQUFvQixFQUFFLElBQW9COztZQUM3RixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzdELENBQUM7S0FBQTtJQUVZLFFBQVE7O1lBQ2pCLE9BQU8sTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzFDLENBQUM7S0FBQTtJQUVNLFlBQVk7UUFDZixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEMsQ0FBQztDQUVKO0FBekZELDhEQXlGQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QmluYXJ5RmlsZURhdGEsIERhdGFzdG9yZSwgRG9jTWV0YVNuYXBzaG90RXZlbnRMaXN0ZW5lciwgRXJyb3JMaXN0ZW5lciwgU25hcHNob3RSZXN1bHR9IGZyb20gJy4vRGF0YXN0b3JlJztcbmltcG9ydCB7RGVsZXRlUmVzdWx0fSBmcm9tICcuL0RhdGFzdG9yZSc7XG5pbXBvcnQge1dyaXRlRmlsZU9wdHN9IGZyb20gJy4vRGF0YXN0b3JlJztcbmltcG9ydCB7R2V0RmlsZU9wdHN9IGZyb20gJy4vRGF0YXN0b3JlJztcbmltcG9ydCB7RGF0YXN0b3JlT3ZlcnZpZXd9IGZyb20gJy4vRGF0YXN0b3JlJztcbmltcG9ydCB7RGF0YXN0b3JlQ2FwYWJpbGl0aWVzfSBmcm9tICcuL0RhdGFzdG9yZSc7XG5pbXBvcnQge0RhdGFzdG9yZUluaXRPcHRzfSBmcm9tICcuL0RhdGFzdG9yZSc7XG5pbXBvcnQge0RvY01ldGFGaWxlUmVmLCBEb2NNZXRhUmVmfSBmcm9tICcuL0RvY01ldGFSZWYnO1xuaW1wb3J0IHtCYWNrZW5kfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL2RhdGFzdG9yZS9CYWNrZW5kJztcbmltcG9ydCB7RG9jRmlsZU1ldGF9IGZyb20gJy4vRG9jRmlsZU1ldGEnO1xuaW1wb3J0IHtPcHRpb25hbH0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL3RzL09wdGlvbmFsJztcbmltcG9ydCB7RG9jSW5mb30gZnJvbSAnLi4vbWV0YWRhdGEvRG9jSW5mbyc7XG5pbXBvcnQge0RhdGFzdG9yZU11dGF0aW9ufSBmcm9tICcuL0RhdGFzdG9yZU11dGF0aW9uJztcbmltcG9ydCB7UGVyc2lzdGVuY2VMYXllciwgUGVyc2lzdGVuY2VMYXllcklEfSBmcm9tICcuL1BlcnNpc3RlbmNlTGF5ZXInO1xuaW1wb3J0IHtEb2NNZXRhfSBmcm9tICcuLi9tZXRhZGF0YS9Eb2NNZXRhJztcbmltcG9ydCB7V3JpdGVPcHRzfSBmcm9tICcuL1BlcnNpc3RlbmNlTGF5ZXInO1xuaW1wb3J0IHtJRG9jSW5mb30gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvbWV0YWRhdGEvSURvY0luZm9cIjtcbmltcG9ydCB7SURvY01ldGF9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL21ldGFkYXRhL0lEb2NNZXRhXCI7XG5pbXBvcnQge0ZpbGVSZWZ9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL2RhdGFzdG9yZS9GaWxlUmVmXCI7XG5cbi8qKlxuICogQSBQZXJzaXN0ZW5jZUxheWVyIHRoYXQganVzdCBmb3J3YXJkcyBldmVudHMgdG8gdGhlIGdpdmVuIGRlbGVnYXRlLlxuICovXG5leHBvcnQgY2xhc3MgRGVsZWdhdGVkUGVyc2lzdGVuY2VMYXllciBpbXBsZW1lbnRzIFBlcnNpc3RlbmNlTGF5ZXIge1xuXG4gICAgcHVibGljIHJlYWRvbmx5IGlkOiBQZXJzaXN0ZW5jZUxheWVySUQgPSAnZGVsZWdhdGVkJztcblxuICAgIHB1YmxpYyByZWFkb25seSBkYXRhc3RvcmU6IERhdGFzdG9yZTtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgZGVsZWdhdGU6IFBlcnNpc3RlbmNlTGF5ZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkZWxlZ2F0ZTogUGVyc2lzdGVuY2VMYXllcikge1xuICAgICAgICB0aGlzLmRlbGVnYXRlID0gZGVsZWdhdGU7XG4gICAgICAgIHRoaXMuZGF0YXN0b3JlID0gZGVsZWdhdGUuZGF0YXN0b3JlO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGREb2NNZXRhU25hcHNob3RFdmVudExpc3RlbmVyKGRvY01ldGFTbmFwc2hvdEV2ZW50TGlzdGVuZXI6IERvY01ldGFTbmFwc2hvdEV2ZW50TGlzdGVuZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kZWxlZ2F0ZS5hZGREb2NNZXRhU25hcHNob3RFdmVudExpc3RlbmVyKGRvY01ldGFTbmFwc2hvdEV2ZW50TGlzdGVuZXIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBjb250YWlucyhmaW5nZXJwcmludDogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlbGVnYXRlLmNvbnRhaW5zKGZpbmdlcnByaW50KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgY29udGFpbnNGaWxlKGJhY2tlbmQ6IEJhY2tlbmQsIHJlZjogRmlsZVJlZik6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5kZWxlZ2F0ZS5jb250YWluc0ZpbGUoYmFja2VuZCwgcmVmKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGVsZXRlRmlsZShiYWNrZW5kOiBCYWNrZW5kLCByZWY6IEZpbGVSZWYpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YXN0b3JlLmRlbGV0ZUZpbGUoYmFja2VuZCwgcmVmKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgZGVhY3RpdmF0ZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVsZWdhdGUuZGVhY3RpdmF0ZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBkZWxldGUoZG9jTWV0YUZpbGVSZWY6IERvY01ldGFGaWxlUmVmLCBkYXRhc3RvcmVNdXRhdGlvbj86IERhdGFzdG9yZU11dGF0aW9uPGJvb2xlYW4+KTogUHJvbWlzZTxEZWxldGVSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVsZWdhdGUuZGVsZXRlKGRvY01ldGFGaWxlUmVmLCBkYXRhc3RvcmVNdXRhdGlvbik7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGdldERvY01ldGEoZmluZ2VycHJpbnQ6IHN0cmluZyk6IFByb21pc2U8SURvY01ldGF8IHVuZGVmaW5lZD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5kZWxlZ2F0ZS5nZXREb2NNZXRhKGZpbmdlcnByaW50KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgZ2V0RG9jTWV0YVJlZnMoKTogUHJvbWlzZTxEb2NNZXRhUmVmW10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVsZWdhdGUuZ2V0RG9jTWV0YVJlZnMoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0RmlsZShiYWNrZW5kOiBCYWNrZW5kLCByZWY6IEZpbGVSZWYsIG9wdHM/OiBHZXRGaWxlT3B0cyk6IERvY0ZpbGVNZXRhIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVsZWdhdGUuZ2V0RmlsZShiYWNrZW5kLCByZWYsIG9wdHMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBpbml0KGVycm9yTGlzdGVuZXI/OiBFcnJvckxpc3RlbmVyLCBvcHRzPzogRGF0YXN0b3JlSW5pdE9wdHMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVsZWdhdGUuaW5pdChlcnJvckxpc3RlbmVyLCBvcHRzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgc25hcHNob3QobGlzdGVuZXI6IERvY01ldGFTbmFwc2hvdEV2ZW50TGlzdGVuZXIsIGVycm9yTGlzdGVuZXI/OiBFcnJvckxpc3RlbmVyKTogUHJvbWlzZTxTbmFwc2hvdFJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5kZWxlZ2F0ZS5zbmFwc2hvdChsaXN0ZW5lciwgZXJyb3JMaXN0ZW5lcik7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGNyZWF0ZUJhY2t1cCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVsZWdhdGUuY3JlYXRlQmFja3VwKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIHN0b3AoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlbGVnYXRlLnN0b3AoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgd3JpdGUoZmluZ2VycHJpbnQ6IHN0cmluZywgZG9jTWV0YTogSURvY01ldGEsIG9wdHM/OiBXcml0ZU9wdHMpOiBQcm9taXNlPElEb2NJbmZvPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlbGVnYXRlLndyaXRlKGZpbmdlcnByaW50LCBkb2NNZXRhLCBvcHRzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgd3JpdGVEb2NNZXRhKGRvY01ldGE6IElEb2NNZXRhLCBkYXRhc3RvcmVNdXRhdGlvbj86IERhdGFzdG9yZU11dGF0aW9uPElEb2NJbmZvPik6IFByb21pc2U8SURvY0luZm8+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVsZWdhdGUud3JpdGVEb2NNZXRhKGRvY01ldGEsIGRhdGFzdG9yZU11dGF0aW9uKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgc3luY2hyb25pemVEb2NzKC4uLmRvY01ldGFSZWZzOiBEb2NNZXRhUmVmW10pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVsZWdhdGUuc3luY2hyb25pemVEb2NzKC4uLmRvY01ldGFSZWZzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgd3JpdGVGaWxlKGJhY2tlbmQ6IEJhY2tlbmQsIHJlZjogRmlsZVJlZiwgZGF0YTogQmluYXJ5RmlsZURhdGEsIG9wdHM/OiBXcml0ZUZpbGVPcHRzKTogUHJvbWlzZTxEb2NGaWxlTWV0YT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5kZWxlZ2F0ZS53cml0ZUZpbGUoYmFja2VuZCwgcmVmLCBkYXRhLCBvcHRzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgb3ZlcnZpZXcoKTogUHJvbWlzZTxEYXRhc3RvcmVPdmVydmlldyB8IHVuZGVmaW5lZD4ge1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5kZWxlZ2F0ZS5vdmVydmlldygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjYXBhYmlsaXRpZXMoKTogRGF0YXN0b3JlQ2FwYWJpbGl0aWVzIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVsZWdhdGUuY2FwYWJpbGl0aWVzKCk7XG4gICAgfVxuXG59XG4iXX0=