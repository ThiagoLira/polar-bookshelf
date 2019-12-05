"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ContainerLifecycleState_1 = require("../ContainerLifecycleState");
class AbstractContainerLifecycleListener {
    constructor(container) {
        this.container = container;
        const visible = this.isVisible();
        this.state = new ContainerLifecycleState_1.ContainerLifecycleState({ container, visible });
    }
    register(callback) {
        const container = this.container;
        this.observer = new MutationObserver((mutations) => {
            for (const mutation of mutations) {
                if (mutation.type == "attributes") {
                    const visible = this.isVisible();
                    this.state = new ContainerLifecycleState_1.ContainerLifecycleState({ container, visible });
                    callback(this.state);
                }
            }
        });
        this.observer.observe(container.element, {
            attributes: true
        });
    }
    isVisible() {
        return this.container.element.getAttribute('data-loaded') === 'true';
    }
    _createContainerLifecycleEvent(visible) {
        return new ContainerLifecycleState_1.ContainerLifecycleState({
            container: this.container,
            visible
        });
    }
    getState() {
        return this.state;
    }
    unregister() {
        if (this.observer) {
            this.observer.disconnect();
        }
    }
}
exports.AbstractContainerLifecycleListener = AbstractContainerLifecycleListener;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWJzdHJhY3RDb250YWluZXJMaWZlY3ljbGVMaXN0ZW5lci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkFic3RyYWN0Q29udGFpbmVyTGlmZWN5Y2xlTGlzdGVuZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSx3RUFBbUU7QUFPbkUsTUFBc0Isa0NBQWtDO0lBUXBELFlBQXNCLFNBQW9CO1FBQ3RDLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksaURBQXVCLENBQUMsRUFBQyxTQUFTLEVBQUUsT0FBTyxFQUFDLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRU0sUUFBUSxDQUFDLFFBQXlDO1FBRXJELE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFFakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLGdCQUFnQixDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDL0MsS0FBSyxNQUFNLFFBQVEsSUFBSSxTQUFTLEVBQUU7Z0JBQzlCLElBQUksUUFBUSxDQUFDLElBQUksSUFBSSxZQUFZLEVBQUU7b0JBQy9CLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztvQkFDakMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLGlEQUF1QixDQUFDLEVBQUMsU0FBUyxFQUFFLE9BQU8sRUFBQyxDQUFDLENBQUM7b0JBQy9ELFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ3hCO2FBQ0o7UUFFTCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUU7WUFFckMsVUFBVSxFQUFFLElBQUk7U0FDbkIsQ0FBQyxDQUFDO0lBRVAsQ0FBQztJQUVTLFNBQVM7UUFDZixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsS0FBSyxNQUFNLENBQUE7SUFDeEUsQ0FBQztJQUVTLDhCQUE4QixDQUFDLE9BQWdCO1FBRXJELE9BQU8sSUFBSSxpREFBdUIsQ0FBQztZQUMvQixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsT0FBTztTQUNWLENBQUMsQ0FBQztJQUVQLENBQUM7SUFFTSxRQUFRO1FBQ1gsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFFTSxVQUFVO1FBRWIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2YsSUFBSSxDQUFDLFFBQVMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUMvQjtJQUVMLENBQUM7Q0FFSjtBQTdERCxnRkE2REMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbnRhaW5lcn0gZnJvbSAnLi4vLi4vQ29udGFpbmVyJztcbmltcG9ydCB7Q29udGFpbmVyTGlmZWN5Y2xlTGlzdGVuZXJ9IGZyb20gJy4uL0NvbnRhaW5lckxpZmVjeWNsZUxpc3RlbmVyJztcbmltcG9ydCB7Q29udGFpbmVyTGlmZWN5Y2xlU3RhdGV9IGZyb20gJy4uL0NvbnRhaW5lckxpZmVjeWNsZVN0YXRlJztcblxuZXhwb3J0IHR5cGUgQ29udGFpbmVyTGlmZWN5Y2xlU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogQ29udGFpbmVyTGlmZWN5Y2xlU3RhdGUpID0+IHZvaWQ7XG5cbi8qKlxuICogTGlzdGVucyB0byB0aGUgbGlmZWN5Y2xlIG9mIC5wYWdlXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdENvbnRhaW5lckxpZmVjeWNsZUxpc3RlbmVyIGltcGxlbWVudHMgQ29udGFpbmVyTGlmZWN5Y2xlTGlzdGVuZXIge1xuXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IGNvbnRhaW5lcjogQ29udGFpbmVyO1xuXG4gICAgcHJvdGVjdGVkIG9ic2VydmVyOiBNdXRhdGlvbk9ic2VydmVyIHwgdW5kZWZpbmVkO1xuXG4gICAgcHJvdGVjdGVkIHN0YXRlOiBDb250YWluZXJMaWZlY3ljbGVTdGF0ZTtcblxuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihjb250YWluZXI6IENvbnRhaW5lcikge1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICAgICAgY29uc3QgdmlzaWJsZSA9IHRoaXMuaXNWaXNpYmxlKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBuZXcgQ29udGFpbmVyTGlmZWN5Y2xlU3RhdGUoe2NvbnRhaW5lciwgdmlzaWJsZX0pO1xuICAgIH1cblxuICAgIHB1YmxpYyByZWdpc3RlcihjYWxsYmFjazogQ29udGFpbmVyTGlmZWN5Y2xlU3RhdGVDYWxsYmFjaykge1xuXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuY29udGFpbmVyO1xuXG4gICAgICAgIHRoaXMub2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25zKSA9PiB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9ucykge1xuICAgICAgICAgICAgICAgIGlmIChtdXRhdGlvbi50eXBlID09IFwiYXR0cmlidXRlc1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZpc2libGUgPSB0aGlzLmlzVmlzaWJsZSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0gbmV3IENvbnRhaW5lckxpZmVjeWNsZVN0YXRlKHtjb250YWluZXIsIHZpc2libGV9KTtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sodGhpcy5zdGF0ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMub2JzZXJ2ZXIub2JzZXJ2ZShjb250YWluZXIuZWxlbWVudCwge1xuICAgICAgICAgICAgLy8gb25seSBtb25pdG9yIGF0dHJpYnV0ZXMuXG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiB0cnVlXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGlzVmlzaWJsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGFpbmVyLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWxvYWRlZCcpID09PSAndHJ1ZSdcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2NyZWF0ZUNvbnRhaW5lckxpZmVjeWNsZUV2ZW50KHZpc2libGU6IGJvb2xlYW4pIHtcblxuICAgICAgICByZXR1cm4gbmV3IENvbnRhaW5lckxpZmVjeWNsZVN0YXRlKHtcbiAgICAgICAgICAgIGNvbnRhaW5lcjogdGhpcy5jb250YWluZXIsXG4gICAgICAgICAgICB2aXNpYmxlXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgcHVibGljIGdldFN0YXRlKCk6IENvbnRhaW5lckxpZmVjeWNsZVN0YXRlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGU7XG4gICAgfVxuXG4gICAgcHVibGljIHVucmVnaXN0ZXIoKSB7XG5cbiAgICAgICAgaWYgKHRoaXMub2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIHRoaXMub2JzZXJ2ZXIhLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG59XG4iXX0=