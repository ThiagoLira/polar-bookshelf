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
const Firestore_1 = require("../../../../web/js/firebase/Firestore");
const SpacedReps_1 = require("polar-firebase/src/firebase/om/SpacedReps");
const SpacedRepStats_1 = require("polar-firebase/src/firebase/om/SpacedRepStats");
const Preconditions_1 = require("polar-shared/src/Preconditions");
class FirestoreCollections {
    static configure() {
        return __awaiter(this, void 0, void 0, function* () {
            const firestore = yield Firestore_1.Firestore.getInstance();
            for (const firestoreBacked of [SpacedReps_1.SpacedReps, SpacedRepStats_1.SpacedRepStats]) {
                if (Preconditions_1.isPresent(firestoreBacked.firestoreProvider)) {
                    continue;
                }
                firestoreBacked.firestoreProvider = () => firestore;
            }
        });
    }
}
exports.FirestoreCollections = FirestoreCollections;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlyZXN0b3JlQ29sbGVjdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJGaXJlc3RvcmVDb2xsZWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHFFQUFnRTtBQUNoRSwwRUFBcUU7QUFDckUsa0ZBQTZFO0FBRTdFLGtFQUF5RDtBQUV6RCxNQUFhLG9CQUFvQjtJQUV0QixNQUFNLENBQU8sU0FBUzs7WUFHekIsTUFBTSxTQUFTLEdBQUcsTUFBTSxxQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBRWhELEtBQUssTUFBTSxlQUFlLElBQUksQ0FBQyx1QkFBVSxFQUFFLCtCQUFjLENBQUMsRUFBRTtnQkFDeEQsSUFBSSx5QkFBUyxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFO29CQUU5QyxTQUFTO2lCQUNaO2dCQUVELGVBQWUsQ0FBQyxpQkFBaUIsR0FBRyxHQUFHLEVBQUUsQ0FBQyxTQUFpQyxDQUFDO2FBQy9FO1FBRUwsQ0FBQztLQUFBO0NBQ0o7QUFqQkQsb0RBaUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtGaXJlc3RvcmV9IGZyb20gXCIuLi8uLi8uLi8uLi93ZWIvanMvZmlyZWJhc2UvRmlyZXN0b3JlXCI7XG5pbXBvcnQge1NwYWNlZFJlcHN9IGZyb20gXCJwb2xhci1maXJlYmFzZS9zcmMvZmlyZWJhc2Uvb20vU3BhY2VkUmVwc1wiO1xuaW1wb3J0IHtTcGFjZWRSZXBTdGF0c30gZnJvbSBcInBvbGFyLWZpcmViYXNlL3NyYy9maXJlYmFzZS9vbS9TcGFjZWRSZXBTdGF0c1wiO1xuaW1wb3J0IHtGaXJlc3RvcmVMaWtlfSBmcm9tIFwicG9sYXItZmlyZWJhc2Uvc3JjL2ZpcmViYXNlL0NvbGxlY3Rpb25zXCI7XG5pbXBvcnQge2lzUHJlc2VudH0gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvUHJlY29uZGl0aW9uc1wiO1xuXG5leHBvcnQgY2xhc3MgRmlyZXN0b3JlQ29sbGVjdGlvbnMge1xuXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBjb25maWd1cmUoKSB7XG5cbiAgICAgICAgLy8gVE9ETzogZGVwZW5kZW5jeSBpbmplY3Rpb24gd291bGQgcm9jayBoZXJlLlxuICAgICAgICBjb25zdCBmaXJlc3RvcmUgPSBhd2FpdCBGaXJlc3RvcmUuZ2V0SW5zdGFuY2UoKTtcblxuICAgICAgICBmb3IgKGNvbnN0IGZpcmVzdG9yZUJhY2tlZCBvZiBbU3BhY2VkUmVwcywgU3BhY2VkUmVwU3RhdHNdKSB7XG4gICAgICAgICAgICBpZiAoaXNQcmVzZW50KGZpcmVzdG9yZUJhY2tlZC5maXJlc3RvcmVQcm92aWRlcikpIHtcbiAgICAgICAgICAgICAgICAvLyBhbHJlYWR5IGNvbmZpZ3VyZWRcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZmlyZXN0b3JlQmFja2VkLmZpcmVzdG9yZVByb3ZpZGVyID0gKCkgPT4gZmlyZXN0b3JlIGFzIGFueSBhcyBGaXJlc3RvcmVMaWtlO1xuICAgICAgICB9XG5cbiAgICB9XG59XG4iXX0=