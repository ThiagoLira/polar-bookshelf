"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
class DistRuntime {
    static get() {
        if (electron_1.ipcRenderer) {
            return 'electron';
        }
        else if (electron_1.ipcMain) {
            return 'electron';
        }
        else {
            return 'browser';
        }
    }
}
exports.DistRuntime = DistRuntime;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGlzdFJ1bnRpbWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJEaXN0UnVudGltZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVDQUE4QztBQU05QyxNQUFhLFdBQVc7SUFFYixNQUFNLENBQUMsR0FBRztRQUViLElBQUksc0JBQVcsRUFBRTtZQUNiLE9BQU8sVUFBVSxDQUFDO1NBQ3JCO2FBQU0sSUFBSSxrQkFBTyxFQUFFO1lBQ2hCLE9BQU8sVUFBVSxDQUFDO1NBQ3JCO2FBQU07WUFDSCxPQUFPLFNBQVMsQ0FBQztTQUNwQjtJQUVMLENBQUM7Q0FFSjtBQWRELGtDQWNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpcGNNYWluLCBpcGNSZW5kZXJlcn0gZnJvbSAnZWxlY3Ryb24nO1xuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoaXMgZGlzdHJpYnV0aW9uIGlzIHJ1bm5pbmcgaW4gdGhlIGJyb3dzZXIgb3Igd2l0aGluXG4gKiBlbGVjdHJvbi5cbiAqL1xuZXhwb3J0IGNsYXNzIERpc3RSdW50aW1lIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0KCk6IERpc3RSdW50aW1lVHlwZSB7XG5cbiAgICAgICAgaWYgKGlwY1JlbmRlcmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2VsZWN0cm9uJztcbiAgICAgICAgfSBlbHNlIGlmIChpcGNNYWluKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2VsZWN0cm9uJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAnYnJvd3Nlcic7XG4gICAgICAgIH1cblxuICAgIH1cblxufVxuXG5leHBvcnQgdHlwZSBEaXN0UnVudGltZVR5cGUgPSAnYnJvd3NlcicgfCAnZWxlY3Ryb24nO1xuIl19