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
class BufferWriter {
    constructor() {
        this.buffer = [];
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    write(data) {
        return __awaiter(this, void 0, void 0, function* () {
            this.buffer.push(data);
        });
    }
    close(err) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    toString() {
        return this.buffer.join("");
    }
}
exports.BufferWriter = BufferWriter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnVmZmVyV3JpdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQnVmZmVyV3JpdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUEsTUFBYSxZQUFZO0lBQXpCO1FBRVksV0FBTSxHQUFhLEVBQUUsQ0FBQztJQWtCbEMsQ0FBQztJQWhCZ0IsSUFBSTs7UUFFakIsQ0FBQztLQUFBO0lBRVksS0FBSyxDQUFDLElBQVk7O1lBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNCLENBQUM7S0FBQTtJQUVZLEtBQUssQ0FBQyxHQUFXOztRQUU5QixDQUFDO0tBQUE7SUFFTSxRQUFRO1FBQ1gsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNoQyxDQUFDO0NBRUo7QUFwQkQsb0NBb0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtXcml0ZVN0cmVhbX0gZnJvbSBcImZzXCI7XG5pbXBvcnQge0ZpbGVzfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvRmlsZXMnO1xuaW1wb3J0IHtQcmVjb25kaXRpb25zfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL1ByZWNvbmRpdGlvbnMnO1xuaW1wb3J0IHtXcml0ZXJ9IGZyb20gJy4uL0V4cG9ydGVycyc7XG5cbi8qKlxuICogU2ltcGxlIHdyaXRlciB0aGF0IGp1c3Qgd3JpdGVzIHRvIG1lbW9yeVxuICovXG5leHBvcnQgY2xhc3MgQnVmZmVyV3JpdGVyIGltcGxlbWVudHMgV3JpdGVyIHtcblxuICAgIHByaXZhdGUgYnVmZmVyOiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgcHVibGljIGFzeW5jIGluaXQoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIC8vIG5vb3BcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgd3JpdGUoZGF0YTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHRoaXMuYnVmZmVyLnB1c2goZGF0YSk7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGNsb3NlKGVycj86IEVycm9yKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIC8vIG5vb3BcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYnVmZmVyLmpvaW4oXCJcIik7XG4gICAgfVxuXG59XG4iXX0=