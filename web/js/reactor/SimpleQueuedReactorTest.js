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
const SimpleReactor_1 = require("./SimpleReactor");
describe('SimpleQueuedReactor', function () {
    it("With queued messages", function () {
        const reactor = new SimpleReactor_1.SimpleReactor(new QueuedReactor_1.QueuedReactor());
        chai_1.assert.equal(reactor.getEventListeners().length, 0);
        reactor.dispatchEvent('hello');
        reactor.dispatchEvent('world');
        const messages = [];
        reactor.addEventListener((message) => {
            messages.push(message);
        });
        const expected = ["hello", "world"];
        Assertions_1.assertJSON(messages, expected);
        Assertions_1.assertJSON(reactor.delegate.queue, {});
    });
    it("once", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const queuedReactor = new QueuedReactor_1.QueuedReactor();
            const reactor = new SimpleReactor_1.SimpleReactor(queuedReactor);
            chai_1.assert.equal(reactor.delegate, queuedReactor);
            chai_1.assert.equal(reactor.getEventListeners().length, 0);
            reactor.dispatchEvent('hello');
            reactor.dispatchEvent('world');
            const messagePromise = reactor.once();
            const message = yield messagePromise;
            chai_1.assert.equal(message, 'hello');
            chai_1.assert.equal(reactor.getEventListeners().length, 0);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2ltcGxlUXVldWVkUmVhY3RvclRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJTaW1wbGVRdWV1ZWRSZWFjdG9yVGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLCtCQUE0QjtBQUM1QixtREFBOEM7QUFDOUMsbURBQThDO0FBQzlDLG1EQUE4QztBQUU5QyxRQUFRLENBQUMscUJBQXFCLEVBQUU7SUFFNUIsRUFBRSxDQUFDLHNCQUFzQixFQUFFO1FBRXZCLE1BQU0sT0FBTyxHQUFHLElBQUksNkJBQWEsQ0FBUyxJQUFJLDZCQUFhLEVBQUUsQ0FBQyxDQUFDO1FBRS9ELGFBQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGlCQUFpQixFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRXBELE9BQU8sQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDL0IsT0FBTyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUUvQixNQUFNLFFBQVEsR0FBYSxFQUFFLENBQUM7UUFFOUIsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDakMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztRQUVILE1BQU0sUUFBUSxHQUFhLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRTlDLHVCQUFVLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBSS9CLHVCQUFVLENBQVEsT0FBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFbkQsQ0FBQyxDQUFDLENBQUM7SUFHSCxFQUFFLENBQUMsTUFBTSxFQUFFOztZQUVQLE1BQU0sYUFBYSxHQUFHLElBQUksNkJBQWEsRUFBVSxDQUFDO1lBQ2xELE1BQU0sT0FBTyxHQUFHLElBQUksNkJBQWEsQ0FBUyxhQUFhLENBQUMsQ0FBQztZQUV6RCxhQUFNLENBQUMsS0FBSyxDQUFRLE9BQVEsQ0FBQyxRQUFRLEVBQUUsYUFBYSxDQUFDLENBQUM7WUFFdEQsYUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFFcEQsT0FBTyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMvQixPQUFPLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRS9CLE1BQU0sY0FBYyxHQUFHLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUV0QyxNQUFNLE9BQU8sR0FBRyxNQUFNLGNBQWMsQ0FBQztZQUVyQyxhQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztZQUUvQixhQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztRQUV4RCxDQUFDO0tBQUEsQ0FBQyxDQUFDO0FBRVAsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Fzc2VydH0gZnJvbSBcImNoYWlcIjtcbmltcG9ydCB7UXVldWVkUmVhY3Rvcn0gZnJvbSAnLi9RdWV1ZWRSZWFjdG9yJztcbmltcG9ydCB7YXNzZXJ0SlNPTn0gZnJvbSAnLi4vdGVzdC9Bc3NlcnRpb25zJztcbmltcG9ydCB7U2ltcGxlUmVhY3Rvcn0gZnJvbSAnLi9TaW1wbGVSZWFjdG9yJztcblxuZGVzY3JpYmUoJ1NpbXBsZVF1ZXVlZFJlYWN0b3InLCBmdW5jdGlvbigpIHtcblxuICAgIGl0KFwiV2l0aCBxdWV1ZWQgbWVzc2FnZXNcIiwgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgY29uc3QgcmVhY3RvciA9IG5ldyBTaW1wbGVSZWFjdG9yPHN0cmluZz4obmV3IFF1ZXVlZFJlYWN0b3IoKSk7XG5cbiAgICAgICAgYXNzZXJ0LmVxdWFsKHJlYWN0b3IuZ2V0RXZlbnRMaXN0ZW5lcnMoKS5sZW5ndGgsIDApO1xuXG4gICAgICAgIHJlYWN0b3IuZGlzcGF0Y2hFdmVudCgnaGVsbG8nKTtcbiAgICAgICAgcmVhY3Rvci5kaXNwYXRjaEV2ZW50KCd3b3JsZCcpO1xuXG4gICAgICAgIGNvbnN0IG1lc3NhZ2VzOiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgICAgIHJlYWN0b3IuYWRkRXZlbnRMaXN0ZW5lcigobWVzc2FnZSkgPT4ge1xuICAgICAgICAgICAgbWVzc2FnZXMucHVzaChtZXNzYWdlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgZXhwZWN0ZWQ6IHN0cmluZ1tdID0gW1wiaGVsbG9cIiwgXCJ3b3JsZFwiXTtcblxuICAgICAgICBhc3NlcnRKU09OKG1lc3NhZ2VzLCBleHBlY3RlZCk7XG5cbiAgICAgICAgLy8gbm93IG1ha2Ugc3VyZSBub3RoaW5nIGlzIHN0b3JlZCBpbiB0aGUgcmVhY3RvclxuXG4gICAgICAgIGFzc2VydEpTT04oKDxhbnk+IHJlYWN0b3IpLmRlbGVnYXRlLnF1ZXVlLCB7fSk7XG5cbiAgICB9KTtcblxuXG4gICAgaXQoXCJvbmNlXCIsIGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGNvbnN0IHF1ZXVlZFJlYWN0b3IgPSBuZXcgUXVldWVkUmVhY3RvcjxzdHJpbmc+KCk7XG4gICAgICAgIGNvbnN0IHJlYWN0b3IgPSBuZXcgU2ltcGxlUmVhY3RvcjxzdHJpbmc+KHF1ZXVlZFJlYWN0b3IpO1xuXG4gICAgICAgIGFzc2VydC5lcXVhbCgoPGFueT4gcmVhY3RvcikuZGVsZWdhdGUsIHF1ZXVlZFJlYWN0b3IpO1xuXG4gICAgICAgIGFzc2VydC5lcXVhbChyZWFjdG9yLmdldEV2ZW50TGlzdGVuZXJzKCkubGVuZ3RoLCAwKTtcblxuICAgICAgICByZWFjdG9yLmRpc3BhdGNoRXZlbnQoJ2hlbGxvJyk7XG4gICAgICAgIHJlYWN0b3IuZGlzcGF0Y2hFdmVudCgnd29ybGQnKTtcblxuICAgICAgICBjb25zdCBtZXNzYWdlUHJvbWlzZSA9IHJlYWN0b3Iub25jZSgpO1xuXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCBtZXNzYWdlUHJvbWlzZTtcblxuICAgICAgICBhc3NlcnQuZXF1YWwobWVzc2FnZSwgJ2hlbGxvJyk7XG5cbiAgICAgICAgYXNzZXJ0LmVxdWFsKHJlYWN0b3IuZ2V0RXZlbnRMaXN0ZW5lcnMoKS5sZW5ndGgsIDApO1xuXG4gICAgfSk7XG5cbn0pO1xuIl19