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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pdfjs_dist_1 = __importDefault(require("pdfjs-dist"));
const FilePaths_1 = require("polar-shared/src/util/FilePaths");
const pdf_viewer_1 = require("pdfjs-dist/web/pdf_viewer");
pdfjs_dist_1.default.GlobalWorkerOptions.workerSrc = '../../node_modules/pdfjs-dist/build/pdf.worker.js';
function doLoad2() {
    return __awaiter(this, void 0, void 0, function* () {
        const url = FilePaths_1.FilePaths.toURL("/home/burton/projects/polar-app/packages/polar-bookshelf/docs/examples/pdf/availability.pdf");
        const init = {
            url,
            cMapPacked: true,
            cMapUrl: '../../node_modules/pdfjs-dist/cmaps/'
        };
        const doc = yield pdfjs_dist_1.default.getDocument(init).promise;
        const container = document.getElementById('viewerContainer');
        if (container === null) {
            throw new Error("No container");
        }
        const viewer = new pdf_viewer_1.PDFSinglePageViewer({
            container,
            textLayerMode: 0
        });
        viewer.setDocument(doc);
        const calculateScale = (to, from) => {
            return to / from;
        };
        const scale = calculateScale(window.innerHeight, container.offsetHeight);
        viewer.currentScale = scale;
    });
}
doLoad2().catch(err => console.log(err));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLDREQUF1RTtBQUN2RSwrREFBMEQ7QUFFMUQsMERBQTZFO0FBRTdFLG9CQUFLLENBQUMsbUJBQW1CLENBQUMsU0FBUyxHQUFHLG1EQUFtRCxDQUFDO0FBRTFGLFNBQWUsT0FBTzs7UUFJbEIsTUFBTSxHQUFHLEdBQUcscUJBQVMsQ0FBQyxLQUFLLENBQUMsNkZBQTZGLENBQUMsQ0FBQztRQUUzSCxNQUFNLElBQUksR0FBMkI7WUFDakMsR0FBRztZQUNILFVBQVUsRUFBRSxJQUFJO1lBQ2hCLE9BQU8sRUFBRSxzQ0FBc0M7U0FDbEQsQ0FBQztRQUVGLE1BQU0sR0FBRyxHQUFHLE1BQU0sb0JBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDO1FBRWxELE1BQU0sU0FBUyxHQUFvQixRQUFRLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFFLENBQUM7UUFFL0UsSUFBSSxTQUFTLEtBQUssSUFBSSxFQUFFO1lBQ3BCLE1BQU0sSUFBSSxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDbkM7UUFFRCxNQUFNLE1BQU0sR0FBRyxJQUFJLGdDQUFtQixDQUFDO1lBQ25DLFNBQVM7WUFDVCxhQUFhLEVBQUUsQ0FBQztTQUNuQixDQUFDLENBQUM7UUFFSCxNQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRXhCLE1BQU0sY0FBYyxHQUFHLENBQUMsRUFBVSxFQUFFLElBQVksRUFBRSxFQUFFO1lBQ2hELE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQztRQUNyQixDQUFDLENBQUM7UUFFRixNQUFNLEtBQUssR0FBRyxjQUFjLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFekUsTUFBTSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFFaEMsQ0FBQztDQUFBO0FBRUQsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBERkpTLCB7UERGUGFnZVByb3h5LCBEb2N1bWVudEluaXRQYXJhbWV0ZXJzfSBmcm9tICdwZGZqcy1kaXN0JztcbmltcG9ydCB7RmlsZVBhdGhzfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy91dGlsL0ZpbGVQYXRoc1wiO1xuXG5pbXBvcnQge1BERlNpbmdsZVBhZ2VWaWV3ZXIsIFRleHRMYXllck1vZGV9IGZyb20gJ3BkZmpzLWRpc3Qvd2ViL3BkZl92aWV3ZXInO1xuXG5QREZKUy5HbG9iYWxXb3JrZXJPcHRpb25zLndvcmtlclNyYyA9ICcuLi8uLi9ub2RlX21vZHVsZXMvcGRmanMtZGlzdC9idWlsZC9wZGYud29ya2VyLmpzJztcblxuYXN5bmMgZnVuY3Rpb24gZG9Mb2FkMigpIHtcblxuICAgIC8vIEZJWE1FOiBhY2NlcHQgYSBVUkwgdG8gcmVuZGVyLi5cblxuICAgIGNvbnN0IHVybCA9IEZpbGVQYXRocy50b1VSTChcIi9ob21lL2J1cnRvbi9wcm9qZWN0cy9wb2xhci1hcHAvcGFja2FnZXMvcG9sYXItYm9va3NoZWxmL2RvY3MvZXhhbXBsZXMvcGRmL2F2YWlsYWJpbGl0eS5wZGZcIik7XG5cbiAgICBjb25zdCBpbml0OiBEb2N1bWVudEluaXRQYXJhbWV0ZXJzID0ge1xuICAgICAgICB1cmwsXG4gICAgICAgIGNNYXBQYWNrZWQ6IHRydWUsXG4gICAgICAgIGNNYXBVcmw6ICcuLi8uLi9ub2RlX21vZHVsZXMvcGRmanMtZGlzdC9jbWFwcy8nXG4gICAgfTtcblxuICAgIGNvbnN0IGRvYyA9IGF3YWl0IFBERkpTLmdldERvY3VtZW50KGluaXQpLnByb21pc2U7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSA8SFRNTERpdkVsZW1lbnQ+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWV3ZXJDb250YWluZXInKSE7XG5cbiAgICBpZiAoY29udGFpbmVyID09PSBudWxsKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIGNvbnRhaW5lclwiKTtcbiAgICB9XG5cbiAgICBjb25zdCB2aWV3ZXIgPSBuZXcgUERGU2luZ2xlUGFnZVZpZXdlcih7XG4gICAgICAgIGNvbnRhaW5lcixcbiAgICAgICAgdGV4dExheWVyTW9kZTogMFxuICAgIH0pO1xuXG4gICAgdmlld2VyLnNldERvY3VtZW50KGRvYyk7XG5cbiAgICBjb25zdCBjYWxjdWxhdGVTY2FsZSA9ICh0bzogbnVtYmVyLCBmcm9tOiBudW1iZXIpID0+IHtcbiAgICAgICAgcmV0dXJuIHRvIC8gZnJvbTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2NhbGUgPSBjYWxjdWxhdGVTY2FsZSh3aW5kb3cuaW5uZXJIZWlnaHQsIGNvbnRhaW5lci5vZmZzZXRIZWlnaHQpO1xuXG4gICAgdmlld2VyLmN1cnJlbnRTY2FsZSA9IHNjYWxlO1xuXG59XG5cbmRvTG9hZDIoKS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG4iXX0=