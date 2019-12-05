"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Styles = {
    dropdownChevron: {
        display: 'inline-block',
        width: 0,
        height: 0,
        marginLeft: '.255em',
        verticalAlign: '.255em',
        borderTop: '.3em solid',
        borderRight: '.3em solid transparent',
        borderBottom: 0,
        borderLeft: '.3em solid transparent',
    }
};
class DropdownChevron extends react_1.default.PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        return (react_1.default.createElement("div", { style: Styles.dropdownChevron }));
    }
}
exports.DropdownChevron = DropdownChevron;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHJvcGRvd25DaGV2cm9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRHJvcGRvd25DaGV2cm9uLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLGtEQUEwQjtBQUcxQixNQUFNLE1BQU0sR0FBYztJQUl0QixlQUFlLEVBQUU7UUFFYixPQUFPLEVBQUUsY0FBYztRQUN2QixLQUFLLEVBQUUsQ0FBQztRQUNSLE1BQU0sRUFBRSxDQUFDO1FBQ1QsVUFBVSxFQUFFLFFBQVE7UUFDcEIsYUFBYSxFQUFFLFFBQVE7UUFDdkIsU0FBUyxFQUFFLFlBQVk7UUFDdkIsV0FBVyxFQUFFLHdCQUF3QjtRQUNyQyxZQUFZLEVBQUUsQ0FBQztRQUNmLFVBQVUsRUFBRSx3QkFBd0I7S0FHdkM7Q0FFSixDQUFDO0FBRUYsTUFBYSxlQUFnQixTQUFRLGVBQUssQ0FBQyxhQUE2QjtJQUVwRSxZQUFZLEtBQWE7UUFDckIsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBR2pCLENBQUM7SUFFTSxNQUFNO1FBRVQsT0FBTyxDQUVILHVDQUFLLEtBQUssRUFBRSxNQUFNLENBQUMsZUFBZSxHQUFRLENBRTdDLENBQUM7SUFFTixDQUFDO0NBRUo7QUFsQkQsMENBa0JDIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50IHJlYWN0L25vLW11bHRpLWNvbXA6IDAsIHJlYWN0L3Byb3AtdHlwZXM6IDAgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0lTdHlsZU1hcH0gZnJvbSAnLi4vLi4vcmVhY3QvSVN0eWxlTWFwJztcblxuY29uc3QgU3R5bGVzOiBJU3R5bGVNYXAgPSB7XG5cbiAgICAvLyBUT0RPOiB0aGlzIGlzIHVzZWQgaW4gb3RoZXIgcGFydHMgb2YgdGhlIGNvZGUgc28gdHJ5IHRvIGNsZWFuIGl0IHVwXG4gICAgLy8gYW5kIHJlbW92ZSBhbGwgcmVmZXJlbmNlc1xuICAgIGRyb3Bkb3duQ2hldnJvbjoge1xuXG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICBtYXJnaW5MZWZ0OiAnLjI1NWVtJyxcbiAgICAgICAgdmVydGljYWxBbGlnbjogJy4yNTVlbScsXG4gICAgICAgIGJvcmRlclRvcDogJy4zZW0gc29saWQnLFxuICAgICAgICBib3JkZXJSaWdodDogJy4zZW0gc29saWQgdHJhbnNwYXJlbnQnLFxuICAgICAgICBib3JkZXJCb3R0b206IDAsXG4gICAgICAgIGJvcmRlckxlZnQ6ICcuM2VtIHNvbGlkIHRyYW5zcGFyZW50JyxcbiAgICAgICAgLy8gY29sb3I6ICd2YXIoLS1zZWNvbmRhcnkpJ1xuXG4gICAgfVxuXG59O1xuXG5leHBvcnQgY2xhc3MgRHJvcGRvd25DaGV2cm9uIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cblxuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgPGRpdiBzdHlsZT17U3R5bGVzLmRyb3Bkb3duQ2hldnJvbn0+PC9kaXY+XG5cbiAgICAgICAgKTtcblxuICAgIH1cblxufVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcblxufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbn1cbiJdfQ==