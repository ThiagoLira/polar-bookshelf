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
const CacheEntry_1 = require("./CacheEntry");
const Buffers_1 = require("polar-shared/src/util/Buffers");
class BufferedCacheEntry extends CacheEntry_1.CacheEntry {
    constructor(opts) {
        super(opts);
        this.data = opts.data;
    }
    handleData(callback) {
        return __awaiter(this, void 0, void 0, function* () {
            callback(this.data);
            return false;
        });
    }
    toBuffer() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.data;
        });
    }
    toStream() {
        return __awaiter(this, void 0, void 0, function* () {
            return Buffers_1.Buffers.toStream(this.data);
        });
    }
}
exports.BufferedCacheEntry = BufferedCacheEntry;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnVmZmVyZWRDYWNoZUVudHJ5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQnVmZmVyZWRDYWNoZUVudHJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsNkNBQXNEO0FBQ3RELDJEQUFzRDtBQUt0RCxNQUFhLGtCQUFtQixTQUFRLHVCQUFVO0lBSTlDLFlBQVksSUFBUztRQUNqQixLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDWixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDMUIsQ0FBQztJQUVZLFVBQVUsQ0FBQyxRQUFzQjs7WUFDMUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNwQixPQUFPLEtBQUssQ0FBQztRQUNqQixDQUFDO0tBQUE7SUFFWSxRQUFROztZQUNqQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDckIsQ0FBQztLQUFBO0lBRVksUUFBUTs7WUFDakIsT0FBTyxpQkFBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkMsQ0FBQztLQUFBO0NBRUo7QUF0QkQsZ0RBc0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDYWNoZUVudHJ5LCBEYXRhQ2FsbGJhY2t9IGZyb20gJy4vQ2FjaGVFbnRyeSc7XG5pbXBvcnQge0J1ZmZlcnN9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC9CdWZmZXJzJztcblxuLyoqXG4gKiBDYWNoZSBlbnRyeSB3aGljaCBpcyBqdXN0IGJ1ZmZlcmVkIGluIG1lbW9yeS5cbiAqL1xuZXhwb3J0IGNsYXNzIEJ1ZmZlcmVkQ2FjaGVFbnRyeSBleHRlbmRzIENhY2hlRW50cnkge1xuXG4gICAgcHVibGljIGRhdGE6IEJ1ZmZlcjtcblxuICAgIGNvbnN0cnVjdG9yKG9wdHM6IGFueSkge1xuICAgICAgICBzdXBlcihvcHRzKTtcbiAgICAgICAgdGhpcy5kYXRhID0gb3B0cy5kYXRhO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBoYW5kbGVEYXRhKGNhbGxiYWNrOiBEYXRhQ2FsbGJhY2spOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgY2FsbGJhY2sodGhpcy5kYXRhKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyB0b0J1ZmZlcigpOiBQcm9taXNlPEJ1ZmZlcj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyB0b1N0cmVhbSgpOiBQcm9taXNlPE5vZGVKUy5SZWFkYWJsZVN0cmVhbT4ge1xuICAgICAgICByZXR1cm4gQnVmZmVycy50b1N0cmVhbSh0aGlzLmRhdGEpO1xuICAgIH1cblxufVxuXG4iXX0=