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
const reactstrap_1 = require("reactstrap");
const Strings_1 = require("polar-shared/src/util/Strings");
class RatingButton extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const { rating, taskRep } = this.props;
        const createColor = () => {
            switch (rating) {
                case "again":
                    return 'danger';
                case "hard":
                    return 'secondary';
                case "good":
                    return 'secondary';
                case "easy":
                    return 'success';
                default:
                    throw new Error("Unknown rating: " + rating);
            }
        };
        const color = createColor();
        const text = Strings_1.Strings.upperFirst(this.props.rating);
        return React.createElement(reactstrap_1.Button, { color: color, className: "m-1", size: "md", style: { flexGrow: 1 }, onClick: () => this.props.onRating(taskRep, 'again') }, text);
    }
}
exports.RatingButton = RatingButton;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmF0aW5nQnV0dG9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUmF0aW5nQnV0dG9uLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSw2Q0FBK0I7QUFDL0IsMkNBQWtDO0FBSWxDLDJEQUFzRDtBQUV0RCxNQUFhLFlBQWdCLFNBQVEsS0FBSyxDQUFDLFNBQTRCO0lBRW5FLFlBQVksS0FBZ0IsRUFBRSxPQUFZO1FBQ3RDLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVNLE1BQU07UUFFVCxNQUFNLEVBQUMsTUFBTSxFQUFFLE9BQU8sRUFBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFFckMsTUFBTSxXQUFXLEdBQUcsR0FBVyxFQUFFO1lBQzdCLFFBQVEsTUFBTSxFQUFFO2dCQUNaLEtBQUssT0FBTztvQkFDUixPQUFPLFFBQVEsQ0FBQztnQkFDcEIsS0FBSyxNQUFNO29CQUNQLE9BQU8sV0FBVyxDQUFDO2dCQUN2QixLQUFLLE1BQU07b0JBQ1AsT0FBTyxXQUFXLENBQUM7Z0JBQ3ZCLEtBQUssTUFBTTtvQkFDUCxPQUFPLFNBQVMsQ0FBQztnQkFDckI7b0JBQ0ksTUFBTSxJQUFJLEtBQUssQ0FBQyxrQkFBa0IsR0FBRyxNQUFNLENBQUMsQ0FBQzthQUNwRDtRQUNMLENBQUMsQ0FBQztRQUVGLE1BQU0sS0FBSyxHQUFHLFdBQVcsRUFBRSxDQUFDO1FBRTVCLE1BQU0sSUFBSSxHQUFHLGlCQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFbkQsT0FBTyxvQkFBQyxtQkFBTSxJQUFDLEtBQUssRUFBRSxLQUFLLEVBQ1osU0FBUyxFQUFDLEtBQUssRUFDZixJQUFJLEVBQUMsSUFBSSxFQUNULEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUMsRUFDcEIsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsSUFBRyxJQUFJLENBQVUsQ0FBQztJQUV6RixDQUFDO0NBRUo7QUFyQ0Qsb0NBcUNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtCdXR0b259IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5pbXBvcnQge1Rhc2tSZXB9IGZyb20gXCJwb2xhci1zcGFjZWQtcmVwZXRpdGlvbi9zcmMvc3BhY2VkX3JlcGV0aXRpb24vc2NoZWR1bGVyL1MyUGx1cy9UYXNrc0NhbGN1bGF0b3JcIjtcbmltcG9ydCB7UmF0aW5nQ2FsbGJhY2t9IGZyb20gXCIuL1Jldmlld2VyXCI7XG5pbXBvcnQge1JhdGluZ30gZnJvbSBcInBvbGFyLXNwYWNlZC1yZXBldGl0aW9uLWFwaS9zcmMvc2NoZWR1bGVyL1MyUGx1cy9TMlBsdXNcIjtcbmltcG9ydCB7U3RyaW5nc30gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvdXRpbC9TdHJpbmdzXCI7XG5cbmV4cG9ydCBjbGFzcyBSYXRpbmdCdXR0b248QT4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzPEE+LCBJU3RhdGU+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJUHJvcHM8QT4sIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICBjb25zdCB7cmF0aW5nLCB0YXNrUmVwfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgY29uc3QgY3JlYXRlQ29sb3IgPSAoKTogc3RyaW5nID0+IHtcbiAgICAgICAgICAgIHN3aXRjaCAocmF0aW5nKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcImFnYWluXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnZGFuZ2VyJztcbiAgICAgICAgICAgICAgICBjYXNlIFwiaGFyZFwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ3NlY29uZGFyeSc7XG4gICAgICAgICAgICAgICAgY2FzZSBcImdvb2RcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdzZWNvbmRhcnknO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJlYXN5XCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnc3VjY2Vzcyc7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5rbm93biByYXRpbmc6IFwiICsgcmF0aW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBjb2xvciA9IGNyZWF0ZUNvbG9yKCk7XG5cbiAgICAgICAgY29uc3QgdGV4dCA9IFN0cmluZ3MudXBwZXJGaXJzdCh0aGlzLnByb3BzLnJhdGluZyk7XG5cbiAgICAgICAgcmV0dXJuIDxCdXR0b24gY29sb3I9e2NvbG9yfVxuICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtLTFcIlxuICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibWRcIlxuICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2ZsZXhHcm93OiAxfX1cbiAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5vblJhdGluZyh0YXNrUmVwLCAnYWdhaW4nKX0+e3RleHR9PC9CdXR0b24+O1xuXG4gICAgfVxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVByb3BzPEE+IHtcblxuICAgIHJlYWRvbmx5IHRhc2tSZXA6IFRhc2tSZXA8QT47XG4gICAgcmVhZG9ubHkgcmF0aW5nOiBSYXRpbmc7XG4gICAgcmVhZG9ubHkgb25SYXRpbmc6IFJhdGluZ0NhbGxiYWNrPEE+O1xuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVN0YXRlIHtcblxufVxuIl19