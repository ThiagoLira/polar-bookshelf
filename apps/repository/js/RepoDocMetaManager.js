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
const Logger_1 = require("polar-shared/src/logger/Logger");
const DocInfo_1 = require("../../../web/js/metadata/DocInfo");
const Tags_1 = require("polar-shared/src/tags/Tags");
const Preconditions_1 = require("polar-shared/src/Preconditions");
const TagsDB_1 = require("./TagsDB");
const Optional_1 = require("polar-shared/src/util/ts/Optional");
const DocMetaRef_1 = require("../../../web/js/datastore/DocMetaRef");
const RelatedTags_1 = require("../../../web/js/tags/related/RelatedTags");
const SetArrays_1 = require("polar-shared/src/util/SetArrays");
const DataObjectIndex_1 = require("./DataObjectIndex");
const RepoDocAnnotations_1 = require("./RepoDocAnnotations");
const RepoDocInfos_1 = require("./RepoDocInfos");
const log = Logger_1.Logger.create();
class RepoDocAnnotationDataObjectIndex extends DataObjectIndex_1.DataObjectIndex {
    constructor() {
        super((repoAnnotation) => RepoDocAnnotations_1.RepoDocAnnotations.toTags(repoAnnotation));
    }
}
exports.RepoDocAnnotationDataObjectIndex = RepoDocAnnotationDataObjectIndex;
class RepoDocInfoDataObjectIndex extends DataObjectIndex_1.DataObjectIndex {
    constructor() {
        super((repoDocInfo) => RepoDocInfos_1.RepoDocInfos.toTags(repoDocInfo));
    }
}
exports.RepoDocInfoDataObjectIndex = RepoDocInfoDataObjectIndex;
class RepoDocMetaManager {
    constructor(persistenceLayerProvider) {
        this.repoDocInfoIndex = new RepoDocInfoDataObjectIndex();
        this.repoDocAnnotationIndex = new RepoDocAnnotationDataObjectIndex();
        this.tagsDB = new TagsDB_1.TagsDB();
        this.relatedTags = new RelatedTags_1.RelatedTags();
        Preconditions_1.Preconditions.assertPresent(persistenceLayerProvider, 'persistenceLayerProvider');
        this.persistenceLayerProvider = persistenceLayerProvider;
        this.init();
    }
    updateFromRepoDocMeta(fingerprint, repoDocMeta) {
        if (repoDocMeta) {
            this.repoDocInfoIndex.add(repoDocMeta.repoDocInfo.fingerprint, repoDocMeta.repoDocInfo);
            this.updateTagsDB(repoDocMeta.repoDocInfo);
            this.relatedTags.update(fingerprint, 'set', ...Object.values(repoDocMeta.repoDocInfo.tags || {})
                .map(current => current.label));
            const updateAnnotations = () => {
                const deleteOrphaned = () => {
                    const currentAnnotationsIDs = Object.values(this.repoDocAnnotationIndex)
                        .filter(current => current.fingerprint === repoDocMeta.repoDocInfo.fingerprint)
                        .map(current => current.id);
                    const newAnnotationIDs = repoDocMeta.repoDocAnnotations
                        .map(current => current.id);
                    const deleteIDs = SetArrays_1.SetArrays.difference(currentAnnotationsIDs, newAnnotationIDs);
                    for (const deleteID of deleteIDs) {
                        this.repoDocAnnotationIndex.remove(deleteID);
                    }
                };
                const updateExisting = () => {
                    for (const repoDocAnnotation of repoDocMeta.repoDocAnnotations) {
                        this.repoDocAnnotationIndex.add(repoDocAnnotation.id, repoDocAnnotation);
                    }
                };
                deleteOrphaned();
                updateExisting();
            };
            updateAnnotations();
        }
        else {
            const deleteOrphanedAnnotations = () => {
                for (const repoAnnotation of Object.values(this.repoDocAnnotationIndex)) {
                    if (repoAnnotation.fingerprint === fingerprint) {
                        this.repoDocAnnotationIndex.remove(repoAnnotation.id);
                    }
                }
            };
            const deleteDoc = () => {
                this.repoDocInfoIndex.remove(fingerprint);
            };
            deleteOrphanedAnnotations();
            deleteDoc();
        }
    }
    updateFromRepoDocInfo(fingerprint, repoDocInfo) {
        if (repoDocInfo) {
            this.repoDocInfoIndex.add(fingerprint, repoDocInfo);
            this.updateTagsDB(repoDocInfo);
        }
        else {
            this.repoDocInfoIndex.remove(fingerprint);
        }
    }
    updateTagsDB(...repoDocInfos) {
        for (const repoDocInfo of repoDocInfos) {
            Optional_1.Optional.of(repoDocInfo.docInfo.tags)
                .map(tags => {
                this.tagsDB.register(...Object.values(tags));
            });
        }
    }
    writeDocInfo(docInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            Preconditions_1.Preconditions.assertPresent(this.persistenceLayerProvider, 'persistenceLayerProvider');
            const persistenceLayer = this.persistenceLayerProvider.get();
            if (yield persistenceLayer.contains(docInfo.fingerprint)) {
                const docMeta = yield persistenceLayer.getDocMeta(docInfo.fingerprint);
                if (docMeta === undefined) {
                    log.warn("Unable to find DocMeta for: ", docInfo.fingerprint);
                    return;
                }
                docMeta.docInfo = new DocInfo_1.DocInfo(docInfo);
                log.info("Writing out updated DocMeta");
                yield persistenceLayer.writeDocMeta(docMeta);
            }
        });
    }
    writeDocInfoTitle(repoDocInfo, title) {
        return __awaiter(this, void 0, void 0, function* () {
            Preconditions_1.Preconditions.assertPresent(repoDocInfo);
            Preconditions_1.Preconditions.assertPresent(repoDocInfo.docInfo);
            Preconditions_1.Preconditions.assertPresent(title);
            repoDocInfo = Object.assign(Object.assign({}, repoDocInfo), { title });
            repoDocInfo.docInfo.title = title;
            this.updateFromRepoDocInfo(repoDocInfo.fingerprint, repoDocInfo);
            return this.writeDocInfo(repoDocInfo.docInfo);
        });
    }
    writeDocInfoTags(repoDocInfo, tags) {
        return __awaiter(this, void 0, void 0, function* () {
            Preconditions_1.Preconditions.assertPresent(repoDocInfo);
            Preconditions_1.Preconditions.assertPresent(repoDocInfo.docInfo);
            Preconditions_1.Preconditions.assertPresent(tags);
            repoDocInfo = Object.assign(Object.assign({}, repoDocInfo), { tags: Tags_1.Tags.toMap(tags) });
            repoDocInfo.docInfo.tags = Tags_1.Tags.toMap(tags);
            this.updateFromRepoDocInfo(repoDocInfo.fingerprint, repoDocInfo);
            return this.writeDocInfo(repoDocInfo.docInfo);
        });
    }
    deleteDocInfo(repoDocInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            this.updateFromRepoDocInfo(repoDocInfo.fingerprint);
            const persistenceLayer = this.persistenceLayerProvider.get();
            const docMetaFileRef = DocMetaRef_1.DocMetaFileRefs.createFromDocInfo(repoDocInfo.docInfo);
            yield persistenceLayer.delete(docMetaFileRef);
        });
    }
    init() {
        for (const repoDocInfo of this.repoDocInfoIndex.values()) {
            this.updateTagsDB(repoDocInfo);
        }
    }
}
exports.RepoDocMetaManager = RepoDocMetaManager;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVwb0RvY01ldGFNYW5hZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUmVwb0RvY01ldGFNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsMkRBQXNEO0FBQ3RELDhEQUF5RDtBQUd6RCxxREFBcUQ7QUFDckQsa0VBQTZEO0FBQzdELHFDQUFnQztBQUNoQyxnRUFBMkQ7QUFDM0QscUVBQXFFO0FBSXJFLDBFQUFxRTtBQUNyRSwrREFBMEQ7QUFDMUQsdURBQWtEO0FBQ2xELDZEQUF3RDtBQUN4RCxpREFBNEM7QUFHNUMsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLE1BQWEsZ0NBQWlDLFNBQVEsaUNBQStCO0lBRWpGO1FBQ0ksS0FBSyxDQUFDLENBQUMsY0FBK0IsRUFBRSxFQUFFLENBQUMsdUNBQWtCLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFFLENBQUM7SUFDM0YsQ0FBQztDQUVKO0FBTkQsNEVBTUM7QUFFRCxNQUFhLDBCQUEyQixTQUFRLGlDQUE0QjtJQUV4RTtRQUNJLEtBQUssQ0FBQyxDQUFDLFdBQXlCLEVBQUUsRUFBRSxDQUFDLDJCQUFZLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFFLENBQUM7SUFDNUUsQ0FBQztDQUVKO0FBTkQsZ0VBTUM7QUFNRCxNQUFhLGtCQUFrQjtJQVkzQixZQUFZLHdCQUFxRDtRQVZqRCxxQkFBZ0IsR0FBK0IsSUFBSSwwQkFBMEIsRUFBRSxDQUFDO1FBRWhGLDJCQUFzQixHQUFxQyxJQUFJLGdDQUFnQyxFQUFFLENBQUM7UUFFbEcsV0FBTSxHQUFHLElBQUksZUFBTSxFQUFFLENBQUM7UUFFdEIsZ0JBQVcsR0FBRyxJQUFJLHlCQUFXLEVBQUUsQ0FBQztRQUs1Qyw2QkFBYSxDQUFDLGFBQWEsQ0FBQyx3QkFBd0IsRUFBRSwwQkFBMEIsQ0FBQyxDQUFDO1FBQ2xGLElBQUksQ0FBQyx3QkFBd0IsR0FBRyx3QkFB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SUFFWSxhQUFhLENBQUMsV0FBd0I7O1lBRS9DLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7WUFFcEQsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsR0FBRyxFQUFFLENBQUM7WUFHN0QsTUFBTSxjQUFjLEdBQUcsNEJBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFOUUsTUFBTSxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFbEQsQ0FBQztLQUFBO0lBRU8sSUFBSTtRQUdSLEtBQUssTUFBTSxXQUFXLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQ3RELElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDbEM7SUFFTCxDQUFDO0NBR0o7QUE3TUQsZ0RBNk1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtMb2dnZXJ9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge0RvY0luZm99IGZyb20gJy4uLy4uLy4uL3dlYi9qcy9tZXRhZGF0YS9Eb2NJbmZvJztcbmltcG9ydCB7SURvY0luZm99IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbWV0YWRhdGEvSURvY0luZm8nO1xuaW1wb3J0IHtSZXBvRG9jSW5mb30gZnJvbSAnLi9SZXBvRG9jSW5mbyc7XG5pbXBvcnQge1RhZywgVGFnc30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy90YWdzL1RhZ3MnO1xuaW1wb3J0IHtQcmVjb25kaXRpb25zfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL1ByZWNvbmRpdGlvbnMnO1xuaW1wb3J0IHtUYWdzREJ9IGZyb20gJy4vVGFnc0RCJztcbmltcG9ydCB7T3B0aW9uYWx9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC90cy9PcHRpb25hbCc7XG5pbXBvcnQge0RvY01ldGFGaWxlUmVmc30gZnJvbSAnLi4vLi4vLi4vd2ViL2pzL2RhdGFzdG9yZS9Eb2NNZXRhUmVmJztcbmltcG9ydCB7UGVyc2lzdGVuY2VMYXllcn0gZnJvbSAnLi4vLi4vLi4vd2ViL2pzL2RhdGFzdG9yZS9QZXJzaXN0ZW5jZUxheWVyJztcbmltcG9ydCB7SVByb3ZpZGVyfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvUHJvdmlkZXJzJztcbmltcG9ydCB7UmVwb0RvY01ldGF9IGZyb20gJy4vUmVwb0RvY01ldGEnO1xuaW1wb3J0IHtSZWxhdGVkVGFnc30gZnJvbSAnLi4vLi4vLi4vd2ViL2pzL3RhZ3MvcmVsYXRlZC9SZWxhdGVkVGFncyc7XG5pbXBvcnQge1NldEFycmF5c30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL1NldEFycmF5cyc7XG5pbXBvcnQge0RhdGFPYmplY3RJbmRleH0gZnJvbSAnLi9EYXRhT2JqZWN0SW5kZXgnO1xuaW1wb3J0IHtSZXBvRG9jQW5ub3RhdGlvbnN9IGZyb20gXCIuL1JlcG9Eb2NBbm5vdGF0aW9uc1wiO1xuaW1wb3J0IHtSZXBvRG9jSW5mb3N9IGZyb20gXCIuL1JlcG9Eb2NJbmZvc1wiO1xuaW1wb3J0IHtJRG9jQW5ub3RhdGlvbn0gZnJvbSBcIi4uLy4uLy4uL3dlYi9qcy9hbm5vdGF0aW9uX3NpZGViYXIvRG9jQW5ub3RhdGlvblwiO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbmV4cG9ydCBjbGFzcyBSZXBvRG9jQW5ub3RhdGlvbkRhdGFPYmplY3RJbmRleCBleHRlbmRzIERhdGFPYmplY3RJbmRleDxJRG9jQW5ub3RhdGlvbj4ge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKChyZXBvQW5ub3RhdGlvbj86IElEb2NBbm5vdGF0aW9uKSA9PiBSZXBvRG9jQW5ub3RhdGlvbnMudG9UYWdzKHJlcG9Bbm5vdGF0aW9uKSApO1xuICAgIH1cblxufVxuXG5leHBvcnQgY2xhc3MgUmVwb0RvY0luZm9EYXRhT2JqZWN0SW5kZXggZXh0ZW5kcyBEYXRhT2JqZWN0SW5kZXg8UmVwb0RvY0luZm8+IHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigocmVwb0RvY0luZm8/OiBSZXBvRG9jSW5mbykgPT4gUmVwb0RvY0luZm9zLnRvVGFncyhyZXBvRG9jSW5mbykgKTtcbiAgICB9XG5cbn1cblxuLyoqXG4gKiBUaGUgbWFpbiBpbnRlcmZhY2UgdG8gdGhlIERvY1JlcG9zaXRvcnkgaW5jbHVkaW5nIHVwZGF0ZXMsIHRoZSBleGlzdGluZ1xuICogbG9hZGVkIGRvY3VtZW50IG1ldGFkYXRhLCBhbmQgdGFncyBkYXRhYmFzZS5cbiAqL1xuZXhwb3J0IGNsYXNzIFJlcG9Eb2NNZXRhTWFuYWdlciB7XG5cbiAgICBwdWJsaWMgcmVhZG9ubHkgcmVwb0RvY0luZm9JbmRleDogUmVwb0RvY0luZm9EYXRhT2JqZWN0SW5kZXggPSBuZXcgUmVwb0RvY0luZm9EYXRhT2JqZWN0SW5kZXgoKTtcblxuICAgIHB1YmxpYyByZWFkb25seSByZXBvRG9jQW5ub3RhdGlvbkluZGV4OiBSZXBvRG9jQW5ub3RhdGlvbkRhdGFPYmplY3RJbmRleCA9IG5ldyBSZXBvRG9jQW5ub3RhdGlvbkRhdGFPYmplY3RJbmRleCgpO1xuXG4gICAgcHVibGljIHJlYWRvbmx5IHRhZ3NEQiA9IG5ldyBUYWdzREIoKTtcblxuICAgIHB1YmxpYyByZWFkb25seSByZWxhdGVkVGFncyA9IG5ldyBSZWxhdGVkVGFncygpO1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBwZXJzaXN0ZW5jZUxheWVyUHJvdmlkZXI6IElQcm92aWRlcjxQZXJzaXN0ZW5jZUxheWVyPjtcblxuICAgIGNvbnN0cnVjdG9yKHBlcnNpc3RlbmNlTGF5ZXJQcm92aWRlcjogSVByb3ZpZGVyPFBlcnNpc3RlbmNlTGF5ZXI+KSB7XG4gICAgICAgIFByZWNvbmRpdGlvbnMuYXNzZXJ0UHJlc2VudChwZXJzaXN0ZW5jZUxheWVyUHJvdmlkZXIsICdwZXJzaXN0ZW5jZUxheWVyUHJvdmlkZXInKTtcbiAgICAgICAgdGhpcy5wZXJzaXN0ZW5jZUxheWVyUHJvdmlkZXIgPSBwZXJzaXN0ZW5jZUxheWVyUHJvdmlkZXI7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGVGcm9tUmVwb0RvY01ldGEoZmluZ2VycHJpbnQ6IHN0cmluZywgcmVwb0RvY01ldGE/OiBSZXBvRG9jTWV0YSkge1xuXG4gICAgICAgIGlmIChyZXBvRG9jTWV0YSkge1xuXG4gICAgICAgICAgICB0aGlzLnJlcG9Eb2NJbmZvSW5kZXguYWRkKHJlcG9Eb2NNZXRhLnJlcG9Eb2NJbmZvLmZpbmdlcnByaW50LCByZXBvRG9jTWV0YS5yZXBvRG9jSW5mbyk7XG5cbiAgICAgICAgICAgIHRoaXMudXBkYXRlVGFnc0RCKHJlcG9Eb2NNZXRhLnJlcG9Eb2NJbmZvKTtcblxuICAgICAgICAgICAgdGhpcy5yZWxhdGVkVGFncy51cGRhdGUoZmluZ2VycHJpbnQsICdzZXQnLCAuLi5PYmplY3QudmFsdWVzKHJlcG9Eb2NNZXRhLnJlcG9Eb2NJbmZvLnRhZ3MgfHwge30pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoY3VycmVudCA9PiBjdXJyZW50LmxhYmVsKSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZUFubm90YXRpb25zID0gKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZGVsZXRlT3JwaGFuZWQgPSAoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudEFubm90YXRpb25zSURzID0gT2JqZWN0LnZhbHVlcyh0aGlzLnJlcG9Eb2NBbm5vdGF0aW9uSW5kZXgpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGN1cnJlbnQgPT4gY3VycmVudC5maW5nZXJwcmludCA9PT0gcmVwb0RvY01ldGEucmVwb0RvY0luZm8uZmluZ2VycHJpbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKGN1cnJlbnQgPT4gY3VycmVudC5pZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3QW5ub3RhdGlvbklEcyA9IHJlcG9Eb2NNZXRhLnJlcG9Eb2NBbm5vdGF0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChjdXJyZW50ID0+IGN1cnJlbnQuaWQpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUlEcyA9IFNldEFycmF5cy5kaWZmZXJlbmNlKGN1cnJlbnRBbm5vdGF0aW9uc0lEcywgbmV3QW5ub3RhdGlvbklEcyk7XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBkZWxldGVJRCBvZiBkZWxldGVJRHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVwb0RvY0Fubm90YXRpb25JbmRleC5yZW1vdmUoZGVsZXRlSUQpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlRXhpc3RpbmcgPSAoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCByZXBvRG9jQW5ub3RhdGlvbiBvZiByZXBvRG9jTWV0YS5yZXBvRG9jQW5ub3RhdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVwb0RvY0Fubm90YXRpb25JbmRleC5hZGQocmVwb0RvY0Fubm90YXRpb24uaWQsIHJlcG9Eb2NBbm5vdGF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGRlbGV0ZU9ycGhhbmVkKCk7XG4gICAgICAgICAgICAgICAgdXBkYXRlRXhpc3RpbmcoKTtcblxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdXBkYXRlQW5ub3RhdGlvbnMoKTtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBjb25zdCBkZWxldGVPcnBoYW5lZEFubm90YXRpb25zID0gKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgLy8gbm93IGRlbGV0ZSBzdGFsZSByZXBvIGFubm90YXRpb25zLlxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcmVwb0Fubm90YXRpb24gb2YgT2JqZWN0LnZhbHVlcyh0aGlzLnJlcG9Eb2NBbm5vdGF0aW9uSW5kZXgpKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcG9Bbm5vdGF0aW9uLmZpbmdlcnByaW50ID09PSBmaW5nZXJwcmludCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXBvRG9jQW5ub3RhdGlvbkluZGV4LnJlbW92ZShyZXBvQW5ub3RhdGlvbi5pZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZURvYyA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlcG9Eb2NJbmZvSW5kZXgucmVtb3ZlKGZpbmdlcnByaW50KTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGRlbGV0ZU9ycGhhbmVkQW5ub3RhdGlvbnMoKTtcbiAgICAgICAgICAgIGRlbGV0ZURvYygpO1xuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgaW4tbWVtb3J5IHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgZG9jLlxuICAgICAqXG4gICAgICovXG4gICAgcHVibGljIHVwZGF0ZUZyb21SZXBvRG9jSW5mbyhmaW5nZXJwcmludDogc3RyaW5nLCByZXBvRG9jSW5mbz86IFJlcG9Eb2NJbmZvKSB7XG5cbiAgICAgICAgaWYgKHJlcG9Eb2NJbmZvKSB7XG4gICAgICAgICAgICB0aGlzLnJlcG9Eb2NJbmZvSW5kZXguYWRkKGZpbmdlcnByaW50LCByZXBvRG9jSW5mbyk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVRhZ3NEQihyZXBvRG9jSW5mbyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlcG9Eb2NJbmZvSW5kZXgucmVtb3ZlKGZpbmdlcnByaW50KTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVUYWdzREIoLi4ucmVwb0RvY0luZm9zOiBSZXBvRG9jSW5mb1tdKSB7XG5cbiAgICAgICAgZm9yIChjb25zdCByZXBvRG9jSW5mbyBvZiByZXBvRG9jSW5mb3MpIHtcblxuICAgICAgICAgICAgLy8gdXBkYXRlIHRoZSB0YWdzIGRhdGEuXG4gICAgICAgICAgICBPcHRpb25hbC5vZihyZXBvRG9jSW5mby5kb2NJbmZvLnRhZ3MpXG4gICAgICAgICAgICAgICAgLm1hcCh0YWdzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YWdzREIucmVnaXN0ZXIoLi4uT2JqZWN0LnZhbHVlcyh0YWdzKSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3luYyB0aGUgZG9jSW5mbyB0byBkaXNrLlxuICAgICAqXG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIHdyaXRlRG9jSW5mbyhkb2NJbmZvOiBJRG9jSW5mbykge1xuXG4gICAgICAgIFByZWNvbmRpdGlvbnMuYXNzZXJ0UHJlc2VudCh0aGlzLnBlcnNpc3RlbmNlTGF5ZXJQcm92aWRlciwgJ3BlcnNpc3RlbmNlTGF5ZXJQcm92aWRlcicpO1xuXG4gICAgICAgIGNvbnN0IHBlcnNpc3RlbmNlTGF5ZXIgPSB0aGlzLnBlcnNpc3RlbmNlTGF5ZXJQcm92aWRlci5nZXQoKTtcblxuICAgICAgICBpZiAoYXdhaXQgcGVyc2lzdGVuY2VMYXllci5jb250YWlucyhkb2NJbmZvLmZpbmdlcnByaW50KSkge1xuXG4gICAgICAgICAgICBjb25zdCBkb2NNZXRhID0gYXdhaXQgcGVyc2lzdGVuY2VMYXllci5nZXREb2NNZXRhKGRvY0luZm8uZmluZ2VycHJpbnQpO1xuXG4gICAgICAgICAgICBpZiAoZG9jTWV0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgbG9nLndhcm4oXCJVbmFibGUgdG8gZmluZCBEb2NNZXRhIGZvcjogXCIsIGRvY0luZm8uZmluZ2VycHJpbnQpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZG9jTWV0YS5kb2NJbmZvID0gbmV3IERvY0luZm8oZG9jSW5mbyk7XG5cbiAgICAgICAgICAgIGxvZy5pbmZvKFwiV3JpdGluZyBvdXQgdXBkYXRlZCBEb2NNZXRhXCIpO1xuXG4gICAgICAgICAgICBhd2FpdCBwZXJzaXN0ZW5jZUxheWVyLndyaXRlRG9jTWV0YShkb2NNZXRhKTtcblxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIFJlcG9Eb2NJbmZvIG9iamVjdCB3aXRoIHRoZSBnaXZlbiB0YWdzLlxuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyB3cml0ZURvY0luZm9UaXRsZShyZXBvRG9jSW5mbzogUmVwb0RvY0luZm8sIHRpdGxlOiBzdHJpbmcpIHtcblxuICAgICAgICBQcmVjb25kaXRpb25zLmFzc2VydFByZXNlbnQocmVwb0RvY0luZm8pO1xuICAgICAgICBQcmVjb25kaXRpb25zLmFzc2VydFByZXNlbnQocmVwb0RvY0luZm8uZG9jSW5mbyk7XG4gICAgICAgIFByZWNvbmRpdGlvbnMuYXNzZXJ0UHJlc2VudCh0aXRsZSk7XG5cbiAgICAgICAgcmVwb0RvY0luZm8gPSB7Li4ucmVwb0RvY0luZm8sIHRpdGxlfTtcbiAgICAgICAgcmVwb0RvY0luZm8uZG9jSW5mby50aXRsZSA9IHRpdGxlO1xuXG4gICAgICAgIHRoaXMudXBkYXRlRnJvbVJlcG9Eb2NJbmZvKHJlcG9Eb2NJbmZvLmZpbmdlcnByaW50LCByZXBvRG9jSW5mbyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMud3JpdGVEb2NJbmZvKHJlcG9Eb2NJbmZvLmRvY0luZm8pO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBSZXBvRG9jSW5mbyBvYmplY3Qgd2l0aCB0aGUgZ2l2ZW4gdGFncy5cbiAgICAgKi9cbiAgICBwdWJsaWMgYXN5bmMgd3JpdGVEb2NJbmZvVGFncyhyZXBvRG9jSW5mbzogUmVwb0RvY0luZm8sIHRhZ3M6IFJlYWRvbmx5QXJyYXk8VGFnPikge1xuXG4gICAgICAgIFByZWNvbmRpdGlvbnMuYXNzZXJ0UHJlc2VudChyZXBvRG9jSW5mbyk7XG4gICAgICAgIFByZWNvbmRpdGlvbnMuYXNzZXJ0UHJlc2VudChyZXBvRG9jSW5mby5kb2NJbmZvKTtcbiAgICAgICAgUHJlY29uZGl0aW9ucy5hc3NlcnRQcmVzZW50KHRhZ3MpO1xuXG4gICAgICAgIHJlcG9Eb2NJbmZvID0gey4uLnJlcG9Eb2NJbmZvLCB0YWdzOiBUYWdzLnRvTWFwKHRhZ3MpfTtcbiAgICAgICAgcmVwb0RvY0luZm8uZG9jSW5mby50YWdzID0gVGFncy50b01hcCh0YWdzKTtcblxuICAgICAgICB0aGlzLnVwZGF0ZUZyb21SZXBvRG9jSW5mbyhyZXBvRG9jSW5mby5maW5nZXJwcmludCwgcmVwb0RvY0luZm8pO1xuXG4gICAgICAgIHJldHVybiB0aGlzLndyaXRlRG9jSW5mbyhyZXBvRG9jSW5mby5kb2NJbmZvKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBkZWxldGVEb2NJbmZvKHJlcG9Eb2NJbmZvOiBSZXBvRG9jSW5mbykge1xuXG4gICAgICAgIHRoaXMudXBkYXRlRnJvbVJlcG9Eb2NJbmZvKHJlcG9Eb2NJbmZvLmZpbmdlcnByaW50KTtcblxuICAgICAgICBjb25zdCBwZXJzaXN0ZW5jZUxheWVyID0gdGhpcy5wZXJzaXN0ZW5jZUxheWVyUHJvdmlkZXIuZ2V0KCk7XG5cbiAgICAgICAgLy8gZGVsZXRlIGl0IGZyb20gdGhlIHJlcG8gbm93LlxuICAgICAgICBjb25zdCBkb2NNZXRhRmlsZVJlZiA9IERvY01ldGFGaWxlUmVmcy5jcmVhdGVGcm9tRG9jSW5mbyhyZXBvRG9jSW5mby5kb2NJbmZvKTtcblxuICAgICAgICBhd2FpdCBwZXJzaXN0ZW5jZUxheWVyLmRlbGV0ZShkb2NNZXRhRmlsZVJlZik7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGluaXQoKSB7XG4gICAgICAgIC8vIFRPRE86IGlzIHRoaXMgZXZlbiBuZWVkZWQgYW55bW9yZT9cblxuICAgICAgICBmb3IgKGNvbnN0IHJlcG9Eb2NJbmZvIG9mIHRoaXMucmVwb0RvY0luZm9JbmRleC52YWx1ZXMoKSkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVUYWdzREIocmVwb0RvY0luZm8pO1xuICAgICAgICB9XG5cbiAgICB9XG5cblxufVxuIl19