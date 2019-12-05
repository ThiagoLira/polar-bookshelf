"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const Errors_1 = require("./Errors");
describe('Errors', function () {
    it("basic", function () {
        try {
            Errors_1.Errors.rethrow(new Error("root cause: "), "rethrow cause: ");
            chai_1.assert.ok(false, "Should not have reached here");
        }
        catch (e) {
            chai_1.assert.equal(e.msg, "rethrow cause: : root cause: ");
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXJyb3JzVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkVycm9yc1Rlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBNEI7QUFFNUIscUNBQWdDO0FBSWhDLFFBQVEsQ0FBQyxRQUFRLEVBQUU7SUFFZixFQUFFLENBQUMsT0FBTyxFQUFFO1FBRVIsSUFBSTtZQUVBLGVBQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxLQUFLLENBQUMsY0FBYyxDQUFDLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztZQUU3RCxhQUFNLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSw4QkFBOEIsQ0FBQyxDQUFDO1NBRXBEO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDUixhQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsK0JBQStCLENBQUMsQ0FBQztTQUN4RDtJQUVMLENBQUMsQ0FBQyxDQUFDO0FBRVAsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Fzc2VydH0gZnJvbSAnY2hhaSc7XG5pbXBvcnQge0VtYWlsQWRkcmVzc1BhcnNlcn0gZnJvbSAnLi9FbWFpbEFkZHJlc3NQYXJzZXInO1xuaW1wb3J0IHtFcnJvcnN9IGZyb20gJy4vRXJyb3JzJztcbmltcG9ydCB7U2ltdWxhdGV9IGZyb20gJ3JlYWN0LWRvbS90ZXN0LXV0aWxzJztcbmltcG9ydCBjb21wb3NpdGlvblN0YXJ0ID0gU2ltdWxhdGUuY29tcG9zaXRpb25TdGFydDtcblxuZGVzY3JpYmUoJ0Vycm9ycycsIGZ1bmN0aW9uKCkge1xuXG4gICAgaXQoXCJiYXNpY1wiLCBmdW5jdGlvbigpIHtcblxuICAgICAgICB0cnkge1xuXG4gICAgICAgICAgICBFcnJvcnMucmV0aHJvdyhuZXcgRXJyb3IoXCJyb290IGNhdXNlOiBcIiksIFwicmV0aHJvdyBjYXVzZTogXCIpO1xuXG4gICAgICAgICAgICBhc3NlcnQub2soZmFsc2UsIFwiU2hvdWxkIG5vdCBoYXZlIHJlYWNoZWQgaGVyZVwiKTtcblxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBhc3NlcnQuZXF1YWwoZS5tc2csIFwicmV0aHJvdyBjYXVzZTogOiByb290IGNhdXNlOiBcIik7XG4gICAgICAgIH1cblxuICAgIH0pO1xuXG59KTtcbiJdfQ==