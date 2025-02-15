"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Preconditions_1 = require("polar-shared/src/Preconditions");
class Either {
    constructor(left, right) {
        this.left = left;
        this.right = right;
        this.hasLeft = Preconditions_1.isPresent(left);
        this.hasRight = Preconditions_1.isPresent(right);
    }
    handle(left, right) {
        if (this.hasLeft) {
            left(this.left);
        }
        else {
            right(this.right);
        }
    }
    convertLeftToRight(converter) {
        if (this.hasRight) {
            return this.right;
        }
        return converter(this.left);
    }
    convertRightToLeft(converter) {
        if (this.hasLeft) {
            return this.left;
        }
        return converter(this.right);
    }
    static ofLeft(value) {
        if (value instanceof Either) {
            return value;
        }
        return new Either(value, undefined);
    }
    static ofRight(value) {
        if (value instanceof Either) {
            return value;
        }
        return new Either(undefined, value);
    }
}
exports.Either = Either;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRWl0aGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRWl0aGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsa0VBQXlEO0FBZXpELE1BQWEsTUFBTTtJQUtmLFlBQW9DLElBQU8sRUFDUCxLQUFRO1FBRFIsU0FBSSxHQUFKLElBQUksQ0FBRztRQUNQLFVBQUssR0FBTCxLQUFLLENBQUc7UUFFeEMsSUFBSSxDQUFDLE9BQU8sR0FBRyx5QkFBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxRQUFRLEdBQUcseUJBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUVyQyxDQUFDO0lBS00sTUFBTSxDQUFDLElBQXVCLEVBQ3ZCLEtBQXlCO1FBRW5DLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbkI7YUFBTTtZQUNILEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDckI7SUFFTCxDQUFDO0lBRU0sa0JBQWtCLENBQUMsU0FBeUI7UUFFL0MsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2YsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ3JCO1FBRUQsT0FBTyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRWhDLENBQUM7SUFFTSxrQkFBa0IsQ0FBQyxTQUEwQjtRQUVoRCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDZCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDcEI7UUFFRCxPQUFPLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFakMsQ0FBQztJQUVNLE1BQU0sQ0FBQyxNQUFNLENBQU8sS0FBdUI7UUFFOUMsSUFBSSxLQUFLLFlBQVksTUFBTSxFQUFFO1lBQ3pCLE9BQU8sS0FBSyxDQUFDO1NBQ2hCO1FBRUQsT0FBTyxJQUFJLE1BQU0sQ0FBQyxLQUFLLEVBQUUsU0FBVSxDQUFDLENBQUM7SUFFekMsQ0FBQztJQUVNLE1BQU0sQ0FBQyxPQUFPLENBQU8sS0FBd0I7UUFFaEQsSUFBSSxLQUFLLFlBQVksTUFBTSxFQUFFO1lBQ3pCLE9BQU8sS0FBSyxDQUFDO1NBQ2hCO1FBRUQsT0FBTyxJQUFJLE1BQU0sQ0FBQyxTQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFFekMsQ0FBQztDQUVKO0FBbkVELHdCQW1FQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aXNQcmVzZW50fSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL1ByZWNvbmRpdGlvbnMnO1xuXG4vKipcbiAqIEEgc2ltcGxlIGVpdGhlciBpbXBsZW1lbnRhdGlvbiBzaW1pbGFyIHRvIE9wdGlvbmFsIHRoYXQgd29ya3MgZm9yIGVpdGhlclxuICogbGVmdCBvciByaWdodCBidXQgcmVxdWlyZXMgZXhhY3RseSBvbmUgb3B0aW9uLlxuICpcbiAqIEluY2x1ZGVzIG1hcCBmdW5jdGlvbnMgdG8gaGFuZGxlIGNvbnN1bWluZyBib3RoIGF0IG9uY2UgYW5kIGEgbWFwTGVmdCBhbmRcbiAqIG1hcFJpZ2h0IGZ1bmN0aW9ucyB0byBlaXRoZXIgdHlwZS5cbiAqXG4gKiBUaGlzIGlzIHVzZWZ1bCBpbiBtb3N0IHNpdHVhdGlvbnMgYXMgdmFsdWVzIGNhbiBiZSBpbnRlcmZhY2VzIHdoaWNoIGRvIG5vdFxuICogd29yayB3aXRoIGluc3RhbmNlb2YgYW5kIGNvdWxkIGJlIGRlc2VyaWFsaXplZCBqc29uIG9iamVjdHMgd2hpY2ggZG9uJ3Qgd29ya1xuICogd2l0aCBpbnN0YW5jZW9mIGVpdGhlci5cbiAqXG4gKiBFc3NlbnRpYWxseSBpbnN0YW5jZW9mIGlzbid0IHJlYWxseSByZWxpYWJsZS5cbiAqL1xuZXhwb3J0IGNsYXNzIEVpdGhlcjxMLCBSPiB7XG5cbiAgICBwdWJsaWMgcmVhZG9ubHkgaGFzTGVmdDogYm9vbGVhbjtcbiAgICBwdWJsaWMgcmVhZG9ubHkgaGFzUmlnaHQ6IGJvb2xlYW47XG5cbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKHB1YmxpYyByZWFkb25seSBsZWZ0OiBMLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHVibGljIHJlYWRvbmx5IHJpZ2h0OiBSKSB7XG5cbiAgICAgICAgdGhpcy5oYXNMZWZ0ID0gaXNQcmVzZW50KGxlZnQpO1xuICAgICAgICB0aGlzLmhhc1JpZ2h0ID0gaXNQcmVzZW50KHJpZ2h0KTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZSBlaXRoZXIgdGhlIGxlZnQgb3IgdGhlIHJpZ2h0LlxuICAgICAqL1xuICAgIHB1YmxpYyBoYW5kbGUobGVmdDogKGxlZnQ6IEwpID0+IHZvaWQsXG4gICAgICAgICAgICAgICAgICByaWdodDogKHJpZ2h0OiBSKSA9PiB2b2lkKSB7XG5cbiAgICAgICAgaWYgKHRoaXMuaGFzTGVmdCkge1xuICAgICAgICAgICAgbGVmdCh0aGlzLmxlZnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmlnaHQodGhpcy5yaWdodCk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHB1YmxpYyBjb252ZXJ0TGVmdFRvUmlnaHQoY29udmVydGVyOiAobGVmdDogTCkgPT4gUik6IFIge1xuXG4gICAgICAgIGlmICh0aGlzLmhhc1JpZ2h0KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yaWdodDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb252ZXJ0ZXIodGhpcy5sZWZ0KTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBjb252ZXJ0UmlnaHRUb0xlZnQoY29udmVydGVyOiAocmlnaHQ6IFIpID0+IEwpOiBMIHtcblxuICAgICAgICBpZiAodGhpcy5oYXNMZWZ0KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sZWZ0O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbnZlcnRlcih0aGlzLnJpZ2h0KTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgb2ZMZWZ0PEwsIFI+KHZhbHVlOiBMZWZ0RWl0aGVyPEwsIFI+KTogRWl0aGVyPEwsIFI+IHtcblxuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBFaXRoZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgRWl0aGVyKHZhbHVlLCB1bmRlZmluZWQhKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgb2ZSaWdodDxMLCBSPih2YWx1ZTogUmlnaHRFaXRoZXI8TCwgUj4pOiBFaXRoZXI8TCwgUj4ge1xuXG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEVpdGhlcikge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBFaXRoZXIodW5kZWZpbmVkISwgdmFsdWUpO1xuXG4gICAgfVxuXG59XG5cbi8qKlxuICogQW4gRWl0aGVyIGJ1dCB3aXRoIGEgcHJpbWFyeSB0eXBlIG9mIEwgc28gd2UgY2FuIGp1c3QgdXNlIGFuIEwgbGl0ZXJhbCBpZiB3ZVxuICogd2FudCBhbmQgaGF2ZSBhIHNpbXBsZXIgc3ludGF4LlxuICovXG5leHBvcnQgdHlwZSBMZWZ0RWl0aGVyPEwsIFI+ID0gTCB8IEVpdGhlcjxMLCBSPjtcblxuZXhwb3J0IHR5cGUgUmlnaHRFaXRoZXI8TCwgUj4gPSBSIHwgRWl0aGVyPEwsIFI+O1xuIl19