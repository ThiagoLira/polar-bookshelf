"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Texts_1 = require("polar-shared/src/metadata/Texts");
const TextType_1 = require("polar-shared/src/metadata/TextType");
const BaseHighlight_1 = require("./BaseHighlight");
const Preconditions_1 = require("polar-shared/src/Preconditions");
class TextHighlight extends BaseHighlight_1.BaseHighlight {
    constructor(val) {
        super(val);
        this.textSelections = {};
        this.text = Texts_1.Texts.create("", TextType_1.TextType.HTML);
        this.init(val);
    }
    validate() {
        super.validate();
        Preconditions_1.Preconditions.assertNotInstanceOf(this.textSelections, "textSelections", Array);
    }
}
exports.TextHighlight = TextHighlight;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGV4dEhpZ2hsaWdodC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlRleHRIaWdobGlnaHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSwyREFBc0Q7QUFDdEQsaUVBQTREO0FBQzVELG1EQUE4QztBQUM5QyxrRUFBNkQ7QUFJN0QsTUFBYSxhQUFjLFNBQVEsNkJBQWE7SUFzQjVDLFlBQVksR0FBbUI7UUFFM0IsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBZlIsbUJBQWMsR0FBOEIsRUFBRSxDQUFDO1FBUy9DLFNBQUksR0FBa0IsYUFBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsbUJBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQW9DekQsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUVuQixDQUFDO0lBRU0sUUFBUTtRQUNYLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNqQiw2QkFBYSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDcEYsQ0FBQztDQUVKO0FBL0RELHNDQStEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7VGV4dFJlY3R9IGZyb20gJy4vVGV4dFJlY3QnO1xuaW1wb3J0IHtUZXh0fSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL21ldGFkYXRhL1RleHQnO1xuaW1wb3J0IHtUZXh0c30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9tZXRhZGF0YS9UZXh0cyc7XG5pbXBvcnQge1RleHRUeXBlfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL21ldGFkYXRhL1RleHRUeXBlJztcbmltcG9ydCB7QmFzZUhpZ2hsaWdodH0gZnJvbSAnLi9CYXNlSGlnaGxpZ2h0JztcbmltcG9ydCB7UHJlY29uZGl0aW9uc30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9QcmVjb25kaXRpb25zJztcbmltcG9ydCB7SVRleHRIaWdobGlnaHR9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL21ldGFkYXRhL0lUZXh0SGlnaGxpZ2h0XCI7XG5pbXBvcnQge0lUZXh0UmVjdH0gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvbWV0YWRhdGEvSVRleHRSZWN0XCI7XG5cbmV4cG9ydCBjbGFzcyBUZXh0SGlnaGxpZ2h0IGV4dGVuZHMgQmFzZUhpZ2hsaWdodCBpbXBsZW1lbnRzIElUZXh0SGlnaGxpZ2h0IHtcblxuICAgIC8qKlxuICAgICAqIEEgcmF3IGFycmF5LWxpa2Ugb2JqZWN0IG9mIHRleHQgZnJvbSB0aGUgcmVnaW9ucyB0aGF0IHRoZSB1c2VyXG4gICAgICogaGFzIGhpZ2hsaWdodGVkIGluIHRoZSBVSS4gSW4gUERGIGFuZCBwZGYuanMgdGhlcmUgaXNuJ3QgcmVhbGx5XG4gICAgICogdGhlIGNvbmNlcHQgb2YgZmxvd2luZyB0ZXh0IHNvIHdlIHRyeSB0byBzaG93IHRoZSB1c2VyIHRoZSB0ZXh0XG4gICAgICogaW4gdGhlIHNwZWNpZmljIHJlZ2lvbnMgdGhleSBzZWxlY3RlZC5cbiAgICAgKlxuICAgICAqL1xuICAgIHB1YmxpYyB0ZXh0U2VsZWN0aW9uczoge1tpZDogbnVtYmVyXTogSVRleHRSZWN0fSA9IHt9O1xuXG4gICAgLyoqXG4gICAgICogVGhlIHRleHQgc2VsZWN0aW9ucyBjb252ZXJ0ZWQgdG8gYSB0ZXh0IHN0cmluZyB3aGljaCBtYXkgb3IgbWF5IG5vdCBiZVxuICAgICAqIGh1bWFuIHJlYWRhYmxlLiAgU29tZSBvZiB0aGUgUERGIHRleHQgYXJlIGFjdHVhbGx5IGxpc3RzIG9mIGZpZ3VyZXMgd2l0aFxuICAgICAqIHNwZWNpYWwgY2hhcmFjdGVycyB0aGF0IG1pZ2h0IGJlIHBsYWNlZCBhYnNvbHV0ZWx5IGFyb3VuZCB0aGUgc2NyZWVuLlxuICAgICAqXG4gICAgICogV2hlbiB0aGlzIGlzIGp1c3QgYSBwbGFpbiBzdHJpbmcgd2UgYXNzdW1lIGl0J3MgdGV4dCBhbmQgbm90IEhUTUwuXG4gICAgICovXG4gICAgcHVibGljIHRleHQ6IFRleHQgfCBzdHJpbmcgPSBUZXh0cy5jcmVhdGUoXCJcIiwgVGV4dFR5cGUuSFRNTCk7XG5cbiAgICBwdWJsaWMgcmV2aXNlZFRleHQ/OiBUZXh0IHwgc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IodmFsOiBJVGV4dEhpZ2hsaWdodCkge1xuXG4gICAgICAgIHN1cGVyKHZhbCk7XG5cbiAgICAgICAgLy8gRklYTUU6IGFsbCB0aGVzZSBleHRyYWN0aW9ucyAodGV4dCwgaHRtbCwgZXRjKSBzaG91bGQgYmUgJ3NuaXBwZXQnXG4gICAgICAgIC8vIGJlY2F1c2Ugd2UgYWxzbyBoYXZlIHRvIGluY2x1ZGUgdGhlIGNvbnRleHQgd2l0aCB0aGVtIGFuZCB3aXRoIHRoZVxuICAgICAgICAvLyBjb250ZXh0IHdlIGFsc28gbmVlZCB0byBpbmNsdWRlIGltYWdlcyBhcyB3ZWxsIGFzIHRoZSBmb3JtYXQgKG1hcmtkb3duLFxuICAgICAgICAvLyBodG1sLCBldGMpLiAgSXQgc2hvdWxkIHByb2JhYmx5IGJlIGEgbWFwIG9mIGVhY2ggc25pcHBldCB0eXBlLi4uXG4gICAgICAgIC8vXG4gICAgICAgIC8vIFRoZXJlIHNob3VsZCBiZSBvbmUgd2l0aCBubyBjb250ZXh0LCBvbmUgd2l0aCBjb250ZXh0LlxuICAgICAgICAvL1xuICAgICAgICAvLyBGSVhNRTogdGV4dCBzZWxlY3Rpb25zIHNob3VsZCBhbHNvIC8gcHJvYmFibHkgYmUgYSBzbmlwcGV0LiAgRWFjaFxuICAgICAgICAvLyBzbmlwcGV0IHNob3VsZCBhbHNvIGhhdmUgYSByZWN0IGFzc29jaWF0ZWQgd2l0aCBpdC4gIFRoZSAndGV4dCdcbiAgICAgICAgLy8gc25pcHBldCBzaG91bGQgaGF2ZSBhIHJlY3QgZm9yIHRoZSBib3VuZGFyeSBvZiB0aGUgdGV4dC5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gRklYTUU6IHdlIGNvdWxkIHByb2JhYmx5IHJldGFpbiB0aGUgaHRtbCBhbmQgdGV4dCB2YWx1ZXMgYXMgbGVnYWN5XG4gICAgICAgIC8vIGZvciBub3cgYW5kIGFkZCBzbmlwcGV0cyBsYXRlci5cblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIEhUTUwgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBjb250ZW50LiAgVGhpcyB0aGlzIGlzIGNsZWFuc2VkIHZpYVxuICAgICAgICAgKiBhIHdoaXRlbGlzdCBzbyBvbmx5IDxiPiwgPGVtPiwgPGE+IGV0YyBhdHRyaWJ1dGVcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge1N0cmluZ31cbiAgICAgICAgICovXG5cbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3B1bmthdmUvc2FuaXRpemUtaHRtbCBmb3IgdGhpcyB3aXRoIHRoZSBkZWZhdWx0XG4gICAgICAgIC8vIG9wdGlvbnMgbG9va3MgcHJldHR5IGRlY2VudC5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gZG8gdGhpcyB3aXRoIHRoZSByZXN1bHRpbmcgZG9jdW1lbnQgZnJhZ21lbnQuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIHRoaXMuaHRtbCA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5pbml0KHZhbCk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgdmFsaWRhdGUoKSB7XG4gICAgICAgIHN1cGVyLnZhbGlkYXRlKCk7XG4gICAgICAgIFByZWNvbmRpdGlvbnMuYXNzZXJ0Tm90SW5zdGFuY2VPZih0aGlzLnRleHRTZWxlY3Rpb25zLCBcInRleHRTZWxlY3Rpb25zXCIsIEFycmF5KTtcbiAgICB9XG5cbn1cblxuIl19