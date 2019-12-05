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
const JSONRPC_1 = require("./JSONRPC");
class GroupMemberDeletes {
    static exec(request) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield JSONRPC_1.JSONRPC.exec('groupMemberDelete', request);
        });
    }
}
exports.GroupMemberDeletes = GroupMemberDeletes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JvdXBNZW1iZXJEZWxldGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiR3JvdXBNZW1iZXJEZWxldGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsdUNBQWtDO0FBSWxDLE1BQWEsa0JBQWtCO0lBRXBCLE1BQU0sQ0FBTyxJQUFJLENBQUMsT0FBaUM7O1lBQ3RELE9BQU8sTUFBTSxpQkFBTyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUM1RCxDQUFDO0tBQUE7Q0FFSjtBQU5ELGdEQU1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtKU09OUlBDfSBmcm9tICcuL0pTT05SUEMnO1xuaW1wb3J0IHtHcm91cElEU3RyfSBmcm9tICcuLi8uLi9EYXRhc3RvcmUnO1xuaW1wb3J0IHtVc2VyUmVmfSBmcm9tICcuL1VzZXJSZWZzJztcblxuZXhwb3J0IGNsYXNzIEdyb3VwTWVtYmVyRGVsZXRlcyB7XG5cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGV4ZWMocmVxdWVzdDogR3JvdXBNZW1iZXJEZWxldGVSZXF1ZXN0KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybiBhd2FpdCBKU09OUlBDLmV4ZWMoJ2dyb3VwTWVtYmVyRGVsZXRlJywgcmVxdWVzdCk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3JvdXBNZW1iZXJEZWxldGVSZXF1ZXN0IHtcblxuICAgIHJlYWRvbmx5IGdyb3VwSUQ6IEdyb3VwSURTdHI7XG4gICAgcmVhZG9ubHkgdXNlclJlZnM6IFJlYWRvbmx5QXJyYXk8VXNlclJlZj47XG5cbn1cbiJdfQ==