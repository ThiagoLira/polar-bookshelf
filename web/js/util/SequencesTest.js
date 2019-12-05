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
const TestingTime_1 = require("polar-shared/src/test/TestingTime");
const Sequences_1 = require("./Sequences");
describe('Sequences', function () {
    it("Large machine and nonces", function () {
        return __awaiter(this, void 0, void 0, function* () {
            TestingTime_1.TestingTime.freeze();
            Sequences_1.Sequences.MACHINE = 999999999999;
            Sequences_1.Sequences.NONCE = 999999999999;
            const seq = Sequences_1.Sequences.create();
            chai_1.assert.equal(seq, "z2012-03-02T11:38:49.321Z+000000-999999999999");
        });
    });
    it("Two issued", function () {
        return __awaiter(this, void 0, void 0, function* () {
            TestingTime_1.TestingTime.freeze();
            Sequences_1.Sequences.MACHINE = 123;
            Sequences_1.Sequences.NONCE = 0;
            chai_1.assert.equal(Sequences_1.Sequences.create(), "z2012-03-02T11:38:49.321Z+000000-000000000123");
            chai_1.assert.equal(Sequences_1.Sequences.create(), "z2012-03-02T11:38:49.321Z+000001-000000000123");
        });
    });
    it("Small machine and nonces", function () {
        return __awaiter(this, void 0, void 0, function* () {
            TestingTime_1.TestingTime.freeze();
            Sequences_1.Sequences.MACHINE = 0;
            Sequences_1.Sequences.NONCE = 0;
            const seq = Sequences_1.Sequences.create();
            chai_1.assert.equal(seq, "z2012-03-02T11:38:49.321Z+000000-000000000000");
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VxdWVuY2VzVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlNlcXVlbmNlc1Rlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwrQkFBNEI7QUFHNUIsbUVBQThEO0FBQzlELDJDQUFzQztBQUl0QyxRQUFRLENBQUMsV0FBVyxFQUFFO0lBRWxCLEVBQUUsQ0FBQywwQkFBMEIsRUFBRTs7WUFFM0IseUJBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUVyQixxQkFBUyxDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUM7WUFDakMscUJBQVMsQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDO1lBRS9CLE1BQU0sR0FBRyxHQUFHLHFCQUFTLENBQUMsTUFBTSxFQUFFLENBQUM7WUFFL0IsYUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsK0NBQStDLENBQUMsQ0FBQztRQUV2RSxDQUFDO0tBQUEsQ0FBQyxDQUFDO0lBR0gsRUFBRSxDQUFDLFlBQVksRUFBRTs7WUFFYix5QkFBVyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBRXJCLHFCQUFTLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztZQUN4QixxQkFBUyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7WUFFcEIsYUFBTSxDQUFDLEtBQUssQ0FBQyxxQkFBUyxDQUFDLE1BQU0sRUFBRSxFQUFFLCtDQUErQyxDQUFDLENBQUM7WUFDbEYsYUFBTSxDQUFDLEtBQUssQ0FBQyxxQkFBUyxDQUFDLE1BQU0sRUFBRSxFQUFFLCtDQUErQyxDQUFDLENBQUM7UUFFdEYsQ0FBQztLQUFBLENBQUMsQ0FBQztJQUdILEVBQUUsQ0FBQywwQkFBMEIsRUFBRTs7WUFFM0IseUJBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUVyQixxQkFBUyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7WUFDdEIscUJBQVMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBRXBCLE1BQU0sR0FBRyxHQUFHLHFCQUFTLENBQUMsTUFBTSxFQUFFLENBQUM7WUFFL0IsYUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsK0NBQStDLENBQUMsQ0FBQztRQUV2RSxDQUFDO0tBQUEsQ0FBQyxDQUFDO0FBRVAsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Fzc2VydH0gZnJvbSAnY2hhaSc7XG5pbXBvcnQge1Byb2dyZXNzQ2FsY3VsYXRvcn0gZnJvbSAnLi9Qcm9ncmVzc0NhbGN1bGF0b3InO1xuaW1wb3J0IHtSZXNvbHZhYmxlUHJvbWlzZX0gZnJvbSAnLi9SZXNvbHZhYmxlUHJvbWlzZSc7XG5pbXBvcnQge1Rlc3RpbmdUaW1lfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3Rlc3QvVGVzdGluZ1RpbWUnO1xuaW1wb3J0IHtTZXF1ZW5jZXN9IGZyb20gJy4vU2VxdWVuY2VzJztcbmltcG9ydCB7SVNPRGF0ZVRpbWVTdHJpbmdzfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL21ldGFkYXRhL0lTT0RhdGVUaW1lU3RyaW5ncyc7XG5cblxuZGVzY3JpYmUoJ1NlcXVlbmNlcycsIGZ1bmN0aW9uKCkge1xuXG4gICAgaXQoXCJMYXJnZSBtYWNoaW5lIGFuZCBub25jZXNcIiwgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgVGVzdGluZ1RpbWUuZnJlZXplKCk7XG5cbiAgICAgICAgU2VxdWVuY2VzLk1BQ0hJTkUgPSA5OTk5OTk5OTk5OTk7XG4gICAgICAgIFNlcXVlbmNlcy5OT05DRSA9IDk5OTk5OTk5OTk5OTtcblxuICAgICAgICBjb25zdCBzZXEgPSBTZXF1ZW5jZXMuY3JlYXRlKCk7XG5cbiAgICAgICAgYXNzZXJ0LmVxdWFsKHNlcSwgXCJ6MjAxMi0wMy0wMlQxMTozODo0OS4zMjFaKzAwMDAwMC05OTk5OTk5OTk5OTlcIik7XG5cbiAgICB9KTtcblxuXG4gICAgaXQoXCJUd28gaXNzdWVkXCIsIGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIFRlc3RpbmdUaW1lLmZyZWV6ZSgpO1xuXG4gICAgICAgIFNlcXVlbmNlcy5NQUNISU5FID0gMTIzO1xuICAgICAgICBTZXF1ZW5jZXMuTk9OQ0UgPSAwO1xuXG4gICAgICAgIGFzc2VydC5lcXVhbChTZXF1ZW5jZXMuY3JlYXRlKCksIFwiejIwMTItMDMtMDJUMTE6Mzg6NDkuMzIxWiswMDAwMDAtMDAwMDAwMDAwMTIzXCIpO1xuICAgICAgICBhc3NlcnQuZXF1YWwoU2VxdWVuY2VzLmNyZWF0ZSgpLCBcInoyMDEyLTAzLTAyVDExOjM4OjQ5LjMyMVorMDAwMDAxLTAwMDAwMDAwMDEyM1wiKTtcblxuICAgIH0pO1xuXG5cbiAgICBpdChcIlNtYWxsIG1hY2hpbmUgYW5kIG5vbmNlc1wiLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICBUZXN0aW5nVGltZS5mcmVlemUoKTtcblxuICAgICAgICBTZXF1ZW5jZXMuTUFDSElORSA9IDA7XG4gICAgICAgIFNlcXVlbmNlcy5OT05DRSA9IDA7XG5cbiAgICAgICAgY29uc3Qgc2VxID0gU2VxdWVuY2VzLmNyZWF0ZSgpO1xuXG4gICAgICAgIGFzc2VydC5lcXVhbChzZXEsIFwiejIwMTItMDMtMDJUMTE6Mzg6NDkuMzIxWiswMDAwMDAtMDAwMDAwMDAwMDAwXCIpO1xuXG4gICAgfSk7XG5cbn0pO1xuXG5cbiJdfQ==