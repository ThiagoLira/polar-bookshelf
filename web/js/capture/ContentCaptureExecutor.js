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
const Results_1 = require("polar-shared/src/util/Results");
const Filenames_1 = require("../util/Filenames");
const FilePaths_1 = require("polar-shared/src/util/FilePaths");
const CapturedPHZWriter_1 = require("polar-content-capture/src/phz/CapturedPHZWriter");
const Logger_1 = require("polar-shared/src/logger/Logger");
const Directories_1 = require("../datastore/Directories");
const Hashcodes_1 = require("polar-shared/src/util/Hashcodes");
const PHZWriter_1 = require("polar-content-capture/src/phz/PHZWriter");
const log = Logger_1.Logger.create();
const MAX_TITLE_LENGTH = 50;
class ContentCaptureExecutor {
    static execute(webContents, browserProfile) {
        return __awaiter(this, void 0, void 0, function* () {
            log.info("Capturing the HTML...");
            let captured;
            try {
                const result = yield webContents.executeJavaScript("ContentCapture.execute()");
                captured = Results_1.Results.create(result).get();
            }
            catch (e) {
                log.error("Could not capture HTML: ", e);
                throw e;
            }
            captured.browser = browserProfile;
            const url = captured.url;
            const title = (captured.title || "").substring(0, MAX_TITLE_LENGTH);
            const hash = Hashcodes_1.Hashcodes.createID(url);
            const stashDir = this.directories.stashDir;
            const filename = hash + '-' + Filenames_1.Filenames.sanitize(title);
            const phzPath = FilePaths_1.FilePaths.join(stashDir, filename) + '.phz';
            log.info("Writing PHZ to: " + phzPath);
            const output = new PHZWriter_1.PHZWriter(phzPath);
            const capturedPHZWriter = new CapturedPHZWriter_1.CapturedPHZWriter(output);
            yield capturedPHZWriter.convert(captured);
            log.info("Capturing the HTML...done");
            return {
                path: phzPath
            };
        });
    }
}
exports.ContentCaptureExecutor = ContentCaptureExecutor;
ContentCaptureExecutor.directories = new Directories_1.Directories();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGVudENhcHR1cmVFeGVjdXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNvbnRlbnRDYXB0dXJlRXhlY3V0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQSwyREFBc0Q7QUFDdEQsaURBQTRDO0FBQzVDLCtEQUEwRDtBQUMxRCx1RkFBa0Y7QUFDbEYsMkRBQXNEO0FBR3RELDBEQUFxRDtBQUVyRCwrREFBMEQ7QUFFMUQsdUVBQWtFO0FBRWxFLE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU1QixNQUFNLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztBQUU1QixNQUFhLHNCQUFzQjtJQUl4QixNQUFNLENBQU8sT0FBTyxDQUFDLFdBQXdCLEVBQUUsY0FBOEI7O1lBS2hGLEdBQUcsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQztZQUVsQyxJQUFJLFFBQVEsQ0FBQztZQUtiLElBQUk7Z0JBRUEsTUFBTSxNQUFNLEdBQXNCLE1BQU0sV0FBVyxDQUFDLGlCQUFpQixDQUFDLDBCQUEwQixDQUFDLENBQUM7Z0JBQ2xHLFFBQVEsR0FBRyxpQkFBTyxDQUFDLE1BQU0sQ0FBVyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQzthQUVyRDtZQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQU1SLEdBQUcsQ0FBQyxLQUFLLENBQUMsMEJBQTBCLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pDLE1BQU0sQ0FBQyxDQUFDO2FBQ1g7WUFHRCxRQUFRLENBQUMsT0FBTyxHQUFHLGNBQWMsQ0FBQztZQUVsQyxNQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDO1lBRXpCLE1BQU0sS0FBSyxHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLGdCQUFnQixDQUFDLENBQUM7WUFFcEUsTUFBTSxJQUFJLEdBQUcscUJBQVMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDckMsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUM7WUFDM0MsTUFBTSxRQUFRLEdBQUcsSUFBSSxHQUFHLEdBQUcsR0FBRyxxQkFBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUV4RCxNQUFNLE9BQU8sR0FBRyxxQkFBUyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLEdBQUcsTUFBTSxDQUFDO1lBRTVELEdBQUcsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsT0FBTyxDQUFDLENBQUM7WUFFdkMsTUFBTSxNQUFNLEdBQUcsSUFBSSxxQkFBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3RDLE1BQU0saUJBQWlCLEdBQUcsSUFBSSxxQ0FBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN4RCxNQUFNLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQU8xQyxHQUFHLENBQUMsSUFBSSxDQUFDLDJCQUEyQixDQUFDLENBQUM7WUFFdEMsT0FBTztnQkFDSCxJQUFJLEVBQUUsT0FBTzthQUNoQixDQUFDO1FBRU4sQ0FBQztLQUFBOztBQTdETCx3REErREM7QUE3RGtCLGtDQUFXLEdBQUcsSUFBSSx5QkFBVyxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lSZXN1bHR9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC9SZXN1bHQnO1xuaW1wb3J0IHtSZXN1bHRzfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvUmVzdWx0cyc7XG5pbXBvcnQge0ZpbGVuYW1lc30gZnJvbSAnLi4vdXRpbC9GaWxlbmFtZXMnO1xuaW1wb3J0IHtGaWxlUGF0aHN9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC9GaWxlUGF0aHMnO1xuaW1wb3J0IHtDYXB0dXJlZFBIWldyaXRlcn0gZnJvbSAncG9sYXItY29udGVudC1jYXB0dXJlL3NyYy9waHovQ2FwdHVyZWRQSFpXcml0ZXInO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge0Jyb3dzZXJQcm9maWxlfSBmcm9tICcuL0Jyb3dzZXJQcm9maWxlJztcbmltcG9ydCBXZWJDb250ZW50cyA9IEVsZWN0cm9uLldlYkNvbnRlbnRzO1xuaW1wb3J0IHtEaXJlY3Rvcmllc30gZnJvbSAnLi4vZGF0YXN0b3JlL0RpcmVjdG9yaWVzJztcbmltcG9ydCB7Q2FwdHVyZVJlc3VsdH0gZnJvbSAnLi9DYXB0dXJlUmVzdWx0JztcbmltcG9ydCB7SGFzaGNvZGVzfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvSGFzaGNvZGVzJztcbmltcG9ydCB7Q2FwdHVyZWR9IGZyb20gJ3BvbGFyLWNvbnRlbnQtY2FwdHVyZS9zcmMvY2FwdHVyZS9DYXB0dXJlZCc7XG5pbXBvcnQge1BIWldyaXRlcn0gZnJvbSBcInBvbGFyLWNvbnRlbnQtY2FwdHVyZS9zcmMvcGh6L1BIWldyaXRlclwiO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbmNvbnN0IE1BWF9USVRMRV9MRU5HVEggPSA1MDtcblxuZXhwb3J0IGNsYXNzIENvbnRlbnRDYXB0dXJlRXhlY3V0b3Ige1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgZGlyZWN0b3JpZXMgPSBuZXcgRGlyZWN0b3JpZXMoKTtcblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgZXhlY3V0ZSh3ZWJDb250ZW50czogV2ViQ29udGVudHMsIGJyb3dzZXJQcm9maWxlOiBCcm93c2VyUHJvZmlsZSk6IFByb21pc2U8Q2FwdHVyZVJlc3VsdD4ge1xuXG4gICAgICAgIC8vIFRPRE86IHRoaXMgZnVuY3Rpb24gc2hvdWxkIGJlIGNsZWFuZWQgdXAgYSBiaXQuLiBpdCBoYXMgdG9vIG1hbnkgbW92aW5nXG4gICAgICAgIC8vIHBhcnRzIG5vdyBhbmQgc2hvdWxkIGJlIG1vdmVkIGludG8gc21hbGxlciBmdW5jdGlvbnMuXG5cbiAgICAgICAgbG9nLmluZm8oXCJDYXB0dXJpbmcgdGhlIEhUTUwuLi5cIik7XG5cbiAgICAgICAgbGV0IGNhcHR1cmVkO1xuXG4gICAgICAgIC8vIFRPRE86IEkgZG9uJ3QgdGhpbmsgZXhlY3V0ZUphdmFzY3JpcHQgYWN0dWFsbHkgaGFuZGxlcyBleGNlcHRpb25zXG4gICAgICAgIC8vIHByb3Blcmx5IGFuZCB0aGV5IGFsc28gc3VnZ2VzdCB1c2luZyB0aGUgY2FsbGJhY2sgc28gd2Ugc2hvdWxkIHRlc3RcbiAgICAgICAgLy8gdGhpcyBtb3JlIGFnZ3Jlc3NpdmVseS5cbiAgICAgICAgdHJ5IHtcblxuICAgICAgICAgICAgY29uc3QgcmVzdWx0OiBJUmVzdWx0PENhcHR1cmVkPiA9IGF3YWl0IHdlYkNvbnRlbnRzLmV4ZWN1dGVKYXZhU2NyaXB0KFwiQ29udGVudENhcHR1cmUuZXhlY3V0ZSgpXCIpO1xuICAgICAgICAgICAgY2FwdHVyZWQgPSBSZXN1bHRzLmNyZWF0ZTxDYXB0dXJlZD4ocmVzdWx0KS5nZXQoKTtcblxuICAgICAgICB9IGNhdGNoIChlKSB7XG5cbiAgICAgICAgICAgIC8vIFRPRE86IHRoaXMgaXNuJ3QgYWN0dWFsbHkgY2FsbGVkIGJlY2F1c2UgZXhlY3V0ZUphdmFzY3JpcHQgZG9lc24ndFxuICAgICAgICAgICAgLy8gaGFuZGxlIGV4Y2VwdGlvbnMuIFlvdSBqdXN0IGJsb2NrIHRoZXJlIGZvcmV2ZXIuIEkgbmVlZCB0byB3cmFwXG4gICAgICAgICAgICAvLyB0aGlzIHdpdGggYSBjbG9zdXJlIHRoYXQgaXMgYW4gJ2VpdGhlcicgZXJyIG9yIGNvbnRlbnQuXG5cbiAgICAgICAgICAgIGxvZy5lcnJvcihcIkNvdWxkIG5vdCBjYXB0dXJlIEhUTUw6IFwiLCBlKTtcbiAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyByZWNvcmQgdGhlIGJyb3dzZXIgdGhhdCB3YXMgdXNlZCB0byByZW5kZXIgdGhpcyBwYWdlLlxuICAgICAgICBjYXB0dXJlZC5icm93c2VyID0gYnJvd3NlclByb2ZpbGU7XG5cbiAgICAgICAgY29uc3QgdXJsID0gY2FwdHVyZWQudXJsO1xuXG4gICAgICAgIGNvbnN0IHRpdGxlID0gKGNhcHR1cmVkLnRpdGxlIHx8IFwiXCIpLnN1YnN0cmluZygwLCBNQVhfVElUTEVfTEVOR1RIKTtcblxuICAgICAgICBjb25zdCBoYXNoID0gSGFzaGNvZGVzLmNyZWF0ZUlEKHVybCk7XG4gICAgICAgIGNvbnN0IHN0YXNoRGlyID0gdGhpcy5kaXJlY3Rvcmllcy5zdGFzaERpcjtcbiAgICAgICAgY29uc3QgZmlsZW5hbWUgPSBoYXNoICsgJy0nICsgRmlsZW5hbWVzLnNhbml0aXplKHRpdGxlKTtcblxuICAgICAgICBjb25zdCBwaHpQYXRoID0gRmlsZVBhdGhzLmpvaW4oc3Rhc2hEaXIsIGZpbGVuYW1lKSArICcucGh6JztcblxuICAgICAgICBsb2cuaW5mbyhcIldyaXRpbmcgUEhaIHRvOiBcIiArIHBoelBhdGgpO1xuXG4gICAgICAgIGNvbnN0IG91dHB1dCA9IG5ldyBQSFpXcml0ZXIocGh6UGF0aCk7XG4gICAgICAgIGNvbnN0IGNhcHR1cmVkUEhaV3JpdGVyID0gbmV3IENhcHR1cmVkUEhaV3JpdGVyKG91dHB1dCk7XG4gICAgICAgIGF3YWl0IGNhcHR1cmVkUEhaV3JpdGVyLmNvbnZlcnQoY2FwdHVyZWQpO1xuXG4gICAgICAgIC8vIHdyaXRlIHRoZSBjYXB0dXJlZCBIVE1MIHRvIC90bXAgZm9yIGRlYnVnIHB1cnBvc2VzLiAgV2UgY2FuIGVuYWJsZSB0aGlzXG4gICAgICAgIC8vIGFzIGEgY29tbWFuZCBsaW5lIHN3aXRjaCBsYXRlci5cblxuICAgICAgICAvLyBhd2FpdCBGaWxlcy53cml0ZUZpbGVBc3luYyhgL3RtcC8ke2ZpbGVuYW1lfS5qc29uYCwgSlNPTi5zdHJpbmdpZnkoY2FwdHVyZWQsIG51bGwsIFwiICBcIikpO1xuXG4gICAgICAgIGxvZy5pbmZvKFwiQ2FwdHVyaW5nIHRoZSBIVE1MLi4uZG9uZVwiKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcGF0aDogcGh6UGF0aFxuICAgICAgICB9O1xuXG4gICAgfVxuXG59XG4iXX0=