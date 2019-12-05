"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
const Input_1 = __importDefault(require("reactstrap/lib/Input"));
const reactstrap_1 = require("reactstrap");
const FormGroup_1 = __importDefault(require("reactstrap/lib/FormGroup"));
const Label_1 = __importDefault(require("reactstrap/lib/Label"));
const Button_1 = __importDefault(require("reactstrap/lib/Button"));
const Logger_1 = require("polar-shared/src/logger/Logger");
const TagInputWidget_1 = require("../../TagInputWidget");
const GroupProvisions_1 = require("../../../../../web/js/datastore/sharing/rpc/GroupProvisions");
const Toaster_1 = require("../../../../../web/js/ui/toaster/Toaster");
const log = Logger_1.Logger.create();
class CreateGroupForm extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.formData = {
            name: "",
            description: "",
            tags: []
        };
        this.onTags = this.onTags.bind(this);
        this.onDone = this.onDone.bind(this);
        this.state = {};
    }
    render() {
        return (React.createElement("div", { className: "container" },
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col" },
                    React.createElement("h1", null, "Create Group"),
                    React.createElement("p", null, "Create a new group for sharing documents and collaborating with others."),
                    React.createElement(reactstrap_1.Form, null,
                        React.createElement(FormGroup_1.default, null,
                            React.createElement(Label_1.default, { for: "create-group-name" }, "Name"),
                            React.createElement(Input_1.default, { type: "text", name: "name", id: "create-group-name", placeholder: "Name of group", required: true, onChange: event => this.formData.name = event.currentTarget.value })),
                        React.createElement(FormGroup_1.default, null,
                            React.createElement(Label_1.default, { for: "create-group-description" }, "Description"),
                            React.createElement(Input_1.default, { type: "textarea", name: "description", id: "create-group-description", placeholder: "A description for the group", onChange: event => this.formData.description = event.currentTarget.value })),
                        React.createElement(FormGroup_1.default, null,
                            React.createElement(Label_1.default, null, "Tags"),
                            React.createElement(TagInputWidget_1.TagInputWidget, { availableTags: this.props.tagsProvider(), existingTags: [], relatedTags: this.props.relatedTags, onChange: (tags) => this.onTags(tags) }),
                            React.createElement("p", { className: "text-secondary text-sm mt-1" }, "Select up to 5 tags for this group.  Tags will be used by others to find your group.")),
                        React.createElement("div", { className: "text-right" },
                            React.createElement(Button_1.default, { color: "primary", size: "md", onClick: () => this.onDone() }, "Create Group")))))));
    }
    onTags(tags) {
        this.formData.tags = tags.map(current => current.label);
    }
    onDone() {
        const doGroupProvision = () => __awaiter(this, void 0, void 0, function* () {
            Toaster_1.Toaster.info("Creating your new group. Just a moment...");
            const request = Object.assign(Object.assign({}, this.formData), { docs: [], visibility: 'public', invitations: {
                    message: "",
                    to: []
                } });
            yield GroupProvisions_1.GroupProvisions.exec(request);
            Toaster_1.Toaster.success("Your new group has been created!");
        });
        doGroupProvision()
            .catch(err => log.error(err));
    }
}
exports.CreateGroupForm = CreateGroupForm;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3JlYXRlR3JvdXBGb3JtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQ3JlYXRlR3JvdXBGb3JtLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBK0I7QUFDL0IsaUVBQXlDO0FBQ3pDLDJDQUFnQztBQUNoQyx5RUFBaUQ7QUFDakQsaUVBQXlDO0FBQ3pDLG1FQUEyQztBQUMzQywyREFBc0Q7QUFDdEQseURBQW9EO0FBRXBELGlHQUdxRTtBQUNyRSxzRUFBaUU7QUFHakUsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLE1BQWEsZUFBZ0IsU0FBUSxLQUFLLENBQUMsU0FBeUI7SUFRaEUsWUFBWSxLQUFhLEVBQUUsT0FBWTtRQUNuQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBUFQsYUFBUSxHQUFhO1lBQ2xDLElBQUksRUFBRSxFQUFFO1lBQ1IsV0FBVyxFQUFFLEVBQUU7WUFDZixJQUFJLEVBQUUsRUFBRTtTQUNYLENBQUM7UUFLRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFckMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUNaLENBQUM7SUFFTixDQUFDO0lBRU0sTUFBTTtRQUNULE9BQU8sQ0FFSCw2QkFBSyxTQUFTLEVBQUMsV0FBVztZQUV0Qiw2QkFBSyxTQUFTLEVBQUMsS0FBSztnQkFFaEIsNkJBQUssU0FBUyxFQUFDLEtBQUs7b0JBRWhCLCtDQUFxQjtvQkFFckIseUdBR0k7b0JBRUosb0JBQUMsaUJBQUk7d0JBQ0Qsb0JBQUMsbUJBQVM7NEJBRU4sb0JBQUMsZUFBSyxJQUFDLEdBQUcsRUFBQyxtQkFBbUIsV0FBYTs0QkFFM0Msb0JBQUMsZUFBSyxJQUFDLElBQUksRUFBQyxNQUFNLEVBQ1gsSUFBSSxFQUFDLE1BQU0sRUFDWCxFQUFFLEVBQUMsbUJBQW1CLEVBQ3RCLFdBQVcsRUFBQyxlQUFlLEVBQzNCLFFBQVEsUUFDUixRQUFRLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssR0FDL0QsQ0FFRDt3QkFFWixvQkFBQyxtQkFBUzs0QkFDTixvQkFBQyxlQUFLLElBQUMsR0FBRyxFQUFDLDBCQUEwQixrQkFBb0I7NEJBRXpELG9CQUFDLGVBQUssSUFBQyxJQUFJLEVBQUMsVUFBVSxFQUNmLElBQUksRUFBQyxhQUFhLEVBQ2xCLEVBQUUsRUFBQywwQkFBMEIsRUFDN0IsV0FBVyxFQUFDLDZCQUE2QixFQUN6QyxRQUFRLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssR0FDdEUsQ0FDRDt3QkFFWixvQkFBQyxtQkFBUzs0QkFFTixvQkFBQyxlQUFLLGVBQWE7NEJBRW5CLG9CQUFDLCtCQUFjLElBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLEVBQ3hDLFlBQVksRUFBRSxFQUFFLEVBQ2hCLFdBQVcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFDbkMsUUFBUSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHOzRCQUV4RCwyQkFBRyxTQUFTLEVBQUMsNkJBQTZCLDJGQUd0QyxDQUVJO3dCQUVaLDZCQUFLLFNBQVMsRUFBQyxZQUFZOzRCQUV2QixvQkFBQyxnQkFBTSxJQUFDLEtBQUssRUFBQyxTQUFTLEVBQ2YsSUFBSSxFQUFDLElBQUksRUFDVCxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxtQkFFM0IsQ0FFUCxDQUVILENBQ0wsQ0FDSixDQUNKLENBRVQsQ0FBQztJQUNOLENBQUM7SUFFTyxNQUFNLENBQUMsSUFBVztRQUN0QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFTyxNQUFNO1FBSVYsTUFBTSxnQkFBZ0IsR0FBRyxHQUFTLEVBQUU7WUFFaEMsaUJBQU8sQ0FBQyxJQUFJLENBQUMsMkNBQTJDLENBQUMsQ0FBQztZQUUxRCxNQUFNLE9BQU8sbUNBQ04sSUFBSSxDQUFDLFFBQVEsS0FDaEIsSUFBSSxFQUFFLEVBQUUsRUFDUixVQUFVLEVBQUUsUUFBUSxFQUNwQixXQUFXLEVBQUU7b0JBQ1QsT0FBTyxFQUFFLEVBQUU7b0JBQ1gsRUFBRSxFQUFFLEVBQUU7aUJBQ1QsR0FDSixDQUFDO1lBRUYsTUFBTSxpQ0FBZSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUlwQyxpQkFBTyxDQUFDLE9BQU8sQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO1FBRXhELENBQUMsQ0FBQSxDQUFDO1FBRUYsZ0JBQWdCLEVBQUU7YUFDYixLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFFdEMsQ0FBQztDQUdKO0FBbklELDBDQW1JQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJbnB1dCBmcm9tIFwicmVhY3RzdHJhcC9saWIvSW5wdXRcIjtcbmltcG9ydCB7Rm9ybX0gZnJvbSBcInJlYWN0c3RyYXBcIjtcbmltcG9ydCBGb3JtR3JvdXAgZnJvbSBcInJlYWN0c3RyYXAvbGliL0Zvcm1Hcm91cFwiO1xuaW1wb3J0IExhYmVsIGZyb20gXCJyZWFjdHN0cmFwL2xpYi9MYWJlbFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwicmVhY3RzdHJhcC9saWIvQnV0dG9uXCI7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvbG9nZ2VyL0xvZ2dlclwiO1xuaW1wb3J0IHtUYWdJbnB1dFdpZGdldH0gZnJvbSBcIi4uLy4uL1RhZ0lucHV0V2lkZ2V0XCI7XG5pbXBvcnQge1RhZywgVGFnU3RyfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy90YWdzL1RhZ3NcIjtcbmltcG9ydCB7XG4gICAgR3JvdXBQcm92aXNpb25SZXF1ZXN0LFxuICAgIEdyb3VwUHJvdmlzaW9uc1xufSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vd2ViL2pzL2RhdGFzdG9yZS9zaGFyaW5nL3JwYy9Hcm91cFByb3Zpc2lvbnNcIjtcbmltcG9ydCB7VG9hc3Rlcn0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL3dlYi9qcy91aS90b2FzdGVyL1RvYXN0ZXJcIjtcbmltcG9ydCB7UmVsYXRlZFRhZ3N9IGZyb20gXCIuLi8uLi8uLi8uLi8uLi93ZWIvanMvdGFncy9yZWxhdGVkL1JlbGF0ZWRUYWdzXCI7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuZXhwb3J0IGNsYXNzIENyZWF0ZUdyb3VwRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBmb3JtRGF0YTogRm9ybURhdGEgPSB7XG4gICAgICAgIG5hbWU6IFwiXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxuICAgICAgICB0YWdzOiBbXVxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzLCBjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuXG4gICAgICAgIHRoaXMub25UYWdzID0gdGhpcy5vblRhZ3MuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkRvbmUgPSB0aGlzLm9uRG9uZS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIH07XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+Q3JlYXRlIEdyb3VwPC9oMT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3JlYXRlIGEgbmV3IGdyb3VwIGZvciBzaGFyaW5nIGRvY3VtZW50cyBhbmQgY29sbGFib3JhdGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGggb3RoZXJzLlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBmb3I9XCJjcmVhdGUtZ3JvdXAtbmFtZVwiPk5hbWU8L0xhYmVsPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImNyZWF0ZS1ncm91cC1uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZSBvZiBncm91cFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHRoaXMuZm9ybURhdGEubmFtZSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgZm9yPVwiY3JlYXRlLWdyb3VwLWRlc2NyaXB0aW9uXCI+RGVzY3JpcHRpb248L0xhYmVsPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dGFyZWFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiY3JlYXRlLWdyb3VwLWRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQSBkZXNjcmlwdGlvbiBmb3IgdGhlIGdyb3VwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB0aGlzLmZvcm1EYXRhLmRlc2NyaXB0aW9uID0gZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbD5UYWdzPC9MYWJlbD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFnSW5wdXRXaWRnZXQgYXZhaWxhYmxlVGFncz17dGhpcy5wcm9wcy50YWdzUHJvdmlkZXIoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nVGFncz17W119XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWxhdGVkVGFncz17dGhpcy5wcm9wcy5yZWxhdGVkVGFnc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodGFncykgPT4gdGhpcy5vblRhZ3ModGFncyl9Lz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNlY29uZGFyeSB0ZXh0LXNtIG10LTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlbGVjdCB1cCB0byA1IHRhZ3MgZm9yIHRoaXMgZ3JvdXAuICBUYWdzIHdpbGwgYmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZWQgYnkgb3RoZXJzIHRvIGZpbmQgeW91ciBncm91cC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIm1kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLm9uRG9uZSgpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENyZWF0ZSBHcm91cFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uVGFncyh0YWdzOiBUYWdbXSkge1xuICAgICAgICB0aGlzLmZvcm1EYXRhLnRhZ3MgPSB0YWdzLm1hcChjdXJyZW50ID0+IGN1cnJlbnQubGFiZWwpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25Eb25lKCkge1xuXG4gICAgICAgIC8vIFRPRE86IGZpcnN0IHZhbGlkYXRlIHRoZSBuYW1lIGFuZCB0aGF0IGl0IGxvb2tzIGFjY2VwdGFibGUuLi5cblxuICAgICAgICBjb25zdCBkb0dyb3VwUHJvdmlzaW9uID0gYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgICAgICBUb2FzdGVyLmluZm8oXCJDcmVhdGluZyB5b3VyIG5ldyBncm91cC4gSnVzdCBhIG1vbWVudC4uLlwiKTtcblxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdDogR3JvdXBQcm92aXNpb25SZXF1ZXN0ID0ge1xuICAgICAgICAgICAgICAgIC4uLnRoaXMuZm9ybURhdGEsXG4gICAgICAgICAgICAgICAgZG9jczogW10sXG4gICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogJ3B1YmxpYycsXG4gICAgICAgICAgICAgICAgaW52aXRhdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgdG86IFtdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgYXdhaXQgR3JvdXBQcm92aXNpb25zLmV4ZWMocmVxdWVzdCk7XG5cbiAgICAgICAgICAgIC8vIFRPRE86IHJlZGlyZWN0IFJJR0hUIHRvIHRoZSBuZXcgZ3JvdXAgc28gdGhleSBjYW4gc3RhcnQgYWRkaW5nXG4gICAgICAgICAgICAvLyBkb2N1bWVudHMgdGhlcmUuXG4gICAgICAgICAgICBUb2FzdGVyLnN1Y2Nlc3MoXCJZb3VyIG5ldyBncm91cCBoYXMgYmVlbiBjcmVhdGVkIVwiKTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIGRvR3JvdXBQcm92aXNpb24oKVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBsb2cuZXJyb3IoZXJyKSk7XG5cbiAgICB9XG5cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZvcm1EYXRhIHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgICB0YWdzOiBSZWFkb25seUFycmF5PFRhZ1N0cj47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVByb3BzIHtcbiAgICByZWFkb25seSB0YWdzUHJvdmlkZXI6ICgpID0+IFJlYWRvbmx5QXJyYXk8VGFnPjtcbiAgICByZWFkb25seSByZWxhdGVkVGFnczogUmVsYXRlZFRhZ3M7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVN0YXRlIHtcblxufVxuIl19