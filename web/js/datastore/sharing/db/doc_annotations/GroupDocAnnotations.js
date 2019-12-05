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
const Collections_1 = require("../Collections");
const Arrays_1 = require("polar-shared/src/util/Arrays");
class GroupDocAnnotations {
    static list(groupID) {
        return __awaiter(this, void 0, void 0, function* () {
            const orderBy = [
                ['lastUpdated', 'desc']
            ];
            const limit = 50;
            const clauses = [['groupID', '==', groupID]];
            return yield Collections_1.Collections.list(this.COLLECTION, clauses, { limit, orderBy });
        });
    }
    static get(groupID, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const limit = 1;
            const clauses = [
                ['groupID', '==', groupID],
                ['id', '==', id]
            ];
            const results = yield Collections_1.Collections.list(this.COLLECTION, clauses, { limit });
            return Arrays_1.Arrays.first(results);
        });
    }
}
exports.GroupDocAnnotations = GroupDocAnnotations;
GroupDocAnnotations.COLLECTION = 'group_doc_annotation';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JvdXBEb2NBbm5vdGF0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkdyb3VwRG9jQW5ub3RhdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFQSxnREFBa0U7QUFFbEUseURBQW9EO0FBRXBELE1BQWEsbUJBQW1CO0lBSXJCLE1BQU0sQ0FBTyxJQUFJLENBQUMsT0FBbUI7O1lBS3hDLE1BQU0sT0FBTyxHQUFpQztnQkFDMUMsQ0FBQyxhQUFhLEVBQUUsTUFBTSxDQUFDO2FBQzFCLENBQUM7WUFFRixNQUFNLEtBQUssR0FBRyxFQUFFLENBQUM7WUFFakIsTUFBTSxPQUFPLEdBQTBCLENBQUMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFFcEUsT0FBTyxNQUFNLHlCQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsT0FBTyxFQUFFLEVBQUMsS0FBSyxFQUFFLE9BQU8sRUFBQyxDQUFDLENBQUM7UUFFOUUsQ0FBQztLQUFBO0lBRU0sTUFBTSxDQUFPLEdBQUcsQ0FBQyxPQUFtQixFQUFFLEVBQVM7O1lBRWxELE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBQztZQUVoQixNQUFNLE9BQU8sR0FBMEI7Z0JBQ25DLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUM7Z0JBQzFCLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLENBQUM7YUFDbkIsQ0FBQztZQUVGLE1BQU0sT0FBTyxHQUNQLE1BQU0seUJBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxPQUFPLEVBQUUsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDO1lBRWhFLE9BQU8sZUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqQyxDQUFDO0tBQUE7O0FBbENMLGtEQW9DQztBQWxDMEIsOEJBQVUsR0FBRyxzQkFBc0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7R3JvdXBJRFN0cn0gZnJvbSBcIi4uLy4uLy4uL0RhdGFzdG9yZVwiO1xuaW1wb3J0IHtCYXNlRG9jQW5ub3RhdGlvbn0gZnJvbSBcIi4vQmFzZURvY0Fubm90YXRpb25cIjtcbmltcG9ydCB7Q2xhdXNlLCBDb2xsZWN0aW9ucywgT3JkZXJCeUNsYXVzZX0gZnJvbSBcIi4uL0NvbGxlY3Rpb25zXCI7XG5pbXBvcnQge0lEU3RyfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy91dGlsL1N0cmluZ3NcIjtcbmltcG9ydCB7QXJyYXlzfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy91dGlsL0FycmF5c1wiO1xuXG5leHBvcnQgY2xhc3MgR3JvdXBEb2NBbm5vdGF0aW9ucyB7XG5cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IENPTExFQ1RJT04gPSAnZ3JvdXBfZG9jX2Fubm90YXRpb24nO1xuXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBsaXN0KGdyb3VwSUQ6IEdyb3VwSURTdHIpOiBQcm9taXNlPFJlYWRvbmx5QXJyYXk8R3JvdXBEb2NBbm5vdGF0aW9uPj4ge1xuXG4gICAgICAgIC8vIFRPRE8gd2Ugc2hvdWxkIHJlYWxseSBtaWdyYXRlIHRoaXMgdG8gdXNlIGEgYSBzbmFwc2hvdCBsaXN0ZW5lclxuICAgICAgICAvLyBzbyB0d2UgY2FuIHdhdGNoIHdoZW4gdGhlIGRhdGEgY2hhbmdlc1xuXG4gICAgICAgIGNvbnN0IG9yZGVyQnk6IFJlYWRvbmx5QXJyYXk8T3JkZXJCeUNsYXVzZT4gPSBbXG4gICAgICAgICAgICBbJ2xhc3RVcGRhdGVkJywgJ2Rlc2MnXVxuICAgICAgICBdO1xuXG4gICAgICAgIGNvbnN0IGxpbWl0ID0gNTA7XG5cbiAgICAgICAgY29uc3QgY2xhdXNlczogUmVhZG9ubHlBcnJheTxDbGF1c2U+ID0gW1snZ3JvdXBJRCcsICc9PScsIGdyb3VwSURdXTtcblxuICAgICAgICByZXR1cm4gYXdhaXQgQ29sbGVjdGlvbnMubGlzdCh0aGlzLkNPTExFQ1RJT04sIGNsYXVzZXMsIHtsaW1pdCwgb3JkZXJCeX0pO1xuXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBnZXQoZ3JvdXBJRDogR3JvdXBJRFN0ciwgaWQ6IElEU3RyKTogUHJvbWlzZTxHcm91cERvY0Fubm90YXRpb24gfCB1bmRlZmluZWQ+IHtcblxuICAgICAgICBjb25zdCBsaW1pdCA9IDE7XG5cbiAgICAgICAgY29uc3QgY2xhdXNlczogUmVhZG9ubHlBcnJheTxDbGF1c2U+ID0gW1xuICAgICAgICAgICAgWydncm91cElEJywgJz09JywgZ3JvdXBJRF0sXG4gICAgICAgICAgICBbJ2lkJywgJz09JywgaWRdXG4gICAgICAgIF07XG5cbiAgICAgICAgY29uc3QgcmVzdWx0czogUmVhZG9ubHlBcnJheTxHcm91cERvY0Fubm90YXRpb24+XG4gICAgICAgICAgICA9IGF3YWl0IENvbGxlY3Rpb25zLmxpc3QodGhpcy5DT0xMRUNUSU9OLCBjbGF1c2VzLCB7bGltaXR9KTtcblxuICAgICAgICByZXR1cm4gQXJyYXlzLmZpcnN0KHJlc3VsdHMpO1xuICAgIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdyb3VwRG9jQW5ub3RhdGlvbiBleHRlbmRzIEJhc2VEb2NBbm5vdGF0aW9uIHtcbiAgICByZWFkb25seSBncm91cElEOiBHcm91cElEU3RyO1xufVxuIl19