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
const MediaContents_1 = require("./MediaContents");
const Assertions_1 = require("../../../../test/Assertions");
describe('MediaContents', function () {
    describe('parse', function () {
        it("basic", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const content = "What is the capital of California? <img src=\"data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7\">";
                const expected = {
                    "content": "What is the capital of California? <img src=\"1hqKtrsGiLerE69bmb5i.gif\">",
                    "mediaFiles": [
                        {
                            "filename": "1hqKtrsGiLerE69bmb5i.gif",
                            "data": "R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7"
                        }
                    ]
                };
                Assertions_1.assertJSON(MediaContents_1.MediaContents.parse(content), expected);
            });
        });
    });
    describe('toMediaFile', function () {
        it("basic", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const dataURL = "data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7";
                const expected = {
                    "filename": "1hqKtrsGiLerE69bmb5i.gif",
                    "data": "R0lGODlhEAAQAMQAAORHHOVSKudfOulrSOp3WOyDZu6QdvCchPGolfO0o/XBs/fNwfjZ0frl3/zy7////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAkAABAALAAAAAAQABAAAAVVICSOZGlCQAosJ6mu7fiyZeKqNKToQGDsM8hBADgUXoGAiqhSvp5QAnQKGIgUhwFUYLCVDFCrKUE1lBavAViFIDlTImbKC5Gm2hB0SlBCBMQiB0UjIQA7"
                };
                Assertions_1.assertJSON(MediaContents_1.MediaContents.toMediaFile(dataURL).get(), expected);
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVkaWFDb250ZW50c1Rlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJNZWRpYUNvbnRlbnRzVGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLG1EQUE4QztBQUM5Qyw0REFBdUQ7QUFFdkQsUUFBUSxDQUFDLGVBQWUsRUFBRTtJQUV0QixRQUFRLENBQUMsT0FBTyxFQUFFO1FBRWQsRUFBRSxDQUFDLE9BQU8sRUFBRTs7Z0JBRVIsTUFBTSxPQUFPLEdBQUcseVdBQXlXLENBQUU7Z0JBRTNYLE1BQU0sUUFBUSxHQUFHO29CQUNiLFNBQVMsRUFBRSwyRUFBMkU7b0JBQ3RGLFlBQVksRUFBRTt3QkFDVjs0QkFDSSxVQUFVLEVBQUUsMEJBQTBCOzRCQUN0QyxNQUFNLEVBQUUsa1NBQWtTO3lCQUM3UztxQkFDSjtpQkFDSixDQUFDO2dCQUVGLHVCQUFVLENBQUMsNkJBQWEsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFFdkQsQ0FBQztTQUFBLENBQUMsQ0FBQztJQUVQLENBQUMsQ0FBQyxDQUFDO0lBRUgsUUFBUSxDQUFDLGFBQWEsRUFBRTtRQUVwQixFQUFFLENBQUMsT0FBTyxFQUFFOztnQkFFUixNQUFNLE9BQU8sR0FBRyx3VEFBd1QsQ0FBQztnQkFFelUsTUFBTSxRQUFRLEdBQVE7b0JBQ2QsVUFBVSxFQUFFLDBCQUEwQjtvQkFDdEMsTUFBTSxFQUFFLGtTQUFrUztpQkFDN1MsQ0FDSjtnQkFFRCx1QkFBVSxDQUFDLDZCQUFhLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBRW5FLENBQUM7U0FBQSxDQUFDLENBQUM7SUFFUCxDQUFDLENBQUMsQ0FBQztBQUdQLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtNZWRpYUNvbnRlbnRzfSBmcm9tICcuL01lZGlhQ29udGVudHMnO1xuaW1wb3J0IHthc3NlcnRKU09OfSBmcm9tICcuLi8uLi8uLi8uLi90ZXN0L0Fzc2VydGlvbnMnO1xuXG5kZXNjcmliZSgnTWVkaWFDb250ZW50cycsIGZ1bmN0aW9uKCkge1xuXG4gICAgZGVzY3JpYmUoJ3BhcnNlJywgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgaXQoXCJiYXNpY1wiLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IFwiV2hhdCBpcyB0aGUgY2FwaXRhbCBvZiBDYWxpZm9ybmlhPyA8aW1nIHNyYz1cXFwiZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoRUFBUUFNUUFBT1JISE9WU0t1ZGZPdWxyU09wM1dPeURadTZRZHZDY2hQR29sZk8wby9YQnMvZk53ZmpaMGZybDMvenk3Ly8vL3dBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFDSDVCQWtBQUJBQUxBQUFBQUFRQUJBQUFBVlZJQ1NPWkdsQ1FBb3NKNm11N2ZpeVplS3FOS1RvUUdEc004aEJBRGdVWG9HQWlxaFN2cDVRQW5RS0dJZ1Vod0ZVWUxDVkRGQ3JLVUUxbEJhdkFWaUZJRGxUSW1iS0M1R20yaEIwU2xCQ0JNUWlCMFVqSVFBN1xcXCI+XCIgO1xuXG4gICAgICAgICAgICBjb25zdCBleHBlY3RlZCA9IHtcbiAgICAgICAgICAgICAgICBcImNvbnRlbnRcIjogXCJXaGF0IGlzIHRoZSBjYXBpdGFsIG9mIENhbGlmb3JuaWE/IDxpbWcgc3JjPVxcXCIxaHFLdHJzR2lMZXJFNjlibWI1aS5naWZcXFwiPlwiLFxuICAgICAgICAgICAgICAgIFwibWVkaWFGaWxlc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZmlsZW5hbWVcIjogXCIxaHFLdHJzR2lMZXJFNjlibWI1aS5naWZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YVwiOiBcIlIwbEdPRGxoRUFBUUFNUUFBT1JISE9WU0t1ZGZPdWxyU09wM1dPeURadTZRZHZDY2hQR29sZk8wby9YQnMvZk53ZmpaMGZybDMvenk3Ly8vL3dBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFDSDVCQWtBQUJBQUxBQUFBQUFRQUJBQUFBVlZJQ1NPWkdsQ1FBb3NKNm11N2ZpeVplS3FOS1RvUUdEc004aEJBRGdVWG9HQWlxaFN2cDVRQW5RS0dJZ1Vod0ZVWUxDVkRGQ3JLVUUxbEJhdkFWaUZJRGxUSW1iS0M1R20yaEIwU2xCQ0JNUWlCMFVqSVFBN1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBhc3NlcnRKU09OKE1lZGlhQ29udGVudHMucGFyc2UoY29udGVudCksIGV4cGVjdGVkKTtcblxuICAgICAgICB9KTtcblxuICAgIH0pO1xuXG4gICAgZGVzY3JpYmUoJ3RvTWVkaWFGaWxlJywgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgaXQoXCJiYXNpY1wiLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgY29uc3QgZGF0YVVSTCA9IFwiZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoRUFBUUFNUUFBT1JISE9WU0t1ZGZPdWxyU09wM1dPeURadTZRZHZDY2hQR29sZk8wby9YQnMvZk53ZmpaMGZybDMvenk3Ly8vL3dBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFDSDVCQWtBQUJBQUxBQUFBQUFRQUJBQUFBVlZJQ1NPWkdsQ1FBb3NKNm11N2ZpeVplS3FOS1RvUUdEc004aEJBRGdVWG9HQWlxaFN2cDVRQW5RS0dJZ1Vod0ZVWUxDVkRGQ3JLVUUxbEJhdkFWaUZJRGxUSW1iS0M1R20yaEIwU2xCQ0JNUWlCMFVqSVFBN1wiO1xuXG4gICAgICAgICAgICBjb25zdCBleHBlY3RlZDogYW55ID0ge1xuICAgICAgICAgICAgICAgICAgICBcImZpbGVuYW1lXCI6IFwiMWhxS3Ryc0dpTGVyRTY5Ym1iNWkuZ2lmXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZGF0YVwiOiBcIlIwbEdPRGxoRUFBUUFNUUFBT1JISE9WU0t1ZGZPdWxyU09wM1dPeURadTZRZHZDY2hQR29sZk8wby9YQnMvZk53ZmpaMGZybDMvenk3Ly8vL3dBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFDSDVCQWtBQUJBQUxBQUFBQUFRQUJBQUFBVlZJQ1NPWkdsQ1FBb3NKNm11N2ZpeVplS3FOS1RvUUdEc004aEJBRGdVWG9HQWlxaFN2cDVRQW5RS0dJZ1Vod0ZVWUxDVkRGQ3JLVUUxbEJhdkFWaUZJRGxUSW1iS0M1R20yaEIwU2xCQ0JNUWlCMFVqSVFBN1wiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgO1xuXG4gICAgICAgICAgICBhc3NlcnRKU09OKE1lZGlhQ29udGVudHMudG9NZWRpYUZpbGUoZGF0YVVSTCkuZ2V0KCksIGV4cGVjdGVkKTtcblxuICAgICAgICB9KTtcblxuICAgIH0pO1xuXG5cbn0pO1xuIl19