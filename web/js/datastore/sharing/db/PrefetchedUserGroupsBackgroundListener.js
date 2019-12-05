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
const BackgroundListener_1 = require("../../../util/BackgroundListener");
const UserGroups_1 = require("./UserGroups");
const Groups_1 = require("./Groups");
const SetArrays_1 = require("polar-shared/src/util/SetArrays");
const IDMaps_1 = require("polar-shared/src/util/IDMaps");
const Logger_1 = require("polar-shared/src/logger/Logger");
const log = Logger_1.Logger.create();
class PrefetchedUserGroups {
    static get() {
        return __awaiter(this, void 0, void 0, function* () {
            const userGroups = yield UserGroups_1.UserGroups.get();
            return this.prefetch(userGroups);
        });
    }
    static onSnapshot(handler) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield UserGroups_1.UserGroups.onSnapshot(userGroups => {
                this.prefetch(userGroups)
                    .then(prefetchedUserGroup => handler(prefetchedUserGroup))
                    .catch(err => log.error("Unable to prefetch groups: ", err));
            });
        });
    }
    static prefetch(userGroup) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!userGroup) {
                return undefined;
            }
            const groupIDs = SetArrays_1.SetArrays.union(userGroup.admin || [], userGroup.invitations || [], userGroup.moderator || [], userGroup.groups || []);
            const referencedGroups = yield Groups_1.Groups.getAll(groupIDs);
            const prefetched = IDMaps_1.IDMaps.toIDMap(referencedGroups);
            const groups = IDMaps_1.IDMaps.fetch(prefetched, userGroup.groups || []);
            return { userGroup, prefetched, groups };
        });
    }
}
exports.PrefetchedUserGroups = PrefetchedUserGroups;
class PrefetchedUserGroupsBackgroundListener {
    static start() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.delegate.start();
        });
    }
    static get() {
        return this.delegate.get();
    }
}
exports.PrefetchedUserGroupsBackgroundListener = PrefetchedUserGroupsBackgroundListener;
PrefetchedUserGroupsBackgroundListener.delegate = BackgroundListener_1.BackgroundListeners.create(PrefetchedUserGroups);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJlZmV0Y2hlZFVzZXJHcm91cHNCYWNrZ3JvdW5kTGlzdGVuZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJQcmVmZXRjaGVkVXNlckdyb3Vwc0JhY2tncm91bmRMaXN0ZW5lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHlFQUFxRTtBQUNyRSw2Q0FBbUQ7QUFDbkQscUNBQXVDO0FBQ3ZDLCtEQUEwRDtBQUMxRCx5REFBb0Q7QUFFcEQsMkRBQXNEO0FBR3RELE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU1QixNQUFhLG9CQUFvQjtJQUV0QixNQUFNLENBQU8sR0FBRzs7WUFFbkIsTUFBTSxVQUFVLEdBQUcsTUFBTSx1QkFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQzFDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUVyQyxDQUFDO0tBQUE7SUFFTSxNQUFNLENBQU8sVUFBVSxDQUFDLE9BQThEOztZQUV6RixPQUFPLE1BQU0sdUJBQVUsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUU7Z0JBQzVDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDO3FCQUNwQixJQUFJLENBQUMsbUJBQW1CLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO3FCQUN6RCxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLDZCQUE2QixFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFFckUsQ0FBQyxDQUFDLENBQUM7UUFFUCxDQUFDO0tBQUE7SUFFTyxNQUFNLENBQU8sUUFBUSxDQUFDLFNBQWdDOztZQUUxRCxJQUFJLENBQUUsU0FBUyxFQUFFO2dCQUNiLE9BQU8sU0FBUyxDQUFDO2FBQ3BCO1lBRUQsTUFBTSxRQUFRLEdBQ1YscUJBQVMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssSUFBSSxFQUFFLEVBQ3JCLFNBQVMsQ0FBQyxXQUFXLElBQUksRUFBRSxFQUMzQixTQUFTLENBQUMsU0FBUyxJQUFJLEVBQUUsRUFDekIsU0FBUyxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsQ0FBQztZQUc1QyxNQUFNLGdCQUFnQixHQUFHLE1BQU0sZUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUV2RCxNQUFNLFVBQVUsR0FBRyxlQUFNLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFFcEQsTUFBTSxNQUFNLEdBQUcsZUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsU0FBUyxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUMsQ0FBQztZQUVoRSxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUMsQ0FBQztRQUUzQyxDQUFDO0tBQUE7Q0FFSjtBQTNDRCxvREEyQ0M7QUFLRCxNQUFhLHNDQUFzQztJQUl4QyxNQUFNLENBQU8sS0FBSzs7WUFDckIsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2hDLENBQUM7S0FBQTtJQUVNLE1BQU0sQ0FBQyxHQUFHO1FBQ2IsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQy9CLENBQUM7O0FBVkwsd0ZBWUM7QUFWa0IsK0NBQVEsR0FBRyx3Q0FBbUIsQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QmFja2dyb3VuZExpc3RlbmVyc30gZnJvbSBcIi4uLy4uLy4uL3V0aWwvQmFja2dyb3VuZExpc3RlbmVyXCI7XG5pbXBvcnQge1VzZXJHcm91cCwgVXNlckdyb3Vwc30gZnJvbSBcIi4vVXNlckdyb3Vwc1wiO1xuaW1wb3J0IHtHcm91cCwgR3JvdXBzfSBmcm9tIFwiLi9Hcm91cHNcIjtcbmltcG9ydCB7U2V0QXJyYXlzfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy91dGlsL1NldEFycmF5c1wiO1xuaW1wb3J0IHtJRE1hcHN9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL3V0aWwvSURNYXBzXCI7XG5pbXBvcnQge1NuYXBzaG90VW5zdWJzY3JpYmVyfSBmcm9tIFwiLi4vLi4vLi4vZmlyZWJhc2UvRmlyZWJhc2VcIjtcbmltcG9ydCB7TG9nZ2VyfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy9sb2dnZXIvTG9nZ2VyXCI7XG5pbXBvcnQge0dyb3VwSURTdHJ9IGZyb20gXCIuLi8uLi9EYXRhc3RvcmVcIjtcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG5leHBvcnQgY2xhc3MgUHJlZmV0Y2hlZFVzZXJHcm91cHMge1xuXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBnZXQoKTogUHJvbWlzZTxQcmVmZXRjaGVkVXNlckdyb3VwIHwgdW5kZWZpbmVkPiB7XG5cbiAgICAgICAgY29uc3QgdXNlckdyb3VwcyA9IGF3YWl0IFVzZXJHcm91cHMuZ2V0KCk7XG4gICAgICAgIHJldHVybiB0aGlzLnByZWZldGNoKHVzZXJHcm91cHMpO1xuXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBvblNuYXBzaG90KGhhbmRsZXI6ICh1c2VyR3JvdXBzOiBQcmVmZXRjaGVkVXNlckdyb3VwIHwgdW5kZWZpbmVkKSA9PiB2b2lkKTogUHJvbWlzZTxTbmFwc2hvdFVuc3Vic2NyaWJlcj4ge1xuXG4gICAgICAgIHJldHVybiBhd2FpdCBVc2VyR3JvdXBzLm9uU25hcHNob3QodXNlckdyb3VwcyA9PiB7XG4gICAgICAgICAgICB0aGlzLnByZWZldGNoKHVzZXJHcm91cHMpXG4gICAgICAgICAgICAgICAgLnRoZW4ocHJlZmV0Y2hlZFVzZXJHcm91cCA9PiBoYW5kbGVyKHByZWZldGNoZWRVc2VyR3JvdXApKVxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gbG9nLmVycm9yKFwiVW5hYmxlIHRvIHByZWZldGNoIGdyb3VwczogXCIsIGVycikpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgYXN5bmMgcHJlZmV0Y2godXNlckdyb3VwOiBVc2VyR3JvdXAgfCB1bmRlZmluZWQpOiBQcm9taXNlPFByZWZldGNoZWRVc2VyR3JvdXAgfCB1bmRlZmluZWQ+IHtcblxuICAgICAgICBpZiAoISB1c2VyR3JvdXApIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBncm91cElEcyA9XG4gICAgICAgICAgICBTZXRBcnJheXMudW5pb24odXNlckdyb3VwLmFkbWluIHx8IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJHcm91cC5pbnZpdGF0aW9ucyB8fCBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyR3JvdXAubW9kZXJhdG9yIHx8IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJHcm91cC5ncm91cHMgfHwgW10pO1xuXG4gICAgICAgIC8vIGdldCBhbGwgdGhlIHJlZmVyZW5jZWQgZ3JvdXBzIGZvciB0aGUgdXNlci5cbiAgICAgICAgY29uc3QgcmVmZXJlbmNlZEdyb3VwcyA9IGF3YWl0IEdyb3Vwcy5nZXRBbGwoZ3JvdXBJRHMpO1xuXG4gICAgICAgIGNvbnN0IHByZWZldGNoZWQgPSBJRE1hcHMudG9JRE1hcChyZWZlcmVuY2VkR3JvdXBzKTtcblxuICAgICAgICBjb25zdCBncm91cHMgPSBJRE1hcHMuZmV0Y2gocHJlZmV0Y2hlZCwgdXNlckdyb3VwLmdyb3VwcyB8fCBbXSk7XG5cbiAgICAgICAgcmV0dXJuIHt1c2VyR3JvdXAsIHByZWZldGNoZWQsIGdyb3Vwc307XG5cbiAgICB9XG5cbn1cbi8qKlxuICogUHJvdmlkZXMgdXMgd2l0aCBhIGJhY2tncm91bmQgdXBkYXRlZCBzbmFwc2hvdCBvZiB0aGUgbGF0ZXN0IFVzZXJHcm91cHNcbiAqIHdoaWNoIHN0YXlzIGFjdGl2ZSBpbiBtZW1vcnkuICBFdmVuIHdpdGggY2FjaGUgaXQgc2VlbXMgRkIgaGFzIHNvbWUgbGF0ZW5jaWVzLlxuICovXG5leHBvcnQgY2xhc3MgUHJlZmV0Y2hlZFVzZXJHcm91cHNCYWNrZ3JvdW5kTGlzdGVuZXIge1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgZGVsZWdhdGUgPSBCYWNrZ3JvdW5kTGlzdGVuZXJzLmNyZWF0ZShQcmVmZXRjaGVkVXNlckdyb3Vwcyk7XG5cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIHN0YXJ0KCkge1xuICAgICAgICBhd2FpdCB0aGlzLmRlbGVnYXRlLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXQoKTogUHJlZmV0Y2hlZFVzZXJHcm91cCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlbGVnYXRlLmdldCgpO1xuICAgIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFByZWZldGNoZWRVc2VyR3JvdXAge1xuXG4gICAgLyoqXG4gICAgICogVGhlIG9yaWdpbmFsIFVzZXJHcm91cCB3ZSB1c2VkIHRvIGJ1aWxkIHRoaXMgcHJlZmV0Y2hlZCBzZXQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdXNlckdyb3VwOiBVc2VyR3JvdXA7XG5cbiAgICByZWFkb25seSBwcmVmZXRjaGVkOiBVc2VyR3JvdXBNYXA7XG5cbiAgICAvKipcbiAgICAgKiBBbGwgdGhlIGdyb3VwcyB0aGlzIHVzZXIgaXMgYSBtZW1iZXIgb2ZcbiAgICAgKi9cbiAgICByZWFkb25seSBncm91cHM6IFJlYWRvbmx5QXJyYXk8R3JvdXA+O1xuXG59XG5cbi8qKlxuICogU3RvcmVzIGEgcHJlLWZldGNoZWQgc2V0IG9mIGdyb3VwcyBmb3IgdGhlIHVzZXIuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVXNlckdyb3VwTWFwIHtcbiAgICBbZ3JvdXBJRDogc3RyaW5nXTogR3JvdXA7XG59XG4iXX0=