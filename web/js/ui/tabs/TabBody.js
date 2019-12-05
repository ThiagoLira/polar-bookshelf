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
const TabStyles_1 = require("./TabStyles");
class TabBody extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const { tab } = this.props;
        if (typeof tab.content === 'string') {
            return React.createElement("webview", { id: 'tab-webview-' + tab.id, style: TabStyles_1.TabStyles.WEBVIEW, src: tab.content });
        }
        else {
            return tab.content;
        }
    }
}
exports.TabBody = TabBody;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFiQm9keS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlRhYkJvZHkudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUUvQiwyQ0FBc0M7QUFFdEMsTUFBYSxPQUFRLFNBQVEsS0FBSyxDQUFDLFNBQXlCO0lBRXhELFlBQVksS0FBYSxFQUFFLE9BQVk7UUFDbkMsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRU0sTUFBTTtRQUVULE1BQU0sRUFBQyxHQUFHLEVBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBRXpCLElBQUksT0FBTyxHQUFHLENBQUMsT0FBTyxLQUFLLFFBQVEsRUFBRTtZQUVqQyxPQUFPLGlDQUFTLEVBQUUsRUFBRSxjQUFjLEdBQUcsR0FBRyxDQUFDLEVBQUUsRUFDM0IsS0FBSyxFQUFFLHFCQUFTLENBQUMsT0FBTyxFQUN4QixHQUFHLEVBQUUsR0FBRyxDQUFDLE9BQU8sR0FBRyxDQUFDO1NBR3ZDO2FBQU07WUFDSCxPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUM7U0FDdEI7SUFFTCxDQUFDO0NBRUo7QUF2QkQsMEJBdUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtUYWJ9IGZyb20gJy4vVGFiTmF2JztcbmltcG9ydCB7VGFiU3R5bGVzfSBmcm9tICcuL1RhYlN0eWxlcyc7XG5cbmV4cG9ydCBjbGFzcyBUYWJCb2R5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzLCBjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgY29uc3Qge3RhYn0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGlmICh0eXBlb2YgdGFiLmNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG5cbiAgICAgICAgICAgIHJldHVybiA8d2VidmlldyBpZD17J3RhYi13ZWJ2aWV3LScgKyB0YWIuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e1RhYlN0eWxlcy5XRUJWSUVXfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17dGFiLmNvbnRlbnR9Lz47XG5cblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRhYi5jb250ZW50O1xuICAgICAgICB9XG5cbiAgICB9XG5cbn1cblxuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgICByZWFkb25seSB0YWI6IFRhYjtcbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG59XG5cblxuIl19