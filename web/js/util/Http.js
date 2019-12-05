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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const https_1 = __importDefault(require("https"));
const url = __importStar(require("url"));
class Http {
    static fetchContent(options) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof options === 'string') {
                options = url.parse(options);
            }
            let provider;
            if (options.protocol === "http:") {
                console.log("Using http");
                provider = http_1.default;
            }
            else if (options.protocol === "https:") {
                console.log("Using https");
                provider = https_1.default;
            }
            else {
                throw new Error("No provider for protocol: " + options.protocol);
            }
            return new Promise((resolve, reject) => {
                provider.get(options, response => {
                    if (response.statusCode !== 200) {
                        reject(new Error("Wrong status code: " + response.statusCode));
                    }
                    let data = [];
                    response.on('data', (chunk) => {
                        data.push(chunk);
                    });
                    response.on('end', () => {
                        let buffer = Buffer.concat(data);
                        resolve(buffer);
                    });
                });
            });
        });
    }
    static execute(options) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof options === 'string') {
                options = url.parse(options);
            }
            let provider;
            if (options.protocol === "http:") {
                console.log("Using http");
                provider = http_1.default;
            }
            else if (options.protocol === "https:") {
                console.log("Using https");
                provider = https_1.default;
            }
            else {
                throw new Error("No provider for protocol: " + options.protocol);
            }
            return new Promise((resolve, reject) => {
                provider.get(options, (response) => {
                    if (response.statusCode !== 200) {
                        reject(new Error("Wrong status code: " + response.statusCode));
                    }
                    let data = [];
                    response.on('data', (chunk) => {
                        data.push(chunk);
                    });
                    response.on('end', () => {
                        let buffer = Buffer.concat(data);
                        resolve({
                            response,
                            data: buffer
                        });
                    });
                });
            });
        });
    }
}
exports.Http = Http;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSHR0cC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkh0dHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsZ0RBQTBFO0FBQzFFLGtEQUEwQjtBQUUxQix5Q0FBMkI7QUFFM0IsTUFBYSxJQUFJO0lBWWIsTUFBTSxDQUFPLFlBQVksQ0FBQyxPQUFnQzs7WUFFdEQsSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLEVBQUU7Z0JBQzdCLE9BQU8sR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ2hDO1lBRUQsSUFBSSxRQUFtQixDQUFDO1lBRXhCLElBQUcsT0FBTyxDQUFDLFFBQVEsS0FBSyxPQUFPLEVBQUU7Z0JBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQzFCLFFBQVEsR0FBRyxjQUFJLENBQUM7YUFDbkI7aUJBQU0sSUFBSSxPQUFPLENBQUMsUUFBUSxLQUFLLFFBQVEsRUFBRTtnQkFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDM0IsUUFBUSxHQUFHLGVBQUssQ0FBQzthQUNwQjtpQkFBTTtnQkFDSCxNQUFNLElBQUksS0FBSyxDQUFDLDRCQUE0QixHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUNwRTtZQUVELE9BQU8sSUFBSSxPQUFPLENBQVMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7Z0JBRTNDLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxFQUFFO29CQUU3QixJQUFHLFFBQVEsQ0FBQyxVQUFVLEtBQUssR0FBRyxFQUFFO3dCQUM1QixNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMscUJBQXFCLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7cUJBQ2xFO29CQUlELElBQUksSUFBSSxHQUFVLEVBQUUsQ0FBQztvQkFFckIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRTt3QkFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDckIsQ0FBQyxDQUFDLENBQUM7b0JBRUgsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFO3dCQUlwQixJQUFJLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNqQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBRXBCLENBQUMsQ0FBQyxDQUFDO2dCQUVQLENBQUMsQ0FBQyxDQUFBO1lBRU4sQ0FBQyxDQUFDLENBQUM7UUFFUCxDQUFDO0tBQUE7SUFPRCxNQUFNLENBQU8sT0FBTyxDQUFDLE9BQWdDOztZQUVqRCxJQUFJLE9BQU8sT0FBTyxLQUFLLFFBQVEsRUFBRTtnQkFDN0IsT0FBTyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDaEM7WUFFRCxJQUFJLFFBQW1CLENBQUM7WUFFeEIsSUFBRyxPQUFPLENBQUMsUUFBUSxLQUFLLE9BQU8sRUFBRTtnQkFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDMUIsUUFBUSxHQUFHLGNBQUksQ0FBQzthQUNuQjtpQkFBTSxJQUFJLE9BQU8sQ0FBQyxRQUFRLEtBQUssUUFBUSxFQUFFO2dCQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUMzQixRQUFRLEdBQUcsZUFBSyxDQUFDO2FBQ3BCO2lCQUFNO2dCQUNILE1BQU0sSUFBSSxLQUFLLENBQUMsNEJBQTRCLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ3BFO1lBRUQsT0FBTyxJQUFJLE9BQU8sQ0FBVyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtnQkFFN0MsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBRTtvQkFFL0IsSUFBRyxRQUFRLENBQUMsVUFBVSxLQUFLLEdBQUcsRUFBRTt3QkFDNUIsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLHFCQUFxQixHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO3FCQUNsRTtvQkFJRCxJQUFJLElBQUksR0FBVSxFQUFFLENBQUM7b0JBRXJCLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUU7d0JBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3JCLENBQUMsQ0FBQyxDQUFDO29CQUVILFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRTt3QkFJcEIsSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDakMsT0FBTyxDQUFDOzRCQUNKLFFBQVE7NEJBQ1IsSUFBSSxFQUFFLE1BQU07eUJBQ2YsQ0FBQyxDQUFDO29CQUVQLENBQUMsQ0FBQyxDQUFDO2dCQUVQLENBQUMsQ0FBQyxDQUFBO1lBRU4sQ0FBQyxDQUFDLENBQUM7UUFFUCxDQUFDO0tBQUE7Q0FFSjtBQXRIRCxvQkFzSEMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBodHRwLCB7Q2xpZW50UmVxdWVzdCwgSW5jb21pbmdNZXNzYWdlLCBSZXF1ZXN0T3B0aW9uc30gZnJvbSAnaHR0cCc7XG5pbXBvcnQgaHR0cHMgZnJvbSAnaHR0cHMnO1xuaW1wb3J0IHtVUkx9IGZyb20gXCJ1cmxcIjtcbmltcG9ydCAqIGFzIHVybCBmcm9tICd1cmwnO1xuXG5leHBvcnQgY2xhc3MgSHR0cCB7XG5cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtIGFuIEhUVFAgdGVzdCBhbmQgZ2V0IHRoZSByZXNwb25zZS5cbiAgICAgKlxuICAgICAqIGh0dHBzOi8vbm9kZWpzLm9yZy9hcGkvaHR0cC5odG1sI2h0dHBfaHR0cF9yZXF1ZXN0X29wdGlvbnNfY2FsbGJhY2tcbiAgICAgKlxuICAgICAqXG4gICAgICogLy8gVE9ETzogcmVwbGFjZSB3aXRoOiBodHRwczovL2dpdGh1Yi5jb20vcmVxdWVzdC9yZXF1ZXN0XG4gICAgICpcbiAgICAgKiBAcGFyYW0gb3B0aW9uc1xuICAgICAqL1xuICAgIHN0YXRpYyBhc3luYyBmZXRjaENvbnRlbnQob3B0aW9uczogUmVxdWVzdE9wdGlvbnMgfCBzdHJpbmcpOiBQcm9taXNlPEJ1ZmZlcj4ge1xuXG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSB1cmwucGFyc2Uob3B0aW9ucyk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcHJvdmlkZXI6IFJlcXVlc3RlcjtcblxuICAgICAgICBpZihvcHRpb25zLnByb3RvY29sID09PSBcImh0dHA6XCIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVXNpbmcgaHR0cFwiKTtcbiAgICAgICAgICAgIHByb3ZpZGVyID0gaHR0cDtcbiAgICAgICAgfSBlbHNlIGlmIChvcHRpb25zLnByb3RvY29sID09PSBcImh0dHBzOlwiKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVzaW5nIGh0dHBzXCIpO1xuICAgICAgICAgICAgcHJvdmlkZXIgPSBodHRwcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHByb3ZpZGVyIGZvciBwcm90b2NvbDogXCIgKyBvcHRpb25zLnByb3RvY29sKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxCdWZmZXI+KChyZXNvbHZlLCByZWplY3QpID0+IHtcblxuICAgICAgICAgICAgcHJvdmlkZXIuZ2V0KG9wdGlvbnMsIHJlc3BvbnNlID0+IHtcblxuICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLnN0YXR1c0NvZGUgIT09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKFwiV3Jvbmcgc3RhdHVzIGNvZGU6IFwiICsgcmVzcG9uc2Uuc3RhdHVzQ29kZSkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIHJlamVjdCBpZiB3ZSBkb24ndCBoYXZlIHRoZSBwcm9wZXIgcmVzcG9uc2VcblxuICAgICAgICAgICAgICAgIGxldCBkYXRhOiBhbnlbXSA9IFtdO1xuXG4gICAgICAgICAgICAgICAgcmVzcG9uc2Uub24oJ2RhdGEnLCAoY2h1bmspID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5wdXNoKGNodW5rKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLm9uKCdlbmQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vYXQgdGhpcyBwb2ludCBkYXRhIGlzIGFuIGFycmF5IG9mIEJ1ZmZlcnNcbiAgICAgICAgICAgICAgICAgICAgLy9zbyBCdWZmZXIuY29uY2F0KCkgY2FuIG1ha2UgdXMgYSBuZXcgQnVmZmVyXG4gICAgICAgICAgICAgICAgICAgIC8vb2YgYWxsIG9mIHRoZW0gdG9nZXRoZXJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJ1ZmZlciA9IEJ1ZmZlci5jb25jYXQoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoYnVmZmVyKTtcblxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXhlY3V0ZSBhbiBIVFRQIHJlcXVlc3QgYW5kIHJldHVybiB0aGUgZGF0YSBhbmQgdGhlIHJlc3BvbnNlLlxuICAgICAqIEBwYXJhbSBvcHRpb25zXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgICAqL1xuICAgIHN0YXRpYyBhc3luYyBleGVjdXRlKG9wdGlvbnM6IFJlcXVlc3RPcHRpb25zIHwgc3RyaW5nKTogUHJvbWlzZTxFeGVjdXRlZD4ge1xuXG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSB1cmwucGFyc2Uob3B0aW9ucyk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcHJvdmlkZXI6IFJlcXVlc3RlcjtcblxuICAgICAgICBpZihvcHRpb25zLnByb3RvY29sID09PSBcImh0dHA6XCIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVXNpbmcgaHR0cFwiKTtcbiAgICAgICAgICAgIHByb3ZpZGVyID0gaHR0cDtcbiAgICAgICAgfSBlbHNlIGlmIChvcHRpb25zLnByb3RvY29sID09PSBcImh0dHBzOlwiKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVzaW5nIGh0dHBzXCIpO1xuICAgICAgICAgICAgcHJvdmlkZXIgPSBodHRwcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHByb3ZpZGVyIGZvciBwcm90b2NvbDogXCIgKyBvcHRpb25zLnByb3RvY29sKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxFeGVjdXRlZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXG4gICAgICAgICAgICBwcm92aWRlci5nZXQob3B0aW9ucywgKHJlc3BvbnNlKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBpZihyZXNwb25zZS5zdGF0dXNDb2RlICE9PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihcIldyb25nIHN0YXR1cyBjb2RlOiBcIiArIHJlc3BvbnNlLnN0YXR1c0NvZGUpKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyByZWplY3QgaWYgd2UgZG9uJ3QgaGF2ZSB0aGUgcHJvcGVyIHJlc3BvbnNlXG5cbiAgICAgICAgICAgICAgICBsZXQgZGF0YTogYW55W10gPSBbXTtcblxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLm9uKCdkYXRhJywgKGNodW5rKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEucHVzaChjaHVuayk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICByZXNwb25zZS5vbignZW5kJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvL2F0IHRoaXMgcG9pbnQgZGF0YSBpcyBhbiBhcnJheSBvZiBCdWZmZXJzXG4gICAgICAgICAgICAgICAgICAgIC8vc28gQnVmZmVyLmNvbmNhdCgpIGNhbiBtYWtlIHVzIGEgbmV3IEJ1ZmZlclxuICAgICAgICAgICAgICAgICAgICAvL29mIGFsbCBvZiB0aGVtIHRvZ2V0aGVyXG4gICAgICAgICAgICAgICAgICAgIGxldCBidWZmZXIgPSBCdWZmZXIuY29uY2F0KGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogYnVmZmVyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0ZXIge1xuICAgIGdldChvcHRpb25zOiBSZXF1ZXN0T3B0aW9ucyB8IHN0cmluZyB8IFVSTCwgY2FsbGJhY2s/OiAocmVzOiBJbmNvbWluZ01lc3NhZ2UpID0+IHZvaWQpOiBDbGllbnRSZXF1ZXN0O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEV4ZWN1dGVkIHtcbiAgICByZXNwb25zZTogaHR0cC5JbmNvbWluZ01lc3NhZ2UsXG4gICAgZGF0YTogQnVmZmVyXG59XG4iXX0=