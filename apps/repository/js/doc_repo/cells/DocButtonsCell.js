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
const DocButton_1 = require("../../ui/DocButton");
const TagInput_1 = require("../../TagInput");
const FlagDocButton_1 = require("../../ui/FlagDocButton");
const ArchiveDocButton_1 = require("../../ui/ArchiveDocButton");
const DocDropdown_1 = require("../../DocDropdown");
const Optional_1 = require("polar-shared/src/util/ts/Optional");
const ReactComponents_1 = require("../../../../../web/js/react/ReactComponents");
class DocButtonsCell extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.selectCurrentRow = this.selectCurrentRow.bind(this);
        this.getRepoDocInfo = this.getRepoDocInfo.bind(this);
        this.onDocTagged = this.onDocTagged.bind(this);
        this.doHandleToggleField = this.doHandleToggleField.bind(this);
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return ReactComponents_1.ReactComponents.shouldComponentUpdate(this.props, nextProps, ['viewIndex', 'flagged', 'archived']);
    }
    render() {
        const { viewIndex, flagged, archived } = this.props;
        const existingTags = () => {
            const repoDocInfo = this.getRepoDocInfo();
            return Object.values(Optional_1.Optional.of(repoDocInfo.docInfo.tags).getOrElse({}));
        };
        return (React.createElement("div", { className: "doc-buttons", style: { display: 'flex' } },
            React.createElement(DocButton_1.DocButton, null,
                React.createElement(TagInput_1.TagInput, { availableTags: this.props.tagsProvider(), existingTags: existingTags, relatedTags: this.props.relatedTags, onChange: (tags) => this.onDocTagged(tags) })),
            React.createElement(FlagDocButton_1.FlagDocButton, { active: flagged, onClick: () => this.doHandleToggleField('flagged') }),
            React.createElement(ArchiveDocButton_1.ArchiveDocButton, { active: archived, onClick: () => this.doHandleToggleField('archived') }),
            React.createElement("div", { onContextMenu: (event) => this.selectCurrentRow(event, 'context'), onClick: (event) => this.selectCurrentRow(event, 'click') },
                React.createElement(DocButton_1.DocButton, null,
                    React.createElement(DocDropdown_1.DocDropdown, { id: 'doc-dropdown-' + viewIndex, filters: this.props.filters, getSelected: this.props.getSelected, onDelete: this.props.onDocDeleteRequested, onSetTitle: this.props.onDocSetTitle, onDocumentLoadRequested: this.props.onDocumentLoadRequested, onRemoveFromFolder: this.props.onRemoveFromFolder })))));
    }
    getRepoDocInfo() {
        const { viewIndex } = this.props;
        return this.props.getRow(viewIndex);
    }
    ;
    onDocTagged(tags) {
        const repoDocInfo = this.getRepoDocInfo();
        this.props.onDocTagged(repoDocInfo, tags);
    }
    doHandleToggleField(type) {
        const repoDocInfo = this.getRepoDocInfo();
        this.props.doHandleToggleField(repoDocInfo, type);
    }
    selectCurrentRow(event, type) {
        const { viewIndex } = this.props;
        this.props.selectRow(viewIndex, event.nativeEvent, type);
    }
    ;
}
exports.DocButtonsCell = DocButtonsCell;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jQnV0dG9uc0NlbGwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJEb2NCdXR0b25zQ2VsbC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsNkNBQStCO0FBQy9CLGtEQUE2QztBQUM3Qyw2Q0FBd0M7QUFDeEMsMERBQXFEO0FBQ3JELGdFQUEyRDtBQUMzRCxtREFBOEM7QUFHOUMsZ0VBQTJEO0FBSzNELGlGQUE0RTtBQUU1RSxNQUFhLGNBQWUsU0FBUSxLQUFLLENBQUMsU0FBaUI7SUFFdkQsWUFBWSxLQUFhLEVBQUUsT0FBWTtRQUNuQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRXRCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUVuRSxDQUFDO0lBRU0scUJBQXFCLENBQUMsU0FBMkIsRUFBRSxTQUF3QixFQUFFLFdBQWdCO1FBQ2hHLE9BQU8saUNBQWUsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDLFdBQVcsRUFBRSxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUM5RyxDQUFDO0lBRU0sTUFBTTtRQUVULE1BQU0sRUFBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFFbEQsTUFBTSxZQUFZLEdBQUcsR0FB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LEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDNUQsQ0FBQztJQUFBLENBQUM7Q0FFTDtBQXhGRCx3Q0F3RkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0RvY0J1dHRvbn0gZnJvbSBcIi4uLy4uL3VpL0RvY0J1dHRvblwiO1xuaW1wb3J0IHtUYWdJbnB1dH0gZnJvbSBcIi4uLy4uL1RhZ0lucHV0XCI7XG5pbXBvcnQge0ZsYWdEb2NCdXR0b259IGZyb20gXCIuLi8uLi91aS9GbGFnRG9jQnV0dG9uXCI7XG5pbXBvcnQge0FyY2hpdmVEb2NCdXR0b259IGZyb20gXCIuLi8uLi91aS9BcmNoaXZlRG9jQnV0dG9uXCI7XG5pbXBvcnQge0RvY0Ryb3Bkb3dufSBmcm9tIFwiLi4vLi4vRG9jRHJvcGRvd25cIjtcbmltcG9ydCB7UmVsYXRlZFRhZ3N9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi93ZWIvanMvdGFncy9yZWxhdGVkL1JlbGF0ZWRUYWdzXCI7XG5pbXBvcnQge1RhZ30gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvdGFncy9UYWdzXCI7XG5pbXBvcnQge09wdGlvbmFsfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy91dGlsL3RzL09wdGlvbmFsXCI7XG5pbXBvcnQge1JlcG9Eb2NJbmZvfSBmcm9tIFwiLi4vLi4vUmVwb0RvY0luZm9cIjtcbmltcG9ydCB7T25SZW1vdmVGcm9tRm9sZGVyQ2FsbGJhY2t9IGZyb20gXCIuLi8uLi9Eb2NEcm9wZG93bkl0ZW1zXCI7XG5pbXBvcnQge0ZpbHRlcnN9IGZyb20gXCIuLi9Eb2NSZXBvRmlsdGVyc1wiO1xuaW1wb3J0IHtTZWxlY3RSb3dUeXBlfSBmcm9tIFwiLi4vRG9jUmVwb1NjcmVlblwiO1xuaW1wb3J0IHtSZWFjdENvbXBvbmVudHN9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi93ZWIvanMvcmVhY3QvUmVhY3RDb21wb25lbnRzXCI7XG5cbmV4cG9ydCBjbGFzcyBEb2NCdXR0b25zQ2VsbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHM+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJUHJvcHMsIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG5cbiAgICAgICAgdGhpcy5zZWxlY3RDdXJyZW50Um93ID0gdGhpcy5zZWxlY3RDdXJyZW50Um93LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZ2V0UmVwb0RvY0luZm8gPSB0aGlzLmdldFJlcG9Eb2NJbmZvLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25Eb2NUYWdnZWQgPSB0aGlzLm9uRG9jVGFnZ2VkLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZG9IYW5kbGVUb2dnbGVGaWVsZCA9IHRoaXMuZG9IYW5kbGVUb2dnbGVGaWVsZC5iaW5kKHRoaXMpO1xuXG4gICAgfVxuXG4gICAgcHVibGljIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHM6IFJlYWRvbmx5PElQcm9wcz4sIG5leHRTdGF0ZTogUmVhZG9ubHk8YW55PiwgbmV4dENvbnRleHQ6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gUmVhY3RDb21wb25lbnRzLnNob3VsZENvbXBvbmVudFVwZGF0ZSh0aGlzLnByb3BzLCBuZXh0UHJvcHMsIFsndmlld0luZGV4JywgJ2ZsYWdnZWQnLCAnYXJjaGl2ZWQnXSk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICBjb25zdCB7dmlld0luZGV4LCBmbGFnZ2VkLCBhcmNoaXZlZH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGNvbnN0IGV4aXN0aW5nVGFncyA9ICgpOiBSZWFkb25seUFycmF5PFRhZz4gPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVwb0RvY0luZm8gPSB0aGlzLmdldFJlcG9Eb2NJbmZvKCk7XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhPcHRpb25hbC5vZihyZXBvRG9jSW5mby5kb2NJbmZvLnRhZ3MpLmdldE9yRWxzZSh7fSkpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZG9jLWJ1dHRvbnNcIiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4J319PlxuXG4gICAgICAgICAgICAgICAgPERvY0J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICB7LypXQVJOSU5HOiBtYWtpbmcgdGhpcyBhIGZ1bmN0aW9uIGJyZWFrcyB0aGUgbGF5b3V0Li4uKi99XG5cbiAgICAgICAgICAgICAgICAgICAgPFRhZ0lucHV0IGF2YWlsYWJsZVRhZ3M9e3RoaXMucHJvcHMudGFnc1Byb3ZpZGVyKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1RhZ3M9e2V4aXN0aW5nVGFnc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbGF0ZWRUYWdzPXt0aGlzLnByb3BzLnJlbGF0ZWRUYWdzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh0YWdzKSA9PiB0aGlzLm9uRG9jVGFnZ2VkKHRhZ3MpfS8+XG5cbiAgICAgICAgICAgICAgICA8L0RvY0J1dHRvbj5cblxuICAgICAgICAgICAgICAgIDxGbGFnRG9jQnV0dG9uIGFjdGl2ZT17ZmxhZ2dlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmRvSGFuZGxlVG9nZ2xlRmllbGQoJ2ZsYWdnZWQnKX0vPlxuXG4gICAgICAgICAgICAgICAgPEFyY2hpdmVEb2NCdXR0b24gYWN0aXZlPXthcmNoaXZlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmRvSGFuZGxlVG9nZ2xlRmllbGQoJ2FyY2hpdmVkJyl9Lz5cblxuICAgICAgICAgICAgICAgIDxkaXYgb25Db250ZXh0TWVudT17KGV2ZW50KSA9PiB0aGlzLnNlbGVjdEN1cnJlbnRSb3coZXZlbnQsICdjb250ZXh0Jyl9XG4gICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHRoaXMuc2VsZWN0Q3VycmVudFJvdyhldmVudCwgJ2NsaWNrJyl9PlxuXG4gICAgICAgICAgICAgICAgICAgIDxEb2NCdXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxEb2NEcm9wZG93biBpZD17J2RvYy1kcm9wZG93bi0nICsgdmlld0luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcnM9e3RoaXMucHJvcHMuZmlsdGVyc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRTZWxlY3RlZD17dGhpcy5wcm9wcy5nZXRTZWxlY3RlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRlbGV0ZT17dGhpcy5wcm9wcy5vbkRvY0RlbGV0ZVJlcXVlc3RlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblNldFRpdGxlPXt0aGlzLnByb3BzLm9uRG9jU2V0VGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Eb2N1bWVudExvYWRSZXF1ZXN0ZWQ9e3RoaXMucHJvcHMub25Eb2N1bWVudExvYWRSZXF1ZXN0ZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25SZW1vdmVGcm9tRm9sZGVyPXt0aGlzLnByb3BzLm9uUmVtb3ZlRnJvbUZvbGRlcn0vPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvRG9jQnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRSZXBvRG9jSW5mbygpIHtcbiAgICAgICAgY29uc3Qge3ZpZXdJbmRleH0gPSB0aGlzLnByb3BzO1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5nZXRSb3codmlld0luZGV4KTtcbiAgICB9O1xuXG4gICAgcHJpdmF0ZSBvbkRvY1RhZ2dlZCh0YWdzOiBSZWFkb25seUFycmF5PFRhZz4pIHtcbiAgICAgICAgY29uc3QgcmVwb0RvY0luZm8gPSB0aGlzLmdldFJlcG9Eb2NJbmZvKCk7XG4gICAgICAgIHRoaXMucHJvcHMub25Eb2NUYWdnZWQocmVwb0RvY0luZm8sIHRhZ3MpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZG9IYW5kbGVUb2dnbGVGaWVsZCh0eXBlOiBUb2dnbGVGaWVsZFR5cGUpIHtcbiAgICAgICAgY29uc3QgcmVwb0RvY0luZm8gPSB0aGlzLmdldFJlcG9Eb2NJbmZvKCk7XG4gICAgICAgIHRoaXMucHJvcHMuZG9IYW5kbGVUb2dnbGVGaWVsZChyZXBvRG9jSW5mbywgdHlwZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZWxlY3RDdXJyZW50Um93IChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4sIHR5cGU6IFNlbGVjdFJvd1R5cGUpIHtcbiAgICAgICAgY29uc3Qge3ZpZXdJbmRleH0gPSB0aGlzLnByb3BzO1xuICAgICAgICB0aGlzLnByb3BzLnNlbGVjdFJvdyh2aWV3SW5kZXgsIGV2ZW50Lm5hdGl2ZUV2ZW50LCB0eXBlKVxuICAgIH07XG5cbn1cblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgcmVhZG9ubHkgdmlld0luZGV4OiBudW1iZXI7XG4gICAgcmVhZG9ubHkgZmxhZ2dlZDogYm9vbGVhbjtcbiAgICByZWFkb25seSBhcmNoaXZlZDogYm9vbGVhbjtcbiAgICByZWFkb25seSBnZXRTZWxlY3RlZDogKCkgPT4gUmVhZG9ubHlBcnJheTxSZXBvRG9jSW5mbz47XG4gICAgcmVhZG9ubHkgZmlsdGVyczogRmlsdGVycztcbiAgICByZWFkb25seSB0YWdzUHJvdmlkZXI6ICgpID0+IFJlYWRvbmx5QXJyYXk8VGFnPjtcbiAgICByZWFkb25seSByZWxhdGVkVGFnczogUmVsYXRlZFRhZ3M7XG4gICAgcmVhZG9ubHkgb25Eb2NUYWdnZWQ6IChyZXBvRG9jSW5mbzogUmVwb0RvY0luZm8sIHRhZ3M6IFJlYWRvbmx5QXJyYXk8VGFnPikgPT4gdm9pZDtcbiAgICByZWFkb25seSBvbkRvY0RlbGV0ZVJlcXVlc3RlZDogKHJlcG9Eb2NJbmZvczogUmVhZG9ubHlBcnJheTxSZXBvRG9jSW5mbz4pID0+IHZvaWQ7XG4gICAgcmVhZG9ubHkgb25Eb2NTZXRUaXRsZTogKHJlcG9Eb2NJbmZvOiBSZXBvRG9jSW5mbywgdGl0bGU6IHN0cmluZykgPT4gdm9pZDtcbiAgICByZWFkb25seSBvblJlbW92ZUZyb21Gb2xkZXI6IE9uUmVtb3ZlRnJvbUZvbGRlckNhbGxiYWNrO1xuICAgIHJlYWRvbmx5IGRvSGFuZGxlVG9nZ2xlRmllbGQ6IChyZXBvRG9jSW5mbzogUmVwb0RvY0luZm8sIHR5cGU6IFRvZ2dsZUZpZWxkVHlwZSkgPT4gdm9pZDtcbiAgICByZWFkb25seSBzZWxlY3RSb3c6IChzZWxlY3RlZElkeDogbnVtYmVyLCBldmVudDogTW91c2VFdmVudCwgdHlwZTogU2VsZWN0Um93VHlwZSkgPT4gdm9pZDtcbiAgICByZWFkb25seSBvbkRvY3VtZW50TG9hZFJlcXVlc3RlZDogKHJlcG9Eb2NJbmZvOiBSZXBvRG9jSW5mbykgPT4gdm9pZDtcbiAgICByZWFkb25seSBnZXRSb3c6ICh2aWV3SW5kZXg6IG51bWJlcikgPT4gUmVwb0RvY0luZm87XG59XG5cbnR5cGUgVG9nZ2xlRmllbGRUeXBlID0gJ2ZsYWdnZWQnIHwgJ2FyY2hpdmVkJztcbiJdfQ==