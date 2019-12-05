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
const Firestore_1 = require("./Firestore");
const Objects_1 = require("polar-shared/src/util/Objects");
class FirestoreQueryCursor {
    constructor(collection, whereClause, options = new DefaultFirestoreQueryCursorOptions()) {
        this.collection = collection;
        this.whereClause = whereClause;
        this.options = Objects_1.Objects.defaults(options, new DefaultFirestoreQueryCursorOptions());
    }
    hasNext() {
        return this.querySnapshot === undefined || this.querySnapshot.size >= this.options.limit;
    }
    next() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("=========================");
            const firestore = yield Firestore_1.Firestore.getInstance();
            let query;
            if (this.querySnapshot === undefined) {
                query = firestore
                    .collection(this.collection)
                    .where(this.whereClause.fieldPath, this.whereClause.opStr, this.whereClause.value)
                    .orderBy(this.options.orderBy)
                    .limit(this.options.limit);
            }
            else {
                query = firestore
                    .collection(this.collection)
                    .where(this.whereClause.fieldPath, this.whereClause.opStr, this.whereClause.value)
                    .orderBy(this.options.orderBy)
                    .startAfter(this.startAfter)
                    .limit(this.options.limit);
            }
            this.querySnapshot = yield query.get(this.options.getOptions);
            const len = this.querySnapshot.docs.length;
            if (len > 0) {
                const lastDoc = this.querySnapshot.docs[len - 1];
                this.startAfter = lastDoc.id;
            }
            return this.querySnapshot;
        });
    }
}
exports.FirestoreQueryCursor = FirestoreQueryCursor;
class DefaultFirestoreQueryCursorOptions {
    constructor() {
        this.limit = 100;
        this.orderBy = "id";
    }
}
exports.DefaultFirestoreQueryCursorOptions = DefaultFirestoreQueryCursorOptions;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlyZXN0b3JlUXVlcnlDdXJzb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJGaXJlc3RvcmVRdWVyeUN1cnNvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQUFzQztBQUN0QywyREFBc0Q7QUFPdEQsTUFBYSxvQkFBb0I7SUFVN0IsWUFBWSxVQUFrQixFQUNsQixXQUF3QixFQUN4QixVQUFnRCxJQUFJLGtDQUFrQyxFQUFFO1FBRWhHLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxPQUFPLEdBQUcsaUJBQU8sQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLElBQUksa0NBQWtDLEVBQUUsQ0FBQyxDQUFDO0lBRXZGLENBQUM7SUFFTSxPQUFPO1FBQ1YsT0FBTyxJQUFJLENBQUMsYUFBYSxLQUFLLFNBQVMsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztJQUM3RixDQUFDO0lBRVksSUFBSTs7WUFFYixPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUM7WUFFekMsTUFBTSxTQUFTLEdBQUcsTUFBTSxxQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBRWhELElBQUksS0FBK0IsQ0FBQztZQUVwQyxJQUFJLElBQUksQ0FBQyxhQUFhLEtBQUssU0FBUyxFQUFFO2dCQUVsQyxLQUFLLEdBQUcsU0FBUztxQkFDWixVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztxQkFDM0IsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO3FCQUNqRixPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7cUJBQzdCLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBRWxDO2lCQUFNO2dCQUVILEtBQUssR0FBRyxTQUFTO3FCQUNaLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO3FCQUMzQixLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7cUJBQ2pGLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztxQkFDN0IsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7cUJBQzNCLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBRWxDO1lBRUQsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUU5RCxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7WUFFM0MsSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFO2dCQUNULE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDakQsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDO2FBQ2hDO1lBRUQsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBRTlCLENBQUM7S0FBQTtDQUVKO0FBaEVELG9EQWdFQztBQVFELE1BQWEsa0NBQWtDO0lBQS9DO1FBQ29CLFVBQUssR0FBVyxHQUFHLENBQUM7UUFDcEIsWUFBTyxHQUFXLElBQUksQ0FBQztJQUMzQyxDQUFDO0NBQUE7QUFIRCxnRkFHQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RmlyZXN0b3JlfSBmcm9tICcuL0ZpcmVzdG9yZSc7XG5pbXBvcnQge09iamVjdHN9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL3V0aWwvT2JqZWN0c1wiO1xuXG4vKipcbiAqIEJ1aWxkIGEgc2ltcGxlIHF1ZXJ5IGN1cnNvciBmb3IgRmlyZXNvdHJlIHF1ZXJpZXMuXG4gKlxuICogaHR0cHM6Ly9maXJlYmFzZS5nb29nbGUuY29tL2RvY3MvZmlyZXN0b3JlL3F1ZXJ5LWRhdGEvcXVlcnktY3Vyc29yc1xuICovXG5leHBvcnQgY2xhc3MgRmlyZXN0b3JlUXVlcnlDdXJzb3Ige1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBjb2xsZWN0aW9uOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSByZWFkb25seSB3aGVyZUNsYXVzZTogV2hlcmVDbGF1c2U7XG4gICAgcHJpdmF0ZSByZWFkb25seSBvcHRpb25zOiBGaXJlc3RvcmVRdWVyeUN1cnNvck9wdGlvbnM7XG5cbiAgICBwcml2YXRlIHF1ZXJ5U25hcHNob3Q6IGZpcmViYXNlLmZpcmVzdG9yZS5RdWVyeVNuYXBzaG90IHwgdW5kZWZpbmVkO1xuXG4gICAgcHJpdmF0ZSBzdGFydEFmdGVyOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb2xsZWN0aW9uOiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgd2hlcmVDbGF1c2U6IFdoZXJlQ2xhdXNlLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IFBhcnRpYWw8RmlyZXN0b3JlUXVlcnlDdXJzb3JPcHRpb25zPiA9IG5ldyBEZWZhdWx0RmlyZXN0b3JlUXVlcnlDdXJzb3JPcHRpb25zKCkpIHtcblxuICAgICAgICB0aGlzLmNvbGxlY3Rpb24gPSBjb2xsZWN0aW9uO1xuICAgICAgICB0aGlzLndoZXJlQ2xhdXNlID0gd2hlcmVDbGF1c2U7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdHMuZGVmYXVsdHMob3B0aW9ucywgbmV3IERlZmF1bHRGaXJlc3RvcmVRdWVyeUN1cnNvck9wdGlvbnMoKSk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgaGFzTmV4dCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucXVlcnlTbmFwc2hvdCA9PT0gdW5kZWZpbmVkIHx8IHRoaXMucXVlcnlTbmFwc2hvdC5zaXplID49IHRoaXMub3B0aW9ucy5saW1pdDtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgbmV4dCgpOiBQcm9taXNlPGZpcmViYXNlLmZpcmVzdG9yZS5RdWVyeVNuYXBzaG90PiB7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCI9PT09PT09PT09PT09PT09PT09PT09PT09XCIpO1xuXG4gICAgICAgIGNvbnN0IGZpcmVzdG9yZSA9IGF3YWl0IEZpcmVzdG9yZS5nZXRJbnN0YW5jZSgpO1xuXG4gICAgICAgIGxldCBxdWVyeTogZmlyZWJhc2UuZmlyZXN0b3JlLlF1ZXJ5O1xuXG4gICAgICAgIGlmICh0aGlzLnF1ZXJ5U25hcHNob3QgPT09IHVuZGVmaW5lZCkge1xuXG4gICAgICAgICAgICBxdWVyeSA9IGZpcmVzdG9yZVxuICAgICAgICAgICAgICAgIC5jb2xsZWN0aW9uKHRoaXMuY29sbGVjdGlvbilcbiAgICAgICAgICAgICAgICAud2hlcmUodGhpcy53aGVyZUNsYXVzZS5maWVsZFBhdGgsIHRoaXMud2hlcmVDbGF1c2Uub3BTdHIsIHRoaXMud2hlcmVDbGF1c2UudmFsdWUpXG4gICAgICAgICAgICAgICAgLm9yZGVyQnkodGhpcy5vcHRpb25zLm9yZGVyQnkpXG4gICAgICAgICAgICAgICAgLmxpbWl0KHRoaXMub3B0aW9ucy5saW1pdCk7XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgcXVlcnkgPSBmaXJlc3RvcmVcbiAgICAgICAgICAgICAgICAuY29sbGVjdGlvbih0aGlzLmNvbGxlY3Rpb24pXG4gICAgICAgICAgICAgICAgLndoZXJlKHRoaXMud2hlcmVDbGF1c2UuZmllbGRQYXRoLCB0aGlzLndoZXJlQ2xhdXNlLm9wU3RyLCB0aGlzLndoZXJlQ2xhdXNlLnZhbHVlKVxuICAgICAgICAgICAgICAgIC5vcmRlckJ5KHRoaXMub3B0aW9ucy5vcmRlckJ5KVxuICAgICAgICAgICAgICAgIC5zdGFydEFmdGVyKHRoaXMuc3RhcnRBZnRlcilcbiAgICAgICAgICAgICAgICAubGltaXQodGhpcy5vcHRpb25zLmxpbWl0KTtcblxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5xdWVyeVNuYXBzaG90ID0gYXdhaXQgcXVlcnkuZ2V0KHRoaXMub3B0aW9ucy5nZXRPcHRpb25zKTtcblxuICAgICAgICBjb25zdCBsZW4gPSB0aGlzLnF1ZXJ5U25hcHNob3QuZG9jcy5sZW5ndGg7XG5cbiAgICAgICAgaWYgKGxlbiA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IGxhc3REb2MgPSB0aGlzLnF1ZXJ5U25hcHNob3QuZG9jc1tsZW4gLSAxXTtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRBZnRlciA9IGxhc3REb2MuaWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5xdWVyeVNuYXBzaG90O1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmlyZXN0b3JlUXVlcnlDdXJzb3JPcHRpb25zIHtcbiAgICByZWFkb25seSBsaW1pdDogbnVtYmVyO1xuICAgIHJlYWRvbmx5IG9yZGVyQnk6IHN0cmluZztcbiAgICByZWFkb25seSBnZXRPcHRpb25zPzogZmlyZWJhc2UuZmlyZXN0b3JlLkdldE9wdGlvbnM7XG59XG5cbmV4cG9ydCBjbGFzcyBEZWZhdWx0RmlyZXN0b3JlUXVlcnlDdXJzb3JPcHRpb25zIGltcGxlbWVudHMgRmlyZXN0b3JlUXVlcnlDdXJzb3JPcHRpb25zIHtcbiAgICBwdWJsaWMgcmVhZG9ubHkgbGltaXQ6IG51bWJlciA9IDEwMDtcbiAgICBwdWJsaWMgcmVhZG9ubHkgb3JkZXJCeTogc3RyaW5nID0gXCJpZFwiO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFdoZXJlQ2xhdXNlIHtcbiAgICByZWFkb25seSBmaWVsZFBhdGg6IHN0cmluZyB8IGZpcmViYXNlLmZpcmVzdG9yZS5GaWVsZFBhdGg7XG4gICAgcmVhZG9ubHkgb3BTdHI6IGZpcmViYXNlLmZpcmVzdG9yZS5XaGVyZUZpbHRlck9wO1xuICAgIHJlYWRvbmx5IHZhbHVlOiBhbnk7XG59XG4iXX0=