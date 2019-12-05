"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Electron_1 = require("../Electron");
const utils_1 = require("../utils");
if (Electron_1.Electron.isElectron()) {
    console.log("Injecting electron bundle");
    utils_1.injectScript("../../web/js/apps/electron-bundle.js")
        .catch(err => console.error(err));
}
else {
    console.log("Injecting chrome bundle");
    utils_1.injectScript("../../web/js/apps/chrome-bundle.js")
        .catch(err => console.error(err));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5qZWN0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmplY3Rvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLDBDQUFxQztBQUNyQyxvQ0FBc0M7QUFFdEMsSUFBSSxtQkFBUSxDQUFDLFVBQVUsRUFBRSxFQUFFO0lBRXZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQztJQUN6QyxvQkFBWSxDQUFDLHNDQUFzQyxDQUFDO1NBQy9DLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtDQUN4QztLQUFNO0lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQ3ZDLG9CQUFZLENBQUMsb0NBQW9DLENBQUM7U0FDN0MsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO0NBQ3hDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW5qZWN0IHRoZSByaWdodCBidW5kbGUgZGVwZW5kaW5nIG9uIHdoZXRoZXIgd2UncmUgdXNpbmcgY2hyb21lIG9yIGVsZWN0cm9uLlxuXG5pbXBvcnQge0VsZWN0cm9ufSBmcm9tIFwiLi4vRWxlY3Ryb25cIjtcbmltcG9ydCB7aW5qZWN0U2NyaXB0fSBmcm9tIFwiLi4vdXRpbHNcIjtcblxuaWYgKEVsZWN0cm9uLmlzRWxlY3Ryb24oKSkge1xuXG4gICAgY29uc29sZS5sb2coXCJJbmplY3RpbmcgZWxlY3Ryb24gYnVuZGxlXCIpO1xuICAgIGluamVjdFNjcmlwdChcIi4uLy4uL3dlYi9qcy9hcHBzL2VsZWN0cm9uLWJ1bmRsZS5qc1wiKVxuICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSlcbn0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coXCJJbmplY3RpbmcgY2hyb21lIGJ1bmRsZVwiKTtcbiAgICBpbmplY3RTY3JpcHQoXCIuLi8uLi93ZWIvanMvYXBwcy9jaHJvbWUtYnVuZGxlLmpzXCIpXG4gICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKVxufVxuXG5cbiJdfQ==