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
const Platforms_1 = require("polar-shared/src/util/Platforms");
const Dialogs_1 = require("../../../../web/js/ui/dialogs/Dialogs");
const Logger_1 = require("polar-shared/src/logger/Logger");
const log = Logger_1.Logger.create();
class PreviewWarnings {
    static doWarning(prefs, onConfirm) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!Platforms_1.Platforms.isMobile()) {
                return onConfirm();
            }
            const prefKey = 'reviewer-mobile-preview-warning';
            const marked = prefs.isMarked(prefKey);
            if (marked) {
                return onConfirm();
            }
            const writePrefsAndConfirm = () => __awaiter(this, void 0, void 0, function* () {
                prefs.mark(prefKey);
                yield prefs.commit();
                onConfirm();
            });
            return this.createDialog(() => {
                writePrefsAndConfirm()
                    .catch(err => log.error(err));
            });
        });
    }
    static createDialog(onConfirm) {
        Dialogs_1.Dialogs.confirm({ title: 'Premium feature warning',
            subtitle: "Incremental reading and review on mobile will be come a premium feature and require a paid account and is available now as a preview release.",
            type: 'warning',
            onConfirm });
    }
}
exports.PreviewWarnings = PreviewWarnings;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJldmlld1dhcm5pbmdzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUHJldmlld1dhcm5pbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0EsK0RBQTBEO0FBQzFELG1FQUE4RDtBQUM5RCwyREFBc0Q7QUFFdEQsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLE1BQWEsZUFBZTtJQUVqQixNQUFNLENBQU8sU0FBUyxDQUFDLEtBQXNCLEVBQ3RCLFNBQXFCOztZQUUvQyxJQUFJLENBQUUscUJBQVMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtnQkFFeEIsT0FBTyxTQUFTLEVBQUUsQ0FBQzthQUN0QjtZQUVELE1BQU0sT0FBTyxHQUFHLGlDQUFpQyxDQUFDO1lBRWxELE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFdkMsSUFBSSxNQUFNLEVBQUU7Z0JBRVIsT0FBTyxTQUFTLEVBQUUsQ0FBQzthQUN0QjtZQU1ELE1BQU0sb0JBQW9CLEdBQUcsR0FBUyxFQUFFO2dCQUNwQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNwQixNQUFNLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDckIsU0FBUyxFQUFFLENBQUM7WUFDaEIsQ0FBQyxDQUFBLENBQUM7WUFFRixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFO2dCQUMxQixvQkFBb0IsRUFBRTtxQkFDakIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLENBQUMsQ0FBQyxDQUFDO1FBRVAsQ0FBQztLQUFBO0lBRU0sTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUFxQjtRQUM1QyxpQkFBTyxDQUFDLE9BQU8sQ0FBQyxFQUFDLEtBQUssRUFBRSx5QkFBeUI7WUFDaEMsUUFBUSxFQUFFLCtJQUErSTtZQUN6SixJQUFJLEVBQUUsU0FBUztZQUNmLFNBQVMsRUFBQyxDQUFDLENBQUM7SUFDakMsQ0FBQztDQUVKO0FBM0NELDBDQTJDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGVyc2lzdGVudFByZWZzfSBmcm9tIFwiLi4vLi4vLi4vLi4vd2ViL2pzL3V0aWwvcHJlZnMvUHJlZnNcIjtcbmltcG9ydCB7UGxhdGZvcm1zfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy91dGlsL1BsYXRmb3Jtc1wiO1xuaW1wb3J0IHtEaWFsb2dzfSBmcm9tIFwiLi4vLi4vLi4vLi4vd2ViL2pzL3VpL2RpYWxvZ3MvRGlhbG9nc1wiO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL2xvZ2dlci9Mb2dnZXJcIjtcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG5leHBvcnQgY2xhc3MgUHJldmlld1dhcm5pbmdzIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgZG9XYXJuaW5nKHByZWZzOiBQZXJzaXN0ZW50UHJlZnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Db25maXJtOiAoKSA9PiB2b2lkKSB7XG5cbiAgICAgICAgaWYgKCEgUGxhdGZvcm1zLmlzTW9iaWxlKCkpIHtcbiAgICAgICAgICAgIC8vIHdlIG9ubHkgbmVlZCB0aGlzIG9uIG1vYmlsZSBwbGF0Zm9ybXMuXG4gICAgICAgICAgICByZXR1cm4gb25Db25maXJtKCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcmVmS2V5ID0gJ3Jldmlld2VyLW1vYmlsZS1wcmV2aWV3LXdhcm5pbmcnO1xuXG4gICAgICAgIGNvbnN0IG1hcmtlZCA9IHByZWZzLmlzTWFya2VkKHByZWZLZXkpO1xuXG4gICAgICAgIGlmIChtYXJrZWQpIHtcbiAgICAgICAgICAgIC8vIHRoZSB1c2VyIGhhcyBhbHJlYWR5IGJlZW4gZ2l2ZW4gdGhpcyB3YXJuaW5nLlxuICAgICAgICAgICAgcmV0dXJuIG9uQ29uZmlybSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRklYTUU6IGJlZm9yZSB3ZSBhcmUgY29uZmlybWVkLCB3ZSBuZWVkIHRvIGZpcnN0XG4gICAgICAgIC8vICBhd2FpdCB0aGUgcGVyc2lzdGVudCBwcmVmcyBjb21taXQgYWZ0ZXIgc2V0dGluZyB0aGVcbiAgICAgICAgLy8gbWFya1xuXG4gICAgICAgIGNvbnN0IHdyaXRlUHJlZnNBbmRDb25maXJtID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgcHJlZnMubWFyayhwcmVmS2V5KTtcbiAgICAgICAgICAgIGF3YWl0IHByZWZzLmNvbW1pdCgpO1xuICAgICAgICAgICAgb25Db25maXJtKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlRGlhbG9nKCgpID0+IHtcbiAgICAgICAgICAgIHdyaXRlUHJlZnNBbmRDb25maXJtKClcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IGxvZy5lcnJvcihlcnIpKTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZURpYWxvZyhvbkNvbmZpcm06ICgpID0+IHZvaWQpIHtcbiAgICAgICAgRGlhbG9ncy5jb25maXJtKHt0aXRsZTogJ1ByZW1pdW0gZmVhdHVyZSB3YXJuaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICBzdWJ0aXRsZTogXCJJbmNyZW1lbnRhbCByZWFkaW5nIGFuZCByZXZpZXcgb24gbW9iaWxlIHdpbGwgYmUgY29tZSBhIHByZW1pdW0gZmVhdHVyZSBhbmQgcmVxdWlyZSBhIHBhaWQgYWNjb3VudCBhbmQgaXMgYXZhaWxhYmxlIG5vdyBhcyBhIHByZXZpZXcgcmVsZWFzZS5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnd2FybmluZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgb25Db25maXJtfSk7XG4gICAgfVxuXG59XG4iXX0=