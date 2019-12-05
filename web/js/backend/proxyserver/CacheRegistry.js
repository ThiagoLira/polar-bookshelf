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
const Preconditions_1 = require("polar-shared/src/Preconditions");
const CachedRequestsHolder_1 = require("./CachedRequestsHolder");
const CachedRequest_1 = require("./CachedRequest");
const CacheEntriesFactory_1 = require("./CacheEntriesFactory");
const Functions_1 = require("polar-shared/src/util/Functions");
const Logger_1 = require("polar-shared/src/logger/Logger");
const log = Logger_1.Logger.create();
class CacheRegistry {
    constructor() {
        this.registry = {};
        this.registry = {};
    }
    registerFile(path) {
        return __awaiter(this, void 0, void 0, function* () {
            const cacheEntriesHolder = yield CacheEntriesFactory_1.CacheEntriesFactory.createEntriesFromFile(path);
            const cachedRequestsHolder = new CachedRequestsHolder_1.CachedRequestsHolder({
                metadata: cacheEntriesHolder.metadata
            });
            if (!cacheEntriesHolder.cacheEntries) {
                throw new Error("No cache entries!");
            }
            Functions_1.forDict(cacheEntriesHolder.cacheEntries, (key, cacheEntry) => {
                const cacheMeta = this.register(cacheEntry);
                cachedRequestsHolder.cachedRequests[cacheMeta.url] = cacheMeta;
            });
            return cachedRequestsHolder;
        });
    }
    register(cacheEntry) {
        Preconditions_1.Preconditions.assertNotNull(cacheEntry, "cacheEntry");
        Preconditions_1.Preconditions.assertNotNull(cacheEntry.statusCode, "cacheEntry.statusCode");
        Preconditions_1.Preconditions.assertNotNull(cacheEntry.headers, "cacheEntry.headers");
        const url = cacheEntry.url;
        Preconditions_1.Preconditions.assertNotNull(url, "url");
        log.info(`Registered new cache entry at: ${url}`);
        this.registry[url] = cacheEntry;
        return new CachedRequest_1.CachedRequest({
            url
        });
    }
    hasEntry(url) {
        return url in this.registry;
    }
    get(url) {
        if (!this.hasEntry(url)) {
            throw new Error("URL not registered: " + url);
        }
        return this.registry[url];
    }
}
exports.CacheRegistry = CacheRegistry;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FjaGVSZWdpc3RyeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNhY2hlUmVnaXN0cnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxrRUFBNkQ7QUFDN0QsaUVBQTREO0FBRTVELG1EQUE4QztBQUM5QywrREFBMEQ7QUFDMUQsK0RBQXdEO0FBQ3hELDJEQUFzRDtBQUV0RCxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFNUIsTUFBYSxhQUFhO0lBT3RCO1FBTGlCLGFBQVEsR0FBZ0MsRUFBRSxDQUFDO1FBTXhELElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFPWSxZQUFZLENBQUMsSUFBWTs7WUFFbEMsTUFBTSxrQkFBa0IsR0FBRyxNQUFNLHlDQUFtQixDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBRWpGLE1BQU0sb0JBQW9CLEdBQUcsSUFBSSwyQ0FBb0IsQ0FBQztnQkFDbEQsUUFBUSxFQUFFLGtCQUFrQixDQUFDLFFBQVE7YUFDeEMsQ0FBQyxDQUFDO1lBRUgsSUFBRyxDQUFFLGtCQUFrQixDQUFDLFlBQVksRUFBRTtnQkFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO2FBQ3hDO1lBRUQsbUJBQU8sQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxHQUFHLEVBQUUsVUFBVSxFQUFFLEVBQUU7Z0JBQ3pELE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQzVDLG9CQUFvQixDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDO1lBQ25FLENBQUMsQ0FBQyxDQUFDO1lBRUgsT0FBTyxvQkFBb0IsQ0FBQztRQUVoQyxDQUFDO0tBQUE7SUFTTSxRQUFRLENBQUMsVUFBc0I7UUFFbEMsNkJBQWEsQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ3RELDZCQUFhLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsdUJBQXVCLENBQUMsQ0FBQztRQUM1RSw2QkFBYSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLG9CQUFvQixDQUFDLENBQUM7UUFFdEUsTUFBTSxHQUFHLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQztRQUUzQiw2QkFBYSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFeEMsR0FBRyxDQUFDLElBQUksQ0FBQyxrQ0FBa0MsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUVsRCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFVBQVUsQ0FBQztRQUVoQyxPQUFPLElBQUksNkJBQWEsQ0FBQztZQUNyQixHQUFHO1NBQ04sQ0FBQyxDQUFDO0lBRVAsQ0FBQztJQU9NLFFBQVEsQ0FBQyxHQUFXO1FBQ3ZCLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDaEMsQ0FBQztJQU9NLEdBQUcsQ0FBQyxHQUFXO1FBRWxCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3JCLE1BQU0sSUFBSSxLQUFLLENBQUMsc0JBQXNCLEdBQUcsR0FBRyxDQUFDLENBQUM7U0FDakQ7UUFFRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFOUIsQ0FBQztDQUVKO0FBeEZELHNDQXdGQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UHJlY29uZGl0aW9uc30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9QcmVjb25kaXRpb25zJztcbmltcG9ydCB7Q2FjaGVkUmVxdWVzdHNIb2xkZXJ9IGZyb20gJy4vQ2FjaGVkUmVxdWVzdHNIb2xkZXInO1xuaW1wb3J0IHtDYWNoZUVudHJ5fSBmcm9tICcuL0NhY2hlRW50cnknO1xuaW1wb3J0IHtDYWNoZWRSZXF1ZXN0fSBmcm9tICcuL0NhY2hlZFJlcXVlc3QnO1xuaW1wb3J0IHtDYWNoZUVudHJpZXNGYWN0b3J5fSBmcm9tICcuL0NhY2hlRW50cmllc0ZhY3RvcnknO1xuaW1wb3J0IHtmb3JEaWN0fSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvRnVuY3Rpb25zJztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL2xvZ2dlci9Mb2dnZXInO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbmV4cG9ydCBjbGFzcyBDYWNoZVJlZ2lzdHJ5IHtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgcmVnaXN0cnk6IHtbdXJsOiBzdHJpbmddOiBDYWNoZUVudHJ5fSA9IHt9O1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5yZWdpc3RyeSA9IHt9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHBhdGhcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPENhY2hlZFJlcXVlc3RzSG9sZGVyPn1cbiAgICAgKi9cbiAgICBwdWJsaWMgYXN5bmMgcmVnaXN0ZXJGaWxlKHBhdGg6IHN0cmluZykge1xuXG4gICAgICAgIGNvbnN0IGNhY2hlRW50cmllc0hvbGRlciA9IGF3YWl0IENhY2hlRW50cmllc0ZhY3RvcnkuY3JlYXRlRW50cmllc0Zyb21GaWxlKHBhdGgpO1xuXG4gICAgICAgIGNvbnN0IGNhY2hlZFJlcXVlc3RzSG9sZGVyID0gbmV3IENhY2hlZFJlcXVlc3RzSG9sZGVyKHtcbiAgICAgICAgICAgIG1ldGFkYXRhOiBjYWNoZUVudHJpZXNIb2xkZXIubWV0YWRhdGFcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYoISBjYWNoZUVudHJpZXNIb2xkZXIuY2FjaGVFbnRyaWVzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBjYWNoZSBlbnRyaWVzIVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvckRpY3QoY2FjaGVFbnRyaWVzSG9sZGVyLmNhY2hlRW50cmllcywgKGtleSwgY2FjaGVFbnRyeSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2FjaGVNZXRhID0gdGhpcy5yZWdpc3RlcihjYWNoZUVudHJ5KTtcbiAgICAgICAgICAgIGNhY2hlZFJlcXVlc3RzSG9sZGVyLmNhY2hlZFJlcXVlc3RzW2NhY2hlTWV0YS51cmxdID0gY2FjaGVNZXRhO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gY2FjaGVkUmVxdWVzdHNIb2xkZXI7XG5cbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVyIGEgZmlsZSB0byBiZSBzZXJ2ZWQgd2l0aCB0aGUgZ2l2ZW4gY2hlY2tzdW0uICBUaGVuIHJldHVyblxuICAgICAqIG1ldGFkYXRhIGFib3V0IHdoYXQgd2UgcmVnaXN0ZXJlZCBpbmNsdWRpbmcgaG93IHRvIGZldGNoIHRoZSBmaWxlIHdlXG4gICAgICogcmVnaXN0ZXJlZC5cbiAgICAgKlxuICAgICAqL1xuICAgIHB1YmxpYyByZWdpc3RlcihjYWNoZUVudHJ5OiBDYWNoZUVudHJ5KSB7XG5cbiAgICAgICAgUHJlY29uZGl0aW9ucy5hc3NlcnROb3ROdWxsKGNhY2hlRW50cnksIFwiY2FjaGVFbnRyeVwiKTtcbiAgICAgICAgUHJlY29uZGl0aW9ucy5hc3NlcnROb3ROdWxsKGNhY2hlRW50cnkuc3RhdHVzQ29kZSwgXCJjYWNoZUVudHJ5LnN0YXR1c0NvZGVcIik7XG4gICAgICAgIFByZWNvbmRpdGlvbnMuYXNzZXJ0Tm90TnVsbChjYWNoZUVudHJ5LmhlYWRlcnMsIFwiY2FjaGVFbnRyeS5oZWFkZXJzXCIpO1xuXG4gICAgICAgIGNvbnN0IHVybCA9IGNhY2hlRW50cnkudXJsO1xuXG4gICAgICAgIFByZWNvbmRpdGlvbnMuYXNzZXJ0Tm90TnVsbCh1cmwsIFwidXJsXCIpO1xuXG4gICAgICAgIGxvZy5pbmZvKGBSZWdpc3RlcmVkIG5ldyBjYWNoZSBlbnRyeSBhdDogJHt1cmx9YCk7XG5cbiAgICAgICAgdGhpcy5yZWdpc3RyeVt1cmxdID0gY2FjaGVFbnRyeTtcblxuICAgICAgICByZXR1cm4gbmV3IENhY2hlZFJlcXVlc3Qoe1xuICAgICAgICAgICAgdXJsXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIHRydWUgaWYgdGhlIGdpdmVuIGhhc2hjb2RlIGlzIHJlZ2lzdGVyZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdXJsIFRoZSBrZXkgd2Ugc2hvdWxkIGZldGNoLlxuICAgICAqL1xuICAgIHB1YmxpYyBoYXNFbnRyeSh1cmw6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gdXJsIGluIHRoaXMucmVnaXN0cnk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IG1ldGFkYXRhIGFib3V0IHRoZSBnaXZlbiBrZXkuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtDYWNoZUVudHJ5fVxuICAgICAqL1xuICAgIHB1YmxpYyBnZXQodXJsOiBzdHJpbmcpOiBDYWNoZUVudHJ5IHtcblxuICAgICAgICBpZiAoIXRoaXMuaGFzRW50cnkodXJsKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVVJMIG5vdCByZWdpc3RlcmVkOiBcIiArIHVybCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5yZWdpc3RyeVt1cmxdO1xuXG4gICAgfVxuXG59XG4iXX0=