"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
class AppInstances {
    static waitForStarted(name) {
        return new Promise(resolve => {
            electron_1.ipcMain.once('app-instance-started:' + name, () => {
                resolve();
            });
        });
    }
}
exports.AppInstances = AppInstances;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwSW5zdGFuY2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQXBwSW5zdGFuY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsdUNBQWlDO0FBUWpDLE1BQWEsWUFBWTtJQUVkLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBWTtRQUNyQyxPQUFPLElBQUksT0FBTyxDQUFPLE9BQU8sQ0FBQyxFQUFFO1lBRS9CLGtCQUFPLENBQUMsSUFBSSxDQUFDLHVCQUF1QixHQUFHLElBQUksRUFBRSxHQUFHLEVBQUU7Z0JBQzlDLE9BQU8sRUFBRSxDQUFDO1lBQ2QsQ0FBQyxDQUFDLENBQUM7UUFFUCxDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7Q0FFSjtBQWJELG9DQWFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpcGNNYWlufSBmcm9tICdlbGVjdHJvbic7XG5cbi8qKlxuICogQXBwSW5zdGFuY2UgYW5kIEFwcEluc3RhbmNlcyBwcm92aWRlZCBhIHNpbXBsZSB3YXkgZm9yIG1haW4gYW5kIHRoZSByZW5kZXJlclxuICogdG8gY29tbXVuaWNhdGUgdGhhdCBhbiB3ZWJhcHAgaXMgbGF1bmNoZWQgaW4gYSBzaW1wbGUgbWFubmVyLlxuICpcbiAqIEBFbGVjdHJvbk1haW5Db250ZXh0XG4gKi9cbmV4cG9ydCBjbGFzcyBBcHBJbnN0YW5jZXMge1xuXG4gICAgcHVibGljIHN0YXRpYyB3YWl0Rm9yU3RhcnRlZChuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KHJlc29sdmUgPT4ge1xuXG4gICAgICAgICAgICBpcGNNYWluLm9uY2UoJ2FwcC1pbnN0YW5jZS1zdGFydGVkOicgKyBuYW1lLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbn1cbiJdfQ==