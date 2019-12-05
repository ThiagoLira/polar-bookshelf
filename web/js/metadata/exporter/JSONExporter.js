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
const Flashcard_1 = require("../Flashcard");
const Strings_1 = require("polar-shared/src/util/Strings");
class JSONExporter extends AbstractExporter_1.AbstractExporter {
    constructor() {
        super(...arguments);
        this.id = 'json';
        this.hasItem = false;
    }
    init(writer, datastore) {
        const _super = Object.create(null, {
            init: { get: () => super.init }
        });
        return __awaiter(this, void 0, void 0, function* () {
            yield _super.init.call(this, writer, datastore);
            yield writer.write("{\n");
            yield writer.write("  \"version\": 1,\n");
            yield writer.write("  \"items\": [\n");
        });
    }
    onItem() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.hasItem) {
                yield this.writer.write(",\n");
            }
            this.hasItem = true;
        });
    }
    writeAreaHighlight(areaHighlight, exportable) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.onItem();
            yield this.writer.write(this.toRecord(areaHighlight));
        });
    }
    writeTextHighlight(textHighlight, exportable) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.onItem();
            yield this.writer.write(this.toRecord(textHighlight));
        });
    }
    writeComment(comment, exportable) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.onItem();
            yield this.writer.write(this.toRecord(comment));
        });
    }
    writeFlashcard(flashcard, exportable) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.onItem();
            yield this.writer.write(this.toRecord(Flashcard_1.Flashcard));
        });
    }
    close(err) {
        const _super = Object.create(null, {
            close: { get: () => super.close }
        });
        return __awaiter(this, void 0, void 0, function* () {
            yield this.writer.write("\n  ]\n");
            yield this.writer.write("\n}\n");
            return _super.close.call(this, err);
        });
    }
    toRecord(obj) {
        return Strings_1.Strings.indent(JSON.stringify(obj, null, "  "), "    ");
    }
}
exports.JSONExporter = JSONExporter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSlNPTkV4cG9ydGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiSlNPTkV4cG9ydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBSUEseURBQW9EO0FBQ3BELDRDQUF1QztBQUd2QywyREFBc0Q7QUFHdEQsTUFBYSxZQUFhLFNBQVEsbUNBQWdCO0lBQWxEOztRQUVvQixPQUFFLEdBQVcsTUFBTSxDQUFDO1FBRTVCLFlBQU8sR0FBWSxLQUFLLENBQUM7SUFxRHJDLENBQUM7SUFuRGdCLElBQUksQ0FBQyxNQUFnQixFQUFFLFNBQWtDOzs7OztZQUNsRSxNQUFNLE9BQU0sSUFBSSxZQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQztZQUVwQyxNQUFNLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDMUIsTUFBTSxNQUFNLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUM7WUFDMUMsTUFBTSxNQUFNLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFFM0MsQ0FBQztLQUFBO0lBRWEsTUFBTTs7WUFFaEIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNkLE1BQU0sSUFBSSxDQUFDLE1BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDbkM7WUFFRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUV4QixDQUFDO0tBQUE7SUFFZSxrQkFBa0IsQ0FBQyxhQUE0QixFQUFFLFVBQTRCOztZQUN6RixNQUFNLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNwQixNQUFNLElBQUksQ0FBQyxNQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUMzRCxDQUFDO0tBQUE7SUFFZSxrQkFBa0IsQ0FBQyxhQUE0QixFQUFFLFVBQTRCOztZQUN6RixNQUFNLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNwQixNQUFNLElBQUksQ0FBQyxNQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUMzRCxDQUFDO0tBQUE7SUFFZSxZQUFZLENBQUMsT0FBZ0IsRUFBRSxVQUE0Qjs7WUFDdkUsTUFBTSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDcEIsTUFBTSxJQUFJLENBQUMsTUFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDckQsQ0FBQztLQUFBO0lBRWUsY0FBYyxDQUFDLFNBQW9CLEVBQUUsVUFBNEI7O1lBQzdFLE1BQU0sSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ3BCLE1BQU0sSUFBSSxDQUFDLE1BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxxQkFBUyxDQUFDLENBQUMsQ0FBQztRQUN2RCxDQUFDO0tBQUE7SUFFWSxLQUFLLENBQUMsR0FBVzs7Ozs7WUFFMUIsTUFBTSxJQUFJLENBQUMsTUFBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNwQyxNQUFNLElBQUksQ0FBQyxNQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRWxDLE9BQU8sT0FBTSxLQUFLLFlBQUMsR0FBRyxFQUFFO1FBQzVCLENBQUM7S0FBQTtJQUVPLFFBQVEsQ0FBQyxHQUFRO1FBQ3JCLE9BQU8saUJBQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ25FLENBQUM7Q0FFSjtBQXpERCxvQ0F5REMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1dyaXRhYmxlfSBmcm9tIFwiLi9FeHBvcnRlcnNcIjtcbmltcG9ydCB7QW5ub3RhdGlvbkhvbGRlcn0gZnJvbSBcIi4uL0Fubm90YXRpb25Ib2xkZXJcIjtcbmltcG9ydCB7VGV4dEhpZ2hsaWdodH0gZnJvbSBcIi4uL1RleHRIaWdobGlnaHRcIjtcbmltcG9ydCB7QXJlYUhpZ2hsaWdodH0gZnJvbSAnLi4vQXJlYUhpZ2hsaWdodCc7XG5pbXBvcnQge0Fic3RyYWN0RXhwb3J0ZXJ9IGZyb20gJy4vQWJzdHJhY3RFeHBvcnRlcic7XG5pbXBvcnQge0ZsYXNoY2FyZH0gZnJvbSAnLi4vRmxhc2hjYXJkJztcbmltcG9ydCB7Q29tbWVudH0gZnJvbSAnLi4vQ29tbWVudCc7XG5pbXBvcnQge1RleHRzfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy9tZXRhZGF0YS9UZXh0c1wiO1xuaW1wb3J0IHtTdHJpbmdzfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy91dGlsL1N0cmluZ3NcIjtcbmltcG9ydCB7UmVhZGFibGVCaW5hcnlEYXRhc3RvcmV9IGZyb20gXCIuLi8uLi9kYXRhc3RvcmUvRGF0YXN0b3JlXCI7XG5cbmV4cG9ydCBjbGFzcyBKU09ORXhwb3J0ZXIgZXh0ZW5kcyBBYnN0cmFjdEV4cG9ydGVyIHtcblxuICAgIHB1YmxpYyByZWFkb25seSBpZDogc3RyaW5nID0gJ2pzb24nO1xuXG4gICAgcHJpdmF0ZSBoYXNJdGVtOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBwdWJsaWMgYXN5bmMgaW5pdCh3cml0ZXI6IFdyaXRhYmxlLCBkYXRhc3RvcmU6IFJlYWRhYmxlQmluYXJ5RGF0YXN0b3JlKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGF3YWl0IHN1cGVyLmluaXQod3JpdGVyLCBkYXRhc3RvcmUpO1xuXG4gICAgICAgIGF3YWl0IHdyaXRlci53cml0ZShcIntcXG5cIik7XG4gICAgICAgIGF3YWl0IHdyaXRlci53cml0ZShcIiAgXFxcInZlcnNpb25cXFwiOiAxLFxcblwiKTtcbiAgICAgICAgYXdhaXQgd3JpdGVyLndyaXRlKFwiICBcXFwiaXRlbXNcXFwiOiBbXFxuXCIpO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhc3luYyBvbkl0ZW0oKSB7XG5cbiAgICAgICAgaWYgKHRoaXMuaGFzSXRlbSkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy53cml0ZXIhLndyaXRlKFwiLFxcblwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaGFzSXRlbSA9IHRydWU7XG5cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYXN5bmMgd3JpdGVBcmVhSGlnaGxpZ2h0KGFyZWFIaWdobGlnaHQ6IEFyZWFIaWdobGlnaHQsIGV4cG9ydGFibGU6IEFubm90YXRpb25Ib2xkZXIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgYXdhaXQgdGhpcy5vbkl0ZW0oKTtcbiAgICAgICAgYXdhaXQgdGhpcy53cml0ZXIhLndyaXRlKHRoaXMudG9SZWNvcmQoYXJlYUhpZ2hsaWdodCkpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBhc3luYyB3cml0ZVRleHRIaWdobGlnaHQodGV4dEhpZ2hsaWdodDogVGV4dEhpZ2hsaWdodCwgZXhwb3J0YWJsZTogQW5ub3RhdGlvbkhvbGRlcik6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBhd2FpdCB0aGlzLm9uSXRlbSgpO1xuICAgICAgICBhd2FpdCB0aGlzLndyaXRlciEud3JpdGUodGhpcy50b1JlY29yZCh0ZXh0SGlnaGxpZ2h0KSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGFzeW5jIHdyaXRlQ29tbWVudChjb21tZW50OiBDb21tZW50LCBleHBvcnRhYmxlOiBBbm5vdGF0aW9uSG9sZGVyKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGF3YWl0IHRoaXMub25JdGVtKCk7XG4gICAgICAgIGF3YWl0IHRoaXMud3JpdGVyIS53cml0ZSh0aGlzLnRvUmVjb3JkKGNvbW1lbnQpKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYXN5bmMgd3JpdGVGbGFzaGNhcmQoZmxhc2hjYXJkOiBGbGFzaGNhcmQsIGV4cG9ydGFibGU6IEFubm90YXRpb25Ib2xkZXIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgYXdhaXQgdGhpcy5vbkl0ZW0oKTtcbiAgICAgICAgYXdhaXQgdGhpcy53cml0ZXIhLndyaXRlKHRoaXMudG9SZWNvcmQoRmxhc2hjYXJkKSk7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGNsb3NlKGVycj86IEVycm9yKTogUHJvbWlzZTx2b2lkPiB7XG5cbiAgICAgICAgYXdhaXQgdGhpcy53cml0ZXIhLndyaXRlKFwiXFxuICBdXFxuXCIpO1xuICAgICAgICBhd2FpdCB0aGlzLndyaXRlciEud3JpdGUoXCJcXG59XFxuXCIpO1xuXG4gICAgICAgIHJldHVybiBzdXBlci5jbG9zZShlcnIpO1xuICAgIH1cblxuICAgIHByaXZhdGUgdG9SZWNvcmQob2JqOiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIFN0cmluZ3MuaW5kZW50KEpTT04uc3RyaW5naWZ5KG9iaiwgbnVsbCwgXCIgIFwiKSwgXCIgICAgXCIpO1xuICAgIH1cblxufVxuIl19