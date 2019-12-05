"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const split_js_1 = __importDefault(require("split.js"));
const WindowEvents_1 = require("../../util/dom/WindowEvents");
const INITIAL_SIZES = [68, 32];
class Splitter {
    constructor(left, right, sidebarSide = 'right') {
        this.left = left;
        this.right = right;
        this.sidebarSide = sidebarSide;
        this.split = split_js_1.default([this.left, this.right], {
            sizes: INITIAL_SIZES,
            minSize: 0,
            gutterSize: 7,
            onDrag: () => this.onDrag()
        });
        this.sizes = INITIAL_SIZES;
    }
    toggle() {
        const collapsed = this.isCollapsed();
        if (collapsed) {
            this.expand();
            return 'expanded';
        }
        else {
            this.collapse();
            return 'collapsed';
        }
    }
    collapse() {
        this.sizes = this.split.getSizes();
        if (this.sidebarSide === 'left') {
            this.split.collapse(0);
        }
        if (this.sidebarSide === 'right') {
            this.split.collapse(1);
        }
        this.forceResize();
    }
    isCollapsed() {
        const size = this.split.getSizes()[1];
        const floorSize = Math.floor(size);
        return floorSize <= 0;
    }
    expand() {
        this.split.setSizes(INITIAL_SIZES);
        this.forceResize();
    }
    forceResize() {
        WindowEvents_1.WindowEvents.sendResizeEvent();
    }
    onDrag() {
        this.forceResize();
    }
}
exports.Splitter = Splitter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3BsaXR0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJTcGxpdHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHdEQUE2QjtBQUM3Qiw4REFBeUQ7QUFFekQsTUFBTSxhQUFhLEdBQWEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFNekMsTUFBYSxRQUFRO0lBVWpCLFlBQVksSUFBK0IsRUFDL0IsS0FBZ0MsRUFDaEMsY0FBb0IsT0FBTztRQUVuQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUUvQixJQUFJLENBQUMsS0FBSyxHQUFHLGtCQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN4QyxLQUFLLEVBQUUsYUFBYTtZQUNwQixPQUFPLEVBQUUsQ0FBQztZQUNWLFVBQVUsRUFBRSxDQUFDO1lBR2IsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7U0FDOUIsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLEtBQUssR0FBRyxhQUFhLENBQUM7SUFFL0IsQ0FBQztJQUtNLE1BQU07UUFFVCxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFckMsSUFBSSxTQUFTLEVBQUU7WUFDWCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDZCxPQUFPLFVBQVUsQ0FBQztTQUNyQjthQUFNO1lBQ0gsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ2hCLE9BQU8sV0FBVyxDQUFDO1NBQ3RCO0lBRUwsQ0FBQztJQUVNLFFBQVE7UUFHWCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFbkMsSUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLE1BQU0sRUFBRTtZQUM3QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMxQjtRQUVELElBQUksSUFBSSxDQUFDLFdBQVcsS0FBSyxPQUFPLEVBQUU7WUFDOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDMUI7UUFFRCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFFdkIsQ0FBQztJQUVNLFdBQVc7UUFFZCxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFbkMsT0FBTyxTQUFTLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFTSxNQUFNO1FBQ1QsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFTyxXQUFXO1FBQ2YsMkJBQVksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBRU8sTUFBTTtRQUNWLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDO0NBRUo7QUF0RkQsNEJBc0ZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNwbGl0IGZyb20gJ3NwbGl0LmpzJztcbmltcG9ydCB7V2luZG93RXZlbnRzfSBmcm9tICcuLi8uLi91dGlsL2RvbS9XaW5kb3dFdmVudHMnO1xuXG5jb25zdCBJTklUSUFMX1NJWkVTOiBudW1iZXJbXSA9IFs2OCwgMzJdO1xuXG4vKipcbiAqIEEgc2ltcGxlIHNwbGl0dGVyIHRoYXQgdGFrZXMgdG8gZWxlbWVudHMgb3Igc2VsZWN0b3JzIGFuZCBtYWtlcyB0aGVtIHZlcnRpY2FsXG4gKiBiYXJzIChvbmUgbGVmdCwgYW5kIG9uZSByaWdodCkuXG4gKi9cbmV4cG9ydCBjbGFzcyBTcGxpdHRlciB7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IGxlZnQ6IENTU1NlbGVjdG9yIHwgSFRNTEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSByZWFkb25seSByaWdodDogQ1NTU2VsZWN0b3IgfCBIVE1MRWxlbWVudDtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgc3BsaXQ6IFNwbGl0Lkluc3RhbmNlO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgc2lkZWJhclNpZGU6IFNpZGU7XG5cbiAgICBwcml2YXRlIHNpemVzOiBudW1iZXJbXTtcblxuICAgIGNvbnN0cnVjdG9yKGxlZnQ6IENTU1NlbGVjdG9yIHwgSFRNTEVsZW1lbnQsXG4gICAgICAgICAgICAgICAgcmlnaHQ6IENTU1NlbGVjdG9yIHwgSFRNTEVsZW1lbnQsXG4gICAgICAgICAgICAgICAgc2lkZWJhclNpZGU6IFNpZGUgPSAncmlnaHQnKSB7XG5cbiAgICAgICAgdGhpcy5sZWZ0ID0gbGVmdDtcbiAgICAgICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xuICAgICAgICB0aGlzLnNpZGViYXJTaWRlID0gc2lkZWJhclNpZGU7XG5cbiAgICAgICAgdGhpcy5zcGxpdCA9IFNwbGl0KFt0aGlzLmxlZnQsIHRoaXMucmlnaHRdLCB7XG4gICAgICAgICAgICBzaXplczogSU5JVElBTF9TSVpFUyxcbiAgICAgICAgICAgIG1pblNpemU6IDAsXG4gICAgICAgICAgICBndXR0ZXJTaXplOiA3LFxuICAgICAgICAgICAgLy8gVE9ETzogdGhpcyBwcm9iYWJseSBzaG91bGRuJ3QgYmUgaGVyZSBhcyB3ZSBhZGRlZCBpdCBmb3IgcmVzaXppbmdcbiAgICAgICAgICAgIC8vIGJ1dCB0aGlzIGlzIG9ubHkgbmVlZGVkIGJ5IHRoZSBhbm5vdGF0aW9uIHNpZGViYXIgZm9yIG5vdy4uXG4gICAgICAgICAgICBvbkRyYWc6ICgpID0+IHRoaXMub25EcmFnKClcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zaXplcyA9IElOSVRJQUxfU0laRVM7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUb2dnbGUgdGhlIHNwbGl0dGVyIGFuZCByZXR1cm4gdHJ1ZSBpZiBpdCdzIGV4cGFuZGVkIGFuZCBmYWxzZSBpZiBpdCdzXG4gICAgICovXG4gICAgcHVibGljIHRvZ2dsZSgpOiBTcGxpdHRlclN0YXRlIHtcblxuICAgICAgICBjb25zdCBjb2xsYXBzZWQgPSB0aGlzLmlzQ29sbGFwc2VkKCk7XG5cbiAgICAgICAgaWYgKGNvbGxhcHNlZCkge1xuICAgICAgICAgICAgdGhpcy5leHBhbmQoKTtcbiAgICAgICAgICAgIHJldHVybiAnZXhwYW5kZWQnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZSgpO1xuICAgICAgICAgICAgcmV0dXJuICdjb2xsYXBzZWQnO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgY29sbGFwc2UoKSB7XG5cbiAgICAgICAgLy8gdXBkYXRlIHRoZSBjdXJyZW50IHNpemVzIGJlZm9yZSB3ZSBjb2xsYXBzZS5cbiAgICAgICAgdGhpcy5zaXplcyA9IHRoaXMuc3BsaXQuZ2V0U2l6ZXMoKTtcblxuICAgICAgICBpZiAodGhpcy5zaWRlYmFyU2lkZSA9PT0gJ2xlZnQnKSB7XG4gICAgICAgICAgICB0aGlzLnNwbGl0LmNvbGxhcHNlKDApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc2lkZWJhclNpZGUgPT09ICdyaWdodCcpIHtcbiAgICAgICAgICAgIHRoaXMuc3BsaXQuY29sbGFwc2UoMSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmZvcmNlUmVzaXplKCk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgaXNDb2xsYXBzZWQoKSB7XG5cbiAgICAgICAgY29uc3Qgc2l6ZSA9IHRoaXMuc3BsaXQuZ2V0U2l6ZXMoKVsxXTtcbiAgICAgICAgY29uc3QgZmxvb3JTaXplID0gTWF0aC5mbG9vcihzaXplKTtcblxuICAgICAgICByZXR1cm4gZmxvb3JTaXplIDw9IDA7XG4gICAgfVxuXG4gICAgcHVibGljIGV4cGFuZCgpIHtcbiAgICAgICAgdGhpcy5zcGxpdC5zZXRTaXplcyhJTklUSUFMX1NJWkVTKTtcbiAgICAgICAgdGhpcy5mb3JjZVJlc2l6ZSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZm9yY2VSZXNpemUoKSB7XG4gICAgICAgIFdpbmRvd0V2ZW50cy5zZW5kUmVzaXplRXZlbnQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uRHJhZygpIHtcbiAgICAgICAgdGhpcy5mb3JjZVJlc2l6ZSgpO1xuICAgIH1cblxufVxuXG5leHBvcnQgdHlwZSBTcGxpdHRlclN0YXRlID0gJ2V4cGFuZGVkJyB8ICdjb2xsYXBzZWQnO1xuXG5leHBvcnQgdHlwZSBTaWRlID0gJ2xlZnQnIHwgJ3JpZ2h0JztcblxudHlwZSBDU1NTZWxlY3RvciA9IHN0cmluZztcbiJdfQ==