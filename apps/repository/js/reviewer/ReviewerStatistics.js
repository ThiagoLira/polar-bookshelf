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
const SpacedRepStats_1 = require("polar-firebase/src/firebase/om/SpacedRepStats");
const Firebase_1 = require("../../../../web/js/firebase/Firebase");
const FirestoreCollections_1 = require("./FirestoreCollections");
class ReviewerStatistics {
    static statistics(mode, type) {
        return __awaiter(this, void 0, void 0, function* () {
            yield FirestoreCollections_1.FirestoreCollections.configure();
            const uid = yield Firebase_1.Firebase.currentUserID();
            if (!uid) {
                return [];
            }
            return yield SpacedRepStats_1.SpacedRepStats.list(uid, mode, type);
        });
    }
}
exports.ReviewerStatistics = ReviewerStatistics;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmV2aWV3ZXJTdGF0aXN0aWNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUmV2aWV3ZXJTdGF0aXN0aWNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsa0ZBQXVGO0FBQ3ZGLG1FQUE4RDtBQUU5RCxpRUFBNEQ7QUFFNUQsTUFBYSxrQkFBa0I7SUFFcEIsTUFBTSxDQUFPLFVBQVUsQ0FBQyxJQUFvQixFQUFFLElBQWM7O1lBRS9ELE1BQU0sMkNBQW9CLENBQUMsU0FBUyxFQUFFLENBQUM7WUFFdkMsTUFBTSxHQUFHLEdBQUcsTUFBTSxtQkFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBRTNDLElBQUksQ0FBRSxHQUFHLEVBQUU7Z0JBRVAsT0FBTyxFQUFFLENBQUM7YUFDYjtZQUVELE9BQU8sTUFBTSwrQkFBYyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRXRELENBQUM7S0FBQTtDQUVKO0FBakJELGdEQWlCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U3BhY2VkUmVwU3RhdHMsIFN0YXRUeXBlfSBmcm9tIFwicG9sYXItZmlyZWJhc2Uvc3JjL2ZpcmViYXNlL29tL1NwYWNlZFJlcFN0YXRzXCI7XG5pbXBvcnQge0ZpcmViYXNlfSBmcm9tIFwiLi4vLi4vLi4vLi4vd2ViL2pzL2ZpcmViYXNlL0ZpcmViYXNlXCI7XG5pbXBvcnQge1JlcGV0aXRpb25Nb2RlfSBmcm9tIFwicG9sYXItc3BhY2VkLXJlcGV0aXRpb24tYXBpL3NyYy9zY2hlZHVsZXIvUzJQbHVzL1MyUGx1c1wiO1xuaW1wb3J0IHtGaXJlc3RvcmVDb2xsZWN0aW9uc30gZnJvbSBcIi4vRmlyZXN0b3JlQ29sbGVjdGlvbnNcIjtcblxuZXhwb3J0IGNsYXNzIFJldmlld2VyU3RhdGlzdGljcyB7XG5cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIHN0YXRpc3RpY3MobW9kZTogUmVwZXRpdGlvbk1vZGUsIHR5cGU6IFN0YXRUeXBlKSB7XG5cbiAgICAgICAgYXdhaXQgRmlyZXN0b3JlQ29sbGVjdGlvbnMuY29uZmlndXJlKCk7XG5cbiAgICAgICAgY29uc3QgdWlkID0gYXdhaXQgRmlyZWJhc2UuY3VycmVudFVzZXJJRCgpO1xuXG4gICAgICAgIGlmICghIHVpZCkge1xuICAgICAgICAgICAgLy8gVE9ETyBubyB3YXkgdG8ga25vdyB0aGF0IHdlJ3JlIG5vdCBhdXRoZW50aWNhdGVkXG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYXdhaXQgU3BhY2VkUmVwU3RhdHMubGlzdCh1aWQsIG1vZGUsIHR5cGUpO1xuXG4gICAgfVxuXG59XG4iXX0=