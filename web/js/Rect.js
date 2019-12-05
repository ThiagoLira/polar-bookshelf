"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Dimensions_1 = require("./util/Dimensions");
const Line_1 = require("./util/Line");
const Preconditions_1 = require("polar-shared/src/Preconditions");
class Rect {
    constructor(obj = {}) {
        Preconditions_1.Preconditions.assertNotNull(obj, "obj");
        this.left = obj.left;
        this.top = obj.top;
        this.right = obj.right;
        this.bottom = obj.bottom;
        this.width = obj.width;
        this.height = obj.height;
    }
    toLine(axis) {
        if (axis === "x") {
            return new Line_1.Line(this.left, this.right, axis);
        }
        else if (axis === "y") {
            return new Line_1.Line(this.top, this.bottom, axis);
        }
        else {
            throw new Error("Wrong axis: " + axis);
        }
    }
    get dimensions() {
        return new Dimensions_1.Dimensions({
            width: this.width,
            height: this.height
        });
    }
    get area() {
        return this.width * this.height;
    }
    adjustAxis(line) {
        Preconditions_1.Preconditions.assertNotNull(line, "line");
        Preconditions_1.Preconditions.assertNotNull(line.axis, "line.axis");
        const result = new Rect(this);
        if (line.axis === "x") {
            result.left = line.start;
            result.right = line.end;
            result.width = line.end - line.start;
        }
        else if (line.axis === "y") {
            result.top = line.start;
            result.bottom = line.end;
            result.height = line.end - line.start;
        }
        else {
            throw new Error("Invalid axis: " + line.axis);
        }
        return result;
    }
}
exports.Rect = Rect;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlJlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxrREFBNkM7QUFDN0Msc0NBQWlDO0FBQ2pDLGtFQUE2RDtBQU03RCxNQUFhLElBQUk7SUFZYixZQUFZLE1BQVcsRUFBRTtRQUVyQiw2QkFBYSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFeEMsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQztRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFFN0IsQ0FBQztJQU9NLE1BQU0sQ0FBQyxJQUFVO1FBRXBCLElBQUksSUFBSSxLQUFLLEdBQUcsRUFBRTtZQUNkLE9BQU8sSUFBSSxXQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ2hEO2FBQU0sSUFBSSxJQUFJLEtBQUssR0FBRyxFQUFFO1lBQ3JCLE9BQU8sSUFBSSxXQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ2hEO2FBQU07WUFDSCxNQUFNLElBQUksS0FBSyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsQ0FBQztTQUMxQztJQUVMLENBQUM7SUFNRCxJQUFJLFVBQVU7UUFDVixPQUFPLElBQUksdUJBQVUsQ0FBQztZQUNsQixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1NBQ3RCLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxJQUFJLElBQUk7UUFDSixPQUFPLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNwQyxDQUFDO0lBUU0sVUFBVSxDQUFDLElBQVU7UUFFeEIsNkJBQWEsQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzFDLDZCQUFhLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFFcEQsTUFBTSxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFOUIsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLEdBQUcsRUFBRTtZQUVuQixNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDekIsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQ3hCLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBRXhDO2FBQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLEdBQUcsRUFBRTtZQUUxQixNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDeEIsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQ3pCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBRXpDO2FBQU07WUFDSCxNQUFNLElBQUksS0FBSyxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNqRDtRQUVELE9BQU8sTUFBTSxDQUFDO0lBRWxCLENBQUM7Q0FFSjtBQTFGRCxvQkEwRkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpbWVuc2lvbnN9IGZyb20gJy4vdXRpbC9EaW1lbnNpb25zJztcbmltcG9ydCB7TGluZX0gZnJvbSAnLi91dGlsL0xpbmUnO1xuaW1wb3J0IHtQcmVjb25kaXRpb25zfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL1ByZWNvbmRpdGlvbnMnO1xuaW1wb3J0IHtJUmVjdH0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL3JlY3RzL0lSZWN0JztcblxuLyoqXG4gKiBCYXNpYyBET00gc3R5bGUgcmVjdCB3aXRob3V0IGEgaGFyZCByZXF1aXJlbWVudCB0byB1c2UgYSBET01SZWN0LlxuICovXG5leHBvcnQgY2xhc3MgUmVjdCBpbXBsZW1lbnRzIElSZWN0IHtcblxuICAgIC8vIFRPRE86IHNvbWUgcmVjdHMgaGF2ZSB4LHkgYXMgd2VsbCBhcyBsZWZ0LHRvcCAuLi4gc2hvdWxkIHdlIGFkZCB0aGVtIGhlcmVcbiAgICAvLyB0byBiZSBjb21wbGV0ZSBhbmQgY2xvc2VyIHRvIGEgRE9NUmVjdD9cblxuICAgIHB1YmxpYyBsZWZ0OiBudW1iZXI7XG4gICAgcHVibGljIHRvcDogbnVtYmVyO1xuICAgIHB1YmxpYyByaWdodDogbnVtYmVyO1xuICAgIHB1YmxpYyBib3R0b206IG51bWJlcjtcbiAgICBwdWJsaWMgd2lkdGg6IG51bWJlcjtcbiAgICBwdWJsaWMgaGVpZ2h0OiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihvYmo6IGFueSA9IHt9KSB7XG5cbiAgICAgICAgUHJlY29uZGl0aW9ucy5hc3NlcnROb3ROdWxsKG9iaiwgXCJvYmpcIik7XG5cbiAgICAgICAgdGhpcy5sZWZ0ID0gb2JqLmxlZnQ7XG4gICAgICAgIHRoaXMudG9wID0gb2JqLnRvcDtcbiAgICAgICAgdGhpcy5yaWdodCA9IG9iai5yaWdodDtcbiAgICAgICAgdGhpcy5ib3R0b20gPSBvYmouYm90dG9tO1xuICAgICAgICB0aGlzLndpZHRoID0gb2JqLndpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IG9iai5oZWlnaHQ7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBheGlzIHtTdHJpbmd9IFRoZSBheGlzIHRvIHVzZSAoeCBvciB5KVxuICAgICAqIEByZXR1cm4ge0xpbmV9XG4gICAgICovXG4gICAgcHVibGljIHRvTGluZShheGlzOiBBeGlzKSB7XG5cbiAgICAgICAgaWYgKGF4aXMgPT09IFwieFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IExpbmUodGhpcy5sZWZ0LCB0aGlzLnJpZ2h0LCBheGlzKTtcbiAgICAgICAgfSBlbHNlIGlmIChheGlzID09PSBcInlcIikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBMaW5lKHRoaXMudG9wLCB0aGlzLmJvdHRvbSwgYXhpcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJXcm9uZyBheGlzOiBcIiArIGF4aXMpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0RpbWVuc2lvbnN9XG4gICAgICovXG4gICAgZ2V0IGRpbWVuc2lvbnMoKTogRGltZW5zaW9ucyB7XG4gICAgICAgIHJldHVybiBuZXcgRGltZW5zaW9ucyh7XG4gICAgICAgICAgICB3aWR0aDogdGhpcy53aWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogdGhpcy5oZWlnaHRcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0IGFyZWEoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMud2lkdGggKiB0aGlzLmhlaWdodDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGp1c3QgYW4gYXhpcyBiYXNlZCBvbiB0aGUgZ2l2ZW4gbGluZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBsaW5lIHtMaW5lfSBUaGUgbGluZSByZXByZXNlbnRpbmcgdGhlIGF4aXMuXG4gICAgICogQHJldHVybiB7UmVjdH0gUmV0dXJuIGEgTkVXIHJlY3Qgd2l0aCB1cGRhdGVkIGRpbWVuc2lvbnMuXG4gICAgICovXG4gICAgcHVibGljIGFkanVzdEF4aXMobGluZTogTGluZSkge1xuXG4gICAgICAgIFByZWNvbmRpdGlvbnMuYXNzZXJ0Tm90TnVsbChsaW5lLCBcImxpbmVcIik7XG4gICAgICAgIFByZWNvbmRpdGlvbnMuYXNzZXJ0Tm90TnVsbChsaW5lLmF4aXMsIFwibGluZS5heGlzXCIpO1xuXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBSZWN0KHRoaXMpO1xuXG4gICAgICAgIGlmIChsaW5lLmF4aXMgPT09IFwieFwiKSB7XG5cbiAgICAgICAgICAgIHJlc3VsdC5sZWZ0ID0gbGluZS5zdGFydDtcbiAgICAgICAgICAgIHJlc3VsdC5yaWdodCA9IGxpbmUuZW5kO1xuICAgICAgICAgICAgcmVzdWx0LndpZHRoID0gbGluZS5lbmQgLSBsaW5lLnN0YXJ0O1xuXG4gICAgICAgIH0gZWxzZSBpZiAobGluZS5heGlzID09PSBcInlcIikge1xuXG4gICAgICAgICAgICByZXN1bHQudG9wID0gbGluZS5zdGFydDtcbiAgICAgICAgICAgIHJlc3VsdC5ib3R0b20gPSBsaW5lLmVuZDtcbiAgICAgICAgICAgIHJlc3VsdC5oZWlnaHQgPSBsaW5lLmVuZCAtIGxpbmUuc3RhcnQ7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgYXhpczogXCIgKyBsaW5lLmF4aXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcblxuICAgIH1cblxufVxuXG5leHBvcnQgdHlwZSBBeGlzID0gJ3gnIHwgJ3knO1xuXG4iXX0=