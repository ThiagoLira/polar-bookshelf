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
const PolarDataDir_1 = require("../../js/test/PolarDataDir");
describe('Browser Capture', function () {
    Spectron_1.Spectron.setup(__dirname);
    this.timeout(30000);
    before(function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield PolarDataDir_1.PolarDataDir.useFreshDirectory('.polar-browser-capture');
        });
    });
    it('Test browser capturing and writing to a file.', function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield SpectronSpec_1.SpectronSpec.create(this.app).waitFor(true);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxxREFBZ0Q7QUFDaEQsNkRBQXdEO0FBQ3hELDZEQUF3RDtBQUt4RCxRQUFRLENBQUMsaUJBQWlCLEVBQUU7SUFFeEIsbUJBQVEsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUVwQixNQUFNLENBQUM7O1lBQ0gsTUFBTSwyQkFBWSxDQUFDLGlCQUFpQixDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDbkUsQ0FBQztLQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQywrQ0FBK0MsRUFBRTs7WUFFaEQsTUFBTSwyQkFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXRELENBQUM7S0FBQSxDQUFDLENBQUM7QUFFUCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U3BlY3Ryb259IGZyb20gJy4uLy4uL2pzL3Rlc3QvU3BlY3Ryb24nO1xuaW1wb3J0IHtTcGVjdHJvblNwZWN9IGZyb20gJy4uLy4uL2pzL3Rlc3QvU3BlY3Ryb25TcGVjJztcbmltcG9ydCB7UG9sYXJEYXRhRGlyfSBmcm9tICcuLi8uLi9qcy90ZXN0L1BvbGFyRGF0YURpcic7XG5cbi8vIHdlIGNhbiBjaGFuZ2UgdGhlIHBvbGFyIGRhdGEgZGlyIHdpdGggdGhlIGZvbGxvd2luZ1xuLy8gUG9sYXJEYXRhRGlyLnVzZUZyZXNoRGlyZWN0b3J5KCcucG9sYXItcGVyc2lzdGVudC1lcnJvci1sb2dnZXInKTtcblxuZGVzY3JpYmUoJ0Jyb3dzZXIgQ2FwdHVyZScsIGZ1bmN0aW9uKCkge1xuXG4gICAgU3BlY3Ryb24uc2V0dXAoX19kaXJuYW1lKTtcbiAgICB0aGlzLnRpbWVvdXQoMzAwMDApO1xuXG4gICAgYmVmb3JlKGFzeW5jIGZ1bmN0aW9uKCkge1xuICAgICAgICBhd2FpdCBQb2xhckRhdGFEaXIudXNlRnJlc2hEaXJlY3RvcnkoJy5wb2xhci1icm93c2VyLWNhcHR1cmUnKTtcbiAgICB9KTtcblxuICAgIGl0KCdUZXN0IGJyb3dzZXIgY2FwdHVyaW5nIGFuZCB3cml0aW5nIHRvIGEgZmlsZS4nLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICBhd2FpdCBTcGVjdHJvblNwZWMuY3JlYXRlKHRoaXMuYXBwKS53YWl0Rm9yKHRydWUpO1xuXG4gICAgfSk7XG5cbn0pO1xuIl19