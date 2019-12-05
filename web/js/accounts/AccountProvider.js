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
const Accounts_1 = require("./Accounts");
class AccountProvider {
    static init() {
        return __awaiter(this, void 0, void 0, function* () {
            yield Accounts_1.Accounts.onSnapshot(account => this.account = account);
        });
    }
    static get() {
        return this.account;
    }
}
exports.AccountProvider = AccountProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNjb3VudFByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQWNjb3VudFByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEseUNBQW9DO0FBTXBDLE1BQWEsZUFBZTtJQUlqQixNQUFNLENBQU8sSUFBSTs7WUFDcEIsTUFBTSxtQkFBUSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLENBQUM7UUFDakUsQ0FBQztLQUFBO0lBRU0sTUFBTSxDQUFDLEdBQUc7UUFDYixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQztDQUVKO0FBWkQsMENBWUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FjY291bnRzfSBmcm9tIFwiLi9BY2NvdW50c1wiO1xuaW1wb3J0IHtBY2NvdW50fSBmcm9tIFwiLi9BY2NvdW50XCI7XG5cbi8qKlxuICogUHJvdmlkZXMgdGhlIHVzZXIgYWNjb3VudCBvbmNlIGxvZ2dlZCBpbiwgYW5kIGxpc3RlbnMgZm9yIHRoZSBtb3N0IHJlY2VudCBjb3B5IG9mIHRoZSBhY2NvdW50LFxuICovXG5leHBvcnQgY2xhc3MgQWNjb3VudFByb3ZpZGVyIHtcblxuICAgIHByaXZhdGUgc3RhdGljIGFjY291bnQ6IEFjY291bnQgfCB1bmRlZmluZWQ7XG5cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGluaXQoKSB7XG4gICAgICAgIGF3YWl0IEFjY291bnRzLm9uU25hcHNob3QoYWNjb3VudCA9PiB0aGlzLmFjY291bnQgPSBhY2NvdW50KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWNjb3VudDtcbiAgICB9XG5cbn1cbiJdfQ==