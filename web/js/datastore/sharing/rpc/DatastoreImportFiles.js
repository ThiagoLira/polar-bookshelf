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
class DatastoreImportFiles {
    static exec(request) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield JSONRPC_1.JSONRPC.exec('datastoreImportFile', request);
        });
    }
}
exports.DatastoreImportFiles = DatastoreImportFiles;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0YXN0b3JlSW1wb3J0RmlsZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJEYXRhc3RvcmVJbXBvcnRGaWxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHVDQUFrQztBQUlsQyxNQUFhLG9CQUFvQjtJQUV0QixNQUFNLENBQU8sSUFBSSxDQUFDLE9BQW1DOztZQUN4RCxPQUFPLE1BQU0saUJBQU8sQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDOUQsQ0FBQztLQUFBO0NBRUo7QUFORCxvREFNQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SlNPTlJQQ30gZnJvbSAnLi9KU09OUlBDJztcbmltcG9ydCB7QmFja2VuZH0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9kYXRhc3RvcmUvQmFja2VuZCc7XG5pbXBvcnQge0ZpbGVSZWZ9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL2RhdGFzdG9yZS9GaWxlUmVmXCI7XG5cbmV4cG9ydCBjbGFzcyBEYXRhc3RvcmVJbXBvcnRGaWxlcyB7XG5cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGV4ZWMocmVxdWVzdDogRGF0YXN0b3JlSW1wb3J0RmlsZVJlcXVlc3QpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IEpTT05SUEMuZXhlYygnZGF0YXN0b3JlSW1wb3J0RmlsZScsIHJlcXVlc3QpO1xuICAgIH1cblxufVxuXG5pbnRlcmZhY2UgRGF0YXN0b3JlSW1wb3J0RmlsZVJlcXVlc3Qge1xuICAgIHJlYWRvbmx5IGRvY0lEOiBzdHJpbmc7XG4gICAgcmVhZG9ubHkgYmFja2VuZDogQmFja2VuZDtcbiAgICByZWFkb25seSBmaWxlUmVmOiBGaWxlUmVmO1xufVxuIl19