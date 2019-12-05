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
const FilePaths_1 = require("polar-shared/src/util/FilePaths");
const DocMetas_1 = require("../../../metadata/DocMetas");
const Logger_1 = require("polar-shared/src/logger/Logger");
const PDFMetadata_1 = require("polar-pdf/src/pdf/PDFMetadata");
const Optional_1 = require("polar-shared/src/util/ts/Optional");
const Files_1 = require("polar-shared/src/util/Files");
const Hashcodes_1 = require("polar-shared/src/util/Hashcodes");
const Backend_1 = require("polar-shared/src/datastore/Backend");
const Directories_1 = require("../../../datastore/Directories");
const DatastoreFiles_1 = require("../../../datastore/DatastoreFiles");
const Hashcode_1 = require("polar-shared/src/metadata/Hashcode");
const URLs_1 = require("polar-shared/src/util/URLs");
const InputSources_1 = require("polar-shared/src/util/input/InputSources");
const AppRuntime_1 = require("../../../AppRuntime");
const Toaster_1 = require("../../../ui/toaster/Toaster");
const BackendFileRefs_1 = require("../../../datastore/BackendFileRefs");
const log = Logger_1.Logger.create();
class PDFImporter {
    constructor(persistenceLayerProvider) {
        this.persistenceLayerProvider = persistenceLayerProvider;
    }
    prefetch(docPath, basename) {
        return __awaiter(this, void 0, void 0, function* () {
            if (AppRuntime_1.AppRuntime.isElectron() && URLs_1.URLs.isURL(docPath) && URLs_1.URLs.isWebScheme(docPath)) {
                const url = docPath;
                const downloadPath = FilePaths_1.FilePaths.join(FilePaths_1.FilePaths.tmpdir(), basename);
                Toaster_1.Toaster.info(`Downloading ${basename} ...`);
                log.info(`Prefetching URL ${url} to: ${downloadPath}`);
                const response = yield fetch(url);
                if (response.body) {
                    const reader = response.body.getReader();
                    let writeStream;
                    try {
                        writeStream = Files_1.Files.createWriteStream(downloadPath);
                        while (true) {
                            const { done, value } = yield reader.read();
                            if (done) {
                                break;
                            }
                            writeStream.write(value);
                        }
                    }
                    finally {
                        if (writeStream) {
                            writeStream.close();
                        }
                    }
                    return downloadPath;
                }
            }
            return docPath;
        });
    }
    importFile(docPath, basename, opts = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            docPath = yield this.prefetch(docPath, basename);
            const isPath = !URLs_1.URLs.isURL(docPath);
            log.info(`Working with document: ${docPath}: ${isPath}`);
            if (isPath) {
                const directories = new Directories_1.Directories();
                if (yield PDFImporter.isWithinStashdir(directories.stashDir, docPath)) {
                    log.warn("Skipping import of file that's already in the stashdir.");
                    return Optional_1.Optional.empty();
                }
            }
            const pdfMeta = opts.pdfMeta || (yield PDFMetadata_1.PDFMetadata.getMetadata(docPath));
            const persistenceLayer = this.persistenceLayerProvider.get();
            if (yield persistenceLayer.contains(pdfMeta.fingerprint)) {
                log.warn(`File already present in datastore: fingerprint=${pdfMeta.fingerprint}: ${docPath}`);
                const docMeta = yield persistenceLayer.getDocMeta(pdfMeta.fingerprint);
                if (docMeta) {
                    if (docMeta.docInfo.filename) {
                        const backendFileRef = BackendFileRefs_1.BackendFileRefs.toBackendFileRef(docMeta);
                        const basename = FilePaths_1.FilePaths.basename(docMeta.docInfo.filename);
                        return Optional_1.Optional.of({
                            basename,
                            docInfo: docMeta.docInfo,
                            backendFileRef: backendFileRef
                        });
                    }
                }
                return Optional_1.Optional.empty();
            }
            if (!basename && !docPath.startsWith("blob:")) {
                basename = FilePaths_1.FilePaths.basename(docPath);
            }
            const defaultTitle = basename || "";
            const fileHashMeta = yield PDFImporter.computeHashPrefix(docPath);
            const filename = `${fileHashMeta.hashPrefix}-` + DatastoreFiles_1.DatastoreFiles.sanitizeFileName(basename);
            const toBinaryFileData = () => __awaiter(this, void 0, void 0, function* () {
                if (URLs_1.URLs.isURL(docPath)) {
                    log.info("Reading data from URL: ", docPath);
                    const response = yield fetch(docPath);
                    const blob = yield response.blob();
                    return blob;
                }
                return { path: docPath };
            });
            const binaryFileData = yield toBinaryFileData();
            const docMeta = DocMetas_1.DocMetas.create(pdfMeta.fingerprint, pdfMeta.nrPages, filename);
            docMeta.docInfo.title = Optional_1.Optional.of(pdfMeta.title)
                .getOrElse(defaultTitle);
            docMeta.docInfo.description = pdfMeta.description;
            docMeta.docInfo.doi = pdfMeta.doi;
            docMeta.docInfo.hashcode = {
                enc: Hashcode_1.HashEncoding.BASE58CHECK,
                alg: Hashcode_1.HashAlgorithm.KECCAK256,
                data: fileHashMeta.hashcode
            };
            const fileRef = {
                name: filename,
                hashcode: docMeta.docInfo.hashcode
            };
            const writeFile = Object.assign({ backend: Backend_1.Backend.STASH, data: binaryFileData }, fileRef);
            yield persistenceLayer.write(pdfMeta.fingerprint, docMeta, { writeFile });
            const backendFileRef = BackendFileRefs_1.BackendFileRefs.toBackendFileRef(docMeta);
            return Optional_1.Optional.of({
                basename,
                docInfo: docMeta.docInfo,
                backendFileRef: backendFileRef
            });
        });
    }
    static computeHashcode(docPath) {
        return __awaiter(this, void 0, void 0, function* () {
            const fileHashMeta = yield PDFImporter.computeHashPrefix(docPath);
            const hashcode = {
                enc: Hashcode_1.HashEncoding.BASE58CHECK,
                alg: Hashcode_1.HashAlgorithm.KECCAK256,
                data: fileHashMeta.hashcode
            };
            return hashcode;
        });
    }
    static computeHashPrefix(docPath) {
        return __awaiter(this, void 0, void 0, function* () {
            const inputSource = yield InputSources_1.InputSources.ofValue(docPath);
            const hashcode = yield Hashcodes_1.Hashcodes.createFromInputSource(inputSource);
            const hashPrefix = hashcode.substring(0, 10);
            return { hashcode, hashPrefix };
        });
    }
    static isWithinStashdir(stashDir, path) {
        return __awaiter(this, void 0, void 0, function* () {
            const currentDirname = yield Files_1.Files.realpathAsync(FilePaths_1.FilePaths.dirname(path));
            stashDir = yield Files_1.Files.realpathAsync(stashDir);
            return currentDirname === stashDir;
        });
    }
}
exports.PDFImporter = PDFImporter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUERGSW1wb3J0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJQREZJbXBvcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBLCtEQUEwRDtBQUMxRCx5REFBb0Q7QUFDcEQsMkRBQXNEO0FBQ3RELCtEQUEwRDtBQUUxRCxnRUFBMkQ7QUFDM0QsdURBQThEO0FBQzlELCtEQUEwRDtBQUMxRCxnRUFBMkQ7QUFDM0QsZ0VBQTJEO0FBQzNELHNFQUFpRTtBQUVqRSxpRUFBeUY7QUFJekYscURBQWdEO0FBQ2hELDJFQUFzRTtBQUN0RSxvREFBK0M7QUFHL0MseURBQW9EO0FBRXBELHdFQUFtRTtBQUluRSxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFNNUIsTUFBYSxXQUFXO0lBSXBCLFlBQVksd0JBQXFEO1FBQzdELElBQUksQ0FBQyx3QkFBd0IsR0FBRyx3QkFBd0IsQ0FBQztJQUM3RCxDQUFDO0lBRWEsUUFBUSxDQUFDLE9BQWUsRUFBRSxRQUFnQjs7WUFFcEQsSUFBSSx1QkFBVSxDQUFDLFVBQVUsRUFBRSxJQUFJLFdBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksV0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFFN0UsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDO2dCQUNwQixNQUFNLFlBQVksR0FBRyxxQkFBUyxDQUFDLElBQUksQ0FBQyxxQkFBUyxDQUFDLE1BQU0sRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQUVsRSxpQkFBTyxDQUFDLElBQUksQ0FBQyxlQUFlLFFBQVEsTUFBTSxDQUFDLENBQUM7Z0JBRTVDLEdBQUcsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsUUFBUSxZQUFZLEVBQUUsQ0FBQyxDQUFDO2dCQUV2RCxNQUFNLFFBQVEsR0FBRyxNQUFNLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFFbEMsSUFBSSxRQUFRLENBQUMs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QU0sMkJBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFeEQsTUFBTSxRQUFRLEdBQUcsTUFBTSxxQkFBUyxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3BFLE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBRTdDLE9BQU8sRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLENBQUM7UUFFcEMsQ0FBQztLQUFBO0lBRU8sTUFBTSxDQUFPLGdCQUFnQixDQUFDLFFBQWdCLEVBQUUsSUFBWTs7WUFFaEUsTUFBTSxjQUFjLEdBQUcsTUFBTSxhQUFLLENBQUMsYUFBYSxDQUFDLHFCQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFFMUUsUUFBUSxHQUFHLE1BQU0sYUFBSyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUUvQyxPQUFPLGNBQWMsS0FBSyxRQUFRLENBQUM7UUFFdkMsQ0FBQztLQUFBO0NBRUo7QUFsUEQsa0NBa1BDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQZXJzaXN0ZW5jZUxheWVyfSBmcm9tICcuLi8uLi8uLi9kYXRhc3RvcmUvUGVyc2lzdGVuY2VMYXllcic7XG5pbXBvcnQge0ZpbGVQYXRoc30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL0ZpbGVQYXRocyc7XG5pbXBvcnQge0RvY01ldGFzfSBmcm9tICcuLi8uLi8uLi9tZXRhZGF0YS9Eb2NNZXRhcyc7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7UERGTWV0YWRhdGF9IGZyb20gJ3BvbGFyLXBkZi9zcmMvcGRmL1BERk1ldGFkYXRhJztcbmltcG9ydCB7UERGTWV0YX0gZnJvbSAncG9sYXItcGRmL3NyYy9wZGYvUERGTWV0YWRhdGEnO1xuaW1wb3J0IHtPcHRpb25hbH0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL3RzL09wdGlvbmFsJztcbmltcG9ydCB7RmlsZUhhbmRsZSwgRmlsZXN9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC9GaWxlcyc7XG5pbXBvcnQge0hhc2hjb2Rlc30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL0hhc2hjb2Rlcyc7XG5pbXBvcnQge0JhY2tlbmR9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvZGF0YXN0b3JlL0JhY2tlbmQnO1xuaW1wb3J0IHtEaXJlY3Rvcmllc30gZnJvbSAnLi4vLi4vLi4vZGF0YXN0b3JlL0RpcmVjdG9yaWVzJztcbmltcG9ydCB7RGF0YXN0b3JlRmlsZXN9IGZyb20gJy4uLy4uLy4uL2RhdGFzdG9yZS9EYXRhc3RvcmVGaWxlcyc7XG5pbXBvcnQge0RvY0luZm99IGZyb20gJy4uLy4uLy4uL21ldGFkYXRhL0RvY0luZm8nO1xuaW1wb3J0IHtIYXNoQWxnb3JpdGhtLCBIYXNoY29kZSwgSGFzaEVuY29kaW5nfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL21ldGFkYXRhL0hhc2hjb2RlJztcbmltcG9ydCB7SVByb3ZpZGVyfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvUHJvdmlkZXJzJztcbmltcG9ydCB7QmluYXJ5RmlsZURhdGF9IGZyb20gJy4uLy4uLy4uL2RhdGFzdG9yZS9EYXRhc3RvcmUnO1xuaW1wb3J0IHtCYWNrZW5kRmlsZVJlZkRhdGF9IGZyb20gJy4uLy4uLy4uL2RhdGFzdG9yZS9EYXRhc3RvcmUnO1xuaW1wb3J0IHtVUkxzfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvVVJMcyc7XG5pbXBvcnQge0lucHV0U291cmNlc30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL2lucHV0L0lucHV0U291cmNlcyc7XG5pbXBvcnQge0FwcFJ1bnRpbWV9IGZyb20gJy4uLy4uLy4uL0FwcFJ1bnRpbWUnO1xuXG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xuaW1wb3J0IHtUb2FzdGVyfSBmcm9tICcuLi8uLi8uLi91aS90b2FzdGVyL1RvYXN0ZXInO1xuaW1wb3J0IHtEYXRhc3RvcmVzfSBmcm9tICcuLi8uLi8uLi9kYXRhc3RvcmUvRGF0YXN0b3Jlcyc7XG5pbXBvcnQge0JhY2tlbmRGaWxlUmVmc30gZnJvbSAnLi4vLi4vLi4vZGF0YXN0b3JlL0JhY2tlbmRGaWxlUmVmcyc7XG5pbXBvcnQge0lEb2NJbmZvfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy9tZXRhZGF0YS9JRG9jSW5mb1wiO1xuaW1wb3J0IHtCYWNrZW5kRmlsZVJlZn0gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvZGF0YXN0b3JlL0JhY2tlbmRGaWxlUmVmXCI7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuLyoqXG4gKiBIYW5kbGVzIHRha2luZyBhIGdpdmVuIGZpbGUsIHBhcnNpbmcgdGhlIG1ldGFkYXRhLCBhbmQgdGhlbiB3cml0aW5nIGEgbmV3XG4gKiBEb2NNZXRhIGZpbGUgYW5kIGltcG9ydGluZyB0aGUgUERGIGZpbGUgdG8gdGhlIHN0YXNoLlxuICovXG5leHBvcnQgY2xhc3MgUERGSW1wb3J0ZXIge1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBwZXJzaXN0ZW5jZUxheWVyUHJvdmlkZXI6IElQcm92aWRlcjxQZXJzaXN0ZW5jZUxheWVyPjtcblxuICAgIGNvbnN0cnVjdG9yKHBlcnNpc3RlbmNlTGF5ZXJQcm92aWRlcjogSVByb3ZpZGVyPFBlcnNpc3RlbmNlTGF5ZXI+KSB7XG4gICAgICAgIHRoaXMucGVyc2lzdGVuY2VMYXllclByb3ZpZGVyID0gcGVyc2lzdGVuY2VMYXllclByb3ZpZGVyO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgcHJlZmV0Y2goZG9jUGF0aDogc3RyaW5nLCBiYXNlbmFtZTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcblxuICAgICAgICBpZiAoQXBwUnVudGltZS5pc0VsZWN0cm9uKCkgJiYgVVJMcy5pc1VSTChkb2NQYXRoKSAmJiBVUkxzLmlzV2ViU2NoZW1lKGRvY1BhdGgpKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IHVybCA9IGRvY1BhdGg7XG4gICAgICAgICAgICBjb25zdCBkb3dubG9hZFBhdGggPSBGaWxlUGF0aHMuam9pbihGaWxlUGF0aHMudG1wZGlyKCksIGJhc2VuYW1lKTtcblxuICAgICAgICAgICAgVG9hc3Rlci5pbmZvKGBEb3dubG9hZGluZyAke2Jhc2VuYW1lfSAuLi5gKTtcblxuICAgICAgICAgICAgbG9nLmluZm8oYFByZWZldGNoaW5nIFVSTCAke3VybH0gdG86ICR7ZG93bmxvYWRQYXRofWApO1xuXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG5cbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5ib2R5KSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCByZWFkZXIgPSByZXNwb25zZS5ib2R5LmdldFJlYWRlcigpO1xuXG4gICAgICAgICAgICAgICAgbGV0IHdyaXRlU3RyZWFtOiBmcy5Xcml0ZVN0cmVhbSB8IHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgICAgIHRyeSB7XG5cbiAgICAgICAgICAgICAgICAgICAgd3JpdGVTdHJlYW0gPSBGaWxlcy5jcmVhdGVXcml0ZVN0cmVhbShkb3dubG9hZFBhdGgpO1xuXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlICh0cnVlKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgZG9uZSwgdmFsdWUgfSA9IGF3YWl0IHJlYWRlci5yZWFkKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkb25lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHdyaXRlU3RyZWFtLndyaXRlKHZhbHVlKTtcblxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh3cml0ZVN0cmVhbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgd3JpdGVTdHJlYW0uY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRvd25sb2FkUGF0aDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRvY1BhdGg7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBkb2NQYXRoXG4gICAgICogQHBhcmFtIGJhc2VuYW1lIFRoZSBiYXNlbmFtZSBvZiB0aGUgZmlsZSAtICdteWRvYy5wZGYnIHdpdGhvdXQgdGhlIGZ1bGxcbiAgICAgKiAgICAgICAgICAgICAgICAgcGF0aCBpbmZvcm1hdGlvbi4gIFRoaXMgaXMgbmVlZGVkIGJlY2F1c2UgYmxvYiBVUkxzIG1pZ2h0XG4gICAgICogICAgICAgICAgICAgICAgIG5vdCBhY3R1YWxseSBoYXZlIHRoZSBmdWxsIG1ldGFkYXRhIHdlIG5lZWQgdGhhdCB0aGVcbiAgICAgKiAgICAgICAgICAgICAgICAgb3JpZ2luYWwgaW5wdXQgVVJMIGhhcyBnaXZlbiB1cy5cbiAgICAgKi9cbiAgICBwdWJsaWMgYXN5bmMgaW1wb3J0RmlsZShkb2NQYXRoOiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZW5hbWU6IHN0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRzOiBQREZJbXBvcnRPcHRzID0ge30pOiBQcm9taXNlPE9wdGlvbmFsPEltcG9ydGVkRmlsZT4+IHtcblxuICAgICAgICBkb2NQYXRoID0gYXdhaXQgdGhpcy5wcmVmZXRjaChkb2NQYXRoLCBiYXNlbmFtZSk7XG5cbiAgICAgICAgY29uc3QgaXNQYXRoID0gISBVUkxzLmlzVVJMKGRvY1BhdGgpO1xuXG4gICAgICAgIGxvZy5pbmZvKGBXb3JraW5nIHdpdGggZG9jdW1lbnQ6ICR7ZG9jUGF0aH06ICR7aXNQYXRofWApO1xuXG4gICAgICAgIGlmIChpc1BhdGgpIHtcblxuICAgICAgICAgICAgY29uc3QgZGlyZWN0b3JpZXMgPSBuZXcgRGlyZWN0b3JpZXMoKTtcblxuICAgICAgICAgICAgaWYgKGF3YWl0IFBERkltcG9ydGVyLmlzV2l0aGluU3Rhc2hkaXIoZGlyZWN0b3JpZXMuc3Rhc2hEaXIsIGRvY1BhdGgpKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBwcmV2ZW50IHRoZSB1c2VyIGZyb20gcmUtaW1wb3J0aW5nL29wZW5pbmcgYSBmaWxlIHRoYXQgaXNcbiAgICAgICAgICAgICAgICAvLyBBTFJFQURZIGluIHRoZSBzdGFzaCBkaXIuXG5cbiAgICAgICAgICAgICAgICBsb2cud2FybihcIlNraXBwaW5nIGltcG9ydCBvZiBmaWxlIHRoYXQncyBhbHJlYWR5IGluIHRoZSBzdGFzaGRpci5cIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE9wdGlvbmFsLmVtcHR5KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBkZk1ldGEgPSBvcHRzLnBkZk1ldGEgfHwgYXdhaXQgUERGTWV0YWRhdGEuZ2V0TWV0YWRhdGEoZG9jUGF0aCk7XG5cbiAgICAgICAgY29uc3QgcGVyc2lzdGVuY2VMYXllciA9IHRoaXMucGVyc2lzdGVuY2VMYXllclByb3ZpZGVyLmdldCgpO1xuXG4gICAgICAgIGlmIChhd2FpdCBwZXJzaXN0ZW5jZUxheWVyLmNvbnRhaW5zKHBkZk1ldGEuZmluZ2VycHJpbnQpKSB7XG5cbiAgICAgICAgICAgIGxvZy53YXJuKGBGaWxlIGFscmVhZHkgcHJlc2VudCBpbiBkYXRhc3RvcmU6IGZpbmdlcnByaW50PSR7cGRmTWV0YS5maW5nZXJwcmludH06ICR7ZG9jUGF0aH1gKTtcblxuICAgICAgICAgICAgY29uc3QgZG9jTWV0YSA9IGF3YWl0IHBlcnNpc3RlbmNlTGF5ZXIuZ2V0RG9jTWV0YShwZGZNZXRhLmZpbmdlcnByaW50KTtcblxuICAgICAgICAgICAgaWYgKGRvY01ldGEpIHtcblxuICAgICAgICAgICAgICAgIGlmIChkb2NNZXRhLmRvY0luZm8uZmlsZW5hbWUpIHtcblxuICAgICAgICAgICAgICAgICAgICAvLyByZXR1cm4gdGhlIGV4aXN0aW5nIGRvYyBtZXRhIGluZm9ybWF0aW9uLlxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJhY2tlbmRGaWxlUmVmID0gQmFja2VuZEZpbGVSZWZzLnRvQmFja2VuZEZpbGVSZWYoZG9jTWV0YSk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYmFzZW5hbWUgPSBGaWxlUGF0aHMuYmFzZW5hbWUoZG9jTWV0YS5kb2NJbmZvLmZpbGVuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE9wdGlvbmFsLm9mKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jSW5mbzogZG9jTWV0YS5kb2NJbmZvLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2VuZEZpbGVSZWY6IGJhY2tlbmRGaWxlUmVmIVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gT3B0aW9uYWwuZW1wdHkoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNyZWF0ZSBhIGRlZmF1bHQgdGl0bGUgZnJvbSB0aGUgcGF0aCB3aGljaCBpcyB1c2VkIGFzIHNvbWV0aW1lcyB0aGVcbiAgICAgICAgLy8gZmlsZW5hbWUgaXMgYWN0dWFsbHkgYSBkZWNlbnQgZmlyc3QgYXR0ZW1wdCBhdCBhIGRvY3VtZW50IHRpdGxlLlxuXG4gICAgICAgIGlmICghYmFzZW5hbWUgJiYgISBkb2NQYXRoLnN0YXJ0c1dpdGgoXCJibG9iOlwiKSkge1xuICAgICAgICAgICAgYmFzZW5hbWUgPSBGaWxlUGF0aHMuYmFzZW5hbWUoZG9jUGF0aCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkZWZhdWx0VGl0bGUgPSBiYXNlbmFtZSB8fCBcIlwiO1xuXG4gICAgICAgIC8vIFRPRE86IHRoaXMgaXMgbm90IHBhcnRpY3VsYXJseSBlZmZpY2llbnQgdG8gY3JlYXRlIHRoZSBoYXNoY29kZVxuICAgICAgICAvLyBmaXJzdCwgdGhlbiBjb3B5IHRoZSBieXRlcyB0byB0aGUgdGFyZ2V0IGxvY2F0aW9uLiAgSXQgd291bGQgYmVcbiAgICAgICAgLy8gYmV0dGVyLCBsb2NhbGx5LCBjb3B5IGFuZCBjb21wdXRlIHRoZSBoYXNoIG9uIGNvcHkgYnV0IHdlIHdvdWxkIGhhdmVcbiAgICAgICAgLy8gdG8gcmVuYW1lIGl0IGFuZCB0aGF0J3Mgbm90IGFuIG9wZXJhdGlvbiBJIHdhbnQgdG8gc3VwcG9ydCBpbiB0aGVcbiAgICAgICAgLy8gZGF0YXN0b3JlLiBUaGlzIGNvdWxkIGJlIG9wdGltaXplZCBidXQgd2FpdCB1bnRpbCBwZW9wbGUgY29tcGxhaW5cbiAgICAgICAgLy8gYWJvdXQgaXQgYXMgaXQncyBwcm9iYWJseSBwcmVtYXR1cmUgYXQgdGhpcyBwb2ludC5cblxuICAgICAgICAvLyBUT0RPKHdlYmFwcCk6IHRoaXMgZG9lc24ndCB3b3JrIGVpdGhlciBiZWNhc3VlIGl0IGFzc3VtZXMgdGhhdCB3ZSBjYW5cbiAgICAgICAgLy8gZWFzaWx5IGFuZCBjaGVhcGx5IHJlYWQgZnJvbSB0aGUgVVJMIC8gYmxvYiBVUkwgYnV0IEkgZ3Vlc3MgdGhhdCdzXG4gICAgICAgIC8vIHRydWUgaW4gdGhpcyBzaXR1YXRpb24gdGhvdWdoIGl0J3MgYXNzdW1pbmcgYSBGSUxFIGFuZCBub3QgYSBibG9iIFVSTFxuICAgICAgICBjb25zdCBmaWxlSGFzaE1ldGEgPSBhd2FpdCBQREZJbXBvcnRlci5jb21wdXRlSGFzaFByZWZpeChkb2NQYXRoKTtcblxuICAgICAgICBjb25zdCBmaWxlbmFtZSA9IGAke2ZpbGVIYXNoTWV0YS5oYXNoUHJlZml4fS1gICsgRGF0YXN0b3JlRmlsZXMuc2FuaXRpemVGaWxlTmFtZShiYXNlbmFtZSEpO1xuXG4gICAgICAgIC8vIGFsd2F5cyByZWFkIGZyb20gYSBzdHJlYW0gaGVyZSBhcyBzb21lIG9mIHRoZSBQREZzIHdlIG1pZ2h0IHdhbnQgdG9cbiAgICAgICAgLy8gaW1wb3J0IGNvdWxkIGJlIHJhdGhlciBsYXJnZS4gIEFsc28gdGhpcyBuZWVkcyB0byBiZSBhIENPUFkgb2YgdGhlXG4gICAgICAgIC8vIGRhdGEsIG5vdCBhIHN5bWxpbmsgc2luY2UgdGhhdCdzIG5vdCByZWFsbHkgcG9ydGFibGUgYW5kIGl0IHdvdWxkXG4gICAgICAgIC8vIGFsc28gYmUgZGFuZ2luZyBpZiB0aGUgdXNlciBkZWxldGVkIHRoZSBmaWxlLiAgV2FzdGluZyBzcGFjZSBoZXJlIGlzXG4gICAgICAgIC8vIGEgZ29vZCB0aGluZy4gIFNwYWNlIGlzIGNoZWFwLlxuXG4gICAgICAgIGNvbnN0IHRvQmluYXJ5RmlsZURhdGEgPSBhc3luYyAoKTogUHJvbWlzZTxCaW5hcnlGaWxlRGF0YT4gPT4ge1xuXG4gICAgICAgICAgICAvLyBUT0RPKHdlYmFwcCk6IG1ha2UgdGhpcyBpbnRvIGEgdG9CbG9iIGZ1bmN0aW9uIGNhbGxcbiAgICAgICAgICAgIGlmIChVUkxzLmlzVVJMKGRvY1BhdGgpKSB7XG4gICAgICAgICAgICAgICAgbG9nLmluZm8oXCJSZWFkaW5nIGRhdGEgZnJvbSBVUkw6IFwiLCBkb2NQYXRoKTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGRvY1BhdGgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGJsb2IgPSBhd2FpdCByZXNwb25zZS5ibG9iKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJsb2I7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiA8RmlsZUhhbmRsZT4ge3BhdGg6IGRvY1BhdGh9O1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgYmluYXJ5RmlsZURhdGE6IEJpbmFyeUZpbGVEYXRhID0gYXdhaXQgdG9CaW5hcnlGaWxlRGF0YSgpO1xuXG4gICAgICAgIGNvbnN0IGRvY01ldGEgPSBEb2NNZXRhcy5jcmVhdGUocGRmTWV0YS5maW5nZXJwcmludCwgcGRmTWV0YS5uclBhZ2VzLCBmaWxlbmFtZSk7XG5cbiAgICAgICAgZG9jTWV0YS5kb2NJbmZvLnRpdGxlID0gT3B0aW9uYWwub2YocGRmTWV0YS50aXRsZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZ2V0T3JFbHNlKGRlZmF1bHRUaXRsZSk7XG5cbiAgICAgICAgZG9jTWV0YS5kb2NJbmZvLmRlc2NyaXB0aW9uID0gcGRmTWV0YS5kZXNjcmlwdGlvbjtcbiAgICAgICAgZG9jTWV0YS5kb2NJbmZvLmRvaSA9IHBkZk1ldGEuZG9pO1xuXG4gICAgICAgIGRvY01ldGEuZG9jSW5mby5oYXNoY29kZSA9IHtcbiAgICAgICAgICAgIGVuYzogSGFzaEVuY29kaW5nLkJBU0U1OENIRUNLLFxuICAgICAgICAgICAgYWxnOiBIYXNoQWxnb3JpdGhtLktFQ0NBSzI1NixcbiAgICAgICAgICAgIGRhdGE6IGZpbGVIYXNoTWV0YS5oYXNoY29kZVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGZpbGVSZWYgPSB7XG4gICAgICAgICAgICBuYW1lOiBmaWxlbmFtZSxcbiAgICAgICAgICAgIGhhc2hjb2RlOiBkb2NNZXRhLmRvY0luZm8uaGFzaGNvZGVcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCB3cml0ZUZpbGU6IEJhY2tlbmRGaWxlUmVmRGF0YSA9IHtcbiAgICAgICAgICAgIGJhY2tlbmQ6IEJhY2tlbmQuU1RBU0gsXG4gICAgICAgICAgICBkYXRhOiBiaW5hcnlGaWxlRGF0YSxcbiAgICAgICAgICAgIC4uLmZpbGVSZWZcbiAgICAgICAgfTtcblxuICAgICAgICBhd2FpdCBwZXJzaXN0ZW5jZUxheWVyLndyaXRlKHBkZk1ldGEuZmluZ2VycHJpbnQsIGRvY01ldGEsIHt3cml0ZUZpbGV9KTtcblxuICAgICAgICBjb25zdCBiYWNrZW5kRmlsZVJlZiA9IEJhY2tlbmRGaWxlUmVmcy50b0JhY2tlbmRGaWxlUmVmKGRvY01ldGEpO1xuXG4gICAgICAgIHJldHVybiBPcHRpb25hbC5vZih7XG4gICAgICAgICAgICBiYXNlbmFtZSxcbiAgICAgICAgICAgIGRvY0luZm86IGRvY01ldGEuZG9jSW5mbyxcbiAgICAgICAgICAgIGJhY2tlbmRGaWxlUmVmOiBiYWNrZW5kRmlsZVJlZiFcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGNvbXB1dGVIYXNoY29kZShkb2NQYXRoOiBzdHJpbmcpOiBQcm9taXNlPEhhc2hjb2RlPiB7XG5cbiAgICAgICAgY29uc3QgZmlsZUhhc2hNZXRhID0gYXdhaXQgUERGSW1wb3J0ZXIuY29tcHV0ZUhhc2hQcmVmaXgoZG9jUGF0aCk7XG5cbiAgICAgICAgY29uc3QgaGFzaGNvZGU6IEhhc2hjb2RlID0ge1xuICAgICAgICAgICAgZW5jOiBIYXNoRW5jb2RpbmcuQkFTRTU4Q0hFQ0ssXG4gICAgICAgICAgICBhbGc6IEhhc2hBbGdvcml0aG0uS0VDQ0FLMjU2LFxuICAgICAgICAgICAgZGF0YTogZmlsZUhhc2hNZXRhLmhhc2hjb2RlXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIGhhc2hjb2RlO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgYXN5bmMgY29tcHV0ZUhhc2hQcmVmaXgoZG9jUGF0aDogc3RyaW5nKTogUHJvbWlzZTxGaWxlSGFzaE1ldGE+IHtcblxuICAgICAgICBjb25zdCBpbnB1dFNvdXJjZSA9IGF3YWl0IElucHV0U291cmNlcy5vZlZhbHVlKGRvY1BhdGgpO1xuXG4gICAgICAgIGNvbnN0IGhhc2hjb2RlID0gYXdhaXQgSGFzaGNvZGVzLmNyZWF0ZUZyb21JbnB1dFNvdXJjZShpbnB1dFNvdXJjZSk7XG4gICAgICAgIGNvbnN0IGhhc2hQcmVmaXggPSBoYXNoY29kZS5zdWJzdHJpbmcoMCwgMTApO1xuXG4gICAgICAgIHJldHVybiB7IGhhc2hjb2RlLCBoYXNoUHJlZml4IH07XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBhc3luYyBpc1dpdGhpblN0YXNoZGlyKHN0YXNoRGlyOiBzdHJpbmcsIHBhdGg6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuXG4gICAgICAgIGNvbnN0IGN1cnJlbnREaXJuYW1lID0gYXdhaXQgRmlsZXMucmVhbHBhdGhBc3luYyhGaWxlUGF0aHMuZGlybmFtZShwYXRoKSk7XG5cbiAgICAgICAgc3Rhc2hEaXIgPSBhd2FpdCBGaWxlcy5yZWFscGF0aEFzeW5jKHN0YXNoRGlyKTtcblxuICAgICAgICByZXR1cm4gY3VycmVudERpcm5hbWUgPT09IHN0YXNoRGlyO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW1wb3J0ZWRGaWxlIHtcblxuICAgIC8qKlxuICAgICAqIFRoZSBEb2NJbmZvIGZvciB0aGUgZmlsZSB3ZSBqdXN0IGltcG9ydGVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRvY0luZm86IElEb2NJbmZvO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGJhc2VuYW1lIG9mIHRoZSBmaWxlIGltcG9ydGVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGJhc2VuYW1lOiBzdHJpbmc7XG5cbiAgICByZWFkb25seSBiYWNrZW5kRmlsZVJlZjogQmFja2VuZEZpbGVSZWY7XG5cbn1cblxuaW50ZXJmYWNlIEZpbGVIYXNoTWV0YSB7XG4gICAgcmVhZG9ubHkgaGFzaFByZWZpeDogc3RyaW5nO1xuXG4gICAgcmVhZG9ubHkgaGFzaGNvZGU6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIFBERkltcG9ydE9wdHMge1xuICAgIHJlYWRvbmx5IHBkZk1ldGE/OiBQREZNZXRhO1xufVxuIl19