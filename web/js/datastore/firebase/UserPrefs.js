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
const Prefs_1 = require("../../util/prefs/Prefs");
const Collections_1 = require("../sharing/db/Collections");
const Firebase_1 = require("../../firebase/Firebase");
const Preconditions_1 = require("polar-shared/src/Preconditions");
class UserPrefs {
    static getUserID() {
        return __awaiter(this, void 0, void 0, function* () {
            const user = Preconditions_1.Preconditions.assertPresent(yield Firebase_1.Firebase.currentUser());
            return user.uid;
        });
    }
    static get() {
        return __awaiter(this, void 0, void 0, function* () {
            const uid = yield this.getUserID();
            const userPref = yield Collections_1.Collections.getByID(this.COLLECTION, uid);
            if (userPref) {
                return new Prefs_1.DictionaryPrefs(userPref.value);
            }
            return new Prefs_1.DictionaryPrefs();
        });
    }
    static set(prefs) {
        return __awaiter(this, void 0, void 0, function* () {
            const uid = yield this.getUserID();
            const ref = yield Collections_1.Collections.createRef(this.COLLECTION, uid);
            const userPref = {
                uid: uid,
                value: prefs.toDict()
            };
            yield ref.set(userPref);
        });
    }
}
exports.UserPrefs = UserPrefs;
UserPrefs.COLLECTION = 'user_pref';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlclByZWZzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVXNlclByZWZzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsa0RBQWtGO0FBQ2xGLDJEQUFpRTtBQUNqRSxzREFBaUQ7QUFDakQsa0VBQTZEO0FBRTdELE1BQWEsU0FBUztJQUlWLE1BQU0sQ0FBTyxTQUFTOztZQUMxQixNQUFNLElBQUksR0FBRyw2QkFBYSxDQUFDLGFBQWEsQ0FBQyxNQUFNLG1CQUFRLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztZQUN2RSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDcEIsQ0FBQztLQUFBO0lBRU0sTUFBTSxDQUFPLEdBQUc7O1lBRW5CLE1BQU0sR0FBRyxHQUFJLE1BQU0sSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ3BDLE1BQU0sUUFBUSxHQUF5QixNQUFNLHlCQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFFdkYsSUFBSSxRQUFRLEVBQUU7Z0JBQ1YsT0FBTyxJQUFJLHVCQUFlLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzlDO1lBRUQsT0FBTyxJQUFJLHVCQUFlLEVBQUUsQ0FBQztRQUVqQyxDQUFDO0tBQUE7SUFFTSxNQUFNLENBQU8sR0FBRyxDQUFDLEtBQVk7O1lBQ2hDLE1BQU0sR0FBRyxHQUFJLE1BQU0sSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ3BDLE1BQU0sR0FBRyxHQUFHLE1BQU0seUJBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUU5RCxNQUFNLFFBQVEsR0FBYTtnQkFDdkIsR0FBRyxFQUFFLEdBQUc7Z0JBQ1IsS0FBSyxFQUFFLEtBQUssQ0FBQyxNQUFNLEVBQUU7YUFDeEIsQ0FBQztZQUVGLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUU1QixDQUFDO0tBQUE7O0FBakNMLDhCQW1DQztBQWpDa0Isb0JBQVUsR0FBRyxXQUFXLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpY3Rpb25hcnlQcmVmcywgUHJlZnMsIFN0cmluZ1RvU3RyaW5nRGljdH0gZnJvbSBcIi4uLy4uL3V0aWwvcHJlZnMvUHJlZnNcIjtcbmltcG9ydCB7Q29sbGVjdGlvbnMsIFVzZXJJRFN0cn0gZnJvbSBcIi4uL3NoYXJpbmcvZGIvQ29sbGVjdGlvbnNcIjtcbmltcG9ydCB7RmlyZWJhc2V9IGZyb20gXCIuLi8uLi9maXJlYmFzZS9GaXJlYmFzZVwiO1xuaW1wb3J0IHtQcmVjb25kaXRpb25zfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy9QcmVjb25kaXRpb25zXCI7XG5cbmV4cG9ydCBjbGFzcyBVc2VyUHJlZnMge1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgQ09MTEVDVElPTiA9ICd1c2VyX3ByZWYnO1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgYXN5bmMgZ2V0VXNlcklEKCk6IFByb21pc2U8VXNlcklEU3RyPiB7XG4gICAgICAgIGNvbnN0IHVzZXIgPSBQcmVjb25kaXRpb25zLmFzc2VydFByZXNlbnQoYXdhaXQgRmlyZWJhc2UuY3VycmVudFVzZXIoKSk7XG4gICAgICAgIHJldHVybiB1c2VyLnVpZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGdldCgpOiBQcm9taXNlPFByZWZzPiB7XG5cbiAgICAgICAgY29uc3QgdWlkICA9IGF3YWl0IHRoaXMuZ2V0VXNlcklEKCk7XG4gICAgICAgIGNvbnN0IHVzZXJQcmVmOiBVc2VyUHJlZiB8IHVuZGVmaW5lZCA9IGF3YWl0IENvbGxlY3Rpb25zLmdldEJ5SUQodGhpcy5DT0xMRUNUSU9OLCB1aWQpO1xuXG4gICAgICAgIGlmICh1c2VyUHJlZikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBEaWN0aW9uYXJ5UHJlZnModXNlclByZWYudmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBEaWN0aW9uYXJ5UHJlZnMoKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgc2V0KHByZWZzOiBQcmVmcykge1xuICAgICAgICBjb25zdCB1aWQgID0gYXdhaXQgdGhpcy5nZXRVc2VySUQoKTtcbiAgICAgICAgY29uc3QgcmVmID0gYXdhaXQgQ29sbGVjdGlvbnMuY3JlYXRlUmVmKHRoaXMuQ09MTEVDVElPTiwgdWlkKTtcblxuICAgICAgICBjb25zdCB1c2VyUHJlZjogVXNlclByZWYgPSB7XG4gICAgICAgICAgICB1aWQ6IHVpZCxcbiAgICAgICAgICAgIHZhbHVlOiBwcmVmcy50b0RpY3QoKVxuICAgICAgICB9O1xuXG4gICAgICAgIGF3YWl0IHJlZi5zZXQodXNlclByZWYpO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlclByZWYge1xuICAgIHJlYWRvbmx5IHVpZDogVXNlcklEU3RyO1xuICAgIHJlYWRvbmx5IHZhbHVlOiBTdHJpbmdUb1N0cmluZ0RpY3Q7XG59XG4iXX0=