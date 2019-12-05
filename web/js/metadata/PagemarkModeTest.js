"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Assertions_1 = require("../test/Assertions");
const PagemarkModes_1 = require("./PagemarkModes");
describe('PagemarkMode', function () {
    it("toDescriptors", function () {
        const expected = [
            {
                "name": "PRE_READ",
                "title": "pre read",
                "key": "pre-read"
            },
            {
                "name": "READ",
                "title": "read",
                "key": "read"
            },
            {
                "name": "IGNORED",
                "title": "ignored",
                "key": "ignored"
            },
            {
                "name": "TABLE_OF_CONTENTS",
                "title": "table of contents",
                "key": "table-of-contents"
            },
            {
                "name": "APPENDIX",
                "title": "appendix",
                "key": "appendix"
            },
            {
                "name": "REFERENCES",
                "title": "references",
                "key": "references"
            }
        ];
        Assertions_1.assertJSON(PagemarkModes_1.PagemarkModes.toDescriptors(), expected);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFnZW1hcmtNb2RlVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlBhZ2VtYXJrTW9kZVRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxtREFBOEM7QUFDOUMsbURBQThDO0FBRTlDLFFBQVEsQ0FBQyxjQUFjLEVBQUU7SUFFckIsRUFBRSxDQUFDLGVBQWUsRUFBRTtRQUVoQixNQUFNLFFBQVEsR0FBRztZQUNiO2dCQUNJLE1BQU0sRUFBRSxVQUFVO2dCQUNsQixPQUFPLEVBQUUsVUFBVTtnQkFDbkIsS0FBSyxFQUFFLFVBQVU7YUFDcEI7WUFDRDtnQkFDSSxNQUFNLEVBQUUsTUFBTTtnQkFDZCxPQUFPLEVBQUUsTUFBTTtnQkFDZixLQUFLLEVBQUUsTUFBTTthQUNoQjtZQUNEO2dCQUNJLE1BQU0sRUFBRSxTQUFTO2dCQUNqQixPQUFPLEVBQUUsU0FBUztnQkFDbEIsS0FBSyxFQUFFLFNBQVM7YUFDbkI7WUFDRDtnQkFDSSxNQUFNLEVBQUUsbUJBQW1CO2dCQUMzQixPQUFPLEVBQUUsbUJBQW1CO2dCQUM1QixLQUFLLEVBQUUsbUJBQW1CO2FBQzdCO1lBQ0Q7Z0JBQ0ksTUFBTSxFQUFFLFVBQVU7Z0JBQ2xCLE9BQU8sRUFBRSxVQUFVO2dCQUNuQixLQUFLLEVBQUUsVUFBVTthQUNwQjtZQUNEO2dCQUNJLE1BQU0sRUFBRSxZQUFZO2dCQUNwQixPQUFPLEVBQUUsWUFBWTtnQkFDckIsS0FBSyxFQUFFLFlBQVk7YUFDdEI7U0FDSixDQUFDO1FBRUYsdUJBQVUsQ0FBQyw2QkFBYSxDQUFDLGFBQWEsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBRXhELENBQUMsQ0FBQyxDQUFDO0FBRVAsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BhZ2VtYXJrTW9kZX0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9tZXRhZGF0YS9QYWdlbWFya01vZGUnO1xuaW1wb3J0IHthc3NlcnRKU09OfSBmcm9tICcuLi90ZXN0L0Fzc2VydGlvbnMnO1xuaW1wb3J0IHtQYWdlbWFya01vZGVzfSBmcm9tICcuL1BhZ2VtYXJrTW9kZXMnO1xuXG5kZXNjcmliZSgnUGFnZW1hcmtNb2RlJywgZnVuY3Rpb24oKSB7XG5cbiAgICBpdChcInRvRGVzY3JpcHRvcnNcIiwgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgY29uc3QgZXhwZWN0ZWQgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiUFJFX1JFQURcIixcbiAgICAgICAgICAgICAgICBcInRpdGxlXCI6IFwicHJlIHJlYWRcIixcbiAgICAgICAgICAgICAgICBcImtleVwiOiBcInByZS1yZWFkXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiUkVBRFwiLFxuICAgICAgICAgICAgICAgIFwidGl0bGVcIjogXCJyZWFkXCIsXG4gICAgICAgICAgICAgICAgXCJrZXlcIjogXCJyZWFkXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiSUdOT1JFRFwiLFxuICAgICAgICAgICAgICAgIFwidGl0bGVcIjogXCJpZ25vcmVkXCIsXG4gICAgICAgICAgICAgICAgXCJrZXlcIjogXCJpZ25vcmVkXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiVEFCTEVfT0ZfQ09OVEVOVFNcIixcbiAgICAgICAgICAgICAgICBcInRpdGxlXCI6IFwidGFibGUgb2YgY29udGVudHNcIixcbiAgICAgICAgICAgICAgICBcImtleVwiOiBcInRhYmxlLW9mLWNvbnRlbnRzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQVBQRU5ESVhcIixcbiAgICAgICAgICAgICAgICBcInRpdGxlXCI6IFwiYXBwZW5kaXhcIixcbiAgICAgICAgICAgICAgICBcImtleVwiOiBcImFwcGVuZGl4XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiUkVGRVJFTkNFU1wiLFxuICAgICAgICAgICAgICAgIFwidGl0bGVcIjogXCJyZWZlcmVuY2VzXCIsXG4gICAgICAgICAgICAgICAgXCJrZXlcIjogXCJyZWZlcmVuY2VzXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgXTtcblxuICAgICAgICBhc3NlcnRKU09OKFBhZ2VtYXJrTW9kZXMudG9EZXNjcmlwdG9ycygpLCBleHBlY3RlZCk7XG5cbiAgICB9KTtcblxufSk7XG4iXX0=