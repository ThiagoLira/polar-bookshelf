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
const Assertions_1 = require("../../../../test/Assertions");
const NotesSync_1 = require("./NotesSync");
const AddNoteClient_1 = require("./clients/AddNoteClient");
const FindNotesClient_1 = require("./clients/FindNotesClient");
const SyncQueue_1 = require("../SyncQueue");
const StoreMediaFileClient_1 = require("./clients/StoreMediaFileClient");
const CanAddNotesClient_1 = require("./clients/CanAddNotesClient");
describe('NotesSync', function () {
    let notesSync;
    let abortable;
    let syncProgress;
    const syncProgressListener = _syncProgress => {
        console.log(syncProgress);
        syncProgress = _syncProgress;
    };
    let syncQueue;
    beforeEach(function () {
        abortable = {
            aborted: false
        };
        syncQueue = new SyncQueue_1.SyncQueue(abortable, syncProgressListener);
        notesSync = new NotesSync_1.NotesSync(syncQueue);
    });
    it("full initial sync", function () {
        return __awaiter(this, void 0, void 0, function* () {
            notesSync.addNoteClient = AddNoteClient_1.AddNoteClient.createMock(1);
            notesSync.canAddNotesClient = CanAddNotesClient_1.CanAddNotesClient.createMock([true]);
            notesSync.storeMediaFileClient = StoreMediaFileClient_1.StoreMediaFileClient.createMock();
            notesSync.findNotesClient = FindNotesClient_1.FindNotesClient.createMock([]);
            const noteDescriptors = [
                {
                    guid: "101",
                    deckName: "test",
                    modelName: "test",
                    fields: {},
                    tags: []
                }
            ];
            const notesSynchronized = notesSync.enqueue(noteDescriptors);
            yield syncQueue.execute();
            Assertions_1.assertJSON(notesSynchronized.created, noteDescriptors);
        });
    });
    it("sync with pre-existing notes that are skipped", function () {
        return __awaiter(this, void 0, void 0, function* () {
            notesSync.addNoteClient = AddNoteClient_1.AddNoteClient.createMock(1);
            notesSync.findNotesClient = FindNotesClient_1.FindNotesClient.createMock([1]);
            const noteDescriptors = [
                {
                    guid: "101",
                    deckName: "test",
                    modelName: "test",
                    fields: {},
                    tags: []
                }
            ];
            const notesSynchronized = notesSync.enqueue(noteDescriptors);
            yield syncQueue.execute();
            Assertions_1.assertJSON(notesSynchronized.created, []);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm90ZXNTeW5jVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIk5vdGVzU3luY1Rlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSw0REFBdUQ7QUFDdkQsMkNBQXNDO0FBRXRDLDJEQUFzRDtBQUN0RCwrREFBMEQ7QUFJMUQsNENBQXVDO0FBQ3ZDLHlFQUFvRTtBQUNwRSxtRUFBOEQ7QUFFOUQsUUFBUSxDQUFDLFdBQVcsRUFBRTtJQUVsQixJQUFJLFNBQW9CLENBQUM7SUFFekIsSUFBSSxTQUFvQixDQUFDO0lBRXpCLElBQUksWUFBc0MsQ0FBQztJQUUzQyxNQUFNLG9CQUFvQixHQUF5QixhQUFhLENBQUMsRUFBRTtRQUMvRCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzFCLFlBQVksR0FBRyxhQUFhLENBQUM7SUFDakMsQ0FBQyxDQUFDO0lBRUYsSUFBSSxTQUFvQixDQUFDO0lBRXpCLFVBQVUsQ0FBQztRQUVQLFNBQVMsR0FBRztZQUNSLE9BQU8sRUFBRSxLQUFLO1NBQ2pCLENBQUM7UUFFRixTQUFTLEdBQUcsSUFBSSxxQkFBUyxDQUFDLFNBQVMsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBRTNELFNBQVMsR0FBRyxJQUFJLHFCQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7SUFFekMsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsbUJBQW1CLEVBQUU7O1lBS3BCLFNBQVMsQ0FBQyxhQUFhLEdBQUcsNkJBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEQsU0FBUyxDQUFDLGlCQUFpQixHQUFHLHFDQUFpQixDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDbkUsU0FBUyxDQUFDLG9CQUFvQixHQUFHLDJDQUFvQixDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ25FLFNBQVMsQ0FBQyxlQUFlLEdBQUcsaUNBQWUsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7WUFFM0QsTUFBTSxlQUFlLEdBQXFCO2dCQUN0QztvQkFDSSxJQUFJLEVBQUUsS0FBSztvQkFDWCxRQUFRLEVBQUUsTUFBTTtvQkFDaEIsU0FBUyxFQUFFLE1BQU07b0JBQ2pCLE1BQU0sRUFBRSxFQUFFO29CQUNWLElBQUksRUFBRSxFQUFFO2lCQUNYO2FBQ0osQ0FBQztZQUVGLE1BQU0saUJBQWlCLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUU3RCxNQUFNLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUUxQix1QkFBVSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxlQUFlLENBQUMsQ0FBQztRQUUzRCxDQUFDO0tBQUEsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLCtDQUErQyxFQUFFOztZQUtoRCxTQUFTLENBQUMsYUFBYSxHQUFHLDZCQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RELFNBQVMsQ0FBQyxlQUFlLEdBQUcsaUNBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRTVELE1BQU0sZUFBZSxHQUFxQjtnQkFDdEM7b0JBQ0ksSUFBSSxFQUFFLEtBQUs7b0JBQ1gsUUFBUSxFQUFFLE1BQU07b0JBQ2hCLFNBQVMsRUFBRSxNQUFNO29CQUNqQixNQUFNLEVBQUUsRUFBRTtvQkFDVixJQUFJLEVBQUUsRUFBRTtpQkFDWDthQUNKLENBQUM7WUFFRixNQUFNLGlCQUFpQixHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7WUFFN0QsTUFBTSxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUM7WUFFMUIsdUJBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFOUMsQ0FBQztLQUFBLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthc3NlcnRKU09OfSBmcm9tICcuLi8uLi8uLi8uLi90ZXN0L0Fzc2VydGlvbnMnO1xuaW1wb3J0IHtOb3Rlc1N5bmN9IGZyb20gJy4vTm90ZXNTeW5jJztcbmltcG9ydCB7Tm90ZURlc2NyaXB0b3J9IGZyb20gJy4vTm90ZURlc2NyaXB0b3InO1xuaW1wb3J0IHtBZGROb3RlQ2xpZW50fSBmcm9tICcuL2NsaWVudHMvQWRkTm90ZUNsaWVudCc7XG5pbXBvcnQge0ZpbmROb3Rlc0NsaWVudH0gZnJvbSAnLi9jbGllbnRzL0ZpbmROb3Rlc0NsaWVudCc7XG5pbXBvcnQge0Fib3J0YWJsZX0gZnJvbSAnLi4vQWJvcnRhYmxlJztcbmltcG9ydCB7U3luY1Byb2dyZXNzfSBmcm9tICcuLi9TeW5jUHJvZ3Jlc3MnO1xuaW1wb3J0IHtTeW5jUHJvZ3Jlc3NMaXN0ZW5lcn0gZnJvbSAnLi4vU3luY1Byb2dyZXNzTGlzdGVuZXInO1xuaW1wb3J0IHtTeW5jUXVldWV9IGZyb20gJy4uL1N5bmNRdWV1ZSc7XG5pbXBvcnQge1N0b3JlTWVkaWFGaWxlQ2xpZW50fSBmcm9tICcuL2NsaWVudHMvU3RvcmVNZWRpYUZpbGVDbGllbnQnO1xuaW1wb3J0IHtDYW5BZGROb3Rlc0NsaWVudH0gZnJvbSAnLi9jbGllbnRzL0NhbkFkZE5vdGVzQ2xpZW50JztcblxuZGVzY3JpYmUoJ05vdGVzU3luYycsIGZ1bmN0aW9uKCkge1xuXG4gICAgbGV0IG5vdGVzU3luYzogTm90ZXNTeW5jO1xuXG4gICAgbGV0IGFib3J0YWJsZTogQWJvcnRhYmxlO1xuXG4gICAgbGV0IHN5bmNQcm9ncmVzczogU3luY1Byb2dyZXNzIHwgdW5kZWZpbmVkO1xuXG4gICAgY29uc3Qgc3luY1Byb2dyZXNzTGlzdGVuZXI6IFN5bmNQcm9ncmVzc0xpc3RlbmVyID0gX3N5bmNQcm9ncmVzcyA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHN5bmNQcm9ncmVzcyk7XG4gICAgICAgIHN5bmNQcm9ncmVzcyA9IF9zeW5jUHJvZ3Jlc3M7XG4gICAgfTtcblxuICAgIGxldCBzeW5jUXVldWU6IFN5bmNRdWV1ZTtcblxuICAgIGJlZm9yZUVhY2goZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgYWJvcnRhYmxlID0ge1xuICAgICAgICAgICAgYWJvcnRlZDogZmFsc2VcbiAgICAgICAgfTtcblxuICAgICAgICBzeW5jUXVldWUgPSBuZXcgU3luY1F1ZXVlKGFib3J0YWJsZSwgc3luY1Byb2dyZXNzTGlzdGVuZXIpO1xuXG4gICAgICAgIG5vdGVzU3luYyA9IG5ldyBOb3Rlc1N5bmMoc3luY1F1ZXVlKTtcblxuICAgIH0pO1xuXG4gICAgaXQoXCJmdWxsIGluaXRpYWwgc3luY1wiLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICAvLyAqKioqXG4gICAgICAgIC8vIGNyZWF0ZSBtb2NrcyB3aGVyZSB3ZSBoYXZlIG5vIGluaXRpYWwgbm90ZXMsIGFuZCB3ZSBhbGxvd1xuICAgICAgICAvLyBhIG5ldyBub3RlIHRvIGJlIGNyZWF0ZWQuXG4gICAgICAgIG5vdGVzU3luYy5hZGROb3RlQ2xpZW50ID0gQWRkTm90ZUNsaWVudC5jcmVhdGVNb2NrKDEpO1xuICAgICAgICBub3Rlc1N5bmMuY2FuQWRkTm90ZXNDbGllbnQgPSBDYW5BZGROb3Rlc0NsaWVudC5jcmVhdGVNb2NrKFt0cnVlXSk7XG4gICAgICAgIG5vdGVzU3luYy5zdG9yZU1lZGlhRmlsZUNsaWVudCA9IFN0b3JlTWVkaWFGaWxlQ2xpZW50LmNyZWF0ZU1vY2soKTtcbiAgICAgICAgbm90ZXNTeW5jLmZpbmROb3Rlc0NsaWVudCA9IEZpbmROb3Rlc0NsaWVudC5jcmVhdGVNb2NrKFtdKTtcblxuICAgICAgICBjb25zdCBub3RlRGVzY3JpcHRvcnM6IE5vdGVEZXNjcmlwdG9yW10gPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZ3VpZDogXCIxMDFcIixcbiAgICAgICAgICAgICAgICBkZWNrTmFtZTogXCJ0ZXN0XCIsXG4gICAgICAgICAgICAgICAgbW9kZWxOYW1lOiBcInRlc3RcIixcbiAgICAgICAgICAgICAgICBmaWVsZHM6IHt9LFxuICAgICAgICAgICAgICAgIHRhZ3M6IFtdXG4gICAgICAgICAgICB9XG4gICAgICAgIF07XG5cbiAgICAgICAgY29uc3Qgbm90ZXNTeW5jaHJvbml6ZWQgPSBub3Rlc1N5bmMuZW5xdWV1ZShub3RlRGVzY3JpcHRvcnMpO1xuXG4gICAgICAgIGF3YWl0IHN5bmNRdWV1ZS5leGVjdXRlKCk7XG5cbiAgICAgICAgYXNzZXJ0SlNPTihub3Rlc1N5bmNocm9uaXplZC5jcmVhdGVkLCBub3RlRGVzY3JpcHRvcnMpO1xuXG4gICAgfSk7XG5cbiAgICBpdChcInN5bmMgd2l0aCBwcmUtZXhpc3Rpbmcgbm90ZXMgdGhhdCBhcmUgc2tpcHBlZFwiLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICAvLyAqKioqXG4gICAgICAgIC8vIGNyZWF0ZSBtb2NrcyB3aGVyZSB3ZSBoYXZlIG5vIGluaXRpYWwgbm90ZXMsIGFuZCB3ZSBhbGxvd1xuICAgICAgICAvLyBhIG5ldyBub3RlIHRvIGJlIGNyZWF0ZWQuXG4gICAgICAgIG5vdGVzU3luYy5hZGROb3RlQ2xpZW50ID0gQWRkTm90ZUNsaWVudC5jcmVhdGVNb2NrKDEpO1xuICAgICAgICBub3Rlc1N5bmMuZmluZE5vdGVzQ2xpZW50ID0gRmluZE5vdGVzQ2xpZW50LmNyZWF0ZU1vY2soWzFdKTtcblxuICAgICAgICBjb25zdCBub3RlRGVzY3JpcHRvcnM6IE5vdGVEZXNjcmlwdG9yW10gPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZ3VpZDogXCIxMDFcIixcbiAgICAgICAgICAgICAgICBkZWNrTmFtZTogXCJ0ZXN0XCIsXG4gICAgICAgICAgICAgICAgbW9kZWxOYW1lOiBcInRlc3RcIixcbiAgICAgICAgICAgICAgICBmaWVsZHM6IHt9LFxuICAgICAgICAgICAgICAgIHRhZ3M6IFtdXG4gICAgICAgICAgICB9XG4gICAgICAgIF07XG5cbiAgICAgICAgY29uc3Qgbm90ZXNTeW5jaHJvbml6ZWQgPSBub3Rlc1N5bmMuZW5xdWV1ZShub3RlRGVzY3JpcHRvcnMpO1xuXG4gICAgICAgIGF3YWl0IHN5bmNRdWV1ZS5leGVjdXRlKCk7XG5cbiAgICAgICAgYXNzZXJ0SlNPTihub3Rlc1N5bmNocm9uaXplZC5jcmVhdGVkLCBbXSk7XG5cbiAgICB9KTtcblxufSk7XG4iXX0=