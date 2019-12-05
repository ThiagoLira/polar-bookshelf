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
const AnnotationType_1 = require("polar-shared/src/metadata/AnnotationType");
const DocMetas_1 = require("../metadata/DocMetas");
class AnnotationMutations {
    constructor(persistenceLayer, fingerprint, page) {
        this.persistenceLayer = persistenceLayer;
        this.fingerprint = fingerprint;
        this.page = page;
    }
    static create(persistenceLayer, fingerprint, page) {
        return new AnnotationMutations(persistenceLayer, fingerprint, page);
    }
    set(type, annotation) {
        return __awaiter(this, void 0, void 0, function* () {
            this.doMutation((docMeta, pageMeta) => {
                switch (type) {
                    case AnnotationType_1.AnnotationType.PAGEMARK:
                        break;
                    case AnnotationType_1.AnnotationType.FLASHCARD:
                        pageMeta.flashcards[annotation.id] = annotation;
                        break;
                    case AnnotationType_1.AnnotationType.TEXT_HIGHLIGHT:
                        pageMeta.textHighlights[annotation.id] = annotation;
                        break;
                    case AnnotationType_1.AnnotationType.AREA_HIGHLIGHT:
                        pageMeta.areaHighlights[annotation.id] = annotation;
                        break;
                    case AnnotationType_1.AnnotationType.COMMENT:
                        pageMeta.comments[annotation.id] = annotation;
                        break;
                }
            });
        });
    }
    delete(type, annotation) {
        return __awaiter(this, void 0, void 0, function* () {
            this.doMutation((docMeta, pageMeta) => {
                switch (type) {
                    case AnnotationType_1.AnnotationType.PAGEMARK:
                        break;
                    case AnnotationType_1.AnnotationType.FLASHCARD:
                        delete pageMeta.flashcards[annotation.id];
                        break;
                    case AnnotationType_1.AnnotationType.TEXT_HIGHLIGHT:
                        delete pageMeta.textHighlights[annotation.id];
                        break;
                    case AnnotationType_1.AnnotationType.AREA_HIGHLIGHT:
                        delete pageMeta.areaHighlights[annotation.id];
                        break;
                    case AnnotationType_1.AnnotationType.COMMENT:
                        delete pageMeta.comments[annotation.id];
                        break;
                }
            });
        });
    }
    doMutation(mutator) {
        return __awaiter(this, void 0, void 0, function* () {
            const { persistenceLayer, fingerprint, page } = this;
            const docMeta = yield persistenceLayer.getDocMeta(fingerprint);
            if (!docMeta) {
                throw new Error("DocMeta not found: " + fingerprint);
            }
            const pageMeta = DocMetas_1.DocMetas.getPageMeta(docMeta, page);
            mutator(docMeta, pageMeta);
            yield persistenceLayer.writeDocMeta(docMeta);
        });
    }
}
exports.AnnotationMutations = AnnotationMutations;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW5ub3RhdGlvbk11dGF0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkFubm90YXRpb25NdXRhdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQSw2RUFBd0U7QUFHeEUsbURBQThDO0FBUzlDLE1BQWEsbUJBQW1CO0lBRTVCLFlBQXFDLGdCQUFrQyxFQUNsQyxXQUFtQixFQUNuQixJQUFnQjtRQUZoQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLGdCQUFXLEdBQVgsV0FBVyxDQUFRO1FBQ25CLFNBQUksR0FBSixJQUFJLENBQVk7SUFFckQsQ0FBQztJQUVNLE1BQU0sQ0FBQyxNQUFNLENBQUMsZ0JBQWtDLEVBQ2xDLFdBQW1CLEVBQ25CLElBQWdCO1FBRWpDLE9BQU8sSUFBSSxtQkFBbUIsQ0FBQyxnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFFeEUsQ0FBQztJQUtZLEdBQUcsQ0FBQyxJQUFvQixFQUNwQixVQUFtRTs7WUFFaEYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsRUFBRTtnQkFFbEMsUUFBUSxJQUFJLEVBQUU7b0JBRVYsS0FBSywrQkFBYyxDQUFDLFFBQVE7d0JBRXhCLE1BQU07b0JBQ1YsS0FBSywrQkFBYyxDQUFDLFNBQVM7d0JBQ3pCLFFBQVEsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxHQUFnQixVQUFVLENBQUM7d0JBQzdELE1BQU07b0JBQ1YsS0FBSywrQkFBYyxDQUFDLGNBQWM7d0JBQzlCLFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxHQUFvQixVQUFVLENBQUM7d0JBQ3JFLE1BQU07b0JBQ1YsS0FBSywrQkFBYyxDQUFDLGNBQWM7d0JBQzlCLFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxHQUFvQixVQUFVLENBQUM7d0JBQ3JFLE1BQU07b0JBQ1YsS0FBSywrQkFBYyxDQUFDLE9BQU87d0JBQ3ZCLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxHQUFjLFVBQVUsQ0FBQzt3QkFDekQsTUFBTTtpQkFFYjtZQUVMLENBQUMsQ0FBQyxDQUFDO1FBRVAsQ0FBQztLQUFBO0lBRVksTUFBTSxDQUFDLElBQW9CLEVBQ3BCLFVBQW1FOztZQUVuRixJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxFQUFFO2dCQUVsQyxRQUFRLElBQUksRUFBRTtvQkFFVixLQUFLLCtCQUFjLENBQUMsUUFBUTt3QkFFeEIsTUFBTTtvQkFDVixLQUFLLCtCQUFjLENBQUMsU0FBUzt3QkFDekIsT0FBTyxRQUFRLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQzt3QkFDMUMsTUFBTTtvQkFDVixLQUFLLCtCQUFjLENBQUMsY0FBYzt3QkFDOUIsT0FBTyxRQUFRLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQzt3QkFDOUMsTUFBTTtvQkFDVixLQUFLLCtCQUFjLENBQUMsY0FBYzt3QkFDOUIsT0FBTyxRQUFRLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQzt3QkFDOUMsTUFBTTtvQkFDVixLQUFLLCtCQUFjLENBQUMsT0FBTzt3QkFDdkIsT0FBTyxRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQzt3QkFDeEMsTUFBTTtpQkFFYjtZQUVMLENBQUMsQ0FBQyxDQUFDO1FBRVAsQ0FBQztLQUFBO0lBR2EsVUFBVSxDQUFDLE9BQXlEOztZQUU5RSxNQUFNLEVBQUMsZ0JBQWdCLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBQyxHQUFHLElBQUksQ0FBQztZQUVuRCxNQUFNLE9BQU8sR0FBRyxNQUFNLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUUvRCxJQUFJLENBQUUsT0FBTyxFQUFFO2dCQUNYLE1BQU0sSUFBSSxLQUFLLENBQUMscUJBQXFCLEdBQUcsV0FBVyxDQUFDLENBQUM7YUFDeEQ7WUFFRCxNQUFNLFFBQVEsR0FBRyxtQkFBUSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFFckQsT0FBTyxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztZQUkzQixNQUFNLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqRCxDQUFDO0tBQUE7Q0FFSjtBQWpHRCxrREFpR0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lQYWdlTWV0YSwgUGFnZU51bWJlcn0gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvbWV0YWRhdGEvSVBhZ2VNZXRhXCI7XG5pbXBvcnQge0Fubm90YXRpb25UeXBlfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy9tZXRhZGF0YS9Bbm5vdGF0aW9uVHlwZVwiO1xuaW1wb3J0IHtJVGV4dEhpZ2hsaWdodH0gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvbWV0YWRhdGEvSVRleHRIaWdobGlnaHRcIjtcbmltcG9ydCB7SUFyZWFIaWdobGlnaHR9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL21ldGFkYXRhL0lBcmVhSGlnaGxpZ2h0XCI7XG5pbXBvcnQge0RvY01ldGFzfSBmcm9tIFwiLi4vbWV0YWRhdGEvRG9jTWV0YXNcIjtcbmltcG9ydCB7UGVyc2lzdGVuY2VMYXllcn0gZnJvbSBcIi4vUGVyc2lzdGVuY2VMYXllclwiO1xuaW1wb3J0IHtJQ29tbWVudH0gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvbWV0YWRhdGEvSUNvbW1lbnRcIjtcbmltcG9ydCB7SUZsYXNoY2FyZH0gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvbWV0YWRhdGEvSUZsYXNoY2FyZFwiO1xuaW1wb3J0IHtJRG9jTWV0YX0gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvbWV0YWRhdGEvSURvY01ldGFcIjtcblxuLyoqXG4gKiBNdXRhdGlvbiBvZiBhbm5vdGF0aW9ucyBkaXJlY3RseSB3aXRob3V0IGhhdmluZyB0aGUgdW5kZXJseWluZyBkb2N1bWVudCBsb2FkZWQuXG4gKi9cbmV4cG9ydCBjbGFzcyBBbm5vdGF0aW9uTXV0YXRpb25zICB7XG5cbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgcGVyc2lzdGVuY2VMYXllcjogUGVyc2lzdGVuY2VMYXllcixcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaXZhdGUgcmVhZG9ubHkgZmluZ2VycHJpbnQ6IHN0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaXZhdGUgcmVhZG9ubHkgcGFnZTogUGFnZU51bWJlcikge1xuXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGUocGVyc2lzdGVuY2VMYXllcjogUGVyc2lzdGVuY2VMYXllcixcbiAgICAgICAgICAgICAgICAgICAgICAgICBmaW5nZXJwcmludDogc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2U6IFBhZ2VOdW1iZXIpIHtcblxuICAgICAgICByZXR1cm4gbmV3IEFubm90YXRpb25NdXRhdGlvbnMocGVyc2lzdGVuY2VMYXllciwgZmluZ2VycHJpbnQsIHBhZ2UpO1xuXG4gICAgfVxuXG4gICAgLy8gVE9ETzogb24gbW9iaWxlLCBpdCB3b3VsZCBiZSBuaWNlIGlmIG1vc3Qgb2YgdGhlc2Ugb3BlcmF0aW9ucyB3ZXJlIFJFU1Qgc28gd2UgZG8gbm90IGhhdmUgdG8gZmlyc3QgZmV0Y2ggdGhlXG4gICAgLy8gZG9jdW1lbnQgdG8gbXV0YXRlIGl0LCB0aGVuIHNlbmQgaXQgYmFjay4gIFNvbWUgb2YgdGhlbSBhcmUgbGFyZ2UuICBIb3dldmVyLCB0aGV5J3JlIHByb2JhYmx5IGluIGNhY2hlIGFueXdheS5cblxuICAgIHB1YmxpYyBhc3luYyBzZXQodHlwZTogQW5ub3RhdGlvblR5cGUsXG4gICAgICAgICAgICAgICAgICAgICBhbm5vdGF0aW9uOiBJVGV4dEhpZ2hsaWdodCB8IElBcmVhSGlnaGxpZ2h0IHwgSUNvbW1lbnQgfCBJRmxhc2hjYXJkKSB7XG5cbiAgICAgICAgdGhpcy5kb011dGF0aW9uKChkb2NNZXRhLCBwYWdlTWV0YSkgPT4ge1xuXG4gICAgICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcblxuICAgICAgICAgICAgICAgIGNhc2UgQW5ub3RhdGlvblR5cGUuUEFHRU1BUks6XG4gICAgICAgICAgICAgICAgICAgIC8vIHdlIGRvbid0IG5lZWQgdGhpcyBvbmUgeWV0LlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIEFubm90YXRpb25UeXBlLkZMQVNIQ0FSRDpcbiAgICAgICAgICAgICAgICAgICAgcGFnZU1ldGEuZmxhc2hjYXJkc1thbm5vdGF0aW9uLmlkXSA9IDxJRmxhc2hjYXJkPiBhbm5vdGF0aW9uO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIEFubm90YXRpb25UeXBlLlRFWFRfSElHSExJR0hUOlxuICAgICAgICAgICAgICAgICAgICBwYWdlTWV0YS50ZXh0SGlnaGxpZ2h0c1thbm5vdGF0aW9uLmlkXSA9IDxJVGV4dEhpZ2hsaWdodD4gYW5ub3RhdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBBbm5vdGF0aW9uVHlwZS5BUkVBX0hJR0hMSUdIVDpcbiAgICAgICAgICAgICAgICAgICAgcGFnZU1ldGEuYXJlYUhpZ2hsaWdodHNbYW5ub3RhdGlvbi5pZF0gPSA8SUFyZWFIaWdobGlnaHQ+IGFubm90YXRpb247XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgQW5ub3RhdGlvblR5cGUuQ09NTUVOVDpcbiAgICAgICAgICAgICAgICAgICAgcGFnZU1ldGEuY29tbWVudHNbYW5ub3RhdGlvbi5pZF0gPSA8SUNvbW1lbnQ+IGFubm90YXRpb247XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgZGVsZXRlKHR5cGU6IEFubm90YXRpb25UeXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYW5ub3RhdGlvbjogSVRleHRIaWdobGlnaHQgfCBJQXJlYUhpZ2hsaWdodCB8IElDb21tZW50IHwgSUZsYXNoY2FyZCkge1xuXG4gICAgICAgIHRoaXMuZG9NdXRhdGlvbigoZG9jTWV0YSwgcGFnZU1ldGEpID0+IHtcblxuICAgICAgICAgICAgc3dpdGNoICh0eXBlKSB7XG5cbiAgICAgICAgICAgICAgICBjYXNlIEFubm90YXRpb25UeXBlLlBBR0VNQVJLOlxuICAgICAgICAgICAgICAgICAgICAvLyB3ZSBkb24ndCBuZWVkIHRoaXMgb25lIHlldC5cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBBbm5vdGF0aW9uVHlwZS5GTEFTSENBUkQ6XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBwYWdlTWV0YS5mbGFzaGNhcmRzW2Fubm90YXRpb24uaWRdO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIEFubm90YXRpb25UeXBlLlRFWFRfSElHSExJR0hUOlxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgcGFnZU1ldGEudGV4dEhpZ2hsaWdodHNbYW5ub3RhdGlvbi5pZF07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgQW5ub3RhdGlvblR5cGUuQVJFQV9ISUdITElHSFQ6XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBwYWdlTWV0YS5hcmVhSGlnaGxpZ2h0c1thbm5vdGF0aW9uLmlkXTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBBbm5vdGF0aW9uVHlwZS5DT01NRU5UOlxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgcGFnZU1ldGEuY29tbWVudHNbYW5ub3RhdGlvbi5pZF07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cblxuICAgIHByaXZhdGUgYXN5bmMgZG9NdXRhdGlvbihtdXRhdG9yOiAoZG9jTWV0YTogSURvY01ldGEsIHBhZ2VNZXRhOiBJUGFnZU1ldGEpID0+IHZvaWQpIHtcblxuICAgICAgICBjb25zdCB7cGVyc2lzdGVuY2VMYXllciwgZmluZ2VycHJpbnQsIHBhZ2V9ID0gdGhpcztcblxuICAgICAgICBjb25zdCBkb2NNZXRhID0gYXdhaXQgcGVyc2lzdGVuY2VMYXllci5nZXREb2NNZXRhKGZpbmdlcnByaW50KTtcblxuICAgICAgICBpZiAoISBkb2NNZXRhKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEb2NNZXRhIG5vdCBmb3VuZDogXCIgKyBmaW5nZXJwcmludCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwYWdlTWV0YSA9IERvY01ldGFzLmdldFBhZ2VNZXRhKGRvY01ldGEsIHBhZ2UpO1xuXG4gICAgICAgIG11dGF0b3IoZG9jTWV0YSwgcGFnZU1ldGEpO1xuXG4gICAgICAgIC8vIG5vdyB3cml0ZSBpdCBiYWNrIG91dC4uLlxuXG4gICAgICAgIGF3YWl0IHBlcnNpc3RlbmNlTGF5ZXIud3JpdGVEb2NNZXRhKGRvY01ldGEpO1xuICAgIH1cblxufVxuIl19