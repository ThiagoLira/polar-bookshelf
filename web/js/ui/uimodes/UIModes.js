"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UI_MODES = ['light', 'dark'];
class UIModes {
    static register() {
        const uiMode = this.currentMode();
        this.toggleMode(uiMode);
    }
    static currentMode() {
        const uiMode = localStorage.getItem('ui-mode');
        if (uiMode && UI_MODES.includes(uiMode)) {
            return uiMode;
        }
        return "light";
    }
    static toggleMode(uiMode) {
        const htmlElement = document.querySelector("html");
        htmlElement.classList.remove('ui-mode-light');
        htmlElement.classList.remove('ui-mode-dark');
        htmlElement.classList.add('ui-mode-' + uiMode);
    }
}
exports.UIModes = UIModes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVUlNb2Rlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlVJTW9kZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxNQUFNLFFBQVEsR0FBMEIsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFFMUQsTUFBYSxPQUFPO0lBS1QsTUFBTSxDQUFDLFFBQVE7UUFDbEIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVPLE1BQU0sQ0FBQyxXQUFXO1FBRXRCLE1BQU0sTUFBTSxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFL0MsSUFBSSxNQUFNLElBQUksUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNyQyxPQUFnQixNQUFNLENBQUM7U0FDMUI7UUFFRCxPQUFPLE9BQU8sQ0FBQztJQUVuQixDQUFDO0lBRU8sTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFjO1FBRXBDLE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFFLENBQUM7UUFDcEQsV0FBVyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDOUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFN0MsV0FBVyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxDQUFDO0lBRW5ELENBQUM7Q0FFSjtBQWhDRCwwQkFnQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBVSV9NT0RFUzogUmVhZG9ubHlBcnJheTxzdHJpbmc+ID0gWydsaWdodCcsICdkYXJrJ107XG5cbmV4cG9ydCBjbGFzcyBVSU1vZGVzIHtcblxuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVyIG15c2VsZiBzbyB0aGF0IHdlIGNhbiBlbmFibGUgZGFyayBtb2RlIHdoZW4gbmVjZXNzYXJ5LlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVnaXN0ZXIoKSB7XG4gICAgICAgIGNvbnN0IHVpTW9kZSA9IHRoaXMuY3VycmVudE1vZGUoKTtcbiAgICAgICAgdGhpcy50b2dnbGVNb2RlKHVpTW9kZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgY3VycmVudE1vZGUoKTogVUlNb2RlIHtcblxuICAgICAgICBjb25zdCB1aU1vZGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndWktbW9kZScpO1xuXG4gICAgICAgIGlmICh1aU1vZGUgJiYgVUlfTU9ERVMuaW5jbHVkZXModWlNb2RlKSkge1xuICAgICAgICAgICAgcmV0dXJuIDxVSU1vZGU+IHVpTW9kZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBcImxpZ2h0XCI7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyB0b2dnbGVNb2RlKHVpTW9kZTogVUlNb2RlKSB7XG5cbiAgICAgICAgY29uc3QgaHRtbEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaHRtbFwiKSE7XG4gICAgICAgIGh0bWxFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3VpLW1vZGUtbGlnaHQnKTtcbiAgICAgICAgaHRtbEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgndWktbW9kZS1kYXJrJyk7XG5cbiAgICAgICAgaHRtbEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndWktbW9kZS0nICsgdWlNb2RlKTtcblxuICAgIH1cblxufVxuXG50eXBlIFVJTW9kZSA9ICdsaWdodCcgfCAnZGFyayc7XG4iXX0=