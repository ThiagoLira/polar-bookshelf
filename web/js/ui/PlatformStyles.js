"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Platforms_1 = require("polar-shared/src/util/Platforms");
class PlatformStyles {
    static assign() {
        const platform = Platforms_1.Platforms.get();
        const platformSymbol = Platforms_1.Platforms.toSymbol(platform);
        const targetElement = document.documentElement;
        targetElement.setAttribute('data-platform', platformSymbol.toLowerCase());
    }
}
exports.PlatformStyles = PlatformStyles;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGxhdGZvcm1TdHlsZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJQbGF0Zm9ybVN0eWxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQVNBLCtEQUEwRDtBQUUxRCxNQUFhLGNBQWM7SUFFaEIsTUFBTSxDQUFDLE1BQU07UUFFaEIsTUFBTSxRQUFRLEdBQUcscUJBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNqQyxNQUFNLGNBQWMsR0FBRyxxQkFBUyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVwRCxNQUFNLGFBQWEsR0FBRyxRQUFRLENBQUMsZUFBZSxDQUFDO1FBQy9DLGFBQWEsQ0FBQyxZQUFZLENBQUMsZUFBZSxFQUFFLGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBRTlFLENBQUM7Q0FFSjtBQVpELHdDQVlDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb21wdXRlIHRoZSBwbGF0Zm9ybSBhbmQgdGhlbiBzZXQgYSBkb2N1bWVudCBhdHRyaWJ1dGUgc28gQ1NTIHNlbGVjdG9ycyB3aWxsIHdvcmsuXG4gKiBXZSB1c2UgdGhpcyBmb3IgcGxhdGZvcm0gZm9udHMgYW5kIG90aGVyIHNldHRpbmdzLlxuICpcbiAqIFRoZXJlIHdpbGwgYmUgYW4gYXR0cmlidXRlIGxpa2UgZGF0YS1wbGF0Zm9ybS1tYWNvcyBvciBkYXRhLXBsYXRmb3JtLWFuZHJvaWQuXG4gKlxuICogaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9vcy1zcGVjaWZpYy1mb250cy1jc3MvXG4gKiBodHRwczovL3d3dy5zaW1pY2FydC5jb20vYmxvZy9wd2EtZGVzaWduLXVpL1xuICovXG5pbXBvcnQge1BsYXRmb3Jtc30gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvdXRpbC9QbGF0Zm9ybXNcIjtcblxuZXhwb3J0IGNsYXNzIFBsYXRmb3JtU3R5bGVzIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgYXNzaWduKCkge1xuXG4gICAgICAgIGNvbnN0IHBsYXRmb3JtID0gUGxhdGZvcm1zLmdldCgpO1xuICAgICAgICBjb25zdCBwbGF0Zm9ybVN5bWJvbCA9IFBsYXRmb3Jtcy50b1N5bWJvbChwbGF0Zm9ybSk7XG5cbiAgICAgICAgY29uc3QgdGFyZ2V0RWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgdGFyZ2V0RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtcGxhdGZvcm0nLCBwbGF0Zm9ybVN5bWJvbC50b0xvd2VyQ2FzZSgpKTtcblxuICAgIH1cblxufVxuIl19