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
const Mailchimp_1 = require("./Mailchimp");
xdescribe('Mailchimp', function () {
    it("basic", function () {
        return __awaiter(this, void 0, void 0, function* () {
            this.timeout(5000);
            yield Mailchimp_1.Mailchimp.subscribe('burtonator+test101@gmail.com', 'Kevin Burton');
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFpbGNoaW1wVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIk1haWxjaGltcFRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBc0M7QUFFdEMsU0FBUyxDQUFDLFdBQVcsRUFBRTtJQUVuQixFQUFFLENBQUMsT0FBTyxFQUFFOztZQUVSLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFbkIsTUFBTSxxQkFBUyxDQUFDLFNBQVMsQ0FBQyw4QkFBOEIsRUFBRSxjQUFjLENBQUMsQ0FBQztRQUU5RSxDQUFDO0tBQUEsQ0FBQyxDQUFDO0FBRVAsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge01haWxjaGltcH0gZnJvbSAnLi9NYWlsY2hpbXAnO1xuXG54ZGVzY3JpYmUoJ01haWxjaGltcCcsIGZ1bmN0aW9uKCkge1xuXG4gICAgaXQoXCJiYXNpY1wiLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICB0aGlzLnRpbWVvdXQoNTAwMCk7XG5cbiAgICAgICAgYXdhaXQgTWFpbGNoaW1wLnN1YnNjcmliZSgnYnVydG9uYXRvcit0ZXN0MTAxQGdtYWlsLmNvbScsICdLZXZpbiBCdXJ0b24nKTtcblxuICAgIH0pO1xuXG59KTtcbiJdfQ==