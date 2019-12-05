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
class Contacts {
    static list() {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield Firebase_1.Firebase.currentUser();
            const { uid } = Preconditions_1.Preconditions.assertPresent(user, 'user');
            return yield Collections_1.Collections.list(this.COLLECTION, [['uid', '==', uid]]);
        });
    }
    static onSnapshot(delegate) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield Firebase_1.Firebase.currentUser();
            const { uid } = Preconditions_1.Preconditions.assertPresent(user, 'user');
            return yield Collections_1.Collections.onQuerySnapshotChanges(this.COLLECTION, [['uid', '==', uid]], delegate);
        });
    }
    static purge() {
        return __awaiter(this, void 0, void 0, function* () {
            yield Collections_1.Collections.deleteByID(this.COLLECTION, () => this.list());
        });
    }
}
exports.Contacts = Contacts;
Contacts.COLLECTION = 'contact';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGFjdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJDb250YWN0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUVBLHlEQUFvRDtBQUNwRCwrQ0FBMEQ7QUFDMUQsa0VBQTZEO0FBRTdELE1BQWEsUUFBUTtJQUlWLE1BQU0sQ0FBTyxJQUFJOztZQUVwQixNQUFNLElBQUksR0FBRyxNQUFNLG1CQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDMUMsTUFBTSxFQUFDLEdBQUcsRUFBQyxHQUFHLDZCQUFhLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztZQUV4RCxPQUFPLE1BQU0seUJBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFHLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFMUUsQ0FBQztLQUFBO0lBRU0sTUFBTSxDQUFPLFVBQVUsQ0FBQyxRQUFtRTs7WUFFOUYsTUFBTSxJQUFJLEdBQUcsTUFBTSxtQkFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQzFDLE1BQU0sRUFBQyxHQUFHLEVBQUMsR0FBRyw2QkFBYSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFFeEQsT0FBTyxNQUFNLHlCQUFXLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFHLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRXRHLENBQUM7S0FBQTtJQUtNLE1BQU0sQ0FBTyxLQUFLOztZQUNyQixNQUFNLHlCQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDckUsQ0FBQztLQUFBOztBQTNCTCw0QkE2QkM7QUEzQjBCLG1CQUFVLEdBQUcsU0FBUyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFbWFpbFN0cn0gZnJvbSAnLi9Qcm9maWxlcyc7XG5pbXBvcnQge0lTT0RhdGVUaW1lU3RyaW5nfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL21ldGFkYXRhL0lTT0RhdGVUaW1lU3RyaW5ncyc7XG5pbXBvcnQge0ZpcmViYXNlfSBmcm9tICcuLi8uLi8uLi9maXJlYmFzZS9GaXJlYmFzZSc7XG5pbXBvcnQge0NvbGxlY3Rpb25zLCBEb2N1bWVudENoYW5nZX0gZnJvbSAnLi9Db2xsZWN0aW9ucyc7XG5pbXBvcnQge1ByZWNvbmRpdGlvbnN9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvUHJlY29uZGl0aW9ucyc7XG5cbmV4cG9ydCBjbGFzcyBDb250YWN0cyB7XG5cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IENPTExFQ1RJT04gPSAnY29udGFjdCc7XG5cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGxpc3QoKTogUHJvbWlzZTxSZWFkb25seUFycmF5PENvbnRhY3Q+PiB7XG5cbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IEZpcmViYXNlLmN1cnJlbnRVc2VyKCk7XG4gICAgICAgIGNvbnN0IHt1aWR9ID0gUHJlY29uZGl0aW9ucy5hc3NlcnRQcmVzZW50KHVzZXIsICd1c2VyJyk7XG5cbiAgICAgICAgcmV0dXJuIGF3YWl0IENvbGxlY3Rpb25zLmxpc3QodGhpcy5DT0xMRUNUSU9OLCBbWyd1aWQnICwgJz09JywgdWlkXV0pO1xuXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBvblNuYXBzaG90KGRlbGVnYXRlOiAocmVjb3JkczogUmVhZG9ubHlBcnJheTxEb2N1bWVudENoYW5nZTxDb250YWN0Pj4pID0+IHZvaWQpIHtcblxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgRmlyZWJhc2UuY3VycmVudFVzZXIoKTtcbiAgICAgICAgY29uc3Qge3VpZH0gPSBQcmVjb25kaXRpb25zLmFzc2VydFByZXNlbnQodXNlciwgJ3VzZXInKTtcblxuICAgICAgICByZXR1cm4gYXdhaXQgQ29sbGVjdGlvbnMub25RdWVyeVNuYXBzaG90Q2hhbmdlcyh0aGlzLkNPTExFQ1RJT04sIFtbJ3VpZCcgLCAnPT0nLCB1aWRdXSwgZGVsZWdhdGUpO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlIGFsbCBvZiB0aGUgdXNlciBjb250YWN0cy4uLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgcHVyZ2UoKSB7XG4gICAgICAgIGF3YWl0IENvbGxlY3Rpb25zLmRlbGV0ZUJ5SUQodGhpcy5DT0xMRUNUSU9OLCAoKSA9PiB0aGlzLmxpc3QoKSk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29udGFjdEluaXQge1xuXG4gICAgcmVhZG9ubHkgcHJvZmlsZUlEPzogRW1haWxTdHI7XG4gICAgcmVhZG9ubHkgZW1haWw/OiBFbWFpbFN0cjtcblxuICAgIC8qKlxuICAgICAqIFRoZSBsYWJlbCBmb3IgdGhpcyBjb250YWN0LiAgVGhpcyBpcyBlaXRoZXIgdGhlIHBhcnNlZCAnbmFtZScgdGhhdCB3ZVxuICAgICAqIHBhcnNlZCBmcm9tIHRoZSBlbWFpbCBvciBpdCdzIGdvaW5nIHRvIGJlIHRoZSBwcm9maWxlIG5hbWUgZnJvbSB0aGVpclxuICAgICAqIHByb2ZpbGUgbWV0YWRhdGEuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbGFiZWw/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcmVsYXRpb25zaGlwIHdpdGggdGhpcyBjb250YWN0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlbDogQ29udGFjdFJlbEFycmF5O1xuXG4gICAgLyoqXG4gICAgICogVHJ1ZSBpZiB0aGUgdXNlciBoYXMgbWUgYXMgYSBmcmllbmQgdG9vLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlY2lwcm9jYWw6IGJvb2xlYW47XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb250YWN0IGV4dGVuZHMgQ29udGFjdEluaXQge1xuXG4gICAgcmVhZG9ubHkgaWQ6IHN0cmluZztcbiAgICByZWFkb25seSB1aWQ6IHN0cmluZztcbiAgICByZWFkb25seSBjcmVhdGVkOiBJU09EYXRlVGltZVN0cmluZztcblxufVxuXG5leHBvcnQgdHlwZSBDb250YWN0UmVsQXJyYXkgPSBSZWFkb25seUFycmF5PENvbnRhY3RSZWxUeXBlPjtcblxuLyoqXG4gKiBUaGUgcmVsYXRpb25zaGlwIHR5cGU6XG4gKlxuICogLSBzaGFyaW5nOiBzaGFyaW5nIGRvY3VtZW50cyB3aXRoIHRoaXMgdXNlci5cbiAqIC0gZnJpZW5kOiBhZGRlZCB0aGVtIGFzIGEgZnJpZW5kLlxuICpcbiAqL1xuZXhwb3J0IHR5cGUgQ29udGFjdFJlbFR5cGUgPSAnc2hhcmVkJyB8ICdmcmllbmQnO1xuXG5leHBvcnQgdHlwZSBDb250YWN0SURTdHIgPSBzdHJpbmc7XG4iXX0=