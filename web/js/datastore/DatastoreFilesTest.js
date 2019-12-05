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
const DatastoreFiles_1 = require("./DatastoreFiles");
describe('DastastoreFiles', function () {
    it("isValidFileName", function () {
        return __awaiter(this, void 0, void 0, function* () {
            chai_1.assert.ok(DatastoreFiles_1.DatastoreFiles.isValidFileName('test.jpg'));
            chai_1.assert.ok(DatastoreFiles_1.DatastoreFiles.isValidFileName('test.html'));
            chai_1.assert.ok(DatastoreFiles_1.DatastoreFiles.isValidFileName('abc124ABC.txt'));
            chai_1.assert.ok(DatastoreFiles_1.DatastoreFiles.isValidFileName('abc124ABC'));
            chai_1.assert.ok(!DatastoreFiles_1.DatastoreFiles.isValidFileName('testthis.jpggg'));
        });
    });
    it("sanitizeFilename", function () {
        return __awaiter(this, void 0, void 0, function* () {
            chai_1.assert.equal(DatastoreFiles_1.DatastoreFiles.sanitizeFileName('asdf/ \\ : * ? " < > |asdf'), 'asdf_ _ _ _ _ _ _ _ _asdf');
            chai_1.assert.equal(DatastoreFiles_1.DatastoreFiles.isSanitizedFileName('asdf/ \\ : * ? " < > |asdf'), false);
            chai_1.assert.equal(DatastoreFiles_1.DatastoreFiles.isSanitizedFileName('asdf_ _ _ _ _ _ _ _ _asdf'), true);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0YXN0b3JlRmlsZXNUZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRGF0YXN0b3JlRmlsZXNUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsK0JBQTRCO0FBRTVCLHFEQUFnRDtBQUVoRCxRQUFRLENBQUMsaUJBQWlCLEVBQUU7SUFFeEIsRUFBRSxDQUFDLGlCQUFpQixFQUFFOztZQUVsQixhQUFNLENBQUMsRUFBRSxDQUFDLCtCQUFjLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDdEQsYUFBTSxDQUFDLEVBQUUsQ0FBQywrQkFBYyxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ3ZELGFBQU0sQ0FBQyxFQUFFLENBQUMsK0JBQWMsQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztZQUMzRCxhQUFNLENBQUMsRUFBRSxDQUFDLCtCQUFjLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFHdkQsYUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFFLCtCQUFjLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztRQUVsRSxDQUFDO0tBQUEsQ0FBQyxDQUFDO0lBSUgsRUFBRSxDQUFDLGtCQUFrQixFQUFFOztZQUNuQixhQUFNLENBQUMsS0FBSyxDQUFDLCtCQUFjLENBQUMsZ0JBQWdCLENBQUMsNEJBQTRCLENBQUMsRUFBRSwyQkFBMkIsQ0FBQyxDQUFDO1lBRXpHLGFBQU0sQ0FBQyxLQUFLLENBQUMsK0JBQWMsQ0FBQyxtQkFBbUIsQ0FBQyw0QkFBNEIsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3RGLGFBQU0sQ0FBQyxLQUFLLENBQUMsK0JBQWMsQ0FBQyxtQkFBbUIsQ0FBQywyQkFBMkIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRXhGLENBQUM7S0FBQSxDQUFDLENBQUM7QUFFUCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YXNzZXJ0fSBmcm9tIFwiY2hhaVwiO1xuaW1wb3J0IHtEaXNrRGF0YXN0b3JlfSBmcm9tICcuL0Rpc2tEYXRhc3RvcmUnO1xuaW1wb3J0IHtEYXRhc3RvcmVGaWxlc30gZnJvbSBcIi4vRGF0YXN0b3JlRmlsZXNcIjtcblxuZGVzY3JpYmUoJ0Rhc3Rhc3RvcmVGaWxlcycsIGZ1bmN0aW9uKCkge1xuXG4gICAgaXQoXCJpc1ZhbGlkRmlsZU5hbWVcIiwgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgYXNzZXJ0Lm9rKERhdGFzdG9yZUZpbGVzLmlzVmFsaWRGaWxlTmFtZSgndGVzdC5qcGcnKSk7XG4gICAgICAgIGFzc2VydC5vayhEYXRhc3RvcmVGaWxlcy5pc1ZhbGlkRmlsZU5hbWUoJ3Rlc3QuaHRtbCcpKTtcbiAgICAgICAgYXNzZXJ0Lm9rKERhdGFzdG9yZUZpbGVzLmlzVmFsaWRGaWxlTmFtZSgnYWJjMTI0QUJDLnR4dCcpKTtcbiAgICAgICAgYXNzZXJ0Lm9rKERhdGFzdG9yZUZpbGVzLmlzVmFsaWRGaWxlTmFtZSgnYWJjMTI0QUJDJykpO1xuXG4gICAgICAgIC8vIGFzc2VydC5vayghIERhdGFzdG9yZUZpbGVzLmlzVmFsaWRGaWxlTmFtZSgndGVzdCB0aGlzLmpwZycpKTtcbiAgICAgICAgYXNzZXJ0Lm9rKCEgRGF0YXN0b3JlRmlsZXMuaXNWYWxpZEZpbGVOYW1lKCd0ZXN0dGhpcy5qcGdnZycpKTtcblxuICAgIH0pO1xuXG5cblxuICAgIGl0KFwic2FuaXRpemVGaWxlbmFtZVwiLCBhc3luYyBmdW5jdGlvbigpIHtcbiAgICAgICAgYXNzZXJ0LmVxdWFsKERhdGFzdG9yZUZpbGVzLnNhbml0aXplRmlsZU5hbWUoJ2FzZGYvIFxcXFwgOiAqID8gXCIgPCA+IHxhc2RmJyksICdhc2RmXyBfIF8gXyBfIF8gXyBfIF9hc2RmJyk7XG5cbiAgICAgICAgYXNzZXJ0LmVxdWFsKERhdGFzdG9yZUZpbGVzLmlzU2FuaXRpemVkRmlsZU5hbWUoJ2FzZGYvIFxcXFwgOiAqID8gXCIgPCA+IHxhc2RmJyksIGZhbHNlKTtcbiAgICAgICAgYXNzZXJ0LmVxdWFsKERhdGFzdG9yZUZpbGVzLmlzU2FuaXRpemVkRmlsZU5hbWUoJ2FzZGZfIF8gXyBfIF8gXyBfIF8gX2FzZGYnKSwgdHJ1ZSk7XG5cbiAgICB9KTtcblxufSk7XG4iXX0=