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
const Logger_1 = require("polar-shared/src/logger/Logger");
const SpectronBrowserWindowOptions_1 = require("./SpectronBrowserWindowOptions");
const Preconditions_1 = require("polar-shared/src/Preconditions");
const log = Logger_1.Logger.create();
class SpectronMain2 {
    constructor(options) {
        this.options = options;
    }
    createWindow() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.options.windowFactory();
        });
    }
    setup() {
        Preconditions_1.Preconditions.assertPresent(electron_1.app, "No app");
        return new Promise(resolve => {
            electron_1.app.on('ready', () => __awaiter(this, void 0, void 0, function* () {
                log.info("Ready!  Creating main window!!");
                const mainWindow = yield this.options.windowFactory();
                log.info("Done.. resolving");
                resolve(mainWindow);
            }));
        });
    }
    start(callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const window = yield this.setup();
            const testResultWriter = new MainTestResultWriter_1.MainTestResultWriter(window);
            return callback(new SpectronMainState(this, window, testResultWriter));
        });
    }
    run(callback) {
        this.start(callback)
            .catch(err => log.error("Could not run spectron:", err));
    }
    static create(options = new SpectronMainOptions().build()) {
        return new SpectronMain2(options);
    }
}
exports.SpectronMain2 = SpectronMain2;
function defaultWindowFactory() {
    return __awaiter(this, void 0, void 0, function* () {
        const options = SpectronBrowserWindowOptions_1.SpectronBrowserWindowOptions.create();
        console.log("Creating window with options: ", options);
        const mainWindow = new electron_1.BrowserWindow(options);
        yield mainWindow.loadURL('about:blank');
        return mainWindow;
    });
}
class SpectronMainState {
    constructor(spectronMain, window, testResultWriter) {
        this.spectronMain = spectronMain;
        this.window = window;
        this.testResultWriter = testResultWriter;
    }
    createWindow() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.spectronMain.createWindow();
        });
    }
}
exports.SpectronMainState = SpectronMainState;
class SpectronMainOptions {
    constructor() {
        this.windowFactory = defaultWindowFactory;
        this.enableDevTools = false;
    }
    build() {
        return Object.freeze(this);
    }
}
exports.SpectronMainOptions = SpectronMainOptions;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3BlY3Ryb25NYWluMi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlNwZWN0cm9uTWFpbjIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBNEM7QUFDNUMsZ0ZBQTJFO0FBQzNFLDJEQUFzRDtBQUN0RCxpRkFBNEU7QUFDNUUsa0VBQTZEO0FBRTdELE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQU01QixNQUFhLGFBQWE7SUFJdEIsWUFBb0IsT0FBdUM7UUFDdkQsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDM0IsQ0FBQztJQUtZLFlBQVk7O1lBQ3JCLE9BQU8sTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQzlDLENBQUM7S0FBQTtJQUVNLEtBQUs7UUFFUiw2QkFBYSxDQUFDLGFBQWEsQ0FBQyxjQUFHLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFM0MsT0FBTyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUV6QixjQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFTLEVBQUU7Z0JBRXZCLEdBQUcsQ0FBQyxJQUFJLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztnQkFFM0MsTUFBTSxVQUFVLEdBQUcsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUV0RCxHQUFHLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7Z0JBQzdCLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUV4QixDQUFDLENBQUEsQ0FBQyxDQUFDO1FBRVAsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDO0lBRVksS0FBSyxDQUFDLFFBQXVCOztZQUN0QyxNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNsQyxNQUFNLGdCQUFnQixHQUFHLElBQUksMkNBQW9CLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFMUQsT0FBTyxRQUFRLENBQUMsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLGdCQUFnQixDQUFDLENBQUMsQ0FBQztRQUUzRSxDQUFDO0tBQUE7SUFNTSxHQUFHLENBQUMsUUFBdUI7UUFDOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7YUFDZixLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLHlCQUF5QixFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVNLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBZ0MsSUFBSSxtQkFBbUIsRUFBRSxDQUFDLEtBQUssRUFBRTtRQUNsRixPQUFPLElBQUksYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Q0FFSjtBQXpERCxzQ0F5REM7QUFFRCxTQUFlLG9CQUFvQjs7UUFDL0IsTUFBTSxPQUFPLEdBQUcsMkRBQTRCLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDdEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUV2RCxNQUFNLFVBQVUsR0FBRyxJQUFJLHdCQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFOUMsTUFBTSxVQUFVLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRXhDLE9BQU8sVUFBVSxDQUFDO0lBQ3RCLENBQUM7Q0FBQTtBQUVELE1BQWEsaUJBQWlCO0lBUTFCLFlBQVksWUFBMkIsRUFBRSxNQUFxQixFQUFFLGdCQUFzQztRQUNsRyxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUNqQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUM7SUFDN0MsQ0FBQztJQUtZLFlBQVk7O1lBQ3JCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUM1QyxDQUFDO0tBQUE7Q0FFSjtBQXJCRCw4Q0FxQkM7QUFFRCxNQUFhLG1CQUFtQjtJQUFoQztRQUVXLGtCQUFhLEdBQWtCLG9CQUFvQixDQUFDO1FBTXBELG1CQUFjLEdBQUcsS0FBSyxDQUFDO0lBTWxDLENBQUM7SUFKVSxLQUFLO1FBQ1IsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9CLENBQUM7Q0FFSjtBQWRELGtEQWNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthcHAsIEJyb3dzZXJXaW5kb3d9IGZyb20gJ2VsZWN0cm9uJztcbmltcG9ydCB7TWFpblRlc3RSZXN1bHRXcml0ZXJ9IGZyb20gJy4vcmVzdWx0cy93cml0ZXIvTWFpblRlc3RSZXN1bHRXcml0ZXInO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge1NwZWN0cm9uQnJvd3NlcldpbmRvd09wdGlvbnN9IGZyb20gJy4vU3BlY3Ryb25Ccm93c2VyV2luZG93T3B0aW9ucyc7XG5pbXBvcnQge1ByZWNvbmRpdGlvbnN9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvUHJlY29uZGl0aW9ucyc7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuLyoqXG4gKiBDb2RlIGZvciByZWxpYWJseSB3b3JraW5nIHdpdGggdGhlIG1haW4gcHJvY2VzcyBpbiBTcGVjdHJvbi4gIFdhaXRzIGZvciBhcHBcbiAqICdyZWFkeScsIHNldHMgdXAgd2luZG93cywgZXRjLlxuICovXG5leHBvcnQgY2xhc3MgU3BlY3Ryb25NYWluMiB7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IG9wdGlvbnM6IFJlYWRvbmx5PElTcGVjdHJvbk1haW5PcHRpb25zPjtcblxuICAgIHByaXZhdGUgY29uc3RydWN0b3Iob3B0aW9uczogUmVhZG9ubHk8SVNwZWN0cm9uTWFpbk9wdGlvbnM+KSB7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgd2luZG93IHVzaW5nIHRoZSBjdXJyZW50IHdpbmRvdyBjb25zdHJ1Y3RvciBmdW5jdGlvbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgYXN5bmMgY3JlYXRlV2luZG93KCk6IFByb21pc2U8QnJvd3NlcldpbmRvdz4ge1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5vcHRpb25zLndpbmRvd0ZhY3RvcnkoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0dXAoKTogUHJvbWlzZTxCcm93c2VyV2luZG93PiB7XG5cbiAgICAgICAgUHJlY29uZGl0aW9ucy5hc3NlcnRQcmVzZW50KGFwcCwgXCJObyBhcHBcIik7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuXG4gICAgICAgICAgICBhcHAub24oJ3JlYWR5JywgYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgbG9nLmluZm8oXCJSZWFkeSEgIENyZWF0aW5nIG1haW4gd2luZG93ISFcIik7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBtYWluV2luZG93ID0gYXdhaXQgdGhpcy5vcHRpb25zLndpbmRvd0ZhY3RvcnkoKTtcblxuICAgICAgICAgICAgICAgIGxvZy5pbmZvKFwiRG9uZS4uIHJlc29sdmluZ1wiKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKG1haW5XaW5kb3cpO1xuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBzdGFydChjYWxsYmFjazogU3RhdGVDYWxsYmFjayk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBjb25zdCB3aW5kb3cgPSBhd2FpdCB0aGlzLnNldHVwKCk7XG4gICAgICAgIGNvbnN0IHRlc3RSZXN1bHRXcml0ZXIgPSBuZXcgTWFpblRlc3RSZXN1bHRXcml0ZXIod2luZG93KTtcblxuICAgICAgICByZXR1cm4gY2FsbGJhY2sobmV3IFNwZWN0cm9uTWFpblN0YXRlKHRoaXMsIHdpbmRvdywgdGVzdFJlc3VsdFdyaXRlcikpO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTGlrZSBzdGFydCBidXQgbm90IGFzeW5jIGFuZCBhc3N1bWUgdGhpcyBpcyB0aGUgZW50cnkgcG9pbnQgb2YgeW91ciB0ZXN0XG4gICAgICogYW5kIGp1c3QgcHJpbnQgZXJyb3IgbWVzc2FnZXMgdG8gdGhlIGNvbnNvbGUuXG4gICAgICovXG4gICAgcHVibGljIHJ1bihjYWxsYmFjazogU3RhdGVDYWxsYmFjaykge1xuICAgICAgICB0aGlzLnN0YXJ0KGNhbGxiYWNrKVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBsb2cuZXJyb3IoXCJDb3VsZCBub3QgcnVuIHNwZWN0cm9uOlwiLCBlcnIpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZShvcHRpb25zOiBJU3BlY3Ryb25NYWluT3B0aW9ucyA9IG5ldyBTcGVjdHJvbk1haW5PcHRpb25zKCkuYnVpbGQoKSkge1xuICAgICAgICByZXR1cm4gbmV3IFNwZWN0cm9uTWFpbjIob3B0aW9ucyk7XG4gICAgfVxuXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGRlZmF1bHRXaW5kb3dGYWN0b3J5KCk6IFByb21pc2U8QnJvd3NlcldpbmRvdz4ge1xuICAgIGNvbnN0IG9wdGlvbnMgPSBTcGVjdHJvbkJyb3dzZXJXaW5kb3dPcHRpb25zLmNyZWF0ZSgpO1xuICAgIGNvbnNvbGUubG9nKFwiQ3JlYXRpbmcgd2luZG93IHdpdGggb3B0aW9uczogXCIsIG9wdGlvbnMpO1xuXG4gICAgY29uc3QgbWFpbldpbmRvdyA9IG5ldyBCcm93c2VyV2luZG93KG9wdGlvbnMpO1xuICAgIC8vIG1haW5XaW5kb3cud2ViQ29udGVudHMudG9nZ2xlRGV2VG9vbHMoKTtcbiAgICBhd2FpdCBtYWluV2luZG93LmxvYWRVUkwoJ2Fib3V0OmJsYW5rJyk7XG5cbiAgICByZXR1cm4gbWFpbldpbmRvdztcbn1cblxuZXhwb3J0IGNsYXNzIFNwZWN0cm9uTWFpblN0YXRlIHtcblxuICAgIHB1YmxpYyByZWFkb25seSBzcGVjdHJvbk1haW46IFNwZWN0cm9uTWFpbjI7XG5cbiAgICBwdWJsaWMgcmVhZG9ubHkgd2luZG93OiBCcm93c2VyV2luZG93O1xuXG4gICAgcHVibGljIHJlYWRvbmx5IHRlc3RSZXN1bHRXcml0ZXI6IE1haW5UZXN0UmVzdWx0V3JpdGVyO1xuXG4gICAgY29uc3RydWN0b3Ioc3BlY3Ryb25NYWluOiBTcGVjdHJvbk1haW4yLCB3aW5kb3c6IEJyb3dzZXJXaW5kb3csIHRlc3RSZXN1bHRXcml0ZXI6IE1haW5UZXN0UmVzdWx0V3JpdGVyKSB7XG4gICAgICAgIHRoaXMuc3BlY3Ryb25NYWluID0gc3BlY3Ryb25NYWluO1xuICAgICAgICB0aGlzLndpbmRvdyA9IHdpbmRvdztcbiAgICAgICAgdGhpcy50ZXN0UmVzdWx0V3JpdGVyID0gdGVzdFJlc3VsdFdyaXRlcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSB3aW5kb3cgd2l0aCB0aGUgc2FtZSBXaW5kb3dGYWN0b3J5IHRoYXQgU3BlY3Ryb25NYWluIGlzIHVzaW5nLlxuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyBjcmVhdGVXaW5kb3coKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNwZWN0cm9uTWFpbi5jcmVhdGVXaW5kb3coKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGNsYXNzIFNwZWN0cm9uTWFpbk9wdGlvbnMgaW1wbGVtZW50cyBJU3BlY3Ryb25NYWluT3B0aW9ucyB7XG5cbiAgICBwdWJsaWMgd2luZG93RmFjdG9yeTogV2luZG93RmFjdG9yeSA9IGRlZmF1bHRXaW5kb3dGYWN0b3J5O1xuXG4gICAgLyoqXG4gICAgICogVHJ1ZSB0byBhdXRvbWF0aWNhbGx5IHN0YXJ0IGRldiB0b29scyBvbiBlYWNoIHdpbmRvdyB3aGVuIHVzaW5nIHRoZVxuICAgICAqIGRlZmF1bHQgd2luZG93IGZhY3RvcnkuXG4gICAgICovXG4gICAgcHVibGljIGVuYWJsZURldlRvb2xzID0gZmFsc2U7XG5cbiAgICBwdWJsaWMgYnVpbGQoKTogUmVhZG9ubHk8U3BlY3Ryb25NYWluT3B0aW9ucz4ge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmZyZWV6ZSh0aGlzKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJU3BlY3Ryb25NYWluT3B0aW9ucyB7XG5cbiAgICB3aW5kb3dGYWN0b3J5OiBXaW5kb3dGYWN0b3J5O1xuXG4gICAgLyoqXG4gICAgICogVHJ1ZSB0byBhdXRvbWF0aWNhbGx5IHN0YXJ0IGRldiB0b29scyBvbiBlYWNoIHdpbmRvdyB3aGVuIHVzaW5nIHRoZVxuICAgICAqIGRlZmF1bHQgd2luZG93IGZhY3RvcnkuXG4gICAgICovXG4gICAgZW5hYmxlRGV2VG9vbHM/OiBib29sZWFuO1xufVxuXG5leHBvcnQgdHlwZSBTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBTcGVjdHJvbk1haW5TdGF0ZSkgPT4gUHJvbWlzZTx2b2lkPjtcblxuZXhwb3J0IHR5cGUgV2luZG93RmFjdG9yeSA9ICgpID0+IFByb21pc2U8QnJvd3NlcldpbmRvdz47XG4iXX0=