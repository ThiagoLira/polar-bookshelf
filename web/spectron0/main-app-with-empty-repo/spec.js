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
describe('main-app-with-empty-repo', function () {
    return __awaiter(this, void 0, void 0, function* () {
        Spectron_1.Spectron.setup(__dirname);
        this.timeout(300000);
        before(function () {
            return __awaiter(this, void 0, void 0, function* () {
                yield PolarDataDir_1.PolarDataDir.useFreshDirectory('.polar-main-app-with-empty-repo');
            });
        });
        it('create the repository view', function () {
            return __awaiter(this, void 0, void 0, function* () {
                yield SpectronSpec_1.SpectronSpec.create(this.app).waitFor(true);
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxxREFBZ0Q7QUFDaEQsNkRBQXdEO0FBQ3hELDZEQUF3RDtBQUd4RCxRQUFRLENBQUMsMEJBQTBCLEVBQUU7O1FBRWpDLG1CQUFRLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFckIsTUFBTSxDQUFDOztnQkFDSCxNQUFNLDJCQUFZLENBQUMsaUJBQWlCLENBQUMsaUNBQWlDLENBQUMsQ0FBQztZQUM1RSxDQUFDO1NBQUEsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLDRCQUE0QixFQUFFOztnQkFFN0IsTUFBTSwyQkFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRXRELENBQUM7U0FBQSxDQUFDLENBQUM7SUFFUCxDQUFDO0NBQUEsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTcGVjdHJvbn0gZnJvbSAnLi4vLi4vanMvdGVzdC9TcGVjdHJvbic7XG5pbXBvcnQge1NwZWN0cm9uU3BlY30gZnJvbSAnLi4vLi4vanMvdGVzdC9TcGVjdHJvblNwZWMnO1xuaW1wb3J0IHtQb2xhckRhdGFEaXJ9IGZyb20gJy4uLy4uL2pzL3Rlc3QvUG9sYXJEYXRhRGlyJztcblxuXG5kZXNjcmliZSgnbWFpbi1hcHAtd2l0aC1lbXB0eS1yZXBvJywgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICBTcGVjdHJvbi5zZXR1cChfX2Rpcm5hbWUpO1xuICAgIHRoaXMudGltZW91dCgzMDAwMDApO1xuXG4gICAgYmVmb3JlKGFzeW5jIGZ1bmN0aW9uKCkge1xuICAgICAgICBhd2FpdCBQb2xhckRhdGFEaXIudXNlRnJlc2hEaXJlY3RvcnkoJy5wb2xhci1tYWluLWFwcC13aXRoLWVtcHR5LXJlcG8nKTtcbiAgICB9KTtcblxuICAgIGl0KCdjcmVhdGUgdGhlIHJlcG9zaXRvcnkgdmlldycsIGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGF3YWl0IFNwZWN0cm9uU3BlYy5jcmVhdGUodGhpcy5hcHApLndhaXRGb3IodHJ1ZSk7XG5cbiAgICB9KTtcblxufSk7XG4iXX0=