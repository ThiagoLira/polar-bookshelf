"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SyncEngineRegistry {
    constructor() {
        this.engines = {};
    }
    register(engine) {
        this.engines[engine.descriptor.id] = engine;
    }
    get(id) {
        if (!this.engines[id]) {
            throw new Error("No sync engine with ID: " + id);
        }
        return this.engines[id];
    }
}
exports.SyncEngineRegistry = SyncEngineRegistry;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3luY0VuZ2luZVJlZ2lzdHJ5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiU3luY0VuZ2luZVJlZ2lzdHJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsTUFBYSxrQkFBa0I7SUFBL0I7UUFFcUIsWUFBTyxHQUErQixFQUFFLENBQUE7SUFnQjdELENBQUM7SUFkVSxRQUFRLENBQUMsTUFBa0I7UUFDOUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQztJQUNoRCxDQUFDO0lBRU0sR0FBRyxDQUFDLEVBQVU7UUFFakIsSUFBRyxDQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDbkIsTUFBTSxJQUFJLEtBQUssQ0FBQywwQkFBMEIsR0FBRyxFQUFFLENBQUMsQ0FBQztTQUNwRDtRQUVELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUU1QixDQUFDO0NBRUo7QUFsQkQsZ0RBa0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTeW5jRW5naW5lfSBmcm9tICcuL1N5bmNFbmdpbmUnO1xuXG5leHBvcnQgY2xhc3MgU3luY0VuZ2luZVJlZ2lzdHJ5IHtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgZW5naW5lczoge1tpZDogc3RyaW5nXTogU3luY0VuZ2luZX0gPSB7fVxuXG4gICAgcHVibGljIHJlZ2lzdGVyKGVuZ2luZTogU3luY0VuZ2luZSkge1xuICAgICAgICB0aGlzLmVuZ2luZXNbZW5naW5lLmRlc2NyaXB0b3IuaWRdID0gZW5naW5lO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXQoaWQ6IHN0cmluZyk6IFN5bmNFbmdpbmUge1xuXG4gICAgICAgIGlmKCEgdGhpcy5lbmdpbmVzW2lkXSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gc3luYyBlbmdpbmUgd2l0aCBJRDogXCIgKyBpZCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5lbmdpbmVzW2lkXTtcblxuICAgIH1cblxufVxuIl19