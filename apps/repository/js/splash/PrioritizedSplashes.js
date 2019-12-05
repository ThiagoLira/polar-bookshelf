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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const Logger_1 = require("polar-shared/src/logger/Logger");
const PrioritizedComponentManager_1 = require("../../../../web/js/ui/prioritized/PrioritizedComponentManager");
const TimeDurations_1 = require("polar-shared/src/util/TimeDurations");
const SplashLifecycle_1 = require("../splash2/SplashLifecycle");
const log = Logger_1.Logger.create();
const MIN_DELAY = TimeDurations_1.TimeDurations.toMillis('15m');
const prioritizedComponentRefs = [];
class PrioritizedSplashes extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            lastUpdated: 0
        };
        this.doUpdate()
            .catch(err => log.error("Unable to update: ", err));
    }
    render() {
        if (this.state.datastoreOverview) {
            return (React.createElement(PrioritizedComponentManager_1.PrioritizedComponentManager, { prioritizedComponentRefs: prioritizedComponentRefs, datastoreOverview: this.state.datastoreOverview }));
        }
        else {
            return React.createElement("div", null);
        }
    }
    doUpdate() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const persistenceLayer = yield this.props.persistenceLayerManager.getAsync();
                const datastore = persistenceLayer.datastore;
                const datastoreOverview = yield datastore.overview();
                if (datastoreOverview) {
                    this.setState({
                        datastoreOverview,
                        lastUpdated: Date.now()
                    });
                    log.info("Datastore overview updated");
                }
            }
            finally {
                this.scheduleNextUpdate();
            }
        });
    }
    scheduleNextUpdate() {
        const delay = SplashLifecycle_1.SplashLifecycle.computeDelay();
        const effectiveDelay = Math.max(delay || MIN_DELAY, MIN_DELAY);
        log.debug("Scheduling next updated: ", { delay, effectiveDelay });
        setTimeout(() => {
            this.doUpdate()
                .catch(err => log.error("Unable to do update: ", err));
        }, effectiveDelay);
    }
}
exports.PrioritizedSplashes = PrioritizedSplashes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJpb3JpdGl6ZWRTcGxhc2hlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlByaW9yaXRpemVkU3BsYXNoZXMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUMvQiwyREFBc0Q7QUFDdEQsK0dBQW1JO0FBR25JLHVFQUFrRTtBQUNsRSxnRUFBMkQ7QUFFM0QsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLE1BQU0sU0FBUyxHQUFHLDZCQUFhLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBRWhELE1BQU0sd0JBQXdCLEdBQThCLEVBUzNELENBQUM7QUFNRixNQUFhLG1CQUFvQixTQUFRLEtBQUssQ0FBQyxTQUF5QjtJQUVwRSxZQUFZLEtBQWEsRUFBRSxPQUFZO1FBQ25DLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFdEIsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNULFdBQVcsRUFBRSxDQUFDO1NBQ2pCLENBQUM7UUFFRixJQUFJLENBQUMsUUFBUSxFQUFFO2FBQ1YsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBRTVELENBQUM7SUFFTSxNQUFNO1FBRVQsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixFQUFFO1lBRTlCLE9BQU8sQ0FDSCxvQkFBQyx5REFBMkIsSUFBQyx3QkFBd0IsRUFBRSx3QkFBd0IsRUFDbEQsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsR0FBRyxDQUNsRixDQUFDO1NBRUw7YUFBTTtZQUNILE9BQU8sZ0NBQU0sQ0FBQztTQUNqQjtJQUVMLENBQUM7SUFFYSxRQUFROztZQUVsQixJQUFJO2dCQUVBLE1BQU0sZ0JBQWdCLEdBQUcsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLHVCQUF1QixDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUU3RSxNQUFNLFNBQVMsR0FBRyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUM7Z0JBRTdDLE1BQU0saUJBQWlCLEdBQUcsTUFBTSxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBRXJELElBQUksaUJBQWlCLEVBQUU7b0JBRW5CLElBQUksQ0FBQyxRQUFRLENBQUM7d0JBQ1YsaUJBQWlCO3dCQUNqQixXQUFXLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRTtxQkFDMUIsQ0FBQyxDQUFDO29CQUVILEdBQUcsQ0FBQyxJQUFJLENBQUMsNEJBQTRCLENBQUMsQ0FBQztpQkFFMUM7YUFFSjtvQkFBUztnQkFDTixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQzthQUM3QjtRQUVMLENBQUM7S0FBQTtJQUVPLGtCQUFrQjtRQUV0QixNQUFNLEtBQUssR0FBRyxpQ0FBZSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBRTdDLE1BQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxJQUFJLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUUvRCxHQUFHLENBQUMsS0FBSyxDQUFDLDJCQUEyQixFQUFFLEVBQUMsS0FBSyxFQUFFLGNBQWMsRUFBQyxDQUFDLENBQUM7UUFFaEUsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUVaLElBQUksQ0FBQyxRQUFRLEVBQUU7aUJBQ1YsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRS9ELENBQUMsRUFBRSxjQUFjLENBQUMsQ0FBQztJQUV2QixDQUFDO0NBRUo7QUF6RUQsa0RBeUVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge1ByaW9yaXRpemVkQ29tcG9uZW50TWFuYWdlciwgUHJpb3JpdGl6ZWRDb21wb25lbnRSZWZ9IGZyb20gJy4uLy4uLy4uLy4uL3dlYi9qcy91aS9wcmlvcml0aXplZC9Qcmlvcml0aXplZENvbXBvbmVudE1hbmFnZXInO1xuaW1wb3J0IHtQZXJzaXN0ZW5jZUxheWVyTWFuYWdlcn0gZnJvbSAnLi4vLi4vLi4vLi4vd2ViL2pzL2RhdGFzdG9yZS9QZXJzaXN0ZW5jZUxheWVyTWFuYWdlcic7XG5pbXBvcnQge0RhdGFzdG9yZU92ZXJ2aWV3fSBmcm9tICcuLi8uLi8uLi8uLi93ZWIvanMvZGF0YXN0b3JlL0RhdGFzdG9yZSc7XG5pbXBvcnQge1RpbWVEdXJhdGlvbnN9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC9UaW1lRHVyYXRpb25zJztcbmltcG9ydCB7U3BsYXNoTGlmZWN5Y2xlfSBmcm9tICcuLi9zcGxhc2gyL1NwbGFzaExpZmVjeWNsZSc7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuY29uc3QgTUlOX0RFTEFZID0gVGltZUR1cmF0aW9ucy50b01pbGxpcygnMTVtJyk7XG5cbmNvbnN0IHByaW9yaXRpemVkQ29tcG9uZW50UmVmczogUHJpb3JpdGl6ZWRDb21wb25lbnRSZWZbXSA9IFtcbiAgICAvLyBuZXcgSm9pbkRpc2NvcmRSZWYoKSxcbiAgICAvLyBuZXcgV2hhdHNOZXdSZWYoKSxcbiAgICAvLyBuZXcgQ3Jvd2RmdW5kaW5nUmVmKCksXG4gICAgLy8gbmV3IE5QU1JlZigpLFxuICAgIC8vIG5ldyBHaXRodWJTdGFyc1JlZigpLFxuICAgIC8vIG5ldyBTdXJ2ZXlSZWYoKSxcbiAgICAvLyBuZXcgQ2hyb21lRXh0ZW5zaW9uUmV2aWV3UmVmKCksXG4gICAgLy8gbmV3IEFsdGVybmF0aXZlVG9SZXZpZXdSZWYoKSxcbl07XG5cbi8vIGlmIChEaXN0Q29uZmlnLkVOQUJMRV9QVVJDSEFTRVMpIHtcbi8vICAgICBwcmlvcml0aXplZENvbXBvbmVudFJlZnMucHVzaChuZXcgUHJlbWl1bVJlZigpKTtcbi8vIH1cblxuZXhwb3J0IGNsYXNzIFByaW9yaXRpemVkU3BsYXNoZXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJUHJvcHMsIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGxhc3RVcGRhdGVkOiAwXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5kb1VwZGF0ZSgpXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IGxvZy5lcnJvcihcIlVuYWJsZSB0byB1cGRhdGU6IFwiLCBlcnIpKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuZGF0YXN0b3JlT3ZlcnZpZXcpIHtcblxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8UHJpb3JpdGl6ZWRDb21wb25lbnRNYW5hZ2VyIHByaW9yaXRpemVkQ29tcG9uZW50UmVmcz17cHJpb3JpdGl6ZWRDb21wb25lbnRSZWZzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YXN0b3JlT3ZlcnZpZXc9e3RoaXMuc3RhdGUuZGF0YXN0b3JlT3ZlcnZpZXd9Lz5cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiA8ZGl2Lz47XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgZG9VcGRhdGUoKSB7XG5cbiAgICAgICAgdHJ5IHtcblxuICAgICAgICAgICAgY29uc3QgcGVyc2lzdGVuY2VMYXllciA9IGF3YWl0IHRoaXMucHJvcHMucGVyc2lzdGVuY2VMYXllck1hbmFnZXIuZ2V0QXN5bmMoKTtcblxuICAgICAgICAgICAgY29uc3QgZGF0YXN0b3JlID0gcGVyc2lzdGVuY2VMYXllci5kYXRhc3RvcmU7XG5cbiAgICAgICAgICAgIGNvbnN0IGRhdGFzdG9yZU92ZXJ2aWV3ID0gYXdhaXQgZGF0YXN0b3JlLm92ZXJ2aWV3KCk7XG5cbiAgICAgICAgICAgIGlmIChkYXRhc3RvcmVPdmVydmlldykge1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFzdG9yZU92ZXJ2aWV3LFxuICAgICAgICAgICAgICAgICAgICBsYXN0VXBkYXRlZDogRGF0ZS5ub3coKVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgbG9nLmluZm8oXCJEYXRhc3RvcmUgb3ZlcnZpZXcgdXBkYXRlZFwiKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlTmV4dFVwZGF0ZSgpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIHNjaGVkdWxlTmV4dFVwZGF0ZSgpIHtcblxuICAgICAgICBjb25zdCBkZWxheSA9IFNwbGFzaExpZmVjeWNsZS5jb21wdXRlRGVsYXkoKTtcblxuICAgICAgICBjb25zdCBlZmZlY3RpdmVEZWxheSA9IE1hdGgubWF4KGRlbGF5IHx8IE1JTl9ERUxBWSwgTUlOX0RFTEFZKTtcblxuICAgICAgICBsb2cuZGVidWcoXCJTY2hlZHVsaW5nIG5leHQgdXBkYXRlZDogXCIsIHtkZWxheSwgZWZmZWN0aXZlRGVsYXl9KTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcblxuICAgICAgICAgICAgdGhpcy5kb1VwZGF0ZSgpXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBsb2cuZXJyb3IoXCJVbmFibGUgdG8gZG8gdXBkYXRlOiBcIiwgZXJyKSk7XG5cbiAgICAgICAgfSwgZWZmZWN0aXZlRGVsYXkpO1xuXG4gICAgfVxuXG59XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICAgIHJlYWRvbmx5IHBlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyOiBQZXJzaXN0ZW5jZUxheWVyTWFuYWdlcjtcbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG4gICAgcmVhZG9ubHkgZGF0YXN0b3JlT3ZlcnZpZXc/OiBEYXRhc3RvcmVPdmVydmlldztcbiAgICByZWFkb25seSBsYXN0VXBkYXRlZDogbnVtYmVyO1xufVxuXG5cbiJdfQ==