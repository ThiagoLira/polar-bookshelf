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
const SplitLayout_1 = require("../split_layout/SplitLayout");
const RepositoryTour_1 = require("../../apps/repository/RepositoryTour");
const SplitLayoutRight_1 = require("../split_layout/SplitLayoutRight");
class JoyrideTours {
    static createImageStep(step) {
        const Image = () => {
            if (typeof step.image === 'string') {
                return React.createElement("img", { src: step.image, style: RepositoryTour_1.Styles.SPLIT_BAR_IMG });
            }
            else {
                return React.createElement("div", null, step.image);
            }
        };
        return {
            target: step.target,
            title: step.title,
            disableBeacon: true,
            styles: {
                tooltip: {
                    width: '700px'
                }
            },
            content: React.createElement("div", null,
                React.createElement(SplitLayout_1.SplitLayout, null,
                    React.createElement(SplitLayout_1.SplitLayoutLeft, null, step.content),
                    React.createElement(SplitLayoutRight_1.SplitLayoutRight, null,
                        React.createElement(Image, null)))),
            placement: step.placement || 'bottom',
            hideBackButton: step.hideBackButton || false,
            spotlightClicks: step.spotlightClicks || false,
            autoNext: step.autoNext,
            disabled: step.disabled
        };
    }
}
exports.JoyrideTours = JoyrideTours;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSm95cmlkZVRvdXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiSm95cmlkZVRvdXJzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQSw2Q0FBK0I7QUFDL0IsNkRBQXlFO0FBQ3pFLHlFQUE0RDtBQUM1RCx1RUFBa0U7QUFFbEUsTUFBYSxZQUFZO0lBRWQsTUFBTSxDQUFDLGVBQWUsQ0FBQyxJQUFlO1FBRXpDLE1BQU0sS0FBSyxHQUFHLEdBQUcsRUFBRTtZQUVmLElBQUksT0FBTyxJQUFJLENBQUMsS0FBSyxLQUFLLFFBQVEsRUFBRTtnQkFDaEMsT0FBTyw2QkFBSyxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsdUJBQU0sQ0FBQyxhQUFhLEdBQUcsQ0FBQzthQUMvRDtpQkFBTTtnQkFDSCxPQUFPLGlDQUFNLElBQUksQ0FBQyxLQUFLLENBQU8sQ0FBQzthQUNsQztRQUNMLENBQUMsQ0FBQztRQUVGLE9BQU87WUFDSCxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLGFBQWEsRUFBRSxJQUFJO1lBQ25CLE1BQU0sRUFBRTtnQkFDSixPQUFPLEVBQUU7b0JBQ0wsS0FBSyxFQUFFLE9BQU87aUJBQ2pCO2FBQ0o7WUFDRCxPQUFPLEVBQUU7Z0JBRUwsb0JBQUMseUJBQVc7b0JBRVIsb0JBQUMsNkJBQWUsUUFFWCxJQUFJLENBQUMsT0FBTyxDQUVDO29CQUVsQixvQkFBQyxtQ0FBZ0I7d0JBRWIsb0JBQUMsS0FBSyxPQUFFLENBRU8sQ0FFVCxDQUVaO1lBQ04sU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLElBQUksUUFBUTtZQUNyQyxjQUFjLEVBQUUsSUFBSSxDQUFDLGNBQWMsSUFBSSxLQUFLO1lBQzVDLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZSxJQUFJLEtBQUs7WUFDOUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtTQUMxQixDQUFDO0lBRU4sQ0FBQztDQUVKO0FBbERELG9DQWtEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7cGxhY2VtZW50LCBTdGVwfSBmcm9tICdyZWFjdC1qb3lyaWRlJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7U3BsaXRMYXlvdXQsIFNwbGl0TGF5b3V0TGVmdH0gZnJvbSAnLi4vc3BsaXRfbGF5b3V0L1NwbGl0TGF5b3V0JztcbmltcG9ydCB7U3R5bGVzfSBmcm9tICcuLi8uLi9hcHBzL3JlcG9zaXRvcnkvUmVwb3NpdG9yeVRvdXInO1xuaW1wb3J0IHtTcGxpdExheW91dFJpZ2h0fSBmcm9tICcuLi9zcGxpdF9sYXlvdXQvU3BsaXRMYXlvdXRSaWdodCc7XG5cbmV4cG9ydCBjbGFzcyBKb3lyaWRlVG91cnMge1xuXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGVJbWFnZVN0ZXAoc3RlcDogSW1hZ2VTdGVwKTogRW5oYW5jZWRTdGVwIHtcblxuICAgICAgICBjb25zdCBJbWFnZSA9ICgpID0+IHtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBzdGVwLmltYWdlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHJldHVybiA8aW1nIHNyYz17c3RlcC5pbWFnZX0gc3R5bGU9e1N0eWxlcy5TUExJVF9CQVJfSU1HfS8+O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gPGRpdj57c3RlcC5pbWFnZX08L2Rpdj47XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRhcmdldDogc3RlcC50YXJnZXQsXG4gICAgICAgICAgICB0aXRsZTogc3RlcC50aXRsZSxcbiAgICAgICAgICAgIGRpc2FibGVCZWFjb246IHRydWUsXG4gICAgICAgICAgICBzdHlsZXM6IHtcbiAgICAgICAgICAgICAgICB0b29sdGlwOiB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnNzAwcHgnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbnRlbnQ6IDxkaXY+XG5cbiAgICAgICAgICAgICAgICA8U3BsaXRMYXlvdXQ+XG5cbiAgICAgICAgICAgICAgICAgICAgPFNwbGl0TGF5b3V0TGVmdD5cblxuICAgICAgICAgICAgICAgICAgICAgICAge3N0ZXAuY29udGVudH1cblxuICAgICAgICAgICAgICAgICAgICA8L1NwbGl0TGF5b3V0TGVmdD5cblxuICAgICAgICAgICAgICAgICAgICA8U3BsaXRMYXlvdXRSaWdodD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlLz5cblxuICAgICAgICAgICAgICAgICAgICA8L1NwbGl0TGF5b3V0UmlnaHQ+XG5cbiAgICAgICAgICAgICAgICA8L1NwbGl0TGF5b3V0PlxuXG4gICAgICAgICAgICA8L2Rpdj4sXG4gICAgICAgICAgICBwbGFjZW1lbnQ6IHN0ZXAucGxhY2VtZW50IHx8ICdib3R0b20nLFxuICAgICAgICAgICAgaGlkZUJhY2tCdXR0b246IHN0ZXAuaGlkZUJhY2tCdXR0b24gfHwgZmFsc2UsXG4gICAgICAgICAgICBzcG90bGlnaHRDbGlja3M6IHN0ZXAuc3BvdGxpZ2h0Q2xpY2tzIHx8IGZhbHNlLFxuICAgICAgICAgICAgYXV0b05leHQ6IHN0ZXAuYXV0b05leHQsXG4gICAgICAgICAgICBkaXNhYmxlZDogc3RlcC5kaXNhYmxlZFxuICAgICAgICB9O1xuXG4gICAgfVxuXG59XG5cblxuLyoqXG4gKiBBbiBlbmhhbmNlZCBzdGVwIHdpdGggYSBmZXcgbW9yZSBmaWVsZHMuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRW5oYW5jZWRTdGVwIGV4dGVuZHMgU3RlcCB7XG5cbiAgICAvKipcbiAgICAgKiBUcnVlIHdoZW4gd2Ugc2hvdWxkIGdvIHRoZSBuZXh0IHN0ZXAgYXMgc29vbiBhcyBpdHMgc2VsZWN0b3IgaXNcbiAgICAgKiBhdmFpbGFibGUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYXV0b05leHQ/OiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogVHJ1ZSBpZiB3ZSBzaG91bGQgZGlzYWJsZSB0aGlzIHN0ZXAgb2YgdGhlIHRvdXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGlzYWJsZWQ/OiBib29sZWFuO1xuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW1hZ2VTdGVwIHtcbiAgICByZWFkb25seSB0aXRsZT86IFJlYWN0LlJlYWN0Tm9kZTtcbiAgICByZWFkb25seSBjb250ZW50OiBSZWFjdC5SZWFjdE5vZGU7XG4gICAgcmVhZG9ubHkgaW1hZ2U6IHN0cmluZyB8IFJlYWN0LlJlYWN0Tm9kZTtcbiAgICByZWFkb25seSB0YXJnZXQ6IHN0cmluZyB8IEhUTUxFbGVtZW50O1xuICAgIHJlYWRvbmx5IHBsYWNlbWVudD86IHBsYWNlbWVudDtcbiAgICByZWFkb25seSBhdXRvTmV4dD86IGJvb2xlYW47XG4gICAgcmVhZG9ubHkgaGlkZUJhY2tCdXR0b24/OiBib29sZWFuO1xuICAgIHJlYWRvbmx5IHNwb3RsaWdodENsaWNrcz86IGJvb2xlYW47XG4gICAgcmVhZG9ubHkgZGlzYWJsZWQ/OiBib29sZWFuO1xufVxuIl19