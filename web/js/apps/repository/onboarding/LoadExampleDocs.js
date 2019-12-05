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
const AppPath_1 = require("../../../electron/app_path/AppPath");
const FilePaths_1 = require("polar-shared/src/util/FilePaths");
const PDFImporter_1 = require("../importers/PDFImporter");
const Providers_1 = require("polar-shared/src/util/Providers");
const Pagemarks_1 = require("../../../metadata/Pagemarks");
const Logger_1 = require("polar-shared/src/logger/Logger");
const ISODateTimeStrings_1 = require("polar-shared/src/metadata/ISODateTimeStrings");
const Optional_1 = require("polar-shared/src/util/ts/Optional");
const DocMetas_1 = require("../../../metadata/DocMetas");
const Backend_1 = require("polar-shared/src/datastore/Backend");
const AppRuntime_1 = require("../../../AppRuntime");
const LoadExampleDocsMeta_1 = require("./LoadExampleDocsMeta");
const Hashcode_1 = require("polar-shared/src/metadata/Hashcode");
const Hashcode_2 = require("polar-shared/src/metadata/Hashcode");
const BackendFileRefs_1 = require("../../../datastore/BackendFileRefs");
const log = Logger_1.Logger.create();
class LoadExampleDocs {
    constructor(persistenceLayer) {
        this.persistenceLayer = persistenceLayer;
        this.pdfImporter
            = new PDFImporter_1.PDFImporter(Providers_1.Providers.toInterface(Providers_1.Providers.of(this.persistenceLayer)));
    }
    load(onLoaded) {
        return __awaiter(this, void 0, void 0, function* () {
            if (yield this.hasDocs()) {
                log.debug("Docs already exist");
                return;
            }
            const promises = [
                this.doDoc0(),
                this.doDoc1(),
                this.doDoc2(),
                this.doDoc3(),
                this.doDoc4(),
                this.doDoc5(),
                this.doDoc6(),
                this.doDoc7()
            ];
            for (const promise of promises) {
                promise
                    .then(docMeta => {
                    if (docMeta) {
                        onLoaded(docMeta.docInfo);
                    }
                    else {
                        log.warn("Unable to load docMeta");
                    }
                }).catch(err => log.error("Unable to load docInfo: ", err));
            }
            yield Promise.all(promises);
        });
    }
    doDoc7() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.doDoc(FilePaths_1.FilePaths.join('docs', 'examples', 'pdf', 'dremel.pdf'), {
                fingerprint: "69cf32b9ffbb82056a3ac0eadea447de",
                title: "Dremel: Interactive Analysis of Web-Scale Datasets",
                tags: this.createTags('google', 'dremel', '/technology/google'),
                added: ISODateTimeStrings_1.ISODateTimeStrings.adjust(ISODateTimeStrings_1.ISODateTimeStrings.create(), '-2d'),
                lastUpdated: ISODateTimeStrings_1.ISODateTimeStrings.adjust(ISODateTimeStrings_1.ISODateTimeStrings.create(), '-8h'),
                pagemarkEnd: 1,
                url: "https://storage.googleapis.com/polar-32b0f.appspot.com/public/dremel.pdf",
                nrPages: 10,
                hashcode: {
                    enc: Hashcode_2.HashEncoding.BASE58CHECK,
                    alg: Hashcode_1.HashAlgorithm.KECCAK256,
                    data: "13e69EGrqZdoaAcKdzECCYwVkEAZ3HVsjh9UNccSjEcmTNCSRz"
                }
            });
        });
    }
    doDoc6() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.doDoc(FilePaths_1.FilePaths.join('docs', 'examples', 'pdf', 'datacenter-as-a-computer.pdf'), {
                fingerprint: "a81fe1c43148c3448e1a4133a5c8005e",
                title: "The Datacenter as a Computer",
                tags: this.createTags('google', 'datacenters', '/technology/google'),
                added: ISODateTimeStrings_1.ISODateTimeStrings.adjust(ISODateTimeStrings_1.ISODateTimeStrings.create(), '-2d'),
                lastUpdated: ISODateTimeStrings_1.ISODateTimeStrings.adjust(ISODateTimeStrings_1.ISODateTimeStrings.create(), '-8h'),
                pagemarkEnd: 2,
                url: "https://storage.googleapis.com/polar-32b0f.appspot.com/public/datacenter-as-a-computer.pdf",
                nrPages: 120,
                hashcode: {
                    enc: Hashcode_2.HashEncoding.BASE58CHECK,
                    alg: Hashcode_1.HashAlgorithm.KECCAK256,
                    data: "12gk1XzeM8rCLbSmPnHSNYqWPkJ4V4LQW7WLo1MFJfGJMQVVQzU"
                }
            });
        });
    }
    doDoc5() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.doDoc(FilePaths_1.FilePaths.join('docs', 'examples', 'pdf', 'chubby.pdf'), {
                fingerprint: "c29bc1717788b1602a3cf4ed28ddfbcd",
                title: "The Chubby lock service for loosely-coupled distributed systems",
                tags: this.createTags('google', 'chubby', '/technology/google'),
                added: ISODateTimeStrings_1.ISODateTimeStrings.adjust(ISODateTimeStrings_1.ISODateTimeStrings.create(), '-1d'),
                lastUpdated: ISODateTimeStrings_1.ISODateTimeStrings.adjust(ISODateTimeStrings_1.ISODateTimeStrings.create(), '-3h'),
                pagemarkEnd: 2,
                url: "https://storage.googleapis.com/polar-32b0f.appspot.com/public/chubby.pdf",
                nrPages: 16,
                hashcode: {
                    enc: Hashcode_2.HashEncoding.BASE58CHECK,
                    alg: Hashcode_1.HashAlgorithm.KECCAK256,
                    data: "12dVEYTS8znhWJNCYUcGHSfWKQqfifBmbShRLxbLvNVYX5BK3sS"
                }
            });
        });
    }
    doDoc4() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.doDoc(FilePaths_1.FilePaths.join('docs', 'examples', 'pdf', 'borg.pdf'), {
                fingerprint: "3417be32534083dea66d733604d36d75",
                title: "Large-scale cluster management at Google with Borg",
                tags: this.createTags('google', 'borg', 'docker', '/technology/docker'),
                added: ISODateTimeStrings_1.ISODateTimeStrings.adjust(ISODateTimeStrings_1.ISODateTimeStrings.create(), '-3d'),
                lastUpdated: ISODateTimeStrings_1.ISODateTimeStrings.adjust(ISODateTimeStrings_1.ISODateTimeStrings.create(), '-8h'),
                pagemarkEnd: 2,
                url: "https://storage.googleapis.com/polar-32b0f.appspot.com/public/borg.pdf",
                nrPages: 17,
                hashcode: {
                    enc: Hashcode_2.HashEncoding.BASE58CHECK,
                    alg: Hashcode_1.HashAlgorithm.KECCAK256,
                    data: "19YRZoEqfbhmY2GqQVKcbjfgbm1hZc5TwKdfUo3QW3TVz126bH"
                }
            });
        });
    }
    doDoc3() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.doDoc(FilePaths_1.FilePaths.join('docs', 'examples', 'pdf', 'availability.pdf'), {
                fingerprint: "39b730b6e9d281b0eae91b2c2c29b842",
                title: "Availability in Globally Distributed Storage Systems",
                tags: this.createTags('google', 'availability', '/technology/google'),
                added: ISODateTimeStrings_1.ISODateTimeStrings.adjust(ISODateTimeStrings_1.ISODateTimeStrings.create(), '-2d'),
                lastUpdated: ISODateTimeStrings_1.ISODateTimeStrings.adjust(ISODateTimeStrings_1.ISODateTimeStrings.create(), '-12h'),
                pagemarkEnd: 7,
                url: "https://storage.googleapis.com/polar-32b0f.appspot.com/public/availability.pdf",
                nrPages: 14,
                hashcode: {
                    enc: Hashcode_2.HashEncoding.BASE58CHECK,
                    alg: Hashcode_1.HashAlgorithm.KECCAK256,
                    data: "12Ji9JDcRnZT27jeckr4HusYY29QVwj4Wv2J6iYc5YXjtzn3ZJT"
                }
            });
        });
    }
    createTag(id, label) {
        return { id, label: label || id };
    }
    createTags(...labels) {
        const result = {};
        for (const label of labels) {
            const id = label;
            result[id] = { id, label };
        }
        return result;
    }
    doDoc0() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.doDoc(FilePaths_1.FilePaths.join('docs', 'examples', 'pdf', 'pub47492.pdf'), {
                fingerprint: "6ea16525b2e4eab7b946f68419a345a6",
                title: "Efficient Live Expansion for Clos Data Center Networks",
                tags: this.createTags('google', 'datacenters', '/technology/networks', '/technology/datacenters'),
                added: ISODateTimeStrings_1.ISODateTimeStrings.adjust(ISODateTimeStrings_1.ISODateTimeStrings.create(), '-2h'),
                lastUpdated: ISODateTimeStrings_1.ISODateTimeStrings.adjust(ISODateTimeStrings_1.ISODateTimeStrings.create(), '-1h'),
                pagemarkEnd: 17,
                url: "https://storage.googleapis.com/polar-32b0f.appspot.com/public/pub47492.pdf",
                nrPages: 20,
                hashcode: {
                    enc: Hashcode_2.HashEncoding.BASE58CHECK,
                    alg: Hashcode_1.HashAlgorithm.KECCAK256,
                    data: "1h62ktMPhAXXYgnFaDckCht164co4HcDR24WXu8xsvXV2RB1HA"
                }
            });
        });
    }
    doDoc1() {
        return __awaiter(this, void 0, void 0, function* () {
            const writtenDocMeta = yield this.doDoc(FilePaths_1.FilePaths.join('docs', 'examples', 'pdf', 'bigtable.pdf'), {
                fingerprint: "a2887850877ae33e1e66ea24f433e30f",
                title: "Bigtable: A Distributed Storage System for Structured Data",
                tags: {
                    google: this.createTag('google'),
                    bigtable: this.createTag('bigtable'),
                    compsci: this.createTag('compsci')
                },
                added: ISODateTimeStrings_1.ISODateTimeStrings.adjust(ISODateTimeStrings_1.ISODateTimeStrings.create(), '-2d'),
                lastUpdated: ISODateTimeStrings_1.ISODateTimeStrings.adjust(ISODateTimeStrings_1.ISODateTimeStrings.create(), '-1d'),
                flagged: true,
                url: "https://storage.googleapis.com/polar-32b0f.appspot.com/public/bigtable.pdf",
                nrPages: 14,
                hashcode: {
                    enc: Hashcode_2.HashEncoding.BASE58CHECK,
                    alg: Hashcode_1.HashAlgorithm.KECCAK256,
                    data: "1ag3DiKsWirunzx8s81iUL988AefnKouGa2DN2TMZxdZj9yZ4F"
                }
            });
            if (writtenDocMeta) {
                const docMeta = DocMetas_1.DocMetas.deserialize(JSON.stringify(LoadExampleDocsMeta_1.LoadExampleDocsMeta.BIGTABLE_DOC_META), writtenDocMeta.docInfo.fingerprint);
                docMeta.docInfo = writtenDocMeta.docInfo;
                yield this.persistenceLayer.writeDocMeta(docMeta);
                return docMeta;
            }
            else {
                return undefined;
            }
        });
    }
    doDoc2() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.doDoc(FilePaths_1.FilePaths.join('docs', 'examples', 'pdf', 'mapreduce.pdf'), {
                fingerprint: "9012f59fe537f2bb5fb802e31bb40e83",
                title: "MapReduce: Simplified Data Processing on Large Clusters",
                tags: {
                    google: this.createTag('google'),
                    mapreduce: this.createTag('mapreduce'),
                    compsci: this.createTag('compsci')
                },
                added: ISODateTimeStrings_1.ISODateTimeStrings.adjust(ISODateTimeStrings_1.ISODateTimeStrings.create(), '-3d'),
                lastUpdated: ISODateTimeStrings_1.ISODateTimeStrings.adjust(ISODateTimeStrings_1.ISODateTimeStrings.create(), '-2d'),
                pagemarkEnd: 6,
                url: "https://storage.googleapis.com/polar-32b0f.appspot.com/public/mapreduce.pdf",
                nrPages: 13,
                hashcode: {
                    enc: Hashcode_2.HashEncoding.BASE58CHECK,
                    alg: Hashcode_1.HashAlgorithm.KECCAK256,
                    data: "12PBhYxGA587Ap4D59ac1hNRXtKcj1uyWi9t3hTuRTQofbQTr3q"
                }
            });
        });
    }
    doDoc(relativePath, opts) {
        return __awaiter(this, void 0, void 0, function* () {
            const doImport = () => __awaiter(this, void 0, void 0, function* () {
                if (AppRuntime_1.AppRuntime.isElectron()) {
                    const pdfMeta = {
                        fingerprint: opts.fingerprint,
                        nrPages: opts.nrPages,
                        props: {}
                    };
                    const importedFile = yield this.doImport(relativePath, pdfMeta);
                    if (importedFile.isPresent()) {
                        const docInfo = importedFile.get().docInfo;
                        const docMeta = yield this.persistenceLayer.getDocMeta(docInfo.fingerprint);
                        const backendFileRef = importedFile.get().backendFileRef;
                        return {
                            docMeta: docMeta,
                            backendFileRef: backendFileRef
                        };
                    }
                    else {
                        throw new Error("Unable to do local import");
                    }
                }
                else {
                    const docMeta = DocMetas_1.DocMetas.create(opts.fingerprint, opts.nrPages);
                    const ref = {
                        name: FilePaths_1.FilePaths.basename(opts.url),
                        hashcode: opts.hashcode
                    };
                    docMeta.docInfo.backend = Backend_1.Backend.PUBLIC;
                    docMeta.docInfo.filename = ref.name;
                    docMeta.docInfo.hashcode = ref.hashcode;
                    return {
                        docMeta,
                        backendFileRef: BackendFileRefs_1.BackendFileRefs.toBackendFileRef(docMeta)
                    };
                }
            });
            const importedDoc = yield doImport();
            const docMeta = importedDoc.docMeta;
            if (docMeta) {
                docMeta.docInfo.title = opts.title;
                const tags = Object.assign(Object.assign({}, (opts.tags || {})), this.createTags('example'));
                docMeta.docInfo.tags = tags;
                if (opts.pagemarkEnd) {
                    Pagemarks_1.Pagemarks.updatePagemarksForRange(docMeta, opts.pagemarkEnd);
                }
                if (opts.added) {
                    docMeta.docInfo.added = opts.added;
                }
                if (opts.lastUpdated) {
                    docMeta.docInfo.lastUpdated = opts.lastUpdated;
                }
                docMeta.docInfo.flagged
                    = Optional_1.Optional.of(opts.flagged).getOrElse(false);
                log.info("Wrote to persistenceLayer: ", opts.title);
                yield this.persistenceLayer.writeDocMeta(docMeta);
                const datastore = this.persistenceLayer.datastore;
                if (datastore.id === 'firebase') {
                }
            }
            return docMeta;
        });
    }
    doImport(relativePath, pdfMeta) {
        return __awaiter(this, void 0, void 0, function* () {
            const appPath = AppPath_1.AppPath.get();
            if (!appPath) {
                return Optional_1.Optional.empty();
            }
            const path = FilePaths_1.FilePaths.join(appPath, relativePath);
            const basename = FilePaths_1.FilePaths.basename(relativePath);
            return yield this.pdfImporter.importFile(path, basename, { pdfMeta });
        });
    }
    hasDocs() {
        return __awaiter(this, void 0, void 0, function* () {
            const docMetaRefs = yield this.persistenceLayer.getDocMetaRefs();
            return docMetaRefs.length !== 0;
        });
    }
}
exports.LoadExampleDocs = LoadExampleDocs;
LoadExampleDocs.MAIN_ANNOTATIONS_EXAMPLE_FINGERPRINT = "a2887850877ae33e1e66ea24f433e30f";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9hZEV4YW1wbGVEb2NzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiTG9hZEV4YW1wbGVEb2NzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELCtEQUEwRDtBQUMxRCwwREFBbUU7QUFFbkUsK0RBQTBEO0FBQzFELDJEQUFzRDtBQUN0RCwyREFBc0Q7QUFDdEQscUZBQW1HO0FBQ25HLGdFQUEyRDtBQUUzRCx5REFBb0Q7QUFDcEQsZ0VBQTJEO0FBQzNELG9EQUErQztBQUMvQywrREFBMEQ7QUFFMUQsaUVBQWlFO0FBQ2pFLGlFQUFnRTtBQUloRSx3RUFBbUU7QUFPbkUsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLE1BQWEsZUFBZTtJQVF4QixZQUFZLGdCQUFrQztRQUMxQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUM7UUFFekMsSUFBSSxDQUFDLFdBQVc7Y0FDVixJQUFJLHlCQUFXLENBQ2IscUJBQVMsQ0FBQyxXQUFXLENBQ2pCLHFCQUFTLENBQUMsRUFBRSxDQUNSLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUU3QyxDQUFDO0lBRVksSUFBSSxDQUFDLFFBQXFDOztZQUVuRCxJQUFJLE1BQU0sSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFO2dCQUV0QixHQUFHLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUM7Z0JBQ2hDLE9BQU87YUFDVjtZQUlELE1BQU0sUUFBUSxHQUFHO2dCQUNiLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ2IsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDYixJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNiLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ2IsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDYixJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNiLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ2IsSUFBSSxDQUFDLE1BQU0sRUFBRTthQUNoQixDQUFDO1lBRUYsS0FBSyxNQUFNLE9BQU8sSUFBSSxRQUFRLEVBQUU7Z0JBRTVCLE9BQU87cUJBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFO29CQUVaLElBQUksT0FBTyxFQUFFO3dCQUNULFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7cUJBQzdCO3lCQUFNO3dCQUNILEdBQUcsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQztxQkFDdEM7Z0JBRVQsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQywwQkFBMEIsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBRS9EO1lBRUQsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRWhDLENBQUM7S0FBQTtJQUVhLE1BQU07O1lBQ2hCLE9BQU8sTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLHFCQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLFlBQVksQ0FBQyxFQUFFO2dCQUM3RSxXQUFXLEVBQUUsa0NBQWtDO2dCQUMvQyxLQUFLLEVBQUUsb0RBQW9EO2dCQUMzRCxJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLG9CQUFvQixDQUFDO2dCQUMvRCxLQUFLLEVBQUUsdUNBQWtCLENBQUMsTUFBTSxDQUFDLHVDQUFrQixDQUFDLE1BQU0sRUFBRSxFQUFFLEtBQUssQ0FBQztnQkFDcEUsV0FBVyxFQUFFLHVDQUFrQixDQUFDLE1BQU0sQ0FBQyx1Q0FBa0IsQ0FBQyxNQUFNLEVBQUUsRUFBRSxLQUFLLENBQUM7Z0JBQzFFLFdBQVcsRUFBRSxDQUFDO2dCQUNkLEdBQUcsRUFBRSwwRUFBMEU7Z0JBQy9FLE9BQU8sRUFBRSxFQUFFO2dCQUNYLFFBQVEsRUFBRTtvQkFDTixHQUFHLEVBQUUsdUJBQVksQ0FBQyxXQUFXO29CQUM3QixHQUFHLEVBQUUsd0JBQWEsQ0FBQyxTQUFTO29CQUM1QixJQUFJLEVBQUUsb0RBQW9EO2lCQUM3RDthQUNKLENBQUMsQ0FBQztRQUNQLENBQUM7S0FBQTtJQUVhLE1BQU07O1lBQ2hCLE9BQU8sTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLHFCQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLDhCQUE4QixDQUFDLEVBQUU7Z0JBQy9GLFdBQVcsRUFBRSxrQ0FBa0M7Z0JBQy9DLEtBQUssRUFBRSw4QkFBOEI7Z0JBQ3JDLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxhQUFhLEVBQUUsb0JBQW9CLENBQUM7Z0JBQ3BFLEtBQUssRUFBRSx1Q0FBa0IsQ0FBQyxNQUFNLENBQUMsdUNBQWtCLENBQUMsTUFBTSxFQUFFLEVBQUUsS0FBSyxDQUFDO2dCQUNwRSxXQUFXLEVBQUUsdUNBQWtCLENBQUMsTUFBTSxDQUFDLHVDQUFrQixDQUFDLE1BQU0sRUFBRSxFQUFFLEtBQUssQ0FBQztnQkFDMUUsV0FBVyxFQUFFLENBQUM7Z0JBQ2QsR0FBRyxFQUFFLDRGQUE0RjtnQkFDakcsT0FBTyxFQUFFLEdBQUc7Z0JBQ1osUUFBUSxFQUFFO29CQUNOLEdBQUcsRUFBRSx1QkFBWSxDQUFDLFdBQVc7b0JBQzdCLEdBQUcsRUFBRSx3QkFBYSxDQUFDLFNBQVM7b0JBQzVCLElBQUksRUFBRSxxREFBcUQ7aUJBQzlEO2FBQ0osQ0FBQyxDQUFDO1FBQ1AsQ0FBQztLQUFBO0lBRWEsTUFBTTs7WUFDaEIsT0FBTyxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMscUJBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsWUFBWSxDQUFDLEVBQUU7Z0JBQzdFLFdBQVcsRUFBRSxrQ0FBa0M7Z0JBQy9DLEtBQUssRUFBRSxpRUFBaUU7Z0JBQ3hFLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsb0JBQW9CLENBQUM7Z0JBQy9ELEtBQUssRUFBRSx1Q0FBa0IsQ0FBQyxNQUFNLENBQUMsdUNBQWtCLENBQUMsTUFBTSxFQUFFLEVBQUUsS0FBSyxDQUFDO2dCQUNwRSxXQUFXLEVBQUUsdUNBQWtCLENBQUMsTUFBTSxDQUFDLHVDQUFrQixDQUFDLE1BQU0sRUFBRSxFQUFFLEtBQUssQ0FBQztnQkFDMUUsV0FBVyxFQUFFLENBQUM7Z0JBQ2QsR0FBRyxFQUFFLDBFQUEwRTtnQkFDL0UsT0FBTyxFQUFFLEVBQUU7Z0JBQ1gsUUFBUSxFQUFFO29CQUNOLEdBQUcsRUFBRSx1QkFBWSxDQUFDLFdBQVc7b0JBQzdCLEdBQUcsRUFBRSx3QkFBYSxDQUFDLFNBQVM7b0JBQzVCLElBQUksRUFBRSxxREFBcUQ7aUJBQzlEO2FBQ0osQ0FBQyxDQUFDO1FBQ1AsQ0FBQztLQUFBO0lBRWEsTUFBTTs7WUFDaEIsT0FBTyxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMscUJBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsVUFBVSxDQUFDLEVBQUU7Z0JBQzNFLFdBQVcsRUFBRSxrQ0FBa0M7Z0JBQy9DLEtBQUssRUFBRSxvREFBb0Q7Z0JBQzNELElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLG9CQUFvQixDQUFDO2dCQUN2RSxLQUFLLEVBQUUsdUNBQWtCLENBQUMsTUFBTSxDQUFDLHVDQUFrQixDQUFDLE1BQU0sRUFBRSxFQUFFLEtBQUssQ0FBQztnQkFDcEUsV0FBVyxFQUFFLHVDQUFrQixDQUFDLE1BQU0sQ0FBQyx1Q0FBa0IsQ0FBQyxNQUFNLEVBQUUsRUFBRSxLQUFLLENBQUM7Z0JBQzFFLFdBQVcsRUFBRSxDQUFDO2dCQUNkLEdBQUcsRUFBRSx3RUFBd0U7Z0JBQzdFLE9BQU8sRUFBRSxFQUFFO2dCQUNYLFFBQVEsRUFBRTtvQkFDTixHQUFHLEVBQUUsdUJBQVksQ0FBQyxXQUFXO29CQUM3QixHQUFHLEVBQUUsd0JBQWEsQ0FBQyxTQUFTO29CQUM1QixJQUFJLEVBQUUsb0RBQW9EO2lCQUM3RDthQUVKLENBQUMsQ0FBQztRQUNQLENBQUM7S0FBQTtJQUVhLE1BQU07O1lBQ2hCLE9BQU8sTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLHFCQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLGtCQUFrQixDQUFDLEVBQUU7Z0JBQ25GLFdBQVcsRUFBRSxrQ0FBa0M7Z0JBQy9DLEtBQUssRUFBRSxzREFBc0Q7Z0JBQzdELElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxjQUFjLEVBQUUsb0JBQW9CLENBQUM7Z0JBQ3JFLEtBQUssRUFBRSx1Q0FBa0IsQ0FBQyxNQUFNLENBQUMsdUNBQWtCLENBQUMsTUFBTSxFQUFFLEVBQUUsS0FBSyxDQUFDO2dCQUNwRSxXQUFXLEVBQUUsdUNBQWtCLENBQUMsTUFBTSxDQUFDLHVDQUFrQixDQUFDLE1BQU0sRUFBRSxFQUFFLE1BQU0sQ0FBQztnQkFDM0UsV0FBVyxFQUFFLENBQUM7Z0JBQ2QsR0FBRyxFQUFFLGdGQUFnRjtnQkFDckYsT0FBTyxFQUFFLEVBQUU7Z0JBQ1gsUUFBUSxFQUFFO29CQUNOLEdBQUcsRUFBRSx1QkFBWSxDQUFDLFdBQVc7b0JBQzdCLEdBQUcsRUFBRSx3QkFBYSxDQUFDLFNBQVM7b0JBQzVCLElBQUksRUFBRSxxREFBcUQ7aUJBQzlEO2FBRUosQ0FBQyxDQUFDO1FBQ1AsQ0FBQztLQUFBO0lBRU8sU0FBUyxDQUFDLEVBQVUsRUFBRSxLQUFjO1FBQ3hDLE9BQU8sRUFBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssSUFBSSxFQUFFLEVBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRU8sVUFBVSxDQUFDLEdBQUcsTUFBZ0I7UUFFbEMsTUFBTSxNQUFNLEdBQXdCLEVBQUUsQ0FBQztRQUV2QyxLQUFLLE1BQU0sS0FBSyxJQUFJLE1BQU0sRUFBRTtZQUN4QixNQUFNLEVBQUUsR0FBRyxLQUFLLENBQUM7WUFDakIsTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUMsRUFBRSxFQUFFLEtBQUssRUFBQyxDQUFDO1NBQzVCO1FBRUQsT0FBTyxNQUFNLENBQUM7SUFFbEIsQ0FBQztJQUVhLE1BQU07O1lBRWhCLE9BQU8sTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLHFCQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLGNBQWMsQ0FBQyxFQUFFO2dCQUMvRSxXQUFXLEVBQUUsa0NBQWtDO2dCQUMvQyxLQUFLLEVBQUUsd0RBQXdEO2dCQUMvRCxJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsYUFBYSxFQUFFLHNCQUFzQixFQUFFLHlCQUF5QixDQUFDO2dCQUNqRyxLQUFLLEVBQUUsdUNBQWtCLENBQUMsTUFBTSxDQUFDLHVDQUFrQixDQUFDLE1BQU0sRUFBRSxFQUFFLEtBQUssQ0FBQztnQkFDcEUsV0FBVyxFQUFFLHVDQUFrQixDQUFDLE1BQU0sQ0FBQyx1Q0FBa0IsQ0FBQyxNQUFNLEVBQUUsRUFBRSxLQUFLLENBQUM7Z0JBQzFFLFdBQVcsRUFBRSxFQUFFO2dCQUNmLEdBQUcsRUFBRSw0RUFBNEU7Z0JBQ2pGLE9BQU8sRUFBRSxFQUFFO2dCQUNYLFFBQVEsRUFBRTtvQkFDTixHQUFHLEVBQUUsdUJBQVksQ0FBQyxXQUFXO29CQUM3QixHQUFHLEVBQUUsd0JBQWEsQ0FBQyxTQUFTO29CQUM1QixJQUFJLEVBQUUsb0RBQW9EO2lCQUM3RDthQUNKLENBQUMsQ0FBQztRQUVQLENBQUM7S0FBQTtJQUVhLE1BQU07O1lBRWhCLE1BQU0sY0FBYyxHQUFHLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxxQkFBUyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxjQUFjLENBQUMsRUFBRTtnQkFDL0YsV0FBVyxFQUFFLGtDQUFrQztnQkFDL0MsS0FBSyxFQUFFLDREQUE0RDtnQkFDbkUsSUFBSSxFQUFFO29CQUNGLE1BQU0sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQztvQkFDaEMsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDO29CQUNwQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUM7aUJBQ3JDO2dCQUNELEtBQUssRUFBRSx1Q0FBa0IsQ0FBQyxNQUFNLENBQUMsdUNBQWtCLENBQUMsTUFBTSxFQUFFLEVBQUUsS0FBSyxDQUFDO2dCQUNwRSxXQUFXLEVBQUUsdUNBQWtCLENBQUMsTUFBTSxDQUFDLHVDQUFrQixDQUFDLE1BQU0sRUFBRSxFQUFFLEtBQUssQ0FBQztnQkFFMUUsT0FBTyxFQUFFLElBQUk7Z0JBQ2IsR0FBRyxFQUFFLDRFQUE0RTtnQkFDakYsT0FBTyxFQUFFLEVBQUU7Z0JBQ1gsUUFBUSxFQUFFO29CQUNOLEdBQUcsRUFBRSx1QkFBWSxDQUFDLFdBQVc7b0JBQzdCLEdBQUcsRUFBRSx3QkFBYSxDQUFDLFNBQVM7b0JBQzVCLElBQUksRUFBRSxvREFBb0Q7aUJBQzdEO2FBQ0osQ0FBQyxDQUFDO1lBRUgsSUFBSSxjQUFjLEVBQUU7Z0JBR2hCLE1BQU0sT0FBTyxHQUFHLG1CQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMseUNBQW1CLENBQUMsaUJBQWlCLENBQUMsRUFDckQsY0FBZSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUUsQ0FBQztnQkFFM0UsT0FBTyxDQUFDLE9BQU8sR0FBRyxjQUFlLENBQUMsT0FBTyxDQUFDO2dCQUUxQyxNQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBRWxELE9BQU8sT0FBTyxDQUFDO2FBRWxCO2lCQUFNO2dCQUVILE9BQU8sU0FBUyxDQUFDO2FBQ3BCO1FBRUwsQ0FBQztLQUFBO0lBRWEsTUFBTTs7WUFFaEIsT0FBTyxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMscUJBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsZUFBZSxDQUFDLEVBQUU7Z0JBQ2hGLFdBQVcsRUFBRSxrQ0FBa0M7Z0JBQy9DLEtBQUssRUFBRSx5REFBeUQ7Z0JBQ2hFLElBQUksRUFBRTtvQkFDRixNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUM7b0JBQ2hDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQztvQkFDdEMsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDO2lCQUNyQztnQkFDRCxLQUFLLEVBQUUsdUNBQWtCLENBQUMsTUFBTSxDQUFDLHVDQUFrQixDQUFDLE1BQU0sRUFBRSxFQUFFLEtBQUssQ0FBQztnQkFDcEUsV0FBVyxFQUFFLHVDQUFrQixDQUFDLE1BQU0sQ0FBQyx1Q0FBa0IsQ0FBQyxNQUFNLEVBQUUsRUFBRSxLQUFLLENBQUM7Z0JBQzFFLFdBQVcsRUFBRSxDQUFDO2dCQUNkLEdBQUcsRUFBRSw2RUFBNkU7Z0JBQ2xGLE9BQU8sRUFBRSxFQUFFO2dCQUNYLFFBQVEsRUFBRTtvQkFDTixHQUFHLEVBQUUsdUJBQVksQ0FBQyxXQUFXO29CQUM3QixHQUFHLEVBQUUsd0JBQWEsQ0FBQyxTQUFTO29CQUM1QixJQUFJLEVBQUUscURBQXFEO2lCQUM5RDthQUNKLENBQUMsQ0FBQztRQUVQLENBQUM7S0FBQTtJQUVhLEtBQUssQ0FBQyxZQUFvQixFQUFFLElBQWE7O1lBRW5ELE1BQU0sUUFBUSxHQUFHLEdBQStCLEVBQUU7Z0JBRTlDLElBQUksdUJBQVUsQ0FBQyxVQUFVLEVBQUUsRUFBRTtvQkFFekIsTUFBTSxPQUFPLEdBQVk7d0JBQ3JCLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVzt3QkFDN0IsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO3dCQUNyQixLQUFLLEVBQUUsRUFBRTtxQkFDWixDQUFDO29CQUVGLE1BQU0sWUFBWSxHQUNkLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUM7b0JBRS9DLElBQUksWUFBWSxDQUFDLFNBQVMsRUFBRSxFQUFFO3dCQUUxQixNQUFNLE9BQU8sR0FBRyxZQUFZLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDO3dCQUMzQyxNQUFNLE9BQU8sR0FBRyxNQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO3dCQUM1RSxNQUFNLGNBQWMsR0FBRyxZQUFZLENBQUMsR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDO3dCQUV6RCxPQUFPOzRCQUNILE9BQU8sRUFBRSxPQUFROzRCQUNqQixjQUFjLEVBQUUsY0FBZTt5QkFDbEMsQ0FBQztxQkFFTDt5QkFBTTt3QkFDSCxNQUFNLElBQUksS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUM7cUJBQ2hEO2lCQUVKO3FCQUFNO29CQUVILE1BQU0sT0FBTyxHQUFHLG1CQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUVoRSxNQUFNLEdBQUcsR0FBWTt3QkFDakIsSUFBSSxFQUFFLHFCQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7d0JBQ2xDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtxQkFDMUIsQ0FBQztvQkFFRixPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxpQkFBTyxDQUFDLE1BQU0sQ0FBQztvQkFDekMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztvQkFDcEMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQztvQkFNeEMsT0FBTzt3QkFDSCxPQUFPO3dCQUNQLGNBQWMsRUFBRSxpQ0FBZSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBRTtxQkFDN0QsQ0FBQztpQkFFTDtZQUVMLENBQUMsQ0FBQSxDQUFDO1lBRUYsTUFBTSxXQUFXLEdBQUcsTUFBTSxRQUFRLEVBQUUsQ0FBQztZQUVyQyxNQUFNLE9BQU8sR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDO1lBRXBDLElBQUksT0FBTyxFQUFFO2dCQUNULE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7Z0JBRW5DLE1BQU0sSUFBSSxtQ0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLEdBQ2pCLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFFN0MsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO2dCQUU1QixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7b0JBQ2xCLHFCQUFTLENBQUMsdUJBQXVCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztpQkFDaEU7Z0JBRUQsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO29CQUNaLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7aUJBQ3RDO2dCQUVELElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtvQkFDbEIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztpQkFDbEQ7Z0JBRUQsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPO3NCQUNqQixtQkFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUVqRCxHQUFHLENBQUMsSUFBSSxDQUFDLDZCQUE2QixFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFFcEQsTUFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUVsRCxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDO2dCQUVsRCxJQUFJLFNBQVMsQ0FBQyxFQUFFLEtBQUssVUFBVSxFQUFFO2lCQUdoQzthQUVKO1lBRUQsT0FBTyxPQUFPLENBQUM7UUFHbkIsQ0FBQztLQUFBO0lBRWEsUUFBUSxDQUFDLFlBQW9CLEVBQUUsT0FBZ0I7O1lBRXpELE1BQU0sT0FBTyxHQUFHLGlCQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7WUFFOUIsSUFBSSxDQUFFLE9BQU8sRUFBRTtnQkFDWCxPQUFPLG1CQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDM0I7WUFFRCxNQUFNLElBQUksR0FBRyxxQkFBUyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDLENBQUM7WUFDbkQsTUFBTSxRQUFRLEdBQUcscUJBQVMsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7WUFFbEQsT0FBTyxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsRUFBQyxPQUFPLEVBQUMsQ0FBQyxDQUFDO1FBRXhFLENBQUM7S0FBQTtJQUVhLE9BQU87O1lBQ2pCLE1BQU0sV0FBVyxHQUFHLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxDQUFDO1lBRWpFLE9BQU8sV0FBVyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7UUFDcEMsQ0FBQztLQUFBOztBQXRYTCwwQ0F3WEM7QUF0WGlCLG9EQUFvQyxHQUFHLGtDQUFrQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBcHBQYXRofSBmcm9tICcuLi8uLi8uLi9lbGVjdHJvbi9hcHBfcGF0aC9BcHBQYXRoJztcbmltcG9ydCB7RmlsZVBhdGhzfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvRmlsZVBhdGhzJztcbmltcG9ydCB7SW1wb3J0ZWRGaWxlLCBQREZJbXBvcnRlcn0gZnJvbSAnLi4vaW1wb3J0ZXJzL1BERkltcG9ydGVyJztcbmltcG9ydCB7UGVyc2lzdGVuY2VMYXllcn0gZnJvbSAnLi4vLi4vLi4vZGF0YXN0b3JlL1BlcnNpc3RlbmNlTGF5ZXInO1xuaW1wb3J0IHtQcm92aWRlcnN9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC9Qcm92aWRlcnMnO1xuaW1wb3J0IHtQYWdlbWFya3N9IGZyb20gJy4uLy4uLy4uL21ldGFkYXRhL1BhZ2VtYXJrcyc7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7SVNPRGF0ZVRpbWVTdHJpbmcsIElTT0RhdGVUaW1lU3RyaW5nc30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9tZXRhZGF0YS9JU09EYXRlVGltZVN0cmluZ3MnO1xuaW1wb3J0IHtPcHRpb25hbH0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL3RzL09wdGlvbmFsJztcbmltcG9ydCB7RG9jTWV0YX0gZnJvbSAnLi4vLi4vLi4vbWV0YWRhdGEvRG9jTWV0YSc7XG5pbXBvcnQge0RvY01ldGFzfSBmcm9tICcuLi8uLi8uLi9tZXRhZGF0YS9Eb2NNZXRhcyc7XG5pbXBvcnQge0JhY2tlbmR9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvZGF0YXN0b3JlL0JhY2tlbmQnO1xuaW1wb3J0IHtBcHBSdW50aW1lfSBmcm9tICcuLi8uLi8uLi9BcHBSdW50aW1lJztcbmltcG9ydCB7TG9hZEV4YW1wbGVEb2NzTWV0YX0gZnJvbSAnLi9Mb2FkRXhhbXBsZURvY3NNZXRhJztcbmltcG9ydCB7SGFzaGNvZGV9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbWV0YWRhdGEvSGFzaGNvZGUnO1xuaW1wb3J0IHtIYXNoQWxnb3JpdGhtfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL21ldGFkYXRhL0hhc2hjb2RlJztcbmltcG9ydCB7SGFzaEVuY29kaW5nfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL21ldGFkYXRhL0hhc2hjb2RlJztcbmltcG9ydCB7RG9jSW5mb30gZnJvbSAnLi4vLi4vLi4vbWV0YWRhdGEvRG9jSW5mbyc7XG5pbXBvcnQge0RhdGFzdG9yZXN9IGZyb20gJy4uLy4uLy4uL2RhdGFzdG9yZS9EYXRhc3RvcmVzJztcbmltcG9ydCB7UERGTWV0YX0gZnJvbSAncG9sYXItcGRmL3NyYy9wZGYvUERGTWV0YWRhdGEnO1xuaW1wb3J0IHtCYWNrZW5kRmlsZVJlZnN9IGZyb20gJy4uLy4uLy4uL2RhdGFzdG9yZS9CYWNrZW5kRmlsZVJlZnMnO1xuaW1wb3J0IHtUYWd9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdGFncy9UYWdzJztcbmltcG9ydCB7SURvY0luZm99IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL21ldGFkYXRhL0lEb2NJbmZvXCI7XG5pbXBvcnQge0lEb2NNZXRhfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy9tZXRhZGF0YS9JRG9jTWV0YVwiO1xuaW1wb3J0IHtCYWNrZW5kRmlsZVJlZn0gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvZGF0YXN0b3JlL0JhY2tlbmRGaWxlUmVmXCI7XG5pbXBvcnQge0ZpbGVSZWZ9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL2RhdGFzdG9yZS9GaWxlUmVmXCI7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuZXhwb3J0IGNsYXNzIExvYWRFeGFtcGxlRG9jcyB7XG5cbiAgICBwdWJsaWMgc3RhdGljIE1BSU5fQU5OT1RBVElPTlNfRVhBTVBMRV9GSU5HRVJQUklOVCA9IFwiYTI4ODc4NTA4NzdhZTMzZTFlNjZlYTI0ZjQzM2UzMGZcIjtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgcGVyc2lzdGVuY2VMYXllcjogUGVyc2lzdGVuY2VMYXllcjtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgcGRmSW1wb3J0ZXI6IFBERkltcG9ydGVyO1xuXG4gICAgY29uc3RydWN0b3IocGVyc2lzdGVuY2VMYXllcjogUGVyc2lzdGVuY2VMYXllcikge1xuICAgICAgICB0aGlzLnBlcnNpc3RlbmNlTGF5ZXIgPSBwZXJzaXN0ZW5jZUxheWVyO1xuXG4gICAgICAgIHRoaXMucGRmSW1wb3J0ZXJcbiAgICAgICAgICAgID0gbmV3IFBERkltcG9ydGVyKFxuICAgICAgICAgICAgICAgIFByb3ZpZGVycy50b0ludGVyZmFjZShcbiAgICAgICAgICAgICAgICAgICAgUHJvdmlkZXJzLm9mKFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wZXJzaXN0ZW5jZUxheWVyKSkpO1xuXG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGxvYWQob25Mb2FkZWQ6IChkb2NJbmZvOiBJRG9jSW5mbykgPT4gdm9pZCkge1xuXG4gICAgICAgIGlmIChhd2FpdCB0aGlzLmhhc0RvY3MoKSkge1xuICAgICAgICAgICAgLy8gd2UncmUgZG9uZSBhcyB0aGVyZSBhbHJlYWR5IGRvY3MgaW4gdGhlIHJlcG9cbiAgICAgICAgICAgIGxvZy5kZWJ1ZyhcIkRvY3MgYWxyZWFkeSBleGlzdFwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE11c3QgdXNlIHByb21pc2UuYWxsIG9uIGZpcmViYXNlIGFzIHRoaXMgaXMgbXVjaCBmYXN0ZXIuICBMb2NhbGx5XG4gICAgICAgIC8vIGl0IHJlYWxseSBkb2Vzbid0IG1hdHRlci5cbiAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBbXG4gICAgICAgICAgICB0aGlzLmRvRG9jMCgpLFxuICAgICAgICAgICAgdGhpcy5kb0RvYzEoKSxcbiAgICAgICAgICAgIHRoaXMuZG9Eb2MyKCksXG4gICAgICAgICAgICB0aGlzLmRvRG9jMygpLFxuICAgICAgICAgICAgdGhpcy5kb0RvYzQoKSxcbiAgICAgICAgICAgIHRoaXMuZG9Eb2M1KCksXG4gICAgICAgICAgICB0aGlzLmRvRG9jNigpLFxuICAgICAgICAgICAgdGhpcy5kb0RvYzcoKVxuICAgICAgICBdO1xuXG4gICAgICAgIGZvciAoY29uc3QgcHJvbWlzZSBvZiBwcm9taXNlcykge1xuXG4gICAgICAgICAgICBwcm9taXNlXG4gICAgICAgICAgICAgICAgLnRoZW4oZG9jTWV0YSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGRvY01ldGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTG9hZGVkKGRvY01ldGEuZG9jSW5mbyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2cud2FybihcIlVuYWJsZSB0byBsb2FkIGRvY01ldGFcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IGxvZy5lcnJvcihcIlVuYWJsZSB0byBsb2FkIGRvY0luZm86IFwiLCBlcnIpKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBkb0RvYzcoKSB7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmRvRG9jKEZpbGVQYXRocy5qb2luKCdkb2NzJywgJ2V4YW1wbGVzJywgJ3BkZicsICdkcmVtZWwucGRmJyksIHtcbiAgICAgICAgICAgIGZpbmdlcnByaW50OiBcIjY5Y2YzMmI5ZmZiYjgyMDU2YTNhYzBlYWRlYTQ0N2RlXCIsXG4gICAgICAgICAgICB0aXRsZTogXCJEcmVtZWw6IEludGVyYWN0aXZlIEFuYWx5c2lzIG9mIFdlYi1TY2FsZSBEYXRhc2V0c1wiLFxuICAgICAgICAgICAgdGFnczogdGhpcy5jcmVhdGVUYWdzKCdnb29nbGUnLCAnZHJlbWVsJywgJy90ZWNobm9sb2d5L2dvb2dsZScpLFxuICAgICAgICAgICAgYWRkZWQ6IElTT0RhdGVUaW1lU3RyaW5ncy5hZGp1c3QoSVNPRGF0ZVRpbWVTdHJpbmdzLmNyZWF0ZSgpLCAnLTJkJyksXG4gICAgICAgICAgICBsYXN0VXBkYXRlZDogSVNPRGF0ZVRpbWVTdHJpbmdzLmFkanVzdChJU09EYXRlVGltZVN0cmluZ3MuY3JlYXRlKCksICctOGgnKSxcbiAgICAgICAgICAgIHBhZ2VtYXJrRW5kOiAxLFxuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vc3RvcmFnZS5nb29nbGVhcGlzLmNvbS9wb2xhci0zMmIwZi5hcHBzcG90LmNvbS9wdWJsaWMvZHJlbWVsLnBkZlwiLFxuICAgICAgICAgICAgbnJQYWdlczogMTAsXG4gICAgICAgICAgICBoYXNoY29kZToge1xuICAgICAgICAgICAgICAgIGVuYzogSGFzaEVuY29kaW5nLkJBU0U1OENIRUNLLFxuICAgICAgICAgICAgICAgIGFsZzogSGFzaEFsZ29yaXRobS5LRUNDQUsyNTYsXG4gICAgICAgICAgICAgICAgZGF0YTogXCIxM2U2OUVHcnFaZG9hQWNLZHpFQ0NZd1ZrRUFaM0hWc2poOVVOY2NTakVjbVROQ1NSelwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgZG9Eb2M2KCkge1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5kb0RvYyhGaWxlUGF0aHMuam9pbignZG9jcycsICdleGFtcGxlcycsICdwZGYnLCAnZGF0YWNlbnRlci1hcy1hLWNvbXB1dGVyLnBkZicpLCB7XG4gICAgICAgICAgICBmaW5nZXJwcmludDogXCJhODFmZTFjNDMxNDhjMzQ0OGUxYTQxMzNhNWM4MDA1ZVwiLFxuICAgICAgICAgICAgdGl0bGU6IFwiVGhlIERhdGFjZW50ZXIgYXMgYSBDb21wdXRlclwiLFxuICAgICAgICAgICAgdGFnczogdGhpcy5jcmVhdGVUYWdzKCdnb29nbGUnLCAnZGF0YWNlbnRlcnMnLCAnL3RlY2hub2xvZ3kvZ29vZ2xlJyksXG4gICAgICAgICAgICBhZGRlZDogSVNPRGF0ZVRpbWVTdHJpbmdzLmFkanVzdChJU09EYXRlVGltZVN0cmluZ3MuY3JlYXRlKCksICctMmQnKSxcbiAgICAgICAgICAgIGxhc3RVcGRhdGVkOiBJU09EYXRlVGltZVN0cmluZ3MuYWRqdXN0KElTT0RhdGVUaW1lU3RyaW5ncy5jcmVhdGUoKSwgJy04aCcpLFxuICAgICAgICAgICAgcGFnZW1hcmtFbmQ6IDIsXG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3BvbGFyLTMyYjBmLmFwcHNwb3QuY29tL3B1YmxpYy9kYXRhY2VudGVyLWFzLWEtY29tcHV0ZXIucGRmXCIsXG4gICAgICAgICAgICBuclBhZ2VzOiAxMjAsXG4gICAgICAgICAgICBoYXNoY29kZToge1xuICAgICAgICAgICAgICAgIGVuYzogSGFzaEVuY29kaW5nLkJBU0U1OENIRUNLLFxuICAgICAgICAgICAgICAgIGFsZzogSGFzaEFsZ29yaXRobS5LRUNDQUsyNTYsXG4gICAgICAgICAgICAgICAgZGF0YTogXCIxMmdrMVh6ZU04ckNMYlNtUG5IU05ZcVdQa0o0VjRMUVc3V0xvMU1GSmZHSk1RVlZRelVcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGRvRG9jNSgpIHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuZG9Eb2MoRmlsZVBhdGhzLmpvaW4oJ2RvY3MnLCAnZXhhbXBsZXMnLCAncGRmJywgJ2NodWJieS5wZGYnKSwge1xuICAgICAgICAgICAgZmluZ2VycHJpbnQ6IFwiYzI5YmMxNzE3Nzg4YjE2MDJhM2NmNGVkMjhkZGZiY2RcIixcbiAgICAgICAgICAgIHRpdGxlOiBcIlRoZSBDaHViYnkgbG9jayBzZXJ2aWNlIGZvciBsb29zZWx5LWNvdXBsZWQgZGlzdHJpYnV0ZWQgc3lzdGVtc1wiLFxuICAgICAgICAgICAgdGFnczogdGhpcy5jcmVhdGVUYWdzKCdnb29nbGUnLCAnY2h1YmJ5JywgJy90ZWNobm9sb2d5L2dvb2dsZScpLFxuICAgICAgICAgICAgYWRkZWQ6IElTT0RhdGVUaW1lU3RyaW5ncy5hZGp1c3QoSVNPRGF0ZVRpbWVTdHJpbmdzLmNyZWF0ZSgpLCAnLTFkJyksXG4gICAgICAgICAgICBsYXN0VXBkYXRlZDogSVNPRGF0ZVRpbWVTdHJpbmdzLmFkanVzdChJU09EYXRlVGltZVN0cmluZ3MuY3JlYXRlKCksICctM2gnKSxcbiAgICAgICAgICAgIHBhZ2VtYXJrRW5kOiAyLFxuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vc3RvcmFnZS5nb29nbGVhcGlzLmNvbS9wb2xhci0zMmIwZi5hcHBzcG90LmNvbS9wdWJsaWMvY2h1YmJ5LnBkZlwiLFxuICAgICAgICAgICAgbnJQYWdlczogMTYsXG4gICAgICAgICAgICBoYXNoY29kZToge1xuICAgICAgICAgICAgICAgIGVuYzogSGFzaEVuY29kaW5nLkJBU0U1OENIRUNLLFxuICAgICAgICAgICAgICAgIGFsZzogSGFzaEFsZ29yaXRobS5LRUNDQUsyNTYsXG4gICAgICAgICAgICAgICAgZGF0YTogXCIxMmRWRVlUUzh6bmhXSk5DWVVjR0hTZldLUXFmaWZCbWJTaFJMeGJMdk5WWVg1Qkszc1NcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGRvRG9jNCgpIHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuZG9Eb2MoRmlsZVBhdGhzLmpvaW4oJ2RvY3MnLCAnZXhhbXBsZXMnLCAncGRmJywgJ2JvcmcucGRmJyksIHtcbiAgICAgICAgICAgIGZpbmdlcnByaW50OiBcIjM0MTdiZTMyNTM0MDgzZGVhNjZkNzMzNjA0ZDM2ZDc1XCIsXG4gICAgICAgICAgICB0aXRsZTogXCJMYXJnZS1zY2FsZSBjbHVzdGVyIG1hbmFnZW1lbnQgYXQgR29vZ2xlIHdpdGggQm9yZ1wiLFxuICAgICAgICAgICAgdGFnczogdGhpcy5jcmVhdGVUYWdzKCdnb29nbGUnLCAnYm9yZycsICdkb2NrZXInLCAnL3RlY2hub2xvZ3kvZG9ja2VyJyksXG4gICAgICAgICAgICBhZGRlZDogSVNPRGF0ZVRpbWVTdHJpbmdzLmFkanVzdChJU09EYXRlVGltZVN0cmluZ3MuY3JlYXRlKCksICctM2QnKSxcbiAgICAgICAgICAgIGxhc3RVcGRhdGVkOiBJU09EYXRlVGltZVN0cmluZ3MuYWRqdXN0KElTT0RhdGVUaW1lU3RyaW5ncy5jcmVhdGUoKSwgJy04aCcpLFxuICAgICAgICAgICAgcGFnZW1hcmtFbmQ6IDIsXG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3BvbGFyLTMyYjBmLmFwcHNwb3QuY29tL3B1YmxpYy9ib3JnLnBkZlwiLFxuICAgICAgICAgICAgbnJQYWdlczogMTcsXG4gICAgICAgICAgICBoYXNoY29kZToge1xuICAgICAgICAgICAgICAgIGVuYzogSGFzaEVuY29kaW5nLkJBU0U1OENIRUNLLFxuICAgICAgICAgICAgICAgIGFsZzogSGFzaEFsZ29yaXRobS5LRUNDQUsyNTYsXG4gICAgICAgICAgICAgICAgZGF0YTogXCIxOVlSWm9FcWZiaG1ZMkdxUVZLY2JqZmdibTFoWmM1VHdLZGZVbzNRVzNUVnoxMjZiSFwiXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBkb0RvYzMoKSB7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmRvRG9jKEZpbGVQYXRocy5qb2luKCdkb2NzJywgJ2V4YW1wbGVzJywgJ3BkZicsICdhdmFpbGFiaWxpdHkucGRmJyksIHtcbiAgICAgICAgICAgIGZpbmdlcnByaW50OiBcIjM5YjczMGI2ZTlkMjgxYjBlYWU5MWIyYzJjMjliODQyXCIsXG4gICAgICAgICAgICB0aXRsZTogXCJBdmFpbGFiaWxpdHkgaW4gR2xvYmFsbHkgRGlzdHJpYnV0ZWQgU3RvcmFnZSBTeXN0ZW1zXCIsXG4gICAgICAgICAgICB0YWdzOiB0aGlzLmNyZWF0ZVRhZ3MoJ2dvb2dsZScsICdhdmFpbGFiaWxpdHknLCAnL3RlY2hub2xvZ3kvZ29vZ2xlJyksXG4gICAgICAgICAgICBhZGRlZDogSVNPRGF0ZVRpbWVTdHJpbmdzLmFkanVzdChJU09EYXRlVGltZVN0cmluZ3MuY3JlYXRlKCksICctMmQnKSxcbiAgICAgICAgICAgIGxhc3RVcGRhdGVkOiBJU09EYXRlVGltZVN0cmluZ3MuYWRqdXN0KElTT0RhdGVUaW1lU3RyaW5ncy5jcmVhdGUoKSwgJy0xMmgnKSxcbiAgICAgICAgICAgIHBhZ2VtYXJrRW5kOiA3LFxuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vc3RvcmFnZS5nb29nbGVhcGlzLmNvbS9wb2xhci0zMmIwZi5hcHBzcG90LmNvbS9wdWJsaWMvYXZhaWxhYmlsaXR5LnBkZlwiLFxuICAgICAgICAgICAgbnJQYWdlczogMTQsXG4gICAgICAgICAgICBoYXNoY29kZToge1xuICAgICAgICAgICAgICAgIGVuYzogSGFzaEVuY29kaW5nLkJBU0U1OENIRUNLLFxuICAgICAgICAgICAgICAgIGFsZzogSGFzaEFsZ29yaXRobS5LRUNDQUsyNTYsXG4gICAgICAgICAgICAgICAgZGF0YTogXCIxMkppOUpEY1JuWlQyN2plY2tyNEh1c1lZMjlRVndqNFd2Mko2aVljNVlYanR6bjNaSlRcIlxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlVGFnKGlkOiBzdHJpbmcsIGxhYmVsPzogc3RyaW5nKTogVGFnIHtcbiAgICAgICAgcmV0dXJuIHtpZCwgbGFiZWw6IGxhYmVsIHx8IGlkfTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZVRhZ3MoLi4ubGFiZWxzOiBzdHJpbmdbXSk6IHtbaWQ6IHN0cmluZ106IFRhZ30ge1xuXG4gICAgICAgIGNvbnN0IHJlc3VsdDoge1tpZDogc3RyaW5nXTogVGFnfSA9IHt9O1xuXG4gICAgICAgIGZvciAoY29uc3QgbGFiZWwgb2YgbGFiZWxzKSB7XG4gICAgICAgICAgICBjb25zdCBpZCA9IGxhYmVsO1xuICAgICAgICAgICAgcmVzdWx0W2lkXSA9IHtpZCwgbGFiZWx9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcblxuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgZG9Eb2MwKCkge1xuXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmRvRG9jKEZpbGVQYXRocy5qb2luKCdkb2NzJywgJ2V4YW1wbGVzJywgJ3BkZicsICdwdWI0NzQ5Mi5wZGYnKSwge1xuICAgICAgICAgICAgZmluZ2VycHJpbnQ6IFwiNmVhMTY1MjViMmU0ZWFiN2I5NDZmNjg0MTlhMzQ1YTZcIixcbiAgICAgICAgICAgIHRpdGxlOiBcIkVmZmljaWVudCBMaXZlIEV4cGFuc2lvbiBmb3IgQ2xvcyBEYXRhIENlbnRlciBOZXR3b3Jrc1wiLFxuICAgICAgICAgICAgdGFnczogdGhpcy5jcmVhdGVUYWdzKCdnb29nbGUnLCAnZGF0YWNlbnRlcnMnLCAnL3RlY2hub2xvZ3kvbmV0d29ya3MnLCAnL3RlY2hub2xvZ3kvZGF0YWNlbnRlcnMnKSxcbiAgICAgICAgICAgIGFkZGVkOiBJU09EYXRlVGltZVN0cmluZ3MuYWRqdXN0KElTT0RhdGVUaW1lU3RyaW5ncy5jcmVhdGUoKSwgJy0yaCcpLFxuICAgICAgICAgICAgbGFzdFVwZGF0ZWQ6IElTT0RhdGVUaW1lU3RyaW5ncy5hZGp1c3QoSVNPRGF0ZVRpbWVTdHJpbmdzLmNyZWF0ZSgpLCAnLTFoJyksXG4gICAgICAgICAgICBwYWdlbWFya0VuZDogMTcsXG4gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tL3BvbGFyLTMyYjBmLmFwcHNwb3QuY29tL3B1YmxpYy9wdWI0NzQ5Mi5wZGZcIixcbiAgICAgICAgICAgIG5yUGFnZXM6IDIwLFxuICAgICAgICAgICAgaGFzaGNvZGU6IHtcbiAgICAgICAgICAgICAgICBlbmM6IEhhc2hFbmNvZGluZy5CQVNFNThDSEVDSyxcbiAgICAgICAgICAgICAgICBhbGc6IEhhc2hBbGdvcml0aG0uS0VDQ0FLMjU2LFxuICAgICAgICAgICAgICAgIGRhdGE6IFwiMWg2Mmt0TVBoQVhYWWduRmFEY2tDaHQxNjRjbzRIY0RSMjRXWHU4eHN2WFYyUkIxSEFcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgZG9Eb2MxKCkge1xuXG4gICAgICAgIGNvbnN0IHdyaXR0ZW5Eb2NNZXRhID0gYXdhaXQgdGhpcy5kb0RvYyhGaWxlUGF0aHMuam9pbignZG9jcycsICdleGFtcGxlcycsICdwZGYnLCAnYmlndGFibGUucGRmJyksIHtcbiAgICAgICAgICAgIGZpbmdlcnByaW50OiBcImEyODg3ODUwODc3YWUzM2UxZTY2ZWEyNGY0MzNlMzBmXCIsXG4gICAgICAgICAgICB0aXRsZTogXCJCaWd0YWJsZTogQSBEaXN0cmlidXRlZCBTdG9yYWdlIFN5c3RlbSBmb3IgU3RydWN0dXJlZCBEYXRhXCIsXG4gICAgICAgICAgICB0YWdzOiB7XG4gICAgICAgICAgICAgICAgZ29vZ2xlOiB0aGlzLmNyZWF0ZVRhZygnZ29vZ2xlJyksXG4gICAgICAgICAgICAgICAgYmlndGFibGU6IHRoaXMuY3JlYXRlVGFnKCdiaWd0YWJsZScpLFxuICAgICAgICAgICAgICAgIGNvbXBzY2k6IHRoaXMuY3JlYXRlVGFnKCdjb21wc2NpJylcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhZGRlZDogSVNPRGF0ZVRpbWVTdHJpbmdzLmFkanVzdChJU09EYXRlVGltZVN0cmluZ3MuY3JlYXRlKCksICctMmQnKSxcbiAgICAgICAgICAgIGxhc3RVcGRhdGVkOiBJU09EYXRlVGltZVN0cmluZ3MuYWRqdXN0KElTT0RhdGVUaW1lU3RyaW5ncy5jcmVhdGUoKSwgJy0xZCcpLFxuICAgICAgICAgICAgLy8gcGFnZW1hcmtFbmQ6IDMsXG4gICAgICAgICAgICBmbGFnZ2VkOiB0cnVlLFxuICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vc3RvcmFnZS5nb29nbGVhcGlzLmNvbS9wb2xhci0zMmIwZi5hcHBzcG90LmNvbS9wdWJsaWMvYmlndGFibGUucGRmXCIsXG4gICAgICAgICAgICBuclBhZ2VzOiAxNCxcbiAgICAgICAgICAgIGhhc2hjb2RlOiB7XG4gICAgICAgICAgICAgICAgZW5jOiBIYXNoRW5jb2RpbmcuQkFTRTU4Q0hFQ0ssXG4gICAgICAgICAgICAgICAgYWxnOiBIYXNoQWxnb3JpdGhtLktFQ0NBSzI1NixcbiAgICAgICAgICAgICAgICBkYXRhOiBcIjFhZzNEaUtzV2lydW56eDhzODFpVUw5ODhBZWZuS291R2EyRE4yVE1aeGRaajl5WjRGXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHdyaXR0ZW5Eb2NNZXRhKSB7XG5cbiAgICAgICAgICAgIC8vIFRPRE86IHVzZSB0aGUgY29ycmVjdCBsYXN0VXBkYXRlIGFuZCBjcmVhdGVkIHRpbWVzLi4uXG4gICAgICAgICAgICBjb25zdCBkb2NNZXRhID0gRG9jTWV0YXMuZGVzZXJpYWxpemUoSlNPTi5zdHJpbmdpZnkoTG9hZEV4YW1wbGVEb2NzTWV0YS5CSUdUQUJMRV9ET0NfTUVUQSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3JpdHRlbkRvY01ldGEhLmRvY0luZm8uZmluZ2VycHJpbnQgKTtcblxuICAgICAgICAgICAgZG9jTWV0YS5kb2NJbmZvID0gd3JpdHRlbkRvY01ldGEhLmRvY0luZm87XG5cbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGVyc2lzdGVuY2VMYXllci53cml0ZURvY01ldGEoZG9jTWV0YSk7XG5cbiAgICAgICAgICAgIHJldHVybiBkb2NNZXRhO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyB0aGlzIGlzIHByb2JhYmx5IGluIGEgdGVzdGluZyBlbnYuLi5cbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgZG9Eb2MyKCkge1xuXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmRvRG9jKEZpbGVQYXRocy5qb2luKCdkb2NzJywgJ2V4YW1wbGVzJywgJ3BkZicsICdtYXByZWR1Y2UucGRmJyksIHtcbiAgICAgICAgICAgIGZpbmdlcnByaW50OiBcIjkwMTJmNTlmZTUzN2YyYmI1ZmI4MDJlMzFiYjQwZTgzXCIsXG4gICAgICAgICAgICB0aXRsZTogXCJNYXBSZWR1Y2U6IFNpbXBsaWZpZWQgRGF0YSBQcm9jZXNzaW5nIG9uIExhcmdlIENsdXN0ZXJzXCIsXG4gICAgICAgICAgICB0YWdzOiB7XG4gICAgICAgICAgICAgICAgZ29vZ2xlOiB0aGlzLmNyZWF0ZVRhZygnZ29vZ2xlJyksXG4gICAgICAgICAgICAgICAgbWFwcmVkdWNlOiB0aGlzLmNyZWF0ZVRhZygnbWFwcmVkdWNlJyksXG4gICAgICAgICAgICAgICAgY29tcHNjaTogdGhpcy5jcmVhdGVUYWcoJ2NvbXBzY2knKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFkZGVkOiBJU09EYXRlVGltZVN0cmluZ3MuYWRqdXN0KElTT0RhdGVUaW1lU3RyaW5ncy5jcmVhdGUoKSwgJy0zZCcpLFxuICAgICAgICAgICAgbGFzdFVwZGF0ZWQ6IElTT0RhdGVUaW1lU3RyaW5ncy5hZGp1c3QoSVNPRGF0ZVRpbWVTdHJpbmdzLmNyZWF0ZSgpLCAnLTJkJyksXG4gICAgICAgICAgICBwYWdlbWFya0VuZDogNixcbiAgICAgICAgICAgIHVybDogXCJodHRwczovL3N0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vcG9sYXItMzJiMGYuYXBwc3BvdC5jb20vcHVibGljL21hcHJlZHVjZS5wZGZcIixcbiAgICAgICAgICAgIG5yUGFnZXM6IDEzLFxuICAgICAgICAgICAgaGFzaGNvZGU6IHtcbiAgICAgICAgICAgICAgICBlbmM6IEhhc2hFbmNvZGluZy5CQVNFNThDSEVDSyxcbiAgICAgICAgICAgICAgICBhbGc6IEhhc2hBbGdvcml0aG0uS0VDQ0FLMjU2LFxuICAgICAgICAgICAgICAgIGRhdGE6IFwiMTJQQmhZeEdBNTg3QXA0RDU5YWMxaE5SWHRLY2oxdXlXaTl0M2hUdVJUUW9mYlFUcjNxXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGRvRG9jKHJlbGF0aXZlUGF0aDogc3RyaW5nLCBvcHRzOiBEb2NPcHRzKTogUHJvbWlzZTxJRG9jTWV0YXwgdW5kZWZpbmVkPiB7XG5cbiAgICAgICAgY29uc3QgZG9JbXBvcnQgPSBhc3luYyAoKTogUHJvbWlzZTxJbXBvcnRlZERvYz4gPT4ge1xuXG4gICAgICAgICAgICBpZiAoQXBwUnVudGltZS5pc0VsZWN0cm9uKCkpIHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHBkZk1ldGE6IFBERk1ldGEgPSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbmdlcnByaW50OiBvcHRzLmZpbmdlcnByaW50LFxuICAgICAgICAgICAgICAgICAgICBuclBhZ2VzOiBvcHRzLm5yUGFnZXMsXG4gICAgICAgICAgICAgICAgICAgIHByb3BzOiB7fVxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBjb25zdCBpbXBvcnRlZEZpbGUgPVxuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmRvSW1wb3J0KHJlbGF0aXZlUGF0aCwgcGRmTWV0YSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoaW1wb3J0ZWRGaWxlLmlzUHJlc2VudCgpKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZG9jSW5mbyA9IGltcG9ydGVkRmlsZS5nZXQoKS5kb2NJbmZvO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkb2NNZXRhID0gYXdhaXQgdGhpcy5wZXJzaXN0ZW5jZUxheWVyLmdldERvY01ldGEoZG9jSW5mby5maW5nZXJwcmludCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJhY2tlbmRGaWxlUmVmID0gaW1wb3J0ZWRGaWxlLmdldCgpLmJhY2tlbmRGaWxlUmVmO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2NNZXRhOiBkb2NNZXRhISxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tlbmRGaWxlUmVmOiBiYWNrZW5kRmlsZVJlZiFcbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuYWJsZSB0byBkbyBsb2NhbCBpbXBvcnRcIik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZG9jTWV0YSA9IERvY01ldGFzLmNyZWF0ZShvcHRzLmZpbmdlcnByaW50LCBvcHRzLm5yUGFnZXMpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgcmVmOiBGaWxlUmVmID0ge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBGaWxlUGF0aHMuYmFzZW5hbWUob3B0cy51cmwpLFxuICAgICAgICAgICAgICAgICAgICBoYXNoY29kZTogb3B0cy5oYXNoY29kZVxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBkb2NNZXRhLmRvY0luZm8uYmFja2VuZCA9IEJhY2tlbmQuUFVCTElDO1xuICAgICAgICAgICAgICAgIGRvY01ldGEuZG9jSW5mby5maWxlbmFtZSA9IHJlZi5uYW1lO1xuICAgICAgICAgICAgICAgIGRvY01ldGEuZG9jSW5mby5oYXNoY29kZSA9IHJlZi5oYXNoY29kZTtcblxuICAgICAgICAgICAgICAgIC8vIG5vdGUgdGhhdCB3ZSBkbyBOT1QgbmVlZCB0byB3cml0ZSB0byB0aGUgZGF0YXN0b3JlIGhlcmVcbiAgICAgICAgICAgICAgICAvLyBhcyB3ZSB3aWxsIHdyaXRlIGJlbG93IGFuZCBGaXJlYmFzZSBpcyBhIGJpdCBzbG93ZXIgZm9yXG4gICAgICAgICAgICAgICAgLy8gd3JpdGVzIHNvIHdlIHdhbnQgdG8ga2VlcCB0aGluZ3MgYXMgZmFzdCBhcyBwb3NzaWJsZS5cblxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGRvY01ldGEsXG4gICAgICAgICAgICAgICAgICAgIGJhY2tlbmRGaWxlUmVmOiBCYWNrZW5kRmlsZVJlZnMudG9CYWNrZW5kRmlsZVJlZihkb2NNZXRhKSFcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBpbXBvcnRlZERvYyA9IGF3YWl0IGRvSW1wb3J0KCk7XG5cbiAgICAgICAgY29uc3QgZG9jTWV0YSA9IGltcG9ydGVkRG9jLmRvY01ldGE7XG5cbiAgICAgICAgaWYgKGRvY01ldGEpIHtcbiAgICAgICAgICAgIGRvY01ldGEuZG9jSW5mby50aXRsZSA9IG9wdHMudGl0bGU7XG5cbiAgICAgICAgICAgIGNvbnN0IHRhZ3MgPSB7Li4uKG9wdHMudGFncyB8fCB7fSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuY3JlYXRlVGFncygnZXhhbXBsZScpfTtcblxuICAgICAgICAgICAgZG9jTWV0YS5kb2NJbmZvLnRhZ3MgPSB0YWdzO1xuXG4gICAgICAgICAgICBpZiAob3B0cy5wYWdlbWFya0VuZCkge1xuICAgICAgICAgICAgICAgIFBhZ2VtYXJrcy51cGRhdGVQYWdlbWFya3NGb3JSYW5nZShkb2NNZXRhLCBvcHRzLnBhZ2VtYXJrRW5kKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG9wdHMuYWRkZWQpIHtcbiAgICAgICAgICAgICAgICBkb2NNZXRhLmRvY0luZm8uYWRkZWQgPSBvcHRzLmFkZGVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAob3B0cy5sYXN0VXBkYXRlZCkge1xuICAgICAgICAgICAgICAgIGRvY01ldGEuZG9jSW5mby5sYXN0VXBkYXRlZCA9IG9wdHMubGFzdFVwZGF0ZWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRvY01ldGEuZG9jSW5mby5mbGFnZ2VkXG4gICAgICAgICAgICAgICAgPSBPcHRpb25hbC5vZihvcHRzLmZsYWdnZWQpLmdldE9yRWxzZShmYWxzZSk7XG5cbiAgICAgICAgICAgIGxvZy5pbmZvKFwiV3JvdGUgdG8gcGVyc2lzdGVuY2VMYXllcjogXCIsIG9wdHMudGl0bGUpO1xuXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBlcnNpc3RlbmNlTGF5ZXIud3JpdGVEb2NNZXRhKGRvY01ldGEpO1xuXG4gICAgICAgICAgICBjb25zdCBkYXRhc3RvcmUgPSB0aGlzLnBlcnNpc3RlbmNlTGF5ZXIuZGF0YXN0b3JlO1xuXG4gICAgICAgICAgICBpZiAoZGF0YXN0b3JlLmlkID09PSAnZmlyZWJhc2UnKSB7XG4gICAgICAgICAgICAgICAgLy8gbm9vcCBmb3Igbm93Li4gYmFja2luZyBvdXQgdXNhZ2Ugb2YgbWV0YWRhdGEgYXMgaXQncyBleHBlbnNpdmVcbiAgICAgICAgICAgICAgICAvLyB0byBzdG9yZSB0aGlzIG1ldGFkYXRhIGFuZCB3ZSByZWFsbHkgZG9uJ3QgbmVlZCBpdFxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZG9jTWV0YTtcblxuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBkb0ltcG9ydChyZWxhdGl2ZVBhdGg6IHN0cmluZywgcGRmTWV0YTogUERGTWV0YSk6IFByb21pc2U8T3B0aW9uYWw8SW1wb3J0ZWRGaWxlPj4ge1xuXG4gICAgICAgIGNvbnN0IGFwcFBhdGggPSBBcHBQYXRoLmdldCgpO1xuXG4gICAgICAgIGlmICghIGFwcFBhdGgpIHtcbiAgICAgICAgICAgIHJldHVybiBPcHRpb25hbC5lbXB0eSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcGF0aCA9IEZpbGVQYXRocy5qb2luKGFwcFBhdGgsIHJlbGF0aXZlUGF0aCk7XG4gICAgICAgIGNvbnN0IGJhc2VuYW1lID0gRmlsZVBhdGhzLmJhc2VuYW1lKHJlbGF0aXZlUGF0aCk7XG5cbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMucGRmSW1wb3J0ZXIuaW1wb3J0RmlsZShwYXRoLCBiYXNlbmFtZSwge3BkZk1ldGF9KTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgaGFzRG9jcygpIHtcbiAgICAgICAgY29uc3QgZG9jTWV0YVJlZnMgPSBhd2FpdCB0aGlzLnBlcnNpc3RlbmNlTGF5ZXIuZ2V0RG9jTWV0YVJlZnMoKTtcblxuICAgICAgICByZXR1cm4gZG9jTWV0YVJlZnMubGVuZ3RoICE9PSAwO1xuICAgIH1cblxufVxuXG5pbnRlcmZhY2UgRG9jT3B0cyB7XG5cbiAgICByZWFkb25seSBmaW5nZXJwcmludDogc3RyaW5nO1xuXG4gICAgcmVhZG9ubHkgdGl0bGU6IHN0cmluZztcblxuICAgIHJlYWRvbmx5IHBhZ2VtYXJrRW5kPzogbnVtYmVyO1xuXG4gICAgcmVhZG9ubHkgdGFncz86IHtbaWQ6IHN0cmluZ106IFRhZ307XG5cbiAgICByZWFkb25seSBhZGRlZD86IElTT0RhdGVUaW1lU3RyaW5nO1xuXG4gICAgcmVhZG9ubHkgZmxhZ2dlZD86IGJvb2xlYW47XG5cbiAgICByZWFkb25seSBsYXN0VXBkYXRlZD86IElTT0RhdGVUaW1lU3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogUmVxdWlyZXMgc28gdGhhdCB3ZSBjYW4gY3JlYXRlIHRoZSBEb2NNZXRhIGluIGNhc2VzIHdoZXJ3ZSB3ZSdyZSBhZGRpbmdcbiAgICAgKiB3aXRoIGFuIGV4cGxpdC9leHRlcm5hbCBVUkwuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbnJQYWdlczogbnVtYmVyO1xuXG4gICAgcmVhZG9ubHkgdXJsOiBzdHJpbmc7XG5cbiAgICByZWFkb25seSBoYXNoY29kZTogSGFzaGNvZGU7XG5cbn1cblxuaW50ZXJmYWNlIEltcG9ydGVkRG9jIHtcblxuICAgIHJlYWRvbmx5IGRvY01ldGE6IElEb2NNZXRhO1xuICAgIHJlYWRvbmx5IGJhY2tlbmRGaWxlUmVmOiBCYWNrZW5kRmlsZVJlZjtcblxufVxuIl19