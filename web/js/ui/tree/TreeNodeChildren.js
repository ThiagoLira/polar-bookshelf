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
const TreeNode_1 = require("./TreeNode");
class Styles {
}
Styles.NODE_CHILDREN = {
    display: 'block',
    paddingLeft: '10px',
    marginLeft: '10px',
    borderLeft: '1px solid #c6c6c6'
};
class TreeNodeChildren extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        let idx = 0;
        const children = this.props.children || [];
        if (this.props.closed) {
            return React.createElement("div", null);
        }
        else {
            return React.createElement("div", { style: Styles.NODE_CHILDREN }, children.map(child => React.createElement(TreeNode_1.TreeNode, { key: idx++, node: child, treeState: this.props.treeState })));
        }
    }
}
exports.TreeNodeChildren = TreeNodeChildren;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHJlZU5vZGVDaGlsZHJlbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlRyZWVOb2RlQ2hpbGRyZW4udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUMvQix5Q0FBb0M7QUFJcEMsTUFBTSxNQUFNOztBQUVNLG9CQUFhLEdBQXdCO0lBQy9DLE9BQU8sRUFBRSxPQUFPO0lBQ2hCLFdBQVcsRUFBRSxNQUFNO0lBQ25CLFVBQVUsRUFBRSxNQUFNO0lBQ2xCLFVBQVUsRUFBRSxtQkFBbUI7Q0FDbEMsQ0FBQztBQUtOLE1BQWEsZ0JBQW9CLFNBQVEsS0FBSyxDQUFDLFNBQTRCO0lBRXZFLFlBQVksS0FBZ0IsRUFBRSxPQUFZO1FBQ3RDLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFFMUIsQ0FBQztJQUVNLE1BQU07UUFFVCxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDWixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUM7UUFFM0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUNuQixPQUFPLGdDQUFNLENBQUM7U0FDakI7YUFBTTtZQUNILE9BQU8sNkJBQUssS0FBSyxFQUFFLE1BQU0sQ0FBQyxhQUFhLElBQzFCLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FDbEIsb0JBQUMsbUJBQVEsSUFBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQ1YsSUFBSSxFQUFFLEtBQUssRUFDWCxTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUksQ0FBQyxDQUN4RCxDQUFDO1NBQ1Y7SUFFTCxDQUFDO0NBRUo7QUF6QkQsNENBeUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtUcmVlTm9kZX0gZnJvbSAnLi9UcmVlTm9kZSc7XG5pbXBvcnQge1ROb2RlfSBmcm9tICcuL1RyZWVWaWV3JztcbmltcG9ydCB7VHJlZVN0YXRlfSBmcm9tIFwiLi9UcmVlU3RhdGVcIjtcblxuY2xhc3MgU3R5bGVzIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgTk9ERV9DSElMRFJFTjogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgcGFkZGluZ0xlZnQ6ICcxMHB4JyxcbiAgICAgICAgbWFyZ2luTGVmdDogJzEwcHgnLFxuICAgICAgICBib3JkZXJMZWZ0OiAnMXB4IHNvbGlkICNjNmM2YzYnXG4gICAgfTtcblxufVxuXG5cbmV4cG9ydCBjbGFzcyBUcmVlTm9kZUNoaWxkcmVuPFY+IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wczxWPiwgSVN0YXRlPiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzPFY+LCBjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICBsZXQgaWR4ID0gMDtcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLnByb3BzLmNoaWxkcmVuIHx8IFtdO1xuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmNsb3NlZCkge1xuICAgICAgICAgICAgcmV0dXJuIDxkaXYvPjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiA8ZGl2IHN0eWxlPXtTdHlsZXMuTk9ERV9DSElMRFJFTn0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW4ubWFwKGNoaWxkID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyZWVOb2RlIGtleT17aWR4Kyt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGU9e2NoaWxkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmVlU3RhdGU9e3RoaXMucHJvcHMudHJlZVN0YXRlfSAvPil9XG4gICAgICAgICAgICA8L2Rpdj47XG4gICAgICAgIH1cblxuICAgIH1cblxufVxuXG5pbnRlcmZhY2UgSVByb3BzPFY+IHtcbiAgICByZWFkb25seSBjbG9zZWQ/OiBib29sZWFuO1xuICAgIHJlYWRvbmx5IGNoaWxkcmVuPzogUmVhZG9ubHlBcnJheTxUTm9kZTxWPj47XG4gICAgcmVhZG9ubHkgdHJlZVN0YXRlOiBUcmVlU3RhdGU8Vj47XG59XG5cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG59XG5cblxuIl19