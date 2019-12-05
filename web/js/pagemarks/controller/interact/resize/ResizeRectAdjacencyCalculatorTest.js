"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MockRects_1 = require("../../../../MockRects");
const RectEdges_1 = require("../edges/RectEdges");
const RectArt_1 = require("../../../../util/RectArt");
const ResizeRectAdjacencyCalculator_1 = require("./ResizeRectAdjacencyCalculator");
const Assertions_1 = require("../../../../test/Assertions");
describe('ResizeRectAdjacencyCalculator', function () {
    test("resize_from_right", { left: true, right: false, top: false, bottom: false }, { "left": 15, "top": 0, "right": 30, "bottom": 20, "width": 15, "height": 20 });
    test("resize_from_right_with_overlap", { left: true, right: false, top: false, bottom: false }, { "left": 15, "top": 0, "right": 22, "bottom": 20, "width": 7, "height": 20 });
    function test(name, rectEdges, expected) {
        it(name, () => {
            const { resizeRect, intersectedRect } = MockRects_1.MOCK_RECTS[name];
            rectEdges = new RectEdges_1.RectEdges(rectEdges);
            console.log("resizeRect: " + JSON.stringify(resizeRect));
            console.log("intersectedRect: " + JSON.stringify(intersectedRect));
            console.log("BEFORE: \n" + RectArt_1.RectArt.formatRects([resizeRect, intersectedRect]).toString());
            let resizeRectAdjacencyCalculator = new ResizeRectAdjacencyCalculator_1.ResizeRectAdjacencyCalculator();
            let adjustedRect = resizeRectAdjacencyCalculator.calculate(resizeRect, intersectedRect, rectEdges);
            console.log("adjustedRect: " + JSON.stringify(adjustedRect));
            console.log("AFTER: \n" + RectArt_1.RectArt.formatRects([adjustedRect, intersectedRect]).toString());
            Assertions_1.assertJSON(adjustedRect, expected);
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVzaXplUmVjdEFkamFjZW5jeUNhbGN1bGF0b3JUZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUmVzaXplUmVjdEFkamFjZW5jeUNhbGN1bGF0b3JUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscURBQWlEO0FBQ2pELGtEQUE2QztBQUM3QyxzREFBaUQ7QUFDakQsbUZBQThFO0FBQzlFLDREQUF1RDtBQUd2RCxRQUFRLENBQUMsK0JBQStCLEVBQUU7SUFFdEMsSUFBSSxDQUFDLG1CQUFtQixFQUNwQixFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUMsRUFDckQsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBQyxDQUFDLENBQUM7SUFFbkYsSUFBSSxDQUFDLGdDQUFnQyxFQUNqQyxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUMsRUFDckQsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBQyxDQUFDLENBQUM7SUErQmxGLFNBQVMsSUFBSSxDQUFDLElBQVksRUFBRSxTQUFjLEVBQUUsUUFBYTtRQUVyRCxFQUFFLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRTtZQUVWLE1BQU0sRUFBQyxVQUFVLEVBQUUsZUFBZSxFQUFDLEdBQUcsc0JBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUV2RCxTQUFTLEdBQUcsSUFBSSxxQkFBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBRXJDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUN6RCxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztZQUVuRSxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksR0FBRyxpQkFBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLFVBQVUsRUFBRSxlQUFlLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7WUFFMUYsSUFBSSw2QkFBNkIsR0FBRyxJQUFJLDZEQUE2QixFQUFFLENBQUM7WUFDeEUsSUFBSSxZQUFZLEdBQUcsNkJBQTZCLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxlQUFlLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFFbkcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFFN0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsaUJBQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxZQUFZLEVBQUUsZUFBZSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBTzNGLHVCQUFVLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBRSxDQUFDO1FBRXhDLENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQztBQUVMLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtNT0NLX1JFQ1RTfSBmcm9tIFwiLi4vLi4vLi4vLi4vTW9ja1JlY3RzXCI7XG5pbXBvcnQge1JlY3RFZGdlc30gZnJvbSBcIi4uL2VkZ2VzL1JlY3RFZGdlc1wiO1xuaW1wb3J0IHtSZWN0QXJ0fSBmcm9tIFwiLi4vLi4vLi4vLi4vdXRpbC9SZWN0QXJ0XCI7XG5pbXBvcnQge1Jlc2l6ZVJlY3RBZGphY2VuY3lDYWxjdWxhdG9yfSBmcm9tIFwiLi9SZXNpemVSZWN0QWRqYWNlbmN5Q2FsY3VsYXRvclwiO1xuaW1wb3J0IHthc3NlcnRKU09OfSBmcm9tIFwiLi4vLi4vLi4vLi4vdGVzdC9Bc3NlcnRpb25zXCI7XG5cblxuZGVzY3JpYmUoJ1Jlc2l6ZVJlY3RBZGphY2VuY3lDYWxjdWxhdG9yJywgZnVuY3Rpb24oKSB7XG5cbiAgICB0ZXN0KFwicmVzaXplX2Zyb21fcmlnaHRcIixcbiAgICAgICAge2xlZnQ6IHRydWUsIHJpZ2h0OiBmYWxzZSwgdG9wOiBmYWxzZSwgYm90dG9tOiBmYWxzZX0sXG4gICAgICAgIHsgXCJsZWZ0XCI6IDE1LCBcInRvcFwiOiAwLCBcInJpZ2h0XCI6IDMwLCBcImJvdHRvbVwiOiAyMCwgXCJ3aWR0aFwiOiAxNSwgXCJoZWlnaHRcIjogMjB9KTtcblxuICAgIHRlc3QoXCJyZXNpemVfZnJvbV9yaWdodF93aXRoX292ZXJsYXBcIixcbiAgICAgICAge2xlZnQ6IHRydWUsIHJpZ2h0OiBmYWxzZSwgdG9wOiBmYWxzZSwgYm90dG9tOiBmYWxzZX0sXG4gICAgICAgIHsgXCJsZWZ0XCI6IDE1LCBcInRvcFwiOiAwLCBcInJpZ2h0XCI6IDIyLCBcImJvdHRvbVwiOiAyMCwgXCJ3aWR0aFwiOiA3LCBcImhlaWdodFwiOiAyMH0pO1xuXG4gICAgLy8gVE9ETzogdGhpcyBvbmUgbm90IHdvcmtpbmcuLiBub3Qgc3VyZSB3aHkgYnV0IElcIm0gc3VyZSBJJ2xsIGZpZ3VyZSBpdCBvdXQuXG4gICAgLy8gdGVzdChcInJlc2l6ZV9wbGFjZWRfdG9wX3JpZ2h0X3Jlc2l6aW5nX2xlZnRfYm90dG9tXCIsXG4gICAgLy8gICAgIHtsZWZ0OiB0cnVlLCByaWdodDogZmFsc2UsIHRvcDogZmFsc2UsIGJvdHRvbTogdHJ1ZX0sXG4gICAgLy8gICAgIHsgXCJsZWZ0XCI6IDE1LCBcInRvcFwiOiAwLCBcInJpZ2h0XCI6IDIyLCBcImJvdHRvbVwiOiAyMCwgXCJ3aWR0aFwiOiA3LCBcImhlaWdodFwiOiAyMH0pXG5cbiAgICAvL1xuICAgIC8vIERFQlVHIFJlc2l6ZVJlY3RBZGphY2VuY3lDYWxjdWxhdG9yLmNhbGN1bGF0ZTogcmVzaXplUmVjdDoge1xuICAgIC8vICAgICBcImxlZnRcIjogMjAwLFxuICAgIC8vICAgICAgICAgXCJ0b3BcIjogMCxcbiAgICAvLyAgICAgICAgIFwicmlnaHRcIjogMzAwLFxuICAgIC8vICAgICAgICAgXCJib3R0b21cIjogMTAxLFxuICAgIC8vICAgICAgICAgXCJ3aWR0aFwiOiAxMDAsXG4gICAgLy8gICAgICAgICBcImhlaWdodFwiOiAxMDFcbiAgICAvLyB9XG4gICAgLy8gUmVzaXplUmVjdEFkamFjZW5jeUNhbGN1bGF0b3IuanM6MjQgREVCVUcgUmVzaXplUmVjdEFkamFjZW5jeUNhbGN1bGF0b3IuY2FsY3VsYXRlOiBpbnRlcnNlY3RlZFJlY3Q6IHtcbiAgICAvLyAgICAgXCJsZWZ0XCI6IDAsXG4gICAgLy8gICAgICAgICBcInRvcFwiOiAwLFxuICAgIC8vICAgICAgICAgXCJyaWdodFwiOiAyMDAsXG4gICAgLy8gICAgICAgICBcImJvdHRvbVwiOiAyMDAsXG4gICAgLy8gICAgICAgICBcIndpZHRoXCI6IDIwMCxcbiAgICAvLyAgICAgICAgIFwiaGVpZ2h0XCI6IDIwMFxuICAgIC8vIH1cbiAgICAvLyBSZXNpemVSZWN0QWRqYWNlbmN5Q2FsY3VsYXRvci5qczoyNSBERUJVRyBSZXNpemVSZWN0QWRqYWNlbmN5Q2FsY3VsYXRvci5jYWxjdWxhdGU6IHJlY3RFZGdlczoge1xuICAgIC8vICAgICBcImxlZnRcIjogZmFsc2UsXG4gICAgLy8gICAgICAgICBcInRvcFwiOiBmYWxzZSxcbiAgICAvLyAgICAgICAgIFwicmlnaHRcIjogZmFsc2UsXG4gICAgLy8gICAgICAgICBcImJvdHRvbVwiOiB0cnVlXG4gICAgLy8gfVxuXG4gICAgZnVuY3Rpb24gdGVzdChuYW1lOiBzdHJpbmcsIHJlY3RFZGdlczogYW55LCBleHBlY3RlZDogYW55KSB7XG5cbiAgICAgICAgaXQobmFtZSwgKCkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCB7cmVzaXplUmVjdCwgaW50ZXJzZWN0ZWRSZWN0fSA9IE1PQ0tfUkVDVFNbbmFtZV07XG5cbiAgICAgICAgICAgIHJlY3RFZGdlcyA9IG5ldyBSZWN0RWRnZXMocmVjdEVkZ2VzKTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJyZXNpemVSZWN0OiBcIiArIEpTT04uc3RyaW5naWZ5KHJlc2l6ZVJlY3QpKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaW50ZXJzZWN0ZWRSZWN0OiBcIiArIEpTT04uc3RyaW5naWZ5KGludGVyc2VjdGVkUmVjdCkpO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkJFRk9SRTogXFxuXCIgKyBSZWN0QXJ0LmZvcm1hdFJlY3RzKFtyZXNpemVSZWN0LCBpbnRlcnNlY3RlZFJlY3RdKS50b1N0cmluZygpKTtcblxuICAgICAgICAgICAgbGV0IHJlc2l6ZVJlY3RBZGphY2VuY3lDYWxjdWxhdG9yID0gbmV3IFJlc2l6ZVJlY3RBZGphY2VuY3lDYWxjdWxhdG9yKCk7XG4gICAgICAgICAgICBsZXQgYWRqdXN0ZWRSZWN0ID0gcmVzaXplUmVjdEFkamFjZW5jeUNhbGN1bGF0b3IuY2FsY3VsYXRlKHJlc2l6ZVJlY3QsIGludGVyc2VjdGVkUmVjdCwgcmVjdEVkZ2VzKTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhZGp1c3RlZFJlY3Q6IFwiICsgSlNPTi5zdHJpbmdpZnkoYWRqdXN0ZWRSZWN0KSk7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQUZURVI6IFxcblwiICsgUmVjdEFydC5mb3JtYXRSZWN0cyhbYWRqdXN0ZWRSZWN0LCBpbnRlcnNlY3RlZFJlY3RdKS50b1N0cmluZygpKTtcblxuICAgICAgICAgICAgLy8gYXNzZXJ0Lm5vdEVxdWFsKGFkanVzdGVkUmVjdCwgbnVsbCk7XG4gICAgICAgICAgICAvLyBhc3NlcnQuZXF1YWwocmVzaXplUmVjdC5yaWdodCwgYWRqdXN0ZWRSZWN0LnJpZ2h0KTtcbiAgICAgICAgICAgIC8vIGFzc2VydC5lcXVhbChyZXNpemVSZWN0LmJvdHRvbSwgYWRqdXN0ZWRSZWN0LmJvdHRvbSk7XG4gICAgICAgICAgICAvLyBhc3NlcnQuZXF1YWwocmVzaXplUmVjdC50b3AsIGFkanVzdGVkUmVjdC50b3ApO1xuXG4gICAgICAgICAgICBhc3NlcnRKU09OKGFkanVzdGVkUmVjdCwgZXhwZWN0ZWQgKTtcblxuICAgICAgICB9KTtcblxuICAgIH1cblxufSk7XG4iXX0=