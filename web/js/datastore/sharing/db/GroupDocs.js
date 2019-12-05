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
const Collections_1 = require("./Collections");
class GroupDocs {
    static list(groupID) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Collections_1.Collections.list(this.COLLECTION, [['groupID', '==', groupID]]);
        });
    }
    static getByFingerprint(groupID, fingerprint, limit = 1) {
        return __awaiter(this, void 0, void 0, function* () {
            const clauses = [
                ['groupID', '==', groupID],
                ['fingerprint', '==', fingerprint]
            ];
            const orderBy = [
                ['created', 'desc']
            ];
            return yield Collections_1.Collections.list(this.COLLECTION, clauses, { orderBy, limit });
        });
    }
    static onSnapshot(groupID, handler) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Collections_1.Collections.onQuerySnapshotChanges(this.COLLECTION, [['groupID', '==', groupID]], handler);
        });
    }
    static onSnapshotForByGroupIDAndFingerprint(groupID, fingerprint, handler) {
        return __awaiter(this, void 0, void 0, function* () {
            const clauses = [
                ['groupID', '==', groupID],
                ['fingerprint', '==', fingerprint],
            ];
            return yield Collections_1.Collections.onQuerySnapshotChanges(this.COLLECTION, clauses, handler);
        });
    }
}
exports.GroupDocs = GroupDocs;
GroupDocs.COLLECTION = 'group_doc';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JvdXBEb2NzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiR3JvdXBEb2NzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBSUEsK0NBQXlFO0FBSXpFLE1BQWEsU0FBUztJQUlYLE1BQU0sQ0FBTyxJQUFJLENBQUMsT0FBbUI7O1lBQ3hDLE9BQU8sTUFBTSx5QkFBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqRixDQUFDO0tBQUE7SUFFTSxNQUFNLENBQU8sZ0JBQWdCLENBQUMsT0FBbUIsRUFDbkIsV0FBbUIsRUFDbkIsUUFBZ0IsQ0FBQzs7WUFFbEQsTUFBTSxPQUFPLEdBQTBCO2dCQUNuQyxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDO2dCQUMxQixDQUFDLGFBQWEsRUFBRSxJQUFJLEVBQUUsV0FBVyxDQUFDO2FBQ3JDLENBQUM7WUFFRixNQUFNLE9BQU8sR0FBaUM7Z0JBQzFDLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQzthQUN0QixDQUFDO1lBRUYsT0FBTyxNQUFNLHlCQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsT0FBTyxFQUFFLEVBQUMsT0FBTyxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUM7UUFFOUUsQ0FBQztLQUFBO0lBRU0sTUFBTSxDQUFPLFVBQVUsQ0FBQyxPQUFtQixFQUFFLE9BQW1EOztZQUNuRyxPQUFPLE1BQU0seUJBQVcsQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDNUcsQ0FBQztLQUFBO0lBRU0sTUFBTSxDQUFPLG9DQUFvQyxDQUFDLE9BQW1CLEVBQ25CLFdBQW1CLEVBQ25CLE9BQW1EOztZQUV4RyxNQUFNLE9BQU8sR0FBYTtnQkFDdEIsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQztnQkFDMUIsQ0FBQyxhQUFhLEVBQUUsSUFBSSxFQUFFLFdBQVcsQ0FBQzthQUNyQyxDQUFDO1lBRUYsT0FBTyxNQUFNLHlCQUFXLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFdkYsQ0FBQztLQUFBOztBQXhDTCw4QkEwQ0M7QUF4QzBCLG9CQUFVLEdBQUcsV0FBVyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQcm9maWxlSURTdHJ9IGZyb20gJy4vUHJvZmlsZXMnO1xuaW1wb3J0IHtEb2NSZWZ9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvZ3JvdXBzL0RvY1JlZic7XG5pbXBvcnQge0lTT0RhdGVUaW1lU3RyaW5nfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL21ldGFkYXRhL0lTT0RhdGVUaW1lU3RyaW5ncyc7XG5pbXBvcnQge0dyb3VwSURTdHJ9IGZyb20gJy4uLy4uL0RhdGFzdG9yZSc7XG5pbXBvcnQge0NvbGxlY3Rpb25zLCBEb2N1bWVudENoYW5nZSwgT3JkZXJCeUNsYXVzZX0gZnJvbSAnLi9Db2xsZWN0aW9ucyc7XG5pbXBvcnQge0NsYXVzZX0gZnJvbSAnLi9Db2xsZWN0aW9ucyc7XG5pbXBvcnQge1NuYXBzaG90TGlzdGVuZXJ9IGZyb20gJy4vQ29sbGVjdGlvbnMnO1xuXG5leHBvcnQgY2xhc3MgR3JvdXBEb2NzIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQ09MTEVDVElPTiA9ICdncm91cF9kb2MnO1xuXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBsaXN0KGdyb3VwSUQ6IEdyb3VwSURTdHIpOiBQcm9taXNlPFJlYWRvbmx5QXJyYXk8R3JvdXBEb2M+PiB7XG4gICAgICAgIHJldHVybiBhd2FpdCBDb2xsZWN0aW9ucy5saXN0KHRoaXMuQ09MTEVDVElPTiwgW1snZ3JvdXBJRCcsICc9PScsIGdyb3VwSURdXSk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBnZXRCeUZpbmdlcnByaW50KGdyb3VwSUQ6IEdyb3VwSURTdHIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbmdlcnByaW50OiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0OiBudW1iZXIgPSAxKTogUHJvbWlzZTxSZWFkb25seUFycmF5PEdyb3VwRG9jPj4ge1xuXG4gICAgICAgIGNvbnN0IGNsYXVzZXM6IFJlYWRvbmx5QXJyYXk8Q2xhdXNlPiA9IFtcbiAgICAgICAgICAgIFsnZ3JvdXBJRCcsICc9PScsIGdyb3VwSURdLFxuICAgICAgICAgICAgWydmaW5nZXJwcmludCcsICc9PScsIGZpbmdlcnByaW50XVxuICAgICAgICBdO1xuXG4gICAgICAgIGNvbnN0IG9yZGVyQnk6IFJlYWRvbmx5QXJyYXk8T3JkZXJCeUNsYXVzZT4gPSBbXG4gICAgICAgICAgICBbJ2NyZWF0ZWQnLCAnZGVzYyddXG4gICAgICAgIF07XG5cbiAgICAgICAgcmV0dXJuIGF3YWl0IENvbGxlY3Rpb25zLmxpc3QodGhpcy5DT0xMRUNUSU9OLCBjbGF1c2VzLCB7b3JkZXJCeSwgbGltaXR9KTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgb25TbmFwc2hvdChncm91cElEOiBHcm91cElEU3RyLCBoYW5kbGVyOiBTbmFwc2hvdExpc3RlbmVyPERvY3VtZW50Q2hhbmdlPEdyb3VwRG9jPj4pIHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IENvbGxlY3Rpb25zLm9uUXVlcnlTbmFwc2hvdENoYW5nZXModGhpcy5DT0xMRUNUSU9OLCBbWydncm91cElEJywgJz09JywgZ3JvdXBJRF1dLCBoYW5kbGVyKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIG9uU25hcHNob3RGb3JCeUdyb3VwSURBbmRGaW5nZXJwcmludChncm91cElEOiBHcm91cElEU3RyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbmdlcnByaW50OiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlcjogU25hcHNob3RMaXN0ZW5lcjxEb2N1bWVudENoYW5nZTxHcm91cERvYz4+ICkge1xuXG4gICAgICAgIGNvbnN0IGNsYXVzZXM6IENsYXVzZVtdID0gW1xuICAgICAgICAgICAgWydncm91cElEJywgJz09JywgZ3JvdXBJRF0sXG4gICAgICAgICAgICBbJ2ZpbmdlcnByaW50JywgJz09JywgZmluZ2VycHJpbnRdLFxuICAgICAgICBdO1xuXG4gICAgICAgIHJldHVybiBhd2FpdCBDb2xsZWN0aW9ucy5vblF1ZXJ5U25hcHNob3RDaGFuZ2VzKHRoaXMuQ09MTEVDVElPTiwgY2xhdXNlcywgaGFuZGxlcik7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBHcm91cERvY0luaXQgZXh0ZW5kcyBEb2NSZWYge1xuXG4gICAgLyoqXG4gICAgICogVGhlIHByb2ZpbGUgZm9yIHRoZSBvd25lciBvZiB0aGlzIGRvY3VtZW50LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHByb2ZpbGVJRDogUHJvZmlsZUlEU3RyO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGdyb3VwIHRoYXQgdGhpcyBkb2MgaXMgYXNzb2NpYXRlZCB3aXRoLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGdyb3VwSUQ6IEdyb3VwSURTdHI7XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBHcm91cERvYyBleHRlbmRzIEdyb3VwRG9jSW5pdCB7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgSUQgZm9yIHRoaXMgZG9jXG4gICAgICovXG4gICAgcmVhZG9ubHkgaWQ6IEdyb3VwRG9jSURTdHI7XG5cbiAgICAvKipcbiAgICAgKiB0aGUgdGltZSB0aGlzIGRvY3VtZW50IHdhcyBhZGRlZCB0byB0aGUgZ3JvdXAuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY3JlYXRlZDogSVNPRGF0ZVRpbWVTdHJpbmc7XG5cbn1cblxuZXhwb3J0IHR5cGUgR3JvdXBEb2NJRFN0ciA9IHN0cmluZztcbiJdfQ==