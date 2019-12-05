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
const SpectronMain_1 = require("../../../js/test/SpectronMain");
const electron_1 = require("electron");
exports.BROWSER_OPTIONS = {
    backgroundColor: '#FFF',
    webPreferences: {
        webSecurity: false,
        nodeIntegration: false
    }
};
const windowFactory = () => __awaiter(void 0, void 0, void 0, function* () {
    const mainWindow = new electron_1.BrowserWindow(exports.BROWSER_OPTIONS);
    yield mainWindow.loadURL('about:blank');
    return mainWindow;
});
SpectronMain_1.SpectronMain.run((state) => __awaiter(void 0, void 0, void 0, function* () {
    yield state.window.loadFile(__dirname + '/app.html');
    yield state.testResultWriter.write(true);
}), { windowFactory });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLGdFQUEwRTtBQUMxRSx1Q0FBdUM7QUFHMUIsUUFBQSxlQUFlLEdBQUc7SUFDM0IsZUFBZSxFQUFFLE1BQU07SUFRdkIsY0FBYyxFQUFFO1FBQ1osV0FBVyxFQUFFLEtBQUs7UUFDbEIsZUFBZSxFQUFFLEtBQUs7S0FDekI7Q0FFSixDQUFDO0FBRUYsTUFBTSxhQUFhLEdBQWtCLEdBQVMsRUFBRTtJQUM1QyxNQUFNLFVBQVUsR0FBRyxJQUFJLHdCQUFhLENBQUMsdUJBQWUsQ0FBQyxDQUFDO0lBRXRELE1BQU0sVUFBVSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN4QyxPQUFPLFVBQVUsQ0FBQztBQUN0QixDQUFDLENBQUEsQ0FBQztBQUVGLDJCQUFZLENBQUMsR0FBRyxDQUFDLENBQU0sS0FBSyxFQUFDLEVBQUU7SUFFM0IsTUFBTSxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDLENBQUM7SUFFckQsTUFBTSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRTdDLENBQUMsQ0FBQSxFQUFFLEVBQUMsYUFBYSxFQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U3BlY3Ryb25NYWluLCBXaW5kb3dGYWN0b3J5fSBmcm9tICcuLi8uLi8uLi9qcy90ZXN0L1NwZWN0cm9uTWFpbic7XG5pbXBvcnQge0Jyb3dzZXJXaW5kb3d9IGZyb20gXCJlbGVjdHJvblwiO1xuXG5cbmV4cG9ydCBjb25zdCBCUk9XU0VSX09QVElPTlMgPSB7XG4gICAgYmFja2dyb3VuZENvbG9yOiAnI0ZGRicsXG5cbiAgICAvLyBOT1RFOiB0aGUgZGVmYXVsdCB3aWR0aCBhbmQgaGVpZ2h0IHNob3VsZG4ndCBiZSBjaGFuZ2VkIGhlcmUgYXMgaXQgY2FuXG4gICAgLy8gYnJlYWsgdW5pdCB0ZXN0cy5cblxuICAgIC8vIHdpZHRoOiAxMDAwLFxuICAgIC8vIGhlaWdodDogMTAwMCxcblxuICAgIHdlYlByZWZlcmVuY2VzOiB7XG4gICAgICAgIHdlYlNlY3VyaXR5OiBmYWxzZSxcbiAgICAgICAgbm9kZUludGVncmF0aW9uOiBmYWxzZVxuICAgIH1cblxufTtcblxuY29uc3Qgd2luZG93RmFjdG9yeTogV2luZG93RmFjdG9yeSA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBtYWluV2luZG93ID0gbmV3IEJyb3dzZXJXaW5kb3coQlJPV1NFUl9PUFRJT05TKTtcbiAgICAvLyBtYWluV2luZG93LndlYkNvbnRlbnRzLnRvZ2dsZURldlRvb2xzKCk7XG4gICAgYXdhaXQgbWFpbldpbmRvdy5sb2FkVVJMKCdhYm91dDpibGFuaycpO1xuICAgIHJldHVybiBtYWluV2luZG93O1xufTtcblxuU3BlY3Ryb25NYWluLnJ1bihhc3luYyBzdGF0ZSA9PiB7XG5cbiAgICBhd2FpdCBzdGF0ZS53aW5kb3cubG9hZEZpbGUoX19kaXJuYW1lICsgJy9hcHAuaHRtbCcpO1xuXG4gICAgYXdhaXQgc3RhdGUudGVzdFJlc3VsdFdyaXRlci53cml0ZSh0cnVlKTtcblxufSwge3dpbmRvd0ZhY3Rvcnl9KTtcbiJdfQ==