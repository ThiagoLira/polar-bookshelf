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
const Prefs_1 = require("../../util/prefs/Prefs");
const UserPrefs_1 = require("./UserPrefs");
class FirestorePrefs extends Prefs_1.DictionaryPrefs {
    constructor(delegate = {}) {
        super(delegate);
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            const prefs = yield UserPrefs_1.UserPrefs.get();
            this.delegate = prefs.toDict();
        });
    }
    commit() {
        return __awaiter(this, void 0, void 0, function* () {
            yield UserPrefs_1.UserPrefs.set(this);
        });
    }
}
exports.FirestorePrefs = FirestorePrefs;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlyZXN0b3JlUHJlZnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJGaXJlc3RvcmVQcmVmcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLGtEQUE0RjtBQUM1RiwyQ0FBd0M7QUFFeEMsTUFBYSxjQUFlLFNBQVEsdUJBQWU7SUFFL0MsWUFBWSxXQUErQixFQUFFO1FBQ3pDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBRVksSUFBSTs7WUFDYixNQUFNLEtBQUssR0FBRyxNQUFNLHFCQUFTLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDcEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDbkMsQ0FBQztLQUFBO0lBRVksTUFBTTs7WUFDZixNQUFNLHFCQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQzdCLENBQUM7S0FBQTtDQUVKO0FBZkQsd0NBZUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpY3Rpb25hcnlQcmVmcywgUGVyc2lzdGVudFByZWZzLCBTdHJpbmdUb1N0cmluZ0RpY3R9IGZyb20gXCIuLi8uLi91dGlsL3ByZWZzL1ByZWZzXCI7XG5pbXBvcnQgeyBVc2VyUHJlZnMgfSBmcm9tIFwiLi9Vc2VyUHJlZnNcIjtcblxuZXhwb3J0IGNsYXNzIEZpcmVzdG9yZVByZWZzIGV4dGVuZHMgRGljdGlvbmFyeVByZWZzIGltcGxlbWVudHMgUGVyc2lzdGVudFByZWZzIHtcblxuICAgIGNvbnN0cnVjdG9yKGRlbGVnYXRlOiBTdHJpbmdUb1N0cmluZ0RpY3QgPSB7fSkge1xuICAgICAgICBzdXBlcihkZWxlZ2F0ZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGluaXQoKSB7XG4gICAgICAgIGNvbnN0IHByZWZzID0gYXdhaXQgVXNlclByZWZzLmdldCgpO1xuICAgICAgICB0aGlzLmRlbGVnYXRlID0gcHJlZnMudG9EaWN0KCk7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGNvbW1pdCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgYXdhaXQgVXNlclByZWZzLnNldCh0aGlzKVxuICAgIH1cblxufVxuIl19