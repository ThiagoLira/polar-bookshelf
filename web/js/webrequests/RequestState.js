"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Logger_1 = require("polar-shared/src/logger/Logger");
const log = Logger_1.Logger.create();
class RequestState {
    constructor() {
        this.map = {};
        log.info("Tracking request state...");
    }
    markStarted(id, url, eventName) {
        const requestEntry = { id, url, state: 'STARTED', eventName };
        if (id in this.map) {
            const existing = this.map[id];
            log.warn(`Request was started but already present in map for event: ${existing.eventName}`, existing);
            return;
        }
        this.map[id] = requestEntry;
    }
    markFinished(id, url, eventName) {
        const requestEntry = { id, url, state: 'FINISHED', eventName };
        if (!(id in this.map)) {
            log.warn("Request was marked finished but never marked started.");
            return;
        }
        if (this.map[id].state !== 'STARTED') {
            const existing = this.map[id];
            log.warn(`Request was marked finished but is not currently started: `, existing);
            return;
        }
        this.map[id] = requestEntry;
    }
}
exports.RequestState = RequestState;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVxdWVzdFN0YXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUmVxdWVzdFN0YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkRBQXNEO0FBRXRELE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQU01QixNQUFhLFlBQVk7SUFJckI7UUFGaUIsUUFBRyxHQUFrQyxFQUFFLENBQUM7UUFHckQsR0FBRyxDQUFDLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFJTSxXQUFXLENBQUMsRUFBVSxFQUFFLEdBQVcsRUFBRSxTQUFpQjtRQUV6RCxNQUFNLFlBQVksR0FBa0IsRUFBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFDLENBQUM7UUFFM0UsSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNoQixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzlCLEdBQUcsQ0FBQyxJQUFJLENBQUMsNkRBQTZELFFBQVEsQ0FBQyxTQUFTLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUN0RyxPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFlBQVksQ0FBQztJQUVoQyxDQUFDO0lBRU0sWUFBWSxDQUFDLEVBQVUsRUFBRSxHQUFXLEVBQUUsU0FBaUI7UUFFMUQsTUFBTSxZQUFZLEdBQWtCLEVBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBQyxDQUFDO1FBRTVFLElBQUksQ0FBRSxDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDcEIsR0FBRyxDQUFDLElBQUksQ0FBQyx1REFBdUQsQ0FBQyxDQUFDO1lBQ2xFLE9BQU87U0FDVjtRQUVELElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ2xDLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDOUIsR0FBRyxDQUFDLElBQUksQ0FBQyw0REFBNEQsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUNqRixPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFlBQVksQ0FBQztJQUVoQyxDQUFDO0NBRUo7QUEzQ0Qsb0NBMkNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtMb2dnZXJ9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbG9nZ2VyL0xvZ2dlcic7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuLyoqXG4gKiBLZWVwIGFuIGluZGV4IG9mIHRoZSByZXF1ZXN0cyB0aGF0IGFyZSBleGVjdXRpbmcgc28gdGhhdCB3ZSBjYW4gZGV0ZWN0XG4gKiBwcm9ibGVtcyB3aXRoIHBlbmRpbmcgVVJMcy5cbiAqL1xuZXhwb3J0IGNsYXNzIFJlcXVlc3RTdGF0ZSB7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IG1hcDoge1tpZDogbnVtYmVyXTogSVJlcXVlc3RFbnRyeX0gPSB7fTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBsb2cuaW5mbyhcIlRyYWNraW5nIHJlcXVlc3Qgc3RhdGUuLi5cIik7XG4gICAgfVxuXG4gICAgLy8gY2hlY2sgZm9yIGRvdWJsZSBzdGFydGVkIGFuZCBkb3VibGUgZmluaXNoZWQgdG9vLi5cblxuICAgIHB1YmxpYyBtYXJrU3RhcnRlZChpZDogbnVtYmVyLCB1cmw6IHN0cmluZywgZXZlbnROYW1lOiBzdHJpbmcpIHtcblxuICAgICAgICBjb25zdCByZXF1ZXN0RW50cnk6IElSZXF1ZXN0RW50cnkgPSB7aWQsIHVybCwgc3RhdGU6ICdTVEFSVEVEJywgZXZlbnROYW1lfTtcblxuICAgICAgICBpZiAoaWQgaW4gdGhpcy5tYXApIHtcbiAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nID0gdGhpcy5tYXBbaWRdO1xuICAgICAgICAgICAgbG9nLndhcm4oYFJlcXVlc3Qgd2FzIHN0YXJ0ZWQgYnV0IGFscmVhZHkgcHJlc2VudCBpbiBtYXAgZm9yIGV2ZW50OiAke2V4aXN0aW5nLmV2ZW50TmFtZX1gLCBleGlzdGluZyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm1hcFtpZF0gPSByZXF1ZXN0RW50cnk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgbWFya0ZpbmlzaGVkKGlkOiBudW1iZXIsIHVybDogc3RyaW5nLCBldmVudE5hbWU6IHN0cmluZykge1xuXG4gICAgICAgIGNvbnN0IHJlcXVlc3RFbnRyeTogSVJlcXVlc3RFbnRyeSA9IHtpZCwgdXJsLCBzdGF0ZTogJ0ZJTklTSEVEJywgZXZlbnROYW1lfTtcblxuICAgICAgICBpZiAoISAoaWQgaW4gdGhpcy5tYXApKSB7XG4gICAgICAgICAgICBsb2cud2FybihcIlJlcXVlc3Qgd2FzIG1hcmtlZCBmaW5pc2hlZCBidXQgbmV2ZXIgbWFya2VkIHN0YXJ0ZWQuXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubWFwW2lkXS5zdGF0ZSAhPT0gJ1NUQVJURUQnKSB7XG4gICAgICAgICAgICBjb25zdCBleGlzdGluZyA9IHRoaXMubWFwW2lkXTtcbiAgICAgICAgICAgIGxvZy53YXJuKGBSZXF1ZXN0IHdhcyBtYXJrZWQgZmluaXNoZWQgYnV0IGlzIG5vdCBjdXJyZW50bHkgc3RhcnRlZDogYCwgZXhpc3RpbmcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5tYXBbaWRdID0gcmVxdWVzdEVudHJ5O1xuXG4gICAgfVxuXG59XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIHJlcXVlc3Qgc3RvcmVkIGluIHRoZSBiYWNraW5nIG1hcC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJUmVxdWVzdEVudHJ5IHtcblxuICAgIHJlYWRvbmx5IGlkOiBudW1iZXI7XG4gICAgcmVhZG9ubHkgdXJsOiBzdHJpbmc7XG4gICAgcmVhZG9ubHkgc3RhdGU6ICdTVEFSVEVEJyB8ICdGSU5JU0hFRCc7XG4gICAgcmVhZG9ubHkgZXZlbnROYW1lOiBzdHJpbmc7XG5cbn1cbiJdfQ==