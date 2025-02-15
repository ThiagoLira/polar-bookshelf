"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SerializedObject_1 = require("./SerializedObject");
class TextRect extends SerializedObject_1.SerializedObject {
    constructor(val) {
        super(val);
        this.text = val.text;
        this.rect = val.rect || null;
        this.init(val);
    }
}
exports.TextRect = TextRect;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGV4dFJlY3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJUZXh0UmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLHlEQUFvRDtBQUVwRCxNQUFhLFFBQVMsU0FBUSxtQ0FBZ0I7SUFNMUMsWUFBWSxHQUFRO1FBRWhCLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVYLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDO1FBRTdCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFbkIsQ0FBQztDQUVKO0FBakJELDRCQWlCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SVRleHRSZWN0fSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy9tZXRhZGF0YS9JVGV4dFJlY3RcIjtcbmltcG9ydCB7SVJlY3R9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC9yZWN0cy9JUmVjdCc7XG5pbXBvcnQge1NlcmlhbGl6ZWRPYmplY3R9IGZyb20gXCIuL1NlcmlhbGl6ZWRPYmplY3RcIjtcblxuZXhwb3J0IGNsYXNzIFRleHRSZWN0IGV4dGVuZHMgU2VyaWFsaXplZE9iamVjdCBpbXBsZW1lbnRzIElUZXh0UmVjdCB7XG5cbiAgICBwdWJsaWMgcmVhZG9ubHkgdGV4dDogc3RyaW5nO1xuXG4gICAgcHVibGljIHJlYWRvbmx5IHJlY3Q6IElSZWN0O1xuXG4gICAgY29uc3RydWN0b3IodmFsOiBhbnkpIHtcblxuICAgICAgICBzdXBlcih2YWwpO1xuXG4gICAgICAgIHRoaXMudGV4dCA9IHZhbC50ZXh0O1xuICAgICAgICB0aGlzLnJlY3QgPSB2YWwucmVjdCB8fCBudWxsO1xuXG4gICAgICAgIHRoaXMuaW5pdCh2YWwpO1xuXG4gICAgfVxuXG59XG5cbiJdfQ==