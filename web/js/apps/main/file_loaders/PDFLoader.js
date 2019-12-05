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
const FileLoader_1 = require("./FileLoader");
const WebResource_1 = require("../../../electron/webresource/WebResource");
const ResourcePaths_1 = require("../../../electron/webresource/ResourcePaths");
const Logger_1 = require("polar-shared/src/logger/Logger");
const FilePaths_1 = require("polar-shared/src/util/FilePaths");
const log = Logger_1.Logger.create();
class PDFLoader extends FileLoader_1.FileLoader {
    constructor(fileRegistry) {
        super();
        this.fileRegistry = fileRegistry;
    }
    registerForLoad(path) {
        return __awaiter(this, void 0, void 0, function* () {
            const filename = FilePaths_1.FilePaths.basename(path);
            const fileMeta = this.fileRegistry.registerFile(path);
            const appURL = PDFLoader.createViewerURL(fileMeta.url, filename);
            return {
                webResource: WebResource_1.WebResource.createURL(appURL)
            };
        });
    }
    static createViewerURL(fileURL, filename) {
        const fileParam = encodeURIComponent(fileURL);
        const filenameParam = encodeURIComponent(filename);
        return ResourcePaths_1.ResourcePaths.resourceURLFromRelativeURL(`/pdfviewer/web/index.html?file=${fileParam}&filename=${filenameParam}&zoom=page-width`, false);
    }
}
exports.PDFLoader = PDFLoader;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUERGTG9hZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUERGTG9hZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsNkNBQXdDO0FBQ3hDLDJFQUFzRTtBQUN0RSwrRUFBMEU7QUFFMUUsMkRBQXNEO0FBQ3RELCtEQUEwRDtBQUcxRCxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFNUIsTUFBYSxTQUFVLFNBQVEsdUJBQVU7SUFJckMsWUFBWSxZQUEwQjtRQUNsQyxLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO0lBQ3JDLENBQUM7SUFFWSxlQUFlLENBQUMsSUFBWTs7WUFFckMsTUFBTSxRQUFRLEdBQUcscUJBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFMUMsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFdEQsTUFBTSxNQUFNLEdBQUcsU0FBUyxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBRWpFLE9BQU87Z0JBQ0gsV0FBVyxFQUFFLHlCQUFXLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQzthQUM3QyxDQUFDO1FBRU4sQ0FBQztLQUFBO0lBRU0sTUFBTSxDQUFDLGVBQWUsQ0FBQyxPQUFlLEVBQUUsUUFBZ0I7UUFDM0QsTUFBTSxTQUFTLEdBQUcsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDOUMsTUFBTSxhQUFhLEdBQUcsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFbkQsT0FBTyw2QkFBYSxDQUFDLDBCQUEwQixDQUFDLGtDQUFrQyxTQUFTLGFBQWEsYUFBYSxrQkFBa0IsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNwSixDQUFDO0NBRUo7QUE5QkQsOEJBOEJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtGaWxlTG9hZGVyfSBmcm9tICcuL0ZpbGVMb2FkZXInO1xuaW1wb3J0IHtXZWJSZXNvdXJjZX0gZnJvbSAnLi4vLi4vLi4vZWxlY3Ryb24vd2VicmVzb3VyY2UvV2ViUmVzb3VyY2UnO1xuaW1wb3J0IHtSZXNvdXJjZVBhdGhzfSBmcm9tICcuLi8uLi8uLi9lbGVjdHJvbi93ZWJyZXNvdXJjZS9SZXNvdXJjZVBhdGhzJztcbmltcG9ydCB7TG9hZGVkRmlsZX0gZnJvbSAnLi9Mb2FkZWRGaWxlJztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL2xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IHtGaWxlUGF0aHN9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC9GaWxlUGF0aHMnO1xuaW1wb3J0IHtGaWxlUmVnaXN0cnl9IGZyb20gXCJwb2xhci1zaGFyZWQtd2Vic2VydmVyL3NyYy93ZWJzZXJ2ZXIvRmlsZVJlZ2lzdHJ5XCI7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuZXhwb3J0IGNsYXNzIFBERkxvYWRlciBleHRlbmRzIEZpbGVMb2FkZXIge1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBmaWxlUmVnaXN0cnk6IEZpbGVSZWdpc3RyeTtcblxuICAgIGNvbnN0cnVjdG9yKGZpbGVSZWdpc3RyeTogRmlsZVJlZ2lzdHJ5KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZmlsZVJlZ2lzdHJ5ID0gZmlsZVJlZ2lzdHJ5O1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyByZWdpc3RlckZvckxvYWQocGF0aDogc3RyaW5nKTogUHJvbWlzZTxMb2FkZWRGaWxlPiB7XG5cbiAgICAgICAgY29uc3QgZmlsZW5hbWUgPSBGaWxlUGF0aHMuYmFzZW5hbWUocGF0aCk7XG5cbiAgICAgICAgY29uc3QgZmlsZU1ldGEgPSB0aGlzLmZpbGVSZWdpc3RyeS5yZWdpc3RlckZpbGUocGF0aCk7XG5cbiAgICAgICAgY29uc3QgYXBwVVJMID0gUERGTG9hZGVyLmNyZWF0ZVZpZXdlclVSTChmaWxlTWV0YS51cmwsIGZpbGVuYW1lKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2ViUmVzb3VyY2U6IFdlYlJlc291cmNlLmNyZWF0ZVVSTChhcHBVUkwpXG4gICAgICAgIH07XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZVZpZXdlclVSTChmaWxlVVJMOiBzdHJpbmcsIGZpbGVuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgZmlsZVBhcmFtID0gZW5jb2RlVVJJQ29tcG9uZW50KGZpbGVVUkwpO1xuICAgICAgICBjb25zdCBmaWxlbmFtZVBhcmFtID0gZW5jb2RlVVJJQ29tcG9uZW50KGZpbGVuYW1lKTtcblxuICAgICAgICByZXR1cm4gUmVzb3VyY2VQYXRocy5yZXNvdXJjZVVSTEZyb21SZWxhdGl2ZVVSTChgL3BkZnZpZXdlci93ZWIvaW5kZXguaHRtbD9maWxlPSR7ZmlsZVBhcmFtfSZmaWxlbmFtZT0ke2ZpbGVuYW1lUGFyYW19Jnpvb209cGFnZS13aWR0aGAsIGZhbHNlKTtcbiAgICB9XG5cbn1cblxuIl19