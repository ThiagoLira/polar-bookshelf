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
const Logger_1 = require("polar-shared/src/logger/Logger");
const AuthHandler_1 = require("../../../web/js/apps/repository/auth_handler/AuthHandler");
const GroupJoins_1 = require("../../../web/js/datastore/sharing/rpc/GroupJoins");
const WebPersistenceLayerFactory_1 = require("../../../web/js/datastore/factories/WebPersistenceLayerFactory");
const BrowserDocLoader_1 = require("../../../web/js/apps/main/doc_loaders/browser/BrowserDocLoader");
const Providers_1 = require("polar-shared/src/util/Providers");
const BackendFileRefs_1 = require("../../../web/js/datastore/BackendFileRefs");
const RendererAnalytics_1 = require("../../../web/js/ga/RendererAnalytics");
const log = Logger_1.Logger.create();
function createInvitation() {
    const url = new URL(document.location.href);
    return JSON.parse(url.searchParams.get('invitation'));
}
function redirectToDocumentViewer(persistenceLayer, invitation) {
    return __awaiter(this, void 0, void 0, function* () {
        const docLoader = new BrowserDocLoader_1.BrowserDocLoader(Providers_1.Providers.toInterface(persistenceLayer));
        const docRef = invitation.docs[0];
        const { fingerprint } = docRef;
        const docMeta = yield persistenceLayer.getDocMeta(fingerprint);
        if (!docMeta) {
            throw new Error("No DocMeta for fingerprint: " + fingerprint);
        }
        const backendFileRef = BackendFileRefs_1.BackendFileRefs.toBackendFileRef(docMeta);
        const loadDocRequest = {
            fingerprint,
            backendFileRef,
            newWindow: false
        };
        const docLoadRequest = docLoader.create(loadDocRequest);
        yield docLoadRequest.load();
    });
}
function doHandle() {
    return __awaiter(this, void 0, void 0, function* () {
        RendererAnalytics_1.RendererAnalytics.event({ category: 'add-shared-doc', action: 'do-handle' });
        const authHandler = AuthHandler_1.AuthHandlers.get();
        const authStatus = yield authHandler.status();
        if (authStatus === 'needs-authentication') {
            yield authHandler.authenticate(document.location.href);
            return;
        }
        const persistenceLayer = WebPersistenceLayerFactory_1.WebPersistenceLayerFactory.create();
        yield persistenceLayer.init();
        const invitation = createInvitation();
        yield GroupJoins_1.GroupJoins.execAndAdd(persistenceLayer, invitation);
        yield redirectToDocumentViewer(persistenceLayer, invitation);
    });
}
doHandle().catch(err => log.error("Unable to handle document share: ", err));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJEQUFzRDtBQUN0RCwwRkFBc0Y7QUFDdEYsaUZBQTRFO0FBQzVFLCtHQUEwRztBQUcxRyxxR0FBZ0c7QUFDaEcsK0RBQTBEO0FBRTFELCtFQUEwRTtBQUMxRSw0RUFBdUU7QUFZdkUsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLFNBQVMsZ0JBQWdCO0lBQ3JCLE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBRSxDQUFDLENBQUM7QUFDM0QsQ0FBQztBQUVELFNBQWUsd0JBQXdCLENBQUMsZ0JBQWtDLEVBQ2xDLFVBQWlDOztRQUlyRSxNQUFNLFNBQVMsR0FBRyxJQUFJLG1DQUFnQixDQUFDLHFCQUFTLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztRQUVoRixNQUFNLE1BQU0sR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRWxDLE1BQU0sRUFBQyxXQUFXLEVBQUMsR0FBRyxNQUFNLENBQUM7UUFHN0IsTUFBTSxPQUFPLEdBQUcsTUFBTSxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFL0QsSUFBSSxDQUFFLE9BQU8sRUFBRTtZQUNYLE1BQU0sSUFBSSxLQUFLLENBQUMsOEJBQThCLEdBQUcsV0FBVyxDQUFDLENBQUM7U0FDakU7UUFFRCxNQUFNLGNBQWMsR0FBRyxpQ0FBZSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBRSxDQUFDO1FBRWxFLE1BQU0sY0FBYyxHQUFtQjtZQUNuQyxXQUFXO1lBQ1gsY0FBYztZQUNkLFNBQVMsRUFBRSxLQUFLO1NBQ25CLENBQUM7UUFFRixNQUFNLGNBQWMsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3hELE1BQU0sY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDO0lBRWhDLENBQUM7Q0FBQTtBQUVELFNBQWUsUUFBUTs7UUFFbkIscUNBQWlCLENBQUMsS0FBSyxDQUFDLEVBQUMsUUFBUSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUMsQ0FBQyxDQUFDO1FBRTNFLE1BQU0sV0FBVyxHQUFHLDBCQUFZLENBQUMsR0FBRyxFQUFFLENBQUM7UUFFdkMsTUFBTSxVQUFVLEdBQUcsTUFBTSxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7UUFFOUMsSUFBSSxVQUFVLEtBQUssc0JBQXNCLEVBQUU7WUFHdkMsTUFBTSxXQUFXLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkQsT0FBTztTQUNWO1FBRUQsTUFBTSxnQkFBZ0IsR0FBRyx1REFBMEIsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUM3RCxNQUFNLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDO1FBRTlCLE1BQU0sVUFBVSxHQUFHLGdCQUFnQixFQUFFLENBQUM7UUFFdEMsTUFBTSx1QkFBVSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUUxRCxNQUFNLHdCQUF3QixDQUFDLGdCQUFnQixFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBRWpFLENBQUM7Q0FBQTtBQUVELFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsbUNBQW1DLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TG9nZ2VyfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy9sb2dnZXIvTG9nZ2VyXCI7XG5pbXBvcnQge0F1dGhIYW5kbGVyc30gZnJvbSBcIi4uLy4uLy4uL3dlYi9qcy9hcHBzL3JlcG9zaXRvcnkvYXV0aF9oYW5kbGVyL0F1dGhIYW5kbGVyXCI7XG5pbXBvcnQge0dyb3VwSm9pbnN9IGZyb20gXCIuLi8uLi8uLi93ZWIvanMvZGF0YXN0b3JlL3NoYXJpbmcvcnBjL0dyb3VwSm9pbnNcIjtcbmltcG9ydCB7V2ViUGVyc2lzdGVuY2VMYXllckZhY3Rvcnl9IGZyb20gXCIuLi8uLi8uLi93ZWIvanMvZGF0YXN0b3JlL2ZhY3Rvcmllcy9XZWJQZXJzaXN0ZW5jZUxheWVyRmFjdG9yeVwiO1xuaW1wb3J0IHtHcm91cE1lbWJlckludml0YXRpb259IGZyb20gXCIuLi8uLi8uLi93ZWIvanMvZGF0YXN0b3JlL3NoYXJpbmcvZGIvR3JvdXBNZW1iZXJJbnZpdGF0aW9uc1wiO1xuaW1wb3J0IHtQZXJzaXN0ZW5jZUxheWVyfSBmcm9tIFwiLi4vLi4vLi4vd2ViL2pzL2RhdGFzdG9yZS9QZXJzaXN0ZW5jZUxheWVyXCI7XG5pbXBvcnQge0Jyb3dzZXJEb2NMb2FkZXJ9IGZyb20gXCIuLi8uLi8uLi93ZWIvanMvYXBwcy9tYWluL2RvY19sb2FkZXJzL2Jyb3dzZXIvQnJvd3NlckRvY0xvYWRlclwiO1xuaW1wb3J0IHtQcm92aWRlcnN9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL3V0aWwvUHJvdmlkZXJzXCI7XG5pbXBvcnQge0xvYWREb2NSZXF1ZXN0fSBmcm9tIFwiLi4vLi4vLi4vd2ViL2pzL2FwcHMvbWFpbi9kb2NfbG9hZGVycy9Mb2FkRG9jUmVxdWVzdFwiO1xuaW1wb3J0IHtCYWNrZW5kRmlsZVJlZnN9IGZyb20gXCIuLi8uLi8uLi93ZWIvanMvZGF0YXN0b3JlL0JhY2tlbmRGaWxlUmVmc1wiO1xuaW1wb3J0IHtSZW5kZXJlckFuYWx5dGljc30gZnJvbSBcIi4uLy4uLy4uL3dlYi9qcy9nYS9SZW5kZXJlckFuYWx5dGljc1wiO1xuXG4vLyAqKioqKlxuLy9cbi8vIEF1dG9tYXRpY2FsbHkgYWRkcyBhIFVSTCB0byB5b3VyIGRvY3VtZW50IHJlcG9zaXRvcnkgYnkgYXBwcm92aW5nIHRoZSBzaGFyaW5nXG4vLyByZXF1ZXN0IGFuZCB0aGVuIHJlZGlyZWN0cyB0byBhIGJyb3dzZXIgd2luZG93IHNob3dpbmcgdGhlIHZpZXdlci5cbi8vXG4vLyBJZiB0aGUgdXNlciBpcyBub3QgbG9nZ2VkIGluIGZvcmNlIHRoZWlyIGxvZ2luIGFuZCB0aGVuIHJlZGlyZWN0IHRoZW0gYmFja1xuLy8gdG8gYXBwcm92ZSB0aGUgYWRkaXRpb24gb2YgdGhlIGRvY3VtZW50IHRoZW4gb3BlbiBpdC5cbi8vXG4vLyAqKioqKlxuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUludml0YXRpb24oKTogR3JvdXBNZW1iZXJJbnZpdGF0aW9uIHtcbiAgICBjb25zdCB1cmwgPSBuZXcgVVJMKGRvY3VtZW50LmxvY2F0aW9uLmhyZWYpO1xuICAgIHJldHVybiBKU09OLnBhcnNlKHVybC5zZWFyY2hQYXJhbXMuZ2V0KCdpbnZpdGF0aW9uJykhKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gcmVkaXJlY3RUb0RvY3VtZW50Vmlld2VyKHBlcnNpc3RlbmNlTGF5ZXI6IFBlcnNpc3RlbmNlTGF5ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW52aXRhdGlvbjogR3JvdXBNZW1iZXJJbnZpdGF0aW9uKSB7XG5cbiAgICAvLyBjcmVhdGUgYSBVUkwgZm9yIHRoZSBkb2N1bWVudCBhbmQgcmVkaXJlY3QgdXMgdG8gaXQgLi4uXG5cbiAgICBjb25zdCBkb2NMb2FkZXIgPSBuZXcgQnJvd3NlckRvY0xvYWRlcihQcm92aWRlcnMudG9JbnRlcmZhY2UocGVyc2lzdGVuY2VMYXllcikpO1xuXG4gICAgY29uc3QgZG9jUmVmID0gaW52aXRhdGlvbi5kb2NzWzBdO1xuXG4gICAgY29uc3Qge2ZpbmdlcnByaW50fSA9IGRvY1JlZjtcblxuICAgIC8vIFRPRE8gY2FuIHdlIGdldCBKVVNUIHRoZSBkb2NJbmZvIGhlcmU/IHdvdWxkIGJlIHNsaWdodGx5IGZhc3RlclxuICAgIGNvbnN0IGRvY01ldGEgPSBhd2FpdCBwZXJzaXN0ZW5jZUxheWVyLmdldERvY01ldGEoZmluZ2VycHJpbnQpO1xuXG4gICAgaWYgKCEgZG9jTWV0YSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBEb2NNZXRhIGZvciBmaW5nZXJwcmludDogXCIgKyBmaW5nZXJwcmludCk7XG4gICAgfVxuXG4gICAgY29uc3QgYmFja2VuZEZpbGVSZWYgPSBCYWNrZW5kRmlsZVJlZnMudG9CYWNrZW5kRmlsZVJlZihkb2NNZXRhKSE7XG5cbiAgICBjb25zdCBsb2FkRG9jUmVxdWVzdDogTG9hZERvY1JlcXVlc3QgPSB7XG4gICAgICAgIGZpbmdlcnByaW50LFxuICAgICAgICBiYWNrZW5kRmlsZVJlZixcbiAgICAgICAgbmV3V2luZG93OiBmYWxzZVxuICAgIH07XG5cbiAgICBjb25zdCBkb2NMb2FkUmVxdWVzdCA9IGRvY0xvYWRlci5jcmVhdGUobG9hZERvY1JlcXVlc3QpO1xuICAgIGF3YWl0IGRvY0xvYWRSZXF1ZXN0LmxvYWQoKTtcblxufVxuXG5hc3luYyBmdW5jdGlvbiBkb0hhbmRsZSgpIHtcblxuICAgIFJlbmRlcmVyQW5hbHl0aWNzLmV2ZW50KHtjYXRlZ29yeTogJ2FkZC1zaGFyZWQtZG9jJywgYWN0aW9uOiAnZG8taGFuZGxlJ30pO1xuXG4gICAgY29uc3QgYXV0aEhhbmRsZXIgPSBBdXRoSGFuZGxlcnMuZ2V0KCk7XG5cbiAgICBjb25zdCBhdXRoU3RhdHVzID0gYXdhaXQgYXV0aEhhbmRsZXIuc3RhdHVzKCk7XG5cbiAgICBpZiAoYXV0aFN0YXR1cyA9PT0gJ25lZWRzLWF1dGhlbnRpY2F0aW9uJykge1xuICAgICAgICAvLyB0aGUgdXNlciBuZWVkcyB0byBhdXRoZW50aWNhdGUgc28gbG9nIHRoZW0gaW4gYW5kIHRoZW4gcmVkaXJlY3QgdGhlbVxuICAgICAgICAvLyBiYWNrIHRvIHRoaXMgcGFnZS5cbiAgICAgICAgYXdhaXQgYXV0aEhhbmRsZXIuYXV0aGVudGljYXRlKGRvY3VtZW50LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcGVyc2lzdGVuY2VMYXllciA9IFdlYlBlcnNpc3RlbmNlTGF5ZXJGYWN0b3J5LmNyZWF0ZSgpO1xuICAgIGF3YWl0IHBlcnNpc3RlbmNlTGF5ZXIuaW5pdCgpOyAvLyBUT0RPIGFuIGVycm9yIGxpc3RlbmVyP1xuXG4gICAgY29uc3QgaW52aXRhdGlvbiA9IGNyZWF0ZUludml0YXRpb24oKTtcblxuICAgIGF3YWl0IEdyb3VwSm9pbnMuZXhlY0FuZEFkZChwZXJzaXN0ZW5jZUxheWVyLCBpbnZpdGF0aW9uKTtcblxuICAgIGF3YWl0IHJlZGlyZWN0VG9Eb2N1bWVudFZpZXdlcihwZXJzaXN0ZW5jZUxheWVyLCBpbnZpdGF0aW9uKTtcblxufVxuXG5kb0hhbmRsZSgpLmNhdGNoKGVyciA9PiBsb2cuZXJyb3IoXCJVbmFibGUgdG8gaGFuZGxlIGRvY3VtZW50IHNoYXJlOiBcIiwgZXJyKSk7XG4iXX0=