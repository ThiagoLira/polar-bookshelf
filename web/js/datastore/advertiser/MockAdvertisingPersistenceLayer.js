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
const AbstractAdvertisingPersistenceLayer_1 = require("./AbstractAdvertisingPersistenceLayer");
class MockAdvertisingPersistenceLayer extends AbstractAdvertisingPersistenceLayer_1.AbstractAdvertisingPersistenceLayer {
    constructor(persistenceLayer, noDispatchEvent = false) {
        super(persistenceLayer);
        this.id = 'mock';
        this.noDispatchEvent = noDispatchEvent;
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    stop() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    broadcastEvent(event) {
        if (this.noDispatchEvent) {
            return;
        }
        this.dispatchEvent(event);
    }
}
exports.MockAdvertisingPersistenceLayer = MockAdvertisingPersistenceLayer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9ja0FkdmVydGlzaW5nUGVyc2lzdGVuY2VMYXllci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIk1vY2tBZHZlcnRpc2luZ1BlcnNpc3RlbmNlTGF5ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFQSwrRkFBMEY7QUFPMUYsTUFBYSwrQkFDVCxTQUFRLHlFQUFtQztJQU8zQyxZQUFZLGdCQUFrQyxFQUFFLGtCQUEyQixLQUFLO1FBQzVFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBTFosT0FBRSxHQUF1QixNQUFNLENBQUM7UUFNNUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7SUFDM0MsQ0FBQztJQUVZLElBQUk7O1FBRWpCLENBQUM7S0FBQTtJQUVZLElBQUk7O1FBRWpCLENBQUM7S0FBQTtJQUVNLGNBQWMsQ0FBQyxLQUE0QjtRQUU5QyxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDdEIsT0FBTztTQUNWO1FBT0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QixDQUFDO0NBRUo7QUFuQ0QsMEVBbUNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQZXJzaXN0ZW5jZUxheWVyLCBQZXJzaXN0ZW5jZUxheWVySUR9IGZyb20gJy4uL1BlcnNpc3RlbmNlTGF5ZXInO1xuaW1wb3J0IHtMaXN0ZW5hYmxlUGVyc2lzdGVuY2VMYXllcn0gZnJvbSAnLi4vTGlzdGVuYWJsZVBlcnNpc3RlbmNlTGF5ZXInO1xuaW1wb3J0IHtBYnN0cmFjdEFkdmVydGlzaW5nUGVyc2lzdGVuY2VMYXllcn0gZnJvbSAnLi9BYnN0cmFjdEFkdmVydGlzaW5nUGVyc2lzdGVuY2VMYXllcic7XG5pbXBvcnQge1BlcnNpc3RlbmNlTGF5ZXJFdmVudH0gZnJvbSAnLi4vUGVyc2lzdGVuY2VMYXllckV2ZW50JztcblxuLyoqXG4gKiBBIFBlcnNpc3RlbmNlTGF5ZXIgdGhhdCBhbGxvd3MgdGhlIHVzZXIgdG8gcmVjZWl2ZSBhZHZlcnRpc2VtZW50cyByZWdhcmRpbmdcbiAqIHVwZGF0ZXMgdG8gdGhlIGludGVybmFsIGRhdGEuXG4gKi9cbmV4cG9ydCBjbGFzcyBNb2NrQWR2ZXJ0aXNpbmdQZXJzaXN0ZW5jZUxheWVyXG4gICAgZXh0ZW5kcyBBYnN0cmFjdEFkdmVydGlzaW5nUGVyc2lzdGVuY2VMYXllclxuICAgIGltcGxlbWVudHMgTGlzdGVuYWJsZVBlcnNpc3RlbmNlTGF5ZXIge1xuXG4gICAgcHVibGljIHJlYWRvbmx5IGlkOiBQZXJzaXN0ZW5jZUxheWVySUQgPSAnbW9jayc7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IG5vRGlzcGF0Y2hFdmVudDogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKHBlcnNpc3RlbmNlTGF5ZXI6IFBlcnNpc3RlbmNlTGF5ZXIsIG5vRGlzcGF0Y2hFdmVudDogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIHN1cGVyKHBlcnNpc3RlbmNlTGF5ZXIpO1xuICAgICAgICB0aGlzLm5vRGlzcGF0Y2hFdmVudCA9IG5vRGlzcGF0Y2hFdmVudDtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgaW5pdCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgLy8gbm9vcFxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBzdG9wKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICAvLyBub29wXG4gICAgfVxuXG4gICAgcHVibGljIGJyb2FkY2FzdEV2ZW50KGV2ZW50OiBQZXJzaXN0ZW5jZUxheWVyRXZlbnQpOiB2b2lkIHtcblxuICAgICAgICBpZiAodGhpcy5ub0Rpc3BhdGNoRXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE5PVEUgdGhhdCB0ZWNobmljYWxseSB0aGlzIHZpb2xhdGVzIG91ciBtYWluIGNvbnRyYWN0IHRoYXQgcGVyc2lzdGVuY2VcbiAgICAgICAgLy8gbGF5ZXJzIGRvbid0IHJlLW5vdGlmeSB0aGVtc2VsdmVzLiAgSSBuZWVkIHRvIHJldmlzaXQgdGhpcyBiZWNhdXNlXG4gICAgICAgIC8vIGl0IG1pZ2h0IG1ha2Ugc2Vuc2UgdG8gYWxsb3cgdGhlbSB0byBub3RpZnkgdGhlbXNlbHZlcyBidXQganVzdCBiZVxuICAgICAgICAvLyBjYXJlZnVsIG9yIGFkZCBhbm90aGVyIG1vZGUgJ3Byb21pc2N1b3VzJyB0byBzZWUgYWxsIGV2ZW50cy4gIE1heWJlXG4gICAgICAgIC8vIHRvIGJlIHNhZmUgYnkgZGVmYXVsdCBidXQgYWRkIGFub3RoZXIgbW9kZSBpZiBuZWNlc3NhcnkuXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgfVxuXG59XG4iXX0=