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
const DelegatedDatastore_1 = require("./DelegatedDatastore");
const tracer = RendererAnalytics_1.RendererAnalytics.createTracer('datastore');
class TracedDatastore extends DelegatedDatastore_1.DelegatedDatastore {
    constructor(delegate, id = 'traced') {
        super(delegate);
        this.delegate = delegate;
        this.id = id;
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
    createBackup() {
        return __awaiter(this, void 0, void 0, function* () {
            return tracer.traceAsync('createBackup', () => this.delegate.createBackup());
        });
    }
    deactivate() {
        return __awaiter(this, void 0, void 0, function* () {
            return tracer.traceAsync('deactivate', () => this.delegate.deactivate());
        });
    }
    delete(docMetaFileRef, datastoreMutation) {
        return __awaiter(this, void 0, void 0, function* () {
            return tracer.traceAsync('delete', () => this.delegate.delete(docMetaFileRef, datastoreMutation));
        });
    }
    deleteFile(backend, ref) {
        return __awaiter(this, void 0, void 0, function* () {
            return tracer.traceAsync('deleteFile', () => this.delegate.deleteFile(backend, ref));
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
            return tracer.traceAsync('init', () => this.delegate.init(errorListener, opts));
        });
    }
    overview() {
        return __awaiter(this, void 0, void 0, function* () {
            return tracer.traceAsync('overview', () => this.delegate.overview());
        });
    }
    synchronizeDocs(...docMetaRefs) {
        return __awaiter(this, void 0, void 0, function* () {
            return tracer.traceAsync('synchronizeDocs', () => this.delegate.synchronizeDocs(...docMetaRefs));
        });
    }
    write(fingerprint, data, docInfo, opts) {
        return __awaiter(this, void 0, void 0, function* () {
            return tracer.traceAsync('write', () => this.delegate.write(fingerprint, data, docInfo, opts));
        });
    }
    writeDocMeta(docMeta, datastoreMutation) {
        return __awaiter(this, void 0, void 0, function* () {
            return tracer.traceAsync('writeDocMeta', () => this.delegate.writeDocMeta(docMeta, datastoreMutation));
        });
    }
    writeFile(backend, ref, data, opts) {
        return __awaiter(this, void 0, void 0, function* () {
            return tracer.traceAsync('writeFile', () => this.delegate.writeFile(backend, ref, data, opts));
        });
    }
}
exports.TracedDatastore = TracedDatastore;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHJhY2VkRGF0YXN0b3JlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVHJhY2VkRGF0YXN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBb0JBLCtEQUEwRDtBQUMxRCw2REFBd0Q7QUFJeEQsTUFBTSxNQUFNLEdBQUcscUNBQWlCLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBTzNELE1BQWEsZUFBZ0IsU0FBUSx1Q0FBa0I7SUFFbkQsWUFBNEIsUUFBbUIsRUFDbkIsS0FBa0IsUUFBUTtRQUVsRCxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFIUSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLE9BQUUsR0FBRixFQUFFLENBQXdCO0lBR3RELENBQUM7SUFFWSxRQUFRLENBQUMsV0FBbUI7O1lBQ3JDLE9BQU8sTUFBTSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUNwRixDQUFDO0tBQUE7SUFFWSxZQUFZLENBQUMsT0FBZ0IsRUFBRSxHQUFZOztZQUNwRCxPQUFPLE1BQU0sQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdGLENBQUM7S0FBQTtJQUVZLFlBQVk7O1lBQ3JCLE9BQU8sTUFBTSxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO1FBQ2pGLENBQUM7S0FBQTtJQUVZLFVBQVU7O1lBQ25CLE9BQU8sTUFBTSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxD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QUMsQ0FBQztRQUNuRyxDQUFDO0tBQUE7Q0FFSjtBQXBFRCwwQ0FvRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RlbGV0ZVJlc3VsdH0gZnJvbSAnLi9EYXRhc3RvcmUnO1xuaW1wb3J0IHtHZXRGaWxlT3B0c30gZnJvbSAnLi9EYXRhc3RvcmUnO1xuaW1wb3J0IHtFcnJvckxpc3RlbmVyfSBmcm9tICcuL0RhdGFzdG9yZSc7XG5pbXBvcnQge0RhdGFzdG9yZUluaXRPcHRzfSBmcm9tICcuL0RhdGFzdG9yZSc7XG5pbXBvcnQge0JpbmFyeUZpbGVEYXRhfSBmcm9tICcuL0RhdGFzdG9yZSc7XG5pbXBvcnQge1dyaXRlRmlsZU9wdHN9IGZyb20gJy4vRGF0YXN0b3JlJztcbmltcG9ydCB7RGF0YXN0b3JlT3ZlcnZpZXd9IGZyb20gJy4vRGF0YXN0b3JlJztcbmltcG9ydCB7RGF0YXN0b3JlfSBmcm9tICcuL0RhdGFzdG9yZSc7XG5pbXBvcnQge0RhdGFzdG9yZUlEfSBmcm9tICcuL0RhdGFzdG9yZSc7XG5pbXBvcnQge0luaXRSZXN1bHR9IGZyb20gJy4vRGF0YXN0b3JlJztcbmltcG9ydCB7QmFja2VuZH0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9kYXRhc3RvcmUvQmFja2VuZCc7XG5pbXBvcnQge0RvY01ldGFGaWxlUmVmfSBmcm9tICcuL0RvY01ldGFSZWYnO1xuaW1wb3J0IHtEb2NNZXRhUmVmfSBmcm9tICcuL0RvY01ldGFSZWYnO1xuaW1wb3J0IHtEYXRhc3RvcmVNdXRhdGlvbn0gZnJvbSAnLi9EYXRhc3RvcmVNdXRhdGlvbic7XG5pbXBvcnQge0RvY01ldGF9IGZyb20gJy4uL21ldGFkYXRhL0RvY01ldGEnO1xuaW1wb3J0IHtPcHRpb25hbH0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL3RzL09wdGlvbmFsJztcbmltcG9ydCB7RG9jRmlsZU1ldGF9IGZyb20gJy4vRG9jRmlsZU1ldGEnO1xuaW1wb3J0IHtXcml0ZU9wdHN9IGZyb20gJy4vRGF0YXN0b3JlJztcbmltcG9ydCB7RG9jSW5mb30gZnJvbSAnLi4vbWV0YWRhdGEvRG9jSW5mbyc7XG5pbXBvcnQge0lEb2NJbmZvfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL21ldGFkYXRhL0lEb2NJbmZvJztcbmltcG9ydCB7UmVuZGVyZXJBbmFseXRpY3N9IGZyb20gJy4uL2dhL1JlbmRlcmVyQW5hbHl0aWNzJztcbmltcG9ydCB7RGVsZWdhdGVkRGF0YXN0b3JlfSBmcm9tICcuL0RlbGVnYXRlZERhdGFzdG9yZSc7XG5pbXBvcnQge0lEb2NNZXRhfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy9tZXRhZGF0YS9JRG9jTWV0YVwiO1xuaW1wb3J0IHtGaWxlUmVmfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy9kYXRhc3RvcmUvRmlsZVJlZlwiO1xuXG5jb25zdCB0cmFjZXIgPSBSZW5kZXJlckFuYWx5dGljcy5jcmVhdGVUcmFjZXIoJ2RhdGFzdG9yZScpO1xuXG4vKipcbiAqIEEgUGVyc2lzdGVuY2VMYXllciB0aGF0IHRyYWNlcyBwb3RlbnRpYWxseSBzbG93IG9wZXJhdGlvbnMgc28gd2UgY2FuXG4gKiBhbmFseXplIHBlcmZvcm1hbmNlIGF0IHJ1bnRpbWUgYW5kIHRyeSB0byBrZWVwIG9wdGltaXppbmcgdGhlIGhpZ2ggbGV2ZWxcbiAqIG9wZXJhdGlvbnMuXG4gKi9cbmV4cG9ydCBjbGFzcyBUcmFjZWREYXRhc3RvcmUgZXh0ZW5kcyBEZWxlZ2F0ZWREYXRhc3RvcmUge1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIHJlYWRvbmx5IGRlbGVnYXRlOiBEYXRhc3RvcmUsXG4gICAgICAgICAgICAgICAgcHVibGljIHJlYWRvbmx5IGlkOiBEYXRhc3RvcmVJRCA9ICd0cmFjZWQnKSB7XG5cbiAgICAgICAgc3VwZXIoZGVsZWdhdGUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBjb250YWlucyhmaW5nZXJwcmludDogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgICAgIHJldHVybiB0cmFjZXIudHJhY2VBc3luYygnY29udGFpbnMnLCAoKSA9PiB0aGlzLmRlbGVnYXRlLmNvbnRhaW5zKGZpbmdlcnByaW50KSk7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGNvbnRhaW5zRmlsZShiYWNrZW5kOiBCYWNrZW5kLCByZWY6IEZpbGVSZWYpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuIHRyYWNlci50cmFjZUFzeW5jKCdjb250YWluc0ZpbGUnLCAoKSA9PiB0aGlzLmRlbGVnYXRlLmNvbnRhaW5zRmlsZShiYWNrZW5kLCByZWYpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgY3JlYXRlQmFja3VwKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm4gdHJhY2VyLnRyYWNlQXN5bmMoJ2NyZWF0ZUJhY2t1cCcsICgpID0+IHRoaXMuZGVsZWdhdGUuY3JlYXRlQmFja3VwKCkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBkZWFjdGl2YXRlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm4gdHJhY2VyLnRyYWNlQXN5bmMoJ2RlYWN0aXZhdGUnLCAoKSA9PiB0aGlzLmRlbGVnYXRlLmRlYWN0aXZhdGUoKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGRlbGV0ZShkb2NNZXRhRmlsZVJlZjogRG9jTWV0YUZpbGVSZWYsIGRhdGFzdG9yZU11dGF0aW9uPzogRGF0YXN0b3JlTXV0YXRpb248Ym9vbGVhbj4pOiBQcm9taXNlPFJlYWRvbmx5PERlbGV0ZVJlc3VsdD4+IHtcbiAgICAgICAgcmV0dXJuIHRyYWNlci50cmFjZUFzeW5jKCdkZWxldGUnLCAoKSA9PiB0aGlzLmRlbGVnYXRlLmRlbGV0ZShkb2NNZXRhRmlsZVJlZiwgZGF0YXN0b3JlTXV0YXRpb24pKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgZGVsZXRlRmlsZShiYWNrZW5kOiBCYWNrZW5kLCByZWY6IEZpbGVSZWYpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuIHRyYWNlci50cmFjZUFzeW5jKCdkZWxldGVGaWxlJywgKCkgPT4gdGhpcy5kZWxlZ2F0ZS5kZWxldGVGaWxlKGJhY2tlbmQsIHJlZikpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBnZXREb2NNZXRhKGZpbmdlcnByaW50OiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZyB8IG51bGw+IHtcbiAgICAgICAgcmV0dXJuIHRyYWNlci50cmFjZUFzeW5jKCdnZXREb2NNZXRhJywgKCkgPT4gdGhpcy5kZWxlZ2F0ZS5nZXREb2NNZXRhKGZpbmdlcnByaW50KSk7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGdldERvY01ldGFSZWZzKCk6IFByb21pc2U8RG9jTWV0YVJlZltdPiB7XG4gICAgICAgIHJldHVybiB0cmFjZXIudHJhY2VBc3luYygnZ2V0RG9jTWV0YVJlZnMnLCAoKSA9PiB0aGlzLmRlbGVnYXRlLmdldERvY01ldGFSZWZzKCkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRGaWxlKGJhY2tlbmQ6IEJhY2tlbmQsIHJlZjogRmlsZVJlZiwgb3B0cz86IEdldEZpbGVPcHRzKTogRG9jRmlsZU1ldGEge1xuICAgICAgICByZXR1cm4gdHJhY2VyLnRyYWNlKCdnZXRGaWxlJywgKCkgPT4gdGhpcy5kZWxlZ2F0ZS5nZXRGaWxlKGJhY2tlbmQsIHJlZiwgb3B0cykpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBpbml0KGVycm9yTGlzdGVuZXI/OiBFcnJvckxpc3RlbmVyLCBvcHRzPzogRGF0YXN0b3JlSW5pdE9wdHMpOiBQcm9taXNlPEluaXRSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIHRyYWNlci50cmFjZUFzeW5jKCdpbml0JywgKCkgPT4gdGhpcy5kZWxlZ2F0ZS5pbml0KGVycm9yTGlzdGVuZXIsIG9wdHMpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgb3ZlcnZpZXcoKTogUHJvbWlzZTxEYXRhc3RvcmVPdmVydmlldyB8IHVuZGVmaW5lZD4ge1xuICAgICAgICByZXR1cm4gdHJhY2VyLnRyYWNlQXN5bmMoJ292ZXJ2aWV3JywgKCkgPT4gdGhpcy5kZWxlZ2F0ZS5vdmVydmlldygpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgc3luY2hyb25pemVEb2NzKC4uLmRvY01ldGFSZWZzOiBEb2NNZXRhUmVmW10pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuIHRyYWNlci50cmFjZUFzeW5jKCdzeW5jaHJvbml6ZURvY3MnLCAoKSA9PiB0aGlzLmRlbGVnYXRlLnN5bmNocm9uaXplRG9jcyguLi5kb2NNZXRhUmVmcykpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyB3cml0ZShmaW5nZXJwcmludDogc3RyaW5nLCBkYXRhOiBzdHJpbmcsIGRvY0luZm86IElEb2NJbmZvLCBvcHRzPzogV3JpdGVPcHRzKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybiB0cmFjZXIudHJhY2VBc3luYygnd3JpdGUnLCAoKSA9PiB0aGlzLmRlbGVnYXRlLndyaXRlKGZpbmdlcnByaW50LCBkYXRhLCBkb2NJbmZvLCBvcHRzKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIHdyaXRlRG9jTWV0YShkb2NNZXRhOiBJRG9jTWV0YSwgZGF0YXN0b3JlTXV0YXRpb24/OiBEYXRhc3RvcmVNdXRhdGlvbjxJRG9jSW5mbz4pOiBQcm9taXNlPElEb2NJbmZvPiB7XG4gICAgICAgIHJldHVybiB0cmFjZXIudHJhY2VBc3luYygnd3JpdGVEb2NNZXRhJywgKCkgPT4gdGhpcy5kZWxlZ2F0ZS53cml0ZURvY01ldGEoZG9jTWV0YSwgZGF0YXN0b3JlTXV0YXRpb24pKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgd3JpdGVGaWxlKGJhY2tlbmQ6IEJhY2tlbmQsIHJlZjogRmlsZVJlZiwgZGF0YTogQmluYXJ5RmlsZURhdGEsIG9wdHM/OiBXcml0ZUZpbGVPcHRzKTogUHJvbWlzZTxEb2NGaWxlTWV0YT4ge1xuICAgICAgICByZXR1cm4gdHJhY2VyLnRyYWNlQXN5bmMoJ3dyaXRlRmlsZScsICgpID0+IHRoaXMuZGVsZWdhdGUud3JpdGVGaWxlKGJhY2tlbmQsIHJlZiwgZGF0YSwgb3B0cykpO1xuICAgIH1cblxufVxuIl19