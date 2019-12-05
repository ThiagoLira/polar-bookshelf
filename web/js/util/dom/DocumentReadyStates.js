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
class DocumentReadyStates {
    static waitFor(doc, requiredReadyState) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.waitForChanger(doc, requiredReadyState, new DocumentReadyStateChanger(doc));
        });
    }
    static waitForChanger(doc, requiredReadyState, readyStateChanger) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                readyStateChanger.awaitState(requiredReadyState)
                    .then(() => {
                    resolve(ReadyStateResolution.EVENT);
                })
                    .catch(err => reject(err));
                if (this.meetsRequiredState(requiredReadyState, readyStateChanger.readyState)) {
                    resolve(ReadyStateResolution.DIRECT);
                }
            });
        });
    }
    static meetsRequiredState(requiredReadyState, currentReadyState) {
        const requiredReadyStateCode = this.toReadyStateCode(requiredReadyState);
        const currentReadyStateCode = this.toReadyStateCode(currentReadyState);
        return currentReadyStateCode >= requiredReadyStateCode;
    }
    static toReadyStateCode(readyState) {
        switch (readyState) {
            case 'loading':
                return 1;
            case 'interactive':
                return 2;
            case 'complete':
                return 3;
        }
    }
}
exports.DocumentReadyStates = DocumentReadyStates;
var ReadyStateResolution;
(function (ReadyStateResolution) {
    ReadyStateResolution["DIRECT"] = "direct";
    ReadyStateResolution["EVENT"] = "event";
})(ReadyStateResolution = exports.ReadyStateResolution || (exports.ReadyStateResolution = {}));
class DocumentReadyStateChanger {
    constructor(doc) {
        this.doc = doc;
        this.readyState = doc.readyState;
    }
    awaitState(requiredReadyState) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(resolve => {
                let listener = () => {
                    if (DocumentReadyStates.meetsRequiredState(requiredReadyState, this.doc.readyState)) {
                        resolve();
                        this.doc.removeEventListener('readystatechange', listener);
                    }
                };
                this.doc.addEventListener('readystatechange', listener);
            });
        });
    }
}
exports.DocumentReadyStateChanger = DocumentReadyStateChanger;
class MockReadyStateChanger {
    constructor(readyState) {
        this.resolve = () => { };
        this.readyState = readyState;
    }
    awaitState(requiredReadyState) {
        return new Promise(resolve => {
            this.resolve = resolve;
        });
    }
}
exports.MockReadyStateChanger = MockReadyStateChanger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jdW1lbnRSZWFkeVN0YXRlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkRvY3VtZW50UmVhZHlTdGF0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQSxNQUFhLG1CQUFtQjtJQUVyQixNQUFNLENBQU8sT0FBTyxDQUFDLEdBQWEsRUFDYixrQkFBc0M7O1lBRTlELE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLEVBQUUsa0JBQWtCLEVBQUUsSUFBSSx5QkFBeUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRTVGLENBQUM7S0FBQTtJQWFNLE1BQU0sQ0FBTyxjQUFjLENBQUMsR0FBYSxFQUNiLGtCQUFzQyxFQUN0QyxpQkFBb0M7O1lBR25FLE9BQU8sSUFBSSxPQUFPLENBQXVCLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO2dCQUt6RCxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUM7cUJBQzNDLElBQUksQ0FBQyxHQUFHLEVBQUU7b0JBQ1AsT0FBTyxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN4QyxDQUFDLENBQUM7cUJBQ0QsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBRS9CLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLGtCQUFrQixFQUFFLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxFQUFFO29CQUMzRSxPQUFPLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQ3hDO1lBRUwsQ0FBQyxDQUFDLENBQUM7UUFFUCxDQUFDO0tBQUE7SUFFTSxNQUFNLENBQUMsa0JBQWtCLENBQUMsa0JBQXNDLEVBQUUsaUJBQXFDO1FBRTFHLE1BQU0sc0JBQXNCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDekUsTUFBTSxxQkFBcUIsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUV2RSxPQUFPLHFCQUFxQixJQUFJLHNCQUFzQixDQUFDO0lBRTNELENBQUM7SUFFTSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsVUFBOEI7UUFFekQsUUFBUSxVQUFVLEVBQUU7WUFFaEIsS0FBSyxTQUFTO2dCQUNWLE9BQU8sQ0FBQyxDQUFDO1lBRWIsS0FBSyxhQUFhO2dCQUNkLE9BQU8sQ0FBQyxDQUFDO1lBRWIsS0FBSyxVQUFVO2dCQUNYLE9BQU8sQ0FBQyxDQUFDO1NBRWhCO0lBRUwsQ0FBQztDQUVKO0FBdEVELGtEQXNFQztBQUtELElBQVksb0JBR1g7QUFIRCxXQUFZLG9CQUFvQjtJQUM1Qix5Q0FBaUIsQ0FBQTtJQUNqQix1Q0FBZSxDQUFBO0FBQ25CLENBQUMsRUFIVyxvQkFBb0IsR0FBcEIsNEJBQW9CLEtBQXBCLDRCQUFvQixRQUcvQjtBQWVELE1BQWEseUJBQXlCO0lBTWxDLFlBQVksR0FBYTtRQUNyQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNmLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQTtJQUNwQyxDQUFDO0lBRUssVUFBVSxDQUFDLGtCQUFzQzs7WUFLbkQsT0FBTyxJQUFJLE9BQU8sQ0FBTyxPQUFPLENBQUMsRUFBRTtnQkFFL0IsSUFBSSxRQUFRLEdBQWUsR0FBRyxFQUFFO29CQUU1QixJQUFJLG1CQUFtQixDQUFDLGtCQUFrQixDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEVBQUU7d0JBQ2pGLE9BQU8sRUFBRSxDQUFDO3dCQUNWLElBQUksQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsa0JBQWtCLEVBQUUsUUFBUSxDQUFDLENBQUM7cUJBQzlEO2dCQUVMLENBQUMsQ0FBQztnQkFFRixJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBRTVELENBQUMsQ0FBQyxDQUFBO1FBR04sQ0FBQztLQUFBO0NBRUo7QUFsQ0QsOERBa0NDO0FBRUQsTUFBYSxxQkFBcUI7SUFNOUIsWUFBWSxVQUE4QjtRQUYxQyxZQUFPLEdBQWUsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDO1FBRzNCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0lBQ2pDLENBQUM7SUFFRCxVQUFVLENBQUMsa0JBQXNDO1FBRTdDLE9BQU8sSUFBSSxPQUFPLENBQU8sT0FBTyxDQUFDLEVBQUU7WUFDL0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUE7SUFFTixDQUFDO0NBQ0o7QUFqQkQsc0RBaUJDIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRSZWFkeVN0YXRlcyB7XG5cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIHdhaXRGb3IoZG9jOiBEb2N1bWVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRSZWFkeVN0YXRlOiBEb2N1bWVudFJlYWR5U3RhdGUpOiBQcm9taXNlPFJlYWR5U3RhdGVSZXNvbHV0aW9uPiB7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMud2FpdEZvckNoYW5nZXIoZG9jLCByZXF1aXJlZFJlYWR5U3RhdGUsIG5ldyBEb2N1bWVudFJlYWR5U3RhdGVDaGFuZ2VyKGRvYykpO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV2FpdCBmb3IgdGhlIGRvY3VtZW50IHRvIGhpdCB0aGUgZ2l2ZW4gcmVhZHkgc3RhdGUuXG4gICAgICpcbiAgICAgKiBUaGUgcmVhZHkgc3RhdGVzIGdvIGZyb206XG4gICAgICpcbiAgICAgKiBcImxvYWRpbmdcIiAtPiBcImludGVyYWN0aXZlXCIgLT4gXCJjb21wbGV0ZVwiXG4gICAgICpcbiAgICAgKiBXZSdyZSBhbHNvIGFsbG93cyB0byB3YWl0IGZvciBhIG1pbmltdW0gc3RhdGUuICBTbyBpZiB3ZSB3YWl0IGZvciBpbnRlcmFjdGl2ZVxuICAgICAqIGJ1dCB3ZSdyZSBhbHJlYWR5IGNvbXBsZXRlIGl0IHdpbGwgcmV0dXJuIGltbWVkaWF0ZWx5LlxuICAgICAqXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyB3YWl0Rm9yQ2hhbmdlcihkb2M6IERvY3VtZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRSZWFkeVN0YXRlOiBEb2N1bWVudFJlYWR5U3RhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkeVN0YXRlQ2hhbmdlcjogUmVhZHlTdGF0ZUNoYW5nZXIpOiBQcm9taXNlPFJlYWR5U3RhdGVSZXNvbHV0aW9uPiB7XG5cblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8UmVhZHlTdGF0ZVJlc29sdXRpb24+KChyZXNvbHZlLCByZWplY3QpID0+IHtcblxuICAgICAgICAgICAgLy8gYWx3YXlzIHBlcmZvcm0gdHdvIGNoZWNrcy4gIEZpcnN0IHVzaW5nIHRoZSBhd2FpdFN0YXRlIGFuZCB0aGVuXG4gICAgICAgICAgICAvLyB1c2luZyB0aGUgY3VycmVudCBzdGF0ZS4gUHJvbWlzZXMgY2FuIG9ubHkgYmUgcmVzb2x2ZWQgb25jZSBzbyBldmVuXG4gICAgICAgICAgICAvLyBpZiB3ZSBjYWxsIHJlc29sdmUoKSB0d2ljZSBpdCB3b24ndCBiZSBhbiBpc3N1ZS5cbiAgICAgICAgICAgIHJlYWR5U3RhdGVDaGFuZ2VyLmF3YWl0U3RhdGUocmVxdWlyZWRSZWFkeVN0YXRlKVxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShSZWFkeVN0YXRlUmVzb2x1dGlvbi5FVkVOVCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHJlamVjdChlcnIpKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMubWVldHNSZXF1aXJlZFN0YXRlKHJlcXVpcmVkUmVhZHlTdGF0ZSwgcmVhZHlTdGF0ZUNoYW5nZXIucmVhZHlTdGF0ZSkpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKFJlYWR5U3RhdGVSZXNvbHV0aW9uLkRJUkVDVCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIG1lZXRzUmVxdWlyZWRTdGF0ZShyZXF1aXJlZFJlYWR5U3RhdGU6IERvY3VtZW50UmVhZHlTdGF0ZSwgY3VycmVudFJlYWR5U3RhdGU6IERvY3VtZW50UmVhZHlTdGF0ZSkge1xuXG4gICAgICAgIGNvbnN0IHJlcXVpcmVkUmVhZHlTdGF0ZUNvZGUgPSB0aGlzLnRvUmVhZHlTdGF0ZUNvZGUocmVxdWlyZWRSZWFkeVN0YXRlKTtcbiAgICAgICAgY29uc3QgY3VycmVudFJlYWR5U3RhdGVDb2RlID0gdGhpcy50b1JlYWR5U3RhdGVDb2RlKGN1cnJlbnRSZWFkeVN0YXRlKTtcblxuICAgICAgICByZXR1cm4gY3VycmVudFJlYWR5U3RhdGVDb2RlID49IHJlcXVpcmVkUmVhZHlTdGF0ZUNvZGU7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHRvUmVhZHlTdGF0ZUNvZGUocmVhZHlTdGF0ZTogRG9jdW1lbnRSZWFkeVN0YXRlKTogUmVhZHlTdGF0ZUNvZGUge1xuXG4gICAgICAgIHN3aXRjaCAocmVhZHlTdGF0ZSkge1xuXG4gICAgICAgICAgICBjYXNlICdsb2FkaW5nJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcblxuICAgICAgICAgICAgY2FzZSAnaW50ZXJhY3RpdmUnOlxuICAgICAgICAgICAgICAgIHJldHVybiAyO1xuXG4gICAgICAgICAgICBjYXNlICdjb21wbGV0ZSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIDM7XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG59XG5cbi8qKlxuICogVGhlIG1lY2hhbmlzbSB3ZSB1c2VkIHRvIHJlc29sdmUgdGhlIHJlYWR5IHN0YXRlLlxuICovXG5leHBvcnQgZW51bSBSZWFkeVN0YXRlUmVzb2x1dGlvbiB7XG4gICAgRElSRUNUID0gJ2RpcmVjdCcsXG4gICAgRVZFTlQgPSAnZXZlbnQnXG59XG5cbnR5cGUgUmVhZHlTdGF0ZUNvZGUgPSAxIHwgMiB8IDMgO1xuXG4vKipcbiAqIEludGVyZmFjZSB3aGljaCBhbGxvd3MgdXMgdG8gdGVzdCB0aGUgdHJhbnNpdGlvbnMgYmV0d2VlbiBzdGF0ZXMuXG4gKi9cbmludGVyZmFjZSBSZWFkeVN0YXRlQ2hhbmdlciB7XG5cbiAgICByZWFkb25seSByZWFkeVN0YXRlOiBEb2N1bWVudFJlYWR5U3RhdGU7XG5cbiAgICBhd2FpdFN0YXRlKHJlcXVpcmVkUmVhZHlTdGF0ZTogRG9jdW1lbnRSZWFkeVN0YXRlKTogUHJvbWlzZTx2b2lkPlxuXG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFJlYWR5U3RhdGVDaGFuZ2VyIGltcGxlbWVudHMgUmVhZHlTdGF0ZUNoYW5nZXIge1xuXG4gICAgcmVhZG9ubHkgcmVhZHlTdGF0ZTogRG9jdW1lbnRSZWFkeVN0YXRlO1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBkb2M6IERvY3VtZW50O1xuXG4gICAgY29uc3RydWN0b3IoZG9jOiBEb2N1bWVudCkge1xuICAgICAgICB0aGlzLmRvYyA9IGRvYztcbiAgICAgICAgdGhpcy5yZWFkeVN0YXRlID0gZG9jLnJlYWR5U3RhdGVcbiAgICB9XG5cbiAgICBhc3luYyBhd2FpdFN0YXRlKHJlcXVpcmVkUmVhZHlTdGF0ZTogRG9jdW1lbnRSZWFkeVN0YXRlKTogUHJvbWlzZTx2b2lkPiB7XG5cbiAgICAgICAgLy8gVE9ETzogaW1wbGVtZW50aW5nIHRoaXMgYXMgYW4gb2JzZXJ2YWJsZSB3b3VsZCBkZWZpbml0ZWx5IGJlIGJldHRlci5cbiAgICAgICAgLy8gdGhlIGludGVyZmFjZSBmb3IgdGhlIG1vY2sgYW5kIHRoZSBkb2N1bWVudCB3b3VsZCBiZSB0aGUgc2FtZSBJXG4gICAgICAgIC8vIHRoaW5rIGFuZCB3b3VsZCBtYWtlIHRlc3Rpbmcgc2ltcGxlci5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KHJlc29sdmUgPT4ge1xuXG4gICAgICAgICAgICBsZXQgbGlzdGVuZXI6ICgpID0+IHZvaWQgPSAoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBpZiAoRG9jdW1lbnRSZWFkeVN0YXRlcy5tZWV0c1JlcXVpcmVkU3RhdGUocmVxdWlyZWRSZWFkeVN0YXRlLCB0aGlzLmRvYy5yZWFkeVN0YXRlKSkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3JlYWR5c3RhdGVjaGFuZ2UnLCBsaXN0ZW5lcik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB0aGlzLmRvYy5hZGRFdmVudExpc3RlbmVyKCdyZWFkeXN0YXRlY2hhbmdlJywgbGlzdGVuZXIpO1xuXG4gICAgICAgIH0pXG5cblxuICAgIH1cblxufVxuXG5leHBvcnQgY2xhc3MgTW9ja1JlYWR5U3RhdGVDaGFuZ2VyIGltcGxlbWVudHMgUmVhZHlTdGF0ZUNoYW5nZXIge1xuXG4gICAgcmVhZG9ubHkgcmVhZHlTdGF0ZTogRG9jdW1lbnRSZWFkeVN0YXRlO1xuXG4gICAgcmVzb2x2ZTogKCkgPT4gdm9pZCA9ICgpID0+IHt9O1xuXG4gICAgY29uc3RydWN0b3IocmVhZHlTdGF0ZTogRG9jdW1lbnRSZWFkeVN0YXRlKSB7XG4gICAgICAgIHRoaXMucmVhZHlTdGF0ZSA9IHJlYWR5U3RhdGU7XG4gICAgfVxuXG4gICAgYXdhaXRTdGF0ZShyZXF1aXJlZFJlYWR5U3RhdGU6IERvY3VtZW50UmVhZHlTdGF0ZSk6IFByb21pc2U8dm9pZD4ge1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPihyZXNvbHZlID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICAgIH0pXG5cbiAgICB9XG59XG4iXX0=