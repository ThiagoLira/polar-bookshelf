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
const SpectronMain_1 = require("../../js/test/SpectronMain");
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        let mainWindow = yield SpectronMain_1.SpectronMain.setup();
        mainWindow.loadURL('file://' + __dirname + '/index.html');
    });
}
start().catch(err => console.log(err));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDZEQUF3RDtBQUV4RCxTQUFlLEtBQUs7O1FBQ2hCLElBQUksVUFBVSxHQUFHLE1BQU0sMkJBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUU1QyxVQUFVLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxTQUFTLEdBQUcsYUFBYSxDQUFDLENBQUE7SUFDN0QsQ0FBQztDQUFBO0FBRUQsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTcGVjdHJvbk1haW59IGZyb20gXCIuLi8uLi9qcy90ZXN0L1NwZWN0cm9uTWFpblwiO1xuXG5hc3luYyBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICBsZXQgbWFpbldpbmRvdyA9IGF3YWl0IFNwZWN0cm9uTWFpbi5zZXR1cCgpO1xuICAgIC8vbWFpbldpbmRvdy5sb2FkVVJMKFwiaHR0cHM6Ly93d3cuZXhhbXBsZS5jb21cIik7XG4gICAgbWFpbldpbmRvdy5sb2FkVVJMKCdmaWxlOi8vJyArIF9fZGlybmFtZSArICcvaW5kZXguaHRtbCcpXG59XG5cbnN0YXJ0KCkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xuIl19