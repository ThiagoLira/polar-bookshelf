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
const Creatable_1 = __importDefault(require("react-select/lib/Creatable"));
const TagOptions_1 = require("./TagOptions");
const Tags_1 = require("polar-shared/src/tags/Tags");
const Logger_1 = require("polar-shared/src/logger/Logger");
const Button_1 = __importDefault(require("reactstrap/lib/Button"));
const Toaster_1 = require("../../../web/js/ui/toaster/Toaster");
const log = Logger_1.Logger.create();
const Styles = {
    relatedTags: {
        marginTop: '5px',
        display: 'flex',
    },
    relatedTagsLabel: {
        marginTop: 'auto',
        marginBottom: 'auto'
    },
    relatedTag: {
        display: 'inline-block',
        backgroundColor: 'var(--grey100)',
        color: 'hsl(0,0%,20%)',
        fontSize: '12px',
        padding: '3px',
        marginTop: 'auto',
        marginBottom: 'auto'
    }
};
class TagInputWidget extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.select = null;
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            open: false,
            pendingTags: []
        };
    }
    render() {
        const availableTagOptions = TagOptions_1.TagOptions.fromTags(this.props.availableTags);
        const pendingTags = TagOptions_1.TagOptions.fromTags(this.state.pendingTags);
        const computeRelatedTags = () => {
            const input = [...this.state.pendingTags]
                .map(current => current.label);
            return this.props.relatedTags.compute(input).map(current => current.tag);
        };
        const relatedTags = computeRelatedTags();
        const RelatedTagsItems = () => {
            return React.createElement("span", null, relatedTags.map(item => React.createElement(Button_1.default, { className: "mr-1", key: item, style: Styles.relatedTag, color: "light", size: "sm", onClick: () => this.addRelatedTag(item) }, item)));
        };
        const RelatedTagsWidget = () => {
            if (relatedTags.length === 0) {
                return React.createElement("div", null);
            }
            return React.createElement("div", { style: Styles.relatedTags },
                React.createElement("div", { className: "mr-1", style: Styles.relatedTagsLabel },
                    React.createElement("strong", null, "Related tags: ")),
                React.createElement(RelatedTagsItems, null));
        };
        return (React.createElement("div", null,
            React.createElement(Creatable_1.default, { isMulti: true, isClearable: true, className: "basic-multi-select", classNamePrefix: "select", onChange: (selectedOptions) => this.handleChange(selectedOptions), value: pendingTags, defaultValue: pendingTags, placeholder: "Create or select tags ...", options: availableTagOptions, ref: ref => this.select = ref }),
            React.createElement("div", null,
                React.createElement(RelatedTagsWidget, null))));
    }
    addRelatedTag(label) {
        const tag = {
            id: label,
            label
        };
        const tags = [tag, ...this.state.pendingTags];
        this.handleChange(TagOptions_1.TagOptions.fromTags(tags));
        this.select.focus();
    }
    handleChange(selectedOptions) {
        const tags = TagOptions_1.TagOptions.toTags(selectedOptions);
        const newPendingTags = Tags_1.Tags.findValidTags(...tags);
        const invalidTags = Tags_1.Tags.findInvalidTags(...tags);
        if (invalidTags.length !== 0) {
            const invalidTagsStr = invalidTags.map(current => current.label)
                .join(", ");
            Toaster_1.Toaster.warning("Some tags were excluded - spaces and other control characters not supported: " + invalidTagsStr, "Invalid tags");
            log.warn("Some tags were invalid", invalidTags);
        }
        this.setState(Object.assign(Object.assign({}, this.state), { pendingTags: newPendingTags }));
        this.props.onChange(newPendingTags);
    }
}
exports.TagInputWidget = TagInputWidget;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFnSW5wdXRXaWRnZXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJUYWdJbnB1dFdpZGdldC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQStCO0FBQy9CLDJFQUF5RDtBQUV6RCw2Q0FBd0M7QUFDeEMscURBQXFEO0FBQ3JELDJEQUFzRDtBQUd0RCxtRUFBMkM7QUFDM0MsZ0VBQTJEO0FBRTNELE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU1QixNQUFNLE1BQU0sR0FBYztJQUV0QixXQUFXLEVBQUU7UUFDVCxTQUFTLEVBQUUsS0FBSztRQUNoQixPQUFPLEVBQUUsTUFBTTtLQUNsQjtJQUVELGdCQUFnQixFQUFFO1FBQ2QsU0FBUyxFQUFFLE1BQU07UUFDakIsWUFBWSxFQUFFLE1BQU07S0FDdkI7SUFFRCxVQUFVLEVBQUU7UUFDUixPQUFPLEVBQUUsY0FBYztRQUN2QixlQUFlLEVBQUUsZ0JBQWdCO1FBQ2pDLEtBQUssRUFBRSxlQUFlO1FBQ3RCLFFBQVEsRUFBRSxNQUFNO1FBQ2hCLE9BQU8sRUFBRSxLQUFLO1FBQ2QsU0FBUyxFQUFFLE1BQU07UUFDakIsWUFBWSxFQUFFLE1BQU07S0FDdkI7Q0FFSixDQUFDO0FBRUYsTUFBYSxjQUFlLFNBQVEsS0FBSyxDQUFDLFNBQXlCO0lBSS9ELFlBQVksS0FBYSxFQUFFLE9BQVk7UUFDbkMsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztRQUhsQixXQUFNLEdBQXNDLElBQUksQ0FBQztRQUtyRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWpELElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDVCxJQUFJLEVBQUUsS0FBSztZQUNYLFdBQVcsRUFBRSxFQUFFO1NBQ2xCLENBQUM7SUFFTixDQUFDO0lBRU0sTUFBTTtRQUVULE1BQU0sbUJBQW1C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QUVoRCxNQUFNLGNBQWMsR0FBRyxXQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDbkQsTUFBTSxXQUFXLEdBQUcsV0FBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1FBRWxELElBQUksV0FBVyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFFMUIsTUFBTSxjQUFjLEdBQ2hCLFdBQVcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO2lCQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFcEIsaUJBQU8sQ0FBQyxPQUFPLENBQUMsK0VBQStFLEdBQUcsY0FBYyxFQUNoRyxjQUFjLENBQUMsQ0FBQztZQUVoQyxHQUFHLENBQUMsSUFBSSxDQUFDLHdCQUF3QixFQUFFLFdBQVcsQ0FBQyxDQUFDO1NBRW5EO1FBRUQsSUFBSSxDQUFDLFFBQVEsaUNBQUssSUFBSSxDQUFDLEtBQUssS0FBRSxXQUFXLEVBQUUsY0FBYyxJQUFFLENBQUM7UUFFNUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUM7SUFFeEMsQ0FBQztDQUVKO0FBcklELHdDQXFJQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDcmVhdGFibGVTZWxlY3QgZnJvbSAncmVhY3Qtc2VsZWN0L2xpYi9DcmVhdGFibGUnO1xuaW1wb3J0IHtUYWdPcHRpb259IGZyb20gJy4vVGFnT3B0aW9uJztcbmltcG9ydCB7VGFnT3B0aW9uc30gZnJvbSAnLi9UYWdPcHRpb25zJztcbmltcG9ydCB7VGFnLCBUYWdzfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3RhZ3MvVGFncyc7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7SVN0eWxlTWFwfSBmcm9tICcuLi8uLi8uLi93ZWIvanMvcmVhY3QvSVN0eWxlTWFwJztcbmltcG9ydCB7UmVsYXRlZFRhZ3N9IGZyb20gJy4uLy4uLy4uL3dlYi9qcy90YWdzL3JlbGF0ZWQvUmVsYXRlZFRhZ3MnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdHN0cmFwL2xpYi9CdXR0b24nO1xuaW1wb3J0IHtUb2FzdGVyfSBmcm9tICcuLi8uLi8uLi93ZWIvanMvdWkvdG9hc3Rlci9Ub2FzdGVyJztcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG5jb25zdCBTdHlsZXM6IElTdHlsZU1hcCA9IHtcblxuICAgIHJlbGF0ZWRUYWdzOiB7XG4gICAgICAgIG1hcmdpblRvcDogJzVweCcsXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICB9LFxuXG4gICAgcmVsYXRlZFRhZ3NMYWJlbDoge1xuICAgICAgICBtYXJnaW5Ub3A6ICdhdXRvJyxcbiAgICAgICAgbWFyZ2luQm90dG9tOiAnYXV0bydcbiAgICB9LFxuXG4gICAgcmVsYXRlZFRhZzoge1xuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndmFyKC0tZ3JleTEwMCknLFxuICAgICAgICBjb2xvcjogJ2hzbCgwLDAlLDIwJSknLFxuICAgICAgICBmb250U2l6ZTogJzEycHgnLFxuICAgICAgICBwYWRkaW5nOiAnM3B4JyxcbiAgICAgICAgbWFyZ2luVG9wOiAnYXV0bycsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogJ2F1dG8nXG4gICAgfVxuXG59O1xuXG5leHBvcnQgY2xhc3MgVGFnSW5wdXRXaWRnZXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICAgIHByaXZhdGUgc2VsZWN0OiBDcmVhdGFibGVTZWxlY3Q8VGFnT3B0aW9uPiB8IG51bGwgPSBudWxsO1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcywgY29udGV4dDogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcblxuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIG9wZW46IGZhbHNlLFxuICAgICAgICAgICAgcGVuZGluZ1RhZ3M6IFtdXG4gICAgICAgIH07XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuXG4gICAgICAgIGNvbnN0IGF2YWlsYWJsZVRhZ09wdGlvbnMgPSBUYWdPcHRpb25zLmZyb21UYWdzKHRoaXMucHJvcHMuYXZhaWxhYmxlVGFncyk7XG5cbiAgICAgICAgY29uc3QgcGVuZGluZ1RhZ3MgPSBUYWdPcHRpb25zLmZyb21UYWdzKHRoaXMuc3RhdGUucGVuZGluZ1RhZ3MpO1xuXG4gICAgICAgIGNvbnN0IGNvbXB1dGVSZWxhdGVkVGFncyA9ICgpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBbLi4udGhpcy5zdGF0ZS5wZW5kaW5nVGFnc11cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKGN1cnJlbnQgPT4gY3VycmVudC5sYWJlbClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzLnJlbGF0ZWRUYWdzLmNvbXB1dGUoaW5wdXQpLm1hcChjdXJyZW50ID0+IGN1cnJlbnQudGFnKTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHJlbGF0ZWRUYWdzOiBzdHJpbmdbXSA9IGNvbXB1dGVSZWxhdGVkVGFncygpO1xuXG4gICAgICAgIGNvbnN0IFJlbGF0ZWRUYWdzSXRlbXMgPSAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gPHNwYW4+XG4gICAgICAgICAgICAgICAge3JlbGF0ZWRUYWdzLm1hcChpdGVtID0+XG4gICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cIm1yLTFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtTdHlsZXMucmVsYXRlZFRhZ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJsaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuYWRkUmVsYXRlZFRhZyhpdGVtKX0+e2l0ZW19PC9CdXR0b24+KX1cbiAgICAgICAgICAgIDwvc3Bhbj47XG5cbiAgICAgICAgfTtcblxuXG4gICAgICAgIGNvbnN0IFJlbGF0ZWRUYWdzV2lkZ2V0ID0gKCkgPT4ge1xuXG4gICAgICAgICAgICBpZiAocmVsYXRlZFRhZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxkaXY+PC9kaXY+O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gPGRpdiBzdHlsZT17U3R5bGVzLnJlbGF0ZWRUYWdzfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1yLTFcIiBzdHlsZT17U3R5bGVzLnJlbGF0ZWRUYWdzTGFiZWx9PlxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlJlbGF0ZWQgdGFnczogPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPFJlbGF0ZWRUYWdzSXRlbXMvPlxuICAgICAgICAgICAgPC9kaXY+O1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgPGRpdj5cblxuICAgICAgICAgICAgICAgIDxDcmVhdGFibGVTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgaXNNdWx0aVxuICAgICAgICAgICAgICAgICAgICBpc0NsZWFyYWJsZVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiYXNpYy1tdWx0aS1zZWxlY3RcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWVQcmVmaXg9XCJzZWxlY3RcIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHNlbGVjdGVkT3B0aW9ucykgPT4gdGhpcy5oYW5kbGVDaGFuZ2Uoc2VsZWN0ZWRPcHRpb25zIGFzIFRhZ09wdGlvbltdKX1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3BlbmRpbmdUYWdzfVxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3BlbmRpbmdUYWdzfVxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNyZWF0ZSBvciBzZWxlY3QgdGFncyAuLi5cIlxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXthdmFpbGFibGVUYWdPcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICByZWY9e3JlZiA9PiB0aGlzLnNlbGVjdCA9IHJlZn0+XG5cbiAgICAgICAgICAgICAgICA8L0NyZWF0YWJsZVNlbGVjdD5cblxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxSZWxhdGVkVGFnc1dpZGdldC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZFJlbGF0ZWRUYWcobGFiZWw6IHN0cmluZykge1xuXG4gICAgICAgIGNvbnN0IHRhZzogVGFnID0ge1xuICAgICAgICAgICAgaWQ6IGxhYmVsLFxuICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCB0YWdzID0gW3RhZywgLi4udGhpcy5zdGF0ZS5wZW5kaW5nVGFnc107XG5cbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UoVGFnT3B0aW9ucy5mcm9tVGFncyh0YWdzKSk7XG5cbiAgICAgICAgLy8gbmVlZCBvciBlbHNlIHRoZSBidXR0b24gaGFzIGZvY3VzIG5vdy4uLlxuICAgICAgICB0aGlzLnNlbGVjdCEuZm9jdXMoKTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgaGFuZGxlQ2hhbmdlKHNlbGVjdGVkT3B0aW9uczogUmVhZG9ubHlBcnJheTxUYWdPcHRpb24+KSB7XG5cbiAgICAgICAgY29uc3QgdGFncyA9IFRhZ09wdGlvbnMudG9UYWdzKHNlbGVjdGVkT3B0aW9ucyk7XG5cbiAgICAgICAgY29uc3QgbmV3UGVuZGluZ1RhZ3MgPSBUYWdzLmZpbmRWYWxpZFRhZ3MoLi4udGFncyk7XG4gICAgICAgIGNvbnN0IGludmFsaWRUYWdzID0gVGFncy5maW5kSW52YWxpZFRhZ3MoLi4udGFncyk7XG5cbiAgICAgICAgaWYgKGludmFsaWRUYWdzLmxlbmd0aCAhPT0gMCkge1xuXG4gICAgICAgICAgICBjb25zdCBpbnZhbGlkVGFnc1N0ciA9XG4gICAgICAgICAgICAgICAgaW52YWxpZFRhZ3MubWFwKGN1cnJlbnQgPT4gY3VycmVudC5sYWJlbClcbiAgICAgICAgICAgICAgICAgICAgLmpvaW4oXCIsIFwiKTtcblxuICAgICAgICAgICAgVG9hc3Rlci53YXJuaW5nKFwiU29tZSB0YWdzIHdlcmUgZXhjbHVkZWQgLSBzcGFjZXMgYW5kIG90aGVyIGNvbnRyb2wgY2hhcmFjdGVycyBub3Qgc3VwcG9ydGVkOiBcIiArIGludmFsaWRUYWdzU3RyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiSW52YWxpZCB0YWdzXCIpO1xuXG4gICAgICAgICAgICBsb2cud2FybihcIlNvbWUgdGFncyB3ZXJlIGludmFsaWRcIiwgaW52YWxpZFRhZ3MpO1xuXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHsuLi50aGlzLnN0YXRlLCBwZW5kaW5nVGFnczogbmV3UGVuZGluZ1RhZ3N9KTtcblxuICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKG5ld1BlbmRpbmdUYWdzKTtcblxuICAgIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGFncyB0aGF0IGNhbiBiZSBzZWxlY3RlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBhdmFpbGFibGVUYWdzOiBSZWFkb25seUFycmF5PFRhZz47XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZXhpc3RpbmcgdGFncyBvbiB0aGlzIGl0ZW0uXG4gICAgICovXG4gICAgcmVhZG9ubHkgZXhpc3RpbmdUYWdzPzogVGFnW107XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcmVsYXRlZFRhZ3MgaW5kZXggd2hpY2ggaXMgdXBkYXRlZCBhcyB0aGUgdXNlciBzZWxlY3RzIG5ldyB0YWdzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlbGF0ZWRUYWdzOiBSZWxhdGVkVGFncztcblxuICAgIHJlYWRvbmx5IG9uQ2hhbmdlOiAodmFsdWVzOiBUYWdbXSkgPT4gdm9pZDtcblxufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcblxuICAgIHJlYWRvbmx5IG9wZW46IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGFncyB0aGF0IGFyZSBhY3RpdmVseSBiZWluZyBzZWxlY3RlZCBidXQgbm90IHlldCBhcHBsaWVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBlbmRpbmdUYWdzOiBUYWdbXTtcblxuXG59XG5cbiJdfQ==