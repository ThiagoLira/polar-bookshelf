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
const DocMetas_1 = require("../metadata/DocMetas");
const Reactor_1 = require("../reactor/Reactor");
const PagemarkType_1 = require("polar-shared/src/metadata/PagemarkType");
const Preconditions_1 = require("polar-shared/src/Preconditions");
const Pagemarks_1 = require("../metadata/Pagemarks");
const DocMetaDescriber_1 = require("../metadata/DocMetaDescriber");
const Logger_1 = require("polar-shared/src/logger/Logger");
const ModelPersisterFactory_1 = require("./ModelPersisterFactory");
const Optional_1 = require("polar-shared/src/util/ts/Optional");
const DocFormatFactory_1 = require("../docformat/DocFormatFactory");
const log = Logger_1.Logger.create();
const NULL_DOC_META = DocMetas_1.DocMetas.create('0x0001', 0);
class Model {
    constructor(persistenceLayerHandler) {
        this.persistenceLayerHandler = persistenceLayerHandler;
        this.docMeta = NULL_DOC_META;
        this.docMetaPromise = Promise.resolve(NULL_DOC_META);
        this.persistenceLayerProvider = () => persistenceLayerHandler.get();
        this.modelPersisterFactory = new ModelPersisterFactory_1.ModelPersisterFactory(persistenceLayerHandler);
        this.reactor = new Reactor_1.Reactor();
        this.reactor.registerEvent('documentLoaded');
        this.reactor.registerEvent('createPagemark');
        this.reactor.registerEvent('erasePagemark');
    }
    documentLoaded(fingerprint, nrPages, currentPageNumber, docDetail) {
        return __awaiter(this, void 0, void 0, function* () {
            log.notice("Document loaded with fingerprint: " + fingerprint);
            const persistenceLayer = this.persistenceLayerProvider();
            let docMeta = yield persistenceLayer.getDocMeta(fingerprint);
            if (!docMeta) {
                console.warn("New document found. Creating initial DocMeta");
                docMeta = DocMetas_1.DocMetas.create(fingerprint, nrPages, Optional_1.Optional.of(docDetail).map(current => current.filename)
                    .getOrUndefined());
                yield persistenceLayer.write(fingerprint, docMeta);
            }
            if (docMeta === undefined) {
                throw new Error("Unable to load DocMeta: " + fingerprint);
            }
            this.docMeta = docMeta;
            log.info("Description of doc loaded: " + DocMetaDescriber_1.DocMetaDescriber.describe(this.docMeta));
            log.info("Document loaded: ", fingerprint);
            const modelPersister = this.modelPersisterFactory.create(docMeta);
            this.docMeta = modelPersister.docMeta;
            this.docMetaPromise = Promise.resolve(docMeta);
            this.handleExtendedMetadataExtraction();
            this.reactor.dispatchEvent('documentLoaded', {
                fingerprint,
                nrPages,
                currentPageNumber,
                docMeta: this.docMeta
            });
            return this.docMeta;
        });
    }
    handleExtendedMetadataExtraction() {
        const docFormat = DocFormatFactory_1.DocFormatFactory.getInstance();
        const currentPageElement = docFormat.getCurrentPageElement();
        if (!currentPageElement) {
            log.warn("No current page element");
            return;
        }
        const pageNum = docFormat.getPageNumFromPageElement(currentPageElement);
        if (pageNum !== 1) {
            log.warn("Working with wrong page number: " + pageNum);
            return;
        }
        DocMetas_1.DocMetas.withBatchedMutations(this.docMeta, () => {
            const pageMeta = DocMetas_1.DocMetas.getPageMeta(this.docMeta, pageNum);
            if (!pageMeta.pageInfo.dimensions) {
                const currentPageDetail = docFormat.getCurrentPageDetail();
                if (currentPageDetail.dimensions) {
                    pageMeta.pageInfo.dimensions = currentPageDetail.dimensions;
                }
            }
        });
    }
    registerListenerForDocumentLoaded(eventListener) {
        this.reactor.addEventListener('documentLoaded', eventListener);
    }
    createPagemark(pageNum, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!options.percentage) {
                options.percentage = 100;
            }
            log.info("Model sees createPagemark");
            this.assertPageNum(pageNum);
            const pagemark = Pagemarks_1.Pagemarks.create({
                type: PagemarkType_1.PagemarkType.SINGLE_COLUMN,
                percentage: options.percentage,
                column: 0
            });
            const docMeta = yield this.docMetaPromise;
            Pagemarks_1.Pagemarks.updatePagemark(docMeta, pageNum, pagemark);
            this.reactor.dispatchEvent('createPagemark', { pageNum, pagemark });
        });
    }
    createPagemarksForRange(end, percentage) {
        return __awaiter(this, void 0, void 0, function* () {
            const docMeta = yield this.docMetaPromise;
            const pagemarkRefs = Pagemarks_1.Pagemarks.updatePagemarksForRange(docMeta, end, percentage);
            for (const pagemarkRef of pagemarkRefs) {
                this.reactor.dispatchEvent('createPagemark', pagemarkRef);
            }
        });
    }
    erasePagemark(pageNum) {
        Preconditions_1.Preconditions.assertNumber(pageNum, "pageNum");
        log.info("Model sees erasePagemark");
        this.assertPageNum(pageNum);
        if (this.docMeta) {
            Pagemarks_1.Pagemarks.deletePagemark(this.docMeta, pageNum);
            this.reactor.dispatchEvent('erasePagemark', { pageNum });
        }
    }
    assertPageNum(pageNum) {
        if (pageNum == null) {
            throw new Error("Must specify page pageNum");
        }
        if (pageNum <= 0) {
            throw new Error("Page numbers begin at 1");
        }
    }
}
exports.Model = Model;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJNb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBLG1EQUE4QztBQUM5QyxnREFBMkM7QUFDM0MseUVBQW9FO0FBQ3BFLGtFQUE2RDtBQUM3RCxxREFBZ0Q7QUFDaEQsbUVBQThEO0FBQzlELDJEQUFzRDtBQUV0RCxtRUFBOEQ7QUFFOUQsZ0VBQTJEO0FBQzNELG9FQUErRDtBQUsvRCxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFNUIsTUFBTSxhQUFhLEdBQUcsbUJBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBRW5ELE1BQWEsS0FBSztJQWdCZCxZQUE0Qix1QkFBZ0Q7UUFBaEQsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQVZyRSxZQUFPLEdBQWEsYUFBYSxDQUFDO1FBUWpDLG1CQUFjLEdBQXNCLE9BQU8sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7UUFJdkUsSUFBSSxDQUFDLHdCQUF3QixHQUFHLEdBQUcsRUFBRSxDQUFDLHVCQUF1QixDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3BFLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLDZDQUFxQixDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFFaEYsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLGlCQUFPLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUM7SUFFaEQsQ0FBQztJQUtZLGNBQWMsQ0FBQyxXQUFtQixFQUNuQixPQUFlLEVBQ2YsaUJBQXlCLEVBQ3pCLFNBQWdDOztZQUV4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QyxPQUFPLENBQUMsYUFBYSxDQUFDLGdCQUFnQixFQUFFLFdBQVcsQ0FBQyxDQUFDO2FBQzdEO1FBRUwsQ0FBQztLQUFBO0lBTU0sYUFBYSxDQUFDLE9BQWU7UUFFaEMsNkJBQWEsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBRS9DLEdBQUcsQ0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUVyQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTVCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUVkLHFCQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFFaEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsZUFBZSxFQUFFLEVBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQztTQUUxRDtJQUVMLENBQUM7SUFFTyxhQUFhLENBQUMsT0FBZTtRQUVqQyxJQUFJLE9BQU8sSUFBSSxJQUFJLEVBQUU7WUFDakIsTUFBTSxJQUFJLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1NBQ2hEO1FBRUQsSUFBSSxPQUFPLElBQUksQ0FBQyxFQUFFO1lBQ2QsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1NBQzlDO0lBRUwsQ0FBQztDQUVKO0FBek5ELHNCQXlOQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RG9jTWV0YX0gZnJvbSAnLi4vbWV0YWRhdGEvRG9jTWV0YSc7XG5pbXBvcnQge0RvY01ldGFzfSBmcm9tICcuLi9tZXRhZGF0YS9Eb2NNZXRhcyc7XG5pbXBvcnQge1JlYWN0b3J9IGZyb20gJy4uL3JlYWN0b3IvUmVhY3Rvcic7XG5pbXBvcnQge1BhZ2VtYXJrVHlwZX0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9tZXRhZGF0YS9QYWdlbWFya1R5cGUnO1xuaW1wb3J0IHtQcmVjb25kaXRpb25zfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL1ByZWNvbmRpdGlvbnMnO1xuaW1wb3J0IHtQYWdlbWFya3N9IGZyb20gJy4uL21ldGFkYXRhL1BhZ2VtYXJrcyc7XG5pbXBvcnQge0RvY01ldGFEZXNjcmliZXJ9IGZyb20gJy4uL21ldGFkYXRhL0RvY01ldGFEZXNjcmliZXInO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge0xpc3RlbmFibGVQZXJzaXN0ZW5jZUxheWVyfSBmcm9tICcuLi9kYXRhc3RvcmUvTGlzdGVuYWJsZVBlcnNpc3RlbmNlTGF5ZXInO1xuaW1wb3J0IHtNb2RlbFBlcnNpc3RlckZhY3Rvcnl9IGZyb20gJy4vTW9kZWxQZXJzaXN0ZXJGYWN0b3J5JztcbmltcG9ydCB7RG9jRGV0YWlsfSBmcm9tICcuLi9tZXRhZGF0YS9Eb2NEZXRhaWwnO1xuaW1wb3J0IHtPcHRpb25hbH0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL3RzL09wdGlvbmFsJztcbmltcG9ydCB7RG9jRm9ybWF0RmFjdG9yeX0gZnJvbSAnLi4vZG9jZm9ybWF0L0RvY0Zvcm1hdEZhY3RvcnknO1xuaW1wb3J0IHtQZXJzaXN0ZW5jZUxheWVySGFuZGxlcn0gZnJvbSAnLi4vZGF0YXN0b3JlL1BlcnNpc3RlbmNlTGF5ZXJIYW5kbGVyJztcbmltcG9ydCB7UGFnZU51bWJlcn0gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvbWV0YWRhdGEvSVBhZ2VNZXRhXCI7XG5pbXBvcnQge0lEb2NNZXRhfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy9tZXRhZGF0YS9JRG9jTWV0YVwiO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbmNvbnN0IE5VTExfRE9DX01FVEEgPSBEb2NNZXRhcy5jcmVhdGUoJzB4MDAwMScsIDApO1xuXG5leHBvcnQgY2xhc3MgTW9kZWwge1xuXG4gICAgLy8gVE9ETzogd2Ugc2hvdWxkIHByb2JhYmx5IG5vdCBzZXQgdGhpcyB2aWEgYSBnbG9iYWwgYXMgaXQgbWlnaHQgbm90XG4gICAgLy8gYmUgbG9hZGVkIHlldCBhbmQgLyBvciBtaWdodCBiZSBpbnZhbGlkYXRlZCBpZiB0aGUgZG9jdW1lbnQgaXMgY2xvc2VkLlxuICAgIC8vXG4gICAgLy8gVE9ETzogd2UgY3JlYXRlIGEgZmFrZSBkb2N1bWVudCB3aGljaCBpcyBldmVudHVhbGx5IHJlcGxhY2VkLlxuICAgIHB1YmxpYyBkb2NNZXRhOiBJRG9jTWV0YSA9IE5VTExfRE9DX01FVEE7XG5cbiAgICBwdWJsaWMgcmVhZG9ubHkgcGVyc2lzdGVuY2VMYXllclByb3ZpZGVyOiAoKSA9PiBMaXN0ZW5hYmxlUGVyc2lzdGVuY2VMYXllcjtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgbW9kZWxQZXJzaXN0ZXJGYWN0b3J5OiBNb2RlbFBlcnNpc3RlckZhY3Rvcnk7XG5cbiAgICBwcml2YXRlIHJlYWN0b3I6IFJlYWN0b3I8YW55PjtcblxuICAgIHByaXZhdGUgZG9jTWV0YVByb21pc2U6IFByb21pc2U8SURvY01ldGE+ID0gUHJvbWlzZS5yZXNvbHZlKE5VTExfRE9DX01FVEEpO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIHJlYWRvbmx5IHBlcnNpc3RlbmNlTGF5ZXJIYW5kbGVyOiBQZXJzaXN0ZW5jZUxheWVySGFuZGxlcikge1xuXG4gICAgICAgIHRoaXMucGVyc2lzdGVuY2VMYXllclByb3ZpZGVyID0gKCkgPT4gcGVyc2lzdGVuY2VMYXllckhhbmRsZXIuZ2V0KCk7XG4gICAgICAgIHRoaXMubW9kZWxQZXJzaXN0ZXJGYWN0b3J5ID0gbmV3IE1vZGVsUGVyc2lzdGVyRmFjdG9yeShwZXJzaXN0ZW5jZUxheWVySGFuZGxlcik7XG5cbiAgICAgICAgdGhpcy5yZWFjdG9yID0gbmV3IFJlYWN0b3IoKTtcbiAgICAgICAgdGhpcy5yZWFjdG9yLnJlZ2lzdGVyRXZlbnQoJ2RvY3VtZW50TG9hZGVkJyk7XG4gICAgICAgIHRoaXMucmVhY3Rvci5yZWdpc3RlckV2ZW50KCdjcmVhdGVQYWdlbWFyaycpO1xuICAgICAgICB0aGlzLnJlYWN0b3IucmVnaXN0ZXJFdmVudCgnZXJhc2VQYWdlbWFyaycpO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHdoZW4gYSBuZXcgZG9jdW1lbnQgaGFzIGJlZW4gbG9hZGVkLlxuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyBkb2N1bWVudExvYWRlZChmaW5nZXJwcmludDogc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuclBhZ2VzOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQYWdlTnVtYmVyOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY0RldGFpbDogRG9jRGV0YWlsIHwgdW5kZWZpbmVkKSB7XG5cbiAgICAgICAgbG9nLm5vdGljZShcIkRvY3VtZW50IGxvYWRlZCB3aXRoIGZpbmdlcnByaW50OiBcIiArIGZpbmdlcnByaW50KTtcblxuICAgICAgICBjb25zdCBwZXJzaXN0ZW5jZUxheWVyID0gdGhpcy5wZXJzaXN0ZW5jZUxheWVyUHJvdmlkZXIoKTtcblxuICAgICAgICBsZXQgZG9jTWV0YSA9IGF3YWl0IHBlcnNpc3RlbmNlTGF5ZXIuZ2V0RG9jTWV0YShmaW5nZXJwcmludCk7XG5cbiAgICAgICAgaWYgKCFkb2NNZXRhKSB7XG5cbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIk5ldyBkb2N1bWVudCBmb3VuZC4gQ3JlYXRpbmcgaW5pdGlhbCBEb2NNZXRhXCIpO1xuXG4gICAgICAgICAgICAvLyB0aGlzIGlzIGEgbmV3IGRvY3VtZW50Li4uXG5cbiAgICAgICAgICAgIGRvY01ldGEgPSBEb2NNZXRhcy5jcmVhdGUoZmluZ2VycHJpbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5yUGFnZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9wdGlvbmFsLm9mKGRvY0RldGFpbCkubWFwKGN1cnJlbnQgPT4gY3VycmVudC5maWxlbmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5nZXRPclVuZGVmaW5lZCgpKTtcblxuICAgICAgICAgICAgYXdhaXQgcGVyc2lzdGVuY2VMYXllci53cml0ZShmaW5nZXJwcmludCwgZG9jTWV0YSk7XG5cbiAgICAgICAgICAgIC8vIEknbSBub3Qgc3VyZSB0aGlzIGlzIHRoZSBiZXN0IHdheSB0byByZXNvbHZlIHRoaXMgYXMgc3dhcHBpbmcgaW5cbiAgICAgICAgICAgIC8vIHRoZSBkb2NNZXRhUHJvbWlzZSB3aXRob3V0IGFueSBzeW5jaHJvbml6YXRpb24gc2VlbXMgbGlrZSB3ZSdyZVxuICAgICAgICAgICAgLy8gYXNraW5nIGZvciBhIHJhY2UgY29uZGl0aW9uLlxuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZG9jTWV0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gbG9hZCBEb2NNZXRhOiBcIiArIGZpbmdlcnByaW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZG9jTWV0YSA9IGRvY01ldGE7XG5cbiAgICAgICAgbG9nLmluZm8oXCJEZXNjcmlwdGlvbiBvZiBkb2MgbG9hZGVkOiBcIiArIERvY01ldGFEZXNjcmliZXIuZGVzY3JpYmUodGhpcy5kb2NNZXRhKSk7XG4gICAgICAgIGxvZy5pbmZvKFwiRG9jdW1lbnQgbG9hZGVkOiBcIiwgZmluZ2VycHJpbnQpO1xuXG4gICAgICAgIGNvbnN0IG1vZGVsUGVyc2lzdGVyID0gdGhpcy5tb2RlbFBlcnNpc3RlckZhY3RvcnkuY3JlYXRlKGRvY01ldGEpO1xuXG4gICAgICAgIHRoaXMuZG9jTWV0YSA9IG1vZGVsUGVyc2lzdGVyLmRvY01ldGE7XG5cbiAgICAgICAgLy8gYWx3YXlzIHByb3ZpZGUgdGhpcyBwcm9taXNlIGZvciB0aGUgbWV0YWRhdGEuICBGb3IgTkVXIGRvY3VtZW50c1xuICAgICAgICAvLyB3ZSBoYXZlIHRvIHByb3ZpZGUgdGhlIHByb21pc2UgYnV0IHdlIEFMU08gaGF2ZSB0byBwcm92aWRlIGl0XG4gICAgICAgIC8vIHRvIHN3YXAgb3V0IHRoZSBkb2NNZXRhIHdpdGggdGhlIHJpZ2h0IHZlcnNpb24uXG4gICAgICAgIHRoaXMuZG9jTWV0YVByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoZG9jTWV0YSk7XG5cbiAgICAgICAgdGhpcy5oYW5kbGVFeHRlbmRlZE1ldGFkYXRhRXh0cmFjdGlvbigpO1xuXG4gICAgICAgIHRoaXMucmVhY3Rvci5kaXNwYXRjaEV2ZW50KCdkb2N1bWVudExvYWRlZCcsIHtcbiAgICAgICAgICAgIGZpbmdlcnByaW50LFxuICAgICAgICAgICAgbnJQYWdlcyxcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlTnVtYmVyLFxuICAgICAgICAgICAgZG9jTWV0YTogdGhpcy5kb2NNZXRhXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmRvY01ldGE7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHbyB0aHJvdWdoIGFuZCBleHRyYWN0IGFkZGl0aW9uYWwgbWV0YWRhdGEgb24gZmlyc3QgcGFnZSBsb2FkLlxuICAgICAqL1xuICAgIHByaXZhdGUgaGFuZGxlRXh0ZW5kZWRNZXRhZGF0YUV4dHJhY3Rpb24oKSB7XG5cbiAgICAgICAgY29uc3QgZG9jRm9ybWF0ID0gRG9jRm9ybWF0RmFjdG9yeS5nZXRJbnN0YW5jZSgpO1xuXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQYWdlRWxlbWVudCA9IGRvY0Zvcm1hdC5nZXRDdXJyZW50UGFnZUVsZW1lbnQoKTtcblxuICAgICAgICBpZiAoIWN1cnJlbnRQYWdlRWxlbWVudCkge1xuICAgICAgICAgICAgbG9nLndhcm4oXCJObyBjdXJyZW50IHBhZ2UgZWxlbWVudFwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBhZ2VOdW0gPSBkb2NGb3JtYXQuZ2V0UGFnZU51bUZyb21QYWdlRWxlbWVudChjdXJyZW50UGFnZUVsZW1lbnQpO1xuXG4gICAgICAgIGlmIChwYWdlTnVtICE9PSAxKSB7XG4gICAgICAgICAgICBsb2cud2FybihcIldvcmtpbmcgd2l0aCB3cm9uZyBwYWdlIG51bWJlcjogXCIgKyBwYWdlTnVtKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIERvY01ldGFzLndpdGhCYXRjaGVkTXV0YXRpb25zKHRoaXMuZG9jTWV0YSwgKCkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBwYWdlTWV0YSA9IERvY01ldGFzLmdldFBhZ2VNZXRhKHRoaXMuZG9jTWV0YSwgcGFnZU51bSk7XG5cbiAgICAgICAgICAgIGlmICghcGFnZU1ldGEucGFnZUluZm8uZGltZW5zaW9ucykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRQYWdlRGV0YWlsID0gZG9jRm9ybWF0LmdldEN1cnJlbnRQYWdlRGV0YWlsKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFBhZ2VEZXRhaWwuZGltZW5zaW9ucykge1xuICAgICAgICAgICAgICAgICAgICBwYWdlTWV0YS5wYWdlSW5mby5kaW1lbnNpb25zID0gY3VycmVudFBhZ2VEZXRhaWwuZGltZW5zaW9ucztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIHB1YmxpYyByZWdpc3Rlckxpc3RlbmVyRm9yRG9jdW1lbnRMb2FkZWQoZXZlbnRMaXN0ZW5lcjogRG9jdW1lbnRMb2FkZWRDYWxsYmFjaykge1xuICAgICAgICB0aGlzLnJlYWN0b3IuYWRkRXZlbnRMaXN0ZW5lcignZG9jdW1lbnRMb2FkZWQnLCBldmVudExpc3RlbmVyKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmVmYWN0b3IgVGhpcyBjb2RlIHNob3VsZCBiZSBpbiBpdHMgb3duIGRlZGljYXRlZCBoZWxwZXIgY2xhc3NcbiAgICAgKlxuICAgICAqIEBwYXJhbSBwYWdlTnVtIFRoZSBwYWdlIG51bSB0byB1c2UgZm9yIG91ciBjcmVhdGVkIHBhZ2VtYXJrLlxuICAgICAqIEBwYXJhbSBvcHRpb25zIE9wdGlvbnMgZm9yIGNyZWF0aW5nIHRoZSBwYWdlbWFyay5cbiAgICAgKi9cbiAgICBwdWJsaWMgYXN5bmMgY3JlYXRlUGFnZW1hcmsocGFnZU51bTogbnVtYmVyLCBvcHRpb25zOiBhbnkgPSB7fSkge1xuXG4gICAgICAgIGlmICghb3B0aW9ucy5wZXJjZW50YWdlKSB7XG4gICAgICAgICAgICBvcHRpb25zLnBlcmNlbnRhZ2UgPSAxMDA7XG4gICAgICAgIH1cblxuICAgICAgICBsb2cuaW5mbyhcIk1vZGVsIHNlZXMgY3JlYXRlUGFnZW1hcmtcIik7XG5cbiAgICAgICAgdGhpcy5hc3NlcnRQYWdlTnVtKHBhZ2VOdW0pO1xuXG4gICAgICAgIGNvbnN0IHBhZ2VtYXJrID0gUGFnZW1hcmtzLmNyZWF0ZSh7XG5cbiAgICAgICAgICAgIC8vIGp1c3Qgc2V0IGRvY01ldGEgcGFnZU1hcmtUeXBlID0gUGFnZW1hcmtUeXBlLlNJTkdMRV9DT0xVTU4gYnlcbiAgICAgICAgICAgIC8vIGRlZmF1bHQgZm9yIG5vdyB1bnRpbCB3ZSBhZGQgbXVsdGlwbGUgY29sdW1uIHR5cGVzIGFuZCBoYW5kbGVcbiAgICAgICAgICAgIC8vIHRoZW0gcHJvcGVybHkuXG5cbiAgICAgICAgICAgIHR5cGU6IFBhZ2VtYXJrVHlwZS5TSU5HTEVfQ09MVU1OLFxuICAgICAgICAgICAgcGVyY2VudGFnZTogb3B0aW9ucy5wZXJjZW50YWdlLFxuICAgICAgICAgICAgY29sdW1uOiAwXG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgZG9jTWV0YSA9IGF3YWl0IHRoaXMuZG9jTWV0YVByb21pc2U7XG5cbiAgICAgICAgUGFnZW1hcmtzLnVwZGF0ZVBhZ2VtYXJrKGRvY01ldGEsIHBhZ2VOdW0sIHBhZ2VtYXJrKTtcblxuICAgICAgICAvLyBUT0RPOiB0aGlzIGNhbiBiZSBkb25lIHdpdGggYSBtdXRhdGlvbiBsaXN0ZW5lciBub3dcbiAgICAgICAgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoJ2NyZWF0ZVBhZ2VtYXJrJywge3BhZ2VOdW0sIHBhZ2VtYXJrfSk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgY3JlYXRlUGFnZW1hcmtzRm9yUmFuZ2UoZW5kOiBQYWdlTnVtYmVyLCBwZXJjZW50YWdlOiBudW1iZXIpIHtcblxuICAgICAgICBjb25zdCBkb2NNZXRhID0gYXdhaXQgdGhpcy5kb2NNZXRhUHJvbWlzZTtcblxuICAgICAgICBjb25zdCBwYWdlbWFya1JlZnMgPSBQYWdlbWFya3MudXBkYXRlUGFnZW1hcmtzRm9yUmFuZ2UoZG9jTWV0YSwgZW5kLCBwZXJjZW50YWdlKTtcblxuICAgICAgICBmb3IgKGNvbnN0IHBhZ2VtYXJrUmVmIG9mIHBhZ2VtYXJrUmVmcykge1xuICAgICAgICAgICAgdGhpcy5yZWFjdG9yLmRpc3BhdGNoRXZlbnQoJ2NyZWF0ZVBhZ2VtYXJrJywgcGFnZW1hcmtSZWYpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmVmYWN0b3IgVGhpcyBjb2RlIHNob3VsZCBtb3ZlIHRvIFBhZ2VtYXJrcy50c1xuICAgICAqIEBwYXJhbSBwYWdlTnVtXG4gICAgICovXG4gICAgcHVibGljIGVyYXNlUGFnZW1hcmsocGFnZU51bTogbnVtYmVyKSB7XG5cbiAgICAgICAgUHJlY29uZGl0aW9ucy5hc3NlcnROdW1iZXIocGFnZU51bSwgXCJwYWdlTnVtXCIpO1xuXG4gICAgICAgIGxvZy5pbmZvKFwiTW9kZWwgc2VlcyBlcmFzZVBhZ2VtYXJrXCIpO1xuXG4gICAgICAgIHRoaXMuYXNzZXJ0UGFnZU51bShwYWdlTnVtKTtcblxuICAgICAgICBpZiAodGhpcy5kb2NNZXRhKSB7XG5cbiAgICAgICAgICAgIFBhZ2VtYXJrcy5kZWxldGVQYWdlbWFyayh0aGlzLmRvY01ldGEsIHBhZ2VOdW0pO1xuXG4gICAgICAgICAgICB0aGlzLnJlYWN0b3IuZGlzcGF0Y2hFdmVudCgnZXJhc2VQYWdlbWFyaycsIHtwYWdlTnVtfSk7XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3NlcnRQYWdlTnVtKHBhZ2VOdW06IG51bWJlcikge1xuXG4gICAgICAgIGlmIChwYWdlTnVtID09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk11c3Qgc3BlY2lmeSBwYWdlIHBhZ2VOdW1cIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFnZU51bSA8PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQYWdlIG51bWJlcnMgYmVnaW4gYXQgMVwiKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRG9jdW1lbnRMb2FkZWRFdmVudCB7XG4gICAgcmVhZG9ubHkgZmluZ2VycHJpbnQ6IHN0cmluZztcbiAgICByZWFkb25seSBuclBhZ2VzOiBudW1iZXI7XG4gICAgcmVhZG9ubHkgY3VycmVudFBhZ2VOdW1iZXI6IG51bWJlcjtcbiAgICByZWFkb25seSBkb2NNZXRhOiBJRG9jTWV0YTtcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRMb2FkZWRDYWxsYmFjayA9IChldmVudDogRG9jdW1lbnRMb2FkZWRFdmVudCkgPT4gdm9pZDtcblxuIl19