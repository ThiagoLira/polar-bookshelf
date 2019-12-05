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
class GroupSharingModal extends react_1.default.Component {
    constructor(props) {
        super(props);
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
exports.GroupSharingModal = GroupSharingModal;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JvdXBTaGFyaW5nTW9kYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJHcm91cFNoYXJpbmdNb2RhbC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQSxrREFBMEI7QUFDMUIsbUVBQTJDO0FBQzNDLDZFQUFxRDtBQUNyRCwyQ0FBbUM7QUFFbkMsZ0VBQTJEO0FBQzNELDJFQUFzRTtBQUN0RSw2RUFBd0U7QUFDeEUsZ0RBQTJDO0FBQzNDLDZEQUF3RDtBQUV4RCxpREFBNEM7QUFJNUMsbUVBQThEO0FBRzlELHVGQUFrRjtBQUNsRiw4REFBeUQ7QUFDekQsc0RBQWlEO0FBQ2pELGtFQUE2RDtBQUc3RCxNQUFhLGlCQUFrQixTQUFRLGVBQUssQ0FBQyxTQUF5QjtJQUVsRSxZQUFZLEtBQWE7UUFDckIsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRWIsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNULElBQUksRUFBRSxLQUFLO1NBQ2QsQ0FBQztJQUVOLENBQUM7SUFHTSxNQUFNO1FBRVQsT0FBTyxDQUVILHVDQUFLLFNBQVMsRUFBQyxXQUFXO1lBRXRCLDhCQUFDLGdCQUFNLElBQUMsS0FBSyxFQUFDLFNBQVMsRUFDZixFQUFFLEVBQUMsc0JBQXNCLEVBQ3pCLElBQUksRUFBQyxJQUFJLEVBQ1QsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUM3QixNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQ3pCLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUNoQyxTQUFTLEVBQUMsV0FBVztnQkFFekIscUNBQUcsU0FBUyxFQUFDLGNBQWMsR0FBRTs7Z0JBSTdCLDhCQUFDLGlDQUFlLE9BQUUsQ0FFYjtZQUVULDhCQUFDLG9CQUFPLElBQUMsT0FBTyxFQUFDLFFBQVEsRUFDaEIsU0FBUyxFQUFDLFFBQVEsRUFDbEIsTUFBTSxF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QUM7UUFDckMsQ0FBQyxDQUFDLENBQUM7SUFFWCxDQUFDO0NBRUo7QUE1SkQsOENBNEpDIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50IHJlYWN0L25vLW11bHRpLWNvbXA6IDAsIHJlYWN0L3Byb3AtdHlwZXM6IDAgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0c3RyYXAvbGliL0J1dHRvbic7XG5pbXBvcnQgUG9wb3ZlckJvZHkgZnJvbSAncmVhY3RzdHJhcC9saWIvUG9wb3ZlckJvZHknO1xuaW1wb3J0IHtQb3BvdmVyfSBmcm9tICdyZWFjdHN0cmFwJztcbmltcG9ydCB7SW52aXRhdGlvblJlcXVlc3R9IGZyb20gJy4vR3JvdXBTaGFyaW5nQ29udHJvbCc7XG5pbXBvcnQge0RvY1JlZnN9IGZyb20gJy4uLy4uL2RhdGFzdG9yZS9zaGFyaW5nL2RiL0RvY1JlZnMnO1xuaW1wb3J0IHtGaXJlYmFzZURhdGFzdG9yZXN9IGZyb20gJy4uLy4uL2RhdGFzdG9yZS9GaXJlYmFzZURhdGFzdG9yZXMnO1xuaW1wb3J0IHtHcm91cERhdGFzdG9yZXN9IGZyb20gJy4uLy4uL2RhdGFzdG9yZS9zaGFyaW5nL0dyb3VwRGF0YXN0b3Jlcyc7XG5pbXBvcnQge1RvYXN0ZXJ9IGZyb20gJy4uL3RvYXN0ZXIvVG9hc3Rlcic7XG5pbXBvcnQge0Ryb3Bkb3duQ2hldnJvbn0gZnJvbSAnLi4vdXRpbC9Ecm9wZG93bkNoZXZyb24nO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge0dyb3VwU2hhcmluZ30gZnJvbSAnLi9Hcm91cFNoYXJpbmcnO1xuaW1wb3J0IHtNZW1iZXJSZWNvcmR9IGZyb20gJy4vR3JvdXBTaGFyaW5nUmVjb3Jkcyc7XG5pbXBvcnQge0RvY30gZnJvbSAnLi4vLi4vbWV0YWRhdGEvRG9jJztcbmltcG9ydCB7RGF0YXN0b3JlQ2FwYWJpbGl0aWVzfSBmcm9tICcuLi8uLi9kYXRhc3RvcmUvRGF0YXN0b3JlJztcbmltcG9ydCB7VXNlclJlZnN9IGZyb20gJy4uLy4uL2RhdGFzdG9yZS9zaGFyaW5nL3JwYy9Vc2VyUmVmcyc7XG5pbXBvcnQge0dyb3VwTWVtYmVyfSBmcm9tICcuLi8uLi9kYXRhc3RvcmUvc2hhcmluZy9kYi9Hcm91cE1lbWJlcnMnO1xuaW1wb3J0IHtHcm91cE1lbWJlckludml0YXRpb259IGZyb20gJy4uLy4uL2RhdGFzdG9yZS9zaGFyaW5nL2RiL0dyb3VwTWVtYmVySW52aXRhdGlvbnMnO1xuaW1wb3J0IHtHcm91cE1lbWJlckRlbGV0ZXN9IGZyb20gJy4uLy4uL2RhdGFzdG9yZS9zaGFyaW5nL3JwYy9Hcm91cE1lbWJlckRlbGV0ZXMnO1xuaW1wb3J0IHtHcm91cHN9IGZyb20gJy4uLy4uL2RhdGFzdG9yZS9zaGFyaW5nL2RiL0dyb3Vwcyc7XG5pbXBvcnQge0ZpcmViYXNlfSBmcm9tICcuLi8uLi9maXJlYmFzZS9GaXJlYmFzZSc7XG5pbXBvcnQge1ByZWNvbmRpdGlvbnN9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvUHJlY29uZGl0aW9ucyc7XG5pbXBvcnQge0NvbnRhY3RPcHRpb25zfSBmcm9tICcuL0NvbnRhY3RPcHRpb25zJztcblxuZXhwb3J0IGNsYXNzIEdyb3VwU2hhcmluZ01vZGFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgb3BlbjogZmFsc2UsXG4gICAgICAgIH07XG5cbiAgICB9XG5cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci0xIG1sLTFcIj5cblxuICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic2hhcmUtY29udHJvbC1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIm1kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLnByb3BzLmRpc2FibGVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGlkZGVuPXt0aGlzLnByb3BzLmhpZGRlbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMudG9nZ2xlKHRydWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGwtMiBwci0yXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNoYXJlXCIvPlxuICAgICAgICAgICAgICAgICAgICAmbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgU2hhcmVcblxuICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25DaGV2cm9uLz5cblxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgPFBvcG92ZXIgdHJpZ2dlcj1cImxlZ2FjeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50PVwiYm90dG9tXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBpc09wZW49e3RoaXMuc3RhdGUub3Blbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGU9eygpID0+IHRoaXMudG9nZ2xlKGZhbHNlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJzaGFyZS1jb250cm9sLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgZmFkZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk9ezB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5XaWR0aDogJzUwMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6ICc4MDBweCdcbiAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cblxuICAgICAgICAgICAgICAgICAgICA8UG9wb3ZlckJvZHkgY2xhc3NOYW1lPVwic2hhZG93XCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcm91cFNoYXJpbmcgZG9jPXt0aGlzLnByb3BzLmRvY31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DYW5jZWw9eygpID0+IHRoaXMudG9nZ2xlKGZhbHNlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25EZWxldGU9e21lbWJlciA9PiB0aGlzLm9uRGVsZXRlKG1lbWJlcil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRG9uZT17KGNvbnRhY3RTZWxlY3Rpb25zKSA9PiB0aGlzLm9uRG9uZShjb250YWN0U2VsZWN0aW9ucyl9Lz5cblxuICAgICAgICAgICAgICAgICAgICA8L1BvcG92ZXJCb2R5PlxuXG4gICAgICAgICAgICAgICAgPC9Qb3BvdmVyPlxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICApO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSB0b2dnbGUob3BlbjogYm9vbGVhbikge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsuLi50aGlzLnN0YXRlLCBvcGVufSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkRvbmUoaW52aXRhdGlvbjogSW52aXRhdGlvblJlcXVlc3QpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJvbkRvbmUuLi5cIik7XG5cbiAgICAgICAgdGhpcy50b2dnbGUoZmFsc2UpO1xuICAgICAgICB0aGlzLnByb3BzLm9uRG9uZSgpO1xuXG4gICAgICAgIHRoaXMuZG9Hcm91cFByb3Zpc2lvbihpbnZpdGF0aW9uKVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBUb2FzdGVyLmVycm9yKFwiQ291bGQgbm90IHByb3Zpc2lvbiBncm91cDogXCIgKyBlcnIubWVzc2FnZSkpO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBkb0dyb3VwUHJvdmlzaW9uKGludml0YXRpb246IEludml0YXRpb25SZXF1ZXN0KSB7XG5cbiAgICAgICAgaWYgKGludml0YXRpb24uY29udGFjdFNlbGVjdGlvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAvLyB0aGVyZSdzIG5vdGhpbmcgdG8gYmUgZG9uZSBzbyBkb24ndCBwcm92aXNpb24gYSBncm91cCB3aXRoIHplcm9cbiAgICAgICAgICAgIC8vIG1lbWJlcnMuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkb2NNZXRhID0gdGhpcy5wcm9wcy5kb2MuZG9jTWV0YTtcbiAgICAgICAgY29uc3QgZmluZ2VycHJpbnQgPSBkb2NNZXRhLmRvY0luZm8uZmluZ2VycHJpbnQ7XG5cbiAgICAgICAgY29uc3QgZG9jSUQgPSBGaXJlYmFzZURhdGFzdG9yZXMuY29tcHV0ZURvY01ldGFJRChmaW5nZXJwcmludCk7XG4gICAgICAgIGNvbnN0IGRvY1JlZiA9IERvY1JlZnMuZnJvbURvY01ldGEoZG9jSUQsIGRvY01ldGEpO1xuXG4gICAgICAgIGNvbnN0IHttZXNzYWdlfSA9IGludml0YXRpb247XG5cbiAgICAgICAgVG9hc3Rlci5pbmZvKFwiU2hhcmluZyBkb2N1bWVudCB3aXRoIHVzZXJzIC4uLiBcIik7XG5cbiAgICAgICAgYXdhaXQgR3JvdXBEYXRhc3RvcmVzLnByb3Zpc2lvbih7XG4gICAgICAgICAgICBrZXk6IGZpbmdlcnByaW50LFxuICAgICAgICAgICAgdmlzaWJpbGl0eTogJ3ByaXZhdGUnLFxuICAgICAgICAgICAgZG9jczogW2RvY1JlZl0sXG4gICAgICAgICAgICBpbnZpdGF0aW9uczoge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgdG86IGludml0YXRpb24uY29udGFjdFNlbGVjdGlvbnNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgVG9hc3Rlci5zdWNjZXNzKFwiRG9jdW1lbnQgc2hhcmVkIHN1Y2Nlc3NmdWxseVwiKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgb25EZWxldGUobWVtYmVyOiBNZW1iZXJSZWNvcmQpIHtcblxuICAgICAgICBjb25zb2xlLmxvZyhcIkRlbGV0aW5nIG1lbWJlcjogXCIsIG1lbWJlcik7XG5cbiAgICAgICAgY29uc3QgdG9Vc2VyUmVmID0gKCkgPT4ge1xuXG4gICAgICAgICAgICBzd2l0Y2ggKG1lbWJlci50eXBlKSB7XG5cbiAgICAgICAgICAgICAgICBjYXNlICdtZW1iZXInOlxuICAgICAgICAgICAgICAgICAgICBjb25zdCBncm91cE1lbWJlciA9IG1lbWJlci52YWx1ZSBhcyBHcm91cE1lbWJlcjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFVzZXJSZWZzLmZyb21Qcm9maWxlSUQoZ3JvdXBNZW1iZXIucHJvZmlsZUlEKTtcbiAgICAgICAgICAgICAgICBjYXNlICdwZW5kaW5nJzpcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZ3JvdXBNZW1iZXJJbnZpdGF0aW9uID0gbWVtYmVyLnZhbHVlIGFzIEdyb3VwTWVtYmVySW52aXRhdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFVzZXJSZWZzLmZyb21FbWFpbChncm91cE1lbWJlckludml0YXRpb24udG8pO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBoYW5kbGUgPSBhc3luYyAoKSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBGaXJlYmFzZS5jdXJyZW50VXNlcigpO1xuICAgICAgICAgICAgUHJlY29uZGl0aW9ucy5hc3NlcnRQcmVzZW50KHVzZXIsICd1c2VyJyk7XG4gICAgICAgICAgICBjb25zdCB1aWQgPSB1c2VyIS51aWQ7XG5cbiAgICAgICAgICAgIGNvbnN0IHtkb2N9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgICAgIGNvbnN0IGZpbmdlcnByaW50ID0gZG9jLmRvY0luZm8uZmluZ2VycHJpbnQ7XG5cbiAgICAgICAgICAgIGNvbnN0IHVzZXJSZWYgPSB0b1VzZXJSZWYoKTtcblxuICAgICAgICAgICAgY29uc3QgZ3JvdXBJRCA9IEdyb3Vwcy5jcmVhdGVJREZvcktleSh1aWQsIGZpbmdlcnByaW50KTtcblxuICAgICAgICAgICAgYXdhaXQgR3JvdXBNZW1iZXJEZWxldGVzLmV4ZWMoe2dyb3VwSUQsIHVzZXJSZWZzOiBbdXNlclJlZl19KTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIGhhbmRsZSgpXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBtc2cgPSBcIkZhaWxlZCB0byBkZWxldGUgdXNlciBmcm9tIGdyb3VwOiBcIjtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKG1zZywgZXJyKTtcbiAgICAgICAgICAgICAgICBUb2FzdGVyLmVycm9yKG1zZyArIGVyci5tZXNzYWdlKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgfVxuXG59XG5cbmludGVyZmFjZSBJUHJvcHMge1xuXG4gICAgcmVhZG9ubHkgZG9jOiBEb2M7XG5cbiAgICByZWFkb25seSBkYXRhc3RvcmVDYXBhYmlsaXRpZXM6IERhdGFzdG9yZUNhcGFiaWxpdGllcztcblxuICAgIHJlYWRvbmx5IG9uRG9uZTogKCkgPT4gdm9pZDtcblxuICAgIHJlYWRvbmx5IGRpc2FibGVkPzogYm9vbGVhbjtcblxuICAgIHJlYWRvbmx5IGhpZGRlbj86IGJvb2xlYW47XG5cbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG5cbiAgICByZWFkb25seSBvcGVuOiBib29sZWFuO1xufVxuIl19