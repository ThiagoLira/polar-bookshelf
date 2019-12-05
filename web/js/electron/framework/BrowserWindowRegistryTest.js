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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert = __importStar(require("assert"));
const BrowserWindowRegistry_1 = require("./BrowserWindowRegistry");
const Assertions_1 = require("../../test/Assertions");
const Preconditions_1 = require("polar-shared/src/Preconditions");
describe('BrowserWindowRegistry', function () {
    class MockLiveWindowsProvider {
        constructor() {
            this.result = [];
        }
        getLiveWindowIDs() {
            return this.result;
        }
    }
    it("make sure GC works", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const mockLiveWindowsProvider = new MockLiveWindowsProvider();
            mockLiveWindowsProvider.result = [1];
            BrowserWindowRegistry_1.BrowserWindowRegistry.liveWindowsProvider = mockLiveWindowsProvider;
            assert.deepStrictEqual(BrowserWindowRegistry_1.BrowserWindowRegistry.gc(), []);
            BrowserWindowRegistry_1.BrowserWindowRegistry.tag(1, { 'name': 'test' });
            assert.deepStrictEqual(BrowserWindowRegistry_1.BrowserWindowRegistry.gc(), []);
            mockLiveWindowsProvider.result = [];
            assert.deepStrictEqual(BrowserWindowRegistry_1.BrowserWindowRegistry.gc(), [1]);
        });
    });
    it("basic tagging", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const mockLiveWindowsProvider = new MockLiveWindowsProvider();
            mockLiveWindowsProvider.result = [1];
            BrowserWindowRegistry_1.BrowserWindowRegistry.liveWindowsProvider = mockLiveWindowsProvider;
            BrowserWindowRegistry_1.BrowserWindowRegistry.tag(1, { name: 'test' });
            const expected = {
                "tags": {
                    "name": "test"
                }
            };
            assert.ok(Preconditions_1.isPresent(BrowserWindowRegistry_1.BrowserWindowRegistry.get(1)));
            Assertions_1.assertJSON(BrowserWindowRegistry_1.BrowserWindowRegistry.get(1), expected);
            Assertions_1.assertJSON(BrowserWindowRegistry_1.BrowserWindowRegistry.tagged({ name: 'name', value: 'test' }), [1]);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnJvd3NlcldpbmRvd1JlZ2lzdHJ5VGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkJyb3dzZXJXaW5kb3dSZWdpc3RyeVRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsK0NBQWlDO0FBQ2pDLG1FQUF1RjtBQUN2RixzREFBaUQ7QUFDakQsa0VBQXlEO0FBRXpELFFBQVEsQ0FBQyx1QkFBdUIsRUFBRTtJQUU5QixNQUFNLHVCQUF1QjtRQUE3QjtZQUVJLFdBQU0sR0FBUyxFQUFFLENBQUM7UUFNdEIsQ0FBQztRQUpHLGdCQUFnQjtZQUNaLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixDQUFDO0tBRUo7SUFFRCxFQUFFLENBQUMsb0JBQW9CLEVBQUU7O1lBRXJCLE1BQU0sdUJBQXVCLEdBQUcsSUFBSSx1QkFBdUIsRUFBRSxDQUFDO1lBRTlELHVCQUF1QixDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRTlCLDZDQUFzQixDQUFDLG1CQUFtQixHQUFHLHVCQUF1QixDQUFDO1lBRTVFLE1BQU0sQ0FBQyxlQUFlLENBQUMsNkNBQXFCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFFdkQsNkNBQXFCLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUMsQ0FBQyxDQUFDO1lBRS9DLE1BQU0sQ0FBQyxlQUFlLENBQUMsNkNBQXFCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFFdkQsdUJBQXVCLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztZQUVwQyxNQUFNLENBQUMsZUFBZSxDQUFDLDZDQUFxQixDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUU1RCxDQUFDO0tBQUEsQ0FBQyxDQUFDO0lBR0gsRUFBRSxDQUFDLGVBQWUsRUFBRTs7WUFFaEIsTUFBTSx1QkFBdUIsR0FBRyxJQUFJLHVCQUF1QixFQUFFLENBQUM7WUFFOUQsdUJBQXVCLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFOUIsNkNBQXNCLENBQUMsbUJBQW1CLEdBQUcsdUJBQXVCLENBQUM7WUFFNUUsNkNBQXFCLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUMsQ0FBQyxDQUFDO1lBRTdDLE1BQU0sUUFBUSxHQUFHO2dCQUNiLE1BQU0sRUFBRTtvQkFDSixNQUFNLEVBQUUsTUFBTTtpQkFDakI7YUFDSixDQUFDO1lBRUYsTUFBTSxDQUFDLEVBQUUsQ0FBQyx5QkFBUyxDQUFDLDZDQUFxQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFbkQsdUJBQVUsQ0FBQyw2Q0FBcUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFFbkQsdUJBQVUsQ0FBQyw2Q0FBcUIsQ0FBQyxNQUFNLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVqRixDQUFDO0tBQUEsQ0FBQyxDQUFDO0FBRVAsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCAqIGFzIGFzc2VydCBmcm9tICdhc3NlcnQnO1xuaW1wb3J0IHtCcm93c2VyV2luZG93UmVnaXN0cnksIElELCBMaXZlV2luZG93c1Byb3ZpZGVyfSBmcm9tICcuL0Jyb3dzZXJXaW5kb3dSZWdpc3RyeSc7XG5pbXBvcnQge2Fzc2VydEpTT059IGZyb20gJy4uLy4uL3Rlc3QvQXNzZXJ0aW9ucyc7XG5pbXBvcnQge2lzUHJlc2VudH0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9QcmVjb25kaXRpb25zJztcblxuZGVzY3JpYmUoJ0Jyb3dzZXJXaW5kb3dSZWdpc3RyeScsIGZ1bmN0aW9uKCkge1xuXG4gICAgY2xhc3MgTW9ja0xpdmVXaW5kb3dzUHJvdmlkZXIgaW1wbGVtZW50cyBMaXZlV2luZG93c1Byb3ZpZGVyIHtcblxuICAgICAgICByZXN1bHQ6IElEW10gPSBbXTtcblxuICAgICAgICBnZXRMaXZlV2luZG93SURzKCk6IElEW10ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVzdWx0O1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBpdChcIm1ha2Ugc3VyZSBHQyB3b3Jrc1wiLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICBjb25zdCBtb2NrTGl2ZVdpbmRvd3NQcm92aWRlciA9IG5ldyBNb2NrTGl2ZVdpbmRvd3NQcm92aWRlcigpO1xuXG4gICAgICAgIG1vY2tMaXZlV2luZG93c1Byb3ZpZGVyLnJlc3VsdCA9IFsxXTtcblxuICAgICAgICAoPGFueT4gQnJvd3NlcldpbmRvd1JlZ2lzdHJ5KS5saXZlV2luZG93c1Byb3ZpZGVyID0gbW9ja0xpdmVXaW5kb3dzUHJvdmlkZXI7XG5cbiAgICAgICAgYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChCcm93c2VyV2luZG93UmVnaXN0cnkuZ2MoKSwgW10pO1xuXG4gICAgICAgIEJyb3dzZXJXaW5kb3dSZWdpc3RyeS50YWcoMSwgeyduYW1lJzogJ3Rlc3QnfSk7XG5cbiAgICAgICAgYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChCcm93c2VyV2luZG93UmVnaXN0cnkuZ2MoKSwgW10pO1xuXG4gICAgICAgIG1vY2tMaXZlV2luZG93c1Byb3ZpZGVyLnJlc3VsdCA9IFtdO1xuXG4gICAgICAgIGFzc2VydC5kZWVwU3RyaWN0RXF1YWwoQnJvd3NlcldpbmRvd1JlZ2lzdHJ5LmdjKCksIFsxXSk7XG5cbiAgICB9KTtcblxuXG4gICAgaXQoXCJiYXNpYyB0YWdnaW5nXCIsIGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGNvbnN0IG1vY2tMaXZlV2luZG93c1Byb3ZpZGVyID0gbmV3IE1vY2tMaXZlV2luZG93c1Byb3ZpZGVyKCk7XG5cbiAgICAgICAgbW9ja0xpdmVXaW5kb3dzUHJvdmlkZXIucmVzdWx0ID0gWzFdO1xuXG4gICAgICAgICg8YW55PiBCcm93c2VyV2luZG93UmVnaXN0cnkpLmxpdmVXaW5kb3dzUHJvdmlkZXIgPSBtb2NrTGl2ZVdpbmRvd3NQcm92aWRlcjtcblxuICAgICAgICBCcm93c2VyV2luZG93UmVnaXN0cnkudGFnKDEsIHtuYW1lOiAndGVzdCd9KTtcblxuICAgICAgICBjb25zdCBleHBlY3RlZCA9IHtcbiAgICAgICAgICAgIFwidGFnc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwidGVzdFwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgYXNzZXJ0Lm9rKGlzUHJlc2VudChCcm93c2VyV2luZG93UmVnaXN0cnkuZ2V0KDEpKSk7XG5cbiAgICAgICAgYXNzZXJ0SlNPTihCcm93c2VyV2luZG93UmVnaXN0cnkuZ2V0KDEpLCBleHBlY3RlZCk7XG5cbiAgICAgICAgYXNzZXJ0SlNPTihCcm93c2VyV2luZG93UmVnaXN0cnkudGFnZ2VkKHtuYW1lOiAnbmFtZScsIHZhbHVlOiAndGVzdCd9KSwgWzFdKTtcblxuICAgIH0pO1xuXG59KTtcblxuIl19