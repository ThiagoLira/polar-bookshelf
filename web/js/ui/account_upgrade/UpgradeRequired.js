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
const reactstrap_1 = require("reactstrap");
const RendererAnalytics_1 = require("../../ga/RendererAnalytics");
class UpgradeRequired extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        RendererAnalytics_1.RendererAnalytics.event({ category: 'upgrade', action: 'triggered-upgrade-required' });
        const onClick = () => {
            RendererAnalytics_1.RendererAnalytics.event({ category: 'upgrade', action: 'clicked-button-to-plans' });
            document.location.hash = 'plans';
        };
        return React.createElement("div", { className: "mt-1 mb-1 p-1 rounded", style: {
                backgroundColor: '#ffcccc',
                fontWeight: 'bold',
                display: 'flex'
            } },
            React.createElement(reactstrap_1.Button, { color: "success", size: "sm", style: { fontWeight: 'bold' }, onClick: () => onClick() },
                React.createElement("i", { className: "fas fa-certificate" }),
                "\u00A0 Upgrade Now"),
            React.createElement("div", { className: "ml-1 mt-auto mb-auto" }, "Your account has exceeded limits for your current plan.  Sync will be disabled in 1 week."));
    }
}
exports.UpgradeRequired = UpgradeRequired;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXBncmFkZVJlcXVpcmVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVXBncmFkZVJlcXVpcmVkLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSw2Q0FBK0I7QUFDL0IsMkNBQWtDO0FBRWxDLGtFQUE2RDtBQU03RCxNQUFhLGVBQWdCLFNBQVEsS0FBSyxDQUFDLFNBQXlCO0lBRWhFLFlBQVksS0FBYSxFQUFFLE9BQVk7UUFDbkMsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRU0sTUFBTTtRQUVULHFDQUFpQixDQUFDLEtBQUssQ0FBQyxFQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLDRCQUE0QixFQUFDLENBQUMsQ0FBQztRQUVyRixNQUFNLE9BQU8sR0FBRyxHQUFHLEVBQUU7WUFDakIscUNBQWlCLENBQUMsS0FBSyxDQUFDLEVBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUseUJBQXlCLEVBQUMsQ0FBQyxDQUFDO1lBQ2xGLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztRQUNyQyxDQUFDLENBQUM7UUFFRixPQUFPLDZCQUFLLFNBQVMsRUFBQyx1QkFBdUIsRUFDakMsS0FBSyxFQUFFO2dCQUNILGVBQWUsRUFBRSxTQUFTO2dCQUMxQixVQUFVLEVBQUUsTUFBTTtnQkFDbEIsT0FBTyxFQUFFLE1BQU07YUFDbEI7WUFFVCxvQkFBQyxtQkFBTSxJQUFDLEtBQUssRUFBQyxTQUFTLEVBQ2YsSUFBSSxFQUFDLElBQUksRUFDVCxLQUFLLEVBQUUsRUFBQyxVQUFVLEVBQUUsTUFBTSxFQUFDLEVBQzNCLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxPQUFPLEVBQUU7Z0JBRTVCLDJCQUFHLFNBQVMsRUFBQyxvQkFBb0IsR0FBRTtxQ0FJOUI7WUFFVCw2QkFBSyxTQUFTLEVBQUMsc0JBQXNCLGdHQUkvQixDQUVKLENBQUM7SUFFWCxDQUFDO0NBRUo7QUEzQ0QsMENBMkNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtCdXR0b259IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5pbXBvcnQge0FjY291bnRQbGFufSBmcm9tIFwiLi4vLi4vYWNjb3VudHMvQWNjb3VudFwiO1xuaW1wb3J0IHtSZW5kZXJlckFuYWx5dGljc30gZnJvbSBcIi4uLy4uL2dhL1JlbmRlcmVyQW5hbHl0aWNzXCI7XG5cbi8qKlxuICogTGlzdGVuIHRvIHRoZSBtYWNoaW5lIGRhdGFzdG9yZSBmb3IgdGhpcyB1c2VyIGFuZCBpZiB0aGVpciBhY2NvdW50IGlzbid0IGluXG4gKiBsaW5lIHdpdGggdGhlIG1hY2hpbmUgZGF0YSBzdG9yZSB0aGVuIHdlIGhhdmUgdG8gZm9yY2UgdGhlbSB0byB1cGdyYWRlLlxuICovXG5leHBvcnQgY2xhc3MgVXBncmFkZVJlcXVpcmVkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzLCBjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgUmVuZGVyZXJBbmFseXRpY3MuZXZlbnQoe2NhdGVnb3J5OiAndXBncmFkZScsIGFjdGlvbjogJ3RyaWdnZXJlZC11cGdyYWRlLXJlcXVpcmVkJ30pO1xuXG4gICAgICAgIGNvbnN0IG9uQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICBSZW5kZXJlckFuYWx5dGljcy5ldmVudCh7Y2F0ZWdvcnk6ICd1cGdyYWRlJywgYWN0aW9uOiAnY2xpY2tlZC1idXR0b24tdG8tcGxhbnMnfSk7XG4gICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5oYXNoID0gJ3BsYW5zJztcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJtdC0xIG1iLTEgcC0xIHJvdW5kZWRcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmY2NjYycsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCdcbiAgICAgICAgICAgICAgICAgICAgfX0+XG5cbiAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJzdWNjZXNzXCJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tmb250V2VpZ2h0OiAnYm9sZCd9fVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKCl9PlxuXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNlcnRpZmljYXRlXCIvPlxuICAgICAgICAgICAgICAgICZuYnNwO1xuICAgICAgICAgICAgICAgIFVwZ3JhZGUgTm93XG5cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTEgbXQtYXV0byBtYi1hdXRvXCI+XG5cbiAgICAgICAgICAgICAgICBZb3VyIGFjY291bnQgaGFzIGV4Y2VlZGVkIGxpbWl0cyBmb3IgeW91ciBjdXJyZW50IHBsYW4uICBTeW5jIHdpbGwgYmUgZGlzYWJsZWQgaW4gMSB3ZWVrLlxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Rpdj47XG5cbiAgICB9XG5cbn1cblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgcmVhZG9ubHkgcGxhblJlcXVpcmVkPzogQWNjb3VudFBsYW47XG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xufVxuXG4iXX0=