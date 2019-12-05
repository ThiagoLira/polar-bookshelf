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
const Collections_1 = require("./db/Collections");
class GroupDocInfos {
    static list(groupID) {
        return __awaiter(this, void 0, void 0, function* () {
            const orderBy = [
                ['added', 'desc']
            ];
            const limit = 50;
            return yield Collections_1.Collections.list(this.COLLECTION, [['groupID', '==', groupID]], { limit, orderBy });
        });
    }
}
exports.GroupDocInfos = GroupDocInfos;
GroupDocInfos.COLLECTION = 'group_doc_info';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JvdXBEb2NJbmZvcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkdyb3VwRG9jSW5mb3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQSxrREFBNEQ7QUFTNUQsTUFBYSxhQUFhO0lBSWYsTUFBTSxDQUFPLElBQUksQ0FBQyxPQUFtQjs7WUFJeEMsTUFBTSxPQUFPLEdBQWlDO2dCQUMxQyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUM7YUFDcEIsQ0FBQztZQUVGLE1BQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUVqQixPQUFPLE1BQU0seUJBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQyxFQUFFLEVBQUMsS0FBSyxFQUFFLE9BQU8sRUFBQyxDQUFDLENBQUM7UUFFbkcsQ0FBQztLQUFBOztBQWhCTCxzQ0FrQkM7QUFoQjBCLHdCQUFVLEdBQUcsZ0JBQWdCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0dyb3VwSURTdHJ9IGZyb20gXCIuLi9EYXRhc3RvcmVcIjtcbmltcG9ydCB7Q29sbGVjdGlvbnMsIE9yZGVyQnlDbGF1c2V9IGZyb20gXCIuL2RiL0NvbGxlY3Rpb25zXCI7XG5pbXBvcnQge0dyb3VwRG9jfSBmcm9tIFwiLi9kYi9Hcm91cERvY3NcIjtcbmltcG9ydCB7VGFnfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy90YWdzL1RhZ3NcIjtcbmltcG9ydCB7XG4gICAgSVNPRGF0ZVN0cmluZyxcbiAgICBJU09EYXRlVGltZVN0cmluZ1xufSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy9tZXRhZGF0YS9JU09EYXRlVGltZVN0cmluZ3NcIjtcbmltcG9ydCB7IERvY1JlZiB9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL2dyb3Vwcy9Eb2NSZWZcIjtcblxuZXhwb3J0IGNsYXNzIEdyb3VwRG9jSW5mb3Mge1xuXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBDT0xMRUNUSU9OID0gJ2dyb3VwX2RvY19pbmZvJztcblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgbGlzdChncm91cElEOiBHcm91cElEU3RyKTogUHJvbWlzZTxSZWFkb25seUFycmF5PEdyb3VwRG9jSW5mbz4+IHtcblxuICAgICAgICAvLyBUT0RPIHdlIHNob3VsZCByZWFsbHkgbWlncmF0ZSB0aGlzIHRvIHVzZSBhIGEgc25hcHNob3QgbGlzdGVuZXIuLi5cblxuICAgICAgICBjb25zdCBvcmRlckJ5OiBSZWFkb25seUFycmF5PE9yZGVyQnlDbGF1c2U+ID0gW1xuICAgICAgICAgICAgWydhZGRlZCcsICdkZXNjJ11cbiAgICAgICAgXTtcblxuICAgICAgICBjb25zdCBsaW1pdCA9IDUwO1xuXG4gICAgICAgIHJldHVybiBhd2FpdCBDb2xsZWN0aW9ucy5saXN0KHRoaXMuQ09MTEVDVElPTiwgW1snZ3JvdXBJRCcsICc9PScsIGdyb3VwSURdXSwge2xpbWl0LCBvcmRlckJ5fSk7XG5cbiAgICB9XG5cbn1cbi8vIFRPRE86IG1vdmUgdG8gcG9sYXItc2hhcmVkXG5leHBvcnQgaW50ZXJmYWNlIEdyb3VwRG9jSW5mb0luaXQge1xuXG4gICAgLyoqXG4gICAgICogVGhlIGdyb3VwIHRoYXQgdGhpcyBkb2MgaXMgYXNzb2NpYXRlZCB3aXRoLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGdyb3VwSUQ6IEdyb3VwSURTdHI7XG5cbiAgICByZWFkb25seSBmaW5nZXJwcmludDogc3RyaW5nO1xuXG4gICAgcmVhZG9ubHkgdGl0bGU6IHN0cmluZztcblxuICAgIHJlYWRvbmx5IHN1YnRpdGxlPzogc3RyaW5nO1xuXG4gICAgcmVhZG9ubHkgbnJQYWdlczogbnVtYmVyO1xuXG4gICAgcmVhZG9ubHkgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG5cbiAgICByZWFkb25seSB1cmw/OiBzdHJpbmc7XG5cbiAgICAvLyBUaGUgdXNlciB0YWdzIGZyb20gdGhpcyB1c2VyIGZvciB0aGVpciB2ZXJzaW9uIG9mIHRoaXMgZG9jLiAgVGhpc1xuICAgIC8vIGV4Y2x1ZGVzIHNwZWNpYWwgdHlwZWQgdGFncyBhbmQgZm9sZGVyIHRhZ3NcbiAgICByZWFkb25seSB0YWdzPzoge1tpZDogc3RyaW5nXTogVGFnfTtcblxuICAgIHJlYWRvbmx5IHB1Ymxpc2hlZD86IElTT0RhdGVUaW1lU3RyaW5nO1xuXG4gICAgcmVhZG9ubHkgZG9pPzogc3RyaW5nO1xuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR3JvdXBEb2NJbmZvIGV4dGVuZHMgR3JvdXBEb2NJbmZvSW5pdCB7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGltZSB0aGlzIGRvYyB3YXMgZmlyc3QgYWRkZWQgaW4gdGhlIGdyb3VwLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGFkZGVkOiBJU09EYXRlU3RyaW5nO1xuXG59XG4iXX0=