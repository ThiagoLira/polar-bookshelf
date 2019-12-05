"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_joyride_1 = __importStar(require("react-joyride"));
const React = __importStar(require("react"));
const LifecycleToggle_1 = require("../../ui/util/LifecycleToggle");
const LifecycleEvents_1 = require("../../ui/util/LifecycleEvents");
const RendererAnalytics_1 = require("../../ga/RendererAnalytics");
const JoyrideTours_1 = require("../../ui/tours/JoyrideTours");
const AppRuntime_1 = require("../../AppRuntime");
class Styles {
}
exports.Styles = Styles;
Styles.IMG = {
    maxWidth: '450px',
    maxHeight: '325px',
    marginBottom: '10px',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
};
class PreviewTour extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.onCallback = this.onCallback.bind(this);
        const run = !LifecycleToggle_1.LifecycleToggle.isMarked(LifecycleEvents_1.LifecycleEvents.PREVIEW_TOUR_TERMINATED) &&
            AppRuntime_1.AppRuntime.isElectron();
        this.state = {
            run
        };
    }
    render() {
        const Term = (props) => {
            return React.createElement("b", null,
                React.createElement("i", null, props.children));
        };
        const Title = (props) => {
            return React.createElement("div", { style: { fontSize: '22px' } }, props.children);
        };
        const steps = [
            JoyrideTours_1.JoyrideTours.createImageStep({
                target: 'header',
                content: React.createElement("div", null,
                    React.createElement("h2", { className: "text-center" }, "Welcome to Polar!"),
                    React.createElement("p", null, "This is the document preview window in Polar."),
                    React.createElement("p", null, "Polar allows you to:"),
                    React.createElement("ul", null,
                        React.createElement("li", null, "Keep all your documents in one place."),
                        React.createElement("li", null,
                            "Easily keep track of your reading with ",
                            React.createElement("b", null, "pagemarks"),
                            " and ",
                            React.createElement("b", null, "stats tracking"),
                            "."),
                        React.createElement("li", null,
                            React.createElement("b", null, "Annotate"),
                            ", ",
                            React.createElement("b", null, "tag"),
                            ", and ",
                            React.createElement("span", { className: "text-dark", style: { backgroundColor: 'yellow' } },
                                React.createElement("b", null, "highlight")),
                            " all your documents and build a personal knowledge repository.")),
                    React.createElement("p", null,
                        "Additionally, Polar supports ",
                        React.createElement("b", null, "not just PDF"),
                        " documents but capturing ",
                        React.createElement("b", null, "web content"),
                        " and storing it offline in your archive in perpetuity."),
                    React.createElement("p", null, "The tour should take about 60 seconds.")),
                image: "/icon.png",
                placement: 'center'
            }),
            JoyrideTours_1.JoyrideTours.createImageStep({
                target: '.polar-sidebar',
                title: React.createElement(Title, null, "Document Viewer"),
                content: React.createElement("div", null,
                    React.createElement("p", null,
                        "This is the main document viewer and allows you to both view and ",
                        React.createElement(Term, null, "annotate"),
                        " documents.")),
                image: "/web/assets/images/doc.svg",
                placement: 'center'
            }),
        ];
        return (React.createElement(react_joyride_1.default, { steps: steps, continuous: true, callback: data => this.onCallback(data), run: this.state.run, showProgress: true, showSkipButton: true, styles: {
                options: {
                    primaryColor: '#007bff',
                    zIndex: 999999999,
                },
                tooltipContainer: {
                    textAlign: 'left',
                }
            } }));
    }
    onCallback(callbackProps) {
        RendererAnalytics_1.RendererAnalytics.event({ category: 'preview-tour-steps', action: 'did-step-' + callbackProps.index });
        if (callbackProps.status === react_joyride_1.STATUS.SKIPPED || callbackProps.status === react_joyride_1.STATUS.FINISHED) {
            try {
                switch (callbackProps.status) {
                    case react_joyride_1.STATUS.SKIPPED:
                        RendererAnalytics_1.RendererAnalytics.event({ category: 'preview-tour-result', action: 'skipped' });
                        RendererAnalytics_1.RendererAnalytics.event({ category: 'preview-tour-skip', action: 'skipped-at-step-' + callbackProps.index });
                        LifecycleToggle_1.LifecycleToggle.mark(LifecycleEvents_1.LifecycleEvents.PREVIEW_TOUR_SKIPPED);
                        break;
                    case react_joyride_1.STATUS.FINISHED:
                        RendererAnalytics_1.RendererAnalytics.event({ category: 'preview-tour-result', action: 'finished' });
                        LifecycleToggle_1.LifecycleToggle.mark(LifecycleEvents_1.LifecycleEvents.PREVIEW_TOUR_FINISHED);
                        break;
                }
            }
            finally {
                LifecycleToggle_1.LifecycleToggle.mark(LifecycleEvents_1.LifecycleEvents.PREVIEW_TOUR_TERMINATED);
            }
        }
    }
}
exports.PreviewTour = PreviewTour;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJldmlld1RvdXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJQcmV2aWV3VG91ci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsK0RBQW1FO0FBQ25FLDZDQUErQjtBQUMvQixtRUFBOEQ7QUFDOUQsbUVBQThEO0FBQzlELGtFQUE2RDtBQUM3RCw4REFBeUQ7QUFDekQsaURBQTRDO0FBRTVDLE1BQWEsTUFBTTs7QUFBbkIsd0JBV0M7QUFUaUIsVUFBRyxHQUF3QjtJQUNyQyxRQUFRLEVBQUUsT0FBTztJQUNqQixTQUFTLEVBQUUsT0FBTztJQUNsQixZQUFZLEVBQUUsTUFBTTtJQUNwQixPQUFPLEVBQUUsT0FBTztJQUNoQixVQUFVLEVBQUUsTUFBTTtJQUNsQixXQUFXLEVBQUUsTUFBTTtDQUN0QixDQUFDO0FBT04sTUFBYSxXQUFZLFNBQVEsS0FBSyxDQUFDLFNBQXlCO0lBRTVELFlBQVksS0FBYSxFQUFFLE9BQVk7UUFDbkMsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztRQUV0QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTdDLE1BQU0sR0FBRyxHQUNMLENBQUUsaUNBQWUsQ0FBQyxRQUFRLENBQUMsaUNBQWUsQ0FBQyx1QkFBdUIsQ0FBQztZQUNuRSx1QkFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBRTVCLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDVCxHQUFHO1NBQ04sQ0FBQztJQUVOLENBQUM7SUFFTSxNQUFNO1FBRVQsTUFBTSxJQUFJLEdBQUcsQ0FBQyxLQUFVLEVBQUUsRUFBRTtZQUN4QixPQUFPO2dCQUFHLCtCQUFJLEtBQUssQ0FBQyxRQUFRLENBQUssQ0FBSSxDQUFDO1FBQzFDLENBQUMsQ0FBQztRQUVGLE1BQU0sS0FBSyxHQUFHLENBQUMsS0FBVSxFQUFFLEVBQUU7WUFDekIsT0FBTyw2QkFBSyxLQUFL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Q0FBQyxpQ0FBZSxDQUFDLHFCQUFxQixDQUFDLENBQUM7d0JBQzVELE1BQU07aUJBQ2I7YUFFSjtvQkFBUztnQkFDTixpQ0FBZSxDQUFDLElBQUksQ0FBQyxpQ0FBZSxDQUFDLHVCQUF1QixDQUFDLENBQUM7YUFDakU7U0FFSjtJQUVMLENBQUM7Q0FFSjtBQTlKRCxrQ0E4SkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSm95cmlkZSwge0NhbGxCYWNrUHJvcHMsIFN0ZXAsIFNUQVRVU30gZnJvbSAncmVhY3Qtam95cmlkZSc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0xpZmVjeWNsZVRvZ2dsZX0gZnJvbSAnLi4vLi4vdWkvdXRpbC9MaWZlY3ljbGVUb2dnbGUnO1xuaW1wb3J0IHtMaWZlY3ljbGVFdmVudHN9IGZyb20gJy4uLy4uL3VpL3V0aWwvTGlmZWN5Y2xlRXZlbnRzJztcbmltcG9ydCB7UmVuZGVyZXJBbmFseXRpY3N9IGZyb20gJy4uLy4uL2dhL1JlbmRlcmVyQW5hbHl0aWNzJztcbmltcG9ydCB7Sm95cmlkZVRvdXJzfSBmcm9tICcuLi8uLi91aS90b3Vycy9Kb3lyaWRlVG91cnMnO1xuaW1wb3J0IHtBcHBSdW50aW1lfSBmcm9tICcuLi8uLi9BcHBSdW50aW1lJztcblxuZXhwb3J0IGNsYXNzIFN0eWxlcyB7XG5cbiAgICBwdWJsaWMgc3RhdGljIElNRzogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcbiAgICAgICAgbWF4V2lkdGg6ICc0NTBweCcsXG4gICAgICAgIG1heEhlaWdodDogJzMyNXB4JyxcbiAgICAgICAgbWFyZ2luQm90dG9tOiAnMTBweCcsXG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIG1hcmdpbkxlZnQ6ICdhdXRvJyxcbiAgICAgICAgbWFyZ2luUmlnaHQ6ICdhdXRvJyxcbiAgICB9O1xuXG59XG5cbi8qKlxuICogVG91ciBvZiB0aGUgcHJldmlldyB2aWV3ZXIgdG8gdGVsbCB0aGVtIHdoYXQgdG8gZG8gYWJvdXQgdGhlIGFkZC1jb250ZW50IGJ1dHRvblxuICovXG5leHBvcnQgY2xhc3MgUHJldmlld1RvdXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJUHJvcHMsIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG5cbiAgICAgICAgdGhpcy5vbkNhbGxiYWNrID0gdGhpcy5vbkNhbGxiYWNrLmJpbmQodGhpcyk7XG5cbiAgICAgICAgY29uc3QgcnVuID1cbiAgICAgICAgICAgICEgTGlmZWN5Y2xlVG9nZ2xlLmlzTWFya2VkKExpZmVjeWNsZUV2ZW50cy5QUkVWSUVXX1RPVVJfVEVSTUlOQVRFRCkgJiZcbiAgICAgICAgICAgIEFwcFJ1bnRpbWUuaXNFbGVjdHJvbigpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBydW5cbiAgICAgICAgfTtcblxuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgY29uc3QgVGVybSA9IChwcm9wczogYW55KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gPGI+PGk+e3Byb3BzLmNoaWxkcmVufTwvaT48L2I+O1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IFRpdGxlID0gKHByb3BzOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiA8ZGl2IHN0eWxlPXt7Zm9udFNpemU6ICcyMnB4J319Pntwcm9wcy5jaGlsZHJlbn08L2Rpdj47XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3Qgc3RlcHM6IFN0ZXBbXSA9IFtcbiAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgIC8vICAgICB0YXJnZXQ6ICcucG9sYXItc2lkZWJhcicsXG4gICAgICAgICAgICAvLyAgICAgY29udGVudDogPGRpdj5cbiAgICAgICAgICAgIC8vICAgICAgICAgPGgyPkRvY3VtZW50IFZpZXdlcjwvaDI+XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gICAgICAgICA8aW1nIHNyYz1cIi93ZWIvYXNzZXRzL2ltYWdlcy9kb2Muc3ZnXCIgc3R5bGU9e1N0eWxlcy5JTUd9Lz5cbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gICAgIDwvZGl2PixcbiAgICAgICAgICAgIC8vICAgICBzdHlsZXM6IHtcbiAgICAgICAgICAgIC8vICAgICAgICAgdG9vbHRpcDoge1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgd2lkdGg6ICc2NTBweCdcbiAgICAgICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAgICAgLy8gICAgIH0sXG4gICAgICAgICAgICAvLyAgICAgZGlzYWJsZUJlYWNvbjogdHJ1ZSxcbiAgICAgICAgICAgIC8vICAgICBwbGFjZW1lbnQ6ICdjZW50ZXInXG4gICAgICAgICAgICAvLyB9LFxuXG4gICAgICAgICAgICBKb3lyaWRlVG91cnMuY3JlYXRlSW1hZ2VTdGVwKHtcbiAgICAgICAgICAgICAgICB0YXJnZXQ6ICdoZWFkZXInLFxuICAgICAgICAgICAgICAgIC8vIHRpdGxlOiA8VGl0bGU+RG9jdW1lbnQgUmVwb3NpdG9yeTwvVGl0bGU+LFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPldlbGNvbWUgdG8gUG9sYXIhPC9oMj5cblxuICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMgaXMgdGhlIGRvY3VtZW50IHByZXZpZXcgd2luZG93IGluIFBvbGFyLlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICBQb2xhciBhbGxvd3MgeW91IHRvOlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgPHVsPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+S2VlcCBhbGwgeW91ciBkb2N1bWVudHMgaW4gb25lIHBsYWNlLjwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5FYXNpbHkga2VlcCB0cmFjayBvZiB5b3VyIHJlYWRpbmcgd2l0aCA8Yj5wYWdlbWFya3M8L2I+IGFuZCA8Yj5zdGF0cyB0cmFja2luZzwvYj4uPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxiPkFubm90YXRlPC9iPiwgPGI+dGFnPC9iPiwgYW5kIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZGFya1wiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAneWVsbG93J319PjxiPmhpZ2hsaWdodDwvYj48L3NwYW4+IGFsbCB5b3VyIGRvY3VtZW50cyBhbmQgYnVpbGQgYSBwZXJzb25hbCBrbm93bGVkZ2UgcmVwb3NpdG9yeS48L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICBBZGRpdGlvbmFsbHksIFBvbGFyIHN1cHBvcnRzIDxiPm5vdCBqdXN0IFBERjwvYj4gZG9jdW1lbnRzXG4gICAgICAgICAgICAgICAgICAgICAgICBidXQgY2FwdHVyaW5nIDxiPndlYiBjb250ZW50PC9iPiBhbmQgc3RvcmluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgaXQgb2ZmbGluZSBpbiB5b3VyIGFyY2hpdmUgaW4gcGVycGV0dWl0eS5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgVGhlIHRvdXIgc2hvdWxkIHRha2UgYWJvdXQgNjAgc2Vjb25kcy5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+LFxuICAgICAgICAgICAgICAgIGltYWdlOiBcIi9pY29uLnBuZ1wiLFxuICAgICAgICAgICAgICAgIHBsYWNlbWVudDogJ2NlbnRlcidcblxuICAgICAgICAgICAgfSksXG5cbiAgICAgICAgICAgIEpveXJpZGVUb3Vycy5jcmVhdGVJbWFnZVN0ZXAoe1xuICAgICAgICAgICAgICAgIHRhcmdldDogJy5wb2xhci1zaWRlYmFyJyxcbiAgICAgICAgICAgICAgICB0aXRsZTogPFRpdGxlPkRvY3VtZW50IFZpZXdlcjwvVGl0bGU+LFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyBpcyB0aGUgbWFpbiBkb2N1bWVudCB2aWV3ZXIgYW5kIGFsbG93cyB5b3UgdG8gYm90aFxuICAgICAgICAgICAgICAgICAgICAgICAgdmlldyBhbmQgPFRlcm0+YW5ub3RhdGU8L1Rlcm0+IGRvY3VtZW50cy5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+LFxuICAgICAgICAgICAgICAgIGltYWdlOiBcIi93ZWIvYXNzZXRzL2ltYWdlcy9kb2Muc3ZnXCIsXG4gICAgICAgICAgICAgICAgcGxhY2VtZW50OiAnY2VudGVyJ1xuICAgICAgICAgICAgfSksXG5cbiAgICAgICAgXTtcblxuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICA8Sm95cmlkZVxuICAgICAgICAgICAgICAgIHN0ZXBzPXtzdGVwc31cbiAgICAgICAgICAgICAgICBjb250aW51b3VzPXt0cnVlfVxuICAgICAgICAgICAgICAgIGNhbGxiYWNrPXtkYXRhID0+IHRoaXMub25DYWxsYmFjayhkYXRhKX1cbiAgICAgICAgICAgICAgICBydW49e3RoaXMuc3RhdGUucnVufVxuICAgICAgICAgICAgICAgIHNob3dQcm9ncmVzcz17dHJ1ZX1cbiAgICAgICAgICAgICAgICBzaG93U2tpcEJ1dHRvbj17dHJ1ZX1cbiAgICAgICAgICAgICAgICBzdHlsZXM9e3tcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJpbWFyeUNvbG9yOiAnIzAwN2JmZicsXG4gICAgICAgICAgICAgICAgICAgICAgICB6SW5kZXg6IDk5OTk5OTk5OSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdG9vbHRpcENvbnRhaW5lcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnbGVmdCcsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cblxuICAgICAgICApO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkNhbGxiYWNrKGNhbGxiYWNrUHJvcHM6IENhbGxCYWNrUHJvcHMpOiB2b2lkIHtcblxuICAgICAgICBSZW5kZXJlckFuYWx5dGljcy5ldmVudCh7Y2F0ZWdvcnk6ICdwcmV2aWV3LXRvdXItc3RlcHMnLCBhY3Rpb246ICdkaWQtc3RlcC0nICsgY2FsbGJhY2tQcm9wcy5pbmRleH0pO1xuXG4gICAgICAgIGlmIChjYWxsYmFja1Byb3BzLnN0YXR1cyA9PT0gU1RBVFVTLlNLSVBQRUQgfHwgY2FsbGJhY2tQcm9wcy5zdGF0dXMgPT09IFNUQVRVUy5GSU5JU0hFRCkge1xuXG4gICAgICAgICAgICB0cnkge1xuXG4gICAgICAgICAgICAgICAgc3dpdGNoIChjYWxsYmFja1Byb3BzLnN0YXR1cykge1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgU1RBVFVTLlNLSVBQRUQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBSZW5kZXJlckFuYWx5dGljcy5ldmVudCh7Y2F0ZWdvcnk6ICdwcmV2aWV3LXRvdXItcmVzdWx0JywgYWN0aW9uOiAnc2tpcHBlZCd9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlbmRlcmVyQW5hbHl0aWNzLmV2ZW50KHtjYXRlZ29yeTogJ3ByZXZpZXctdG91ci1za2lwJywgYWN0aW9uOiAnc2tpcHBlZC1hdC1zdGVwLScgKyBjYWxsYmFja1Byb3BzLmluZGV4fSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIExpZmVjeWNsZVRvZ2dsZS5tYXJrKExpZmVjeWNsZUV2ZW50cy5QUkVWSUVXX1RPVVJfU0tJUFBFRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICBjYXNlIFNUQVRVUy5GSU5JU0hFRDpcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlbmRlcmVyQW5hbHl0aWNzLmV2ZW50KHtjYXRlZ29yeTogJ3ByZXZpZXctdG91ci1yZXN1bHQnLCBhY3Rpb246ICdmaW5pc2hlZCd9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgTGlmZWN5Y2xlVG9nZ2xlLm1hcmsoTGlmZWN5Y2xlRXZlbnRzLlBSRVZJRVdfVE9VUl9GSU5JU0hFRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgTGlmZWN5Y2xlVG9nZ2xlLm1hcmsoTGlmZWN5Y2xlRXZlbnRzLlBSRVZJRVdfVE9VUl9URVJNSU5BVEVEKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUHJvcHMge1xuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVN0YXRlIHtcbiAgICByZWFkb25seSBydW46IGJvb2xlYW47XG59XG4iXX0=