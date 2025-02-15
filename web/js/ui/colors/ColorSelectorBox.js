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
const ColorButton_1 = require("./ColorButton");
const ColorButtonsRow = (props) => {
    const selected = props.selected || [];
    return React.createElement("div", { style: { display: 'flex' } }, props.colors.map(color => React.createElement(ColorButton_1.ColorButton, { key: color, selected: selected.includes(color), onSelected: props.onSelected, color: color })));
};
const ColorButtonsRow0 = (props) => {
    const colors = ['yellow', 'red', 'green', '#9900EF', '#FF6900'];
    return React.createElement(ColorButtonsRow, Object.assign({}, props, { colors: colors }));
};
const ColorButtonsRow1 = (props) => {
    const colors = ['#8DFF76', '#00D084', '#8ED1FC', '#0693E3', '#EB144C'];
    return React.createElement(ColorButtonsRow, Object.assign({}, props, { colors: colors }));
};
const ColorButtonsRow2 = (props) => {
    const colors = ['#F78DA7', '#FFFF00', '#F96676', '#FCB900', '#7BDCB5'];
    return React.createElement(ColorButtonsRow, Object.assign({}, props, { colors: colors }));
};
const ColorButtons = (props) => {
    return React.createElement("div", { className: "pt-1 pb-1", style: {} },
        React.createElement(ColorButtonsRow0, Object.assign({}, props)),
        React.createElement("div", { className: "mt-2" },
            React.createElement(ColorButtonsRow1, Object.assign({}, props))),
        React.createElement("div", { className: "mt-2" },
            React.createElement(ColorButtonsRow2, Object.assign({}, props))));
};
class ColorSelectorBox extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
        this.deactivate = this.deactivate.bind(this);
        this.state = {
            open: false
        };
    }
    deactivate() {
        this.setState({
            open: false
        });
    }
    activate() {
        this.setState({
            open: true
        });
    }
    render() {
        const props = this.props;
        return (React.createElement("div", null,
            React.createElement(ColorButtons, Object.assign({}, props))));
    }
}
exports.ColorSelectorBox = ColorSelectorBox;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29sb3JTZWxlY3RvckJveC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNvbG9yU2VsZWN0b3JCb3gudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUMvQiwrQ0FBMEM7QUFNMUMsTUFBTSxlQUFlLEdBQUcsQ0FBQyxLQUEyQixFQUFFLEVBQUU7SUFFcEQsTUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUM7SUFFdEMsT0FBTyw2QkFBSyxLQUFLLEVBQUUsRUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFDLElBQy9CLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQ3hCLG9CQUFDLHlCQUFXLElBQUMsR0FBRyxFQUFFLEtBQUssRUFDVixRQUFRLEVBQUUsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFDbEMsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVLEVBQzVCLEtBQUssRUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUM3QixDQUFDO0FBRVgsQ0FBQyxDQUFDO0FBRUYsTUFBTSxnQkFBZ0IsR0FBRyxDQUFDLEtBQWEsRUFBRSxFQUFFO0lBRXZDLE1BQU0sTUFBTSxHQUFHLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBRWhFLE9BQU8sb0JBQUMsZUFBZSxvQkFBSyxLQUFLLElBQUUsTUFBTSxFQUFFLE1BQU0sSUFBRyxDQUFDO0FBRXpELENBQUMsQ0FBQztBQUVGLE1BQU0sZ0JBQWdCLEdBQUcsQ0FBQyxLQUFhLEVBQUUsRUFBRTtJQUV2QyxNQUFNLE1BQU0sR0FBRyxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUV2RSxPQUFPLG9CQUFDLGVBQWUsb0JBQUssS0FBSyxJQUFFLE1BQU0sRUFBRSxNQUFNLElBQUcsQ0FBQztBQUV6RCxDQUFDLENBQUM7QUFFRixNQUFNLGdCQUFnQixHQUFHLENBQUMsS0FBYSxFQUFFLEVBQUU7SUFDdkMsTUFBTSxNQUFNLEdBQUcsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFFdkUsT0FBTyxvQkFBQyxlQUFlLG9CQUFLLEtBQUssSUFBRSxNQUFNLEVBQUUsTUFBTSxJQUFHLENBQUM7QUFFekQsQ0FBQyxDQUFDO0FBRUYsTUFBTSxZQUFZLEdBQUcsQ0FBQyxLQUFhLEVBQUUsRUFBRTtJQUVuQyxPQUFPLDZCQUFLLFNBQVMsRUFBQyxXQUFXLEVBQ3JCLEtBQUssRUFBRSxFQUNOO1FBRVQsb0JBQUMsZ0JBQWdCLG9CQUFLLEtBQUssRUFBRztRQUU5Qiw2QkFBSyxTQUFTLEVBQUMsTUFBTTtZQUNqQixvQkFBQyxnQkFBZ0Isb0JBQUssS0FBSyxFQUFHLENBQzVCO1FBRU4sNkJBQUssU0FBUyxFQUFDLE1BQU07WUFDakIsb0JBQUMsZ0JBQWdCLG9CQUFLLEtBQUssRUFBRyxDQUM1QixDQUVKLENBQUM7QUFFWCxDQUFDLENBQUM7QUFFRixNQUFhLGdCQUFpQixTQUFRLEtBQUssQ0FBQyxhQUE2QjtJQUVyRSxZQUFZLEtBQWEsRUFBRSxPQUFZO1FBQ25DLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUU3QyxJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1QsSUFBSSxFQUFFLEtBQUs7U0FDZCxDQUFDO0lBRU4sQ0FBQztJQUVPLFVBQVU7UUFFZCxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ1YsSUFBSSxFQUFFLEtBQUs7U0FDZCxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU8sUUFBUTtRQUVaLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDVixJQUFJLEVBQUUsSUFBSTtTQUNiLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSxNQUFNO1FBRVQsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUV6QixPQUFPLENBQ0g7WUFFSSxvQkFBQyxZQUFZLG9CQUFLLEtBQUssRUFBRyxDQUV4QixDQUNULENBQUM7SUFFTixDQUFDO0NBQ0o7QUF4Q0QsNENBd0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtDb2xvckJ1dHRvbn0gZnJvbSAnLi9Db2xvckJ1dHRvbic7XG5cbmludGVyZmFjZSBDb2xvckJ1dHRvbnNSb3dQcm9wcyBleHRlbmRzIElQcm9wcyB7XG4gICAgcmVhZG9ubHkgY29sb3JzOiBSZWFkb25seUFycmF5PHN0cmluZz47XG59XG5cbmNvbnN0IENvbG9yQnV0dG9uc1JvdyA9IChwcm9wczogQ29sb3JCdXR0b25zUm93UHJvcHMpID0+IHtcblxuICAgIGNvbnN0IHNlbGVjdGVkID0gcHJvcHMuc2VsZWN0ZWQgfHwgW107XG5cbiAgICByZXR1cm4gPGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4J319PlxuICAgICAgICB7cHJvcHMuY29sb3JzLm1hcChjb2xvciA9PlxuICAgICAgICAgIDxDb2xvckJ1dHRvbiBrZXk9e2NvbG9yfVxuICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17c2VsZWN0ZWQuaW5jbHVkZXMoY29sb3IpfVxuICAgICAgICAgICAgICAgICAgICAgICBvblNlbGVjdGVkPXtwcm9wcy5vblNlbGVjdGVkfVxuICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17Y29sb3J9Lz4pfVxuICAgIDwvZGl2PjtcblxufTtcblxuY29uc3QgQ29sb3JCdXR0b25zUm93MCA9IChwcm9wczogSVByb3BzKSA9PiB7XG5cbiAgICBjb25zdCBjb2xvcnMgPSBbJ3llbGxvdycsICdyZWQnLCAnZ3JlZW4nLCAnIzk5MDBFRicsICcjRkY2OTAwJ107XG5cbiAgICByZXR1cm4gPENvbG9yQnV0dG9uc1JvdyB7Li4ucHJvcHN9IGNvbG9ycz17Y29sb3JzfS8+O1xuXG59O1xuXG5jb25zdCBDb2xvckJ1dHRvbnNSb3cxID0gKHByb3BzOiBJUHJvcHMpID0+IHtcblxuICAgIGNvbnN0IGNvbG9ycyA9IFsnIzhERkY3NicsICcjMDBEMDg0JywgJyM4RUQxRkMnLCAnIzA2OTNFMycsICcjRUIxNDRDJ107XG5cbiAgICByZXR1cm4gPENvbG9yQnV0dG9uc1JvdyB7Li4ucHJvcHN9IGNvbG9ycz17Y29sb3JzfS8+O1xuXG59O1xuXG5jb25zdCBDb2xvckJ1dHRvbnNSb3cyID0gKHByb3BzOiBJUHJvcHMpID0+IHtcbiAgICBjb25zdCBjb2xvcnMgPSBbJyNGNzhEQTcnLCAnI0ZGRkYwMCcsICcjRjk2Njc2JywgJyNGQ0I5MDAnLCAnIzdCRENCNSddO1xuXG4gICAgcmV0dXJuIDxDb2xvckJ1dHRvbnNSb3cgey4uLnByb3BzfSBjb2xvcnM9e2NvbG9yc30vPjtcblxufTtcblxuY29uc3QgQ29sb3JCdXR0b25zID0gKHByb3BzOiBJUHJvcHMpID0+IHtcblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInB0LTEgcGItMVwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICB9fT5cblxuICAgICAgICA8Q29sb3JCdXR0b25zUm93MCB7Li4ucHJvcHN9Lz5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTJcIj5cbiAgICAgICAgICAgIDxDb2xvckJ1dHRvbnNSb3cxIHsuLi5wcm9wc30vPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTJcIj5cbiAgICAgICAgICAgIDxDb2xvckJ1dHRvbnNSb3cyIHsuLi5wcm9wc30vPlxuICAgICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PjtcblxufTtcblxuZXhwb3J0IGNsYXNzIENvbG9yU2VsZWN0b3JCb3ggZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzLCBjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuXG4gICAgICAgIHRoaXMuZGVhY3RpdmF0ZSA9IHRoaXMuZGVhY3RpdmF0ZS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBvcGVuOiBmYWxzZVxuICAgICAgICB9O1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkZWFjdGl2YXRlKCkge1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgb3BlbjogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhY3RpdmF0ZSgpIHtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG9wZW46IHRydWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICBjb25zdCBwcm9wcyA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG5cbiAgICAgICAgICAgICAgICA8Q29sb3JCdXR0b25zIHsuLi5wcm9wc30vPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcblxuICAgIH1cbn1cblxuXG5leHBvcnQgdHlwZSBDb2xvclN0ciA9IHN0cmluZztcblxuaW50ZXJmYWNlIElQcm9wcyB7XG5cbiAgICByZWFkb25seSBzZWxlY3RlZD86IFJlYWRvbmx5QXJyYXk8Q29sb3JTdHI+O1xuXG4gICAgcmVhZG9ubHkgb25TZWxlY3RlZD86IChjb2xvcjogQ29sb3JTdHIpID0+IHZvaWQ7XG5cbiAgICAvLyByZWFkb25seSBjbGVhcmFibGU/OiBib29sZWFuO1xuXG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xuICAgIHJlYWRvbmx5IG9wZW46IGJvb2xlYW47XG59XG4iXX0=