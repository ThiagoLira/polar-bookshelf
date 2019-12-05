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
const SpectronRenderer_1 = require("../../js/test/SpectronRenderer");
const Logger_1 = require("polar-shared/src/logger/Logger");
const DocMetas_1 = require("../../js/metadata/DocMetas");
const AdvertisingPersistenceLayer_1 = require("../../js/datastore/advertiser/AdvertisingPersistenceLayer");
const MemoryDatastore_1 = require("../../js/datastore/MemoryDatastore");
const DefaultPersistenceLayer_1 = require("../../js/datastore/DefaultPersistenceLayer");
const Assertions_1 = require("../../js/test/Assertions");
const TestingTime_1 = require("polar-shared/src/test/TestingTime");
const testing_1 = require("./testing");
const log = Logger_1.Logger.create();
TestingTime_1.TestingTime.freeze();
SpectronRenderer_1.SpectronRenderer.run(() => __awaiter(void 0, void 0, void 0, function* () {
    log.info("Sending advertisement now.");
    const docMeta = DocMetas_1.MockDocMetas.createWithinInitialPagemarks('0x0001', 1);
    const memoryDatastore = new MemoryDatastore_1.MemoryDatastore();
    const persistenceLayer = new DefaultPersistenceLayer_1.DefaultPersistenceLayer(memoryDatastore);
    const advertisingPersistenceLayer = new AdvertisingPersistenceLayer_1.AdvertisingPersistenceLayer(persistenceLayer);
    yield advertisingPersistenceLayer.init();
    const expected = {
        "progress": 100,
        "pagemarkType": "SINGLE_COLUMN",
        "properties": {},
        "tags": {},
        "archived": false,
        "flagged": false,
        "nrPages": 1,
        "fingerprint": "0x0001",
        "added": "2012-03-02T11:38:49.321Z",
        "readingPerDay": {
            "2012-03-02": 1
        },
        attachments: {}
    };
    Assertions_1.assertJSON(testing_1.canonicalize(docMeta.docInfo), testing_1.canonicalize(expected));
    yield advertisingPersistenceLayer.writeDocMeta(docMeta);
    console.log("Sender SUCCESSFUL");
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VuZGluZy1hcHAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZW5kaW5nLWFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHFFQUFnRTtBQUNoRSwyREFBc0Q7QUFDdEQseURBQXdEO0FBQ3hELDJHQUFzRztBQUN0Ryx3RUFBbUU7QUFDbkUsd0ZBQW1GO0FBQ25GLHlEQUFvRDtBQUNwRCxtRUFBOEQ7QUFDOUQsdUNBQXVDO0FBRXZDLE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU1Qix5QkFBVyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRXJCLG1DQUFnQixDQUFDLEdBQUcsQ0FBQyxHQUFTLEVBQUU7SUFFNUIsR0FBRyxDQUFDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO0lBRXZDLE1BQU0sT0FBTyxHQUFHLHVCQUFZLENBQUMsNEJBQTRCLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBRXZFLE1BQU0sZUFBZSxHQUFHLElBQUksaUNBQWUsRUFBRSxDQUFDO0lBRTlDLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxpREFBdUIsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUV0RSxNQUFNLDJCQUEyQixHQUFHLElBQUkseURBQTJCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUV0RixNQUFNLDJCQUEyQixDQUFDLElBQUksRUFBRSxDQUFDO0lBRXpDLE1BQU0sUUFBUSxHQUFHO1FBQ2IsVUFBVSxFQUFFLEdBQUc7UUFDZixjQUFjLEVBQUUsZUFBZTtRQUMvQixZQUFZLEVBQUUsRUFBRTtRQUNoQixNQUFNLEVBQUUsRUFBRTtRQUNWLFVBQVUsRUFBRSxLQUFLO1FBQ2pCLFNBQVMsRUFBRSxLQUFLO1FBQ2hCLFNBQVMsRUFBRSxDQUFDO1FBQ1osYUFBYSxFQUFFLFFBQVE7UUFDdkIsT0FBTyxFQUFFLDBCQUEwQjtRQUNuQyxlQUFlLEVBQUU7WUFDYixZQUFZLEVBQUUsQ0FBQztTQUNsQjtRQUNELFdBQVcsRUFBRSxFQUFFO0tBQUMsQ0FFbkI7SUFFRCx1QkFBVSxDQUFDLHNCQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLHNCQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUVsRSxNQUFNLDJCQUEyQixDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUV4RCxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFFckMsQ0FBQyxDQUFBLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U3BlY3Ryb25SZW5kZXJlcn0gZnJvbSAnLi4vLi4vanMvdGVzdC9TcGVjdHJvblJlbmRlcmVyJztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL2xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IHtNb2NrRG9jTWV0YXN9IGZyb20gJy4uLy4uL2pzL21ldGFkYXRhL0RvY01ldGFzJztcbmltcG9ydCB7QWR2ZXJ0aXNpbmdQZXJzaXN0ZW5jZUxheWVyfSBmcm9tICcuLi8uLi9qcy9kYXRhc3RvcmUvYWR2ZXJ0aXNlci9BZHZlcnRpc2luZ1BlcnNpc3RlbmNlTGF5ZXInO1xuaW1wb3J0IHtNZW1vcnlEYXRhc3RvcmV9IGZyb20gJy4uLy4uL2pzL2RhdGFzdG9yZS9NZW1vcnlEYXRhc3RvcmUnO1xuaW1wb3J0IHtEZWZhdWx0UGVyc2lzdGVuY2VMYXllcn0gZnJvbSAnLi4vLi4vanMvZGF0YXN0b3JlL0RlZmF1bHRQZXJzaXN0ZW5jZUxheWVyJztcbmltcG9ydCB7YXNzZXJ0SlNPTn0gZnJvbSAnLi4vLi4vanMvdGVzdC9Bc3NlcnRpb25zJztcbmltcG9ydCB7VGVzdGluZ1RpbWV9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdGVzdC9UZXN0aW5nVGltZSc7XG5pbXBvcnQge2Nhbm9uaWNhbGl6ZX0gZnJvbSAnLi90ZXN0aW5nJztcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG5UZXN0aW5nVGltZS5mcmVlemUoKTtcblxuU3BlY3Ryb25SZW5kZXJlci5ydW4oYXN5bmMgKCkgPT4ge1xuXG4gICAgbG9nLmluZm8oXCJTZW5kaW5nIGFkdmVydGlzZW1lbnQgbm93LlwiKTtcblxuICAgIGNvbnN0IGRvY01ldGEgPSBNb2NrRG9jTWV0YXMuY3JlYXRlV2l0aGluSW5pdGlhbFBhZ2VtYXJrcygnMHgwMDAxJywgMSk7XG5cbiAgICBjb25zdCBtZW1vcnlEYXRhc3RvcmUgPSBuZXcgTWVtb3J5RGF0YXN0b3JlKCk7XG5cbiAgICBjb25zdCBwZXJzaXN0ZW5jZUxheWVyID0gbmV3IERlZmF1bHRQZXJzaXN0ZW5jZUxheWVyKG1lbW9yeURhdGFzdG9yZSk7XG5cbiAgICBjb25zdCBhZHZlcnRpc2luZ1BlcnNpc3RlbmNlTGF5ZXIgPSBuZXcgQWR2ZXJ0aXNpbmdQZXJzaXN0ZW5jZUxheWVyKHBlcnNpc3RlbmNlTGF5ZXIpO1xuXG4gICAgYXdhaXQgYWR2ZXJ0aXNpbmdQZXJzaXN0ZW5jZUxheWVyLmluaXQoKTtcblxuICAgIGNvbnN0IGV4cGVjdGVkID0ge1xuICAgICAgICBcInByb2dyZXNzXCI6IDEwMCxcbiAgICAgICAgXCJwYWdlbWFya1R5cGVcIjogXCJTSU5HTEVfQ09MVU1OXCIsXG4gICAgICAgIFwicHJvcGVydGllc1wiOiB7fSxcbiAgICAgICAgXCJ0YWdzXCI6IHt9LFxuICAgICAgICBcImFyY2hpdmVkXCI6IGZhbHNlLFxuICAgICAgICBcImZsYWdnZWRcIjogZmFsc2UsXG4gICAgICAgIFwibnJQYWdlc1wiOiAxLFxuICAgICAgICBcImZpbmdlcnByaW50XCI6IFwiMHgwMDAxXCIsXG4gICAgICAgIFwiYWRkZWRcIjogXCIyMDEyLTAzLTAyVDExOjM4OjQ5LjMyMVpcIixcbiAgICAgICAgXCJyZWFkaW5nUGVyRGF5XCI6IHtcbiAgICAgICAgICAgIFwiMjAxMi0wMy0wMlwiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIGF0dGFjaG1lbnRzOiB7fX1cblxuICAgIDtcblxuICAgIGFzc2VydEpTT04oY2Fub25pY2FsaXplKGRvY01ldGEuZG9jSW5mbyksIGNhbm9uaWNhbGl6ZShleHBlY3RlZCkpO1xuXG4gICAgYXdhaXQgYWR2ZXJ0aXNpbmdQZXJzaXN0ZW5jZUxheWVyLndyaXRlRG9jTWV0YShkb2NNZXRhKTtcblxuICAgIGNvbnNvbGUubG9nKFwiU2VuZGVyIFNVQ0NFU1NGVUxcIik7XG5cbn0pO1xuIl19