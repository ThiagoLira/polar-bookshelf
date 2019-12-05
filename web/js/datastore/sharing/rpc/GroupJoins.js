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
const GroupDatastores_1 = require("../GroupDatastores");
const Logger_1 = require("polar-shared/src/logger/Logger");
const URLParams_1 = require("../../../util/URLParams");
const log = Logger_1.Logger.create();
class GroupJoins {
    static exec(request) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield JSONRPC_1.JSONRPC.exec('groupJoin', request);
        });
    }
    static execAndAdd(persistenceLayer, invitation) {
        return __awaiter(this, void 0, void 0, function* () {
            const { groupID } = invitation;
            yield GroupJoins.exec({ groupID });
            for (const docRef of invitation.docs) {
                const groupDocRef = {
                    groupID,
                    docRef
                };
                log.info("Going to importFromGroup");
                yield GroupDatastores_1.GroupDatastores.importFromGroup(persistenceLayer, groupDocRef);
            }
        });
    }
    static createShareURL(invitation) {
        const param = URLParams_1.URLParams.createJSON(invitation);
        return `https://app.getpolarized.io/apps/add-shared-doc?invitation=${param}`;
    }
}
exports.GroupJoins = GroupJoins;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JvdXBKb2lucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkdyb3VwSm9pbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBa0M7QUFFbEMsd0RBQWdFO0FBRWhFLDJEQUFzRDtBQUV0RCx1REFBa0Q7QUFHbEQsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLE1BQWEsVUFBVTtJQUVaLE1BQU0sQ0FBTyxJQUFJLENBQUMsT0FBeUI7O1lBQzlDLE9BQU8sTUFBTSxpQkFBTyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDcEQsQ0FBQztLQUFBO0lBRU0sTUFBTSxDQUFPLFVBQVUsQ0FBQyxnQkFBa0MsRUFDbEMsVUFBaUM7O1lBRTVELE1BQU0sRUFBQyxPQUFPLEVBQUMsR0FBRyxVQUFVLENBQUM7WUFHN0IsTUFBTSxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQztZQUdqQyxLQUFLLE1BQU0sTUFBTSxJQUFJLFVBQVUsQ0FBQyxJQUFJLEVBQUU7Z0JBRWxDLE1BQU0sV0FBVyxHQUFnQjtvQkFDN0IsT0FBTztvQkFDUCxNQUFNO2lCQUNULENBQUM7Z0JBRUYsR0FBRyxDQUFDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO2dCQUNyQyxNQUFNLGlDQUFlLENBQUMsZUFBZSxDQUFDLGdCQUFnQixFQUFFLFdBQVcsQ0FBQyxDQUFDO2FBRXhFO1FBRUwsQ0FBQztLQUFBO0lBRU0sTUFBTSxDQUFDLGNBQWMsQ0FBQyxVQUFpQztRQUMxRCxNQUFNLEtBQUssR0FBRyxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMvQyxPQUFPLDhEQUE4RCxLQUFLLEVBQUUsQ0FBQztJQUNqRixDQUFDO0NBRUo7QUFsQ0QsZ0NBa0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtKU09OUlBDfSBmcm9tICcuL0pTT05SUEMnO1xuaW1wb3J0IHtHcm91cElEU3RyfSBmcm9tICcuLi8uLi9EYXRhc3RvcmUnO1xuaW1wb3J0IHtHcm91cERhdGFzdG9yZXMsIEdyb3VwRG9jUmVmfSBmcm9tIFwiLi4vR3JvdXBEYXRhc3RvcmVzXCI7XG5pbXBvcnQge0dyb3VwTWVtYmVySW52aXRhdGlvbn0gZnJvbSBcIi4uL2RiL0dyb3VwTWVtYmVySW52aXRhdGlvbnNcIjtcbmltcG9ydCB7TG9nZ2VyfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy9sb2dnZXIvTG9nZ2VyXCI7XG5pbXBvcnQge1BlcnNpc3RlbmNlTGF5ZXJ9IGZyb20gXCIuLi8uLi9QZXJzaXN0ZW5jZUxheWVyXCI7XG5pbXBvcnQge1VSTFBhcmFtc30gZnJvbSBcIi4uLy4uLy4uL3V0aWwvVVJMUGFyYW1zXCI7XG5pbXBvcnQge1VSTFN0cn0gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvdXRpbC9TdHJpbmdzXCI7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuZXhwb3J0IGNsYXNzIEdyb3VwSm9pbnMge1xuXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBleGVjKHJlcXVlc3Q6IEdyb3VwSm9pblJlcXVlc3QpOiBQcm9taXNlPEdyb3VwSm9pblJlc3BvbnNlPiB7XG4gICAgICAgIHJldHVybiBhd2FpdCBKU09OUlBDLmV4ZWMoJ2dyb3VwSm9pbicsIHJlcXVlc3QpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgZXhlY0FuZEFkZChwZXJzaXN0ZW5jZUxheWVyOiBQZXJzaXN0ZW5jZUxheWVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnZpdGF0aW9uOiBHcm91cE1lbWJlckludml0YXRpb24pIHtcblxuICAgICAgICBjb25zdCB7Z3JvdXBJRH0gPSBpbnZpdGF0aW9uO1xuXG4gICAgICAgIC8vIHRoZSB1c2VyIGhhcyB0byBqb2luIHRoZSBncm91cCBub3cuLi5cbiAgICAgICAgYXdhaXQgR3JvdXBKb2lucy5leGVjKHtncm91cElEfSk7XG5cbiAgICAgICAgLy8gbm93IHdlIGltcG9ydCBmcm9tIHRoZSBncm91cC4uLlxuICAgICAgICBmb3IgKGNvbnN0IGRvY1JlZiBvZiBpbnZpdGF0aW9uLmRvY3MpIHtcblxuICAgICAgICAgICAgY29uc3QgZ3JvdXBEb2NSZWY6IEdyb3VwRG9jUmVmID0ge1xuICAgICAgICAgICAgICAgIGdyb3VwSUQsXG4gICAgICAgICAgICAgICAgZG9jUmVmXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBsb2cuaW5mbyhcIkdvaW5nIHRvIGltcG9ydEZyb21Hcm91cFwiKTtcbiAgICAgICAgICAgIGF3YWl0IEdyb3VwRGF0YXN0b3Jlcy5pbXBvcnRGcm9tR3JvdXAocGVyc2lzdGVuY2VMYXllciwgZ3JvdXBEb2NSZWYpO1xuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlU2hhcmVVUkwoaW52aXRhdGlvbjogR3JvdXBNZW1iZXJJbnZpdGF0aW9uKTogVVJMU3RyIHtcbiAgICAgICAgY29uc3QgcGFyYW0gPSBVUkxQYXJhbXMuY3JlYXRlSlNPTihpbnZpdGF0aW9uKTtcbiAgICAgICAgcmV0dXJuIGBodHRwczovL2FwcC5nZXRwb2xhcml6ZWQuaW8vYXBwcy9hZGQtc2hhcmVkLWRvYz9pbnZpdGF0aW9uPSR7cGFyYW19YDtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBHcm91cEpvaW5SZXF1ZXN0IHtcbiAgICByZWFkb25seSBncm91cElEOiBHcm91cElEU3RyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdyb3VwSm9pblJlc3BvbnNlIHtcbn1cblxuIl19