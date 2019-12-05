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
const DocLoader_1 = require("../../../../web/js/apps/main/doc_loaders/DocLoader");
const AppRuntime_1 = require("../../../../web/js/AppRuntime");
const log = Logger_1.Logger.create();
class SynchronizingDocLoader {
    constructor(persistenceLayerManager) {
        this.persistenceLayerManager = persistenceLayerManager;
        this.docLoader = new DocLoader_1.DocLoader(persistenceLayerManager);
    }
    load(fingerprint, backendFileRef) {
        return __awaiter(this, void 0, void 0, function* () {
            const persistenceLayer = this.persistenceLayerManager.get();
            const docLoaderRequest = this.docLoader.create({
                fingerprint,
                backendFileRef,
                newWindow: true
            });
            if (AppRuntime_1.AppRuntime.isElectron()) {
                const requiresSynchronize = !(yield persistenceLayer.contains(fingerprint)) ||
                    !(yield persistenceLayer.containsFile(backendFileRef.backend, backendFileRef));
                if (requiresSynchronize) {
                    yield persistenceLayer.synchronizeDocs({ fingerprint });
                    log.notice("Forcing synchronization (doc not local): " + fingerprint);
                }
            }
            yield docLoaderRequest.load();
        });
    }
}
exports.SynchronizingDocLoader = SynchronizingDocLoader;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3luY2hyb25pemluZ0RvY0xvYWRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlN5bmNocm9uaXppbmdEb2NMb2FkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQSwyREFBc0Q7QUFDdEQsa0ZBQTZFO0FBQzdFLDhEQUF5RDtBQUd6RCxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFNUIsTUFBYSxzQkFBc0I7SUFLL0IsWUFBWSx1QkFBZ0Q7UUFDeEQsSUFBSSxDQUFDLHVCQUF1QixHQUFHLHVCQUF1QixDQUFDO1FBQ3ZELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxxQkFBUyxDQUFDLHVCQUF1QixDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVZLElBQUksQ0FBQyxXQUFtQixFQUFFLGNBQThCOztZQUVqRSxNQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUU1RCxNQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO2dCQUMxQyxXQUFXO2dCQUNYLGNBQWM7Z0JBQ2QsU0FBUyxFQUFFLElBQUk7YUFDbkIsQ0FBQyxDQUFDO1lBRUgsSUFBSSx1QkFBVSxDQUFDLFVBQVUsRUFBRSxFQUFFO2dCQU16QixNQUFNLG1CQUFtQixHQUNyQixDQUFFLENBQUEsTUFBTSxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUE7b0JBQzlDLENBQUUsQ0FBQSxNQUFNLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLGNBQWMsQ0FBQyxDQUFBLENBQUM7Z0JBRWxGLElBQUksbUJBQW1CLEVBQUU7b0JBQ3JCLE1BQU0sZ0JBQWdCLENBQUMsZUFBZSxDQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsQ0FBQztvQkFDdEQsR0FBRyxDQUFDLE1BQU0sQ0FBQywyQ0FBMkMsR0FBRyxXQUFXLENBQUMsQ0FBQztpQkFDekU7YUFFSjtZQUVELE1BQU0sZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFbEMsQ0FBQztLQUFBO0NBRUo7QUF6Q0Qsd0RBeUNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQZXJzaXN0ZW5jZUxheWVyTWFuYWdlcn0gZnJvbSAnLi4vLi4vLi4vLi4vd2ViL2pzL2RhdGFzdG9yZS9QZXJzaXN0ZW5jZUxheWVyTWFuYWdlcic7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7RG9jTG9hZGVyfSBmcm9tICcuLi8uLi8uLi8uLi93ZWIvanMvYXBwcy9tYWluL2RvY19sb2FkZXJzL0RvY0xvYWRlcic7XG5pbXBvcnQge0FwcFJ1bnRpbWV9IGZyb20gJy4uLy4uLy4uLy4uL3dlYi9qcy9BcHBSdW50aW1lJztcbmltcG9ydCB7QmFja2VuZEZpbGVSZWZ9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL2RhdGFzdG9yZS9CYWNrZW5kRmlsZVJlZlwiO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbmV4cG9ydCBjbGFzcyBTeW5jaHJvbml6aW5nRG9jTG9hZGVyIHtcblxuICAgIHByaXZhdGUgcGVyc2lzdGVuY2VMYXllck1hbmFnZXI6IFBlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgZG9jTG9hZGVyOiBEb2NMb2FkZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihwZXJzaXN0ZW5jZUxheWVyTWFuYWdlcjogUGVyc2lzdGVuY2VMYXllck1hbmFnZXIpIHtcbiAgICAgICAgdGhpcy5wZXJzaXN0ZW5jZUxheWVyTWFuYWdlciA9IHBlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyO1xuICAgICAgICB0aGlzLmRvY0xvYWRlciA9IG5ldyBEb2NMb2FkZXIocGVyc2lzdGVuY2VMYXllck1hbmFnZXIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBsb2FkKGZpbmdlcnByaW50OiBzdHJpbmcsIGJhY2tlbmRGaWxlUmVmOiBCYWNrZW5kRmlsZVJlZikge1xuXG4gICAgICAgIGNvbnN0IHBlcnNpc3RlbmNlTGF5ZXIgPSB0aGlzLnBlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyLmdldCgpO1xuXG4gICAgICAgIGNvbnN0IGRvY0xvYWRlclJlcXVlc3QgPSB0aGlzLmRvY0xvYWRlci5jcmVhdGUoe1xuICAgICAgICAgICAgIGZpbmdlcnByaW50LFxuICAgICAgICAgICAgIGJhY2tlbmRGaWxlUmVmLFxuICAgICAgICAgICAgIG5ld1dpbmRvdzogdHJ1ZVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoQXBwUnVudGltZS5pc0VsZWN0cm9uKCkpIHtcblxuICAgICAgICAgICAgLy8gVE9ETzogdGhpcyBpcyBvbmx5IG5lZWQgd2hlbiB1c2luZyB0aGUgY2xvdWQgYXdhcmUgZGF0YXN0b3JlLlxuXG4gICAgICAgICAgICAvLyBOT1RFOiB0aGVzZSBvcGVyYXRpb25zIGV4ZWN1dGUgbG9jYWxseSBmaXJzdCwgc28gaXQncyBhIHF1aWNrXG4gICAgICAgICAgICAvLyB3YXkgdG8gdmVyaWZ5IHRoYXQgdGhlIGZpbGUgbmVlZHMgdG8gYmUgc3luY2hyb25pemVkLlxuICAgICAgICAgICAgY29uc3QgcmVxdWlyZXNTeW5jaHJvbml6ZSA9XG4gICAgICAgICAgICAgICAgISBhd2FpdCBwZXJzaXN0ZW5jZUxheWVyLmNvbnRhaW5zKGZpbmdlcnByaW50KSB8fFxuICAgICAgICAgICAgICAgICEgYXdhaXQgcGVyc2lzdGVuY2VMYXllci5jb250YWluc0ZpbGUoYmFja2VuZEZpbGVSZWYuYmFja2VuZCwgYmFja2VuZEZpbGVSZWYpO1xuXG4gICAgICAgICAgICBpZiAocmVxdWlyZXNTeW5jaHJvbml6ZSkge1xuICAgICAgICAgICAgICAgIGF3YWl0IHBlcnNpc3RlbmNlTGF5ZXIuc3luY2hyb25pemVEb2NzKHtmaW5nZXJwcmludH0pO1xuICAgICAgICAgICAgICAgIGxvZy5ub3RpY2UoXCJGb3JjaW5nIHN5bmNocm9uaXphdGlvbiAoZG9jIG5vdCBsb2NhbCk6IFwiICsgZmluZ2VycHJpbnQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBhd2FpdCBkb2NMb2FkZXJSZXF1ZXN0LmxvYWQoKTtcblxuICAgIH1cblxufVxuIl19