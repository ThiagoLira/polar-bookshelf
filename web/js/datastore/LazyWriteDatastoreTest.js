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
const LazyWriteDatastore_1 = require("./LazyWriteDatastore");
const MemoryDatastore_1 = require("./MemoryDatastore");
const DocMetas_1 = require("../metadata/DocMetas");
const TestingTime_1 = require("polar-shared/src/test/TestingTime");
const DocMetaRef_1 = require("./DocMetaRef");
describe('LazyWriteDatastore', function () {
    it('Basic', function () {
        return __awaiter(this, void 0, void 0, function* () {
            TestingTime_1.TestingTime.freeze();
            const memoryDatastore = new MemoryDatastore_1.MemoryDatastore();
            const lazyWriteDatastore = new LazyWriteDatastore_1.LazyWriteDatastore(memoryDatastore);
            chai_1.assert.equal(lazyWriteDatastore.nrWrites, 0);
            let docMeta = DocMetas_1.MockDocMetas.createMockDocMeta();
            yield lazyWriteDatastore.writeDocMeta(docMeta);
            chai_1.assert.equal(lazyWriteDatastore.nrWrites, 1);
            yield lazyWriteDatastore.writeDocMeta(docMeta);
            chai_1.assert.equal(lazyWriteDatastore.nrWrites, 1);
            TestingTime_1.TestingTime.forward(1000);
            docMeta = DocMetas_1.MockDocMetas.createMockDocMeta();
            yield lazyWriteDatastore.writeDocMeta(docMeta);
            chai_1.assert.equal(lazyWriteDatastore.nrWrites, 2);
        });
    });
    it('delete', function () {
        return __awaiter(this, void 0, void 0, function* () {
            TestingTime_1.TestingTime.freeze();
            const memoryDatastore = new MemoryDatastore_1.MemoryDatastore();
            const lazyWriteDatastore = new LazyWriteDatastore_1.LazyWriteDatastore(memoryDatastore);
            chai_1.assert.equal(lazyWriteDatastore.nrWrites, 0);
            const docMeta = DocMetas_1.MockDocMetas.createMockDocMeta();
            yield lazyWriteDatastore.writeDocMeta(docMeta);
            chai_1.assert.equal(lazyWriteDatastore.nrWrites, 1);
            yield lazyWriteDatastore.delete(DocMetaRef_1.DocMetaFileRefs.createFromDocMeta(docMeta));
            yield lazyWriteDatastore.writeDocMeta(docMeta);
            chai_1.assert.equal(lazyWriteDatastore.nrWrites, 2);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGF6eVdyaXRlRGF0YXN0b3JlVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkxhenlXcml0ZURhdGFzdG9yZVRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwrQkFBNEI7QUFDNUIsNkRBQXdEO0FBQ3hELHVEQUFrRDtBQUNsRCxtREFBa0Q7QUFDbEQsbUVBQThEO0FBQzlELDZDQUE2QztBQUU3QyxRQUFRLENBQUMsb0JBQW9CLEVBQUU7SUFFM0IsRUFBRSxDQUFDLE9BQU8sRUFBRTs7WUFFUix5QkFBVyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBRXJCLE1BQU0sZUFBZSxHQUFHLElBQUksaUNBQWUsRUFBRSxDQUFDO1lBQzlDLE1BQU0sa0JBQWtCLEdBQUcsSUFBSSx1Q0FBa0IsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUVuRSxhQUFNLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM3QyxJQUFJLE9BQU8sR0FBRyx1QkFBWSxDQUFDLGlCQUFpQixFQUFFLENBQUM7WUFFL0MsTUFBTSxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDL0MsYUFBTSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFFN0MsTUFBTSxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDL0MsYUFBTSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFFN0MseUJBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFMUIsT0FBTyxHQUFHLHVCQUFZLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUUzQyxNQUFNLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMvQyxhQUFNLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUVqRCxDQUFDO0tBQUEsQ0FBQyxDQUFDO0lBR0gsRUFBRSxDQUFDLFFBQVEsRUFBRTs7WUFFVCx5QkFBVyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBRXJCLE1BQU0sZUFBZSxHQUFHLElBQUksaUNBQWUsRUFBRSxDQUFDO1lBQzlDLE1BQU0sa0JBQWtCLEdBQUcsSUFBSSx1Q0FBa0IsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUVuRSxhQUFNLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM3QyxNQUFNLE9BQU8sR0FBRyx1QkFBWSxDQUFDLGlCQUFpQixFQUFFLENBQUM7WUFFakQsTUFBTSxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDL0MsYUFBTSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFFN0MsTUFBTSxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsNEJBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBRTVFLE1BQU0sa0JBQWtCLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQy9DLGFBQU0sQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRWpELENBQUM7S0FBQSxDQUFDLENBQUM7QUFFUCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YXNzZXJ0fSBmcm9tICdjaGFpJztcbmltcG9ydCB7TGF6eVdyaXRlRGF0YXN0b3JlfSBmcm9tICcuL0xhenlXcml0ZURhdGFzdG9yZSc7XG5pbXBvcnQge01lbW9yeURhdGFzdG9yZX0gZnJvbSAnLi9NZW1vcnlEYXRhc3RvcmUnO1xuaW1wb3J0IHtNb2NrRG9jTWV0YXN9IGZyb20gJy4uL21ldGFkYXRhL0RvY01ldGFzJztcbmltcG9ydCB7VGVzdGluZ1RpbWV9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdGVzdC9UZXN0aW5nVGltZSc7XG5pbXBvcnQge0RvY01ldGFGaWxlUmVmc30gZnJvbSAnLi9Eb2NNZXRhUmVmJztcblxuZGVzY3JpYmUoJ0xhenlXcml0ZURhdGFzdG9yZScsIGZ1bmN0aW9uKCkge1xuXG4gICAgaXQoJ0Jhc2ljJywgYXN5bmMgZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgVGVzdGluZ1RpbWUuZnJlZXplKCk7XG5cbiAgICAgICAgY29uc3QgbWVtb3J5RGF0YXN0b3JlID0gbmV3IE1lbW9yeURhdGFzdG9yZSgpO1xuICAgICAgICBjb25zdCBsYXp5V3JpdGVEYXRhc3RvcmUgPSBuZXcgTGF6eVdyaXRlRGF0YXN0b3JlKG1lbW9yeURhdGFzdG9yZSk7XG5cbiAgICAgICAgYXNzZXJ0LmVxdWFsKGxhenlXcml0ZURhdGFzdG9yZS5ucldyaXRlcywgMCk7XG4gICAgICAgIGxldCBkb2NNZXRhID0gTW9ja0RvY01ldGFzLmNyZWF0ZU1vY2tEb2NNZXRhKCk7XG5cbiAgICAgICAgYXdhaXQgbGF6eVdyaXRlRGF0YXN0b3JlLndyaXRlRG9jTWV0YShkb2NNZXRhKTtcbiAgICAgICAgYXNzZXJ0LmVxdWFsKGxhenlXcml0ZURhdGFzdG9yZS5ucldyaXRlcywgMSk7XG5cbiAgICAgICAgYXdhaXQgbGF6eVdyaXRlRGF0YXN0b3JlLndyaXRlRG9jTWV0YShkb2NNZXRhKTtcbiAgICAgICAgYXNzZXJ0LmVxdWFsKGxhenlXcml0ZURhdGFzdG9yZS5ucldyaXRlcywgMSk7XG5cbiAgICAgICAgVGVzdGluZ1RpbWUuZm9yd2FyZCgxMDAwKTtcblxuICAgICAgICBkb2NNZXRhID0gTW9ja0RvY01ldGFzLmNyZWF0ZU1vY2tEb2NNZXRhKCk7XG5cbiAgICAgICAgYXdhaXQgbGF6eVdyaXRlRGF0YXN0b3JlLndyaXRlRG9jTWV0YShkb2NNZXRhKTtcbiAgICAgICAgYXNzZXJ0LmVxdWFsKGxhenlXcml0ZURhdGFzdG9yZS5ucldyaXRlcywgMik7XG5cbiAgICB9KTtcblxuXG4gICAgaXQoJ2RlbGV0ZScsIGFzeW5jIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIFRlc3RpbmdUaW1lLmZyZWV6ZSgpO1xuXG4gICAgICAgIGNvbnN0IG1lbW9yeURhdGFzdG9yZSA9IG5ldyBNZW1vcnlEYXRhc3RvcmUoKTtcbiAgICAgICAgY29uc3QgbGF6eVdyaXRlRGF0YXN0b3JlID0gbmV3IExhenlXcml0ZURhdGFzdG9yZShtZW1vcnlEYXRhc3RvcmUpO1xuXG4gICAgICAgIGFzc2VydC5lcXVhbChsYXp5V3JpdGVEYXRhc3RvcmUubnJXcml0ZXMsIDApO1xuICAgICAgICBjb25zdCBkb2NNZXRhID0gTW9ja0RvY01ldGFzLmNyZWF0ZU1vY2tEb2NNZXRhKCk7XG5cbiAgICAgICAgYXdhaXQgbGF6eVdyaXRlRGF0YXN0b3JlLndyaXRlRG9jTWV0YShkb2NNZXRhKTtcbiAgICAgICAgYXNzZXJ0LmVxdWFsKGxhenlXcml0ZURhdGFzdG9yZS5ucldyaXRlcywgMSk7XG5cbiAgICAgICAgYXdhaXQgbGF6eVdyaXRlRGF0YXN0b3JlLmRlbGV0ZShEb2NNZXRhRmlsZVJlZnMuY3JlYXRlRnJvbURvY01ldGEoZG9jTWV0YSkpO1xuXG4gICAgICAgIGF3YWl0IGxhenlXcml0ZURhdGFzdG9yZS53cml0ZURvY01ldGEoZG9jTWV0YSk7XG4gICAgICAgIGFzc2VydC5lcXVhbChsYXp5V3JpdGVEYXRhc3RvcmUubnJXcml0ZXMsIDIpO1xuXG4gICAgfSk7XG5cbn0pO1xuIl19