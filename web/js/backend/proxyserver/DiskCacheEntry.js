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
Object.defineProperty(exports, "__esModule", { value: true });
const CacheEntry_1 = require("./CacheEntry");
const fs_1 = __importDefault(require("fs"));
class DiskCacheEntry extends CacheEntry_1.CacheEntry {
    constructor(options) {
        super(options);
        this.path = options.path;
        if (this.path === undefined) {
            throw new Error("No path");
        }
    }
    handleData(callback) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                fs_1.default.readFile(this.path, (err, data) => {
                    if (err) {
                        reject(err);
                    }
                    callback(data);
                    resolve(false);
                });
            });
        });
    }
    toBuffer() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                fs_1.default.readFile(this.path, (err, data) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(data);
                });
            });
        });
    }
    toStream() {
        return __awaiter(this, void 0, void 0, function* () {
            return fs_1.default.createReadStream(this.path);
        });
    }
}
exports.DiskCacheEntry = DiskCacheEntry;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGlza0NhY2hlRW50cnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJEaXNrQ2FjaGVFbnRyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLDZDQUFzRDtBQUV0RCw0Q0FBb0I7QUFNcEIsTUFBYSxjQUFlLFNBQVEsdUJBQVU7SUFPMUMsWUFBWSxPQUFZO1FBRXBCLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVmLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztRQUV6QixJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFO1lBQ3pCLE1BQU0sSUFBSSxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDOUI7SUFFTCxDQUFDO0lBRVksVUFBVSxDQUFDLFFBQXNCOztZQUUxQyxPQUFPLElBQUksT0FBTyxDQUFVLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO2dCQUk1QyxZQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFpQyxFQUFFLElBQVksRUFBRSxFQUFFO29CQUV2RSxJQUFJLEdBQUcsRUFBRTt3QkFDTCxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7cUJBQ2Y7b0JBRUQsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNmLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFFbkIsQ0FBQyxDQUFDLENBQUM7WUFFUCxDQUFDLENBQUMsQ0FBQztRQUVQLENBQUM7S0FBQTtJQUVZLFFBQVE7O1lBSWpCLE9BQU8sSUFBSSxPQUFPLENBQVMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7Z0JBRTVDLFlBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEdBQTBCLEVBQUUsSUFBWSxFQUFFLEVBQUU7b0JBRS9ELElBQUksR0FBRyxFQUFFO3dCQUNMLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztxQkFDZjtvQkFFRCxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBRWxCLENBQUMsQ0FBQyxDQUFDO1lBRVAsQ0FBQyxDQUFDLENBQUM7UUFFUCxDQUFDO0tBQUE7SUFFWSxRQUFROztZQUNqQixPQUFPLFlBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUMsQ0FBQztLQUFBO0NBRUo7QUFoRUQsd0NBZ0VDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDYWNoZUVudHJ5LCBEYXRhQ2FsbGJhY2t9IGZyb20gJy4vQ2FjaGVFbnRyeSc7XG5cbmltcG9ydCBmcyBmcm9tICdmcyc7XG5pbXBvcnQgRXJybm9FeGNlcHRpb24gPSBOb2RlSlMuRXJybm9FeGNlcHRpb247XG5cbi8qKlxuICogQ2FjaGUgZW50cnkgd2hpY2ggaXMganVzdCBidWZmZXJlZCBpbiBtZW1vcnkuXG4gKi9cbmV4cG9ydCBjbGFzcyBEaXNrQ2FjaGVFbnRyeSBleHRlbmRzIENhY2hlRW50cnkge1xuXG4gICAgLyoqXG4gICAgICogVGhlIGRhdGEgd2Ugc2hvdWxkIHNlcnZlLlxuICAgICAqL1xuICAgIHB1YmxpYyBwYXRoOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zOiBhbnkpIHtcblxuICAgICAgICBzdXBlcihvcHRpb25zKTtcblxuICAgICAgICB0aGlzLnBhdGggPSBvcHRpb25zLnBhdGg7XG5cbiAgICAgICAgaWYgKHRoaXMucGF0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBwYXRoXCIpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgaGFuZGxlRGF0YShjYWxsYmFjazogRGF0YUNhbGxiYWNrKSB7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPGJvb2xlYW4+KChyZXNvbHZlLCByZWplY3QpID0+IHtcblxuICAgICAgICAgICAgLy8gVE9ETzogaW4gdGhlIGZ1dHVyZSBtaWdyYXRlIHRvIGEgc3RyZWFtXG5cbiAgICAgICAgICAgIGZzLnJlYWRGaWxlKHRoaXMucGF0aCwgKGVycjogTm9kZUpTLkVycm5vRXhjZXB0aW9uIHwgbnVsbCwgZGF0YTogQnVmZmVyKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoZmFsc2UpO1xuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyB0b0J1ZmZlcigpOiBQcm9taXNlPEJ1ZmZlcj4ge1xuXG4gICAgICAgIC8vIFRPRE86IGluIHRoZSBmdXR1cmUgbWlncmF0ZSB0byBhIHN0cmVhbVxuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxCdWZmZXI+KChyZXNvbHZlLCByZWplY3QpID0+IHtcblxuICAgICAgICAgICBmcy5yZWFkRmlsZSh0aGlzLnBhdGgsIChlcnI6IEVycm5vRXhjZXB0aW9uIHwgbnVsbCwgZGF0YTogQnVmZmVyKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIHRvU3RyZWFtKCk6IFByb21pc2U8Tm9kZUpTLlJlYWRhYmxlU3RyZWFtPiB7XG4gICAgICAgIHJldHVybiBmcy5jcmVhdGVSZWFkU3RyZWFtKHRoaXMucGF0aCk7XG4gICAgfVxuXG59XG4iXX0=