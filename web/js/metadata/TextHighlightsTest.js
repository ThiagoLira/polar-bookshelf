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
const PageMeta_1 = require("./PageMeta");
const TextHighlights_1 = require("./TextHighlights");
const Assertions_1 = require("../test/Assertions");
describe('TestHighlights', function () {
    it("deleteTextHighlight", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const pageMeta = new PageMeta_1.PageMeta(PAGE_META);
            const textHighlight = pageMeta.textHighlights['1xU5hiNvuy'];
            TextHighlights_1.TextHighlights.deleteTextHighlight(pageMeta, textHighlight);
            chai_1.assert.equal(Object.values(pageMeta.textHighlights).length, 0);
            const expected = {
                "pagemarks": {},
                "notes": {},
                "comments": {},
                "questions": {},
                "readingProgress": {},
                "flashcards": {},
                "textHighlights": {},
                "areaHighlights": {},
                "screenshots": {},
                "thumbnails": {},
                "pageInfo": {
                    "num": 1
                }
            };
            Assertions_1.assertJSON(pageMeta, expected);
        });
    });
});
const PAGE_META = {
    "pagemarks": {},
    "notes": {},
    "questions": {},
    "flashcards": {},
    "textHighlights": {
        "1xU5hiNvuy": {
            "id": "1xU5hiNvuy",
            "created": "2018-09-02T21:13:50.500Z",
            "lastUpdated": "2018-09-02T21:13:50.500Z",
            "rects": {
                "0": {
                    "left": 72,
                    "top": 469.3333333333333,
                    "right": 391.0260199999999,
                    "bottom": 482.66666666666663,
                    "width": 319.0260199999999,
                    "height": 13.333333333333314
                },
                "1": {
                    "left": 72,
                    "top": 482.66666666666663,
                    "right": 390.7894666666666,
                    "bottom": 496,
                    "width": 318.7894666666666,
                    "height": 13.333333333333371
                },
                "2": {
                    "left": 72,
                    "top": 496,
                    "right": 390.8363746666667,
                    "bottom": 509.3333333333333,
                    "width": 318.8363746666667,
                    "height": 13.333333333333314
                },
                "3": {
                    "left": 72,
                    "top": 509.3333333333333,
                    "right": 391.0232413333333,
                    "bottom": 522.6666666666666,
                    "width": 319.0232413333333,
                    "height": 13.333333333333314
                },
                "4": {
                    "left": 72,
                    "top": 522.6666666666666,
                    "right": 390.7615893333333,
                    "bottom": 536,
                    "width": 318.7615893333333,
                    "height": 13.333333333333371
                },
                "5": {
                    "left": 72,
                    "top": 536,
                    "right": 390.79155,
                    "bottom": 548.6666666666666,
                    "width": 318.79155,
                    "height": 12.666666666666629
                },
                "6": {
                    "left": 72,
                    "top": 548.6666666666666,
                    "right": 390.75672399999996,
                    "bottom": 562,
                    "width": 318.75672399999996,
                    "height": 13.333333333333371
                },
                "7": {
                    "left": 72,
                    "top": 562,
                    "right": 390.7578199999999,
                    "bottom": 575.3333333333333,
                    "width": 318.7578199999999,
                    "height": 13.333333333333258
                },
                "8": {
                    "left": 72,
                    "top": 575.3333333333333,
                    "right": 390.8086199999999,
                    "bottom": 588.6666666666666,
                    "width": 318.8086199999999,
                    "height": 13.333333333333371
                },
                "9": {
                    "left": 72,
                    "top": 588.6666666666666,
                    "right": 391.00954,
                    "bottom": 602,
                    "width": 319.00954,
                    "height": 13.333333333333371
                },
                "10": {
                    "left": 72,
                    "top": 602,
                    "right": 391.002632,
                    "bottom": 615.3333333333333,
                    "width": 319.002632,
                    "height": 13.333333333333258
                },
                "11": {
                    "left": 72,
                    "top": 615.3333333333333,
                    "right": 390.8061413333333,
                    "bottom": 628.6666666666666,
                    "width": 318.8061413333333,
                    "height": 13.333333333333371
                },
                "12": {
                    "left": 72,
                    "top": 628.6666666666666,
                    "right": 390.788138,
                    "bottom": 642,
                    "width": 318.788138,
                    "height": 13.333333333333371
                },
                "13": {
                    "left": 72,
                    "top": 642,
                    "right": 117.353912,
                    "bottom": 653.3333333333333,
                    "width": 45.353911999999994,
                    "height": 11.333333333333258
                }
            },
            "textSelections": {
                "0": {
                    "text": "Dynamic languages such as JavaScript are more difficult to com-",
                    "rect": {
                        "left": 72,
                        "top": 469.3333333333333,
                        "right": 391.0260199999999,
                        "bottom": 480.66666666666663,
                        "width": 319.02601999999996,
                        "height": 11.333333333333332
                    }
                },
                "1": {
                    "text": "pile than statically typed ones. Since no concrete type information",
                    "rect": {
                        "left": 72,
                        "top": 482.66666666666663,
                        "right": 390.7894666666666,
                        "bottom": 494,
                        "width": 318.7894666666666,
                        "height": 11.333333333333332
                    }
                },
                "2": {
                    "text": "is available, traditional compilers need to emit generic code that can",
                    "rect": {
                        "left": 72,
                        "top": 496,
                        "right": 390.8363746666667,
                        "bottom": 507.3333333333333,
                        "width": 318.83637466666664,
                        "height": 11.333333333333332
                    }
                },
                "3": {
                    "text": "handle all possible type combinations at runtime. We present an al-",
                    "rect": {
                        "left": 72,
                        "top": 509.3333333333333,
                        "right": 391.0232413333333,
                        "bottom": 520.6666666666666,
                        "width": 319.0232413333333,
                        "height": 11.333333333333332
                    }
                },
                "4": {
                    "text": "ternative compilation technique for dynamically-typed languages",
                    "rect": {
                        "left": 72,
                        "top": 522.6666666666666,
                        "right": 390.7615893333333,
                        "bottom": 534,
                        "width": 318.7615893333333,
                        "height": 11.333333333333332
                    }
                },
                "5": {
                    "text": "that identifies frequently executed loop traces at run-time and then",
                    "rect": {
                        "left": 72,
                        "top": 536,
                        "right": 390.79155,
                        "bottom": 547.3333333333333,
                        "width": 318.79155,
                        "height": 11.333333333333332
                    }
                },
                "6": {
                    "text": "generates machine code on the fly that is specialized for the ac-",
                    "rect": {
                        "left": 72,
                        "top": 548.6666666666666,
                        "right": 390.75672399999996,
                        "bottom": 560,
                        "width": 318.75672399999996,
                        "height": 11.333333333333332
                    }
                },
                "7": {
                    "text": "tual dynamic types occurring on each path through the loop. Our",
                    "rect": {
                        "left": 72,
                        "top": 562,
                        "right": 390.7578199999999,
                        "bottom": 573.3333333333333,
                        "width": 318.75782,
                        "height": 11.333333333333332
                    }
                },
                "8": {
                    "text": "method provides cheap inter-procedural type specialization, and an",
                    "rect": {
                        "left": 72,
                        "top": 575.3333333333333,
                        "right": 390.8086199999999,
                        "bottom": 586.6666666666666,
                        "width": 318.80861999999996,
                        "height": 11.333333333333332
                    }
                },
                "9": {
                    "text": "elegant and efficient way of incrementally compiling lazily discov-",
                    "rect": {
                        "left": 72,
                        "top": 588.6666666666666,
                        "right": 391.00954,
                        "bottom": 600,
                        "width": 319.00954,
                        "height": 11.333333333333332
                    }
                },
                "10": {
                    "text": "ered alternative paths through nested loops. We have implemented",
                    "rect": {
                        "left": 72,
                        "top": 602,
                        "right": 391.002632,
                        "bottom": 613.3333333333333,
                        "width": 319.00263199999995,
                        "height": 11.333333333333332
                    }
                },
                "11": {
                    "text": "a dynamic compiler for JavaScript based on our technique and we",
                    "rect": {
                        "left": 72,
                        "top": 615.3333333333333,
                        "right": 390.8061413333333,
                        "bottom": 626.6666666666666,
                        "width": 318.8061413333333,
                        "height": 11.333333333333332
                    }
                },
                "12": {
                    "text": "have measured speedups of 10x and more for certain benchmark",
                    "rect": {
                        "left": 72,
                        "top": 628.6666666666666,
                        "right": 390.788138,
                        "bottom": 640,
                        "width": 318.788138,
                        "height": 11.333333333333332
                    }
                },
                "13": {
                    "text": "programs",
                    "rect": {
                        "left": 72,
                        "top": 642,
                        "right": 117.353912,
                        "bottom": 653.3333333333333,
                        "width": 45.353911999999994,
                        "height": 11.333333333333332
                    }
                }
            },
            "text": "\nDynamic languages such as JavaScript are more difficult to com-\npile than statically typed ones. Since no concrete type information\nis available, traditional compilers need to emit generic code that can\nhandle all possible type combinations at runtime. We present an al-\nternative compilation technique for dynamically-typed languages\nthat identifies frequently executed loop traces at run-time and then\ngenerates machine code on the fly that is specialized for the ac-\ntual dynamic types occurring on each path through the loop. Our\nmethod provides cheap inter-procedural type specialization, and an\nelegant and efficient way of incrementally compiling lazily discov-\nered alternative paths through nested loops. We have implemented\na dynamic compiler for JavaScript based on our technique and we\nhave measured speedups of 10x and more for certain benchmark\nprograms",
            "notes": {},
            "questions": {},
            "flashcards": {},
            "images": {
                "screenshot": {
                    "type": "png",
                    "src": "screenshot:1AbQQJdatY",
                    "width": 478.2274169921875,
                    "height": 256.09375,
                    "rel": "screenshot"
                }
            }
        }
    },
    "areaHighlights": {},
    "screenshots": {},
    "thumbnails": {},
    "pageInfo": {
        "num": 1
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGV4dEhpZ2hsaWdodHNUZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVGV4dEhpZ2hsaWdodHNUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsK0JBQTRCO0FBQzVCLHlDQUFvQztBQUNwQyxxREFBZ0Q7QUFDaEQsbURBQThDO0FBRTlDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRTtJQUV2QixFQUFFLENBQUMscUJBQXFCLEVBQUU7O1lBRXRCLE1BQU0sUUFBUSxHQUFHLElBQUksbUJBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUV6QyxNQUFNLGFBQWEsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBRTVELCtCQUFjLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1lBRTVELGFBQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBRS9ELE1BQU0sUUFBUSxHQUFRO2dCQUNsQixXQUFXLEVBQUUsRUFBRTtnQkFDZixPQUFPLEVBQUUsRUFBRTtnQkFDWCxVQUFVLEVBQUUsRUFBRTtnQkFDZCxXQUFXLEVBQUUsRUFBRTtnQkFDZixpQkFBaUIsRUFBRSxFQUFFO2dCQUNyQixZQUFZLEVBQUUsRUFBRTtnQkFDaEIsZ0JBQWdCLEVBQUUsRUFBRTtnQkFDcEIsZ0JBQWdCLEVBQUUsRUFBRTtnQkFDcEIsYUFBYSxFQUFFLEVBQUU7Z0JBQ2pCLFlBQVksRUFBRSxFQUFFO2dCQUNoQixVQUFVLEVBQUU7b0JBQ1IsS0FBSyxFQUFFLENBQUM7aUJBQ1g7YUFDSixDQUFDO1lBRUYsdUJBQVUsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFbkMsQ0FBQztLQUFBLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQyxDQUFDO0FBRUgsTUFBTSxTQUFTLEdBQVE7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QUNmLFlBQVksRUFBRSxFQUFFO1lBQ2hCLFFBQVEsRUFBRTtnQkFDTixZQUFZLEVBQUU7b0JBQ1YsTUFBTSxFQUFFLEtBQUs7b0JBQ2IsS0FBSyxFQUFFLHVCQUF1QjtvQkFDOUIsT0FBTyxFQUFFLGlCQUFpQjtvQkFDMUIsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLEtBQUssRUFBRSxZQUFZO2lCQUN0QjthQUNKO1NBQ0o7S0FDSjtJQUNELGdCQUFnQixFQUFFLEVBQUU7SUFDcEIsYUFBYSxFQUFFLEVBQUU7SUFDakIsWUFBWSxFQUFFLEVBQUU7SUFDaEIsVUFBVSxFQUFFO1FBQ1IsS0FBSyxFQUFFLENBQUM7S0FDWDtDQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Fzc2VydH0gZnJvbSAnY2hhaSc7XG5pbXBvcnQge1BhZ2VNZXRhfSBmcm9tICcuL1BhZ2VNZXRhJztcbmltcG9ydCB7VGV4dEhpZ2hsaWdodHN9IGZyb20gJy4vVGV4dEhpZ2hsaWdodHMnO1xuaW1wb3J0IHthc3NlcnRKU09OfSBmcm9tICcuLi90ZXN0L0Fzc2VydGlvbnMnO1xuXG5kZXNjcmliZSgnVGVzdEhpZ2hsaWdodHMnLCBmdW5jdGlvbigpIHtcblxuICAgIGl0KFwiZGVsZXRlVGV4dEhpZ2hsaWdodFwiLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICBjb25zdCBwYWdlTWV0YSA9IG5ldyBQYWdlTWV0YShQQUdFX01FVEEpO1xuXG4gICAgICAgIGNvbnN0IHRleHRIaWdobGlnaHQgPSBwYWdlTWV0YS50ZXh0SGlnaGxpZ2h0c1snMXhVNWhpTnZ1eSddO1xuXG4gICAgICAgIFRleHRIaWdobGlnaHRzLmRlbGV0ZVRleHRIaWdobGlnaHQocGFnZU1ldGEsIHRleHRIaWdobGlnaHQpO1xuXG4gICAgICAgIGFzc2VydC5lcXVhbChPYmplY3QudmFsdWVzKHBhZ2VNZXRhLnRleHRIaWdobGlnaHRzKS5sZW5ndGgsIDApO1xuXG4gICAgICAgIGNvbnN0IGV4cGVjdGVkOiBhbnkgPSB7XG4gICAgICAgICAgICBcInBhZ2VtYXJrc1wiOiB7fSxcbiAgICAgICAgICAgIFwibm90ZXNcIjoge30sXG4gICAgICAgICAgICBcImNvbW1lbnRzXCI6IHt9LFxuICAgICAgICAgICAgXCJxdWVzdGlvbnNcIjoge30sXG4gICAgICAgICAgICBcInJlYWRpbmdQcm9ncmVzc1wiOiB7fSxcbiAgICAgICAgICAgIFwiZmxhc2hjYXJkc1wiOiB7fSxcbiAgICAgICAgICAgIFwidGV4dEhpZ2hsaWdodHNcIjoge30sXG4gICAgICAgICAgICBcImFyZWFIaWdobGlnaHRzXCI6IHt9LFxuICAgICAgICAgICAgXCJzY3JlZW5zaG90c1wiOiB7fSxcbiAgICAgICAgICAgIFwidGh1bWJuYWlsc1wiOiB7fSxcbiAgICAgICAgICAgIFwicGFnZUluZm9cIjoge1xuICAgICAgICAgICAgICAgIFwibnVtXCI6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBhc3NlcnRKU09OKHBhZ2VNZXRhLCBleHBlY3RlZCk7XG5cbiAgICB9KTtcblxufSk7XG5cbmNvbnN0IFBBR0VfTUVUQTogYW55ID0ge1xuICAgIFwicGFnZW1hcmtzXCI6IHt9LFxuICAgIFwibm90ZXNcIjoge30sXG4gICAgXCJxdWVzdGlvbnNcIjoge30sXG4gICAgXCJmbGFzaGNhcmRzXCI6IHt9LFxuICAgIFwidGV4dEhpZ2hsaWdodHNcIjoge1xuICAgICAgICBcIjF4VTVoaU52dXlcIjoge1xuICAgICAgICAgICAgXCJpZFwiOiBcIjF4VTVoaU52dXlcIixcbiAgICAgICAgICAgIFwiY3JlYXRlZFwiOiBcIjIwMTgtMDktMDJUMjE6MTM6NTAuNTAwWlwiLFxuICAgICAgICAgICAgXCJsYXN0VXBkYXRlZFwiOiBcIjIwMTgtMDktMDJUMjE6MTM6NTAuNTAwWlwiLFxuICAgICAgICAgICAgXCJyZWN0c1wiOiB7XG4gICAgICAgICAgICAgICAgXCIwXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJsZWZ0XCI6IDcyLFxuICAgICAgICAgICAgICAgICAgICBcInRvcFwiOiA0NjkuMzMzMzMzMzMzMzMzMyxcbiAgICAgICAgICAgICAgICAgICAgXCJyaWdodFwiOiAzOTEuMDI2MDE5OTk5OTk5OSxcbiAgICAgICAgICAgICAgICAgICAgXCJib3R0b21cIjogNDgyLjY2NjY2NjY2NjY2NjYzLFxuICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDMxOS4wMjYwMTk5OTk5OTk5LFxuICAgICAgICAgICAgICAgICAgICBcImhlaWdodFwiOiAxMy4zMzMzMzMzMzMzMzMzMTRcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiMVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwibGVmdFwiOiA3MixcbiAgICAgICAgICAgICAgICAgICAgXCJ0b3BcIjogNDgyLjY2NjY2NjY2NjY2NjYzLFxuICAgICAgICAgICAgICAgICAgICBcInJpZ2h0XCI6IDM5MC43ODk0NjY2NjY2NjY2LFxuICAgICAgICAgICAgICAgICAgICBcImJvdHRvbVwiOiA0OTYsXG4gICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogMzE4Ljc4OTQ2NjY2NjY2NjYsXG4gICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IDEzLjMzMzMzMzMzMzMzMzM3MVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCIyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJsZWZ0XCI6IDcyLFxuICAgICAgICAgICAgICAgICAgICBcInRvcFwiOiA0OTYsXG4gICAgICAgICAgICAgICAgICAgIFwicmlnaHRcIjogMzkwLjgzNjM3NDY2NjY2NjcsXG4gICAgICAgICAgICAgICAgICAgIFwiYm90dG9tXCI6IDUwOS4zMzMzMzMzMzMzMzMzLFxuICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDMxOC44MzYzNzQ2NjY2NjY3LFxuICAgICAgICAgICAgICAgICAgICBcImhlaWdodFwiOiAxMy4zMzMzMzMzMzMzMzMzMTRcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiM1wiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwibGVmdFwiOiA3MixcbiAgICAgICAgICAgICAgICAgICAgXCJ0b3BcIjogNTA5LjMzMzMzMzMzMzMzMzMsXG4gICAgICAgICAgICAgICAgICAgIFwicmlnaHRcIjogMzkxLjAyMzI0MTMzMzMzMzMsXG4gICAgICAgICAgICAgICAgICAgIFwiYm90dG9tXCI6IDUyMi42NjY2NjY2NjY2NjY2LFxuICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDMxOS4wMjMyNDEzMzMzMzMzLFxuICAgICAgICAgICAgICAgICAgICBcImhlaWdodFwiOiAxMy4zMzMzMzMzMzMzMzMzMTRcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiNFwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwibGVmdFwiOiA3MixcbiAgICAgICAgICAgICAgICAgICAgXCJ0b3BcIjogNTIyLjY2NjY2NjY2NjY2NjYsXG4gICAgICAgICAgICAgICAgICAgIFwicmlnaHRcIjogMzkwLjc2MTU4OTMzMzMzMzMsXG4gICAgICAgICAgICAgICAgICAgIFwiYm90dG9tXCI6IDUzNixcbiAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiAzMTguNzYxNTg5MzMzMzMzMyxcbiAgICAgICAgICAgICAgICAgICAgXCJoZWlnaHRcIjogMTMuMzMzMzMzMzMzMzMzMzcxXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcIjVcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImxlZnRcIjogNzIsXG4gICAgICAgICAgICAgICAgICAgIFwidG9wXCI6IDUzNixcbiAgICAgICAgICAgICAgICAgICAgXCJyaWdodFwiOiAzOTAuNzkxNTUsXG4gICAgICAgICAgICAgICAgICAgIFwiYm90dG9tXCI6IDU0OC42NjY2NjY2NjY2NjY2LFxuICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDMxOC43OTE1NSxcbiAgICAgICAgICAgICAgICAgICAgXCJoZWlnaHRcIjogMTIuNjY2NjY2NjY2NjY2NjI5XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcIjZcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImxlZnRcIjogNzIsXG4gICAgICAgICAgICAgICAgICAgIFwidG9wXCI6IDU0OC42NjY2NjY2NjY2NjY2LFxuICAgICAgICAgICAgICAgICAgICBcInJpZ2h0XCI6IDM5MC43NTY3MjM5OTk5OTk5NixcbiAgICAgICAgICAgICAgICAgICAgXCJib3R0b21cIjogNTYyLFxuICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDMxOC43NTY3MjM5OTk5OTk5NixcbiAgICAgICAgICAgICAgICAgICAgXCJoZWlnaHRcIjogMTMuMzMzMzMzMzMzMzMzMzcxXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcIjdcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImxlZnRcIjogNzIsXG4gICAgICAgICAgICAgICAgICAgIFwidG9wXCI6IDU2MixcbiAgICAgICAgICAgICAgICAgICAgXCJyaWdodFwiOiAzOTAuNzU3ODE5OTk5OTk5OSxcbiAgICAgICAgICAgICAgICAgICAgXCJib3R0b21cIjogNTc1LjMzMzMzMzMzMzMzMzMsXG4gICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogMzE4Ljc1NzgxOTk5OTk5OTksXG4gICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IDEzLjMzMzMzMzMzMzMzMzI1OFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCI4XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJsZWZ0XCI6IDcyLFxuICAgICAgICAgICAgICAgICAgICBcInRvcFwiOiA1NzUuMzMzMzMzMzMzMzMzMyxcbiAgICAgICAgICAgICAgICAgICAgXCJyaWdodFwiOiAzOTAuODA4NjE5OTk5OTk5OSxcbiAgICAgICAgICAgICAgICAgICAgXCJib3R0b21cIjogNTg4LjY2NjY2NjY2NjY2NjYsXG4gICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogMzE4LjgwODYxOTk5OTk5OTksXG4gICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IDEzLjMzMzMzMzMzMzMzMzM3MVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCI5XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJsZWZ0XCI6IDcyLFxuICAgICAgICAgICAgICAgICAgICBcInRvcFwiOiA1ODguNjY2NjY2NjY2NjY2NixcbiAgICAgICAgICAgICAgICAgICAgXCJyaWdodFwiOiAzOTEuMDA5NTQsXG4gICAgICAgICAgICAgICAgICAgIFwiYm90dG9tXCI6IDYwMixcbiAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiAzMTkuMDA5NTQsXG4gICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IDEzLjMzMzMzMzMzMzMzMzM3MVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCIxMFwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwibGVmdFwiOiA3MixcbiAgICAgICAgICAgICAgICAgICAgXCJ0b3BcIjogNjAyLFxuICAgICAgICAgICAgICAgICAgICBcInJpZ2h0XCI6IDM5MS4wMDI2MzIsXG4gICAgICAgICAgICAgICAgICAgIFwiYm90dG9tXCI6IDYxNS4zMzMzMzMzMzMzMzMzLFxuICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDMxOS4wMDI2MzIsXG4gICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IDEzLjMzMzMzMzMzMzMzMzI1OFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCIxMVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwibGVmdFwiOiA3MixcbiAgICAgICAgICAgICAgICAgICAgXCJ0b3BcIjogNjE1LjMzMzMzMzMzMzMzMzMsXG4gICAgICAgICAgICAgICAgICAgIFwicmlnaHRcIjogMzkwLjgwNjE0MTMzMzMzMzMsXG4gICAgICAgICAgICAgICAgICAgIFwiYm90dG9tXCI6IDYyOC42NjY2NjY2NjY2NjY2LFxuICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDMxOC44MDYxNDEzMzMzMzMzLFxuICAgICAgICAgICAgICAgICAgICBcImhlaWdodFwiOiAxMy4zMzMzMzMzMzMzMzMzNzFcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiMTJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImxlZnRcIjogNzIsXG4gICAgICAgICAgICAgICAgICAgIFwidG9wXCI6IDYyOC42NjY2NjY2NjY2NjY2LFxuICAgICAgICAgICAgICAgICAgICBcInJpZ2h0XCI6IDM5MC43ODgxMzgsXG4gICAgICAgICAgICAgICAgICAgIFwiYm90dG9tXCI6IDY0MixcbiAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiAzMTguNzg4MTM4LFxuICAgICAgICAgICAgICAgICAgICBcImhlaWdodFwiOiAxMy4zMzMzMzMzMzMzMzMzNzFcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiMTNcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImxlZnRcIjogNzIsXG4gICAgICAgICAgICAgICAgICAgIFwidG9wXCI6IDY0MixcbiAgICAgICAgICAgICAgICAgICAgXCJyaWdodFwiOiAxMTcuMzUzOTEyLFxuICAgICAgICAgICAgICAgICAgICBcImJvdHRvbVwiOiA2NTMuMzMzMzMzMzMzMzMzMyxcbiAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiA0NS4zNTM5MTE5OTk5OTk5OTQsXG4gICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IDExLjMzMzMzMzMzMzMzMzI1OFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInRleHRTZWxlY3Rpb25zXCI6IHtcbiAgICAgICAgICAgICAgICBcIjBcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCJEeW5hbWljIGxhbmd1YWdlcyBzdWNoIGFzIEphdmFTY3JpcHQgYXJlIG1vcmUgZGlmZmljdWx0IHRvIGNvbS1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJyZWN0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGVmdFwiOiA3MixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidG9wXCI6IDQ2OS4zMzMzMzMzMzMzMzMzLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyaWdodFwiOiAzOTEuMDI2MDE5OTk5OTk5OSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYm90dG9tXCI6IDQ4MC42NjY2NjY2NjY2NjY2MyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogMzE5LjAyNjAxOTk5OTk5OTk2LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJoZWlnaHRcIjogMTEuMzMzMzMzMzMzMzMzMzMyXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiMVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcInBpbGUgdGhhbiBzdGF0aWNhbGx5IHR5cGVkIG9uZXMuIFNpbmNlIG5vIGNvbmNyZXRlIHR5cGUgaW5mb3JtYXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgXCJyZWN0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGVmdFwiOiA3MixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidG9wXCI6IDQ4Mi42NjY2NjY2NjY2NjY2MyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicmlnaHRcIjogMzkwLjc4OTQ2NjY2NjY2NjYsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImJvdHRvbVwiOiA0OTQsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDMxOC43ODk0NjY2NjY2NjY2LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJoZWlnaHRcIjogMTEuMzMzMzMzMzMzMzMzMzMyXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiMlwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcImlzIGF2YWlsYWJsZSwgdHJhZGl0aW9uYWwgY29tcGlsZXJzIG5lZWQgdG8gZW1pdCBnZW5lcmljIGNvZGUgdGhhdCBjYW5cIixcbiAgICAgICAgICAgICAgICAgICAgXCJyZWN0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGVmdFwiOiA3MixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidG9wXCI6IDQ5NixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicmlnaHRcIjogMzkwLjgzNjM3NDY2NjY2NjcsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImJvdHRvbVwiOiA1MDcuMzMzMzMzMzMzMzMzMyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogMzE4LjgzNjM3NDY2NjY2NjY0LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJoZWlnaHRcIjogMTEuMzMzMzMzMzMzMzMzMzMyXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiM1wiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcImhhbmRsZSBhbGwgcG9zc2libGUgdHlwZSBjb21iaW5hdGlvbnMgYXQgcnVudGltZS4gV2UgcHJlc2VudCBhbiBhbC1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJyZWN0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGVmdFwiOiA3MixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidG9wXCI6IDUwOS4zMzMzMzMzMzMzMzMzLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyaWdodFwiOiAzOTEuMDIzMjQxMzMzMzMzMyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYm90dG9tXCI6IDUyMC42NjY2NjY2NjY2NjY2LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiAzMTkuMDIzMjQxMzMzMzMzMyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IDExLjMzMzMzMzMzMzMzMzMzMlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcIjRcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCJ0ZXJuYXRpdmUgY29tcGlsYXRpb24gdGVjaG5pcXVlIGZvciBkeW5hbWljYWxseS10eXBlZCBsYW5ndWFnZXNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJyZWN0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGVmdFwiOiA3MixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidG9wXCI6IDUyMi42NjY2NjY2NjY2NjY2LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyaWdodFwiOiAzOTAuNzYxNTg5MzMzMzMzMyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYm90dG9tXCI6IDUzNCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogMzE4Ljc2MTU4OTMzMzMzMzMsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImhlaWdodFwiOiAxMS4zMzMzMzMzMzMzMzMzMzJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCI1XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwidGhhdCBpZGVudGlmaWVzIGZyZXF1ZW50bHkgZXhlY3V0ZWQgbG9vcCB0cmFjZXMgYXQgcnVuLXRpbWUgYW5kIHRoZW5cIixcbiAgICAgICAgICAgICAgICAgICAgXCJyZWN0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGVmdFwiOiA3MixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidG9wXCI6IDUzNixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicmlnaHRcIjogMzkwLjc5MTU1LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJib3R0b21cIjogNTQ3LjMzMzMzMzMzMzMzMzMsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDMxOC43OTE1NSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IDExLjMzMzMzMzMzMzMzMzMzMlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcIjZcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCJnZW5lcmF0ZXMgbWFjaGluZSBjb2RlIG9uIHRoZSBmbHkgdGhhdCBpcyBzcGVjaWFsaXplZCBmb3IgdGhlIGFjLVwiLFxuICAgICAgICAgICAgICAgICAgICBcInJlY3RcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJsZWZ0XCI6IDcyLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b3BcIjogNTQ4LjY2NjY2NjY2NjY2NjYsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJpZ2h0XCI6IDM5MC43NTY3MjM5OTk5OTk5NixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYm90dG9tXCI6IDU2MCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogMzE4Ljc1NjcyMzk5OTk5OTk2LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJoZWlnaHRcIjogMTEuMzMzMzMzMzMzMzMzMzMyXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiN1wiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcInR1YWwgZHluYW1pYyB0eXBlcyBvY2N1cnJpbmcgb24gZWFjaCBwYXRoIHRocm91Z2ggdGhlIGxvb3AuIE91clwiLFxuICAgICAgICAgICAgICAgICAgICBcInJlY3RcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJsZWZ0XCI6IDcyLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b3BcIjogNTYyLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyaWdodFwiOiAzOTAuNzU3ODE5OTk5OTk5OSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYm90dG9tXCI6IDU3My4zMzMzMzMzMzMzMzMzLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiAzMTguNzU3ODIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImhlaWdodFwiOiAxMS4zMzMzMzMzMzMzMzMzMzJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCI4XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwibWV0aG9kIHByb3ZpZGVzIGNoZWFwIGludGVyLXByb2NlZHVyYWwgdHlwZSBzcGVjaWFsaXphdGlvbiwgYW5kIGFuXCIsXG4gICAgICAgICAgICAgICAgICAgIFwicmVjdFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImxlZnRcIjogNzIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRvcFwiOiA1NzUuMzMzMzMzMzMzMzMzMyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicmlnaHRcIjogMzkwLjgwODYxOTk5OTk5OTksXG4gICAgICAgICAgICAgICAgICAgICAgICBcImJvdHRvbVwiOiA1ODYuNjY2NjY2NjY2NjY2NixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogMzE4LjgwODYxOTk5OTk5OTk2LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJoZWlnaHRcIjogMTEuMzMzMzMzMzMzMzMzMzMyXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiOVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcImVsZWdhbnQgYW5kIGVmZmljaWVudCB3YXkgb2YgaW5jcmVtZW50YWxseSBjb21waWxpbmcgbGF6aWx5IGRpc2Nvdi1cIixcbiAgICAgICAgICAgICAgICAgICAgXCJyZWN0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGVmdFwiOiA3MixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidG9wXCI6IDU4OC42NjY2NjY2NjY2NjY2LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyaWdodFwiOiAzOTEuMDA5NTQsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImJvdHRvbVwiOiA2MDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDMxOS4wMDk1NCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IDExLjMzMzMzMzMzMzMzMzMzMlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcIjEwXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiZXJlZCBhbHRlcm5hdGl2ZSBwYXRocyB0aHJvdWdoIG5lc3RlZCBsb29wcy4gV2UgaGF2ZSBpbXBsZW1lbnRlZFwiLFxuICAgICAgICAgICAgICAgICAgICBcInJlY3RcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJsZWZ0XCI6IDcyLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b3BcIjogNjAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyaWdodFwiOiAzOTEuMDAyNjMyLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJib3R0b21cIjogNjEzLjMzMzMzMzMzMzMzMzMsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDMxOS4wMDI2MzE5OTk5OTk5NSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IDExLjMzMzMzMzMzMzMzMzMzMlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcIjExXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiYSBkeW5hbWljIGNvbXBpbGVyIGZvciBKYXZhU2NyaXB0IGJhc2VkIG9uIG91ciB0ZWNobmlxdWUgYW5kIHdlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwicmVjdFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImxlZnRcIjogNzIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRvcFwiOiA2MTUuMzMzMzMzMzMzMzMzMyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicmlnaHRcIjogMzkwLjgwNjE0MTMzMzMzMzMsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImJvdHRvbVwiOiA2MjYuNjY2NjY2NjY2NjY2NixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogMzE4LjgwNjE0MTMzMzMzMzMsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImhlaWdodFwiOiAxMS4zMzMzMzMzMzMzMzMzMzJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCIxMlwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcImhhdmUgbWVhc3VyZWQgc3BlZWR1cHMgb2YgMTB4IGFuZCBtb3JlIGZvciBjZXJ0YWluIGJlbmNobWFya1wiLFxuICAgICAgICAgICAgICAgICAgICBcInJlY3RcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJsZWZ0XCI6IDcyLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b3BcIjogNjI4LjY2NjY2NjY2NjY2NjYsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJpZ2h0XCI6IDM5MC43ODgxMzgsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImJvdHRvbVwiOiA2NDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDMxOC43ODgxMzgsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImhlaWdodFwiOiAxMS4zMzMzMzMzMzMzMzMzMzJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCIxM1wiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcInByb2dyYW1zXCIsXG4gICAgICAgICAgICAgICAgICAgIFwicmVjdFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImxlZnRcIjogNzIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRvcFwiOiA2NDIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJpZ2h0XCI6IDExNy4zNTM5MTIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImJvdHRvbVwiOiA2NTMuMzMzMzMzMzMzMzMzMyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogNDUuMzUzOTExOTk5OTk5OTk0LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJoZWlnaHRcIjogMTEuMzMzMzMzMzMzMzMzMzMyXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiXFxuRHluYW1pYyBsYW5ndWFnZXMgc3VjaCBhcyBKYXZhU2NyaXB0IGFyZSBtb3JlIGRpZmZpY3VsdCB0byBjb20tXFxucGlsZSB0aGFuIHN0YXRpY2FsbHkgdHlwZWQgb25lcy4gU2luY2Ugbm8gY29uY3JldGUgdHlwZSBpbmZvcm1hdGlvblxcbmlzIGF2YWlsYWJsZSwgdHJhZGl0aW9uYWwgY29tcGlsZXJzIG5lZWQgdG8gZW1pdCBnZW5lcmljIGNvZGUgdGhhdCBjYW5cXG5oYW5kbGUgYWxsIHBvc3NpYmxlIHR5cGUgY29tYmluYXRpb25zIGF0IHJ1bnRpbWUuIFdlIHByZXNlbnQgYW4gYWwtXFxudGVybmF0aXZlIGNvbXBpbGF0aW9uIHRlY2huaXF1ZSBmb3IgZHluYW1pY2FsbHktdHlwZWQgbGFuZ3VhZ2VzXFxudGhhdCBpZGVudGlmaWVzIGZyZXF1ZW50bHkgZXhlY3V0ZWQgbG9vcCB0cmFjZXMgYXQgcnVuLXRpbWUgYW5kIHRoZW5cXG5nZW5lcmF0ZXMgbWFjaGluZSBjb2RlIG9uIHRoZSBmbHkgdGhhdCBpcyBzcGVjaWFsaXplZCBmb3IgdGhlIGFjLVxcbnR1YWwgZHluYW1pYyB0eXBlcyBvY2N1cnJpbmcgb24gZWFjaCBwYXRoIHRocm91Z2ggdGhlIGxvb3AuIE91clxcbm1ldGhvZCBwcm92aWRlcyBjaGVhcCBpbnRlci1wcm9jZWR1cmFsIHR5cGUgc3BlY2lhbGl6YXRpb24sIGFuZCBhblxcbmVsZWdhbnQgYW5kIGVmZmljaWVudCB3YXkgb2YgaW5jcmVtZW50YWxseSBjb21waWxpbmcgbGF6aWx5IGRpc2Nvdi1cXG5lcmVkIGFsdGVybmF0aXZlIHBhdGhzIHRocm91Z2ggbmVzdGVkIGxvb3BzLiBXZSBoYXZlIGltcGxlbWVudGVkXFxuYSBkeW5hbWljIGNvbXBpbGVyIGZvciBKYXZhU2NyaXB0IGJhc2VkIG9uIG91ciB0ZWNobmlxdWUgYW5kIHdlXFxuaGF2ZSBtZWFzdXJlZCBzcGVlZHVwcyBvZiAxMHggYW5kIG1vcmUgZm9yIGNlcnRhaW4gYmVuY2htYXJrXFxucHJvZ3JhbXNcIixcbiAgICAgICAgICAgIFwibm90ZXNcIjoge30sXG4gICAgICAgICAgICBcInF1ZXN0aW9uc1wiOiB7fSxcbiAgICAgICAgICAgIFwiZmxhc2hjYXJkc1wiOiB7fSxcbiAgICAgICAgICAgIFwiaW1hZ2VzXCI6IHtcbiAgICAgICAgICAgICAgICBcInNjcmVlbnNob3RcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwbmdcIixcbiAgICAgICAgICAgICAgICAgICAgXCJzcmNcIjogXCJzY3JlZW5zaG90OjFBYlFRSmRhdFlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiA0NzguMjI3NDE2OTkyMTg3NSxcbiAgICAgICAgICAgICAgICAgICAgXCJoZWlnaHRcIjogMjU2LjA5Mzc1LFxuICAgICAgICAgICAgICAgICAgICBcInJlbFwiOiBcInNjcmVlbnNob3RcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgXCJhcmVhSGlnaGxpZ2h0c1wiOiB7fSxcbiAgICBcInNjcmVlbnNob3RzXCI6IHt9LFxuICAgIFwidGh1bWJuYWlsc1wiOiB7fSxcbiAgICBcInBhZ2VJbmZvXCI6IHtcbiAgICAgICAgXCJudW1cIjogMVxuICAgIH1cbn07XG4iXX0=