"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Logger_1 = require("polar-shared/src/logger/Logger");
const Optional_1 = require("polar-shared/src/util/ts/Optional");
const ID = 'polar-progress-bar';
const log = Logger_1.Logger.create();
class IndeterminateProgressBar {
    destroy() {
        const progressElement = IndeterminateProgressBar.getProgressElement().getOrUndefined();
        if (progressElement) {
            if (progressElement.parentElement !== null) {
                progressElement.parentElement.removeChild(progressElement);
            }
            else {
                log.warn("No parent element for progress bar.");
            }
        }
        else {
        }
    }
    static getProgressElement() {
        const element = document.getElementById(ID);
        return Optional_1.Optional.of(element);
    }
    static create() {
        const current = this.getProgressElement();
        if (current.isPresent()) {
            return new IndeterminateProgressBar();
        }
        const element = document.createElement('div');
        element.setAttribute('class', 'progress-indeterminate-slider');
        element.innerHTML = `
            <div class="progress-indeterminate-line"></div>
            <div class="progress-indeterminate-subline progress-indeterminate-inc"></div>
            <div class="progress-indeterminate-subline progress-indeterminate-dec"></div>
        `;
        element.id = ID;
        element.style.height = '4px';
        element.style.width = `100%`;
        element.style.position = 'fixed';
        element.style.top = '0';
        element.style.left = '0';
        element.style.zIndex = '99999999999';
        element.style.borderTop = '0';
        element.style.borderLeft = '0';
        element.style.borderRight = '0';
        element.style.borderBottom = '0';
        document.body.appendChild(element);
        return new IndeterminateProgressBar();
    }
}
exports.IndeterminateProgressBar = IndeterminateProgressBar;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5kZXRlcm1pbmF0ZVByb2dyZXNzQmFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiSW5kZXRlcm1pbmF0ZVByb2dyZXNzQmFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkRBQXNEO0FBQ3RELGdFQUEyRDtBQUUzRCxNQUFNLEVBQUUsR0FBRyxvQkFBb0IsQ0FBQztBQUVoQyxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFPNUIsTUFBYSx3QkFBd0I7SUFFMUIsT0FBTztRQUVWLE1BQU0sZUFBZSxHQUFHLHdCQUF3QixDQUFDLGtCQUFrQixFQUFFLENBQUMsY0FBYyxFQUFFLENBQUM7UUFFdkYsSUFBSSxlQUFlLEVBQUU7WUFFakIsSUFBSSxlQUFlLENBQUMsYUFBYSxLQUFLLElBQUksRUFBRTtnQkFDeEMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUM7YUFDOUQ7aUJBQU07Z0JBQ0gsR0FBRyxDQUFDLElBQUksQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO2FBQ25EO1NBRUo7YUFBTTtTQUVOO0lBRUwsQ0FBQztJQUVPLE1BQU0sQ0FBQyxrQkFBa0I7UUFDN0IsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM1QyxPQUFPLG1CQUFRLENBQUMsRUFBRSxDQUF1QixPQUFPLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRU0sTUFBTSxDQUFDLE1BQU07UUFFaEIsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFFMUMsSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDckIsT0FBTyxJQUFJLHdCQUF3QixFQUFFLENBQUM7U0FDekM7UUFFRCxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTlDLE9BQU8sQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLCtCQUErQixDQUFDLENBQUM7UUFFL0QsT0FBTyxDQUFDLFNBQVMsR0FBRzs7OztTQUluQixDQUFDO1FBRUYsT0FBTyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFFaEIsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBRTdCLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztRQUk3QixPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7UUFDakMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ3hCLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztRQUN6QixPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxhQUFhLENBQUM7UUFDckMsT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO1FBQzlCLE9BQU8sQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQztRQUMvQixPQUFPLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7UUFDaEMsT0FBTyxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDO1FBSWpDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRW5DLE9BQU8sSUFBSSx3QkFBd0IsRUFBRSxDQUFDO0lBRTFDLENBQUM7Q0FFSjtBQXBFRCw0REFvRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0xvZ2dlcn0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7T3B0aW9uYWx9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC90cy9PcHRpb25hbCc7XG5cbmNvbnN0IElEID0gJ3BvbGFyLXByb2dyZXNzLWJhcic7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuLyoqXG4gKiBTaW1wbGUgcHJvZ3Jlc3MgYmFyIHRoYXQgd2UgY2FuIGRpc3BsYXkgYXQgYW55IHRpbWUgb24gYSBwYWdlIHdpdGhvdXRcbiAqIGNvbXBsaWNhdGVkIHJlbmRlcmluZyBpc3N1ZXMgb3IgcmVxdWlyaW5nIFJlYWN0IHRvIGJlIHVzZWQuICBUaGlzIGFsbG93c1xuICogdXMgdG8gZWFzaWx5IHNob3cgYSBHVUkgZm9yIGEgZG93bmxvYWQgYXQgYW55IHBvaW50IGluIHRpbWUuXG4gKi9cbmV4cG9ydCBjbGFzcyBJbmRldGVybWluYXRlUHJvZ3Jlc3NCYXIge1xuXG4gICAgcHVibGljIGRlc3Ryb3koKSB7XG5cbiAgICAgICAgY29uc3QgcHJvZ3Jlc3NFbGVtZW50ID0gSW5kZXRlcm1pbmF0ZVByb2dyZXNzQmFyLmdldFByb2dyZXNzRWxlbWVudCgpLmdldE9yVW5kZWZpbmVkKCk7XG5cbiAgICAgICAgaWYgKHByb2dyZXNzRWxlbWVudCkge1xuXG4gICAgICAgICAgICBpZiAocHJvZ3Jlc3NFbGVtZW50LnBhcmVudEVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBwcm9ncmVzc0VsZW1lbnQucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChwcm9ncmVzc0VsZW1lbnQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsb2cud2FybihcIk5vIHBhcmVudCBlbGVtZW50IGZvciBwcm9ncmVzcyBiYXIuXCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBsb2cud2FybihcIk5vIHByb2dyZXNzIGJhciB0byBkZXN0cm95LlwiKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0UHJvZ3Jlc3NFbGVtZW50KCk6IE9wdGlvbmFsPEhUTUxQcm9ncmVzc0VsZW1lbnQ+IHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKElEKTtcbiAgICAgICAgcmV0dXJuIE9wdGlvbmFsLm9mKDxIVE1MUHJvZ3Jlc3NFbGVtZW50PiBlbGVtZW50KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZSgpOiBJbmRldGVybWluYXRlUHJvZ3Jlc3NCYXIge1xuXG4gICAgICAgIGNvbnN0IGN1cnJlbnQgPSB0aGlzLmdldFByb2dyZXNzRWxlbWVudCgpO1xuXG4gICAgICAgIGlmIChjdXJyZW50LmlzUHJlc2VudCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEluZGV0ZXJtaW5hdGVQcm9ncmVzc0JhcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcm9ncmVzcy1pbmRldGVybWluYXRlLXNsaWRlcicpO1xuXG4gICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2dyZXNzLWluZGV0ZXJtaW5hdGUtbGluZVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2dyZXNzLWluZGV0ZXJtaW5hdGUtc3VibGluZSBwcm9ncmVzcy1pbmRldGVybWluYXRlLWluY1wiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2dyZXNzLWluZGV0ZXJtaW5hdGUtc3VibGluZSBwcm9ncmVzcy1pbmRldGVybWluYXRlLWRlY1wiPjwvZGl2PlxuICAgICAgICBgO1xuXG4gICAgICAgIGVsZW1lbnQuaWQgPSBJRDtcblxuICAgICAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9ICc0cHgnO1xuXG4gICAgICAgIGVsZW1lbnQuc3R5bGUud2lkdGggPSBgMTAwJWA7XG5cbiAgICAgICAgLy8vIHByb2dyZXNzLnN0eWxlLmJhY2tncm91bmRDb2xvcj0nIzg5QURGRCc7XG4gICAgICAgIC8vIHByb2dyZXNzLnN0eWxlLmNvbG9yPScjODlBREZEJztcbiAgICAgICAgZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUudG9wID0gJzAnO1xuICAgICAgICBlbGVtZW50LnN0eWxlLmxlZnQgPSAnMCc7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuekluZGV4ID0gJzk5OTk5OTk5OTk5JztcbiAgICAgICAgZWxlbWVudC5zdHlsZS5ib3JkZXJUb3AgPSAnMCc7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuYm9yZGVyTGVmdCA9ICcwJztcbiAgICAgICAgZWxlbWVudC5zdHlsZS5ib3JkZXJSaWdodCA9ICcwJztcbiAgICAgICAgZWxlbWVudC5zdHlsZS5ib3JkZXJCb3R0b20gPSAnMCc7XG4gICAgICAgIC8vIGVsZW1lbnQuc3R5bGUud2Via2l0QXBwZWFyYW5jZSA9ICdub25lJztcbiAgICAgICAgLy8gZWxlbWVudC5zdHlsZS5ib3JkZXJSYWRpdXMgPSAnMCc7XG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbGVtZW50KTtcblxuICAgICAgICByZXR1cm4gbmV3IEluZGV0ZXJtaW5hdGVQcm9ncmVzc0JhcigpO1xuXG4gICAgfVxuXG59XG5cbiJdfQ==