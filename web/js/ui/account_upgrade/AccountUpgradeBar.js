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
const MachineDatastores_1 = require("../../telemetry/MachineDatastores");
const Accounts_1 = require("../../accounts/Accounts");
const Logger_1 = require("polar-shared/src/logger/Logger");
const Firebase_1 = require("../../firebase/Firebase");
const AccountUpgradeBarView_1 = require("./AccountUpgradeBarView");
const log = Logger_1.Logger.create();
class AccountUpgradeBar extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
        const handler = () => __awaiter(this, void 0, void 0, function* () {
            const user = yield Firebase_1.Firebase.currentUser();
            if (!user) {
                return;
            }
            const account = yield Accounts_1.Accounts.get();
            const machineDatastore = yield MachineDatastores_1.MachineDatastores.get();
            this.setState(Object.assign(Object.assign({}, this.state), { accountData: { account, machineDatastore } }));
        });
        handler().catch(err => log.error("Failed to handle upgrades: ", err));
    }
    render() {
        if (!this.state.accountData) {
            return React.createElement("div", null);
        }
        const { account, machineDatastore } = this.state.accountData;
        const plan = account ? account.plan : undefined;
        return (React.createElement(AccountUpgradeBarView_1.AccountUpgradeBarView, { plan: plan, accountUsage: machineDatastore }));
    }
}
exports.AccountUpgradeBar = AccountUpgradeBar;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNjb3VudFVwZ3JhZGVCYXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJBY2NvdW50VXBncmFkZUJhci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQStCO0FBQy9CLHlFQUFzRjtBQUN0RixzREFBaUQ7QUFFakQsMkRBQXNEO0FBQ3RELHNEQUFpRDtBQUNqRCxtRUFBOEQ7QUFFOUQsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBTTVCLE1BQWEsaUJBQWtCLFNBQVEsS0FBSyxDQUFDLFNBQXlCO0lBRWxFLFlBQVksS0FBYSxFQUFFLE9BQVk7UUFDbkMsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztRQUV0QixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQ1osQ0FBQztRQUVGLE1BQU0sT0FBTyxHQUFHLEdBQVMsRUFBRTtZQUV2QixNQUFNLElBQUksR0FBRyxNQUFNLG1CQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7WUFFMUMsSUFBSSxDQUFFLElBQUksRUFBRTtnQkFFUixPQUFPO2FBQ1Y7WUFFRCxNQUFNLE9BQU8sR0FBRyxNQUFNLG1CQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDckMsTUFBTSxnQkFBZ0IsR0FBRyxNQUFNLHFDQUFpQixDQUFDLEdBQUcsRUFBRSxDQUFDO1lBRXZELElBQUksQ0FBQyxRQUFRLGlDQUFLLElBQUksQ0FBQyxLQUFLLEtBQUUsV0FBVyxFQUFFLEVBQUMsT0FBTyxFQUFFLGdCQUFnQixFQUFDLElBQUUsQ0FBQztRQUU3RSxDQUFDLENBQUEsQ0FBQztRQUVGLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsNkJBQTZCLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUcxRSxDQUFDO0lBRU0sTUFBTTtRQUVULElBQUssQ0FBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRTtZQUMzQixPQUFPLGdDQUFNLENBQUM7U0FDakI7UUFFRCxNQUFNLEVBQUMsT0FBTyxFQUFFLGdCQUFnQixFQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUM7UUFFM0QsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFFaEQsT0FBTyxDQUNILG9CQUFDLDZDQUFxQixJQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLGdCQUFnQixHQUFHLENBQ3ZFLENBQUM7SUFFTixDQUFDO0NBRUo7QUE3Q0QsOENBNkNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtNYWNoaW5lRGF0YXN0b3JlLCBNYWNoaW5lRGF0YXN0b3Jlc30gZnJvbSBcIi4uLy4uL3RlbGVtZXRyeS9NYWNoaW5lRGF0YXN0b3Jlc1wiO1xuaW1wb3J0IHtBY2NvdW50c30gZnJvbSBcIi4uLy4uL2FjY291bnRzL0FjY291bnRzXCI7XG5pbXBvcnQge0FjY291bnR9IGZyb20gXCIuLi8uLi9hY2NvdW50cy9BY2NvdW50XCI7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvbG9nZ2VyL0xvZ2dlclwiO1xuaW1wb3J0IHtGaXJlYmFzZX0gZnJvbSBcIi4uLy4uL2ZpcmViYXNlL0ZpcmViYXNlXCI7XG5pbXBvcnQge0FjY291bnRVcGdyYWRlQmFyVmlld30gZnJvbSBcIi4vQWNjb3VudFVwZ3JhZGVCYXJWaWV3XCI7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuLyoqXG4gKiBMaXN0ZW4gdG8gdGhlIG1hY2hpbmUgZGF0YXN0b3JlIGZvciB0aGlzIHVzZXIgYW5kIGlmIHRoZWlyIGFjY291bnQgaXNuJ3QgaW5cbiAqIGxpbmUgd2l0aCB0aGUgbWFjaGluZSBkYXRhIHN0b3JlIHRoZW4gd2UgaGF2ZSB0byBmb3JjZSB0aGVtIHRvIHVwZ3JhZGUuXG4gKi9cbmV4cG9ydCBjbGFzcyBBY2NvdW50VXBncmFkZUJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcywgY29udGV4dDogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSBhc3luYyAoKSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBGaXJlYmFzZS5jdXJyZW50VXNlcigpO1xuXG4gICAgICAgICAgICBpZiAoISB1c2VyKSB7XG4gICAgICAgICAgICAgICAgLy8gdGhlIHVzZXIgaXMgbm90IHVzaW5nIEZpcmViYXNlLlxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgYWNjb3VudCA9IGF3YWl0IEFjY291bnRzLmdldCgpO1xuICAgICAgICAgICAgY29uc3QgbWFjaGluZURhdGFzdG9yZSA9IGF3YWl0IE1hY2hpbmVEYXRhc3RvcmVzLmdldCgpO1xuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsuLi50aGlzLnN0YXRlLCBhY2NvdW50RGF0YToge2FjY291bnQsIG1hY2hpbmVEYXRhc3RvcmV9fSk7XG5cbiAgICAgICAgfTtcblxuICAgICAgICBoYW5kbGVyKCkuY2F0Y2goZXJyID0+IGxvZy5lcnJvcihcIkZhaWxlZCB0byBoYW5kbGUgdXBncmFkZXM6IFwiLCBlcnIpKTtcblxuXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICBpZiAoICEgdGhpcy5zdGF0ZS5hY2NvdW50RGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuIDxkaXYvPjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHthY2NvdW50LCBtYWNoaW5lRGF0YXN0b3JlfSA9IHRoaXMuc3RhdGUuYWNjb3VudERhdGE7XG5cbiAgICAgICAgY29uc3QgcGxhbiA9IGFjY291bnQgPyBhY2NvdW50LnBsYW4gOiB1bmRlZmluZWQ7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxBY2NvdW50VXBncmFkZUJhclZpZXcgcGxhbj17cGxhbn0gYWNjb3VudFVzYWdlPXttYWNoaW5lRGF0YXN0b3JlfS8+XG4gICAgICAgICk7XG5cbiAgICB9XG5cbn1cblxuaW50ZXJmYWNlIElQcm9wcyB7XG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xuICAgIHJlYWRvbmx5IGFjY291bnREYXRhPzogQWNjb3VudERhdGE7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWNjb3VudERhdGEge1xuICAgIHJlYWRvbmx5IGFjY291bnQ/OiBBY2NvdW50O1xuICAgIHJlYWRvbmx5IG1hY2hpbmVEYXRhc3RvcmU/OiBNYWNoaW5lRGF0YXN0b3JlO1xufVxuIl19