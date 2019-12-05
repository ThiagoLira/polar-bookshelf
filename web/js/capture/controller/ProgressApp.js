"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const JQuery_1 = __importDefault(require("../../ui/JQuery"));
const ProgressUI_1 = require("./ProgressUI");
class ProgressApp {
    start() {
        JQuery_1.default(document).ready(() => {
            console.log("Starting progress UI");
            const progressUI = new ProgressUI_1.ProgressUI();
            progressUI.init();
        });
    }
}
exports.ProgressApp = ProgressApp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZ3Jlc3NBcHAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJQcm9ncmVzc0FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDZEQUFnQztBQUNoQyw2Q0FBd0M7QUFFeEMsTUFBYSxXQUFXO0lBRWIsS0FBSztRQUVSLGdCQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRTtZQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7WUFDcEMsTUFBTSxVQUFVLEdBQUcsSUFBSSx1QkFBVSxFQUFFLENBQUM7WUFDcEMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQztDQUVKO0FBWkQsa0NBWUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJCBmcm9tICcuLi8uLi91aS9KUXVlcnknO1xuaW1wb3J0IHtQcm9ncmVzc1VJfSBmcm9tICcuL1Byb2dyZXNzVUknO1xuXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NBcHAge1xuXG4gICAgcHVibGljIHN0YXJ0KCkge1xuXG4gICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU3RhcnRpbmcgcHJvZ3Jlc3MgVUlcIik7XG4gICAgICAgICAgICBjb25zdCBwcm9ncmVzc1VJID0gbmV3IFByb2dyZXNzVUkoKTtcbiAgICAgICAgICAgIHByb2dyZXNzVUkuaW5pdCgpO1xuICAgICAgICB9KTtcblxuICAgIH1cblxufVxuXG4iXX0=