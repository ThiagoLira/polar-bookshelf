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
const AbstractExporter_1 = require("./AbstractExporter");
const Texts_1 = require("polar-shared/src/metadata/Texts");
class MarkdownExporter extends AbstractExporter_1.AbstractExporter {
    constructor() {
        super(...arguments);
        this.id = 'markdown';
    }
    pageInfoToText(pageInfo) {
        if (!pageInfo) {
            return "";
        }
        return `page: ${pageInfo.num}\n`;
    }
    writeImage(highlight) {
        return __awaiter(this, void 0, void 0, function* () {
            if (highlight.image) {
                const backend = highlight.image.src.backend;
                const fileRef = highlight.image.src;
                const containsFile = yield this.datastore.containsFile(backend, fileRef);
                if (containsFile) {
                    const file = this.datastore.getFile(backend, fileRef);
                    yield this.writer.write(`image: ${file.url}\n`);
                }
            }
        });
    }
    writeAreaHighlight(areaHighlight, exportable) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.writer.write("---\n");
            const output = `type: area-highlight\n` +
                `created: ${areaHighlight.created}\n` +
                `color: ${areaHighlight.color || ''}\n`;
            yield this.writer.write(output);
            yield this.writeImage(areaHighlight);
        });
    }
    writeTextHighlight(textHighlight, exportable) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.writer.write("---\n");
            yield this.writer.write(this.pageInfoToText(exportable.pageInfo));
            const output = `type: text-highlight\n` +
                `created: ${textHighlight.created}\n` +
                `color: ${textHighlight.color || ''}\n`;
            yield this.writer.write(output);
            yield this.writeImage(textHighlight);
            const body = Texts_1.Texts.toString(textHighlight.text);
            if (body) {
                yield this.writer.write(body);
                yield this.writer.write('\n');
            }
        });
    }
    writeComment(comment, exportable) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.writer.write("---\n");
            yield this.writer.write(this.pageInfoToText(exportable.pageInfo));
            const output = `type: comment\n` +
                `created: ${comment.created}\n`;
            yield this.writer.write(output);
            const body = Texts_1.Texts.toString(comment.content);
            if (body) {
                yield this.writer.write(body);
                yield this.writer.write('\n');
            }
        });
    }
    writeFlashcard(flashcard, exportable) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.writer.write(this.pageInfoToText(exportable.pageInfo));
            for (const fieldName of Object.keys(flashcard.fields)) {
                const output = `type: flashcard\n` +
                    `created: ${flashcard.created}\n`;
                yield this.writer.write(output);
                const field = flashcard.fields[fieldName];
                yield this.writer.write(`${fieldName}: ` + Texts_1.Texts.toString(field));
                yield this.writer.write('\n');
            }
        });
    }
}
exports.MarkdownExporter = MarkdownExporter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFya2Rvd25FeHBvcnRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIk1hcmtkb3duRXhwb3J0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFHQSx5REFBb0Q7QUFHcEQsMkRBQXNEO0FBSXRELE1BQWEsZ0JBQWlCLFNBQVEsbUNBQWdCO0lBQXREOztRQUVvQixPQUFFLEdBQVcsVUFBVSxDQUFDO0lBbUg1QyxDQUFDO0lBakhhLGNBQWMsQ0FBQyxRQUFvQjtRQUV6QyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ1gsT0FBTyxFQUFFLENBQUM7U0FDYjtRQUVELE9BQU8sU0FBUyxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUM7SUFDckMsQ0FBQztJQUVlLFVBQVUsQ0FBQyxTQUF3Qzs7WUFFL0QsSUFBSSxTQUFTLENBQUMsS0FBSyxFQUFFO2dCQUVqQixNQUFNLE9BQU8sR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUM7Z0JBQzVDLE1BQU0sT0FBTyxHQUFZLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO2dCQUU3QyxNQUFNLFlBQVksR0FBRyxNQUFNLElBQUksQ0FBQyxTQUFVLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztnQkFFMUUsSUFBSSxZQUFZLEVBQUU7b0JBRWQsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVUsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO29CQUV2RCxNQUFNLElBQUksQ0FBQyxNQUFPLENBQUMsS0FBSyxDQUFDLFVBQVUsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7aUJBRXBEO2FBRUo7UUFFTCxDQUFDO0tBQUE7SUFFZSxrQkFBa0IsQ0FBQyxhQUE0QixFQUFFLFVBQTRCOztZQUN6RixNQUFNLElBQUksQ0FBQyxNQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRWxDLE1B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QVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUNuRSxNQUFNLElBQUksQ0FBQyxNQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBRWxDO1FBRUwsQ0FBQztLQUFBO0NBRUo7QUFySEQsNENBcUhDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBbm5vdGF0aW9uSG9sZGVyfSBmcm9tIFwiLi4vQW5ub3RhdGlvbkhvbGRlclwiO1xuaW1wb3J0IHtUZXh0SGlnaGxpZ2h0fSBmcm9tIFwiLi4vVGV4dEhpZ2hsaWdodFwiO1xuaW1wb3J0IHtBcmVhSGlnaGxpZ2h0fSBmcm9tICcuLi9BcmVhSGlnaGxpZ2h0JztcbmltcG9ydCB7QWJzdHJhY3RFeHBvcnRlcn0gZnJvbSAnLi9BYnN0cmFjdEV4cG9ydGVyJztcbmltcG9ydCB7Rmxhc2hjYXJkfSBmcm9tICcuLi9GbGFzaGNhcmQnO1xuaW1wb3J0IHtDb21tZW50fSBmcm9tICcuLi9Db21tZW50JztcbmltcG9ydCB7VGV4dHN9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL21ldGFkYXRhL1RleHRzXCI7XG5pbXBvcnQge0lQYWdlSW5mb30gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvbWV0YWRhdGEvSVBhZ2VJbmZvXCI7XG5pbXBvcnQge0ZpbGVSZWZ9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL2RhdGFzdG9yZS9GaWxlUmVmXCI7XG5cbmV4cG9ydCBjbGFzcyBNYXJrZG93bkV4cG9ydGVyIGV4dGVuZHMgQWJzdHJhY3RFeHBvcnRlciB7XG5cbiAgICBwdWJsaWMgcmVhZG9ubHkgaWQ6IHN0cmluZyA9ICdtYXJrZG93bic7XG5cbiAgICBwcm90ZWN0ZWQgcGFnZUluZm9Ub1RleHQocGFnZUluZm8/OiBJUGFnZUluZm8pOiBzdHJpbmcge1xuXG4gICAgICAgIGlmICghcGFnZUluZm8pIHtcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGBwYWdlOiAke3BhZ2VJbmZvLm51bX1cXG5gO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBhc3luYyB3cml0ZUltYWdlKGhpZ2hsaWdodDogQXJlYUhpZ2hsaWdodCB8IFRleHRIaWdobGlnaHQpIHtcblxuICAgICAgICBpZiAoaGlnaGxpZ2h0LmltYWdlKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGJhY2tlbmQgPSBoaWdobGlnaHQuaW1hZ2Uuc3JjLmJhY2tlbmQ7XG4gICAgICAgICAgICBjb25zdCBmaWxlUmVmOiBGaWxlUmVmID0gaGlnaGxpZ2h0LmltYWdlLnNyYztcblxuICAgICAgICAgICAgY29uc3QgY29udGFpbnNGaWxlID0gYXdhaXQgdGhpcy5kYXRhc3RvcmUhLmNvbnRhaW5zRmlsZShiYWNrZW5kLCBmaWxlUmVmKTtcblxuICAgICAgICAgICAgaWYgKGNvbnRhaW5zRmlsZSkge1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZmlsZSA9IHRoaXMuZGF0YXN0b3JlIS5nZXRGaWxlKGJhY2tlbmQsIGZpbGVSZWYpO1xuXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy53cml0ZXIhLndyaXRlKGBpbWFnZTogJHtmaWxlLnVybH1cXG5gKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHByb3RlY3RlZCBhc3luYyB3cml0ZUFyZWFIaWdobGlnaHQoYXJlYUhpZ2hsaWdodDogQXJlYUhpZ2hsaWdodCwgZXhwb3J0YWJsZTogQW5ub3RhdGlvbkhvbGRlcik6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBhd2FpdCB0aGlzLndyaXRlciEud3JpdGUoXCItLS1cXG5cIik7XG5cbiAgICAgICAgY29uc3Qgb3V0cHV0ID1cbiAgICAgICAgICAgIGB0eXBlOiBhcmVhLWhpZ2hsaWdodFxcbmAgK1xuICAgICAgICAgICAgYGNyZWF0ZWQ6ICR7YXJlYUhpZ2hsaWdodC5jcmVhdGVkfVxcbmAgK1xuICAgICAgICAgICAgYGNvbG9yOiAke2FyZWFIaWdobGlnaHQuY29sb3IgfHwgJyd9XFxuYFxuICAgICAgICA7XG5cbiAgICAgICAgYXdhaXQgdGhpcy53cml0ZXIhLndyaXRlKG91dHB1dCk7XG4gICAgICAgIGF3YWl0IHRoaXMud3JpdGVJbWFnZShhcmVhSGlnaGxpZ2h0KTtcblxuICAgIH1cblxuICAgIHByb3RlY3RlZCBhc3luYyB3cml0ZVRleHRIaWdobGlnaHQodGV4dEhpZ2hsaWdodDogVGV4dEhpZ2hsaWdodCwgZXhwb3J0YWJsZTogQW5ub3RhdGlvbkhvbGRlcik6IFByb21pc2U8dm9pZD4ge1xuXG4gICAgICAgIGF3YWl0IHRoaXMud3JpdGVyIS53cml0ZShcIi0tLVxcblwiKTtcblxuICAgICAgICBhd2FpdCB0aGlzLndyaXRlciEud3JpdGUodGhpcy5wYWdlSW5mb1RvVGV4dChleHBvcnRhYmxlLnBhZ2VJbmZvKSk7XG5cbiAgICAgICAgY29uc3Qgb3V0cHV0ID1cbiAgICAgICAgICAgIGB0eXBlOiB0ZXh0LWhpZ2hsaWdodFxcbmAgK1xuICAgICAgICAgICAgYGNyZWF0ZWQ6ICR7dGV4dEhpZ2hsaWdodC5jcmVhdGVkfVxcbmAgK1xuICAgICAgICAgICAgYGNvbG9yOiAke3RleHRIaWdobGlnaHQuY29sb3IgfHwgJyd9XFxuYFxuICAgICAgICA7XG5cbiAgICAgICAgYXdhaXQgdGhpcy53cml0ZXIhLndyaXRlKG91dHB1dCk7XG5cbiAgICAgICAgYXdhaXQgdGhpcy53cml0ZUltYWdlKHRleHRIaWdobGlnaHQpO1xuXG4gICAgICAgIGNvbnN0IGJvZHkgPSBUZXh0cy50b1N0cmluZyh0ZXh0SGlnaGxpZ2h0LnRleHQpO1xuXG4gICAgICAgIGlmIChib2R5KSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLndyaXRlciEud3JpdGUoYm9keSk7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLndyaXRlciEud3JpdGUoJ1xcbicpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYXN5bmMgd3JpdGVDb21tZW50KGNvbW1lbnQ6IENvbW1lbnQsIGV4cG9ydGFibGU6IEFubm90YXRpb25Ib2xkZXIpOiBQcm9taXNlPHZvaWQ+IHtcblxuICAgICAgICBhd2FpdCB0aGlzLndyaXRlciEud3JpdGUoXCItLS1cXG5cIik7XG5cbiAgICAgICAgYXdhaXQgdGhpcy53cml0ZXIhLndyaXRlKHRoaXMucGFnZUluZm9Ub1RleHQoZXhwb3J0YWJsZS5wYWdlSW5mbykpO1xuXG4gICAgICAgIGNvbnN0IG91dHB1dCA9XG4gICAgICAgICAgICBgdHlwZTogY29tbWVudFxcbmAgK1xuICAgICAgICAgICAgYGNyZWF0ZWQ6ICR7Y29tbWVudC5jcmVhdGVkfVxcbmBcbiAgICAgICAgO1xuXG4gICAgICAgIGF3YWl0IHRoaXMud3JpdGVyIS53cml0ZShvdXRwdXQpO1xuXG4gICAgICAgIGNvbnN0IGJvZHkgPSBUZXh0cy50b1N0cmluZyhjb21tZW50LmNvbnRlbnQpO1xuXG4gICAgICAgIGlmIChib2R5KSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLndyaXRlciEud3JpdGUoYm9keSk7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLndyaXRlciEud3JpdGUoJ1xcbicpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYXN5bmMgd3JpdGVGbGFzaGNhcmQoZmxhc2hjYXJkOiBGbGFzaGNhcmQsIGV4cG9ydGFibGU6IEFubm90YXRpb25Ib2xkZXIpOiBQcm9taXNlPHZvaWQ+IHtcblxuICAgICAgICBhd2FpdCB0aGlzLndyaXRlciEud3JpdGUodGhpcy5wYWdlSW5mb1RvVGV4dChleHBvcnRhYmxlLnBhZ2VJbmZvKSk7XG5cbiAgICAgICAgZm9yIChjb25zdCBmaWVsZE5hbWUgb2YgT2JqZWN0LmtleXMoZmxhc2hjYXJkLmZpZWxkcykpIHtcblxuICAgICAgICAgICAgY29uc3Qgb3V0cHV0ID1cbiAgICAgICAgICAgICAgICBgdHlwZTogZmxhc2hjYXJkXFxuYCArXG4gICAgICAgICAgICAgICAgYGNyZWF0ZWQ6ICR7Zmxhc2hjYXJkLmNyZWF0ZWR9XFxuYFxuICAgICAgICAgICAgO1xuXG4gICAgICAgICAgICBhd2FpdCB0aGlzLndyaXRlciEud3JpdGUob3V0cHV0KTtcblxuICAgICAgICAgICAgY29uc3QgZmllbGQgPSBmbGFzaGNhcmQuZmllbGRzW2ZpZWxkTmFtZV07XG5cbiAgICAgICAgICAgIGF3YWl0IHRoaXMud3JpdGVyIS53cml0ZShgJHtmaWVsZE5hbWV9OiBgICsgVGV4dHMudG9TdHJpbmcoZmllbGQpKTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMud3JpdGVyIS53cml0ZSgnXFxuJyk7XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG59XG4iXX0=