"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
class AppInstance {
    static notifyStarted(name) {
        if (!electron_1.ipcRenderer) {
            return;
        }
        electron_1.ipcRenderer.send('app-instance-started:' + name);
    }
}
exports.AppInstance = AppInstance;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwSW5zdGFuY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJBcHBJbnN0YW5jZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVDQUFxQztBQUtyQyxNQUFhLFdBQVc7SUFFYixNQUFNLENBQUMsYUFBYSxDQUFDLElBQVk7UUFFcEMsSUFBSSxDQUFDLHNCQUFXLEVBQUU7WUFDZCxPQUFPO1NBQ1Y7UUFFRCxzQkFBVyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUVyRCxDQUFDO0NBRUo7QUFaRCxrQ0FZQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aXBjUmVuZGVyZXJ9IGZyb20gJ2VsZWN0cm9uJztcblxuLyoqXG4gKiBARWxlY3Ryb25SZW5kZXJlckNvbnRleHRcbiAqL1xuZXhwb3J0IGNsYXNzIEFwcEluc3RhbmNlIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgbm90aWZ5U3RhcnRlZChuYW1lOiBzdHJpbmcpIHtcblxuICAgICAgICBpZiAoIWlwY1JlbmRlcmVyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpcGNSZW5kZXJlci5zZW5kKCdhcHAtaW5zdGFuY2Utc3RhcnRlZDonICsgbmFtZSk7XG5cbiAgICB9XG5cbn1cbiJdfQ==