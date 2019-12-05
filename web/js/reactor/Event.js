"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Event {
    constructor(name) {
        this.listeners = [];
        this.name = name;
    }
    registerListener(listener) {
        this.listeners.push(listener);
    }
    getListeners() {
        return this.listeners;
    }
    hasListeners() {
        return this.listeners.length > 0;
    }
    removeListener(listener) {
        const index = this.listeners.indexOf(listener);
        if (index > -1) {
            this.listeners.splice(index, 1);
            return true;
        }
        return false;
    }
    size() {
        return this.listeners.length;
    }
}
exports.Event = Event;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXZlbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJFdmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUtBLE1BQWEsS0FBSztJQU1kLFlBQVksSUFBWTtRQUZQLGNBQVMsR0FBNEIsRUFBRSxDQUFDO1FBR3JELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFFTSxnQkFBZ0IsQ0FBQyxRQUEwQjtRQUM5QyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRU0sWUFBWTtRQUNmLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBRU0sWUFBWTtRQUNmLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFTSxjQUFjLENBQUMsUUFBMEI7UUFFNUMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFL0MsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDWixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDaEMsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUVELE9BQU8sS0FBSyxDQUFDO0lBRWpCLENBQUM7SUFFTSxJQUFJO1FBQ1AsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztJQUNqQyxDQUFDO0NBRUo7QUF2Q0Qsc0JBdUNDIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xNTMwODM3MS9jdXN0b20tZXZlbnRzLW1vZGVsLXdpdGhvdXQtdXNpbmctZG9tLWV2ZW50cy1pbi1qYXZhc2NyaXB0XG5cbmltcG9ydCB7RXZlbnRMaXN0ZW5lcn0gZnJvbSAnLi9FdmVudExpc3RlbmVyJztcblxuZXhwb3J0IGNsYXNzIEV2ZW50PFY+IHtcblxuICAgIHB1YmxpYyByZWFkb25seSBuYW1lOiBzdHJpbmc7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IGxpc3RlbmVyczogQXJyYXk8RXZlbnRMaXN0ZW5lcjxWPj4gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIH1cblxuICAgIHB1YmxpYyByZWdpc3Rlckxpc3RlbmVyKGxpc3RlbmVyOiBFdmVudExpc3RlbmVyPFY+KSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxpc3RlbmVycztcbiAgICB9XG5cbiAgICBwdWJsaWMgaGFzTGlzdGVuZXJzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5saXN0ZW5lcnMubGVuZ3RoID4gMDtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVtb3ZlTGlzdGVuZXIobGlzdGVuZXI6IEV2ZW50TGlzdGVuZXI8Vj4pOiBib29sZWFuIHtcblxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMubGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpO1xuXG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc2l6ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGlzdGVuZXJzLmxlbmd0aDtcbiAgICB9XG5cbn1cbiJdfQ==