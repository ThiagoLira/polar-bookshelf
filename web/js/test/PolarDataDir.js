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
const FilePaths_1 = require("polar-shared/src/util/FilePaths");
const Files_1 = require("polar-shared/src/util/Files");
const Logger_1 = require("polar-shared/src/logger/Logger");
const Directories_1 = require("../datastore/Directories");
const log = Logger_1.Logger.create();
class PolarDataDir {
    static useFreshDirectory(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const dataDir = FilePaths_1.FilePaths.createTempName(name);
            process.env.POLAR_DATA_DIR = dataDir;
            console.log("Using new dataDir: " + dataDir);
            yield Files_1.Files.removeDirectoryRecursivelyAsync(dataDir);
            const directories = new Directories_1.Directories();
            yield Files_1.Files.createDirAsync(directories.dataDir),
                yield Files_1.Files.createDirAsync(directories.stashDir),
                yield Files_1.Files.createDirAsync(directories.logsDir),
                yield Files_1.Files.createDirAsync(directories.configDir),
                log.info("Using polar data dir: " + dataDir);
            return dataDir;
        });
    }
    static reuseDirectory(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const dataDir = FilePaths_1.FilePaths.createTempName(name);
            process.env.POLAR_DATA_DIR = dataDir;
            const directories = new Directories_1.Directories();
            yield directories.init();
            log.info("Using polar data dir: " + dataDir);
            return dataDir;
        });
    }
    static get() {
        return process.env.POLAR_DATA_DIR;
    }
}
exports.PolarDataDir = PolarDataDir;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUG9sYXJEYXRhRGlyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUG9sYXJEYXRhRGlyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsK0RBQTBEO0FBQzFELHVEQUFrRDtBQUNsRCwyREFBc0Q7QUFDdEQsMERBQXFEO0FBRXJELE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU1QixNQUFhLFlBQVk7SUFFZCxNQUFNLENBQU8saUJBQWlCLENBQUMsSUFBWTs7WUFFOUMsTUFBTSxPQUFPLEdBQUcscUJBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEdBQUcsT0FBTyxDQUFDO1lBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEdBQUcsT0FBTyxDQUFDLENBQUM7WUFDN0MsTUFBTSxhQUFLLENBQUMsK0JBQStCLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFckQsTUFBTSxXQUFXLEdBQUcsSUFBSSx5QkFBVyxFQUFFLENBQUM7WUFFdEMsTUFBTSxhQUFLLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUM7Z0JBQy9DLE1BQU0sYUFBSyxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDO2dCQUNoRCxNQUFNLGFBQUssQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQztnQkFDL0MsTUFBTSxhQUFLLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUM7Z0JBRWpELEdBQUcsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLEdBQUcsT0FBTyxDQUFDLENBQUM7WUFFN0MsT0FBTyxPQUFPLENBQUM7UUFFbkIsQ0FBQztLQUFBO0lBRU0sTUFBTSxDQUFPLGNBQWMsQ0FBQyxJQUFZOztZQUUzQyxNQUFNLE9BQU8sR0FBRyxxQkFBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMvQyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsR0FBRyxPQUFPLENBQUM7WUFFckMsTUFBTSxXQUFXLEdBQUcsSUFBSSx5QkFBVyxFQUFFLENBQUM7WUFDdEMsTUFBTSxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7WUFFekIsR0FBRyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxPQUFPLENBQUMsQ0FBQztZQUU3QyxPQUFPLE9BQU8sQ0FBQztRQUVuQixDQUFDO0tBQUE7SUFFTSxNQUFNLENBQUMsR0FBRztRQUNiLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUM7SUFDdEMsQ0FBQztDQUVKO0FBeENELG9DQXdDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RmlsZVBhdGhzfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvRmlsZVBhdGhzJztcbmltcG9ydCB7RmlsZXN9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC9GaWxlcyc7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7RGlyZWN0b3JpZXN9IGZyb20gJy4uL2RhdGFzdG9yZS9EaXJlY3Rvcmllcyc7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuZXhwb3J0IGNsYXNzIFBvbGFyRGF0YURpciB7XG5cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIHVzZUZyZXNoRGlyZWN0b3J5KG5hbWU6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG5cbiAgICAgICAgY29uc3QgZGF0YURpciA9IEZpbGVQYXRocy5jcmVhdGVUZW1wTmFtZShuYW1lKTtcbiAgICAgICAgcHJvY2Vzcy5lbnYuUE9MQVJfREFUQV9ESVIgPSBkYXRhRGlyO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlVzaW5nIG5ldyBkYXRhRGlyOiBcIiArIGRhdGFEaXIpO1xuICAgICAgICBhd2FpdCBGaWxlcy5yZW1vdmVEaXJlY3RvcnlSZWN1cnNpdmVseUFzeW5jKGRhdGFEaXIpO1xuXG4gICAgICAgIGNvbnN0IGRpcmVjdG9yaWVzID0gbmV3IERpcmVjdG9yaWVzKCk7XG5cbiAgICAgICAgYXdhaXQgRmlsZXMuY3JlYXRlRGlyQXN5bmMoZGlyZWN0b3JpZXMuZGF0YURpciksXG4gICAgICAgIGF3YWl0IEZpbGVzLmNyZWF0ZURpckFzeW5jKGRpcmVjdG9yaWVzLnN0YXNoRGlyKSxcbiAgICAgICAgYXdhaXQgRmlsZXMuY3JlYXRlRGlyQXN5bmMoZGlyZWN0b3JpZXMubG9nc0RpciksXG4gICAgICAgIGF3YWl0IEZpbGVzLmNyZWF0ZURpckFzeW5jKGRpcmVjdG9yaWVzLmNvbmZpZ0RpciksXG5cbiAgICAgICAgbG9nLmluZm8oXCJVc2luZyBwb2xhciBkYXRhIGRpcjogXCIgKyBkYXRhRGlyKTtcblxuICAgICAgICByZXR1cm4gZGF0YURpcjtcblxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgcmV1c2VEaXJlY3RvcnkobmFtZTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcblxuICAgICAgICBjb25zdCBkYXRhRGlyID0gRmlsZVBhdGhzLmNyZWF0ZVRlbXBOYW1lKG5hbWUpO1xuICAgICAgICBwcm9jZXNzLmVudi5QT0xBUl9EQVRBX0RJUiA9IGRhdGFEaXI7XG5cbiAgICAgICAgY29uc3QgZGlyZWN0b3JpZXMgPSBuZXcgRGlyZWN0b3JpZXMoKTtcbiAgICAgICAgYXdhaXQgZGlyZWN0b3JpZXMuaW5pdCgpO1xuXG4gICAgICAgIGxvZy5pbmZvKFwiVXNpbmcgcG9sYXIgZGF0YSBkaXI6IFwiICsgZGF0YURpcik7XG5cbiAgICAgICAgcmV0dXJuIGRhdGFEaXI7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHByb2Nlc3MuZW52LlBPTEFSX0RBVEFfRElSO1xuICAgIH1cblxufVxuIl19