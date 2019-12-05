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
const SpectronRenderer_1 = require("../../../js/test/SpectronRenderer");
SpectronRenderer_1.SpectronRenderer.run(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Running within SpectronRenderer now.");
    electron_1.ipcRenderer.on('what-is-your-name', (event, message) => {
        console.log("Received event and message: ", { event, message });
        event.sender.send('and-what-is-your-name', 'my name is ipcRenderer');
    });
    electron_1.ipcRenderer.on('oh-my-name-is', (event, message) => {
        console.log("Received event and message: ", { event, message });
    });
    electron_1.ipcRenderer.send('hello', 'this is the message');
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsdUNBQXFDO0FBQ3JDLHdFQUFtRTtBQUVuRSxtQ0FBZ0IsQ0FBQyxHQUFHLENBQUMsR0FBUyxFQUFFO0lBRTVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0NBQXNDLENBQUMsQ0FBQztJQUVwRCxzQkFBVyxDQUFDLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLEtBQXFCLEVBQUUsT0FBWSxFQUFFLEVBQUU7UUFDeEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsRUFBRSxFQUFDLEtBQUssRUFBRSxPQUFPLEVBQUMsQ0FBQyxDQUFDO1FBRTlELEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHVCQUF1QixFQUFFLHdCQUF3QixDQUFDLENBQUM7SUFFekUsQ0FBQyxDQUFDLENBQUM7SUFFSCxzQkFBVyxDQUFDLEVBQUUsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxLQUFxQixFQUFFLE9BQVksRUFBRSxFQUFFO1FBQ3BFLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLEVBQUUsRUFBQyxLQUFLLEVBQUUsT0FBTyxFQUFDLENBQUMsQ0FBQztJQUNsRSxDQUFDLENBQUMsQ0FBQztJQUVILHNCQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO0FBRXJELENBQUMsQ0FBQSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2lwY1JlbmRlcmVyfSBmcm9tICdlbGVjdHJvbic7XG5pbXBvcnQge1NwZWN0cm9uUmVuZGVyZXJ9IGZyb20gJy4uLy4uLy4uL2pzL3Rlc3QvU3BlY3Ryb25SZW5kZXJlcic7XG5cblNwZWN0cm9uUmVuZGVyZXIucnVuKGFzeW5jICgpID0+IHtcblxuICAgIGNvbnNvbGUubG9nKFwiUnVubmluZyB3aXRoaW4gU3BlY3Ryb25SZW5kZXJlciBub3cuXCIpO1xuXG4gICAgaXBjUmVuZGVyZXIub24oJ3doYXQtaXMteW91ci1uYW1lJywgKGV2ZW50OiBFbGVjdHJvbi5FdmVudCwgbWVzc2FnZTogYW55KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUmVjZWl2ZWQgZXZlbnQgYW5kIG1lc3NhZ2U6IFwiLCB7ZXZlbnQsIG1lc3NhZ2V9KTtcblxuICAgICAgICBldmVudC5zZW5kZXIuc2VuZCgnYW5kLXdoYXQtaXMteW91ci1uYW1lJywgJ215IG5hbWUgaXMgaXBjUmVuZGVyZXInKTtcblxuICAgIH0pO1xuXG4gICAgaXBjUmVuZGVyZXIub24oJ29oLW15LW5hbWUtaXMnLCAoZXZlbnQ6IEVsZWN0cm9uLkV2ZW50LCBtZXNzYWdlOiBhbnkpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJSZWNlaXZlZCBldmVudCBhbmQgbWVzc2FnZTogXCIsIHtldmVudCwgbWVzc2FnZX0pO1xuICAgIH0pO1xuXG4gICAgaXBjUmVuZGVyZXIuc2VuZCgnaGVsbG8nLCAndGhpcyBpcyB0aGUgbWVzc2FnZScpO1xuXG59KTtcbiJdfQ==