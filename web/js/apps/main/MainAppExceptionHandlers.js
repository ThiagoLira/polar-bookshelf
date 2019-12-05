"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const process_1 = __importDefault(require("process"));
const Logger_1 = require("polar-shared/src/logger/Logger");
const log = Logger_1.Logger.create();
class MainAppExceptionHandlers {
    static register() {
        process_1.default.on('uncaughtException', err => {
            log.error("Uncaught exception: ", err);
        });
        process_1.default.on('unhandledRejection', err => {
            log.error("Unhandled rejection: ", err);
        });
    }
}
exports.MainAppExceptionHandlers = MainAppExceptionHandlers;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFpbkFwcEV4Y2VwdGlvbkhhbmRsZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiTWFpbkFwcEV4Y2VwdGlvbkhhbmRsZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsc0RBQThCO0FBQzlCLDJEQUFzRDtBQUV0RCxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFNUIsTUFBYSx3QkFBd0I7SUFFMUIsTUFBTSxDQUFDLFFBQVE7UUFJbEIsaUJBQU8sQ0FBQyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsR0FBRyxDQUFDLEVBQUU7WUFDbEMsR0FBRyxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUMzQyxDQUFDLENBQUMsQ0FBQztRQUVILGlCQUFPLENBQUMsRUFBRSxDQUFDLG9CQUFvQixFQUFFLEdBQUcsQ0FBQyxFQUFFO1lBQ25DLEdBQUcsQ0FBQyxLQUFLLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDNUMsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDO0NBQ0o7QUFmRCw0REFlQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcm9jZXNzIGZyb20gXCJwcm9jZXNzXCI7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvbG9nZ2VyL0xvZ2dlclwiO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbmV4cG9ydCBjbGFzcyBNYWluQXBwRXhjZXB0aW9uSGFuZGxlcnMge1xuXG4gICAgcHVibGljIHN0YXRpYyByZWdpc3RlcigpIHtcblxuICAgICAgICAvLyB3ZSBoYXZlIHRvIGNyZWF0ZSB1bmNhdWdodCBleGNlcHRpb24gaGFuZGxlcnMgaGVyZSB3aGVuIGV4aXRpbmdcbiAgICAgICAgLy8gdGhlIGFwcCBhcyBJIHRoaW5rIHRoZXkncmUgZ2V0dGluZyByZW1vdmVkLlxuICAgICAgICBwcm9jZXNzLm9uKCd1bmNhdWdodEV4Y2VwdGlvbicsIGVyciA9PiB7XG4gICAgICAgICAgICBsb2cuZXJyb3IoXCJVbmNhdWdodCBleGNlcHRpb246IFwiLCBlcnIpO1xuICAgICAgICB9KTtcblxuICAgICAgICBwcm9jZXNzLm9uKCd1bmhhbmRsZWRSZWplY3Rpb24nLCBlcnIgPT4ge1xuICAgICAgICAgICAgbG9nLmVycm9yKFwiVW5oYW5kbGVkIHJlamVjdGlvbjogXCIsIGVycik7XG4gICAgICAgIH0pO1xuXG4gICAgfVxufVxuXG5cbiJdfQ==