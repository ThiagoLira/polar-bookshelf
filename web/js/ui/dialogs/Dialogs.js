"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Confirm_1 = require("./Confirm");
const React = __importStar(require("react"));
const ReactInjector_1 = require("../util/ReactInjector");
const Prompt_1 = require("./Prompt");
const Blackout_1 = require("../blackout/Blackout");
const Alert_1 = require("./Alert");
class Dialogs {
    static confirm(opts) {
        let injected;
        Blackout_1.Blackout.enable();
        const cleanup = () => {
            Blackout_1.Blackout.disable();
            injected.destroy();
        };
        const onCancel = () => {
            cleanup();
            if (opts.onCancel) {
                opts.onCancel();
            }
        };
        const onConfirm = () => {
            cleanup();
            opts.onConfirm();
        };
        injected = ReactInjector_1.ReactInjector.inject(React.createElement(Confirm_1.Confirm, Object.assign({}, opts, { onCancel: onCancel, onConfirm: onConfirm })));
    }
    static alert(opts) {
        let injected;
        Blackout_1.Blackout.enable();
        const cleanup = () => {
            Blackout_1.Blackout.disable();
            injected.destroy();
        };
        const onConfirm = () => {
            cleanup();
            opts.onConfirm();
        };
        injected = ReactInjector_1.ReactInjector.inject(React.createElement(Alert_1.Alert, Object.assign({}, opts, { onConfirm: onConfirm })));
    }
    static prompt(opts) {
        let injected;
        Blackout_1.Blackout.enable();
        const cleanup = () => {
            Blackout_1.Blackout.disable();
            injected.destroy();
        };
        const onCancel = () => {
            cleanup();
            opts.onCancel();
        };
        const onDone = (value) => {
            cleanup();
            opts.onDone(value);
        };
        injected = ReactInjector_1.ReactInjector.inject(React.createElement(Prompt_1.Prompt, Object.assign({}, opts, { onCancel: onCancel, onDone: onDone })));
    }
}
exports.Dialogs = Dialogs;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGlhbG9ncy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkRpYWxvZ3MudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVDQUFrQztBQUNsQyw2Q0FBK0I7QUFDL0IseURBQXVFO0FBQ3ZFLHFDQUE2QztBQUM3QyxtREFBOEM7QUFDOUMsbUNBQThCO0FBRTlCLE1BQWEsT0FBTztJQUVULE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBa0I7UUFFcEMsSUFBSSxRQUF1QyxDQUFDO1FBRTVDLG1CQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7UUFFbEIsTUFBTSxPQUFPLEdBQUcsR0FBRyxFQUFFO1lBQ2pCLG1CQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDbkIsUUFBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3hCLENBQUMsQ0FBQztRQUVGLE1BQU0sUUFBUSxHQUFHLEdBQUcsRUFBRTtZQUNsQixPQUFPLEVBQUUsQ0FBQztZQUVWLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDZixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDbkI7UUFDTCxDQUFDLENBQUM7UUFFRixNQUFNLFNBQVMsR0FBRyxHQUFHLEVBQUU7WUFDbkIsT0FBTyxFQUFFLENBQUM7WUFDVixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDckIsQ0FBQyxDQUFDO1FBRUYsUUFBUSxHQUFHLDZCQUFhLENBQUMsTUFBTSxDQUFDLG9CQUFDLGlCQUFPLG9CQUFLLElBQUksSUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxTQUFTLElBQUcsQ0FBQyxDQUFDO0lBRXBHLENBQUM7SUFFTSxNQUFNLENBQUMsS0FBSyxDQUFDLElBQWdCO1FBRWhDLElBQUksUUFBdUMsQ0FBQztRQUU1QyxtQkFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRWxCLE1BQU0sT0FBTyxHQUFHLEdBQUcsRUFBRTtZQUNqQixtQkFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ25CLFFBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN4QixDQUFDLENBQUM7UUFFRixNQUFNLFNBQVMsR0FBRyxHQUFHLEVBQUU7WUFDbkIsT0FBTyxFQUFFLENBQUM7WUFDVixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDckIsQ0FBQyxDQUFDO1FBRUYsUUFBUSxHQUFHLDZCQUFhLENBQUMsTUFBTSxDQUFDLG9CQUFDLGFBQUssb0JBQUssSUFBSSxJQUFFLFNBQVMsRUFBRSxTQUFTLElBQUcsQ0FBQyxDQUFDO0lBRTlFLENBQUM7SUFFTSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQWlCO1FBRWxDLElBQUksUUFBdUMsQ0FBQztRQUU1QyxtQkFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRWxCLE1BQU0sT0FBTyxHQUFHLEdBQUcsRUFBRTtZQUNqQixtQkFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ25CLFFBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN4QixDQUFDLENBQUM7UUFFRixNQUFNLFFBQVEsR0FBRyxHQUFHLEVBQUU7WUFDbEIsT0FBTyxFQUFFLENBQUM7WUFDVixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDcEIsQ0FBQyxDQUFDO1FBRUYsTUFBTSxNQUFNLEdBQUcsQ0FBQyxLQUFhLEVBQUUsRUFBRTtZQUM3QixPQUFPLEVBQUUsQ0FBQztZQUNWLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkIsQ0FBQyxDQUFDO1FBRUYsUUFBUSxHQUFHLDZCQUFhLENBQUMsTUFBTSxDQUFDLG9CQUFDLGVBQU0sb0JBQUssSUFBSSxJQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sSUFBRyxDQUFDLENBQUM7SUFFN0YsQ0FBQztDQUVKO0FBM0VELDBCQTJFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29uZmlybX0gZnJvbSAnLi9Db25maXJtJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7SW5qZWN0ZWRDb21wb25lbnQsIFJlYWN0SW5qZWN0b3J9IGZyb20gJy4uL3V0aWwvUmVhY3RJbmplY3Rvcic7XG5pbXBvcnQge1Byb21wdCwgUHJvbXB0UHJvcHN9IGZyb20gJy4vUHJvbXB0JztcbmltcG9ydCB7QmxhY2tvdXR9IGZyb20gJy4uL2JsYWNrb3V0L0JsYWNrb3V0JztcbmltcG9ydCB7QWxlcnR9IGZyb20gXCIuL0FsZXJ0XCI7XG5cbmV4cG9ydCBjbGFzcyBEaWFsb2dzIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgY29uZmlybShvcHRzOiBDb25maXJtUHJvcHMpIHtcblxuICAgICAgICBsZXQgaW5qZWN0ZWQ6IEluamVjdGVkQ29tcG9uZW50IHwgdW5kZWZpbmVkO1xuXG4gICAgICAgIEJsYWNrb3V0LmVuYWJsZSgpO1xuXG4gICAgICAgIGNvbnN0IGNsZWFudXAgPSAoKSA9PiB7XG4gICAgICAgICAgICBCbGFja291dC5kaXNhYmxlKCk7XG4gICAgICAgICAgICBpbmplY3RlZCEuZGVzdHJveSgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IG9uQ2FuY2VsID0gKCkgPT4ge1xuICAgICAgICAgICAgY2xlYW51cCgpO1xuXG4gICAgICAgICAgICBpZiAob3B0cy5vbkNhbmNlbCkge1xuICAgICAgICAgICAgICAgIG9wdHMub25DYW5jZWwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBvbkNvbmZpcm0gPSAoKSA9PiB7XG4gICAgICAgICAgICBjbGVhbnVwKCk7XG4gICAgICAgICAgICBvcHRzLm9uQ29uZmlybSgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGluamVjdGVkID0gUmVhY3RJbmplY3Rvci5pbmplY3QoPENvbmZpcm0gey4uLm9wdHN9IG9uQ2FuY2VsPXtvbkNhbmNlbH0gb25Db25maXJtPXtvbkNvbmZpcm19Lz4pO1xuXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBhbGVydChvcHRzOiBBbGVydFByb3BzKSB7XG5cbiAgICAgICAgbGV0IGluamVjdGVkOiBJbmplY3RlZENvbXBvbmVudCB8IHVuZGVmaW5lZDtcblxuICAgICAgICBCbGFja291dC5lbmFibGUoKTtcblxuICAgICAgICBjb25zdCBjbGVhbnVwID0gKCkgPT4ge1xuICAgICAgICAgICAgQmxhY2tvdXQuZGlzYWJsZSgpO1xuICAgICAgICAgICAgaW5qZWN0ZWQhLmRlc3Ryb3koKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBvbkNvbmZpcm0gPSAoKSA9PiB7XG4gICAgICAgICAgICBjbGVhbnVwKCk7XG4gICAgICAgICAgICBvcHRzLm9uQ29uZmlybSgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGluamVjdGVkID0gUmVhY3RJbmplY3Rvci5pbmplY3QoPEFsZXJ0IHsuLi5vcHRzfSBvbkNvbmZpcm09e29uQ29uZmlybX0vPik7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHByb21wdChvcHRzOiBQcm9tcHRQcm9wcykge1xuXG4gICAgICAgIGxldCBpbmplY3RlZDogSW5qZWN0ZWRDb21wb25lbnQgfCB1bmRlZmluZWQ7XG5cbiAgICAgICAgQmxhY2tvdXQuZW5hYmxlKCk7XG5cbiAgICAgICAgY29uc3QgY2xlYW51cCA9ICgpID0+IHtcbiAgICAgICAgICAgIEJsYWNrb3V0LmRpc2FibGUoKTtcbiAgICAgICAgICAgIGluamVjdGVkIS5kZXN0cm95KCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3Qgb25DYW5jZWwgPSAoKSA9PiB7XG4gICAgICAgICAgICBjbGVhbnVwKCk7XG4gICAgICAgICAgICBvcHRzLm9uQ2FuY2VsKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3Qgb25Eb25lID0gKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIGNsZWFudXAoKTtcbiAgICAgICAgICAgIG9wdHMub25Eb25lKHZhbHVlKTtcbiAgICAgICAgfTtcblxuICAgICAgICBpbmplY3RlZCA9IFJlYWN0SW5qZWN0b3IuaW5qZWN0KDxQcm9tcHQgey4uLm9wdHN9IG9uQ2FuY2VsPXtvbkNhbmNlbH0gb25Eb25lPXtvbkRvbmV9Lz4pO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWxlcnRQcm9wcyB7XG5cbiAgICByZWFkb25seSB0aXRsZTogc3RyaW5nO1xuICAgIHJlYWRvbmx5IGJvZHk6IHN0cmluZyB8IFJlYWN0LlJlYWN0RWxlbWVudDtcbiAgICByZWFkb25seSBvbkNvbmZpcm06ICgpID0+IHZvaWQ7XG4gICAgcmVhZG9ubHkgdHlwZT86ICdkYW5nZXInIHwgJ3dhcm5pbmcnIHwgJ3N1Y2Nlc3MnO1xuXG59XG5cblxuZXhwb3J0IGludGVyZmFjZSBDb25maXJtUHJvcHMge1xuXG4gICAgcmVhZG9ubHkgdGl0bGU6IHN0cmluZztcbiAgICByZWFkb25seSBzdWJ0aXRsZTogc3RyaW5nO1xuICAgIHJlYWRvbmx5IG9uQ2FuY2VsPzogKCkgPT4gdm9pZDtcbiAgICByZWFkb25seSBvbkNvbmZpcm06ICgpID0+IHZvaWQ7XG4gICAgcmVhZG9ubHkgdHlwZT86ICdkYW5nZXInIHwgJ3dhcm5pbmcnIHwgJ3N1Y2Nlc3MnO1xuICAgIHJlYWRvbmx5IG5vQ2FuY2VsPzogYm9vbGVhbjtcblxufVxuIl19