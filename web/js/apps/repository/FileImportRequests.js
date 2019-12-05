"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AddFileRequests_1 = require("./AddFileRequests");
class FileImportRequests {
    static fromPath(path) {
        return {
            files: [
                AddFileRequests_1.AddFileRequests.fromPath(path)
            ]
        };
    }
    static fromPaths(paths) {
        const files = paths.map(path => AddFileRequests_1.AddFileRequests.fromPath(path));
        return {
            files
        };
    }
    static fromURLs(urls) {
        const files = urls.map(url => AddFileRequests_1.AddFileRequests.fromURL(url));
        return {
            files
        };
    }
}
exports.FileImportRequests = FileImportRequests;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZUltcG9ydFJlcXVlc3RzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRmlsZUltcG9ydFJlcXVlc3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsdURBQWtEO0FBRWxELE1BQWEsa0JBQWtCO0lBRXBCLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBWTtRQUUvQixPQUFPO1lBQ0gsS0FBSyxFQUFFO2dCQUNILGlDQUFlLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQzthQUNqQztTQUNKLENBQUM7SUFFTixDQUFDO0lBRU0sTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFlO1FBRW5DLE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxpQ0FBZSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBRWhFLE9BQU87WUFDSCxLQUFLO1NBQ1IsQ0FBQztJQUVOLENBQUM7SUFFTSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQWM7UUFFakMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLGlDQUFlLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFNUQsT0FBTztZQUNILEtBQUs7U0FDUixDQUFDO0lBRU4sQ0FBQztDQUVKO0FBaENELGdEQWdDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RmlsZUltcG9ydFJlcXVlc3R9IGZyb20gJy4vRmlsZUltcG9ydFJlcXVlc3QnO1xuaW1wb3J0IHtBZGRGaWxlUmVxdWVzdHN9IGZyb20gJy4vQWRkRmlsZVJlcXVlc3RzJztcblxuZXhwb3J0IGNsYXNzIEZpbGVJbXBvcnRSZXF1ZXN0cyB7XG5cbiAgICBwdWJsaWMgc3RhdGljIGZyb21QYXRoKHBhdGg6IHN0cmluZyk6IEZpbGVJbXBvcnRSZXF1ZXN0IHtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZmlsZXM6IFtcbiAgICAgICAgICAgICAgICBBZGRGaWxlUmVxdWVzdHMuZnJvbVBhdGgocGF0aClcbiAgICAgICAgICAgIF1cbiAgICAgICAgfTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZnJvbVBhdGhzKHBhdGhzOiBzdHJpbmdbXSk6IEZpbGVJbXBvcnRSZXF1ZXN0IHtcblxuICAgICAgICBjb25zdCBmaWxlcyA9IHBhdGhzLm1hcChwYXRoID0+IEFkZEZpbGVSZXF1ZXN0cy5mcm9tUGF0aChwYXRoKSk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGZpbGVzXG4gICAgICAgIH07XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGZyb21VUkxzKHVybHM6IHN0cmluZ1tdKTogRmlsZUltcG9ydFJlcXVlc3Qge1xuXG4gICAgICAgIGNvbnN0IGZpbGVzID0gdXJscy5tYXAodXJsID0+IEFkZEZpbGVSZXF1ZXN0cy5mcm9tVVJMKHVybCkpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBmaWxlc1xuICAgICAgICB9O1xuXG4gICAgfVxuXG59XG4iXX0=