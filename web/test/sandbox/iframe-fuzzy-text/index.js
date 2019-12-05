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
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        let mainWindow = yield SpectronMain_1.SpectronMain.setup();
        mainWindow.loadURL('file://' + __dirname + '/iframe-fuzzy-text.html');
    });
}
start().catch(err => console.log(err));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLGdFQUEyRDtBQUUzRCxTQUFlLEtBQUs7O1FBQ2hCLElBQUksVUFBVSxHQUFHLE1BQU0sMkJBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUU1QyxVQUFVLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxTQUFTLEdBQUcseUJBQXlCLENBQUMsQ0FBQTtJQUN6RSxDQUFDO0NBQUE7QUFFRCxLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NwZWN0cm9uTWFpbn0gZnJvbSBcIi4uLy4uLy4uL2pzL3Rlc3QvU3BlY3Ryb25NYWluXCI7XG5cbmFzeW5jIGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgIGxldCBtYWluV2luZG93ID0gYXdhaXQgU3BlY3Ryb25NYWluLnNldHVwKCk7XG4gICAgLy9tYWluV2luZG93LmxvYWRVUkwoXCJodHRwczovL3d3dy5leGFtcGxlLmNvbVwiKTtcbiAgICBtYWluV2luZG93LmxvYWRVUkwoJ2ZpbGU6Ly8nICsgX19kaXJuYW1lICsgJy9pZnJhbWUtZnV6enktdGV4dC5odG1sJylcbn1cblxuc3RhcnQoKS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG4iXX0=