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
const RendererAnalytics_1 = require("../ga/RendererAnalytics");
const tracer = RendererAnalytics_1.RendererAnalytics.createTracer('persistence-layer');
class TracedPersistenceLayer {
    constructor(delegate, id = 'traced') {
        this.delegate = delegate;
        this.id = id;
        this.datastore = delegate.datastore;
    }
    addEventListener(listener) {
        return this.delegate.addEventListener(listener);
    }
    addEventListenerForDoc(fingerprint, listener) {
        this.delegate.addEventListenerForDoc(fingerprint, listener);
    }
    addDocMetaSnapshotEventListener(docMetaSnapshotEventListener) {
        this.delegate.addDocMetaSnapshotEventListener(docMetaSnapshotEventListener);
    }
    contains(fingerprint) {
        return __awaiter(this, void 0, void 0, function* () {
            return tracer.traceAsync('contains', () => this.delegate.contains(fingerprint));
        });
    }
    containsFile(backend, ref) {
        return __awaiter(this, void 0, void 0, function* () {
            return tracer.traceAsync('containsFile', () => this.delegate.containsFile(backend, ref));
        });
    }
    deleteFile(backend, ref) {
        return tracer.traceAsync('deleteFile', () => this.datastore.deleteFile(backend, ref));
    }
    deactivate() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.delegate.deactivate();
        });
    }
    delete(docMetaFileRef, datastoreMutation) {
        return __awaiter(this, void 0, void 0, function* () {
            return tracer.traceAsync('delete', () => this.delegate.delete(docMetaFileRef, datastoreMutation));
        });
    }
    getDocMeta(fingerprint) {
        return __awaiter(this, void 0, void 0, function* () {
            return tracer.traceAsync('getDocMeta', () => this.delegate.getDocMeta(fingerprint));
        });
    }
    getDocMetaRefs() {
        return __awaiter(this, void 0, void 0, function* () {
            return tracer.traceAsync('getDocMetaRefs', () => this.delegate.getDocMetaRefs());
        });
    }
    getFile(backend, ref, opts) {
        return tracer.trace('getFile', () => this.delegate.getFile(backend, ref, opts));
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
            return tracer.traceAsync('write', () => this.delegate.write(fingerprint, docMeta, opts));
        });
    }
    writeDocMeta(docMeta, datastoreMutation) {
        return __awaiter(this, void 0, void 0, function* () {
            return tracer.traceAsync('writeDocMeta', () => this.delegate.writeDocMeta(docMeta, datastoreMutation));
        });
    }
    synchronizeDocs(...docMetaRefs) {
        return __awaiter(this, void 0, void 0, function* () {
            return tracer.traceAsync('synchronizeDocs', () => this.delegate.synchronizeDocs(...docMetaRefs));
        });
    }
    writeFile(backend, ref, data, opts) {
        return __awaiter(this, void 0, void 0, function* () {
            return tracer.traceAsync('writeFile', () => this.delegate.writeFile(backend, ref, data, opts));
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
exports.TracedPersistenceLayer = TracedPersistenceLayer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHJhY2VkUGVyc2lzdGVuY2VMYXllci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlRyYWNlZFBlcnNpc3RlbmNlTGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFzQkEsK0RBQTBEO0FBSzFELE1BQU0sTUFBTSxHQUFHLHFDQUFpQixDQUFDLFlBQVksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBT25FLE1BQWEsc0JBQXNCO0lBSS9CLFlBQTZCLFFBQW9DLEVBQ3JDLEtBQWEsUUFBUTtRQURwQixhQUFRLEdBQVIsUUFBUSxDQUE0QjtRQUNyQyxPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQUM3QyxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUM7SUFDeEMsQ0FBQztJQUVNLGdCQUFnQixDQUFDLFFBQWtDO1FBQ3RELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRU0sc0JBQXNCLENBQUMsV0FBbUIsRUFBRSxRQUFrQztRQUNqRixJQUFJLENBQUMsUUFBUSxDQUFDLHNCQUFzQixDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRU0sK0JBQStCLENBQUMsNEJBQTBEO1FBQzdGLElBQUksQ0FBQyxRQUFRLENBQUMsK0JBQStCLENBQUMsNEJBQTRCLENBQUMsQ0FBQztJQUNoRixDQUFDO0lBRVksUUFBUSxDQUFDLFdBQW1COztZQUNyQyxPQUFPLE1BQU0sQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDcEYsQ0FBQztLQUFBO0lBRVksWUFBWSxDQUFDLE9BQWdCLEVBQUUsR0FBWTs7WUFDcEQsT0FBTyxNQUFNLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJ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QUFBO0lBRVksU0FBUyxDQUFDLE9BQWdCLEVBQUUsR0FBWSxFQUFFLElBQW9CLEVBQUUsSUFBb0I7O1lBQzdGLE9BQU8sTUFBTSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNuRyxDQUFDO0tBQUE7SUFFWSxRQUFROztZQUNqQixPQUFPLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUMxQyxDQUFDO0tBQUE7SUFFTSxZQUFZO1FBQ2YsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hDLENBQUM7Q0FFSjtBQTdGRCx3REE2RkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0xpc3RlbmFibGVQZXJzaXN0ZW5jZUxheWVyfSBmcm9tICcuL0xpc3RlbmFibGVQZXJzaXN0ZW5jZUxheWVyJztcbmltcG9ydCB7UGVyc2lzdGVuY2VMYXllckxpc3RlbmVyfSBmcm9tICcuL1BlcnNpc3RlbmNlTGF5ZXJMaXN0ZW5lcic7XG5pbXBvcnQge0RvY01ldGFTbmFwc2hvdEV2ZW50TGlzdGVuZXJ9IGZyb20gJy4vRGF0YXN0b3JlJztcbmltcG9ydCB7RGVsZXRlUmVzdWx0fSBmcm9tICcuL0RhdGFzdG9yZSc7XG5pbXBvcnQge0dldEZpbGVPcHRzfSBmcm9tICcuL0RhdGFzdG9yZSc7XG5pbXBvcnQge0Vycm9yTGlzdGVuZXJ9IGZyb20gJy4vRGF0YXN0b3JlJztcbmltcG9ydCB7RGF0YXN0b3JlSW5pdE9wdHN9IGZyb20gJy4vRGF0YXN0b3JlJztcbmltcG9ydCB7U25hcHNob3RSZXN1bHR9IGZyb20gJy4vRGF0YXN0b3JlJztcbmltcG9ydCB7QmluYXJ5RmlsZURhdGF9IGZyb20gJy4vRGF0YXN0b3JlJztcbmltcG9ydCB7V3JpdGVGaWxlT3B0c30gZnJvbSAnLi9EYXRhc3RvcmUnO1xuaW1wb3J0IHtEYXRhc3RvcmVPdmVydmlld30gZnJvbSAnLi9EYXRhc3RvcmUnO1xuaW1wb3J0IHtEYXRhc3RvcmVDYXBhYmlsaXRpZXN9IGZyb20gJy4vRGF0YXN0b3JlJztcbmltcG9ydCB7RGF0YXN0b3JlfSBmcm9tICcuL0RhdGFzdG9yZSc7XG5pbXBvcnQge0JhY2tlbmR9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvZGF0YXN0b3JlL0JhY2tlbmQnO1xuaW1wb3J0IHtEb2NNZXRhRmlsZVJlZn0gZnJvbSAnLi9Eb2NNZXRhUmVmJztcbmltcG9ydCB7RG9jTWV0YVJlZn0gZnJvbSAnLi9Eb2NNZXRhUmVmJztcbmltcG9ydCB7RGF0YXN0b3JlTXV0YXRpb259IGZyb20gJy4vRGF0YXN0b3JlTXV0YXRpb24nO1xuaW1wb3J0IHtEb2NNZXRhfSBmcm9tICcuLi9tZXRhZGF0YS9Eb2NNZXRhJztcbmltcG9ydCB7T3B0aW9uYWx9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC90cy9PcHRpb25hbCc7XG5pbXBvcnQge0RvY0ZpbGVNZXRhfSBmcm9tICcuL0RvY0ZpbGVNZXRhJztcbmltcG9ydCB7V3JpdGVPcHRzfSBmcm9tICcuL1BlcnNpc3RlbmNlTGF5ZXInO1xuaW1wb3J0IHtEb2NJbmZvfSBmcm9tICcuLi9tZXRhZGF0YS9Eb2NJbmZvJztcbmltcG9ydCB7UmVuZGVyZXJBbmFseXRpY3N9IGZyb20gJy4uL2dhL1JlbmRlcmVyQW5hbHl0aWNzJztcbmltcG9ydCB7SURvY0luZm99IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL21ldGFkYXRhL0lEb2NJbmZvXCI7XG5pbXBvcnQge0lEb2NNZXRhfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy9tZXRhZGF0YS9JRG9jTWV0YVwiO1xuaW1wb3J0IHtGaWxlUmVmfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy9kYXRhc3RvcmUvRmlsZVJlZlwiO1xuXG5jb25zdCB0cmFjZXIgPSBSZW5kZXJlckFuYWx5dGljcy5jcmVhdGVUcmFjZXIoJ3BlcnNpc3RlbmNlLWxheWVyJyk7XG5cbi8qKlxuICogQSBQZXJzaXN0ZW5jZUxheWVyIHRoYXQgdHJhY2VzIHBvdGVudGlhbGx5IHNsb3cgb3BlcmF0aW9ucyBzbyB3ZSBjYW5cbiAqIGFuYWx5emUgcGVyZm9ybWFuY2UgYXQgcnVudGltZSBhbmQgdHJ5IHRvIGtlZXAgb3B0aW1pemluZyB0aGUgaGlnaCBsZXZlbFxuICogb3BlcmF0aW9ucy5cbiAqL1xuZXhwb3J0IGNsYXNzIFRyYWNlZFBlcnNpc3RlbmNlTGF5ZXIgaW1wbGVtZW50cyBMaXN0ZW5hYmxlUGVyc2lzdGVuY2VMYXllciB7XG5cbiAgICBwdWJsaWMgcmVhZG9ubHkgZGF0YXN0b3JlOiBEYXRhc3RvcmU7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGRlbGVnYXRlOiBMaXN0ZW5hYmxlUGVyc2lzdGVuY2VMYXllcixcbiAgICAgICAgICAgICAgICBwdWJsaWMgcmVhZG9ubHkgaWQ6IHN0cmluZyA9ICd0cmFjZWQnKSB7XG4gICAgICAgIHRoaXMuZGF0YXN0b3JlID0gZGVsZWdhdGUuZGF0YXN0b3JlO1xuICAgIH1cblxuICAgIHB1YmxpYyBhZGRFdmVudExpc3RlbmVyKGxpc3RlbmVyOiBQZXJzaXN0ZW5jZUxheWVyTGlzdGVuZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVsZWdhdGUuYWRkRXZlbnRMaXN0ZW5lcihsaXN0ZW5lcik7XG4gICAgfVxuXG4gICAgcHVibGljIGFkZEV2ZW50TGlzdGVuZXJGb3JEb2MoZmluZ2VycHJpbnQ6IHN0cmluZywgbGlzdGVuZXI6IFBlcnNpc3RlbmNlTGF5ZXJMaXN0ZW5lcik6IHZvaWQge1xuICAgICAgICB0aGlzLmRlbGVnYXRlLmFkZEV2ZW50TGlzdGVuZXJGb3JEb2MoZmluZ2VycHJpbnQsIGxpc3RlbmVyKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkRG9jTWV0YVNuYXBzaG90RXZlbnRMaXN0ZW5lcihkb2NNZXRhU25hcHNob3RFdmVudExpc3RlbmVyOiBEb2NNZXRhU25hcHNob3RFdmVudExpc3RlbmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGVsZWdhdGUuYWRkRG9jTWV0YVNuYXBzaG90RXZlbnRMaXN0ZW5lcihkb2NNZXRhU25hcHNob3RFdmVudExpc3RlbmVyKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgY29udGFpbnMoZmluZ2VycHJpbnQ6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm4gdHJhY2VyLnRyYWNlQXN5bmMoJ2NvbnRhaW5zJywgKCkgPT4gdGhpcy5kZWxlZ2F0ZS5jb250YWlucyhmaW5nZXJwcmludCkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBjb250YWluc0ZpbGUoYmFja2VuZDogQmFja2VuZCwgcmVmOiBGaWxlUmVmKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybiB0cmFjZXIudHJhY2VBc3luYygnY29udGFpbnNGaWxlJywgKCkgPT4gdGhpcy5kZWxlZ2F0ZS5jb250YWluc0ZpbGUoYmFja2VuZCwgcmVmKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGRlbGV0ZUZpbGUoYmFja2VuZDogQmFja2VuZCwgcmVmOiBGaWxlUmVmKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybiB0cmFjZXIudHJhY2VBc3luYygnZGVsZXRlRmlsZScsICgpID0+IHRoaXMuZGF0YXN0b3JlLmRlbGV0ZUZpbGUoYmFja2VuZCwgcmVmKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGRlYWN0aXZhdGUoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlbGVnYXRlLmRlYWN0aXZhdGUoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgZGVsZXRlKGRvY01ldGFGaWxlUmVmOiBEb2NNZXRhRmlsZVJlZiwgZGF0YXN0b3JlTXV0YXRpb24/OiBEYXRhc3RvcmVNdXRhdGlvbjxib29sZWFuPik6IFByb21pc2U8RGVsZXRlUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0cmFjZXIudHJhY2VBc3luYygnZGVsZXRlJywgKCkgPT4gdGhpcy5kZWxlZ2F0ZS5kZWxldGUoZG9jTWV0YUZpbGVSZWYsIGRhdGFzdG9yZU11dGF0aW9uKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGdldERvY01ldGEoZmluZ2VycHJpbnQ6IHN0cmluZyk6IFByb21pc2U8SURvY01ldGF8IHVuZGVmaW5lZD4ge1xuICAgICAgICByZXR1cm4gdHJhY2VyLnRyYWNlQXN5bmMoJ2dldERvY01ldGEnLCAoKSA9PiB0aGlzLmRlbGVnYXRlLmdldERvY01ldGEoZmluZ2VycHJpbnQpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgZ2V0RG9jTWV0YVJlZnMoKTogUHJvbWlzZTxEb2NNZXRhUmVmW10+IHtcbiAgICAgICAgcmV0dXJuIHRyYWNlci50cmFjZUFzeW5jKCdnZXREb2NNZXRhUmVmcycsICgpID0+IHRoaXMuZGVsZWdhdGUuZ2V0RG9jTWV0YVJlZnMoKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEZpbGUoYmFja2VuZDogQmFja2VuZCwgcmVmOiBGaWxlUmVmLCBvcHRzPzogR2V0RmlsZU9wdHMpOiBEb2NGaWxlTWV0YSB7XG4gICAgICAgIHJldHVybiB0cmFjZXIudHJhY2UoJ2dldEZpbGUnLCAoKSA9PiB0aGlzLmRlbGVnYXRlLmdldEZpbGUoYmFja2VuZCwgcmVmLCBvcHRzKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGluaXQoZXJyb3JMaXN0ZW5lcj86IEVycm9yTGlzdGVuZXIsIG9wdHM/OiBEYXRhc3RvcmVJbml0T3B0cyk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5kZWxlZ2F0ZS5pbml0KGVycm9yTGlzdGVuZXIsIG9wdHMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBzbmFwc2hvdChsaXN0ZW5lcjogRG9jTWV0YVNuYXBzaG90RXZlbnRMaXN0ZW5lciwgZXJyb3JMaXN0ZW5lcj86IEVycm9yTGlzdGVuZXIpOiBQcm9taXNlPFNuYXBzaG90UmVzdWx0PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlbGVnYXRlLnNuYXBzaG90KGxpc3RlbmVyLCBlcnJvckxpc3RlbmVyKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgY3JlYXRlQmFja3VwKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5kZWxlZ2F0ZS5jcmVhdGVCYWNrdXAoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgc3RvcCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVsZWdhdGUuc3RvcCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyB3cml0ZShmaW5nZXJwcmludDogc3RyaW5nLCBkb2NNZXRhOiBJRG9jTWV0YSwgb3B0cz86IFdyaXRlT3B0cyk6IFByb21pc2U8SURvY0luZm8+IHtcbiAgICAgICAgcmV0dXJuIHRyYWNlci50cmFjZUFzeW5jKCd3cml0ZScsICgpID0+IHRoaXMuZGVsZWdhdGUud3JpdGUoZmluZ2VycHJpbnQsIGRvY01ldGEsIG9wdHMpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgd3JpdGVEb2NNZXRhKGRvY01ldGE6IElEb2NNZXRhLCBkYXRhc3RvcmVNdXRhdGlvbj86IERhdGFzdG9yZU11dGF0aW9uPElEb2NJbmZvPik6IFByb21pc2U8SURvY0luZm8+IHtcbiAgICAgICAgcmV0dXJuIHRyYWNlci50cmFjZUFzeW5jKCd3cml0ZURvY01ldGEnLCAoKSA9PiB0aGlzLmRlbGVnYXRlLndyaXRlRG9jTWV0YShkb2NNZXRhLCBkYXRhc3RvcmVNdXRhdGlvbikpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBzeW5jaHJvbml6ZURvY3MoLi4uZG9jTWV0YVJlZnM6IERvY01ldGFSZWZbXSk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm4gdHJhY2VyLnRyYWNlQXN5bmMoJ3N5bmNocm9uaXplRG9jcycsICgpID0+IHRoaXMuZGVsZWdhdGUuc3luY2hyb25pemVEb2NzKC4uLmRvY01ldGFSZWZzKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIHdyaXRlRmlsZShiYWNrZW5kOiBCYWNrZW5kLCByZWY6IEZpbGVSZWYsIGRhdGE6IEJpbmFyeUZpbGVEYXRhLCBvcHRzPzogV3JpdGVGaWxlT3B0cyk6IFByb21pc2U8RG9jRmlsZU1ldGE+IHtcbiAgICAgICAgcmV0dXJuIHRyYWNlci50cmFjZUFzeW5jKCd3cml0ZUZpbGUnLCAoKSA9PiB0aGlzLmRlbGVnYXRlLndyaXRlRmlsZShiYWNrZW5kLCByZWYsIGRhdGEsIG9wdHMpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgb3ZlcnZpZXcoKTogUHJvbWlzZTxEYXRhc3RvcmVPdmVydmlldyB8IHVuZGVmaW5lZD4ge1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5kZWxlZ2F0ZS5vdmVydmlldygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjYXBhYmlsaXRpZXMoKTogRGF0YXN0b3JlQ2FwYWJpbGl0aWVzIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVsZWdhdGUuY2FwYWJpbGl0aWVzKCk7XG4gICAgfVxuXG59XG4iXX0=