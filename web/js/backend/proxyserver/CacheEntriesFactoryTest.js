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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const os_1 = __importDefault(require("os"));
const chai_1 = require("chai");
const TestingTime_1 = require("polar-shared/src/test/TestingTime");
const CacheEntriesFactory_1 = require("./CacheEntriesFactory");
const Assertions_1 = require("../../test/Assertions");
const MockCapturedContent_1 = require("polar-content-capture/src/phz/MockCapturedContent");
const CapturedPHZWriter_1 = require("polar-content-capture/src/phz/CapturedPHZWriter");
const Dictionaries_1 = require("polar-shared/src/util/Dictionaries");
const FilePaths_1 = require("polar-shared/src/util/FilePaths");
const Files_1 = require("polar-shared/src/util/Files");
const PHZWriter_1 = require("polar-content-capture/src/phz/PHZWriter");
const tmpdir = os_1.default.tmpdir();
TestingTime_1.TestingTime.freeze();
describe('CacheEntriesFactory', function () {
    describe('Load CHTML', function () {
        const path = FilePaths_1.FilePaths.tmpfile("test-load.chtml");
        beforeEach(function (done) {
            TestingTime_1.TestingTime.freeze();
            const data = {
                "href": "https://jakearchibald.com/2016/streams-ftw/",
                "mutations": {
                    "baseAdded": true,
                    "eventAttributesRemoved": 0,
                    "existingBaseRemoved": false,
                    "javascriptAnchorsRemoved": 0,
                    "scriptsRemoved": 11,
                    "showAriaHidden": 5
                },
                "scrollHeight": 16830,
                "title": "2016 - the year of web streams - JakeArchibald.com",
                "url": "https://jakearchibald.com/2016/streams-ftw/"
            };
            fs_1.default.writeFileSync(FilePaths_1.FilePaths.join(tmpdir, "test-load.json"), JSON.stringify(data, null, "  "));
            fs_1.default.writeFileSync(FilePaths_1.FilePaths.join(tmpdir, "test-load.chtml"), "<html></html>");
            done();
        });
        it("createFromCHTML", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const cacheEntriesHolder = yield CacheEntriesFactory_1.CacheEntriesFactory.createFromCHTML(path);
                const expected = {
                    "cacheEntries": {
                        "url": {
                            "method": "GET",
                            "url": "http://jakearchibald.com/2016/streams-ftw/",
                            "headers": {
                                "Content-Type": "text/html"
                            },
                            "statusCode": 200,
                            "statusMessage": "OK",
                            "contentType": "text/html",
                            "mimeType": "text/html",
                            "encoding": "UTF-8",
                            "path": FilePaths_1.FilePaths.join(tmpdir, "test-load.chtml")
                        }
                    },
                    "metadata": {
                        "url": "http://jakearchibald.com/2016/streams-ftw/"
                    }
                };
                Assertions_1.assertJSON(Dictionaries_1.Dictionaries.sorted(cacheEntriesHolder), Dictionaries_1.Dictionaries.sorted(expected));
                chai_1.assert.equal(cacheEntriesHolder.metadata.url, "http://jakearchibald.com/2016/streams-ftw/");
            });
        });
        it("createEntriesFromFile", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const cacheEntriesHolder = yield CacheEntriesFactory_1.CacheEntriesFactory.createEntriesFromFile(path);
                const expected = {
                    "cacheEntries": {
                        "url": {
                            "method": "GET",
                            "url": "http://jakearchibald.com/2016/streams-ftw/",
                            "headers": {
                                "Content-Type": "text/html"
                            },
                            "statusCode": 200,
                            "statusMessage": "OK",
                            "contentType": "text/html",
                            "mimeType": "text/html",
                            "encoding": "UTF-8",
                            "path": FilePaths_1.FilePaths.join(tmpdir, "test-load.chtml")
                        }
                    },
                    "metadata": {
                        "url": "http://jakearchibald.com/2016/streams-ftw/"
                    }
                };
                Assertions_1.assertJSON(Dictionaries_1.Dictionaries.sorted(cacheEntriesHolder), Dictionaries_1.Dictionaries.sorted(expected));
            });
        });
    });
    describe('Load PHZ', function () {
        it("createFromPHZ", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const captured = MockCapturedContent_1.MockCapturedContent.create();
                const path = FilePaths_1.FilePaths.tmpfile("cached-entries-factory.phz");
                const output = new PHZWriter_1.PHZWriter(path);
                const capturedPHZWriter = new CapturedPHZWriter_1.CapturedPHZWriter(output);
                yield capturedPHZWriter.convert(captured);
                chai_1.assert.ok(yield Files_1.Files.existsAsync(path));
                const cacheEntriesHolder = yield CacheEntriesFactory_1.CacheEntriesFactory.createFromPHZ(path);
                Assertions_1.assertJSON(cacheEntriesHolder.metadata, {
                    "title": "Unit testing node applications with TypeScript — using mocha and chai",
                    "type": "phz",
                    "url": "https://journal.artfuldev.com/unit-testing-node-applications-with-typescript-using-mocha-and-chai-384ef05f32b2",
                    "version": "3.0.0",
                    "browser": {
                        "inactive": false,
                        "type": "phone",
                        "title": "MOBILE_GALAXY_S8_WITH_CHROME_61_WIDTH_750",
                        "name": "MOBILE_GALAXY_S8_WITH_CHROME_61_WIDTH_750",
                        "description": "Galaxy S8 mobile device running Chrome 61 but with width at 750",
                        "userAgent": "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Mobile Safari/537.36",
                        "deviceEmulation": {
                            "screenPosition": "mobile",
                            "screenSize": {
                                "width": 750,
                                "height": 970
                            },
                            "viewSize": {
                                "width": 750,
                                "height": 970
                            }
                        }
                    }
                });
                let expected = [
                    "https://journal.artfuldev.com/media/076fa5fbed4eb57c0501fa4cbf5855b3?postId=384ef05f32b2",
                    "https://journal.artfuldev.com/media/1332267fe1665fafdc8c0d9f8c8d5d98?postId=384ef05f32b2",
                    "https://journal.artfuldev.com/media/264d5a80d834f9976dbec6e2fd721062?postId=384ef05f32b2",
                    "https://journal.artfuldev.com/media/3250d51ccec4df3da4f3447892218065?postId=384ef05f32b2",
                    "https://journal.artfuldev.com/media/3bae3235c7b64d8e09ceda4168c033e3?postId=384ef05f32b2",
                    "https://journal.artfuldev.com/media/46f0f788c01c4b194cefde2d9ec41eaf?postId=384ef05f32b2",
                    "https://journal.artfuldev.com/media/48a721a0e2b65d851322f94f6bd4d020?postId=384ef05f32b2",
                    "https://journal.artfuldev.com/media/492bacc690c54aa549a96b849fa572ed?postId=384ef05f32b2",
                    "https://journal.artfuldev.com/media/5704b996be3ebc61c4f6788571c2e2ca?postId=384ef05f32b2",
                    "https://journal.artfuldev.com/media/70620a582825b3f69261a46fda6f1a8f?postId=384ef05f32b2",
                    "https://journal.artfuldev.com/media/8d779a252338df599e9ee821cd24e492?postId=384ef05f32b2",
                    "https://journal.artfuldev.com/media/af8d9ace95e6e79747acd19e5e659169?postId=384ef05f32b2",
                    "https://journal.artfuldev.com/media/cfc3fc50133fc06fb8cee86ac2292ea1?postId=384ef05f32b2",
                    "https://journal.artfuldev.com/media/dac0a6422059288f196c2a0dd83d4f1e?postId=384ef05f32b2",
                    "https://journal.artfuldev.com/unit-testing-node-applications-with-typescript-using-mocha-and-chai-384ef05f32b2"
                ];
                Assertions_1.assertJSON(Object.keys(cacheEntriesHolder.cacheEntries), expected);
                expected = {
                    "method": "GET",
                    "url": "https://journal.artfuldev.com/unit-testing-node-applications-with-typescript-using-mocha-and-chai-384ef05f32b2",
                    "headers": {},
                    "statusCode": 200,
                    "statusMessage": "OK",
                    "contentType": "text/html",
                    "mimeType": "UTF-8",
                    "encoding": "UTF-8",
                    "resourceEntry": {
                        "id": "1nQrNQ9ToKkRc3VtpCrD",
                        "path": "1nQrNQ9ToKkRc3VtpCrD.html",
                        "resource": {
                            "id": "1nQrNQ9ToKkRc3VtpCrD",
                            "created": "2012-03-02T11:38:49.321Z",
                            "meta": {},
                            "url": "https://journal.artfuldev.com/unit-testing-node-applications-with-typescript-using-mocha-and-chai-384ef05f32b2",
                            "contentType": "text/html",
                            "mimeType": "text/html",
                            "encoding": "UTF-8",
                            "method": "GET",
                            "statusCode": 200,
                            "headers": {},
                            "title": "Unit testing node applications with TypeScript — using mocha and chai",
                        }
                    }
                };
                Assertions_1.assertJSON(Dictionaries_1.Dictionaries.sorted(cacheEntriesHolder.cacheEntries["https://journal.artfuldev.com/unit-testing-node-applications-with-typescript-using-mocha-and-chai-384ef05f32b2"]), Dictionaries_1.Dictionaries.sorted(expected));
                expected = {
                    "method": "GET",
                    "url": "https://journal.artfuldev.com/media/46f0f788c01c4b194cefde2d9ec41eaf?postId=384ef05f32b2",
                    "headers": {},
                    "statusCode": 200,
                    "statusMessage": "OK",
                    "contentType": "text/html",
                    "mimeType": "UTF-8",
                    "encoding": "UTF-8",
                    "resourceEntry": {
                        "id": "12jxKhQbE2wiaw8CK46d",
                        "path": "12jxKhQbE2wiaw8CK46d.html",
                        "resource": {
                            "id": "12jxKhQbE2wiaw8CK46d",
                            "created": "2012-03-02T11:38:49.321Z",
                            "meta": {},
                            "url": "https://journal.artfuldev.com/media/46f0f788c01c4b194cefde2d9ec41eaf?postId=384ef05f32b2",
                            "contentType": "text/html",
                            "mimeType": "text/html",
                            "encoding": "UTF-8",
                            "method": "GET",
                            "statusCode": 200,
                            "headers": {},
                            "title": "install-mocha-chai-ts.sh – Medium",
                        }
                    }
                };
                Assertions_1.assertJSON(Dictionaries_1.Dictionaries.sorted(cacheEntriesHolder.cacheEntries["https://journal.artfuldev.com/media/46f0f788c01c4b194cefde2d9ec41eaf?postId=384ef05f32b2"]), Dictionaries_1.Dictionaries.sorted(expected));
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FjaGVFbnRyaWVzRmFjdG9yeVRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJDYWNoZUVudHJpZXNGYWN0b3J5VGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLDRDQUFvQjtBQUNwQiw0Q0FBb0I7QUFDcEIsK0JBQTRCO0FBQzVCLG1FQUE4RDtBQUM5RCwrREFBMEQ7QUFDMUQsc0RBQWlEO0FBQ2pELDJGQUFzRjtBQUN0Rix1RkFBa0Y7QUFDbEYscUVBQWdFO0FBQ2hFLCtEQUEwRDtBQUMxRCx1REFBa0Q7QUFDbEQsdUVBQWtFO0FBRWxFLE1BQU0sTUFBTSxHQUFHLFlBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUMzQix5QkFBVyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRXJCLFFBQVEsQ0FBQyxxQkFBcUIsRUFBRTtJQUU1QixRQUFRLENBQUMsWUFBWSxFQUFFO1FBRW5CLE1BQU0sSUFBSSxHQUFHLHFCQUFTLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFFbEQsVUFBVSxDQUFDLFVBQVMsSUFBSTtZQUVwQix5QkFBVyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBRXJCLE1BQU0sSUFBSSxHQUFHO2dCQUNULE1BQU0sRUFBRSw2Q0FBNkM7Z0JBQ3JELFdBQVcsRUFBRTtvQkFDVCxXQUFXLEVBQUUsSUFBSTtvQkFDakIsd0JBQXdCLEVBQUUsQ0FBQztvQkFDM0IscUJBQXFCLEVBQUUsS0FBSztvQkFDNUIsMEJBQTBCLEVBQUUsQ0FBQztvQkFDN0IsZ0JBQWdCLEVBQUUsRUFBRTtvQkFDcEIsZ0JBQWdCLEVBQUUsQ0FBQztpQkFDdEI7Z0JBQ0QsY0FBYyxFQUFFLEtBQUs7Z0JBQ3JCLE9BQU8sRUFBRSxvREFBb0Q7Z0JBQzdELEtBQUssRUFBRSw2Q0FBNkM7YUFDdkQsQ0FBQztZQUVGLFlBQUUsQ0FBQyxhQUFhLENBQUMscUJBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLGdCQUFnQixD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bkIsVUFBVSxFQUFFLE9BQU87b0JBQ25CLGVBQWUsRUFBRTt3QkFDYixJQUFJLEVBQUUsc0JBQXNCO3dCQUM1QixNQUFNLEVBQUUsMkJBQTJCO3dCQUNuQyxVQUFVLEVBQUU7NEJBQ1IsSUFBSSxFQUFFLHNCQUFzQjs0QkFDNUIsU0FBUyxFQUFFLDBCQUEwQjs0QkFDckMsTUFBTSxFQUFFLEVBQUU7NEJBQ1YsS0FBSyxFQUFFLDBGQUEwRjs0QkFDakcsYUFBYSxFQUFFLFdBQVc7NEJBQzFCLFVBQVUsRUFBRSxXQUFXOzRCQUN2QixVQUFVLEVBQUUsT0FBTzs0QkFDbkIsUUFBUSxFQUFFLEtBQUs7NEJBQ2YsWUFBWSxFQUFFLEdBQUc7NEJBQ2pCLFNBQVMsRUFBRSxFQUFFOzRCQUNiLE9BQU8sRUFBRSxtQ0FBbUM7eUJBQy9DO3FCQUNKO2lCQUNKLENBQUM7Z0JBRUYsdUJBQVUsQ0FBQywyQkFBWSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsMEZBQTBGLENBQUMsQ0FBQyxFQUNoSiwyQkFBWSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBRTlDLENBQUM7U0FBQSxDQUFDLENBQUM7SUFFUCxDQUFDLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzIGZyb20gJ2ZzJztcbmltcG9ydCBvcyBmcm9tICdvcyc7XG5pbXBvcnQge2Fzc2VydH0gZnJvbSAnY2hhaSc7XG5pbXBvcnQge1Rlc3RpbmdUaW1lfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3Rlc3QvVGVzdGluZ1RpbWUnO1xuaW1wb3J0IHtDYWNoZUVudHJpZXNGYWN0b3J5fSBmcm9tICcuL0NhY2hlRW50cmllc0ZhY3RvcnknO1xuaW1wb3J0IHthc3NlcnRKU09OfSBmcm9tICcuLi8uLi90ZXN0L0Fzc2VydGlvbnMnO1xuaW1wb3J0IHtNb2NrQ2FwdHVyZWRDb250ZW50fSBmcm9tICdwb2xhci1jb250ZW50LWNhcHR1cmUvc3JjL3Boei9Nb2NrQ2FwdHVyZWRDb250ZW50JztcbmltcG9ydCB7Q2FwdHVyZWRQSFpXcml0ZXJ9IGZyb20gJ3BvbGFyLWNvbnRlbnQtY2FwdHVyZS9zcmMvcGh6L0NhcHR1cmVkUEhaV3JpdGVyJztcbmltcG9ydCB7RGljdGlvbmFyaWVzfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvRGljdGlvbmFyaWVzJztcbmltcG9ydCB7RmlsZVBhdGhzfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvRmlsZVBhdGhzJztcbmltcG9ydCB7RmlsZXN9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC9GaWxlcyc7XG5pbXBvcnQge1BIWldyaXRlcn0gZnJvbSBcInBvbGFyLWNvbnRlbnQtY2FwdHVyZS9zcmMvcGh6L1BIWldyaXRlclwiO1xuXG5jb25zdCB0bXBkaXIgPSBvcy50bXBkaXIoKTtcblRlc3RpbmdUaW1lLmZyZWV6ZSgpO1xuXG5kZXNjcmliZSgnQ2FjaGVFbnRyaWVzRmFjdG9yeScsIGZ1bmN0aW9uKCkge1xuXG4gICAgZGVzY3JpYmUoJ0xvYWQgQ0hUTUwnLCBmdW5jdGlvbigpIHtcblxuICAgICAgICBjb25zdCBwYXRoID0gRmlsZVBhdGhzLnRtcGZpbGUoXCJ0ZXN0LWxvYWQuY2h0bWxcIik7XG5cbiAgICAgICAgYmVmb3JlRWFjaChmdW5jdGlvbihkb25lKSB7XG5cbiAgICAgICAgICAgIFRlc3RpbmdUaW1lLmZyZWV6ZSgpO1xuXG4gICAgICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vamFrZWFyY2hpYmFsZC5jb20vMjAxNi9zdHJlYW1zLWZ0dy9cIixcbiAgICAgICAgICAgICAgICBcIm11dGF0aW9uc1wiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiYmFzZUFkZGVkXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIFwiZXZlbnRBdHRyaWJ1dGVzUmVtb3ZlZFwiOiAwLFxuICAgICAgICAgICAgICAgICAgICBcImV4aXN0aW5nQmFzZVJlbW92ZWRcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIFwiamF2YXNjcmlwdEFuY2hvcnNSZW1vdmVkXCI6IDAsXG4gICAgICAgICAgICAgICAgICAgIFwic2NyaXB0c1JlbW92ZWRcIjogMTEsXG4gICAgICAgICAgICAgICAgICAgIFwic2hvd0FyaWFIaWRkZW5cIjogNVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJzY3JvbGxIZWlnaHRcIjogMTY4MzAsXG4gICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIjIwMTYgLSB0aGUgeWVhciBvZiB3ZWIgc3RyZWFtcyAtIEpha2VBcmNoaWJhbGQuY29tXCIsXG4gICAgICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL2pha2VhcmNoaWJhbGQuY29tLzIwMTYvc3RyZWFtcy1mdHcvXCJcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGZzLndyaXRlRmlsZVN5bmMoRmlsZVBhdGhzLmpvaW4odG1wZGlyLCBcInRlc3QtbG9hZC5qc29uXCIpLCBKU09OLnN0cmluZ2lmeShkYXRhLCBudWxsLCBcIiAgXCIpKTtcblxuICAgICAgICAgICAgZnMud3JpdGVGaWxlU3luYyhGaWxlUGF0aHMuam9pbih0bXBkaXIsIFwidGVzdC1sb2FkLmNodG1sXCIpLCBcIjxodG1sPjwvaHRtbD5cIik7XG5cbiAgICAgICAgICAgIGRvbmUoKTtcblxuICAgICAgICB9KTtcblxuICAgICAgICBpdChcImNyZWF0ZUZyb21DSFRNTFwiLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgY29uc3QgY2FjaGVFbnRyaWVzSG9sZGVyID0gYXdhaXQgQ2FjaGVFbnRyaWVzRmFjdG9yeS5jcmVhdGVGcm9tQ0hUTUwocGF0aCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGV4cGVjdGVkID0ge1xuICAgICAgICAgICAgICAgIFwiY2FjaGVFbnRyaWVzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ1cmxcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJtZXRob2RcIjogXCJHRVRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cDovL2pha2VhcmNoaWJhbGQuY29tLzIwMTYvc3RyZWFtcy1mdHcvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImhlYWRlcnNcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwidGV4dC9odG1sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcInN0YXR1c0NvZGVcIjogMjAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzdGF0dXNNZXNzYWdlXCI6IFwiT0tcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29udGVudFR5cGVcIjogXCJ0ZXh0L2h0bWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibWltZVR5cGVcIjogXCJ0ZXh0L2h0bWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZW5jb2RpbmdcIjogXCJVVEYtOFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwYXRoXCI6IEZpbGVQYXRocy5qb2luKHRtcGRpciwgXCJ0ZXN0LWxvYWQuY2h0bWxcIilcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJtZXRhZGF0YVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cDovL2pha2VhcmNoaWJhbGQuY29tLzIwMTYvc3RyZWFtcy1mdHcvXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBhc3NlcnRKU09OKERpY3Rpb25hcmllcy5zb3J0ZWQoY2FjaGVFbnRyaWVzSG9sZGVyKSwgRGljdGlvbmFyaWVzLnNvcnRlZChleHBlY3RlZCkpO1xuXG4gICAgICAgICAgICBhc3NlcnQuZXF1YWwoY2FjaGVFbnRyaWVzSG9sZGVyLm1ldGFkYXRhLnVybCwgXCJodHRwOi8vamFrZWFyY2hpYmFsZC5jb20vMjAxNi9zdHJlYW1zLWZ0dy9cIik7XG5cbiAgICAgICAgfSk7XG5cblxuICAgICAgICBpdChcImNyZWF0ZUVudHJpZXNGcm9tRmlsZVwiLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgY29uc3QgY2FjaGVFbnRyaWVzSG9sZGVyID0gYXdhaXQgQ2FjaGVFbnRyaWVzRmFjdG9yeS5jcmVhdGVFbnRyaWVzRnJvbUZpbGUocGF0aCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGV4cGVjdGVkID0ge1xuICAgICAgICAgICAgICAgIFwiY2FjaGVFbnRyaWVzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ1cmxcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJtZXRob2RcIjogXCJHRVRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cDovL2pha2VhcmNoaWJhbGQuY29tLzIwMTYvc3RyZWFtcy1mdHcvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImhlYWRlcnNcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwidGV4dC9odG1sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcInN0YXR1c0NvZGVcIjogMjAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzdGF0dXNNZXNzYWdlXCI6IFwiT0tcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29udGVudFR5cGVcIjogXCJ0ZXh0L2h0bWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibWltZVR5cGVcIjogXCJ0ZXh0L2h0bWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZW5jb2RpbmdcIjogXCJVVEYtOFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwYXRoXCI6IEZpbGVQYXRocy5qb2luKHRtcGRpciwgXCJ0ZXN0LWxvYWQuY2h0bWxcIilcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJtZXRhZGF0YVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cDovL2pha2VhcmNoaWJhbGQuY29tLzIwMTYvc3RyZWFtcy1mdHcvXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBhc3NlcnRKU09OKERpY3Rpb25hcmllcy5zb3J0ZWQoY2FjaGVFbnRyaWVzSG9sZGVyKSwgRGljdGlvbmFyaWVzLnNvcnRlZChleHBlY3RlZCkpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgfSk7XG5cbiAgICBkZXNjcmliZSgnTG9hZCBQSFonLCBmdW5jdGlvbigpIHtcblxuICAgICAgICBpdChcImNyZWF0ZUZyb21QSFpcIiwgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGNhcHR1cmVkID0gTW9ja0NhcHR1cmVkQ29udGVudC5jcmVhdGUoKTtcblxuICAgICAgICAgICAgY29uc3QgcGF0aCA9IEZpbGVQYXRocy50bXBmaWxlKFwiY2FjaGVkLWVudHJpZXMtZmFjdG9yeS5waHpcIik7XG5cbiAgICAgICAgICAgIGNvbnN0IG91dHB1dCA9IG5ldyBQSFpXcml0ZXIocGF0aCk7XG4gICAgICAgICAgICBjb25zdCBjYXB0dXJlZFBIWldyaXRlciA9IG5ldyBDYXB0dXJlZFBIWldyaXRlcihvdXRwdXQpO1xuICAgICAgICAgICAgYXdhaXQgY2FwdHVyZWRQSFpXcml0ZXIuY29udmVydChjYXB0dXJlZCk7XG5cbiAgICAgICAgICAgIGFzc2VydC5vayhhd2FpdCBGaWxlcy5leGlzdHNBc3luYyhwYXRoKSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNhY2hlRW50cmllc0hvbGRlciA9IGF3YWl0IENhY2hlRW50cmllc0ZhY3RvcnkuY3JlYXRlRnJvbVBIWihwYXRoKTtcblxuICAgICAgICAgICAgYXNzZXJ0SlNPTihjYWNoZUVudHJpZXNIb2xkZXIubWV0YWRhdGEsIHtcbiAgICAgICAgICAgICAgICBcInRpdGxlXCI6IFwiVW5pdCB0ZXN0aW5nIG5vZGUgYXBwbGljYXRpb25zIHdpdGggVHlwZVNjcmlwdOKAiuKAlOKAinVzaW5nIG1vY2hhIGFuZCBjaGFpXCIsXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGh6XCIsXG4gICAgICAgICAgICAgICAgXCJ1cmxcIjogXCJodHRwczovL2pvdXJuYWwuYXJ0ZnVsZGV2LmNvbS91bml0LXRlc3Rpbmctbm9kZS1hcHBsaWNhdGlvbnMtd2l0aC10eXBlc2NyaXB0LXVzaW5nLW1vY2hhLWFuZC1jaGFpLTM4NGVmMDVmMzJiMlwiLFxuICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiBcIjMuMC4wXCIsXG4gICAgICAgICAgICAgICAgXCJicm93c2VyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJpbmFjdGl2ZVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicGhvbmVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIk1PQklMRV9HQUxBWFlfUzhfV0lUSF9DSFJPTUVfNjFfV0lEVEhfNzUwXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIk1PQklMRV9HQUxBWFlfUzhfV0lUSF9DSFJPTUVfNjFfV0lEVEhfNzUwXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJHYWxheHkgUzggbW9iaWxlIGRldmljZSBydW5uaW5nIENocm9tZSA2MSBidXQgd2l0aCB3aWR0aCBhdCA3NTBcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ1c2VyQWdlbnRcIjogXCJNb3ppbGxhLzUuMCAoTGludXg7IEFuZHJvaWQgOC4wLjA7IFNNLUc5NTVVIEJ1aWxkL1IxNk5XKSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvNjEuMC4zMTYzLjEwMCBNb2JpbGUgU2FmYXJpLzUzNy4zNlwiLFxuICAgICAgICAgICAgICAgICAgICBcImRldmljZUVtdWxhdGlvblwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInNjcmVlblBvc2l0aW9uXCI6IFwibW9iaWxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNjcmVlblNpemVcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogNzUwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IDk3MFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmlld1NpemVcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogNzUwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IDk3MFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGxldCBleHBlY3RlZDogYW55ID0gW1xuICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly9qb3VybmFsLmFydGZ1bGRldi5jb20vbWVkaWEvMDc2ZmE1ZmJlZDRlYjU3YzA1MDFmYTRjYmY1ODU1YjM/cG9zdElkPTM4NGVmMDVmMzJiMlwiLFxuICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly9qb3VybmFsLmFydGZ1bGRldi5jb20vbWVkaWEvMTMzMjI2N2ZlMTY2NWZhZmRjOGMwZDlmOGM4ZDVkOTg/cG9zdElkPTM4NGVmMDVmMzJiMlwiLFxuICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly9qb3VybmFsLmFydGZ1bGRldi5jb20vbWVkaWEvMjY0ZDVhODBkODM0Zjk5NzZkYmVjNmUyZmQ3MjEwNjI/cG9zdElkPTM4NGVmMDVmMzJiMlwiLFxuICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly9qb3VybmFsLmFydGZ1bGRldi5jb20vbWVkaWEvMzI1MGQ1MWNjZWM0ZGYzZGE0ZjM0NDc4OTIyMTgwNjU/cG9zdElkPTM4NGVmMDVmMzJiMlwiLFxuICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly9qb3VybmFsLmFydGZ1bGRldi5jb20vbWVkaWEvM2JhZTMyMzVjN2I2NGQ4ZTA5Y2VkYTQxNjhjMDMzZTM/cG9zdElkPTM4NGVmMDVmMzJiMlwiLFxuICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly9qb3VybmFsLmFydGZ1bGRldi5jb20vbWVkaWEvNDZmMGY3ODhjMDFjNGIxOTRjZWZkZTJkOWVjNDFlYWY/cG9zdElkPTM4NGVmMDVmMzJiMlwiLFxuICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly9qb3VybmFsLmFydGZ1bGRldi5jb20vbWVkaWEvNDhhNzIxYTBlMmI2NWQ4NTEzMjJmOTRmNmJkNGQwMjA/cG9zdElkPTM4NGVmMDVmMzJiMlwiLFxuICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly9qb3VybmFsLmFydGZ1bGRldi5jb20vbWVkaWEvNDkyYmFjYzY5MGM1NGFhNTQ5YTk2Yjg0OWZhNTcyZWQ/cG9zdElkPTM4NGVmMDVmMzJiMlwiLFxuICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly9qb3VybmFsLmFydGZ1bGRldi5jb20vbWVkaWEvNTcwNGI5OTZiZTNlYmM2MWM0ZjY3ODg1NzFjMmUyY2E/cG9zdElkPTM4NGVmMDVmMzJiMlwiLFxuICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly9qb3VybmFsLmFydGZ1bGRldi5jb20vbWVkaWEvNzA2MjBhNTgyODI1YjNmNjkyNjFhNDZmZGE2ZjFhOGY/cG9zdElkPTM4NGVmMDVmMzJiMlwiLFxuICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly9qb3VybmFsLmFydGZ1bGRldi5jb20vbWVkaWEvOGQ3NzlhMjUyMzM4ZGY1OTllOWVlODIxY2QyNGU0OTI/cG9zdElkPTM4NGVmMDVmMzJiMlwiLFxuICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly9qb3VybmFsLmFydGZ1bGRldi5jb20vbWVkaWEvYWY4ZDlhY2U5NWU2ZTc5NzQ3YWNkMTllNWU2NTkxNjk/cG9zdElkPTM4NGVmMDVmMzJiMlwiLFxuICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly9qb3VybmFsLmFydGZ1bGRldi5jb20vbWVkaWEvY2ZjM2ZjNTAxMzNmYzA2ZmI4Y2VlODZhYzIyOTJlYTE/cG9zdElkPTM4NGVmMDVmMzJiMlwiLFxuICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly9qb3VybmFsLmFydGZ1bGRldi5jb20vbWVkaWEvZGFjMGE2NDIyMDU5Mjg4ZjE5NmMyYTBkZDgzZDRmMWU/cG9zdElkPTM4NGVmMDVmMzJiMlwiLFxuICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly9qb3VybmFsLmFydGZ1bGRldi5jb20vdW5pdC10ZXN0aW5nLW5vZGUtYXBwbGljYXRpb25zLXdpdGgtdHlwZXNjcmlwdC11c2luZy1tb2NoYS1hbmQtY2hhaS0zODRlZjA1ZjMyYjJcIlxuICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgYXNzZXJ0SlNPTihPYmplY3Qua2V5cyhjYWNoZUVudHJpZXNIb2xkZXIuY2FjaGVFbnRyaWVzKSwgZXhwZWN0ZWQpO1xuXG4gICAgICAgICAgICBleHBlY3RlZCA9IHtcbiAgICAgICAgICAgICAgICBcIm1ldGhvZFwiOiBcIkdFVFwiLFxuICAgICAgICAgICAgICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9qb3VybmFsLmFydGZ1bGRldi5jb20vdW5pdC10ZXN0aW5nLW5vZGUtYXBwbGljYXRpb25zLXdpdGgtdHlwZXNjcmlwdC11c2luZy1tb2NoYS1hbmQtY2hhaS0zODRlZjA1ZjMyYjJcIixcbiAgICAgICAgICAgICAgICBcImhlYWRlcnNcIjoge30sXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNDb2RlXCI6IDIwMCxcbiAgICAgICAgICAgICAgICBcInN0YXR1c01lc3NhZ2VcIjogXCJPS1wiLFxuICAgICAgICAgICAgICAgIFwiY29udGVudFR5cGVcIjogXCJ0ZXh0L2h0bWxcIixcbiAgICAgICAgICAgICAgICBcIm1pbWVUeXBlXCI6IFwiVVRGLThcIixcbiAgICAgICAgICAgICAgICBcImVuY29kaW5nXCI6IFwiVVRGLThcIixcbiAgICAgICAgICAgICAgICBcInJlc291cmNlRW50cnlcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwiMW5Rck5ROVRvS2tSYzNWdHBDckRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJwYXRoXCI6IFwiMW5Rck5ROVRvS2tSYzNWdHBDckQuaHRtbFwiLFxuICAgICAgICAgICAgICAgICAgICBcInJlc291cmNlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCIxblFyTlE5VG9La1JjM1Z0cENyRFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjcmVhdGVkXCI6IFwiMjAxMi0wMy0wMlQxMTozODo0OS4zMjFaXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm1ldGFcIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICBcInVybFwiOiBcImh0dHBzOi8vam91cm5hbC5hcnRmdWxkZXYuY29tL3VuaXQtdGVzdGluZy1ub2RlLWFwcGxpY2F0aW9ucy13aXRoLXR5cGVzY3JpcHQtdXNpbmctbW9jaGEtYW5kLWNoYWktMzg0ZWYwNWYzMmIyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbnRlbnRUeXBlXCI6IFwidGV4dC9odG1sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm1pbWVUeXBlXCI6IFwidGV4dC9odG1sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImVuY29kaW5nXCI6IFwiVVRGLThcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibWV0aG9kXCI6IFwiR0VUXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInN0YXR1c0NvZGVcIjogMjAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJoZWFkZXJzXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlVuaXQgdGVzdGluZyBub2RlIGFwcGxpY2F0aW9ucyB3aXRoIFR5cGVTY3JpcHTigIrigJTigIp1c2luZyBtb2NoYSBhbmQgY2hhaVwiLFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgYXNzZXJ0SlNPTihEaWN0aW9uYXJpZXMuc29ydGVkKGNhY2hlRW50cmllc0hvbGRlci5jYWNoZUVudHJpZXNbXCJodHRwczovL2pvdXJuYWwuYXJ0ZnVsZGV2LmNvbS91bml0LXRlc3Rpbmctbm9kZS1hcHBsaWNhdGlvbnMtd2l0aC10eXBlc2NyaXB0LXVzaW5nLW1vY2hhLWFuZC1jaGFpLTM4NGVmMDVmMzJiMlwiXSksXG4gICAgICAgICAgICAgICAgICAgICAgIERpY3Rpb25hcmllcy5zb3J0ZWQoZXhwZWN0ZWQpKTtcblxuICAgICAgICAgICAgZXhwZWN0ZWQgPSB7XG4gICAgICAgICAgICAgICAgXCJtZXRob2RcIjogXCJHRVRcIixcbiAgICAgICAgICAgICAgICBcInVybFwiOiBcImh0dHBzOi8vam91cm5hbC5hcnRmdWxkZXYuY29tL21lZGlhLzQ2ZjBmNzg4YzAxYzRiMTk0Y2VmZGUyZDllYzQxZWFmP3Bvc3RJZD0zODRlZjA1ZjMyYjJcIixcbiAgICAgICAgICAgICAgICBcImhlYWRlcnNcIjoge30sXG4gICAgICAgICAgICAgICAgXCJzdGF0dXNDb2RlXCI6IDIwMCxcbiAgICAgICAgICAgICAgICBcInN0YXR1c01lc3NhZ2VcIjogXCJPS1wiLFxuICAgICAgICAgICAgICAgIFwiY29udGVudFR5cGVcIjogXCJ0ZXh0L2h0bWxcIixcbiAgICAgICAgICAgICAgICBcIm1pbWVUeXBlXCI6IFwiVVRGLThcIixcbiAgICAgICAgICAgICAgICBcImVuY29kaW5nXCI6IFwiVVRGLThcIixcbiAgICAgICAgICAgICAgICBcInJlc291cmNlRW50cnlcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwiMTJqeEtoUWJFMndpYXc4Q0s0NmRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJwYXRoXCI6IFwiMTJqeEtoUWJFMndpYXc4Q0s0NmQuaHRtbFwiLFxuICAgICAgICAgICAgICAgICAgICBcInJlc291cmNlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCIxMmp4S2hRYkUyd2lhdzhDSzQ2ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjcmVhdGVkXCI6IFwiMjAxMi0wMy0wMlQxMTozODo0OS4zMjFaXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm1ldGFcIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICBcInVybFwiOiBcImh0dHBzOi8vam91cm5hbC5hcnRmdWxkZXYuY29tL21lZGlhLzQ2ZjBmNzg4YzAxYzRiMTk0Y2VmZGUyZDllYzQxZWFmP3Bvc3RJZD0zODRlZjA1ZjMyYjJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29udGVudFR5cGVcIjogXCJ0ZXh0L2h0bWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibWltZVR5cGVcIjogXCJ0ZXh0L2h0bWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZW5jb2RpbmdcIjogXCJVVEYtOFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJtZXRob2RcIjogXCJHRVRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3RhdHVzQ29kZVwiOiAyMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImhlYWRlcnNcIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRpdGxlXCI6IFwiaW5zdGFsbC1tb2NoYS1jaGFpLXRzLnNoIOKAkyBNZWRpdW1cIixcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGFzc2VydEpTT04oRGljdGlvbmFyaWVzLnNvcnRlZChjYWNoZUVudHJpZXNIb2xkZXIuY2FjaGVFbnRyaWVzW1wiaHR0cHM6Ly9qb3VybmFsLmFydGZ1bGRldi5jb20vbWVkaWEvNDZmMGY3ODhjMDFjNGIxOTRjZWZkZTJkOWVjNDFlYWY/cG9zdElkPTM4NGVmMDVmMzJiMlwiXSksXG4gICAgICAgICAgICAgICAgICAgICAgIERpY3Rpb25hcmllcy5zb3J0ZWQoZXhwZWN0ZWQpKTtcblxuICAgICAgICB9KTtcblxuICAgIH0pO1xuXG59KTtcbiJdfQ==