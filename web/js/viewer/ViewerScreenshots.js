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
const Screenshots_1 = require("../screenshots/Screenshots");
const Optional_1 = require("polar-shared/src/util/ts/Optional");
const Canvases_1 = require("polar-shared/src/util/Canvases");
const DataURLs_1 = require("polar-shared/src/util/DataURLs");
const ArrayBuffers_1 = require("polar-shared/src/util/ArrayBuffers");
const Hashcodes_1 = require("polar-shared/src/util/Hashcodes");
const Backend_1 = require("polar-shared/src/datastore/Backend");
const ISODateTimeStrings_1 = require("polar-shared/src/metadata/ISODateTimeStrings");
const Logger_1 = require("polar-shared/src/logger/Logger");
const DocMetas_1 = require("../metadata/DocMetas");
const Preconditions_1 = require("polar-shared/src/Preconditions");
const log = Logger_1.Logger.create();
const DISABLED = true;
const CROP_WIDTH = 300;
const CROP_HEIGHT = Math.floor(CROP_WIDTH / (850 / 1100));
class ViewerScreenshots {
    static documentDimensions() {
        const viewerContainer = Optional_1.Optional.of(document.querySelector("#viewerContainer"));
        const width = viewerContainer.map(current => current.clientWidth).getOrElse(0);
        const height = viewerContainer.map(current => current.clientHeight).getOrElse(0);
        return { width, height };
    }
    static supportsScreenshot(docMeta) {
        for (const pageMeta of Object.values(docMeta.pageMetas)) {
            if (pageMeta.pagemarks && Object.keys(pageMeta.pagemarks).length > 0) {
                return false;
            }
        }
        if (!docMeta.docInfo.added) {
            return false;
        }
        return true;
    }
    static hasThumbnail(model) {
        const docMeta = model.docMeta;
        return docMeta.docInfo.thumbnails !== undefined && Preconditions_1.isPresent(docMeta.docInfo.thumbnails['default']);
    }
    static doScreenshot(model) {
        if (DISABLED) {
            return;
        }
        if (!this.supportsScreenshot(model.docMeta)) {
            log.info("This document doesn't support screenshots");
            return;
        }
        if (this.hasThumbnail(model)) {
            log.info("We already have a thumbnail");
            return;
        }
        const handler = () => __awaiter(this, void 0, void 0, function* () {
            const thumbnailResizedImage = yield this.createThumbnail();
            yield this.writeThumbnail(thumbnailResizedImage, model);
        });
        handler().catch(err => log.error("Unable to capture screenshot", err));
    }
    static writeThumbnail(thumbnailResizedImage, model) {
        return __awaiter(this, void 0, void 0, function* () {
            const persistenceLayer = model.persistenceLayerProvider();
            const decodedDataURL = DataURLs_1.DataURLs.decode(thumbnailResizedImage.dataURL);
            const blob = ArrayBuffers_1.ArrayBuffers.toBlob(decodedDataURL.data);
            const id = Hashcodes_1.Hashcodes.createRandomID();
            const fileRef = {
                name: `${id}.png`
            };
            yield persistenceLayer.writeFile(Backend_1.Backend.IMAGE, fileRef, blob);
            const thumbnail = {
                id,
                created: ISODateTimeStrings_1.ISODateTimeStrings.create(),
                type: 'image/png',
                src: Object.assign({ backend: Backend_1.Backend.IMAGE }, fileRef),
                width: thumbnailResizedImage.size.width,
                height: thumbnailResizedImage.size.height,
                rel: 'thumbnail'
            };
            const docMeta = model.docMeta;
            DocMetas_1.DocMetas.withBatchedMutations(docMeta, () => {
                const docInfo = model.docMeta.docInfo;
                if (!docInfo.thumbnails) {
                    docInfo.thumbnails = {};
                    docInfo.thumbnails['default'] = thumbnail;
                }
            });
            log.notice("Wrote new thumbnail ...");
        });
    }
    static createThumbnail() {
        return __awaiter(this, void 0, void 0, function* () {
            const element = document.querySelector("#viewerContainer");
            const dimensions = this.documentDimensions();
            const screenshot = yield Screenshots_1.Screenshots.capture(1, Object.assign({ left: 0, top: 0 }, dimensions), element);
            const targetDimensions = { width: CROP_WIDTH, height: CROP_HEIGHT };
            const opts = { keepAspectRatio: true, type: 'image/png', quality: 1.0 };
            return yield Canvases_1.Canvases.resize(screenshot.data, targetDimensions, opts);
        });
    }
}
exports.ViewerScreenshots = ViewerScreenshots;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmlld2VyU2NyZWVuc2hvdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJWaWV3ZXJTY3JlZW5zaG90cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDREQUF1RDtBQUV2RCxnRUFBMkQ7QUFDM0QsNkRBQWtGO0FBQ2xGLDZEQUF3RDtBQUN4RCxxRUFBZ0U7QUFDaEUsK0RBQTBEO0FBQzFELGdFQUEyRDtBQUUzRCxxRkFBZ0Y7QUFFaEYsMkRBQXNEO0FBR3RELG1EQUE4QztBQUM5QyxrRUFBeUQ7QUFFekQsTUFBTSxHQUFHLEdBQUksZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTdCLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQztBQU10QixNQUFNLFVBQVUsR0FBRyxHQUFHLENBQUM7QUFFdkIsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUUxRCxNQUFhLGlCQUFpQjtJQUVsQixNQUFNLENBQUMsa0JBQWtCO1FBRTdCLE1BQU0sZUFBZSxHQUFHLG1CQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO1FBRWhGLE1BQU0sS0FBSyxHQUFHLGVBQWUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9FLE1BQU0sTUFBTSxHQUFHLGVBQWUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRWpGLE9BQU8sRUFBQyxLQUFLLEVBQUUsTUFBTSxFQUFDLENBQUM7SUFFM0IsQ0FBQztJQUtPLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxPQUFpQjtRQUcv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cmVlbnNob3RzXCI7XG5pbXBvcnQge0lEaW1lbnNpb25zfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy91dGlsL0lEaW1lbnNpb25zXCI7XG5pbXBvcnQge09wdGlvbmFsfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy91dGlsL3RzL09wdGlvbmFsXCI7XG5pbXBvcnQge0NhbnZhc2VzLCBSZXNpemVkSW1hZ2UsIFJlc2l6ZU9wdHN9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL3V0aWwvQ2FudmFzZXNcIjtcbmltcG9ydCB7RGF0YVVSTHN9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL3V0aWwvRGF0YVVSTHNcIjtcbmltcG9ydCB7QXJyYXlCdWZmZXJzfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy91dGlsL0FycmF5QnVmZmVyc1wiO1xuaW1wb3J0IHtIYXNoY29kZXN9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL3V0aWwvSGFzaGNvZGVzXCI7XG5pbXBvcnQge0JhY2tlbmR9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL2RhdGFzdG9yZS9CYWNrZW5kXCI7XG5pbXBvcnQge0lUaHVtYm5haWx9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL21ldGFkYXRhL0lUaHVtYm5haWxcIjtcbmltcG9ydCB7SVNPRGF0ZVRpbWVTdHJpbmdzfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy9tZXRhZGF0YS9JU09EYXRlVGltZVN0cmluZ3NcIjtcbmltcG9ydCB7TW9kZWx9IGZyb20gXCIuLi9tb2RlbC9Nb2RlbFwiO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL2xvZ2dlci9Mb2dnZXJcIjtcbmltcG9ydCB7RmlsZVJlZn0gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvZGF0YXN0b3JlL0ZpbGVSZWZcIjtcbmltcG9ydCB7SURvY01ldGF9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL21ldGFkYXRhL0lEb2NNZXRhXCI7XG5pbXBvcnQge0RvY01ldGFzfSBmcm9tIFwiLi4vbWV0YWRhdGEvRG9jTWV0YXNcIjtcbmltcG9ydCB7aXNQcmVzZW50fSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy9QcmVjb25kaXRpb25zXCI7XG5cbmNvbnN0IGxvZyA9ICBMb2dnZXIuY3JlYXRlKCk7XG5cbmNvbnN0IERJU0FCTEVEID0gdHJ1ZTtcblxuLyoqXG4gKiBUaGUgY3JvcCB3aWR0aCBvZiBpbWFnZXMuICBXZSBzZWxlY3RlZCAzMDBweCBiZWNhdXNlIHRoZSBzaWRlYmFyIGlzIDMwMHB4XG4gKiBieSBkZWZhdWx0IGFuZCB0aGlzIHdheSB3ZSBjYW4gZml0IHRoZSBlbnRpcmUgd2lkdGguXG4gKi9cbmNvbnN0IENST1BfV0lEVEggPSAzMDA7XG5cbmNvbnN0IENST1BfSEVJR0hUID0gTWF0aC5mbG9vcihDUk9QX1dJRFRIIC8gKDg1MCAvIDExMDApKTtcblxuZXhwb3J0IGNsYXNzIFZpZXdlclNjcmVlbnNob3RzIHtcblxuICAgIHByaXZhdGUgc3RhdGljIGRvY3VtZW50RGltZW5zaW9ucygpOiBJRGltZW5zaW9ucyB7XG5cbiAgICAgICAgY29uc3Qgdmlld2VyQ29udGFpbmVyID0gT3B0aW9uYWwub2YoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN2aWV3ZXJDb250YWluZXJcIikpO1xuXG4gICAgICAgIGNvbnN0IHdpZHRoID0gdmlld2VyQ29udGFpbmVyLm1hcChjdXJyZW50ID0+IGN1cnJlbnQuY2xpZW50V2lkdGgpLmdldE9yRWxzZSgwKTtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gdmlld2VyQ29udGFpbmVyLm1hcChjdXJyZW50ID0+IGN1cnJlbnQuY2xpZW50SGVpZ2h0KS5nZXRPckVsc2UoMCk7XG5cbiAgICAgICAgcmV0dXJuIHt3aWR0aCwgaGVpZ2h0fTtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybiB0cnVlIGlmIHdlIGNhbiBjcmVhdGUgYSBzY3JlZW5zaG90IG9mIHRoaXMgZG9jdW1lbnQuXG4gICAgICovXG4gICAgcHJpdmF0ZSBzdGF0aWMgc3VwcG9ydHNTY3JlZW5zaG90KGRvY01ldGE6IElEb2NNZXRhKTogYm9vbGVhbiB7XG5cbiAgICAgICAgLy8gKioqIGlmIHRoZXJlIGFyZSBhbnkgcGFnZW1hcmtzIHRoZW4gdGhlcmUncyBub3RoaW5nIHdlIGNhbiBkbyBoZXJlLlxuICAgICAgICBmb3IgKGNvbnN0IHBhZ2VNZXRhIG9mIE9iamVjdC52YWx1ZXMoZG9jTWV0YS5wYWdlTWV0YXMpKSB7XG5cbiAgICAgICAgICAgIGlmIChwYWdlTWV0YS5wYWdlbWFya3MgJiYgT2JqZWN0LmtleXMocGFnZU1ldGEucGFnZW1hcmtzKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWRvY01ldGEuZG9jSW5mby5hZGRlZCkge1xuICAgICAgICAgICAgLy8gd2UgZG9uJ3Qga25vdyB3aGVuIHRoaXMgZG9jdW1lbnQgd2FzIGNyZWF0ZWRcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIChUaW1lRHVyYXRpb25zLmhhc0VsYXBzZWQoZG9jTWV0YS5kb2NJbmZvLmFkZGVkLCAnNW0nKSkge1xuICAgICAgICAvLyAgICAgLy8gdGhpcyBpcyBhbiBvbGRlciBkb2N1bWVudCBhbmQgd2UgY2FuJ3QgdXNlIGl0LlxuICAgICAgICAvLyAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAvLyB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBoYXNUaHVtYm5haWwobW9kZWw6IE1vZGVsKTogYm9vbGVhbiB7XG5cbiAgICAgICAgY29uc3QgZG9jTWV0YSA9IG1vZGVsLmRvY01ldGE7XG5cbiAgICAgICAgcmV0dXJuIGRvY01ldGEuZG9jSW5mby50aHVtYm5haWxzICE9PSB1bmRlZmluZWQgJiYgaXNQcmVzZW50KGRvY01ldGEuZG9jSW5mby50aHVtYm5haWxzWydkZWZhdWx0J10pO1xuXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBkb1NjcmVlbnNob3QobW9kZWw6IE1vZGVsKSB7XG5cbiAgICAgICAgaWYgKERJU0FCTEVEKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoISB0aGlzLnN1cHBvcnRzU2NyZWVuc2hvdChtb2RlbC5kb2NNZXRhKSkge1xuICAgICAgICAgICAgbG9nLmluZm8oXCJUaGlzIGRvY3VtZW50IGRvZXNuJ3Qgc3VwcG9ydCBzY3JlZW5zaG90c1wiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmhhc1RodW1ibmFpbChtb2RlbCkpIHtcbiAgICAgICAgICAgIGxvZy5pbmZvKFwiV2UgYWxyZWFkeSBoYXZlIGEgdGh1bWJuYWlsXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVE9ETyBvbmx5IGRvIHRoaXMgb24gZG9jdW1lbnRzIHRoYXQgYXJlIE5FVyBub3cgbGVnYWN5IGRvY3VtZW50cy5cblxuICAgICAgICBjb25zdCBoYW5kbGVyID0gYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCB0aHVtYm5haWxSZXNpemVkSW1hZ2UgPSBhd2FpdCB0aGlzLmNyZWF0ZVRodW1ibmFpbCgpO1xuXG4gICAgICAgICAgICBhd2FpdCB0aGlzLndyaXRlVGh1bWJuYWlsKHRodW1ibmFpbFJlc2l6ZWRJbWFnZSwgbW9kZWwpO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgaGFuZGxlcigpLmNhdGNoKGVyciA9PiBsb2cuZXJyb3IoXCJVbmFibGUgdG8gY2FwdHVyZSBzY3JlZW5zaG90XCIsIGVycikpO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgYXN5bmMgd3JpdGVUaHVtYm5haWwodGh1bWJuYWlsUmVzaXplZEltYWdlOiBSZXNpemVkSW1hZ2UsIG1vZGVsOiBNb2RlbCkge1xuXG4gICAgICAgIGNvbnN0IHBlcnNpc3RlbmNlTGF5ZXIgPSBtb2RlbC5wZXJzaXN0ZW5jZUxheWVyUHJvdmlkZXIoKTtcblxuICAgICAgICBjb25zdCBkZWNvZGVkRGF0YVVSTCA9IERhdGFVUkxzLmRlY29kZSh0aHVtYm5haWxSZXNpemVkSW1hZ2UuZGF0YVVSTCk7XG5cbiAgICAgICAgY29uc3QgYmxvYiA9IEFycmF5QnVmZmVycy50b0Jsb2IoZGVjb2RlZERhdGFVUkwuZGF0YSk7XG5cbiAgICAgICAgY29uc3QgaWQgPSBIYXNoY29kZXMuY3JlYXRlUmFuZG9tSUQoKTtcblxuICAgICAgICBjb25zdCBmaWxlUmVmOiBGaWxlUmVmID0ge1xuICAgICAgICAgICAgbmFtZTogYCR7aWR9LnBuZ2BcbiAgICAgICAgfTtcblxuICAgICAgICBhd2FpdCBwZXJzaXN0ZW5jZUxheWVyLndyaXRlRmlsZShCYWNrZW5kLklNQUdFLCBmaWxlUmVmLCBibG9iKTtcblxuICAgICAgICBjb25zdCB0aHVtYm5haWw6IElUaHVtYm5haWwgPSB7XG4gICAgICAgICAgICBpZCxcbiAgICAgICAgICAgIGNyZWF0ZWQ6IElTT0RhdGVUaW1lU3RyaW5ncy5jcmVhdGUoKSxcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgICAgICAgc3JjOiB7XG4gICAgICAgICAgICAgICAgYmFja2VuZDogQmFja2VuZC5JTUFHRSxcbiAgICAgICAgICAgICAgICAuLi5maWxlUmVmXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgd2lkdGg6IHRodW1ibmFpbFJlc2l6ZWRJbWFnZS5zaXplLndpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0OiB0aHVtYm5haWxSZXNpemVkSW1hZ2Uuc2l6ZS5oZWlnaHQsXG4gICAgICAgICAgICByZWw6ICd0aHVtYm5haWwnXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgZG9jTWV0YSA9IG1vZGVsLmRvY01ldGE7XG5cbiAgICAgICAgRG9jTWV0YXMud2l0aEJhdGNoZWRNdXRhdGlvbnMoZG9jTWV0YSwgKCkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBkb2NJbmZvID0gbW9kZWwuZG9jTWV0YS5kb2NJbmZvO1xuXG4gICAgICAgICAgICBpZiAoIWRvY0luZm8udGh1bWJuYWlscykge1xuICAgICAgICAgICAgICAgIGRvY0luZm8udGh1bWJuYWlscyA9IHt9O1xuICAgICAgICAgICAgICAgIGRvY0luZm8udGh1bWJuYWlsc1snZGVmYXVsdCddID0gdGh1bWJuYWlsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxvZy5ub3RpY2UoXCJXcm90ZSBuZXcgdGh1bWJuYWlsIC4uLlwiKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGFzeW5jIGNyZWF0ZVRodW1ibmFpbCgpIHtcblxuICAgICAgICBjb25zdCBlbGVtZW50ID0gPEhUTUxFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdmlld2VyQ29udGFpbmVyXCIpO1xuXG4gICAgICAgIGNvbnN0IGRpbWVuc2lvbnMgPSB0aGlzLmRvY3VtZW50RGltZW5zaW9ucygpO1xuXG4gICAgICAgIGNvbnN0IHNjcmVlbnNob3QgPSBhd2FpdCBTY3JlZW5zaG90cy5jYXB0dXJlKDEsIHtsZWZ0OiAwLCB0b3A6IDAsIC4uLmRpbWVuc2lvbnN9LCBlbGVtZW50KTtcblxuICAgICAgICBjb25zdCB0YXJnZXREaW1lbnNpb25zID0ge3dpZHRoOiBDUk9QX1dJRFRILCBoZWlnaHQ6IENST1BfSEVJR0hUfTtcblxuICAgICAgICBjb25zdCBvcHRzOiBSZXNpemVPcHRzID0ge2tlZXBBc3BlY3RSYXRpbzogdHJ1ZSwgdHlwZTogJ2ltYWdlL3BuZycsIHF1YWxpdHk6IDEuMH07XG4gICAgICAgIHJldHVybiBhd2FpdCBDYW52YXNlcy5yZXNpemUoc2NyZWVuc2hvdC5kYXRhLCB0YXJnZXREaW1lbnNpb25zLCBvcHRzKTtcblxuICAgIH1cblxufVxuXG4iXX0=