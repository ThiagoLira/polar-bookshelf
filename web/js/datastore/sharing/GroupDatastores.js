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
const DocMetas_1 = require("../../metadata/DocMetas");
const DatastoreImportFiles_1 = require("./rpc/DatastoreImportFiles");
const Firestore_1 = require("../../firebase/Firestore");
const FirebaseDatastore_1 = require("../FirebaseDatastore");
const BackendFileRefs_1 = require("../BackendFileRefs");
const Either_1 = require("../../util/Either");
const DocRefs_1 = require("./db/DocRefs");
const FirebaseDatastores_1 = require("../FirebaseDatastores");
const GroupDocsAdd_1 = require("./rpc/GroupDocsAdd");
const GroupProvisions_1 = require("./rpc/GroupProvisions");
const Logger_1 = require("polar-shared/src/logger/Logger");
const log = Logger_1.Logger.create();
class GroupDatastores {
    static provision(request) {
        return __awaiter(this, void 0, void 0, function* () {
            yield GroupProvisions_1.GroupProvisions.exec(request);
        });
    }
    static importFromGroup(persistenceLayer, groupDocRef) {
        return __awaiter(this, void 0, void 0, function* () {
            const { groupID, docRef } = groupDocRef;
            const { fingerprint, docID } = docRef;
            function importBackendFileRef() {
                return __awaiter(this, void 0, void 0, function* () {
                    function getDocInfoRecord(docID) {
                        return __awaiter(this, void 0, void 0, function* () {
                            log.info("Getting doc info record: " + docID);
                            const firestore = yield Firestore_1.Firestore.getInstance();
                            const ref = firestore
                                .collection(FirebaseDatastore_1.DatastoreCollection.DOC_INFO)
                                .doc(docID);
                            const snapshot = yield ref.get();
                            return snapshot.data();
                        });
                    }
                    function getDocInfo(docID) {
                        return __awaiter(this, void 0, void 0, function* () {
                            const docInfoRecord = yield getDocInfoRecord(docID);
                            if (!docInfoRecord) {
                                throw new Error("Unable to import. No docInfo");
                            }
                            return docInfoRecord.value;
                        });
                    }
                    const docInfo = yield getDocInfo(docID);
                    const backendFileRef = BackendFileRefs_1.BackendFileRefs.toBackendFileRef(Either_1.Either.ofRight(docInfo));
                    if (!backendFileRef) {
                        throw new Error("No backend file ref");
                    }
                    yield DatastoreImportFiles_1.DatastoreImportFiles.exec({
                        docID,
                        backend: backendFileRef.backend,
                        fileRef: backendFileRef
                    });
                    return backendFileRef;
                });
            }
            function importDocMeta(backendFileRef) {
                return __awaiter(this, void 0, void 0, function* () {
                    function createDocMeta(backendFileRef) {
                        const docMeta = DocMetas_1.DocMetas.create(fingerprint, docRef.nrPages);
                        DocRefs_1.DocRefs.copyToDocInfo(docRef, docMeta.docInfo);
                        docMeta.docInfo.filename = backendFileRef.name;
                        docMeta.docInfo.backend = backendFileRef.backend;
                        docMeta.docInfo.hashcode = backendFileRef.hashcode;
                        return docMeta;
                    }
                    const docMeta = createDocMeta(backendFileRef);
                    function writeDocMeta() {
                        return __awaiter(this, void 0, void 0, function* () {
                            const docInfo = docMeta.docInfo;
                            yield persistenceLayer.write(fingerprint, docMeta);
                            return docInfo;
                        });
                    }
                    yield writeDocMeta();
                    const docID = FirebaseDatastores_1.FirebaseDatastores.computeDocMetaID(fingerprint);
                    return Object.assign(Object.assign({}, docRef), { docID });
                });
            }
            function doImport() {
                return __awaiter(this, void 0, void 0, function* () {
                    const docMeta = yield persistenceLayer.getDocMeta(fingerprint);
                    if (!docMeta) {
                        const backendFileRef = yield importBackendFileRef();
                        return yield importDocMeta(backendFileRef);
                    }
                    else {
                        const docID = FirebaseDatastores_1.FirebaseDatastores.computeDocMetaID(fingerprint);
                        return DocRefs_1.DocRefs.fromDocMeta(docID, docMeta);
                    }
                });
            }
            const myDocRef = yield doImport();
            yield GroupDocsAdd_1.GroupDocsAdd.exec({ groupID, docs: [myDocRef] });
        });
    }
}
exports.GroupDatastores = GroupDatastores;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JvdXBEYXRhc3RvcmVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiR3JvdXBEYXRhc3RvcmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBR0Esc0RBQWlEO0FBQ2pELHFFQUFnRTtBQUVoRSx3REFBbUQ7QUFFbkQsNERBQXlEO0FBQ3pELHdEQUFtRDtBQUVuRCw4Q0FBeUM7QUFDekMsMENBQXFDO0FBQ3JDLDhEQUF5RDtBQUN6RCxxREFBZ0Q7QUFDaEQsMkRBQXNEO0FBRXRELDJEQUFzRDtBQUl0RCxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFNUIsTUFBYSxlQUFlO0lBRWpCLE1BQU0sQ0FBTyxTQUFTLENBQUMsT0FBOEI7O1lBQ3hELE1BQU0saUNBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDeEMsQ0FBQztLQUFBO0lBRU0sTUFBTSxDQUFPLGVBQWUsQ0FBQyxnQkFBa0MsRUFDbEMsV0FBd0I7O1lBRXhELE1BQU0sRUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFDLEdBQUcsV0FBVyxDQUFDO1lBQ3RDLE1BQU0sRUFBQyxXQUFXLEVBQUUsS0FBSyxFQUFDLEdBQUcsTUFBTSxDQUFDO1lBRXBDLFNBQWUsb0JBQW9COztvQkFJL0IsU0FBZSxnQkFBZ0IsQ0FBQyxLQUFlOzs0QkFDM0MsR0FBRyxDQUFDLElBQUksQ0FBQywyQkFBMkIsR0FBRyxLQUFLLENBQUMsQ0FBQzs0QkFFOUMsTUFBTSxTQUFTLEdBQUcsTUFBTSxxQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDOzRCQUVoRCxNQUFNLEdBQUcsR0FBRyxTQUFTO2lDQUNoQixVQUFVLENBQUMsdUNBQW1CLENBQUMsUUFBUSxDQUFDO2lDQUN4QyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7NEJBRWhCLE1BQU0sUUFBUSxHQUFHLE1BQU0sR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDOzRCQUVqQyxPQUE0QyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7d0JBRWhFLENBQUM7cUJBQUE7b0JBRUQsU0FBZSxVQUFVLENBQUMsS0FBZTs7NEJBRXJDLE1BQU0sYUFBYSxHQUFHLE1BQU0sZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7NEJBRXBELElBQUksQ0FBRSxhQUFhLEVBQUU7Z0NBQ2pCLE1BQU0sSUFBSSxLQUFLLENBQUMsOEJBQThCLENBQUMsQ0FBQzs2QkFDbkQ7NEJBRUQsT0FBTyxhQUFhLENBQUMsS0FBSyxDQUFDO3dCQUUvQixDQUFDO3FCQUFBO29CQUVELE1BQU0sT0FBTyxHQUFHLE1BQU0sVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUV4QyxNQUFNLGNBQWMsR0FBRyxpQ0FBZSxDQUFDLGdCQUFnQixDQUFDLGVBQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztvQkFFakYsSUFBSSxDQUFFLGNBQWMsRUFBRTt3QkFDbEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO3FCQUMxQztvQkFHRCxNQUFNLDJDQUFvQixDQUFDLElBQUksQ0FBQzt3QkFDNUIsS0FBSzt3QkFDTCxPQUFPLEVBQUUsY0FBYyxDQUFDLE9BQU87d0JBQy9CLE9BQU8sRUFBRSxjQUFjO3FCQUMxQixDQUFDLENBQUM7b0JBRUgsT0FBTyxjQUFjLENBQUM7Z0JBRTFCLENBQUM7YUFBQTtZQUVELFNBQWUsYUFBYSxDQUFDLGNBQThCOztvQkFFdkQsU0FBUyxhQUFhLENBQUMsY0FBOEI7d0JBRWpELE1BQU0sT0FBTyxHQUFHLG1CQUFRLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBRTdELGlCQUFPLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBRS9DLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQUM7d0JBQy9DLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLGNBQWMsQ0FBQyxPQUFPLENBQUM7d0JBQ2pELE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLGNBQWMsQ0FBQyxRQUFRLENBQUM7d0JBRW5ELE9BQU8sT0FBTyxDQUFDO29CQUVuQixDQUFDO29CQUVELE1BQU0sT0FBTyxHQUFHLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQztvQkFFOUMsU0FBZSxZQUFZOzs0QkFFdkIsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQzs0QkFFaEMsTUFBTSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFDOzRCQUNuRCxPQUFPLE9BQU8sQ0FBQzt3QkFFbkIsQ0FBQztxQkFBQTtvQkFFRCxNQUFNLFlBQVksRUFBRSxDQUFDO29CQUVyQixNQUFNLEtBQUssR0FBRyx1Q0FBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztvQkFFL0QsdUNBQVcsTUFBTSxLQUFFLEtBQUssSUFBRTtnQkFFOUIsQ0FBQzthQUFBO1lBRUQsU0FBZSxRQUFROztvQkFJbkIsTUFBTSxPQUFPLEdBQUcsTUFBTSxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7b0JBRS9ELElBQUksQ0FBRSxPQUFPLEVBQUU7d0JBRVgsTUFBTSxjQUFjLEdBQUcsTUFBTSxvQkFBb0IsRUFBRSxDQUFDO3dCQUNwRCxPQUFPLE1BQU0sYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDO3FCQUU5Qzt5QkFBTTt3QkFDSCxNQUFNLEtBQUssR0FBRyx1Q0FBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQzt3QkFDL0QsT0FBTyxpQkFBTyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7cUJBQzlDO2dCQUVMLENBQUM7YUFBQTtZQUVELE1BQU0sUUFBUSxHQUFHLE1BQU0sUUFBUSxFQUFFLENBQUM7WUFFbEMsTUFBTSwyQkFBWSxDQUFDLElBQUksQ0FBQyxFQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBQyxDQUFDLENBQUM7UUFFekQsQ0FBQztLQUFBO0NBRUo7QUF6SEQsMENBeUhDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEb2NSZWZ9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvZ3JvdXBzL0RvY1JlZic7XG5pbXBvcnQge1BlcnNpc3RlbmNlTGF5ZXJ9IGZyb20gJy4uL1BlcnNpc3RlbmNlTGF5ZXInO1xuaW1wb3J0IHtHcm91cElEU3RyfSBmcm9tICcuLi9EYXRhc3RvcmUnO1xuaW1wb3J0IHtEb2NNZXRhc30gZnJvbSAnLi4vLi4vbWV0YWRhdGEvRG9jTWV0YXMnO1xuaW1wb3J0IHtEYXRhc3RvcmVJbXBvcnRGaWxlc30gZnJvbSAnLi9ycGMvRGF0YXN0b3JlSW1wb3J0RmlsZXMnO1xuaW1wb3J0IHtEb2NJRFN0cn0gZnJvbSAnLi9ycGMvR3JvdXBQcm92aXNpb25zJztcbmltcG9ydCB7RmlyZXN0b3JlfSBmcm9tICcuLi8uLi9maXJlYmFzZS9GaXJlc3RvcmUnO1xuaW1wb3J0IHtSZWNvcmRIb2xkZXJ9IGZyb20gJy4uL0ZpcmViYXNlRGF0YXN0b3JlJztcbmltcG9ydCB7RGF0YXN0b3JlQ29sbGVjdGlvbn0gZnJvbSAnLi4vRmlyZWJhc2VEYXRhc3RvcmUnO1xuaW1wb3J0IHtCYWNrZW5kRmlsZVJlZnN9IGZyb20gJy4uL0JhY2tlbmRGaWxlUmVmcyc7XG5pbXBvcnQge0RvY0luZm99IGZyb20gJy4uLy4uL21ldGFkYXRhL0RvY0luZm8nO1xuaW1wb3J0IHtFaXRoZXJ9IGZyb20gJy4uLy4uL3V0aWwvRWl0aGVyJztcbmltcG9ydCB7RG9jUmVmc30gZnJvbSAnLi9kYi9Eb2NSZWZzJztcbmltcG9ydCB7RmlyZWJhc2VEYXRhc3RvcmVzfSBmcm9tICcuLi9GaXJlYmFzZURhdGFzdG9yZXMnO1xuaW1wb3J0IHtHcm91cERvY3NBZGR9IGZyb20gJy4vcnBjL0dyb3VwRG9jc0FkZCc7XG5pbXBvcnQge0dyb3VwUHJvdmlzaW9uc30gZnJvbSAnLi9ycGMvR3JvdXBQcm92aXNpb25zJztcbmltcG9ydCB7R3JvdXBQcm92aXNpb25SZXF1ZXN0fSBmcm9tICcuL3JwYy9Hcm91cFByb3Zpc2lvbnMnO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge0lEb2NJbmZvfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy9tZXRhZGF0YS9JRG9jSW5mb1wiO1xuaW1wb3J0IHtCYWNrZW5kRmlsZVJlZn0gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvZGF0YXN0b3JlL0JhY2tlbmRGaWxlUmVmXCI7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuZXhwb3J0IGNsYXNzIEdyb3VwRGF0YXN0b3JlcyB7XG5cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIHByb3Zpc2lvbihyZXF1ZXN0OiBHcm91cFByb3Zpc2lvblJlcXVlc3QpIHtcbiAgICAgICAgYXdhaXQgR3JvdXBQcm92aXNpb25zLmV4ZWMocmVxdWVzdCk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBpbXBvcnRGcm9tR3JvdXAocGVyc2lzdGVuY2VMYXllcjogUGVyc2lzdGVuY2VMYXllcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncm91cERvY1JlZjogR3JvdXBEb2NSZWYpIHtcblxuICAgICAgICBjb25zdCB7Z3JvdXBJRCwgZG9jUmVmfSA9IGdyb3VwRG9jUmVmO1xuICAgICAgICBjb25zdCB7ZmluZ2VycHJpbnQsIGRvY0lEfSA9IGRvY1JlZjtcblxuICAgICAgICBhc3luYyBmdW5jdGlvbiBpbXBvcnRCYWNrZW5kRmlsZVJlZigpIHtcblxuICAgICAgICAgICAgLy8gVE9ETzogSSB0aGluayBpdCB3b3VsZCBiZSBiZXR0ZXIgdG8gc3RvcmUgdGhlIGluZm9ybWF0aW9uXG4gICAgICAgICAgICAvLyBkaXJlY3RseSBpbiB0aGUgRG9jUmVmIGluIHRoZSBvcmlnaW5hbCBzb3VyY2Ugd291bGRuJ3QgaXQ/XG4gICAgICAgICAgICBhc3luYyBmdW5jdGlvbiBnZXREb2NJbmZvUmVjb3JkKGRvY0lEOiBEb2NJRFN0cikge1xuICAgICAgICAgICAgICAgIGxvZy5pbmZvKFwiR2V0dGluZyBkb2MgaW5mbyByZWNvcmQ6IFwiICsgZG9jSUQpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZmlyZXN0b3JlID0gYXdhaXQgRmlyZXN0b3JlLmdldEluc3RhbmNlKCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCByZWYgPSBmaXJlc3RvcmVcbiAgICAgICAgICAgICAgICAgICAgLmNvbGxlY3Rpb24oRGF0YXN0b3JlQ29sbGVjdGlvbi5ET0NfSU5GTylcbiAgICAgICAgICAgICAgICAgICAgLmRvYyhkb2NJRCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBzbmFwc2hvdCA9IGF3YWl0IHJlZi5nZXQoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiA8UmVjb3JkSG9sZGVyPElEb2NJbmZvPiB8IHVuZGVmaW5lZD4gc25hcHNob3QuZGF0YSgpO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGFzeW5jIGZ1bmN0aW9uIGdldERvY0luZm8oZG9jSUQ6IERvY0lEU3RyKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBkb2NJbmZvUmVjb3JkID0gYXdhaXQgZ2V0RG9jSW5mb1JlY29yZChkb2NJRCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoISBkb2NJbmZvUmVjb3JkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuYWJsZSB0byBpbXBvcnQuIE5vIGRvY0luZm9cIik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRvY0luZm9SZWNvcmQudmFsdWU7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgZG9jSW5mbyA9IGF3YWl0IGdldERvY0luZm8oZG9jSUQpO1xuXG4gICAgICAgICAgICBjb25zdCBiYWNrZW5kRmlsZVJlZiA9IEJhY2tlbmRGaWxlUmVmcy50b0JhY2tlbmRGaWxlUmVmKEVpdGhlci5vZlJpZ2h0KGRvY0luZm8pKTtcblxuICAgICAgICAgICAgaWYgKCEgYmFja2VuZEZpbGVSZWYpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBiYWNrZW5kIGZpbGUgcmVmXCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyB0aGlzIHdpbGwgcGVyZm9ybSBhbiBlZmZpY2llbnQgY29weSBvZiB0aGUgZGF0YSBvbiB0aGUgYmFja2VuZC5cbiAgICAgICAgICAgIGF3YWl0IERhdGFzdG9yZUltcG9ydEZpbGVzLmV4ZWMoe1xuICAgICAgICAgICAgICAgIGRvY0lELFxuICAgICAgICAgICAgICAgIGJhY2tlbmQ6IGJhY2tlbmRGaWxlUmVmLmJhY2tlbmQsXG4gICAgICAgICAgICAgICAgZmlsZVJlZjogYmFja2VuZEZpbGVSZWZcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gYmFja2VuZEZpbGVSZWY7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGltcG9ydERvY01ldGEoYmFja2VuZEZpbGVSZWY6IEJhY2tlbmRGaWxlUmVmKTogUHJvbWlzZTxEb2NSZWY+IHtcblxuICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlRG9jTWV0YShiYWNrZW5kRmlsZVJlZjogQmFja2VuZEZpbGVSZWYpIHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGRvY01ldGEgPSBEb2NNZXRhcy5jcmVhdGUoZmluZ2VycHJpbnQsIGRvY1JlZi5uclBhZ2VzKTtcblxuICAgICAgICAgICAgICAgIERvY1JlZnMuY29weVRvRG9jSW5mbyhkb2NSZWYsIGRvY01ldGEuZG9jSW5mbyk7XG5cbiAgICAgICAgICAgICAgICBkb2NNZXRhLmRvY0luZm8uZmlsZW5hbWUgPSBiYWNrZW5kRmlsZVJlZi5uYW1lO1xuICAgICAgICAgICAgICAgIGRvY01ldGEuZG9jSW5mby5iYWNrZW5kID0gYmFja2VuZEZpbGVSZWYuYmFja2VuZDtcbiAgICAgICAgICAgICAgICBkb2NNZXRhLmRvY0luZm8uaGFzaGNvZGUgPSBiYWNrZW5kRmlsZVJlZi5oYXNoY29kZTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBkb2NNZXRhO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGRvY01ldGEgPSBjcmVhdGVEb2NNZXRhKGJhY2tlbmRGaWxlUmVmKTtcblxuICAgICAgICAgICAgYXN5bmMgZnVuY3Rpb24gd3JpdGVEb2NNZXRhKCkge1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZG9jSW5mbyA9IGRvY01ldGEuZG9jSW5mbztcblxuICAgICAgICAgICAgICAgIGF3YWl0IHBlcnNpc3RlbmNlTGF5ZXIud3JpdGUoZmluZ2VycHJpbnQsIGRvY01ldGEpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkb2NJbmZvO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGF3YWl0IHdyaXRlRG9jTWV0YSgpO1xuXG4gICAgICAgICAgICBjb25zdCBkb2NJRCA9IEZpcmViYXNlRGF0YXN0b3Jlcy5jb21wdXRlRG9jTWV0YUlEKGZpbmdlcnByaW50KTtcblxuICAgICAgICAgICAgcmV0dXJuIHsuLi5kb2NSZWYsIGRvY0lEfTtcblxuICAgICAgICB9XG5cbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gZG9JbXBvcnQoKTogUHJvbWlzZTxEb2NSZWY+IHtcblxuICAgICAgICAgICAgLy8gVE9ETzogaW4gdGhlIGZ1dHVyZSB3b3VsZCBiZSBmYXN0ZXIgdG8gd29yayB3aXRoIHRoZSBEb2NJbmZvIGluc3RlYWRcbiAgICAgICAgICAgIC8vIGJ1dCB3ZSBkb24ndCBoYXZlIGEgZ2V0RG9jSW5mbyBtZXRob2QgeWV0LlxuICAgICAgICAgICAgY29uc3QgZG9jTWV0YSA9IGF3YWl0IHBlcnNpc3RlbmNlTGF5ZXIuZ2V0RG9jTWV0YShmaW5nZXJwcmludCk7XG5cbiAgICAgICAgICAgIGlmICghIGRvY01ldGEpIHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGJhY2tlbmRGaWxlUmVmID0gYXdhaXQgaW1wb3J0QmFja2VuZEZpbGVSZWYoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgaW1wb3J0RG9jTWV0YShiYWNrZW5kRmlsZVJlZik7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZG9jSUQgPSBGaXJlYmFzZURhdGFzdG9yZXMuY29tcHV0ZURvY01ldGFJRChmaW5nZXJwcmludCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIERvY1JlZnMuZnJvbURvY01ldGEoZG9jSUQsIGRvY01ldGEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBteURvY1JlZiA9IGF3YWl0IGRvSW1wb3J0KCk7XG5cbiAgICAgICAgYXdhaXQgR3JvdXBEb2NzQWRkLmV4ZWMoe2dyb3VwSUQsIGRvY3M6IFtteURvY1JlZl19KTtcblxuICAgIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdyb3VwRG9jUmVmIHtcbiAgICByZWFkb25seSBncm91cElEOiBHcm91cElEU3RyO1xuICAgIHJlYWRvbmx5IGRvY1JlZjogRG9jUmVmO1xufVxuIl19