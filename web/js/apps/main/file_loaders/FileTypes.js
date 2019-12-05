"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FileType_1 = require("./FileType");
const FilePaths_1 = require("polar-shared/src/util/FilePaths");
class FileTypes {
    static create(path) {
        if (FilePaths_1.FilePaths.hasExtension(path, "pdf")) {
            return FileType_1.FileType.PDF;
        }
        else if (FilePaths_1.FilePaths.hasExtension(path, "phz")) {
            return FileType_1.FileType.PHZ;
        }
        else {
            throw new Error("Unable to handle file: " + path);
        }
    }
}
exports.FileTypes = FileTypes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZVR5cGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRmlsZVR5cGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseUNBQW9DO0FBQ3BDLCtEQUEwRDtBQUUxRCxNQUFhLFNBQVM7SUFFWCxNQUFNLENBQUMsTUFBTSxDQUFDLElBQVk7UUFFN0IsSUFBSSxxQkFBUyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEVBQUU7WUFDckMsT0FBTyxtQkFBUSxDQUFDLEdBQUcsQ0FBQztTQUN2QjthQUFNLElBQUkscUJBQVMsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxFQUFFO1lBQzVDLE9BQU8sbUJBQVEsQ0FBQyxHQUFHLENBQUM7U0FDdkI7YUFBTTtZQUNILE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLEdBQUcsSUFBSSxDQUFDLENBQUM7U0FDckQ7SUFFTCxDQUFDO0NBRUo7QUFkRCw4QkFjQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RmlsZVR5cGV9IGZyb20gJy4vRmlsZVR5cGUnO1xuaW1wb3J0IHtGaWxlUGF0aHN9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC9GaWxlUGF0aHMnO1xuXG5leHBvcnQgY2xhc3MgRmlsZVR5cGVzIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlKHBhdGg6IHN0cmluZyk6IEZpbGVUeXBlIHtcblxuICAgICAgICBpZiAoRmlsZVBhdGhzLmhhc0V4dGVuc2lvbihwYXRoLCBcInBkZlwiKSkge1xuICAgICAgICAgICAgcmV0dXJuIEZpbGVUeXBlLlBERjtcbiAgICAgICAgfSBlbHNlIGlmIChGaWxlUGF0aHMuaGFzRXh0ZW5zaW9uKHBhdGgsIFwicGh6XCIpKSB7XG4gICAgICAgICAgICByZXR1cm4gRmlsZVR5cGUuUEhaO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5hYmxlIHRvIGhhbmRsZSBmaWxlOiBcIiArIHBhdGgpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbn1cbiJdfQ==