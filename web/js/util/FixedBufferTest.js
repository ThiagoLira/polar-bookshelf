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
const FixedBuffer_1 = require("./FixedBuffer");
describe('FixedBuffer', function () {
    it("basic", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const buffer = new FixedBuffer_1.FixedBuffer(2);
            const toText = () => {
                return buffer.toView().join("\n");
            };
            chai_1.assert.equal(toText(), "");
            buffer.write("0");
            chai_1.assert.equal(toText(), "0");
            buffer.write("1");
            chai_1.assert.equal(toText(), "0\n1");
            buffer.write("2");
            chai_1.assert.equal(toText(), "1\n2");
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRml4ZWRCdWZmZXJUZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRml4ZWRCdWZmZXJUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRUEsK0JBQTRCO0FBQzVCLCtDQUEwQztBQUUxQyxRQUFRLENBQUMsYUFBYSxFQUFFO0lBRXBCLEVBQUUsQ0FBQyxPQUFPLEVBQUU7O1lBRVIsTUFBTSxNQUFNLEdBQUcsSUFBSSx5QkFBVyxDQUFTLENBQUMsQ0FBQyxDQUFDO1lBRTFDLE1BQU0sTUFBTSxHQUFHLEdBQUcsRUFBRTtnQkFDaEIsT0FBTyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3RDLENBQUMsQ0FBQztZQUVGLGFBQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFFM0IsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUVsQixhQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBRTVCLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFbEIsYUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUUvQixNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRWxCLGFBQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFbkMsQ0FBQztLQUFBLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtGaW5nZXJwcmludHN9IGZyb20gJy4vRmluZ2VycHJpbnRzJztcblxuaW1wb3J0IHthc3NlcnR9IGZyb20gJ2NoYWknO1xuaW1wb3J0IHtGaXhlZEJ1ZmZlcn0gZnJvbSAnLi9GaXhlZEJ1ZmZlcic7XG5cbmRlc2NyaWJlKCdGaXhlZEJ1ZmZlcicsIGZ1bmN0aW9uKCkge1xuXG4gICAgaXQoXCJiYXNpY1wiLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICBjb25zdCBidWZmZXIgPSBuZXcgRml4ZWRCdWZmZXI8c3RyaW5nPigyKTtcblxuICAgICAgICBjb25zdCB0b1RleHQgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYnVmZmVyLnRvVmlldygpLmpvaW4oXCJcXG5cIik7XG4gICAgICAgIH07XG5cbiAgICAgICAgYXNzZXJ0LmVxdWFsKHRvVGV4dCgpLCBcIlwiKTtcblxuICAgICAgICBidWZmZXIud3JpdGUoXCIwXCIpO1xuXG4gICAgICAgIGFzc2VydC5lcXVhbCh0b1RleHQoKSwgXCIwXCIpO1xuXG4gICAgICAgIGJ1ZmZlci53cml0ZShcIjFcIik7XG5cbiAgICAgICAgYXNzZXJ0LmVxdWFsKHRvVGV4dCgpLCBcIjBcXG4xXCIpO1xuXG4gICAgICAgIGJ1ZmZlci53cml0ZShcIjJcIik7XG5cbiAgICAgICAgYXNzZXJ0LmVxdWFsKHRvVGV4dCgpLCBcIjFcXG4yXCIpO1xuXG4gICAgfSk7XG5cbn0pO1xuIl19