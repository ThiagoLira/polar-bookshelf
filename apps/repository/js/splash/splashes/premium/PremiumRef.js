"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const ConditionalPrioritizedComponentRef_1 = require("../ConditionalPrioritizedComponentRef");
const Premium_1 = require("./Premium");
class PremiumRef extends ConditionalPrioritizedComponentRef_1.ConditionalPrioritizedComponentRef {
    constructor() {
        super('premium', 40, 'premium');
        this.id = 'premium';
    }
    create() {
        return React.createElement(Premium_1.Premium, { settingKey: this.settingKey });
    }
}
exports.PremiumRef = PremiumRef;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJlbWl1bVJlZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlByZW1pdW1SZWYudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUMvQiw4RkFBeUY7QUFDekYsdUNBQWtDO0FBRWxDLE1BQWEsVUFBVyxTQUFRLHVFQUFrQztJQUk5RDtRQUNJLEtBQUssQ0FBQyxTQUFTLEVBQUUsRUFBRSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBSHBCLE9BQUUsR0FBRyxTQUFTLENBQUM7SUFJL0IsQ0FBQztJQUVNLE1BQU07UUFDVCxPQUFPLG9CQUFDLGlCQUFPLElBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQztJQUNuRCxDQUFDO0NBRUo7QUFaRCxnQ0FZQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Q29uZGl0aW9uYWxQcmlvcml0aXplZENvbXBvbmVudFJlZn0gZnJvbSAnLi4vQ29uZGl0aW9uYWxQcmlvcml0aXplZENvbXBvbmVudFJlZic7XG5pbXBvcnQge1ByZW1pdW19IGZyb20gJy4vUHJlbWl1bSc7XG5cbmV4cG9ydCBjbGFzcyBQcmVtaXVtUmVmIGV4dGVuZHMgQ29uZGl0aW9uYWxQcmlvcml0aXplZENvbXBvbmVudFJlZiB7XG5cbiAgICBwdWJsaWMgcmVhZG9ubHkgaWQgPSAncHJlbWl1bSc7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoJ3ByZW1pdW0nLCA0MCwgJ3ByZW1pdW0nKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY3JlYXRlKCk6IEpTWC5FbGVtZW50IHtcbiAgICAgICAgcmV0dXJuIDxQcmVtaXVtIHNldHRpbmdLZXk9e3RoaXMuc2V0dGluZ0tleX0vPjtcbiAgICB9XG5cbn1cbiJdfQ==