"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TextRect_1 = require("../../../metadata/TextRect");
class TextSelections {
    static compute(selectedContents) {
        const result = [];
        selectedContents.rectTexts.forEach((rectText) => {
            const textSelection = new TextRect_1.TextRect({
                rect: rectText.boundingPageRect,
                text: rectText.text
            });
            result.push(textSelection);
        });
        return result;
    }
}
exports.TextSelections = TextSelections;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGV4dFNlbGVjdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJUZXh0U2VsZWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlEQUFvRDtBQUdwRCxNQUFhLGNBQWM7SUFFaEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxnQkFBcUI7UUFFdkMsTUFBTSxNQUFNLEdBQVUsRUFFckIsQ0FBQztRQUlGLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFhLEVBQUUsRUFBRTtZQUNqRCxNQUFNLGFBQWEsR0FBRyxJQUFJLG1CQUFRLENBQUM7Z0JBQy9CLElBQUksRUFBRSxRQUFRLENBQUMsZ0JBQWdCO2dCQUMvQixJQUFJLEVBQUUsUUFBUSxDQUFDLElBQUk7YUFDdEIsQ0FBQyxDQUFDO1lBRUgsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUUvQixDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sTUFBTSxDQUFDO0lBRWxCLENBQUM7Q0FFSjtBQXhCRCx3Q0F3QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1RleHRSZWN0fSBmcm9tIFwiLi4vLi4vLi4vbWV0YWRhdGEvVGV4dFJlY3RcIjtcblxuXG5leHBvcnQgY2xhc3MgVGV4dFNlbGVjdGlvbnMge1xuXG4gICAgcHVibGljIHN0YXRpYyBjb21wdXRlKHNlbGVjdGVkQ29udGVudHM6IGFueSkge1xuXG4gICAgICAgIGNvbnN0IHJlc3VsdDogYW55W10gPSBbXG5cbiAgICAgICAgXTtcblxuICAgICAgICAvLyBUT0RPOiBjb3VsZCBiZSBjbGVhbmVyIGFzIGEgbWFwLi4uXG5cbiAgICAgICAgc2VsZWN0ZWRDb250ZW50cy5yZWN0VGV4dHMuZm9yRWFjaCgocmVjdFRleHQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGV4dFNlbGVjdGlvbiA9IG5ldyBUZXh0UmVjdCh7XG4gICAgICAgICAgICAgICAgcmVjdDogcmVjdFRleHQuYm91bmRpbmdQYWdlUmVjdCxcbiAgICAgICAgICAgICAgICB0ZXh0OiByZWN0VGV4dC50ZXh0XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmVzdWx0LnB1c2godGV4dFNlbGVjdGlvbik7XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcblxuICAgIH1cblxufVxuXG4iXX0=