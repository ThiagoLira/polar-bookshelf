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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLGdFQUEwRTtBQUMxRSx1Q0FBdUM7QUFHMUIsUUFBQSxlQUFlLEdBQUc7SUFDM0IsZUFBZSxFQUFFLE1BQU07SUFRdkIsY0FBYyxFQUFFO1FBQ1osV0FBVyxFQUFFLEtBQUs7S0FLckI7Q0FFSixDQUFDO0FBRUYsSUFBSSxhQUFhLEdBQWtCLEdBQVMsRUFBRTtJQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUE7SUFDdEMsSUFBSSxVQUFVLEdBQUcsSUFBSSx3QkFBYSxDQUFDLHVCQUFlLENBQUMsQ0FBQztJQUVwRCxVQUFVLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ2xDLE9BQU8sVUFBVSxDQUFDO0FBQ3RCLENBQUMsQ0FBQSxDQUFDO0FBRUYsMkJBQVksQ0FBQyxHQUFHLENBQUMsQ0FBTSxLQUFLLEVBQUMsRUFBRTtJQUUzQixLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDLENBQUM7SUFFL0MsTUFBTSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRTdDLENBQUMsQ0FBQSxFQUFFLEVBQUMsYUFBYSxFQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U3BlY3Ryb25NYWluLCBXaW5kb3dGYWN0b3J5fSBmcm9tICcuLi8uLi8uLi9qcy90ZXN0L1NwZWN0cm9uTWFpbic7XG5pbXBvcnQge0Jyb3dzZXJXaW5kb3d9IGZyb20gXCJlbGVjdHJvblwiO1xuXG5cbmV4cG9ydCBjb25zdCBCUk9XU0VSX09QVElPTlMgPSB7XG4gICAgYmFja2dyb3VuZENvbG9yOiAnI0ZGRicsXG5cbiAgICAvLyBOT1RFOiB0aGUgZGVmYXVsdCB3aWR0aCBhbmQgaGVpZ2h0IHNob3VsZG4ndCBiZSBjaGFuZ2VkIGhlcmUgYXMgaXQgY2FuXG4gICAgLy8gYnJlYWsgdW5pdCB0ZXN0cy5cblxuICAgIC8vd2lkdGg6IDEwMDAsXG4gICAgLy9oZWlnaHQ6IDEwMDAsXG5cbiAgICB3ZWJQcmVmZXJlbmNlczoge1xuICAgICAgICB3ZWJTZWN1cml0eTogZmFsc2UsXG4gICAgICAgIC8vIGNhbiBOT1QgYmUgbG9hZGVkIGZyb20gZmlsZSBVUkxzXG4gICAgICAgIC8vcHJlbG9hZFVSTDogXCJmaWxlOi8vL2hvbWUvYnVydG9uL3Byb2plY3RzL3BvbGFyLWJvb2tzaGVsZi93ZWIvc3BlY3Ryb24vcHJlbG9hZC10ZXN0L3ByZWxvYWQuanNcIlxuICAgICAgICAvL3ByZWxvYWRVUkw6IFwiLi9wcmVsb2FkLmpzXCJcbiAgICAgICAgLy9wcmVsb2FkVVJMOiBcIi4vcHJlbG9hZC5qc1wiXG4gICAgfVxuXG59O1xuXG5sZXQgd2luZG93RmFjdG9yeTogV2luZG93RmFjdG9yeSA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIkNyZWF0aW5nIGN1c3RvbSB3aW5kb3cuXCIpXG4gICAgbGV0IG1haW5XaW5kb3cgPSBuZXcgQnJvd3NlcldpbmRvdyhCUk9XU0VSX09QVElPTlMpO1xuICAgIC8vbWFpbldpbmRvdy53ZWJDb250ZW50cy50b2dnbGVEZXZUb29scygpO1xuICAgIG1haW5XaW5kb3cubG9hZFVSTCgnYWJvdXQ6YmxhbmsnKTtcbiAgICByZXR1cm4gbWFpbldpbmRvdztcbn07XG5cblNwZWN0cm9uTWFpbi5ydW4oYXN5bmMgc3RhdGUgPT4ge1xuXG4gICAgc3RhdGUud2luZG93LmxvYWRGaWxlKF9fZGlybmFtZSArICcvYXBwLmh0bWwnKTtcblxuICAgIGF3YWl0IHN0YXRlLnRlc3RSZXN1bHRXcml0ZXIud3JpdGUodHJ1ZSk7XG5cbn0sIHt3aW5kb3dGYWN0b3J5fSk7XG4iXX0=