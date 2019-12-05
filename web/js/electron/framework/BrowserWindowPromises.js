"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BrowserWindowPromises {
    static once(browserWindow) {
        return new Once(browserWindow);
    }
}
exports.BrowserWindowPromises = BrowserWindowPromises;
class Once {
    constructor(browserWindow) {
        this.browserWindow = browserWindow;
    }
    readyToShow() {
        return new Promise(resolve => {
            this.browserWindow.once('ready-to-show', () => {
                resolve();
            });
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnJvd3NlcldpbmRvd1Byb21pc2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQnJvd3NlcldpbmRvd1Byb21pc2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0EsTUFBYSxxQkFBcUI7SUFFdkIsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUE0QjtRQUMzQyxPQUFPLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ25DLENBQUM7Q0FFSjtBQU5ELHNEQU1DO0FBRUQsTUFBTSxJQUFJO0lBSU4sWUFBWSxhQUE0QjtRQUNwQyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztJQUN2QyxDQUFDO0lBRU0sV0FBVztRQUVkLE9BQU8sSUFBSSxPQUFPLENBQU8sT0FBTyxDQUFDLEVBQUU7WUFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLEdBQUcsRUFBRTtnQkFDMUMsT0FBTyxFQUFFLENBQUM7WUFDZCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQztDQUVKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtCcm93c2VyV2luZG93fSBmcm9tICdlbGVjdHJvbic7XG5cblxuZXhwb3J0IGNsYXNzIEJyb3dzZXJXaW5kb3dQcm9taXNlcyB7XG5cbiAgICBwdWJsaWMgc3RhdGljIG9uY2UoYnJvd3NlcldpbmRvdzogQnJvd3NlcldpbmRvdyk6IE9uY2Uge1xuICAgICAgICByZXR1cm4gbmV3IE9uY2UoYnJvd3NlcldpbmRvdyk7XG4gICAgfVxuXG59XG5cbmNsYXNzIE9uY2Uge1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBicm93c2VyV2luZG93OiBCcm93c2VyV2luZG93O1xuXG4gICAgY29uc3RydWN0b3IoYnJvd3NlcldpbmRvdzogQnJvd3NlcldpbmRvdykge1xuICAgICAgICB0aGlzLmJyb3dzZXJXaW5kb3cgPSBicm93c2VyV2luZG93O1xuICAgIH1cblxuICAgIHB1YmxpYyByZWFkeVRvU2hvdygpOiBQcm9taXNlPHZvaWQ+IHtcblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4ocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICB0aGlzLmJyb3dzZXJXaW5kb3cub25jZSgncmVhZHktdG8tc2hvdycsICgpID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbn1cbiJdfQ==