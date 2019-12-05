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
const Datastore_2 = require("./Datastore");
const Logger_1 = require("polar-shared/src/logger/Logger");
const FirebaseDatastore_1 = require("./FirebaseDatastore");
const DocMetas_1 = require("../metadata/DocMetas");
const BackendFileRefs_1 = require("./BackendFileRefs");
const log = Logger_1.Logger.create();
class SharingDatastore extends Datastore_1.AbstractDatastore {
    constructor(docMetaID, fingerprint) {
        super();
        this.docMetaID = docMetaID;
        this.fingerprint = fingerprint;
        this.delegate = new FirebaseDatastore_1.FirebaseDatastore();
        this.docMetaData = null;
        this.docMetaRefs = [];
        this.backendFileRefs = [];
        this.id = 'shared';
    }
    init(errorListener, opts) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                opts = Object.assign(Object.assign({}, opts), { noInitialSnapshot: true });
                yield this.delegate.init(errorListener, opts);
                this.docMetaData = yield this.delegate.getDocMetaDirectly(this.docMetaID);
                if (this.docMetaData) {
                    this.docMeta = DocMetas_1.DocMetas.deserialize(this.docMetaData, this.fingerprint);
                    this.docMetaRefs = [
                        {
                            fingerprint: this.fingerprint,
                            docMeta: this.docMeta
                        }
                    ];
                    this.backendFileRefs = BackendFileRefs_1.BackendFileRefs.toBackendFileRefs(this.docMeta);
                }
                return {};
            }
            catch (e) {
                log.error("Unable to init datastore: ", e);
                throw e;
            }
        });
    }
    addDocMetaSnapshotEventListener(docMetaSnapshotEventListener) {
    }
    capabilities() {
        return {
            networkLayers: Datastore_2.NetworkLayers.WEB,
            permission: { mode: 'ro' }
        };
    }
    contains(fingerprint) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.fingerprint === fingerprint;
        });
    }
    deactivate() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    getDocMeta(fingerprint) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.docMetaData;
        });
    }
    getDocMetaRefs() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.docMetaRefs;
        });
    }
    getPrefs() {
        throw this.delegate.getPrefs();
    }
    overview() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.delegate.overview();
        });
    }
    snapshot(docMetaSnapshotEventListener, errorListener) {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error("Not supported");
        });
    }
    stop() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    write(fingerprint, data, docInfo, opts = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error("Not supported");
        });
    }
    containsFile(backend, ref) {
        return __awaiter(this, void 0, void 0, function* () {
            const backendFileRef = Object.assign({ backend }, ref);
            return this.backendFileRefs.filter(current => BackendFileRefs_1.BackendFileRefs.equals(current, backendFileRef)).length > 0;
        });
    }
    delete(docMetaFileRef, datastoreMutation) {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error("Not supported");
        });
    }
    deleteFile(backend, ref) {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error("Not supported");
        });
    }
    getFile(backend, ref, opts) {
        throw new Error("Not implemented yet");
    }
    writeFile(backend, ref, data, opts) {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error("Not supported");
        });
    }
}
exports.SharingDatastore = SharingDatastore;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2hhcmluZ0RhdGFzdG9yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlNoYXJpbmdEYXRhc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBc0U7QUFJdEUsMkNBQTBDO0FBWTFDLDJEQUFzRDtBQU90RCwyREFBc0Q7QUFFdEQsbURBQThDO0FBRTlDLHVEQUFrRDtBQUtsRCxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFNUIsTUFBYSxnQkFBaUIsU0FBUSw2QkFBaUI7SUFXbkQsWUFBb0MsU0FBNEIsRUFDNUIsV0FBbUI7UUFDbkQsS0FBSyxFQUFFLENBQUM7UUFGd0IsY0FBUyxHQUFULFNBQVMsQ0FBbUI7UUFDNUIsZ0JBQVcsR0FBWCxXQUFXLENBQVE7UUFSdEMsYUFBUSxHQUFHLElBQUkscUNBQWlCLEVBQUUsQ0FBQztRQUU1QyxnQkFBVyxHQUFrQixJQUFJLENBQUM7UUFFbEMsZ0JBQVcsR0FBaUIsRUFBRSxDQUFDO1FBQy9CLG9CQUFlLEdBQWtDLEVBQUUsQ0FBQztRQUt4RCxJQUFJLENBQUMsRUFBRSxHQUFHLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBRVksSUFBSSxDQUFDLGFBQTZCLEVBQUUsSUFBd0I7O1lBRXJFLElBQUk7Z0JBRUEsSUFBSSxtQ0FBTyxJQUFJLEtBQUUsaUJBQWlCLEVBQUUsSUFBSSxHQUFDLENBQUM7Z0JBRTFDLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUU5QyxJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBRTFFLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtvQkFJbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxtQkFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FB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dGFzdG9yZSwgRGF0YXN0b3JlLCBEYXRhc3RvcmVJRH0gZnJvbSAnLi9EYXRhc3RvcmUnO1xuaW1wb3J0IHtXcml0YWJsZUJpbmFyeU1ldGFEYXRhc3RvcmV9IGZyb20gJy4vRGF0YXN0b3JlJztcbmltcG9ydCB7RG9jTWV0YVNuYXBzaG90RXZlbnRMaXN0ZW5lcn0gZnJvbSAnLi9EYXRhc3RvcmUnO1xuaW1wb3J0IHtEYXRhc3RvcmVDYXBhYmlsaXRpZXN9IGZyb20gJy4vRGF0YXN0b3JlJztcbmltcG9ydCB7TmV0d29ya0xheWVyc30gZnJvbSAnLi9EYXRhc3RvcmUnO1xuaW1wb3J0IHtQcmVmc1Byb3ZpZGVyfSBmcm9tICcuL0RhdGFzdG9yZSc7XG5pbXBvcnQge0Vycm9yTGlzdGVuZXJ9IGZyb20gJy4vRGF0YXN0b3JlJztcbmltcG9ydCB7RGF0YXN0b3JlSW5pdE9wdHN9IGZyb20gJy4vRGF0YXN0b3JlJztcbmltcG9ydCB7RGF0YXN0b3JlT3ZlcnZpZXd9IGZyb20gJy4vRGF0YXN0b3JlJztcbmltcG9ydCB7U25hcHNob3RSZXN1bHR9IGZyb20gJy4vRGF0YXN0b3JlJztcbmltcG9ydCB7SW5pdFJlc3VsdH0gZnJvbSAnLi9EYXRhc3RvcmUnO1xuaW1wb3J0IHtEZWxldGVSZXN1bHR9IGZyb20gJy4vRGF0YXN0b3JlJztcbmltcG9ydCB7R2V0RmlsZU9wdHN9IGZyb20gJy4vRGF0YXN0b3JlJztcbmltcG9ydCB7QmluYXJ5RmlsZURhdGF9IGZyb20gJy4vRGF0YXN0b3JlJztcbmltcG9ydCB7V3JpdGVGaWxlT3B0c30gZnJvbSAnLi9EYXRhc3RvcmUnO1xuaW1wb3J0IHtXcml0ZU9wdHN9IGZyb20gJy4vRGF0YXN0b3JlJztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL2xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IHtEb2NNZXRhUmVmfSBmcm9tICcuL0RvY01ldGFSZWYnO1xuaW1wb3J0IHtEb2NNZXRhRmlsZVJlZn0gZnJvbSAnLi9Eb2NNZXRhUmVmJztcbmltcG9ydCB7SURvY0luZm99IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbWV0YWRhdGEvSURvY0luZm8nO1xuaW1wb3J0IHtEYXRhc3RvcmVNdXRhdGlvbn0gZnJvbSAnLi9EYXRhc3RvcmVNdXRhdGlvbic7XG5pbXBvcnQge0JhY2tlbmR9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvZGF0YXN0b3JlL0JhY2tlbmQnO1xuaW1wb3J0IHtEb2NGaWxlTWV0YX0gZnJvbSAnLi9Eb2NGaWxlTWV0YSc7XG5pbXBvcnQge0ZpcmViYXNlRGF0YXN0b3JlfSBmcm9tICcuL0ZpcmViYXNlRGF0YXN0b3JlJztcbmltcG9ydCB7RmlyZWJhc2VEb2NNZXRhSUR9IGZyb20gJy4vRmlyZWJhc2VEYXRhc3RvcmUnO1xuaW1wb3J0IHtEb2NNZXRhc30gZnJvbSAnLi4vbWV0YWRhdGEvRG9jTWV0YXMnO1xuaW1wb3J0IHtEb2NNZXRhfSBmcm9tICcuLi9tZXRhZGF0YS9Eb2NNZXRhJztcbmltcG9ydCB7QmFja2VuZEZpbGVSZWZzfSBmcm9tICcuL0JhY2tlbmRGaWxlUmVmcyc7XG5pbXBvcnQge0lEb2NNZXRhfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy9tZXRhZGF0YS9JRG9jTWV0YVwiO1xuaW1wb3J0IHtCYWNrZW5kRmlsZVJlZn0gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvZGF0YXN0b3JlL0JhY2tlbmRGaWxlUmVmXCI7XG5pbXBvcnQge0ZpbGVSZWZ9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL2RhdGFzdG9yZS9GaWxlUmVmXCI7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuZXhwb3J0IGNsYXNzIFNoYXJpbmdEYXRhc3RvcmUgZXh0ZW5kcyBBYnN0cmFjdERhdGFzdG9yZSBpbXBsZW1lbnRzIERhdGFzdG9yZSwgV3JpdGFibGVCaW5hcnlNZXRhRGF0YXN0b3JlIHtcblxuICAgIHB1YmxpYyByZWFkb25seSBpZDogRGF0YXN0b3JlSUQ7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IGRlbGVnYXRlID0gbmV3IEZpcmViYXNlRGF0YXN0b3JlKCk7XG5cbiAgICBwcml2YXRlIGRvY01ldGFEYXRhOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcbiAgICBwcml2YXRlIGRvY01ldGE6IElEb2NNZXRhIHwgdW5kZWZpbmVkO1xuICAgIHByaXZhdGUgZG9jTWV0YVJlZnM6IERvY01ldGFSZWZbXSA9IFtdO1xuICAgIHByaXZhdGUgYmFja2VuZEZpbGVSZWZzOiBSZWFkb25seUFycmF5PEJhY2tlbmRGaWxlUmVmPiA9IFtdO1xuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZG9jTWV0YUlEOiBGaXJlYmFzZURvY01ldGFJRCxcbiAgICAgICAgICAgICAgICAgICAgICAgcHJpdmF0ZSByZWFkb25seSBmaW5nZXJwcmludDogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuaWQgPSAnc2hhcmVkJztcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgaW5pdChlcnJvckxpc3RlbmVyPzogRXJyb3JMaXN0ZW5lciwgb3B0cz86IERhdGFzdG9yZUluaXRPcHRzKTogUHJvbWlzZTxJbml0UmVzdWx0PiB7XG5cbiAgICAgICAgdHJ5IHtcblxuICAgICAgICAgICAgb3B0cyA9IHsuLi5vcHRzLCBub0luaXRpYWxTbmFwc2hvdDogdHJ1ZX07XG5cbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZGVsZWdhdGUuaW5pdChlcnJvckxpc3RlbmVyLCBvcHRzKTtcblxuICAgICAgICAgICAgdGhpcy5kb2NNZXRhRGF0YSA9IGF3YWl0IHRoaXMuZGVsZWdhdGUuZ2V0RG9jTWV0YURpcmVjdGx5KHRoaXMuZG9jTWV0YUlEKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuZG9jTWV0YURhdGEpIHtcblxuICAgICAgICAgICAgICAgIC8vIFRPRE86IHRoaXMgcmVzdWx0cyBpbiBhIGR1YWwgZGVzZXJpYWxpemUgd2hpY2ggd2FzdGVzIGEgYml0XG4gICAgICAgICAgICAgICAgLy8gb2YgdGltZSBidXQgdGhpcyBpc24ndCB0aGUgZW5kIG9mIHRoZSB3b3JsZCByZWFsbHkuXG4gICAgICAgICAgICAgICAgdGhpcy5kb2NNZXRhID0gRG9jTWV0YXMuZGVzZXJpYWxpemUodGhpcy5kb2NNZXRhRGF0YSEsIHRoaXMuZmluZ2VycHJpbnQpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5kb2NNZXRhUmVmcyA9IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmluZ2VycHJpbnQ6IHRoaXMuZmluZ2VycHJpbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2NNZXRhOiB0aGlzLmRvY01ldGFcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF07XG5cbiAgICAgICAgICAgICAgICB0aGlzLmJhY2tlbmRGaWxlUmVmcyA9IEJhY2tlbmRGaWxlUmVmcy50b0JhY2tlbmRGaWxlUmVmcyh0aGlzLmRvY01ldGEpO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB7fTtcblxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBsb2cuZXJyb3IoXCJVbmFibGUgdG8gaW5pdCBkYXRhc3RvcmU6IFwiLCBlKTtcbiAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHB1YmxpYyBhZGREb2NNZXRhU25hcHNob3RFdmVudExpc3RlbmVyKGRvY01ldGFTbmFwc2hvdEV2ZW50TGlzdGVuZXI6IERvY01ldGFTbmFwc2hvdEV2ZW50TGlzdGVuZXIpOiB2b2lkIHtcbiAgICAgICAgLy8gIG5vb3BcbiAgICB9XG5cbiAgICBwdWJsaWMgY2FwYWJpbGl0aWVzKCk6IERhdGFzdG9yZUNhcGFiaWxpdGllcyB7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5ldHdvcmtMYXllcnM6IE5ldHdvcmtMYXllcnMuV0VCLFxuICAgICAgICAgICAgcGVybWlzc2lvbjoge21vZGU6ICdybyd9XG4gICAgICAgIH07XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgY29udGFpbnMoZmluZ2VycHJpbnQ6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5maW5nZXJwcmludCA9PT0gZmluZ2VycHJpbnQ7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGRlYWN0aXZhdGUoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIC8vIG5vb3BcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgZ2V0RG9jTWV0YShmaW5nZXJwcmludDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRvY01ldGFEYXRhO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBnZXREb2NNZXRhUmVmcygpOiBQcm9taXNlPERvY01ldGFSZWZbXT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5kb2NNZXRhUmVmcztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0UHJlZnMoKTogUHJlZnNQcm92aWRlciB7XG4gICAgICAgIHRocm93IHRoaXMuZGVsZWdhdGUuZ2V0UHJlZnMoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgb3ZlcnZpZXcoKTogUHJvbWlzZTxEYXRhc3RvcmVPdmVydmlldyB8IHVuZGVmaW5lZD4ge1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5kZWxlZ2F0ZS5vdmVydmlldygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBzbmFwc2hvdChkb2NNZXRhU25hcHNob3RFdmVudExpc3RlbmVyOiBEb2NNZXRhU25hcHNob3RFdmVudExpc3RlbmVyLCBlcnJvckxpc3RlbmVyPzogRXJyb3JMaXN0ZW5lcik6IFByb21pc2U8U25hcHNob3RSZXN1bHQ+IHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm90IHN1cHBvcnRlZFwiKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgc3RvcCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgLy8gbm9vcFxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyB3cml0ZShmaW5nZXJwcmludDogc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBhbnksXG4gICAgICAgICAgICAgICAgICAgICAgIGRvY0luZm86IElEb2NJbmZvLFxuICAgICAgICAgICAgICAgICAgICAgICBvcHRzOiBXcml0ZU9wdHMgPSB7fSk6IFByb21pc2U8dm9pZD4ge1xuXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vdCBzdXBwb3J0ZWRcIik7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgY29udGFpbnNGaWxlKGJhY2tlbmQ6IEJhY2tlbmQsIHJlZjogRmlsZVJlZik6IFByb21pc2U8Ym9vbGVhbj4ge1xuXG4gICAgICAgIGNvbnN0IGJhY2tlbmRGaWxlUmVmOiBCYWNrZW5kRmlsZVJlZiA9IHtiYWNrZW5kLCAuLi5yZWZ9O1xuXG4gICAgICAgIHJldHVybiB0aGlzLmJhY2tlbmRGaWxlUmVmcy5maWx0ZXIoY3VycmVudCA9PiBCYWNrZW5kRmlsZVJlZnMuZXF1YWxzKGN1cnJlbnQsIGJhY2tlbmRGaWxlUmVmKSkubGVuZ3RoID4gMDtcblxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBkZWxldGUoZG9jTWV0YUZpbGVSZWY6IERvY01ldGFGaWxlUmVmLCBkYXRhc3RvcmVNdXRhdGlvbj86IERhdGFzdG9yZU11dGF0aW9uPGJvb2xlYW4+KTogUHJvbWlzZTxSZWFkb25seTxEZWxldGVSZXN1bHQ+PiB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vdCBzdXBwb3J0ZWRcIik7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGRlbGV0ZUZpbGUoYmFja2VuZDogQmFja2VuZCwgcmVmOiBGaWxlUmVmKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vdCBzdXBwb3J0ZWRcIik7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEZpbGUoYmFja2VuZDogQmFja2VuZCwgcmVmOiBGaWxlUmVmLCBvcHRzPzogR2V0RmlsZU9wdHMpOiBEb2NGaWxlTWV0YSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vdCBpbXBsZW1lbnRlZCB5ZXRcIik7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIHdyaXRlRmlsZShiYWNrZW5kOiBCYWNrZW5kLCByZWY6IEZpbGVSZWYsIGRhdGE6IEJpbmFyeUZpbGVEYXRhLCBvcHRzPzogV3JpdGVGaWxlT3B0cyk6IFByb21pc2U8RG9jRmlsZU1ldGE+IHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm90IHN1cHBvcnRlZFwiKTtcbiAgICB9XG5cbn1cblxuXG4iXX0=