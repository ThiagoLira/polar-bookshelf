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
class GroupLeaves {
    static exec(request) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield JSONRPC_1.JSONRPC.exec('groupLeave', request);
        });
    }
}
exports.GroupLeaves = GroupLeaves;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JvdXBMZWF2ZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJHcm91cExlYXZlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHVDQUFrQztBQUdsQyxNQUFhLFdBQVc7SUFFYixNQUFNLENBQU8sSUFBSSxDQUFDLE9BQTBCOztZQUMvQyxPQUFPLE1BQU0saUJBQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3JELENBQUM7S0FBQTtDQUVKO0FBTkQsa0NBTUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0pTT05SUEN9IGZyb20gJy4vSlNPTlJQQyc7XG5pbXBvcnQge0dyb3VwSURTdHJ9IGZyb20gJy4uLy4uL0RhdGFzdG9yZSc7XG5cbmV4cG9ydCBjbGFzcyBHcm91cExlYXZlcyB7XG5cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGV4ZWMocmVxdWVzdDogR3JvdXBMZWF2ZVJlcXVlc3QpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IEpTT05SUEMuZXhlYygnZ3JvdXBMZWF2ZScsIHJlcXVlc3QpO1xuICAgIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdyb3VwTGVhdmVSZXF1ZXN0IHtcblxuICAgIHJlYWRvbmx5IGdyb3VwSUQ6IEdyb3VwSURTdHI7XG5cbn1cbiJdfQ==