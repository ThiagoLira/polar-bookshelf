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
class DocMetaSuppliers {
    static literal(docMeta) {
        return () => __awaiter(this, void 0, void 0, function* () { return docMeta; });
    }
}
exports.DocMetaSuppliers = DocMetaSuppliers;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jTWV0YVN1cHBsaWVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkRvY01ldGFTdXBwbGllcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFJQSxNQUFhLGdCQUFnQjtJQUVsQixNQUFNLENBQUMsT0FBTyxDQUFDLE9BQWlCO1FBQ25DLE9BQU8sR0FBUyxFQUFFLGdEQUFDLE9BQUEsT0FBTyxDQUFBLEdBQUEsQ0FBQztJQUMvQixDQUFDO0NBRUo7QUFORCw0Q0FNQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RG9jTWV0YVN1cHBsaWVyfSBmcm9tICcuL0RvY01ldGFTdXBwbGllcic7XG5pbXBvcnQge0RvY01ldGF9IGZyb20gJy4vRG9jTWV0YSc7XG5pbXBvcnQge0lEb2NNZXRhfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy9tZXRhZGF0YS9JRG9jTWV0YVwiO1xuXG5leHBvcnQgY2xhc3MgRG9jTWV0YVN1cHBsaWVycyB7XG5cbiAgICBwdWJsaWMgc3RhdGljIGxpdGVyYWwoZG9jTWV0YTogSURvY01ldGEpOiBEb2NNZXRhU3VwcGxpZXIge1xuICAgICAgICByZXR1cm4gYXN5bmMgKCkgPT4gZG9jTWV0YTtcbiAgICB9XG5cbn1cbiJdfQ==