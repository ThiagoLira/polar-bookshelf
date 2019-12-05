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
const TextType_1 = require("polar-shared/src/metadata/TextType");
const Texts_1 = require("polar-shared/src/metadata/Texts");
const Assertions_1 = require("../test/Assertions");
describe('Texts', function () {
    it("basic", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const text = Texts_1.Texts.create("asdf", TextType_1.TextType.HTML);
            const expected = {
                "HTML": "asdf"
            };
            Assertions_1.assertJSON(text, expected);
        });
    });
    xit("toText", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const input = Texts_1.Texts.create("<p>this is <b>the</b>text</p>", TextType_1.TextType.HTML);
            const expected = {
                "HTML": "asdf"
            };
            Assertions_1.assertJSON(Texts_1.Texts.toText(input), "");
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGV4dHNUZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVGV4dHNUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsaUVBQTREO0FBQzVELDJEQUFzRDtBQUN0RCxtREFBOEM7QUFFOUMsUUFBUSxDQUFDLE9BQU8sRUFBRTtJQUVkLEVBQUUsQ0FBQyxPQUFPLEVBQUU7O1lBRVIsTUFBTSxJQUFJLEdBQUcsYUFBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsbUJBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUVqRCxNQUFNLFFBQVEsR0FBRztnQkFDYixNQUFNLEVBQUUsTUFBTTthQUNqQixDQUFDO1lBRUYsdUJBQVUsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFL0IsQ0FBQztLQUFBLENBQUMsQ0FBQztJQUVILEdBQUcsQ0FBQyxRQUFRLEVBQUU7O1lBRVYsTUFBTSxLQUFLLEdBQUcsYUFBSyxDQUFDLE1BQU0sQ0FBQywrQkFBK0IsRUFBRSxtQkFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRTNFLE1BQU0sUUFBUSxHQUFHO2dCQUNiLE1BQU0sRUFBRSxNQUFNO2FBQ2pCLENBQUM7WUFFRix1QkFBVSxDQUFDLGFBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFeEMsQ0FBQztLQUFBLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtUZXh0VHlwZX0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9tZXRhZGF0YS9UZXh0VHlwZSc7XG5pbXBvcnQge1RleHRzfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL21ldGFkYXRhL1RleHRzJztcbmltcG9ydCB7YXNzZXJ0SlNPTn0gZnJvbSAnLi4vdGVzdC9Bc3NlcnRpb25zJztcblxuZGVzY3JpYmUoJ1RleHRzJywgZnVuY3Rpb24oKSB7XG5cbiAgICBpdChcImJhc2ljXCIsIGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGNvbnN0IHRleHQgPSBUZXh0cy5jcmVhdGUoXCJhc2RmXCIsIFRleHRUeXBlLkhUTUwpO1xuXG4gICAgICAgIGNvbnN0IGV4cGVjdGVkID0ge1xuICAgICAgICAgICAgXCJIVE1MXCI6IFwiYXNkZlwiXG4gICAgICAgIH07XG5cbiAgICAgICAgYXNzZXJ0SlNPTih0ZXh0LCBleHBlY3RlZCk7XG5cbiAgICB9KTtcblxuICAgIHhpdChcInRvVGV4dFwiLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICBjb25zdCBpbnB1dCA9IFRleHRzLmNyZWF0ZShcIjxwPnRoaXMgaXMgPGI+dGhlPC9iPnRleHQ8L3A+XCIsIFRleHRUeXBlLkhUTUwpO1xuXG4gICAgICAgIGNvbnN0IGV4cGVjdGVkID0ge1xuICAgICAgICAgICAgXCJIVE1MXCI6IFwiYXNkZlwiXG4gICAgICAgIH07XG5cbiAgICAgICAgYXNzZXJ0SlNPTihUZXh0cy50b1RleHQoaW5wdXQpLCBcIlwiKTtcblxuICAgIH0pO1xuXG59KTtcbiJdfQ==