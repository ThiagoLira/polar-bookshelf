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
SpectronMain_1.SpectronMain.run((state) => __awaiter(void 0, void 0, void 0, function* () {
    state.window.loadFile(__dirname + '/app.html');
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDZEQUF3RDtBQUV4RCwyQkFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFNLEtBQUssRUFBQyxFQUFFO0lBRTNCLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUMsQ0FBQztBQUVuRCxDQUFDLENBQUEsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTcGVjdHJvbk1haW59IGZyb20gJy4uLy4uL2pzL3Rlc3QvU3BlY3Ryb25NYWluJztcblxuU3BlY3Ryb25NYWluLnJ1bihhc3luYyBzdGF0ZSA9PiB7XG5cbiAgICBzdGF0ZS53aW5kb3cubG9hZEZpbGUoX19kaXJuYW1lICsgJy9hcHAuaHRtbCcpO1xuXG59KTtcblxuIl19