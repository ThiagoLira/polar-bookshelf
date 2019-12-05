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
const JSONRPC_1 = require("../rpc/JSONRPC");
class ProfileUpdates {
    static exec(request) {
        return __awaiter(this, void 0, void 0, function* () {
            yield JSONRPC_1.JSONRPC.exec('profileUpdate', request);
        });
    }
}
exports.ProfileUpdates = ProfileUpdates;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZmlsZVVwZGF0ZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJQcm9maWxlVXBkYXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBLDRDQUF1QztBQUV2QyxNQUFhLGNBQWM7SUFFaEIsTUFBTSxDQUFPLElBQUksQ0FBQyxPQUE2Qjs7WUFDbEQsTUFBTSxpQkFBTyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDakQsQ0FBQztLQUFBO0NBRUo7QUFORCx3Q0FNQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UHJvZmlsZUluaXR9IGZyb20gJy4vUHJvZmlsZXMnO1xuaW1wb3J0IHtKU09OUlBDfSBmcm9tICcuLi9ycGMvSlNPTlJQQyc7XG5cbmV4cG9ydCBjbGFzcyBQcm9maWxlVXBkYXRlcyB7XG5cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGV4ZWMocmVxdWVzdDogUHJvZmlsZVVwZGF0ZVJlcXVlc3QpIHtcbiAgICAgICAgYXdhaXQgSlNPTlJQQy5leGVjKCdwcm9maWxlVXBkYXRlJywgcmVxdWVzdCk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvZmlsZVVwZGF0ZVJlcXVlc3QgZXh0ZW5kcyBQcm9maWxlSW5pdCB7XG5cbn1cbiJdfQ==