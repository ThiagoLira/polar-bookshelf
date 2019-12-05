"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LogLevel_1 = require("./LogLevel");
const chai_1 = require("chai");
const LogLevels_1 = require("./LogLevels");
describe('LogLevels', function () {
    it("reverse LogLevel", function () {
        chai_1.assert.equal(LogLevels_1.LogLevels.fromName('INFO'), LogLevel_1.LogLevel.INFO);
    });
    it("invalid", function () {
        chai_1.assert.throws(() => LogLevels_1.LogLevels.fromName('wrong-name'));
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9nTGV2ZWxzVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkxvZ0xldmVsc1Rlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5Q0FBb0M7QUFFcEMsK0JBQTRCO0FBQzVCLDJDQUFzQztBQUV0QyxRQUFRLENBQUMsV0FBVyxFQUFFO0lBRWxCLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRTtRQUNuQixhQUFNLENBQUMsS0FBSyxDQUFDLHFCQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLG1CQUFRLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDM0QsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsU0FBUyxFQUFFO1FBQ1YsYUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxxQkFBUyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFBO0lBQ3pELENBQUMsQ0FBQyxDQUFDO0FBRVAsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0xvZ0xldmVsfSBmcm9tICcuL0xvZ0xldmVsJztcblxuaW1wb3J0IHthc3NlcnR9IGZyb20gJ2NoYWknO1xuaW1wb3J0IHtMb2dMZXZlbHN9IGZyb20gJy4vTG9nTGV2ZWxzJztcblxuZGVzY3JpYmUoJ0xvZ0xldmVscycsIGZ1bmN0aW9uKCkge1xuXG4gICAgaXQoXCJyZXZlcnNlIExvZ0xldmVsXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYXNzZXJ0LmVxdWFsKExvZ0xldmVscy5mcm9tTmFtZSgnSU5GTycpLCBMb2dMZXZlbC5JTkZPKVxuICAgIH0pO1xuXG4gICAgaXQoXCJpbnZhbGlkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYXNzZXJ0LnRocm93cygoKSA9PiBMb2dMZXZlbHMuZnJvbU5hbWUoJ3dyb25nLW5hbWUnKSlcbiAgICB9KTtcblxufSk7XG4iXX0=