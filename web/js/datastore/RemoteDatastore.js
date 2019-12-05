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
const Datastores_1 = require("./Datastores");
const DelegatedDatastore_1 = require("./DelegatedDatastore");
const SimpleReactor_1 = require("../reactor/SimpleReactor");
const Logger_1 = require("polar-shared/src/logger/Logger");
const DatastoreMutation_1 = require("./DatastoreMutation");
const DatastoreMutations_1 = require("./DatastoreMutations");
const log = Logger_1.Logger.create();
class RemoteDatastore extends DelegatedDatastore_1.DelegatedDatastore {
    constructor(datastore) {
        super(datastore);
        this.docMetaSnapshotEventDispatcher = new SimpleReactor_1.SimpleReactor();
        this.id = 'remote:' + datastore.id;
    }
    snapshot(listener) {
        return __awaiter(this, void 0, void 0, function* () {
            return Datastores_1.Datastores.createCommittedSnapshot(this, listener);
        });
    }
    init(errorListener) {
        const _super = Object.create(null, {
            init: { get: () => super.init }
        });
        return __awaiter(this, void 0, void 0, function* () {
            yield _super.init.call(this);
            if (this.docMetaSnapshotEventDispatcher.size() > 0) {
                this.snapshot((event) => __awaiter(this, void 0, void 0, function* () { return this.docMetaSnapshotEventDispatcher.dispatchEvent(event); }))
                    .catch(err => log.error(err));
            }
            return {};
        });
    }
    write(fingerprint, data, docInfo, opts = {}) {
        const datastoreMutation = opts.datastoreMutation || new DatastoreMutation_1.DefaultDatastoreMutation();
        opts = Object.assign(Object.assign({}, opts), { datastoreMutation: undefined });
        const writeDelegate = () => __awaiter(this, void 0, void 0, function* () {
            return this.delegate.write(fingerprint, data, docInfo, opts);
        });
        return DatastoreMutations_1.DatastoreMutations.handle(() => writeDelegate(), datastoreMutation, () => true);
    }
    delete(docMetaFileRef, datastoreMutation = new DatastoreMutation_1.DefaultDatastoreMutation()) {
        return __awaiter(this, void 0, void 0, function* () {
            const syncMutation = new DatastoreMutation_1.DefaultDatastoreMutation();
            const result = yield DatastoreMutations_1.DatastoreMutations.handle(() => this.delegate.delete(docMetaFileRef, syncMutation), datastoreMutation, () => true);
            return result;
        });
    }
    addDocMetaSnapshotEventListener(docMetaSnapshotEventListener) {
        this.docMetaSnapshotEventDispatcher.addEventListener(docMetaSnapshotEventListener);
    }
}
exports.RemoteDatastore = RemoteDatastore;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVtb3RlRGF0YXN0b3JlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUmVtb3RlRGF0YXN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBR0EsNkNBQXdDO0FBQ3hDLDZEQUF3RDtBQUN4RCw0REFBeUU7QUFDekUsMkRBQXNEO0FBR3RELDJEQUE2RDtBQUU3RCw2REFBd0Q7QUFFeEQsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBTTVCLE1BQWEsZUFBZ0IsU0FBUSx1Q0FBa0I7SUFNbkQsWUFBWSxTQUFvQjtRQUM1QixLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7UUFMSixtQ0FBOEIsR0FBMkMsSUFBSSw2QkFBYSxFQUFFLENBQUM7UUFNMUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxTQUFTLEdBQUcsU0FBUyxDQUFDLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0lBRVksUUFBUSxDQUFDLFFBQXNDOztZQUN4RCxPQUFPLHVCQUFVLENBQUMsdUJBQXVCLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQzlELENBQUM7S0FBQTtJQUtZLElBQUksQ0FBQyxhQUE2Qjs7Ozs7WUFFM0MsTUFBTSxPQUFNLElBQUksV0FBRSxDQUFDO1lBRW5CLElBQUksSUFBSSxDQUFDLDhCQUE4QixDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsRUFBRTtnQkFHaEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFNLEtBQUssRUFBQyxFQUFFLGdEQUFDLE9BQUEsSUFBSSxDQUFDLDhCQUE4QixDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQSxHQUFBLENBQUM7cUJBQ2pGLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUVyQztZQUVELE9BQU8sRUFBRSxDQUFDO1FBQ2QsQ0FBQztLQUFBO0lBS00sS0FBSyxDQUFDLFdBQW1CLEVBQ25CLElBQVksRUFDWixPQUFpQixFQUNqQixPQUFrQixFQUFFO1FBRTdCLE1BQU0saUJBQWlCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixJQUFJLElBQUksNENBQXdCLEVBQUUsQ0FBQztRQUluRixJQUFJLG1DQUFRLElBQUksS0FBRSxpQkFBaUIsRUFBRSxTQUFTLEdBQUMsQ0FBQztRQUVoRCxNQUFNLGFBQWEsR0FBRyxHQUFTLEVBQUU7WUFDN0IsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNqRSxDQUFDLENBQUEsQ0FBQztRQUVGLE9BQU8sdUNBQWtCLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLGFBQWEsRUFBRSxFQUFFLGlCQUFpQixFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRTNGLENBQUM7SUFLWSxNQUFNLENBQUMsY0FBOEIsRUFDOUIsb0JBQWdELElBQUksNENBQXdCLEVBQUU7O1lBRTlGLE1BQU0sWUFBWSxHQUFHLElBQUksNENBQXdCLEVBQVcsQ0FBQztZQUU3RCxNQUFNLE1BQU0sR0FBRyxNQUFNLHVDQUFrQixDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsWUFBWSxDQUFDLEVBQ3hELGlCQUFpQixFQUNqQixHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUUzRCxPQUFPLE1BQU0sQ0FBQztRQUVsQixDQUFDO0tBQUE7SUFTTSwrQkFBK0IsQ0FBQyw0QkFBMEQ7UUFDN0YsSUFBSSxDQUFDLDhCQUE4QixDQUFDLGdCQUFnQixDQUFDLDRCQUE0QixDQUFDLENBQUM7SUFDdkYsQ0FBQztDQUVKO0FBbEZELDBDQWtGQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGF0YXN0b3JlLCBEYXRhc3RvcmVJRCwgRG9jTWV0YVNuYXBzaG90RXZlbnQsIERvY01ldGFTbmFwc2hvdEV2ZW50TGlzdGVuZXIsIEVycm9yTGlzdGVuZXIsIEluaXRSZXN1bHQsIFNuYXBzaG90UmVzdWx0fSBmcm9tICcuL0RhdGFzdG9yZSc7XG5pbXBvcnQge0RlbGV0ZVJlc3VsdH0gZnJvbSAnLi9EYXRhc3RvcmUnO1xuaW1wb3J0IHtXcml0ZU9wdHN9IGZyb20gJy4vRGF0YXN0b3JlJztcbmltcG9ydCB7RGF0YXN0b3Jlc30gZnJvbSAnLi9EYXRhc3RvcmVzJztcbmltcG9ydCB7RGVsZWdhdGVkRGF0YXN0b3JlfSBmcm9tICcuL0RlbGVnYXRlZERhdGFzdG9yZSc7XG5pbXBvcnQge0lFdmVudERpc3BhdGNoZXIsIFNpbXBsZVJlYWN0b3J9IGZyb20gJy4uL3JlYWN0b3IvU2ltcGxlUmVhY3Rvcic7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7RG9jTWV0YUZpbGVSZWZ9IGZyb20gJy4vRG9jTWV0YVJlZic7XG5pbXBvcnQge0RhdGFzdG9yZU11dGF0aW9ufSBmcm9tICcuL0RhdGFzdG9yZU11dGF0aW9uJztcbmltcG9ydCB7RGVmYXVsdERhdGFzdG9yZU11dGF0aW9ufSBmcm9tICcuL0RhdGFzdG9yZU11dGF0aW9uJztcbmltcG9ydCB7SURvY0luZm99IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbWV0YWRhdGEvSURvY0luZm8nO1xuaW1wb3J0IHtEYXRhc3RvcmVNdXRhdGlvbnN9IGZyb20gJy4vRGF0YXN0b3JlTXV0YXRpb25zJztcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG4vKipcbiAqIEEgcmVtb3RlIGRhdGFzdG9yZSBidWcgb25lIHRoYXQgaGFzIGEgbmF0aXZlIGltcGxlbWVudGF0aW9uIG9mIHNuYXBzaG90XG4gKiBzbyB0aGF0IGl0IG9wZXJhdGVzIGluIHRoZSBwcm9wZXIgdGhyZWFkLlxuICovXG5leHBvcnQgY2xhc3MgUmVtb3RlRGF0YXN0b3JlIGV4dGVuZHMgRGVsZWdhdGVkRGF0YXN0b3JlIHtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgZG9jTWV0YVNuYXBzaG90RXZlbnREaXNwYXRjaGVyOiBJRXZlbnREaXNwYXRjaGVyPERvY01ldGFTbmFwc2hvdEV2ZW50PiA9IG5ldyBTaW1wbGVSZWFjdG9yKCk7XG5cbiAgICBwdWJsaWMgcmVhZG9ubHkgaWQ6IERhdGFzdG9yZUlEO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YXN0b3JlOiBEYXRhc3RvcmUpIHtcbiAgICAgICAgc3VwZXIoZGF0YXN0b3JlKTtcbiAgICAgICAgdGhpcy5pZCA9ICdyZW1vdGU6JyArIGRhdGFzdG9yZS5pZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgc25hcHNob3QobGlzdGVuZXI6IERvY01ldGFTbmFwc2hvdEV2ZW50TGlzdGVuZXIpOiBQcm9taXNlPFNuYXBzaG90UmVzdWx0PiB7XG4gICAgICAgIHJldHVybiBEYXRhc3RvcmVzLmNyZWF0ZUNvbW1pdHRlZFNuYXBzaG90KHRoaXMsIGxpc3RlbmVyKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0IHRoZSBkYXRhc3RvcmUsIHBvdGVudGlhbGx5IHJlYWRpbmcgZmlsZXMgb2YgZGlzaywgdGhlIG5ldHdvcmssIGV0Yy5cbiAgICAgKi9cbiAgICBwdWJsaWMgYXN5bmMgaW5pdChlcnJvckxpc3RlbmVyPzogRXJyb3JMaXN0ZW5lcik6IFByb21pc2U8SW5pdFJlc3VsdD4ge1xuXG4gICAgICAgIGF3YWl0IHN1cGVyLmluaXQoKTtcblxuICAgICAgICBpZiAodGhpcy5kb2NNZXRhU25hcHNob3RFdmVudERpc3BhdGNoZXIuc2l6ZSgpID4gMCkge1xuXG4gICAgICAgICAgICAvLyBwZXJmb3JtIGEgc25hcHNob3QgaWYgYSBsaXN0ZW5lciB3YXMgYXR0YWNoZWQuLi5cbiAgICAgICAgICAgIHRoaXMuc25hcHNob3QoYXN5bmMgZXZlbnQgPT4gdGhpcy5kb2NNZXRhU25hcHNob3RFdmVudERpc3BhdGNoZXIuZGlzcGF0Y2hFdmVudChldmVudCkpXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBsb2cuZXJyb3IoZXJyKSk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWxlZ2F0ZSBoYW5kbGUgdGhlIG11dGF0aW9ucyBpbiB0aGUgcmVuZGVyZXIgcHJvY2Vzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgd3JpdGUoZmluZ2VycHJpbnQ6IHN0cmluZyxcbiAgICAgICAgICAgICAgICAgZGF0YTogc3RyaW5nLFxuICAgICAgICAgICAgICAgICBkb2NJbmZvOiBJRG9jSW5mbyxcbiAgICAgICAgICAgICAgICAgb3B0czogV3JpdGVPcHRzID0ge30pOiBQcm9taXNlPHZvaWQ+IHtcblxuICAgICAgICBjb25zdCBkYXRhc3RvcmVNdXRhdGlvbiA9IG9wdHMuZGF0YXN0b3JlTXV0YXRpb24gfHwgbmV3IERlZmF1bHREYXRhc3RvcmVNdXRhdGlvbigpO1xuXG4gICAgICAgIC8vIGNyZWF0ZSBhIG5ldyBvcHRzIHdpdGhvdXQgYSBkYXRhc3RvcmVNdXRhdGlvbiBiZWNhdXNlIHdlIGRvbid0IHRydXN0XG4gICAgICAgIC8vIHByb21pc2VzIGFjcm9zcyBwcm9jZXNzIGJvdW5kc1xuICAgICAgICBvcHRzID0gey4uLiBvcHRzLCBkYXRhc3RvcmVNdXRhdGlvbjogdW5kZWZpbmVkfTtcblxuICAgICAgICBjb25zdCB3cml0ZURlbGVnYXRlID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVsZWdhdGUud3JpdGUoZmluZ2VycHJpbnQsIGRhdGEsIGRvY0luZm8sIG9wdHMpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBEYXRhc3RvcmVNdXRhdGlvbnMuaGFuZGxlKCgpID0+IHdyaXRlRGVsZWdhdGUoKSwgZGF0YXN0b3JlTXV0YXRpb24sICgpID0+IHRydWUpO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVsZWdhdGUgaGFuZGxlIHRoZSBtdXRhdGlvbnMgaW4gdGhlIHJlbmRlcmVyIHByb2Nlc3MuXG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIGRlbGV0ZShkb2NNZXRhRmlsZVJlZjogRG9jTWV0YUZpbGVSZWYsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhc3RvcmVNdXRhdGlvbjogRGF0YXN0b3JlTXV0YXRpb248Ym9vbGVhbj4gPSBuZXcgRGVmYXVsdERhdGFzdG9yZU11dGF0aW9uKCkpOiBQcm9taXNlPFJlYWRvbmx5PERlbGV0ZVJlc3VsdD4+IHtcblxuICAgICAgICBjb25zdCBzeW5jTXV0YXRpb24gPSBuZXcgRGVmYXVsdERhdGFzdG9yZU11dGF0aW9uPGJvb2xlYW4+KCk7XG5cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgRGF0YXN0b3JlTXV0YXRpb25zLmhhbmRsZSgoKSA9PiB0aGlzLmRlbGVnYXRlLmRlbGV0ZShkb2NNZXRhRmlsZVJlZiwgc3luY011dGF0aW9uKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhc3RvcmVNdXRhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB0cnVlKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuXG4gICAgfVxuXG5cblxuICAgIC8qKlxuICAgICAqIEFuIGV2ZW50IGxpc3RlbmVyIHRvIGxpc3RlbiB0byB0aGUgZGF0YXN0b3JlIHdoaWxlIG9wZXJhdGluZyBvbiBib3RoXG4gICAgICogdGhlIHVuZGVybHlpbmcgZGF0YXN0b3JlcyB0byBkaXNjb3ZlciB3aGVuIGRvY3VtZW50cyBhcmUgZGlzY292ZXJlZFxuICAgICAqIHdpdGhvdXQgaGF2aW5nIHRvIHJlLXJlYWQgdGhlIGRhdGFzdG9yZSBhZnRlciBpdCdzIGJlZW4gaW5pdGlhbGl6ZWQuXG4gICAgICovXG4gICAgcHVibGljIGFkZERvY01ldGFTbmFwc2hvdEV2ZW50TGlzdGVuZXIoZG9jTWV0YVNuYXBzaG90RXZlbnRMaXN0ZW5lcjogRG9jTWV0YVNuYXBzaG90RXZlbnRMaXN0ZW5lcik6IHZvaWQge1xuICAgICAgICB0aGlzLmRvY01ldGFTbmFwc2hvdEV2ZW50RGlzcGF0Y2hlci5hZGRFdmVudExpc3RlbmVyKGRvY01ldGFTbmFwc2hvdEV2ZW50TGlzdGVuZXIpO1xuICAgIH1cblxufVxuXG4iXX0=