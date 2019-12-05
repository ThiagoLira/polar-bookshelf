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
const ModelNames_1 = require("./ModelNames");
const chai_1 = require("chai");
describe('ModelNames', function () {
    it("basic", function () {
        return __awaiter(this, void 0, void 0, function* () {
            ModelNames_1.ModelNames.verifyRequired(['Cloze', 'Basic']);
            ModelNames_1.ModelNames.verifyRequired(['Cloze', 'Basic', 'foo', 'bar']);
            chai_1.assert.throws(() => ModelNames_1.ModelNames.verifyRequired(['foo', 'bar']));
            chai_1.assert.throws(() => ModelNames_1.ModelNames.verifyRequired(['foo', 'bar', 'Cloze']));
            chai_1.assert.throws(() => ModelNames_1.ModelNames.verifyRequired(['foo', 'bar', 'Basic']));
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kZWxOYW1lc1Rlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJNb2RlbE5hbWVzVGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUVBLDZDQUF3QztBQUN4QywrQkFBNEI7QUFFNUIsUUFBUSxDQUFDLFlBQVksRUFBRTtJQUVuQixFQUFFLENBQUMsT0FBTyxFQUFFOztZQUVSLHVCQUFVLENBQUMsY0FBYyxDQUFDLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDOUMsdUJBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBRTVELGFBQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsdUJBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9ELGFBQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsdUJBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4RSxhQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLHVCQUFVLENBQUMsY0FBYyxDQUFDLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFNUUsQ0FBQztLQUFBLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthc3NlcnRKU09OfSBmcm9tIFwiLi4vLi4vLi4vLi4vdGVzdC9Bc3NlcnRpb25zXCI7XG5pbXBvcnQge01lZGlhQ29udGVudHN9IGZyb20gXCIuL01lZGlhQ29udGVudHNcIjtcbmltcG9ydCB7TW9kZWxOYW1lc30gZnJvbSBcIi4vTW9kZWxOYW1lc1wiO1xuaW1wb3J0IHthc3NlcnR9IGZyb20gJ2NoYWknO1xuXG5kZXNjcmliZSgnTW9kZWxOYW1lcycsIGZ1bmN0aW9uKCkge1xuXG4gICAgaXQoXCJiYXNpY1wiLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICBNb2RlbE5hbWVzLnZlcmlmeVJlcXVpcmVkKFsnQ2xvemUnLCAnQmFzaWMnXSk7XG4gICAgICAgIE1vZGVsTmFtZXMudmVyaWZ5UmVxdWlyZWQoWydDbG96ZScsICdCYXNpYycsICdmb28nLCAnYmFyJ10pO1xuXG4gICAgICAgIGFzc2VydC50aHJvd3MoKCkgPT4gTW9kZWxOYW1lcy52ZXJpZnlSZXF1aXJlZChbJ2ZvbycsICdiYXInXSkpO1xuICAgICAgICBhc3NlcnQudGhyb3dzKCgpID0+IE1vZGVsTmFtZXMudmVyaWZ5UmVxdWlyZWQoWydmb28nLCAnYmFyJywgJ0Nsb3plJ10pKTtcbiAgICAgICAgYXNzZXJ0LnRocm93cygoKSA9PiBNb2RlbE5hbWVzLnZlcmlmeVJlcXVpcmVkKFsnZm9vJywgJ2JhcicsICdCYXNpYyddKSk7XG5cbiAgICB9KTtcblxufSk7XG4iXX0=