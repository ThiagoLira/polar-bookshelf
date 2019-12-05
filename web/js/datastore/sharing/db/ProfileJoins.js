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
const Profiles_1 = require("./Profiles");
const Optional_1 = require("polar-shared/src/util/ts/Optional");
class ProfileJoins {
    static record(value) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!value) {
                return undefined;
            }
            const joined = yield this.join([value]);
            if (joined.length > 0) {
                return joined[0];
            }
            return undefined;
        });
    }
    static join(values) {
        return __awaiter(this, void 0, void 0, function* () {
            const resolvedProfiles = {};
            const promises = values.map(value => {
                const handler = () => __awaiter(this, void 0, void 0, function* () {
                    const { profileID } = value;
                    if (!profileID) {
                        return;
                    }
                    const profile = yield Profiles_1.Profiles.get(profileID);
                    if (profile) {
                        resolvedProfiles[profileID] = profile;
                    }
                });
                return handler();
            });
            yield Promise.all(promises);
            return values.map((value) => {
                const { profileID } = value;
                const profile = profileID ? Optional_1.Optional.of(resolvedProfiles[profileID]).getOrUndefined() : undefined;
                return {
                    value,
                    profile,
                    profileID
                };
            });
        });
    }
}
exports.ProfileJoins = ProfileJoins;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZmlsZUpvaW5zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUHJvZmlsZUpvaW5zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEseUNBQTJEO0FBQzNELGdFQUEyRDtBQU8zRCxNQUFhLFlBQVk7SUFFZCxNQUFNLENBQU8sTUFBTSxDQUE0QixLQUFTOztZQUUzRCxJQUFJLENBQUUsS0FBSyxFQUFFO2dCQUNULE9BQU8sU0FBUyxDQUFDO2FBQ3BCO1lBRUQsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUV4QyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUNuQixPQUFPLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNwQjtZQUVELE9BQU8sU0FBUyxDQUFDO1FBRXJCLENBQUM7S0FBQTtJQUVNLE1BQU0sQ0FBTyxJQUFJLENBQTRCLE1BQXdCOztZQUV4RSxNQUFNLGdCQUFnQixHQUE0QixFQUFFLENBQUM7WUFFckQsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFFaEMsTUFBTSxPQUFPLEdBQUcsR0FBUyxFQUFFO29CQUV2QixNQUFNLEVBQUMsU0FBUyxFQUFDLEdBQUcsS0FBSyxDQUFDO29CQUUxQixJQUFJLENBQUUsU0FBUyxFQUFFO3dCQUViLE9BQU87cUJBQ1Y7b0JBRUQsTUFBTSxPQUFPLEdBQUcsTUFBTSxtQkFBUSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFFOUMsSUFBSSxPQUFPLEVBQUU7d0JBQ1QsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLEdBQUcsT0FBTyxDQUFDO3FCQUN6QztnQkFFTCxDQUFDLENBQUEsQ0FBQztnQkFFRixPQUFPLE9BQU8sRUFBRSxDQUFDO1lBRXJCLENBQUMsQ0FBQyxDQUFDO1lBR0gsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRTVCLE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBb0IsRUFBRTtnQkFFMUMsTUFBTSxFQUFDLFNBQVMsRUFBQyxHQUFHLEtBQUssQ0FBQztnQkFDMUIsTUFBTSxPQUFPLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxtQkFBUSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7Z0JBRWxHLE9BQU87b0JBQ0gsS0FBSztvQkFDTCxPQUFPO29CQUNQLFNBQVM7aUJBQ1osQ0FBQztZQUVOLENBQUMsQ0FBQyxDQUFDO1FBRVAsQ0FBQztLQUFBO0NBRUo7QUEvREQsb0NBK0RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQcm9maWxlLCBQcm9maWxlSURTdHIsIFByb2ZpbGVzfSBmcm9tIFwiLi9Qcm9maWxlc1wiO1xuaW1wb3J0IHtPcHRpb25hbH0gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvdXRpbC90cy9PcHRpb25hbFwiO1xuXG4vKipcbiAqIFByb3ZpZGVzIGEgd2F5IHRvIGpvaW4gYWdhaW5zdCBwcm9maWxlcyBzbyB0aGF0IHdlIGNhbiByZXNvbHZlIHRoZSBsaXZlIHByb2ZpbGVcbiAqIG1ldGFkYXRhLiAgV2UgdGhlbiBrZWVwIHRoZSBvcmlnaW5hbCByZWNvcmQgYW5kIHRoZSBwcm9maWxlIGFuZCBwcm9maWxlSUQgYmFja1xuICogdG8gYmFjayBzbyB0aGF0IHdlIGNhbiBqdXN0IHVzZSB0aGUgcmlnaHQgcmVjb3JkLlxuICovXG5leHBvcnQgY2xhc3MgUHJvZmlsZUpvaW5zIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgcmVjb3JkPFQgZXh0ZW5kcyBQcm9maWxlSURSZWNvcmQ+KHZhbHVlPzogVCk6IFByb21pc2U8UHJvZmlsZVJlY29yZDxUPiB8IHVuZGVmaW5lZD4ge1xuXG4gICAgICAgIGlmICghIHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgam9pbmVkID0gYXdhaXQgdGhpcy5qb2luKFt2YWx1ZV0pO1xuXG4gICAgICAgIGlmIChqb2luZWQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGpvaW5lZFswXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGpvaW48VCBleHRlbmRzIFByb2ZpbGVJRFJlY29yZD4odmFsdWVzOiBSZWFkb25seUFycmF5PFQ+KTogUHJvbWlzZTxSZWFkb25seUFycmF5PFByb2ZpbGVSZWNvcmQ8VD4+PiB7XG5cbiAgICAgICAgY29uc3QgcmVzb2x2ZWRQcm9maWxlczoge1tpZDogc3RyaW5nXTogUHJvZmlsZX0gPSB7fTtcblxuICAgICAgICBjb25zdCBwcm9taXNlcyA9IHZhbHVlcy5tYXAodmFsdWUgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBoYW5kbGVyID0gYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgY29uc3Qge3Byb2ZpbGVJRH0gPSB2YWx1ZTtcblxuICAgICAgICAgICAgICAgIGlmICghIHByb2ZpbGVJRCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBub3RoaW5nIHRvIGRvIGFzIHRoZXJlIGlzIG5vIHByb2ZpbGVJRFxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvZmlsZSA9IGF3YWl0IFByb2ZpbGVzLmdldChwcm9maWxlSUQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHByb2ZpbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZWRQcm9maWxlc1twcm9maWxlSURdID0gcHJvZmlsZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHJldHVybiBoYW5kbGVyKCk7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gbm93IHdhaXQgYWxsIHRoZSBwcm9taXNlcyBpbiBwYXJhbGxlbFxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlcy5tYXAoKHZhbHVlKTogUHJvZmlsZVJlY29yZDxUPiA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IHtwcm9maWxlSUR9ID0gdmFsdWU7XG4gICAgICAgICAgICBjb25zdCBwcm9maWxlID0gcHJvZmlsZUlEID8gT3B0aW9uYWwub2YocmVzb2x2ZWRQcm9maWxlc1twcm9maWxlSURdKS5nZXRPclVuZGVmaW5lZCgpIDogdW5kZWZpbmVkO1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgICAgIHByb2ZpbGUsXG4gICAgICAgICAgICAgICAgcHJvZmlsZUlEXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvZmlsZUlEUmVjb3JkIHtcbiAgICByZWFkb25seSBwcm9maWxlSUQ/OiBQcm9maWxlSURTdHI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvZmlsZVJlY29yZDxUIGV4dGVuZHMgUHJvZmlsZUlEUmVjb3JkPiB7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdmFsdWUgdGhhdCB3ZSBsb29rZWQgdXAgdGhlIHByb2ZpbGVJRCBvbi4uLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHZhbHVlOiBUO1xuXG4gICAgLyoqXG4gICAgICogVGhlIHByb2ZpbGUgdGhhdCB3ZSByZXNvbHZlZCBhZ2FpbnN0LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHByb2ZpbGU/OiBQcm9maWxlO1xuXG4gICAgcmVhZG9ubHkgcHJvZmlsZUlEPzogUHJvZmlsZUlEU3RyO1xuXG59XG4iXX0=