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
const Preconditions_1 = require("polar-shared/src/Preconditions");
const Collections_1 = require("./Collections");
class GroupMembers {
    static list(groupID) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield Firebase_1.Firebase.currentUser();
            Preconditions_1.Preconditions.assertPresent(user, 'user');
            return yield Collections_1.Collections.list(this.COLLECTION, [['groupID', '==', groupID]]);
        });
    }
    static onSnapshot(groupID, delegate) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Collections_1.Collections.onQuerySnapshotChanges(this.COLLECTION, [['groupID', '==', groupID]], delegate);
        });
    }
}
exports.GroupMembers = GroupMembers;
GroupMembers.COLLECTION = 'group_member';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JvdXBNZW1iZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiR3JvdXBNZW1iZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBR0EseURBQW9EO0FBQ3BELGtFQUE2RDtBQUM3RCwrQ0FBMEQ7QUFFMUQsTUFBYSxZQUFZO0lBSWQsTUFBTSxDQUFPLElBQUksQ0FBQyxPQUFtQjs7WUFDeEMsTUFBTSxJQUFJLEdBQUcsTUFBTSxtQkFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQzFDLDZCQUFhLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztZQUMxQyxPQUFPLE1BQU0seUJBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFHLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEYsQ0FBQztLQUFBO0lBTU0sTUFBTSxDQUFPLFVBQVUsQ0FBQyxPQUFtQixFQUNuQixRQUF1RTs7WUFFbEcsT0FBTyxNQUFNLHlCQUFXLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFHLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRTlHLENBQUM7S0FBQTs7QUFuQkwsb0NBcUJDO0FBbkIwQix1QkFBVSxHQUFHLGNBQWMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7R3JvdXBJRFN0cn0gZnJvbSAnLi4vLi4vRGF0YXN0b3JlJztcbmltcG9ydCB7SVNPRGF0ZVRpbWVTdHJpbmd9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbWV0YWRhdGEvSVNPRGF0ZVRpbWVTdHJpbmdzJztcbmltcG9ydCB7UHJvZmlsZUlEU3RyfSBmcm9tICcuL1Byb2ZpbGVzJztcbmltcG9ydCB7RmlyZWJhc2V9IGZyb20gJy4uLy4uLy4uL2ZpcmViYXNlL0ZpcmViYXNlJztcbmltcG9ydCB7UHJlY29uZGl0aW9uc30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9QcmVjb25kaXRpb25zJztcbmltcG9ydCB7Q29sbGVjdGlvbnMsIERvY3VtZW50Q2hhbmdlfSBmcm9tICcuL0NvbGxlY3Rpb25zJztcblxuZXhwb3J0IGNsYXNzIEdyb3VwTWVtYmVycyB7XG5cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IENPTExFQ1RJT04gPSAnZ3JvdXBfbWVtYmVyJztcblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgbGlzdChncm91cElEOiBHcm91cElEU3RyKTogUHJvbWlzZTxSZWFkb25seUFycmF5PEdyb3VwTWVtYmVyPj4ge1xuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgRmlyZWJhc2UuY3VycmVudFVzZXIoKTtcbiAgICAgICAgUHJlY29uZGl0aW9ucy5hc3NlcnRQcmVzZW50KHVzZXIsICd1c2VyJyk7XG4gICAgICAgIHJldHVybiBhd2FpdCBDb2xsZWN0aW9ucy5saXN0KHRoaXMuQ09MTEVDVElPTiwgW1snZ3JvdXBJRCcgLCAnPT0nLCBncm91cElEXV0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogR2V0IHRoZSBtZW1iZXJzIG9mIHRoaXMgZ3JvdXAuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBvblNuYXBzaG90KGdyb3VwSUQ6IEdyb3VwSURTdHIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGVnYXRlOiAocmVjb3JkczogUmVhZG9ubHlBcnJheTxEb2N1bWVudENoYW5nZTxHcm91cE1lbWJlcj4+KSA9PiB2b2lkKSB7XG5cbiAgICAgICAgcmV0dXJuIGF3YWl0IENvbGxlY3Rpb25zLm9uUXVlcnlTbmFwc2hvdENoYW5nZXModGhpcy5DT0xMRUNUSU9OLCBbWydncm91cElEJyAsICc9PScsIGdyb3VwSURdXSwgZGVsZWdhdGUpO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3JvdXBNZW1iZXJJbml0IHtcblxuICAgIHJlYWRvbmx5IHByb2ZpbGVJRDogUHJvZmlsZUlEU3RyO1xuXG4gICAgcmVhZG9ubHkgZ3JvdXBJRDogR3JvdXBJRFN0cjtcblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdyb3VwTWVtYmVyIGV4dGVuZHMgR3JvdXBNZW1iZXJJbml0IHtcblxuICAgIC8qKlxuICAgICAqIFRoZSBJRCBmb3IgdGhpcyBlbnRyeS5cbiAgICAgKi9cbiAgICByZWFkb25seSBpZDogc3RyaW5nO1xuXG4gICAgcmVhZG9ubHkgY3JlYXRlZDogSVNPRGF0ZVRpbWVTdHJpbmc7XG5cbn1cbiJdfQ==