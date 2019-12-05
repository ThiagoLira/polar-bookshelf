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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const FilePaths_1 = require("polar-shared/src/util/FilePaths");
const DiskCacheEntry_1 = require("./DiskCacheEntry");
const chai_1 = require("chai");
const fs = __importStar(require("fs"));
describe('DiskCacheEntry', function () {
    describe('Test reading data', function () {
        it("basic", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const path = FilePaths_1.FilePaths.tmpfile("test.txt");
                const testData = "this is some data";
                fs.writeFileSync(path, testData);
                const diskCacheEntry = new DiskCacheEntry_1.DiskCacheEntry({
                    url: "http://foo.com/second.txt",
                    method: "GET",
                    headers: {
                        "Content-Type": "text/html"
                    },
                    statusCode: 200,
                    statusMessage: "OK",
                    contentLength: 30,
                    path
                });
                let data = null;
                yield diskCacheEntry.handleData(function (d) {
                    data = d;
                });
                chai_1.assert.equal(data, testData);
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGlza0NhY2hlRW50cnlUZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRGlza0NhY2hlRW50cnlUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtEQUEwRDtBQUMxRCxxREFBZ0Q7QUFDaEQsK0JBQTRCO0FBQzVCLHVDQUF5QjtBQUV6QixRQUFRLENBQUMsZ0JBQWdCLEVBQUU7SUFFdkIsUUFBUSxDQUFDLG1CQUFtQixFQUFFO1FBRTFCLEVBQUUsQ0FBQyxPQUFPLEVBQUU7O2dCQUVSLE1BQU0sSUFBSSxHQUFHLHFCQUFTLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUMzQyxNQUFNLFFBQVEsR0FBRyxtQkFBbUIsQ0FBQztnQkFDckMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7Z0JBRWpDLE1BQU0sY0FBYyxHQUFHLElBQUksK0JBQWMsQ0FBQztvQkFDdEMsR0FBRyxFQUFFLDJCQUEyQjtvQkFDaEMsTUFBTSxFQUFFLEtBQUs7b0JBQ2IsT0FBTyxFQUFFO3dCQUNMLGNBQWMsRUFBRSxXQUFXO3FCQUM5QjtvQkFDRCxVQUFVLEVBQUUsR0FBRztvQkFDZixhQUFhLEVBQUUsSUFBSTtvQkFDbkIsYUFBYSxFQUFFLEVBQUU7b0JBQ2pCLElBQUk7aUJBQ1AsQ0FBQyxDQUFDO2dCQUVILElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztnQkFFaEIsTUFBTSxjQUFjLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQztvQkFDdkMsSUFBSSxHQUFHLENBQUMsQ0FBQztnQkFDYixDQUFDLENBQUMsQ0FBQztnQkFFSCxhQUFNLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztZQUVqQyxDQUFDO1NBQUEsQ0FBQyxDQUFDO0lBRVAsQ0FBQyxDQUFDLENBQUM7QUFFUCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RmlsZVBhdGhzfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy91dGlsL0ZpbGVQYXRoc1wiO1xuaW1wb3J0IHtEaXNrQ2FjaGVFbnRyeX0gZnJvbSAnLi9EaXNrQ2FjaGVFbnRyeSc7XG5pbXBvcnQge2Fzc2VydH0gZnJvbSAnY2hhaSc7XG5pbXBvcnQgKiBhcyBmcyBmcm9tICdmcyc7XG5cbmRlc2NyaWJlKCdEaXNrQ2FjaGVFbnRyeScsIGZ1bmN0aW9uKCkge1xuXG4gICAgZGVzY3JpYmUoJ1Rlc3QgcmVhZGluZyBkYXRhJywgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgaXQoXCJiYXNpY1wiLCBhc3luYyBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IHBhdGggPSBGaWxlUGF0aHMudG1wZmlsZShcInRlc3QudHh0XCIpO1xuICAgICAgICAgICAgY29uc3QgdGVzdERhdGEgPSBcInRoaXMgaXMgc29tZSBkYXRhXCI7XG4gICAgICAgICAgICBmcy53cml0ZUZpbGVTeW5jKHBhdGgsIHRlc3REYXRhKTtcblxuICAgICAgICAgICAgY29uc3QgZGlza0NhY2hlRW50cnkgPSBuZXcgRGlza0NhY2hlRW50cnkoe1xuICAgICAgICAgICAgICAgIHVybDogXCJodHRwOi8vZm9vLmNvbS9zZWNvbmQudHh0XCIsXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJ0ZXh0L2h0bWxcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3RhdHVzQ29kZTogMjAwLFxuICAgICAgICAgICAgICAgIHN0YXR1c01lc3NhZ2U6IFwiT0tcIixcbiAgICAgICAgICAgICAgICBjb250ZW50TGVuZ3RoOiAzMCxcbiAgICAgICAgICAgICAgICBwYXRoXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbGV0IGRhdGEgPSBudWxsO1xuXG4gICAgICAgICAgICBhd2FpdCBkaXNrQ2FjaGVFbnRyeS5oYW5kbGVEYXRhKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICAgICAgZGF0YSA9IGQ7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgYXNzZXJ0LmVxdWFsKGRhdGEsIHRlc3REYXRhKTtcblxuICAgICAgICB9KTtcblxuICAgIH0pO1xuXG59KTtcbiJdfQ==