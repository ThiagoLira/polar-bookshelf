"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const DocInfos_1 = require("./DocInfos");
const DocDetails_1 = require("./DocDetails");
describe('DocDetails', function () {
    it('basic', function () {
        let docInfo = DocInfos_1.DocInfos.create('0x001', 1);
        let docDetail = {
            fingerprint: '0x001',
            title: 'hello world'
        };
        let actual = DocDetails_1.DocDetails.merge(docInfo, docDetail);
        chai_1.assert.equal(docInfo.title, 'hello world');
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jRGV0YWlsc1Rlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJEb2NEZXRhaWxzVGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLCtCQUE0QjtBQUc1Qix5Q0FBb0M7QUFFcEMsNkNBQXdDO0FBR3hDLFFBQVEsQ0FBQyxZQUFZLEVBQUU7SUFFbkIsRUFBRSxDQUFDLE9BQU8sRUFBRTtRQUVSLElBQUksT0FBTyxHQUFHLG1CQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztRQUUxQyxJQUFJLFNBQVMsR0FBYztZQUN2QixXQUFXLEVBQUUsT0FBTztZQUNwQixLQUFLLEVBQUUsYUFBYTtTQUN2QixDQUFDO1FBRUYsSUFBSSxNQUFNLEdBQUcsdUJBQVUsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFBO1FBQ2pELGFBQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxhQUFhLENBQUMsQ0FBQztJQUkvQyxDQUFDLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQge2Fzc2VydH0gZnJvbSAnY2hhaSc7XG5cbmltcG9ydCB7RG9jSW5mb30gZnJvbSAnLi9Eb2NJbmZvJztcbmltcG9ydCB7RG9jSW5mb3N9IGZyb20gJy4vRG9jSW5mb3MnO1xuaW1wb3J0IHtEb2NEZXRhaWx9IGZyb20gJy4vRG9jRGV0YWlsJztcbmltcG9ydCB7RG9jRGV0YWlsc30gZnJvbSAnLi9Eb2NEZXRhaWxzJztcbmltcG9ydCB7YXNzZXJ0SlNPTn0gZnJvbSAnLi4vdGVzdC9Bc3NlcnRpb25zJztcblxuZGVzY3JpYmUoJ0RvY0RldGFpbHMnLCBmdW5jdGlvbiAoKSB7XG5cbiAgICBpdCgnYmFzaWMnLCBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgbGV0IGRvY0luZm8gPSBEb2NJbmZvcy5jcmVhdGUoJzB4MDAxJywgMSk7XG5cbiAgICAgICAgbGV0IGRvY0RldGFpbDogRG9jRGV0YWlsID0ge1xuICAgICAgICAgICAgZmluZ2VycHJpbnQ6ICcweDAwMScsXG4gICAgICAgICAgICB0aXRsZTogJ2hlbGxvIHdvcmxkJ1xuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBhY3R1YWwgPSBEb2NEZXRhaWxzLm1lcmdlKGRvY0luZm8sIGRvY0RldGFpbClcbiAgICAgICAgYXNzZXJ0LmVxdWFsKGRvY0luZm8udGl0bGUsICdoZWxsbyB3b3JsZCcpO1xuXG4gICAgICAgIC8vYXNzZXJ0SlNPTigsIHt9KTtcblxuICAgIH0pO1xuXG59KTtcbiJdfQ==