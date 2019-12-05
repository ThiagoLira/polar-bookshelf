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
const BufferWriter_1 = require("./BufferWriter");
const chai_1 = require("chai");
describe('BufferWriter', function () {
    it("basic", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const writer = new BufferWriter_1.BufferWriter();
            yield writer.write("hello");
            yield writer.write("world");
            yield writer.close();
            chai_1.assert.equal(writer.toString(), "helloworld");
        });
    });
    it("no data", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const writer = new BufferWriter_1.BufferWriter();
            yield writer.close();
            chai_1.assert.equal(writer.toString(), "");
        });
    });
    it("one write", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const writer = new BufferWriter_1.BufferWriter();
            yield writer.write("hello");
            yield writer.close();
            chai_1.assert.equal(writer.toString(), "hello");
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnVmZmVyV3JpdGVyVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkJ1ZmZlcldyaXRlclRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxpREFBNEM7QUFDNUMsK0JBQTRCO0FBRTVCLFFBQVEsQ0FBQyxjQUFjLEVBQUU7SUFFckIsRUFBRSxDQUFDLE9BQU8sRUFBRTs7WUFFUixNQUFNLE1BQU0sR0FBRyxJQUFJLDJCQUFZLEVBQUUsQ0FBQztZQUVsQyxNQUFNLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDNUIsTUFBTSxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRTVCLE1BQU0sTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBRXJCLGFBQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBRWxELENBQUM7S0FBQSxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsU0FBUyxFQUFFOztZQUVWLE1BQU0sTUFBTSxHQUFHLElBQUksMkJBQVksRUFBRSxDQUFDO1lBRWxDLE1BQU0sTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBRXJCLGFBQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRXhDLENBQUM7S0FBQSxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsV0FBVyxFQUFFOztZQUVaLE1BQU0sTUFBTSxHQUFHLElBQUksMkJBQVksRUFBRSxDQUFDO1lBQ2xDLE1BQU0sTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUU1QixNQUFNLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUVyQixhQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUU3QyxDQUFDO0tBQUEsQ0FBQyxDQUFDO0FBRVAsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0J1ZmZlcldyaXRlcn0gZnJvbSAnLi9CdWZmZXJXcml0ZXInO1xuaW1wb3J0IHthc3NlcnR9IGZyb20gJ2NoYWknO1xuXG5kZXNjcmliZSgnQnVmZmVyV3JpdGVyJywgZnVuY3Rpb24oKSB7XG5cbiAgICBpdChcImJhc2ljXCIsIGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGNvbnN0IHdyaXRlciA9IG5ldyBCdWZmZXJXcml0ZXIoKTtcblxuICAgICAgICBhd2FpdCB3cml0ZXIud3JpdGUoXCJoZWxsb1wiKTtcbiAgICAgICAgYXdhaXQgd3JpdGVyLndyaXRlKFwid29ybGRcIik7XG5cbiAgICAgICAgYXdhaXQgd3JpdGVyLmNsb3NlKCk7XG5cbiAgICAgICAgYXNzZXJ0LmVxdWFsKHdyaXRlci50b1N0cmluZygpLCBcImhlbGxvd29ybGRcIik7XG5cbiAgICB9KTtcblxuICAgIGl0KFwibm8gZGF0YVwiLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICBjb25zdCB3cml0ZXIgPSBuZXcgQnVmZmVyV3JpdGVyKCk7XG5cbiAgICAgICAgYXdhaXQgd3JpdGVyLmNsb3NlKCk7XG5cbiAgICAgICAgYXNzZXJ0LmVxdWFsKHdyaXRlci50b1N0cmluZygpLCBcIlwiKTtcblxuICAgIH0pO1xuXG4gICAgaXQoXCJvbmUgd3JpdGVcIiwgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgY29uc3Qgd3JpdGVyID0gbmV3IEJ1ZmZlcldyaXRlcigpO1xuICAgICAgICBhd2FpdCB3cml0ZXIud3JpdGUoXCJoZWxsb1wiKTtcblxuICAgICAgICBhd2FpdCB3cml0ZXIuY2xvc2UoKTtcblxuICAgICAgICBhc3NlcnQuZXF1YWwod3JpdGVyLnRvU3RyaW5nKCksIFwiaGVsbG9cIik7XG5cbiAgICB9KTtcblxufSk7XG5cbiJdfQ==