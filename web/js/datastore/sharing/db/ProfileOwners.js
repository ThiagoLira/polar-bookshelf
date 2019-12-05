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
const DocumentReferences_1 = require("../../../firebase/firestore/DocumentReferences");
class ProfileOwners {
    static doc(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const firestore = yield Firestore_1.Firestore.getInstance();
            const doc = firestore.collection(this.COLLECTION).doc(id);
            return [id, doc];
        });
    }
    static get(id, opts = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!id) {
                const user = yield Firebase_1.Firebase.currentUser();
                if (!user) {
                    return undefined;
                }
                id = user.uid;
            }
            const [_, ref] = yield this.doc(id);
            const doc = yield DocumentReferences_1.DocumentReferences.get(ref, opts);
            return doc.data();
        });
    }
}
exports.ProfileOwners = ProfileOwners;
ProfileOwners.COLLECTION = 'profile_owner';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZmlsZU93bmVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlByb2ZpbGVPd25lcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFHQSwyREFBc0Q7QUFHdEQseURBQW9EO0FBQ3BELHVGQUE4RjtBQUU5RixNQUFhLGFBQWE7SUFJZixNQUFNLENBQU8sR0FBRyxDQUFDLEVBQWE7O1lBQ2pDLE1BQU0sU0FBUyxHQUFHLE1BQU0scUJBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNoRCxNQUFNLEdBQUcsR0FBRyxTQUFTLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDMUQsT0FBTyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNyQixDQUFDO0tBQUE7SUFFTSxNQUFNLENBQU8sR0FBRyxDQUFDLEVBQWMsRUFBRSxPQUFtQixFQUFFOztZQUV6RCxJQUFJLENBQUUsRUFBRSxFQUFFO2dCQUNOLE1BQU0sSUFBSSxHQUFHLE1BQU0sbUJBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFFMUMsSUFBSSxDQUFFLElBQUksRUFBRTtvQkFDUixPQUFPLFNBQVMsQ0FBQztpQkFDcEI7Z0JBRUQsRUFBRSxHQUFHLElBQUssQ0FBQyxHQUFHLENBQUM7YUFDbEI7WUFFRCxNQUFNLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxHQUFHLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNwQyxNQUFNLEdBQUcsR0FBRyxNQUFNLHVDQUFrQixDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDcEQsT0FBc0IsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JDLENBQUM7S0FBQTs7QUF6Qkwsc0NBMkJDO0FBekIwQix3QkFBVSxHQUFHLGVBQWUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RW1haWxTdHIsIFVzZXJJRFN0cn0gZnJvbSAnLi9Qcm9maWxlcyc7XG5pbXBvcnQge0hhbmRsZVN0cn0gZnJvbSAnLi9Qcm9maWxlcyc7XG5pbXBvcnQge1Byb2ZpbGVJRFN0cn0gZnJvbSAnLi9Qcm9maWxlcyc7XG5pbXBvcnQge0ZpcmVzdG9yZX0gZnJvbSAnLi4vLi4vLi4vZmlyZWJhc2UvRmlyZXN0b3JlJztcbmltcG9ydCAqIGFzIGZpcmViYXNlIGZyb20gJy4uLy4uLy4uL2ZpcmViYXNlL2xpYi9maXJlYmFzZSc7XG5pbXBvcnQgRG9jdW1lbnRSZWZlcmVuY2UgPSBmaXJlYmFzZS5maXJlc3RvcmUuRG9jdW1lbnRSZWZlcmVuY2U7XG5pbXBvcnQge0ZpcmViYXNlfSBmcm9tIFwiLi4vLi4vLi4vZmlyZWJhc2UvRmlyZWJhc2VcIjtcbmltcG9ydCB7RG9jdW1lbnRSZWZlcmVuY2VzLCBHZXRPcHRpb25zfSBmcm9tIFwiLi4vLi4vLi4vZmlyZWJhc2UvZmlyZXN0b3JlL0RvY3VtZW50UmVmZXJlbmNlc1wiO1xuXG5leHBvcnQgY2xhc3MgUHJvZmlsZU93bmVycyB7XG5cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IENPTExFQ1RJT04gPSAncHJvZmlsZV9vd25lcic7XG5cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGRvYyhpZDogVXNlcklEU3RyKTogUHJvbWlzZTxbSGFuZGxlU3RyLCBEb2N1bWVudFJlZmVyZW5jZV0+IHtcbiAgICAgICAgY29uc3QgZmlyZXN0b3JlID0gYXdhaXQgRmlyZXN0b3JlLmdldEluc3RhbmNlKCk7XG4gICAgICAgIGNvbnN0IGRvYyA9IGZpcmVzdG9yZS5jb2xsZWN0aW9uKHRoaXMuQ09MTEVDVElPTikuZG9jKGlkKTtcbiAgICAgICAgcmV0dXJuIFtpZCwgZG9jXTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGdldChpZD86IFVzZXJJRFN0ciwgb3B0czogR2V0T3B0aW9ucyA9IHt9KTogUHJvbWlzZTxQcm9maWxlT3duZXIgfCB1bmRlZmluZWQ+IHtcblxuICAgICAgICBpZiAoISBpZCkge1xuICAgICAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IEZpcmViYXNlLmN1cnJlbnRVc2VyKCk7XG5cbiAgICAgICAgICAgIGlmICghIHVzZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZCA9IHVzZXIhLnVpZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IFtfLCByZWZdID0gYXdhaXQgdGhpcy5kb2MoaWQpO1xuICAgICAgICBjb25zdCBkb2MgPSBhd2FpdCBEb2N1bWVudFJlZmVyZW5jZXMuZ2V0KHJlZiwgb3B0cyk7XG4gICAgICAgIHJldHVybiA8UHJvZmlsZU93bmVyPiBkb2MuZGF0YSgpO1xuICAgIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFByb2ZpbGVPd25lciB7XG5cbiAgICByZWFkb25seSB1aWQ6IFVzZXJJRFN0cjtcblxuICAgIHJlYWRvbmx5IHByb2ZpbGVJRDogUHJvZmlsZUlEU3RyO1xuICAgIC8qKlxuICAgICAqIFRoZSBlbWFpbCBmb3IgdGhlIHByb2ZpbGUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZW1haWw6IEVtYWlsU3RyO1xuXG4gICAgcmVhZG9ubHkgaGFuZGxlPzogSGFuZGxlU3RyO1xuXG59XG4iXX0=