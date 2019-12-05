"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EmailAddresses_1 = require("./EmailAddresses");
const Assertions_1 = require("../test/Assertions");
describe('EmailAddress', function () {
    it("basic", function () {
        const text = "Kevin Burton <kevin@example.com>, \"Michaelson, Frank\" <frank@example.com>, alice@example.com";
        const parsed = EmailAddresses_1.EmailAddresses.parseList(text);
        Assertions_1.assertJSON(parsed, [
            {
                "name": "Kevin Burton",
                "address": "kevin@example.com"
            },
            {
                "name": "Michaelson, Frank",
                "address": "frank@example.com"
            },
            {
                "address": "alice@example.com"
            }
        ]);
    });
    it("basic with newlines", function () {
        const text = "Kevin Burton <kevin@example.com>, \n\"Michaelson, Frank\" <frank@example.com>, \nalice@example.com";
        console.log(text);
        const parsed = EmailAddresses_1.EmailAddresses.parseList(text);
        Assertions_1.assertJSON(parsed, [
            {
                "name": "Kevin Burton",
                "address": "kevin@example.com"
            },
            {
                "name": "Michaelson, Frank",
                "address": "frank@example.com"
            },
            {
                "address": "alice@example.com"
            }
        ]);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW1haWxBZGRyZXNzZXNUZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRW1haWxBZGRyZXNzZXNUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscURBQWdEO0FBQ2hELG1EQUE4QztBQUU5QyxRQUFRLENBQUMsY0FBYyxFQUFFO0lBRXJCLEVBQUUsQ0FBQyxPQUFPLEVBQUU7UUFFUixNQUFNLElBQUksR0FBRyxnR0FBZ0csQ0FBQztRQUU5RyxNQUFNLE1BQU0sR0FBRywrQkFBYyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUU5Qyx1QkFBVSxDQUFDLE1BQU0sRUFBRTtZQUNmO2dCQUNJLE1BQU0sRUFBRSxjQUFjO2dCQUN0QixTQUFTLEVBQUUsbUJBQW1CO2FBQ2pDO1lBQ0Q7Z0JBQ0ksTUFBTSxFQUFFLG1CQUFtQjtnQkFDM0IsU0FBUyxFQUFFLG1CQUFtQjthQUNqQztZQUNEO2dCQUNJLFNBQVMsRUFBRSxtQkFBbUI7YUFDakM7U0FDSixDQUFDLENBQUM7SUFFUCxDQUFDLENBQUMsQ0FBQztJQUdILEVBQUUsQ0FBQyxxQkFBcUIsRUFBRTtRQUV0QixNQUFNLElBQUksR0FBRyxvR0FBb0csQ0FBQztRQUVsSCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWxCLE1BQU0sTUFBTSxHQUFHLCtCQUFjLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTlDLHVCQUFVLENBQUMsTUFBTSxFQUFFO1lBQ2Y7Z0JBQ0ksTUFBTSxFQUFFLGNBQWM7Z0JBQ3RCLFNBQVMsRUFBRSxtQkFBbUI7YUFDakM7WUFDRDtnQkFDSSxNQUFNLEVBQUUsbUJBQW1CO2dCQUMzQixTQUFTLEVBQUUsbUJBQW1CO2FBQ2pDO1lBQ0Q7Z0JBQ0ksU0FBUyxFQUFFLG1CQUFtQjthQUNqQztTQUNKLENBQUMsQ0FBQztJQUVQLENBQUMsQ0FBQyxDQUFDO0FBRVAsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0VtYWlsQWRkcmVzc2VzfSBmcm9tICcuL0VtYWlsQWRkcmVzc2VzJztcbmltcG9ydCB7YXNzZXJ0SlNPTn0gZnJvbSAnLi4vdGVzdC9Bc3NlcnRpb25zJztcblxuZGVzY3JpYmUoJ0VtYWlsQWRkcmVzcycsIGZ1bmN0aW9uKCkge1xuXG4gICAgaXQoXCJiYXNpY1wiLCBmdW5jdGlvbigpIHtcblxuICAgICAgICBjb25zdCB0ZXh0ID0gXCJLZXZpbiBCdXJ0b24gPGtldmluQGV4YW1wbGUuY29tPiwgXFxcIk1pY2hhZWxzb24sIEZyYW5rXFxcIiA8ZnJhbmtAZXhhbXBsZS5jb20+LCBhbGljZUBleGFtcGxlLmNvbVwiO1xuXG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IEVtYWlsQWRkcmVzc2VzLnBhcnNlTGlzdCh0ZXh0KTtcblxuICAgICAgICBhc3NlcnRKU09OKHBhcnNlZCwgW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIktldmluIEJ1cnRvblwiLFxuICAgICAgICAgICAgICAgIFwiYWRkcmVzc1wiOiBcImtldmluQGV4YW1wbGUuY29tXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTWljaGFlbHNvbiwgRnJhbmtcIixcbiAgICAgICAgICAgICAgICBcImFkZHJlc3NcIjogXCJmcmFua0BleGFtcGxlLmNvbVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiYWRkcmVzc1wiOiBcImFsaWNlQGV4YW1wbGUuY29tXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSk7XG5cbiAgICB9KTtcblxuXG4gICAgaXQoXCJiYXNpYyB3aXRoIG5ld2xpbmVzXCIsIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGNvbnN0IHRleHQgPSBcIktldmluIEJ1cnRvbiA8a2V2aW5AZXhhbXBsZS5jb20+LCBcXG5cXFwiTWljaGFlbHNvbiwgRnJhbmtcXFwiIDxmcmFua0BleGFtcGxlLmNvbT4sIFxcbmFsaWNlQGV4YW1wbGUuY29tXCI7XG5cbiAgICAgICAgY29uc29sZS5sb2codGV4dCk7XG5cbiAgICAgICAgY29uc3QgcGFyc2VkID0gRW1haWxBZGRyZXNzZXMucGFyc2VMaXN0KHRleHQpO1xuXG4gICAgICAgIGFzc2VydEpTT04ocGFyc2VkLCBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiS2V2aW4gQnVydG9uXCIsXG4gICAgICAgICAgICAgICAgXCJhZGRyZXNzXCI6IFwia2V2aW5AZXhhbXBsZS5jb21cIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJNaWNoYWVsc29uLCBGcmFua1wiLFxuICAgICAgICAgICAgICAgIFwiYWRkcmVzc1wiOiBcImZyYW5rQGV4YW1wbGUuY29tXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJhZGRyZXNzXCI6IFwiYWxpY2VAZXhhbXBsZS5jb21cIlxuICAgICAgICAgICAgfVxuICAgICAgICBdKTtcblxuICAgIH0pO1xuXG59KTtcbiJdfQ==