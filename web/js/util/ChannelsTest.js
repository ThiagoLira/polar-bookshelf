"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Channels_1 = require("./Channels");
const chai_1 = require("chai");
describe('Channels', function () {
    it('should call', function () {
        const [channel, setChannel] = Channels_1.Channels.create();
        channel('yo');
        let message;
        chai_1.assert.equal(message, undefined);
        channel('hey');
        setChannel((value) => message = value);
        channel('sup');
        chai_1.assert.equal(message, 'sup');
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhbm5lbHNUZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQ2hhbm5lbHNUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseUNBQW9DO0FBQ3BDLCtCQUE0QjtBQUU1QixRQUFRLENBQUMsVUFBVSxFQUFFO0lBRWpCLEVBQUUsQ0FBQyxhQUFhLEVBQUU7UUFFZCxNQUFNLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxHQUFHLG1CQUFRLENBQUMsTUFBTSxFQUFVLENBQUM7UUFHeEQsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWQsSUFBSSxPQUEyQixDQUFDO1FBRWhDLGFBQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ2pDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVmLFVBQVUsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxDQUFDO1FBRXZDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVmLGFBQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBRWpDLENBQUMsQ0FBQyxDQUFDO0FBRVAsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NoYW5uZWxzfSBmcm9tIFwiLi9DaGFubmVsc1wiO1xuaW1wb3J0IHthc3NlcnR9IGZyb20gJ2NoYWknO1xuXG5kZXNjcmliZSgnQ2hhbm5lbHMnLCBmdW5jdGlvbigpIHtcblxuICAgIGl0KCdzaG91bGQgY2FsbCcsIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGNvbnN0IFtjaGFubmVsLCBzZXRDaGFubmVsXSA9IENoYW5uZWxzLmNyZWF0ZTxzdHJpbmc+KCk7XG5cbiAgICAgICAgLy8gbWFrZSBzdXJlIHdlIGNhbiBjYWxsIGl0IHdpdGggbm8gb3Agbm93Li4uXG4gICAgICAgIGNoYW5uZWwoJ3lvJyk7XG5cbiAgICAgICAgbGV0IG1lc3NhZ2U6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICAgICAgICBhc3NlcnQuZXF1YWwobWVzc2FnZSwgdW5kZWZpbmVkKTtcbiAgICAgICAgY2hhbm5lbCgnaGV5Jyk7XG5cbiAgICAgICAgc2V0Q2hhbm5lbCgodmFsdWUpID0+IG1lc3NhZ2UgPSB2YWx1ZSk7XG5cbiAgICAgICAgY2hhbm5lbCgnc3VwJyk7XG5cbiAgICAgICAgYXNzZXJ0LmVxdWFsKG1lc3NhZ2UsICdzdXAnKTtcblxuICAgIH0pO1xuXG59KTtcbiJdfQ==