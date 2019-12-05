"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const ElectronContextType_1 = require("./ElectronContextType");
class ElectronContextTypes {
    static create() {
        if (electron_1.remote) {
            return ElectronContextType_1.ElectronContextType.RENDERER;
        }
        else {
            return ElectronContextType_1.ElectronContextType.MAIN;
        }
    }
}
exports.ElectronContextTypes = ElectronContextTypes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRWxlY3Ryb25Db250ZXh0VHlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJFbGVjdHJvbkNvbnRleHRUeXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVDQUFnQztBQUNoQywrREFBMEQ7QUFNMUQsTUFBYSxvQkFBb0I7SUFFdEIsTUFBTSxDQUFDLE1BQU07UUFFaEIsSUFBSSxpQkFBTSxFQUFFO1lBQ1IsT0FBTyx5Q0FBbUIsQ0FBQyxRQUFRLENBQUM7U0FDdkM7YUFBTTtZQUNILE9BQU8seUNBQW1CLENBQUMsSUFBSSxDQUFDO1NBQ25DO0lBRUwsQ0FBQztDQUVKO0FBWkQsb0RBWUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3JlbW90ZX0gZnJvbSAnZWxlY3Ryb24nO1xuaW1wb3J0IHtFbGVjdHJvbkNvbnRleHRUeXBlfSBmcm9tICcuL0VsZWN0cm9uQ29udGV4dFR5cGUnO1xuXG4vKipcbiAqIERldGVybWluZSB0aGUgZWxlY3Ryb24gY29udGV4dCB3ZSdyZSBydW5uaW5nIHdpdGhpbi5cbiAqL1xuXG5leHBvcnQgY2xhc3MgRWxlY3Ryb25Db250ZXh0VHlwZXMge1xuXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGUoKSB7XG5cbiAgICAgICAgaWYgKHJlbW90ZSkge1xuICAgICAgICAgICAgcmV0dXJuIEVsZWN0cm9uQ29udGV4dFR5cGUuUkVOREVSRVI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gRWxlY3Ryb25Db250ZXh0VHlwZS5NQUlOO1xuICAgICAgICB9XG5cbiAgICB9XG5cbn1cbiJdfQ==