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
describe('ui-notifier', function () {
    Spectron_1.Spectron.setup(__dirname);
    this.timeout(30000);
    it('Verify that messages are sent and received properly', function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield SpectronSpec_1.SpectronSpec.create(this.app).waitFor(true);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxxREFBZ0Q7QUFDaEQsNkRBQXdEO0FBS3hELFFBQVEsQ0FBQyxhQUFhLEVBQUU7SUFFcEIsbUJBQVEsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUVwQixFQUFFLENBQUMscURBQXFELEVBQUU7O1lBRXRELE1BQU0sMkJBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV0RCxDQUFDO0tBQUEsQ0FBQyxDQUFDO0FBRVAsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NwZWN0cm9ufSBmcm9tICcuLi8uLi9qcy90ZXN0L1NwZWN0cm9uJztcbmltcG9ydCB7U3BlY3Ryb25TcGVjfSBmcm9tICcuLi8uLi9qcy90ZXN0L1NwZWN0cm9uU3BlYyc7XG5cbi8vIHdlIGNhbiBjaGFuZ2UgdGhlIHBvbGFyIGRhdGEgZGlyIHdpdGggdGhlIGZvbGxvd2luZ1xuLy8gUG9sYXJEYXRhRGlyLnVzZUZyZXNoRGlyZWN0b3J5KCcucG9sYXItcGVyc2lzdGVudC1lcnJvci1sb2dnZXInKTtcblxuZGVzY3JpYmUoJ3VpLW5vdGlmaWVyJywgZnVuY3Rpb24oKSB7XG5cbiAgICBTcGVjdHJvbi5zZXR1cChfX2Rpcm5hbWUpO1xuICAgIHRoaXMudGltZW91dCgzMDAwMCk7XG5cbiAgICBpdCgnVmVyaWZ5IHRoYXQgbWVzc2FnZXMgYXJlIHNlbnQgYW5kIHJlY2VpdmVkIHByb3Blcmx5JywgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgYXdhaXQgU3BlY3Ryb25TcGVjLmNyZWF0ZSh0aGlzLmFwcCkud2FpdEZvcih0cnVlKTtcblxuICAgIH0pO1xuXG59KTtcbiJdfQ==