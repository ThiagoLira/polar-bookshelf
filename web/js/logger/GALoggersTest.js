"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const GALoggers_1 = require("./GALoggers");
const Assertions_1 = require("../test/Assertions");
describe('GALoggers', function () {
    it("getError", function () {
        const error = new Error("asdf");
        chai_1.assert.equal(error, GALoggers_1.GALoggers.getError(["asdf", error, "asdf"]));
        chai_1.assert.equal(error, GALoggers_1.GALoggers.getError([error, "asdf"]));
        chai_1.assert.equal(error, GALoggers_1.GALoggers.getError([error]));
        chai_1.assert.isTrue(GALoggers_1.GALoggers.getError([]) === undefined);
        chai_1.assert.isTrue(GALoggers_1.GALoggers.getError(["asdf"]) === undefined);
    });
    it("toEvent", function () {
        chai_1.assert.isTrue(GALoggers_1.GALoggers.toEvent(undefined) === undefined);
        const error = new Error("This is my error");
        Assertions_1.assertJSON(GALoggers_1.GALoggers.toEvent(error), {
            "action": "this-is-my-error",
            "category": "error"
        });
    });
    it("toEvent with long string", function () {
        chai_1.assert.isTrue(GALoggers_1.GALoggers.toEvent(undefined) === undefined);
        const error = new Error("This is my error This is my error This is my error This is my error This is my error This is my error This is my error This is my error");
        Assertions_1.assertJSON(GALoggers_1.GALoggers.toEvent(error), {
            "action": "this-is-my-error-this-is-my-error-this-is-my-error-this-is-my-error-this-is-my-e",
            "category": "error"
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR0FMb2dnZXJzVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkdBTG9nZ2Vyc1Rlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBNEI7QUFDNUIsMkNBQXNDO0FBQ3RDLG1EQUE4QztBQUU5QyxRQUFRLENBQUMsV0FBVyxFQUFFO0lBRWxCLEVBQUUsQ0FBQyxVQUFVLEVBQUU7UUFFWCxNQUFNLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVoQyxhQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxxQkFBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xFLGFBQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLHFCQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxFQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxRCxhQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxxQkFBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVqRCxhQUFNLENBQUMsTUFBTSxDQUFDLHFCQUFTLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLFNBQVMsQ0FBQyxDQUFDO1FBQ3BELGFBQU0sQ0FBQyxNQUFNLENBQUMscUJBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLFNBQVMsQ0FBQyxDQUFDO0lBRTlELENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLFNBQVMsRUFBRTtRQUVWLGFBQU0sQ0FBQyxNQUFNLENBQUMscUJBQVMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssU0FBUyxDQUFDLENBQUM7UUFFMUQsTUFBTSxLQUFLLEdBQUcsSUFBSSxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUM1Qyx1QkFBVSxDQUFDLHFCQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2pDLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsVUFBVSxFQUFFLE9BQU87U0FDdEIsQ0FBQyxDQUFDO0lBRVAsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsMEJBQTBCLEVBQUU7UUFFM0IsYUFBTSxDQUFDLE1BQU0sQ0FBQyxxQkFBUyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxTQUFTLENBQUMsQ0FBQztRQUUxRCxNQUFNLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FBQyx5SUFBeUksQ0FBQyxDQUFDO1FBQ25LLHVCQUFVLENBQUMscUJBQVMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDakMsUUFBUSxFQUFFLGtGQUFrRjtZQUM1RixVQUFVLEVBQUUsT0FBTztTQUN0QixDQUFDLENBQUM7SUFFUCxDQUFDLENBQUMsQ0FBQztBQUdQLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthc3NlcnR9IGZyb20gJ2NoYWknO1xuaW1wb3J0IHtHQUxvZ2dlcnN9IGZyb20gJy4vR0FMb2dnZXJzJztcbmltcG9ydCB7YXNzZXJ0SlNPTn0gZnJvbSAnLi4vdGVzdC9Bc3NlcnRpb25zJztcblxuZGVzY3JpYmUoJ0dBTG9nZ2VycycsIGZ1bmN0aW9uKCkge1xuXG4gICAgaXQoXCJnZXRFcnJvclwiLCBmdW5jdGlvbigpIHtcblxuICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihcImFzZGZcIik7XG5cbiAgICAgICAgYXNzZXJ0LmVxdWFsKGVycm9yLCBHQUxvZ2dlcnMuZ2V0RXJyb3IoW1wiYXNkZlwiLCBlcnJvciAsIFwiYXNkZlwiXSkpO1xuICAgICAgICBhc3NlcnQuZXF1YWwoZXJyb3IsIEdBTG9nZ2Vycy5nZXRFcnJvcihbZXJyb3IgLCBcImFzZGZcIl0pKTtcbiAgICAgICAgYXNzZXJ0LmVxdWFsKGVycm9yLCBHQUxvZ2dlcnMuZ2V0RXJyb3IoW2Vycm9yXSkpO1xuXG4gICAgICAgIGFzc2VydC5pc1RydWUoR0FMb2dnZXJzLmdldEVycm9yKFtdKSA9PT0gdW5kZWZpbmVkKTtcbiAgICAgICAgYXNzZXJ0LmlzVHJ1ZShHQUxvZ2dlcnMuZ2V0RXJyb3IoW1wiYXNkZlwiXSkgPT09IHVuZGVmaW5lZCk7XG5cbiAgICB9KTtcblxuICAgIGl0KFwidG9FdmVudFwiLCBmdW5jdGlvbigpIHtcblxuICAgICAgICBhc3NlcnQuaXNUcnVlKEdBTG9nZ2Vycy50b0V2ZW50KHVuZGVmaW5lZCkgPT09IHVuZGVmaW5lZCk7XG5cbiAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoXCJUaGlzIGlzIG15IGVycm9yXCIpO1xuICAgICAgICBhc3NlcnRKU09OKEdBTG9nZ2Vycy50b0V2ZW50KGVycm9yKSwge1xuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJ0aGlzLWlzLW15LWVycm9yXCIsXG4gICAgICAgICAgICBcImNhdGVnb3J5XCI6IFwiZXJyb3JcIlxuICAgICAgICB9KTtcblxuICAgIH0pO1xuXG4gICAgaXQoXCJ0b0V2ZW50IHdpdGggbG9uZyBzdHJpbmdcIiwgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgYXNzZXJ0LmlzVHJ1ZShHQUxvZ2dlcnMudG9FdmVudCh1bmRlZmluZWQpID09PSB1bmRlZmluZWQpO1xuXG4gICAgICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKFwiVGhpcyBpcyBteSBlcnJvciBUaGlzIGlzIG15IGVycm9yIFRoaXMgaXMgbXkgZXJyb3IgVGhpcyBpcyBteSBlcnJvciBUaGlzIGlzIG15IGVycm9yIFRoaXMgaXMgbXkgZXJyb3IgVGhpcyBpcyBteSBlcnJvciBUaGlzIGlzIG15IGVycm9yXCIpO1xuICAgICAgICBhc3NlcnRKU09OKEdBTG9nZ2Vycy50b0V2ZW50KGVycm9yKSwge1xuICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJ0aGlzLWlzLW15LWVycm9yLXRoaXMtaXMtbXktZXJyb3ItdGhpcy1pcy1teS1lcnJvci10aGlzLWlzLW15LWVycm9yLXRoaXMtaXMtbXktZVwiLFxuICAgICAgICAgICAgXCJjYXRlZ29yeVwiOiBcImVycm9yXCJcbiAgICAgICAgfSk7XG5cbiAgICB9KTtcblxuXG59KTtcbiJdfQ==