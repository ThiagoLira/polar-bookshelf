"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RepoDocInfos_1 = require("./RepoDocInfos");
const RepoDocAnnotations_1 = require("./RepoDocAnnotations");
const Logger_1 = require("polar-shared/src/logger/Logger");
const Preconditions_1 = require("polar-shared/src/Preconditions");
const log = Logger_1.Logger.create();
class RepoDocMetas {
    static isValid(repoDocMeta) {
        if (!repoDocMeta) {
            return 'no-value';
        }
        if (!Preconditions_1.isPresent(repoDocMeta.repoDocInfo.filename)) {
            return 'no-filename';
        }
        return 'valid';
    }
    static convert(persistenceLayerProvider, fingerprint, docMeta) {
        if (!docMeta) {
            log.warn("No docMeta for file: ", fingerprint);
            return undefined;
        }
        if (!docMeta.docInfo) {
            log.warn("No docInfo for file: ", fingerprint);
            return undefined;
        }
        const repoDocInfo = RepoDocInfos_1.RepoDocInfos.convert(docMeta.docInfo);
        const repoAnnotations = RepoDocAnnotations_1.RepoDocAnnotations.convert(persistenceLayerProvider, docMeta);
        return { repoDocInfo, repoDocAnnotations: repoAnnotations };
    }
}
exports.RepoDocMetas = RepoDocMetas;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVwb0RvY01ldGFzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUmVwb0RvY01ldGFzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsaURBQTRDO0FBQzVDLDZEQUF3RDtBQUN4RCwyREFBc0Q7QUFDdEQsa0VBQXlEO0FBSXpELE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU1QixNQUFhLFlBQVk7SUFFZCxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQXlCO1FBRTNDLElBQUksQ0FBRSxXQUFXLEVBQUU7WUFDZixPQUFPLFVBQVUsQ0FBQztTQUNyQjtRQUVELElBQUksQ0FBRSx5QkFBUyxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDL0MsT0FBTyxhQUFhLENBQUM7U0FDeEI7UUFFRCxPQUFPLE9BQU8sQ0FBQztJQUVuQixDQUFDO0lBRU0sTUFBTSxDQUFDLE9BQU8sQ0FBQyx3QkFBa0QsRUFDbEQsV0FBbUIsRUFDbkIsT0FBa0I7UUFFcEMsSUFBSSxDQUFFLE9BQU8sRUFBRTtZQUNYLEdBQUcsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFDL0MsT0FBTyxTQUFTLENBQUM7U0FDcEI7UUFFRCxJQUFJLENBQUUsT0FBTyxDQUFDLE9BQU8sRUFBRTtZQUNuQixHQUFHLENBQUMsSUFBSSxDQUFDLHVCQUF1QixFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQy9DLE9BQU8sU0FBUyxDQUFDO1NBQ3BCO1FBRUQsTUFBTSxXQUFXLEdBQUcsMkJBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzFELE1BQU0sZUFBZSxHQUFHLHVDQUFrQixDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUV0RixPQUFPLEVBQUMsV0FBVyxFQUFFLGtCQUFrQixFQUFFLGVBQWUsRUFBQyxDQUFDO0lBRTlELENBQUM7Q0FFSjtBQXJDRCxvQ0FxQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1JlcG9Eb2NNZXRhfSBmcm9tICcuL1JlcG9Eb2NNZXRhJztcbmltcG9ydCB7UmVwb0RvY0luZm9zfSBmcm9tICcuL1JlcG9Eb2NJbmZvcyc7XG5pbXBvcnQge1JlcG9Eb2NBbm5vdGF0aW9uc30gZnJvbSAnLi9SZXBvRG9jQW5ub3RhdGlvbnMnO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL2xvZ2dlci9Mb2dnZXJcIjtcbmltcG9ydCB7aXNQcmVzZW50fSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL1ByZWNvbmRpdGlvbnMnO1xuaW1wb3J0IHtQZXJzaXN0ZW5jZUxheWVyUHJvdmlkZXJ9IGZyb20gJy4uLy4uLy4uL3dlYi9qcy9kYXRhc3RvcmUvUGVyc2lzdGVuY2VMYXllcic7XG5pbXBvcnQge0lEb2NNZXRhfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy9tZXRhZGF0YS9JRG9jTWV0YVwiO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbmV4cG9ydCBjbGFzcyBSZXBvRG9jTWV0YXMge1xuXG4gICAgcHVibGljIHN0YXRpYyBpc1ZhbGlkKHJlcG9Eb2NNZXRhPzogUmVwb0RvY01ldGEpOiBSZXBvRG9jVmFsaWRpdHkge1xuXG4gICAgICAgIGlmICghIHJlcG9Eb2NNZXRhKSB7XG4gICAgICAgICAgICByZXR1cm4gJ25vLXZhbHVlJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghIGlzUHJlc2VudChyZXBvRG9jTWV0YS5yZXBvRG9jSW5mby5maWxlbmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiAnbm8tZmlsZW5hbWUnO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICd2YWxpZCc7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGNvbnZlcnQocGVyc2lzdGVuY2VMYXllclByb3ZpZGVyOiBQZXJzaXN0ZW5jZUxheWVyUHJvdmlkZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZpbmdlcnByaW50OiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRvY01ldGE/OiBJRG9jTWV0YSk6IFJlcG9Eb2NNZXRhIHwgdW5kZWZpbmVkIHtcblxuICAgICAgICBpZiAoISBkb2NNZXRhKSB7XG4gICAgICAgICAgICBsb2cud2FybihcIk5vIGRvY01ldGEgZm9yIGZpbGU6IFwiLCBmaW5nZXJwcmludCk7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCEgZG9jTWV0YS5kb2NJbmZvKSB7XG4gICAgICAgICAgICBsb2cud2FybihcIk5vIGRvY0luZm8gZm9yIGZpbGU6IFwiLCBmaW5nZXJwcmludCk7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVwb0RvY0luZm8gPSBSZXBvRG9jSW5mb3MuY29udmVydChkb2NNZXRhLmRvY0luZm8pO1xuICAgICAgICBjb25zdCByZXBvQW5ub3RhdGlvbnMgPSBSZXBvRG9jQW5ub3RhdGlvbnMuY29udmVydChwZXJzaXN0ZW5jZUxheWVyUHJvdmlkZXIsIGRvY01ldGEpO1xuXG4gICAgICAgIHJldHVybiB7cmVwb0RvY0luZm8sIHJlcG9Eb2NBbm5vdGF0aW9uczogcmVwb0Fubm90YXRpb25zfTtcblxuICAgIH1cblxufVxuXG5leHBvcnQgdHlwZSBSZXBvRG9jVmFsaWRpdHkgPSAndmFsaWQnIHwgJ25vLXZhbHVlJyB8ICduby1maWxlbmFtZSc7XG4iXX0=