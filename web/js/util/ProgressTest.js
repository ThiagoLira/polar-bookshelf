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
const chai_1 = require("chai");
const ProgressCalculator_1 = require("./ProgressCalculator");
describe('ProgressTest', function () {
    it("Basic Progress", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const progress = new ProgressCalculator_1.ProgressCalculator(4);
            chai_1.assert.equal(progress.percentage(), 0);
            progress.incr();
            chai_1.assert.equal(progress.percentage(), 25);
            progress.incr();
            progress.incr();
            progress.incr();
            chai_1.assert.equal(progress.percentage(), 100);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZ3Jlc3NUZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUHJvZ3Jlc3NUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsK0JBQTRCO0FBQzVCLDZEQUF3RDtBQUd4RCxRQUFRLENBQUMsY0FBYyxFQUFFO0lBRXJCLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRTs7WUFFakIsTUFBTSxRQUFRLEdBQUcsSUFBSSx1Q0FBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUUzQyxhQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUV2QyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDaEIsYUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDeEMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2hCLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNoQixRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDaEIsYUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFN0MsQ0FBQztLQUFBLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthc3NlcnR9IGZyb20gJ2NoYWknO1xuaW1wb3J0IHtQcm9ncmVzc0NhbGN1bGF0b3J9IGZyb20gJy4vUHJvZ3Jlc3NDYWxjdWxhdG9yJztcblxuXG5kZXNjcmliZSgnUHJvZ3Jlc3NUZXN0JywgZnVuY3Rpb24oKSB7XG5cbiAgICBpdChcIkJhc2ljIFByb2dyZXNzXCIsIGFzeW5jIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBjb25zdCBwcm9ncmVzcyA9IG5ldyBQcm9ncmVzc0NhbGN1bGF0b3IoNCk7XG5cbiAgICAgICAgYXNzZXJ0LmVxdWFsKHByb2dyZXNzLnBlcmNlbnRhZ2UoKSwgMCk7XG5cbiAgICAgICAgcHJvZ3Jlc3MuaW5jcigpO1xuICAgICAgICBhc3NlcnQuZXF1YWwocHJvZ3Jlc3MucGVyY2VudGFnZSgpLCAyNSk7XG4gICAgICAgIHByb2dyZXNzLmluY3IoKTtcbiAgICAgICAgcHJvZ3Jlc3MuaW5jcigpO1xuICAgICAgICBwcm9ncmVzcy5pbmNyKCk7XG4gICAgICAgIGFzc2VydC5lcXVhbChwcm9ncmVzcy5wZXJjZW50YWdlKCksIDEwMCk7XG5cbiAgICB9KTtcblxufSk7XG4iXX0=