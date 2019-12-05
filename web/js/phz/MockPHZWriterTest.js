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
const TestingTime_1 = require("polar-shared/src/test/TestingTime");
const chai_1 = require("chai");
const FilePaths_1 = require("polar-shared/src/util/FilePaths");
const MockPHZWriter_1 = require("./MockPHZWriter");
const fs = __importStar(require("fs"));
TestingTime_1.TestingTime.freeze();
describe('MockPHZWriter', function () {
    it("Write basic file", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const path = FilePaths_1.FilePaths.createTempName("test-mock-phz-writer.phz");
            yield MockPHZWriter_1.MockPHZWriter.write(path);
            chai_1.assert.equal(fs.existsSync(path), true);
            console.log("Wrote file: " + path);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9ja1BIWldyaXRlclRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJNb2NrUEhaV3JpdGVyVGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtRUFBOEQ7QUFDOUQsK0JBQTRCO0FBQzVCLCtEQUEwRDtBQUMxRCxtREFBOEM7QUFDOUMsdUNBQXlCO0FBRXpCLHlCQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFckIsUUFBUSxDQUFDLGVBQWUsRUFBRTtJQUV0QixFQUFFLENBQUMsa0JBQWtCLEVBQUU7O1lBRW5CLE1BQU0sSUFBSSxHQUFHLHFCQUFTLENBQUMsY0FBYyxDQUFDLDBCQUEwQixDQUFDLENBQUM7WUFDbEUsTUFBTSw2QkFBYSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNoQyxhQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFFdkMsQ0FBQztLQUFBLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtUZXN0aW5nVGltZX0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy90ZXN0L1Rlc3RpbmdUaW1lJztcbmltcG9ydCB7YXNzZXJ0fSBmcm9tICdjaGFpJztcbmltcG9ydCB7RmlsZVBhdGhzfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvRmlsZVBhdGhzJztcbmltcG9ydCB7TW9ja1BIWldyaXRlcn0gZnJvbSAnLi9Nb2NrUEhaV3JpdGVyJztcbmltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzJztcblxuVGVzdGluZ1RpbWUuZnJlZXplKCk7XG5cbmRlc2NyaWJlKCdNb2NrUEhaV3JpdGVyJywgZnVuY3Rpb24oKSB7XG5cbiAgICBpdChcIldyaXRlIGJhc2ljIGZpbGVcIiwgYXN5bmMgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGNvbnN0IHBhdGggPSBGaWxlUGF0aHMuY3JlYXRlVGVtcE5hbWUoXCJ0ZXN0LW1vY2stcGh6LXdyaXRlci5waHpcIik7XG4gICAgICAgIGF3YWl0IE1vY2tQSFpXcml0ZXIud3JpdGUocGF0aCk7XG4gICAgICAgIGFzc2VydC5lcXVhbChmcy5leGlzdHNTeW5jKHBhdGgpLCB0cnVlKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJXcm90ZSBmaWxlOiBcIiArIHBhdGgpO1xuXG4gICAgfSk7XG5cbn0pO1xuXG4iXX0=