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
const PHZLoader_1 = require("./PHZLoader");
const PDFLoader_1 = require("./PDFLoader");
const FilePaths_1 = require("polar-shared/src/util/FilePaths");
class DefaultFileLoader extends FileLoader_1.FileLoader {
    constructor(fileRegistry, cacheRegistry) {
        super();
        this.fileRegistry = fileRegistry;
        this.cacheRegistry = cacheRegistry;
        this.pdfLoader = new PDFLoader_1.PDFLoader(fileRegistry);
        this.phzLoader = new PHZLoader_1.PHZLoader(cacheRegistry, fileRegistry);
    }
    registerForLoad(path) {
        return __awaiter(this, void 0, void 0, function* () {
            if (FilePaths_1.FilePaths.hasExtension(path, "pdf")) {
                return this.pdfLoader.registerForLoad(path);
            }
            else if (FilePaths_1.FilePaths.hasExtension(path, "phz")) {
                return this.phzLoader.registerForLoad(path);
            }
            else {
                throw new Error("Unable to handle file: " + path);
            }
        });
    }
}
exports.DefaultFileLoader = DefaultFileLoader;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVmYXVsdEZpbGVMb2FkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJEZWZhdWx0RmlsZUxvYWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDZDQUF3QztBQUV4QywyQ0FBc0M7QUFDdEMsMkNBQXNDO0FBRXRDLCtEQUEwRDtBQUcxRCxNQUFhLGlCQUFrQixTQUFRLHVCQUFVO0lBVTdDLFlBQVksWUFBMEIsRUFBRSxhQUE0QjtRQUNoRSxLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxxQkFBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxxQkFBUyxDQUFDLGFBQWEsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRVksZUFBZSxDQUFDLElBQVk7O1lBRXJDLElBQUkscUJBQVMsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxFQUFFO2dCQUNyQyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQy9DO2lCQUFNLElBQUkscUJBQVMsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxFQUFFO2dCQUM1QyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQy9DO2lCQUFNO2dCQUNILE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLEdBQUcsSUFBSSxDQUFDLENBQUM7YUFDckQ7UUFFTCxDQUFDO0tBQUE7Q0FFSjtBQTlCRCw4Q0E4QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0ZpbGVMb2FkZXJ9IGZyb20gJy4vRmlsZUxvYWRlcic7XG5pbXBvcnQge0NhY2hlUmVnaXN0cnl9IGZyb20gJy4uLy4uLy4uL2JhY2tlbmQvcHJveHlzZXJ2ZXIvQ2FjaGVSZWdpc3RyeSc7XG5pbXBvcnQge1BIWkxvYWRlcn0gZnJvbSAnLi9QSFpMb2FkZXInO1xuaW1wb3J0IHtQREZMb2FkZXJ9IGZyb20gJy4vUERGTG9hZGVyJztcbmltcG9ydCB7TG9hZGVkRmlsZX0gZnJvbSAnLi9Mb2FkZWRGaWxlJztcbmltcG9ydCB7RmlsZVBhdGhzfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvRmlsZVBhdGhzJztcbmltcG9ydCB7RmlsZVJlZ2lzdHJ5fSBmcm9tIFwicG9sYXItc2hhcmVkLXdlYnNlcnZlci9zcmMvd2Vic2VydmVyL0ZpbGVSZWdpc3RyeVwiO1xuXG5leHBvcnQgY2xhc3MgRGVmYXVsdEZpbGVMb2FkZXIgZXh0ZW5kcyBGaWxlTG9hZGVyIHtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgZmlsZVJlZ2lzdHJ5OiBGaWxlUmVnaXN0cnk7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IGNhY2hlUmVnaXN0cnk6IENhY2hlUmVnaXN0cnk7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IHBkZkxvYWRlcjogUERGTG9hZGVyO1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBwaHpMb2FkZXI6IFBIWkxvYWRlcjtcblxuICAgIGNvbnN0cnVjdG9yKGZpbGVSZWdpc3RyeTogRmlsZVJlZ2lzdHJ5LCBjYWNoZVJlZ2lzdHJ5OiBDYWNoZVJlZ2lzdHJ5KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZmlsZVJlZ2lzdHJ5ID0gZmlsZVJlZ2lzdHJ5O1xuICAgICAgICB0aGlzLmNhY2hlUmVnaXN0cnkgPSBjYWNoZVJlZ2lzdHJ5O1xuICAgICAgICB0aGlzLnBkZkxvYWRlciA9IG5ldyBQREZMb2FkZXIoZmlsZVJlZ2lzdHJ5KTtcbiAgICAgICAgdGhpcy5waHpMb2FkZXIgPSBuZXcgUEhaTG9hZGVyKGNhY2hlUmVnaXN0cnksIGZpbGVSZWdpc3RyeSk7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIHJlZ2lzdGVyRm9yTG9hZChwYXRoOiBzdHJpbmcpOiBQcm9taXNlPExvYWRlZEZpbGU+IHtcblxuICAgICAgICBpZiAoRmlsZVBhdGhzLmhhc0V4dGVuc2lvbihwYXRoLCBcInBkZlwiKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGRmTG9hZGVyLnJlZ2lzdGVyRm9yTG9hZChwYXRoKTtcbiAgICAgICAgfSBlbHNlIGlmIChGaWxlUGF0aHMuaGFzRXh0ZW5zaW9uKHBhdGgsIFwicGh6XCIpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5waHpMb2FkZXIucmVnaXN0ZXJGb3JMb2FkKHBhdGgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5hYmxlIHRvIGhhbmRsZSBmaWxlOiBcIiArIHBhdGgpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbn1cbiJdfQ==