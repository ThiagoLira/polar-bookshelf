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
class IPCMainPromises {
    static once(channel) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => {
                electron_1.ipcMain.once(channel, (event, message) => {
                    resolve(new MainIPCEvent(event, message));
                });
            });
        });
    }
    static on(channel, listener) {
        electron_1.ipcMain.on(channel, (event, message) => {
            listener(new MainIPCEvent(event, message));
        });
    }
}
exports.IPCMainPromises = IPCMainPromises;
class MainIPCEvent {
    constructor(event, message) {
        this.event = event;
        this.message = message;
    }
}
exports.MainIPCEvent = MainIPCEvent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSVBDTWFpblByb21pc2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiSVBDTWFpblByb21pc2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsdUNBQWlDO0FBRWpDLE1BQWEsZUFBZTtJQUVqQixNQUFNLENBQU8sSUFBSSxDQUFJLE9BQWU7O1lBRXZDLE9BQU8sSUFBSSxPQUFPLENBQWtCLENBQUMsT0FBTyxFQUFFLEVBQUU7Z0JBRTVDLGtCQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQXFCLEVBQUUsT0FBVSxFQUFFLEVBQUU7b0JBQ3hELE9BQU8sQ0FBQyxJQUFJLFlBQVksQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDOUMsQ0FBQyxDQUFDLENBQUM7WUFFUCxDQUFDLENBQUMsQ0FBQztRQUVQLENBQUM7S0FBQTtJQUNNLE1BQU0sQ0FBQyxFQUFFLENBQUksT0FBZSxFQUFFLFFBQWlDO1FBRWxFLGtCQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQXFCLEVBQUUsT0FBVSxFQUFFLEVBQUU7WUFDdEQsUUFBUSxDQUFDLElBQUksWUFBWSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQy9DLENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQztDQUdKO0FBdEJELDBDQXNCQztBQU1ELE1BQWEsWUFBWTtJQUtyQixZQUFZLEtBQVUsRUFBRSxPQUFVO1FBQzlCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQzNCLENBQUM7Q0FFSjtBQVZELG9DQVVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpcGNNYWlufSBmcm9tICdlbGVjdHJvbic7XG5cbmV4cG9ydCBjbGFzcyBJUENNYWluUHJvbWlzZXMge1xuXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBvbmNlPE0+KGNoYW5uZWw6IHN0cmluZyk6IFByb21pc2U8TWFpbklQQ0V2ZW50PE0+PiB7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPE1haW5JUENFdmVudDxNPj4oKHJlc29sdmUpID0+IHtcblxuICAgICAgICAgICAgaXBjTWFpbi5vbmNlKGNoYW5uZWwsIChldmVudDogRWxlY3Ryb24uRXZlbnQsIG1lc3NhZ2U6IE0pID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKG5ldyBNYWluSVBDRXZlbnQoZXZlbnQsIG1lc3NhZ2UpKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0pO1xuXG4gICAgfVxuICAgIHB1YmxpYyBzdGF0aWMgb248TT4oY2hhbm5lbDogc3RyaW5nLCBsaXN0ZW5lcjogTWFpbklQQ0V2ZW50TGlzdGVuZXI8TT4pIHtcblxuICAgICAgICBpcGNNYWluLm9uKGNoYW5uZWwsIChldmVudDogRWxlY3Ryb24uRXZlbnQsIG1lc3NhZ2U6IE0pID0+IHtcbiAgICAgICAgICAgIGxpc3RlbmVyKG5ldyBNYWluSVBDRXZlbnQoZXZlbnQsIG1lc3NhZ2UpKTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1haW5JUENFdmVudExpc3RlbmVyPE0+IHtcbiAgICAoZXZlbnQ6IE1haW5JUENFdmVudDxNPik6IHZvaWQ7XG59XG5cbmV4cG9ydCBjbGFzcyBNYWluSVBDRXZlbnQ8TT4ge1xuXG4gICAgcHVibGljIHJlYWRvbmx5IGV2ZW50OiBFbGVjdHJvbi5FdmVudDtcbiAgICBwdWJsaWMgcmVhZG9ubHkgbWVzc2FnZTogTTtcblxuICAgIGNvbnN0cnVjdG9yKGV2ZW50OiBhbnksIG1lc3NhZ2U6IE0pIHtcbiAgICAgICAgdGhpcy5ldmVudCA9IGV2ZW50O1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIH1cblxufVxuIl19