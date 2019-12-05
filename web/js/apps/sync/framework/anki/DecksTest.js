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
const Decks_1 = require("./Decks");
describe('Decks', function () {
    it("basic", function () {
        return __awaiter(this, void 0, void 0, function* () {
            chai_1.assert.equal(Decks_1.Decks.toSubDeck("foo/bar"), "foo::bar");
            chai_1.assert.equal(Decks_1.Decks.toSubDeck("foo"), "foo");
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVja3NUZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRGVja3NUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsK0JBQTRCO0FBQzVCLG1DQUE4QjtBQUU5QixRQUFRLENBQUMsT0FBTyxFQUFFO0lBRWQsRUFBRSxDQUFDLE9BQU8sRUFBRTs7WUFDUixhQUFNLENBQUMsS0FBSyxDQUFDLGFBQUssQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDckQsYUFBTSxDQUFDLEtBQUssQ0FBQyxhQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2hELENBQUM7S0FBQSxDQUFDLENBQUM7QUFFUCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YXNzZXJ0fSBmcm9tICdjaGFpJztcbmltcG9ydCB7RGVja3N9IGZyb20gJy4vRGVja3MnO1xuXG5kZXNjcmliZSgnRGVja3MnLCBmdW5jdGlvbigpIHtcblxuICAgIGl0KFwiYmFzaWNcIiwgYXN5bmMgZnVuY3Rpb24oKSB7XG4gICAgICAgIGFzc2VydC5lcXVhbChEZWNrcy50b1N1YkRlY2soXCJmb28vYmFyXCIpLCBcImZvbzo6YmFyXCIpO1xuICAgICAgICBhc3NlcnQuZXF1YWwoRGVja3MudG9TdWJEZWNrKFwiZm9vXCIpLCBcImZvb1wiKTtcbiAgICB9KTtcblxufSk7XG4iXX0=