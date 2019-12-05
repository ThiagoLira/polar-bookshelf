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
const DiskDatastore_1 = require("./DiskDatastore");
const RemoteDatastore_1 = require("./RemoteDatastore");
const Blobs_1 = require("polar-shared/src/util/Blobs");
class HybridRemoteDatastore extends RemoteDatastore_1.RemoteDatastore {
    constructor(delegate) {
        super(delegate);
        this.id = 'hybrid-remote:' + delegate.id;
        this.diskDatastore = new DiskDatastore_1.DiskDatastore();
    }
    init(errorListener) {
        const _super = Object.create(null, {
            init: { get: () => super.init }
        });
        return __awaiter(this, void 0, void 0, function* () {
            yield _super.init.call(this);
            yield this.diskDatastore.init(errorListener);
            return {};
        });
    }
    writeFile(backend, ref, data, opts) {
        if (!Datastore_1.isBinaryFileData(data)) {
            throw new Error("Data is not BinaryFileData");
        }
        const toDiskData = () => {
            if (data instanceof Blob) {
                return Blobs_1.Blobs.toStream(data);
            }
            else {
                return data;
            }
        };
        const diskData = toDiskData();
        return this.diskDatastore.writeFile(backend, ref, diskData, opts);
    }
    getDocMetaRefs() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.diskDatastore.getDocMetaRefs();
        });
    }
    getDocMeta(fingerprint) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.diskDatastore.getDocMeta(fingerprint);
        });
    }
}
exports.HybridRemoteDatastore = HybridRemoteDatastore;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSHlicmlkUmVtb3RlRGF0YXN0b3JlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiSHlicmlkUmVtb3RlRGF0YXN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBR0EsMkNBQTZDO0FBRTdDLG1EQUE4QztBQUM5Qyx1REFBa0Q7QUFHbEQsdURBQWtEO0FBUWxELE1BQWEscUJBQXNCLFNBQVEsaUNBQWU7SUFNdEQsWUFBWSxRQUFtQjtRQUMzQixLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDaEIsSUFBSSxDQUFDLEVBQUUsR0FBRyxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsRUFBRSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSw2QkFBYSxFQUFFLENBQUM7SUFDN0MsQ0FBQztJQUVZLElBQUksQ0FBQyxhQUE2Qjs7Ozs7WUFDM0MsTUFBTSxPQUFNLElBQUksV0FBRSxDQUFDO1lBQ25CLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDN0MsT0FBTyxFQUFFLENBQUM7UUFDZCxDQUFDO0tBQUE7SUFFTSxTQUFTLENBQUMsT0FBZ0IsRUFBRSxHQUFZLEVBQUUsSUFBb0IsRUFBRSxJQUFvQjtRQUV2RixJQUFLLENBQUMsNEJBQWdCLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDMUIsTUFBTSxJQUFJLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1NBQ2pEO1FBRUQsTUFBTSxVQUFVLEdBQUcsR0FBMkMsRUFBRTtZQUU1RCxJQUFJLElBQUksWUFBWSxJQUFJLEVBQUU7Z0JBQ3RCLE9BQU8sYUFBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUMvQjtpQkFBTTtnQkFDSCxPQUFPLElBQUksQ0FBQzthQUNmO1FBRUwsQ0FBQyxDQUFDO1FBRUYsTUFBTSxRQUFRLEdBQUcsVUFBVSxFQUFFLENBQUM7UUFFOUIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUV0RSxDQUFDO0lBRVksY0FBYzs7WUFDdkIsT0FBTyxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDckQsQ0FBQztLQUFBO0lBRVksVUFBVSxDQUFDLFdBQW1COztZQUN2QyxPQUFPLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDNUQsQ0FBQztLQUFBO0NBRUo7QUFoREQsc0RBZ0RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEYXRhc3RvcmUsIERhdGFzdG9yZUlELCBFcnJvckxpc3RlbmVyLCBJbml0UmVzdWx0fSBmcm9tICcuL0RhdGFzdG9yZSc7XG5pbXBvcnQge0JpbmFyeUZpbGVEYXRhfSBmcm9tICcuL0RhdGFzdG9yZSc7XG5pbXBvcnQge1dyaXRlRmlsZU9wdHN9IGZyb20gJy4vRGF0YXN0b3JlJztcbmltcG9ydCB7aXNCaW5hcnlGaWxlRGF0YX0gZnJvbSAnLi9EYXRhc3RvcmUnO1xuaW1wb3J0IHtEb2NNZXRhUmVmfSBmcm9tICcuL0RvY01ldGFSZWYnO1xuaW1wb3J0IHtEaXNrRGF0YXN0b3JlfSBmcm9tICcuL0Rpc2tEYXRhc3RvcmUnO1xuaW1wb3J0IHtSZW1vdGVEYXRhc3RvcmV9IGZyb20gJy4vUmVtb3RlRGF0YXN0b3JlJztcbmltcG9ydCB7QmFja2VuZH0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9kYXRhc3RvcmUvQmFja2VuZCc7XG5pbXBvcnQge0RvY0ZpbGVNZXRhfSBmcm9tICcuL0RvY0ZpbGVNZXRhJztcbmltcG9ydCB7QmxvYnN9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC9CbG9icyc7XG5pbXBvcnQge0ZpbGVSZWZ9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL2RhdGFzdG9yZS9GaWxlUmVmXCI7XG5cbi8qKlxuICogQSBkYXRhc3RvcmUgd2hpY2ggZXh0ZW5kcyBSZW1vdGVEYXRhc3RvcmUgYnV0IGFkZHMgc3VwcG9ydCBmb3IgbG9jYWwgZGlza1xuICogb3BlcmF0aW9ucyBmb3IgcmVhZHMgd2hpY2ggYXJlIE1VQ0ggTVVDSCBmYXN0ZXIgc2luY2Ugd2UncmUgbm90IGdvaW5nIHRocm91Z2hcbiAqIElQQy4gIElQQyBpcyBpbnNhbmVseSBzbG93LlxuICovXG5leHBvcnQgY2xhc3MgSHlicmlkUmVtb3RlRGF0YXN0b3JlIGV4dGVuZHMgUmVtb3RlRGF0YXN0b3JlIHtcblxuICAgIHB1YmxpYyByZWFkb25seSBpZDogRGF0YXN0b3JlSUQ7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IGRpc2tEYXRhc3RvcmU6IERpc2tEYXRhc3RvcmU7XG5cbiAgICBjb25zdHJ1Y3RvcihkZWxlZ2F0ZTogRGF0YXN0b3JlKSB7XG4gICAgICAgIHN1cGVyKGRlbGVnYXRlKTtcbiAgICAgICAgdGhpcy5pZCA9ICdoeWJyaWQtcmVtb3RlOicgKyBkZWxlZ2F0ZS5pZDtcbiAgICAgICAgdGhpcy5kaXNrRGF0YXN0b3JlID0gbmV3IERpc2tEYXRhc3RvcmUoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgaW5pdChlcnJvckxpc3RlbmVyPzogRXJyb3JMaXN0ZW5lcik6IFByb21pc2U8SW5pdFJlc3VsdD4ge1xuICAgICAgICBhd2FpdCBzdXBlci5pbml0KCk7XG4gICAgICAgIGF3YWl0IHRoaXMuZGlza0RhdGFzdG9yZS5pbml0KGVycm9yTGlzdGVuZXIpO1xuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgcHVibGljIHdyaXRlRmlsZShiYWNrZW5kOiBCYWNrZW5kLCByZWY6IEZpbGVSZWYsIGRhdGE6IEJpbmFyeUZpbGVEYXRhLCBvcHRzPzogV3JpdGVGaWxlT3B0cyk6IFByb21pc2U8RG9jRmlsZU1ldGE+IHtcblxuICAgICAgICBpZiAoICFpc0JpbmFyeUZpbGVEYXRhKGRhdGEpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEYXRhIGlzIG5vdCBCaW5hcnlGaWxlRGF0YVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRvRGlza0RhdGEgPSAoKTogQmluYXJ5RmlsZURhdGEgfCBOb2RlSlMuUmVhZGFibGVTdHJlYW0gPT4ge1xuXG4gICAgICAgICAgICBpZiAoZGF0YSBpbnN0YW5jZW9mIEJsb2IpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gQmxvYnMudG9TdHJlYW0oZGF0YSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgZGlza0RhdGEgPSB0b0Rpc2tEYXRhKCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZGlza0RhdGFzdG9yZS53cml0ZUZpbGUoYmFja2VuZCwgcmVmLCBkaXNrRGF0YSwgb3B0cyk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgZ2V0RG9jTWV0YVJlZnMoKTogUHJvbWlzZTxEb2NNZXRhUmVmW10+IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuZGlza0RhdGFzdG9yZS5nZXREb2NNZXRhUmVmcygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBnZXREb2NNZXRhKGZpbmdlcnByaW50OiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZyB8IG51bGw+IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuZGlza0RhdGFzdG9yZS5nZXREb2NNZXRhKGZpbmdlcnByaW50KTtcbiAgICB9XG5cbn1cblxuIl19