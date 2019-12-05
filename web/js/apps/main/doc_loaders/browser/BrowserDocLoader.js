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
const Preconditions_1 = require("polar-shared/src/Preconditions");
const Logger_1 = require("polar-shared/src/logger/Logger");
const PDFLoader_1 = require("../../file_loaders/PDFLoader");
const Nav_1 = require("../../../../ui/util/Nav");
const PHZLoader_1 = require("../../file_loaders/PHZLoader");
const FilePaths_1 = require("polar-shared/src/util/FilePaths");
const log = Logger_1.Logger.create();
class BrowserDocLoader {
    constructor(persistenceLayerProvider) {
        this.persistenceLayerProvider = persistenceLayerProvider;
    }
    create(loadDocRequest) {
        const linkLoader = Nav_1.Nav.createLinkLoader({ focus: true, newWindow: loadDocRequest.newWindow });
        Preconditions_1.Preconditions.assertPresent(loadDocRequest.fingerprint, "fingerprint");
        Preconditions_1.Preconditions.assertPresent(loadDocRequest.backendFileRef, "backendFileRef");
        Preconditions_1.Preconditions.assertPresent(loadDocRequest.backendFileRef.name, "backendFileRef.name");
        const persistenceLayer = this.persistenceLayerProvider.get();
        return {
            load() {
                return __awaiter(this, void 0, void 0, function* () {
                    const { backendFileRef } = loadDocRequest;
                    const datastoreFile = persistenceLayer.getFile(backendFileRef.backend, backendFileRef);
                    const toViewerURL = () => {
                        const fileName = backendFileRef.name;
                        if (FilePaths_1.FilePaths.hasExtension(fileName, "pdf")) {
                            return PDFLoader_1.PDFLoader.createViewerURL(datastoreFile.url, backendFileRef.name);
                        }
                        else if (FilePaths_1.FilePaths.hasExtension(fileName, "phz")) {
                            return PHZLoader_1.PHZLoader.createViewerURL(datastoreFile.url, backendFileRef.name);
                        }
                        else {
                            throw new Error("Unable to handle file: " + fileName);
                        }
                    };
                    const viewerURL = toViewerURL();
                    linkLoader.load(viewerURL);
                });
            }
        };
    }
}
exports.BrowserDocLoader = BrowserDocLoader;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnJvd3NlckRvY0xvYWRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkJyb3dzZXJEb2NMb2FkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQSxrRUFBNkQ7QUFJN0QsMkRBQXNEO0FBQ3RELDREQUF1RDtBQUV2RCxpREFBNEM7QUFDNUMsNERBQXVEO0FBQ3ZELCtEQUEwRDtBQUUxRCxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFNUIsTUFBYSxnQkFBZ0I7SUFJekIsWUFBWSx3QkFBcUQ7UUFDN0QsSUFBSSxDQUFDLHdCQUF3QixHQUFHLHdCQUF3QixDQUFDO0lBQzdELENBQUM7SUFFTSxNQUFNLENBQUMsY0FBOEI7UUFFeEMsTUFBTSxVQUFVLEdBQUcsU0FBRyxDQUFDLGdCQUFnQixDQUFDLEVBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsY0FBYyxDQUFDLFNBQVMsRUFBQyxDQUFDLENBQUM7UUFFNUYsNkJBQWEsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUN2RSw2QkFBYSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsY0FBYyxFQUFFLGdCQUFnQixDQUFDLENBQUM7UUFDN0UsNkJBQWEsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUscUJBQXFCLENBQUMsQ0FBQztRQUV2RixNQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUU3RCxPQUFPO1lBRUcsSUFBSTs7b0JBRU4sTUFBTSxFQUFDLGNBQWMsRUFBQyxHQUFHLGNBQWMsQ0FBQztvQkFFeEMsTUFBTSxhQUFhLEdBQUcsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsY0FBYyxDQUFDLENBQUM7b0JBRXZGLE1BQU0sV0FBVyxHQUFHLEdBQUcsRUFBRTt3QkFFckIsTUFBTSxRQUFRLEdBQUcsY0FBYyxDQUFDLElBQUksQ0FBQzt3QkFFckMsSUFBSSxxQkFBUyxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLEVBQUU7NEJBQ3pDLE9BQU8scUJBQVMsQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLEdBQUcsRUFBRSxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7eUJBQzVFOzZCQUFNLElBQUkscUJBQVMsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxFQUFFOzRCQUNoRCxPQUFPLHFCQUFTLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEVBQUUsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO3lCQUM1RTs2QkFBTTs0QkFDSCxNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixHQUFHLFFBQVEsQ0FBQyxDQUFDO3lCQUN6RDtvQkFFTCxDQUFDLENBQUM7b0JBRUYsTUFBTSxTQUFTLEdBQUcsV0FBVyxFQUFFLENBQUM7b0JBRWhDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQy9CLENBQUM7YUFBQTtTQUVKLENBQUM7SUFFTixDQUFDO0NBRUo7QUFqREQsNENBaURDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtMb2FkRG9jUmVxdWVzdH0gZnJvbSAnLi4vTG9hZERvY1JlcXVlc3QnO1xuaW1wb3J0IHtQcmVjb25kaXRpb25zfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL1ByZWNvbmRpdGlvbnMnO1xuaW1wb3J0IHtJUHJvdmlkZXJ9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC9Qcm92aWRlcnMnO1xuaW1wb3J0IHtQZXJzaXN0ZW5jZUxheWVyfSBmcm9tICcuLi8uLi8uLi8uLi9kYXRhc3RvcmUvUGVyc2lzdGVuY2VMYXllcic7XG5pbXBvcnQge0JhY2tlbmR9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvZGF0YXN0b3JlL0JhY2tlbmQnO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge1BERkxvYWRlcn0gZnJvbSAnLi4vLi4vZmlsZV9sb2FkZXJzL1BERkxvYWRlcic7XG5pbXBvcnQge0lEb2NMb2FkZXIsIElEb2NMb2FkUmVxdWVzdH0gZnJvbSAnLi4vSURvY0xvYWRlcic7XG5pbXBvcnQge05hdn0gZnJvbSAnLi4vLi4vLi4vLi4vdWkvdXRpbC9OYXYnO1xuaW1wb3J0IHtQSFpMb2FkZXJ9IGZyb20gJy4uLy4uL2ZpbGVfbG9hZGVycy9QSFpMb2FkZXInO1xuaW1wb3J0IHtGaWxlUGF0aHN9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC9GaWxlUGF0aHMnO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbmV4cG9ydCBjbGFzcyBCcm93c2VyRG9jTG9hZGVyIGltcGxlbWVudHMgSURvY0xvYWRlciB7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IHBlcnNpc3RlbmNlTGF5ZXJQcm92aWRlcjogSVByb3ZpZGVyPFBlcnNpc3RlbmNlTGF5ZXI+O1xuXG4gICAgY29uc3RydWN0b3IocGVyc2lzdGVuY2VMYXllclByb3ZpZGVyOiBJUHJvdmlkZXI8UGVyc2lzdGVuY2VMYXllcj4pIHtcbiAgICAgICAgdGhpcy5wZXJzaXN0ZW5jZUxheWVyUHJvdmlkZXIgPSBwZXJzaXN0ZW5jZUxheWVyUHJvdmlkZXI7XG4gICAgfVxuXG4gICAgcHVibGljIGNyZWF0ZShsb2FkRG9jUmVxdWVzdDogTG9hZERvY1JlcXVlc3QpOiBJRG9jTG9hZFJlcXVlc3Qge1xuXG4gICAgICAgIGNvbnN0IGxpbmtMb2FkZXIgPSBOYXYuY3JlYXRlTGlua0xvYWRlcih7Zm9jdXM6IHRydWUsIG5ld1dpbmRvdzogbG9hZERvY1JlcXVlc3QubmV3V2luZG93fSk7XG5cbiAgICAgICAgUHJlY29uZGl0aW9ucy5hc3NlcnRQcmVzZW50KGxvYWREb2NSZXF1ZXN0LmZpbmdlcnByaW50LCBcImZpbmdlcnByaW50XCIpO1xuICAgICAgICBQcmVjb25kaXRpb25zLmFzc2VydFByZXNlbnQobG9hZERvY1JlcXVlc3QuYmFja2VuZEZpbGVSZWYsIFwiYmFja2VuZEZpbGVSZWZcIik7XG4gICAgICAgIFByZWNvbmRpdGlvbnMuYXNzZXJ0UHJlc2VudChsb2FkRG9jUmVxdWVzdC5iYWNrZW5kRmlsZVJlZi5uYW1lLCBcImJhY2tlbmRGaWxlUmVmLm5hbWVcIik7XG5cbiAgICAgICAgY29uc3QgcGVyc2lzdGVuY2VMYXllciA9IHRoaXMucGVyc2lzdGVuY2VMYXllclByb3ZpZGVyLmdldCgpO1xuXG4gICAgICAgIHJldHVybiB7XG5cbiAgICAgICAgICAgIGFzeW5jIGxvYWQoKTogUHJvbWlzZTx2b2lkPiB7XG5cbiAgICAgICAgICAgICAgICBjb25zdCB7YmFja2VuZEZpbGVSZWZ9ID0gbG9hZERvY1JlcXVlc3Q7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhc3RvcmVGaWxlID0gcGVyc2lzdGVuY2VMYXllci5nZXRGaWxlKGJhY2tlbmRGaWxlUmVmLmJhY2tlbmQsIGJhY2tlbmRGaWxlUmVmKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHRvVmlld2VyVVJMID0gKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpbGVOYW1lID0gYmFja2VuZEZpbGVSZWYubmFtZTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoRmlsZVBhdGhzLmhhc0V4dGVuc2lvbihmaWxlTmFtZSwgXCJwZGZcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBQREZMb2FkZXIuY3JlYXRlVmlld2VyVVJMKGRhdGFzdG9yZUZpbGUudXJsLCBiYWNrZW5kRmlsZVJlZi5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChGaWxlUGF0aHMuaGFzRXh0ZW5zaW9uKGZpbGVOYW1lLCBcInBoelwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFBIWkxvYWRlci5jcmVhdGVWaWV3ZXJVUkwoZGF0YXN0b3JlRmlsZS51cmwsIGJhY2tlbmRGaWxlUmVmLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5hYmxlIHRvIGhhbmRsZSBmaWxlOiBcIiArIGZpbGVOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHZpZXdlclVSTCA9IHRvVmlld2VyVVJMKCk7XG5cbiAgICAgICAgICAgICAgICBsaW5rTG9hZGVyLmxvYWQodmlld2VyVVJMKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9O1xuXG4gICAgfVxuXG59XG4iXX0=