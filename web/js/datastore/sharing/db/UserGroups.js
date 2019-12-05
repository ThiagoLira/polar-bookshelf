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
const Firestore_1 = require("../../../firebase/Firestore");
const Firebase_1 = require("../../../firebase/Firebase");
const Collections_1 = require("./Collections");
const Functions_1 = require("polar-shared/src/util/Functions");
class UserGroups {
    static get(uid) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!uid) {
                const user = yield Firebase_1.Firebase.currentUser();
                if (!user) {
                    return undefined;
                }
                uid = user.uid;
            }
            const firestore = yield Firestore_1.Firestore.getInstance();
            const ref = firestore.collection(this.COLLECTION).doc(uid);
            const doc = yield ref.get();
            return this.fromRaw(doc.data());
        });
    }
    static onSnapshot(handler) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield Firebase_1.Firebase.currentUser();
            if (!user) {
                return Functions_1.NULL_FUNCTION;
            }
            return yield Collections_1.Collections.onDocumentSnapshot(this.COLLECTION, user.uid, userGroupRaw => {
                handler(this.fromRaw(userGroupRaw));
            });
        });
    }
    static hasPermissionForGroup(groupID) {
        return __awaiter(this, void 0, void 0, function* () {
            const userGroup = yield UserGroups.get();
            if (!userGroup) {
                return false;
            }
            if (!userGroup.groups.includes(groupID)) {
                return false;
            }
            if (!userGroup.invitations.includes(groupID)) {
                return false;
            }
            return true;
        });
    }
    static hasAdminForGroup(groupID, userGroup) {
        if (!userGroup) {
            return false;
        }
        if (!userGroup.admin) {
            return false;
        }
        return userGroup.admin.includes(groupID);
    }
    static fromRaw(userGroupRaw) {
        if (userGroupRaw) {
            return {
                uid: userGroupRaw.uid,
                groups: userGroupRaw.groups || [],
                invitations: userGroupRaw.invitations || [],
                admin: userGroupRaw.admin || [],
                moderator: userGroupRaw.moderator || []
            };
        }
        return undefined;
    }
}
exports.UserGroups = UserGroups;
UserGroups.COLLECTION = 'user_group';
class NullUserGroup {
    constructor(uid) {
        this.uid = uid;
        this.groups = [];
        this.invitations = [];
        this.admin = [];
        this.moderator = [];
    }
}
exports.NullUserGroup = NullUserGroup;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlckdyb3Vwcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlVzZXJHcm91cHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQSwyREFBc0Q7QUFFdEQseURBQTBFO0FBQzFFLCtDQUEwQztBQUMxQywrREFBOEQ7QUFFOUQsTUFBYSxVQUFVO0lBSVosTUFBTSxDQUFPLEdBQUcsQ0FBQyxHQUFlOztZQUVuQyxJQUFJLENBQUUsR0FBRyxFQUFFO2dCQUVQLE1BQU0sSUFBSSxHQUFHLE1BQU0sbUJBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFFMUMsSUFBSSxDQUFFLElBQUksRUFBRTtvQkFDUixPQUFPLFNBQVMsQ0FBQztpQkFDcEI7Z0JBRUQsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7YUFFbEI7WUFFRCxNQUFNLFNBQVMsR0FBRyxNQUFNLHFCQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7WUFFaEQsTUFBTSxHQUFHLEdBQUcsU0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzNELE1BQU0sR0FBRyxHQUFHLE1BQU0sR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQzVCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBZ0IsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFFbkQsQ0FBQztLQUFBO0lBRU0sTUFBTSxDQUFPLFVBQVUsQ0FBQyxPQUFvRDs7WUFFL0UsTUFBTSxJQUFJLEdBQUcsTUFBTSxtQkFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBRTFDLElBQUssQ0FBRSxJQUFJLEVBQUU7Z0JBQ1QsT0FBTyx5QkFBYSxDQUFDO2FBQ3hCO1lBRUQsT0FBTyxNQUFNLHlCQUFXLENBQUMsa0JBQWtCLENBQWUsSUFBSSxDQUFDLFVBQVUsRUFDZixJQUFLLENBQUMsR0FBRyxFQUNULFlBQVksQ0FBQyxFQUFFO2dCQUNqRSxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQzVDLENBQUMsQ0FBQyxDQUFDO1FBRVAsQ0FBQztLQUFBO0lBRU0sTUFBTSxDQUFPLHFCQUFxQixDQUFDLE9BQW1COztZQUV6RCxNQUFNLFNBQVMsR0FBRyxNQUFNLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUV6QyxJQUFJLENBQUUsU0FBUyxFQUFFO2dCQUNiLE9BQU8sS0FBSyxDQUFDO2FBQ2hCO1lBRUQsSUFBSSxDQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUN0QyxPQUFPLEtBQUssQ0FBQzthQUNoQjtZQUVELElBQUksQ0FBRSxTQUFTLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDM0MsT0FBTyxLQUFLLENBQUM7YUFDaEI7WUFFRCxPQUFPLElBQUksQ0FBQztRQUVoQixDQUFDO0tBQUE7SUFFTSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBbUIsRUFBRSxTQUFxQjtRQUVyRSxJQUFJLENBQUUsU0FBUyxFQUFFO1lBQ2IsT0FBTyxLQUFLLENBQUM7U0FDaEI7UUFFRCxJQUFJLENBQUUsU0FBUyxDQUFDLEtBQUssRUFBRTtZQUNuQixPQUFPLEtBQUssQ0FBQztTQUNoQjtRQUVELE9BQU8sU0FBUyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFN0MsQ0FBQztJQUdPLE1BQU0sQ0FBQyxPQUFPLENBQUMsWUFBc0M7UUFFekQsSUFBSSxZQUFZLEVBQUU7WUFFZCxPQUFPO2dCQUNILEdBQUcsRUFBRSxZQUFZLENBQUMsR0FBRztnQkFDckIsTUFBTSxFQUFFLFlBQVksQ0FBQyxNQUFNLElBQUksRUFBRTtnQkFDakMsV0FBVyxFQUFFLFlBQVksQ0FBQyxXQUFXLElBQUksRUFBRTtnQkFDM0MsS0FBSyxFQUFFLFlBQVksQ0FBQyxLQUFLLElBQUksRUFBRTtnQkFDL0IsU0FBUyxFQUFFLFlBQVksQ0FBQyxTQUFTLElBQUksRUFBRTthQUMxQyxDQUFDO1NBRUw7UUFFRCxPQUFPLFNBQVMsQ0FBQztJQUVyQixDQUFDOztBQTdGTCxnQ0FnR0M7QUE5RjBCLHFCQUFVLEdBQUcsWUFBWSxDQUFDO0FBbUpyRCxNQUFhLGFBQWE7SUFFdEIsWUFBMEIsR0FBYztRQUFkLFFBQUcsR0FBSCxHQUFHLENBQVc7UUFJeEIsV0FBTSxHQUE4QixFQUFFLENBQUM7UUFFdkMsZ0JBQVcsR0FBOEIsRUFBRSxDQUFDO1FBRTVDLFVBQUssR0FBOEIsRUFBRSxDQUFDO1FBRXRDLGNBQVMsR0FBOEIsRUFBRSxDQUFDO0lBUjFELENBQUM7Q0FVSjtBQWRELHNDQWNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtVc2VySURTdHJ9IGZyb20gJy4vUHJvZmlsZXMnO1xuaW1wb3J0IHtGaXJlc3RvcmV9IGZyb20gJy4uLy4uLy4uL2ZpcmViYXNlL0ZpcmVzdG9yZSc7XG5pbXBvcnQge0dyb3VwSURTdHJ9IGZyb20gJy4uLy4uL0RhdGFzdG9yZSc7XG5pbXBvcnQge0ZpcmViYXNlLCBTbmFwc2hvdFVuc3Vic2NyaWJlcn0gZnJvbSBcIi4uLy4uLy4uL2ZpcmViYXNlL0ZpcmViYXNlXCI7XG5pbXBvcnQge0NvbGxlY3Rpb25zfSBmcm9tIFwiLi9Db2xsZWN0aW9uc1wiO1xuaW1wb3J0IHtOVUxMX0ZVTkNUSU9OfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy91dGlsL0Z1bmN0aW9uc1wiO1xuXG5leHBvcnQgY2xhc3MgVXNlckdyb3VwcyB7XG5cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IENPTExFQ1RJT04gPSAndXNlcl9ncm91cCc7XG5cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGdldCh1aWQ/OiBVc2VySURTdHIpOiBQcm9taXNlPFVzZXJHcm91cCB8IHVuZGVmaW5lZD4ge1xuXG4gICAgICAgIGlmICghIHVpZCkge1xuXG4gICAgICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgRmlyZWJhc2UuY3VycmVudFVzZXIoKTtcblxuICAgICAgICAgICAgaWYgKCEgdXNlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHVpZCA9IHVzZXIudWlkO1xuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBmaXJlc3RvcmUgPSBhd2FpdCBGaXJlc3RvcmUuZ2V0SW5zdGFuY2UoKTtcblxuICAgICAgICBjb25zdCByZWYgPSBmaXJlc3RvcmUuY29sbGVjdGlvbih0aGlzLkNPTExFQ1RJT04pLmRvYyh1aWQpO1xuICAgICAgICBjb25zdCBkb2MgPSBhd2FpdCByZWYuZ2V0KCk7XG4gICAgICAgIHJldHVybiB0aGlzLmZyb21SYXcoPFVzZXJHcm91cFJhdz4gZG9jLmRhdGEoKSk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIG9uU25hcHNob3QoaGFuZGxlcjogKHVzZXJHcm91cHM6IFVzZXJHcm91cCB8IHVuZGVmaW5lZCkgPT4gdm9pZCk6IFByb21pc2U8U25hcHNob3RVbnN1YnNjcmliZXI+IHtcblxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgRmlyZWJhc2UuY3VycmVudFVzZXIoKTtcblxuICAgICAgICBpZiAgKCEgdXNlcikge1xuICAgICAgICAgICAgcmV0dXJuIE5VTExfRlVOQ1RJT047XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYXdhaXQgQ29sbGVjdGlvbnMub25Eb2N1bWVudFNuYXBzaG90PFVzZXJHcm91cFJhdz4odGhpcy5DT0xMRUNUSU9OLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlciEudWlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlckdyb3VwUmF3ID0+IHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyKHRoaXMuZnJvbVJhdyh1c2VyR3JvdXBSYXcpKTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGhhc1Blcm1pc3Npb25Gb3JHcm91cChncm91cElEOiBHcm91cElEU3RyKTogUHJvbWlzZTxib29sZWFuPiB7XG5cbiAgICAgICAgY29uc3QgdXNlckdyb3VwID0gYXdhaXQgVXNlckdyb3Vwcy5nZXQoKTtcblxuICAgICAgICBpZiAoISB1c2VyR3JvdXApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghIHVzZXJHcm91cC5ncm91cHMuaW5jbHVkZXMoZ3JvdXBJRCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghIHVzZXJHcm91cC5pbnZpdGF0aW9ucy5pbmNsdWRlcyhncm91cElEKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGhhc0FkbWluRm9yR3JvdXAoZ3JvdXBJRDogR3JvdXBJRFN0ciwgdXNlckdyb3VwPzogVXNlckdyb3VwKTogYm9vbGVhbiB7XG5cbiAgICAgICAgaWYgKCEgdXNlckdyb3VwKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoISB1c2VyR3JvdXAuYWRtaW4pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1c2VyR3JvdXAuYWRtaW4uaW5jbHVkZXMoZ3JvdXBJRCk7XG5cbiAgICB9XG5cblxuICAgIHByaXZhdGUgc3RhdGljIGZyb21SYXcodXNlckdyb3VwUmF3OiBVc2VyR3JvdXBSYXcgfCB1bmRlZmluZWQpOiBVc2VyR3JvdXAgfCB1bmRlZmluZWQge1xuXG4gICAgICAgIGlmICh1c2VyR3JvdXBSYXcpIHtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1aWQ6IHVzZXJHcm91cFJhdy51aWQsXG4gICAgICAgICAgICAgICAgZ3JvdXBzOiB1c2VyR3JvdXBSYXcuZ3JvdXBzIHx8IFtdLFxuICAgICAgICAgICAgICAgIGludml0YXRpb25zOiB1c2VyR3JvdXBSYXcuaW52aXRhdGlvbnMgfHwgW10sXG4gICAgICAgICAgICAgICAgYWRtaW46IHVzZXJHcm91cFJhdy5hZG1pbiB8fCBbXSxcbiAgICAgICAgICAgICAgICBtb2RlcmF0b3I6IHVzZXJHcm91cFJhdy5tb2RlcmF0b3IgfHwgW11cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG5cbiAgICB9XG5cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVzZXJHcm91cFJhdyB7XG4gICAgLyoqXG4gICAgICogVGhlIFVJRCBmb3IgdGhpcyByZWNvcmQgc28gdGhlIHVzZXIgY2FuIHJlYWQgdGhlaXIgb3duIHZhbHVlcy5cbiAgICAgKi9cbiAgICByZWFkb25seSB1aWQ6IFVzZXJJRFN0cjtcblxuICAgIHJlYWRvbmx5IGdyb3Vwcz86IFJlYWRvbmx5QXJyYXk8R3JvdXBJRFN0cj47XG5cbiAgICByZWFkb25seSBpbnZpdGF0aW9ucz86IFJlYWRvbmx5QXJyYXk8R3JvdXBJRFN0cj47XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZ3JvdXBzIGluIHdoaWNoIHRoZSB1c2VyIGlzIGFuIGFkbWluLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGFkbWluPzogUmVhZG9ubHlBcnJheTxHcm91cElEU3RyPjtcblxuICAgIC8qKlxuICAgICAqIFRoZSBncm91cHMgaW4gd2hpY2ggdGhlIHVzZXIgaXMgYSBtb2RlcmF0b3IuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbW9kZXJhdG9yPzogUmVhZG9ubHlBcnJheTxHcm91cElEU3RyPjtcblxufVxuXG4vKipcbiAqIEp1c3QgbGlrZSB0aGUgVXNlckdyb3VwIGJ1dCBpdCBtaWdodCBiZSBwb3NzaWJsZSBmb3IgdGhlIGJhY2tlbmQgdG8gYmUgbWlzc2luZ1xuICogY2VydGFpbiBmaWVsZHMuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVXNlckdyb3VwSW5pdCB7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgVUlEIGZvciB0aGlzIHJlY29yZCBzbyB0aGUgdXNlciBjYW4gcmVhZCB0aGVpciBvd24gdmFsdWVzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHVpZDogVXNlcklEU3RyO1xuXG4gICAgLyoqXG4gICAgICogQWxsIHRoZSBncm91cHMgdGhpcyB1c2VyIGlzIGEgbWVtYmVyIG9mXG4gICAgICovXG4gICAgcmVhZG9ubHkgZ3JvdXBzOiBSZWFkb25seUFycmF5PEdyb3VwSURTdHI+O1xuXG4gICAgcmVhZG9ubHkgaW52aXRhdGlvbnM6IFJlYWRvbmx5QXJyYXk8R3JvdXBJRFN0cj47XG5cbiAgICByZWFkb25seSBhZG1pbjogUmVhZG9ubHlBcnJheTxHcm91cElEU3RyPjtcblxuICAgIHJlYWRvbmx5IG1vZGVyYXRvcjogUmVhZG9ubHlBcnJheTxHcm91cElEU3RyPjtcblxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlckdyb3VwIGV4dGVuZHMgVXNlckdyb3VwSW5pdCB7XG5cbn1cblxuZXhwb3J0IGNsYXNzIE51bGxVc2VyR3JvdXAgaW1wbGVtZW50cyBVc2VyR3JvdXAge1xuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyB1aWQ6IFVzZXJJRFN0cikge1xuXG4gICAgfVxuXG4gICAgcHVibGljIHJlYWRvbmx5IGdyb3VwczogUmVhZG9ubHlBcnJheTxHcm91cElEU3RyPiA9IFtdO1xuXG4gICAgcHVibGljIHJlYWRvbmx5IGludml0YXRpb25zOiBSZWFkb25seUFycmF5PEdyb3VwSURTdHI+ID0gW107XG5cbiAgICBwdWJsaWMgcmVhZG9ubHkgYWRtaW46IFJlYWRvbmx5QXJyYXk8R3JvdXBJRFN0cj4gPSBbXTtcblxuICAgIHB1YmxpYyByZWFkb25seSBtb2RlcmF0b3I6IFJlYWRvbmx5QXJyYXk8R3JvdXBJRFN0cj4gPSBbXTtcblxufVxuIl19