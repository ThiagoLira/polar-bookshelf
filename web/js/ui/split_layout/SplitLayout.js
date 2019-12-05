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
class SplitLayout extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (React.createElement("div", { className: "split-layout pl-0 pr-0" },
            React.createElement("div", { style: { display: 'flex' } }, this.props.children)));
    }
}
exports.SplitLayout = SplitLayout;
class SplitLayoutLeft extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (React.createElement("div", { className: "split-layout-left", style: {
                verticalAlign: 'top'
            } }, this.props.children));
    }
}
exports.SplitLayoutLeft = SplitLayoutLeft;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3BsaXRMYXlvdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJTcGxpdExheW91dC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsNkNBQStCO0FBRS9CLE1BQWEsV0FBWSxTQUFRLEtBQUssQ0FBQyxhQUF1QjtJQUUxRCxZQUFZLEtBQVUsRUFBRSxPQUFZO1FBQ2hDLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVNLE1BQU07UUFFVCxPQUFPLENBRUgsNkJBQUssU0FBUyxFQUFDLHdCQUF3QjtZQUVuQyw2QkFBSyxLQUFLLEVBQUUsRUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFDLElBRXhCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUVsQixDQUVKLENBQ1QsQ0FBQztJQUNOLENBQUM7Q0FFSjtBQXRCRCxrQ0FzQkM7QUFFRCxNQUFhLGVBQWdCLFNBQVEsS0FBSyxDQUFDLGFBQXVCO0lBRTlELFlBQVksS0FBVSxFQUFFLE9BQVk7UUFDaEMsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRU0sTUFBTTtRQUVULE9BQU8sQ0FFSCw2QkFBSyxTQUFTLEVBQUMsbUJBQW1CLEVBQzdCLEtBQUssRUFBRTtnQkFHSCxhQUFhLEVBQUUsS0FBSzthQUN2QixJQUVELElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUVsQixDQUVULENBQUM7SUFDTixDQUFDO0NBRUo7QUF4QkQsMENBd0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgY2xhc3MgU3BsaXRMYXlvdXQgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PGFueSwgYW55PiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogYW55LCBjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGxpdC1sYXlvdXQgcGwtMCBwci0wXCI+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnfX0+XG5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBjbGFzcyBTcGxpdExheW91dExlZnQgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PGFueSwgYW55PiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogYW55LCBjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGxpdC1sYXlvdXQtbGVmdFwiXG4gICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAvLyBtYXJnaW5Ub3A6ICdhdXRvJyxcbiAgICAgICAgICAgICAgICAgICAgIC8vIG1hcmdpbkJvdHRvbTogJ2F1dG8nLFxuICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCdcbiAgICAgICAgICAgICAgICAgfX0+XG5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cblxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgKTtcbiAgICB9XG5cbn1cbiJdfQ==