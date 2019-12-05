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
const Accounts_1 = require("../../accounts/Accounts");
const MachineDatastores_1 = require("../../telemetry/MachineDatastores");
const AccountUpgrades_1 = require("../../accounts/AccountUpgrades");
const UpgradeRequiredMessageBoxes_1 = require("./UpgradeRequiredMessageBoxes");
const RendererAnalytics_1 = require("../../ga/RendererAnalytics");
const Logger_1 = require("polar-shared/src/logger/Logger");
const log = Logger_1.Logger.create();
class AccountUpgrader {
    upgradeRequired() {
        return __awaiter(this, void 0, void 0, function* () {
            const account = yield Accounts_1.Accounts.get();
            const machineDatastore = yield MachineDatastores_1.MachineDatastores.get();
            if (!account) {
                return;
            }
            if (!machineDatastore) {
                return;
            }
            const planRequiredForUpgrade = AccountUpgrades_1.AccountUpgrades.upgradeRequired(account.plan, machineDatastore);
            const result = planRequiredForUpgrade && account.plan !== planRequiredForUpgrade;
            if (result) {
                log.warn(`Current account needs to be upgrade from ${account.plan} to ${planRequiredForUpgrade}`);
            }
            return result;
        });
    }
    startUpgrade() {
        RendererAnalytics_1.RendererAnalytics.event({ category: 'upgrades', action: 'required-upgrade-triggered' });
        UpgradeRequiredMessageBoxes_1.UpgradeRequiredMessageBoxes.create();
    }
}
exports.AccountUpgrader = AccountUpgrader;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNjb3VudFVwZ3JhZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQWNjb3VudFVwZ3JhZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0RBQWlEO0FBQ2pELHlFQUFvRTtBQUNwRSxvRUFBK0Q7QUFDL0QsK0VBQTBFO0FBQzFFLGtFQUE2RDtBQUM3RCwyREFBc0Q7QUFFdEQsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBSzVCLE1BQWEsZUFBZTtJQUVYLGVBQWU7O1lBRXhCLE1BQU0sT0FBTyxHQUFHLE1BQU0sbUJBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNyQyxNQUFNLGdCQUFnQixHQUFHLE1BQU0scUNBQWlCLENBQUMsR0FBRyxFQUFFLENBQUM7WUFFdkQsSUFBSSxDQUFFLE9BQU8sRUFBRTtnQkFDWCxPQUFPO2FBQ1Y7WUFFRCxJQUFJLENBQUUsZ0JBQWdCLEVBQUU7Z0JBQ3BCLE9BQU87YUFDVjtZQUVELE1BQU0sc0JBQXNCLEdBQUcsaUNBQWUsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1lBRS9GLE1BQU0sTUFBTSxHQUFHLHNCQUFzQixJQUFJLE9BQU8sQ0FBQyxJQUFJLEtBQUssc0JBQXNCLENBQUM7WUFFakYsSUFBSSxNQUFNLEVBQUU7Z0JBQ1IsR0FBRyxDQUFDLElBQUksQ0FBQyw0Q0FBNEMsT0FBTyxDQUFDLElBQUksT0FBTyxzQkFBc0IsRUFBRSxDQUFDLENBQUM7YUFDckc7WUFFRCxPQUFPLE1BQU0sQ0FBQztRQUVsQixDQUFDO0tBQUE7SUFFTSxZQUFZO1FBRWYscUNBQWlCLENBQUMsS0FBSyxDQUFDLEVBQUMsUUFBUSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsNEJBQTRCLEVBQUMsQ0FBQyxDQUFDO1FBRXRGLHlEQUEyQixDQUFDLE1BQU0sRUFBRSxDQUFDO0lBRXpDLENBQUM7Q0FFSjtBQW5DRCwwQ0FtQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FjY291bnRzfSBmcm9tIFwiLi4vLi4vYWNjb3VudHMvQWNjb3VudHNcIjtcbmltcG9ydCB7TWFjaGluZURhdGFzdG9yZXN9IGZyb20gXCIuLi8uLi90ZWxlbWV0cnkvTWFjaGluZURhdGFzdG9yZXNcIjtcbmltcG9ydCB7QWNjb3VudFVwZ3JhZGVzfSBmcm9tIFwiLi4vLi4vYWNjb3VudHMvQWNjb3VudFVwZ3JhZGVzXCI7XG5pbXBvcnQge1VwZ3JhZGVSZXF1aXJlZE1lc3NhZ2VCb3hlc30gZnJvbSBcIi4vVXBncmFkZVJlcXVpcmVkTWVzc2FnZUJveGVzXCI7XG5pbXBvcnQge1JlbmRlcmVyQW5hbHl0aWNzfSBmcm9tIFwiLi4vLi4vZ2EvUmVuZGVyZXJBbmFseXRpY3NcIjtcbmltcG9ydCB7TG9nZ2VyfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy9sb2dnZXIvTG9nZ2VyXCI7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuLyoqXG4gKiBMb29rcyBhdCB0aGUgYW1vdW50IG9mIHN0b3JhZ2UgdXNlZCwgZXRjIHRvIHZlcmlmeSB0aGF0IHRoZSB1c2VyIGRvZXNuJ3QgbmVlZCB0byB1cGdyYWRlLlxuICovXG5leHBvcnQgY2xhc3MgQWNjb3VudFVwZ3JhZGVyIHtcblxuICAgIHB1YmxpYyBhc3luYyB1cGdyYWRlUmVxdWlyZWQoKSB7XG5cbiAgICAgICAgY29uc3QgYWNjb3VudCA9IGF3YWl0IEFjY291bnRzLmdldCgpO1xuICAgICAgICBjb25zdCBtYWNoaW5lRGF0YXN0b3JlID0gYXdhaXQgTWFjaGluZURhdGFzdG9yZXMuZ2V0KCk7XG5cbiAgICAgICAgaWYgKCEgYWNjb3VudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCEgbWFjaGluZURhdGFzdG9yZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcGxhblJlcXVpcmVkRm9yVXBncmFkZSA9IEFjY291bnRVcGdyYWRlcy51cGdyYWRlUmVxdWlyZWQoYWNjb3VudC5wbGFuLCBtYWNoaW5lRGF0YXN0b3JlKTtcblxuICAgICAgICBjb25zdCByZXN1bHQgPSBwbGFuUmVxdWlyZWRGb3JVcGdyYWRlICYmIGFjY291bnQucGxhbiAhPT0gcGxhblJlcXVpcmVkRm9yVXBncmFkZTtcblxuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICBsb2cud2FybihgQ3VycmVudCBhY2NvdW50IG5lZWRzIHRvIGJlIHVwZ3JhZGUgZnJvbSAke2FjY291bnQucGxhbn0gdG8gJHtwbGFuUmVxdWlyZWRGb3JVcGdyYWRlfWApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcblxuICAgIH1cblxuICAgIHB1YmxpYyBzdGFydFVwZ3JhZGUoKSB7XG5cbiAgICAgICAgUmVuZGVyZXJBbmFseXRpY3MuZXZlbnQoe2NhdGVnb3J5OiAndXBncmFkZXMnLCBhY3Rpb246ICdyZXF1aXJlZC11cGdyYWRlLXRyaWdnZXJlZCd9KTtcblxuICAgICAgICBVcGdyYWRlUmVxdWlyZWRNZXNzYWdlQm94ZXMuY3JlYXRlKCk7XG5cbiAgICB9XG5cbn1cbiJdfQ==