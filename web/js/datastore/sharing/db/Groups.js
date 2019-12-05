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
const Hashcodes_1 = require("polar-shared/src/util/Hashcodes");
const Collections_1 = require("./Collections");
const Arrays_1 = require("polar-shared/src/util/Arrays");
const HASHCODE_LEN = 20;
class Groups {
    static createIDForKey(uid, key) {
        return Hashcodes_1.Hashcodes.createID({ key, uid }, HASHCODE_LEN);
    }
    static get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const firestore = yield Firestore_1.Firestore.getInstance();
            const ref = firestore.collection(this.COLLECTION).doc(id);
            const doc = yield ref.get();
            return doc.data();
        });
    }
    static getAll(identifiers) {
        return __awaiter(this, void 0, void 0, function* () {
            const promises = identifiers.map(id => this.get(id));
            const resolved = yield Promise.all(promises);
            return Arrays_1.Arrays.onlyDefined(resolved);
        });
    }
    static getByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const clauses = [
                ['visibility', '==', 'public'],
                ['name', '==', name]
            ];
            return Collections_1.Collections.getByFieldValues(this.COLLECTION, clauses);
        });
    }
    static executeSearchWithTags(tags) {
        return __awaiter(this, void 0, void 0, function* () {
            const visibilityClauses = [
                ['visibility', '==', 'public']
            ];
            const tagClauses = tags.map(current => ['tags', 'array-contains', current]);
            const clauses = [...visibilityClauses, ...tagClauses];
            const orderBy = [
                ['nrMembers', 'desc']
            ];
            const limit = 50;
            return yield Collections_1.Collections.list(this.COLLECTION, clauses, { orderBy, limit });
        });
    }
    static topGroups() {
        return __awaiter(this, void 0, void 0, function* () {
            const visibilityClauses = [
                ['visibility', '==', 'public']
            ];
            const clauses = [...visibilityClauses];
            const orderBy = [
                ['nrMembers', 'desc'],
                ['name', 'asc']
            ];
            const limit = 50;
            return yield Collections_1.Collections.list(this.COLLECTION, clauses, { orderBy, limit });
        });
    }
}
exports.Groups = Groups;
Groups.COLLECTION = 'group';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JvdXBzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiR3JvdXBzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsMkRBQXNEO0FBSXRELCtEQUEwRDtBQUUxRCwrQ0FBaUU7QUFFakUseURBQW9EO0FBRXBELE1BQU0sWUFBWSxHQUFHLEVBQUUsQ0FBQztBQUV4QixNQUFhLE1BQU07SUFJUixNQUFNLENBQUMsY0FBYyxDQUFDLEdBQWMsRUFBRSxHQUFXO1FBQ3BELE9BQU8scUJBQVMsQ0FBQyxRQUFRLENBQUMsRUFBQyxHQUFHLEVBQUUsR0FBRyxFQUFDLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVNLE1BQU0sQ0FBTyxHQUFHLENBQUMsRUFBYzs7WUFDbEMsTUFBTSxTQUFTLEdBQUcsTUFBTSxxQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ2hELE1BQU0sR0FBRyxHQUFHLFNBQVMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUMxRCxNQUFNLEdBQUcsR0FBRyxNQUFNLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUM1QixPQUFlLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM5QixDQUFDO0tBQUE7SUFLTyxNQUFNLENBQU8sTUFBTSxDQUFDLFdBQXNDOztZQUM5RCxNQUFNLFFBQVEsR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3JELE1BQU0sUUFBUSxHQUFHLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM3QyxPQUFPLGVBQU0sQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEMsQ0FBQztLQUFBO0lBRU0sTUFBTSxDQUFPLFNBQVMsQ0FBQyxJQUFZOztZQUd0QyxNQUFNLE9BQU8sR0FBMEI7Z0JBQ25DLENBQUMsWUFBWSxFQUFFLElBQUksRUFBRyxRQUFRLENBQUM7Z0JBQy9CLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7YUFDdkIsQ0FBQztZQUVGLE9BQU8seUJBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRWxFLENBQUM7S0FBQTtJQUVNLE1BQU0sQ0FBTyxxQkFBcUIsQ0FBQyxJQUEyQjs7WUFXakUsTUFBTSxpQkFBaUIsR0FBMEI7Z0JBQzdDLENBQUMsWUFBWSxFQUFFLElBQUksRUFBRyxRQUFRLENBQUM7YUFDbEMsQ0FBQztZQUVGLE1BQU0sVUFBVSxHQUNWLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBRS9ELE1BQU0sT0FBTyxHQUEwQixDQUFDLEdBQUcsaUJBQWlCLEVBQUUsR0FBRyxVQUFVLENBQUMsQ0FBQztZQUU3RSxNQUFNLE9BQU8sR0FBaUM7Z0JBQzFDLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQzthQUN4QixDQUFDO1lBRUYsTUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDO1lBRWpCLE9BQU8sTUFBTSx5QkFBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFHLE9BQU8sRUFBRSxFQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDO1FBRS9FLENBQUM7S0FBQTtJQUdNLE1BQU0sQ0FBTyxTQUFTOztZQVd6QixNQUFNLGlCQUFpQixHQUEwQjtnQkFDN0MsQ0FBQyxZQUFZLEVBQUUsSUFBSSxFQUFHLFFBQVEsQ0FBQzthQUNsQyxDQUFDO1lBRUYsTUFBTSxPQUFPLEdBQTBCLENBQUMsR0FBRyxpQkFBaUIsQ0FBQyxDQUFDO1lBRTlELE1BQU0sT0FBTyxHQUFpQztnQkFDMUMsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDO2dCQUNyQixDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUM7YUFDbEIsQ0FBQztZQUVGLE1BQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUVqQixPQUFPLE1BQU0seUJBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRyxPQUFPLEVBQUUsRUFBQyxPQUFPLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQztRQUUvRSxDQUFDO0tBQUE7O0FBN0ZMLHdCQStGQztBQTdGMEIsaUJBQVUsR0FBRyxPQUFPLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0ZpcmVzdG9yZX0gZnJvbSAnLi4vLi4vLi4vZmlyZWJhc2UvRmlyZXN0b3JlJztcbmltcG9ydCB7SVNPRGF0ZVRpbWVTdHJpbmd9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbWV0YWRhdGEvSVNPRGF0ZVRpbWVTdHJpbmdzJztcbmltcG9ydCB7R3JvdXBJRFN0cn0gZnJvbSAnLi4vLi4vRGF0YXN0b3JlJztcbmltcG9ydCB7VXNlcklEU3RyfSBmcm9tICcuL1Byb2ZpbGVzJztcbmltcG9ydCB7SGFzaGNvZGVzfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvSGFzaGNvZGVzJztcbmltcG9ydCB7RXh0ZXJuYWxMaW5rfSBmcm9tIFwiLi4vcnBjL0dyb3VwUHJvdmlzaW9uc1wiO1xuaW1wb3J0IHtDbGF1c2UsIENvbGxlY3Rpb25zLCBPcmRlckJ5Q2xhdXNlfSBmcm9tIFwiLi9Db2xsZWN0aW9uc1wiO1xuaW1wb3J0IHtQbGFpblRleHRTdHIsIFVSTFN0cn0gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvdXRpbC9TdHJpbmdzXCI7XG5pbXBvcnQge0FycmF5c30gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvdXRpbC9BcnJheXNcIjtcblxuY29uc3QgSEFTSENPREVfTEVOID0gMjA7XG5cbmV4cG9ydCBjbGFzcyBHcm91cHMge1xuXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBDT0xMRUNUSU9OID0gJ2dyb3VwJztcblxuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlSURGb3JLZXkodWlkOiBVc2VySURTdHIsIGtleTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBIYXNoY29kZXMuY3JlYXRlSUQoe2tleSwgdWlkfSwgSEFTSENPREVfTEVOKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGdldChpZDogR3JvdXBJRFN0cik6IFByb21pc2U8R3JvdXAgfCB1bmRlZmluZWQ+IHtcbiAgICAgICAgY29uc3QgZmlyZXN0b3JlID0gYXdhaXQgRmlyZXN0b3JlLmdldEluc3RhbmNlKCk7XG4gICAgICAgIGNvbnN0IHJlZiA9IGZpcmVzdG9yZS5jb2xsZWN0aW9uKHRoaXMuQ09MTEVDVElPTikuZG9jKGlkKTtcbiAgICAgICAgY29uc3QgZG9jID0gYXdhaXQgcmVmLmdldCgpO1xuICAgICAgICByZXR1cm4gPEdyb3VwPiBkb2MuZGF0YSgpO1xuICAgIH1cblxuICAgIC8vIFRPRE86IGdldCBhbmQgZ2V0QWxsIGNvdWxkIGJlIHJlZmFjdG9yZWQgdG8gdXNlIEFycmF5cy5maXJzdCBhbmQgYW4gZW1wdHlcbiAgICAvLyBhcnJheSB3aGVuIHRoZSBpdGVtIGlzIG1pc3NpbmcuXG5cbiAgICBwdWJsaWMgIHN0YXRpYyBhc3luYyBnZXRBbGwoaWRlbnRpZmllcnM6IFJlYWRvbmx5QXJyYXk8R3JvdXBJRFN0cj4pOiBQcm9taXNlPFJlYWRvbmx5QXJyYXk8R3JvdXA+PiB7XG4gICAgICAgIGNvbnN0IHByb21pc2VzID0gaWRlbnRpZmllcnMubWFwKGlkID0+IHRoaXMuZ2V0KGlkKSk7XG4gICAgICAgIGNvbnN0IHJlc29sdmVkID0gYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuICAgICAgICByZXR1cm4gQXJyYXlzLm9ubHlEZWZpbmVkKHJlc29sdmVkKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGdldEJ5TmFtZShuYW1lOiBzdHJpbmcpOiBQcm9taXNlPEdyb3VwIHwgdW5kZWZpbmVkPiB7XG5cbiAgICAgICAgLy8gcHJvdGVjdGVkIGFuZCBwcml2YXRlIGdyb3VwcyBjYW4gbm90IGhhdmUgbmFtZXMgYW5kIHRoZXNlIG11c3QgYmUgcHVibGljLlxuICAgICAgICBjb25zdCBjbGF1c2VzOiBSZWFkb25seUFycmF5PENsYXVzZT4gPSBbXG4gICAgICAgICAgICBbJ3Zpc2liaWxpdHknLCAnPT0nICwgJ3B1YmxpYyddLFxuICAgICAgICAgICAgWyduYW1lJywgJz09JywgbmFtZV1cbiAgICAgICAgXTtcblxuICAgICAgICByZXR1cm4gQ29sbGVjdGlvbnMuZ2V0QnlGaWVsZFZhbHVlcyh0aGlzLkNPTExFQ1RJT04sIGNsYXVzZXMpO1xuXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBleGVjdXRlU2VhcmNoV2l0aFRhZ3ModGFnczogUmVhZG9ubHlBcnJheTxUYWdTdHI+KTogUHJvbWlzZTxSZWFkb25seUFycmF5PEdyb3VwPj4ge1xuXG4gICAgICAgIC8vIElOREVYRVMgTkVFREVEXG4gICAgICAgIC8vXG4gICAgICAgIC8vIHZpc2liaWxpdHksIGxhbmcsIHRhZ3MsIG5yTWVtYmVyc1xuICAgICAgICAvLyB2aXNpYmlsaXR5LCB0YWdzLCBuck1lbWJlcnNcblxuICAgICAgICAvLyBzZWFyY2ggYnkgdGFnIGFuZCBieSBudW1iZXIgb2YgbWVtYmVycyBkZXNjZW5kaW5nXG5cbiAgICAgICAgLy8gbm8gcGFnaW5nIHlldC4uIGp1c3QgdG9wIGdyb3VwcyB0byBnZXQgdGhpcyB3b3JraW5nIGFuZCBvZmYgdGhlIGdyb3VwbmRcblxuICAgICAgICBjb25zdCB2aXNpYmlsaXR5Q2xhdXNlczogUmVhZG9ubHlBcnJheTxDbGF1c2U+ID0gW1xuICAgICAgICAgICAgWyd2aXNpYmlsaXR5JywgJz09JyAsICdwdWJsaWMnXVxuICAgICAgICBdO1xuXG4gICAgICAgIGNvbnN0IHRhZ0NsYXVzZXM6IFJlYWRvbmx5QXJyYXk8Q2xhdXNlPlxuICAgICAgICAgICAgPSB0YWdzLm1hcChjdXJyZW50ID0+IFsndGFncycsICdhcnJheS1jb250YWlucycsIGN1cnJlbnRdKTtcblxuICAgICAgICBjb25zdCBjbGF1c2VzOiBSZWFkb25seUFycmF5PENsYXVzZT4gPSBbLi4udmlzaWJpbGl0eUNsYXVzZXMsIC4uLnRhZ0NsYXVzZXNdO1xuXG4gICAgICAgIGNvbnN0IG9yZGVyQnk6IFJlYWRvbmx5QXJyYXk8T3JkZXJCeUNsYXVzZT4gPSBbXG4gICAgICAgICAgICBbJ25yTWVtYmVycycsICdkZXNjJ11cbiAgICAgICAgXTtcblxuICAgICAgICBjb25zdCBsaW1pdCA9IDUwO1xuXG4gICAgICAgIHJldHVybiBhd2FpdCBDb2xsZWN0aW9ucy5saXN0KHRoaXMuQ09MTEVDVElPTiwgIGNsYXVzZXMsIHtvcmRlckJ5LCBsaW1pdH0pO1xuXG4gICAgfVxuXG5cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIHRvcEdyb3VwcygpOiBQcm9taXNlPFJlYWRvbmx5QXJyYXk8R3JvdXA+PiB7XG5cbiAgICAgICAgLy8gSU5ERVhFUyBORUVERURcbiAgICAgICAgLy9cbiAgICAgICAgLy8gdmlzaWJpbGl0eSwgbGFuZywgdGFncywgbnJNZW1iZXJzXG4gICAgICAgIC8vIHZpc2liaWxpdHksIHRhZ3MsIG5yTWVtYmVyc1xuXG4gICAgICAgIC8vIHNlYXJjaCBieSB0YWcgYW5kIGJ5IG51bWJlciBvZiBtZW1iZXJzIGRlc2NlbmRpbmdcblxuICAgICAgICAvLyBubyBwYWdpbmcgeWV0Li4ganVzdCB0b3AgZ3JvdXBzIHRvIGdldCB0aGlzIHdvcmtpbmcgYW5kIG9mZiB0aGUgZ3JvdXBuZFxuXG4gICAgICAgIGNvbnN0IHZpc2liaWxpdHlDbGF1c2VzOiBSZWFkb25seUFycmF5PENsYXVzZT4gPSBbXG4gICAgICAgICAgICBbJ3Zpc2liaWxpdHknLCAnPT0nICwgJ3B1YmxpYyddXG4gICAgICAgIF07XG5cbiAgICAgICAgY29uc3QgY2xhdXNlczogUmVhZG9ubHlBcnJheTxDbGF1c2U+ID0gWy4uLnZpc2liaWxpdHlDbGF1c2VzXTtcblxuICAgICAgICBjb25zdCBvcmRlckJ5OiBSZWFkb25seUFycmF5PE9yZGVyQnlDbGF1c2U+ID0gW1xuICAgICAgICAgICAgWyduck1lbWJlcnMnLCAnZGVzYyddLFxuICAgICAgICAgICAgWyduYW1lJywgJ2FzYyddXG4gICAgICAgIF07XG5cbiAgICAgICAgY29uc3QgbGltaXQgPSA1MDtcblxuICAgICAgICByZXR1cm4gYXdhaXQgQ29sbGVjdGlvbnMubGlzdCh0aGlzLkNPTExFQ1RJT04sICBjbGF1c2VzLCB7b3JkZXJCeSwgbGltaXR9KTtcblxuICAgIH1cblxufVxuXG5cbmV4cG9ydCBpbnRlcmZhY2UgR3JvdXBJbml0IHtcblxuICAgIC8qKlxuICAgICAqIFdoZW4gc3BlY2lmaWVkLCB1c2UgdGhlIGdpdmVuIGdyb3VwIG5hbWUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbmFtZT86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIE11c3Qgc2V0IHRoZSBncm91cCB2aXNpYmlsaXR5IGhlcmUgc28gdGhhdCB3ZSBpbmhlcml0IHRoZSByaWdodCB2YWx1ZS5cbiAgICAgKi9cbiAgICByZWFkb25seSB2aXNpYmlsaXR5OiBHcm91cFZpc2liaWxpdHk7XG5cbiAgICByZWFkb25seSB0YWdzPzogUmVhZG9ubHlBcnJheTxUYWdTdHI+O1xuXG4gICAgLyoqXG4gICAgICogQSBzdHJpbmcgKG5vdCBIVE1MKSB0aGF0IGlzIHVzZWQgYXMgYSBkZXNjcmlwdGlvbiBmb3IgdGhpcyBkb2N1bWVudC5cbiAgICAgKi9cbiAgICByZWFkb25seSBkZXNjcmlwdGlvbj86IFBsYWluVGV4dFN0cjtcblxuICAgIHJlYWRvbmx5IGxpbmtzPzogUmVhZG9ubHlBcnJheTxVUkxTdHIgfCBFeHRlcm5hbExpbms+O1xuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3JvdXAgZXh0ZW5kcyBHcm91cEluaXQge1xuXG4gICAgcmVhZG9ubHkgaWQ6IEdyb3VwSURTdHI7XG4gICAgcmVhZG9ubHkgbnJNZW1iZXJzOiBudW1iZXI7XG4gICAgcmVhZG9ubHkgY3JlYXRlZDogSVNPRGF0ZVRpbWVTdHJpbmc7XG5cbn1cbmV4cG9ydCB0eXBlIEdyb3VwVmlzaWJpbGl0eSA9ICdwcml2YXRlJyB8ICdwcm90ZWN0ZWQnIHwgJ3B1YmxpYyc7XG5cbmV4cG9ydCB0eXBlIFRhZ1N0ciA9IHN0cmluZztcblxuZXhwb3J0IHR5cGUgR3JvdXBOYW1lU3RyID0gc3RyaW5nO1xuIl19