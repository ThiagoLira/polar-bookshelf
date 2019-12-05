"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const Text_1 = require("./Text");
describe('Text', function () {
    it("With no input text", function () {
        return __awaiter(this, void 0, void 0, function* () {
            chai_1.assert.equal(Text_1.Text.indent("", "    "), "    ");
        });
    });
    it("With one line", function () {
        return __awaiter(this, void 0, void 0, function* () {
            chai_1.assert.equal(Text_1.Text.indent("hello\nworld", "  "), "  hello\n  world");
        });
    });
    it("With two lines", function () {
        return __awaiter(this, void 0, void 0, function* () {
            chai_1.assert.equal(Text_1.Text.indent("hello\nworld\n", "  "), "  hello\n  world\n  ");
        });
    });
    it("With one line withOUT newline", function () {
        return __awaiter(this, void 0, void 0, function* () {
            chai_1.assert.equal(Text_1.Text.indent("hello", "  "), "  hello");
        });
    });
    it("With one line WITH newline", function () {
        return __awaiter(this, void 0, void 0, function* () {
            chai_1.assert.equal(Text_1.Text.indent("hello\n", "  "), "  hello\n  ");
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGV4dFRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJUZXh0VGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLCtCQUE0QjtBQUM1QixpQ0FBNEI7QUFFNUIsUUFBUSxDQUFDLE1BQU0sRUFBRTtJQUViLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRTs7WUFFckIsYUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUVsRCxDQUFDO0tBQUEsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLGVBQWUsRUFBRTs7WUFFaEIsYUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBRXhFLENBQUM7S0FBQSxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsZ0JBQWdCLEVBQUU7O1lBRWpCLGFBQU0sQ0FBQyxLQUFLLENBQUMsV0FBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDO1FBRTlFLENBQUM7S0FBQSxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsK0JBQStCLEVBQUU7O1lBRWhDLGFBQU0sQ0FBQyxLQUFLLENBQUMsV0FBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFFeEQsQ0FBQztLQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyw0QkFBNEIsRUFBRTs7WUFFN0IsYUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUU5RCxDQUFDO0tBQUEsQ0FBQyxDQUFDO0FBRVAsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Fzc2VydH0gZnJvbSAnY2hhaSc7XG5pbXBvcnQge1RleHR9IGZyb20gXCIuL1RleHRcIjtcblxuZGVzY3JpYmUoJ1RleHQnLCBmdW5jdGlvbigpIHtcblxuICAgIGl0KFwiV2l0aCBubyBpbnB1dCB0ZXh0XCIsIGFzeW5jIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBhc3NlcnQuZXF1YWwoVGV4dC5pbmRlbnQoXCJcIiwgXCIgICAgXCIpLCBcIiAgICBcIik7XG5cbiAgICB9KTtcblxuICAgIGl0KFwiV2l0aCBvbmUgbGluZVwiLCBhc3luYyBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgYXNzZXJ0LmVxdWFsKFRleHQuaW5kZW50KFwiaGVsbG9cXG53b3JsZFwiLCBcIiAgXCIpLCBcIiAgaGVsbG9cXG4gIHdvcmxkXCIpO1xuXG4gICAgfSk7XG5cbiAgICBpdChcIldpdGggdHdvIGxpbmVzXCIsIGFzeW5jIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBhc3NlcnQuZXF1YWwoVGV4dC5pbmRlbnQoXCJoZWxsb1xcbndvcmxkXFxuXCIsIFwiICBcIiksIFwiICBoZWxsb1xcbiAgd29ybGRcXG4gIFwiKTtcblxuICAgIH0pO1xuXG4gICAgaXQoXCJXaXRoIG9uZSBsaW5lIHdpdGhPVVQgbmV3bGluZVwiLCBhc3luYyBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgYXNzZXJ0LmVxdWFsKFRleHQuaW5kZW50KFwiaGVsbG9cIiwgXCIgIFwiKSwgXCIgIGhlbGxvXCIpO1xuXG4gICAgfSk7XG5cbiAgICBpdChcIldpdGggb25lIGxpbmUgV0lUSCBuZXdsaW5lXCIsIGFzeW5jIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBhc3NlcnQuZXF1YWwoVGV4dC5pbmRlbnQoXCJoZWxsb1xcblwiLCBcIiAgXCIpLCBcIiAgaGVsbG9cXG4gIFwiKTtcblxuICAgIH0pO1xuXG59KTtcbiJdfQ==