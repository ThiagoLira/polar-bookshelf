"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Broadcasters_1 = require("../../ipc/Broadcasters");
class ToasterMessages {
    static send(message) {
        Broadcasters_1.Broadcasters.send(this.CHANNEL, message);
    }
}
exports.ToasterMessages = ToasterMessages;
ToasterMessages.CHANNEL = '/toaster-message';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9hc3Rlck1lc3NhZ2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVG9hc3Rlck1lc3NhZ2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBSUEseURBQW9EO0FBRXBELE1BQWEsZUFBZTtJQUlqQixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQXVCO1FBQ3RDLDJCQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7QUFOTCwwQ0FRQztBQU5pQix1QkFBTyxHQUFXLGtCQUFrQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKlxuICovXG5pbXBvcnQge1RvYXN0ZXJNZXNzYWdlfSBmcm9tICcuL1RvYXN0ZXJNZXNzYWdlJztcbmltcG9ydCB7QnJvYWRjYXN0ZXJzfSBmcm9tICcuLi8uLi9pcGMvQnJvYWRjYXN0ZXJzJztcblxuZXhwb3J0IGNsYXNzIFRvYXN0ZXJNZXNzYWdlcyB7XG5cbiAgICBwdWJsaWMgc3RhdGljIENIQU5ORUw6IHN0cmluZyA9ICcvdG9hc3Rlci1tZXNzYWdlJztcblxuICAgIHB1YmxpYyBzdGF0aWMgc2VuZChtZXNzYWdlOiBUb2FzdGVyTWVzc2FnZSkge1xuICAgICAgICBCcm9hZGNhc3RlcnMuc2VuZCh0aGlzLkNIQU5ORUwsIG1lc3NhZ2UpO1xuICAgIH1cblxufVxuIl19