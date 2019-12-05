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
const AnnotationType_1 = require("polar-shared/src/metadata/AnnotationType");
class AbstractExporter {
    init(writer, datastore) {
        return __awaiter(this, void 0, void 0, function* () {
            this.writer = writer;
            this.datastore = datastore;
        });
    }
    write(exportable) {
        return __awaiter(this, void 0, void 0, function* () {
            switch (exportable.type) {
                case AnnotationType_1.AnnotationType.TEXT_HIGHLIGHT:
                    yield this.writeTextHighlight(exportable.annotation, exportable);
                    break;
                case AnnotationType_1.AnnotationType.AREA_HIGHLIGHT:
                    yield this.writeAreaHighlight(exportable.annotation, exportable);
                    break;
                case AnnotationType_1.AnnotationType.COMMENT:
                    yield this.writeComment(exportable.annotation, exportable);
                    break;
                case AnnotationType_1.AnnotationType.FLASHCARD:
                    yield this.writeFlashcard(exportable.annotation, exportable);
                    break;
            }
        });
    }
    close(err) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
exports.AbstractExporter = AbstractExporter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWJzdHJhY3RFeHBvcnRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkFic3RyYWN0RXhwb3J0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFNQSw2RUFBd0U7QUFHeEUsTUFBc0IsZ0JBQWdCO0lBT3JCLElBQUksQ0FBQyxNQUFnQixFQUFFLFNBQWtDOztZQUNsRSxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztZQUNyQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMvQixDQUFDO0tBQUE7SUFFWSxLQUFLLENBQUMsVUFBNEI7O1lBRTNDLFFBQVEsVUFBVSxDQUFDLElBQUksRUFBRTtnQkFFckIsS0FBSywrQkFBYyxDQUFDLGNBQWM7b0JBQzlCLE1BQU0sSUFBSSxDQUFDLGtCQUFrQixDQUFpQixVQUFVLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO29CQUNqRixNQUFNO2dCQUVWLEtBQUssK0JBQWMsQ0FBQyxjQUFjO29CQUM5QixNQUFNLElBQUksQ0FBQyxrQkFBa0IsQ0FBaUIsVUFBVSxDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQztvQkFDakYsTUFBTTtnQkFFVixLQUFLLCtCQUFjLENBQUMsT0FBTztvQkFDdkIsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFXLFVBQVUsQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7b0JBQ3JFLE1BQU07Z0JBRVYsS0FBSywrQkFBYyxDQUFDLFNBQVM7b0JBQ3pCLE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBYSxVQUFVLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO29CQUN6RSxNQUFNO2FBRWI7UUFFTCxDQUFDO0tBQUE7SUFjWSxLQUFLLENBQUMsR0FBVzs7UUFJOUIsQ0FBQztLQUFBO0NBRUo7QUF0REQsNENBc0RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFeHBvcnRlciwgV3JpdGFibGV9IGZyb20gXCIuL0V4cG9ydGVyc1wiO1xuaW1wb3J0IHtBbm5vdGF0aW9uSG9sZGVyfSBmcm9tIFwiLi4vQW5ub3RhdGlvbkhvbGRlclwiO1xuaW1wb3J0IHtUZXh0SGlnaGxpZ2h0fSBmcm9tIFwiLi4vVGV4dEhpZ2hsaWdodFwiO1xuaW1wb3J0IHtBcmVhSGlnaGxpZ2h0fSBmcm9tICcuLi9BcmVhSGlnaGxpZ2h0JztcbmltcG9ydCB7Q29tbWVudH0gZnJvbSAnLi4vQ29tbWVudCc7XG5pbXBvcnQge0ZsYXNoY2FyZH0gZnJvbSAnLi4vRmxhc2hjYXJkJztcbmltcG9ydCB7QW5ub3RhdGlvblR5cGV9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbWV0YWRhdGEvQW5ub3RhdGlvblR5cGUnO1xuaW1wb3J0IHsgUmVhZGFibGVCaW5hcnlEYXRhc3RvcmUgfSBmcm9tIFwiLi4vLi4vZGF0YXN0b3JlL0RhdGFzdG9yZVwiO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RFeHBvcnRlciBpbXBsZW1lbnRzIEV4cG9ydGVyIHtcblxuICAgIHB1YmxpYyBhYnN0cmFjdCByZWFkb25seSBpZDogc3RyaW5nO1xuXG4gICAgcHJvdGVjdGVkIHdyaXRlcj86IFdyaXRhYmxlO1xuICAgIHByb3RlY3RlZCBkYXRhc3RvcmU/OiBSZWFkYWJsZUJpbmFyeURhdGFzdG9yZTtcblxuICAgIHB1YmxpYyBhc3luYyBpbml0KHdyaXRlcjogV3JpdGFibGUsIGRhdGFzdG9yZTogUmVhZGFibGVCaW5hcnlEYXRhc3RvcmUpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgdGhpcy53cml0ZXIgPSB3cml0ZXI7XG4gICAgICAgIHRoaXMuZGF0YXN0b3JlID0gZGF0YXN0b3JlO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyB3cml0ZShleHBvcnRhYmxlOiBBbm5vdGF0aW9uSG9sZGVyKTogUHJvbWlzZTx2b2lkPiB7XG5cbiAgICAgICAgc3dpdGNoIChleHBvcnRhYmxlLnR5cGUpIHtcblxuICAgICAgICAgICAgY2FzZSBBbm5vdGF0aW9uVHlwZS5URVhUX0hJR0hMSUdIVDpcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLndyaXRlVGV4dEhpZ2hsaWdodCg8VGV4dEhpZ2hsaWdodD4gZXhwb3J0YWJsZS5hbm5vdGF0aW9uLCBleHBvcnRhYmxlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBBbm5vdGF0aW9uVHlwZS5BUkVBX0hJR0hMSUdIVDpcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLndyaXRlQXJlYUhpZ2hsaWdodCg8QXJlYUhpZ2hsaWdodD4gZXhwb3J0YWJsZS5hbm5vdGF0aW9uLCBleHBvcnRhYmxlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBBbm5vdGF0aW9uVHlwZS5DT01NRU5UOlxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMud3JpdGVDb21tZW50KDxDb21tZW50PiBleHBvcnRhYmxlLmFubm90YXRpb24sIGV4cG9ydGFibGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIEFubm90YXRpb25UeXBlLkZMQVNIQ0FSRDpcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLndyaXRlRmxhc2hjYXJkKDxGbGFzaGNhcmQ+IGV4cG9ydGFibGUuYW5ub3RhdGlvbiwgZXhwb3J0YWJsZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IHdyaXRlVGV4dEhpZ2hsaWdodCh0ZXh0SGlnaGxpZ2h0OiBUZXh0SGlnaGxpZ2h0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwb3J0YWJsZTogQW5ub3RhdGlvbkhvbGRlcik6IFByb21pc2U8dm9pZD47XG5cbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3Qgd3JpdGVBcmVhSGlnaGxpZ2h0KGFyZWFIaWdobGlnaHQ6IEFyZWFIaWdobGlnaHQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBvcnRhYmxlOiBBbm5vdGF0aW9uSG9sZGVyKTogUHJvbWlzZTx2b2lkPjtcblxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCB3cml0ZUNvbW1lbnQoY29tbWVudDogQ29tbWVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cG9ydGFibGU6IEFubm90YXRpb25Ib2xkZXIpOiBQcm9taXNlPHZvaWQ+O1xuXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IHdyaXRlRmxhc2hjYXJkKGZsYXNoY2FyZDogRmxhc2hjYXJkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBvcnRhYmxlOiBBbm5vdGF0aW9uSG9sZGVyKTogUHJvbWlzZTx2b2lkPjtcblxuICAgIHB1YmxpYyBhc3luYyBjbG9zZShlcnI/OiBFcnJvcik6IFByb21pc2U8dm9pZD4ge1xuXG4gICAgICAgIC8vIG5vb3BcblxuICAgIH1cblxufVxuIl19