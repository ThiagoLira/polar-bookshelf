"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PagemarkType_1 = require("polar-shared/src/metadata/PagemarkType");
const PagemarkRect_1 = require("./PagemarkRect");
const Preconditions_1 = require("polar-shared/src/Preconditions");
const Rect_1 = require("../Rect");
const Rects_1 = require("../Rects");
class PagemarkRects {
    static createDefault(pagemark) {
        if (pagemark.type === PagemarkType_1.PagemarkType.SINGLE_COLUMN && "percentage" in pagemark) {
            return new PagemarkRect_1.PagemarkRect({
                left: 0,
                top: 0,
                width: 100,
                height: pagemark.percentage
            });
        }
        throw new Error("Can not create default");
    }
    static createFromPercentage(percentage) {
        return new PagemarkRect_1.PagemarkRect({
            left: 0,
            top: 0,
            width: 100,
            height: percentage
        });
    }
    static createFromRect(rect) {
        return new PagemarkRect_1.PagemarkRect({
            left: rect.left,
            top: rect.top,
            width: rect.width,
            height: rect.height
        });
    }
    static createFromLines(xAxis, yAxis) {
        return PagemarkRects.createFromRect(Rects_1.Rects.createFromLines(xAxis, yAxis));
    }
    static createFromPositionedRect(boxRect, containerRect) {
        Preconditions_1.Preconditions.assertInstanceOf(boxRect, Rect_1.Rect, "boxRect");
        let xAxis = boxRect.toLine("x").multiply(100 / containerRect.width).floor();
        let yAxis = boxRect.toLine("y").multiply(100 / containerRect.height).floor();
        return this.createFromLines(xAxis, yAxis);
    }
}
exports.PagemarkRects = PagemarkRects;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFnZW1hcmtSZWN0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlBhZ2VtYXJrUmVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSx5RUFBb0U7QUFDcEUsaURBQTRDO0FBQzVDLGtFQUE2RDtBQUM3RCxrQ0FBNkI7QUFDN0Isb0NBQStCO0FBRS9CLE1BQWEsYUFBYTtJQU90QixNQUFNLENBQUMsYUFBYSxDQUFDLFFBQWtCO1FBRW5DLElBQUcsUUFBUSxDQUFDLElBQUksS0FBSywyQkFBWSxDQUFDLGFBQWEsSUFBSSxZQUFZLElBQUksUUFBUSxFQUFFO1lBRXpFLE9BQU8sSUFBSSwyQkFBWSxDQUFDO2dCQUNwQixJQUFJLEVBQUUsQ0FBQztnQkFDUCxHQUFHLEVBQUUsQ0FBQztnQkFDTixLQUFLLEVBQUUsR0FBRztnQkFDVixNQUFNLEVBQUUsUUFBUSxDQUFDLFVBQVU7YUFDOUIsQ0FBQyxDQUFDO1NBRU47UUFFRCxNQUFNLElBQUksS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUM7SUFFOUMsQ0FBQztJQU9ELE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxVQUFrQjtRQUUxQyxPQUFPLElBQUksMkJBQVksQ0FBQztZQUNwQixJQUFJLEVBQUUsQ0FBQztZQUNQLEdBQUcsRUFBRSxDQUFDO1lBQ04sS0FBSyxFQUFFLEdBQUc7WUFDVixNQUFNLEVBQUUsVUFBVTtTQUNyQixDQUFDLENBQUM7SUFDUCxDQUFDO0lBU00sTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFTO1FBRWxDLE9BQU8sSUFBSSwyQkFBWSxDQUFDO1lBQ3BCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRztZQUNiLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07U0FDdEIsQ0FBQyxDQUFDO0lBRVAsQ0FBQztJQVNELE1BQU0sQ0FBQyxlQUFlLENBQUMsS0FBVSxFQUFFLEtBQVU7UUFDekMsT0FBTyxhQUFhLENBQUMsY0FBYyxDQUFDLGFBQUssQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQVlELE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxPQUFZLEVBQUUsYUFBa0I7UUFFNUQsNkJBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsV0FBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBRXpELElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDNUUsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUU3RSxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBRTlDLENBQUM7Q0FFSjtBQXpGRCxzQ0F5RkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BhZ2VtYXJrfSBmcm9tICcuL1BhZ2VtYXJrJztcbmltcG9ydCB7UGFnZW1hcmtUeXBlfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL21ldGFkYXRhL1BhZ2VtYXJrVHlwZSc7XG5pbXBvcnQge1BhZ2VtYXJrUmVjdH0gZnJvbSAnLi9QYWdlbWFya1JlY3QnO1xuaW1wb3J0IHtQcmVjb25kaXRpb25zfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL1ByZWNvbmRpdGlvbnMnO1xuaW1wb3J0IHtSZWN0fSBmcm9tICcuLi9SZWN0JztcbmltcG9ydCB7UmVjdHN9IGZyb20gJy4uL1JlY3RzJztcblxuZXhwb3J0IGNsYXNzIFBhZ2VtYXJrUmVjdHMge1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBDcmVhdGUgYSBkZWZhdWx0IFBhZ2VtYXJrUmVjdCBmcm9tIGEgUGFnZW1hcmsgdGhhdCBtaWdodCBiZSBsZWdhY3kuXG4gICAgICpcbiAgICAgKi9cbiAgICBzdGF0aWMgY3JlYXRlRGVmYXVsdChwYWdlbWFyazogUGFnZW1hcmspIHtcblxuICAgICAgICBpZihwYWdlbWFyay50eXBlID09PSBQYWdlbWFya1R5cGUuU0lOR0xFX0NPTFVNTiAmJiBcInBlcmNlbnRhZ2VcIiBpbiBwYWdlbWFyaykge1xuXG4gICAgICAgICAgICByZXR1cm4gbmV3IFBhZ2VtYXJrUmVjdCh7XG4gICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHBhZ2VtYXJrLnBlcmNlbnRhZ2VcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cblxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW4gbm90IGNyZWF0ZSBkZWZhdWx0XCIpO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcGVyY2VudGFnZSB7bnVtYmVyfVxuICAgICAqIEByZXR1cm4ge1BhZ2VtYXJrUmVjdH1cbiAgICAgKi9cbiAgICBzdGF0aWMgY3JlYXRlRnJvbVBlcmNlbnRhZ2UocGVyY2VudGFnZTogbnVtYmVyKSB7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQYWdlbWFya1JlY3Qoe1xuICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgIHdpZHRoOiAxMDAsXG4gICAgICAgICAgICBoZWlnaHQ6IHBlcmNlbnRhZ2VcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqXG4gICAgICogQHBhcmFtIHJlY3Qge1JlY3R9XG4gICAgICogQHJldHVybiB7UGFnZW1hcmtSZWN0fVxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlRnJvbVJlY3QocmVjdDogYW55KSB7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQYWdlbWFya1JlY3Qoe1xuICAgICAgICAgICAgbGVmdDogcmVjdC5sZWZ0LFxuICAgICAgICAgICAgdG9wOiByZWN0LnRvcCxcbiAgICAgICAgICAgIHdpZHRoOiByZWN0LndpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiByZWN0LmhlaWdodFxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQGRlcHJlY2F0ZWQgTW92aW5nIHRvIEFubm90YXRpb25SZWN0c1xuICAgICAqIEBwYXJhbSB4QXhpcyB7TGluZX1cbiAgICAgKiBAcGFyYW0geUF4aXMge0xpbmV9XG4gICAgICogQHJldHVybiB7UGFnZW1hcmtSZWN0fVxuICAgICAqL1xuICAgIHN0YXRpYyBjcmVhdGVGcm9tTGluZXMoeEF4aXM6IGFueSwgeUF4aXM6IGFueSkge1xuICAgICAgICByZXR1cm4gUGFnZW1hcmtSZWN0cy5jcmVhdGVGcm9tUmVjdChSZWN0cy5jcmVhdGVGcm9tTGluZXMoeEF4aXMsIHlBeGlzKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IFBhZ2VtYXJrUmVjdCBmcm9tIGEgcG9zaXRpb25lZCByZWN0LiAgV2UgdXNlIHRoaXMgdG8gdGFrZVxuICAgICAqIGEgZHJhZ2dlZCBvciByZXNpemVkIHJlY3QgLyBib3ggb24gdGhlIHNjcmVlbiB0aGVuIGNvbnZlcnQgaXQgdG8gYVxuICAgICAqIFBhZ2VtYXJrUmVjdCB3aXRoIHRoZSBjb3JyZWN0IGNvb3JkaW5hdGVzLlxuICAgICAqXG4gICAgICogQGRlcHJlY2F0ZWQgTW92aW5nIHRvIEFubm90YXRpb25SZWN0c1xuICAgICAqIEBwYXJhbSBib3hSZWN0IHtSZWN0fVxuICAgICAqIEBwYXJhbSBjb250YWluZXJSZWN0IHtSZWN0fVxuICAgICAqIEByZXR1cm4ge1BhZ2VtYXJrUmVjdH1cbiAgICAgKi9cbiAgICBzdGF0aWMgY3JlYXRlRnJvbVBvc2l0aW9uZWRSZWN0KGJveFJlY3Q6IGFueSwgY29udGFpbmVyUmVjdDogYW55KSB7XG5cbiAgICAgICAgUHJlY29uZGl0aW9ucy5hc3NlcnRJbnN0YW5jZU9mKGJveFJlY3QsIFJlY3QsIFwiYm94UmVjdFwiKTtcblxuICAgICAgICBsZXQgeEF4aXMgPSBib3hSZWN0LnRvTGluZShcInhcIikubXVsdGlwbHkoMTAwIC8gY29udGFpbmVyUmVjdC53aWR0aCkuZmxvb3IoKTtcbiAgICAgICAgbGV0IHlBeGlzID0gYm94UmVjdC50b0xpbmUoXCJ5XCIpLm11bHRpcGx5KDEwMCAvIGNvbnRhaW5lclJlY3QuaGVpZ2h0KS5mbG9vcigpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUZyb21MaW5lcyh4QXhpcywgeUF4aXMpO1xuXG4gICAgfVxuXG59XG4iXX0=