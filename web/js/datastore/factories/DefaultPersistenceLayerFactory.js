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
const DefaultPersistenceLayer_1 = require("../DefaultPersistenceLayer");
const Logger_1 = require("polar-shared/src/logger/Logger");
const Datastores_1 = require("../Datastores");
const AdvertisingPersistenceLayer_1 = require("../advertiser/AdvertisingPersistenceLayer");
const log = Logger_1.Logger.create();
class DefaultPersistenceLayerFactory {
    static create() {
        return __awaiter(this, void 0, void 0, function* () {
            log.info("Using persistence layer from renderer process.");
            const datastore = Datastores_1.Datastores.create();
            yield datastore.init();
            const defaultPersistenceLayer = new DefaultPersistenceLayer_1.DefaultPersistenceLayer(datastore);
            const advertisingPersistenceLayer = new AdvertisingPersistenceLayer_1.AdvertisingPersistenceLayer(defaultPersistenceLayer);
            yield advertisingPersistenceLayer.init();
            return advertisingPersistenceLayer;
        });
    }
}
exports.DefaultPersistenceLayerFactory = DefaultPersistenceLayerFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVmYXVsdFBlcnNpc3RlbmNlTGF5ZXJGYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRGVmYXVsdFBlcnNpc3RlbmNlTGF5ZXJGYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsd0VBQW1FO0FBQ25FLDJEQUFzRDtBQUN0RCw4Q0FBeUM7QUFDekMsMkZBQXNGO0FBR3RGLE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQU01QixNQUFhLDhCQUE4QjtJQUVoQyxNQUFNLENBQU8sTUFBTTs7WUFFdEIsR0FBRyxDQUFDLElBQUksQ0FBQyxnREFBZ0QsQ0FBQyxDQUFDO1lBRTNELE1BQU0sU0FBUyxHQUFHLHVCQUFVLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDdEMsTUFBTSxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7WUFFdkIsTUFBTSx1QkFBdUIsR0FBRyxJQUFJLGlEQUF1QixDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3ZFLE1BQU0sMkJBQTJCLEdBQUcsSUFBSSx5REFBMkIsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1lBRzdGLE1BQU0sMkJBQTJCLENBQUMsSUFBSSxFQUFFLENBQUM7WUFFekMsT0FBTywyQkFBMkIsQ0FBQztRQUV2QyxDQUFDO0tBQUE7Q0FFSjtBQW5CRCx3RUFtQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RlZmF1bHRQZXJzaXN0ZW5jZUxheWVyfSBmcm9tICcuLi9EZWZhdWx0UGVyc2lzdGVuY2VMYXllcic7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7RGF0YXN0b3Jlc30gZnJvbSAnLi4vRGF0YXN0b3Jlcyc7XG5pbXBvcnQge0FkdmVydGlzaW5nUGVyc2lzdGVuY2VMYXllcn0gZnJvbSAnLi4vYWR2ZXJ0aXNlci9BZHZlcnRpc2luZ1BlcnNpc3RlbmNlTGF5ZXInO1xuaW1wb3J0IHtMaXN0ZW5hYmxlUGVyc2lzdGVuY2VMYXllcn0gZnJvbSAnLi4vTGlzdGVuYWJsZVBlcnNpc3RlbmNlTGF5ZXInO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbi8qKlxuICogUGVyc2lzdGVuY2UgbGF5ZXIgd2l0aG91dCBnb2luZyB0aHJvdWdoIHRoZSBtYWluIHByb2Nlc3MgZm9yIGFkZGVkIHRocm91Z2hwdXRcbiAqIGFuZCBsb3dlciBJUEMgYnV0IHJlcXVpcmVzIG5vZGUgaW50ZWdyYXRpb24uXG4gKi9cbmV4cG9ydCBjbGFzcyBEZWZhdWx0UGVyc2lzdGVuY2VMYXllckZhY3Rvcnkge1xuXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBjcmVhdGUoKTogUHJvbWlzZTxMaXN0ZW5hYmxlUGVyc2lzdGVuY2VMYXllcj4ge1xuXG4gICAgICAgIGxvZy5pbmZvKFwiVXNpbmcgcGVyc2lzdGVuY2UgbGF5ZXIgZnJvbSByZW5kZXJlciBwcm9jZXNzLlwiKTtcblxuICAgICAgICBjb25zdCBkYXRhc3RvcmUgPSBEYXRhc3RvcmVzLmNyZWF0ZSgpO1xuICAgICAgICBhd2FpdCBkYXRhc3RvcmUuaW5pdCgpO1xuXG4gICAgICAgIGNvbnN0IGRlZmF1bHRQZXJzaXN0ZW5jZUxheWVyID0gbmV3IERlZmF1bHRQZXJzaXN0ZW5jZUxheWVyKGRhdGFzdG9yZSk7XG4gICAgICAgIGNvbnN0IGFkdmVydGlzaW5nUGVyc2lzdGVuY2VMYXllciA9IG5ldyBBZHZlcnRpc2luZ1BlcnNpc3RlbmNlTGF5ZXIoZGVmYXVsdFBlcnNpc3RlbmNlTGF5ZXIpO1xuXG4gICAgICAgIC8vIG5vdGUgdGhhdCB3ZSBuZWVkIHRvIGFsd2F5cyBwcmUtaW5pdCBiZWZvcmUgd2UgcmV0dXJuLlxuICAgICAgICBhd2FpdCBhZHZlcnRpc2luZ1BlcnNpc3RlbmNlTGF5ZXIuaW5pdCgpO1xuXG4gICAgICAgIHJldHVybiBhZHZlcnRpc2luZ1BlcnNpc3RlbmNlTGF5ZXI7XG5cbiAgICB9XG5cbn1cbiJdfQ==