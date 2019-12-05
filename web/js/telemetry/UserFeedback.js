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
const Firestore_1 = require("../firebase/Firestore");
const Hashcodes_1 = require("polar-shared/src/util/Hashcodes");
class UserFeedbacks {
    static write(userFeedback) {
        return __awaiter(this, void 0, void 0, function* () {
            const firestore = yield Firestore_1.Firestore.getInstance();
            const id = Hashcodes_1.Hashcodes.createRandomID();
            const ref = firestore.collection("user_feedback").doc(id);
            yield ref.set(userFeedback);
        });
    }
}
exports.UserFeedbacks = UserFeedbacks;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlckZlZWRiYWNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVXNlckZlZWRiYWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0EscURBQWdEO0FBQ2hELCtEQUEwRDtBQUcxRCxNQUFhLGFBQWE7SUFFZixNQUFNLENBQU8sS0FBSyxDQUFDLFlBQTBCOztZQUVoRCxNQUFNLFNBQVMsR0FBRyxNQUFNLHFCQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7WUFFaEQsTUFBTSxFQUFFLEdBQUcscUJBQVMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUV0QyxNQUFNLEdBQUcsR0FBRyxTQUFTLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUUxRCxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFaEMsQ0FBQztLQUFBO0NBRUo7QUFkRCxzQ0FjQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SVNPRGF0ZVRpbWVTdHJpbmd9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbWV0YWRhdGEvSVNPRGF0ZVRpbWVTdHJpbmdzJztcbmltcG9ydCB7RmlyZXN0b3JlfSBmcm9tICcuLi9maXJlYmFzZS9GaXJlc3RvcmUnO1xuaW1wb3J0IHtIYXNoY29kZXN9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC9IYXNoY29kZXMnO1xuaW1wb3J0IHtNYWNoaW5lSUR9IGZyb20gJy4uL3V0aWwvTWFjaGluZUlEcyc7XG5cbmV4cG9ydCBjbGFzcyBVc2VyRmVlZGJhY2tzIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgd3JpdGUodXNlckZlZWRiYWNrOiBVc2VyRmVlZGJhY2spIHtcblxuICAgICAgICBjb25zdCBmaXJlc3RvcmUgPSBhd2FpdCBGaXJlc3RvcmUuZ2V0SW5zdGFuY2UoKTtcblxuICAgICAgICBjb25zdCBpZCA9IEhhc2hjb2Rlcy5jcmVhdGVSYW5kb21JRCgpO1xuXG4gICAgICAgIGNvbnN0IHJlZiA9IGZpcmVzdG9yZS5jb2xsZWN0aW9uKFwidXNlcl9mZWVkYmFja1wiKS5kb2MoaWQpO1xuXG4gICAgICAgIGF3YWl0IHJlZi5zZXQodXNlckZlZWRiYWNrKTtcblxuICAgIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVzZXJGZWVkYmFjayB7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgc2NvcmUgdGhleSBnYXZlIHVzLiAgVGhpcyBpcyBpbXBvcnRhbnQgYXMgSSBuZWVkIHRoaXMgdG8gcHJpb3JpdGl6ZVxuICAgICAqIHRoZWlyIGZlZWRiYWNrIGFwcHJvcHJpYXRlbHkuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbmV0UHJvbW90ZXJTY29yZTogTmV0UHJvbW90ZXJTY29yZSB8IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBUaGVpciBhY3R1YWwgdGV4dCB0aGF0IHRoZXkgcHJvdmlkZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGV4dDogc3RyaW5nIHwgbnVsbDtcblxuICAgIHJlYWRvbmx5IGNyZWF0ZWQ6IElTT0RhdGVUaW1lU3RyaW5nO1xuXG4gICAgcmVhZG9ubHkgbWFjaGluZTogTWFjaGluZUlEO1xuXG4gICAgcmVhZG9ubHkgdmVyc2lvbjogc3RyaW5nO1xuXG4gICAgLy8gVE9ETzogbW9yZSBmaWVsZHMgaW5jbHVkaW5nIGEgdW5pcXVlL2JsaW5kZWQgSUQgZm9yIHRoZSB1c2VyLCB0aGUgZGF0ZVxuICAgIC8vIHRoZWlyIGFjY291bnQgd2FzIGNyZWF0ZWQgKHNvIEkgY2FuIGRvIGNvaG9ydHMgZm9yIHRoaXMpXG5cbn1cblxuZXhwb3J0IHR5cGUgTmV0UHJvbW90ZXJTY29yZSA9IDAgfCAxIHwgMiB8IDMgfCA0IHwgNSB8IDYgfCA3IHwgOCB8IDkgfCAxMDtcblxuIl19