"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CaptureClient_1 = require("./CaptureClient");
class StartCaptureUI {
    constructor() {
        console.log("Ready to start capture...xxx");
    }
    init() {
        const form = document.getElementById("url-form");
        form.onsubmit = () => this.onSubmit();
    }
    onSubmit() {
        try {
            const urlElement = document.getElementById("url");
            const url = urlElement.value;
            CaptureClient_1.CaptureClient.startCapture(url);
        }
        catch (e) {
            console.error(e);
        }
        return false;
    }
}
exports.StartCaptureUI = StartCaptureUI;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RhcnRDYXB0dXJlVUkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJTdGFydENhcHR1cmVVSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLG1EQUE4QztBQUs5QyxNQUFhLGNBQWM7SUFFdkI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixDQUFDLENBQUM7SUFFaEQsQ0FBQztJQUVNLElBQUk7UUFJUCxNQUFNLElBQUksR0FBcUIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUUxQyxDQUFDO0lBRU0sUUFBUTtRQUVYLElBQUk7WUFFQSxNQUFNLFVBQVUsR0FBc0IsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUUsQ0FBQztZQUN0RSxNQUFNLEdBQUcsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDO1lBRTdCLDZCQUFhLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBRW5DO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDUixPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3BCO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFFakIsQ0FBQztDQUVKO0FBakNELHdDQWlDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TG9nZ2VyfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL2xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IHtDYXB0dXJlQ2xpZW50fSBmcm9tICcuL0NhcHR1cmVDbGllbnQnO1xuXG4vKipcbiAqIEByZW5kZXJlclxuICovXG5leHBvcnQgY2xhc3MgU3RhcnRDYXB0dXJlVUkge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUmVhZHkgdG8gc3RhcnQgY2FwdHVyZS4uLnh4eFwiKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBpbml0KCkge1xuXG4gICAgICAgIC8vIHdpcmUgdXAgdGhlIGV2ZW50IGxpc3RlbmVycy4uLlxuXG4gICAgICAgIGNvbnN0IGZvcm0gPSA8SFRNTEZvcm1FbGVtZW50PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVybC1mb3JtXCIpO1xuICAgICAgICBmb3JtLm9uc3VibWl0ID0gKCkgPT4gdGhpcy5vblN1Ym1pdCgpO1xuXG4gICAgfVxuXG4gICAgcHVibGljIG9uU3VibWl0KCkge1xuXG4gICAgICAgIHRyeSB7XG5cbiAgICAgICAgICAgIGNvbnN0IHVybEVsZW1lbnQgPSA8SFRNTElucHV0RWxlbWVudD4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1cmxcIikhO1xuICAgICAgICAgICAgY29uc3QgdXJsID0gdXJsRWxlbWVudC52YWx1ZTtcblxuICAgICAgICAgICAgQ2FwdHVyZUNsaWVudC5zdGFydENhcHR1cmUodXJsKTtcblxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgfVxuXG59XG4iXX0=