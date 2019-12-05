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
const FilePaths_1 = require("polar-shared/src/util/FilePaths");
const Files_1 = require("polar-shared/src/util/Files");
const PolarDataDir_1 = require("../../js/test/PolarDataDir");
const AppPath_1 = require("../../js/electron/app_path/AppPath");
const log = Logger_1.Logger.create();
let polarDir;
let mainAppController;
AppPath_1.AppPath.set(FilePaths_1.FilePaths.resolve(__dirname, "..", "..", ".."));
function createWindow() {
    return __awaiter(this, void 0, void 0, function* () {
        polarDir = yield setupNewDataDir();
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
    yield mainAppController.handleLoadDoc(polarDir.files[0]);
    yield mainAppController.handleLoadDoc(polarDir.files[1]);
    yield state.testResultWriter.write(true);
}));
function setupNewDataDir() {
    return __awaiter(this, void 0, void 0, function* () {
        const dataDir = yield PolarDataDir_1.PolarDataDir.useFreshDirectory('.polar-main-app');
        log.info("Using new dataDir: " + dataDir);
        const stashDir = FilePaths_1.FilePaths.create(dataDir, 'stash');
        const filenames = ['example.pdf', 'example.phz'];
        const files = [];
        for (const filename of filenames) {
            const srcPath = FilePaths_1.FilePaths.join(__dirname, 'files', filename);
            const targetPath = FilePaths_1.FilePaths.join(stashDir, filename);
            yield Files_1.Files.copyFileAsync(srcPath, targetPath);
            files.push(targetPath);
        }
        return {
            files
        };
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLCtEQUEwRDtBQUUxRCx3RUFBbUU7QUFDbkUscURBQWdEO0FBQ2hELHdEQUFtRDtBQUNuRCw2RkFBd0Y7QUFDeEYsK0JBQTRCO0FBQzVCLHNFQUE0QztBQUM1QywyREFBc0Q7QUFDdEQsK0RBQTBEO0FBQzFELHVEQUFrRDtBQUVsRCw2REFBd0Q7QUFDeEQsZ0VBQTJEO0FBRzNELE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU1QixJQUFJLFFBQThCLENBQUM7QUFDbkMsSUFBSSxpQkFBZ0QsQ0FBQztBQUVyRCxpQkFBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBUyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBRTVELFNBQWUsWUFBWTs7UUFFdkIsUUFBUSxHQUFHLE1BQU0sZUFBZSxFQUFFLENBQUM7UUFFbkMsTUFBTSxTQUFTLEdBQWMsSUFBSSxpQ0FBZSxFQUFFLENBQUM7UUFFbkQsTUFBTSxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFdkIsTUFBTSxpQkFBTyxDQUFDLElBQUksRUFBRSxDQUFDO1FBRXJCLE1BQU0sT0FBTyxHQUFHLElBQUksaUJBQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUV2QyxNQUFNLFlBQVksR0FBRyxNQUFNLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMzQyxpQkFBaUIsR0FBRyxZQUFZLENBQUMsaUJBQWlCLENBQUM7UUFFbkQsT0FBTyxZQUFZLENBQUMsVUFBVSxDQUFDO0lBRW5DLENBQUM7Q0FBQTtBQUVELDZCQUFhLENBQUMsTUFBTSxDQUFDLEVBQUMsYUFBYSxFQUFFLFlBQVksRUFBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQU0sS0FBSyxFQUFDLEVBQUU7SUFFbEUsR0FBRyxDQUFDLElBQUksQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO0lBRTlDLE1BQU0seUJBQWEsQ0FBQyxHQUFHLEVBQUU7UUFDckIsTUFBTSxPQUFPLEdBQUcsNkNBQXFCLENBQUMsTUFBTSxDQUFDLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFDLENBQUMsQ0FBQztRQUNqRixhQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFFcEMsQ0FBQyxDQUFDLENBQUM7SUFFSCxNQUFNLGlCQUFrQixDQUFDLGFBQWEsQ0FBQyxRQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFM0QsTUFBTSxpQkFBa0IsQ0FBQyxhQUFhLENBQUMsUUFBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBVTNELE1BQU0sS0FBSyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUU3QyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsU0FBZSxlQUFlOztRQUUxQixNQUFNLE9BQU8sR0FBRyxNQUFNLDJCQUFZLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUV4RSxHQUFHLENBQUMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLE9BQU8sQ0FBQyxDQUFDO1FBRTFDLE1BQU0sUUFBUSxHQUFHLHFCQUFTLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUVwRCxNQUFNLFNBQVMsR0FBRyxDQUFDLGFBQWEsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUVqRCxNQUFNLEtBQUssR0FBYSxFQUFFLENBQUM7UUFFM0IsS0FBSyxNQUFNLFFBQVEsSUFBSSxTQUFTLEVBQUU7WUFFOUIsTUFBTSxPQUFPLEdBQUcscUJBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztZQUM3RCxNQUFNLFVBQVUsR0FBRyxxQkFBUyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFFdEQsTUFBTSxhQUFLLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQztZQUUvQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQzFCO1FBRUQsT0FBTztZQUNILEtBQUs7U0FDUixDQUFDO0lBRU4sQ0FBQztDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTcGVjdHJvbk1haW4yfSBmcm9tICcuLi8uLi9qcy90ZXN0L1NwZWN0cm9uTWFpbjInO1xuaW1wb3J0IHtEYXRhc3RvcmV9IGZyb20gJy4uLy4uL2pzL2RhdGFzdG9yZS9EYXRhc3RvcmUnO1xuaW1wb3J0IHtNZW1vcnlEYXRhc3RvcmV9IGZyb20gJy4uLy4uL2pzL2RhdGFzdG9yZS9NZW1vcnlEYXRhc3RvcmUnO1xuaW1wb3J0IHtMb2dnaW5nfSBmcm9tICcuLi8uLi9qcy9sb2dnZXIvTG9nZ2luZyc7XG5pbXBvcnQge01haW5BcHB9IGZyb20gJy4uLy4uL2pzL2FwcHMvbWFpbi9NYWluQXBwJztcbmltcG9ydCB7QnJvd3NlcldpbmRvd1JlZ2lzdHJ5fSBmcm9tICcuLi8uLi9qcy9lbGVjdHJvbi9mcmFtZXdvcmsvQnJvd3NlcldpbmRvd1JlZ2lzdHJ5JztcbmltcG9ydCB7YXNzZXJ0fSBmcm9tICdjaGFpJztcbmltcG9ydCB3YWl0Rm9yRXhwZWN0IGZyb20gJ3dhaXQtZm9yLWV4cGVjdCc7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7RmlsZVBhdGhzfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvRmlsZVBhdGhzJztcbmltcG9ydCB7RmlsZXN9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC9GaWxlcyc7XG5pbXBvcnQge01haW5BcHBDb250cm9sbGVyfSBmcm9tICcuLi8uLi9qcy9hcHBzL21haW4vTWFpbkFwcENvbnRyb2xsZXInO1xuaW1wb3J0IHtQb2xhckRhdGFEaXJ9IGZyb20gJy4uLy4uL2pzL3Rlc3QvUG9sYXJEYXRhRGlyJztcbmltcG9ydCB7QXBwUGF0aH0gZnJvbSAnLi4vLi4vanMvZWxlY3Ryb24vYXBwX3BhdGgvQXBwUGF0aCc7XG5pbXBvcnQgQnJvd3NlcldpbmRvdyA9IEVsZWN0cm9uLkJyb3dzZXJXaW5kb3c7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxubGV0IHBvbGFyRGlyOiBQb2xhckRpciB8IHVuZGVmaW5lZDtcbmxldCBtYWluQXBwQ29udHJvbGxlcjogTWFpbkFwcENvbnRyb2xsZXIgfCB1bmRlZmluZWQ7XG5cbkFwcFBhdGguc2V0KEZpbGVQYXRocy5yZXNvbHZlKF9fZGlybmFtZSwgXCIuLlwiLCBcIi4uXCIsIFwiLi5cIikpO1xuXG5hc3luYyBmdW5jdGlvbiBjcmVhdGVXaW5kb3coKTogUHJvbWlzZTxCcm93c2VyV2luZG93PiB7XG5cbiAgICBwb2xhckRpciA9IGF3YWl0IHNldHVwTmV3RGF0YURpcigpO1xuXG4gICAgY29uc3QgZGF0YXN0b3JlOiBEYXRhc3RvcmUgPSBuZXcgTWVtb3J5RGF0YXN0b3JlKCk7XG5cbiAgICBhd2FpdCBkYXRhc3RvcmUuaW5pdCgpO1xuXG4gICAgYXdhaXQgTG9nZ2luZy5pbml0KCk7XG5cbiAgICBjb25zdCBtYWluQXBwID0gbmV3IE1haW5BcHAoZGF0YXN0b3JlKTtcblxuICAgIGNvbnN0IG1haW5BcHBTdGF0ZSA9IGF3YWl0IG1haW5BcHAuc3RhcnQoKTtcbiAgICBtYWluQXBwQ29udHJvbGxlciA9IG1haW5BcHBTdGF0ZS5tYWluQXBwQ29udHJvbGxlcjtcblxuICAgIHJldHVybiBtYWluQXBwU3RhdGUubWFpbldpbmRvdztcblxufVxuXG5TcGVjdHJvbk1haW4yLmNyZWF0ZSh7d2luZG93RmFjdG9yeTogY3JlYXRlV2luZG93fSkucnVuKGFzeW5jIHN0YXRlID0+IHtcblxuICAgIGxvZy5pbmZvKFwiV2FpdGluZyBmb3IgcmVwb3NpdG9yeSB0byBzaG93Li4uXCIpO1xuXG4gICAgYXdhaXQgd2FpdEZvckV4cGVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHdpbmRvd3MgPSBCcm93c2VyV2luZG93UmVnaXN0cnkudGFnZ2VkKHtuYW1lOiAnYXBwJywgdmFsdWU6ICdyZXBvc2l0b3J5J30pO1xuICAgICAgICBhc3NlcnQub2sod2luZG93cy5sZW5ndGggPT09IDEpO1xuXG4gICAgfSk7XG5cbiAgICBhd2FpdCBtYWluQXBwQ29udHJvbGxlciEuaGFuZGxlTG9hZERvYyhwb2xhckRpciEuZmlsZXNbMF0pO1xuXG4gICAgYXdhaXQgbWFpbkFwcENvbnRyb2xsZXIhLmhhbmRsZUxvYWREb2MocG9sYXJEaXIhLmZpbGVzWzFdKTtcblxuICAgIC8vIFRPRE86IG5vdyBtYWtlIHN1cmUgdGhlaXIgbWV0YWRhdGEgYXBwZWFycyBpbiB0aGUgcmVwb1xuXG4gICAgLy8gVE9ETzogbWFrZSBzdXJlIHRoZSBmbGFzaGNhcmQgYXBwIGlzIHJlYWR5IGFuZCBydW5uaW5nIGluIHRoZSBiYWNrZ3JvdW5kXG5cbiAgICAvLyBUT0RPOiBzd2l0Y2ggdG8gdGhlIG1haW4gcmVwb3NpdG9yeSBhcHAgYW5kIGRvdWJsZSBjbGljayBvbiBhIGRvY3VtZW50LlxuICAgIC8vIE1pZ2h0IG5lZWQgdG8gZG8gdGhpcyBpbiB0aGUgcmVuZGVyZXIgY29udGV4dCB0aG91Z2ggYXMgcGFydCBvZiBhbm90aGVyXG4gICAgLy8gdGVzdC5cblxuICAgIGF3YWl0IHN0YXRlLnRlc3RSZXN1bHRXcml0ZXIud3JpdGUodHJ1ZSk7XG5cbn0pO1xuXG5hc3luYyBmdW5jdGlvbiBzZXR1cE5ld0RhdGFEaXIoKTogUHJvbWlzZTxQb2xhckRpcj4ge1xuXG4gICAgY29uc3QgZGF0YURpciA9IGF3YWl0IFBvbGFyRGF0YURpci51c2VGcmVzaERpcmVjdG9yeSgnLnBvbGFyLW1haW4tYXBwJyk7XG5cbiAgICBsb2cuaW5mbyhcIlVzaW5nIG5ldyBkYXRhRGlyOiBcIiArIGRhdGFEaXIpO1xuXG4gICAgY29uc3Qgc3Rhc2hEaXIgPSBGaWxlUGF0aHMuY3JlYXRlKGRhdGFEaXIsICdzdGFzaCcpO1xuXG4gICAgY29uc3QgZmlsZW5hbWVzID0gWydleGFtcGxlLnBkZicsICdleGFtcGxlLnBoeiddO1xuXG4gICAgY29uc3QgZmlsZXM6IHN0cmluZ1tdID0gW107XG5cbiAgICBmb3IgKGNvbnN0IGZpbGVuYW1lIG9mIGZpbGVuYW1lcykge1xuXG4gICAgICAgIGNvbnN0IHNyY1BhdGggPSBGaWxlUGF0aHMuam9pbihfX2Rpcm5hbWUsICdmaWxlcycsIGZpbGVuYW1lKTtcbiAgICAgICAgY29uc3QgdGFyZ2V0UGF0aCA9IEZpbGVQYXRocy5qb2luKHN0YXNoRGlyLCBmaWxlbmFtZSk7XG5cbiAgICAgICAgYXdhaXQgRmlsZXMuY29weUZpbGVBc3luYyhzcmNQYXRoLCB0YXJnZXRQYXRoKTtcblxuICAgICAgICBmaWxlcy5wdXNoKHRhcmdldFBhdGgpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGZpbGVzXG4gICAgfTtcblxufVxuXG5pbnRlcmZhY2UgUG9sYXJEaXIge1xuICAgIC8vIHRoZSBmaWxlcyB3ZSBjYW4gb3Blbi4uLlxuICAgIGZpbGVzOiBzdHJpbmdbXTtcbn1cbiJdfQ==