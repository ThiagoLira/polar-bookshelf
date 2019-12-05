"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Events {
    static getAnchor(target) {
        if (target === null || target === undefined) {
            return undefined;
        }
        let element = target;
        if (element.tagName === "A") {
            return element;
        }
        return this.getAnchor(element.parentElement);
    }
}
exports.Events = Events;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXZlbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRXZlbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsTUFBYSxNQUFNO0lBS1IsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFzQztRQUUxRCxJQUFHLE1BQU0sS0FBSyxJQUFJLElBQUksTUFBTSxLQUFLLFNBQVMsRUFBRTtZQUN4QyxPQUFPLFNBQVMsQ0FBQztTQUNwQjtRQUdELElBQUksT0FBTyxHQUFnQixNQUFNLENBQUM7UUFFbEMsSUFBRyxPQUFPLENBQUMsT0FBTyxLQUFLLEdBQUcsRUFBRTtZQUN4QixPQUEwQixPQUFPLENBQUM7U0FDckM7UUFFRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBRWpELENBQUM7Q0FFSjtBQXRCRCx3QkFzQkMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgRXZlbnRzIHtcbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGFuY2hvciBmb3IgYW4gZWxlbWVudC4gQW4gZXZlbnQgdGFyZ2V0IG1pZ2h0IGJlIG5lc3RlZCBpbiBhblxuICAgICAqIGFuY2hvci5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGdldEFuY2hvcih0YXJnZXQ6IEV2ZW50VGFyZ2V0IHwgbnVsbCB8IHVuZGVmaW5lZCk6IEhUTUxBbmNob3JFbGVtZW50IHwgdW5kZWZpbmVkIHtcblxuICAgICAgICBpZih0YXJnZXQgPT09IG51bGwgfHwgdGFyZ2V0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuXG4gICAgICAgIGxldCBlbGVtZW50ID0gPEhUTUxFbGVtZW50PnRhcmdldDtcblxuICAgICAgICBpZihlbGVtZW50LnRhZ05hbWUgPT09IFwiQVwiKSB7XG4gICAgICAgICAgICByZXR1cm4gPEhUTUxBbmNob3JFbGVtZW50PmVsZW1lbnQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5nZXRBbmNob3IoZWxlbWVudC5wYXJlbnRFbGVtZW50KTtcblxuICAgIH1cblxufVxuIl19