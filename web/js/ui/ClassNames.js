"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ClassNames {
    static withToggled(toggle, toggledClassName, baseClassName = "") {
        if (toggle) {
            return `${baseClassName} ${toggledClassName}`;
        }
        else {
            return baseClassName;
        }
    }
}
exports.ClassNames = ClassNames;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2xhc3NOYW1lcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNsYXNzTmFtZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxNQUFhLFVBQVU7SUFFWixNQUFNLENBQUMsV0FBVyxDQUFDLE1BQWUsRUFBRSxnQkFBd0IsRUFBRSxnQkFBd0IsRUFBRTtRQUUzRixJQUFJLE1BQU0sRUFBRTtZQUNSLE9BQU8sR0FBRyxhQUFhLElBQUksZ0JBQWdCLEVBQUUsQ0FBQztTQUNqRDthQUFNO1lBQ0gsT0FBTyxhQUFhLENBQUM7U0FDeEI7SUFFTCxDQUFDO0NBRUo7QUFaRCxnQ0FZQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBDbGFzc05hbWVzIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgd2l0aFRvZ2dsZWQodG9nZ2xlOiBib29sZWFuLCB0b2dnbGVkQ2xhc3NOYW1lOiBzdHJpbmcsIGJhc2VDbGFzc05hbWU6IHN0cmluZyA9IFwiXCIpIHtcblxuICAgICAgICBpZiAodG9nZ2xlKSB7XG4gICAgICAgICAgICByZXR1cm4gYCR7YmFzZUNsYXNzTmFtZX0gJHt0b2dnbGVkQ2xhc3NOYW1lfWA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gYmFzZUNsYXNzTmFtZTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG59XG4iXX0=