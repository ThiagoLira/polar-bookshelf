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
const QueuedReactor_1 = require("./QueuedReactor");
const Assertions_1 = require("../test/Assertions");
describe('QueuedReactor', function () {
    it("With queued messages", function () {
        const reactor = new QueuedReactor_1.QueuedReactor();
        const eventName = "messages";
        chai_1.assert.notEqual(reactor.registerEvent(eventName), undefined);
        chai_1.assert.equal(reactor.getEventListeners(eventName).length, 0);
        reactor.dispatchEvent(eventName, 'hello');
        reactor.dispatchEvent(eventName, 'world');
        const messages = [];
        reactor.addEventListener(eventName, (message) => {
            messages.push(message);
        });
        const expected = ["hello", "world"];
        Assertions_1.assertJSON(messages, expected);
        Assertions_1.assertJSON(reactor.queue, {});
    });
    it("once", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const reactor = new QueuedReactor_1.QueuedReactor();
            const eventName = "messages";
            chai_1.assert.notEqual(reactor.registerEvent(eventName), undefined);
            chai_1.assert.equal(reactor.getEventListeners(eventName).length, 0);
            reactor.dispatchEvent(eventName, 'hello');
            reactor.dispatchEvent(eventName, 'world');
            const messagePromise = reactor.once(eventName);
            const message = yield messagePromise;
            chai_1.assert.equal(message, 'hello');
            chai_1.assert.equal(reactor.getEventListeners(eventName).length, 0);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUXVldWVkUmVhY3RvclRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJRdWV1ZWRSZWFjdG9yVGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLCtCQUE0QjtBQUM1QixtREFBOEM7QUFDOUMsbURBQThDO0FBRTlDLFFBQVEsQ0FBQyxlQUFlLEVBQUU7SUFFdEIsRUFBRSxDQUFDLHNCQUFzQixFQUFFO1FBRXZCLE1BQU0sT0FBTyxHQUFHLElBQUksNkJBQWEsRUFBVSxDQUFDO1FBRTVDLE1BQU0sU0FBUyxHQUFHLFVBQVUsQ0FBQztRQUM3QixhQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFFN0QsYUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRTdELE9BQU8sQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRTFDLE1BQU0sUUFBUSxHQUFhLEVBQUUsQ0FBQztRQUU5QixPQUFPLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDNUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztRQUVILE1BQU0sUUFBUSxHQUFhLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRTlDLHVCQUFVLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBSS9CLHVCQUFVLENBQVEsT0FBUSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztJQUUxQyxDQUFDLENBQUMsQ0FBQztJQUdILEVBQUUsQ0FBQyxNQUFNLEVBQUU7O1lBRVAsTUFBTSxPQUFPLEdBQUcsSUFBSSw2QkFBYSxFQUFVLENBQUM7WUFFNUMsTUFBTSxTQUFTLEdBQUcsVUFBVSxDQUFDO1lBQzdCLGFBQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQztZQUU3RCxhQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFHN0QsT0FBTyxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDMUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFFMUMsTUFBTSxjQUFjLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUUvQyxNQUFNLE9BQU8sR0FBRyxNQUFNLGNBQWMsQ0FBQztZQUVyQyxhQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztZQUUvQixhQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFakUsQ0FBQztLQUFBLENBQUMsQ0FBQztBQUdQLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthc3NlcnR9IGZyb20gXCJjaGFpXCI7XG5pbXBvcnQge1F1ZXVlZFJlYWN0b3J9IGZyb20gJy4vUXVldWVkUmVhY3Rvcic7XG5pbXBvcnQge2Fzc2VydEpTT059IGZyb20gJy4uL3Rlc3QvQXNzZXJ0aW9ucyc7XG5cbmRlc2NyaWJlKCdRdWV1ZWRSZWFjdG9yJywgZnVuY3Rpb24oKSB7XG5cbiAgICBpdChcIldpdGggcXVldWVkIG1lc3NhZ2VzXCIsIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGNvbnN0IHJlYWN0b3IgPSBuZXcgUXVldWVkUmVhY3RvcjxzdHJpbmc+KCk7XG5cbiAgICAgICAgY29uc3QgZXZlbnROYW1lID0gXCJtZXNzYWdlc1wiO1xuICAgICAgICBhc3NlcnQubm90RXF1YWwocmVhY3Rvci5yZWdpc3RlckV2ZW50KGV2ZW50TmFtZSksIHVuZGVmaW5lZCk7XG5cbiAgICAgICAgYXNzZXJ0LmVxdWFsKHJlYWN0b3IuZ2V0RXZlbnRMaXN0ZW5lcnMoZXZlbnROYW1lKS5sZW5ndGgsIDApO1xuXG4gICAgICAgIHJlYWN0b3IuZGlzcGF0Y2hFdmVudChldmVudE5hbWUsICdoZWxsbycpO1xuICAgICAgICByZWFjdG9yLmRpc3BhdGNoRXZlbnQoZXZlbnROYW1lLCAnd29ybGQnKTtcblxuICAgICAgICBjb25zdCBtZXNzYWdlczogc3RyaW5nW10gPSBbXTtcblxuICAgICAgICByZWFjdG9yLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCAobWVzc2FnZSkgPT4ge1xuICAgICAgICAgICAgbWVzc2FnZXMucHVzaChtZXNzYWdlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgZXhwZWN0ZWQ6IHN0cmluZ1tdID0gW1wiaGVsbG9cIiwgXCJ3b3JsZFwiXTtcblxuICAgICAgICBhc3NlcnRKU09OKG1lc3NhZ2VzLCBleHBlY3RlZCk7XG5cbiAgICAgICAgLy8gbm93IG1ha2Ugc3VyZSBub3RoaW5nIGlzIHN0b3JlZCBpbiB0aGUgcmVhY3RvclxuXG4gICAgICAgIGFzc2VydEpTT04oKDxhbnk+IHJlYWN0b3IpLnF1ZXVlLCB7fSk7XG5cbiAgICB9KTtcblxuXG4gICAgaXQoXCJvbmNlXCIsIGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGNvbnN0IHJlYWN0b3IgPSBuZXcgUXVldWVkUmVhY3RvcjxzdHJpbmc+KCk7XG5cbiAgICAgICAgY29uc3QgZXZlbnROYW1lID0gXCJtZXNzYWdlc1wiO1xuICAgICAgICBhc3NlcnQubm90RXF1YWwocmVhY3Rvci5yZWdpc3RlckV2ZW50KGV2ZW50TmFtZSksIHVuZGVmaW5lZCk7XG5cbiAgICAgICAgYXNzZXJ0LmVxdWFsKHJlYWN0b3IuZ2V0RXZlbnRMaXN0ZW5lcnMoZXZlbnROYW1lKS5sZW5ndGgsIDApO1xuXG4gICAgICAgIC8vIG5vdGhpbmcgaXMgbGlzdGVuaW5nIG5vdy5cbiAgICAgICAgcmVhY3Rvci5kaXNwYXRjaEV2ZW50KGV2ZW50TmFtZSwgJ2hlbGxvJyk7XG4gICAgICAgIHJlYWN0b3IuZGlzcGF0Y2hFdmVudChldmVudE5hbWUsICd3b3JsZCcpO1xuXG4gICAgICAgIGNvbnN0IG1lc3NhZ2VQcm9taXNlID0gcmVhY3Rvci5vbmNlKGV2ZW50TmFtZSk7XG5cbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IG1lc3NhZ2VQcm9taXNlO1xuXG4gICAgICAgIGFzc2VydC5lcXVhbChtZXNzYWdlLCAnaGVsbG8nKTtcblxuICAgICAgICBhc3NlcnQuZXF1YWwocmVhY3Rvci5nZXRFdmVudExpc3RlbmVycyhldmVudE5hbWUpLmxlbmd0aCwgMCk7XG5cbiAgICB9KTtcblxuXG59KTtcbiJdfQ==