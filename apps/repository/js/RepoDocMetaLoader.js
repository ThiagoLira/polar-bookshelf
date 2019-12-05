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
const RepoDocInfos_1 = require("./RepoDocInfos");
const SimpleReactor_1 = require("../../../web/js/reactor/SimpleReactor");
const ProgressTrackerIndex_1 = require("polar-shared/src/util/ProgressTrackerIndex");
const RepoDocMetas_1 = require("./RepoDocMetas");
const DeterminateProgressBar_1 = require("../../../web/js/ui/progress_bar/DeterminateProgressBar");
const IndeterminateProgressBar_1 = require("../../../web/js/ui/progress_bar/IndeterminateProgressBar");
const log = Logger_1.Logger.create();
class RepoDocMetaLoader {
    constructor(persistenceLayerManager) {
        this.eventDispatcher = new SimpleReactor_1.SimpleReactor();
        this.persistenceLayerManager = persistenceLayerManager;
    }
    addEventListener(listener) {
        return this.eventDispatcher.addEventListener(listener);
    }
    removeEventListener(listener) {
        return this.eventDispatcher.removeEventListener(listener);
    }
    dispatchEvent(event) {
        this.eventDispatcher.dispatchEvent(event);
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            this.persistenceLayerManager.addEventListener(event => {
                if (event.state === 'changed') {
                    this.onPersistenceLayerChanged(event.persistenceLayer);
                }
            }, 'changed');
        });
    }
    onPersistenceLayerChanged(persistenceLayer) {
        log.info("onPersistenceLayerChanged");
        this.addInitialProgressListener(persistenceLayer);
        const progressTrackerIndex = new ProgressTrackerIndex_1.ProgressTrackerIndex();
        persistenceLayer.addDocMetaSnapshotEventListener((docMetaSnapshotEvent) => __awaiter(this, void 0, void 0, function* () {
            const eventHandler = () => __awaiter(this, void 0, void 0, function* () {
                const { progress, docMetaMutations } = docMetaSnapshotEvent;
                progressTrackerIndex.update(progress);
                const minProgress = progressTrackerIndex.min();
                if (minProgress.isPresent()) {
                    DeterminateProgressBar_1.DeterminateProgressBar.update(minProgress.get());
                }
                else {
                    DeterminateProgressBar_1.DeterminateProgressBar.update(100);
                }
                const mutations = [];
                for (const docMetaMutation of docMetaMutations) {
                    if (docMetaMutation.mutationType === 'created' ||
                        docMetaMutation.mutationType === 'updated') {
                        const docMeta = yield docMetaMutation.docMetaProvider();
                        const docInfo = docMeta.docInfo;
                        const persistenceLayerProvider = () => this.persistenceLayerManager.get();
                        const repoDocMeta = this.toRepoDocMeta(persistenceLayerProvider, docInfo.fingerprint, docMeta);
                        if (repoDocMeta && RepoDocInfos_1.RepoDocInfos.isValid(repoDocMeta.repoDocInfo)) {
                            mutations.push({
                                mutationType: docMetaMutation.mutationType,
                                fingerprint: docMetaMutation.fingerprint,
                                repoDocMeta
                            });
                        }
                    }
                    if (docMetaMutation.mutationType === 'deleted') {
                        mutations.push({
                            mutationType: docMetaMutation.mutationType,
                            fingerprint: docMetaMutation.fingerprint,
                        });
                    }
                }
                if (docMetaMutations.length > 0) {
                    this.eventDispatcher.dispatchEvent({ mutations, progress });
                }
            });
            eventHandler()
                .catch(err => log.error("Could not handle snapshot: ", err));
        }));
    }
    addInitialProgressListener(persistenceLayer) {
        let progressBar = IndeterminateProgressBar_1.IndeterminateProgressBar.create();
        persistenceLayer.addDocMetaSnapshotEventListener(() => __awaiter(this, void 0, void 0, function* () {
            if (progressBar) {
                progressBar.destroy();
                progressBar = null;
            }
        }));
    }
    toRepoDocMeta(persistenceLayerProvider, fingerprint, docMeta) {
        if (docMeta) {
            return RepoDocMetas_1.RepoDocMetas.convert(persistenceLayerProvider, fingerprint, docMeta);
        }
        else {
            log.warn("No DocMeta for fingerprint: " + fingerprint);
        }
        return undefined;
    }
}
exports.RepoDocMetaLoader = RepoDocMetaLoader;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVwb0RvY01ldGFMb2FkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJSZXBvRG9jTWV0YUxvYWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJEQUFzRDtBQUN0RCxpREFBNEM7QUFLNUMseUVBQXNGO0FBQ3RGLHFGQUFnRjtBQUdoRixpREFBNEM7QUFDNUMsbUdBQThGO0FBQzlGLHVHQUFrRztBQUlsRyxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFNUIsTUFBYSxpQkFBaUI7SUFNMUIsWUFBWSx1QkFBZ0Q7UUFGM0Msb0JBQWUsR0FBdUMsSUFBSSw2QkFBYSxFQUFFLENBQUM7UUFHdkYsSUFBSSxDQUFDLHVCQUF1QixHQUFHLHVCQUF1QixDQUFDO0lBQzNELENBQUM7SUFFTSxnQkFBZ0IsQ0FBQyxRQUF5QztRQUM3RCxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVNLG1CQUFtQixDQUFDLFFBQXlDO1FBQ2hFLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRU0sYUFBYSxDQUFDLEtBQXVCO1FBQ3hDLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFWSxLQUFLOztZQUlkLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFFbEQsSUFBSSxLQUFLLENBQUMsS0FBSyxLQUFLLFNBQVMsRUFBRTtvQkFDM0IsSUFBSSxDQUFDLHlCQUF5QixDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2lCQUMxRDtZQUVMLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUVsQixDQUFDO0tBQUE7SUFFTyx5QkFBeUIsQ0FBQyxnQkFBa0M7UUFF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LGFBQWEsQ0FBQyx3QkFBa0QsRUFDbEQsV0FBbUIsRUFDbkIsT0FBa0I7UUFFcEMsSUFBSSxPQUFPLEVBQUU7WUFFVCxPQUFPLDJCQUFZLENBQUMsT0FBTyxDQUFDLHdCQUF3QixFQUFFLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUUvRTthQUFNO1lBQ0gsR0FBRyxDQUFDLElBQUksQ0FBQyw4QkFBOEIsR0FBRyxXQUFXLENBQUMsQ0FBQztTQUMxRDtRQUVELE9BQU8sU0FBUyxDQUFDO0lBRXJCLENBQUM7Q0FFSjtBQTlJRCw4Q0E4SUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0xvZ2dlcn0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7UmVwb0RvY0luZm9zfSBmcm9tICcuL1JlcG9Eb2NJbmZvcyc7XG5pbXBvcnQge0RvY01ldGF9IGZyb20gJy4uLy4uLy4uL3dlYi9qcy9tZXRhZGF0YS9Eb2NNZXRhJztcbmltcG9ydCB7TXV0YXRpb25UeXBlLCBTbmFwc2hvdFByb2dyZXNzfSBmcm9tICcuLi8uLi8uLi93ZWIvanMvZGF0YXN0b3JlL0RhdGFzdG9yZSc7XG5pbXBvcnQge1BlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyfSBmcm9tICcuLi8uLi8uLi93ZWIvanMvZGF0YXN0b3JlL1BlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyJztcbmltcG9ydCB7UGVyc2lzdGVuY2VMYXllcn0gZnJvbSAnLi4vLi4vLi4vd2ViL2pzL2RhdGFzdG9yZS9QZXJzaXN0ZW5jZUxheWVyJztcbmltcG9ydCB7SUV2ZW50RGlzcGF0Y2hlciwgU2ltcGxlUmVhY3Rvcn0gZnJvbSAnLi4vLi4vLi4vd2ViL2pzL3JlYWN0b3IvU2ltcGxlUmVhY3Rvcic7XG5pbXBvcnQge1Byb2dyZXNzVHJhY2tlckluZGV4fSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvUHJvZ3Jlc3NUcmFja2VySW5kZXgnO1xuaW1wb3J0IHtFdmVudExpc3RlbmVyfSBmcm9tICcuLi8uLi8uLi93ZWIvanMvcmVhY3Rvci9FdmVudExpc3RlbmVyJztcbmltcG9ydCB7UmVwb0RvY01ldGF9IGZyb20gJy4vUmVwb0RvY01ldGEnO1xuaW1wb3J0IHtSZXBvRG9jTWV0YXN9IGZyb20gJy4vUmVwb0RvY01ldGFzJztcbmltcG9ydCB7RGV0ZXJtaW5hdGVQcm9ncmVzc0Jhcn0gZnJvbSAnLi4vLi4vLi4vd2ViL2pzL3VpL3Byb2dyZXNzX2Jhci9EZXRlcm1pbmF0ZVByb2dyZXNzQmFyJztcbmltcG9ydCB7SW5kZXRlcm1pbmF0ZVByb2dyZXNzQmFyfSBmcm9tICcuLi8uLi8uLi93ZWIvanMvdWkvcHJvZ3Jlc3NfYmFyL0luZGV0ZXJtaW5hdGVQcm9ncmVzc0Jhcic7XG5pbXBvcnQge1BlcnNpc3RlbmNlTGF5ZXJQcm92aWRlcn0gZnJvbSAnLi4vLi4vLi4vd2ViL2pzL2RhdGFzdG9yZS9QZXJzaXN0ZW5jZUxheWVyJztcbmltcG9ydCB7SURvY01ldGF9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL21ldGFkYXRhL0lEb2NNZXRhXCI7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuZXhwb3J0IGNsYXNzIFJlcG9Eb2NNZXRhTG9hZGVyIHtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgcGVyc2lzdGVuY2VMYXllck1hbmFnZXI6IFBlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyO1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBldmVudERpc3BhdGNoZXI6IElFdmVudERpc3BhdGNoZXI8UmVwb0RvY01ldGFFdmVudD4gPSBuZXcgU2ltcGxlUmVhY3RvcigpO1xuXG4gICAgY29uc3RydWN0b3IocGVyc2lzdGVuY2VMYXllck1hbmFnZXI6IFBlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyKSB7XG4gICAgICAgIHRoaXMucGVyc2lzdGVuY2VMYXllck1hbmFnZXIgPSBwZXJzaXN0ZW5jZUxheWVyTWFuYWdlcjtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkRXZlbnRMaXN0ZW5lcihsaXN0ZW5lcjogRXZlbnRMaXN0ZW5lcjxSZXBvRG9jTWV0YUV2ZW50Pikge1xuICAgICAgICByZXR1cm4gdGhpcy5ldmVudERpc3BhdGNoZXIuYWRkRXZlbnRMaXN0ZW5lcihsaXN0ZW5lcik7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbW92ZUV2ZW50TGlzdGVuZXIobGlzdGVuZXI6IEV2ZW50TGlzdGVuZXI8UmVwb0RvY01ldGFFdmVudD4pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXZlbnREaXNwYXRjaGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIobGlzdGVuZXIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBkaXNwYXRjaEV2ZW50KGV2ZW50OiBSZXBvRG9jTWV0YUV2ZW50KSB7XG4gICAgICAgIHRoaXMuZXZlbnREaXNwYXRjaGVyLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBzdGFydCgpIHtcblxuICAgICAgICAvLyBUT0RPOiBoYW5kbGUgZXZlbnRzIHByb3Blcmx5Li5cblxuICAgICAgICB0aGlzLnBlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQgPT4ge1xuXG4gICAgICAgICAgICBpZiAoZXZlbnQuc3RhdGUgPT09ICdjaGFuZ2VkJykge1xuICAgICAgICAgICAgICAgIHRoaXMub25QZXJzaXN0ZW5jZUxheWVyQ2hhbmdlZChldmVudC5wZXJzaXN0ZW5jZUxheWVyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9LCAnY2hhbmdlZCcpO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblBlcnNpc3RlbmNlTGF5ZXJDaGFuZ2VkKHBlcnNpc3RlbmNlTGF5ZXI6IFBlcnNpc3RlbmNlTGF5ZXIpIHtcblxuICAgICAgICBsb2cuaW5mbyhcIm9uUGVyc2lzdGVuY2VMYXllckNoYW5nZWRcIik7XG5cbiAgICAgICAgdGhpcy5hZGRJbml0aWFsUHJvZ3Jlc3NMaXN0ZW5lcihwZXJzaXN0ZW5jZUxheWVyKTtcblxuICAgICAgICBjb25zdCBwcm9ncmVzc1RyYWNrZXJJbmRleCA9IG5ldyBQcm9ncmVzc1RyYWNrZXJJbmRleCgpO1xuXG4gICAgICAgIHBlcnNpc3RlbmNlTGF5ZXIuYWRkRG9jTWV0YVNuYXBzaG90RXZlbnRMaXN0ZW5lcihhc3luYyBkb2NNZXRhU25hcHNob3RFdmVudCA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IGV2ZW50SGFuZGxlciA9IGFzeW5jICgpID0+IHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHtwcm9ncmVzcywgZG9jTWV0YU11dGF0aW9uc30gPSBkb2NNZXRhU25hcHNob3RFdmVudDtcblxuICAgICAgICAgICAgICAgIHByb2dyZXNzVHJhY2tlckluZGV4LnVwZGF0ZShwcm9ncmVzcyk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBtaW5Qcm9ncmVzcyA9IHByb2dyZXNzVHJhY2tlckluZGV4Lm1pbigpO1xuXG4gICAgICAgICAgICAgICAgaWYgKG1pblByb2dyZXNzLmlzUHJlc2VudCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIERldGVybWluYXRlUHJvZ3Jlc3NCYXIudXBkYXRlKG1pblByb2dyZXNzLmdldCgpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBEZXRlcm1pbmF0ZVByb2dyZXNzQmFyLnVwZGF0ZSgxMDApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IG11dGF0aW9uczogUmVwb0RvY01ldGFNdXRhdGlvbltdID0gW107XG5cbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGRvY01ldGFNdXRhdGlvbiBvZiBkb2NNZXRhTXV0YXRpb25zKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGRvY01ldGFNdXRhdGlvbi5tdXRhdGlvblR5cGUgPT09ICdjcmVhdGVkJyB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jTWV0YU11dGF0aW9uLm11dGF0aW9uVHlwZSA9PT0gJ3VwZGF0ZWQnKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRvY01ldGEgPSBhd2FpdCBkb2NNZXRhTXV0YXRpb24uZG9jTWV0YVByb3ZpZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkb2NJbmZvID0gZG9jTWV0YS5kb2NJbmZvO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwZXJzaXN0ZW5jZUxheWVyUHJvdmlkZXIgPSAoKSA9PiB0aGlzLnBlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyLmdldCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXBvRG9jTWV0YSA9IHRoaXMudG9SZXBvRG9jTWV0YShwZXJzaXN0ZW5jZUxheWVyUHJvdmlkZXIsIGRvY0luZm8uZmluZ2VycHJpbnQsIGRvY01ldGEpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVwb0RvY01ldGEgJiYgUmVwb0RvY0luZm9zLmlzVmFsaWQocmVwb0RvY01ldGEucmVwb0RvY0luZm8pKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdXRhdGlvbnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11dGF0aW9uVHlwZTogZG9jTWV0YU11dGF0aW9uLm11dGF0aW9uVHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmluZ2VycHJpbnQ6IGRvY01ldGFNdXRhdGlvbi5maW5nZXJwcmludCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwb0RvY01ldGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoZG9jTWV0YU11dGF0aW9uLm11dGF0aW9uVHlwZSA9PT0gJ2RlbGV0ZWQnKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIG11dGF0aW9ucy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdXRhdGlvblR5cGU6IGRvY01ldGFNdXRhdGlvbi5tdXRhdGlvblR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmluZ2VycHJpbnQ6IGRvY01ldGFNdXRhdGlvbi5maW5nZXJwcmludCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChkb2NNZXRhTXV0YXRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ldmVudERpc3BhdGNoZXIuZGlzcGF0Y2hFdmVudCh7bXV0YXRpb25zLCBwcm9ncmVzc30pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgZXZlbnRIYW5kbGVyKClcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IGxvZy5lcnJvcihcIkNvdWxkIG5vdCBoYW5kbGUgc25hcHNob3Q6IFwiLCBlcnIpKTtcblxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgYWRkSW5pdGlhbFByb2dyZXNzTGlzdGVuZXIocGVyc2lzdGVuY2VMYXllcjogUGVyc2lzdGVuY2VMYXllcikge1xuXG4gICAgICAgIGxldCBwcm9ncmVzc0JhciA9IEluZGV0ZXJtaW5hdGVQcm9ncmVzc0Jhci5jcmVhdGUoKTtcblxuICAgICAgICBwZXJzaXN0ZW5jZUxheWVyLmFkZERvY01ldGFTbmFwc2hvdEV2ZW50TGlzdGVuZXIoYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgICAgICBpZiAocHJvZ3Jlc3NCYXIpIHtcbiAgICAgICAgICAgICAgICBwcm9ncmVzc0Jhci5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3NCYXIgPSBudWxsITtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuICAgIH1cblxuXG4gICAgcHJpdmF0ZSB0b1JlcG9Eb2NNZXRhKHBlcnNpc3RlbmNlTGF5ZXJQcm92aWRlcjogUGVyc2lzdGVuY2VMYXllclByb3ZpZGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmaW5nZXJwcmludDogc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkb2NNZXRhPzogSURvY01ldGEpOiBSZXBvRG9jTWV0YSB8IHVuZGVmaW5lZCB7XG5cbiAgICAgICAgaWYgKGRvY01ldGEpIHtcblxuICAgICAgICAgICAgcmV0dXJuIFJlcG9Eb2NNZXRhcy5jb252ZXJ0KHBlcnNpc3RlbmNlTGF5ZXJQcm92aWRlciwgZmluZ2VycHJpbnQsIGRvY01ldGEpO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsb2cud2FybihcIk5vIERvY01ldGEgZm9yIGZpbmdlcnByaW50OiBcIiArIGZpbmdlcnByaW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXBvRG9jTWV0YUV2ZW50IHtcbiAgICByZWFkb25seSBtdXRhdGlvbnM6IFJlYWRvbmx5QXJyYXk8UmVwb0RvY01ldGFNdXRhdGlvbj47XG4gICAgcmVhZG9ubHkgcHJvZ3Jlc3M6IFNuYXBzaG90UHJvZ3Jlc3M7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVwb0RvY01ldGFNdXRhdGlvbiB7XG4gICAgcmVhZG9ubHkgbXV0YXRpb25UeXBlOiBNdXRhdGlvblR5cGU7XG4gICAgcmVhZG9ubHkgZmluZ2VycHJpbnQ6IHN0cmluZztcblxuICAgIC8vIG9ubHkgcHJlc2VudCBvbiBjcmVhdGVkIC8gdXBkYXRlZFxuICAgIHJlYWRvbmx5IHJlcG9Eb2NNZXRhPzogUmVwb0RvY01ldGE7XG59XG4iXX0=