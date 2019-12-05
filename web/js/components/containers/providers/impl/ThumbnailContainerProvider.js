"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ContainerProvider_1 = require("../ContainerProvider");
const ThumbnailContainerLifecycleListener_1 = require("../../lifecycle/impl/ThumbnailContainerLifecycleListener");
class ThumbnailContainerProvider extends ContainerProvider_1.ContainerProvider {
    getContainers() {
        return super._getContainers(".thumbnail");
    }
    createContainerLifecycleListener(container) {
        return new ThumbnailContainerLifecycleListener_1.ThumbnailContainerLifecycleListener(container);
    }
}
exports.ThumbnailContainerProvider = ThumbnailContainerProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGh1bWJuYWlsQ29udGFpbmVyUHJvdmlkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJUaHVtYm5haWxDb250YWluZXJQcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDREQUF1RDtBQUN2RCxrSEFBNkc7QUFHN0csTUFBYSwwQkFBMkIsU0FBUSxxQ0FBaUI7SUFFN0QsYUFBYTtRQUNULE9BQU8sS0FBSyxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsZ0NBQWdDLENBQUMsU0FBb0I7UUFDakQsT0FBTyxJQUFJLHlFQUFtQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzlELENBQUM7Q0FFSjtBQVZELGdFQVVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb250YWluZXJQcm92aWRlcn0gZnJvbSAnLi4vQ29udGFpbmVyUHJvdmlkZXInO1xuaW1wb3J0IHtUaHVtYm5haWxDb250YWluZXJMaWZlY3ljbGVMaXN0ZW5lcn0gZnJvbSAnLi4vLi4vbGlmZWN5Y2xlL2ltcGwvVGh1bWJuYWlsQ29udGFpbmVyTGlmZWN5Y2xlTGlzdGVuZXInO1xuaW1wb3J0IHtDb250YWluZXJ9IGZyb20gJy4uLy4uL0NvbnRhaW5lcic7XG5cbmV4cG9ydCBjbGFzcyBUaHVtYm5haWxDb250YWluZXJQcm92aWRlciBleHRlbmRzIENvbnRhaW5lclByb3ZpZGVyIHtcblxuICAgIGdldENvbnRhaW5lcnMoKSB7XG4gICAgICAgIHJldHVybiBzdXBlci5fZ2V0Q29udGFpbmVycyhcIi50aHVtYm5haWxcIik7XG4gICAgfVxuXG4gICAgY3JlYXRlQ29udGFpbmVyTGlmZWN5Y2xlTGlzdGVuZXIoY29udGFpbmVyOiBDb250YWluZXIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUaHVtYm5haWxDb250YWluZXJMaWZlY3ljbGVMaXN0ZW5lcihjb250YWluZXIpO1xuICAgIH1cblxufVxuIl19