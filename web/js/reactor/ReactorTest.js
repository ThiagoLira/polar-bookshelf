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
const Reactor_1 = require("./Reactor");
const chai_1 = require("chai");
const Assertions_1 = require("../test/Assertions");
describe('Reactor', function () {
    it("With multiple args", function () {
        let reactor = new Reactor_1.Reactor();
        let messageEvent = {
            message: 'hello world'
        };
        let events = [];
        chai_1.assert.notEqual(reactor.registerEvent("hello"), undefined);
        reactor.addEventListener("hello", (messageEvent) => {
            events.push(messageEvent);
        });
        reactor.dispatchEvent("hello", messageEvent);
        Assertions_1.assertJSON(events, [
            {
                "message": "hello world"
            }
        ]);
    });
    it("ordering", function () {
        const reactor = new Reactor_1.Reactor();
        const sources = [];
        chai_1.assert.notEqual(reactor.registerEvent("messages"), undefined);
        reactor.addEventListener("messages", (messageEvent) => {
            console.log('first');
        });
        reactor.addEventListener("messages", (messageEvent) => {
            console.log('second');
        });
        reactor.dispatchEvent("messages", 'hello');
    });
    it("removeEventListener", function () {
        const reactor = new Reactor_1.Reactor();
        const eventName = "messages";
        chai_1.assert.notEqual(reactor.registerEvent(eventName), undefined);
        chai_1.assert.equal(reactor.getEventListeners(eventName).length, 0);
        const listener = (messageEvent) => {
            console.log('first');
        };
        reactor.addEventListener(eventName, listener);
        chai_1.assert.equal(reactor.getEventListeners(eventName).length, 1);
        chai_1.assert.equal(reactor.removeEventListener(eventName, listener), true);
        chai_1.assert.equal(reactor.getEventListeners(eventName).length, 0);
    });
    it("removeEventListener from addEventListener", function () {
        const reactor = new Reactor_1.Reactor();
        const eventName = "messages";
        reactor.registerEvent(eventName);
        const registeredEventListener = reactor.addEventListener(eventName, message => { });
        chai_1.assert.equal(reactor.getEventListeners(eventName).length, 1);
        chai_1.assert.equal(reactor.removeEventListener(eventName, registeredEventListener.eventListener), true);
        chai_1.assert.equal(reactor.getEventListeners(eventName).length, 0);
    });
    it("once", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const reactor = new Reactor_1.Reactor();
            const eventName = "messages";
            chai_1.assert.notEqual(reactor.registerEvent(eventName), undefined);
            chai_1.assert.equal(reactor.getEventListeners(eventName).length, 0);
            const messagePromise = reactor.once(eventName);
            chai_1.assert.equal(reactor.getEventListeners(eventName).length, 1);
            reactor.dispatchEvent(eventName, 'hello');
            reactor.dispatchEvent(eventName, 'world');
            const message = yield messagePromise;
            chai_1.assert.equal(message, 'hello');
            chai_1.assert.equal(reactor.getEventListeners(eventName).length, 0);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVhY3RvclRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJSZWFjdG9yVGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHVDQUFrQztBQUNsQywrQkFBNEI7QUFDNUIsbURBQThDO0FBRTlDLFFBQVEsQ0FBQyxTQUFTLEVBQUU7SUFFaEIsRUFBRSxDQUFDLG9CQUFvQixFQUFFO1FBRXJCLElBQUksT0FBTyxHQUFHLElBQUksaUJBQU8sRUFBZ0IsQ0FBQztRQUUxQyxJQUFJLFlBQVksR0FBaUI7WUFDN0IsT0FBTyxFQUFFLGFBQWE7U0FDekIsQ0FBQztRQUVGLElBQUksTUFBTSxHQUFtQixFQUFFLENBQUM7UUFFaEMsYUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBRTNELE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsRUFBRTtZQUMvQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFFN0MsdUJBQVUsQ0FBQyxNQUFNLEVBQUU7WUFDZjtnQkFDSSxTQUFTLEVBQUUsYUFBYTthQUMzQjtTQUNKLENBQUMsQ0FBQztJQUVQLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLFVBQVUsRUFBRTtRQUVYLE1BQU0sT0FBTyxHQUFHLElBQUksaUJBQU8sRUFBVSxDQUFDO1FBRXRDLE1BQU0sT0FBTyxHQUFhLEVBQUUsQ0FBQztRQUU3QixhQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFFOUQsT0FBTyxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxDQUFDLFlBQVksRUFB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Q0FBQztZQUMvQyxhQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFFN0QsT0FBTyxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDMUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFFMUMsTUFBTSxPQUFPLEdBQUcsTUFBTSxjQUFjLENBQUM7WUFFckMsYUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFFL0IsYUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRWpFLENBQUM7S0FBQSxDQUFDLENBQUM7QUFHUCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UmVhY3Rvcn0gZnJvbSAnLi9SZWFjdG9yJztcbmltcG9ydCB7YXNzZXJ0fSBmcm9tICdjaGFpJztcbmltcG9ydCB7YXNzZXJ0SlNPTn0gZnJvbSAnLi4vdGVzdC9Bc3NlcnRpb25zJztcblxuZGVzY3JpYmUoJ1JlYWN0b3InLCBmdW5jdGlvbigpIHtcblxuICAgIGl0KFwiV2l0aCBtdWx0aXBsZSBhcmdzXCIsIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBsZXQgcmVhY3RvciA9IG5ldyBSZWFjdG9yPE1lc3NhZ2VFdmVudD4oKTtcblxuICAgICAgICBsZXQgbWVzc2FnZUV2ZW50OiBNZXNzYWdlRXZlbnQgPSB7XG4gICAgICAgICAgICBtZXNzYWdlOiAnaGVsbG8gd29ybGQnXG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IGV2ZW50czogTWVzc2FnZUV2ZW50W10gPSBbXTtcblxuICAgICAgICBhc3NlcnQubm90RXF1YWwocmVhY3Rvci5yZWdpc3RlckV2ZW50KFwiaGVsbG9cIiksIHVuZGVmaW5lZCk7XG5cbiAgICAgICAgcmVhY3Rvci5hZGRFdmVudExpc3RlbmVyKFwiaGVsbG9cIiwgKG1lc3NhZ2VFdmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnRzLnB1c2gobWVzc2FnZUV2ZW50KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmVhY3Rvci5kaXNwYXRjaEV2ZW50KFwiaGVsbG9cIiwgbWVzc2FnZUV2ZW50KTtcblxuICAgICAgICBhc3NlcnRKU09OKGV2ZW50cywgW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibWVzc2FnZVwiOiBcImhlbGxvIHdvcmxkXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSk7XG5cbiAgICB9KTtcblxuICAgIGl0KFwib3JkZXJpbmdcIiwgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgY29uc3QgcmVhY3RvciA9IG5ldyBSZWFjdG9yPHN0cmluZz4oKTtcblxuICAgICAgICBjb25zdCBzb3VyY2VzOiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgICAgIGFzc2VydC5ub3RFcXVhbChyZWFjdG9yLnJlZ2lzdGVyRXZlbnQoXCJtZXNzYWdlc1wiKSwgdW5kZWZpbmVkKTtcblxuICAgICAgICByZWFjdG9yLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlc1wiLCAobWVzc2FnZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZmlyc3QnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmVhY3Rvci5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZXNcIiwgKG1lc3NhZ2VFdmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3NlY29uZCcpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZWFjdG9yLmRpc3BhdGNoRXZlbnQoXCJtZXNzYWdlc1wiLCAnaGVsbG8nKTtcblxuICAgIH0pO1xuXG5cbiAgICBpdChcInJlbW92ZUV2ZW50TGlzdGVuZXJcIiwgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgY29uc3QgcmVhY3RvciA9IG5ldyBSZWFjdG9yPHN0cmluZz4oKTtcblxuICAgICAgICBjb25zdCBldmVudE5hbWUgPSBcIm1lc3NhZ2VzXCI7XG4gICAgICAgIGFzc2VydC5ub3RFcXVhbChyZWFjdG9yLnJlZ2lzdGVyRXZlbnQoZXZlbnROYW1lKSwgdW5kZWZpbmVkKTtcblxuICAgICAgICBhc3NlcnQuZXF1YWwocmVhY3Rvci5nZXRFdmVudExpc3RlbmVycyhldmVudE5hbWUpLmxlbmd0aCwgMCk7XG5cbiAgICAgICAgY29uc3QgbGlzdGVuZXIgPSAobWVzc2FnZUV2ZW50OiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdmaXJzdCcpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJlYWN0b3IuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGxpc3RlbmVyKTtcblxuICAgICAgICBhc3NlcnQuZXF1YWwocmVhY3Rvci5nZXRFdmVudExpc3RlbmVycyhldmVudE5hbWUpLmxlbmd0aCwgMSk7XG5cbiAgICAgICAgYXNzZXJ0LmVxdWFsKHJlYWN0b3IucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGxpc3RlbmVyKSwgdHJ1ZSk7XG5cbiAgICAgICAgYXNzZXJ0LmVxdWFsKHJlYWN0b3IuZ2V0RXZlbnRMaXN0ZW5lcnMoZXZlbnROYW1lKS5sZW5ndGgsIDApO1xuXG4gICAgfSk7XG5cblxuICAgIGl0KFwicmVtb3ZlRXZlbnRMaXN0ZW5lciBmcm9tIGFkZEV2ZW50TGlzdGVuZXJcIiwgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgY29uc3QgcmVhY3RvciA9IG5ldyBSZWFjdG9yPHN0cmluZz4oKTtcblxuICAgICAgICBjb25zdCBldmVudE5hbWUgPSBcIm1lc3NhZ2VzXCI7XG4gICAgICAgIHJlYWN0b3IucmVnaXN0ZXJFdmVudChldmVudE5hbWUpO1xuXG4gICAgICAgIGNvbnN0IHJlZ2lzdGVyZWRFdmVudExpc3RlbmVyID0gcmVhY3Rvci5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgbWVzc2FnZSA9PiB7fSk7XG5cbiAgICAgICAgYXNzZXJ0LmVxdWFsKHJlYWN0b3IuZ2V0RXZlbnRMaXN0ZW5lcnMoZXZlbnROYW1lKS5sZW5ndGgsIDEpO1xuXG4gICAgICAgIGFzc2VydC5lcXVhbChyZWFjdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCByZWdpc3RlcmVkRXZlbnRMaXN0ZW5lci5ldmVudExpc3RlbmVyKSwgdHJ1ZSk7XG5cbiAgICAgICAgYXNzZXJ0LmVxdWFsKHJlYWN0b3IuZ2V0RXZlbnRMaXN0ZW5lcnMoZXZlbnROYW1lKS5sZW5ndGgsIDApO1xuXG4gICAgfSk7XG5cblxuICAgIGl0KFwib25jZVwiLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICBjb25zdCByZWFjdG9yID0gbmV3IFJlYWN0b3I8c3RyaW5nPigpO1xuXG4gICAgICAgIGNvbnN0IGV2ZW50TmFtZSA9IFwibWVzc2FnZXNcIjtcbiAgICAgICAgYXNzZXJ0Lm5vdEVxdWFsKHJlYWN0b3IucmVnaXN0ZXJFdmVudChldmVudE5hbWUpLCB1bmRlZmluZWQpO1xuXG4gICAgICAgIGFzc2VydC5lcXVhbChyZWFjdG9yLmdldEV2ZW50TGlzdGVuZXJzKGV2ZW50TmFtZSkubGVuZ3RoLCAwKTtcblxuICAgICAgICBjb25zdCBtZXNzYWdlUHJvbWlzZSA9IHJlYWN0b3Iub25jZShldmVudE5hbWUpO1xuICAgICAgICBhc3NlcnQuZXF1YWwocmVhY3Rvci5nZXRFdmVudExpc3RlbmVycyhldmVudE5hbWUpLmxlbmd0aCwgMSk7XG5cbiAgICAgICAgcmVhY3Rvci5kaXNwYXRjaEV2ZW50KGV2ZW50TmFtZSwgJ2hlbGxvJyk7XG4gICAgICAgIHJlYWN0b3IuZGlzcGF0Y2hFdmVudChldmVudE5hbWUsICd3b3JsZCcpO1xuXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCBtZXNzYWdlUHJvbWlzZTtcblxuICAgICAgICBhc3NlcnQuZXF1YWwobWVzc2FnZSwgJ2hlbGxvJyk7XG5cbiAgICAgICAgYXNzZXJ0LmVxdWFsKHJlYWN0b3IuZ2V0RXZlbnRMaXN0ZW5lcnMoZXZlbnROYW1lKS5sZW5ndGgsIDApO1xuXG4gICAgfSk7XG5cblxufSk7XG5cbmludGVyZmFjZSBNZXNzYWdlRXZlbnQge1xuICAgIHJlYWRvbmx5IG1lc3NhZ2U6IHN0cmluZztcbn1cbiJdfQ==