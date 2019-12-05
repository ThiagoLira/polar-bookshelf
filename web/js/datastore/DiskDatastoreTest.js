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
const chai_1 = require("chai");
const Assertions_1 = require("../test/Assertions");
const DiskDatastore_1 = require("./DiskDatastore");
const os_1 = __importDefault(require("os"));
const fs_1 = __importDefault(require("fs"));
const Files_1 = require("polar-shared/src/util/Files");
const FilePaths_1 = require("polar-shared/src/util/FilePaths");
const Directories_1 = require("./Directories");
const Platforms_1 = require("polar-shared/src/util/Platforms");
const DatastoreTester_1 = require("./DatastoreTester");
const Backend_1 = require("polar-shared/src/datastore/Backend");
const DefaultPersistenceLayer_1 = require("./DefaultPersistenceLayer");
const DocMetas_1 = require("../metadata/DocMetas");
const MockPHZWriter_1 = require("../phz/MockPHZWriter");
const tmpdir = os_1.default.tmpdir();
describe("DiskDatastore", function () {
    return __awaiter(this, void 0, void 0, function* () {
        DatastoreTester_1.DatastoreTester.test(() => __awaiter(this, void 0, void 0, function* () { return new DiskDatastore_1.DiskDatastore(); }));
        it("getDataDir", function () {
            chai_1.assert.notEqual(Directories_1.Directories.getDataDir(), null);
        });
        it("getDataDirsForPlatform MAC_OS", function () {
            if (Platforms_1.Platforms.get() !== Platforms_1.Platform.MACOS) {
                return;
            }
            const userHome = '/Users/alice';
            const platform = Platforms_1.Platform.MACOS;
            Assertions_1.assertJSON(DiskDatastore_1.DiskDatastore.getDataDirsForPlatform({ userHome, platform }), {
                "paths": [
                    "/Users/alice/.polar",
                    "/Users/alice/Library/Application Support/Polar"
                ],
                "preferredPath": "/Users/alice/Library/Application Support/Polar"
            });
        });
        it("init dataDir directory on init()", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const dataDir = FilePaths_1.FilePaths.join(tmpdir, 'disk-datastore.test');
                yield Files_1.Files.removeDirectoryRecursivelyAsync(dataDir);
                Directories_1.GlobalDataDir.set(dataDir);
                const diskDatastore = new DiskDatastore_1.DiskDatastore();
                chai_1.assert.equal(yield Files_1.Files.existsAsync(dataDir), false);
                let expected = {
                    "dataDirConfig": {
                        "path": FilePaths_1.FilePaths.join(tmpdir, "disk-datastore.test"),
                        "strategy": "manual"
                    },
                    "dataDir": FilePaths_1.FilePaths.join(tmpdir, "disk-datastore.test"),
                    "stashDir": FilePaths_1.FilePaths.join(tmpdir, "disk-datastore.test", "stash"),
                    "filesDir": FilePaths_1.FilePaths.join(tmpdir, "disk-datastore.test", "files"),
                    "logsDir": FilePaths_1.FilePaths.join(tmpdir, "disk-datastore.test", "logs"),
                    "configDir": FilePaths_1.FilePaths.join(tmpdir, "disk-datastore.test", "config"),
                    "initialization": {
                        "dataDir": {
                            "dir": FilePaths_1.FilePaths.join(tmpdir, 'disk-datastore.test'),
                            "created": true,
                        },
                        "stashDir": {
                            "dir": FilePaths_1.FilePaths.join(tmpdir, 'disk-datastore.test', 'stash'),
                            "created": true,
                        },
                        "filesDir": {
                            "dir": FilePaths_1.FilePaths.join(tmpdir, 'disk-datastore.test', 'files'),
                            "created": true,
                        },
                        "logsDir": {
                            "dir": FilePaths_1.FilePaths.join(tmpdir, 'disk-datastore.test', 'logs'),
                            "created": true,
                        },
                        "configDir": {
                            "dir": FilePaths_1.FilePaths.join(tmpdir, 'disk-datastore.test', 'config'),
                            "created": true,
                        }
                    },
                };
                Assertions_1.assertJSON(yield diskDatastore.init(), expected);
                expected = {
                    "dataDirConfig": {
                        "path": FilePaths_1.FilePaths.join(tmpdir, "disk-datastore.test"),
                        "strategy": "manual"
                    },
                    "dataDir": FilePaths_1.FilePaths.join(tmpdir, "disk-datastore.test"),
                    "stashDir": FilePaths_1.FilePaths.join(tmpdir, "disk-datastore.test", "stash"),
                    "filesDir": FilePaths_1.FilePaths.join(tmpdir, "disk-datastore.test", "files"),
                    "logsDir": FilePaths_1.FilePaths.join(tmpdir, "disk-datastore.test", "logs"),
                    "configDir": FilePaths_1.FilePaths.join(tmpdir, "disk-datastore.test", "config"),
                    "initialization": {
                        "dataDir": {
                            "dir": FilePaths_1.FilePaths.join(tmpdir, 'disk-datastore.test'),
                            "exists": true,
                        },
                        "stashDir": {
                            "dir": FilePaths_1.FilePaths.join(tmpdir, 'disk-datastore.test', 'stash'),
                            "exists": true,
                        },
                        "filesDir": {
                            "dir": FilePaths_1.FilePaths.join(tmpdir, 'disk-datastore.test', 'files'),
                            "exists": true,
                        },
                        "logsDir": {
                            "dir": FilePaths_1.FilePaths.join(tmpdir, 'disk-datastore.test', 'logs'),
                            "exists": true,
                        },
                        "configDir": {
                            "dir": FilePaths_1.FilePaths.join(tmpdir, 'disk-datastore.test', 'config'),
                            "exists": true,
                        }
                    }
                };
                Assertions_1.assertJSON(yield diskDatastore.init(), expected);
            });
        });
        it("init and test paths", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const dataDir = FilePaths_1.FilePaths.join(tmpdir, 'test-paths');
                yield Files_1.Files.removeDirectoryRecursivelyAsync(dataDir);
                Directories_1.GlobalDataDir.set(dataDir);
                const diskDatastore = new DiskDatastore_1.DiskDatastore();
                yield diskDatastore.init();
                chai_1.assert.equal(diskDatastore.dataDir, FilePaths_1.FilePaths.join(tmpdir, 'test-paths'));
                chai_1.assert.equal(diskDatastore.stashDir, FilePaths_1.FilePaths.join(tmpdir, 'test-paths', 'stash'));
            });
        });
        it("test async exists function", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const dataDir = FilePaths_1.FilePaths.join(tmpdir, 'this-file-does-not-exist');
                yield Files_1.Files.removeDirectoryRecursivelyAsync(dataDir);
                chai_1.assert.equal(fs_1.default.existsSync(dataDir), false);
                chai_1.assert.equal(yield Files_1.Files.existsAsync(dataDir), false);
            });
        });
        it("Add file and remove file from the stash and see if it exists.", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const path = yield Files_1.Files.realpathAsync(FilePaths_1.FilePaths.join(__dirname, "..", "..", "..", "docs", "example.pdf"));
                chai_1.assert.ok(yield Files_1.Files.existsAsync(path), "No file found from: " + process.cwd());
                const dataDir = FilePaths_1.FilePaths.join(tmpdir, 'datastore-stash-backend');
                yield Files_1.Files.removeDirectoryRecursivelyAsync(dataDir);
                Directories_1.GlobalDataDir.set(dataDir);
                const diskDatastore = new DiskDatastore_1.DiskDatastore();
                yield diskDatastore.init();
                yield diskDatastore.writeFile(Backend_1.Backend.STASH, { name: 'example.pdf' }, yield Files_1.Files.readFileAsync(path));
                const pdfPath = FilePaths_1.FilePaths.join(dataDir, "stash", "example.pdf");
                chai_1.assert.ok(yield Files_1.Files.existsAsync(pdfPath), "Could not find file: " + pdfPath);
                chai_1.assert.ok(yield diskDatastore.containsFile(Backend_1.Backend.STASH, { name: 'example.pdf' }));
                yield diskDatastore.deleteFile(Backend_1.Backend.STASH, { name: 'example.pdf' });
                chai_1.assert.isFalse(yield Files_1.Files.existsAsync(pdfPath));
            });
        });
        it("Delete file and make sure state.json and dir are no longer present", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const dataDir = FilePaths_1.FilePaths.join(tmpdir, 'datastore-delete-test');
                Directories_1.GlobalDataDir.set(dataDir);
                const diskDatastore = new DiskDatastore_1.DiskDatastore();
                yield diskDatastore.init();
                const persistenceLayer = new DefaultPersistenceLayer_1.DefaultPersistenceLayer(diskDatastore);
                yield persistenceLayer.init();
                const fingerprint = '0x00datadelete';
                const docMeta = DocMetas_1.MockDocMetas.createWithinInitialPagemarks(fingerprint, 14);
                yield persistenceLayer.write(fingerprint, docMeta);
                const stateFile = FilePaths_1.FilePaths.join(dataDir, fingerprint, 'state.json');
                chai_1.assert.ok(yield Files_1.Files.existsAsync(stateFile));
                const docMetaFileRef = {
                    fingerprint,
                    docFile: {
                        name: `${fingerprint}.phz`
                    },
                    docInfo: docMeta.docInfo
                };
                yield MockPHZWriter_1.MockPHZWriter.write(FilePaths_1.FilePaths.create(diskDatastore.stashDir, `${fingerprint}.phz`));
                yield persistenceLayer.delete(docMetaFileRef);
                chai_1.assert.isFalse(yield persistenceLayer.contains(stateFile));
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGlza0RhdGFzdG9yZVRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJEaXNrRGF0YXN0b3JlVGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLCtCQUE0QjtBQUM1QixtREFBOEM7QUFDOUMsbURBQThDO0FBRTlDLDRDQUFvQjtBQUNwQiw0Q0FBb0I7QUFDcEIsdURBQWtEO0FBQ2xELCtEQUEwRDtBQUMxRCwrQ0FBeUQ7QUFDekQsK0RBQW9FO0FBQ3BFLHVEQUFrRDtBQUNsRCxnRUFBMkQ7QUFDM0QsdUVBQWtFO0FBQ2xFLG1EQUFrRDtBQUVsRCx3REFBbUQ7QUFFbkQsTUFBTSxNQUFNLEdBQUcsWUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTNCLFFBQVEsQ0FBQyxlQUFlLEVBQUU7O1FBRXRCLGlDQUFlLENBQUMsSUFBSSxDQUFDLEdBQVMsRUFBRSxnREFBQyxPQUFBLElBQUksNkJBQWEsRUFBRSxDQUFBLEdBQUEsQ0FBQyxDQUFDO1FBR3RELEVBQUUsQ0FBQyxZQUFZLEVBQUU7WUFDYixhQUFNLENBQUMsUUFBUSxDQUFDLHlCQUFXLENBQUMsVUFBVSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDcEQsQ0FBQyxDQUFDLENBQUM7UUFHSCxFQUFFLENBQUMsK0JBQStCLEVBQUU7WUFFaEMsSUFBSSxxQkFBUyxDQUFDLEdBQUcsRUFBRSxLQUFLLG9CQUFRLENBQUMsS0FBSyxFQUFFO2dCQUNwQyxPQUFPO2FBQ1Y7WUFFRCxNQUFNLFFBQVEsR0FBRyxjQUFjLENBQUM7WUFDaEMsTUFBTSxRQUFRLEdBQUcsb0JBQVEsQ0FBQyxLQUFLLENBQUM7WUFFaEMsdUJBQVUsQ0FBQyw2QkFBYSxDQUFDLHNCQUFzQixDQUFDLEVBQUMsUUFBUSxFQUFFLFFBQVEsRUFBQyxDQUFDLEVBQUU7Z0JBQ25FLE9BQU8sRUFBRTtvQkFDTCxxQkFBcUI7b0JBQ3JCLGdEQUFnRDtpQkFDbkQ7Z0JBQ0QsZUFBZSxFQUFFLGdE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LEVBQUUsR0FBRyxXQUFXLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBRTFGLE1BQU0sZ0JBQWdCLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO2dCQUU5QyxhQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sZ0JBQWdCLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFFL0QsQ0FBQztTQUFBLENBQUMsQ0FBQztJQUVQLENBQUM7Q0FBQSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2Fzc2VydH0gZnJvbSAnY2hhaSc7XG5pbXBvcnQge2Fzc2VydEpTT059IGZyb20gJy4uL3Rlc3QvQXNzZXJ0aW9ucyc7XG5pbXBvcnQge0Rpc2tEYXRhc3RvcmV9IGZyb20gJy4vRGlza0RhdGFzdG9yZSc7XG5cbmltcG9ydCBvcyBmcm9tICdvcyc7XG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xuaW1wb3J0IHtGaWxlc30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL0ZpbGVzJztcbmltcG9ydCB7RmlsZVBhdGhzfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvRmlsZVBhdGhzJztcbmltcG9ydCB7RGlyZWN0b3JpZXMsIEdsb2JhbERhdGFEaXJ9IGZyb20gJy4vRGlyZWN0b3JpZXMnO1xuaW1wb3J0IHtQbGF0Zm9ybSwgUGxhdGZvcm1zfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvUGxhdGZvcm1zJztcbmltcG9ydCB7RGF0YXN0b3JlVGVzdGVyfSBmcm9tICcuL0RhdGFzdG9yZVRlc3Rlcic7XG5pbXBvcnQge0JhY2tlbmR9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvZGF0YXN0b3JlL0JhY2tlbmQnO1xuaW1wb3J0IHtEZWZhdWx0UGVyc2lzdGVuY2VMYXllcn0gZnJvbSAnLi9EZWZhdWx0UGVyc2lzdGVuY2VMYXllcic7XG5pbXBvcnQge01vY2tEb2NNZXRhc30gZnJvbSAnLi4vbWV0YWRhdGEvRG9jTWV0YXMnO1xuaW1wb3J0IHtEb2NNZXRhRmlsZVJlZn0gZnJvbSAnLi9Eb2NNZXRhUmVmJztcbmltcG9ydCB7TW9ja1BIWldyaXRlcn0gZnJvbSAnLi4vcGh6L01vY2tQSFpXcml0ZXInO1xuXG5jb25zdCB0bXBkaXIgPSBvcy50bXBkaXIoKTtcblxuZGVzY3JpYmUoXCJEaXNrRGF0YXN0b3JlXCIsIGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgRGF0YXN0b3JlVGVzdGVyLnRlc3QoYXN5bmMgKCkgPT4gbmV3IERpc2tEYXRhc3RvcmUoKSk7XG5cblxuICAgIGl0KFwiZ2V0RGF0YURpclwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgYXNzZXJ0Lm5vdEVxdWFsKERpcmVjdG9yaWVzLmdldERhdGFEaXIoKSwgbnVsbCk7XG4gICAgfSk7XG5cblxuICAgIGl0KFwiZ2V0RGF0YURpcnNGb3JQbGF0Zm9ybSBNQUNfT1NcIiwgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgaWYgKFBsYXRmb3Jtcy5nZXQoKSAhPT0gUGxhdGZvcm0uTUFDT1MpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHVzZXJIb21lID0gJy9Vc2Vycy9hbGljZSc7XG4gICAgICAgIGNvbnN0IHBsYXRmb3JtID0gUGxhdGZvcm0uTUFDT1M7XG5cbiAgICAgICAgYXNzZXJ0SlNPTihEaXNrRGF0YXN0b3JlLmdldERhdGFEaXJzRm9yUGxhdGZvcm0oe3VzZXJIb21lLCBwbGF0Zm9ybX0pLCB7XG4gICAgICAgICAgICBcInBhdGhzXCI6IFtcbiAgICAgICAgICAgICAgICBcIi9Vc2Vycy9hbGljZS8ucG9sYXJcIixcbiAgICAgICAgICAgICAgICBcIi9Vc2Vycy9hbGljZS9MaWJyYXJ5L0FwcGxpY2F0aW9uIFN1cHBvcnQvUG9sYXJcIlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwicHJlZmVycmVkUGF0aFwiOiBcIi9Vc2Vycy9hbGljZS9MaWJyYXJ5L0FwcGxpY2F0aW9uIFN1cHBvcnQvUG9sYXJcIlxuICAgICAgICB9KTtcblxuICAgIH0pO1xuXG5cbiAgICBpdChcImluaXQgZGF0YURpciBkaXJlY3Rvcnkgb24gaW5pdCgpXCIsIGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGNvbnN0IGRhdGFEaXIgPSBGaWxlUGF0aHMuam9pbih0bXBkaXIsICdkaXNrLWRhdGFzdG9yZS50ZXN0Jyk7XG4gICAgICAgIGF3YWl0IEZpbGVzLnJlbW92ZURpcmVjdG9yeVJlY3Vyc2l2ZWx5QXN5bmMoZGF0YURpcik7XG5cbiAgICAgICAgR2xvYmFsRGF0YURpci5zZXQoZGF0YURpcik7XG4gICAgICAgIGNvbnN0IGRpc2tEYXRhc3RvcmUgPSBuZXcgRGlza0RhdGFzdG9yZSgpO1xuXG4gICAgICAgIGFzc2VydC5lcXVhbChhd2FpdCBGaWxlcy5leGlzdHNBc3luYyhkYXRhRGlyKSwgZmFsc2UpO1xuXG4gICAgICAgIGxldCBleHBlY3RlZDogYW55ID0ge1xuXG4gICAgICAgICAgICBcImRhdGFEaXJDb25maWdcIjoge1xuICAgICAgICAgICAgICAgIFwicGF0aFwiOiBGaWxlUGF0aHMuam9pbih0bXBkaXIsIFwiZGlzay1kYXRhc3RvcmUudGVzdFwiKSxcbiAgICAgICAgICAgICAgICBcInN0cmF0ZWd5XCI6IFwibWFudWFsXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImRhdGFEaXJcIjogRmlsZVBhdGhzLmpvaW4odG1wZGlyLCBcImRpc2stZGF0YXN0b3JlLnRlc3RcIiksXG4gICAgICAgICAgICBcInN0YXNoRGlyXCI6IEZpbGVQYXRocy5qb2luKHRtcGRpciwgXCJkaXNrLWRhdGFzdG9yZS50ZXN0XCIsIFwic3Rhc2hcIiksXG4gICAgICAgICAgICBcImZpbGVzRGlyXCI6IEZpbGVQYXRocy5qb2luKHRtcGRpciwgXCJkaXNrLWRhdGFzdG9yZS50ZXN0XCIsIFwiZmlsZXNcIiksXG4gICAgICAgICAgICBcImxvZ3NEaXJcIjogRmlsZVBhdGhzLmpvaW4odG1wZGlyLCBcImRpc2stZGF0YXN0b3JlLnRlc3RcIiwgXCJsb2dzXCIpLFxuICAgICAgICAgICAgXCJjb25maWdEaXJcIjogRmlsZVBhdGhzLmpvaW4odG1wZGlyLCBcImRpc2stZGF0YXN0b3JlLnRlc3RcIiwgXCJjb25maWdcIiksXG5cbiAgICAgICAgICAgIFwiaW5pdGlhbGl6YXRpb25cIjoge1xuXG4gICAgICAgICAgICAgICAgXCJkYXRhRGlyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJkaXJcIjogRmlsZVBhdGhzLmpvaW4odG1wZGlyLCAnZGlzay1kYXRhc3RvcmUudGVzdCcpLFxuICAgICAgICAgICAgICAgICAgICBcImNyZWF0ZWRcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwic3Rhc2hEaXJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImRpclwiOiBGaWxlUGF0aHMuam9pbih0bXBkaXIsICdkaXNrLWRhdGFzdG9yZS50ZXN0JywgJ3N0YXNoJyksXG4gICAgICAgICAgICAgICAgICAgIFwiY3JlYXRlZFwiOiB0cnVlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJmaWxlc0RpclwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiZGlyXCI6IEZpbGVQYXRocy5qb2luKHRtcGRpciwgJ2Rpc2stZGF0YXN0b3JlLnRlc3QnLCAnZmlsZXMnKSxcbiAgICAgICAgICAgICAgICAgICAgXCJjcmVhdGVkXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcImxvZ3NEaXJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImRpclwiOiBGaWxlUGF0aHMuam9pbih0bXBkaXIsICdkaXNrLWRhdGFzdG9yZS50ZXN0JywgJ2xvZ3MnKSxcbiAgICAgICAgICAgICAgICAgICAgXCJjcmVhdGVkXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcImNvbmZpZ0RpclwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiZGlyXCI6IEZpbGVQYXRocy5qb2luKHRtcGRpciwgJ2Rpc2stZGF0YXN0b3JlLnRlc3QnLCAnY29uZmlnJyksXG4gICAgICAgICAgICAgICAgICAgIFwiY3JlYXRlZFwiOiB0cnVlLFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcblxuICAgICAgICAvLyB0ZXN0IGRvdWJsZSBpbml0Li4uXG4gICAgICAgIGFzc2VydEpTT04oYXdhaXQgZGlza0RhdGFzdG9yZS5pbml0KCksIGV4cGVjdGVkKTtcblxuICAgICAgICBleHBlY3RlZCA9IHtcbiAgICAgICAgICAgIFwiZGF0YURpckNvbmZpZ1wiOiB7XG4gICAgICAgICAgICAgICAgXCJwYXRoXCI6IEZpbGVQYXRocy5qb2luKHRtcGRpciwgXCJkaXNrLWRhdGFzdG9yZS50ZXN0XCIpLFxuICAgICAgICAgICAgICAgIFwic3RyYXRlZ3lcIjogXCJtYW51YWxcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZGF0YURpclwiOiBGaWxlUGF0aHMuam9pbih0bXBkaXIsIFwiZGlzay1kYXRhc3RvcmUudGVzdFwiKSxcbiAgICAgICAgICAgIFwic3Rhc2hEaXJcIjogRmlsZVBhdGhzLmpvaW4odG1wZGlyLCBcImRpc2stZGF0YXN0b3JlLnRlc3RcIiwgXCJzdGFzaFwiKSxcbiAgICAgICAgICAgIFwiZmlsZXNEaXJcIjogRmlsZVBhdGhzLmpvaW4odG1wZGlyLCBcImRpc2stZGF0YXN0b3JlLnRlc3RcIiwgXCJmaWxlc1wiKSxcbiAgICAgICAgICAgIFwibG9nc0RpclwiOiBGaWxlUGF0aHMuam9pbih0bXBkaXIsIFwiZGlzay1kYXRhc3RvcmUudGVzdFwiLCBcImxvZ3NcIiksXG4gICAgICAgICAgICBcImNvbmZpZ0RpclwiOiBGaWxlUGF0aHMuam9pbih0bXBkaXIsIFwiZGlzay1kYXRhc3RvcmUudGVzdFwiLCBcImNvbmZpZ1wiKSxcblxuICAgICAgICAgICAgXCJpbml0aWFsaXphdGlvblwiOiB7XG5cbiAgICAgICAgICAgICAgICBcImRhdGFEaXJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImRpclwiOiBGaWxlUGF0aHMuam9pbih0bXBkaXIsICdkaXNrLWRhdGFzdG9yZS50ZXN0JyksXG4gICAgICAgICAgICAgICAgICAgIFwiZXhpc3RzXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcInN0YXNoRGlyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJkaXJcIjogRmlsZVBhdGhzLmpvaW4odG1wZGlyLCAnZGlzay1kYXRhc3RvcmUudGVzdCcsICdzdGFzaCcpLFxuICAgICAgICAgICAgICAgICAgICBcImV4aXN0c1wiOiB0cnVlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJmaWxlc0RpclwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiZGlyXCI6IEZpbGVQYXRocy5qb2luKHRtcGRpciwgJ2Rpc2stZGF0YXN0b3JlLnRlc3QnLCAnZmlsZXMnKSxcbiAgICAgICAgICAgICAgICAgICAgXCJleGlzdHNcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwibG9nc0RpclwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiZGlyXCI6IEZpbGVQYXRocy5qb2luKHRtcGRpciwgJ2Rpc2stZGF0YXN0b3JlLnRlc3QnLCAnbG9ncycpLFxuICAgICAgICAgICAgICAgICAgICBcImV4aXN0c1wiOiB0cnVlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJjb25maWdEaXJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImRpclwiOiBGaWxlUGF0aHMuam9pbih0bXBkaXIsICdkaXNrLWRhdGFzdG9yZS50ZXN0JywgJ2NvbmZpZycpLFxuICAgICAgICAgICAgICAgICAgICBcImV4aXN0c1wiOiB0cnVlLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBhc3NlcnRKU09OKGF3YWl0IGRpc2tEYXRhc3RvcmUuaW5pdCgpLCBleHBlY3RlZCApO1xuXG4gICAgfSk7XG5cblxuICAgIGl0KFwiaW5pdCBhbmQgdGVzdCBwYXRoc1wiLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICBjb25zdCBkYXRhRGlyID0gRmlsZVBhdGhzLmpvaW4odG1wZGlyLCAndGVzdC1wYXRocycpO1xuICAgICAgICBhd2FpdCBGaWxlcy5yZW1vdmVEaXJlY3RvcnlSZWN1cnNpdmVseUFzeW5jKGRhdGFEaXIpO1xuXG4gICAgICAgIEdsb2JhbERhdGFEaXIuc2V0KGRhdGFEaXIpO1xuICAgICAgICBjb25zdCBkaXNrRGF0YXN0b3JlID0gbmV3IERpc2tEYXRhc3RvcmUoKTtcblxuICAgICAgICBhd2FpdCBkaXNrRGF0YXN0b3JlLmluaXQoKTtcblxuICAgICAgICBhc3NlcnQuZXF1YWwoZGlza0RhdGFzdG9yZS5kYXRhRGlyLCBGaWxlUGF0aHMuam9pbih0bXBkaXIsICd0ZXN0LXBhdGhzJykpO1xuXG4gICAgICAgIGFzc2VydC5lcXVhbChkaXNrRGF0YXN0b3JlLnN0YXNoRGlyLCBGaWxlUGF0aHMuam9pbih0bXBkaXIsICd0ZXN0LXBhdGhzJywgJ3N0YXNoJykpO1xuXG4gICAgICAgIC8vIG5vdyBjcmVhdGUgaXQgYW5kXG5cbiAgICB9KTtcblxuICAgIGl0KFwidGVzdCBhc3luYyBleGlzdHMgZnVuY3Rpb25cIiwgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgY29uc3QgZGF0YURpciA9IEZpbGVQYXRocy5qb2luKHRtcGRpciwgJ3RoaXMtZmlsZS1kb2VzLW5vdC1leGlzdCcpO1xuICAgICAgICBhd2FpdCBGaWxlcy5yZW1vdmVEaXJlY3RvcnlSZWN1cnNpdmVseUFzeW5jKGRhdGFEaXIpO1xuXG4gICAgICAgIGFzc2VydC5lcXVhbChmcy5leGlzdHNTeW5jKGRhdGFEaXIpLCBmYWxzZSk7XG4gICAgICAgIGFzc2VydC5lcXVhbChhd2FpdCBGaWxlcy5leGlzdHNBc3luYyhkYXRhRGlyKSwgZmFsc2UpO1xuXG4gICAgfSk7XG5cbiAgICBpdChcIkFkZCBmaWxlIGFuZCByZW1vdmUgZmlsZSBmcm9tIHRoZSBzdGFzaCBhbmQgc2VlIGlmIGl0IGV4aXN0cy5cIiwgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgY29uc3QgcGF0aCA9IGF3YWl0IEZpbGVzLnJlYWxwYXRoQXN5bmMoRmlsZVBhdGhzLmpvaW4oX19kaXJuYW1lLCBcIi4uXCIsIFwiLi5cIiwgXCIuLlwiLCBcImRvY3NcIiwgXCJleGFtcGxlLnBkZlwiKSk7XG5cbiAgICAgICAgYXNzZXJ0Lm9rKGF3YWl0IEZpbGVzLmV4aXN0c0FzeW5jKHBhdGgpLCBcIk5vIGZpbGUgZm91bmQgZnJvbTogXCIgKyBwcm9jZXNzLmN3ZCgpKTtcblxuICAgICAgICBjb25zdCBkYXRhRGlyID0gRmlsZVBhdGhzLmpvaW4odG1wZGlyLCAnZGF0YXN0b3JlLXN0YXNoLWJhY2tlbmQnKTtcbiAgICAgICAgYXdhaXQgRmlsZXMucmVtb3ZlRGlyZWN0b3J5UmVjdXJzaXZlbHlBc3luYyhkYXRhRGlyKTtcblxuICAgICAgICBHbG9iYWxEYXRhRGlyLnNldChkYXRhRGlyKTtcbiAgICAgICAgY29uc3QgZGlza0RhdGFzdG9yZSA9IG5ldyBEaXNrRGF0YXN0b3JlKCk7XG4gICAgICAgIGF3YWl0IGRpc2tEYXRhc3RvcmUuaW5pdCgpO1xuXG4gICAgICAgIGF3YWl0IGRpc2tEYXRhc3RvcmUud3JpdGVGaWxlKEJhY2tlbmQuU1RBU0gsIHtuYW1lOiAnZXhhbXBsZS5wZGYnfSwgYXdhaXQgRmlsZXMucmVhZEZpbGVBc3luYyhwYXRoKSk7XG5cbiAgICAgICAgY29uc3QgcGRmUGF0aCA9IEZpbGVQYXRocy5qb2luKGRhdGFEaXIsIFwic3Rhc2hcIiwgXCJleGFtcGxlLnBkZlwiKTtcblxuICAgICAgICBhc3NlcnQub2soYXdhaXQgRmlsZXMuZXhpc3RzQXN5bmMocGRmUGF0aCksIFwiQ291bGQgbm90IGZpbmQgZmlsZTogXCIgKyBwZGZQYXRoKTtcblxuICAgICAgICBhc3NlcnQub2soYXdhaXQgZGlza0RhdGFzdG9yZS5jb250YWluc0ZpbGUoQmFja2VuZC5TVEFTSCwge25hbWU6ICdleGFtcGxlLnBkZid9KSk7XG5cbiAgICAgICAgYXdhaXQgZGlza0RhdGFzdG9yZS5kZWxldGVGaWxlKEJhY2tlbmQuU1RBU0gsIHtuYW1lOiAnZXhhbXBsZS5wZGYnfSk7XG5cbiAgICAgICAgYXNzZXJ0LmlzRmFsc2UoYXdhaXQgRmlsZXMuZXhpc3RzQXN5bmMocGRmUGF0aCkpO1xuXG4gICAgfSk7XG5cbiAgICBpdChcIkRlbGV0ZSBmaWxlIGFuZCBtYWtlIHN1cmUgc3RhdGUuanNvbiBhbmQgZGlyIGFyZSBubyBsb25nZXIgcHJlc2VudFwiLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICBjb25zdCBkYXRhRGlyID0gRmlsZVBhdGhzLmpvaW4odG1wZGlyLCAnZGF0YXN0b3JlLWRlbGV0ZS10ZXN0Jyk7XG5cbiAgICAgICAgR2xvYmFsRGF0YURpci5zZXQoZGF0YURpcik7XG4gICAgICAgIGNvbnN0IGRpc2tEYXRhc3RvcmUgPSBuZXcgRGlza0RhdGFzdG9yZSgpO1xuICAgICAgICBhd2FpdCBkaXNrRGF0YXN0b3JlLmluaXQoKTtcblxuICAgICAgICBjb25zdCBwZXJzaXN0ZW5jZUxheWVyID0gbmV3IERlZmF1bHRQZXJzaXN0ZW5jZUxheWVyKGRpc2tEYXRhc3RvcmUpO1xuXG4gICAgICAgIGF3YWl0IHBlcnNpc3RlbmNlTGF5ZXIuaW5pdCgpO1xuXG4gICAgICAgIGNvbnN0IGZpbmdlcnByaW50ID0gJzB4MDBkYXRhZGVsZXRlJztcbiAgICAgICAgY29uc3QgZG9jTWV0YSA9IE1vY2tEb2NNZXRhcy5jcmVhdGVXaXRoaW5Jbml0aWFsUGFnZW1hcmtzKGZpbmdlcnByaW50LCAxNCk7XG5cbiAgICAgICAgYXdhaXQgcGVyc2lzdGVuY2VMYXllci53cml0ZShmaW5nZXJwcmludCwgZG9jTWV0YSk7XG5cbiAgICAgICAgY29uc3Qgc3RhdGVGaWxlID0gRmlsZVBhdGhzLmpvaW4oZGF0YURpciwgZmluZ2VycHJpbnQsICdzdGF0ZS5qc29uJyk7XG5cbiAgICAgICAgYXNzZXJ0Lm9rKGF3YWl0IEZpbGVzLmV4aXN0c0FzeW5jKHN0YXRlRmlsZSkpO1xuXG4gICAgICAgIGNvbnN0IGRvY01ldGFGaWxlUmVmOiBEb2NNZXRhRmlsZVJlZiA9IHtcbiAgICAgICAgICAgIGZpbmdlcnByaW50LFxuICAgICAgICAgICAgZG9jRmlsZToge1xuICAgICAgICAgICAgICAgIG5hbWU6IGAke2ZpbmdlcnByaW50fS5waHpgXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZG9jSW5mbzogZG9jTWV0YS5kb2NJbmZvXG4gICAgICAgIH07XG5cbiAgICAgICAgYXdhaXQgTW9ja1BIWldyaXRlci53cml0ZShGaWxlUGF0aHMuY3JlYXRlKGRpc2tEYXRhc3RvcmUuc3Rhc2hEaXIsIGAke2ZpbmdlcnByaW50fS5waHpgKSk7XG5cbiAgICAgICAgYXdhaXQgcGVyc2lzdGVuY2VMYXllci5kZWxldGUoZG9jTWV0YUZpbGVSZWYpO1xuXG4gICAgICAgIGFzc2VydC5pc0ZhbHNlKGF3YWl0IHBlcnNpc3RlbmNlTGF5ZXIuY29udGFpbnMoc3RhdGVGaWxlKSk7XG5cbiAgICB9KTtcblxufSk7XG4iXX0=