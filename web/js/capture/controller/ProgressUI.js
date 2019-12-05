"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const Logger_1 = require("polar-shared/src/logger/Logger");
const Elements_1 = require("../../util/Elements");
const Preconditions_1 = require("polar-shared/src/Preconditions");
const log = Logger_1.Logger.create();
class ProgressUI {
    constructor() {
    }
    init() {
        log.info("Listening for progress updates...");
        electron_1.ipcRenderer.on('capture-progress-update', (event, progressEvent) => {
            this.onProgressEvent(progressEvent);
        });
    }
    onProgressEvent(progressEvent) {
        log.info("Got progress update: ", progressEvent.progress);
        this.updateProgress(progressEvent);
        this.updateLogView(progressEvent);
    }
    updateProgress(progressEvent) {
        let progressElement = document.querySelector("progress");
        progressElement.value = progressEvent.progress;
    }
    updateLogView(progressEvent) {
        let logElement = Preconditions_1.notNull(document.querySelector(".log"));
        let lineElement = Elements_1.Elements.createWrapperElementHTML(`<div class="">${progressEvent.details.url}</div>`);
        logElement.appendChild(lineElement);
    }
}
exports.ProgressUI = ProgressUI;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZ3Jlc3NVSS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlByb2dyZXNzVUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx1Q0FBcUM7QUFDckMsMkRBQXNEO0FBQ3RELGtEQUE2QztBQUM3QyxrRUFBdUQ7QUFHdkQsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBSzVCLE1BQWEsVUFBVTtJQUVuQjtJQUVBLENBQUM7SUFFRCxJQUFJO1FBSUEsR0FBRyxDQUFDLElBQUksQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO1FBRTlDLHNCQUFXLENBQUMsRUFBRSxDQUFDLHlCQUF5QixFQUFFLENBQUMsS0FBcUIsRUFBRSxhQUFzQyxFQUFFLEVBQUU7WUFDeEcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN4QyxDQUFDLENBQUMsQ0FBQztJQUdQLENBQUM7SUFFRCxlQUFlLENBQUMsYUFBc0M7UUFFbEQsR0FBRyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFMUQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBRXRDLENBQUM7SUFFRCxjQUFjLENBQUMsYUFBc0M7UUFFakQsSUFBSSxlQUFlLEdBQXdCLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDOUUsZUFBZSxDQUFDLEtBQUssR0FBRyxhQUFhLENBQUMsUUFBUSxDQUFDO0lBRW5ELENBQUM7SUFFRCxhQUFhLENBQUMsYUFBc0M7UUFFaEQsSUFBSSxVQUFVLEdBQUcsdUJBQU8sQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFFekQsSUFBSSxXQUFXLEdBQUcsbUJBQVEsQ0FBQyx3QkFBd0IsQ0FBQyxpQkFBaUIsYUFBYSxDQUFDLE9BQU8sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDO1FBRXhHLFVBQVUsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7SUFFeEMsQ0FBQztDQUVKO0FBN0NELGdDQTZDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aXBjUmVuZGVyZXJ9IGZyb20gJ2VsZWN0cm9uJztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL2xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IHtFbGVtZW50c30gZnJvbSAnLi4vLi4vdXRpbC9FbGVtZW50cyc7XG5pbXBvcnQge25vdE51bGx9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvUHJlY29uZGl0aW9ucyc7XG5pbXBvcnQge1BlbmRpbmdXZWJSZXF1ZXN0c0V2ZW50fSBmcm9tICcuLi8uLi93ZWJyZXF1ZXN0cy9QZW5kaW5nV2ViUmVxdWVzdHNMaXN0ZW5lcic7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuLyoqXG4gKiBARWxlY3Ryb25SZW5kZXJlckNvbnRleHRcbiAqL1xuZXhwb3J0IGNsYXNzIFByb2dyZXNzVUkge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB9XG5cbiAgICBpbml0KCkge1xuXG4gICAgICAgIC8vIGxpc3RlbiBhbmQgaGFuZGxlIFwiY2FwdHVyZS1wcm9ncmVzc1wiIElQQyBtZXNzYWdlc1xuXG4gICAgICAgIGxvZy5pbmZvKFwiTGlzdGVuaW5nIGZvciBwcm9ncmVzcyB1cGRhdGVzLi4uXCIpO1xuXG4gICAgICAgIGlwY1JlbmRlcmVyLm9uKCdjYXB0dXJlLXByb2dyZXNzLXVwZGF0ZScsIChldmVudDogRWxlY3Ryb24uRXZlbnQsIHByb2dyZXNzRXZlbnQ6IFBlbmRpbmdXZWJSZXF1ZXN0c0V2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9uUHJvZ3Jlc3NFdmVudChwcm9ncmVzc0V2ZW50KTtcbiAgICAgICAgfSk7XG5cblxuICAgIH1cblxuICAgIG9uUHJvZ3Jlc3NFdmVudChwcm9ncmVzc0V2ZW50OiBQZW5kaW5nV2ViUmVxdWVzdHNFdmVudCkge1xuXG4gICAgICAgIGxvZy5pbmZvKFwiR290IHByb2dyZXNzIHVwZGF0ZTogXCIsIHByb2dyZXNzRXZlbnQucHJvZ3Jlc3MpO1xuXG4gICAgICAgIHRoaXMudXBkYXRlUHJvZ3Jlc3MocHJvZ3Jlc3NFdmVudCk7XG4gICAgICAgIHRoaXMudXBkYXRlTG9nVmlldyhwcm9ncmVzc0V2ZW50KTtcblxuICAgIH1cblxuICAgIHVwZGF0ZVByb2dyZXNzKHByb2dyZXNzRXZlbnQ6IFBlbmRpbmdXZWJSZXF1ZXN0c0V2ZW50KSB7XG5cbiAgICAgICAgbGV0IHByb2dyZXNzRWxlbWVudCA9IDxIVE1MUHJvZ3Jlc3NFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJwcm9ncmVzc1wiKTtcbiAgICAgICAgcHJvZ3Jlc3NFbGVtZW50LnZhbHVlID0gcHJvZ3Jlc3NFdmVudC5wcm9ncmVzcztcblxuICAgIH1cblxuICAgIHVwZGF0ZUxvZ1ZpZXcocHJvZ3Jlc3NFdmVudDogUGVuZGluZ1dlYlJlcXVlc3RzRXZlbnQpIHtcblxuICAgICAgICBsZXQgbG9nRWxlbWVudCA9IG5vdE51bGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2dcIikpO1xuXG4gICAgICAgIGxldCBsaW5lRWxlbWVudCA9IEVsZW1lbnRzLmNyZWF0ZVdyYXBwZXJFbGVtZW50SFRNTChgPGRpdiBjbGFzcz1cIlwiPiR7cHJvZ3Jlc3NFdmVudC5kZXRhaWxzLnVybH08L2Rpdj5gKTtcblxuICAgICAgICBsb2dFbGVtZW50LmFwcGVuZENoaWxkKGxpbmVFbGVtZW50KTtcblxuICAgIH1cblxufVxuXG4iXX0=