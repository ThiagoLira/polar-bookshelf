"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rects_1 = require("../../../../Rects");
const LineAdjustment_1 = require("./LineAdjustment");
const Line_1 = require("../../../../util/Line");
const Adjacency_1 = require("./Adjacency");
const Preconditions_1 = require("polar-shared/src/Preconditions");
class DragRectAdjacencyCalculator {
    static calculate(primaryRect, secondaryRect, restrictionRect) {
        Preconditions_1.Preconditions.assertPresent(primaryRect, "primaryRect");
        Preconditions_1.Preconditions.assertPresent(secondaryRect, "secondaryRect");
        const result = new Adjacency_1.Adjacency();
        if (!restrictionRect) {
            restrictionRect = Rects_1.Rects.createFromBasicRect({
                left: -1000000,
                top: -1000000,
                bottom: 1000000,
                right: 1000000
            });
        }
        result.primaryRect = Rects_1.Rects.validate(primaryRect);
        result.secondaryRect = Rects_1.Rects.validate(secondaryRect);
        const secondaryBox = {
            horizontal: new Line_1.Line(secondaryRect.left, secondaryRect.right),
            vertical: new Line_1.Line(secondaryRect.top, secondaryRect.bottom)
        };
        const primaryBox = {
            horizontal: new Line_1.Line(primaryRect.left, primaryRect.right),
            vertical: new Line_1.Line(primaryRect.top, primaryRect.bottom)
        };
        const restrictionBox = {
            horizontal: new Line_1.Line(restrictionRect.left, restrictionRect.right),
            vertical: new Line_1.Line(restrictionRect.top, restrictionRect.bottom)
        };
        Preconditions_1.Preconditions.assertPresent(primaryBox, "primaryBox");
        Preconditions_1.Preconditions.assertPresent(secondaryBox, "secondaryBox");
        Preconditions_1.Preconditions.assertPresent(restrictionBox, "restrictionBox");
        result.adjustments.horizontal
            = DragRectAdjacencyCalculator.adjust(primaryBox.horizontal, secondaryBox.horizontal, restrictionBox.horizontal, "x");
        result.adjustments.vertical
            = DragRectAdjacencyCalculator.adjust(primaryBox.vertical, secondaryBox.vertical, restrictionBox.vertical, "y");
        let successfulAdjustments = [result.adjustments.horizontal, result.adjustments.vertical];
        successfulAdjustments = successfulAdjustments.filter(current => current.overlapped === true);
        successfulAdjustments = successfulAdjustments.sort((adj0, adj1) => adj0.delta - adj1.delta);
        if (successfulAdjustments.length >= 1) {
            result.adjustment = successfulAdjustments[0];
            result.adjustedRect = result.adjustment.adjustRect(primaryRect);
        }
        return result;
    }
    static adjust(primaryLine, secondaryLine, restrictionLine, axis) {
        const none = new LineAdjustment_1.LineAdjustment({
            axis,
            overlapped: false,
            start: primaryLine.start,
            snapped: null
        });
        let result = none;
        if (secondaryLine.overlaps(primaryLine) || primaryLine.overlaps(secondaryLine)) {
            let results = [];
            results.push(LineAdjustment_1.LineAdjustment.create({
                axis,
                start: secondaryLine.end,
                previous: primaryLine.start,
                snapped: "AFTER"
            }));
            results.push(LineAdjustment_1.LineAdjustment.create({
                axis,
                start: secondaryLine.start - primaryLine.width,
                previous: primaryLine.start,
                snapped: "BEFORE"
            }));
            results = results.filter(result => {
                if (result.start < restrictionLine.start) {
                    return false;
                }
                if ((result.start + primaryLine.width) > restrictionLine.end) {
                    return false;
                }
                return true;
            });
            results = results.sort((r0, r1) => r0.delta - r1.delta);
            if (results.length > 0) {
                result = results[0];
            }
        }
        return result;
    }
}
exports.DragRectAdjacencyCalculator = DragRectAdjacencyCalculator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHJhZ1JlY3RBZGphY2VuY3lDYWxjdWxhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRHJhZ1JlY3RBZGphY2VuY3lDYWxjdWxhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsNkNBQXdDO0FBQ3hDLHFEQUFnRDtBQUNoRCxnREFBMkM7QUFDM0MsMkNBQXNDO0FBQ3RDLGtFQUE2RDtBQU03RCxNQUFhLDJCQUEyQjtJQWU3QixNQUFNLENBQUMsU0FBUyxDQUFDLFdBQWlCLEVBQUUsYUFBbUIsRUFBRSxlQUFzQjtRQUVsRiw2QkFBYSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFDeEQsNkJBQWEsQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBRTVELE1BQU0sTUFBTSxHQUFHLElBQUkscUJBQVMsRUFBRSxDQUFDO1FBRS9CLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFNbEIsZUFBZSxHQUFHLGFBQUssQ0FBQyxtQkFBbUIsQ0FBQztnQkFDeEMsSUFBSSxFQUFFLENBQUMsT0FBTztnQkFDZCxHQUFHLEVBQUUsQ0FBQyxPQUFPO2dCQUNiLE1BQU0sRUFBRSxPQUFPO2dCQUNmLEtBQUssRUFBRSxPQUFPO2FBQ2pCLENBQUMsQ0FBQztTQUVOO1FBRUQsTUFBTSxDQUFDLFdBQVcsR0FBRyxhQUFLLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2pELE1BQU0sQ0FBQyxhQUFhLEdBQUcsYUFBSyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUVyRCxNQUFNLFlBQVksR0FBRztZQUNqQixVQUFVLEVBQUUsSUFBSSxXQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxhQUFhLENBQUMsS0FBSyxDQUFDO1lBQzdELFFBQVEsRUFBRSxJQUFJLFdBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxFQUFFLGFBQWEsQ0FBQyxNQUFNLENBQUM7U0FDOUQsQ0FBQztRQUVG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QUFJLENBQUMsK0JBQWMsQ0FBQyxNQUFNLENBQUM7Z0JBQy9CLElBQUk7Z0JBQ0osS0FBSyxFQUFFLGFBQWEsQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDLEtBQUs7Z0JBQzlDLFFBQVEsRUFBRSxXQUFXLENBQUMsS0FBSztnQkFDM0IsT0FBTyxFQUFFLFFBQVE7YUFDcEIsQ0FBQyxDQUFDLENBQUM7WUFJSixPQUFPLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBRSxNQUFNLENBQUMsRUFBRTtnQkFFL0IsSUFBSSxNQUFNLENBQUMsS0FBSyxHQUFHLGVBQWUsQ0FBQyxLQUFLLEVBQUU7b0JBQ3RDLE9BQU8sS0FBSyxDQUFDO2lCQUNoQjtnQkFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUcsZUFBZSxDQUFDLEdBQUcsRUFBRTtvQkFDMUQsT0FBTyxLQUFLLENBQUM7aUJBQ2hCO2dCQUVELE9BQU8sSUFBSSxDQUFDO1lBRWhCLENBQUMsQ0FBQyxDQUFDO1lBRUgsT0FBTyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUt4RCxJQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFHO2dCQUNyQixNQUFNLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3ZCO1NBRUo7UUFLRCxPQUFPLE1BQU0sQ0FBQztJQUVsQixDQUFDO0NBRUo7QUExSkQsa0VBMEpDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtSZWN0fSBmcm9tIFwiLi4vLi4vLi4vLi4vUmVjdFwiO1xuaW1wb3J0IHtSZWN0c30gZnJvbSBcIi4uLy4uLy4uLy4uL1JlY3RzXCI7XG5pbXBvcnQge0xpbmVBZGp1c3RtZW50fSBmcm9tIFwiLi9MaW5lQWRqdXN0bWVudFwiO1xuaW1wb3J0IHtMaW5lfSBmcm9tIFwiLi4vLi4vLi4vLi4vdXRpbC9MaW5lXCI7XG5pbXBvcnQge0FkamFjZW5jeX0gZnJvbSBcIi4vQWRqYWNlbmN5XCI7XG5pbXBvcnQge1ByZWNvbmRpdGlvbnN9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvUHJlY29uZGl0aW9ucyc7XG5cbi8qKlxuICogSWYgd2UgaGF2ZSB0d28gcmVjdHMsIGFuZCB0aGUndmUgbW92ZWQgdG8gaW50ZXJzZWN0LCBjb21wdXRlIHVwZGF0ZWRcbiAqIHBvc2l0aW9ucyBzbyB0aGF0IHRoZXkgYXJlIEFESkFDRU5ULCBub3QgaW50ZXJzZWN0aW5nLlxuICovXG5leHBvcnQgY2xhc3MgRHJhZ1JlY3RBZGphY2VuY3lDYWxjdWxhdG9yIHtcblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHByaW1hcnlSZWN0IHtSZWN0fSBUaGUgcHJpbWFyeSByZWN0IHRoYXQgaXMgbW92aW5nIGFuZCBpc1xuICAgICAqICAgICBpbnRlcnNlY3Rpbmcgd2l0aCB0aGUgc2Vjb25kYXJ5IHJlY3QuICBUaGUgcHJpbWFyeSByZWN0IGlzIHRoZSBvbmVcbiAgICAgKiAgICAgd2Ugd2FudCB0byBhZGp1c3QuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2Vjb25kYXJ5UmVjdCB7UmVjdH0gVGhlIHN0YXRpb25hcnkgcmVjdCB0aGF0IHdlIG5lZWQgdG8ga2VlcCBvdXJcbiAgICAgKiAgICAgcmVjdCBhZGphY2VudCB0b28uXG4gICAgICogQHBhcmFtIFtyZXN0cmljdGlvblJlY3RdIHtSZWN0fSBMaW1pdCB0aGUgbW92ZW1lbnQgdG8gdGhlIGdpdmVuIHJlY3QuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtBZGphY2VuY3l9IFJldHVybiB0aGUgbmV3IC8gY29ycmVjdCBwb3NpdGlvbiBvZiB0aGUgcHJpbWFyeVxuICAgICAqICAgICByZWN0LlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgY2FsY3VsYXRlKHByaW1hcnlSZWN0OiBSZWN0LCBzZWNvbmRhcnlSZWN0OiBSZWN0LCByZXN0cmljdGlvblJlY3Q/OiBSZWN0KSB7XG5cbiAgICAgICAgUHJlY29uZGl0aW9ucy5hc3NlcnRQcmVzZW50KHByaW1hcnlSZWN0LCBcInByaW1hcnlSZWN0XCIpO1xuICAgICAgICBQcmVjb25kaXRpb25zLmFzc2VydFByZXNlbnQoc2Vjb25kYXJ5UmVjdCwgXCJzZWNvbmRhcnlSZWN0XCIpO1xuXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBBZGphY2VuY3koKTtcblxuICAgICAgICBpZiAoIXJlc3RyaWN0aW9uUmVjdCkge1xuXG4gICAgICAgICAgICAvLyBkZWZpbmUgYSBIVUdFIHJlY3QgdG8gd29yayB3aXRoaW4gYnkgZGVmYXVsdC4gIE1hdGhlbWF0aWNhbGx5LCB3ZVxuICAgICAgICAgICAgLy8gc2hvdWxkIHByb2JhYmx5IHVzZSBpbmZpbml0eSBhbmQgbmVnYXRpdmUgaW5maW5pdHkgYnV0IHdvcmtpbmdcbiAgICAgICAgICAgIC8vIHdpdGggdGhlc2UgaW4gSmF2YXNjcmlwdCArIEpTT04gaXMgbGltaXRlZC5cblxuICAgICAgICAgICAgcmVzdHJpY3Rpb25SZWN0ID0gUmVjdHMuY3JlYXRlRnJvbUJhc2ljUmVjdCh7XG4gICAgICAgICAgICAgICAgbGVmdDogLTEwMDAwMDAsXG4gICAgICAgICAgICAgICAgdG9wOiAtMTAwMDAwMCxcbiAgICAgICAgICAgICAgICBib3R0b206IDEwMDAwMDAsXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDEwMDAwMDBcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cblxuICAgICAgICByZXN1bHQucHJpbWFyeVJlY3QgPSBSZWN0cy52YWxpZGF0ZShwcmltYXJ5UmVjdCk7XG4gICAgICAgIHJlc3VsdC5zZWNvbmRhcnlSZWN0ID0gUmVjdHMudmFsaWRhdGUoc2Vjb25kYXJ5UmVjdCk7XG5cbiAgICAgICAgY29uc3Qgc2Vjb25kYXJ5Qm94ID0ge1xuICAgICAgICAgICAgaG9yaXpvbnRhbDogbmV3IExpbmUoc2Vjb25kYXJ5UmVjdC5sZWZ0LCBzZWNvbmRhcnlSZWN0LnJpZ2h0KSxcbiAgICAgICAgICAgIHZlcnRpY2FsOiBuZXcgTGluZShzZWNvbmRhcnlSZWN0LnRvcCwgc2Vjb25kYXJ5UmVjdC5ib3R0b20pXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgcHJpbWFyeUJveCA9IHtcbiAgICAgICAgICAgIGhvcml6b250YWw6IG5ldyBMaW5lKHByaW1hcnlSZWN0LmxlZnQsIHByaW1hcnlSZWN0LnJpZ2h0KSxcbiAgICAgICAgICAgIHZlcnRpY2FsOiBuZXcgTGluZShwcmltYXJ5UmVjdC50b3AsIHByaW1hcnlSZWN0LmJvdHRvbSlcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCByZXN0cmljdGlvbkJveCA9IHtcbiAgICAgICAgICAgIGhvcml6b250YWw6IG5ldyBMaW5lKHJlc3RyaWN0aW9uUmVjdC5sZWZ0LCByZXN0cmljdGlvblJlY3QucmlnaHQpLFxuICAgICAgICAgICAgdmVydGljYWw6IG5ldyBMaW5lKHJlc3RyaWN0aW9uUmVjdC50b3AsIHJlc3RyaWN0aW9uUmVjdC5ib3R0b20pXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gVE9ETzogaXQgbWlnaHQgYmUgYmV0dGVyIHRvIGNyZWF0ZSBhIExpbmVTZXQgb2YgdmVydGljYWwgYW5kXG4gICAgICAgIC8vIGhvcml6b250YWwgYW5kIHRoZW4gcGFzcyB0aGVtIHRvIGFkanVzdC5cblxuICAgICAgICBQcmVjb25kaXRpb25zLmFzc2VydFByZXNlbnQocHJpbWFyeUJveCwgXCJwcmltYXJ5Qm94XCIpO1xuICAgICAgICBQcmVjb25kaXRpb25zLmFzc2VydFByZXNlbnQoc2Vjb25kYXJ5Qm94LCBcInNlY29uZGFyeUJveFwiKTtcbiAgICAgICAgUHJlY29uZGl0aW9ucy5hc3NlcnRQcmVzZW50KHJlc3RyaWN0aW9uQm94LCBcInJlc3RyaWN0aW9uQm94XCIpO1xuXG4gICAgICAgIHJlc3VsdC5hZGp1c3RtZW50cy5ob3Jpem9udGFsXG4gICAgICAgICAgICA9IERyYWdSZWN0QWRqYWNlbmN5Q2FsY3VsYXRvci5hZGp1c3QocHJpbWFyeUJveC5ob3Jpem9udGFsLCBzZWNvbmRhcnlCb3guaG9yaXpvbnRhbCwgcmVzdHJpY3Rpb25Cb3guaG9yaXpvbnRhbCwgXCJ4XCIpO1xuXG4gICAgICAgIHJlc3VsdC5hZGp1c3RtZW50cy52ZXJ0aWNhbFxuICAgICAgICAgICAgPSBEcmFnUmVjdEFkamFjZW5jeUNhbGN1bGF0b3IuYWRqdXN0KHByaW1hcnlCb3gudmVydGljYWwsIHNlY29uZGFyeUJveC52ZXJ0aWNhbCwgcmVzdHJpY3Rpb25Cb3gudmVydGljYWwsIFwieVwiKTtcblxuICAgICAgICBsZXQgc3VjY2Vzc2Z1bEFkanVzdG1lbnRzID0gW3Jlc3VsdC5hZGp1c3RtZW50cy5ob3Jpem9udGFsLCByZXN1bHQuYWRqdXN0bWVudHMudmVydGljYWxdO1xuXG4gICAgICAgIC8vIHdlIG9ubHkgd2FudCB0byBmYWN0b3IgaW4gd2hlcmUgd2UgYWN0dWFsbHkgb3ZlcmxhcHBlZC5cbiAgICAgICAgc3VjY2Vzc2Z1bEFkanVzdG1lbnRzID0gc3VjY2Vzc2Z1bEFkanVzdG1lbnRzLmZpbHRlcihjdXJyZW50ID0+IGN1cnJlbnQub3ZlcmxhcHBlZCA9PT0gdHJ1ZSk7XG5cbiAgICAgICAgLy8gbm93IHNvcnQgdGhlIGFkanVzdG1lbnRzIHNvIHRoYXQgb25lcyB3aXRoIGEgbG93ZXIgZGVsdGEgYXJlIGZpcnN0LlxuICAgICAgICBzdWNjZXNzZnVsQWRqdXN0bWVudHMgPSBzdWNjZXNzZnVsQWRqdXN0bWVudHMuc29ydCgoYWRqMCwgYWRqMSkgPT4gYWRqMC5kZWx0YSAtIGFkajEuZGVsdGEpO1xuXG4gICAgICAgIGlmIChzdWNjZXNzZnVsQWRqdXN0bWVudHMubGVuZ3RoID49IDEpIHtcbiAgICAgICAgICAgIHJlc3VsdC5hZGp1c3RtZW50ID0gc3VjY2Vzc2Z1bEFkanVzdG1lbnRzWzBdO1xuICAgICAgICAgICAgcmVzdWx0LmFkanVzdGVkUmVjdCA9IHJlc3VsdC5hZGp1c3RtZW50LmFkanVzdFJlY3QocHJpbWFyeVJlY3QpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkanVzdCB0aGUgbGluZSBhbmQgcmV0dXJuIHRoZSByZXF1aXJlZCBhZGp1c3RtZW50LCBvciBudWxsIGlmIG5vXG4gICAgICogYWRqdXN0bWVudCBpcyBuZWVkZWQuXG4gICAgICpcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGFkanVzdChwcmltYXJ5TGluZTogTGluZSwgc2Vjb25kYXJ5TGluZTogTGluZSwgcmVzdHJpY3Rpb25MaW5lOiBMaW5lLCBheGlzOiAneCcgfCAneScpIHtcblxuICAgICAgICAvLyB0aGVyZSB3ZXJlIG5vIG1hdGNoZXMuXG4gICAgICAgIGNvbnN0IG5vbmUgPSBuZXcgTGluZUFkanVzdG1lbnQoe1xuICAgICAgICAgICAgYXhpcyxcbiAgICAgICAgICAgIG92ZXJsYXBwZWQ6IGZhbHNlLFxuICAgICAgICAgICAgc3RhcnQ6IHByaW1hcnlMaW5lLnN0YXJ0LFxuICAgICAgICAgICAgc25hcHBlZDogbnVsbFxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgcmVzdWx0ID0gbm9uZTtcblxuICAgICAgICBpZiAoc2Vjb25kYXJ5TGluZS5vdmVybGFwcyhwcmltYXJ5TGluZSkgfHwgcHJpbWFyeUxpbmUub3ZlcmxhcHMoc2Vjb25kYXJ5TGluZSkpIHtcblxuICAgICAgICAgICAgbGV0IHJlc3VsdHMgPSBbXTtcblxuICAgICAgICAgICAgcmVzdWx0cy5wdXNoKExpbmVBZGp1c3RtZW50LmNyZWF0ZSh7XG4gICAgICAgICAgICAgICAgYXhpcyxcbiAgICAgICAgICAgICAgICBzdGFydDogc2Vjb25kYXJ5TGluZS5lbmQsXG4gICAgICAgICAgICAgICAgcHJldmlvdXM6IHByaW1hcnlMaW5lLnN0YXJ0LFxuICAgICAgICAgICAgICAgIHNuYXBwZWQ6IFwiQUZURVJcIlxuICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgICByZXN1bHRzLnB1c2goTGluZUFkanVzdG1lbnQuY3JlYXRlKHtcbiAgICAgICAgICAgICAgICBheGlzLFxuICAgICAgICAgICAgICAgIHN0YXJ0OiBzZWNvbmRhcnlMaW5lLnN0YXJ0IC0gcHJpbWFyeUxpbmUud2lkdGgsXG4gICAgICAgICAgICAgICAgcHJldmlvdXM6IHByaW1hcnlMaW5lLnN0YXJ0LFxuICAgICAgICAgICAgICAgIHNuYXBwZWQ6IFwiQkVGT1JFXCJcbiAgICAgICAgICAgIH0pKTtcblxuICAgICAgICAgICAgLy8gZmlsdGVyIG91dCByZXN1bHRzIHRoYXQgd291bGQgYmUgaW52YWxpZCBkdWUgdG8gdGhlIHJlc3RyaWN0aW9uXG4gICAgICAgICAgICAvLyBsaW5lLlxuICAgICAgICAgICAgcmVzdWx0cyA9IHJlc3VsdHMuZmlsdGVyKCByZXN1bHQgPT4ge1xuXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGFydCA8IHJlc3RyaWN0aW9uTGluZS5zdGFydCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKChyZXN1bHQuc3RhcnQgKyBwcmltYXJ5TGluZS53aWR0aCkgPiByZXN0cmljdGlvbkxpbmUuZW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJlc3VsdHMgPSByZXN1bHRzLnNvcnQoKHIwLCByMSkgPT4gcjAuZGVsdGEgLSByMS5kZWx0YSk7XG5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBERUJVRzogcmVzdWx0cyBmb3IgJHtheGlzfSBheGlzOiBgICtcbiAgICAgICAgICAgIC8vIEpTT04uc3RyaW5naWZ5KHJlc3VsdHMsIG51bGwsIFwiICBcIikpO1xuXG4gICAgICAgICAgICBpZiAocmVzdWx0cy5sZW5ndGggPiAwICkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdHNbMF07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBERUJVRzogRmluYWwgcmVzdWx0IGZvciAke2F4aXN9IGF4aXM6IGAgK1xuICAgICAgICAvLyBKU09OLnN0cmluZ2lmeShyZXN1bHQsIG51bGwsIFwiICBcIikpO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG5cbiAgICB9XG5cbn1cbiJdfQ==