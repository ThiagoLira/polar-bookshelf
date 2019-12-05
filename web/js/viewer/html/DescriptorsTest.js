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
const chai_1 = require("chai");
const Assertions_1 = require("../../test/Assertions");
const Descriptors_1 = require("./Descriptors");
describe('Descriptors', function () {
    describe('computeScrollBoxFromBoxes', function () {
        it("basic", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const scrollBox = {
                    width: 150,
                    height: 150
                };
                const scroll = {
                    width: 100,
                    height: 100
                };
                let result = Descriptors_1.Descriptors.computeScrollBoxFromBoxes(scrollBox, scroll);
                chai_1.assert.ok(result.isPresent());
                Assertions_1.assertJSON(result, {
                    "value": {
                        "width": 150,
                        "height": 150
                    }
                });
            });
        });
        it("none", function () {
            return __awaiter(this, void 0, void 0, function* () {
                let result = Descriptors_1.Descriptors.computeScrollBoxFromBoxes();
                chai_1.assert.isFalse(result.isPresent());
            });
        });
        it("first", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const scrollBox = {
                    width: 150,
                    height: 150
                };
                let result = Descriptors_1.Descriptors.computeScrollBoxFromBoxes(scrollBox);
                chai_1.assert.ok(result.isPresent());
                Assertions_1.assertJSON(result, {
                    "value": {
                        "width": 150,
                        "height": 150
                    }
                });
            });
        });
        it("last", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const scroll = {
                    width: 100,
                    height: 100
                };
                let result = Descriptors_1.Descriptors.computeScrollBoxFromBoxes(undefined, scroll);
                chai_1.assert.ok(result.isPresent());
                Assertions_1.assertJSON(result, {
                    "value": {
                        "width": 100,
                        "height": 100
                    }
                });
            });
        });
        it("broken", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const scroll = {
                    width: "100",
                    height: 100
                };
                let result = Descriptors_1.Descriptors.computeScrollBoxFromBoxes(scroll, scroll);
                chai_1.assert.isFalse(result.isPresent());
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVzY3JpcHRvcnNUZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRGVzY3JpcHRvcnNUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsK0JBQTRCO0FBQzVCLHNEQUFpRDtBQUNqRCwrQ0FBMEM7QUFHMUMsUUFBUSxDQUFDLGFBQWEsRUFBRTtJQUVwQixRQUFRLENBQUMsMkJBQTJCLEVBQUU7UUFFbEMsRUFBRSxDQUFDLE9BQU8sRUFBRTs7Z0JBRVIsTUFBTSxTQUFTLEdBQWM7b0JBQ3pCLEtBQUssRUFBRSxHQUFHO29CQUNWLE1BQU0sRUFBRSxHQUFHO2lCQUNkLENBQUE7Z0JBRUQsTUFBTSxNQUFNLEdBQWM7b0JBQ3RCLEtBQUssRUFBRSxHQUFHO29CQUNWLE1BQU0sRUFBRSxHQUFHO2lCQUNkLENBQUE7Z0JBRUQsSUFBSSxNQUFNLEdBQUcseUJBQVcsQ0FBQyx5QkFBeUIsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBRXRFLGFBQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUE7Z0JBRTdCLHVCQUFVLENBQUMsTUFBTSxFQUFFO29CQUNmLE9BQU8sRUFBRTt3QkFDTCxPQUFPLEVBQUUsR0FBRzt3QkFDWixRQUFRLEVBQUUsR0FBRztxQkFDaEI7aUJBQ0osQ0FBQyxDQUFDO1lBRVAsQ0FBQztTQUFBLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyxNQUFNLEVBQUU7O2dCQUVQLElBQUksTUFBTSxHQUFHLHlCQUFXLENBQUMseUJBQXlCLEVBQUUsQ0FBQztnQkFDckQsYUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQTtZQUV0QyxDQUFDO1NBQUEsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLE9BQU8sRUFBRTs7Z0JBRVIsTUFBTSxTQUFTLEdBQWM7b0JBQ3pCLEtBQUssRUFBRSxHQUFHO29CQUNWLE1BQU0sRUFBRSxHQUFHO2lCQUNkLENBQUE7Z0JBRUQsSUFBSSxNQUFNLEdBQUcseUJBQVcsQ0FBQyx5QkFBeUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFFOUQsYUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQTtnQkFFN0IsdUJBQVUsQ0FBQyxNQUFNLEVBQUU7b0JBQ2YsT0FBTyxFQUFFO3dCQUNMLE9BQU8sRUFBRSxHQUFHO3dCQUNaLFFBQVEsRUFBRSxHQUFHO3FCQUNoQjtpQkFDSixDQUFDLENBQUM7WUFFUCxDQUFDO1NBQUEsQ0FBQyxDQUFDO1FBR0gsRUFBRSxDQUFDLE1BQU0sRUFBRTs7Z0JBRVAsTUFBTSxNQUFNLEdBQWM7b0JBQ3RCLEtBQUssRUFBRSxHQUFHO29CQUNWLE1BQU0sRUFBRSxHQUFHO2lCQUNkLENBQUE7Z0JBRUQsSUFBSSxNQUFNLEdBQUcseUJBQVcsQ0FBQyx5QkFBeUIsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBRXRFLGFBQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUE7Z0JBRTdCLHVCQUFVLENBQUMsTUFBTSxFQUFFO29CQUNmLE9BQU8sRUFBRTt3QkFDTCxPQUFPLEVBQUUsR0FBRzt3QkFDWixRQUFRLEVBQUUsR0FBRztxQkFDaEI7aUJBQ0osQ0FBQyxDQUFDO1lBRVAsQ0FBQztTQUFBLENBQUMsQ0FBQztRQUdILEVBQUUsQ0FBQyxRQUFRLEVBQUU7O2dCQUVULE1BQU0sTUFBTSxHQUFRO29CQUNoQixLQUFLLEVBQUUsS0FBSztvQkFDWixNQUFNLEVBQUUsR0FBRztpQkFDZCxDQUFBO2dCQUVELElBQUksTUFBTSxHQUFHLHlCQUFXLENBQUMseUJBQXlCLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUVuRSxhQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFBO1lBRXRDLENBQUM7U0FBQSxDQUFDLENBQUM7SUFFUCxDQUFDLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthc3NlcnR9IGZyb20gJ2NoYWknO1xuaW1wb3J0IHthc3NlcnRKU09OfSBmcm9tICcuLi8uLi90ZXN0L0Fzc2VydGlvbnMnO1xuaW1wb3J0IHtEZXNjcmlwdG9yc30gZnJvbSAnLi9EZXNjcmlwdG9ycyc7XG5pbXBvcnQge1Njcm9sbEJveH0gZnJvbSAncG9sYXItY29udGVudC1jYXB0dXJlL3NyYy9jYXB0dXJlL0NhcHR1cmVkJztcblxuZGVzY3JpYmUoJ0Rlc2NyaXB0b3JzJywgZnVuY3Rpb24oKSB7XG5cbiAgICBkZXNjcmliZSgnY29tcHV0ZVNjcm9sbEJveEZyb21Cb3hlcycsIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGl0KFwiYmFzaWNcIiwgYXN5bmMgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICBjb25zdCBzY3JvbGxCb3g6IFNjcm9sbEJveCA9IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTUwLFxuICAgICAgICAgICAgICAgIGhlaWdodDogMTUwXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbDogU2Nyb2xsQm94ID0ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IERlc2NyaXB0b3JzLmNvbXB1dGVTY3JvbGxCb3hGcm9tQm94ZXMoc2Nyb2xsQm94LCBzY3JvbGwpO1xuXG4gICAgICAgICAgICBhc3NlcnQub2socmVzdWx0LmlzUHJlc2VudCgpKVxuXG4gICAgICAgICAgICBhc3NlcnRKU09OKHJlc3VsdCwge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjoge1xuICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDE1MCxcbiAgICAgICAgICAgICAgICAgICAgXCJoZWlnaHRcIjogMTUwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoXCJub25lXCIsIGFzeW5jIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IERlc2NyaXB0b3JzLmNvbXB1dGVTY3JvbGxCb3hGcm9tQm94ZXMoKTtcbiAgICAgICAgICAgIGFzc2VydC5pc0ZhbHNlKHJlc3VsdC5pc1ByZXNlbnQoKSlcblxuICAgICAgICB9KTtcblxuICAgICAgICBpdChcImZpcnN0XCIsIGFzeW5jIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsQm94OiBTY3JvbGxCb3ggPSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDE1MCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1MFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gRGVzY3JpcHRvcnMuY29tcHV0ZVNjcm9sbEJveEZyb21Cb3hlcyhzY3JvbGxCb3gpO1xuXG4gICAgICAgICAgICBhc3NlcnQub2socmVzdWx0LmlzUHJlc2VudCgpKVxuXG4gICAgICAgICAgICBhc3NlcnRKU09OKHJlc3VsdCwge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjoge1xuICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDE1MCxcbiAgICAgICAgICAgICAgICAgICAgXCJoZWlnaHRcIjogMTUwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSk7XG5cblxuICAgICAgICBpdChcImxhc3RcIiwgYXN5bmMgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICBjb25zdCBzY3JvbGw6IFNjcm9sbEJveCA9IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwLFxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBEZXNjcmlwdG9ycy5jb21wdXRlU2Nyb2xsQm94RnJvbUJveGVzKHVuZGVmaW5lZCwgc2Nyb2xsKTtcblxuICAgICAgICAgICAgYXNzZXJ0Lm9rKHJlc3VsdC5pc1ByZXNlbnQoKSlcblxuICAgICAgICAgICAgYXNzZXJ0SlNPTihyZXN1bHQsIHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiAxMDAsXG4gICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IDEwMFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgaXQoXCJicm9rZW5cIiwgYXN5bmMgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICBjb25zdCBzY3JvbGw6IGFueSA9IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDBcIixcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gRGVzY3JpcHRvcnMuY29tcHV0ZVNjcm9sbEJveEZyb21Cb3hlcyhzY3JvbGwsIHNjcm9sbCk7XG5cbiAgICAgICAgICAgIGFzc2VydC5pc0ZhbHNlKHJlc3VsdC5pc1ByZXNlbnQoKSlcblxuICAgICAgICB9KTtcblxuICAgIH0pO1xuXG59KTtcbiJdfQ==