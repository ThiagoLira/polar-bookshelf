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
const DocMetaComparisonIndex_1 = require("./DocMetaComparisonIndex");
const UUIDs_1 = require("../metadata/UUIDs");
const DelegatedListenablePersistenceLayer_1 = require("./DelegatedListenablePersistenceLayer");
class LazyWriteListenablePersistenceLayer extends DelegatedListenablePersistenceLayer_1.DelegatedListenablePersistenceLayer {
    constructor(delegate) {
        super(delegate);
        this.index = new DocMetaComparisonIndex_1.DocMetaComparisonIndex();
        this.nrWrites = 0;
    }
    getDocMeta(fingerprint) {
        const _super = Object.create(null, {
            getDocMeta: { get: () => super.getDocMeta }
        });
        return __awaiter(this, void 0, void 0, function* () {
            const docMeta = yield _super.getDocMeta.call(this, fingerprint);
            if (docMeta) {
                this.index.updateUsingDocInfo(docMeta.docInfo);
            }
            return docMeta;
        });
    }
    writeDocMeta(docMeta, datastoreMutation) {
        const _super = Object.create(null, {
            writeDocMeta: { get: () => super.writeDocMeta }
        });
        return __awaiter(this, void 0, void 0, function* () {
            return this.handleWrite(docMeta.docInfo, () => __awaiter(this, void 0, void 0, function* () { return _super.writeDocMeta.call(this, docMeta, datastoreMutation); }));
        });
    }
    write(fingerprint, docMeta, opts) {
        const _super = Object.create(null, {
            write: { get: () => super.write }
        });
        return __awaiter(this, void 0, void 0, function* () {
            return this.handleWrite(docMeta.docInfo, () => __awaiter(this, void 0, void 0, function* () { return _super.write.call(this, fingerprint, docMeta, opts); }));
        });
    }
    handleWrite(docInfo, completion) {
        return __awaiter(this, void 0, void 0, function* () {
            let doUpdated = false;
            if (!this.index.contains(docInfo.fingerprint)) {
                doUpdated = true;
            }
            const docComparison = this.index.get(docInfo.fingerprint);
            if (!docComparison) {
                doUpdated = true;
            }
            if (docComparison && UUIDs_1.UUIDs.compare(docComparison.uuid, docInfo.uuid) < 0) {
                doUpdated = true;
            }
            if (doUpdated) {
                this.index.updateUsingDocInfo(docInfo);
                ++this.nrWrites;
                return yield completion();
            }
            else {
                return docInfo;
            }
        });
    }
    delete(docMetaFileRef, datastoreMutation) {
        const _super = Object.create(null, {
            delete: { get: () => super.delete }
        });
        return __awaiter(this, void 0, void 0, function* () {
            this.index.remove(docMetaFileRef.fingerprint);
            return _super.delete.call(this, docMetaFileRef, datastoreMutation);
        });
    }
}
exports.LazyWriteListenablePersistenceLayer = LazyWriteListenablePersistenceLayer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGF6eVdyaXRlTGlzdGVuYWJsZVBlcnNpc3RlbmNlTGF5ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJMYXp5V3JpdGVMaXN0ZW5hYmxlUGVyc2lzdGVuY2VMYXllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUlBLHFFQUFnRTtBQUNoRSw2Q0FBd0M7QUFHeEMsK0ZBQTBGO0FBTzFGLE1BQWEsbUNBQW9DLFNBQVEseUVBQW1DO0lBTXhGLFlBQVksUUFBb0M7UUFDNUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBTEgsVUFBSyxHQUFHLElBQUksK0NBQXNCLEVBQUUsQ0FBQztRQUUvQyxhQUFRLEdBQVcsQ0FBQyxDQUFDO0lBSTVCLENBQUM7SUFFWSxVQUFVLENBQUMsV0FBbUI7Ozs7O1lBRXZDLE1BQU0sT0FBTyxHQUFHLE1BQU0sT0FBTSxVQUFVLFlBQUMsV0FBVyxDQUFDLENBQUM7WUFFcEQsSUFBSSxPQUFPLEVBQUU7Z0JBQ1QsSUFBSSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDbEQ7WUFFRCxPQUFPLE9BQU8sQ0FBQztRQUNuQixDQUFDO0tBQUE7SUFFWSxZQUFZLENBQUMsT0FBaUIsRUFBRSxpQkFBK0M7Ozs7O1lBQ3hGLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEdBQVMsRUFBRSxnREFBQyxPQUFBLE9BQU0sWUFBWSxZQUFDLE9BQU8sRUFBRSxpQkFBaUIsRUFBQyxHQUFBLENBQUMsQ0FBQztRQUN6RyxDQUFDO0tBQUE7SUFFWSxLQUFLLENBQUMsV0FBbUIsRUFBRSxPQUFpQixFQUFFLElBQWdCOzs7OztZQUN2RSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxHQUFTLEVBQUUsZ0RBQUMsT0FBQSxPQUFNLEtBQUssWUFBQyxXQUFXLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBQyxHQUFBLENBQUMsQ0FBQztRQUNsRyxDQUFDO0tBQUE7SUFFYSxXQUFXLENBQUksT0FBaUIsRUFBRSxVQUFtQzs7WUFFL0UsSUFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBRXRCLElBQUksQ0FBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEVBQUU7Z0JBQzVDLFNBQVMsR0FBRyxJQUFJLENBQUM7YUFDcEI7WUFFRCxNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7WUFFMUQsSUFBSSxDQUFDLGFBQWEsRUFBRTtnQkFDaEIsU0FBUyxHQUFHLElBQUksQ0FBQzthQUNwQjtZQUVELElBQUksYUFBYSxJQUFJLGFBQUssQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUN0RSxTQUFTLEdBQUcsSUFBSSxDQUFDO2FBQ3BCO1lBRUQsSUFBSSxTQUFTLEVBQUU7Z0JBR1gsSUFBSSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDdkMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUNoQixPQUFPLE1BQU0sVUFBVSxFQUFFLENBQUM7YUFHN0I7aUJBQU07Z0JBQ0gsT0FBTyxPQUFPLENBQUM7YUFDbEI7UUFFTCxDQUFDO0tBQUE7SUFFWSxNQUFNLENBQUMsY0FBOEIsRUFBRSxpQkFBOEM7Ozs7O1lBQzlGLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUM5QyxPQUFPLE9BQU0sTUFBTSxZQUFDLGNBQWMsRUFBRSxpQkFBaUIsRUFBRTtRQUMzRCxDQUFDO0tBQUE7Q0FFSjtBQWxFRCxrRkFrRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RlbGV0ZVJlc3VsdH0gZnJvbSAnLi9EYXRhc3RvcmUnO1xuaW1wb3J0IHtEb2NJbmZvfSBmcm9tICcuLi9tZXRhZGF0YS9Eb2NJbmZvJztcbmltcG9ydCB7RGF0YXN0b3JlTXV0YXRpb259IGZyb20gJy4vRGF0YXN0b3JlTXV0YXRpb24nO1xuaW1wb3J0IHtEb2NNZXRhRmlsZVJlZn0gZnJvbSAnLi9Eb2NNZXRhUmVmJztcbmltcG9ydCB7RG9jTWV0YUNvbXBhcmlzb25JbmRleH0gZnJvbSAnLi9Eb2NNZXRhQ29tcGFyaXNvbkluZGV4JztcbmltcG9ydCB7VVVJRHN9IGZyb20gJy4uL21ldGFkYXRhL1VVSURzJztcbmltcG9ydCB7V3JpdGVPcHRzfSBmcm9tICcuL1BlcnNpc3RlbmNlTGF5ZXInO1xuaW1wb3J0IHtEb2NNZXRhfSBmcm9tICcuLi9tZXRhZGF0YS9Eb2NNZXRhJztcbmltcG9ydCB7RGVsZWdhdGVkTGlzdGVuYWJsZVBlcnNpc3RlbmNlTGF5ZXJ9IGZyb20gJy4vRGVsZWdhdGVkTGlzdGVuYWJsZVBlcnNpc3RlbmNlTGF5ZXInO1xuaW1wb3J0IHtMaXN0ZW5hYmxlUGVyc2lzdGVuY2VMYXllcn0gZnJvbSAnLi9MaXN0ZW5hYmxlUGVyc2lzdGVuY2VMYXllcic7XG5pbXBvcnQge0lEb2NJbmZvfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy9tZXRhZGF0YS9JRG9jSW5mb1wiO1xuaW1wb3J0IHtJRG9jTWV0YX0gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvbWV0YWRhdGEvSURvY01ldGFcIjtcblxuLyoqXG4gKi9cbmV4cG9ydCBjbGFzcyBMYXp5V3JpdGVMaXN0ZW5hYmxlUGVyc2lzdGVuY2VMYXllciBleHRlbmRzIERlbGVnYXRlZExpc3RlbmFibGVQZXJzaXN0ZW5jZUxheWVyIHtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgaW5kZXggPSBuZXcgRG9jTWV0YUNvbXBhcmlzb25JbmRleCgpO1xuXG4gICAgcHVibGljIG5yV3JpdGVzOiBudW1iZXIgPSAwO1xuXG4gICAgY29uc3RydWN0b3IoZGVsZWdhdGU6IExpc3RlbmFibGVQZXJzaXN0ZW5jZUxheWVyKSB7XG4gICAgICAgIHN1cGVyKGRlbGVnYXRlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgZ2V0RG9jTWV0YShmaW5nZXJwcmludDogc3RyaW5nKTogUHJvbWlzZTxJRG9jTWV0YXwgdW5kZWZpbmVkPiB7XG5cbiAgICAgICAgY29uc3QgZG9jTWV0YSA9IGF3YWl0IHN1cGVyLmdldERvY01ldGEoZmluZ2VycHJpbnQpO1xuXG4gICAgICAgIGlmIChkb2NNZXRhKSB7XG4gICAgICAgICAgICB0aGlzLmluZGV4LnVwZGF0ZVVzaW5nRG9jSW5mbyhkb2NNZXRhLmRvY0luZm8pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRvY01ldGE7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIHdyaXRlRG9jTWV0YShkb2NNZXRhOiBJRG9jTWV0YSwgZGF0YXN0b3JlTXV0YXRpb24/OiBEYXRhc3RvcmVNdXRhdGlvbjxJRG9jSW5mbz4pOiBQcm9taXNlPElEb2NJbmZvPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVdyaXRlKGRvY01ldGEuZG9jSW5mbywgYXN5bmMgKCkgPT4gc3VwZXIud3JpdGVEb2NNZXRhKGRvY01ldGEsIGRhdGFzdG9yZU11dGF0aW9uKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIHdyaXRlKGZpbmdlcnByaW50OiBzdHJpbmcsIGRvY01ldGE6IElEb2NNZXRhLCBvcHRzPzogV3JpdGVPcHRzKTogUHJvbWlzZTxJRG9jSW5mbz4ge1xuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVXcml0ZShkb2NNZXRhLmRvY0luZm8sIGFzeW5jICgpID0+IHN1cGVyLndyaXRlKGZpbmdlcnByaW50LCBkb2NNZXRhLCBvcHRzKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBoYW5kbGVXcml0ZTxUPihkb2NJbmZvOiBJRG9jSW5mbywgY29tcGxldGlvbjogKCkgPT4gUHJvbWlzZTxJRG9jSW5mbz4pOiBQcm9taXNlPElEb2NJbmZvPiB7XG5cbiAgICAgICAgbGV0IGRvVXBkYXRlZCA9IGZhbHNlO1xuXG4gICAgICAgIGlmICghIHRoaXMuaW5kZXguY29udGFpbnMoZG9jSW5mby5maW5nZXJwcmludCkpIHtcbiAgICAgICAgICAgIGRvVXBkYXRlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkb2NDb21wYXJpc29uID0gdGhpcy5pbmRleC5nZXQoZG9jSW5mby5maW5nZXJwcmludCk7XG5cbiAgICAgICAgaWYgKCFkb2NDb21wYXJpc29uKSB7XG4gICAgICAgICAgICBkb1VwZGF0ZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRvY0NvbXBhcmlzb24gJiYgVVVJRHMuY29tcGFyZShkb2NDb21wYXJpc29uLnV1aWQsIGRvY0luZm8udXVpZCkgPCAwKSB7XG4gICAgICAgICAgICBkb1VwZGF0ZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRvVXBkYXRlZCkge1xuXG4gICAgICAgICAgICAvLyB3aGVuIHRoZSBkb2MgaXMgY3JlYXRlZCBhbmQgaXQncyBub3QgaW4gdGhlIGluZGV4LlxuICAgICAgICAgICAgdGhpcy5pbmRleC51cGRhdGVVc2luZ0RvY0luZm8oZG9jSW5mbyk7XG4gICAgICAgICAgICArK3RoaXMubnJXcml0ZXM7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgY29tcGxldGlvbigpO1xuXG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBkb2NJbmZvO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgZGVsZXRlKGRvY01ldGFGaWxlUmVmOiBEb2NNZXRhRmlsZVJlZiwgZGF0YXN0b3JlTXV0YXRpb24/OiBEYXRhc3RvcmVNdXRhdGlvbjxib29sZWFuPik6IFByb21pc2U8RGVsZXRlUmVzdWx0PiB7XG4gICAgICAgIHRoaXMuaW5kZXgucmVtb3ZlKGRvY01ldGFGaWxlUmVmLmZpbmdlcnByaW50KTtcbiAgICAgICAgcmV0dXJuIHN1cGVyLmRlbGV0ZShkb2NNZXRhRmlsZVJlZiwgZGF0YXN0b3JlTXV0YXRpb24pO1xuICAgIH1cblxufVxuIl19