"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BrowserWindows {
}
exports.BrowserWindows = BrowserWindows;
class WebContentsHostIndex {
    constructor() {
        this.keys = [];
        this.index = {};
    }
    register(host, child) {
        if (!this.index[host.id]) {
            this.index[host.id] = [];
            this.keys.push(host.id);
        }
        this.index[host.id].push(child);
    }
    get(id) {
        if (!this.index[id]) {
            return [];
        }
        return this.index[id];
    }
}
exports.WebContentsHostIndex = WebContentsHostIndex;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnJvd3NlcldpbmRvd3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJCcm93c2VyV2luZG93cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLE1BQWEsY0FBYztDQXlCMUI7QUF6QkQsd0NBeUJDO0FBS0QsTUFBYSxvQkFBb0I7SUFBakM7UUFFb0IsU0FBSSxHQUFhLEVBQUUsQ0FBQztRQUVuQixVQUFLLEdBQW1DLEVBQUUsQ0FBQztJQXVCaEUsQ0FBQztJQXJCVSxRQUFRLENBQUMsSUFBaUIsRUFBRSxLQUFrQjtRQUVqRCxJQUFJLENBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDdkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUMzQjtRQUVELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUVwQyxDQUFDO0lBRU0sR0FBRyxDQUFDLEVBQVU7UUFFakIsSUFBSSxDQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDbEIsT0FBTyxFQUFFLENBQUM7U0FDYjtRQUVELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUUxQixDQUFDO0NBRUo7QUEzQkQsb0RBMkJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt3ZWJDb250ZW50c30gZnJvbSAnZWxlY3Ryb24nO1xuaW1wb3J0IFdlYkNvbnRlbnRzID0gRWxlY3Ryb24uV2ViQ29udGVudHM7XG5cbmV4cG9ydCBjbGFzcyBCcm93c2VyV2luZG93cyB7XG5cbiAgICAvKipcbiAgICAgKiBHbyB0aHJvdWdoIGFsbCB3aW5kb3dzIGFuZCBjb21wdXRlIGFuIGluZGV4IG9mIHRoZSBob3N0IGJyb3dzZXIgd2luZG93XG4gICAgICogYW5kIHRoZSBob3N0ZWQgV2ViQ29udGVudHMuIFRoaXMgaXMgdXNlZCB0byBmaW5kIG91dCB3aGljaCByb290IHdpbmRvd3NcbiAgICAgKiBhcmUgaG9zdGluZyB3ZWJDb250ZW50cy5cbiAgICAgKi9cbiAgICAvLyBwdWJsaWMgc3RhdGljIGNvbXB1dGVXZWJDb250ZW50c1RvSG9zdEluZGV4KCk6IFdlYkNvbnRlbnRzSG9zdEluZGV4IHtcbiAgICAvL1xuICAgIC8vICAgICBjb25zdCByZXN1bHQgPSBuZXcgV2ViQ29udGVudHNIb3N0SW5kZXgoKTtcbiAgICAvL1xuICAgIC8vICAgICBjb25zdCBhbGxXZWJDb250ZW50cyA9IHdlYkNvbnRlbnRzLmdldEFsbFdlYkNvbnRlbnRzKCk7XG4gICAgLy9cbiAgICAvLyAgICAgZm9yIChjb25zdCBjdXJyZW50IG9mIGFsbFdlYkNvbnRlbnRzKSB7XG4gICAgLy9cbiAgICAvLyAgICAgICAgIGlmIChjdXJyZW50Lmhvc3RXZWJDb250ZW50cykge1xuICAgIC8vICAgICAgICAgICAgIHJlc3VsdC5yZWdpc3RlcihjdXJyZW50Lmhvc3RXZWJDb250ZW50cywgY3VycmVudCk7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy9cbiAgICAvLyAgICAgfVxuICAgIC8vXG4gICAgLy8gICAgIHJldHVybiByZXN1bHQ7XG4gICAgLy9cbiAgICAvLyB9XG5cbn1cblxuLyoqXG4gKiBBbiBpbmRleCBvZiBpZCB0byBob3N0ZWQgd2ViIGNvbnRlbnRzLlxuICovXG5leHBvcnQgY2xhc3MgV2ViQ29udGVudHNIb3N0SW5kZXgge1xuXG4gICAgcHVibGljIHJlYWRvbmx5IGtleXM6IG51bWJlcltdID0gW107XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IGluZGV4OiB7W2tleTogbnVtYmVyXTogV2ViQ29udGVudHNbXX0gPSB7fTtcblxuICAgIHB1YmxpYyByZWdpc3Rlcihob3N0OiBXZWJDb250ZW50cywgY2hpbGQ6IFdlYkNvbnRlbnRzKSB7XG5cbiAgICAgICAgaWYgKCEgdGhpcy5pbmRleFtob3N0LmlkXSkge1xuICAgICAgICAgICAgdGhpcy5pbmRleFtob3N0LmlkXSA9IFtdO1xuICAgICAgICAgICAgdGhpcy5rZXlzLnB1c2goaG9zdC5pZCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmluZGV4W2hvc3QuaWRdLnB1c2goY2hpbGQpO1xuXG4gICAgfVxuXG4gICAgcHVibGljIGdldChpZDogbnVtYmVyKTogV2ViQ29udGVudHNbXSB7XG5cbiAgICAgICAgaWYgKCEgdGhpcy5pbmRleFtpZF0pIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmluZGV4W2lkXTtcblxuICAgIH1cblxufVxuIl19