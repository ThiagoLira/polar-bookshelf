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
const MockCapturedContent_1 = require("polar-content-capture/src/phz/MockCapturedContent");
const CapturedPHZWriter_1 = require("polar-content-capture/src/phz/CapturedPHZWriter");
const PHZWriter_1 = require("polar-content-capture/src/phz/PHZWriter");
class MockPHZWriter {
    static write(path) {
        return __awaiter(this, void 0, void 0, function* () {
            const captured = MockCapturedContent_1.MockCapturedContent.create();
            const output = new PHZWriter_1.PHZWriter(path);
            const capturedPHZWriter = new CapturedPHZWriter_1.CapturedPHZWriter(output);
            yield capturedPHZWriter.convert(captured);
        });
    }
}
exports.MockPHZWriter = MockPHZWriter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9ja1BIWldyaXRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIk1vY2tQSFpXcml0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFHQSwyRkFBc0Y7QUFDdEYsdUZBQWtGO0FBQ2xGLHVFQUFrRTtBQUVsRSxNQUFhLGFBQWE7SUFFZixNQUFNLENBQU8sS0FBSyxDQUFDLElBQVk7O1lBRWxDLE1BQU0sUUFBUSxHQUFHLHlDQUFtQixDQUFDLE1BQU0sRUFBRSxDQUFDO1lBRTlDLE1BQU0sTUFBTSxHQUFHLElBQUkscUJBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNuQyxNQUFNLGlCQUFpQixHQUFHLElBQUkscUNBQWlCLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDeEQsTUFBTSxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFOUMsQ0FBQztLQUFBO0NBRUo7QUFaRCxzQ0FZQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV3JpdGUgbW9jayBQSFogZGF0YSB0byBhIGZpbGUgd2UgY2FuIHdvcmsgd2l0aC5cbiAqL1xuaW1wb3J0IHtNb2NrQ2FwdHVyZWRDb250ZW50fSBmcm9tICdwb2xhci1jb250ZW50LWNhcHR1cmUvc3JjL3Boei9Nb2NrQ2FwdHVyZWRDb250ZW50JztcbmltcG9ydCB7Q2FwdHVyZWRQSFpXcml0ZXJ9IGZyb20gJ3BvbGFyLWNvbnRlbnQtY2FwdHVyZS9zcmMvcGh6L0NhcHR1cmVkUEhaV3JpdGVyJztcbmltcG9ydCB7UEhaV3JpdGVyfSBmcm9tIFwicG9sYXItY29udGVudC1jYXB0dXJlL3NyYy9waHovUEhaV3JpdGVyXCI7XG5cbmV4cG9ydCBjbGFzcyBNb2NrUEhaV3JpdGVyIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgd3JpdGUocGF0aDogc3RyaW5nKSB7XG5cbiAgICAgICAgY29uc3QgY2FwdHVyZWQgPSBNb2NrQ2FwdHVyZWRDb250ZW50LmNyZWF0ZSgpO1xuXG4gICAgICAgIGNvbnN0IG91dHB1dCA9IG5ldyBQSFpXcml0ZXIocGF0aCk7XG4gICAgICAgIGNvbnN0IGNhcHR1cmVkUEhaV3JpdGVyID0gbmV3IENhcHR1cmVkUEhaV3JpdGVyKG91dHB1dCk7XG4gICAgICAgIGF3YWl0IGNhcHR1cmVkUEhaV3JpdGVyLmNvbnZlcnQoY2FwdHVyZWQpO1xuXG4gICAgfVxuXG59XG4iXX0=