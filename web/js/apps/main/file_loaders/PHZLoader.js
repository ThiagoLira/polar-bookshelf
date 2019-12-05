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
const Preconditions_1 = require("polar-shared/src/Preconditions");
const Fingerprints_1 = require("../../../util/Fingerprints");
const Logger_1 = require("polar-shared/src/logger/Logger");
const FileLoader_1 = require("./FileLoader");
const WebResource_1 = require("../../../electron/webresource/WebResource");
const ResourcePaths_1 = require("../../../electron/webresource/ResourcePaths");
const Descriptors_1 = require("../../../viewer/html/Descriptors");
const FilePaths_1 = require("polar-shared/src/util/FilePaths");
const log = Logger_1.Logger.create();
const LOAD_STRATEGY = 'portable';
class PHZLoader extends FileLoader_1.FileLoader {
    constructor(cacheRegistry, fileRegistry) {
        super();
        this.cacheRegistry = cacheRegistry;
        this.fileRegistry = fileRegistry;
    }
    registerForLoad(path) {
        return __awaiter(this, void 0, void 0, function* () {
            Preconditions_1.Preconditions.assertNotNull(this.cacheRegistry);
            Preconditions_1.Preconditions.assertNotNull(this.fileRegistry);
            if (LOAD_STRATEGY === 'portable') {
                return this.doPortable(path);
            }
            else {
                return yield this.doElectron(path);
            }
        });
    }
    doPortable(path) {
        const filename = FilePaths_1.FilePaths.basename(path);
        const fileMeta = this.fileRegistry.registerFile(path);
        const appURL = PHZLoader.createViewerURL(fileMeta.url, filename);
        return {
            webResource: WebResource_1.WebResource.createURL(appURL)
        };
    }
    static createViewerURL(fileURL, filename) {
        const fingerprint = Fingerprints_1.Fingerprints.create(filename);
        const params = {
            file: encodeURIComponent(fileURL),
            filename: encodeURIComponent(filename),
            fingerprint
        };
        return ResourcePaths_1.ResourcePaths.resourceURLFromRelativeURL(`/htmlviewer/index.html?file=${params.file}&filename=${params.filename}&fingerprint=${params.fingerprint}&zoom=page-width&strategy=${LOAD_STRATEGY}`, false);
    }
    doElectron(path) {
        return __awaiter(this, void 0, void 0, function* () {
            const filename = FilePaths_1.FilePaths.basename(path);
            const cachedRequestsHolder = yield this.cacheRegistry.registerFile(path);
            log.info("cachedRequestsHolder: " + JSON.stringify(cachedRequestsHolder));
            const cachedRequest = cachedRequestsHolder.cachedRequests[cachedRequestsHolder.metadata.url];
            log.info("Going to load URL: " + cachedRequest.url);
            const descriptor = cachedRequestsHolder.metadata;
            const descriptorJSON = JSON.stringify(descriptor);
            const basename = FilePaths_1.FilePaths.basename(path);
            const fingerprint = Fingerprints_1.Fingerprints.create(basename);
            const appPath = ResourcePaths_1.ResourcePaths.resourceURLFromRelativeURL('/htmlviewer/index.html', false);
            const filenameParam = encodeURIComponent(filename);
            const fileParam = encodeURIComponent(cachedRequest.url);
            const descriptorParam = encodeURIComponent(descriptorJSON);
            const queryData = `?file=${fileParam}&fingerprint=${fingerprint}&descriptor=${descriptorParam}&filename=${filenameParam}`;
            const appURL = appPath + queryData;
            const docDimensions = Descriptors_1.Descriptors.calculateDocDimensions(descriptor);
            return {
                webResource: WebResource_1.WebResource.createURL(appURL),
                title: descriptor.title,
                docDimensions
            };
        });
    }
}
exports.PHZLoader = PHZLoader;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUEhaTG9hZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUEhaTG9hZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsa0VBQTZEO0FBQzdELDZEQUF3RDtBQUN4RCwyREFBc0Q7QUFDdEQsNkNBQXdDO0FBRXhDLDJFQUFzRTtBQUN0RSwrRUFBMEU7QUFFMUUsa0VBQTZEO0FBQzdELCtEQUEwRDtBQUcxRCxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFNUIsTUFBTSxhQUFhLEdBQWlCLFVBQVUsQ0FBQztBQUUvQyxNQUFhLFNBQVUsU0FBUSx1QkFBVTtJQUVyQyxZQUFvQixhQUE0QixFQUM1QixZQUEwQjtRQUMxQyxLQUFLLEVBQUUsQ0FBQztRQUZRLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLGlCQUFZLEdBQVosWUFBWSxDQUFjO0lBRTlDLENBQUM7SUFFWSxlQUFlLENBQUMsSUFBWTs7WUFFckMsNkJBQWEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ2hELDZCQUFhLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUUvQyxJQUFJLGFBQWEsS0FBSyxVQUFVLEVBQUU7Z0JBQzlCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNoQztpQkFBTTtnQkFDSCxPQUFPLE1BQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN0QztRQUVMLENBQUM7S0FBQTtJQUVPLFVBQVUsQ0FBQyxJQUFZO1FBRTNCLE1BQU0sUUFBUSxHQUFHLHFCQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTFDLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXRELE1BQU0sTUFBTSxHQUFHLFNBQVMsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUVqRSxPQUFPO1lBQ0gsV0FBVyxFQUFFLHlCQUFXLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztTQUM3QyxDQUFDO0lBRU4sQ0FBQztJQUVNLE1BQU0sQ0FBQyxlQUFlLENBQUMsT0FBZSxFQUFFLFFBQWdCO1FBRTNELE1BQU0sV0FBVyxHQUFHLDJCQUFZLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRWxELE1BQU0sTUFBTSxHQUFHO1lBQ1gsSUFBSSxFQUFFLGtCQUFrQixDQUFDLE9BQU8sQ0FBQztZQUNqQyxRQUFRLEVBQUUsa0JBQWtCLENBQUMsUUFBUSxDQUFDO1lBQ3RDLFdBQVc7U0FDZCxDQUFDO1FBRUYsT0FBTyw2QkFBYSxDQUFDLDBCQUEwQixDQUFDLCtCQUErQixNQUFNLENBQUMsSUFBSSxhQUFhLE1BQU0sQ0FBQyxRQUFRLGdCQUFnQixNQUFNLENBQUMsV0FBVyw2QkFBNkIsYUFBYSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFFak4sQ0FBQztJQUVhLFVBQVUsQ0FBQyxJQUFZOztZQUVqQyxNQUFNLFFBQVEsR0FBRyxxQkFBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUcxQyxNQUFNLG9CQUFvQixHQUFHLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFekUsR0FBRyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQztZQUsxRSxNQUFNLGFBQWEsR0FBRyxvQkFBb0IsQ0FBQyxjQUFjLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRTdGLEdBQUcsQ0FBQyxJQUFJLENBQUMscUJBQXFCLEdBQUcsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRXBELE1BQU0sVUFBVSxHQUFHLG9CQUFvQixDQUFDLFFBQVEsQ0FBQztZQUNqRCxNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBSWxELE1BQU0sUUFBUSxHQUFHLHFCQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBSTFDLE1BQU0sV0FBVyxHQUFHLDJCQUFZLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRWxELE1BQU0sT0FBTyxHQUFHLDZCQUFhLENBQUMsMEJBQTBCLENBQUMsd0JBQXdCLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFFMUYsTUFBTSxhQUFhLEdBQUcsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFbkQsTUFBTSxTQUFTLEdBQUcsa0JBQWtCLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3hELE1BQU0sZUFBZSxHQUFHLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBRTNELE1BQU0sU0FBUyxHQUFHLFNBQVMsU0FBUyxnQkFBZ0IsV0FBVyxlQUFlLGVBQWUsYUFBYSxhQUFhLEVBQUUsQ0FBQztZQUMxSCxNQUFNLE1BQU0sR0FBRyxPQUFPLEdBQUcsU0FBUyxDQUFDO1lBRW5DLE1BQU0sYUFBYSxHQUFHLHlCQUFXLENBQUMsc0JBQXNCLENBQUMsVUFBVSxDQUFDLENBQUM7WUFFckUsT0FBTztnQkFDSCxXQUFXLEVBQUUseUJBQVcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO2dCQUMxQyxLQUFLLEVBQUUsVUFBVSxDQUFDLEtBQUs7Z0JBQ3ZCLGFBQWE7YUFDaEIsQ0FBQztRQUVOLENBQUM7S0FBQTtDQUdKO0FBaEdELDhCQWdHQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UHJlY29uZGl0aW9uc30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9QcmVjb25kaXRpb25zJztcbmltcG9ydCB7RmluZ2VycHJpbnRzfSBmcm9tICcuLi8uLi8uLi91dGlsL0ZpbmdlcnByaW50cyc7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7RmlsZUxvYWRlcn0gZnJvbSAnLi9GaWxlTG9hZGVyJztcbmltcG9ydCB7Q2FjaGVSZWdpc3RyeX0gZnJvbSAnLi4vLi4vLi4vYmFja2VuZC9wcm94eXNlcnZlci9DYWNoZVJlZ2lzdHJ5JztcbmltcG9ydCB7V2ViUmVzb3VyY2V9IGZyb20gJy4uLy4uLy4uL2VsZWN0cm9uL3dlYnJlc291cmNlL1dlYlJlc291cmNlJztcbmltcG9ydCB7UmVzb3VyY2VQYXRoc30gZnJvbSAnLi4vLi4vLi4vZWxlY3Ryb24vd2VicmVzb3VyY2UvUmVzb3VyY2VQYXRocyc7XG5pbXBvcnQge0xvYWRlZEZpbGV9IGZyb20gJy4vTG9hZGVkRmlsZSc7XG5pbXBvcnQge0Rlc2NyaXB0b3JzfSBmcm9tICcuLi8uLi8uLi92aWV3ZXIvaHRtbC9EZXNjcmlwdG9ycyc7XG5pbXBvcnQge0ZpbGVQYXRoc30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL0ZpbGVQYXRocyc7XG5pbXBvcnQge0ZpbGVSZWdpc3RyeX0gZnJvbSBcInBvbGFyLXNoYXJlZC13ZWJzZXJ2ZXIvc3JjL3dlYnNlcnZlci9GaWxlUmVnaXN0cnlcIjtcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG5jb25zdCBMT0FEX1NUUkFURUdZOiBMb2FkU3RyYXRlZ3kgPSAncG9ydGFibGUnO1xuXG5leHBvcnQgY2xhc3MgUEhaTG9hZGVyIGV4dGVuZHMgRmlsZUxvYWRlciB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNhY2hlUmVnaXN0cnk6IENhY2hlUmVnaXN0cnksXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBmaWxlUmVnaXN0cnk6IEZpbGVSZWdpc3RyeSkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyByZWdpc3RlckZvckxvYWQocGF0aDogc3RyaW5nKTogUHJvbWlzZTxMb2FkZWRGaWxlPiB7XG5cbiAgICAgICAgUHJlY29uZGl0aW9ucy5hc3NlcnROb3ROdWxsKHRoaXMuY2FjaGVSZWdpc3RyeSk7XG4gICAgICAgIFByZWNvbmRpdGlvbnMuYXNzZXJ0Tm90TnVsbCh0aGlzLmZpbGVSZWdpc3RyeSk7XG5cbiAgICAgICAgaWYgKExPQURfU1RSQVRFR1kgPT09ICdwb3J0YWJsZScpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRvUG9ydGFibGUocGF0aCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5kb0VsZWN0cm9uKHBhdGgpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGRvUG9ydGFibGUocGF0aDogc3RyaW5nKSB7XG5cbiAgICAgICAgY29uc3QgZmlsZW5hbWUgPSBGaWxlUGF0aHMuYmFzZW5hbWUocGF0aCk7XG5cbiAgICAgICAgY29uc3QgZmlsZU1ldGEgPSB0aGlzLmZpbGVSZWdpc3RyeS5yZWdpc3RlckZpbGUocGF0aCk7XG5cbiAgICAgICAgY29uc3QgYXBwVVJMID0gUEhaTG9hZGVyLmNyZWF0ZVZpZXdlclVSTChmaWxlTWV0YS51cmwsIGZpbGVuYW1lKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2ViUmVzb3VyY2U6IFdlYlJlc291cmNlLmNyZWF0ZVVSTChhcHBVUkwpXG4gICAgICAgIH07XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZVZpZXdlclVSTChmaWxlVVJMOiBzdHJpbmcsIGZpbGVuYW1lOiBzdHJpbmcpIHtcblxuICAgICAgICBjb25zdCBmaW5nZXJwcmludCA9IEZpbmdlcnByaW50cy5jcmVhdGUoZmlsZW5hbWUpO1xuXG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgICAgICAgIGZpbGU6IGVuY29kZVVSSUNvbXBvbmVudChmaWxlVVJMKSxcbiAgICAgICAgICAgIGZpbGVuYW1lOiBlbmNvZGVVUklDb21wb25lbnQoZmlsZW5hbWUpLFxuICAgICAgICAgICAgZmluZ2VycHJpbnRcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gUmVzb3VyY2VQYXRocy5yZXNvdXJjZVVSTEZyb21SZWxhdGl2ZVVSTChgL2h0bWx2aWV3ZXIvaW5kZXguaHRtbD9maWxlPSR7cGFyYW1zLmZpbGV9JmZpbGVuYW1lPSR7cGFyYW1zLmZpbGVuYW1lfSZmaW5nZXJwcmludD0ke3BhcmFtcy5maW5nZXJwcmludH0mem9vbT1wYWdlLXdpZHRoJnN0cmF0ZWd5PSR7TE9BRF9TVFJBVEVHWX1gLCBmYWxzZSk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGRvRWxlY3Ryb24ocGF0aDogc3RyaW5nKSB7XG5cbiAgICAgICAgY29uc3QgZmlsZW5hbWUgPSBGaWxlUGF0aHMuYmFzZW5hbWUocGF0aCk7XG5cbiAgICAgICAgLy8gcmVnaXN0ZXIgdGhlIHBoei4gIHRoZSBjYWNoZSBpbnRlcmNlcHRvciBzaG91bGQgZG8gdGhlIHJlc3QuXG4gICAgICAgIGNvbnN0IGNhY2hlZFJlcXVlc3RzSG9sZGVyID0gYXdhaXQgdGhpcy5jYWNoZVJlZ2lzdHJ5LnJlZ2lzdGVyRmlsZShwYXRoKTtcblxuICAgICAgICBsb2cuaW5mbyhcImNhY2hlZFJlcXVlc3RzSG9sZGVyOiBcIiArIEpTT04uc3RyaW5naWZ5KGNhY2hlZFJlcXVlc3RzSG9sZGVyKSk7XG5cbiAgICAgICAgLy8gZ2V0IHRoZSBjYWNoZSBtZXRhZGF0YSBmb3IgdGhlIHByaW1hcnkgVVJMIGFzIGl0IHdpbGwgd29yayBmb3IgdGhlXG4gICAgICAgIC8vIHN1YnNlcXVlbnQgVVJMcyB0b28uXG5cbiAgICAgICAgY29uc3QgY2FjaGVkUmVxdWVzdCA9IGNhY2hlZFJlcXVlc3RzSG9sZGVyLmNhY2hlZFJlcXVlc3RzW2NhY2hlZFJlcXVlc3RzSG9sZGVyLm1ldGFkYXRhLnVybF07XG5cbiAgICAgICAgbG9nLmluZm8oXCJHb2luZyB0byBsb2FkIFVSTDogXCIgKyBjYWNoZWRSZXF1ZXN0LnVybCk7XG5cbiAgICAgICAgY29uc3QgZGVzY3JpcHRvciA9IGNhY2hlZFJlcXVlc3RzSG9sZGVyLm1ldGFkYXRhO1xuICAgICAgICBjb25zdCBkZXNjcmlwdG9ySlNPTiA9IEpTT04uc3RyaW5naWZ5KGRlc2NyaXB0b3IpO1xuXG4gICAgICAgIC8vIHdlIGRvbid0IG5lZWQgdGhlIGNvbnRlbnQgcmVwcmVzZW50ZWQgdHdpY2UuXG5cbiAgICAgICAgY29uc3QgYmFzZW5hbWUgPSBGaWxlUGF0aHMuYmFzZW5hbWUocGF0aCk7XG5cbiAgICAgICAgLy8gVE9ETzogdGhpcyBpcyB3b3JrYXJvdW5kIHVudGlsIHdlIGVuYWJsZSB6aXAgZmlsZXMgd2l0aCBlbWJlZGRlZFxuICAgICAgICAvLyBtZXRhZGF0YSAvIGRlc2NyaXB0b3JzXG4gICAgICAgIGNvbnN0IGZpbmdlcnByaW50ID0gRmluZ2VycHJpbnRzLmNyZWF0ZShiYXNlbmFtZSk7XG5cbiAgICAgICAgY29uc3QgYXBwUGF0aCA9IFJlc291cmNlUGF0aHMucmVzb3VyY2VVUkxGcm9tUmVsYXRpdmVVUkwoJy9odG1sdmlld2VyL2luZGV4Lmh0bWwnLCBmYWxzZSk7XG5cbiAgICAgICAgY29uc3QgZmlsZW5hbWVQYXJhbSA9IGVuY29kZVVSSUNvbXBvbmVudChmaWxlbmFtZSk7XG5cbiAgICAgICAgY29uc3QgZmlsZVBhcmFtID0gZW5jb2RlVVJJQ29tcG9uZW50KGNhY2hlZFJlcXVlc3QudXJsKTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRvclBhcmFtID0gZW5jb2RlVVJJQ29tcG9uZW50KGRlc2NyaXB0b3JKU09OKTtcblxuICAgICAgICBjb25zdCBxdWVyeURhdGEgPSBgP2ZpbGU9JHtmaWxlUGFyYW19JmZpbmdlcnByaW50PSR7ZmluZ2VycHJpbnR9JmRlc2NyaXB0b3I9JHtkZXNjcmlwdG9yUGFyYW19JmZpbGVuYW1lPSR7ZmlsZW5hbWVQYXJhbX1gO1xuICAgICAgICBjb25zdCBhcHBVUkwgPSBhcHBQYXRoICsgcXVlcnlEYXRhO1xuXG4gICAgICAgIGNvbnN0IGRvY0RpbWVuc2lvbnMgPSBEZXNjcmlwdG9ycy5jYWxjdWxhdGVEb2NEaW1lbnNpb25zKGRlc2NyaXB0b3IpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB3ZWJSZXNvdXJjZTogV2ViUmVzb3VyY2UuY3JlYXRlVVJMKGFwcFVSTCksXG4gICAgICAgICAgICB0aXRsZTogZGVzY3JpcHRvci50aXRsZSxcbiAgICAgICAgICAgIGRvY0RpbWVuc2lvbnNcbiAgICAgICAgfTtcblxuICAgIH1cblxuXG59XG5cbmV4cG9ydCB0eXBlIExvYWRTdHJhdGVneSA9ICdlbGVjdHJvbicgfCAncG9ydGFibGUnO1xuIl19