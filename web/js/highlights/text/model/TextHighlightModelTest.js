"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TextHighlightModel_1 = require("./TextHighlightModel");
const Assertions_1 = require("../../../test/Assertions");
const DocMetas_1 = require("../../../metadata/DocMetas");
const TextHighlightRecords_1 = require("../../../metadata/TextHighlightRecords");
const Rect_1 = require("../../../Rect");
const TextRect_1 = require("../../../metadata/TextRect");
const TestingTime_1 = require("polar-shared/src/test/TestingTime");
const Proxies_1 = require("../../../proxies/Proxies");
TestingTime_1.TestingTime.freeze();
describe('TextHighlightModel', function () {
    describe('Listen for new highlights', function () {
        it("Initial values", function () {
            TestingTime_1.TestingTime.freeze();
            const docMeta = createDocMeta();
            const textHighlightModel = new TextHighlightModel_1.TextHighlightModel();
            const mutations = [];
            textHighlightModel.registerListener(docMeta, (textHighlightEvent) => {
                mutations.push(summarize(textHighlightEvent));
            });
            const expected = [
                {
                    "pageNum": 1,
                    "textHighlight": {
                        "id": "1Af41QXbBH",
                        "guid": "1Af41QXbBH",
                        "created": "2012-03-02T11:38:49.321Z",
                        "lastUpdated": "2012-03-02T11:38:49.321Z",
                        "rects": {
                            "0": {
                                "left": 100,
                                "top": 100,
                                "right": 200,
                                "bottom": 200,
                                "width": 100,
                                "height": 100
                            }
                        },
                        "textSelections": {
                            "0": {
                                "text": "hello world",
                                "rect": null
                            }
                        },
                        "text": {
                            "TEXT": "hello world"
                        },
                        "images": {},
                        "notes": {},
                        "questions": {},
                        "flashcards": {},
                        "color": "yellow"
                    },
                    "mutationType": "INITIAL"
                }
            ];
            Assertions_1.assertJSON(mutations, expected);
        });
        it("New text highlights on new pages", function () {
            TestingTime_1.TestingTime.freeze();
            const docMeta = createDocMeta();
            const textHighlightModel = new TextHighlightModel_1.TextHighlightModel();
            let mutations = [];
            textHighlightModel.registerListener(docMeta, function (textHighlightEvent) {
                mutations.push(summarize(textHighlightEvent));
            });
            mutations = [];
            const textHighlightRecord = createTextHighlightRecord();
            DocMetas_1.DocMetas.getPageMeta(docMeta, 3).textHighlights[textHighlightRecord.id] = textHighlightRecord.value;
            const expected = [
                {
                    "pageNum": 3,
                    "textHighlight": {
                        "id": "1Af41QXbBH",
                        "guid": "1Af41QXbBH",
                        "created": "2012-03-02T11:38:49.321Z",
                        "lastUpdated": "2012-03-02T11:38:49.321Z",
                        "rects": {
                            "0": {
                                "left": 100,
                                "top": 100,
                                "right": 200,
                                "bottom": 200,
                                "width": 100,
                                "height": 100
                            }
                        },
                        "textSelections": {
                            "0": {
                                "text": "hello world",
                                "rect": null
                            }
                        },
                        "text": {
                            "TEXT": "hello world"
                        },
                        "images": {},
                        "notes": {},
                        "questions": {},
                        "flashcards": {},
                        "color": "yellow"
                    },
                    "mutationType": "SET"
                }
            ];
            console.log(mutations);
            Assertions_1.assertJSON(mutations, expected);
        });
    });
});
function summarize(textHighlightEvent) {
    return {
        pageNum: textHighlightEvent.pageMeta.pageInfo.num,
        textHighlight: textHighlightEvent.value,
        mutationType: textHighlightEvent.mutationType
    };
}
function createDocMeta() {
    const fingerprint = "110dd61fd57444010b1ab5ff38782f0f";
    const docMeta = DocMetas_1.DocMetas.createWithinInitialPagemarks(fingerprint, 14);
    DocMetas_1.DocMetas.addPagemarks(docMeta, { nrPages: 1, offsetPage: 4, percentage: 50 });
    const textHighlightRecord = createTextHighlightRecord();
    DocMetas_1.DocMetas.getPageMeta(docMeta, 1).textHighlights[textHighlightRecord.id] = textHighlightRecord.value;
    return Proxies_1.Proxies.create(docMeta);
}
function createTextHighlightRecord() {
    const rects = [new Rect_1.Rect({ top: 100, left: 100, right: 200, bottom: 200, width: 100, height: 100 })];
    const textSelections = [new TextRect_1.TextRect({ text: "hello world" })];
    const text = "hello world";
    return TextHighlightRecords_1.TextHighlightRecords.create(rects, textSelections, { TEXT: text });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGV4dEhpZ2hsaWdodE1vZGVsVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlRleHRIaWdobGlnaHRNb2RlbFRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2REFBd0Q7QUFFeEQseURBQW9EO0FBQ3BELHlEQUFvRDtBQUNwRCxpRkFBNEU7QUFDNUUsd0NBQW1DO0FBQ25DLHlEQUFvRDtBQUNwRCxtRUFBOEQ7QUFDOUQsc0RBQWlEO0FBRWpELHlCQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFckIsUUFBUSxDQUFDLG9CQUFvQixFQUFFO0lBSTNCLFFBQVEsQ0FBQywyQkFBMkIsRUFBRTtRQUVsQyxFQUFFLENBQUMsZ0JBQWdCLEVBQUU7WUFFakIseUJBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUVyQixNQUFNLE9BQU8sR0FBRyxhQUFhLEVBQUUsQ0FBQztZQUVoQyxNQUFNLGtCQUFrQixHQUFHLElBQUksdUNBQWtCLEVBQUUsQ0FBQztZQUVwRCxNQUFNLFNBQVMsR0FBVSxFQUFFLENBQUM7WUFFNUIsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsRUFBRTtnQkFDaEUsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO1lBQ2xELENBQUMsQ0FBRSxDQUFDO1lBRUosTUFBTSxRQUFRLEdBQUc7Z0JBQ2I7b0JBQ0ksU0FBUyxFQUFFLENBQUM7b0JBQ1osZUFBZSxFQUFFO3dCQUNiLElBQUksRUFBRSxZQUFZO3dCQUNsQixNQUFNLEVBQUUsWUFBWTt3QkFDcEIsU0FBUyxFQUFFLDBCQUEwQjt3QkFDckMsYUFBYSxFQUFFLDBCQUEwQjt3QkFDekMsT0FBTyxFQUFFOzRCQUNMLEdBQUcsRUFBRTtnQ0FDRCxNQUFNLEVBQUUsR0FBRztnQ0FDWCxLQUFLLEVBQUUsR0FBRztnQ0FDVixPQUFPLEVBQUUsR0FBRztnQ0FDWixRQUFRLEVBQUUsR0FBRztnQ0FDYixPQUFPLEVBQUUsR0FBRztnQ0FDWixRQUFRLEVBQUUsR0FBRzs2QkFDaEI7eUJBQ0o7d0JBQ0QsZ0JBQWdCLEVBQUU7NEJBQ2QsR0FBRyxFQUFFO2dDQUNELE1BQU0sRUFBRSxhQUFhO2dDQUNyQixNQUFNLEVBQUUsSUFBSTs2QkFDZjt5QkFDSjt3QkFDRCxNQUFNLEVBQUU7NEJBQ0osTUFBTSxFQUFFLGFBQWE7eUJBQ3hCO3dCQUNELFFBQVEsRUFBRSxFQUFFO3dCQUNaLE9BQU8sRUFBRSxFQUFFO3dCQUNYLFdBQVcsRUFBRSxFQUFFO3dCQUNmLFlBQVksRUFBRSxFQUFFO3dCQUNoQixPQUFPLEVBQUUsUUFBUTtxQkFDcEI7b0JBQ0QsY0FBYyxFQUFFLFNBQVM7aUJBQzVCO2FBQ0osQ0FBQztZQUVGLHVCQUFVLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRXBDLENBQUMsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLGtDQUFrQyxFQUFFO1lBRW5DLHlCQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7WUFFckIsTUFBTSxPQUFPLEdBQUcsYUFBYSxFQUFFLENBQUM7WUFFaEMsTUFBTSxrQkFBa0IsR0FBRyxJQUFJLHVDQUFrQixFQUFFLENBQUM7WUFFcEQsSUFBSSxTQUFTLEdBQVUsRUFBRSxDQUFDO1lBRTFCLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFTLGtCQUFrQjtnQkFDcEUsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO1lBQ2xELENBQUMsQ0FBRSxDQUFDO1lBRUosU0FBUyxHQUFHLEVBQUUsQ0FBQztZQUVmLE1BQU0sbUJBQW1CLEdBQUcseUJBQXlCLEVBQUUsQ0FBQztZQUV4RCxtQkFBUSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLG1CQUFtQixDQUFDLEVBQUUsQ0FBQyxHQUFHLG1CQUFtQixDQUFDLEtBQUssQ0FBQztZQUVwRyxNQUFNLFFBQVEsR0FBRztnQkFDYjtvQkFDSSxTQUFTLEVBQUUsQ0FBQztvQkFDWixlQUFlLEVBQUU7d0JBQ2IsSUFBSSxFQUFFLFlBQVk7d0JBQ2xCLE1BQU0sRUFBRSxZQUFZO3dCQUNwQixTQUFTLEVBQUUsMEJBQTBCO3dCQUNyQyxhQUFhLEVBQUUsMEJBQTBCO3dCQUN6QyxPQUFPLEVBQUU7NEJBQ0wsR0FBRyxFQUFFO2dDQUNELE1BQU0sRUFBRSxHQUFHO2dDQUNYLEtBQUssRUFBRSxHQUFHO2dDQUNWLE9BQU8sRUFBRSxHQUFHO2dDQUNaLFFBQVEsRUFBRSxHQUFHO2dDQUNiLE9BQU8sRUFBRSxHQUFHO2dDQUNaLFFBQVEsRUFBRSxHQUFHOzZCQUNoQjt5QkFDSjt3QkFDRCxnQkFBZ0IsRUFBRTs0QkFDZCxHQUFHLEVBQUU7Z0NBQ0QsTUFBTSxFQUFFLGFBQWE7Z0NBQ3JCLE1BQU0sRUFBRSxJQUFJOzZCQUNmO3lCQUNKO3dCQUNELE1BQU0sRUFBRTs0QkFDSixNQUFNLEVBQUUsYUFBYTt5QkFDeEI7d0JBQ0QsUUFBUSxFQUFFLEVBQUU7d0JBQ1osT0FBTyxFQUFFLEVBQUU7d0JBQ1gsV0FBVyxFQUFFLEVBQUU7d0JBQ2YsWUFBWSxFQUFFLEVBQUU7d0JBQ2hCLE9BQU8sRUFBRSxRQUFRO3FCQUNwQjtvQkFDRCxjQUFjLEVBQUUsS0FBSztpQkFDeEI7YUFDSixDQUFDO1lBRUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUV2Qix1QkFBVSxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUVwQyxDQUFDLENBQUMsQ0FBQztJQUVQLENBQUMsQ0FBQyxDQUFDO0FBRVAsQ0FBQyxDQUFDLENBQUM7QUFFSCxTQUFTLFNBQVMsQ0FBQyxrQkFBbUM7SUFDbEQsT0FBTztRQUNILE9BQU8sRUFBRSxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUc7UUFDakQsYUFBYSxFQUFFLGtCQUFrQixDQUFDLEtBQUs7UUFDdkMsWUFBWSxFQUFFLGtCQUFrQixDQUFDLFlBQVk7S0FDaEQsQ0FBQztBQUNOLENBQUM7QUFFRCxTQUFTLGFBQWE7SUFFbEIsTUFBTSxXQUFXLEdBQUcsa0NBQWtDLENBQUM7SUFFdkQsTUFBTSxPQUFPLEdBQUcsbUJBQVEsQ0FBQyw0QkFBNEIsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdkUsbUJBQVEsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLEVBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUMsQ0FBQyxDQUFBO0lBSTNFLE1BQU0sbUJBQW1CLEdBQUcseUJBQXlCLEVBQUUsQ0FBQztJQUV4RCxtQkFBUSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLG1CQUFtQixDQUFDLEVBQUUsQ0FBQyxHQUFHLG1CQUFtQixDQUFDLEtBQUssQ0FBQztJQUVwRyxPQUFPLGlCQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBRW5DLENBQUM7QUFFRCxTQUFTLHlCQUF5QjtJQUU5QixNQUFNLEtBQUssR0FBVyxDQUFFLElBQUksV0FBSSxDQUFDLEVBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUMsQ0FBQyxDQUFFLENBQUM7SUFDNUcsTUFBTSxjQUFjLEdBQWUsQ0FBQyxJQUFJLG1CQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsYUFBYSxFQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3pFLE1BQU0sSUFBSSxHQUFHLGFBQWEsQ0FBQztJQUUzQixPQUFPLDJDQUFvQixDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsY0FBYyxFQUFFLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7QUFFNUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7VGV4dEhpZ2hsaWdodE1vZGVsfSBmcm9tICcuL1RleHRIaWdobGlnaHRNb2RlbCc7XG5pbXBvcnQge0Fubm90YXRpb25FdmVudH0gZnJvbSAnLi4vLi4vLi4vYW5ub3RhdGlvbnMvY29tcG9uZW50cy9Bbm5vdGF0aW9uRXZlbnQnO1xuaW1wb3J0IHthc3NlcnRKU09OfSBmcm9tICcuLi8uLi8uLi90ZXN0L0Fzc2VydGlvbnMnO1xuaW1wb3J0IHtEb2NNZXRhc30gZnJvbSAnLi4vLi4vLi4vbWV0YWRhdGEvRG9jTWV0YXMnO1xuaW1wb3J0IHtUZXh0SGlnaGxpZ2h0UmVjb3Jkc30gZnJvbSAnLi4vLi4vLi4vbWV0YWRhdGEvVGV4dEhpZ2hsaWdodFJlY29yZHMnO1xuaW1wb3J0IHtSZWN0fSBmcm9tICcuLi8uLi8uLi9SZWN0JztcbmltcG9ydCB7VGV4dFJlY3R9IGZyb20gJy4uLy4uLy4uL21ldGFkYXRhL1RleHRSZWN0JztcbmltcG9ydCB7VGVzdGluZ1RpbWV9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdGVzdC9UZXN0aW5nVGltZSc7XG5pbXBvcnQge1Byb3hpZXN9IGZyb20gJy4uLy4uLy4uL3Byb3hpZXMvUHJveGllcyc7XG5cblRlc3RpbmdUaW1lLmZyZWV6ZSgpO1xuXG5kZXNjcmliZSgnVGV4dEhpZ2hsaWdodE1vZGVsJywgZnVuY3Rpb24oKSB7XG5cbiAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy84MDI0MTQ5L2lzLWl0LXBvc3NpYmxlLXRvLWdldC10aGUtbm9uLWVudW1lcmFibGUtaW5oZXJpdGVkLXByb3BlcnR5LW5hbWVzLW9mLWFuLW9iamVjdFxuXG4gICAgZGVzY3JpYmUoJ0xpc3RlbiBmb3IgbmV3IGhpZ2hsaWdodHMnLCBmdW5jdGlvbigpIHtcblxuICAgICAgICBpdChcIkluaXRpYWwgdmFsdWVzXCIsIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICBUZXN0aW5nVGltZS5mcmVlemUoKTtcblxuICAgICAgICAgICAgY29uc3QgZG9jTWV0YSA9IGNyZWF0ZURvY01ldGEoKTtcblxuICAgICAgICAgICAgY29uc3QgdGV4dEhpZ2hsaWdodE1vZGVsID0gbmV3IFRleHRIaWdobGlnaHRNb2RlbCgpO1xuXG4gICAgICAgICAgICBjb25zdCBtdXRhdGlvbnM6IGFueVtdID0gW107XG5cbiAgICAgICAgICAgIHRleHRIaWdobGlnaHRNb2RlbC5yZWdpc3Rlckxpc3RlbmVyKGRvY01ldGEsICh0ZXh0SGlnaGxpZ2h0RXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBtdXRhdGlvbnMucHVzaChzdW1tYXJpemUodGV4dEhpZ2hsaWdodEV2ZW50KSk7XG4gICAgICAgICAgICB9ICk7XG5cbiAgICAgICAgICAgIGNvbnN0IGV4cGVjdGVkID0gW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJwYWdlTnVtXCI6IDEsXG4gICAgICAgICAgICAgICAgICAgIFwidGV4dEhpZ2hsaWdodFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwiMUFmNDFRWGJCSFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJndWlkXCI6IFwiMUFmNDFRWGJCSFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjcmVhdGVkXCI6IFwiMjAxMi0wMy0wMlQxMTozODo0OS4zMjFaXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxhc3RVcGRhdGVkXCI6IFwiMjAxMi0wMy0wMlQxMTozODo0OS4zMjFaXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJlY3RzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjBcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxlZnRcIjogMTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRvcFwiOiAxMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmlnaHRcIjogMjAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJvdHRvbVwiOiAyMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogMTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhlaWdodFwiOiAxMDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0U2VsZWN0aW9uc1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIwXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiaGVsbG8gd29ybGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyZWN0XCI6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlRFWFRcIjogXCJoZWxsbyB3b3JsZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJpbWFnZXNcIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5vdGVzXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJxdWVzdGlvbnNcIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICBcImZsYXNoY2FyZHNcIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwieWVsbG93XCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCJtdXRhdGlvblR5cGVcIjogXCJJTklUSUFMXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICBhc3NlcnRKU09OKG11dGF0aW9ucywgZXhwZWN0ZWQpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KFwiTmV3IHRleHQgaGlnaGxpZ2h0cyBvbiBuZXcgcGFnZXNcIiwgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgIFRlc3RpbmdUaW1lLmZyZWV6ZSgpO1xuXG4gICAgICAgICAgICBjb25zdCBkb2NNZXRhID0gY3JlYXRlRG9jTWV0YSgpO1xuXG4gICAgICAgICAgICBjb25zdCB0ZXh0SGlnaGxpZ2h0TW9kZWwgPSBuZXcgVGV4dEhpZ2hsaWdodE1vZGVsKCk7XG5cbiAgICAgICAgICAgIGxldCBtdXRhdGlvbnM6IGFueVtdID0gW107XG5cbiAgICAgICAgICAgIHRleHRIaWdobGlnaHRNb2RlbC5yZWdpc3Rlckxpc3RlbmVyKGRvY01ldGEsIGZ1bmN0aW9uKHRleHRIaWdobGlnaHRFdmVudCkge1xuICAgICAgICAgICAgICAgIG11dGF0aW9ucy5wdXNoKHN1bW1hcml6ZSh0ZXh0SGlnaGxpZ2h0RXZlbnQpKTtcbiAgICAgICAgICAgIH0gKTtcblxuICAgICAgICAgICAgbXV0YXRpb25zID0gW107XG5cbiAgICAgICAgICAgIGNvbnN0IHRleHRIaWdobGlnaHRSZWNvcmQgPSBjcmVhdGVUZXh0SGlnaGxpZ2h0UmVjb3JkKCk7XG5cbiAgICAgICAgICAgIERvY01ldGFzLmdldFBhZ2VNZXRhKGRvY01ldGEsIDMpLnRleHRIaWdobGlnaHRzW3RleHRIaWdobGlnaHRSZWNvcmQuaWRdID0gdGV4dEhpZ2hsaWdodFJlY29yZC52YWx1ZTtcblxuICAgICAgICAgICAgY29uc3QgZXhwZWN0ZWQgPSBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcInBhZ2VOdW1cIjogMyxcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0SGlnaGxpZ2h0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCIxQWY0MVFYYkJIXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImd1aWRcIjogXCIxQWY0MVFYYkJIXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNyZWF0ZWRcIjogXCIyMDEyLTAzLTAyVDExOjM4OjQ5LjMyMVpcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGFzdFVwZGF0ZWRcIjogXCIyMDEyLTAzLTAyVDExOjM4OjQ5LjMyMVpcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicmVjdHNcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiMFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGVmdFwiOiAxMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidG9wXCI6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyaWdodFwiOiAyMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYm90dG9tXCI6IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiAxMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IDEwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRleHRTZWxlY3Rpb25zXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjBcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCJoZWxsbyB3b3JsZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJlY3RcIjogbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVEVYVFwiOiBcImhlbGxvIHdvcmxkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcImltYWdlc1wiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibm90ZXNcIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICBcInF1ZXN0aW9uc1wiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZmxhc2hjYXJkc1wiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCJ5ZWxsb3dcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcIm11dGF0aW9uVHlwZVwiOiBcIlNFVFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2cobXV0YXRpb25zKTtcblxuICAgICAgICAgICAgYXNzZXJ0SlNPTihtdXRhdGlvbnMsIGV4cGVjdGVkKTtcblxuICAgICAgICB9KTtcblxuICAgIH0pO1xuXG59KTtcblxuZnVuY3Rpb24gc3VtbWFyaXplKHRleHRIaWdobGlnaHRFdmVudDogQW5ub3RhdGlvbkV2ZW50KTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBwYWdlTnVtOiB0ZXh0SGlnaGxpZ2h0RXZlbnQucGFnZU1ldGEucGFnZUluZm8ubnVtLFxuICAgICAgICB0ZXh0SGlnaGxpZ2h0OiB0ZXh0SGlnaGxpZ2h0RXZlbnQudmFsdWUsXG4gICAgICAgIG11dGF0aW9uVHlwZTogdGV4dEhpZ2hsaWdodEV2ZW50Lm11dGF0aW9uVHlwZVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURvY01ldGEoKSB7XG5cbiAgICBjb25zdCBmaW5nZXJwcmludCA9IFwiMTEwZGQ2MWZkNTc0NDQwMTBiMWFiNWZmMzg3ODJmMGZcIjtcblxuICAgIGNvbnN0IGRvY01ldGEgPSBEb2NNZXRhcy5jcmVhdGVXaXRoaW5Jbml0aWFsUGFnZW1hcmtzKGZpbmdlcnByaW50LCAxNCk7XG4gICAgRG9jTWV0YXMuYWRkUGFnZW1hcmtzKGRvY01ldGEsIHtuclBhZ2VzOiAxLCBvZmZzZXRQYWdlOiA0LCBwZXJjZW50YWdlOiA1MH0pXG5cbiAgICAvLyBjcmVhdGUgc29tZSBpbml0aWFsIGhpZ2hsaWdodHMuXG5cbiAgICBjb25zdCB0ZXh0SGlnaGxpZ2h0UmVjb3JkID0gY3JlYXRlVGV4dEhpZ2hsaWdodFJlY29yZCgpO1xuXG4gICAgRG9jTWV0YXMuZ2V0UGFnZU1ldGEoZG9jTWV0YSwgMSkudGV4dEhpZ2hsaWdodHNbdGV4dEhpZ2hsaWdodFJlY29yZC5pZF0gPSB0ZXh0SGlnaGxpZ2h0UmVjb3JkLnZhbHVlO1xuXG4gICAgcmV0dXJuIFByb3hpZXMuY3JlYXRlKGRvY01ldGEpO1xuXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRleHRIaWdobGlnaHRSZWNvcmQoKSB7XG5cbiAgICBjb25zdCByZWN0czogUmVjdFtdID0gWyBuZXcgUmVjdCh7dG9wOiAxMDAsIGxlZnQ6IDEwMCwgcmlnaHQ6IDIwMCwgYm90dG9tOiAyMDAsIHdpZHRoOiAxMDAsIGhlaWdodDogMTAwfSkgXTtcbiAgICBjb25zdCB0ZXh0U2VsZWN0aW9uczogVGV4dFJlY3RbXSA9IFtuZXcgVGV4dFJlY3Qoe3RleHQ6IFwiaGVsbG8gd29ybGRcIn0pXTtcbiAgICBjb25zdCB0ZXh0ID0gXCJoZWxsbyB3b3JsZFwiO1xuXG4gICAgcmV0dXJuIFRleHRIaWdobGlnaHRSZWNvcmRzLmNyZWF0ZShyZWN0cywgdGV4dFNlbGVjdGlvbnMsIHtURVhUOiB0ZXh0fSk7XG5cbn1cbiJdfQ==