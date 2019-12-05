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
const BufferWriter_1 = require("./writers/BufferWriter");
const JSONExporter_1 = require("./JSONExporter");
const Comments_1 = require("../Comments");
const AnnotationType_1 = require("polar-shared/src/metadata/AnnotationType");
const Assertions_1 = require("../../test/Assertions");
const TestingTime_1 = require("polar-shared/src/test/TestingTime");
const MockDatastore_1 = require("../../datastore/MockDatastore");
const datastore = new MockDatastore_1.MockReadableBinaryDatastore();
describe('JSONExporter', function () {
    beforeEach(function () {
        Comments_1.Comments.SEQUENCE = 0;
    });
    it("basic with one item", function () {
        return __awaiter(this, void 0, void 0, function* () {
            TestingTime_1.TestingTime.freeze();
            const writer = new BufferWriter_1.BufferWriter();
            const converter = new JSONExporter_1.JSONExporter();
            yield converter.init(writer, datastore);
            const comment = Comments_1.Comments.createTextComment("hello world", 'page:1');
            yield converter.write({ type: AnnotationType_1.AnnotationType.COMMENT, annotation: comment });
            yield converter.close();
            const expected = {
                "items": [
                    {
                        "content": {
                            "TEXT": "hello world"
                        },
                        "created": "2012-03-02T11:38:49.321Z",
                        "guid": "12exn26R8gkD2fjouKQU",
                        "id": "12exn26R8gkD2fjouKQU",
                        "lastUpdated": "2012-03-02T11:38:49.321Z",
                        "ref": "page:1"
                    }
                ],
                "version": 1
            };
            Assertions_1.assertJSON(writer.toString(), expected);
        });
    });
    it("with two items", function () {
        return __awaiter(this, void 0, void 0, function* () {
            TestingTime_1.TestingTime.freeze();
            const writer = new BufferWriter_1.BufferWriter();
            const converter = new JSONExporter_1.JSONExporter();
            yield converter.init(writer, datastore);
            const comment0 = Comments_1.Comments.createTextComment("hello world", 'page:1');
            yield converter.write({ type: AnnotationType_1.AnnotationType.COMMENT, annotation: comment0 });
            const comment1 = Comments_1.Comments.createTextComment("hello world", 'page:1');
            yield converter.write({ type: AnnotationType_1.AnnotationType.COMMENT, annotation: comment1 });
            yield converter.close();
            const expected = {
                "items": [
                    {
                        "content": {
                            "TEXT": "hello world"
                        },
                        "created": "2012-03-02T11:38:49.321Z",
                        "guid": "12exn26R8gkD2fjouKQU",
                        "id": "12exn26R8gkD2fjouKQU",
                        "lastUpdated": "2012-03-02T11:38:49.321Z",
                        "ref": "page:1"
                    },
                    {
                        "content": {
                            "TEXT": "hello world"
                        },
                        "created": "2012-03-02T11:38:49.321Z",
                        "guid": "1QF1kkH7VXZNYzbcDaPu",
                        "id": "1QF1kkH7VXZNYzbcDaPu",
                        "lastUpdated": "2012-03-02T11:38:49.321Z",
                        "ref": "page:1"
                    }
                ],
                "version": 1
            };
            Assertions_1.assertJSON(writer.toString(), expected);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSlNPTkV4cG9ydGVyVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkpTT05FeHBvcnRlclRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx5REFBb0Q7QUFDcEQsaURBQTRDO0FBQzVDLDBDQUFxQztBQUNyQyw2RUFBd0U7QUFFeEUsc0RBQWlEO0FBQ2pELG1FQUE4RDtBQUM5RCxpRUFBMEU7QUFFMUUsTUFBTSxTQUFTLEdBQUcsSUFBSSwyQ0FBMkIsRUFBRSxDQUFDO0FBRXBELFFBQVEsQ0FBQyxjQUFjLEVBQUU7SUFFckIsVUFBVSxDQUFDO1FBQ1AsbUJBQVEsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO0lBQzFCLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHFCQUFxQixFQUFFOztZQUV0Qix5QkFBVyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBRXJCLE1BQU0sTUFBTSxHQUFHLElBQUksMkJBQVksRUFBRSxDQUFDO1lBRWxDLE1BQU0sU0FBUyxHQUFHLElBQUksMkJBQVksRUFBRSxDQUFDO1lBRXJDLE1BQU0sU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFFeEMsTUFBTSxPQUFPLEdBQUcsbUJBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFFcEUsTUFBTSxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUMsSUFBSSxFQUFFLCtCQUFjLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUMsQ0FBRSxDQUFDO1lBRTVFLE1BQU0sU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBRXhCLE1BQU0sUUFBUSxHQUFHO2dCQUNiLE9BQU8sRUFBRTtvQkFDTDt3QkFDSSxTQUFTLEVBQUU7NEJBQ1AsTUFBTSxFQUFFLGFBQWE7eUJBQ3hCO3dCQUNELFNBQVMsRUFBRSwwQkFBMEI7d0JBQ3JDLE1BQU0sRUFBRSxzQkFBc0I7d0JBQzlCLElBQUksRUFBRSxzQkFBc0I7d0JBQzVCLGFBQWEsRUFBRSwwQkFBMEI7d0JBQ3pDLEtBQUssRUFBRSxRQUFRO3FCQUNsQjtpQkFDSjtnQkFDRCxTQUFTLEVBQUUsQ0FBQzthQUNmLENBQUM7WUFFRix1QkFBVSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUU1QyxDQUFDO0tBQUEsQ0FBQyxDQUFDO0lBR0gsRUFBRSxDQUFDLGdCQUFnQixFQUFFOztZQUVqQix5QkFBVyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBRXJCLE1BQU0sTUFBTSxHQUFHLElBQUksMkJBQVksRUFBRSxDQUFDO1lBRWxDLE1BQU0sU0FBUyxHQUFHLElBQUksMkJBQVksRUFBRSxDQUFDO1lBRXJDLE1BQU0sU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFFeEMsTUFBTSxRQUFRLEdBQUcsbUJBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDckUsTUFBTSxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUMsSUFBSSxFQUFFLCtCQUFjLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUMsQ0FBRSxDQUFDO1lBRTdFLE1BQU0sUUFBUSxHQUFHLG1CQUFRLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ3JFLE1BQU0sU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFDLElBQUksRUFBRSwrQkFBYyxDQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFDLENBQUUsQ0FBQztZQUU3RSxNQUFNLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUV4QixNQUFNLFFBQVEsR0FBRztnQkFDYixPQUFPLEVBQUU7b0JBQ0w7d0JBQ0ksU0FBUyxFQUFFOzRCQUNQLE1BQU0sRUFBRSxhQUFhO3lCQUN4Qjt3QkFDRCxTQUFTLEVBQUUsMEJBQTBCO3dCQUNyQyxNQUFNLEVBQUUsc0JBQXNCO3dCQUM5QixJQUFJLEVBQUUsc0JBQXNCO3dCQUM1QixhQUFhLEVBQUUsMEJBQTBCO3dCQUN6QyxLQUFLLEVBQUUsUUFBUTtxQkFDbEI7b0JBQ0Q7d0JBQ0ksU0FBUyxFQUFFOzRCQUNQLE1BQU0sRUFBRSxhQUFhO3lCQUN4Qjt3QkFDRCxTQUFTLEVBQUUsMEJBQTBCO3dCQUNyQyxNQUFNLEVBQUUsc0JBQXNCO3dCQUM5QixJQUFJLEVBQUUsc0JBQXNCO3dCQUM1QixhQUFhLEVBQUUsMEJBQTBCO3dCQUN6QyxLQUFLLEVBQUUsUUFBUTtxQkFDbEI7aUJBQ0o7Z0JBQ0QsU0FBUyxFQUFFLENBQUM7YUFDZixDQUFDO1lBRUYsdUJBQVUsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFNUMsQ0FBQztLQUFBLENBQUMsQ0FBQztBQUdQLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtCdWZmZXJXcml0ZXJ9IGZyb20gJy4vd3JpdGVycy9CdWZmZXJXcml0ZXInO1xuaW1wb3J0IHtKU09ORXhwb3J0ZXJ9IGZyb20gJy4vSlNPTkV4cG9ydGVyJztcbmltcG9ydCB7Q29tbWVudHN9IGZyb20gJy4uL0NvbW1lbnRzJztcbmltcG9ydCB7QW5ub3RhdGlvblR5cGV9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbWV0YWRhdGEvQW5ub3RhdGlvblR5cGUnO1xuaW1wb3J0IHthc3NlcnR9IGZyb20gJ2NoYWknO1xuaW1wb3J0IHthc3NlcnRKU09OfSBmcm9tICcuLi8uLi90ZXN0L0Fzc2VydGlvbnMnO1xuaW1wb3J0IHtUZXN0aW5nVGltZX0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy90ZXN0L1Rlc3RpbmdUaW1lJztcbmltcG9ydCB7TW9ja1JlYWRhYmxlQmluYXJ5RGF0YXN0b3JlfSBmcm9tIFwiLi4vLi4vZGF0YXN0b3JlL01vY2tEYXRhc3RvcmVcIjtcblxuY29uc3QgZGF0YXN0b3JlID0gbmV3IE1vY2tSZWFkYWJsZUJpbmFyeURhdGFzdG9yZSgpO1xuXG5kZXNjcmliZSgnSlNPTkV4cG9ydGVyJywgZnVuY3Rpb24oKSB7XG5cbiAgICBiZWZvcmVFYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICBDb21tZW50cy5TRVFVRU5DRSA9IDA7XG4gICAgfSk7XG5cbiAgICBpdChcImJhc2ljIHdpdGggb25lIGl0ZW1cIiwgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgVGVzdGluZ1RpbWUuZnJlZXplKCk7XG5cbiAgICAgICAgY29uc3Qgd3JpdGVyID0gbmV3IEJ1ZmZlcldyaXRlcigpO1xuXG4gICAgICAgIGNvbnN0IGNvbnZlcnRlciA9IG5ldyBKU09ORXhwb3J0ZXIoKTtcblxuICAgICAgICBhd2FpdCBjb252ZXJ0ZXIuaW5pdCh3cml0ZXIsIGRhdGFzdG9yZSk7XG5cbiAgICAgICAgY29uc3QgY29tbWVudCA9IENvbW1lbnRzLmNyZWF0ZVRleHRDb21tZW50KFwiaGVsbG8gd29ybGRcIiwgJ3BhZ2U6MScpO1xuXG4gICAgICAgIGF3YWl0IGNvbnZlcnRlci53cml0ZSh7dHlwZTogQW5ub3RhdGlvblR5cGUuQ09NTUVOVCwgYW5ub3RhdGlvbjogY29tbWVudH0gKTtcblxuICAgICAgICBhd2FpdCBjb252ZXJ0ZXIuY2xvc2UoKTtcblxuICAgICAgICBjb25zdCBleHBlY3RlZCA9IHtcbiAgICAgICAgICAgIFwiaXRlbXNcIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgXCJjb250ZW50XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiVEVYVFwiOiBcImhlbGxvIHdvcmxkXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCJjcmVhdGVkXCI6IFwiMjAxMi0wMy0wMlQxMTozODo0OS4zMjFaXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZ3VpZFwiOiBcIjEyZXhuMjZSOGdrRDJmam91S1FVXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiaWRcIjogXCIxMmV4bjI2Ujhna0QyZmpvdUtRVVwiLFxuICAgICAgICAgICAgICAgICAgICBcImxhc3RVcGRhdGVkXCI6IFwiMjAxMi0wMy0wMlQxMTozODo0OS4zMjFaXCIsXG4gICAgICAgICAgICAgICAgICAgIFwicmVmXCI6IFwicGFnZToxXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJ2ZXJzaW9uXCI6IDFcbiAgICAgICAgfTtcblxuICAgICAgICBhc3NlcnRKU09OKHdyaXRlci50b1N0cmluZygpLCBleHBlY3RlZCk7XG5cbiAgICB9KTtcblxuXG4gICAgaXQoXCJ3aXRoIHR3byBpdGVtc1wiLCBhc3luYyBmdW5jdGlvbigpIHtcblxuICAgICAgICBUZXN0aW5nVGltZS5mcmVlemUoKTtcblxuICAgICAgICBjb25zdCB3cml0ZXIgPSBuZXcgQnVmZmVyV3JpdGVyKCk7XG5cbiAgICAgICAgY29uc3QgY29udmVydGVyID0gbmV3IEpTT05FeHBvcnRlcigpO1xuXG4gICAgICAgIGF3YWl0IGNvbnZlcnRlci5pbml0KHdyaXRlciwgZGF0YXN0b3JlKTtcblxuICAgICAgICBjb25zdCBjb21tZW50MCA9IENvbW1lbnRzLmNyZWF0ZVRleHRDb21tZW50KFwiaGVsbG8gd29ybGRcIiwgJ3BhZ2U6MScpO1xuICAgICAgICBhd2FpdCBjb252ZXJ0ZXIud3JpdGUoe3R5cGU6IEFubm90YXRpb25UeXBlLkNPTU1FTlQsIGFubm90YXRpb246IGNvbW1lbnQwfSApO1xuXG4gICAgICAgIGNvbnN0IGNvbW1lbnQxID0gQ29tbWVudHMuY3JlYXRlVGV4dENvbW1lbnQoXCJoZWxsbyB3b3JsZFwiLCAncGFnZToxJyk7XG4gICAgICAgIGF3YWl0IGNvbnZlcnRlci53cml0ZSh7dHlwZTogQW5ub3RhdGlvblR5cGUuQ09NTUVOVCwgYW5ub3RhdGlvbjogY29tbWVudDF9ICk7XG5cbiAgICAgICAgYXdhaXQgY29udmVydGVyLmNsb3NlKCk7XG5cbiAgICAgICAgY29uc3QgZXhwZWN0ZWQgPSB7XG4gICAgICAgICAgICBcIml0ZW1zXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiY29udGVudFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIlRFWFRcIjogXCJoZWxsbyB3b3JsZFwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFwiY3JlYXRlZFwiOiBcIjIwMTItMDMtMDJUMTE6Mzg6NDkuMzIxWlwiLFxuICAgICAgICAgICAgICAgICAgICBcImd1aWRcIjogXCIxMmV4bjI2Ujhna0QyZmpvdUtRVVwiLFxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwiMTJleG4yNlI4Z2tEMmZqb3VLUVVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJsYXN0VXBkYXRlZFwiOiBcIjIwMTItMDMtMDJUMTE6Mzg6NDkuMzIxWlwiLFxuICAgICAgICAgICAgICAgICAgICBcInJlZlwiOiBcInBhZ2U6MVwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiY29udGVudFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIlRFWFRcIjogXCJoZWxsbyB3b3JsZFwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFwiY3JlYXRlZFwiOiBcIjIwMTItMDMtMDJUMTE6Mzg6NDkuMzIxWlwiLFxuICAgICAgICAgICAgICAgICAgICBcImd1aWRcIjogXCIxUUYxa2tIN1ZYWk5ZemJjRGFQdVwiLFxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwiMVFGMWtrSDdWWFpOWXpiY0RhUHVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJsYXN0VXBkYXRlZFwiOiBcIjIwMTItMDMtMDJUMTE6Mzg6NDkuMzIxWlwiLFxuICAgICAgICAgICAgICAgICAgICBcInJlZlwiOiBcInBhZ2U6MVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwidmVyc2lvblwiOiAxXG4gICAgICAgIH07XG5cbiAgICAgICAgYXNzZXJ0SlNPTih3cml0ZXIudG9TdHJpbmcoKSwgZXhwZWN0ZWQpO1xuXG4gICAgfSk7XG5cblxufSk7XG5cbiJdfQ==