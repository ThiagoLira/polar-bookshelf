"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const SetArrays_1 = require("polar-shared/src/util/SetArrays");
const Dictionaries_1 = require("polar-shared/src/util/Dictionaries");
class BrowserWindowMeta {
    constructor() {
        this.tags = {};
    }
}
exports.BrowserWindowMeta = BrowserWindowMeta;
class DefaultLiveWindowsProvider {
    getLiveWindowIDs() {
        return electron_1.BrowserWindow.getAllWindows().map(current => current.id);
    }
}
exports.DefaultLiveWindowsProvider = DefaultLiveWindowsProvider;
class BrowserWindowRegistry {
    static get(id) {
        this.gc();
        return this.registry[`${id}`];
    }
    static tag(id, tags) {
        this.gc();
        if (!(id in this.registry)) {
            this.registry[`${id}`] = new BrowserWindowMeta();
        }
        const meta = this.registry[`${id}`];
        Dictionaries_1.Dictionaries.forDict(tags, (name, value) => {
            meta.tags[name] = value;
        });
    }
    static tagged(tag) {
        this.gc();
        const result = [];
        Dictionaries_1.Dictionaries.forDict(this.registry, (id, meta) => {
            if (meta.tags[tag.name] === tag.value) {
                result.push(parseInt(id));
            }
        });
        return result;
    }
    static dump() {
        return Object.freeze(Object.assign({}, this.registry));
    }
    static gc() {
        const registryKeys = Object.keys(this.registry);
        const liveWindowIDs = this.liveWindowsProvider.getLiveWindowIDs().map(current => current.toString());
        const allWindowIDs = SetArrays_1.SetArrays.union(registryKeys, liveWindowIDs);
        const keysToRemove = SetArrays_1.SetArrays.difference(allWindowIDs, liveWindowIDs);
        keysToRemove.forEach(current => delete this.registry[current]);
        return keysToRemove.map(current => parseInt(current));
    }
}
exports.BrowserWindowRegistry = BrowserWindowRegistry;
BrowserWindowRegistry.registry = {};
BrowserWindowRegistry.liveWindowsProvider = new DefaultLiveWindowsProvider();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnJvd3NlcldpbmRvd1JlZ2lzdHJ5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQnJvd3NlcldpbmRvd1JlZ2lzdHJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsdUNBQXVDO0FBQ3ZDLCtEQUEwRDtBQUMxRCxxRUFBZ0U7QUFFaEUsTUFBYSxpQkFBaUI7SUFBOUI7UUFLVyxTQUFJLEdBQVcsRUFBRSxDQUFDO0lBRTdCLENBQUM7Q0FBQTtBQVBELDhDQU9DO0FBV0QsTUFBYSwwQkFBMEI7SUFFNUIsZ0JBQWdCO1FBQ25CLE9BQU8sd0JBQWEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDcEUsQ0FBQztDQUVKO0FBTkQsZ0VBTUM7QUFXRCxNQUFhLHFCQUFxQjtJQWV2QixNQUFNLENBQUMsR0FBRyxDQUFDLEVBQU07UUFDcEIsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQ1YsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRU0sTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFNLEVBQUUsSUFBWTtRQUNsQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUM7UUFFVixJQUFJLENBQUUsQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLElBQUksaUJBQWlCLEVBQUUsQ0FBQztTQUNwRDtRQUVELE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRXBDLDJCQUFZLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUN2QyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7SUFLTSxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQXFCO1FBQ3RDLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUVWLE1BQU0sTUFBTSxHQUFTLEVBQUUsQ0FBQztRQUV4QiwyQkFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFO1lBRTdDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssRUFBRTtnQkFDbkMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUM3QjtRQUVMLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxNQUFNLENBQUM7SUFFbEIsQ0FBQztJQUtNLE1BQU0sQ0FBQyxJQUFJO1FBQ2QsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFTSxNQUFNLENBQUMsRUFBRTtRQUVaLE1BQU0sWUFBWSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2hELE1BQU0sYUFBYSxHQUNiLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFBO1FBRXBGLE1BQU0sWUFBWSxHQUFHLHFCQUFTLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxhQUFhLENBQUMsQ0FBQztRQUVsRSxNQUFNLFlBQVksR0FBRyxxQkFBUyxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFFdkUsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBRS9ELE9BQU8sWUFBWSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBRTFELENBQUM7O0FBNUVMLHNEQThFQztBQXpFa0IsOEJBQVEsR0FBc0MsRUFBRSxDQUFDO0FBRWpELHlDQUFtQixHQUF3QixJQUFJLDBCQUEwQixFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Jyb3dzZXJXaW5kb3d9IGZyb20gJ2VsZWN0cm9uJztcbmltcG9ydCB7U2V0QXJyYXlzfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvU2V0QXJyYXlzJztcbmltcG9ydCB7RGljdGlvbmFyaWVzfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvRGljdGlvbmFyaWVzJztcblxuZXhwb3J0IGNsYXNzIEJyb3dzZXJXaW5kb3dNZXRhIHtcblxuICAgIC8qKlxuICAgICAqIFNldCBvZiB0YWdzIGFzc29jaWF0ZWQgd2l0aCB0aGlzIHdpbmRvdy5cbiAgICAgKi9cbiAgICBwdWJsaWMgdGFnczogVGFnTWFwID0ge307XG5cbn1cblxuLyoqXG4gKiBHZXQgYSBsaXN0IG9mIElEcyBmb3IgbGl2ZSB3aW5kb3dzLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIExpdmVXaW5kb3dzUHJvdmlkZXIge1xuXG4gICAgZ2V0TGl2ZVdpbmRvd0lEcygpOiBJRFtdO1xuXG59XG5cbmV4cG9ydCBjbGFzcyBEZWZhdWx0TGl2ZVdpbmRvd3NQcm92aWRlciBpbXBsZW1lbnRzIExpdmVXaW5kb3dzUHJvdmlkZXIge1xuXG4gICAgcHVibGljIGdldExpdmVXaW5kb3dJRHMoKTogSURbXSB7XG4gICAgICAgIHJldHVybiBCcm93c2VyV2luZG93LmdldEFsbFdpbmRvd3MoKS5tYXAoY3VycmVudCA9PiBjdXJyZW50LmlkKTtcbiAgICB9XG5cbn1cblxuLyoqXG4gKiB0aGUgSUQgaWYgYSB3aW5kb3cuXG4gKi9cbmV4cG9ydCB0eXBlIElEID0gbnVtYmVyO1xuXG4vKipcbiAqIE1haW50YWlucyBhIHJlZ2lzdHJ5IG9mIEJyb3dzZXJXaW5kb3dzIChieSBJRCkgYW5kIG1ldGFkYXRhLiAgR0MgaXMgcGVyZm9ybWVkXG4gKiBlYWNoIHRpbWUgeW91IGFjY2VzcyB0aGUgbWV0YWRhdGEgc2luY2Ugd2luZG93cyBjYW4gY29tZSBhbmQgZ28uXG4gKi9cbmV4cG9ydCBjbGFzcyBCcm93c2VyV2luZG93UmVnaXN0cnkge1xuXG4gICAgLy8gbm90ZSB0aGF0IGludGVybmFsbHkgVHlwZXNjcmlwdCBtYXBzIHRoZSBudW1iZXJzIHRvIHN0cmluZ3MgYnV0IHRoaXNcbiAgICAvLyByZWFsbHkgYnJlYWtzIHRoZSBBUElzIGZvciBkZWFsaW5nIHdpdGggS2V5cyBzbyB3ZSdyZSBqdXN0IGdvaW5nIHRvXG4gICAgLy8gZ2l2ZSB1cCBhbmQgdXNlIGEgc3RyaW5nIGZvciBub3cuXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVnaXN0cnk6IHtbaWQ6IHN0cmluZ106IEJyb3dzZXJXaW5kb3dNZXRhfSA9IHt9O1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgbGl2ZVdpbmRvd3NQcm92aWRlcjogTGl2ZVdpbmRvd3NQcm92aWRlciA9IG5ldyBEZWZhdWx0TGl2ZVdpbmRvd3NQcm92aWRlcigpO1xuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBtZXRhZGF0YSBmb3IgYSBzcGVjaWZpYyBCcm93c2VyV2luZG93IGJ5IGlkLiAgWW91IGNhbiBhY2Nlc3MgdGhpc1xuICAgICAqIGJ5IEJyb3dzZXJXaW5kb3cuaWRcbiAgICAgKlxuICAgICAqIEBwYXJhbSBpZFxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0KGlkOiBJRCk6IEJyb3dzZXJXaW5kb3dNZXRhIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgdGhpcy5nYygpO1xuICAgICAgICByZXR1cm4gdGhpcy5yZWdpc3RyeVtgJHtpZH1gXTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHRhZyhpZDogSUQsIHRhZ3M6IFRhZ01hcCkge1xuICAgICAgICB0aGlzLmdjKCk7XG5cbiAgICAgICAgaWYgKCEgKGlkIGluIHRoaXMucmVnaXN0cnkpKSB7XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdHJ5W2Ake2lkfWBdID0gbmV3IEJyb3dzZXJXaW5kb3dNZXRhKCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtZXRhID0gdGhpcy5yZWdpc3RyeVtgJHtpZH1gXTtcblxuICAgICAgICBEaWN0aW9uYXJpZXMuZm9yRGljdCh0YWdzLCAobmFtZSwgdmFsdWUpID0+IHtcbiAgICAgICAgICAgIG1ldGEudGFnc1tuYW1lXSA9IHZhbHVlO1xuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpbmQgYSB3aW5kb3cgSUQgd2l0aCB0aGUgZ2l2ZW4gdGFnLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgdGFnZ2VkKHRhZzogQnJvd3NlcldpbmRvd1RhZyk6IElEW10ge1xuICAgICAgICB0aGlzLmdjKCk7XG5cbiAgICAgICAgY29uc3QgcmVzdWx0OiBJRFtdID0gW107XG5cbiAgICAgICAgRGljdGlvbmFyaWVzLmZvckRpY3QodGhpcy5yZWdpc3RyeSwgKGlkLCBtZXRhKSA9PiB7XG5cbiAgICAgICAgICAgIGlmIChtZXRhLnRhZ3NbdGFnLm5hbWVdID09PSB0YWcudmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChwYXJzZUludChpZCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgYSBjb3B5IG9mIHRoZSBjdXJyZW50IHJlZ2lzdHJ5LlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgZHVtcCgpOiBSZWFkb25seTx7W2lkOiBzdHJpbmddOiBCcm93c2VyV2luZG93TWV0YX0+IHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5mcmVlemUoT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5yZWdpc3RyeSkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2MoKSB7XG5cbiAgICAgICAgY29uc3QgcmVnaXN0cnlLZXlzID0gT2JqZWN0LmtleXModGhpcy5yZWdpc3RyeSk7XG4gICAgICAgIGNvbnN0IGxpdmVXaW5kb3dJRHNcbiAgICAgICAgICAgID0gdGhpcy5saXZlV2luZG93c1Byb3ZpZGVyLmdldExpdmVXaW5kb3dJRHMoKS5tYXAoY3VycmVudCA9PiBjdXJyZW50LnRvU3RyaW5nKCkpXG5cbiAgICAgICAgY29uc3QgYWxsV2luZG93SURzID0gU2V0QXJyYXlzLnVuaW9uKHJlZ2lzdHJ5S2V5cywgbGl2ZVdpbmRvd0lEcyk7XG5cbiAgICAgICAgY29uc3Qga2V5c1RvUmVtb3ZlID0gU2V0QXJyYXlzLmRpZmZlcmVuY2UoYWxsV2luZG93SURzLCBsaXZlV2luZG93SURzKTtcblxuICAgICAgICBrZXlzVG9SZW1vdmUuZm9yRWFjaChjdXJyZW50ID0+IGRlbGV0ZSB0aGlzLnJlZ2lzdHJ5W2N1cnJlbnRdKTtcblxuICAgICAgICByZXR1cm4ga2V5c1RvUmVtb3ZlLm1hcChjdXJyZW50ID0+IHBhcnNlSW50KGN1cnJlbnQpKTtcblxuICAgIH1cblxufVxuXG4vLyBub2luc3BlY3Rpb24gVHNMaW50XG5leHBvcnQgdHlwZSBUYWdNYXAgPSB7W25hbWU6IHN0cmluZ106IHN0cmluZ307XG5cbmV4cG9ydCBpbnRlcmZhY2UgQnJvd3NlcldpbmRvd1RhZyB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHZhbHVlOiBzdHJpbmc7XG59XG5cblxuXG5cbiJdfQ==