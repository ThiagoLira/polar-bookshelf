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
const FontReplacer_1 = require("./FontReplacer");
describe('FontReplacer', function () {
    it("basic", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const styles = FontReplacer_1.FontReplacer.createFontReplacements();
            console.log(styles);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9udFJlcGxhY2VyVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkZvbnRSZXBsYWNlclRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxpREFBNEM7QUFFNUMsUUFBUSxDQUFDLGNBQWMsRUFBRTtJQUVyQixFQUFFLENBQUMsT0FBTyxFQUFFOztZQUNSLE1BQU0sTUFBTSxHQUFHLDJCQUFZLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztZQUNyRCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hCLENBQUM7S0FBQSxDQUFDLENBQUM7QUFFUCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Rm9udFJlcGxhY2VyfSBmcm9tICcuL0ZvbnRSZXBsYWNlcic7XG5cbmRlc2NyaWJlKCdGb250UmVwbGFjZXInLCBmdW5jdGlvbigpIHtcblxuICAgIGl0KFwiYmFzaWNcIiwgYXN5bmMgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IHN0eWxlcyA9IEZvbnRSZXBsYWNlci5jcmVhdGVGb250UmVwbGFjZW1lbnRzKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHN0eWxlcyk7XG4gICAgfSk7XG5cbn0pO1xuXG4iXX0=