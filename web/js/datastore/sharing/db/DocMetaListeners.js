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
const UserGroups_1 = require("./UserGroups");
const GroupDocs_1 = require("./GroupDocs");
const SetArrays_1 = require("polar-shared/src/util/SetArrays");
const Collections_1 = require("./Collections");
const DocMetas_1 = require("../../../metadata/DocMetas");
const Optional_1 = require("polar-shared/src/util/ts/Optional");
const Proxies_1 = require("../../../proxies/Proxies");
const ProfileOwners_1 = require("./ProfileOwners");
const Author_1 = require("../../../metadata/Author");
const Logger_1 = require("polar-shared/src/logger/Logger");
const UserProfiles_1 = require("./UserProfiles");
const FirebaseDatastores_1 = require("../../FirebaseDatastores");
const Dictionaries_1 = require("polar-shared/src/util/Dictionaries");
const log = Logger_1.Logger.create();
class DocMetaListener {
    constructor(fingerprint, profileID, docMetaHandler, errHandler) {
        this.fingerprint = fingerprint;
        this.profileID = profileID;
        this.docMetaHandler = docMetaHandler;
        this.errHandler = errHandler;
        this.docMetaIndex = {};
        this.groupDocMonitors = new Set();
        this.monitoredGroups = new Set();
    }
    start() {
        console.log("Starting DocMetaListener.");
        const handleUserGroups = () => __awaiter(this, void 0, void 0, function* () {
            const userProfile = yield UserProfiles_1.UserProfiles.currentUserProfile();
            console.log("Using userProfile: ", userProfile);
            yield UserGroups_1.UserGroups.onSnapshot(userGroup => this.onSnapshotForUserGroup(userGroup));
        });
        handleUserGroups()
            .catch(err => this.errHandler(err));
    }
    onSnapshotForUserGroup(userGroup) {
        if (!userGroup) {
            return;
        }
        if (!userGroup.groups) {
            log.warn("No user groups on object: ", userGroup);
            return;
        }
        for (const groupID of userGroup.groups) {
            if (this.monitoredGroups.has(groupID)) {
                continue;
            }
            this.monitoredGroups.add(groupID);
            this.handleGroup(groupID)
                .catch(err => this.errHandler(err));
        }
    }
    handleGroup(groupID) {
        return __awaiter(this, void 0, void 0, function* () {
            yield GroupDocs_1.GroupDocs.onSnapshotForByGroupIDAndFingerprint(groupID, this.fingerprint, groupDocs => this.onSnapshotForGroupDocs(groupDocs));
        });
    }
    onSnapshotForGroupDocs(groupDocChanges) {
        for (const groupDocChange of groupDocChanges) {
            this.handleGroupDoc(groupDocChange)
                .catch(err => this.errHandler(err));
        }
    }
    handleGroupDoc(groupDocChange) {
        return __awaiter(this, void 0, void 0, function* () {
            if (groupDocChange.type === 'removed') {
                return;
            }
            const groupDoc = groupDocChange.value;
            const { docID, profileID } = groupDoc;
            if (profileID === this.profileID) {
                return;
            }
            if (!this.groupDocMonitors.has(docID)) {
                yield DocMetaRecords.onSnapshot(docID, docMetaRecord => this.onSnapshotForDocMetaRecord(groupDoc, docMetaRecord));
                this.groupDocMonitors.add(docID);
            }
        });
    }
    onSnapshotForDocMetaRecord(groupDoc, docMetaRecord) {
        this.handleDocMetaRecord(groupDoc, docMetaRecord)
            .catch(err => this.errHandler(err));
    }
    handleDocMetaRecord(groupDoc, docMetaRecord) {
        return __awaiter(this, void 0, void 0, function* () {
            const primaryDocID = FirebaseDatastores_1.FirebaseDatastores.computeDocMetaID(this.fingerprint);
            if (groupDoc.docID === primaryDocID) {
                return;
            }
            const { profileID } = groupDoc;
            const userProfile = yield UserProfiles_1.UserProfiles.get(profileID);
            if (!userProfile) {
                log.warn("No user profile");
                return;
            }
            yield this.handleDocMetaRecordWithUserProfile(groupDoc, userProfile, docMetaRecord);
        });
    }
    handleDocMetaRecordWithUserProfile(docUpdateRef, userProfile, docMetaRecord) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!docMetaRecord) {
                return;
            }
            const { docID, fingerprint } = docUpdateRef;
            const prev = Optional_1.Optional.of(this.docMetaIndex[docID]).getOrUndefined();
            const initDocMeta = (docMeta) => {
                for (const pageMeta of Object.values(docMeta.pageMetas)) {
                    Dictionaries_1.Dictionaries.clear(pageMeta.pagemarks);
                }
                return docMeta;
            };
            const createDocMeta = () => {
                const result = initDocMeta(DocMetas_1.DocMetas.deserialize(docMetaRecord.value.value, fingerprint));
                if (prev) {
                    return result;
                }
                return Proxies_1.Proxies.create(result);
            };
            const curr = createDocMeta();
            yield DocMetaRecords.applyAuthorsFromUserProfile(curr, userProfile);
            if (prev) {
                DocMetaRecords.mergeDocMetaUpdate(curr, prev);
            }
            else {
                this.docMetaHandler(curr, docUpdateRef);
                this.docMetaIndex[docID] = curr;
            }
        });
    }
}
exports.DocMetaListener = DocMetaListener;
class DocMetaListeners {
    static register(fingerprint, docMetaHandler, errHandler) {
        return __awaiter(this, void 0, void 0, function* () {
            const profileOwner = yield ProfileOwners_1.ProfileOwners.get();
            if (!profileOwner) {
                log.warn("No profile owner for user");
                return;
            }
            const { profileID } = profileOwner;
            new DocMetaListener(fingerprint, profileID, docMetaHandler, errHandler).start();
        });
    }
}
exports.DocMetaListeners = DocMetaListeners;
class StringDicts {
    static merge(source, target) {
        const deletable = SetArrays_1.SetArrays.difference(Object.keys(target), Object.keys(source));
        for (const key of deletable) {
            delete target[key];
        }
        const copyable = SetArrays_1.SetArrays.difference(Object.keys(source), Object.keys(target));
        for (const key of copyable) {
            target[key] = source[key];
        }
    }
}
class DocMetaRecords {
    static onSnapshot(id, handler) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Collections_1.Collections.onDocumentSnapshot(this.COLLECTION, id, record => handler(record));
        });
    }
    static mergeDocMetaUpdate(source, target) {
        const mergePageMeta = (source, target) => {
            StringDicts.merge(source.textHighlights, target.textHighlights);
            StringDicts.merge(source.areaHighlights, target.areaHighlights);
            StringDicts.merge(source.notes, target.notes);
            StringDicts.merge(source.comments, target.comments);
            StringDicts.merge(source.questions, target.questions);
            StringDicts.merge(source.flashcards, target.flashcards);
        };
        for (const page of Dictionaries_1.Dictionaries.numberKeys(source.pageMetas)) {
            mergePageMeta(source.pageMetas[page], target.pageMetas[page]);
        }
    }
    static applyAuthorsFromUserProfile(docMeta, userProfile) {
        const { profile } = userProfile;
        const createAuthorFromProfile = () => {
            const profileID = profile.id;
            const name = profile.name || profile.handle || 'unknown';
            const createImage = () => {
                if (profile.image) {
                    return {
                        src: profile.image.url
                    };
                }
                return undefined;
            };
            const image = createImage();
            const guest = !userProfile.self;
            return new Author_1.Author({ name, image, profileID, guest });
        };
        const author = createAuthorFromProfile();
        const applyAuthorToAnnotations = (dict) => {
            for (const annotation of Object.values(dict)) {
                annotation.author = author;
            }
        };
        const applyAuthorToPage = (pageMeta) => {
            applyAuthorToAnnotations(pageMeta.textHighlights);
            applyAuthorToAnnotations(pageMeta.areaHighlights);
            applyAuthorToAnnotations(pageMeta.notes);
            applyAuthorToAnnotations(pageMeta.comments);
            applyAuthorToAnnotations(pageMeta.questions);
            applyAuthorToAnnotations(pageMeta.flashcards);
        };
        for (const page of Dictionaries_1.Dictionaries.numberKeys(docMeta.pageMetas)) {
            applyAuthorToPage(docMeta.pageMetas[page]);
        }
    }
}
exports.DocMetaRecords = DocMetaRecords;
DocMetaRecords.COLLECTION = 'doc_meta';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jTWV0YUxpc3RlbmVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkRvY01ldGFMaXN0ZW5lcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQSw2Q0FBbUQ7QUFDbkQsMkNBQWdEO0FBRWhELCtEQUEwRDtBQUUxRCwrQ0FBMEQ7QUFHMUQseURBQW9EO0FBQ3BELGdFQUEyRDtBQUMzRCxzREFBaUQ7QUFDakQsbURBQThDO0FBRTlDLHFEQUFnRDtBQUVoRCwyREFBc0Q7QUFDdEQsaURBQXlEO0FBQ3pELGlFQUE0RDtBQUM1RCxxRUFBZ0U7QUFLaEUsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLE1BQWEsZUFBZTtJQVN4QixZQUFvQyxXQUFtQixFQUNuQixTQUF1QixFQUN2QixjQUF1RSxFQUN2RSxVQUFnQztRQUhoQyxnQkFBVyxHQUFYLFdBQVcsQ0FBUTtRQUNuQixjQUFTLEdBQVQsU0FBUyxDQUFjO1FBQ3ZCLG1CQUFjLEdBQWQsY0FBYyxDQUF5RDtRQUN2RSxlQUFVLEdBQVYsVUFBVSxDQUFzQjtRQVY1RCxpQkFBWSxHQUFnQyxFQUFFLENBQUM7UUFFL0MscUJBQWdCLEdBQUksSUFBSSxHQUFHLEVBQVksQ0FBQztRQUd4QyxvQkFBZSxHQUFHLElBQUksR0FBRyxFQUFjLENBQUM7SUFPaEQsQ0FBQztJQUVNLEtBQUs7UUFFUixPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUM7UUFPekMsTUFBTSxnQkFBZ0IsR0FBRyxHQUFTLEVBQUU7WUFFaEMsTUFBTSxXQUFXLEdBQUcsTUFBTSwyQkFBWSxDQUFDLGtCQUFrQixFQUFFLENBQUM7WUFFNUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRSxXQUFXLENBQUMsQ0FBQztZQUVoRCxNQUFNLHVCQUFVLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFNB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UUFFRixNQUFNLE1BQU0sR0FBRyx1QkFBdUIsRUFBRSxDQUFDO1FBRXpDLE1BQU0sd0JBQXdCLEdBQUcsQ0FBQyxJQUFrQyxFQUFFLEVBQUU7WUFFcEUsS0FBSyxNQUFNLFVBQVUsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUMxQyxVQUFVLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQzthQUM5QjtRQUVMLENBQUMsQ0FBQztRQUVGLE1BQU0saUJBQWlCLEdBQUcsQ0FBQyxRQUFtQixFQUFFLEVBQUU7WUFFOUMsd0JBQXdCLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ2xELHdCQUF3QixDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNsRCx3QkFBd0IsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDekMsd0JBQXdCLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzVDLHdCQUF3QixDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUM3Qyx3QkFBd0IsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFbEQsQ0FBQyxDQUFDO1FBRUYsS0FBSyxNQUFNLElBQUksSUFBSSwyQkFBWSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDM0QsaUJBQWlCLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQzlDO0lBRUwsQ0FBQzs7QUF4Rkwsd0NBMEZDO0FBeEYwQix5QkFBVSxHQUFHLFVBQVUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7R3JvdXBJRFN0cn0gZnJvbSBcIi4uLy4uL0RhdGFzdG9yZVwiO1xuaW1wb3J0IHtVc2VyR3JvdXAsIFVzZXJHcm91cHN9IGZyb20gXCIuL1VzZXJHcm91cHNcIjtcbmltcG9ydCB7R3JvdXBEb2MsIEdyb3VwRG9jc30gZnJvbSBcIi4vR3JvdXBEb2NzXCI7XG5pbXBvcnQge0RvY01ldGF9IGZyb20gXCIuLi8uLi8uLi9tZXRhZGF0YS9Eb2NNZXRhXCI7XG5pbXBvcnQge1NldEFycmF5c30gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvdXRpbC9TZXRBcnJheXNcIjtcbmltcG9ydCB7UGFnZU1ldGF9IGZyb20gXCIuLi8uLi8uLi9tZXRhZGF0YS9QYWdlTWV0YVwiO1xuaW1wb3J0IHtDb2xsZWN0aW9ucywgRG9jdW1lbnRDaGFuZ2V9IGZyb20gXCIuL0NvbGxlY3Rpb25zXCI7XG5pbXBvcnQge0RvY0lEU3RyfSBmcm9tIFwiLi4vcnBjL0dyb3VwUHJvdmlzaW9uc1wiO1xuaW1wb3J0IHtEb2NNZXRhSG9sZGVyLCBSZWNvcmRIb2xkZXJ9IGZyb20gXCIuLi8uLi9GaXJlYmFzZURhdGFzdG9yZVwiO1xuaW1wb3J0IHtEb2NNZXRhc30gZnJvbSBcIi4uLy4uLy4uL21ldGFkYXRhL0RvY01ldGFzXCI7XG5pbXBvcnQge09wdGlvbmFsfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy91dGlsL3RzL09wdGlvbmFsXCI7XG5pbXBvcnQge1Byb3hpZXN9IGZyb20gXCIuLi8uLi8uLi9wcm94aWVzL1Byb3hpZXNcIjtcbmltcG9ydCB7UHJvZmlsZU93bmVyc30gZnJvbSBcIi4vUHJvZmlsZU93bmVyc1wiO1xuaW1wb3J0IHtQcm9maWxlSURTdHJ9IGZyb20gXCIuL1Byb2ZpbGVzXCI7XG5pbXBvcnQge0F1dGhvcn0gZnJvbSBcIi4uLy4uLy4uL21ldGFkYXRhL0F1dGhvclwiO1xuaW1wb3J0IHtBbm5vdGF0aW9ufSBmcm9tIFwiLi4vLi4vLi4vbWV0YWRhdGEvQW5ub3RhdGlvblwiO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL2xvZ2dlci9Mb2dnZXJcIjtcbmltcG9ydCB7VXNlclByb2ZpbGUsIFVzZXJQcm9maWxlc30gZnJvbSBcIi4vVXNlclByb2ZpbGVzXCI7XG5pbXBvcnQge0ZpcmViYXNlRGF0YXN0b3Jlc30gZnJvbSBcIi4uLy4uL0ZpcmViYXNlRGF0YXN0b3Jlc1wiO1xuaW1wb3J0IHtEaWN0aW9uYXJpZXN9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL3V0aWwvRGljdGlvbmFyaWVzXCI7XG5pbXBvcnQge0lQYWdlTWV0YX0gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvbWV0YWRhdGEvSVBhZ2VNZXRhXCI7XG5pbXBvcnQge0lEb2NNZXRhfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy9tZXRhZGF0YS9JRG9jTWV0YVwiO1xuaW1wb3J0IHtJQW5ub3RhdGlvbn0gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvbWV0YWRhdGEvSUFubm90YXRpb25cIjtcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG5leHBvcnQgY2xhc3MgRG9jTWV0YUxpc3RlbmVyIHtcblxuICAgIHByaXZhdGUgZG9jTWV0YUluZGV4OiB7W2RvY0lEOiBzdHJpbmddOiBJRG9jTWV0YX0gPSB7fTtcblxuICAgIHByaXZhdGUgZ3JvdXBEb2NNb25pdG9ycyAgPSBuZXcgU2V0PERvY0lEU3RyPigpO1xuXG4gICAgLy8gdGhlIGN1cnJlbnQgZ3JvdXBzIGJlaW5nIG1vbml0b3JlZFxuICAgIHByaXZhdGUgbW9uaXRvcmVkR3JvdXBzID0gbmV3IFNldDxHcm91cElEU3RyPigpO1xuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZmluZ2VycHJpbnQ6IHN0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgcHJpdmF0ZSByZWFkb25seSBwcm9maWxlSUQ6IFByb2ZpbGVJRFN0cixcbiAgICAgICAgICAgICAgICAgICAgICAgcHJpdmF0ZSByZWFkb25seSBkb2NNZXRhSGFuZGxlcjogKGRvY01ldGE6IElEb2NNZXRhLCBkb2NVcGRhdGVSZWY6IERvY1VwZGF0ZVJlZikgPT4gdm9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgcHJpdmF0ZSByZWFkb25seSBlcnJIYW5kbGVyOiAoZXJyOiBFcnJvcikgPT4gdm9pZCkge1xuXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXJ0KCkge1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU3RhcnRpbmcgRG9jTWV0YUxpc3RlbmVyLlwiKTtcblxuICAgICAgICAvLyBUT0RPOiBleGNsdWRlIG15IE9XTiBkb2N1bWVudHMgYnkgZ2V0dGluZyBteSBwcm9maWxlIGFuZCBleGNsdWRpbmcgYWxsIHRoZSBkb2NzIG1hdGNoaW5nIG15IHByb2ZpbGUuXG5cbiAgICAgICAgLy8gVE9ETzogd2UgY291bGQgaGF2ZSBhIHN0b3AgbWV0aG9kIGlmIHdlIGFkZGVkIHN1cHBvcnQgZm9yIGtlZXBpbmcgdGhlXG4gICAgICAgIC8vIHVuc3Vic2NyaWJlIGZ1bmN0aW9ucy5cblxuICAgICAgICBjb25zdCBoYW5kbGVVc2VyR3JvdXBzID0gYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCB1c2VyUHJvZmlsZSA9IGF3YWl0IFVzZXJQcm9maWxlcy5jdXJyZW50VXNlclByb2ZpbGUoKTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJVc2luZyB1c2VyUHJvZmlsZTogXCIsIHVzZXJQcm9maWxlKTtcblxuICAgICAgICAgICAgYXdhaXQgVXNlckdyb3Vwcy5vblNuYXBzaG90KHVzZXJHcm91cCA9PiB0aGlzLm9uU25hcHNob3RGb3JVc2VyR3JvdXAodXNlckdyb3VwKSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgaGFuZGxlVXNlckdyb3VwcygpXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHRoaXMuZXJySGFuZGxlcihlcnIpKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBvblNuYXBzaG90Rm9yVXNlckdyb3VwKHVzZXJHcm91cDogVXNlckdyb3VwIHwgdW5kZWZpbmVkKSB7XG5cbiAgICAgICAgaWYgKCEgdXNlckdyb3VwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoISB1c2VyR3JvdXAuZ3JvdXBzKSB7XG4gICAgICAgICAgICBsb2cud2FybihcIk5vIHVzZXIgZ3JvdXBzIG9uIG9iamVjdDogXCIsIHVzZXJHcm91cCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGNvbnN0IGdyb3VwSUQgb2YgdXNlckdyb3VwLmdyb3Vwcykge1xuXG4gICAgICAgICAgICBpZiAodGhpcy5tb25pdG9yZWRHcm91cHMuaGFzKGdyb3VwSUQpKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMubW9uaXRvcmVkR3JvdXBzLmFkZChncm91cElEKTtcblxuICAgICAgICAgICAgdGhpcy5oYW5kbGVHcm91cChncm91cElEKVxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gdGhpcy5lcnJIYW5kbGVyKGVycikpO1xuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBoYW5kbGVHcm91cChncm91cElEOiBHcm91cElEU3RyKSB7XG5cbiAgICAgICAgYXdhaXQgR3JvdXBEb2NzLm9uU25hcHNob3RGb3JCeUdyb3VwSURBbmRGaW5nZXJwcmludChncm91cElELFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmluZ2VycHJpbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBEb2NzID0+IHRoaXMub25TbmFwc2hvdEZvckdyb3VwRG9jcyhncm91cERvY3MpKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBvblNuYXBzaG90Rm9yR3JvdXBEb2NzKGdyb3VwRG9jQ2hhbmdlczogUmVhZG9ubHlBcnJheTxEb2N1bWVudENoYW5nZTxHcm91cERvYz4+KSB7XG5cbiAgICAgICAgZm9yIChjb25zdCBncm91cERvY0NoYW5nZSBvZiBncm91cERvY0NoYW5nZXMpIHtcblxuICAgICAgICAgICAgdGhpcy5oYW5kbGVHcm91cERvYyhncm91cERvY0NoYW5nZSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHRoaXMuZXJySGFuZGxlcihlcnIpKTtcblxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgaGFuZGxlR3JvdXBEb2MoZ3JvdXBEb2NDaGFuZ2U6IERvY3VtZW50Q2hhbmdlPEdyb3VwRG9jPikge1xuXG4gICAgICAgIC8vIFRPRE86IHdlIHRlY2huaWNhbGx5IG5lZWQgdG8ga2VlcCB0cmFjayBhbmQgdW5zdWJzY3JpYmUgd2hlbiBkb2N1bWVudHMgYXJlXG4gICAgICAgIC8vIHJlbW92ZWQgZnJvbSB0aGUgZ3JvdXAuXG5cbiAgICAgICAgaWYgKGdyb3VwRG9jQ2hhbmdlLnR5cGUgPT09ICdyZW1vdmVkJykge1xuICAgICAgICAgICAgLy8gd2Ugb25seSBjYXJlIGFib3V0IGFkZGVkIG9yIHVwZGF0ZWRcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGdyb3VwRG9jID0gZ3JvdXBEb2NDaGFuZ2UudmFsdWU7XG5cbiAgICAgICAgY29uc3Qge2RvY0lELCBwcm9maWxlSUR9ID0gZ3JvdXBEb2M7XG5cbiAgICAgICAgaWYgKHByb2ZpbGVJRCA9PT0gdGhpcy5wcm9maWxlSUQpIHtcbiAgICAgICAgICAgIC8vIHRoaXMgaXMgbXkgT1dOIGRvYyBzbyBzb3J0IG9mIHBvaW50bGVzcyB0byBpbmRleCBpdC5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghIHRoaXMuZ3JvdXBEb2NNb25pdG9ycy5oYXMoZG9jSUQpKSB7XG5cbiAgICAgICAgICAgIC8vIHN0YXJ0IGxpc3RlbmluZyB0byBzbmFwc2hvdHMgb24gdGhpcyBkb2NJRFxuICAgICAgICAgICAgYXdhaXQgRG9jTWV0YVJlY29yZHMub25TbmFwc2hvdChkb2NJRCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jTWV0YVJlY29yZCA9PiB0aGlzLm9uU25hcHNob3RGb3JEb2NNZXRhUmVjb3JkKGdyb3VwRG9jLCBkb2NNZXRhUmVjb3JkKSk7XG5cbiAgICAgICAgICAgIHRoaXMuZ3JvdXBEb2NNb25pdG9ycy5hZGQoZG9jSUQpO1xuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHB1YmxpYyBvblNuYXBzaG90Rm9yRG9jTWV0YVJlY29yZChncm91cERvYzogR3JvdXBEb2MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY01ldGFSZWNvcmQ6IERvY01ldGFSZWNvcmQgfCB1bmRlZmluZWQpIHtcblxuICAgICAgICB0aGlzLmhhbmRsZURvY01ldGFSZWNvcmQoZ3JvdXBEb2MsIGRvY01ldGFSZWNvcmQpXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHRoaXMuZXJySGFuZGxlcihlcnIpKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBoYW5kbGVEb2NNZXRhUmVjb3JkKGdyb3VwRG9jOiBHcm91cERvYyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2NNZXRhUmVjb3JkOiBEb2NNZXRhUmVjb3JkIHwgdW5kZWZpbmVkKSB7XG5cbiAgICAgICAgY29uc3QgcHJpbWFyeURvY0lEID0gRmlyZWJhc2VEYXRhc3RvcmVzLmNvbXB1dGVEb2NNZXRhSUQodGhpcy5maW5nZXJwcmludCk7XG5cbiAgICAgICAgaWYgKGdyb3VwRG9jLmRvY0lEID09PSBwcmltYXJ5RG9jSUQpIHtcbiAgICAgICAgICAgIC8vIHdlIGhhdmUgdG8gc2tpcCBvdXIgb3duIGRvY3VtZW50IG9yIHdlJ3JlIGdvaW5nIHRvIGVhdCBvdXIgb3duIHRhaWxcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHtwcm9maWxlSUR9ID0gZ3JvdXBEb2M7XG5cbiAgICAgICAgY29uc3QgdXNlclByb2ZpbGUgPSBhd2FpdCBVc2VyUHJvZmlsZXMuZ2V0KHByb2ZpbGVJRCk7XG5cbiAgICAgICAgaWYgKCEgdXNlclByb2ZpbGUpIHtcbiAgICAgICAgICAgIGxvZy53YXJuKFwiTm8gdXNlciBwcm9maWxlXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgYXdhaXQgdGhpcy5oYW5kbGVEb2NNZXRhUmVjb3JkV2l0aFVzZXJQcm9maWxlKGdyb3VwRG9jLCB1c2VyUHJvZmlsZSwgZG9jTWV0YVJlY29yZCk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgaGFuZGxlRG9jTWV0YVJlY29yZFdpdGhVc2VyUHJvZmlsZShkb2NVcGRhdGVSZWY6IERvY1VwZGF0ZVJlZixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyUHJvZmlsZTogVXNlclByb2ZpbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jTWV0YVJlY29yZDogRG9jTWV0YVJlY29yZCB8IHVuZGVmaW5lZCkge1xuXG4gICAgICAgIC8vIGxpc3RlbiB0byBzbmFwc2hvdHMgb2YgdGhpcyBEb2NNZXRhIGFuZCB0aGVuIHBlcmZvcm0gdGhlIG1lcmdlci4uLlxuXG4gICAgICAgIGlmICghZG9jTWV0YVJlY29yZCkge1xuICAgICAgICAgICAgLy8gZG9jIHdhcyByZW1vdmVkXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB7ZG9jSUQsIGZpbmdlcnByaW50fSA9IGRvY1VwZGF0ZVJlZjtcblxuICAgICAgICBjb25zdCBwcmV2ID0gT3B0aW9uYWwub2YodGhpcy5kb2NNZXRhSW5kZXhbZG9jSURdKS5nZXRPclVuZGVmaW5lZCgpO1xuXG4gICAgICAgIGNvbnN0IGluaXREb2NNZXRhID0gKGRvY01ldGE6IElEb2NNZXRhKSA9PiB7XG5cbiAgICAgICAgICAgIC8vIHJlbW92ZSB0aGUgcGFnZW1hcmtzIGFzIHRoYXQgaXMgdXNlciBzcGVjaWZpYy4uXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHBhZ2VNZXRhIG9mIE9iamVjdC52YWx1ZXMoZG9jTWV0YS5wYWdlTWV0YXMpKSB7XG4gICAgICAgICAgICAgICAgRGljdGlvbmFyaWVzLmNsZWFyKHBhZ2VNZXRhLnBhZ2VtYXJrcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBkb2NNZXRhO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgY3JlYXRlRG9jTWV0YSA9ICgpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gaW5pdERvY01ldGEoRG9jTWV0YXMuZGVzZXJpYWxpemUoZG9jTWV0YVJlY29yZC52YWx1ZS52YWx1ZSwgZmluZ2VycHJpbnQpKTtcblxuICAgICAgICAgICAgaWYgKHByZXYpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gUHJveGllcy5jcmVhdGUocmVzdWx0KTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGN1cnIgPSBjcmVhdGVEb2NNZXRhKCk7XG5cbiAgICAgICAgYXdhaXQgRG9jTWV0YVJlY29yZHMuYXBwbHlBdXRob3JzRnJvbVVzZXJQcm9maWxlKGN1cnIsIHVzZXJQcm9maWxlKTtcblxuICAgICAgICBpZiAocHJldikge1xuICAgICAgICAgICAgLy8gbm93IG1lcmdlIHRoZSBtZXRhZGF0YSBzbyB3ZSBnZXQgb3VyIGV2ZW50cyBmaXJlZC5cbiAgICAgICAgICAgIERvY01ldGFSZWNvcmRzLm1lcmdlRG9jTWV0YVVwZGF0ZShjdXJyLCBwcmV2KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIG9ubHkgZW1pdCBvbiB0aGUgRklSU1QgdGltZSB3ZSBzZWUgdGhlIGRvYyBhbmQgdGhlbiBnaXZlIHRoZSBjYWxsZXIgYVxuICAgICAgICAgICAgLy8gcHJveGllZCBvYmplY3QgYWZ0ZXIgdGhhdC4uLlxuICAgICAgICAgICAgdGhpcy5kb2NNZXRhSGFuZGxlcihjdXJyLCBkb2NVcGRhdGVSZWYpO1xuICAgICAgICAgICAgdGhpcy5kb2NNZXRhSW5kZXhbZG9jSURdID0gY3VycjtcbiAgICAgICAgfVxuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBjbGFzcyBEb2NNZXRhTGlzdGVuZXJzIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgcmVnaXN0ZXIoZmluZ2VycHJpbnQ6IHN0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY01ldGFIYW5kbGVyOiAoZG9jTWV0YTogSURvY01ldGEsIGRvY1VwZGF0ZVJlZjogRG9jVXBkYXRlUmVmKSA9PiB2b2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJySGFuZGxlcjogKGVycjogRXJyb3IpID0+IHZvaWQpIHtcblxuICAgICAgICBjb25zdCBwcm9maWxlT3duZXIgPSBhd2FpdCBQcm9maWxlT3duZXJzLmdldCgpO1xuXG4gICAgICAgIGlmICghIHByb2ZpbGVPd25lcikge1xuICAgICAgICAgICAgbG9nLndhcm4oXCJObyBwcm9maWxlIG93bmVyIGZvciB1c2VyXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qge3Byb2ZpbGVJRH0gPSBwcm9maWxlT3duZXI7XG5cbiAgICAgICAgbmV3IERvY01ldGFMaXN0ZW5lcihmaW5nZXJwcmludCwgcHJvZmlsZUlELCBkb2NNZXRhSGFuZGxlciwgZXJySGFuZGxlcikuc3RhcnQoKTtcblxuICAgIH1cblxufVxuXG5pbnRlcmZhY2UgU3RyaW5nRGljdDxUPiB7XG4gICAgW2tleTogc3RyaW5nXTogVDtcbn1cblxuY2xhc3MgU3RyaW5nRGljdHMge1xuXG4gICAgcHVibGljIHN0YXRpYyBtZXJnZTxUPihzb3VyY2U6IFN0cmluZ0RpY3Q8VD4sIHRhcmdldDogU3RyaW5nRGljdDxUPikge1xuXG4gICAgICAgIC8vICoqKiBkZWxldGUgZXhjZXNzIGluIHRoZSB0YXJnZXQgdGhhdCB3ZXJlIGRlbGV0ZWQgaW4gdGhlIHNvdXJjZVxuXG4gICAgICAgIGNvbnN0IGRlbGV0YWJsZSA9IFNldEFycmF5cy5kaWZmZXJlbmNlKE9iamVjdC5rZXlzKHRhcmdldCksIE9iamVjdC5rZXlzKHNvdXJjZSkpO1xuXG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGRlbGV0YWJsZSkge1xuICAgICAgICAgICAgZGVsZXRlIHRhcmdldFtrZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gKioqIGNvcHkgbmV3IGtleXMgaW50byB0aGUgdGFyZ2V0XG4gICAgICAgIGNvbnN0IGNvcHlhYmxlID0gU2V0QXJyYXlzLmRpZmZlcmVuY2UoT2JqZWN0LmtleXMoc291cmNlKSwgT2JqZWN0LmtleXModGFyZ2V0KSk7XG5cbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgY29weWFibGUpIHtcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cblxuICAgIH1cblxufVxuXG5leHBvcnQgY2xhc3MgRG9jTWV0YVJlY29yZHMge1xuXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBDT0xMRUNUSU9OID0gJ2RvY19tZXRhJztcblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgb25TbmFwc2hvdChpZDogRG9jTWV0YUlEU3RyLCBoYW5kbGVyOiAocmVjb3JkOiBEb2NNZXRhUmVjb3JkIHwgdW5kZWZpbmVkKSA9PiB2b2lkKSB7XG5cbiAgICAgICAgcmV0dXJuIGF3YWl0IENvbGxlY3Rpb25zLm9uRG9jdW1lbnRTbmFwc2hvdDxEb2NNZXRhUmVjb3JkPih0aGlzLkNPTExFQ1RJT04sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjb3JkID0+IGhhbmRsZXIocmVjb3JkKSk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdGFydCB3aXRoIHRoZSBzb3VyY2UgYW5kIHBlcmZvcm0gYSBkaWZmIGFnYWluc3QgdGhlIHRhcmdldC5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIG1lcmdlRG9jTWV0YVVwZGF0ZShzb3VyY2U6IElEb2NNZXRhLCB0YXJnZXQ6IElEb2NNZXRhKSB7XG5cbiAgICAgICAgY29uc3QgbWVyZ2VQYWdlTWV0YSA9IChzb3VyY2U6IElQYWdlTWV0YSwgdGFyZ2V0OiBJUGFnZU1ldGEpID0+IHtcblxuICAgICAgICAgICAgU3RyaW5nRGljdHMubWVyZ2Uoc291cmNlLnRleHRIaWdobGlnaHRzLCB0YXJnZXQudGV4dEhpZ2hsaWdodHMpO1xuICAgICAgICAgICAgU3RyaW5nRGljdHMubWVyZ2Uoc291cmNlLmFyZWFIaWdobGlnaHRzLCB0YXJnZXQuYXJlYUhpZ2hsaWdodHMpO1xuICAgICAgICAgICAgU3RyaW5nRGljdHMubWVyZ2Uoc291cmNlLm5vdGVzLCB0YXJnZXQubm90ZXMpO1xuICAgICAgICAgICAgU3RyaW5nRGljdHMubWVyZ2Uoc291cmNlLmNvbW1lbnRzLCB0YXJnZXQuY29tbWVudHMpO1xuICAgICAgICAgICAgU3RyaW5nRGljdHMubWVyZ2Uoc291cmNlLnF1ZXN0aW9ucywgdGFyZ2V0LnF1ZXN0aW9ucyk7XG4gICAgICAgICAgICBTdHJpbmdEaWN0cy5tZXJnZShzb3VyY2UuZmxhc2hjYXJkcywgdGFyZ2V0LmZsYXNoY2FyZHMpO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgZm9yIChjb25zdCBwYWdlIG9mIERpY3Rpb25hcmllcy5udW1iZXJLZXlzKHNvdXJjZS5wYWdlTWV0YXMpKSB7XG4gICAgICAgICAgICBtZXJnZVBhZ2VNZXRhKHNvdXJjZS5wYWdlTWV0YXNbcGFnZV0sIHRhcmdldC5wYWdlTWV0YXNbcGFnZV0pO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGFwcGx5QXV0aG9yc0Zyb21Vc2VyUHJvZmlsZShkb2NNZXRhOiBJRG9jTWV0YSwgdXNlclByb2ZpbGU6IFVzZXJQcm9maWxlKSB7XG5cbiAgICAgICAgY29uc3Qge3Byb2ZpbGV9ID0gdXNlclByb2ZpbGU7XG5cbiAgICAgICAgY29uc3QgY3JlYXRlQXV0aG9yRnJvbVByb2ZpbGUgPSAoKSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IHByb2ZpbGVJRCA9IHByb2ZpbGUuaWQ7XG5cbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBwcm9maWxlIS5uYW1lIHx8IHByb2ZpbGUhLmhhbmRsZSB8fCAndW5rbm93bic7XG5cbiAgICAgICAgICAgIGNvbnN0IGNyZWF0ZUltYWdlICA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocHJvZmlsZS5pbWFnZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBwcm9maWxlIS5pbWFnZSEudXJsXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSBjcmVhdGVJbWFnZSgpO1xuXG4gICAgICAgICAgICBjb25zdCBndWVzdCA9ICEgdXNlclByb2ZpbGUuc2VsZjtcblxuICAgICAgICAgICAgcmV0dXJuIG5ldyBBdXRob3Ioe25hbWUsIGltYWdlLCBwcm9maWxlSUQsIGd1ZXN0fSk7XG5cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBhdXRob3IgPSBjcmVhdGVBdXRob3JGcm9tUHJvZmlsZSgpO1xuXG4gICAgICAgIGNvbnN0IGFwcGx5QXV0aG9yVG9Bbm5vdGF0aW9ucyA9IChkaWN0OiB7W2tleTogc3RyaW5nXTogSUFubm90YXRpb259KSA9PiB7XG5cbiAgICAgICAgICAgIGZvciAoY29uc3QgYW5ub3RhdGlvbiBvZiBPYmplY3QudmFsdWVzKGRpY3QpKSB7XG4gICAgICAgICAgICAgICAgYW5ub3RhdGlvbi5hdXRob3IgPSBhdXRob3I7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBhcHBseUF1dGhvclRvUGFnZSA9IChwYWdlTWV0YTogSVBhZ2VNZXRhKSA9PiB7XG5cbiAgICAgICAgICAgIGFwcGx5QXV0aG9yVG9Bbm5vdGF0aW9ucyhwYWdlTWV0YS50ZXh0SGlnaGxpZ2h0cyk7XG4gICAgICAgICAgICBhcHBseUF1dGhvclRvQW5ub3RhdGlvbnMocGFnZU1ldGEuYXJlYUhpZ2hsaWdodHMpO1xuICAgICAgICAgICAgYXBwbHlBdXRob3JUb0Fubm90YXRpb25zKHBhZ2VNZXRhLm5vdGVzKTtcbiAgICAgICAgICAgIGFwcGx5QXV0aG9yVG9Bbm5vdGF0aW9ucyhwYWdlTWV0YS5jb21tZW50cyk7XG4gICAgICAgICAgICBhcHBseUF1dGhvclRvQW5ub3RhdGlvbnMocGFnZU1ldGEucXVlc3Rpb25zKTtcbiAgICAgICAgICAgIGFwcGx5QXV0aG9yVG9Bbm5vdGF0aW9ucyhwYWdlTWV0YS5mbGFzaGNhcmRzKTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIGZvciAoY29uc3QgcGFnZSBvZiBEaWN0aW9uYXJpZXMubnVtYmVyS2V5cyhkb2NNZXRhLnBhZ2VNZXRhcykpIHtcbiAgICAgICAgICAgIGFwcGx5QXV0aG9yVG9QYWdlKGRvY01ldGEucGFnZU1ldGFzW3BhZ2VdKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG59XG5cbmV4cG9ydCB0eXBlIERvY01ldGFJRFN0ciA9IHN0cmluZztcblxuZXhwb3J0IHR5cGUgRG9jTWV0YVJlY29yZCA9IFJlY29yZEhvbGRlcjxEb2NNZXRhSG9sZGVyPjtcblxuZXhwb3J0IGludGVyZmFjZSBEb2NVcGRhdGVSZWYge1xuICAgIHJlYWRvbmx5IGRvY0lEOiBEb2NJRFN0cjtcbiAgICByZWFkb25seSBmaW5nZXJwcmludDogc3RyaW5nO1xufVxuIl19