"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LazyComponents_1 = require("./LazyComponents");
const chai_1 = require("chai");
describe('LazyComponent', function () {
    it('basic', function () {
        chai_1.assert.ok(LazyComponents_1.lazyEquals(1, 1));
        chai_1.assert.ok(LazyComponents_1.lazyEquals(null, null));
        chai_1.assert.ok(LazyComponents_1.lazyEquals(undefined, undefined));
        chai_1.assert.ok(LazyComponents_1.lazyEquals({ oid: 1 }, { oid: 1 }));
        chai_1.assert.isFalse(LazyComponents_1.lazyEquals(false, true));
        chai_1.assert.isFalse(LazyComponents_1.lazyEquals(null, undefined));
        chai_1.assert.isFalse(LazyComponents_1.lazyEquals(1, "1"));
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGF6eUNvbXBvbmVudFRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJMYXp5Q29tcG9uZW50VGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFEQUE0QztBQUM1QywrQkFBNEI7QUFFNUIsUUFBUSxDQUFDLGVBQWUsRUFBRTtJQUV0QixFQUFFLENBQUMsT0FBTyxFQUFFO1FBRVIsYUFBTSxDQUFDLEVBQUUsQ0FBQywyQkFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVCLGFBQU0sQ0FBQyxFQUFFLENBQUMsMkJBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNsQyxhQUFNLENBQUMsRUFBRSxDQUFDLDJCQUFVLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFFNUMsYUFBTSxDQUFDLEVBQUUsQ0FBQywyQkFBVSxDQUFDLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztRQUUxQyxhQUFNLENBQUMsT0FBTyxDQUFDLDJCQUFVLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDeEMsYUFBTSxDQUFDLE9BQU8sQ0FBQywyQkFBVSxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBRTVDLGFBQU0sQ0FBQyxPQUFPLENBQUMsMkJBQVUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUV2QyxDQUFDLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtsYXp5RXF1YWxzfSBmcm9tICcuL0xhenlDb21wb25lbnRzJztcbmltcG9ydCB7YXNzZXJ0fSBmcm9tICdjaGFpJztcblxuZGVzY3JpYmUoJ0xhenlDb21wb25lbnQnLCBmdW5jdGlvbigpIHtcblxuICAgIGl0KCdiYXNpYycsIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGFzc2VydC5vayhsYXp5RXF1YWxzKDEsIDEpKTtcbiAgICAgICAgYXNzZXJ0Lm9rKGxhenlFcXVhbHMobnVsbCwgbnVsbCkpO1xuICAgICAgICBhc3NlcnQub2sobGF6eUVxdWFscyh1bmRlZmluZWQsIHVuZGVmaW5lZCkpO1xuXG4gICAgICAgIGFzc2VydC5vayhsYXp5RXF1YWxzKHtvaWQ6IDF9LCB7b2lkOiAxfSkpO1xuXG4gICAgICAgIGFzc2VydC5pc0ZhbHNlKGxhenlFcXVhbHMoZmFsc2UsIHRydWUpKTtcbiAgICAgICAgYXNzZXJ0LmlzRmFsc2UobGF6eUVxdWFscyhudWxsLCB1bmRlZmluZWQpKTtcblxuICAgICAgICBhc3NlcnQuaXNGYWxzZShsYXp5RXF1YWxzKDEsIFwiMVwiKSk7XG5cbiAgICB9KTtcblxufSk7XG4iXX0=