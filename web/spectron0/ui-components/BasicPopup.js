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
const Logger_1 = require("polar-shared/src/logger/Logger");
const Popover_1 = __importDefault(require("reactstrap/lib/Popover"));
const PopoverBody_1 = __importDefault(require("reactstrap/lib/PopoverBody"));
const reactstrap_1 = require("reactstrap");
const log = Logger_1.Logger.create();
class BasicPopup extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.toggle = this.toggle.bind(this);
        this.state = {
            open: false,
        };
    }
    toggle() {
        console.log("FIXME: toggle");
        this.setState({ open: !this.state.open });
    }
    render() {
        return (React.createElement("div", null,
            React.createElement(reactstrap_1.Button, { id: "Popover1", type: "button" }, "Launch Popover"),
            React.createElement(Popover_1.default, { placement: "bottom", isOpen: this.state.open, target: "Popover1", toggle: this.toggle, trigger: "legacy", fade: false, delay: { show: 0, hide: 0 } },
                React.createElement(PopoverBody_1.default, null, "Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."))));
    }
}
exports.BasicPopup = BasicPopup;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzaWNQb3B1cC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkJhc2ljUG9wdXAudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUMvQiwyREFBc0Q7QUFDdEQscUVBQTZDO0FBQzdDLDZFQUFxRDtBQUNyRCwyQ0FBa0M7QUFFbEMsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRzVCLE1BQWEsVUFBVyxTQUFRLEtBQUssQ0FBQyxTQUF5QjtJQUUzRCxZQUFZLEtBQWEsRUFBRSxPQUFZO1FBQ25DLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVyQyxJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1QsSUFBSSxFQUFFLEtBQUs7U0FDZCxDQUFDO0lBRU4sQ0FBQztJQUVPLE1BQU07UUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsQ0FBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBQyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVNLE1BQU07UUFFVCxPQUFPLENBRUg7WUFDSSxvQkFBQyxtQkFBTSxJQUFDLEVBQUUsRUFBQyxVQUFVLEVBQUMsSUFBSSxFQUFDLFFBQVEscUJBRTFCO1lBQ1Qsb0JBQUMsaUJBQU8sSUFBQyxTQUFTLEVBQUMsUUFBUSxFQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUMsVUFBVSxFQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBQyxRQUFRLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUM7Z0JBQy9JLG9CQUFDLHFCQUFXLGtJQUFzSSxDQUM1SSxDQUNSLENBRVQsQ0FBQztJQUVOLENBQUM7Q0FFSjtBQW5DRCxnQ0FtQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCBQb3BvdmVyIGZyb20gJ3JlYWN0c3RyYXAvbGliL1BvcG92ZXInO1xuaW1wb3J0IFBvcG92ZXJCb2R5IGZyb20gJ3JlYWN0c3RyYXAvbGliL1BvcG92ZXJCb2R5JztcbmltcG9ydCB7QnV0dG9ufSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cblxuZXhwb3J0IGNsYXNzIEJhc2ljUG9wdXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJUHJvcHMsIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG5cbiAgICAgICAgdGhpcy50b2dnbGUgPSB0aGlzLnRvZ2dsZS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBvcGVuOiBmYWxzZSxcbiAgICAgICAgfTtcblxuICAgIH1cblxuICAgIHByaXZhdGUgdG9nZ2xlKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkZJWE1FOiB0b2dnbGVcIik7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe29wZW46ICEgdGhpcy5zdGF0ZS5vcGVufSk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxCdXR0b24gaWQ9XCJQb3BvdmVyMVwiIHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgTGF1bmNoIFBvcG92ZXJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8UG9wb3ZlciBwbGFjZW1lbnQ9XCJib3R0b21cIiBpc09wZW49e3RoaXMuc3RhdGUub3Blbn0gdGFyZ2V0PVwiUG9wb3ZlcjFcIiB0b2dnbGU9e3RoaXMudG9nZ2xlfSB0cmlnZ2VyPVwibGVnYWN5XCIgZmFkZT17ZmFsc2V9IGRlbGF5PXt7c2hvdzogMCwgaGlkZTogMH19PlxuICAgICAgICAgICAgICAgICAgICA8UG9wb3ZlckJvZHk+U2VkIHBvc3VlcmUgY29uc2VjdGV0dXIgZXN0IGF0IGxvYm9ydGlzLiBBZW5lYW4gZXUgbGVvIHF1YW0uIFBlbGxlbnRlc3F1ZSBvcm5hcmUgc2VtIGxhY2luaWEgcXVhbSB2ZW5lbmF0aXMgdmVzdGlidWx1bS48L1BvcG92ZXJCb2R5PlxuICAgICAgICAgICAgICAgIDwvUG9wb3Zlcj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICk7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUHJvcHMge1xuXG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xuXG4gICAgcmVhZG9ubHkgb3BlbjogYm9vbGVhbjtcblxufVxuXG4iXX0=