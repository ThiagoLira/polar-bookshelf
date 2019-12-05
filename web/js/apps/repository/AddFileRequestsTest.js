"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Assertions_1 = require("../../test/Assertions");
const AddFileRequests_1 = require("./AddFileRequests");
describe('AddFileRequests', function () {
    it('with encoded URL', function () {
        const url = "https://us-central1-polar-cors.cloudfunctions.net/cors?url=http%3A%2F%2Fwww.seanriddle.com%2Ffurbysource.pdf";
        const actual = AddFileRequests_1.AddFileRequests.fromURL(url);
        Assertions_1.assertJSON(actual, {
            "basename": "furbysource.pdf",
            "docPath": "https://us-central1-polar-cors.cloudfunctions.net/cors?url=http%3A%2F%2Fwww.seanriddle.com%2Ffurbysource.pdf"
        });
    });
    xit('windows share path', function () {
        const url = "\\\\foo\\foo$\\cat\dog";
        const actual = AddFileRequests_1.AddFileRequests.fromURL(url);
        Assertions_1.assertJSON(actual, {
            "basename": "furbysource.pdf",
            "docPath": "https://us-central1-polar-cors.cloudfunctions.net/cors?url=http%3A%2F%2Fwww.seanriddle.com%2Ffurbysource.pdf"
        });
    });
    it('with basic URL', function () {
        const url = "https://example.com/furbysource.pdf";
        const actual = AddFileRequests_1.AddFileRequests.fromURL(url);
        Assertions_1.assertJSON(actual, {
            "basename": "furbysource.pdf",
            "docPath": "https://example.com/furbysource.pdf"
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRkRmlsZVJlcXVlc3RzVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkFkZEZpbGVSZXF1ZXN0c1Rlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxzREFBaUQ7QUFDakQsdURBQWtEO0FBRWxELFFBQVEsQ0FBQyxpQkFBaUIsRUFBRTtJQUV4QixFQUFFLENBQUMsa0JBQWtCLEVBQUU7UUFFbkIsTUFBTSxHQUFHLEdBQUcsOEdBQThHLENBQUM7UUFDM0gsTUFBTSxNQUFNLEdBQUcsaUNBQWUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFNUMsdUJBQVUsQ0FBQyxNQUFNLEVBQUU7WUFDZixVQUFVLEVBQUUsaUJBQWlCO1lBQzdCLFNBQVMsRUFBRSw4R0FBOEc7U0FDNUgsQ0FBQyxDQUFDO0lBRVAsQ0FBQyxDQUFDLENBQUM7SUFHSCxHQUFHLENBQUMsb0JBQW9CLEVBQUU7UUFFdEIsTUFBTSxHQUFHLEdBQUcsd0JBQXdCLENBQUM7UUFDckMsTUFBTSxNQUFNLEdBQUcsaUNBQWUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFNUMsdUJBQVUsQ0FBQyxNQUFNLEVBQUU7WUFDZixVQUFVLEVBQUUsaUJBQWlCO1lBQzdCLFNBQVMsRUFBRSw4R0FBOEc7U0FDNUgsQ0FBQyxDQUFDO0lBRVAsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsZ0JBQWdCLEVBQUU7UUFFakIsTUFBTSxHQUFHLEdBQUcscUNBQXFDLENBQUM7UUFDbEQsTUFBTSxNQUFNLEdBQUcsaUNBQWUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFNUMsdUJBQVUsQ0FBQyxNQUFNLEVBQUU7WUFDZixVQUFVLEVBQUUsaUJBQWlCO1lBQzdCLFNBQVMsRUFBRSxxQ0FBcUM7U0FDbkQsQ0FBQyxDQUFDO0lBRVAsQ0FBQyxDQUFDLENBQUM7QUFFUCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHthc3NlcnR9IGZyb20gJ2NoYWknO1xuaW1wb3J0IHthc3NlcnRKU09OfSBmcm9tICcuLi8uLi90ZXN0L0Fzc2VydGlvbnMnO1xuaW1wb3J0IHtBZGRGaWxlUmVxdWVzdHN9IGZyb20gJy4vQWRkRmlsZVJlcXVlc3RzJztcblxuZGVzY3JpYmUoJ0FkZEZpbGVSZXF1ZXN0cycsIGZ1bmN0aW9uKCkge1xuXG4gICAgaXQoJ3dpdGggZW5jb2RlZCBVUkwnLCBmdW5jdGlvbigpIHtcblxuICAgICAgICBjb25zdCB1cmwgPSBcImh0dHBzOi8vdXMtY2VudHJhbDEtcG9sYXItY29ycy5jbG91ZGZ1bmN0aW9ucy5uZXQvY29ycz91cmw9aHR0cCUzQSUyRiUyRnd3dy5zZWFucmlkZGxlLmNvbSUyRmZ1cmJ5c291cmNlLnBkZlwiO1xuICAgICAgICBjb25zdCBhY3R1YWwgPSBBZGRGaWxlUmVxdWVzdHMuZnJvbVVSTCh1cmwpO1xuXG4gICAgICAgIGFzc2VydEpTT04oYWN0dWFsLCB7XG4gICAgICAgICAgICBcImJhc2VuYW1lXCI6IFwiZnVyYnlzb3VyY2UucGRmXCIsXG4gICAgICAgICAgICBcImRvY1BhdGhcIjogXCJodHRwczovL3VzLWNlbnRyYWwxLXBvbGFyLWNvcnMuY2xvdWRmdW5jdGlvbnMubmV0L2NvcnM/dXJsPWh0dHAlM0ElMkYlMkZ3d3cuc2VhbnJpZGRsZS5jb20lMkZmdXJieXNvdXJjZS5wZGZcIlxuICAgICAgICB9KTtcblxuICAgIH0pO1xuXG5cbiAgICB4aXQoJ3dpbmRvd3Mgc2hhcmUgcGF0aCcsIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGNvbnN0IHVybCA9IFwiXFxcXFxcXFxmb29cXFxcZm9vJFxcXFxjYXRcXGRvZ1wiO1xuICAgICAgICBjb25zdCBhY3R1YWwgPSBBZGRGaWxlUmVxdWVzdHMuZnJvbVVSTCh1cmwpO1xuXG4gICAgICAgIGFzc2VydEpTT04oYWN0dWFsLCB7XG4gICAgICAgICAgICBcImJhc2VuYW1lXCI6IFwiZnVyYnlzb3VyY2UucGRmXCIsXG4gICAgICAgICAgICBcImRvY1BhdGhcIjogXCJodHRwczovL3VzLWNlbnRyYWwxLXBvbGFyLWNvcnMuY2xvdWRmdW5jdGlvbnMubmV0L2NvcnM/dXJsPWh0dHAlM0ElMkYlMkZ3d3cuc2VhbnJpZGRsZS5jb20lMkZmdXJieXNvdXJjZS5wZGZcIlxuICAgICAgICB9KTtcblxuICAgIH0pO1xuXG4gICAgaXQoJ3dpdGggYmFzaWMgVVJMJywgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgY29uc3QgdXJsID0gXCJodHRwczovL2V4YW1wbGUuY29tL2Z1cmJ5c291cmNlLnBkZlwiO1xuICAgICAgICBjb25zdCBhY3R1YWwgPSBBZGRGaWxlUmVxdWVzdHMuZnJvbVVSTCh1cmwpO1xuXG4gICAgICAgIGFzc2VydEpTT04oYWN0dWFsLCB7XG4gICAgICAgICAgICBcImJhc2VuYW1lXCI6IFwiZnVyYnlzb3VyY2UucGRmXCIsXG4gICAgICAgICAgICBcImRvY1BhdGhcIjogXCJodHRwczovL2V4YW1wbGUuY29tL2Z1cmJ5c291cmNlLnBkZlwiXG4gICAgICAgIH0pO1xuXG4gICAgfSk7XG5cbn0pO1xuIl19