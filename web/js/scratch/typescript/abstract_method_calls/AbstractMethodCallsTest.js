"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
require("reflect-metadata");
describe('AbstractMethodCalls', function () {
    it("basic", function () {
        let handledGo = false;
        class Vehicle {
            go() {
                this.handleGo();
            }
        }
        class Car extends Vehicle {
            handleGo() {
                handledGo = true;
            }
        }
        new Car().go();
        chai_1.assert.ok(handledGo);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWJzdHJhY3RNZXRob2RDYWxsc1Rlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJBYnN0cmFjdE1ldGhvZENhbGxzVGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUE0QjtBQUM1Qiw0QkFBMEI7QUFFMUIsUUFBUSxDQUFDLHFCQUFxQixFQUFFO0lBRTVCLEVBQUUsQ0FBQyxPQUFPLEVBQUU7UUFFUixJQUFJLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFFdEIsTUFBZSxPQUFPO1lBRVgsRUFBRTtnQkFDTCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDcEIsQ0FBQztTQUlKO1FBRUQsTUFBTSxHQUFJLFNBQVEsT0FBTztZQUVkLFFBQVE7Z0JBQ1gsU0FBUyxHQUFHLElBQUksQ0FBQztZQUNyQixDQUFDO1NBRUo7UUFFRCxJQUFJLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBRWYsYUFBTSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUV6QixDQUFDLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthc3NlcnR9IGZyb20gJ2NoYWknO1xuaW1wb3J0IFwicmVmbGVjdC1tZXRhZGF0YVwiO1xuXG5kZXNjcmliZSgnQWJzdHJhY3RNZXRob2RDYWxscycsIGZ1bmN0aW9uKCkge1xuXG4gICAgaXQoXCJiYXNpY1wiLCBmdW5jdGlvbigpIHtcblxuICAgICAgICBsZXQgaGFuZGxlZEdvID0gZmFsc2U7XG5cbiAgICAgICAgYWJzdHJhY3QgY2xhc3MgVmVoaWNsZSB7XG5cbiAgICAgICAgICAgIHB1YmxpYyBnbygpOiB2b2lkIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUdvKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHB1YmxpYyBhYnN0cmFjdCBoYW5kbGVHbygpOiB2b2lkO1xuXG4gICAgICAgIH1cblxuICAgICAgICBjbGFzcyBDYXIgZXh0ZW5kcyBWZWhpY2xlIHtcblxuICAgICAgICAgICAgcHVibGljIGhhbmRsZUdvKCk6IHZvaWQge1xuICAgICAgICAgICAgICAgIGhhbmRsZWRHbyA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIG5ldyBDYXIoKS5nbygpO1xuXG4gICAgICAgIGFzc2VydC5vayhoYW5kbGVkR28pO1xuXG4gICAgfSk7XG5cbn0pO1xuXG4iXX0=