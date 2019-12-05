"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class ImagePasteHandler {
    constructor(element, mutator) {
        this.element = element;
        this.mutator = mutator;
        if (!this.mutator) {
            this.mutator = function (val) {
                return val;
            };
        }
    }
    start() {
        this.element.addEventListener("paste", function (event) {
            return __awaiter(this, void 0, void 0, function* () {
                let imagePasted = yield ImagePasteHandler.handlePasteData(event);
                if (imagePasted.image) {
                    event.preventDefault();
                    let text = imagePasted.image;
                    text = this.mutator(text);
                    document.execCommand("insertHTML", false, text);
                    return true;
                }
                return true;
            });
        }.bind(this));
    }
    ;
    static handlePasteData(e) {
        let orgEvent = e;
        for (let i = 0; i < orgEvent.clipboardData.items.length; i++) {
            let clipboardDataItem = orgEvent.clipboardData.items[i];
            if (clipboardDataItem.kind === "file" && clipboardDataItem.type === "image/png") {
                let imageFile = clipboardDataItem.getAsFile();
                let fileReader = new FileReader();
                return new Promise(function (resolve, reject) {
                    fileReader.onloadend = function () {
                        resolve({ image: fileReader.result });
                    };
                    fileReader.readAsDataURL(imageFile);
                });
            }
        }
        return new Promise(function (resolve) {
            resolve({});
        });
    }
}
exports.ImagePasteHandler = ImagePasteHandler;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW1hZ2VQYXN0ZUhhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJJbWFnZVBhc3RlSGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLE1BQWEsaUJBQWlCO0lBSzFCLFlBQVksT0FBWSxFQUFFLE9BQVk7UUFFbEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFFdkIsSUFBSSxDQUFFLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxVQUFVLEdBQVE7Z0JBQzdCLE9BQU8sR0FBRyxDQUFDO1lBQ2YsQ0FBQyxDQUFDO1NBQ0w7SUFFTCxDQUFDO0lBRUQsS0FBSztRQUVELElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQWdCLEtBQVU7O2dCQUU3RCxJQUFJLFdBQVcsR0FBRyxNQUFNLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFFakUsSUFBSSxXQUFXLENBQUMsS0FBSyxFQUFFO29CQUduQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7b0JBS3ZCLElBQUksSUFBSSxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUM7b0JBQzdCLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUcxQixRQUFRLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBRWhELE9BQU8sSUFBSSxDQUFDO2lCQUVmO2dCQUdELE9BQU8sSUFBSSxDQUFDO1lBRWhCLENBQUM7U0FBQSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBRWxCLENBQUM7SUFBQSxDQUFDO0lBS0YsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFNO1FBR3pCLElBQUksUUFBUSxHQUFHLENBQUMsQ0FBQztRQUVqQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBRTFELElBQUksaUJBQWlCLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEQsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLEtBQUssTUFBTSxJQUFJLGlCQUFpQixDQUFDLElBQUksS0FBSyxXQUFXLEVBQUU7Z0JBRTdFLElBQUksU0FBUyxHQUFHLGlCQUFpQixDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUM5QyxJQUFJLFVBQVUsR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO2dCQUVsQyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQVMsT0FBTyxFQUFFLE1BQU07b0JBRXZDLFVBQVUsQ0FBQyxTQUFTLEdBQUc7d0JBQ25CLE9BQU8sQ0FBQyxFQUFDLEtBQUssRUFBRSxVQUFVLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQztvQkFDeEMsQ0FBQyxDQUFDO29CQUVGLFVBQVUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBRXhDLENBQUMsQ0FBQyxDQUFDO2FBRU47U0FFSjtRQUVELE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBVSxPQUFPO1lBQ2hDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNoQixDQUFDLENBQUMsQ0FBQTtJQUVOLENBQUM7Q0FFSjtBQXJGRCw4Q0FxRkM7QUFBQSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEltYWdlUGFzdGVIYW5kbGVyIHtcblxuICAgIHByaXZhdGUgZWxlbWVudDogYW55O1xuICAgIHByaXZhdGUgbXV0YXRvcjogYW55O1xuXG4gICAgY29uc3RydWN0b3IoZWxlbWVudDogYW55LCBtdXRhdG9yOiBhbnkpIHtcblxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLm11dGF0b3IgPSBtdXRhdG9yO1xuXG4gICAgICAgIGlmKCAhIHRoaXMubXV0YXRvcikge1xuICAgICAgICAgICAgdGhpcy5tdXRhdG9yID0gZnVuY3Rpb24gKHZhbDogYW55KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuXG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwicGFzdGVcIiwgYXN5bmMgZnVuY3Rpb24gKGV2ZW50OiBhbnkpIHtcblxuICAgICAgICAgICAgbGV0IGltYWdlUGFzdGVkID0gYXdhaXQgSW1hZ2VQYXN0ZUhhbmRsZXIuaGFuZGxlUGFzdGVEYXRhKGV2ZW50KTtcblxuICAgICAgICAgICAgaWYgKGltYWdlUGFzdGVkLmltYWdlKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBjYW5jZWwgcGFzdGUgc28gd2UgY2FuIGhhbmRsZSBpdCBvdXJzZWx2ZXMuXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgIC8vIGdldCB0ZXh0IHJlcHJlc2VudGF0aW9uIG9mIGNsaXBib2FyZFxuICAgICAgICAgICAgICAgIC8vbGV0IHRleHQgPSBlLmNsaXBib2FyZERhdGEuZ2V0RGF0YShcInRleHQvcGxhaW5cIik7XG5cbiAgICAgICAgICAgICAgICBsZXQgdGV4dCA9IGltYWdlUGFzdGVkLmltYWdlO1xuICAgICAgICAgICAgICAgIHRleHQgPSB0aGlzLm11dGF0b3IodGV4dCk7XG5cbiAgICAgICAgICAgICAgICAvLyBpbnNlcnQgdGV4dCBtYW51YWxseVxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiaW5zZXJ0SFRNTFwiLCBmYWxzZSwgdGV4dCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyB0aGlzIGlzIGp1c3QgdHJ1ZSBzbyB3ZSBjYW4gY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcblxuICAgICAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEhhbmRsZSBwYXN0ZWQgZGF0YSBhbmQgY29udmVydCB0byBhIGRhdGE6IFVSTCB3aGVuIG5lY2Vzc2FyeVxuICAgICAqL1xuICAgIHN0YXRpYyBoYW5kbGVQYXN0ZURhdGEoZTogYW55KTogUHJvbWlzZTxhbnk+IHtcblxuICAgICAgICAvLyBjYWxsIC5vcmlnaW5hbEV2ZW50IGlmIHJ1bm5pbmcgd2l0aCBqcXVlcnkuXG4gICAgICAgIGxldCBvcmdFdmVudCA9IGU7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcmdFdmVudC5jbGlwYm9hcmREYXRhLml0ZW1zLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgICAgIGxldCBjbGlwYm9hcmREYXRhSXRlbSA9IG9yZ0V2ZW50LmNsaXBib2FyZERhdGEuaXRlbXNbaV07XG4gICAgICAgICAgICBpZiAoY2xpcGJvYXJkRGF0YUl0ZW0ua2luZCA9PT0gXCJmaWxlXCIgJiYgY2xpcGJvYXJkRGF0YUl0ZW0udHlwZSA9PT0gXCJpbWFnZS9wbmdcIikge1xuXG4gICAgICAgICAgICAgICAgbGV0IGltYWdlRmlsZSA9IGNsaXBib2FyZERhdGFJdGVtLmdldEFzRmlsZSgpO1xuICAgICAgICAgICAgICAgIGxldCBmaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcblxuICAgICAgICAgICAgICAgICAgICBmaWxlUmVhZGVyLm9ubG9hZGVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoe2ltYWdlOiBmaWxlUmVhZGVyLnJlc3VsdH0pO1xuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIGZpbGVSZWFkZXIucmVhZEFzRGF0YVVSTChpbWFnZUZpbGUpO1xuXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgICByZXNvbHZlKHt9KTtcbiAgICAgICAgfSlcblxuICAgIH1cblxufTtcbiJdfQ==