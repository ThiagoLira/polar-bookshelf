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
const Model_1 = require("../model/Model");
const ViewerFactory_1 = require("../viewer/ViewerFactory");
const WebController_1 = require("../controller/WebController");
const Logger_1 = require("polar-shared/src/logger/Logger");
const Logging_1 = require("../logger/Logging");
const WebView_1 = require("../view/WebView");
const PagemarkView_1 = require("../pagemarks/view/PagemarkView");
const TextHighlightView_1 = require("../highlights/text/view/TextHighlightView");
const AnnotationSidebarService_1 = require("../annotation_sidebar/AnnotationSidebarService");
const CommentsController_1 = require("../comments/CommentsController");
const AnnotationBarService_1 = require("../ui/annotationbar/AnnotationBarService");
const AreaHighlightView_1 = require("../highlights/area/view/AreaHighlightView");
const AddContentImporters_1 = require("./viewer/AddContentImporters");
const Providers_1 = require("polar-shared/src/util/Providers");
const ProgressService_1 = require("../ui/progress_bar/ProgressService");
const PersistenceLayerManager_1 = require("../datastore/PersistenceLayerManager");
const AppOrigin_1 = require("./AppOrigin");
const CloudService_1 = require("../../../apps/repository/js/cloud/CloudService");
const Version_1 = require("polar-shared/src/util/Version");
const log = Logger_1.Logger.create();
class Launcher {
    trigger() {
        return __awaiter(this, void 0, void 0, function* () {
            log.notice("Running with Polar version: " + Version_1.Version.get());
            AppOrigin_1.AppOrigin.configure();
            new ProgressService_1.ProgressService().start();
            yield Logging_1.Logging.init();
            const addContentImporter = AddContentImporters_1.AddContentImporters.create();
            yield addContentImporter.prepare();
            const persistenceLayerManager = new PersistenceLayerManager_1.PersistenceLayerManager({ noSync: true, noInitialSnapshot: true });
            new CloudService_1.CloudService(persistenceLayerManager)
                .start();
            yield persistenceLayerManager.start();
            yield addContentImporter.doImport(Providers_1.Providers.toInterface(persistenceLayerManager.get()));
            const model = new Model_1.Model(persistenceLayerManager);
            new PagemarkView_1.PagemarkView(model).start();
            const prefsProvider = Providers_1.Providers.toInterface(() => {
                const persistenceLayer = persistenceLayerManager.get();
                const datastore = persistenceLayer.datastore;
                return datastore.getPrefs().get();
            });
            new WebView_1.WebView(model, prefsProvider).start();
            new TextHighlightView_1.TextHighlightView(model).start();
            new AreaHighlightView_1.AreaHighlightView(model).start();
            new AnnotationSidebarService_1.AnnotationSidebarService(model).start();
            new CommentsController_1.CommentsController(model).start();
            new AnnotationBarService_1.AnnotationBarService(model).start();
            const viewer = ViewerFactory_1.ViewerFactory.create(model);
            yield new WebController_1.WebController(model, viewer).start();
            viewer.start();
        });
    }
    launch() {
        return __awaiter(this, void 0, void 0, function* () {
            if (document.readyState === "interactive" || document.readyState === "complete") {
                log.info("Already completed loading.");
                yield this.trigger();
            }
            else {
                log.info("Waiting for DOM content to load");
                document.addEventListener('DOMContentLoaded', () => {
                    this.trigger()
                        .catch(err => log.error("Failed to trigger: ", err));
                }, true);
            }
        });
    }
}
exports.Launcher = Launcher;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGF1bmNoZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJMYXVuY2hlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDBDQUFxQztBQUNyQywyREFBc0Q7QUFDdEQsK0RBQTBEO0FBQzFELDJEQUFzRDtBQUN0RCwrQ0FBMEM7QUFDMUMsNkNBQXdDO0FBQ3hDLGlFQUE0RDtBQUM1RCxpRkFBNEU7QUFDNUUsNkZBQXdGO0FBQ3hGLHVFQUFrRTtBQUNsRSxtRkFBOEU7QUFDOUUsaUZBQTRFO0FBQzVFLHNFQUFpRTtBQUNqRSwrREFBMEQ7QUFDMUQsd0VBQW1FO0FBQ25FLGtGQUE2RTtBQUM3RSwyQ0FBc0M7QUFDdEMsaUZBQTRFO0FBQzVFLDJEQUFzRDtBQUV0RCxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFNNUIsTUFBYSxRQUFRO0lBS0osT0FBTzs7WUFFaEIsR0FBRyxDQUFDLE1BQU0sQ0FBQyw4QkFBOEIsR0FBRyxpQkFBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFFM0QscUJBQVMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUV0QixJQUFJLGlDQUFlLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUU5QixNQUFNLGlCQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7WUFFckIsTUFBTSxrQkFBa0IsR0FBRyx5Q0FBbUIsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUV4RCxNQUFNLGtCQUFrQixDQUFDLE9BQU8sRUFBRSxDQUFDO1lBRW5DLE1BQU0sdUJBQXVCLEdBQUcsSUFBSSxpREFBdUIsQ0FBQyxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztZQUVyRyxJQUFJLDJCQUFZLENBQUMsdUJBQXVCLENBQUM7aUJBQ3BDLEtBQUssRUFBRSxDQUFDO1lBRWIsTUFBTSx1QkFBdUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUl0QyxNQUFNLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxxQkFBUyxDQUFDLFdBQVcsQ0FBQyx1QkFBdUIsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFFeEYsTUFBTSxLQUFLLEdBQUcsSUFBSSxhQUFLLENBQUMsdUJBQXVCLENBQUMsQ0FBQztZQUVqRCxJQUFJLDJCQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7WUFFaEMsTUFBTSxhQUFhLEdBQ2IscUJBQVMsQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFO2dCQUU3QixNQUFNLGdCQUFnQixHQUFHLHVCQUF1QixDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUN2RCxNQUFNLFNBQVMsR0FBRyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUM7Z0JBQzdDLE9BQU8sU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBRXRDLENBQUMsQ0FBQyxDQUFDO1lBRUgsSUFBSSxpQkFBTyxDQUFDLEtBQUssRUFBRSxhQUFhLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUMxQyxJQUFJLHFDQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3JDLElBQUkscUNBQWlCLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDckMsSUFBSSxtREFBd0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQU01QyxJQUFJLHVDQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3RDLElBQUksMkNBQW9CLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7WUFFeEMsTUFBTSxNQUFNLEdBQUcsNkJBQWEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDM0MsTUFBTSxJQUFJLDZCQUFhLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBRS9DLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUVuQixDQUFDO0tBQUE7SUFFWSxNQUFNOztZQUVmLElBQUksUUFBUSxDQUFDLFVBQVUsS0FBSyxhQUFhLElBQUksUUFBUSxDQUFDLFVBQVUsS0FBSyxVQUFVLEVBQUU7Z0JBRTdFLEdBQUcsQ0FBQyxJQUFJLENBQUMsNEJBQTRCLENBQUMsQ0FBQztnQkFDdkMsTUFBTSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7YUFFeEI7aUJBQU07Z0JBRUgsR0FBRyxDQUFDLElBQUksQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO2dCQUU1QyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxFQUFFO29CQUUvQyxJQUFJLENBQUMsT0FBTyxFQUFFO3lCQUNULEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMscUJBQXFCLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFFN0QsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQ1o7UUFFTCxDQUFDO0tBQUE7Q0FFSjtBQW5GRCw0QkFtRkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge01vZGVsfSBmcm9tICcuLi9tb2RlbC9Nb2RlbCc7XG5pbXBvcnQge1ZpZXdlckZhY3Rvcnl9IGZyb20gJy4uL3ZpZXdlci9WaWV3ZXJGYWN0b3J5JztcbmltcG9ydCB7V2ViQ29udHJvbGxlcn0gZnJvbSAnLi4vY29udHJvbGxlci9XZWJDb250cm9sbGVyJztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL2xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IHtMb2dnaW5nfSBmcm9tICcuLi9sb2dnZXIvTG9nZ2luZyc7XG5pbXBvcnQge1dlYlZpZXd9IGZyb20gJy4uL3ZpZXcvV2ViVmlldyc7XG5pbXBvcnQge1BhZ2VtYXJrVmlld30gZnJvbSAnLi4vcGFnZW1hcmtzL3ZpZXcvUGFnZW1hcmtWaWV3JztcbmltcG9ydCB7VGV4dEhpZ2hsaWdodFZpZXd9IGZyb20gJy4uL2hpZ2hsaWdodHMvdGV4dC92aWV3L1RleHRIaWdobGlnaHRWaWV3JztcbmltcG9ydCB7QW5ub3RhdGlvblNpZGViYXJTZXJ2aWNlfSBmcm9tICcuLi9hbm5vdGF0aW9uX3NpZGViYXIvQW5ub3RhdGlvblNpZGViYXJTZXJ2aWNlJztcbmltcG9ydCB7Q29tbWVudHNDb250cm9sbGVyfSBmcm9tICcuLi9jb21tZW50cy9Db21tZW50c0NvbnRyb2xsZXInO1xuaW1wb3J0IHtBbm5vdGF0aW9uQmFyU2VydmljZX0gZnJvbSAnLi4vdWkvYW5ub3RhdGlvbmJhci9Bbm5vdGF0aW9uQmFyU2VydmljZSc7XG5pbXBvcnQge0FyZWFIaWdobGlnaHRWaWV3fSBmcm9tIFwiLi4vaGlnaGxpZ2h0cy9hcmVhL3ZpZXcvQXJlYUhpZ2hsaWdodFZpZXdcIjtcbmltcG9ydCB7QWRkQ29udGVudEltcG9ydGVyc30gZnJvbSAnLi92aWV3ZXIvQWRkQ29udGVudEltcG9ydGVycyc7XG5pbXBvcnQge1Byb3ZpZGVyc30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL1Byb3ZpZGVycyc7XG5pbXBvcnQge1Byb2dyZXNzU2VydmljZX0gZnJvbSAnLi4vdWkvcHJvZ3Jlc3NfYmFyL1Byb2dyZXNzU2VydmljZSc7XG5pbXBvcnQge1BlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyfSBmcm9tICcuLi9kYXRhc3RvcmUvUGVyc2lzdGVuY2VMYXllck1hbmFnZXInO1xuaW1wb3J0IHtBcHBPcmlnaW59IGZyb20gJy4vQXBwT3JpZ2luJztcbmltcG9ydCB7Q2xvdWRTZXJ2aWNlfSBmcm9tICcuLi8uLi8uLi9hcHBzL3JlcG9zaXRvcnkvanMvY2xvdWQvQ2xvdWRTZXJ2aWNlJztcbmltcG9ydCB7VmVyc2lvbn0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL1ZlcnNpb24nO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbi8qKlxuICogQmFzaWMgY2xhc3MgZm9yIGNvbm5lY3RpbmcgZXZlbnQgbGlzdGVuZXJzIGFuZCB0aGVuIHJ1bm5pbmcgYSBsYXVuY2hGdW5jdGlvblxuICogb25jZSB0aGUgYnJvd3NlciBpcyByZWFkeS5cbiAqL1xuZXhwb3J0IGNsYXNzIExhdW5jaGVyIHtcblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXIgdGhlIGxhdW5jaCBmdW5jdGlvbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgYXN5bmMgdHJpZ2dlcigpIHtcblxuICAgICAgICBsb2cubm90aWNlKFwiUnVubmluZyB3aXRoIFBvbGFyIHZlcnNpb246IFwiICsgVmVyc2lvbi5nZXQoKSk7XG5cbiAgICAgICAgQXBwT3JpZ2luLmNvbmZpZ3VyZSgpO1xuXG4gICAgICAgIG5ldyBQcm9ncmVzc1NlcnZpY2UoKS5zdGFydCgpO1xuXG4gICAgICAgIGF3YWl0IExvZ2dpbmcuaW5pdCgpO1xuXG4gICAgICAgIGNvbnN0IGFkZENvbnRlbnRJbXBvcnRlciA9IEFkZENvbnRlbnRJbXBvcnRlcnMuY3JlYXRlKCk7XG5cbiAgICAgICAgYXdhaXQgYWRkQ29udGVudEltcG9ydGVyLnByZXBhcmUoKTtcblxuICAgICAgICBjb25zdCBwZXJzaXN0ZW5jZUxheWVyTWFuYWdlciA9IG5ldyBQZXJzaXN0ZW5jZUxheWVyTWFuYWdlcih7bm9TeW5jOiB0cnVlLCBub0luaXRpYWxTbmFwc2hvdDogdHJ1ZX0pO1xuXG4gICAgICAgIG5ldyBDbG91ZFNlcnZpY2UocGVyc2lzdGVuY2VMYXllck1hbmFnZXIpXG4gICAgICAgICAgICAuc3RhcnQoKTtcblxuICAgICAgICBhd2FpdCBwZXJzaXN0ZW5jZUxheWVyTWFuYWdlci5zdGFydCgpO1xuXG4gICAgICAgIC8vIGltcG9ydCBjb250ZW50IHdpdGggdGhlICdhZGQgY29udGVudCcgYnV0dG9uIGF1dG9tYXRpY2FsbHkuXG5cbiAgICAgICAgYXdhaXQgYWRkQ29udGVudEltcG9ydGVyLmRvSW1wb3J0KFByb3ZpZGVycy50b0ludGVyZmFjZShwZXJzaXN0ZW5jZUxheWVyTWFuYWdlci5nZXQoKSkpO1xuXG4gICAgICAgIGNvbnN0IG1vZGVsID0gbmV3IE1vZGVsKHBlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyKTtcblxuICAgICAgICBuZXcgUGFnZW1hcmtWaWV3KG1vZGVsKS5zdGFydCgpO1xuXG4gICAgICAgIGNvbnN0IHByZWZzUHJvdmlkZXJcbiAgICAgICAgICAgID0gUHJvdmlkZXJzLnRvSW50ZXJmYWNlKCgpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgcGVyc2lzdGVuY2VMYXllciA9IHBlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyLmdldCgpO1xuICAgICAgICAgICAgY29uc3QgZGF0YXN0b3JlID0gcGVyc2lzdGVuY2VMYXllci5kYXRhc3RvcmU7XG4gICAgICAgICAgICByZXR1cm4gZGF0YXN0b3JlLmdldFByZWZzKCkuZ2V0KCk7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbmV3IFdlYlZpZXcobW9kZWwsIHByZWZzUHJvdmlkZXIpLnN0YXJ0KCk7XG4gICAgICAgIG5ldyBUZXh0SGlnaGxpZ2h0Vmlldyhtb2RlbCkuc3RhcnQoKTtcbiAgICAgICAgbmV3IEFyZWFIaWdobGlnaHRWaWV3KG1vZGVsKS5zdGFydCgpO1xuICAgICAgICBuZXcgQW5ub3RhdGlvblNpZGViYXJTZXJ2aWNlKG1vZGVsKS5zdGFydCgpO1xuXG4gICAgICAgIC8vIGlmIChBcHBSdW50aW1lLmlzRWxlY3Ryb24oKSkge1xuICAgICAgICAvLyAgICAgbmV3IFBhZ2VTZWFyY2hDb250cm9sbGVyKG1vZGVsKS5zdGFydCgpO1xuICAgICAgICAvLyB9XG5cbiAgICAgICAgbmV3IENvbW1lbnRzQ29udHJvbGxlcihtb2RlbCkuc3RhcnQoKTtcbiAgICAgICAgbmV3IEFubm90YXRpb25CYXJTZXJ2aWNlKG1vZGVsKS5zdGFydCgpO1xuXG4gICAgICAgIGNvbnN0IHZpZXdlciA9IFZpZXdlckZhY3RvcnkuY3JlYXRlKG1vZGVsKTtcbiAgICAgICAgYXdhaXQgbmV3IFdlYkNvbnRyb2xsZXIobW9kZWwsIHZpZXdlcikuc3RhcnQoKTtcblxuICAgICAgICB2aWV3ZXIuc3RhcnQoKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBsYXVuY2goKSB7XG5cbiAgICAgICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiaW50ZXJhY3RpdmVcIiB8fCBkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIpIHtcblxuICAgICAgICAgICAgbG9nLmluZm8oXCJBbHJlYWR5IGNvbXBsZXRlZCBsb2FkaW5nLlwiKTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMudHJpZ2dlcigpO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGxvZy5pbmZvKFwiV2FpdGluZyBmb3IgRE9NIGNvbnRlbnQgdG8gbG9hZFwiKTtcblxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcblxuICAgICAgICAgICAgICAgIHRoaXMudHJpZ2dlcigpXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gbG9nLmVycm9yKFwiRmFpbGVkIHRvIHRyaWdnZXI6IFwiLCBlcnIpKTtcblxuICAgICAgICAgICAgfSwgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgIH1cblxufVxuIl19