"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Assertions_1 = require("../test/Assertions");
const Pagemarks_1 = require("./Pagemarks");
const DocMetas_1 = require("./DocMetas");
const TestingTime_1 = require("polar-shared/src/test/TestingTime");
const chai_1 = require("chai");
const ISODateTimeStrings_1 = require("polar-shared/src/metadata/ISODateTimeStrings");
const ReadingProgresses_1 = require("./ReadingProgresses");
const PagemarkMode_1 = require("polar-shared/src/metadata/PagemarkMode");
const Objects_1 = require("polar-shared/src/util/Objects");
function reset() {
    TestingTime_1.TestingTime.freeze();
    Pagemarks_1.Pagemarks.sequences.id = 0;
    Pagemarks_1.Pagemarks.sequences.batch = 0;
    ReadingProgresses_1.ReadingProgresses.sequences.id = 0;
}
describe('Pagemarks', function () {
    describe('updatePagemarksForRange', function () {
        beforeEach(function () {
            reset();
        });
        it("less than zero", function () {
            const docMeta = DocMetas_1.DocMetas.create('0x0001', 1);
            const pageMeta = DocMetas_1.DocMetas.getPageMeta(docMeta, 1);
            Assertions_1.assertJSON(pageMeta.readingProgress, {});
            Pagemarks_1.Pagemarks.updatePagemarksForRange(docMeta, 1, 0.999);
            const expected = [
                {
                    "id": "1s2gw2Mkwb",
                    "guid": "1s2gw2Mkwb",
                    "created": "2012-03-02T11:38:49.321Z",
                    "lastUpdated": "2012-03-02T11:38:49.321Z",
                    "type": "SINGLE_COLUMN",
                    "percentage": 0.999,
                    "column": 0,
                    "rect": {
                        "left": 0,
                        "top": 0,
                        "width": 100,
                        "height": 0.999
                    },
                    "batch": "1Y9CcEHSxc",
                    "mode": "READ",
                    "notes": {}
                }
            ];
            Assertions_1.assertJSON(Object.values(pageMeta.pagemarks), expected);
            Assertions_1.assertJSON(pageMeta.readingProgress, {
                "1AS9DE87jw": {
                    "created": "2012-03-02T11:38:49.321Z",
                    "id": "1AS9DE87jw",
                    "progress": 0.999,
                    "progressByMode": {
                        "READ": 0.999
                    }
                }
            });
        });
        it("for one page", function () {
            const docMeta = DocMetas_1.DocMetas.create('0x0001', 1);
            const pageMeta = DocMetas_1.DocMetas.getPageMeta(docMeta, 1);
            Assertions_1.assertJSON(pageMeta.readingProgress, {});
            Pagemarks_1.Pagemarks.updatePagemarksForRange(docMeta, 1);
            const expected = [
                {
                    "id": "1s2gw2Mkwb",
                    "guid": "1s2gw2Mkwb",
                    "created": "2012-03-02T11:38:49.321Z",
                    "lastUpdated": "2012-03-02T11:38:49.321Z",
                    "type": "SINGLE_COLUMN",
                    "percentage": 100,
                    "column": 0,
                    "rect": {
                        "left": 0,
                        "top": 0,
                        "width": 100,
                        "height": 100
                    },
                    "batch": "1Y9CcEHSxc",
                    "mode": "READ",
                    "notes": {}
                }
            ];
            Assertions_1.assertJSON(Object.values(pageMeta.pagemarks), expected);
            Assertions_1.assertJSON(pageMeta.readingProgress, {
                "1AS9DE87jw": {
                    "created": "2012-03-02T11:38:49.321Z",
                    "id": "1AS9DE87jw",
                    "progress": 100,
                    "progressByMode": {
                        "READ": 100,
                    }
                }
            });
        });
        it("for two pages", function () {
            const docMeta = DocMetas_1.DocMetas.create('0x0001', 2);
            Pagemarks_1.Pagemarks.updatePagemarksForRange(docMeta, 2);
            const pagemark1 = [
                {
                    "id": "1s2gw2Mkwb",
                    "guid": "1s2gw2Mkwb",
                    "created": "2012-03-02T11:38:49.321Z",
                    "lastUpdated": "2012-03-02T11:38:49.321Z",
                    "type": "SINGLE_COLUMN",
                    "percentage": 100,
                    "column": 0,
                    "rect": {
                        "left": 0,
                        "top": 0,
                        "width": 100,
                        "height": 100
                    },
                    "batch": "1Y9CcEHSxc",
                    "mode": "READ",
                    "notes": {}
                }
            ];
            const pagemark2 = [
                {
                    "id": "126nS8PMqF",
                    "guid": "126nS8PMqF",
                    "created": "2012-03-02T11:38:49.321Z",
                    "lastUpdated": "2012-03-02T11:38:49.321Z",
                    "type": "SINGLE_COLUMN",
                    "percentage": 100,
                    "column": 0,
                    "rect": {
                        "left": 0,
                        "top": 0,
                        "width": 100,
                        "height": 100
                    },
                    "batch": "1Y9CcEHSxc",
                    "mode": "READ",
                    "notes": {}
                }
            ];
            Assertions_1.assertJSON(Object.values(DocMetas_1.DocMetas.getPageMeta(docMeta, 1).pagemarks), pagemark1);
            Assertions_1.assertJSON(Object.values(DocMetas_1.DocMetas.getPageMeta(docMeta, 2).pagemarks), pagemark2);
        });
        it("for existing", function () {
            const docMeta = DocMetas_1.DocMetas.create('0x0001', 10);
            Pagemarks_1.Pagemarks.updatePagemark(docMeta, 3, Pagemarks_1.Pagemarks.create({ percentage: 100 }));
            Pagemarks_1.Pagemarks.updatePagemarksForRange(docMeta, 4);
            const assertPagemark = (pageNum) => {
                const pagemarks = Object.values(DocMetas_1.DocMetas.getPageMeta(docMeta, pageNum).pagemarks);
                chai_1.assert.equal(pagemarks.length, 1);
                chai_1.assert.equal(pagemarks[0].percentage, 100);
            };
            assertPagemark(3);
            assertPagemark(4);
        });
        it("for existing large range", function () {
            const docMeta = DocMetas_1.DocMetas.create('0x0001', 10);
            Pagemarks_1.Pagemarks.updatePagemark(docMeta, 3, Pagemarks_1.Pagemarks.create({ percentage: 100 }));
            Pagemarks_1.Pagemarks.updatePagemarksForRange(docMeta, 8);
            assertPagemark(docMeta, 3, "1Y9CcEHSxc");
            assertPagemark(docMeta, 4, "1yNbsiPseh");
            assertPagemark(docMeta, 5, "1yNbsiPseh");
            assertPagemark(docMeta, 6, "1yNbsiPseh");
            assertPagemark(docMeta, 7, "1yNbsiPseh");
            assertPagemark(docMeta, 8, "1yNbsiPseh");
        });
        it("for fractional range", function () {
            const docMeta = DocMetas_1.DocMetas.create('0x0001', 10);
            Pagemarks_1.Pagemarks.updatePagemark(docMeta, 3, Pagemarks_1.Pagemarks.create({ percentage: 50 }));
            Pagemarks_1.Pagemarks.updatePagemarksForRange(docMeta, 4);
            const pagemarks = Object.values(DocMetas_1.DocMetas.getPageMeta(docMeta, 3).pagemarks);
            chai_1.assert.equal(pagemarks.length, 2);
            chai_1.assert.equal(pagemarks[0].percentage, 50);
            chai_1.assert.equal(pagemarks[1].percentage, 50);
            assertPagemark(docMeta, 4, "1yNbsiPseh");
        });
        it("Delete all within batch", function () {
            const docMeta = DocMetas_1.DocMetas.create('0x0001', 10);
            Pagemarks_1.Pagemarks.updatePagemarksForRange(docMeta, 8);
            const pageMeta = DocMetas_1.DocMetas.getPageMeta(docMeta, 8);
            const pagemarks = Object.values(pageMeta.pagemarks);
            chai_1.assert.equal(pagemarks.length, 1);
            chai_1.assert.equal(Object.values(DocMetas_1.DocMetas.getPageMeta(docMeta, 1).pagemarks).length, 1);
            Pagemarks_1.Pagemarks.deletePagemark(docMeta, 8, pagemarks[0].id);
            chai_1.assert.equal(Object.values(DocMetas_1.DocMetas.getPageMeta(docMeta, 1).pagemarks).length, 0);
        });
    });
    describe("reading overview", function () {
        beforeEach(function () {
            reset();
        });
        it("basic over multiple pages", function () {
            const docMeta = DocMetas_1.DocMetas.create('0x0001', 10);
            Pagemarks_1.Pagemarks.updatePagemarksForRange(docMeta, 2);
            Assertions_1.assertJSON(docMeta.docInfo.readingPerDay, {
                "2012-03-02": 2
            });
        });
        it("basic over multiple days and pages", function () {
            const docMeta = DocMetas_1.DocMetas.create('0x0001', 10);
            Pagemarks_1.Pagemarks.updatePagemarksForRange(docMeta, 1);
            TestingTime_1.TestingTime.forward(24 * 60 * 60 * 1000);
            chai_1.assert.equal(ISODateTimeStrings_1.ISODateTimeStrings.create(), "2012-03-03T11:38:49.321Z");
            Pagemarks_1.Pagemarks.updatePagemarksForRange(docMeta, 2);
            TestingTime_1.TestingTime.forward(24 * 60 * 60 * 1000);
            chai_1.assert.equal(ISODateTimeStrings_1.ISODateTimeStrings.create(), "2012-03-04T11:38:49.321Z");
            Pagemarks_1.Pagemarks.updatePagemarksForRange(docMeta, 3);
            Assertions_1.assertJSON(docMeta.docInfo.readingPerDay, {
                "2012-03-02": 1,
                "2012-03-03": 1,
                "2012-03-04": 1
            });
        });
        it("create range over batch then set the mode to 'previously read'", function () {
            const docMeta = DocMetas_1.DocMetas.create('0x0001', 10);
            Pagemarks_1.Pagemarks.updatePagemarksForRange(docMeta, 5);
            chai_1.assert.equal(Object.values(DocMetas_1.DocMetas.getPageMeta(docMeta, 1).pagemarks).length, 1);
            chai_1.assert.equal(Object.values(DocMetas_1.DocMetas.getPageMeta(docMeta, 5).pagemarks).length, 1);
            const pagemark = Object.values(DocMetas_1.DocMetas.getPageMeta(docMeta, 5).pagemarks)[0];
            Pagemarks_1.Pagemarks.replacePagemark(docMeta, { batch: pagemark.batch }, { mode: PagemarkMode_1.PagemarkMode.PRE_READ });
            Assertions_1.assertJSON(DocMetas_1.DocMetas.getPageMeta(docMeta, 1).pagemarks, {
                "1s2gw2Mkwb": {
                    "batch": "1Y9CcEHSxc",
                    "column": 0,
                    "created": "2012-03-02T11:38:49.321Z",
                    "guid": "1s2gw2Mkwb",
                    "id": "1s2gw2Mkwb",
                    "lastUpdated": "2012-03-02T11:38:49.321Z",
                    "mode": "PRE_READ",
                    "notes": {},
                    "percentage": 100,
                    "rect": {
                        "height": 100,
                        "left": 0,
                        "top": 0,
                        "width": 100
                    },
                    "type": "SINGLE_COLUMN"
                }
            });
            Assertions_1.assertJSON(DocMetas_1.DocMetas.getPageMeta(docMeta, 5).pagemarks, {
                "12CDjpvoCY": {
                    "batch": "1Y9CcEHSxc",
                    "column": 0,
                    "created": "2012-03-02T11:38:49.321Z",
                    "guid": "12CDjpvoCY",
                    "id": "12CDjpvoCY",
                    "lastUpdated": "2012-03-02T11:38:49.321Z",
                    "mode": "PRE_READ",
                    "notes": {},
                    "percentage": 100,
                    "rect": {
                        "height": 100,
                        "left": 0,
                        "top": 0,
                        "width": 100
                    },
                    "type": "SINGLE_COLUMN"
                }
            });
        });
        it("drop back in progress on the same day", function () {
            const docMeta = DocMetas_1.DocMetas.create('0x0001', 1);
            Pagemarks_1.Pagemarks.updatePagemark(docMeta, 1, Pagemarks_1.Pagemarks.create({ percentage: 80 }));
            Assertions_1.assertJSON(docMeta.docInfo.readingPerDay, {
                "2012-03-02": 0.8
            });
            Pagemarks_1.Pagemarks.deletePagemark(docMeta, 1);
            Pagemarks_1.Pagemarks.updatePagemark(docMeta, 1, Pagemarks_1.Pagemarks.create({ percentage: 20 }));
            Assertions_1.assertJSON(docMeta.docInfo.readingPerDay, {
                "2012-03-02": 0.2
            });
        });
        it("legacy doc that doesn't have reading history", function () {
            const docMeta = DocMetas_1.DocMetas.create('0x0001', 1);
            const pageMeta = DocMetas_1.DocMetas.getPageMeta(docMeta, 1);
            chai_1.assert.equal(Object.values(pageMeta.pagemarks).length, 0);
            Pagemarks_1.Pagemarks.updatePagemark(docMeta, 1, Pagemarks_1.Pagemarks.create({ percentage: 80 }));
            Assertions_1.assertJSON(docMeta.docInfo.readingPerDay, {
                "2012-03-02": 0.8
            });
            Assertions_1.assertJSON(pageMeta.readingProgress, {
                "1AS9DE87jw": {
                    "created": "2012-03-02T11:38:49.321Z",
                    "id": "1AS9DE87jw",
                    "progress": 80,
                    "progressByMode": {
                        "READ": 80
                    }
                }
            });
            Objects_1.Objects.clear(docMeta.docInfo.readingPerDay);
            Objects_1.Objects.clear(pageMeta.readingProgress);
            TestingTime_1.TestingTime.forward('1w');
            Pagemarks_1.Pagemarks.updatePagemark(docMeta, 1, Pagemarks_1.Pagemarks.create({ percentage: 10 }));
            Assertions_1.assertJSON(pageMeta.pagemarks, {
                "12mskuuTzp": {
                    "batch": "1SDFF4T2Rj",
                    "column": 0,
                    "created": "2012-03-09T11:38:49.321Z",
                    "guid": "12mskuuTzp",
                    "id": "12mskuuTzp",
                    "lastUpdated": "2012-03-09T11:38:49.321Z",
                    "mode": "READ",
                    "notes": {},
                    "percentage": 10,
                    "rect": {
                        "height": 10,
                        "left": 0,
                        "top": 0,
                        "width": 100
                    },
                    "type": "SINGLE_COLUMN"
                },
                "1s2gw2Mkwb": {
                    "batch": "1Y9CcEHSxc",
                    "column": 0,
                    "created": "2012-03-02T11:38:49.321Z",
                    "guid": "1s2gw2Mkwb",
                    "id": "1s2gw2Mkwb",
                    "lastUpdated": "2012-03-02T11:38:49.321Z",
                    "mode": "READ",
                    "notes": {},
                    "percentage": 80,
                    "rect": {
                        "height": 80,
                        "left": 0,
                        "top": 0,
                        "width": 100
                    },
                    "type": "SINGLE_COLUMN"
                }
            });
            Assertions_1.assertJSON(pageMeta.readingProgress, {
                "123r9JKcE5": {
                    "created": "2012-03-09T11:38:49.321Z",
                    "id": "123r9JKcE5",
                    "progress": 90,
                    "progressByMode": {
                        "READ": 90
                    }
                },
                "1SfHn5ScW2": {
                    "created": "2012-03-09T11:38:49.321Z",
                    "id": "1SfHn5ScW2",
                    "preExisting": true,
                    "progress": 80,
                    "progressByMode": {
                        "READ": 80
                    }
                }
            });
            Assertions_1.assertJSON(docMeta.docInfo.readingPerDay, {
                "2012-03-09": 0.1
            });
        });
        it("fake HTML page", function () {
            const docMeta = DocMetas_1.DocMetas.create('0x0001', 1);
            DocMetas_1.DocMetas.getPageMeta(docMeta, 1).pageInfo.dimensions = {
                width: 850,
                height: 2500
            };
            const pagemark = Pagemarks_1.Pagemarks.create({ percentage: 80 });
            Pagemarks_1.Pagemarks.updatePagemark(docMeta, 1, pagemark);
            Assertions_1.assertJSON(docMeta.docInfo.readingPerDay, {
                "2012-03-02": 1.82
            });
        });
        it("fake HTML page with deltas across days..", function () {
            const docMeta = DocMetas_1.DocMetas.create('0x0001', 1);
            DocMetas_1.DocMetas.getPageMeta(docMeta, 1).pageInfo.dimensions = {
                width: 850,
                height: 2500
            };
            Pagemarks_1.Pagemarks.updatePagemark(docMeta, 1, Pagemarks_1.Pagemarks.create({ percentage: 40 }));
            TestingTime_1.TestingTime.forward('1d');
            Pagemarks_1.Pagemarks.updatePagemark(docMeta, 1, Pagemarks_1.Pagemarks.create({ percentage: 40 }));
            Assertions_1.assertJSON(docMeta.docInfo.readingPerDay, {
                "2012-03-02": 0.91,
                "2012-03-03": 0.91
            });
        });
    });
});
const assertPagemark = (docMeta, pageNum, batch) => {
    const pagemarks = Object.values(DocMetas_1.DocMetas.getPageMeta(docMeta, pageNum).pagemarks);
    chai_1.assert.equal(pagemarks.length, 1);
    const pagemark = pagemarks[0];
    chai_1.assert.equal(pagemark.percentage, 100);
    chai_1.assert.equal(pagemark.batch, batch);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFnZW1hcmtzVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlBhZ2VtYXJrc1Rlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtREFBOEM7QUFDOUMsMkNBQXNDO0FBQ3RDLHlDQUFvQztBQUNwQyxtRUFBOEQ7QUFDOUQsK0JBQTRCO0FBRTVCLHFGQUFnRjtBQUNoRiwyREFBc0Q7QUFDdEQseUVBQW9FO0FBRXBFLDJEQUFzRDtBQUd0RCxTQUFTLEtBQUs7SUFDVix5QkFBVyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3JCLHFCQUFTLENBQUMsU0FBUyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDM0IscUJBQVMsQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztJQUM5QixxQ0FBaUIsQ0FBQyxTQUFTLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUN2QyxDQUFDO0FBRUQsUUFBUSxDQUFDLFdBQVcsRUFBRTtJQUVsQixRQUFRLENBQUMseUJBQXlCLEVBQUU7UUFFaEMsVUFBVSxDQUFDO1lBQ1AsS0FBSyxFQUFFLENBQUM7UUFDWixDQUFDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRTtZQUlqQixNQUFNLE9BQU8sR0FBRyxtQkFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFFN0MsTUFBTSxRQUFRLEdBQUcsbUJBQVEsQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBRWxELHVCQUFVLENBQUMsUUFBUSxDQUFDLGVBQWUsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUV6QyxxQkFBUyxDQUFDLHVCQUF1QixDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFFckQsTUFBTSxRQUFRLEdBQUc7Z0JBQ2I7b0JBQ0ksSUFBSSxFQUFFLFlBQVk7b0JBQ2xCLE1BQU0sRUFBRSxZQUFZO29CQUNwQixTQUFTLEVBQUUs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O0lBRWxGLGFBQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNsQyxNQUFNLFFBQVEsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUIsYUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBRXZDLGFBQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztBQUV4QyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Fzc2VydEpTT059IGZyb20gJy4uL3Rlc3QvQXNzZXJ0aW9ucyc7XG5pbXBvcnQge1BhZ2VtYXJrc30gZnJvbSBcIi4vUGFnZW1hcmtzXCI7XG5pbXBvcnQge0RvY01ldGFzfSBmcm9tIFwiLi9Eb2NNZXRhc1wiO1xuaW1wb3J0IHtUZXN0aW5nVGltZX0gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvdGVzdC9UZXN0aW5nVGltZVwiO1xuaW1wb3J0IHthc3NlcnR9IGZyb20gJ2NoYWknO1xuaW1wb3J0IHtEb2NNZXRhfSBmcm9tICcuL0RvY01ldGEnO1xuaW1wb3J0IHtJU09EYXRlVGltZVN0cmluZ3N9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbWV0YWRhdGEvSVNPRGF0ZVRpbWVTdHJpbmdzJztcbmltcG9ydCB7UmVhZGluZ1Byb2dyZXNzZXN9IGZyb20gJy4vUmVhZGluZ1Byb2dyZXNzZXMnO1xuaW1wb3J0IHtQYWdlbWFya01vZGV9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbWV0YWRhdGEvUGFnZW1hcmtNb2RlJztcbmltcG9ydCB7SURvY01ldGF9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL21ldGFkYXRhL0lEb2NNZXRhXCI7XG5pbXBvcnQge09iamVjdHN9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL3V0aWwvT2JqZWN0c1wiO1xuXG5cbmZ1bmN0aW9uIHJlc2V0KCkge1xuICAgIFRlc3RpbmdUaW1lLmZyZWV6ZSgpO1xuICAgIFBhZ2VtYXJrcy5zZXF1ZW5jZXMuaWQgPSAwO1xuICAgIFBhZ2VtYXJrcy5zZXF1ZW5jZXMuYmF0Y2ggPSAwO1xuICAgIFJlYWRpbmdQcm9ncmVzc2VzLnNlcXVlbmNlcy5pZCA9IDA7XG59XG5cbmRlc2NyaWJlKCdQYWdlbWFya3MnLCBmdW5jdGlvbigpIHtcblxuICAgIGRlc2NyaWJlKCd1cGRhdGVQYWdlbWFya3NGb3JSYW5nZScsIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGJlZm9yZUVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXNldCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdChcImxlc3MgdGhhbiB6ZXJvXCIsIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAvLyB3ZSBoYWQgYSB0ZXN0IHRoYXQgd2FzIGJyZWFraW5nIHdoZW4gbGVzcyB0aGFuIG9uZVxuXG4gICAgICAgICAgICBjb25zdCBkb2NNZXRhID0gRG9jTWV0YXMuY3JlYXRlKCcweDAwMDEnLCAxKTtcblxuICAgICAgICAgICAgY29uc3QgcGFnZU1ldGEgPSBEb2NNZXRhcy5nZXRQYWdlTWV0YShkb2NNZXRhLCAxKTtcblxuICAgICAgICAgICAgYXNzZXJ0SlNPTihwYWdlTWV0YS5yZWFkaW5nUHJvZ3Jlc3MsIHt9KTtcblxuICAgICAgICAgICAgUGFnZW1hcmtzLnVwZGF0ZVBhZ2VtYXJrc0ZvclJhbmdlKGRvY01ldGEsIDEsIDAuOTk5KTtcblxuICAgICAgICAgICAgY29uc3QgZXhwZWN0ZWQgPSBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwiMXMyZ3cyTWt3YlwiLFxuICAgICAgICAgICAgICAgICAgICBcImd1aWRcIjogXCIxczJndzJNa3diXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiY3JlYXRlZFwiOiBcIjIwMTItMDMtMDJUMTE6Mzg6NDkuMzIxWlwiLFxuICAgICAgICAgICAgICAgICAgICBcImxhc3RVcGRhdGVkXCI6IFwiMjAxMi0wMy0wMlQxMTozODo0OS4zMjFaXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIlNJTkdMRV9DT0xVTU5cIixcbiAgICAgICAgICAgICAgICAgICAgXCJwZXJjZW50YWdlXCI6IDAuOTk5LFxuICAgICAgICAgICAgICAgICAgICBcImNvbHVtblwiOiAwLFxuICAgICAgICAgICAgICAgICAgICBcInJlY3RcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJsZWZ0XCI6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRvcFwiOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiAxMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImhlaWdodFwiOiAwLjk5OVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcImJhdGNoXCI6IFwiMVk5Q2NFSFN4Y1wiLFxuICAgICAgICAgICAgICAgICAgICBcIm1vZGVcIjogXCJSRUFEXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibm90ZXNcIjoge31cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICBhc3NlcnRKU09OKE9iamVjdC52YWx1ZXMocGFnZU1ldGEucGFnZW1hcmtzKSwgZXhwZWN0ZWQpO1xuXG4gICAgICAgICAgICBhc3NlcnRKU09OKHBhZ2VNZXRhLnJlYWRpbmdQcm9ncmVzcywge1xuICAgICAgICAgICAgICAgIFwiMUFTOURFODdqd1wiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiY3JlYXRlZFwiOiBcIjIwMTItMDMtMDJUMTE6Mzg6NDkuMzIxWlwiLFxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwiMUFTOURFODdqd1wiLFxuICAgICAgICAgICAgICAgICAgICBcInByb2dyZXNzXCI6IDAuOTk5LFxuICAgICAgICAgICAgICAgICAgICBcInByb2dyZXNzQnlNb2RlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiUkVBRFwiOiAwLjk5OVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoXCJmb3Igb25lIHBhZ2VcIiwgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGRvY01ldGEgPSBEb2NNZXRhcy5jcmVhdGUoJzB4MDAwMScsIDEpO1xuXG4gICAgICAgICAgICBjb25zdCBwYWdlTWV0YSA9IERvY01ldGFzLmdldFBhZ2VNZXRhKGRvY01ldGEsIDEpO1xuXG4gICAgICAgICAgICBhc3NlcnRKU09OKHBhZ2VNZXRhLnJlYWRpbmdQcm9ncmVzcywge30pO1xuXG4gICAgICAgICAgICBQYWdlbWFya3MudXBkYXRlUGFnZW1hcmtzRm9yUmFuZ2UoZG9jTWV0YSwgMSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGV4cGVjdGVkID0gW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcIjFzMmd3Mk1rd2JcIixcbiAgICAgICAgICAgICAgICAgICAgXCJndWlkXCI6IFwiMXMyZ3cyTWt3YlwiLFxuICAgICAgICAgICAgICAgICAgICBcImNyZWF0ZWRcIjogXCIyMDEyLTAzLTAyVDExOjM4OjQ5LjMyMVpcIixcbiAgICAgICAgICAgICAgICAgICAgXCJsYXN0VXBkYXRlZFwiOiBcIjIwMTItMDMtMDJUMTE6Mzg6NDkuMzIxWlwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJTSU5HTEVfQ09MVU1OXCIsXG4gICAgICAgICAgICAgICAgICAgIFwicGVyY2VudGFnZVwiOiAxMDAsXG4gICAgICAgICAgICAgICAgICAgIFwiY29sdW1uXCI6IDAsXG4gICAgICAgICAgICAgICAgICAgIFwicmVjdFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImxlZnRcIjogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidG9wXCI6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IDEwMFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcImJhdGNoXCI6IFwiMVk5Q2NFSFN4Y1wiLFxuICAgICAgICAgICAgICAgICAgICBcIm1vZGVcIjogXCJSRUFEXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibm90ZXNcIjoge31cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICBhc3NlcnRKU09OKE9iamVjdC52YWx1ZXMocGFnZU1ldGEucGFnZW1hcmtzKSwgZXhwZWN0ZWQpO1xuXG4gICAgICAgICAgICBhc3NlcnRKU09OKHBhZ2VNZXRhLnJlYWRpbmdQcm9ncmVzcywge1xuICAgICAgICAgICAgICAgIFwiMUFTOURFODdqd1wiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiY3JlYXRlZFwiOiBcIjIwMTItMDMtMDJUMTE6Mzg6NDkuMzIxWlwiLFxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwiMUFTOURFODdqd1wiLFxuICAgICAgICAgICAgICAgICAgICBcInByb2dyZXNzXCI6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgXCJwcm9ncmVzc0J5TW9kZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIlJFQURcIjogMTAwLFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoXCJmb3IgdHdvIHBhZ2VzXCIsIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICBjb25zdCBkb2NNZXRhID0gRG9jTWV0YXMuY3JlYXRlKCcweDAwMDEnLCAyKTtcblxuICAgICAgICAgICAgUGFnZW1hcmtzLnVwZGF0ZVBhZ2VtYXJrc0ZvclJhbmdlKGRvY01ldGEsIDIpO1xuXG4gICAgICAgICAgICBjb25zdCBwYWdlbWFyazEgPSBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwiMXMyZ3cyTWt3YlwiLFxuICAgICAgICAgICAgICAgICAgICBcImd1aWRcIjogXCIxczJndzJNa3diXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiY3JlYXRlZFwiOiBcIjIwMTItMDMtMDJUMTE6Mzg6NDkuMzIxWlwiLFxuICAgICAgICAgICAgICAgICAgICBcImxhc3RVcGRhdGVkXCI6IFwiMjAxMi0wMy0wMlQxMTozODo0OS4zMjFaXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIlNJTkdMRV9DT0xVTU5cIixcbiAgICAgICAgICAgICAgICAgICAgXCJwZXJjZW50YWdlXCI6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgXCJjb2x1bW5cIjogMCxcbiAgICAgICAgICAgICAgICAgICAgXCJyZWN0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGVmdFwiOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b3BcIjogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogMTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJoZWlnaHRcIjogMTAwXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFwiYmF0Y2hcIjogXCIxWTlDY0VIU3hjXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibW9kZVwiOiBcIlJFQURcIixcbiAgICAgICAgICAgICAgICAgICAgXCJub3Rlc1wiOiB7fVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF07XG5cbiAgICAgICAgICAgIGNvbnN0IHBhZ2VtYXJrMiA9IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcIjEyNm5TOFBNcUZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZ3VpZFwiOiBcIjEyNm5TOFBNcUZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY3JlYXRlZFwiOiBcIjIwMTItMDMtMDJUMTE6Mzg6NDkuMzIxWlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsYXN0VXBkYXRlZFwiOiBcIjIwMTItMDMtMDJUMTE6Mzg6NDkuMzIxWlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiU0lOR0xFX0NPTFVNTlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwZXJjZW50YWdlXCI6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sdW1uXCI6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJlY3RcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGVmdFwiOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidG9wXCI6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiAxMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoZWlnaHRcIjogMTAwXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJiYXRjaFwiOiBcIjFZOUNjRUhTeGNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibW9kZVwiOiBcIlJFQURcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibm90ZXNcIjoge31cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIDtcblxuXG4gICAgICAgICAgICBhc3NlcnRKU09OKE9iamVjdC52YWx1ZXMoRG9jTWV0YXMuZ2V0UGFnZU1ldGEoZG9jTWV0YSwgMSkucGFnZW1hcmtzKSwgcGFnZW1hcmsxKTtcbiAgICAgICAgICAgIGFzc2VydEpTT04oT2JqZWN0LnZhbHVlcyhEb2NNZXRhcy5nZXRQYWdlTWV0YShkb2NNZXRhLCAyKS5wYWdlbWFya3MpLCBwYWdlbWFyazIpO1xuXG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgaXQoXCJmb3IgZXhpc3RpbmdcIiwgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGRvY01ldGEgPSBEb2NNZXRhcy5jcmVhdGUoJzB4MDAwMScsIDEwKTtcblxuICAgICAgICAgICAgUGFnZW1hcmtzLnVwZGF0ZVBhZ2VtYXJrKGRvY01ldGEsIDMsIFBhZ2VtYXJrcy5jcmVhdGUoe3BlcmNlbnRhZ2U6IDEwMH0pKTtcblxuICAgICAgICAgICAgUGFnZW1hcmtzLnVwZGF0ZVBhZ2VtYXJrc0ZvclJhbmdlKGRvY01ldGEsIDQpO1xuXG4gICAgICAgICAgICBjb25zdCBhc3NlcnRQYWdlbWFyayA9IChwYWdlTnVtOiBudW1iZXIpID0+IHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHBhZ2VtYXJrcyA9IE9iamVjdC52YWx1ZXMoRG9jTWV0YXMuZ2V0UGFnZU1ldGEoZG9jTWV0YSwgcGFnZU51bSkucGFnZW1hcmtzKTtcblxuICAgICAgICAgICAgICAgIGFzc2VydC5lcXVhbChwYWdlbWFya3MubGVuZ3RoLCAxKTtcblxuICAgICAgICAgICAgICAgIGFzc2VydC5lcXVhbChwYWdlbWFya3NbMF0ucGVyY2VudGFnZSwgMTAwKTtcbiAgICAgICAgICAgIH07XG5cblxuICAgICAgICAgICAgYXNzZXJ0UGFnZW1hcmsoMyk7XG4gICAgICAgICAgICBhc3NlcnRQYWdlbWFyayg0KTtcblxuICAgICAgICB9KTtcblxuICAgICAgICBpdChcImZvciBleGlzdGluZyBsYXJnZSByYW5nZVwiLCBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgY29uc3QgZG9jTWV0YSA9IERvY01ldGFzLmNyZWF0ZSgnMHgwMDAxJywgMTApO1xuXG4gICAgICAgICAgICBQYWdlbWFya3MudXBkYXRlUGFnZW1hcmsoZG9jTWV0YSwgMywgUGFnZW1hcmtzLmNyZWF0ZSh7cGVyY2VudGFnZTogMTAwfSkpO1xuXG4gICAgICAgICAgICBQYWdlbWFya3MudXBkYXRlUGFnZW1hcmtzRm9yUmFuZ2UoZG9jTWV0YSwgOCk7XG5cbiAgICAgICAgICAgIGFzc2VydFBhZ2VtYXJrKGRvY01ldGEsIDMsIFwiMVk5Q2NFSFN4Y1wiKTtcblxuICAgICAgICAgICAgYXNzZXJ0UGFnZW1hcmsoZG9jTWV0YSwgNCwgXCIxeU5ic2lQc2VoXCIpO1xuICAgICAgICAgICAgYXNzZXJ0UGFnZW1hcmsoZG9jTWV0YSwgNSwgXCIxeU5ic2lQc2VoXCIpO1xuICAgICAgICAgICAgYXNzZXJ0UGFnZW1hcmsoZG9jTWV0YSwgNiwgXCIxeU5ic2lQc2VoXCIpO1xuICAgICAgICAgICAgYXNzZXJ0UGFnZW1hcmsoZG9jTWV0YSwgNywgXCIxeU5ic2lQc2VoXCIpO1xuICAgICAgICAgICAgYXNzZXJ0UGFnZW1hcmsoZG9jTWV0YSwgOCwgXCIxeU5ic2lQc2VoXCIpO1xuXG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgaXQoXCJmb3IgZnJhY3Rpb25hbCByYW5nZVwiLCBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgY29uc3QgZG9jTWV0YSA9IERvY01ldGFzLmNyZWF0ZSgnMHgwMDAxJywgMTApO1xuXG4gICAgICAgICAgICBQYWdlbWFya3MudXBkYXRlUGFnZW1hcmsoZG9jTWV0YSwgMywgUGFnZW1hcmtzLmNyZWF0ZSh7cGVyY2VudGFnZTogNTB9KSk7XG5cbiAgICAgICAgICAgIFBhZ2VtYXJrcy51cGRhdGVQYWdlbWFya3NGb3JSYW5nZShkb2NNZXRhLCA0KTtcblxuICAgICAgICAgICAgY29uc3QgcGFnZW1hcmtzID0gT2JqZWN0LnZhbHVlcyhEb2NNZXRhcy5nZXRQYWdlTWV0YShkb2NNZXRhLCAzKS5wYWdlbWFya3MpO1xuXG4gICAgICAgICAgICBhc3NlcnQuZXF1YWwocGFnZW1hcmtzLmxlbmd0aCwgMik7XG5cbiAgICAgICAgICAgIGFzc2VydC5lcXVhbChwYWdlbWFya3NbMF0ucGVyY2VudGFnZSwgNTApO1xuICAgICAgICAgICAgYXNzZXJ0LmVxdWFsKHBhZ2VtYXJrc1sxXS5wZXJjZW50YWdlLCA1MCk7XG5cbiAgICAgICAgICAgIGFzc2VydFBhZ2VtYXJrKGRvY01ldGEsIDQsIFwiMXlOYnNpUHNlaFwiKTtcblxuICAgICAgICB9KTtcblxuICAgICAgICBpdChcIkRlbGV0ZSBhbGwgd2l0aGluIGJhdGNoXCIsIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICBjb25zdCBkb2NNZXRhID0gRG9jTWV0YXMuY3JlYXRlKCcweDAwMDEnLCAxMCk7XG5cbiAgICAgICAgICAgIFBhZ2VtYXJrcy51cGRhdGVQYWdlbWFya3NGb3JSYW5nZShkb2NNZXRhLCA4KTtcblxuICAgICAgICAgICAgY29uc3QgcGFnZU1ldGEgPSBEb2NNZXRhcy5nZXRQYWdlTWV0YShkb2NNZXRhLCA4KTtcblxuICAgICAgICAgICAgY29uc3QgcGFnZW1hcmtzID0gT2JqZWN0LnZhbHVlcyhwYWdlTWV0YS5wYWdlbWFya3MpO1xuXG4gICAgICAgICAgICBhc3NlcnQuZXF1YWwocGFnZW1hcmtzLmxlbmd0aCwgMSk7XG5cbiAgICAgICAgICAgIGFzc2VydC5lcXVhbChPYmplY3QudmFsdWVzKERvY01ldGFzLmdldFBhZ2VNZXRhKGRvY01ldGEsIDEpLnBhZ2VtYXJrcykubGVuZ3RoLCAxKTtcblxuICAgICAgICAgICAgUGFnZW1hcmtzLmRlbGV0ZVBhZ2VtYXJrKGRvY01ldGEsIDgsIHBhZ2VtYXJrc1swXS5pZCk7XG5cbiAgICAgICAgICAgIGFzc2VydC5lcXVhbChPYmplY3QudmFsdWVzKERvY01ldGFzLmdldFBhZ2VNZXRhKGRvY01ldGEsIDEpLnBhZ2VtYXJrcykubGVuZ3RoLCAwKTtcblxuICAgICAgICB9KTtcblxuICAgIH0pO1xuXG4gICAgZGVzY3JpYmUoXCJyZWFkaW5nIG92ZXJ2aWV3XCIsIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGJlZm9yZUVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXNldCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdChcImJhc2ljIG92ZXIgbXVsdGlwbGUgcGFnZXNcIiwgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGRvY01ldGEgPSBEb2NNZXRhcy5jcmVhdGUoJzB4MDAwMScsIDEwKTtcbiAgICAgICAgICAgIFBhZ2VtYXJrcy51cGRhdGVQYWdlbWFya3NGb3JSYW5nZShkb2NNZXRhLCAyKTtcblxuICAgICAgICAgICAgYXNzZXJ0SlNPTihkb2NNZXRhLmRvY0luZm8ucmVhZGluZ1BlckRheSwge1xuICAgICAgICAgICAgICAgIFwiMjAxMi0wMy0wMlwiOiAyXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9KTtcblxuXG4gICAgICAgIGl0KFwiYmFzaWMgb3ZlciBtdWx0aXBsZSBkYXlzIGFuZCBwYWdlc1wiLCBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgY29uc3QgZG9jTWV0YSA9IERvY01ldGFzLmNyZWF0ZSgnMHgwMDAxJywgMTApO1xuXG4gICAgICAgICAgICBQYWdlbWFya3MudXBkYXRlUGFnZW1hcmtzRm9yUmFuZ2UoZG9jTWV0YSwgMSk7XG5cbiAgICAgICAgICAgIFRlc3RpbmdUaW1lLmZvcndhcmQoMjQgKiA2MCAqIDYwICogMTAwMCk7XG4gICAgICAgICAgICBhc3NlcnQuZXF1YWwoSVNPRGF0ZVRpbWVTdHJpbmdzLmNyZWF0ZSgpLCBcIjIwMTItMDMtMDNUMTE6Mzg6NDkuMzIxWlwiKTtcbiAgICAgICAgICAgIFBhZ2VtYXJrcy51cGRhdGVQYWdlbWFya3NGb3JSYW5nZShkb2NNZXRhLCAyKTtcblxuICAgICAgICAgICAgVGVzdGluZ1RpbWUuZm9yd2FyZCgyNCAqIDYwICogNjAgKiAxMDAwKTtcbiAgICAgICAgICAgIGFzc2VydC5lcXVhbChJU09EYXRlVGltZVN0cmluZ3MuY3JlYXRlKCksIFwiMjAxMi0wMy0wNFQxMTozODo0OS4zMjFaXCIpO1xuICAgICAgICAgICAgUGFnZW1hcmtzLnVwZGF0ZVBhZ2VtYXJrc0ZvclJhbmdlKGRvY01ldGEsIDMpO1xuXG4gICAgICAgICAgICBhc3NlcnRKU09OKGRvY01ldGEuZG9jSW5mby5yZWFkaW5nUGVyRGF5LCB7XG4gICAgICAgICAgICAgICAgXCIyMDEyLTAzLTAyXCI6IDEsXG4gICAgICAgICAgICAgICAgXCIyMDEyLTAzLTAzXCI6IDEsXG4gICAgICAgICAgICAgICAgXCIyMDEyLTAzLTA0XCI6IDFcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgaXQoXCJjcmVhdGUgcmFuZ2Ugb3ZlciBiYXRjaCB0aGVuIHNldCB0aGUgbW9kZSB0byAncHJldmlvdXNseSByZWFkJ1wiLCBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgY29uc3QgZG9jTWV0YSA9IERvY01ldGFzLmNyZWF0ZSgnMHgwMDAxJywgMTApO1xuXG4gICAgICAgICAgICBQYWdlbWFya3MudXBkYXRlUGFnZW1hcmtzRm9yUmFuZ2UoZG9jTWV0YSwgNSk7XG5cbiAgICAgICAgICAgIGFzc2VydC5lcXVhbChPYmplY3QudmFsdWVzKERvY01ldGFzLmdldFBhZ2VNZXRhKGRvY01ldGEsIDEpLnBhZ2VtYXJrcykubGVuZ3RoLCAxKTtcbiAgICAgICAgICAgIGFzc2VydC5lcXVhbChPYmplY3QudmFsdWVzKERvY01ldGFzLmdldFBhZ2VNZXRhKGRvY01ldGEsIDUpLnBhZ2VtYXJrcykubGVuZ3RoLCAxKTtcblxuICAgICAgICAgICAgY29uc3QgcGFnZW1hcmsgPSBPYmplY3QudmFsdWVzKERvY01ldGFzLmdldFBhZ2VNZXRhKGRvY01ldGEsIDUpLnBhZ2VtYXJrcylbMF07XG5cbiAgICAgICAgICAgIFBhZ2VtYXJrcy5yZXBsYWNlUGFnZW1hcmsoZG9jTWV0YSwge2JhdGNoOiBwYWdlbWFyay5iYXRjaH0sIHttb2RlOiBQYWdlbWFya01vZGUuUFJFX1JFQUR9KTtcblxuICAgICAgICAgICAgYXNzZXJ0SlNPTihEb2NNZXRhcy5nZXRQYWdlTWV0YShkb2NNZXRhLCAxKS5wYWdlbWFya3MsIHtcbiAgICAgICAgICAgICAgICBcIjFzMmd3Mk1rd2JcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImJhdGNoXCI6IFwiMVk5Q2NFSFN4Y1wiLFxuICAgICAgICAgICAgICAgICAgICBcImNvbHVtblwiOiAwLFxuICAgICAgICAgICAgICAgICAgICBcImNyZWF0ZWRcIjogXCIyMDEyLTAzLTAyVDExOjM4OjQ5LjMyMVpcIixcbiAgICAgICAgICAgICAgICAgICAgXCJndWlkXCI6IFwiMXMyZ3cyTWt3YlwiLFxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwiMXMyZ3cyTWt3YlwiLFxuICAgICAgICAgICAgICAgICAgICBcImxhc3RVcGRhdGVkXCI6IFwiMjAxMi0wMy0wMlQxMTozODo0OS4zMjFaXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibW9kZVwiOiBcIlBSRV9SRUFEXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibm90ZXNcIjoge30sXG4gICAgICAgICAgICAgICAgICAgIFwicGVyY2VudGFnZVwiOiAxMDAsXG4gICAgICAgICAgICAgICAgICAgIFwicmVjdFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImhlaWdodFwiOiAxMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxlZnRcIjogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidG9wXCI6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDEwMFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJTSU5HTEVfQ09MVU1OXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgYXNzZXJ0SlNPTihEb2NNZXRhcy5nZXRQYWdlTWV0YShkb2NNZXRhLCA1KS5wYWdlbWFya3MsIHtcbiAgICAgICAgICAgICAgICBcIjEyQ0RqcHZvQ1lcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImJhdGNoXCI6IFwiMVk5Q2NFSFN4Y1wiLFxuICAgICAgICAgICAgICAgICAgICBcImNvbHVtblwiOiAwLFxuICAgICAgICAgICAgICAgICAgICBcImNyZWF0ZWRcIjogXCIyMDEyLTAzLTAyVDExOjM4OjQ5LjMyMVpcIixcbiAgICAgICAgICAgICAgICAgICAgXCJndWlkXCI6IFwiMTJDRGpwdm9DWVwiLFxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwiMTJDRGpwdm9DWVwiLFxuICAgICAgICAgICAgICAgICAgICBcImxhc3RVcGRhdGVkXCI6IFwiMjAxMi0wMy0wMlQxMTozODo0OS4zMjFaXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibW9kZVwiOiBcIlBSRV9SRUFEXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibm90ZXNcIjoge30sXG4gICAgICAgICAgICAgICAgICAgIFwicGVyY2VudGFnZVwiOiAxMDAsXG4gICAgICAgICAgICAgICAgICAgIFwicmVjdFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImhlaWdodFwiOiAxMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxlZnRcIjogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidG9wXCI6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDEwMFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJTSU5HTEVfQ09MVU1OXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9KTtcblxuXG4gICAgICAgIGl0KFwiZHJvcCBiYWNrIGluIHByb2dyZXNzIG9uIHRoZSBzYW1lIGRheVwiLCBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgY29uc3QgZG9jTWV0YSA9IERvY01ldGFzLmNyZWF0ZSgnMHgwMDAxJywgMSk7XG5cbiAgICAgICAgICAgIFBhZ2VtYXJrcy51cGRhdGVQYWdlbWFyayhkb2NNZXRhLCAxLCBQYWdlbWFya3MuY3JlYXRlKHtwZXJjZW50YWdlOiA4MH0pKTtcblxuICAgICAgICAgICAgYXNzZXJ0SlNPTihkb2NNZXRhLmRvY0luZm8ucmVhZGluZ1BlckRheSwge1xuICAgICAgICAgICAgICAgIFwiMjAxMi0wMy0wMlwiOiAwLjhcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBQYWdlbWFya3MuZGVsZXRlUGFnZW1hcmsoZG9jTWV0YSwgMSk7XG4gICAgICAgICAgICBQYWdlbWFya3MudXBkYXRlUGFnZW1hcmsoZG9jTWV0YSwgMSwgUGFnZW1hcmtzLmNyZWF0ZSh7cGVyY2VudGFnZTogMjB9KSk7XG5cbiAgICAgICAgICAgIGFzc2VydEpTT04oZG9jTWV0YS5kb2NJbmZvLnJlYWRpbmdQZXJEYXksIHtcbiAgICAgICAgICAgICAgICBcIjIwMTItMDMtMDJcIjogMC4yXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9KTtcblxuXG4gICAgICAgIGl0KFwibGVnYWN5IGRvYyB0aGF0IGRvZXNuJ3QgaGF2ZSByZWFkaW5nIGhpc3RvcnlcIiwgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGRvY01ldGEgPSBEb2NNZXRhcy5jcmVhdGUoJzB4MDAwMScsIDEpO1xuXG4gICAgICAgICAgICBjb25zdCBwYWdlTWV0YSA9IERvY01ldGFzLmdldFBhZ2VNZXRhKGRvY01ldGEsIDEpO1xuXG4gICAgICAgICAgICBhc3NlcnQuZXF1YWwoT2JqZWN0LnZhbHVlcyhwYWdlTWV0YS5wYWdlbWFya3MpLmxlbmd0aCwgMCk7XG5cbiAgICAgICAgICAgIFBhZ2VtYXJrcy51cGRhdGVQYWdlbWFyayhkb2NNZXRhLCAxLCBQYWdlbWFya3MuY3JlYXRlKHtwZXJjZW50YWdlOiA4MH0pKTtcblxuICAgICAgICAgICAgYXNzZXJ0SlNPTihkb2NNZXRhLmRvY0luZm8ucmVhZGluZ1BlckRheSwge1xuICAgICAgICAgICAgICAgIFwiMjAxMi0wMy0wMlwiOiAwLjhcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBhc3NlcnRKU09OKHBhZ2VNZXRhLnJlYWRpbmdQcm9ncmVzcywge1xuICAgICAgICAgICAgICAgIFwiMUFTOURFODdqd1wiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiY3JlYXRlZFwiOiBcIjIwMTItMDMtMDJUMTE6Mzg6NDkuMzIxWlwiLFxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwiMUFTOURFODdqd1wiLFxuICAgICAgICAgICAgICAgICAgICBcInByb2dyZXNzXCI6IDgwLFxuICAgICAgICAgICAgICAgICAgICBcInByb2dyZXNzQnlNb2RlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiUkVBRFwiOiA4MFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIG5vdyB0aGF0IGl0IGhhcyB0aGUgcGFnZW1hcmsgY2xlYXIgb3V0IHRoZSBleGlzdGluZyBkYXRhLi4uXG5cbiAgICAgICAgICAgIE9iamVjdHMuY2xlYXIoZG9jTWV0YS5kb2NJbmZvLnJlYWRpbmdQZXJEYXkpO1xuICAgICAgICAgICAgT2JqZWN0cy5jbGVhcihwYWdlTWV0YS5yZWFkaW5nUHJvZ3Jlc3MpO1xuXG4gICAgICAgICAgICBUZXN0aW5nVGltZS5mb3J3YXJkKCcxdycpO1xuXG4gICAgICAgICAgICBQYWdlbWFya3MudXBkYXRlUGFnZW1hcmsoZG9jTWV0YSwgMSwgUGFnZW1hcmtzLmNyZWF0ZSh7cGVyY2VudGFnZTogMTB9KSk7XG5cbiAgICAgICAgICAgIGFzc2VydEpTT04ocGFnZU1ldGEucGFnZW1hcmtzLCB7XG4gICAgICAgICAgICAgICAgXCIxMm1za3V1VHpwXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJiYXRjaFwiOiBcIjFTREZGNFQyUmpcIixcbiAgICAgICAgICAgICAgICAgICAgXCJjb2x1bW5cIjogMCxcbiAgICAgICAgICAgICAgICAgICAgXCJjcmVhdGVkXCI6IFwiMjAxMi0wMy0wOVQxMTozODo0OS4zMjFaXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZ3VpZFwiOiBcIjEybXNrdXVUenBcIixcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcIjEybXNrdXVUenBcIixcbiAgICAgICAgICAgICAgICAgICAgXCJsYXN0VXBkYXRlZFwiOiBcIjIwMTItMDMtMDlUMTE6Mzg6NDkuMzIxWlwiLFxuICAgICAgICAgICAgICAgICAgICBcIm1vZGVcIjogXCJSRUFEXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibm90ZXNcIjoge30sXG4gICAgICAgICAgICAgICAgICAgIFwicGVyY2VudGFnZVwiOiAxMCxcbiAgICAgICAgICAgICAgICAgICAgXCJyZWN0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IDEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsZWZ0XCI6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRvcFwiOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiAxMDBcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiU0lOR0xFX0NPTFVNTlwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcIjFzMmd3Mk1rd2JcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImJhdGNoXCI6IFwiMVk5Q2NFSFN4Y1wiLFxuICAgICAgICAgICAgICAgICAgICBcImNvbHVtblwiOiAwLFxuICAgICAgICAgICAgICAgICAgICBcImNyZWF0ZWRcIjogXCIyMDEyLTAzLTAyVDExOjM4OjQ5LjMyMVpcIixcbiAgICAgICAgICAgICAgICAgICAgXCJndWlkXCI6IFwiMXMyZ3cyTWt3YlwiLFxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwiMXMyZ3cyTWt3YlwiLFxuICAgICAgICAgICAgICAgICAgICBcImxhc3RVcGRhdGVkXCI6IFwiMjAxMi0wMy0wMlQxMTozODo0OS4zMjFaXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibW9kZVwiOiBcIlJFQURcIixcbiAgICAgICAgICAgICAgICAgICAgXCJub3Rlc1wiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgXCJwZXJjZW50YWdlXCI6IDgwLFxuICAgICAgICAgICAgICAgICAgICBcInJlY3RcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJoZWlnaHRcIjogODAsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxlZnRcIjogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidG9wXCI6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDEwMFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJTSU5HTEVfQ09MVU1OXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgYXNzZXJ0SlNPTihwYWdlTWV0YS5yZWFkaW5nUHJvZ3Jlc3MsIHtcbiAgICAgICAgICAgICAgICAgICBcIjEyM3I5SktjRTVcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICBcImNyZWF0ZWRcIjogXCIyMDEyLTAzLTA5VDExOjM4OjQ5LjMyMVpcIixcbiAgICAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcIjEyM3I5SktjRTVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgXCJwcm9ncmVzc1wiOiA5MCxcbiAgICAgICAgICAgICAgICAgICAgICAgXCJwcm9ncmVzc0J5TW9kZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcIlJFQURcIjogOTBcbiAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgXCIxU2ZIbjVTY1cyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgXCJjcmVhdGVkXCI6IFwiMjAxMi0wMy0wOVQxMTozODo0OS4zMjFaXCIsXG4gICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCIxU2ZIbjVTY1cyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgIFwicHJlRXhpc3RpbmdcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgXCJwcm9ncmVzc1wiOiA4MCxcbiAgICAgICAgICAgICAgICAgICAgICAgXCJwcm9ncmVzc0J5TW9kZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcIlJFQURcIjogODBcbiAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGFzc2VydEpTT04oZG9jTWV0YS5kb2NJbmZvLnJlYWRpbmdQZXJEYXksIHtcbiAgICAgICAgICAgICAgICBcIjIwMTItMDMtMDlcIjogMC4xXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9KTtcblxuICAgICAgICBpdChcImZha2UgSFRNTCBwYWdlXCIsIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICBjb25zdCBkb2NNZXRhID0gRG9jTWV0YXMuY3JlYXRlKCcweDAwMDEnLCAxKTtcblxuICAgICAgICAgICAgRG9jTWV0YXMuZ2V0UGFnZU1ldGEoZG9jTWV0YSwgMSkucGFnZUluZm8uZGltZW5zaW9ucyA9IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogODUwLFxuICAgICAgICAgICAgICAgIGhlaWdodDogMjUwMFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3QgcGFnZW1hcmsgPSBQYWdlbWFya3MuY3JlYXRlKHtwZXJjZW50YWdlOiA4MH0pO1xuICAgICAgICAgICAgUGFnZW1hcmtzLnVwZGF0ZVBhZ2VtYXJrKGRvY01ldGEsIDEsIHBhZ2VtYXJrKTtcblxuICAgICAgICAgICAgYXNzZXJ0SlNPTihkb2NNZXRhLmRvY0luZm8ucmVhZGluZ1BlckRheSwge1xuICAgICAgICAgICAgICAgIFwiMjAxMi0wMy0wMlwiOiAxLjgyXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9KTtcblxuICAgICAgICBpdChcImZha2UgSFRNTCBwYWdlIHdpdGggZGVsdGFzIGFjcm9zcyBkYXlzLi5cIiwgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGRvY01ldGEgPSBEb2NNZXRhcy5jcmVhdGUoJzB4MDAwMScsIDEpO1xuXG4gICAgICAgICAgICBEb2NNZXRhcy5nZXRQYWdlTWV0YShkb2NNZXRhLCAxKS5wYWdlSW5mby5kaW1lbnNpb25zID0ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA4NTAsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyNTAwXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBQYWdlbWFya3MudXBkYXRlUGFnZW1hcmsoZG9jTWV0YSwgMSwgUGFnZW1hcmtzLmNyZWF0ZSh7cGVyY2VudGFnZTogNDB9KSk7XG5cbiAgICAgICAgICAgIFRlc3RpbmdUaW1lLmZvcndhcmQoJzFkJyk7XG5cbiAgICAgICAgICAgIFBhZ2VtYXJrcy51cGRhdGVQYWdlbWFyayhkb2NNZXRhLCAxLCBQYWdlbWFya3MuY3JlYXRlKHtwZXJjZW50YWdlOiA0MH0pKTtcblxuICAgICAgICAgICAgYXNzZXJ0SlNPTihkb2NNZXRhLmRvY0luZm8ucmVhZGluZ1BlckRheSwge1xuICAgICAgICAgICAgICAgIFwiMjAxMi0wMy0wMlwiOiAwLjkxLFxuICAgICAgICAgICAgICAgIFwiMjAxMi0wMy0wM1wiOiAwLjkxXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9KTtcblxuXG4gICAgfSk7XG5cbn0pO1xuXG5cbmNvbnN0IGFzc2VydFBhZ2VtYXJrID0gKGRvY01ldGE6IElEb2NNZXRhLCBwYWdlTnVtOiBudW1iZXIsIGJhdGNoOiBzdHJpbmcpID0+IHtcblxuICAgIGNvbnN0IHBhZ2VtYXJrcyA9IE9iamVjdC52YWx1ZXMoRG9jTWV0YXMuZ2V0UGFnZU1ldGEoZG9jTWV0YSwgcGFnZU51bSkucGFnZW1hcmtzKTtcblxuICAgIGFzc2VydC5lcXVhbChwYWdlbWFya3MubGVuZ3RoLCAxKTtcbiAgICBjb25zdCBwYWdlbWFyayA9IHBhZ2VtYXJrc1swXTtcbiAgICBhc3NlcnQuZXF1YWwocGFnZW1hcmsucGVyY2VudGFnZSwgMTAwKTtcblxuICAgIGFzc2VydC5lcXVhbChwYWdlbWFyay5iYXRjaCwgYmF0Y2gpO1xuXG59O1xuIl19