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
class GroupDeletes {
    static exec(request) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield JSONRPC_1.JSONRPC.exec('groupDelete', request);
        });
    }
}
exports.GroupDeletes = GroupDeletes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JvdXBEZWxldGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiR3JvdXBEZWxldGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsdUNBQWtDO0FBR2xDLE1BQWEsWUFBWTtJQUVkLE1BQU0sQ0FBTyxJQUFJLENBQUMsT0FBMkI7O1lBQ2hELE9BQU8sTUFBTSxpQkFBTyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdEQsQ0FBQztLQUFBO0NBRUo7QUFORCxvQ0FNQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SlNPTlJQQ30gZnJvbSAnLi9KU09OUlBDJztcbmltcG9ydCB7R3JvdXBJRFN0cn0gZnJvbSAnLi4vLi4vRGF0YXN0b3JlJztcblxuZXhwb3J0IGNsYXNzIEdyb3VwRGVsZXRlcyB7XG5cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGV4ZWMocmVxdWVzdDogR3JvdXBEZWxldGVSZXF1ZXN0KTogUHJvbWlzZTxHcm91cERlbGV0ZVJlc3BvbnNlPiB7XG4gICAgICAgIHJldHVybiBhd2FpdCBKU09OUlBDLmV4ZWMoJ2dyb3VwRGVsZXRlJywgcmVxdWVzdCk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3JvdXBEZWxldGVSZXF1ZXN0IHtcbiAgICByZWFkb25seSBncm91cElEOiBHcm91cElEU3RyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdyb3VwRGVsZXRlUmVzcG9uc2Uge1xuXG59XG5cbiJdfQ==