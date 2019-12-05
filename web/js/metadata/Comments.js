"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ISODateTimeStrings_1 = require("polar-shared/src/metadata/ISODateTimeStrings");
const Comment_1 = require("./Comment");
const Hashcodes_1 = require("polar-shared/src/util/Hashcodes");
const TextType_1 = require("polar-shared/src/metadata/TextType");
const Texts_1 = require("polar-shared/src/metadata/Texts");
class Comments {
    static createID() {
        const seq = this.SEQUENCE++;
        const now = Date.now();
        return Hashcodes_1.Hashcodes.createID({ seq, now }, 20);
    }
    static createTextComment(text, ref) {
        const content = Texts_1.Texts.create(text, TextType_1.TextType.TEXT);
        const id = this.createID();
        const created = ISODateTimeStrings_1.ISODateTimeStrings.create();
        const lastUpdated = created;
        return new Comment_1.Comment({ content, id, guid: id, created, lastUpdated, ref });
    }
    static createHTMLComment(text, ref, created, lastUpdated) {
        const content = Texts_1.Texts.create(text, TextType_1.TextType.HTML);
        const id = this.createID();
        if (!created) {
            created = ISODateTimeStrings_1.ISODateTimeStrings.create();
        }
        if (!lastUpdated) {
            lastUpdated = created;
        }
        return new Comment_1.Comment({ content, id, guid: id, created, lastUpdated, ref });
    }
}
exports.Comments = Comments;
Comments.SEQUENCE = 0;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tbWVudHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJDb21tZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFGQUFtRztBQUNuRyx1Q0FBa0M7QUFDbEMsK0RBQTBEO0FBQzFELGlFQUE0RDtBQUM1RCwyREFBc0Q7QUFHdEQsTUFBYSxRQUFRO0lBSVYsTUFBTSxDQUFDLFFBQVE7UUFFbEIsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzVCLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUN2QixPQUFPLHFCQUFTLENBQUMsUUFBUSxDQUFDLEVBQUMsR0FBRyxFQUFFLEdBQUcsRUFBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRTlDLENBQUM7SUFFTSxNQUFNLENBQUMsaUJBQWlCLENBQUMsSUFBWSxFQUFFLEdBQVE7UUFFbEQsTUFBTSxPQUFPLEdBQUcsYUFBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsbUJBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVsRCxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDM0IsTUFBTSxPQUFPLEdBQUcsdUNBQWtCLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDNUMsTUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDO1FBRTVCLE9BQU8sSUFBSSxpQkFBTyxDQUFDLEVBQUMsT0FBTyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUU1RSxDQUFDO0lBRU0sTUFBTSxDQUFDLGlCQUFpQixDQUFDLElBQVksRUFDWixHQUFRLEVBQ1IsT0FBMkIsRUFDM0IsV0FBK0I7UUFFM0QsTUFBTSxPQUFPLEdBQUcsYUFBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsbUJBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVsRCxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFM0IsSUFBSSxDQUFFLE9BQU8sRUFBRTtZQUNYLE9BQU8sR0FBRyx1Q0FBa0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUN6QztRQUVELElBQUksQ0FBRSxXQUFXLEVBQUU7WUFDZixXQUFXLEdBQUcsT0FBTyxDQUFDO1NBQ3pCO1FBRUQsT0FBTyxJQUFJLGlCQUFPLENBQUMsRUFBQyxPQUFPLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBRTVFLENBQUM7O0FBM0NMLDRCQTZDQztBQTNDaUIsaUJBQVEsR0FBVyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lTT0RhdGVUaW1lU3RyaW5nLCBJU09EYXRlVGltZVN0cmluZ3N9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbWV0YWRhdGEvSVNPRGF0ZVRpbWVTdHJpbmdzJztcbmltcG9ydCB7Q29tbWVudH0gZnJvbSAnLi9Db21tZW50JztcbmltcG9ydCB7SGFzaGNvZGVzfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvSGFzaGNvZGVzJztcbmltcG9ydCB7VGV4dFR5cGV9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbWV0YWRhdGEvVGV4dFR5cGUnO1xuaW1wb3J0IHtUZXh0c30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9tZXRhZGF0YS9UZXh0cyc7XG5pbXBvcnQge1JlZn0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9tZXRhZGF0YS9SZWZzJztcblxuZXhwb3J0IGNsYXNzIENvbW1lbnRzIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgU0VRVUVOQ0U6IG51bWJlciA9IDA7XG5cbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZUlEKCkge1xuXG4gICAgICAgIGNvbnN0IHNlcSA9IHRoaXMuU0VRVUVOQ0UrKztcbiAgICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgcmV0dXJuIEhhc2hjb2Rlcy5jcmVhdGVJRCh7c2VxLCBub3d9LCAyMCk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZVRleHRDb21tZW50KHRleHQ6IHN0cmluZywgcmVmOiBSZWYpIHtcblxuICAgICAgICBjb25zdCBjb250ZW50ID0gVGV4dHMuY3JlYXRlKHRleHQsIFRleHRUeXBlLlRFWFQpO1xuXG4gICAgICAgIGNvbnN0IGlkID0gdGhpcy5jcmVhdGVJRCgpO1xuICAgICAgICBjb25zdCBjcmVhdGVkID0gSVNPRGF0ZVRpbWVTdHJpbmdzLmNyZWF0ZSgpO1xuICAgICAgICBjb25zdCBsYXN0VXBkYXRlZCA9IGNyZWF0ZWQ7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBDb21tZW50KHtjb250ZW50LCBpZCwgZ3VpZDogaWQsIGNyZWF0ZWQsIGxhc3RVcGRhdGVkLCByZWYgfSk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZUhUTUxDb21tZW50KHRleHQ6IHN0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZjogUmVmLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlZD86IElTT0RhdGVUaW1lU3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdFVwZGF0ZWQ/OiBJU09EYXRlVGltZVN0cmluZyApIHtcblxuICAgICAgICBjb25zdCBjb250ZW50ID0gVGV4dHMuY3JlYXRlKHRleHQsIFRleHRUeXBlLkhUTUwpO1xuXG4gICAgICAgIGNvbnN0IGlkID0gdGhpcy5jcmVhdGVJRCgpO1xuXG4gICAgICAgIGlmICghIGNyZWF0ZWQpIHtcbiAgICAgICAgICAgIGNyZWF0ZWQgPSBJU09EYXRlVGltZVN0cmluZ3MuY3JlYXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoISBsYXN0VXBkYXRlZCkge1xuICAgICAgICAgICAgbGFzdFVwZGF0ZWQgPSBjcmVhdGVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBDb21tZW50KHtjb250ZW50LCBpZCwgZ3VpZDogaWQsIGNyZWF0ZWQsIGxhc3RVcGRhdGVkLCByZWYgfSk7XG5cbiAgICB9XG5cbn1cbiJdfQ==