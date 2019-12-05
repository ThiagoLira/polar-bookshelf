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
const ContentCaptureClient_1 = require("../../js/capture/renderer/ContentCaptureClient");
const SpectronMain_1 = require("../../js/test/SpectronMain");
SpectronMain_1.SpectronMain.run((state) => __awaiter(void 0, void 0, void 0, function* () {
    let window = state.window;
    let contentCaptureClient = new ContentCaptureClient_1.ContentCaptureClient(window);
    let waitForControllerPromise = contentCaptureClient.waitForController();
    window.loadFile(__dirname + '/app.html');
    console.log("Waiting for controller startup promise...");
    yield waitForControllerPromise;
    console.log("Waiting for controller startup promise...done");
    console.log("Waiting for new capture result now:");
    let captured = yield contentCaptureClient.requestNewCapture();
    console.log("GOT IT!", captured);
    captured.url = '...removed...';
    yield state.testResultWriter.write(captured);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHlGQUFvRjtBQUNwRiw2REFBd0Q7QUFFeEQsMkJBQVksQ0FBQyxHQUFHLENBQUMsQ0FBTSxLQUFLLEVBQUMsRUFBRTtJQUUzQixJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO0lBRTFCLElBQUksb0JBQW9CLEdBQUcsSUFBSSwyQ0FBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUU1RCxJQUFJLHdCQUF3QixHQUFHLG9CQUFvQixDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFFeEUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDLENBQUM7SUFFekMsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO0lBQ3pELE1BQU0sd0JBQXdCLENBQUM7SUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDO0lBRTdELE9BQU8sQ0FBQyxHQUFHLENBQUMscUNBQXFDLENBQUMsQ0FBQztJQUVuRCxJQUFJLFFBQVEsR0FBRyxNQUFNLG9CQUFvQixDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFFOUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFFakMsUUFBUSxDQUFDLEdBQUcsR0FBRyxlQUFlLENBQUM7SUFFL0IsTUFBTSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBRWpELENBQUMsQ0FBQSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbnRlbnRDYXB0dXJlQ2xpZW50fSBmcm9tICcuLi8uLi9qcy9jYXB0dXJlL3JlbmRlcmVyL0NvbnRlbnRDYXB0dXJlQ2xpZW50JztcbmltcG9ydCB7U3BlY3Ryb25NYWlufSBmcm9tICcuLi8uLi9qcy90ZXN0L1NwZWN0cm9uTWFpbic7XG5cblNwZWN0cm9uTWFpbi5ydW4oYXN5bmMgc3RhdGUgPT4ge1xuXG4gICAgbGV0IHdpbmRvdyA9IHN0YXRlLndpbmRvdztcblxuICAgIGxldCBjb250ZW50Q2FwdHVyZUNsaWVudCA9IG5ldyBDb250ZW50Q2FwdHVyZUNsaWVudCh3aW5kb3cpO1xuXG4gICAgbGV0IHdhaXRGb3JDb250cm9sbGVyUHJvbWlzZSA9IGNvbnRlbnRDYXB0dXJlQ2xpZW50LndhaXRGb3JDb250cm9sbGVyKCk7XG5cbiAgICB3aW5kb3cubG9hZEZpbGUoX19kaXJuYW1lICsgJy9hcHAuaHRtbCcpO1xuXG4gICAgY29uc29sZS5sb2coXCJXYWl0aW5nIGZvciBjb250cm9sbGVyIHN0YXJ0dXAgcHJvbWlzZS4uLlwiKTtcbiAgICBhd2FpdCB3YWl0Rm9yQ29udHJvbGxlclByb21pc2U7XG4gICAgY29uc29sZS5sb2coXCJXYWl0aW5nIGZvciBjb250cm9sbGVyIHN0YXJ0dXAgcHJvbWlzZS4uLmRvbmVcIik7XG5cbiAgICBjb25zb2xlLmxvZyhcIldhaXRpbmcgZm9yIG5ldyBjYXB0dXJlIHJlc3VsdCBub3c6XCIpO1xuXG4gICAgbGV0IGNhcHR1cmVkID0gYXdhaXQgY29udGVudENhcHR1cmVDbGllbnQucmVxdWVzdE5ld0NhcHR1cmUoKTtcblxuICAgIGNvbnNvbGUubG9nKFwiR09UIElUIVwiLCBjYXB0dXJlZCk7XG5cbiAgICBjYXB0dXJlZC51cmwgPSAnLi4ucmVtb3ZlZC4uLic7XG5cbiAgICBhd2FpdCBzdGF0ZS50ZXN0UmVzdWx0V3JpdGVyLndyaXRlKGNhcHR1cmVkKTtcblxufSk7XG4iXX0=