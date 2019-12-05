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
const GroupMembers_1 = require("../../datastore/sharing/db/GroupMembers");
const GroupMemberInvitations_1 = require("../../datastore/sharing/db/GroupMemberInvitations");
const Groups_1 = require("../../datastore/sharing/db/Groups");
const Profiles_1 = require("../../datastore/sharing/db/Profiles");
const Optional_1 = require("polar-shared/src/util/ts/Optional");
const Promises_1 = require("../../util/Promises");
const Contacts_1 = require("../../datastore/sharing/db/Contacts");
const UserGroups_1 = require("../../datastore/sharing/db/UserGroups");
const Logger_1 = require("polar-shared/src/logger/Logger");
const UserGroupMembership_1 = require("../../datastore/sharing/db/UserGroupMembership");
const log = Logger_1.Logger.create();
class GroupSharingRecords {
    static fetch(groupID, contactsHandler, membersHandler, groupsHandler, errorHandler) {
        let members = [];
        const getGroupMemberInvitations = () => __awaiter(this, void 0, void 0, function* () {
            const profile = yield Profiles_1.Profiles.currentProfile();
            if (!profile) {
                log.warn("No current user profile");
                return [];
            }
            const records = yield GroupMemberInvitations_1.GroupMemberInvitations.listByGroupIDAndProfileID(groupID, profile.id);
            return records.map(current => {
                return {
                    id: current.id,
                    label: current.to,
                    created: current.created,
                    type: 'pending',
                    value: current
                };
            });
        });
        const getGroupMembers = () => __awaiter(this, void 0, void 0, function* () {
            const records = yield GroupMembers_1.GroupMembers.list(groupID);
            const memberRecordInits = records.map(current => {
                return {
                    id: current.id,
                    profileID: current.profileID,
                    label: current.profileID,
                    created: current.created,
                    type: 'member',
                    value: current
                };
            });
            const resolvedProfiles = yield Profiles_1.Profiles.resolve(memberRecordInits);
            return resolvedProfiles.map(current => {
                const [memberRecordInit, profile] = current;
                if (profile) {
                    return Object.assign(Object.assign({}, memberRecordInit), { label: profile.name || profile.handle || "unnamed", image: Optional_1.Optional.of(profile.image).getOrUndefined() });
                }
                else {
                    return memberRecordInit;
                }
            });
        });
        const fireMembersHandler = (newMembers) => {
            members = [...members, ...newMembers].sort((a, b) => a.label.localeCompare(b.label));
            membersHandler(members);
        };
        const doHandleMembership = () => __awaiter(this, void 0, void 0, function* () {
            if (!(yield UserGroups_1.UserGroups.hasPermissionForGroup(groupID))) {
                return;
            }
            const group = yield Groups_1.Groups.get(groupID);
            if (group) {
                const promises = [
                    getGroupMembers(),
                    getGroupMemberInvitations()
                ].map(current => {
                    const handler = () => __awaiter(this, void 0, void 0, function* () {
                        fireMembersHandler(yield current);
                    });
                    return handler();
                });
                Promises_1.Promises.executeInBackground(promises, err => errorHandler(err));
            }
        });
        const doHandleContacts = () => __awaiter(this, void 0, void 0, function* () {
            const contacts = yield Contacts_1.Contacts.list();
            const resolvedProfiles = yield Profiles_1.Profiles.resolve(contacts);
            const contactProfiles = resolvedProfiles.map(current => {
                const [contact, profile] = current;
                return { contact, profile };
            });
            contactsHandler(contactProfiles);
        });
        const doHandleGroups = () => __awaiter(this, void 0, void 0, function* () {
            const groups = yield UserGroupMembership_1.UserGroupMembership.get();
            groupsHandler(groups);
        });
        const doHandle = () => __awaiter(this, void 0, void 0, function* () {
            yield Promise.all([
                doHandleContacts(),
                doHandleMembership(),
                doHandleGroups()
            ]);
        });
        doHandle()
            .catch(err => errorHandler(err));
    }
}
exports.GroupSharingRecords = GroupSharingRecords;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JvdXBTaGFyaW5nUmVjb3Jkcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkdyb3VwU2hhcmluZ1JlY29yZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQSwwRUFBcUU7QUFFckUsOEZBQXlGO0FBR3pGLDhEQUFnRTtBQUNoRSxrRUFBNkQ7QUFDN0QsZ0VBQTJEO0FBQzNELGtEQUE2QztBQUM3QyxrRUFBNkQ7QUFHN0Qsc0VBQWlFO0FBQ2pFLDJEQUFzRDtBQUN0RCx3RkFBbUY7QUFFbkYsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLE1BQWEsbUJBQW1CO0lBRXJCLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBZSxFQUNmLGVBQWtFLEVBQ2xFLGNBQThELEVBQzlELGFBQXFELEVBQ3JELFlBQWtDO1FBRWxELElBQUksT0FBTyxHQUFtQixFQUFFLENBQUM7UUFLakMsTUFBTSx5QkFBeUIsR0FBRyxHQUErQyxFQUFFO1lBRS9FLE1BQU0sT0FBTyxHQUFHLE1BQU0sbUJBQVEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUVoRCxJQUFJLENBQUUsT0FBTyxFQUFFO2dCQUNYLEdBQUcsQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQztnQkFDcEMsT0FBTyxFQUFFLENBQUM7YUFDYjtZQUVELE1BQU0sT0FBTyxHQUNQLE1BQU0sK0NBQXNCLENBQUMseUJBQXlCLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUVsRixPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBRXpCLE9BQU87b0JBQ0gsRUFBRSxFQUFFLE9BQU8sQ0FBQyxFQUFFO29CQUNkLEtBQUssRUFBRSxPQUFPLENBQUMsRUFBRTtvQkFDakIsT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPO29CQUN4QixJQUFJLEVBQUUsU0FBUztvQkFDZixLQUFLLEVBQUUsT0FBTztpQkFD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QUFlLEdBQUcsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUVuRCxNQUFNLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxHQUFHLE9BQU8sQ0FBQztnQkFFbkMsT0FBTyxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUMsQ0FBQztZQUU5QixDQUFDLENBQUMsQ0FBQztZQUVILGVBQWUsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUVyQyxDQUFDLENBQUEsQ0FBQztRQUVGLE1BQU0sY0FBYyxHQUFHLEdBQVMsRUFBRTtZQUM5QixNQUFNLE1BQU0sR0FBRyxNQUFNLHlDQUFtQixDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQy9DLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQixDQUFDLENBQUEsQ0FBQztRQUVGLE1BQU0sUUFBUSxHQUFHLEdBQVMsRUFBRTtZQUV4QixNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUM7Z0JBQ2QsZ0JBQWdCLEVBQUU7Z0JBQ2xCLGtCQUFrQixFQUFFO2dCQUNwQixjQUFjLEVBQUU7YUFDbkIsQ0FBQyxDQUFDO1FBRVAsQ0FBQyxDQUFBLENBQUM7UUFFRixRQUFRLEVBQUU7YUFDTCxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUV6QyxDQUFDO0NBRUo7QUExSkQsa0RBMEpDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtHcm91cE1lbWJlcn0gZnJvbSAnLi4vLi4vZGF0YXN0b3JlL3NoYXJpbmcvZGIvR3JvdXBNZW1iZXJzJztcbmltcG9ydCB7R3JvdXBNZW1iZXJzfSBmcm9tICcuLi8uLi9kYXRhc3RvcmUvc2hhcmluZy9kYi9Hcm91cE1lbWJlcnMnO1xuaW1wb3J0IHtHcm91cE1lbWJlckludml0YXRpb259IGZyb20gJy4uLy4uL2RhdGFzdG9yZS9zaGFyaW5nL2RiL0dyb3VwTWVtYmVySW52aXRhdGlvbnMnO1xuaW1wb3J0IHtHcm91cE1lbWJlckludml0YXRpb25zfSBmcm9tICcuLi8uLi9kYXRhc3RvcmUvc2hhcmluZy9kYi9Hcm91cE1lbWJlckludml0YXRpb25zJztcbmltcG9ydCB7SVNPRGF0ZVRpbWVTdHJpbmd9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbWV0YWRhdGEvSVNPRGF0ZVRpbWVTdHJpbmdzJztcbmltcG9ydCB7SW1hZ2V9IGZyb20gJy4uLy4uL2RhdGFzdG9yZS9zaGFyaW5nL2RiL0ltYWdlcyc7XG5pbXBvcnQge0dyb3VwLCBHcm91cHN9IGZyb20gJy4uLy4uL2RhdGFzdG9yZS9zaGFyaW5nL2RiL0dyb3Vwcyc7XG5pbXBvcnQge1Byb2ZpbGVzfSBmcm9tICcuLi8uLi9kYXRhc3RvcmUvc2hhcmluZy9kYi9Qcm9maWxlcyc7XG5pbXBvcnQge09wdGlvbmFsfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvdHMvT3B0aW9uYWwnO1xuaW1wb3J0IHtQcm9taXNlc30gZnJvbSAnLi4vLi4vdXRpbC9Qcm9taXNlcyc7XG5pbXBvcnQge0NvbnRhY3RzfSBmcm9tICcuLi8uLi9kYXRhc3RvcmUvc2hhcmluZy9kYi9Db250YWN0cyc7XG5pbXBvcnQge0NvbnRhY3R9IGZyb20gJy4uLy4uL2RhdGFzdG9yZS9zaGFyaW5nL2RiL0NvbnRhY3RzJztcbmltcG9ydCB7UHJvZmlsZX0gZnJvbSAnLi4vLi4vZGF0YXN0b3JlL3NoYXJpbmcvZGIvUHJvZmlsZXMnO1xuaW1wb3J0IHtVc2VyR3JvdXBzfSBmcm9tIFwiLi4vLi4vZGF0YXN0b3JlL3NoYXJpbmcvZGIvVXNlckdyb3Vwc1wiO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL2xvZ2dlci9Mb2dnZXJcIjtcbmltcG9ydCB7VXNlckdyb3VwTWVtYmVyc2hpcH0gZnJvbSBcIi4uLy4uL2RhdGFzdG9yZS9zaGFyaW5nL2RiL1VzZXJHcm91cE1lbWJlcnNoaXBcIjtcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG5leHBvcnQgY2xhc3MgR3JvdXBTaGFyaW5nUmVjb3JkcyB7XG5cbiAgICBwdWJsaWMgc3RhdGljIGZldGNoKGdyb3VwSUQ6IHN0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhY3RzSGFuZGxlcjogKGNvbnRhY3RzOiBSZWFkb25seUFycmF5PENvbnRhY3RQcm9maWxlPikgPT4gdm9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lbWJlcnNIYW5kbGVyOiAobWVtYmVyczogUmVhZG9ubHlBcnJheTxNZW1iZXJSZWNvcmQ+KSA9PiB2b2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBzSGFuZGxlcjogKGdyb3VwczogUmVhZG9ubHlBcnJheTxHcm91cD4pID0+IHZvaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvckhhbmRsZXI6IChlcnI6IEVycm9yKSA9PiB2b2lkKSB7XG5cbiAgICAgICAgbGV0IG1lbWJlcnM6IE1lbWJlclJlY29yZFtdID0gW107XG5cbiAgICAgICAgLy8gVE9ETzogdGhlc2UgaGF2ZSB0byBiZSBzbmFwc2hvdHMgYmVjYXVzZSBJJ20gZ29pbmcgdG8gYmUgZGVsZXRpbmdcbiAgICAgICAgLy8gZnJvbSB0aGUgbWVtYmVycyBhbmQgdGhlIFVJIG5lZWRzIHRvIHVwZGF0ZS4uLlxuXG4gICAgICAgIGNvbnN0IGdldEdyb3VwTWVtYmVySW52aXRhdGlvbnMgPSBhc3luYyAoKTogUHJvbWlzZTxSZWFkb25seUFycmF5PE1lbWJlclJlY29yZD4+ID0+IHtcblxuICAgICAgICAgICAgY29uc3QgcHJvZmlsZSA9IGF3YWl0IFByb2ZpbGVzLmN1cnJlbnRQcm9maWxlKCk7XG5cbiAgICAgICAgICAgIGlmICghIHByb2ZpbGUpIHtcbiAgICAgICAgICAgICAgICBsb2cud2FybihcIk5vIGN1cnJlbnQgdXNlciBwcm9maWxlXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgcmVjb3Jkc1xuICAgICAgICAgICAgICAgID0gYXdhaXQgR3JvdXBNZW1iZXJJbnZpdGF0aW9ucy5saXN0QnlHcm91cElEQW5kUHJvZmlsZUlEKGdyb3VwSUQsIHByb2ZpbGUuaWQpO1xuXG4gICAgICAgICAgICByZXR1cm4gcmVjb3Jkcy5tYXAoY3VycmVudCA9PiB7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBpZDogY3VycmVudC5pZCxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGN1cnJlbnQudG8sXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZWQ6IGN1cnJlbnQuY3JlYXRlZCxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3BlbmRpbmcnLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogY3VycmVudFxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgZ2V0R3JvdXBNZW1iZXJzID0gYXN5bmMgKCk6IFByb21pc2U8UmVhZG9ubHlBcnJheTxNZW1iZXJSZWNvcmQ+PiA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IHJlY29yZHMgPSBhd2FpdCBHcm91cE1lbWJlcnMubGlzdChncm91cElEKTtcblxuICAgICAgICAgICAgY29uc3QgbWVtYmVyUmVjb3JkSW5pdHM6IE1lbWJlclJlY29yZFdpdGhQcm9maWxlW10gPSByZWNvcmRzLm1hcChjdXJyZW50ID0+IHtcblxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBjdXJyZW50LmlkLFxuICAgICAgICAgICAgICAgICAgICBwcm9maWxlSUQ6IGN1cnJlbnQucHJvZmlsZUlELFxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIGlzIHVnbHkgYnV0IHdlJ3JlIGdvaW5nIHRvIHJlcGxhY2UgaXQgYmVsb3cuXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBjdXJyZW50LnByb2ZpbGVJRCxcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlZDogY3VycmVudC5jcmVhdGVkLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnbWVtYmVyJyxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGN1cnJlbnRcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc3QgcmVzb2x2ZWRQcm9maWxlcyA9IGF3YWl0IFByb2ZpbGVzLnJlc29sdmUobWVtYmVyUmVjb3JkSW5pdHMpO1xuXG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZWRQcm9maWxlcy5tYXAoY3VycmVudCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgW21lbWJlclJlY29yZEluaXQgLCBwcm9maWxlXSA9IGN1cnJlbnQ7XG5cbiAgICAgICAgICAgICAgICBpZiAocHJvZmlsZSkge1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5tZW1iZXJSZWNvcmRJbml0LFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IHByb2ZpbGUubmFtZSB8fCBwcm9maWxlLmhhbmRsZSB8fCBcInVubmFtZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlOiBPcHRpb25hbC5vZihwcm9maWxlLmltYWdlKS5nZXRPclVuZGVmaW5lZCgpXG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWVtYmVyUmVjb3JkSW5pdDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgZmlyZU1lbWJlcnNIYW5kbGVyID0gKG5ld01lbWJlcnM6IFJlYWRvbmx5QXJyYXk8TWVtYmVyUmVjb3JkPikgPT4ge1xuXG4gICAgICAgICAgICBtZW1iZXJzID0gWy4uLm1lbWJlcnMsIC4uLm5ld01lbWJlcnNdLnNvcnQoKGEsIGIpID0+IGEubGFiZWwubG9jYWxlQ29tcGFyZShiLmxhYmVsKSk7XG4gICAgICAgICAgICBtZW1iZXJzSGFuZGxlcihtZW1iZXJzKTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGRvSGFuZGxlTWVtYmVyc2hpcCA9IGFzeW5jICgpID0+IHtcblxuICAgICAgICAgICAgaWYgKCEgYXdhaXQgVXNlckdyb3Vwcy5oYXNQZXJtaXNzaW9uRm9yR3JvdXAoZ3JvdXBJRCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGdyb3VwID0gYXdhaXQgR3JvdXBzLmdldChncm91cElEKTtcblxuICAgICAgICAgICAgaWYgKGdyb3VwKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBwcm9taXNlcyA9IFtcbiAgICAgICAgICAgICAgICAgICAgZ2V0R3JvdXBNZW1iZXJzKCksXG4gICAgICAgICAgICAgICAgICAgIGdldEdyb3VwTWVtYmVySW52aXRhdGlvbnMoKVxuICAgICAgICAgICAgICAgIF0ubWFwKGN1cnJlbnQgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIG5vdyBmb3IgZWFjaCBvbmUgd2UgaGF2ZSB0byBjYWxsIHRoZSBoYW5kbGVyIHRvIG1lcmdlXG4gICAgICAgICAgICAgICAgICAgIC8vIGFuZCBmaXJlIHRoZSBtZW1iZXIgcmVjb3Jkcy5cblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBoYW5kbGVyID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlyZU1lbWJlcnNIYW5kbGVyKGF3YWl0IGN1cnJlbnQpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBoYW5kbGVyKCk7XG5cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIFByb21pc2VzLmV4ZWN1dGVJbkJhY2tncm91bmQocHJvbWlzZXMsIGVyciA9PiBlcnJvckhhbmRsZXIoZXJyKSk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGRvSGFuZGxlQ29udGFjdHMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb250YWN0cyA9IGF3YWl0IENvbnRhY3RzLmxpc3QoKTtcblxuICAgICAgICAgICAgY29uc3QgcmVzb2x2ZWRQcm9maWxlcyA9IGF3YWl0IFByb2ZpbGVzLnJlc29sdmUoY29udGFjdHMpO1xuXG4gICAgICAgICAgICBjb25zdCBjb250YWN0UHJvZmlsZXMgPSByZXNvbHZlZFByb2ZpbGVzLm1hcChjdXJyZW50ID0+IHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IFtjb250YWN0LCBwcm9maWxlXSA9IGN1cnJlbnQ7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4ge2NvbnRhY3QsIHByb2ZpbGV9O1xuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29udGFjdHNIYW5kbGVyKGNvbnRhY3RQcm9maWxlcyk7XG5cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBkb0hhbmRsZUdyb3VwcyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGdyb3VwcyA9IGF3YWl0IFVzZXJHcm91cE1lbWJlcnNoaXAuZ2V0KCk7XG4gICAgICAgICAgICBncm91cHNIYW5kbGVyKGdyb3Vwcyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgZG9IYW5kbGUgPSBhc3luYyAoKSA9PiB7XG5cbiAgICAgICAgICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICBkb0hhbmRsZUNvbnRhY3RzKCksXG4gICAgICAgICAgICAgICAgZG9IYW5kbGVNZW1iZXJzaGlwKCksXG4gICAgICAgICAgICAgICAgZG9IYW5kbGVHcm91cHMoKVxuICAgICAgICAgICAgXSk7XG5cbiAgICAgICAgfTtcblxuICAgICAgICBkb0hhbmRsZSgpXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IGVycm9ySGFuZGxlcihlcnIpKTtcblxuICAgIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1lbWJlclJlY29yZCB7XG5cbiAgICByZWFkb25seSBpZDogc3RyaW5nO1xuICAgIHJlYWRvbmx5IGxhYmVsOiBzdHJpbmc7XG4gICAgcmVhZG9ubHkgdHlwZTogJ21lbWJlcicgfCAncGVuZGluZyc7XG4gICAgcmVhZG9ubHkgdmFsdWU6IEdyb3VwTWVtYmVyIHwgR3JvdXBNZW1iZXJJbnZpdGF0aW9uO1xuICAgIHJlYWRvbmx5IGNyZWF0ZWQ6IElTT0RhdGVUaW1lU3RyaW5nO1xuICAgIHJlYWRvbmx5IGltYWdlPzogSW1hZ2U7XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBNZW1iZXJSZWNvcmRXaXRoUHJvZmlsZSBleHRlbmRzIE1lbWJlclJlY29yZCB7XG5cbiAgICByZWFkb25seSBwcm9maWxlSUQ6IHN0cmluZztcblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbnRhY3RQcm9maWxlIHtcbiAgICByZWFkb25seSBjb250YWN0OiBDb250YWN0O1xuICAgIHJlYWRvbmx5IHByb2ZpbGU/OiBQcm9maWxlO1xufVxuIl19