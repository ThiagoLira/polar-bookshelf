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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const Logger_1 = require("polar-shared/src/logger/Logger");
const pdfjs_dist_1 = __importDefault(require("pdfjs-dist"));
const Numbers_1 = require("polar-shared/src/util/Numbers");
console.log("Running with pdf.js version: " + pdfjs_dist_1.default.version);
pdfjs_dist_1.default.GlobalWorkerOptions.workerSrc = '../../../node_modules/pdfjs-dist/build/pdf.worker.js';
const log = Logger_1.Logger.create();
console.log("FIXME: ", pdfjs_dist_1.default.renderTextLayer);
class PDFViewer extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.doRender = this.doRender.bind(this);
        this.state = {};
        this.doRender().catch(err => log.error(err));
    }
    doRender() {
        return __awaiter(this, void 0, void 0, function* () {
            const loadingTask = pdfjs_dist_1.default.getDocument('../../../docs/examples/pdf/bigtable.pdf');
            const pdf = yield loadingTask.promise;
            const page = yield pdf.getPage(1);
            var scale = 1;
            var viewport = page.getViewport({ scale: scale });
            const canvas = document.querySelector('#pdf canvas');
            const textLayer = document.querySelector('#pdf .textLayer');
            if (!canvas) {
                throw new Error("No canvas");
            }
            if (!textLayer) {
                throw new Error("No textLayer");
            }
            const context = canvas.getContext('2d');
            canvas.height = viewport.height;
            canvas.width = viewport.width;
            const renderContext = {
                canvasContext: context,
                viewport: viewport,
            };
            page.render(renderContext);
        });
    }
    render() {
        const RenderPages = () => {
            const nrPages = this.state.nrPages || 1;
            const range = Numbers_1.Numbers.range(1, nrPages);
            return React.createElement("div", null, range.map(page => React.createElement("div", { className: "page", "data-page-num": page, key: page },
                React.createElement("div", { className: "canvasWrapper" },
                    React.createElement("canvas", null)),
                React.createElement("div", { className: "textLayer" }))));
        };
        return (React.createElement("div", { id: "pdf" },
            React.createElement(RenderPages, null)));
    }
}
exports.PDFViewer = PDFViewer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUERGVmlld2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUERGVmlld2VyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBK0I7QUFDL0IsMkRBQXNEO0FBRXRELDREQUErQjtBQUMvQiwyREFBc0Q7QUFFdEQsT0FBTyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsR0FBRyxvQkFBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBRzdELG9CQUFLLENBQUMsbUJBQW1CLENBQUMsU0FBUyxHQUFHLHNEQUFzRCxDQUFDO0FBRTdGLE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU1QixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRyxvQkFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBRXZELE1BQWEsU0FBVSxTQUFRLEtBQUssQ0FBQyxTQUF5QjtJQUcxRCxZQUFZLEtBQWEsRUFBRSxPQUFZO1FBQ25DLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV6QyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBRVosQ0FBQztRQUVGLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFFakQsQ0FBQztJQUVhLFFBQVE7O1lBeUNsQixNQUFNLFdBQVcsR0FBRyxvQkFBSyxDQUFDLFdBQVcsQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO1lBRWpGLE1BQU0sR0FBRyxHQUFHLE1BQU0sV0FBVyxDQUFDLE9BQU8sQ0FBQztZQUV0QyxNQUFNLElBQUksR0FBRyxNQUFNLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFbEMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBQ2QsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDO1lBRWpELE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUE2QixDQUFDO1lBQ2pGLE1BQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQTBCLENBQUM7WUFFckYsSUFBSSxDQUFFLE1BQU0sRUFBRTtnQkFDVixNQUFNLElBQUksS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQ2hDO1lBRUQsSUFBSSxDQUFFLFNBQVMsRUFBRTtnQkFDYixNQUFNLElBQUksS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDO2FBQ25DO1lBRUQsTUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUUsQ0FBQztZQUV6QyxNQUFNLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFDaEMsTUFBTSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBSTlCLE1BQU0sYUFBYSxHQUFHO2dCQUNsQixhQUFhLEVBQUUsT0FBTztnQkFDdEIsUUFBUSxFQUFFLFFBQVE7YUFFckIsQ0FBQztZQUVGLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFL0IsQ0FBQztLQUFBO0lBRU0sTUFBTTtRQUdULE1BQU0sV0FBVyxHQUFHLEdBQUcsRUFBRTtZQUVyQixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUM7WUFDeEMsTUFBTSxLQUFLLEdBQUcsaUJBQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBRXhDLE9BQU8saUNBQ0YsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUNkLDZCQUFLLFNBQVMsRUFBQyxNQUFNLG1CQUFnQixJQUFJLEVBQUUsR0FBRyxFQUFFLElBQUk7Z0JBQ2hELDZCQUFLLFNBQVMsRUFBQyxlQUFlO29CQUMxQixtQ0FBUyxDQUNQO2dCQUNOLDZCQUFLLFNBQVMsRUFBQyxXQUFXLEdBRXBCLENBQ0osQ0FBQyxDQUNULENBQUE7UUFFVixDQUFDLENBQUM7UUFFRixPQUFPLENBRUgsNkJBQUssRUFBRSxFQUFDLEtBQUs7WUFDVCxvQkFBQyxXQUFXLE9BQUUsQ0FDWixDQUVULENBQUM7SUFFTixDQUFDO0NBRUo7QUE5SEQsOEJBOEhDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge1VSTFN0cn0gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvdXRpbC9TdHJpbmdzXCI7XG5pbXBvcnQgUERGSlMgZnJvbSAncGRmanMtZGlzdCc7XG5pbXBvcnQge051bWJlcnN9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL3V0aWwvTnVtYmVyc1wiO1xuXG5jb25zb2xlLmxvZyhcIlJ1bm5pbmcgd2l0aCBwZGYuanMgdmVyc2lvbjogXCIgKyBQREZKUy52ZXJzaW9uKTtcblxuLy8gVE9ETzogSSdtIG5vdCBzdXJlIHRoaXMgaXMgdGhlIHNhZmVzdCB3YXkgdG8gZmluZCB0aGUgd29ya2VyIHBhdGguXG5QREZKUy5HbG9iYWxXb3JrZXJPcHRpb25zLndvcmtlclNyYyA9ICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvcGRmanMtZGlzdC9idWlsZC9wZGYud29ya2VyLmpzJztcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG5jb25zb2xlLmxvZyhcIkZJWE1FOiBcIiwgKFBERkpTIGFzIGFueSkucmVuZGVyVGV4dExheWVyKTtcblxuZXhwb3J0IGNsYXNzIFBERlZpZXdlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgLy8gaHR0cHM6Ly9tb3ppbGxhLmdpdGh1Yi5pby9wZGYuanMvZXhhbXBsZXMvXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcywgY29udGV4dDogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcblxuICAgICAgICB0aGlzLmRvUmVuZGVyID0gdGhpcy5kb1JlbmRlci5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG5cbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmRvUmVuZGVyKCkuY2F0Y2goZXJyID0+IGxvZy5lcnJvcihlcnIpKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgZG9SZW5kZXIoKSB7XG5cbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvcGRmLmpzL3RyZWUvbWFzdGVyL3dlYlxuXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL3BkZi5qcy9ibG9iL21hc3Rlci9zcmMvcGRmLmpzXG5cbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvcGRmLmpzL2Jsb2IvbWFzdGVyL3dlYi92aWV3ZXIuanNcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvcGRmLmpzL2Jsb2IvbWFzdGVyL3dlYi9hcHAuanNcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvcGRmLmpzL2Jsb2IvbWFzdGVyL3dlYi9iYXNlX3ZpZXdlci5qc1xuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9wZGYuanMvYmxvYi9tYXN0ZXIvd2ViL3BkZl9vdXRsaW5lX3ZpZXdlci5qc1xuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9wZGYuanMvYmxvYi9tYXN0ZXIvd2ViL3BkZl90aHVtYm5haWxfdmlld2VyLmpzXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL3BkZi5qcy9ibG9iL21hc3Rlci93ZWIvcGRmX3ZpZXdlci5qc1xuXG4gICAgICAgIC8vIFRPRE86IGRldGVybWluZSB0aGUgcHJpbWFyeSBwYWdlIHRoYXQgdGhlIHVzZXIgaXMgdmlld2luZyBhbmQgb25seSByZW5kZXIgTiArLSAxMCBwYWdlc1xuICAgICAgICAvL1xuICAgICAgICAvLyBGSVhNRTogcmVuZGVyaW5nIHRoZSB0ZXh0IGxheWVyIGlzIFZFUlkgY29uZnVzaW5nIGJ1dCB3ZSBuZWVkIHRvIGRvIGl0LiAgV2hhdCdzIGhhcHBlbmluZ1xuICAgICAgICAvLyBpcyB0aGF0IHRoZXJlJ3MgYSBtaXNzaW5nIHN5bWJvbCBleHBvcnRlZCBJIHRoaW5rIGFzIG5vdCBhbGwgc3ltYm9scyBhcmUgZXhwb3J0ZWQgaW5cbiAgICAgICAgLy8gcGRmLmpzIGJ1dCB0aGUgYXJlbid0IGluIHRoZSB0eXBlc2NyaXB0IGRlZmluaXRpb25zIGFuZCB0aGUgaW50ZXJmYWNlcyBkb24ndCBtYXRjaCB1cC5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gZnVydGhlciwgdGhlIHZpZXdlciBzZWVtcyB0byBiZSBkZXNpZ25lZCBhcm91bmQgdGhlIHBkZmpzIGxpYiBhbmQgdmljZSB2ZXJzYSBzbyBpdCdzIG5vdFxuICAgICAgICAvLyBjbGVhciBob3cgdG8gdXNlIGl0IHByb3Blcmx5LlxuICAgICAgICAvL1xuICAgICAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8zMzA2MzIxMy9wZGYtanMtd2l0aC10ZXh0LXNlbGVjdGlvblxuICAgICAgICAvL1xuICAgICAgICAvLyB0aGlzIGlzIHByb2JhYmx5IHRoZSBjbG9zZXQgd2UgYXJlIGdvaW5nIHRvIGdldCB0byBiZWluZyBhYmxlIHRvIGJ1aWxkIHRoaXMuXG5cbiAgICAgICAgLy8gdGhpcyBpcyB0aGUgYmVzdCBleGFtcGxlIEl0IGhpbmsuXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL3BkZi5qcy9ibG9iL21hc3Rlci9leGFtcGxlcy9jb21wb25lbnRzL3BhZ2V2aWV3ZXIuanMjTDU1XG5cbiAgICAgICAgLy8gVE9ETzogdXNlIHRoZSBzYW1lIENTUyBlbGVtZW50cyBhbmQgY2xhc3Nlc1xuICAgICAgICAvL1xuICAgICAgICAvLyBUT0RPOiBzaWRlYmFyXG4gICAgICAgIC8vXG4gICAgICAgIC8vIFRPRE86IHpvb20gaW4gLyBvdXQgYW5kIHBhZ2Ugd2lkdGggLCBwYWdlIGhlaWdodC5cblxuICAgICAgICAvLyBUT0RPOiBzZWFyY2ggVUkgdG8gc2VhcmNoIHdpdGhpbiB0aGUgZG9jdW1lbnRcblxuICAgICAgICAvLyBUT0RPOiBjZW50ZXIgKyBjaGFuZ2UgcGFnZSBoZWlnaHQgd2hlbiB0aGUgYnJvd3NlciByZWxvYWRzXG5cbiAgICAgICAgLy8gVE9ETzogd2hlbiB0aGUgY29tcG9uZW50IGlzIHVubG9hZGVkIHdlIG5lZWQgdG8gcmVsZWFzZSB0aGUgcmVzb3VyY2VzXG5cbiAgICAgICAgY29uc3QgbG9hZGluZ1Rhc2sgPSBQREZKUy5nZXREb2N1bWVudCgnLi4vLi4vLi4vZG9jcy9leGFtcGxlcy9wZGYvYmlndGFibGUucGRmJyk7XG5cbiAgICAgICAgY29uc3QgcGRmID0gYXdhaXQgbG9hZGluZ1Rhc2sucHJvbWlzZTtcblxuICAgICAgICBjb25zdCBwYWdlID0gYXdhaXQgcGRmLmdldFBhZ2UoMSk7XG5cbiAgICAgICAgdmFyIHNjYWxlID0gMTtcbiAgICAgICAgdmFyIHZpZXdwb3J0ID0gcGFnZS5nZXRWaWV3cG9ydCh7IHNjYWxlOiBzY2FsZX0pO1xuXG4gICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwZGYgY2FudmFzJykgYXMgSFRNTENhbnZhc0VsZW1lbnQgfCBudWxsO1xuICAgICAgICBjb25zdCB0ZXh0TGF5ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGRmIC50ZXh0TGF5ZXInKSBhcyBIVE1MRGl2RWxlbWVudCB8IG51bGw7XG5cbiAgICAgICAgaWYgKCEgY2FudmFzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBjYW52YXNcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoISB0ZXh0TGF5ZXIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHRleHRMYXllclwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKSE7XG5cbiAgICAgICAgY2FudmFzLmhlaWdodCA9IHZpZXdwb3J0LmhlaWdodDtcbiAgICAgICAgY2FudmFzLndpZHRoID0gdmlld3BvcnQud2lkdGg7XG5cbiAgICAgICAgLy8gRklYTUU6IEkgZG9uJ3Qga25vdyBob3cgdGhpcyBzaG91bGQgYmUgaW1wbGVtZW50ZWQuLi4gZG8gSSBuZWVkIGFuIGltYWdlTGF5ZXI/XG5cbiAgICAgICAgY29uc3QgcmVuZGVyQ29udGV4dCA9IHtcbiAgICAgICAgICAgIGNhbnZhc0NvbnRleHQ6IGNvbnRleHQsXG4gICAgICAgICAgICB2aWV3cG9ydDogdmlld3BvcnQsXG4gICAgICAgICAgICAvLyB0ZXh0TGF5ZXJcbiAgICAgICAgfTtcblxuICAgICAgICBwYWdlLnJlbmRlcihyZW5kZXJDb250ZXh0KTtcblxuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cblxuICAgICAgICBjb25zdCBSZW5kZXJQYWdlcyA9ICgpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgbnJQYWdlcyA9IHRoaXMuc3RhdGUubnJQYWdlcyB8fCAxO1xuICAgICAgICAgICAgY29uc3QgcmFuZ2UgPSBOdW1iZXJzLnJhbmdlKDEsIG5yUGFnZXMpO1xuXG4gICAgICAgICAgICByZXR1cm4gPGRpdj5cbiAgICAgICAgICAgICAgICB7cmFuZ2UubWFwKHBhZ2UgPT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlXCIgZGF0YS1wYWdlLW51bT17cGFnZX0ga2V5PXtwYWdlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FudmFzV3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjYW52YXMvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRMYXllclwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+KX1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgPGRpdiBpZD1cInBkZlwiPlxuICAgICAgICAgICAgICAgIDxSZW5kZXJQYWdlcy8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICApO1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVByb3BzIHtcbiAgICByZWFkb25seSBzcmM6IFVSTFN0cjtcbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG4gICAgcmVhZG9ubHkgbnJQYWdlcz86IG51bWJlcjtcbn1cblxuIl19