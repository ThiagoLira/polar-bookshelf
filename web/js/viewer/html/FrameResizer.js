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
const Optional_1 = require("polar-shared/src/util/ts/Optional");
const Styles_1 = require("../../util/Styles");
const Logger_1 = require("polar-shared/src/logger/Logger");
const Preconditions_1 = require("polar-shared/src/Preconditions");
const Functions_1 = require("polar-shared/src/util/Functions");
const Documents_1 = require("./Documents");
const log = Logger_1.Logger.create();
class FrameResizer {
    constructor(parent, host) {
        this.parent = Preconditions_1.Preconditions.assertPresent(parent);
        this.host = Preconditions_1.Preconditions.assertPresent(host);
        this.height = undefined;
    }
    resize(force = false, newHeight) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!newHeight) {
                const newHeightAsOptional = yield this.getDocumentHeight();
                if (!newHeightAsOptional.isPresent()) {
                    return this.height;
                }
                newHeight = newHeightAsOptional.get();
            }
            const height = Styles_1.Styles.parsePX(Optional_1.Optional.of(this.host.style.height)
                .filter((current) => current !== null)
                .filter(current => current !== "")
                .getOrElse("0px"));
            const delta = Math.abs(newHeight - height);
            const deltaPerc = 100 * (delta / height);
            if (!force && deltaPerc < 5) {
                return this.height;
            }
            if (force || height !== newHeight) {
                const heightElement = this.host.parentElement;
                this.host.style.minHeight = `${newHeight}px`;
                heightElement.style.minHeight = `${newHeight}px`;
                for (const dataHeightElement of [heightElement, this.host]) {
                    dataHeightElement.setAttribute('data-height', `${newHeight}`);
                    if (dataHeightElement.getAttribute('data-original-height') === null) {
                        dataHeightElement.setAttribute('data-original-height', `${newHeight}`);
                    }
                }
                this.height = newHeight;
                return this.height;
            }
            return this.height;
        });
    }
    getDocumentHeight() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.host instanceof HTMLIFrameElement) {
                return this.getDocumentHeightForIFrame(this.host);
            }
            else {
                return this.getDocumentHeightForWebview(this.host);
            }
        });
    }
    getDocumentHeightForIFrame(iframe) {
        return __awaiter(this, void 0, void 0, function* () {
            return Optional_1.Optional.of(Documents_1.Documents.height(iframe.contentDocument));
        });
    }
    getDocumentHeightForWebview(webview) {
        return __awaiter(this, void 0, void 0, function* () {
            const webContents = webview.getWebContents();
            const script = Functions_1.Functions.functionToScript(Documents_1.Documents.height);
            const height = yield webContents.executeJavaScript(script);
            return Optional_1.Optional.of(height);
        });
    }
}
exports.FrameResizer = FrameResizer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRnJhbWVSZXNpemVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRnJhbWVSZXNpemVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBQzNELDhDQUF5QztBQUN6QywyREFBc0Q7QUFDdEQsa0VBQTZEO0FBQzdELCtEQUEwRDtBQUMxRCwyQ0FBc0M7QUFFdEMsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBUTVCLE1BQWEsWUFBWTtJQWFyQixZQUFZLE1BQW1CLEVBQUUsSUFBNkM7UUFFMUUsSUFBSSxDQUFDLE1BQU0sR0FBRyw2QkFBYSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsSUFBSSxHQUFHLDZCQUFhLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRzlDLElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO0lBRTVCLENBQUM7SUFTWSxNQUFNLENBQUMsUUFBaUIsS0FBSyxFQUFFLFNBQWtCOztZQWUxRCxJQUFJLENBQUUsU0FBUyxFQUFFO2dCQUViLE1BQU0sbUJBQW1CLEdBQUcsTUFBTSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztnQkFFM0QsSUFBSSxDQUFFLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxFQUFFO29CQUNuQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7aUJBQ3RCO2dCQUVELFNBQVMsR0FBRyxtQkFBbUIsQ0FBQyxHQUFHLEVBQUUsQ0FBQzthQUV6QztZQUVELE1BQU0sTUFBTSxHQUFHLGVBQU0sQ0FBQyxPQUFPLENBQUMsbUJBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO2lCQUNoQyxNQUFNLENBQUUsQ0FBQyxPQUFZLEVBQUUsRUFBRSxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUM7aUJBQzNDLE1BQU0sQ0FBRSxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sS0FBSyxFQUFFLENBQUM7aUJBQ2xDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBRW5ELE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxDQUFDO1lBRzNDLE1BQU0sU0FBUyxHQUFHLEdBQUcsR0FBRyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsQ0FBQztZQUV6QyxJQUFJLENBQUUsS0FBSyxJQUFJLFNBQVMsR0FBRyxDQUFDLEVBQUU7Z0JBQzFCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQzthQUN0QjtZQUdELElBQUksS0FBSyxJQUFJLE1BQU0sS0FBSyxTQUFTLEVBQUU7Z0JBRS9CLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYyxDQUFDO2dCQUkvQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsR0FBRyxTQUFTLElBQUksQ0FBQztnQkFDN0MsYUFBYSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsR0FBRyxTQUFTLElBQUksQ0FBQztnQkFFakQsS0FBSyxNQUFNLGlCQUFpQixJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtvQkFDeEQsaUJBQWlCLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxHQUFHLFNBQVMsRUFBRSxDQUFDLENBQUM7b0JBRTlELElBQUksaUJBQWlCLENBQUMsWUFBWSxDQUFDLHNCQUFzQixDQUFDLEtBQUssSUFBSSxFQUFFO3dCQUNqRSxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsc0JBQXNCLEVBQUUsR0FBRyxTQUFTLEVBQUUsQ0FBQyxDQUFDO3FCQUMxRTtpQkFFSjtnQkFFRCxJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztnQkFFeEIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO2FBRXRCO1lBRUQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBRXZCLENBQUM7S0FBQTtJQU9hLGlCQUFpQjs7WUFFM0IsSUFBSSxJQUFJLENBQUMsSUFBSSxZQUFZLGlCQUFpQixFQUFFO2dCQUN4QyxPQUFPLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDckQ7aUJBQU07Z0JBQ0gsT0FBTyxJQUFJLENBQUMsMkJBQTJCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3REO1FBRUwsQ0FBQztLQUFBO0lBRWEsMEJBQTBCLENBQUMsTUFBeUI7O1lBQzlELE9BQU8sbUJBQVEsQ0FBQyxFQUFFLENBQUMscUJBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7UUFFakUsQ0FBQztLQUFBO0lBRWEsMkJBQTJCLENBQUMsT0FBNEI7O1lBRWxFLE1BQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUU3QyxNQUFNLE1BQU0sR0FBRyxxQkFBUyxDQUFDLGdCQUFnQixDQUFDLHFCQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDNUQsTUFBTSxNQUFNLEdBQXVCLE1BQU0sV0FBVyxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRS9FLE9BQU8sbUJBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFL0IsQ0FBQztLQUFBO0NBRUo7QUFuSUQsb0NBbUlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPcHRpb25hbH0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL3RzL09wdGlvbmFsJztcbmltcG9ydCB7U3R5bGVzfSBmcm9tICcuLi8uLi91dGlsL1N0eWxlcyc7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7UHJlY29uZGl0aW9uc30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9QcmVjb25kaXRpb25zJztcbmltcG9ydCB7RnVuY3Rpb25zfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvRnVuY3Rpb25zJztcbmltcG9ydCB7RG9jdW1lbnRzfSBmcm9tICcuL0RvY3VtZW50cyc7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuLyoqXG4gKlxuICogUmVzaXplIHRoZSBpZnJhbWUgYmFzZSBvbiB0aGUgaW50ZXJuYWwgY29udGVudCBkb2N1bWVudC4gVGhpcyB3YXkgdGhlIGlmcmFtZVxuICogc2l6ZSBpbiB0aGUgaG9zdCB3aW5kb3cgaGFzIHRoZSBzaXplIG9mIHRoZSBjb250ZW50IGFuZCB0aGVyZSBpcyBubyBzY3JvbGxcbiAqIGJhciBwcmVzZW50LlxuICovXG5leHBvcnQgY2xhc3MgRnJhbWVSZXNpemVyIHtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgcGFyZW50OiBIVE1MRWxlbWVudDtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGhvc3Q6IEhUTUxJRnJhbWVFbGVtZW50IHwgRWxlY3Ryb24uV2Vidmlld1RhZztcblxuICAgIHByaXZhdGUgaGVpZ2h0OiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cbiAgICAvLyBUT0RPOlxuICAgIC8vXG4gICAgLy8gdGhpcyBtYXkgYmUgYSBiZXR0ZXIgd2F5IHRvIGRvIHRoZSByZXNpemUgYW5pbWF0aW9uIGZyYW1lcy5cbiAgICAvL1xuICAgIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzE4MzUyMTkvaXMtdGhlcmUtYW4tZXZlbnQtdGhhdC1maXJlcy1vbi1jaGFuZ2VzLXRvLXNjcm9sbGhlaWdodC1vci1zY3JvbGx3aWR0aC1pbi1qcXVlcnlcblxuICAgIGNvbnN0cnVjdG9yKHBhcmVudDogSFRNTEVsZW1lbnQsIGhvc3Q6IEhUTUxJRnJhbWVFbGVtZW50IHwgRWxlY3Ryb24uV2Vidmlld1RhZykge1xuXG4gICAgICAgIHRoaXMucGFyZW50ID0gUHJlY29uZGl0aW9ucy5hc3NlcnRQcmVzZW50KHBhcmVudCk7XG4gICAgICAgIHRoaXMuaG9zdCA9IFByZWNvbmRpdGlvbnMuYXNzZXJ0UHJlc2VudChob3N0KTtcblxuICAgICAgICAvLyB0aGUgY3VycmVudCBoZWlnaHRcbiAgICAgICAgdGhpcy5oZWlnaHQgPSB1bmRlZmluZWQ7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtIHRoZSByZXNpemUgbm93LlxuICAgICAqXG4gICAgICogQHBhcmFtIGZvcmNlIFRydWUgd2hlbiB3ZSBzaG91bGQgZm9yY2UuICBUaGlzIHdheSwgaWYgd2UncmUgZG9pbmcgYW55XG4gICAgICogc29ydCBvZiBjYWNoaW5nIG9yIHRocm90dGxpbmcgb2YgcmVzaXplLCB3ZSBjYW4ganVzdCBmb3JjZSBpdCBvbmUgbGFzdFxuICAgICAqIHRpbWUuXG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIHJlc2l6ZShmb3JjZTogYm9vbGVhbiA9IGZhbHNlLCBuZXdIZWlnaHQ/OiBudW1iZXIpOiBQcm9taXNlPG51bWJlciB8IHVuZGVmaW5lZD4ge1xuXG4gICAgICAgIC8vIFRPRE86IGFjY2lkZW50YWwgaG9yaXpvbnRhbCBvdmVyZmxvdy4uLlxuICAgICAgICAvL1xuICAgICAgICAvLyAtIEkgY2FuIHNlZSBpZiB0aGUgQ1NTIGlzIGRvbmUgcmVuZGVyaW5nLi4gdGhlcmUgbWlnaHQgc3RpbGwgYmUgQ1NTXG4gICAgICAgIC8vICAgdHJhbnNpdGlvbnMgYW5kIG90aGVyIGlzc3Vlcy5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gLSBJIGNvdWxkIHNlZSBpZiB0aGUgQ1NTIGlzIGxvYWRlZCwgYW5kIHRoYXQgbm8gbW9yZSBpbWFnZXMgb3Igb3RoZXJcbiAgICAgICAgLy8gICByZXNvdXJjZXMgaGF2ZSBjaGFuZ2VkIGFuZCB0aGVuIGZpeCB0aGUgcGFnZSB0byB0aGF0IGRpbWVuc2lvbi5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gLSBJIGNvdWxkIGJhY2sgb2ZmIHNpZ25pZmljYW50bHkgaW4gZHVyYXRpb24gaWYgb25seSBhIHNtYWxsXG4gICAgICAgIC8vIHBlcmNlbnRhZ2Ugb2YgdGhlIHBhZ2UgaGVpZ2h0IGhhcyBjaGFuZ2VkLiAgRm9yIGV4YW1wbGUsIGlmIHdlJ3JlXG4gICAgICAgIC8vIGxlc3MgdGhhbiAxJSBJIGNhbiBqdXN0IHdhaXQgdW50aWwgdGhlIGZpbmFsIHJlbmRlcmluZy4gIFdlIGFyZVxuICAgICAgICAvLyBvZnRlbiBvbmx5IG9mZiBieSBhIGZldyBweC5cblxuICAgICAgICBpZiAoISBuZXdIZWlnaHQpIHtcblxuICAgICAgICAgICAgY29uc3QgbmV3SGVpZ2h0QXNPcHRpb25hbCA9IGF3YWl0IHRoaXMuZ2V0RG9jdW1lbnRIZWlnaHQoKTtcblxuICAgICAgICAgICAgaWYgKCEgbmV3SGVpZ2h0QXNPcHRpb25hbC5pc1ByZXNlbnQoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmhlaWdodDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbmV3SGVpZ2h0ID0gbmV3SGVpZ2h0QXNPcHRpb25hbC5nZXQoKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gU3R5bGVzLnBhcnNlUFgoT3B0aW9uYWwub2YodGhpcy5ob3N0LnN0eWxlLmhlaWdodClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKCAoY3VycmVudDogYW55KSA9PiBjdXJyZW50ICE9PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoIGN1cnJlbnQgPT4gY3VycmVudCAhPT0gXCJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZ2V0T3JFbHNlKFwiMHB4XCIpKTtcblxuICAgICAgICBjb25zdCBkZWx0YSA9IE1hdGguYWJzKG5ld0hlaWdodCAtIGhlaWdodCk7XG5cbiAgICAgICAgLy8gZGVsdGEgYXMgYSBwZXJjZW50YWdlIG9mIHRvdGFsIGhlaWdodC5cbiAgICAgICAgY29uc3QgZGVsdGFQZXJjID0gMTAwICogKGRlbHRhIC8gaGVpZ2h0KTtcblxuICAgICAgICBpZiAoISBmb3JjZSAmJiBkZWx0YVBlcmMgPCA1KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oZWlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB3ZSBiYXNpY2FsbHkga2VlcCBwb2xsaW5nLlxuICAgICAgICBpZiAoZm9yY2UgfHwgaGVpZ2h0ICE9PSBuZXdIZWlnaHQpIHtcblxuICAgICAgICAgICAgY29uc3QgaGVpZ2h0RWxlbWVudCA9IHRoaXMuaG9zdC5wYXJlbnRFbGVtZW50ITtcblxuICAgICAgICAgICAgLy8gbG9nLmluZm8oYFNldHRpbmcgbmV3IGhlaWdodCB0bzogJHtuZXdIZWlnaHR9IHZzIHByZXZpb3VzXG4gICAgICAgICAgICAvLyAke3RoaXMuaWZyYW1lLnN0eWxlLmhlaWdodH1gKTtcbiAgICAgICAgICAgIHRoaXMuaG9zdC5zdHlsZS5taW5IZWlnaHQgPSBgJHtuZXdIZWlnaHR9cHhgO1xuICAgICAgICAgICAgaGVpZ2h0RWxlbWVudC5zdHlsZS5taW5IZWlnaHQgPSBgJHtuZXdIZWlnaHR9cHhgO1xuXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGRhdGFIZWlnaHRFbGVtZW50IG9mIFtoZWlnaHRFbGVtZW50LCB0aGlzLmhvc3RdKSB7XG4gICAgICAgICAgICAgICAgZGF0YUhlaWdodEVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWhlaWdodCcsIGAke25ld0hlaWdodH1gKTtcblxuICAgICAgICAgICAgICAgIGlmIChkYXRhSGVpZ2h0RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3JpZ2luYWwtaGVpZ2h0JykgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YUhlaWdodEVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLW9yaWdpbmFsLWhlaWdodCcsIGAke25ld0hlaWdodH1gKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSBuZXdIZWlnaHQ7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhlaWdodDtcblxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaGVpZ2h0O1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBpbnRlcm5hbCBoZWlnaHQgb2YgdGhlIGdpdmVuIGRvY3VtZW50IE9SIHJldHVybiB1bmRlZmluZWQgaWZcbiAgICAgKiB3ZSBkb24ndCBoYXZlIGl0IHlldC4gV2UgbWlnaHQgbm90IGhhdmUgaXQgaWYgdGhlIGRvY3VtZW50IGlzIHN0aWxsXG4gICAgICogbG9hZGluZy5cbiAgICAgKi9cbiAgICBwcml2YXRlIGFzeW5jIGdldERvY3VtZW50SGVpZ2h0KCk6IFByb21pc2U8T3B0aW9uYWw8bnVtYmVyPj4ge1xuXG4gICAgICAgIGlmICh0aGlzLmhvc3QgaW5zdGFuY2VvZiBIVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RG9jdW1lbnRIZWlnaHRGb3JJRnJhbWUodGhpcy5ob3N0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldERvY3VtZW50SGVpZ2h0Rm9yV2Vidmlldyh0aGlzLmhvc3QpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGdldERvY3VtZW50SGVpZ2h0Rm9ySUZyYW1lKGlmcmFtZTogSFRNTElGcmFtZUVsZW1lbnQpOiBQcm9taXNlPE9wdGlvbmFsPG51bWJlcj4+IHtcbiAgICAgICAgcmV0dXJuIE9wdGlvbmFsLm9mKERvY3VtZW50cy5oZWlnaHQoaWZyYW1lLmNvbnRlbnREb2N1bWVudCkpO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBnZXREb2N1bWVudEhlaWdodEZvcldlYnZpZXcod2VidmlldzogRWxlY3Ryb24uV2Vidmlld1RhZyk6IFByb21pc2U8T3B0aW9uYWw8bnVtYmVyPj4ge1xuXG4gICAgICAgIGNvbnN0IHdlYkNvbnRlbnRzID0gd2Vidmlldy5nZXRXZWJDb250ZW50cygpO1xuXG4gICAgICAgIGNvbnN0IHNjcmlwdCA9IEZ1bmN0aW9ucy5mdW5jdGlvblRvU2NyaXB0KERvY3VtZW50cy5oZWlnaHQpO1xuICAgICAgICBjb25zdCBoZWlnaHQ6IG51bWJlciB8IHVuZGVmaW5lZCA9IGF3YWl0IHdlYkNvbnRlbnRzLmV4ZWN1dGVKYXZhU2NyaXB0KHNjcmlwdCk7XG5cbiAgICAgICAgcmV0dXJuIE9wdGlvbmFsLm9mKGhlaWdodCk7XG5cbiAgICB9XG5cbn1cblxuIl19