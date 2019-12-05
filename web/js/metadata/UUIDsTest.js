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
const UUIDs_1 = require("./UUIDs");
const Promises_1 = require("../util/Promises");
describe('UUIDs', function () {
    it('Test UUID', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const u0 = UUIDs_1.UUIDs.create();
            yield Promises_1.Promises.waitFor(200);
            const u1 = UUIDs_1.UUIDs.create();
            chai_1.assert.notEqual(u0, u1);
            chai_1.assert.equal(UUIDs_1.UUIDs.compare(u0, u1), -1);
            chai_1.assert.equal(UUIDs_1.UUIDs.compare(u0, u0), 0);
            chai_1.assert.equal(UUIDs_1.UUIDs.compare(u1, u0), 1);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVVVJRHNUZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVVVJRHNUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsK0JBQTRCO0FBSTVCLG1DQUE4QjtBQUM5QiwrQ0FBMEM7QUFFMUMsUUFBUSxDQUFDLE9BQU8sRUFBRTtJQUVkLEVBQUUsQ0FBQyxXQUFXLEVBQUU7O1lBRVosTUFBTSxFQUFFLEdBQUcsYUFBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQzFCLE1BQU0sbUJBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDNUIsTUFBTSxFQUFFLEdBQUcsYUFBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBRTFCLGFBQU0sQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBRXhCLGFBQU0sQ0FBQyxLQUFLLENBQUMsYUFBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QyxhQUFNLENBQUMsS0FBSyxDQUFDLGFBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLGFBQU0sQ0FBQyxLQUFLLENBQUMsYUFBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFM0MsQ0FBQztLQUFBLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthc3NlcnR9IGZyb20gJ2NoYWknO1xuaW1wb3J0IHtNb2NrRG9jTWV0YXN9IGZyb20gJy4uL21ldGFkYXRhL0RvY01ldGFzJztcbmltcG9ydCB7VGVzdGluZ1RpbWV9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdGVzdC9UZXN0aW5nVGltZSc7XG5pbXBvcnQgdXVpZCBmcm9tICd1dWlkJztcbmltcG9ydCB7VVVJRHN9IGZyb20gJy4vVVVJRHMnO1xuaW1wb3J0IHtQcm9taXNlc30gZnJvbSAnLi4vdXRpbC9Qcm9taXNlcyc7XG5cbmRlc2NyaWJlKCdVVUlEcycsIGZ1bmN0aW9uKCkge1xuXG4gICAgaXQoJ1Rlc3QgVVVJRCcsIGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGNvbnN0IHUwID0gVVVJRHMuY3JlYXRlKCk7XG4gICAgICAgIGF3YWl0IFByb21pc2VzLndhaXRGb3IoMjAwKTtcbiAgICAgICAgY29uc3QgdTEgPSBVVUlEcy5jcmVhdGUoKTtcblxuICAgICAgICBhc3NlcnQubm90RXF1YWwodTAsIHUxKTtcblxuICAgICAgICBhc3NlcnQuZXF1YWwoVVVJRHMuY29tcGFyZSh1MCwgdTEpLCAtMSk7XG4gICAgICAgIGFzc2VydC5lcXVhbChVVUlEcy5jb21wYXJlKHUwLCB1MCksIDApO1xuICAgICAgICBhc3NlcnQuZXF1YWwoVVVJRHMuY29tcGFyZSh1MSwgdTApLCAxKTtcblxuICAgIH0pO1xuXG59KTtcbiJdfQ==