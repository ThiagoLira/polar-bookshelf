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
const SimpleReactor_1 = require("../../reactor/SimpleReactor");
const Functions_1 = require("polar-shared/src/util/Functions");
class AbstractAdvertisingPersistenceLayer {
    constructor(delegate) {
        this.reactor = new SimpleReactor_1.SimpleReactor();
        this.datastore = delegate.datastore;
        this.delegate = delegate;
    }
    init(errorListener, opts) {
        return this.delegate.init(errorListener, opts);
    }
    stop() {
        return this.delegate.stop();
    }
    addEventListener(listener) {
        return this.reactor.addEventListener(listener);
    }
    addEventListenerForDoc(fingerprint, listener) {
        this.addEventListener((event) => {
            if (fingerprint === event.docInfo.fingerprint) {
                listener(event);
            }
        });
    }
    writeDocMeta(docMeta, datastoreMutation) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.handleWrite(docMeta, () => __awaiter(this, void 0, void 0, function* () { return yield this.delegate.writeDocMeta(docMeta, datastoreMutation); }));
        });
    }
    write(fingerprint, docMeta, opts) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.handleWrite(docMeta, () => __awaiter(this, void 0, void 0, function* () { return yield this.delegate.write(fingerprint, docMeta, opts); }));
        });
    }
    handleWrite(docMeta, handler) {
        return __awaiter(this, void 0, void 0, function* () {
            const docInfo = yield handler();
            const eventType = this.contains(docMeta.docInfo.fingerprint) ? 'updated' : 'created';
            this.broadcastEvent({
                docInfo,
                docMetaRef: {
                    fingerprint: docMeta.docInfo.fingerprint
                },
                eventType
            });
            return docInfo;
        });
    }
    synchronizeDocs(...docMetaRefs) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.delegate.synchronizeDocs(...docMetaRefs);
        });
    }
    contains(fingerprint) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.delegate.contains(fingerprint);
        });
    }
    getDocMetaRefs() {
        return this.delegate.getDocMetaRefs();
    }
    snapshot(listener, errorListener = Functions_1.NULL_FUNCTION) {
        return this.delegate.snapshot(listener, errorListener);
    }
    createBackup() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.delegate.createBackup();
        });
    }
    delete(docMetaFileRef) {
        const result = this.delegate.delete(docMetaFileRef);
        this.broadcastEvent({
            docInfo: docMetaFileRef.docInfo,
            docMetaRef: {
                fingerprint: docMetaFileRef.fingerprint
            },
            eventType: 'deleted'
        });
        return result;
    }
    getDocMeta(fingerprint) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.delegate.getDocMeta(fingerprint);
        });
    }
    dispatchEvent(event) {
        this.reactor.dispatchEvent(event);
    }
    writeFile(backend, ref, data, opts) {
        return this.delegate.writeFile(backend, ref, data, opts);
    }
    containsFile(backend, ref) {
        return this.delegate.containsFile(backend, ref);
    }
    deleteFile(backend, ref) {
        return this.datastore.deleteFile(backend, ref);
    }
    getFile(backend, ref, opts) {
        return this.delegate.getFile(backend, ref, opts);
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
    deactivate() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.delegate.deactivate();
        });
    }
}
exports.AbstractAdvertisingPersistenceLayer = AbstractAdvertisingPersistenceLayer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWJzdHJhY3RBZHZlcnRpc2luZ1BlcnNpc3RlbmNlTGF5ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJBYnN0cmFjdEFkdmVydGlzaW5nUGVyc2lzdGVuY2VMYXllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBLCtEQUEwRDtBQWtCMUQsK0RBQThEO0FBTzlELE1BQXNCLG1DQUFtQztJQWFyRCxZQUFzQixRQUEwQjtRQVA3QixZQUFPLEdBQUcsSUFBSSw2QkFBYSxFQUF5QixDQUFDO1FBUXBFLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQztRQUNwQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUM3QixDQUFDO0lBRU0sSUFBSSxDQUFDLGFBQTZCLEVBQUUsSUFBd0I7UUFDL0QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVNLElBQUk7UUFDUCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVNLGdCQUFnQixDQUFDLFFBQWtDO1FBQ3RELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRU0sc0JBQXNCLENBQUMsV0FBbUIsRUFBRSxRQUFrQztRQUVqRixJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUU1QixJQUFJLFdBQVcsS0FBSyxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRTtnQkFDM0MsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ25CO1FBRUwsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDO0lBRVksWUFBWSxDQUFDLE9BQWlCLEVBQUUsaUJBQStDOztZQUV4RixPQUFPLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFP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LFlBQVksQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVNLFVBQVUsQ0FBQyxPQUFnQixFQUFFLEdBQVk7UUFDNUMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVNLE9BQU8sQ0FBQyxPQUFnQixFQUFFLEdBQVksRUFBRSxJQUFrQjtRQUM3RCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVNLCtCQUErQixDQUFDLDRCQUEwRDtRQUM3RixJQUFJLENBQUMsUUFBUSxDQUFDLCtCQUErQixDQUFDLDRCQUE0QixDQUFDLENBQUM7SUFDaEYsQ0FBQztJQUlZLFFBQVE7O1lBQ2pCLE9BQU8sTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzFDLENBQUM7S0FBQTtJQUVNLFlBQVk7UUFDZixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEMsQ0FBQztJQUVZLFVBQVU7O1lBQ25CLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNyQyxDQUFDO0tBQUE7Q0FFSjtBQS9KRCxrRkErSkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0xpc3RlbmFibGVQZXJzaXN0ZW5jZUxheWVyfSBmcm9tICcuLi9MaXN0ZW5hYmxlUGVyc2lzdGVuY2VMYXllcic7XG5pbXBvcnQge1NpbXBsZVJlYWN0b3J9IGZyb20gJy4uLy4uL3JlYWN0b3IvU2ltcGxlUmVhY3Rvcic7XG5pbXBvcnQge1BlcnNpc3RlbmNlTGF5ZXJFdmVudH0gZnJvbSAnLi4vUGVyc2lzdGVuY2VMYXllckV2ZW50JztcbmltcG9ydCB7UGVyc2lzdGVuY2VMYXllckxpc3RlbmVyfSBmcm9tICcuLi9QZXJzaXN0ZW5jZUxheWVyTGlzdGVuZXInO1xuaW1wb3J0IHtQZXJzaXN0ZW5jZUxheWVyLCBQZXJzaXN0ZW5jZUxheWVySUR9IGZyb20gJy4uL1BlcnNpc3RlbmNlTGF5ZXInO1xuaW1wb3J0IHtEb2NNZXRhfSBmcm9tICcuLi8uLi9tZXRhZGF0YS9Eb2NNZXRhJztcbmltcG9ydCB7RG9jTWV0YUZpbGVSZWYsIERvY01ldGFSZWZ9IGZyb20gJy4uL0RvY01ldGFSZWYnO1xuaW1wb3J0IHtCaW5hcnlGaWxlRGF0YSwgRGF0YXN0b3JlLCBEZWxldGVSZXN1bHQsIERvY01ldGFTbmFwc2hvdEV2ZW50TGlzdGVuZXIsIEVycm9yTGlzdGVuZXIsIFNuYXBzaG90UmVzdWx0fSBmcm9tICcuLi9EYXRhc3RvcmUnO1xuaW1wb3J0IHtXcml0ZUZpbGVPcHRzfSBmcm9tICcuLi9EYXRhc3RvcmUnO1xuaW1wb3J0IHtHZXRGaWxlT3B0c30gZnJvbSAnLi4vRGF0YXN0b3JlJztcbmltcG9ydCB7RGF0YXN0b3JlT3ZlcnZpZXd9IGZyb20gJy4uL0RhdGFzdG9yZSc7XG5pbXBvcnQge0RhdGFzdG9yZUNhcGFiaWxpdGllc30gZnJvbSAnLi4vRGF0YXN0b3JlJztcbmltcG9ydCB7RGF0YXN0b3JlSW5pdE9wdHN9IGZyb20gJy4uL0RhdGFzdG9yZSc7XG5pbXBvcnQge1BlcnNpc3RlbmNlRXZlbnRUeXBlfSBmcm9tICcuLi9QZXJzaXN0ZW5jZUV2ZW50VHlwZSc7XG5pbXBvcnQge0JhY2tlbmR9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvZGF0YXN0b3JlL0JhY2tlbmQnO1xuaW1wb3J0IHtEb2NGaWxlTWV0YX0gZnJvbSAnLi4vRG9jRmlsZU1ldGEnO1xuaW1wb3J0IHtPcHRpb25hbH0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL3RzL09wdGlvbmFsJztcbmltcG9ydCB7RG9jSW5mb30gZnJvbSAnLi4vLi4vbWV0YWRhdGEvRG9jSW5mbyc7XG5pbXBvcnQge0RhdGFzdG9yZU11dGF0aW9ufSBmcm9tICcuLi9EYXRhc3RvcmVNdXRhdGlvbic7XG5pbXBvcnQge05VTExfRlVOQ1RJT059IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC9GdW5jdGlvbnMnO1xuaW1wb3J0IHtSZWxlYXNlYWJsZX0gZnJvbSAnLi4vLi4vcmVhY3Rvci9FdmVudExpc3RlbmVyJztcbmltcG9ydCB7V3JpdGVPcHRzfSBmcm9tICcuLi9QZXJzaXN0ZW5jZUxheWVyJztcbmltcG9ydCB7SURvY0luZm99IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL21ldGFkYXRhL0lEb2NJbmZvXCI7XG5pbXBvcnQge0lEb2NNZXRhfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy9tZXRhZGF0YS9JRG9jTWV0YVwiO1xuaW1wb3J0IHtGaWxlUmVmfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy9kYXRhc3RvcmUvRmlsZVJlZlwiO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RBZHZlcnRpc2luZ1BlcnNpc3RlbmNlTGF5ZXIgaW1wbGVtZW50cyBMaXN0ZW5hYmxlUGVyc2lzdGVuY2VMYXllciB7XG5cbiAgICBwdWJsaWMgYWJzdHJhY3QgcmVhZG9ubHkgaWQ6IFBlcnNpc3RlbmNlTGF5ZXJJRDtcblxuICAgIHB1YmxpYyByZWFkb25seSBkYXRhc3RvcmU6IERhdGFzdG9yZTtcblxuICAgIHByb3RlY3RlZCByZWFkb25seSByZWFjdG9yID0gbmV3IFNpbXBsZVJlYWN0b3I8UGVyc2lzdGVuY2VMYXllckV2ZW50PigpO1xuXG4gICAgLyoqXG4gICAgICogQSBQZXJzaXN0ZW5jZUxheWVyIGZvciB0aGUgbm9uLWRpc3BhdGNoZWQgbWV0aG9kcyAoZm9yIG5vdykuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGRlbGVnYXRlOiBQZXJzaXN0ZW5jZUxheWVyO1xuXG4gICAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKGRlbGVnYXRlOiBQZXJzaXN0ZW5jZUxheWVyKSB7XG4gICAgICAgIHRoaXMuZGF0YXN0b3JlID0gZGVsZWdhdGUuZGF0YXN0b3JlO1xuICAgICAgICB0aGlzLmRlbGVnYXRlID0gZGVsZWdhdGU7XG4gICAgfVxuXG4gICAgcHVibGljIGluaXQoZXJyb3JMaXN0ZW5lcj86IEVycm9yTGlzdGVuZXIsIG9wdHM/OiBEYXRhc3RvcmVJbml0T3B0cyk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5kZWxlZ2F0ZS5pbml0KGVycm9yTGlzdGVuZXIsIG9wdHMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdG9wKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5kZWxlZ2F0ZS5zdG9wKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGFkZEV2ZW50TGlzdGVuZXIobGlzdGVuZXI6IFBlcnNpc3RlbmNlTGF5ZXJMaXN0ZW5lcik6IFJlbGVhc2VhYmxlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVhY3Rvci5hZGRFdmVudExpc3RlbmVyKGxpc3RlbmVyKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkRXZlbnRMaXN0ZW5lckZvckRvYyhmaW5nZXJwcmludDogc3RyaW5nLCBsaXN0ZW5lcjogUGVyc2lzdGVuY2VMYXllckxpc3RlbmVyKTogdm9pZCB7XG5cbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKChldmVudCkgPT4ge1xuXG4gICAgICAgICAgICBpZiAoZmluZ2VycHJpbnQgPT09IGV2ZW50LmRvY0luZm8uZmluZ2VycHJpbnQpIHtcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcihldmVudCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgd3JpdGVEb2NNZXRhKGRvY01ldGE6IElEb2NNZXRhLCBkYXRhc3RvcmVNdXRhdGlvbj86IERhdGFzdG9yZU11dGF0aW9uPElEb2NJbmZvPik6IFByb21pc2U8SURvY0luZm8+IHtcblxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5oYW5kbGVXcml0ZShkb2NNZXRhLCBhc3luYyAoKSA9PiBhd2FpdCB0aGlzLmRlbGVnYXRlLndyaXRlRG9jTWV0YShkb2NNZXRhLCBkYXRhc3RvcmVNdXRhdGlvbikpO1xuXG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIHdyaXRlKGZpbmdlcnByaW50OiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgIGRvY01ldGE6IElEb2NNZXRhLFxuICAgICAgICAgICAgICAgICAgICAgICBvcHRzPzogV3JpdGVPcHRzKTogUHJvbWlzZTxJRG9jSW5mbz4ge1xuXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmhhbmRsZVdyaXRlKGRvY01ldGEsIGFzeW5jICgpID0+IGF3YWl0IHRoaXMuZGVsZWdhdGUud3JpdGUoZmluZ2VycHJpbnQsIGRvY01ldGEsIG9wdHMpKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgaGFuZGxlV3JpdGUoZG9jTWV0YTogSURvY01ldGEsIGhhbmRsZXI6ICgpID0+IFByb21pc2U8SURvY0luZm8+KSB7XG5cbiAgICAgICAgY29uc3QgZG9jSW5mbyA9IGF3YWl0IGhhbmRsZXIoKTtcblxuICAgICAgICBjb25zdCBldmVudFR5cGU6IFBlcnNpc3RlbmNlRXZlbnRUeXBlXG4gICAgICAgICAgICA9IHRoaXMuY29udGFpbnMoZG9jTWV0YS5kb2NJbmZvLmZpbmdlcnByaW50KSA/ICd1cGRhdGVkJyA6ICdjcmVhdGVkJztcblxuICAgICAgICB0aGlzLmJyb2FkY2FzdEV2ZW50KHtcbiAgICAgICAgICAgIGRvY0luZm8sXG4gICAgICAgICAgICBkb2NNZXRhUmVmOiB7XG4gICAgICAgICAgICAgICAgZmluZ2VycHJpbnQ6IGRvY01ldGEuZG9jSW5mby5maW5nZXJwcmludFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV2ZW50VHlwZVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZG9jSW5mbztcblxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBzeW5jaHJvbml6ZURvY3MoLi4uZG9jTWV0YVJlZnM6IERvY01ldGFSZWZbXSk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm4gdGhpcy5kZWxlZ2F0ZS5zeW5jaHJvbml6ZURvY3MoLi4uZG9jTWV0YVJlZnMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBjb250YWlucyhmaW5nZXJwcmludDogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlbGVnYXRlLmNvbnRhaW5zKGZpbmdlcnByaW50KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0RG9jTWV0YVJlZnMoKTogUHJvbWlzZTxEb2NNZXRhUmVmW10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVsZWdhdGUuZ2V0RG9jTWV0YVJlZnMoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc25hcHNob3QobGlzdGVuZXI6IERvY01ldGFTbmFwc2hvdEV2ZW50TGlzdGVuZXIsXG4gICAgICAgICAgICAgICAgICAgIGVycm9yTGlzdGVuZXI6IEVycm9yTGlzdGVuZXIgPSBOVUxMX0ZVTkNUSU9OKTogUHJvbWlzZTxTbmFwc2hvdFJlc3VsdD4ge1xuXG4gICAgICAgIHJldHVybiB0aGlzLmRlbGVnYXRlLnNuYXBzaG90KGxpc3RlbmVyLCBlcnJvckxpc3RlbmVyKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBjcmVhdGVCYWNrdXAoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlbGVnYXRlLmNyZWF0ZUJhY2t1cCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBkZWxldGUoZG9jTWV0YUZpbGVSZWY6IERvY01ldGFGaWxlUmVmKTogUHJvbWlzZTxEZWxldGVSZXN1bHQ+IHtcblxuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLmRlbGVnYXRlLmRlbGV0ZShkb2NNZXRhRmlsZVJlZik7XG5cbiAgICAgICAgdGhpcy5icm9hZGNhc3RFdmVudCh7XG4gICAgICAgICAgICBkb2NJbmZvOiBkb2NNZXRhRmlsZVJlZi5kb2NJbmZvLFxuICAgICAgICAgICAgZG9jTWV0YVJlZjoge1xuICAgICAgICAgICAgICAgIGZpbmdlcnByaW50OiBkb2NNZXRhRmlsZVJlZi5maW5nZXJwcmludFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV2ZW50VHlwZTogJ2RlbGV0ZWQnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGdldERvY01ldGEoZmluZ2VycHJpbnQ6IHN0cmluZyk6IFByb21pc2U8SURvY01ldGF8IHVuZGVmaW5lZD4ge1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5kZWxlZ2F0ZS5nZXREb2NNZXRhKGZpbmdlcnByaW50KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEaXNwYXRjaCBhbiBldmVudCB0byBhbGwgbGlzdGVuZXJzLiBUaGlzIGlzIGRpZmZlcmVudCBmcm9tIG5vdGlmeSBpbiB0aGF0XG4gICAgICogdGhpcyBqdXN0IGRpc3BhdGNoZXMgdG8gdGhlIGxvY2FsIHJlYWN0b3IuXG4gICAgICovXG4gICAgcHVibGljIGRpc3BhdGNoRXZlbnQoZXZlbnQ6IFBlcnNpc3RlbmNlTGF5ZXJFdmVudCkge1xuICAgICAgICB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgfVxuXG4gICAgcHVibGljIHdyaXRlRmlsZShiYWNrZW5kOiBCYWNrZW5kLCByZWY6IEZpbGVSZWYsIGRhdGE6IEJpbmFyeUZpbGVEYXRhLCBvcHRzPzogV3JpdGVGaWxlT3B0cyk6IFByb21pc2U8RG9jRmlsZU1ldGE+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVsZWdhdGUud3JpdGVGaWxlKGJhY2tlbmQsIHJlZiwgZGF0YSwgb3B0cyk7XG4gICAgfVxuXG4gICAgcHVibGljIGNvbnRhaW5zRmlsZShiYWNrZW5kOiBCYWNrZW5kLCByZWY6IEZpbGVSZWYpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVsZWdhdGUuY29udGFpbnNGaWxlKGJhY2tlbmQsIHJlZik7XG4gICAgfVxuXG4gICAgcHVibGljIGRlbGV0ZUZpbGUoYmFja2VuZDogQmFja2VuZCwgcmVmOiBGaWxlUmVmKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFzdG9yZS5kZWxldGVGaWxlKGJhY2tlbmQsIHJlZik7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEZpbGUoYmFja2VuZDogQmFja2VuZCwgcmVmOiBGaWxlUmVmLCBvcHRzPzogR2V0RmlsZU9wdHMpOiBEb2NGaWxlTWV0YSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlbGVnYXRlLmdldEZpbGUoYmFja2VuZCwgcmVmLCBvcHRzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkRG9jTWV0YVNuYXBzaG90RXZlbnRMaXN0ZW5lcihkb2NNZXRhU25hcHNob3RFdmVudExpc3RlbmVyOiBEb2NNZXRhU25hcHNob3RFdmVudExpc3RlbmVyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGVsZWdhdGUuYWRkRG9jTWV0YVNuYXBzaG90RXZlbnRMaXN0ZW5lcihkb2NNZXRhU25hcHNob3RFdmVudExpc3RlbmVyKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgYnJvYWRjYXN0RXZlbnQoZXZlbnQ6IFBlcnNpc3RlbmNlTGF5ZXJFdmVudCk6IHZvaWQ7XG5cbiAgICBwdWJsaWMgYXN5bmMgb3ZlcnZpZXcoKTogUHJvbWlzZTxEYXRhc3RvcmVPdmVydmlldyB8IHVuZGVmaW5lZD4ge1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5kZWxlZ2F0ZS5vdmVydmlldygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjYXBhYmlsaXRpZXMoKTogRGF0YXN0b3JlQ2FwYWJpbGl0aWVzIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVsZWdhdGUuY2FwYWJpbGl0aWVzKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGRlYWN0aXZhdGUoKSB7XG4gICAgICAgIGF3YWl0IHRoaXMuZGVsZWdhdGUuZGVhY3RpdmF0ZSgpO1xuICAgIH1cblxufVxuXG4iXX0=