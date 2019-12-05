"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const ArgsParser_1 = require("./ArgsParser");
describe('ArgsParser', function () {
    describe('_toKey', function () {
        it("basic", function () {
            chai_1.assert.equal(ArgsParser_1.ArgsParser._toKey("--foo"), "foo");
        });
        it("basic with upper", function () {
            chai_1.assert.equal(ArgsParser_1.ArgsParser._toKey("--enable-foo"), "enableFoo");
        });
    });
    describe('parse', function () {
        it("basic", function () {
            let args = ArgsParser_1.ArgsParser.parse(["foo", "bar", "--cat=dog", "--enable-foo=true"]);
            chai_1.assert.deepEqual(args, {
                cat: 'dog',
                enableFoo: true
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXJnc1BhcnNlclRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJBcmdzUGFyc2VyVGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUE0QjtBQUM1Qiw2Q0FBd0M7QUFFeEMsUUFBUSxDQUFDLFlBQVksRUFBRTtJQUVuQixRQUFRLENBQUMsUUFBUSxFQUFFO1FBRWYsRUFBRSxDQUFDLE9BQU8sRUFBRTtZQUVSLGFBQU0sQ0FBQyxLQUFLLENBQUMsdUJBQVUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFcEQsQ0FBQyxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsa0JBQWtCLEVBQUU7WUFDbkIsYUFBTSxDQUFDLEtBQUssQ0FBQyx1QkFBVSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUNqRSxDQUFDLENBQUMsQ0FBQztJQUVQLENBQUMsQ0FBQyxDQUFDO0lBRUgsUUFBUSxDQUFDLE9BQU8sRUFBRTtRQUVkLEVBQUUsQ0FBQyxPQUFPLEVBQUU7WUFFUixJQUFJLElBQUksR0FBRyx1QkFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixDQUFDLENBQUMsQ0FBQztZQUU5RSxhQUFNLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRTtnQkFDbkIsR0FBRyxFQUFFLEtBQUs7Z0JBQ1YsU0FBUyxFQUFFLElBQUk7YUFDbEIsQ0FBQyxDQUFDO1FBRVAsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDLENBQUMsQ0FBQztBQUdQLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthc3NlcnR9IGZyb20gXCJjaGFpXCI7XG5pbXBvcnQge0FyZ3NQYXJzZXJ9IGZyb20gXCIuL0FyZ3NQYXJzZXJcIjtcblxuZGVzY3JpYmUoJ0FyZ3NQYXJzZXInLCBmdW5jdGlvbigpIHtcblxuICAgIGRlc2NyaWJlKCdfdG9LZXknLCBmdW5jdGlvbigpIHtcblxuICAgICAgICBpdChcImJhc2ljXCIsIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgYXNzZXJ0LmVxdWFsKEFyZ3NQYXJzZXIuX3RvS2V5KFwiLS1mb29cIiksIFwiZm9vXCIpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0KFwiYmFzaWMgd2l0aCB1cHBlclwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBhc3NlcnQuZXF1YWwoQXJnc1BhcnNlci5fdG9LZXkoXCItLWVuYWJsZS1mb29cIiksIFwiZW5hYmxlRm9vXCIpO1xuICAgICAgICB9KTtcblxuICAgIH0pO1xuXG4gICAgZGVzY3JpYmUoJ3BhcnNlJywgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgaXQoXCJiYXNpY1wiLCBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIGxldCBhcmdzID0gQXJnc1BhcnNlci5wYXJzZShbXCJmb29cIiwgXCJiYXJcIiwgXCItLWNhdD1kb2dcIiwgXCItLWVuYWJsZS1mb289dHJ1ZVwiXSk7XG5cbiAgICAgICAgICAgIGFzc2VydC5kZWVwRXF1YWwoYXJncywge1xuICAgICAgICAgICAgICAgIGNhdDogJ2RvZycsXG4gICAgICAgICAgICAgICAgZW5hYmxlRm9vOiB0cnVlXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9KTtcblxuICAgIH0pO1xuXG5cbn0pO1xuIl19