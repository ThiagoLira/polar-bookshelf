"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Preconditions_1 = require("polar-shared/src/Preconditions");
const UUIDs_1 = require("../metadata/UUIDs");
class DocMetaComparisonIndex {
    constructor() {
        this.backing = {};
    }
    contains(fingerprint) {
        return Preconditions_1.isPresent(this.backing[fingerprint]);
    }
    get(fingerprint) {
        return this.backing[fingerprint];
    }
    remove(fingerprint) {
        delete this.backing[fingerprint];
    }
    updateUsingDocMeta(docMeta) {
        this.backing[docMeta.docInfo.fingerprint] = {
            fingerprint: docMeta.docInfo.fingerprint,
            uuid: docMeta.docInfo.uuid
        };
    }
    updateUsingDocInfo(docInfo) {
        this.backing[docInfo.fingerprint] = {
            fingerprint: docInfo.fingerprint,
            uuid: docInfo.uuid
        };
    }
    handleDocMetaMutation(docMetaMutation, docInfo) {
        const mutationType = docMetaMutation.mutationType;
        let doUpdated = false;
        const docComparison = this.get(docInfo.fingerprint);
        if (!docComparison) {
            doUpdated = true;
        }
        if (docComparison) {
            if (UUIDs_1.UUIDs.compare(docComparison.uuid, docInfo.uuid) < 0) {
                doUpdated = true;
            }
            else {
            }
        }
        if (doUpdated) {
            this.updateUsingDocInfo(docInfo);
            return true;
        }
        if (mutationType === 'deleted' && this.get(docInfo.fingerprint)) {
            this.remove(docInfo.fingerprint);
            return true;
        }
        return false;
    }
}
exports.DocMetaComparisonIndex = DocMetaComparisonIndex;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jTWV0YUNvbXBhcmlzb25JbmRleC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkRvY01ldGFDb21wYXJpc29uSW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQSxrRUFBeUQ7QUFFekQsNkNBQXdDO0FBU3hDLE1BQWEsc0JBQXNCO0lBQW5DO1FBRXFCLFlBQU8sR0FBcUMsRUFBRSxDQUFDO0lBc0ZwRSxDQUFDO0lBcEZVLFFBQVEsQ0FBQyxXQUFtQjtRQUMvQixPQUFPLHlCQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFTSxHQUFHLENBQUMsV0FBbUI7UUFDMUIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFTSxNQUFNLENBQUMsV0FBbUI7UUFDN0IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFTSxrQkFBa0IsQ0FBQyxPQUFpQjtRQUV2QyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEdBQUc7WUFDeEMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsV0FBVztZQUN4QyxJQUFJLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJO1NBQzdCLENBQUM7SUFFTixDQUFDO0lBRU0sa0JBQWtCLENBQUMsT0FBaUI7UUFFdkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEdBQUc7WUFDaEMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxXQUFXO1lBQ2hDLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSTtTQUNyQixDQUFDO0lBRU4sQ0FBQztJQVdNLHFCQUFxQixDQUFDLGVBQWdDLEVBQUUsT0FBaUI7UUFFNUUsTUFBTSxZQUFZLEdBQUcsZUFBZSxDQUFDLFlBQVksQ0FBQztRQUVsRCxJQUFJLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFFdEIsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFcEQsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNoQixTQUFTLEdBQUcsSUFBSSxDQUFDO1NBQ3BCO1FBRUQsSUFBSSxhQUFhLEVBQUU7WUFFZixJQUFJLGFBQUssQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNyRCxTQUFTLEdBQUcsSUFBSSxDQUFDO2FBQ3BCO2lCQUFNO2FBRU47U0FFSjtRQUVELElBQUksU0FBUyxFQUFFO1lBRVgsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2pDLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFFRCxJQUFJLFlBQVksS0FBSyxTQUFTLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFRN0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDakMsT0FBTyxJQUFJLENBQUM7U0FFZjtRQUVELE9BQU8sS0FBSyxDQUFDO0lBRWpCLENBQUM7Q0FFSjtBQXhGRCx3REF3RkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RvY01ldGF9IGZyb20gJy4uL21ldGFkYXRhL0RvY01ldGEnO1xuaW1wb3J0IHtJRG9jSW5mb30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9tZXRhZGF0YS9JRG9jSW5mbyc7XG5pbXBvcnQge0RvY1VVSUR9IGZyb20gJy4vQ2xvdWRBd2FyZURhdGFzdG9yZSc7XG5pbXBvcnQge2lzUHJlc2VudH0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9QcmVjb25kaXRpb25zJztcbmltcG9ydCB7RG9jTWV0YU11dGF0aW9ufSBmcm9tICcuL0RhdGFzdG9yZSc7XG5pbXBvcnQge1VVSURzfSBmcm9tICcuLi9tZXRhZGF0YS9VVUlEcyc7XG5pbXBvcnQge0lEb2NNZXRhfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy9tZXRhZGF0YS9JRG9jTWV0YVwiO1xuXG5cbi8qKlxuICogVGhlIERvY0NvbXBhcmlzb25JbmRleCBhbGxvd3MgdXMgdG8gZGV0ZWN0IHdoaWNoIGRvY3VtZW50cyBhcmUgbG9jYWwgYWxyZWFkeVxuICogc28gdGhhdCB3aGVuIHdlIHJlY2VpdmUgZG9jdW1lbnQgZnJvbSB0aGUgY2xvdWQgZGF0YXN0b3JlIHdlIGNhbiBkZWNpZGVcbiAqIHRoYXQgd2UgZG8gbm90IG5lZWQgdG8gcmVwbGljYXRlIGl0IGxvY2FsbHkuXG4gKi9cbmV4cG9ydCBjbGFzcyBEb2NNZXRhQ29tcGFyaXNvbkluZGV4IHtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgYmFja2luZzoge1tmaW5nZXJwcmludDogc3RyaW5nXTogRG9jVVVJRH0gPSB7fTtcblxuICAgIHB1YmxpYyBjb250YWlucyhmaW5nZXJwcmludDogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBpc1ByZXNlbnQodGhpcy5iYWNraW5nW2ZpbmdlcnByaW50XSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldChmaW5nZXJwcmludDogc3RyaW5nKTogRG9jVVVJRCB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLmJhY2tpbmdbZmluZ2VycHJpbnRdO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW1vdmUoZmluZ2VycHJpbnQ6IHN0cmluZykge1xuICAgICAgICBkZWxldGUgdGhpcy5iYWNraW5nW2ZpbmdlcnByaW50XTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlVXNpbmdEb2NNZXRhKGRvY01ldGE6IElEb2NNZXRhKSB7XG5cbiAgICAgICAgdGhpcy5iYWNraW5nW2RvY01ldGEuZG9jSW5mby5maW5nZXJwcmludF0gPSB7XG4gICAgICAgICAgICBmaW5nZXJwcmludDogZG9jTWV0YS5kb2NJbmZvLmZpbmdlcnByaW50LFxuICAgICAgICAgICAgdXVpZDogZG9jTWV0YS5kb2NJbmZvLnV1aWRcbiAgICAgICAgfTtcblxuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGVVc2luZ0RvY0luZm8oZG9jSW5mbzogSURvY0luZm8pIHtcblxuICAgICAgICB0aGlzLmJhY2tpbmdbZG9jSW5mby5maW5nZXJwcmludF0gPSB7XG4gICAgICAgICAgICBmaW5nZXJwcmludDogZG9jSW5mby5maW5nZXJwcmludCxcbiAgICAgICAgICAgIHV1aWQ6IGRvY0luZm8udXVpZFxuICAgICAgICB9O1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIGEgZ2l2ZW4gbXV0YXRpb24gYW5kIHJldHVybiB0cnVlIGlmIHRoZSBtdXRhdGlvbiB3YXMgYWNjZXB0ZWQuXG4gICAgICpcbiAgICAgKiBBIG11dGF0aW9uIGlzIGFjY2VwdGVkIGlmIGl0IGlzIHJlY2VudCBhbmQgbXV0YXRlcyB0aGUgZGF0YSBpbiB0aGVcbiAgICAgKiBkYXRhYmFzZSB3aGljaCBpcyBhbHJlYWR5IHByZXNlbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZG9jTWV0YU11dGF0aW9uXG4gICAgICogQHBhcmFtIGRvY0luZm9cbiAgICAgKi9cbiAgICBwdWJsaWMgaGFuZGxlRG9jTWV0YU11dGF0aW9uKGRvY01ldGFNdXRhdGlvbjogRG9jTWV0YU11dGF0aW9uLCBkb2NJbmZvOiBJRG9jSW5mbyk6IGJvb2xlYW4ge1xuXG4gICAgICAgIGNvbnN0IG11dGF0aW9uVHlwZSA9IGRvY01ldGFNdXRhdGlvbi5tdXRhdGlvblR5cGU7XG5cbiAgICAgICAgbGV0IGRvVXBkYXRlZCA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IGRvY0NvbXBhcmlzb24gPSB0aGlzLmdldChkb2NJbmZvLmZpbmdlcnByaW50KTtcblxuICAgICAgICBpZiAoIWRvY0NvbXBhcmlzb24pIHtcbiAgICAgICAgICAgIGRvVXBkYXRlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZG9jQ29tcGFyaXNvbikge1xuXG4gICAgICAgICAgICBpZiAoVVVJRHMuY29tcGFyZShkb2NDb21wYXJpc29uLnV1aWQsIGRvY0luZm8udXVpZCkgPCAwKSB7XG4gICAgICAgICAgICAgICAgZG9VcGRhdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gbm9vcFxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZG9VcGRhdGVkKSB7XG4gICAgICAgICAgICAvLyB3aGVuIHRoZSBkb2MgaXMgY3JlYXRlZCBhbmQgaXQncyBub3QgaW4gdGhlIGluZGV4LlxuICAgICAgICAgICAgdGhpcy51cGRhdGVVc2luZ0RvY0luZm8oZG9jSW5mbyk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtdXRhdGlvblR5cGUgPT09ICdkZWxldGVkJyAmJiB0aGlzLmdldChkb2NJbmZvLmZpbmdlcnByaW50KSkge1xuXG4gICAgICAgICAgICAvLyBUT0RPOiBhIGRlbGV0ZSBtaWdodCBuZWVkIHRvIGhhdmUgYSBVVUlEIHRvbyBzbyB0aGF0IHdlIGRvIG5vdFxuICAgICAgICAgICAgLy8gZ2V0IG91dCBvZiBvcmRlciBERUxFVEVzLiAgRm9yIHRoaXMgdG8gd29yayB3ZSBwcm9iYWJseSBuZWVkXG4gICAgICAgICAgICAvLyB0aGUgY29uY2VwdCBvZiB0b21ic3RvbmVzLlxuXG4gICAgICAgICAgICAvLyBpZiB3ZSdyZSBkZWxldGluZyB0aGUgZG9jdW1lbnQgYW5kIHdlJ3ZlIHNlZW4gaXQgYmVmb3JlXG4gICAgICAgICAgICAvLyBhbmQgaXQncyBpbiB0aGUgaW5kZXguXG4gICAgICAgICAgICB0aGlzLnJlbW92ZShkb2NJbmZvLmZpbmdlcnByaW50KTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICB9XG5cbn1cbiJdfQ==