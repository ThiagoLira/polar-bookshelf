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
const FilePaths_1 = require("polar-shared/src/util/FilePaths");
const Hashcodes_1 = require("polar-shared/src/util/Hashcodes");
const Optional_1 = require("polar-shared/src/util/ts/Optional");
const CloudFunctions_1 = require("./firebase/CloudFunctions");
const Firebase_1 = require("../firebase/Firebase");
const firebase = __importStar(require("../firebase/lib/firebase"));
const Preconditions_1 = require("polar-shared/src/Preconditions");
const Logger_1 = require("polar-shared/src/logger/Logger");
const log = Logger_1.Logger.create();
class FirebaseDatastores {
    static init() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.initialized) {
                return;
            }
            log.notice("Initializing FirebaseDatastores...");
            this.user = yield Firebase_1.Firebase.currentUser();
            const formatUser = (user) => {
                if (user) {
                    return `${user.displayName}, uid=${user.uid}`;
                }
                return 'none';
            };
            log.notice("Initializing FirebaseDatastores...done", formatUser(this.user));
            firebase.auth()
                .onAuthStateChanged((user) => this.user = user, (err) => {
                log.error("Unable to handle user: ", err);
                this.user = null;
            });
            this.initialized = true;
        });
    }
    static computeDatastoreGetFileURL(request) {
        const endpoint = CloudFunctions_1.CloudFunctions.createEndpoint();
        return `${endpoint}/datastoreGetFile/?data=` + encodeURIComponent(JSON.stringify(request));
    }
    static computeStoragePath(backend, fileRef, uid = FirebaseDatastores.getUserID()) {
        const ext = FilePaths_1.FilePaths.toExtension(fileRef.name);
        const suffix = ext.map(value => {
            if (!value.startsWith('.')) {
                value = '.' + value;
            }
            return value;
        })
            .getOrElse('');
        const settings = this.computeStorageSettings(ext).getOrUndefined();
        let key;
        if (fileRef.hashcode) {
            key = {
                uid,
                backend,
                alg: fileRef.hashcode.alg,
                enc: fileRef.hashcode.enc,
                data: fileRef.hashcode.data,
                suffix
            };
        }
        else {
            key = {
                uid,
                filename: fileRef.name
            };
        }
        const id = Hashcodes_1.Hashcodes.createID(key, 40);
        const path = `${backend}/${id}${suffix}`;
        return { path, settings };
    }
    static computeStorageSettings(optionalExt) {
        const PUBLIC_MAX_AGE_1WEEK = 'public,max-age=604800';
        const ext = optionalExt.getOrElse('').toLowerCase();
        if (ext === 'jpg' || ext === 'jpeg') {
            return Optional_1.Optional.of({
                cacheControl: PUBLIC_MAX_AGE_1WEEK,
                contentType: 'image/jpeg'
            });
        }
        if (ext === 'pdf') {
            return Optional_1.Optional.of({
                cacheControl: PUBLIC_MAX_AGE_1WEEK,
                contentType: 'application/pdf'
            });
        }
        if (ext === 'png') {
            return Optional_1.Optional.of({
                cacheControl: PUBLIC_MAX_AGE_1WEEK,
                contentType: 'image/png'
            });
        }
        if (ext === 'svg') {
            return Optional_1.Optional.of({
                cacheControl: PUBLIC_MAX_AGE_1WEEK,
                contentType: 'image/svg'
            });
        }
        return Optional_1.Optional.of({
            cacheControl: PUBLIC_MAX_AGE_1WEEK,
            contentType: 'application/octet-stream'
        });
    }
    static getUserID() {
        const app = firebase.app();
        const auth = app.auth();
        Preconditions_1.Preconditions.assertPresent(auth, "Not authenticated (no auth)");
        const user = this.user || auth.currentUser;
        Preconditions_1.Preconditions.assertPresent(user, "Not authenticated (no user)");
        return user.uid;
    }
    static computeDocMetaID(fingerprint, uid = FirebaseDatastores.getUserID()) {
        return Hashcodes_1.Hashcodes.createID(uid + ':' + fingerprint, 32);
    }
}
exports.FirebaseDatastores = FirebaseDatastores;
FirebaseDatastores.initialized = false;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlyZWJhc2VEYXRhc3RvcmVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRmlyZWJhc2VEYXRhc3RvcmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLCtEQUEwRDtBQUMxRCwrREFBMEQ7QUFJMUQsZ0VBQTJEO0FBQzNELDhEQUF5RDtBQUN6RCxtREFBc0Q7QUFDdEQsbUVBQXFEO0FBQ3JELGtFQUE2RDtBQUc3RCwyREFBc0Q7QUFFdEQsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLE1BQWEsa0JBQWtCO0lBVXBCLE1BQU0sQ0FBTyxJQUFJOztZQUVwQixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQ2xCLE9BQU87YUFDVjtZQUVELEdBQUcsQ0FBQyxNQUFNLENBQUMsb0NBQW9DLENBQUMsQ0FBQztZQUdqRCxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sbUJBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUV6QyxNQUFNLFVBQVUsR0FBRyxDQUFDLElBQTBCLEVBQUUsRUFBRTtnQkFFOUMsSUFBSSxJQUFJLEVBQUU7b0JBQ04sT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLFNBQVMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO2lCQUNqRDtnQkFFRCxPQUFPLE1BQU0sQ0FBQztZQUVsQixDQUFDLENBQUM7WUFFRixHQUFHLENBQUMsTUFBTSxDQUFDLHdDQUF3QyxFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUc1RSxRQUFRLENBQUMsSUFBSSxFQUFFO2lCQUNWLGtCQUFrQixDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksRUFDMUIsQ0FBQyxHQUFHLEVBQUUsRUFBRTtnQkFDSixHQUFHLENBQUMsS0FBSyxDQUFDLHlCQUF5QixFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUMxQyxJ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LENBQUMsRUFBRSxDQUFDO2dCQUNmLFlBQVksRUFBRSxvQkFBb0I7Z0JBQ2xDLFdBQVcsRUFBRSxXQUFXO2FBQzNCLENBQUMsQ0FBQztTQUVOO1FBS0QsT0FBTyxtQkFBUSxDQUFDLEVBQUUsQ0FBQztZQUNmLFlBQVksRUFBRSxvQkFBb0I7WUFDbEMsV0FBVyxFQUFFLDBCQUEwQjtTQUMxQyxDQUFDLENBQUM7SUFFUCxDQUFDO0lBV00sTUFBTSxDQUFDLFNBQVM7UUFFbkIsTUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBRTNCLE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN4Qiw2QkFBYSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsNkJBQTZCLENBQUMsQ0FBQztRQUVqRSxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDM0MsNkJBQWEsQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLDZCQUE2QixDQUFDLENBQUM7UUFFakUsT0FBTyxJQUFLLENBQUMsR0FBRyxDQUFDO0lBRXJCLENBQUM7SUFFTSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsV0FBbUIsRUFDbkIsTUFBYyxrQkFBa0IsQ0FBQyxTQUFTLEVBQUU7UUFFdkUsT0FBTyxxQkFBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUUzRCxDQUFDOztBQS9MTCxnREFpTUM7QUE3TGtCLDhCQUFXLEdBQVksS0FBSyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtCYWNrZW5kfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL2RhdGFzdG9yZS9CYWNrZW5kJztcbmltcG9ydCB7RmlsZVBhdGhzfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvRmlsZVBhdGhzJztcbmltcG9ydCB7SGFzaGNvZGVzfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvSGFzaGNvZGVzJztcbmltcG9ydCB7U3RvcmFnZVBhdGh9IGZyb20gJy4vRmlyZWJhc2VEYXRhc3RvcmUnO1xuaW1wb3J0IHtTdG9yYWdlU2V0dGluZ3N9IGZyb20gJy4vRmlyZWJhc2VEYXRhc3RvcmUnO1xuaW1wb3J0IHtGaXJlYmFzZURvY01ldGFJRH0gZnJvbSAnLi9GaXJlYmFzZURhdGFzdG9yZSc7XG5pbXBvcnQge09wdGlvbmFsfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvdHMvT3B0aW9uYWwnO1xuaW1wb3J0IHtDbG91ZEZ1bmN0aW9uc30gZnJvbSAnLi9maXJlYmFzZS9DbG91ZEZ1bmN0aW9ucyc7XG5pbXBvcnQge0ZpcmViYXNlLCBVc2VySUR9IGZyb20gJy4uL2ZpcmViYXNlL0ZpcmViYXNlJztcbmltcG9ydCAqIGFzIGZpcmViYXNlIGZyb20gJy4uL2ZpcmViYXNlL2xpYi9maXJlYmFzZSc7XG5pbXBvcnQge1ByZWNvbmRpdGlvbnN9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvUHJlY29uZGl0aW9ucyc7XG5pbXBvcnQge1VzZXJJRFN0cn0gZnJvbSAnLi9zaGFyaW5nL2RiL1Byb2ZpbGVzJztcbmltcG9ydCB7RmlsZVJlZn0gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvZGF0YXN0b3JlL0ZpbGVSZWZcIjtcbmltcG9ydCB7TG9nZ2VyfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy9sb2dnZXIvTG9nZ2VyXCI7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuZXhwb3J0IGNsYXNzIEZpcmViYXNlRGF0YXN0b3JlcyB7XG5cbiAgICBwcml2YXRlIHN0YXRpYyB1c2VyOiBmaXJlYmFzZS5Vc2VyIHwgbnVsbDtcblxuICAgIHByaXZhdGUgc3RhdGljIGluaXRpYWxpemVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtIGluaXQgYWdhaW5zdCB0aGUgRmlyZWJhc2VEYXRhc3RvcmVzIHRvIGtlZXAgdGhlIGN1cnJlbnQgdXNlciBmb3IgYWxsIG9wZXJhdGlvbnMuICBUaGlzIGlzIGEgYml0XG4gICAgICogb2YgYSBoYWNrIGluIHRoYXQgaXQgd291bGQgYmUgbmljZSB0byBoYXZlIEZCIHVwZGF0ZSB0aGlzIHdpdGhvdXQgaXQgYmVpbmcgYXN5bmMuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBpbml0KCkge1xuXG4gICAgICAgIGlmICh0aGlzLmluaXRpYWxpemVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsb2cubm90aWNlKFwiSW5pdGlhbGl6aW5nIEZpcmViYXNlRGF0YXN0b3Jlcy4uLlwiKTtcblxuICAgICAgICAvLyBzZXQgdGhlIGN1cnJlbnQgdmVyc2lvbiBiZWZvcmUgd2UgcmV0dXJuXG4gICAgICAgIHRoaXMudXNlciA9IGF3YWl0IEZpcmViYXNlLmN1cnJlbnRVc2VyKCk7XG5cbiAgICAgICAgY29uc3QgZm9ybWF0VXNlciA9ICh1c2VyOiBmaXJlYmFzZS5Vc2VyIHwgbnVsbCkgPT4ge1xuXG4gICAgICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBgJHt1c2VyLmRpc3BsYXlOYW1lfSwgdWlkPSR7dXNlci51aWR9YDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuICdub25lJztcblxuICAgICAgICB9O1xuXG4gICAgICAgIGxvZy5ub3RpY2UoXCJJbml0aWFsaXppbmcgRmlyZWJhc2VEYXRhc3RvcmVzLi4uZG9uZVwiLCBmb3JtYXRVc2VyKHRoaXMudXNlcikpO1xuXG4gICAgICAgIC8vIHVwZGF0ZSBpbiB0aGUgYmFja2dyb3VuZFxuICAgICAgICBmaXJlYmFzZS5hdXRoKClcbiAgICAgICAgICAgIC5vbkF1dGhTdGF0ZUNoYW5nZWQoKHVzZXIpID0+IHRoaXMudXNlciA9IHVzZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZy5lcnJvcihcIlVuYWJsZSB0byBoYW5kbGUgdXNlcjogXCIsIGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXIgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgY29tcHV0ZURhdGFzdG9yZUdldEZpbGVVUkwocmVxdWVzdDogRGF0YXN0b3JlR2V0RmlsZVJlcXVlc3QpIHtcbiAgICAgICAgY29uc3QgZW5kcG9pbnQgPSBDbG91ZEZ1bmN0aW9ucy5jcmVhdGVFbmRwb2ludCgpO1xuICAgICAgICByZXR1cm4gYCR7ZW5kcG9pbnR9L2RhdGFzdG9yZUdldEZpbGUvP2RhdGE9YCArIGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShyZXF1ZXN0KSk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBjb21wdXRlU3RvcmFnZVBhdGgoYmFja2VuZDogQmFja2VuZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlUmVmOiBGaWxlUmVmLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVpZDogVXNlcklEU3RyID0gRmlyZWJhc2VEYXRhc3RvcmVzLmdldFVzZXJJRCgpKTogU3RvcmFnZVBhdGgge1xuXG4gICAgICAgIGNvbnN0IGV4dCA9IEZpbGVQYXRocy50b0V4dGVuc2lvbihmaWxlUmVmLm5hbWUpO1xuXG4gICAgICAgIGNvbnN0IHN1ZmZpeCA9IGV4dC5tYXAodmFsdWUgPT4ge1xuXG4gICAgICAgICAgICAgICAgaWYgKCAhIHZhbHVlLnN0YXJ0c1dpdGgoJy4nKSApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlIHN1ZmZpeCBkb2Vzbid0IGJlZ2luIHdpdGggYSAnLicgdGhlbiBhZGQgaXQuXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gJy4nICsgdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmdldE9yRWxzZSgnJyk7XG5cbiAgICAgICAgY29uc3Qgc2V0dGluZ3MgPSB0aGlzLmNvbXB1dGVTdG9yYWdlU2V0dGluZ3MoZXh0KS5nZXRPclVuZGVmaW5lZCgpO1xuXG4gICAgICAgIGxldCBrZXk6IGFueTtcblxuICAgICAgICBpZiAoZmlsZVJlZi5oYXNoY29kZSkge1xuXG4gICAgICAgICAgICBrZXkgPSB7XG5cbiAgICAgICAgICAgICAgICAvLyBXZSBpbmNsdWRlIHRoZSB1aWQgb2YgdGhlIHVzZXIgdG8gYXZvaWQgdGhlIGlzc3VlIG9mIHVzZXJcbiAgICAgICAgICAgICAgICAvLyBjb25mbGljdGluZyBvbiBmaWxlcyBhbmQgdGhlIGFiaWxpdHkgdG8gc2hhcmUgdGhlbSBwZXIgZmlsZS5cbiAgICAgICAgICAgICAgICAvLyBUaGUgY2xvdWQgc3RvcmFnZSBjb3N0cyBmb3IgcmF3IGJpbmFyeSBmaWxlcyBhcmVcbiAgICAgICAgICAgICAgICAvLyBpbmNvbnNlcXVlbnRpYWwgc28gaGF2ZSBvbmUgZmlsZSBwZXIgdXNlci5cblxuICAgICAgICAgICAgICAgIHVpZCxcbiAgICAgICAgICAgICAgICBiYWNrZW5kLFxuICAgICAgICAgICAgICAgIGFsZzogZmlsZVJlZi5oYXNoY29kZS5hbGcsXG4gICAgICAgICAgICAgICAgZW5jOiBmaWxlUmVmLmhhc2hjb2RlLmVuYyxcbiAgICAgICAgICAgICAgICBkYXRhOiBmaWxlUmVmLmhhc2hjb2RlLmRhdGEsXG4gICAgICAgICAgICAgICAgc3VmZml4XG5cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgLy8gQnVpbGQgYSB1bmlxdWUgbmFtZSBmcm9tIHRoZSBmaWxlbmFtZSBhbmQgdGhlIFVVSUQgb2YgdGhlIHVzZXIuXG4gICAgICAgICAgICAvLyB0aGlzIHNob3VsZG4ndCBhY3R1YWxseSBiZSB1c2VkIGV4Y2VwdCBpbiB0aGUgY2FzZXMgb2YgVkVSWSBvbGRcbiAgICAgICAgICAgIC8vIGRhdGFzdG9yZXMuXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAga2V5ID0ge1xuICAgICAgICAgICAgICAgIHVpZCxcbiAgICAgICAgICAgICAgICBmaWxlbmFtZTogZmlsZVJlZi5uYW1lXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpZCA9IEhhc2hjb2Rlcy5jcmVhdGVJRChrZXksIDQwKTtcblxuICAgICAgICBjb25zdCBwYXRoID0gYCR7YmFja2VuZH0vJHtpZH0ke3N1ZmZpeH1gO1xuXG4gICAgICAgIHJldHVybiB7cGF0aCwgc2V0dGluZ3N9O1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgY29tcHV0ZVN0b3JhZ2VTZXR0aW5ncyhvcHRpb25hbEV4dDogT3B0aW9uYWw8c3RyaW5nPik6IE9wdGlvbmFsPFN0b3JhZ2VTZXR0aW5ncz4ge1xuXG4gICAgICAgIGNvbnN0IFBVQkxJQ19NQVhfQUdFXzFXRUVLID0gJ3B1YmxpYyxtYXgtYWdlPTYwNDgwMCc7XG5cbiAgICAgICAgY29uc3QgZXh0ID0gb3B0aW9uYWxFeHQuZ2V0T3JFbHNlKCcnKS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgIGlmIChleHQgPT09ICdqcGcnIHx8IGV4dCA9PT0gJ2pwZWcnKSB7XG5cbiAgICAgICAgICAgIHJldHVybiBPcHRpb25hbC5vZih7XG4gICAgICAgICAgICAgICAgY2FjaGVDb250cm9sOiBQVUJMSUNfTUFYX0FHRV8xV0VFSyxcbiAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogJ2ltYWdlL2pwZWcnXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGV4dCA9PT0gJ3BkZicpIHtcblxuICAgICAgICAgICAgcmV0dXJuIE9wdGlvbmFsLm9mKHtcbiAgICAgICAgICAgICAgICBjYWNoZUNvbnRyb2w6IFBVQkxJQ19NQVhfQUdFXzFXRUVLLFxuICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vcGRmJ1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChleHQgPT09ICdwbmcnKSB7XG5cbiAgICAgICAgICAgIHJldHVybiBPcHRpb25hbC5vZih7XG4gICAgICAgICAgICAgICAgY2FjaGVDb250cm9sOiBQVUJMSUNfTUFYX0FHRV8xV0VFSyxcbiAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogJ2ltYWdlL3BuZydcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXh0ID09PSAnc3ZnJykge1xuXG4gICAgICAgICAgICByZXR1cm4gT3B0aW9uYWwub2Yoe1xuICAgICAgICAgICAgICAgIGNhY2hlQ29udHJvbDogUFVCTElDX01BWF9BR0VfMVdFRUssXG4gICAgICAgICAgICAgICAgY29udGVudFR5cGU6ICdpbWFnZS9zdmcnXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICAgICAgLy8gdGhlIGZhbGwgdGhyb3VnaCBvZiBjYWNoZWQgZGF0YSBzaG91bGQgd29yayBmb3IgUEhaIGZpbGVzIGFuZCBvdGhlclxuICAgICAgICAvLyB0eXBlcyBvZiBiaW5hcnkgZGF0YS5cblxuICAgICAgICByZXR1cm4gT3B0aW9uYWwub2Yoe1xuICAgICAgICAgICAgY2FjaGVDb250cm9sOiBQVUJMSUNfTUFYX0FHRV8xV0VFSyxcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJ1xuICAgICAgICB9KTtcblxuICAgIH1cblxuXG4gICAgLy8gWW91IGNhbiBhbGxvdyB1c2VycyB0byBzaWduIGluIHRvIHlvdXIgYXBwIHVzaW5nIG11bHRpcGxlIGF1dGhlbnRpY2F0aW9uXG4gICAgLy8gcHJvdmlkZXJzIGJ5IGxpbmtpbmcgYXV0aCBwcm92aWRlciBjcmVkZW50aWFscyB0byBhbiBleGlzdGluZyB1c2VyIGFjY291bnQuXG4gICAgLy8gVXNlcnMgYXJlIGlkZW50aWZpYWJsZSBieSB0aGUgc2FtZSBGaXJlYmFzZSB1c2VyIElEIHJlZ2FyZGxlc3Mgb2YgdGhlXG4gICAgLy8gYXV0aGVudGljYXRpb24gcHJvdmlkZXIgdGhleSB1c2VkIHRvIHNpZ24gaW4uIEZvciBleGFtcGxlLCBhIHVzZXIgd2hvIHNpZ25lZFxuICAgIC8vIGluIHdpdGggYSBwYXNzd29yZCBjYW4gbGluayBhIEdvb2dsZSBhY2NvdW50IGFuZCBzaWduIGluIHdpdGggZWl0aGVyIG1ldGhvZFxuICAgIC8vIGluIHRoZSBmdXR1cmUuIE9yLCBhbiBhbm9ueW1vdXMgdXNlciBjYW4gbGluayBhIEZhY2Vib29rIGFjY291bnQgYW5kIHRoZW4sXG4gICAgLy8gbGF0ZXIsIHNpZ24gaW4gd2l0aCBGYWNlYm9vayB0byBjb250aW51ZSB1c2luZyB5b3VyIGFwcC5cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0VXNlcklEKCk6IFVzZXJJRCB7XG5cbiAgICAgICAgY29uc3QgYXBwID0gZmlyZWJhc2UuYXBwKCk7XG5cbiAgICAgICAgY29uc3QgYXV0aCA9IGFwcC5hdXRoKCk7XG4gICAgICAgIFByZWNvbmRpdGlvbnMuYXNzZXJ0UHJlc2VudChhdXRoLCBcIk5vdCBhdXRoZW50aWNhdGVkIChubyBhdXRoKVwiKTtcblxuICAgICAgICBjb25zdCB1c2VyID0gdGhpcy51c2VyIHx8IGF1dGguY3VycmVudFVzZXI7XG4gICAgICAgIFByZWNvbmRpdGlvbnMuYXNzZXJ0UHJlc2VudCh1c2VyLCBcIk5vdCBhdXRoZW50aWNhdGVkIChubyB1c2VyKVwiKTtcblxuICAgICAgICByZXR1cm4gdXNlciEudWlkO1xuXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBjb21wdXRlRG9jTWV0YUlEKGZpbmdlcnByaW50OiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVpZDogVXNlcklEID0gRmlyZWJhc2VEYXRhc3RvcmVzLmdldFVzZXJJRCgpKTogRmlyZWJhc2VEb2NNZXRhSUQge1xuXG4gICAgICAgIHJldHVybiBIYXNoY29kZXMuY3JlYXRlSUQodWlkICsgJzonICsgZmluZ2VycHJpbnQsIDMyKTtcblxuICAgIH1cblxufVxuXG5pbnRlcmZhY2UgRGF0YXN0b3JlR2V0RmlsZVJlcXVlc3Qge1xuICAgIHJlYWRvbmx5IGlkVG9rZW46IHN0cmluZztcbiAgICByZWFkb25seSBkb2NJRDogc3RyaW5nO1xuICAgIHJlYWRvbmx5IGJhY2tlbmQ6IEJhY2tlbmQ7XG4gICAgcmVhZG9ubHkgZmlsZVJlZjogRmlsZVJlZjtcbn1cbiJdfQ==