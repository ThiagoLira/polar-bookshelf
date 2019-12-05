"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ReactInjector_1 = require("../ui/util/ReactInjector");
const RestartForUpdateButton_1 = require("./RestartForUpdateButton");
const react_1 = __importDefault(require("react"));
class RestartForUpdateButtons {
    static create() {
        ReactInjector_1.ReactInjector.inject(react_1.default.createElement(RestartForUpdateButton_1.RestartForUpdateButton, null), 'restart-for-update');
    }
}
exports.RestartForUpdateButtons = RestartForUpdateButtons;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVzdGFydEZvclVwZGF0ZUJ1dHRvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJSZXN0YXJ0Rm9yVXBkYXRlQnV0dG9ucy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw0REFBdUQ7QUFDdkQscUVBQWdFO0FBQ2hFLGtEQUEwQjtBQUUxQixNQUFhLHVCQUF1QjtJQUV6QixNQUFNLENBQUMsTUFBTTtRQUNoQiw2QkFBYSxDQUFDLE1BQU0sQ0FBQyw4QkFBQywrQ0FBc0IsT0FBRSxFQUFFLG9CQUFvQixDQUFDLENBQUM7SUFDMUUsQ0FBQztDQUVKO0FBTkQsMERBTUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1JlYWN0SW5qZWN0b3J9IGZyb20gJy4uL3VpL3V0aWwvUmVhY3RJbmplY3Rvcic7XG5pbXBvcnQge1Jlc3RhcnRGb3JVcGRhdGVCdXR0b259IGZyb20gJy4vUmVzdGFydEZvclVwZGF0ZUJ1dHRvbic7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgY2xhc3MgUmVzdGFydEZvclVwZGF0ZUJ1dHRvbnMge1xuXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGUoKSB7XG4gICAgICAgIFJlYWN0SW5qZWN0b3IuaW5qZWN0KDxSZXN0YXJ0Rm9yVXBkYXRlQnV0dG9uLz4sICdyZXN0YXJ0LWZvci11cGRhdGUnKTtcbiAgICB9XG5cbn1cbiJdfQ==