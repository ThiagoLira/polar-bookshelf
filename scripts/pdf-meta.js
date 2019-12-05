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
const PDFMetadata_1 = require("polar-pdf/src/pdf/PDFMetadata");
const FilePaths_1 = require("polar-shared/src/util/FilePaths");
const PDFImporter_1 = require("../web/js/apps/repository/importers/PDFImporter");
class Main {
    static main() {
        return __awaiter(this, void 0, void 0, function* () {
            for (const path of process.argv.slice(2)) {
                console.log("====");
                console.log("Fetching PDF metadata for: " + FilePaths_1.FilePaths.resolve(path));
                const metadata = yield PDFMetadata_1.PDFMetadata.getMetadata(path);
                const hashcode = yield PDFImporter_1.PDFImporter.computeHashcode(path);
                console.log("fingerprint: " + metadata.fingerprint);
                console.log("nr pages: " + metadata.nrPages);
                console.log("hashcode: " + JSON.stringify(hashcode, null, "  "));
            }
        });
    }
}
Main.main()
    .catch(err => console.error("Failure to process PDF meta: ", err));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLW1ldGEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwZGYtbWV0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLCtEQUEwRDtBQUMxRCwrREFBMEQ7QUFDMUQsaUZBQTRFO0FBSTVFLE1BQU0sSUFBSTtJQUVDLE1BQU0sQ0FBTyxJQUFJOztZQUVwQixLQUFLLE1BQU0sSUFBSSxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixHQUFHLHFCQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ3JFLE1BQU0sUUFBUSxHQUFHLE1BQU0seUJBQVcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3JELE1BQU0sUUFBUSxHQUFHLE1BQU0seUJBQVcsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3pELE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDcEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQzthQUNwRTtRQUVMLENBQUM7S0FBQTtDQUVKO0FBRUQsSUFBSSxDQUFDLElBQUksRUFBRTtLQUNOLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsK0JBQStCLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UERGTWV0YWRhdGF9IGZyb20gXCJwb2xhci1wZGYvc3JjL3BkZi9QREZNZXRhZGF0YVwiO1xuaW1wb3J0IHtGaWxlUGF0aHN9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC9GaWxlUGF0aHMnO1xuaW1wb3J0IHtQREZJbXBvcnRlcn0gZnJvbSAnLi4vd2ViL2pzL2FwcHMvcmVwb3NpdG9yeS9pbXBvcnRlcnMvUERGSW1wb3J0ZXInO1xuXG4vLyBjb2RlIHRoYXQgcHJpbnRzIFBERiBtZXRhZGF0YSBmcm1vIGZpbGVzIGdpdmVuIG9uIHRoZSBjb21tYW5kIGxpbmUuXG5cbmNsYXNzIE1haW4ge1xuXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBtYWluKCkge1xuXG4gICAgICAgIGZvciAoY29uc3QgcGF0aCBvZiBwcm9jZXNzLmFyZ3Yuc2xpY2UoMikpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiPT09PVwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRmV0Y2hpbmcgUERGIG1ldGFkYXRhIGZvcjogXCIgKyBGaWxlUGF0aHMucmVzb2x2ZShwYXRoKSk7XG4gICAgICAgICAgICBjb25zdCBtZXRhZGF0YSA9IGF3YWl0IFBERk1ldGFkYXRhLmdldE1ldGFkYXRhKHBhdGgpO1xuICAgICAgICAgICAgY29uc3QgaGFzaGNvZGUgPSBhd2FpdCBQREZJbXBvcnRlci5jb21wdXRlSGFzaGNvZGUocGF0aCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImZpbmdlcnByaW50OiBcIiArIG1ldGFkYXRhLmZpbmdlcnByaW50KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibnIgcGFnZXM6IFwiICsgbWV0YWRhdGEubnJQYWdlcyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImhhc2hjb2RlOiBcIiArIEpTT04uc3RyaW5naWZ5KGhhc2hjb2RlLCBudWxsLCBcIiAgXCIpKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG59XG5cbk1haW4ubWFpbigpXG4gICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKFwiRmFpbHVyZSB0byBwcm9jZXNzIFBERiBtZXRhOiBcIiwgZXJyKSk7XG4iXX0=