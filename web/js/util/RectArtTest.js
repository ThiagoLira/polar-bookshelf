"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const Rects_1 = require("../Rects");
const RectArt_1 = require("./RectArt");
describe('RectArt', function () {
    it("Basic rect", function () {
        let rect = Rects_1.Rects.createFromBasicRect({
            left: 5,
            top: 5,
            width: 10,
            height: 10
        });
        let expected = "                \n" +
            "                \n" +
            "                \n" +
            "                \n" +
            "                \n" +
            "     +---------+\n" +
            "     |         |\n" +
            "     |         |\n" +
            "     |         |\n" +
            "     |         |\n" +
            "     |         |\n" +
            "     |         |\n" +
            "     |         |\n" +
            "     |         |\n" +
            "     +---------+\n" +
            "                \n";
        chai_1.assert.equal(RectArt_1.RectArt.createFromRect(rect).toString(), expected);
    });
    it("Test merging two", function () {
        let rect0 = Rects_1.Rects.createFromBasicRect({
            left: 5,
            top: 5,
            width: 10,
            height: 10
        });
        let rect1 = Rects_1.Rects.createFromBasicRect({
            left: 10,
            top: 10,
            width: 20,
            height: 20
        });
        let expected = "                               \n" +
            "                               \n" +
            "                               \n" +
            "                               \n" +
            "                               \n" +
            "     +---------+               \n" +
            "     |         |               \n" +
            "     |         |               \n" +
            "     |         |               \n" +
            "     |         |               \n" +
            "     |    +-------------------+\n" +
            "     |    |    |              |\n" +
            "     |    |    |              |\n" +
            "     |    |    |              |\n" +
            "     +----|----+              |\n" +
            "          |                   |\n" +
            "          |                   |\n" +
            "          |                   |\n" +
            "          |                   |\n" +
            "          |                   |\n" +
            "          |                   |\n" +
            "          |                   |\n" +
            "          |                   |\n" +
            "          |                   |\n" +
            "          |                   |\n" +
            "          |                   |\n" +
            "          |                   |\n" +
            "          |                   |\n" +
            "          |                   |\n" +
            "          +-------------------+\n" +
            "                               \n";
        let textArray = RectArt_1.RectArt.formatRects([rect0, rect1]);
        chai_1.assert.equal(textArray.toString(), expected);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVjdEFydFRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJSZWN0QXJ0VGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLCtCQUE0QjtBQUk1QixvQ0FBK0I7QUFFL0IsdUNBQWtDO0FBR2xDLFFBQVEsQ0FBQyxTQUFTLEVBQUU7SUFFaEIsRUFBRSxDQUFDLFlBQVksRUFBRTtRQUViLElBQUksSUFBSSxHQUFHLGFBQUssQ0FBQyxtQkFBbUIsQ0FBQztZQUNqQyxJQUFJLEVBQUUsQ0FBQztZQUNQLEdBQUcsRUFBRSxDQUFDO1lBQ04sS0FBSyxFQUFFLEVBQUU7WUFDVCxNQUFNLEVBQUUsRUFBRTtTQUNiLENBQUMsQ0FBQztRQUVILElBQUksUUFBUSxHQUFHLG9CQUFvQjtZQUNwQixvQkFBb0I7WUFDcEIsb0JBQW9CO1lBQ3BCLG9CQUFvQjtZQUNwQixvQkFBb0I7WUFDcEIsb0JBQW9CO1lBQ3BCLG9CQUFvQjtZQUNwQixvQkFBb0I7WUFDcEIsb0JBQW9CO1lBQ3BCLG9CQUFvQjtZQUNwQixvQkFBb0I7WUFDcEIsb0JBQW9CO1lBQ3BCLG9CQUFvQjtZQUNwQixvQkFBb0I7WUFDcEIsb0JBQW9CO1lBQ3BCLG9CQUFvQixDQUFDO1FBQ3BDLGFBQU0sQ0FBQyxLQUFLLENBQUMsaUJBQU8sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsUUFBUSxDQUFFLENBQUM7SUFFckUsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsa0JBQWtCLEVBQUU7UUFFbkIsSUFBSSxLQUFLLEdBQUcsYUFBSyxDQUFDLG1CQUFtQixDQUFDO1lBQ2xDLElBQUksRUFBRSxDQUFDO1lBQ1AsR0FBRyxFQUFFLENBQUM7WUFDTixLQUFLLEVBQUUsRUFBRTtZQUNULE1BQU0sRUFBRSxFQUFFO1NBQ2IsQ0FBQyxDQUFDO1FBRUgsSUFBSSxLQUFLLEdBQUcsYUFBSyxDQUFDLG1CQUFtQixDQUFDO1lBQ2xDLElBQUksRUFBRSxFQUFFO1lBQ1IsR0FBRyxFQUFFLEVBQUU7WUFDUCxLQUFLLEVBQUUsRUFBRTtZQUNULE1BQU0sRUFBRSxFQUFFO1NBQ2IsQ0FBQyxDQUFDO1FBRUgsSUFBSSxRQUFRLEdBQUcsbUNBQW1DO1lBQ25DLG1DQUFtQztZQUNuQyxtQ0FBbUM7WUFDbkMsbUNBQW1DO1lBQ25DLG1DQUFtQztZQUNuQyxtQ0FBbUM7WUFDbkMsbUNBQW1DO1lBQ25DLG1DQUFtQztZQUNuQyxtQ0FBbUM7WUFDbkMsbUNBQW1DO1lBQ25DLG1DQUFtQztZQUNuQyxtQ0FBbUM7WUFDbkMsbUNBQW1DO1lBQ25DLG1DQUFtQztZQUNuQyxtQ0FBbUM7WUFDbkMsbUNBQW1DO1lBQ25DLG1DQUFtQztZQUNuQyxtQ0FBbUM7WUFDbkMsbUNBQW1DO1lBQ25DLG1DQUFtQztZQUNuQyxtQ0FBbUM7WUFDbkMsbUNBQW1DO1lBQ25DLG1DQUFtQztZQUNuQyxtQ0FBbUM7WUFDbkMsbUNBQW1DO1lBQ25DLG1DQUFtQztZQUNuQyxtQ0FBbUM7WUFDbkMsbUNBQW1DO1lBQ25DLG1DQUFtQztZQUNuQyxtQ0FBbUM7WUFDbkMsbUNBQW1DLENBQUM7UUFFbkQsSUFBSSxTQUFTLEdBQUcsaUJBQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUdwRCxhQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxRQUFRLENBQUUsQ0FBQztJQUVsRCxDQUFDLENBQUMsQ0FBQztBQUdQLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQge2Fzc2VydH0gZnJvbSAnY2hhaSc7XG5pbXBvcnQge2Fzc2VydEpTT059IGZyb20gXCIuLi90ZXN0L0Fzc2VydGlvbnNcIjtcblxuaW1wb3J0IHtSZWN0fSBmcm9tIFwiLi4vUmVjdFwiO1xuaW1wb3J0IHtSZWN0c30gZnJvbSBcIi4uL1JlY3RzXCI7XG5cbmltcG9ydCB7UmVjdEFydH0gZnJvbSBcIi4vUmVjdEFydFwiO1xuaW1wb3J0IHtUZXh0QXJyYXl9IGZyb20gXCIuL1RleHRBcnJheVwiO1xuXG5kZXNjcmliZSgnUmVjdEFydCcsIGZ1bmN0aW9uKCkge1xuXG4gICAgaXQoXCJCYXNpYyByZWN0XCIsIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBsZXQgcmVjdCA9IFJlY3RzLmNyZWF0ZUZyb21CYXNpY1JlY3Qoe1xuICAgICAgICAgICAgbGVmdDogNSxcbiAgICAgICAgICAgIHRvcDogNSxcbiAgICAgICAgICAgIHdpZHRoOiAxMCxcbiAgICAgICAgICAgIGhlaWdodDogMTBcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IGV4cGVjdGVkID0gXCIgICAgICAgICAgICAgICAgXFxuXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICBcIiAgICAgICAgICAgICAgICBcXG5cIiArXG4gICAgICAgICAgICAgICAgICAgICAgIFwiICAgICAgICAgICAgICAgIFxcblwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgXCIgICAgICAgICAgICAgICAgXFxuXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICBcIiAgICAgICAgICAgICAgICBcXG5cIiArXG4gICAgICAgICAgICAgICAgICAgICAgIFwiICAgICArLS0tLS0tLS0tK1xcblwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgXCIgICAgIHwgICAgICAgICB8XFxuXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICBcIiAgICAgfCAgICAgICAgIHxcXG5cIiArXG4gICAgICAgICAgICAgICAgICAgICAgIFwiICAgICB8ICAgICAgICAgfFxcblwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgXCIgICAgIHwgICAgICAgICB8XFxuXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICBcIiAgICAgfCAgICAgICAgIHxcXG5cIiArXG4gICAgICAgICAgICAgICAgICAgICAgIFwiICAgICB8ICAgICAgICAgfFxcblwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgXCIgICAgIHwgICAgICAgICB8XFxuXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICBcIiAgICAgfCAgICAgICAgIHxcXG5cIiArXG4gICAgICAgICAgICAgICAgICAgICAgIFwiICAgICArLS0tLS0tLS0tK1xcblwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgXCIgICAgICAgICAgICAgICAgXFxuXCI7XG4gICAgICAgIGFzc2VydC5lcXVhbChSZWN0QXJ0LmNyZWF0ZUZyb21SZWN0KHJlY3QpLnRvU3RyaW5nKCksIGV4cGVjdGVkICk7XG5cbiAgICB9KTtcblxuICAgIGl0KFwiVGVzdCBtZXJnaW5nIHR3b1wiLCBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgbGV0IHJlY3QwID0gUmVjdHMuY3JlYXRlRnJvbUJhc2ljUmVjdCh7XG4gICAgICAgICAgICBsZWZ0OiA1LFxuICAgICAgICAgICAgdG9wOiA1LFxuICAgICAgICAgICAgd2lkdGg6IDEwLFxuICAgICAgICAgICAgaGVpZ2h0OiAxMFxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgcmVjdDEgPSBSZWN0cy5jcmVhdGVGcm9tQmFzaWNSZWN0KHtcbiAgICAgICAgICAgIGxlZnQ6IDEwLFxuICAgICAgICAgICAgdG9wOiAxMCxcbiAgICAgICAgICAgIHdpZHRoOiAyMCxcbiAgICAgICAgICAgIGhlaWdodDogMjBcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IGV4cGVjdGVkID0gXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cIiArXG4gICAgICAgICAgICAgICAgICAgICAgIFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cIiArXG4gICAgICAgICAgICAgICAgICAgICAgIFwiICAgICArLS0tLS0tLS0tKyAgICAgICAgICAgICAgIFxcblwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgXCIgICAgIHwgICAgICAgICB8ICAgICAgICAgICAgICAgXFxuXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICBcIiAgICAgfCAgICAgICAgIHwgICAgICAgICAgICAgICBcXG5cIiArXG4gICAgICAgICAgICAgICAgICAgICAgIFwiICAgICB8ICAgICAgICAgfCAgICAgICAgICAgICAgIFxcblwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgXCIgICAgIHwgICAgICAgICB8ICAgICAgICAgICAgICAgXFxuXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICBcIiAgICAgfCAgICArLS0tLS0tLS0tLS0tLS0tLS0tLStcXG5cIiArXG4gICAgICAgICAgICAgICAgICAgICAgIFwiICAgICB8ICAgIHwgICAgfCAgICAgICAgICAgICAgfFxcblwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgXCIgICAgIHwgICAgfCAgICB8ICAgICAgICAgICAgICB8XFxuXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICBcIiAgICAgfCAgICB8ICAgIHwgICAgICAgICAgICAgIHxcXG5cIiArXG4gICAgICAgICAgICAgICAgICAgICAgIFwiICAgICArLS0tLXwtLS0tKyAgICAgICAgICAgICAgfFxcblwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgXCIgICAgICAgICAgfCAgICAgICAgICAgICAgICAgICB8XFxuXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICBcIiAgICAgICAgICB8ICAgICAgICAgICAgICAgICAgIHxcXG5cIiArXG4gICAgICAgICAgICAgICAgICAgICAgIFwiICAgICAgICAgIHwgICAgICAgICAgICAgICAgICAgfFxcblwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgXCIgICAgICAgICAgfCAgICAgICAgICAgICAgICAgICB8XFxuXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICBcIiAgICAgICAgICB8ICAgICAgICAgICAgICAgICAgIHxcXG5cIiArXG4gICAgICAgICAgICAgICAgICAgICAgIFwiICAgICAgICAgIHwgICAgICAgICAgICAgICAgICAgfFxcblwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgXCIgICAgICAgICAgfCAgICAgICAgICAgICAgICAgICB8XFxuXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICBcIiAgICAgICAgICB8ICAgICAgICAgICAgICAgICAgIHxcXG5cIiArXG4gICAgICAgICAgICAgICAgICAgICAgIFwiICAgICAgICAgIHwgICAgICAgICAgICAgICAgICAgfFxcblwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgXCIgICAgICAgICAgfCAgICAgICAgICAgICAgICAgICB8XFxuXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICBcIiAgICAgICAgICB8ICAgICAgICAgICAgICAgICAgIHxcXG5cIiArXG4gICAgICAgICAgICAgICAgICAgICAgIFwiICAgICAgICAgIHwgICAgICAgICAgICAgICAgICAgfFxcblwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgXCIgICAgICAgICAgfCAgICAgICAgICAgICAgICAgICB8XFxuXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICBcIiAgICAgICAgICB8ICAgICAgICAgICAgICAgICAgIHxcXG5cIiArXG4gICAgICAgICAgICAgICAgICAgICAgIFwiICAgICAgICAgICstLS0tLS0tLS0tLS0tLS0tLS0tK1xcblwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXCI7XG5cbiAgICAgICAgbGV0IHRleHRBcnJheSA9IFJlY3RBcnQuZm9ybWF0UmVjdHMoW3JlY3QwLCByZWN0MV0pO1xuXG4gICAgICAgIC8vYXNzZXJ0LmVxdWFsKHRleHRBcnJheS53aWR0aCwgMTUpO1xuICAgICAgICBhc3NlcnQuZXF1YWwodGV4dEFycmF5LnRvU3RyaW5nKCksIGV4cGVjdGVkICk7XG5cbiAgICB9KTtcblxuXG59KTtcblxuIl19