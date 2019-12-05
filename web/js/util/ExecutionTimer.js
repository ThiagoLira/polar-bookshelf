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
const Logger_1 = require("polar-shared/src/logger/Logger");
const log = Logger_1.Logger.create();
class ExecutionTimer {
    static execute(func) {
        let before = Date.now();
        let result = func();
        let after = Date.now();
        let duration = after - before;
        log.info(`Execution time: ${duration}`);
        return result;
    }
    static executeAsync(func) {
        return __awaiter(this, void 0, void 0, function* () {
            let before = Date.now();
            let result = yield func();
            let after = Date.now();
            let duration = after - before;
            log.info(`Execution time: ${duration}`);
            return result;
        });
    }
}
exports.ExecutionTimer = ExecutionTimer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXhlY3V0aW9uVGltZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJFeGVjdXRpb25UaW1lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJEQUFzRDtBQUV0RCxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFNUIsTUFBYSxjQUFjO0lBRWhCLE1BQU0sQ0FBQyxPQUFPLENBQUksSUFBYTtRQUVsQyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFFeEIsSUFBSSxNQUFNLEdBQUcsSUFBSSxFQUFFLENBQUM7UUFFcEIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBRXZCLElBQUksUUFBUSxHQUFHLEtBQUssR0FBRyxNQUFNLENBQUM7UUFFOUIsR0FBRyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUV4QyxPQUFPLE1BQU0sQ0FBQztJQUVsQixDQUFDO0lBRU0sTUFBTSxDQUFPLFlBQVksQ0FBSSxJQUFzQjs7WUFFdEQsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBRXhCLElBQUksTUFBTSxHQUFHLE1BQU0sSUFBSSxFQUFFLENBQUM7WUFFMUIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBRXZCLElBQUksUUFBUSxHQUFHLEtBQUssR0FBRyxNQUFNLENBQUM7WUFFOUIsR0FBRyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsUUFBUSxFQUFFLENBQUMsQ0FBQztZQUV4QyxPQUFPLE1BQU0sQ0FBQztRQUVsQixDQUFDO0tBQUE7Q0FHSjtBQW5DRCx3Q0FtQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0xvZ2dlcn0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9sb2dnZXIvTG9nZ2VyJztcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG5leHBvcnQgY2xhc3MgRXhlY3V0aW9uVGltZXIge1xuXG4gICAgcHVibGljIHN0YXRpYyBleGVjdXRlPFQ+KGZ1bmM6ICgpID0+IFQpIHtcblxuICAgICAgICBsZXQgYmVmb3JlID0gRGF0ZS5ub3coKTtcblxuICAgICAgICBsZXQgcmVzdWx0ID0gZnVuYygpO1xuXG4gICAgICAgIGxldCBhZnRlciA9IERhdGUubm93KCk7XG5cbiAgICAgICAgbGV0IGR1cmF0aW9uID0gYWZ0ZXIgLSBiZWZvcmU7XG5cbiAgICAgICAgbG9nLmluZm8oYEV4ZWN1dGlvbiB0aW1lOiAke2R1cmF0aW9ufWApO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGV4ZWN1dGVBc3luYzxUPihmdW5jOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG5cbiAgICAgICAgbGV0IGJlZm9yZSA9IERhdGUubm93KCk7XG5cbiAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IGZ1bmMoKTtcblxuICAgICAgICBsZXQgYWZ0ZXIgPSBEYXRlLm5vdygpO1xuXG4gICAgICAgIGxldCBkdXJhdGlvbiA9IGFmdGVyIC0gYmVmb3JlO1xuXG4gICAgICAgIGxvZy5pbmZvKGBFeGVjdXRpb24gdGltZTogJHtkdXJhdGlvbn1gKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuXG4gICAgfVxuXG5cbn1cbiJdfQ==