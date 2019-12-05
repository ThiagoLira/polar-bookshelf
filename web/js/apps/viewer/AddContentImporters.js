"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AddContentImporter_1 = require("./AddContentImporter");
const PreviewURLs_1 = require("polar-webapp-links/src/docs/PreviewURLs");
class AddContentImporters {
    static create() {
        if (PreviewURLs_1.PreviewURLs.isPreview()) {
            return new AddContentImporter_1.DefaultAddContentImporter();
        }
        return new AddContentImporter_1.NullAddContentImporter();
    }
}
exports.AddContentImporters = AddContentImporters;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRkQ29udGVudEltcG9ydGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkFkZENvbnRlbnRJbXBvcnRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2REFHOEI7QUFDOUIseUVBQW9FO0FBRXBFLE1BQWEsbUJBQW1CO0lBRXJCLE1BQU0sQ0FBQyxNQUFNO1FBRWhCLElBQUkseUJBQVcsQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUN6QixPQUFPLElBQUksOENBQXlCLEVBQUUsQ0FBQztTQUMxQztRQUVELE9BQU8sSUFBSSwyQ0FBc0IsRUFBRSxDQUFDO0lBRXhDLENBQUM7Q0FFSjtBQVpELGtEQVlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBEZWZhdWx0QWRkQ29udGVudEltcG9ydGVyLFxuICAgIE51bGxBZGRDb250ZW50SW1wb3J0ZXJcbn0gZnJvbSAnLi9BZGRDb250ZW50SW1wb3J0ZXInO1xuaW1wb3J0IHtQcmV2aWV3VVJMc30gZnJvbSAncG9sYXItd2ViYXBwLWxpbmtzL3NyYy9kb2NzL1ByZXZpZXdVUkxzJztcblxuZXhwb3J0IGNsYXNzIEFkZENvbnRlbnRJbXBvcnRlcnMge1xuXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGUoKSB7XG5cbiAgICAgICAgaWYgKFByZXZpZXdVUkxzLmlzUHJldmlldygpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IERlZmF1bHRBZGRDb250ZW50SW1wb3J0ZXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgTnVsbEFkZENvbnRlbnRJbXBvcnRlcigpO1xuXG4gICAgfVxuXG59XG4iXX0=