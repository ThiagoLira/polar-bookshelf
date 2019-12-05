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
const SplashEngine_1 = require("./SplashEngine");
const Version_1 = require("polar-shared/src/util/Version");
const TimeDurations_1 = require("polar-shared/src/util/TimeDurations");
const RendererAnalytics_1 = require("../../../../web/js/ga/RendererAnalytics");
const NPSModal_1 = require("./nps/NPSModal");
const WhatsNewModal_1 = require("./whats_new/WhatsNewModal");
const SuggestionsModal_1 = require("./suggestions/SuggestionsModal");
const log = Logger_1.Logger.create();
class Splashes extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.onWhatsNew = this.onWhatsNew.bind(this);
        this.onNetPromoter = this.onNetPromoter.bind(this);
        this.state = {
            splash: 'none'
        };
        this.init()
            .catch(err => log.error("Unable to init: ", err));
    }
    render() {
        switch (this.state.splash) {
            case 'none':
                return React.createElement("div", null);
            case 'net-promoter':
                return React.createElement(NPSModal_1.NPSModal, null);
            case 'suggestions':
                return React.createElement(SuggestionsModal_1.SuggestionsModal, null);
            case 'whats-new':
                return React.createElement(WhatsNewModal_1.WhatsNewModal, null);
        }
    }
    onWhatsNew() {
        RendererAnalytics_1.RendererAnalytics.event({ category: 'splash-subsystem', action: 'displaying-whats-new' });
        this.setState(Object.assign(Object.assign({}, this.state), { splash: 'whats-new' }));
    }
    onNetPromoter() {
        RendererAnalytics_1.RendererAnalytics.event({ category: 'splash-subsystem', action: 'displaying-net-promoter' });
        this.setState(Object.assign(Object.assign({}, this.state), { splash: 'net-promoter' }));
    }
    onSuggestions() {
        RendererAnalytics_1.RendererAnalytics.event({ category: 'splash-subsystem', action: 'displaying-suggestions' });
        this.setState(Object.assign(Object.assign({}, this.state), { splash: 'suggestions' }));
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            const userFacts = yield this.computeUserFacts();
            if (userFacts) {
                const splashEngine = new SplashEngine_1.DefaultSplashEngine(userFacts, {
                    onWhatsNew: () => this.onWhatsNew(),
                    onNetPromoter: () => this.onNetPromoter(),
                    onSuggestions: () => this.onSuggestions()
                });
                this.doUpdate(splashEngine);
            }
            else {
                log.warn("Unable to run splash engine due to no user facts");
                RendererAnalytics_1.RendererAnalytics.event({ category: 'splash-subsystem', action: 'warn-no-user-facts' });
            }
        });
    }
    doUpdate(splashEngine) {
        try {
            RendererAnalytics_1.RendererAnalytics.event({ category: 'splash-subsystem-background', action: 'do-update' });
            splashEngine.run();
        }
        finally {
            this.scheduleNextUpdate(splashEngine);
        }
    }
    computeUserFacts() {
        return __awaiter(this, void 0, void 0, function* () {
            const persistenceLayer = yield this.props.persistenceLayerManager.getAsync();
            const datastore = persistenceLayer.datastore;
            const datastoreOverview = yield datastore.overview();
            if (datastoreOverview) {
                const userFacts = {
                    datastoreCreated: datastoreOverview.created,
                    version: Version_1.Version.get()
                };
                return userFacts;
            }
            return undefined;
        });
    }
    scheduleNextUpdate(splashEngine) {
        const delay = TimeDurations_1.TimeDurations.toMillis('5m');
        setTimeout(() => {
            this.doUpdate(splashEngine);
        }, delay);
    }
}
exports.Splashes = Splashes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3BsYXNoZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJTcGxhc2hlcy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQStCO0FBQy9CLDJEQUFzRDtBQUl0RCxpREFBbUQ7QUFDbkQsMkRBQXNEO0FBQ3RELHVFQUFrRTtBQUNsRSwrRUFBMEU7QUFDMUUsNkNBQXdDO0FBQ3hDLDZEQUF3RDtBQUN4RCxxRUFBZ0U7QUFFaEUsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBNEI1QixNQUFhLFFBQVMsU0FBUSxLQUFLLENBQUMsU0FBeUI7SUFFekQsWUFBWSxLQUFhLEVBQUUsT0FBWTtRQUNuQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRXRCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVuRCxJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1QsTUFBTSxFQUFFLE1BQU07U0FDakIsQ0FBQztRQUVGLElBQUksQ0FBQyxJQUFJLEVBQUU7YUFDTixLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGtCQUFrQixFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFFMUQsQ0FBQztJQUVNLE1BQU07UUFLVCxRQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO1lBRXZCLEtBQUssTUFBTTtnQkFDUCxPQUFPLGdDQUFNLENBQUM7WUFFbEIsS0FBSyxjQUFjO2dCQUNmLE9BQU8sb0JBQUMsbUJBQVEsT0FBRSxDQUFDO1lBRXZCLEtBQUssYUFBYTtnQkFDZCxPQUFPLG9CQUFDLG1DQUFnQixPQUFFLENBQUM7WUFFL0Is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QUFHLEVBQUU7WUFFWixJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRWhDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUVkLENBQUM7Q0FFSjtBQWpJRCw0QkFpSUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7UGVyc2lzdGVuY2VMYXllck1hbmFnZXJ9IGZyb20gJy4uLy4uLy4uLy4uL3dlYi9qcy9kYXRhc3RvcmUvUGVyc2lzdGVuY2VMYXllck1hbmFnZXInO1xuaW1wb3J0IHtVc2VyRmFjdHN9IGZyb20gJy4vU3BsYXNoRW5naW5lJztcbmltcG9ydCB7U3BsYXNoRW5naW5lfSBmcm9tICcuL1NwbGFzaEVuZ2luZSc7XG5pbXBvcnQge0RlZmF1bHRTcGxhc2hFbmdpbmV9IGZyb20gJy4vU3BsYXNoRW5naW5lJztcbmltcG9ydCB7VmVyc2lvbn0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL1ZlcnNpb24nO1xuaW1wb3J0IHtUaW1lRHVyYXRpb25zfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvVGltZUR1cmF0aW9ucyc7XG5pbXBvcnQge1JlbmRlcmVyQW5hbHl0aWNzfSBmcm9tICcuLi8uLi8uLi8uLi93ZWIvanMvZ2EvUmVuZGVyZXJBbmFseXRpY3MnO1xuaW1wb3J0IHtOUFNNb2RhbH0gZnJvbSAnLi9ucHMvTlBTTW9kYWwnO1xuaW1wb3J0IHtXaGF0c05ld01vZGFsfSBmcm9tICcuL3doYXRzX25ldy9XaGF0c05ld01vZGFsJztcbmltcG9ydCB7U3VnZ2VzdGlvbnNNb2RhbH0gZnJvbSAnLi9zdWdnZXN0aW9ucy9TdWdnZXN0aW9uc01vZGFsJztcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG4vKipcbiAqIFRoaXMgaXMgYSBiYXNpYyBhbGdvcml0aG0gZm9yIGRpc3BsYXlpbmcgc3BsYXNoZXMgd2hpY2ggaXMgZGVzaWduZWQgdG8gYmVcbiAqIGVhc3kgdG8gbWFuYWdlIC8gZGVidWcgdW50aWwgd2UgYnJpbmcgb24gc29tZXRoaW5nIG1vcmUgc29waGlzdGljYXRlZC5cbiAqXG4gKiBUaGlzIGFsZ29yaXRobSBpcyBnZW5lcmFsbHkgdmVyeSBzaW1wbGUuXG4gKlxuICogLSBjaGVjayBpZiB3ZSBoYXZlIHRvIGRpc3BsYXkgJ3doYXQncyBuZXcnIGJ5IHNlZWluZyBpZiB0aGUgdmVyc2lvbiBudW1iZXJcbiAqICAgaGFzIGluY3JlbWVudGVkLlxuICpcbiAqICAgIC0gaWYgaXQgaGFzLCBkaXNwbGF5IHRoZSB3aGF0J3MgbmV3IGFuZCBoYXZlIGEgdGltZW91dCBiZWZvcmUgd2UgZGlzcGxheVxuICogICAgICB0aGUgbmV4dCBtZXNzYWdlLlxuICpcbiAqIC0gZGV0ZXJtaW5lIHdoaWNoIGFkZGl0aW9uYWwgc3BsYXNoIHRvIGRpc3BsYXk6XG4gKlxuICogICAgLSBuZXQtcHJvbW90ZXItc2NvcmUgbXVzdCBjb21lIGZpcnN0IGFuZCB3ZSBzaG91bGQgb25seSBkaXNwbGF5IGl0IG9uY2VcbiAqICAgICAgcGVyIHdlZWtcbiAqXG4gKiAgICAtIFRoZW4sIDI0IGhvdXJzIGxhdGVyLCBzaG91bGQgY29tZSBhIHRleHQgcHJvbXB0IGFza2luZyBmb3IgdGhlIHVzZXJzXG4gKiAgICAgIGZlZWRiYWNrIHRvIGltcHJvdmUgcG9sYXIuICBBc2sgdGhlc2Ugc2VwYXJhdGVseSBzcGFjZWQgYXBhcnQgc28gd2VcbiAqICAgICAgZG9uJ3QgZ2V0IGxhdGVuY3kuXG4gKlxuICogICAgLSBJIHRoaW5rIHRoaXMgc2hvdWxkIGV2ZW50dWFsbHkgYmUgaW1wbGVtZW50ZWQgdmlhIGEgbW9yZSBjb21wbGV4IHJ1bGVzXG4gKiAgICAgIGVuZ2luZSBidXQgdGhlc2Ugc3lzdGVtcyBhcmUgY29tcGxpY2F0ZWQgYW5kIG1pZ2h0IHRha2UgMi00IGRheXMgdG8gZmluZFxuICogICAgICBvbmUgYW5kIGltcGxlbWVudCB0aGF0IHdlIGFjdHVhbGx5IGxpa2UuXG4gKlxuICovXG5leHBvcnQgY2xhc3MgU3BsYXNoZXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJUHJvcHMsIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG5cbiAgICAgICAgdGhpcy5vbldoYXRzTmV3ID0gdGhpcy5vbldoYXRzTmV3LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25OZXRQcm9tb3RlciA9IHRoaXMub25OZXRQcm9tb3Rlci5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBzcGxhc2g6ICdub25lJ1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuaW5pdCgpXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IGxvZy5lcnJvcihcIlVuYWJsZSB0byBpbml0OiBcIiwgZXJyKSk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuXG4gICAgICAgIC8vIFRPRE86IGFkZCBzb21lIGNhbGxiYWNrcyBvbiBzdGF0ZSB0byBwcmV2ZW50IGRvdWJsZSBkaWFsb2cgb3BlbiBpblxuICAgICAgICAvLyB0aGUgZnV0dXJlIGJ1dCB3ZSBoYXZlIGEgNW0gbGF0ZW5jeSBub3cgYmV0d2VlbiB0aGVzZS5cblxuICAgICAgICBzd2l0Y2ggKHRoaXMuc3RhdGUuc3BsYXNoKSB7XG5cbiAgICAgICAgICAgIGNhc2UgJ25vbmUnOlxuICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2Lz47XG5cbiAgICAgICAgICAgIGNhc2UgJ25ldC1wcm9tb3Rlcic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxOUFNNb2RhbC8+O1xuXG4gICAgICAgICAgICBjYXNlICdzdWdnZXN0aW9ucyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxTdWdnZXN0aW9uc01vZGFsLz47XG5cbiAgICAgICAgICAgIGNhc2UgJ3doYXRzLW5ldyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxXaGF0c05ld01vZGFsLz47XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbldoYXRzTmV3KCkge1xuICAgICAgICBSZW5kZXJlckFuYWx5dGljcy5ldmVudCh7Y2F0ZWdvcnk6ICdzcGxhc2gtc3Vic3lzdGVtJywgYWN0aW9uOiAnZGlzcGxheWluZy13aGF0cy1uZXcnfSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoey4uLnRoaXMuc3RhdGUsIHNwbGFzaDogJ3doYXRzLW5ldyd9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uTmV0UHJvbW90ZXIoKSB7XG5cbiAgICAgICAgUmVuZGVyZXJBbmFseXRpY3MuZXZlbnQoe2NhdGVnb3J5OiAnc3BsYXNoLXN1YnN5c3RlbScsIGFjdGlvbjogJ2Rpc3BsYXlpbmctbmV0LXByb21vdGVyJ30pO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsuLi50aGlzLnN0YXRlLCBzcGxhc2g6ICduZXQtcHJvbW90ZXInfSk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uU3VnZ2VzdGlvbnMoKSB7XG5cbiAgICAgICAgUmVuZGVyZXJBbmFseXRpY3MuZXZlbnQoe2NhdGVnb3J5OiAnc3BsYXNoLXN1YnN5c3RlbScsIGFjdGlvbjogJ2Rpc3BsYXlpbmctc3VnZ2VzdGlvbnMnfSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoey4uLnRoaXMuc3RhdGUsIHNwbGFzaDogJ3N1Z2dlc3Rpb25zJ30pO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBpbml0KCkge1xuXG4gICAgICAgIGNvbnN0IHVzZXJGYWN0cyA9IGF3YWl0IHRoaXMuY29tcHV0ZVVzZXJGYWN0cygpO1xuXG4gICAgICAgIGlmICh1c2VyRmFjdHMpIHtcblxuICAgICAgICAgICAgY29uc3Qgc3BsYXNoRW5naW5lID0gbmV3IERlZmF1bHRTcGxhc2hFbmdpbmUodXNlckZhY3RzLCB7XG4gICAgICAgICAgICAgICAgb25XaGF0c05ldzogKCkgPT4gdGhpcy5vbldoYXRzTmV3KCksXG4gICAgICAgICAgICAgICAgb25OZXRQcm9tb3RlcjogKCkgPT4gdGhpcy5vbk5ldFByb21vdGVyKCksXG4gICAgICAgICAgICAgICAgb25TdWdnZXN0aW9uczogKCkgPT4gdGhpcy5vblN1Z2dlc3Rpb25zKClcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLmRvVXBkYXRlKHNwbGFzaEVuZ2luZSk7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxvZy53YXJuKFwiVW5hYmxlIHRvIHJ1biBzcGxhc2ggZW5naW5lIGR1ZSB0byBubyB1c2VyIGZhY3RzXCIpO1xuICAgICAgICAgICAgUmVuZGVyZXJBbmFseXRpY3MuZXZlbnQoe2NhdGVnb3J5OiAnc3BsYXNoLXN1YnN5c3RlbScsIGFjdGlvbjogJ3dhcm4tbm8tdXNlci1mYWN0cyd9KTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkb1VwZGF0ZShzcGxhc2hFbmdpbmU6IFNwbGFzaEVuZ2luZSkge1xuXG4gICAgICAgIHRyeSB7XG5cbiAgICAgICAgICAgIFJlbmRlcmVyQW5hbHl0aWNzLmV2ZW50KHtjYXRlZ29yeTogJ3NwbGFzaC1zdWJzeXN0ZW0tYmFja2dyb3VuZCcsIGFjdGlvbjogJ2RvLXVwZGF0ZSd9KTtcblxuICAgICAgICAgICAgc3BsYXNoRW5naW5lLnJ1bigpO1xuXG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlTmV4dFVwZGF0ZShzcGxhc2hFbmdpbmUpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGNvbXB1dGVVc2VyRmFjdHMoKTogUHJvbWlzZTxVc2VyRmFjdHMgfCB1bmRlZmluZWQ+IHtcblxuICAgICAgICBjb25zdCBwZXJzaXN0ZW5jZUxheWVyID0gYXdhaXQgdGhpcy5wcm9wcy5wZXJzaXN0ZW5jZUxheWVyTWFuYWdlci5nZXRBc3luYygpO1xuXG4gICAgICAgIGNvbnN0IGRhdGFzdG9yZSA9IHBlcnNpc3RlbmNlTGF5ZXIuZGF0YXN0b3JlO1xuXG4gICAgICAgIGNvbnN0IGRhdGFzdG9yZU92ZXJ2aWV3ID0gYXdhaXQgZGF0YXN0b3JlLm92ZXJ2aWV3KCk7XG5cbiAgICAgICAgaWYgKGRhdGFzdG9yZU92ZXJ2aWV3KSB7XG5cbiAgICAgICAgICAgIGNvbnN0IHVzZXJGYWN0czogVXNlckZhY3RzID0ge1xuICAgICAgICAgICAgICAgIGRhdGFzdG9yZUNyZWF0ZWQ6IGRhdGFzdG9yZU92ZXJ2aWV3LmNyZWF0ZWQhLFxuICAgICAgICAgICAgICAgIHZlcnNpb246IFZlcnNpb24uZ2V0KClcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHJldHVybiB1c2VyRmFjdHM7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIHNjaGVkdWxlTmV4dFVwZGF0ZShzcGxhc2hFbmdpbmU6IFNwbGFzaEVuZ2luZSkge1xuXG4gICAgICAgIGNvbnN0IGRlbGF5ID0gVGltZUR1cmF0aW9ucy50b01pbGxpcygnNW0nKTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcblxuICAgICAgICAgICAgdGhpcy5kb1VwZGF0ZShzcGxhc2hFbmdpbmUpO1xuXG4gICAgICAgIH0sIGRlbGF5KTtcblxuICAgIH1cblxufVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgICByZWFkb25seSBwZXJzaXN0ZW5jZUxheWVyTWFuYWdlcjogUGVyc2lzdGVuY2VMYXllck1hbmFnZXI7XG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xuICAgIHJlYWRvbmx5IHNwbGFzaDogU3BsYXNoSUQ7XG59XG5cbnR5cGUgU3BsYXNoSUQgPSAnbm9uZScgfCAnbmV0LXByb21vdGVyJyB8ICd3aGF0cy1uZXcnIHwgJ3N1Z2dlc3Rpb25zJztcblxuIl19