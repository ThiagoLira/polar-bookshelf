"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Dictionaries_1 = require("polar-shared/src/util/Dictionaries");
const chai_1 = __importDefault(require("chai"));
const assert = chai_1.default.assert;
const expect = chai_1.default.expect;
chai_1.default.config.truncateThreshold = 0;
function assertJSON(actual, expected, message, unsorted) {
    actual = toJSON(actual, unsorted);
    expected = toJSON(expected, unsorted);
    if (actual !== expected) {
        console.error("BEGIN ACTUAL ==========");
        console.error(actual);
        console.error("END ACTUAL   ==========");
    }
    try {
        expect(actual).equal(expected, message);
    }
    catch (e) {
        console.error(e.message);
        throw e;
    }
}
exports.assertJSON = assertJSON;
function toJSON(obj, unsorted = false) {
    if (typeof obj === "string") {
        obj = JSON.parse(obj);
    }
    const replacer = (key, value) => {
        if (typeof value === 'object' && value instanceof Set) {
            return [...value];
        }
        return value;
    };
    if (!Array.isArray(obj) && !unsorted) {
        obj = Dictionaries_1.Dictionaries.sorted(obj);
    }
    return JSON.stringify(obj, replacer, "  ");
}
exports.toJSON = toJSON;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXNzZXJ0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkFzc2VydGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxxRUFBZ0U7QUFFaEUsZ0RBQXdCO0FBR3hCLE1BQU0sTUFBTSxHQUFHLGNBQUksQ0FBQyxNQUFNLENBQUM7QUFDM0IsTUFBTSxNQUFNLEdBQUcsY0FBSSxDQUFDLE1BQU0sQ0FBQztBQUUzQixjQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixHQUFHLENBQUMsQ0FBQztBQUdsQyxTQUFnQixVQUFVLENBQUMsTUFBVyxFQUNYLFFBQWEsRUFDYixPQUFnQixFQUNoQixRQUFrQjtJQUd6QyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNsQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUV0QyxJQUFLLE1BQU0sS0FBSyxRQUFRLEVBQUU7UUFDdEIsT0FBTyxDQUFDLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBQ3pDLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEIsT0FBTyxDQUFDLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0tBQzVDO0lBRUQsSUFBSTtRQUNBLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQzNDO0lBQUMsT0FBTyxDQUFDLEVBQUU7UUFDUixPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN6QixNQUFNLENBQUMsQ0FBQztLQUNYO0FBRUwsQ0FBQztBQXRCRCxnQ0FzQkM7QUFFRCxTQUFnQixNQUFNLENBQUMsR0FBUSxFQUFFLFdBQW9CLEtBQUs7SUFFdEQsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLEVBQUU7UUFHekIsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDekI7SUFZRCxNQUFNLFFBQVEsR0FBRyxDQUFDLEdBQVEsRUFBRSxLQUFVLEVBQUUsRUFBRTtRQUd0QyxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsSUFBSSxLQUFLLFlBQVksR0FBRyxFQUFFO1lBQ25ELE9BQU8sQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDO1NBQ3JCO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFFakIsQ0FBQyxDQUFDO0lBRUYsSUFBSSxDQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7UUFLbkMsR0FBRyxHQUFHLDJCQUFZLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ2xDO0lBRUQsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFFL0MsQ0FBQztBQXZDRCx3QkF1Q0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpY3Rpb25hcmllc30gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvdXRpbC9EaWN0aW9uYXJpZXNcIjtcblxuaW1wb3J0IGNoYWkgZnJvbSAnY2hhaSc7XG4vLyBjb25zdCBjaGFpRGlmZiA9IHJlcXVpcmUoXCJjaGFpLWRpZmZcIik7XG5cbmNvbnN0IGFzc2VydCA9IGNoYWkuYXNzZXJ0O1xuY29uc3QgZXhwZWN0ID0gY2hhaS5leHBlY3Q7XG5cbmNoYWkuY29uZmlnLnRydW5jYXRlVGhyZXNob2xkID0gMDtcbi8vIGNoYWkudXNlKGNoYWlEaWZmKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydEpTT04oYWN0dWFsOiBhbnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogYW55LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZT86IHN0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuc29ydGVkPzogYm9vbGVhbikge1xuXG4gICAgLy8gZmlyc3QgY29udmVydCBib3RoIHRvIEpTT04gaWYgbmVjZXNzYXJ5LlxuICAgIGFjdHVhbCA9IHRvSlNPTihhY3R1YWwsIHVuc29ydGVkKTtcbiAgICBleHBlY3RlZCA9IHRvSlNPTihleHBlY3RlZCwgdW5zb3J0ZWQpO1xuXG4gICAgaWYgKCBhY3R1YWwgIT09IGV4cGVjdGVkKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJCRUdJTiBBQ1RVQUwgPT09PT09PT09PVwiKTtcbiAgICAgICAgY29uc29sZS5lcnJvcihhY3R1YWwpO1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRU5EIEFDVFVBTCAgID09PT09PT09PT1cIik7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgICAgZXhwZWN0KGFjdHVhbCkuZXF1YWwoZXhwZWN0ZWQsIG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlLm1lc3NhZ2UpO1xuICAgICAgICB0aHJvdyBlO1xuICAgIH1cblxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9KU09OKG9iajogYW55LCB1bnNvcnRlZDogYm9vbGVhbiA9IGZhbHNlKTogc3RyaW5nIHtcblxuICAgIGlmICh0eXBlb2Ygb2JqID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIC8vIGZpcnN0IHBhcnNlIGl0IGFzIGFzIEpTT04gaW50byBhbiBvYmplY3Qgc28gaXQncyBzZXJpYWxpemVkIHVzaW5nXG4gICAgICAgIC8vIHRoZSBzYW1lIGNhbm9uaWNhbCBmdW5jdGlvbiBiZWxvdy5cbiAgICAgICAgb2JqID0gSlNPTi5wYXJzZShvYmopO1xuICAgIH1cblxuICAgIC8vIGlmKG9iaiBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgLy8gICAgIGlmKCBvYmoubGVuZ3RoID49IDEgKSB7XG4gICAgLy8gICAgICAgICBpZiAoKHR5cGVvZiBvYmpbMF0pID09PSBcInN0cmluZ1wiKSB7XG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfVxuICAgIC8vIH1cblxuICAgIC8vIGFsc28gYWNjZXB0IGFuIGFycmF5IG9mIHN0cmluZ3MuXG5cbiAgICBjb25zdCByZXBsYWNlciA9IChrZXk6IGFueSwgdmFsdWU6IGFueSkgPT4ge1xuXG4gICAgICAgIC8vIGhhbmRsZSBzZXQgcmVwbGFjZW1lbnQuLi5cbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgaW5zdGFuY2VvZiBTZXQpIHtcbiAgICAgICAgICAgIHJldHVybiBbLi4udmFsdWVdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuXG4gICAgfTtcblxuICAgIGlmICghIEFycmF5LmlzQXJyYXkob2JqKSAmJiAhdW5zb3J0ZWQpIHtcblxuICAgICAgICAvLyBUT0RPOiBiZWNhdXNlIG9mIHRoZSB0b0pTT04gbWV0aG9kIHdlIG1pZ2h0IHdhbnQgdG8gY2FsbCBKU09OXG4gICAgICAgIC8vIHN0cmluZ2lmeSwgdGhlbiBwYXJzZSBpdCBhZ2FpbiwgdGhlbiBzb3J0LCB0aGVuIHN0cmluZ2lmeSBhZ2Fpbi5cblxuICAgICAgICBvYmogPSBEaWN0aW9uYXJpZXMuc29ydGVkKG9iaik7XG4gICAgfVxuXG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG9iaiwgcmVwbGFjZXIsIFwiICBcIik7XG5cbn1cbiJdfQ==