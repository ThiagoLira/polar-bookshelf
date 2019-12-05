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
const Profiles_1 = require("./Profiles");
const DocumentReferences_1 = require("../../../firebase/firestore/DocumentReferences");
const Preconditions_1 = require("polar-shared/src/Preconditions");
class UserProfiles {
    static get(profileID, opts = new DocumentReferences_1.CacheFirstThenServerGetOptions()) {
        return __awaiter(this, void 0, void 0, function* () {
            const currentUserProfile = yield Profiles_1.Profiles.currentProfile(opts);
            const profile = yield Profiles_1.Profiles.get(profileID, opts);
            if (!profile) {
                return undefined;
            }
            const self = Preconditions_1.isPresent(currentUserProfile) &&
                currentUserProfile.id === profile.id;
            return { self, profile };
        });
    }
    static currentUserProfile(opts = new DocumentReferences_1.CacheFirstThenServerGetOptions()) {
        return __awaiter(this, void 0, void 0, function* () {
            const profile = yield Profiles_1.Profiles.currentProfile(opts);
            if (!profile) {
                return undefined;
            }
            return { self: true, profile };
        });
    }
}
exports.UserProfiles = UserProfiles;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlclByb2ZpbGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVXNlclByb2ZpbGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEseUNBQTJEO0FBQzNELHVGQUEwRztBQUMxRyxrRUFBeUQ7QUFFekQsTUFBYSxZQUFZO0lBRWQsTUFBTSxDQUFPLEdBQUcsQ0FBQyxTQUF1QixFQUN2QixPQUFtQixJQUFJLG1EQUE4QixFQUFFOztZQUUzRSxNQUFNLGtCQUFrQixHQUFHLE1BQU0sbUJBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDL0QsTUFBTSxPQUFPLEdBQUcsTUFBTSxtQkFBUSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFFcEQsSUFBSSxDQUFFLE9BQU8sRUFBRTtnQkFDWCxPQUFPLFNBQVMsQ0FBQzthQUNwQjtZQUVELE1BQU0sSUFBSSxHQUFHLHlCQUFTLENBQUMsa0JBQWtCLENBQUM7Z0JBQzdCLGtCQUFtQixDQUFDLEVBQUUsS0FBSyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBRW5ELE9BQU8sRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFDLENBQUM7UUFFM0IsQ0FBQztLQUFBO0lBRU0sTUFBTSxDQUFPLGtCQUFrQixDQUFDLE9BQW1CLElBQUksbURBQThCLEVBQUU7O1lBQzFGLE1BQU0sT0FBTyxHQUFHLE1BQU0sbUJBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFcEQsSUFBSSxDQUFFLE9BQU8sRUFBRTtnQkFDWCxPQUFPLFNBQVMsQ0FBQzthQUNwQjtZQUVELE9BQU8sRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBQyxDQUFDO1FBQ2pDLENBQUM7S0FBQTtDQUVKO0FBN0JELG9DQTZCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UHJvZmlsZSwgUHJvZmlsZUlEU3RyLCBQcm9maWxlc30gZnJvbSBcIi4vUHJvZmlsZXNcIjtcbmltcG9ydCB7Q2FjaGVGaXJzdFRoZW5TZXJ2ZXJHZXRPcHRpb25zLCBHZXRPcHRpb25zfSBmcm9tIFwiLi4vLi4vLi4vZmlyZWJhc2UvZmlyZXN0b3JlL0RvY3VtZW50UmVmZXJlbmNlc1wiO1xuaW1wb3J0IHtpc1ByZXNlbnR9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvUHJlY29uZGl0aW9ucyc7XG5cbmV4cG9ydCBjbGFzcyBVc2VyUHJvZmlsZXMge1xuXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBnZXQocHJvZmlsZUlEOiBQcm9maWxlSURTdHIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0czogR2V0T3B0aW9ucyA9IG5ldyBDYWNoZUZpcnN0VGhlblNlcnZlckdldE9wdGlvbnMoKSk6IFByb21pc2U8VXNlclByb2ZpbGUgfCB1bmRlZmluZWQ+IHtcblxuICAgICAgICBjb25zdCBjdXJyZW50VXNlclByb2ZpbGUgPSBhd2FpdCBQcm9maWxlcy5jdXJyZW50UHJvZmlsZShvcHRzKTtcbiAgICAgICAgY29uc3QgcHJvZmlsZSA9IGF3YWl0IFByb2ZpbGVzLmdldChwcm9maWxlSUQsIG9wdHMpO1xuXG4gICAgICAgIGlmICghIHByb2ZpbGUpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzZWxmID0gaXNQcmVzZW50KGN1cnJlbnRVc2VyUHJvZmlsZSkgJiZcbiAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRVc2VyUHJvZmlsZSEuaWQgPT09IHByb2ZpbGUuaWQ7XG5cbiAgICAgICAgcmV0dXJuIHtzZWxmLCBwcm9maWxlfTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgY3VycmVudFVzZXJQcm9maWxlKG9wdHM6IEdldE9wdGlvbnMgPSBuZXcgQ2FjaGVGaXJzdFRoZW5TZXJ2ZXJHZXRPcHRpb25zKCkpOiBQcm9taXNlPFVzZXJQcm9maWxlIHwgdW5kZWZpbmVkPiB7XG4gICAgICAgIGNvbnN0IHByb2ZpbGUgPSBhd2FpdCBQcm9maWxlcy5jdXJyZW50UHJvZmlsZShvcHRzKTtcblxuICAgICAgICBpZiAoISBwcm9maWxlKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtzZWxmOiB0cnVlLCBwcm9maWxlfTtcbiAgICB9XG5cbn1cblxuXG5leHBvcnQgaW50ZXJmYWNlIFVzZXJQcm9maWxlIHtcblxuICAgIHJlYWRvbmx5IHByb2ZpbGU6IFByb2ZpbGU7XG5cbiAgICAvKipcbiAgICAgKiBUcnVlIGlmIHRoaXMgcHJvZmlsZSByZXByZXNlbnRzIG15c2VsZi5cbiAgICAgKi9cbiAgICByZWFkb25seSBzZWxmOiBib29sZWFuO1xuXG59XG4iXX0=