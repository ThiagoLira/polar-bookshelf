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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Datastore_1 = require("./Datastore");
const Logger_1 = require("polar-shared/src/logger/Logger");
const DocMetaRef_1 = require("./DocMetaRef");
const Backend_1 = require("polar-shared/src/datastore/Backend");
const Firestore_1 = require("../firebase/Firestore");
const Preconditions_1 = require("polar-shared/src/Preconditions");
const Hashcodes_1 = require("polar-shared/src/util/Hashcodes");
const firebase = __importStar(require("../firebase/lib/firebase"));
const Dictionaries_1 = require("polar-shared/src/util/Dictionaries");
const DatastoreMutation_1 = require("./DatastoreMutation");
const Functions_1 = require("polar-shared/src/util/Functions");
const DocMetas_1 = require("../metadata/DocMetas");
const Percentages_1 = require("polar-shared/src/util/Percentages");
const ProgressTracker_1 = require("polar-shared/src/util/ProgressTracker");
const Providers_1 = require("polar-shared/src/util/Providers");
const FilePaths_1 = require("polar-shared/src/util/FilePaths");
const Files_1 = require("polar-shared/src/util/Files");
const Firebase_1 = require("../firebase/Firebase");
const SimpleReactor_1 = require("../reactor/SimpleReactor");
const ProgressMessages_1 = require("../ui/progress_bar/ProgressMessages");
const Stopwatches_1 = require("polar-shared/src/util/Stopwatches");
const AppRuntime_1 = require("../AppRuntime");
const Promises_1 = require("../util/Promises");
const URLs_1 = require("polar-shared/src/util/URLs");
const Datastores_1 = require("./Datastores");
const FirebaseDatastores_1 = require("./FirebaseDatastores");
const DocPermissions_1 = require("./sharing/db/DocPermissions");
const Visibility_1 = require("polar-shared/src/datastore/Visibility");
const Latch_1 = require("polar-shared/src/util/Latch");
const FirestorePrefs_1 = require("./firebase/FirestorePrefs");
const log = Logger_1.Logger.create();
let STORAGE_UPLOAD_ID = 0;
class FirebaseDatastore extends Datastore_1.AbstractDatastore {
    constructor() {
        super();
        this.id = 'firebase';
        this.initialized = false;
        this.docMetaSnapshotEventDispatcher = new SimpleReactor_1.SimpleReactor();
        this.prefs = new FirestorePrefs_1.FirestorePrefs();
        this.pendingFileWrites = {};
    }
    init(errorListener = Functions_1.NULL_FUNCTION, opts = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.initialized) {
                return {};
            }
            log.notice("Initializing FirebaseDatastore.");
            this.app = firebase.app();
            this.firestore = yield Firestore_1.Firestore.getInstance();
            this.storage = firebase.storage();
            yield FirebaseDatastores_1.FirebaseDatastores.init();
            yield this.prefs.init();
            if (opts.noInitialSnapshot) {
                log.debug("Skipping initial snapshot");
            }
            else {
                log.debug("Performing initial snapshot");
                const snapshotListener = (event) => __awaiter(this, void 0, void 0, function* () { return this.docMetaSnapshotEventDispatcher.dispatchEvent(event); });
                this.primarySnapshot = yield this.snapshot(snapshotListener, errorListener);
            }
            this.initialized = true;
            return {};
        });
    }
    snapshot(docMetaSnapshotEventListener, errorListener = Functions_1.NULL_FUNCTION) {
        return __awaiter(this, void 0, void 0, function* () {
            const uid = FirebaseDatastores_1.FirebaseDatastores.getUserID();
            const query = this.firestore
                .collection(DatastoreCollection.DOC_INFO)
                .where('uid', '==', uid);
            const batchIDs = {
                written: 0,
                committed: 0
            };
            const onNextForSnapshot = (snapshot) => {
                try {
                    const consistency = this.toConsistency(snapshot);
                    const batchID = batchIDs[consistency];
                    this.handleDocInfoSnapshot(snapshot, docMetaSnapshotEventListener, batchID);
                    batchIDs[consistency]++;
                }
                catch (e) {
                    log.error("Could not handle snapshot: ", e);
                    errorListener(e);
                }
            };
            const onSnapshotError = (err) => {
                log.error("Could not handle snapshot: ", err);
                errorListener(err);
            };
            if (this.preferredSource() === 'cache') {
                try {
                    const stopwatch = Stopwatches_1.Stopwatches.create();
                    const cachedSnapshot = yield query.get({ source: 'cache' });
                    log.info("Initial cached snapshot duration: ", stopwatch.stop());
                    onNextForSnapshot(cachedSnapshot);
                }
                catch (e) {
                }
            }
            const unsubscribe = query.onSnapshot({ includeMetadataChanges: true }, onNextForSnapshot, onSnapshotError);
            return {
                unsubscribe
            };
        });
    }
    stop() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.primarySnapshot && this.primarySnapshot.unsubscribe) {
                this.primarySnapshot.unsubscribe();
            }
        });
    }
    contains(fingerprint) {
        return __awaiter(this, void 0, void 0, function* () {
            const docMeta = yield this.getDocMeta(fingerprint);
            return docMeta !== null;
        });
    }
    delete(docMetaFileRef, datastoreMutation = new DatastoreMutation_1.DefaultDatastoreMutation()) {
        return __awaiter(this, void 0, void 0, function* () {
            log.info("delete: ", docMetaFileRef);
            if (docMetaFileRef.docFile && docMetaFileRef.docFile.name) {
                yield this.deleteFile(Backend_1.Backend.STASH, docMetaFileRef.docFile);
            }
            const id = FirebaseDatastores_1.FirebaseDatastores.computeDocMetaID(docMetaFileRef.fingerprint);
            const docInfoRef = this.firestore
                .collection(DatastoreCollection.DOC_INFO)
                .doc(id);
            const docMetaRef = this.firestore
                .collection(DatastoreCollection.DOC_META)
                .doc(id);
            try {
                this.handleDatastoreMutations(docMetaRef, datastoreMutation, 'delete');
                const commitPromise = Promise.all([
                    this.waitForCommit(docMetaRef),
                    this.waitForCommit(docInfoRef)
                ]);
                const batch = this.firestore.batch();
                batch.delete(docInfoRef);
                batch.delete(docMetaRef);
                yield batch.commit();
                yield commitPromise;
                return {};
            }
            finally {
            }
        });
    }
    getDocMeta(fingerprint, opts = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = FirebaseDatastores_1.FirebaseDatastores.computeDocMetaID(fingerprint);
            return yield this.getDocMetaDirectly(id, opts);
        });
    }
    getDocMetaDirectly(id, opts = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const ref = this.firestore
                .collection(DatastoreCollection.DOC_META)
                .doc(id);
            const createSnapshot = () => __awaiter(this, void 0, void 0, function* () {
                const preferredSource = opts.preferredSource || this.preferredSource();
                if (preferredSource === 'cache') {
                    const cachePromise = ref.get({ source: 'cache' });
                    const serverPromise = ref.get({ source: 'server' });
                    return yield Promises_1.Promises.any(cachePromise, serverPromise);
                }
                else if (Preconditions_1.isPresent(opts.preferredSource)) {
                    return yield ref.get({ source: opts.preferredSource });
                }
                else {
                    return yield ref.get();
                }
            });
            const snapshot = yield createSnapshot();
            const recordHolder = snapshot.data();
            if (!recordHolder) {
                log.warn("Could not get docMeta with id: " + id);
                return null;
            }
            return recordHolder.value.value;
        });
    }
    writeFile(backend, ref, data, opts = new Datastore_1.DefaultWriteFileOpts()) {
        return __awaiter(this, void 0, void 0, function* () {
            log.debug(`writeFile: ${backend}: `, ref);
            const storagePath = FirebaseDatastores_1.FirebaseDatastores.computeStoragePath(backend, ref);
            const pendingFileWriteKey = storagePath.path;
            let latch = this.pendingFileWrites[pendingFileWriteKey];
            if (latch) {
                log.warn("Write already pending.  Going to return latch.");
                return this.pendingFileWrites[pendingFileWriteKey].get();
            }
            latch = this.pendingFileWrites[pendingFileWriteKey] = new Latch_1.Latch();
            try {
                const visibility = opts.visibility || Visibility_1.Visibility.PRIVATE;
                const storage = this.storage;
                const fileRef = storage.ref().child(storagePath.path);
                if (!Preconditions_1.isPresent(data)) {
                    if (opts.updateMeta) {
                        const meta = { visibility };
                        yield fileRef.updateMetadata(meta);
                        log.info("File metadata updated with: ", meta);
                        return this.getFile(backend, ref);
                    }
                    else {
                        throw new Error("No data present");
                    }
                }
                if (yield this.containsFile(backend, ref)) {
                    return this.getFile(backend, ref);
                }
                let uploadTask;
                const uid = FirebaseDatastores_1.FirebaseDatastores.getUserID();
                const meta = { uid, visibility };
                const metadata = { customMetadata: meta };
                if (storagePath.settings) {
                    metadata.contentType = storagePath.settings.contentType;
                    metadata.cacheControl = storagePath.settings.cacheControl;
                }
                if (typeof data === 'string') {
                    uploadTask = fileRef.putString(data, 'raw', metadata);
                }
                else if (data instanceof Blob) {
                    uploadTask = fileRef.put(data, metadata);
                }
                else {
                    if (Files_1.FileHandles.isFileHandle(data)) {
                        const fileHandle = data;
                        const fileURL = FilePaths_1.FilePaths.toURL(fileHandle.path);
                        const blob = yield URLs_1.URLs.toBlob(fileURL);
                        uploadTask = fileRef.put(blob, metadata);
                    }
                    else {
                        uploadTask = fileRef.put(Uint8Array.from(data), metadata);
                    }
                }
                const started = Date.now();
                const task = ProgressTracker_1.ProgressTracker.createNonce();
                const progressID = 'firebase-upload-' + STORAGE_UPLOAD_ID++;
                uploadTask.on('state_changed', (snapshotData) => {
                    const snapshot = snapshotData;
                    const now = Date.now();
                    const duration = now - started;
                    const percentage = Percentages_1.Percentages.calculate(snapshot.bytesTransferred, snapshot.totalBytes);
                    log.notice('Upload is ' + percentage + '% done');
                    const progress = {
                        id: progressID,
                        task,
                        completed: snapshot.bytesTransferred,
                        total: snapshot.totalBytes,
                        duration,
                        progress: percentage,
                        timestamp: Date.now(),
                        name: `${backend}/${ref.name}`
                    };
                    ProgressMessages_1.ProgressMessages.broadcast(progress);
                    switch (snapshot.state) {
                        case firebase.storage.TaskState.PAUSED:
                            break;
                        case firebase.storage.TaskState.RUNNING:
                            break;
                    }
                });
                const uploadTaskSnapshot = yield uploadTask;
                const downloadURL = uploadTaskSnapshot.downloadURL;
                const result = {
                    backend,
                    ref,
                    url: downloadURL
                };
                latch.resolve(result);
                delete this.pendingFileWrites[pendingFileWriteKey];
                return result;
            }
            catch (e) {
                latch.reject(e);
                throw e;
            }
        });
    }
    createFileMetaID(backend, ref) {
        const storagePath = FirebaseDatastores_1.FirebaseDatastores.computeStoragePath(backend, ref);
        return Hashcodes_1.Hashcodes.create(storagePath.path);
    }
    getFile(backend, ref, opts = {}) {
        Datastores_1.Datastores.assertNetworkLayer(this, opts.networkLayer);
        log.debug("getFile");
        const storage = this.storage;
        const storagePath = FirebaseDatastores_1.FirebaseDatastores.computeStoragePath(backend, ref);
        const storageRef = storage.ref().child(storagePath.path);
        const downloadURL = DownloadURLs.computeDownloadURL(backend, ref, storagePath, storageRef, opts);
        const url = this.wrappedDownloadURL(downloadURL);
        return { backend, ref, url };
    }
    wrappedDownloadURL(url) {
        return url;
    }
    containsFile(backend, ref) {
        return __awaiter(this, void 0, void 0, function* () {
            const storagePath = FirebaseDatastores_1.FirebaseDatastores.computeStoragePath(backend, ref);
            const storage = this.storage;
            const storageRef = storage.ref().child(storagePath.path);
            const downloadURL = DownloadURLs.computeDownloadURL(backend, ref, storagePath, storageRef, {});
            return DownloadURLs.checkExistence(downloadURL);
        });
    }
    deleteFile(backend, ref) {
        return __awaiter(this, void 0, void 0, function* () {
            log.debug("deleteFile: ", backend, ref);
            try {
                const storage = this.storage;
                const storagePath = FirebaseDatastores_1.FirebaseDatastores.computeStoragePath(backend, ref);
                const fileRef = storage.ref().child(storagePath.path);
                yield fileRef.delete();
            }
            catch (e) {
                if (e.code === "storage/object-not-found") {
                    return;
                }
                throw e;
            }
        });
    }
    write(fingerprint, data, docInfo, opts = new DefaultWriteOpts()) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.handleWriteFile(opts);
            const datastoreMutation = opts.datastoreMutation || new DatastoreMutation_1.DefaultDatastoreMutation();
            try {
                docInfo = Object.assign({}, Dictionaries_1.Dictionaries.onlyDefinedProperties(docInfo));
                const id = FirebaseDatastores_1.FirebaseDatastores.computeDocMetaID(fingerprint);
                const createRecordPermission = () => __awaiter(this, void 0, void 0, function* () {
                    const docPermission = yield DocPermissions_1.DocPermissions.get(id, { source: 'server' });
                    if (docPermission) {
                        return {
                            visibility: docPermission.visibility,
                            groups: docPermission.groups
                        };
                    }
                    return {
                        visibility: docInfo.visibility || Visibility_1.Visibility.PRIVATE
                    };
                });
                const recordPermission = Dictionaries_1.Dictionaries.onlyDefinedProperties(yield createRecordPermission());
                const docMetaRef = this.firestore
                    .collection(DatastoreCollection.DOC_META)
                    .doc(id);
                const docInfoRef = this.firestore
                    .collection(DatastoreCollection.DOC_INFO)
                    .doc(id);
                this.handleDatastoreMutations(docMetaRef, datastoreMutation, 'write');
                const commitPromise = Promise.all([
                    this.waitForCommit(docMetaRef),
                    this.waitForCommit(docInfoRef)
                ]);
                const batch = this.firestore.batch();
                log.info(`Write of doc with id ${id} and permission: `, recordPermission);
                batch.set(docMetaRef, this.createRecordHolderForDocMeta(docInfo, data, recordPermission));
                batch.set(docInfoRef, this.createRecordHolderForDocInfo(docInfo, recordPermission));
                yield batch.commit();
                log.debug("Waiting for promise...");
                yield commitPromise;
                log.debug("Waiting for promise...done");
            }
            finally {
            }
        });
    }
    overview() {
        return __awaiter(this, void 0, void 0, function* () {
            const docMetaRefs = yield this.getDocMetaRefs();
            const user = yield Firebase_1.Firebase.currentUser();
            return {
                nrDocs: docMetaRefs.length,
                created: user.metadata.creationTime
            };
        });
    }
    capabilities() {
        return {
            networkLayers: Datastore_1.NetworkLayers.WEB,
            permission: { mode: 'rw' }
        };
    }
    getPrefs() {
        const prefs = Preconditions_1.Preconditions.assertPresent(this.prefs);
        return {
            get() {
                return {
                    prefs,
                    unsubscribe: Functions_1.NULL_FUNCTION
                };
            }
        };
    }
    createRecordHolderForDocMeta(docInfo, docMeta, opts = new DefaultWriteOpts()) {
        const visibility = opts.visibility || Visibility_1.Visibility.PRIVATE;
        const uid = FirebaseDatastores_1.FirebaseDatastores.getUserID();
        const id = FirebaseDatastores_1.FirebaseDatastores.computeDocMetaID(docInfo.fingerprint, uid);
        const docMetaHolder = {
            docInfo,
            value: docMeta
        };
        const recordHolder = {
            uid,
            id,
            visibility,
            groups: opts.groups || null,
            value: docMetaHolder
        };
        return recordHolder;
    }
    createRecordHolderForDocInfo(docInfo, opts = new DefaultWriteOpts()) {
        const visibility = opts.visibility || Visibility_1.Visibility.PRIVATE;
        const uid = FirebaseDatastores_1.FirebaseDatastores.getUserID();
        const id = FirebaseDatastores_1.FirebaseDatastores.computeDocMetaID(docInfo.fingerprint, uid);
        const recordHolder = {
            uid,
            id,
            visibility,
            groups: opts.groups || null,
            value: docInfo
        };
        return recordHolder;
    }
    getDocMetaRefs() {
        return __awaiter(this, void 0, void 0, function* () {
            Preconditions_1.Preconditions.assertPresent(this.firestore, 'firestore');
            const uid = FirebaseDatastores_1.FirebaseDatastores.getUserID();
            const snapshot = yield this.firestore
                .collection(DatastoreCollection.DOC_META)
                .where('uid', '==', uid)
                .get();
            if (snapshot.empty) {
                return [];
            }
            const result = [];
            for (const doc of snapshot.docs) {
                const recordHolder = doc.data();
                result.push({ fingerprint: recordHolder.value.docInfo.fingerprint });
            }
            return result;
        });
    }
    waitForCommit(ref) {
        return new Promise(resolve => {
            const unsubscribeToSnapshot = ref.onSnapshot({ includeMetadataChanges: true }, snapshot => {
                if (!snapshot.metadata.fromCache && !snapshot.metadata.hasPendingWrites) {
                    unsubscribeToSnapshot();
                    resolve();
                }
            }, ERR_HANDLER);
        });
    }
    handleDatastoreMutations(ref, datastoreMutation, op) {
        const unsubscribeToSnapshot = ref.onSnapshot({ includeMetadataChanges: true }, snapshot => {
            if (snapshot.metadata.fromCache && snapshot.metadata.hasPendingWrites) {
                datastoreMutation.written.resolve(true);
                log.debug(`Got written mutation with op: ${op}`, ref);
            }
            if (!snapshot.metadata.fromCache && !snapshot.metadata.hasPendingWrites) {
                datastoreMutation.written.resolve(true);
                datastoreMutation.committed.resolve(true);
                log.debug(`Got committed mutation with op: ${op}`, ref);
                unsubscribeToSnapshot();
            }
        }, ERR_HANDLER);
    }
    handleDocInfoSnapshot(snapshot, docMetaSnapshotEventListener, batchID) {
        log.debug("onSnapshot... ");
        const datastore = this;
        class DefaultDocMetaLookup {
            constructor(cache) {
                this.cache = cache;
            }
            get(fingerprint) {
                return __awaiter(this, void 0, void 0, function* () {
                    const result = this.cache[fingerprint];
                    if (Preconditions_1.isPresent(result)) {
                        return result;
                    }
                    log.warn("No entry for fingerprint (fetching directly from server): " + fingerprint);
                    return yield datastore.getDocMeta(fingerprint, { preferredSource: 'server' });
                });
            }
        }
        const createDocMetaLookup = (useCache) => __awaiter(this, void 0, void 0, function* () {
            const uid = FirebaseDatastores_1.FirebaseDatastores.getUserID();
            const query = this.firestore
                .collection(DatastoreCollection.DOC_META)
                .where('uid', '==', uid);
            const source = useCache ? 'cache' : 'server';
            const stopwatch = Stopwatches_1.Stopwatches.create();
            const snapshot = yield query.get({ source });
            log.info("DocMeta lookup snapshot duration: ", stopwatch.stop());
            const docChanges = snapshot.docChanges();
            const cache = {};
            for (const docChange of docChanges) {
                const record = docChange.doc.data();
                const fingerprint = record.value.docInfo.fingerprint;
                const data = record.value.value;
                cache[fingerprint] = data;
            }
            return new DefaultDocMetaLookup(cache);
        });
        const docMetaLookupProvider = Providers_1.AsyncProviders.memoize(() => createDocMetaLookup(snapshot.metadata.fromCache));
        const docMetaMutationFromRecord = (record, mutationType = 'created') => {
            const id = record.id;
            const docInfo = record.value;
            const dataProvider = () => __awaiter(this, void 0, void 0, function* () {
                const docMetaLookup = yield docMetaLookupProvider();
                return docMetaLookup.get(docInfo.fingerprint);
            });
            const docMetaProvider = Providers_1.AsyncProviders.memoize(() => __awaiter(this, void 0, void 0, function* () {
                if (mutationType === 'deleted') {
                    throw new Error("Unable to read data when mutationType is 'deleted'");
                }
                const data = yield dataProvider();
                const docMetaID = FirebaseDatastores_1.FirebaseDatastores.computeDocMetaID(docInfo.fingerprint);
                Preconditions_1.Preconditions.assertPresent(data, `No data for docMeta with fingerprint: ${docInfo.fingerprint}, docMetaID: ${docMetaID}`);
                return DocMetas_1.DocMetas.deserialize(data, docInfo.fingerprint);
            }));
            const docMetaMutation = {
                id,
                fingerprint: docInfo.fingerprint,
                dataProvider,
                docMetaProvider,
                docInfoProvider: Providers_1.AsyncProviders.of(docInfo),
                docMetaFileRefProvider: Providers_1.AsyncProviders.of(DocMetaRef_1.DocMetaFileRefs.createFromDocInfo(docInfo)),
                mutationType
            };
            return docMetaMutation;
        };
        const docMetaMutationFromDocChange = (docChange) => {
            const record = docChange.doc.data();
            return docMetaMutationFromRecord(record, toMutationType(docChange.type));
        };
        const docMetaMutationFromDoc = (doc) => {
            const record = doc;
            return docMetaMutationFromRecord(record, 'created');
        };
        const handleDocMetaMutation = (docMetaMutation) => __awaiter(this, void 0, void 0, function* () {
            yield docMetaSnapshotEventListener({
                datastore: this.id,
                consistency,
                progress: progressTracker.incr(),
                docMetaMutations: [docMetaMutation],
                batch: {
                    id: batchID,
                    terminated: false,
                }
            });
        });
        const handleDocChange = (docChange) => {
            const docMetaMutation = docMetaMutationFromDocChange(docChange);
            handleDocMetaMutation(docMetaMutation)
                .catch(err => log.error(err));
        };
        const handleDoc = (doc) => {
            const docMetaMutation = docMetaMutationFromDoc(doc.data());
            handleDocMetaMutation(docMetaMutation)
                .catch(err => log.error(err));
        };
        const consistency = snapshot.metadata.fromCache ? 'written' : 'committed';
        const docChanges = snapshot.docChanges();
        const nrDocChanges = docChanges.length;
        const nrDocs = snapshot.docs.length;
        const progressTracker = new ProgressTracker_1.ProgressTracker({ total: docChanges.length, id: 'firebase-snapshot' });
        for (const docChange of docChanges) {
            handleDocChange(docChange);
        }
        docMetaSnapshotEventListener({
            datastore: this.id,
            consistency,
            progress: progressTracker.terminate(),
            docMetaMutations: [],
            batch: {
                id: batchID,
                terminated: true,
            }
        }).catch(err => log.error("Unable to dispatch event listener: ", err));
        log.debug("onSnapshot... done");
    }
    toConsistency(snapshot) {
        return snapshot.metadata.fromCache ? 'written' : 'committed';
    }
    addDocMetaSnapshotEventListener(docMetaSnapshotEventListener) {
        this.docMetaSnapshotEventDispatcher.addEventListener(docMetaSnapshotEventListener);
    }
    preferredSource() {
        if (AppRuntime_1.AppRuntime.isBrowser()) {
            return 'cache';
        }
        else {
            return 'default';
        }
    }
}
exports.FirebaseDatastore = FirebaseDatastore;
var DatastoreCollection;
(function (DatastoreCollection) {
    DatastoreCollection["DOC_INFO"] = "doc_info";
    DatastoreCollection["DOC_META"] = "doc_meta";
})(DatastoreCollection = exports.DatastoreCollection || (exports.DatastoreCollection = {}));
function toMutationType(docChangeType) {
    switch (docChangeType) {
        case 'added':
            return 'created';
        case 'modified':
            return 'updated';
        case 'removed':
            return 'deleted';
    }
}
class DownloadURLs {
    static checkExistence(url) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield URLs_1.URLs.existsWithGETUsingRange(url);
        });
    }
    static computeDownloadURL(backend, ref, storagePath, storageRef, opts) {
        return this.computeDownloadURLDirectly(backend, ref, storagePath, opts);
    }
    static computeDownloadURLWithStorageRef(storageRef) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield storageRef.getDownloadURL();
            }
            catch (e) {
                if (e.code === "storage/object-not-found") {
                    return undefined;
                }
                throw e;
            }
        });
    }
    static computeDownloadURLDirectly(backend, ref, storagePath, opts) {
        const toPath = () => {
            if (backend === Backend_1.Backend.PUBLIC) {
                return `${backend}/${ref.name}`;
            }
            else {
                return storagePath.path;
            }
        };
        const toURL = () => {
            const path = toPath();
            const project = process.env.POLAR_TEST_PROJECT || "polar-32b0f";
            return `https://storage.googleapis.com/${project}.appspot.com/${path}`;
        };
        return toURL();
    }
}
exports.DownloadURLs = DownloadURLs;
class DefaultWriteOpts {
    constructor() {
        this.visibility = Visibility_1.Visibility.PRIVATE;
    }
}
exports.DefaultWriteOpts = DefaultWriteOpts;
const ERR_HANDLER = (err) => log.error("Could not create snapshot for account: ", err);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlyZWJhc2VEYXRhc3RvcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJGaXJlYmFzZURhdGFzdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0EwQnFCO0FBQ3JCLDJEQUFzRDtBQUN0RCw2Q0FBeUU7QUFDekUsZ0VBQTJEO0FBRTNELHFEQUFnRDtBQUVoRCxrRUFBd0U7QUFDeEUsK0RBQTBEO0FBQzFELG1FQUFxRDtBQUNyRCxxRUFBZ0U7QUFDaEUsMkRBQWdGO0FBQ2hGLCtEQUE4RDtBQUM5RCxtREFBOEM7QUFDOUMsbUVBQThEO0FBQzlELDJFQUFrRjtBQUNsRiwrREFBK0Q7QUFDL0QsK0RBQTBEO0FBQzFELHVEQUFvRTtBQUNwRSxtREFBc0Q7QUFDdEQsNERBQXlFO0FBRXpFLDBFQUFxRTtBQUNyRSxtRUFBOEQ7QUFDOUQsOENBQXlDO0FBQ3pDLCtDQUEwQztBQUMxQyxxREFBZ0Q7QUFDaEQsNkNBQXdDO0FBQ3hDLDZEQUF3RDtBQUN4RCxnRUFBMkQ7QUFDM0Qsc0VBQWlFO0FBRWpFLHVEQUFrRDtBQUNsRCw4REFBeUQ7QUFFekQsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLElBQUksaUJBQWlCLEdBQVcsQ0FBQyxDQUFDO0FBRWxDLE1BQWEsaUJBQWtCLFNBQVEsNkJBQWlCO0lBa0JwRDtRQUNJLEtBQUssRUFBRSxDQUFDO1FBakJJLE9BQUUsR0FBRyxVQUFVLENBQUM7UUFReEIsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFJcEIsbUNBQThCLEdBQTJDLElBQUksNkJBQWEsRUFBRSxDQUFDO1FBRTdGLFVBQUssR0FBbUIsSUFBSSwrQkFBYyxFQUFFLENBQUM7UUFzUnRELHNCQUFpQixHQUF3QyxFQUFFLENBQUM7SUFsUnBFLENBQUM7SUFFWSxJQUFJLENBQUMsZ0JBQStCLHlCQUFhLEVBQzVDLE9BQTBCLEVBQUU7O1lBRTFDLElBQUksSUFBSSxDQUFD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QUVMLENBQUMsQ0FBQztRQUVGLE1BQU0sS0FBSyxHQUFHLEdBQVcsRUFBRTtZQUV2QixNQUFNLElBQUksR0FBRyxNQUFNLEVBQUUsQ0FBQztZQUV0QixNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixJQUFJLGFBQWEsQ0FBQztZQUVoRSxPQUFPLGtDQUFrQyxPQUFPLGdCQUFnQixJQUFJLEVBQUUsQ0FBQztRQUUzRSxDQUFDLENBQUM7UUFFRixPQUFPLEtBQUssRUFBRSxDQUFDO0lBRW5CLENBQUM7Q0FFSjtBQXRGRCxvQ0FzRkM7QUFRRCxNQUFhLGdCQUFnQjtJQUE3QjtRQUNvQixlQUFVLEdBQUcsdUJBQVUsQ0FBQyxPQUFPLENBQUM7SUFDcEQsQ0FBQztDQUFBO0FBRkQsNENBRUM7QUFFRCxNQUFNLFdBQVcsR0FBRyxDQUFDLEdBQVUsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyx5Q0FBeUMsRUFBRSxHQUFHLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQWJzdHJhY3REYXRhc3RvcmUsXG4gICAgQmluYXJ5RmlsZURhdGEsXG4gICAgRGF0YXN0b3JlLFxuICAgIERhdGFzdG9yZUNhcGFiaWxpdGllcyxcbiAgICBEYXRhc3RvcmVDb25zaXN0ZW5jeSxcbiAgICBEYXRhc3RvcmVJbml0T3B0cyxcbiAgICBEYXRhc3RvcmVPdmVydmlldyxcbiAgICBEYXRhc3RvcmVQcmVmcyxcbiAgICBEZWZhdWx0V3JpdGVGaWxlT3B0cyxcbiAgICBEZWxldGVSZXN1bHQsXG4gICAgRG9jTWV0YU11dGF0aW9uLFxuICAgIERvY01ldGFTbmFwc2hvdEV2ZW50LFxuICAgIERvY01ldGFTbmFwc2hvdEV2ZW50TGlzdGVuZXIsXG4gICAgRXJyb3JMaXN0ZW5lcixcbiAgICBGaWxlTWV0YSxcbiAgICBHZXRGaWxlT3B0cyxcbiAgICBHcm91cElEU3RyLFxuICAgIEluaXRSZXN1bHQsXG4gICAgTXV0YXRpb25UeXBlLFxuICAgIE5ldHdvcmtMYXllcnMsXG4gICAgUHJlZnNQcm92aWRlcixcbiAgICBTbmFwc2hvdFJlc3VsdCxcbiAgICBXcml0YWJsZUJpbmFyeU1ldGFEYXRhc3RvcmUsXG4gICAgV3JpdGVGaWxlT3B0cyxcbiAgICBXcml0ZU9wdHNcbn0gZnJvbSAnLi9EYXRhc3RvcmUnO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge0RvY01ldGFGaWxlUmVmLCBEb2NNZXRhRmlsZVJlZnMsIERvY01ldGFSZWZ9IGZyb20gJy4vRG9jTWV0YVJlZic7XG5pbXBvcnQge0JhY2tlbmR9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvZGF0YXN0b3JlL0JhY2tlbmQnO1xuaW1wb3J0IHtEb2NGaWxlTWV0YX0gZnJvbSAnLi9Eb2NGaWxlTWV0YSc7XG5pbXBvcnQge0ZpcmVzdG9yZX0gZnJvbSAnLi4vZmlyZWJhc2UvRmlyZXN0b3JlJztcbmltcG9ydCB7SURvY0luZm99IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbWV0YWRhdGEvSURvY0luZm8nO1xuaW1wb3J0IHtpc1ByZXNlbnQsIFByZWNvbmRpdGlvbnN9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvUHJlY29uZGl0aW9ucyc7XG5pbXBvcnQge0hhc2hjb2Rlc30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL0hhc2hjb2Rlcyc7XG5pbXBvcnQgKiBhcyBmaXJlYmFzZSBmcm9tICcuLi9maXJlYmFzZS9saWIvZmlyZWJhc2UnO1xuaW1wb3J0IHtEaWN0aW9uYXJpZXN9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC9EaWN0aW9uYXJpZXMnO1xuaW1wb3J0IHtEYXRhc3RvcmVNdXRhdGlvbiwgRGVmYXVsdERhdGFzdG9yZU11dGF0aW9ufSBmcm9tICcuL0RhdGFzdG9yZU11dGF0aW9uJztcbmltcG9ydCB7TlVMTF9GVU5DVElPTn0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL0Z1bmN0aW9ucyc7XG5pbXBvcnQge0RvY01ldGFzfSBmcm9tIFwiLi4vbWV0YWRhdGEvRG9jTWV0YXNcIjtcbmltcG9ydCB7UGVyY2VudGFnZXN9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC9QZXJjZW50YWdlcyc7XG5pbXBvcnQge1BlcmNlbnRhZ2UsIFByb2dyZXNzVHJhY2tlcn0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL1Byb2dyZXNzVHJhY2tlcic7XG5pbXBvcnQge0FzeW5jUHJvdmlkZXJzfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvUHJvdmlkZXJzJztcbmltcG9ydCB7RmlsZVBhdGhzfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvRmlsZVBhdGhzJztcbmltcG9ydCB7RmlsZUhhbmRsZSwgRmlsZUhhbmRsZXN9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC9GaWxlcyc7XG5pbXBvcnQge0ZpcmViYXNlLCBVc2VySUR9IGZyb20gJy4uL2ZpcmViYXNlL0ZpcmViYXNlJztcbmltcG9ydCB7SUV2ZW50RGlzcGF0Y2hlciwgU2ltcGxlUmVhY3Rvcn0gZnJvbSAnLi4vcmVhY3Rvci9TaW1wbGVSZWFjdG9yJztcbmltcG9ydCB7UHJvZ3Jlc3NNZXNzYWdlfSBmcm9tICcuLi91aS9wcm9ncmVzc19iYXIvUHJvZ3Jlc3NNZXNzYWdlJztcbmltcG9ydCB7UHJvZ3Jlc3NNZXNzYWdlc30gZnJvbSAnLi4vdWkvcHJvZ3Jlc3NfYmFyL1Byb2dyZXNzTWVzc2FnZXMnO1xuaW1wb3J0IHtTdG9wd2F0Y2hlc30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL1N0b3B3YXRjaGVzJztcbmltcG9ydCB7QXBwUnVudGltZX0gZnJvbSAnLi4vQXBwUnVudGltZSc7XG5pbXBvcnQge1Byb21pc2VzfSBmcm9tICcuLi91dGlsL1Byb21pc2VzJztcbmltcG9ydCB7VVJMc30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL1VSTHMnO1xuaW1wb3J0IHtEYXRhc3RvcmVzfSBmcm9tICcuL0RhdGFzdG9yZXMnO1xuaW1wb3J0IHtGaXJlYmFzZURhdGFzdG9yZXN9IGZyb20gJy4vRmlyZWJhc2VEYXRhc3RvcmVzJztcbmltcG9ydCB7RG9jUGVybWlzc2lvbnN9IGZyb20gXCIuL3NoYXJpbmcvZGIvRG9jUGVybWlzc2lvbnNcIjtcbmltcG9ydCB7VmlzaWJpbGl0eX0gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvZGF0YXN0b3JlL1Zpc2liaWxpdHlcIjtcbmltcG9ydCB7RmlsZVJlZn0gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvZGF0YXN0b3JlL0ZpbGVSZWZcIjtcbmltcG9ydCB7TGF0Y2h9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL3V0aWwvTGF0Y2hcIjtcbmltcG9ydCB7RmlyZXN0b3JlUHJlZnN9IGZyb20gXCIuL2ZpcmViYXNlL0ZpcmVzdG9yZVByZWZzXCI7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxubGV0IFNUT1JBR0VfVVBMT0FEX0lEOiBudW1iZXIgPSAwO1xuXG5leHBvcnQgY2xhc3MgRmlyZWJhc2VEYXRhc3RvcmUgZXh0ZW5kcyBBYnN0cmFjdERhdGFzdG9yZSBpbXBsZW1lbnRzIERhdGFzdG9yZSwgV3JpdGFibGVCaW5hcnlNZXRhRGF0YXN0b3JlIHtcblxuICAgIHB1YmxpYyByZWFkb25seSBpZCA9ICdmaXJlYmFzZSc7XG5cbiAgICBwcml2YXRlIGFwcD86IGZpcmViYXNlLmFwcC5BcHA7XG5cbiAgICBwcml2YXRlIGZpcmVzdG9yZT86IGZpcmViYXNlLmZpcmVzdG9yZS5GaXJlc3RvcmU7XG5cbiAgICBwcml2YXRlIHN0b3JhZ2U/OiBmaXJlYmFzZS5zdG9yYWdlLlN0b3JhZ2U7XG5cbiAgICBwcml2YXRlIGluaXRpYWxpemVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBwcml2YXRlIHByaW1hcnlTbmFwc2hvdD86IFNuYXBzaG90UmVzdWx0O1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBkb2NNZXRhU25hcHNob3RFdmVudERpc3BhdGNoZXI6IElFdmVudERpc3BhdGNoZXI8RG9jTWV0YVNuYXBzaG90RXZlbnQ+ID0gbmV3IFNpbXBsZVJlYWN0b3IoKTtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgcHJlZnM6IEZpcmVzdG9yZVByZWZzID0gbmV3IEZpcmVzdG9yZVByZWZzKCk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgaW5pdChlcnJvckxpc3RlbmVyOiBFcnJvckxpc3RlbmVyID0gTlVMTF9GVU5DVElPTixcbiAgICAgICAgICAgICAgICAgICAgICBvcHRzOiBEYXRhc3RvcmVJbml0T3B0cyA9IHt9KTogUHJvbWlzZTxJbml0UmVzdWx0PiB7XG5cbiAgICAgICAgaWYgKHRoaXMuaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxvZy5ub3RpY2UoXCJJbml0aWFsaXppbmcgRmlyZWJhc2VEYXRhc3RvcmUuXCIpO1xuXG4gICAgICAgIC8vIGdldCB0aGUgZmlyZWJhc2UgYXBwLiBNYWtlIHN1cmUgd2UgYXJlIGluaXRpYWxpemVkIGV4dGVybmFsbHkuXG4gICAgICAgIHRoaXMuYXBwID0gZmlyZWJhc2UuYXBwKCk7XG4gICAgICAgIHRoaXMuZmlyZXN0b3JlID0gYXdhaXQgRmlyZXN0b3JlLmdldEluc3RhbmNlKCk7XG4gICAgICAgIHRoaXMuc3RvcmFnZSA9IGZpcmViYXNlLnN0b3JhZ2UoKTtcblxuICAgICAgICBhd2FpdCBGaXJlYmFzZURhdGFzdG9yZXMuaW5pdCgpO1xuXG4gICAgICAgIGF3YWl0IHRoaXMucHJlZnMuaW5pdCgpO1xuXG4gICAgICAgIGlmIChvcHRzLm5vSW5pdGlhbFNuYXBzaG90KSB7XG4gICAgICAgICAgICBsb2cuZGVidWcoXCJTa2lwcGluZyBpbml0aWFsIHNuYXBzaG90XCIpO1xuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBsb2cuZGVidWcoXCJQZXJmb3JtaW5nIGluaXRpYWwgc25hcHNob3RcIik7XG5cbiAgICAgICAgICAgIC8vIGRvIG5vdCBydW4gdGhpcyBpZiB3ZSBzcGVjaWZ5IG9wdGlvbnMgb2Ygbm9Jbml0aWFsU25hcHNob3RcblxuICAgICAgICAgICAgY29uc3Qgc25hcHNob3RMaXN0ZW5lciA9IGFzeW5jIChldmVudDogRG9jTWV0YVNuYXBzaG90RXZlbnQpID0+IHRoaXMuZG9jTWV0YVNuYXBzaG90RXZlbnREaXNwYXRjaGVyLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuXG4gICAgICAgICAgICB0aGlzLnByaW1hcnlTbmFwc2hvdCA9IGF3YWl0IHRoaXMuc25hcHNob3Qoc25hcHNob3RMaXN0ZW5lciwgZXJyb3JMaXN0ZW5lcik7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuXG4gICAgICAgIHJldHVybiB7fTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBzbmFwc2hvdChkb2NNZXRhU25hcHNob3RFdmVudExpc3RlbmVyOiBEb2NNZXRhU25hcHNob3RFdmVudExpc3RlbmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvckxpc3RlbmVyOiBFcnJvckxpc3RlbmVyID0gTlVMTF9GVU5DVElPTik6IFByb21pc2U8U25hcHNob3RSZXN1bHQ+IHtcblxuICAgICAgICAvLyBzZXR1cCB0aGUgaW5pdGlhbCBzbmFwc2hvdCBzbyB0aGF0IHdlIHF1ZXJ5IGZvciB0aGUgdXNlcnMgZXhpc3RpbmdcbiAgICAgICAgLy8gZGF0YS4uLlxuXG4gICAgICAgIGNvbnN0IHVpZCA9IEZpcmViYXNlRGF0YXN0b3Jlcy5nZXRVc2VySUQoKTtcblxuICAgICAgICAvLyBzdGFydCBzeW5jaHJvbml6aW5nIHRoZSBkYXRhc3RvcmUuICBZb3UgTVVTVCByZWdpc3RlciB5b3VyIGxpc3RlbmVyc1xuICAgICAgICAvLyBCRUZPUkUgY2FsbGluZyBpbml0IGlmIHlvdSB3aXNoIHRvIGxpc3RlbiB0byB0aGUgZnVsbCBzdHJlYW0gb2ZcbiAgICAgICAgLy8gZXZlbnRzLlxuXG4gICAgICAgIC8vIFRoZXJlJ3Mgbm8gd2F5IHRvIGNvbnRyb2wgd2hlcmUgdGhlIHNuYXBzaG90IGNvbWVzIGZyb20gYW5kIG9uXG4gICAgICAgIC8vIHN0YXJ0dXAgc28gd2UgZG8gYSBnZXQoKSBmcm9tIHRoZSBjYWNoZSB3aGljaCB3ZSBjYW4gY29udHJvbCB3aXRoXG4gICAgICAgIC8vIEdldE9wdGlvbnMuICBUaGlzIGdldHMgdXMgZGF0YSBxdWlja2x5IGFuZCB0aGVuIHdlIHN0YXJ0IGxpc3RlbmluZyB0b1xuICAgICAgICAvLyBzbmFwc2hvdHMgYWZ0ZXIgdGhpcyB3aGljaCBjYW4gY29tZSBmcm9tIHRoZSBuZXR3b3JrIGFzeW5jXG5cbiAgICAgICAgY29uc3QgcXVlcnkgPSB0aGlzLmZpcmVzdG9yZSFcbiAgICAgICAgICAgIC5jb2xsZWN0aW9uKERhdGFzdG9yZUNvbGxlY3Rpb24uRE9DX0lORk8pXG4gICAgICAgICAgICAud2hlcmUoJ3VpZCcsICc9PScsIHVpZCk7XG5cbiAgICAgICAgdHlwZSBCYXRjaElETWFwID0ge1xuICAgICAgICAgICAgW1AgaW4gRGF0YXN0b3JlQ29uc2lzdGVuY3ldOiBudW1iZXI7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgYmF0Y2hJRHM6IEJhdGNoSURNYXAgPSB7XG4gICAgICAgICAgICB3cml0dGVuOiAwLFxuICAgICAgICAgICAgY29tbWl0dGVkOiAwXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3Qgb25OZXh0Rm9yU25hcHNob3QgPSAoc25hcHNob3Q6IGZpcmViYXNlLmZpcmVzdG9yZS5RdWVyeVNuYXBzaG90KSA9PiB7XG5cbiAgICAgICAgICAgIHRyeSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjb25zaXN0ZW5jeSA9IHRoaXMudG9Db25zaXN0ZW5jeShzbmFwc2hvdCk7XG4gICAgICAgICAgICAgICAgY29uc3QgYmF0Y2hJRCA9IGJhdGNoSURzW2NvbnNpc3RlbmN5XTtcblxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlRG9jSW5mb1NuYXBzaG90KHNuYXBzaG90LCBkb2NNZXRhU25hcHNob3RFdmVudExpc3RlbmVyLCBiYXRjaElEKTtcblxuICAgICAgICAgICAgICAgIGJhdGNoSURzW2NvbnNpc3RlbmN5XSsrO1xuXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgbG9nLmVycm9yKFwiQ291bGQgbm90IGhhbmRsZSBzbmFwc2hvdDogXCIsIGUpO1xuICAgICAgICAgICAgICAgIGVycm9yTGlzdGVuZXIoZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBvblNuYXBzaG90RXJyb3IgPSAoZXJyOiBFcnJvcikgPT4ge1xuICAgICAgICAgICAgbG9nLmVycm9yKFwiQ291bGQgbm90IGhhbmRsZSBzbmFwc2hvdDogXCIsIGVycik7XG4gICAgICAgICAgICBlcnJvckxpc3RlbmVyKGVycik7XG4gICAgICAgIH07XG5cblxuICAgICAgICBpZiAodGhpcy5wcmVmZXJyZWRTb3VyY2UoKSA9PT0gJ2NhY2hlJykge1xuXG4gICAgICAgICAgICAvLyBUcnkgdG8gZ2V0IHRoZSBGSVJTVCBzbmFwc2hvdCBmcm9tIHRoZSBjYWNoZSBpZiBwb3NzaWJsZSBhbmQgdGhlblxuICAgICAgICAgICAgLy8gY29udGludWUgYWZ0ZXIgdGhhdCB3b3JraW5nIHdpdGggc2VydmVyIHNuYXBzaG90cyBhbmQgdXBkYXRlZFxuICAgICAgICAgICAgLy8gZGF0YVxuXG4gICAgICAgICAgICB0cnkge1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RvcHdhdGNoID0gU3RvcHdhdGNoZXMuY3JlYXRlKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FjaGVkU25hcHNob3QgPSBhd2FpdCBxdWVyeS5nZXQoeyBzb3VyY2U6ICdjYWNoZScgfSk7XG4gICAgICAgICAgICAgICAgbG9nLmluZm8oXCJJbml0aWFsIGNhY2hlZCBzbmFwc2hvdCBkdXJhdGlvbjogXCIsIHN0b3B3YXRjaC5zdG9wKCkpO1xuXG4gICAgICAgICAgICAgICAgb25OZXh0Rm9yU25hcHNob3QoY2FjaGVkU25hcHNob3QpO1xuXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgLy8gbm8gY2FjaGVkIHNuYXBzaG90IGlzIGF2YWlsYWJsZSBhbmQgdGhhdCdzIG9rLlxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB1bnN1YnNjcmliZSA9XG4gICAgICAgICAgICBxdWVyeS5vblNuYXBzaG90KHtpbmNsdWRlTWV0YWRhdGFDaGFuZ2VzOiB0cnVlfSwgb25OZXh0Rm9yU25hcHNob3QsIG9uU25hcHNob3RFcnJvcik7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHVuc3Vic2NyaWJlXG4gICAgICAgIH07XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgc3RvcCgpIHtcblxuICAgICAgICBpZiAodGhpcy5wcmltYXJ5U25hcHNob3QgJiYgdGhpcy5wcmltYXJ5U25hcHNob3QudW5zdWJzY3JpYmUpIHtcbiAgICAgICAgICAgIHRoaXMucHJpbWFyeVNuYXBzaG90LnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybiB0cnVlIGlmIHRoZSBEaXNrRGF0YXN0b3JlIGNvbnRhaW5zIGEgZG9jdW1lbnQgZm9yIHRoZSBnaXZlblxuICAgICAqIGZpbmdlcnByaW50XG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIGNvbnRhaW5zKGZpbmdlcnByaW50OiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcblxuICAgICAgICAvLyBUT0RPOiB0aGlzIGlzbid0IHBhcnRpY3VsYXJseSBlZmZpY2llbnQgbm93IGJ1dCBJIGRvbid0IHRoaW5rIHdlJ3JlXG4gICAgICAgIC8vIGFjdHVhbGx5IHVzaW5nIGNvbnRhaW5zKCkgZm9yIGFueXRoaW5nIGFuZCB3ZSBtaWdodCB3YW50IHRvIHJlbW92ZVxuICAgICAgICAvLyBpdCBzaW5jZSBpdCdzIG5vdCB2ZXJ5IGVmZmljaWVudCBpZiB3ZSBqdXN0IGNhbGwgZ2V0RG9jTWV0YSBhbnl3YXkuXG4gICAgICAgIGNvbnN0IGRvY01ldGEgPSBhd2FpdCB0aGlzLmdldERvY01ldGEoZmluZ2VycHJpbnQpO1xuXG4gICAgICAgIHJldHVybiBkb2NNZXRhICE9PSBudWxsO1xuXG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGRlbGV0ZShkb2NNZXRhRmlsZVJlZjogRG9jTWV0YUZpbGVSZWYsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhc3RvcmVNdXRhdGlvbjogRGF0YXN0b3JlTXV0YXRpb248Ym9vbGVhbj4gPSBuZXcgRGVmYXVsdERhdGFzdG9yZU11dGF0aW9uKCkpOiBQcm9taXNlPFJlYWRvbmx5PERlbGV0ZVJlc3VsdD4+IHtcblxuICAgICAgICBsb2cuaW5mbyhcImRlbGV0ZTogXCIsIGRvY01ldGFGaWxlUmVmKTtcblxuICAgICAgICBpZiAoZG9jTWV0YUZpbGVSZWYuZG9jRmlsZSAmJiBkb2NNZXRhRmlsZVJlZi5kb2NGaWxlLm5hbWUpIHtcblxuICAgICAgICAgICAgLy8gdGhlIFBERi9QSFogZGF0YSBmaWxlIHNob3VsZCBiZSBhZGRlZCBhcyBhIHN0YXNoIGZpbGUgdmlhXG4gICAgICAgICAgICAvLyB3cml0ZUZpbGUgc28gaXQgYWxzbyBuZWVkcyB0byBiZSByZW1vdmVkLlxuICAgICAgICAgICAgYXdhaXQgdGhpcy5kZWxldGVGaWxlKEJhY2tlbmQuU1RBU0gsIGRvY01ldGFGaWxlUmVmLmRvY0ZpbGUpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpZCA9IEZpcmViYXNlRGF0YXN0b3Jlcy5jb21wdXRlRG9jTWV0YUlEKGRvY01ldGFGaWxlUmVmLmZpbmdlcnByaW50KTtcblxuICAgICAgICBjb25zdCBkb2NJbmZvUmVmID0gdGhpcy5maXJlc3RvcmUhXG4gICAgICAgICAgICAuY29sbGVjdGlvbihEYXRhc3RvcmVDb2xsZWN0aW9uLkRPQ19JTkZPKVxuICAgICAgICAgICAgLmRvYyhpZCk7XG5cbiAgICAgICAgY29uc3QgZG9jTWV0YVJlZiA9IHRoaXMuZmlyZXN0b3JlIVxuICAgICAgICAgICAgLmNvbGxlY3Rpb24oRGF0YXN0b3JlQ29sbGVjdGlvbi5ET0NfTUVUQSlcbiAgICAgICAgICAgIC5kb2MoaWQpO1xuXG4gICAgICAgIHRyeSB7XG5cbiAgICAgICAgICAgIHRoaXMuaGFuZGxlRGF0YXN0b3JlTXV0YXRpb25zKGRvY01ldGFSZWYsIGRhdGFzdG9yZU11dGF0aW9uLCAnZGVsZXRlJyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNvbW1pdFByb21pc2UgPSBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgdGhpcy53YWl0Rm9yQ29tbWl0KGRvY01ldGFSZWYpLFxuICAgICAgICAgICAgICAgIHRoaXMud2FpdEZvckNvbW1pdChkb2NJbmZvUmVmKVxuICAgICAgICAgICAgXSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGJhdGNoID0gdGhpcy5maXJlc3RvcmUhLmJhdGNoKCk7XG5cbiAgICAgICAgICAgIGJhdGNoLmRlbGV0ZShkb2NJbmZvUmVmKTtcbiAgICAgICAgICAgIGJhdGNoLmRlbGV0ZShkb2NNZXRhUmVmKTtcblxuICAgICAgICAgICAgYXdhaXQgYmF0Y2guY29tbWl0KCk7XG5cbiAgICAgICAgICAgIGF3YWl0IGNvbW1pdFByb21pc2U7XG5cbiAgICAgICAgICAgIHJldHVybiB7IH07XG5cbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIC8vIG5vb3AgZm9yIG5vd1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIERvY01ldGEgd2UgY3VycmVudGx5IGluIHRoZSBkYXRhc3RvcmUgZm9yIHRoaXMgZ2l2ZW5cbiAgICAgKiBmaW5nZXJwcmludCBvciBudWxsIGlmIGl0IGRvZXMgbm90IGV4aXN0LlxuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyBnZXREb2NNZXRhKGZpbmdlcnByaW50OiBzdHJpbmcsIG9wdHM6IEdldERvY01ldGFPcHRzID0ge30pOiBQcm9taXNlPHN0cmluZyB8IG51bGw+IHtcblxuICAgICAgICBjb25zdCBpZCA9IEZpcmViYXNlRGF0YXN0b3Jlcy5jb21wdXRlRG9jTWV0YUlEKGZpbmdlcnByaW50KTtcblxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5nZXREb2NNZXRhRGlyZWN0bHkoaWQsIG9wdHMpO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBEb2NNZXRhIGlmIGZyb20gdGVoIHJhdyBkb2NJRCBlbmNvZGVkIGludG8gdGhlIHVzZXJzIGFjY291bnQuXG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIGdldERvY01ldGFEaXJlY3RseShpZDogc3RyaW5nLCBvcHRzOiBHZXREb2NNZXRhT3B0cyA9IHt9KTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiB7XG5cbiAgICAgICAgY29uc3QgcmVmID0gdGhpcy5maXJlc3RvcmUhXG4gICAgICAgICAgICAuY29sbGVjdGlvbihEYXRhc3RvcmVDb2xsZWN0aW9uLkRPQ19NRVRBKVxuICAgICAgICAgICAgLmRvYyhpZCk7XG5cbiAgICAgICAgY29uc3QgY3JlYXRlU25hcHNob3QgPSBhc3luYyAoKSA9PiB7XG5cbiAgICAgICAgICAgIC8vIFRPRE86IGxpZnQgdGhpcyBvdXQgaW50byBpdHMgb3duIG1ldGhvZC5cblxuICAgICAgICAgICAgY29uc3QgcHJlZmVycmVkU291cmNlID0gb3B0cy5wcmVmZXJyZWRTb3VyY2UgfHwgdGhpcy5wcmVmZXJyZWRTb3VyY2UoKTtcblxuICAgICAgICAgICAgaWYgKHByZWZlcnJlZFNvdXJjZSA9PT0gJ2NhY2hlJykge1xuXG4gICAgICAgICAgICAgICAgLy8gRmlyZWJhc2Ugc3VwcG9ydHMgdGhyZWUgY2FjaGUgc3RyYXRlZ2llcy4gIFRoZSBmaXJzdFxuICAgICAgICAgICAgICAgIC8vIChkZWZhdWx0KSBpcyBzZXJ2ZXIgd2l0aCBmYWxsIGJhY2sgdG8gY2FjaGUgYnV0IHdoYXQgd2VcbiAgICAgICAgICAgICAgICAvLyBuZWVkIGlzIHRoZSByZXZlcnNlLiAgV2UgbmVlZCBjYWNoZSBidXQgc2VydmVyIHJlZnJlc2ggdG9cbiAgICAgICAgICAgICAgICAvLyBwdWxsIHRoZSB1cC10by1kYXRlIGNvcHkuXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyBXaGF0IHdlIG5vdyBkbyBpcyB3ZSBnZXQgdHdvIHByb21pc2VzLCB0aGVuIHJldHVybiB0aGVcbiAgICAgICAgICAgICAgICAvLyBmaXJzdCB0aGF0IHdvcmtzIG9yIHRocm93IGFuIGVycm9yIGlmIGJvdGggZmFpbC5cbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vIEluIHRoaXMgc2l0dWF0aW9uIHdlIEFMV0FZcyBnbyB0byB0aGUgc2VydmVyIHRob3VnaFxuICAgICAgICAgICAgICAgIC8vIGJlY2F1c2Ugd2UgbmVlZCB0byBnZXQgdGhlIHVwLXRvLWRhdGUgY29weSB0byByZWZyZXNoXG4gICAgICAgICAgICAgICAgLy8gQlVUIHdlIGNhbiBnZXQgdGhlIGluaXRpYWwgdmVyc2lvbiBGQVNURVIgc2luY2Ugd2VcbiAgICAgICAgICAgICAgICAvLyBjYW4gcmVzb2x2ZSBpdCBmcm9tIGNhY2hlLlxuXG4gICAgICAgICAgICAgICAgY29uc3QgY2FjaGVQcm9taXNlID0gcmVmLmdldCh7IHNvdXJjZTogJ2NhY2hlJyB9KTtcbiAgICAgICAgICAgICAgICBjb25zdCBzZXJ2ZXJQcm9taXNlID0gcmVmLmdldCh7IHNvdXJjZTogJ3NlcnZlcicgfSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZXMuYW55KGNhY2hlUHJvbWlzZSwgc2VydmVyUHJvbWlzZSk7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNQcmVzZW50KG9wdHMucHJlZmVycmVkU291cmNlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCByZWYuZ2V0KHsgc291cmNlOiBvcHRzLnByZWZlcnJlZFNvdXJjZSB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gbm93IHJldmVydCB0byBjaGVja2luZyB0aGUgc2VydmVyLCB0aGVuIGNhY2hlIGlmIHdlJ3JlXG4gICAgICAgICAgICAgICAgLy8gb2ZmbGluZS5cbiAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgcmVmLmdldCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3Qgc25hcHNob3QgPSBhd2FpdCBjcmVhdGVTbmFwc2hvdCgpO1xuXG4gICAgICAgIGNvbnN0IHJlY29yZEhvbGRlciA9IDxSZWNvcmRIb2xkZXI8RG9jTWV0YUhvbGRlcj4gfCB1bmRlZmluZWQ+IHNuYXBzaG90LmRhdGEoKTtcblxuICAgICAgICBpZiAoISByZWNvcmRIb2xkZXIpIHtcbiAgICAgICAgICAgIGxvZy53YXJuKFwiQ291bGQgbm90IGdldCBkb2NNZXRhIHdpdGggaWQ6IFwiICsgaWQpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVjb3JkSG9sZGVyLnZhbHVlLnZhbHVlO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV2UgaGF2ZSB0byBrZWVwIHRyYWNrIG9mIHBlbmRpbmcgZmlsZSB3cml0ZXMgYmVjYXVzZSBpdCdzIHBvc3NpYmxlIHRoYXRcbiAgICAgKiB0d28gc3lzdGVtcyByYWNlIGFuZCBhdHRlbXB0IHRvIHdyaXRlIHRoZSBzYW1lIGZpbGUgYXQgb25jZS5cbiAgICAgKlxuICAgICAqIFRPRE86IFdlIHNob3VsZCBwcm9iYWJseSBhYm9ydCB0aGlzIGluIHRoZSBmdXR1cmUgaWYgdGhlIGhhc2hjb2RlcyBmb3JcbiAgICAgKiB0aGUgZG9jdW1lbnRzIHdlJ3JlIHRyeWluZyB0byB3cml0ZSBhcmUgcHJlc2VudCBidXQgbm90IGlkZW50aWNhbCBvciB0aGVcbiAgICAgKiB2aXNpYmlsaXR5IHNldHRpbmdzIGFyZSBkaWZmZXJlbnQuICBFaXRoZXIgdGhhdCBvciBzdGFjayB0aGVtIHNvIHRoYXRcbiAgICAgKiB0aGUgc2Vjb25kICh3aXRoIGRpZmZlcmVudCBzZXR0aW5ncykgaXMgcGVyZm9ybWVkIGFmdGVyIHRoZSBmaXJzdC5cbiAgICAgKi9cbiAgICBwcml2YXRlIHBlbmRpbmdGaWxlV3JpdGVzOiB7W2tleTogc3RyaW5nXTogTGF0Y2g8RG9jRmlsZU1ldGE+fSA9IHt9O1xuXG4gICAgcHVibGljIGFzeW5jIHdyaXRlRmlsZShiYWNrZW5kOiBCYWNrZW5kLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmOiBGaWxlUmVmLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogQmluYXJ5RmlsZURhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRzOiBXcml0ZUZpbGVPcHRzID0gbmV3IERlZmF1bHRXcml0ZUZpbGVPcHRzKCkpOiBQcm9taXNlPERvY0ZpbGVNZXRhPiB7XG5cbiAgICAgICAgLy8gVE9ETzogdGhlIGxhdGNoIGhhbmRsaW5nLCBmaWxlIHdyaXRpbmcsIGFuZCBwcm9ncmVzcyBub3RpZmljYXRpb25cbiAgICAgICAgLy8gc2hvdWxkIGFsbCBiZSBkZWNvdXBsZWQgaW50byB0aGVpciBvd24gZnVuY3Rpb25zLlxuXG4gICAgICAgIGxvZy5kZWJ1Zyhgd3JpdGVGaWxlOiAke2JhY2tlbmR9OiBgLCByZWYpO1xuXG4gICAgICAgIGNvbnN0IHN0b3JhZ2VQYXRoID0gRmlyZWJhc2VEYXRhc3RvcmVzLmNvbXB1dGVTdG9yYWdlUGF0aChiYWNrZW5kLCByZWYpO1xuICAgICAgICBjb25zdCBwZW5kaW5nRmlsZVdyaXRlS2V5ID0gc3RvcmFnZVBhdGgucGF0aDtcblxuICAgICAgICBsZXQgbGF0Y2ggPSB0aGlzLnBlbmRpbmdGaWxlV3JpdGVzW3BlbmRpbmdGaWxlV3JpdGVLZXldO1xuXG4gICAgICAgIGlmIChsYXRjaCkge1xuICAgICAgICAgICAgbG9nLndhcm4oXCJXcml0ZSBhbHJlYWR5IHBlbmRpbmcuICBHb2luZyB0byByZXR1cm4gbGF0Y2guXCIpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGVuZGluZ0ZpbGVXcml0ZXNbcGVuZGluZ0ZpbGVXcml0ZUtleV0uZ2V0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBsYXRjaCA9IHRoaXMucGVuZGluZ0ZpbGVXcml0ZXNbcGVuZGluZ0ZpbGVXcml0ZUtleV0gPSBuZXcgTGF0Y2goKTtcblxuICAgICAgICB0cnkge1xuXG4gICAgICAgICAgICBjb25zdCB2aXNpYmlsaXR5ID0gb3B0cy52aXNpYmlsaXR5IHx8IFZpc2liaWxpdHkuUFJJVkFURTtcblxuICAgICAgICAgICAgY29uc3Qgc3RvcmFnZSA9IHRoaXMuc3RvcmFnZSE7XG5cbiAgICAgICAgICAgIGNvbnN0IGZpbGVSZWYgPSBzdG9yYWdlLnJlZigpLmNoaWxkKHN0b3JhZ2VQYXRoLnBhdGgpO1xuXG4gICAgICAgICAgICBpZiAoIWlzUHJlc2VudChkYXRhKSkge1xuXG4gICAgICAgICAgICAgICAgaWYgKG9wdHMudXBkYXRlTWV0YSkge1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1ldGE6IEZpbGVNZXRhID0geyB2aXNpYmlsaXR5IH07XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9maXJlYmFzZS5nb29nbGUuY29tL2RvY3Mvc3RvcmFnZS93ZWIvZmlsZS1tZXRhZGF0YVxuICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAvLyBPbmx5IHRoZSBwcm9wZXJ0aWVzIHNwZWNpZmllZCBpbiB0aGUgbWV0YWRhdGEgYXJlIHVwZGF0ZWQsXG4gICAgICAgICAgICAgICAgICAgIC8vIGFsbCBvdGhlcnMgYXJlIGxlZnQgdW5tb2RpZmllZC5cblxuICAgICAgICAgICAgICAgICAgICBhd2FpdCBmaWxlUmVmLnVwZGF0ZU1ldGFkYXRhKG1ldGEpO1xuXG4gICAgICAgICAgICAgICAgICAgIGxvZy5pbmZvKFwiRmlsZSBtZXRhZGF0YSB1cGRhdGVkIHdpdGg6IFwiLCBtZXRhKTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRGaWxlKGJhY2tlbmQsIHJlZik7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyB3aGVuIHRoZSBjYWxsZXIgc3BlY2lmaWVzIG51bGwgdGhleSBtZWFuIHRoYXQgdGhlcmUncyBhXG4gICAgICAgICAgICAgICAgICAgIC8vIG1ldGFkYXRhIHVwZGF0ZSB3aGljaCBuZWVkcyB0byBiZSBhcHBsaWVkLlxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBkYXRhIHByZXNlbnRcIik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChhd2FpdCB0aGlzLmNvbnRhaW5zRmlsZShiYWNrZW5kLCByZWYpKSB7XG4gICAgICAgICAgICAgICAgLy8gdGhlIGZpbGUgaXMgYWxyZWFkeSBpbiB0aGUgZGF0YXN0b3JlIHNvIGRvbid0IGF0dGVtcHQgdG9cbiAgICAgICAgICAgICAgICAvLyBvdmVyd3JpdGUgaXQgZm9yIG5vdy4gIFRoZSBmaWxlcyBhcmUgaW1tdXRhYmxlIGFuZCB3ZSBkb24ndFxuICAgICAgICAgICAgICAgIC8vIGFjY2VwdCBvdmVyd3JpdGVzLlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEZpbGUoYmFja2VuZCwgcmVmKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHVwbG9hZFRhc2s6IGZpcmViYXNlLnN0b3JhZ2UuVXBsb2FkVGFzaztcblxuICAgICAgICAgICAgY29uc3QgdWlkID0gRmlyZWJhc2VEYXRhc3RvcmVzLmdldFVzZXJJRCgpO1xuXG4gICAgICAgICAgICAvLyBzdGljayB0aGUgdWlkIGludG8gdGhlIG1ldGFkYXRhIHdoaWNoIHdlIHVzZSBmb3IgYXV0aG9yaXphdGlvbiBvZiB0aGVcbiAgICAgICAgICAgIC8vIGJsb2Igd2hlbiBub3QgcHVibGljLlxuICAgICAgICAgICAgY29uc3QgbWV0YSA9IHsgdWlkLCB2aXNpYmlsaXR5IH07XG5cbiAgICAgICAgICAgIGNvbnN0IG1ldGFkYXRhOiBmaXJlYmFzZS5zdG9yYWdlLlVwbG9hZE1ldGFkYXRhID0geyBjdXN0b21NZXRhZGF0YTogbWV0YSB9O1xuXG4gICAgICAgICAgICBpZiAoc3RvcmFnZVBhdGguc2V0dGluZ3MpIHtcbiAgICAgICAgICAgICAgICBtZXRhZGF0YS5jb250ZW50VHlwZSA9IHN0b3JhZ2VQYXRoLnNldHRpbmdzLmNvbnRlbnRUeXBlO1xuICAgICAgICAgICAgICAgIG1ldGFkYXRhLmNhY2hlQ29udHJvbCA9IHN0b3JhZ2VQYXRoLnNldHRpbmdzLmNhY2hlQ29udHJvbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHVwbG9hZFRhc2sgPSBmaWxlUmVmLnB1dFN0cmluZyhkYXRhLCAncmF3JywgbWV0YWRhdGEpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRhIGluc3RhbmNlb2YgQmxvYikge1xuICAgICAgICAgICAgICAgIHVwbG9hZFRhc2sgPSBmaWxlUmVmLnB1dChkYXRhLCBtZXRhZGF0YSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgaWYgKEZpbGVIYW5kbGVzLmlzRmlsZUhhbmRsZShkYXRhKSkge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgb25seSBoYXBwZW5zIGluIHRoZSBkZXNrdG9wIGFwcCBzbyB3ZSBjYW4gcmVhZCBmaWxlIFVSTHNcbiAgICAgICAgICAgICAgICAgICAgLy8gdG8gYmxvYnMgYW5kIG90aGVyd2lzZSBpdCBjb252ZXJ0cyBVUkxzIHRvIGZpbGVzLlxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWxlSGFuZGxlID0gPEZpbGVIYW5kbGU+IGRhdGE7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlsZVVSTCA9IEZpbGVQYXRocy50b1VSTChmaWxlSGFuZGxlLnBhdGgpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBibG9iID0gYXdhaXQgVVJMcy50b0Jsb2IoZmlsZVVSTCk7XG4gICAgICAgICAgICAgICAgICAgIHVwbG9hZFRhc2sgPSBmaWxlUmVmLnB1dChibG9iLCBtZXRhZGF0YSk7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB1cGxvYWRUYXNrID0gZmlsZVJlZi5wdXQoVWludDhBcnJheS5mcm9tKDxCdWZmZXI+IGRhdGEpLCBtZXRhZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFRPRE86IHdlIGNhbiBnZXQgcHJvZ3Jlc3MgZnJvbSB0aGUgdXBsb2FkVGFzayBoZXJlLlxuXG4gICAgICAgICAgICBjb25zdCBzdGFydGVkID0gRGF0ZS5ub3coKTtcblxuICAgICAgICAgICAgY29uc3QgdGFzayA9IFByb2dyZXNzVHJhY2tlci5jcmVhdGVOb25jZSgpO1xuXG4gICAgICAgICAgICAvLyBUT0RPOiBjcmVhdGUgYW4gaW5kZXggb2YgcGVuZGluZyBwcm9ncmVzcyBtZXNzYWdlcyBhbmQgc2hvdyB0aGVcbiAgICAgICAgICAgIC8vIE9MREVTVCBvbiBpbiB0aGUgcHJvZ3Jlc3MgYmFyLi4gYnV0IGFkZCBsaWtlIGEgNSBtaW51dGUgdGltZW91dCBpblxuICAgICAgICAgICAgLy8gY2FzZSBpdCdzIG5vdCB1cGRhdGVkLiAgIEVhY2ggcHJvZ3Jlc3MgbWVzc2FnZSBNVVNUIGhhdmUgYSAnY3JlYXRlZCdcbiAgICAgICAgICAgIC8vIHRpbWVzdGFtcCBmcm9tIG5vdyBvbiBzbyB3ZSBjYW4gR0MgdGhlbSBhbmQgb3IgaWdub3JlIHRoZW0gaWYgdGhleSdyZVxuICAgICAgICAgICAgLy8gbmV2ZXIgdXNlZCBhZ2FpblxuXG4gICAgICAgICAgICBjb25zdCBwcm9ncmVzc0lEID0gJ2ZpcmViYXNlLXVwbG9hZC0nICsgU1RPUkFHRV9VUExPQURfSUQrKztcblxuICAgICAgICAgICAgdXBsb2FkVGFzay5vbignc3RhdGVfY2hhbmdlZCcsIChzbmFwc2hvdERhdGE6IGFueSkgPT4ge1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgc25hcHNob3Q6IGZpcmViYXNlLnN0b3JhZ2UuVXBsb2FkVGFza1NuYXBzaG90ID0gc25hcHNob3REYXRhO1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgICAgICBjb25zdCBkdXJhdGlvbiA9IG5vdyAtIHN0YXJ0ZWQ7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBwZXJjZW50YWdlID0gUGVyY2VudGFnZXMuY2FsY3VsYXRlKHNuYXBzaG90LmJ5dGVzVHJhbnNmZXJyZWQsIHNuYXBzaG90LnRvdGFsQnl0ZXMpO1xuICAgICAgICAgICAgICAgIGxvZy5ub3RpY2UoJ1VwbG9hZCBpcyAnICsgcGVyY2VudGFnZSArICclIGRvbmUnKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHByb2dyZXNzOiBQcm9ncmVzc01lc3NhZ2UgPSB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBwcm9ncmVzc0lELFxuICAgICAgICAgICAgICAgICAgICB0YXNrLFxuICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZWQ6IHNuYXBzaG90LmJ5dGVzVHJhbnNmZXJyZWQsXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsOiBzbmFwc2hvdC50b3RhbEJ5dGVzLFxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3M6IDxQZXJjZW50YWdlPiBwZXJjZW50YWdlLFxuICAgICAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IERhdGUubm93KCksXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGAke2JhY2tlbmR9LyR7cmVmLm5hbWV9YFxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBQcm9ncmVzc01lc3NhZ2VzLmJyb2FkY2FzdChwcm9ncmVzcyk7XG5cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHNuYXBzaG90LnN0YXRlKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBmaXJlYmFzZS5zdG9yYWdlLlRhc2tTdGF0ZS5QQVVTRUQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBvciAncGF1c2VkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ1VwbG9hZCBpcyBwYXVzZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgZmlyZWJhc2Uuc3RvcmFnZS5UYXNrU3RhdGUuUlVOTklORzpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9yICdydW5uaW5nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ1VwbG9hZCBpcyBydW5uaW5nJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zdCB1cGxvYWRUYXNrU25hcHNob3QgPSBhd2FpdCB1cGxvYWRUYXNrO1xuXG4gICAgICAgICAgICBjb25zdCBkb3dubG9hZFVSTCA9IHVwbG9hZFRhc2tTbmFwc2hvdC5kb3dubG9hZFVSTDtcblxuICAgICAgICAgICAgY29uc3QgcmVzdWx0OiBEb2NGaWxlTWV0YSA9IHtcbiAgICAgICAgICAgICAgICBiYWNrZW5kLFxuICAgICAgICAgICAgICAgIHJlZixcbiAgICAgICAgICAgICAgICB1cmw6IGRvd25sb2FkVVJMIVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgbGF0Y2gucmVzb2x2ZShyZXN1bHQpO1xuXG4gICAgICAgICAgICAvLyBub3cgd2UgaGF2ZSB0byBjbGVhbiB1cCBhZnRlciBvdXIgbGF0Y2guXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5wZW5kaW5nRmlsZVdyaXRlc1twZW5kaW5nRmlsZVdyaXRlS2V5XTtcblxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcblxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBsYXRjaC5yZWplY3QoZSk7XG4gICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZUZpbGVNZXRhSUQoYmFja2VuZDogQmFja2VuZCwgcmVmOiBGaWxlUmVmKSB7XG4gICAgICAgIGNvbnN0IHN0b3JhZ2VQYXRoID0gRmlyZWJhc2VEYXRhc3RvcmVzLmNvbXB1dGVTdG9yYWdlUGF0aChiYWNrZW5kLCByZWYpO1xuICAgICAgICByZXR1cm4gSGFzaGNvZGVzLmNyZWF0ZShzdG9yYWdlUGF0aC5wYXRoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0RmlsZShiYWNrZW5kOiBCYWNrZW5kLFxuICAgICAgICAgICAgICAgICAgIHJlZjogRmlsZVJlZixcbiAgICAgICAgICAgICAgICAgICBvcHRzOiBHZXRGaWxlT3B0cyA9IHt9KTogRG9jRmlsZU1ldGEge1xuXG4gICAgICAgIERhdGFzdG9yZXMuYXNzZXJ0TmV0d29ya0xheWVyKHRoaXMsIG9wdHMubmV0d29ya0xheWVyKTtcblxuICAgICAgICBsb2cuZGVidWcoXCJnZXRGaWxlXCIpO1xuXG4gICAgICAgIGNvbnN0IHN0b3JhZ2UgPSB0aGlzLnN0b3JhZ2UhO1xuXG4gICAgICAgIGNvbnN0IHN0b3JhZ2VQYXRoID0gRmlyZWJhc2VEYXRhc3RvcmVzLmNvbXB1dGVTdG9yYWdlUGF0aChiYWNrZW5kLCByZWYpO1xuXG4gICAgICAgIGNvbnN0IHN0b3JhZ2VSZWYgPSBzdG9yYWdlLnJlZigpLmNoaWxkKHN0b3JhZ2VQYXRoLnBhdGgpO1xuXG4gICAgICAgIGNvbnN0IGRvd25sb2FkVVJMID1cbiAgICAgICAgICAgIERvd25sb2FkVVJMcy5jb21wdXRlRG93bmxvYWRVUkwoYmFja2VuZCwgcmVmLCBzdG9yYWdlUGF0aCwgc3RvcmFnZVJlZiwgb3B0cyk7XG5cbiAgICAgICAgY29uc3QgdXJsOiBzdHJpbmcgPSB0aGlzLndyYXBwZWREb3dubG9hZFVSTChkb3dubG9hZFVSTCk7XG5cbiAgICAgICAgcmV0dXJuIHsgYmFja2VuZCwgcmVmLCB1cmx9O1xuXG4gICAgfVxuICAgIC8qKlxuICAgICAqIE9wdGlvbmFsbHkgd3JhcCB0aGUgZG93bmxvYWQgVVJMIHdpdGggYSBtaWRkbGV3YXJlIFVSTCB3aGljaCBjYW4gcGVyZm9ybVxuICAgICAqIG9wZXJhdGlvbnMgbGlrZSBhdXRoZW50aWNhdGlvbiBmb3IgdGhlIHVuZGVybHlpbmcgZG93bmxvYWQgVVJMLlxuICAgICAqL1xuICAgIHByaXZhdGUgd3JhcHBlZERvd25sb2FkVVJMKHVybDogc3RyaW5nKSB7XG5cbiAgICAgICAgcmV0dXJuIHVybDtcblxuICAgICAgICAvLyB0aGlzIGlzIGRpc2FibGVkIGZvciBub3cuXG4gICAgICAgIC8vIHJldHVybiBcImh0dHBzOi8vdXMtY2VudHJhbDEtcG9sYXItY29ycy5jbG91ZGZ1bmN0aW9ucy5uZXQvY29ycz91cmw9XCIgKyBlbmNvZGVVUklDb21wb25lbnQodXJsKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBjb250YWluc0ZpbGUoYmFja2VuZDogQmFja2VuZCwgcmVmOiBGaWxlUmVmKTogUHJvbWlzZTxib29sZWFuPiB7XG5cbiAgICAgICAgY29uc3Qgc3RvcmFnZVBhdGggPSBGaXJlYmFzZURhdGFzdG9yZXMuY29tcHV0ZVN0b3JhZ2VQYXRoKGJhY2tlbmQsIHJlZik7XG5cbiAgICAgICAgY29uc3Qgc3RvcmFnZSA9IHRoaXMuc3RvcmFnZSE7XG4gICAgICAgIGNvbnN0IHN0b3JhZ2VSZWYgPSBzdG9yYWdlLnJlZigpLmNoaWxkKHN0b3JhZ2VQYXRoLnBhdGgpO1xuXG4gICAgICAgIGNvbnN0IGRvd25sb2FkVVJMID1cbiAgICAgICAgICAgIERvd25sb2FkVVJMcy5jb21wdXRlRG93bmxvYWRVUkwoYmFja2VuZCwgcmVmLCBzdG9yYWdlUGF0aCwgc3RvcmFnZVJlZiwge30pO1xuXG4gICAgICAgIHJldHVybiBEb3dubG9hZFVSTHMuY2hlY2tFeGlzdGVuY2UoZG93bmxvYWRVUkwpO1xuXG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGRlbGV0ZUZpbGUoYmFja2VuZDogQmFja2VuZCwgcmVmOiBGaWxlUmVmKTogUHJvbWlzZTx2b2lkPiB7XG5cbiAgICAgICAgbG9nLmRlYnVnKFwiZGVsZXRlRmlsZTogXCIsIGJhY2tlbmQsIHJlZik7XG5cbiAgICAgICAgdHJ5IHtcblxuICAgICAgICAgICAgY29uc3Qgc3RvcmFnZSA9IHRoaXMuc3RvcmFnZSE7XG5cbiAgICAgICAgICAgIGNvbnN0IHN0b3JhZ2VQYXRoID0gRmlyZWJhc2VEYXRhc3RvcmVzLmNvbXB1dGVTdG9yYWdlUGF0aChiYWNrZW5kLCByZWYpO1xuXG4gICAgICAgICAgICBjb25zdCBmaWxlUmVmID0gc3RvcmFnZS5yZWYoKS5jaGlsZChzdG9yYWdlUGF0aC5wYXRoKTtcbiAgICAgICAgICAgIGF3YWl0IGZpbGVSZWYuZGVsZXRlKCk7XG5cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuXG4gICAgICAgICAgICBpZiAoZS5jb2RlID09PSBcInN0b3JhZ2Uvb2JqZWN0LW5vdC1mb3VuZFwiKSB7XG4gICAgICAgICAgICAgICAgLy8gdGhpcyBpcyBhY2NlcHRhYmxlIGZvciBub3cgYXMgd2Ugd2FudCBkZWxldGVzIHRvIGJlXG4gICAgICAgICAgICAgICAgLy8gaWRlbXBvdGVudFxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gc29tZSBvdGhlciB0eXBlIG9mIGV4Y2VwdGlvbiBpYXMgb2NjdXJyZWRcbiAgICAgICAgICAgIHRocm93IGU7XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV3JpdGUgdGhlIGRhdGFzdG9yZSB0byBkaXNrLlxuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyB3cml0ZShmaW5nZXJwcmludDogc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgIGRvY0luZm86IElEb2NJbmZvLFxuICAgICAgICAgICAgICAgICAgICAgICBvcHRzOiBXcml0ZU9wdHMgPSBuZXcgRGVmYXVsdFdyaXRlT3B0cygpKSB7XG5cbiAgICAgICAgYXdhaXQgdGhpcy5oYW5kbGVXcml0ZUZpbGUob3B0cyk7XG5cbiAgICAgICAgY29uc3QgZGF0YXN0b3JlTXV0YXRpb24gPSBvcHRzLmRhdGFzdG9yZU11dGF0aW9uIHx8IG5ldyBEZWZhdWx0RGF0YXN0b3JlTXV0YXRpb24oKTtcblxuICAgICAgICB0cnkge1xuXG4gICAgICAgICAgICBkb2NJbmZvID0gT2JqZWN0LmFzc2lnbih7fSwgRGljdGlvbmFyaWVzLm9ubHlEZWZpbmVkUHJvcGVydGllcyhkb2NJbmZvKSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGlkID0gRmlyZWJhc2VEYXRhc3RvcmVzLmNvbXB1dGVEb2NNZXRhSUQoZmluZ2VycHJpbnQpO1xuXG4gICAgICAgICAgICBjb25zdCBjcmVhdGVSZWNvcmRQZXJtaXNzaW9uID0gYXN5bmMgKCk6IFByb21pc2U8UmVjb3JkUGVybWlzc2lvbj4gPT4ge1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZG9jUGVybWlzc2lvbiA9IGF3YWl0IERvY1Blcm1pc3Npb25zLmdldChpZCwge3NvdXJjZTogJ3NlcnZlcid9KTtcblxuICAgICAgICAgICAgICAgIGlmIChkb2NQZXJtaXNzaW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBkb2NQZXJtaXNzaW9uLnZpc2liaWxpdHksXG4gICAgICAgICAgICAgICAgICAgICAgICBncm91cHM6IGRvY1Blcm1pc3Npb24uZ3JvdXBzXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogZG9jSW5mby52aXNpYmlsaXR5IHx8IFZpc2liaWxpdHkuUFJJVkFURVxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNvbnN0IHJlY29yZFBlcm1pc3Npb25cbiAgICAgICAgICAgICAgICA9IERpY3Rpb25hcmllcy5vbmx5RGVmaW5lZFByb3BlcnRpZXMoYXdhaXQgY3JlYXRlUmVjb3JkUGVybWlzc2lvbigpKTtcblxuICAgICAgICAgICAgY29uc3QgZG9jTWV0YVJlZiA9IHRoaXMuZmlyZXN0b3JlIVxuICAgICAgICAgICAgICAgIC5jb2xsZWN0aW9uKERhdGFzdG9yZUNvbGxlY3Rpb24uRE9DX01FVEEpXG4gICAgICAgICAgICAgICAgLmRvYyhpZCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGRvY0luZm9SZWYgPSB0aGlzLmZpcmVzdG9yZSFcbiAgICAgICAgICAgICAgICAuY29sbGVjdGlvbihEYXRhc3RvcmVDb2xsZWN0aW9uLkRPQ19JTkZPKVxuICAgICAgICAgICAgICAgIC5kb2MoaWQpO1xuXG4gICAgICAgICAgICB0aGlzLmhhbmRsZURhdGFzdG9yZU11dGF0aW9ucyhkb2NNZXRhUmVmLCBkYXRhc3RvcmVNdXRhdGlvbiwgJ3dyaXRlJyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNvbW1pdFByb21pc2UgPSBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgdGhpcy53YWl0Rm9yQ29tbWl0KGRvY01ldGFSZWYpLFxuICAgICAgICAgICAgICAgIHRoaXMud2FpdEZvckNvbW1pdChkb2NJbmZvUmVmKVxuICAgICAgICAgICAgXSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGJhdGNoID0gdGhpcy5maXJlc3RvcmUhLmJhdGNoKCk7XG5cbiAgICAgICAgICAgIGxvZy5pbmZvKGBXcml0ZSBvZiBkb2Mgd2l0aCBpZCAke2lkfSBhbmQgcGVybWlzc2lvbjogYCwgcmVjb3JkUGVybWlzc2lvbik7XG5cbiAgICAgICAgICAgIGJhdGNoLnNldChkb2NNZXRhUmVmLCB0aGlzLmNyZWF0ZVJlY29yZEhvbGRlckZvckRvY01ldGEoZG9jSW5mbywgZGF0YSwgcmVjb3JkUGVybWlzc2lvbikpO1xuICAgICAgICAgICAgYmF0Y2guc2V0KGRvY0luZm9SZWYsIHRoaXMuY3JlYXRlUmVjb3JkSG9sZGVyRm9yRG9jSW5mbyhkb2NJbmZvLCByZWNvcmRQZXJtaXNzaW9uKSk7XG5cbiAgICAgICAgICAgIGF3YWl0IGJhdGNoLmNvbW1pdCgpO1xuXG4gICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIG1ha2Ugc3VyZSB0aGF0IHdlIG9ubHkgcmV0dXJuIHdoZW4gaXQncyBjb21taXR0ZWRcbiAgICAgICAgICAgIC8vIHJlbW90ZWx5Li4uXG4gICAgICAgICAgICBsb2cuZGVidWcoXCJXYWl0aW5nIGZvciBwcm9taXNlLi4uXCIpO1xuICAgICAgICAgICAgYXdhaXQgY29tbWl0UHJvbWlzZTtcbiAgICAgICAgICAgIGxvZy5kZWJ1ZyhcIldhaXRpbmcgZm9yIHByb21pc2UuLi5kb25lXCIpO1xuXG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAvLyBub29wIGZvciBub3dcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIG92ZXJ2aWV3KCk6IFByb21pc2U8RGF0YXN0b3JlT3ZlcnZpZXcgfCB1bmRlZmluZWQ+IHtcblxuICAgICAgICBjb25zdCBkb2NNZXRhUmVmcyA9IGF3YWl0IHRoaXMuZ2V0RG9jTWV0YVJlZnMoKTtcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IEZpcmViYXNlLmN1cnJlbnRVc2VyKCk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5yRG9jczogZG9jTWV0YVJlZnMubGVuZ3RoLFxuICAgICAgICAgICAgY3JlYXRlZDogdXNlciEubWV0YWRhdGEuY3JlYXRpb25UaW1lXG4gICAgICAgIH07XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgY2FwYWJpbGl0aWVzKCk6IERhdGFzdG9yZUNhcGFiaWxpdGllcyB7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5ldHdvcmtMYXllcnM6IE5ldHdvcmtMYXllcnMuV0VCLFxuICAgICAgICAgICAgcGVybWlzc2lvbjoge21vZGU6ICdydyd9XG4gICAgICAgIH07XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0UHJlZnMoKTogUHJlZnNQcm92aWRlciB7XG5cbiAgICAgICAgY29uc3QgcHJlZnMgPSBQcmVjb25kaXRpb25zLmFzc2VydFByZXNlbnQodGhpcy5wcmVmcyk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGdldCgpOiBEYXRhc3RvcmVQcmVmcyB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgcHJlZnMsXG4gICAgICAgICAgICAgICAgICAgIHVuc3Vic2NyaWJlOiBOVUxMX0ZVTkNUSU9OXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSB0aGUgZG9jdW1lbnQgdGhhdCB3ZSB3aWxsIHN0b3JlIGluIGZvciB0aGUgRG9jTWV0YVxuICAgICAqL1xuICAgIHByaXZhdGUgY3JlYXRlUmVjb3JkSG9sZGVyRm9yRG9jTWV0YShkb2NJbmZvOiBJRG9jSW5mbyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jTWV0YTogc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRzOiBXcml0ZU9wdHMgPSBuZXcgRGVmYXVsdFdyaXRlT3B0cygpKSB7XG5cbiAgICAgICAgY29uc3QgdmlzaWJpbGl0eSA9IG9wdHMudmlzaWJpbGl0eSB8fCBWaXNpYmlsaXR5LlBSSVZBVEU7XG5cbiAgICAgICAgY29uc3QgdWlkID0gRmlyZWJhc2VEYXRhc3RvcmVzLmdldFVzZXJJRCgpO1xuICAgICAgICBjb25zdCBpZCA9IEZpcmViYXNlRGF0YXN0b3Jlcy5jb21wdXRlRG9jTWV0YUlEKGRvY0luZm8uZmluZ2VycHJpbnQsIHVpZCk7XG5cbiAgICAgICAgY29uc3QgZG9jTWV0YUhvbGRlcjogRG9jTWV0YUhvbGRlciA9IHtcbiAgICAgICAgICAgIGRvY0luZm8sXG4gICAgICAgICAgICB2YWx1ZTogZG9jTWV0YVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHJlY29yZEhvbGRlcjogUmVjb3JkSG9sZGVyPERvY01ldGFIb2xkZXI+ID0ge1xuICAgICAgICAgICAgdWlkLFxuICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICB2aXNpYmlsaXR5LFxuICAgICAgICAgICAgZ3JvdXBzOiBvcHRzLmdyb3VwcyB8fCBudWxsLFxuICAgICAgICAgICAgdmFsdWU6IGRvY01ldGFIb2xkZXJcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gcmVjb3JkSG9sZGVyO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVSZWNvcmRIb2xkZXJGb3JEb2NJbmZvKGRvY0luZm86IElEb2NJbmZvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRzOiBXcml0ZU9wdHMgPSBuZXcgRGVmYXVsdFdyaXRlT3B0cygpKSB7XG5cbiAgICAgICAgY29uc3QgdmlzaWJpbGl0eSA9IG9wdHMudmlzaWJpbGl0eSB8fCBWaXNpYmlsaXR5LlBSSVZBVEU7XG5cbiAgICAgICAgY29uc3QgdWlkID0gRmlyZWJhc2VEYXRhc3RvcmVzLmdldFVzZXJJRCgpO1xuICAgICAgICBjb25zdCBpZCA9IEZpcmViYXNlRGF0YXN0b3Jlcy5jb21wdXRlRG9jTWV0YUlEKGRvY0luZm8uZmluZ2VycHJpbnQsIHVpZCk7XG5cbiAgICAgICAgY29uc3QgcmVjb3JkSG9sZGVyOiBSZWNvcmRIb2xkZXI8SURvY0luZm8+ID0ge1xuICAgICAgICAgICAgdWlkLFxuICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICB2aXNpYmlsaXR5LFxuICAgICAgICAgICAgZ3JvdXBzOiBvcHRzLmdyb3VwcyB8fCBudWxsLFxuICAgICAgICAgICAgdmFsdWU6IGRvY0luZm9cbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gcmVjb3JkSG9sZGVyO1xuXG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGdldERvY01ldGFSZWZzKCk6IFByb21pc2U8RG9jTWV0YVJlZltdPiB7XG5cbiAgICAgICAgUHJlY29uZGl0aW9ucy5hc3NlcnRQcmVzZW50KHRoaXMuZmlyZXN0b3JlLCAnZmlyZXN0b3JlJyk7XG5cbiAgICAgICAgY29uc3QgdWlkID0gRmlyZWJhc2VEYXRhc3RvcmVzLmdldFVzZXJJRCgpO1xuXG4gICAgICAgIGNvbnN0IHNuYXBzaG90ID0gYXdhaXQgdGhpcy5maXJlc3RvcmUhXG4gICAgICAgICAgICAuY29sbGVjdGlvbihEYXRhc3RvcmVDb2xsZWN0aW9uLkRPQ19NRVRBKVxuICAgICAgICAgICAgLndoZXJlKCd1aWQnLCAnPT0nLCB1aWQpXG4gICAgICAgICAgICAuZ2V0KCk7XG5cbiAgICAgICAgaWYgKHNuYXBzaG90LmVtcHR5KSB7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZXN1bHQ6IERvY01ldGFSZWZbXSA9IFtdO1xuXG4gICAgICAgIGZvciAoY29uc3QgZG9jIG9mIHNuYXBzaG90LmRvY3MpIHtcblxuICAgICAgICAgICAgY29uc3QgcmVjb3JkSG9sZGVyID0gPFJlY29yZEhvbGRlcjxEb2NNZXRhSG9sZGVyPj4gZG9jLmRhdGEoKTtcblxuICAgICAgICAgICAgcmVzdWx0LnB1c2goe2ZpbmdlcnByaW50OiByZWNvcmRIb2xkZXIudmFsdWUuZG9jSW5mby5maW5nZXJwcmludH0pO1xuXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV2FpdCBmb3IgdGhlIHJlY29yZCB0byBiZSBmdWxseSBjb21taXR0ZWQgdG8gdGhlIHJlbW90ZSBkYXRhc3RvcmUgLSBub3RcbiAgICAgKiBqdXN0IHdyaXR0ZW4gdG8gdGhlIGxvY2FsIGNhY2hlLlxuICAgICAqL1xuICAgIHByaXZhdGUgd2FpdEZvckNvbW1pdChyZWY6IGZpcmViYXNlLmZpcmVzdG9yZS5Eb2N1bWVudFJlZmVyZW5jZSk6IFByb21pc2U8dm9pZD4ge1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcblxuICAgICAgICAgICAgY29uc3QgdW5zdWJzY3JpYmVUb1NuYXBzaG90ID0gcmVmLm9uU25hcHNob3Qoe2luY2x1ZGVNZXRhZGF0YUNoYW5nZXM6IHRydWV9LCBzbmFwc2hvdCA9PiB7XG5cbiAgICAgICAgICAgICAgICBpZiAoIXNuYXBzaG90Lm1ldGFkYXRhLmZyb21DYWNoZSAmJiAhc25hcHNob3QubWV0YWRhdGEuaGFzUGVuZGluZ1dyaXRlcykge1xuICAgICAgICAgICAgICAgICAgICB1bnN1YnNjcmliZVRvU25hcHNob3QoKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSwgRVJSX0hBTkRMRVIpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBoYW5kbGVEYXRhc3RvcmVNdXRhdGlvbnMocmVmOiBmaXJlYmFzZS5maXJlc3RvcmUuRG9jdW1lbnRSZWZlcmVuY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YXN0b3JlTXV0YXRpb246IERhdGFzdG9yZU11dGF0aW9uPGJvb2xlYW4+LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wOiAnd3JpdGUnIHwgJ2RlbGV0ZScpIHtcblxuICAgICAgICBjb25zdCB1bnN1YnNjcmliZVRvU25hcHNob3QgPSByZWYub25TbmFwc2hvdCh7aW5jbHVkZU1ldGFkYXRhQ2hhbmdlczogdHJ1ZX0sIHNuYXBzaG90ID0+IHtcblxuICAgICAgICAgICAgaWYgKHNuYXBzaG90Lm1ldGFkYXRhLmZyb21DYWNoZSAmJiBzbmFwc2hvdC5tZXRhZGF0YS5oYXNQZW5kaW5nV3JpdGVzKSB7XG4gICAgICAgICAgICAgICAgZGF0YXN0b3JlTXV0YXRpb24ud3JpdHRlbi5yZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgICAgIGxvZy5kZWJ1ZyhgR290IHdyaXR0ZW4gbXV0YXRpb24gd2l0aCBvcDogJHtvcH1gLCByZWYpO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghc25hcHNob3QubWV0YWRhdGEuZnJvbUNhY2hlICYmICFzbmFwc2hvdC5tZXRhZGF0YS5oYXNQZW5kaW5nV3JpdGVzKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBpdCdzIGJlZW4gY29tbWl0dGVkIHJlbW90ZWx5IHdoaWNoIGFsc28gaW1wbGllcyBpdCB3YXNcbiAgICAgICAgICAgICAgICAvLyB3cml0dGVuIGxvY2FsbHkgc28gcmVzb2x2ZSB0aGF0IGFzIHdlbGwuIFdlIG1pZ2h0IG5vdCBhbHdheXNcbiAgICAgICAgICAgICAgICAvLyBnZXQgdGhlIGxvY2FsbHkgd3JpdHRlbiBjYWxsYmFjayBhbmQgSSB0aGluayB0aGlzIGhhcHBlbnNcbiAgICAgICAgICAgICAgICAvLyB3aGVuIHRoZSBjYWNoZSBlbnRyeSBjYW4ndCBiZSB1cGRhdGVkIGR1ZSB0byBpdCBhbHJlYWR5IGJlaW5nXG4gICAgICAgICAgICAgICAgLy8gcGVuZGluZy5cblxuICAgICAgICAgICAgICAgIGRhdGFzdG9yZU11dGF0aW9uLndyaXR0ZW4ucmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgICAgICBkYXRhc3RvcmVNdXRhdGlvbi5jb21taXR0ZWQucmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgICAgICBsb2cuZGVidWcoYEdvdCBjb21taXR0ZWQgbXV0YXRpb24gd2l0aCBvcDogJHtvcH1gLCByZWYpO1xuXG4gICAgICAgICAgICAgICAgLy8gbm90IGludGVyZXN0ZWQgaW4gc25hcHNob3RzIGZyb20gdGhpcyBkb2N1bWVudCBhbnkgbW9yZS5cbiAgICAgICAgICAgICAgICB1bnN1YnNjcmliZVRvU25hcHNob3QoKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0sIEVSUl9IQU5ETEVSKTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuIG5ldyBkYXRhIGlzIGF2YWlsYWJsZSBmcm9tIEZpcmViYXNlIHNvIHdlIGNhbiBzb2x2ZSBwcm9taXNlcyxcbiAgICAgKiBhZGQgdGhpbmdzIHRvIGxvY2FsIHN0b3JlcywgZXRjLlxuICAgICAqXG4gICAgICogQUxMIG9wZXJhdGlvbnMgYXJlIGRvbmUgdmlhIHNuYXBzaG90cyB3aGljaCB3ZSBjcmVhdGUgYW5kIHN1YnNjcmliZSB0b1xuICAgICAqIG9uIGluaXQoKS5cbiAgICAgKlxuICAgICAqIFRoaXMgc29sdmVzIHRvIHByb2JsZW1zOlxuICAgICAqXG4gICAgICogMS4gVGhlIG1vc3QgaW1wb3J0YW50LCBpcyB0aGF0IHdoZW4gZGF0YSBpcyBhZGRlZCByZW1vdGVseSAodGhlIHVzZXIgaXNcbiAgICAgKiAgICBvbiBhbm90aGVyIG1hY2hpbmUgYW5kIHRoaXMgbWFjaGluZS1yZWpvaW5zIHRoZSBuZXR3b3JrIG9yIGRldGVjdHNcbiAgICAgKiAgICBjaGFuZ2VzKSB0aGVuIGNvbnRlbnQgaWYgcHVsbGVkIGxvY2FsbHkgYW5kIGFkZGVkIHRvIHRoZSBsb2NhbFxuICAgICAqICAgIGRhdGFzdG9yZS5cbiAgICAgKlxuICAgICAqIDIuIExvY2FsIGRhdGEgaXMgYWRkZWQgdmlhIHRoZSBzYW1lIGNvZGUgcGF0aC4gIFRoZSBjb2RlIHBhdGggaXMgcmVtb3RlLVxuICAgICAqICAgIGZpcnN0IGJ1dCB0aGVuIHRoZW4gaW1tZWRpYXRlbHkgcmVzb2x2ZWQgZnJvbSB0aGUgY2FjaGUgYW5kIGFkZGVkXG4gICAgICogICAgbG9jYWxseS5cbiAgICAgKi9cbiAgICBwcml2YXRlIGhhbmRsZURvY0luZm9TbmFwc2hvdChzbmFwc2hvdDogZmlyZWJhc2UuZmlyZXN0b3JlLlF1ZXJ5U25hcHNob3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jTWV0YVNuYXBzaG90RXZlbnRMaXN0ZW5lcjogRG9jTWV0YVNuYXBzaG90RXZlbnRMaXN0ZW5lcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXRjaElEOiBudW1iZXIpIHtcblxuICAgICAgICBsb2cuZGVidWcoXCJvblNuYXBzaG90Li4uIFwiKTtcblxuICAgICAgICB0eXBlIERvY01ldGFEYXRhID0gc3RyaW5nIHwgbnVsbDtcblxuICAgICAgICBpbnRlcmZhY2UgRG9jTWV0YUxvb2t1cCB7XG4gICAgICAgICAgICBnZXQoZmluZ2VycHJpbnQ6IHN0cmluZyk6IFByb21pc2U8RG9jTWV0YURhdGE+O1xuXG4gICAgICAgICAgICAvLyBbZmluZ2VycHJpbnQ6IHN0cmluZ106IERvY01ldGFEYXRhO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIExvY2FsIGNhY2hlIGZvciBzdG9yaW5nIERvY01ldGEgdGhhdCB3ZSBoYXZlbid0IGZldGNoZWQgeWV0LlxuICAgICAgICAgKi9cbiAgICAgICAgaW50ZXJmYWNlIERvY01ldGFDYWNoZSB7XG4gICAgICAgICAgICBbZmluZ2VycHJpbnQ6IHN0cmluZ106IERvY01ldGFEYXRhO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZGF0YXN0b3JlID0gdGhpcztcblxuICAgICAgICBjbGFzcyBEZWZhdWx0RG9jTWV0YUxvb2t1cCBpbXBsZW1lbnRzIERvY01ldGFMb29rdXAge1xuXG4gICAgICAgICAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNhY2hlOiBEb2NNZXRhQ2FjaGUpIHtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwdWJsaWMgYXN5bmMgZ2V0KGZpbmdlcnByaW50OiBzdHJpbmcpOiBQcm9taXNlPERvY01ldGFEYXRhPiB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLmNhY2hlW2ZpbmdlcnByaW50XTtcblxuICAgICAgICAgICAgICAgIGlmIChpc1ByZXNlbnQocmVzdWx0KSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIHdlIGRvbid0IGhhdmUgdGhpcyBpbiB0aGUgbG9jYWwgY2FjaGUgd2hpY2ggd2UgU0hPVUxEIGJ1dFxuICAgICAgICAgICAgICAgIC8vIGRvbnQnIGdlbmVyYXRlIGFuIGVycm9yIGhlcmUuICBXZSBzaG91bGQgZm9yY2UgYSBmZXRjaCBmcm9tXG4gICAgICAgICAgICAgICAgLy8gdGhlIHNlcnZlci5cblxuICAgICAgICAgICAgICAgIGxvZy53YXJuKFwiTm8gZW50cnkgZm9yIGZpbmdlcnByaW50IChmZXRjaGluZyBkaXJlY3RseSBmcm9tIHNlcnZlcik6IFwiICsgZmluZ2VycHJpbnQpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGRhdGFzdG9yZS5nZXREb2NNZXRhKGZpbmdlcnByaW50LCB7cHJlZmVycmVkU291cmNlOiAnc2VydmVyJ30pO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRPRE86IHdlIHNob3VsZCBzaGF2ZSBBTk9USEVSIDUwMG1zIGJ5IGhpbnRpbmcgdGhhdCB0aGlzIHBhZ2Ugd2lsbFxuICAgICAgICAvLyBuZWVkIEJPVEggdGhlIGRvY19tZXRhIGFuZCBkb2NfaW5mbyBkYXRhIChJIHRoaW5rKSBieSBsb2FkaW5nIHRoZW1cbiAgICAgICAgLy8gYm90aCBhdCB0aGUgc2FtZSB0aW1lIChpbiBwYXJhbGxlbCB2aWEgUHJvbWlzZXMuYWxsKVxuICAgICAgICBjb25zdCBjcmVhdGVEb2NNZXRhTG9va3VwID0gYXN5bmMgKHVzZUNhY2hlOiBib29sZWFuKTogUHJvbWlzZTxEb2NNZXRhTG9va3VwPiA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IHVpZCA9IEZpcmViYXNlRGF0YXN0b3Jlcy5nZXRVc2VySUQoKTtcblxuICAgICAgICAgICAgY29uc3QgcXVlcnkgPSB0aGlzLmZpcmVzdG9yZSFcbiAgICAgICAgICAgICAgICAuY29sbGVjdGlvbihEYXRhc3RvcmVDb2xsZWN0aW9uLkRPQ19NRVRBKVxuICAgICAgICAgICAgICAgIC53aGVyZSgndWlkJywgJz09JywgdWlkKTtcblxuICAgICAgICAgICAgY29uc3Qgc291cmNlID0gdXNlQ2FjaGUgPyAnY2FjaGUnIDogJ3NlcnZlcic7XG5cbiAgICAgICAgICAgIGNvbnN0IHN0b3B3YXRjaCA9IFN0b3B3YXRjaGVzLmNyZWF0ZSgpO1xuICAgICAgICAgICAgY29uc3Qgc25hcHNob3QgPSBhd2FpdCBxdWVyeS5nZXQoe3NvdXJjZX0pO1xuICAgICAgICAgICAgbG9nLmluZm8oXCJEb2NNZXRhIGxvb2t1cCBzbmFwc2hvdCBkdXJhdGlvbjogXCIsIHN0b3B3YXRjaC5zdG9wKCkpO1xuXG4gICAgICAgICAgICBjb25zdCBkb2NDaGFuZ2VzID0gc25hcHNob3QuZG9jQ2hhbmdlcygpO1xuXG4gICAgICAgICAgICBjb25zdCBjYWNoZTogRG9jTWV0YUNhY2hlID0ge307XG5cbiAgICAgICAgICAgIC8vIFRPRE86IGlmIHdlIGRpZCBhIGxvb2t1cCBieSBJRCBhbmQgbm90IGJ5IGZpbmdlcnByaW50IHdlIGNvdWxkXG4gICAgICAgICAgICAvLyBwcm9iYWJseSBrZWVwIHRoZSBkYXRhIEpVU1Qgd2l0aGluIGxvY2FsU3RvcmFnZSB1bnRpbCBpdCdzXG4gICAgICAgICAgICAvLyByZXF1ZXN0ZWQgdG8gYXZvaWQga2VlcGluZyBpdCBpbiB0aGlzIGluLW1lbW9yeSBtYXAgd2hpY2ggY291bGRcbiAgICAgICAgICAgIC8vIGhlbHAgd2l0aCBtZW1vcnkgcHJlc3N1cmUgYnV0IHdlIHNob3VsZCB3YWl0IHVudGlsIHRoaXMgaXMgYVxuICAgICAgICAgICAgLy8gcHJvYmxlbSBhcyBpdCdzIGEgcHJlbWF0dXJlIG9wdGltaXphdGlvbiByaWdodCBub3cuXG5cbiAgICAgICAgICAgIGZvciAoY29uc3QgZG9jQ2hhbmdlIG9mIGRvY0NoYW5nZXMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZWNvcmQgPSA8UmVjb3JkSG9sZGVyPERvY01ldGFIb2xkZXI+PiBkb2NDaGFuZ2UuZG9jLmRhdGEoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBmaW5nZXJwcmludCA9IHJlY29yZC52YWx1ZS5kb2NJbmZvLmZpbmdlcnByaW50O1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByZWNvcmQudmFsdWUudmFsdWU7XG4gICAgICAgICAgICAgICAgY2FjaGVbZmluZ2VycHJpbnRdID0gZGF0YTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG5ldyBEZWZhdWx0RG9jTWV0YUxvb2t1cChjYWNoZSk7XG5cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBkb2NNZXRhTG9va3VwUHJvdmlkZXIgPVxuICAgICAgICAgICAgQXN5bmNQcm92aWRlcnMubWVtb2l6ZSgoKSA9PiBjcmVhdGVEb2NNZXRhTG9va3VwKHNuYXBzaG90Lm1ldGFkYXRhLmZyb21DYWNoZSkpO1xuXG4gICAgICAgIGNvbnN0IGRvY01ldGFNdXRhdGlvbkZyb21SZWNvcmQgPSAocmVjb3JkOiBSZWNvcmRIb2xkZXI8SURvY0luZm8+LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11dGF0aW9uVHlwZTogTXV0YXRpb25UeXBlID0gJ2NyZWF0ZWQnKSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IGlkID0gcmVjb3JkLmlkO1xuXG4gICAgICAgICAgICBjb25zdCBkb2NJbmZvID0gcmVjb3JkLnZhbHVlO1xuXG4gICAgICAgICAgICBjb25zdCBkYXRhUHJvdmlkZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZG9jTWV0YUxvb2t1cCA9IGF3YWl0IGRvY01ldGFMb29rdXBQcm92aWRlcigpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkb2NNZXRhTG9va3VwLmdldChkb2NJbmZvLmZpbmdlcnByaW50KTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNvbnN0IGRvY01ldGFQcm92aWRlciA9IEFzeW5jUHJvdmlkZXJzLm1lbW9pemUoYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgaWYgKG11dGF0aW9uVHlwZSA9PT0gJ2RlbGV0ZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuYWJsZSB0byByZWFkIGRhdGEgd2hlbiBtdXRhdGlvblR5cGUgaXMgJ2RlbGV0ZWQnXCIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBkYXRhUHJvdmlkZXIoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBkb2NNZXRhSUQgPSBGaXJlYmFzZURhdGFzdG9yZXMuY29tcHV0ZURvY01ldGFJRChkb2NJbmZvLmZpbmdlcnByaW50KTtcbiAgICAgICAgICAgICAgICBQcmVjb25kaXRpb25zLmFzc2VydFByZXNlbnQoZGF0YSwgYE5vIGRhdGEgZm9yIGRvY01ldGEgd2l0aCBmaW5nZXJwcmludDogJHtkb2NJbmZvLmZpbmdlcnByaW50fSwgZG9jTWV0YUlEOiAke2RvY01ldGFJRH1gKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gRG9jTWV0YXMuZGVzZXJpYWxpemUoZGF0YSEsIGRvY0luZm8uZmluZ2VycHJpbnQpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGRvY01ldGFNdXRhdGlvbjogRmlyZWJhc2VEb2NNZXRhTXV0YXRpb24gPSB7XG4gICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgZmluZ2VycHJpbnQ6IGRvY0luZm8uZmluZ2VycHJpbnQsXG4gICAgICAgICAgICAgICAgZGF0YVByb3ZpZGVyLFxuICAgICAgICAgICAgICAgIGRvY01ldGFQcm92aWRlcixcbiAgICAgICAgICAgICAgICBkb2NJbmZvUHJvdmlkZXI6IEFzeW5jUHJvdmlkZXJzLm9mKGRvY0luZm8pLFxuICAgICAgICAgICAgICAgIGRvY01ldGFGaWxlUmVmUHJvdmlkZXI6IEFzeW5jUHJvdmlkZXJzLm9mKERvY01ldGFGaWxlUmVmcy5jcmVhdGVGcm9tRG9jSW5mbyhkb2NJbmZvKSksXG4gICAgICAgICAgICAgICAgbXV0YXRpb25UeXBlXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICByZXR1cm4gZG9jTWV0YU11dGF0aW9uO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgZG9jTWV0YU11dGF0aW9uRnJvbURvY0NoYW5nZSA9IChkb2NDaGFuZ2U6IGZpcmViYXNlLmZpcmVzdG9yZS5Eb2N1bWVudENoYW5nZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVjb3JkID0gPFJlY29yZEhvbGRlcjxJRG9jSW5mbz4+IGRvY0NoYW5nZS5kb2MuZGF0YSgpO1xuICAgICAgICAgICAgcmV0dXJuIGRvY01ldGFNdXRhdGlvbkZyb21SZWNvcmQocmVjb3JkLCB0b011dGF0aW9uVHlwZShkb2NDaGFuZ2UudHlwZSkpO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgZG9jTWV0YU11dGF0aW9uRnJvbURvYyA9IChkb2M6IGZpcmViYXNlLmZpcmVzdG9yZS5Eb2N1bWVudERhdGEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlY29yZCA9IDxSZWNvcmRIb2xkZXI8SURvY0luZm8+PiBkb2M7XG4gICAgICAgICAgICByZXR1cm4gZG9jTWV0YU11dGF0aW9uRnJvbVJlY29yZChyZWNvcmQsICdjcmVhdGVkJyk7XG5cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBoYW5kbGVEb2NNZXRhTXV0YXRpb24gPSBhc3luYyAoZG9jTWV0YU11dGF0aW9uOiBEb2NNZXRhTXV0YXRpb24pID0+IHtcblxuICAgICAgICAgICAgLy8gZGlzcGF0Y2ggYSBwcm9ncmVzcyBldmVudCBzbyB3ZSBjYW4gZGV0ZWN0IGhvdyBmYXIgd2UndmUgYmVlblxuICAgICAgICAgICAgLy8gbG9hZGluZ1xuICAgICAgICAgICAgYXdhaXQgZG9jTWV0YVNuYXBzaG90RXZlbnRMaXN0ZW5lcih7XG4gICAgICAgICAgICAgICAgZGF0YXN0b3JlOiB0aGlzLmlkLFxuICAgICAgICAgICAgICAgIGNvbnNpc3RlbmN5LFxuICAgICAgICAgICAgICAgIHByb2dyZXNzOiBwcm9ncmVzc1RyYWNrZXIuaW5jcigpLFxuICAgICAgICAgICAgICAgIGRvY01ldGFNdXRhdGlvbnM6IFtkb2NNZXRhTXV0YXRpb25dLFxuICAgICAgICAgICAgICAgIGJhdGNoOiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBiYXRjaElELFxuICAgICAgICAgICAgICAgICAgICB0ZXJtaW5hdGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGhhbmRsZURvY0NoYW5nZSA9IChkb2NDaGFuZ2U6IGZpcmViYXNlLmZpcmVzdG9yZS5Eb2N1bWVudENoYW5nZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZG9jTWV0YU11dGF0aW9uID0gZG9jTWV0YU11dGF0aW9uRnJvbURvY0NoYW5nZShkb2NDaGFuZ2UpO1xuICAgICAgICAgICAgaGFuZGxlRG9jTWV0YU11dGF0aW9uKGRvY01ldGFNdXRhdGlvbilcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IGxvZy5lcnJvcihlcnIpKTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGhhbmRsZURvYyA9IChkb2M6IGZpcmViYXNlLmZpcmVzdG9yZS5RdWVyeURvY3VtZW50U25hcHNob3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRvY01ldGFNdXRhdGlvbiA9IGRvY01ldGFNdXRhdGlvbkZyb21Eb2MoZG9jLmRhdGEoKSk7XG4gICAgICAgICAgICBoYW5kbGVEb2NNZXRhTXV0YXRpb24oZG9jTWV0YU11dGF0aW9uKVxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gbG9nLmVycm9yKGVycikpO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgY29uc2lzdGVuY3kgPSBzbmFwc2hvdC5tZXRhZGF0YS5mcm9tQ2FjaGUgPyAnd3JpdHRlbicgOiAnY29tbWl0dGVkJztcblxuICAgICAgICBjb25zdCBkb2NDaGFuZ2VzID0gc25hcHNob3QuZG9jQ2hhbmdlcygpO1xuXG4gICAgICAgIGNvbnN0IG5yRG9jQ2hhbmdlcyA9IGRvY0NoYW5nZXMubGVuZ3RoO1xuICAgICAgICBjb25zdCBuckRvY3MgPSBzbmFwc2hvdC5kb2NzLmxlbmd0aDtcblxuICAgICAgICAvLyBsb2cubm90aWNlKGBHT1QgU05BUFNIT1Qgd2l0aCBjb25zaXN0ZW5jeSAke2NvbnNpc3RlbmN5fSwgbnJEb2NzOlxuICAgICAgICAvLyAke25yRG9jc30sIG5yRG9jQ2hhbmdlczogJHtuckRvY0NoYW5nZXN9YCk7XG5cbiAgICAgICAgLy8gaWYgKGRvY0NoYW5nZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIC8vICAgICBsb2cubm90aWNlKFwiU0tJUFBJTkcgU05BUFNIT1QgKG5vIGRvY0NoYW5nZXMpXCIpO1xuICAgICAgICAvLyB9XG5cbiAgICAgICAgY29uc3QgcHJvZ3Jlc3NUcmFja2VyID0gbmV3IFByb2dyZXNzVHJhY2tlcih7dG90YWw6IGRvY0NoYW5nZXMubGVuZ3RoLCBpZDogJ2ZpcmViYXNlLXNuYXBzaG90J30pO1xuXG4gICAgICAgIGZvciAoY29uc3QgZG9jQ2hhbmdlIG9mIGRvY0NoYW5nZXMpIHtcblxuICAgICAgICAgICAgaGFuZGxlRG9jQ2hhbmdlKGRvY0NoYW5nZSk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHByb2dyZXNzVHJhY2tlciA9IG5ldyBQcm9ncmVzc1RyYWNrZXIoc25hcHNob3QuZG9jcy5sZW5ndGgpO1xuICAgICAgICAvL1xuICAgICAgICAvLyBmb3IgKGNvbnN0IGRvYyBvZiBzbmFwc2hvdC5kb2NzKSB7XG4gICAgICAgIC8vICAgICBoYW5kbGVEb2MoZG9jKTtcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIGRvY01ldGFTbmFwc2hvdEV2ZW50TGlzdGVuZXIoe1xuICAgICAgICAgICAgZGF0YXN0b3JlOiB0aGlzLmlkLFxuICAgICAgICAgICAgY29uc2lzdGVuY3ksXG4gICAgICAgICAgICBwcm9ncmVzczogcHJvZ3Jlc3NUcmFja2VyLnRlcm1pbmF0ZSgpLFxuICAgICAgICAgICAgZG9jTWV0YU11dGF0aW9uczogW10sXG4gICAgICAgICAgICBiYXRjaDoge1xuICAgICAgICAgICAgICAgIGlkOiBiYXRjaElELFxuICAgICAgICAgICAgICAgIHRlcm1pbmF0ZWQ6IHRydWUsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiBsb2cuZXJyb3IoXCJVbmFibGUgdG8gZGlzcGF0Y2ggZXZlbnQgbGlzdGVuZXI6IFwiLCBlcnIpKTtcblxuICAgICAgICBsb2cuZGVidWcoXCJvblNuYXBzaG90Li4uIGRvbmVcIik7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIHRvQ29uc2lzdGVuY3koc25hcHNob3Q6IGZpcmViYXNlLmZpcmVzdG9yZS5RdWVyeVNuYXBzaG90KTogRGF0YXN0b3JlQ29uc2lzdGVuY3kge1xuICAgICAgICByZXR1cm4gc25hcHNob3QubWV0YWRhdGEuZnJvbUNhY2hlID8gJ3dyaXR0ZW4nIDogJ2NvbW1pdHRlZCc7XG4gICAgfVxuXG4gICAgcHVibGljIGFkZERvY01ldGFTbmFwc2hvdEV2ZW50TGlzdGVuZXIoZG9jTWV0YVNuYXBzaG90RXZlbnRMaXN0ZW5lcjogRG9jTWV0YVNuYXBzaG90RXZlbnRMaXN0ZW5lcik6IHZvaWQge1xuICAgICAgICB0aGlzLmRvY01ldGFTbmFwc2hvdEV2ZW50RGlzcGF0Y2hlci5hZGRFdmVudExpc3RlbmVyKGRvY01ldGFTbmFwc2hvdEV2ZW50TGlzdGVuZXIpO1xuICAgIH1cblxuICAgIHByaXZhdGUgcHJlZmVycmVkU291cmNlKCk6IEZpcmVzdG9yZVNvdXJjZSB7XG5cbiAgICAgICAgaWYgKEFwcFJ1bnRpbWUuaXNCcm93c2VyKCkpIHtcbiAgICAgICAgICAgIHJldHVybiAnY2FjaGUnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICdkZWZhdWx0JztcbiAgICAgICAgfVxuXG4gICAgfVxuXG59XG5cbnR5cGUgRmlyZXN0b3JlU291cmNlID0gJ2RlZmF1bHQnIHwgJ3NlcnZlcicgfCAnY2FjaGUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJlY29yZFBlcm1pc3Npb24ge1xuXG4gICAgLy8gdGhlIHZpc2liaWxpdHkgb2YgdGhpcyByZWNvcmQuXG4gICAgcmVhZG9ubHkgdmlzaWJpbGl0eTogVmlzaWJpbGl0eTtcblxuICAgIHJlYWRvbmx5IGdyb3Vwcz86IFJlYWRvbmx5QXJyYXk8R3JvdXBJRFN0cj4gfCBudWxsO1xuXG59XG5cbi8qKlxuICogSG9sZHMgYSBkYXRhIG9iamVjdCBsaXRlcmFsIGJ5IHZhbHVlLiBUaGlzIGNvbnRhaW5zIHRoZSBoaWdoIGxldmVsXG4gKiBpbmZvcm1hdGlvbiBhYm91dCBhIGRvY3VtZW50IGluY2x1ZGluZyB0aGUgSUQgYW5kIHRoZSB2aXNpYmlsaXR5LiAgVGhlIHZhbHVlXG4gKiBvYmplY3QgcG9pbnRzIHRvIGEgbW9yZSBzcGVjaWZpYyBvYmplY3Qgd2hpY2ggaG9sZCB0aGUgYWN0dWFsIGRhdGEgd2UgbmVlZC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSZWNvcmRIb2xkZXI8VD4gZXh0ZW5kcyBSZWNvcmRQZXJtaXNzaW9uIHtcblxuICAgIC8vIHRoZSBvd25lciBvZiB0aGlzIHJlY29yZC5cbiAgICByZWFkb25seSB1aWQ6IFVzZXJJRDtcblxuICAgIHJlYWRvbmx5IGlkOiBzdHJpbmc7XG5cbiAgICByZWFkb25seSB2YWx1ZTogVDtcblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIERvY01ldGFIb2xkZXIge1xuXG4gICAgLy8gZXhwb3NlIHRoZSBoaWdoIGxldmVsIERvY0luZm8gb24gdGhpcyBvYmplY3Qgd2hpY2ggYWxsb3dzIHVzIHRvIHNlYXJjaCBieVxuICAgIC8vIFVSTCwgdGFncywgZXRjLlxuICAgIHJlYWRvbmx5IGRvY0luZm86IElEb2NJbmZvO1xuXG4gICAgcmVhZG9ubHkgdmFsdWU6IHN0cmluZztcblxufVxuXG5leHBvcnQgZW51bSBEYXRhc3RvcmVDb2xsZWN0aW9uIHtcblxuICAgIERPQ19JTkZPID0gXCJkb2NfaW5mb1wiLFxuXG4gICAgRE9DX01FVEEgPSBcImRvY19tZXRhXCIsXG5cbn1cblxuXG4vKipcbiAqIFRoZSByZXN1bHQgb2YgYSBGQiBkYXRhYmFzZSBtdXRhdGlvbi5cbiAqL1xuaW50ZXJmYWNlIE11dGF0aW9uIHtcblxufVxuXG5pbnRlcmZhY2UgUGVuZGluZ011dGF0aW9uSW5kZXgge1xuICAgIFtpZDogc3RyaW5nXTogUGVuZGluZ011dGF0aW9uO1xufVxuXG5pbnRlcmZhY2UgUGVuZGluZ011dGF0aW9uIHtcblxuICAgIGlkOiBzdHJpbmc7XG4gICAgdHlwZTogJ2RlbGV0ZScgfCAnd3JpdGUnO1xuXG59XG5cbmludGVyZmFjZSBGaXJlYmFzZURvY01ldGFNdXRhdGlvbiBleHRlbmRzIERvY01ldGFNdXRhdGlvbiB7XG4gICAgcmVhZG9ubHkgaWQ6IHN0cmluZztcbn1cblxuLyoqXG4gKiBDb252ZXJ0IGEgRmlyZXN0b3JlIERvY3VtZW50Q2hhbmdlVHlwZSB0byBhIERvY011dGF0aW9uVHlwZS4gIFdlIHByZWZlciB0aGVcbiAqIENSVUQgKGNyZWF0ZSB1cGRhdGUgZGVsZXRlKSBuYW1pbmcuXG4gKi9cbmZ1bmN0aW9uIHRvTXV0YXRpb25UeXBlKGRvY0NoYW5nZVR5cGU6IGZpcmViYXNlLmZpcmVzdG9yZS5Eb2N1bWVudENoYW5nZVR5cGUpOiBNdXRhdGlvblR5cGUge1xuXG4gICAgc3dpdGNoIChkb2NDaGFuZ2VUeXBlKSB7XG5cbiAgICAgICAgY2FzZSAnYWRkZWQnOlxuICAgICAgICAgICAgcmV0dXJuICdjcmVhdGVkJztcblxuICAgICAgICBjYXNlICdtb2RpZmllZCc6XG4gICAgICAgICAgICByZXR1cm4gJ3VwZGF0ZWQnO1xuXG4gICAgICAgIGNhc2UgJ3JlbW92ZWQnOlxuICAgICAgICAgICAgcmV0dXJuICdkZWxldGVkJztcblxuICAgIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0b3JhZ2VQYXRoIHtcbiAgICByZWFkb25seSBwYXRoOiBzdHJpbmc7XG4gICAgcmVhZG9ubHkgc2V0dGluZ3M/OiBTdG9yYWdlU2V0dGluZ3M7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RvcmFnZVNldHRpbmdzIHtcbiAgICByZWFkb25seSBjYWNoZUNvbnRyb2w6IHN0cmluZztcbiAgICByZWFkb25seSBjb250ZW50VHlwZTogc3RyaW5nO1xufVxuXG4vKipcbiAqIEEgc3BlY2lmaWMgdHlwZSBvZiBkb2N1bWVudCBJRCBkZXJpdmVkIGZyb20gdGhlIGZpbmdlcnByaW50IGFuZCBvbmx5XG4gKiBhdmFpbGFibGUgd2l0aGluIEZpcmViYXNlLlxuICovXG5leHBvcnQgdHlwZSBGaXJlYmFzZURvY01ldGFJRCA9IHN0cmluZztcblxuZXhwb3J0IGNsYXNzIERvd25sb2FkVVJMcyB7XG5cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGNoZWNrRXhpc3RlbmNlKHVybDogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG5cbiAgICAgICAgLy8gVGhpcyBpcyBwcmV0dHkgZGFybiBzbG93IHdoZW4gdXNpbmcgSEVBRCBidXQgd2l0aCBHRVQgYW5kIGEgcmFuZ2VcbiAgICAgICAgLy8gcXVlcnkgdGhlIHBlcmZvcm1hbmNlIGlzbid0IHRvbyBiYWQuICBQZXJmb3JtaW5nIHRoZSBIRUFEIGRpcmVjdGx5XG4gICAgICAgIC8vIGlzIHJlYWxseSBwb29yIHdpdGggMzAwLTc1MDBtcyBsYXRlbmNpZXMuICBUaGVyZSBhcmUgc29tZSBtYWpvclxuICAgICAgICAvLyBvdXRsaWVycyB3aGVuIHBlcmZvcm1pbmcgSEVBRC5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gVXNpbmcgR0VUIGFuZCByYW5nZSBvZiAwLTAgaXMgYWN0dWFsbHkgY29uc2lzdGVudGx5IGFib3V0IDIwMG1zXG4gICAgICAgIC8vIHdoaWNoIGlzIHByZXR0eSByZWFzb25hYmxlIGJ1dCB3ZSBzdGlsbHMgc2hvdWxkIGhhdmUgdGhlIG9wdGlvblxuICAgICAgICAvLyB0byBza2lwIHRoZSBleGlzdHMgY2hlY2sgdG8ganVzdCBjb21wdXRlIHRoZSBVUkwuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIERvaW5nIGFuIGV4aXN0cygpIHdpdGggdGhlIENsb3VkIFNESyBpcyBhYm91dCAyNTBtcyB0b28uXG5cbiAgICAgICAgcmV0dXJuIGF3YWl0IFVSTHMuZXhpc3RzV2l0aEdFVFVzaW5nUmFuZ2UodXJsKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgY29tcHV0ZURvd25sb2FkVVJMKGJhY2tlbmQ6IEJhY2tlbmQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmOiBGaWxlUmVmLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JhZ2VQYXRoOiBTdG9yYWdlUGF0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9yYWdlUmVmOiBmaXJlYmFzZS5zdG9yYWdlLlJlZmVyZW5jZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRzOiBHZXRGaWxlT3B0cyk6IHN0cmluZyB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcHV0ZURvd25sb2FkVVJMRGlyZWN0bHkoYmFja2VuZCwgcmVmLCBzdG9yYWdlUGF0aCwgb3B0cyk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBhc3luYyBjb21wdXRlRG93bmxvYWRVUkxXaXRoU3RvcmFnZVJlZihzdG9yYWdlUmVmOiBmaXJlYmFzZS5zdG9yYWdlLlJlZmVyZW5jZSk6IFByb21pc2U8c3RyaW5nIHwgdW5kZWZpbmVkPiB7XG5cbiAgICAgICAgdHJ5IHtcblxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHN0b3JhZ2VSZWYuZ2V0RG93bmxvYWRVUkwoKTtcblxuICAgICAgICB9IGNhdGNoIChlKSB7XG5cbiAgICAgICAgICAgIGlmIChlLmNvZGUgPT09IFwic3RvcmFnZS9vYmplY3Qtbm90LWZvdW5kXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBzb21lIG90aGVyIHR5cGUgb2YgZXhjZXB0aW9uIGlhcyBvY2N1cnJlZFxuICAgICAgICAgICAgdGhyb3cgZTtcblxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBjb21wdXRlRG93bmxvYWRVUkxEaXJlY3RseShiYWNrZW5kOiBCYWNrZW5kLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZjogRmlsZVJlZixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9yYWdlUGF0aDogU3RvcmFnZVBhdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0czogR2V0RmlsZU9wdHMpOiBzdHJpbmcge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDb21wdXRlIHRoZSBzdG9yYWdlIHBhdGggaW5jbHVkaW5nIHRoZSBmbGlwIG92ZXIgd2hldGhlciB3ZSdyZVxuICAgICAgICAgKiBnb2luZyB0byBiZSBwdWJsaWMgd2l0aG91dCBhbnkgdHlwZSBvZiBwYXRoIGNvbnZlcnNpb24gZGVwZW5kaW5nXG4gICAgICAgICAqIG9uIHdoZXRoZXIgaXQncyBwdWJsaWMgb3Igbm90LiAgUHVibGljIFVSTHMgaGF2ZSBhIDE6MSBtYXBwaW5nXG4gICAgICAgICAqIHdoZXJlIGV2ZXJ5dGhpbmcgZWxzZSBtaWdodCBiZSBpbiBhIGRpZmZlcmVudCBidWNrZXQgb3IgcGF0aFxuICAgICAgICAgKiBkZXBlbmRpbmcgdGhlIHN0b3JhZ2UgY29tcHV0YXRpb24gZnVuY3Rpb24uXG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCB0b1BhdGggPSAoKTogc3RyaW5nID0+IHtcblxuICAgICAgICAgICAgaWYgKGJhY2tlbmQgPT09IEJhY2tlbmQuUFVCTElDKSB7XG4gICAgICAgICAgICAgICAgLy8gdGhlcmUgaXMgbm8gYmxpbmRpbmcgb2YgdGhlIGRhdGEgcGF0aCB3aXRoIHRoZSB1c2Vyc1xuICAgICAgICAgICAgICAgIC8vIHVzZXIgSUQgb3Igb3RoZXIga2V5LlxuICAgICAgICAgICAgICAgIHJldHVybiBgJHtiYWNrZW5kfS8ke3JlZi5uYW1lfWA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBzdG9yYWdlUGF0aC5wYXRoO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgdG9VUkwgPSAoKTogc3RyaW5nID0+IHtcblxuICAgICAgICAgICAgY29uc3QgcGF0aCA9IHRvUGF0aCgpO1xuXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gcHJvY2Vzcy5lbnYuUE9MQVJfVEVTVF9QUk9KRUNUIHx8IFwicG9sYXItMzJiMGZcIjtcblxuICAgICAgICAgICAgcmV0dXJuIGBodHRwczovL3N0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vJHtwcm9qZWN0fS5hcHBzcG90LmNvbS8ke3BhdGh9YDtcblxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiB0b1VSTCgpO1xuXG4gICAgfVxuXG59XG5cbmludGVyZmFjZSBHZXREb2NNZXRhT3B0cyB7XG5cbiAgICByZWFkb25seSBwcmVmZXJyZWRTb3VyY2U/OiBGaXJlc3RvcmVTb3VyY2U7XG5cbn1cblxuZXhwb3J0IGNsYXNzIERlZmF1bHRXcml0ZU9wdHMgaW1wbGVtZW50cyBXcml0ZU9wdHMge1xuICAgIHB1YmxpYyByZWFkb25seSB2aXNpYmlsaXR5ID0gVmlzaWJpbGl0eS5QUklWQVRFO1xufVxuXG5jb25zdCBFUlJfSEFORExFUiA9IChlcnI6IEVycm9yKSA9PiBsb2cuZXJyb3IoXCJDb3VsZCBub3QgY3JlYXRlIHNuYXBzaG90IGZvciBhY2NvdW50OiBcIiwgZXJyKTtcbiJdfQ==