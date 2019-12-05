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
const SpectronMain2_1 = require("../../js/test/SpectronMain2");
const Capture_1 = require("../../js/capture/Capture");
const BrowserProfiles_1 = require("../../js/capture/BrowserProfiles");
const BrowserRegistry_1 = __importDefault(require("../../js/capture/BrowserRegistry"));
SpectronMain2_1.SpectronMain2.create().run((state) => __awaiter(void 0, void 0, void 0, function* () {
    const browser = BrowserRegistry_1.default.DEFAULT;
    let browserProfile = BrowserProfiles_1.BrowserProfiles.toBrowserProfile(browser, 'DEFAULT');
    const url = "http://www.example.com";
    browserProfile.navigation.navigated.dispatchEvent({ link: url });
    browserProfile.navigation.captured.dispatchEvent({});
    browserProfile = Object.assign({}, browserProfile);
    browserProfile.destroy = false;
    const capture = new Capture_1.Capture(browserProfile);
    yield capture.start();
    yield state.testResultWriter.write(true);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLCtEQUEwRDtBQUMxRCxzREFBaUQ7QUFDakQsc0VBQWlFO0FBQ2pFLHVGQUErRDtBQUcvRCw2QkFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFNLEtBQUssRUFBQyxFQUFFO0lBRXJDLE1BQU0sT0FBTyxHQUFHLHlCQUFlLENBQUMsT0FBTyxDQUFDO0lBRXhDLElBQUksY0FBYyxHQUNaLGlDQUFlLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBRTNELE1BQU0sR0FBRyxHQUFHLHdCQUF3QixDQUFDO0lBRXJDLGNBQWMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxFQUFDLElBQUksRUFBRSxHQUFHLEVBQUMsQ0FBQyxDQUFDO0lBQy9ELGNBQWMsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUVyRCxjQUFjLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsY0FBYyxDQUFDLENBQUM7SUFFbkQsY0FBYyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFFL0IsTUFBTSxPQUFPLEdBQUcsSUFBSSxpQkFBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBRTVDLE1BQU0sT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBRXRCLE1BQU0sS0FBSyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUU3QyxDQUFDLENBQUEsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTcGVjdHJvbk1haW4yfSBmcm9tICcuLi8uLi9qcy90ZXN0L1NwZWN0cm9uTWFpbjInO1xuaW1wb3J0IHtDYXB0dXJlfSBmcm9tICcuLi8uLi9qcy9jYXB0dXJlL0NhcHR1cmUnO1xuaW1wb3J0IHtCcm93c2VyUHJvZmlsZXN9IGZyb20gJy4uLy4uL2pzL2NhcHR1cmUvQnJvd3NlclByb2ZpbGVzJztcbmltcG9ydCBCcm93c2VyUmVnaXN0cnkgZnJvbSAnLi4vLi4vanMvY2FwdHVyZS9Ccm93c2VyUmVnaXN0cnknO1xuaW1wb3J0IHtCcm93c2VyUHJvZmlsZX0gZnJvbSAnLi4vLi4vanMvY2FwdHVyZS9Ccm93c2VyUHJvZmlsZSc7XG5cblNwZWN0cm9uTWFpbjIuY3JlYXRlKCkucnVuKGFzeW5jIHN0YXRlID0+IHtcblxuICAgIGNvbnN0IGJyb3dzZXIgPSBCcm93c2VyUmVnaXN0cnkuREVGQVVMVDtcblxuICAgIGxldCBicm93c2VyUHJvZmlsZTogQnJvd3NlclByb2ZpbGVcbiAgICAgICAgPSBCcm93c2VyUHJvZmlsZXMudG9Ccm93c2VyUHJvZmlsZShicm93c2VyLCAnREVGQVVMVCcpO1xuXG4gICAgY29uc3QgdXJsID0gXCJodHRwOi8vd3d3LmV4YW1wbGUuY29tXCI7XG5cbiAgICBicm93c2VyUHJvZmlsZS5uYXZpZ2F0aW9uLm5hdmlnYXRlZC5kaXNwYXRjaEV2ZW50KHtsaW5rOiB1cmx9KTtcbiAgICBicm93c2VyUHJvZmlsZS5uYXZpZ2F0aW9uLmNhcHR1cmVkLmRpc3BhdGNoRXZlbnQoe30pO1xuXG4gICAgYnJvd3NlclByb2ZpbGUgPSBPYmplY3QuYXNzaWduKHt9LCBicm93c2VyUHJvZmlsZSk7XG5cbiAgICBicm93c2VyUHJvZmlsZS5kZXN0cm95ID0gZmFsc2U7XG5cbiAgICBjb25zdCBjYXB0dXJlID0gbmV3IENhcHR1cmUoYnJvd3NlclByb2ZpbGUpO1xuXG4gICAgYXdhaXQgY2FwdHVyZS5zdGFydCgpO1xuXG4gICAgYXdhaXQgc3RhdGUudGVzdFJlc3VsdFdyaXRlci53cml0ZSh0cnVlKTtcblxufSk7XG4iXX0=