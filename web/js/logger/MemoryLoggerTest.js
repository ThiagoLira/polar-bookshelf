"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MemoryLogger_1 = require("./MemoryLogger");
const Assertions_1 = require("../test/Assertions");
const TestingTime_1 = require("polar-shared/src/test/TestingTime");
describe('MemoryLogger', function () {
    beforeEach(function () {
        TestingTime_1.TestingTime.freeze();
    });
    it("basic", function () {
        const memoryLogger = new MemoryLogger_1.MemoryLogger();
        memoryLogger.info("hello", "world");
        const expected = [
            {
                "timestamp": "2012-03-02T11:38:49.321Z",
                "idx": 0,
                "level": "info",
                "msg": "hello",
                "args": [
                    "world"
                ]
            }
        ];
        Assertions_1.assertJSON(memoryLogger.toJSON(), expected);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVtb3J5TG9nZ2VyVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIk1lbW9yeUxvZ2dlclRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpREFBNEM7QUFDNUMsbURBQThDO0FBQzlDLG1FQUE4RDtBQUU5RCxRQUFRLENBQUMsY0FBYyxFQUFFO0lBRXJCLFVBQVUsQ0FBQztRQUNQLHlCQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDekIsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsT0FBTyxFQUFFO1FBRVIsTUFBTSxZQUFZLEdBQUcsSUFBSSwyQkFBWSxFQUFFLENBQUM7UUFFeEMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFcEMsTUFBTSxRQUFRLEdBQUc7WUFDYjtnQkFDSSxXQUFXLEVBQUUsMEJBQTBCO2dCQUN2QyxLQUFLLEVBQUUsQ0FBQztnQkFDUixPQUFPLEVBQUUsTUFBTTtnQkFDZixLQUFLLEVBQUUsT0FBTztnQkFDZCxNQUFNLEVBQUU7b0JBQ0osT0FBTztpQkFDVjthQUNKO1NBQ0osQ0FBQztRQUVGLHVCQUFVLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBRWhELENBQUMsQ0FBQyxDQUFDO0FBRVAsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge01lbW9yeUxvZ2dlcn0gZnJvbSBcIi4vTWVtb3J5TG9nZ2VyXCI7XG5pbXBvcnQge2Fzc2VydEpTT059IGZyb20gXCIuLi90ZXN0L0Fzc2VydGlvbnNcIjtcbmltcG9ydCB7VGVzdGluZ1RpbWV9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdGVzdC9UZXN0aW5nVGltZSc7XG5cbmRlc2NyaWJlKCdNZW1vcnlMb2dnZXInLCBmdW5jdGlvbigpIHtcblxuICAgIGJlZm9yZUVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIFRlc3RpbmdUaW1lLmZyZWV6ZSgpO1xuICAgIH0pO1xuXG4gICAgaXQoXCJiYXNpY1wiLCBmdW5jdGlvbigpIHtcblxuICAgICAgICBjb25zdCBtZW1vcnlMb2dnZXIgPSBuZXcgTWVtb3J5TG9nZ2VyKCk7XG5cbiAgICAgICAgbWVtb3J5TG9nZ2VyLmluZm8oXCJoZWxsb1wiLCBcIndvcmxkXCIpO1xuXG4gICAgICAgIGNvbnN0IGV4cGVjdGVkID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwidGltZXN0YW1wXCI6IFwiMjAxMi0wMy0wMlQxMTozODo0OS4zMjFaXCIsXG4gICAgICAgICAgICAgICAgXCJpZHhcIjogMCxcbiAgICAgICAgICAgICAgICBcImxldmVsXCI6IFwiaW5mb1wiLFxuICAgICAgICAgICAgICAgIFwibXNnXCI6IFwiaGVsbG9cIixcbiAgICAgICAgICAgICAgICBcImFyZ3NcIjogW1xuICAgICAgICAgICAgICAgICAgICBcIndvcmxkXCJcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgIF07XG5cbiAgICAgICAgYXNzZXJ0SlNPTihtZW1vcnlMb2dnZXIudG9KU09OKCksIGV4cGVjdGVkKTtcblxuICAgIH0pO1xuXG59KTtcbiJdfQ==