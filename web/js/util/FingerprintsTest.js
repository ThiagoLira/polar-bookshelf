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
const Fingerprints_1 = require("./Fingerprints");
const chai_1 = require("chai");
describe('Fingerprints', function () {
    it("toFilename", function () {
        return __awaiter(this, void 0, void 0, function* () {
            chai_1.assert.equal(Fingerprints_1.Fingerprints.toFilename("hello.chtml", "0x0001"), "hello-0x0001.chtml");
        });
    });
    it("fromFilename", function () {
        return __awaiter(this, void 0, void 0, function* () {
            chai_1.assert.equal(Fingerprints_1.Fingerprints.fromFilename("hello-0x0001.chtml"), "0x0001");
        });
    });
    it("create", function () {
        return __awaiter(this, void 0, void 0, function* () {
            chai_1.assert.equal(Fingerprints_1.Fingerprints.create("xxxxx"), "1Ufomfbkk3Js2YGDZr4c");
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmluZ2VycHJpbnRzVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkZpbmdlcnByaW50c1Rlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxpREFBNEM7QUFFNUMsK0JBQTRCO0FBRTVCLFFBQVEsQ0FBQyxjQUFjLEVBQUU7SUFFckIsRUFBRSxDQUFDLFlBQVksRUFBRTs7WUFFYixhQUFNLENBQUMsS0FBSyxDQUFDLDJCQUFZLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBRXpGLENBQUM7S0FBQSxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsY0FBYyxFQUFFOztZQUVmLGFBQU0sQ0FBQyxLQUFLLENBQUMsMkJBQVksQ0FBQyxZQUFZLENBQUMsb0JBQW9CLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUU1RSxDQUFDO0tBQUEsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLFFBQVEsRUFBRTs7WUFFVCxhQUFNLENBQUMsS0FBSyxDQUFDLDJCQUFZLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLHNCQUFzQixDQUFDLENBQUM7UUFFdkUsQ0FBQztLQUFBLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtGaW5nZXJwcmludHN9IGZyb20gJy4vRmluZ2VycHJpbnRzJztcblxuaW1wb3J0IHthc3NlcnR9IGZyb20gJ2NoYWknO1xuXG5kZXNjcmliZSgnRmluZ2VycHJpbnRzJywgZnVuY3Rpb24oKSB7XG5cbiAgICBpdChcInRvRmlsZW5hbWVcIiwgYXN5bmMgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGFzc2VydC5lcXVhbChGaW5nZXJwcmludHMudG9GaWxlbmFtZShcImhlbGxvLmNodG1sXCIsIFwiMHgwMDAxXCIpLCBcImhlbGxvLTB4MDAwMS5jaHRtbFwiKTtcblxuICAgIH0pO1xuXG4gICAgaXQoXCJmcm9tRmlsZW5hbWVcIiwgYXN5bmMgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGFzc2VydC5lcXVhbChGaW5nZXJwcmludHMuZnJvbUZpbGVuYW1lKFwiaGVsbG8tMHgwMDAxLmNodG1sXCIpLCBcIjB4MDAwMVwiKTtcblxuICAgIH0pO1xuXG4gICAgaXQoXCJjcmVhdGVcIiwgYXN5bmMgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGFzc2VydC5lcXVhbChGaW5nZXJwcmludHMuY3JlYXRlKFwieHh4eHhcIiksIFwiMVVmb21mYmtrM0pzMllHRFpyNGNcIik7XG5cbiAgICB9KTtcblxufSk7XG4iXX0=