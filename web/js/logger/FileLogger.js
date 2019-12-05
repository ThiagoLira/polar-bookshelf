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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Files_1 = require("polar-shared/src/util/Files");
const util = __importStar(require("util"));
class FileLogger {
    constructor(path, fd) {
        this.path = path;
        this.fd = fd;
        this.name = 'file-logger:' + path;
    }
    notice(msg, ...args) {
        this.append('notice', msg, ...args);
    }
    debug(msg, ...args) {
        this.append('debug', msg, ...args);
    }
    error(msg, ...args) {
        this.append('error', msg, ...args);
    }
    info(msg, ...args) {
        this.append('info', msg, ...args);
    }
    verbose(msg, ...args) {
        this.append('verbose', msg, ...args);
    }
    warn(msg, ...args) {
        this.append('warn', msg, ...args);
    }
    sync() {
        return __awaiter(this, void 0, void 0, function* () {
            return Files_1.Files.fsyncAsync(this.fd);
        });
    }
    close() {
        return __awaiter(this, void 0, void 0, function* () {
            yield Files_1.Files.closeAsync(this.fd);
        });
    }
    append(level, msg, ...args) {
        const line = FileLogger.format(level, msg, ...args);
        Files_1.Files.appendFileAsync(this.fd, line)
            .catch((err) => console.error("Could not write to file logger: ", err));
    }
    static create(path) {
        return __awaiter(this, void 0, void 0, function* () {
            const fd = yield Files_1.Files.openAsync(path, 'a');
            return new FileLogger(path, fd);
        });
    }
    static format(level, msg, ...args) {
        const timestamp = new Date().toISOString();
        let line = `[${timestamp}] [${level}] ${msg}`;
        if (args.length > 0) {
            args.forEach(arg => {
                if (!line.endsWith(' ')) {
                    line += ' ';
                }
                if (arg instanceof Error) {
                    const err = arg;
                    line += '\n' + err.stack;
                }
                else if (typeof arg === 'string' ||
                    typeof arg === 'boolean' ||
                    typeof arg === 'number') {
                    line += arg.toString();
                }
                else {
                    line += util.inspect(arg, false, undefined, false);
                }
            });
        }
        line += '\n';
        return line;
    }
}
exports.FileLogger = FileLogger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZUxvZ2dlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkZpbGVMb2dnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUEsdURBQWtEO0FBQ2xELDJDQUE2QjtBQUU3QixNQUFhLFVBQVU7SUFRbkIsWUFBWSxJQUFZLEVBQUUsRUFBVTtRQUNoQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxJQUFJLEdBQUcsY0FBYyxHQUFHLElBQUksQ0FBQztJQUN0QyxDQUFDO0lBRU0sTUFBTSxDQUFDLEdBQVcsRUFBRSxHQUFHLElBQVc7UUFDckMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVNLEtBQUssQ0FBQyxHQUFXLEVBQUUsR0FBRyxJQUFXO1FBQ3BDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFTSxLQUFLLENBQUMsR0FBVyxFQUFFLEdBQUcsSUFBVztRQUNwQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRU0sSUFBSSxDQUFDLEdBQVcsRUFBRSxHQUFHLElBQVc7UUFDbkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVNLE9BQU8sQ0FBQyxHQUFXLEVBQUUsR0FBRyxJQUFXO1FBQ3RDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFTSxJQUFJLENBQUMsR0FBVyxFQUFFLEdBQUcsSUFBVztRQUNuQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRVksSUFBSTs7WUFFYixPQUFPLGFBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3JDLENBQUM7S0FBQTtJQUVZLEtBQUs7O1lBQ2QsTUFBTSxhQUFLLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNwQyxDQUFDO0tBQUE7SUFFTyxNQUFNLENBQUMsS0FBYSxFQUFFLEdBQVcsRUFBRSxHQUFHLElBQVc7UUFFckQsTUFBTSxJQUFJLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFFcEQsYUFBSyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQzthQUsvQixLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsa0NBQWtDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUVoRixDQUFDO0lBRU0sTUFBTSxDQUFPLE1BQU0sQ0FBQyxJQUFZOztZQUNuQyxNQUFNLEVBQUUsR0FBRyxNQUFNLGFBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQzVDLE9BQU8sSUFBSSxVQUFVLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3BDLENBQUM7S0FBQTtJQUVTLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBYSxFQUFFLEdBQVcsRUFBRSxHQUFHLElBQVc7UUFFOUQsTUFBTSxTQUFTLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUUzQyxJQUFJLElBQUksR0FBRyxJQUFJLFNBQVMsTUFBTSxLQUFLLEtBQUssR0FBRyxFQUFFLENBQUM7UUFFOUMsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUVqQixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUVmLElBQUssQ0FBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUN2QixJQUFJLElBQUksR0FBRyxDQUFDO2lCQUNmO2dCQUVELElBQUksR0FBRyxZQUFZLEtBQUssRUFBRTtvQkFFdEIsTUFBTSxHQUFHLEdBQUcsR0FBRyxDQUFDO29CQUVoQixJQUFJLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7aUJBRTVCO3FCQUFNLElBQUksT0FBTyxHQUFHLEtBQUssUUFBUTtvQkFDdkIsT0FBTyxHQUFHLEtBQUssU0FBUztvQkFDeEIsT0FBTyxHQUFHLEtBQUssUUFBUSxFQUFFO29CQUVoQyxJQUFJLElBQUksR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO2lCQUUxQjtxQkFBTTtvQkFHSCxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztpQkFDdEQ7WUFFTCxDQUFDLENBQUMsQ0FBQztTQUVOO1FBRUQsSUFBSSxJQUFJLElBQUksQ0FBQztRQUViLE9BQU8sSUFBSSxDQUFDO0lBRWhCLENBQUM7Q0FFSjtBQTNHRCxnQ0EyR0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEEgYmFzaWMgYXBwZW5kLW9ubHkgZmlsZSBsb2dnZXIuXG4gKi9cbmltcG9ydCB7SUxvZ2dlcn0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9sb2dnZXIvSUxvZ2dlcic7XG5pbXBvcnQge0ZpbGVzfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvRmlsZXMnO1xuaW1wb3J0ICogYXMgdXRpbCBmcm9tICd1dGlsJztcblxuZXhwb3J0IGNsYXNzIEZpbGVMb2dnZXIgaW1wbGVtZW50cyBJTG9nZ2VyIHtcblxuICAgIHB1YmxpYyByZWFkb25seSBuYW1lOiBzdHJpbmc7XG5cbiAgICBwcml2YXRlIHBhdGg6IHN0cmluZztcblxuICAgIHByaXZhdGUgZmQ6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKHBhdGg6IHN0cmluZywgZmQ6IG51bWJlcikge1xuICAgICAgICB0aGlzLnBhdGggPSBwYXRoO1xuICAgICAgICB0aGlzLmZkID0gZmQ7XG4gICAgICAgIHRoaXMubmFtZSA9ICdmaWxlLWxvZ2dlcjonICsgcGF0aDtcbiAgICB9XG5cbiAgICBwdWJsaWMgbm90aWNlKG1zZzogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSk6IHZvaWQge1xuICAgICAgICB0aGlzLmFwcGVuZCgnbm90aWNlJywgbXNnLCAuLi5hcmdzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGVidWcobXNnOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYXBwZW5kKCdkZWJ1ZycsIG1zZywgLi4uYXJncyk7XG4gICAgfVxuXG4gICAgcHVibGljIGVycm9yKG1zZzogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSk6IHZvaWQge1xuICAgICAgICB0aGlzLmFwcGVuZCgnZXJyb3InLCBtc2csIC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbmZvKG1zZzogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSk6IHZvaWQge1xuICAgICAgICB0aGlzLmFwcGVuZCgnaW5mbycsIG1zZywgLi4uYXJncyk7XG4gICAgfVxuXG4gICAgcHVibGljIHZlcmJvc2UobXNnOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYXBwZW5kKCd2ZXJib3NlJywgbXNnLCAuLi5hcmdzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgd2Fybihtc2c6IHN0cmluZywgLi4uYXJnczogYW55W10pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5hcHBlbmQoJ3dhcm4nLCBtc2csIC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBzeW5jKCkge1xuXG4gICAgICAgIHJldHVybiBGaWxlcy5mc3luY0FzeW5jKHRoaXMuZmQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBjbG9zZSgpIHtcbiAgICAgICAgYXdhaXQgRmlsZXMuY2xvc2VBc3luYyh0aGlzLmZkKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGFwcGVuZChsZXZlbDogc3RyaW5nLCBtc2c6IHN0cmluZywgLi4uYXJnczogYW55W10pIHtcblxuICAgICAgICBjb25zdCBsaW5lID0gRmlsZUxvZ2dlci5mb3JtYXQobGV2ZWwsIG1zZywgLi4uYXJncyk7XG5cbiAgICAgICAgRmlsZXMuYXBwZW5kRmlsZUFzeW5jKHRoaXMuZmQsIGxpbmUpXG4gICAgICAgICAgICAvLyBUT0RPOiBpdCBtaWdodCBiZSBhIGdvb2QgaWRlYSB0byBhZGQgc3VwcG9ydCBmb3IgYXV0by1zeW5jIGluIHRoZVxuICAgICAgICAgICAgLy8gZnV0dXJlIGJ1dCBmb3Igbm93IEkgZGlzYWJsZWQgaXQgZHVlIHRvIGFuIGlzc3VlIHdpdGggZnN5bmMgbm90XG4gICAgICAgICAgICAvLyB3b3JraW5nIGFzIGV4cGVjdGVkLlxuICAgICAgICAgICAgLy8gLnRoZW4oYXN5bmMgKCkgPT4gYXdhaXQgdGhpcy5zeW5jKCkpXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihcIkNvdWxkIG5vdCB3cml0ZSB0byBmaWxlIGxvZ2dlcjogXCIsIGVycikpO1xuXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBjcmVhdGUocGF0aDogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGZkID0gYXdhaXQgRmlsZXMub3BlbkFzeW5jKHBhdGgsICdhJyk7XG4gICAgICAgIHJldHVybiBuZXcgRmlsZUxvZ2dlcihwYXRoLCBmZCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHN0YXRpYyBmb3JtYXQobGV2ZWw6IHN0cmluZywgbXNnOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKSB7XG5cbiAgICAgICAgY29uc3QgdGltZXN0YW1wID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpO1xuXG4gICAgICAgIGxldCBsaW5lID0gYFske3RpbWVzdGFtcH1dIFske2xldmVsfV0gJHttc2d9YDtcblxuICAgICAgICBpZiAoYXJncy5sZW5ndGggPiAwKSB7XG5cbiAgICAgICAgICAgIGFyZ3MuZm9yRWFjaChhcmcgPT4ge1xuXG4gICAgICAgICAgICAgICAgaWYgKCAhIGxpbmUuZW5kc1dpdGgoJyAnKSkge1xuICAgICAgICAgICAgICAgICAgICBsaW5lICs9ICcgJztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoYXJnIGluc3RhbmNlb2YgRXJyb3IpIHtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBlcnIgPSBhcmc7XG5cbiAgICAgICAgICAgICAgICAgICAgbGluZSArPSAnXFxuJyArIGVyci5zdGFjaztcblxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGFyZyA9PT0gJ3N0cmluZycgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVvZiBhcmcgPT09ICdib29sZWFuJyB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZW9mIGFyZyA9PT0gJ251bWJlcicpIHtcblxuICAgICAgICAgICAgICAgICAgICBsaW5lICs9IGFyZy50b1N0cmluZygpO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29udmVydCB0aGUgb2JqZWN0IHRvIGEgc3RyaW5nLiBEbyBub3QgdXNlIEpTT04uc3RyaW5naWZ5XG4gICAgICAgICAgICAgICAgICAgIC8vIGFzIGl0IGRvZXNuJ3QgaGFuZGxlIGNpcmN1bGFyIHJlZmVyZW5jZXMuXG4gICAgICAgICAgICAgICAgICAgIGxpbmUgKz0gdXRpbC5pbnNwZWN0KGFyZywgZmFsc2UsIHVuZGVmaW5lZCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGxpbmUgKz0gJ1xcbic7XG5cbiAgICAgICAgcmV0dXJuIGxpbmU7XG5cbiAgICB9XG5cbn1cbiJdfQ==