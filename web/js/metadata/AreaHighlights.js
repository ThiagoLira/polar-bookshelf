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
const Hashcodes_1 = require("polar-shared/src/util/Hashcodes");
const Preconditions_1 = require("polar-shared/src/Preconditions");
const AreaHighlight_1 = require("./AreaHighlight");
const ISODateTimeStrings_1 = require("polar-shared/src/metadata/ISODateTimeStrings");
const Image_1 = require("./Image");
const Images_1 = require("./Images");
const DocMetas_1 = require("./DocMetas");
const Backend_1 = require("polar-shared/src/datastore/Backend");
const ArrayBuffers_1 = require("polar-shared/src/util/ArrayBuffers");
const Attachment_1 = require("./Attachment");
const Logger_1 = require("polar-shared/src/logger/Logger");
const DatastoreFileCache_1 = require("../datastore/DatastoreFileCache");
const Screenshots_1 = require("../screenshots/Screenshots");
const Dimensions_1 = require("../util/Dimensions");
const DocFormatFactory_1 = require("../docformat/DocFormatFactory");
const DataURLs_1 = require("polar-shared/src/util/DataURLs");
const Rects_1 = require("../Rects");
const log = Logger_1.Logger.create();
class AreaHighlights {
    static update(id, docMeta, pageMeta, updates) {
        const existing = pageMeta.areaHighlights[id];
        if (!existing) {
            throw new Error("No existing for id: " + id);
        }
        const updated = new AreaHighlight_1.AreaHighlight(Object.assign(Object.assign({}, existing), updates));
        DocMetas_1.DocMetas.withBatchedMutations(docMeta, () => {
            pageMeta.areaHighlights[id] = updated;
        });
    }
    static toCorrectScale(overlayRect) {
        const docFormat = DocFormatFactory_1.DocFormatFactory.getInstance();
        if (docFormat.name === "pdf") {
            const currentScale = docFormat.currentScale();
            const rescaleFactor = 1 / currentScale;
            overlayRect = Rects_1.Rects.scale(Rects_1.Rects.createFromBasicRect(overlayRect), rescaleFactor);
        }
        return overlayRect;
    }
    static createID(created) {
        return Hashcodes_1.Hashcodes.createID(created);
    }
    static create(opts = {}) {
        Preconditions_1.Preconditions.assertNotNull(opts.rect, "rect");
        const created = ISODateTimeStrings_1.ISODateTimeStrings.create();
        const id = AreaHighlights.createID(created);
        return new AreaHighlight_1.AreaHighlight({
            id,
            guid: id,
            created,
            rects: { "0": opts.rect }
        });
    }
    static doWrite(opts) {
        return __awaiter(this, void 0, void 0, function* () {
            const { datastore, pageNum, pageMeta, docMeta, areaHighlight, boxRect, target, areaHighlightRect } = opts;
            const { pageDimensions } = this.computePageDimensions(pageNum);
            const extractedImage = yield Screenshots_1.Screenshots.capture(pageNum, boxRect, target);
            const overlayRect = areaHighlightRect.toDimensions(pageDimensions);
            const position = {
                x: overlayRect.left,
                y: overlayRect.top,
                width: overlayRect.width,
                height: overlayRect.height,
            };
            const writeOpts = {
                datastore,
                docMeta,
                pageMeta,
                areaHighlight,
                rect: areaHighlightRect,
                position,
                extractedImage
            };
            const writer = AreaHighlights.write(writeOpts);
            const [writtenAreaHighlight, committer] = writer.prepare();
            yield committer.commit();
            return writtenAreaHighlight;
        });
    }
    static computePageDimensions(pageNum) {
        const docFormat = DocFormatFactory_1.DocFormatFactory.getInstance();
        const pageElement = docFormat.getPageElementFromPageNum(pageNum);
        const dimensionsElement = pageElement.querySelector(".canvasWrapper, .iframeWrapper");
        const pageDimensions = new Dimensions_1.Dimensions({
            width: dimensionsElement.clientWidth,
            height: dimensionsElement.clientHeight
        });
        return { pageDimensions, dimensionsElement };
    }
    static write(opts) {
        return new DefaultAreaHighlightWriter(opts);
    }
    static delete(opts) {
        return __awaiter(this, void 0, void 0, function* () {
            const { datastore, docMeta, pageMeta, areaHighlight } = opts;
            const { image } = areaHighlight;
            DocMetas_1.DocMetas.withBatchedMutations(docMeta, () => {
                delete pageMeta.areaHighlights[areaHighlight.id];
                if (image) {
                    delete docMeta.docInfo.attachments[image.id];
                }
            });
            if (image) {
                yield datastore.deleteFile(image.src.backend, image.src);
            }
        });
    }
}
exports.AreaHighlights = AreaHighlights;
class DefaultAreaHighlightWriter {
    constructor(opts) {
        this.opts = opts;
    }
    prepare() {
        const { docMeta, extractedImage, pageMeta, areaHighlight, rect, position } = this.opts;
        const { type, width, height } = extractedImage;
        const id = Images_1.Images.createID();
        const ext = Images_1.Images.toExt(type);
        const fileRef = {
            backend: Backend_1.Backend.IMAGE,
            name: `${id}.${ext}`
        };
        const oldImage = areaHighlight.image;
        const image = new Image_1.Image({
            id, type, width, height,
            rel: 'screenshot',
            src: fileRef,
        });
        const toBlob = () => {
            if (typeof extractedImage.data === 'string') {
                return DataURLs_1.DataURLs.toBlob(extractedImage.data);
            }
            else {
                return ArrayBuffers_1.ArrayBuffers.toBlob(extractedImage.data);
            }
        };
        const blob = toBlob();
        const blobURL = URL.createObjectURL(blob);
        DatastoreFileCache_1.DatastoreFileCache.writeFile(Backend_1.Backend.IMAGE, image.src, {
            url: blobURL
        });
        const result = DocMetas_1.DocMetas.withSkippedMutations(docMeta, () => {
            if (areaHighlight.image) {
                delete docMeta.docInfo.attachments[areaHighlight.image.id];
            }
            docMeta.docInfo.attachments[image.id] = new Attachment_1.Attachment({ fileRef });
            const rects = {};
            rects["0"] = rect;
            const newAreaHighlight = new AreaHighlight_1.AreaHighlight(Object.assign(Object.assign({}, areaHighlight), { image,
                rects,
                position, lastUpdated: ISODateTimeStrings_1.ISODateTimeStrings.create() }));
            delete pageMeta.areaHighlights[areaHighlight.id];
            pageMeta.areaHighlights[newAreaHighlight.id] = newAreaHighlight;
            return newAreaHighlight;
        });
        const committer = new DefaultAreaHighlightCommitter(this.opts, image, blob, oldImage);
        return [result, committer];
    }
}
class DefaultAreaHighlightCommitter {
    constructor(opts, image, blob, oldImage) {
        this.opts = opts;
        this.image = image;
        this.blob = blob;
        this.oldImage = oldImage;
    }
    commit() {
        return __awaiter(this, void 0, void 0, function* () {
            const { datastore, docMeta } = this.opts;
            const { image, oldImage, blob } = this;
            yield datastore.writeFile(image.src.backend, image.src, blob);
            DocMetas_1.DocMetas.forceWrite(docMeta);
            if (oldImage) {
                datastore.deleteFile(oldImage.src.backend, oldImage.src)
                    .catch(err => log.error("Unable to delete old image: ", err, oldImage));
            }
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXJlYUhpZ2hsaWdodHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJBcmVhSGlnaGxpZ2h0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLCtEQUEwRDtBQUMxRCxrRUFBNkQ7QUFDN0QsbURBQThDO0FBQzlDLHFGQUFtRztBQUVuRyxtQ0FBOEI7QUFHOUIscUNBQWdDO0FBQ2hDLHlDQUFvQztBQUNwQyxnRUFBMkQ7QUFDM0QscUVBQWdFO0FBQ2hFLDZDQUF3QztBQUN4QywyREFBc0Q7QUFJdEQsd0VBQW1FO0FBRW5FLDREQUF1RDtBQUN2RCxtREFBOEM7QUFDOUMsb0VBQStEO0FBRS9ELDZEQUF3RDtBQUV4RCxvQ0FBK0I7QUFPL0IsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLE1BQWEsY0FBYztJQUVoQixNQUFNLENBQUMsTUFBTSxDQUFDLEVBQVUsRUFDVixPQUFpQixFQUNqQixRQUFtQixFQUNuQixPQUFnQztRQUVqRCxNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBRSxDQUFDO1FBRTlDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDWCxNQUFNLElBQUksS0FBSyxDQUFDLHNCQUFzQixHQUFHLEVBQUUsQ0FBQyxDQUFDO1NBQ2hEO1FBRUQsTUFBTSxPQUFPLEdBQUcsSUFBSSw2QkFBYSxpQ0FBSyxRQUFRLEdBQUssT0FBTyxFQUFFLENBQUM7UUFFN0QsbUJBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO1lBRXhDLFFBQVEsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDO1FBQzFDLENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQztJQUVNLE1BQU0sQ0FBQyxjQUFjLENBQUMsV0FBaUI7UUFFMUMsTUFBTSxTQUFTLEdBQUcsbUNBQWdCLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFakQsSUFBSSxTQUFTLENB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TTs7WUFFZixNQUFNLEVBQUMsU0FBUyxFQUFFLE9BQU8sRUFBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDdkMsTUFBTSxFQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFDLEdBQUcsSUFBSSxDQUFDO1lBRXJDLE1BQU0sU0FBUyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBSTlELG1CQUFRLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRTdCLElBQUksUUFBUSxFQUFFO2dCQUNWLFNBQVMsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQztxQkFDbkQsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyw4QkFBOEIsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQzthQUMvRTtRQUVMLENBQUM7S0FBQTtDQUVKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIYXNoY29kZXN9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC9IYXNoY29kZXMnO1xuaW1wb3J0IHtQcmVjb25kaXRpb25zfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL1ByZWNvbmRpdGlvbnMnO1xuaW1wb3J0IHtBcmVhSGlnaGxpZ2h0fSBmcm9tICcuL0FyZWFIaWdobGlnaHQnO1xuaW1wb3J0IHtJU09EYXRlVGltZVN0cmluZywgSVNPRGF0ZVRpbWVTdHJpbmdzfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL21ldGFkYXRhL0lTT0RhdGVUaW1lU3RyaW5ncyc7XG5pbXBvcnQge0RvY01ldGF9IGZyb20gJy4vRG9jTWV0YSc7XG5pbXBvcnQge0ltYWdlfSBmcm9tICcuL0ltYWdlJztcbmltcG9ydCB7RGF0YXN0b3JlfSBmcm9tICcuLi9kYXRhc3RvcmUvRGF0YXN0b3JlJztcbmltcG9ydCB7UGVyc2lzdGVuY2VMYXllcn0gZnJvbSAnLi4vZGF0YXN0b3JlL1BlcnNpc3RlbmNlTGF5ZXInO1xuaW1wb3J0IHtJbWFnZXN9IGZyb20gJy4vSW1hZ2VzJztcbmltcG9ydCB7RG9jTWV0YXN9IGZyb20gJy4vRG9jTWV0YXMnO1xuaW1wb3J0IHtCYWNrZW5kfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL2RhdGFzdG9yZS9CYWNrZW5kJztcbmltcG9ydCB7QXJyYXlCdWZmZXJzfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvQXJyYXlCdWZmZXJzJztcbmltcG9ydCB7QXR0YWNobWVudH0gZnJvbSAnLi9BdHRhY2htZW50JztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL2xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IHtQYWdlTWV0YX0gZnJvbSAnLi9QYWdlTWV0YSc7XG5pbXBvcnQge0FyZWFIaWdobGlnaHRSZWN0fSBmcm9tICcuL0FyZWFIaWdobGlnaHRSZWN0JztcbmltcG9ydCB7SGlnaGxpZ2h0UmVjdHMsIFBvc2l0aW9ufSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy9tZXRhZGF0YS9JQmFzZUhpZ2hsaWdodFwiO1xuaW1wb3J0IHtEYXRhc3RvcmVGaWxlQ2FjaGV9IGZyb20gJy4uL2RhdGFzdG9yZS9EYXRhc3RvcmVGaWxlQ2FjaGUnO1xuaW1wb3J0IHtFeHRyYWN0ZWRJbWFnZX0gZnJvbSAnLi4vc2NyZWVuc2hvdHMvU2NyZWVuc2hvdCc7XG5pbXBvcnQge1NjcmVlbnNob3RzfSBmcm9tICcuLi9zY3JlZW5zaG90cy9TY3JlZW5zaG90cyc7XG5pbXBvcnQge0RpbWVuc2lvbnN9IGZyb20gJy4uL3V0aWwvRGltZW5zaW9ucyc7XG5pbXBvcnQge0RvY0Zvcm1hdEZhY3Rvcnl9IGZyb20gJy4uL2RvY2Zvcm1hdC9Eb2NGb3JtYXRGYWN0b3J5JztcbmltcG9ydCB7SUxUUmVjdH0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL3JlY3RzL0lMVFJlY3QnO1xuaW1wb3J0IHtEYXRhVVJMc30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL0RhdGFVUkxzJztcbmltcG9ydCB7UmVjdH0gZnJvbSAnLi4vUmVjdCc7XG5pbXBvcnQge1JlY3RzfSBmcm9tICcuLi9SZWN0cyc7XG5pbXBvcnQge0lQYWdlTWV0YX0gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvbWV0YWRhdGEvSVBhZ2VNZXRhXCI7XG5pbXBvcnQge0lEb2NNZXRhfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy9tZXRhZGF0YS9JRG9jTWV0YVwiO1xuaW1wb3J0IHtJQXJlYUhpZ2hsaWdodH0gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvbWV0YWRhdGEvSUFyZWFIaWdobGlnaHRcIjtcbmltcG9ydCB7SUltYWdlfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy9tZXRhZGF0YS9JSW1hZ2VcIjtcbmltcG9ydCB7QmFja2VuZEZpbGVSZWZ9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL2RhdGFzdG9yZS9CYWNrZW5kRmlsZVJlZlwiO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbmV4cG9ydCBjbGFzcyBBcmVhSGlnaGxpZ2h0cyB7XG5cbiAgICBwdWJsaWMgc3RhdGljIHVwZGF0ZShpZDogc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgIGRvY01ldGE6IElEb2NNZXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VNZXRhOiBJUGFnZU1ldGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlczogUGFydGlhbDxJQXJlYUhpZ2hsaWdodD4pIHtcblxuICAgICAgICBjb25zdCBleGlzdGluZyA9IHBhZ2VNZXRhLmFyZWFIaWdobGlnaHRzW2lkXSE7XG5cbiAgICAgICAgaWYgKCFleGlzdGluZykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gZXhpc3RpbmcgZm9yIGlkOiBcIiArIGlkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHVwZGF0ZWQgPSBuZXcgQXJlYUhpZ2hsaWdodCh7Li4uZXhpc3RpbmcsIC4uLnVwZGF0ZXN9KTtcblxuICAgICAgICBEb2NNZXRhcy53aXRoQmF0Y2hlZE11dGF0aW9ucyhkb2NNZXRhLCAoKSA9PiB7XG4gICAgICAgICAgICAvLyBkZWxldGUgcGFnZU1ldGEuYXJlYUhpZ2hsaWdodHNbaWRdO1xuICAgICAgICAgICAgcGFnZU1ldGEuYXJlYUhpZ2hsaWdodHNbaWRdID0gdXBkYXRlZDtcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHRvQ29ycmVjdFNjYWxlKG92ZXJsYXlSZWN0OiBSZWN0KSB7XG5cbiAgICAgICAgY29uc3QgZG9jRm9ybWF0ID0gRG9jRm9ybWF0RmFjdG9yeS5nZXRJbnN0YW5jZSgpO1xuXG4gICAgICAgIGlmIChkb2NGb3JtYXQubmFtZSA9PT0gXCJwZGZcIikge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFNjYWxlID0gZG9jRm9ybWF0LmN1cnJlbnRTY2FsZSgpO1xuXG4gICAgICAgICAgICAvLyB3ZSBoYXZlIHRvIHNjYWxlIHRoZXNlIG51bWJlciBCQUNLIHRvIHRoZWlyIG9yaWdpbmFsXG4gICAgICAgICAgICAvLyBwb3NpdGlvbnMgYXQgMTAwJVxuXG4gICAgICAgICAgICBjb25zdCByZXNjYWxlRmFjdG9yID0gMSAvIGN1cnJlbnRTY2FsZTtcblxuICAgICAgICAgICAgb3ZlcmxheVJlY3QgPSBSZWN0cy5zY2FsZShSZWN0cy5jcmVhdGVGcm9tQmFzaWNSZWN0KG92ZXJsYXlSZWN0KSwgcmVzY2FsZUZhY3Rvcik7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvdmVybGF5UmVjdDtcblxuXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGVJRChjcmVhdGVkOiBJU09EYXRlVGltZVN0cmluZykge1xuICAgICAgICAvLyBUT0RPOiB0aGlzIG5lZWRzIHNvbWUgdW5pcXVlIGRhdGEgYW5kIHJhbmRvbSBpcyBwcm9iYWJseSBmaW5kLlxuICAgICAgICByZXR1cm4gSGFzaGNvZGVzLmNyZWF0ZUlEKGNyZWF0ZWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBwYWdlbWFyayB3aXRoIHRoZSBjcmVhdGVkIHRpbWUsIGFuZCBvdGhlciBtYW5kYXRvcnkgZmllbGRzXG4gICAgICogYWRkZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gb3B0c1xuICAgICAqIEByZXR1cm4ge0FyZWFIaWdobGlnaHR9XG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGUob3B0czogSUFyZWFIaWdobGlnaHRPcHRzID0ge30pIHtcblxuICAgICAgICBQcmVjb25kaXRpb25zLmFzc2VydE5vdE51bGwob3B0cy5yZWN0LCBcInJlY3RcIik7XG5cbiAgICAgICAgY29uc3QgY3JlYXRlZCA9IElTT0RhdGVUaW1lU3RyaW5ncy5jcmVhdGUoKTtcblxuICAgICAgICBjb25zdCBpZCA9IEFyZWFIaWdobGlnaHRzLmNyZWF0ZUlEKGNyZWF0ZWQpO1xuICAgICAgICByZXR1cm4gbmV3IEFyZWFIaWdobGlnaHQoe1xuXG4gICAgICAgICAgICAvLyBwZXItcGFnZW1hcmsgZmllbGRzLlxuICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICBndWlkOiBpZCxcblxuICAgICAgICAgICAgY3JlYXRlZCxcblxuICAgICAgICAgICAgLy8gdGhlcmUgaXMgb25seSBvbmUgcmVjdCBmb3IgYW4gYXJlYSBoaWdobGlnaHQuXG4gICAgICAgICAgICByZWN0czogeyBcIjBcIjogb3B0cy5yZWN0IH1cblxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgZG9Xcml0ZShvcHRzOiBEb1dyaXRlT3B0cyk6IFByb21pc2U8QXJlYUhpZ2hsaWdodD4ge1xuXG4gICAgICAgIGNvbnN0IHtkYXRhc3RvcmUsIHBhZ2VOdW0sIHBhZ2VNZXRhLCBkb2NNZXRhLFxuICAgICAgICAgICAgICAgYXJlYUhpZ2hsaWdodCwgYm94UmVjdCwgdGFyZ2V0LFxuICAgICAgICAgICAgICAgYXJlYUhpZ2hsaWdodFJlY3R9ID0gb3B0cztcblxuICAgICAgICBjb25zdCB7cGFnZURpbWVuc2lvbnN9ID0gdGhpcy5jb21wdXRlUGFnZURpbWVuc2lvbnMocGFnZU51bSk7XG5cbiAgICAgICAgLy8gVE9ETzogdGhpcyBpcyBhIHByb2JsZW0gYmVjYXVzZSB0aGUgYXJlYSBoaWdobGlnaHQgaXNuJ3QgY3JlYXRlZFxuICAgICAgICAvLyB1bnRpbCB3ZSBtdXRhdGUgaXQgaW4gdGhlIEpTT04uLlxuICAgICAgICBjb25zdCBleHRyYWN0ZWRJbWFnZVxuICAgICAgICAgICAgPSBhd2FpdCBTY3JlZW5zaG90cy5jYXB0dXJlKHBhZ2VOdW0sIGJveFJlY3QsIHRhcmdldCk7XG5cbiAgICAgICAgY29uc3Qgb3ZlcmxheVJlY3QgPSBhcmVhSGlnaGxpZ2h0UmVjdC50b0RpbWVuc2lvbnMocGFnZURpbWVuc2lvbnMpO1xuXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uOiBQb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHg6IG92ZXJsYXlSZWN0LmxlZnQsXG4gICAgICAgICAgICB5OiBvdmVybGF5UmVjdC50b3AsXG4gICAgICAgICAgICB3aWR0aDogb3ZlcmxheVJlY3Qud2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IG92ZXJsYXlSZWN0LmhlaWdodCxcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCB3cml0ZU9wdHM6IEFyZWFIaWdobGlnaHRXcml0ZU9wdHMgPSB7XG4gICAgICAgICAgICBkYXRhc3RvcmUsXG4gICAgICAgICAgICBkb2NNZXRhLFxuICAgICAgICAgICAgcGFnZU1ldGEsXG4gICAgICAgICAgICBhcmVhSGlnaGxpZ2h0LFxuICAgICAgICAgICAgcmVjdDogYXJlYUhpZ2hsaWdodFJlY3QsXG4gICAgICAgICAgICBwb3NpdGlvbixcbiAgICAgICAgICAgIGV4dHJhY3RlZEltYWdlXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3Qgd3JpdGVyID0gQXJlYUhpZ2hsaWdodHMud3JpdGUod3JpdGVPcHRzKTtcblxuICAgICAgICBjb25zdCBbd3JpdHRlbkFyZWFIaWdobGlnaHQsIGNvbW1pdHRlcl0gPSB3cml0ZXIucHJlcGFyZSgpO1xuXG4gICAgICAgIGF3YWl0IGNvbW1pdHRlci5jb21taXQoKTtcblxuICAgICAgICByZXR1cm4gd3JpdHRlbkFyZWFIaWdobGlnaHQ7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBjb21wdXRlUGFnZURpbWVuc2lvbnMocGFnZU51bTogbnVtYmVyKTogUGFnZURpbWVuc2lvbnMge1xuXG4gICAgICAgIGNvbnN0IGRvY0Zvcm1hdCA9IERvY0Zvcm1hdEZhY3RvcnkuZ2V0SW5zdGFuY2UoKTtcblxuICAgICAgICBjb25zdCBwYWdlRWxlbWVudCA9IGRvY0Zvcm1hdC5nZXRQYWdlRWxlbWVudEZyb21QYWdlTnVtKHBhZ2VOdW0pO1xuXG4gICAgICAgIGNvbnN0IGRpbWVuc2lvbnNFbGVtZW50XG4gICAgICAgICAgICA9IDxIVE1MRWxlbWVudD4gcGFnZUVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYW52YXNXcmFwcGVyLCAuaWZyYW1lV3JhcHBlclwiKSE7XG5cbiAgICAgICAgY29uc3QgcGFnZURpbWVuc2lvbnMgPSBuZXcgRGltZW5zaW9ucyh7XG4gICAgICAgICAgICB3aWR0aDogZGltZW5zaW9uc0VsZW1lbnQuY2xpZW50V2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IGRpbWVuc2lvbnNFbGVtZW50LmNsaWVudEhlaWdodFxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4ge3BhZ2VEaW1lbnNpb25zLCBkaW1lbnNpb25zRWxlbWVudH07XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHdyaXRlKG9wdHM6IEFyZWFIaWdobGlnaHRXcml0ZU9wdHMpOiBBcmVhSGlnaGxpZ2h0V3JpdGVyIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEZWZhdWx0QXJlYUhpZ2hsaWdodFdyaXRlcihvcHRzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGRlbGV0ZShvcHRzOiBBcmVhSGlnaGxpZ2h0RGVsZXRlT3B0cykge1xuXG4gICAgICAgIGNvbnN0IHtkYXRhc3RvcmUsIGRvY01ldGEsIHBhZ2VNZXRhLCBhcmVhSGlnaGxpZ2h0fSA9IG9wdHM7XG4gICAgICAgIGNvbnN0IHtpbWFnZX0gPSBhcmVhSGlnaGxpZ2h0O1xuXG4gICAgICAgIERvY01ldGFzLndpdGhCYXRjaGVkTXV0YXRpb25zKGRvY01ldGEsICgpID0+IHtcblxuICAgICAgICAgICAgZGVsZXRlIHBhZ2VNZXRhLmFyZWFIaWdobGlnaHRzW2FyZWFIaWdobGlnaHQuaWRdO1xuXG4gICAgICAgICAgICBpZiAoaW1hZ2UpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgZG9jTWV0YS5kb2NJbmZvLmF0dGFjaG1lbnRzW2ltYWdlLmlkXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoaW1hZ2UpIHtcbiAgICAgICAgICAgIGF3YWl0IGRhdGFzdG9yZS5kZWxldGVGaWxlKGltYWdlLnNyYy5iYWNrZW5kLCBpbWFnZS5zcmMpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbn1cblxuaW50ZXJmYWNlIFBhZ2VEaW1lbnNpb25zIHtcbiAgICByZWFkb25seSBwYWdlRGltZW5zaW9uczogRGltZW5zaW9ucztcbiAgICByZWFkb25seSBkaW1lbnNpb25zRWxlbWVudDogSFRNTEVsZW1lbnQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRG9Xcml0ZU9wdHMge1xuICAgIHJlYWRvbmx5IGRhdGFzdG9yZTogRGF0YXN0b3JlIHwgUGVyc2lzdGVuY2VMYXllcjtcbiAgICByZWFkb25seSBkb2NNZXRhOiBJRG9jTWV0YTtcbiAgICByZWFkb25seSBwYWdlTWV0YTogSVBhZ2VNZXRhO1xuICAgIHJlYWRvbmx5IHBhZ2VOdW06IG51bWJlcjtcbiAgICByZWFkb25seSBhcmVhSGlnaGxpZ2h0OiBBcmVhSGlnaGxpZ2h0O1xuICAgIHJlYWRvbmx5IHRhcmdldDogSFRNTEVsZW1lbnQ7XG4gICAgcmVhZG9ubHkgYXJlYUhpZ2hsaWdodFJlY3Q6IEFyZWFIaWdobGlnaHRSZWN0O1xuICAgIHJlYWRvbmx5IGJveFJlY3Q6IElMVFJlY3Q7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXJlYUhpZ2hsaWdodERlbGV0ZU9wdHMge1xuICAgIHJlYWRvbmx5IGRhdGFzdG9yZTogRGF0YXN0b3JlIHwgUGVyc2lzdGVuY2VMYXllcjtcbiAgICByZWFkb25seSBkb2NNZXRhOiBJRG9jTWV0YTtcbiAgICByZWFkb25seSBwYWdlTWV0YTogSVBhZ2VNZXRhO1xuICAgIHJlYWRvbmx5IGFyZWFIaWdobGlnaHQ6IElBcmVhSGlnaGxpZ2h0O1xuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXJlYUhpZ2hsaWdodFdyaXRlT3B0cyB7XG4gICAgcmVhZG9ubHkgZGF0YXN0b3JlOiBEYXRhc3RvcmUgfCBQZXJzaXN0ZW5jZUxheWVyO1xuICAgIHJlYWRvbmx5IGRvY01ldGE6IElEb2NNZXRhO1xuICAgIHJlYWRvbmx5IHBhZ2VNZXRhOiBJUGFnZU1ldGE7XG4gICAgcmVhZG9ubHkgYXJlYUhpZ2hsaWdodDogSUFyZWFIaWdobGlnaHQ7XG4gICAgcmVhZG9ubHkgcmVjdDogQXJlYUhpZ2hsaWdodFJlY3Q7XG4gICAgcmVhZG9ubHkgcG9zaXRpb246IFBvc2l0aW9uO1xuICAgIHJlYWRvbmx5IGV4dHJhY3RlZEltYWdlOiBFeHRyYWN0ZWRJbWFnZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcmVhSGlnaGxpZ2h0V3JpdGVyIHtcblxuICAgIHByZXBhcmUoKTogW0FyZWFIaWdobGlnaHQsIEFyZWFIaWdobGlnaHRDb21taXR0ZXJdO1xuXG59XG5cbmNsYXNzIERlZmF1bHRBcmVhSGlnaGxpZ2h0V3JpdGVyIGltcGxlbWVudHMgQXJlYUhpZ2hsaWdodFdyaXRlciB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IG9wdHM6IEFyZWFIaWdobGlnaHRXcml0ZU9wdHMpIHtcbiAgICB9XG5cbiAgICBwdWJsaWMgcHJlcGFyZSgpOiBbQXJlYUhpZ2hsaWdodCwgQXJlYUhpZ2hsaWdodENvbW1pdHRlcl0ge1xuXG4gICAgICAgIGNvbnN0IHtkb2NNZXRhLCBleHRyYWN0ZWRJbWFnZSwgcGFnZU1ldGEsIGFyZWFIaWdobGlnaHQsIHJlY3QsIHBvc2l0aW9ufSA9IHRoaXMub3B0cztcblxuICAgICAgICBjb25zdCB7dHlwZSwgd2lkdGgsIGhlaWdodH0gPSBleHRyYWN0ZWRJbWFnZTtcblxuICAgICAgICBjb25zdCBpZCA9IEltYWdlcy5jcmVhdGVJRCgpO1xuICAgICAgICBjb25zdCBleHQgPSBJbWFnZXMudG9FeHQodHlwZSk7XG5cbiAgICAgICAgY29uc3QgZmlsZVJlZjogQmFja2VuZEZpbGVSZWYgPSB7XG4gICAgICAgICAgICAvLyBUT0RPOiBhZGQgdGhlIGRhdGEgaGFzaGNvZGVcbiAgICAgICAgICAgIGJhY2tlbmQ6IEJhY2tlbmQuSU1BR0UsXG4gICAgICAgICAgICBuYW1lOiBgJHtpZH0uJHtleHR9YFxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIFdBUk46IFRIRSBPUEVSQVRJT05TIEhFUkUgQVJFIE9SREVSRUQgRk9SIFNBRkVUWVxuICAgICAgICAvL1xuICAgICAgICAvLyBUaGV5IE1VU1QgZ28gaW4gdGhlIGZvbGxvd2luZyBtYW5uZXI6XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAtIHdyaXRlIG91dCB0aGUgbWV0YWRhdGEgdG8gbWVtb3J5IHdpdGhvdXQgd3JpdGluZyB0byB0aGUgZGF0YXN0b3JlXG4gICAgICAgIC8vXG4gICAgICAgIC8vICAtIHdyaXRlIHRoZSBuZXcgZmlsZVxuICAgICAgICAvL1xuICAgICAgICAvLyAgLSB3cml0ZSB0aGUgbmV3IERvY01ldGEgdG8gdGhlIGRhdGFzdG9yZVxuICAgICAgICAvL1xuICAgICAgICAvLyAgLSBkZWxldGUgdGhlIG9sZCBmaWxlICh0aGlzIGRvZXMgbm90IG5lZWQgdG8gYmxvY2spXG4gICAgICAgIC8vXG4gICAgICAgIC8vICBUaGlzIENBTiBsaXZlIGEgZGFuZ2xpbmcgb2xkZXIgZmlsZSBpZiB0aGUgd3JpdGUgaXMgYWJvcnRlZCBvciB0aGVcbiAgICAgICAgLy8gIGNsaWVudCBjcmFzaGVzIGJ1dCB0aGlzIGlzIHByb2JhYmx5IHJhcmUuICBJdCBjb3VsZCBBTFNPIGxlYXZlIGEgTkVXXG4gICAgICAgIC8vICBmaWxlIGluIHBsYWNlIGJ1dCBpdCB3b24ndCBsZWF2ZSBpbmNvbnNpc3RlbnQvYnJva2VuIGRhdGEgZnJvbSBhXG4gICAgICAgIC8vICB1c2VyIHBlcnNwZWN0aXZlLlxuICAgICAgICAvL1xuICAgICAgICAvLyAgVGhlIG9ubHkgd2F5IGFyb3VuZCB0aGUgZGFuZ2luZyBiaW5hcnkgZmlsZSBpc3N1ZSBtaWdodCBiZSBzb21lIHNvcnRcbiAgICAgICAgLy8gIG9mICd0YWcnIG9wZXJhdGlvbiB3aGVyZSB3ZSB3cml0ZSB0aGUgZmlsZXMgZGVsZXRhYmxlIGJlZm9yZSB3ZVxuICAgICAgICAvLyAgZGVsZXRlIHRoZW0uXG5cbiAgICAgICAgY29uc3Qgb2xkSW1hZ2UgPSBhcmVhSGlnaGxpZ2h0LmltYWdlO1xuXG4gICAgICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKHtcbiAgICAgICAgICAgIGlkLCB0eXBlLCB3aWR0aCwgaGVpZ2h0LFxuICAgICAgICAgICAgcmVsOiAnc2NyZWVuc2hvdCcsXG4gICAgICAgICAgICBzcmM6IGZpbGVSZWYsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHRvQmxvYiA9ICgpID0+IHtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBleHRyYWN0ZWRJbWFnZS5kYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBEYXRhVVJMcy50b0Jsb2IoZXh0cmFjdGVkSW1hZ2UuZGF0YSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBBcnJheUJ1ZmZlcnMudG9CbG9iKGV4dHJhY3RlZEltYWdlLmRhdGEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgYmxvYiA9IHRvQmxvYigpO1xuXG4gICAgICAgIGNvbnN0IGJsb2JVUkwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG4gICAgICAgIERhdGFzdG9yZUZpbGVDYWNoZS53cml0ZUZpbGUoQmFja2VuZC5JTUFHRSwgaW1hZ2Uuc3JjLCB7XG4gICAgICAgICAgICB1cmw6IGJsb2JVUkxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gdXBkYXRlIHRoZSBEb2NNZXRhIGJ1dCBkb24ndCB3cml0ZSB5ZXQuICBXZSBoYXZlIHRvIG1ha2Ugc3VyZSB0aGVcbiAgICAgICAgLy8gd3JpdGUgb2YgdGhlIGltYWdlIG1hZGUgdG8gdGhlIGRhdGFzdG9yZSBmaXJzdC5cblxuICAgICAgICBjb25zdCByZXN1bHQgPSBEb2NNZXRhcy53aXRoU2tpcHBlZE11dGF0aW9ucyhkb2NNZXRhLCAoKSA9PiB7XG5cbiAgICAgICAgICAgIGlmIChhcmVhSGlnaGxpZ2h0LmltYWdlKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIGRvY01ldGEuZG9jSW5mby5hdHRhY2htZW50c1thcmVhSGlnaGxpZ2h0LmltYWdlLmlkXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZG9jTWV0YS5kb2NJbmZvLmF0dGFjaG1lbnRzW2ltYWdlLmlkXSA9IG5ldyBBdHRhY2htZW50KHtmaWxlUmVmfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHJlY3RzOiBIaWdobGlnaHRSZWN0cyA9IHt9O1xuICAgICAgICAgICAgcmVjdHNbXCIwXCJdID0gPGFueT4gcmVjdDtcblxuICAgICAgICAgICAgY29uc3QgbmV3QXJlYUhpZ2hsaWdodCA9ICBuZXcgQXJlYUhpZ2hsaWdodCh7XG4gICAgICAgICAgICAgICAgLi4uYXJlYUhpZ2hsaWdodCxcbiAgICAgICAgICAgICAgICBpbWFnZSxcbiAgICAgICAgICAgICAgICByZWN0cyxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbixcbiAgICAgICAgICAgICAgICBsYXN0VXBkYXRlZDogSVNPRGF0ZVRpbWVTdHJpbmdzLmNyZWF0ZSgpXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gaXQncyBpbXBvcnRhbnQgdGhhdCB3ZSBkZWxldGUgZmlyc3Qgc28gdGhhdCB0aGUgQUJTRU5UIGV2ZW50IGlzXG4gICAgICAgICAgICAvLyBmaXJlZFxuICAgICAgICAgICAgZGVsZXRlIHBhZ2VNZXRhLmFyZWFIaWdobGlnaHRzW2FyZWFIaWdobGlnaHQuaWRdO1xuXG4gICAgICAgICAgICBwYWdlTWV0YS5hcmVhSGlnaGxpZ2h0c1tuZXdBcmVhSGlnaGxpZ2h0LmlkXSA9IG5ld0FyZWFIaWdobGlnaHQhO1xuXG4gICAgICAgICAgICByZXR1cm4gbmV3QXJlYUhpZ2hsaWdodDtcblxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBjb21taXR0ZXIgPSBuZXcgRGVmYXVsdEFyZWFIaWdobGlnaHRDb21taXR0ZXIodGhpcy5vcHRzLCBpbWFnZSwgYmxvYiwgb2xkSW1hZ2UpO1xuXG4gICAgICAgIHJldHVybiBbcmVzdWx0LCBjb21taXR0ZXJdO1xuXG4gICAgfVxuXG59XG5cblxuZXhwb3J0IGludGVyZmFjZSBBcmVhSGlnaGxpZ2h0Q29tbWl0dGVyIHtcblxuICAgIGNvbW1pdCgpOiBQcm9taXNlPHZvaWQ+O1xuXG59XG5cbmNsYXNzIERlZmF1bHRBcmVhSGlnaGxpZ2h0Q29tbWl0dGVyIGltcGxlbWVudHMgQXJlYUhpZ2hsaWdodENvbW1pdHRlciB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IG9wdHM6IEFyZWFIaWdobGlnaHRXcml0ZU9wdHMsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByZWFkb25seSBpbWFnZTogSW1hZ2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByZWFkb25seSBibG9iOiBCbG9iLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcmVhZG9ubHkgb2xkSW1hZ2U6IElJbWFnZSB8IHVuZGVmaW5lZCkge1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBjb21taXQoKTogUHJvbWlzZTx2b2lkPiB7XG5cbiAgICAgICAgY29uc3Qge2RhdGFzdG9yZSwgZG9jTWV0YX0gPSB0aGlzLm9wdHM7XG4gICAgICAgIGNvbnN0IHtpbWFnZSwgb2xkSW1hZ2UsIGJsb2J9ID0gdGhpcztcblxuICAgICAgICBhd2FpdCBkYXRhc3RvcmUud3JpdGVGaWxlKGltYWdlLnNyYy5iYWNrZW5kLCBpbWFnZS5zcmMsIGJsb2IpO1xuXG4gICAgICAgIC8vIG5vdyBmb3JjZSBhIHdyaXRlIG9mIGFsbCB0aGUgZGF0YSBhbmQgdGhlIGN1cnJlbnQgaW4gbWVtb3J5IHZlcnNpb25cbiAgICAgICAgLy8gd2lsbCBiZSB3cml0dGVuIGluY2x1ZGluZyB0aGUgYWJvdmUgc2tpcHBlZCBtdXRhdGlvbi5cbiAgICAgICAgRG9jTWV0YXMuZm9yY2VXcml0ZShkb2NNZXRhKTtcblxuICAgICAgICBpZiAob2xkSW1hZ2UpIHtcbiAgICAgICAgICAgIGRhdGFzdG9yZS5kZWxldGVGaWxlKG9sZEltYWdlLnNyYy5iYWNrZW5kLCBvbGRJbWFnZS5zcmMpXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBsb2cuZXJyb3IoXCJVbmFibGUgdG8gZGVsZXRlIG9sZCBpbWFnZTogXCIsIGVyciwgb2xkSW1hZ2UpKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG59XG5cbmludGVyZmFjZSBJQXJlYUhpZ2hsaWdodE9wdHMge1xuICAgIHJlYWRvbmx5IHJlY3Q/OiBhbnk7XG59XG4iXX0=