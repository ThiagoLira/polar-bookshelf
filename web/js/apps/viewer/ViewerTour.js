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
class ViewerTour extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.onCallback = this.onCallback.bind(this);
        const run = !LifecycleToggle_1.LifecycleToggle.isMarked(LifecycleEvents_1.LifecycleEvents.VIEWER_TOUR_TERMINATED) &&
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
                target: '.polar-sidebar',
                title: React.createElement(Title, null, "Document Viewer"),
                content: React.createElement("div", null,
                    React.createElement("p", null,
                        "This is the main document viewer and allows you to both view and ",
                        React.createElement(Term, null, "annotate"),
                        " documents."),
                    React.createElement("p", null, "It supports the following features: "),
                    React.createElement("ul", { style: { marginLeft: '20px' } },
                        React.createElement("li", null, "Keeping track of your reading with pagemarks."),
                        React.createElement("li", null, "Highlighting text within the document"),
                        React.createElement("li", null, "Creating comments and flashcards attached to these highlights."))),
                image: "/web/assets/images/doc.svg",
                placement: 'center'
            }),
            {
                target: '.polar-sidebar',
                title: React.createElement(Title, null, "Annotation Sidebar"),
                disableBeacon: true,
                placement: 'left-start',
                spotlightPadding: 0,
                content: React.createElement("div", null,
                    React.createElement("p", null,
                        "The ",
                        React.createElement(Term, null, "annotation sidebar"),
                        " lists all annotations on the current document including highlights , comments, and flashcards."))
            },
            {
                target: '#polar-progress',
                title: React.createElement(Title, null, "Progress Bar"),
                disableBeacon: true,
                spotlightPadding: 0,
                content: React.createElement("div", null,
                    React.createElement("p", null,
                        "The ",
                        React.createElement(Term, null, "progress bar"),
                        " keeps track of how much of the document you've read by using ",
                        React.createElement(Term, null, "pagemarks"),
                        "."),
                    React.createElement("p", null, "Pagemarks are manually created by the user while reading documents."),
                    React.createElement("p", null,
                        "To create a pagemark just ",
                        React.createElement(Term, null, "right click"),
                        " and select ",
                        React.createElement(Term, null, "Create Pagemark to Point"),
                        "."),
                    React.createElement("p", null, "Also, when using pagemarks we will automatically resume your reading by jumping to the point where you last left off."))
            },
            {
                target: '.annotation-sidebar .text-highlight',
                title: React.createElement(Title, null, "Text Highlights"),
                disableBeacon: true,
                spotlightPadding: 5,
                content: React.createElement("div", null,
                    React.createElement("p", null,
                        React.createElement(Term, null, "Text highlights"),
                        " are stored for easy reference on the annotation sidebar."),
                    React.createElement("p", null,
                        "This includes both associated ",
                        React.createElement(Term, null, "comments"),
                        " and ",
                        React.createElement(Term, null, "flashcards"),
                        ".")),
                placement: 'left'
            },
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
        RendererAnalytics_1.RendererAnalytics.event({ category: 'viewer-tour-steps', action: 'did-step-' + callbackProps.index });
        if (callbackProps.status === react_joyride_1.STATUS.SKIPPED || callbackProps.status === react_joyride_1.STATUS.FINISHED) {
            try {
                switch (callbackProps.status) {
                    case react_joyride_1.STATUS.SKIPPED:
                        RendererAnalytics_1.RendererAnalytics.event({ category: 'viewer-tour-result', action: 'skipped' });
                        RendererAnalytics_1.RendererAnalytics.event({ category: 'viewer-tour-skip', action: 'skipped-at-step-' + callbackProps.index });
                        LifecycleToggle_1.LifecycleToggle.mark(LifecycleEvents_1.LifecycleEvents.VIEWER_TOUR_SKIPPED);
                        break;
                    case react_joyride_1.STATUS.FINISHED:
                        RendererAnalytics_1.RendererAnalytics.event({ category: 'viewer-tour-result', action: 'finished' });
                        LifecycleToggle_1.LifecycleToggle.mark(LifecycleEvents_1.LifecycleEvents.VIEWER_TOUR_FINISHED);
                        break;
                }
            }
            finally {
                LifecycleToggle_1.LifecycleToggle.mark(LifecycleEvents_1.LifecycleEvents.VIEWER_TOUR_TERMINATED);
            }
        }
    }
}
exports.ViewerTour = ViewerTour;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmlld2VyVG91ci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlZpZXdlclRvdXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLCtEQUFtRTtBQUNuRSw2Q0FBK0I7QUFDL0IsbUVBQThEO0FBQzlELG1FQUE4RDtBQUM5RCxrRUFBNkQ7QUFDN0QsOERBQXlEO0FBQ3pELGlEQUE0QztBQUU1QyxNQUFhLE1BQU07O0FBQW5CLHdCQVdDO0FBVGlCLFVBQUcsR0FBd0I7SUFDckMsUUFBUSxFQUFFLE9BQU87SUFDakIsU0FBUyxFQUFFLE9BQU87SUFDbEIsWUFBWSxFQUFFLE1BQU07SUFDcEIsT0FBTyxFQUFFLE9BQU87SUFDaEIsVUFBVSxFQUFFLE1BQU07SUFDbEIsV0FBVyxFQUFFLE1BQU07Q0FDdEIsQ0FBQztBQUlOLE1BQWEsVUFBVyxTQUFRLEtBQUssQ0FBQyxTQUF5QjtJQUUzRCxZQUFZLEtBQWEsRUFBRSxPQUFZO1FBQ25DLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUU3QyxNQUFNLEdBQUcsR0FDTCxDQUFFLGlDQUFlLENBQUMsUUFBUSxDQUFDLGlDQUFlLENBQUMsc0JBQXNCLENBQUM7WUFDbEUsdUJBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUU1QixJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1QsR0FBRztTQUNOLENBQUM7SUFFTixDQUFDO0lBRU0sTUFBTTtRQUVULE1BQU0sSUFBSSxHQUFHLENBQUMsS0FBVSxFQUFFLEVBQUU7WUFDeEIsT0FBTztnQkFBRywrQkFBSSxLQUFLLENBQUMsUUFBUSxDQUFLLENBQUksQ0FBQztRQUMxQyxDQUFDLENBQUM7UUFFRixNQUFNLEtBQUssR0FBRyxDQUFDLEtBQVUsRUFBRSxFQUFFO1lBQ3pCLE9BQU8sNkJBQUssS0FBSyxF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LEtBQUssc0JBQU0sQ0FBQyxPQUFPO3dCQUNmLHFDQUFpQixDQUFDLEtBQUssQ0FBQyxFQUFDLFFBQVEsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFDLENBQUMsQ0FBQzt3QkFDN0UscUNBQWlCLENBQUMsS0FBSyxDQUFDLEVBQUMsUUFBUSxFQUFFLGtCQUFrQixFQUFFLE1BQU0sRUFBRSxrQkFBa0IsR0FBRyxhQUFhLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQzt3QkFFMUcsaUNBQWUsQ0FBQyxJQUFJLENBQUMsaUNBQWUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO3dCQUMxRCxNQUFNO29CQUVWLEtBQUssc0JBQU0sQ0FBQyxRQUFRO3dCQUNoQixxQ0FBaUIsQ0FBQyxLQUFLLENBQUMsRUFBQyxRQUFRLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBQyxDQUFDLENBQUM7d0JBRTlFLGlDQUFlLENBQUMsSUFBSSxDQUFDLGlDQUFlLENBQUMsb0JBQW9CLENBQUMsQ0FBQzt3QkFDM0QsTUFBTTtpQkFDYjthQUVKO29CQUFTO2dCQUNOLGlDQUFlLENBQUMsSUFBSSxDQUFDLGlDQUFlLENBQUMsc0JBQXNCLENBQUMsQ0FBQzthQUNoRTtTQUVKO0lBRUwsQ0FBQztDQUVKO0FBdk1ELGdDQXVNQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBKb3lyaWRlLCB7Q2FsbEJhY2tQcm9wcywgU3RlcCwgU1RBVFVTfSBmcm9tICdyZWFjdC1qb3lyaWRlJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7TGlmZWN5Y2xlVG9nZ2xlfSBmcm9tICcuLi8uLi91aS91dGlsL0xpZmVjeWNsZVRvZ2dsZSc7XG5pbXBvcnQge0xpZmVjeWNsZUV2ZW50c30gZnJvbSAnLi4vLi4vdWkvdXRpbC9MaWZlY3ljbGVFdmVudHMnO1xuaW1wb3J0IHtSZW5kZXJlckFuYWx5dGljc30gZnJvbSAnLi4vLi4vZ2EvUmVuZGVyZXJBbmFseXRpY3MnO1xuaW1wb3J0IHtKb3lyaWRlVG91cnN9IGZyb20gJy4uLy4uL3VpL3RvdXJzL0pveXJpZGVUb3Vycyc7XG5pbXBvcnQge0FwcFJ1bnRpbWV9IGZyb20gJy4uLy4uL0FwcFJ1bnRpbWUnO1xuXG5leHBvcnQgY2xhc3MgU3R5bGVzIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgSU1HOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xuICAgICAgICBtYXhXaWR0aDogJzQ1MHB4JyxcbiAgICAgICAgbWF4SGVpZ2h0OiAnMzI1cHgnLFxuICAgICAgICBtYXJnaW5Cb3R0b206ICcxMHB4JyxcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgbWFyZ2luTGVmdDogJ2F1dG8nLFxuICAgICAgICBtYXJnaW5SaWdodDogJ2F1dG8nLFxuICAgIH07XG5cbn1cblxuZXhwb3J0IGNsYXNzIFZpZXdlclRvdXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJUHJvcHMsIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG5cbiAgICAgICAgdGhpcy5vbkNhbGxiYWNrID0gdGhpcy5vbkNhbGxiYWNrLmJpbmQodGhpcyk7XG5cbiAgICAgICAgY29uc3QgcnVuID1cbiAgICAgICAgICAgICEgTGlmZWN5Y2xlVG9nZ2xlLmlzTWFya2VkKExpZmVjeWNsZUV2ZW50cy5WSUVXRVJfVE9VUl9URVJNSU5BVEVEKSAmJlxuICAgICAgICAgICAgQXBwUnVudGltZS5pc0VsZWN0cm9uKCk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHJ1blxuICAgICAgICB9O1xuXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICBjb25zdCBUZXJtID0gKHByb3BzOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiA8Yj48aT57cHJvcHMuY2hpbGRyZW59PC9pPjwvYj47XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgVGl0bGUgPSAocHJvcHM6IGFueSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIDxkaXYgc3R5bGU9e3tmb250U2l6ZTogJzIycHgnfX0+e3Byb3BzLmNoaWxkcmVufTwvZGl2PjtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBzdGVwczogU3RlcFtdID0gW1xuICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgLy8gICAgIHRhcmdldDogJy5wb2xhci1zaWRlYmFyJyxcbiAgICAgICAgICAgIC8vICAgICBjb250ZW50OiA8ZGl2PlxuICAgICAgICAgICAgLy8gICAgICAgICA8aDI+RG9jdW1lbnQgVmlld2VyPC9oMj5cbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyAgICAgICAgIDxpbWcgc3JjPVwiL3dlYi9hc3NldHMvaW1hZ2VzL2RvYy5zdmdcIiBzdHlsZT17U3R5bGVzLklNR30vPlxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyAgICAgPC9kaXY+LFxuICAgICAgICAgICAgLy8gICAgIHN0eWxlczoge1xuICAgICAgICAgICAgLy8gICAgICAgICB0b29sdGlwOiB7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB3aWR0aDogJzY1MHB4J1xuICAgICAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgICAgICAvLyAgICAgfSxcbiAgICAgICAgICAgIC8vICAgICBkaXNhYmxlQmVhY29uOiB0cnVlLFxuICAgICAgICAgICAgLy8gICAgIHBsYWNlbWVudDogJ2NlbnRlcidcbiAgICAgICAgICAgIC8vIH0sXG5cbiAgICAgICAgICAgIEpveXJpZGVUb3Vycy5jcmVhdGVJbWFnZVN0ZXAoe1xuICAgICAgICAgICAgICAgIHRhcmdldDogJy5wb2xhci1zaWRlYmFyJyxcbiAgICAgICAgICAgICAgICB0aXRsZTogPFRpdGxlPkRvY3VtZW50IFZpZXdlcjwvVGl0bGU+LFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyBpcyB0aGUgbWFpbiBkb2N1bWVudCB2aWV3ZXIgYW5kIGFsbG93cyB5b3UgdG8gYm90aFxuICAgICAgICAgICAgICAgICAgICAgICAgdmlldyBhbmQgPFRlcm0+YW5ub3RhdGU8L1Rlcm0+IGRvY3VtZW50cy5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgIDxwPkl0IHN1cHBvcnRzIHRoZSBmb2xsb3dpbmcgZmVhdHVyZXM6IDwvcD5cblxuICAgICAgICAgICAgICAgICAgICA8dWwgc3R5bGU9e3ttYXJnaW5MZWZ0OiAnMjBweCd9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5LZWVwaW5nIHRyYWNrIG9mIHlvdXIgcmVhZGluZyB3aXRoIHBhZ2VtYXJrcy48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkhpZ2hsaWdodGluZyB0ZXh0IHdpdGhpbiB0aGUgZG9jdW1lbnQ8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkNyZWF0aW5nIGNvbW1lbnRzIGFuZCBmbGFzaGNhcmRzIGF0dGFjaGVkIHRvIHRoZXNlIGhpZ2hsaWdodHMuPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj4sXG4gICAgICAgICAgICAgICAgaW1hZ2U6IFwiL3dlYi9hc3NldHMvaW1hZ2VzL2RvYy5zdmdcIixcbiAgICAgICAgICAgICAgICBwbGFjZW1lbnQ6ICdjZW50ZXInXG4gICAgICAgICAgICB9KSxcblxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRhcmdldDogJy5wb2xhci1zaWRlYmFyJyxcbiAgICAgICAgICAgICAgICB0aXRsZTogPFRpdGxlPkFubm90YXRpb24gU2lkZWJhcjwvVGl0bGU+LFxuICAgICAgICAgICAgICAgIGRpc2FibGVCZWFjb246IHRydWUsXG4gICAgICAgICAgICAgICAgcGxhY2VtZW50OiAnbGVmdC1zdGFydCcsXG4gICAgICAgICAgICAgICAgc3BvdGxpZ2h0UGFkZGluZzogMCxcbiAgICAgICAgICAgICAgICBjb250ZW50OiA8ZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxwPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICBUaGUgPFRlcm0+YW5ub3RhdGlvbiBzaWRlYmFyPC9UZXJtPiBsaXN0cyBhbGxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFubm90YXRpb25zIG9uIHRoZSBjdXJyZW50IGRvY3VtZW50IGluY2x1ZGluZyBoaWdobGlnaHRzXG4gICAgICAgICAgICAgICAgICAgICAgICAsIGNvbW1lbnRzLCBhbmQgZmxhc2hjYXJkcy5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0OiAnI3BvbGFyLXByb2dyZXNzJyxcbiAgICAgICAgICAgICAgICB0aXRsZTogPFRpdGxlPlByb2dyZXNzIEJhcjwvVGl0bGU+LFxuICAgICAgICAgICAgICAgIGRpc2FibGVCZWFjb246IHRydWUsXG4gICAgICAgICAgICAgICAgc3BvdGxpZ2h0UGFkZGluZzogMCxcbiAgICAgICAgICAgICAgICBjb250ZW50OiA8ZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgVGhlIDxUZXJtPnByb2dyZXNzIGJhcjwvVGVybT4ga2VlcHMgdHJhY2sgb2YgaG93IG11Y2hcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mIHRoZSBkb2N1bWVudCB5b3UndmUgcmVhZCBieSB1c2luZyA8VGVybT5wYWdlbWFya3M8L1Rlcm0+LlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICBQYWdlbWFya3MgYXJlIG1hbnVhbGx5IGNyZWF0ZWQgYnkgdGhlIHVzZXIgd2hpbGUgcmVhZGluZyBkb2N1bWVudHMuXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIFRvIGNyZWF0ZSBhIHBhZ2VtYXJrIGp1c3QgPFRlcm0+cmlnaHQgY2xpY2s8L1Rlcm0+IGFuZFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0IDxUZXJtPkNyZWF0ZSBQYWdlbWFyayB0byBQb2ludDwvVGVybT4uXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIEFsc28sIHdoZW4gdXNpbmcgcGFnZW1hcmtzIHdlIHdpbGwgYXV0b21hdGljYWxseSByZXN1bWVcbiAgICAgICAgICAgICAgICAgICAgICAgIHlvdXIgcmVhZGluZyBieSBqdW1waW5nIHRvIHRoZSBwb2ludCB3aGVyZSB5b3UgbGFzdCBsZWZ0XG4gICAgICAgICAgICAgICAgICAgICAgICBvZmYuXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRhcmdldDogJy5hbm5vdGF0aW9uLXNpZGViYXIgLnRleHQtaGlnaGxpZ2h0JyxcbiAgICAgICAgICAgICAgICB0aXRsZTogPFRpdGxlPlRleHQgSGlnaGxpZ2h0czwvVGl0bGU+LFxuICAgICAgICAgICAgICAgIGRpc2FibGVCZWFjb246IHRydWUsXG4gICAgICAgICAgICAgICAgc3BvdGxpZ2h0UGFkZGluZzogNSxcbiAgICAgICAgICAgICAgICBjb250ZW50OiA8ZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRlcm0+VGV4dCBoaWdobGlnaHRzPC9UZXJtPiBhcmUgc3RvcmVkIGZvciBlYXN5XG4gICAgICAgICAgICAgICAgICAgICAgICByZWZlcmVuY2Ugb24gdGhlIGFubm90YXRpb24gc2lkZWJhci5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyBpbmNsdWRlcyBib3RoXG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NvY2lhdGVkIDxUZXJtPmNvbW1lbnRzPC9UZXJtPiBhbmQgPFRlcm0+Zmxhc2hjYXJkczwvVGVybT4uXG5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+LFxuICAgICAgICAgICAgICAgIHBsYWNlbWVudDogJ2xlZnQnXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgIF07XG5cbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgPEpveXJpZGVcbiAgICAgICAgICAgICAgICBzdGVwcz17c3RlcHN9XG4gICAgICAgICAgICAgICAgY29udGludW91cz17dHJ1ZX1cbiAgICAgICAgICAgICAgICBjYWxsYmFjaz17ZGF0YSA9PiB0aGlzLm9uQ2FsbGJhY2soZGF0YSl9XG4gICAgICAgICAgICAgICAgcnVuPXt0aGlzLnN0YXRlLnJ1bn1cbiAgICAgICAgICAgICAgICBzaG93UHJvZ3Jlc3M9e3RydWV9XG4gICAgICAgICAgICAgICAgc2hvd1NraXBCdXR0b249e3RydWV9XG4gICAgICAgICAgICAgICAgc3R5bGVzPXt7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFycm93Q29sb3I6ICcjZTNmZmViJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJhY2tncm91bmRDb2xvcjogJyNlM2ZmZWInLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gb3ZlcmxheUNvbG9yOiAncmdiYSg3OSwgMjYsIDAsIDAuNCknLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpbWFyeUNvbG9yOiAnIzAwN2JmZicsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0ZXh0Q29sb3I6ICcjMDA0YTE0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdpZHRoOiA5MDAsXG4gICAgICAgICAgICAgICAgICAgICAgICB6SW5kZXg6IDk5OTk5OTk5OSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdG9vbHRpcENvbnRhaW5lcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnbGVmdCcsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cblxuICAgICAgICApO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkNhbGxiYWNrKGNhbGxiYWNrUHJvcHM6IENhbGxCYWNrUHJvcHMpOiB2b2lkIHtcblxuICAgICAgICBSZW5kZXJlckFuYWx5dGljcy5ldmVudCh7Y2F0ZWdvcnk6ICd2aWV3ZXItdG91ci1zdGVwcycsIGFjdGlvbjogJ2RpZC1zdGVwLScgKyBjYWxsYmFja1Byb3BzLmluZGV4fSk7XG5cbiAgICAgICAgaWYgKGNhbGxiYWNrUHJvcHMuc3RhdHVzID09PSBTVEFUVVMuU0tJUFBFRCB8fCBjYWxsYmFja1Byb3BzLnN0YXR1cyA9PT0gU1RBVFVTLkZJTklTSEVEKSB7XG5cbiAgICAgICAgICAgIHRyeSB7XG5cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGNhbGxiYWNrUHJvcHMuc3RhdHVzKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBTVEFUVVMuU0tJUFBFRDpcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlbmRlcmVyQW5hbHl0aWNzLmV2ZW50KHtjYXRlZ29yeTogJ3ZpZXdlci10b3VyLXJlc3VsdCcsIGFjdGlvbjogJ3NraXBwZWQnfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBSZW5kZXJlckFuYWx5dGljcy5ldmVudCh7Y2F0ZWdvcnk6ICd2aWV3ZXItdG91ci1za2lwJywgYWN0aW9uOiAnc2tpcHBlZC1hdC1zdGVwLScgKyBjYWxsYmFja1Byb3BzLmluZGV4fSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIExpZmVjeWNsZVRvZ2dsZS5tYXJrKExpZmVjeWNsZUV2ZW50cy5WSUVXRVJfVE9VUl9TS0lQUEVEKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgU1RBVFVTLkZJTklTSEVEOlxuICAgICAgICAgICAgICAgICAgICAgICAgUmVuZGVyZXJBbmFseXRpY3MuZXZlbnQoe2NhdGVnb3J5OiAndmlld2VyLXRvdXItcmVzdWx0JywgYWN0aW9uOiAnZmluaXNoZWQnfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIExpZmVjeWNsZVRvZ2dsZS5tYXJrKExpZmVjeWNsZUV2ZW50cy5WSUVXRVJfVE9VUl9GSU5JU0hFRCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgTGlmZWN5Y2xlVG9nZ2xlLm1hcmsoTGlmZWN5Y2xlRXZlbnRzLlZJRVdFUl9UT1VSX1RFUk1JTkFURUQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElQcm9wcyB7XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJU3RhdGUge1xuICAgIHJlYWRvbmx5IHJ1bjogYm9vbGVhbjtcbn1cbiJdfQ==