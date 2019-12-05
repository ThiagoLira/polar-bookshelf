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
class GroupSharingButton extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.onDone = this.onDone.bind(this);
        this.doGroupProvision = this.doGroupProvision.bind(this);
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
                    react_1.default.createElement(GroupSharing_1.GroupSharing, { doc: this.props.doc, onCancel: () => this.toggle(false), onDelete: member => this.onDelete(member), onDone: (contactSelections) => this.onDone(contactSelections) })))));
    }
    toggle(open) {
        this.setState(Object.assign(Object.assign({}, this.state), { open }));
    }
    onDone(invitation) {
        console.log("onDone...");
        this.toggle(false);
        this.props.onDone();
        this.doGroupProvision(invitation)
            .catch(err => Toaster_1.Toaster.error("Could not provision group: " + err.message));
    }
    doGroupProvision(invitation) {
        return __awaiter(this, void 0, void 0, function* () {
            if (invitation.contactSelections.length === 0) {
                return;
            }
            const docMeta = this.props.doc.docMeta;
            const fingerprint = docMeta.docInfo.fingerprint;
            const docID = FirebaseDatastores_1.FirebaseDatastores.computeDocMetaID(fingerprint);
            const docRef = DocRefs_1.DocRefs.fromDocMeta(docID, docMeta);
            const { message } = invitation;
            Toaster_1.Toaster.info("Sharing document with users ... ");
            yield GroupDatastores_1.GroupDatastores.provision({
                key: fingerprint,
                visibility: 'private',
                docs: [docRef],
                invitations: {
                    message,
                    to: invitation.contactSelections
                }
            });
            Toaster_1.Toaster.success("Document shared successfully");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JvdXBTaGFyaW5nTW9kYWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiR3JvdXBTaGFyaW5nTW9kYWxzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBLGtEQUEwQjtBQUMxQixtRUFBMkM7QUFDM0MsNkVBQXFEO0FBQ3JELDJDQUFtQztBQUVuQyxnRUFBMkQ7QUFDM0QsMkVBQXNFO0FBQ3RFLDZFQUF3RTtBQUN4RSxnREFBMkM7QUFDM0MsNkRBQXdEO0FBRXhELGlEQUE0QztBQUk1QyxtRUFBOEQ7QUFHOUQsdUZBQWtGO0FBQ2xGLDhEQUF5RDtBQUN6RCxzREFBaUQ7QUFDakQsa0VBQTZEO0FBRzdELE1BQWEsa0JBQW1CLFNBQVEsZUFBSyxDQUFDLFNBQXlCO0lBRW5FLFlBQVksS0FBYTtRQUNyQixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFYixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV6QyxJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1QsSUFBSSxFQUFFLEtBQUs7U0FDZCxDQUFDO0lBRU4sQ0FBQztJQUdNLE1BQU07UUFFVCxPQUFPLENBRUgsdUNBQUssU0FBUyxFQUFDLFdBQVc7WUFFdEIsOEJBQUMsZ0JBQU0sSUFBQyxLQUFLLEVBQUMsU0FBUyxFQUNmLEVBQUUsRUFBQyxzQkFBc0IsRUFDekIsSUFBSSxFQUFDLElBQUksRUFDVCxR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TUFBTSx1Q0FBa0IsQ0FBQyxJQUFJLENBQUMsRUFBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1FBRWxFLENBQUMsQ0FBQSxDQUFDO1FBRUYsTUFBTSxFQUFFO2FBQ0gsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ1QsTUFBTSxHQUFHLEdBQUcsb0NBQW9DLENBQUM7WUFDakQsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDeEIsaUJBQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyQyxDQUFDLENBQUMsQ0FBQztJQUVYLENBQUM7Q0FFSjtBQWpLRCxnREFpS0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQgcmVhY3Qvbm8tbXVsdGktY29tcDogMCwgcmVhY3QvcHJvcC10eXBlczogMCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3RzdHJhcC9saWIvQnV0dG9uJztcbmltcG9ydCBQb3BvdmVyQm9keSBmcm9tICdyZWFjdHN0cmFwL2xpYi9Qb3BvdmVyQm9keSc7XG5pbXBvcnQge1BvcG92ZXJ9IGZyb20gJ3JlYWN0c3RyYXAnO1xuaW1wb3J0IHtJbnZpdGF0aW9uUmVxdWVzdH0gZnJvbSAnLi9Hcm91cFNoYXJpbmdDb250cm9sJztcbmltcG9ydCB7RG9jUmVmc30gZnJvbSAnLi4vLi4vZGF0YXN0b3JlL3NoYXJpbmcvZGIvRG9jUmVmcyc7XG5pbXBvcnQge0ZpcmViYXNlRGF0YXN0b3Jlc30gZnJvbSAnLi4vLi4vZGF0YXN0b3JlL0ZpcmViYXNlRGF0YXN0b3Jlcyc7XG5pbXBvcnQge0dyb3VwRGF0YXN0b3Jlc30gZnJvbSAnLi4vLi4vZGF0YXN0b3JlL3NoYXJpbmcvR3JvdXBEYXRhc3RvcmVzJztcbmltcG9ydCB7VG9hc3Rlcn0gZnJvbSAnLi4vdG9hc3Rlci9Ub2FzdGVyJztcbmltcG9ydCB7RHJvcGRvd25DaGV2cm9ufSBmcm9tICcuLi91dGlsL0Ryb3Bkb3duQ2hldnJvbic7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7R3JvdXBTaGFyaW5nfSBmcm9tICcuL0dyb3VwU2hhcmluZyc7XG5pbXBvcnQge01lbWJlclJlY29yZH0gZnJvbSAnLi9Hcm91cFNoYXJpbmdSZWNvcmRzJztcbmltcG9ydCB7RG9jfSBmcm9tICcuLi8uLi9tZXRhZGF0YS9Eb2MnO1xuaW1wb3J0IHtEYXRhc3RvcmVDYXBhYmlsaXRpZXN9IGZyb20gJy4uLy4uL2RhdGFzdG9yZS9EYXRhc3RvcmUnO1xuaW1wb3J0IHtVc2VyUmVmc30gZnJvbSAnLi4vLi4vZGF0YXN0b3JlL3NoYXJpbmcvcnBjL1VzZXJSZWZzJztcbmltcG9ydCB7R3JvdXBNZW1iZXJ9IGZyb20gJy4uLy4uL2RhdGFzdG9yZS9zaGFyaW5nL2RiL0dyb3VwTWVtYmVycyc7XG5pbXBvcnQge0dyb3VwTWVtYmVySW52aXRhdGlvbn0gZnJvbSAnLi4vLi4vZGF0YXN0b3JlL3NoYXJpbmcvZGIvR3JvdXBNZW1iZXJJbnZpdGF0aW9ucyc7XG5pbXBvcnQge0dyb3VwTWVtYmVyRGVsZXRlc30gZnJvbSAnLi4vLi4vZGF0YXN0b3JlL3NoYXJpbmcvcnBjL0dyb3VwTWVtYmVyRGVsZXRlcyc7XG5pbXBvcnQge0dyb3Vwc30gZnJvbSAnLi4vLi4vZGF0YXN0b3JlL3NoYXJpbmcvZGIvR3JvdXBzJztcbmltcG9ydCB7RmlyZWJhc2V9IGZyb20gJy4uLy4uL2ZpcmViYXNlL0ZpcmViYXNlJztcbmltcG9ydCB7UHJlY29uZGl0aW9uc30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9QcmVjb25kaXRpb25zJztcbmltcG9ydCB7Q29udGFjdE9wdGlvbnN9IGZyb20gJy4vQ29udGFjdE9wdGlvbnMnO1xuXG5leHBvcnQgY2xhc3MgR3JvdXBTaGFyaW5nQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnRvZ2dsZSA9IHRoaXMudG9nZ2xlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25Eb25lID0gdGhpcy5vbkRvbmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kb0dyb3VwUHJvdmlzaW9uID0gdGhpcy5kb0dyb3VwUHJvdmlzaW9uLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25EZWxldGUgPSB0aGlzLm9uRGVsZXRlLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIG9wZW46IGZhbHNlLFxuICAgICAgICB9O1xuXG4gICAgfVxuXG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItMSBtbC0xXCI+XG5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInNoYXJlLWNvbnRyb2wtYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJtZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5wcm9wcy5kaXNhYmxlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZGRlbj17dGhpcy5wcm9wcy5oaWRkZW59XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnRvZ2dsZSh0cnVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBsLTIgcHItMlwiPlxuXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zaGFyZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgJm5ic3A7XG4gICAgICAgICAgICAgICAgICAgIFNoYXJlXG5cbiAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duQ2hldnJvbi8+XG5cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cblxuICAgICAgICAgICAgICAgIDxQb3BvdmVyIHRyaWdnZXI9XCJsZWdhY3lcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cImJvdHRvbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgaXNPcGVuPXt0aGlzLnN0YXRlLm9wZW59XG4gICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlPXsoKSA9PiB0aGlzLnRvZ2dsZShmYWxzZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwic2hhcmUtY29udHJvbC1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgIGZhZGU9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5PXswfVxuICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluV2lkdGg6ICc1MDBweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnODAwcHgnXG4gICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG5cbiAgICAgICAgICAgICAgICAgICAgPFBvcG92ZXJCb2R5IGNsYXNzTmFtZT1cInNoYWRvd1wiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JvdXBTaGFyaW5nIGRvYz17dGhpcy5wcm9wcy5kb2N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2FuY2VsPXsoKSA9PiB0aGlzLnRvZ2dsZShmYWxzZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRGVsZXRlPXttZW1iZXIgPT4gdGhpcy5vbkRlbGV0ZShtZW1iZXIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRvbmU9eyhjb250YWN0U2VsZWN0aW9ucykgPT4gdGhpcy5vbkRvbmUoY29udGFjdFNlbGVjdGlvbnMpfS8+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9Qb3BvdmVyQm9keT5cblxuICAgICAgICAgICAgICAgIDwvUG9wb3Zlcj5cblxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgdG9nZ2xlKG9wZW46IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Li4udGhpcy5zdGF0ZSwgb3Blbn0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25Eb25lKGludml0YXRpb246IEludml0YXRpb25SZXF1ZXN0KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwib25Eb25lLi4uXCIpO1xuXG4gICAgICAgIHRoaXMudG9nZ2xlKGZhbHNlKTtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkRvbmUoKTtcblxuICAgICAgICB0aGlzLmRvR3JvdXBQcm92aXNpb24oaW52aXRhdGlvbilcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gVG9hc3Rlci5lcnJvcihcIkNvdWxkIG5vdCBwcm92aXNpb24gZ3JvdXA6IFwiICsgZXJyLm1lc3NhZ2UpKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgZG9Hcm91cFByb3Zpc2lvbihpbnZpdGF0aW9uOiBJbnZpdGF0aW9uUmVxdWVzdCkge1xuXG4gICAgICAgIGlmIChpbnZpdGF0aW9uLmNvbnRhY3RTZWxlY3Rpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgLy8gdGhlcmUncyBub3RoaW5nIHRvIGJlIGRvbmUgc28gZG9uJ3QgcHJvdmlzaW9uIGEgZ3JvdXAgd2l0aCB6ZXJvXG4gICAgICAgICAgICAvLyBtZW1iZXJzLlxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZG9jTWV0YSA9IHRoaXMucHJvcHMuZG9jLmRvY01ldGE7XG4gICAgICAgIGNvbnN0IGZpbmdlcnByaW50ID0gZG9jTWV0YS5kb2NJbmZvLmZpbmdlcnByaW50O1xuXG4gICAgICAgIGNvbnN0IGRvY0lEID0gRmlyZWJhc2VEYXRhc3RvcmVzLmNvbXB1dGVEb2NNZXRhSUQoZmluZ2VycHJpbnQpO1xuICAgICAgICBjb25zdCBkb2NSZWYgPSBEb2NSZWZzLmZyb21Eb2NNZXRhKGRvY0lELCBkb2NNZXRhKTtcblxuICAgICAgICBjb25zdCB7bWVzc2FnZX0gPSBpbnZpdGF0aW9uO1xuXG4gICAgICAgIFRvYXN0ZXIuaW5mbyhcIlNoYXJpbmcgZG9jdW1lbnQgd2l0aCB1c2VycyAuLi4gXCIpO1xuXG4gICAgICAgIGF3YWl0IEdyb3VwRGF0YXN0b3Jlcy5wcm92aXNpb24oe1xuICAgICAgICAgICAga2V5OiBmaW5nZXJwcmludCxcbiAgICAgICAgICAgIHZpc2liaWxpdHk6ICdwcml2YXRlJyxcbiAgICAgICAgICAgIGRvY3M6IFtkb2NSZWZdLFxuICAgICAgICAgICAgaW52aXRhdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlLFxuICAgICAgICAgICAgICAgIHRvOiBpbnZpdGF0aW9uLmNvbnRhY3RTZWxlY3Rpb25zXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIFRvYXN0ZXIuc3VjY2VzcyhcIkRvY3VtZW50IHNoYXJlZCBzdWNjZXNzZnVsbHlcIik7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uRGVsZXRlKG1lbWJlcjogTWVtYmVyUmVjb3JkKSB7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJEZWxldGluZyBtZW1iZXI6IFwiLCBtZW1iZXIpO1xuXG4gICAgICAgIGNvbnN0IHRvVXNlclJlZiA9ICgpID0+IHtcblxuICAgICAgICAgICAgc3dpdGNoIChtZW1iZXIudHlwZSkge1xuXG4gICAgICAgICAgICAgICAgY2FzZSAnbWVtYmVyJzpcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZ3JvdXBNZW1iZXIgPSBtZW1iZXIudmFsdWUgYXMgR3JvdXBNZW1iZXI7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBVc2VyUmVmcy5mcm9tUHJvZmlsZUlEKGdyb3VwTWVtYmVyLnByb2ZpbGVJRCk7XG4gICAgICAgICAgICAgICAgY2FzZSAncGVuZGluZyc6XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGdyb3VwTWVtYmVySW52aXRhdGlvbiA9IG1lbWJlci52YWx1ZSBhcyBHcm91cE1lbWJlckludml0YXRpb247XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBVc2VyUmVmcy5mcm9tRW1haWwoZ3JvdXBNZW1iZXJJbnZpdGF0aW9uLnRvKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgaGFuZGxlID0gYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgRmlyZWJhc2UuY3VycmVudFVzZXIoKTtcbiAgICAgICAgICAgIFByZWNvbmRpdGlvbnMuYXNzZXJ0UHJlc2VudCh1c2VyLCAndXNlcicpO1xuICAgICAgICAgICAgY29uc3QgdWlkID0gdXNlciEudWlkO1xuXG4gICAgICAgICAgICBjb25zdCB7ZG9jfSA9IHRoaXMucHJvcHM7XG4gICAgICAgICAgICBjb25zdCBmaW5nZXJwcmludCA9IGRvYy5kb2NJbmZvLmZpbmdlcnByaW50O1xuXG4gICAgICAgICAgICBjb25zdCB1c2VyUmVmID0gdG9Vc2VyUmVmKCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGdyb3VwSUQgPSBHcm91cHMuY3JlYXRlSURGb3JLZXkodWlkLCBmaW5nZXJwcmludCk7XG5cbiAgICAgICAgICAgIGF3YWl0IEdyb3VwTWVtYmVyRGVsZXRlcy5leGVjKHtncm91cElELCB1c2VyUmVmczogW3VzZXJSZWZdfSk7XG5cbiAgICAgICAgfTtcblxuICAgICAgICBoYW5kbGUoKVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbXNnID0gXCJGYWlsZWQgdG8gZGVsZXRlIHVzZXIgZnJvbSBncm91cDogXCI7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihtc2csIGVycik7XG4gICAgICAgICAgICAgICAgVG9hc3Rlci5lcnJvcihtc2cgKyBlcnIubWVzc2FnZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgIH1cblxufVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcblxuICAgIHJlYWRvbmx5IGRvYzogRG9jO1xuXG4gICAgcmVhZG9ubHkgZGF0YXN0b3JlQ2FwYWJpbGl0aWVzOiBEYXRhc3RvcmVDYXBhYmlsaXRpZXM7XG5cbiAgICByZWFkb25seSBvbkRvbmU6ICgpID0+IHZvaWQ7XG5cbiAgICByZWFkb25seSBkaXNhYmxlZD86IGJvb2xlYW47XG5cbiAgICByZWFkb25seSBoaWRkZW4/OiBib29sZWFuO1xuXG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xuXG4gICAgcmVhZG9ubHkgb3BlbjogYm9vbGVhbjtcbn1cbiJdfQ==