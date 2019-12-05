"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const Line_1 = require("./Line");
const Assertions_1 = require("../test/Assertions");
describe('Line', function () {
    it("length", function () {
        const line = new Line_1.Line(10, 20);
        chai_1.assert.equal(line.length, 10);
        const expected = {
            "start": 10,
            "end": 20,
            "length": 10
        };
        Assertions_1.assertJSON(line, expected, undefined, true);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGluZVRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJMaW5lVGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUE0QjtBQUM1QixpQ0FBNEI7QUFDNUIsbURBQThDO0FBRTlDLFFBQVEsQ0FBQyxNQUFNLEVBQUU7SUFFYixFQUFFLENBQUMsUUFBUSxFQUFFO1FBRVQsTUFBTSxJQUFJLEdBQUcsSUFBSSxXQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzlCLGFBQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztRQUU5QixNQUFNLFFBQVEsR0FBRztZQUNiLE9BQU8sRUFBRSxFQUFFO1lBQ1gsS0FBSyxFQUFFLEVBQUU7WUFDVCxRQUFRLEVBQUUsRUFBRTtTQUNmLENBQUM7UUFFRix1QkFBVSxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBRWhELENBQUMsQ0FBQyxDQUFDO0FBRVAsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Fzc2VydH0gZnJvbSAnY2hhaSc7XG5pbXBvcnQge0xpbmV9IGZyb20gJy4vTGluZSc7XG5pbXBvcnQge2Fzc2VydEpTT059IGZyb20gJy4uL3Rlc3QvQXNzZXJ0aW9ucyc7XG5cbmRlc2NyaWJlKCdMaW5lJywgZnVuY3Rpb24oKSB7XG5cbiAgICBpdChcImxlbmd0aFwiLCBmdW5jdGlvbigpIHtcblxuICAgICAgICBjb25zdCBsaW5lID0gbmV3IExpbmUoMTAsIDIwKTtcbiAgICAgICAgYXNzZXJ0LmVxdWFsKGxpbmUubGVuZ3RoLCAxMCk7XG5cbiAgICAgICAgY29uc3QgZXhwZWN0ZWQgPSB7XG4gICAgICAgICAgICBcInN0YXJ0XCI6IDEwLFxuICAgICAgICAgICAgXCJlbmRcIjogMjAsXG4gICAgICAgICAgICBcImxlbmd0aFwiOiAxMFxuICAgICAgICB9O1xuXG4gICAgICAgIGFzc2VydEpTT04obGluZSwgZXhwZWN0ZWQsIHVuZGVmaW5lZCwgdHJ1ZSk7XG5cbiAgICB9KTtcblxufSk7XG4iXX0=