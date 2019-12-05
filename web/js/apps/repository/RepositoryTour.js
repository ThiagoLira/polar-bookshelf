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
const Logger_1 = require("polar-shared/src/logger/Logger");
const JoyrideTours_1 = require("../../ui/tours/JoyrideTours");
const AppRuntime_1 = require("../../AppRuntime");
const Platforms_1 = require("polar-shared/src/util/Platforms");
const log = Logger_1.Logger.create();
const Z_INDEX = 100000;
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
Styles.SPLIT_BAR_IMG = {
    maxWidth: '225px',
    maxHeight: '225px',
    marginBottom: '10px',
    display: 'block',
    marginLeft: '5px',
    marginRight: '5px',
};
class RepositoryTour extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.onCallback = this.onCallback.bind(this);
        this.createSteps = this.createSteps.bind(this);
        this.steps = this.createSteps();
        const run = !LifecycleToggle_1.LifecycleToggle.isMarked(LifecycleEvents_1.LifecycleEvents.TOUR_TERMINATED);
        this.state = {
            run,
            stepIndex: 0
        };
    }
    render() {
        if (Platforms_1.Platforms.isMobile()) {
            return React.createElement("div", null);
        }
        return (React.createElement(react_joyride_1.default, { steps: this.steps, continuous: true, callback: data => this.onCallback(data), run: this.state.run, showProgress: true, showSkipButton: true, stepIndex: this.state.stepIndex, styles: {
                options: {
                    primaryColor: '#007bff',
                    zIndex: Z_INDEX,
                },
                tooltipContainer: {
                    textAlign: 'left',
                }
            } }));
    }
    createSteps() {
        const Term = (props) => {
            return React.createElement("b", null,
                React.createElement("i", null, props.children));
        };
        const Title = (props) => {
            return React.createElement("div", { style: {
                    fontSize: '22px',
                    marginLeft: '10px'
                } }, props.children);
        };
        const Icon = (props) => {
            return React.createElement("div", { className: "text-primary" },
                React.createElement("i", { className: props.className, style: {
                        fontSize: '175px',
                        marginLeft: '5px',
                    } }));
        };
        const steps = [
            JoyrideTours_1.JoyrideTours.createImageStep({
                target: 'header',
                content: React.createElement("div", null,
                    React.createElement("h2", { className: "text-center" }, "Welcome to Polar!"),
                    React.createElement("p", null, "We're going to give you a quick tour of how to use the main features in Polar."),
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
                            " all your documents and build a personal knowledge repository."),
                        React.createElement("li", null,
                            "Use ",
                            React.createElement("b", null, "spaced repetition"),
                            " and ",
                            React.createElement("b", null, "incremental reading"),
                            " to help you permanently remember everything you study!")),
                    React.createElement("p", null,
                        "Additionally, Polar supports ",
                        React.createElement("b", null, "not just PDF"),
                        " documents but capturing ",
                        React.createElement("b", null, "web content"),
                        " and storing it offline in your archive - forever!"),
                    React.createElement("p", null, "The tour should take about 60 seconds.")),
                image: "/icon.png",
                placement: 'center'
            }),
            JoyrideTours_1.JoyrideTours.createImageStep({
                target: 'header',
                title: React.createElement(Title, null, "Web, Desktop and Cloud."),
                content: React.createElement("div", null,
                    React.createElement("p", null,
                        "You're using the ",
                        React.createElement("b", null, "web"),
                        " version of Polar."),
                    React.createElement("p", null,
                        "Polar works on both the desktop (MacOS, Windows, and Linux) as well as the web (Chrome, Firefox, and major browsers) and is ",
                        React.createElement("b", null, "fully cloud aware"),
                        "."),
                    React.createElement("p", null,
                        "If you use the desktop version of Polar you can enable cloud sync which will ",
                        React.createElement("b", null, "keep all your documents in sync"),
                        " across all your devices and the web - and in near realtime!"),
                    React.createElement("p", null, "Note that the web version is missing a few features including Anki sync and web page capture and only supports PDF documents at the moment.")),
                image: "/web/assets/images/web.svg",
                placement: 'center',
                disabled: AppRuntime_1.AppRuntime.isElectron()
            }),
            JoyrideTours_1.JoyrideTours.createImageStep({
                target: '#nav-tab-document-repository',
                title: React.createElement(Title, null, "Document Repository"),
                content: React.createElement("div", null,
                    React.createElement("p", null,
                        "Your documents are kept here in the ",
                        React.createElement(Term, null, "document repository"),
                        " and can be opened by ",
                        React.createElement(Term, null, "double clicking"),
                        "."),
                    React.createElement("p", null,
                        "We went ahead and added some ",
                        React.createElement("b", null, "sample documents"),
                        " so you can see what Polar looks like in action.  You can just delete them once the tour is finished.")),
                image: "/web/assets/images/files.svg"
            }),
            JoyrideTours_1.JoyrideTours.createImageStep({
                target: '#add-content-dropdown',
                title: React.createElement(Title, null, "Add Documents"),
                content: React.createElement("div", null,
                    React.createElement("p", null,
                        "Documents can easily be added by clicking the ",
                        React.createElement(Term, null, "Add"),
                        " button and you can import documents individually or in bulk from a local directory."),
                    React.createElement("p", null, "You can also just drag and drop files onto the document repository as well."),
                    React.createElement("p", null, "Once the tour is over you'll probably want to use this feature to add any documents you're currently reading.")),
                image: "/web/assets/images/add-file.svg"
            }),
            JoyrideTours_1.JoyrideTours.createImageStep({
                target: '#enable-cloud-sync, #cloud-sync-dropdown',
                title: React.createElement(Title, null, "Cloud Sync"),
                content: React.createElement("div", null,
                    React.createElement("p", null,
                        "Polar supports ",
                        React.createElement(Term, null, "cloud sync"),
                        " which keeps all your documents securely backed up in the cloud. Enabling ",
                        React.createElement(Term, null, "cloud sync"),
                        " also allow you to keep all your computers that run Polar fully synchronized."),
                    React.createElement("p", null, "This works transparently and realtime across MacOS, Windows, and Linux.")),
                image: React.createElement(Icon, { className: "fas fa-cloud-upload-alt" })
            }),
            JoyrideTours_1.JoyrideTours.createImageStep({
                target: '#links-dropdown',
                title: React.createElement(Title, null, "Links"),
                content: React.createElement("div", null,
                    React.createElement("p", null,
                        "We include direct links to additional tools including our ",
                        React.createElement(Term, null, "Chrome Extension"),
                        " and ",
                        React.createElement(Term, null, "chat"),
                        " to enable you to discuss Polar live with the developers and other users.")),
                image: React.createElement(Icon, { className: "fas fa-link" })
            }),
            {
                target: '.doc-table-col-progress',
                title: React.createElement(Title, null, "Reading Progress"),
                disableBeacon: true,
                content: React.createElement("div", null, "Each document has a progress associated with it which is derived from pagemarks. Pagemarks are similar to bookmarks but manually updated on each document while you read."),
            },
            JoyrideTours_1.JoyrideTours.createImageStep({
                target: '.doc-table-col-tags',
                title: React.createElement(Title, null, "Tags"),
                content: React.createElement("div", null,
                    React.createElement("p", null, "Each document can be tagged to enable filtering and allow you to easily manage your documents."),
                    React.createElement("p", null, "Tags for documents are also assigned to your annotations.")),
                image: React.createElement(Icon, { className: "fa fa-tag" })
            }),
            {
                target: '.doc-dropdown',
                disableBeacon: true,
                content: React.createElement("div", null,
                    React.createElement("p", null,
                        "Documents can be ",
                        React.createElement(Term, null, "tagged"),
                        ", ",
                        React.createElement(Term, null, "flagged"),
                        ", ",
                        React.createElement(Term, null, "archived"),
                        " and ",
                        React.createElement(Term, null, "deleted"),
                        " by using these buttons to the right."),
                    React.createElement("p", null,
                        "The ",
                        React.createElement(Term, null, "tag"),
                        " button allow you to assign new ",
                        React.createElement("b", null,
                            React.createElement("i", null, "tags")),
                        " a document"),
                    React.createElement("p", null,
                        "The ",
                        React.createElement(Term, null, "flag"),
                        " button allow you to mark important documents.  Once flagged you can use the ",
                        React.createElement(Term, null, "filter bar"),
                        " to show only flagged documents."),
                    React.createElement("p", null,
                        "The ",
                        React.createElement(Term, null, "archive"),
                        " button allow you to hide a document once read.  It's usually best to archive a document once it's been read.")),
                styles: {
                    tooltip: {
                        width: '650px'
                    }
                },
            },
            {
                target: '#filter-bar',
                disableBeacon: true,
                content: React.createElement("div", null,
                    React.createElement("p", null,
                        "The ",
                        React.createElement(Term, null, "filter bar"),
                        " allows you to configure which documents are visible."),
                    React.createElement("p", null, "You can hide/show documents that are flagged, archived and also filter by tags or search by title."),
                    React.createElement("p", null, "You can also sort by the columns to build queues to determine what you should read next. Flags can be used to manage your primary/active reading.")),
                styles: {
                    tooltip: {
                        width: '650px'
                    }
                },
            },
            {
                title: React.createElement(Title, null, "Annotations"),
                target: '#nav-tab-annotations',
                content: React.createElement("div", null,
                    "The ",
                    React.createElement(Term, null, "annotations view"),
                    " allows you to view all your annotations including highlights, comments, and flashcards."),
            },
            JoyrideTours_1.JoyrideTours.createImageStep({
                target: '#nav-tab-statistics',
                title: React.createElement(Title, null, "Statistics View"),
                content: React.createElement("div", null,
                    React.createElement("p", null,
                        "The ",
                        React.createElement(Term, null, "statistics view"),
                        " allows you to view important statistics regarding your reading, documents, and annotations including the rate of new documents and statistics on your tags.")),
                image: "/web/assets/images/statistics.svg",
            }),
            JoyrideTours_1.JoyrideTours.createImageStep({
                target: 'header',
                content: React.createElement("div", null,
                    React.createElement("h2", null, "Thanks for taking the Tour"),
                    React.createElement("p", null,
                        "You next step needs to be adding documents.  Just click the ",
                        React.createElement(Term, null, "add"),
                        " button or install the chrome extension to capture web pages.")),
                image: "/icon.png",
                placement: 'center'
            }),
        ];
        return steps.filter(current => !current.disabled);
    }
    onCallback(callbackProps) {
        this.callback = callbackProps;
        RendererAnalytics_1.RendererAnalytics.event({ category: 'tour', action: 'did-step-' + callbackProps.index });
        const step = callbackProps.step;
        if (callbackProps.action === 'update' && step.autoNext) {
            const nextStep = this.steps[callbackProps.index + 1];
            const nextHandler = () => {
                if (nextStep.target instanceof HTMLElement) {
                    return true;
                }
                const selector = nextStep.target;
                return document.querySelector(selector) != null;
            };
            let mutationObserver;
            const mutationHandler = () => {
                if (nextHandler()) {
                    mutationObserver.disconnect();
                    const stepIndex = this.state.stepIndex + 1;
                    this.setState(Object.assign(Object.assign({}, this.state), { stepIndex, run: false }));
                }
            };
            mutationObserver = new MutationObserver(mutationHandler);
            mutationObserver.observe(document.body, {
                childList: true,
                attributes: true,
                subtree: true
            });
            mutationHandler();
        }
        if (callbackProps.status === react_joyride_1.STATUS.SKIPPED || callbackProps.status === react_joyride_1.STATUS.FINISHED) {
            try {
                switch (callbackProps.status) {
                    case react_joyride_1.STATUS.SKIPPED:
                        RendererAnalytics_1.RendererAnalytics.event({ category: 'tour-result', action: 'skipped' });
                        RendererAnalytics_1.RendererAnalytics.event({ category: 'tour-skip', action: 'skipped-at-step-' + callbackProps.index });
                        LifecycleToggle_1.LifecycleToggle.mark(LifecycleEvents_1.LifecycleEvents.TOUR_SKIPPED);
                        break;
                    case react_joyride_1.STATUS.FINISHED:
                        RendererAnalytics_1.RendererAnalytics.event({ category: 'tour-result', action: 'finished' });
                        LifecycleToggle_1.LifecycleToggle.mark(LifecycleEvents_1.LifecycleEvents.TOUR_FINISHED);
                        break;
                }
            }
            finally {
                LifecycleToggle_1.LifecycleToggle.mark(LifecycleEvents_1.LifecycleEvents.TOUR_TERMINATED);
            }
        }
        else if (callbackProps.type === react_joyride_1.EVENTS.STEP_AFTER) {
            if (!this.state.run) {
                setTimeout(() => {
                    this.setState(Object.assign(Object.assign({}, this.state), { run: true }));
                }, 250);
                return;
            }
            this.doStep(callbackProps);
        }
        else if (callbackProps.type === react_joyride_1.EVENTS.TARGET_NOT_FOUND) {
            log.warn("Not found: ", callbackProps);
            this.doStep(callbackProps);
        }
    }
    doStep(callBackProps) {
        const stepIndex = callBackProps.index + (callBackProps.action === react_joyride_1.ACTIONS.PREV ? -1 : 1);
        this.setState(Object.assign(Object.assign({}, this.state), { stepIndex }));
    }
}
exports.RepositoryTour = RepositoryTour;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVwb3NpdG9yeVRvdXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJSZXBvc2l0b3J5VG91ci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsK0RBQThFO0FBQzlFLDZDQUErQjtBQUMvQixtRUFBOEQ7QUFDOUQsbUVBQThEO0FBQzlELGtFQUE2RDtBQUM3RCwyREFBc0Q7QUFFdEQsOERBQXVFO0FBQ3ZFLGlEQUE0QztBQUM1QywrREFBMEQ7QUFFMUQsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLE1BQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQztBQUV2QixNQUFhLE1BQU07O0FBQW5CLHdCQW9CQztBQWxCaUIsVUFBRyxHQUF3QjtJQUNyQyxRQUFRLEVBQUUsT0FBTztJQUNqQixTQUFTLEVBQUUsT0FBTztJQUNsQixZQUFZLEVBQUUsTUFBTTtJQUNwQixPQUFPLEVBQUUsT0FBTztJQUNoQixVQUFVLEVBQUUsTUFBTTtJQUNsQixXQUFXLEVBQUUsTUFBTTtDQUN0QixDQUFDO0FBRVksb0JBQWEsR0FBd0I7SUFDL0MsUUFBUSxFQUFFLE9BQU87SUFDakIsU0FBUyxFQUFFLE9BQU87SUFDbEIsWUFBWSxFQUFFLE1BQU07SUFDcEIsT0FBTyxFQUFFLE9BQU87SUFDaEIsVUFBVSxFQUFFLEtBQUs7SUFDakIsV0FBVyxFQUFFLEtBQUs7Q0FDckIsQ0FBQztBQUtOLE1BQWEsY0FBZSxTQUFRLEtBQUssQ0FBQyxTQUF5QjtJQU0vRCxZQUFZLEtBQWEsRUFBRSxPQUFZO1FBQ25DLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FB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RUFBRSxHQUFHLENBQUMsQ0FBQztnQkFFUixPQUFPO2FBRVY7WUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBRTlCO2FBQU0sSUFBSSxhQUFhLENBQUMsSUFBSSxLQUFLLHNCQUFNLENBQUMsZ0JBQWdCLEVBQUU7WUFLdkQsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsYUFBYSxDQUFDLENBQUM7WUFFdkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUM5QjtJQUVMLENBQUM7SUFFTyxNQUFNLENBQUMsYUFBNEI7UUFFdkMsTUFBTSxTQUFTLEdBQUcsYUFBYSxDQUFDLEtBQUssR0FBRyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEtBQUssdUJBQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUV6RixJQUFJLENBQUMsUUFBUSxpQ0FBSyxJQUFJLENBQUMsS0FBSyxLQUFFLFNBQVMsSUFBRyxDQUFDO0lBRS9DLENBQUM7Q0FHSjtBQWxsQkQsd0NBa2xCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBKb3lyaWRlLCB7QUNUSU9OUywgQ2FsbEJhY2tQcm9wcywgRVZFTlRTLCBTVEFUVVN9IGZyb20gJ3JlYWN0LWpveXJpZGUnO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtMaWZlY3ljbGVUb2dnbGV9IGZyb20gJy4uLy4uL3VpL3V0aWwvTGlmZWN5Y2xlVG9nZ2xlJztcbmltcG9ydCB7TGlmZWN5Y2xlRXZlbnRzfSBmcm9tICcuLi8uLi91aS91dGlsL0xpZmVjeWNsZUV2ZW50cyc7XG5pbXBvcnQge1JlbmRlcmVyQW5hbHl0aWNzfSBmcm9tICcuLi8uLi9nYS9SZW5kZXJlckFuYWx5dGljcyc7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7TG9hZEV4YW1wbGVEb2NzfSBmcm9tICcuL29uYm9hcmRpbmcvTG9hZEV4YW1wbGVEb2NzJztcbmltcG9ydCB7RW5oYW5jZWRTdGVwLCBKb3lyaWRlVG91cnN9IGZyb20gJy4uLy4uL3VpL3RvdXJzL0pveXJpZGVUb3Vycyc7XG5pbXBvcnQge0FwcFJ1bnRpbWV9IGZyb20gJy4uLy4uL0FwcFJ1bnRpbWUnO1xuaW1wb3J0IHtQbGF0Zm9ybXN9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL3V0aWwvUGxhdGZvcm1zXCI7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuY29uc3QgWl9JTkRFWCA9IDEwMDAwMDtcblxuZXhwb3J0IGNsYXNzIFN0eWxlcyB7XG5cbiAgICBwdWJsaWMgc3RhdGljIElNRzogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcbiAgICAgICAgbWF4V2lkdGg6ICc0NTBweCcsXG4gICAgICAgIG1heEhlaWdodDogJzMyNXB4JyxcbiAgICAgICAgbWFyZ2luQm90dG9tOiAnMTBweCcsXG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIG1hcmdpbkxlZnQ6ICdhdXRvJyxcbiAgICAgICAgbWFyZ2luUmlnaHQ6ICdhdXRvJyxcbiAgICB9O1xuXG4gICAgcHVibGljIHN0YXRpYyBTUExJVF9CQVJfSU1HOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xuICAgICAgICBtYXhXaWR0aDogJzIyNXB4JyxcbiAgICAgICAgbWF4SGVpZ2h0OiAnMjI1cHgnLFxuICAgICAgICBtYXJnaW5Cb3R0b206ICcxMHB4JyxcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgbWFyZ2luTGVmdDogJzVweCcsXG4gICAgICAgIG1hcmdpblJpZ2h0OiAnNXB4JyxcbiAgICB9O1xuXG59XG5cblxuZXhwb3J0IGNsYXNzIFJlcG9zaXRvcnlUb3VyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgICBwcml2YXRlIGNhbGxiYWNrPzogQ2FsbEJhY2tQcm9wcztcblxuICAgIHByaXZhdGUgc3RlcHM6IEVuaGFuY2VkU3RlcFtdO1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcywgY29udGV4dDogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcblxuICAgICAgICB0aGlzLm9uQ2FsbGJhY2sgPSB0aGlzLm9uQ2FsbGJhY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jcmVhdGVTdGVwcyA9IHRoaXMuY3JlYXRlU3RlcHMuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLnN0ZXBzID0gdGhpcy5jcmVhdGVTdGVwcygpO1xuXG4gICAgICAgIGNvbnN0IHJ1biA9XG4gICAgICAgICAgICAhIExpZmVjeWNsZVRvZ2dsZS5pc01hcmtlZChMaWZlY3ljbGVFdmVudHMuVE9VUl9URVJNSU5BVEVEKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgcnVuLFxuICAgICAgICAgICAgc3RlcEluZGV4OiAwXG4gICAgICAgIH07XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuXG4gICAgICAgIGlmIChQbGF0Zm9ybXMuaXNNb2JpbGUoKSkge1xuICAgICAgICAgICAgcmV0dXJuIDxkaXYvPjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgIDxKb3lyaWRlXG4gICAgICAgICAgICAgICAgc3RlcHM9e3RoaXMuc3RlcHN9XG4gICAgICAgICAgICAgICAgY29udGludW91cz17dHJ1ZX1cbiAgICAgICAgICAgICAgICBjYWxsYmFjaz17ZGF0YSA9PiB0aGlzLm9uQ2FsbGJhY2soZGF0YSl9XG4gICAgICAgICAgICAgICAgcnVuPXt0aGlzLnN0YXRlLnJ1bn1cbiAgICAgICAgICAgICAgICBzaG93UHJvZ3Jlc3M9e3RydWV9XG4gICAgICAgICAgICAgICAgc2hvd1NraXBCdXR0b249e3RydWV9XG4gICAgICAgICAgICAgICAgc3RlcEluZGV4PXt0aGlzLnN0YXRlLnN0ZXBJbmRleH1cbiAgICAgICAgICAgICAgICBzdHlsZXM9e3tcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXJyb3dDb2xvcjogJyNlM2ZmZWInLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZENvbG9yOiAnI2UzZmZlYicsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBvdmVybGF5Q29sb3I6ICdyZ2JhKDc5LCAyNiwgMCwgMC40KScsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmltYXJ5Q29sb3I6ICcjMDA3YmZmJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRleHRDb2xvcjogJyMwMDRhMTQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2lkdGg6IDkwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHpJbmRleDogWl9JTkRFWCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdG9vbHRpcENvbnRhaW5lcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnbGVmdCcsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9fT48L0pveXJpZGU+XG5cbiAgICAgICAgKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlU3RlcHMoKTogRW5oYW5jZWRTdGVwW10ge1xuXG4gICAgICAgIC8vIFRPRE86IHNob3cgdGhlbSBob3cgdG8gdXNlIHRoZSByaWNoIHRleHQgYXJlYSBpbmNsdWRpbmcgaW1hZ2VzLFxuICAgICAgICAvLyBIVE1MLCBldGMuXG5cbiAgICAgICAgLy8gVE9ETzogZnVsbCB0b3VyIG9mIGNhcHR1cmluZyB3ZWIgZG9jdW1lbnRzXG5cbiAgICAgICAgLy8gVE9ETzpcblxuICAgICAgICBjb25zdCBUZXJtID0gKHByb3BzOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiA8Yj48aT57cHJvcHMuY2hpbGRyZW59PC9pPjwvYj47XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgVGl0bGUgPSAocHJvcHM6IGFueSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogJzIycHgnLFxuICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6ICcxMHB4J319PlxuICAgICAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgIDwvZGl2PjtcbiAgICAgICAgfTtcblxuICAgICAgICBpbnRlcmZhY2UgSWNvblByb3BzIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogc3RyaW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgSWNvbiA9IChwcm9wczogSWNvblByb3BzKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnlcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e3Byb3BzLmNsYXNzTmFtZX1cbiAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzE3NXB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogJzVweCcsXG4gICAgICAgICAgICAgICAgICAgfX0+XG5cbiAgICAgICAgICAgICAgICA8L2k+XG4gICAgICAgICAgICA8L2Rpdj47XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3Qgc3RlcHM6IEVuaGFuY2VkU3RlcFtdID0gW1xuXG4gICAgICAgICAgICAvLyBUT0RPOiB3ZSBkb24ndCByZWFsbHkgZ2l2ZSB0aGUgdXNlciBhIHRvdXIgdGhyb3VnaCB0aGUgYW5ub3RhdGlvbnMgdmlld1xuICAgICAgICAgICAgLy8gVE9ETzogd2UgZG9uJ3QgcmVhbHkgZ2l2ZSB0aGVtIGEgdG91ciB0aHJvdWdoIGNhcHR1cmluZyB3ZWIgcGFnZXMuXG5cbiAgICAgICAgICAgIEpveXJpZGVUb3Vycy5jcmVhdGVJbWFnZVN0ZXAoe1xuICAgICAgICAgICAgICAgIHRhcmdldDogJ2hlYWRlcicsXG4gICAgICAgICAgICAgICAgLy8gdGl0bGU6IDxUaXRsZT5Eb2N1bWVudCBSZXBvc2l0b3J5PC9UaXRsZT4sXG4gICAgICAgICAgICAgICAgY29udGVudDogPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+V2VsY29tZSB0byBQb2xhciE8L2gyPlxuXG4gICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgV2UncmUgZ29pbmcgdG8gZ2l2ZSB5b3UgYSBxdWljayB0b3VyIG9mIGhvdyB0byB1c2UgdGhlXG4gICAgICAgICAgICAgICAgICAgICAgICBtYWluIGZlYXR1cmVzIGluIFBvbGFyLlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICBQb2xhciBhbGxvd3MgeW91IHRvOlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgPHVsPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+S2VlcCBhbGwgeW91ciBkb2N1bWVudHMgaW4gb25lIHBsYWNlLjwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5FYXNpbHkga2VlcCB0cmFjayBvZiB5b3VyIHJlYWRpbmcgd2l0aCA8Yj5wYWdlbWFya3M8L2I+IGFuZCA8Yj5zdGF0cyB0cmFja2luZzwvYj4uPC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxiPkFubm90YXRlPC9iPiwgPGI+dGFnPC9iPiwgYW5kIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZGFya1wiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAneWVsbG93J319PjxiPmhpZ2hsaWdodDwvYj48L3NwYW4+IGFsbCB5b3VyIGRvY3VtZW50cyBhbmQgYnVpbGQgYSBwZXJzb25hbCBrbm93bGVkZ2UgcmVwb3NpdG9yeS48L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+VXNlIDxiPnNwYWNlZCByZXBldGl0aW9uPC9iPiBhbmQgPGI+aW5jcmVtZW50YWwgcmVhZGluZzwvYj4gdG8gaGVscCB5b3UgcGVybWFuZW50bHkgcmVtZW1iZXIgZXZlcnl0aGluZyB5b3Ugc3R1ZHkhPC9saT5cblxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgQWRkaXRpb25hbGx5LCBQb2xhciBzdXBwb3J0cyA8Yj5ub3QganVzdCBQREY8L2I+IGRvY3VtZW50c1xuICAgICAgICAgICAgICAgICAgICAgICAgYnV0IGNhcHR1cmluZyA8Yj53ZWIgY29udGVudDwvYj4gYW5kIHN0b3JpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0IG9mZmxpbmUgaW4geW91ciBhcmNoaXZlIC0gZm9yZXZlciFcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgVGhlIHRvdXIgc2hvdWxkIHRha2UgYWJvdXQgNjAgc2Vjb25kcy5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+LFxuICAgICAgICAgICAgICAgIGltYWdlOiBcIi9pY29uLnBuZ1wiLFxuICAgICAgICAgICAgICAgIHBsYWNlbWVudDogJ2NlbnRlcidcblxuICAgICAgICAgICAgfSksXG5cbiAgICAgICAgICAgIEpveXJpZGVUb3Vycy5jcmVhdGVJbWFnZVN0ZXAoe1xuICAgICAgICAgICAgICAgIHRhcmdldDogJ2hlYWRlcicsXG4gICAgICAgICAgICAgICAgdGl0bGU6IDxUaXRsZT5XZWIsIERlc2t0b3AgYW5kIENsb3VkLjwvVGl0bGU+LFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IDxkaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICBZb3UncmUgdXNpbmcgdGhlIDxiPndlYjwvYj4gdmVyc2lvbiBvZiBQb2xhci5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgUG9sYXIgd29ya3Mgb24gYm90aCB0aGUgZGVza3RvcCAoTWFjT1MsXG4gICAgICAgICAgICAgICAgICAgICAgICBXaW5kb3dzLCBhbmQgTGludXgpIGFzIHdlbGwgYXMgdGhlIHdlYiAoQ2hyb21lLCBGaXJlZm94LFxuICAgICAgICAgICAgICAgICAgICAgICAgYW5kIG1ham9yIGJyb3dzZXJzKSBhbmQgaXMgPGI+ZnVsbHkgY2xvdWQgYXdhcmU8L2I+LlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICBJZiB5b3UgdXNlIHRoZSBkZXNrdG9wIHZlcnNpb24gb2YgUG9sYXIgeW91IGNhbiBlbmFibGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb3VkIHN5bmMgd2hpY2ggd2lsbCA8Yj5rZWVwIGFsbCB5b3VyIGRvY3VtZW50cyBpblxuICAgICAgICAgICAgICAgICAgICAgICAgc3luYzwvYj4gYWNyb3NzIGFsbCB5b3VyIGRldmljZXMgYW5kIHRoZSB3ZWIgLSBhbmQgaW5cbiAgICAgICAgICAgICAgICAgICAgICAgIG5lYXIgcmVhbHRpbWUhXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIE5vdGUgdGhhdCB0aGUgd2ViIHZlcnNpb24gaXMgbWlzc2luZyBhIGZldyBmZWF0dXJlc1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVkaW5nIEFua2kgc3luYyBhbmQgd2ViIHBhZ2UgY2FwdHVyZSBhbmQgb25seVxuICAgICAgICAgICAgICAgICAgICAgICAgc3VwcG9ydHMgUERGIGRvY3VtZW50cyBhdCB0aGUgbW9tZW50LlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG5cblxuICAgICAgICAgICAgICAgIDwvZGl2PixcbiAgICAgICAgICAgICAgICBpbWFnZTogXCIvd2ViL2Fzc2V0cy9pbWFnZXMvd2ViLnN2Z1wiLFxuICAgICAgICAgICAgICAgIHBsYWNlbWVudDogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IEFwcFJ1bnRpbWUuaXNFbGVjdHJvbigpXG4gICAgICAgICAgICB9KSxcblxuICAgICAgICAgICAgSm95cmlkZVRvdXJzLmNyZWF0ZUltYWdlU3RlcCh7XG4gICAgICAgICAgICAgICAgdGFyZ2V0OiAnI25hdi10YWItZG9jdW1lbnQtcmVwb3NpdG9yeScsXG4gICAgICAgICAgICAgICAgdGl0bGU6IDxUaXRsZT5Eb2N1bWVudCBSZXBvc2l0b3J5PC9UaXRsZT4sXG4gICAgICAgICAgICAgICAgY29udGVudDogPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICBZb3VyIGRvY3VtZW50cyBhcmUga2VwdCBoZXJlIGluXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGUgPFRlcm0+ZG9jdW1lbnQgcmVwb3NpdG9yeTwvVGVybT4gYW5kXG4gICAgICAgICAgICAgICAgICAgICAgICBjYW4gYmUgb3BlbmVkIGJ5IDxUZXJtPmRvdWJsZSBjbGlja2luZzwvVGVybT4uXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIFdlIHdlbnQgYWhlYWQgYW5kIGFkZGVkIHNvbWUgPGI+c2FtcGxlIGRvY3VtZW50czwvYj4gc28geW91IGNhblxuICAgICAgICAgICAgICAgICAgICAgICAgc2VlIHdoYXQgUG9sYXIgbG9va3MgbGlrZSBpbiBhY3Rpb24uICBZb3UgY2FuIGp1c3RcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGVtIG9uY2UgdGhlIHRvdXIgaXMgZmluaXNoZWQuXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj4sXG4gICAgICAgICAgICAgICAgaW1hZ2U6IFwiL3dlYi9hc3NldHMvaW1hZ2VzL2ZpbGVzLnN2Z1wiXG4gICAgICAgICAgICB9KSxcblxuICAgICAgICAgICAgSm95cmlkZVRvdXJzLmNyZWF0ZUltYWdlU3RlcCh7XG4gICAgICAgICAgICAgICAgdGFyZ2V0OiAnI2FkZC1jb250ZW50LWRyb3Bkb3duJyxcbiAgICAgICAgICAgICAgICB0aXRsZTogPFRpdGxlPkFkZCBEb2N1bWVudHM8L1RpdGxlPixcbiAgICAgICAgICAgICAgICBjb250ZW50OiA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIERvY3VtZW50cyBjYW4gZWFzaWx5IGJlIGFkZGVkIGJ5IGNsaWNraW5nIHRoZSA8VGVybT5BZGQ8L1Rlcm0+IGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgYW5kIHlvdSBjYW4gaW1wb3J0IGRvY3VtZW50cyBpbmRpdmlkdWFsbHkgb3IgaW4gYnVsayBmcm9tXG4gICAgICAgICAgICAgICAgICAgICAgICBhIGxvY2FsIGRpcmVjdG9yeS5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgWW91IGNhbiBhbHNvIGp1c3QgZHJhZyBhbmQgZHJvcCBmaWxlcyBvbnRvIHRoZSBkb2N1bWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVwb3NpdG9yeSBhcyB3ZWxsLlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICBPbmNlIHRoZSB0b3VyIGlzIG92ZXIgeW91J2xsIHByb2JhYmx5IHdhbnQgdG8gdXNlIHRoaXNcbiAgICAgICAgICAgICAgICAgICAgICAgIGZlYXR1cmUgdG8gYWRkIGFueSBkb2N1bWVudHMgeW91J3JlIGN1cnJlbnRseSByZWFkaW5nLlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+LFxuICAgICAgICAgICAgICAgIGltYWdlOiBcIi93ZWIvYXNzZXRzL2ltYWdlcy9hZGQtZmlsZS5zdmdcIlxuICAgICAgICAgICAgfSksXG5cbiAgICAgICAgICAgIEpveXJpZGVUb3Vycy5jcmVhdGVJbWFnZVN0ZXAoe1xuICAgICAgICAgICAgICAgIHRhcmdldDogJyNlbmFibGUtY2xvdWQtc3luYywgI2Nsb3VkLXN5bmMtZHJvcGRvd24nLFxuICAgICAgICAgICAgICAgIHRpdGxlOiA8VGl0bGU+Q2xvdWQgU3luYzwvVGl0bGU+LFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgUG9sYXIgc3VwcG9ydHMgPFRlcm0+Y2xvdWQgc3luYzwvVGVybT4gd2hpY2gga2VlcHMgYWxsIHlvdXJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50cyBzZWN1cmVseSBiYWNrZWQgdXAgaW4gdGhlIGNsb3VkLlxuICAgICAgICAgICAgICAgICAgICAgICAgRW5hYmxpbmcgPFRlcm0+Y2xvdWQgc3luYzwvVGVybT4gYWxzbyBhbGxvdyB5b3UgdG8ga2VlcCBhbGwgeW91clxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcHV0ZXJzIHRoYXQgcnVuIFBvbGFyIGZ1bGx5IHN5bmNocm9uaXplZC5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyB3b3JrcyB0cmFuc3BhcmVudGx5IGFuZCByZWFsdGltZSBhY3Jvc3MgTWFjT1MsXG4gICAgICAgICAgICAgICAgICAgICAgICBXaW5kb3dzLCBhbmQgTGludXguXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj4sXG4gICAgICAgICAgICAgICAgaW1hZ2U6XG4gICAgICAgICAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT1cImZhcyBmYS1jbG91ZC11cGxvYWQtYWx0XCIvPlxuXG4gICAgICAgICAgICB9KSxcblxuICAgICAgICAgICAgSm95cmlkZVRvdXJzLmNyZWF0ZUltYWdlU3RlcCh7XG4gICAgICAgICAgICAgICAgdGFyZ2V0OiAnI2xpbmtzLWRyb3Bkb3duJyxcbiAgICAgICAgICAgICAgICB0aXRsZTogPFRpdGxlPkxpbmtzPC9UaXRsZT4sXG4gICAgICAgICAgICAgICAgY29udGVudDogPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICBXZSBpbmNsdWRlIGRpcmVjdCBsaW5rcyB0byBhZGRpdGlvbmFsIHRvb2xzIGluY2x1ZGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgb3VyIDxUZXJtPkNocm9tZSBFeHRlbnNpb248L1Rlcm0+IGFuZCA8VGVybT5jaGF0PC9UZXJtPiB0b1xuICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlIHlvdSB0byBkaXNjdXNzIFBvbGFyIGxpdmUgd2l0aCB0aGUgZGV2ZWxvcGVycyBhbmRcbiAgICAgICAgICAgICAgICAgICAgICAgIG90aGVyIHVzZXJzLlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj4sXG4gICAgICAgICAgICAgICAgaW1hZ2U6XG4gICAgICAgICAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT1cImZhcyBmYS1saW5rXCIvPlxuXG4gICAgICAgICAgICB9KSxcblxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRhcmdldDogJy5kb2MtdGFibGUtY29sLXByb2dyZXNzJyxcbiAgICAgICAgICAgICAgICB0aXRsZTogPFRpdGxlPlJlYWRpbmcgUHJvZ3Jlc3M8L1RpdGxlPixcbiAgICAgICAgICAgICAgICBkaXNhYmxlQmVhY29uOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIEVhY2ggZG9jdW1lbnQgaGFzIGEgcHJvZ3Jlc3MgYXNzb2NpYXRlZCB3aXRoIGl0IHdoaWNoIGlzXG4gICAgICAgICAgICAgICAgICAgIGRlcml2ZWQgZnJvbSBwYWdlbWFya3MuIFBhZ2VtYXJrcyBhcmUgc2ltaWxhciB0byBib29rbWFya3NcbiAgICAgICAgICAgICAgICAgICAgYnV0IG1hbnVhbGx5IHVwZGF0ZWQgb24gZWFjaCBkb2N1bWVudCB3aGlsZSB5b3UgcmVhZC5cbiAgICAgICAgICAgICAgICA8L2Rpdj4sXG5cbiAgICAgICAgICAgICAgICAvLyBwbGFjZW1lbnQ6IFwiYm90dG9tXCIsXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBKb3lyaWRlVG91cnMuY3JlYXRlSW1hZ2VTdGVwKHtcbiAgICAgICAgICAgICAgICB0YXJnZXQ6ICcuZG9jLXRhYmxlLWNvbC10YWdzJyxcbiAgICAgICAgICAgICAgICB0aXRsZTogPFRpdGxlPlRhZ3M8L1RpdGxlPixcbiAgICAgICAgICAgICAgICBjb250ZW50OiA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIEVhY2ggZG9jdW1lbnQgY2FuIGJlIHRhZ2dlZCB0byBlbmFibGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcmluZyBhbmQgYWxsb3cgeW91IHRvIGVhc2lseSBtYW5hZ2UgeW91ciBkb2N1bWVudHMuXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgICA8cD5UYWdzIGZvciBkb2N1bWVudHMgYXJlIGFsc28gYXNzaWduZWQgdG8geW91ciBhbm5vdGF0aW9ucy48L3A+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj4sXG4gICAgICAgICAgICAgICAgaW1hZ2U6XG4gICAgICAgICAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT1cImZhIGZhLXRhZ1wiLz5cblxuICAgICAgICAgICAgfSksXG5cblxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRhcmdldDogJy5kb2MtZHJvcGRvd24nLFxuICAgICAgICAgICAgICAgIGRpc2FibGVCZWFjb246IHRydWUsXG4gICAgICAgICAgICAgICAgY29udGVudDogPGRpdj5cblxuICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIERvY3VtZW50cyBjYW5cbiAgICAgICAgICAgICAgICAgICAgICAgIGJlIDxUZXJtPnRhZ2dlZDwvVGVybT4sIDxUZXJtPmZsYWdnZWQ8L1Rlcm0+LCA8VGVybT5hcmNoaXZlZDwvVGVybT4gYW5kIDxUZXJtPmRlbGV0ZWQ8L1Rlcm0+IGJ5IHVzaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGVzZSBidXR0b25zIHRvIHRoZSByaWdodC5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgIFRoZSA8VGVybT50YWc8L1Rlcm0+IGJ1dHRvbiBhbGxvdyB5b3UgdG8gYXNzaWduIG5ldyA8Yj48aT50YWdzPC9pPjwvYj4gYSBkb2N1bWVudFxuICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgVGhlIDxUZXJtPmZsYWc8L1Rlcm0+IGJ1dHRvbiBhbGxvdyB5b3UgdG8gbWFyayBpbXBvcnRhbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudHMuICBPbmNlIGZsYWdnZWQgeW91IGNhbiB1c2UgdGhlIDxUZXJtPmZpbHRlciBiYXI8L1Rlcm0+IHRvXG4gICAgICAgICAgICAgICAgICAgICAgICAgc2hvdyBvbmx5IGZsYWdnZWQgZG9jdW1lbnRzLlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICBUaGUgPFRlcm0+YXJjaGl2ZTwvVGVybT4gYnV0dG9uIGFsbG93IHlvdSB0b1xuICAgICAgICAgICAgICAgICAgICAgICAgaGlkZSBhIGRvY3VtZW50IG9uY2UgcmVhZC4gIEl0J3MgdXN1YWxseSBiZXN0IHRvXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmNoaXZlIGEgZG9jdW1lbnQgb25jZSBpdCdzIGJlZW4gcmVhZC5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+LFxuICAgICAgICAgICAgICAgIHN0eWxlczoge1xuICAgICAgICAgICAgICAgICAgICB0b29sdGlwOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzY1MHB4J1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAvLyBwbGFjZW1lbnQ6IFwiYm90dG9tXCIsXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0OiAnI2ZpbHRlci1iYXInLFxuICAgICAgICAgICAgICAgIGRpc2FibGVCZWFjb246IHRydWUsXG4gICAgICAgICAgICAgICAgY29udGVudDogPGRpdj5cblxuICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIFRoZSA8VGVybT5maWx0ZXIgYmFyPC9UZXJtPiBhbGxvd3MgeW91IHRvIGNvbmZpZ3VyZVxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpY2ggZG9jdW1lbnRzIGFyZSB2aXNpYmxlLlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICBZb3UgY2FuIGhpZGUvc2hvdyBkb2N1bWVudHMgdGhhdCBhcmUgZmxhZ2dlZCwgYXJjaGl2ZWQgYW5kXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHNvIGZpbHRlciBieSB0YWdzIG9yIHNlYXJjaCBieSB0aXRsZS5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgWW91IGNhbiBhbHNvIHNvcnQgYnkgdGhlIGNvbHVtbnMgdG8gYnVpbGQgcXVldWVzIHRvIGRldGVybWluZSB3aGF0IHlvdSBzaG91bGQgcmVhZCBuZXh0LlxuICAgICAgICAgICAgICAgICAgICAgICAgRmxhZ3MgY2FuIGJlIHVzZWQgdG8gbWFuYWdlIHlvdXIgcHJpbWFyeS9hY3RpdmUgcmVhZGluZy5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+LFxuICAgICAgICAgICAgICAgIHN0eWxlczoge1xuICAgICAgICAgICAgICAgICAgICB0b29sdGlwOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzY1MHB4J1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogPFRpdGxlPkFubm90YXRpb25zPC9UaXRsZT4sXG4gICAgICAgICAgICAgICAgdGFyZ2V0OiAnI25hdi10YWItYW5ub3RhdGlvbnMnLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIFRoZSA8VGVybT5hbm5vdGF0aW9ucyB2aWV3PC9UZXJtPiBhbGxvd3MgeW91IHRvIHZpZXcgYWxsIHlvdXIgYW5ub3RhdGlvbnMgaW5jbHVkaW5nIGhpZ2hsaWdodHMsXG4gICAgICAgICAgICAgICAgICAgIGNvbW1lbnRzLCBhbmQgZmxhc2hjYXJkcy5cbiAgICAgICAgICAgICAgICA8L2Rpdj4sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgSm95cmlkZVRvdXJzLmNyZWF0ZUltYWdlU3RlcCh7XG4gICAgICAgICAgICAgICAgdGFyZ2V0OiAnI25hdi10YWItc3RhdGlzdGljcycsXG4gICAgICAgICAgICAgICAgdGl0bGU6IDxUaXRsZT5TdGF0aXN0aWNzIFZpZXc8L1RpdGxlPixcbiAgICAgICAgICAgICAgICBjb250ZW50OiA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIFRoZSA8VGVybT5zdGF0aXN0aWNzIHZpZXc8L1Rlcm0+IGFsbG93cyB5b3VcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvIHZpZXcgaW1wb3J0YW50IHN0YXRpc3RpY3MgcmVnYXJkaW5nIHlvdXIgcmVhZGluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50cywgYW5kIGFubm90YXRpb25zIGluY2x1ZGluZyB0aGUgcmF0ZSBvZiBuZXdcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50cyBhbmQgc3RhdGlzdGljcyBvbiB5b3VyIHRhZ3MuXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj4sXG4gICAgICAgICAgICAgICAgaW1hZ2U6IFwiL3dlYi9hc3NldHMvaW1hZ2VzL3N0YXRpc3RpY3Muc3ZnXCIsXG4gICAgICAgICAgICB9KSxcblxuICAgICAgICAgICAgSm95cmlkZVRvdXJzLmNyZWF0ZUltYWdlU3RlcCh7XG4gICAgICAgICAgICAgICAgdGFyZ2V0OiAnaGVhZGVyJyxcbiAgICAgICAgICAgICAgICBjb250ZW50OiA8ZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxoMj5UaGFua3MgZm9yIHRha2luZyB0aGUgVG91cjwvaDI+XG5cbiAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICBZb3UgbmV4dCBzdGVwIG5lZWRzIHRvIGJlIGFkZGluZyBkb2N1bWVudHMuICBKdXN0IGNsaWNrIHRoZSA8VGVybT5hZGQ8L1Rlcm0+IGJ1dHRvbiBvciBpbnN0YWxsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGUgY2hyb21lIGV4dGVuc2lvbiB0byBjYXB0dXJlIHdlYiBwYWdlcy5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+LFxuICAgICAgICAgICAgICAgIGltYWdlOiBcIi9pY29uLnBuZ1wiLFxuICAgICAgICAgICAgICAgIHBsYWNlbWVudDogJ2NlbnRlcidcblxuICAgICAgICAgICAgfSksXG5cbiAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgIC8vICAgICB0YXJnZXQ6ICdoZWFkZXInLFxuICAgICAgICAgICAgLy8gICAgIGNvbnRlbnQ6IDxkaXY+XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5UaGFua3MgZm9yIHRha2luZyB0aGUgdG91ciE8L2gyPlxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vICAgICAgICAgPHA+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBOb3cgdGhhdCB5b3UgdW5kZXJzdGFuZCBQb2xhciB5b3VyIG5leHQgc3RlcHMgYXJlIHRvXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBhZGQgZG9jdW1lbnRzLlxuICAgICAgICAgICAgLy8gICAgICAgICA8L3A+XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICA8RmVlZGJhY2sgY2F0ZWdvcnk9XCJ0b3VyLWZlZWRiYWNrXCJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkhvdyBsaWtlbHkgYXJlIHlvdSB0byBjb250aW51ZSB1c2luZyBQb2xhcj9cIlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiV2Ugd2FudGVkIHRvIGdldCB5b3VyIGluaXRpYWwgdGhvdWdodHMgYWZ0ZXIgdGFraW5nIHRoZSB0b3VyLlwiXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgZnJvbT1cIk5vdCBsaWtlbHlcIlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgIHRvPVwiVmVyeSBsaWtlbHlcIlxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgIHVuc3VyZT17dHJ1ZX0vPlxuICAgICAgICAgICAgLy8gICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyAgICAgPC9kaXY+LFxuICAgICAgICAgICAgLy8gICAgIHN0eWxlczoge1xuICAgICAgICAgICAgLy8gICAgICAgICB0b29sdGlwOiB7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB3aWR0aDogJzY1MHB4J1xuICAgICAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgICAgICAvLyAgICAgfSxcbiAgICAgICAgICAgIC8vICAgICBkaXNhYmxlQmVhY29uOiB0cnVlLFxuICAgICAgICAgICAgLy8gICAgIHBsYWNlbWVudDogJ2NlbnRlcidcbiAgICAgICAgICAgIC8vIH0sXG5cbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAvLyAgICAgdGFyZ2V0OiAnLmRvYy10YWJsZS1jb2wtYWRkZWQnLFxuICAgICAgICAgICAgLy8gICAgIHRpdGxlOiA8VGl0bGU+U29ydGluZzwvVGl0bGU+LFxuICAgICAgICAgICAgLy8gICAgIGRpc2FibGVCZWFjb246IHRydWUsXG4gICAgICAgICAgICAvLyAgICAgY29udGVudDogPGRpdj5cbiAgICAgICAgICAgIC8vICAgICAgICAgV2Uga2VlcCB0cmFjayBvZiB0aGUgdGltZSBhIGRvY3VtZW50XG4gICAgICAgICAgICAvLyAgICAgICAgIHdhcyA8VGVybT5hZGRlZDwvVGVybT4gYW5kIDxUZXJtPnVwZGF0ZWQ8L1Rlcm0+IHNvXG4gICAgICAgICAgICAvLyAgICAgICAgIHlvdSBjYW4gc29ydCBieSB0aW1lIHRvIHJlYWQgdGhlIG1vc3QgcmVjZW50bHkgYWRkZWQgKG9yXG4gICAgICAgICAgICAvLyAgICAgICAgIHVwZGF0ZWQpIGRvY3VtZW50cyBmaXJzdC5cbiAgICAgICAgICAgIC8vICAgICA8L2Rpdj4sXG4gICAgICAgICAgICAvLyAgICAgLy8gcGxhY2VtZW50OiBcImJvdHRvbVwiLFxuICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAvLyAgICAgdGFyZ2V0OiAnLmRvYy10YWJsZS1jb2wtdGl0bGUnLFxuICAgICAgICAgICAgLy8gICAgIGRpc2FibGVCZWFjb246IHRydWUsXG4gICAgICAgICAgICAvLyAgICAgY29udGVudDogPGRpdj5cbiAgICAgICAgICAgIC8vICAgICAgICAgVGhlIHRpdGxlIG9mIHRoZSBkb2N1bWVudCBpcyBhdXRvbWF0aWNhbGx5IHNldCB3aGVuIGl0J3NcbiAgICAgICAgICAgIC8vICAgICAgICAgYWRkZWQgYnV0IHlvdSBjYW4gY2hhbmdlIGl0IGF0IGFueSB0aW1lXG4gICAgICAgICAgICAvLyAgICAgPC9kaXY+LFxuICAgICAgICAgICAgLy8gICAgIC8vIHBsYWNlbWVudDogXCJib3R0b21cIixcbiAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICAvL1xuXG5cbiAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgIC8vICAgICB0YXJnZXQ6ICcuZG9jLWRyb3Bkb3duJyxcbiAgICAgICAgICAgIC8vICAgICBkaXNhYmxlQmVhY29uOiB0cnVlLFxuICAgICAgICAgICAgLy8gICAgIGNvbnRlbnQ6ICA8ZGl2PlxuICAgICAgICAgICAgLy8gICAgICAgICBUaGUgZHJvcGRvd24gYWxsb3cgeW91IHBlcmZvcm0gb3RoZXIgYWN0aW9ucyBvbiBhXG4gICAgICAgICAgICAvLyBkb2N1bWVudCBpbmNsdWRpbmcgY2hhbmdpbmcgdGhlIHRpdGxlIGFuZCBkZWxldGluZyBkb2N1bWVudHMuXG4gICAgICAgICAgICAvLyA8L2Rpdj4sIC8vIHBsYWNlbWVudDogXCJib3R0b21cIiwgfSwgICAvLyAvLyB7IC8vICAgICAvLyB0YXJnZXQ6XG4gICAgICAgICAgICAvLyAnI2RvYy1yZXBvLXRhYmxlIC5ydC10Ym9keSA+IGRpdjpudGgtY2hpbGQoLW4rNCknLCAvL1xuICAgICAgICAgICAgLy8gdGFyZ2V0OiAnI2RvYy1yZXBvLXRhYmxlIC5ydC10Ym9keSA+IGRpdjpudGgtY2hpbGQoLW4rMSknLCAvL1xuICAgICAgICAgICAgLy8gIHRpdGxlOiA8VGl0bGU+T3BlbiBhIGRvY3VtZW50PC9UaXRsZT4sIC8vICAgICBkaXNhYmxlQmVhY29uOlxuICAgICAgICAgICAgLy8gdHJ1ZSwgLy8gICAgIHNwb3RsaWdodENsaWNrczogdHJ1ZSwgLy8gICAgIGNvbnRlbnQ6IDxkaXY+IC8vIC8vXG4gICAgICAgICAgICAvLyAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWJvb2stb3BlbiB0ZXh0LXByaW1hcnlcIiAvL1xuICAgICAgICAgICAgLy8gIHN0eWxlPXt7Zm9udFNpemU6ICcxNTBweCd9fT48L2k+IC8vIC8vICAgICAgICAgPHA+IC8vXG4gICAgICAgICAgICAvLyAgIExldCdzIG9wZW4gYSBkb2N1bWVudC4gLy8gICAgICAgICA8L3A+IC8vIC8vICAgICAgICAgPHA+IC8vXG4gICAgICAgICAgICAvLyAgICAgICAgICBHbyBhaGVhZCBhbmQgPFRlcm0+ZG91YmxlIGNsaWNrPC9UZXJtPiBvbiB0aGUgLy8gICAgICAgICAgICAgaGlnaGxpZ2h0ZWQgZG9jdW1lbnQgcm93IGFuZCBhIG5ldyB3aW5kb3cgd2lsbCBvcGVuLiAvLyAgICAgICAgIDwvcD4gLy8gLy8gICAgIDwvZGl2PiwgLy8gICAgIC8vIHBsYWNlbWVudDogXCJib3R0b21cIiwgLy8gfSxcblxuICAgICAgICBdO1xuXG4gICAgICAgIHJldHVybiBzdGVwcy5maWx0ZXIoY3VycmVudCA9PiAhIGN1cnJlbnQuZGlzYWJsZWQpO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkNhbGxiYWNrKGNhbGxiYWNrUHJvcHM6IENhbGxCYWNrUHJvcHMpOiB2b2lkIHtcblxuICAgICAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2tQcm9wcztcblxuICAgICAgICBSZW5kZXJlckFuYWx5dGljcy5ldmVudCh7Y2F0ZWdvcnk6ICd0b3VyJywgYWN0aW9uOiAnZGlkLXN0ZXAtJyArIGNhbGxiYWNrUHJvcHMuaW5kZXh9KTtcblxuICAgICAgICBjb25zdCBzdGVwOiBFbmhhbmNlZFN0ZXAgPSBjYWxsYmFja1Byb3BzLnN0ZXA7XG5cbiAgICAgICAgaWYgKGNhbGxiYWNrUHJvcHMuYWN0aW9uID09PSAndXBkYXRlJyAmJiBzdGVwLmF1dG9OZXh0KSB7XG5cbiAgICAgICAgICAgIGNvbnN0IG5leHRTdGVwID0gdGhpcy5zdGVwc1tjYWxsYmFja1Byb3BzLmluZGV4ICsgMV07XG5cbiAgICAgICAgICAgIGNvbnN0IG5leHRIYW5kbGVyID0gKCk6IGJvb2xlYW4gPT4ge1xuXG4gICAgICAgICAgICAgICAgaWYgKG5leHRTdGVwLnRhcmdldCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdG9yID0gbmV4dFN0ZXAudGFyZ2V0O1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpICE9IG51bGw7XG5cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGxldCBtdXRhdGlvbk9ic2VydmVyOiBNdXRhdGlvbk9ic2VydmVyO1xuXG4gICAgICAgICAgICBjb25zdCBtdXRhdGlvbkhhbmRsZXIgPSAoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBpZiAobmV4dEhhbmRsZXIoKSkge1xuICAgICAgICAgICAgICAgICAgICBtdXRhdGlvbk9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGVwSW5kZXggPSB0aGlzLnN0YXRlLnN0ZXBJbmRleCArIDE7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi50aGlzLnN0YXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RlcEluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgcnVuOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgbXV0YXRpb25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKG11dGF0aW9uSGFuZGxlcik7XG5cbiAgICAgICAgICAgIG11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5ib2R5LCB7XG4gICAgICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHRydWUsXG4gICAgICAgICAgICAgICAgc3VidHJlZTogdHJ1ZVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIGNhbGwgaXQgb25jZSBtYW51YWxseSBhZnRlciB0aGUgZXZlbnQgd2FzIHJlZ2lzdGVyZWQgYXMgdGhlXG4gICAgICAgICAgICAvLyBlbGVtZW50IG1pZ2h0IGFscmVhZHkgYmUgdmlzaWJsZSBpbiB0aGUgRE9NIGF0IHdoaWNoIHBvaW50IHdlJ3JlXG4gICAgICAgICAgICAvLyBhbHJlYWR5IGRvbmUuXG4gICAgICAgICAgICBtdXRhdGlvbkhhbmRsZXIoKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNhbGxiYWNrUHJvcHMuc3RhdHVzID09PSBTVEFUVVMuU0tJUFBFRCB8fCBjYWxsYmFja1Byb3BzLnN0YXR1cyA9PT0gU1RBVFVTLkZJTklTSEVEKSB7XG5cbiAgICAgICAgICAgIHRyeSB7XG5cbiAgICAgICAgICAgICAgICAvLyBGSVhNRT9cbiAgICAgICAgICAgICAgICAvLyB0aGlzLnNldFN0YXRlKHsgcnVuOiBmYWxzZSwgc3RlcEluZGV4OiAwIH0pO1xuXG4gICAgICAgICAgICAgICAgc3dpdGNoIChjYWxsYmFja1Byb3BzLnN0YXR1cykge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFNUQVRVUy5TS0lQUEVEOlxuICAgICAgICAgICAgICAgICAgICAgICAgUmVuZGVyZXJBbmFseXRpY3MuZXZlbnQoe2NhdGVnb3J5OiAndG91ci1yZXN1bHQnLCBhY3Rpb246ICdza2lwcGVkJ30pO1xuICAgICAgICAgICAgICAgICAgICAgICAgUmVuZGVyZXJBbmFseXRpY3MuZXZlbnQoe2NhdGVnb3J5OiAndG91ci1za2lwJywgYWN0aW9uOiAnc2tpcHBlZC1hdC1zdGVwLScgKyBjYWxsYmFja1Byb3BzLmluZGV4fSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIExpZmVjeWNsZVRvZ2dsZS5tYXJrKExpZmVjeWNsZUV2ZW50cy5UT1VSX1NLSVBQRUQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgU1RBVFVTLkZJTklTSEVEOlxuICAgICAgICAgICAgICAgICAgICAgICAgUmVuZGVyZXJBbmFseXRpY3MuZXZlbnQoe2NhdGVnb3J5OiAndG91ci1yZXN1bHQnLCBhY3Rpb246ICdmaW5pc2hlZCd9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgTGlmZWN5Y2xlVG9nZ2xlLm1hcmsoTGlmZWN5Y2xlRXZlbnRzLlRPVVJfRklOSVNIRUQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIExpZmVjeWNsZVRvZ2dsZS5tYXJrKExpZmVjeWNsZUV2ZW50cy5UT1VSX1RFUk1JTkFURUQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSBpZiAoY2FsbGJhY2tQcm9wcy50eXBlID09PSBFVkVOVFMuU1RFUF9BRlRFUikge1xuXG4gICAgICAgICAgICBpZiAoICEgdGhpcy5zdGF0ZS5ydW4pIHtcblxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bjogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIH0sIDI1MCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5kb1N0ZXAoY2FsbGJhY2tQcm9wcyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjYWxsYmFja1Byb3BzLnR5cGUgPT09IEVWRU5UUy5UQVJHRVRfTk9UX0ZPVU5EKSB7XG5cbiAgICAgICAgICAgIC8vIFRPRE86IGFkZCBhIERPTSBldmVudCBsaXN0ZW5lciB0byB3YWl0IGZvciBpdCB0byBiZWNvbWVcbiAgICAgICAgICAgIC8vIGF2YWlsYWJsZT8/P1xuXG4gICAgICAgICAgICBsb2cud2FybihcIk5vdCBmb3VuZDogXCIsIGNhbGxiYWNrUHJvcHMpO1xuXG4gICAgICAgICAgICB0aGlzLmRvU3RlcChjYWxsYmFja1Byb3BzKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkb1N0ZXAoY2FsbEJhY2tQcm9wczogQ2FsbEJhY2tQcm9wcykge1xuXG4gICAgICAgIGNvbnN0IHN0ZXBJbmRleCA9IGNhbGxCYWNrUHJvcHMuaW5kZXggKyAoY2FsbEJhY2tQcm9wcy5hY3Rpb24gPT09IEFDVElPTlMuUFJFViA/IC0xIDogMSk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Li4udGhpcy5zdGF0ZSwgc3RlcEluZGV4IH0pO1xuXG4gICAgfVxuXG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUHJvcHMge1xuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVN0YXRlIHtcbiAgICByZWFkb25seSBydW46IGJvb2xlYW47XG4gICAgcmVhZG9ubHkgc3RlcEluZGV4OiBudW1iZXI7XG59XG4iXX0=