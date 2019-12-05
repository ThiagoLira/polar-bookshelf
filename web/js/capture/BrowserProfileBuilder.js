"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Navigation_1 = require("./navigation/Navigation");
class BrowserProfileBuilder {
    constructor(browser) {
        this.id = BrowserProfileBuilder.sequence++;
        this.profile = "unknown";
        this.offscreen = false;
        this.show = true;
        this.nodeIntegration = false;
        this.navigation = new Navigation_1.DefaultNavigation();
        this.useReactor = true;
        this.webaudio = true;
        this.hosted = false;
        this.destroy = true;
        this.inactive = false;
        this.description = browser.description;
        this.deviceEmulation = browser.deviceEmulation;
        this.name = browser.name;
        this.type = browser.type;
        this.title = browser.title;
        this.userAgent = browser.userAgent;
    }
    setHeight(height) {
        this.deviceEmulation.screenSize.height = height;
        this.deviceEmulation.viewSize.height = height;
        return this;
    }
    setShow(show) {
        this.show = show;
        return this;
    }
    setOffscreen(offscreen) {
        this.offscreen = offscreen;
        return this;
    }
    setProfile(profile) {
        this.profile = profile;
        return this;
    }
    setNodeIntegration(value) {
        this.nodeIntegration = value;
        return this;
    }
    setUseReactor(value) {
        this.useReactor = value;
        return this;
    }
    setWebaudio(value) {
        this.webaudio = value;
        return this;
    }
    setHosted(value) {
        this.hosted = value;
        return this;
    }
    build() {
        return Object.freeze(this);
    }
}
exports.BrowserProfileBuilder = BrowserProfileBuilder;
BrowserProfileBuilder.sequence = 0;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnJvd3NlclByb2ZpbGVCdWlsZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQnJvd3NlclByb2ZpbGVCdWlsZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0Esd0RBQXNFO0FBR3RFLE1BQWEscUJBQXFCO0lBc0M5QixZQUFZLE9BQWdCO1FBcENyQixPQUFFLEdBQXFCLHFCQUFxQixDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRXhELFlBQU8sR0FBVyxTQUFTLENBQUM7UUFZNUIsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUUzQixTQUFJLEdBQVksSUFBSSxDQUFDO1FBSXJCLG9CQUFlLEdBQVksS0FBSyxDQUFDO1FBRWpDLGVBQVUsR0FBZSxJQUFJLDhCQUFpQixFQUFFLENBQUM7UUFFakQsZUFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixhQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLFdBQU0sR0FBWSxLQUFLLENBQUM7UUFFeEIsWUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixhQUFRLEdBQVksS0FBSyxDQUFDO1FBSzdCLElBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQztRQUN2QyxJQUFJLENBQUMsZUFBZSxHQUFHLE9BQU8sQ0FBQyxlQUFlLENBQUM7UUFDL0MsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztRQUN6QixJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDO0lBQ3ZDLENBQUM7SUFFTSxTQUFTLENBQUMsTUFBYztRQUUzQixJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ2hELElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFFOUMsT0FBTyxJQUFJLENBQUM7SUFFaEIsQ0FBQztJQUVNLE9BQU8sQ0FBQyxJQUFhO1FBQ3hCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTSxZQUFZLENBQUMsU0FBa0I7UUFDbEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVNLFVBQVUsQ0FBQyxPQUFlO1FBQzdCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTSxrQkFBa0IsQ0FBQyxLQUFjO1FBQ3BDLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1FBQzdCLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTSxhQUFhLENBQUMsS0FBYztRQUMvQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUN4QixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRU0sV0FBVyxDQUFDLEtBQWM7UUFDN0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVNLFNBQVMsQ0FBQyxLQUFjO1FBQzNCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTSxLQUFLO1FBQ1IsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9CLENBQUM7O0FBN0ZMLHNEQWlHQztBQUZrQiw4QkFBUSxHQUFXLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QnJvd3NlclByb2ZpbGUsIEJyb3dzZXJQcm9maWxlSUR9IGZyb20gXCIuL0Jyb3dzZXJQcm9maWxlXCI7XG5pbXBvcnQge0RlZmF1bHROYXZpZ2F0aW9uLCBOYXZpZ2F0aW9ufSBmcm9tIFwiLi9uYXZpZ2F0aW9uL05hdmlnYXRpb25cIjtcbmltcG9ydCB7QnJvd3NlciwgQnJvd3NlclR5cGV9IGZyb20gXCJwb2xhci1jb250ZW50LWNhcHR1cmUvc3JjL2NhcHR1cmUvQnJvd3NlclwiO1xuXG5leHBvcnQgY2xhc3MgQnJvd3NlclByb2ZpbGVCdWlsZGVyIGltcGxlbWVudHMgQnJvd3NlclByb2ZpbGUge1xuXG4gICAgcHVibGljIGlkOiBCcm93c2VyUHJvZmlsZUlEID0gQnJvd3NlclByb2ZpbGVCdWlsZGVyLnNlcXVlbmNlKys7XG5cbiAgICBwdWJsaWMgcHJvZmlsZTogc3RyaW5nID0gXCJ1bmtub3duXCI7XG5cbiAgICBwdWJsaWMgZGVzY3JpcHRpb246IHN0cmluZztcblxuICAgIHB1YmxpYyBkZXZpY2VFbXVsYXRpb246IEVsZWN0cm9uLlBhcmFtZXRlcnM7XG5cbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xuXG4gICAgcHVibGljIHR5cGU6IEJyb3dzZXJUeXBlO1xuXG4gICAgcHVibGljIHRpdGxlOiBzdHJpbmc7XG5cbiAgICBwdWJsaWMgb2Zmc2NyZWVuOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBwdWJsaWMgc2hvdzogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBwdWJsaWMgdXNlckFnZW50OiBzdHJpbmc7XG5cbiAgICBwdWJsaWMgbm9kZUludGVncmF0aW9uOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBwdWJsaWMgbmF2aWdhdGlvbjogTmF2aWdhdGlvbiA9IG5ldyBEZWZhdWx0TmF2aWdhdGlvbigpO1xuXG4gICAgcHVibGljIHVzZVJlYWN0b3I6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgcHVibGljIHdlYmF1ZGlvOiBib29sZWFuID0gdHJ1ZTtcblxuICAgIHB1YmxpYyBob3N0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHB1YmxpYyBkZXN0cm95OiBib29sZWFuID0gdHJ1ZTtcblxuICAgIHB1YmxpYyBpbmFjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoYnJvd3NlcjogQnJvd3Nlcikge1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gYnJvd3Nlci5kZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kZXZpY2VFbXVsYXRpb24gPSBicm93c2VyLmRldmljZUVtdWxhdGlvbjtcbiAgICAgICAgdGhpcy5uYW1lID0gYnJvd3Nlci5uYW1lO1xuICAgICAgICB0aGlzLnR5cGUgPSBicm93c2VyLnR5cGU7XG4gICAgICAgIHRoaXMudGl0bGUgPSBicm93c2VyLnRpdGxlO1xuICAgICAgICB0aGlzLnVzZXJBZ2VudCA9IGJyb3dzZXIudXNlckFnZW50O1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRIZWlnaHQoaGVpZ2h0OiBudW1iZXIpIHtcblxuICAgICAgICB0aGlzLmRldmljZUVtdWxhdGlvbi5zY3JlZW5TaXplLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgdGhpcy5kZXZpY2VFbXVsYXRpb24udmlld1NpemUuaGVpZ2h0ID0gaGVpZ2h0O1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgfVxuXG4gICAgcHVibGljIHNldFNob3coc2hvdzogYm9vbGVhbikge1xuICAgICAgICB0aGlzLnNob3cgPSBzaG93O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0T2Zmc2NyZWVuKG9mZnNjcmVlbjogYm9vbGVhbikge1xuICAgICAgICB0aGlzLm9mZnNjcmVlbiA9IG9mZnNjcmVlbjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHVibGljIHNldFByb2ZpbGUocHJvZmlsZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMucHJvZmlsZSA9IHByb2ZpbGU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXROb2RlSW50ZWdyYXRpb24odmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5ub2RlSW50ZWdyYXRpb24gPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHVibGljIHNldFVzZVJlYWN0b3IodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy51c2VSZWFjdG9yID0gdmFsdWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRXZWJhdWRpbyh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLndlYmF1ZGlvID0gdmFsdWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRIb3N0ZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5ob3N0ZWQgPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcHVibGljIGJ1aWxkKCk6IFJlYWRvbmx5PEJyb3dzZXJQcm9maWxlPiB7XG4gICAgICAgIHJldHVybiBPYmplY3QuZnJlZXplKHRoaXMpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIHNlcXVlbmNlOiBudW1iZXIgPSAwO1xuXG59XG4iXX0=