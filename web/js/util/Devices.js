"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Platforms_1 = require("polar-shared/src/util/Platforms");
class Devices {
    static get() {
        if (Platforms_1.Platforms.isDesktop()) {
            return 'desktop';
        }
        if (window.screen.width < 700) {
            return 'phone';
        }
        else {
            return 'tablet';
        }
    }
    static isPhone() {
        return this.get() === 'phone';
    }
    static isDesktop() {
        return this.get() === 'desktop';
    }
}
exports.Devices = Devices;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGV2aWNlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkRldmljZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrREFBMEQ7QUFFMUQsTUFBYSxPQUFPO0lBRVQsTUFBTSxDQUFDLEdBQUc7UUFFYixJQUFJLHFCQUFTLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDdkIsT0FBTyxTQUFTLENBQUM7U0FDcEI7UUFFRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLEdBQUcsRUFBRTtZQUUzQixPQUFPLE9BQU8sQ0FBQztTQUNsQjthQUFNO1lBQ0gsT0FBTyxRQUFRLENBQUM7U0FDbkI7SUFFTCxDQUFDO0lBRU0sTUFBTSxDQUFDLE9BQU87UUFDakIsT0FBTyxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssT0FBTyxDQUFDO0lBQ2xDLENBQUM7SUFFTSxNQUFNLENBQUMsU0FBUztRQUNuQixPQUFPLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxTQUFTLENBQUM7SUFDcEMsQ0FBQztDQUVKO0FBekJELDBCQXlCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGxhdGZvcm1zfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy91dGlsL1BsYXRmb3Jtc1wiO1xuXG5leHBvcnQgY2xhc3MgRGV2aWNlcyB7XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCgpOiBEZXZpY2Uge1xuXG4gICAgICAgIGlmIChQbGF0Zm9ybXMuaXNEZXNrdG9wKCkpIHtcbiAgICAgICAgICAgIHJldHVybiAnZGVza3RvcCc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAod2luZG93LnNjcmVlbi53aWR0aCA8IDcwMCkge1xuICAgICAgICAgICAgLy8gaXQncyBub3QgYSBkZXNrdG9wLCBzbyBpdCBtdXN0IGJlIGEgcGhvbmUuXG4gICAgICAgICAgICByZXR1cm4gJ3Bob25lJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAndGFibGV0JztcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBpc1Bob25lKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoKSA9PT0gJ3Bob25lJztcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGlzRGVza3RvcCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCkgPT09ICdkZXNrdG9wJztcbiAgICB9XG5cbn1cblxuZXhwb3J0IHR5cGUgRGV2aWNlID0gJ3Bob25lJyB8ICd0YWJsZXQnIHwgJ2Rlc2t0b3AnO1xuIl19