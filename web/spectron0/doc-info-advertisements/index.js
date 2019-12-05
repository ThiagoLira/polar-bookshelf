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
const SpectronMain2_1 = require("../../js/test/SpectronMain2");
const electron_1 = require("electron");
const DocInfoBroadcasterService_1 = require("../../js/datastore/advertiser/DocInfoBroadcasterService");
const BROWSER_OPTIONS = {
    backgroundColor: '#FFF',
    webPreferences: {
        webSecurity: false,
        nodeIntegration: true,
    }
};
SpectronMain2_1.SpectronMain2.create().run((state) => __awaiter(void 0, void 0, void 0, function* () {
    const mainWindow = new electron_1.BrowserWindow(BROWSER_OPTIONS);
    yield state.window.loadURL(`file://${__dirname}/receiving-app.html`);
    yield new DocInfoBroadcasterService_1.DocInfoBroadcasterService().start();
    yield mainWindow.loadURL(`file://${__dirname}/sending-app.html`);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLCtEQUEwRDtBQUMxRCx1Q0FBdUM7QUFDdkMsdUdBQWtHO0FBRWxHLE1BQU0sZUFBZSxHQUFHO0lBQ3BCLGVBQWUsRUFBRSxNQUFNO0lBS3ZCLGNBQWMsRUFBRTtRQUNaLFdBQVcsRUFBRSxLQUFLO1FBQ2xCLGVBQWUsRUFBRSxJQUFJO0tBQ3hCO0NBRUosQ0FBQztBQUVGLDZCQUFhLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQU0sS0FBSyxFQUFDLEVBQUU7SUFFckMsTUFBTSxVQUFVLEdBQUcsSUFBSSx3QkFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBRXRELE1BQU0sS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxTQUFTLHFCQUFxQixDQUFDLENBQUM7SUFFckUsTUFBTSxJQUFJLHFEQUF5QixFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7SUFFOUMsTUFBTSxVQUFVLENBQUMsT0FBTyxDQUFDLFVBQVUsU0FBUyxtQkFBbUIsQ0FBQyxDQUFDO0FBRXJFLENBQUMsQ0FBQSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NwZWN0cm9uTWFpbjJ9IGZyb20gJy4uLy4uL2pzL3Rlc3QvU3BlY3Ryb25NYWluMic7XG5pbXBvcnQge0Jyb3dzZXJXaW5kb3d9IGZyb20gXCJlbGVjdHJvblwiO1xuaW1wb3J0IHtEb2NJbmZvQnJvYWRjYXN0ZXJTZXJ2aWNlfSBmcm9tICcuLi8uLi9qcy9kYXRhc3RvcmUvYWR2ZXJ0aXNlci9Eb2NJbmZvQnJvYWRjYXN0ZXJTZXJ2aWNlJztcblxuY29uc3QgQlJPV1NFUl9PUFRJT05TID0ge1xuICAgIGJhY2tncm91bmRDb2xvcjogJyNGRkYnLFxuXG4gICAgLy8gTk9URTogdGhlIGRlZmF1bHQgd2lkdGggYW5kIGhlaWdodCBzaG91bGRuJ3QgYmUgY2hhbmdlZCBoZXJlIGFzIGl0IGNhblxuICAgIC8vIGJyZWFrIHVuaXQgdGVzdHMuXG5cbiAgICB3ZWJQcmVmZXJlbmNlczoge1xuICAgICAgICB3ZWJTZWN1cml0eTogZmFsc2UsXG4gICAgICAgIG5vZGVJbnRlZ3JhdGlvbjogdHJ1ZSxcbiAgICB9XG5cbn07XG5cblNwZWN0cm9uTWFpbjIuY3JlYXRlKCkucnVuKGFzeW5jIHN0YXRlID0+IHtcblxuICAgIGNvbnN0IG1haW5XaW5kb3cgPSBuZXcgQnJvd3NlcldpbmRvdyhCUk9XU0VSX09QVElPTlMpO1xuXG4gICAgYXdhaXQgc3RhdGUud2luZG93LmxvYWRVUkwoYGZpbGU6Ly8ke19fZGlybmFtZX0vcmVjZWl2aW5nLWFwcC5odG1sYCk7XG5cbiAgICBhd2FpdCBuZXcgRG9jSW5mb0Jyb2FkY2FzdGVyU2VydmljZSgpLnN0YXJ0KCk7XG5cbiAgICBhd2FpdCBtYWluV2luZG93LmxvYWRVUkwoYGZpbGU6Ly8ke19fZGlybmFtZX0vc2VuZGluZy1hcHAuaHRtbGApO1xuXG59KTtcbiJdfQ==