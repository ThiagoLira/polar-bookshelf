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
const TestingTime_1 = require("polar-shared/src/test/TestingTime");
const CapturedPHZWriter_1 = require("polar-content-capture/src/phz/CapturedPHZWriter");
const CacheRegistry_1 = require("./CacheRegistry");
const MockCapturedContent_1 = require("polar-content-capture/src/phz/MockCapturedContent");
const FilePaths_1 = require("polar-shared/src/util/FilePaths");
const PHZWriter_1 = require("polar-content-capture/src/phz/PHZWriter");
TestingTime_1.TestingTime.freeze();
describe('CacheRegistryTest', function () {
    describe('Load PHZ', function () {
        it("registerFile", function () {
            return __awaiter(this, void 0, void 0, function* () {
                TestingTime_1.TestingTime.freeze();
                const captured = MockCapturedContent_1.MockCapturedContent.create();
                const path = FilePaths_1.FilePaths.tmpfile("cached-entries-factory.phz");
                const output = new PHZWriter_1.PHZWriter(path);
                const capturedPHZWriter = new CapturedPHZWriter_1.CapturedPHZWriter(output);
                yield capturedPHZWriter.convert(captured);
                const cacheRegistry = new CacheRegistry_1.CacheRegistry();
                yield cacheRegistry.registerFile(path);
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FjaGVSZWdpc3RyeVRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJDYWNoZVJlZ2lzdHJ5VGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLG1FQUE4RDtBQUM5RCx1RkFBa0Y7QUFDbEYsbURBQThDO0FBQzlDLDJGQUFzRjtBQUN0RiwrREFBMEQ7QUFDMUQsdUVBQWtFO0FBRWxFLHlCQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFckIsUUFBUSxDQUFDLG1CQUFtQixFQUFFO0lBRTFCLFFBQVEsQ0FBQyxVQUFVLEVBQUU7UUFFakIsRUFBRSxDQUFDLGNBQWMsRUFBRTs7Z0JBRWYseUJBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFFckIsTUFBTSxRQUFRLEdBQUcseUNBQW1CLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBRTlDLE1BQU0sSUFBSSxHQUFHLHFCQUFTLENBQUMsT0FBTyxDQUFDLDRCQUE0QixDQUFDLENBQUM7Z0JBQzdELE1BQU0sTUFBTSxHQUFHLElBQUkscUJBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbkMsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLHFDQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN4RCxNQUFNLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFFMUMsTUFBTSxhQUFhLEdBQUcsSUFBSSw2QkFBYSxFQUFFLENBQUM7Z0JBRTFDLE1BQU0sYUFBYSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUUzQyxDQUFDO1NBQUEsQ0FBQyxDQUFDO0lBRVAsQ0FBQyxDQUFDLENBQUM7QUFFUCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7VGVzdGluZ1RpbWV9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdGVzdC9UZXN0aW5nVGltZSc7XG5pbXBvcnQge0NhcHR1cmVkUEhaV3JpdGVyfSBmcm9tICdwb2xhci1jb250ZW50LWNhcHR1cmUvc3JjL3Boei9DYXB0dXJlZFBIWldyaXRlcic7XG5pbXBvcnQge0NhY2hlUmVnaXN0cnl9IGZyb20gJy4vQ2FjaGVSZWdpc3RyeSc7XG5pbXBvcnQge01vY2tDYXB0dXJlZENvbnRlbnR9IGZyb20gJ3BvbGFyLWNvbnRlbnQtY2FwdHVyZS9zcmMvcGh6L01vY2tDYXB0dXJlZENvbnRlbnQnO1xuaW1wb3J0IHtGaWxlUGF0aHN9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC9GaWxlUGF0aHMnO1xuaW1wb3J0IHtQSFpXcml0ZXJ9IGZyb20gXCJwb2xhci1jb250ZW50LWNhcHR1cmUvc3JjL3Boei9QSFpXcml0ZXJcIjtcblxuVGVzdGluZ1RpbWUuZnJlZXplKCk7XG5cbmRlc2NyaWJlKCdDYWNoZVJlZ2lzdHJ5VGVzdCcsIGZ1bmN0aW9uKCkge1xuXG4gICAgZGVzY3JpYmUoJ0xvYWQgUEhaJywgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgaXQoXCJyZWdpc3RlckZpbGVcIiwgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgIFRlc3RpbmdUaW1lLmZyZWV6ZSgpO1xuXG4gICAgICAgICAgICBjb25zdCBjYXB0dXJlZCA9IE1vY2tDYXB0dXJlZENvbnRlbnQuY3JlYXRlKCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHBhdGggPSBGaWxlUGF0aHMudG1wZmlsZShcImNhY2hlZC1lbnRyaWVzLWZhY3RvcnkucGh6XCIpO1xuICAgICAgICAgICAgY29uc3Qgb3V0cHV0ID0gbmV3IFBIWldyaXRlcihwYXRoKTtcbiAgICAgICAgICAgIGNvbnN0IGNhcHR1cmVkUEhaV3JpdGVyID0gbmV3IENhcHR1cmVkUEhaV3JpdGVyKG91dHB1dCk7XG4gICAgICAgICAgICBhd2FpdCBjYXB0dXJlZFBIWldyaXRlci5jb252ZXJ0KGNhcHR1cmVkKTtcblxuICAgICAgICAgICAgY29uc3QgY2FjaGVSZWdpc3RyeSA9IG5ldyBDYWNoZVJlZ2lzdHJ5KCk7XG5cbiAgICAgICAgICAgIGF3YWl0IGNhY2hlUmVnaXN0cnkucmVnaXN0ZXJGaWxlKHBhdGgpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgfSk7XG5cbn0pO1xuIl19