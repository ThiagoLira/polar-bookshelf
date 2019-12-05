"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HTMLFormat_1 = require("./HTMLFormat");
const PDFFormat_1 = require("./PDFFormat");
class DocFormatFactory {
    static getInstance() {
        const polarDocFormat = DocFormatFactory.getPolarDocFormat();
        if (polarDocFormat === "html") {
            return new HTMLFormat_1.HTMLFormat();
        }
        else if (polarDocFormat === "pdf") {
            return new PDFFormat_1.PDFFormat();
        }
        else if (polarDocFormat == null) {
            return new PDFFormat_1.PDFFormat();
        }
        else {
            throw new Error("Unable to handle the given format: " + polarDocFormat);
        }
    }
    static getPolarDocFormat() {
        const polarDocFormatElement = document.querySelector("meta[name='polar-doc-format']");
        if (polarDocFormatElement) {
            const content = polarDocFormatElement.getAttribute("content");
            if (content) {
                return content;
            }
        }
        return "none";
    }
}
exports.DocFormatFactory = DocFormatFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jRm9ybWF0RmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkRvY0Zvcm1hdEZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2Q0FBd0M7QUFDeEMsMkNBQXNDO0FBT3RDLE1BQWEsZ0JBQWdCO0lBRWxCLE1BQU0sQ0FBQyxXQUFXO1FBRXJCLE1BQU0sY0FBYyxHQUFHLGdCQUFnQixDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFFNUQsSUFBSSxjQUFjLEtBQUssTUFBTSxFQUFFO1lBQzNCLE9BQU8sSUFBSSx1QkFBVSxFQUFFLENBQUM7U0FDM0I7YUFBTSxJQUFJLGNBQWMsS0FBSyxLQUFLLEVBQUU7WUFDakMsT0FBTyxJQUFJLHFCQUFTLEVBQUUsQ0FBQztTQUMxQjthQUFNLElBQUcsY0FBYyxJQUFJLElBQUksRUFBRTtZQUM5QixPQUFPLElBQUkscUJBQVMsRUFBRSxDQUFDO1NBQzFCO2FBQU07WUFDSCxNQUFNLElBQUksS0FBSyxDQUFDLHFDQUFxQyxHQUFHLGNBQWMsQ0FBQyxDQUFDO1NBQzNFO0lBRUwsQ0FBQztJQUVPLE1BQU0sQ0FBQyxpQkFBaUI7UUFFNUIsTUFBTSxxQkFBcUIsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLCtCQUErQixDQUFDLENBQUM7UUFFdEYsSUFBSSxxQkFBcUIsRUFBRTtZQUV2QixNQUFNLE9BQU8sR0FBRyxxQkFBcUIsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7WUFFOUQsSUFBSSxPQUFPLEVBQUU7Z0JBQ1QsT0FBTyxPQUFPLENBQUM7YUFDbEI7U0FFSjtRQUVELE9BQU8sTUFBTSxDQUFDO0lBRWxCLENBQUM7Q0FFSjtBQXBDRCw0Q0FvQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0hUTUxGb3JtYXR9IGZyb20gJy4vSFRNTEZvcm1hdCc7XG5pbXBvcnQge1BERkZvcm1hdH0gZnJvbSAnLi9QREZGb3JtYXQnO1xuaW1wb3J0IHtEb2NGb3JtYXR9IGZyb20gJy4vRG9jRm9ybWF0JztcblxuXG4vKipcbiAqIEdldCB0aGUgcHJvcGVyIGRvY0Zvcm1hdCB0byB3b3JrIHdpdGguXG4gKi9cbmV4cG9ydCBjbGFzcyBEb2NGb3JtYXRGYWN0b3J5IHtcblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogRG9jRm9ybWF0IHtcblxuICAgICAgICBjb25zdCBwb2xhckRvY0Zvcm1hdCA9IERvY0Zvcm1hdEZhY3RvcnkuZ2V0UG9sYXJEb2NGb3JtYXQoKTtcblxuICAgICAgICBpZiAocG9sYXJEb2NGb3JtYXQgPT09IFwiaHRtbFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEhUTUxGb3JtYXQoKTtcbiAgICAgICAgfSBlbHNlIGlmIChwb2xhckRvY0Zvcm1hdCA9PT0gXCJwZGZcIikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQREZGb3JtYXQoKTtcbiAgICAgICAgfSBlbHNlIGlmKHBvbGFyRG9jRm9ybWF0ID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUERGRm9ybWF0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gaGFuZGxlIHRoZSBnaXZlbiBmb3JtYXQ6IFwiICsgcG9sYXJEb2NGb3JtYXQpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBnZXRQb2xhckRvY0Zvcm1hdCgpOiBzdHJpbmcge1xuXG4gICAgICAgIGNvbnN0IHBvbGFyRG9jRm9ybWF0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtZXRhW25hbWU9J3BvbGFyLWRvYy1mb3JtYXQnXVwiKTtcblxuICAgICAgICBpZiAocG9sYXJEb2NGb3JtYXRFbGVtZW50KSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBwb2xhckRvY0Zvcm1hdEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiY29udGVudFwiKTtcblxuICAgICAgICAgICAgaWYgKGNvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29udGVudDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFwibm9uZVwiO1xuXG4gICAgfVxuXG59XG4iXX0=