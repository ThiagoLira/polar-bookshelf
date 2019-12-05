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
const CacheEntry_1 = require("./CacheEntry");
const Preconditions_1 = require("polar-shared/src/Preconditions");
class PHZCacheEntry extends CacheEntry_1.CacheEntry {
    constructor(opts) {
        super(opts);
        this.phzReader = opts.phzReader;
        this.resourceEntry = opts.resourceEntry;
        Preconditions_1.Preconditions.assertNotNull(this.phzReader, "phzReader");
        Preconditions_1.Preconditions.assertNotNull(this.resourceEntry, "resourceEntry");
        Object.defineProperty(this, 'phzReader', {
            value: this.phzReader,
            enumerable: false
        });
    }
    handleData(callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const buffer = yield this.phzReader.getResource(this.resourceEntry);
            callback(buffer);
            return false;
        });
    }
    toBuffer() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.phzReader.getResource(this.resourceEntry);
        });
    }
    toStream() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.phzReader.getResourceAsStream(this.resourceEntry);
        });
    }
}
exports.PHZCacheEntry = PHZCacheEntry;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUEhaQ2FjaGVFbnRyeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlBIWkNhY2hlRW50cnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFHQSw2Q0FBbUU7QUFFbkUsa0VBQTZEO0FBSTdELE1BQWEsYUFBYyxTQUFRLHVCQUFVO0lBTXpDLFlBQVksSUFBb0I7UUFFNUIsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRVosSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUV4Qyw2QkFBYSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQ3pELDZCQUFhLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsZUFBZSxDQUFDLENBQUM7UUFFakUsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsV0FBVyxFQUFFO1lBQ3JDLEtBQUssRUFBRSxJQUFJLENBQUMsU0FBUztZQUNyQixVQUFVLEVBQUUsS0FBSztTQUNwQixDQUFDLENBQUM7SUFFUCxDQUFDO0lBRVksVUFBVSxDQUFDLFFBQXNCOztZQUUxQyxNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNwRSxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDakIsT0FBTyxLQUFLLENBQUM7UUFFakIsQ0FBQztLQUFBO0lBRVksUUFBUTs7WUFDakIsT0FBTyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNoRSxDQUFDO0tBQUE7SUFFWSxRQUFROztZQUNqQixPQUFPLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDeEUsQ0FBQztLQUFBO0NBRUo7QUF2Q0Qsc0NBdUNDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBBIGNhY2hlIGVudHJ5IGJhY2tlZCBieSBhIHBoeiBmaWxlLlxuICovXG5pbXBvcnQge0NhY2hlRW50cnksIERhdGFDYWxsYmFjaywgSUNhY2hlRW50cnl9IGZyb20gXCIuL0NhY2hlRW50cnlcIjtcbmltcG9ydCB7UEhaUmVhZGVyfSBmcm9tICdwb2xhci1jb250ZW50LWNhcHR1cmUvc3JjL3Boei9QSFpSZWFkZXInO1xuaW1wb3J0IHtQcmVjb25kaXRpb25zfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL1ByZWNvbmRpdGlvbnMnO1xuaW1wb3J0IHtSZXNvdXJjZUVudHJ5fSBmcm9tICdwb2xhci1jb250ZW50LWNhcHR1cmUvc3JjL3Boei9SZXNvdXJjZUVudHJ5JztcbmltcG9ydCB7Q29tcHJlc3NlZFJlYWRlcn0gZnJvbSBcInBvbGFyLWNvbnRlbnQtY2FwdHVyZS9zcmMvcGh6L0NvbXByZXNzZWRSZWFkZXJcIjtcblxuZXhwb3J0IGNsYXNzIFBIWkNhY2hlRW50cnkgZXh0ZW5kcyBDYWNoZUVudHJ5IGltcGxlbWVudHMgSVBIWkNhY2hlRW50cnkge1xuXG4gICAgcHVibGljIHBoelJlYWRlcjogQ29tcHJlc3NlZFJlYWRlcjtcblxuICAgIHB1YmxpYyByZXNvdXJjZUVudHJ5OiBSZXNvdXJjZUVudHJ5O1xuXG4gICAgY29uc3RydWN0b3Iob3B0czogSVBIWkNhY2hlRW50cnkpIHtcblxuICAgICAgICBzdXBlcihvcHRzKTtcblxuICAgICAgICB0aGlzLnBoelJlYWRlciA9IG9wdHMucGh6UmVhZGVyO1xuICAgICAgICB0aGlzLnJlc291cmNlRW50cnkgPSBvcHRzLnJlc291cmNlRW50cnk7XG5cbiAgICAgICAgUHJlY29uZGl0aW9ucy5hc3NlcnROb3ROdWxsKHRoaXMucGh6UmVhZGVyLCBcInBoelJlYWRlclwiKTtcbiAgICAgICAgUHJlY29uZGl0aW9ucy5hc3NlcnROb3ROdWxsKHRoaXMucmVzb3VyY2VFbnRyeSwgXCJyZXNvdXJjZUVudHJ5XCIpO1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAncGh6UmVhZGVyJywge1xuICAgICAgICAgICAgdmFsdWU6IHRoaXMucGh6UmVhZGVyLFxuICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2VcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgaGFuZGxlRGF0YShjYWxsYmFjazogRGF0YUNhbGxiYWNrKTogUHJvbWlzZTxib29sZWFuPiB7XG5cbiAgICAgICAgY29uc3QgYnVmZmVyID0gYXdhaXQgdGhpcy5waHpSZWFkZXIuZ2V0UmVzb3VyY2UodGhpcy5yZXNvdXJjZUVudHJ5KTtcbiAgICAgICAgY2FsbGJhY2soYnVmZmVyKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIHRvQnVmZmVyKCk6IFByb21pc2U8QnVmZmVyPiB7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnBoelJlYWRlci5nZXRSZXNvdXJjZSh0aGlzLnJlc291cmNlRW50cnkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyB0b1N0cmVhbSgpOiBQcm9taXNlPE5vZGVKUy5SZWFkYWJsZVN0cmVhbT4ge1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5waHpSZWFkZXIuZ2V0UmVzb3VyY2VBc1N0cmVhbSh0aGlzLnJlc291cmNlRW50cnkpO1xuICAgIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElQSFpDYWNoZUVudHJ5IGV4dGVuZHMgSUNhY2hlRW50cnkge1xuXG4gICAgcGh6UmVhZGVyOiBDb21wcmVzc2VkUmVhZGVyO1xuXG4gICAgcmVzb3VyY2VFbnRyeTogUmVzb3VyY2VFbnRyeTtcblxufVxuIl19