"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Line_1 = require("../util/Line");
class Interval {
    constructor(start, end) {
        this.line = new Line_1.Line(start, end, "x");
    }
    containsPoint(pt) {
        return this.line.containsPoint(pt);
    }
}
exports.Interval = Interval;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW50ZXJ2YWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJJbnRlcnZhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLHVDQUFrQztBQUVsQyxNQUFhLFFBQVE7SUFJakIsWUFBWSxLQUFhLEVBQUUsR0FBVztRQUNsQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksV0FBSSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELGFBQWEsQ0FBQyxFQUFVO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDdkMsQ0FBQztDQUVKO0FBWkQsNEJBWUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFJlcHJlc2VudHMgYSBtYXRoZW1hdGljYWwgaW50ZXJ2YWwgYmV0d2VlbiB0d28gdmFsdWVzLlxuICovXG5pbXBvcnQge0xpbmV9IGZyb20gJy4uL3V0aWwvTGluZSc7XG5cbmV4cG9ydCBjbGFzcyBJbnRlcnZhbCB7XG5cbiAgICBwdWJsaWMgbGluZTogYW55O1xuXG4gICAgY29uc3RydWN0b3Ioc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5saW5lID0gbmV3IExpbmUoc3RhcnQsIGVuZCwgXCJ4XCIpO1xuICAgIH1cblxuICAgIGNvbnRhaW5zUG9pbnQocHQ6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5saW5lLmNvbnRhaW5zUG9pbnQocHQpO1xuICAgIH1cblxufVxuIl19