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
const SpectronRenderer_1 = require("../../js/test/SpectronRenderer");
const Logger_1 = require("polar-shared/src/logger/Logger");
const Firebase_1 = require("../../js/firebase/Firebase");
const GroupProvisions_1 = require("../../js/datastore/sharing/rpc/GroupProvisions");
const ProfileUpdates_1 = require("../../js/datastore/sharing/db/ProfileUpdates");
const GroupJoins_1 = require("../../js/datastore/sharing/rpc/GroupJoins");
const chai_1 = require("chai");
const Groups_1 = require("../../js/datastore/sharing/db/Groups");
const GroupMembers_1 = require("../../js/datastore/sharing/db/GroupMembers");
const GroupMemberInvitations_1 = require("../../js/datastore/sharing/db/GroupMemberInvitations");
const Profiles_1 = require("../../js/datastore/sharing/db/Profiles");
const FirebaseDatastore_1 = require("../../js/datastore/FirebaseDatastore");
const FirebaseDatastore_2 = require("../../js/datastore/FirebaseDatastore");
const DocMetas_1 = require("../../js/metadata/DocMetas");
const DocMetas_2 = require("../../js/metadata/DocMetas");
const DocRefs_1 = require("../../js/datastore/sharing/db/DocRefs");
const GroupDocs_1 = require("../../js/datastore/sharing/db/GroupDocs");
const ProfileOwners_1 = require("../../js/datastore/sharing/db/ProfileOwners");
const UserGroups_1 = require("../../js/datastore/sharing/db/UserGroups");
const Contacts_1 = require("../../js/datastore/sharing/db/Contacts");
const SetArrays_1 = require("polar-shared/src/util/SetArrays");
const GroupDeletes_1 = require("../../js/datastore/sharing/rpc/GroupDeletes");
const Promises_1 = require("../../js/util/Promises");
const BackendFileRefs_1 = require("../../js/datastore/BackendFileRefs");
const Either_1 = require("../../js/util/Either");
const FirebaseDatastores_1 = require("../../js/datastore/FirebaseDatastores");
const GroupLeaves_1 = require("../../js/datastore/sharing/rpc/GroupLeaves");
const Assertions_1 = require("../../js/test/Assertions");
const GroupDocsAdd_1 = require("../../js/datastore/sharing/rpc/GroupDocsAdd");
const Optional_1 = require("polar-shared/src/util/ts/Optional");
const GroupDatastores_1 = require("../../js/datastore/sharing/GroupDatastores");
const DefaultPersistenceLayer_1 = require("../../js/datastore/DefaultPersistenceLayer");
const Datastores_1 = require("../../js/datastore/Datastores");
const GroupMemberDeletes_1 = require("../../js/datastore/sharing/rpc/GroupMemberDeletes");
const UserRefs_1 = require("../../js/datastore/sharing/rpc/UserRefs");
const Preconditions_1 = require("polar-shared/src/Preconditions");
const Objects_1 = require("polar-shared/src/util/Objects");
const log = Logger_1.Logger.create();
mocha.setup('bdd');
mocha.timeout(600000);
process.env.POLAR_TEST_PROJECT = 'polar-test2';
const FIREBASE_USER = process.env.FIREBASE_USER;
const FIREBASE_PASS = process.env.FIREBASE_PASS;
const FIREBASE_USER1 = process.env.FIREBASE_USER1;
const FIREBASE_PASS1 = process.env.FIREBASE_PASS1;
const FIREBASE_USER2 = process.env.FIREBASE_USER2;
const FIREBASE_PASS2 = process.env.FIREBASE_PASS2;
function verifyFailed(delegate) {
    return __awaiter(this, void 0, void 0, function* () {
        let failed;
        try {
            yield delegate();
            failed = false;
        }
        catch (e) {
            failed = true;
        }
        if (!failed) {
            throw new Error("Did not fail as expected");
        }
    });
}
SpectronRenderer_1.SpectronRenderer.run((state) => __awaiter(void 0, void 0, void 0, function* () {
    describe("firebase-groups", function () {
        return __awaiter(this, void 0, void 0, function* () {
            function purgeDatastores() {
                return __awaiter(this, void 0, void 0, function* () {
                    const app = Firebase_1.Firebase.init();
                    function purgeForUser(username, password) {
                        return __awaiter(this, void 0, void 0, function* () {
                            const auth = app.auth();
                            yield auth.signInWithEmailAndPassword(username, password);
                            const uid = auth.currentUser.uid;
                            console.log("======= purge datastore for user: " + uid);
                            const datastore = new FirebaseDatastore_1.FirebaseDatastore();
                            try {
                                yield datastore.init();
                                yield Datastores_1.Datastores.purge(datastore);
                            }
                            finally {
                                yield datastore.stop();
                            }
                        });
                    }
                    yield purgeForUser(FIREBASE_USER, FIREBASE_PASS);
                    yield purgeForUser(FIREBASE_USER1, FIREBASE_PASS1);
                    yield purgeForUser(FIREBASE_USER2, FIREBASE_PASS2);
                });
            }
            function purgeGroups() {
                return __awaiter(this, void 0, void 0, function* () {
                    const app = Firebase_1.Firebase.init();
                    function purgeForUser(username, password) {
                        return __awaiter(this, void 0, void 0, function* () {
                            yield app.auth().signInWithEmailAndPassword(username, password);
                            const user = app.auth().currentUser;
                            const { uid } = user;
                            const userGroup = yield UserGroups_1.UserGroups.get(uid);
                            if (!userGroup) {
                                return;
                            }
                            const groups = SetArrays_1.SetArrays.union(userGroup.invitations || [], userGroup.admin || []);
                            for (const group of groups) {
                                yield GroupDeletes_1.GroupDeletes.exec({ groupID: group });
                            }
                            yield Contacts_1.Contacts.purge();
                            yield GroupMemberInvitations_1.GroupMemberInvitations.purge();
                        });
                    }
                    yield purgeForUser(FIREBASE_USER, FIREBASE_PASS);
                    yield purgeForUser(FIREBASE_USER1, FIREBASE_PASS1);
                    yield purgeForUser(FIREBASE_USER2, FIREBASE_PASS2);
                });
            }
            function purge() {
                return __awaiter(this, void 0, void 0, function* () {
                    console.log("==== BEGIN purge");
                    yield purgeDatastores();
                    yield purgeGroups();
                    console.log("==== END purge");
                });
            }
            const GROUP_DELAY = 10000;
            function waitForGroupDelay() {
                return __awaiter(this, void 0, void 0, function* () {
                    console.log(`Waiting for group delay of ${GROUP_DELAY}ms... `);
                    yield Promises_1.Promises.waitFor(GROUP_DELAY);
                    console.log(`Waiting for group delay of ${GROUP_DELAY}ms... done`);
                });
            }
            function provisionAccountData(userPass) {
                return __awaiter(this, void 0, void 0, function* () {
                    const app = Firebase_1.Firebase.init();
                    console.log("provisionAccountData");
                    userPass = Optional_1.Optional.of(userPass).getOrElse({ user: FIREBASE_USER, pass: FIREBASE_PASS });
                    const auth = app.auth();
                    yield auth.signInWithEmailAndPassword(userPass.user, userPass.pass);
                    const uid = auth.currentUser.uid;
                    console.log("Writing to datastore with uid: " + uid);
                    const firebaseDatastore = new FirebaseDatastore_1.FirebaseDatastore();
                    try {
                        yield firebaseDatastore.init();
                        console.log("Writing docMeta and PDF...");
                        const result = yield DocMetas_1.MockDocMetas.createMockDocMetaFromPDF(firebaseDatastore);
                        console.log("Writing docMeta and PDF...done");
                        return result;
                    }
                    finally {
                        yield firebaseDatastore.stop();
                    }
                });
            }
            function doGroupProvision(mockDoc, email = 'getpolarized.test+test1@gmail.com', key) {
                return __awaiter(this, void 0, void 0, function* () {
                    console.log("doGroupProvision");
                    const { docMeta } = mockDoc;
                    const docID = FirebaseDatastores_1.FirebaseDatastores.computeDocMetaID(docMeta.docInfo.fingerprint);
                    const docRef = DocRefs_1.DocRefs.fromDocMeta(docID, docMeta);
                    const userRef = UserRefs_1.UserRefs.fromEmail(email);
                    const request = {
                        key,
                        docs: [
                            docRef
                        ],
                        invitations: {
                            message: "Private invite to my special group",
                            to: [
                                userRef
                            ]
                        },
                        visibility: 'private'
                    };
                    const response = yield GroupProvisions_1.GroupProvisions.exec(request);
                    return { groupID: response.id, docRef };
                });
            }
            function doGroupProvisionPublic(mockDoc, template = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    console.log("doGroupProvisionPublic");
                    const { docMeta } = mockDoc;
                    const docID = FirebaseDatastores_1.FirebaseDatastores.computeDocMetaID(docMeta.docInfo.fingerprint);
                    const docRef = DocRefs_1.DocRefs.fromDocMeta(docID, docMeta);
                    const request = {
                        docs: [
                            docRef
                        ],
                        invitations: {
                            message: "Private invite to my special group",
                            to: [
                                UserRefs_1.UserRefs.fromEmail('getpolarized.test+test1@gmail.com')
                            ]
                        },
                        name: 'linux',
                        tags: ['linux', 'ubuntu', 'debian'],
                        visibility: template.visibility || 'public',
                        description: template.description,
                        links: template.links
                    };
                    const response = yield GroupProvisions_1.GroupProvisions.exec(request);
                    return response.id;
                });
            }
            function doGroupJoinForUser1(groupID) {
                return __awaiter(this, void 0, void 0, function* () {
                    const app = Firebase_1.Firebase.init();
                    console.log("doGroupJoin");
                    yield app.auth().signInWithEmailAndPassword(FIREBASE_USER1, FIREBASE_PASS1);
                    console.log("Listing group invitations...");
                    const groupMemberInvitations = yield GroupMemberInvitations_1.GroupMemberInvitations.list();
                    console.log("Listing group invitations...done");
                    chai_1.assert.equal(groupMemberInvitations.filter(current => current.groupID === groupID).length, 1, "groupID not in the list of groups: " + groupID);
                    const profileUpdateRequest = {
                        name: "Bob Johnson",
                        bio: "An example user from Mars",
                        location: "Capitol City, Mars",
                        links: ['https://www.mars.org']
                    };
                    console.log("Updating profile...");
                    yield ProfileUpdates_1.ProfileUpdates.exec(profileUpdateRequest);
                    console.log("Updating profile...done");
                    console.log("Joining group...");
                    yield GroupJoins_1.GroupJoins.exec({ groupID });
                    console.log("Joining group...done");
                });
            }
            function assertFetch(url, opts) {
                return __awaiter(this, void 0, void 0, function* () {
                    const response = yield fetch(url);
                    if (opts.status !== undefined) {
                        chai_1.assert.equal(response.status, 200);
                    }
                    if (opts.type !== undefined) {
                        chai_1.assert.equal(response.type, 'cors');
                    }
                    if (opts.contentType !== undefined) {
                        chai_1.assert.equal(response.headers.get('content-type'), 'application/pdf');
                    }
                    if (opts.byteLength !== undefined) {
                        const arrayBuffer = yield response.arrayBuffer();
                        chai_1.assert.equal(arrayBuffer.byteLength, opts.byteLength);
                    }
                });
            }
            function getGroupCanonicalized(groupID) {
                return __awaiter(this, void 0, void 0, function* () {
                    const app = Firebase_1.Firebase.init();
                    const user = app.auth().currentUser;
                    console.log("Reading with uid: " + user.uid);
                    console.log("Trying to read group " + groupID);
                    const group = yield Groups_1.Groups.get(groupID);
                    console.log("Read group properly.");
                    if (group) {
                        const obj = group;
                        delete obj.id;
                        delete obj.created;
                    }
                    return group;
                });
            }
            beforeEach(function () {
                return __awaiter(this, void 0, void 0, function* () {
                    yield purge();
                });
            });
            afterEach(function () {
                return __awaiter(this, void 0, void 0, function* () {
                    yield purge();
                });
            });
            it("group provision of private group", function () {
                return __awaiter(this, void 0, void 0, function* () {
                    const app = Firebase_1.Firebase.init();
                    const mockDoc = yield provisionAccountData();
                    const { groupID } = yield doGroupProvision(mockDoc);
                    function validateUserGroupForPrimaryUser() {
                        return __awaiter(this, void 0, void 0, function* () {
                            const userGroup = yield UserGroups_1.UserGroups.get();
                            const obj = Objects_1.canonicalize(userGroup, obj => {
                                delete obj.uid;
                            });
                            Assertions_1.assertJSON(obj, {
                                "admin": [
                                    groupID
                                ],
                                "groups": [
                                    groupID
                                ],
                                "invitations": [
                                    groupID
                                ],
                                "moderator": [],
                            });
                        });
                    }
                    yield validateUserGroupForPrimaryUser();
                    function validateGroupsOnDocMetaAndDocPermissions(groupID) {
                        return __awaiter(this, void 0, void 0, function* () {
                            console.log("validateGroupsOnDocMetaAndDocPermissions");
                            const groupDocs = yield GroupDocs_1.GroupDocs.list(groupID);
                            chai_1.assert.equal(groupDocs.length, 1, "No group docs found.");
                            const groupDoc = groupDocs[0];
                            chai_1.assert.equal(groupDoc.groupID, groupID, "Wrong groupID");
                            chai_1.assert.isDefined(groupDoc.id);
                            chai_1.assert.isDefined(groupDoc.created);
                            const firestore = app.firestore();
                            const ref = firestore
                                .collection(FirebaseDatastore_2.DatastoreCollection.DOC_META)
                                .doc(groupDoc.docID);
                            const doc = yield ref.get();
                            const recordHolder = doc.data();
                            chai_1.assert.isDefined(recordHolder);
                            chai_1.assert.isDefined(recordHolder.groups);
                            chai_1.assert.isTrue(recordHolder.groups.includes(groupID), "Does not include group ID");
                            console.log("SUCCESS... groups properly has the right groupID");
                        });
                    }
                    yield validateGroupsOnDocMetaAndDocPermissions(groupID);
                    yield doGroupJoinForUser1(groupID);
                    function validateGroupSettingsAfterJoin(groupID) {
                        return __awaiter(this, void 0, void 0, function* () {
                            console.log("validateGroupSettingsAfterJoin");
                            const user = app.auth().currentUser;
                            chai_1.assert.equal(user.email, FIREBASE_USER1);
                            console.log("Testing permissions for user: " + user.uid);
                            console.log("Testing permissions for group: " + groupID);
                            const group = yield Groups_1.Groups.get(groupID);
                            chai_1.assert.isDefined(group);
                            chai_1.assert.equal(group.nrMembers, 2, "nrMembers in group is wrong.");
                            const groupMembers = yield GroupMembers_1.GroupMembers.list(groupID);
                            console.log("groupMembers: ", groupMembers);
                            chai_1.assert.equal(groupMembers.length, 2, "Wrong number of groups members");
                            console.log("Fetching profile owner to validate group member profileID");
                            const profileOwner = yield ProfileOwners_1.ProfileOwners.get(user.uid);
                            chai_1.assert.isDefined(profileOwner);
                            const groupMemberProfileIDs = groupMembers.map(current => current.profileID);
                            chai_1.assert.isTrue(groupMemberProfileIDs.includes(profileOwner.profileID), "Profile owner is not member of group");
                            const groupMemberInvitations = yield GroupMemberInvitations_1.GroupMemberInvitations.list();
                            chai_1.assert.equal(groupMemberInvitations.filter(current => current.groupID === groupID).length, 0);
                        });
                    }
                    yield validateGroupSettingsAfterJoin(groupID);
                    function validateContacts() {
                        return __awaiter(this, void 0, void 0, function* () {
                            const user = app.auth().currentUser;
                            const contacts = yield Contacts_1.Contacts.list();
                            chai_1.assert.equal(contacts.length, 1, "No contacts found for user: " + user.uid);
                            const contact = Objects_1.canonicalize(contacts[0], obj => {
                                obj.profileID = obj.profileID ? 'xxx' : obj.profileID;
                                delete obj.id;
                                delete obj.created;
                            });
                            Assertions_1.assertJSON(contact, {
                                "profileID": "xxx",
                                "reciprocal": true,
                                "rel": [
                                    "shared"
                                ],
                                "uid": "SSVzZnZrmZbCnavWVw6LmoVVCeA3"
                            });
                        });
                    }
                    yield validateContacts();
                    function validateGroupDocs(groupID) {
                        return __awaiter(this, void 0, void 0, function* () {
                            console.log("== validateGroupDocs");
                            const user = app.auth().currentUser;
                            chai_1.assert.equal(user.email, FIREBASE_USER1);
                            const userGroup = yield UserGroups_1.UserGroups.get(user.uid);
                            if (!userGroup) {
                                throw new Error("No user group");
                            }
                            chai_1.assert.isTrue(userGroup.groups.includes(groupID), "We don't have the group ID in our user_group record");
                            console.log(`Attempting to fetch group docs with uid=${user.uid}, groupID: ${groupID}`);
                            yield waitForGroupDelay();
                            const groupDocs = yield GroupDocs_1.GroupDocs.list(groupID);
                            chai_1.assert.equal(groupDocs.length, 1, "No group docs found.");
                            const groupDoc = groupDocs[0];
                            chai_1.assert.equal(groupDoc.groupID, groupID);
                            chai_1.assert.isDefined(groupDoc.id);
                            chai_1.assert.isDefined(groupDoc.created);
                        });
                    }
                    yield validateGroupDocs(groupID);
                    function validatePermissionDeniedForOthers(groupID) {
                        return __awaiter(this, void 0, void 0, function* () {
                            console.log("== validatePermissionDeniedForOthers");
                            yield app.auth().signInWithEmailAndPassword(FIREBASE_USER2, FIREBASE_PASS2);
                            yield verifyFailed(() => __awaiter(this, void 0, void 0, function* () { return yield Groups_1.Groups.get(groupID); }));
                        });
                    }
                    yield validatePermissionDeniedForOthers(groupID);
                    function validatePermissionsForDocMeta(groupID) {
                        return __awaiter(this, void 0, void 0, function* () {
                            console.log("validatePermissionsForDocMeta");
                            const auth = app.auth();
                            yield auth.signInWithEmailAndPassword(FIREBASE_USER1, FIREBASE_PASS1);
                            const user = auth.currentUser;
                            const firebaseDatastore = new FirebaseDatastore_1.FirebaseDatastore();
                            try {
                                yield firebaseDatastore.init();
                                const groupDocs = yield GroupDocs_1.GroupDocs.list(groupID);
                                console.log(`Attempting to read documents to validate permissions: uid: ${user.uid}...`);
                                const firestore = app.firestore();
                                for (const groupDoc of groupDocs) {
                                    console.log(`Validating docID: ${groupDoc.docID}`);
                                    console.log("Reading it directly from the firebase API...");
                                    const ref = firestore
                                        .collection(FirebaseDatastore_2.DatastoreCollection.DOC_META)
                                        .doc(groupDoc.docID);
                                    yield ref.get();
                                    console.log("Reading it directly from the firebase API...done");
                                    yield firebaseDatastore.getDocMetaDirectly(groupDoc.docID);
                                }
                            }
                            finally {
                                yield firebaseDatastore.stop();
                            }
                        });
                    }
                    yield validatePermissionsForDocMeta(groupID);
                    function validateGetFile(groupID) {
                        return __awaiter(this, void 0, void 0, function* () {
                            console.log("validateGetFile");
                            const auth = app.auth();
                            const user = auth.currentUser;
                            const idToken = yield user.getIdToken();
                            const groupDocs = yield GroupDocs_1.GroupDocs.list(groupID);
                            const firebaseDatastore = new FirebaseDatastore_1.FirebaseDatastore();
                            try {
                                yield firebaseDatastore.init();
                                for (const groupDoc of groupDocs) {
                                    console.log("Validating we can fetch doc: ", groupDoc);
                                    const data = yield firebaseDatastore.getDocMetaDirectly(groupDoc.docID);
                                    const docMeta = DocMetas_2.DocMetas.deserialize(data, groupDoc.fingerprint);
                                    const backendFileRefs = BackendFileRefs_1.BackendFileRefs.toBackendFileRefs(Either_1.Either.ofLeft(docMeta));
                                    chai_1.assert.equal(backendFileRefs.length, 1);
                                    for (const backendFileRef of backendFileRefs) {
                                        console.log("Validating we can fetch backend file ref: ", backendFileRef);
                                        const url = FirebaseDatastores_1.FirebaseDatastores.computeDatastoreGetFileURL({
                                            docID: groupDoc.docID,
                                            idToken,
                                            backend: backendFileRef.backend,
                                            fileRef: backendFileRef,
                                        });
                                        yield assertFetch(url, {
                                            status: 200,
                                            type: 'cors',
                                            contentType: 'application/pdf',
                                            byteLength: 117687
                                        });
                                    }
                                }
                            }
                            finally {
                                yield firebaseDatastore.stop();
                            }
                        });
                    }
                    yield validateGetFile(groupID);
                });
            });
            it("group provision of private group and verify group members includes the group creator", function () {
                return __awaiter(this, void 0, void 0, function* () {
                    const mockDoc = yield provisionAccountData();
                    const { groupID } = yield doGroupProvision(mockDoc);
                    function validateGroupMembers() {
                        return __awaiter(this, void 0, void 0, function* () {
                            const profile = yield Profiles_1.Profiles.currentProfile();
                            chai_1.assert.isTrue(Preconditions_1.isPresent(profile));
                            const groupMembers = yield GroupMembers_1.GroupMembers.list(groupID);
                            chai_1.assert.isTrue(Preconditions_1.isPresent(groupMembers));
                            chai_1.assert.equal(groupMembers.length, 1);
                            const groupMember = groupMembers[0];
                            chai_1.assert.equal(groupMember.groupID, groupID);
                            chai_1.assert.equal(groupMember.profileID, profile.id);
                            const group = yield Groups_1.Groups.get(groupID);
                            chai_1.assert.equal(group.nrMembers, 1);
                        });
                    }
                    yield validateGroupMembers();
                });
            });
            it("join and then leave group", function () {
                return __awaiter(this, void 0, void 0, function* () {
                    const mockDoc = yield provisionAccountData();
                    const { groupID } = yield doGroupProvision(mockDoc);
                    yield doGroupJoinForUser1(groupID);
                    yield waitForGroupDelay();
                    function assertGroupBefore() {
                        return __awaiter(this, void 0, void 0, function* () {
                            const group = yield getGroupCanonicalized(groupID);
                            Assertions_1.assertJSON(group, {
                                visibility: 'private',
                                tags: [],
                                nrMembers: 2
                            });
                        });
                    }
                    yield assertGroupBefore();
                    yield GroupLeaves_1.GroupLeaves.exec({ groupID });
                    function assertGroupAfter() {
                        return __awaiter(this, void 0, void 0, function* () {
                            const app = Firebase_1.Firebase.init();
                            yield app.auth().signInWithEmailAndPassword(FIREBASE_USER, FIREBASE_PASS);
                            const group = yield getGroupCanonicalized(groupID);
                            Assertions_1.assertJSON(group, {
                                visibility: 'private',
                                tags: [],
                                nrMembers: 1
                            });
                        });
                    }
                    yield assertGroupAfter();
                });
            });
            it("double provision of group with key", function () {
                return __awaiter(this, void 0, void 0, function* () {
                    const mockDoc = yield provisionAccountData();
                    const email = 'getpolarized.test+test1@gmail.com';
                    const fingerprint = mockDoc.docMeta.docInfo.fingerprint;
                    const groupDocRefBefore = yield doGroupProvision(mockDoc, email, fingerprint);
                    const groupDocRefAfter = yield doGroupProvision(mockDoc, email, fingerprint);
                    chai_1.assert.equal(groupDocRefBefore.groupID, groupDocRefAfter.groupID);
                    const contacts = yield Contacts_1.Contacts.list();
                    chai_1.assert.equal(contacts.length, 1);
                    const contact = Objects_1.canonicalize(contacts[0], obj => {
                        delete obj.id;
                        delete obj.created;
                        obj.profileID = 'xxx';
                    });
                    Assertions_1.assertJSON(contact, {
                        "email": "getpolarized.test+test1@gmail.com",
                        "profileID": "xxx",
                        "reciprocal": false,
                        "rel": [
                            "shared"
                        ],
                        "uid": "GdTRyWWIjsPtAcguFfH8FOiGryf1"
                    });
                    function doTestGroupMemberInvitations() {
                        return __awaiter(this, void 0, void 0, function* () {
                            const app = Firebase_1.Firebase.init();
                            const auth = app.auth();
                            yield auth.signInWithEmailAndPassword(FIREBASE_USER1, FIREBASE_PASS1);
                            const invitations = yield GroupMemberInvitations_1.GroupMemberInvitations.list();
                            chai_1.assert.equal(invitations.length, 1);
                            const invitation = Objects_1.canonicalize(invitations[0], obj => {
                                delete obj.id;
                                delete obj.created;
                                obj.from.profileID = 'xxx';
                                obj.groupID = 'xxx';
                            });
                            Assertions_1.assertJSON(invitation, {
                                "docs": [
                                    {
                                        "docID": "121XWG5nPM492A1q6tFs1fLy5S6ndJZF",
                                        "fingerprint": "0x001",
                                        "nrPages": 4,
                                        "tags": {},
                                        "title": ""
                                    }
                                ],
                                "from": {
                                    "email": "getpolarized.test+test@gmail.com",
                                    "image": null,
                                    "name": "",
                                    "profileID": "xxx"
                                },
                                "groupID": "xxx",
                                "message": "Private invite to my special group",
                                "to": "getpolarized.test+test1@gmail.com"
                            });
                        });
                    }
                    yield doTestGroupMemberInvitations();
                });
            });
            it("join and then add my own docs", function () {
                return __awaiter(this, void 0, void 0, function* () {
                    function doUser0() {
                        return __awaiter(this, void 0, void 0, function* () {
                            const mockDoc = yield provisionAccountData();
                            const groupID = yield doGroupProvision(mockDoc);
                            yield waitForGroupDelay();
                            return groupID;
                        });
                    }
                    const { groupID } = yield doUser0();
                    function doGroupJoinForUser1(groupID) {
                        return __awaiter(this, void 0, void 0, function* () {
                            const app = Firebase_1.Firebase.init();
                            console.log("doGroupJoin");
                            yield app.auth().signInWithEmailAndPassword(FIREBASE_USER1, FIREBASE_PASS1);
                            yield GroupJoins_1.GroupJoins.exec({ groupID });
                        });
                    }
                    yield doGroupJoinForUser1(groupID);
                    function doGroupDocsAdd(mockDoc) {
                        return __awaiter(this, void 0, void 0, function* () {
                            const { docMeta } = mockDoc;
                            const docID = FirebaseDatastores_1.FirebaseDatastores.computeDocMetaID(docMeta.docInfo.fingerprint);
                            const docRef = DocRefs_1.DocRefs.fromDocMeta(docID, docMeta);
                            const request = {
                                groupID,
                                docs: [
                                    docRef
                                ],
                            };
                            yield GroupDocsAdd_1.GroupDocsAdd.exec(request);
                        });
                    }
                    const mockDoc = yield provisionAccountData({ user: FIREBASE_USER1, pass: FIREBASE_PASS1 });
                    yield doGroupDocsAdd(mockDoc);
                    const groupDocs = yield GroupDocs_1.GroupDocs.list(groupID);
                    chai_1.assert.equal(groupDocs.length, 2);
                });
            });
            it("delete users from a group with just the invitation", function () {
                return __awaiter(this, void 0, void 0, function* () {
                    const alice = 'alice@example.com';
                    const mockDoc = yield provisionAccountData();
                    const fingerprint = mockDoc.docMeta.docInfo.fingerprint;
                    const { groupID } = yield doGroupProvision(mockDoc, alice, fingerprint);
                    const profile = yield Profiles_1.Profiles.currentProfile();
                    chai_1.assert.isDefined(profile);
                    const invitationBefore = yield GroupMemberInvitations_1.GroupMemberInvitations.listByGroupIDAndProfileID(groupID, profile.id);
                    chai_1.assert.equal(invitationBefore.length, 1);
                    const userRef = UserRefs_1.UserRefs.fromEmail(alice);
                    yield GroupMemberDeletes_1.GroupMemberDeletes.exec({ groupID, userRefs: [userRef] });
                    const invitationAfter = yield GroupMemberInvitations_1.GroupMemberInvitations.listByGroupIDAndProfileID(groupID, profile.id);
                    chai_1.assert.equal(invitationAfter.length, 0);
                });
            });
            it("delete users from a group after they have joined", function () {
                return __awaiter(this, void 0, void 0, function* () {
                    const mockDoc = yield provisionAccountData();
                    const fingerprint = mockDoc.docMeta.docInfo.fingerprint;
                    const { groupID } = yield doGroupProvision(mockDoc, undefined, fingerprint);
                    yield doGroupJoinForUser1(groupID);
                    const app = Firebase_1.Firebase.init();
                    yield app.auth().signInWithEmailAndPassword(FIREBASE_USER, FIREBASE_PASS);
                    const groupMembers = yield GroupMembers_1.GroupMembers.list(groupID);
                    chai_1.assert.equal(groupMembers.length, 2);
                    const groupMember = groupMembers[0];
                    const userRef = UserRefs_1.UserRefs.fromProfileID(groupMember.profileID);
                    yield GroupMemberDeletes_1.GroupMemberDeletes.exec({ groupID, userRefs: [userRef] });
                    const groupMembersAfter = yield GroupMembers_1.GroupMembers.list(groupID);
                    chai_1.assert.equal(groupMembersAfter.length, 1);
                });
            });
            it("provision a user for a group who isn't yet using polar", function () {
                return __awaiter(this, void 0, void 0, function* () {
                    const mockDoc = yield provisionAccountData();
                    yield doGroupProvision(mockDoc, 'alice@example.com');
                    const contacts = yield Contacts_1.Contacts.list();
                    chai_1.assert.equal(contacts.length, 1);
                    const contact = Objects_1.canonicalize(contacts[0], obj => {
                        delete obj.created;
                        delete obj.id;
                    });
                    Assertions_1.assertJSON(contact, {
                        "email": "alice@example.com",
                        "reciprocal": false,
                        "rel": [
                            "shared"
                        ],
                        "uid": "GdTRyWWIjsPtAcguFfH8FOiGryf1"
                    });
                });
            });
            it("join group twice and validate metadata (private group)", function () {
                return __awaiter(this, void 0, void 0, function* () {
                    const mockDoc = yield provisionAccountData();
                    const { groupID } = yield doGroupProvision(mockDoc);
                    yield doGroupJoinForUser1(groupID);
                    yield GroupJoins_1.GroupJoins.exec({ groupID });
                    yield waitForGroupDelay();
                    function assertGroupAfter() {
                        return __awaiter(this, void 0, void 0, function* () {
                            const group = yield getGroupCanonicalized(groupID);
                            Assertions_1.assertJSON(group, {
                                visibility: 'private',
                                tags: [],
                                nrMembers: 2
                            });
                        });
                    }
                    yield assertGroupAfter();
                    const groupMemberInvitations = yield GroupMemberInvitations_1.GroupMemberInvitations.list();
                    chai_1.assert.equal(groupMemberInvitations.length, 0);
                });
            });
            it("Import the doc from a private group into my datastore", function () {
                return __awaiter(this, void 0, void 0, function* () {
                    const mockDoc = yield provisionAccountData();
                    const { groupID, docRef } = yield doGroupProvision(mockDoc);
                    yield doGroupJoinForUser1(groupID);
                    yield waitForGroupDelay();
                    function withPersistenceLayer(delegate) {
                        return __awaiter(this, void 0, void 0, function* () {
                            const datastore = new FirebaseDatastore_1.FirebaseDatastore();
                            const persistenceLayer = new DefaultPersistenceLayer_1.DefaultPersistenceLayer(datastore);
                            try {
                                yield persistenceLayer.init();
                                return yield delegate(persistenceLayer);
                            }
                            finally {
                                yield persistenceLayer.stop();
                            }
                        });
                    }
                    const docMetaFileRef = yield withPersistenceLayer((persistenceLayer) => __awaiter(this, void 0, void 0, function* () {
                        const { fingerprint } = docRef;
                        yield GroupDatastores_1.GroupDatastores.importFromGroup(persistenceLayer, { groupID, docRef });
                        const docMeta = yield persistenceLayer.getDocMeta(fingerprint);
                        chai_1.assert.isDefined(docMeta);
                        const backendFileRef = BackendFileRefs_1.BackendFileRefs.toBackendFileRef(Either_1.Either.ofLeft(docMeta));
                        chai_1.assert.isDefined(backendFileRef);
                        const docFileMeta = yield persistenceLayer.getFile(backendFileRef.backend, backendFileRef);
                        yield assertFetch(docFileMeta.url, {
                            status: 200,
                            type: 'cors',
                            contentType: 'application/pdf',
                            byteLength: 117687
                        });
                        const docMetaFileRef = {
                            fingerprint,
                            docFile: backendFileRef,
                            docInfo: docMeta.docInfo
                        };
                        return docMetaFileRef;
                    }));
                    function verifyUserAccessToGroupDocs(groupID, userPass) {
                        return __awaiter(this, void 0, void 0, function* () {
                            const app = Firebase_1.Firebase.init();
                            const auth = app.auth();
                            yield auth.signInWithEmailAndPassword(userPass.user, userPass.pass);
                            const groupDocs = yield GroupDocs_1.GroupDocs.list(groupID);
                            function getDocMeta(docID) {
                                return __awaiter(this, void 0, void 0, function* () {
                                    const firestore = app.firestore();
                                    const ref = firestore
                                        .collection(FirebaseDatastore_2.DatastoreCollection.DOC_META)
                                        .doc(docID);
                                    const snapshot = yield ref.get();
                                    return snapshot.data();
                                });
                            }
                            for (const groupDoc of groupDocs) {
                                const docMeta = yield getDocMeta(groupDoc.docID);
                                chai_1.assert.isDefined(docMeta, "Could not find doc for: " + groupDoc.docID);
                            }
                        });
                    }
                    yield verifyUserAccessToGroupDocs(groupID, { user: FIREBASE_USER, pass: FIREBASE_PASS });
                    yield verifyUserAccessToGroupDocs(groupID, { user: FIREBASE_USER1, pass: FIREBASE_PASS1 });
                    yield withPersistenceLayer((persistenceLayer) => __awaiter(this, void 0, void 0, function* () {
                        yield persistenceLayer.delete(docMetaFileRef);
                    }));
                });
            });
            it("Public group settings", function () {
                return __awaiter(this, void 0, void 0, function* () {
                    const mockDoc = yield provisionAccountData();
                    const groupID = yield doGroupProvisionPublic(mockDoc);
                    function assertGroup() {
                        return __awaiter(this, void 0, void 0, function* () {
                            const group = yield getGroupCanonicalized(groupID);
                            Assertions_1.assertJSON(group, {
                                name: 'linux',
                                visibility: 'public',
                                nrMembers: 1,
                                tags: [
                                    'linux',
                                    'ubuntu',
                                    'debian'
                                ]
                            });
                        });
                    }
                    function assertGroupJSON(group) {
                        chai_1.assert.isDefined(group.created);
                        const groupCanonicalized = Objects_1.canonicalize(group, obj => {
                            obj.created = 'xxx';
                        });
                        Assertions_1.assertJSON(groupCanonicalized, {
                            "created": "xxx",
                            "id": "1iASZEzNPRe5xKreNty2",
                            "name": "linux",
                            "nrMembers": 1,
                            "tags": [
                                "linux",
                                "ubuntu",
                                "debian"
                            ],
                            "visibility": "public"
                        });
                    }
                    yield assertGroup();
                    function assertGroupSearch() {
                        return __awaiter(this, void 0, void 0, function* () {
                            const hits = yield Groups_1.Groups.executeSearchWithTags(['linux']);
                            chai_1.assert.equal(hits.length, 1);
                            const first = hits[0];
                            assertGroupJSON(first);
                        });
                    }
                    yield assertGroupSearch();
                    function assertGetByName() {
                        return __awaiter(this, void 0, void 0, function* () {
                            const group = yield Groups_1.Groups.getByName('linux');
                            chai_1.assert.isDefined(group);
                            assertGroupJSON(group);
                        });
                    }
                    yield assertGetByName();
                });
            });
            it("Public docs in public groups", function () {
                return __awaiter(this, void 0, void 0, function* () {
                    const mockDoc = yield provisionAccountData();
                    const groupID = yield doGroupProvisionPublic(mockDoc);
                    function doGroupJoinForUser1(groupID) {
                        return __awaiter(this, void 0, void 0, function* () {
                            const app = Firebase_1.Firebase.init();
                            console.log("doGroupJoin");
                            yield app.auth().signInWithEmailAndPassword(FIREBASE_USER1, FIREBASE_PASS1);
                            console.log("Listing group invitations...");
                            const groupMemberInvitations = yield GroupMemberInvitations_1.GroupMemberInvitations.list();
                            console.log("Listing group invitations...done");
                            chai_1.assert.equal(groupMemberInvitations.filter(current => current.groupID === groupID).length, 1, "groupID not in the list of groups: " + groupID);
                            const profileUpdateRequest = {
                                name: "Bob Johnson",
                                bio: "An example user from Mars",
                                location: "Capitol City, Mars",
                                links: ['https://www.mars.org']
                            };
                            console.log("Updating profile...");
                            yield ProfileUpdates_1.ProfileUpdates.exec(profileUpdateRequest);
                            console.log("Updating profile...done");
                            console.log("Joining group...");
                            yield GroupJoins_1.GroupJoins.exec({ groupID });
                            console.log("Joining group...done");
                        });
                    }
                });
            });
            it("Profile update", function () {
                return __awaiter(this, void 0, void 0, function* () {
                    const app = Firebase_1.Firebase.init();
                    yield app.auth().signInWithEmailAndPassword(FIREBASE_USER, FIREBASE_PASS);
                    const request = {
                        name: "Alice Smith",
                        bio: "An example user from the land of Oz",
                        location: "Capitol City, Oz",
                        links: ['https://www.wonderland.org']
                    };
                    yield ProfileUpdates_1.ProfileUpdates.exec(request);
                    const profile = yield Profiles_1.Profiles.currentProfile();
                    chai_1.assert.isDefined(profile);
                    chai_1.assert.equal(profile.name, request.name);
                    chai_1.assert.equal(profile.bio, request.bio);
                    chai_1.assert.equal(profile.location, request.location);
                });
            });
        });
    });
    mocha.run((nrFailures) => {
        state.testResultWriter.write(nrFailures === 0)
            .catch(err => console.error("Unable to write results: ", err));
    });
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbnRlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxxRUFBZ0U7QUFDaEUsMkRBQXNEO0FBQ3RELHlEQUFvRDtBQUVwRCxvRkFBK0U7QUFHL0UsaUZBQTRFO0FBQzVFLDBFQUFxRTtBQUNyRSwrQkFBNEI7QUFDNUIsaUVBQThFO0FBQzlFLDZFQUF3RTtBQUN4RSxpR0FBNEY7QUFDNUYscUVBQWdFO0FBQ2hFLDRFQUF1RTtBQUN2RSw0RUFBeUU7QUFHekUseURBQXdEO0FBQ3hELHlEQUFvRDtBQUVwRCxtRUFBOEQ7QUFDOUQsdUVBQWtFO0FBRWxFLCtFQUEwRTtBQUMxRSx5RUFBb0U7QUFDcEUscUVBQWdFO0FBQ2hFLCtEQUEwRDtBQUMxRCw4RUFBeUU7QUFDekUscURBQWdEO0FBRWhELHdFQUFtRTtBQUNuRSxpREFBNEM7QUFDNUMsOEVBQXlFO0FBQ3pFLDRFQUF1RTtBQUN2RSx5REFBb0Q7QUFFcEQsOEVBQXlFO0FBRXpFLGdFQUEyRDtBQUUzRCxnRkFBMkU7QUFFM0Usd0ZBQW1GO0FBQ25GLDhEQUF5RDtBQUd6RCwwRkFBcUY7QUFDckYsc0VBQWlFO0FBQ2pFLGtFQUF5RDtBQUd6RCwyREFBMkQ7QUFFM0QsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDbkIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUV0QixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixHQUFHLGFBQWEsQ0FBQztBQUUvQyxNQUFNLGFBQWEsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWMsQ0FBQztBQUNqRCxNQUFNLGFBQWEsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWMsQ0FBQztBQUVqRCxNQUFNLGNBQWMsR0FBRyxPQUFPLENBQUMsR0FB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QyxhQUFNLENBQUMsS0FBSyxDQUFDLE9BQVEsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUV0RCxDQUFDO2FBQUEsQ0FBQyxDQUFDO1FBRVAsQ0FBQztLQUFBLENBQUMsQ0FBQztJQUVILEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFrQixFQUFFLEVBQUU7UUFFN0IsS0FBSyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxVQUFVLEtBQUssQ0FBQyxDQUFDO2FBQ3pDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsMkJBQTJCLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUV2RSxDQUFDLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NwZWN0cm9uUmVuZGVyZXJ9IGZyb20gJy4uLy4uL2pzL3Rlc3QvU3BlY3Ryb25SZW5kZXJlcic7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7RmlyZWJhc2V9IGZyb20gJy4uLy4uL2pzL2ZpcmViYXNlL0ZpcmViYXNlJztcbmltcG9ydCB7R3JvdXBQcm92aXNpb25SZXF1ZXN0fSBmcm9tICcuLi8uLi9qcy9kYXRhc3RvcmUvc2hhcmluZy9ycGMvR3JvdXBQcm92aXNpb25zJztcbmltcG9ydCB7R3JvdXBQcm92aXNpb25zfSBmcm9tICcuLi8uLi9qcy9kYXRhc3RvcmUvc2hhcmluZy9ycGMvR3JvdXBQcm92aXNpb25zJztcbmltcG9ydCB7RG9jSURTdHJ9IGZyb20gJy4uLy4uL2pzL2RhdGFzdG9yZS9zaGFyaW5nL3JwYy9Hcm91cFByb3Zpc2lvbnMnO1xuaW1wb3J0IHtQcm9maWxlVXBkYXRlUmVxdWVzdH0gZnJvbSAnLi4vLi4vanMvZGF0YXN0b3JlL3NoYXJpbmcvZGIvUHJvZmlsZVVwZGF0ZXMnO1xuaW1wb3J0IHtQcm9maWxlVXBkYXRlc30gZnJvbSAnLi4vLi4vanMvZGF0YXN0b3JlL3NoYXJpbmcvZGIvUHJvZmlsZVVwZGF0ZXMnO1xuaW1wb3J0IHtHcm91cEpvaW5zfSBmcm9tICcuLi8uLi9qcy9kYXRhc3RvcmUvc2hhcmluZy9ycGMvR3JvdXBKb2lucyc7XG5pbXBvcnQge2Fzc2VydH0gZnJvbSAnY2hhaSc7XG5pbXBvcnQge0dyb3VwLCBHcm91cEluaXQsIEdyb3Vwc30gZnJvbSAnLi4vLi4vanMvZGF0YXN0b3JlL3NoYXJpbmcvZGIvR3JvdXBzJztcbmltcG9ydCB7R3JvdXBNZW1iZXJzfSBmcm9tICcuLi8uLi9qcy9kYXRhc3RvcmUvc2hhcmluZy9kYi9Hcm91cE1lbWJlcnMnO1xuaW1wb3J0IHtHcm91cE1lbWJlckludml0YXRpb25zfSBmcm9tICcuLi8uLi9qcy9kYXRhc3RvcmUvc2hhcmluZy9kYi9Hcm91cE1lbWJlckludml0YXRpb25zJztcbmltcG9ydCB7UHJvZmlsZXN9IGZyb20gJy4uLy4uL2pzL2RhdGFzdG9yZS9zaGFyaW5nL2RiL1Byb2ZpbGVzJztcbmltcG9ydCB7RmlyZWJhc2VEYXRhc3RvcmV9IGZyb20gJy4uLy4uL2pzL2RhdGFzdG9yZS9GaXJlYmFzZURhdGFzdG9yZSc7XG5pbXBvcnQge0RhdGFzdG9yZUNvbGxlY3Rpb259IGZyb20gJy4uLy4uL2pzL2RhdGFzdG9yZS9GaXJlYmFzZURhdGFzdG9yZSc7XG5pbXBvcnQge1JlY29yZEhvbGRlcn0gZnJvbSAnLi4vLi4vanMvZGF0YXN0b3JlL0ZpcmViYXNlRGF0YXN0b3JlJztcbmltcG9ydCB7RG9jTWV0YUhvbGRlcn0gZnJvbSAnLi4vLi4vanMvZGF0YXN0b3JlL0ZpcmViYXNlRGF0YXN0b3JlJztcbmltcG9ydCB7TW9ja0RvY01ldGFzfSBmcm9tICcuLi8uLi9qcy9tZXRhZGF0YS9Eb2NNZXRhcyc7XG5pbXBvcnQge0RvY01ldGFzfSBmcm9tICcuLi8uLi9qcy9tZXRhZGF0YS9Eb2NNZXRhcyc7XG5pbXBvcnQge01vY2tEb2N9IGZyb20gJy4uLy4uL2pzL21ldGFkYXRhL0RvY01ldGFzJztcbmltcG9ydCB7RG9jUmVmc30gZnJvbSAnLi4vLi4vanMvZGF0YXN0b3JlL3NoYXJpbmcvZGIvRG9jUmVmcyc7XG5pbXBvcnQge0dyb3VwRG9jc30gZnJvbSAnLi4vLi4vanMvZGF0YXN0b3JlL3NoYXJpbmcvZGIvR3JvdXBEb2NzJztcbmltcG9ydCB7R3JvdXBEb2NJRFN0cn0gZnJvbSAnLi4vLi4vanMvZGF0YXN0b3JlL3NoYXJpbmcvZGIvR3JvdXBEb2NzJztcbmltcG9ydCB7UHJvZmlsZU93bmVyc30gZnJvbSAnLi4vLi4vanMvZGF0YXN0b3JlL3NoYXJpbmcvZGIvUHJvZmlsZU93bmVycyc7XG5pbXBvcnQge1VzZXJHcm91cHN9IGZyb20gJy4uLy4uL2pzL2RhdGFzdG9yZS9zaGFyaW5nL2RiL1VzZXJHcm91cHMnO1xuaW1wb3J0IHtDb250YWN0c30gZnJvbSAnLi4vLi4vanMvZGF0YXN0b3JlL3NoYXJpbmcvZGIvQ29udGFjdHMnO1xuaW1wb3J0IHtTZXRBcnJheXN9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC9TZXRBcnJheXMnO1xuaW1wb3J0IHtHcm91cERlbGV0ZXN9IGZyb20gJy4uLy4uL2pzL2RhdGFzdG9yZS9zaGFyaW5nL3JwYy9Hcm91cERlbGV0ZXMnO1xuaW1wb3J0IHtQcm9taXNlc30gZnJvbSAnLi4vLi4vanMvdXRpbC9Qcm9taXNlcyc7XG5pbXBvcnQge0RvY01ldGF9IGZyb20gJy4uLy4uL2pzL21ldGFkYXRhL0RvY01ldGEnO1xuaW1wb3J0IHtCYWNrZW5kRmlsZVJlZnN9IGZyb20gJy4uLy4uL2pzL2RhdGFzdG9yZS9CYWNrZW5kRmlsZVJlZnMnO1xuaW1wb3J0IHtFaXRoZXJ9IGZyb20gJy4uLy4uL2pzL3V0aWwvRWl0aGVyJztcbmltcG9ydCB7RmlyZWJhc2VEYXRhc3RvcmVzfSBmcm9tICcuLi8uLi9qcy9kYXRhc3RvcmUvRmlyZWJhc2VEYXRhc3RvcmVzJztcbmltcG9ydCB7R3JvdXBMZWF2ZXN9IGZyb20gJy4uLy4uL2pzL2RhdGFzdG9yZS9zaGFyaW5nL3JwYy9Hcm91cExlYXZlcyc7XG5pbXBvcnQge2Fzc2VydEpTT059IGZyb20gJy4uLy4uL2pzL3Rlc3QvQXNzZXJ0aW9ucyc7XG5pbXBvcnQge0pTT05SUENFcnJvcn0gZnJvbSAnLi4vLi4vanMvZGF0YXN0b3JlL3NoYXJpbmcvcnBjL0pTT05SUEMnO1xuaW1wb3J0IHtHcm91cERvY3NBZGR9IGZyb20gJy4uLy4uL2pzL2RhdGFzdG9yZS9zaGFyaW5nL3JwYy9Hcm91cERvY3NBZGQnO1xuaW1wb3J0IHtHcm91cERvY0FkZFJlcXVlc3R9IGZyb20gJy4uLy4uL2pzL2RhdGFzdG9yZS9zaGFyaW5nL3JwYy9Hcm91cERvY3NBZGQnO1xuaW1wb3J0IHtPcHRpb25hbH0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL3RzL09wdGlvbmFsJztcbmltcG9ydCB7R3JvdXBJRFN0cn0gZnJvbSAnLi4vLi4vanMvZGF0YXN0b3JlL0RhdGFzdG9yZSc7XG5pbXBvcnQge0dyb3VwRGF0YXN0b3Jlc30gZnJvbSAnLi4vLi4vanMvZGF0YXN0b3JlL3NoYXJpbmcvR3JvdXBEYXRhc3RvcmVzJztcbmltcG9ydCB7R3JvdXBEb2NSZWZ9IGZyb20gJy4uLy4uL2pzL2RhdGFzdG9yZS9zaGFyaW5nL0dyb3VwRGF0YXN0b3Jlcyc7XG5pbXBvcnQge0RlZmF1bHRQZXJzaXN0ZW5jZUxheWVyfSBmcm9tICcuLi8uLi9qcy9kYXRhc3RvcmUvRGVmYXVsdFBlcnNpc3RlbmNlTGF5ZXInO1xuaW1wb3J0IHtEYXRhc3RvcmVzfSBmcm9tICcuLi8uLi9qcy9kYXRhc3RvcmUvRGF0YXN0b3Jlcyc7XG5pbXBvcnQge1BlcnNpc3RlbmNlTGF5ZXJ9IGZyb20gJy4uLy4uL2pzL2RhdGFzdG9yZS9QZXJzaXN0ZW5jZUxheWVyJztcbmltcG9ydCB7RG9jTWV0YUZpbGVSZWZ9IGZyb20gJy4uLy4uL2pzL2RhdGFzdG9yZS9Eb2NNZXRhUmVmJztcbmltcG9ydCB7R3JvdXBNZW1iZXJEZWxldGVzfSBmcm9tICcuLi8uLi9qcy9kYXRhc3RvcmUvc2hhcmluZy9ycGMvR3JvdXBNZW1iZXJEZWxldGVzJztcbmltcG9ydCB7VXNlclJlZnN9IGZyb20gJy4uLy4uL2pzL2RhdGFzdG9yZS9zaGFyaW5nL3JwYy9Vc2VyUmVmcyc7XG5pbXBvcnQge2lzUHJlc2VudH0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9QcmVjb25kaXRpb25zJztcbmltcG9ydCB7SURvY01ldGF9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL21ldGFkYXRhL0lEb2NNZXRhXCI7XG5pbXBvcnQge0VtYWlsU3RyfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy91dGlsL1N0cmluZ3NcIjtcbmltcG9ydCB7Y2Fub25pY2FsaXplfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy91dGlsL09iamVjdHNcIjtcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG5tb2NoYS5zZXR1cCgnYmRkJyk7XG5tb2NoYS50aW1lb3V0KDYwMDAwMCk7XG5cbnByb2Nlc3MuZW52LlBPTEFSX1RFU1RfUFJPSkVDVCA9ICdwb2xhci10ZXN0Mic7XG5cbmNvbnN0IEZJUkVCQVNFX1VTRVIgPSBwcm9jZXNzLmVudi5GSVJFQkFTRV9VU0VSITtcbmNvbnN0IEZJUkVCQVNFX1BBU1MgPSBwcm9jZXNzLmVudi5GSVJFQkFTRV9QQVNTITtcblxuY29uc3QgRklSRUJBU0VfVVNFUjEgPSBwcm9jZXNzLmVudi5GSVJFQkFTRV9VU0VSMSE7XG5jb25zdCBGSVJFQkFTRV9QQVNTMSA9IHByb2Nlc3MuZW52LkZJUkVCQVNFX1BBU1MxITtcblxuY29uc3QgRklSRUJBU0VfVVNFUjIgPSBwcm9jZXNzLmVudi5GSVJFQkFTRV9VU0VSMiE7XG5jb25zdCBGSVJFQkFTRV9QQVNTMiA9IHByb2Nlc3MuZW52LkZJUkVCQVNFX1BBU1MyITtcblxuYXN5bmMgZnVuY3Rpb24gdmVyaWZ5RmFpbGVkKGRlbGVnYXRlOiAoKSA9PiBQcm9taXNlPGFueT4pIHtcblxuICAgIGxldCBmYWlsZWQ6IGJvb2xlYW47XG5cbiAgICB0cnkge1xuXG4gICAgICAgIGF3YWl0IGRlbGVnYXRlKCk7XG4gICAgICAgIGZhaWxlZCA9IGZhbHNlO1xuXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBmYWlsZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICghIGZhaWxlZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEaWQgbm90IGZhaWwgYXMgZXhwZWN0ZWRcIik7XG4gICAgfVxuXG59XG5cblNwZWN0cm9uUmVuZGVyZXIucnVuKGFzeW5jIChzdGF0ZSkgPT4ge1xuXG4gICAgLy8gVE9ETzogSSBuZWVkIHRvIHZlcmlmeSBhIHBsYW4gZm9yIHByb2ZpbGVzLi4uXG4gICAgLy9cbiAgICAvLyAtIG1ha2Ugc3VyZSB1bmludml0ZWQgdXNlcnMgZ2V0IHRvIHNlZSB0aGVpciBkb2N1bWVudHMgb25jZSB0aGV5IHNpZ24gdXAuXG4gICAgLy9cbiAgICAvL1xuXG4gICAgLy8gVE9ETzogaXQgd291bGQgYmUgbmljZSBpZiB1c2VycyBjb3VsZCBqdXN0IENIQVQgd2l0aGluIGEgZG9jdW1lbnQuLi5cbiAgICAvLyBtYXliZSBsaWtlIHRoZXkgZG8gaW4gdHdpdGNoIGFyb3VuZCB2aWRlb3MuLi5cblxuICAgIC8vIFRPRE86IGRlbGV0ZSB0aGUgcHJvZmlsZXMgYWZ0ZXIgZWFjaCBydW4gYW5kIHRoZW4gdXBkYXRlIHRoZW0gc28gdGhhdFxuICAgIC8vIHdlIGNhbiB2ZXJpZnkgZXZlcnl0aGluZyBkdXJpbmcgdGhlIGxpZmVjeWNsZSBvZiB0aGUgdXNlciBmcm9tIG5ldyBzaWdudXBcbiAgICAvLyB0byBzaGFyaW5nIHdpdGggYW4gZXhpc3RpbmcgdXNlciB3aG8gaGFzIGEgcHJvZmlsZS4gIFZlcmlmeSB0aGF0IHRoZVxuICAgIC8vIHByb2ZpbGVJRCBpcyB1cGRhdGVkIHdoZW4gdGhleSBmaXJzdCBsb2dpbi5cblxuICAgIC8vIFRPRE86IGJ1aWxkIGEgbmV3IERhdGFzdG9yZSBpbXBsIHRoYXQgaXMgYSAndmlldycgb24gdGhlIG1haW4gb25lIGRlcml2ZWRcbiAgICAvLyBmcm9tIHRoZSBkb2NJRCBzdWNoIHRoYXQgd2UgY2FuIGNhbGwgYWxsIHRoZSBtYWluIG9wZXJhdGlvbnMuLi5cblxuICAgIC8vICMjIFBVQkxJQyBHUk9VUFNcblxuICAgIC8vIFRPRE86IG1ha2Ugc3VyZSB3ZSBkb24ndCBoYXZlIGEgZ3JvdXAgSUQgY29sbGlzaW9uIHdoZW4gY3JlYXRpbmcgYnkgbmFtZS5cbiAgICAvLyBJIGhhdmUgdG8gdGVzdCB3aGF0IGhhcHBlbnMgd2hlbiB3ZSBjcmVhdGUgYnkgbmFtZS4gIFdlIG5lZWQgdG8gaGF2ZSBhXG4gICAgLy8gJ2tleScgcmV0dXJuZWQgc28gdGhhdCB0aGUgVUkgY2FuIHByb3Blcmx5IHJlc3BvbmQgYW5kIGV4cGxhaW4gd2hhdFxuICAgIC8vIGhhcHBlbmVkLlxuXG4gICAgLy8gRnV0dXJlIHdvcms6XG4gICAgLy9cblxuICAgIC8vIFRPRE86XG4gICAgLy8gLSBmb3IgbGFyZ2UgZG9jdW1lbnRzIHdlIG1pZ2h0IG5lZWQgdG8gZmV0Y2ggVE9PIE1VQ0ggZGF0YSBhbmQgd2UncmVcbiAgICAvLyAgIGdvaW5nIHRvIGVuZCB1cCBwdWxsaW5nIGRvd24gdG9vIG11Y2ggdG8gdGhlIGNsaWVudC5cbiAgICAvLyAtICAgVE9ETzogd2hhdCBoYXBwZW5zIGlmIEkgY2FsbCB0aGVzZSBtZXRob2RzIHR3aWNlID8gdGhleSBuZWVkIHRvIGJlXG4gICAgLy8gICAgIGlkZW1wb3RlbnQuXG4gICAgLy9cbiAgICAvLyAgIC0gVE9ETzogdGVzdCBwdWJsaWMgZ3JvdXBzIGFuZCBwcm90ZWN0ZWQgZ3JvdXBzXG4gICAgLy9cbiAgICAvLyAgIC0gVE9ETzogZG8gYSBmdWxsIGxpZmVjeWNsZSBmcm9tIG5vIHVzZXIgYWNjb3VudHMgLCB0byB1c2VyIGFjY291bnRzXG4gICAgLy8gICAgY3JlYXRlZCwgdG8gcHJvZmlsZSBJRHMgdXBkYXRlZC5cbiAgICAvL1xuXG4gICAgZGVzY3JpYmUoXCJmaXJlYmFzZS1ncm91cHNcIiwgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gcHVyZ2VEYXRhc3RvcmVzKCkge1xuXG4gICAgICAgICAgICBjb25zdCBhcHAgPSBGaXJlYmFzZS5pbml0KCk7XG5cbiAgICAgICAgICAgIGFzeW5jIGZ1bmN0aW9uIHB1cmdlRm9yVXNlcih1c2VybmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBhdXRoID0gYXBwLmF1dGgoKTtcbiAgICAgICAgICAgICAgICBhd2FpdCBhdXRoLnNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKHVzZXJuYW1lLCBwYXNzd29yZCk7XG4gICAgICAgICAgICAgICAgY29uc3QgdWlkID0gYXV0aC5jdXJyZW50VXNlciEudWlkO1xuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCI9PT09PT09IHB1cmdlIGRhdGFzdG9yZSBmb3IgdXNlcjogXCIgKyB1aWQpO1xuXG5cbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhc3RvcmUgPSBuZXcgRmlyZWJhc2VEYXRhc3RvcmUoKTtcblxuICAgICAgICAgICAgICAgIHRyeSB7XG5cbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgZGF0YXN0b3JlLmluaXQoKTtcblxuICAgICAgICAgICAgICAgICAgICBhd2FpdCBEYXRhc3RvcmVzLnB1cmdlKGRhdGFzdG9yZSk7XG5cbiAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCBkYXRhc3RvcmUuc3RvcCgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhd2FpdCBwdXJnZUZvclVzZXIoRklSRUJBU0VfVVNFUiwgRklSRUJBU0VfUEFTUyk7XG4gICAgICAgICAgICBhd2FpdCBwdXJnZUZvclVzZXIoRklSRUJBU0VfVVNFUjEsIEZJUkVCQVNFX1BBU1MxKTtcbiAgICAgICAgICAgIGF3YWl0IHB1cmdlRm9yVXNlcihGSVJFQkFTRV9VU0VSMiwgRklSRUJBU0VfUEFTUzIpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBhc3luYyBmdW5jdGlvbiBwdXJnZUdyb3VwcygpIHtcblxuICAgICAgICAgICAgY29uc3QgYXBwID0gRmlyZWJhc2UuaW5pdCgpO1xuXG4gICAgICAgICAgICBhc3luYyBmdW5jdGlvbiBwdXJnZUZvclVzZXIodXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykge1xuXG4gICAgICAgICAgICAgICAgYXdhaXQgYXBwLmF1dGgoKS5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCh1c2VybmFtZSwgcGFzc3dvcmQpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgdXNlciA9IGFwcC5hdXRoKCkuY3VycmVudFVzZXIhO1xuICAgICAgICAgICAgICAgIGNvbnN0IHt1aWR9ID0gdXNlcjtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJHcm91cCA9IGF3YWl0IFVzZXJHcm91cHMuZ2V0KHVpZCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoISB1c2VyR3JvdXApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IGdyb3VwcyA9IFNldEFycmF5cy51bmlvbih1c2VyR3JvdXAuaW52aXRhdGlvbnMgfHwgW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJHcm91cC5hZG1pbiB8fCBbXSk7XG5cbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGdyb3VwIG9mIGdyb3Vwcykge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCBHcm91cERlbGV0ZXMuZXhlYyh7Z3JvdXBJRDogZ3JvdXB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBwdXJnZSB0aGUgb3RoZXIgdGFibGVzIHRvb1xuXG4gICAgICAgICAgICAgICAgYXdhaXQgQ29udGFjdHMucHVyZ2UoKTtcbiAgICAgICAgICAgICAgICBhd2FpdCBHcm91cE1lbWJlckludml0YXRpb25zLnB1cmdlKCk7XG4gICAgICAgICAgICAgICAgLy8gVXNlckdyb3Vwc1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGF3YWl0IHB1cmdlRm9yVXNlcihGSVJFQkFTRV9VU0VSLCBGSVJFQkFTRV9QQVNTKTtcbiAgICAgICAgICAgIGF3YWl0IHB1cmdlRm9yVXNlcihGSVJFQkFTRV9VU0VSMSwgRklSRUJBU0VfUEFTUzEpO1xuICAgICAgICAgICAgYXdhaXQgcHVyZ2VGb3JVc2VyKEZJUkVCQVNFX1VTRVIyLCBGSVJFQkFTRV9QQVNTMik7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIHB1cmdlKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCI9PT09IEJFR0lOIHB1cmdlXCIpO1xuXG4gICAgICAgICAgICBhd2FpdCBwdXJnZURhdGFzdG9yZXMoKTtcbiAgICAgICAgICAgIGF3YWl0IHB1cmdlR3JvdXBzKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIj09PT0gRU5EIHB1cmdlXCIpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBHUk9VUF9ERUxBWTogbnVtYmVyID0gMTAwMDA7XG5cbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gd2FpdEZvckdyb3VwRGVsYXkoKSB7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBXYWl0aW5nIGZvciBncm91cCBkZWxheSBvZiAke0dST1VQX0RFTEFZfW1zLi4uIGApO1xuICAgICAgICAgICAgYXdhaXQgUHJvbWlzZXMud2FpdEZvcihHUk9VUF9ERUxBWSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgV2FpdGluZyBmb3IgZ3JvdXAgZGVsYXkgb2YgJHtHUk9VUF9ERUxBWX1tcy4uLiBkb25lYCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIHByb3Zpc2lvbkFjY291bnREYXRhKHVzZXJQYXNzPzogVXNlclBhc3MpIHtcblxuICAgICAgICAgICAgY29uc3QgYXBwID0gRmlyZWJhc2UuaW5pdCgpO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInByb3Zpc2lvbkFjY291bnREYXRhXCIpO1xuXG4gICAgICAgICAgICB1c2VyUGFzcyA9IE9wdGlvbmFsLm9mKHVzZXJQYXNzKS5nZXRPckVsc2Uoe3VzZXI6IEZJUkVCQVNFX1VTRVIsIHBhc3M6IEZJUkVCQVNFX1BBU1N9KTtcblxuICAgICAgICAgICAgY29uc3QgYXV0aCA9IGFwcC5hdXRoKCk7XG4gICAgICAgICAgICBhd2FpdCBhdXRoLnNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKHVzZXJQYXNzLnVzZXIsIHVzZXJQYXNzLnBhc3MpO1xuICAgICAgICAgICAgY29uc3QgdWlkID0gYXV0aC5jdXJyZW50VXNlciEudWlkO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIldyaXRpbmcgdG8gZGF0YXN0b3JlIHdpdGggdWlkOiBcIiArIHVpZCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGZpcmViYXNlRGF0YXN0b3JlID0gbmV3IEZpcmViYXNlRGF0YXN0b3JlKCk7XG4gICAgICAgICAgICB0cnkge1xuXG4gICAgICAgICAgICAgICAgYXdhaXQgZmlyZWJhc2VEYXRhc3RvcmUuaW5pdCgpO1xuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJXcml0aW5nIGRvY01ldGEgYW5kIFBERi4uLlwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBNb2NrRG9jTWV0YXMuY3JlYXRlTW9ja0RvY01ldGFGcm9tUERGKGZpcmViYXNlRGF0YXN0b3JlKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIldyaXRpbmcgZG9jTWV0YSBhbmQgUERGLi4uZG9uZVwiKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG5cbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgZmlyZWJhc2VEYXRhc3RvcmUuc3RvcCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBhc3luYyBmdW5jdGlvbiBkb0dyb3VwUHJvdmlzaW9uKG1vY2tEb2M6IE1vY2tEb2MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1haWw6IEVtYWlsU3RyID0gJ2dldHBvbGFyaXplZC50ZXN0K3Rlc3QxQGdtYWlsLmNvbScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5Pzogc3RyaW5nKTogUHJvbWlzZTxHcm91cERvY1JlZj4ge1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImRvR3JvdXBQcm92aXNpb25cIik7XG5cbiAgICAgICAgICAgIGNvbnN0IHtkb2NNZXRhfSA9IG1vY2tEb2M7XG4gICAgICAgICAgICBjb25zdCBkb2NJRCA9IEZpcmViYXNlRGF0YXN0b3Jlcy5jb21wdXRlRG9jTWV0YUlEKGRvY01ldGEuZG9jSW5mby5maW5nZXJwcmludCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGRvY1JlZiA9IERvY1JlZnMuZnJvbURvY01ldGEoZG9jSUQsIGRvY01ldGEpO1xuXG4gICAgICAgICAgICBjb25zdCB1c2VyUmVmID0gVXNlclJlZnMuZnJvbUVtYWlsKGVtYWlsKTtcblxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdDogR3JvdXBQcm92aXNpb25SZXF1ZXN0ID0ge1xuICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICBkb2NzOiBbXG4gICAgICAgICAgICAgICAgICAgIGRvY1JlZlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgaW52aXRhdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJQcml2YXRlIGludml0ZSB0byBteSBzcGVjaWFsIGdyb3VwXCIsXG4gICAgICAgICAgICAgICAgICAgIHRvOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyUmVmXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6ICdwcml2YXRlJ1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBHcm91cFByb3Zpc2lvbnMuZXhlYyhyZXF1ZXN0KTtcbiAgICAgICAgICAgIHJldHVybiB7Z3JvdXBJRDogcmVzcG9uc2UuaWQsIGRvY1JlZn07XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGRvR3JvdXBQcm92aXNpb25QdWJsaWMobW9ja0RvYzogTW9ja0RvYyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogUGFydGlhbDxHcm91cEluaXQ+ID0ge30pIHtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJkb0dyb3VwUHJvdmlzaW9uUHVibGljXCIpO1xuXG4gICAgICAgICAgICBjb25zdCB7ZG9jTWV0YX0gPSBtb2NrRG9jO1xuICAgICAgICAgICAgY29uc3QgZG9jSUQgPSBGaXJlYmFzZURhdGFzdG9yZXMuY29tcHV0ZURvY01ldGFJRChkb2NNZXRhLmRvY0luZm8uZmluZ2VycHJpbnQpO1xuXG4gICAgICAgICAgICBjb25zdCBkb2NSZWYgPSBEb2NSZWZzLmZyb21Eb2NNZXRhKGRvY0lELCBkb2NNZXRhKTtcblxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdDogR3JvdXBQcm92aXNpb25SZXF1ZXN0ID0ge1xuICAgICAgICAgICAgICAgIGRvY3M6IFtcbiAgICAgICAgICAgICAgICAgICAgZG9jUmVmXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBpbnZpdGF0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIlByaXZhdGUgaW52aXRlIHRvIG15IHNwZWNpYWwgZ3JvdXBcIixcbiAgICAgICAgICAgICAgICAgICAgdG86IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJSZWZzLmZyb21FbWFpbCgnZ2V0cG9sYXJpemVkLnRlc3QrdGVzdDFAZ21haWwuY29tJylcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbmFtZTogJ2xpbnV4JyxcbiAgICAgICAgICAgICAgICB0YWdzOiBbJ2xpbnV4JywgJ3VidW50dScsICdkZWJpYW4nXSxcbiAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiB0ZW1wbGF0ZS52aXNpYmlsaXR5IHx8ICdwdWJsaWMnLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0ZW1wbGF0ZS5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICBsaW5rczogdGVtcGxhdGUubGlua3NcblxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBHcm91cFByb3Zpc2lvbnMuZXhlYyhyZXF1ZXN0KTtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5pZDtcblxuICAgICAgICB9XG5cblxuICAgICAgICBhc3luYyBmdW5jdGlvbiBkb0dyb3VwSm9pbkZvclVzZXIxKGdyb3VwSUQ6IEdyb3VwSURTdHIpIHtcblxuICAgICAgICAgICAgY29uc3QgYXBwID0gRmlyZWJhc2UuaW5pdCgpO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImRvR3JvdXBKb2luXCIpO1xuXG4gICAgICAgICAgICAvLyBub3cgc3dpdGNoIHRvIHRoZSB1c2VyIHRoYXQgd2FzIGludml0ZWQgYW5kIGpvaW4gdGhhdCBncm91cC5cblxuICAgICAgICAgICAgYXdhaXQgYXBwLmF1dGgoKS5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChGSVJFQkFTRV9VU0VSMSwgRklSRUJBU0VfUEFTUzEpO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxpc3RpbmcgZ3JvdXAgaW52aXRhdGlvbnMuLi5cIik7XG5cbiAgICAgICAgICAgIGNvbnN0IGdyb3VwTWVtYmVySW52aXRhdGlvbnMgPSBhd2FpdCBHcm91cE1lbWJlckludml0YXRpb25zLmxpc3QoKTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJMaXN0aW5nIGdyb3VwIGludml0YXRpb25zLi4uZG9uZVwiKTtcblxuICAgICAgICAgICAgLy8gaXQncyBpbXBvcnRhbnQgdGhhdCB0aGUgdXNlciBjYW4gc2VlIHRoZWlyIG93biBpbnZpdGF0aW9ucy5cbiAgICAgICAgICAgIGFzc2VydC5lcXVhbChncm91cE1lbWJlckludml0YXRpb25zLmZpbHRlcihjdXJyZW50ID0+IGN1cnJlbnQuZ3JvdXBJRCA9PT0gZ3JvdXBJRCkubGVuZ3RoLCAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ3JvdXBJRCBub3QgaW4gdGhlIGxpc3Qgb2YgZ3JvdXBzOiBcIiArIGdyb3VwSUQpO1xuXG4gICAgICAgICAgICBjb25zdCBwcm9maWxlVXBkYXRlUmVxdWVzdDogUHJvZmlsZVVwZGF0ZVJlcXVlc3QgPSB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJCb2IgSm9obnNvblwiLFxuICAgICAgICAgICAgICAgIGJpbzogXCJBbiBleGFtcGxlIHVzZXIgZnJvbSBNYXJzXCIsXG4gICAgICAgICAgICAgICAgbG9jYXRpb246IFwiQ2FwaXRvbCBDaXR5LCBNYXJzXCIsXG4gICAgICAgICAgICAgICAgbGlua3M6IFsnaHR0cHM6Ly93d3cubWFycy5vcmcnXVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJVcGRhdGluZyBwcm9maWxlLi4uXCIpO1xuICAgICAgICAgICAgYXdhaXQgUHJvZmlsZVVwZGF0ZXMuZXhlYyhwcm9maWxlVXBkYXRlUmVxdWVzdCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVwZGF0aW5nIHByb2ZpbGUuLi5kb25lXCIpO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkpvaW5pbmcgZ3JvdXAuLi5cIik7XG4gICAgICAgICAgICBhd2FpdCBHcm91cEpvaW5zLmV4ZWMoe2dyb3VwSUR9KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSm9pbmluZyBncm91cC4uLmRvbmVcIik7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGludGVyZmFjZSBBc3NlcnRGZXRjaE9wdHMge1xuICAgICAgICAgICAgcmVhZG9ubHkgc3RhdHVzPzogbnVtYmVyO1xuICAgICAgICAgICAgcmVhZG9ubHkgdHlwZT86IHN0cmluZztcbiAgICAgICAgICAgIHJlYWRvbmx5IGNvbnRlbnRUeXBlPzogc3RyaW5nO1xuICAgICAgICAgICAgcmVhZG9ubHkgYnl0ZUxlbmd0aD86IG51bWJlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBc3NlcnQgdGhhdCB3ZSBjYW4gZmV0Y2ggdGhlIGdpdmVuIFVSTCBwcm9wZXJseS5cbiAgICAgICAgICogQHBhcmFtIHVybFxuICAgICAgICAgKi9cbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gYXNzZXJ0RmV0Y2godXJsOiBzdHJpbmcsIG9wdHM6IEFzc2VydEZldGNoT3B0cykge1xuXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG5cbiAgICAgICAgICAgIGlmIChvcHRzLnN0YXR1cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgYXNzZXJ0LmVxdWFsKHJlc3BvbnNlLnN0YXR1cywgMjAwKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG9wdHMudHlwZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgYXNzZXJ0LmVxdWFsKHJlc3BvbnNlLnR5cGUsICdjb3JzJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChvcHRzLmNvbnRlbnRUeXBlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBhc3NlcnQuZXF1YWwocmVzcG9uc2UuaGVhZGVycy5nZXQoJ2NvbnRlbnQtdHlwZScpLCAnYXBwbGljYXRpb24vcGRmJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChvcHRzLmJ5dGVMZW5ndGggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFycmF5QnVmZmVyID0gYXdhaXQgcmVzcG9uc2UuYXJyYXlCdWZmZXIoKTtcblxuICAgICAgICAgICAgICAgIGFzc2VydC5lcXVhbChhcnJheUJ1ZmZlci5ieXRlTGVuZ3RoLCBvcHRzLmJ5dGVMZW5ndGgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBhc3luYyBmdW5jdGlvbiBnZXRHcm91cENhbm9uaWNhbGl6ZWQoZ3JvdXBJRDogR3JvdXBJRFN0cik6IFByb21pc2U8YW55PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IGFwcCA9IEZpcmViYXNlLmluaXQoKTtcbiAgICAgICAgICAgIGNvbnN0IHVzZXIgPSBhcHAuYXV0aCgpLmN1cnJlbnRVc2VyITtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZWFkaW5nIHdpdGggdWlkOiBcIiArIHVzZXIudWlkKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVHJ5aW5nIHRvIHJlYWQgZ3JvdXAgXCIgKyBncm91cElEKTtcblxuICAgICAgICAgICAgY29uc3QgZ3JvdXAgPSBhd2FpdCBHcm91cHMuZ2V0KGdyb3VwSUQpO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlYWQgZ3JvdXAgcHJvcGVybHkuXCIpO1xuXG4gICAgICAgICAgICBpZiAoZ3JvdXApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBvYmogPSA8YW55PiBncm91cDtcbiAgICAgICAgICAgICAgICBkZWxldGUgb2JqLmlkO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBvYmouY3JlYXRlZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGdyb3VwO1xuXG4gICAgICAgIH1cbiAgICAgICAgLy9cbiAgICAgICAgYmVmb3JlRWFjaChhc3luYyBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGF3YWl0IHB1cmdlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGFmdGVyRWFjaChhc3luYyBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGF3YWl0IHB1cmdlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KFwiZ3JvdXAgcHJvdmlzaW9uIG9mIHByaXZhdGUgZ3JvdXBcIiwgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGFwcCA9IEZpcmViYXNlLmluaXQoKTtcblxuICAgICAgICAgICAgY29uc3QgbW9ja0RvYyA9IGF3YWl0IHByb3Zpc2lvbkFjY291bnREYXRhKCk7XG4gICAgICAgICAgICBjb25zdCB7Z3JvdXBJRH0gPSBhd2FpdCBkb0dyb3VwUHJvdmlzaW9uKG1vY2tEb2MpO1xuXG4gICAgICAgICAgICBhc3luYyBmdW5jdGlvbiB2YWxpZGF0ZVVzZXJHcm91cEZvclByaW1hcnlVc2VyKCkge1xuXG4gICAgICAgICAgICAgICAgY29uc3QgdXNlckdyb3VwID0gYXdhaXQgVXNlckdyb3Vwcy5nZXQoKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IG9iaiA9IGNhbm9uaWNhbGl6ZSh1c2VyR3JvdXAsIG9iaiA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBvYmoudWlkO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgYXNzZXJ0SlNPTihvYmosIHtcbiAgICAgICAgICAgICAgICAgICAgXCJhZG1pblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBncm91cElEXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFwiZ3JvdXBzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwSURcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgXCJpbnZpdGF0aW9uc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBncm91cElEXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFwibW9kZXJhdG9yXCI6IFtdLFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGF3YWl0IHZhbGlkYXRlVXNlckdyb3VwRm9yUHJpbWFyeVVzZXIoKTtcblxuICAgICAgICAgICAgYXN5bmMgZnVuY3Rpb24gdmFsaWRhdGVHcm91cHNPbkRvY01ldGFBbmREb2NQZXJtaXNzaW9ucyhncm91cElEOiBHcm91cElEU3RyKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInZhbGlkYXRlR3JvdXBzT25Eb2NNZXRhQW5kRG9jUGVybWlzc2lvbnNcIik7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBncm91cERvY3MgPSBhd2FpdCBHcm91cERvY3MubGlzdChncm91cElEKTtcblxuICAgICAgICAgICAgICAgIGFzc2VydC5lcXVhbChncm91cERvY3MubGVuZ3RoLCAxLCBcIk5vIGdyb3VwIGRvY3MgZm91bmQuXCIpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZ3JvdXBEb2MgPSBncm91cERvY3NbMF07XG5cbiAgICAgICAgICAgICAgICBhc3NlcnQuZXF1YWwoZ3JvdXBEb2MuZ3JvdXBJRCwgZ3JvdXBJRCwgXCJXcm9uZyBncm91cElEXCIpO1xuICAgICAgICAgICAgICAgIGFzc2VydC5pc0RlZmluZWQoZ3JvdXBEb2MuaWQpO1xuICAgICAgICAgICAgICAgIGFzc2VydC5pc0RlZmluZWQoZ3JvdXBEb2MuY3JlYXRlZCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBmaXJlc3RvcmUgPSBhcHAuZmlyZXN0b3JlKCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCByZWYgPSBmaXJlc3RvcmVcbiAgICAgICAgICAgICAgICAgICAgLmNvbGxlY3Rpb24oRGF0YXN0b3JlQ29sbGVjdGlvbi5ET0NfTUVUQSlcbiAgICAgICAgICAgICAgICAgICAgLmRvYyhncm91cERvYy5kb2NJRCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBkb2MgPSBhd2FpdCByZWYuZ2V0KCk7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVjb3JkSG9sZGVyID0gPFJlY29yZEhvbGRlcjxJRG9jTWV0YT4gfCB1bmRlZmluZWQ+IGRvYy5kYXRhKCk7XG5cbiAgICAgICAgICAgICAgICBhc3NlcnQuaXNEZWZpbmVkKHJlY29yZEhvbGRlcik7XG4gICAgICAgICAgICAgICAgYXNzZXJ0LmlzRGVmaW5lZChyZWNvcmRIb2xkZXIhLmdyb3Vwcyk7XG5cbiAgICAgICAgICAgICAgICBhc3NlcnQuaXNUcnVlKHJlY29yZEhvbGRlciEuZ3JvdXBzIS5pbmNsdWRlcyhncm91cElEKSwgXCJEb2VzIG5vdCBpbmNsdWRlIGdyb3VwIElEXCIpO1xuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTVUNDRVNTLi4uIGdyb3VwcyBwcm9wZXJseSBoYXMgdGhlIHJpZ2h0IGdyb3VwSURcIik7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYXdhaXQgdmFsaWRhdGVHcm91cHNPbkRvY01ldGFBbmREb2NQZXJtaXNzaW9ucyhncm91cElEKTtcblxuICAgICAgICAgICAgYXdhaXQgZG9Hcm91cEpvaW5Gb3JVc2VyMShncm91cElEKTtcblxuICAgICAgICAgICAgYXN5bmMgZnVuY3Rpb24gdmFsaWRhdGVHcm91cFNldHRpbmdzQWZ0ZXJKb2luKGdyb3VwSUQ6IEdyb3VwSURTdHIpIHtcblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidmFsaWRhdGVHcm91cFNldHRpbmdzQWZ0ZXJKb2luXCIpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgdXNlciA9IGFwcC5hdXRoKCkuY3VycmVudFVzZXIhO1xuICAgICAgICAgICAgICAgIGFzc2VydC5lcXVhbCh1c2VyLmVtYWlsLCBGSVJFQkFTRV9VU0VSMSk7XG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRlc3RpbmcgcGVybWlzc2lvbnMgZm9yIHVzZXI6IFwiICsgdXNlci51aWQpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGVzdGluZyBwZXJtaXNzaW9ucyBmb3IgZ3JvdXA6IFwiICsgZ3JvdXBJRCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBncm91cCA9IGF3YWl0IEdyb3Vwcy5nZXQoZ3JvdXBJRCk7XG5cbiAgICAgICAgICAgICAgICBhc3NlcnQuaXNEZWZpbmVkKGdyb3VwKTtcblxuICAgICAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSBuck1lbWJlcnMgY291bnRzIG9uIHRoZSBncm91cHMgYXJlIHNldHVwIHByb3Blcmx5LlxuICAgICAgICAgICAgICAgIGFzc2VydC5lcXVhbChncm91cCEubnJNZW1iZXJzLCAyLCBcIm5yTWVtYmVycyBpbiBncm91cCBpcyB3cm9uZy5cIik7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBncm91cE1lbWJlcnMgPSBhd2FpdCBHcm91cE1lbWJlcnMubGlzdChncm91cElEKTtcblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZ3JvdXBNZW1iZXJzOiBcIiwgZ3JvdXBNZW1iZXJzKTtcblxuICAgICAgICAgICAgICAgIGFzc2VydC5lcXVhbChncm91cE1lbWJlcnMubGVuZ3RoLCAyLCBcIldyb25nIG51bWJlciBvZiBncm91cHMgbWVtYmVyc1wiKTtcblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRmV0Y2hpbmcgcHJvZmlsZSBvd25lciB0byB2YWxpZGF0ZSBncm91cCBtZW1iZXIgcHJvZmlsZUlEXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2ZpbGVPd25lciA9IGF3YWl0IFByb2ZpbGVPd25lcnMuZ2V0KHVzZXIudWlkKTtcblxuICAgICAgICAgICAgICAgIGFzc2VydC5pc0RlZmluZWQocHJvZmlsZU93bmVyKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGdyb3VwTWVtYmVyUHJvZmlsZUlEcyA9IGdyb3VwTWVtYmVycy5tYXAoY3VycmVudCA9PiBjdXJyZW50LnByb2ZpbGVJRCk7XG5cbiAgICAgICAgICAgICAgICBhc3NlcnQuaXNUcnVlKGdyb3VwTWVtYmVyUHJvZmlsZUlEcy5pbmNsdWRlcyhwcm9maWxlT3duZXIhLnByb2ZpbGVJRCksIFwiUHJvZmlsZSBvd25lciBpcyBub3QgbWVtYmVyIG9mIGdyb3VwXCIpO1xuXG4gICAgICAgICAgICAgICAgLy8gbm93IG1ha2Ugc3VyZSB0aGVyZSBhcmUgbm8gaW52aXRhdGlvbnMgZm9yIHRoaXMgZ3JvdXAgYWZ0ZXIgLi4uXG4gICAgICAgICAgICAgICAgY29uc3QgZ3JvdXBNZW1iZXJJbnZpdGF0aW9ucyA9IGF3YWl0IEdyb3VwTWVtYmVySW52aXRhdGlvbnMubGlzdCgpO1xuXG4gICAgICAgICAgICAgICAgYXNzZXJ0LmVxdWFsKGdyb3VwTWVtYmVySW52aXRhdGlvbnMuZmlsdGVyKGN1cnJlbnQgPT4gY3VycmVudC5ncm91cElEID09PSBncm91cElEKS5sZW5ndGgsIDApO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGF3YWl0IHZhbGlkYXRlR3JvdXBTZXR0aW5nc0FmdGVySm9pbihncm91cElEKTtcblxuICAgICAgICAgICAgYXN5bmMgZnVuY3Rpb24gdmFsaWRhdGVDb250YWN0cygpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VyID0gYXBwLmF1dGgoKS5jdXJyZW50VXNlciE7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjb250YWN0cyA9IGF3YWl0IENvbnRhY3RzLmxpc3QoKTtcbiAgICAgICAgICAgICAgICBhc3NlcnQuZXF1YWwoY29udGFjdHMubGVuZ3RoICwgMSwgXCJObyBjb250YWN0cyBmb3VuZCBmb3IgdXNlcjogXCIgKyB1c2VyLnVpZCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjb250YWN0ID0gY2Fub25pY2FsaXplKGNvbnRhY3RzWzBdLCBvYmogPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgIG9iai5wcm9maWxlSUQgPSBvYmoucHJvZmlsZUlEID8gJ3h4eCcgOiBvYmoucHJvZmlsZUlEO1xuXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBvYmouaWQ7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBvYmouY3JlYXRlZDtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGFzc2VydEpTT04oY29udGFjdCwge1xuICAgICAgICAgICAgICAgICAgICAgICBcInByb2ZpbGVJRFwiOiBcInh4eFwiLFxuICAgICAgICAgICAgICAgICAgICAgICBcInJlY2lwcm9jYWxcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgXCJyZWxcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hhcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgXCJ1aWRcIjogXCJTU1Z6Wm5acm1aYkNuYXZXVnc2TG1vVlZDZUEzXCJcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhd2FpdCB2YWxpZGF0ZUNvbnRhY3RzKCk7XG5cbiAgICAgICAgICAgIGFzeW5jIGZ1bmN0aW9uIHZhbGlkYXRlR3JvdXBEb2NzKGdyb3VwSUQ6IEdyb3VwSURTdHIpIHtcblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiPT0gdmFsaWRhdGVHcm91cERvY3NcIik7XG5cbiAgICAgICAgICAgICAgICBjb25zdCB1c2VyID0gYXBwLmF1dGgoKS5jdXJyZW50VXNlciE7XG5cbiAgICAgICAgICAgICAgICBhc3NlcnQuZXF1YWwodXNlci5lbWFpbCwgRklSRUJBU0VfVVNFUjEpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgdXNlckdyb3VwID0gYXdhaXQgVXNlckdyb3Vwcy5nZXQodXNlci51aWQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCEgdXNlckdyb3VwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHVzZXIgZ3JvdXBcIik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYXNzZXJ0LmlzVHJ1ZSh1c2VyR3JvdXAuZ3JvdXBzLmluY2x1ZGVzKGdyb3VwSUQpLCBcIldlIGRvbid0IGhhdmUgdGhlIGdyb3VwIElEIGluIG91ciB1c2VyX2dyb3VwIHJlY29yZFwiKTtcblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBBdHRlbXB0aW5nIHRvIGZldGNoIGdyb3VwIGRvY3Mgd2l0aCB1aWQ9JHt1c2VyLnVpZH0sIGdyb3VwSUQ6ICR7Z3JvdXBJRH1gKTtcblxuICAgICAgICAgICAgICAgIGF3YWl0IHdhaXRGb3JHcm91cERlbGF5KCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBncm91cERvY3MgPSBhd2FpdCBHcm91cERvY3MubGlzdChncm91cElEKTtcblxuICAgICAgICAgICAgICAgIGFzc2VydC5lcXVhbChncm91cERvY3MubGVuZ3RoLCAxLCBcIk5vIGdyb3VwIGRvY3MgZm91bmQuXCIpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZ3JvdXBEb2MgPSBncm91cERvY3NbMF07XG5cbiAgICAgICAgICAgICAgICBhc3NlcnQuZXF1YWwoZ3JvdXBEb2MuZ3JvdXBJRCwgZ3JvdXBJRCk7XG4gICAgICAgICAgICAgICAgYXNzZXJ0LmlzRGVmaW5lZChncm91cERvYy5pZCk7XG4gICAgICAgICAgICAgICAgYXNzZXJ0LmlzRGVmaW5lZChncm91cERvYy5jcmVhdGVkKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhd2FpdCB2YWxpZGF0ZUdyb3VwRG9jcyhncm91cElEKTtcblxuICAgICAgICAgICAgYXN5bmMgZnVuY3Rpb24gdmFsaWRhdGVQZXJtaXNzaW9uRGVuaWVkRm9yT3RoZXJzKGdyb3VwSUQ6IEdyb3VwSURTdHIpIHtcblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiPT0gdmFsaWRhdGVQZXJtaXNzaW9uRGVuaWVkRm9yT3RoZXJzXCIpO1xuXG4gICAgICAgICAgICAgICAgYXdhaXQgYXBwLmF1dGgoKS5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChGSVJFQkFTRV9VU0VSMiwgRklSRUJBU0VfUEFTUzIpO1xuXG4gICAgICAgICAgICAgICAgYXdhaXQgdmVyaWZ5RmFpbGVkKGFzeW5jICgpID0+IGF3YWl0IEdyb3Vwcy5nZXQoZ3JvdXBJRCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhd2FpdCB2YWxpZGF0ZVBlcm1pc3Npb25EZW5pZWRGb3JPdGhlcnMoZ3JvdXBJRCk7XG5cbiAgICAgICAgICAgIGFzeW5jIGZ1bmN0aW9uIHZhbGlkYXRlUGVybWlzc2lvbnNGb3JEb2NNZXRhKGdyb3VwSUQ6IEdyb3VwSURTdHIpIHtcblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidmFsaWRhdGVQZXJtaXNzaW9uc0ZvckRvY01ldGFcIik7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBhdXRoID0gYXBwLmF1dGgoKTtcbiAgICAgICAgICAgICAgICBhd2FpdCBhdXRoLnNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKEZJUkVCQVNFX1VTRVIxLCBGSVJFQkFTRV9QQVNTMSk7XG4gICAgICAgICAgICAgICAgY29uc3QgdXNlciA9IGF1dGguY3VycmVudFVzZXIhO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZmlyZWJhc2VEYXRhc3RvcmUgPSBuZXcgRmlyZWJhc2VEYXRhc3RvcmUoKTtcblxuICAgICAgICAgICAgICAgIHRyeSB7XG5cbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgZmlyZWJhc2VEYXRhc3RvcmUuaW5pdCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGdyb3VwRG9jcyA9IGF3YWl0IEdyb3VwRG9jcy5saXN0KGdyb3VwSUQpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBBdHRlbXB0aW5nIHRvIHJlYWQgZG9jdW1lbnRzIHRvIHZhbGlkYXRlIHBlcm1pc3Npb25zOiB1aWQ6ICR7dXNlci51aWR9Li4uYCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpcmVzdG9yZSA9IGFwcC5maXJlc3RvcmUoKTtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGdyb3VwRG9jIG9mIGdyb3VwRG9jcykge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgVmFsaWRhdGluZyBkb2NJRDogJHtncm91cERvYy5kb2NJRH1gKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZWFkaW5nIGl0IGRpcmVjdGx5IGZyb20gdGhlIGZpcmViYXNlIEFQSS4uLlwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVmID0gZmlyZXN0b3JlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvbGxlY3Rpb24oRGF0YXN0b3JlQ29sbGVjdGlvbi5ET0NfTUVUQSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZG9jKGdyb3VwRG9jLmRvY0lEKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgcmVmLmdldCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlYWRpbmcgaXQgZGlyZWN0bHkgZnJvbSB0aGUgZmlyZWJhc2UgQVBJLi4uZG9uZVwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgZmlyZWJhc2VEYXRhc3RvcmUuZ2V0RG9jTWV0YURpcmVjdGx5KGdyb3VwRG9jLmRvY0lEKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgZmlyZWJhc2VEYXRhc3RvcmUuc3RvcCgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhd2FpdCB2YWxpZGF0ZVBlcm1pc3Npb25zRm9yRG9jTWV0YShncm91cElEKTtcblxuICAgICAgICAgICAgYXN5bmMgZnVuY3Rpb24gdmFsaWRhdGVHZXRGaWxlKGdyb3VwSUQ6IEdyb3VwRG9jSURTdHIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInZhbGlkYXRlR2V0RmlsZVwiKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGF1dGggPSBhcHAuYXV0aCgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHVzZXIgPSBhdXRoLmN1cnJlbnRVc2VyITtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGlkVG9rZW4gPSBhd2FpdCB1c2VyLmdldElkVG9rZW4oKTtcblxuICAgICAgICAgICAgICAgIC8vIHZlcmlmeSB0aGF0IEkgY2FuIGFjdHVhbGx5IGZldGNoIHRoZSBkYXRhIGFzc29jaWF0ZWQgd2l0aCB0aGVcbiAgICAgICAgICAgICAgICAvLyBmaWxlLi4uXG5cbiAgICAgICAgICAgICAgICBjb25zdCBncm91cERvY3MgPSBhd2FpdCBHcm91cERvY3MubGlzdChncm91cElEKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGZpcmViYXNlRGF0YXN0b3JlID0gbmV3IEZpcmViYXNlRGF0YXN0b3JlKCk7XG5cbiAgICAgICAgICAgICAgICB0cnkge1xuXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IGZpcmViYXNlRGF0YXN0b3JlLmluaXQoKTtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGdyb3VwRG9jIG9mIGdyb3VwRG9jcykge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlZhbGlkYXRpbmcgd2UgY2FuIGZldGNoIGRvYzogXCIsIGdyb3VwRG9jKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZpcmViYXNlRGF0YXN0b3JlLmdldERvY01ldGFEaXJlY3RseShncm91cERvYy5kb2NJRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkb2NNZXRhID0gRG9jTWV0YXMuZGVzZXJpYWxpemUoZGF0YSEsIGdyb3VwRG9jLmZpbmdlcnByaW50KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYmFja2VuZEZpbGVSZWZzID0gQmFja2VuZEZpbGVSZWZzLnRvQmFja2VuZEZpbGVSZWZzKEVpdGhlci5vZkxlZnQoZG9jTWV0YSkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NlcnQuZXF1YWwoYmFja2VuZEZpbGVSZWZzLmxlbmd0aCwgMSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYmFja2VuZEZpbGVSZWYgb2YgYmFja2VuZEZpbGVSZWZzKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlZhbGlkYXRpbmcgd2UgY2FuIGZldGNoIGJhY2tlbmQgZmlsZSByZWY6IFwiLCBiYWNrZW5kRmlsZVJlZik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBGaXJlYmFzZURhdGFzdG9yZXMuY29tcHV0ZURhdGFzdG9yZUdldEZpbGVVUkwoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2NJRDogZ3JvdXBEb2MuZG9jSUQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkVG9rZW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tlbmQ6IGJhY2tlbmRGaWxlUmVmLmJhY2tlbmQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVSZWY6IGJhY2tlbmRGaWxlUmVmLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgYXNzZXJ0RmV0Y2godXJsLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogMjAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnY29ycycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vcGRmJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnl0ZUxlbmd0aDogMTE3Njg3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCBmaXJlYmFzZURhdGFzdG9yZS5zdG9wKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGF3YWl0IHZhbGlkYXRlR2V0RmlsZShncm91cElEKTtcblxuICAgICAgICB9KTtcblxuICAgICAgICBpdChcImdyb3VwIHByb3Zpc2lvbiBvZiBwcml2YXRlIGdyb3VwIGFuZCB2ZXJpZnkgZ3JvdXAgbWVtYmVycyBpbmNsdWRlcyB0aGUgZ3JvdXAgY3JlYXRvclwiLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgY29uc3QgbW9ja0RvYyA9IGF3YWl0IHByb3Zpc2lvbkFjY291bnREYXRhKCk7XG4gICAgICAgICAgICBjb25zdCB7Z3JvdXBJRH0gPSBhd2FpdCBkb0dyb3VwUHJvdmlzaW9uKG1vY2tEb2MpO1xuXG4gICAgICAgICAgICBhc3luYyBmdW5jdGlvbiB2YWxpZGF0ZUdyb3VwTWVtYmVycygpIHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHByb2ZpbGUgPSBhd2FpdCBQcm9maWxlcy5jdXJyZW50UHJvZmlsZSgpO1xuXG4gICAgICAgICAgICAgICAgYXNzZXJ0LmlzVHJ1ZShpc1ByZXNlbnQocHJvZmlsZSkpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZ3JvdXBNZW1iZXJzID0gYXdhaXQgR3JvdXBNZW1iZXJzLmxpc3QoZ3JvdXBJRCk7XG5cbiAgICAgICAgICAgICAgICBhc3NlcnQuaXNUcnVlKGlzUHJlc2VudChncm91cE1lbWJlcnMpKTtcbiAgICAgICAgICAgICAgICBhc3NlcnQuZXF1YWwoZ3JvdXBNZW1iZXJzLmxlbmd0aCwgMSk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBncm91cE1lbWJlciA9IGdyb3VwTWVtYmVyc1swXTtcblxuICAgICAgICAgICAgICAgIGFzc2VydC5lcXVhbChncm91cE1lbWJlci5ncm91cElELCBncm91cElEKTtcbiAgICAgICAgICAgICAgICBhc3NlcnQuZXF1YWwoZ3JvdXBNZW1iZXIucHJvZmlsZUlELCBwcm9maWxlIS5pZCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBncm91cCA9IGF3YWl0IEdyb3Vwcy5nZXQoZ3JvdXBJRCk7XG4gICAgICAgICAgICAgICAgYXNzZXJ0LmVxdWFsKGdyb3VwIS5uck1lbWJlcnMsIDEpO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGF3YWl0IHZhbGlkYXRlR3JvdXBNZW1iZXJzKCk7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoXCJqb2luIGFuZCB0aGVuIGxlYXZlIGdyb3VwXCIsIGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICBjb25zdCBtb2NrRG9jID0gYXdhaXQgcHJvdmlzaW9uQWNjb3VudERhdGEoKTtcbiAgICAgICAgICAgIGNvbnN0IHtncm91cElEfSA9IGF3YWl0IGRvR3JvdXBQcm92aXNpb24obW9ja0RvYyk7XG4gICAgICAgICAgICBhd2FpdCBkb0dyb3VwSm9pbkZvclVzZXIxKGdyb3VwSUQpO1xuICAgICAgICAgICAgYXdhaXQgd2FpdEZvckdyb3VwRGVsYXkoKTtcblxuICAgICAgICAgICAgYXN5bmMgZnVuY3Rpb24gYXNzZXJ0R3JvdXBCZWZvcmUoKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBncm91cCA9IGF3YWl0IGdldEdyb3VwQ2Fub25pY2FsaXplZChncm91cElEKTtcblxuICAgICAgICAgICAgICAgIGFzc2VydEpTT04oZ3JvdXAsIHtcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogJ3ByaXZhdGUnLFxuICAgICAgICAgICAgICAgICAgICB0YWdzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgbnJNZW1iZXJzOiAyXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYXdhaXQgYXNzZXJ0R3JvdXBCZWZvcmUoKTtcblxuICAgICAgICAgICAgYXdhaXQgR3JvdXBMZWF2ZXMuZXhlYyh7Z3JvdXBJRH0pO1xuXG4gICAgICAgICAgICBhc3luYyBmdW5jdGlvbiBhc3NlcnRHcm91cEFmdGVyKCkge1xuXG4gICAgICAgICAgICAgICAgY29uc3QgYXBwID0gRmlyZWJhc2UuaW5pdCgpO1xuICAgICAgICAgICAgICAgIGF3YWl0IGFwcC5hdXRoKCkuc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoRklSRUJBU0VfVVNFUiwgRklSRUJBU0VfUEFTUyk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBncm91cCA9IGF3YWl0IGdldEdyb3VwQ2Fub25pY2FsaXplZChncm91cElEKTtcblxuICAgICAgICAgICAgICAgIGFzc2VydEpTT04oZ3JvdXAsIHtcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogJ3ByaXZhdGUnLFxuICAgICAgICAgICAgICAgICAgICB0YWdzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgbnJNZW1iZXJzOiAxXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYXdhaXQgYXNzZXJ0R3JvdXBBZnRlcigpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KFwiZG91YmxlIHByb3Zpc2lvbiBvZiBncm91cCB3aXRoIGtleVwiLCBhc3luYyBmdW5jdGlvbigpIHtcblxuXG4gICAgICAgICAgICBjb25zdCBtb2NrRG9jID0gYXdhaXQgcHJvdmlzaW9uQWNjb3VudERhdGEoKTtcbiAgICAgICAgICAgIGNvbnN0IGVtYWlsID0gJ2dldHBvbGFyaXplZC50ZXN0K3Rlc3QxQGdtYWlsLmNvbSc7XG4gICAgICAgICAgICBjb25zdCBmaW5nZXJwcmludCA9IG1vY2tEb2MuZG9jTWV0YS5kb2NJbmZvLmZpbmdlcnByaW50O1xuXG4gICAgICAgICAgICBjb25zdCBncm91cERvY1JlZkJlZm9yZSA9IGF3YWl0IGRvR3JvdXBQcm92aXNpb24obW9ja0RvYywgZW1haWwsIGZpbmdlcnByaW50KTtcbiAgICAgICAgICAgIGNvbnN0IGdyb3VwRG9jUmVmQWZ0ZXIgPSBhd2FpdCBkb0dyb3VwUHJvdmlzaW9uKG1vY2tEb2MsIGVtYWlsLCBmaW5nZXJwcmludCk7XG5cbiAgICAgICAgICAgIGFzc2VydC5lcXVhbChncm91cERvY1JlZkJlZm9yZS5ncm91cElELCBncm91cERvY1JlZkFmdGVyLmdyb3VwSUQpO1xuXG4gICAgICAgICAgICBjb25zdCBjb250YWN0cyA9IGF3YWl0IENvbnRhY3RzLmxpc3QoKTtcblxuICAgICAgICAgICAgYXNzZXJ0LmVxdWFsKGNvbnRhY3RzLmxlbmd0aCwgMSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNvbnRhY3QgPSBjYW5vbmljYWxpemUoY29udGFjdHNbMF0sIG9iaiA9PiB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIG9iai5pZDtcbiAgICAgICAgICAgICAgICBkZWxldGUgb2JqLmNyZWF0ZWQ7XG4gICAgICAgICAgICAgICAgb2JqLnByb2ZpbGVJRCA9ICd4eHgnO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGFzc2VydEpTT04oY29udGFjdCwge1xuICAgICAgICAgICAgICAgIFwiZW1haWxcIjogXCJnZXRwb2xhcml6ZWQudGVzdCt0ZXN0MUBnbWFpbC5jb21cIixcbiAgICAgICAgICAgICAgICBcInByb2ZpbGVJRFwiOiBcInh4eFwiLFxuICAgICAgICAgICAgICAgIFwicmVjaXByb2NhbFwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcInJlbFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwic2hhcmVkXCJcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwidWlkXCI6IFwiR2RUUnlXV0lqc1B0QWNndUZmSDhGT2lHcnlmMVwiXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgYXN5bmMgZnVuY3Rpb24gZG9UZXN0R3JvdXBNZW1iZXJJbnZpdGF0aW9ucygpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhcHAgPSBGaXJlYmFzZS5pbml0KCk7XG4gICAgICAgICAgICAgICAgY29uc3QgYXV0aCA9IGFwcC5hdXRoKCk7XG4gICAgICAgICAgICAgICAgYXdhaXQgYXV0aC5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChGSVJFQkFTRV9VU0VSMSwgRklSRUJBU0VfUEFTUzEpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgaW52aXRhdGlvbnMgPSBhd2FpdCBHcm91cE1lbWJlckludml0YXRpb25zLmxpc3QoKTtcblxuICAgICAgICAgICAgICAgIGFzc2VydC5lcXVhbChpbnZpdGF0aW9ucy5sZW5ndGgsIDEpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgaW52aXRhdGlvbiA9IGNhbm9uaWNhbGl6ZShpbnZpdGF0aW9uc1swXSwgb2JqID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG9iai5pZDtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG9iai5jcmVhdGVkO1xuICAgICAgICAgICAgICAgICAgICBvYmouZnJvbS5wcm9maWxlSUQgPSAneHh4JztcbiAgICAgICAgICAgICAgICAgICAgb2JqLmdyb3VwSUQgPSAneHh4JztcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGFzc2VydEpTT04oaW52aXRhdGlvbiwge1xuICAgICAgICAgICAgICAgICAgICBcImRvY3NcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZG9jSURcIjogXCIxMjFYV0c1blBNNDkyQTFxNnRGczFmTHk1UzZuZEpaRlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmluZ2VycHJpbnRcIjogXCIweDAwMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibnJQYWdlc1wiOiA0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGFnc1wiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRpdGxlXCI6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgXCJmcm9tXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZW1haWxcIjogXCJnZXRwb2xhcml6ZWQudGVzdCt0ZXN0QGdtYWlsLmNvbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInByb2ZpbGVJRFwiOiBcInh4eFwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFwiZ3JvdXBJRFwiOiBcInh4eFwiLFxuICAgICAgICAgICAgICAgICAgICBcIm1lc3NhZ2VcIjogXCJQcml2YXRlIGludml0ZSB0byBteSBzcGVjaWFsIGdyb3VwXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidG9cIjogXCJnZXRwb2xhcml6ZWQudGVzdCt0ZXN0MUBnbWFpbC5jb21cIlxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGF3YWl0IGRvVGVzdEdyb3VwTWVtYmVySW52aXRhdGlvbnMoKTtcblxuICAgICAgICAgICAgLy8gYXdhaXQgZG9Hcm91cEpvaW5Gb3JVc2VyMShncm91cElEKTtcblxuICAgICAgICAgICAgLy8gVE9ETzogaGF2ZSBhIHNlY29uZCB1c2VyIGpvaW4gdGhpcyBncm91cCBhbmQgdGhlbiBlbnVtZXJhZ2VcbiAgICAgICAgICAgIC8vIHRoZSBtZXNzYWdlXG5cblxuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KFwiam9pbiBhbmQgdGhlbiBhZGQgbXkgb3duIGRvY3NcIiwgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgIGFzeW5jIGZ1bmN0aW9uIGRvVXNlcjAoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbW9ja0RvYyA9IGF3YWl0IHByb3Zpc2lvbkFjY291bnREYXRhKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZ3JvdXBJRCA9IGF3YWl0IGRvR3JvdXBQcm92aXNpb24obW9ja0RvYyk7XG4gICAgICAgICAgICAgICAgYXdhaXQgd2FpdEZvckdyb3VwRGVsYXkoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZ3JvdXBJRDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3Qge2dyb3VwSUR9ID0gYXdhaXQgZG9Vc2VyMCgpO1xuXG4gICAgICAgICAgICBhc3luYyBmdW5jdGlvbiBkb0dyb3VwSm9pbkZvclVzZXIxKGdyb3VwSUQ6IEdyb3VwSURTdHIpIHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGFwcCA9IEZpcmViYXNlLmluaXQoKTtcblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZG9Hcm91cEpvaW5cIik7XG5cbiAgICAgICAgICAgICAgICAvLyBub3cgc3dpdGNoIHRvIHRoZSB1c2VyIHRoYXQgd2FzIGludml0ZWQgYW5kIGpvaW4gdGhhdCBncm91cC5cblxuICAgICAgICAgICAgICAgIGF3YWl0IGFwcC5hdXRoKCkuc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoRklSRUJBU0VfVVNFUjEsIEZJUkVCQVNFX1BBU1MxKTtcblxuICAgICAgICAgICAgICAgIGF3YWl0IEdyb3VwSm9pbnMuZXhlYyh7Z3JvdXBJRH0pO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGF3YWl0IGRvR3JvdXBKb2luRm9yVXNlcjEoZ3JvdXBJRCk7XG5cbiAgICAgICAgICAgIGFzeW5jIGZ1bmN0aW9uIGRvR3JvdXBEb2NzQWRkKG1vY2tEb2M6IE1vY2tEb2MpIHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHtkb2NNZXRhfSA9IG1vY2tEb2M7XG4gICAgICAgICAgICAgICAgY29uc3QgZG9jSUQgPSBGaXJlYmFzZURhdGFzdG9yZXMuY29tcHV0ZURvY01ldGFJRChkb2NNZXRhLmRvY0luZm8uZmluZ2VycHJpbnQpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZG9jUmVmID0gRG9jUmVmcy5mcm9tRG9jTWV0YShkb2NJRCwgZG9jTWV0YSk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCByZXF1ZXN0OiBHcm91cERvY0FkZFJlcXVlc3QgPSB7XG4gICAgICAgICAgICAgICAgICAgIGdyb3VwSUQsXG4gICAgICAgICAgICAgICAgICAgIGRvY3M6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY1JlZlxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBhd2FpdCBHcm91cERvY3NBZGQuZXhlYyhyZXF1ZXN0KTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBtb2NrRG9jID0gYXdhaXQgcHJvdmlzaW9uQWNjb3VudERhdGEoe3VzZXI6IEZJUkVCQVNFX1VTRVIxLCBwYXNzOiBGSVJFQkFTRV9QQVNTMX0pO1xuICAgICAgICAgICAgYXdhaXQgZG9Hcm91cERvY3NBZGQobW9ja0RvYyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGdyb3VwRG9jcyA9IGF3YWl0IEdyb3VwRG9jcy5saXN0KGdyb3VwSUQpO1xuICAgICAgICAgICAgYXNzZXJ0LmVxdWFsKGdyb3VwRG9jcy5sZW5ndGgsIDIpO1xuXG4gICAgICAgICAgICAvLyBUT0RPOiBub3cgbWFrZSBzdXJlIEJPVEggdXNlcnMgY2FuIHJlYWQgdGhlc2UgZG9jcyBhbmRcbiAgICAgICAgICAgIC8vIGRvd25sb2FkL2ZldGNoIHRoZSBQREZzXG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoXCJkZWxldGUgdXNlcnMgZnJvbSBhIGdyb3VwIHdpdGgganVzdCB0aGUgaW52aXRhdGlvblwiLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgY29uc3QgYWxpY2UgPSAnYWxpY2VAZXhhbXBsZS5jb20nO1xuXG4gICAgICAgICAgICBjb25zdCBtb2NrRG9jID0gYXdhaXQgcHJvdmlzaW9uQWNjb3VudERhdGEoKTtcbiAgICAgICAgICAgIGNvbnN0IGZpbmdlcnByaW50ID0gbW9ja0RvYy5kb2NNZXRhLmRvY0luZm8uZmluZ2VycHJpbnQ7XG4gICAgICAgICAgICBjb25zdCB7Z3JvdXBJRH0gPSBhd2FpdCBkb0dyb3VwUHJvdmlzaW9uKG1vY2tEb2MsIGFsaWNlLCBmaW5nZXJwcmludCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHByb2ZpbGUgPSBhd2FpdCBQcm9maWxlcy5jdXJyZW50UHJvZmlsZSgpO1xuICAgICAgICAgICAgYXNzZXJ0LmlzRGVmaW5lZChwcm9maWxlKTtcblxuICAgICAgICAgICAgY29uc3QgaW52aXRhdGlvbkJlZm9yZSA9IGF3YWl0IEdyb3VwTWVtYmVySW52aXRhdGlvbnMubGlzdEJ5R3JvdXBJREFuZFByb2ZpbGVJRChncm91cElELCBwcm9maWxlIS5pZCk7XG5cbiAgICAgICAgICAgIGFzc2VydC5lcXVhbChpbnZpdGF0aW9uQmVmb3JlLmxlbmd0aCwgMSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHVzZXJSZWYgPSBVc2VyUmVmcy5mcm9tRW1haWwoYWxpY2UpO1xuICAgICAgICAgICAgYXdhaXQgR3JvdXBNZW1iZXJEZWxldGVzLmV4ZWMoe2dyb3VwSUQsIHVzZXJSZWZzOiBbdXNlclJlZl19KTtcblxuICAgICAgICAgICAgY29uc3QgaW52aXRhdGlvbkFmdGVyID0gYXdhaXQgR3JvdXBNZW1iZXJJbnZpdGF0aW9ucy5saXN0QnlHcm91cElEQW5kUHJvZmlsZUlEKGdyb3VwSUQsIHByb2ZpbGUhLmlkKTtcblxuICAgICAgICAgICAgYXNzZXJ0LmVxdWFsKGludml0YXRpb25BZnRlci5sZW5ndGgsIDApO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KFwiZGVsZXRlIHVzZXJzIGZyb20gYSBncm91cCBhZnRlciB0aGV5IGhhdmUgam9pbmVkXCIsIGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICBjb25zdCBtb2NrRG9jID0gYXdhaXQgcHJvdmlzaW9uQWNjb3VudERhdGEoKTtcbiAgICAgICAgICAgIGNvbnN0IGZpbmdlcnByaW50ID0gbW9ja0RvYy5kb2NNZXRhLmRvY0luZm8uZmluZ2VycHJpbnQ7XG4gICAgICAgICAgICBjb25zdCB7Z3JvdXBJRH0gPSBhd2FpdCBkb0dyb3VwUHJvdmlzaW9uKG1vY2tEb2MsIHVuZGVmaW5lZCwgZmluZ2VycHJpbnQpO1xuICAgICAgICAgICAgYXdhaXQgZG9Hcm91cEpvaW5Gb3JVc2VyMShncm91cElEKTtcblxuICAgICAgICAgICAgLy8gbm93IHN3aXRjaCBiYWNrIHRvIHRoZSBtYWluIHVzZXIgYW5kIGdldCB0aGUgbWVtYmVycyBvZiB0aGlzIGdyb3VwXG4gICAgICAgICAgICAvLyB0aGVuIHRyeSB0byBkZWxldGUgdmlhIHRoZSBwcm9maWxlSURcblxuICAgICAgICAgICAgY29uc3QgYXBwID0gRmlyZWJhc2UuaW5pdCgpO1xuICAgICAgICAgICAgYXdhaXQgYXBwLmF1dGgoKS5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChGSVJFQkFTRV9VU0VSLCBGSVJFQkFTRV9QQVNTKTtcblxuICAgICAgICAgICAgY29uc3QgZ3JvdXBNZW1iZXJzID0gYXdhaXQgR3JvdXBNZW1iZXJzLmxpc3QoZ3JvdXBJRCk7XG5cbiAgICAgICAgICAgIGFzc2VydC5lcXVhbChncm91cE1lbWJlcnMubGVuZ3RoLCAyKTtcblxuICAgICAgICAgICAgY29uc3QgZ3JvdXBNZW1iZXIgPSBncm91cE1lbWJlcnNbMF07XG5cbiAgICAgICAgICAgIGNvbnN0IHVzZXJSZWYgPSBVc2VyUmVmcy5mcm9tUHJvZmlsZUlEKGdyb3VwTWVtYmVyLnByb2ZpbGVJRCk7XG4gICAgICAgICAgICBhd2FpdCBHcm91cE1lbWJlckRlbGV0ZXMuZXhlYyh7Z3JvdXBJRCwgdXNlclJlZnM6IFt1c2VyUmVmXX0pO1xuXG4gICAgICAgICAgICBjb25zdCBncm91cE1lbWJlcnNBZnRlciA9IGF3YWl0IEdyb3VwTWVtYmVycy5saXN0KGdyb3VwSUQpO1xuXG4gICAgICAgICAgICBhc3NlcnQuZXF1YWwoZ3JvdXBNZW1iZXJzQWZ0ZXIubGVuZ3RoLCAxKTtcblxuICAgICAgICB9KTtcblxuICAgICAgICBpdChcInByb3Zpc2lvbiBhIHVzZXIgZm9yIGEgZ3JvdXAgd2hvIGlzbid0IHlldCB1c2luZyBwb2xhclwiLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgY29uc3QgbW9ja0RvYyA9IGF3YWl0IHByb3Zpc2lvbkFjY291bnREYXRhKCk7XG4gICAgICAgICAgICBhd2FpdCBkb0dyb3VwUHJvdmlzaW9uKG1vY2tEb2MsICdhbGljZUBleGFtcGxlLmNvbScpO1xuXG4gICAgICAgICAgICAvLyBub3cgbWFrZSBzdXJlIHRoZSBjb250YWN0IGFyZSBjb3JyZWN0Li4uXG5cbiAgICAgICAgICAgIGNvbnN0IGNvbnRhY3RzID0gYXdhaXQgQ29udGFjdHMubGlzdCgpO1xuXG4gICAgICAgICAgICBhc3NlcnQuZXF1YWwoY29udGFjdHMubGVuZ3RoLCAxKTtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRhY3QgPSBjYW5vbmljYWxpemUoY29udGFjdHNbMF0sIG9iaiA9PiB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIG9iai5jcmVhdGVkO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBvYmouaWQ7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgYXNzZXJ0SlNPTihjb250YWN0LCB7XG4gICAgICAgICAgICAgICAgXCJlbWFpbFwiOiBcImFsaWNlQGV4YW1wbGUuY29tXCIsXG4gICAgICAgICAgICAgICAgXCJyZWNpcHJvY2FsXCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwicmVsXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJzaGFyZWRcIlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJ1aWRcIjogXCJHZFRSeVdXSWpzUHRBY2d1RmZIOEZPaUdyeWYxXCJcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KFwiam9pbiBncm91cCB0d2ljZSBhbmQgdmFsaWRhdGUgbWV0YWRhdGEgKHByaXZhdGUgZ3JvdXApXCIsIGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICBjb25zdCBtb2NrRG9jID0gYXdhaXQgcHJvdmlzaW9uQWNjb3VudERhdGEoKTtcbiAgICAgICAgICAgIGNvbnN0IHtncm91cElEfSA9IGF3YWl0IGRvR3JvdXBQcm92aXNpb24obW9ja0RvYyk7XG4gICAgICAgICAgICBhd2FpdCBkb0dyb3VwSm9pbkZvclVzZXIxKGdyb3VwSUQpO1xuXG4gICAgICAgICAgICAvLyBub3cgcnVuIHRoZSBzZWNvbmQgZ3JvdXAgam9pbiB0d2ljZS5cbiAgICAgICAgICAgIGF3YWl0IEdyb3VwSm9pbnMuZXhlYyh7IGdyb3VwSUQgfSk7XG5cbiAgICAgICAgICAgIGF3YWl0IHdhaXRGb3JHcm91cERlbGF5KCk7XG5cbiAgICAgICAgICAgIGFzeW5jIGZ1bmN0aW9uIGFzc2VydEdyb3VwQWZ0ZXIoKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBncm91cCA9IGF3YWl0IGdldEdyb3VwQ2Fub25pY2FsaXplZChncm91cElEKTtcblxuICAgICAgICAgICAgICAgIGFzc2VydEpTT04oZ3JvdXAsIHtcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogJ3ByaXZhdGUnLFxuICAgICAgICAgICAgICAgICAgICB0YWdzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgbnJNZW1iZXJzOiAyXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYXdhaXQgYXNzZXJ0R3JvdXBBZnRlcigpO1xuXG4gICAgICAgICAgICBjb25zdCBncm91cE1lbWJlckludml0YXRpb25zID0gIGF3YWl0IEdyb3VwTWVtYmVySW52aXRhdGlvbnMubGlzdCgpO1xuXG4gICAgICAgICAgICBhc3NlcnQuZXF1YWwoZ3JvdXBNZW1iZXJJbnZpdGF0aW9ucy5sZW5ndGgsIDApO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KFwiSW1wb3J0IHRoZSBkb2MgZnJvbSBhIHByaXZhdGUgZ3JvdXAgaW50byBteSBkYXRhc3RvcmVcIiwgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IG1vY2tEb2MgPSBhd2FpdCBwcm92aXNpb25BY2NvdW50RGF0YSgpO1xuICAgICAgICAgICAgY29uc3Qge2dyb3VwSUQsIGRvY1JlZn0gPSBhd2FpdCBkb0dyb3VwUHJvdmlzaW9uKG1vY2tEb2MpO1xuICAgICAgICAgICAgYXdhaXQgZG9Hcm91cEpvaW5Gb3JVc2VyMShncm91cElEKTtcblxuICAgICAgICAgICAgYXdhaXQgd2FpdEZvckdyb3VwRGVsYXkoKTtcblxuICAgICAgICAgICAgYXN5bmMgZnVuY3Rpb24gd2l0aFBlcnNpc3RlbmNlTGF5ZXI8VD4oZGVsZWdhdGU6IChwZXJzaXN0ZW5jZUxheWVyOiBQZXJzaXN0ZW5jZUxheWVyKSA9PiBQcm9taXNlPFQ+KSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhc3RvcmUgPSBuZXcgRmlyZWJhc2VEYXRhc3RvcmUoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwZXJzaXN0ZW5jZUxheWVyID0gbmV3IERlZmF1bHRQZXJzaXN0ZW5jZUxheWVyKGRhdGFzdG9yZSk7XG5cbiAgICAgICAgICAgICAgICB0cnkge1xuXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHBlcnNpc3RlbmNlTGF5ZXIuaW5pdCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCBkZWxlZ2F0ZShwZXJzaXN0ZW5jZUxheWVyKTtcblxuICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHBlcnNpc3RlbmNlTGF5ZXIuc3RvcCgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBkb2NNZXRhRmlsZVJlZiA9IGF3YWl0IHdpdGhQZXJzaXN0ZW5jZUxheWVyKGFzeW5jIChwZXJzaXN0ZW5jZUxheWVyOiBQZXJzaXN0ZW5jZUxheWVyKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCB7ZmluZ2VycHJpbnR9ID0gZG9jUmVmO1xuXG4gICAgICAgICAgICAgICAgYXdhaXQgR3JvdXBEYXRhc3RvcmVzLmltcG9ydEZyb21Hcm91cChwZXJzaXN0ZW5jZUxheWVyLCB7Z3JvdXBJRCwgZG9jUmVmfSk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBkb2NNZXRhID0gYXdhaXQgcGVyc2lzdGVuY2VMYXllci5nZXREb2NNZXRhKGZpbmdlcnByaW50KTtcblxuICAgICAgICAgICAgICAgIGFzc2VydC5pc0RlZmluZWQoZG9jTWV0YSk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBiYWNrZW5kRmlsZVJlZiA9IEJhY2tlbmRGaWxlUmVmcy50b0JhY2tlbmRGaWxlUmVmKEVpdGhlci5vZkxlZnQoZG9jTWV0YSEpKTtcbiAgICAgICAgICAgICAgICBhc3NlcnQuaXNEZWZpbmVkKGJhY2tlbmRGaWxlUmVmKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGRvY0ZpbGVNZXRhID0gYXdhaXQgcGVyc2lzdGVuY2VMYXllci5nZXRGaWxlKGJhY2tlbmRGaWxlUmVmIS5iYWNrZW5kLCBiYWNrZW5kRmlsZVJlZiEpO1xuXG4gICAgICAgICAgICAgICAgYXdhaXQgYXNzZXJ0RmV0Y2goZG9jRmlsZU1ldGEudXJsLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogMjAwLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnY29ycycsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vcGRmJyxcbiAgICAgICAgICAgICAgICAgICAgYnl0ZUxlbmd0aDogMTE3Njg3XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBkb2NNZXRhRmlsZVJlZjogRG9jTWV0YUZpbGVSZWYgPSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbmdlcnByaW50LFxuICAgICAgICAgICAgICAgICAgICBkb2NGaWxlOiBiYWNrZW5kRmlsZVJlZiEsXG4gICAgICAgICAgICAgICAgICAgIGRvY0luZm86IGRvY01ldGEhLmRvY0luZm9cbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRvY01ldGFGaWxlUmVmO1xuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgYXN5bmMgZnVuY3Rpb24gdmVyaWZ5VXNlckFjY2Vzc1RvR3JvdXBEb2NzKGdyb3VwSUQ6IEdyb3VwSURTdHIsIHVzZXJQYXNzOiBVc2VyUGFzcykge1xuXG4gICAgICAgICAgICAgICAgY29uc3QgYXBwID0gRmlyZWJhc2UuaW5pdCgpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgYXV0aCA9IGFwcC5hdXRoKCk7XG4gICAgICAgICAgICAgICAgYXdhaXQgYXV0aC5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCh1c2VyUGFzcy51c2VyLCB1c2VyUGFzcy5wYXNzKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGdyb3VwRG9jcyA9IGF3YWl0IEdyb3VwRG9jcy5saXN0KGdyb3VwSUQpO1xuXG4gICAgICAgICAgICAgICAgYXN5bmMgZnVuY3Rpb24gZ2V0RG9jTWV0YShkb2NJRDogRG9jSURTdHIpOiBQcm9taXNlPFJlY29yZEhvbGRlcjxEb2NNZXRhSG9sZGVyPiB8IHVuZGVmaW5lZD4ge1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpcmVzdG9yZSA9IGFwcC5maXJlc3RvcmUoKTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWYgPSBmaXJlc3RvcmVcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jb2xsZWN0aW9uKERhdGFzdG9yZUNvbGxlY3Rpb24uRE9DX01FVEEpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZG9jKGRvY0lEKTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzbmFwc2hvdCA9IGF3YWl0IHJlZi5nZXQoKTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFJlY29yZEhvbGRlcjxEb2NNZXRhSG9sZGVyPj4gc25hcHNob3QuZGF0YSgpO1xuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBncm91cERvYyBvZiBncm91cERvY3MpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZG9jTWV0YSA9IGF3YWl0IGdldERvY01ldGEoZ3JvdXBEb2MuZG9jSUQpO1xuICAgICAgICAgICAgICAgICAgICBhc3NlcnQuaXNEZWZpbmVkKGRvY01ldGEsIFwiQ291bGQgbm90IGZpbmQgZG9jIGZvcjogXCIgKyBncm91cERvYy5kb2NJRCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGF3YWl0IHZlcmlmeVVzZXJBY2Nlc3NUb0dyb3VwRG9jcyhncm91cElELCB7dXNlcjogRklSRUJBU0VfVVNFUiwgcGFzczogRklSRUJBU0VfUEFTU30pO1xuICAgICAgICAgICAgYXdhaXQgdmVyaWZ5VXNlckFjY2Vzc1RvR3JvdXBEb2NzKGdyb3VwSUQsIHt1c2VyOiBGSVJFQkFTRV9VU0VSMSwgcGFzczogRklSRUJBU0VfUEFTUzF9KTtcblxuICAgICAgICAgICAgYXdhaXQgd2l0aFBlcnNpc3RlbmNlTGF5ZXIoYXN5bmMgKHBlcnNpc3RlbmNlTGF5ZXI6IFBlcnNpc3RlbmNlTGF5ZXIpID0+IHtcbiAgICAgICAgICAgICAgICBhd2FpdCBwZXJzaXN0ZW5jZUxheWVyLmRlbGV0ZShkb2NNZXRhRmlsZVJlZik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9KTtcblxuICAgICAgICBpdChcIlB1YmxpYyBncm91cCBzZXR0aW5nc1wiLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgY29uc3QgbW9ja0RvYyA9IGF3YWl0IHByb3Zpc2lvbkFjY291bnREYXRhKCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGdyb3VwSUQgPSBhd2FpdCBkb0dyb3VwUHJvdmlzaW9uUHVibGljKG1vY2tEb2MpO1xuXG4gICAgICAgICAgICBhc3luYyBmdW5jdGlvbiBhc3NlcnRHcm91cCgpIHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGdyb3VwID0gYXdhaXQgZ2V0R3JvdXBDYW5vbmljYWxpemVkKGdyb3VwSUQpO1xuXG4gICAgICAgICAgICAgICAgYXNzZXJ0SlNPTihncm91cCwge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnbGludXgnLFxuICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiAncHVibGljJyxcbiAgICAgICAgICAgICAgICAgICAgbnJNZW1iZXJzOiAxLFxuICAgICAgICAgICAgICAgICAgICB0YWdzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAnbGludXgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3VidW50dScsXG4gICAgICAgICAgICAgICAgICAgICAgICAnZGViaWFuJ1xuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gYXNzZXJ0R3JvdXBKU09OKGdyb3VwOiBHcm91cCkge1xuXG4gICAgICAgICAgICAgICAgYXNzZXJ0LmlzRGVmaW5lZChncm91cC5jcmVhdGVkKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGdyb3VwQ2Fub25pY2FsaXplZCA9IGNhbm9uaWNhbGl6ZShncm91cCwgb2JqID0+IHtcbiAgICAgICAgICAgICAgICAgICAgb2JqLmNyZWF0ZWQgPSAneHh4JztcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGFzc2VydEpTT04oZ3JvdXBDYW5vbmljYWxpemVkLCB7XG4gICAgICAgICAgICAgICAgICAgIFwiY3JlYXRlZFwiOiBcInh4eFwiLFxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwiMWlBU1pFek5QUmU1eEtyZU50eTJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwibGludXhcIixcbiAgICAgICAgICAgICAgICAgICAgXCJuck1lbWJlcnNcIjogMSxcbiAgICAgICAgICAgICAgICAgICAgXCJ0YWdzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGludXhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidWJ1bnR1XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRlYmlhblwiXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFwidmlzaWJpbGl0eVwiOiBcInB1YmxpY1wiXG4gICAgICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBhd2FpdCBhc3NlcnRHcm91cCgpO1xuXG4gICAgICAgICAgICBhc3luYyBmdW5jdGlvbiBhc3NlcnRHcm91cFNlYXJjaCgpIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBoaXRzID0gYXdhaXQgR3JvdXBzLmV4ZWN1dGVTZWFyY2hXaXRoVGFncyhbJ2xpbnV4J10pO1xuXG4gICAgICAgICAgICAgICAgYXNzZXJ0LmVxdWFsKGhpdHMubGVuZ3RoLCAxKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGZpcnN0ID0gaGl0c1swXTtcbiAgICAgICAgICAgICAgICBhc3NlcnRHcm91cEpTT04oZmlyc3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBhd2FpdCBhc3NlcnRHcm91cFNlYXJjaCgpO1xuXG4gICAgICAgICAgICBhc3luYyBmdW5jdGlvbiBhc3NlcnRHZXRCeU5hbWUoKSB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3QgZ3JvdXAgPSBhd2FpdCBHcm91cHMuZ2V0QnlOYW1lKCdsaW51eCcpO1xuICAgICAgICAgICAgICAgIGFzc2VydC5pc0RlZmluZWQoZ3JvdXApO1xuICAgICAgICAgICAgICAgIGFzc2VydEdyb3VwSlNPTihncm91cCEpO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGF3YWl0IGFzc2VydEdldEJ5TmFtZSgpO1xuICAgICAgICAgICAgXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KFwiUHVibGljIGRvY3MgaW4gcHVibGljIGdyb3Vwc1wiLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgY29uc3QgbW9ja0RvYyA9IGF3YWl0IHByb3Zpc2lvbkFjY291bnREYXRhKCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGdyb3VwSUQgPSBhd2FpdCBkb0dyb3VwUHJvdmlzaW9uUHVibGljKG1vY2tEb2MpO1xuXG4gICAgICAgICAgICBhc3luYyBmdW5jdGlvbiBkb0dyb3VwSm9pbkZvclVzZXIxKGdyb3VwSUQ6IEdyb3VwSURTdHIpIHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGFwcCA9IEZpcmViYXNlLmluaXQoKTtcblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZG9Hcm91cEpvaW5cIik7XG5cbiAgICAgICAgICAgICAgICAvLyBub3cgc3dpdGNoIHRvIHRoZSB1c2VyIHRoYXQgd2FzIGludml0ZWQgYW5kIGpvaW4gdGhhdCBncm91cC5cblxuICAgICAgICAgICAgICAgIGF3YWl0IGFwcC5hdXRoKCkuc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoRklSRUJBU0VfVVNFUjEsIEZJUkVCQVNFX1BBU1MxKTtcblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTGlzdGluZyBncm91cCBpbnZpdGF0aW9ucy4uLlwiKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGdyb3VwTWVtYmVySW52aXRhdGlvbnMgPSBhd2FpdCBHcm91cE1lbWJlckludml0YXRpb25zLmxpc3QoKTtcblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTGlzdGluZyBncm91cCBpbnZpdGF0aW9ucy4uLmRvbmVcIik7XG5cbiAgICAgICAgICAgICAgICAvLyBpdCdzIGltcG9ydGFudCB0aGF0IHRoZSB1c2VyIGNhbiBzZWUgdGhlaXIgb3duIGludml0YXRpb25zLlxuICAgICAgICAgICAgICAgIGFzc2VydC5lcXVhbChncm91cE1lbWJlckludml0YXRpb25zLmZpbHRlcihjdXJyZW50ID0+IGN1cnJlbnQuZ3JvdXBJRCA9PT0gZ3JvdXBJRCkubGVuZ3RoLCAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImdyb3VwSUQgbm90IGluIHRoZSBsaXN0IG9mIGdyb3VwczogXCIgKyBncm91cElEKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHByb2ZpbGVVcGRhdGVSZXF1ZXN0OiBQcm9maWxlVXBkYXRlUmVxdWVzdCA9IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJCb2IgSm9obnNvblwiLFxuICAgICAgICAgICAgICAgICAgICBiaW86IFwiQW4gZXhhbXBsZSB1c2VyIGZyb20gTWFyc1wiLFxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbjogXCJDYXBpdG9sIENpdHksIE1hcnNcIixcbiAgICAgICAgICAgICAgICAgICAgbGlua3M6IFsnaHR0cHM6Ly93d3cubWFycy5vcmcnXVxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVwZGF0aW5nIHByb2ZpbGUuLi5cIik7XG4gICAgICAgICAgICAgICAgYXdhaXQgUHJvZmlsZVVwZGF0ZXMuZXhlYyhwcm9maWxlVXBkYXRlUmVxdWVzdCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJVcGRhdGluZyBwcm9maWxlLi4uZG9uZVwiKTtcblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSm9pbmluZyBncm91cC4uLlwiKTtcbiAgICAgICAgICAgICAgICBhd2FpdCBHcm91cEpvaW5zLmV4ZWMoe2dyb3VwSUR9KTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkpvaW5pbmcgZ3JvdXAuLi5kb25lXCIpO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoXCJQcm9maWxlIHVwZGF0ZVwiLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgY29uc3QgYXBwID0gRmlyZWJhc2UuaW5pdCgpO1xuXG4gICAgICAgICAgICBhd2FpdCBhcHAuYXV0aCgpLnNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKEZJUkVCQVNFX1VTRVIsIEZJUkVCQVNFX1BBU1MpO1xuXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0OiBQcm9maWxlVXBkYXRlUmVxdWVzdCA9IHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkFsaWNlIFNtaXRoXCIsXG4gICAgICAgICAgICAgICAgYmlvOiBcIkFuIGV4YW1wbGUgdXNlciBmcm9tIHRoZSBsYW5kIG9mIE96XCIsXG4gICAgICAgICAgICAgICAgbG9jYXRpb246IFwiQ2FwaXRvbCBDaXR5LCBPelwiLFxuICAgICAgICAgICAgICAgIGxpbmtzOiBbJ2h0dHBzOi8vd3d3LndvbmRlcmxhbmQub3JnJ11cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGF3YWl0IFByb2ZpbGVVcGRhdGVzLmV4ZWMocmVxdWVzdCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHByb2ZpbGUgPSBhd2FpdCBQcm9maWxlcy5jdXJyZW50UHJvZmlsZSgpO1xuXG4gICAgICAgICAgICBhc3NlcnQuaXNEZWZpbmVkKHByb2ZpbGUpO1xuXG4gICAgICAgICAgICBhc3NlcnQuZXF1YWwocHJvZmlsZSEubmFtZSwgcmVxdWVzdC5uYW1lKTtcbiAgICAgICAgICAgIGFzc2VydC5lcXVhbChwcm9maWxlIS5iaW8sIHJlcXVlc3QuYmlvKTtcbiAgICAgICAgICAgIGFzc2VydC5lcXVhbChwcm9maWxlIS5sb2NhdGlvbiwgcmVxdWVzdC5sb2NhdGlvbik7XG5cbiAgICAgICAgfSk7XG5cbiAgICB9KTtcblxuICAgIG1vY2hhLnJ1bigobnJGYWlsdXJlczogbnVtYmVyKSA9PiB7XG5cbiAgICAgICAgc3RhdGUudGVzdFJlc3VsdFdyaXRlci53cml0ZShuckZhaWx1cmVzID09PSAwKVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKFwiVW5hYmxlIHRvIHdyaXRlIHJlc3VsdHM6IFwiLCBlcnIpKTtcblxuICAgIH0pO1xuXG59KTtcblxuaW50ZXJmYWNlIFVzZXJQYXNzIHtcbiAgICByZWFkb25seSB1c2VyOiBzdHJpbmc7XG4gICAgcmVhZG9ubHkgcGFzczogc3RyaW5nO1xufVxuXG4iXX0=