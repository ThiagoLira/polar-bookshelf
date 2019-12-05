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
const DecksSync_1 = require("./DecksSync");
const Assertions_1 = require("../../../../test/Assertions");
const DeckNamesAndIdsClient_1 = require("./clients/DeckNamesAndIdsClient");
const CreateDeckClient_1 = require("./clients/CreateDeckClient");
const SyncQueue_1 = require("../SyncQueue");
describe('DecksSync', function () {
    let decksSync;
    let abortable;
    let syncProgress;
    const syncProgressListener = _syncProgress => {
        console.log(_syncProgress);
        syncProgress = _syncProgress;
    };
    let syncQueue;
    beforeEach(function () {
        abortable = {
            aborted: false
        };
        syncQueue = new SyncQueue_1.SyncQueue(abortable, syncProgressListener);
        decksSync = new DecksSync_1.DecksSync(syncQueue);
        decksSync.createDeckClient = CreateDeckClient_1.CreateDeckClient.createMock(1);
        decksSync.deckNamesAndIdsClient = DeckNamesAndIdsClient_1.DeckNamesAndIdsClient.createMock({});
    });
    it("basic sync", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const deckDescriptors = [
                {
                    name: "Test Deck"
                }
            ];
            const createdDescriptors = decksSync.enqueue(deckDescriptors);
            yield syncQueue.execute();
            Assertions_1.assertJSON(createdDescriptors, [
                {
                    "name": "Test Deck"
                }
            ]);
            Assertions_1.assertJSON(syncProgress, {
                "percentage": 100,
                "state": "COMPLETED",
                "taskResult": {
                    "value": {
                        "message": "Creating missing deck: Test Deck"
                    }
                }
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVja3NTeW5jVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkRlY2tzU3luY1Rlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBc0M7QUFFdEMsNERBQXVEO0FBQ3ZELDJFQUFzRTtBQUN0RSxpRUFBNEQ7QUFJNUQsNENBQXVDO0FBR3ZDLFFBQVEsQ0FBQyxXQUFXLEVBQUU7SUFFbEIsSUFBSSxTQUFvQixDQUFDO0lBRXpCLElBQUksU0FBb0IsQ0FBQztJQUV6QixJQUFJLFlBQXNDLENBQUM7SUFFM0MsTUFBTSxvQkFBb0IsR0FBeUIsYUFBYSxDQUFDLEVBQUU7UUFDL0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMzQixZQUFZLEdBQUcsYUFBYSxDQUFDO0lBQ2pDLENBQUMsQ0FBQztJQUVGLElBQUksU0FBb0IsQ0FBQztJQUV6QixVQUFVLENBQUM7UUFFUCxTQUFTLEdBQUc7WUFDUixPQUFPLEVBQUUsS0FBSztTQUNqQixDQUFDO1FBRUYsU0FBUyxHQUFHLElBQUkscUJBQVMsQ0FBQyxTQUFTLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztRQUUzRCxTQUFTLEdBQUcsSUFBSSxxQkFBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRXJDLFNBQVMsQ0FBQyxnQkFBZ0IsR0FBRyxtQ0FBZ0IsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUQsU0FBUyxDQUFDLHFCQUFxQixHQUFHLDZDQUFxQixDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUUzRSxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxZQUFZLEVBQUU7O1lBRWIsTUFBTSxlQUFlLEdBQXFCO2dCQUN0QztvQkFDSSxJQUFJLEVBQUUsV0FBVztpQkFDcEI7YUFDSixDQUFDO1lBRUYsTUFBTSxrQkFBa0IsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBRTlELE1BQU0sU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBRTFCLHVCQUFVLENBQUMsa0JBQWtCLEVBQUU7Z0JBQzNCO29CQUNJLE1BQU0sRUFBRSxXQUFXO2lCQUN0QjthQUNKLENBQUMsQ0FBQztZQUVILHVCQUFVLENBQUMsWUFBWSxFQUFFO2dCQUNyQixZQUFZLEVBQUUsR0FBRztnQkFDakIsT0FBTyxFQUFFLFdBQVc7Z0JBQ3BCLFlBQVksRUFBRTtvQkFDVixPQUFPLEVBQUU7d0JBQ0wsU0FBUyxFQUFFLGtDQUFrQztxQkFDaEQ7aUJBQ0o7YUFDSixDQUFDLENBQUM7UUFFUCxDQUFDO0tBQUEsQ0FBQyxDQUFDO0FBRVAsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RlY2tzU3luY30gZnJvbSAnLi9EZWNrc1N5bmMnO1xuaW1wb3J0IHtEZWNrRGVzY3JpcHRvcn0gZnJvbSAnLi9EZWNrRGVzY3JpcHRvcic7XG5pbXBvcnQge2Fzc2VydEpTT059IGZyb20gJy4uLy4uLy4uLy4uL3Rlc3QvQXNzZXJ0aW9ucyc7XG5pbXBvcnQge0RlY2tOYW1lc0FuZElkc0NsaWVudH0gZnJvbSAnLi9jbGllbnRzL0RlY2tOYW1lc0FuZElkc0NsaWVudCc7XG5pbXBvcnQge0NyZWF0ZURlY2tDbGllbnR9IGZyb20gJy4vY2xpZW50cy9DcmVhdGVEZWNrQ2xpZW50JztcbmltcG9ydCB7QWJvcnRhYmxlfSBmcm9tICcuLi9BYm9ydGFibGUnO1xuaW1wb3J0IHtTeW5jUHJvZ3Jlc3NMaXN0ZW5lcn0gZnJvbSAnLi4vU3luY1Byb2dyZXNzTGlzdGVuZXInO1xuaW1wb3J0IHtTeW5jUHJvZ3Jlc3N9IGZyb20gJy4uL1N5bmNQcm9ncmVzcyc7XG5pbXBvcnQge1N5bmNRdWV1ZX0gZnJvbSAnLi4vU3luY1F1ZXVlJztcblxuXG5kZXNjcmliZSgnRGVja3NTeW5jJywgZnVuY3Rpb24oKSB7XG5cbiAgICBsZXQgZGVja3NTeW5jOiBEZWNrc1N5bmM7XG5cbiAgICBsZXQgYWJvcnRhYmxlOiBBYm9ydGFibGU7XG5cbiAgICBsZXQgc3luY1Byb2dyZXNzOiBTeW5jUHJvZ3Jlc3MgfCB1bmRlZmluZWQ7XG5cbiAgICBjb25zdCBzeW5jUHJvZ3Jlc3NMaXN0ZW5lcjogU3luY1Byb2dyZXNzTGlzdGVuZXIgPSBfc3luY1Byb2dyZXNzID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coX3N5bmNQcm9ncmVzcyk7XG4gICAgICAgIHN5bmNQcm9ncmVzcyA9IF9zeW5jUHJvZ3Jlc3M7XG4gICAgfTtcblxuICAgIGxldCBzeW5jUXVldWU6IFN5bmNRdWV1ZTtcblxuICAgIGJlZm9yZUVhY2goZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgYWJvcnRhYmxlID0ge1xuICAgICAgICAgICAgYWJvcnRlZDogZmFsc2VcbiAgICAgICAgfTtcblxuICAgICAgICBzeW5jUXVldWUgPSBuZXcgU3luY1F1ZXVlKGFib3J0YWJsZSwgc3luY1Byb2dyZXNzTGlzdGVuZXIpO1xuXG4gICAgICAgIGRlY2tzU3luYyA9IG5ldyBEZWNrc1N5bmMoc3luY1F1ZXVlKTtcblxuICAgICAgICBkZWNrc1N5bmMuY3JlYXRlRGVja0NsaWVudCA9IENyZWF0ZURlY2tDbGllbnQuY3JlYXRlTW9jaygxKTtcbiAgICAgICAgZGVja3NTeW5jLmRlY2tOYW1lc0FuZElkc0NsaWVudCA9IERlY2tOYW1lc0FuZElkc0NsaWVudC5jcmVhdGVNb2NrKHt9KTtcblxuICAgIH0pO1xuXG4gICAgaXQoXCJiYXNpYyBzeW5jXCIsIGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGNvbnN0IGRlY2tEZXNjcmlwdG9yczogRGVja0Rlc2NyaXB0b3JbXSA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlRlc3QgRGVja1wiXG4gICAgICAgICAgICB9XG4gICAgICAgIF07XG5cbiAgICAgICAgY29uc3QgY3JlYXRlZERlc2NyaXB0b3JzID0gZGVja3NTeW5jLmVucXVldWUoZGVja0Rlc2NyaXB0b3JzKTtcblxuICAgICAgICBhd2FpdCBzeW5jUXVldWUuZXhlY3V0ZSgpO1xuXG4gICAgICAgIGFzc2VydEpTT04oY3JlYXRlZERlc2NyaXB0b3JzLCBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiVGVzdCBEZWNrXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSk7XG5cbiAgICAgICAgYXNzZXJ0SlNPTihzeW5jUHJvZ3Jlc3MsIHtcbiAgICAgICAgICAgIFwicGVyY2VudGFnZVwiOiAxMDAsXG4gICAgICAgICAgICBcInN0YXRlXCI6IFwiQ09NUExFVEVEXCIsXG4gICAgICAgICAgICBcInRhc2tSZXN1bHRcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjoge1xuICAgICAgICAgICAgICAgICAgICBcIm1lc3NhZ2VcIjogXCJDcmVhdGluZyBtaXNzaW5nIGRlY2s6IFRlc3QgRGVja1wiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgIH0pO1xuXG59KTtcbiJdfQ==