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
const Tags_1 = require("polar-shared/src/tags/Tags");
class MockFolderTree extends React.Component {
    constructor(props, context) {
        super(props, context);
        const tags = [
            '/CompSci/Google',
            '/CompSci/Linux',
            '/CompSci/Microsoft',
            '/CompSci/Programming Languages/C++',
            '/CompSci/Programming Languages/Java',
            '/History/WWII',
            '/History/United States/WWII',
        ].map(current => Tags_1.Tags.create(current))
            .map(current => {
            const count = Math.floor(Math.random() * 100);
            const members = ['0x01'];
            return Object.assign(Object.assign({}, current), { count, members });
        });
        this.state = {
            tags, selected: []
        };
    }
    render() {
        const props = this.props;
        return (React.createElement("div", null));
    }
}
exports.MockFolderTree = MockFolderTree;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9ja0ZvbGRlclRyZWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJNb2NrRm9sZGVyVHJlZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsNkNBQStCO0FBRS9CLHFEQUF3RDtBQUd4RCxNQUFhLGNBQWUsU0FBUSxLQUFLLENBQUMsU0FBeUI7SUFFL0QsWUFBWSxLQUFhLEVBQUUsT0FBWTtRQUNuQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBR3RCLE1BQU0sSUFBSSxHQUFHO1lBQ1QsaUJBQWlCO1lBQ2pCLGdCQUFnQjtZQUNoQixvQkFBb0I7WUFDcEIsb0NBQW9DO1lBQ3BDLHFDQUFxQztZQUNyQyxlQUFlO1lBQ2YsNkJBQTZCO1NBQ2hDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsV0FBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNqQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDWCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQztZQUM5QyxNQUFNLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3pCLHVDQUFXLE9BQU8sS0FBRSxLQUFLLEVBQUUsT0FBTyxJQUFFO1FBQ3hDLENBQUMsQ0FBQyxDQUFDO1FBR1AsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNULElBQUksRUFBRSxRQUFRLEVBQUUsRUFBRTtTQUNyQixDQUFDO0lBRU4sQ0FBQztJQUVNLE1BQU07UUFFVCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBRXpCLE9BQU8sQ0FFSCxnQ0FNTSxDQUVULENBQUM7SUFFTixDQUFDO0NBRUo7QUE5Q0Qsd0NBOENDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtUYWdUcmVlfSBmcm9tICcuLi8uLi9qcy91aS90cmVlL1RhZ1RyZWUnO1xuaW1wb3J0IHtUYWdzLCBUYWdTdHJ9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdGFncy9UYWdzJztcbmltcG9ydCB7VGFnRGVzY3JpcHRvcn0gZnJvbSAnLi4vLi4vanMvdGFncy9UYWdOb2RlJztcblxuZXhwb3J0IGNsYXNzIE1vY2tGb2xkZXJUcmVlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzLCBjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuXG5cbiAgICAgICAgY29uc3QgdGFncyA9IFtcbiAgICAgICAgICAgICcvQ29tcFNjaS9Hb29nbGUnLFxuICAgICAgICAgICAgJy9Db21wU2NpL0xpbnV4JyxcbiAgICAgICAgICAgICcvQ29tcFNjaS9NaWNyb3NvZnQnLFxuICAgICAgICAgICAgJy9Db21wU2NpL1Byb2dyYW1taW5nIExhbmd1YWdlcy9DKysnLFxuICAgICAgICAgICAgJy9Db21wU2NpL1Byb2dyYW1taW5nIExhbmd1YWdlcy9KYXZhJyxcbiAgICAgICAgICAgICcvSGlzdG9yeS9XV0lJJyxcbiAgICAgICAgICAgICcvSGlzdG9yeS9Vbml0ZWQgU3RhdGVzL1dXSUknLFxuICAgICAgICBdLm1hcChjdXJyZW50ID0+IFRhZ3MuY3JlYXRlKGN1cnJlbnQpKVxuICAgICAgICAgICAgLm1hcChjdXJyZW50ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb3VudCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbWVtYmVycyA9IFsnMHgwMSddO1xuICAgICAgICAgICAgICAgIHJldHVybiB7Li4uY3VycmVudCwgY291bnQsIG1lbWJlcnN9O1xuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgdGFncywgc2VsZWN0ZWQ6IFtdXG4gICAgICAgIH07XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuXG4gICAgICAgIGNvbnN0IHByb3BzID0gdGhpcy5wcm9wcztcblxuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICA8ZGl2PlxuXG4gICAgICAgICAgICAgICAgey8qPFRhZ1RyZWUgdGFncz17dGhpcy5zdGF0ZS50YWdzfSovfVxuICAgICAgICAgICAgICAgIHsvKiAgICAgICAgIHNlbGVjdGVkPXt0aGlzLnN0YXRlLnNlbGVjdGVkfSovfVxuICAgICAgICAgICAgICAgIHsvKiAgICAgICAgIG9uU2VsZWN0ZWQ9eyh2YWx1ZXMpID0+IGNvbnNvbGUubG9nKFwic2VsZWN0ZWQ6IFwiLCB2YWx1ZXMpfS8+Ki99XG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICk7XG5cbiAgICB9XG5cbn1cblxuaW50ZXJmYWNlIElQcm9wcyB7XG5cbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG4gICAgcmVhZG9ubHkgdGFnczogUmVhZG9ubHlBcnJheTxUYWdEZXNjcmlwdG9yPjtcbiAgICByZWFkb25seSBzZWxlY3RlZDogUmVhZG9ubHlBcnJheTxUYWdTdHI+O1xufVxuXG5cbiJdfQ==