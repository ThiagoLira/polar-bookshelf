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
const MainTestResultWriter_1 = require("./results/writer/MainTestResultWriter");
const SpectronBrowserWindowOptions_1 = require("./SpectronBrowserWindowOptions");
class SpectronMain {
    static setup(options) {
        return new Promise(resolve => {
            console.log("Electron app started. Waiting for it to be ready.");
            electron_1.app.on('ready', function () {
                return __awaiter(this, void 0, void 0, function* () {
                    console.log("Ready!  Creating main window!!");
                    let windowFactory = () => __awaiter(this, void 0, void 0, function* () {
                        const result = new electron_1.BrowserWindow(SpectronBrowserWindowOptions_1.SpectronBrowserWindowOptions.create());
                        yield result.loadURL('about:blank');
                        return result;
                    });
                    if (options && options.windowFactory) {
                        windowFactory = options.windowFactory;
                    }
                    const mainWindow = yield windowFactory();
                    console.log("Done.. resolving");
                    resolve(mainWindow);
                });
            });
        });
    }
    static start(callback, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const window = yield SpectronMain.setup(options);
            const testResultWriter = new MainTestResultWriter_1.MainTestResultWriter(window);
            return callback(new SpectronMainState(window, testResultWriter));
        });
    }
    static run(callback, options) {
        SpectronMain.start(callback, options)
            .catch(err => console.log("Caught error running spectron: ", err));
    }
}
exports.SpectronMain = SpectronMain;
class SpectronMainState {
    constructor(window, testResultWriter) {
        this.window = window;
        this.testResultWriter = testResultWriter;
    }
}
exports.SpectronMainState = SpectronMainState;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3BlY3Ryb25NYWluLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiU3BlY3Ryb25NYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsdUNBQTRDO0FBQzVDLGdGQUEyRTtBQUMzRSxpRkFBNEU7QUFLNUUsTUFBYSxZQUFZO0lBRWQsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUE2QjtRQUU3QyxPQUFPLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBRXpCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbURBQW1ELENBQUMsQ0FBQztZQUVqRSxjQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRTs7b0JBRVosT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO29CQUU5QyxJQUFJLGFBQWEsR0FBa0IsR0FBUyxFQUFFO3dCQUMxQyxNQUFNLE1BQU0sR0FBRyxJQUFJLHdCQUFhLENBQUMsMkRBQTRCLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQzt3QkFDeEUsTUFBTSxNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFBO3dCQUNuQyxPQUFPLE1BQU0sQ0FBQztvQkFDbEIsQ0FBQyxDQUFBLENBQUM7b0JBRUYsSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLGFBQWEsRUFBRTt3QkFDbEMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUM7cUJBQ3pDO29CQUVELE1BQU0sVUFBVSxHQUFHLE1BQU0sYUFBYSxFQUFFLENBQUM7b0JBRXpDLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztvQkFDaEMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUV4QixDQUFDO2FBQUEsQ0FBQyxDQUFDO1FBRVAsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDO0lBRU0sTUFBTSxDQUFPLEtBQUssQ0FBQyxRQUF1QixFQUFFLE9BQTZCOztZQUU1RSxNQUFNLE1BQU0sR0FBRyxNQUFNLFlBQVksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDakQsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLDJDQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRTFELE9BQU8sUUFBUSxDQUFDLElBQUksaUJBQWlCLENBQUMsTUFBTSxFQUFFLGdCQUFnQixDQUFDLENBQUMsQ0FBQztRQUVyRSxDQUFDO0tBQUE7SUFNTSxNQUFNLENBQUMsR0FBRyxDQUFDLFFBQXVCLEVBQUUsT0FBNkI7UUFDcEUsWUFBWSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDO2FBQ2hDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUNBQWlDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMzRSxDQUFDO0NBR0o7QUFwREQsb0NBb0RDO0FBRUQsTUFBYSxpQkFBaUI7SUFNMUIsWUFBWSxNQUE4QixFQUFFLGdCQUFzQztRQUM5RSxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUM7SUFDN0MsQ0FBQztDQUVKO0FBWEQsOENBV0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2FwcCwgQnJvd3NlcldpbmRvd30gZnJvbSAnZWxlY3Ryb24nO1xuaW1wb3J0IHtNYWluVGVzdFJlc3VsdFdyaXRlcn0gZnJvbSAnLi9yZXN1bHRzL3dyaXRlci9NYWluVGVzdFJlc3VsdFdyaXRlcic7XG5pbXBvcnQge1NwZWN0cm9uQnJvd3NlcldpbmRvd09wdGlvbnN9IGZyb20gJy4vU3BlY3Ryb25Ccm93c2VyV2luZG93T3B0aW9ucyc7XG5cbi8qKlxuICogQ29kZSBmb3IgcmVsaWFibHkgd29ya2luZyB3aXRoIHRoZSBtYWluIHByb2Nlc3MgaW4gU3BlY3Ryb24uXG4gKi9cbmV4cG9ydCBjbGFzcyBTcGVjdHJvbk1haW4ge1xuXG4gICAgcHVibGljIHN0YXRpYyBzZXR1cChvcHRpb25zPzogU3BlY3Ryb25NYWluT3B0aW9ucyk6IFByb21pc2U8RWxlY3Ryb24uQnJvd3NlcldpbmRvdz4ge1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFbGVjdHJvbiBhcHAgc3RhcnRlZC4gV2FpdGluZyBmb3IgaXQgdG8gYmUgcmVhZHkuXCIpO1xuXG4gICAgICAgICAgICBhcHAub24oJ3JlYWR5JywgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlYWR5ISAgQ3JlYXRpbmcgbWFpbiB3aW5kb3chIVwiKTtcblxuICAgICAgICAgICAgICAgIGxldCB3aW5kb3dGYWN0b3J5OiBXaW5kb3dGYWN0b3J5ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgQnJvd3NlcldpbmRvdyhTcGVjdHJvbkJyb3dzZXJXaW5kb3dPcHRpb25zLmNyZWF0ZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgcmVzdWx0LmxvYWRVUkwoJ2Fib3V0OmJsYW5rJylcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy53aW5kb3dGYWN0b3J5KSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvd0ZhY3RvcnkgPSBvcHRpb25zLndpbmRvd0ZhY3Rvcnk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgbWFpbldpbmRvdyA9IGF3YWl0IHdpbmRvd0ZhY3RvcnkoKTtcblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRG9uZS4uIHJlc29sdmluZ1wiKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKG1haW5XaW5kb3cpO1xuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgc3RhcnQoY2FsbGJhY2s6IFN0YXRlQ2FsbGJhY2ssIG9wdGlvbnM/OiBTcGVjdHJvbk1haW5PcHRpb25zKTogUHJvbWlzZTx2b2lkPiB7XG5cbiAgICAgICAgY29uc3Qgd2luZG93ID0gYXdhaXQgU3BlY3Ryb25NYWluLnNldHVwKG9wdGlvbnMpO1xuICAgICAgICBjb25zdCB0ZXN0UmVzdWx0V3JpdGVyID0gbmV3IE1haW5UZXN0UmVzdWx0V3JpdGVyKHdpbmRvdyk7XG5cbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKG5ldyBTcGVjdHJvbk1haW5TdGF0ZSh3aW5kb3csIHRlc3RSZXN1bHRXcml0ZXIpKTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExpa2Ugc3RhcnQgYnV0IG5vdCBhc3luYyBhbmQgYXNzdW1lIHRoaXMgaXMgdGhlIGVudHJ5IHBvaW50IG9mIHlvdXIgdGVzdFxuICAgICAqIGFuZCBqdXN0IHByaW50IGVycm9yIG1lc3NhZ2VzIHRvIHRoZSBjb25zb2xlLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcnVuKGNhbGxiYWNrOiBTdGF0ZUNhbGxiYWNrLCBvcHRpb25zPzogU3BlY3Ryb25NYWluT3B0aW9ucykge1xuICAgICAgICBTcGVjdHJvbk1haW4uc3RhcnQoY2FsbGJhY2ssIG9wdGlvbnMpXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKFwiQ2F1Z2h0IGVycm9yIHJ1bm5pbmcgc3BlY3Ryb246IFwiLCBlcnIpKTtcbiAgICB9XG5cblxufVxuXG5leHBvcnQgY2xhc3MgU3BlY3Ryb25NYWluU3RhdGUge1xuXG4gICAgcHVibGljIHJlYWRvbmx5IHdpbmRvdzogQnJvd3NlcldpbmRvdztcblxuICAgIHB1YmxpYyByZWFkb25seSB0ZXN0UmVzdWx0V3JpdGVyOiBNYWluVGVzdFJlc3VsdFdyaXRlcjtcblxuICAgIGNvbnN0cnVjdG9yKHdpbmRvdzogRWxlY3Ryb24uQnJvd3NlcldpbmRvdywgdGVzdFJlc3VsdFdyaXRlcjogTWFpblRlc3RSZXN1bHRXcml0ZXIpIHtcbiAgICAgICAgdGhpcy53aW5kb3cgPSB3aW5kb3c7XG4gICAgICAgIHRoaXMudGVzdFJlc3VsdFdyaXRlciA9IHRlc3RSZXN1bHRXcml0ZXI7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3BlY3Ryb25NYWluT3B0aW9ucyB7XG5cbiAgICByZWFkb25seSB3aW5kb3dGYWN0b3J5PzogV2luZG93RmFjdG9yeTtcblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlQ2FsbGJhY2sge1xuICAgIChzdGF0ZTogU3BlY3Ryb25NYWluU3RhdGUpOiBQcm9taXNlPHZvaWQ+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFdpbmRvd0ZhY3Rvcnkge1xuICAgICgpOiBQcm9taXNlPEJyb3dzZXJXaW5kb3c+O1xufVxuXG4iXX0=