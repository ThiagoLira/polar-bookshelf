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
const Spectron_1 = require("../../js/test/Spectron");
const SpectronSpec_1 = require("../../js/test/SpectronSpec");
const FirebaseTesting_1 = require("../../js/firebase/FirebaseTesting");
describe('firebase-groups', function () {
    Spectron_1.Spectron.setup(__dirname);
    this.timeout(600000);
    it('valid users', function () {
        return __awaiter(this, void 0, void 0, function* () {
            FirebaseTesting_1.FirebaseTesting.validateUsers();
        });
    });
    it('basic tests', function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield SpectronSpec_1.SpectronSpec.create(this.app).waitFor(true);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxxREFBZ0Q7QUFDaEQsNkRBQXdEO0FBQ3hELHVFQUFrRTtBQUVsRSxRQUFRLENBQUMsaUJBQWlCLEVBQUU7SUFFeEIsbUJBQVEsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUVyQixFQUFFLENBQUMsYUFBYSxFQUFFOztZQUNkLGlDQUFlLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDcEMsQ0FBQztLQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxhQUFhLEVBQUU7O1lBQ2QsTUFBTSwyQkFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RELENBQUM7S0FBQSxDQUFDLENBQUM7QUFFUCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U3BlY3Ryb259IGZyb20gJy4uLy4uL2pzL3Rlc3QvU3BlY3Ryb24nO1xuaW1wb3J0IHtTcGVjdHJvblNwZWN9IGZyb20gJy4uLy4uL2pzL3Rlc3QvU3BlY3Ryb25TcGVjJztcbmltcG9ydCB7RmlyZWJhc2VUZXN0aW5nfSBmcm9tIFwiLi4vLi4vanMvZmlyZWJhc2UvRmlyZWJhc2VUZXN0aW5nXCI7XG5cbmRlc2NyaWJlKCdmaXJlYmFzZS1ncm91cHMnLCBmdW5jdGlvbigpIHtcblxuICAgIFNwZWN0cm9uLnNldHVwKF9fZGlybmFtZSk7XG4gICAgdGhpcy50aW1lb3V0KDYwMDAwMCk7XG5cbiAgICBpdCgndmFsaWQgdXNlcnMnLCBhc3luYyBmdW5jdGlvbigpIHtcbiAgICAgICAgRmlyZWJhc2VUZXN0aW5nLnZhbGlkYXRlVXNlcnMoKTtcbiAgICB9KTtcblxuICAgIGl0KCdiYXNpYyB0ZXN0cycsIGFzeW5jIGZ1bmN0aW9uKCkge1xuICAgICAgICBhd2FpdCBTcGVjdHJvblNwZWMuY3JlYXRlKHRoaXMuYXBwKS53YWl0Rm9yKHRydWUpO1xuICAgIH0pO1xuXG59KTtcbiJdfQ==