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
const Batcher_1 = require("../datastore/batcher/Batcher");
const Logger_1 = require("polar-shared/src/logger/Logger");
const DocInfo_1 = require("../metadata/DocInfo");
const Proxies_1 = require("../proxies/Proxies");
const PersistenceLayerManagers_1 = require("../datastore/PersistenceLayerManagers");
const log = Logger_1.Logger.create();
class ModelPersister {
    constructor(persistenceLayerHandler, docMeta) {
        this.persistenceLayerHandler = persistenceLayerHandler;
        this.docMeta = docMeta;
        this.nrWrites = 0;
        this.nrDeferredWrites = 0;
        const batcher = new Batcher_1.Batcher(() => __awaiter(this, void 0, void 0, function* () {
            const persistenceLayer = this.persistenceLayerHandler.get();
            yield persistenceLayer.write(this.docMeta.docInfo.fingerprint, this.docMeta);
            ++this.nrWrites;
            this.nrDeferredWrites = 0;
        }));
        this.docMeta = Proxies_1.Proxies.create(this.docMeta, (traceEvent) => {
            if (this.docMeta.docInfo.mutating === 'skip') {
                return;
            }
            if (this.docMeta.docInfo.mutating === 'batch') {
                ++this.nrDeferredWrites;
                return;
            }
            if (this.isFinalMutatingEvent(traceEvent)) {
                if (this.nrDeferredWrites <= 1) {
                    return;
                }
            }
            log.info(`sync of persistence layer at ${traceEvent.path} : ${traceEvent.property}"`);
            setTimeout(() => {
                batcher.enqueue().run()
                    .catch(err => log.error("Unable to persist: ", err));
            }, 0);
            return true;
        });
        PersistenceLayerManagers_1.PersistenceLayerManagers.onPersistenceManager(this.persistenceLayerHandler, (persistenceLayer) => {
            persistenceLayer.addEventListenerForDoc(this.docMeta.docInfo.fingerprint, event => {
                log.debug("Received updated DocInfo.");
                if (this.docMeta.docInfo.fingerprint !== event.docInfo.fingerprint) {
                    const detail = `${this.docMeta.docInfo.fingerprint} vs ${event.docInfo.fingerprint}`;
                    throw new Error(`Attempt to update incorrect fingerprint: ` + detail);
                }
                this.docMeta.docInfo = new DocInfo_1.DocInfo(event.docInfo);
            });
        }, 'changed');
    }
    isFinalMutatingEvent(traceEvent) {
        return traceEvent.path === '/docInfo' &&
            traceEvent.property === 'mutating' &&
            traceEvent.value === undefined;
    }
}
exports.ModelPersister = ModelPersister;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kZWxQZXJzaXN0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJNb2RlbFBlcnNpc3Rlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDBEQUFxRDtBQUVyRCwyREFBc0Q7QUFDdEQsaURBQTRDO0FBQzVDLGdEQUEyQztBQUMzQyxvRkFBK0U7QUFJL0UsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLE1BQWEsY0FBYztJQU12QixZQUE2Qix1QkFBZ0QsRUFDakQsT0FBaUI7UUFEaEIsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQUNqRCxZQUFPLEdBQVAsT0FBTyxDQUFVO1FBTHRDLGFBQVEsR0FBVyxDQUFDLENBQUM7UUFFckIscUJBQWdCLEdBQVcsQ0FBQyxDQUFDO1FBS2hDLE1BQU0sT0FBTyxHQUFHLElBQUksaUJBQU8sQ0FBQyxHQUFTLEVBQUU7WUFFbkMsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUMsR0FBRyxFQUFFLENBQUM7WUFFNUQsTUFBTSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM3RSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDaEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQztRQUU5QixDQUFDLENBQUEsQ0FBQyxDQUFDO1FBR0gsSUFBSSxDQUFDLE9BQU8sR0FBRyxpQkFBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsVUFBc0IsRUFBRSxFQUFFO1lBRW5FLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxLQUFLLE1BQU0sRUFBRTtnQkFDMUMsT0FBTzthQUNWO1lBRUQsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEtBQUssT0FBTyxFQUFFO2dCQU0zQyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztnQkFFeEIsT0FBTzthQUNWO1lBRUQsSUFBSSxJQUFJLENBQUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDLEVBQUU7Z0JBRXZDLElBQUksSUFBSSxDQUFDLGdCQUFnQixJQUFJLENBQUMsRUFBRTtvQkFHNUIsT0FBTztpQkFDVjthQUVKO1lBRUQsR0FBRyxDQUFDLElBQUksQ0FBQyxnQ0FBZ0MsVUFBVSxDQUFDLElBQUksTUFBTSxVQUFVLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztZQUV0RixVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUVaLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFHLEVBQUU7cUJBQ2xCLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMscUJBQXFCLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUU3RCxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFFTixPQUFPLElBQUksQ0FBQztRQUVoQixDQUFDLENBQUMsQ0FBQztRQUVILG1EQUF3QixDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDLGdCQUFnQixFQUFFLEVBQUU7WUFHN0YsZ0JBQWdCLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxFQUFFO2dCQUU5RSxHQUFHLENBQUMsS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUM7Z0JBRXZDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsV0FBVyxLQUFLLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFO29CQUNoRSxNQUFNLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFdBQVcsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO29CQUNyRixNQUFNLElBQUksS0FBSyxDQUFDLDJDQUEyQyxHQUFHLE1BQU0sQ0FBQyxDQUFDO2lCQUN6RTtnQkFFRCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLGlCQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRXRELENBQUMsQ0FBQyxDQUFDO1FBRVAsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBRWxCLENBQUM7SUFFTyxvQkFBb0IsQ0FBQyxVQUFzQjtRQUUvQyxPQUFPLFVBQVUsQ0FBQyxJQUFJLEtBQUssVUFBVTtZQUM5QixVQUFVLENBQUMsUUFBUSxLQUFLLFVBQVU7WUFDbEMsVUFBVSxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUM7SUFFMUMsQ0FBQztDQUVKO0FBeEZELHdDQXdGQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QmF0Y2hlcn0gZnJvbSAnLi4vZGF0YXN0b3JlL2JhdGNoZXIvQmF0Y2hlcic7XG5pbXBvcnQge1RyYWNlRXZlbnR9IGZyb20gJy4uL3Byb3hpZXMvVHJhY2VFdmVudCc7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7RG9jSW5mb30gZnJvbSAnLi4vbWV0YWRhdGEvRG9jSW5mbyc7XG5pbXBvcnQge1Byb3hpZXN9IGZyb20gJy4uL3Byb3hpZXMvUHJveGllcyc7XG5pbXBvcnQge1BlcnNpc3RlbmNlTGF5ZXJNYW5hZ2Vyc30gZnJvbSAnLi4vZGF0YXN0b3JlL1BlcnNpc3RlbmNlTGF5ZXJNYW5hZ2Vycyc7XG5pbXBvcnQge1BlcnNpc3RlbmNlTGF5ZXJIYW5kbGVyfSBmcm9tICcuLi9kYXRhc3RvcmUvUGVyc2lzdGVuY2VMYXllckhhbmRsZXInO1xuaW1wb3J0IHtJRG9jTWV0YX0gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvbWV0YWRhdGEvSURvY01ldGFcIjtcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG5leHBvcnQgY2xhc3MgTW9kZWxQZXJzaXN0ZXIge1xuXG4gICAgcHVibGljIG5yV3JpdGVzOiBudW1iZXIgPSAwO1xuXG4gICAgcHVibGljIG5yRGVmZXJyZWRXcml0ZXM6IG51bWJlciA9IDA7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHBlcnNpc3RlbmNlTGF5ZXJIYW5kbGVyOiBQZXJzaXN0ZW5jZUxheWVySGFuZGxlcixcbiAgICAgICAgICAgICAgICBwdWJsaWMgcmVhZG9ubHkgZG9jTWV0YTogSURvY01ldGEpIHtcblxuICAgICAgICBjb25zdCBiYXRjaGVyID0gbmV3IEJhdGNoZXIoYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBwZXJzaXN0ZW5jZUxheWVyID0gdGhpcy5wZXJzaXN0ZW5jZUxheWVySGFuZGxlci5nZXQoKTtcblxuICAgICAgICAgICAgYXdhaXQgcGVyc2lzdGVuY2VMYXllci53cml0ZSh0aGlzLmRvY01ldGEuZG9jSW5mby5maW5nZXJwcmludCwgdGhpcy5kb2NNZXRhKTtcbiAgICAgICAgICAgICsrdGhpcy5ucldyaXRlcztcbiAgICAgICAgICAgIHRoaXMubnJEZWZlcnJlZFdyaXRlcyA9IDA7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gY3JlYXRlIGEgbmV3IERvY01ldGEgcHJveHkgdGhhdCB1cGRhdGVzIG9uIEFOWSB1cGRhdGUuXG4gICAgICAgIHRoaXMuZG9jTWV0YSA9IFByb3hpZXMuY3JlYXRlKHRoaXMuZG9jTWV0YSwgKHRyYWNlRXZlbnQ6IFRyYWNlRXZlbnQpID0+IHtcblxuICAgICAgICAgICAgaWYgKHRoaXMuZG9jTWV0YS5kb2NJbmZvLm11dGF0aW5nID09PSAnc2tpcCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmRvY01ldGEuZG9jSW5mby5tdXRhdGluZyA9PT0gJ2JhdGNoJykge1xuXG4gICAgICAgICAgICAgICAgLy8gc2tpcCBidWxrIHVwZGF0ZXMuIFRoaXMgaXMgZG9uZSB3aGVuIHdlIG5lZWQgdG8gbXV0YXRlIG11bHRpcGxlXG4gICAgICAgICAgICAgICAgLy8gZmllbGRzIGxpa2Ugc2V0dGluZyA1LTEwIHBhZ2VtYXJrcyBhdCBvbmNlIG9yIHNldHRpbmcgcGFnZW1hcmtzXG4gICAgICAgICAgICAgICAgLy8gYW5kIG90aGVyIG1ldHJpY3MgbWV0YWRhdGEuXG5cbiAgICAgICAgICAgICAgICArK3RoaXMubnJEZWZlcnJlZFdyaXRlcztcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuaXNGaW5hbE11dGF0aW5nRXZlbnQodHJhY2VFdmVudCkpIHtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm5yRGVmZXJyZWRXcml0ZXMgPD0gMSkge1xuICAgICAgICAgICAgICAgICAgICAvLyB3ZSBvbmx5IGhhdmUgb25lIGRlZmVycmVkIHdyaXRlIGFuZCB0aGlzIGlzIHRoZSB0b2dnbGluZ1xuICAgICAgICAgICAgICAgICAgICAvLyBvZiB0aGUgbXV0YXRpbmcgZmllbGQgT1Igd2UncmUgc2tpcHBpbmcgd3JpdGVzLlxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxvZy5pbmZvKGBzeW5jIG9mIHBlcnNpc3RlbmNlIGxheWVyIGF0ICR7dHJhY2VFdmVudC5wYXRofSA6ICR7dHJhY2VFdmVudC5wcm9wZXJ0eX1cImApO1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcblxuICAgICAgICAgICAgICAgIGJhdGNoZXIuZW5xdWV1ZSgpLnJ1bigpXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gbG9nLmVycm9yKFwiVW5hYmxlIHRvIHBlcnNpc3Q6IFwiLCBlcnIpKTtcblxuICAgICAgICAgICAgfSwgMCk7XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIFBlcnNpc3RlbmNlTGF5ZXJNYW5hZ2Vycy5vblBlcnNpc3RlbmNlTWFuYWdlcih0aGlzLnBlcnNpc3RlbmNlTGF5ZXJIYW5kbGVyLCAocGVyc2lzdGVuY2VMYXllcikgPT4ge1xuXG4gICAgICAgICAgICAvLyBvbmx5IGFjY2VwdCBEb2NJbmZvIHVwZGF0ZXMgZnJvbSB0aGUgZG9jdW1lbnQgd2UndmUgb3BlbmVkLlxuICAgICAgICAgICAgcGVyc2lzdGVuY2VMYXllci5hZGRFdmVudExpc3RlbmVyRm9yRG9jKHRoaXMuZG9jTWV0YS5kb2NJbmZvLmZpbmdlcnByaW50LCBldmVudCA9PiB7XG5cbiAgICAgICAgICAgICAgICBsb2cuZGVidWcoXCJSZWNlaXZlZCB1cGRhdGVkIERvY0luZm8uXCIpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZG9jTWV0YS5kb2NJbmZvLmZpbmdlcnByaW50ICE9PSBldmVudC5kb2NJbmZvLmZpbmdlcnByaW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRldGFpbCA9IGAke3RoaXMuZG9jTWV0YS5kb2NJbmZvLmZpbmdlcnByaW50fSB2cyAke2V2ZW50LmRvY0luZm8uZmluZ2VycHJpbnR9YDtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBdHRlbXB0IHRvIHVwZGF0ZSBpbmNvcnJlY3QgZmluZ2VycHJpbnQ6IGAgKyBkZXRhaWwpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuZG9jTWV0YS5kb2NJbmZvID0gbmV3IERvY0luZm8oZXZlbnQuZG9jSW5mbyk7XG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0sICdjaGFuZ2VkJyk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGlzRmluYWxNdXRhdGluZ0V2ZW50KHRyYWNlRXZlbnQ6IFRyYWNlRXZlbnQpIHtcblxuICAgICAgICByZXR1cm4gdHJhY2VFdmVudC5wYXRoID09PSAnL2RvY0luZm8nICYmXG4gICAgICAgICAgICAgICB0cmFjZUV2ZW50LnByb3BlcnR5ID09PSAnbXV0YXRpbmcnICYmXG4gICAgICAgICAgICAgICB0cmFjZUV2ZW50LnZhbHVlID09PSB1bmRlZmluZWQ7XG5cbiAgICB9XG5cbn1cbiJdfQ==