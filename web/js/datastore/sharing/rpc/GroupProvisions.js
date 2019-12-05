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
class GroupProvisions {
    static exec(request) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield JSONRPC_1.JSONRPC.exec('groupProvision', request);
        });
    }
}
exports.GroupProvisions = GroupProvisions;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JvdXBQcm92aXNpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiR3JvdXBQcm92aXNpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0EsdUNBQWtDO0FBS2xDLE1BQWEsZUFBZTtJQUVqQixNQUFNLENBQU8sSUFBSSxDQUFDLE9BQThCOztZQUNuRCxPQUFPLE1BQU0saUJBQU8sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDekQsQ0FBQztLQUFBO0NBRUo7QUFORCwwQ0FNQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7R3JvdXBJbml0fSBmcm9tICcuLi9kYi9Hcm91cHMnO1xuaW1wb3J0IHtKU09OUlBDfSBmcm9tICcuL0pTT05SUEMnO1xuaW1wb3J0IHtEb2NSZWZ9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvZ3JvdXBzL0RvY1JlZic7XG5pbXBvcnQge1VzZXJSZWZ9IGZyb20gJy4vVXNlclJlZnMnO1xuaW1wb3J0IHtQbGFpblRleHRTdHIsIFVSTFN0cn0gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvdXRpbC9TdHJpbmdzXCI7XG5cbmV4cG9ydCBjbGFzcyBHcm91cFByb3Zpc2lvbnMge1xuXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBleGVjKHJlcXVlc3Q6IEdyb3VwUHJvdmlzaW9uUmVxdWVzdCk6IFByb21pc2U8R3JvdXBQcm92aXNpb25SZXNwb25zZT4ge1xuICAgICAgICByZXR1cm4gYXdhaXQgSlNPTlJQQy5leGVjKCdncm91cFByb3Zpc2lvbicsIHJlcXVlc3QpO1xuICAgIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdyb3VwUHJvdmlzaW9uUmVxdWVzdCBleHRlbmRzIEdyb3VwSW5pdCB7XG5cbiAgICAvKipcbiAgICAgKiBVc2UgYSB1c2VyIHNwZWNpZmljICdrZXknIHRvIGNvbXB1dGUgYSBncm91cElEIHJhdGhlciB0aGFuIHVzaW5nIGEgZ2xvYmFsXG4gICAgICogbmFtZS4gIFRoZXkga2V5IGNvdWxkIGJlIGFueXRoaW5nIGFzIGxvbmcgYXMgaXQncyB1bmlxdWUgd2l0aGluIHRoZSB1c2Vyc1xuICAgICAqICduYW1lc3BhY2UnLiAgVGhpcyBjYW4gYmUgdXNlZCBmb3IgY29tcHV0aW5nIGEgdW5pcXVlIGdyb3VwIGZvciBhIHVzZXJzXG4gICAgICogZG9jdW1lbnQgdGhhdCB0aGV5IGFyZSBzaGFyaW5nLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGtleT86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIFVzZWQgd2hlbiB3ZSdyZSBwcm92aXNpb25pbmcgYSBncm91cCB3aXRoIGFuIGluaXRpYWwgc2V0IG9mIGRvY3VtZW50cy5cbiAgICAgKi9cbiAgICByZWFkb25seSBkb2NzOiBSZWFkb25seUFycmF5PERvY1JlZj47XG5cbiAgICAvKipcbiAgICAgKiBJbnZpdGUgdGhlIHVzZXJzIGluIHRoaXMgc2V0IG9mIGludml0YXRpb25zIHRvIGEgZ3JvdXAgb2YgdXNlcnMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW52aXRhdGlvbnM6IFVzZXJSZWZJbnZpdGF0aW9ucztcblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdyb3VwUHJvdmlzaW9uUmVzcG9uc2Uge1xuXG4gICAgLyoqXG4gICAgICogVGhlIElEIG9mIHRoZSBncm91cCB0aGF0IHdhcyBwcm92aXNpb25lZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBpZDogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogV2hlbiB1c2luZyBhIGN1c3RvbSBncm91cCB3aXRoIGEgY3VzdG9tIG5hbWUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbmFtZT86IHN0cmluZztcblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEV4dGVybmFsTGluayB7XG4gICAgcmVhZG9ubHkgbmFtZTogUGxhaW5UZXh0U3RyO1xuICAgIHJlYWRvbmx5IHVybDogVVJMU3RyO1xufVxuXG5pbnRlcmZhY2UgVXNlclJlZkludml0YXRpb25zIHtcblxuICAgIHJlYWRvbmx5IG1lc3NhZ2U6IHN0cmluZztcblxuICAgIHJlYWRvbmx5IHRvOiBSZWFkb25seUFycmF5PFVzZXJSZWY+O1xuXG59XG5cbmV4cG9ydCB0eXBlIERvY0lEU3RyID0gc3RyaW5nO1xuIl19