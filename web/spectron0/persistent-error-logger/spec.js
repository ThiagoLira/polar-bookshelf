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
const Spectron_1 = require("../../js/test/Spectron");
const SpectronSpec_1 = require("../../js/test/SpectronSpec");
const FilePaths_1 = require("polar-shared/src/util/FilePaths");
const Files_1 = require("polar-shared/src/util/Files");
const PolarDataDir_1 = require("../../js/test/PolarDataDir");
const Directories_1 = require("../../js/datastore/Directories");
describe('persistent-error-logger', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield PolarDataDir_1.PolarDataDir.useFreshDirectory('.polar-persistent-error-logger');
        Spectron_1.Spectron.setup(__dirname);
        this.timeout(30000);
        it('test writing errors', function () {
            return __awaiter(this, void 0, void 0, function* () {
                const directories = new Directories_1.Directories();
                yield directories.init();
                chai_1.assert.ok(yield Files_1.Files.existsAsync(directories.logsDir));
                yield SpectronSpec_1.SpectronSpec.create(this.app).waitFor(true);
                const data = yield Files_1.Files.readFileAsync(FilePaths_1.FilePaths.create(directories.logsDir, 'error.log'));
                chai_1.assert.ok(data.indexOf('This is from the main process:') !== -1);
                chai_1.assert.ok(data.indexOf('Fake error in main process') !== -1);
                chai_1.assert.ok(data.indexOf('This is from the renderer process:') !== -1);
                chai_1.assert.ok(data.indexOf('Fake error in the renderer process') !== -1);
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwrQkFBNEI7QUFDNUIscURBQWdEO0FBQ2hELDZEQUF3RDtBQUN4RCwrREFBMEQ7QUFDMUQsdURBQWtEO0FBQ2xELDZEQUF3RDtBQUN4RCxnRUFBMkQ7QUFFM0QsUUFBUSxDQUFDLHlCQUF5QixFQUFFOztRQUVoQyxNQUFNLDJCQUFZLENBQUMsaUJBQWlCLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUV2RSxtQkFBUSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXBCLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRTs7Z0JBRXRCLE1BQU0sV0FBVyxHQUFHLElBQUkseUJBQVcsRUFBRSxDQUFDO2dCQUN0QyxNQUFNLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFFekIsYUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLGFBQUssQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBRXhELE1BQU0sMkJBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFPbEQsTUFBTSxJQUFJLEdBQUcsTUFBTSxhQUFLLENBQUMsYUFBYSxDQUFDLHFCQUFTLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQztnQkFFM0YsYUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGdDQUFnQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDakUsYUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLDRCQUE0QixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDN0QsYUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLG9DQUFvQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDckUsYUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLG9DQUFvQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUV6RSxDQUFDO1NBQUEsQ0FBQyxDQUFDO0lBRVAsQ0FBQztDQUFBLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YXNzZXJ0fSBmcm9tICdjaGFpJztcbmltcG9ydCB7U3BlY3Ryb259IGZyb20gJy4uLy4uL2pzL3Rlc3QvU3BlY3Ryb24nO1xuaW1wb3J0IHtTcGVjdHJvblNwZWN9IGZyb20gJy4uLy4uL2pzL3Rlc3QvU3BlY3Ryb25TcGVjJztcbmltcG9ydCB7RmlsZVBhdGhzfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvRmlsZVBhdGhzJztcbmltcG9ydCB7RmlsZXN9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC9GaWxlcyc7XG5pbXBvcnQge1BvbGFyRGF0YURpcn0gZnJvbSAnLi4vLi4vanMvdGVzdC9Qb2xhckRhdGFEaXInO1xuaW1wb3J0IHtEaXJlY3Rvcmllc30gZnJvbSAnLi4vLi4vanMvZGF0YXN0b3JlL0RpcmVjdG9yaWVzJztcblxuZGVzY3JpYmUoJ3BlcnNpc3RlbnQtZXJyb3ItbG9nZ2VyJywgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICBhd2FpdCBQb2xhckRhdGFEaXIudXNlRnJlc2hEaXJlY3RvcnkoJy5wb2xhci1wZXJzaXN0ZW50LWVycm9yLWxvZ2dlcicpO1xuXG4gICAgU3BlY3Ryb24uc2V0dXAoX19kaXJuYW1lKTtcbiAgICB0aGlzLnRpbWVvdXQoMzAwMDApO1xuXG4gICAgaXQoJ3Rlc3Qgd3JpdGluZyBlcnJvcnMnLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICBjb25zdCBkaXJlY3RvcmllcyA9IG5ldyBEaXJlY3RvcmllcygpO1xuICAgICAgICBhd2FpdCBkaXJlY3Rvcmllcy5pbml0KCk7XG5cbiAgICAgICAgYXNzZXJ0Lm9rKGF3YWl0IEZpbGVzLmV4aXN0c0FzeW5jKGRpcmVjdG9yaWVzLmxvZ3NEaXIpKTtcblxuICAgICAgICBhd2FpdCBTcGVjdHJvblNwZWMuY3JlYXRlKHRoaXMuYXBwKS53YWl0Rm9yKHRydWUpO1xuXG4gICAgICAgIC8vIG5vdyBtYWtlIHN1cmUgdGhlIGRhdGEgaXMgaW4gb3VyIGZpbGUgbm93IHRoYXQgdGhlIGFwcCBzYXlzIHRoZXkgd2VyZVxuICAgICAgICAvLyB3cml0dGVuXG5cbiAgICAgICAgLy8gb2suLi4gcmVhZEZpbGVBc3luYyBkb2Vzbid0IHNlZW0gdG8gdGhyb3cgYW4gZXJyb3IgaWYgdGhlIGZpbGUgZG9lcyBub3QgZXhpc3QuLi5cblxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgRmlsZXMucmVhZEZpbGVBc3luYyhGaWxlUGF0aHMuY3JlYXRlKGRpcmVjdG9yaWVzLmxvZ3NEaXIsICdlcnJvci5sb2cnKSk7XG5cbiAgICAgICAgYXNzZXJ0Lm9rKGRhdGEuaW5kZXhPZignVGhpcyBpcyBmcm9tIHRoZSBtYWluIHByb2Nlc3M6JykgIT09IC0xKTtcbiAgICAgICAgYXNzZXJ0Lm9rKGRhdGEuaW5kZXhPZignRmFrZSBlcnJvciBpbiBtYWluIHByb2Nlc3MnKSAhPT0gLTEpO1xuICAgICAgICBhc3NlcnQub2soZGF0YS5pbmRleE9mKCdUaGlzIGlzIGZyb20gdGhlIHJlbmRlcmVyIHByb2Nlc3M6JykgIT09IC0xKTtcbiAgICAgICAgYXNzZXJ0Lm9rKGRhdGEuaW5kZXhPZignRmFrZSBlcnJvciBpbiB0aGUgcmVuZGVyZXIgcHJvY2VzcycpICE9PSAtMSk7XG5cbiAgICB9KTtcblxufSk7XG4iXX0=