"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const TestingTime_1 = require("polar-shared/src/test/TestingTime");
const SplashEngine_1 = require("./SplashEngine");
const LocalPrefs_1 = require("../../../../web/js/util/LocalPrefs");
const LocalPrefs_2 = require("../../../../web/js/util/LocalPrefs");
const LifecycleToggle_1 = require("../../../../web/js/ui/util/LifecycleToggle");
const LifecycleEvents_1 = require("../../../../web/js/ui/util/LifecycleEvents");
const Assertions_1 = require("../../../../web/js/test/Assertions");
const TimeDurations_1 = require("polar-shared/src/util/TimeDurations");
describe('SplashEngine', function () {
    beforeEach(function () {
        LocalPrefs_2.StorageBackends.delegate = new LocalPrefs_1.MockStorageBackend();
        TestingTime_1.TestingTime.freeze();
    });
    afterEach(function () {
        LocalPrefs_2.StorageBackends.delegate = undefined;
        TestingTime_1.TestingTime.unfreeze();
    });
    it('Scan forward in the future with default configuration', function () {
        LifecycleToggle_1.LifecycleToggle.mark(LifecycleEvents_1.LifecycleEvents.TOUR_TERMINATED);
        const facts = {
            datastoreCreated: "2012-02-02T11:38:49.321Z",
            version: "1.0.0",
        };
        const [createSnapshot, eventHandlers] = createEventHandlers();
        const engine = new SplashEngine_1.SplashEngine(facts, eventHandlers);
        testEngineInTheFuture(engine);
        Assertions_1.assertJSON(createSnapshot(), {
            "netPromoterCalled": 9,
            "suggestionsCalled": 9,
            "whatsNewCalled": 0
        });
        console.log("worked!");
    });
    it('first NPS, then version upgrade', function () {
        LifecycleToggle_1.LifecycleToggle.mark(LifecycleEvents_1.LifecycleEvents.TOUR_TERMINATED);
        const facts = {
            datastoreCreated: "2012-02-02T11:38:49.321Z",
            version: "1.0.0",
        };
        let whatsNewCalled = 0;
        let netPromoterCalled = 0;
        let suggestionsCalled = 0;
        const eventHandlers = {
            onWhatsNew: () => ++whatsNewCalled,
            onNetPromoter: () => ++netPromoterCalled,
            onSuggestions: () => ++suggestionsCalled,
        };
        const engine = new SplashEngine_1.SplashEngine(facts, eventHandlers);
        engine.run();
        chai_1.assert.equal(whatsNewCalled, 0);
        chai_1.assert.equal(suggestionsCalled, 0);
        chai_1.assert.equal(netPromoterCalled, 1);
        engine.run();
        chai_1.assert.equal(whatsNewCalled, 0);
        chai_1.assert.equal(suggestionsCalled, 0);
        chai_1.assert.equal(netPromoterCalled, 1);
        TestingTime_1.TestingTime.forward('8d');
        engine.run();
        chai_1.assert.equal(whatsNewCalled, 0);
        chai_1.assert.equal(suggestionsCalled, 0);
        chai_1.assert.equal(netPromoterCalled, 2);
        TestingTime_1.TestingTime.forward('1d');
        TestingTime_1.TestingTime.forward('1m');
        engine.run();
        chai_1.assert.equal(whatsNewCalled, 0);
        chai_1.assert.equal(suggestionsCalled, 1);
        chai_1.assert.equal(netPromoterCalled, 2);
        console.log("worked!");
    });
    it('version upgrade with persisted external state', function () {
        LifecycleToggle_1.LifecycleToggle.mark(LifecycleEvents_1.LifecycleEvents.TOUR_TERMINATED);
        const facts = {
            datastoreCreated: "2012-02-02T11:38:49.321Z",
            version: "1.0.0",
        };
        let whatsNewCalled = 0;
        let netPromoterCalled = 0;
        let suggestionsCalled = 0;
        const eventHandlers = {
            onWhatsNew: () => ++whatsNewCalled,
            onNetPromoter: () => ++netPromoterCalled,
            onSuggestions: () => ++suggestionsCalled,
        };
        let engine = new SplashEngine_1.SplashEngine(facts, eventHandlers);
        engine.run();
        chai_1.assert.equal(whatsNewCalled, 0);
        chai_1.assert.equal(suggestionsCalled, 0);
        chai_1.assert.equal(netPromoterCalled, 1);
        const externalEngineState = engine.toExternalEngineState();
        facts.version = "1.1.0";
        engine = new SplashEngine_1.SplashEngine(facts, eventHandlers, externalEngineState);
        engine.run();
        chai_1.assert.equal(whatsNewCalled, 1);
        chai_1.assert.equal(suggestionsCalled, 0);
        chai_1.assert.equal(netPromoterCalled, 1);
    });
    it('NPS preempted due to "whats new"', function () {
        LifecycleToggle_1.LifecycleToggle.mark(LifecycleEvents_1.LifecycleEvents.TOUR_TERMINATED);
        const facts = {
            datastoreCreated: "2012-02-02T11:38:49.321Z",
            version: "1.0.0",
        };
        let whatsNewCalled = 0;
        let netPromoterCalled = 0;
        let suggestionsCalled = 0;
        const eventHandlers = {
            onWhatsNew: () => ++whatsNewCalled,
            onNetPromoter: () => ++netPromoterCalled,
            onSuggestions: () => ++suggestionsCalled,
        };
        let engine = new SplashEngine_1.SplashEngine(facts, eventHandlers);
        engine.run();
        chai_1.assert.equal(whatsNewCalled, 0);
        chai_1.assert.equal(netPromoterCalled, 1);
        const externalEngineState = engine.toExternalEngineState();
        facts.version = "1.1.0";
        TestingTime_1.TestingTime.forward('10d');
        engine = new SplashEngine_1.SplashEngine(facts, eventHandlers, externalEngineState);
        engine.run();
        chai_1.assert.equal(whatsNewCalled, 1);
        chai_1.assert.equal(suggestionsCalled, 0);
        chai_1.assert.equal(netPromoterCalled, 1);
        TestingTime_1.TestingTime.forward('16m');
        engine.run();
        chai_1.assert.equal(whatsNewCalled, 1);
        chai_1.assert.equal(suggestionsCalled, 0);
        chai_1.assert.equal(netPromoterCalled, 2);
    });
});
function testEngineInTheFuture(engine, duration = '60d') {
    const epoch = new Date();
    while (true) {
        TestingTime_1.TestingTime.forward('15m');
        engine.run();
        if (TimeDurations_1.TimeDurations.hasElapsed(epoch, duration)) {
            break;
        }
    }
}
function createEventHandlers() {
    let whatsNewCalled = 0;
    let netPromoterCalled = 0;
    let suggestionsCalled = 0;
    const eventHandlers = {
        onWhatsNew: () => ++whatsNewCalled,
        onNetPromoter: () => ++netPromoterCalled,
        onSuggestions: () => ++suggestionsCalled,
    };
    const createSnapshot = () => {
        return {
            whatsNewCalled,
            netPromoterCalled,
            suggestionsCalled
        };
    };
    return [createSnapshot, eventHandlers];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3BsYXNoRW5naW5lVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlNwbGFzaEVuZ2luZVRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBNEI7QUFDNUIsbUVBQThEO0FBRTlELGlEQUE0QztBQUU1QyxtRUFBc0U7QUFDdEUsbUVBQW1FO0FBQ25FLGdGQUEyRTtBQUMzRSxnRkFBMkU7QUFDM0UsbUVBQThEO0FBQzlELHVFQUFrRTtBQUdsRSxRQUFRLENBQUMsY0FBYyxFQUFFO0lBRXJCLFVBQVUsQ0FBQztRQUNQLDRCQUFlLENBQUMsUUFBUSxHQUFHLElBQUksK0JBQWtCLEVBQUUsQ0FBQztRQUNwRCx5QkFBVyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3pCLENBQUMsQ0FBQyxDQUFDO0lBRUgsU0FBUyxDQUFDO1FBQ04sNEJBQWUsQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDO1FBQ3JDLHlCQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0IsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsdURBQXVELEVBQUU7UUFFeEQsaUNBQWUsQ0FBQyxJQUFJLENBQUMsaUNBQWUsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUV0RCxNQUFNLEtBQUssR0FBcUI7WUFFNUIsZ0JBQWdCLEVBQUUsMEJBQTBCO1lBRTVDLE9BQU8sRUFBRSxPQUFPO1NBRW5CLENBQUM7UUFFRixNQUFNLENBQUMsY0FBYyxFQUFFLGFBQWEsQ0FBQyxHQUFHLG1CQUFtQixFQUFFLENBQUM7UUFFOUQsTUFBTSxNQUFNLEdBQUcsSUFBSSwyQkFBWSxDQUFDLEtBQUssRUFBRSxhQUFhLENBQUMsQ0FBQztRQUV0RCxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUU5Qix1QkFBVSxDQUFDLGNBQWMsRUFBRSxFQUFFO1lBQ3pCLG1CQUFtQixFQUFFLENBQUM7WUFDdEIsbUJBQW1CLEVBQUUsQ0FBQztZQUN0QixnQkFBZ0IsRUFBRSxDQUFDO1NBQ3RCLENB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cm9tICdjaGFpJztcbmltcG9ydCB7VGVzdGluZ1RpbWV9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdGVzdC9UZXN0aW5nVGltZSc7XG5pbXBvcnQge1NwbGFzaEV2ZW50SGFuZGxlcnN9IGZyb20gJy4vU3BsYXNoRW5naW5lJztcbmltcG9ydCB7U3BsYXNoRW5naW5lfSBmcm9tICcuL1NwbGFzaEVuZ2luZSc7XG5pbXBvcnQge011dGFibGVVc2VyRmFjdHN9IGZyb20gJy4vU3BsYXNoRW5naW5lJztcbmltcG9ydCB7TW9ja1N0b3JhZ2VCYWNrZW5kfSBmcm9tICcuLi8uLi8uLi8uLi93ZWIvanMvdXRpbC9Mb2NhbFByZWZzJztcbmltcG9ydCB7U3RvcmFnZUJhY2tlbmRzfSBmcm9tICcuLi8uLi8uLi8uLi93ZWIvanMvdXRpbC9Mb2NhbFByZWZzJztcbmltcG9ydCB7TGlmZWN5Y2xlVG9nZ2xlfSBmcm9tICcuLi8uLi8uLi8uLi93ZWIvanMvdWkvdXRpbC9MaWZlY3ljbGVUb2dnbGUnO1xuaW1wb3J0IHtMaWZlY3ljbGVFdmVudHN9IGZyb20gJy4uLy4uLy4uLy4uL3dlYi9qcy91aS91dGlsL0xpZmVjeWNsZUV2ZW50cyc7XG5pbXBvcnQge2Fzc2VydEpTT059IGZyb20gJy4uLy4uLy4uLy4uL3dlYi9qcy90ZXN0L0Fzc2VydGlvbnMnO1xuaW1wb3J0IHtUaW1lRHVyYXRpb25zfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvVGltZUR1cmF0aW9ucyc7XG5pbXBvcnQge0R1cmF0aW9ufSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvVGltZUR1cmF0aW9ucyc7XG5cbmRlc2NyaWJlKCdTcGxhc2hFbmdpbmUnLCBmdW5jdGlvbigpIHtcblxuICAgIGJlZm9yZUVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIFN0b3JhZ2VCYWNrZW5kcy5kZWxlZ2F0ZSA9IG5ldyBNb2NrU3RvcmFnZUJhY2tlbmQoKTtcbiAgICAgICAgVGVzdGluZ1RpbWUuZnJlZXplKCk7XG4gICAgfSk7XG5cbiAgICBhZnRlckVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIFN0b3JhZ2VCYWNrZW5kcy5kZWxlZ2F0ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgVGVzdGluZ1RpbWUudW5mcmVlemUoKTtcbiAgICB9KTtcblxuICAgIGl0KCdTY2FuIGZvcndhcmQgaW4gdGhlIGZ1dHVyZSB3aXRoIGRlZmF1bHQgY29uZmlndXJhdGlvbicsIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIExpZmVjeWNsZVRvZ2dsZS5tYXJrKExpZmVjeWNsZUV2ZW50cy5UT1VSX1RFUk1JTkFURUQpO1xuXG4gICAgICAgIGNvbnN0IGZhY3RzOiBNdXRhYmxlVXNlckZhY3RzID0ge1xuXG4gICAgICAgICAgICBkYXRhc3RvcmVDcmVhdGVkOiBcIjIwMTItMDItMDJUMTE6Mzg6NDkuMzIxWlwiLFxuXG4gICAgICAgICAgICB2ZXJzaW9uOiBcIjEuMC4wXCIsXG5cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBbY3JlYXRlU25hcHNob3QsIGV2ZW50SGFuZGxlcnNdID0gY3JlYXRlRXZlbnRIYW5kbGVycygpO1xuXG4gICAgICAgIGNvbnN0IGVuZ2luZSA9IG5ldyBTcGxhc2hFbmdpbmUoZmFjdHMsIGV2ZW50SGFuZGxlcnMpO1xuXG4gICAgICAgIHRlc3RFbmdpbmVJblRoZUZ1dHVyZShlbmdpbmUpO1xuXG4gICAgICAgIGFzc2VydEpTT04oY3JlYXRlU25hcHNob3QoKSwge1xuICAgICAgICAgICAgXCJuZXRQcm9tb3RlckNhbGxlZFwiOiA5LFxuICAgICAgICAgICAgXCJzdWdnZXN0aW9uc0NhbGxlZFwiOiA5LFxuICAgICAgICAgICAgXCJ3aGF0c05ld0NhbGxlZFwiOiAwXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwid29ya2VkIVwiKTtcblxuICAgIH0pO1xuXG4gICAgaXQoJ2ZpcnN0IE5QUywgdGhlbiB2ZXJzaW9uIHVwZ3JhZGUnLCBmdW5jdGlvbigpIHtcblxuICAgICAgICBMaWZlY3ljbGVUb2dnbGUubWFyayhMaWZlY3ljbGVFdmVudHMuVE9VUl9URVJNSU5BVEVEKTtcblxuICAgICAgICBjb25zdCBmYWN0czogTXV0YWJsZVVzZXJGYWN0cyA9IHtcblxuICAgICAgICAgICAgZGF0YXN0b3JlQ3JlYXRlZDogXCIyMDEyLTAyLTAyVDExOjM4OjQ5LjMyMVpcIixcblxuICAgICAgICAgICAgdmVyc2lvbjogXCIxLjAuMFwiLFxuXG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IHdoYXRzTmV3Q2FsbGVkOiBudW1iZXIgPSAwO1xuICAgICAgICBsZXQgbmV0UHJvbW90ZXJDYWxsZWQ6IG51bWJlciA9IDA7XG4gICAgICAgIGxldCBzdWdnZXN0aW9uc0NhbGxlZDogbnVtYmVyID0gMDtcblxuICAgICAgICBjb25zdCBldmVudEhhbmRsZXJzOiBTcGxhc2hFdmVudEhhbmRsZXJzID0ge1xuICAgICAgICAgICAgb25XaGF0c05ldzogKCkgPT4gKyt3aGF0c05ld0NhbGxlZCxcbiAgICAgICAgICAgIG9uTmV0UHJvbW90ZXI6ICgpID0+ICsrbmV0UHJvbW90ZXJDYWxsZWQsXG4gICAgICAgICAgICBvblN1Z2dlc3Rpb25zOiAoKSA9PiArK3N1Z2dlc3Rpb25zQ2FsbGVkLFxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGVuZ2luZSA9IG5ldyBTcGxhc2hFbmdpbmUoZmFjdHMsIGV2ZW50SGFuZGxlcnMpO1xuXG4gICAgICAgIGVuZ2luZS5ydW4oKTtcblxuICAgICAgICBhc3NlcnQuZXF1YWwod2hhdHNOZXdDYWxsZWQsIDApO1xuICAgICAgICBhc3NlcnQuZXF1YWwoc3VnZ2VzdGlvbnNDYWxsZWQsIDApO1xuICAgICAgICBhc3NlcnQuZXF1YWwobmV0UHJvbW90ZXJDYWxsZWQsIDEpO1xuXG4gICAgICAgIGVuZ2luZS5ydW4oKTtcblxuICAgICAgICBhc3NlcnQuZXF1YWwod2hhdHNOZXdDYWxsZWQsIDApO1xuICAgICAgICBhc3NlcnQuZXF1YWwoc3VnZ2VzdGlvbnNDYWxsZWQsIDApO1xuICAgICAgICBhc3NlcnQuZXF1YWwobmV0UHJvbW90ZXJDYWxsZWQsIDEpO1xuXG4gICAgICAgIFRlc3RpbmdUaW1lLmZvcndhcmQoJzhkJyk7XG5cbiAgICAgICAgZW5naW5lLnJ1bigpO1xuICAgICAgICBhc3NlcnQuZXF1YWwod2hhdHNOZXdDYWxsZWQsIDApO1xuICAgICAgICBhc3NlcnQuZXF1YWwoc3VnZ2VzdGlvbnNDYWxsZWQsIDApO1xuICAgICAgICBhc3NlcnQuZXF1YWwobmV0UHJvbW90ZXJDYWxsZWQsIDIpO1xuXG4gICAgICAgIFRlc3RpbmdUaW1lLmZvcndhcmQoJzFkJyk7XG4gICAgICAgIFRlc3RpbmdUaW1lLmZvcndhcmQoJzFtJyk7XG5cbiAgICAgICAgZW5naW5lLnJ1bigpO1xuICAgICAgICBhc3NlcnQuZXF1YWwod2hhdHNOZXdDYWxsZWQsIDApO1xuICAgICAgICBhc3NlcnQuZXF1YWwoc3VnZ2VzdGlvbnNDYWxsZWQsIDEpO1xuICAgICAgICBhc3NlcnQuZXF1YWwobmV0UHJvbW90ZXJDYWxsZWQsIDIpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwid29ya2VkIVwiKTtcblxuICAgIH0pO1xuXG4gICAgaXQoJ3ZlcnNpb24gdXBncmFkZSB3aXRoIHBlcnNpc3RlZCBleHRlcm5hbCBzdGF0ZScsIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIExpZmVjeWNsZVRvZ2dsZS5tYXJrKExpZmVjeWNsZUV2ZW50cy5UT1VSX1RFUk1JTkFURUQpO1xuXG4gICAgICAgIGNvbnN0IGZhY3RzOiBNdXRhYmxlVXNlckZhY3RzID0ge1xuICAgICAgICAgICAgZGF0YXN0b3JlQ3JlYXRlZDogXCIyMDEyLTAyLTAyVDExOjM4OjQ5LjMyMVpcIixcbiAgICAgICAgICAgIHZlcnNpb246IFwiMS4wLjBcIixcbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgd2hhdHNOZXdDYWxsZWQ6IG51bWJlciA9IDA7XG4gICAgICAgIGxldCBuZXRQcm9tb3RlckNhbGxlZDogbnVtYmVyID0gMDtcbiAgICAgICAgbGV0IHN1Z2dlc3Rpb25zQ2FsbGVkOiBudW1iZXIgPSAwO1xuXG4gICAgICAgIGNvbnN0IGV2ZW50SGFuZGxlcnM6IFNwbGFzaEV2ZW50SGFuZGxlcnMgPSB7XG4gICAgICAgICAgICBvbldoYXRzTmV3OiAoKSA9PiArK3doYXRzTmV3Q2FsbGVkLFxuICAgICAgICAgICAgb25OZXRQcm9tb3RlcjogKCkgPT4gKytuZXRQcm9tb3RlckNhbGxlZCxcbiAgICAgICAgICAgIG9uU3VnZ2VzdGlvbnM6ICgpID0+ICsrc3VnZ2VzdGlvbnNDYWxsZWQsXG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IGVuZ2luZSA9IG5ldyBTcGxhc2hFbmdpbmUoZmFjdHMsIGV2ZW50SGFuZGxlcnMpO1xuXG4gICAgICAgIGVuZ2luZS5ydW4oKTtcblxuICAgICAgICBhc3NlcnQuZXF1YWwod2hhdHNOZXdDYWxsZWQsIDApO1xuICAgICAgICBhc3NlcnQuZXF1YWwoc3VnZ2VzdGlvbnNDYWxsZWQsIDApO1xuICAgICAgICBhc3NlcnQuZXF1YWwobmV0UHJvbW90ZXJDYWxsZWQsIDEpO1xuXG4gICAgICAgIGNvbnN0IGV4dGVybmFsRW5naW5lU3RhdGUgPSBlbmdpbmUudG9FeHRlcm5hbEVuZ2luZVN0YXRlKCk7XG5cbiAgICAgICAgZmFjdHMudmVyc2lvbiA9IFwiMS4xLjBcIjtcblxuICAgICAgICBlbmdpbmUgPSBuZXcgU3BsYXNoRW5naW5lKGZhY3RzLCBldmVudEhhbmRsZXJzLCBleHRlcm5hbEVuZ2luZVN0YXRlKTtcblxuICAgICAgICBlbmdpbmUucnVuKCk7XG5cbiAgICAgICAgYXNzZXJ0LmVxdWFsKHdoYXRzTmV3Q2FsbGVkLCAxKTtcbiAgICAgICAgYXNzZXJ0LmVxdWFsKHN1Z2dlc3Rpb25zQ2FsbGVkLCAwKTtcbiAgICAgICAgYXNzZXJ0LmVxdWFsKG5ldFByb21vdGVyQ2FsbGVkLCAxKTtcblxuICAgIH0pO1xuXG4gICAgaXQoJ05QUyBwcmVlbXB0ZWQgZHVlIHRvIFwid2hhdHMgbmV3XCInLCBmdW5jdGlvbigpIHtcblxuICAgICAgICBMaWZlY3ljbGVUb2dnbGUubWFyayhMaWZlY3ljbGVFdmVudHMuVE9VUl9URVJNSU5BVEVEKTtcblxuICAgICAgICBjb25zdCBmYWN0czogTXV0YWJsZVVzZXJGYWN0cyA9IHtcbiAgICAgICAgICAgIGRhdGFzdG9yZUNyZWF0ZWQ6IFwiMjAxMi0wMi0wMlQxMTozODo0OS4zMjFaXCIsXG4gICAgICAgICAgICB2ZXJzaW9uOiBcIjEuMC4wXCIsXG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IHdoYXRzTmV3Q2FsbGVkOiBudW1iZXIgPSAwO1xuICAgICAgICBsZXQgbmV0UHJvbW90ZXJDYWxsZWQ6IG51bWJlciA9IDA7XG4gICAgICAgIGxldCBzdWdnZXN0aW9uc0NhbGxlZDogbnVtYmVyID0gMDtcblxuICAgICAgICBjb25zdCBldmVudEhhbmRsZXJzOiBTcGxhc2hFdmVudEhhbmRsZXJzID0ge1xuICAgICAgICAgICAgb25XaGF0c05ldzogKCkgPT4gKyt3aGF0c05ld0NhbGxlZCxcbiAgICAgICAgICAgIG9uTmV0UHJvbW90ZXI6ICgpID0+ICsrbmV0UHJvbW90ZXJDYWxsZWQsXG4gICAgICAgICAgICBvblN1Z2dlc3Rpb25zOiAoKSA9PiArK3N1Z2dlc3Rpb25zQ2FsbGVkLFxuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBlbmdpbmUgPSBuZXcgU3BsYXNoRW5naW5lKGZhY3RzLCBldmVudEhhbmRsZXJzKTtcblxuICAgICAgICBlbmdpbmUucnVuKCk7XG5cbiAgICAgICAgYXNzZXJ0LmVxdWFsKHdoYXRzTmV3Q2FsbGVkLCAwKTtcbiAgICAgICAgYXNzZXJ0LmVxdWFsKG5ldFByb21vdGVyQ2FsbGVkLCAxKTtcblxuICAgICAgICBjb25zdCBleHRlcm5hbEVuZ2luZVN0YXRlID0gZW5naW5lLnRvRXh0ZXJuYWxFbmdpbmVTdGF0ZSgpO1xuICAgICAgICBmYWN0cy52ZXJzaW9uID0gXCIxLjEuMFwiO1xuICAgICAgICBUZXN0aW5nVGltZS5mb3J3YXJkKCcxMGQnKTtcblxuICAgICAgICBlbmdpbmUgPSBuZXcgU3BsYXNoRW5naW5lKGZhY3RzLCBldmVudEhhbmRsZXJzLCBleHRlcm5hbEVuZ2luZVN0YXRlKTtcblxuICAgICAgICBlbmdpbmUucnVuKCk7XG5cbiAgICAgICAgYXNzZXJ0LmVxdWFsKHdoYXRzTmV3Q2FsbGVkLCAxKTtcbiAgICAgICAgYXNzZXJ0LmVxdWFsKHN1Z2dlc3Rpb25zQ2FsbGVkLCAwKTtcbiAgICAgICAgYXNzZXJ0LmVxdWFsKG5ldFByb21vdGVyQ2FsbGVkLCAxKTtcblxuICAgICAgICBUZXN0aW5nVGltZS5mb3J3YXJkKCcxNm0nKTtcblxuICAgICAgICBlbmdpbmUucnVuKCk7XG5cbiAgICAgICAgYXNzZXJ0LmVxdWFsKHdoYXRzTmV3Q2FsbGVkLCAxKTtcbiAgICAgICAgYXNzZXJ0LmVxdWFsKHN1Z2dlc3Rpb25zQ2FsbGVkLCAwKTtcbiAgICAgICAgYXNzZXJ0LmVxdWFsKG5ldFByb21vdGVyQ2FsbGVkLCAyKTtcblxuICAgIH0pO1xuXG59KTtcblxuLyoqXG4gKiBLZWVwIHRlc3RpbmcgYnkgaW4gdGhlIGZ1dHVyZSBieSBydW5uaW5nIHRoZSBlbmdpbmUgb3ZlciBhbmQgb3ZlciBhbmQgc2VlXG4gKiBob3cgbWFueSB0aW1lcyB3ZSBmaXJlIGFuZCBXSEFUIHdlIGZpcmUuXG4gKi9cbmZ1bmN0aW9uIHRlc3RFbmdpbmVJblRoZUZ1dHVyZShlbmdpbmU6IFNwbGFzaEVuZ2luZSwgZHVyYXRpb246IER1cmF0aW9uID0gJzYwZCcpIHtcblxuICAgIGNvbnN0IGVwb2NoID0gbmV3IERhdGUoKTtcblxuICAgIHdoaWxlICh0cnVlKSB7XG5cbiAgICAgICAgVGVzdGluZ1RpbWUuZm9yd2FyZCgnMTVtJyk7XG4gICAgICAgIGVuZ2luZS5ydW4oKTtcblxuICAgICAgICBpZiAoVGltZUR1cmF0aW9ucy5oYXNFbGFwc2VkKGVwb2NoLCBkdXJhdGlvbikpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IHR5cGUgQ3JlYXRlU25hcHNob3RGdW5jdGlvbiA9ICgpID0+IGFueTtcblxuZnVuY3Rpb24gY3JlYXRlRXZlbnRIYW5kbGVycygpOiBbQ3JlYXRlU25hcHNob3RGdW5jdGlvbiwgU3BsYXNoRXZlbnRIYW5kbGVyc10ge1xuXG4gICAgbGV0IHdoYXRzTmV3Q2FsbGVkOiBudW1iZXIgPSAwO1xuICAgIGxldCBuZXRQcm9tb3RlckNhbGxlZDogbnVtYmVyID0gMDtcbiAgICBsZXQgc3VnZ2VzdGlvbnNDYWxsZWQ6IG51bWJlciA9IDA7XG5cbiAgICBjb25zdCBldmVudEhhbmRsZXJzOiBTcGxhc2hFdmVudEhhbmRsZXJzID0ge1xuICAgICAgICBvbldoYXRzTmV3OiAoKSA9PiArK3doYXRzTmV3Q2FsbGVkLFxuICAgICAgICBvbk5ldFByb21vdGVyOiAoKSA9PiArK25ldFByb21vdGVyQ2FsbGVkLFxuICAgICAgICBvblN1Z2dlc3Rpb25zOiAoKSA9PiArK3N1Z2dlc3Rpb25zQ2FsbGVkLFxuICAgIH07XG5cbiAgICBjb25zdCBjcmVhdGVTbmFwc2hvdCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdoYXRzTmV3Q2FsbGVkLFxuICAgICAgICAgICAgbmV0UHJvbW90ZXJDYWxsZWQsXG4gICAgICAgICAgICBzdWdnZXN0aW9uc0NhbGxlZFxuICAgICAgICB9O1xuICAgIH07XG5cbiAgICByZXR1cm4gW2NyZWF0ZVNuYXBzaG90LCBldmVudEhhbmRsZXJzXTtcblxufVxuIl19