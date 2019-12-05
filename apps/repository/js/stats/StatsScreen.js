"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const NewDocumentRateChart_1 = __importDefault(require("./NewDocumentRateChart"));
const TopTagsChart_1 = __importDefault(require("./TopTagsChart"));
const TopTagsTable_1 = __importDefault(require("./TopTagsTable"));
const MessageBanner_1 = require("../MessageBanner");
const FixedNav_1 = require("../FixedNav");
const RepoHeader_1 = require("../repo_header/RepoHeader");
const ReadingProgressTable_1 = __importDefault(require("./ReadingProgressTable"));
const SpacedRepQueueChart_1 = require("./SpacedRepQueueChart");
const ReviewerTasks_1 = require("../reviewer/ReviewerTasks");
const Logger_1 = require("polar-shared/src/logger/Logger");
const PremiumFeature_1 = require("../../../../web/js/ui/premium_feature/PremiumFeature");
const Devices_1 = require("../../../../web/js/util/Devices");
const RepoFooter_1 = require("../repo_footer/RepoFooter");
const log = Logger_1.Logger.create();
const ReviewerStats = (props) => {
    if (props.isReviewer) {
        return React.createElement("div", null,
            React.createElement(SectionHeader, null,
                React.createElement("h2", null, "Flashcards"),
                React.createElement(SectionText, null, "Stats for flashcard review including the queue length (amount of work needed to do to catch up) and the number of flashcards completed.")),
            React.createElement("div", { className: "row mt-2" },
                React.createElement("div", { className: "col-lg-12" },
                    React.createElement(SpacedRepQueueChart_1.SpacedRepQueueChart, { mode: 'flashcard', type: 'queue' }))),
            React.createElement("div", { className: "row mt-2" },
                React.createElement("div", { className: "col-lg-12" },
                    React.createElement(SpacedRepQueueChart_1.SpacedRepQueueChart, { mode: 'flashcard', type: 'completed' }))),
            React.createElement(SectionHeader, null,
                React.createElement("h2", null, "Incremental Reading"),
                React.createElement(SectionText, null, "Stats regarding incremental reading.  Incremental reading uses spaced repetition along with your annotations so you can easily review your notes in conjunction with your flashcards.")),
            React.createElement("div", { className: "row mt-2" },
                React.createElement("div", { className: "col-lg-12" },
                    React.createElement(SpacedRepQueueChart_1.SpacedRepQueueChart, { mode: 'reading', type: 'queue' }))),
            React.createElement("div", { className: "row mt-2" },
                React.createElement("div", { className: "col-lg-12" },
                    React.createElement(SpacedRepQueueChart_1.SpacedRepQueueChart, { mode: 'reading', type: 'completed' }))));
    }
    return React.createElement("div", null);
};
const SectionHeader = (props) => {
    return React.createElement("div", { className: "row mt-2" },
        React.createElement("div", { className: "col" }, props.children));
};
const SectionText = (props) => {
    return React.createElement("p", { className: "text-lg text-grey700" }, props.children);
};
class StatsScreen extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.getDocInfos = this.getDocInfos.bind(this);
        this.state = {};
    }
    componentDidMount() {
        ReviewerTasks_1.ReviewerTasks.isReviewer()
            .then(isReviewer => this.setState({ isReviewer }))
            .catch(err => log.error(err));
    }
    render() {
        if (Devices_1.Devices.get() === 'phone') {
            return React.createElement(StatsScreen.Phone, Object.assign({}, this.props));
        }
        else {
            return React.createElement(StatsScreen.Default, Object.assign({}, this.props));
        }
    }
    getDocInfos() {
        return this.props.repoDocMetaManager.repoDocInfoIndex.values()
            .map(current => current.docInfo);
    }
}
exports.default = StatsScreen;
StatsScreen.Phone = class extends StatsScreen {
    render() {
        return React.createElement(FixedNav_1.FixedNav, { id: "doc-repository", className: "statistics-view" },
            React.createElement("header", null,
                React.createElement(RepoHeader_1.RepoHeader, { persistenceLayerManager: this.props.persistenceLayerManager }),
                React.createElement(MessageBanner_1.MessageBanner, null)),
            React.createElement(FixedNav_1.FixedNavBody, { className: "p-1" },
                React.createElement("div", { className: "container p-0" },
                    React.createElement(ReviewerStats, { isReviewer: this.state.isReviewer }))),
            React.createElement(RepoFooter_1.RepoFooter, null));
    }
};
StatsScreen.Default = class extends StatsScreen {
    render() {
        const docInfos = this.getDocInfos();
        return (React.createElement(FixedNav_1.FixedNav, { id: "doc-repository", className: "statistics-view pb-2" },
            React.createElement("header", null,
                React.createElement(RepoHeader_1.RepoHeader, { persistenceLayerManager: this.props.persistenceLayerManager }),
                React.createElement(MessageBanner_1.MessageBanner, null)),
            React.createElement(FixedNav_1.FixedNavBody, null,
                React.createElement("div", { className: "container mt-3" },
                    React.createElement(SectionHeader, null,
                        React.createElement("h1", null, "Statistics"),
                        React.createElement(SectionText, null, "Polar keeps track of statistics of your document repository so you can better understand your reading habits and what types of documents are stored in your repository.")),
                    React.createElement(ReviewerStats, { isReviewer: this.state.isReviewer }),
                    React.createElement(SectionHeader, null,
                        React.createElement("h2", null, "Reading"),
                        React.createElement(SectionText, null, "Polar keeps track of your reading progress by counting pagemarks and number of pages you've read per day so you can focus setting a reading/study goal.")),
                    React.createElement("div", { className: "row mt-2" },
                        React.createElement("div", { className: "col-lg-12" },
                            React.createElement(PremiumFeature_1.PremiumFeature, { required: 'bronze', feature: "statistics", size: "lg" },
                                React.createElement(ReadingProgressTable_1.default, { docInfos: docInfos })))),
                    React.createElement(SectionHeader, null,
                        React.createElement("h2", null, "Documents"),
                        React.createElement(SectionText, null, "Statistics on the number and type of documents you've added to your repository.")),
                    React.createElement("div", { className: "row mt-2" },
                        React.createElement("div", { className: "col-lg-12" },
                            React.createElement(PremiumFeature_1.PremiumFeature, { required: 'bronze', feature: "statistics", size: "lg" },
                                React.createElement(NewDocumentRateChart_1.default, { docInfos: docInfos })))),
                    React.createElement("div", { className: "row mt-2 tag-statistics" },
                        React.createElement("div", { className: "col-lg-8" },
                            React.createElement(PremiumFeature_1.PremiumFeature, { required: 'bronze', feature: "statistics", size: "lg" },
                                React.createElement(TopTagsChart_1.default, { docInfos: docInfos }))),
                        React.createElement("div", { className: "col-lg-4" },
                            React.createElement(PremiumFeature_1.PremiumFeature, { required: 'bronze', feature: "statistics", size: "lg" },
                                React.createElement(TopTagsTable_1.default, { docInfos: docInfos }))))))));
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RhdHNTY3JlZW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJTdGF0c1NjcmVlbi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQStCO0FBRS9CLGtGQUEwRDtBQUMxRCxrRUFBMEM7QUFDMUMsa0VBQTBDO0FBQzFDLG9EQUErQztBQUMvQywwQ0FBbUQ7QUFDbkQsMERBQXFEO0FBRXJELGtGQUEwRDtBQUMxRCwrREFBMEQ7QUFDMUQsNkRBQXdEO0FBQ3hELDJEQUFzRDtBQUN0RCx5RkFBb0Y7QUFDcEYsNkRBQXdEO0FBRXhELDBEQUFxRDtBQUVyRCxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFNNUIsTUFBTSxhQUFhLEdBQUcsQ0FBQyxLQUFvQixFQUFFLEVBQUU7SUFFM0MsSUFBSSxLQUFLLENBQUMsVUFBVSxFQUFFO1FBRWxCLE9BQU87WUFDSCxvQkFBQyxhQUFhO2dCQUNWLDZDQUFtQjtnQkFFbkIsb0JBQUMsV0FBVyxrSkFHRSxDQUNGO1lBRWhCLDZCQUFLLFNBQVMsRUFBQyxVQUFVO2dCQUNyQiw2QkFBSyxTQUFTLEVBQUMsV0FBVztvQkFDdEIsb0JBQUMseUNBQW1CLElBQUMsSUFBSSxFQUFDLFdBQVcsRUFBQyxJQUFJLEVBQUMsT0FBTyxHQUFFLENBQ2xELENBQ0o7WUFFTiw2QkFBSyxTQUFTLEVBQUMsVUFBVTtnQkFDckIsNkJBQUssU0FBUyxFQUFDLFdBQVc7b0JBQ3RCLG9CQUFDLHlDQUFtQixJQUFDLElBQUksRUFBQyxXQUFXLEVBQUMsSUFBSSxFQUFDLFdBQVcsR0FBRSxDQUN0RCxDQUNKO1lBRU4sb0JBQUMsYUFBYTtnQkFDVixzREFBNEI7Z0JBRTVCLG9CQUFDLFdBQVcsZ01BSUUsQ0FDRjtZQUVoQiw2QkFBSyxTQUFTLEVBQUMsVUFBVTtnQkFDckIsNkJBQUssU0FBUyxFQUFDLFdBQVc7b0JBQ3RCLG9CQUFDLHlDQUFtQixJQUFDLElBQUksRUFBQyxTQUFT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QUFjLElBQUMsUUFBUSxFQUFDLFFBQVEsRUFBQyxPQUFPLEVBQUMsWUFBWSxFQUFDLElBQUksRUFBQyxJQUFJO2dDQUM1RCxvQkFBQyxzQkFBWSxJQUFDLFFBQVEsRUFBRSxRQUFRLEdBQUcsQ0FDdEIsQ0FDZjt3QkFFTiw2QkFBSyxTQUFTLEVBQUMsVUFBVTs0QkFDckIsb0JBQUMsK0JBQWMsSUFBQyxRQUFRLEVBQUMsUUFBUSxFQUFDLE9BQU8sRUFBQyxZQUFZLEVBQUMsSUFBSSxFQUFDLElBQUk7Z0NBQzVELG9CQUFDLHNCQUFZLElBQUMsUUFBUSxFQUFFLFFBQVEsR0FBRyxDQUN0QixDQUNmLENBRUosQ0FFSixDQUVLLENBRVIsQ0FFZCxDQUFDO0lBQ04sQ0FBQztDQUVKLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1JlcG9Eb2NNZXRhTWFuYWdlcn0gZnJvbSAnLi4vUmVwb0RvY01ldGFNYW5hZ2VyJztcbmltcG9ydCBOZXdEb2N1bWVudFJhdGVDaGFydCBmcm9tICcuL05ld0RvY3VtZW50UmF0ZUNoYXJ0JztcbmltcG9ydCBUb3BUYWdzQ2hhcnQgZnJvbSAnLi9Ub3BUYWdzQ2hhcnQnO1xuaW1wb3J0IFRvcFRhZ3NUYWJsZSBmcm9tICcuL1RvcFRhZ3NUYWJsZSc7XG5pbXBvcnQge01lc3NhZ2VCYW5uZXJ9IGZyb20gJy4uL01lc3NhZ2VCYW5uZXInO1xuaW1wb3J0IHtGaXhlZE5hdiwgRml4ZWROYXZCb2R5fSBmcm9tICcuLi9GaXhlZE5hdic7XG5pbXBvcnQge1JlcG9IZWFkZXJ9IGZyb20gJy4uL3JlcG9faGVhZGVyL1JlcG9IZWFkZXInO1xuaW1wb3J0IHtQZXJzaXN0ZW5jZUxheWVyTWFuYWdlcn0gZnJvbSAnLi4vLi4vLi4vLi4vd2ViL2pzL2RhdGFzdG9yZS9QZXJzaXN0ZW5jZUxheWVyTWFuYWdlcic7XG5pbXBvcnQgUmVhZGluZ1Byb2dyZXNzVGFibGUgZnJvbSAnLi9SZWFkaW5nUHJvZ3Jlc3NUYWJsZSc7XG5pbXBvcnQge1NwYWNlZFJlcFF1ZXVlQ2hhcnR9IGZyb20gXCIuL1NwYWNlZFJlcFF1ZXVlQ2hhcnRcIjtcbmltcG9ydCB7UmV2aWV3ZXJUYXNrc30gZnJvbSBcIi4uL3Jldmlld2VyL1Jldmlld2VyVGFza3NcIjtcbmltcG9ydCB7TG9nZ2VyfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy9sb2dnZXIvTG9nZ2VyXCI7XG5pbXBvcnQge1ByZW1pdW1GZWF0dXJlfSBmcm9tIFwiLi4vLi4vLi4vLi4vd2ViL2pzL3VpL3ByZW1pdW1fZmVhdHVyZS9QcmVtaXVtRmVhdHVyZVwiO1xuaW1wb3J0IHtEZXZpY2VzfSBmcm9tIFwiLi4vLi4vLi4vLi4vd2ViL2pzL3V0aWwvRGV2aWNlc1wiO1xuaW1wb3J0IHtJRG9jSW5mb30gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvbWV0YWRhdGEvSURvY0luZm9cIjtcbmltcG9ydCB7UmVwb0Zvb3Rlcn0gZnJvbSBcIi4uL3JlcG9fZm9vdGVyL1JlcG9Gb290ZXJcIjtcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJldmlld2VyU3RhdHMge1xuICAgIHJlYWRvbmx5IGlzUmV2aWV3ZXI/OiBib29sZWFuO1xufVxuXG5jb25zdCBSZXZpZXdlclN0YXRzID0gKHByb3BzOiBSZXZpZXdlclN0YXRzKSA9PiB7XG5cbiAgICBpZiAocHJvcHMuaXNSZXZpZXdlcikge1xuXG4gICAgICAgIHJldHVybiA8ZGl2PlxuICAgICAgICAgICAgPFNlY3Rpb25IZWFkZXI+XG4gICAgICAgICAgICAgICAgPGgyPkZsYXNoY2FyZHM8L2gyPlxuXG4gICAgICAgICAgICAgICAgPFNlY3Rpb25UZXh0PlxuICAgICAgICAgICAgICAgICAgICBTdGF0cyBmb3IgZmxhc2hjYXJkIHJldmlldyBpbmNsdWRpbmcgdGhlIHF1ZXVlIGxlbmd0aCAoYW1vdW50IG9mIHdvcmsgbmVlZGVkIHRvIGRvXG4gICAgICAgICAgICAgICAgICAgIHRvIGNhdGNoIHVwKSBhbmQgdGhlIG51bWJlciBvZiBmbGFzaGNhcmRzIGNvbXBsZXRlZC5cbiAgICAgICAgICAgICAgICA8L1NlY3Rpb25UZXh0PlxuICAgICAgICAgICAgPC9TZWN0aW9uSGVhZGVyPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtdC0yXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPFNwYWNlZFJlcFF1ZXVlQ2hhcnQgbW9kZT0nZmxhc2hjYXJkJyB0eXBlPSdxdWV1ZScvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG10LTJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMlwiPlxuICAgICAgICAgICAgICAgICAgICA8U3BhY2VkUmVwUXVldWVDaGFydCBtb2RlPSdmbGFzaGNhcmQnIHR5cGU9J2NvbXBsZXRlZCcvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxTZWN0aW9uSGVhZGVyPlxuICAgICAgICAgICAgICAgIDxoMj5JbmNyZW1lbnRhbCBSZWFkaW5nPC9oMj5cblxuICAgICAgICAgICAgICAgIDxTZWN0aW9uVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgU3RhdHMgcmVnYXJkaW5nIGluY3JlbWVudGFsIHJlYWRpbmcuICBJbmNyZW1lbnRhbCByZWFkaW5nIHVzZXMgc3BhY2VkIHJlcGV0aXRpb24gYWxvbmdcbiAgICAgICAgICAgICAgICAgICAgd2l0aCB5b3VyIGFubm90YXRpb25zIHNvIHlvdSBjYW4gZWFzaWx5IHJldmlldyB5b3VyIG5vdGVzIGluIGNvbmp1bmN0aW9uIHdpdGggeW91clxuICAgICAgICAgICAgICAgICAgICBmbGFzaGNhcmRzLlxuICAgICAgICAgICAgICAgIDwvU2VjdGlvblRleHQ+XG4gICAgICAgICAgICA8L1NlY3Rpb25IZWFkZXI+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG10LTJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMlwiPlxuICAgICAgICAgICAgICAgICAgICA8U3BhY2VkUmVwUXVldWVDaGFydCBtb2RlPSdyZWFkaW5nJyB0eXBlPSdxdWV1ZScvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG10LTJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMlwiPlxuICAgICAgICAgICAgICAgICAgICA8U3BhY2VkUmVwUXVldWVDaGFydCBtb2RlPSdyZWFkaW5nJyB0eXBlPSdjb21wbGV0ZWQnLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuXG4gICAgfVxuXG4gICAgcmV0dXJuIDxkaXYvPlxuXG59O1xuXG5jb25zdCBTZWN0aW9uSGVhZGVyID0gKHByb3BzOiBhbnkpID0+IHtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJyb3cgbXQtMlwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj47XG59O1xuXG5jb25zdCBTZWN0aW9uVGV4dCA9IChwcm9wczogYW55KSA9PiB7XG4gICAgcmV0dXJuIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgdGV4dC1ncmV5NzAwXCI+XG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L3A+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdHNTY3JlZW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJUHJvcHMsIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG5cbiAgICAgICAgdGhpcy5nZXREb2NJbmZvcyA9IHRoaXMuZ2V0RG9jSW5mb3MuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICB9O1xuXG4gICAgfVxuXG4gICAgcHVibGljIGNvbXBvbmVudERpZE1vdW50KCk6IHZvaWQge1xuXG4gICAgICAgIC8vIFRPRE86IHdlIHNob3VsZG4ndCB1c2UgdGhpcyBJIHRoaW5rIGFzIGl0J3Mgbm90IHN1cHBvcnRlZCB3ZWxsIG9uIG1vZGVybiByZWFjdC4uLlxuXG4gICAgICAgIFJldmlld2VyVGFza3MuaXNSZXZpZXdlcigpXG4gICAgICAgICAgICAudGhlbihpc1Jldmlld2VyID0+IHRoaXMuc2V0U3RhdGUoe2lzUmV2aWV3ZXJ9KSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gbG9nLmVycm9yKGVycikpO1xuXG4gICAgfVxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgaWYgKERldmljZXMuZ2V0KCkgPT09ICdwaG9uZScpIHtcbiAgICAgICAgICAgIHJldHVybiA8U3RhdHNTY3JlZW4uUGhvbmUgey4uLnRoaXMucHJvcHN9Lz5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiA8U3RhdHNTY3JlZW4uRGVmYXVsdCB7Li4udGhpcy5wcm9wc30vPlxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGdldERvY0luZm9zKCk6IFJlYWRvbmx5QXJyYXk8SURvY0luZm8+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMucmVwb0RvY01ldGFNYW5hZ2VyLnJlcG9Eb2NJbmZvSW5kZXgudmFsdWVzKClcbiAgICAgICAgICAgIC5tYXAoY3VycmVudCA9PiBjdXJyZW50LmRvY0luZm8pO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgUGhvbmUgPSBjbGFzcyBleHRlbmRzIFN0YXRzU2NyZWVuIHtcbiAgICAgICAgcHVibGljIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHJldHVybiA8Rml4ZWROYXYgaWQ9XCJkb2MtcmVwb3NpdG9yeVwiIGNsYXNzTmFtZT1cInN0YXRpc3RpY3Mtdmlld1wiPlxuXG4gICAgICAgICAgICAgICAgPGhlYWRlcj5cblxuICAgICAgICAgICAgICAgICAgICA8UmVwb0hlYWRlciBwZXJzaXN0ZW5jZUxheWVyTWFuYWdlcj17dGhpcy5wcm9wcy5wZXJzaXN0ZW5jZUxheWVyTWFuYWdlcn0vPlxuXG4gICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlQmFubmVyLz5cblxuICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxuXG4gICAgICAgICAgICAgICAgPEZpeGVkTmF2Qm9keSBjbGFzc05hbWU9XCJwLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcC0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UmV2aWV3ZXJTdGF0cyBpc1Jldmlld2VyPXt0aGlzLnN0YXRlLmlzUmV2aWV3ZXJ9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9GaXhlZE5hdkJvZHk+XG5cbiAgICAgICAgICAgICAgICA8UmVwb0Zvb3Rlci8+XG4gICAgICAgICAgICA8L0ZpeGVkTmF2PlxuICAgICAgICB9XG4gICAgfTtcblxuICAgIHB1YmxpYyBzdGF0aWMgRGVmYXVsdCA9IGNsYXNzIGV4dGVuZHMgU3RhdHNTY3JlZW4ge1xuXG4gICAgICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGRvY0luZm9zID0gdGhpcy5nZXREb2NJbmZvcygpO1xuXG4gICAgICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICAgICAgPEZpeGVkTmF2IGlkPVwiZG9jLXJlcG9zaXRvcnlcIiBjbGFzc05hbWU9XCJzdGF0aXN0aWNzLXZpZXcgcGItMlwiPlxuXG4gICAgICAgICAgICAgICAgICAgIDxoZWFkZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZXBvSGVhZGVyIHBlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyPXt0aGlzLnByb3BzLnBlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyfS8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlQmFubmVyLz5cblxuICAgICAgICAgICAgICAgICAgICA8L2hlYWRlcj5cblxuICAgICAgICAgICAgICAgICAgICA8Rml4ZWROYXZCb2R5PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBtdC0zXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VjdGlvbkhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPlN0YXRpc3RpY3M8L2gxPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWN0aW9uVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBvbGFyIGtlZXBzIHRyYWNrIG9mIHN0YXRpc3RpY3Mgb2YgeW91ciBkb2N1bWVudCByZXBvc2l0b3J5IHNvIHlvdSBjYW4gYmV0dGVyIHVuZGVyc3RhbmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHlvdXIgcmVhZGluZyBoYWJpdHMgYW5kIHdoYXQgdHlwZXMgb2YgZG9jdW1lbnRzIGFyZSBzdG9yZWQgaW4geW91ciByZXBvc2l0b3J5LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlY3Rpb25UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VjdGlvbkhlYWRlcj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZXZpZXdlclN0YXRzIGlzUmV2aWV3ZXI9e3RoaXMuc3RhdGUuaXNSZXZpZXdlcn0vPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlY3Rpb25IZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5SZWFkaW5nPC9oMj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VjdGlvblRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQb2xhciBrZWVwcyB0cmFjayBvZiB5b3VyIHJlYWRpbmcgcHJvZ3Jlc3MgYnkgY291bnRpbmcgcGFnZW1hcmtzIGFuZCBudW1iZXIgb2YgcGFnZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHlvdSd2ZSByZWFkIHBlciBkYXkgc28geW91IGNhbiBmb2N1cyBzZXR0aW5nIGEgcmVhZGluZy9zdHVkeSBnb2FsLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlY3Rpb25UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VjdGlvbkhlYWRlcj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG10LTJcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByZW1pdW1GZWF0dXJlIHJlcXVpcmVkPSdicm9uemUnIGZlYXR1cmU9XCJzdGF0aXN0aWNzXCIgc2l6ZT1cImxnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWRpbmdQcm9ncmVzc1RhYmxlIGRvY0luZm9zPXtkb2NJbmZvc30vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9QcmVtaXVtRmVhdHVyZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlY3Rpb25IZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5Eb2N1bWVudHM8L2gyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWN0aW9uVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0YXRpc3RpY3Mgb24gdGhlIG51bWJlciBhbmQgdHlwZSBvZiBkb2N1bWVudHMgeW91J3ZlIGFkZGVkIHRvIHlvdXIgcmVwb3NpdG9yeS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWN0aW9uVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlY3Rpb25IZWFkZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtdC0yXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmVtaXVtRmVhdHVyZSByZXF1aXJlZD0nYnJvbnplJyBmZWF0dXJlPVwic3RhdGlzdGljc1wiIHNpemU9XCJsZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOZXdEb2N1bWVudFJhdGVDaGFydCBkb2NJbmZvcz17ZG9jSW5mb3N9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUHJlbWl1bUZlYXR1cmU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtdC0yIHRhZy1zdGF0aXN0aWNzXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctOFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByZW1pdW1GZWF0dXJlIHJlcXVpcmVkPSdicm9uemUnIGZlYXR1cmU9XCJzdGF0aXN0aWNzXCIgc2l6ZT1cImxnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvcFRhZ3NDaGFydCBkb2NJbmZvcz17ZG9jSW5mb3N9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUHJlbWl1bUZlYXR1cmU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmVtaXVtRmVhdHVyZSByZXF1aXJlZD0nYnJvbnplJyBmZWF0dXJlPVwic3RhdGlzdGljc1wiIHNpemU9XCJsZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb3BUYWdzVGFibGUgZG9jSW5mb3M9e2RvY0luZm9zfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ByZW1pdW1GZWF0dXJlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8L0ZpeGVkTmF2Qm9keT5cblxuICAgICAgICAgICAgICAgIDwvRml4ZWROYXY+XG5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgcmVhZG9ubHkgcGVyc2lzdGVuY2VMYXllck1hbmFnZXI6IFBlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyO1xuICAgIHJlYWRvbmx5IHJlcG9Eb2NNZXRhTWFuYWdlcjogUmVwb0RvY01ldGFNYW5hZ2VyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElTdGF0ZSB7XG4gICAgcmVhZG9ubHkgaXNSZXZpZXdlcj86IGJvb2xlYW47XG59XG4iXX0=