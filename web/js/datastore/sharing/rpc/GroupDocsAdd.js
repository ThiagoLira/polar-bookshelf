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
class GroupDocsAdd {
    static exec(request) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield JSONRPC_1.JSONRPC.exec('groupDocsAdd', request);
        });
    }
}
exports.GroupDocsAdd = GroupDocsAdd;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JvdXBEb2NzQWRkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiR3JvdXBEb2NzQWRkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsdUNBQWtDO0FBSWxDLE1BQWEsWUFBWTtJQUVkLE1BQU0sQ0FBTyxJQUFJLENBQUMsT0FBMkI7O1lBQ2hELE9BQU8sTUFBTSxpQkFBTyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdkQsQ0FBQztLQUFBO0NBRUo7QUFORCxvQ0FNQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SlNPTlJQQ30gZnJvbSAnLi9KU09OUlBDJztcbmltcG9ydCB7RG9jUmVmfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL2dyb3Vwcy9Eb2NSZWYnO1xuaW1wb3J0IHtHcm91cElEU3RyfSBmcm9tICcuLi8uLi9EYXRhc3RvcmUnO1xuXG5leHBvcnQgY2xhc3MgR3JvdXBEb2NzQWRkIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgZXhlYyhyZXF1ZXN0OiBHcm91cERvY0FkZFJlcXVlc3QpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IEpTT05SUEMuZXhlYygnZ3JvdXBEb2NzQWRkJywgcmVxdWVzdCk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3JvdXBEb2NBZGRSZXF1ZXN0IHtcbiAgICByZWFkb25seSBncm91cElEOiBHcm91cElEU3RyO1xuICAgIHJlYWRvbmx5IGRvY3M6IFJlYWRvbmx5QXJyYXk8RG9jUmVmPjtcbn1cbiJdfQ==