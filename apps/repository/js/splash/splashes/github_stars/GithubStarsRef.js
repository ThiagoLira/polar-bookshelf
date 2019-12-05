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
const GithubStars_1 = require("./GithubStars");
const ConditionalPrioritizedComponentRef_1 = require("../ConditionalPrioritizedComponentRef");
class GithubStarsRef extends ConditionalPrioritizedComponentRef_1.ConditionalPrioritizedComponentRef {
    constructor() {
        super('github-stars', 20, 'active');
        this.id = 'github-stars';
    }
    create() {
        return React.createElement(GithubStars_1.GithubStars, { settingKey: this.settingKey });
    }
}
exports.GithubStarsRef = GithubStarsRef;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2l0aHViU3RhcnNSZWYuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJHaXRodWJTdGFyc1JlZi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsNkNBQStCO0FBQy9CLCtDQUEwQztBQUMxQyw4RkFBeUY7QUFFekYsTUFBYSxjQUFlLFNBQVEsdUVBQWtDO0lBSWxFO1FBQ0ksS0FBSyxDQUFDLGNBQWMsRUFBRSxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFIeEIsT0FBRSxHQUFHLGNBQWMsQ0FBQztJQUlwQyxDQUFDO0lBRU0sTUFBTTtRQUNULE9BQU8sb0JBQUMseUJBQVcsSUFBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDO0lBQ3ZELENBQUM7Q0FFSjtBQVpELHdDQVlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtHaXRodWJTdGFyc30gZnJvbSAnLi9HaXRodWJTdGFycyc7XG5pbXBvcnQge0NvbmRpdGlvbmFsUHJpb3JpdGl6ZWRDb21wb25lbnRSZWZ9IGZyb20gJy4uL0NvbmRpdGlvbmFsUHJpb3JpdGl6ZWRDb21wb25lbnRSZWYnO1xuXG5leHBvcnQgY2xhc3MgR2l0aHViU3RhcnNSZWYgZXh0ZW5kcyBDb25kaXRpb25hbFByaW9yaXRpemVkQ29tcG9uZW50UmVmIHtcblxuICAgIHB1YmxpYyByZWFkb25seSBpZCA9ICdnaXRodWItc3RhcnMnO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCdnaXRodWItc3RhcnMnLCAyMCwgJ2FjdGl2ZScpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjcmVhdGUoKTogSlNYLkVsZW1lbnQge1xuICAgICAgICByZXR1cm4gPEdpdGh1YlN0YXJzIHNldHRpbmdLZXk9e3RoaXMuc2V0dGluZ0tleX0vPjtcbiAgICB9XG5cbn1cbiJdfQ==