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
const chai_1 = require("chai");
const DiskDatastore_1 = require("../datastore/DiskDatastore");
const CreatePagemarksForPageRanges_1 = require("./CreatePagemarksForPageRanges");
const DefaultPersistenceLayer_1 = require("../datastore/DefaultPersistenceLayer");
xdescribe('Create ranges', function () {
    xdescribe('with real data', function () {
        xit("my bitcoin book.", function () {
            return __awaiter(this, void 0, void 0, function* () {
                const datastore = new DiskDatastore_1.DiskDatastore();
                const persistenceLayer = new DefaultPersistenceLayer_1.DefaultPersistenceLayer(datastore);
                yield persistenceLayer.init();
                const fingerprint = "65393761393531623135393737626562666234373866653365396535313036623631346666376461623662383239616439666637353064393132643133353030";
                const docMeta = yield persistenceLayer.getDocMeta(fingerprint);
                chai_1.assert.ok(docMeta !== undefined);
                const createPagemarksForPageRanges = new CreatePagemarksForPageRanges_1.CreatePagemarksForPageRanges(docMeta);
                createPagemarksForPageRanges.execute({ range: { start: 1, end: 204 } });
                yield persistenceLayer.write(fingerprint, docMeta);
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3JlYXRlUGFnZW1hcmtzRm9yUGFnZVJhbmdlc1Rlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJDcmVhdGVQYWdlbWFya3NGb3JQYWdlUmFuZ2VzVGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLCtCQUE0QjtBQUM1Qiw4REFBeUQ7QUFDekQsaUZBQTRFO0FBQzVFLGtGQUE2RTtBQUU3RSxTQUFTLENBQUMsZUFBZSxFQUFFO0lBRXZCLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRTtRQUV4QixHQUFHLENBQUMsa0JBQWtCLEVBQUU7O2dCQUVwQixNQUFNLFNBQVMsR0FBRyxJQUFJLDZCQUFhLEVBQUUsQ0FBQztnQkFDdEMsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLGlEQUF1QixDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUVoRSxNQUFNLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDO2dCQUU5QixNQUFNLFdBQVcsR0FBRyxrSUFBa0ksQ0FBQztnQkFFdkosTUFBTSxPQUFPLEdBQUcsTUFBTSxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBRS9ELGFBQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxLQUFLLFNBQVMsQ0FBQyxDQUFBO2dCQUVoQyxNQUFNLDRCQUE0QixHQUFHLElBQUksMkRBQTRCLENBQUMsT0FBUSxDQUFDLENBQUM7Z0JBRWhGLDRCQUE0QixDQUFDLE9BQU8sQ0FBQyxFQUFDLEtBQUssRUFBRSxFQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBQyxFQUFDLENBQUMsQ0FBQztnQkFFcEUsTUFBTSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLE9BQVEsQ0FBQyxDQUFDO1lBVXhELENBQUM7U0FBQSxDQUFDLENBQUM7SUFFUCxDQUFDLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthc3NlcnR9IGZyb20gJ2NoYWknO1xuaW1wb3J0IHtEaXNrRGF0YXN0b3JlfSBmcm9tICcuLi9kYXRhc3RvcmUvRGlza0RhdGFzdG9yZSc7XG5pbXBvcnQge0NyZWF0ZVBhZ2VtYXJrc0ZvclBhZ2VSYW5nZXN9IGZyb20gJy4vQ3JlYXRlUGFnZW1hcmtzRm9yUGFnZVJhbmdlcyc7XG5pbXBvcnQge0RlZmF1bHRQZXJzaXN0ZW5jZUxheWVyfSBmcm9tICcuLi9kYXRhc3RvcmUvRGVmYXVsdFBlcnNpc3RlbmNlTGF5ZXInO1xuXG54ZGVzY3JpYmUoJ0NyZWF0ZSByYW5nZXMnLCBmdW5jdGlvbigpIHtcblxuICAgIHhkZXNjcmliZSgnd2l0aCByZWFsIGRhdGEnLCBmdW5jdGlvbigpIHtcblxuICAgICAgICB4aXQoXCJteSBiaXRjb2luIGJvb2suXCIsIGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICBjb25zdCBkYXRhc3RvcmUgPSBuZXcgRGlza0RhdGFzdG9yZSgpO1xuICAgICAgICAgICAgY29uc3QgcGVyc2lzdGVuY2VMYXllciA9IG5ldyBEZWZhdWx0UGVyc2lzdGVuY2VMYXllcihkYXRhc3RvcmUpO1xuXG4gICAgICAgICAgICBhd2FpdCBwZXJzaXN0ZW5jZUxheWVyLmluaXQoKTtcblxuICAgICAgICAgICAgY29uc3QgZmluZ2VycHJpbnQgPSBcIjY1MzkzNzYxMzkzNTMxNjIzMTM1MzkzNzM3NjI2NTYyNjY2MjM0MzczODY2NjUzMzY1Mzk2NTM1MzEzMDM2NjIzNjMxMzQ2NjY2Mzc2NDYxNjIzNjYyMzgzMjM5NjE2NDM5NjY2NjM3MzUzMDY0MzkzMTMyNjQzMTMzMzUzMDMwXCI7XG5cbiAgICAgICAgICAgIGNvbnN0IGRvY01ldGEgPSBhd2FpdCBwZXJzaXN0ZW5jZUxheWVyLmdldERvY01ldGEoZmluZ2VycHJpbnQpO1xuXG4gICAgICAgICAgICBhc3NlcnQub2soZG9jTWV0YSAhPT0gdW5kZWZpbmVkKVxuXG4gICAgICAgICAgICBjb25zdCBjcmVhdGVQYWdlbWFya3NGb3JQYWdlUmFuZ2VzID0gbmV3IENyZWF0ZVBhZ2VtYXJrc0ZvclBhZ2VSYW5nZXMoZG9jTWV0YSEpO1xuXG4gICAgICAgICAgICBjcmVhdGVQYWdlbWFya3NGb3JQYWdlUmFuZ2VzLmV4ZWN1dGUoe3JhbmdlOiB7c3RhcnQ6IDEsIGVuZDogMjA0fX0pO1xuXG4gICAgICAgICAgICBhd2FpdCBwZXJzaXN0ZW5jZUxheWVyLndyaXRlKGZpbmdlcnByaW50LCBkb2NNZXRhISk7XG5cbiAgICAgICAgICAgIC8vIHRvIDIwNC4uLlxuXG4gICAgICAgICAgICAvLyBGSVhNRTogbm93IGdldCB0aGUgRG9jTWV0YVxuXG4gICAgICAgICAgICAvLyBub3cgY3JlYXRlIHRoZSByYW5nZXMuXG5cbiAgICAgICAgICAgIC8vIG5vdyBjb21taXQgaXQgYmFjayBvdXQuLi5cblxuICAgICAgICB9KTtcblxuICAgIH0pO1xuXG59KTtcbiJdfQ==