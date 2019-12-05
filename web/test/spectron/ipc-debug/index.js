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
SpectronMain_1.SpectronMain.run((state) => __awaiter(void 0, void 0, void 0, function* () {
    state.window.loadFile(__dirname + '/app.html');
    electron_1.ipcMain.on('hello', (event, message) => {
        console.log("Received event and message: ", { event, message });
        event.sender.send('what-is-your-name', 'this is a response message from ipcMain');
    });
    electron_1.ipcMain.on('and-what-is-your-name', (event, message) => {
        console.log("Received event and message: ", { event, message });
        event.sender.send('oh-my-name-is', 'oh, yeah. my name is ipcMain');
    });
    yield state.testResultWriter.write(true);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUMzRCx1Q0FBaUM7QUFFakMsMkJBQVksQ0FBQyxHQUFHLENBQUMsQ0FBTSxLQUFLLEVBQUMsRUFBRTtJQUUzQixLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDLENBQUM7SUFFL0Msa0JBQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBcUIsRUFBRSxPQUFZLEVBQUUsRUFBRTtRQUN4RCxPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixFQUFFLEVBQUMsS0FBSyxFQUFFLE9BQU8sRUFBQyxDQUFDLENBQUM7UUFDOUQsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUseUNBQXlDLENBQUMsQ0FBQztJQUN0RixDQUFDLENBQUMsQ0FBQztJQUVILGtCQUFPLENBQUMsRUFBRSxDQUFDLHVCQUF1QixFQUFFLENBQUMsS0FBcUIsRUFBRSxPQUFZLEVBQUUsRUFBRTtRQUN4RSxPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixFQUFFLEVBQUMsS0FBSyxFQUFFLE9BQU8sRUFBQyxDQUFDLENBQUM7UUFDOUQsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLDhCQUE4QixDQUFDLENBQUM7SUFDdkUsQ0FBQyxDQUFDLENBQUM7SUFFSCxNQUFNLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFN0MsQ0FBQyxDQUFBLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U3BlY3Ryb25NYWlufSBmcm9tICcuLi8uLi8uLi9qcy90ZXN0L1NwZWN0cm9uTWFpbic7XG5pbXBvcnQge2lwY01haW59IGZyb20gXCJlbGVjdHJvblwiO1xuXG5TcGVjdHJvbk1haW4ucnVuKGFzeW5jIHN0YXRlID0+IHtcblxuICAgIHN0YXRlLndpbmRvdy5sb2FkRmlsZShfX2Rpcm5hbWUgKyAnL2FwcC5odG1sJyk7XG5cbiAgICBpcGNNYWluLm9uKCdoZWxsbycsIChldmVudDogRWxlY3Ryb24uRXZlbnQsIG1lc3NhZ2U6IGFueSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlJlY2VpdmVkIGV2ZW50IGFuZCBtZXNzYWdlOiBcIiwge2V2ZW50LCBtZXNzYWdlfSk7XG4gICAgICAgIGV2ZW50LnNlbmRlci5zZW5kKCd3aGF0LWlzLXlvdXItbmFtZScsICd0aGlzIGlzIGEgcmVzcG9uc2UgbWVzc2FnZSBmcm9tIGlwY01haW4nKTtcbiAgICB9KTtcblxuICAgIGlwY01haW4ub24oJ2FuZC13aGF0LWlzLXlvdXItbmFtZScsIChldmVudDogRWxlY3Ryb24uRXZlbnQsIG1lc3NhZ2U6IGFueSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlJlY2VpdmVkIGV2ZW50IGFuZCBtZXNzYWdlOiBcIiwge2V2ZW50LCBtZXNzYWdlfSk7XG4gICAgICAgIGV2ZW50LnNlbmRlci5zZW5kKCdvaC1teS1uYW1lLWlzJywgJ29oLCB5ZWFoLiBteSBuYW1lIGlzIGlwY01haW4nKTtcbiAgICB9KTtcblxuICAgIGF3YWl0IHN0YXRlLnRlc3RSZXN1bHRXcml0ZXIud3JpdGUodHJ1ZSk7XG5cbn0pO1xuIl19