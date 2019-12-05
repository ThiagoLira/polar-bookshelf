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
const SpectronMain2_1 = require("../../js/test/SpectronMain2");
const WebContentsNotifier_1 = require("../../js/electron/web_contents_notifier/WebContentsNotifier");
SpectronMain2_1.SpectronMain2.create().run((state) => __awaiter(void 0, void 0, void 0, function* () {
    const helloPromise = WebContentsNotifier_1.WebContentsNotifier.once(state.window.webContents, 'hello');
    yield yield state.window.loadURL(`file://${__dirname}/app.html`);
    const mainIPCEvent = yield helloPromise;
    chai_1.assert.equal(mainIPCEvent.message, 'world');
    yield state.testResultWriter.write(true);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLCtCQUE0QjtBQUM1QiwrREFBMEQ7QUFFMUQscUdBQWdHO0FBRWhHLDZCQUFhLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQU0sS0FBSyxFQUFDLEVBQUU7SUFFckMsTUFBTSxZQUFZLEdBQ1oseUNBQW1CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBRWxFLE1BQU0sTUFBTSxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLFNBQVMsV0FBVyxDQUFDLENBQUM7SUFFakUsTUFBTSxZQUFZLEdBQUcsTUFBTSxZQUFZLENBQUM7SUFFeEMsYUFBTSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBRTVDLE1BQU0sS0FBSyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUU3QyxDQUFDLENBQUEsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthc3NlcnR9IGZyb20gJ2NoYWknO1xuaW1wb3J0IHtTcGVjdHJvbk1haW4yfSBmcm9tICcuLi8uLi9qcy90ZXN0L1NwZWN0cm9uTWFpbjInO1xuaW1wb3J0IHtNYWluSVBDRXZlbnR9IGZyb20gJy4uLy4uL2pzL2VsZWN0cm9uL2ZyYW1ld29yay9JUENNYWluUHJvbWlzZXMnO1xuaW1wb3J0IHtXZWJDb250ZW50c05vdGlmaWVyfSBmcm9tICcuLi8uLi9qcy9lbGVjdHJvbi93ZWJfY29udGVudHNfbm90aWZpZXIvV2ViQ29udGVudHNOb3RpZmllcic7XG5cblNwZWN0cm9uTWFpbjIuY3JlYXRlKCkucnVuKGFzeW5jIHN0YXRlID0+IHtcblxuICAgIGNvbnN0IGhlbGxvUHJvbWlzZTogUHJvbWlzZTxNYWluSVBDRXZlbnQ8c3RyaW5nPj5cbiAgICAgICAgPSBXZWJDb250ZW50c05vdGlmaWVyLm9uY2Uoc3RhdGUud2luZG93LndlYkNvbnRlbnRzLCAnaGVsbG8nKTtcblxuICAgIGF3YWl0IGF3YWl0IHN0YXRlLndpbmRvdy5sb2FkVVJMKGBmaWxlOi8vJHtfX2Rpcm5hbWV9L2FwcC5odG1sYCk7XG5cbiAgICBjb25zdCBtYWluSVBDRXZlbnQgPSBhd2FpdCBoZWxsb1Byb21pc2U7XG5cbiAgICBhc3NlcnQuZXF1YWwobWFpbklQQ0V2ZW50Lm1lc3NhZ2UsICd3b3JsZCcpO1xuXG4gICAgYXdhaXQgc3RhdGUudGVzdFJlc3VsdFdyaXRlci53cml0ZSh0cnVlKTtcblxufSk7XG4iXX0=