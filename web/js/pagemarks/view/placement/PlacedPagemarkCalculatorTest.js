"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PagemarkRect_1 = require("../../../metadata/PagemarkRect");
const Pagemarks_1 = require("../../../metadata/Pagemarks");
const Rects_1 = require("../../../Rects");
const PlacedPagemarkCalculator_1 = require("./PlacedPagemarkCalculator");
const Assertions_1 = require("../../../test/Assertions");
describe('PlacedPagemarkCalculator', function () {
    describe('Placement', function () {
        it("50%", function () {
            let pagemarkRect = new PagemarkRect_1.PagemarkRect({
                top: 0,
                left: 0,
                width: 50,
                height: 50
            });
            let pagemark = Pagemarks_1.Pagemarks.create({ rect: pagemarkRect });
            let parentRect = Rects_1.Rects.createFromBasicRect({
                top: 0,
                left: 0,
                width: 800,
                height: 1000
            });
            let pagemarkPlacementCalculator = new PlacedPagemarkCalculator_1.PlacedPagemarkCalculator();
            let placedPagemark = pagemarkPlacementCalculator.calculate(parentRect, pagemark);
            let expected = {
                "rect": {
                    "left": 0,
                    "top": 0,
                    "right": 400,
                    "bottom": 500,
                    "width": 400,
                    "height": 500
                }
            };
            Assertions_1.assertJSON(placedPagemark, expected);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGxhY2VkUGFnZW1hcmtDYWxjdWxhdG9yVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlBsYWNlZFBhZ2VtYXJrQ2FsY3VsYXRvclRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpRUFBNEQ7QUFDNUQsMkRBQXNEO0FBQ3RELDBDQUFxQztBQUNyQyx5RUFBb0U7QUFDcEUseURBQW9EO0FBRXBELFFBQVEsQ0FBQywwQkFBMEIsRUFBRTtJQUVqQyxRQUFRLENBQUMsV0FBVyxFQUFFO1FBRWxCLEVBQUUsQ0FBQyxLQUFLLEVBQUU7WUFFTixJQUFJLFlBQVksR0FBRyxJQUFJLDJCQUFZLENBQUM7Z0JBQ2hDLEdBQUcsRUFBRSxDQUFDO2dCQUNOLElBQUksRUFBRSxDQUFDO2dCQUNQLEtBQUssRUFBRSxFQUFFO2dCQUNULE1BQU0sRUFBRSxFQUFFO2FBQ2IsQ0FBQyxDQUFDO1lBRUgsSUFBSSxRQUFRLEdBQUcscUJBQVMsQ0FBQyxNQUFNLENBQUMsRUFBQyxJQUFJLEVBQUUsWUFBWSxFQUFDLENBQUMsQ0FBQztZQUV0RCxJQUFJLFVBQVUsR0FBRyxhQUFLLENBQUMsbUJBQW1CLENBQUM7Z0JBQ3ZDLEdBQUcsRUFBRSxDQUFDO2dCQUNOLElBQUksRUFBRSxDQUFDO2dCQUNQLEtBQUssRUFBRSxHQUFHO2dCQUNWLE1BQU0sRUFBRSxJQUFJO2FBQ2YsQ0FBQyxDQUFDO1lBRUgsSUFBSSwyQkFBMkIsR0FBRyxJQUFJLG1EQUF3QixFQUFFLENBQUM7WUFFakUsSUFBSSxjQUFjLEdBQUcsMkJBQTJCLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQTtZQUVoRixJQUFJLFFBQVEsR0FBRztnQkFDWCxNQUFNLEVBQUU7b0JBQ0osTUFBTSxFQUFFLENBQUM7b0JBQ1QsS0FBSyxFQUFFLENBQUM7b0JBQ1IsT0FBTyxFQUFFLEdBQUc7b0JBQ1osUUFBUSxFQUFFLEdBQUc7b0JBQ2IsT0FBTyxFQUFFLEdBQUc7b0JBQ1osUUFBUSxFQUFFLEdBQUc7aUJBQ2hCO2FBQ0osQ0FBQztZQUVGLHVCQUFVLENBQUMsY0FBYyxFQUFFLFFBQVEsQ0FBQyxDQUFBO1FBRXhDLENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQyxDQUFDLENBQUM7QUFFUCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGFnZW1hcmtSZWN0fSBmcm9tICcuLi8uLi8uLi9tZXRhZGF0YS9QYWdlbWFya1JlY3QnO1xuaW1wb3J0IHtQYWdlbWFya3N9IGZyb20gJy4uLy4uLy4uL21ldGFkYXRhL1BhZ2VtYXJrcyc7XG5pbXBvcnQge1JlY3RzfSBmcm9tICcuLi8uLi8uLi9SZWN0cyc7XG5pbXBvcnQge1BsYWNlZFBhZ2VtYXJrQ2FsY3VsYXRvcn0gZnJvbSAnLi9QbGFjZWRQYWdlbWFya0NhbGN1bGF0b3InO1xuaW1wb3J0IHthc3NlcnRKU09OfSBmcm9tICcuLi8uLi8uLi90ZXN0L0Fzc2VydGlvbnMnO1xuXG5kZXNjcmliZSgnUGxhY2VkUGFnZW1hcmtDYWxjdWxhdG9yJywgZnVuY3Rpb24oKSB7XG5cbiAgICBkZXNjcmliZSgnUGxhY2VtZW50JywgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgaXQoXCI1MCVcIiwgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICBsZXQgcGFnZW1hcmtSZWN0ID0gbmV3IFBhZ2VtYXJrUmVjdCh7XG4gICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwLFxuICAgICAgICAgICAgICAgIGhlaWdodDogNTBcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBsZXQgcGFnZW1hcmsgPSBQYWdlbWFya3MuY3JlYXRlKHtyZWN0OiBwYWdlbWFya1JlY3R9KTtcblxuICAgICAgICAgICAgbGV0IHBhcmVudFJlY3QgPSBSZWN0cy5jcmVhdGVGcm9tQmFzaWNSZWN0KHtcbiAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICB3aWR0aDogODAwLFxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwMFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGxldCBwYWdlbWFya1BsYWNlbWVudENhbGN1bGF0b3IgPSBuZXcgUGxhY2VkUGFnZW1hcmtDYWxjdWxhdG9yKCk7XG5cbiAgICAgICAgICAgIGxldCBwbGFjZWRQYWdlbWFyayA9IHBhZ2VtYXJrUGxhY2VtZW50Q2FsY3VsYXRvci5jYWxjdWxhdGUocGFyZW50UmVjdCwgcGFnZW1hcmspXG5cbiAgICAgICAgICAgIGxldCBleHBlY3RlZCA9IHtcbiAgICAgICAgICAgICAgICBcInJlY3RcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImxlZnRcIjogMCxcbiAgICAgICAgICAgICAgICAgICAgXCJ0b3BcIjogMCxcbiAgICAgICAgICAgICAgICAgICAgXCJyaWdodFwiOiA0MDAsXG4gICAgICAgICAgICAgICAgICAgIFwiYm90dG9tXCI6IDUwMCxcbiAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiA0MDAsXG4gICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IDUwMFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGFzc2VydEpTT04ocGxhY2VkUGFnZW1hcmssIGV4cGVjdGVkKVxuXG4gICAgICAgIH0pO1xuXG4gICAgfSk7XG5cbn0pO1xuIl19