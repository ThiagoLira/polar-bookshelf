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
const Button_1 = __importDefault(require("reactstrap/lib/Button"));
const Dialogs_1 = require("../dialogs/Dialogs");
const Functions_1 = require("polar-shared/src/util/Functions");
const Tags_1 = require("polar-shared/src/tags/Tags");
class TagCreateButton extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.onClick = this.onClick.bind(this);
        this.onCreated = this.onCreated.bind(this);
    }
    render() {
        const disabled = this.props.selected.length !== 1;
        const tag = this.props.selected[0];
        return (React.createElement(Button_1.default, { className: "ml-1", color: "light", disabled: disabled, onClick: () => this.onClick(tag), title: "Enter a name for " },
            React.createElement("i", { className: "hover-button fas fa-plus" })));
    }
    onClick(tag) {
        Dialogs_1.Dialogs.prompt({
            title: "Enter the name of a new folder:",
            onCancel: Functions_1.NULL_FUNCTION,
            validator: createInputValidator(tag),
            onDone: value => this.onCreated(tag, value)
        });
    }
    onCreated(tag, name) {
        const path = createTag(tag, name);
        this.props.onCreated(path);
    }
}
exports.TagCreateButton = TagCreateButton;
function createInputValidator(tag) {
    return (input) => {
        const newTag = createTag(tag, input);
        if (!Tags_1.Tags.validate(newTag).isPresent()) {
            console.warn("Given invalid tag: ", newTag);
            return {
                message: "Invalid tag.  Tags may not contain spaces, quotes, etc."
            };
        }
        return undefined;
    };
}
function createTag(parent, child) {
    if (parent === '/') {
        return parent + child;
    }
    return parent + '/' + child;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFnQ3JlYXRlQnV0dG9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVGFnQ3JlYXRlQnV0dG9uLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBK0I7QUFFL0IsbUVBQTJDO0FBQzNDLGdEQUEyQztBQUMzQywrREFBOEQ7QUFDOUQscURBQWdEO0FBR2hELE1BQWEsZUFBZ0IsU0FBUSxLQUFLLENBQUMsU0FBeUI7SUFFaEUsWUFBWSxLQUFhLEVBQUUsT0FBWTtRQUNuQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRXRCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUUvQyxDQUFDO0lBRU0sTUFBTTtRQUVULE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7UUFFbEQsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFbkMsT0FBTyxDQUNILG9CQUFDLGdCQUFNLElBQUMsU0FBUyxFQUFDLE1BQU0sRUFDaEIsS0FBSyxFQUFDLE9BQU8sRUFDYixRQUFRLEVBQUUsUUFBUSxFQUNsQixPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFDaEMsS0FBSyxFQUFDLG1CQUFtQjtZQUU3QiwyQkFBRyxTQUFTLEVBQUMsMEJBQTBCLEdBQUUsQ0FFcEMsQ0FDWixDQUFDO0lBRU4sQ0FBQztJQUVPLE9BQU8sQ0FBQyxHQUFXO1FBRXZCLGlCQUFPLENBQUMsTUFBTSxDQUFDO1lBQ1gsS0FBSyxFQUFFLGlDQUFpQztZQUV4QyxRQUFRLEVBQUUseUJBQWE7WUFDdkIsU0FBUyxFQUFFLG9CQUFvQixDQUFDLEdBQUcsQ0FBQztZQUNwQyxNQUFNLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUM7U0FFOUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQztJQUVPLFNBQVMsQ0FBQyxHQUFXLEVBQUUsSUFBWTtRQUN2QyxNQUFNLElBQUksR0FBSSxTQUFTLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9CLENBQUM7Q0FFSjtBQWhERCwwQ0FnREM7QUFXRCxTQUFTLG9CQUFvQixDQUFDLEdBQVc7SUFFckMsT0FBTyxDQUFDLEtBQWEsRUFBRSxFQUFFO1FBQ3JCLE1BQU0sTUFBTSxHQUFHLFNBQVMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFckMsSUFBSSxDQUFFLFdBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDckMsT0FBTyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUM1QyxPQUFPO2dCQUNILE9BQU8sRUFBRSx5REFBeUQ7YUFDckUsQ0FBQztTQUNMO1FBRUQsT0FBTyxTQUFTLENBQUM7SUFFckIsQ0FBQyxDQUFDO0FBQ04sQ0FBQztBQUVELFNBQVMsU0FBUyxDQUFDLE1BQWMsRUFBRSxLQUFhO0lBRTVDLElBQUksTUFBTSxLQUFLLEdBQUcsRUFBRTtRQUNoQixPQUFPLE1BQU0sR0FBRyxLQUFLLENBQUM7S0FDekI7SUFFRCxPQUFPLE1BQU0sR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDO0FBRWhDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1RhZ30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy90YWdzL1RhZ3MnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdHN0cmFwL2xpYi9CdXR0b24nO1xuaW1wb3J0IHtEaWFsb2dzfSBmcm9tICcuLi9kaWFsb2dzL0RpYWxvZ3MnO1xuaW1wb3J0IHtOVUxMX0ZVTkNUSU9OfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvRnVuY3Rpb25zJztcbmltcG9ydCB7VGFnc30gZnJvbSAncG9sYXItc2hhcmVkL3NyYy90YWdzL1RhZ3MnO1xuaW1wb3J0IHtUYWdTdHJ9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdGFncy9UYWdzJztcblxuZXhwb3J0IGNsYXNzIFRhZ0NyZWF0ZUJ1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcywgY29udGV4dDogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcblxuICAgICAgICB0aGlzLm9uQ2xpY2sgPSB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkNyZWF0ZWQgPSB0aGlzLm9uQ3JlYXRlZC5iaW5kKHRoaXMpO1xuXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMucHJvcHMuc2VsZWN0ZWQubGVuZ3RoICE9PSAxO1xuXG4gICAgICAgIGNvbnN0IHRhZyA9IHRoaXMucHJvcHMuc2VsZWN0ZWRbMF07XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwibWwtMVwiXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwibGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMub25DbGljayh0YWcpfVxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkVudGVyIGEgbmFtZSBmb3IgXCI+XG5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJob3Zlci1idXR0b24gZmFzIGZhLXBsdXNcIi8+XG5cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICApO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkNsaWNrKHRhZzogVGFnU3RyKSB7XG5cbiAgICAgICAgRGlhbG9ncy5wcm9tcHQoe1xuICAgICAgICAgICAgdGl0bGU6IFwiRW50ZXIgdGhlIG5hbWUgb2YgYSBuZXcgZm9sZGVyOlwiLFxuXG4gICAgICAgICAgICBvbkNhbmNlbDogTlVMTF9GVU5DVElPTixcbiAgICAgICAgICAgIHZhbGlkYXRvcjogY3JlYXRlSW5wdXRWYWxpZGF0b3IodGFnKSxcbiAgICAgICAgICAgIG9uRG9uZTogdmFsdWUgPT4gdGhpcy5vbkNyZWF0ZWQodGFnLCB2YWx1ZSlcblxuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgb25DcmVhdGVkKHRhZzogVGFnU3RyLCBuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgcGF0aCA9ICBjcmVhdGVUYWcodGFnLCBuYW1lKTtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNyZWF0ZWQocGF0aCk7XG4gICAgfVxuXG59XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICAgIHJlYWRvbmx5IHNlbGVjdGVkOiBSZWFkb25seUFycmF5PFRhZ1N0cj47XG4gICAgcmVhZG9ubHkgb25DcmVhdGVkOiAocGF0aDogc3RyaW5nKSA9PiB2b2lkO1xufVxuXG5cbmludGVyZmFjZSBJU3RhdGUge1xufVxuXG5mdW5jdGlvbiBjcmVhdGVJbnB1dFZhbGlkYXRvcih0YWc6IHN0cmluZykge1xuXG4gICAgcmV0dXJuIChpbnB1dDogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1RhZyA9IGNyZWF0ZVRhZyh0YWcsIGlucHV0KTtcblxuICAgICAgICBpZiAoISBUYWdzLnZhbGlkYXRlKG5ld1RhZykuaXNQcmVzZW50KCkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIkdpdmVuIGludmFsaWQgdGFnOiBcIiwgbmV3VGFnKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJJbnZhbGlkIHRhZy4gIFRhZ3MgbWF5IG5vdCBjb250YWluIHNwYWNlcywgcXVvdGVzLCBldGMuXCJcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFnKHBhcmVudDogc3RyaW5nLCBjaGlsZDogc3RyaW5nKSB7XG5cbiAgICBpZiAocGFyZW50ID09PSAnLycpIHtcbiAgICAgICAgcmV0dXJuIHBhcmVudCArIGNoaWxkO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJlbnQgKyAnLycgKyBjaGlsZDtcblxufVxuIl19