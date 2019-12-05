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
const FileLogger_1 = require("./FileLogger");
const FilePaths_1 = require("polar-shared/src/util/FilePaths");
const Files_1 = require("polar-shared/src/util/Files");
describe('FileLogger', function () {
    it("Basic", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const path = FilePaths_1.FilePaths.createTempName('file-logger-test.log');
            yield Files_1.Files.removeAsync(path);
            const fileLogger = yield FileLogger_1.FileLogger.create(path);
            chai_1.assert.ok(yield Files_1.Files.existsAsync(path));
            fileLogger.info("Hello world");
            fileLogger.info("This is an object: ", { 'hello': 'world' });
            fileLogger.info("This is a basic string: ", "basic string");
            fileLogger.error("This is an error: ", new Error("Fake error"));
            yield fileLogger.sync();
            yield fileLogger.close();
            const data = yield Files_1.Files.readFileAsync(path);
            console.log("data: ", data.toString("UTF8"));
            chai_1.assert.ok(data.indexOf("[info] Hello world") !== -1);
            chai_1.assert.ok(data.indexOf("[info] This is an object: { hello: 'world' }") !== -1);
            chai_1.assert.ok(data.indexOf("[info] This is a basic string: basic string") !== -1);
            chai_1.assert.ok(data.indexOf("[error] This is an error: \n" +
                "Error: Fake error\n" +
                "    at ") !== -1);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZUxvZ2dlclRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJGaWxlTG9nZ2VyVGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLCtCQUE0QjtBQUM1Qiw2Q0FBd0M7QUFDeEMsK0RBQTBEO0FBQzFELHVEQUFrRDtBQUVsRCxRQUFRLENBQUMsWUFBWSxFQUFFO0lBRW5CLEVBQUUsQ0FBQyxPQUFPLEVBQUU7O1lBRVIsTUFBTSxJQUFJLEdBQUcscUJBQVMsQ0FBQyxjQUFjLENBQUMsc0JBQXNCLENBQUMsQ0FBQztZQUM5RCxNQUFNLGFBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFOUIsTUFBTSxVQUFVLEdBQUcsTUFBTSx1QkFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUVqRCxhQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sYUFBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBRXpDLFVBQVUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFFL0IsVUFBVSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUMsQ0FBQyxDQUFDO1lBQzNELFVBQVUsQ0FBQyxJQUFJLENBQUMsMEJBQTBCLEVBQUUsY0FBYyxDQUFDLENBQUM7WUFFNUQsVUFBVSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBRWhFLE1BQU0sVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3hCLE1BQU0sVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBRXpCLE1BQU0sSUFBSSxHQUFHLE1BQU0sYUFBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUU3QyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFFN0MsYUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyRCxhQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsOENBQThDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9FLGFBQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyw2Q0FBNkMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUUsYUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLDhCQUE4QjtnQkFDMUIscUJBQXFCO2dCQUNyQixTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRWxELENBQUM7S0FBQSxDQUFDLENBQUM7QUFFUCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YXNzZXJ0fSBmcm9tICdjaGFpJztcbmltcG9ydCB7RmlsZUxvZ2dlcn0gZnJvbSAnLi9GaWxlTG9nZ2VyJztcbmltcG9ydCB7RmlsZVBhdGhzfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvRmlsZVBhdGhzJztcbmltcG9ydCB7RmlsZXN9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC9GaWxlcyc7XG5cbmRlc2NyaWJlKCdGaWxlTG9nZ2VyJywgZnVuY3Rpb24oKSB7XG5cbiAgICBpdChcIkJhc2ljXCIsIGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGNvbnN0IHBhdGggPSBGaWxlUGF0aHMuY3JlYXRlVGVtcE5hbWUoJ2ZpbGUtbG9nZ2VyLXRlc3QubG9nJyk7XG4gICAgICAgIGF3YWl0IEZpbGVzLnJlbW92ZUFzeW5jKHBhdGgpO1xuXG4gICAgICAgIGNvbnN0IGZpbGVMb2dnZXIgPSBhd2FpdCBGaWxlTG9nZ2VyLmNyZWF0ZShwYXRoKTtcblxuICAgICAgICBhc3NlcnQub2soYXdhaXQgRmlsZXMuZXhpc3RzQXN5bmMocGF0aCkpO1xuXG4gICAgICAgIGZpbGVMb2dnZXIuaW5mbyhcIkhlbGxvIHdvcmxkXCIpO1xuXG4gICAgICAgIGZpbGVMb2dnZXIuaW5mbyhcIlRoaXMgaXMgYW4gb2JqZWN0OiBcIiwgeydoZWxsbyc6ICd3b3JsZCd9KTtcbiAgICAgICAgZmlsZUxvZ2dlci5pbmZvKFwiVGhpcyBpcyBhIGJhc2ljIHN0cmluZzogXCIsIFwiYmFzaWMgc3RyaW5nXCIpO1xuXG4gICAgICAgIGZpbGVMb2dnZXIuZXJyb3IoXCJUaGlzIGlzIGFuIGVycm9yOiBcIiwgbmV3IEVycm9yKFwiRmFrZSBlcnJvclwiKSk7XG5cbiAgICAgICAgYXdhaXQgZmlsZUxvZ2dlci5zeW5jKCk7XG4gICAgICAgIGF3YWl0IGZpbGVMb2dnZXIuY2xvc2UoKTtcblxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgRmlsZXMucmVhZEZpbGVBc3luYyhwYXRoKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhcImRhdGE6IFwiLCBkYXRhLnRvU3RyaW5nKFwiVVRGOFwiKSk7XG5cbiAgICAgICAgYXNzZXJ0Lm9rKGRhdGEuaW5kZXhPZihcIltpbmZvXSBIZWxsbyB3b3JsZFwiKSAhPT0gLTEpO1xuICAgICAgICBhc3NlcnQub2soZGF0YS5pbmRleE9mKFwiW2luZm9dIFRoaXMgaXMgYW4gb2JqZWN0OiB7IGhlbGxvOiAnd29ybGQnIH1cIikgIT09IC0xKTtcbiAgICAgICAgYXNzZXJ0Lm9rKGRhdGEuaW5kZXhPZihcIltpbmZvXSBUaGlzIGlzIGEgYmFzaWMgc3RyaW5nOiBiYXNpYyBzdHJpbmdcIikgIT09IC0xKTtcbiAgICAgICAgYXNzZXJ0Lm9rKGRhdGEuaW5kZXhPZihcIltlcnJvcl0gVGhpcyBpcyBhbiBlcnJvcjogXFxuXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkVycm9yOiBGYWtlIGVycm9yXFxuXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiAgICBhdCBcIikgIT09IC0xKTtcblxuICAgIH0pO1xuXG59KTtcbiJdfQ==