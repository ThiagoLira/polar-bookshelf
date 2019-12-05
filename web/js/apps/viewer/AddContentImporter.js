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
const PDFImporter_1 = require("../repository/importers/PDFImporter");
const FilePaths_1 = require("polar-shared/src/util/FilePaths");
const Optional_1 = require("polar-shared/src/util/ts/Optional");
const AddContentButtonOverlays_1 = require("./AddContentButtonOverlays");
const Toaster_1 = require("../../ui/toaster/Toaster");
const PreviewURLs_1 = require("polar-webapp-links/src/docs/PreviewURLs");
const AuthHandler_1 = require("../repository/auth_handler/AuthHandler");
const LoginURLs_1 = require("./LoginURLs");
const Logger_1 = require("polar-shared/src/logger/Logger");
const AccountUpgrader_1 = require("../../ui/account_upgrade/AccountUpgrader");
const Latch_1 = require("polar-shared/src/util/Latch");
const log = Logger_1.Logger.create();
class DefaultAddContentImporter {
    constructor() {
        this.latch = new Latch_1.Latch();
    }
    prepare() {
        return __awaiter(this, void 0, void 0, function* () {
            if (PreviewURLs_1.PreviewURLs.isAutoAdd()) {
                this.latch.resolve(true);
            }
            else {
                const authenticated = yield this.isAuthenticated();
                this.overlay = yield AddContentButtonOverlays_1.AddContentButtonOverlays.create(() => {
                    if (PreviewURLs_1.PreviewURLs.getDesktopAppState() === 'active') {
                        log.notice("Completing import via web app desktop");
                        this.completeImportViaDesktopApp();
                    }
                    else {
                        if (authenticated) {
                            log.notice("Completing import via web app");
                            this.completeImportViaWebApp();
                        }
                        else {
                            log.notice("Completing import via web app login");
                            this.completeImportViaWebAppLogin();
                        }
                    }
                });
            }
            yield this.latch.get();
        });
    }
    completeImportViaWebApp() {
        this.latch.resolve(true);
    }
    completeImportViaWebAppLogin() {
        const successURL = PreviewURLs_1.PreviewURLs.createAutoAdd(document.location.href);
        const loginURL = LoginURLs_1.LoginURLs.create(successURL);
        document.location.href = loginURL;
    }
    completeImportViaDesktopApp() {
        const message = {
            type: 'polar-extension-import-content',
            link: this.getURL(),
            contentType: 'application/pdf'
        };
        const extensionIDs = [
            "nplbojledjdlbankapinifindadkdpnj",
            "jkfdkjomocoaljglgddnmhcbolldcafd"
        ];
        if (chrome && chrome.runtime && chrome.runtime.sendMessage) {
            for (const extensionID of extensionIDs) {
                const responseCallback = (message) => {
                    if (message) {
                        if (message.success !== undefined) {
                            if (message.success) {
                                Toaster_1.Toaster.success("Successfully imported into Polar Desktop");
                            }
                            else {
                                Toaster_1.Toaster.error("Failed to import into Polar Desktop: " + message.message);
                            }
                        }
                    }
                    else {
                    }
                };
                chrome.runtime.sendMessage(extensionID, message, responseCallback);
            }
        }
    }
    doImport(persistenceLayerProvider) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const accountUpgrader = new AccountUpgrader_1.AccountUpgrader();
                if (yield accountUpgrader.upgradeRequired()) {
                    accountUpgrader.startUpgrade();
                    return Optional_1.Optional.empty();
                }
                Toaster_1.Toaster.info("Importing file into Polar document repository...");
                yield this.latch.get();
                if (this.overlay) {
                    this.overlay.destroy();
                }
                const url = this.getURL();
                log.notice("Importing URL " + url);
                const basename = FilePaths_1.FilePaths.basename(url);
                const response = yield fetch(url, { mode: 'cors' });
                const blob = yield response.blob();
                log.notice("URL converted to blob");
                const blobURL = URL.createObjectURL(blob);
                log.notice("Created blob URL: " + blobURL);
                const pdfImporter = new PDFImporter_1.PDFImporter(persistenceLayerProvider);
                const importedFile = yield pdfImporter.importFile(blobURL, basename);
                importedFile.map(this.updateURL);
                Toaster_1.Toaster.success('File successfully added to document repository');
                return importedFile;
            }
            catch (e) {
                Toaster_1.Toaster.error('Unable to add to document repository: ' + e.message);
                throw e;
            }
        });
    }
    isAuthenticated() {
        return __awaiter(this, void 0, void 0, function* () {
            const authHandler = AuthHandler_1.AuthHandlers.get();
            const userInfo = yield authHandler.userInfo();
            return userInfo.isPresent();
        });
    }
    updateURL(importedFile) {
        const url = new URL(document.location.href);
        url.searchParams.delete('preview');
        url.searchParams.set('filename', importedFile.backendFileRef.name);
        history.pushState({}, document.title, url.toString());
    }
    getURL() {
        const url = new URL(document.location.href);
        return url.searchParams.get('file');
    }
}
exports.DefaultAddContentImporter = DefaultAddContentImporter;
class NullAddContentImporter {
    prepare() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    doImport(persistenceLayerProvider) {
        return __awaiter(this, void 0, void 0, function* () {
            return Optional_1.Optional.empty();
        });
    }
}
exports.NullAddContentImporter = NullAddContentImporter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRkQ29udGVudEltcG9ydGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQWRkQ29udGVudEltcG9ydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscUVBQWdFO0FBR2hFLCtEQUEwRDtBQUMxRCxnRUFBMkQ7QUFDM0QseUVBQW9FO0FBR3BFLHNEQUFpRDtBQUNqRCx5RUFBb0U7QUFDcEUsd0VBQW9FO0FBQ3BFLDJDQUFzQztBQUN0QywyREFBc0Q7QUFDdEQsOEVBQXlFO0FBQ3pFLHVEQUFrRDtBQUVsRCxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFtQjVCLE1BQWEseUJBQXlCO0lBQXRDO1FBSVksVUFBSyxHQUFHLElBQUksYUFBSyxFQUFXLENBQUM7SUE0THpDLENBQUM7SUF4TGdCLE9BQU87O1lBRWhCLElBQUkseUJBQVcsQ0FBQyxTQUFTLEVBQUUsRUFBRTtnQkFHekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7YUFFNUI7aUJBQU07Z0JBRUgsTUFBTSxhQUFhLEdBQUcsTUFBTSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7Z0JBRW5ELElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxtREFBd0IsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFO29CQUV0RCxJQUFJLHlCQUFXLENBQUMsa0JBQWtCLEVBQUUsS0FBSyxRQUFRLEVBQUU7d0JBRS9DLEdBQUcsQ0FBQyxNQUFNLENBQUMsdUNBQXVDLENBQUMsQ0FBQzt3QkFHcEQsSUFBSSxDQUFDLDJCQUEyQixFQUFFLENBQUM7cUJBRXRDO3lCQUFNO3dCQUVILElBQUksYUFBYSxFQUFFOzRCQUNmLEdBQUcsQ0FBQyxNQUFNLENBQUMsK0JBQStCLENBQUMsQ0FBQzs0QkFDNUMsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7eUJBRWxDOzZCQUFNOzRCQUNILEdBQUcsQ0FBQyxNQUFNLENBQUMscUNB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TyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsUUFBUSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUUxRCxDQUFDO0lBRU8sTUFBTTtRQUNWLE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLFFBQVEsQ0FBQyxRQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0MsT0FBTyxHQUFHLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUUsQ0FBQztJQUN6QyxDQUFDO0NBRUo7QUFoTUQsOERBZ01DO0FBRUQsTUFBYSxzQkFBc0I7SUFFbEIsT0FBTzs7UUFFcEIsQ0FBQztLQUFBO0lBRVksUUFBUSxDQUFDLHdCQUErRDs7WUFDakYsT0FBTyxtQkFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzVCLENBQUM7S0FBQTtDQUVKO0FBVkQsd0RBVUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BERkltcG9ydGVyfSBmcm9tICcuLi9yZXBvc2l0b3J5L2ltcG9ydGVycy9QREZJbXBvcnRlcic7XG5pbXBvcnQge0ltcG9ydGVkRmlsZX0gZnJvbSAnLi4vcmVwb3NpdG9yeS9pbXBvcnRlcnMvUERGSW1wb3J0ZXInO1xuaW1wb3J0IHtJUHJvdmlkZXJ9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC9Qcm92aWRlcnMnO1xuaW1wb3J0IHtGaWxlUGF0aHN9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC9GaWxlUGF0aHMnO1xuaW1wb3J0IHtPcHRpb25hbH0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL3RzL09wdGlvbmFsJztcbmltcG9ydCB7QWRkQ29udGVudEJ1dHRvbk92ZXJsYXlzfSBmcm9tICcuL0FkZENvbnRlbnRCdXR0b25PdmVybGF5cyc7XG5pbXBvcnQge0xpc3RlbmFibGVQZXJzaXN0ZW5jZUxheWVyfSBmcm9tICcuLi8uLi9kYXRhc3RvcmUvTGlzdGVuYWJsZVBlcnNpc3RlbmNlTGF5ZXInO1xuaW1wb3J0IHtJbmplY3RlZENvbXBvbmVudH0gZnJvbSAnLi4vLi4vdWkvdXRpbC9SZWFjdEluamVjdG9yJztcbmltcG9ydCB7VG9hc3Rlcn0gZnJvbSAnLi4vLi4vdWkvdG9hc3Rlci9Ub2FzdGVyJztcbmltcG9ydCB7UHJldmlld1VSTHN9IGZyb20gJ3BvbGFyLXdlYmFwcC1saW5rcy9zcmMvZG9jcy9QcmV2aWV3VVJMcyc7XG5pbXBvcnQge0F1dGhIYW5kbGVyc30gZnJvbSAnLi4vcmVwb3NpdG9yeS9hdXRoX2hhbmRsZXIvQXV0aEhhbmRsZXInO1xuaW1wb3J0IHtMb2dpblVSTHN9IGZyb20gJy4vTG9naW5VUkxzJztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL2xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IHtBY2NvdW50VXBncmFkZXJ9IGZyb20gXCIuLi8uLi91aS9hY2NvdW50X3VwZ3JhZGUvQWNjb3VudFVwZ3JhZGVyXCI7XG5pbXBvcnQge0xhdGNofSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy91dGlsL0xhdGNoXCI7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuZXhwb3J0IGludGVyZmFjZSBBZGRDb250ZW50SW1wb3J0ZXIge1xuXG4gICAgLyoqXG4gICAgICogUGVyZm9ybSBhbnlzIHNldHVwLlxuICAgICAqL1xuICAgIHByZXBhcmUoKTogUHJvbWlzZTx2b2lkPjtcblxuICAgIC8qKlxuICAgICAqIERvIHRoZSBhY3R1YWwgaW1wb3J0LlxuICAgICAqL1xuICAgIGRvSW1wb3J0KHBlcnNpc3RlbmNlTGF5ZXJQcm92aWRlcjogSVByb3ZpZGVyPExpc3RlbmFibGVQZXJzaXN0ZW5jZUxheWVyPik6IFByb21pc2U8T3B0aW9uYWw8SW1wb3J0ZWRGaWxlPj47XG5cbn1cblxuLyoqXG4gKiBIYW5kbGVzIGFueSBpc3N1ZXMgd2l0aCBpbXBvcnRpbmcgY29udGVudCBpbnRvIFBvbGFyXG4gKi9cbmV4cG9ydCBjbGFzcyBEZWZhdWx0QWRkQ29udGVudEltcG9ydGVyICBpbXBsZW1lbnRzIEFkZENvbnRlbnRJbXBvcnRlciB7XG5cbiAgICAvLyBjcmVhdGUgYSBsYXRjaCBzbyB0aGF0IHdlIGNhbiBibG9jayB0aGUgbW9kZWwgdW50aWwgdGhlXG4gICAgLy8gZG9jdW1lbnQgd2FzIGFkZGVkLlxuICAgIHByaXZhdGUgbGF0Y2ggPSBuZXcgTGF0Y2g8Ym9vbGVhbj4oKTtcblxuICAgIHByaXZhdGUgb3ZlcmxheT86IEluamVjdGVkQ29tcG9uZW50O1xuXG4gICAgcHVibGljIGFzeW5jIHByZXBhcmUoKTogUHJvbWlzZTx2b2lkPiB7XG5cbiAgICAgICAgaWYgKFByZXZpZXdVUkxzLmlzQXV0b0FkZCgpKSB7XG5cbiAgICAgICAgICAgIC8vIHRoZSB1c2VyIGlzIG5vdyBhdXRvLWFkZGluZyB0aGlzIFVSTCBzbyB3ZSBkb24ndCBuZWVkIHRvIHByb21wdC5cbiAgICAgICAgICAgIHRoaXMubGF0Y2gucmVzb2x2ZSh0cnVlKTtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBjb25zdCBhdXRoZW50aWNhdGVkID0gYXdhaXQgdGhpcy5pc0F1dGhlbnRpY2F0ZWQoKTtcblxuICAgICAgICAgICAgdGhpcy5vdmVybGF5ID0gYXdhaXQgQWRkQ29udGVudEJ1dHRvbk92ZXJsYXlzLmNyZWF0ZSgoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBpZiAoUHJldmlld1VSTHMuZ2V0RGVza3RvcEFwcFN0YXRlKCkgPT09ICdhY3RpdmUnKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgbG9nLm5vdGljZShcIkNvbXBsZXRpbmcgaW1wb3J0IHZpYSB3ZWIgYXBwIGRlc2t0b3BcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gc2VlIGlmIHdlIHByZWZlciB0byByZXNvbHZlIHRoaXMgYnkgYWRkaW5nIHRvIHRoZSBkZXNrdG9wXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcGxldGVJbXBvcnRWaWFEZXNrdG9wQXBwKCk7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChhdXRoZW50aWNhdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2cubm90aWNlKFwiQ29tcGxldGluZyBpbXBvcnQgdmlhIHdlYiBhcHBcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXBsZXRlSW1wb3J0VmlhV2ViQXBwKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZy5ub3RpY2UoXCJDb21wbGV0aW5nIGltcG9ydCB2aWEgd2ViIGFwcCBsb2dpblwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcGxldGVJbXBvcnRWaWFXZWJBcHBMb2dpbigpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cblxuICAgICAgICAvLyB3ZSBoYXZlIHRvIGF3YWl0IG91ciBvd24gbGF0Y2ggaGVyZSBzbyB0byBmdWxseSB3YWl0IHVudGlsIHRoZSB1c2VyXG4gICAgICAgIC8vIGhhcyBhc2tlZCB0byBhZGQgYmVjYXVzZSBhZnRlciB0aGlzIHdlIG1pZ2h0IGRvIG90aGVyIHRoaW5ncyBsaWtlXG4gICAgICAgIC8vIGluaXQgdGhlIGRhdGFzdG9yZS5cbiAgICAgICAgYXdhaXQgdGhpcy5sYXRjaC5nZXQoKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgY29tcGxldGVJbXBvcnRWaWFXZWJBcHAoKSB7XG5cbiAgICAgICAgLy8gcmVzb2x2ZSB0aGUgbGF0Y2ggc28gd2UgY2FuIG1vdmUgZm9yd2FyZC5cbiAgICAgICAgdGhpcy5sYXRjaC5yZXNvbHZlKHRydWUpO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjb21wbGV0ZUltcG9ydFZpYVdlYkFwcExvZ2luKCkge1xuXG4gICAgICAgIC8vIElmIHdlIGFyZW4ndCBsb2dnZWQgaW4gaGVyZSwgd2UgbmVlZCB0byByZWRpcmVjdCB0byB0aGVcbiAgICAgICAgLy8gcHJvcGVyIGxvZ2luIHBhdGggYW5kIGNyZWF0ZSBhbiBhdXRvLWFkZCBVUkxcblxuICAgICAgICBjb25zdCBzdWNjZXNzVVJMID0gUHJldmlld1VSTHMuY3JlYXRlQXV0b0FkZChkb2N1bWVudC5sb2NhdGlvbiEuaHJlZik7XG4gICAgICAgIGNvbnN0IGxvZ2luVVJMID0gTG9naW5VUkxzLmNyZWF0ZShzdWNjZXNzVVJMKTtcblxuICAgICAgICBkb2N1bWVudC5sb2NhdGlvbiEuaHJlZiA9IGxvZ2luVVJMO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjb21wbGV0ZUltcG9ydFZpYURlc2t0b3BBcHAoKSB7XG5cbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IHtcbiAgICAgICAgICAgIHR5cGU6ICdwb2xhci1leHRlbnNpb24taW1wb3J0LWNvbnRlbnQnLFxuICAgICAgICAgICAgbGluazogdGhpcy5nZXRVUkwoKSxcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vcGRmJ1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGV4dGVuc2lvbklEcyA9IFtcbiAgICAgICAgICAgIFwibnBsYm9qbGVkamRsYmFua2FwaW5pZmluZGFka2RwbmpcIiwgLy8gZGV2XG4gICAgICAgICAgICBcImprZmRram9tb2NvYWxqZ2xnZGRubWhjYm9sbGRjYWZkXCIgIC8vIHByb2RcbiAgICAgICAgXTtcblxuICAgICAgICBpZiAoY2hyb21lICYmIGNocm9tZS5ydW50aW1lICYmIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKSB7XG5cbiAgICAgICAgICAgIGZvciAoY29uc3QgZXh0ZW5zaW9uSUQgb2YgZXh0ZW5zaW9uSURzKSB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZUNhbGxiYWNrID0gKG1lc3NhZ2U6IGFueSkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLnN1Y2Nlc3MgIT09IHVuZGVmaW5lZCkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2Uuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2FzdGVyLnN1Y2Nlc3MoXCJTdWNjZXNzZnVsbHkgaW1wb3J0ZWQgaW50byBQb2xhciBEZXNrdG9wXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0ZXIuZXJyb3IoXCJGYWlsZWQgdG8gaW1wb3J0IGludG8gUG9sYXIgRGVza3RvcDogXCIgKyBtZXNzYWdlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB3ZSBkb24ndCBhbHdheXMgZ2V0IGEgY2FsbGJhY2sgYW5kIGl0IHdpbGwgYmUgbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2hlbiBub3RoaW5nIHNhdyB0aGUgbWVzc2FnZSBpZiB0aGUgZXh0ZW5zaW9uIGlzbid0XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBwcmVzZW50LlxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoZXh0ZW5zaW9uSUQsIG1lc3NhZ2UsIHJlc3BvbnNlQ2FsbGJhY2spO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGRvSW1wb3J0KHBlcnNpc3RlbmNlTGF5ZXJQcm92aWRlcjogSVByb3ZpZGVyPExpc3RlbmFibGVQZXJzaXN0ZW5jZUxheWVyPik6IFByb21pc2U8T3B0aW9uYWw8SW1wb3J0ZWRGaWxlPj4ge1xuXG4gICAgICAgIHRyeSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGFjY291bnRVcGdyYWRlciA9IG5ldyBBY2NvdW50VXBncmFkZXIoKTtcblxuICAgICAgICAgICAgaWYgKGF3YWl0IGFjY291bnRVcGdyYWRlci51cGdyYWRlUmVxdWlyZWQoKSkge1xuICAgICAgICAgICAgICAgIGFjY291bnRVcGdyYWRlci5zdGFydFVwZ3JhZGUoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gT3B0aW9uYWwuZW1wdHkoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgVG9hc3Rlci5pbmZvKFwiSW1wb3J0aW5nIGZpbGUgaW50byBQb2xhciBkb2N1bWVudCByZXBvc2l0b3J5Li4uXCIpO1xuXG4gICAgICAgICAgICBhd2FpdCB0aGlzLmxhdGNoLmdldCgpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5vdmVybGF5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vdmVybGF5LmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgdXJsID0gdGhpcy5nZXRVUkwoKTtcblxuICAgICAgICAgICAgbG9nLm5vdGljZShcIkltcG9ydGluZyBVUkwgXCIgKyB1cmwpO1xuXG4gICAgICAgICAgICBjb25zdCBiYXNlbmFtZSA9IEZpbGVQYXRocy5iYXNlbmFtZSh1cmwpO1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHttb2RlOiAnY29ycyd9KTtcbiAgICAgICAgICAgIGNvbnN0IGJsb2IgPSBhd2FpdCByZXNwb25zZS5ibG9iKCk7XG5cbiAgICAgICAgICAgIGxvZy5ub3RpY2UoXCJVUkwgY29udmVydGVkIHRvIGJsb2JcIik7XG4gICAgICAgICAgICBjb25zdCBibG9iVVJMID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuICAgICAgICAgICAgbG9nLm5vdGljZShcIkNyZWF0ZWQgYmxvYiBVUkw6IFwiICsgYmxvYlVSTCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHBkZkltcG9ydGVyID0gbmV3IFBERkltcG9ydGVyKHBlcnNpc3RlbmNlTGF5ZXJQcm92aWRlcik7XG5cbiAgICAgICAgICAgIGNvbnN0IGltcG9ydGVkRmlsZSA9IGF3YWl0IHBkZkltcG9ydGVyLmltcG9ydEZpbGUoYmxvYlVSTCwgYmFzZW5hbWUpO1xuXG4gICAgICAgICAgICBpbXBvcnRlZEZpbGUubWFwKHRoaXMudXBkYXRlVVJMKTtcblxuICAgICAgICAgICAgVG9hc3Rlci5zdWNjZXNzKCdGaWxlIHN1Y2Nlc3NmdWxseSBhZGRlZCB0byBkb2N1bWVudCByZXBvc2l0b3J5Jyk7XG5cbiAgICAgICAgICAgIHJldHVybiBpbXBvcnRlZEZpbGU7XG5cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgVG9hc3Rlci5lcnJvcignVW5hYmxlIHRvIGFkZCB0byBkb2N1bWVudCByZXBvc2l0b3J5OiAnICsgZS5tZXNzYWdlKTtcbiAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgaXNBdXRoZW50aWNhdGVkKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuXG4gICAgICAgIGNvbnN0IGF1dGhIYW5kbGVyID0gQXV0aEhhbmRsZXJzLmdldCgpO1xuXG4gICAgICAgIGNvbnN0IHVzZXJJbmZvID0gYXdhaXQgYXV0aEhhbmRsZXIudXNlckluZm8oKTtcblxuICAgICAgICByZXR1cm4gdXNlckluZm8uaXNQcmVzZW50KCk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIHVwZGF0ZVVSTChpbXBvcnRlZEZpbGU6IEltcG9ydGVkRmlsZSkge1xuXG4gICAgICAgIGNvbnN0IHVybCA9IG5ldyBVUkwoZG9jdW1lbnQubG9jYXRpb24hLmhyZWYpO1xuICAgICAgICB1cmwuc2VhcmNoUGFyYW1zLmRlbGV0ZSgncHJldmlldycpO1xuICAgICAgICB1cmwuc2VhcmNoUGFyYW1zLnNldCgnZmlsZW5hbWUnLCBpbXBvcnRlZEZpbGUuYmFja2VuZEZpbGVSZWYubmFtZSk7XG5cbiAgICAgICAgaGlzdG9yeS5wdXNoU3RhdGUoe30sIGRvY3VtZW50LnRpdGxlLCB1cmwudG9TdHJpbmcoKSk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFVSTCgpIHtcbiAgICAgICAgY29uc3QgdXJsID0gbmV3IFVSTChkb2N1bWVudC5sb2NhdGlvbiEuaHJlZik7XG4gICAgICAgIHJldHVybiB1cmwuc2VhcmNoUGFyYW1zLmdldCgnZmlsZScpITtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGNsYXNzIE51bGxBZGRDb250ZW50SW1wb3J0ZXIgaW1wbGVtZW50cyBBZGRDb250ZW50SW1wb3J0ZXIge1xuXG4gICAgcHVibGljIGFzeW5jIHByZXBhcmUoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIC8vIG5vb3BcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgZG9JbXBvcnQocGVyc2lzdGVuY2VMYXllclByb3ZpZGVyOiBJUHJvdmlkZXI8TGlzdGVuYWJsZVBlcnNpc3RlbmNlTGF5ZXI+KTogUHJvbWlzZTxPcHRpb25hbDxJbXBvcnRlZEZpbGU+PiB7XG4gICAgICAgIHJldHVybiBPcHRpb25hbC5lbXB0eSgpO1xuICAgIH1cblxufVxuIl19