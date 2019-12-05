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
const electron_1 = require("electron");
const SpectronMain_1 = require("../../../js/test/SpectronMain");
exports.BROWSER_OPTIONS = {
    backgroundColor: '#FFF',
    webPreferences: {
        webSecurity: false,
        preload: "/home/burton/projects/polar-bookshelf/test/sandbox/preload-with-iframes/preload.js"
    }
};
let windowFactory = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Creating custom window.");
    let mainWindow = new electron_1.BrowserWindow(exports.BROWSER_OPTIONS);
    mainWindow.loadURL('about:blank');
    return mainWindow;
});
SpectronMain_1.SpectronMain.run((state) => __awaiter(void 0, void 0, void 0, function* () {
    state.window.loadFile(__dirname + '/app.html');
    yield state.testResultWriter.write(true);
}), { windowFactory });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHVDQUF1QztBQUN2QyxnRUFBMEU7QUFFN0QsUUFBQSxlQUFlLEdBQUc7SUFFM0IsZUFBZSxFQUFFLE1BQU07SUFRdkIsY0FBYyxFQUFFO1FBQ1osV0FBVyxFQUFFLEtBQUs7UUFJbEIsT0FBTyxFQUFFLG9GQUFvRjtLQUNoRztDQUVKLENBQUM7QUFFRixJQUFJLGFBQWEsR0FBa0IsR0FBUyxFQUFFO0lBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQTtJQUN0QyxJQUFJLFVBQVUsR0FBRyxJQUFJLHdCQUFhLENBQUMsdUJBQWUsQ0FBQyxDQUFDO0lBRXBELFVBQVUsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDbEMsT0FBTyxVQUFVLENBQUM7QUFDdEIsQ0FBQyxDQUFBLENBQUM7QUFFRiwyQkFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFNLEtBQUssRUFBQyxFQUFFO0lBRTNCLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUMsQ0FBQztJQUUvQyxNQUFNLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFN0MsQ0FBQyxDQUFBLEVBQUUsRUFBQyxhQUFhLEVBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtCcm93c2VyV2luZG93fSBmcm9tICdlbGVjdHJvbic7XG5pbXBvcnQge1NwZWN0cm9uTWFpbiwgV2luZG93RmFjdG9yeX0gZnJvbSAnLi4vLi4vLi4vanMvdGVzdC9TcGVjdHJvbk1haW4nO1xuXG5leHBvcnQgY29uc3QgQlJPV1NFUl9PUFRJT05TID0ge1xuXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI0ZGRicsXG5cbiAgICAvLyBOT1RFOiB0aGUgZGVmYXVsdCB3aWR0aCBhbmQgaGVpZ2h0IHNob3VsZG4ndCBiZSBjaGFuZ2VkIGhlcmUgYXMgaXQgY2FuXG4gICAgLy8gYnJlYWsgdW5pdCB0ZXN0cy5cblxuICAgIC8vd2lkdGg6IDEwMDAsXG4gICAgLy9oZWlnaHQ6IDEwMDAsXG5cbiAgICB3ZWJQcmVmZXJlbmNlczoge1xuICAgICAgICB3ZWJTZWN1cml0eTogZmFsc2UsXG4gICAgICAgIC8vIGNhbiBOT1QgYmUgbG9hZGVkIGZyb20gZmlsZSBVUkxzXG4gICAgICAgIC8vcHJlbG9hZFVSTDogXCJmaWxlOi8vL2hvbWUvYnVydG9uL3Byb2plY3RzL3BvbGFyLWJvb2tzaGVsZi93ZWIvc3BlY3Ryb24vcHJlbG9hZC10ZXN0L3ByZWxvYWQuanNcIlxuICAgICAgICAvL3ByZWxvYWRVUkw6IFwiLi9wcmVsb2FkLmpzXCJcbiAgICAgICAgcHJlbG9hZDogXCIvaG9tZS9idXJ0b24vcHJvamVjdHMvcG9sYXItYm9va3NoZWxmL3Rlc3Qvc2FuZGJveC9wcmVsb2FkLXdpdGgtaWZyYW1lcy9wcmVsb2FkLmpzXCJcbiAgICB9XG5cbn07XG5cbmxldCB3aW5kb3dGYWN0b3J5OiBXaW5kb3dGYWN0b3J5ID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiQ3JlYXRpbmcgY3VzdG9tIHdpbmRvdy5cIilcbiAgICBsZXQgbWFpbldpbmRvdyA9IG5ldyBCcm93c2VyV2luZG93KEJST1dTRVJfT1BUSU9OUyk7XG4gICAgLy9tYWluV2luZG93LndlYkNvbnRlbnRzLnRvZ2dsZURldlRvb2xzKCk7XG4gICAgbWFpbldpbmRvdy5sb2FkVVJMKCdhYm91dDpibGFuaycpO1xuICAgIHJldHVybiBtYWluV2luZG93O1xufTtcblxuU3BlY3Ryb25NYWluLnJ1bihhc3luYyBzdGF0ZSA9PiB7XG5cbiAgICBzdGF0ZS53aW5kb3cubG9hZEZpbGUoX19kaXJuYW1lICsgJy9hcHAuaHRtbCcpO1xuXG4gICAgYXdhaXQgc3RhdGUudGVzdFJlc3VsdFdyaXRlci53cml0ZSh0cnVlKTtcblxufSwge3dpbmRvd0ZhY3Rvcnl9KTtcblxuXG5cblxuXG4iXX0=