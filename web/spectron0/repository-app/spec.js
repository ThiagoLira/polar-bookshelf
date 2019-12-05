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
describe('Repository App', function () {
    Spectron_1.Spectron.setup(__dirname);
    it('basic', function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield SpectronSpec_1.SpectronSpec.create(this.app).waitFor(true);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxxREFBZ0Q7QUFDaEQsNkRBQXdEO0FBRXhELFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRTtJQUV2QixtQkFBUSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUUxQixFQUFFLENBQUMsT0FBTyxFQUFFOztZQUNSLE1BQU0sMkJBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0RCxDQUFDO0tBQUEsQ0FBQyxDQUFDO0FBRVAsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NwZWN0cm9ufSBmcm9tICcuLi8uLi9qcy90ZXN0L1NwZWN0cm9uJztcbmltcG9ydCB7U3BlY3Ryb25TcGVjfSBmcm9tICcuLi8uLi9qcy90ZXN0L1NwZWN0cm9uU3BlYyc7XG5cbmRlc2NyaWJlKCdSZXBvc2l0b3J5IEFwcCcsIGZ1bmN0aW9uKCkge1xuXG4gICAgU3BlY3Ryb24uc2V0dXAoX19kaXJuYW1lKTtcblxuICAgIGl0KCdiYXNpYycsIGFzeW5jIGZ1bmN0aW9uKCkge1xuICAgICAgICBhd2FpdCBTcGVjdHJvblNwZWMuY3JlYXRlKHRoaXMuYXBwKS53YWl0Rm9yKHRydWUpO1xuICAgIH0pO1xuXG59KTtcbiJdfQ==