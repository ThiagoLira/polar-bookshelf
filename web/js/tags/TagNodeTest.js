"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Assertions_1 = require("../test/Assertions");
const Tags_1 = require("polar-shared/src/tags/Tags");
const TagPaths_1 = require("./TagPaths");
const TagNodes_1 = require("./TagNodes");
describe('TagNode', function () {
    it("split", function () {
        Assertions_1.assertJSON(TagPaths_1.TagPaths.createPathEntries("/foo"), [
            {
                "path": "/",
                "basename": ""
            },
            {
                "path": "/foo",
                "basename": "foo",
                "parent": {
                    "path": "/",
                    "basename": ""
                }
            }
        ]);
        Assertions_1.assertJSON(TagPaths_1.TagPaths.createPathEntries("/foo/bar"), [
            {
                "path": "/",
                "basename": ""
            },
            {
                "path": "/foo",
                "basename": "foo",
                "parent": {
                    "path": "/",
                    "basename": ""
                }
            },
            {
                "path": "/foo/bar",
                "basename": "bar",
                "parent": {
                    "path": "/foo",
                    "basename": "foo"
                }
            }
        ]);
        Assertions_1.assertJSON(TagPaths_1.TagPaths.createPathEntries("/Hello World/The Dog"), [
            {
                "path": "/",
                "basename": ""
            },
            {
                "path": "/Hello World",
                "basename": "Hello World",
                "parent": {
                    "path": "/",
                    "basename": ""
                }
            },
            {
                "path": "/Hello World/The Dog",
                "basename": "The Dog",
                "parent": {
                    "path": "/Hello World",
                    "basename": "Hello World"
                }
            }
        ]);
    });
    describe("create", function () {
        it("basic", function () {
            const tags = [
                '/',
                '/foo',
                '/foo/bar'
            ].map(current => Tags_1.Tags.create(current))
                .map(current => {
                const count = 1;
                const members = ['0101'];
                return Object.assign(Object.assign({}, current), { count, members });
            });
            Assertions_1.assertJSON(TagNodes_1.TagNodes.createFoldersRoot({ tags, type: 'folder' }), {
                "children": [
                    {
                        "children": [
                            {
                                "children": [],
                                "count": 1,
                                "id": "/foo/bar",
                                "name": "bar",
                                "path": "/foo/bar",
                                "value": {
                                    "count": 1,
                                    "id": "/foo/bar",
                                    "label": "/foo/bar",
                                    "members": [
                                        "0101"
                                    ]
                                }
                            }
                        ],
                        "count": 1,
                        "id": "/foo",
                        "name": "foo",
                        "path": "/foo",
                        "value": {
                            "count": 1,
                            "id": "/foo",
                            "label": "/foo",
                            "members": [
                                "0101"
                            ]
                        }
                    }
                ],
                "count": 1,
                "id": "/",
                "name": "/",
                "path": "/",
                "value": {
                    "count": 1,
                    "id": "/",
                    "label": "/",
                    "members": [
                        "0101"
                    ]
                }
            });
        });
        it("broken id on parent folder", function () {
            const tags = [
                '/career/compsci',
            ].map(current => Tags_1.Tags.create(current))
                .map(current => {
                const count = 1;
                const members = ['0101'];
                return Object.assign(Object.assign({}, current), { count, members });
            });
            Assertions_1.assertJSON(TagNodes_1.TagNodes.createFoldersRoot({ tags, type: 'folder' }), {
                "children": [
                    {
                        "children": [
                            {
                                "children": [],
                                "count": 1,
                                "id": "/career/compsci",
                                "name": "compsci",
                                "path": "/career/compsci",
                                "value": {
                                    "count": 1,
                                    "id": "/career/compsci",
                                    "label": "/career/compsci",
                                    "members": [
                                        "0101"
                                    ]
                                }
                            }
                        ],
                        "count": 0,
                        "id": "/career",
                        "name": "career",
                        "path": "/career",
                        "value": {
                            "count": 0,
                            "id": "/career",
                            "label": "/career",
                            "members": []
                        }
                    }
                ],
                "count": 1,
                "id": "/",
                "name": "/",
                "path": "/",
                "value": {
                    "count": 1,
                    "id": "/",
                    "label": "/",
                    "members": [
                        "0101"
                    ]
                }
            });
        });
        it("empty", function () {
            Assertions_1.assertJSON(TagNodes_1.TagNodes.createFoldersRoot({ tags: [], type: 'folder' }), {
                "children": [],
                "count": 0,
                "id": "/",
                "name": "/",
                "path": "/",
                "value": {
                    "count": 0,
                    "id": "/",
                    "label": "/",
                    "members": []
                }
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFnTm9kZVRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJUYWdOb2RlVGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1EQUE4QztBQUM5QyxxREFBZ0Q7QUFDaEQseUNBQW9DO0FBQ3BDLHlDQUFvQztBQUVwQyxRQUFRLENBQUMsU0FBUyxFQUFFO0lBRWhCLEVBQUUsQ0FBQyxPQUFPLEVBQUU7UUFFUix1QkFBVSxDQUFDLG1CQUFRLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDM0M7Z0JBQ0ksTUFBTSxFQUFFLEdBQUc7Z0JBQ1gsVUFBVSxFQUFFLEVBQUU7YUFDakI7WUFDRDtnQkFDSSxNQUFNLEVBQUUsTUFBTTtnQkFDZCxVQUFVLEVBQUUsS0FBSztnQkFDakIsUUFBUSxFQUFFO29CQUNOLE1BQU0sRUFBRSxHQUFHO29CQUNYLFVBQVUsRUFBRSxFQUFFO2lCQUNqQjthQUNKO1NBQ0osQ0FBQyxDQUFDO1FBRUgsdUJBQVUsQ0FBQyxtQkFBUSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQy9DO2dCQUNJLE1BQU0sRUFBRSxHQUFHO2dCQUNYLFVBQVUsRUFBRSxFQUFFO2FBQ2pCO1lBQ0Q7Z0JBQ0ksTUFBTSxFQUFFLE1BQU07Z0JBQ2QsVUFBVSxFQUFFLEtBQUs7Z0JBQ2pCLFFBQVEsRUFBRTtvQkFDTixNQUFNLEVBQUUsR0FBRztvQkFDWCxVQUFVLEVBQUUsRUFBRTtpQkFDakI7YUFDSjtZQUNEO2dCQUNJLE1BQU0sRUFBRSxVQUFVO2dCQUNsQixVQUFVLEVBQUUsS0FBSztnQkFDakIsUUFBUSxFQUFFO29CQUNOLE1BQU0sRUFBRSxNQUFNO29CQUNkLFVBQVUsRUFBRSxLQUFLO2lCQUNwQjthQUNKO1NBQ0osQ0FBQyxDQUFDO1FBRUgsdUJBQVUsQ0FBQyxtQkFBUSxDQUFDLGlCQUFpQixDQUFDLHNCQUFzQixDQUFDLEVBQUU7WUFDM0Q7Z0JBQ0ksTUFBTSxFQUFFLEdBQUc7Z0JBQ1gs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QUMsRUFBRTtnQkFDL0QsVUFBVSxFQUFFLEVBQUU7Z0JBQ2QsT0FBTyxFQUFFLENBQUM7Z0JBQ1YsSUFBSSxFQUFFLEdBQUc7Z0JBQ1QsTUFBTSxFQUFFLEdBQUc7Z0JBQ1gsTUFBTSxFQUFFLEdBQUc7Z0JBQ1gsT0FBTyxFQUFFO29CQUNMLE9BQU8sRUFBRSxDQUFDO29CQUNWLElBQUksRUFBRSxHQUFHO29CQUNULE9BQU8sRUFBRSxHQUFHO29CQUNaLFNBQVMsRUFBRSxFQUFFO2lCQUNoQjthQUNKLENBQUMsQ0FBQztRQUVQLENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQyxDQUFDLENBQUM7QUFFUCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YXNzZXJ0SlNPTn0gZnJvbSAnLi4vdGVzdC9Bc3NlcnRpb25zJztcbmltcG9ydCB7VGFnc30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy90YWdzL1RhZ3MnO1xuaW1wb3J0IHtUYWdQYXRoc30gZnJvbSAnLi9UYWdQYXRocyc7XG5pbXBvcnQge1RhZ05vZGVzfSBmcm9tIFwiLi9UYWdOb2Rlc1wiO1xuXG5kZXNjcmliZSgnVGFnTm9kZScsIGZ1bmN0aW9uKCkge1xuXG4gICAgaXQoXCJzcGxpdFwiLCBmdW5jdGlvbigpIHtcblxuICAgICAgICBhc3NlcnRKU09OKFRhZ1BhdGhzLmNyZWF0ZVBhdGhFbnRyaWVzKFwiL2Zvb1wiKSwgW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicGF0aFwiOiBcIi9cIixcbiAgICAgICAgICAgICAgICBcImJhc2VuYW1lXCI6IFwiXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJwYXRoXCI6IFwiL2Zvb1wiLFxuICAgICAgICAgICAgICAgIFwiYmFzZW5hbWVcIjogXCJmb29cIixcbiAgICAgICAgICAgICAgICBcInBhcmVudFwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwicGF0aFwiOiBcIi9cIixcbiAgICAgICAgICAgICAgICAgICAgXCJiYXNlbmFtZVwiOiBcIlwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBdKTtcblxuICAgICAgICBhc3NlcnRKU09OKFRhZ1BhdGhzLmNyZWF0ZVBhdGhFbnRyaWVzKFwiL2Zvby9iYXJcIiksIFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInBhdGhcIjogXCIvXCIsXG4gICAgICAgICAgICAgICAgXCJiYXNlbmFtZVwiOiBcIlwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicGF0aFwiOiBcIi9mb29cIixcbiAgICAgICAgICAgICAgICBcImJhc2VuYW1lXCI6IFwiZm9vXCIsXG4gICAgICAgICAgICAgICAgXCJwYXJlbnRcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInBhdGhcIjogXCIvXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiYmFzZW5hbWVcIjogXCJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJwYXRoXCI6IFwiL2Zvby9iYXJcIixcbiAgICAgICAgICAgICAgICBcImJhc2VuYW1lXCI6IFwiYmFyXCIsXG4gICAgICAgICAgICAgICAgXCJwYXJlbnRcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInBhdGhcIjogXCIvZm9vXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiYmFzZW5hbWVcIjogXCJmb29cIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXSk7XG5cbiAgICAgICAgYXNzZXJ0SlNPTihUYWdQYXRocy5jcmVhdGVQYXRoRW50cmllcyhcIi9IZWxsbyBXb3JsZC9UaGUgRG9nXCIpLCBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJwYXRoXCI6IFwiL1wiLFxuICAgICAgICAgICAgICAgIFwiYmFzZW5hbWVcIjogXCJcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInBhdGhcIjogXCIvSGVsbG8gV29ybGRcIixcbiAgICAgICAgICAgICAgICBcImJhc2VuYW1lXCI6IFwiSGVsbG8gV29ybGRcIixcbiAgICAgICAgICAgICAgICBcInBhcmVudFwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwicGF0aFwiOiBcIi9cIixcbiAgICAgICAgICAgICAgICAgICAgXCJiYXNlbmFtZVwiOiBcIlwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInBhdGhcIjogXCIvSGVsbG8gV29ybGQvVGhlIERvZ1wiLFxuICAgICAgICAgICAgICAgIFwiYmFzZW5hbWVcIjogXCJUaGUgRG9nXCIsXG4gICAgICAgICAgICAgICAgXCJwYXJlbnRcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInBhdGhcIjogXCIvSGVsbG8gV29ybGRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJiYXNlbmFtZVwiOiBcIkhlbGxvIFdvcmxkXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIF0pO1xuXG4gICAgfSk7XG5cbiAgICBkZXNjcmliZShcImNyZWF0ZVwiLCBmdW5jdGlvbigpIHtcblxuICAgICAgICBpdChcImJhc2ljXCIsIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICBjb25zdCB0YWdzID0gW1xuICAgICAgICAgICAgICAgICcvJyxcbiAgICAgICAgICAgICAgICAnL2ZvbycsXG4gICAgICAgICAgICAgICAgJy9mb28vYmFyJ1xuICAgICAgICAgICAgXS5tYXAoY3VycmVudCA9PiBUYWdzLmNyZWF0ZShjdXJyZW50KSlcbiAgICAgICAgICAgICAubWFwKGN1cnJlbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb3VudCA9IDE7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1lbWJlcnMgPSBbJzAxMDEnXTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsuLi5jdXJyZW50LCBjb3VudCwgbWVtYmVyc307XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGFzc2VydEpTT04oVGFnTm9kZXMuY3JlYXRlRm9sZGVyc1Jvb3Qoe3RhZ3MsIHR5cGU6ICdmb2xkZXInfSksIHtcbiAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvdW50XCI6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCIvZm9vL2JhclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJiYXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwYXRoXCI6IFwiL2Zvby9iYXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvdW50XCI6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwiL2Zvby9iYXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCIvZm9vL2JhclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtZW1iZXJzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjAxMDFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY291bnRcIjogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCIvZm9vXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJmb29cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicGF0aFwiOiBcIi9mb29cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY291bnRcIjogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwiL2Zvb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCIvZm9vXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtZW1iZXJzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIwMTAxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiY291bnRcIjogMSxcbiAgICAgICAgICAgICAgICBcImlkXCI6IFwiL1wiLFxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIi9cIixcbiAgICAgICAgICAgICAgICBcInBhdGhcIjogXCIvXCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiY291bnRcIjogMSxcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcIi9cIixcbiAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIi9cIixcbiAgICAgICAgICAgICAgICAgICAgXCJtZW1iZXJzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiMDEwMVwiXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9KTtcblxuXG4gICAgICAgIGl0KFwiYnJva2VuIGlkIG9uIHBhcmVudCBmb2xkZXJcIiwgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IHRhZ3MgPSBbXG4gICAgICAgICAgICAgICAgJy9jYXJlZXIvY29tcHNjaScsXG4gICAgICAgICAgICBdLm1hcChjdXJyZW50ID0+IFRhZ3MuY3JlYXRlKGN1cnJlbnQpKVxuICAgICAgICAgICAgICAgIC5tYXAoY3VycmVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvdW50ID0gMTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWVtYmVycyA9IFsnMDEwMSddO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gey4uLmN1cnJlbnQsIGNvdW50LCBtZW1iZXJzfTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgYXNzZXJ0SlNPTihUYWdOb2Rlcy5jcmVhdGVGb2xkZXJzUm9vdCh7dGFncywgdHlwZTogJ2ZvbGRlcid9KSwge1xuICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY291bnRcIjogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcIi9jYXJlZXIvY29tcHNjaVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJjb21wc2NpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGF0aFwiOiBcIi9jYXJlZXIvY29tcHNjaVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY291bnRcIjogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCIvY2FyZWVyL2NvbXBzY2lcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCIvY2FyZWVyL2NvbXBzY2lcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWVtYmVyc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIwMTAxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvdW50XCI6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwiL2NhcmVlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiY2FyZWVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInBhdGhcIjogXCIvY2FyZWVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNvdW50XCI6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcIi9jYXJlZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwiL2NhcmVlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWVtYmVyc1wiOiBbXVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcImNvdW50XCI6IDEsXG4gICAgICAgICAgICAgICAgXCJpZFwiOiBcIi9cIixcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCIvXCIsXG4gICAgICAgICAgICAgICAgXCJwYXRoXCI6IFwiL1wiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImNvdW50XCI6IDEsXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCIvXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCIvXCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWVtYmVyc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcIjAxMDFcIlxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoXCJlbXB0eVwiLCBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgYXNzZXJ0SlNPTihUYWdOb2Rlcy5jcmVhdGVGb2xkZXJzUm9vdCh7dGFnczogW10sIHR5cGU6ICdmb2xkZXInfSksIHtcbiAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtdLFxuICAgICAgICAgICAgICAgIFwiY291bnRcIjogMCxcbiAgICAgICAgICAgICAgICBcImlkXCI6IFwiL1wiLFxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIi9cIixcbiAgICAgICAgICAgICAgICBcInBhdGhcIjogXCIvXCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiY291bnRcIjogMCxcbiAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcIi9cIixcbiAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIi9cIixcbiAgICAgICAgICAgICAgICAgICAgXCJtZW1iZXJzXCI6IFtdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSk7XG5cbiAgICB9KTtcblxufSk7XG4iXX0=