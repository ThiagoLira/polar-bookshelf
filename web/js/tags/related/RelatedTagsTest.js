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
const RelatedTags_1 = require("./RelatedTags");
const Assertions_1 = require("../../test/Assertions");
const chai_1 = require("chai");
describe('RelatedTags', function () {
    const getTagDocsIndex = (relatedTags) => {
        return relatedTags.tagDocsIndex;
    };
    it("basic", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const relatedTags = new RelatedTags_1.RelatedTags();
            relatedTags.update('0x01', 'set', 'linux');
            relatedTags.update('0x01', 'set', 'microsoft');
            relatedTags.update('0x02', 'set', 'linux');
            relatedTags.update('0x02', 'set', 'google');
            relatedTags.update('0x03', 'set', 'linux');
            relatedTags.update('0x03', 'set', 'microsoft');
            relatedTags.update('0x04', 'set', 'linux');
            relatedTags.update('0x04', 'set', 'microsoft');
            relatedTags.update('0x05', 'set', 'linux');
            relatedTags.update('0x05', 'set', 'google');
            const tagMetaIndex = getTagDocsIndex(relatedTags);
            chai_1.assert.isDefined(tagMetaIndex);
            Assertions_1.assertJSON(tagMetaIndex, {
                "linux": {
                    "tag": "linux",
                    "docs": [
                        "0x01",
                        "0x02",
                        "0x03",
                        "0x04",
                        "0x05"
                    ]
                },
                "microsoft": {
                    "tag": "microsoft",
                    "docs": [
                        "0x01",
                        "0x03",
                        "0x04"
                    ]
                },
                "google": {
                    "tag": "google",
                    "docs": [
                        "0x02",
                        "0x05"
                    ]
                }
            }, undefined, true);
            const tagHits = relatedTags.compute(['linux']);
            Assertions_1.assertJSON(tagHits, [
                {
                    "tag": "microsoft",
                    "hits": 3
                },
                {
                    "tag": "google",
                    "hits": 2
                }
            ], undefined, true);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVsYXRlZFRhZ3NUZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUmVsYXRlZFRhZ3NUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsK0NBQTBDO0FBQzFDLHNEQUFpRDtBQUNqRCwrQkFBNEI7QUFFNUIsUUFBUSxDQUFDLGFBQWEsRUFBRTtJQUVwQixNQUFNLGVBQWUsR0FBRyxDQUFDLFdBQXdCLEVBQUUsRUFBRTtRQUNqRCxPQUFjLFdBQVksQ0FBQyxZQUFZLENBQUM7SUFDNUMsQ0FBQyxDQUFDO0lBRUYsRUFBRSxDQUFDLE9BQU8sRUFBRTs7WUFFUixNQUFNLFdBQVcsR0FBRyxJQUFJLHlCQUFXLEVBQUUsQ0FBQztZQUV0QyxXQUFXLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDM0MsV0FBVyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBRS9DLFdBQVcsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztZQUMzQyxXQUFXLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFFNUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQzNDLFdBQVcsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxXQUFXLENBQUMsQ0FBQztZQUUvQyxXQUFXLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDM0MsV0FBVyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBRS9DLFdBQVcsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztZQUMzQyxXQUFXLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFFNUMsTUFBTSxZQUFZLEdBQUcsZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBRWxELGFBQU0sQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUM7WUFFL0IsdUJBQVUsQ0FBQyxZQUFZLEVBQUU7Z0JBQ2xCLE9BQU8sRUFBRTtvQkFDTCxLQUFLLEVBQUUsT0FBTztvQkFDZCxNQUFNLEVBQUU7d0JBQ0osTUFBTTt3QkFDTixNQUFNO3dCQUNOLE1BQU07d0JBQ04sTUFBTTt3QkFDTixNQUFNO3FCQUNUO2lCQUNKO2dCQUNELFdBQVcsRUFBRTtvQkFDVCxLQUFLLEVBQUUsV0FBVztvQkFDbEIsTUFBTSxFQUFFO3dCQUNKLE1BQU07d0JBQ04sTUFBTTt3QkFDTixNQUFNO3FCQUNUO2lCQUNKO2dCQUNELFFBQVEsRUFBRTtvQkFDTixLQUFLLEVBQUUsUUFBUTtvQkFDZixNQUFNLEVBQUU7d0JBQ0osTUFBTTt3QkFDTixNQUFNO3FCQUNUO2lCQUNKO2FBQ0osRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFFdkIsTUFBTSxPQUFPLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFFL0MsdUJBQVUsQ0FBQyxPQUFPLEVBQUU7Z0JBQ2I7b0JBQ0ksS0FBSyxFQUFFLFdBQVc7b0JBQ2xCLE1BQU0sRUFBRSxDQUFDO2lCQUNaO2dCQUNEO29CQUNJLEtBQUssRUFBRSxRQUFRO29CQUNmLE1BQU0sRUFBRSxDQUFDO2lCQUNaO2FBQ0osRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFM0IsQ0FBQztLQUFBLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtSZWxhdGVkVGFnc30gZnJvbSAnLi9SZWxhdGVkVGFncyc7XG5pbXBvcnQge2Fzc2VydEpTT059IGZyb20gJy4uLy4uL3Rlc3QvQXNzZXJ0aW9ucyc7XG5pbXBvcnQge2Fzc2VydH0gZnJvbSAnY2hhaSc7XG5cbmRlc2NyaWJlKCdSZWxhdGVkVGFncycsIGZ1bmN0aW9uKCkge1xuXG4gICAgY29uc3QgZ2V0VGFnRG9jc0luZGV4ID0gKHJlbGF0ZWRUYWdzOiBSZWxhdGVkVGFncykgPT4ge1xuICAgICAgICByZXR1cm4gKDxhbnk+IHJlbGF0ZWRUYWdzKS50YWdEb2NzSW5kZXg7XG4gICAgfTtcblxuICAgIGl0KFwiYmFzaWNcIiwgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgY29uc3QgcmVsYXRlZFRhZ3MgPSBuZXcgUmVsYXRlZFRhZ3MoKTtcblxuICAgICAgICByZWxhdGVkVGFncy51cGRhdGUoJzB4MDEnLCAnc2V0JywgJ2xpbnV4Jyk7XG4gICAgICAgIHJlbGF0ZWRUYWdzLnVwZGF0ZSgnMHgwMScsICdzZXQnLCAnbWljcm9zb2Z0Jyk7XG5cbiAgICAgICAgcmVsYXRlZFRhZ3MudXBkYXRlKCcweDAyJywgJ3NldCcsICdsaW51eCcpO1xuICAgICAgICByZWxhdGVkVGFncy51cGRhdGUoJzB4MDInLCAnc2V0JywgJ2dvb2dsZScpO1xuXG4gICAgICAgIHJlbGF0ZWRUYWdzLnVwZGF0ZSgnMHgwMycsICdzZXQnLCAnbGludXgnKTtcbiAgICAgICAgcmVsYXRlZFRhZ3MudXBkYXRlKCcweDAzJywgJ3NldCcsICdtaWNyb3NvZnQnKTtcblxuICAgICAgICByZWxhdGVkVGFncy51cGRhdGUoJzB4MDQnLCAnc2V0JywgJ2xpbnV4Jyk7XG4gICAgICAgIHJlbGF0ZWRUYWdzLnVwZGF0ZSgnMHgwNCcsICdzZXQnLCAnbWljcm9zb2Z0Jyk7XG5cbiAgICAgICAgcmVsYXRlZFRhZ3MudXBkYXRlKCcweDA1JywgJ3NldCcsICdsaW51eCcpO1xuICAgICAgICByZWxhdGVkVGFncy51cGRhdGUoJzB4MDUnLCAnc2V0JywgJ2dvb2dsZScpO1xuXG4gICAgICAgIGNvbnN0IHRhZ01ldGFJbmRleCA9IGdldFRhZ0RvY3NJbmRleChyZWxhdGVkVGFncyk7XG5cbiAgICAgICAgYXNzZXJ0LmlzRGVmaW5lZCh0YWdNZXRhSW5kZXgpO1xuXG4gICAgICAgIGFzc2VydEpTT04odGFnTWV0YUluZGV4LCB7XG4gICAgICAgICAgICAgICBcImxpbnV4XCI6IHtcbiAgICAgICAgICAgICAgICAgICBcInRhZ1wiOiBcImxpbnV4XCIsXG4gICAgICAgICAgICAgICAgICAgXCJkb2NzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgXCIweDAxXCIsXG4gICAgICAgICAgICAgICAgICAgICAgIFwiMHgwMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICBcIjB4MDNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgXCIweDA0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgIFwiMHgwNVwiXG4gICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgIFwibWljcm9zb2Z0XCI6IHtcbiAgICAgICAgICAgICAgICAgICBcInRhZ1wiOiBcIm1pY3Jvc29mdFwiLFxuICAgICAgICAgICAgICAgICAgIFwiZG9jc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgIFwiMHgwMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICBcIjB4MDNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgXCIweDA0XCJcbiAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgXCJnb29nbGVcIjoge1xuICAgICAgICAgICAgICAgICAgIFwidGFnXCI6IFwiZ29vZ2xlXCIsXG4gICAgICAgICAgICAgICAgICAgXCJkb2NzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgXCIweDAyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgIFwiMHgwNVwiXG4gICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICB9LCB1bmRlZmluZWQsIHRydWUpO1xuXG4gICAgICAgIGNvbnN0IHRhZ0hpdHMgPSByZWxhdGVkVGFncy5jb21wdXRlKFsnbGludXgnXSk7XG5cbiAgICAgICAgYXNzZXJ0SlNPTih0YWdIaXRzLCBbXG4gICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgXCJ0YWdcIjogXCJtaWNyb3NvZnRcIixcbiAgICAgICAgICAgICAgICAgICBcImhpdHNcIjogM1xuICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICBcInRhZ1wiOiBcImdvb2dsZVwiLFxuICAgICAgICAgICAgICAgICAgIFwiaGl0c1wiOiAyXG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgIF0sIHVuZGVmaW5lZCwgdHJ1ZSk7XG5cbiAgICB9KTtcblxufSk7XG4iXX0=