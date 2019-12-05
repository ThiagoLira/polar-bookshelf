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
const PolarDataDir_1 = require("../../../test/PolarDataDir");
const DiskDatastore_1 = require("../../../datastore/DiskDatastore");
const LoadExampleDocs_1 = require("./LoadExampleDocs");
const AppPath_1 = require("../../../electron/app_path/AppPath");
const FilePaths_1 = require("polar-shared/src/util/FilePaths");
const DefaultPersistenceLayer_1 = require("../../../datastore/DefaultPersistenceLayer");
describe('LoadExampleDocs', function () {
    beforeEach(function () {
        return __awaiter(this, void 0, void 0, function* () {
            AppPath_1.AppPath.set(FilePaths_1.FilePaths.resolve(FilePaths_1.FilePaths.join(__dirname, "..", "..", "..", "..", "..")));
            yield PolarDataDir_1.PolarDataDir.useFreshDirectory('.load-example-docs');
            console.log("Using app path: " + AppPath_1.AppPath.get());
        });
    });
    it("load basic data", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const persistenceLayer = new DefaultPersistenceLayer_1.DefaultPersistenceLayer(new DiskDatastore_1.DiskDatastore());
            const loader = new LoadExampleDocs_1.LoadExampleDocs(persistenceLayer);
            yield loader.load(docInfo => {
                console.log("Loaded: ", docInfo);
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9hZEV4YW1wbGVEb2NzVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkxvYWRFeGFtcGxlRG9jc1Rlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSw2REFBd0Q7QUFDeEQsb0VBQStEO0FBQy9ELHVEQUFrRDtBQUNsRCxnRUFBMkQ7QUFDM0QsK0RBQTBEO0FBQzFELHdGQUFtRjtBQUVuRixRQUFRLENBQUMsaUJBQWlCLEVBQUU7SUFFeEIsVUFBVSxDQUFDOztZQUVQLGlCQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFTLENBQUMsT0FBTyxDQUFDLHFCQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hGLE1BQU0sMkJBQVksQ0FBQyxpQkFBaUIsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1lBRTNELE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEdBQUcsaUJBQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBRXBELENBQUM7S0FBQSxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsaUJBQWlCLEVBQUU7O1lBRWxCLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxpREFBdUIsQ0FBQyxJQUFJLDZCQUFhLEVBQUUsQ0FBQyxDQUFDO1lBQzFFLE1BQU0sTUFBTSxHQUFHLElBQUksaUNBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBRXJELE1BQU0sTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDckMsQ0FBQyxDQUFDLENBQUM7UUFFUCxDQUFDO0tBQUEsQ0FBQyxDQUFDO0FBRVAsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BvbGFyRGF0YURpcn0gZnJvbSAnLi4vLi4vLi4vdGVzdC9Qb2xhckRhdGFEaXInO1xuaW1wb3J0IHtEaXNrRGF0YXN0b3JlfSBmcm9tICcuLi8uLi8uLi9kYXRhc3RvcmUvRGlza0RhdGFzdG9yZSc7XG5pbXBvcnQge0xvYWRFeGFtcGxlRG9jc30gZnJvbSAnLi9Mb2FkRXhhbXBsZURvY3MnO1xuaW1wb3J0IHtBcHBQYXRofSBmcm9tICcuLi8uLi8uLi9lbGVjdHJvbi9hcHBfcGF0aC9BcHBQYXRoJztcbmltcG9ydCB7RmlsZVBhdGhzfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvRmlsZVBhdGhzJztcbmltcG9ydCB7RGVmYXVsdFBlcnNpc3RlbmNlTGF5ZXJ9IGZyb20gJy4uLy4uLy4uL2RhdGFzdG9yZS9EZWZhdWx0UGVyc2lzdGVuY2VMYXllcic7XG5cbmRlc2NyaWJlKCdMb2FkRXhhbXBsZURvY3MnLCBmdW5jdGlvbigpIHtcblxuICAgIGJlZm9yZUVhY2goYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgQXBwUGF0aC5zZXQoRmlsZVBhdGhzLnJlc29sdmUoRmlsZVBhdGhzLmpvaW4oX19kaXJuYW1lLCBcIi4uXCIsIFwiLi5cIiwgXCIuLlwiLCBcIi4uXCIsIFwiLi5cIikpKTtcbiAgICAgICAgYXdhaXQgUG9sYXJEYXRhRGlyLnVzZUZyZXNoRGlyZWN0b3J5KCcubG9hZC1leGFtcGxlLWRvY3MnKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhcIlVzaW5nIGFwcCBwYXRoOiBcIiArIEFwcFBhdGguZ2V0KCkpO1xuXG4gICAgfSk7XG5cbiAgICBpdChcImxvYWQgYmFzaWMgZGF0YVwiLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICBjb25zdCBwZXJzaXN0ZW5jZUxheWVyID0gbmV3IERlZmF1bHRQZXJzaXN0ZW5jZUxheWVyKG5ldyBEaXNrRGF0YXN0b3JlKCkpO1xuICAgICAgICBjb25zdCBsb2FkZXIgPSBuZXcgTG9hZEV4YW1wbGVEb2NzKHBlcnNpc3RlbmNlTGF5ZXIpO1xuXG4gICAgICAgIGF3YWl0IGxvYWRlci5sb2FkKGRvY0luZm8gPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJMb2FkZWQ6IFwiLCBkb2NJbmZvKTtcbiAgICAgICAgfSk7XG5cbiAgICB9KTtcblxufSk7XG5cbiJdfQ==