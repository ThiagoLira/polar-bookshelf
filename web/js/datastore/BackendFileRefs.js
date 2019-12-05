"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Either_1 = require("../util/Either");
const Backend_1 = require("polar-shared/src/datastore/Backend");
const Logger_1 = require("polar-shared/src/logger/Logger");
const Preconditions_1 = require("polar-shared/src/Preconditions");
const log = Logger_1.Logger.create();
class BackendFileRefs {
    static toBackendFileRef(either) {
        if (!either) {
            log.warn("No 'either' param specified.");
            return undefined;
        }
        const docInfo = Either_1.Either.ofLeft(either)
            .convertLeftToRight(left => left.docInfo);
        const filename = docInfo.filename;
        if (filename) {
            const backend = docInfo.backend || Backend_1.Backend.STASH;
            const backendFileRef = {
                name: filename,
                hashcode: docInfo.hashcode,
                backend
            };
            return backendFileRef;
        }
        else {
        }
        return undefined;
    }
    static toBackendFileRefs(either) {
        const result = [];
        const fileRef = this.toBackendFileRef(either);
        const docInfo = Either_1.Either.ofLeft(either)
            .convertLeftToRight(left => left.docInfo);
        if (fileRef) {
            const backend = docInfo.backend || Backend_1.Backend.STASH;
            result.push(Object.assign({ backend }, fileRef));
        }
        const attachments = docInfo.attachments || {};
        const attachmentRefs = Object.values(attachments)
            .map(current => current.fileRef)
            .filter(current => {
            if (Preconditions_1.isPresent(current)) {
                return true;
            }
            log.warn("Doc had missing attachment data: ", docInfo.fingerprint);
            return false;
        });
        result.push(...attachmentRefs);
        return result;
    }
    static equals(b0, b1) {
        return b0.backend === b1.backend && b0.name === b1.name && b0.hashcode === b1.hashcode;
    }
}
exports.BackendFileRefs = BackendFileRefs;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFja2VuZEZpbGVSZWZzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQmFja2VuZEZpbGVSZWZzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQWtEO0FBQ2xELGdFQUEyRDtBQUMzRCwyREFBc0Q7QUFDdEQsa0VBQXlEO0FBS3pELE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU1QixNQUFhLGVBQWU7SUFNakIsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQXlDO1FBRXBFLElBQUksQ0FBRSxNQUFNLEVBQUU7WUFDVixHQUFHLENBQUMsSUFBSSxDQUFDLDhCQUE4QixDQUFDLENBQUM7WUFDekMsT0FBTyxTQUFTLENBQUM7U0FDcEI7UUFFRCxNQUFNLE9BQU8sR0FDVCxlQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQzthQUNoQixrQkFBa0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVsRCxNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDO1FBRWxDLElBQUksUUFBUSxFQUFFO1lBSVYsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sSUFBSSxpQkFBTyxDQUFDLEtBQUssQ0FBQztZQUVqRCxNQUFNLGNBQWMsR0FBbUI7Z0JBQ25DLElBQUksRUFBRSxRQUFRO2dCQUNkLFFBQVEsRUFBRSxPQUFPLENBQUMsUUFBUTtnQkFDMUIsT0FBTzthQUNWLENBQUM7WUFFRixPQUFPLGNBQWMsQ0FBQztTQUV6QjthQUFNO1NBRU47UUFFRCxPQUFPLFNBQVMsQ0FBQztJQUVyQixDQUFDO0lBTU0sTUFBTSxDQUFDLGlCQUFpQixDQUFDLE1BQXlDO1FBRXJFLE1BQU0sTUFBTSxHQUFxQixFQUFFLENBQUM7UUFFcEMsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTlDLE1BQU0sT0FBTyxHQUNULGVBQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO2FBQ2hCLGtCQUFrQixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRWxELElBQUksT0FBTyxFQUFFO1lBRVQsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sSUFBSSxpQkFBTyxDQUFDLEtBQUssQ0FBQztZQUdqRCxNQUFNLENBQUMsSUFBSSxpQkFBRSxPQUFPLElBQUssT0FBTyxFQUFFLENBQUM7U0FFdEM7UUFFRCxNQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsV0FBVyxJQUFJLEVBQUUsQ0FBQztRQUM5QyxNQUFNLGNBQWMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQzthQUM1QyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO2FBQy9CLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNkLElBQUkseUJBQVMsQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDcEIsT0FBTyxJQUFJLENBQUM7YUFDZjtZQUVELEdBQUcsQ0FBQyxJQUFJLENBQUMsbUNBQW1DLEVBQUUsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ25FLE9BQU8sS0FBSyxDQUFDO1FBQ2pCLENBQUMsQ0FBQyxDQUFDO1FBRVAsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLGNBQWMsQ0FBQyxDQUFDO1FBRS9CLE9BQU8sTUFBTSxDQUFDO0lBRWxCLENBQUM7SUFFTSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQWtCLEVBQUUsRUFBa0I7UUFDdkQsT0FBTyxFQUFFLENBQUMsT0FBTyxLQUFLLEVBQUUsQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDLElBQUksS0FBSyxFQUFFLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxRQUFRLEtBQUssRUFBRSxDQUFDLFFBQVEsQ0FBQztJQUMzRixDQUFDO0NBRUo7QUF0RkQsMENBc0ZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFaXRoZXIsIExlZnRFaXRoZXJ9IGZyb20gJy4uL3V0aWwvRWl0aGVyJztcbmltcG9ydCB7QmFja2VuZH0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9kYXRhc3RvcmUvQmFja2VuZCc7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7aXNQcmVzZW50fSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL1ByZWNvbmRpdGlvbnMnO1xuaW1wb3J0IHtJRG9jTWV0YX0gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvbWV0YWRhdGEvSURvY01ldGFcIjtcbmltcG9ydCB7QmFja2VuZEZpbGVSZWZ9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL2RhdGFzdG9yZS9CYWNrZW5kRmlsZVJlZlwiO1xuaW1wb3J0IHtEb2NJbmZvTGlrZX0gZnJvbSBcIi4uL21ldGFkYXRhL0RvY0luZm9cIjtcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG5leHBvcnQgY2xhc3MgQmFja2VuZEZpbGVSZWZzIHtcblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgbWFpbiBCYWNrZW5kRmlsZVJlZiAoUEhaIG9yIFBERikgZm9yIHRoaXMgZmlsZSAoZWl0aGVyIHRoZVxuICAgICAqIFBIWiBvciBQREYgZmlsZSlcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHRvQmFja2VuZEZpbGVSZWYoZWl0aGVyOiBMZWZ0RWl0aGVyPElEb2NNZXRhLCBEb2NJbmZvTGlrZT4pOiBCYWNrZW5kRmlsZVJlZiB8IHVuZGVmaW5lZCB7XG5cbiAgICAgICAgaWYgKCEgZWl0aGVyKSB7XG4gICAgICAgICAgICBsb2cud2FybihcIk5vICdlaXRoZXInIHBhcmFtIHNwZWNpZmllZC5cIik7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZG9jSW5mbyA9XG4gICAgICAgICAgICBFaXRoZXIub2ZMZWZ0KGVpdGhlcilcbiAgICAgICAgICAgICAgICAuY29udmVydExlZnRUb1JpZ2h0KGxlZnQgPT4gbGVmdC5kb2NJbmZvKTtcblxuICAgICAgICBjb25zdCBmaWxlbmFtZSA9IGRvY0luZm8uZmlsZW5hbWU7XG5cbiAgICAgICAgaWYgKGZpbGVuYW1lKSB7XG5cbiAgICAgICAgICAgIC8vIHJldHVybiB0aGUgZXhpc3RpbmcgZG9jIG1ldGEgaW5mb3JtYXRpb24uXG5cbiAgICAgICAgICAgIGNvbnN0IGJhY2tlbmQgPSBkb2NJbmZvLmJhY2tlbmQgfHwgQmFja2VuZC5TVEFTSDtcblxuICAgICAgICAgICAgY29uc3QgYmFja2VuZEZpbGVSZWY6IEJhY2tlbmRGaWxlUmVmID0ge1xuICAgICAgICAgICAgICAgIG5hbWU6IGZpbGVuYW1lLFxuICAgICAgICAgICAgICAgIGhhc2hjb2RlOiBkb2NJbmZvLmhhc2hjb2RlLFxuICAgICAgICAgICAgICAgIGJhY2tlbmRcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHJldHVybiBiYWNrZW5kRmlsZVJlZjtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gbG9nLndhcm4oXCJEb2NJbmZvIGhhcyBubyBmaWxlbmFtZVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgYWxsIEZpbGVSZWZzIGZvciB0aGlzIERvY01ldGEgaW5jbHVkaW5nIHRoZSBtYWluIGRvYyBidXQgYWxzb1xuICAgICAqIGFueSBpbWFnZSwgYXVkaW8sIG9yIHZpZGVvIGF0dGFjaG1lbnRzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgdG9CYWNrZW5kRmlsZVJlZnMoZWl0aGVyOiBMZWZ0RWl0aGVyPElEb2NNZXRhLCBEb2NJbmZvTGlrZT4pOiBSZWFkb25seUFycmF5PEJhY2tlbmRGaWxlUmVmPiB7XG5cbiAgICAgICAgY29uc3QgcmVzdWx0OiBCYWNrZW5kRmlsZVJlZltdID0gW107XG5cbiAgICAgICAgY29uc3QgZmlsZVJlZiA9IHRoaXMudG9CYWNrZW5kRmlsZVJlZihlaXRoZXIpO1xuXG4gICAgICAgIGNvbnN0IGRvY0luZm8gPVxuICAgICAgICAgICAgRWl0aGVyLm9mTGVmdChlaXRoZXIpXG4gICAgICAgICAgICAgICAgLmNvbnZlcnRMZWZ0VG9SaWdodChsZWZ0ID0+IGxlZnQuZG9jSW5mbyk7XG5cbiAgICAgICAgaWYgKGZpbGVSZWYpIHtcblxuICAgICAgICAgICAgY29uc3QgYmFja2VuZCA9IGRvY0luZm8uYmFja2VuZCB8fCBCYWNrZW5kLlNUQVNIO1xuXG4gICAgICAgICAgICAvLyB0aGlzIGlzIHRoZSBtYWluIEZpbGVSZWYgb2YgdGhlIGZpbGUgKFBIWiBvciBQREYpXG4gICAgICAgICAgICByZXN1bHQucHVzaCh7YmFja2VuZCwgLi4uZmlsZVJlZn0pO1xuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhdHRhY2htZW50cyA9IGRvY0luZm8uYXR0YWNobWVudHMgfHwge307XG4gICAgICAgIGNvbnN0IGF0dGFjaG1lbnRSZWZzID0gT2JqZWN0LnZhbHVlcyhhdHRhY2htZW50cylcbiAgICAgICAgICAgIC5tYXAoY3VycmVudCA9PiBjdXJyZW50LmZpbGVSZWYpXG4gICAgICAgICAgICAuZmlsdGVyKGN1cnJlbnQgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpc1ByZXNlbnQoY3VycmVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbG9nLndhcm4oXCJEb2MgaGFkIG1pc3NpbmcgYXR0YWNobWVudCBkYXRhOiBcIiwgZG9jSW5mby5maW5nZXJwcmludCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmVzdWx0LnB1c2goLi4uYXR0YWNobWVudFJlZnMpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGVxdWFscyhiMDogQmFja2VuZEZpbGVSZWYsIGIxOiBCYWNrZW5kRmlsZVJlZik6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gYjAuYmFja2VuZCA9PT0gYjEuYmFja2VuZCAmJiBiMC5uYW1lID09PSBiMS5uYW1lICYmIGIwLmhhc2hjb2RlID09PSBiMS5oYXNoY29kZTtcbiAgICB9XG5cbn1cbiJdfQ==