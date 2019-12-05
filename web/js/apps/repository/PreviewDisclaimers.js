"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const PreviewDisclaimer_1 = require("./PreviewDisclaimer");
const ReactInjector_1 = require("../../ui/util/ReactInjector");
const LocalPrefs_1 = require("../../util/LocalPrefs");
const LifecycleEvents_1 = require("../../ui/util/LifecycleEvents");
const AppRuntime_1 = require("../../AppRuntime");
class PreviewDisclaimers {
    static createWhenNecessary() {
        if (!AppRuntime_1.AppRuntime.isBrowser()) {
            return;
        }
        if (LocalPrefs_1.LocalPrefs.isMarked(LifecycleEvents_1.LifecycleEvents.WEBAPP_PREVIEW_WARNING_SHOWN)) {
            return;
        }
        const injectedComponent = ReactInjector_1.ReactInjector.inject(react_1.default.createElement(PreviewDisclaimer_1.PreviewDisclaimer, null));
    }
}
exports.PreviewDisclaimers = PreviewDisclaimers;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJldmlld0Rpc2NsYWltZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUHJldmlld0Rpc2NsYWltZXJzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGtEQUEwQjtBQUMxQiwyREFBc0Q7QUFDdEQsK0RBQTBEO0FBQzFELHNEQUFpRDtBQUNqRCxtRUFBOEQ7QUFDOUQsaURBQTRDO0FBRTVDLE1BQWEsa0JBQWtCO0lBRXBCLE1BQU0sQ0FBQyxtQkFBbUI7UUFFN0IsSUFBSSxDQUFFLHVCQUFVLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDMUIsT0FBTztTQUNWO1FBRUQsSUFBSSx1QkFBVSxDQUFDLFFBQVEsQ0FBQyxpQ0FBZSxDQUFDLDRCQUE0QixDQUFDLEVBQUU7WUFDbkUsT0FBTztTQUNWO1FBRUQsTUFBTSxpQkFBaUIsR0FBRyw2QkFBYSxDQUFDLE1BQU0sQ0FBQyw4QkFBQyxxQ0FBaUIsT0FBRSxDQUFDLENBQUM7SUFFekUsQ0FBQztDQUVKO0FBaEJELGdEQWdCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1ByZXZpZXdEaXNjbGFpbWVyfSBmcm9tICcuL1ByZXZpZXdEaXNjbGFpbWVyJztcbmltcG9ydCB7UmVhY3RJbmplY3Rvcn0gZnJvbSAnLi4vLi4vdWkvdXRpbC9SZWFjdEluamVjdG9yJztcbmltcG9ydCB7TG9jYWxQcmVmc30gZnJvbSAnLi4vLi4vdXRpbC9Mb2NhbFByZWZzJztcbmltcG9ydCB7TGlmZWN5Y2xlRXZlbnRzfSBmcm9tICcuLi8uLi91aS91dGlsL0xpZmVjeWNsZUV2ZW50cyc7XG5pbXBvcnQge0FwcFJ1bnRpbWV9IGZyb20gJy4uLy4uL0FwcFJ1bnRpbWUnO1xuXG5leHBvcnQgY2xhc3MgUHJldmlld0Rpc2NsYWltZXJzIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlV2hlbk5lY2Vzc2FyeSgpIHtcblxuICAgICAgICBpZiAoISBBcHBSdW50aW1lLmlzQnJvd3NlcigpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoTG9jYWxQcmVmcy5pc01hcmtlZChMaWZlY3ljbGVFdmVudHMuV0VCQVBQX1BSRVZJRVdfV0FSTklOR19TSE9XTikpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGluamVjdGVkQ29tcG9uZW50ID0gUmVhY3RJbmplY3Rvci5pbmplY3QoPFByZXZpZXdEaXNjbGFpbWVyLz4pO1xuXG4gICAgfVxuXG59XG4iXX0=