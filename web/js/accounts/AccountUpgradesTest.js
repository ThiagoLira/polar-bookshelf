"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const AccountUpgrades_1 = require("./AccountUpgrades");
describe('AccountUpgrades', function () {
    it("upgradeRequired", function () {
        chai_1.assert.isUndefined(AccountUpgrades_1.AccountUpgrades.upgradeRequired('free', { storageInBytes: 200000000 }));
        chai_1.assert.equal(AccountUpgrades_1.AccountUpgrades.upgradeRequired('free', { storageInBytes: 400000000 }), 'bronze');
        chai_1.assert.equal(AccountUpgrades_1.AccountUpgrades.upgradeRequired('bronze', { storageInBytes: 6000000000 }), 'gold');
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNjb3VudFVwZ3JhZGVzVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkFjY291bnRVcGdyYWRlc1Rlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBNEI7QUFDNUIsdURBQWtEO0FBRWxELFFBQVEsQ0FBQyxpQkFBaUIsRUFBRTtJQUV4QixFQUFFLENBQUMsaUJBQWlCLEVBQUU7UUFFbEIsYUFBTSxDQUFDLFdBQVcsQ0FBQyxpQ0FBZSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsRUFBQyxjQUFjLEVBQUUsU0FBUyxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pGLGFBQU0sQ0FBQyxLQUFLLENBQUMsaUNBQWUsQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLEVBQUMsY0FBYyxFQUFFLFNBQVMsRUFBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDN0YsYUFBTSxDQUFDLEtBQUssQ0FBQyxpQ0FBZSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQUUsRUFBQyxjQUFjLEVBQUUsVUFBVSxFQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUVsRyxDQUFDLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthc3NlcnR9IGZyb20gJ2NoYWknO1xuaW1wb3J0IHtBY2NvdW50VXBncmFkZXN9IGZyb20gXCIuL0FjY291bnRVcGdyYWRlc1wiO1xuXG5kZXNjcmliZSgnQWNjb3VudFVwZ3JhZGVzJywgZnVuY3Rpb24oKSB7XG5cbiAgICBpdChcInVwZ3JhZGVSZXF1aXJlZFwiLCBmdW5jdGlvbigpIHtcblxuICAgICAgICBhc3NlcnQuaXNVbmRlZmluZWQoQWNjb3VudFVwZ3JhZGVzLnVwZ3JhZGVSZXF1aXJlZCgnZnJlZScsIHtzdG9yYWdlSW5CeXRlczogMjAwMDAwMDAwfSkpO1xuICAgICAgICBhc3NlcnQuZXF1YWwoQWNjb3VudFVwZ3JhZGVzLnVwZ3JhZGVSZXF1aXJlZCgnZnJlZScsIHtzdG9yYWdlSW5CeXRlczogNDAwMDAwMDAwfSksICdicm9uemUnKTtcbiAgICAgICAgYXNzZXJ0LmVxdWFsKEFjY291bnRVcGdyYWRlcy51cGdyYWRlUmVxdWlyZWQoJ2Jyb256ZScsIHtzdG9yYWdlSW5CeXRlczogNjAwMDAwMDAwMH0pLCAnZ29sZCcpO1xuXG4gICAgfSk7XG5cbn0pO1xuIl19