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
const chai_1 = require("chai");
const Assertions_1 = require("../test/Assertions");
const Files_1 = require("polar-shared/src/util/Files");
const ResourceFactory_1 = require("polar-content-capture/src/phz/ResourceFactory");
const CachingPHZReader_1 = require("./CachingPHZReader");
const TestingTime_1 = require("polar-shared/src/test/TestingTime");
const Time_1 = require("../util/Time");
const Dictionaries_1 = require("polar-shared/src/util/Dictionaries");
const FilePaths_1 = require("polar-shared/src/util/FilePaths");
const PHZWriter_1 = require("polar-content-capture/src/phz/PHZWriter");
TestingTime_1.TestingTime.freeze();
describe('CachingPHZReader', function () {
    let path = FilePaths_1.FilePaths.tmpfile("test.phz");
    function assertPHZReader(phzReader) {
        return __awaiter(this, void 0, void 0, function* () {
            let resources = yield phzReader.getResources();
            let expected = {
                "entries": {
                    "1XKZEWhTwbtoPFSkR2TJ": {
                        "id": "1XKZEWhTwbtoPFSkR2TJ",
                        "path": "1XKZEWhTwbtoPFSkR2TJ.html",
                        "resource": {
                            "id": "1XKZEWhTwbtoPFSkR2TJ",
                            "created": "2012-03-02T11:38:49.321Z",
                            "meta": {},
                            "url": "http://example.com",
                            "contentType": "text/html",
                            "mimeType": "text/html",
                            "encoding": "UTF-8",
                            "method": "GET",
                            "statusCode": 200,
                            "headers": {},
                        }
                    }
                }
            };
            Assertions_1.assertJSON(Dictionaries_1.Dictionaries.sorted(resources), Dictionaries_1.Dictionaries.sorted(expected));
            let resourceEntry = resources.entries["1XKZEWhTwbtoPFSkR2TJ"];
            let buffer = yield phzReader.getResource(resourceEntry);
            let content = buffer.toString("UTF-8");
            chai_1.assert.equal(content, "<html></html>");
            let metadata = yield phzReader.getMetadata();
            expected = {
                "title": "this is the title"
            };
            Assertions_1.assertJSON(Dictionaries_1.Dictionaries.sorted(metadata), Dictionaries_1.Dictionaries.sorted(expected));
        });
    }
    beforeEach(function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield Files_1.Files.removeAsync(path);
            let phzWriter = new PHZWriter_1.PHZWriter(path);
            let resource = ResourceFactory_1.ResourceFactory.create("http://example.com", "text/html");
            yield phzWriter.writeMetadata({
                title: "this is the title"
            });
            yield phzWriter.writeResource(resource, "<html></html>");
            yield phzWriter.close();
        });
    });
    it("Reading from a new caching reader (not closed)", function () {
        return __awaiter(this, void 0, void 0, function* () {
            let phzReader = new CachingPHZReader_1.CachingPHZReader(path);
            yield phzReader.init();
            yield assertPHZReader(phzReader);
        });
    });
    it("Reading from a new caching reader (closed)", function () {
        return __awaiter(this, void 0, void 0, function* () {
            let phzReader = new CachingPHZReader_1.CachingPHZReader(path, 1);
            yield phzReader.init();
            yield Time_1.Time.sleep(100);
            yield assertPHZReader(phzReader);
            chai_1.assert.equal(phzReader.reopened > 0, true);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FjaGluZ1BIWlJlYWRlclRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJDYWNoaW5nUEhaUmVhZGVyVGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLCtCQUE0QjtBQUU1QixtREFBOEM7QUFDOUMsdURBQWtEO0FBQ2xELG1GQUE4RTtBQUM5RSx5REFBb0Q7QUFDcEQsbUVBQThEO0FBQzlELHVDQUFrQztBQUNsQyxxRUFBZ0U7QUFDaEUsK0RBQTBEO0FBQzFELHVFQUFrRTtBQUVsRSx5QkFBVyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRXJCLFFBQVEsQ0FBQyxrQkFBa0IsRUFBRTtJQUV6QixJQUFJLElBQUksR0FBRyxxQkFBUyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUV6QyxTQUFlLGVBQWUsQ0FBQyxTQUEyQjs7WUFFdEQsSUFBSSxTQUFTLEdBQUcsTUFBTSxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7WUFFL0MsSUFBSSxRQUFRLEdBQVE7Z0JBQ2hCLFNBQVMsRUFBRTtvQkFDUCxzQkFBc0IsRUFBRTt3QkFDcEIsSUFBSSxFQUFFLHNCQUFzQjt3QkFDNUIsTUFBTSxFQUFFLDJCQUEyQjt3QkFDbkMsVUFBVSxFQUFFOzRCQUNSLElBQUksRUFBRSxzQkFBc0I7NEJBQzVCLFNBQVMsRUFBRSwwQkFBMEI7NEJBQ3JDLE1BQU0sRUFBRSxFQUFFOzRCQUNWLEtBQUssRUFBRSxvQkFBb0I7NEJBQzNCLGFBQWEsRUFBRSxXQUFXOzRCQUMxQixVQUFVLEVBQUUsV0FBVzs0QkFDdkIsVUFBVSxFQUFFLE9BQU87NEJBQ25CLFFBQVEsRUFBRSxLQUFLOzRCQUNmLFlBQVksRUFBRSxHQUFHOzRCQUNqQixTQUFTLEVBQUUsRUFBRTt5QkFDaEI7cUJBQ0o7aUJBQ0o7YUFDSixDQUFDO1lBRUYsdUJBQVUsQ0FBQywyQkFBWSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRSwyQkFBWSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBRTFFLElBQUksYUFBYSxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsc0JBQXNCLENBQUMsQ0FBQztZQUU5RCxJQUFJLE1BQU0sR0FBRyxNQUFNLFNBQVMsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7WUFFeEQsSUFBSSxPQUFPLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUV2QyxhQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxlQUFlLENBQUMsQ0FBQztZQUl2QyxJQUFJLFFBQVEsR0FBRyxNQUFNLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUU3QyxRQUFRLEdBQUc7Z0JBQ1AsT0FBTyxFQUFFLG1CQUFtQjthQUMvQixDQUFDO1lBRUYsdUJBQVUsQ0FBQywyQkFBWSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRSwyQkFBWSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBRzdFLENBQUM7S0FBQTtJQUVELFVBQVUsQ0FBQzs7WUFFUCxNQUFNLGFBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFOUIsSUFBSSxTQUFTLEdBQUcsSUFBSSxxQkFBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3BDLElBQUksUUFBUSxHQUFHLGlDQUFlLENBQUMsTUFBTSxDQUFDLG9CQUFvQixFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBRXpFLE1BQU0sU0FBUyxDQUFDLGFBQWEsQ0FBQztnQkFDMUIsS0FBSyxFQUFFLG1CQUFtQjthQUM3QixDQUFDLENBQUM7WUFFSCxNQUFNLFNBQVMsQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLGVBQWUsQ0FBQyxDQUFDO1lBQ3pELE1BQU0sU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRTVCLENBQUM7S0FBQSxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsZ0RBQWdELEVBQUU7O1lBRWpELElBQUksU0FBUyxHQUFHLElBQUksbUNBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDM0MsTUFBTSxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7WUFFdkIsTUFBTSxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFckMsQ0FBQztLQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyw0Q0FBNEMsRUFBRTs7WUFFN0MsSUFBSSxTQUFTLEdBQUcsSUFBSSxtQ0FBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDOUMsTUFBTSxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7WUFHdkIsTUFBTSxXQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRXRCLE1BQU0sZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBRWpDLGFBQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFL0MsQ0FBQztLQUFBLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthc3NlcnR9IGZyb20gJ2NoYWknO1xuXG5pbXBvcnQge2Fzc2VydEpTT059IGZyb20gJy4uL3Rlc3QvQXNzZXJ0aW9ucyc7XG5pbXBvcnQge0ZpbGVzfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvRmlsZXMnO1xuaW1wb3J0IHtSZXNvdXJjZUZhY3Rvcnl9IGZyb20gJ3BvbGFyLWNvbnRlbnQtY2FwdHVyZS9zcmMvcGh6L1Jlc291cmNlRmFjdG9yeSc7XG5pbXBvcnQge0NhY2hpbmdQSFpSZWFkZXJ9IGZyb20gJy4vQ2FjaGluZ1BIWlJlYWRlcic7XG5pbXBvcnQge1Rlc3RpbmdUaW1lfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3Rlc3QvVGVzdGluZ1RpbWUnO1xuaW1wb3J0IHtUaW1lfSBmcm9tICcuLi91dGlsL1RpbWUnO1xuaW1wb3J0IHtEaWN0aW9uYXJpZXN9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC9EaWN0aW9uYXJpZXMnO1xuaW1wb3J0IHtGaWxlUGF0aHN9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC9GaWxlUGF0aHMnO1xuaW1wb3J0IHtQSFpXcml0ZXJ9IGZyb20gXCJwb2xhci1jb250ZW50LWNhcHR1cmUvc3JjL3Boei9QSFpXcml0ZXJcIjtcblxuVGVzdGluZ1RpbWUuZnJlZXplKCk7XG5cbmRlc2NyaWJlKCdDYWNoaW5nUEhaUmVhZGVyJywgZnVuY3Rpb24oKSB7XG5cbiAgICBsZXQgcGF0aCA9IEZpbGVQYXRocy50bXBmaWxlKFwidGVzdC5waHpcIik7XG5cbiAgICBhc3luYyBmdW5jdGlvbiBhc3NlcnRQSFpSZWFkZXIocGh6UmVhZGVyOiBDYWNoaW5nUEhaUmVhZGVyKSB7XG5cbiAgICAgICAgbGV0IHJlc291cmNlcyA9IGF3YWl0IHBoelJlYWRlci5nZXRSZXNvdXJjZXMoKTtcblxuICAgICAgICBsZXQgZXhwZWN0ZWQ6IGFueSA9IHtcbiAgICAgICAgICAgIFwiZW50cmllc1wiOiB7XG4gICAgICAgICAgICAgICAgXCIxWEtaRVdoVHdidG9QRlNrUjJUSlwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCIxWEtaRVdoVHdidG9QRlNrUjJUSlwiLFxuICAgICAgICAgICAgICAgICAgICBcInBhdGhcIjogXCIxWEtaRVdoVHdidG9QRlNrUjJUSi5odG1sXCIsXG4gICAgICAgICAgICAgICAgICAgIFwicmVzb3VyY2VcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcIjFYS1pFV2hUd2J0b1BGU2tSMlRKXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNyZWF0ZWRcIjogXCIyMDEyLTAzLTAyVDExOjM4OjQ5LjMyMVpcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibWV0YVwiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cDovL2V4YW1wbGUuY29tXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbnRlbnRUeXBlXCI6IFwidGV4dC9odG1sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm1pbWVUeXBlXCI6IFwidGV4dC9odG1sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImVuY29kaW5nXCI6IFwiVVRGLThcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibWV0aG9kXCI6IFwiR0VUXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInN0YXR1c0NvZGVcIjogMjAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJoZWFkZXJzXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGFzc2VydEpTT04oRGljdGlvbmFyaWVzLnNvcnRlZChyZXNvdXJjZXMpLCBEaWN0aW9uYXJpZXMuc29ydGVkKGV4cGVjdGVkKSk7XG5cbiAgICAgICAgbGV0IHJlc291cmNlRW50cnkgPSByZXNvdXJjZXMuZW50cmllc1tcIjFYS1pFV2hUd2J0b1BGU2tSMlRKXCJdO1xuXG4gICAgICAgIGxldCBidWZmZXIgPSBhd2FpdCBwaHpSZWFkZXIuZ2V0UmVzb3VyY2UocmVzb3VyY2VFbnRyeSk7XG5cbiAgICAgICAgbGV0IGNvbnRlbnQgPSBidWZmZXIudG9TdHJpbmcoXCJVVEYtOFwiKTtcblxuICAgICAgICBhc3NlcnQuZXF1YWwoY29udGVudCwgXCI8aHRtbD48L2h0bWw+XCIpO1xuXG4gICAgICAgIC8vIHRlc3QgZ2V0dGluZyB0aGUgbWV0YWRhdGEgKHdoZW4gdGhlcmUgaXNuJ3QgYW55KVxuXG4gICAgICAgIGxldCBtZXRhZGF0YSA9IGF3YWl0IHBoelJlYWRlci5nZXRNZXRhZGF0YSgpO1xuXG4gICAgICAgIGV4cGVjdGVkID0ge1xuICAgICAgICAgICAgXCJ0aXRsZVwiOiBcInRoaXMgaXMgdGhlIHRpdGxlXCJcbiAgICAgICAgfTtcblxuICAgICAgICBhc3NlcnRKU09OKERpY3Rpb25hcmllcy5zb3J0ZWQobWV0YWRhdGEpLCBEaWN0aW9uYXJpZXMuc29ydGVkKGV4cGVjdGVkKSk7XG5cblxuICAgIH1cblxuICAgIGJlZm9yZUVhY2goYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgYXdhaXQgRmlsZXMucmVtb3ZlQXN5bmMocGF0aCk7XG5cbiAgICAgICAgbGV0IHBoeldyaXRlciA9IG5ldyBQSFpXcml0ZXIocGF0aCk7XG4gICAgICAgIGxldCByZXNvdXJjZSA9IFJlc291cmNlRmFjdG9yeS5jcmVhdGUoXCJodHRwOi8vZXhhbXBsZS5jb21cIiwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgICAgICAgYXdhaXQgcGh6V3JpdGVyLndyaXRlTWV0YWRhdGEoe1xuICAgICAgICAgICAgdGl0bGU6IFwidGhpcyBpcyB0aGUgdGl0bGVcIlxuICAgICAgICB9KTtcblxuICAgICAgICBhd2FpdCBwaHpXcml0ZXIud3JpdGVSZXNvdXJjZShyZXNvdXJjZSwgXCI8aHRtbD48L2h0bWw+XCIpO1xuICAgICAgICBhd2FpdCBwaHpXcml0ZXIuY2xvc2UoKTtcblxuICAgIH0pO1xuXG4gICAgaXQoXCJSZWFkaW5nIGZyb20gYSBuZXcgY2FjaGluZyByZWFkZXIgKG5vdCBjbG9zZWQpXCIsIGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGxldCBwaHpSZWFkZXIgPSBuZXcgQ2FjaGluZ1BIWlJlYWRlcihwYXRoKTtcbiAgICAgICAgYXdhaXQgcGh6UmVhZGVyLmluaXQoKTtcblxuICAgICAgICBhd2FpdCBhc3NlcnRQSFpSZWFkZXIocGh6UmVhZGVyKTtcblxuICAgIH0pO1xuXG4gICAgaXQoXCJSZWFkaW5nIGZyb20gYSBuZXcgY2FjaGluZyByZWFkZXIgKGNsb3NlZClcIiwgYXN5bmMgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGxldCBwaHpSZWFkZXIgPSBuZXcgQ2FjaGluZ1BIWlJlYWRlcihwYXRoLCAxKTtcbiAgICAgICAgYXdhaXQgcGh6UmVhZGVyLmluaXQoKTtcblxuICAgICAgICAvLyB3ZSB0b2xkIHRoZSByZWFkZXIgdG8gb25seSB3YWl0IGZvciAxbXMgLi4uXG4gICAgICAgIGF3YWl0IFRpbWUuc2xlZXAoMTAwKTtcblxuICAgICAgICBhd2FpdCBhc3NlcnRQSFpSZWFkZXIocGh6UmVhZGVyKTtcblxuICAgICAgICBhc3NlcnQuZXF1YWwocGh6UmVhZGVyLnJlb3BlbmVkID4gMCwgdHJ1ZSk7XG5cbiAgICB9KTtcblxufSk7XG5cbiJdfQ==