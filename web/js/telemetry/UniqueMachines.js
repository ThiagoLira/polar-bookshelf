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
const MachineIDs_1 = require("../util/MachineIDs");
const Firestore_1 = require("../firebase/Firestore");
const ISODateTimeStrings_1 = require("polar-shared/src/metadata/ISODateTimeStrings");
const AppRuntime_1 = require("../AppRuntime");
const Version_1 = require("polar-shared/src/util/Version");
class UniqueMachines {
    static write() {
        return __awaiter(this, void 0, void 0, function* () {
            const firestore = yield Firestore_1.Firestore.getInstance();
            const id = MachineIDs_1.MachineIDs.get();
            const ref = firestore.collection("unique_machines")
                .doc(id);
            const createRecord = () => __awaiter(this, void 0, void 0, function* () {
                const doc = yield ref.get();
                const runtime = AppRuntime_1.AppRuntime.type();
                const version = Version_1.Version.get();
                if (doc.exists) {
                    const existing = doc.data();
                    const toRuntime = () => {
                        if (existing.runtime) {
                            const set = new Set(existing.runtime);
                            set.add(runtime);
                            return [...set];
                        }
                        return [runtime];
                    };
                    const record = {
                        machine: existing.machine,
                        created: existing.created,
                        updated: ISODateTimeStrings_1.ISODateTimeStrings.create(),
                        runtime: toRuntime(),
                        version
                    };
                    return record;
                }
                const now = ISODateTimeStrings_1.ISODateTimeStrings.create();
                const record = {
                    machine: id,
                    created: now,
                    updated: now,
                    runtime: [runtime],
                    version
                };
                return record;
            });
            const record = yield createRecord();
            yield ref.set(record);
        });
    }
    static trigger() {
        this.write()
            .catch(err => console.error("Unable to write unique machine record: ", err));
    }
}
exports.UniqueMachines = UniqueMachines;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVW5pcXVlTWFjaGluZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJVbmlxdWVNYWNoaW5lcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBLG1EQUE4QztBQUM5QyxxREFBZ0Q7QUFFaEQscUZBQWdGO0FBRWhGLDhDQUF5QztBQUN6QywyREFBc0Q7QUFNdEQsTUFBYSxjQUFjO0lBRWhCLE1BQU0sQ0FBTyxLQUFLOztZQUVyQixNQUFNLFNBQVMsR0FBRyxNQUFNLHFCQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7WUFFaEQsTUFBTSxFQUFFLEdBQUcsdUJBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUU1QixNQUFNLEdBQUcsR0FBRyxTQUFTLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDO2lCQUM5QyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7WUFFYixNQUFNLFlBQVksR0FBRyxHQUFpQyxFQUFFO2dCQUVwRCxNQUFNLEdBQUcsR0FBRyxNQUFNLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztnQkFFNUIsTUFBTSxPQUFPLEdBQUcsdUJBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDbEMsTUFBTSxPQUFPLEdBQUcsaUJBQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQztnQkFFOUIsSUFBSSxHQUFHLENBQUMsTUFBTSxFQUFFO29CQUVaLE1BQU0sUUFBUSxHQUF3QixHQUFHLENBQUMsSUFBSSxFQUFHLENBQUM7b0JBRWxELE1BQU0sU0FBUyxHQUFHLEdBQUcsRUFBRTt3QkFFbkIsSUFBSSxRQUFRLENBQUMsT0FBTyxFQUFFOzRCQUNsQixNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7NEJBQ3RDLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7NEJBQ2pCLE9BQU8sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO3lCQUNuQjt3QkFFRCxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBRXJCLENBQUMsQ0FBQztvQkFFRixNQUFNLE1BQU0sR0FBa0I7d0JBQzFCLE9BQU8sRUFBRSxRQUFRLENBQUMsT0FBTzt3QkFDekIsT0FBTyxFQUFFLFFBQVEsQ0FBQyxPQUFPO3dCQUN6QixPQUFPLEVBQUUsdUNBQWtCLENBQUMsTUFBTSxFQUFFO3dCQUNwQyxPQUFPLEVBQUUsU0FBUyxFQUFFO3dCQUNwQixPQUFPO3FCQUNWLENBQUM7b0JBRUYsT0FBTyxNQUFNLENBQUM7aUJBRWpCO2dCQUVELE1BQU0sR0FBRyxHQUFHLHVDQUFrQixDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUV4QyxNQUFNLE1BQU0sR0FBa0I7b0JBQzFCLE9BQU8sRUFBRSxFQUFFO29CQUNYLE9BQU8sRUFBRSxHQUFHO29CQUNaLE9BQU8sRUFBRSxHQUFHO29CQUNaLE9BQU8sRUFBRSxDQUFDLE9BQU8sQ0FBQztvQkFDbEIsT0FBTztpQkFDVixDQUFDO2dCQUVGLE9BQU8sTUFBTSxDQUFDO1lBRWxCLENBQUMsQ0FBQSxDQUFDO1lBRUYsTUFBTSxNQUFNLEdBQUcsTUFBTSxZQUFZLEVBQUUsQ0FBQztZQUVwQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFMUIsQ0FBQztLQUFBO0lBR00sTUFBTSxDQUFDLE9BQU87UUFFakIsSUFBSSxDQUFDLEtBQUssRUFBRTthQUNQLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMseUNBQXlDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUVyRixDQUFDO0NBRUo7QUExRUQsd0NBMEVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtNYWNoaW5lSUR9IGZyb20gJy4uL3V0aWwvTWFjaGluZUlEcyc7XG5pbXBvcnQge01hY2hpbmVJRHN9IGZyb20gJy4uL3V0aWwvTWFjaGluZUlEcyc7XG5pbXBvcnQge0ZpcmVzdG9yZX0gZnJvbSAnLi4vZmlyZWJhc2UvRmlyZXN0b3JlJztcbmltcG9ydCB7SVNPRGF0ZVRpbWVTdHJpbmd9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbWV0YWRhdGEvSVNPRGF0ZVRpbWVTdHJpbmdzJztcbmltcG9ydCB7SVNPRGF0ZVRpbWVTdHJpbmdzfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL21ldGFkYXRhL0lTT0RhdGVUaW1lU3RyaW5ncyc7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7QXBwUnVudGltZX0gZnJvbSAnLi4vQXBwUnVudGltZSc7XG5pbXBvcnQge1ZlcnNpb259IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC9WZXJzaW9uJztcblxuLyoqXG4gKiBEb2VzIG9uZSB0aGluZy4uIHJlY29yZHMgdGhlIG1hY2hpbmUgSUQgdG8gdGhlIHRhYmxlIGFuZCB0aGUgdGltZSBpdCB3YXNcbiAqIGNyZWF0ZWQgc28gdGhhdCB3ZSBjYW4gdHJhY2sgaWYgd2UgaGF2ZSBhbnkgaXNzdWVzIHdpdGggb3VyIGFuYWx5dGljcy5cbiAqL1xuZXhwb3J0IGNsYXNzIFVuaXF1ZU1hY2hpbmVzIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgd3JpdGUoKSB7XG5cbiAgICAgICAgY29uc3QgZmlyZXN0b3JlID0gYXdhaXQgRmlyZXN0b3JlLmdldEluc3RhbmNlKCk7XG5cbiAgICAgICAgY29uc3QgaWQgPSBNYWNoaW5lSURzLmdldCgpO1xuXG4gICAgICAgIGNvbnN0IHJlZiA9IGZpcmVzdG9yZS5jb2xsZWN0aW9uKFwidW5pcXVlX21hY2hpbmVzXCIpXG4gICAgICAgICAgICAuZG9jKGlkKTtcblxuICAgICAgICBjb25zdCBjcmVhdGVSZWNvcmQgPSBhc3luYyAoKTogUHJvbWlzZTxVbmlxdWVNYWNoaW5lPiA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IGRvYyA9IGF3YWl0IHJlZi5nZXQoKTtcblxuICAgICAgICAgICAgY29uc3QgcnVudGltZSA9IEFwcFJ1bnRpbWUudHlwZSgpO1xuICAgICAgICAgICAgY29uc3QgdmVyc2lvbiA9IFZlcnNpb24uZ2V0KCk7XG5cbiAgICAgICAgICAgIGlmIChkb2MuZXhpc3RzKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBleGlzdGluZzogVW5pcXVlTWFjaGluZSA9IDxhbnk+IGRvYy5kYXRhKCkhO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgdG9SdW50aW1lID0gKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChleGlzdGluZy5ydW50aW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZXQgPSBuZXcgU2V0KGV4aXN0aW5nLnJ1bnRpbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0LmFkZChydW50aW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbLi4uc2V0XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbcnVudGltZV07XG5cbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgY29uc3QgcmVjb3JkOiBVbmlxdWVNYWNoaW5lID0ge1xuICAgICAgICAgICAgICAgICAgICBtYWNoaW5lOiBleGlzdGluZy5tYWNoaW5lLFxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVkOiBleGlzdGluZy5jcmVhdGVkLFxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVkOiBJU09EYXRlVGltZVN0cmluZ3MuY3JlYXRlKCksXG4gICAgICAgICAgICAgICAgICAgIHJ1bnRpbWU6IHRvUnVudGltZSgpLFxuICAgICAgICAgICAgICAgICAgICB2ZXJzaW9uXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIHJldHVybiByZWNvcmQ7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3Qgbm93ID0gSVNPRGF0ZVRpbWVTdHJpbmdzLmNyZWF0ZSgpO1xuXG4gICAgICAgICAgICBjb25zdCByZWNvcmQ6IFVuaXF1ZU1hY2hpbmUgPSB7XG4gICAgICAgICAgICAgICAgbWFjaGluZTogaWQsXG4gICAgICAgICAgICAgICAgY3JlYXRlZDogbm93LFxuICAgICAgICAgICAgICAgIHVwZGF0ZWQ6IG5vdyxcbiAgICAgICAgICAgICAgICBydW50aW1lOiBbcnVudGltZV0sXG4gICAgICAgICAgICAgICAgdmVyc2lvblxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgcmV0dXJuIHJlY29yZDtcblxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHJlY29yZCA9IGF3YWl0IGNyZWF0ZVJlY29yZCgpO1xuXG4gICAgICAgIGF3YWl0IHJlZi5zZXQocmVjb3JkKTtcblxuICAgIH1cblxuXG4gICAgcHVibGljIHN0YXRpYyB0cmlnZ2VyKCkge1xuXG4gICAgICAgIHRoaXMud3JpdGUoKVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKFwiVW5hYmxlIHRvIHdyaXRlIHVuaXF1ZSBtYWNoaW5lIHJlY29yZDogXCIsIGVycikpO1xuXG4gICAgfVxuXG59XG5cbmludGVyZmFjZSBVbmlxdWVNYWNoaW5lIHtcblxuICAgIHJlYWRvbmx5IG1hY2hpbmU6IE1hY2hpbmVJRDtcblxuICAgIC8qKlxuICAgICAqIFRoZSB0aW1lIHdlIEZJUlNUIHNhdyB0aGlzIG1hY2hpbmUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY3JlYXRlZDogSVNPRGF0ZVRpbWVTdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGFzdCB0aW1lIHRoaXMgbWFjaGluZSB3YXMgdXBkYXRlZC9zZWVuLlxuICAgICAqXG4gICAgICovXG4gICAgcmVhZG9ubHkgdXBkYXRlZDogSVNPRGF0ZVRpbWVTdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJ1bnRpbWU6IFJlYWRvbmx5QXJyYXk8J2VsZWN0cm9uJyB8ICdicm93c2VyJz47XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGFzdCB2ZXJzaW9uIHRoYXQgd2UgZm91bmQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdmVyc2lvbjogc3RyaW5nO1xuXG59XG4iXX0=