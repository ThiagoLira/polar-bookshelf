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
const ProfileOwners_1 = require("./ProfileOwners");
const DocumentReferences_1 = require("../../../firebase/firestore/DocumentReferences");
class Profiles {
    static doc(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const firestore = yield Firestore_1.Firestore.getInstance();
            const doc = firestore.collection(this.COLLECTION).doc(id);
            return [id, doc];
        });
    }
    static get(id, opts = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const [_, ref] = yield this.doc(id);
            const doc = yield DocumentReferences_1.DocumentReferences.get(ref, opts);
            return doc.data();
        });
    }
    static resolve(profileIDRecords) {
        return __awaiter(this, void 0, void 0, function* () {
            const promises = profileIDRecords.map(current => {
                const handler = () => __awaiter(this, void 0, void 0, function* () {
                    if (current.profileID) {
                        const profile = yield this.get(current.profileID);
                        return [current, profile];
                    }
                    else {
                        return [current, undefined];
                    }
                });
                return handler();
            });
            const resolved = yield Promise.all(promises);
            return resolved.map(current => current);
        });
    }
    static currentProfile(opts = new DocumentReferences_1.CacheFirstThenServerGetOptions()) {
        return __awaiter(this, void 0, void 0, function* () {
            const app = Firebase_1.Firebase.init();
            const user = app.auth().currentUser;
            if (!user) {
                return undefined;
            }
            const profileOwner = yield ProfileOwners_1.ProfileOwners.get(user.uid, opts);
            if (!profileOwner) {
                return undefined;
            }
            const profile = yield this.get(profileOwner.profileID, opts);
            if (!profile) {
                return undefined;
            }
            return profile;
        });
    }
}
exports.Profiles = Profiles;
Profiles.COLLECTION = 'profile';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZmlsZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJQcm9maWxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUVBLDJEQUFzRDtBQUN0RCx5REFBb0Q7QUFDcEQsbURBQThDO0FBSTlDLHVGQUl3RDtBQUV4RCxNQUFhLFFBQVE7SUFJVixNQUFNLENBQU8sR0FBRyxDQUFDLEVBQWdCOztZQUNwQyxNQUFNLFNBQVMsR0FBRyxNQUFNLHFCQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDaEQsTUFBTSxHQUFHLEdBQUcsU0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzFELE9BQU8sQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDckIsQ0FBQztLQUFBO0lBRU0sTUFBTSxDQUFPLEdBQUcsQ0FBQyxFQUFnQixFQUFFLE9BQW1CLEVBQUU7O1lBQzNELE1BQU0sQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3BDLE1BQU0sR0FBRyxHQUFHLE1BQU0sdUNBQWtCLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNwRCxPQUFpQixHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDaEMsQ0FBQztLQUFBO0lBS00sTUFBTSxDQUFPLE9BQU8sQ0FBNEIsZ0JBQWtDOztZQUlyRixNQUFNLFFBQVEsR0FBRyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBRTVDLE1BQU0sT0FBTyxHQUFHLEdBQXlDLEVBQUU7b0JBRXZELElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTt3QkFDbkIsTUFBTSxPQUFPLEdBQUcsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQzt3QkFDbEQsT0FBTyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztxQkFDN0I7eUJBQU07d0JBQ0gsT0FBTyxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztxQkFDL0I7Z0JBRUwsQ0FBQyxDQUFBLENBQUM7Z0JBSUYsT0FBTyxPQUFPLEVBQUUsQ0FBQztZQUVyQixDQUFDLENBQUMsQ0FBQztZQUVILE1BQU0sUUFBUSxHQUFHLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM3QyxPQUFPLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUU1QyxDQUFDO0tBQUE7SUFFTSxNQUFNLENBQU8sY0FBYyxDQUFDLE9BQW1CLElBQUksbURBQThCLEVBQUU7O1lBRXRGLE1BQU0sR0FBRyxHQUFHLG1CQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDNUIsTUFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQztZQUVwQyxJQUFJLENBQUUsSUFBSSxFQUFFO2dCQUNSLE9BQU8sU0FBUyxDQUFDO2FBQ3BCO1lBRUQsTUFBTSxZQUFZLEdBQUcsTUFBTSw2QkFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFLLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBRTlELElBQUksQ0FBRSxZQUFZLEVBQUU7Z0JBRWhCLE9BQU8sU0FBUyxDQUFDO2FBQ3BCO1lBRUQsTUFBTSxPQUFPLEdBQUcsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFFN0QsSUFBSyxDQUFFLE9BQU8sRUFBRTtnQkFDWixPQUFPLFNBQVMsQ0FBQzthQUNwQjtZQUVELE9BQU8sT0FBTyxDQUFDO1FBRW5CLENBQUM7S0FBQTs7QUF2RUwsNEJBeUVDO0FBdkUwQixtQkFBVSxHQUFHLFNBQVMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7VGFnU3RyfSBmcm9tICcuL0dyb3Vwcyc7XG5pbXBvcnQge0ltYWdlfSBmcm9tICcuL0ltYWdlcyc7XG5pbXBvcnQge0ZpcmVzdG9yZX0gZnJvbSAnLi4vLi4vLi4vZmlyZWJhc2UvRmlyZXN0b3JlJztcbmltcG9ydCB7RmlyZWJhc2V9IGZyb20gJy4uLy4uLy4uL2ZpcmViYXNlL0ZpcmViYXNlJztcbmltcG9ydCB7UHJvZmlsZU93bmVyc30gZnJvbSAnLi9Qcm9maWxlT3duZXJzJztcbmltcG9ydCB7UHJlY29uZGl0aW9uc30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9QcmVjb25kaXRpb25zJztcbmltcG9ydCAqIGFzIGZpcmViYXNlIGZyb20gJy4uLy4uLy4uL2ZpcmViYXNlL2xpYi9maXJlYmFzZSc7XG5pbXBvcnQgRG9jdW1lbnRSZWZlcmVuY2UgPSBmaXJlYmFzZS5maXJlc3RvcmUuRG9jdW1lbnRSZWZlcmVuY2U7XG5pbXBvcnQge1xuICAgIENhY2hlRmlyc3RUaGVuU2VydmVyR2V0T3B0aW9ucyxcbiAgICBEb2N1bWVudFJlZmVyZW5jZXMsXG4gICAgR2V0T3B0aW9uc1xufSBmcm9tIFwiLi4vLi4vLi4vZmlyZWJhc2UvZmlyZXN0b3JlL0RvY3VtZW50UmVmZXJlbmNlc1wiO1xuXG5leHBvcnQgY2xhc3MgUHJvZmlsZXMge1xuXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBDT0xMRUNUSU9OID0gJ3Byb2ZpbGUnO1xuXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBkb2MoaWQ6IFByb2ZpbGVJRFN0cik6IFByb21pc2U8W0hhbmRsZVN0ciwgRG9jdW1lbnRSZWZlcmVuY2VdPiB7XG4gICAgICAgIGNvbnN0IGZpcmVzdG9yZSA9IGF3YWl0IEZpcmVzdG9yZS5nZXRJbnN0YW5jZSgpO1xuICAgICAgICBjb25zdCBkb2MgPSBmaXJlc3RvcmUuY29sbGVjdGlvbih0aGlzLkNPTExFQ1RJT04pLmRvYyhpZCk7XG4gICAgICAgIHJldHVybiBbaWQsIGRvY107XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBnZXQoaWQ6IFByb2ZpbGVJRFN0ciwgb3B0czogR2V0T3B0aW9ucyA9IHt9KTogUHJvbWlzZTxQcm9maWxlIHwgdW5kZWZpbmVkPiB7XG4gICAgICAgIGNvbnN0IFtfLCByZWZdID0gYXdhaXQgdGhpcy5kb2MoaWQpO1xuICAgICAgICBjb25zdCBkb2MgPSBhd2FpdCBEb2N1bWVudFJlZmVyZW5jZXMuZ2V0KHJlZiwgb3B0cyk7XG4gICAgICAgIHJldHVybiA8UHJvZmlsZT4gZG9jLmRhdGEoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMb29rdXAgYWxsIHRoZSBwcm9maWxlIElEcy4gIFRoaXMgaXMgZG9uZSBpbiBwYXJhbGxlbCBmb3IgcGVyZm9ybWFuY2UgcmVhc29ucy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIHJlc29sdmU8VCBleHRlbmRzIFByb2ZpbGVJRFJlY29yZD4ocHJvZmlsZUlEUmVjb3JkczogUmVhZG9ubHlBcnJheTxUPik6IFByb21pc2U8UmVhZG9ubHlBcnJheTxQcm9maWxlUmVjb3JkVHVwbGU8VD4+PiB7XG5cbiAgICAgICAgLy8gVE9ETyBwcmVmZXIgY2FjaGUtZmlyc3RcblxuICAgICAgICBjb25zdCBwcm9taXNlcyA9IHByb2ZpbGVJRFJlY29yZHMubWFwKGN1cnJlbnQgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBoYW5kbGVyID0gYXN5bmMgKCk6IFByb21pc2U8UHJvZmlsZVJlY29yZFR1cGxlPFQ+PiA9PiB7XG5cbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudC5wcm9maWxlSUQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvZmlsZSA9IGF3YWl0IHRoaXMuZ2V0KGN1cnJlbnQucHJvZmlsZUlEKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtjdXJyZW50LCBwcm9maWxlXTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW2N1cnJlbnQsIHVuZGVmaW5lZF07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvLyBjYWxsIHRoZSBoYW5kbGVyIGJ1dCByZXR1cm4gaXQgYXMgYSBwcm9taXNlIHNvIHdlIGNhbiBjYWxsXG4gICAgICAgICAgICAvLyBwcm9taXNlLmFsbCBiZWxvd1xuICAgICAgICAgICAgcmV0dXJuIGhhbmRsZXIoKTtcblxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCByZXNvbHZlZCA9IGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVkLm1hcChjdXJyZW50ID0+IGN1cnJlbnQpO1xuXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBjdXJyZW50UHJvZmlsZShvcHRzOiBHZXRPcHRpb25zID0gbmV3IENhY2hlRmlyc3RUaGVuU2VydmVyR2V0T3B0aW9ucygpKTogUHJvbWlzZTxQcm9maWxlIHwgdW5kZWZpbmVkPiB7XG5cbiAgICAgICAgY29uc3QgYXBwID0gRmlyZWJhc2UuaW5pdCgpO1xuICAgICAgICBjb25zdCB1c2VyID0gYXBwLmF1dGgoKS5jdXJyZW50VXNlcjtcblxuICAgICAgICBpZiAoISB1c2VyKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcHJvZmlsZU93bmVyID0gYXdhaXQgUHJvZmlsZU93bmVycy5nZXQodXNlciEudWlkLCBvcHRzKTtcblxuICAgICAgICBpZiAoISBwcm9maWxlT3duZXIpIHtcbiAgICAgICAgICAgIC8vIGdldHRpbmcgdGhlaXIgdXNlciBmcm9tIHRoZSBkYXRhYmFzZSBhbmQgd3JpdGluZyBpdCBiYWNrIG91dC4uLlxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHByb2ZpbGUgPSBhd2FpdCB0aGlzLmdldChwcm9maWxlT3duZXIucHJvZmlsZUlELCBvcHRzKTtcblxuICAgICAgICBpZiAoICEgcHJvZmlsZSkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwcm9maWxlO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvZmlsZUluaXQge1xuXG4gICAgcmVhZG9ubHkgbmFtZT86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIFRoZSBpbWFnZSBvZiB0aGUgdXNlciBmcm9tIHRoZWlyIHByb2ZpbGUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW1hZ2U/OiBJbWFnZTtcblxuICAgIC8qKlxuICAgICAqIFRoZSB1c2VyIGhhbmRsZSBvZiB0aGlzIHByb2ZpbGUuICBBIHVuaXF1ZSBuYW1lIGZvciB0aGlzIGFjY291bnQgdGhhdCdzXG4gICAgICogYSBnbG9iYWwgcmVmZXJlbmNlIGZvciB0aGlzIHVzZXIgbGlrZSAnYWxpY2UxMDEnIG9yICdidXJ0b25hdG9yJy5cbiAgICAgKi9cbiAgICByZWFkb25seSBoYW5kbGU/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBVc2VyIGVudGVyZWQgYmlvIGZvciB0aGVpciBwcm9maWxlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGJpbz86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEFsbG93IHRoZSB1c2VyIHRvIHBpY2sgYXQgbW9zdCA1IHRhZ3MgZm9yIHRoZSBkb2N1bWVudC5cbiAgICAgKi9cbiAgICByZWFkb25seSB0YWdzPzogUmVhZG9ubHlBcnJheTxUYWdTdHI+O1xuXG4gICAgcmVhZG9ubHkgbGlua3M/OiBSZWFkb25seUFycmF5PHN0cmluZz47XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcGh5c2ljYWwgbG9jYXRpb24gZm9yIHRoZSB1c2VyLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGxvY2F0aW9uPzogc3RyaW5nO1xuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvZmlsZSBleHRlbmRzIFByb2ZpbGVJbml0IHtcbiAgICByZWFkb25seSBpZDogUHJvZmlsZUlEU3RyO1xufVxuXG5leHBvcnQgdHlwZSBQcm9maWxlSURTdHIgPSBzdHJpbmc7XG5cbmV4cG9ydCB0eXBlIEhhbmRsZVN0ciA9IHN0cmluZztcblxuZXhwb3J0IHR5cGUgVXNlcklEU3RyID0gc3RyaW5nO1xuXG5leHBvcnQgdHlwZSBFbWFpbFN0ciA9IHN0cmluZztcblxuZXhwb3J0IGludGVyZmFjZSBQcm9maWxlSURSZWNvcmQge1xuICAgIHJlYWRvbmx5IHByb2ZpbGVJRD86IFByb2ZpbGVJRFN0cjtcbn1cblxuZXhwb3J0IHR5cGUgUHJvZmlsZVJlY29yZFR1cGxlPFQ+ID0gW1QsIFByb2ZpbGUgfCB1bmRlZmluZWRdO1xuIl19