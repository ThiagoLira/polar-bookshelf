"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DataObjectIndex_1 = require("./DataObjectIndex");
const Tags_1 = require("polar-shared/src/tags/Tags");
const Assertions_1 = require("../../../web/js/test/Assertions");
describe('DataObjectIndex', function () {
    it("basic", function () {
        const index = new DataObjectIndex_1.DataObjectIndex((p) => p.tags);
        index.add('alice', { name: 'alice', tags: [Tags_1.Tags.create('nice'), Tags_1.Tags.create('happy')] });
        index.add('bob', { name: 'bob', tags: [Tags_1.Tags.create('mean'), Tags_1.Tags.create('bad')] });
        Assertions_1.assertJSON(index.values(), [
            {
                "name": "alice",
                "tags": [
                    {
                        "id": "nice",
                        "label": "nice"
                    },
                    {
                        "id": "happy",
                        "label": "happy"
                    }
                ]
            },
            {
                "name": "bob",
                "tags": [
                    {
                        "id": "mean",
                        "label": "mean"
                    },
                    {
                        "id": "bad",
                        "label": "bad"
                    }
                ]
            }
        ]);
        Assertions_1.assertJSON(index.toTagDescriptors(), [
            {
                "id": "nice",
                "label": "nice",
                "count": 1,
                "members": [
                    "alice"
                ]
            },
            {
                "id": "happy",
                "label": "happy",
                "count": 1,
                "members": [
                    "alice"
                ]
            },
            {
                "id": "mean",
                "label": "mean",
                "count": 1,
                "members": [
                    "bob"
                ]
            },
            {
                "id": "bad",
                "label": "bad",
                "count": 1,
                "members": [
                    "bob"
                ]
            }
        ]);
        index.remove('bob');
        Assertions_1.assertJSON(index.toTagDescriptors(), [
            {
                "id": "nice",
                "label": "nice",
                "count": 1,
                "members": [
                    "alice"
                ]
            },
            {
                "id": "happy",
                "label": "happy",
                "count": 1,
                "members": [
                    "alice"
                ]
            }
        ]);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0YU9iamVjdEluZGV4VGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkRhdGFPYmplY3RJbmRleFRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSx1REFBa0Q7QUFDbEQscURBQWdEO0FBQ2hELGdFQUEyRDtBQUUzRCxRQUFRLENBQUMsaUJBQWlCLEVBQUU7SUFFeEIsRUFBRSxDQUFDLE9BQU8sRUFBRTtRQUVSLE1BQU0sS0FBSyxHQUFHLElBQUksaUNBQWUsQ0FBUyxDQUFDLENBQVUsRUFBRSxFQUFFLENBQUMsQ0FBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRW5FLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQyxXQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLFdBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7UUFDdkYsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsRUFBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLFdBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsV0FBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztRQUVqRix1QkFBVSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUN2QjtnQkFDSSxNQUFNLEVBQUUsT0FBTztnQkFDZixNQUFNLEVBQUU7b0JBQ0o7d0JBQ0ksSUFBSSxFQUFFLE1BQU07d0JBQ1osT0FBTyxFQUFFLE1BQU07cUJBQ2xCO29CQUNEO3dCQUNJLElBQUksRUFBRSxPQUFPO3dCQUNiLE9BQU8sRUFBRSxPQUFPO3FCQUNuQjtpQkFDSjthQUNKO1lBQ0Q7Z0JBQ0ksTUFBTSxFQUFFLEtBQUs7Z0JBQ2IsTUFBTSxFQUFFO29CQUNKO3dCQUNJLElBQUksRUFBRSxNQUFNO3dCQUNaLE9BQU8sRUFBRSxNQUFNO3FCQUNsQjtvQkFDRDt3QkFDSSxJQUFJLEVBQUUsS0FBSzt3QkFDWCxPQUFPLEVBQUUsS0FBSztxQkFDakI7aUJBQ0o7YUFDSjtTQUNKLENBQUMsQ0FBQztRQUVILHVCQUFVLENBQUMsS0FBSyxDQUFDLGdCQUFnQixFQUFFLEVBQUU7WUFDakM7Z0JBQ0ksSUFBSSxFQUFFLE1BQU07Z0JBQ1osT0FBTyxFQUFFLE1BQU07Z0JBQ2YsT0FBTyxFQUFFLENBQUM7Z0JBQ1YsU0FBUyxFQUFFO29CQUNQLE9BQU87aUJBQ1Y7YUFDSjtZQUNEO2dCQUNJLElBQUksRUFBRSxPQUFPO2dCQUNiLE9BQU8sRUFBRSxPQUFPO2dCQUNoQixPQUFPLEVBQUUsQ0FBQztnQkFDVixTQUFTLEVBQUU7b0JBQ1AsT0FBTztpQkFDVjthQUNKO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLE1BQU07Z0JBQ1osT0FBTyxFQUFFLE1BQU07Z0JBQ2YsT0FBTyxFQUFFLENBQUM7Z0JBQ1YsU0FBUyxFQUFFO29CQUNQLEtBQUs7aUJBQ1I7YUFDSjtZQUNEO2dCQUNJLElBQUksRUFBRSxLQUFLO2dCQUNYLE9BQU8sRUFBRSxLQUFLO2dCQUNkLE9BQU8sRUFBRSxDQUFDO2dCQUNWLFNBQVMsRUFBRTtvQkFDUCxLQUFLO2lCQUNSO2FBQ0o7U0FDSixDQUFDLENBQUM7UUFFSCxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXBCLHVCQUFVLENBQUMsS0FBSyxDQUFDLGdCQUFnQixFQUFFLEVBQUU7WUFDN0I7Z0JBQ0ksSUFBSSxFQUFFLE1BQU07Z0JBQ1osT0FBTyxFQUFFLE1BQU07Z0JBQ2YsT0FBTyxFQUFFLENBQUM7Z0JBQ1YsU0FBUyxFQUFFO29CQUNQLE9BQU87aUJBQ1Y7YUFDSjtZQUNEO2dCQUNJLElBQUksRUFBRSxPQUFPO2dCQUNiLE9BQU8sRUFBRSxPQUFPO2dCQUNoQixPQUFPLEVBQUUsQ0FBQztnQkFDVixTQUFTLEVBQUU7b0JBQ1AsT0FBTztpQkFDVjthQUNKO1NBQ0osQ0FDSixDQUFDO0lBRU4sQ0FBQyxDQUFDLENBQUM7QUFFUCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7VGFnfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3RhZ3MvVGFncyc7XG5pbXBvcnQge0RhdGFPYmplY3RJbmRleH0gZnJvbSAnLi9EYXRhT2JqZWN0SW5kZXgnO1xuaW1wb3J0IHtUYWdzfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3RhZ3MvVGFncyc7XG5pbXBvcnQge2Fzc2VydEpTT059IGZyb20gJy4uLy4uLy4uL3dlYi9qcy90ZXN0L0Fzc2VydGlvbnMnO1xuXG5kZXNjcmliZSgnRGF0YU9iamVjdEluZGV4JywgZnVuY3Rpb24oKSB7XG5cbiAgICBpdChcImJhc2ljXCIsIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGNvbnN0IGluZGV4ID0gbmV3IERhdGFPYmplY3RJbmRleDxQZXJzb24+KChwPzogUGVyc29uKSA9PiBwIS50YWdzKTtcblxuICAgICAgICBpbmRleC5hZGQoJ2FsaWNlJywge25hbWU6ICdhbGljZScsIHRhZ3M6IFtUYWdzLmNyZWF0ZSgnbmljZScpLCBUYWdzLmNyZWF0ZSgnaGFwcHknKV19KTtcbiAgICAgICAgaW5kZXguYWRkKCdib2InLCB7bmFtZTogJ2JvYicsIHRhZ3M6IFtUYWdzLmNyZWF0ZSgnbWVhbicpLCBUYWdzLmNyZWF0ZSgnYmFkJyldfSk7XG5cbiAgICAgICAgYXNzZXJ0SlNPTihpbmRleC52YWx1ZXMoKSwgW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcImFsaWNlXCIsXG4gICAgICAgICAgICAgICAgXCJ0YWdzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcIm5pY2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJuaWNlXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJpZFwiOiBcImhhcHB5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwiaGFwcHlcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJib2JcIixcbiAgICAgICAgICAgICAgICBcInRhZ3NcIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwibWVhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcIm1lYW5cIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwiYmFkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwiYmFkXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXSk7XG5cbiAgICAgICAgYXNzZXJ0SlNPTihpbmRleC50b1RhZ0Rlc2NyaXB0b3JzKCksIFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImlkXCI6IFwibmljZVwiLFxuICAgICAgICAgICAgICAgIFwibGFiZWxcIjogXCJuaWNlXCIsXG4gICAgICAgICAgICAgICAgXCJjb3VudFwiOiAxLFxuICAgICAgICAgICAgICAgIFwibWVtYmVyc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiYWxpY2VcIlxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJpZFwiOiBcImhhcHB5XCIsXG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcImhhcHB5XCIsXG4gICAgICAgICAgICAgICAgXCJjb3VudFwiOiAxLFxuICAgICAgICAgICAgICAgIFwibWVtYmVyc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiYWxpY2VcIlxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJpZFwiOiBcIm1lYW5cIixcbiAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwibWVhblwiLFxuICAgICAgICAgICAgICAgIFwiY291bnRcIjogMSxcbiAgICAgICAgICAgICAgICBcIm1lbWJlcnNcIjogW1xuICAgICAgICAgICAgICAgICAgICBcImJvYlwiXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImlkXCI6IFwiYmFkXCIsXG4gICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcImJhZFwiLFxuICAgICAgICAgICAgICAgIFwiY291bnRcIjogMSxcbiAgICAgICAgICAgICAgICBcIm1lbWJlcnNcIjogW1xuICAgICAgICAgICAgICAgICAgICBcImJvYlwiXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICBdKTtcblxuICAgICAgICBpbmRleC5yZW1vdmUoJ2JvYicpO1xuXG4gICAgICAgIGFzc2VydEpTT04oaW5kZXgudG9UYWdEZXNjcmlwdG9ycygpLCBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwibmljZVwiLFxuICAgICAgICAgICAgICAgICAgICBcImxhYmVsXCI6IFwibmljZVwiLFxuICAgICAgICAgICAgICAgICAgICBcImNvdW50XCI6IDEsXG4gICAgICAgICAgICAgICAgICAgIFwibWVtYmVyc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFsaWNlXCJcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwiaGFwcHlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiOiBcImhhcHB5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiY291bnRcIjogMSxcbiAgICAgICAgICAgICAgICAgICAgXCJtZW1iZXJzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYWxpY2VcIlxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICApO1xuXG4gICAgfSk7XG5cbn0pO1xuXG5cbmludGVyZmFjZSBQZXJzb24ge1xuICAgIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcbiAgICByZWFkb25seSB0YWdzOiByZWFkb25seSBUYWdbXTtcbn1cbiJdfQ==