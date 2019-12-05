"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ReactInjector_1 = require("../../ui/util/ReactInjector");
const LocalPrefs_1 = require("../../util/LocalPrefs");
const LifecycleEvents_1 = require("../../ui/util/LifecycleEvents");
const MobileDisclaimer_1 = require("./MobileDisclaimer");
const Platforms_1 = require("polar-shared/src/util/Platforms");
const Logger_1 = require("polar-shared/src/logger/Logger");
const log = Logger_1.Logger.create();
class MobileDisclaimers {
    static createWhenNecessary() {
        if (Platforms_1.Platforms.type() === 'desktop') {
            return;
        }
        if (Platforms_1.Platforms.type() === 'unknown') {
            log.warn("Running on unknown platform");
            return;
        }
        if (LocalPrefs_1.LocalPrefs.isMarked(LifecycleEvents_1.LifecycleEvents.MOBILE_PREVIEW_WARNING_SHOWN)) {
            return;
        }
        ReactInjector_1.ReactInjector.inject(react_1.default.createElement(MobileDisclaimer_1.MobileDisclaimer, null));
    }
}
exports.MobileDisclaimers = MobileDisclaimers;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9iaWxlRGlzY2xhaW1lcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJNb2JpbGVEaXNjbGFpbWVycy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxrREFBMEI7QUFDMUIsK0RBQTBEO0FBQzFELHNEQUFpRDtBQUNqRCxtRUFBOEQ7QUFDOUQseURBQW9EO0FBQ3BELCtEQUEwRDtBQUMxRCwyREFBc0Q7QUFFdEQsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLE1BQWEsaUJBQWlCO0lBRW5CLE1BQU0sQ0FBQyxtQkFBbUI7UUFFN0IsSUFBSSxxQkFBUyxDQUFDLElBQUksRUFBRSxLQUFLLFNBQVMsRUFBRTtZQUNoQyxPQUFPO1NBQ1Y7UUFFRCxJQUFJLHFCQUFTLENBQUMsSUFBSSxFQUFFLEtBQUssU0FBUyxFQUFFO1lBQ2hDLEdBQUcsQ0FBQyxJQUFJLENBQUMsNkJBQTZCLENBQUMsQ0FBQztZQUN4QyxPQUFPO1NBQ1Y7UUFFRCxJQUFJLHVCQUFVLENBQUMsUUFBUSxDQUFDLGlDQUFlLENBQUMsNEJBQTRCLENBQUMsRUFBRTtZQUNuRSxPQUFPO1NBQ1Y7UUFFRCw2QkFBYSxDQUFDLE1BQU0sQ0FBQyw4QkFBQyxtQ0FBZ0IsT0FBRSxDQUFDLENBQUM7SUFFOUMsQ0FBQztDQUVKO0FBckJELDhDQXFCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1JlYWN0SW5qZWN0b3J9IGZyb20gJy4uLy4uL3VpL3V0aWwvUmVhY3RJbmplY3Rvcic7XG5pbXBvcnQge0xvY2FsUHJlZnN9IGZyb20gJy4uLy4uL3V0aWwvTG9jYWxQcmVmcyc7XG5pbXBvcnQge0xpZmVjeWNsZUV2ZW50c30gZnJvbSAnLi4vLi4vdWkvdXRpbC9MaWZlY3ljbGVFdmVudHMnO1xuaW1wb3J0IHtNb2JpbGVEaXNjbGFpbWVyfSBmcm9tICcuL01vYmlsZURpc2NsYWltZXInO1xuaW1wb3J0IHtQbGF0Zm9ybXN9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC9QbGF0Zm9ybXMnO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL2xvZ2dlci9Mb2dnZXJcIjtcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG5leHBvcnQgY2xhc3MgTW9iaWxlRGlzY2xhaW1lcnMge1xuXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGVXaGVuTmVjZXNzYXJ5KCkge1xuXG4gICAgICAgIGlmIChQbGF0Zm9ybXMudHlwZSgpID09PSAnZGVza3RvcCcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChQbGF0Zm9ybXMudHlwZSgpID09PSAndW5rbm93bicpIHtcbiAgICAgICAgICAgIGxvZy53YXJuKFwiUnVubmluZyBvbiB1bmtub3duIHBsYXRmb3JtXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKExvY2FsUHJlZnMuaXNNYXJrZWQoTGlmZWN5Y2xlRXZlbnRzLk1PQklMRV9QUkVWSUVXX1dBUk5JTkdfU0hPV04pKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBSZWFjdEluamVjdG9yLmluamVjdCg8TW9iaWxlRGlzY2xhaW1lci8+KTtcblxuICAgIH1cblxufVxuIl19