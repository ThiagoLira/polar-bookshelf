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
const MemoryDatastore_1 = require("../MemoryDatastore");
const DocMetas_1 = require("../../metadata/DocMetas");
const Assertions_1 = require("../../test/Assertions");
const MockAdvertisingPersistenceLayer_1 = require("./MockAdvertisingPersistenceLayer");
const TestingTime_1 = require("polar-shared/src/test/TestingTime");
const Dictionaries_1 = require("polar-shared/src/util/Dictionaries");
describe('AdvertisingPersistenceLayer', function () {
    it("addEventListenerForDoc", function () {
        return __awaiter(this, void 0, void 0, function* () {
            TestingTime_1.TestingTime.freeze();
            const defaultPersistenceLayer = new DefaultPersistenceLayer_1.DefaultPersistenceLayer(new MemoryDatastore_1.MemoryDatastore());
            const advertisingPersistenceLayer = new MockAdvertisingPersistenceLayer_1.MockAdvertisingPersistenceLayer(defaultPersistenceLayer);
            const docMeta0 = DocMetas_1.MockDocMetas.createWithinInitialPagemarks('0x001', 1);
            const docMeta1 = DocMetas_1.MockDocMetas.createWithinInitialPagemarks('0x002', 1);
            const advertised = [];
            yield advertisingPersistenceLayer.init();
            advertisingPersistenceLayer.addEventListenerForDoc('0x001', event => {
                advertised.push(event.docInfo);
            });
            yield advertisingPersistenceLayer.writeDocMeta(docMeta0);
            yield advertisingPersistenceLayer.writeDocMeta(docMeta1);
            advertised[0].uuid = '...';
            const expected = [
                {
                    "progress": 100,
                    "pagemarkType": "SINGLE_COLUMN",
                    "properties": {},
                    "readingPerDay": {
                        "2012-03-02": 1
                    },
                    "archived": false,
                    "flagged": false,
                    "tags": {},
                    "nrPages": 1,
                    "fingerprint": "0x001",
                    "added": "2012-03-02T11:38:49.321Z",
                    "lastUpdated": "2012-03-02T11:38:49.321Z",
                    "nrComments": 0,
                    "nrNotes": 0,
                    "nrFlashcards": 0,
                    "nrTextHighlights": 0,
                    "nrAreaHighlights": 0,
                    "uuid": "...",
                    "nrAnnotations": 0,
                    attachments: {}
                }
            ];
            Assertions_1.assertJSON(Dictionaries_1.Dictionaries.sorted(advertised), Dictionaries_1.Dictionaries.sorted(expected));
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWR2ZXJ0aXNpbmdQZXJzaXN0ZW5jZUxheWVyVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkFkdmVydGlzaW5nUGVyc2lzdGVuY2VMYXllclRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQSx3RUFBbUU7QUFDbkUsd0RBQW1EO0FBQ25ELHNEQUFxRDtBQUVyRCxzREFBaUQ7QUFDakQsdUZBQWtGO0FBQ2xGLG1FQUE4RDtBQUM5RCxxRUFBZ0U7QUFFaEUsUUFBUSxDQUFDLDZCQUE2QixFQUFFO0lBRXBDLEVBQUUsQ0FBQyx3QkFBd0IsRUFBRTs7WUFFekIseUJBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUVyQixNQUFNLHVCQUF1QixHQUN2QixJQUFJLGlEQUF1QixDQUFDLElBQUksaUNBQWUsRUFBRSxDQUFDLENBQUM7WUFFekQsTUFBTSwyQkFBMkIsR0FDM0IsSUFBSSxpRUFBK0IsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1lBRW5FLE1BQU0sUUFBUSxHQUFHLHVCQUFZLENBQUMsNEJBQTRCLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3ZFLE1BQU0sUUFBUSxHQUFHLHVCQUFZLENBQUMsNEJBQTRCLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBRXZFLE1BQU0sVUFBVSxHQUFlLEVBQUUsQ0FBQztZQUVsQyxNQUFNLDJCQUEyQixDQUFDLElBQUksRUFBRSxDQUFDO1lBRXpDLDJCQUEyQixDQUFDLHNCQUFzQixDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsRUFBRTtnQkFDaEUsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDbkMsQ0FBQyxDQUFDLENBQUM7WUFFSCxNQUFNLDJCQUEyQixDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN6RCxNQUFNLDJCQUEyQixDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUV6RCxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztZQUUzQixNQUFNLFFBQVEsR0FBZTtnQkFDZDtvQkFDUCxVQUFVLEVBQUUsR0FBRztvQkFDZixjQUFjLEVBQUUsZUFBZTtvQkFDL0IsWUFBWSxFQUFFLEVBQUU7b0JBQ2hCLGVBQWUsRUFBRTt3QkFDYixZQUFZLEVBQUUsQ0FBQztxQkFDbEI7b0JBQ0QsVUFBVSxFQUFFLEtBQUs7b0JBQ2pCLFNBQVMsRUFBRSxLQUFLO29CQUNoQixNQUFNLEVBQUUsRUFBRTtvQkFDVixTQUFTLEVBQUUsQ0FBQztvQkFDWixhQUFhLEVBQUUsT0FBTztvQkFDdEIsT0FBTyxFQUFFLDBCQUEwQjtvQkFDbkMsYUFBYSxFQUFFLDBCQUEwQjtvQkFDekMsWUFBWSxFQUFFLENBQUM7b0JBQ2YsU0FBUyxFQUFFLENBQUM7b0JBQ1osY0FBYyxFQUFFLENBQUM7b0JBQ2pCLGtCQUFrQixFQUFFLENBQUM7b0JBQ3JCLGtCQUFrQixFQUFFLENBQUM7b0JBQ3JCLE1BQU0sRUFBRSxLQUFLO29CQUNiLGVBQWUsRUFBRSxDQUFDO29CQUNsQixXQUFXLEVBQUUsRUFBRTtpQkFDbEI7YUFDSixDQUFDO1lBRUYsdUJBQVUsQ0FBQywyQkFBWSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBRSwyQkFBWSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBRS9FLENBQUM7S0FBQSxDQUFDLENBQUM7QUFFUCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QWR2ZXJ0aXNpbmdQZXJzaXN0ZW5jZUxheWVyfSBmcm9tICcuL0FkdmVydGlzaW5nUGVyc2lzdGVuY2VMYXllcic7XG5pbXBvcnQge0RlZmF1bHRQZXJzaXN0ZW5jZUxheWVyfSBmcm9tICcuLi9EZWZhdWx0UGVyc2lzdGVuY2VMYXllcic7XG5pbXBvcnQge01lbW9yeURhdGFzdG9yZX0gZnJvbSAnLi4vTWVtb3J5RGF0YXN0b3JlJztcbmltcG9ydCB7TW9ja0RvY01ldGFzfSBmcm9tICcuLi8uLi9tZXRhZGF0YS9Eb2NNZXRhcyc7XG5pbXBvcnQge0lEb2NJbmZvfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL21ldGFkYXRhL0lEb2NJbmZvJztcbmltcG9ydCB7YXNzZXJ0SlNPTn0gZnJvbSAnLi4vLi4vdGVzdC9Bc3NlcnRpb25zJztcbmltcG9ydCB7TW9ja0FkdmVydGlzaW5nUGVyc2lzdGVuY2VMYXllcn0gZnJvbSAnLi9Nb2NrQWR2ZXJ0aXNpbmdQZXJzaXN0ZW5jZUxheWVyJztcbmltcG9ydCB7VGVzdGluZ1RpbWV9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdGVzdC9UZXN0aW5nVGltZSc7XG5pbXBvcnQge0RpY3Rpb25hcmllc30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL0RpY3Rpb25hcmllcyc7XG5cbmRlc2NyaWJlKCdBZHZlcnRpc2luZ1BlcnNpc3RlbmNlTGF5ZXInLCBmdW5jdGlvbigpIHtcblxuICAgIGl0KFwiYWRkRXZlbnRMaXN0ZW5lckZvckRvY1wiLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICBUZXN0aW5nVGltZS5mcmVlemUoKTtcblxuICAgICAgICBjb25zdCBkZWZhdWx0UGVyc2lzdGVuY2VMYXllclxuICAgICAgICAgICAgPSBuZXcgRGVmYXVsdFBlcnNpc3RlbmNlTGF5ZXIobmV3IE1lbW9yeURhdGFzdG9yZSgpKTtcblxuICAgICAgICBjb25zdCBhZHZlcnRpc2luZ1BlcnNpc3RlbmNlTGF5ZXJcbiAgICAgICAgICAgID0gbmV3IE1vY2tBZHZlcnRpc2luZ1BlcnNpc3RlbmNlTGF5ZXIoZGVmYXVsdFBlcnNpc3RlbmNlTGF5ZXIpO1xuXG4gICAgICAgIGNvbnN0IGRvY01ldGEwID0gTW9ja0RvY01ldGFzLmNyZWF0ZVdpdGhpbkluaXRpYWxQYWdlbWFya3MoJzB4MDAxJywgMSk7XG4gICAgICAgIGNvbnN0IGRvY01ldGExID0gTW9ja0RvY01ldGFzLmNyZWF0ZVdpdGhpbkluaXRpYWxQYWdlbWFya3MoJzB4MDAyJywgMSk7XG5cbiAgICAgICAgY29uc3QgYWR2ZXJ0aXNlZDogSURvY0luZm9bXSA9IFtdO1xuXG4gICAgICAgIGF3YWl0IGFkdmVydGlzaW5nUGVyc2lzdGVuY2VMYXllci5pbml0KCk7XG5cbiAgICAgICAgYWR2ZXJ0aXNpbmdQZXJzaXN0ZW5jZUxheWVyLmFkZEV2ZW50TGlzdGVuZXJGb3JEb2MoJzB4MDAxJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgYWR2ZXJ0aXNlZC5wdXNoKGV2ZW50LmRvY0luZm8pO1xuICAgICAgICB9KTtcblxuICAgICAgICBhd2FpdCBhZHZlcnRpc2luZ1BlcnNpc3RlbmNlTGF5ZXIud3JpdGVEb2NNZXRhKGRvY01ldGEwKTtcbiAgICAgICAgYXdhaXQgYWR2ZXJ0aXNpbmdQZXJzaXN0ZW5jZUxheWVyLndyaXRlRG9jTWV0YShkb2NNZXRhMSk7XG5cbiAgICAgICAgYWR2ZXJ0aXNlZFswXS51dWlkID0gJy4uLic7XG5cbiAgICAgICAgY29uc3QgZXhwZWN0ZWQ6IElEb2NJbmZvW10gPSBbXG4gICAgICAgICAgICA8SURvY0luZm8+IHtcbiAgICAgICAgICAgICAgICBcInByb2dyZXNzXCI6IDEwMCxcbiAgICAgICAgICAgICAgICBcInBhZ2VtYXJrVHlwZVwiOiBcIlNJTkdMRV9DT0xVTU5cIixcbiAgICAgICAgICAgICAgICBcInByb3BlcnRpZXNcIjoge30sXG4gICAgICAgICAgICAgICAgXCJyZWFkaW5nUGVyRGF5XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCIyMDEyLTAzLTAyXCI6IDFcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiYXJjaGl2ZWRcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJmbGFnZ2VkXCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwidGFnc1wiOiB7fSxcbiAgICAgICAgICAgICAgICBcIm5yUGFnZXNcIjogMSxcbiAgICAgICAgICAgICAgICBcImZpbmdlcnByaW50XCI6IFwiMHgwMDFcIixcbiAgICAgICAgICAgICAgICBcImFkZGVkXCI6IFwiMjAxMi0wMy0wMlQxMTozODo0OS4zMjFaXCIsXG4gICAgICAgICAgICAgICAgXCJsYXN0VXBkYXRlZFwiOiBcIjIwMTItMDMtMDJUMTE6Mzg6NDkuMzIxWlwiLFxuICAgICAgICAgICAgICAgIFwibnJDb21tZW50c1wiOiAwLFxuICAgICAgICAgICAgICAgIFwibnJOb3Rlc1wiOiAwLFxuICAgICAgICAgICAgICAgIFwibnJGbGFzaGNhcmRzXCI6IDAsXG4gICAgICAgICAgICAgICAgXCJuclRleHRIaWdobGlnaHRzXCI6IDAsXG4gICAgICAgICAgICAgICAgXCJuckFyZWFIaWdobGlnaHRzXCI6IDAsXG4gICAgICAgICAgICAgICAgXCJ1dWlkXCI6IFwiLi4uXCIsXG4gICAgICAgICAgICAgICAgXCJuckFubm90YXRpb25zXCI6IDAsXG4gICAgICAgICAgICAgICAgYXR0YWNobWVudHM6IHt9XG4gICAgICAgICAgICB9XG4gICAgICAgIF07XG5cbiAgICAgICAgYXNzZXJ0SlNPTihEaWN0aW9uYXJpZXMuc29ydGVkKGFkdmVydGlzZWQpLCBEaWN0aW9uYXJpZXMuc29ydGVkKGV4cGVjdGVkKSk7XG5cbiAgICB9KTtcblxufSk7XG4iXX0=