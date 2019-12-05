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
const DocInfoAdvertiser_1 = require("./DocInfoAdvertiser");
const DocInfoAdvertisementListenerService_1 = require("./DocInfoAdvertisementListenerService");
const AbstractAdvertisingPersistenceLayer_1 = require("./AbstractAdvertisingPersistenceLayer");
class AdvertisingPersistenceLayer extends AbstractAdvertisingPersistenceLayer_1.AbstractAdvertisingPersistenceLayer {
    constructor(delegate) {
        super(delegate);
        this.docInfoAdvertisementListenerService = new DocInfoAdvertisementListenerService_1.DocInfoAdvertisementListenerService();
        this.id = 'advertising';
    }
    init(errorListener, opts) {
        return __awaiter(this, void 0, void 0, function* () {
            this.docInfoAdvertisementListenerService
                .addEventListener((adv) => this.onDocInfoAdvertisement(adv));
            this.docInfoAdvertisementListenerService.start();
            yield this.delegate.init(errorListener, opts);
        });
    }
    stop() {
        return __awaiter(this, void 0, void 0, function* () {
            this.docInfoAdvertisementListenerService.stop();
            return this.delegate.stop();
        });
    }
    broadcastEvent(event) {
        DocInfoAdvertiser_1.DocInfoAdvertiser.send({
            docInfo: event.docInfo,
            advertisementType: event.eventType
        });
    }
    onDocInfoAdvertisement(docInfoAdvertisement) {
        this.dispatchEvent({
            docMetaRef: {
                fingerprint: docInfoAdvertisement.docInfo.fingerprint,
                filename: docInfoAdvertisement.docInfo.filename,
                docInfo: docInfoAdvertisement.docInfo
            },
            docInfo: docInfoAdvertisement.docInfo,
            eventType: docInfoAdvertisement.advertisementType
        });
    }
}
exports.AdvertisingPersistenceLayer = AdvertisingPersistenceLayer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWR2ZXJ0aXNpbmdQZXJzaXN0ZW5jZUxheWVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQWR2ZXJ0aXNpbmdQZXJzaXN0ZW5jZUxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRUEsMkRBQXNEO0FBQ3RELCtGQUEwRjtBQUkxRiwrRkFBMEY7QUFVMUYsTUFBYSwyQkFDVCxTQUFRLHlFQUFtQztJQU8zQyxZQUFZLFFBQTBCO1FBQ2xDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUxILHdDQUFtQyxHQUFHLElBQUkseUVBQW1DLEVBQUUsQ0FBQztRQUVqRixPQUFFLEdBQUcsYUFBYSxDQUFDO0lBSW5DLENBQUM7SUFFWSxJQUFJLENBQUMsYUFBNkIsRUFBRSxJQUF3Qjs7WUFFckUsSUFBSSxDQUFDLG1DQUFtQztpQkFDbkMsZ0JBQWdCLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBRWpFLElBQUksQ0FBQyxtQ0FBbUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUVqRCxNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVsRCxDQUFDO0tBQUE7SUFFWSxJQUFJOztZQUNiLElBQUksQ0FBQyxtQ0FBbUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNoRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDaEMsQ0FBQztLQUFBO0lBRVMsY0FBYyxDQUFDLEtBQTRCO1FBRWpELHFDQUFpQixDQUFDLElBQUksQ0FBQztZQUNuQixPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87WUFDdEIsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLFNBQVM7U0FDckMsQ0FBQyxDQUFDO0lBRVAsQ0FBQztJQUVPLHNCQUFzQixDQUFDLG9CQUEwQztRQUVyRSxJQUFJLENBQUMsYUFBYSxDQUFDO1lBRWhCLFVBQVUsRUFBZTtnQkFDckIsV0FBVyxFQUFFLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxXQUFXO2dCQUNyRCxRQUFRLEVBQUUsb0JBQW9CLENBQUMsT0FBTyxDQUFDLFFBQVE7Z0JBQy9DLE9BQU8sRUFBRSxvQkFBb0IsQ0FBQyxPQUFPO2FBQ3hDO1lBQ0QsT0FBTyxFQUFFLG9CQUFvQixDQUFDLE9BQU87WUFDckMsU0FBUyxFQUFFLG9CQUFvQixDQUFDLGlCQUFpQjtTQUVwRCxDQUFDLENBQUM7SUFFTixDQUFDO0NBRUo7QUFyREQsa0VBcURDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEb2NNZXRhUmVmfSBmcm9tICcuLi9Eb2NNZXRhUmVmJztcbmltcG9ydCB7RG9jSW5mb0FkdmVydGlzZW1lbnR9IGZyb20gJy4vRG9jSW5mb0FkdmVydGlzZW1lbnQnO1xuaW1wb3J0IHtEb2NJbmZvQWR2ZXJ0aXNlcn0gZnJvbSAnLi9Eb2NJbmZvQWR2ZXJ0aXNlcic7XG5pbXBvcnQge0RvY0luZm9BZHZlcnRpc2VtZW50TGlzdGVuZXJTZXJ2aWNlfSBmcm9tICcuL0RvY0luZm9BZHZlcnRpc2VtZW50TGlzdGVuZXJTZXJ2aWNlJztcbmltcG9ydCB7UGVyc2lzdGVuY2VMYXllckV2ZW50fSBmcm9tICcuLi9QZXJzaXN0ZW5jZUxheWVyRXZlbnQnO1xuaW1wb3J0IHtQZXJzaXN0ZW5jZUxheWVyfSBmcm9tICcuLi9QZXJzaXN0ZW5jZUxheWVyJztcbmltcG9ydCB7TGlzdGVuYWJsZVBlcnNpc3RlbmNlTGF5ZXJ9IGZyb20gJy4uL0xpc3RlbmFibGVQZXJzaXN0ZW5jZUxheWVyJztcbmltcG9ydCB7QWJzdHJhY3RBZHZlcnRpc2luZ1BlcnNpc3RlbmNlTGF5ZXJ9IGZyb20gJy4vQWJzdHJhY3RBZHZlcnRpc2luZ1BlcnNpc3RlbmNlTGF5ZXInO1xuaW1wb3J0IHtFcnJvckxpc3RlbmVyfSBmcm9tICcuLi9EYXRhc3RvcmUnO1xuaW1wb3J0IHtEYXRhc3RvcmVJbml0T3B0c30gZnJvbSAnLi4vRGF0YXN0b3JlJztcblxuLyoqXG4gKiBBIFBlcnNpc3RlbmNlTGF5ZXIgdGhhdCBhbGxvd3MgdGhlIHVzZXIgdG8gcmVjZWl2ZSBhZHZlcnRpc2VtZW50cyByZWdhcmRpbmdcbiAqIHVwZGF0ZXMgdG8gdGhlIFBlcnNpc3RlbmNlTGF5ZXIgZnJvbSBhbnkgd2luZG93IGluIHRoZSBzeXN0ZW0uXG4gKlxuICogQEVsZWN0cm9uUmVuZGVyZXJDb250ZXh0XG4gKi9cbmV4cG9ydCBjbGFzcyBBZHZlcnRpc2luZ1BlcnNpc3RlbmNlTGF5ZXJcbiAgICBleHRlbmRzIEFic3RyYWN0QWR2ZXJ0aXNpbmdQZXJzaXN0ZW5jZUxheWVyXG4gICAgaW1wbGVtZW50cyBMaXN0ZW5hYmxlUGVyc2lzdGVuY2VMYXllciB7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IGRvY0luZm9BZHZlcnRpc2VtZW50TGlzdGVuZXJTZXJ2aWNlID0gbmV3IERvY0luZm9BZHZlcnRpc2VtZW50TGlzdGVuZXJTZXJ2aWNlKCk7XG5cbiAgICBwdWJsaWMgcmVhZG9ubHkgaWQgPSAnYWR2ZXJ0aXNpbmcnO1xuXG4gICAgY29uc3RydWN0b3IoZGVsZWdhdGU6IFBlcnNpc3RlbmNlTGF5ZXIpIHtcbiAgICAgICAgc3VwZXIoZGVsZWdhdGUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBpbml0KGVycm9yTGlzdGVuZXI/OiBFcnJvckxpc3RlbmVyLCBvcHRzPzogRGF0YXN0b3JlSW5pdE9wdHMpOiBQcm9taXNlPHZvaWQ+IHtcblxuICAgICAgICB0aGlzLmRvY0luZm9BZHZlcnRpc2VtZW50TGlzdGVuZXJTZXJ2aWNlXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcigoYWR2KSA9PiB0aGlzLm9uRG9jSW5mb0FkdmVydGlzZW1lbnQoYWR2KSk7XG5cbiAgICAgICAgdGhpcy5kb2NJbmZvQWR2ZXJ0aXNlbWVudExpc3RlbmVyU2VydmljZS5zdGFydCgpO1xuXG4gICAgICAgIGF3YWl0IHRoaXMuZGVsZWdhdGUuaW5pdChlcnJvckxpc3RlbmVyLCBvcHRzKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBzdG9wKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICB0aGlzLmRvY0luZm9BZHZlcnRpc2VtZW50TGlzdGVuZXJTZXJ2aWNlLnN0b3AoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGVsZWdhdGUuc3RvcCgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBicm9hZGNhc3RFdmVudChldmVudDogUGVyc2lzdGVuY2VMYXllckV2ZW50KTogdm9pZCB7XG5cbiAgICAgICAgRG9jSW5mb0FkdmVydGlzZXIuc2VuZCh7XG4gICAgICAgICAgICBkb2NJbmZvOiBldmVudC5kb2NJbmZvLFxuICAgICAgICAgICAgYWR2ZXJ0aXNlbWVudFR5cGU6IGV2ZW50LmV2ZW50VHlwZVxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgb25Eb2NJbmZvQWR2ZXJ0aXNlbWVudChkb2NJbmZvQWR2ZXJ0aXNlbWVudDogRG9jSW5mb0FkdmVydGlzZW1lbnQpIHtcblxuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoe1xuXG4gICAgICAgICAgIGRvY01ldGFSZWY6IDxEb2NNZXRhUmVmPiB7XG4gICAgICAgICAgICAgICBmaW5nZXJwcmludDogZG9jSW5mb0FkdmVydGlzZW1lbnQuZG9jSW5mby5maW5nZXJwcmludCxcbiAgICAgICAgICAgICAgIGZpbGVuYW1lOiBkb2NJbmZvQWR2ZXJ0aXNlbWVudC5kb2NJbmZvLmZpbGVuYW1lLFxuICAgICAgICAgICAgICAgZG9jSW5mbzogZG9jSW5mb0FkdmVydGlzZW1lbnQuZG9jSW5mb1xuICAgICAgICAgICB9LFxuICAgICAgICAgICBkb2NJbmZvOiBkb2NJbmZvQWR2ZXJ0aXNlbWVudC5kb2NJbmZvLFxuICAgICAgICAgICBldmVudFR5cGU6IGRvY0luZm9BZHZlcnRpc2VtZW50LmFkdmVydGlzZW1lbnRUeXBlXG5cbiAgICAgICB9KTtcblxuICAgIH1cblxufVxuIl19