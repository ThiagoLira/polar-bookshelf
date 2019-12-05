"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const DocMeta_1 = require("./DocMeta");
const DocMetas_1 = require("./DocMetas");
const MetadataSerializer_1 = require("./MetadataSerializer");
const Assertions_1 = require("../test/Assertions");
const PagemarkType_1 = require("polar-shared/src/metadata/PagemarkType");
const TestingTime_1 = require("polar-shared/src/test/TestingTime");
const TextHighlights_1 = require("./TextHighlights");
const Proxies_1 = require("../proxies/Proxies");
const DocMetas_2 = require("./DocMetas");
const Pagemarks_1 = require("./Pagemarks");
TestingTime_1.TestingTime.freeze();
describe('DocMetas', function () {
    beforeEach(function () {
        Pagemarks_1.Pagemarks.sequences.id = 0;
        Pagemarks_1.Pagemarks.sequences.batch = 0;
    });
    describe('JSON', function () {
        it("Test basic JSON encoding and decoding", function () {
            const fingerprint = "0x001";
            const docMeta = DocMetas_1.DocMetas.createWithinInitialPagemarks(fingerprint, 14);
            console.log(JSON.stringify(docMeta, null, "  "));
            DocMetas_1.DocMetas.addPagemarks(docMeta, { nrPages: 1, offsetPage: 4, percentage: 50 });
            const json = MetadataSerializer_1.MetadataSerializer.serialize(docMeta, "  ");
            const actual = DocMetas_1.DocMetas.deserialize(json, fingerprint);
            Assertions_1.assertJSON(docMeta, actual);
            chai_1.assert.equal(actual instanceof DocMeta_1.DocMeta, true);
        });
        it("One page", function () {
            const fingerprint = "0x001";
            const docMeta = DocMetas_1.DocMetas.create(fingerprint, 1);
            console.log(JSON.stringify(docMeta, null, "  "));
            const json = MetadataSerializer_1.MetadataSerializer.serialize(docMeta, "  ");
            const actual = DocMetas_1.DocMetas.deserialize(json, fingerprint);
            Assertions_1.assertJSON(docMeta, actual);
            chai_1.assert.equal(actual instanceof DocMeta_1.DocMeta, true);
        });
        it("Test with default values for serialized data", function () {
            const json = "{}";
            const docMeta = DocMetas_1.DocMetas.deserialize(json, '0x000');
            chai_1.assert.equal(docMeta instanceof DocMeta_1.DocMeta, true);
        });
    });
    it('No whitespace option', function () {
        const fingerprint = "0x001";
        const docMeta = DocMetas_2.MockDocMetas.createMockDocMeta(fingerprint);
        const json = DocMetas_1.DocMetas.serialize(docMeta, "");
        chai_1.assert.isTrue(json.startsWith("{\"annotationInfo\":{},\"version\":2,\"attachments\":{}"));
        chai_1.assert.equal(json.indexOf("\n"), -1);
    });
    describe('Deserialize', function () {
        it("Test Deserializing and then updating some pagemarks", function () {
            const fingerprint = "0x001";
            const nrPages = 2;
            let docMeta = DocMetas_1.DocMetas.createWithinInitialPagemarks(fingerprint, nrPages);
            docMeta.docInfo.uuid = "__canonicalized__";
            const json = DocMetas_1.DocMetas.serialize(docMeta, "  ");
            const expected = {
                "annotationInfo": {},
                "attachments": {},
                "docInfo": {
                    "added": "2012-03-02T11:38:49.321Z",
                    "archived": false,
                    "attachments": {},
                    "fingerprint": "0x001",
                    "flagged": false,
                    "nrPages": 2,
                    "pagemarkType": "SINGLE_COLUMN",
                    "progress": 100,
                    "properties": {},
                    "readingPerDay": {
                        "2012-03-02": 2
                    },
                    "tags": {},
                    "uuid": "__canonicalized__"
                },
                "pageMetas": {
                    "1": {
                        "areaHighlights": {},
                        "comments": {},
                        "flashcards": {},
                        "notes": {},
                        "pageInfo": {
                            "num": 1
                        },
                        "pagemarks": {
                            "1s2gw2Mkwb": {
                                "batch": "1Y9CcEHSxc",
                                "column": 0,
                                "created": "2012-03-02T11:38:49.321Z",
                                "guid": "1s2gw2Mkwb",
                                "id": "1s2gw2Mkwb",
                                "lastUpdated": "2012-03-02T11:38:49.321Z",
                                "mode": "READ",
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
                        },
                        "questions": {},
                        "readingProgress": {
                            "1QLX4U7vTU": {
                                "created": "2012-03-02T11:38:49.321Z",
                                "id": "1QLX4U7vTU",
                                "progress": 100,
                                "progressByMode": {
                                    "READ": 100
                                }
                            }
                        },
                        "screenshots": {},
                        "textHighlights": {},
                        "thumbnails": {}
                    },
                    "2": {
                        "areaHighlights": {},
                        "comments": {},
                        "flashcards": {},
                        "notes": {},
                        "pageInfo": {
                            "num": 2
                        },
                        "pagemarks": {
                            "126nS8PMqF": {
                                "batch": "1yNbsiPseh",
                                "column": 0,
                                "created": "2012-03-02T11:38:49.321Z",
                                "guid": "126nS8PMqF",
                                "id": "126nS8PMqF",
                                "lastUpdated": "2012-03-02T11:38:49.321Z",
                                "mode": "READ",
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
                        },
                        "questions": {},
                        "readingProgress": {
                            "1VtUQQJoXr": {
                                "created": "2012-03-02T11:38:49.321Z",
                                "id": "1VtUQQJoXr",
                                "progress": 100,
                                "progressByMode": {
                                    "READ": 100
                                }
                            }
                        },
                        "screenshots": {},
                        "textHighlights": {},
                        "thumbnails": {}
                    }
                },
                "version": 2
            };
            chai_1.assert.equal(typeof json, "string");
            Assertions_1.assertJSON(json, expected);
            docMeta = DocMetas_1.DocMetas.deserialize(json, fingerprint);
            docMeta = Proxies_1.Proxies.create(docMeta);
            Assertions_1.assertJSON(docMeta, expected);
            const pageMeta = DocMetas_1.DocMetas.getPageMeta(docMeta, 1);
            pageMeta.pagemarks = {};
            chai_1.assert.deepEqual(DocMetas_1.DocMetas.getPageMeta(docMeta, 1).pagemarks, {});
        });
    });
    describe('Upgrade', function () {
        describe("Test upgrading the metadata if it is missing fields.", function () {
            it("No DocInfo.pagemarkType", function () {
                let docMeta = createUpgradeDoc();
                chai_1.assert.notEqual(docMeta.docInfo, null);
                delete DocMetas_1.DocMetas.getPageMeta(docMeta, 1).textHighlights;
                delete docMeta.docInfo.pagemarkType;
                docMeta = DocMetas_1.DocMetas.upgrade(docMeta);
                chai_1.assert.deepEqual(docMeta.docInfo.pagemarkType, PagemarkType_1.PagemarkType.SINGLE_COLUMN);
            });
            it("Pagemark without rect", function () {
                let docMeta = createUpgradeDoc();
                console.log(Object.keys(DocMetas_1.DocMetas.getPageMeta(docMeta, 1).pagemarks));
                Assertions_1.assertJSON(Object.keys(DocMetas_1.DocMetas.getPageMeta(docMeta, 1).pagemarks), ["1s2gw2Mkwb"]);
                delete DocMetas_1.DocMetas.getPageMeta(docMeta, 1).pagemarks["1s2gw2Mkwb"].rect;
                docMeta = DocMetas_1.DocMetas.upgrade(docMeta);
                const expected = {
                    "1s2gw2Mkwb": {
                        "batch": "1Y9CcEHSxc",
                        "column": 0,
                        "created": "2012-03-02T11:38:49.321Z",
                        "guid": "1s2gw2Mkwb",
                        "id": "1s2gw2Mkwb",
                        "lastUpdated": "2012-03-02T11:38:49.321Z",
                        "mode": "READ",
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
                };
                Assertions_1.assertJSON(DocMetas_1.DocMetas.getPageMeta(docMeta, 1).pagemarks, expected);
            });
            it("No text highlights", function () {
                let docMeta = createUpgradeDoc();
                delete DocMetas_1.DocMetas.getPageMeta(docMeta, 1).textHighlights;
                docMeta = DocMetas_1.DocMetas.upgrade(docMeta);
                chai_1.assert.deepEqual(DocMetas_1.DocMetas.getPageMeta(docMeta, 1).textHighlights, {});
            });
            it("No pagemarks", function () {
                let docMeta = createUpgradeDoc();
                delete DocMetas_1.DocMetas.getPageMeta(docMeta, 1).pagemarks;
                docMeta = DocMetas_1.DocMetas.upgrade(docMeta);
                chai_1.assert.deepEqual(DocMetas_1.DocMetas.getPageMeta(docMeta, 1).pagemarks, {});
            });
            it("No id on pagemarks", function () {
                let docMeta = createUpgradeDoc();
                console.log(JSON.stringify(DocMetas_1.DocMetas.getPageMeta(docMeta, 1).pagemarks, null, "  "));
                Assertions_1.assertJSON(Object.keys(DocMetas_1.DocMetas.getPageMeta(docMeta, 1).pagemarks), ["1s2gw2Mkwb"]);
                (DocMetas_1.DocMetas.getPageMeta(docMeta, 1).pagemarks["1s2gw2Mkwb"].id) = null;
                docMeta = DocMetas_1.DocMetas.upgrade(docMeta);
                const expected = {
                    "1s2gw2Mkwb": {
                        "batch": "1Y9CcEHSxc",
                        "column": 0,
                        "created": "2012-03-02T11:38:49.321Z",
                        "guid": "1s2gw2Mkwb",
                        "id": "1s2gw2Mkwb",
                        "lastUpdated": "2012-03-02T11:38:49.321Z",
                        "mode": "READ",
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
                };
                Assertions_1.assertJSON(DocMetas_1.DocMetas.getPageMeta(docMeta, 1).pagemarks, expected);
            });
            it("No id on text highlights", function () {
                let docMeta = createUpgradeDoc();
                delete DocMetas_1.DocMetas.getPageMeta(docMeta, 1).textHighlights["12pNUv1Y9S"].id;
                docMeta = DocMetas_1.DocMetas.upgrade(docMeta);
                const expected = {
                    "12pNUv1Y9S": {
                        "guid": "12pNUv1Y9S",
                        "created": "2012-03-02T11:38:49.321Z",
                        "lastUpdated": "2012-03-02T11:38:49.321Z",
                        "rects": {
                            "0": {
                                "top": 100,
                                "left": 100,
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
                        "color": "yellow",
                        "id": "1cAbqEAHny"
                    }
                };
                Assertions_1.assertJSON(DocMetas_1.DocMetas.getPageMeta(docMeta, 1).textHighlights, expected);
            });
        });
    });
});
function createUpgradeDoc() {
    const fingerprint = "0x001";
    const nrPages = 1;
    const docMeta = DocMetas_1.DocMetas.createWithinInitialPagemarks(fingerprint, nrPages);
    const textHighlight = TextHighlights_1.TextHighlights.createMockTextHighlight();
    DocMetas_1.DocMetas.getPageMeta(docMeta, 1).textHighlights[textHighlight.id] = textHighlight;
    return docMeta;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jTWV0YXNUZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRG9jTWV0YXNUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQTRCO0FBQzVCLHVDQUFrQztBQUNsQyx5Q0FBb0M7QUFDcEMsNkRBQXdEO0FBQ3hELG1EQUE4QztBQUM5Qyx5RUFBb0U7QUFDcEUsbUVBQThEO0FBQzlELHFEQUFnRDtBQUNoRCxnREFBMkM7QUFDM0MseUNBQXdDO0FBQ3hDLDJDQUFzQztBQUd0Qyx5QkFBVyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRXJCLFFBQVEsQ0FBQyxVQUFVLEVBQUU7SUFFakIsVUFBVSxDQUFDO1FBQ1AscUJBQVMsQ0FBQyxTQUFTLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUMzQixxQkFBUyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ2xDLENBQUMsQ0FBQyxDQUFDO0lBRUgsUUFBUSxDQUFDLE1BQU0sRUFBRTtRQUViLEVBQUUsQ0FBQyx1Q0FBdUMsRUFBRTtZQUV4QyxNQUFNLFdBQVcsR0FBRyxPQUFPLENBQUM7WUFFNUIsTUFBTSxPQUFPLEdBQUcsbUJBQVEsQ0FBQyw0QkFBNEIsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDdkUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUVqRCxtQkFBUSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsRUFBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBQyxDQUFDLENBQUM7WUFFNUUsTUFBTSxJQUFJLEdBQUcsdUNBQWtCLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztZQUV6RCxNQUFNLE1BQU0sR0FBRyxtQkFBUSxDQUFDLFdBQVcsQ0FBQyxJ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T0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLEdBQUcsYUFBYSxDQUFDO0lBRWxGLE9BQU8sT0FBTyxDQUFDO0FBRW5CLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Fzc2VydH0gZnJvbSAnY2hhaSc7XG5pbXBvcnQge0RvY01ldGF9IGZyb20gJy4vRG9jTWV0YSc7XG5pbXBvcnQge0RvY01ldGFzfSBmcm9tICcuL0RvY01ldGFzJztcbmltcG9ydCB7TWV0YWRhdGFTZXJpYWxpemVyfSBmcm9tICcuL01ldGFkYXRhU2VyaWFsaXplcic7XG5pbXBvcnQge2Fzc2VydEpTT059IGZyb20gJy4uL3Rlc3QvQXNzZXJ0aW9ucyc7XG5pbXBvcnQge1BhZ2VtYXJrVHlwZX0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9tZXRhZGF0YS9QYWdlbWFya1R5cGUnO1xuaW1wb3J0IHtUZXN0aW5nVGltZX0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy90ZXN0L1Rlc3RpbmdUaW1lJztcbmltcG9ydCB7VGV4dEhpZ2hsaWdodHN9IGZyb20gJy4vVGV4dEhpZ2hsaWdodHMnO1xuaW1wb3J0IHtQcm94aWVzfSBmcm9tICcuLi9wcm94aWVzL1Byb3hpZXMnO1xuaW1wb3J0IHtNb2NrRG9jTWV0YXN9IGZyb20gJy4vRG9jTWV0YXMnO1xuaW1wb3J0IHtQYWdlbWFya3N9IGZyb20gJy4vUGFnZW1hcmtzJztcbmltcG9ydCB7SURvY01ldGF9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL21ldGFkYXRhL0lEb2NNZXRhXCI7XG5cblRlc3RpbmdUaW1lLmZyZWV6ZSgpO1xuXG5kZXNjcmliZSgnRG9jTWV0YXMnLCBmdW5jdGlvbigpIHtcblxuICAgIGJlZm9yZUVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIFBhZ2VtYXJrcy5zZXF1ZW5jZXMuaWQgPSAwO1xuICAgICAgICBQYWdlbWFya3Muc2VxdWVuY2VzLmJhdGNoID0gMDtcbiAgICB9KTtcblxuICAgIGRlc2NyaWJlKCdKU09OJywgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgaXQoXCJUZXN0IGJhc2ljIEpTT04gZW5jb2RpbmcgYW5kIGRlY29kaW5nXCIsIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICBjb25zdCBmaW5nZXJwcmludCA9IFwiMHgwMDFcIjtcblxuICAgICAgICAgICAgY29uc3QgZG9jTWV0YSA9IERvY01ldGFzLmNyZWF0ZVdpdGhpbkluaXRpYWxQYWdlbWFya3MoZmluZ2VycHJpbnQsIDE0KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGRvY01ldGEsIG51bGwsIFwiICBcIikpO1xuXG4gICAgICAgICAgICBEb2NNZXRhcy5hZGRQYWdlbWFya3MoZG9jTWV0YSwge25yUGFnZXM6IDEsIG9mZnNldFBhZ2U6IDQsIHBlcmNlbnRhZ2U6IDUwfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGpzb24gPSBNZXRhZGF0YVNlcmlhbGl6ZXIuc2VyaWFsaXplKGRvY01ldGEsIFwiICBcIik7XG5cbiAgICAgICAgICAgIGNvbnN0IGFjdHVhbCA9IERvY01ldGFzLmRlc2VyaWFsaXplKGpzb24sIGZpbmdlcnByaW50KTtcblxuICAgICAgICAgICAgYXNzZXJ0SlNPTihkb2NNZXRhLCBhY3R1YWwpO1xuXG4gICAgICAgICAgICBhc3NlcnQuZXF1YWwoYWN0dWFsIGluc3RhbmNlb2YgRG9jTWV0YSwgdHJ1ZSk7XG5cblxuICAgICAgICB9KTtcblxuICAgICAgICBpdChcIk9uZSBwYWdlXCIsIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICBjb25zdCBmaW5nZXJwcmludCA9IFwiMHgwMDFcIjtcblxuICAgICAgICAgICAgY29uc3QgZG9jTWV0YSA9IERvY01ldGFzLmNyZWF0ZShmaW5nZXJwcmludCwgMSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShkb2NNZXRhLCBudWxsLCBcIiAgXCIpKTtcblxuICAgICAgICAgICAgLy8gRG9jTWV0YXMuYWRkUGFnZW1hcmtzKGRvY01ldGEsIHtuclBhZ2VzOiAxLCBvZmZzZXRQYWdlOiAxLCBwZXJjZW50YWdlOiA1MH0pO1xuXG4gICAgICAgICAgICBjb25zdCBqc29uID0gTWV0YWRhdGFTZXJpYWxpemVyLnNlcmlhbGl6ZShkb2NNZXRhLCBcIiAgXCIpO1xuXG4gICAgICAgICAgICBjb25zdCBhY3R1YWwgPSBEb2NNZXRhcy5kZXNlcmlhbGl6ZShqc29uLCBmaW5nZXJwcmludCk7XG5cbiAgICAgICAgICAgIGFzc2VydEpTT04oZG9jTWV0YSwgYWN0dWFsKTtcblxuICAgICAgICAgICAgYXNzZXJ0LmVxdWFsKGFjdHVhbCBpbnN0YW5jZW9mIERvY01ldGEsIHRydWUpO1xuXG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoXCJUZXN0IHdpdGggZGVmYXVsdCB2YWx1ZXMgZm9yIHNlcmlhbGl6ZWQgZGF0YVwiLCBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgY29uc3QganNvbiA9IFwie31cIjtcblxuICAgICAgICAgICAgY29uc3QgZG9jTWV0YSA9IERvY01ldGFzLmRlc2VyaWFsaXplKGpzb24sICcweDAwMCcpO1xuXG4gICAgICAgICAgICBhc3NlcnQuZXF1YWwoZG9jTWV0YSBpbnN0YW5jZW9mIERvY01ldGEsIHRydWUpO1xuXG4gICAgICAgIH0pO1xuXG5cblxuICAgIH0pO1xuXG4gICAgaXQoJ05vIHdoaXRlc3BhY2Ugb3B0aW9uJywgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgLy8gbWFrZSBzdXJlIG5vIHdoaXRlc3BhY2UgaXMgdXNlZFxuICAgICAgICBjb25zdCBmaW5nZXJwcmludCA9IFwiMHgwMDFcIjtcblxuICAgICAgICBjb25zdCBkb2NNZXRhID0gTW9ja0RvY01ldGFzLmNyZWF0ZU1vY2tEb2NNZXRhKGZpbmdlcnByaW50KTtcbiAgICAgICAgY29uc3QganNvbiA9IERvY01ldGFzLnNlcmlhbGl6ZShkb2NNZXRhLCBcIlwiKTtcblxuICAgICAgICBhc3NlcnQuaXNUcnVlKGpzb24uc3RhcnRzV2l0aChcIntcXFwiYW5ub3RhdGlvbkluZm9cXFwiOnt9LFxcXCJ2ZXJzaW9uXFxcIjoyLFxcXCJhdHRhY2htZW50c1xcXCI6e31cIikpO1xuXG4gICAgICAgIGFzc2VydC5lcXVhbChqc29uLmluZGV4T2YoXCJcXG5cIiksIC0xKTtcblxuXG4gICAgfSk7XG5cbiAgICBkZXNjcmliZSgnRGVzZXJpYWxpemUnLCBmdW5jdGlvbigpIHtcblxuICAgICAgICBpdChcIlRlc3QgRGVzZXJpYWxpemluZyBhbmQgdGhlbiB1cGRhdGluZyBzb21lIHBhZ2VtYXJrc1wiLCBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgY29uc3QgZmluZ2VycHJpbnQgPSBcIjB4MDAxXCI7XG5cbiAgICAgICAgICAgIGNvbnN0IG5yUGFnZXMgPSAyO1xuICAgICAgICAgICAgbGV0IGRvY01ldGEgPSBEb2NNZXRhcy5jcmVhdGVXaXRoaW5Jbml0aWFsUGFnZW1hcmtzKGZpbmdlcnByaW50LCBuclBhZ2VzKTtcblxuICAgICAgICAgICAgZG9jTWV0YS5kb2NJbmZvLnV1aWQgPSBcIl9fY2Fub25pY2FsaXplZF9fXCI7XG5cbiAgICAgICAgICAgIGNvbnN0IGpzb24gPSBEb2NNZXRhcy5zZXJpYWxpemUoZG9jTWV0YSwgXCIgIFwiKTtcblxuICAgICAgICAgICAgY29uc3QgZXhwZWN0ZWQgPSB7XG4gICAgICAgICAgICAgICAgICAgIFwiYW5ub3RhdGlvbkluZm9cIjoge30sXG4gICAgICAgICAgICAgICAgICAgIFwiYXR0YWNobWVudHNcIjoge30sXG4gICAgICAgICAgICAgICAgICAgIFwiZG9jSW5mb1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImFkZGVkXCI6IFwiMjAxMi0wMy0wMlQxMTozODo0OS4zMjFaXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFyY2hpdmVkXCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhdHRhY2htZW50c1wiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZmluZ2VycHJpbnRcIjogXCIweDAwMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJmbGFnZ2VkXCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuclBhZ2VzXCI6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInBhZ2VtYXJrVHlwZVwiOiBcIlNJTkdMRV9DT0xVTU5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicHJvZ3Jlc3NcIjogMTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwcm9wZXJ0aWVzXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyZWFkaW5nUGVyRGF5XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjIwMTItMDMtMDJcIjogMlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGFnc1wiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidXVpZFwiOiBcIl9fY2Fub25pY2FsaXplZF9fXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCJwYWdlTWV0YXNcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCIxXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFyZWFIaWdobGlnaHRzXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29tbWVudHNcIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmbGFzaGNhcmRzXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibm90ZXNcIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwYWdlSW5mb1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibnVtXCI6IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGFnZW1hcmtzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIxczJndzJNa3diXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYmF0Y2hcIjogXCIxWTlDY0VIU3hjXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbHVtblwiOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjcmVhdGVkXCI6IFwiMjAxMi0wMy0wMlQxMTozODo0OS4zMjFaXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImd1aWRcIjogXCIxczJndzJNa3diXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwiMXMyZ3cyTWt3YlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYXN0VXBkYXRlZFwiOiBcIjIwMTItMDMtMDJUMTE6Mzg6NDkuMzIxWlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtb2RlXCI6IFwiUkVBRFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJub3Rlc1wiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGVyY2VudGFnZVwiOiAxMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJlY3RcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxlZnRcIjogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRvcFwiOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogMTAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiU0lOR0xFX0NPTFVNTlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicXVlc3Rpb25zXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmVhZGluZ1Byb2dyZXNzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIxUUxYNFU3dlRVXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY3JlYXRlZFwiOiBcIjIwMTItMDMtMDJUMTE6Mzg6NDkuMzIxWlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcIjFRTFg0VTd2VFVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHJvZ3Jlc3NcIjogMTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwcm9ncmVzc0J5TW9kZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJSRUFEXCI6IDEwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNjcmVlbnNob3RzXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dEhpZ2hsaWdodHNcIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aHVtYm5haWxzXCI6IHt9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFyZWFIaWdobGlnaHRzXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29tbWVudHNcIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmbGFzaGNhcmRzXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibm90ZXNcIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwYWdlSW5mb1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibnVtXCI6IDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGFnZW1hcmtzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIxMjZuUzhQTXFGXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYmF0Y2hcIjogXCIxeU5ic2lQc2VoXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbHVtblwiOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjcmVhdGVkXCI6IFwiMjAxMi0wMy0wMlQxMTozODo0OS4zMjFaXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImd1aWRcIjogXCIxMjZuUzhQTXFGXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwiMTI2blM4UE1xRlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYXN0VXBkYXRlZFwiOiBcIjIwMTItMDMtMDJUMTE6Mzg6NDkuMzIxWlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtb2RlXCI6IFwiUkVBRFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJub3Rlc1wiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGVyY2VudGFnZVwiOiAxMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJlY3RcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxlZnRcIjogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRvcFwiOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogMTAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiU0lOR0xFX0NPTFVNTlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicXVlc3Rpb25zXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmVhZGluZ1Byb2dyZXNzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIxVnRVUVFKb1hyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY3JlYXRlZFwiOiBcIjIwMTItMDMtMDJUMTE6Mzg6NDkuMzIxWlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcIjFWdFVRUUpvWHJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHJvZ3Jlc3NcIjogMTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwcm9ncmVzc0J5TW9kZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJSRUFEXCI6IDEwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNjcmVlbnNob3RzXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dEhpZ2hsaWdodHNcIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aHVtYm5haWxzXCI6IHt9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFwidmVyc2lvblwiOiAyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgO1xuXG4gICAgICAgICAgICBhc3NlcnQuZXF1YWwodHlwZW9mIGpzb24sIFwic3RyaW5nXCIpO1xuXG4gICAgICAgICAgICBhc3NlcnRKU09OKGpzb24sIGV4cGVjdGVkKTtcblxuICAgICAgICAgICAgZG9jTWV0YSA9IERvY01ldGFzLmRlc2VyaWFsaXplKGpzb24sIGZpbmdlcnByaW50KTtcblxuICAgICAgICAgICAgLy8gbm93IHdlIGhhdmUgdG8gdHJhY2UgaXQgbGlrZSBpdCB3b3VsZCBiZSBpbiBwcm9kdWN0aW9uLi5cbiAgICAgICAgICAgIGRvY01ldGEgPSBQcm94aWVzLmNyZWF0ZShkb2NNZXRhKTtcblxuICAgICAgICAgICAgYXNzZXJ0SlNPTihkb2NNZXRhLCBleHBlY3RlZCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHBhZ2VNZXRhID0gRG9jTWV0YXMuZ2V0UGFnZU1ldGEoZG9jTWV0YSwgMSk7XG5cbiAgICAgICAgICAgIChwYWdlTWV0YSBhcyBhbnkpLnBhZ2VtYXJrcyA9IHt9O1xuXG4gICAgICAgICAgICBhc3NlcnQuZGVlcEVxdWFsKERvY01ldGFzLmdldFBhZ2VNZXRhKGRvY01ldGEsIDEpLnBhZ2VtYXJrcywge30pO1xuXG4gICAgICAgIH0pO1xuXG4gICAgfSk7XG5cblxuICAgIGRlc2NyaWJlKCdVcGdyYWRlJywgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgZGVzY3JpYmUoXCJUZXN0IHVwZ3JhZGluZyB0aGUgbWV0YWRhdGEgaWYgaXQgaXMgbWlzc2luZyBmaWVsZHMuXCIsIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICBpdChcIk5vIERvY0luZm8ucGFnZW1hcmtUeXBlXCIsIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgbGV0IGRvY01ldGEgPSBjcmVhdGVVcGdyYWRlRG9jKCk7XG5cbiAgICAgICAgICAgICAgICBhc3NlcnQubm90RXF1YWwoZG9jTWV0YS5kb2NJbmZvLCBudWxsKTtcbiAgICAgICAgICAgICAgICBkZWxldGUgKERvY01ldGFzLmdldFBhZ2VNZXRhKGRvY01ldGEsIDEpIGFzIGFueSkudGV4dEhpZ2hsaWdodHM7XG5cbiAgICAgICAgICAgICAgICBkZWxldGUgZG9jTWV0YS5kb2NJbmZvLnBhZ2VtYXJrVHlwZTtcblxuICAgICAgICAgICAgICAgIGRvY01ldGEgPSBEb2NNZXRhcy51cGdyYWRlKGRvY01ldGEpO1xuXG4gICAgICAgICAgICAgICAgYXNzZXJ0LmRlZXBFcXVhbChkb2NNZXRhLmRvY0luZm8ucGFnZW1hcmtUeXBlLCBQYWdlbWFya1R5cGUuU0lOR0xFX0NPTFVNTik7XG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpdChcIlBhZ2VtYXJrIHdpdGhvdXQgcmVjdFwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBsZXQgZG9jTWV0YSA9IGNyZWF0ZVVwZ3JhZGVEb2MoKTtcblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKE9iamVjdC5rZXlzKERvY01ldGFzLmdldFBhZ2VNZXRhKGRvY01ldGEsIDEpLnBhZ2VtYXJrcykpO1xuXG4gICAgICAgICAgICAgICAgYXNzZXJ0SlNPTihPYmplY3Qua2V5cyhEb2NNZXRhcy5nZXRQYWdlTWV0YShkb2NNZXRhLCAxKS5wYWdlbWFya3MpLCBbXCIxczJndzJNa3diXCJdKTtcblxuICAgICAgICAgICAgICAgIGRlbGV0ZSBEb2NNZXRhcy5nZXRQYWdlTWV0YShkb2NNZXRhLCAxKS5wYWdlbWFya3NbXCIxczJndzJNa3diXCJdLnJlY3QgO1xuXG4gICAgICAgICAgICAgICAgZG9jTWV0YSA9IERvY01ldGFzLnVwZ3JhZGUoZG9jTWV0YSk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBleHBlY3RlZCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiMXMyZ3cyTWt3YlwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiYXRjaFwiOiBcIjFZOUNjRUhTeGNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvbHVtblwiOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY3JlYXRlZFwiOiBcIjIwMTItMDMtMDJUMTE6Mzg6NDkuMzIxWlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZ3VpZFwiOiBcIjFzMmd3Mk1rd2JcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwiMXMyZ3cyTWt3YlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFzdFVwZGF0ZWRcIjogXCIyMDEyLTAzLTAyVDExOjM4OjQ5LjMyMVpcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1vZGVcIjogXCJSRUFEXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJub3Rlc1wiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBlcmNlbnRhZ2VcIjogMTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmVjdFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsZWZ0XCI6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidG9wXCI6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogMTAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJTSU5HTEVfQ09MVU1OXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGFzc2VydEpTT04oRG9jTWV0YXMuZ2V0UGFnZU1ldGEoZG9jTWV0YSwgMSkucGFnZW1hcmtzLCBleHBlY3RlZCk7XG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpdChcIk5vIHRleHQgaGlnaGxpZ2h0c1wiLCBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgIGxldCBkb2NNZXRhID0gY3JlYXRlVXBncmFkZURvYygpO1xuXG4gICAgICAgICAgICAgICAgZGVsZXRlIChEb2NNZXRhcy5nZXRQYWdlTWV0YShkb2NNZXRhLCAxKSBhcyBhbnkpLnRleHRIaWdobGlnaHRzO1xuXG4gICAgICAgICAgICAgICAgZG9jTWV0YSA9IERvY01ldGFzLnVwZ3JhZGUoZG9jTWV0YSk7XG5cbiAgICAgICAgICAgICAgICBhc3NlcnQuZGVlcEVxdWFsKERvY01ldGFzLmdldFBhZ2VNZXRhKGRvY01ldGEsIDEpLnRleHRIaWdobGlnaHRzLCB7fSk7XG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpdChcIk5vIHBhZ2VtYXJrc1wiLCBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgIGxldCBkb2NNZXRhID0gY3JlYXRlVXBncmFkZURvYygpO1xuXG4gICAgICAgICAgICAgICAgZGVsZXRlIChEb2NNZXRhcy5nZXRQYWdlTWV0YShkb2NNZXRhLCAxKSBhcyBhbnkpLnBhZ2VtYXJrcztcblxuICAgICAgICAgICAgICAgIGRvY01ldGEgPSBEb2NNZXRhcy51cGdyYWRlKGRvY01ldGEpO1xuXG4gICAgICAgICAgICAgICAgYXNzZXJ0LmRlZXBFcXVhbChEb2NNZXRhcy5nZXRQYWdlTWV0YShkb2NNZXRhLCAxKS5wYWdlbWFya3MsIHt9KTtcblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGl0KFwiTm8gaWQgb24gcGFnZW1hcmtzXCIsIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgbGV0IGRvY01ldGEgPSBjcmVhdGVVcGdyYWRlRG9jKCk7XG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShEb2NNZXRhcy5nZXRQYWdlTWV0YShkb2NNZXRhLCAxKS5wYWdlbWFya3MsIG51bGwsIFwiICBcIikpO1xuXG4gICAgICAgICAgICAgICAgYXNzZXJ0SlNPTihPYmplY3Qua2V5cyhEb2NNZXRhcy5nZXRQYWdlTWV0YShkb2NNZXRhLCAxKS5wYWdlbWFya3MpLCBbXCIxczJndzJNa3diXCJdKTtcblxuICAgICAgICAgICAgICAgICg8YW55PiAoRG9jTWV0YXMuZ2V0UGFnZU1ldGEoZG9jTWV0YSwgMSkucGFnZW1hcmtzW1wiMXMyZ3cyTWt3YlwiXS5pZCkpID0gbnVsbDtcblxuICAgICAgICAgICAgICAgIGRvY01ldGEgPSBEb2NNZXRhcy51cGdyYWRlKGRvY01ldGEpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZXhwZWN0ZWQgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIjFzMmd3Mk1rd2JcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYmF0Y2hcIjogXCIxWTlDY0VIU3hjXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2x1bW5cIjogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNyZWF0ZWRcIjogXCIyMDEyLTAzLTAyVDExOjM4OjQ5LjMyMVpcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImd1aWRcIjogXCIxczJndzJNa3diXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcIjFzMmd3Mk1rd2JcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxhc3RVcGRhdGVkXCI6IFwiMjAxMi0wMy0wMlQxMTozODo0OS4zMjFaXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtb2RlXCI6IFwiUkVBRFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibm90ZXNcIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwZXJjZW50YWdlXCI6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJlY3RcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhlaWdodFwiOiAxMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGVmdFwiOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRvcFwiOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDEwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiU0lOR0xFX0NPTFVNTlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBhc3NlcnRKU09OKERvY01ldGFzLmdldFBhZ2VNZXRhKGRvY01ldGEsIDEpLnBhZ2VtYXJrcywgZXhwZWN0ZWQpO1xuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaXQoXCJObyBpZCBvbiB0ZXh0IGhpZ2hsaWdodHNcIiwgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICBsZXQgZG9jTWV0YSA9IGNyZWF0ZVVwZ3JhZGVEb2MoKTtcblxuICAgICAgICAgICAgICAgIGRlbGV0ZSBEb2NNZXRhcy5nZXRQYWdlTWV0YShkb2NNZXRhLCAxKS50ZXh0SGlnaGxpZ2h0c1tcIjEycE5VdjFZOVNcIl0uaWQ7XG5cbiAgICAgICAgICAgICAgICBkb2NNZXRhID0gRG9jTWV0YXMudXBncmFkZShkb2NNZXRhKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGV4cGVjdGVkID0ge1xuICAgICAgICAgICAgICAgICAgICBcIjEycE5VdjFZOVNcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJndWlkXCI6IFwiMTJwTlV2MVk5U1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjcmVhdGVkXCI6IFwiMjAxMi0wMy0wMlQxMTozODo0OS4zMjFaXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxhc3RVcGRhdGVkXCI6IFwiMjAxMi0wMy0wMlQxMTozODo0OS4zMjFaXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJlY3RzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjBcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRvcFwiOiAxMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGVmdFwiOiAxMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmlnaHRcIjogMjAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJvdHRvbVwiOiAyMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogMTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhlaWdodFwiOiAxMDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0U2VsZWN0aW9uc1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIwXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiaGVsbG8gd29ybGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyZWN0XCI6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlRFWFRcIjogXCJoZWxsbyB3b3JsZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJpbWFnZXNcIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5vdGVzXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJxdWVzdGlvbnNcIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICBcImZsYXNoY2FyZHNcIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwieWVsbG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwiMWNBYnFFQUhueVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgYXNzZXJ0SlNPTihEb2NNZXRhcy5nZXRQYWdlTWV0YShkb2NNZXRhLCAxKS50ZXh0SGlnaGxpZ2h0cywgZXhwZWN0ZWQpO1xuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9KTtcblxuICAgIH0pO1xuXG59KTtcblxuZnVuY3Rpb24gY3JlYXRlVXBncmFkZURvYygpOiBJRG9jTWV0YSB7XG5cbiAgICBjb25zdCBmaW5nZXJwcmludCA9IFwiMHgwMDFcIjtcbiAgICBjb25zdCBuclBhZ2VzID0gMTtcbiAgICBjb25zdCBkb2NNZXRhID0gRG9jTWV0YXMuY3JlYXRlV2l0aGluSW5pdGlhbFBhZ2VtYXJrcyhmaW5nZXJwcmludCwgbnJQYWdlcyk7XG5cbiAgICBjb25zdCB0ZXh0SGlnaGxpZ2h0ID0gVGV4dEhpZ2hsaWdodHMuY3JlYXRlTW9ja1RleHRIaWdobGlnaHQoKTtcblxuICAgIERvY01ldGFzLmdldFBhZ2VNZXRhKGRvY01ldGEsIDEpLnRleHRIaWdobGlnaHRzW3RleHRIaWdobGlnaHQuaWRdID0gdGV4dEhpZ2hsaWdodDtcblxuICAgIHJldHVybiBkb2NNZXRhO1xuXG59XG4iXX0=