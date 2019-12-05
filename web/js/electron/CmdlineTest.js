"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const TestingTime_1 = require("polar-shared/src/test/TestingTime");
const Cmdline_1 = require("./Cmdline");
TestingTime_1.TestingTime.freeze();
describe('Cmdline', function () {
    describe('getDocArg', function () {
        it("With no data", function () {
            chai_1.assert.equal(Cmdline_1.Cmdline.getDocArg([]), null);
        });
        it("With all wrong data", function () {
            chai_1.assert.equal(Cmdline_1.Cmdline.getDocArg(["asdf", "bar"]), null);
        });
        it("With one PDF arg", function () {
            chai_1.assert.equal(Cmdline_1.Cmdline.getDocArg(["foo.pdf"]), "foo.pdf");
        });
        it("With two PDF args", function () {
            chai_1.assert.equal(Cmdline_1.Cmdline.getDocArg(["foo.pdf", "bar.pdf"]), "bar.pdf");
        });
        it("With one chtml arg", function () {
            chai_1.assert.equal(Cmdline_1.Cmdline.getDocArg(["foo.chtml"]), "foo.chtml");
        });
        it("With real args", function () {
            let args = ["/home/burton/projects/polar-bookshelf/node_modules/electron/dist/electron", ".", "example.pdf"];
            chai_1.assert.equal(Cmdline_1.Cmdline.getDocArg(args), "example.pdf");
        });
    });
    describe('getURLArg', function () {
        it("With one arg", function () {
            chai_1.assert.equal(Cmdline_1.Cmdline.getURLArg(["http://www.cnn.com"]), "http://www.cnn.com");
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ21kbGluZVRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJDbWRsaW5lVGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUE0QjtBQUM1QixtRUFBOEQ7QUFDOUQsdUNBQWtDO0FBRWxDLHlCQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFckIsUUFBUSxDQUFDLFNBQVMsRUFBRTtJQUVoQixRQUFRLENBQUMsV0FBVyxFQUFFO1FBRWxCLEVBQUUsQ0FBQyxjQUFjLEVBQUU7WUFDZixhQUFNLENBQUMsS0FBSyxDQUFDLGlCQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzlDLENBQUMsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLHFCQUFxQixFQUFFO1lBQ3RCLGFBQU0sQ0FBQyxLQUFLLENBQUMsaUJBQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMzRCxDQUFDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyxrQkFBa0IsRUFBRTtZQUNuQixhQUFNLENBQUMsS0FBSyxDQUFDLGlCQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUM1RCxDQUFDLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyxtQkFBbUIsRUFBRTtZQUNwQixhQUFNLENBQUMsS0FBSyxDQUFDLGlCQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDdkUsQ0FBQyxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsb0JBQW9CLEVBQUU7WUFDckIsYUFBTSxDQUFDLEtBQUssQ0FBQyxpQkFBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDaEUsQ0FBQyxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsZ0JBQWdCLEVBQUU7WUFDakIsSUFBSSxJQUFJLEdBQUcsQ0FBQywyRUFBMkUsRUFBQyxHQUFHLEVBQUMsYUFBYSxDQUFDLENBQUM7WUFDM0csYUFBTSxDQUFDLEtBQUssQ0FBQyxpQkFBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUN6RCxDQUFDLENBQUMsQ0FBQztJQUVQLENBQUMsQ0FBQyxDQUFDO0lBRUgsUUFBUSxDQUFDLFdBQVcsRUFBRTtRQUVsQixFQUFFLENBQUMsY0FBYyxFQUFFO1lBQ2YsYUFBTSxDQUFDLEtBQUssQ0FBQyxpQkFBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUMsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBQ2xGLENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQyxDQUFDLENBQUM7QUFFUCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YXNzZXJ0fSBmcm9tICdjaGFpJztcbmltcG9ydCB7VGVzdGluZ1RpbWV9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdGVzdC9UZXN0aW5nVGltZSc7XG5pbXBvcnQge0NtZGxpbmV9IGZyb20gJy4vQ21kbGluZSc7XG5cblRlc3RpbmdUaW1lLmZyZWV6ZSgpO1xuXG5kZXNjcmliZSgnQ21kbGluZScsIGZ1bmN0aW9uKCkge1xuXG4gICAgZGVzY3JpYmUoJ2dldERvY0FyZycsIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGl0KFwiV2l0aCBubyBkYXRhXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGFzc2VydC5lcXVhbChDbWRsaW5lLmdldERvY0FyZyhbXSksIG51bGwpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdChcIldpdGggYWxsIHdyb25nIGRhdGFcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgYXNzZXJ0LmVxdWFsKENtZGxpbmUuZ2V0RG9jQXJnKFtcImFzZGZcIiwgXCJiYXJcIl0pLCBudWxsKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoXCJXaXRoIG9uZSBQREYgYXJnXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGFzc2VydC5lcXVhbChDbWRsaW5lLmdldERvY0FyZyhbXCJmb28ucGRmXCJdKSwgXCJmb28ucGRmXCIpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdChcIldpdGggdHdvIFBERiBhcmdzXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGFzc2VydC5lcXVhbChDbWRsaW5lLmdldERvY0FyZyhbXCJmb28ucGRmXCIsIFwiYmFyLnBkZlwiXSksIFwiYmFyLnBkZlwiKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXQoXCJXaXRoIG9uZSBjaHRtbCBhcmdcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgYXNzZXJ0LmVxdWFsKENtZGxpbmUuZ2V0RG9jQXJnKFtcImZvby5jaHRtbFwiXSksIFwiZm9vLmNodG1sXCIpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdChcIldpdGggcmVhbCBhcmdzXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxldCBhcmdzID0gW1wiL2hvbWUvYnVydG9uL3Byb2plY3RzL3BvbGFyLWJvb2tzaGVsZi9ub2RlX21vZHVsZXMvZWxlY3Ryb24vZGlzdC9lbGVjdHJvblwiLFwiLlwiLFwiZXhhbXBsZS5wZGZcIl07XG4gICAgICAgICAgICBhc3NlcnQuZXF1YWwoQ21kbGluZS5nZXREb2NBcmcoYXJncyksIFwiZXhhbXBsZS5wZGZcIik7XG4gICAgICAgIH0pO1xuXG4gICAgfSk7XG5cbiAgICBkZXNjcmliZSgnZ2V0VVJMQXJnJywgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgaXQoXCJXaXRoIG9uZSBhcmdcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgYXNzZXJ0LmVxdWFsKENtZGxpbmUuZ2V0VVJMQXJnKFtcImh0dHA6Ly93d3cuY25uLmNvbVwiXSksIFwiaHR0cDovL3d3dy5jbm4uY29tXCIpO1xuICAgICAgICB9KTtcblxuICAgIH0pO1xuXG59KTtcbiJdfQ==