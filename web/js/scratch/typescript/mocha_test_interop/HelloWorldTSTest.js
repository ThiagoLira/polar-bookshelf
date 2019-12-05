"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const HelloWorld_1 = require("./HelloWorld");
const assert = __importStar(require("assert"));
describe('HelloWorld', function () {
    it("Basic test, function", function () {
        let helloWorld = new HelloWorld_1.HelloWorld();
        assert.equal(helloWorld.getMessage(), "hello world");
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVsbG9Xb3JsZFRTVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkhlbGxvV29ybGRUU1Rlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsNkNBQXdDO0FBQ3hDLCtDQUFpQztBQUVqQyxRQUFRLENBQUMsWUFBWSxFQUFFO0lBRW5CLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRTtRQUN2QixJQUFJLFVBQVUsR0FBRyxJQUFJLHVCQUFVLEVBQUUsQ0FBQztRQUVsQyxNQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUN6RCxDQUFDLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIZWxsb1dvcmxkfSBmcm9tICcuL0hlbGxvV29ybGQnO1xuaW1wb3J0ICogYXMgYXNzZXJ0IGZyb20gJ2Fzc2VydCc7XG5cbmRlc2NyaWJlKCdIZWxsb1dvcmxkJywgZnVuY3Rpb24oKSB7XG5cbiAgICBpdChcIkJhc2ljIHRlc3QsIGZ1bmN0aW9uXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IGhlbGxvV29ybGQgPSBuZXcgSGVsbG9Xb3JsZCgpO1xuXG4gICAgICAgIGFzc2VydC5lcXVhbChoZWxsb1dvcmxkLmdldE1lc3NhZ2UoKSwgXCJoZWxsbyB3b3JsZFwiKTtcbiAgICB9KTtcblxufSk7XG5cbiJdfQ==