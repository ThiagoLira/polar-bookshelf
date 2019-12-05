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
const FirebaseDatastore_1 = require("../../FirebaseDatastore");
const Firestore_1 = require("../../../firebase/Firestore");
class DocPermissions {
    static get(id, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const firestore = yield Firestore_1.Firestore.getInstance();
            const ref = firestore
                .collection(FirebaseDatastore_1.DatastoreCollection.DOC_META)
                .doc(id);
            const doc = yield ref.get(options);
            if (doc.exists) {
                return doc.data();
            }
            return undefined;
        });
    }
}
exports.DocPermissions = DocPermissions;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jUGVybWlzc2lvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJEb2NQZXJtaXNzaW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBLCtEQUE0RDtBQUM1RCwyREFBc0Q7QUFLdEQsTUFBYSxjQUFjO0lBRWhCLE1BQU0sQ0FBTyxHQUFHLENBQUMsRUFBc0IsRUFBRSxPQUFvQjs7WUFFaEUsTUFBTSxTQUFTLEdBQUcsTUFBTSxxQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBRWhELE1BQU0sR0FBRyxHQUFHLFNBQVM7aUJBQ2hCLFVBQVUsQ0FBQyx1Q0FBbUIsQ0FBQyxRQUFRLENBQUM7aUJBQ3hDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUViLE1BQU0sR0FBRyxHQUFHLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUVuQyxJQUFJLEdBQUcsQ0FBQyxNQUFNLEVBQUU7Z0JBQ1osT0FBdUIsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ3JDO1lBRUQsT0FBTyxTQUFTLENBQUM7UUFFckIsQ0FBQztLQUFBO0NBRUo7QUFwQkQsd0NBb0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtHcm91cElEU3RyfSBmcm9tIFwiLi4vLi4vRGF0YXN0b3JlXCI7XG5pbXBvcnQge0RhdGFzdG9yZUNvbGxlY3Rpb259IGZyb20gXCIuLi8uLi9GaXJlYmFzZURhdGFzdG9yZVwiO1xuaW1wb3J0IHtGaXJlc3RvcmV9IGZyb20gXCIuLi8uLi8uLi9maXJlYmFzZS9GaXJlc3RvcmVcIjtcbmltcG9ydCAqIGFzIGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZVwiO1xuaW1wb3J0IEdldE9wdGlvbnMgPSBmaXJlYmFzZS5maXJlc3RvcmUuR2V0T3B0aW9ucztcbmltcG9ydCB7VmlzaWJpbGl0eX0gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvZGF0YXN0b3JlL1Zpc2liaWxpdHlcIjtcblxuZXhwb3J0IGNsYXNzIERvY1Blcm1pc3Npb25zIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgZ2V0KGlkOiBEb2NQZXJtaXNzaW9uSURTdHIsIG9wdGlvbnM/OiBHZXRPcHRpb25zKSB7XG5cbiAgICAgICAgY29uc3QgZmlyZXN0b3JlID0gYXdhaXQgRmlyZXN0b3JlLmdldEluc3RhbmNlKCk7XG5cbiAgICAgICAgY29uc3QgcmVmID0gZmlyZXN0b3JlXG4gICAgICAgICAgICAuY29sbGVjdGlvbihEYXRhc3RvcmVDb2xsZWN0aW9uLkRPQ19NRVRBKVxuICAgICAgICAgICAgLmRvYyhpZCk7XG5cbiAgICAgICAgY29uc3QgZG9jID0gYXdhaXQgcmVmLmdldChvcHRpb25zKTtcblxuICAgICAgICBpZiAoZG9jLmV4aXN0cykge1xuICAgICAgICAgICAgcmV0dXJuIDxEb2NQZXJtaXNzaW9uPiBkb2MuZGF0YSgpO1xuICAgICAgICB9wqBcblxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRG9jUGVybWlzc2lvbiB7XG5cbiAgICAvLyB0aGUgdmlzaWJpbGl0eSBvZiB0aGlzIHJlY29yZC5cbiAgICByZWFkb25seSB2aXNpYmlsaXR5OiBWaXNpYmlsaXR5O1xuXG4gICAgcmVhZG9ubHkgZ3JvdXBzPzogUmVhZG9ubHlBcnJheTxHcm91cElEU3RyPjtcblxufVxuXG5leHBvcnQgdHlwZSBEb2NQZXJtaXNzaW9uSURTdHIgPSBzdHJpbmc7XG5cbiJdfQ==