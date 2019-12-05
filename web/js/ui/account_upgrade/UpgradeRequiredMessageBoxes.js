"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const ReactInjector_1 = require("../util/ReactInjector");
const UpgradeRequiredMessageBox_1 = require("./UpgradeRequiredMessageBox");
const React = __importStar(require("react"));
class UpgradeRequiredMessageBoxes {
    static create() {
        let injected;
        const cleanup = () => {
            injected.destroy();
        };
        const dispose = () => {
            cleanup();
        };
        injected = ReactInjector_1.ReactInjector.inject(React.createElement(UpgradeRequiredMessageBox_1.UpgradeRequiredMessageBox, { dispose: dispose }));
    }
}
exports.UpgradeRequiredMessageBoxes = UpgradeRequiredMessageBoxes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXBncmFkZVJlcXVpcmVkTWVzc2FnZUJveGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVXBncmFkZVJlcXVpcmVkTWVzc2FnZUJveGVzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx5REFBdUU7QUFDdkUsMkVBQXNFO0FBQ3RFLDZDQUErQjtBQUUvQixNQUFhLDJCQUEyQjtJQUU3QixNQUFNLENBQUMsTUFBTTtRQUVoQixJQUFJLFFBQXVDLENBQUM7UUFFNUMsTUFBTSxPQUFPLEdBQUcsR0FBRyxFQUFFO1lBQ2pCLFFBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN4QixDQUFDLENBQUM7UUFFRixNQUFNLE9BQU8sR0FBRyxHQUFHLEVBQUU7WUFDakIsT0FBTyxFQUFFLENBQUM7UUFDZCxDQUFDLENBQUM7UUFFRixRQUFRLEdBQUcsNkJBQWEsQ0FBQyxNQUFNLENBQUMsb0JBQUMscURBQXlCLElBQUMsT0FBTyxFQUFFLE9BQU8sR0FBRyxDQUFDLENBQUM7SUFFcEYsQ0FBQztDQUVKO0FBbEJELGtFQWtCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0ZWRDb21wb25lbnQsIFJlYWN0SW5qZWN0b3J9IGZyb20gXCIuLi91dGlsL1JlYWN0SW5qZWN0b3JcIjtcbmltcG9ydCB7VXBncmFkZVJlcXVpcmVkTWVzc2FnZUJveH0gZnJvbSBcIi4vVXBncmFkZVJlcXVpcmVkTWVzc2FnZUJveFwiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBjbGFzcyBVcGdyYWRlUmVxdWlyZWRNZXNzYWdlQm94ZXMge1xuXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGUoKSB7XG5cbiAgICAgICAgbGV0IGluamVjdGVkOiBJbmplY3RlZENvbXBvbmVudCB8IHVuZGVmaW5lZDtcblxuICAgICAgICBjb25zdCBjbGVhbnVwID0gKCkgPT4ge1xuICAgICAgICAgICAgaW5qZWN0ZWQhLmRlc3Ryb3koKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBkaXNwb3NlID0gKCkgPT4ge1xuICAgICAgICAgICAgY2xlYW51cCgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGluamVjdGVkID0gUmVhY3RJbmplY3Rvci5pbmplY3QoPFVwZ3JhZGVSZXF1aXJlZE1lc3NhZ2VCb3ggZGlzcG9zZT17ZGlzcG9zZX0vPik7XG5cbiAgICB9XG5cbn1cbiJdfQ==