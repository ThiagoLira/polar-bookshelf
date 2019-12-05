"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const ReactDOM = __importStar(require("react-dom"));
class ReactInjector {
    static inject(element, id) {
        let container = document.createElement('div');
        if (id) {
            const existingContainer = document.getElementById(id);
            if (existingContainer) {
                return new InjectedComponent(existingContainer);
            }
            else {
                container = document.createElement('div');
                container.setAttribute('id', id);
            }
        }
        document.body.appendChild(container);
        return this.create(element, container);
    }
    static create(element, container) {
        ReactDOM.render(element, container);
        return new InjectedComponent(container);
    }
}
exports.ReactInjector = ReactInjector;
class InjectedComponent {
    constructor(container) {
        this.container = container;
    }
    destroy() {
        if (this.container) {
            this.container.innerHTML = '';
            this.container.parentElement.removeChild(this.container);
            this.container = null;
        }
        else {
        }
    }
}
exports.InjectedComponent = InjectedComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVhY3RJbmplY3Rvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlJlYWN0SW5qZWN0b3IudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLG9EQUFzQztBQU10QyxNQUFhLGFBQWE7SUFRZixNQUFNLENBQUMsTUFBTSxDQUFDLE9BQW9CLEVBQ3BCLEVBQVc7UUFFNUIsSUFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUU5QyxJQUFJLEVBQUUsRUFBRTtZQUVKLE1BQU0saUJBQWlCLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUV0RCxJQUFJLGlCQUFpQixFQUFFO2dCQUNuQixPQUFPLElBQUksaUJBQWlCLENBQUMsaUJBQWlCLENBQUMsQ0FBQzthQUNuRDtpQkFBTTtnQkFFSCxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDMUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7YUFFcEM7U0FFSjtRQUVELFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRXJDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFFM0MsQ0FBQztJQUVNLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBb0IsRUFBRSxTQUFzQjtRQUU3RCxRQUFRLENBQUMsTUFBTSxDQUVYLE9BQU8sRUFDUCxTQUFTLENBRVosQ0FBQztRQUVGLE9BQU8sSUFBSSxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUU1QyxDQUFDO0NBRUo7QUEvQ0Qsc0NBK0NDO0FBS0QsTUFBYSxpQkFBaUI7SUFJMUIsWUFBWSxTQUFzQjtRQUM5QixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztJQUMvQixDQUFDO0lBRU0sT0FBTztRQUVWLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7WUFDOUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFjLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUMxRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUssQ0FBQztTQUMxQjthQUFNO1NBRU47SUFFTCxDQUFDO0NBRUo7QUFwQkQsOENBb0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuLyoqXG4gKiBBYmlsaXR5IHRvIGluamVjdCBhIHNtYWxsIHJlYWN0IGFwcCBvbiBhIHBhZ2Ugd2l0aG91dCBtdWNoIGhhc3NsZS5cbiAqL1xuZXhwb3J0IGNsYXNzIFJlYWN0SW5qZWN0b3Ige1xuXG5cbiAgICAvKipcbiAgICAgKiBJbmplY3QgYSBjb21wb25lbnQuICBXaGVuIHRoZSBJRCBpcyBnaXZlbiB3ZSB1c2UgdGhlIElEIGFuZCBlbnN1cmVcbiAgICAgKiB0aGF0IG9ubHkgb25lIGNvbXBvbmVudCB3aXRoIHRoYXQgSUQgaXMgY3JlYXRlZC5cbiAgICAgKlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgaW5qZWN0KGVsZW1lbnQ6IEpTWC5FbGVtZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgIGlkPzogc3RyaW5nKSB7XG5cbiAgICAgICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIGlmIChpZCkge1xuXG4gICAgICAgICAgICBjb25zdCBleGlzdGluZ0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcblxuICAgICAgICAgICAgaWYgKGV4aXN0aW5nQ29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBJbmplY3RlZENvbXBvbmVudChleGlzdGluZ0NvbnRhaW5lcik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCBpZCk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZShlbGVtZW50LCBjb250YWluZXIpO1xuXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGUoZWxlbWVudDogSlNYLkVsZW1lbnQsIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpIHtcblxuICAgICAgICBSZWFjdERPTS5yZW5kZXIoXG5cbiAgICAgICAgICAgIGVsZW1lbnQsXG4gICAgICAgICAgICBjb250YWluZXJcblxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiBuZXcgSW5qZWN0ZWRDb21wb25lbnQoY29udGFpbmVyKTtcblxuICAgIH1cblxufVxuXG4vKipcbiAqIEFsbG93cyB1cyB0byBkZXN0cm95IHRoZSBjb21wb25lbnQuXG4gKi9cbmV4cG9ydCBjbGFzcyBJbmplY3RlZENvbXBvbmVudCB7XG5cbiAgICBwcml2YXRlIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEhUTUxFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuICAgIH1cblxuICAgIHB1YmxpYyBkZXN0cm95KCkge1xuXG4gICAgICAgIGlmICh0aGlzLmNvbnRhaW5lcikge1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5wYXJlbnRFbGVtZW50IS5yZW1vdmVDaGlsZCh0aGlzLmNvbnRhaW5lcik7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lciA9IG51bGwhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gbm9vcCwgYWxyZWFkeSBkZXN0cm95ZWRcbiAgICAgICAgfVxuXG4gICAgfVxuXG59XG4iXX0=