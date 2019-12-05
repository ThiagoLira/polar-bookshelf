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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ReactInjector_1 = require("../../ui/util/ReactInjector");
const react_1 = __importDefault(require("react"));
const AddContentButtonOverlay_1 = require("./AddContentButtonOverlay");
const Functions_1 = require("polar-shared/src/util/Functions");
class AddContentButtonOverlays {
    static create(onClick) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = 'add-content-button-overlay-parent';
            return ReactInjector_1.ReactInjector.inject(react_1.default.createElement(AddContentButtonOverlay_1.AddContentButtonOverlay, { onClick: onClick || Functions_1.NULL_FUNCTION }), id);
        });
    }
}
exports.AddContentButtonOverlays = AddContentButtonOverlays;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRkQ29udGVudEJ1dHRvbk92ZXJsYXlzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQWRkQ29udGVudEJ1dHRvbk92ZXJsYXlzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLCtEQUEwRDtBQUUxRCxrREFBMEI7QUFDMUIsdUVBQWtFO0FBQ2xFLCtEQUE4RDtBQUU5RCxNQUFhLHdCQUF3QjtJQUUxQixNQUFNLENBQU8sTUFBTSxDQUFDLE9BQW9COztZQUUzQyxNQUFNLEVBQUUsR0FBRyxtQ0FBbUMsQ0FBQztZQUMvQyxPQUFPLDZCQUFhLENBQUMsTUFBTSxDQUFDLDhCQUFDLGlEQUF1QixJQUFDLE9BQU8sRUFBRSxPQUFPLElBQUkseUJBQWEsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRW5HLENBQUM7S0FBQTtDQUVKO0FBVEQsNERBU0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1JlYWN0SW5qZWN0b3J9IGZyb20gJy4uLy4uL3VpL3V0aWwvUmVhY3RJbmplY3Rvcic7XG5pbXBvcnQge0luamVjdGVkQ29tcG9uZW50fSBmcm9tICcuLi8uLi91aS91dGlsL1JlYWN0SW5qZWN0b3InO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7QWRkQ29udGVudEJ1dHRvbk92ZXJsYXl9IGZyb20gJy4vQWRkQ29udGVudEJ1dHRvbk92ZXJsYXknO1xuaW1wb3J0IHtOVUxMX0ZVTkNUSU9OfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvRnVuY3Rpb25zJztcblxuZXhwb3J0IGNsYXNzIEFkZENvbnRlbnRCdXR0b25PdmVybGF5cyB7XG5cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGNyZWF0ZShvbkNsaWNrPzogKCkgPT4gdm9pZCk6IFByb21pc2U8SW5qZWN0ZWRDb21wb25lbnQ+IHtcblxuICAgICAgICBjb25zdCBpZCA9ICdhZGQtY29udGVudC1idXR0b24tb3ZlcmxheS1wYXJlbnQnO1xuICAgICAgICByZXR1cm4gUmVhY3RJbmplY3Rvci5pbmplY3QoPEFkZENvbnRlbnRCdXR0b25PdmVybGF5IG9uQ2xpY2s9e29uQ2xpY2sgfHwgTlVMTF9GVU5DVElPTn0vPiwgaWQpO1xuXG4gICAgfVxuXG59XG4iXX0=