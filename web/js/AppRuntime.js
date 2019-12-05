"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
class AppRuntime {
    static get() {
        if (electron_1.ipcRenderer) {
            return 'electron-renderer';
        }
        else if (electron_1.ipcMain) {
            return 'electron-main';
        }
        else {
            return 'browser';
        }
    }
    static type() {
        switch (this.get()) {
            case 'electron-renderer':
                return 'electron';
            case 'electron-main':
                return 'electron';
            case 'browser':
                return 'browser';
        }
    }
    static isElectron() {
        return this.get().startsWith('electron-');
    }
    static isBrowser() {
        return this.get() === 'browser';
    }
}
exports.AppRuntime = AppRuntime;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwUnVudGltZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkFwcFJ1bnRpbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx1Q0FBOEM7QUFLOUMsTUFBYSxVQUFVO0lBRVosTUFBTSxDQUFDLEdBQUc7UUFFYixJQUFJLHNCQUFXLEVBQUU7WUFDYixPQUFPLG1CQUFtQixDQUFDO1NBQzlCO2FBQU0sSUFBSSxrQkFBTyxFQUFFO1lBQ2hCLE9BQU8sZUFBZSxDQUFDO1NBQzFCO2FBQU07WUFDSCxPQUFPLFNBQVMsQ0FBQztTQUNwQjtJQUVMLENBQUM7SUFLTSxNQUFNLENBQUMsSUFBSTtRQUVkLFFBQVEsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBRWhCLEtBQUssbUJBQW1CO2dCQUNwQixPQUFPLFVBQVUsQ0FBQztZQUV0QixLQUFLLGVBQWU7Z0JBQ2hCLE9BQU8sVUFBVSxDQUFDO1lBRXRCLEtBQUssU0FBUztnQkFDVixPQUFPLFNBQVMsQ0FBQztTQUV4QjtJQUVMLENBQUM7SUFFTSxNQUFNLENBQUMsVUFBVTtRQUNwQixPQUFPLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVNLE1BQU0sQ0FBQyxTQUFTO1FBQ25CLE9BQU8sSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLFNBQVMsQ0FBQztJQUNwQyxDQUFDO0NBRUo7QUExQ0QsZ0NBMENDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpcGNNYWluLCBpcGNSZW5kZXJlcn0gZnJvbSAnZWxlY3Ryb24nO1xuXG4vKipcbiAqIFVzZWQgdG8gZGV0ZXJtaW5lIGlmIHdlJ3JlIHJ1bm5pbmcgaW4gRWxlY3Ryb24gb3IgQ2hyb21lLlxuICovXG5leHBvcnQgY2xhc3MgQXBwUnVudGltZSB7XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCgpOiBBcHBSdW50aW1lTmFtZSB7XG5cbiAgICAgICAgaWYgKGlwY1JlbmRlcmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2VsZWN0cm9uLXJlbmRlcmVyJztcbiAgICAgICAgfSBlbHNlIGlmIChpcGNNYWluKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2VsZWN0cm9uLW1haW4nO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICdicm93c2VyJztcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQSBoaWdoZXIgbGV2ZWwgcnVudGltZSB0eXBlIChlbGVjdHJvbiBvciBicm93c2VyKVxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgdHlwZSgpOiBBcHBSdW50aW1lVHlwZSB7XG5cbiAgICAgICAgc3dpdGNoICh0aGlzLmdldCgpKSB7XG5cbiAgICAgICAgICAgIGNhc2UgJ2VsZWN0cm9uLXJlbmRlcmVyJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2VsZWN0cm9uJztcblxuICAgICAgICAgICAgY2FzZSAnZWxlY3Ryb24tbWFpbic6XG4gICAgICAgICAgICAgICAgcmV0dXJuICdlbGVjdHJvbic7XG5cbiAgICAgICAgICAgIGNhc2UgJ2Jyb3dzZXInOlxuICAgICAgICAgICAgICAgIHJldHVybiAnYnJvd3Nlcic7XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBpc0VsZWN0cm9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQoKS5zdGFydHNXaXRoKCdlbGVjdHJvbi0nKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGlzQnJvd3NlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCkgPT09ICdicm93c2VyJztcbiAgICB9XG5cbn1cblxuZXhwb3J0IHR5cGUgQXBwUnVudGltZU5hbWUgPSAnZWxlY3Ryb24tcmVuZGVyZXInIHwgJ2VsZWN0cm9uLW1haW4nIHwgJ2Jyb3dzZXInO1xuXG5leHBvcnQgdHlwZSBBcHBSdW50aW1lVHlwZSA9ICdlbGVjdHJvbicgfCAnYnJvd3Nlcic7XG5cbiJdfQ==