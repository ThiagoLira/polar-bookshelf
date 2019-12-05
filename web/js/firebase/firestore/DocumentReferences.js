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
class DocumentReferences {
    static get(ref, opts = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const source = opts.source || 'default';
            if ('default' === source || 'server' === source || 'cache' === source) {
                return yield ref.get({ source });
            }
            else if (opts.source === 'cache-then-server') {
                return this.getWithOrder(ref, 'cache', 'server');
            }
            else if (opts.source === 'server-then-cache') {
                return this.getWithOrder(ref, 'cache', 'server');
            }
            else {
                throw new Error("Unable to fetch reference");
            }
        });
    }
    static getWithOrder(ref, primarySource, secondarySource) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ref.get({ source: primarySource });
            }
            catch (err) {
                console.warn(`Unable to fetch from primary source ${primarySource} and reverting to secondary ${secondarySource}`);
                return yield ref.get({ source: secondarySource });
            }
        });
    }
}
exports.DocumentReferences = DocumentReferences;
class CacheFirstThenServerGetOptions {
    constructor() {
        this.source = 'cache-then-server';
    }
}
exports.CacheFirstThenServerGetOptions = CacheFirstThenServerGetOptions;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jdW1lbnRSZWZlcmVuY2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRG9jdW1lbnRSZWZlcmVuY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBR0EsTUFBYSxrQkFBa0I7SUFNcEIsTUFBTSxDQUFPLEdBQUcsQ0FBQyxHQUFzQixFQUFFLE9BQW1CLEVBQUU7O1lBRWpFLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksU0FBUyxDQUFDO1lBRXhDLElBQUksU0FBUyxLQUFLLE1BQU0sSUFBSSxRQUFRLEtBQUssTUFBTSxJQUFJLE9BQU8sS0FBSyxNQUFNLEVBQUU7Z0JBQ25FLE9BQU8sTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQzthQUNsQztpQkFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssbUJBQW1CLEVBQUU7Z0JBQzVDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO2FBQ3BEO2lCQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxtQkFBbUIsRUFBRTtnQkFDNUMsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7YUFDcEQ7aUJBQU07Z0JBQ0gsTUFBTSxJQUFJLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO2FBQ2hEO1FBRUwsQ0FBQztLQUFBO0lBRU8sTUFBTSxDQUFPLFlBQVksQ0FBQyxHQUFzQixFQUN0QixhQUEyQixFQUMzQixlQUE2Qjs7WUFFM0QsSUFBSTtnQkFDQSxPQUFPLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFDLE1BQU0sRUFBRSxhQUFhLEVBQUMsQ0FBQyxDQUFDO2FBQ2pEO1lBQUMsT0FBTyxHQUFHLEVBQUU7Z0JBR1YsT0FBTyxDQUFDLElBQUksQ0FBQyx1Q0FBdUMsYUFBYSwrQkFBK0IsZUFBZSxFQUFFLENBQUMsQ0FBQztnQkFDbkgsT0FBTyxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBQyxNQUFNLEVBQUUsZUFBZSxFQUFDLENBQUMsQ0FBQzthQUVuRDtRQUVMLENBQUM7S0FBQTtDQUVKO0FBdENELGdEQXNDQztBQW1DRCxNQUFhLDhCQUE4QjtJQUEzQztRQUNvQixXQUFNLEdBQWMsbUJBQW1CLENBQUM7SUFDNUQsQ0FBQztDQUFBO0FBRkQsd0VBRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBmaXJlYmFzZSBmcm9tICcuLi9saWIvZmlyZWJhc2UnO1xuaW1wb3J0IERvY3VtZW50UmVmZXJlbmNlID0gZmlyZWJhc2UuZmlyZXN0b3JlLkRvY3VtZW50UmVmZXJlbmNlO1xuXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRSZWZlcmVuY2VzIHtcblxuICAgIC8qKlxuICAgICAqIFNtYXJ0ZXIgZ2V0IHNlbWFudGljcyB3aXRoIGEgcHJlZmVyZW5jZSBidXQgd2UgZmFpbCBvdmVyIHRvIHRoZSBzZXJ2ZXJcbiAgICAgKiBpZiB0aGUgY2FjaGUgaXNuJ3QgYXZhaWxhYmxlLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgZ2V0KHJlZjogRG9jdW1lbnRSZWZlcmVuY2UsIG9wdHM6IEdldE9wdGlvbnMgPSB7fSkgICB7XG5cbiAgICAgICAgY29uc3Qgc291cmNlID0gb3B0cy5zb3VyY2UgfHwgJ2RlZmF1bHQnO1xuXG4gICAgICAgIGlmICgnZGVmYXVsdCcgPT09IHNvdXJjZSB8fCAnc2VydmVyJyA9PT0gc291cmNlIHx8ICdjYWNoZScgPT09IHNvdXJjZSkge1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHJlZi5nZXQoe3NvdXJjZX0pO1xuICAgICAgICB9IGVsc2UgaWYgKG9wdHMuc291cmNlID09PSAnY2FjaGUtdGhlbi1zZXJ2ZXInKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRXaXRoT3JkZXIocmVmLCAnY2FjaGUnLCAnc2VydmVyJyk7XG4gICAgICAgIH0gZWxzZSBpZiAob3B0cy5zb3VyY2UgPT09ICdzZXJ2ZXItdGhlbi1jYWNoZScpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFdpdGhPcmRlcihyZWYsICdjYWNoZScsICdzZXJ2ZXInKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuYWJsZSB0byBmZXRjaCByZWZlcmVuY2VcIik7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGFzeW5jIGdldFdpdGhPcmRlcihyZWY6IERvY3VtZW50UmVmZXJlbmNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmltYXJ5U291cmNlOiBEaXJlY3RTb3VyY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlY29uZGFyeVNvdXJjZTogRGlyZWN0U291cmNlKSB7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCByZWYuZ2V0KHtzb3VyY2U6IHByaW1hcnlTb3VyY2V9KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAvLyBUT0RPOiB3ZSBoYXZlIHRvIHNlZSBpZiB0aGlzIGlzIHRoZSBQUk9QRVIgZXJyb3IgZm9yIGEgbWlzc2luZyBjYWNoZVxuICAgICAgICAgICAgLy8gZW50cnlcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgVW5hYmxlIHRvIGZldGNoIGZyb20gcHJpbWFyeSBzb3VyY2UgJHtwcmltYXJ5U291cmNlfSBhbmQgcmV2ZXJ0aW5nIHRvIHNlY29uZGFyeSAke3NlY29uZGFyeVNvdXJjZX1gKTtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCByZWYuZ2V0KHtzb3VyY2U6IHNlY29uZGFyeVNvdXJjZX0pO1xuXG4gICAgICAgIH1cblxuICAgIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdldE9wdGlvbnMge1xuXG4gICAgLyoqXG4gICAgICogRGVzY3JpYmVzIHdoZXRoZXIgd2Ugc2hvdWxkIGdldCBmcm9tIHNlcnZlciBvciBjYWNoZS5cbiAgICAgKlxuICAgICAqIFNldHRpbmcgdG8gYGRlZmF1bHRgIChvciBub3Qgc2V0dGluZyBhdCBhbGwpLCBjYXVzZXMgRmlyZXN0b3JlIHRvIHRyeSB0b1xuICAgICAqIHJldHJpZXZlIGFuIHVwLXRvLWRhdGUgKHNlcnZlci1yZXRyaWV2ZWQpIHNuYXBzaG90LCBidXQgZmFsbCBiYWNrIHRvXG4gICAgICogcmV0dXJuaW5nIGNhY2hlZCBkYXRhIGlmIHRoZSBzZXJ2ZXIgY2FuJ3QgYmUgcmVhY2hlZC5cbiAgICAgKlxuICAgICAqIFNldHRpbmcgdG8gYHNlcnZlcmAgY2F1c2VzIEZpcmVzdG9yZSB0byBhdm9pZCB0aGUgY2FjaGUsIGdlbmVyYXRpbmcgYW5cbiAgICAgKiBlcnJvciBpZiB0aGUgc2VydmVyIGNhbm5vdCBiZSByZWFjaGVkLiBOb3RlIHRoYXQgdGhlIGNhY2hlIHdpbGwgc3RpbGwgYmVcbiAgICAgKiB1cGRhdGVkIGlmIHRoZSBzZXJ2ZXIgcmVxdWVzdCBzdWNjZWVkcy4gQWxzbyBub3RlIHRoYXQgbGF0ZW5jeS1jb21wZW5zYXRpb25cbiAgICAgKiBzdGlsbCB0YWtlcyBlZmZlY3QsIHNvIGFueSBwZW5kaW5nIHdyaXRlIG9wZXJhdGlvbnMgd2lsbCBiZSB2aXNpYmxlIGluIHRoZVxuICAgICAqIHJldHVybmVkIGRhdGEgKG1lcmdlZCBpbnRvIHRoZSBzZXJ2ZXItcHJvdmlkZWQgZGF0YSkuXG4gICAgICpcbiAgICAgKiBTZXR0aW5nIHRvIGBjYWNoZWAgY2F1c2VzIEZpcmVzdG9yZSB0byBpbW1lZGlhdGVseSByZXR1cm4gYSB2YWx1ZSBmcm9tIHRoZVxuICAgICAqIGNhY2hlLCBpZ25vcmluZyB0aGUgc2VydmVyIGNvbXBsZXRlbHkgKGltcGx5aW5nIHRoYXQgdGhlIHJldHVybmVkIHZhbHVlXG4gICAgICogbWF5IGJlIHN0YWxlIHdpdGggcmVzcGVjdCB0byB0aGUgdmFsdWUgb24gdGhlIHNlcnZlci4pIElmIHRoZXJlIGlzIG5vIGRhdGFcbiAgICAgKiBpbiB0aGUgY2FjaGUgdG8gc2F0aXNmeSB0aGUgYGdldCgpYCBjYWxsLCBgRG9jdW1lbnRSZWZlcmVuY2UuZ2V0KClgIHdpbGxcbiAgICAgKiByZXR1cm4gYW4gZXJyb3IgYW5kIGBRdWVyeVNuYXBzaG90LmdldCgpYCB3aWxsIHJldHVybiBhbiBlbXB0eVxuICAgICAqIGBRdWVyeVNuYXBzaG90YCB3aXRoIG5vIGRvY3VtZW50cy5cbiAgICAgKlxuICAgICAqIGNhY2hlLXRoZW4tc2VydmVyOiBmaXJzdCB3ZSBmZXRjaCBmcm9tIHRoZSBjYWNoZSB0aGVuIHdlIGF0dGVtcHQgdGhlIHNlcnZlci5cbiAgICAgKlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNvdXJjZT86IEdldFNvdXJjZTtcblxufVxuXG5leHBvcnQgdHlwZSBEaXJlY3RTb3VyY2UgPSAnc2VydmVyJyAgfCAnY2FjaGUnO1xuXG5leHBvcnQgdHlwZSBHZXRTb3VyY2UgPSAnZGVmYXVsdCcgfCBEaXJlY3RTb3VyY2UgfCAnY2FjaGUtdGhlbi1zZXJ2ZXInIHwgJ3NlcnZlci10aGVuLWNhY2hlJztcblxuZXhwb3J0IGNsYXNzIENhY2hlRmlyc3RUaGVuU2VydmVyR2V0T3B0aW9ucyBpbXBsZW1lbnRzIEdldE9wdGlvbnMge1xuICAgIHB1YmxpYyByZWFkb25seSBzb3VyY2U6IEdldFNvdXJjZSA9ICdjYWNoZS10aGVuLXNlcnZlcic7XG59XG4iXX0=