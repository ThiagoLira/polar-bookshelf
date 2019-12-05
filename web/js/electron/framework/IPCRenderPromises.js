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
class IPCRendererPromises {
    static once(channel) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => {
                electron_1.ipcRenderer.once(channel, (event, message) => {
                    resolve(new RendererEvent(event, message));
                });
            });
        });
    }
}
exports.IPCRendererPromises = IPCRendererPromises;
class RendererEvent {
    constructor(event, message) {
        this.event = event;
        this.message = message;
    }
}
exports.RendererEvent = RendererEvent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSVBDUmVuZGVyUHJvbWlzZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJJUENSZW5kZXJQcm9taXNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHVDQUFxQztBQUVyQyxNQUFhLG1CQUFtQjtJQUVyQixNQUFNLENBQU8sSUFBSSxDQUFDLE9BQWU7O1lBRXBDLE9BQU8sSUFBSSxPQUFPLENBQWdCLENBQUMsT0FBTyxFQUFFLEVBQUU7Z0JBRTFDLHNCQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQVUsRUFBRSxPQUFZLEVBQUUsRUFBRTtvQkFDbkQsT0FBTyxDQUFDLElBQUksYUFBYSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUMvQyxDQUFDLENBQUMsQ0FBQztZQUVQLENBQUMsQ0FBQyxDQUFDO1FBRVAsQ0FBQztLQUFBO0NBRUo7QUFkRCxrREFjQztBQUVELE1BQWEsYUFBYTtJQUt0QixZQUFZLEtBQVUsRUFBRSxPQUFZO1FBQ2hDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQzNCLENBQUM7Q0FFSjtBQVZELHNDQVVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpcGNSZW5kZXJlcn0gZnJvbSAnZWxlY3Ryb24nO1xuXG5leHBvcnQgY2xhc3MgSVBDUmVuZGVyZXJQcm9taXNlcyB7XG5cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIG9uY2UoY2hhbm5lbDogc3RyaW5nKTogUHJvbWlzZTxSZW5kZXJlckV2ZW50PiB7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPFJlbmRlcmVyRXZlbnQ+KChyZXNvbHZlKSA9PiB7XG5cbiAgICAgICAgICAgIGlwY1JlbmRlcmVyLm9uY2UoY2hhbm5lbCwgKGV2ZW50OiBhbnksIG1lc3NhZ2U6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc29sdmUobmV3IFJlbmRlcmVyRXZlbnQoZXZlbnQsIG1lc3NhZ2UpKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBjbGFzcyBSZW5kZXJlckV2ZW50IHtcblxuICAgIHB1YmxpYyByZWFkb25seSBldmVudDogYW55O1xuICAgIHB1YmxpYyByZWFkb25seSBtZXNzYWdlOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvcihldmVudDogYW55LCBtZXNzYWdlOiBhbnkpIHtcbiAgICAgICAgdGhpcy5ldmVudCA9IGV2ZW50O1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIH1cblxufVxuIl19