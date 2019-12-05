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
const electron_2 = require("electron");
const Logger_1 = require("polar-shared/src/logger/Logger");
const PDFImporter_1 = require("./importers/PDFImporter");
const Preconditions_1 = require("polar-shared/src/Preconditions");
const Toaster_1 = require("../../ui/toaster/Toaster");
const DeterminateProgressBar_1 = require("../../ui/progress_bar/DeterminateProgressBar");
const DocLoader_1 = require("../main/doc_loaders/DocLoader");
const Blackout_1 = require("../../ui/blackout/Blackout");
const AppRuntime_1 = require("../../AppRuntime");
const AddFileRequests_1 = require("./AddFileRequests");
const ProgressTracker_1 = require("polar-shared/src/util/ProgressTracker");
const AccountUpgrader_1 = require("../../ui/account_upgrade/AccountUpgrader");
const log = Logger_1.Logger.create();
const DISABLED = false;
class FileImportController {
    constructor(persistenceLayerProvider, updatedDocInfoEventDispatcher) {
        this.persistenceLayerProvider = persistenceLayerProvider;
        this.updatedDocInfoEventDispatcher = updatedDocInfoEventDispatcher;
        this.pdfImporter = new PDFImporter_1.PDFImporter(persistenceLayerProvider);
        this.docLoader = new DocLoader_1.DocLoader(persistenceLayerProvider);
    }
    start() {
        if (DISABLED) {
            return;
        }
        if (electron_1.ipcRenderer) {
            electron_1.ipcRenderer.on('file-import', (event, fileImportRequest) => {
                this.onFileImportRequest(fileImportRequest)
                    .catch(err => log.error("Unable to import: ", err));
            });
        }
        this.handleBlackout();
        this.handleDragAndDropFiles();
        this.handleFileUpload();
        log.info("File import controller started");
    }
    handleDragAndDropFiles() {
        document.body.addEventListener('dragenter', (event) => this.onDragEnterOrOver(event), false);
        document.body.addEventListener('dragover', (event) => this.onDragEnterOrOver(event), false);
        document.body.addEventListener('drop', event => this.onDrop(event));
    }
    handleFileUpload() {
        const handleFileUploaded = () => {
            const target = document.querySelector('#file-upload');
            if (target) {
                const fileUpload = target;
                if (fileUpload.files !== null) {
                    const addFileRequests = AddFileRequests_1.AddFileRequests.computeFromFileList(fileUpload.files);
                    this.handleAddFileRequests(addFileRequests)
                        .catch(err => log.error("Could not add files: ", err));
                }
                else {
                }
            }
            else {
                log.warn("No file upload input");
            }
        };
        const handleMessage = (event) => {
            if (event.data.type === 'file-uploaded') {
                handleFileUploaded();
            }
        };
        window.addEventListener("message", event => {
            try {
                handleMessage(event);
            }
            catch (e) {
                log.error("Unable to handle message: ", e);
            }
        });
    }
    handleBlackout() {
        let depth = 0;
        document.body.addEventListener('dragenter', (event) => {
            if (!this.isFileTransfer(event)) {
                return;
            }
            if (depth === 0) {
                Blackout_1.Blackout.enable();
            }
            ++depth;
        });
        const leaveOrDropHandler = (event) => {
            if (!this.isFileTransfer(event)) {
                return;
            }
            --depth;
            if (depth === 0) {
                Blackout_1.Blackout.disable();
            }
        };
        document.body.addEventListener('dragleave', event => leaveOrDropHandler(event));
        document.body.addEventListener('drop', event => leaveOrDropHandler(event));
    }
    onDragEnterOrOver(event) {
        if (!this.isFileTransfer(event)) {
            return;
        }
        event.preventDefault();
    }
    onDrop(event) {
        if (!this.isFileTransfer(event)) {
            return;
        }
        event.preventDefault();
        Blackout_1.Blackout.disable();
        this.handleDrop(event)
            .catch(err => log.error("Unable to import: ", err));
    }
    handleDrop(event) {
        return __awaiter(this, void 0, void 0, function* () {
            if (event.dataTransfer) {
                const directly = AddFileRequests_1.AddFileRequests.computeDirectly(event);
                const recursively = yield AddFileRequests_1.AddFileRequests.computeRecursively(event);
                const addFileRequests = [...directly, ...recursively.getOrElse([])];
                yield this.handleAddFileRequests(addFileRequests);
            }
        });
    }
    handleAddFileRequests(addFileRequests) {
        return __awaiter(this, void 0, void 0, function* () {
            if (addFileRequests.length > 0) {
                const accountUpgrader = new AccountUpgrader_1.AccountUpgrader();
                if (yield accountUpgrader.upgradeRequired()) {
                    accountUpgrader.startUpgrade();
                    return;
                }
                try {
                    yield this.onImportFiles(addFileRequests);
                }
                catch (e) {
                    log.error("Unable to import files: ", addFileRequests, e);
                }
            }
            else {
                Toaster_1.Toaster.error("Unable to upload files.  Only PDF uploads are supported.");
            }
        });
    }
    onFileImportRequest(fileImportRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!Preconditions_1.isPresent(fileImportRequest.files) || fileImportRequest.files.length === 0) {
                return;
            }
            yield this.onImportFiles(fileImportRequest.files);
        });
    }
    onImportFiles(files) {
        return __awaiter(this, void 0, void 0, function* () {
            this.forceWindowFocus();
            const importedFiles = yield this.doImportFiles(files);
            if (importedFiles.length === 0) {
                log.warn("No files given to upload");
                return;
            }
            if (AppRuntime_1.AppRuntime.isElectron() && importedFiles.length === 1) {
                const importedFile = importedFiles[0];
                if (importedFile.isPresent()) {
                    const file = importedFile.get();
                    const fingerprint = file.docInfo.fingerprint;
                    if (AppRuntime_1.AppRuntime.isElectron()) {
                        this.docLoader.create({
                            fingerprint,
                            backendFileRef: file.backendFileRef,
                            newWindow: true
                        }).load()
                            .catch(err => log.error("Unable to load doc: ", err));
                    }
                }
            }
            if (importedFiles.length !== 1) {
                Toaster_1.Toaster.success(`Imported ${files.length} file(s) successfully.`);
            }
        });
    }
    forceWindowFocus() {
        if (electron_2.remote) {
            electron_2.remote.getCurrentWindow().focus();
        }
    }
    doImportFiles(files) {
        return __awaiter(this, void 0, void 0, function* () {
            const progressTracker = new ProgressTracker_1.ProgressTracker({ total: files.length, id: 'import-files' });
            const result = [];
            try {
                for (const file of files) {
                    try {
                        const importedFile = yield this.doImportFile(file);
                        log.info("Imported file: ", importedFile);
                        result.push(importedFile);
                    }
                    catch (e) {
                        log.error("Failed to import file: ", e, file);
                    }
                    finally {
                        DeterminateProgressBar_1.DeterminateProgressBar.update(progressTracker.incr());
                    }
                }
                return result;
            }
            finally {
            }
        });
    }
    doImportFile(file) {
        return __awaiter(this, void 0, void 0, function* () {
            log.info("Importing file: ", file);
            const importedFileResult = yield this.pdfImporter.importFile(file.docPath, file.basename);
            importedFileResult.map(importedFile => {
                this.updatedDocInfoEventDispatcher.dispatchEvent(importedFile.docInfo);
            });
            return importedFileResult;
        });
    }
    isFileTransfer(event) {
        if (!event.dataTransfer) {
            return false;
        }
        if (event.dataTransfer.types) {
            if (event.dataTransfer.types.includes('Files') ||
                event.dataTransfer.types.includes('application/x-moz-file')) {
                return true;
            }
        }
        if (!event.dataTransfer.files) {
            return false;
        }
        if (event.dataTransfer.files.length === 0) {
            return false;
        }
        return true;
    }
}
exports.FileImportController = FileImportController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZUltcG9ydENvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJGaWxlSW1wb3J0Q29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBLHVDQUFxQztBQUNyQyx1Q0FBZ0M7QUFDaEMsMkRBQXNEO0FBQ3RELHlEQUFrRTtBQUlsRSxrRUFBeUQ7QUFDekQsc0RBQWlEO0FBRWpELHlGQUFvRjtBQUNwRiw2REFBd0Q7QUFDeEQseURBQW9EO0FBR3BELGlEQUE0QztBQUM1Qyx1REFBa0Q7QUFDbEQsMkVBQXNFO0FBQ3RFLDhFQUF5RTtBQUV6RSxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFNUIsTUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDO0FBUXZCLE1BQWEsb0JBQW9CO0lBVTdCLFlBQVksd0JBQXFELEVBQ3JELDZCQUF5RDtRQUVqRSxJQUFJLENBQUMsd0JBQXdCLEdBQUcsd0JBQXdCLENBQUM7UUFDekQsSUFBSSxDQUFDLDZCQUE2QixHQUFHLDZCQUE2QixDQUFDO1FBQ25FLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSx5QkFBVyxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLHFCQUFTLENBQUMsd0JBQXdCLENBQUMsQ0FBQztJQUU3RCxDQUFDO0lBRU0sS0FBSztRQUVSLElBQUksUUFBUSxFQUFFO1lBQ1YsT0FBTztTQUNWO1FBRUQsSUFBSSxzQkFBVyxFQUFFO1lBRWIsc0JBQVcsQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUMsS0FBVSxFQUFFLGlCQUFvQyxFQUFFLEVBQUU7Z0JBRS9FLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxpQkFBaUIsQ0FBQztxQkFDdEMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFD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SUFNTyxjQUFjLENBQUMsS0FBZ0I7UUFFbkMsSUFBSSxDQUFFLEtBQUssQ0FBQyxZQUFZLEVBQUU7WUFDdEIsT0FBTyxLQUFLLENBQUM7U0FDaEI7UUFJRCxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFO1lBSzFCLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztnQkFDMUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLHdCQUF3QixDQUFDLEVBQUU7Z0JBRTdELE9BQU8sSUFBSSxDQUFDO2FBQ2Y7U0FFSjtRQUdELElBQUksQ0FBRSxLQUFLLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRTtZQUM1QixPQUFPLEtBQUssQ0FBQztTQUNoQjtRQUVELElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUN2QyxPQUFPLEtBQUssQ0FBQztTQUNoQjtRQUVELE9BQU8sSUFBSSxDQUFDO0lBRWhCLENBQUM7Q0FFSjtBQXRXRCxvREFzV0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BlcnNpc3RlbmNlTGF5ZXJ9IGZyb20gXCIuLi8uLi9kYXRhc3RvcmUvUGVyc2lzdGVuY2VMYXllclwiO1xuaW1wb3J0IHtpcGNSZW5kZXJlcn0gZnJvbSBcImVsZWN0cm9uXCI7XG5pbXBvcnQge3JlbW90ZX0gZnJvbSAnZWxlY3Ryb24nO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge0ltcG9ydGVkRmlsZSwgUERGSW1wb3J0ZXJ9IGZyb20gJy4vaW1wb3J0ZXJzL1BERkltcG9ydGVyJztcbmltcG9ydCB7SUV2ZW50RGlzcGF0Y2hlcn0gZnJvbSAnLi4vLi4vcmVhY3Rvci9TaW1wbGVSZWFjdG9yJztcbmltcG9ydCB7SURvY0luZm99IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbWV0YWRhdGEvSURvY0luZm8nO1xuaW1wb3J0IHtPcHRpb25hbH0gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvdXRpbC90cy9PcHRpb25hbFwiO1xuaW1wb3J0IHtpc1ByZXNlbnR9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvUHJlY29uZGl0aW9ucyc7XG5pbXBvcnQge1RvYXN0ZXJ9IGZyb20gXCIuLi8uLi91aS90b2FzdGVyL1RvYXN0ZXJcIjtcbmltcG9ydCB7SVByb3ZpZGVyfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy91dGlsL1Byb3ZpZGVyc1wiO1xuaW1wb3J0IHtEZXRlcm1pbmF0ZVByb2dyZXNzQmFyfSBmcm9tICcuLi8uLi91aS9wcm9ncmVzc19iYXIvRGV0ZXJtaW5hdGVQcm9ncmVzc0Jhcic7XG5pbXBvcnQge0RvY0xvYWRlcn0gZnJvbSBcIi4uL21haW4vZG9jX2xvYWRlcnMvRG9jTG9hZGVyXCI7XG5pbXBvcnQge0JsYWNrb3V0fSBmcm9tIFwiLi4vLi4vdWkvYmxhY2tvdXQvQmxhY2tvdXRcIjtcbmltcG9ydCB7RmlsZUltcG9ydFJlcXVlc3R9IGZyb20gXCIuL0ZpbGVJbXBvcnRSZXF1ZXN0XCI7XG5pbXBvcnQge0FkZEZpbGVSZXF1ZXN0fSBmcm9tIFwiLi9BZGRGaWxlUmVxdWVzdFwiO1xuaW1wb3J0IHtBcHBSdW50aW1lfSBmcm9tIFwiLi4vLi4vQXBwUnVudGltZVwiO1xuaW1wb3J0IHtBZGRGaWxlUmVxdWVzdHN9IGZyb20gXCIuL0FkZEZpbGVSZXF1ZXN0c1wiO1xuaW1wb3J0IHtQcm9ncmVzc1RyYWNrZXJ9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC9Qcm9ncmVzc1RyYWNrZXInO1xuaW1wb3J0IHtBY2NvdW50VXBncmFkZXJ9IGZyb20gXCIuLi8uLi91aS9hY2NvdW50X3VwZ3JhZGUvQWNjb3VudFVwZ3JhZGVyXCI7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuY29uc3QgRElTQUJMRUQgPSBmYWxzZTtcblxuLyoqXG4gKiBIYW5kbGVzIHBlcmZvcm1pbmcgaW1wb3J0cyBpbnRvIHRoZSBkYXRhc3RvcmUgd2hlbiB1c2VycyBzZWxlY3QgZmlsZXMgZnJvbVxuICogdGhlIGltcG9ydCBkaWFsb2cuXG4gKlxuICogQEVsZWN0cm9uUmVuZGVyZXJDb250ZXh0XG4gKi9cbmV4cG9ydCBjbGFzcyBGaWxlSW1wb3J0Q29udHJvbGxlciB7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IHBlcnNpc3RlbmNlTGF5ZXJQcm92aWRlcjogSVByb3ZpZGVyPFBlcnNpc3RlbmNlTGF5ZXI+O1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSB1cGRhdGVkRG9jSW5mb0V2ZW50RGlzcGF0Y2hlcjogSUV2ZW50RGlzcGF0Y2hlcjxJRG9jSW5mbz47XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IHBkZkltcG9ydGVyOiBQREZJbXBvcnRlcjtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgZG9jTG9hZGVyOiBEb2NMb2FkZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihwZXJzaXN0ZW5jZUxheWVyUHJvdmlkZXI6IElQcm92aWRlcjxQZXJzaXN0ZW5jZUxheWVyPixcbiAgICAgICAgICAgICAgICB1cGRhdGVkRG9jSW5mb0V2ZW50RGlzcGF0Y2hlcjogSUV2ZW50RGlzcGF0Y2hlcjxJRG9jSW5mbz4pIHtcblxuICAgICAgICB0aGlzLnBlcnNpc3RlbmNlTGF5ZXJQcm92aWRlciA9IHBlcnNpc3RlbmNlTGF5ZXJQcm92aWRlcjtcbiAgICAgICAgdGhpcy51cGRhdGVkRG9jSW5mb0V2ZW50RGlzcGF0Y2hlciA9IHVwZGF0ZWREb2NJbmZvRXZlbnREaXNwYXRjaGVyO1xuICAgICAgICB0aGlzLnBkZkltcG9ydGVyID0gbmV3IFBERkltcG9ydGVyKHBlcnNpc3RlbmNlTGF5ZXJQcm92aWRlcik7XG4gICAgICAgIHRoaXMuZG9jTG9hZGVyID0gbmV3IERvY0xvYWRlcihwZXJzaXN0ZW5jZUxheWVyUHJvdmlkZXIpO1xuXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXJ0KCk6IHZvaWQge1xuXG4gICAgICAgIGlmIChESVNBQkxFRCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlwY1JlbmRlcmVyKSB7XG5cbiAgICAgICAgICAgIGlwY1JlbmRlcmVyLm9uKCdmaWxlLWltcG9ydCcsIChldmVudDogYW55LCBmaWxlSW1wb3J0UmVxdWVzdDogRmlsZUltcG9ydFJlcXVlc3QpID0+IHtcblxuICAgICAgICAgICAgICAgIHRoaXMub25GaWxlSW1wb3J0UmVxdWVzdChmaWxlSW1wb3J0UmVxdWVzdClcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBsb2cuZXJyb3IoXCJVbmFibGUgdG8gaW1wb3J0OiBcIiwgZXJyKSk7XG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmhhbmRsZUJsYWNrb3V0KCk7XG4gICAgICAgIHRoaXMuaGFuZGxlRHJhZ0FuZERyb3BGaWxlcygpO1xuICAgICAgICB0aGlzLmhhbmRsZUZpbGVVcGxvYWQoKTtcblxuICAgICAgICBsb2cuaW5mbyhcIkZpbGUgaW1wb3J0IGNvbnRyb2xsZXIgc3RhcnRlZFwiKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgaGFuZGxlRHJhZ0FuZERyb3BGaWxlcygpIHtcblxuICAgICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbnRlcicsIChldmVudCkgPT4gdGhpcy5vbkRyYWdFbnRlck9yT3ZlcihldmVudCksIGZhbHNlKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIChldmVudCkgPT4gdGhpcy5vbkRyYWdFbnRlck9yT3ZlcihldmVudCksIGZhbHNlKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgZXZlbnQgPT4gdGhpcy5vbkRyb3AoZXZlbnQpKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgaGFuZGxlRmlsZVVwbG9hZCgpIHtcblxuICAgICAgICBjb25zdCBoYW5kbGVGaWxlVXBsb2FkZWQgPSAoKSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmaWxlLXVwbG9hZCcpO1xuXG4gICAgICAgICAgICBpZiAodGFyZ2V0KSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBmaWxlVXBsb2FkID0gPEhUTUxJbnB1dEVsZW1lbnQ+IHRhcmdldDtcblxuICAgICAgICAgICAgICAgIGlmIChmaWxlVXBsb2FkLmZpbGVzICE9PSBudWxsKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYWRkRmlsZVJlcXVlc3RzID0gQWRkRmlsZVJlcXVlc3RzLmNvbXB1dGVGcm9tRmlsZUxpc3QoZmlsZVVwbG9hZC5maWxlcyk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVBZGRGaWxlUmVxdWVzdHMoYWRkRmlsZVJlcXVlc3RzKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBsb2cuZXJyb3IoXCJDb3VsZCBub3QgYWRkIGZpbGVzOiBcIiwgZXJyKSk7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBub29wXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxvZy53YXJuKFwiTm8gZmlsZSB1cGxvYWQgaW5wdXRcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBoYW5kbGVNZXNzYWdlID0gKGV2ZW50OiBNZXNzYWdlRXZlbnQpID0+IHtcblxuICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGEudHlwZSA9PT0gJ2ZpbGUtdXBsb2FkZWQnKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlRmlsZVVwbG9hZGVkKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfTtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgZXZlbnQgPT4ge1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGhhbmRsZU1lc3NhZ2UoZXZlbnQpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGxvZy5lcnJvcihcIlVuYWJsZSB0byBoYW5kbGUgbWVzc2FnZTogXCIsIGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBoYW5kbGVCbGFja291dCgpIHtcblxuICAgICAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy83MTEwMzUzL2h0bWw1LWRyYWdsZWF2ZS1maXJlZC13aGVuLWhvdmVyaW5nLWEtY2hpbGQtZWxlbWVudFxuXG4gICAgICAgIGxldCBkZXB0aCA9IDA7XG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW50ZXInLCAoZXZlbnQpID0+IHtcblxuICAgICAgICAgICAgaWYgKCEgdGhpcy5pc0ZpbGVUcmFuc2ZlcihldmVudCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChkZXB0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIEJsYWNrb3V0LmVuYWJsZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICArK2RlcHRoO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGxlYXZlT3JEcm9wSGFuZGxlciA9IChldmVudDogRHJhZ0V2ZW50KSA9PiB7XG5cbiAgICAgICAgICAgIGlmICghIHRoaXMuaXNGaWxlVHJhbnNmZXIoZXZlbnQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAtLWRlcHRoO1xuXG4gICAgICAgICAgICBpZiAoZGVwdGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBCbGFja291dC5kaXNhYmxlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfTtcblxuICAgICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIGV2ZW50ID0+IGxlYXZlT3JEcm9wSGFuZGxlcihldmVudCkpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBldmVudCA9PiBsZWF2ZU9yRHJvcEhhbmRsZXIoZXZlbnQpKTtcblxuICAgIH1cblxuXG4gICAgcHJpdmF0ZSBvbkRyYWdFbnRlck9yT3ZlcihldmVudDogRHJhZ0V2ZW50KSB7XG5cbiAgICAgICAgaWYgKCEgdGhpcy5pc0ZpbGVUcmFuc2ZlcihldmVudCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkRyb3AoZXZlbnQ6IERyYWdFdmVudCkge1xuXG4gICAgICAgIGlmICghIHRoaXMuaXNGaWxlVHJhbnNmZXIoZXZlbnQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIEJsYWNrb3V0LmRpc2FibGUoKTtcblxuICAgICAgICB0aGlzLmhhbmRsZURyb3AoZXZlbnQpXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IGxvZy5lcnJvcihcIlVuYWJsZSB0byBpbXBvcnQ6IFwiLCBlcnIpKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgaGFuZGxlRHJvcChldmVudDogRHJhZ0V2ZW50KSB7XG5cbiAgICAgICAgLy8gd2UgaGF2ZSB0byBkbyB0aHJlZSBtYWluIHRoaW5ncyBoZXJlOlxuXG4gICAgICAgIGlmIChldmVudC5kYXRhVHJhbnNmZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGRpcmVjdGx5ID0gQWRkRmlsZVJlcXVlc3RzLmNvbXB1dGVEaXJlY3RseShldmVudCk7XG4gICAgICAgICAgICBjb25zdCByZWN1cnNpdmVseSA9IGF3YWl0IEFkZEZpbGVSZXF1ZXN0cy5jb21wdXRlUmVjdXJzaXZlbHkoZXZlbnQpO1xuXG4gICAgICAgICAgICBjb25zdCBhZGRGaWxlUmVxdWVzdHMgPSBbLi4uZGlyZWN0bHksIC4uLnJlY3Vyc2l2ZWx5LmdldE9yRWxzZShbXSldO1xuXG4gICAgICAgICAgICBhd2FpdCB0aGlzLmhhbmRsZUFkZEZpbGVSZXF1ZXN0cyhhZGRGaWxlUmVxdWVzdHMpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGhhbmRsZUFkZEZpbGVSZXF1ZXN0cyhhZGRGaWxlUmVxdWVzdHM6IEFkZEZpbGVSZXF1ZXN0W10pIHtcblxuICAgICAgICBpZiAoYWRkRmlsZVJlcXVlc3RzLmxlbmd0aCA+IDApIHtcblxuICAgICAgICAgICAgY29uc3QgYWNjb3VudFVwZ3JhZGVyID0gbmV3IEFjY291bnRVcGdyYWRlcigpO1xuXG4gICAgICAgICAgICBpZiAoYXdhaXQgYWNjb3VudFVwZ3JhZGVyLnVwZ3JhZGVSZXF1aXJlZCgpKSB7XG4gICAgICAgICAgICAgICAgYWNjb3VudFVwZ3JhZGVyLnN0YXJ0VXBncmFkZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLm9uSW1wb3J0RmlsZXMoYWRkRmlsZVJlcXVlc3RzKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBsb2cuZXJyb3IoXCJVbmFibGUgdG8gaW1wb3J0IGZpbGVzOiBcIiwgYWRkRmlsZVJlcXVlc3RzLCBlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgVG9hc3Rlci5lcnJvcihcIlVuYWJsZSB0byB1cGxvYWQgZmlsZXMuICBPbmx5IFBERiB1cGxvYWRzIGFyZSBzdXBwb3J0ZWQuXCIpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIG9uRmlsZUltcG9ydFJlcXVlc3QoZmlsZUltcG9ydFJlcXVlc3Q6IEZpbGVJbXBvcnRSZXF1ZXN0KSB7XG5cbiAgICAgICAgaWYgKCEgaXNQcmVzZW50KGZpbGVJbXBvcnRSZXF1ZXN0LmZpbGVzKSB8fCBmaWxlSW1wb3J0UmVxdWVzdC5maWxlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIC8vIGRvIG5vdCBhdHRlbXB0IGFuIGltcG9ydCBpZiBubyBmaWxlcyBhcmUgZ2l2ZW4uICBUaGlzIHdheSB0aGVcbiAgICAgICAgICAgIC8vIHByb2dyZXNzIGJhciBkb2Vzbid0IGZsYXNoIGFuZCB0aGVuIHZhbmlzaCBhZ2Fpbi5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGF3YWl0IHRoaXMub25JbXBvcnRGaWxlcyhmaWxlSW1wb3J0UmVxdWVzdC5maWxlcyk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIG9uSW1wb3J0RmlsZXMoZmlsZXM6IEFkZEZpbGVSZXF1ZXN0W10pIHtcblxuICAgICAgICB0aGlzLmZvcmNlV2luZG93Rm9jdXMoKTtcblxuICAgICAgICBjb25zdCBpbXBvcnRlZEZpbGVzID0gYXdhaXQgdGhpcy5kb0ltcG9ydEZpbGVzKGZpbGVzKTtcblxuICAgICAgICBpZiAoaW1wb3J0ZWRGaWxlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGxvZy53YXJuKFwiTm8gZmlsZXMgZ2l2ZW4gdG8gdXBsb2FkXCIpO1xuICAgICAgICAgICAgLy8gbm90aGluZyB0byBkbyBoZXJlLi4uXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUb2FzdGVyLmluZm8oYEltcG9ydGluZyAke2ZpbGVzLmxlbmd0aH0gZmlsZShzKSAob25lIG1vbWVudCBwbGVhc2UpLmApO1xuXG4gICAgICAgIGlmIChBcHBSdW50aW1lLmlzRWxlY3Ryb24oKSAmJiBpbXBvcnRlZEZpbGVzLmxlbmd0aCA9PT0gMSkge1xuXG4gICAgICAgICAgICAvLyBvbmx5IGF1dG9tYXRpY2FsbHkgb3BlbiB0aGUgZmlsZSB3aXRoaW4gRWxlY3Ryb24gYXMgdGhhdCdzIHRoZVxuICAgICAgICAgICAgLy8gb25seSBwbGF0Zm9ybSB0aGF0J3MgcmVhbGx5IGZhc3QgZW5vdWdoLlxuXG4gICAgICAgICAgICBjb25zdCBpbXBvcnRlZEZpbGUgPSBpbXBvcnRlZEZpbGVzWzBdO1xuXG4gICAgICAgICAgICBpZiAoaW1wb3J0ZWRGaWxlLmlzUHJlc2VudCgpKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBmaWxlID0gaW1wb3J0ZWRGaWxlLmdldCgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpbmdlcnByaW50ID0gZmlsZS5kb2NJbmZvLmZpbmdlcnByaW50O1xuXG4gICAgICAgICAgICAgICAgaWYgKEFwcFJ1bnRpbWUuaXNFbGVjdHJvbigpKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gRE8gTk9UIGVuYWJsZSB0aGlzIGluIHRoZSB3ZWIgVUkuLi4gdGhlIHVwbG9hZCBjb3VsZCB0YWtlXG4gICAgICAgICAgICAgICAgICAgIC8vIGZvcmV2ZXIuICBJdCBtaWdodCBiZSBuaWNlIHRvIG9wZW4gYSB0YWIgc2hvd2luZyB0aGVcbiAgICAgICAgICAgICAgICAgICAgLy8gdXBsb2FkIHByb2dyZXNzIGFuZCB0aGVuIGxvYWQgdGhlIGZpbGUgb25jZSBpdCdzXG4gICAgICAgICAgICAgICAgICAgIC8vIHVwbG9hZGVkLlxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZG9jTG9hZGVyLmNyZWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaW5nZXJwcmludCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tlbmRGaWxlUmVmOiBmaWxlLmJhY2tlbmRGaWxlUmVmLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3V2luZG93OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH0pLmxvYWQoKVxuICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gbG9nLmVycm9yKFwiVW5hYmxlIHRvIGxvYWQgZG9jOiBcIiwgZXJyKSk7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cblxuICAgICAgICBpZiAoaW1wb3J0ZWRGaWxlcy5sZW5ndGggIT09IDEpIHtcbiAgICAgICAgICAgIFRvYXN0ZXIuc3VjY2VzcyhgSW1wb3J0ZWQgJHtmaWxlcy5sZW5ndGh9IGZpbGUocykgc3VjY2Vzc2Z1bGx5LmApO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGZvcmNlV2luZG93Rm9jdXMoKSB7XG5cbiAgICAgICAgaWYgKHJlbW90ZSkge1xuICAgICAgICAgICAgcmVtb3RlLmdldEN1cnJlbnRXaW5kb3coKS5mb2N1cygpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGRvSW1wb3J0RmlsZXMoZmlsZXM6IEFkZEZpbGVSZXF1ZXN0W10pOiBQcm9taXNlPEFycmF5PE9wdGlvbmFsPEltcG9ydGVkRmlsZT4+PiB7XG5cbiAgICAgICAgY29uc3QgcHJvZ3Jlc3NUcmFja2VyID0gbmV3IFByb2dyZXNzVHJhY2tlcih7dG90YWw6IGZpbGVzLmxlbmd0aCwgaWQ6ICdpbXBvcnQtZmlsZXMnfSk7XG5cbiAgICAgICAgY29uc3QgcmVzdWx0OiBBcnJheTxPcHRpb25hbDxJbXBvcnRlZEZpbGU+PiA9IFtdO1xuXG4gICAgICAgIHRyeSB7XG5cbiAgICAgICAgICAgIGZvciAoY29uc3QgZmlsZSBvZiBmaWxlcykge1xuXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1wb3J0ZWRGaWxlID0gYXdhaXQgdGhpcy5kb0ltcG9ydEZpbGUoZmlsZSk7XG4gICAgICAgICAgICAgICAgICAgIGxvZy5pbmZvKFwiSW1wb3J0ZWQgZmlsZTogXCIsIGltcG9ydGVkRmlsZSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGltcG9ydGVkRmlsZSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICBsb2cuZXJyb3IoXCJGYWlsZWQgdG8gaW1wb3J0IGZpbGU6IFwiLCBlLCBmaWxlKTtcbiAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICBEZXRlcm1pbmF0ZVByb2dyZXNzQmFyLnVwZGF0ZShwcm9ncmVzc1RyYWNrZXIuaW5jcigpKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcblxuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgLy8gbm9vcFxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGRvSW1wb3J0RmlsZShmaWxlOiBBZGRGaWxlUmVxdWVzdCk6IFByb21pc2U8T3B0aW9uYWw8SW1wb3J0ZWRGaWxlPj4ge1xuXG4gICAgICAgIGxvZy5pbmZvKFwiSW1wb3J0aW5nIGZpbGU6IFwiLCBmaWxlKTtcblxuICAgICAgICBjb25zdCBpbXBvcnRlZEZpbGVSZXN1bHQgPVxuICAgICAgICAgICAgYXdhaXQgdGhpcy5wZGZJbXBvcnRlci5pbXBvcnRGaWxlKGZpbGUuZG9jUGF0aCwgZmlsZS5iYXNlbmFtZSk7XG5cbiAgICAgICAgaW1wb3J0ZWRGaWxlUmVzdWx0Lm1hcChpbXBvcnRlZEZpbGUgPT4ge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVkRG9jSW5mb0V2ZW50RGlzcGF0Y2hlci5kaXNwYXRjaEV2ZW50KGltcG9ydGVkRmlsZS5kb2NJbmZvKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGltcG9ydGVkRmlsZVJlc3VsdDtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybiB0cnVlIGlmIHRoaXMgaXMgYSBmaWxlIHRyYW5zZmVyIGV2ZW50IG90aGVyd2lzZSB3ZSBuZWVkIHRvIGp1c3RcbiAgICAgKiBpZ25vcmUgaXQgYXMgaXQgY291bGQgYmUgYW55IG90aGVyIHR5cGUgb2YgZHJhZyBldmVudCB3aXRoaW4gdGhlIFVJLlxuICAgICAqL1xuICAgIHByaXZhdGUgaXNGaWxlVHJhbnNmZXIoZXZlbnQ6IERyYWdFdmVudCkge1xuXG4gICAgICAgIGlmICghIGV2ZW50LmRhdGFUcmFuc2Zlcikge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNjg0ODA0My9ob3ctZG8taS1kZXRlY3QtYS1maWxlLWlzLWJlaW5nLWRyYWdnZWQtcmF0aGVyLXRoYW4tYS1kcmFnZ2FibGUtZWxlbWVudC1vbi1teS1wYVxuXG4gICAgICAgIGlmIChldmVudC5kYXRhVHJhbnNmZXIudHlwZXMpIHtcblxuICAgICAgICAgICAgLy8gd2UgbmVlZCB0byBkZXRlY3QgaWYgdGhpcyBpcyB1c2luZyB0aGUgZmlsZXMgdHlwZXMgYmVjYXVzZVxuICAgICAgICAgICAgLy8gd2UgZG8gbm90IGhhdmUgdGhlIGFjdHVhbCBmaWxlcyB1bnRpbCB0aGUgZHJvcCBpcyBjb21wbGV0ZS5cblxuICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGFUcmFuc2Zlci50eXBlcy5pbmNsdWRlcygnRmlsZXMnKSB8fFxuICAgICAgICAgICAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlci50eXBlcy5pbmNsdWRlcygnYXBwbGljYXRpb24veC1tb3otZmlsZScpKSB7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cblxuICAgICAgICBpZiAoISBldmVudC5kYXRhVHJhbnNmZXIuZmlsZXMpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChldmVudC5kYXRhVHJhbnNmZXIuZmlsZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcblxuICAgIH1cblxufVxuXG4iXX0=