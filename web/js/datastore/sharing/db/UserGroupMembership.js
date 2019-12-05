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
const Groups_1 = require("./Groups");
const UserGroups_1 = require("./UserGroups");
class UserGroupMembership {
    static get() {
        return __awaiter(this, void 0, void 0, function* () {
            const userGroup = yield UserGroups_1.UserGroups.get();
            if (!userGroup) {
                return [];
            }
            if (!userGroup.groups) {
                return [];
            }
            return yield Groups_1.Groups.getAll(userGroup.groups);
        });
    }
}
exports.UserGroupMembership = UserGroupMembership;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlckdyb3VwTWVtYmVyc2hpcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlVzZXJHcm91cE1lbWJlcnNoaXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFHQSxxQ0FBdUM7QUFDdkMsNkNBQXdDO0FBRXhDLE1BQWEsbUJBQW1CO0lBRXJCLE1BQU0sQ0FBTyxHQUFHOztZQUVuQixNQUFNLFNBQVMsR0FBRyxNQUFNLHVCQUFVLENBQUMsR0FBRyxFQUFFLENBQUM7WUFFekMsSUFBSSxDQUFFLFNBQVMsRUFBRTtnQkFDYixPQUFPLEVBQUUsQ0FBQzthQUNiO1lBRUQsSUFBSSxDQUFFLFNBQVMsQ0FBQyxNQUFNLEVBQUU7Z0JBQ3BCLE9BQU8sRUFBRSxDQUFDO2FBQ2I7WUFFRCxPQUFPLE1BQU0sZUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFakQsQ0FBQztLQUFBO0NBRUo7QUFsQkQsa0RBa0JDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBBbGxvd3MgdXMgdG8gcmV0dXJuIHRoZSBncm91cCBvYmplY3RzIHRoZSB1c2VyIGlzIGEgbWVtYmVyIG9mLlxuICovXG5pbXBvcnQge0dyb3VwLCBHcm91cHN9IGZyb20gXCIuL0dyb3Vwc1wiO1xuaW1wb3J0IHtVc2VyR3JvdXBzfSBmcm9tIFwiLi9Vc2VyR3JvdXBzXCI7XG5cbmV4cG9ydCBjbGFzcyBVc2VyR3JvdXBNZW1iZXJzaGlwIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgZ2V0KCk6IFByb21pc2U8UmVhZG9ubHlBcnJheTxHcm91cD4+IHtcblxuICAgICAgICBjb25zdCB1c2VyR3JvdXAgPSBhd2FpdCBVc2VyR3JvdXBzLmdldCgpO1xuXG4gICAgICAgIGlmICghIHVzZXJHcm91cCkge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCEgdXNlckdyb3VwLmdyb3Vwcykge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGF3YWl0IEdyb3Vwcy5nZXRBbGwodXNlckdyb3VwLmdyb3Vwcyk7XG5cbiAgICB9XG5cbn1cblxuIl19