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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Firestore_1 = require("../firebase/Firestore");
const Hashcodes_1 = require("polar-shared/src/util/Hashcodes");
const ISODateTimeStrings_1 = require("polar-shared/src/metadata/ISODateTimeStrings");
const Preconditions_1 = require("polar-shared/src/Preconditions");
const firebase = __importStar(require("../firebase/lib/firebase"));
const Optional_1 = require("polar-shared/src/util/ts/Optional");
const RendererAnalytics_1 = require("../ga/RendererAnalytics");
const Visibility_1 = require("polar-shared/src/datastore/Visibility");
class Invitations {
    static sendInvites(...emailAddresses) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const firestore = yield Firestore_1.Firestore.getInstance();
                for (const emailAddress of emailAddresses) {
                    const record = this.createRecord(emailAddress);
                    yield firestore
                        .collection('invitation')
                        .doc(record.id)
                        .set(record);
                }
                RendererAnalytics_1.RendererAnalytics.event({ category: 'invitations', action: 'invited-' + emailAddresses.length });
            }
            finally {
            }
        });
    }
    static createRecord(to) {
        const auth = firebase.app().auth();
        Preconditions_1.Preconditions.assertPresent(auth, "Not authenticated");
        const user = auth.currentUser;
        Preconditions_1.Preconditions.assertPresent(user, "Not authenticated");
        const uid = user.uid;
        const id = Hashcodes_1.Hashcodes.createRandomID();
        let image;
        if (user.photoURL) {
            image = {
                href: user.photoURL
            };
        }
        const profile = {
            email: user.email,
            name: Optional_1.Optional.of(user.displayName).getOrUndefined(),
            image
        };
        const invitation = {
            timestamp: ISODateTimeStrings_1.ISODateTimeStrings.create(),
            from: profile,
            to
        };
        const recordHolder = {
            uid,
            id,
            visibility: Visibility_1.Visibility.PRIVATE,
            value: invitation
        };
        return recordHolder;
    }
}
exports.Invitations = Invitations;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW52aXRhdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJJbnZpdGF0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxxREFBZ0Q7QUFDaEQsK0RBQTBEO0FBQzFELHFGQUFtRztBQUNuRyxrRUFBNkQ7QUFDN0QsbUVBQXFEO0FBQ3JELGdFQUEyRDtBQUMzRCwrREFBMEQ7QUFDMUQsc0VBQWlFO0FBRWpFLE1BQWEsV0FBVztJQU9iLE1BQU0sQ0FBTyxXQUFXLENBQUMsR0FBRyxjQUF3Qjs7WUFHdkQsSUFBSTtnQkFFQSxNQUFNLFNBQVMsR0FBRyxNQUFNLHFCQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBRWhELEtBQUssTUFBTSxZQUFZLElBQUksY0FBYyxFQUFFO29CQUV2QyxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUUvQyxNQUFNLFNBQVM7eUJBQ1YsVUFBVSxDQUFDLFlBQVksQ0FBQzt5QkFDeEIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7eUJBQ2QsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2lCQUVwQjtnQkFFRCxxQ0FBaUIsQ0FBQyxLQUFLLENBQUMsRUFBQyxRQUFRLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxVQUFVLEdBQUcsY0FBYyxDQUFDLE1BQU0sRUFBQyxDQUFDLENBQUM7YUFFbEc7b0JBQVM7YUFFVDtRQUVMLENBQUM7S0FBQTtJQUtPLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBZ0I7UUFFeEMsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ25DLDZCQUFhLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1FBRXZELE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDOUIsNkJBQWEsQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLG1CQUFtQixDQUFDLENBQUM7UUFFdkQsTUFBTSxHQUFHLEdBQUcsSUFBSyxDQUFDLEdBQUcsQ0FBQztRQUV0QixNQUFNLEVBQUUsR0FBRyxxQkFBUyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRXRDLElBQUksS0FBd0IsQ0FBQztRQUU3QixJQUFJLElBQUssQ0FBQyxRQUFRLEVBQUU7WUFFaEIsS0FBSyxHQUFHO2dCQUNKLElBQUksRUFBRSxJQUFLLENBQUMsUUFBUzthQUN4QixDQUFDO1NBRUw7UUFFRCxNQUFNLE9BQU8sR0FBWTtZQUNyQixLQUFLLEVBQUUsSUFBSyxDQUFDLEtBQU07WUFDbkIsSUFBSSxFQUFFLG1CQUFRLENBQUMsRUFBRSxDQUFDLElBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxjQUFjLEVBQUU7WUFDckQsS0FBSztTQUNSLENBQUM7UUFFRixNQUFNLFVBQVUsR0FBZTtZQUMzQixTQUFTLEVBQUUsdUNBQWtCLENBQUMsTUFBTSxFQUFFO1lBQ3RDLElBQUksRUFBRSxPQUFPO1lBQ2IsRUFBRTtTQUNMLENBQUM7UUFFRixNQUFNLFlBQVksR0FBNkI7WUFDM0MsR0FBRztZQUNILEVBQUU7WUFDRixVQUFVLEVBQUUsdUJBQVUsQ0FBQyxPQUFPO1lBQzlCLEtBQUssRUFBRSxVQUFVO1NBQ3BCLENBQUM7UUFFRixPQUFPLFlBQVksQ0FBQztJQUV4QixDQUFDO0NBRUo7QUFqRkQsa0NBaUZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtSZWNvcmRIb2xkZXJ9IGZyb20gJy4vRmlyZWJhc2VEYXRhc3RvcmUnO1xuaW1wb3J0IHtGaXJlc3RvcmV9IGZyb20gJy4uL2ZpcmViYXNlL0ZpcmVzdG9yZSc7XG5pbXBvcnQge0hhc2hjb2Rlc30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL0hhc2hjb2Rlcyc7XG5pbXBvcnQge0lTT0RhdGVUaW1lU3RyaW5nLCBJU09EYXRlVGltZVN0cmluZ3N9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbWV0YWRhdGEvSVNPRGF0ZVRpbWVTdHJpbmdzJztcbmltcG9ydCB7UHJlY29uZGl0aW9uc30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9QcmVjb25kaXRpb25zJztcbmltcG9ydCAqIGFzIGZpcmViYXNlIGZyb20gJy4uL2ZpcmViYXNlL2xpYi9maXJlYmFzZSc7XG5pbXBvcnQge09wdGlvbmFsfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvdHMvT3B0aW9uYWwnO1xuaW1wb3J0IHtSZW5kZXJlckFuYWx5dGljc30gZnJvbSAnLi4vZ2EvUmVuZGVyZXJBbmFseXRpY3MnO1xuaW1wb3J0IHtWaXNpYmlsaXR5fSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy9kYXRhc3RvcmUvVmlzaWJpbGl0eVwiO1xuXG5leHBvcnQgY2xhc3MgSW52aXRhdGlvbnMge1xuXG4gICAgLyoqXG4gICAgICogU2VuZCBlbWFpbHMgdG8gYSBidW5jaCBvZiBwZW9wbGUuLi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbWFpbFxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgc2VuZEludml0ZXMoLi4uZW1haWxBZGRyZXNzZXM6IHN0cmluZ1tdKSB7XG5cblxuICAgICAgICB0cnkge1xuXG4gICAgICAgICAgICBjb25zdCBmaXJlc3RvcmUgPSBhd2FpdCBGaXJlc3RvcmUuZ2V0SW5zdGFuY2UoKTtcblxuICAgICAgICAgICAgZm9yIChjb25zdCBlbWFpbEFkZHJlc3Mgb2YgZW1haWxBZGRyZXNzZXMpIHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHJlY29yZCA9IHRoaXMuY3JlYXRlUmVjb3JkKGVtYWlsQWRkcmVzcyk7XG5cbiAgICAgICAgICAgICAgICBhd2FpdCBmaXJlc3RvcmVcbiAgICAgICAgICAgICAgICAgICAgLmNvbGxlY3Rpb24oJ2ludml0YXRpb24nKVxuICAgICAgICAgICAgICAgICAgICAuZG9jKHJlY29yZC5pZClcbiAgICAgICAgICAgICAgICAgICAgLnNldChyZWNvcmQpO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFJlbmRlcmVyQW5hbHl0aWNzLmV2ZW50KHtjYXRlZ29yeTogJ2ludml0YXRpb25zJywgYWN0aW9uOiAnaW52aXRlZC0nICsgZW1haWxBZGRyZXNzZXMubGVuZ3RofSk7XG5cbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIC8vIG5vb3AgZm9yIG5vd1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgdGhlIGRvY3VtZW50IHRoYXQgd2Ugd2lsbCBzdG9yZSBpbiBmb3IgdGhlIERvY01ldGFcbiAgICAgKi9cbiAgICBwcml2YXRlIHN0YXRpYyBjcmVhdGVSZWNvcmQodG86IEVtYWlsQWRkcmVzcykge1xuXG4gICAgICAgIGNvbnN0IGF1dGggPSBmaXJlYmFzZS5hcHAoKS5hdXRoKCk7XG4gICAgICAgIFByZWNvbmRpdGlvbnMuYXNzZXJ0UHJlc2VudChhdXRoLCBcIk5vdCBhdXRoZW50aWNhdGVkXCIpO1xuXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhdXRoLmN1cnJlbnRVc2VyO1xuICAgICAgICBQcmVjb25kaXRpb25zLmFzc2VydFByZXNlbnQodXNlciwgXCJOb3QgYXV0aGVudGljYXRlZFwiKTtcblxuICAgICAgICBjb25zdCB1aWQgPSB1c2VyIS51aWQ7XG5cbiAgICAgICAgY29uc3QgaWQgPSBIYXNoY29kZXMuY3JlYXRlUmFuZG9tSUQoKTtcblxuICAgICAgICBsZXQgaW1hZ2U6IEltYWdlIHwgdW5kZWZpbmVkO1xuXG4gICAgICAgIGlmICh1c2VyIS5waG90b1VSTCkge1xuXG4gICAgICAgICAgICBpbWFnZSA9IHtcbiAgICAgICAgICAgICAgICBocmVmOiB1c2VyIS5waG90b1VSTCFcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHByb2ZpbGU6IFByb2ZpbGUgPSB7XG4gICAgICAgICAgICBlbWFpbDogdXNlciEuZW1haWwhLFxuICAgICAgICAgICAgbmFtZTogT3B0aW9uYWwub2YodXNlciEuZGlzcGxheU5hbWUpLmdldE9yVW5kZWZpbmVkKCksXG4gICAgICAgICAgICBpbWFnZVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGludml0YXRpb246IEludml0YXRpb24gPSB7XG4gICAgICAgICAgICB0aW1lc3RhbXA6IElTT0RhdGVUaW1lU3RyaW5ncy5jcmVhdGUoKSxcbiAgICAgICAgICAgIGZyb206IHByb2ZpbGUsXG4gICAgICAgICAgICB0b1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHJlY29yZEhvbGRlcjogUmVjb3JkSG9sZGVyPEludml0YXRpb24+ID0ge1xuICAgICAgICAgICAgdWlkLFxuICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICB2aXNpYmlsaXR5OiBWaXNpYmlsaXR5LlBSSVZBVEUsXG4gICAgICAgICAgICB2YWx1ZTogaW52aXRhdGlvblxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiByZWNvcmRIb2xkZXI7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJbnZpdGF0aW9uIHtcblxuICAgIHJlYWRvbmx5IHRpbWVzdGFtcDogSVNPRGF0ZVRpbWVTdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcHJvZmlsZSBpbmZvcm1hdGlvbiBvZiB0aGUgcGVyc29uIHdobyBzZW5kIHRoZSBpbnZpdGUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZnJvbTogUHJvZmlsZTtcblxuICAgIHJlYWRvbmx5IHRvOiBFbWFpbEFkZHJlc3M7XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBQcm9maWxlIHtcbiAgICByZWFkb25seSBlbWFpbDogRW1haWxBZGRyZXNzO1xuICAgIHJlYWRvbmx5IG5hbWU/OiBzdHJpbmc7XG4gICAgcmVhZG9ubHkgaW1hZ2U/OiBJbWFnZTtcblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEltYWdlIHtcbiAgICByZWFkb25seSBocmVmOiBzdHJpbmc7XG4gICAgcmVhZG9ubHkgd2lkdGg/OiBudW1iZXI7XG4gICAgcmVhZG9ubHkgaGVpZ2h0PzogbnVtYmVyO1xufVxuXG5leHBvcnQgdHlwZSBFbWFpbEFkZHJlc3MgPSBzdHJpbmc7XG5cbiJdfQ==