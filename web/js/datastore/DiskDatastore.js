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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Datastore_1 = require("./Datastore");
const Preconditions_1 = require("polar-shared/src/Preconditions");
const Logger_1 = require("polar-shared/src/logger/Logger");
const Files_1 = require("polar-shared/src/util/Files");
const FilePaths_1 = require("polar-shared/src/util/FilePaths");
const Directories_1 = require("./Directories");
const fs_1 = __importDefault(require("fs"));
const os_1 = __importDefault(require("os"));
const Backend_1 = require("polar-shared/src/datastore/Backend");
const Optional_1 = require("polar-shared/src/util/ts/Optional");
const Platforms_1 = require("polar-shared/src/util/Platforms");
const DatastoreFiles_1 = require("./DatastoreFiles");
const DatastoreMutation_1 = require("./DatastoreMutation");
const Datastores_1 = require("./Datastores");
const Functions_1 = require("polar-shared/src/util/Functions");
const ISODateTimeStrings_1 = require("polar-shared/src/metadata/ISODateTimeStrings");
const Stopwatches_1 = require("polar-shared/src/util/Stopwatches");
const Prefs_1 = require("../util/prefs/Prefs");
const Datastore_2 = require("./Datastore");
const Preconditions_2 = require("polar-shared/src/Preconditions");
const DatastoreMutations_1 = require("./DatastoreMutations");
const Strings_1 = require("polar-shared/src/util/Strings");
const log = Logger_1.Logger.create();
class DiskDatastore extends Datastore_1.AbstractDatastore {
    constructor() {
        super();
        this.id = 'disk';
        this.directories = new Directories_1.Directories();
        this.dataDir = this.directories.dataDir;
        this.dataDirConfig = this.directories.dataDirConfig;
        this.stashDir = this.directories.stashDir;
        this.filesDir = this.directories.filesDir;
        this.logsDir = this.directories.logsDir;
        this.diskPrefsStore = new DiskPrefsStore(this.directories);
    }
    init(errorListener = Functions_1.NULL_FUNCTION) {
        return __awaiter(this, void 0, void 0, function* () {
            const diskInitResult = yield this.directories.init();
            const doInitInfo = () => __awaiter(this, void 0, void 0, function* () {
                const hasDatastoreInfo = () => __awaiter(this, void 0, void 0, function* () {
                    const datastoreInfo = yield this.info();
                    return datastoreInfo.isPresent();
                });
                if (yield hasDatastoreInfo()) {
                    return;
                }
                const stopwatch = Stopwatches_1.Stopwatches.create();
                const docMetaRefs = yield this.getDocMetaRefs();
                const addedValues = [];
                for (const docMetaRef of docMetaRefs) {
                    const data = yield this.getDocMeta(docMetaRef.fingerprint);
                    if (data) {
                        try {
                            const docMeta = JSON.parse(data);
                            if (docMeta && docMeta.docInfo && docMeta.docInfo.added) {
                                addedValues.push(docMeta.docInfo.added);
                            }
                        }
                        catch (e) {
                            log.warn("Unable to parse doc meta with fingerprint: " + docMetaRef.fingerprint);
                        }
                    }
                }
                const created = addedValues.length > 0 ? addedValues.sort()[0] : ISODateTimeStrings_1.ISODateTimeStrings.create();
                const datastoreInfo = { created };
                const msg = "Writing new datastore info: " + JSON.stringify(datastoreInfo);
                log.info(msg);
                yield this.writeInfo(datastoreInfo);
                log.info(msg + " ... " + stopwatch.stop());
            });
            yield doInitInfo();
            yield this.diskPrefsStore.init();
            return diskInitResult;
        });
    }
    stop() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    contains(fingerprint) {
        return __awaiter(this, void 0, void 0, function* () {
            const docDir = FilePaths_1.FilePaths.join(this.dataDir, fingerprint);
            if (!(yield Files_1.Files.existsAsync(docDir))) {
                return false;
            }
            const statePath = FilePaths_1.FilePaths.join(docDir, 'state.json');
            return yield Files_1.Files.existsAsync(statePath);
        });
    }
    delete(docMetaFileRef, datastoreMutation = new DatastoreMutation_1.DefaultDatastoreMutation()) {
        return __awaiter(this, void 0, void 0, function* () {
            const deleteDelegate = () => __awaiter(this, void 0, void 0, function* () {
                const docDir = FilePaths_1.FilePaths.join(this.dataDir, docMetaFileRef.fingerprint);
                const statePath = FilePaths_1.FilePaths.join(docDir, 'state.json');
                let deleteFilePromise = Promise.resolve();
                if (docMetaFileRef.docFile && docMetaFileRef.docFile.name) {
                    deleteFilePromise = this.deleteFile(Backend_1.Backend.STASH, docMetaFileRef.docFile);
                }
                log.info(`Deleting statePath ${statePath} and file: `, docMetaFileRef.docFile);
                const deleteStatePathPromise = Files_1.Files.deleteAsync(statePath);
                log.debug("Waiting for state delete...");
                const docMetaFile = yield deleteStatePathPromise;
                log.debug("Waiting for state delete...done");
                log.debug("Waiting for file delete...");
                yield deleteFilePromise;
                log.debug("Waiting for file delete...done");
                return {
                    docMetaFile
                };
            });
            return yield DatastoreMutations_1.DatastoreMutations.handle(() => __awaiter(this, void 0, void 0, function* () { return deleteDelegate(); }), datastoreMutation, () => true);
        });
    }
    getDocMeta(fingerprint) {
        return __awaiter(this, void 0, void 0, function* () {
            const docDir = FilePaths_1.FilePaths.join(this.dataDir, fingerprint);
            const statePath = FilePaths_1.FilePaths.join(docDir, 'state.json');
            if (!(yield this.contains(fingerprint))) {
                return null;
            }
            const statePathStat = yield Files_1.Files.statAsync(statePath);
            if (!statePathStat.isFile()) {
                log.error("Path is not a file: ", statePath);
                return null;
            }
            const canAccess = yield Files_1.Files.accessAsync(statePath, fs_1.default.constants.R_OK | fs_1.default.constants.W_OK)
                .then(() => true)
                .catch(() => false);
            if (!canAccess) {
                log.error("No access: ", statePath);
                return null;
            }
            const buffer = yield Files_1.Files.readFileAsync(statePath);
            return buffer.toString('utf8');
        });
    }
    writeFile(backend, ref, data, opts = new Datastore_2.DefaultWriteFileOpts()) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!Preconditions_2.isPresent(data)) {
                if (opts.updateMeta) {
                    return this.getFile(backend, ref);
                }
                else {
                    throw new Error("No data present");
                }
            }
            const meta = opts.meta || {};
            DatastoreFiles_1.DatastoreFiles.assertSanitizedFileName(ref);
            const fileReference = this.createFileReference(backend, ref);
            yield Files_1.Files.createDirAsync(fileReference.dir);
            const diskData = data;
            yield Files_1.Files.writeFileAsync(fileReference.path, diskData, { existing: 'link' });
            yield Files_1.Files.writeFileAsync(fileReference.metaPath, JSON.stringify(meta, null, '  '), { atomic: true });
            return this.createDatastoreFile(backend, ref, fileReference);
        });
    }
    getFile(backend, ref, opts = {}) {
        Datastores_1.Datastores.assertNetworkLayer(this, opts.networkLayer);
        DatastoreFiles_1.DatastoreFiles.assertSanitizedFileName(ref);
        const fileReference = this.createFileReference(backend, ref);
        return this.createDatastoreFile(backend, ref, fileReference);
    }
    containsFile(backend, ref) {
        DatastoreFiles_1.DatastoreFiles.assertSanitizedFileName(ref);
        const fileReference = this.createFileReference(backend, ref);
        return Files_1.Files.existsAsync(fileReference.path);
    }
    deleteFile(backend, ref) {
        return __awaiter(this, void 0, void 0, function* () {
            DatastoreFiles_1.DatastoreFiles.assertSanitizedFileName(ref);
            const fileReference = this.createFileReference(backend, ref);
            yield Files_1.Files.removeAsync(fileReference.path);
            yield Files_1.Files.removeAsync(fileReference.metaPath);
        });
    }
    write(fingerprint, data, docInfo, opts = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const datastoreMutation = opts.datastoreMutation || new DatastoreMutation_1.DefaultDatastoreMutation();
            const writeDelegate = () => __awaiter(this, void 0, void 0, function* () {
                yield this.handleWriteFile(opts);
                Preconditions_1.Preconditions.assertPresent(data, "data");
                Preconditions_1.Preconditions.assertTypeOf(data, "string", "data", () => log.error("Failed with data: ", data));
                if (data.length === 0) {
                    throw new Error("Invalid data");
                }
                if (data[0] !== '{') {
                    throw new Error("Not JSON");
                }
                log.info("Performing sync of content into disk datastore");
                const docDir = FilePaths_1.FilePaths.join(this.dataDir, fingerprint);
                yield Files_1.Files.createDirAsync(docDir);
                log.debug("Calling stat on docDir: " + docDir);
                const stat = yield Files_1.Files.statAsync(docDir);
                if (!stat.isDirectory()) {
                    throw new Error("Path is not a directory: " + docDir);
                }
                const statePath = FilePaths_1.FilePaths.join(docDir, "state.json");
                log.info(`Writing data to state file: ${statePath}`);
                yield Files_1.Files.writeFileAsync(statePath, data, { encoding: 'utf8', atomic: true });
            });
            yield DatastoreMutations_1.DatastoreMutations.handle(() => __awaiter(this, void 0, void 0, function* () { return writeDelegate(); }), datastoreMutation, () => true);
        });
    }
    getDocMetaRefs() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!(yield Files_1.Files.existsAsync(this.dataDir))) {
                return [];
            }
            const entries = yield Files_1.Files.readdirAsync(this.dataDir);
            const result = [];
            for (const entry of entries) {
                const docMetaDir = FilePaths_1.FilePaths.join(this.dataDir, entry);
                const docMetaDirStat = yield Files_1.Files.statAsync(docMetaDir);
                if (docMetaDirStat.isDirectory()) {
                    const stateFile = FilePaths_1.FilePaths.join(this.dataDir, entry, 'state.json');
                    const exists = yield Files_1.Files.existsAsync(stateFile);
                    if (exists) {
                        result.push({ fingerprint: entry });
                    }
                }
            }
            return result;
        });
    }
    snapshot(docMetaSnapshotEventListener, errorListener = Functions_1.NULL_FUNCTION) {
        return __awaiter(this, void 0, void 0, function* () {
            return Datastores_1.Datastores.createCommittedSnapshot(this, docMetaSnapshotEventListener);
        });
    }
    createBackup() {
        return __awaiter(this, void 0, void 0, function* () {
            const dataDir = this.directories.dataDir;
            const now = new Date();
            const ordYear = now.getUTCFullYear();
            const ordMonth = now.getUTCMonth() + 1;
            const ordDay = now.getUTCDate();
            const year = Strings_1.Strings.lpad(ordYear, '0', 4);
            const month = Strings_1.Strings.lpad(ordMonth, '0', 2);
            const day = Strings_1.Strings.lpad(ordDay, '0', 2);
            const backupDir = FilePaths_1.FilePaths.join(dataDir, `.backup-${year}-${month}-${day}`);
            const acceptPredicate = (path) => {
                return path.indexOf(".backup-") === -1;
            };
            if (yield Files_1.Files.existsAsync(backupDir)) {
                log.warn("Not creating backup.  Already exists: ", backupDir);
            }
            else {
                log.notice("Creating backup to: " + backupDir);
                yield Files_1.Files.createDirectorySnapshot(dataDir, backupDir, acceptPredicate);
            }
        });
    }
    addDocMetaSnapshotEventListener(docMetaSnapshotEventListener) {
    }
    info() {
        return __awaiter(this, void 0, void 0, function* () {
            const infoPath = FilePaths_1.FilePaths.join(this.dataDir, 'info.json');
            if (yield Files_1.Files.existsAsync(infoPath)) {
                const data = yield Files_1.Files.readFileAsync(infoPath);
                try {
                    const result = JSON.parse(data.toString('utf-8'));
                    return Optional_1.Optional.of(result);
                }
                catch (e) {
                    yield Files_1.Files.deleteAsync(infoPath);
                    log.warn("Unable to read info.json file.");
                    return Optional_1.Optional.empty();
                }
            }
            return Optional_1.Optional.empty();
        });
    }
    overview() {
        return __awaiter(this, void 0, void 0, function* () {
            const docMetaRefs = yield this.getDocMetaRefs();
            const datastoreInfo = yield this.info();
            const created = datastoreInfo.map(info => info.created).getOrUndefined();
            return { nrDocs: docMetaRefs.length, created };
        });
    }
    capabilities() {
        const networkLayers = new Set(['local']);
        return {
            networkLayers,
            permission: { mode: 'rw' }
        };
    }
    writeInfo(datastoreInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            const infoPath = FilePaths_1.FilePaths.join(this.dataDir, 'info.json');
            const json = JSON.stringify(datastoreInfo, null, "  ");
            yield Files_1.Files.writeFileAsync(infoPath, json, { atomic: true });
        });
    }
    getPrefs() {
        const diskPrefsStore = this.diskPrefsStore;
        return {
            get() {
                return {
                    prefs: diskPrefsStore.getPrefs(),
                    unsubscribe: Functions_1.NULL_FUNCTION
                };
            }
        };
    }
    createDatastoreFile(backend, ref, fileReference) {
        const fileURL = FilePaths_1.FilePaths.toURL(fileReference.path);
        const url = new URL(fileURL);
        return {
            backend,
            ref,
            url: url.href,
        };
    }
    createFileReference(backend, ref) {
        let dir;
        if (backend === Backend_1.Backend.STASH) {
            dir = FilePaths_1.FilePaths.join(this.dataDir, backend.toString().toLowerCase());
        }
        else {
            dir = FilePaths_1.FilePaths.join(this.filesDir, backend.toString().toLowerCase());
        }
        const path = FilePaths_1.FilePaths.join(dir, ref.name);
        const metaPath = FilePaths_1.FilePaths.join(dir, ref.name + '.meta');
        return { dir, path, metaPath };
    }
    static getDataDirs() {
        const userHome = this.getUserHome();
        const platform = Platforms_1.Platforms.get();
        return this.getDataDirsForPlatform({ userHome, platform });
    }
    static determineProperDirectory(directorySet) {
        return __awaiter(this, void 0, void 0, function* () {
            for (const path of directorySet.paths) {
                if (yield Files_1.Files.existsAsync(path)) {
                    return path;
                }
            }
            return directorySet.preferredPath;
        });
    }
    static getDataDirsForPlatform(dirRuntime) {
        const { userHome, platform } = dirRuntime;
        switch (platform) {
            case Platforms_1.Platform.WINDOWS: {
                const preferredPath = FilePaths_1.FilePaths.join(userHome, "Polar");
                return {
                    paths: [
                        FilePaths_1.FilePaths.join(userHome, ".polar"),
                        preferredPath
                    ],
                    preferredPath
                };
            }
            case Platforms_1.Platform.LINUX: {
                const preferredPath = FilePaths_1.FilePaths.join(userHome, ".config", "Polar");
                return {
                    paths: [
                        FilePaths_1.FilePaths.join(userHome, ".polar"),
                    ],
                    preferredPath
                };
            }
            case Platforms_1.Platform.MACOS: {
                const preferredPath = FilePaths_1.FilePaths.join(userHome, "Library", "Application Support", "Polar");
                return {
                    paths: [
                        FilePaths_1.FilePaths.join(userHome, ".polar"),
                        preferredPath,
                    ],
                    preferredPath
                };
            }
            default:
                throw new Error("Platform not supported: " + platform);
        }
    }
    static getUserHome() {
        const ENV_NAME = process.platform === 'win32' ? 'USERPROFILE' : 'HOME';
        let result = process.env[ENV_NAME];
        if (!result) {
            result = os_1.default.homedir();
        }
        return result;
    }
}
exports.DiskDatastore = DiskDatastore;
class DiskPrefsStore {
    constructor(directories) {
        this.directories = directories;
        this.prefs = new DiskPrefs(this);
        this.path = FilePaths_1.FilePaths.create(this.directories.configDir, "prefs.json");
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            if (yield Files_1.Files.existsAsync(this.path)) {
                log.info("Loaded prefs from: " + this.path);
                const data = yield Files_1.Files.readFileAsync(this.path);
                const prefs = JSON.parse(data.toString("UTF-8"));
                this.prefs.update(prefs);
            }
        });
    }
    getPrefs() {
        return this.prefs;
    }
    commit() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = JSON.stringify(this.prefs.toDict(), null, "  ");
            yield Files_1.Files.writeFileAsync(this.path, data, { atomic: true });
        });
    }
}
exports.DiskPrefsStore = DiskPrefsStore;
class DiskPrefs extends Prefs_1.Prefs {
    constructor(diskPrefsStore) {
        super();
        this.delegate = {};
        this.diskPrefsStore = diskPrefsStore;
    }
    get(key) {
        return Optional_1.Optional.of(this.delegate[key]);
    }
    set(key, value) {
        this.delegate[key] = value;
    }
    update(dict) {
        for (const key of Object.keys(dict)) {
            const value = dict[key];
            this.delegate[key] = value;
        }
    }
    toDict() {
        return Object.assign({}, this.delegate);
    }
    commit() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.diskPrefsStore.commit();
        });
    }
}
exports.DiskPrefs = DiskPrefs;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGlza0RhdGFzdG9yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkRpc2tEYXRhc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FZcUI7QUFFckIsa0VBQTZEO0FBQzdELDJEQUFzRDtBQUV0RCx1REFBMkU7QUFDM0UsK0RBQTBEO0FBQzFELCtDQUEwQztBQUUxQyw0Q0FBb0I7QUFDcEIsNENBQW9CO0FBRXBCLGdFQUEyRDtBQUUzRCxnRUFBMkQ7QUFFM0QsK0RBQW9FO0FBQ3BFLHFEQUFnRDtBQUNoRCwyREFBZ0Y7QUFDaEYsNkNBQXdDO0FBQ3hDLCtEQUE4RDtBQUM5RCxxRkFBZ0Y7QUFFaEYsbUVBQThEO0FBQzlELCtDQUErRTtBQUMvRSwyQ0FBaUQ7QUFJakQsa0VBQXlEO0FBR3pELDZEQUF3RDtBQUl4RCwyREFBc0Q7QUFFdEQsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLE1BQWEsYUFBYyxTQUFRLDZCQUFpQjtJQWtCaEQ7UUFFSSxLQUFLLEVBQUUsQ0FBQztRQWxCSSxPQUFFLEdBQUcsTUFBTSxDQUFDO1FBc0J4QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUkseUJBQVcsRUFBRSxDQUFDO1FBR3JDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUM7UUFDeEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQztRQUNwRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDO1FBQzFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUM7UUFDMUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQztRQUN4QyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksY0FBYyxD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LENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO0lBQy9CLENBQUM7SUFFTSxNQUFNLENBQUMsSUFBd0I7UUFFbEMsS0FBSyxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2pDLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztTQUM5QjtJQUVMLENBQUM7SUFFTSxNQUFNO1FBQ1QseUJBQVcsSUFBSSxDQUFDLFFBQVEsRUFBRTtJQUM5QixDQUFDO0lBRVksTUFBTTs7WUFDZixPQUFPLE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUM5QyxDQUFDO0tBQUE7Q0FHSjtBQXJDRCw4QkFxQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIEFic3RyYWN0RGF0YXN0b3JlLFxuICAgIERhdGFzdG9yZSxcbiAgICBEYXRhc3RvcmVJbmZvLFxuICAgIERhdGFzdG9yZU92ZXJ2aWV3LFxuICAgIERhdGFzdG9yZVByZWZzLFxuICAgIERlbGV0ZVJlc3VsdCxcbiAgICBEb2NNZXRhU25hcHNob3RFdmVudExpc3RlbmVyLFxuICAgIEVycm9yTGlzdGVuZXIsXG4gICAgSW5pdFJlc3VsdCxcbiAgICBQcmVmc1Byb3ZpZGVyLFxuICAgIFNuYXBzaG90UmVzdWx0XG59IGZyb20gJy4vRGF0YXN0b3JlJztcbmltcG9ydCB7V3JpdGVGaWxlT3B0c30gZnJvbSAnLi9EYXRhc3RvcmUnO1xuaW1wb3J0IHtQcmVjb25kaXRpb25zfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL1ByZWNvbmRpdGlvbnMnO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge0RvY01ldGFGaWxlUmVmLCBEb2NNZXRhUmVmfSBmcm9tICcuL0RvY01ldGFSZWYnO1xuaW1wb3J0IHtGaWxlRGVsZXRlZCwgRmlsZUhhbmRsZSwgRmlsZXN9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC9GaWxlcyc7XG5pbXBvcnQge0ZpbGVQYXRoc30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL0ZpbGVQYXRocyc7XG5pbXBvcnQge0RpcmVjdG9yaWVzfSBmcm9tICcuL0RpcmVjdG9yaWVzJztcblxuaW1wb3J0IGZzIGZyb20gJ2ZzJztcbmltcG9ydCBvcyBmcm9tICdvcyc7XG5cbmltcG9ydCB7QmFja2VuZH0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9kYXRhc3RvcmUvQmFja2VuZCc7XG5pbXBvcnQge0RvY0ZpbGVNZXRhfSBmcm9tICcuL0RvY0ZpbGVNZXRhJztcbmltcG9ydCB7T3B0aW9uYWx9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC90cy9PcHRpb25hbCc7XG5pbXBvcnQge0RvY0luZm99IGZyb20gJy4uL21ldGFkYXRhL0RvY0luZm8nO1xuaW1wb3J0IHtQbGF0Zm9ybSwgUGxhdGZvcm1zfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy91dGlsL1BsYXRmb3Jtc1wiO1xuaW1wb3J0IHtEYXRhc3RvcmVGaWxlc30gZnJvbSAnLi9EYXRhc3RvcmVGaWxlcyc7XG5pbXBvcnQge0RhdGFzdG9yZU11dGF0aW9uLCBEZWZhdWx0RGF0YXN0b3JlTXV0YXRpb259IGZyb20gJy4vRGF0YXN0b3JlTXV0YXRpb24nO1xuaW1wb3J0IHtEYXRhc3RvcmVzfSBmcm9tICcuL0RhdGFzdG9yZXMnO1xuaW1wb3J0IHtOVUxMX0ZVTkNUSU9OfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvRnVuY3Rpb25zJztcbmltcG9ydCB7SVNPRGF0ZVRpbWVTdHJpbmdzfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL21ldGFkYXRhL0lTT0RhdGVUaW1lU3RyaW5ncyc7XG5pbXBvcnQge0RvY01ldGF9IGZyb20gJy4uL21ldGFkYXRhL0RvY01ldGEnO1xuaW1wb3J0IHtTdG9wd2F0Y2hlc30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL1N0b3B3YXRjaGVzJztcbmltcG9ydCB7UGVyc2lzdGVudFByZWZzLCBQcmVmcywgU3RyaW5nVG9TdHJpbmdEaWN0fSBmcm9tICcuLi91dGlsL3ByZWZzL1ByZWZzJztcbmltcG9ydCB7RGVmYXVsdFdyaXRlRmlsZU9wdHN9IGZyb20gJy4vRGF0YXN0b3JlJztcbmltcG9ydCB7RGF0YXN0b3JlQ2FwYWJpbGl0aWVzfSBmcm9tICcuL0RhdGFzdG9yZSc7XG5pbXBvcnQge05ldHdvcmtMYXllcn0gZnJvbSAnLi9EYXRhc3RvcmUnO1xuaW1wb3J0IHtHZXRGaWxlT3B0c30gZnJvbSAnLi9EYXRhc3RvcmUnO1xuaW1wb3J0IHtpc1ByZXNlbnR9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvUHJlY29uZGl0aW9ucyc7XG5pbXBvcnQge0JpbmFyeUZpbGVEYXRhfSBmcm9tICcuL0RhdGFzdG9yZSc7XG5pbXBvcnQge1dyaXRlT3B0c30gZnJvbSAnLi9EYXRhc3RvcmUnO1xuaW1wb3J0IHtEYXRhc3RvcmVNdXRhdGlvbnN9IGZyb20gJy4vRGF0YXN0b3JlTXV0YXRpb25zJztcbmltcG9ydCB7IElEb2NJbmZvIH0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9tZXRhZGF0YS9JRG9jSW5mbyc7XG5pbXBvcnQge0lEb2NNZXRhfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy9tZXRhZGF0YS9JRG9jTWV0YVwiO1xuaW1wb3J0IHtGaWxlUmVmfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy9kYXRhc3RvcmUvRmlsZVJlZlwiO1xuaW1wb3J0IHtTdHJpbmdzfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy91dGlsL1N0cmluZ3NcIjtcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG5leHBvcnQgY2xhc3MgRGlza0RhdGFzdG9yZSBleHRlbmRzIEFic3RyYWN0RGF0YXN0b3JlIGltcGxlbWVudHMgRGF0YXN0b3JlIHtcblxuICAgIHB1YmxpYyByZWFkb25seSBpZCA9ICdkaXNrJztcblxuICAgIHB1YmxpYyByZWFkb25seSBkYXRhRGlyOiBzdHJpbmc7XG5cbiAgICBwdWJsaWMgcmVhZG9ubHkgc3Rhc2hEaXI6IHN0cmluZztcblxuICAgIHB1YmxpYyByZWFkb25seSBmaWxlc0Rpcjogc3RyaW5nO1xuXG4gICAgcHVibGljIHJlYWRvbmx5IGxvZ3NEaXI6IHN0cmluZztcblxuICAgIHB1YmxpYyByZWFkb25seSBkYXRhRGlyQ29uZmlnOiBEYXRhRGlyQ29uZmlnO1xuXG4gICAgcHVibGljIHJlYWRvbmx5IGRpcmVjdG9yaWVzOiBEaXJlY3RvcmllcztcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgZGlza1ByZWZzU3RvcmU6IERpc2tQcmVmc1N0b3JlO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICAvLyBUT0RPOiBtaWdyYXRlIHRoaXMgdG8gdXNlIERpcmVjdG9yaWVzXG5cbiAgICAgICAgdGhpcy5kaXJlY3RvcmllcyA9IG5ldyBEaXJlY3RvcmllcygpO1xuXG4gICAgICAgIC8vIHRoZSBwYXRoIHRvIHRoZSBzdGFzaCBkaXJlY3RvcnlcbiAgICAgICAgdGhpcy5kYXRhRGlyID0gdGhpcy5kaXJlY3Rvcmllcy5kYXRhRGlyO1xuICAgICAgICB0aGlzLmRhdGFEaXJDb25maWcgPSB0aGlzLmRpcmVjdG9yaWVzLmRhdGFEaXJDb25maWc7XG4gICAgICAgIHRoaXMuc3Rhc2hEaXIgPSB0aGlzLmRpcmVjdG9yaWVzLnN0YXNoRGlyO1xuICAgICAgICB0aGlzLmZpbGVzRGlyID0gdGhpcy5kaXJlY3Rvcmllcy5maWxlc0RpcjtcbiAgICAgICAgdGhpcy5sb2dzRGlyID0gdGhpcy5kaXJlY3Rvcmllcy5sb2dzRGlyO1xuICAgICAgICB0aGlzLmRpc2tQcmVmc1N0b3JlID0gbmV3IERpc2tQcmVmc1N0b3JlKHRoaXMuZGlyZWN0b3JpZXMpO1xuXG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGluaXQoZXJyb3JMaXN0ZW5lcjogRXJyb3JMaXN0ZW5lciA9IE5VTExfRlVOQ1RJT04pOiBQcm9taXNlPERpc2tJbml0UmVzdWx0PiB7XG5cbiAgICAgICAgY29uc3QgZGlza0luaXRSZXN1bHQgPSBhd2FpdCB0aGlzLmRpcmVjdG9yaWVzLmluaXQoKTtcblxuICAgICAgICBjb25zdCBkb0luaXRJbmZvID0gYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBoYXNEYXRhc3RvcmVJbmZvID0gYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YXN0b3JlSW5mbyA9IGF3YWl0IHRoaXMuaW5mbygpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGFzdG9yZUluZm8uaXNQcmVzZW50KCk7XG5cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmIChhd2FpdCBoYXNEYXRhc3RvcmVJbmZvKCkpIHtcbiAgICAgICAgICAgICAgICAvLyB3ZSdyZSBhbHJlYWR5IGRvbmUuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBzdG9wd2F0Y2ggPSBTdG9wd2F0Y2hlcy5jcmVhdGUoKTtcblxuICAgICAgICAgICAgY29uc3QgZG9jTWV0YVJlZnMgPSBhd2FpdCB0aGlzLmdldERvY01ldGFSZWZzKCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGFkZGVkVmFsdWVzOiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGRvY01ldGFSZWYgb2YgZG9jTWV0YVJlZnMpIHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLmdldERvY01ldGEoZG9jTWV0YVJlZi5maW5nZXJwcmludCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoZGF0YSkge1xuXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkb2NNZXRhOiBJRG9jTWV0YSA9IEpTT04ucGFyc2UoZGF0YSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkb2NNZXRhICYmIGRvY01ldGEuZG9jSW5mbyAmJiBkb2NNZXRhLmRvY0luZm8uYWRkZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRlZFZhbHVlcy5wdXNoKGRvY01ldGEuZG9jSW5mby5hZGRlZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9nLndhcm4oXCJVbmFibGUgdG8gcGFyc2UgZG9jIG1ldGEgd2l0aCBmaW5nZXJwcmludDogXCIgKyBkb2NNZXRhUmVmLmZpbmdlcnByaW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGNyZWF0ZWQgPSBhZGRlZFZhbHVlcy5sZW5ndGggPiAwID8gYWRkZWRWYWx1ZXMuc29ydCgpWzBdIDogSVNPRGF0ZVRpbWVTdHJpbmdzLmNyZWF0ZSgpO1xuXG4gICAgICAgICAgICBjb25zdCBkYXRhc3RvcmVJbmZvOiBEYXRhc3RvcmVJbmZvID0ge2NyZWF0ZWR9O1xuXG4gICAgICAgICAgICBjb25zdCBtc2cgPSBcIldyaXRpbmcgbmV3IGRhdGFzdG9yZSBpbmZvOiBcIiArIEpTT04uc3RyaW5naWZ5KGRhdGFzdG9yZUluZm8pO1xuXG4gICAgICAgICAgICBsb2cuaW5mbyhtc2cpO1xuXG4gICAgICAgICAgICBhd2FpdCB0aGlzLndyaXRlSW5mbyhkYXRhc3RvcmVJbmZvKTtcblxuICAgICAgICAgICAgbG9nLmluZm8obXNnICsgXCIgLi4uIFwiICsgc3RvcHdhdGNoLnN0b3AoKSk7XG5cbiAgICAgICAgfTtcblxuICAgICAgICBhd2FpdCBkb0luaXRJbmZvKCk7XG4gICAgICAgIGF3YWl0IHRoaXMuZGlza1ByZWZzU3RvcmUuaW5pdCgpO1xuXG4gICAgICAgIHJldHVybiBkaXNrSW5pdFJlc3VsdDtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgc3RvcCgpIHtcbiAgICAgICAgLy8gbm9vcFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybiB0cnVlIGlmIHRoZSBEaXNrRGF0YXN0b3JlIGNvbnRhaW5zIGEgZG9jdW1lbnQgZm9yIHRoZSBnaXZlblxuICAgICAqIGZpbmdlcnByaW50LlxuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyBjb250YWlucyhmaW5nZXJwcmludDogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG5cbiAgICAgICAgY29uc3QgZG9jRGlyID0gRmlsZVBhdGhzLmpvaW4odGhpcy5kYXRhRGlyLCBmaW5nZXJwcmludCk7XG5cbiAgICAgICAgaWYgKCAhIGF3YWl0IEZpbGVzLmV4aXN0c0FzeW5jKGRvY0RpcikpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHN0YXRlUGF0aCA9IEZpbGVQYXRocy5qb2luKGRvY0RpciwgJ3N0YXRlLmpzb24nKTtcblxuICAgICAgICByZXR1cm4gYXdhaXQgRmlsZXMuZXhpc3RzQXN5bmMoc3RhdGVQYXRoKTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlbGV0ZSB0aGUgRG9jTWV0YSBmaWxlIGFuZCB0aGUgdW5kZXJseWluZyBkb2MgZnJvbSB0aGUgc3Rhc2guXG4gICAgICpcbiAgICAgKi9cbiAgICBwdWJsaWMgYXN5bmMgZGVsZXRlKGRvY01ldGFGaWxlUmVmOiBEb2NNZXRhRmlsZVJlZixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFzdG9yZU11dGF0aW9uOiBEYXRhc3RvcmVNdXRhdGlvbjxib29sZWFuPiA9IG5ldyBEZWZhdWx0RGF0YXN0b3JlTXV0YXRpb24oKSk6XG4gICAgICAgIFByb21pc2U8UmVhZG9ubHk8RGlza0RlbGV0ZVJlc3VsdD4+IHtcblxuICAgICAgICBjb25zdCBkZWxldGVEZWxlZ2F0ZSA9IGFzeW5jICgpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgZG9jRGlyID0gRmlsZVBhdGhzLmpvaW4odGhpcy5kYXRhRGlyLCBkb2NNZXRhRmlsZVJlZi5maW5nZXJwcmludCk7XG4gICAgICAgICAgICBjb25zdCBzdGF0ZVBhdGggPSBGaWxlUGF0aHMuam9pbihkb2NEaXIsICdzdGF0ZS5qc29uJyk7XG5cbiAgICAgICAgICAgIGxldCBkZWxldGVGaWxlUHJvbWlzZTogUHJvbWlzZTx2b2lkPiA9IFByb21pc2UucmVzb2x2ZSgpO1xuXG4gICAgICAgICAgICBpZiAoZG9jTWV0YUZpbGVSZWYuZG9jRmlsZSAmJiBkb2NNZXRhRmlsZVJlZi5kb2NGaWxlLm5hbWUpIHtcbiAgICAgICAgICAgICAgICBkZWxldGVGaWxlUHJvbWlzZSA9IHRoaXMuZGVsZXRlRmlsZShCYWNrZW5kLlNUQVNILCBkb2NNZXRhRmlsZVJlZi5kb2NGaWxlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbG9nLmluZm8oYERlbGV0aW5nIHN0YXRlUGF0aCAke3N0YXRlUGF0aH0gYW5kIGZpbGU6IGAsIGRvY01ldGFGaWxlUmVmLmRvY0ZpbGUpO1xuXG4gICAgICAgICAgICAvLyBUT0RPOiBkb24ndCBkZWxldGUgSlVTVCB0aGUgc3RhdGUgZmlsZSBidXQgYWxzbyB0aGUgcGFyZW50IGRpciBpZiBpdFxuICAgICAgICAgICAgLy8gaXMgZW1wdHkuXG5cbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZVN0YXRlUGF0aFByb21pc2UgPSBGaWxlcy5kZWxldGVBc3luYyhzdGF0ZVBhdGgpO1xuXG4gICAgICAgICAgICBsb2cuZGVidWcoXCJXYWl0aW5nIGZvciBzdGF0ZSBkZWxldGUuLi5cIik7XG4gICAgICAgICAgICBjb25zdCBkb2NNZXRhRmlsZSA9IGF3YWl0IGRlbGV0ZVN0YXRlUGF0aFByb21pc2U7XG4gICAgICAgICAgICBsb2cuZGVidWcoXCJXYWl0aW5nIGZvciBzdGF0ZSBkZWxldGUuLi5kb25lXCIpO1xuXG4gICAgICAgICAgICBsb2cuZGVidWcoXCJXYWl0aW5nIGZvciBmaWxlIGRlbGV0ZS4uLlwiKTtcbiAgICAgICAgICAgIGF3YWl0IGRlbGV0ZUZpbGVQcm9taXNlO1xuICAgICAgICAgICAgbG9nLmRlYnVnKFwiV2FpdGluZyBmb3IgZmlsZSBkZWxldGUuLi5kb25lXCIpO1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGRvY01ldGFGaWxlXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIGF3YWl0IERhdGFzdG9yZU11dGF0aW9ucy5oYW5kbGUoYXN5bmMgKCkgPT4gZGVsZXRlRGVsZWdhdGUoKSwgZGF0YXN0b3JlTXV0YXRpb24sICgpID0+IHRydWUpO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBEb2NNZXRhIG9iamVjdCB3ZSBjdXJyZW50bHkgaW4gdGhlIGRhdGFzdG9yZSBmb3IgdGhpcyBnaXZlblxuICAgICAqIGZpbmdlcnByaW50IG9yIG51bGwgaWYgaXQgZG9lcyBub3QgZXhpc3QuXG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIGdldERvY01ldGEoZmluZ2VycHJpbnQ6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nIHwgbnVsbD4ge1xuXG4gICAgICAgIGNvbnN0IGRvY0RpciA9IEZpbGVQYXRocy5qb2luKHRoaXMuZGF0YURpciwgZmluZ2VycHJpbnQpO1xuICAgICAgICBjb25zdCBzdGF0ZVBhdGggPSBGaWxlUGF0aHMuam9pbihkb2NEaXIsICdzdGF0ZS5qc29uJyk7XG5cbiAgICAgICAgaWYgKCEgYXdhaXQgdGhpcy5jb250YWlucyhmaW5nZXJwcmludCkpIHtcbiAgICAgICAgICAgIC8vIGp1c3QgcmV0dXJuIG51bGwgYW5kIGRvIG5vdCBsb2cgYW55IGVycm9ycyBhcyB0aGlzIGlzIGFuXG4gICAgICAgICAgICAvLyBhY2NlcHRhYmxlIHJldHVybiB0eXBlLiAgSWYgdGhlIGRvY3VtZW50IGlzIE5PVCBpbiB0aGUgcmVwb3NpdG9yeVxuICAgICAgICAgICAgLy8gaGVyZSB3ZSByZXR1cm4gbnVsbC4gIFdlIHVzZWQgdG8gY2FsbCBjb250YWlucygpIGFuZCB0aGVuXG4gICAgICAgICAgICAvLyBnZXREb2NNZXRhKCkgYW5kIGF2b2lkZWQgdGhlIGdldERvY01ldGEgY2FsbCBidXQgdGhpcyBhY3R1YWxseVxuICAgICAgICAgICAgLy8gd2FzIHNsb3cgb24gRmlyZWJhc2Ugc28gd2UganVzdCBjYWxsIGdldERvY01ldGEgYnV0IHRoaXNcbiAgICAgICAgICAgIC8vIHRyaWdnZXJlZCBhbiBlcnJvciBsb2cgaGVyZS4gIEl0J3MgY29tcGxldGVseSBhY2NlcHRhYmxlIHRvXG4gICAgICAgICAgICAvLyBjYWxsIGdldERvY01ldGEgb24gc29tZXRoaW5nIHRoYXQgbWF5IG5vdCBleGlzdCBhbmQganVzdCBnZXRcbiAgICAgICAgICAgIC8vIGJhY2sgYSBudWxsIHZhbHVlLlxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzdGF0ZVBhdGhTdGF0ID0gYXdhaXQgRmlsZXMuc3RhdEFzeW5jKHN0YXRlUGF0aCk7XG5cbiAgICAgICAgaWYgKCAhIHN0YXRlUGF0aFN0YXQuaXNGaWxlKCkgKSB7XG4gICAgICAgICAgICBsb2cuZXJyb3IoXCJQYXRoIGlzIG5vdCBhIGZpbGU6IFwiLCBzdGF0ZVBhdGgpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBub2luc3BlY3Rpb24gVHNMaW50Om5vLWJpdHdpc2VcbiAgICAgICAgY29uc3QgY2FuQWNjZXNzID1cbiAgICAgICAgICAgIGF3YWl0IEZpbGVzLmFjY2Vzc0FzeW5jKHN0YXRlUGF0aCwgZnMuY29uc3RhbnRzLlJfT0sgfCBmcy5jb25zdGFudHMuV19PSylcbiAgICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB0cnVlKVxuICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiBmYWxzZSk7XG5cbiAgICAgICAgaWYgKCEgY2FuQWNjZXNzKSB7XG4gICAgICAgICAgICBsb2cuZXJyb3IoXCJObyBhY2Nlc3M6IFwiLCBzdGF0ZVBhdGgpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBidWZmZXIgPSBhd2FpdCBGaWxlcy5yZWFkRmlsZUFzeW5jKHN0YXRlUGF0aCk7XG5cbiAgICAgICAgcmV0dXJuIGJ1ZmZlci50b1N0cmluZygndXRmOCcpO1xuXG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIHdyaXRlRmlsZShiYWNrZW5kOiBCYWNrZW5kLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmOiBGaWxlUmVmLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogQmluYXJ5RmlsZURhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRzOiBXcml0ZUZpbGVPcHRzID0gbmV3IERlZmF1bHRXcml0ZUZpbGVPcHRzKCkpOiBQcm9taXNlPERvY0ZpbGVNZXRhPiB7XG5cbiAgICAgICAgaWYgKCEgaXNQcmVzZW50KGRhdGEpKSB7XG5cbiAgICAgICAgICAgIGlmIChvcHRzLnVwZGF0ZU1ldGEpIHtcblxuICAgICAgICAgICAgICAgIC8vIHRoaXMgaXMgYSBtZXRhZGF0YSB1cGRhdGUgYW5kIGlzIG5vdCB2YWxpZCBmb3IgdGhlIGRpc2sgZGF0YVxuICAgICAgICAgICAgICAgIC8vIHN0b3JlIHNvIHdlIGhhdmUgbm8gd29yayB0byBkby5cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRGaWxlKGJhY2tlbmQsIHJlZik7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gd2hlbiB0aGUgY2FsbGVyIHNwZWNpZmllcyBudWxsIHRoZXkgbWVhbiB0aGF0IHRoZXJlJ3MgYVxuICAgICAgICAgICAgICAgIC8vIG1ldGFkYXRhIHVwZGF0ZSB3aGljaCBuZWVkcyB0byBiZSBhcHBsaWVkLlxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIGRhdGEgcHJlc2VudFwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbWV0YSA9IG9wdHMubWV0YSB8fCB7fTtcblxuICAgICAgICBEYXRhc3RvcmVGaWxlcy5hc3NlcnRTYW5pdGl6ZWRGaWxlTmFtZShyZWYpO1xuXG4gICAgICAgIGNvbnN0IGZpbGVSZWZlcmVuY2UgPSB0aGlzLmNyZWF0ZUZpbGVSZWZlcmVuY2UoYmFja2VuZCwgcmVmKTtcblxuICAgICAgICAvLyB0aGlzIHdvdWxkIGNyZWF0ZSB0aGUgcGFyZW50IGRpciBmb3IgdGhlIGZpbGUgd2hlbiBpdCBkb2VzIG5vdCBleGlzdC5cbiAgICAgICAgYXdhaXQgRmlsZXMuY3JlYXRlRGlyQXN5bmMoZmlsZVJlZmVyZW5jZS5kaXIpO1xuXG4gICAgICAgIC8vIFRPRE8gbWF5YmUgbWFrZSB0aGlzIGFjY2VwdCBhIGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyBhIHJlYWRhYmxlIHN0cmVhbS5cbiAgICAgICAgdHlwZSBEaXNrQmluYXJ5RmlsZURhdGEgPSBGaWxlSGFuZGxlIHwgQnVmZmVyIHwgc3RyaW5nIHwgTm9kZUpTLlJlYWRhYmxlU3RyZWFtO1xuXG4gICAgICAgIGNvbnN0IGRpc2tEYXRhID0gPERpc2tCaW5hcnlGaWxlRGF0YT4gZGF0YTtcblxuICAgICAgICBhd2FpdCBGaWxlcy53cml0ZUZpbGVBc3luYyhmaWxlUmVmZXJlbmNlLnBhdGgsIGRpc2tEYXRhLCB7ZXhpc3Rpbmc6ICdsaW5rJ30pO1xuXG4gICAgICAgIGF3YWl0IEZpbGVzLndyaXRlRmlsZUFzeW5jKGZpbGVSZWZlcmVuY2UubWV0YVBhdGgsIEpTT04uc3RyaW5naWZ5KG1ldGEsIG51bGwsICcgICcpLCB7YXRvbWljOiB0cnVlfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlRGF0YXN0b3JlRmlsZShiYWNrZW5kLCByZWYsIGZpbGVSZWZlcmVuY2UpO1xuXG4gICAgfVxuXG4gICAgcHVibGljIGdldEZpbGUoYmFja2VuZDogQmFja2VuZCwgcmVmOiBGaWxlUmVmLCBvcHRzOiBHZXRGaWxlT3B0cyA9IHt9KTogRG9jRmlsZU1ldGEge1xuXG4gICAgICAgIERhdGFzdG9yZXMuYXNzZXJ0TmV0d29ya0xheWVyKHRoaXMsIG9wdHMubmV0d29ya0xheWVyKTtcblxuICAgICAgICBEYXRhc3RvcmVGaWxlcy5hc3NlcnRTYW5pdGl6ZWRGaWxlTmFtZShyZWYpO1xuXG4gICAgICAgIGNvbnN0IGZpbGVSZWZlcmVuY2UgPSB0aGlzLmNyZWF0ZUZpbGVSZWZlcmVuY2UoYmFja2VuZCwgcmVmKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVEYXRhc3RvcmVGaWxlKGJhY2tlbmQsIHJlZiwgZmlsZVJlZmVyZW5jZSk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgY29udGFpbnNGaWxlKGJhY2tlbmQ6IEJhY2tlbmQsIHJlZjogRmlsZVJlZik6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICBEYXRhc3RvcmVGaWxlcy5hc3NlcnRTYW5pdGl6ZWRGaWxlTmFtZShyZWYpO1xuICAgICAgICBjb25zdCBmaWxlUmVmZXJlbmNlID0gdGhpcy5jcmVhdGVGaWxlUmVmZXJlbmNlKGJhY2tlbmQsIHJlZik7XG4gICAgICAgIHJldHVybiBGaWxlcy5leGlzdHNBc3luYyhmaWxlUmVmZXJlbmNlLnBhdGgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBkZWxldGVGaWxlKGJhY2tlbmQ6IEJhY2tlbmQsIHJlZjogRmlsZVJlZik6IFByb21pc2U8dm9pZD4ge1xuXG4gICAgICAgIERhdGFzdG9yZUZpbGVzLmFzc2VydFNhbml0aXplZEZpbGVOYW1lKHJlZik7XG5cbiAgICAgICAgY29uc3QgZmlsZVJlZmVyZW5jZSA9IHRoaXMuY3JlYXRlRmlsZVJlZmVyZW5jZShiYWNrZW5kLCByZWYpO1xuXG4gICAgICAgIGF3YWl0IEZpbGVzLnJlbW92ZUFzeW5jKGZpbGVSZWZlcmVuY2UucGF0aCk7XG4gICAgICAgIGF3YWl0IEZpbGVzLnJlbW92ZUFzeW5jKGZpbGVSZWZlcmVuY2UubWV0YVBhdGgpO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV3JpdGUgdGhlIGRhdGFzdG9yZSB0byBkaXNrLlxuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyB3cml0ZShmaW5nZXJwcmludDogc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgIGRvY0luZm86IElEb2NJbmZvLFxuICAgICAgICAgICAgICAgICAgICAgICBvcHRzOiBXcml0ZU9wdHMgPSB7fSkge1xuXG4gICAgICAgIGNvbnN0IGRhdGFzdG9yZU11dGF0aW9uID0gb3B0cy5kYXRhc3RvcmVNdXRhdGlvbiB8fCBuZXcgRGVmYXVsdERhdGFzdG9yZU11dGF0aW9uKCk7XG5cbiAgICAgICAgY29uc3Qgd3JpdGVEZWxlZ2F0ZSA9IGFzeW5jICgpID0+IHtcblxuICAgICAgICAgICAgYXdhaXQgdGhpcy5oYW5kbGVXcml0ZUZpbGUob3B0cyk7XG5cbiAgICAgICAgICAgIFByZWNvbmRpdGlvbnMuYXNzZXJ0UHJlc2VudChkYXRhLCBcImRhdGFcIik7XG4gICAgICAgICAgICBQcmVjb25kaXRpb25zLmFzc2VydFR5cGVPZihkYXRhLCBcInN0cmluZ1wiLCBcImRhdGFcIiwgKCkgPT4gbG9nLmVycm9yKFwiRmFpbGVkIHdpdGggZGF0YTogXCIsIGRhdGEpKTtcblxuICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBkYXRhXCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZGF0YVswXSAhPT0gJ3snKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm90IEpTT05cIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxvZy5pbmZvKFwiUGVyZm9ybWluZyBzeW5jIG9mIGNvbnRlbnQgaW50byBkaXNrIGRhdGFzdG9yZVwiKTtcblxuICAgICAgICAgICAgY29uc3QgZG9jRGlyID0gRmlsZVBhdGhzLmpvaW4odGhpcy5kYXRhRGlyLCBmaW5nZXJwcmludCk7XG5cbiAgICAgICAgICAgIGF3YWl0IEZpbGVzLmNyZWF0ZURpckFzeW5jKGRvY0Rpcik7XG5cbiAgICAgICAgICAgIGxvZy5kZWJ1ZyhcIkNhbGxpbmcgc3RhdCBvbiBkb2NEaXI6IFwiICsgZG9jRGlyKTtcbiAgICAgICAgICAgIGNvbnN0IHN0YXQgPSBhd2FpdCBGaWxlcy5zdGF0QXN5bmMoZG9jRGlyKTtcblxuICAgICAgICAgICAgaWYgKCEgc3RhdC5pc0RpcmVjdG9yeSgpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUGF0aCBpcyBub3QgYSBkaXJlY3Rvcnk6IFwiICsgZG9jRGlyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3Qgc3RhdGVQYXRoID0gRmlsZVBhdGhzLmpvaW4oZG9jRGlyLCBcInN0YXRlLmpzb25cIik7XG5cbiAgICAgICAgICAgIGxvZy5pbmZvKGBXcml0aW5nIGRhdGEgdG8gc3RhdGUgZmlsZTogJHtzdGF0ZVBhdGh9YCk7XG5cbiAgICAgICAgICAgIC8vIFRPRE86IGRvbid0IHdyaXRlIGRpcmVjdGx5IHRvIHN0YXRlLmpzb24uLi4gaW5zdGVhZCB3cml0ZSB0b1xuICAgICAgICAgICAgLy8gc3RhdGUuanNvbi5uZXcsIHRoZW4gZGVsZXRlIHN0YXRlLmpzb24sIHRoZW4gbW92ZSBzdGF0ZS5qc29uLm5ldyB0b1xuICAgICAgICAgICAgLy8gc3RhdGUuanNvbi4uICBUaGlzIHdheSB3ZSBjYW4gY3JlYXRlIGJhY2t1cHMgdXNpbmcgaGFyZCBsaW5rcyBlYXNpbHkuXG5cbiAgICAgICAgICAgIGF3YWl0IEZpbGVzLndyaXRlRmlsZUFzeW5jKHN0YXRlUGF0aCwgZGF0YSwge2VuY29kaW5nOiAndXRmOCcsIGF0b21pYzogdHJ1ZX0pO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgYXdhaXQgRGF0YXN0b3JlTXV0YXRpb25zLmhhbmRsZShhc3luYyAoKSA9PiB3cml0ZURlbGVnYXRlKCksIGRhdGFzdG9yZU11dGF0aW9uLCAoKSA9PiB0cnVlKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBnZXREb2NNZXRhUmVmcygpOiBQcm9taXNlPERvY01ldGFSZWZbXT4ge1xuXG4gICAgICAgIGlmICggISBhd2FpdCBGaWxlcy5leGlzdHNBc3luYyh0aGlzLmRhdGFEaXIpKSB7XG4gICAgICAgICAgICAvLyBubyBkYXRhIGRpciBidXQgdGhpcyBzaG91bGQgcmFyZWx5IGhhcHBlbi5cbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGVudHJpZXMgPSBhd2FpdCBGaWxlcy5yZWFkZGlyQXN5bmModGhpcy5kYXRhRGlyKTtcblxuICAgICAgICBjb25zdCByZXN1bHQ6IERvY01ldGFSZWZbXSA9IFtdO1xuXG4gICAgICAgIGZvciAoIGNvbnN0IGVudHJ5IG9mIGVudHJpZXMpIHtcblxuICAgICAgICAgICAgY29uc3QgZG9jTWV0YURpciA9IEZpbGVQYXRocy5qb2luKHRoaXMuZGF0YURpciwgZW50cnkpO1xuICAgICAgICAgICAgY29uc3QgZG9jTWV0YURpclN0YXQgPSBhd2FpdCBGaWxlcy5zdGF0QXN5bmMoZG9jTWV0YURpcik7XG5cbiAgICAgICAgICAgIGlmIChkb2NNZXRhRGlyU3RhdC5pc0RpcmVjdG9yeSgpKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZUZpbGUgPSBGaWxlUGF0aHMuam9pbih0aGlzLmRhdGFEaXIsIGVudHJ5LCAnc3RhdGUuanNvbicpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZXhpc3RzID0gYXdhaXQgRmlsZXMuZXhpc3RzQXN5bmMoc3RhdGVGaWxlKTtcbiAgICAgICAgICAgICAgICBpZiAoZXhpc3RzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtmaW5nZXJwcmludDogZW50cnl9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgc25hcHNob3QoZG9jTWV0YVNuYXBzaG90RXZlbnRMaXN0ZW5lcjogRG9jTWV0YVNuYXBzaG90RXZlbnRMaXN0ZW5lcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JMaXN0ZW5lcjogRXJyb3JMaXN0ZW5lciA9IE5VTExfRlVOQ1RJT04pOiBQcm9taXNlPFNuYXBzaG90UmVzdWx0PiB7XG5cbiAgICAgICAgcmV0dXJuIERhdGFzdG9yZXMuY3JlYXRlQ29tbWl0dGVkU25hcHNob3QodGhpcywgZG9jTWV0YVNuYXBzaG90RXZlbnRMaXN0ZW5lcik7XG5cbiAgICB9XG5cblxuICAgIHB1YmxpYyBhc3luYyBjcmVhdGVCYWNrdXAoKTogUHJvbWlzZTx2b2lkPiB7XG5cbiAgICAgICAgY29uc3QgZGF0YURpciA9IHRoaXMuZGlyZWN0b3JpZXMuZGF0YURpcjtcblxuICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuXG4gICAgICAgIGNvbnN0IG9yZFllYXIgPSBub3cuZ2V0VVRDRnVsbFllYXIoKTtcbiAgICAgICAgY29uc3Qgb3JkTW9udGggPSBub3cuZ2V0VVRDTW9udGgoKSArIDE7XG4gICAgICAgIGNvbnN0IG9yZERheSA9IG5vdy5nZXRVVENEYXRlKCk7XG5cbiAgICAgICAgY29uc3QgeWVhciA9IFN0cmluZ3MubHBhZChvcmRZZWFyLCAnMCcsIDQpO1xuICAgICAgICBjb25zdCBtb250aCA9IFN0cmluZ3MubHBhZChvcmRNb250aCwgJzAnLCAyKTtcbiAgICAgICAgY29uc3QgZGF5ID0gU3RyaW5ncy5scGFkKG9yZERheSwgJzAnLCAyKTtcblxuICAgICAgICBjb25zdCBiYWNrdXBEaXIgPSBGaWxlUGF0aHMuam9pbihkYXRhRGlyLCBgLmJhY2t1cC0ke3llYXJ9LSR7bW9udGh9LSR7ZGF5fWApO1xuXG4gICAgICAgIGNvbnN0IGFjY2VwdFByZWRpY2F0ZSA9IChwYXRoOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBwYXRoLmluZGV4T2YoXCIuYmFja3VwLVwiKSA9PT0gLTE7XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGF3YWl0IEZpbGVzLmV4aXN0c0FzeW5jKGJhY2t1cERpcikpIHtcbiAgICAgICAgICAgIGxvZy53YXJuKFwiTm90IGNyZWF0aW5nIGJhY2t1cC4gIEFscmVhZHkgZXhpc3RzOiBcIiwgYmFja3VwRGlyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxvZy5ub3RpY2UoXCJDcmVhdGluZyBiYWNrdXAgdG86IFwiICsgYmFja3VwRGlyKTtcbiAgICAgICAgICAgIGF3YWl0IEZpbGVzLmNyZWF0ZURpcmVjdG9yeVNuYXBzaG90KGRhdGFEaXIsIGJhY2t1cERpciwgYWNjZXB0UHJlZGljYXRlKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHVibGljIGFkZERvY01ldGFTbmFwc2hvdEV2ZW50TGlzdGVuZXIoZG9jTWV0YVNuYXBzaG90RXZlbnRMaXN0ZW5lcjogRG9jTWV0YVNuYXBzaG90RXZlbnRMaXN0ZW5lcik6IHZvaWQge1xuICAgICAgICAvLyBub29wIG5vd1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgaW5mbyBmcm9tIHRoZSBkYXRhc3RvcmUuXG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIGluZm8oKTogUHJvbWlzZTxPcHRpb25hbDxEYXRhc3RvcmVJbmZvPj4ge1xuXG4gICAgICAgIGNvbnN0IGluZm9QYXRoID0gRmlsZVBhdGhzLmpvaW4odGhpcy5kYXRhRGlyLCAnaW5mby5qc29uJyk7XG5cbiAgICAgICAgaWYgKGF3YWl0IEZpbGVzLmV4aXN0c0FzeW5jKGluZm9QYXRoKSkge1xuXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgRmlsZXMucmVhZEZpbGVBc3luYyhpbmZvUGF0aCk7XG5cbiAgICAgICAgICAgIHRyeSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSA8RGF0YXN0b3JlSW5mbz4gSlNPTi5wYXJzZShkYXRhLnRvU3RyaW5nKCd1dGYtOCcpKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBPcHRpb25hbC5vZihyZXN1bHQpO1xuXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBkYXRhIGlzIGludmFsaWQgc28gZGVsZXRlIGl0IHNvIGl0J3MgcmUtY3JlYXRlZCBsYXRlclxuICAgICAgICAgICAgICAgIGF3YWl0IEZpbGVzLmRlbGV0ZUFzeW5jKGluZm9QYXRoKTtcblxuICAgICAgICAgICAgICAgIGxvZy53YXJuKFwiVW5hYmxlIHRvIHJlYWQgaW5mby5qc29uIGZpbGUuXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBPcHRpb25hbC5lbXB0eSgpO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBPcHRpb25hbC5lbXB0eSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBvdmVydmlldygpOiBQcm9taXNlPERhdGFzdG9yZU92ZXJ2aWV3PiB7XG5cbiAgICAgICAgY29uc3QgZG9jTWV0YVJlZnMgPSBhd2FpdCB0aGlzLmdldERvY01ldGFSZWZzKCk7XG5cbiAgICAgICAgY29uc3QgZGF0YXN0b3JlSW5mbyA9IGF3YWl0IHRoaXMuaW5mbygpO1xuXG4gICAgICAgIGNvbnN0IGNyZWF0ZWQgPSBkYXRhc3RvcmVJbmZvLm1hcChpbmZvID0+IGluZm8uY3JlYXRlZCkuZ2V0T3JVbmRlZmluZWQoKTtcblxuICAgICAgICByZXR1cm4ge25yRG9jczogZG9jTWV0YVJlZnMubGVuZ3RoLCBjcmVhdGVkfTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBjYXBhYmlsaXRpZXMoKTogRGF0YXN0b3JlQ2FwYWJpbGl0aWVzIHtcblxuICAgICAgICBjb25zdCBuZXR3b3JrTGF5ZXJzID0gbmV3IFNldDxOZXR3b3JrTGF5ZXI+KFsnbG9jYWwnXSk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5ldHdvcmtMYXllcnMsXG4gICAgICAgICAgICBwZXJtaXNzaW9uOiB7bW9kZTogJ3J3J31cbiAgICAgICAgfTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgd3JpdGVJbmZvKGRhdGFzdG9yZUluZm86IERhdGFzdG9yZUluZm8pIHtcblxuICAgICAgICBjb25zdCBpbmZvUGF0aCA9IEZpbGVQYXRocy5qb2luKHRoaXMuZGF0YURpciwgJ2luZm8uanNvbicpO1xuXG4gICAgICAgIGNvbnN0IGpzb24gPSBKU09OLnN0cmluZ2lmeShkYXRhc3RvcmVJbmZvLCBudWxsLCBcIiAgXCIpO1xuXG4gICAgICAgIGF3YWl0IEZpbGVzLndyaXRlRmlsZUFzeW5jKGluZm9QYXRoLCBqc29uLCB7YXRvbWljOiB0cnVlfSk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0UHJlZnMoKTogUHJlZnNQcm92aWRlciB7XG5cbiAgICAgICAgY29uc3QgZGlza1ByZWZzU3RvcmUgPSB0aGlzLmRpc2tQcmVmc1N0b3JlO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBnZXQoKTogRGF0YXN0b3JlUHJlZnMge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHByZWZzOiBkaXNrUHJlZnNTdG9yZS5nZXRQcmVmcygpLFxuICAgICAgICAgICAgICAgICAgICB1bnN1YnNjcmliZTogTlVMTF9GVU5DVElPTlxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZURhdGFzdG9yZUZpbGUoYmFja2VuZDogQmFja2VuZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmOiBGaWxlUmVmLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlUmVmZXJlbmNlOiBEaXNrRmlsZVJlZmVyZW5jZSk6IERvY0ZpbGVNZXRhIHtcblxuICAgICAgICBjb25zdCBmaWxlVVJMID0gRmlsZVBhdGhzLnRvVVJMKGZpbGVSZWZlcmVuY2UucGF0aCk7XG4gICAgICAgIGNvbnN0IHVybCA9IG5ldyBVUkwoZmlsZVVSTCk7XG5cbiAgICAgICAgLy8gaWYgKGF3YWl0IEZpbGVzLmV4aXN0c0FzeW5jKGZpbGVSZWZlcmVuY2UubWV0YVBhdGgpKSB7XG4gICAgICAgIC8vICAgICBjb25zdCBidWZmID0gYXdhaXQgRmlsZXMucmVhZEZpbGVBc3luYyhmaWxlUmVmZXJlbmNlLm1ldGFQYXRoKTtcbiAgICAgICAgLy8gICAgIG1ldGEgPSBKU09OLnBhcnNlKGJ1ZmYudG9TdHJpbmcoXCJ1dGYtOFwiKSk7XG4gICAgICAgIC8vIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYmFja2VuZCxcbiAgICAgICAgICAgIHJlZixcbiAgICAgICAgICAgIHVybDogdXJsLmhyZWYsXG4gICAgICAgIH07XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZUZpbGVSZWZlcmVuY2UoYmFja2VuZDogQmFja2VuZCwgcmVmOiBGaWxlUmVmKTogRGlza0ZpbGVSZWZlcmVuY2Uge1xuXG4gICAgICAgIGxldCBkaXI7XG5cbiAgICAgICAgaWYgKGJhY2tlbmQgPT09IEJhY2tlbmQuU1RBU0gpIHtcbiAgICAgICAgICAgIGRpciA9IEZpbGVQYXRocy5qb2luKHRoaXMuZGF0YURpciwgYmFja2VuZC50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGlyID0gRmlsZVBhdGhzLmpvaW4odGhpcy5maWxlc0RpciwgYmFja2VuZC50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcGF0aCA9IEZpbGVQYXRocy5qb2luKGRpciwgcmVmLm5hbWUpO1xuICAgICAgICBjb25zdCBtZXRhUGF0aCA9IEZpbGVQYXRocy5qb2luKGRpciwgcmVmLm5hbWUgKyAnLm1ldGEnKTtcblxuICAgICAgICByZXR1cm4ge2RpciwgcGF0aCwgbWV0YVBhdGh9O1xuXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXREYXRhRGlycygpIHtcblxuICAgICAgICBjb25zdCB1c2VySG9tZSA9IHRoaXMuZ2V0VXNlckhvbWUoKTtcblxuICAgICAgICBjb25zdCBwbGF0Zm9ybSA9IFBsYXRmb3Jtcy5nZXQoKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5nZXREYXRhRGlyc0ZvclBsYXRmb3JtKHt1c2VySG9tZSwgcGxhdGZvcm19KTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgZGV0ZXJtaW5lUHJvcGVyRGlyZWN0b3J5KGRpcmVjdG9yeVNldDogRGlyZWN0b3J5U2V0KTogUHJvbWlzZTxzdHJpbmc+IHtcblxuICAgICAgICAvLyBzZWUgaWYgYW55IG9mIHRoZSBwYXRocyBleGlzdCwgYnkgb3JkZXIgYW5kIHByZWZlciB0aGUgZGlyZWN0b3JpZXNcbiAgICAgICAgLy8gdGhhdCBhbHJlYWR5IGV4aXN0LlxuICAgICAgICBmb3IgKGNvbnN0IHBhdGggb2YgZGlyZWN0b3J5U2V0LnBhdGhzKSB7XG5cbiAgICAgICAgICAgIGlmIChhd2FpdCBGaWxlcy5leGlzdHNBc3luYyhwYXRoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwYXRoO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiBub25lIG9mIHRoZSBwYXRocyBleGlzdCwgdXNlIHRoZSBwcmVmZXJyZWQgcGF0aC5cbiAgICAgICAgcmV0dXJuIGRpcmVjdG9yeVNldC5wcmVmZXJyZWRQYXRoO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGFsbCBkYXRhIGRpcnMgZm9yIGEgZ2l2ZW4gcGxhdGZvcm0uICBUaGVyZSBtaWdodCBiZSBtdWx0aXBsZVxuICAgICAqIGxvY2F0aW9ucyBwZXIgcGxhdGZvcm0gZGVwZW5kaW5nIG9uIGVhcmxpZXIgdmVyc2lvbnMgb2YgUG9sYXIgc29cbiAgICAgKiB3ZSByZXR1cm4gYWxsIHBvc3NpYmxlIGRpcmVjdG9yaWVzIGFuZCB3ZSBjYW4gdGVzdCB3aGljaCBvbmVzIGV4aXN0XG4gICAgICogYW5kIHVzZSB0aGUgcHJlZmVycmVkIGRpcmVjdG9yeSBpZiBub25lIGV4aXN0LlxuICAgICAqXG4gICAgICogVGhlIHByZWZlcnJlZCBkYXRhIGRpcmVjdG9yaWVzIGFyZSBhbHdheXMgaW4gUG9sYXIvRGF0YS4gIFRoZSByZWFzb24gd2VcbiAgICAgKiBhbHdheXMgaW5jbHVkZSAvRGF0YSBpcyB0aGF0IEVsZWN0cm9uIGxpa2VzIHRvIGNyZWF0ZSBhIGRpcmVjdG9yeSBuYW1lXG4gICAgICogZm9yIHRoZSBhcHAgYW5kIHN0b3JlIGNocm9tZSBkYXRhIGluIHRoYXQgZGlyZWN0b3J5LiAgVGhpcyB3YXkgdGhlXG4gICAgICogUG9sYXIgZGF0YSBpcyBzYW5kYm94ZWQgaW50byBpdHMgb3duIERhdGEgZGlyZWN0b3J5IHNlcGVyYXRlIGZyb20gdGhlXG4gICAgICogY2hyb21pdW0gdXNlciBwcm9maWxlIGRhdGEuXG4gICAgICpcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGdldERhdGFEaXJzRm9yUGxhdGZvcm0oZGlyUnVudGltZTogRGlyUnVudGltZSk6IERpcmVjdG9yeVNldCB7XG5cbiAgICAgICAgY29uc3Qge3VzZXJIb21lLCBwbGF0Zm9ybX0gPSBkaXJSdW50aW1lO1xuXG4gICAgICAgIHN3aXRjaCAocGxhdGZvcm0pIHtcblxuICAgICAgICAgICAgY2FzZSBQbGF0Zm9ybS5XSU5ET1dTOiB7XG5cbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBjb25zaWRlciB1c2luZyBBcHBEYXRhL0xvY2FsIEJVVCB0aGUgQXBwRGF0YSBpcyBoaWRkZW5cbiAgICAgICAgICAgICAgICAvLyBvbiBXaW5kb3dzIHNvIHRoYXQgbWlnaHQgaW5jcmVhc2Ugc3VwcG9ydCBjb3N0cy5cblxuICAgICAgICAgICAgICAgIC8vIFRPRE86IGNhbid0IHVzZSBQb2xhci9EYXRhIGFzIGl0IG1pZ2h0IGltcGxlbWVudCBhIGJ1ZyB3aXRoXG4gICAgICAgICAgICAgICAgLy8gdHdvIGxldmVsIG5lc3RlZCBkaXJzLlxuXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogSSBkb24ndCBsaWtlIFBvbGFyLURhdGEgZm9yIHRoZSBuYW1lXG5cbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBJIGNvdWxkIGp1c3Qgd3JpdGUgdG8gdGhlIGFwcCBkaXJlY3RvcnkgdGhhdCBFbGVjdHJvblxuICAgICAgICAgICAgICAgIC8vIHdhbnRzIG1lIHRvIHdyaXRlIHRvIGFuZCBpbnRvIGEgRGF0YSBkaXJlY3RvcnkgdGhlcmUgYnV0XG4gICAgICAgICAgICAgICAgLy8gSSBkb24ndCBsaWtlIGNvbWJpbmluZyB0aGVtLlxuXG4gICAgICAgICAgICAgICAgY29uc3QgcHJlZmVycmVkUGF0aCA9IEZpbGVQYXRocy5qb2luKHVzZXJIb21lLCBcIlBvbGFyXCIpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aHM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIEZpbGVQYXRocy5qb2luKHVzZXJIb21lLCBcIi5wb2xhclwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZWZlcnJlZFBhdGhcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgcHJlZmVycmVkUGF0aFxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2FzZSBQbGF0Zm9ybS5MSU5VWDoge1xuXG4gICAgICAgICAgICAgICAgY29uc3QgcHJlZmVycmVkUGF0aCA9IEZpbGVQYXRocy5qb2luKHVzZXJIb21lLCBcIi5jb25maWdcIiwgXCJQb2xhclwiKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBGaWxlUGF0aHMuam9pbih1c2VySG9tZSwgXCIucG9sYXJcIiksXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIHByZWZlcnJlZFBhdGhcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhc2UgUGxhdGZvcm0uTUFDT1M6IHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHByZWZlcnJlZFBhdGggPSBGaWxlUGF0aHMuam9pbih1c2VySG9tZSwgXCJMaWJyYXJ5XCIsIFwiQXBwbGljYXRpb24gU3VwcG9ydFwiLCBcIlBvbGFyXCIpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aHM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIEZpbGVQYXRocy5qb2luKHVzZXJIb21lLCBcIi5wb2xhclwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZWZlcnJlZFBhdGgsXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIHByZWZlcnJlZFBhdGhcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUGxhdGZvcm0gbm90IHN1cHBvcnRlZDogXCIgKyBwbGF0Zm9ybSk7XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXRVc2VySG9tZSgpIHtcblxuICAgICAgICBjb25zdCBFTlZfTkFNRSA9XG4gICAgICAgICAgICBwcm9jZXNzLnBsYXRmb3JtID09PSAnd2luMzInID8gJ1VTRVJQUk9GSUxFJyA6ICdIT01FJztcblxuICAgICAgICBsZXQgcmVzdWx0ID0gcHJvY2Vzcy5lbnZbRU5WX05BTUVdO1xuXG4gICAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgICAgICByZXN1bHQgPSBvcy5ob21lZGlyKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxufVxuXG4vKipcbiAqIEluZm9ybWF0aW9uIGFib3V0IHRoZSBkaXJlY3RvcmllcyB1c2VkIGluIHRoZSBjdXJyZW50IHJ1bnRpbWUgLyBPUy5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBEaXJSdW50aW1lIHtcbiAgICByZWFkb25seSB1c2VySG9tZTogc3RyaW5nO1xuICAgIHJlYWRvbmx5IHBsYXRmb3JtOiBQbGF0Zm9ybTtcblxufVxuXG4vKipcbiAqIEEgc2V0IG9mIGRpcmVjdG9yaWVzIGZvciBhIGdpdmVuIHBsYXRmb3JtLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIERpcmVjdG9yeVNldCB7XG5cbiAgICAvKipcbiAgICAgKiBBbGwgcGF0aHMgdGhhdCBtaWdodCBleGlzdC5cbiAgICAgKi9cbiAgICByZWFkb25seSBwYXRoczogc3RyaW5nW107XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcHJlZmVycmVkIHBhdGggdG8gdXNlIGlzIG5vbmUgY3VycmVudGx5IGV4aXN0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHByZWZlcnJlZFBhdGg6IHN0cmluZztcblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIERhdGFEaXIge1xuXG4gICAgLyoqXG4gICAgICogVGhlIHBhdGggdG8gdGhlIGRhdGEgZGlyLlxuICAgICAqL1xuICAgIHBhdGg6IHN0cmluZyB8IHVuZGVmaW5lZCB8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBIb3cgdGhlIGRhdGEgZGlyIHdhcyBjb25maWd1cmVkLlxuICAgICAqL1xuICAgIHN0cmF0ZWd5OiBEaXJTdHJhdGVneTtcblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIERhdGFEaXJDb25maWcge1xuXG4gICAgcGF0aDogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogSG93IHRoZSBkYXRhIGRpciB3YXMgY29uZmlndXJlZC5cbiAgICAgKi9cbiAgICBzdHJhdGVneTogRGlyU3RyYXRlZ3k7XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBEaXNrRGVsZXRlUmVzdWx0IGV4dGVuZHMgRGVsZXRlUmVzdWx0IHtcblxuICAgIGRvY01ldGFGaWxlOiBSZWFkb25seTxGaWxlRGVsZXRlZD47XG5cbn1cblxudHlwZSBEaXJTdHJhdGVneSA9ICdlbnYnIHwgJ2hvbWUnIHwgJ21hbnVhbCc7XG5cbmludGVyZmFjZSBEaXNrRmlsZVJlZmVyZW5jZSB7XG5cbiAgICAvLyB0aGUgZGlyIGhvbGRpbmcgb3VyIGZpbGVzLlxuICAgIGRpcjogc3RyaW5nO1xuXG4gICAgLy8gdGhlIGZ1bGwgcGF0aCB0byB0aGUgYWN0dWFsIGRhdGEgZmlsZS5cbiAgICBwYXRoOiBzdHJpbmc7XG5cbiAgICAvLyB0aGUgZnVsbCBwYXRoIHRvIHRoZSBtZXRhZGF0YSBmaWxlIChmaWxlLm1ldGEpXG4gICAgbWV0YVBhdGg6IHN0cmluZztcblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIERpc2tJbml0UmVzdWx0IGV4dGVuZHMgSW5pdFJlc3VsdCB7XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJbml0T3B0aW9ucyB7XG5cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtIGEgc25hcHNob3Qgb24gaW5pdCBpZlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGluaXRpYWxTbmFwc2hvdFJlcXVpcmVkOiBib29sZWFuO1xuXG59XG5cbmV4cG9ydCBjbGFzcyBEaXNrUHJlZnNTdG9yZSB7XG5cbiAgICBwcml2YXRlIHByZWZzOiBEaXNrUHJlZnM7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IGRpcmVjdG9yaWVzOiBEaXJlY3RvcmllcztcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgcGF0aDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGlyZWN0b3JpZXM6IERpcmVjdG9yaWVzKSB7XG4gICAgICAgIHRoaXMuZGlyZWN0b3JpZXMgPSBkaXJlY3RvcmllcztcbiAgICAgICAgdGhpcy5wcmVmcyA9IG5ldyBEaXNrUHJlZnModGhpcyk7XG4gICAgICAgIHRoaXMucGF0aCA9IEZpbGVQYXRocy5jcmVhdGUodGhpcy5kaXJlY3Rvcmllcy5jb25maWdEaXIsIFwicHJlZnMuanNvblwiKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgaW5pdCgpIHtcblxuICAgICAgICBpZiAoYXdhaXQgRmlsZXMuZXhpc3RzQXN5bmModGhpcy5wYXRoKSkge1xuICAgICAgICAgICAgbG9nLmluZm8oXCJMb2FkZWQgcHJlZnMgZnJvbTogXCIgKyB0aGlzLnBhdGgpO1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IEZpbGVzLnJlYWRGaWxlQXN5bmModGhpcy5wYXRoKTtcbiAgICAgICAgICAgIGNvbnN0IHByZWZzID0gSlNPTi5wYXJzZShkYXRhLnRvU3RyaW5nKFwiVVRGLThcIikpO1xuICAgICAgICAgICAgdGhpcy5wcmVmcy51cGRhdGUocHJlZnMpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0UHJlZnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByZWZzO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBjb21taXQoKTogUHJvbWlzZTx2b2lkPiB7XG5cbiAgICAgICAgY29uc3QgZGF0YSA9IEpTT04uc3RyaW5naWZ5KHRoaXMucHJlZnMudG9EaWN0KCksIG51bGwsIFwiICBcIik7XG4gICAgICAgIGF3YWl0IEZpbGVzLndyaXRlRmlsZUFzeW5jKHRoaXMucGF0aCwgZGF0YSwge2F0b21pYzogdHJ1ZX0pO1xuXG4gICAgfVxuXG59XG5cbi8qKlxuICogUHJlZnMgb2JqZWN0IGp1c3QgYmFja2VkIGJ5IGEgbG9jYWwgZGljdGlvbmFyeS5cbiAqL1xuZXhwb3J0IGNsYXNzIERpc2tQcmVmcyBleHRlbmRzIFByZWZzIGltcGxlbWVudHMgUGVyc2lzdGVudFByZWZzIHtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgZGVsZWdhdGU6IFN0cmluZ1RvU3RyaW5nRGljdCA9IHt9O1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBkaXNrUHJlZnNTdG9yZTogRGlza1ByZWZzU3RvcmU7XG5cbiAgICBjb25zdHJ1Y3RvcihkaXNrUHJlZnNTdG9yZTogRGlza1ByZWZzU3RvcmUpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5kaXNrUHJlZnNTdG9yZSA9IGRpc2tQcmVmc1N0b3JlO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQoa2V5OiBzdHJpbmcpOiBPcHRpb25hbDxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIE9wdGlvbmFsLm9mKHRoaXMuZGVsZWdhdGVba2V5XSk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldChrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLmRlbGVnYXRlW2tleV0gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlKGRpY3Q6IFN0cmluZ1RvU3RyaW5nRGljdCkge1xuXG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKGRpY3QpKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGRpY3Rba2V5XTtcbiAgICAgICAgICAgIHRoaXMuZGVsZWdhdGVba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgdG9EaWN0KCk6IFN0cmluZ1RvU3RyaW5nRGljdCB7XG4gICAgICAgIHJldHVybiB7Li4udGhpcy5kZWxlZ2F0ZX07XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGNvbW1pdCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuZGlza1ByZWZzU3RvcmUuY29tbWl0KCk7XG4gICAgfVxuXG5cbn1cbiJdfQ==