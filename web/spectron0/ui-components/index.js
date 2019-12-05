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
SpectronMain2_1.SpectronMain2.create().run((state) => __awaiter(void 0, void 0, void 0, function* () {
    yield state.window.loadURL(`file://${__dirname}/content.html`);
    state.window.webContents.session.addListener('will-download', (event, downloadItem, downloadWebContents) => {
        console.log("Within download handler");
        downloadItem.setSavePath('/tmp/test.pdf');
    });
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLCtEQUEwRDtBQUcxRCw2QkFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFNLEtBQUssRUFBQyxFQUFFO0lBRXJDLE1BQU0sS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxTQUFTLGVBQWUsQ0FBQyxDQUFDO0lBRS9ELEtBQUssQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsZUFBZSxFQUFFLENBQUMsS0FBWSxFQUNaLFlBQTBCLEVBQzFCLG1CQUFnQyxFQUFFLEVBQUU7UUFFL0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBRXZDLFlBQVksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUM7SUFFOUMsQ0FBQyxDQUFDLENBQUM7QUFLUCxDQUFDLENBQUEsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTcGVjdHJvbk1haW4yfSBmcm9tICcuLi8uLi9qcy90ZXN0L1NwZWN0cm9uTWFpbjInO1xuaW1wb3J0IHtEb3dubG9hZEl0ZW0sIFdlYkNvbnRlbnRzfSBmcm9tIFwiZWxlY3Ryb25cIjtcblxuU3BlY3Ryb25NYWluMi5jcmVhdGUoKS5ydW4oYXN5bmMgc3RhdGUgPT4ge1xuXG4gICAgYXdhaXQgc3RhdGUud2luZG93LmxvYWRVUkwoYGZpbGU6Ly8ke19fZGlybmFtZX0vY29udGVudC5odG1sYCk7XG5cbiAgICBzdGF0ZS53aW5kb3cud2ViQ29udGVudHMuc2Vzc2lvbi5hZGRMaXN0ZW5lcignd2lsbC1kb3dubG9hZCcsIChldmVudDogRXZlbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG93bmxvYWRJdGVtOiBEb3dubG9hZEl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG93bmxvYWRXZWJDb250ZW50czogV2ViQ29udGVudHMpID0+IHtcblxuICAgICAgICBjb25zb2xlLmxvZyhcIldpdGhpbiBkb3dubG9hZCBoYW5kbGVyXCIpO1xuXG4gICAgICAgIGRvd25sb2FkSXRlbS5zZXRTYXZlUGF0aCgnL3RtcC90ZXN0LnBkZicpO1xuXG4gICAgfSk7XG5cblxuICAgIC8vIGF3YWl0IHN0YXRlLnRlc3RSZXN1bHRXcml0ZXIud3JpdGUodHJ1ZSk7XG5cbn0pO1xuXG4iXX0=