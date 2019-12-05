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
const AppRuntime_1 = require("../AppRuntime");
const Directories_1 = require("../datastore/Directories");
const Files_1 = require("polar-shared/src/util/Files");
const Firestore_1 = require("../firebase/Firestore");
const ISODateTimeStrings_1 = require("polar-shared/src/metadata/ISODateTimeStrings");
const Executors_1 = require("../util/Executors");
const Logger_1 = require("polar-shared/src/logger/Logger");
const log = Logger_1.Logger.create();
class MachineDatastores {
    static ref() {
        return __awaiter(this, void 0, void 0, function* () {
            const firestore = yield Firestore_1.Firestore.getInstance();
            const id = MachineIDs_1.MachineIDs.get();
            const ref = firestore
                .collection(this.COLLECTION_NAME)
                .doc(id);
            return ref;
        });
    }
    static get() {
        return __awaiter(this, void 0, void 0, function* () {
            const ref = yield this.ref();
            const snapshot = yield ref.get();
            return this.toDoc(snapshot);
        });
    }
    static toDoc(snapshot) {
        if (!snapshot.exists) {
            return;
        }
        return snapshot.data();
    }
    static onSnapshot(handler) {
        return __awaiter(this, void 0, void 0, function* () {
            const ref = yield this.ref();
            return ref.onSnapshot(snapshot => {
                const doc = this.toDoc(snapshot);
                if (!doc) {
                    return;
                }
                handler(doc);
            }, ERR_HANDLER);
        });
    }
    static triggerBackgroundUpdates(persistenceLayerManager) {
        if (AppRuntime_1.AppRuntime.isElectron()) {
            log.debug("Triggering background updates");
            Executors_1.Executors.runPeriodically({ initialDelay: '5m', interval: '1d' }, () => {
                this.doBackgroundUpdate(persistenceLayerManager)
                    .catch(err => log.error("Unable to compute machine datastore stats: ", err));
            });
        }
    }
    static doBackgroundUpdate(persistenceLayerManager) {
        return __awaiter(this, void 0, void 0, function* () {
            const machineDatastore = yield this.calculate(persistenceLayerManager);
            if (machineDatastore) {
                yield this.write(machineDatastore);
            }
        });
    }
    static write(machineDatastore) {
        return __awaiter(this, void 0, void 0, function* () {
            const firestore = yield Firestore_1.Firestore.getInstance();
            const id = machineDatastore.machine;
            const ref = firestore.collection(this.COLLECTION_NAME).doc(id);
            yield ref.set(machineDatastore);
        });
    }
    static calculate(persistenceLayerManager) {
        return __awaiter(this, void 0, void 0, function* () {
            log.debug("Calculating machine datastore stats...");
            const persistenceLayer = yield persistenceLayerManager.getAsync();
            const persistenceLayerType = persistenceLayerManager.currentType();
            const machine = MachineIDs_1.MachineIDs.get();
            const docMetaRefs = yield persistenceLayer.getDocMetaRefs();
            const nrDocs = docMetaRefs.length;
            let nrCaptures = 0;
            let storageInBytes = 0;
            const directories = new Directories_1.Directories();
            yield Files_1.Files.recursively(directories.dataDir, (path, stats) => __awaiter(this, void 0, void 0, function* () {
                if (path.indexOf(".backup-") !== -1) {
                    return;
                }
                if (path.endsWith(".phz")) {
                    ++nrCaptures;
                }
                storageInBytes += stats.size;
            }));
            const written = ISODateTimeStrings_1.ISODateTimeStrings.create();
            const machineDatastore = {
                persistenceLayerType,
                machine,
                nrDocs,
                nrCaptures,
                storageInBytes,
                written
            };
            log.debug("Calculated final machine datastore stats: ", machineDatastore);
            return machineDatastore;
        });
    }
}
exports.MachineDatastores = MachineDatastores;
MachineDatastores.COLLECTION_NAME = "machine_datastore";
const ERR_HANDLER = (err) => console.error("Could not create snapshot for account: ", err);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFjaGluZURhdGFzdG9yZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJNYWNoaW5lRGF0YXN0b3Jlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBLG1EQUE4QztBQUc5Qyw4Q0FBeUM7QUFDekMsMERBQXFEO0FBQ3JELHVEQUFrRDtBQUNsRCxxREFBZ0Q7QUFFaEQscUZBQWdGO0FBQ2hGLGlEQUE0QztBQUM1QywyREFBc0Q7QUFJdEQsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBSzVCLE1BQWEsaUJBQWlCO0lBSW5CLE1BQU0sQ0FBTyxHQUFHOztZQUVuQixNQUFNLFNBQVMsR0FBRyxNQUFNLHFCQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7WUFFaEQsTUFBTSxFQUFFLEdBQUcsdUJBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUU1QixNQUFNLEdBQUcsR0FBRyxTQUFTO2lCQUNoQixVQUFVLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQztpQkFDaEMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBRWIsT0FBTyxHQUFHLENBQUM7UUFFZixDQUFDO0tBQUE7SUFFTSxNQUFNLENBQU8sR0FBRzs7WUFFbkIsTUFBTSxHQUFHLEdBQUcsTUFBTSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDN0IsTUFBTSxRQUFRLEdBQUcsTUFBTSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDakMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRWhDLENBQUM7S0FBQTtJQUVPLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBMEI7UUFFM0MsSUFBSSxDQUFFLFFBQVEsQ0FBQyxNQUFNLEVBQUU7WUFDbkIsT0FBTztTQUNWO1FBRUQsT0FBMEIsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0lBRTlDLENBQUM7SUFLTSxNQUFNLENBQU8sVUFBVSxDQUFDLE9BQXFEOztZQUVoRixN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SUFBSSxDQUFDO1lBRWpDLENBQUMsQ0FBQSxDQUFDLENBQUM7WUFFSCxNQUFNLE9BQU8sR0FBRyx1Q0FBa0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUU1QyxNQUFNLGdCQUFnQixHQUFHO2dCQUNyQixvQkFBb0I7Z0JBQ3BCLE9BQU87Z0JBQ1AsTUFBTTtnQkFDTixVQUFVO2dCQUNWLGNBQWM7Z0JBQ2QsT0FBTzthQUNWLENBQUM7WUFFRixHQUFHLENBQUMsS0FBSyxDQUFDLDRDQUE0QyxFQUFFLGdCQUFnQixDQUFDLENBQUM7WUFFMUUsT0FBTyxnQkFBZ0IsQ0FBQztRQUU1QixDQUFDO0tBQUE7O0FBaEpMLDhDQW1KQztBQWpKa0IsaUNBQWUsR0FBRyxtQkFBbUIsQ0FBQztBQXFLekQsTUFBTSxXQUFXLEdBQUcsQ0FBQyxHQUFVLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMseUNBQXlDLEVBQUUsR0FBRyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge01hY2hpbmVJRH0gZnJvbSAnLi4vdXRpbC9NYWNoaW5lSURzJztcbmltcG9ydCB7TWFjaGluZUlEc30gZnJvbSAnLi4vdXRpbC9NYWNoaW5lSURzJztcbmltcG9ydCB7UGVyc2lzdGVuY2VMYXllck1hbmFnZXJ9IGZyb20gJy4uL2RhdGFzdG9yZS9QZXJzaXN0ZW5jZUxheWVyTWFuYWdlcic7XG5pbXBvcnQge1BlcnNpc3RlbmNlTGF5ZXJUeXBlfSBmcm9tICcuLi9kYXRhc3RvcmUvUGVyc2lzdGVuY2VMYXllck1hbmFnZXInO1xuaW1wb3J0IHtBcHBSdW50aW1lfSBmcm9tICcuLi9BcHBSdW50aW1lJztcbmltcG9ydCB7RGlyZWN0b3JpZXN9IGZyb20gJy4uL2RhdGFzdG9yZS9EaXJlY3Rvcmllcyc7XG5pbXBvcnQge0ZpbGVzfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvRmlsZXMnO1xuaW1wb3J0IHtGaXJlc3RvcmV9IGZyb20gJy4uL2ZpcmViYXNlL0ZpcmVzdG9yZSc7XG5pbXBvcnQge0lTT0RhdGVUaW1lU3RyaW5nfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL21ldGFkYXRhL0lTT0RhdGVUaW1lU3RyaW5ncyc7XG5pbXBvcnQge0lTT0RhdGVUaW1lU3RyaW5nc30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9tZXRhZGF0YS9JU09EYXRlVGltZVN0cmluZ3MnO1xuaW1wb3J0IHtFeGVjdXRvcnN9IGZyb20gJy4uL3V0aWwvRXhlY3V0b3JzJztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL2xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0ICogYXMgZmlyZWJhc2UgZnJvbSAnLi4vZmlyZWJhc2UvbGliL2ZpcmViYXNlJztcbmltcG9ydCBEb2N1bWVudFNuYXBzaG90ID0gZmlyZWJhc2UuZmlyZXN0b3JlLkRvY3VtZW50U25hcHNob3Q7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuLyoqXG4gKiBDb21wdXRlcyBhbmQgc3RvcmVzIHN0YXRzIGZvciBlYWNoIG1hY2hpbmUncyBkYXRhc3RvcmUuXG4gKi9cbmV4cG9ydCBjbGFzcyBNYWNoaW5lRGF0YXN0b3JlcyB7XG5cbiAgICBwcml2YXRlIHN0YXRpYyBDT0xMRUNUSU9OX05BTUUgPSBcIm1hY2hpbmVfZGF0YXN0b3JlXCI7XG5cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIHJlZigpIHtcblxuICAgICAgICBjb25zdCBmaXJlc3RvcmUgPSBhd2FpdCBGaXJlc3RvcmUuZ2V0SW5zdGFuY2UoKTtcblxuICAgICAgICBjb25zdCBpZCA9IE1hY2hpbmVJRHMuZ2V0KCk7XG5cbiAgICAgICAgY29uc3QgcmVmID0gZmlyZXN0b3JlXG4gICAgICAgICAgICAuY29sbGVjdGlvbih0aGlzLkNPTExFQ1RJT05fTkFNRSlcbiAgICAgICAgICAgIC5kb2MoaWQpO1xuXG4gICAgICAgIHJldHVybiByZWY7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGdldCgpIHtcblxuICAgICAgICBjb25zdCByZWYgPSBhd2FpdCB0aGlzLnJlZigpO1xuICAgICAgICBjb25zdCBzbmFwc2hvdCA9IGF3YWl0IHJlZi5nZXQoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9Eb2Moc25hcHNob3QpO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgdG9Eb2Moc25hcHNob3Q6IERvY3VtZW50U25hcHNob3QpIHtcblxuICAgICAgICBpZiAoISBzbmFwc2hvdC5leGlzdHMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiA8TWFjaGluZURhdGFzdG9yZT4gc25hcHNob3QuZGF0YSgpO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGJhY2sgZm9yIHdoZW4gd2UgaGF2ZSBuZXcgZGF0YSBmb3IgdGhlIGFjY291bnQuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBvblNuYXBzaG90KGhhbmRsZXI6IChtYWNoaW5lRGF0YXN0b3JlOiBNYWNoaW5lRGF0YXN0b3JlKSA9PiB2b2lkKSB7XG5cbiAgICAgICAgY29uc3QgcmVmID0gYXdhaXQgdGhpcy5yZWYoKTtcblxuICAgICAgICByZXR1cm4gcmVmLm9uU25hcHNob3Qoc25hcHNob3QgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBkb2MgPSB0aGlzLnRvRG9jKHNuYXBzaG90KTtcblxuICAgICAgICAgICAgaWYgKCEgZG9jKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoYW5kbGVyKGRvYyk7XG5cbiAgICAgICAgfSwgRVJSX0hBTkRMRVIpO1xuXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyB0cmlnZ2VyQmFja2dyb3VuZFVwZGF0ZXMocGVyc2lzdGVuY2VMYXllck1hbmFnZXI6IFBlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyKSB7XG5cbiAgICAgICAgaWYgKEFwcFJ1bnRpbWUuaXNFbGVjdHJvbigpKSB7XG5cbiAgICAgICAgICAgIGxvZy5kZWJ1ZyhcIlRyaWdnZXJpbmcgYmFja2dyb3VuZCB1cGRhdGVzXCIpO1xuXG4gICAgICAgICAgICAvLyByaWdodCBub3cgdGhpcyBvbmx5IHdvcmtzIG9uIHRoZSBkZXNrdG9wIHZlcnNpb24gYXMgdGhlIHdlYlxuICAgICAgICAgICAgLy8gdmVyc2lvbiBkb2Vzbid0IHJlYWxseSBzdXBwb3J0IHRoZSBmZWF0dXJlcyB3ZSB3b3VsZCBzdGFydFxuICAgICAgICAgICAgLy8gY2hhcmdpbmcgZm9yXG5cbiAgICAgICAgICAgIEV4ZWN1dG9ycy5ydW5QZXJpb2RpY2FsbHkoe2luaXRpYWxEZWxheTogJzVtJywgaW50ZXJ2YWw6ICcxZCd9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5kb0JhY2tncm91bmRVcGRhdGUocGVyc2lzdGVuY2VMYXllck1hbmFnZXIpXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gbG9nLmVycm9yKFwiVW5hYmxlIHRvIGNvbXB1dGUgbWFjaGluZSBkYXRhc3RvcmUgc3RhdHM6IFwiLCBlcnIpKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGFzeW5jIGRvQmFja2dyb3VuZFVwZGF0ZShwZXJzaXN0ZW5jZUxheWVyTWFuYWdlcjogUGVyc2lzdGVuY2VMYXllck1hbmFnZXIpIHtcblxuICAgICAgICBjb25zdCBtYWNoaW5lRGF0YXN0b3JlID0gYXdhaXQgdGhpcy5jYWxjdWxhdGUocGVyc2lzdGVuY2VMYXllck1hbmFnZXIpO1xuXG4gICAgICAgIGlmIChtYWNoaW5lRGF0YXN0b3JlKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLndyaXRlKG1hY2hpbmVEYXRhc3RvcmUpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIHdyaXRlKG1hY2hpbmVEYXRhc3RvcmU6IE1hY2hpbmVEYXRhc3RvcmUpIHtcblxuICAgICAgICBjb25zdCBmaXJlc3RvcmUgPSBhd2FpdCBGaXJlc3RvcmUuZ2V0SW5zdGFuY2UoKTtcblxuICAgICAgICBjb25zdCBpZCA9IG1hY2hpbmVEYXRhc3RvcmUubWFjaGluZTtcblxuICAgICAgICBjb25zdCByZWYgPSBmaXJlc3RvcmUuY29sbGVjdGlvbih0aGlzLkNPTExFQ1RJT05fTkFNRSkuZG9jKGlkKTtcblxuICAgICAgICBhd2FpdCByZWYuc2V0KG1hY2hpbmVEYXRhc3RvcmUpO1xuXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBjYWxjdWxhdGUocGVyc2lzdGVuY2VMYXllck1hbmFnZXI6IFBlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyKTogUHJvbWlzZTxNYWNoaW5lRGF0YXN0b3JlIHwgdW5kZWZpbmVkPiB7XG5cbiAgICAgICAgbG9nLmRlYnVnKFwiQ2FsY3VsYXRpbmcgbWFjaGluZSBkYXRhc3RvcmUgc3RhdHMuLi5cIik7XG5cbiAgICAgICAgY29uc3QgcGVyc2lzdGVuY2VMYXllciA9IGF3YWl0IHBlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyLmdldEFzeW5jKCk7XG5cbiAgICAgICAgY29uc3QgcGVyc2lzdGVuY2VMYXllclR5cGUgPSBwZXJzaXN0ZW5jZUxheWVyTWFuYWdlci5jdXJyZW50VHlwZSgpO1xuICAgICAgICBjb25zdCBtYWNoaW5lID0gTWFjaGluZUlEcy5nZXQoKTtcbiAgICAgICAgY29uc3QgZG9jTWV0YVJlZnMgPSBhd2FpdCBwZXJzaXN0ZW5jZUxheWVyLmdldERvY01ldGFSZWZzKCk7XG5cbiAgICAgICAgY29uc3QgbnJEb2NzID0gZG9jTWV0YVJlZnMubGVuZ3RoO1xuICAgICAgICBsZXQgbnJDYXB0dXJlcyA9IDA7XG4gICAgICAgIGxldCBzdG9yYWdlSW5CeXRlcyA9IDA7XG5cbiAgICAgICAgY29uc3QgZGlyZWN0b3JpZXMgPSBuZXcgRGlyZWN0b3JpZXMoKTtcblxuICAgICAgICBhd2FpdCBGaWxlcy5yZWN1cnNpdmVseShkaXJlY3Rvcmllcy5kYXRhRGlyLCBhc3luYyAocGF0aCwgc3RhdHMpID0+IHtcblxuICAgICAgICAgICAgaWYgKHBhdGguaW5kZXhPZihcIi5iYWNrdXAtXCIpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIC8vIHRoaXMgaXMgcGFydCBvZiBhIHNuYXBzaG90IHNvIHRoaXMgaXMgaW52YWxpZC5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChwYXRoLmVuZHNXaXRoKFwiLnBoelwiKSkge1xuICAgICAgICAgICAgICAgICsrbnJDYXB0dXJlcztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3RvcmFnZUluQnl0ZXMgKz0gc3RhdHMuc2l6ZTtcblxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCB3cml0dGVuID0gSVNPRGF0ZVRpbWVTdHJpbmdzLmNyZWF0ZSgpO1xuXG4gICAgICAgIGNvbnN0IG1hY2hpbmVEYXRhc3RvcmUgPSB7XG4gICAgICAgICAgICBwZXJzaXN0ZW5jZUxheWVyVHlwZSxcbiAgICAgICAgICAgIG1hY2hpbmUsXG4gICAgICAgICAgICBuckRvY3MsXG4gICAgICAgICAgICBuckNhcHR1cmVzLFxuICAgICAgICAgICAgc3RvcmFnZUluQnl0ZXMsXG4gICAgICAgICAgICB3cml0dGVuXG4gICAgICAgIH07XG5cbiAgICAgICAgbG9nLmRlYnVnKFwiQ2FsY3VsYXRlZCBmaW5hbCBtYWNoaW5lIGRhdGFzdG9yZSBzdGF0czogXCIsIG1hY2hpbmVEYXRhc3RvcmUpO1xuXG4gICAgICAgIHJldHVybiBtYWNoaW5lRGF0YXN0b3JlO1xuXG4gICAgfVxuXG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBNYWNoaW5lRGF0YXN0b3JlIHtcblxuICAgIHJlYWRvbmx5IHBlcnNpc3RlbmNlTGF5ZXJUeXBlPzogUGVyc2lzdGVuY2VMYXllclR5cGU7XG5cbiAgICByZWFkb25seSBtYWNoaW5lOiBNYWNoaW5lSUQ7XG5cbiAgICByZWFkb25seSBuckRvY3M6IG51bWJlcjtcblxuICAgIHJlYWRvbmx5IG5yQ2FwdHVyZXM6IG51bWJlcjtcblxuICAgIHJlYWRvbmx5IHN0b3JhZ2VJbkJ5dGVzOiBudW1iZXI7XG5cbiAgICByZWFkb25seSB3cml0dGVuOiBJU09EYXRlVGltZVN0cmluZztcblxuICAgIC8vIHJlYWRvbmx5IGRhdGFzdG9yZUNyZWF0ZWQ6IElTT0RhdGVUaW1lU3RyaW5nO1xuXG59XG5cbmNvbnN0IEVSUl9IQU5ETEVSID0gKGVycjogRXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoXCJDb3VsZCBub3QgY3JlYXRlIHNuYXBzaG90IGZvciBhY2NvdW50OiBcIiwgZXJyKTtcblxuIl19