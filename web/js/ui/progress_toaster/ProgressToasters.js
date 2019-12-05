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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ReactInjector_1 = require("../util/ReactInjector");
const react_1 = __importDefault(require("react"));
const ProgressToaster_1 = require("./ProgressToaster");
const Latch_1 = require("polar-shared/src/util/Latch");
class ProgressToasters {
    static create() {
        return __awaiter(this, void 0, void 0, function* () {
            const latch = new Latch_1.Latch();
            const injectedComponent = ReactInjector_1.ReactInjector.inject(react_1.default.createElement(ProgressToaster_1.ProgressToaster, { progressUpdaterLatch: latch }));
            const progressUpdater = yield latch.get();
            return {
                update(progressUpdate) {
                    progressUpdater.update(progressUpdate);
                },
                destroy() {
                    injectedComponent.destroy();
                }
            };
        });
    }
}
exports.ProgressToasters = ProgressToasters;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZ3Jlc3NUb2FzdGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlByb2dyZXNzVG9hc3RlcnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEseURBQW9EO0FBRXBELGtEQUEwQjtBQUMxQix1REFBbUY7QUFDbkYsdURBQWtEO0FBRWxELE1BQWEsZ0JBQWdCO0lBRWxCLE1BQU0sQ0FBTyxNQUFNOztZQUl0QixNQUFNLEtBQUssR0FBMkIsSUFBSSxhQUFLLEVBQUUsQ0FBQztZQUVsRCxNQUFNLGlCQUFpQixHQUFHLDZCQUFhLENBQUMsTUFBTSxDQUFDLDhCQUFDLGlDQUFlLElBQUMsb0JBQW9CLEVBQUUsS0FBSyxHQUFHLENBQUMsQ0FBQztZQUVoRyxNQUFNLGVBQWUsR0FBRyxNQUFNLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUUxQyxPQUFPO2dCQUVILE1BQU0sQ0FBQyxjQUE4QjtvQkFDakMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztnQkFDM0MsQ0FBQztnQkFFRCxPQUFPO29CQUNILGlCQUFpQixDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNoQyxDQUFDO2FBRUosQ0FBQztRQUVOLENBQUM7S0FBQTtDQUVKO0FBMUJELDRDQTBCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UmVhY3RJbmplY3Rvcn0gZnJvbSAnLi4vdXRpbC9SZWFjdEluamVjdG9yJztcbmltcG9ydCB7UmVzdGFydEZvclVwZGF0ZUJ1dHRvbn0gZnJvbSAnLi4vLi4vYXV0b191cGRhdGVzL1Jlc3RhcnRGb3JVcGRhdGVCdXR0b24nO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7UHJvZ3Jlc3NUb2FzdGVyLCBQcm9ncmVzc1VwZGF0ZXIsIFByb2dyZXNzVXBkYXRlfSBmcm9tICcuL1Byb2dyZXNzVG9hc3Rlcic7XG5pbXBvcnQge0xhdGNofSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy91dGlsL0xhdGNoXCI7XG5cbmV4cG9ydCBjbGFzcyBQcm9ncmVzc1RvYXN0ZXJzIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgY3JlYXRlKCk6IFByb21pc2U8UHJvZ3Jlc3NIYW5kbGVyPiB7XG5cbiAgICAgICAgLy8gVE9ETzogd2hhdCBoYXBwZW5zIGlmIHRoZXJlIGFyZSBtb3JlIHRoYW4gb25lP1xuXG4gICAgICAgIGNvbnN0IGxhdGNoOiBMYXRjaDxQcm9ncmVzc1VwZGF0ZXI+ID0gbmV3IExhdGNoKCk7XG5cbiAgICAgICAgY29uc3QgaW5qZWN0ZWRDb21wb25lbnQgPSBSZWFjdEluamVjdG9yLmluamVjdCg8UHJvZ3Jlc3NUb2FzdGVyIHByb2dyZXNzVXBkYXRlckxhdGNoPXtsYXRjaH0vPik7XG5cbiAgICAgICAgY29uc3QgcHJvZ3Jlc3NVcGRhdGVyID0gYXdhaXQgbGF0Y2guZ2V0KCk7XG5cbiAgICAgICAgcmV0dXJuIHtcblxuICAgICAgICAgICAgdXBkYXRlKHByb2dyZXNzVXBkYXRlOiBQcm9ncmVzc1VwZGF0ZSkge1xuICAgICAgICAgICAgICAgIHByb2dyZXNzVXBkYXRlci51cGRhdGUocHJvZ3Jlc3NVcGRhdGUpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgZGVzdHJveSgpIHtcbiAgICAgICAgICAgICAgICBpbmplY3RlZENvbXBvbmVudC5kZXN0cm95KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfTtcblxuICAgIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFByb2dyZXNzSGFuZGxlciBleHRlbmRzIFByb2dyZXNzVXBkYXRlciB7XG5cbiAgICBkZXN0cm95KCk6IHZvaWQ7XG5cbn1cbiJdfQ==