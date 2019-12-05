"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AnnotationType_1 = require("polar-shared/src/metadata/AnnotationType");
const DocAnnotationIndex_1 = require("./DocAnnotationIndex");
const chai_1 = require("chai");
const Assertions_1 = require("../test/Assertions");
const TextHighlights_1 = require("../metadata/TextHighlights");
const TestingTime_1 = require("polar-shared/src/test/TestingTime");
const ObjectIDs_1 = require("../util/ObjectIDs");
function toDocAnnotations(docAnnotationIndex) {
    return docAnnotationIndex.getDocAnnotationsSorted().map(current => current.obj);
}
describe('DocAnnotationIndex', function () {
    beforeEach(function () {
        TestingTime_1.TestingTime.freeze();
    });
    it("Basic sorting", function () {
        const a0 = createAnnotation('0001', 1, 0, 0);
        const a1 = createAnnotation('0002', 1, 0, 0);
        const a2 = createAnnotation('0003', 1, 0, 0);
        const docAnnotationIndex = new DocAnnotationIndex_1.DocAnnotationIndex();
        docAnnotationIndex.put(a0, a1, a2);
        const expected = {
            "annotationType": "TEXT_HIGHLIGHT",
            "children": [],
            "created": "2009-06-15T13:45:30",
            "id": "0001",
            "oid": 0,
            "original": {
                "color": "yellow",
                "created": "2012-03-02T11:38:49.321Z",
                "flashcards": {},
                "guid": "12pNUv1Y9S",
                "id": "12pNUv1Y9S",
                "images": {},
                "lastUpdated": "2012-03-02T11:38:49.321Z",
                "notes": {},
                "questions": {},
                "rects": {
                    "0": {
                        "bottom": 200,
                        "height": 100,
                        "left": 100,
                        "right": 200,
                        "top": 100,
                        "width": 100
                    }
                },
                "text": {
                    "TEXT": "hello world"
                },
                "textSelections": {
                    "0": {
                        "rect": null,
                        "text": "hello world"
                    }
                }
            },
            "pageMeta": null,
            "docMeta": null,
            "pageNum": 1,
            "position": {
                "x": 0,
                "y": 0
            }
        };
        const docAnnotations = toDocAnnotations(docAnnotationIndex);
        Assertions_1.assertJSON(docAnnotations, [
            {
                "oid": 0,
                "id": "0001",
                "guid": "0001",
                "fingerprint": "1234",
                "docInfo": null,
                "annotationType": "TEXT_HIGHLIGHT",
                "pageNum": 1,
                "position": {
                    "x": 0,
                    "y": 0
                },
                "created": "2009-06-15T13:45:30",
                "pageMeta": null,
                "docMeta": null,
                "original": {
                    "id": "12pNUv1Y9S",
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
                    "color": "yellow"
                },
                "immutable": false,
                "tags": {}
            },
            {
                "oid": 1,
                "id": "0002",
                "guid": "0002",
                "fingerprint": "1234",
                "docInfo": null,
                "annotationType": "TEXT_HIGHLIGHT",
                "pageNum": 1,
                "position": {
                    "x": 0,
                    "y": 0
                },
                "created": "2009-06-15T13:45:30",
                "pageMeta": null,
                "docMeta": null,
                "original": {
                    "id": "12pNUv1Y9S",
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
                    "color": "yellow"
                },
                "immutable": false,
                "tags": {}
            },
            {
                "oid": 2,
                "id": "0003",
                "guid": "0003",
                "fingerprint": "1234",
                "docInfo": null,
                "annotationType": "TEXT_HIGHLIGHT",
                "pageNum": 1,
                "position": {
                    "x": 0,
                    "y": 0
                },
                "created": "2009-06-15T13:45:30",
                "pageMeta": null,
                "docMeta": null,
                "original": {
                    "id": "12pNUv1Y9S",
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
                    "color": "yellow"
                },
                "immutable": false,
                "tags": {}
            }
        ]);
    });
    it("complex sorting", function () {
        const a0 = createAnnotation('0001', 3, 0, 100);
        const a1 = createAnnotation('0002', 2, 100, 0);
        const a2 = createAnnotation('0003', 1, 25, 50);
        const docAnnotationIndex = new DocAnnotationIndex_1.DocAnnotationIndex();
        docAnnotationIndex.put(a0, a1, a2);
        const expected = [
            {
                "oid": 5,
                "id": "0003",
                "guid": "0003",
                "fingerprint": "1234",
                "docInfo": null,
                "annotationType": "TEXT_HIGHLIGHT",
                "pageNum": 1,
                "position": {
                    "x": 25,
                    "y": 50
                },
                "created": "2009-06-15T13:45:30",
                "pageMeta": null,
                "docMeta": null,
                "original": {
                    "id": "12pNUv1Y9S",
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
                    "color": "yellow"
                },
                "immutable": false,
                "tags": {}
            },
            {
                "oid": 4,
                "id": "0002",
                "guid": "0002",
                "fingerprint": "1234",
                "docInfo": null,
                "annotationType": "TEXT_HIGHLIGHT",
                "pageNum": 2,
                "position": {
                    "x": 100,
                    "y": 0
                },
                "created": "2009-06-15T13:45:30",
                "pageMeta": null,
                "docMeta": null,
                "original": {
                    "id": "12pNUv1Y9S",
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
                    "color": "yellow"
                },
                "immutable": false,
                "tags": {}
            },
            {
                "oid": 3,
                "id": "0001",
                "guid": "0001",
                "fingerprint": "1234",
                "docInfo": null,
                "annotationType": "TEXT_HIGHLIGHT",
                "pageNum": 3,
                "position": {
                    "x": 0,
                    "y": 100
                },
                "created": "2009-06-15T13:45:30",
                "pageMeta": null,
                "docMeta": null,
                "original": {
                    "id": "12pNUv1Y9S",
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
                    "color": "yellow"
                },
                "immutable": false,
                "tags": {}
            }
        ];
        const docAnnotations = toDocAnnotations(docAnnotationIndex);
        Assertions_1.assertJSON(docAnnotations, expected, "main output wrong (1)");
    });
    it("Parent and child and delete child", function () {
        const a0 = createAnnotation('textarea1', 1, 0, 0);
        const a1 = createAnnotation('comment1', 1, 0, 0, 'text-area:textarea1');
        const docAnnotationIndex = new DocAnnotationIndex_1.DocAnnotationIndex();
        docAnnotationIndex.put(a0, a1);
        Assertions_1.assertJSON(docAnnotationIndex.getDocAnnotations().map(current => current.id), [
            "textarea1",
        ], "textarea1 is wrong");
        const children = docAnnotationIndex.get('textarea1').getChildren();
        chai_1.assert.isDefined(children);
        chai_1.assert.equal(children.length, 1, "children not valid");
        chai_1.assert.equal(children[0].id, "comment1", "comment1 not valid");
        docAnnotationIndex.delete("comment1");
        chai_1.assert.isDefined(docAnnotationIndex.get('textarea1').getChildren());
        Assertions_1.assertJSON(docAnnotationIndex.get('textarea1').getChildren().length, 0);
    });
    it("Parent and child and delete parent", function () {
        const a0 = createAnnotation('text-area:1', 1, 0, 0);
        const a1 = createAnnotation('comment:1', 1, 0, 0, 'text-area:1');
        const docAnnotationIndex = new DocAnnotationIndex_1.DocAnnotationIndex();
        docAnnotationIndex.put(a0, a1);
        docAnnotationIndex.delete("text-area:1");
        chai_1.assert.isUndefined(docAnnotationIndex.get('text-area:1'), "text-area:1 was not undefined");
    });
});
function createAnnotation(id, pageNum, x, y, ref) {
    const textHighlight = TextHighlights_1.TextHighlights.createMockTextHighlight();
    return {
        oid: ObjectIDs_1.ObjectIDs.create(),
        id,
        guid: id,
        fingerprint: '1234',
        docInfo: null,
        text: undefined,
        html: undefined,
        annotationType: AnnotationType_1.AnnotationType.TEXT_HIGHLIGHT,
        pageNum,
        position: {
            x,
            y
        },
        created: '2009-06-15T13:45:30',
        pageMeta: null,
        docMeta: null,
        original: textHighlight,
        ref,
        immutable: false,
        color: undefined,
        img: undefined,
        tags: {}
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jQW5ub3RhdGlvbkluZGV4VGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkRvY0Fubm90YXRpb25JbmRleFRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSw2RUFBd0U7QUFDeEUsNkRBQXdEO0FBQ3hELCtCQUE0QjtBQUM1QixtREFBOEM7QUFDOUMsK0RBQTBEO0FBQzFELG1FQUE4RDtBQUM5RCxpREFBNEM7QUFHNUMsU0FBUyxnQkFBZ0IsQ0FBQyxrQkFBc0M7SUFDNUQsT0FBTyxrQkFBa0IsQ0FBQyx1QkFBdUIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNwRixDQUFDO0FBRUQsUUFBUSxDQUFDLG9CQUFvQixFQUFFO0lBRTNCLFVBQVUsQ0FBQztRQUNQLHlCQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDekIsQ0FBQyxDQUFDLENBQUM7SUFJSCxFQUFFLENBQUMsZUFBZSxFQUFFO1FBRWhCLE1BQU0sRUFBRSxHQUFHLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBRSxDQUFDO1FBQzlDLE1BQU0sRUFBRSxHQUFHLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBRSxDQUFDO1FBQzlDLE1BQU0sRUFBRSxHQUFHLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBRSxDQUFDO1FBRTlDLE1BQU0sa0JBQWtCLEdBQUcsSUFBSSx1Q0FBa0IsRUFBRSxDQUFDO1FBQ3BELGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBSW5DLE1BQU0sUUFBUSxHQUFRO1lBQ2xCLGdCQUFnQixFQUFFLGdCQUFnQjtZQUNsQyxVQUFVLEVBQUUsRUFBRTtZQUNkLFNBQVMsRUFBRSxx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QUFFLEVBQUU7UUFDUixXQUFXLEVBQUUsTUFBTTtRQUNuQixPQUFPLEVBQUUsSUFBSztRQUNkLElBQUksRUFBRSxTQUFTO1FBQ2YsSUFBSSxFQUFFLFNBQVM7UUFDZixjQUFjLEVBQUUsK0JBQWMsQ0FBQyxjQUFjO1FBQzdDLE9BQU87UUFDUCxRQUFRLEVBQUU7WUFDTixDQUFDO1lBQ0QsQ0FBQztTQUNKO1FBQ0QsT0FBTyxFQUFFLHFCQUFxQjtRQUM5QixRQUFRLEVBQUUsSUFBSztRQUNmLE9BQU8sRUFBRSxJQUFLO1FBQ2QsUUFBUSxFQUFFLGFBQWE7UUFDdkIsR0FBRztRQUNILFNBQVMsRUFBRSxLQUFLO1FBQ2hCLEtBQUssRUFBRSxTQUFTO1FBQ2hCLEdBQUcsRUFBRSxTQUFTO1FBQ2QsSUFBSSxFQUFFLEVBQUU7S0FFWCxDQUFDO0FBRU4sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SURvY0Fubm90YXRpb259IGZyb20gJy4vRG9jQW5ub3RhdGlvbic7XG5pbXBvcnQge0Fubm90YXRpb25UeXBlfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL21ldGFkYXRhL0Fubm90YXRpb25UeXBlJztcbmltcG9ydCB7RG9jQW5ub3RhdGlvbkluZGV4fSBmcm9tICcuL0RvY0Fubm90YXRpb25JbmRleCc7XG5pbXBvcnQge2Fzc2VydH0gZnJvbSAnY2hhaSc7XG5pbXBvcnQge2Fzc2VydEpTT059IGZyb20gJy4uL3Rlc3QvQXNzZXJ0aW9ucyc7XG5pbXBvcnQge1RleHRIaWdobGlnaHRzfSBmcm9tICcuLi9tZXRhZGF0YS9UZXh0SGlnaGxpZ2h0cyc7XG5pbXBvcnQge1Rlc3RpbmdUaW1lfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3Rlc3QvVGVzdGluZ1RpbWUnO1xuaW1wb3J0IHtPYmplY3RJRHN9IGZyb20gJy4uL3V0aWwvT2JqZWN0SURzJztcbmltcG9ydCB7UmVmfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy9tZXRhZGF0YS9SZWZzXCI7XG5cbmZ1bmN0aW9uIHRvRG9jQW5ub3RhdGlvbnMoZG9jQW5ub3RhdGlvbkluZGV4OiBEb2NBbm5vdGF0aW9uSW5kZXgpIHtcbiAgICByZXR1cm4gZG9jQW5ub3RhdGlvbkluZGV4LmdldERvY0Fubm90YXRpb25zU29ydGVkKCkubWFwKGN1cnJlbnQgPT4gY3VycmVudC5vYmopO1xufVxuXG5kZXNjcmliZSgnRG9jQW5ub3RhdGlvbkluZGV4JywgZnVuY3Rpb24oKSB7XG5cbiAgICBiZWZvcmVFYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICBUZXN0aW5nVGltZS5mcmVlemUoKTtcbiAgICB9KTtcblxuXG5cbiAgICBpdChcIkJhc2ljIHNvcnRpbmdcIiwgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgY29uc3QgYTAgPSBjcmVhdGVBbm5vdGF0aW9uKCcwMDAxJywgMSwgMCwgMCApO1xuICAgICAgICBjb25zdCBhMSA9IGNyZWF0ZUFubm90YXRpb24oJzAwMDInLCAxLCAwLCAwICk7XG4gICAgICAgIGNvbnN0IGEyID0gY3JlYXRlQW5ub3RhdGlvbignMDAwMycsIDEsIDAsIDAgKTtcblxuICAgICAgICBjb25zdCBkb2NBbm5vdGF0aW9uSW5kZXggPSBuZXcgRG9jQW5ub3RhdGlvbkluZGV4KCk7XG4gICAgICAgIGRvY0Fubm90YXRpb25JbmRleC5wdXQoYTAsIGExLCBhMik7XG5cbiAgICAgICAgLy8gY29uc3QgcmVidWlsdERvY0Fubm90YXRpb25JbmRleCA9IERvY0Fubm90YXRpb25JbmRleGVzLnJlYnVpbGQoZG9jQW5ub3RhdGlvbkluZGV4LCBhMik7XG5cbiAgICAgICAgY29uc3QgZXhwZWN0ZWQ6IGFueSA9IHtcbiAgICAgICAgICAgIFwiYW5ub3RhdGlvblR5cGVcIjogXCJURVhUX0hJR0hMSUdIVFwiLFxuICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXSxcbiAgICAgICAgICAgIFwiY3JlYXRlZFwiOiBcIjIwMDktMDYtMTVUMTM6NDU6MzBcIixcbiAgICAgICAgICAgIFwiaWRcIjogXCIwMDAxXCIsXG4gICAgICAgICAgICBcIm9pZFwiOiAwLFxuICAgICAgICAgICAgXCJvcmlnaW5hbFwiOiB7XG4gICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcInllbGxvd1wiLFxuICAgICAgICAgICAgICAgIFwiY3JlYXRlZFwiOiBcIjIwMTItMDMtMDJUMTE6Mzg6NDkuMzIxWlwiLFxuICAgICAgICAgICAgICAgIFwiZmxhc2hjYXJkc1wiOiB7fSxcbiAgICAgICAgICAgICAgICBcImd1aWRcIjogXCIxMnBOVXYxWTlTXCIsXG4gICAgICAgICAgICAgICAgXCJpZFwiOiBcIjEycE5VdjFZOVNcIixcbiAgICAgICAgICAgICAgICBcImltYWdlc1wiOiB7fSxcbiAgICAgICAgICAgICAgICBcImxhc3RVcGRhdGVkXCI6IFwiMjAxMi0wMy0wMlQxMTozODo0OS4zMjFaXCIsXG4gICAgICAgICAgICAgICAgXCJub3Rlc1wiOiB7fSxcbiAgICAgICAgICAgICAgICBcInF1ZXN0aW9uc1wiOiB7fSxcbiAgICAgICAgICAgICAgICBcInJlY3RzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCIwXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYm90dG9tXCI6IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGVmdFwiOiAxMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJpZ2h0XCI6IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidG9wXCI6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogMTAwXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwidGV4dFwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiVEVYVFwiOiBcImhlbGxvIHdvcmxkXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwidGV4dFNlbGVjdGlvbnNcIjoge1xuICAgICAgICAgICAgICAgICAgICBcIjBcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJyZWN0XCI6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCJoZWxsbyB3b3JsZFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJwYWdlTWV0YVwiOiBudWxsLFxuICAgICAgICAgICAgXCJkb2NNZXRhXCI6IG51bGwsXG4gICAgICAgICAgICBcInBhZ2VOdW1cIjogMSxcbiAgICAgICAgICAgIFwicG9zaXRpb25cIjoge1xuICAgICAgICAgICAgICAgIFwieFwiOiAwLFxuICAgICAgICAgICAgICAgIFwieVwiOiAwXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gY29uc3QgcmVzdWx0ID0gQXJyYXlzLmZpcnN0KGRvY0Fubm90YXRpb25JbmRleC5nZXREb2NBbm5vdGF0aW9ucygpKSE7XG5cbiAgICAgICAgY29uc3QgZG9jQW5ub3RhdGlvbnMgPSB0b0RvY0Fubm90YXRpb25zKGRvY0Fubm90YXRpb25JbmRleCk7XG5cbiAgICAgICAgLy8gYXNzZXJ0SlNPTihEaWN0aW9uYXJpZXMuc29ydGVkKHJlc3VsdCksIERpY3Rpb25hcmllcy5zb3J0ZWQoZXhwZWN0ZWQpKTtcbiAgICAgICAgYXNzZXJ0SlNPTihkb2NBbm5vdGF0aW9ucywgW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwib2lkXCI6IDAsXG4gICAgICAgICAgICAgICAgXCJpZFwiOiBcIjAwMDFcIixcbiAgICAgICAgICAgICAgICBcImd1aWRcIjogXCIwMDAxXCIsXG4gICAgICAgICAgICAgICAgXCJmaW5nZXJwcmludFwiOiBcIjEyMzRcIixcbiAgICAgICAgICAgICAgICBcImRvY0luZm9cIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcImFubm90YXRpb25UeXBlXCI6IFwiVEVYVF9ISUdITElHSFRcIixcbiAgICAgICAgICAgICAgICBcInBhZ2VOdW1cIjogMSxcbiAgICAgICAgICAgICAgICBcInBvc2l0aW9uXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ4XCI6IDAsXG4gICAgICAgICAgICAgICAgICAgIFwieVwiOiAwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcImNyZWF0ZWRcIjogXCIyMDA5LTA2LTE1VDEzOjQ1OjMwXCIsXG4gICAgICAgICAgICAgICAgXCJwYWdlTWV0YVwiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwiZG9jTWV0YVwiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwib3JpZ2luYWxcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwiMTJwTlV2MVk5U1wiLFxuICAgICAgICAgICAgICAgICAgICBcImd1aWRcIjogXCIxMnBOVXYxWTlTXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiY3JlYXRlZFwiOiBcIjIwMTItMDMtMDJUMTE6Mzg6NDkuMzIxWlwiLFxuICAgICAgICAgICAgICAgICAgICBcImxhc3RVcGRhdGVkXCI6IFwiMjAxMi0wMy0wMlQxMTozODo0OS4zMjFaXCIsXG4gICAgICAgICAgICAgICAgICAgIFwicmVjdHNcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCIwXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRvcFwiOiAxMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsZWZ0XCI6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJpZ2h0XCI6IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJvdHRvbVwiOiAyMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiAxMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoZWlnaHRcIjogMTAwXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFwidGV4dFNlbGVjdGlvbnNcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCIwXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCJoZWxsbyB3b3JsZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmVjdFwiOiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIlRFWFRcIjogXCJoZWxsbyB3b3JsZFwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFwiaW1hZ2VzXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICBcIm5vdGVzXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICBcInF1ZXN0aW9uc1wiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgXCJmbGFzaGNhcmRzXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwieWVsbG93XCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiaW1tdXRhYmxlXCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwidGFnc1wiOiB7fVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIm9pZFwiOiAxLFxuICAgICAgICAgICAgICAgIFwiaWRcIjogXCIwMDAyXCIsXG4gICAgICAgICAgICAgICAgXCJndWlkXCI6IFwiMDAwMlwiLFxuICAgICAgICAgICAgICAgIFwiZmluZ2VycHJpbnRcIjogXCIxMjM0XCIsXG4gICAgICAgICAgICAgICAgXCJkb2NJbmZvXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJhbm5vdGF0aW9uVHlwZVwiOiBcIlRFWFRfSElHSExJR0hUXCIsXG4gICAgICAgICAgICAgICAgXCJwYWdlTnVtXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJwb3NpdGlvblwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwieFwiOiAwLFxuICAgICAgICAgICAgICAgICAgICBcInlcIjogMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJjcmVhdGVkXCI6IFwiMjAwOS0wNi0xNVQxMzo0NTozMFwiLFxuICAgICAgICAgICAgICAgIFwicGFnZU1ldGFcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcImRvY01ldGFcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcIm9yaWdpbmFsXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcIjEycE5VdjFZOVNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJndWlkXCI6IFwiMTJwTlV2MVk5U1wiLFxuICAgICAgICAgICAgICAgICAgICBcImNyZWF0ZWRcIjogXCIyMDEyLTAzLTAyVDExOjM4OjQ5LjMyMVpcIixcbiAgICAgICAgICAgICAgICAgICAgXCJsYXN0VXBkYXRlZFwiOiBcIjIwMTItMDMtMDJUMTE6Mzg6NDkuMzIxWlwiLFxuICAgICAgICAgICAgICAgICAgICBcInJlY3RzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiMFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b3BcIjogMTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGVmdFwiOiAxMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyaWdodFwiOiAyMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJib3R0b21cIjogMjAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogMTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IDEwMFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcInRleHRTZWxlY3Rpb25zXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiMFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiaGVsbG8gd29ybGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJlY3RcIjogbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcInRleHRcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJURVhUXCI6IFwiaGVsbG8gd29ybGRcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcImltYWdlc1wiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgXCJub3Rlc1wiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgXCJxdWVzdGlvbnNcIjoge30sXG4gICAgICAgICAgICAgICAgICAgIFwiZmxhc2hjYXJkc1wiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcInllbGxvd1wiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcImltbXV0YWJsZVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcInRhZ3NcIjoge31cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJvaWRcIjogMixcbiAgICAgICAgICAgICAgICBcImlkXCI6IFwiMDAwM1wiLFxuICAgICAgICAgICAgICAgIFwiZ3VpZFwiOiBcIjAwMDNcIixcbiAgICAgICAgICAgICAgICBcImZpbmdlcnByaW50XCI6IFwiMTIzNFwiLFxuICAgICAgICAgICAgICAgIFwiZG9jSW5mb1wiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwiYW5ub3RhdGlvblR5cGVcIjogXCJURVhUX0hJR0hMSUdIVFwiLFxuICAgICAgICAgICAgICAgIFwicGFnZU51bVwiOiAxLFxuICAgICAgICAgICAgICAgIFwicG9zaXRpb25cIjoge1xuICAgICAgICAgICAgICAgICAgICBcInhcIjogMCxcbiAgICAgICAgICAgICAgICAgICAgXCJ5XCI6IDBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiY3JlYXRlZFwiOiBcIjIwMDktMDYtMTVUMTM6NDU6MzBcIixcbiAgICAgICAgICAgICAgICBcInBhZ2VNZXRhXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJkb2NNZXRhXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJvcmlnaW5hbFwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCIxMnBOVXYxWTlTXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZ3VpZFwiOiBcIjEycE5VdjFZOVNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJjcmVhdGVkXCI6IFwiMjAxMi0wMy0wMlQxMTozODo0OS4zMjFaXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibGFzdFVwZGF0ZWRcIjogXCIyMDEyLTAzLTAyVDExOjM4OjQ5LjMyMVpcIixcbiAgICAgICAgICAgICAgICAgICAgXCJyZWN0c1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIjBcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidG9wXCI6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxlZnRcIjogMTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmlnaHRcIjogMjAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYm90dG9tXCI6IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhlaWdodFwiOiAxMDBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0U2VsZWN0aW9uc1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIjBcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcImhlbGxvIHdvcmxkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyZWN0XCI6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiVEVYVFwiOiBcImhlbGxvIHdvcmxkXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCJpbWFnZXNcIjoge30sXG4gICAgICAgICAgICAgICAgICAgIFwibm90ZXNcIjoge30sXG4gICAgICAgICAgICAgICAgICAgIFwicXVlc3Rpb25zXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgICBcImZsYXNoY2FyZHNcIjoge30sXG4gICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCJ5ZWxsb3dcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJpbW11dGFibGVcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJ0YWdzXCI6IHt9XG4gICAgICAgICAgICB9XG4gICAgICAgIF0pO1xuXG4gICAgfSk7XG5cbiAgICBpdChcImNvbXBsZXggc29ydGluZ1wiLCBmdW5jdGlvbigpIHtcblxuICAgICAgICBjb25zdCBhMCA9IGNyZWF0ZUFubm90YXRpb24oJzAwMDEnLCAzLCAwLCAxMDAgKTtcbiAgICAgICAgY29uc3QgYTEgPSBjcmVhdGVBbm5vdGF0aW9uKCcwMDAyJywgMiwgMTAwLCAwICk7XG4gICAgICAgIGNvbnN0IGEyID0gY3JlYXRlQW5ub3RhdGlvbignMDAwMycsIDEsIDI1LCA1MCk7XG5cbiAgICAgICAgY29uc3QgZG9jQW5ub3RhdGlvbkluZGV4ID0gbmV3IERvY0Fubm90YXRpb25JbmRleCgpO1xuICAgICAgICBkb2NBbm5vdGF0aW9uSW5kZXgucHV0KGEwLCBhMSwgYTIpO1xuXG4gICAgICAgIGNvbnN0IGV4cGVjdGVkOiBhbnkgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJvaWRcIjogNSxcbiAgICAgICAgICAgICAgICBcImlkXCI6IFwiMDAwM1wiLFxuICAgICAgICAgICAgICAgIFwiZ3VpZFwiOiBcIjAwMDNcIixcbiAgICAgICAgICAgICAgICBcImZpbmdlcnByaW50XCI6IFwiMTIzNFwiLFxuICAgICAgICAgICAgICAgIFwiZG9jSW5mb1wiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwiYW5ub3RhdGlvblR5cGVcIjogXCJURVhUX0hJR0hMSUdIVFwiLFxuICAgICAgICAgICAgICAgIFwicGFnZU51bVwiOiAxLFxuICAgICAgICAgICAgICAgIFwicG9zaXRpb25cIjoge1xuICAgICAgICAgICAgICAgICAgICBcInhcIjogMjUsXG4gICAgICAgICAgICAgICAgICAgIFwieVwiOiA1MFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJjcmVhdGVkXCI6IFwiMjAwOS0wNi0xNVQxMzo0NTozMFwiLFxuICAgICAgICAgICAgICAgIFwicGFnZU1ldGFcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcImRvY01ldGFcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcIm9yaWdpbmFsXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcIjEycE5VdjFZOVNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJndWlkXCI6IFwiMTJwTlV2MVk5U1wiLFxuICAgICAgICAgICAgICAgICAgICBcImNyZWF0ZWRcIjogXCIyMDEyLTAzLTAyVDExOjM4OjQ5LjMyMVpcIixcbiAgICAgICAgICAgICAgICAgICAgXCJsYXN0VXBkYXRlZFwiOiBcIjIwMTItMDMtMDJUMTE6Mzg6NDkuMzIxWlwiLFxuICAgICAgICAgICAgICAgICAgICBcInJlY3RzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiMFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b3BcIjogMTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGVmdFwiOiAxMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyaWdodFwiOiAyMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJib3R0b21cIjogMjAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogMTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IDEwMFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcInRleHRTZWxlY3Rpb25zXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiMFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiaGVsbG8gd29ybGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJlY3RcIjogbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcInRleHRcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJURVhUXCI6IFwiaGVsbG8gd29ybGRcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcImltYWdlc1wiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgXCJub3Rlc1wiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgXCJxdWVzdGlvbnNcIjoge30sXG4gICAgICAgICAgICAgICAgICAgIFwiZmxhc2hjYXJkc1wiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcInllbGxvd1wiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcImltbXV0YWJsZVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcInRhZ3NcIjoge31cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJvaWRcIjogNCxcbiAgICAgICAgICAgICAgICBcImlkXCI6IFwiMDAwMlwiLFxuICAgICAgICAgICAgICAgIFwiZ3VpZFwiOiBcIjAwMDJcIixcbiAgICAgICAgICAgICAgICBcImZpbmdlcnByaW50XCI6IFwiMTIzNFwiLFxuICAgICAgICAgICAgICAgIFwiZG9jSW5mb1wiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwiYW5ub3RhdGlvblR5cGVcIjogXCJURVhUX0hJR0hMSUdIVFwiLFxuICAgICAgICAgICAgICAgIFwicGFnZU51bVwiOiAyLFxuICAgICAgICAgICAgICAgIFwicG9zaXRpb25cIjoge1xuICAgICAgICAgICAgICAgICAgICBcInhcIjogMTAwLFxuICAgICAgICAgICAgICAgICAgICBcInlcIjogMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJjcmVhdGVkXCI6IFwiMjAwOS0wNi0xNVQxMzo0NTozMFwiLFxuICAgICAgICAgICAgICAgIFwicGFnZU1ldGFcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcImRvY01ldGFcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcIm9yaWdpbmFsXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcIjEycE5VdjFZOVNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJndWlkXCI6IFwiMTJwTlV2MVk5U1wiLFxuICAgICAgICAgICAgICAgICAgICBcImNyZWF0ZWRcIjogXCIyMDEyLTAzLTAyVDExOjM4OjQ5LjMyMVpcIixcbiAgICAgICAgICAgICAgICAgICAgXCJsYXN0VXBkYXRlZFwiOiBcIjIwMTItMDMtMDJUMTE6Mzg6NDkuMzIxWlwiLFxuICAgICAgICAgICAgICAgICAgICBcInJlY3RzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiMFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b3BcIjogMTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGVmdFwiOiAxMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyaWdodFwiOiAyMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJib3R0b21cIjogMjAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogMTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IDEwMFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcInRleHRTZWxlY3Rpb25zXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiMFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiaGVsbG8gd29ybGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJlY3RcIjogbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcInRleHRcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJURVhUXCI6IFwiaGVsbG8gd29ybGRcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcImltYWdlc1wiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgXCJub3Rlc1wiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgXCJxdWVzdGlvbnNcIjoge30sXG4gICAgICAgICAgICAgICAgICAgIFwiZmxhc2hjYXJkc1wiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcInllbGxvd1wiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcImltbXV0YWJsZVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcInRhZ3NcIjoge31cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJvaWRcIjogMyxcbiAgICAgICAgICAgICAgICBcImlkXCI6IFwiMDAwMVwiLFxuICAgICAgICAgICAgICAgIFwiZ3VpZFwiOiBcIjAwMDFcIixcbiAgICAgICAgICAgICAgICBcImZpbmdlcnByaW50XCI6IFwiMTIzNFwiLFxuICAgICAgICAgICAgICAgIFwiZG9jSW5mb1wiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwiYW5ub3RhdGlvblR5cGVcIjogXCJURVhUX0hJR0hMSUdIVFwiLFxuICAgICAgICAgICAgICAgIFwicGFnZU51bVwiOiAzLFxuICAgICAgICAgICAgICAgIFwicG9zaXRpb25cIjoge1xuICAgICAgICAgICAgICAgICAgICBcInhcIjogMCxcbiAgICAgICAgICAgICAgICAgICAgXCJ5XCI6IDEwMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJjcmVhdGVkXCI6IFwiMjAwOS0wNi0xNVQxMzo0NTozMFwiLFxuICAgICAgICAgICAgICAgIFwicGFnZU1ldGFcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcImRvY01ldGFcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcIm9yaWdpbmFsXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcIjEycE5VdjFZOVNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJndWlkXCI6IFwiMTJwTlV2MVk5U1wiLFxuICAgICAgICAgICAgICAgICAgICBcImNyZWF0ZWRcIjogXCIyMDEyLTAzLTAyVDExOjM4OjQ5LjMyMVpcIixcbiAgICAgICAgICAgICAgICAgICAgXCJsYXN0VXBkYXRlZFwiOiBcIjIwMTItMDMtMDJUMTE6Mzg6NDkuMzIxWlwiLFxuICAgICAgICAgICAgICAgICAgICBcInJlY3RzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiMFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b3BcIjogMTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGVmdFwiOiAxMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyaWdodFwiOiAyMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJib3R0b21cIjogMjAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogMTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IDEwMFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcInRleHRTZWxlY3Rpb25zXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiMFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiaGVsbG8gd29ybGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJlY3RcIjogbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcInRleHRcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJURVhUXCI6IFwiaGVsbG8gd29ybGRcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcImltYWdlc1wiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgXCJub3Rlc1wiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgXCJxdWVzdGlvbnNcIjoge30sXG4gICAgICAgICAgICAgICAgICAgIFwiZmxhc2hjYXJkc1wiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcInllbGxvd1wiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcImltbXV0YWJsZVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcInRhZ3NcIjoge31cbiAgICAgICAgICAgIH1cbiAgICAgICAgXTtcblxuICAgICAgICBjb25zdCBkb2NBbm5vdGF0aW9ucyA9IHRvRG9jQW5ub3RhdGlvbnMoZG9jQW5ub3RhdGlvbkluZGV4KTtcblxuICAgICAgICBhc3NlcnRKU09OKGRvY0Fubm90YXRpb25zLCBleHBlY3RlZCwgXCJtYWluIG91dHB1dCB3cm9uZyAoMSlcIik7XG5cbiAgICB9KTtcblxuICAgIGl0KFwiUGFyZW50IGFuZCBjaGlsZCBhbmQgZGVsZXRlIGNoaWxkXCIsIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGNvbnN0IGEwID0gY3JlYXRlQW5ub3RhdGlvbigndGV4dGFyZWExJywgMSwgMCwgMCApO1xuICAgICAgICBjb25zdCBhMSA9IGNyZWF0ZUFubm90YXRpb24oJ2NvbW1lbnQxJywgMSwgMCwgMCwgJ3RleHQtYXJlYTp0ZXh0YXJlYTEnKTtcblxuICAgICAgICBjb25zdCBkb2NBbm5vdGF0aW9uSW5kZXggPSBuZXcgRG9jQW5ub3RhdGlvbkluZGV4KCk7XG4gICAgICAgIGRvY0Fubm90YXRpb25JbmRleC5wdXQoYTAsIGExKTtcblxuICAgICAgICBhc3NlcnRKU09OKGRvY0Fubm90YXRpb25JbmRleC5nZXREb2NBbm5vdGF0aW9ucygpLm1hcChjdXJyZW50ID0+IGN1cnJlbnQuaWQpLCBbXG4gICAgICAgICAgICBcInRleHRhcmVhMVwiLFxuICAgICAgICBdLCBcInRleHRhcmVhMSBpcyB3cm9uZ1wiKTtcblxuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IGRvY0Fubm90YXRpb25JbmRleC5nZXQoJ3RleHRhcmVhMScpIS5nZXRDaGlsZHJlbigpO1xuXG4gICAgICAgIGFzc2VydC5pc0RlZmluZWQoY2hpbGRyZW4pO1xuICAgICAgICBhc3NlcnQuZXF1YWwoY2hpbGRyZW4ubGVuZ3RoLCAxLCBcImNoaWxkcmVuIG5vdCB2YWxpZFwiKTtcblxuICAgICAgICBhc3NlcnQuZXF1YWwoY2hpbGRyZW5bMF0uaWQsIFwiY29tbWVudDFcIiwgXCJjb21tZW50MSBub3QgdmFsaWRcIik7XG5cbiAgICAgICAgZG9jQW5ub3RhdGlvbkluZGV4LmRlbGV0ZShcImNvbW1lbnQxXCIpO1xuXG4gICAgICAgIGFzc2VydC5pc0RlZmluZWQoZG9jQW5ub3RhdGlvbkluZGV4LmdldCgndGV4dGFyZWExJykhLmdldENoaWxkcmVuKCkpO1xuXG4gICAgICAgIGFzc2VydEpTT04oZG9jQW5ub3RhdGlvbkluZGV4LmdldCgndGV4dGFyZWExJykhLmdldENoaWxkcmVuKCkubGVuZ3RoLCAwKTtcblxuICAgIH0pO1xuXG5cbiAgICBpdChcIlBhcmVudCBhbmQgY2hpbGQgYW5kIGRlbGV0ZSBwYXJlbnRcIiwgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgY29uc3QgYTAgPSBjcmVhdGVBbm5vdGF0aW9uKCd0ZXh0LWFyZWE6MScsIDEsIDAsIDAgKTtcbiAgICAgICAgY29uc3QgYTEgPSBjcmVhdGVBbm5vdGF0aW9uKCdjb21tZW50OjEnLCAxLCAwLCAwLCAndGV4dC1hcmVhOjEnKTtcblxuICAgICAgICBjb25zdCBkb2NBbm5vdGF0aW9uSW5kZXggPSBuZXcgRG9jQW5ub3RhdGlvbkluZGV4KCk7XG4gICAgICAgIGRvY0Fubm90YXRpb25JbmRleC5wdXQoYTAsIGExKTtcblxuICAgICAgICBkb2NBbm5vdGF0aW9uSW5kZXguZGVsZXRlKFwidGV4dC1hcmVhOjFcIik7XG5cbiAgICAgICAgYXNzZXJ0LmlzVW5kZWZpbmVkKGRvY0Fubm90YXRpb25JbmRleC5nZXQoJ3RleHQtYXJlYToxJyksIFwidGV4dC1hcmVhOjEgd2FzIG5vdCB1bmRlZmluZWRcIik7XG5cbiAgICB9KTtcbiAgICAvL1xuICAgIC8vIGl0KFwidGVzdFNjb3JlXCIsIGZ1bmN0aW9uKCkge1xuICAgIC8vXG4gICAgLy8gICAgIGNvbnN0IGQwOiBEb2NBbm5vdGF0aW9uID0gPERvY0Fubm90YXRpb24+IDxhbnk+IEJST0tFTlswXTtcbiAgICAvLyAgICAgY29uc3QgZDE6IERvY0Fubm90YXRpb24gPSA8RG9jQW5ub3RhdGlvbj4gPGFueT4gQlJPS0VOWzFdO1xuICAgIC8vICAgICAvLyBjb25zdCBkMTogRG9jQW5ub3RhdGlvbiA9IEJST0tFTlsxXTtcbiAgICAvL1xuICAgIC8vICAgICBjb25zdCBkdW1wID0gKGRvY0Fubm90YXRpb246IERvY0Fubm90YXRpb24pID0+IHtcbiAgICAvL1xuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCIgIGFubm90YXRpb25UeXBlOiBcIiwgZG9jQW5ub3RhdGlvbi5hbm5vdGF0aW9uVHlwZSk7XG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcIiAgcG9zaXRpb246IFwiLCBkb2NBbm5vdGF0aW9uLnBvc2l0aW9uKTtcbiAgICAvL1xuICAgIC8vICAgICB9O1xuICAgIC8vXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwiZDAgOiBcIik7XG4gICAgLy8gICAgIGR1bXAoZDApO1xuICAgIC8vXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwiZDEgOiBcIik7XG4gICAgLy8gICAgIGR1bXAoZDEpO1xuICAgIC8vXG4gICAgLy8gICAgIERvY0Fubm90YXRpb25JbmRleGVzLmNvbXB1dGVTY29yZShkMCk7XG4gICAgLy8gICAgIERvY0Fubm90YXRpb25JbmRleGVzLmNvbXB1dGVTY29yZShkMSk7XG4gICAgLy9cbiAgICAvL1xuICAgIC8vIH0pO1xuXG59KTtcblxuZnVuY3Rpb24gY3JlYXRlQW5ub3RhdGlvbihpZDogc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlTnVtOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHg6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeTogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByZWY/OiBSZWYpOiBJRG9jQW5ub3RhdGlvbiB7XG5cbiAgICBjb25zdCB0ZXh0SGlnaGxpZ2h0ID0gVGV4dEhpZ2hsaWdodHMuY3JlYXRlTW9ja1RleHRIaWdobGlnaHQoKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIG9pZDogT2JqZWN0SURzLmNyZWF0ZSgpLFxuICAgICAgICBpZCxcbiAgICAgICAgZ3VpZDogaWQsXG4gICAgICAgIGZpbmdlcnByaW50OiAnMTIzNCcsXG4gICAgICAgIGRvY0luZm86IG51bGwhLFxuICAgICAgICB0ZXh0OiB1bmRlZmluZWQsXG4gICAgICAgIGh0bWw6IHVuZGVmaW5lZCxcbiAgICAgICAgYW5ub3RhdGlvblR5cGU6IEFubm90YXRpb25UeXBlLlRFWFRfSElHSExJR0hULFxuICAgICAgICBwYWdlTnVtLFxuICAgICAgICBwb3NpdGlvbjoge1xuICAgICAgICAgICAgeCxcbiAgICAgICAgICAgIHlcbiAgICAgICAgfSxcbiAgICAgICAgY3JlYXRlZDogJzIwMDktMDYtMTVUMTM6NDU6MzAnLFxuICAgICAgICBwYWdlTWV0YTogbnVsbCEsXG4gICAgICAgIGRvY01ldGE6IG51bGwhLFxuICAgICAgICBvcmlnaW5hbDogdGV4dEhpZ2hsaWdodCxcbiAgICAgICAgcmVmLFxuICAgICAgICBpbW11dGFibGU6IGZhbHNlLFxuICAgICAgICBjb2xvcjogdW5kZWZpbmVkLFxuICAgICAgICBpbWc6IHVuZGVmaW5lZCxcbiAgICAgICAgdGFnczoge31cblxuICAgIH07XG5cbn1cbiJdfQ==