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
const MemoryDatastore_1 = require("../../js/datastore/MemoryDatastore");
const DefaultPersistenceLayer_1 = require("../../js/datastore/DefaultPersistenceLayer");
const AdvertisingPersistenceLayer_1 = require("../../js/datastore/advertiser/AdvertisingPersistenceLayer");
const Assertions_1 = require("../../js/test/Assertions");
const testing_1 = require("./testing");
const log = Logger_1.Logger.create();
SpectronRenderer_1.SpectronRenderer.run((state) => __awaiter(void 0, void 0, void 0, function* () {
    const memoryDatastore = new MemoryDatastore_1.MemoryDatastore();
    const persistenceLayer = new DefaultPersistenceLayer_1.DefaultPersistenceLayer(memoryDatastore);
    const advertisingPersistenceLayer = new AdvertisingPersistenceLayer_1.AdvertisingPersistenceLayer(persistenceLayer);
    yield advertisingPersistenceLayer.init();
    advertisingPersistenceLayer.addEventListener(adv => {
        console.log("Got the advertisement: ", adv);
        const expected = {
            "added": "2012-03-02T11:38:49.321Z",
            "archived": false,
            "fingerprint": "0x0001",
            "flagged": false,
            "lastUpdated": "2012-03-02T11:38:49.321Z",
            "nrAnnotations": 0,
            "nrAreaHighlights": 0,
            "nrComments": 0,
            "nrFlashcards": 0,
            "nrNotes": 0,
            "nrPages": 1,
            "nrTextHighlights": 0,
            "pagemarkType": "SINGLE_COLUMN",
            "progress": 100,
            "properties": {},
            "tags": {},
            "uuid": "4743a590-645c-11e1-809e-478d48422a2c",
            "readingPerDay": {
                "2012-03-02": 1
            },
            "attachments": {}
        };
        Assertions_1.assertJSON(testing_1.canonicalize(adv.docInfo), testing_1.canonicalize(expected));
        console.log("Receiver SUCCESSFUL");
        state.testResultWriter.write(true)
            .then(() => log.info("DONE"))
            .catch((err) => {
            log.error("Could not receive event.", err);
        });
    });
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjZWl2aW5nLWFwcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlY2VpdmluZy1hcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxxRUFBZ0U7QUFDaEUsMkRBQXNEO0FBQ3RELHdFQUFtRTtBQUNuRSx3RkFBbUY7QUFDbkYsMkdBQXNHO0FBQ3RHLHlEQUFvRDtBQUNwRCx1Q0FBdUM7QUFFdkMsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLG1DQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFPLEtBQUssRUFBRSxFQUFFO0lBRWpDLE1BQU0sZUFBZSxHQUFHLElBQUksaUNBQWUsRUFBRSxDQUFDO0lBRTlDLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxpREFBdUIsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUV0RSxNQUFNLDJCQUEyQixHQUFHLElBQUkseURBQTJCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUV0RixNQUFNLDJCQUEyQixDQUFDLElBQUksRUFBRSxDQUFDO0lBRXpDLDJCQUEyQixDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBRS9DLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFNUMsTUFBTSxRQUFRLEdBQUc7WUFDYixPQUFPLEVBQUUsMEJBQTBCO1lBQ25DLFVBQVUsRUFBRSxLQUFLO1lBQ2pCLGFBQWEsRUFBRSxRQUFRO1lBQ3ZCLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLGFBQWEsRUFBRSwwQkFBMEI7WUFDekMsZUFBZSxFQUFFLENBQUM7WUFDbEIsa0JBQWtCLEVBQUUsQ0FBQztZQUNyQixZQUFZLEVBQUUsQ0FBQztZQUNmLGNBQWMsRUFBRSxDQUFDO1lBQ2pCLFNBQVMsRUFBRSxDQUFDO1lBQ1osU0FBUyxFQUFFLENBQUM7WUFDWixrQkFBa0IsRUFBRSxDQUFDO1lBQ3JCLGNBQWMsRUFBRSxlQUFlO1lBQy9CLFVBQVUsRUFBRSxHQUFHO1lBQ2YsWUFBWSxFQUFFLEVBQUU7WUFDaEIsTUFBTSxFQUFFLEVBQUU7WUFDVixNQUFNLEVBQUUsc0NBQXNDO1lBQzlDLGVBQWUsRUFBRTtnQkFDYixZQUFZLEVBQUUsQ0FBQzthQUNsQjtZQUNELGFBQWEsRUFBRSxFQUFFO1NBRXBCLENBQUM7UUFFRix1QkFBVSxDQUFDLHNCQUFZLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLHNCQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUU5RCxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFFbkMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7YUFDN0IsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDNUIsS0FBSyxDQUFDLENBQUMsR0FBVSxFQUFFLEVBQUU7WUFDbEIsR0FBRyxDQUFDLEtBQUssQ0FBQywwQkFBMEIsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUMvQyxDQUFDLENBQUMsQ0FBQztJQUVYLENBQUMsQ0FBQyxDQUFDO0FBRVAsQ0FBQyxDQUFBLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U3BlY3Ryb25SZW5kZXJlcn0gZnJvbSAnLi4vLi4vanMvdGVzdC9TcGVjdHJvblJlbmRlcmVyJztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL2xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IHtNZW1vcnlEYXRhc3RvcmV9IGZyb20gJy4uLy4uL2pzL2RhdGFzdG9yZS9NZW1vcnlEYXRhc3RvcmUnO1xuaW1wb3J0IHtEZWZhdWx0UGVyc2lzdGVuY2VMYXllcn0gZnJvbSAnLi4vLi4vanMvZGF0YXN0b3JlL0RlZmF1bHRQZXJzaXN0ZW5jZUxheWVyJztcbmltcG9ydCB7QWR2ZXJ0aXNpbmdQZXJzaXN0ZW5jZUxheWVyfSBmcm9tICcuLi8uLi9qcy9kYXRhc3RvcmUvYWR2ZXJ0aXNlci9BZHZlcnRpc2luZ1BlcnNpc3RlbmNlTGF5ZXInO1xuaW1wb3J0IHthc3NlcnRKU09OfSBmcm9tICcuLi8uLi9qcy90ZXN0L0Fzc2VydGlvbnMnO1xuaW1wb3J0IHtjYW5vbmljYWxpemV9IGZyb20gJy4vdGVzdGluZyc7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuU3BlY3Ryb25SZW5kZXJlci5ydW4oYXN5bmMgKHN0YXRlKSA9PiB7XG5cbiAgICBjb25zdCBtZW1vcnlEYXRhc3RvcmUgPSBuZXcgTWVtb3J5RGF0YXN0b3JlKCk7XG5cbiAgICBjb25zdCBwZXJzaXN0ZW5jZUxheWVyID0gbmV3IERlZmF1bHRQZXJzaXN0ZW5jZUxheWVyKG1lbW9yeURhdGFzdG9yZSk7XG5cbiAgICBjb25zdCBhZHZlcnRpc2luZ1BlcnNpc3RlbmNlTGF5ZXIgPSBuZXcgQWR2ZXJ0aXNpbmdQZXJzaXN0ZW5jZUxheWVyKHBlcnNpc3RlbmNlTGF5ZXIpO1xuXG4gICAgYXdhaXQgYWR2ZXJ0aXNpbmdQZXJzaXN0ZW5jZUxheWVyLmluaXQoKTtcblxuICAgIGFkdmVydGlzaW5nUGVyc2lzdGVuY2VMYXllci5hZGRFdmVudExpc3RlbmVyKGFkdiA9PiB7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJHb3QgdGhlIGFkdmVydGlzZW1lbnQ6IFwiLCBhZHYpO1xuXG4gICAgICAgIGNvbnN0IGV4cGVjdGVkID0ge1xuICAgICAgICAgICAgXCJhZGRlZFwiOiBcIjIwMTItMDMtMDJUMTE6Mzg6NDkuMzIxWlwiLFxuICAgICAgICAgICAgXCJhcmNoaXZlZFwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwiZmluZ2VycHJpbnRcIjogXCIweDAwMDFcIixcbiAgICAgICAgICAgIFwiZmxhZ2dlZFwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwibGFzdFVwZGF0ZWRcIjogXCIyMDEyLTAzLTAyVDExOjM4OjQ5LjMyMVpcIixcbiAgICAgICAgICAgIFwibnJBbm5vdGF0aW9uc1wiOiAwLFxuICAgICAgICAgICAgXCJuckFyZWFIaWdobGlnaHRzXCI6IDAsXG4gICAgICAgICAgICBcIm5yQ29tbWVudHNcIjogMCxcbiAgICAgICAgICAgIFwibnJGbGFzaGNhcmRzXCI6IDAsXG4gICAgICAgICAgICBcIm5yTm90ZXNcIjogMCxcbiAgICAgICAgICAgIFwibnJQYWdlc1wiOiAxLFxuICAgICAgICAgICAgXCJuclRleHRIaWdobGlnaHRzXCI6IDAsXG4gICAgICAgICAgICBcInBhZ2VtYXJrVHlwZVwiOiBcIlNJTkdMRV9DT0xVTU5cIixcbiAgICAgICAgICAgIFwicHJvZ3Jlc3NcIjogMTAwLFxuICAgICAgICAgICAgXCJwcm9wZXJ0aWVzXCI6IHt9LFxuICAgICAgICAgICAgXCJ0YWdzXCI6IHt9LFxuICAgICAgICAgICAgXCJ1dWlkXCI6IFwiNDc0M2E1OTAtNjQ1Yy0xMWUxLTgwOWUtNDc4ZDQ4NDIyYTJjXCIsXG4gICAgICAgICAgICBcInJlYWRpbmdQZXJEYXlcIjoge1xuICAgICAgICAgICAgICAgIFwiMjAxMi0wMy0wMlwiOiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJhdHRhY2htZW50c1wiOiB7fVxuXG4gICAgICAgIH07XG5cbiAgICAgICAgYXNzZXJ0SlNPTihjYW5vbmljYWxpemUoYWR2LmRvY0luZm8pLCBjYW5vbmljYWxpemUoZXhwZWN0ZWQpKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhcIlJlY2VpdmVyIFNVQ0NFU1NGVUxcIik7XG5cbiAgICAgICAgc3RhdGUudGVzdFJlc3VsdFdyaXRlci53cml0ZSh0cnVlKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gbG9nLmluZm8oXCJET05FXCIpKVxuICAgICAgICAgICAgLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgbG9nLmVycm9yKFwiQ291bGQgbm90IHJlY2VpdmUgZXZlbnQuXCIsIGVycik7XG4gICAgICAgICAgICB9KTtcblxuICAgIH0pO1xuXG59KTtcbiJdfQ==