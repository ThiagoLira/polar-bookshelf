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
const CacheEntriesHolder_1 = require("./CacheEntriesHolder");
const DiskCacheEntry_1 = require("./DiskCacheEntry");
const PHZCacheEntry_1 = require("./PHZCacheEntry");
const CachingPHZReader_1 = require("../../phz/CachingPHZReader");
const fs_1 = __importDefault(require("fs"));
const Dictionaries_1 = require("polar-shared/src/util/Dictionaries");
class CacheEntriesFactory {
    static createEntriesFromFile(path) {
        return __awaiter(this, void 0, void 0, function* () {
            if (path.endsWith(".chtml")) {
                return CacheEntriesFactory.createFromCHTML(path);
            }
            else if (path.endsWith(".phz")) {
                return CacheEntriesFactory.createFromPHZ(path);
            }
            else {
                throw new Error("Unable to handle file type for path: " + path);
            }
        });
    }
    static createFromHTML(url, path) {
        return new DiskCacheEntry_1.DiskCacheEntry({
            url,
            method: "GET",
            headers: {
                "Content-Type": "text/html"
            },
            statusCode: 200,
            statusMessage: "OK",
            path
        });
    }
    static createFromPHZ(path) {
        return __awaiter(this, void 0, void 0, function* () {
            const cachingPHZReader = new CachingPHZReader_1.CachingPHZReader(path);
            const resources = yield cachingPHZReader.getResources();
            const cacheEntriesHolder = new CacheEntriesHolder_1.CacheEntriesHolder({});
            cacheEntriesHolder.metadata = yield cachingPHZReader.getMetadata();
            Dictionaries_1.Dictionaries.forDict(resources.entries, (key, resourceEntry) => {
                const resource = resourceEntry.resource;
                const url = resourceEntry.resource.url;
                if (!url) {
                    throw new Error("No url");
                }
                const cacheEntry = new PHZCacheEntry_1.PHZCacheEntry({
                    url,
                    method: resource.method,
                    headers: resource.headers,
                    statusCode: resource.statusCode,
                    statusMessage: resource.statusMessage || "OK",
                    contentType: resource.contentType,
                    docTypeFormat: resource.docTypeFormat,
                    mimeType: resource.encoding,
                    encoding: resource.encoding,
                    phzReader: cachingPHZReader,
                    resourceEntry
                });
                cacheEntriesHolder.cacheEntries[url] = cacheEntry;
            });
            return cacheEntriesHolder;
        });
    }
    static createFromCHTML(path) {
        return __awaiter(this, void 0, void 0, function* () {
            const jsonPath = path.replace(".chtml", "") + ".json";
            const json = fs_1.default.readFileSync(jsonPath);
            const data = JSON.parse(json.toString("UTF-8"));
            let url = data.url;
            url = url.replace(/^https:/, "http:");
            return new CacheEntriesHolder_1.CacheEntriesHolder({
                metadata: {
                    url
                },
                cacheEntries: {
                    url: new DiskCacheEntry_1.DiskCacheEntry({
                        url,
                        method: "GET",
                        headers: {
                            "Content-Type": "text/html"
                        },
                        statusCode: 200,
                        statusMessage: "OK",
                        path
                    })
                }
            });
        });
    }
}
exports.CacheEntriesFactory = CacheEntriesFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FjaGVFbnRyaWVzRmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNhY2hlRW50cmllc0ZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQSw2REFBd0Q7QUFDeEQscURBQWdEO0FBQ2hELG1EQUE4QztBQUM5QyxpRUFBNEQ7QUFFNUQsNENBQW9CO0FBQ3BCLHFFQUFnRTtBQUtoRSxNQUFhLG1CQUFtQjtJQU1yQixNQUFNLENBQU8scUJBQXFCLENBQUMsSUFBWTs7WUFFbEQsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUN6QixPQUFPLG1CQUFtQixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNwRDtpQkFBTSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQzlCLE9BQU8sbUJBQW1CLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2xEO2lCQUFNO2dCQUNILE1BQU0sSUFBSSxLQUFLLENBQUMsdUNBQXVDLEdBQUcsSUFBSSxDQUFDLENBQUM7YUFDbkU7UUFFTCxDQUFDO0tBQUE7SUFFTSxNQUFNLENBQUMsY0FBYyxDQUFDLEdBQVcsRUFBRSxJQUFZO1FBSWxELE9BQU8sSUFBSSwrQkFBYyxDQUFDO1lBQ3RCLEdBQUc7WUFDSCxNQUFNLEVBQUUsS0FBSztZQUNiLE9BQU8sRUFBRTtnQkFDTCxjQUFjLEVBQUUsV0FBVzthQUM5QjtZQUNELFVBQVUsRUFBRSxHQUFHO1lBQ2YsYUFBYSxFQUFFLElBQUk7WUFDbkIsSUFBSTtTQUNQLENBQUMsQ0FBQztJQUVQLENBQUM7SUFRTSxNQUFNLENBQU8sYUFBYSxDQUFDLElBQVk7O1lBSTFDLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxtQ0FBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUVwRCxNQUFNLFNBQVMsR0FBRyxNQUFNLGdCQUFnQixDQUFDLFlBQVksRUFBRSxDQUFDO1lBRXhELE1BQU0sa0JBQWtCLEdBQUcsSUFBSSx1Q0FBa0IsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUV0RCxrQkFBa0IsQ0FBQyxRQUFRLEdBQUcsTUFBTSxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUVuRSwyQkFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUMsR0FBRyxFQUFFLGFBQWEsRUFBRSxFQUFFO2dCQUUzRCxNQUFNLFFBQVEsR0FBRyxhQUFhLENBQUMsUUFBUSxDQUFDO2dCQUV4QyxNQUFNLEdBQUcsR0FBRyxhQUFhLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQztnQkFFdkMsSUFBSSxDQUFDLEdBQUcsRUFBRTtvQkFDTixNQUFNLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUM3QjtnQkFNRCxNQUFNLFVBQVUsR0FBRyxJQUFJLDZCQUFhLENBQUM7b0JBQ2pDLEdBQUc7b0JBQ0gsTUFBTSxFQUFFLFFBQVEsQ0FBQyxNQUFNO29CQUN2QixPQUFPLEVBQUUsUUFBUSxDQUFDLE9BQU87b0JBQ3pCLFVBQVUsRUFBRSxRQUFRLENBQUMsVUFBVTtvQkFDL0IsYUFBYSxFQUFFLFFBQVEsQ0FBQyxhQUFhLElBQUksSUFBSTtvQkFDN0MsV0FBVyxFQUFFLFFBQVEsQ0FBQyxXQUFXO29CQUNqQyxhQUFhLEVBQUUsUUFBUSxDQUFDLGFBQWE7b0JBQ3JDLFFBQVEsRUFBRSxRQUFRLENBQUMsUUFBUTtvQkFDM0IsUUFBUSxFQUFFLFFBQVEsQ0FBQyxRQUFRO29CQUMzQixTQUFTLEVBQUUsZ0JBQWdCO29CQUMzQixhQUFhO2lCQUNoQixDQUFDLENBQUM7Z0JBRUgsa0JBQWtCLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFVBQVUsQ0FBQztZQUV0RCxDQUFDLENBQUMsQ0FBQztZQUVILE9BQU8sa0JBQWtCLENBQUM7UUFFOUIsQ0FBQztLQUFBO0lBU00sTUFBTSxDQUFPLGVBQWUsQ0FBQyxJQUFZOztZQUk1QyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUM7WUFFdEQsTUFBTSxJQUFJLEdBQUcsWUFBRSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUV2QyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUVoRCxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBR25CLEdBQUcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUl0QyxPQUFPLElBQUksdUNBQWtCLENBQUM7Z0JBQzFCLFFBQVEsRUFBRTtvQkFDTixHQUFHO2lCQUNOO2dCQUNELFlBQVksRUFBRTtvQkFDVixHQUFHLEVBQUUsSUFBSSwrQkFBYyxDQUFDO3dCQUNwQixHQUFHO3dCQUNILE1BQU0sRUFBRSxLQUFLO3dCQUNiLE9BQU8sRUFBRTs0QkFDTCxjQUFjLEVBQUUsV0FBVzt5QkFDOUI7d0JBQ0QsVUFBVSxFQUFFLEdBQUc7d0JBQ2YsYUFBYSxFQUFFLElBQUk7d0JBQ25CLElBQUk7cUJBQ1AsQ0FBQztpQkFDTDthQUNKLENBQUMsQ0FBQztRQUVQLENBQUM7S0FBQTtDQUVKO0FBcklELGtEQXFJQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Zm9yRGljdH0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL0Z1bmN0aW9ucyc7XG5pbXBvcnQge0NhY2hlRW50cmllc0hvbGRlcn0gZnJvbSAnLi9DYWNoZUVudHJpZXNIb2xkZXInO1xuaW1wb3J0IHtEaXNrQ2FjaGVFbnRyeX0gZnJvbSAnLi9EaXNrQ2FjaGVFbnRyeSc7XG5pbXBvcnQge1BIWkNhY2hlRW50cnl9IGZyb20gJy4vUEhaQ2FjaGVFbnRyeSc7XG5pbXBvcnQge0NhY2hpbmdQSFpSZWFkZXJ9IGZyb20gJy4uLy4uL3Boei9DYWNoaW5nUEhaUmVhZGVyJztcblxuaW1wb3J0IGZzIGZyb20gJ2ZzJztcbmltcG9ydCB7RGljdGlvbmFyaWVzfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvRGljdGlvbmFyaWVzJztcblxuLyoqXG4gKiBDYWNoZSBlbnRyeSB3aGljaCBpcyBqdXN0IGJ1ZmZlcmVkIGluIG1lbW9yeS5cbiAqL1xuZXhwb3J0IGNsYXNzIENhY2hlRW50cmllc0ZhY3Rvcnkge1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcGF0aFxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgY3JlYXRlRW50cmllc0Zyb21GaWxlKHBhdGg6IHN0cmluZyk6IFByb21pc2U8Q2FjaGVFbnRyaWVzSG9sZGVyPiB7XG5cbiAgICAgICAgaWYgKHBhdGguZW5kc1dpdGgoXCIuY2h0bWxcIikpIHtcbiAgICAgICAgICAgIHJldHVybiBDYWNoZUVudHJpZXNGYWN0b3J5LmNyZWF0ZUZyb21DSFRNTChwYXRoKTtcbiAgICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKFwiLnBoelwiKSkge1xuICAgICAgICAgICAgcmV0dXJuIENhY2hlRW50cmllc0ZhY3RvcnkuY3JlYXRlRnJvbVBIWihwYXRoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuYWJsZSB0byBoYW5kbGUgZmlsZSB0eXBlIGZvciBwYXRoOiBcIiArIHBhdGgpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZUZyb21IVE1MKHVybDogc3RyaW5nLCBwYXRoOiBzdHJpbmcpIHtcblxuICAgICAgICAvLyBUT0RPOiBzdGF0IHRoZSBmaWxlIHNvIHRoYXQgd2UgY2FuIGdldCB0aGUgQ29udGVudC1MZW5ndGhcblxuICAgICAgICByZXR1cm4gbmV3IERpc2tDYWNoZUVudHJ5KHtcbiAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcInRleHQvaHRtbFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3RhdHVzQ29kZTogMjAwLFxuICAgICAgICAgICAgc3RhdHVzTWVzc2FnZTogXCJPS1wiLFxuICAgICAgICAgICAgcGF0aFxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlYWQgZnJvbSBhIHN0YXRpYyBDSFRNTCBmaWxlIHdoaWNoIGhhcyB0aGUgVVJMIHdpdGhpbiB0aGUgbWV0YWRhdGEuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcGF0aFxuICAgICAqIEByZXR1cm4gUHJvbWlzZTxDYWNoZUVudHJpZXNIb2xkZXI+XG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBjcmVhdGVGcm9tUEhaKHBhdGg6IHN0cmluZykge1xuXG4gICAgICAgIC8vIGxvYWQgdGhlIC5qc29uIGRhdGEgc28gd2UgaGF2ZSB0aGUgVVJMLlxuXG4gICAgICAgIGNvbnN0IGNhY2hpbmdQSFpSZWFkZXIgPSBuZXcgQ2FjaGluZ1BIWlJlYWRlcihwYXRoKTtcblxuICAgICAgICBjb25zdCByZXNvdXJjZXMgPSBhd2FpdCBjYWNoaW5nUEhaUmVhZGVyLmdldFJlc291cmNlcygpO1xuXG4gICAgICAgIGNvbnN0IGNhY2hlRW50cmllc0hvbGRlciA9IG5ldyBDYWNoZUVudHJpZXNIb2xkZXIoe30pO1xuXG4gICAgICAgIGNhY2hlRW50cmllc0hvbGRlci5tZXRhZGF0YSA9IGF3YWl0IGNhY2hpbmdQSFpSZWFkZXIuZ2V0TWV0YWRhdGEoKTtcblxuICAgICAgICBEaWN0aW9uYXJpZXMuZm9yRGljdChyZXNvdXJjZXMuZW50cmllcywgKGtleSwgcmVzb3VyY2VFbnRyeSkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCByZXNvdXJjZSA9IHJlc291cmNlRW50cnkucmVzb3VyY2U7XG5cbiAgICAgICAgICAgIGNvbnN0IHVybCA9IHJlc291cmNlRW50cnkucmVzb3VyY2UudXJsO1xuXG4gICAgICAgICAgICBpZiAoIXVybCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHVybFwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gVE9ETzogd2UgbmVlZCBhIHdheSB0byBrZWVwIHRoZSBDYWNoZUVudHJ5IGFuZCBSZXNvdXJjZSBmaWVsZHNcbiAgICAgICAgICAgIC8vIGFsbCBpbiBzeW5jLi4uIE1heWJlIGhhdmUgdGhlbSBhbGwgZXh0ZW5kIGZyb20gdGhlIHNhbWUgYmFzZVxuICAgICAgICAgICAgLy8gb2JqZWN0XG5cbiAgICAgICAgICAgIGNvbnN0IGNhY2hlRW50cnkgPSBuZXcgUEhaQ2FjaGVFbnRyeSh7XG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIG1ldGhvZDogcmVzb3VyY2UubWV0aG9kLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHJlc291cmNlLmhlYWRlcnMsXG4gICAgICAgICAgICAgICAgc3RhdHVzQ29kZTogcmVzb3VyY2Uuc3RhdHVzQ29kZSxcbiAgICAgICAgICAgICAgICBzdGF0dXNNZXNzYWdlOiByZXNvdXJjZS5zdGF0dXNNZXNzYWdlIHx8IFwiT0tcIixcbiAgICAgICAgICAgICAgICBjb250ZW50VHlwZTogcmVzb3VyY2UuY29udGVudFR5cGUsXG4gICAgICAgICAgICAgICAgZG9jVHlwZUZvcm1hdDogcmVzb3VyY2UuZG9jVHlwZUZvcm1hdCxcbiAgICAgICAgICAgICAgICBtaW1lVHlwZTogcmVzb3VyY2UuZW5jb2RpbmcsXG4gICAgICAgICAgICAgICAgZW5jb2Rpbmc6IHJlc291cmNlLmVuY29kaW5nLFxuICAgICAgICAgICAgICAgIHBoelJlYWRlcjogY2FjaGluZ1BIWlJlYWRlcixcbiAgICAgICAgICAgICAgICByZXNvdXJjZUVudHJ5XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY2FjaGVFbnRyaWVzSG9sZGVyLmNhY2hlRW50cmllc1t1cmxdID0gY2FjaGVFbnRyeTtcblxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gY2FjaGVFbnRyaWVzSG9sZGVyO1xuXG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBSZWFkIGZyb20gYSBzdGF0aWMgQ0hUTUwgZmlsZSB3aGljaCBoYXMgdGhlIFVSTCB3aXRoaW4gdGhlIG1ldGFkYXRhLlxuICAgICAqXG4gICAgICogQHBhcmFtIHBhdGhcbiAgICAgKiBAcmV0dXJuIFByb21pc2U8Q2FjaGVFbnRyaWVzSG9sZGVyPlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgY3JlYXRlRnJvbUNIVE1MKHBhdGg6IHN0cmluZykge1xuXG4gICAgICAgIC8vIGxvYWQgdGhlIC5qc29uIGRhdGEgc28gd2UgaGF2ZSB0aGUgVVJMLlxuXG4gICAgICAgIGNvbnN0IGpzb25QYXRoID0gcGF0aC5yZXBsYWNlKFwiLmNodG1sXCIsIFwiXCIpICsgXCIuanNvblwiO1xuXG4gICAgICAgIGNvbnN0IGpzb24gPSBmcy5yZWFkRmlsZVN5bmMoanNvblBhdGgpO1xuXG4gICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGpzb24udG9TdHJpbmcoXCJVVEYtOFwiKSk7XG5cbiAgICAgICAgbGV0IHVybCA9IGRhdGEudXJsO1xuXG4gICAgICAgIC8vIHdlIGNhbid0IHNlcnZlIHRoaXMgdmlhIEhUVFBTLi4gb25seSBIVFRQIHdoaWNoIGlzIGNhY2hlZCBsb2NhbGx5LlxuICAgICAgICB1cmwgPSB1cmwucmVwbGFjZSgvXmh0dHBzOi8sIFwiaHR0cDpcIik7XG5cbiAgICAgICAgLy8gVE9ETzogc3RhdCB0aGUgZmlsZSBzbyB0aGF0IHdlIGNhbiBnZXQgdGhlIENvbnRlbnQtTGVuZ3RoXG5cbiAgICAgICAgcmV0dXJuIG5ldyBDYWNoZUVudHJpZXNIb2xkZXIoe1xuICAgICAgICAgICAgbWV0YWRhdGE6IHtcbiAgICAgICAgICAgICAgICB1cmxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjYWNoZUVudHJpZXM6IHtcbiAgICAgICAgICAgICAgICB1cmw6IG5ldyBEaXNrQ2FjaGVFbnRyeSh7XG4gICAgICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcInRleHQvaHRtbFwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1c0NvZGU6IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzTWVzc2FnZTogXCJPS1wiLFxuICAgICAgICAgICAgICAgICAgICBwYXRoXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbn1cbiJdfQ==