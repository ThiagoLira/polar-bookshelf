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
const react_1 = __importDefault(require("react"));
const Button_1 = __importDefault(require("reactstrap/lib/Button"));
const PopoverBody_1 = __importDefault(require("reactstrap/lib/PopoverBody"));
const reactstrap_1 = require("reactstrap");
const DocRefs_1 = require("../../datastore/sharing/db/DocRefs");
const FirebaseDatastores_1 = require("../../datastore/FirebaseDatastores");
const GroupDatastores_1 = require("../../datastore/sharing/GroupDatastores");
const Toaster_1 = require("../toaster/Toaster");
const DropdownChevron_1 = require("../util/DropdownChevron");
const GroupSharing_1 = require("./GroupSharing");
const UserRefs_1 = require("../../datastore/sharing/rpc/UserRefs");
const GroupMemberDeletes_1 = require("../../datastore/sharing/rpc/GroupMemberDeletes");
const Groups_1 = require("../../datastore/sharing/db/Groups");
const Firebase_1 = require("../../firebase/Firebase");
const Preconditions_1 = require("polar-shared/src/Preconditions");
const GroupDocsAdd_1 = require("../../datastore/sharing/rpc/GroupDocsAdd");
const Arrays_1 = require("polar-shared/src/util/Arrays");
class GroupSharingButton extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.onDone = this.onDone.bind(this);
        this.doGroupProvision = this.doGroupProvision.bind(this);
        this.doGroupDocsAdd = this.doGroupDocsAdd.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.state = {
            open: false,
        };
    }
    render() {
        return (react_1.default.createElement("div", { className: "mr-1 ml-1" },
            react_1.default.createElement(Button_1.default, { color: "primary", id: "share-control-button", size: "md", disabled: this.props.disabled, hidden: this.props.hidden, onClick: () => this.toggle(true), className: "pl-2 pr-2" },
                react_1.default.createElement("i", { className: "fas fa-share" }),
                "\u00A0 Share",
                react_1.default.createElement(DropdownChevron_1.DropdownChevron, null)),
            react_1.default.createElement(reactstrap_1.Popover, { trigger: "legacy", placement: "bottom", isOpen: this.state.open, toggle: () => this.toggle(false), target: "share-control-button", fade: false, delay: 0, className: "", style: {
                    minWidth: '500px',
                    maxWidth: '800px'
                } },
                react_1.default.createElement(PopoverBody_1.default, { className: "shadow" },
                    react_1.default.createElement(GroupSharing_1.GroupSharing, { doc: this.props.doc, onCancel: () => this.toggle(false), onDelete: member => this.onDelete(member), onDone: (contactSelections, groups) => this.onDone(contactSelections, groups) })))));
    }
    toggle(open) {
        this.setState(Object.assign(Object.assign({}, this.state), { open }));
    }
    onDone(invitationRequest, groups) {
        console.log("onDone...: ", invitationRequest);
        this.toggle(false);
        this.props.onDone();
        this.doGroupProvision(invitationRequest)
            .catch(err => Toaster_1.Toaster.error("Could not provision group: " + err.message));
        this.doGroupDocsAdd(groups)
            .catch(err => Toaster_1.Toaster.error("Could not add document to group: " + err.message));
    }
    doGroupProvision(invitationRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            if (invitationRequest.contactSelections.length === 0) {
                console.log("No contacts to invite.  Done.");
                return;
            }
            const docRef = this.createDocRef();
            const { message } = invitationRequest;
            Toaster_1.Toaster.info("Sharing document with users ... ");
            yield GroupDatastores_1.GroupDatastores.provision({
                key: docRef.fingerprint,
                visibility: 'private',
                docs: [docRef],
                invitations: {
                    message,
                    to: invitationRequest.contactSelections
                }
            });
            Toaster_1.Toaster.success("Document shared successfully");
        });
    }
    createDocRef() {
        const docMeta = this.props.doc.docMeta;
        const fingerprint = docMeta.docInfo.fingerprint;
        const docID = FirebaseDatastores_1.FirebaseDatastores.computeDocMetaID(fingerprint);
        return DocRefs_1.DocRefs.fromDocMeta(docID, docMeta);
    }
    doGroupDocsAdd(groups) {
        return __awaiter(this, void 0, void 0, function* () {
            if (groups.length === 0) {
                console.log("No groups to invite.  Done.");
                return;
            }
            const computeGroupsOverview = () => {
                const nrGroups = groups.length;
                let groupsText = "";
                if (nrGroups <= 4) {
                    groupsText = groups.join(", ");
                }
                else {
                    groupsText = Arrays_1.Arrays.head(groups, 4) + ", ...";
                }
                return `${nrGroups} groups (${groupsText})`;
            };
            const groupsOverview = computeGroupsOverview();
            const toastRef = Toaster_1.Toaster.info(`Adding document to ${groupsOverview}`);
            for (const groupName of groups) {
                const docRef = this.createDocRef();
                const group = yield Groups_1.Groups.getByName(groupName);
                if (!group) {
                    Toaster_1.Toaster.error("No group named: " + groupName);
                    continue;
                }
                const groupID = group.id;
                yield GroupDocsAdd_1.GroupDocsAdd.exec({ groupID, docs: [docRef] });
            }
            Toaster_1.Toaster.remove();
            Toaster_1.Toaster.success(`Document added to ${groupsOverview}`);
        });
    }
    onDelete(member) {
        console.log("Deleting member: ", member);
        const toUserRef = () => {
            switch (member.type) {
                case 'member':
                    const groupMember = member.value;
                    return UserRefs_1.UserRefs.fromProfileID(groupMember.profileID);
                case 'pending':
                    const groupMemberInvitation = member.value;
                    return UserRefs_1.UserRefs.fromEmail(groupMemberInvitation.to);
            }
        };
        const handle = () => __awaiter(this, void 0, void 0, function* () {
            const user = yield Firebase_1.Firebase.currentUser();
            Preconditions_1.Preconditions.assertPresent(user, 'user');
            const uid = user.uid;
            const { doc } = this.props;
            const fingerprint = doc.docInfo.fingerprint;
            const userRef = toUserRef();
            const groupID = Groups_1.Groups.createIDForKey(uid, fingerprint);
            yield GroupMemberDeletes_1.GroupMemberDeletes.exec({ groupID, userRefs: [userRef] });
        });
        handle()
            .catch(err => {
            const msg = "Failed to delete user from group: ";
            console.error(msg, err);
            Toaster_1.Toaster.error(msg + err.message);
        });
    }
}
exports.GroupSharingButton = GroupSharingButton;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JvdXBTaGFyaW5nQnV0dG9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiR3JvdXBTaGFyaW5nQnV0dG9uLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBLGtEQUEwQjtBQUMxQixtRUFBMkM7QUFDM0MsNkVBQXFEO0FBQ3JELDJDQUFtQztBQUVuQyxnRUFBMkQ7QUFDM0QsMkVBQXNFO0FBQ3RFLDZFQUF3RTtBQUN4RSxnREFBMkM7QUFDM0MsNkRBQXdEO0FBRXhELGlEQUE0QztBQUk1QyxtRUFBOEQ7QUFHOUQsdUZBQWtGO0FBQ2xGLDhEQUF1RTtBQUN2RSxzREFBaUQ7QUFDakQsa0VBQTZEO0FBRTdELDJFQUFzRTtBQUN0RSx5REFBb0Q7QUFFcEQsTUFBYSxrQkFBbUIsU0FBUSxlQUFLLENBQUMsU0FBeUI7SUFFbkUsWUFBWSxLQUFhO1FBQ3JCLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUViLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFekMsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNULElBQUksRUFBRSxLQUFLO1NBQ2QsQ0FBQztJQUVOLENBQUM7SUFHTSxNQUFNO1FBRVQsT0FBTyxDQUVILHVDQUFLLFNBQVMs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dCI6WyIvKiBlc2xpbnQgcmVhY3Qvbm8tbXVsdGktY29tcDogMCwgcmVhY3QvcHJvcC10eXBlczogMCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3RzdHJhcC9saWIvQnV0dG9uJztcbmltcG9ydCBQb3BvdmVyQm9keSBmcm9tICdyZWFjdHN0cmFwL2xpYi9Qb3BvdmVyQm9keSc7XG5pbXBvcnQge1BvcG92ZXJ9IGZyb20gJ3JlYWN0c3RyYXAnO1xuaW1wb3J0IHtJbnZpdGF0aW9uUmVxdWVzdH0gZnJvbSAnLi9Hcm91cFNoYXJpbmdDb250cm9sJztcbmltcG9ydCB7RG9jUmVmc30gZnJvbSAnLi4vLi4vZGF0YXN0b3JlL3NoYXJpbmcvZGIvRG9jUmVmcyc7XG5pbXBvcnQge0ZpcmViYXNlRGF0YXN0b3Jlc30gZnJvbSAnLi4vLi4vZGF0YXN0b3JlL0ZpcmViYXNlRGF0YXN0b3Jlcyc7XG5pbXBvcnQge0dyb3VwRGF0YXN0b3Jlc30gZnJvbSAnLi4vLi4vZGF0YXN0b3JlL3NoYXJpbmcvR3JvdXBEYXRhc3RvcmVzJztcbmltcG9ydCB7VG9hc3Rlcn0gZnJvbSAnLi4vdG9hc3Rlci9Ub2FzdGVyJztcbmltcG9ydCB7RHJvcGRvd25DaGV2cm9ufSBmcm9tICcuLi91dGlsL0Ryb3Bkb3duQ2hldnJvbic7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7R3JvdXBTaGFyaW5nfSBmcm9tICcuL0dyb3VwU2hhcmluZyc7XG5pbXBvcnQge01lbWJlclJlY29yZH0gZnJvbSAnLi9Hcm91cFNoYXJpbmdSZWNvcmRzJztcbmltcG9ydCB7RG9jfSBmcm9tICcuLi8uLi9tZXRhZGF0YS9Eb2MnO1xuaW1wb3J0IHtEYXRhc3RvcmVDYXBhYmlsaXRpZXN9IGZyb20gJy4uLy4uL2RhdGFzdG9yZS9EYXRhc3RvcmUnO1xuaW1wb3J0IHtVc2VyUmVmc30gZnJvbSAnLi4vLi4vZGF0YXN0b3JlL3NoYXJpbmcvcnBjL1VzZXJSZWZzJztcbmltcG9ydCB7R3JvdXBNZW1iZXJ9IGZyb20gJy4uLy4uL2RhdGFzdG9yZS9zaGFyaW5nL2RiL0dyb3VwTWVtYmVycyc7XG5pbXBvcnQge0dyb3VwTWVtYmVySW52aXRhdGlvbn0gZnJvbSAnLi4vLi4vZGF0YXN0b3JlL3NoYXJpbmcvZGIvR3JvdXBNZW1iZXJJbnZpdGF0aW9ucyc7XG5pbXBvcnQge0dyb3VwTWVtYmVyRGVsZXRlc30gZnJvbSAnLi4vLi4vZGF0YXN0b3JlL3NoYXJpbmcvcnBjL0dyb3VwTWVtYmVyRGVsZXRlcyc7XG5pbXBvcnQge0dyb3VwTmFtZVN0ciwgR3JvdXBzfSBmcm9tICcuLi8uLi9kYXRhc3RvcmUvc2hhcmluZy9kYi9Hcm91cHMnO1xuaW1wb3J0IHtGaXJlYmFzZX0gZnJvbSAnLi4vLi4vZmlyZWJhc2UvRmlyZWJhc2UnO1xuaW1wb3J0IHtQcmVjb25kaXRpb25zfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL1ByZWNvbmRpdGlvbnMnO1xuaW1wb3J0IHtDb250YWN0T3B0aW9uc30gZnJvbSAnLi9Db250YWN0T3B0aW9ucyc7XG5pbXBvcnQge0dyb3VwRG9jc0FkZH0gZnJvbSBcIi4uLy4uL2RhdGFzdG9yZS9zaGFyaW5nL3JwYy9Hcm91cERvY3NBZGRcIjtcbmltcG9ydCB7QXJyYXlzfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy91dGlsL0FycmF5c1wiO1xuXG5leHBvcnQgY2xhc3MgR3JvdXBTaGFyaW5nQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnRvZ2dsZSA9IHRoaXMudG9nZ2xlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25Eb25lID0gdGhpcy5vbkRvbmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kb0dyb3VwUHJvdmlzaW9uID0gdGhpcy5kb0dyb3VwUHJvdmlzaW9uLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZG9Hcm91cERvY3NBZGQgPSB0aGlzLmRvR3JvdXBEb2NzQWRkLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25EZWxldGUgPSB0aGlzLm9uRGVsZXRlLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIG9wZW46IGZhbHNlLFxuICAgICAgICB9O1xuXG4gICAgfVxuXG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItMSBtbC0xXCI+XG5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInNoYXJlLWNvbnRyb2wtYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJtZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZGRlbj17dGhpcy5wcm9wcy5oaWRkZW59XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnRvZ2dsZSh0cnVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBsLTIgcHItMlwiPlxuXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zaGFyZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgJm5ic3A7XG4gICAgICAgICAgICAgICAgICAgIFNoYXJlXG5cbiAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duQ2hldnJvbi8+XG5cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cblxuICAgICAgICAgICAgICAgIDxQb3BvdmVyIHRyaWdnZXI9XCJsZWdhY3lcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cImJvdHRvbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgaXNPcGVuPXt0aGlzLnN0YXRlLm9wZW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlPXsoKSA9PiB0aGlzLnRvZ2dsZShmYWxzZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwic2hhcmUtY29udHJvbC1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgIGZhZGU9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5PXswfVxuICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluV2lkdGg6ICc1MDBweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnODAwcHgnXG4gICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG5cbiAgICAgICAgICAgICAgICAgICAgPFBvcG92ZXJCb2R5IGNsYXNzTmFtZT1cInNoYWRvd1wiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JvdXBTaGFyaW5nIGRvYz17dGhpcy5wcm9wcy5kb2N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2FuY2VsPXsoKSA9PiB0aGlzLnRvZ2dsZShmYWxzZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRGVsZXRlPXttZW1iZXIgPT4gdGhpcy5vbkRlbGV0ZShtZW1iZXIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRvbmU9eyhjb250YWN0U2VsZWN0aW9ucywgZ3JvdXBzKSA9PiB0aGlzLm9uRG9uZShjb250YWN0U2VsZWN0aW9ucywgZ3JvdXBzKX0vPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvUG9wb3ZlckJvZHk+XG5cbiAgICAgICAgICAgICAgICA8L1BvcG92ZXI+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIHRvZ2dsZShvcGVuOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoey4uLnRoaXMuc3RhdGUsIG9wZW59KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uRG9uZShpbnZpdGF0aW9uUmVxdWVzdDogSW52aXRhdGlvblJlcXVlc3QsIGdyb3VwczogUmVhZG9ubHlBcnJheTxHcm91cE5hbWVTdHI+KSB7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJvbkRvbmUuLi46IFwiLCBpbnZpdGF0aW9uUmVxdWVzdCk7XG5cbiAgICAgICAgdGhpcy50b2dnbGUoZmFsc2UpO1xuICAgICAgICB0aGlzLnByb3BzLm9uRG9uZSgpO1xuXG4gICAgICAgIHRoaXMuZG9Hcm91cFByb3Zpc2lvbihpbnZpdGF0aW9uUmVxdWVzdClcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gVG9hc3Rlci5lcnJvcihcIkNvdWxkIG5vdCBwcm92aXNpb24gZ3JvdXA6IFwiICsgZXJyLm1lc3NhZ2UpKTtcblxuICAgICAgICB0aGlzLmRvR3JvdXBEb2NzQWRkKGdyb3VwcylcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gVG9hc3Rlci5lcnJvcihcIkNvdWxkIG5vdCBhZGQgZG9jdW1lbnQgdG8gZ3JvdXA6IFwiICsgZXJyLm1lc3NhZ2UpKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgZG9Hcm91cFByb3Zpc2lvbihpbnZpdGF0aW9uUmVxdWVzdDogSW52aXRhdGlvblJlcXVlc3QpIHtcblxuICAgICAgICBpZiAoaW52aXRhdGlvblJlcXVlc3QuY29udGFjdFNlbGVjdGlvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vIGNvbnRhY3RzIHRvIGludml0ZS4gIERvbmUuXCIpO1xuICAgICAgICAgICAgLy8gdGhlcmUncyBub3RoaW5nIHRvIGJlIGRvbmUgc28gZG9uJ3QgcHJvdmlzaW9uIGEgZ3JvdXAgd2l0aCB6ZXJvXG4gICAgICAgICAgICAvLyBtZW1iZXJzLlxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZG9jUmVmID0gdGhpcy5jcmVhdGVEb2NSZWYoKTtcblxuICAgICAgICBjb25zdCB7bWVzc2FnZX0gPSBpbnZpdGF0aW9uUmVxdWVzdDtcblxuICAgICAgICBUb2FzdGVyLmluZm8oXCJTaGFyaW5nIGRvY3VtZW50IHdpdGggdXNlcnMgLi4uIFwiKTtcblxuICAgICAgICBhd2FpdCBHcm91cERhdGFzdG9yZXMucHJvdmlzaW9uKHtcbiAgICAgICAgICAgIGtleTogZG9jUmVmLmZpbmdlcnByaW50LFxuICAgICAgICAgICAgdmlzaWJpbGl0eTogJ3ByaXZhdGUnLFxuICAgICAgICAgICAgZG9jczogW2RvY1JlZl0sXG4gICAgICAgICAgICBpbnZpdGF0aW9uczoge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgdG86IGludml0YXRpb25SZXF1ZXN0LmNvbnRhY3RTZWxlY3Rpb25zXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIFRvYXN0ZXIuc3VjY2VzcyhcIkRvY3VtZW50IHNoYXJlZCBzdWNjZXNzZnVsbHlcIik7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZURvY1JlZigpIHtcblxuICAgICAgICBjb25zdCBkb2NNZXRhID0gdGhpcy5wcm9wcy5kb2MuZG9jTWV0YTtcbiAgICAgICAgY29uc3QgZmluZ2VycHJpbnQgPSBkb2NNZXRhLmRvY0luZm8uZmluZ2VycHJpbnQ7XG4gICAgICAgIGNvbnN0IGRvY0lEID0gRmlyZWJhc2VEYXRhc3RvcmVzLmNvbXB1dGVEb2NNZXRhSUQoZmluZ2VycHJpbnQpO1xuICAgICAgICByZXR1cm4gRG9jUmVmcy5mcm9tRG9jTWV0YShkb2NJRCwgZG9jTWV0YSk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGRvR3JvdXBEb2NzQWRkKGdyb3VwczogUmVhZG9ubHlBcnJheTxHcm91cE5hbWVTdHI+KSB7XG5cbiAgICAgICAgaWYgKGdyb3Vwcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm8gZ3JvdXBzIHRvIGludml0ZS4gIERvbmUuXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY29tcHV0ZUdyb3Vwc092ZXJ2aWV3ID0gKCkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBuckdyb3VwcyA9IGdyb3Vwcy5sZW5ndGg7XG5cbiAgICAgICAgICAgIGxldCBncm91cHNUZXh0ID0gXCJcIjtcblxuICAgICAgICAgICAgaWYgKG5yR3JvdXBzIDw9IDQpIHtcbiAgICAgICAgICAgICAgICBncm91cHNUZXh0ID0gZ3JvdXBzLmpvaW4oXCIsIFwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZ3JvdXBzVGV4dCA9IEFycmF5cy5oZWFkKGdyb3VwcywgNCkgKyBcIiwgLi4uXCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBgJHtuckdyb3Vwc30gZ3JvdXBzICgke2dyb3Vwc1RleHR9KWA7XG5cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBncm91cHNPdmVydmlldyA9IGNvbXB1dGVHcm91cHNPdmVydmlldygpO1xuXG4gICAgICAgIGNvbnN0IHRvYXN0UmVmID0gVG9hc3Rlci5pbmZvKGBBZGRpbmcgZG9jdW1lbnQgdG8gJHtncm91cHNPdmVydmlld31gKTtcblxuICAgICAgICBmb3IgKGNvbnN0IGdyb3VwTmFtZSBvZiBncm91cHMpIHtcblxuICAgICAgICAgICAgY29uc3QgZG9jUmVmID0gdGhpcy5jcmVhdGVEb2NSZWYoKTtcbiAgICAgICAgICAgIGNvbnN0IGdyb3VwID0gYXdhaXQgR3JvdXBzLmdldEJ5TmFtZShncm91cE5hbWUpO1xuXG4gICAgICAgICAgICBpZiAoISBncm91cCkge1xuICAgICAgICAgICAgICAgIFRvYXN0ZXIuZXJyb3IoXCJObyBncm91cCBuYW1lZDogXCIgKyBncm91cE5hbWUpO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBncm91cElEID0gZ3JvdXAuaWQ7XG5cbiAgICAgICAgICAgIGF3YWl0IEdyb3VwRG9jc0FkZC5leGVjKHtncm91cElELCBkb2NzOiBbZG9jUmVmXX0pO1xuXG4gICAgICAgIH1cblxuICAgICAgICBUb2FzdGVyLnJlbW92ZSgpO1xuXG4gICAgICAgIFRvYXN0ZXIuc3VjY2VzcyhgRG9jdW1lbnQgYWRkZWQgdG8gJHtncm91cHNPdmVydmlld31gKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgb25EZWxldGUobWVtYmVyOiBNZW1iZXJSZWNvcmQpIHtcblxuICAgICAgICBjb25zb2xlLmxvZyhcIkRlbGV0aW5nIG1lbWJlcjogXCIsIG1lbWJlcik7XG5cbiAgICAgICAgY29uc3QgdG9Vc2VyUmVmID0gKCkgPT4ge1xuXG4gICAgICAgICAgICBzd2l0Y2ggKG1lbWJlci50eXBlKSB7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdtZW1iZXInOlxuICAgICAgICAgICAgICAgICAgICBjb25zdCBncm91cE1lbWJlciA9IG1lbWJlci52YWx1ZSBhcyBHcm91cE1lbWJlcjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFVzZXJSZWZzLmZyb21Qcm9maWxlSUQoZ3JvdXBNZW1iZXIucHJvZmlsZUlEKTtcbiAgICAgICAgICAgICAgICBjYXNlICdwZW5kaW5nJzpcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZ3JvdXBNZW1iZXJJbnZpdGF0aW9uID0gbWVtYmVyLnZhbHVlIGFzIEdyb3VwTWVtYmVySW52aXRhdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFVzZXJSZWZzLmZyb21FbWFpbChncm91cE1lbWJlckludml0YXRpb24udG8pO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBoYW5kbGUgPSBhc3luYyAoKSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBGaXJlYmFzZS5jdXJyZW50VXNlcigpO1xuICAgICAgICAgICAgUHJlY29uZGl0aW9ucy5hc3NlcnRQcmVzZW50KHVzZXIsICd1c2VyJyk7XG4gICAgICAgICAgICBjb25zdCB1aWQgPSB1c2VyIS51aWQ7XG5cbiAgICAgICAgICAgIGNvbnN0IHtkb2N9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgICAgIGNvbnN0IGZpbmdlcnByaW50ID0gZG9jLmRvY0luZm8uZmluZ2VycHJpbnQ7XG5cbiAgICAgICAgICAgIGNvbnN0IHVzZXJSZWYgPSB0b1VzZXJSZWYoKTtcblxuICAgICAgICAgICAgY29uc3QgZ3JvdXBJRCA9IEdyb3Vwcy5jcmVhdGVJREZvcktleSh1aWQsIGZpbmdlcnByaW50KTtcblxuICAgICAgICAgICAgYXdhaXQgR3JvdXBNZW1iZXJEZWxldGVzLmV4ZWMoe2dyb3VwSUQsIHVzZXJSZWZzOiBbdXNlclJlZl19KTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIGhhbmRsZSgpXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBtc2cgPSBcIkZhaWxlZCB0byBkZWxldGUgdXNlciBmcm9tIGdyb3VwOiBcIjtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKG1zZywgZXJyKTtcbiAgICAgICAgICAgICAgICBUb2FzdGVyLmVycm9yKG1zZyArIGVyci5tZXNzYWdlKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgfVxuXG59XG5cbmludGVyZmFjZSBJUHJvcHMge1xuXG4gICAgcmVhZG9ubHkgZG9jOiBEb2M7XG5cbiAgICByZWFkb25seSBkYXRhc3RvcmVDYXBhYmlsaXRpZXM6IERhdGFzdG9yZUNhcGFiaWxpdGllcztcblxuICAgIHJlYWRvbmx5IG9uRG9uZTogKCkgPT4gdm9pZDtcblxuICAgIHJlYWRvbmx5IGRpc2FibGVkPzogYm9vbGVhbjtcblxuICAgIHJlYWRvbmx5IGhpZGRlbj86IGJvb2xlYW47XG5cbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG5cbiAgICByZWFkb25seSBvcGVuOiBib29sZWFuO1xufVxuIl19