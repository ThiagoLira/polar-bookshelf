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
const Firebase_1 = require("../../../firebase/Firebase");
const Collections_1 = require("./Collections");
const Preconditions_1 = require("polar-shared/src/Preconditions");
const Logger_1 = require("polar-shared/src/logger/Logger");
const log = Logger_1.Logger.create();
class GroupMemberInvitations {
    static list() {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield Firebase_1.Firebase.currentUser();
            Preconditions_1.Preconditions.assertPresent(user, 'user');
            return yield Collections_1.Collections.list(this.COLLECTION, [['to', '==', user.email]]);
        });
    }
    static listByGroupID(groupID) {
        return __awaiter(this, void 0, void 0, function* () {
            const clauses = [
                ['groupID', '==', groupID],
            ];
            return yield Collections_1.Collections.list(this.COLLECTION, clauses);
        });
    }
    static listByGroupIDAndProfileID(groupID, profileID) {
        return __awaiter(this, void 0, void 0, function* () {
            const clauses = [
                ['groupID', '==', groupID],
                ['from.profileID', '==', profileID]
            ];
            return yield Collections_1.Collections.list(this.COLLECTION, clauses);
        });
    }
    static onSnapshot(delegate) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield Firebase_1.Firebase.currentUser();
            if (!user) {
                log.warn("No user. No notifications will be delivered");
                return;
            }
            return yield Collections_1.Collections.onQuerySnapshot(this.COLLECTION, [['to', '==', user.email]], delegate);
        });
    }
    static purge() {
        return __awaiter(this, void 0, void 0, function* () {
            yield Collections_1.Collections.deleteByID(this.COLLECTION, () => this.list());
        });
    }
}
exports.GroupMemberInvitations = GroupMemberInvitations;
GroupMemberInvitations.COLLECTION = 'group_member_invitation';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JvdXBNZW1iZXJJbnZpdGF0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkdyb3VwTWVtYmVySW52aXRhdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFJQSx5REFBb0Q7QUFHcEQsK0NBQTBEO0FBQzFELGtFQUE2RDtBQUU3RCwyREFBc0Q7QUFFdEQsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLE1BQWEsc0JBQXNCO0lBSXhCLE1BQU0sQ0FBTyxJQUFJOztZQUVwQixNQUFNLElBQUksR0FBRyxNQUFNLG1CQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDMUMsNkJBQWEsQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQzFDLE9BQU8sTUFBTSx5QkFBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUcsSUFBSSxFQUFFLElBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFakYsQ0FBQztLQUFBO0lBRU0sTUFBTSxDQUFPLGFBQWEsQ0FBQyxPQUFtQjs7WUFFakQsTUFBTSxPQUFPLEdBQWE7Z0JBQ3RCLENBQUMsU0FBUyxFQUFHLElBQUksRUFBRSxPQUFPLENBQUM7YUFDOUIsQ0FBQztZQUVGLE9BQU8sTUFBTSx5QkFBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRTVELENBQUM7S0FBQTtJQUVNLE1BQU0sQ0FBTyx5QkFBeUIsQ0FBQyxPQUFtQixFQUNuQixTQUF1Qjs7WUFFakUsTUFBTSxPQUFPLEdBQWE7Z0JBQ3RCLENBQUMsU0FBUyxFQUFHLElBQUksRUFBRSxPQUFPLENBQUM7Z0JBQzNCLENBQUMsZ0JBQWdCLEVBQUcsSUFBSSxFQUFFLFNBQVMsQ0FBQzthQUN2QyxDQUFDO1lBRUYsT0FBTyxNQUFNLHlCQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFNUQsQ0FBQztLQUFBO0lBRU0sTUFBTSxDQUFPLFVBQVUsQ0FBQyxRQUFxRTs7WUFFaEcsTUFBTSxJQUFJLEdBQUcsTUFBTSxtQkFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBRTFDLElBQUksQ0FBRSxJQUFJLEVBQUU7Z0JBRVIsR0FBRyxDQUFDLElBQUksQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDO2dCQUN4RCxPQUFPO2FBQ1Y7WUFFRCxPQUFPLE1BQU0seUJBQVcsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUVyRyxDQUFDO0tBQUE7SUFFTSxNQUFNLENBQU8sS0FBSzs7WUFDckIsTUFBTSx5QkFBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3JFLENBQUM7S0FBQTs7QUFsREwsd0RBb0RDO0FBbEQwQixpQ0FBVSxHQUFHLHlCQUF5QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJU09EYXRlVGltZVN0cmluZ30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9tZXRhZGF0YS9JU09EYXRlVGltZVN0cmluZ3MnO1xuaW1wb3J0IHtHcm91cElEU3RyfSBmcm9tICcuLi8uLi9EYXRhc3RvcmUnO1xuaW1wb3J0IHtFbWFpbFN0cn0gZnJvbSAnLi9Qcm9maWxlcyc7XG5pbXBvcnQge1Byb2ZpbGVJRFN0cn0gZnJvbSAnLi9Qcm9maWxlcyc7XG5pbXBvcnQge0ZpcmViYXNlfSBmcm9tICcuLi8uLi8uLi9maXJlYmFzZS9GaXJlYmFzZSc7XG5pbXBvcnQge0RvY1JlZn0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9ncm91cHMvRG9jUmVmJztcbmltcG9ydCB7SW1hZ2V9IGZyb20gJy4vSW1hZ2VzJztcbmltcG9ydCB7Q29sbGVjdGlvbnMsIERvY3VtZW50Q2hhbmdlfSBmcm9tICcuL0NvbGxlY3Rpb25zJztcbmltcG9ydCB7UHJlY29uZGl0aW9uc30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9QcmVjb25kaXRpb25zJztcbmltcG9ydCB7Q2xhdXNlfSBmcm9tICcuL0NvbGxlY3Rpb25zJztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL2xvZ2dlci9Mb2dnZXInO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbmV4cG9ydCBjbGFzcyBHcm91cE1lbWJlckludml0YXRpb25zIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQ09MTEVDVElPTiA9ICdncm91cF9tZW1iZXJfaW52aXRhdGlvbic7XG5cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGxpc3QoKTogUHJvbWlzZTxSZWFkb25seUFycmF5PEdyb3VwTWVtYmVySW52aXRhdGlvbj4+IHtcblxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgRmlyZWJhc2UuY3VycmVudFVzZXIoKTtcbiAgICAgICAgUHJlY29uZGl0aW9ucy5hc3NlcnRQcmVzZW50KHVzZXIsICd1c2VyJyk7XG4gICAgICAgIHJldHVybiBhd2FpdCBDb2xsZWN0aW9ucy5saXN0KHRoaXMuQ09MTEVDVElPTiwgW1sndG8nICwgJz09JywgdXNlciEuZW1haWxdXSk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGxpc3RCeUdyb3VwSUQoZ3JvdXBJRDogR3JvdXBJRFN0cik6IFByb21pc2U8UmVhZG9ubHlBcnJheTxHcm91cE1lbWJlckludml0YXRpb24+PiB7XG5cbiAgICAgICAgY29uc3QgY2xhdXNlczogQ2xhdXNlW10gPSBbXG4gICAgICAgICAgICBbJ2dyb3VwSUQnICwgJz09JywgZ3JvdXBJRF0sXG4gICAgICAgIF07XG5cbiAgICAgICAgcmV0dXJuIGF3YWl0IENvbGxlY3Rpb25zLmxpc3QodGhpcy5DT0xMRUNUSU9OLCBjbGF1c2VzKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgbGlzdEJ5R3JvdXBJREFuZFByb2ZpbGVJRChncm91cElEOiBHcm91cElEU3RyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9maWxlSUQ6IFByb2ZpbGVJRFN0cik6IFByb21pc2U8UmVhZG9ubHlBcnJheTxHcm91cE1lbWJlckludml0YXRpb24+PiB7XG5cbiAgICAgICAgY29uc3QgY2xhdXNlczogQ2xhdXNlW10gPSBbXG4gICAgICAgICAgICBbJ2dyb3VwSUQnICwgJz09JywgZ3JvdXBJRF0sXG4gICAgICAgICAgICBbJ2Zyb20ucHJvZmlsZUlEJyAsICc9PScsIHByb2ZpbGVJRF1cbiAgICAgICAgXTtcblxuICAgICAgICByZXR1cm4gYXdhaXQgQ29sbGVjdGlvbnMubGlzdCh0aGlzLkNPTExFQ1RJT04sIGNsYXVzZXMpO1xuXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBvblNuYXBzaG90KGRlbGVnYXRlOiAoaW52aXRhdGlvbnM6IFJlYWRvbmx5QXJyYXk8R3JvdXBNZW1iZXJJbnZpdGF0aW9uPikgPT4gdm9pZCkge1xuXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBGaXJlYmFzZS5jdXJyZW50VXNlcigpO1xuXG4gICAgICAgIGlmICghIHVzZXIpIHtcbiAgICAgICAgICAgIC8vIG5vIGN1cnJlbnQgdXNlciBzbyB0aGVyZSdzIG5vdGhpbmcgd2UgY2FuIGRvIHlldC5cbiAgICAgICAgICAgIGxvZy53YXJuKFwiTm8gdXNlci4gTm8gbm90aWZpY2F0aW9ucyB3aWxsIGJlIGRlbGl2ZXJlZFwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhd2FpdCBDb2xsZWN0aW9ucy5vblF1ZXJ5U25hcHNob3QodGhpcy5DT0xMRUNUSU9OLCBbWyd0bycsICc9PScsIHVzZXIhLmVtYWlsXV0sIGRlbGVnYXRlKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgcHVyZ2UoKSB7XG4gICAgICAgIGF3YWl0IENvbGxlY3Rpb25zLmRlbGV0ZUJ5SUQodGhpcy5DT0xMRUNUSU9OLCAoKSA9PiB0aGlzLmxpc3QoKSk7XG4gICAgfVxuXG59XG5cblxuZXhwb3J0IGludGVyZmFjZSBHcm91cE1lbWJlckludml0YXRpb25Jbml0IHtcblxuICAgIHJlYWRvbmx5IGdyb3VwSUQ6IEdyb3VwSURTdHI7XG5cbiAgICByZWFkb25seSB0bzogRW1haWxTdHI7XG5cbiAgICByZWFkb25seSBtZXNzYWdlOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBXZSBoYXZlIHRvIGtlZXAgdGhlIHNlbmRlciBzbyB0aGF0IHdoZW4gd2UgZ28gdG8gYWNjZXB0IHRoZSBkb2Mgd2VcbiAgICAgKiBhY3R1YWxseSBrbm93IHdobyBpdCdzIGZyb20uXG4gICAgICovXG4gICAgcmVhZG9ubHkgZnJvbTogU2VuZGVyO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGFjdHVhbCBEb2NJRCB3ZSdyZSB3b3JraW5nIHdpdGguXG4gICAgICovXG4gICAgcmVhZG9ubHkgZG9jczogUmVhZG9ubHlBcnJheTxEb2NSZWY+O1xuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3JvdXBNZW1iZXJJbnZpdGF0aW9uIGV4dGVuZHMgR3JvdXBNZW1iZXJJbnZpdGF0aW9uSW5pdCB7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgSUQgZm9yIHRoaXMgZW50cnkuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaWQ6IHN0cmluZztcblxuICAgIHJlYWRvbmx5IGNyZWF0ZWQ6IElTT0RhdGVUaW1lU3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNlbmRlciB7XG5cbiAgICByZWFkb25seSBwcm9maWxlSUQ6IFByb2ZpbGVJRFN0cjtcblxuICAgIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcblxuICAgIHJlYWRvbmx5IGVtYWlsPzogc3RyaW5nO1xuXG4gICAgcmVhZG9ubHkgaW1hZ2U6IEltYWdlIHwgbnVsbDtcblxufVxuXG4iXX0=