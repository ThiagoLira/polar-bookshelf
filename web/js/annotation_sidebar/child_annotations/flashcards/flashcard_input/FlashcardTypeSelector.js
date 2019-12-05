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
const FlashcardType_1 = require("polar-shared/src/metadata/FlashcardType");
const Input_1 = __importDefault(require("reactstrap/lib/Input"));
const log = Logger_1.Logger.create();
class Styles {
}
Styles.SelectCardType = {
    minWidth: '10em',
    fontSize: '14px'
};
class FlashcardTypeSelector extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }
    render() {
        return (React.createElement(Input_1.default, { type: "select", style: Styles.SelectCardType, defaultValue: this.props.flashcardType, className: "p-0", onChange: htmlInputElement => this.props.onChangeFlashcardType(htmlInputElement.target.value) },
            React.createElement("option", { value: FlashcardType_1.FlashcardType.BASIC_FRONT_BACK }, "Front and back"),
            React.createElement("option", { value: FlashcardType_1.FlashcardType.CLOZE }, "Cloze")));
    }
}
exports.FlashcardTypeSelector = FlashcardTypeSelector;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmxhc2hjYXJkVHlwZVNlbGVjdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRmxhc2hjYXJkVHlwZVNlbGVjdG9yLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBK0I7QUFDL0IsMkRBQXNEO0FBQ3RELDJFQUFzRTtBQUN0RSxpRUFBeUM7QUFFekMsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLE1BQU0sTUFBTTs7QUFFTSxxQkFBYyxHQUF3QjtJQUNoRCxRQUFRLEVBQUUsTUFBTTtJQUNoQixRQUFRLEVBQUUsTUFBTTtDQUNuQixDQUFDO0FBSU4sTUFBYSxxQkFBc0IsU0FBUSxLQUFLLENBQUMsU0FBeUI7SUFFdEUsWUFBWSxLQUFhLEVBQUUsT0FBWTtRQUNuQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRXRCLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFDWixDQUFDO0lBRU4sQ0FBQztJQUVNLE1BQU07UUFFVCxPQUFPLENBRUgsb0JBQUMsZUFBSyxJQUFDLElBQUksRUFBQyxRQUFRLEVBQ2IsS0FBSyxFQUFFLE1BQU0sQ0FBQyxjQUFjLEVBQzVCLFlBQVksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFDdEMsU0FBUyxFQUFDLEtBQUssRUFDZixRQUFRLEVBQUUsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEtBQXNCLENBQUM7WUFFakgsZ0NBQVEsS0FBSyxFQUFFLDZCQUFhLENBQUMsZ0JBQWdCLHFCQUF5QjtZQUV0RSxnQ0FBUSxLQUFLLEVBQUUsNkJBQWEsQ0FBQyxLQUFLLFlBQWdCLENBRTlDLENBRVgsQ0FBQztJQUVOLENBQUM7Q0FFSjtBQTlCRCxzREE4QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7Rmxhc2hjYXJkVHlwZX0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9tZXRhZGF0YS9GbGFzaGNhcmRUeXBlJztcbmltcG9ydCBJbnB1dCBmcm9tICdyZWFjdHN0cmFwL2xpYi9JbnB1dCc7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuY2xhc3MgU3R5bGVzIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgU2VsZWN0Q2FyZFR5cGU6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XG4gICAgICAgIG1pbldpZHRoOiAnMTBlbScsXG4gICAgICAgIGZvbnRTaXplOiAnMTRweCdcbiAgICB9O1xuXG59XG5cbmV4cG9ydCBjbGFzcyBGbGFzaGNhcmRUeXBlU2VsZWN0b3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJUHJvcHMsIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgfTtcblxuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgPElucHV0IHR5cGU9XCJzZWxlY3RcIlxuICAgICAgICAgICAgICAgICAgIHN0eWxlPXtTdHlsZXMuU2VsZWN0Q2FyZFR5cGV9XG4gICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLmZsYXNoY2FyZFR5cGV9XG4gICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0wXCJcbiAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aHRtbElucHV0RWxlbWVudCA9PiB0aGlzLnByb3BzLm9uQ2hhbmdlRmxhc2hjYXJkVHlwZShodG1sSW5wdXRFbGVtZW50LnRhcmdldC52YWx1ZSBhcyBGbGFzaGNhcmRUeXBlKX0+XG5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtGbGFzaGNhcmRUeXBlLkJBU0lDX0ZST05UX0JBQ0t9PkZyb250IGFuZCBiYWNrPC9vcHRpb24+XG5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtGbGFzaGNhcmRUeXBlLkNMT1pFfT5DbG96ZTwvb3B0aW9uPlxuXG4gICAgICAgICAgICA8L0lucHV0PlxuXG4gICAgICAgICk7XG5cbiAgICB9XG5cbn1cblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgcmVhZG9ubHkgZmxhc2hjYXJkVHlwZTogRmxhc2hjYXJkVHlwZTtcbiAgICByZWFkb25seSBvbkNoYW5nZUZsYXNoY2FyZFR5cGU6IChmbGFzaGNhcmRUeXBlOiBGbGFzaGNhcmRUeXBlKSA9PiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbn1cbiJdfQ==