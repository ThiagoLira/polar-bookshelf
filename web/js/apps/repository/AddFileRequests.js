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
const FilePaths_1 = require("polar-shared/src/util/FilePaths");
const Optional_1 = require("polar-shared/src/util/ts/Optional");
const AppRuntime_1 = require("../../AppRuntime");
const ProgressToasters_1 = require("../../ui/progress_toaster/ProgressToasters");
const Files_1 = require("polar-shared/src/util/Files");
const Preconditions_1 = require("polar-shared/src/Preconditions");
const Reducers_1 = require("polar-shared/src/util/Reducers");
const TOASTER_DESTROY_DELAY = 500;
const MAX_RECURSIVE_DIRECTORY_SCAN_DURATION = "30s";
class AddFileRequests {
    static fromURL(url) {
        const toBasename = (input) => {
            input = input.replace(/[?#].*$/, '');
            return FilePaths_1.FilePaths.basename(input);
        };
        const parsedURL = new URL(url);
        const basenames = [];
        if (parsedURL.searchParams.get('url')) {
            basenames.push(toBasename(parsedURL.searchParams.get('url')));
        }
        basenames.push(toBasename(url));
        const basename = basenames.filter(current => Preconditions_1.isPresent(current))
            .reduce(Reducers_1.Reducers.FIRST);
        return {
            docPath: url,
            basename
        };
    }
    static fromPath(path) {
        return {
            docPath: path,
            basename: FilePaths_1.FilePaths.basename(path)
        };
    }
    static computeDirectly(event) {
        if (event.dataTransfer && event.dataTransfer.files) {
            return this.computeFromFileList(event.dataTransfer.files);
        }
        else {
            return [];
        }
    }
    static computeFromFileList(files) {
        return Array.from(files)
            .filter(file => FilePaths_1.FilePaths.hasExtension(file.name, 'pdf'))
            .map(file => {
            if (file.path) {
                return {
                    docPath: file.path,
                    basename: FilePaths_1.FilePaths.basename(file.path)
                };
            }
            else {
                return {
                    docPath: URL.createObjectURL(file),
                    basename: file.name,
                };
            }
        });
    }
    static computeRecursively(event) {
        return __awaiter(this, void 0, void 0, function* () {
            if (AppRuntime_1.AppRuntime.isElectron()) {
                if (event.dataTransfer) {
                    const progressToaster = yield ProgressToasters_1.ProgressToasters.create();
                    try {
                        const aborter = Files_1.Aborters.maxTime(MAX_RECURSIVE_DIRECTORY_SCAN_DURATION);
                        const paths = Array.from(event.dataTransfer.files)
                            .map(file => file.path);
                        const acceptedFiles = [];
                        for (const path of paths) {
                            if ((yield Files_1.Files.fileType(path)) === 'directory') {
                                yield Files_1.Files.recursively(path, (newPath) => __awaiter(this, void 0, void 0, function* () {
                                    if (newPath.toLocaleLowerCase().endsWith(".pdf")) {
                                        acceptedFiles.push(newPath);
                                    }
                                    progressToaster.update({
                                        title: `Finding files (${acceptedFiles.length}): `,
                                        status: newPath
                                    });
                                }), aborter);
                            }
                        }
                        const addFileRequests = acceptedFiles.map(current => {
                            return {
                                docPath: current,
                                basename: FilePaths_1.FilePaths.basename(current)
                            };
                        });
                        return Optional_1.Optional.of(addFileRequests);
                    }
                    finally {
                        setTimeout(() => progressToaster.destroy(), TOASTER_DESTROY_DELAY);
                    }
                }
            }
            return Optional_1.Optional.empty();
        });
    }
}
exports.AddFileRequests = AddFileRequests;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRkRmlsZVJlcXVlc3RzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQWRkRmlsZVJlcXVlc3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsK0RBQTBEO0FBRTFELGdFQUEyRDtBQUMzRCxpREFBNEM7QUFDNUMsaUZBQTRFO0FBQzVFLHVEQUE0RDtBQUM1RCxrRUFBeUQ7QUFDekQsNkRBQXdEO0FBR3hELE1BQU0scUJBQXFCLEdBQUcsR0FBRyxDQUFDO0FBQ2xDLE1BQU0scUNBQXFDLEdBQUcsS0FBSyxDQUFDO0FBRXBELE1BQWEsZUFBZTtJQUVqQixNQUFNLENBQUMsT0FBTyxDQUFDLEdBQVc7UUFFN0IsTUFBTSxVQUFVLEdBQUcsQ0FBQyxLQUFhLEVBQVUsRUFBRTtZQUN6QyxLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBRSxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDdEMsT0FBTyxxQkFBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQyxDQUFDLENBQUM7UUFJRixNQUFNLFNBQVMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUUvQixNQUFNLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFFckIsSUFBSSxTQUFTLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNuQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUUsQ0FBQyxDQUFDLENBQUM7U0FDbEU7UUFFRCxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRWhDLE1BQU0sUUFBUSxHQUNWLFNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyx5QkFBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3JDLE1BQU0sQ0FBQyxtQkFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXJDLE9BQU87WUFDSCxPQUFPLEVBQUUsR0FBRztZQUNaLFFBQVE7U0FDWCxDQUFDO0lBRU4sQ0FBQztJQUVNLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBWTtRQUUvQixPQUFPO1lBQ0gsT0FBTyxFQUFFLElBQUk7WUFDYixRQUFRLEVBQUUscUJBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1NBQ3JDLENBQUM7SUFFTixDQUFDO0lBRU0sTUFBTSxDQUFDLGVBQWUsQ0FBQyxLQUFnQjtRQUUxQyxJQUFJLEtBQUssQ0FBQyxZQUFZLElBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUU7WUFDaEQsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM3RDthQUFNO1lBQ0gsT0FBTyxFQUFFLENBQUM7U0FDYjtJQUVMLENBQUM7SUFFTSxNQUFNLENBQUMsbUJBQW1CLENBQUMsS0FBZTtRQUU3QyxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO2FBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLHFCQUFTLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDeEQsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBRVIsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUdYLE9BQU87b0JBQ0gsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJO29CQUNsQixRQUFRLEVBQUUscUJBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztpQkFDMUMsQ0FBQzthQUVMO2lCQUFNO2dCQUlILE9BQU87b0JBQ0gsT0FBTyxFQUFFLEdBQUcsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDO29CQUNsQyxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUk7aUJBQ3RCLENBQUM7YUFDTDtRQUVMLENBQUMsQ0FBQyxDQUFDO0lBRVgsQ0FBQztJQU9NLE1BQU0sQ0FBTyxrQkFBa0IsQ0FBQyxLQUFnQjs7WUFFbkQsSUFBSSx1QkFBVSxDQUFDLFVBQVUsRUFBRSxFQUFFO2dCQUV6QixJQUFJLEtBQUssQ0FBQyxZQUFZLEVBQUU7b0JBS3BCLE1BQU0sZUFBZSxHQUFHLE1BQU0sbUNBQWdCLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBRXhELElBQUk7d0JBSUEsTUFBTSxPQUFPLEdBQUcsZ0JBQVEsQ0FBQyxPQUFPLENBQUMscUNBQXFDLENBQUMsQ0FBQzt3QkFFeEUsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQzs2QkFDN0MsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUU1QixNQUFNLGFBQWEsR0FBYyxFQUFFLENBQUM7d0JBRXBDLEtBQUssTUFBTSxJQUFJLElBQUksS0FBSyxFQUFFOzRCQUV0QixJQUFJLENBQUEsTUFBTSxhQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFLLFdBQVcsRUFBRTtnQ0FFNUMsTUFBTSxhQUFLLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFNLE9BQU8sRUFBQyxFQUFFO29DQUUxQyxJQUFJLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRTt3Q0FDOUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztxQ0FDL0I7b0NBRUQsZUFBZSxDQUFDLE1BQU0sQ0FBQzt3Q0FDbkIsS0FBSyxFQUFFLGtCQUFrQixhQUFhLENBQUMsTUFBTSxLQUFLO3dDQUNsRCxNQUFNLEVBQUUsT0FBTztxQ0FDbEIsQ0FBQyxDQUFDO2dDQUVQLENBQUMsQ0FBQSxFQUFFLE9BQU8sQ0FBQyxDQUFDOzZCQUVmO3lCQUVKO3dCQUVELE1BQU0sZUFBZSxHQUNqQixhQUFhLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFOzRCQUN4QixPQUFPO2dDQUNILE9BQU8sRUFBRSxPQUFPO2dDQUNoQixRQUFRLEVBQUUscUJBQVMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDOzZCQUN4QyxDQUFDO3dCQUNOLENBQUMsQ0FBQyxDQUFDO3dCQUVQLE9BQU8sbUJBQVEsQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDLENBQUM7cUJBRXZDOzRCQUFTO3dCQUVOLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLEVBQUUscUJBQXFCLENBQUMsQ0FBQztxQkFFdEU7aUJBRUo7YUFFSjtZQUVELE9BQU8sbUJBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUU1QixDQUFDO0tBQUE7Q0FFSjtBQXZKRCwwQ0F1SkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0ZpbGVQYXRoc30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL0ZpbGVQYXRocyc7XG5pbXBvcnQge0FkZEZpbGVSZXF1ZXN0fSBmcm9tICcuL0FkZEZpbGVSZXF1ZXN0JztcbmltcG9ydCB7T3B0aW9uYWx9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC90cy9PcHRpb25hbCc7XG5pbXBvcnQge0FwcFJ1bnRpbWV9IGZyb20gJy4uLy4uL0FwcFJ1bnRpbWUnO1xuaW1wb3J0IHtQcm9ncmVzc1RvYXN0ZXJzfSBmcm9tICcuLi8uLi91aS9wcm9ncmVzc190b2FzdGVyL1Byb2dyZXNzVG9hc3RlcnMnO1xuaW1wb3J0IHtBYm9ydGVycywgRmlsZXN9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC9GaWxlcyc7XG5pbXBvcnQge2lzUHJlc2VudH0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9QcmVjb25kaXRpb25zJztcbmltcG9ydCB7UmVkdWNlcnN9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC9SZWR1Y2Vycyc7XG5pbXBvcnQge1BhdGhTdHJ9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL3V0aWwvU3RyaW5nc1wiO1xuXG5jb25zdCBUT0FTVEVSX0RFU1RST1lfREVMQVkgPSA1MDA7XG5jb25zdCBNQVhfUkVDVVJTSVZFX0RJUkVDVE9SWV9TQ0FOX0RVUkFUSU9OID0gXCIzMHNcIjtcblxuZXhwb3J0IGNsYXNzIEFkZEZpbGVSZXF1ZXN0cyB7XG5cbiAgICBwdWJsaWMgc3RhdGljIGZyb21VUkwodXJsOiBzdHJpbmcpOiBBZGRGaWxlUmVxdWVzdCB7XG5cbiAgICAgICAgY29uc3QgdG9CYXNlbmFtZSA9IChpbnB1dDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgICAgICAgIGlucHV0ID0gaW5wdXQucmVwbGFjZSggL1s/I10uKiQvLCAnJyk7XG4gICAgICAgICAgICByZXR1cm4gRmlsZVBhdGhzLmJhc2VuYW1lKGlucHV0KTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBjb21wdXRlIGEgc2FuZSBiYXNlbmFtZVxuXG4gICAgICAgIGNvbnN0IHBhcnNlZFVSTCA9IG5ldyBVUkwodXJsKTtcblxuICAgICAgICBjb25zdCBiYXNlbmFtZXMgPSBbXTtcblxuICAgICAgICBpZiAocGFyc2VkVVJMLnNlYXJjaFBhcmFtcy5nZXQoJ3VybCcpKSB7XG4gICAgICAgICAgICBiYXNlbmFtZXMucHVzaCh0b0Jhc2VuYW1lKHBhcnNlZFVSTC5zZWFyY2hQYXJhbXMuZ2V0KCd1cmwnKSEpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJhc2VuYW1lcy5wdXNoKHRvQmFzZW5hbWUodXJsKSk7XG5cbiAgICAgICAgY29uc3QgYmFzZW5hbWUgPVxuICAgICAgICAgICAgYmFzZW5hbWVzLmZpbHRlcihjdXJyZW50ID0+IGlzUHJlc2VudChjdXJyZW50KSlcbiAgICAgICAgICAgICAgICAgICAgIC5yZWR1Y2UoUmVkdWNlcnMuRklSU1QpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkb2NQYXRoOiB1cmwsXG4gICAgICAgICAgICBiYXNlbmFtZVxuICAgICAgICB9O1xuXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBmcm9tUGF0aChwYXRoOiBzdHJpbmcpOiBBZGRGaWxlUmVxdWVzdCB7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRvY1BhdGg6IHBhdGgsXG4gICAgICAgICAgICBiYXNlbmFtZTogRmlsZVBhdGhzLmJhc2VuYW1lKHBhdGgpXG4gICAgICAgIH07XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGNvbXB1dGVEaXJlY3RseShldmVudDogRHJhZ0V2ZW50KTogQWRkRmlsZVJlcXVlc3RbXSB7XG5cbiAgICAgICAgaWYgKGV2ZW50LmRhdGFUcmFuc2ZlciAmJiBldmVudC5kYXRhVHJhbnNmZXIuZmlsZXMpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbXB1dGVGcm9tRmlsZUxpc3QoZXZlbnQuZGF0YVRyYW5zZmVyLmZpbGVzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBjb21wdXRlRnJvbUZpbGVMaXN0KGZpbGVzOiBGaWxlTGlzdCk6IEFkZEZpbGVSZXF1ZXN0W10ge1xuXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKGZpbGVzKVxuICAgICAgICAgICAgLmZpbHRlcihmaWxlID0+IEZpbGVQYXRocy5oYXNFeHRlbnNpb24oZmlsZS5uYW1lLCAncGRmJykpXG4gICAgICAgICAgICAubWFwKGZpbGUgPT4ge1xuXG4gICAgICAgICAgICAgICAgaWYgKGZpbGUucGF0aCkge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIE9uIEVsZWN0cm9uIHdlIGhhdmUgdGhlIGZpbGUgcGF0aCBkaXJlY3RseS5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY1BhdGg6IGZpbGUucGF0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VuYW1lOiBGaWxlUGF0aHMuYmFzZW5hbWUoZmlsZS5wYXRoKVxuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvVVJML2NyZWF0ZU9iamVjdFVSTFxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2NQYXRoOiBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFzZW5hbWU6IGZpbGUubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQEVsZWN0cm9uUmVuZGVyZXJDb250ZXh0XG4gICAgICogQEJyb3dzZXJDb250ZXh0XG4gICAgICogQHBhcmFtIGV2ZW50XG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBjb21wdXRlUmVjdXJzaXZlbHkoZXZlbnQ6IERyYWdFdmVudCk6IFByb21pc2U8T3B0aW9uYWw8QWRkRmlsZVJlcXVlc3RbXT4+IHtcblxuICAgICAgICBpZiAoQXBwUnVudGltZS5pc0VsZWN0cm9uKCkpIHtcblxuICAgICAgICAgICAgaWYgKGV2ZW50LmRhdGFUcmFuc2Zlcikge1xuXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogSSBkb24ndCBsaWtlIGVtYmVkZGluZyB0aGUgVUkgY29tcG9uZW50IGluIGhlcmVcbiAgICAgICAgICAgICAgICAvLyBkaXJlY3RseS4uLlxuXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvZ3Jlc3NUb2FzdGVyID0gYXdhaXQgUHJvZ3Jlc3NUb2FzdGVycy5jcmVhdGUoKTtcblxuICAgICAgICAgICAgICAgIHRyeSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlIGFib3J0ZXIgd2lsbCBqdXN0IHRocm93IGFuIGV4Y2VwdGlvbiBpZiB0aGUgdGltZW91dFxuICAgICAgICAgICAgICAgICAgICAvLyBleGNlZWRzIGFuZCB0aGUgY2FsbGVyIHNob3VsZCBzaG93IGFuIGVycm9yLlxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhYm9ydGVyID0gQWJvcnRlcnMubWF4VGltZShNQVhfUkVDVVJTSVZFX0RJUkVDVE9SWV9TQ0FOX0RVUkFUSU9OKTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXRocyA9IEFycmF5LmZyb20oZXZlbnQuZGF0YVRyYW5zZmVyLmZpbGVzKVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChmaWxlID0+IGZpbGUucGF0aCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYWNjZXB0ZWRGaWxlczogUGF0aFN0cltdID0gW107XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBwYXRoIG9mIHBhdGhzKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhd2FpdCBGaWxlcy5maWxlVHlwZShwYXRoKSA9PT0gJ2RpcmVjdG9yeScpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IEZpbGVzLnJlY3Vyc2l2ZWx5KHBhdGgsIGFzeW5jIG5ld1BhdGggPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXdQYXRoLnRvTG9jYWxlTG93ZXJDYXNlKCkuZW5kc1dpdGgoXCIucGRmXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY2NlcHRlZEZpbGVzLnB1c2gobmV3UGF0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmVzc1RvYXN0ZXIudXBkYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBgRmluZGluZyBmaWxlcyAoJHthY2NlcHRlZEZpbGVzLmxlbmd0aH0pOiBgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiBuZXdQYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgYWJvcnRlcik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYWRkRmlsZVJlcXVlc3RzID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY2VwdGVkRmlsZXMubWFwKGN1cnJlbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY1BhdGg6IGN1cnJlbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhc2VuYW1lOiBGaWxlUGF0aHMuYmFzZW5hbWUoY3VycmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE9wdGlvbmFsLm9mKGFkZEZpbGVSZXF1ZXN0cyk7XG5cbiAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gcHJvZ3Jlc3NUb2FzdGVyLmRlc3Ryb3koKSwgVE9BU1RFUl9ERVNUUk9ZX0RFTEFZKTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gT3B0aW9uYWwuZW1wdHkoKTtcblxuICAgIH1cblxufVxuXG4iXX0=