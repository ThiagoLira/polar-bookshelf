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
const Platforms_1 = require("polar-shared/src/util/Platforms");
const FilePaths_1 = require("polar-shared/src/util/FilePaths");
const os_1 = __importDefault(require("os"));
const Files_1 = require("polar-shared/src/util/Files");
class RepositoryDocLoaders {
    static computeLoadPaths() {
        return __awaiter(this, void 0, void 0, function* () {
            const platform = Platforms_1.Platforms.get();
            const pathMetas = [
                yield this.pathMeta(FilePaths_1.FilePaths.resolve(os_1.default.homedir(), 'Downloads')),
                yield this.pathMeta(FilePaths_1.FilePaths.resolve(os_1.default.homedir(), 'Documents')),
                yield this.pathMeta(FilePaths_1.FilePaths.resolve(os_1.default.homedir(), 'Zotero'))
            ];
            return pathMetas.filter(current => current.exists)
                .map(current => current.path);
        });
    }
    static computeDocumentsForLoad(paths, listener, aborter = Files_1.Aborters.maxTime()) {
        return __awaiter(this, void 0, void 0, function* () {
            const docPaths = [];
            for (const path of paths) {
                yield Files_1.Files.recursively(path, (docPath) => __awaiter(this, void 0, void 0, function* () {
                    if (FilePaths_1.FilePaths.hasExtension(docPath, "pdf")) {
                        docPaths.push(docPath);
                    }
                }), aborter);
            }
            return docPaths;
        });
    }
    static pathMeta(path) {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                path,
                exists: yield Files_1.Files.existsAsync(path)
            };
        });
    }
}
exports.RepositoryDocLoaders = RepositoryDocLoaders;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVwb3NpdG9yeURvY0xvYWRlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJSZXBvc2l0b3J5RG9jTG9hZGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLCtEQUEwRDtBQUMxRCwrREFBMEQ7QUFDMUQsNENBQW9CO0FBQ3BCLHVEQUFxRTtBQUtyRSxNQUFhLG9CQUFvQjtJQU10QixNQUFNLENBQU8sZ0JBQWdCOztZQUVoQyxNQUFNLFFBQVEsR0FBRyxxQkFBUyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBRWpDLE1BQU0sU0FBUyxHQUFHO2dCQUNkLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxxQkFBUyxDQUFDLE9BQU8sQ0FBQyxZQUFFLENBQUMsT0FBTyxFQUFFLEVBQUUsV0FBVyxDQUFDLENBQUM7Z0JBQ2pFLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxxQkFBUyxDQUFDLE9BQU8sQ0FBQyxZQUFFLENBQUMsT0FBTyxFQUFFLEVBQUUsV0FBVyxDQUFDLENBQUM7Z0JBQ2pFLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxxQkFBUyxDQUFDLE9BQU8sQ0FBQyxZQUFFLENBQUMsT0FBTyxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUM7YUFDakUsQ0FBQztZQUVGLE9BQU8sU0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7aUJBQ2pDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVsRCxDQUFDO0tBQUE7SUFFTSxNQUFNLENBQU8sdUJBQXVCLENBQUMsS0FBZSxFQUNmLFFBQTJCLEVBQzNCLFVBQW1CLGdCQUFRLENBQUMsT0FBTyxFQUFFOztZQUU3RSxNQUFNLFFBQVEsR0FBYSxFQUFFLENBQUM7WUFFOUIsS0FBSyxNQUFNLElBQUksSUFBSSxLQUFLLEVBQUU7Z0JBRXRCLE1BQU0sYUFBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBTSxPQUFPLEVBQUMsRUFBRTtvQkFFMUMsSUFBSSxxQkFBUyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLEVBQUU7d0JBQ3hDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7cUJBQzFCO2dCQUVMLENBQUMsQ0FBQSxFQUFFLE9BQU8sQ0FBQyxDQUFDO2FBRWY7WUFFRCxPQUFPLFFBQVEsQ0FBQztRQUVwQixDQUFDO0tBQUE7SUFFTyxNQUFNLENBQU8sUUFBUSxDQUFDLElBQVk7O1lBRXRDLE9BQU87Z0JBQ0gsSUFBSTtnQkFDSixNQUFNLEVBQUUsTUFBTSxhQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQzthQUN4QyxDQUFDO1FBRU4sQ0FBQztLQUFBO0NBRUo7QUFwREQsb0RBb0RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQbGF0Zm9ybXN9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL3V0aWwvUGxhdGZvcm1zXCI7XG5pbXBvcnQge0ZpbGVQYXRoc30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL0ZpbGVQYXRocyc7XG5pbXBvcnQgb3MgZnJvbSBcIm9zXCI7XG5pbXBvcnQge0Fib3J0ZXIsIEFib3J0ZXJzLCBGaWxlc30gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvdXRpbC9GaWxlc1wiO1xuXG4vKipcbiAqXG4gKi9cbmV4cG9ydCBjbGFzcyBSZXBvc2l0b3J5RG9jTG9hZGVycyB7XG5cbiAgICAvKipcbiAgICAgKiBCYXNlZCBvbiB0aGUgcGxhdGZvcm0sIGNvbXB1dGUgYSBsaXN0IG9mIGRpcmVjdG9yaWVzIHdoZXJlIHdlIHNob3VsZFxuICAgICAqIGF0dGVtcHQgdG8gbG9hZCBmaWxlcyAoRGVza3RvcCwgRG9jdW1lbnRzLCBhbmQgWm90ZXJvIGFuZCBvdGhlciBhcHBzKS5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIGNvbXB1dGVMb2FkUGF0aHMoKTogUHJvbWlzZTxzdHJpbmdbXT4ge1xuXG4gICAgICAgIGNvbnN0IHBsYXRmb3JtID0gUGxhdGZvcm1zLmdldCgpO1xuXG4gICAgICAgIGNvbnN0IHBhdGhNZXRhcyA9IFtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGF0aE1ldGEoRmlsZVBhdGhzLnJlc29sdmUob3MuaG9tZWRpcigpLCAnRG93bmxvYWRzJykpLFxuICAgICAgICAgICAgYXdhaXQgdGhpcy5wYXRoTWV0YShGaWxlUGF0aHMucmVzb2x2ZShvcy5ob21lZGlyKCksICdEb2N1bWVudHMnKSksXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBhdGhNZXRhKEZpbGVQYXRocy5yZXNvbHZlKG9zLmhvbWVkaXIoKSwgJ1pvdGVybycpKVxuICAgICAgICBdO1xuXG4gICAgICAgIHJldHVybiBwYXRoTWV0YXMuZmlsdGVyKGN1cnJlbnQgPT4gY3VycmVudC5leGlzdHMpXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKGN1cnJlbnQgPT4gY3VycmVudC5wYXRoKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgY29tcHV0ZURvY3VtZW50c0ZvckxvYWQocGF0aHM6IHN0cmluZ1tdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXI6IFJlY3Vyc2l2ZVByb2dyZXNzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWJvcnRlcjogQWJvcnRlciA9IEFib3J0ZXJzLm1heFRpbWUoKSkge1xuXG4gICAgICAgIGNvbnN0IGRvY1BhdGhzOiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgICAgIGZvciAoY29uc3QgcGF0aCBvZiBwYXRocykge1xuXG4gICAgICAgICAgICBhd2FpdCBGaWxlcy5yZWN1cnNpdmVseShwYXRoLCBhc3luYyBkb2NQYXRoID0+IHtcblxuICAgICAgICAgICAgICAgIGlmIChGaWxlUGF0aHMuaGFzRXh0ZW5zaW9uKGRvY1BhdGgsIFwicGRmXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvY1BhdGhzLnB1c2goZG9jUGF0aCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9LCBhYm9ydGVyKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRvY1BhdGhzO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgYXN5bmMgcGF0aE1ldGEocGF0aDogc3RyaW5nKTogUHJvbWlzZTxQYXRoTWV0YT4ge1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwYXRoLFxuICAgICAgICAgICAgZXhpc3RzOiBhd2FpdCBGaWxlcy5leGlzdHNBc3luYyhwYXRoKVxuICAgICAgICB9O1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVjdXJzaXZlUHJvZ3Jlc3Mge1xuXG4gICAgLyoqXG4gICAgICogVGhlIGRvY3VtZW50IHBhdGhzIHRoYXQgd2UndmUgYWxyZWFkeSBmb3VuZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBkb2NQYXRoczogc3RyaW5nW107XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY3VycmVudCBwYXRoIHdlJ3JlIGV2YWx1YXRpbmcuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcGF0aDogc3RyaW5nO1xuXG59XG5cbmV4cG9ydCB0eXBlIFJlY3Vyc2l2ZVByb2dyZXNzTGlzdGVuZXIgPSAocHJvZ3Jlc3M6IFJlY3Vyc2l2ZVByb2dyZXNzKSA9PiB2b2lkO1xuXG5pbnRlcmZhY2UgUGF0aE1ldGEge1xuICAgIHJlYWRvbmx5IHBhdGg6IHN0cmluZztcbiAgICByZWFkb25seSBleGlzdHM6IGJvb2xlYW47XG59XG4iXX0=