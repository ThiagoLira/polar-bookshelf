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
const DiskDatastore_1 = require("./DiskDatastore");
const Files_1 = require("polar-shared/src/util/Files");
const FilePaths_1 = require("polar-shared/src/util/FilePaths");
const Preconditions_1 = require("polar-shared/src/Preconditions");
class Directories {
    constructor() {
        this.dataDirConfig = Directories.getDataDir();
        this.dataDir = this.dataDirConfig.path;
        this.stashDir = FilePaths_1.FilePaths.create(this.dataDir, "stash");
        this.filesDir = FilePaths_1.FilePaths.create(this.dataDir, "files");
        this.logsDir = FilePaths_1.FilePaths.create(this.dataDir, "logs");
        this.configDir = FilePaths_1.FilePaths.create(this.dataDir, "config");
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            this.initialization = {
                dataDir: yield Files_1.Files.createDirAsync(this.dataDir),
                stashDir: yield Files_1.Files.createDirAsync(this.stashDir),
                filesDir: yield Files_1.Files.createDirAsync(this.filesDir),
                logsDir: yield Files_1.Files.createDirAsync(this.logsDir),
                configDir: yield Files_1.Files.createDirAsync(this.configDir)
            };
            return this;
        });
    }
    static getDataDir() {
        let dataDirs = [
            {
                path: GlobalDataDir.get(),
                strategy: 'manual'
            },
            {
                path: process.env.POLAR_DATA_DIR,
                strategy: 'env'
            },
            {
                path: FilePaths_1.FilePaths.join(DiskDatastore_1.DiskDatastore.getUserHome(), ".polar"),
                strategy: 'home',
            }
        ];
        dataDirs = dataDirs.filter(current => Preconditions_1.isPresent(current.path));
        const dataDir = dataDirs[0];
        return {
            path: dataDir.path,
            strategy: dataDir.strategy
        };
    }
}
exports.Directories = Directories;
class GlobalDataDir {
    static set(value) {
        this.value = value;
    }
    static get() {
        return this.value;
    }
}
exports.GlobalDataDir = GlobalDataDir;
GlobalDataDir.value = undefined;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGlyZWN0b3JpZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJEaXJlY3Rvcmllcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUdBLG1EQUFzRTtBQUN0RSx1REFBbUU7QUFDbkUsK0RBQTBEO0FBQzFELGtFQUF5RDtBQUV6RCxNQUFhLFdBQVc7SUFrQnBCO1FBRUksSUFBSSxDQUFDLGFBQWEsR0FBRyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUM7UUFFOUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQztRQUd2QyxJQUFJLENBQUMsUUFBUSxHQUFHLHFCQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxxQkFBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxPQUFPLEdBQUcscUJBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsU0FBUyxHQUFHLHFCQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFFOUQsQ0FBQztJQUVZLElBQUk7O1lBRWIsSUFBSSxDQUFDLGNBQWMsR0FBRztnQkFDbEIsT0FBTyxFQUFFLE1BQU0sYUFBSyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNqRCxRQUFRLEVBQUUsTUFBTSxhQUFLLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQ25ELFFBQVEsRUFBRSxNQUFNLGFBQUssQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDbkQsT0FBTyxFQUFFLE1BQU0sYUFBSyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNqRCxTQUFTLEVBQUUsTUFBTSxhQUFLLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7YUFDeEQsQ0FBQztZQUVGLE9BQU8sSUFBSSxDQUFDO1FBRWhCLENBQUM7S0FBQTtJQUVNLE1BQU0sQ0FBQyxVQUFVO1FBRXBCLElBQUksUUFBUSxHQUFjO1lBQ3RCO2dCQUlJLElBQUksRUFBRSxhQUFhLENBQUMsR0FBRyxFQUFFO2dCQUN6QixRQUFRLEVBQUUsUUFBUTthQUNyQjtZQUNEO2dCQUVJLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWM7Z0JBQ2hDLFFBQVEsRUFBRSxLQUFLO2FBQ2xCO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLHFCQUFTLENBQUMsSUFBSSxDQUFDLDZCQUFhLENBQUMsV0FBVyxFQUFFLEVBQUUsUUFBUSxDQUFDO2dCQUMzRCxRQUFRLEVBQUUsTUFBTTthQUNuQjtTQUNKLENBQUM7UUFHRixRQUFRLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLHlCQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFFL0QsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTVCLE9BQU87WUFDSCxJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUs7WUFDbkIsUUFBUSxFQUFFLE9BQU8sQ0FBQyxRQUFRO1NBQzdCLENBQUM7SUFFTixDQUFDO0NBRUo7QUEvRUQsa0NBK0VDO0FBT0QsTUFBYSxhQUFhO0lBSWYsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUF5QjtRQUN2QyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBRU0sTUFBTSxDQUFDLEdBQUc7UUFDYixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDdEIsQ0FBQzs7QUFWTCxzQ0FZQztBQVZrQixtQkFBSyxHQUF1QixTQUFTLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFJlcHJlc2VudHMga2V5IGxvY2FsIGRpcmVjdG9yaWVzIGZvciBQb2xhciB3aGVuIHJ1bm5pbmcgbG9jYWxseS5cbiAqL1xuaW1wb3J0IHtEYXRhRGlyLCBEYXRhRGlyQ29uZmlnLCBEaXNrRGF0YXN0b3JlfSBmcm9tICcuL0Rpc2tEYXRhc3RvcmUnO1xuaW1wb3J0IHtDcmVhdGVEaXJSZXN1bHQsIEZpbGVzfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvRmlsZXMnO1xuaW1wb3J0IHtGaWxlUGF0aHN9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC9GaWxlUGF0aHMnO1xuaW1wb3J0IHtpc1ByZXNlbnR9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvUHJlY29uZGl0aW9ucyc7XG5cbmV4cG9ydCBjbGFzcyBEaXJlY3RvcmllcyB7XG5cbiAgICBwdWJsaWMgcmVhZG9ubHkgZGF0YURpcjogc3RyaW5nO1xuICAgIHB1YmxpYyByZWFkb25seSBzdGFzaERpcjogc3RyaW5nO1xuICAgIHB1YmxpYyByZWFkb25seSBmaWxlc0Rpcjogc3RyaW5nO1xuICAgIHB1YmxpYyByZWFkb25seSBsb2dzRGlyOiBzdHJpbmc7XG4gICAgcHVibGljIHJlYWRvbmx5IGNvbmZpZ0Rpcjogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKlxuICAgICAqIEV4cG9zZSB0aGUgRGF0YURpckNvbmZpZyBzbyB0ZXN0cyBhbmQgb3RoZXIgc3lzdGVtcyBjYW4gc2VlIGhvdyB0aGVcbiAgICAgKiBkYXRhRGlyIHdhcyBzZXR1cCBmb3IgdGhlIERpc2tEYXRhc3RvcmUuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGRhdGFEaXJDb25maWc6IERhdGFEaXJDb25maWc7XG5cbiAgICBwdWJsaWMgaW5pdGlhbGl6YXRpb24/OiBJbml0aWFsaXphdGlvbjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgICAgIHRoaXMuZGF0YURpckNvbmZpZyA9IERpcmVjdG9yaWVzLmdldERhdGFEaXIoKTtcblxuICAgICAgICB0aGlzLmRhdGFEaXIgPSB0aGlzLmRhdGFEaXJDb25maWcucGF0aDtcblxuICAgICAgICAvLyB0aGUgcGF0aCB0byB0aGUgc3Rhc2ggZGlyZWN0b3J5XG4gICAgICAgIHRoaXMuc3Rhc2hEaXIgPSBGaWxlUGF0aHMuY3JlYXRlKHRoaXMuZGF0YURpciwgXCJzdGFzaFwiKTtcbiAgICAgICAgdGhpcy5maWxlc0RpciA9IEZpbGVQYXRocy5jcmVhdGUodGhpcy5kYXRhRGlyLCBcImZpbGVzXCIpO1xuICAgICAgICB0aGlzLmxvZ3NEaXIgPSBGaWxlUGF0aHMuY3JlYXRlKHRoaXMuZGF0YURpciwgXCJsb2dzXCIpO1xuICAgICAgICB0aGlzLmNvbmZpZ0RpciA9IEZpbGVQYXRocy5jcmVhdGUodGhpcy5kYXRhRGlyLCBcImNvbmZpZ1wiKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBpbml0KCkge1xuXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6YXRpb24gPSB7XG4gICAgICAgICAgICBkYXRhRGlyOiBhd2FpdCBGaWxlcy5jcmVhdGVEaXJBc3luYyh0aGlzLmRhdGFEaXIpLFxuICAgICAgICAgICAgc3Rhc2hEaXI6IGF3YWl0IEZpbGVzLmNyZWF0ZURpckFzeW5jKHRoaXMuc3Rhc2hEaXIpLFxuICAgICAgICAgICAgZmlsZXNEaXI6IGF3YWl0IEZpbGVzLmNyZWF0ZURpckFzeW5jKHRoaXMuZmlsZXNEaXIpLFxuICAgICAgICAgICAgbG9nc0RpcjogYXdhaXQgRmlsZXMuY3JlYXRlRGlyQXN5bmModGhpcy5sb2dzRGlyKSxcbiAgICAgICAgICAgIGNvbmZpZ0RpcjogYXdhaXQgRmlsZXMuY3JlYXRlRGlyQXN5bmModGhpcy5jb25maWdEaXIpXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldERhdGFEaXIoKTogRGF0YURpckNvbmZpZyB7XG5cbiAgICAgICAgbGV0IGRhdGFEaXJzOiBEYXRhRGlyW10gPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8gY29uZmlndXJlZCB2aWEgc3RhdGljLiAgSSB0aGluayB3ZSBzaG91bGQgZGVwcmVjYXRlIHRoaXMgaW4gdGhlXG4gICAgICAgICAgICAgICAgLy8gZnV0dXJlIGFzIHRoZSBlbnYgdmFyIHNlZW1zIG1vcmUgZmxleGlibGUgYW5kIHdvcmtzIGFjcm9zc1xuICAgICAgICAgICAgICAgIC8vIHByb2Nlc3NlcyB3aGVuIHVzaW5nIHNwZWN0cm9uLCByZW5kZXJlcnMsIGFuZCBtYWluLlxuICAgICAgICAgICAgICAgIHBhdGg6IEdsb2JhbERhdGFEaXIuZ2V0KCksXG4gICAgICAgICAgICAgICAgc3RyYXRlZ3k6ICdtYW51YWwnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vIG1hbnVhbGx5IGNvbmZpZ3VyZWQgZnJvbSB0aGUgZW52aXJvbm1lbnRcbiAgICAgICAgICAgICAgICBwYXRoOiBwcm9jZXNzLmVudi5QT0xBUl9EQVRBX0RJUixcbiAgICAgICAgICAgICAgICBzdHJhdGVneTogJ2VudidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aDogRmlsZVBhdGhzLmpvaW4oRGlza0RhdGFzdG9yZS5nZXRVc2VySG9tZSgpLCBcIi5wb2xhclwiKSxcbiAgICAgICAgICAgICAgICBzdHJhdGVneTogJ2hvbWUnLFxuICAgICAgICAgICAgfVxuICAgICAgICBdO1xuXG4gICAgICAgIC8vIHJlbW92ZSBhbnkgcGF0aHMgdGhhdCBhcmUgbWlzc2luZy4uLlxuICAgICAgICBkYXRhRGlycyA9IGRhdGFEaXJzLmZpbHRlcihjdXJyZW50ID0+IGlzUHJlc2VudChjdXJyZW50LnBhdGgpKTtcblxuICAgICAgICBjb25zdCBkYXRhRGlyID0gZGF0YURpcnNbMF07XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBhdGg6IGRhdGFEaXIucGF0aCEsXG4gICAgICAgICAgICBzdHJhdGVneTogZGF0YURpci5zdHJhdGVneVxuICAgICAgICB9O1xuXG4gICAgfVxuXG59XG5cblxuLyoqXG4gKiBBbGxvd3MgdXMgdG8gb3ZlcnJpZGUgdGhlIGRhdGEgZGlyIGludGVybmFsbHkgZm9yIHRlc3RpbmcgcmF0aGVyIHRoYW4gc2V0dGluZ1xuICogYW4gZW52aXJvbm1lbnQgdmFyaWFibGUuXG4gKi9cbmV4cG9ydCBjbGFzcyBHbG9iYWxEYXRhRGlyIHtcblxuICAgIHByaXZhdGUgc3RhdGljIHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG5cbiAgICBwdWJsaWMgc3RhdGljIHNldCh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gICAgfVxuXG59XG5cbi8qKlxuICogUmVzdWx0cyBvZiBpbml0aWFsaXphdGlvbjpcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJbml0aWFsaXphdGlvbiB7XG4gICAgcmVhZG9ubHkgZGF0YURpcjogQ3JlYXRlRGlyUmVzdWx0O1xuICAgIHJlYWRvbmx5IHN0YXNoRGlyOiBDcmVhdGVEaXJSZXN1bHQ7XG4gICAgcmVhZG9ubHkgZmlsZXNEaXI6IENyZWF0ZURpclJlc3VsdDtcbiAgICByZWFkb25seSBsb2dzRGlyOiBDcmVhdGVEaXJSZXN1bHQ7XG4gICAgcmVhZG9ubHkgY29uZmlnRGlyOiBDcmVhdGVEaXJSZXN1bHQ7XG59XG4iXX0=