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
const DiskDatastore_1 = require("./DiskDatastore");
const os_1 = __importDefault(require("os"));
const Stopwatches_1 = require("polar-shared/src/util/Stopwatches");
const DocMetas_1 = require("../metadata/DocMetas");
const tmpdir = os_1.default.tmpdir();
xdescribe("DocMetaParsePerformance", function () {
    return __awaiter(this, void 0, void 0, function* () {
        xit("basic", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const datastore = new DiskDatastore_1.DiskDatastore();
                yield datastore.init();
                let stopwatch = Stopwatches_1.Stopwatches.create();
                const docMetaRefs = yield datastore.getDocMetaRefs();
                console.log("getDocMetaRefs: " + stopwatch.stop());
                console.log("Found N docMetas: " + docMetaRefs.length);
                stopwatch = Stopwatches_1.Stopwatches.create();
                for (const docMetaRef of docMetaRefs) {
                    const data = yield datastore.getDocMeta(docMetaRef.fingerprint);
                    if (data) {
                        const docMeta = DocMetas_1.DocMetas.deserialize(data, docMetaRef.fingerprint);
                    }
                }
                console.log("getDocMeta for each DocMetaRef: " + stopwatch.stop());
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jTWV0YVBhcnNlUGVyZm9ybWFuY2VUZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRG9jTWV0YVBhcnNlUGVyZm9ybWFuY2VUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQThDO0FBRTlDLDRDQUFvQjtBQUVwQixtRUFBOEQ7QUFDOUQsbURBQThDO0FBRTlDLE1BQU0sTUFBTSxHQUFHLFlBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUUzQixTQUFTLENBQUMseUJBQXlCLEVBQUU7O1FBRWpDLEdBQUcsQ0FBQyxPQUFPLEVBQUU7O2dCQUVULE1BQU0sU0FBUyxHQUFHLElBQUksNkJBQWEsRUFBRSxDQUFDO2dCQUN0QyxNQUFNLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFFdkIsSUFBSSxTQUFTLEdBQWMseUJBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDaEQsTUFBTSxXQUFXLEdBQUcsTUFBTSxTQUFTLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ3JELE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEdBQUksU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7Z0JBRXBELE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUV2RCxTQUFTLEdBQUcseUJBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFFakMsS0FBSyxNQUFNLFVBQVUsSUFBSSxXQUFXLEVBQUU7b0JBQ2xDLE1BQU0sSUFBSSxHQUFHLE1BQU0sU0FBUyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7b0JBQ2hFLElBQUksSUFBSSxFQUFFO3dCQUNOLE1BQU0sT0FBTyxHQUFHLG1CQUFRLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7cUJBQ3RFO2lCQUNKO2dCQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsa0NBQWtDLEdBQUcsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7WUFFdkUsQ0FBQztTQUFBLENBQUMsQ0FBQztJQUVQLENBQUM7Q0FBQSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Rpc2tEYXRhc3RvcmV9IGZyb20gJy4vRGlza0RhdGFzdG9yZSc7XG5cbmltcG9ydCBvcyBmcm9tICdvcyc7XG5pbXBvcnQge1N0b3B3YXRjaH0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL1N0b3B3YXRjaCc7XG5pbXBvcnQge1N0b3B3YXRjaGVzfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvU3RvcHdhdGNoZXMnO1xuaW1wb3J0IHtEb2NNZXRhc30gZnJvbSAnLi4vbWV0YWRhdGEvRG9jTWV0YXMnO1xuXG5jb25zdCB0bXBkaXIgPSBvcy50bXBkaXIoKTtcblxueGRlc2NyaWJlKFwiRG9jTWV0YVBhcnNlUGVyZm9ybWFuY2VcIiwgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICB4aXQoXCJiYXNpY1wiLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICBjb25zdCBkYXRhc3RvcmUgPSBuZXcgRGlza0RhdGFzdG9yZSgpO1xuICAgICAgICBhd2FpdCBkYXRhc3RvcmUuaW5pdCgpO1xuXG4gICAgICAgIGxldCBzdG9wd2F0Y2g6IFN0b3B3YXRjaCA9IFN0b3B3YXRjaGVzLmNyZWF0ZSgpO1xuICAgICAgICBjb25zdCBkb2NNZXRhUmVmcyA9IGF3YWl0IGRhdGFzdG9yZS5nZXREb2NNZXRhUmVmcygpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImdldERvY01ldGFSZWZzOiBcIiAgKyBzdG9wd2F0Y2guc3RvcCgpKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhcIkZvdW5kIE4gZG9jTWV0YXM6IFwiICsgZG9jTWV0YVJlZnMubGVuZ3RoKTtcblxuICAgICAgICBzdG9wd2F0Y2ggPSBTdG9wd2F0Y2hlcy5jcmVhdGUoKTtcblxuICAgICAgICBmb3IgKGNvbnN0IGRvY01ldGFSZWYgb2YgZG9jTWV0YVJlZnMpIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBkYXRhc3RvcmUuZ2V0RG9jTWV0YShkb2NNZXRhUmVmLmZpbmdlcnByaW50KTtcbiAgICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZG9jTWV0YSA9IERvY01ldGFzLmRlc2VyaWFsaXplKGRhdGEsIGRvY01ldGFSZWYuZmluZ2VycHJpbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJnZXREb2NNZXRhIGZvciBlYWNoIERvY01ldGFSZWY6IFwiICsgc3RvcHdhdGNoLnN0b3AoKSk7XG5cbiAgICB9KTtcblxufSk7XG4iXX0=