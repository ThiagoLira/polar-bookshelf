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
const DocumentReadyStates_1 = require("./DocumentReadyStates");
const jsdom_1 = require("jsdom");
const chai_1 = require("chai");
describe('DocumentReadyStates', function () {
    describe('waitForChanger', function () {
        let jsdom = new jsdom_1.JSDOM();
        let doc = jsdom.window.document;
        it("basic via event", function () {
            return __awaiter(this, void 0, void 0, function* () {
                let mockReadyStateChanger = new DocumentReadyStates_1.MockReadyStateChanger('loading');
                let result = DocumentReadyStates_1.DocumentReadyStates.waitForChanger(doc, 'interactive', mockReadyStateChanger);
                mockReadyStateChanger.resolve();
                chai_1.assert.equal(yield result, DocumentReadyStates_1.ReadyStateResolution.EVENT);
            });
        });
        it("basic via direct", function () {
            return __awaiter(this, void 0, void 0, function* () {
                let mockReadyStateChanger = new DocumentReadyStates_1.MockReadyStateChanger('loading');
                let result = DocumentReadyStates_1.DocumentReadyStates.waitForChanger(doc, 'loading', mockReadyStateChanger);
                chai_1.assert.equal(yield result, DocumentReadyStates_1.ReadyStateResolution.DIRECT);
            });
        });
        it("to via direct", function () {
            return __awaiter(this, void 0, void 0, function* () {
                let mockReadyStateChanger = new DocumentReadyStates_1.MockReadyStateChanger('loading');
                let result = DocumentReadyStates_1.DocumentReadyStates.waitForChanger(doc, 'complete', mockReadyStateChanger);
                mockReadyStateChanger.resolve();
                mockReadyStateChanger.resolve();
                chai_1.assert.equal(yield result, DocumentReadyStates_1.ReadyStateResolution.EVENT);
            });
        });
    });
    describe('meetsRequiredState', function () {
        it("basic", function () {
            chai_1.assert.equal(DocumentReadyStates_1.DocumentReadyStates.meetsRequiredState('interactive', 'interactive'), true);
        });
        it("full", function () {
            chai_1.assert.equal(DocumentReadyStates_1.DocumentReadyStates.meetsRequiredState('loading', 'complete'), true);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jdW1lbnRSZWFkeVN0YXRlc1Rlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJEb2N1bWVudFJlYWR5U3RhdGVzVGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLCtEQUF1RztBQUN2RyxpQ0FBNEI7QUFDNUIsK0JBQTRCO0FBRTVCLFFBQVEsQ0FBQyxxQkFBcUIsRUFBRTtJQUU1QixRQUFRLENBQUMsZ0JBQWdCLEVBQUU7UUFFdkIsSUFBSSxLQUFLLEdBQUcsSUFBSSxhQUFLLEVBQUUsQ0FBQztRQUV4QixJQUFJLEdBQUcsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUVoQyxFQUFFLENBQUMsaUJBQWlCLEVBQUU7O2dCQUVsQixJQUFJLHFCQUFxQixHQUFHLElBQUksMkNBQXFCLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBRWpFLElBQUksTUFBTSxHQUFHLHlDQUFtQixDQUFDLGNBQWMsQ0FBQyxHQUFHLEVBQUUsYUFBYSxFQUFFLHFCQUFxQixDQUFDLENBQUM7Z0JBRTNGLHFCQUFxQixDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUVoQyxhQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sTUFBTSxFQUFFLDBDQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRTNELENBQUM7U0FBQSxDQUFDLENBQUM7UUFFSCxFQUFFLENBQUMsa0JBQWtCLEVBQUU7O2dCQUVuQixJQUFJLHFCQUFxQixHQUFHLElBQUksMkNBQXFCLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBRWpFLElBQUksTUFBTSxHQUFHLHlDQUFtQixDQUFDLGNBQWMsQ0FBQyxHQUFHLEVBQUUsU0FBUyxFQUFFLHFCQUFxQixDQUFDLENBQUM7Z0JBRXZGLGFBQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxNQUFNLEVBQUUsMENBQW9CLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFNUQsQ0FBQztTQUFBLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyxlQUFlLEVBQUU7O2dCQUVoQixJQUFJLHFCQUFxQixHQUFHLElBQUksMkNBQXFCLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBRWpFLElBQUksTUFBTSxHQUFHLHlDQUFtQixDQUFDLGNBQWMsQ0FBQyxHQUFHLEVBQUUsVUFBVSxFQUFFLHFCQUFxQixDQUFDLENBQUM7Z0JBQ3hGLHFCQUFxQixDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNoQyxxQkFBcUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFFaEMsYUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLE1BQU0sRUFBRSwwQ0FBb0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUUzRCxDQUFDO1NBQUEsQ0FBQyxDQUFDO0lBRVAsQ0FBQyxDQUFDLENBQUM7SUFFSCxRQUFRLENBQUMsb0JBQW9CLEVBQUU7UUFFM0IsRUFBRSxDQUFDLE9BQU8sRUFBRTtZQUNSLGFBQU0sQ0FBQyxLQUFLLENBQUMseUNBQW1CLENBQUMsa0JBQWtCLENBQUMsYUFBYSxFQUFFLGFBQWEsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzdGLENBQUMsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLE1BQU0sRUFBRTtZQUNQLGFBQU0sQ0FBQyxLQUFLLENBQUMseUNBQW1CLENBQUMsa0JBQWtCLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3RGLENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQyxDQUFDLENBQUM7QUFFUCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RG9jdW1lbnRSZWFkeVN0YXRlcywgTW9ja1JlYWR5U3RhdGVDaGFuZ2VyLCBSZWFkeVN0YXRlUmVzb2x1dGlvbn0gZnJvbSAnLi9Eb2N1bWVudFJlYWR5U3RhdGVzJztcbmltcG9ydCB7SlNET019IGZyb20gJ2pzZG9tJztcbmltcG9ydCB7YXNzZXJ0fSBmcm9tICdjaGFpJztcblxuZGVzY3JpYmUoJ0RvY3VtZW50UmVhZHlTdGF0ZXMnLCBmdW5jdGlvbigpIHtcblxuICAgIGRlc2NyaWJlKCd3YWl0Rm9yQ2hhbmdlcicsIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGxldCBqc2RvbSA9IG5ldyBKU0RPTSgpO1xuXG4gICAgICAgIGxldCBkb2MgPSBqc2RvbS53aW5kb3cuZG9jdW1lbnQ7XG5cbiAgICAgICAgaXQoXCJiYXNpYyB2aWEgZXZlbnRcIiwgYXN5bmMgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICBsZXQgbW9ja1JlYWR5U3RhdGVDaGFuZ2VyID0gbmV3IE1vY2tSZWFkeVN0YXRlQ2hhbmdlcignbG9hZGluZycpO1xuXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gRG9jdW1lbnRSZWFkeVN0YXRlcy53YWl0Rm9yQ2hhbmdlcihkb2MsICdpbnRlcmFjdGl2ZScsIG1vY2tSZWFkeVN0YXRlQ2hhbmdlcik7XG5cbiAgICAgICAgICAgIG1vY2tSZWFkeVN0YXRlQ2hhbmdlci5yZXNvbHZlKCk7XG5cbiAgICAgICAgICAgIGFzc2VydC5lcXVhbChhd2FpdCByZXN1bHQsIFJlYWR5U3RhdGVSZXNvbHV0aW9uLkVWRU5UKTtcblxuICAgICAgICB9KTtcblxuICAgICAgICBpdChcImJhc2ljIHZpYSBkaXJlY3RcIiwgYXN5bmMgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICBsZXQgbW9ja1JlYWR5U3RhdGVDaGFuZ2VyID0gbmV3IE1vY2tSZWFkeVN0YXRlQ2hhbmdlcignbG9hZGluZycpO1xuXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gRG9jdW1lbnRSZWFkeVN0YXRlcy53YWl0Rm9yQ2hhbmdlcihkb2MsICdsb2FkaW5nJywgbW9ja1JlYWR5U3RhdGVDaGFuZ2VyKTtcblxuICAgICAgICAgICAgYXNzZXJ0LmVxdWFsKGF3YWl0IHJlc3VsdCwgUmVhZHlTdGF0ZVJlc29sdXRpb24uRElSRUNUKTtcblxuICAgICAgICB9KTtcblxuICAgICAgICBpdChcInRvIHZpYSBkaXJlY3RcIiwgYXN5bmMgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICBsZXQgbW9ja1JlYWR5U3RhdGVDaGFuZ2VyID0gbmV3IE1vY2tSZWFkeVN0YXRlQ2hhbmdlcignbG9hZGluZycpO1xuXG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gRG9jdW1lbnRSZWFkeVN0YXRlcy53YWl0Rm9yQ2hhbmdlcihkb2MsICdjb21wbGV0ZScsIG1vY2tSZWFkeVN0YXRlQ2hhbmdlcik7XG4gICAgICAgICAgICBtb2NrUmVhZHlTdGF0ZUNoYW5nZXIucmVzb2x2ZSgpO1xuICAgICAgICAgICAgbW9ja1JlYWR5U3RhdGVDaGFuZ2VyLnJlc29sdmUoKTtcblxuICAgICAgICAgICAgYXNzZXJ0LmVxdWFsKGF3YWl0IHJlc3VsdCwgUmVhZHlTdGF0ZVJlc29sdXRpb24uRVZFTlQpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgfSk7XG5cbiAgICBkZXNjcmliZSgnbWVldHNSZXF1aXJlZFN0YXRlJywgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgaXQoXCJiYXNpY1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBhc3NlcnQuZXF1YWwoRG9jdW1lbnRSZWFkeVN0YXRlcy5tZWV0c1JlcXVpcmVkU3RhdGUoJ2ludGVyYWN0aXZlJywgJ2ludGVyYWN0aXZlJyksIHRydWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpdChcImZ1bGxcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgYXNzZXJ0LmVxdWFsKERvY3VtZW50UmVhZHlTdGF0ZXMubWVldHNSZXF1aXJlZFN0YXRlKCdsb2FkaW5nJywgJ2NvbXBsZXRlJyksIHRydWUpO1xuICAgICAgICB9KTtcblxuICAgIH0pO1xuXG59KTtcbiJdfQ==