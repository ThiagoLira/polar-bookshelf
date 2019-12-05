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
const AnkiSyncEngine_1 = require("./AnkiSyncEngine");
const Texts_1 = require("polar-shared/src/metadata/Texts");
const TextType_1 = require("polar-shared/src/metadata/TextType");
const Flashcards_1 = require("../../../../metadata/Flashcards");
const FlashcardType_1 = require("polar-shared/src/metadata/FlashcardType");
const DocMetas_1 = require("../../../../metadata/DocMetas");
xdescribe('AnkiSyncEngine', function () {
    function createMockFlashcard() {
        const text = Texts_1.Texts.create("This is the {{c1::cloze deletion}} text", TextType_1.TextType.MARKDOWN);
        const fields = { text };
        const archetype = "76152976-d7ae-4348-9571-d65e48050c3f";
        return Flashcards_1.Flashcards.create(FlashcardType_1.FlashcardType.CLOZE, fields, archetype, 'page:1');
    }
    function createMockDocMeta() {
        const docMeta = DocMetas_1.MockDocMetas.createMockDocMeta();
        const flashcard = createMockFlashcard();
        const pageMeta = DocMetas_1.DocMetas.getPageMeta(docMeta, 1);
        pageMeta.flashcards[flashcard.id] = flashcard;
        return docMeta;
    }
    it("basic", function () {
        return __awaiter(this, void 0, void 0, function* () {
            const ankiSyncEngine = new AnkiSyncEngine_1.AnkiSyncEngine();
            const docMeta = createMockDocMeta();
            const job = yield ankiSyncEngine.sync([() => __awaiter(this, void 0, void 0, function* () { return docMeta; })], () => console.log("got sync event"));
            yield job.start();
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW5raVN5bmNFbmdpbmVUZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQW5raVN5bmNFbmdpbmVUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUEscURBQWdEO0FBQ2hELDJEQUFzRDtBQUN0RCxpRUFBNEQ7QUFDNUQsZ0VBQTJEO0FBQzNELDJFQUFzRTtBQUN0RSw0REFBcUU7QUFFckUsU0FBUyxDQUFDLGdCQUFnQixFQUFFO0lBRXhCLFNBQVMsbUJBQW1CO1FBRXhCLE1BQU0sSUFBSSxHQUFHLGFBQUssQ0FBQyxNQUFNLENBQUMseUNBQXlDLEVBQUUsbUJBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUV4RixNQUFNLE1BQU0sR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDO1FBRXhCLE1BQU0sU0FBUyxHQUFHLHNDQUFzQyxDQUFDO1FBRXpELE9BQU8sdUJBQVUsQ0FBQyxNQUFNLENBQUMsNkJBQWEsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUUvRSxDQUFDO0lBRUQsU0FBUyxpQkFBaUI7UUFFdEIsTUFBTSxPQUFPLEdBQUcsdUJBQVksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBRWpELE1BQU0sU0FBUyxHQUFHLG1CQUFtQixFQUFFLENBQUM7UUFFeEMsTUFBTSxRQUFRLEdBQUcsbUJBQVEsQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRWxELFFBQVEsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQztRQUU5QyxPQUFPLE9BQU8sQ0FBQztJQUVuQixDQUFDO0lBRUQsRUFBRSxDQUFDLE9BQU8sRUFBRTs7WUFFUixNQUFNLGNBQWMsR0FBRyxJQUFJLCtCQUFjLEVBQUUsQ0FBQztZQUU1QyxNQUFNLE9BQU8sR0FBRyxpQkFBaUIsRUFBRSxDQUFDO1lBRXBDLE1BQU0sR0FBRyxHQUFHLE1BQU0sY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQVMsRUFBRSxnREFBQyxPQUFBLE9BQU8sQ0FBQSxHQUFBLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztZQUVsRyxNQUFNLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUV0QixDQUFDO0tBQUEsQ0FBQyxDQUFDO0FBSVAsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge01lZGlhQ29udGVudHN9IGZyb20gJy4vTWVkaWFDb250ZW50cyc7XG5pbXBvcnQge2Fzc2VydEpTT059IGZyb20gJy4uLy4uLy4uLy4uL3Rlc3QvQXNzZXJ0aW9ucyc7XG5pbXBvcnQge0Rpc2tEYXRhc3RvcmV9IGZyb20gJy4uLy4uLy4uLy4uL2RhdGFzdG9yZS9EaXNrRGF0YXN0b3JlJztcbmltcG9ydCB7Rmxhc2hjYXJkRGVzY3JpcHRvcnN9IGZyb20gJy4vRmxhc2hjYXJkRGVzY3JpcHRvcnMnO1xuaW1wb3J0IHtEb2NNZXRhU3VwcGxpZXJDb2xsZWN0aW9ufSBmcm9tICcuLi8uLi8uLi8uLi9tZXRhZGF0YS9Eb2NNZXRhU3VwcGxpZXJDb2xsZWN0aW9uJztcbmltcG9ydCB7RG9jTWV0YX0gZnJvbSAnLi4vLi4vLi4vLi4vbWV0YWRhdGEvRG9jTWV0YSc7XG5pbXBvcnQge0RlZmF1bHRQZXJzaXN0ZW5jZUxheWVyfSBmcm9tICcuLi8uLi8uLi8uLi9kYXRhc3RvcmUvRGVmYXVsdFBlcnNpc3RlbmNlTGF5ZXInO1xuaW1wb3J0IHthc3NlcnR9IGZyb20gJ2NoYWknO1xuaW1wb3J0IHtBbmtpU3luY0VuZ2luZX0gZnJvbSAnLi9BbmtpU3luY0VuZ2luZSc7XG5pbXBvcnQge1RleHRzfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL21ldGFkYXRhL1RleHRzJztcbmltcG9ydCB7VGV4dFR5cGV9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbWV0YWRhdGEvVGV4dFR5cGUnO1xuaW1wb3J0IHtGbGFzaGNhcmRzfSBmcm9tICcuLi8uLi8uLi8uLi9tZXRhZGF0YS9GbGFzaGNhcmRzJztcbmltcG9ydCB7Rmxhc2hjYXJkVHlwZX0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9tZXRhZGF0YS9GbGFzaGNhcmRUeXBlJztcbmltcG9ydCB7RG9jTWV0YXMsIE1vY2tEb2NNZXRhc30gZnJvbSAnLi4vLi4vLi4vLi4vbWV0YWRhdGEvRG9jTWV0YXMnO1xuXG54ZGVzY3JpYmUoJ0Fua2lTeW5jRW5naW5lJywgZnVuY3Rpb24oKSB7XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVNb2NrRmxhc2hjYXJkKCkge1xuXG4gICAgICAgIGNvbnN0IHRleHQgPSBUZXh0cy5jcmVhdGUoXCJUaGlzIGlzIHRoZSB7e2MxOjpjbG96ZSBkZWxldGlvbn19IHRleHRcIiwgVGV4dFR5cGUuTUFSS0RPV04pO1xuXG4gICAgICAgIGNvbnN0IGZpZWxkcyA9IHsgdGV4dCB9O1xuXG4gICAgICAgIGNvbnN0IGFyY2hldHlwZSA9IFwiNzYxNTI5NzYtZDdhZS00MzQ4LTk1NzEtZDY1ZTQ4MDUwYzNmXCI7XG5cbiAgICAgICAgcmV0dXJuIEZsYXNoY2FyZHMuY3JlYXRlKEZsYXNoY2FyZFR5cGUuQ0xPWkUsIGZpZWxkcywgYXJjaGV0eXBlLCAncGFnZToxJyk7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVNb2NrRG9jTWV0YSgpIHtcblxuICAgICAgICBjb25zdCBkb2NNZXRhID0gTW9ja0RvY01ldGFzLmNyZWF0ZU1vY2tEb2NNZXRhKCk7XG5cbiAgICAgICAgY29uc3QgZmxhc2hjYXJkID0gY3JlYXRlTW9ja0ZsYXNoY2FyZCgpO1xuXG4gICAgICAgIGNvbnN0IHBhZ2VNZXRhID0gRG9jTWV0YXMuZ2V0UGFnZU1ldGEoZG9jTWV0YSwgMSk7XG5cbiAgICAgICAgcGFnZU1ldGEuZmxhc2hjYXJkc1tmbGFzaGNhcmQuaWRdID0gZmxhc2hjYXJkO1xuXG4gICAgICAgIHJldHVybiBkb2NNZXRhO1xuXG4gICAgfVxuXG4gICAgaXQoXCJiYXNpY1wiLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICBjb25zdCBhbmtpU3luY0VuZ2luZSA9IG5ldyBBbmtpU3luY0VuZ2luZSgpO1xuXG4gICAgICAgIGNvbnN0IGRvY01ldGEgPSBjcmVhdGVNb2NrRG9jTWV0YSgpO1xuXG4gICAgICAgIGNvbnN0IGpvYiA9IGF3YWl0IGFua2lTeW5jRW5naW5lLnN5bmMoW2FzeW5jICgpID0+IGRvY01ldGFdLCAoKSA9PiBjb25zb2xlLmxvZyhcImdvdCBzeW5jIGV2ZW50XCIpKTtcblxuICAgICAgICBhd2FpdCBqb2Iuc3RhcnQoKTtcblxuICAgIH0pO1xuXG5cblxufSk7XG4iXX0=