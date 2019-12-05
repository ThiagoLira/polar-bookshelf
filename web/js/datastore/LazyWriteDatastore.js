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
const DelegatedDatastore_1 = require("./DelegatedDatastore");
const DatastoreMutation_1 = require("./DatastoreMutation");
const DocMetaComparisonIndex_1 = require("./DocMetaComparisonIndex");
const UUIDs_1 = require("../metadata/UUIDs");
const Logger_1 = require("polar-shared/src/logger/Logger");
const log = Logger_1.Logger.create();
class LazyWriteDatastore extends DelegatedDatastore_1.DelegatedDatastore {
    constructor(delegate) {
        super(delegate);
        this.index = new DocMetaComparisonIndex_1.DocMetaComparisonIndex();
        this.nrWrites = 0;
        this.id = 'lazy-write:' + delegate.id;
    }
    writeDocMeta(docMeta, datastoreMutation = new DatastoreMutation_1.DefaultDatastoreMutation()) {
        const _super = Object.create(null, {
            writeDocMeta: { get: () => super.writeDocMeta }
        });
        return __awaiter(this, void 0, void 0, function* () {
            yield this.handleWrite(docMeta.docInfo, () => __awaiter(this, void 0, void 0, function* () { return yield _super.writeDocMeta.call(this, docMeta, datastoreMutation); }));
            return docMeta.docInfo;
        });
    }
    write(fingerprint, data, docInfo, opts) {
        const _super = Object.create(null, {
            write: { get: () => super.write }
        });
        return __awaiter(this, void 0, void 0, function* () {
            return this.handleWrite(docInfo, () => __awaiter(this, void 0, void 0, function* () { return yield _super.write.call(this, fingerprint, data, docInfo, opts); }));
        });
    }
    handleWrite(docInfo, writeFunction) {
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
            const writeDesc = `fingerprint: ${docInfo.fingerprint}, uuid: ${docInfo.uuid}: ` + docInfo.title;
            if (doUpdated) {
                this.index.updateUsingDocInfo(docInfo);
                ++this.nrWrites;
                log.info("Performing write: " + writeDesc);
                yield writeFunction();
                return;
            }
            log.info("Skipping write: " + writeDesc);
        });
    }
    delete(docMetaFileRef) {
        this.index.remove(docMetaFileRef.fingerprint);
        return super.delete(docMetaFileRef);
    }
}
exports.LazyWriteDatastore = LazyWriteDatastore;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGF6eVdyaXRlRGF0YXN0b3JlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiTGF6eVdyaXRlRGF0YXN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0EsNkRBQXdEO0FBRXhELDJEQUFnRjtBQUVoRixxRUFBZ0U7QUFDaEUsNkNBQXdDO0FBRXhDLDJEQUFzRDtBQUt0RCxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFNNUIsTUFBYSxrQkFBbUIsU0FBUSx1Q0FBa0I7SUFRdEQsWUFBWSxRQUFtQjtRQUMzQixLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFQSCxVQUFLLEdBQUcsSUFBSSwrQ0FBc0IsRUFBRSxDQUFDO1FBSS9DLGFBQVEsR0FBVyxDQUFDLENBQUM7UUFJeEIsSUFBSSxDQUFDLEVBQUUsR0FBRyxhQUFhLEdBQUcsUUFBUSxDQUFDLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0lBRVksWUFBWSxDQUFDLE9BQWlCLEVBQ2pCLG9CQUFpRCxJQUFJLDRDQUF3QixFQUFFOzs7OztZQUVyRyxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxHQUFTLEVBQUUsZ0RBQUMsT0FBQSxNQUFNLE9BQU0sWUFBWSxZQUFDLE9BQU8sRUFBRSxpQkFBaUIsQ0FBQyxDQUFBLEdBQUEsQ0FBQyxDQUFDO1lBRTFHLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQztRQUUzQixDQUFDO0tBQUE7SUFNWSxLQUFLLENBQUMsV0FBbUIsRUFDbkIsSUFBUyxFQUNULE9BQWlCLEVBQ2pCLElBQWdCOzs7OztZQUUvQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLEdBQVMsRUFBRSxnREFBQyxPQUFBLE1BQU0sT0FBTSxLQUFLLFlBQUMsV0FBVyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUEsR0FBQSxDQUFDLENBQUM7UUFFdEcsQ0FBQztLQUFBO0lBRWEsV0FBVyxDQUFDLE9BQWlCLEVBQUUsYUFBaUM7O1lBRTFFLElBQUksU0FBUyxHQUFHLEtBQUssQ0FBQztZQUV0QixJQUFJLENBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxFQUFFO2dCQUM1QyxTQUFTLEdBQUcsSUFBSSxDQUFDO2FBQ3BCO1lBRUQsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBRTFELElBQUksQ0FBQyxhQUFhLEVBQUU7Z0JBQ2hCLFNBQVMsR0FBRyxJQUFJLENBQUM7YUFDcEI7WUFFRCxJQUFJLGFBQWEsSUFBSSxhQUFLLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDdEUsU0FBUyxHQUFHLElBQUksQ0FBQzthQUNwQjtZQUVELE1BQU0sU0FBUyxHQUFHLGdCQUFnQixPQUFPLENBQUMsV0FBVyxXQUFXLE9BQU8sQ0FBQyxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO1lBRWpHLElBQUksU0FBUyxFQUFFO2dCQUVYLElBQUksQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3ZDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFFaEIsR0FBRyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxTQUFTLENBQUMsQ0FBQztnQkFDM0MsTUFBTSxhQUFhLEVBQUUsQ0FBQztnQkFDdEIsT0FBTzthQUVWO1lBRUQsR0FBRyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxTQUFTLENBQUMsQ0FBQztRQUU3QyxDQUFDO0tBQUE7SUFFTSxNQUFNLENBQUMsY0FBOEI7UUFDeEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzlDLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUN4QyxDQUFDO0NBRUo7QUEzRUQsZ0RBMkVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBYnN0cmFjdERhdGFzdG9yZSwgRGF0YXN0b3JlLCBEYXRhc3RvcmVJRCwgRGVsZXRlUmVzdWx0fSBmcm9tICcuL0RhdGFzdG9yZSc7XG5pbXBvcnQge0RlbGVnYXRlZERhdGFzdG9yZX0gZnJvbSAnLi9EZWxlZ2F0ZWREYXRhc3RvcmUnO1xuaW1wb3J0IHtEb2NJbmZvfSBmcm9tICcuLi9tZXRhZGF0YS9Eb2NJbmZvJztcbmltcG9ydCB7RGF0YXN0b3JlTXV0YXRpb24sIERlZmF1bHREYXRhc3RvcmVNdXRhdGlvbn0gZnJvbSAnLi9EYXRhc3RvcmVNdXRhdGlvbic7XG5pbXBvcnQge0RvY01ldGFGaWxlUmVmfSBmcm9tICcuL0RvY01ldGFSZWYnO1xuaW1wb3J0IHtEb2NNZXRhQ29tcGFyaXNvbkluZGV4fSBmcm9tICcuL0RvY01ldGFDb21wYXJpc29uSW5kZXgnO1xuaW1wb3J0IHtVVUlEc30gZnJvbSAnLi4vbWV0YWRhdGEvVVVJRHMnO1xuaW1wb3J0IHtEb2NNZXRhfSBmcm9tICcuLi9tZXRhZGF0YS9Eb2NNZXRhJztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL2xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IHtXcml0ZU9wdHN9IGZyb20gJy4vRGF0YXN0b3JlJztcbmltcG9ydCB7SURvY0luZm99IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbWV0YWRhdGEvSURvY0luZm8nO1xuaW1wb3J0IHtJRG9jTWV0YX0gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvbWV0YWRhdGEvSURvY01ldGFcIjtcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG4vKipcbiAqIFRoZSBMYXp5V3JpdGVEYXRhc3RvcmUga2VlcHMgYSBsaWdodHdlaWdodCBpbi1tZW1vcnkgaW5kZXggb2Ygd2hhdCdzIHdyaXR0ZW5cbiAqIGFuZCBwcmV2ZW50cyBkb3VibGUgd3JpdGVzIG9mIERvY01ldGEgYnV0IG90aGVyd2lzZSBvcGVyYXRlcyBub3JtYWxseS5cbiAqL1xuZXhwb3J0IGNsYXNzIExhenlXcml0ZURhdGFzdG9yZSBleHRlbmRzIERlbGVnYXRlZERhdGFzdG9yZSB7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IGluZGV4ID0gbmV3IERvY01ldGFDb21wYXJpc29uSW5kZXgoKTtcblxuICAgIHB1YmxpYyByZWFkb25seSBpZDogRGF0YXN0b3JlSUQ7XG5cbiAgICBwdWJsaWMgbnJXcml0ZXM6IG51bWJlciA9IDA7XG5cbiAgICBjb25zdHJ1Y3RvcihkZWxlZ2F0ZTogRGF0YXN0b3JlKSB7XG4gICAgICAgIHN1cGVyKGRlbGVnYXRlKTtcbiAgICAgICAgdGhpcy5pZCA9ICdsYXp5LXdyaXRlOicgKyBkZWxlZ2F0ZS5pZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgd3JpdGVEb2NNZXRhKGRvY01ldGE6IElEb2NNZXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YXN0b3JlTXV0YXRpb246IERhdGFzdG9yZU11dGF0aW9uPElEb2NJbmZvPiA9IG5ldyBEZWZhdWx0RGF0YXN0b3JlTXV0YXRpb24oKSk6IFByb21pc2U8SURvY0luZm8+IHtcblxuICAgICAgICBhd2FpdCB0aGlzLmhhbmRsZVdyaXRlKGRvY01ldGEuZG9jSW5mbywgYXN5bmMgKCkgPT4gYXdhaXQgc3VwZXIud3JpdGVEb2NNZXRhKGRvY01ldGEsIGRhdGFzdG9yZU11dGF0aW9uKSk7XG5cbiAgICAgICAgcmV0dXJuIGRvY01ldGEuZG9jSW5mbztcblxuICAgIH1cblxuICAgIC8vIFRPRE86IHdoZW4gd2UgZG8gYSByZWFkLCBpdCBtaWdodCBiZSBiZXR0ZXIgdG8gdXBkYXRlIHRoZSBpbmRleCB0aGVuXG4gICAgLy8gd2hpY2ggd291bGQgcmVtb3ZlIHRoZSBmaXJzdCB3cml0ZSBpbiBzb21lIHNpdHVhdGlvbnMgYnV0IHdlIG5lZWQgdGhlXG4gICAgLy8gRG9jSW5mbyBhbmQgdGhlIFVVSUQgdG8gaGFuZGxlIHRoaXMuXG5cbiAgICBwdWJsaWMgYXN5bmMgd3JpdGUoZmluZ2VycHJpbnQ6IHN0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogYW55LFxuICAgICAgICAgICAgICAgICAgICAgICBkb2NJbmZvOiBJRG9jSW5mbyxcbiAgICAgICAgICAgICAgICAgICAgICAgb3B0cz86IFdyaXRlT3B0cyk6IFByb21pc2U8dm9pZD4ge1xuXG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVdyaXRlKGRvY0luZm8sIGFzeW5jICgpID0+IGF3YWl0IHN1cGVyLndyaXRlKGZpbmdlcnByaW50LCBkYXRhLCBkb2NJbmZvLCBvcHRzKSk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGhhbmRsZVdyaXRlKGRvY0luZm86IElEb2NJbmZvLCB3cml0ZUZ1bmN0aW9uOiAoKSA9PiBQcm9taXNlPGFueT4pOiBQcm9taXNlPHZvaWQ+IHtcblxuICAgICAgICBsZXQgZG9VcGRhdGVkID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKCEgdGhpcy5pbmRleC5jb250YWlucyhkb2NJbmZvLmZpbmdlcnByaW50KSkge1xuICAgICAgICAgICAgZG9VcGRhdGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGRvY0NvbXBhcmlzb24gPSB0aGlzLmluZGV4LmdldChkb2NJbmZvLmZpbmdlcnByaW50KTtcblxuICAgICAgICBpZiAoIWRvY0NvbXBhcmlzb24pIHtcbiAgICAgICAgICAgIGRvVXBkYXRlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZG9jQ29tcGFyaXNvbiAmJiBVVUlEcy5jb21wYXJlKGRvY0NvbXBhcmlzb24udXVpZCwgZG9jSW5mby51dWlkKSA8IDApIHtcbiAgICAgICAgICAgIGRvVXBkYXRlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB3cml0ZURlc2MgPSBgZmluZ2VycHJpbnQ6ICR7ZG9jSW5mby5maW5nZXJwcmludH0sIHV1aWQ6ICR7ZG9jSW5mby51dWlkfTogYCArIGRvY0luZm8udGl0bGU7XG5cbiAgICAgICAgaWYgKGRvVXBkYXRlZCkge1xuICAgICAgICAgICAgLy8gd2hlbiB0aGUgZG9jIGlzIGNyZWF0ZWQgYW5kIGl0J3Mgbm90IGluIHRoZSBpbmRleC5cbiAgICAgICAgICAgIHRoaXMuaW5kZXgudXBkYXRlVXNpbmdEb2NJbmZvKGRvY0luZm8pO1xuICAgICAgICAgICAgKyt0aGlzLm5yV3JpdGVzO1xuXG4gICAgICAgICAgICBsb2cuaW5mbyhcIlBlcmZvcm1pbmcgd3JpdGU6IFwiICsgd3JpdGVEZXNjKTtcbiAgICAgICAgICAgIGF3YWl0IHdyaXRlRnVuY3Rpb24oKTtcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICB9XG5cbiAgICAgICAgbG9nLmluZm8oXCJTa2lwcGluZyB3cml0ZTogXCIgKyB3cml0ZURlc2MpO1xuXG4gICAgfVxuXG4gICAgcHVibGljIGRlbGV0ZShkb2NNZXRhRmlsZVJlZjogRG9jTWV0YUZpbGVSZWYpOiBQcm9taXNlPFJlYWRvbmx5PERlbGV0ZVJlc3VsdD4+IHtcbiAgICAgICAgdGhpcy5pbmRleC5yZW1vdmUoZG9jTWV0YUZpbGVSZWYuZmluZ2VycHJpbnQpO1xuICAgICAgICByZXR1cm4gc3VwZXIuZGVsZXRlKGRvY01ldGFGaWxlUmVmKTtcbiAgICB9XG5cbn1cbiJdfQ==