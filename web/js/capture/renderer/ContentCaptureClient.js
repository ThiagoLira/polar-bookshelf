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
const Logger_1 = require("polar-shared/src/logger/Logger");
const log = Logger_1.Logger.create();
class ContentCaptureClient {
    constructor(mainWindow) {
        this.mainWindow = mainWindow;
    }
    waitForController() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(resolve => {
                electron_1.ipcMain.once("content-capture", (event, message) => {
                    if (message.type === "started") {
                        resolve();
                    }
                });
            });
        });
    }
    requestNewCapture() {
        return __awaiter(this, void 0, void 0, function* () {
            let result = new Promise((resolve, reject) => {
                electron_1.ipcMain.once("content-capture", (event, message) => {
                    if (message.type === "response") {
                        if (message.result) {
                            resolve(message.result);
                        }
                        else if (message.err) {
                            reject(new Error(message.err));
                        }
                        else {
                            log.error("Invalid message: ", message);
                            reject("Unknown message type");
                        }
                    }
                });
            });
            this.mainWindow.webContents.send("content-capture", { type: "request" });
            return result;
        });
    }
}
exports.ContentCaptureClient = ContentCaptureClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGVudENhcHR1cmVDbGllbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJDb250ZW50Q2FwdHVyZUNsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHVDQUFpQztBQUNqQywyREFBc0Q7QUFHdEQsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBSzVCLE1BQWEsb0JBQW9CO0lBSTdCLFlBQVksVUFBeUI7UUFDakMsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7SUFDakMsQ0FBQztJQU9LLGlCQUFpQjs7WUFFbkIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFFekIsa0JBQU8sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxLQUFVLEVBQUUsT0FBWSxFQUFFLEVBQUU7b0JBRXpELElBQUcsT0FBTyxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7d0JBQzNCLE9BQU8sRUFBRSxDQUFDO3FCQUNiO2dCQUVMLENBQUMsQ0FBQyxDQUFDO1lBRVAsQ0FBQyxDQUFDLENBQUE7UUFFTixDQUFDO0tBQUE7SUFFSyxpQkFBaUI7O1lBRW5CLElBQUksTUFBTSxHQUFHLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO2dCQUV6QyxrQkFBTyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLEtBQVUsRUFBRSxPQUFZLEVBQUUsRUFBRTtvQkFFekQsSUFBRyxPQUFPLENBQUMsSUFBSSxLQUFLLFVBQVUsRUFBRTt3QkFHNUIsSUFBRyxPQUFPLENBQUMsTUFBTSxFQUFFOzRCQUNmLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7eUJBQzNCOzZCQUFNLElBQUcsT0FBTyxDQUFDLEdBQUcsRUFBRTs0QkFDbkIsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO3lCQUNsQzs2QkFBTTs0QkFDSCxHQUFHLENBQUMsS0FBSyxDQUFDLG1CQUFtQixFQUFFLE9BQU8sQ0FBQyxDQUFBOzRCQUN2QyxNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQzt5QkFDbEM7cUJBRUo7Z0JBRUwsQ0FBQyxDQUFDLENBQUM7WUFFUCxDQUFDLENBQUMsQ0FBQztZQUVILElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUMsQ0FBQyxDQUFDO1lBRXZFLE9BQU8sTUFBTSxDQUFDO1FBRWxCLENBQUM7S0FBQTtDQUVKO0FBM0RELG9EQTJEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aXBjTWFpbn0gZnJvbSBcImVsZWN0cm9uXCI7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7QnJvd3NlcldpbmRvd30gZnJvbSBcImVsZWN0cm9uXCI7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuLyoqXG4gKiBDbGllbnQgZm9yIGNvbnRyb2xsaW5nIHRoZSB7QGxpbmsgQ29udGVudENhcHR1cmVDb250cm9sbGVyfS5cbiAqL1xuZXhwb3J0IGNsYXNzIENvbnRlbnRDYXB0dXJlQ2xpZW50IHtcblxuICAgIG1haW5XaW5kb3c6IEVsZWN0cm9uLkJyb3dzZXJXaW5kb3c7XG5cbiAgICBjb25zdHJ1Y3RvcihtYWluV2luZG93OiBCcm93c2VyV2luZG93KSB7XG4gICAgICAgIHRoaXMubWFpbldpbmRvdyA9IG1haW5XaW5kb3c7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV2FpdCB1bnRpbCB0aGUgY29udHJvbGxlciBoYXMgc3RhcnRlZC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8dm9pZD59XG4gICAgICovXG4gICAgYXN5bmMgd2FpdEZvckNvbnRyb2xsZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuXG4gICAgICAgICAgICBpcGNNYWluLm9uY2UoXCJjb250ZW50LWNhcHR1cmVcIiwgKGV2ZW50OiBhbnksIG1lc3NhZ2U6IGFueSkgPT4ge1xuXG4gICAgICAgICAgICAgICAgaWYobWVzc2FnZS50eXBlID09PSBcInN0YXJ0ZWRcIikge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9KVxuXG4gICAgfVxuXG4gICAgYXN5bmMgcmVxdWVzdE5ld0NhcHR1cmUoKTogUHJvbWlzZTxhbnk+IHtcblxuICAgICAgICBsZXQgcmVzdWx0ID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXG4gICAgICAgICAgICBpcGNNYWluLm9uY2UoXCJjb250ZW50LWNhcHR1cmVcIiwgKGV2ZW50OiBhbnksIG1lc3NhZ2U6IGFueSkgPT4ge1xuXG4gICAgICAgICAgICAgICAgaWYobWVzc2FnZS50eXBlID09PSBcInJlc3BvbnNlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gd2UgY2FuIG5vdyB0ZWxsIHNwZWN0cm9uIHdoYXQncyB1cC4uLlxuXG4gICAgICAgICAgICAgICAgICAgIGlmKG1lc3NhZ2UucmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG1lc3NhZ2UucmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKG1lc3NhZ2UuZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKG1lc3NhZ2UuZXJyKSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2cuZXJyb3IoXCJJbnZhbGlkIG1lc3NhZ2U6IFwiLCBtZXNzYWdlKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KFwiVW5rbm93biBtZXNzYWdlIHR5cGVcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5tYWluV2luZG93LndlYkNvbnRlbnRzLnNlbmQoXCJjb250ZW50LWNhcHR1cmVcIiwge3R5cGU6IFwicmVxdWVzdFwifSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcblxuICAgIH1cblxufVxuXG5cblxuIl19