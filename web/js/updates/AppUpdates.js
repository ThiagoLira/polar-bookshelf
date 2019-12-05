"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Platforms_1 = require("polar-shared/src/util/Platforms");
const DistConfig_1 = require("../dist_config/DistConfig");
class AppUpdates {
    static platformSupportsUpdates() {
        return [Platforms_1.Platform.MACOS, Platforms_1.Platform.WINDOWS].includes(Platforms_1.Platforms.get()) && DistConfig_1.DistConfig.ENABLE_UPDATES;
    }
}
exports.AppUpdates = AppUpdates;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwVXBkYXRlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkFwcFVwZGF0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrREFBb0U7QUFDcEUsMERBQXFEO0FBRXJELE1BQWEsVUFBVTtJQUVaLE1BQU0sQ0FBQyx1QkFBdUI7UUFFakMsT0FBTyxDQUFDLG9CQUFRLENBQUMsS0FBSyxFQUFFLG9CQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLHFCQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSx1QkFBVSxDQUFDLGNBQWMsQ0FBQztJQUVyRyxDQUFDO0NBRUo7QUFSRCxnQ0FRQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGxhdGZvcm0sIFBsYXRmb3Jtc30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy91dGlsL1BsYXRmb3Jtcyc7XG5pbXBvcnQge0Rpc3RDb25maWd9IGZyb20gJy4uL2Rpc3RfY29uZmlnL0Rpc3RDb25maWcnO1xuXG5leHBvcnQgY2xhc3MgQXBwVXBkYXRlcyB7XG5cbiAgICBwdWJsaWMgc3RhdGljIHBsYXRmb3JtU3VwcG9ydHNVcGRhdGVzKCkge1xuXG4gICAgICAgIHJldHVybiBbUGxhdGZvcm0uTUFDT1MsIFBsYXRmb3JtLldJTkRPV1NdLmluY2x1ZGVzKFBsYXRmb3Jtcy5nZXQoKSkgJiYgRGlzdENvbmZpZy5FTkFCTEVfVVBEQVRFUztcblxuICAgIH1cblxufVxuIl19