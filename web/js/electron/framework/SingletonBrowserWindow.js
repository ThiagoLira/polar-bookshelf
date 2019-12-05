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
const electron_1 = require("electron");
const BrowserWindowRegistry_1 = require("./BrowserWindowRegistry");
const Logger_1 = require("polar-shared/src/logger/Logger");
const log = Logger_1.Logger.create();
class SingletonBrowserWindow {
    static getInstance(tag, browserWindowFactory, extraTags = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const existing = BrowserWindowRegistry_1.BrowserWindowRegistry.tagged(tag);
            if (existing.length === 1) {
                log.info("Found existing repository UI. Focusing.");
                const id = existing[0];
                const browserWindow = electron_1.BrowserWindow.fromId(id);
                browserWindow.focus();
                return browserWindow;
            }
            const result = yield browserWindowFactory();
            const tags = Object.assign({}, extraTags);
            tags[tag.name] = tag.value;
            BrowserWindowRegistry_1.BrowserWindowRegistry.tag(result.id, tags);
            return result;
        });
    }
}
exports.SingletonBrowserWindow = SingletonBrowserWindow;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2luZ2xldG9uQnJvd3NlcldpbmRvdy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlNpbmdsZXRvbkJyb3dzZXJXaW5kb3cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFJQSx1Q0FBdUM7QUFDdkMsbUVBQXdGO0FBQ3hGLDJEQUFzRDtBQUV0RCxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFNUIsTUFBYSxzQkFBc0I7SUFFeEIsTUFBTSxDQUFPLFdBQVcsQ0FBQyxHQUFxQixFQUNyQixvQkFBMEMsRUFDMUMsWUFBb0IsRUFBRTs7WUFFbEQsTUFBTSxRQUFRLEdBQUcsNkNBQXFCLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRW5ELElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBRXZCLEdBQUcsQ0FBQyxJQUFJLENBQUMseUNBQXlDLENBQUMsQ0FBQztnQkFFcEQsTUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUV2QixNQUFNLGFBQWEsR0FBRyx3QkFBYSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDL0MsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUN0QixPQUFPLGFBQWEsQ0FBQzthQUV4QjtZQUVELE1BQU0sTUFBTSxHQUFHLE1BQU0sb0JBQW9CLEVBQUUsQ0FBQztZQUU1QyxNQUFNLElBQUksR0FBVyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxTQUFTLENBQUMsQ0FBQztZQUNsRCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFFM0IsNkNBQXFCLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFFM0MsT0FBTyxNQUFNLENBQUM7UUFFbEIsQ0FBQztLQUFBO0NBRUo7QUEvQkQsd0RBK0JDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGUgYSBzaW5nbGUgYnJvd3NlciB3aW5kb3cgYnkga2V5IGFuZCBqdXN0IGZvY3VzIGlmIHRoZSB3aW5kb3cgaXMgc3RpbGxcbiAqIG9wZW4gdGhlIHNlY29uZCB0aW1lIHdlIHRyeSB0byBvcGVuIGl0LlxuICovXG5pbXBvcnQge0Jyb3dzZXJXaW5kb3d9IGZyb20gJ2VsZWN0cm9uJztcbmltcG9ydCB7QnJvd3NlcldpbmRvd1JlZ2lzdHJ5LCBCcm93c2VyV2luZG93VGFnLCBUYWdNYXB9IGZyb20gJy4vQnJvd3NlcldpbmRvd1JlZ2lzdHJ5JztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL2xvZ2dlci9Mb2dnZXInO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbmV4cG9ydCBjbGFzcyBTaW5nbGV0b25Ccm93c2VyV2luZG93IHtcblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgZ2V0SW5zdGFuY2UodGFnOiBCcm93c2VyV2luZG93VGFnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJvd3NlcldpbmRvd0ZhY3Rvcnk6IEJyb3dzZXJXaW5kb3dGYWN0b3J5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh0cmFUYWdzOiBUYWdNYXAgPSB7fSkge1xuXG4gICAgICAgIGNvbnN0IGV4aXN0aW5nID0gQnJvd3NlcldpbmRvd1JlZ2lzdHJ5LnRhZ2dlZCh0YWcpO1xuXG4gICAgICAgIGlmIChleGlzdGluZy5sZW5ndGggPT09IDEpIHtcblxuICAgICAgICAgICAgbG9nLmluZm8oXCJGb3VuZCBleGlzdGluZyByZXBvc2l0b3J5IFVJLiBGb2N1c2luZy5cIik7XG5cbiAgICAgICAgICAgIGNvbnN0IGlkID0gZXhpc3RpbmdbMF07XG5cbiAgICAgICAgICAgIGNvbnN0IGJyb3dzZXJXaW5kb3cgPSBCcm93c2VyV2luZG93LmZyb21JZChpZCk7XG4gICAgICAgICAgICBicm93c2VyV2luZG93LmZvY3VzKCk7XG4gICAgICAgICAgICByZXR1cm4gYnJvd3NlcldpbmRvdztcblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYnJvd3NlcldpbmRvd0ZhY3RvcnkoKTtcblxuICAgICAgICBjb25zdCB0YWdzOiBUYWdNYXAgPSBPYmplY3QuYXNzaWduKHt9LCBleHRyYVRhZ3MpO1xuICAgICAgICB0YWdzW3RhZy5uYW1lXSA9IHRhZy52YWx1ZTtcblxuICAgICAgICBCcm93c2VyV2luZG93UmVnaXN0cnkudGFnKHJlc3VsdC5pZCwgdGFncyk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcblxuICAgIH1cblxufVxuXG5leHBvcnQgdHlwZSBCcm93c2VyV2luZG93RmFjdG9yeSA9ICgpID0+IFByb21pc2U8QnJvd3NlcldpbmRvdz47XG4iXX0=