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
const electron_1 = require("electron");
class ElectronDocLoader {
    constructor(persistenceLayerProvider) {
        this.persistenceLayerProvider = persistenceLayerProvider;
    }
    create(loadDocRequest) {
        return {
            load() {
                return __awaiter(this, void 0, void 0, function* () {
                    Preconditions_1.Preconditions.assertPresent(loadDocRequest.fingerprint, "fingerprint");
                    Preconditions_1.Preconditions.assertPresent(loadDocRequest.backendFileRef, "backendFileRef");
                    Preconditions_1.Preconditions.assertPresent(loadDocRequest.backendFileRef.name, "backendFileRef.name");
                    electron_1.ipcRenderer.send('load-doc-request', loadDocRequest);
                });
            }
        };
    }
}
exports.ElectronDocLoader = ElectronDocLoader;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRWxlY3Ryb25Eb2NMb2FkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJFbGVjdHJvbkRvY0xvYWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBLGtFQUE2RDtBQUk3RCx1Q0FBcUM7QUFFckMsTUFBYSxpQkFBaUI7SUFJMUIsWUFBWSx3QkFBcUQ7UUFDN0QsSUFBSSxDQUFDLHdCQUF3QixHQUFHLHdCQUF3QixDQUFDO0lBQzdELENBQUM7SUFFTSxNQUFNLENBQUMsY0FBOEI7UUFFeEMsT0FBTztZQUVHLElBQUk7O29CQUVOLDZCQUFhLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsYUFBYSxDQUFDLENBQUM7b0JBQ3ZFLDZCQUFhLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxjQUFjLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztvQkFDN0UsNkJBQWEsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUscUJBQXFCLENBQUMsQ0FBQztvQkFFdkYsc0JBQVcsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsY0FBYyxDQUFDLENBQUM7Z0JBRXpELENBQUM7YUFBQTtTQUVKLENBQUM7SUFFTixDQUFDO0NBRUo7QUExQkQsOENBMEJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtMb2FkRG9jUmVxdWVzdH0gZnJvbSAnLi4vTG9hZERvY1JlcXVlc3QnO1xuaW1wb3J0IHtQcmVjb25kaXRpb25zfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL1ByZWNvbmRpdGlvbnMnO1xuaW1wb3J0IHtJUHJvdmlkZXJ9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC9Qcm92aWRlcnMnO1xuaW1wb3J0IHtQZXJzaXN0ZW5jZUxheWVyfSBmcm9tICcuLi8uLi8uLi8uLi9kYXRhc3RvcmUvUGVyc2lzdGVuY2VMYXllcic7XG5pbXBvcnQge0lEb2NMb2FkZXIsIElEb2NMb2FkUmVxdWVzdH0gZnJvbSAnLi4vSURvY0xvYWRlcic7XG5pbXBvcnQge2lwY1JlbmRlcmVyfSBmcm9tICdlbGVjdHJvbic7XG5cbmV4cG9ydCBjbGFzcyBFbGVjdHJvbkRvY0xvYWRlciBpbXBsZW1lbnRzIElEb2NMb2FkZXIge1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBwZXJzaXN0ZW5jZUxheWVyUHJvdmlkZXI6IElQcm92aWRlcjxQZXJzaXN0ZW5jZUxheWVyPjtcblxuICAgIGNvbnN0cnVjdG9yKHBlcnNpc3RlbmNlTGF5ZXJQcm92aWRlcjogSVByb3ZpZGVyPFBlcnNpc3RlbmNlTGF5ZXI+KSB7XG4gICAgICAgIHRoaXMucGVyc2lzdGVuY2VMYXllclByb3ZpZGVyID0gcGVyc2lzdGVuY2VMYXllclByb3ZpZGVyO1xuICAgIH1cblxuICAgIHB1YmxpYyBjcmVhdGUobG9hZERvY1JlcXVlc3Q6IExvYWREb2NSZXF1ZXN0KTogSURvY0xvYWRSZXF1ZXN0IHtcblxuICAgICAgICByZXR1cm4ge1xuXG4gICAgICAgICAgICBhc3luYyBsb2FkKCk6IFByb21pc2U8dm9pZD4ge1xuXG4gICAgICAgICAgICAgICAgUHJlY29uZGl0aW9ucy5hc3NlcnRQcmVzZW50KGxvYWREb2NSZXF1ZXN0LmZpbmdlcnByaW50LCBcImZpbmdlcnByaW50XCIpO1xuICAgICAgICAgICAgICAgIFByZWNvbmRpdGlvbnMuYXNzZXJ0UHJlc2VudChsb2FkRG9jUmVxdWVzdC5iYWNrZW5kRmlsZVJlZiwgXCJiYWNrZW5kRmlsZVJlZlwiKTtcbiAgICAgICAgICAgICAgICBQcmVjb25kaXRpb25zLmFzc2VydFByZXNlbnQobG9hZERvY1JlcXVlc3QuYmFja2VuZEZpbGVSZWYubmFtZSwgXCJiYWNrZW5kRmlsZVJlZi5uYW1lXCIpO1xuXG4gICAgICAgICAgICAgICAgaXBjUmVuZGVyZXIuc2VuZCgnbG9hZC1kb2MtcmVxdWVzdCcsIGxvYWREb2NSZXF1ZXN0KTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH07XG5cbiAgICB9XG5cbn1cblxuIl19