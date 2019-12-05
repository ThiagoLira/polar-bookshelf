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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SpectronMain2_1 = require("../../js/test/SpectronMain2");
const MemoryDatastore_1 = require("../../js/datastore/MemoryDatastore");
const Logging_1 = require("../../js/logger/Logging");
const MainApp_1 = require("../../js/apps/main/MainApp");
const BrowserWindowRegistry_1 = require("../../js/electron/framework/BrowserWindowRegistry");
const chai_1 = require("chai");
const wait_for_expect_1 = __importDefault(require("wait-for-expect"));
const Logger_1 = require("polar-shared/src/logger/Logger");
const AppPath_1 = require("../../js/electron/app_path/AppPath");
const FilePaths_1 = require("polar-shared/src/util/FilePaths");
const log = Logger_1.Logger.create();
let mainAppController;
AppPath_1.AppPath.set(FilePaths_1.FilePaths.resolve(__dirname, "..", "..", ".."));
function createWindow() {
    return __awaiter(this, void 0, void 0, function* () {
        const datastore = new MemoryDatastore_1.MemoryDatastore();
        yield datastore.init();
        yield Logging_1.Logging.init();
        const mainApp = new MainApp_1.MainApp(datastore);
        const mainAppState = yield mainApp.start();
        mainAppController = mainAppState.mainAppController;
        return mainAppState.mainWindow;
    });
}
SpectronMain2_1.SpectronMain2.create({ windowFactory: createWindow }).run((state) => __awaiter(void 0, void 0, void 0, function* () {
    log.info("Waiting for repository to show...");
    yield wait_for_expect_1.default(() => {
        const windows = BrowserWindowRegistry_1.BrowserWindowRegistry.tagged({ name: 'app', value: 'repository' });
        chai_1.assert.ok(windows.length === 1);
    });
    yield state.testResultWriter.write(true);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLCtEQUEwRDtBQUUxRCx3RUFBbUU7QUFDbkUscURBQWdEO0FBQ2hELHdEQUFtRDtBQUNuRCw2RkFBd0Y7QUFDeEYsK0JBQTRCO0FBQzVCLHNFQUE0QztBQUM1QywyREFBc0Q7QUFHdEQsZ0VBQTJEO0FBQzNELCtEQUEwRDtBQUUxRCxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFNUIsSUFBSSxpQkFBZ0QsQ0FBQztBQUVyRCxpQkFBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBUyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBRTVELFNBQWUsWUFBWTs7UUFFdkIsTUFBTSxTQUFTLEdBQWMsSUFBSSxpQ0FBZSxFQUFFLENBQUM7UUFFbkQsTUFBTSxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFdkIsTUFBTSxpQkFBTyxDQUFDLElBQUksRUFBRSxDQUFDO1FBRXJCLE1BQU0sT0FBTyxHQUFHLElBQUksaUJBQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUV2QyxNQUFNLFlBQVksR0FBRyxNQUFNLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMzQyxpQkFBaUIsR0FBRyxZQUFZLENBQUMsaUJBQWlCLENBQUM7UUFFbkQsT0FBTyxZQUFZLENBQUMsVUFBVSxDQUFDO0lBRW5DLENBQUM7Q0FBQTtBQUVELDZCQUFhLENBQUMsTUFBTSxDQUFDLEVBQUMsYUFBYSxFQUFFLFlBQVksRUFBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQU0sS0FBSyxFQUFDLEVBQUU7SUFFbEUsR0FBRyxDQUFDLElBQUksQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO0lBRTlDLE1BQU0seUJBQWEsQ0FBQyxHQUFHLEVBQUU7UUFDckIsTUFBTSxPQUFPLEdBQUcsNkNBQXFCLENBQUMsTUFBTSxDQUFDLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFDLENBQUMsQ0FBQztRQUNqRixhQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFFcEMsQ0FBQyxDQUFDLENBQUM7SUFFSCxNQUFNLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFN0MsQ0FBQyxDQUFBLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U3BlY3Ryb25NYWluMn0gZnJvbSAnLi4vLi4vanMvdGVzdC9TcGVjdHJvbk1haW4yJztcbmltcG9ydCB7RGF0YXN0b3JlfSBmcm9tICcuLi8uLi9qcy9kYXRhc3RvcmUvRGF0YXN0b3JlJztcbmltcG9ydCB7TWVtb3J5RGF0YXN0b3JlfSBmcm9tICcuLi8uLi9qcy9kYXRhc3RvcmUvTWVtb3J5RGF0YXN0b3JlJztcbmltcG9ydCB7TG9nZ2luZ30gZnJvbSAnLi4vLi4vanMvbG9nZ2VyL0xvZ2dpbmcnO1xuaW1wb3J0IHtNYWluQXBwfSBmcm9tICcuLi8uLi9qcy9hcHBzL21haW4vTWFpbkFwcCc7XG5pbXBvcnQge0Jyb3dzZXJXaW5kb3dSZWdpc3RyeX0gZnJvbSAnLi4vLi4vanMvZWxlY3Ryb24vZnJhbWV3b3JrL0Jyb3dzZXJXaW5kb3dSZWdpc3RyeSc7XG5pbXBvcnQge2Fzc2VydH0gZnJvbSAnY2hhaSc7XG5pbXBvcnQgd2FpdEZvckV4cGVjdCBmcm9tICd3YWl0LWZvci1leHBlY3QnO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge01haW5BcHBDb250cm9sbGVyfSBmcm9tICcuLi8uLi9qcy9hcHBzL21haW4vTWFpbkFwcENvbnRyb2xsZXInO1xuaW1wb3J0IEJyb3dzZXJXaW5kb3cgPSBFbGVjdHJvbi5Ccm93c2VyV2luZG93O1xuaW1wb3J0IHtBcHBQYXRofSBmcm9tICcuLi8uLi9qcy9lbGVjdHJvbi9hcHBfcGF0aC9BcHBQYXRoJztcbmltcG9ydCB7RmlsZVBhdGhzfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvRmlsZVBhdGhzJztcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG5sZXQgbWFpbkFwcENvbnRyb2xsZXI6IE1haW5BcHBDb250cm9sbGVyIHwgdW5kZWZpbmVkO1xuXG5BcHBQYXRoLnNldChGaWxlUGF0aHMucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi5cIiwgXCIuLlwiLCBcIi4uXCIpKTtcblxuYXN5bmMgZnVuY3Rpb24gY3JlYXRlV2luZG93KCk6IFByb21pc2U8QnJvd3NlcldpbmRvdz4ge1xuXG4gICAgY29uc3QgZGF0YXN0b3JlOiBEYXRhc3RvcmUgPSBuZXcgTWVtb3J5RGF0YXN0b3JlKCk7XG5cbiAgICBhd2FpdCBkYXRhc3RvcmUuaW5pdCgpO1xuXG4gICAgYXdhaXQgTG9nZ2luZy5pbml0KCk7XG5cbiAgICBjb25zdCBtYWluQXBwID0gbmV3IE1haW5BcHAoZGF0YXN0b3JlKTtcblxuICAgIGNvbnN0IG1haW5BcHBTdGF0ZSA9IGF3YWl0IG1haW5BcHAuc3RhcnQoKTtcbiAgICBtYWluQXBwQ29udHJvbGxlciA9IG1haW5BcHBTdGF0ZS5tYWluQXBwQ29udHJvbGxlcjtcblxuICAgIHJldHVybiBtYWluQXBwU3RhdGUubWFpbldpbmRvdztcblxufVxuXG5TcGVjdHJvbk1haW4yLmNyZWF0ZSh7d2luZG93RmFjdG9yeTogY3JlYXRlV2luZG93fSkucnVuKGFzeW5jIHN0YXRlID0+IHtcblxuICAgIGxvZy5pbmZvKFwiV2FpdGluZyBmb3IgcmVwb3NpdG9yeSB0byBzaG93Li4uXCIpO1xuXG4gICAgYXdhaXQgd2FpdEZvckV4cGVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHdpbmRvd3MgPSBCcm93c2VyV2luZG93UmVnaXN0cnkudGFnZ2VkKHtuYW1lOiAnYXBwJywgdmFsdWU6ICdyZXBvc2l0b3J5J30pO1xuICAgICAgICBhc3NlcnQub2sod2luZG93cy5sZW5ndGggPT09IDEpO1xuXG4gICAgfSk7XG5cbiAgICBhd2FpdCBzdGF0ZS50ZXN0UmVzdWx0V3JpdGVyLndyaXRlKHRydWUpO1xuXG59KTtcbiJdfQ==