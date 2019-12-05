"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Logger_1 = require("polar-shared/src/logger/Logger");
const fs_1 = __importDefault(require("fs"));
const log = Logger_1.Logger.create();
class WebResource {
    static createFile(path) {
        return new FileWebResource(path);
    }
    static createURL(url) {
        return new URLWebResource(url);
    }
}
exports.WebResource = WebResource;
var WebResourceType;
(function (WebResourceType) {
    WebResourceType["FILE"] = "FILE";
    WebResourceType["URL"] = "URL";
})(WebResourceType = exports.WebResourceType || (exports.WebResourceType = {}));
class FileWebResource extends WebResource {
    constructor(file) {
        super();
        this.type = WebResourceType.FILE;
        if (!fs_1.default.existsSync(file)) {
            throw new Error("File does not exist: " + file);
        }
        this.file = file;
    }
    loadBrowserWindow(browserWindow) {
        browserWindow.loadFile(this.file)
            .catch(err => console.error(err));
    }
    loadWebContents(webContents) {
        log.info("Loading file: ", this.file);
        webContents.loadURL('file://' + this.file)
            .catch(err => console.error(err));
    }
    load(loader) {
        log.info("Loading file: ", this.file);
        loader.loadURL('file://' + this.file);
    }
    toString() {
        return `${this.type}: ${this.file}`;
    }
}
class URLWebResource extends WebResource {
    constructor(url) {
        super();
        this.type = WebResourceType.URL;
        this.url = url;
    }
    loadBrowserWindow(browserWindow) {
        browserWindow.loadURL(this.url)
            .catch(err => console.error(err));
    }
    loadWebContents(webContents) {
        log.info("Loading URL: ", this.url);
        webContents.loadURL(this.url)
            .catch(err => console.error(err));
    }
    load(loader) {
        log.info("Loading URL: ", this.url);
        loader.loadURL(this.url);
    }
    toString() {
        return `${this.type}: ${this.url}`;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2ViUmVzb3VyY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJXZWJSZXNvdXJjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLDJEQUFzRDtBQUN0RCw0Q0FBb0I7QUFFcEIsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLE1BQXNCLFdBQVc7SUFRdEIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFZO1FBQ2pDLE9BQU8sSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVNLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBVztRQUMvQixPQUFPLElBQUksY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ25DLENBQUM7Q0FFSjtBQWhCRCxrQ0FnQkM7QUFFRCxJQUFZLGVBR1g7QUFIRCxXQUFZLGVBQWU7SUFDdkIsZ0NBQWEsQ0FBQTtJQUNiLDhCQUFXLENBQUE7QUFDZixDQUFDLEVBSFcsZUFBZSxHQUFmLHVCQUFlLEtBQWYsdUJBQWUsUUFHMUI7QUFFRCxNQUFNLGVBQWdCLFNBQVEsV0FBVztJQUtyQyxZQUFZLElBQVk7UUFDcEIsS0FBSyxFQUFFLENBQUM7UUFKSSxTQUFJLEdBQUcsZUFBZSxDQUFDLElBQUksQ0FBQztRQU14QyxJQUFJLENBQUMsWUFBRSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN0QixNQUFNLElBQUksS0FBSyxDQUFDLHVCQUF1QixHQUFHLElBQUksQ0FBQyxDQUFDO1NBQ25EO1FBRUQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFFckIsQ0FBQztJQUVNLGlCQUFpQixDQUFDLGFBQTRCO1FBQ2pELGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUM1QixLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFFMUMsQ0FBQztJQUVNLGVBQWUsQ0FBQyxXQUF3QjtRQUMzQyxHQUFHLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV0QyxXQUFXLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ3JDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRU0sSUFBSSxDQUFDLE1BQWlCO1FBQ3pCLEdBQUcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RDLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRU0sUUFBUTtRQUNYLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0NBRUo7QUFFRCxNQUFNLGNBQWUsU0FBUSxXQUFXO0lBTXBDLFlBQVksR0FBVztRQUNuQixLQUFLLEVBQUUsQ0FBQztRQUxJLFNBQUksR0FBRyxlQUFlLENBQUMsR0FBRyxDQUFDO1FBTXZDLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ25CLENBQUM7SUFFTSxpQkFBaUIsQ0FBQyxhQUE0QjtRQUNqRCxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7YUFDMUIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFTSxlQUFlLENBQUMsV0FBd0I7UUFDM0MsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQzthQUN4QixLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVNLElBQUksQ0FBQyxNQUFpQjtRQUN6QixHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVNLFFBQVE7UUFDWCxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDdkMsQ0FBQztDQUVKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJyb3dzZXJXaW5kb3cgPSBFbGVjdHJvbi5Ccm93c2VyV2luZG93O1xuaW1wb3J0IFdlYkNvbnRlbnRzID0gRWxlY3Ryb24uV2ViQ29udGVudHM7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCBmcyBmcm9tICdmcyc7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFdlYlJlc291cmNlIHtcblxuICAgIHB1YmxpYyBhYnN0cmFjdCBsb2FkQnJvd3NlcldpbmRvdyhicm93c2VyV2luZG93OiBCcm93c2VyV2luZG93KTogdm9pZDtcblxuICAgIHB1YmxpYyBhYnN0cmFjdCBsb2FkV2ViQ29udGVudHMod2ViQ29udGVudHM6IFdlYkNvbnRlbnRzKTogdm9pZDtcblxuICAgIHB1YmxpYyBhYnN0cmFjdCBsb2FkKGxvYWRlcjogVVJMTG9hZGVyKTogdm9pZDtcblxuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlRmlsZShwYXRoOiBzdHJpbmcpOiBXZWJSZXNvdXJjZSB7XG4gICAgICAgIHJldHVybiBuZXcgRmlsZVdlYlJlc291cmNlKHBhdGgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlVVJMKHVybDogc3RyaW5nKTogV2ViUmVzb3VyY2Uge1xuICAgICAgICByZXR1cm4gbmV3IFVSTFdlYlJlc291cmNlKHVybCk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBlbnVtIFdlYlJlc291cmNlVHlwZSB7XG4gICAgRklMRSA9IFwiRklMRVwiLFxuICAgIFVSTCA9IFwiVVJMXCJcbn1cblxuY2xhc3MgRmlsZVdlYlJlc291cmNlIGV4dGVuZHMgV2ViUmVzb3VyY2Uge1xuXG4gICAgcHVibGljIHJlYWRvbmx5IHR5cGUgPSBXZWJSZXNvdXJjZVR5cGUuRklMRTtcbiAgICBwdWJsaWMgcmVhZG9ubHkgZmlsZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZmlsZTogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgaWYgKCFmcy5leGlzdHNTeW5jKGZpbGUpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGaWxlIGRvZXMgbm90IGV4aXN0OiBcIiArIGZpbGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5maWxlID0gZmlsZTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBsb2FkQnJvd3NlcldpbmRvdyhicm93c2VyV2luZG93OiBCcm93c2VyV2luZG93KTogdm9pZCB7XG4gICAgICAgIGJyb3dzZXJXaW5kb3cubG9hZEZpbGUodGhpcy5maWxlKVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpO1xuXG4gICAgfVxuXG4gICAgcHVibGljIGxvYWRXZWJDb250ZW50cyh3ZWJDb250ZW50czogV2ViQ29udGVudHMpOiB2b2lkIHtcbiAgICAgICAgbG9nLmluZm8oXCJMb2FkaW5nIGZpbGU6IFwiLCB0aGlzLmZpbGUpO1xuICAgICAgICAvLyB3ZWJDb250ZW50cy5sb2FkRmlsZSh0aGlzLmZpbGUpO1xuICAgICAgICB3ZWJDb250ZW50cy5sb2FkVVJMKCdmaWxlOi8vJyArIHRoaXMuZmlsZSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9hZChsb2FkZXI6IFVSTExvYWRlcik6IHZvaWQge1xuICAgICAgICBsb2cuaW5mbyhcIkxvYWRpbmcgZmlsZTogXCIsIHRoaXMuZmlsZSk7XG4gICAgICAgIGxvYWRlci5sb2FkVVJMKCdmaWxlOi8vJyArIHRoaXMuZmlsZSk7XG4gICAgfVxuXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLnR5cGV9OiAke3RoaXMuZmlsZX1gO1xuICAgIH1cblxufVxuXG5jbGFzcyBVUkxXZWJSZXNvdXJjZSBleHRlbmRzIFdlYlJlc291cmNlIHtcblxuICAgIHB1YmxpYyByZWFkb25seSB0eXBlID0gV2ViUmVzb3VyY2VUeXBlLlVSTDtcblxuICAgIHB1YmxpYyByZWFkb25seSB1cmw6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHVybDogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudXJsID0gdXJsO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2FkQnJvd3NlcldpbmRvdyhicm93c2VyV2luZG93OiBCcm93c2VyV2luZG93KTogdm9pZCB7XG4gICAgICAgIGJyb3dzZXJXaW5kb3cubG9hZFVSTCh0aGlzLnVybClcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9hZFdlYkNvbnRlbnRzKHdlYkNvbnRlbnRzOiBXZWJDb250ZW50cyk6IHZvaWQge1xuICAgICAgICBsb2cuaW5mbyhcIkxvYWRpbmcgVVJMOiBcIiwgdGhpcy51cmwpO1xuICAgICAgICB3ZWJDb250ZW50cy5sb2FkVVJMKHRoaXMudXJsKVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpO1xuICAgIH1cblxuICAgIHB1YmxpYyBsb2FkKGxvYWRlcjogVVJMTG9hZGVyKTogdm9pZCB7XG4gICAgICAgIGxvZy5pbmZvKFwiTG9hZGluZyBVUkw6IFwiLCB0aGlzLnVybCk7XG4gICAgICAgIGxvYWRlci5sb2FkVVJMKHRoaXMudXJsKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMudHlwZX06ICR7dGhpcy51cmx9YDtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBVUkxMb2FkZXIge1xuICAgIGxvYWRVUkwodXJsOiBzdHJpbmcpOiB2b2lkO1xufVxuIl19