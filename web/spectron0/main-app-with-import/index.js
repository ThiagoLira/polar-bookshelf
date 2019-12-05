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
const Logging_1 = require("../../js/logger/Logging");
const MainApp_1 = require("../../js/apps/main/MainApp");
const BrowserWindowRegistry_1 = require("../../js/electron/framework/BrowserWindowRegistry");
const chai_1 = require("chai");
const wait_for_expect_1 = __importDefault(require("wait-for-expect"));
const Logger_1 = require("polar-shared/src/logger/Logger");
const FileImportClient_1 = require("../../js/apps/repository/FileImportClient");
const Files_1 = require("polar-shared/src/util/Files");
const FilePaths_1 = require("polar-shared/src/util/FilePaths");
const PolarDataDir_1 = require("../../js/test/PolarDataDir");
const DiskDatastore_1 = require("../../js/datastore/DiskDatastore");
const AppInstances_1 = require("../../js/electron/framework/AppInstances");
const AppPath_1 = require("../../js/electron/app_path/AppPath");
const FileImportRequests_1 = require("../../js/apps/repository/FileImportRequests");
const log = Logger_1.Logger.create();
AppPath_1.AppPath.set(FilePaths_1.FilePaths.resolve(__dirname, "..", "..", ".."));
function createWindow() {
    return __awaiter(this, void 0, void 0, function* () {
        yield PolarDataDir_1.PolarDataDir.useFreshDirectory('.polar-main-app-with-import');
        const datastore = new DiskDatastore_1.DiskDatastore();
        yield datastore.init();
        yield Logging_1.Logging.init();
        const mainApp = new MainApp_1.MainApp(datastore);
        const mainAppState = yield mainApp.start();
        return mainAppState.mainWindow;
    });
}
SpectronMain2_1.SpectronMain2.create({ windowFactory: createWindow }).run((state) => __awaiter(void 0, void 0, void 0, function* () {
    log.info("Waiting for repository to show...");
    log.info("Waiting for repository app...");
    yield wait_for_expect_1.default(() => {
        const windows = BrowserWindowRegistry_1.BrowserWindowRegistry.tagged({ name: 'app', value: 'repository' });
        chai_1.assert.ok(windows.length === 1);
    });
    log.info("Waiting for repository app...done");
    const rawPath = FilePaths_1.FilePaths.join(__dirname, "..", "..", "..", "docs", "example.pdf");
    const importFilePath = yield Files_1.Files.realpathAsync(rawPath);
    chai_1.assert.ok(yield Files_1.Files.existsAsync(importFilePath));
    const files = [
        importFilePath
    ];
    yield AppInstances_1.AppInstances.waitForStarted('RepositoryApp');
    log.info("Sending file import client request...");
    FileImportClient_1.FileImportClient.send(FileImportRequests_1.FileImportRequests.fromPaths(files));
    log.info("Trying to find viewer...");
    yield wait_for_expect_1.default(() => {
        const windows = BrowserWindowRegistry_1.BrowserWindowRegistry.tagged({ name: 'type', value: 'viewer' });
        chai_1.assert.ok(windows.length > 0);
    });
    log.info("Trying to find viewer...done");
    const pdfStashPath = FilePaths_1.FilePaths.join(PolarDataDir_1.PolarDataDir.get(), "stash", "12i77BKrNy-example.pdf");
    log.info("Testing for file: " + pdfStashPath);
    chai_1.assert.ok(yield Files_1.Files.existsAsync(pdfStashPath), "File does not exist: " + pdfStashPath);
    yield state.testResultWriter.write(true);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLCtEQUEwRDtBQUUxRCxxREFBZ0Q7QUFDaEQsd0RBQW1EO0FBQ25ELDZGQUF3RjtBQUN4RiwrQkFBNEI7QUFDNUIsc0VBQTRDO0FBQzVDLDJEQUFzRDtBQUN0RCxnRkFBMkU7QUFDM0UsdURBQWtEO0FBQ2xELCtEQUEwRDtBQUMxRCw2REFBd0Q7QUFDeEQsb0VBQStEO0FBQy9ELDJFQUFzRTtBQUN0RSxnRUFBMkQ7QUFDM0Qsb0ZBQStFO0FBRy9FLE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU1QixpQkFBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBUyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBRTVELFNBQWUsWUFBWTs7UUFFdkIsTUFBTSwyQkFBWSxDQUFDLGlCQUFpQixDQUFDLDZCQUE2QixDQUFDLENBQUM7UUFFcEUsTUFBTSxTQUFTLEdBQWMsSUFBSSw2QkFBYSxFQUFFLENBQUM7UUFFakQsTUFBTSxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFdkIsTUFBTSxpQkFBTyxDQUFDLElBQUksRUFBRSxDQUFDO1FBRXJCLE1BQU0sT0FBTyxHQUFHLElBQUksaUJBQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUV2QyxNQUFNLFlBQVksR0FBRyxNQUFNLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUUzQyxPQUFPLFlBQVksQ0FBQyxVQUFVLENBQUM7SUFFbkMsQ0FBQztDQUFBO0FBRUQsNkJBQWEsQ0FBQyxNQUFNLENBQUMsRUFBQyxhQUFhLEVBQUUsWUFBWSxFQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBTSxLQUFLLEVBQUMsRUFBRTtJQUVsRSxHQUFHLENBQUMsSUFBSSxDQUFDLG1DQUFtQyxDQUFDLENBQUM7SUFFOUMsR0FBRyxDQUFDLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO0lBRTFDLE1BQU0seUJBQWEsQ0FBQyxHQUFHLEVBQUU7UUFDckIsTUFBTSxPQUFPLEdBQUcsNkNBQXFCLENBQUMsTUFBTSxDQUFDLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFDLENBQUMsQ0FBQztRQUNqRixhQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDcEMsQ0FBQyxDQUFDLENBQUM7SUFFSCxHQUFHLENBQUMsSUFBSSxDQUFDLG1DQUFtQyxDQUFDLENBQUM7SUFFOUMsTUFBTSxPQUFPLEdBQUcscUJBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxhQUFhLENBQUMsQ0FBQztJQUNuRixNQUFNLGNBQWMsR0FBRyxNQUFNLGFBQUssQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDMUQsYUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLGFBQUssQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztJQUVuRCxNQUFNLEtBQUssR0FBRztRQUNWLGNBQWM7S0FDakIsQ0FBQztJQUVGLE1BQU0sMkJBQVksQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUM7SUFFbkQsR0FBRyxDQUFDLElBQUksQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO0lBQ2xELG1DQUFnQixDQUFDLElBQUksQ0FBQyx1Q0FBa0IsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUUzRCxHQUFHLENBQUMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLENBQUM7SUFFckMsTUFBTSx5QkFBYSxDQUFDLEdBQUcsRUFBRTtRQUNyQixNQUFNLE9BQU8sR0FBRyw2Q0FBcUIsQ0FBQyxNQUFNLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUMsQ0FBQyxDQUFDO1FBQzlFLGFBQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNsQyxDQUFDLENBQUMsQ0FBQztJQUVILEdBQUcsQ0FBQyxJQUFJLENBQUMsOEJBQThCLENBQUMsQ0FBQztJQUV6QyxNQUFNLFlBQVksR0FBRyxxQkFBUyxDQUFDLElBQUksQ0FBQywyQkFBWSxDQUFDLEdBQUcsRUFBRyxFQUFFLE9BQU8sRUFBRSx3QkFBd0IsQ0FBQyxDQUFDO0lBRTVGLEdBQUcsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsWUFBWSxDQUFDLENBQUM7SUFDOUMsYUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLGFBQUssQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLEVBQUUsdUJBQXVCLEdBQUcsWUFBWSxDQUFDLENBQUM7SUFFekYsTUFBTSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRTdDLENBQUMsQ0FBQSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NwZWN0cm9uTWFpbjJ9IGZyb20gJy4uLy4uL2pzL3Rlc3QvU3BlY3Ryb25NYWluMic7XG5pbXBvcnQge0RhdGFzdG9yZX0gZnJvbSAnLi4vLi4vanMvZGF0YXN0b3JlL0RhdGFzdG9yZSc7XG5pbXBvcnQge0xvZ2dpbmd9IGZyb20gJy4uLy4uL2pzL2xvZ2dlci9Mb2dnaW5nJztcbmltcG9ydCB7TWFpbkFwcH0gZnJvbSAnLi4vLi4vanMvYXBwcy9tYWluL01haW5BcHAnO1xuaW1wb3J0IHtCcm93c2VyV2luZG93UmVnaXN0cnl9IGZyb20gJy4uLy4uL2pzL2VsZWN0cm9uL2ZyYW1ld29yay9Ccm93c2VyV2luZG93UmVnaXN0cnknO1xuaW1wb3J0IHthc3NlcnR9IGZyb20gJ2NoYWknO1xuaW1wb3J0IHdhaXRGb3JFeHBlY3QgZnJvbSAnd2FpdC1mb3ItZXhwZWN0JztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL2xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IHtGaWxlSW1wb3J0Q2xpZW50fSBmcm9tICcuLi8uLi9qcy9hcHBzL3JlcG9zaXRvcnkvRmlsZUltcG9ydENsaWVudCc7XG5pbXBvcnQge0ZpbGVzfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvRmlsZXMnO1xuaW1wb3J0IHtGaWxlUGF0aHN9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC9GaWxlUGF0aHMnO1xuaW1wb3J0IHtQb2xhckRhdGFEaXJ9IGZyb20gJy4uLy4uL2pzL3Rlc3QvUG9sYXJEYXRhRGlyJztcbmltcG9ydCB7RGlza0RhdGFzdG9yZX0gZnJvbSAnLi4vLi4vanMvZGF0YXN0b3JlL0Rpc2tEYXRhc3RvcmUnO1xuaW1wb3J0IHtBcHBJbnN0YW5jZXN9IGZyb20gJy4uLy4uL2pzL2VsZWN0cm9uL2ZyYW1ld29yay9BcHBJbnN0YW5jZXMnO1xuaW1wb3J0IHtBcHBQYXRofSBmcm9tICcuLi8uLi9qcy9lbGVjdHJvbi9hcHBfcGF0aC9BcHBQYXRoJztcbmltcG9ydCB7RmlsZUltcG9ydFJlcXVlc3RzfSBmcm9tICcuLi8uLi9qcy9hcHBzL3JlcG9zaXRvcnkvRmlsZUltcG9ydFJlcXVlc3RzJztcbmltcG9ydCBCcm93c2VyV2luZG93ID0gRWxlY3Ryb24uQnJvd3NlcldpbmRvdztcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG5BcHBQYXRoLnNldChGaWxlUGF0aHMucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi5cIiwgXCIuLlwiLCBcIi4uXCIpKTtcblxuYXN5bmMgZnVuY3Rpb24gY3JlYXRlV2luZG93KCk6IFByb21pc2U8QnJvd3NlcldpbmRvdz4ge1xuXG4gICAgYXdhaXQgUG9sYXJEYXRhRGlyLnVzZUZyZXNoRGlyZWN0b3J5KCcucG9sYXItbWFpbi1hcHAtd2l0aC1pbXBvcnQnKTtcblxuICAgIGNvbnN0IGRhdGFzdG9yZTogRGF0YXN0b3JlID0gbmV3IERpc2tEYXRhc3RvcmUoKTtcblxuICAgIGF3YWl0IGRhdGFzdG9yZS5pbml0KCk7XG5cbiAgICBhd2FpdCBMb2dnaW5nLmluaXQoKTtcblxuICAgIGNvbnN0IG1haW5BcHAgPSBuZXcgTWFpbkFwcChkYXRhc3RvcmUpO1xuXG4gICAgY29uc3QgbWFpbkFwcFN0YXRlID0gYXdhaXQgbWFpbkFwcC5zdGFydCgpO1xuXG4gICAgcmV0dXJuIG1haW5BcHBTdGF0ZS5tYWluV2luZG93O1xuXG59XG5cblNwZWN0cm9uTWFpbjIuY3JlYXRlKHt3aW5kb3dGYWN0b3J5OiBjcmVhdGVXaW5kb3d9KS5ydW4oYXN5bmMgc3RhdGUgPT4ge1xuXG4gICAgbG9nLmluZm8oXCJXYWl0aW5nIGZvciByZXBvc2l0b3J5IHRvIHNob3cuLi5cIik7XG5cbiAgICBsb2cuaW5mbyhcIldhaXRpbmcgZm9yIHJlcG9zaXRvcnkgYXBwLi4uXCIpO1xuXG4gICAgYXdhaXQgd2FpdEZvckV4cGVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHdpbmRvd3MgPSBCcm93c2VyV2luZG93UmVnaXN0cnkudGFnZ2VkKHtuYW1lOiAnYXBwJywgdmFsdWU6ICdyZXBvc2l0b3J5J30pO1xuICAgICAgICBhc3NlcnQub2sod2luZG93cy5sZW5ndGggPT09IDEpO1xuICAgIH0pO1xuXG4gICAgbG9nLmluZm8oXCJXYWl0aW5nIGZvciByZXBvc2l0b3J5IGFwcC4uLmRvbmVcIik7XG5cbiAgICBjb25zdCByYXdQYXRoID0gRmlsZVBhdGhzLmpvaW4oX19kaXJuYW1lLCBcIi4uXCIsIFwiLi5cIiwgXCIuLlwiLCBcImRvY3NcIiwgXCJleGFtcGxlLnBkZlwiKTtcbiAgICBjb25zdCBpbXBvcnRGaWxlUGF0aCA9IGF3YWl0IEZpbGVzLnJlYWxwYXRoQXN5bmMocmF3UGF0aCk7XG4gICAgYXNzZXJ0Lm9rKGF3YWl0IEZpbGVzLmV4aXN0c0FzeW5jKGltcG9ydEZpbGVQYXRoKSk7XG5cbiAgICBjb25zdCBmaWxlcyA9IFtcbiAgICAgICAgaW1wb3J0RmlsZVBhdGhcbiAgICBdO1xuXG4gICAgYXdhaXQgQXBwSW5zdGFuY2VzLndhaXRGb3JTdGFydGVkKCdSZXBvc2l0b3J5QXBwJyk7XG5cbiAgICBsb2cuaW5mbyhcIlNlbmRpbmcgZmlsZSBpbXBvcnQgY2xpZW50IHJlcXVlc3QuLi5cIik7XG4gICAgRmlsZUltcG9ydENsaWVudC5zZW5kKEZpbGVJbXBvcnRSZXF1ZXN0cy5mcm9tUGF0aHMoZmlsZXMpKTtcblxuICAgIGxvZy5pbmZvKFwiVHJ5aW5nIHRvIGZpbmQgdmlld2VyLi4uXCIpO1xuXG4gICAgYXdhaXQgd2FpdEZvckV4cGVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHdpbmRvd3MgPSBCcm93c2VyV2luZG93UmVnaXN0cnkudGFnZ2VkKHtuYW1lOiAndHlwZScsIHZhbHVlOiAndmlld2VyJ30pO1xuICAgICAgICBhc3NlcnQub2sod2luZG93cy5sZW5ndGggPiAwKTtcbiAgICB9KTtcblxuICAgIGxvZy5pbmZvKFwiVHJ5aW5nIHRvIGZpbmQgdmlld2VyLi4uZG9uZVwiKTtcblxuICAgIGNvbnN0IHBkZlN0YXNoUGF0aCA9IEZpbGVQYXRocy5qb2luKFBvbGFyRGF0YURpci5nZXQoKSEsIFwic3Rhc2hcIiwgXCIxMmk3N0JLck55LWV4YW1wbGUucGRmXCIpO1xuXG4gICAgbG9nLmluZm8oXCJUZXN0aW5nIGZvciBmaWxlOiBcIiArIHBkZlN0YXNoUGF0aCk7XG4gICAgYXNzZXJ0Lm9rKGF3YWl0IEZpbGVzLmV4aXN0c0FzeW5jKHBkZlN0YXNoUGF0aCksIFwiRmlsZSBkb2VzIG5vdCBleGlzdDogXCIgKyBwZGZTdGFzaFBhdGgpO1xuXG4gICAgYXdhaXQgc3RhdGUudGVzdFJlc3VsdFdyaXRlci53cml0ZSh0cnVlKTtcblxufSk7XG5cbiJdfQ==