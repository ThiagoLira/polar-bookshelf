"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DocFormats_1 = require("../docformat/DocFormats");
const HTMLViewer_1 = require("./html/HTMLViewer");
const PDFViewer_1 = require("./pdf/PDFViewer");
class ViewerFactory {
    static create(model) {
        const format = DocFormats_1.DocFormats.getFormat();
        switch (format) {
            case "html":
                return new HTMLViewer_1.HTMLViewer(model);
            case "pdf":
                return new PDFViewer_1.PDFViewer(model);
            default:
                throw new Error("Unknown doc format: " + format);
        }
    }
}
exports.ViewerFactory = ViewerFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmlld2VyRmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlZpZXdlckZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSx3REFBbUQ7QUFDbkQsa0RBQTZDO0FBQzdDLCtDQUEwQztBQUUxQyxNQUFhLGFBQWE7SUFFZixNQUFNLENBQUMsTUFBTSxDQUFDLEtBQVk7UUFFN0IsTUFBTSxNQUFNLEdBQUcsdUJBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUV0QyxRQUFRLE1BQU0sRUFBRTtZQUNaLEtBQUssTUFBTTtnQkFDUCxPQUFPLElBQUksdUJBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUVqQyxLQUFLLEtBQUs7Z0JBQ04sT0FBTyxJQUFJLHFCQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFaEM7Z0JBQ0ksTUFBTSxJQUFJLEtBQUssQ0FBQyxzQkFBc0IsR0FBRyxNQUFNLENBQUMsQ0FBQztTQUN4RDtJQUVMLENBQUM7Q0FFSjtBQW5CRCxzQ0FtQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge01vZGVsfSBmcm9tICcuLi9tb2RlbC9Nb2RlbCc7XG5pbXBvcnQge0RvY0Zvcm1hdHN9IGZyb20gJy4uL2RvY2Zvcm1hdC9Eb2NGb3JtYXRzJztcbmltcG9ydCB7SFRNTFZpZXdlcn0gZnJvbSAnLi9odG1sL0hUTUxWaWV3ZXInO1xuaW1wb3J0IHtQREZWaWV3ZXJ9IGZyb20gJy4vcGRmL1BERlZpZXdlcic7XG5cbmV4cG9ydCBjbGFzcyBWaWV3ZXJGYWN0b3J5IHtcblxuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlKG1vZGVsOiBNb2RlbCkge1xuXG4gICAgICAgIGNvbnN0IGZvcm1hdCA9IERvY0Zvcm1hdHMuZ2V0Rm9ybWF0KCk7XG5cbiAgICAgICAgc3dpdGNoIChmb3JtYXQpIHtcbiAgICAgICAgICAgIGNhc2UgXCJodG1sXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBIVE1MVmlld2VyKG1vZGVsKTtcblxuICAgICAgICAgICAgY2FzZSBcInBkZlwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUERGVmlld2VyKG1vZGVsKTtcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmtub3duIGRvYyBmb3JtYXQ6IFwiICsgZm9ybWF0KTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG59XG4iXX0=