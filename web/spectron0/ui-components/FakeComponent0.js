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
const FakeComponent1_1 = require("./FakeComponent1");
class FakeComponent0 extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.updateTitle = this.updateTitle.bind(this);
        this.state = {
            title: "FakeComponent0"
        };
    }
    render() {
        console.log("FakeComponent0: render");
        return React.createElement("div", null,
            this.state.title,
            ":",
            React.createElement(Button_1.default, { onClick: () => this.updateTitle() }, "Click Me"),
            React.createElement(FakeComponent1_1.FakeComponent1, null));
    }
    updateTitle() {
        this.setState({ title: "FakeComponent0: " + ": " + new Date().toISOString() });
    }
}
exports.FakeComponent0 = FakeComponent0;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmFrZUNvbXBvbmVudDAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJGYWtlQ29tcG9uZW50MC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQStCO0FBQy9CLG1FQUEyQztBQUMzQyxxREFBZ0Q7QUFFaEQsTUFBYSxjQUFlLFNBQVEsS0FBSyxDQUFDLFNBQXlCO0lBRS9ELFlBQVksS0FBYSxFQUFFLE9BQVk7UUFDbkMsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztRQUV0QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRS9DLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDVCxLQUFLLEVBQUUsZ0JBQWdCO1NBQzFCLENBQUM7SUFFTixDQUFDO0lBRU0sTUFBTTtRQUVULE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUV0QyxPQUFPO1lBRUYsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLOztZQUVqQixvQkFBQyxnQkFBTSxJQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLGVBRWhDO1lBRVQsb0JBQUMsK0JBQWMsT0FBRSxDQUVmLENBQUM7SUFDWCxDQUFDO0lBRU8sV0FBVztRQUNmLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBQyxLQUFLLEVBQUUsa0JBQWtCLEdBQUcsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLEVBQUMsQ0FBQyxDQUFDO0lBQ2pGLENBQUM7Q0FFSjtBQWxDRCx3Q0FrQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0c3RyYXAvbGliL0J1dHRvbic7XG5pbXBvcnQge0Zha2VDb21wb25lbnQxfSBmcm9tICcuL0Zha2VDb21wb25lbnQxJztcblxuZXhwb3J0IGNsYXNzIEZha2VDb21wb25lbnQwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzLCBjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuXG4gICAgICAgIHRoaXMudXBkYXRlVGl0bGUgPSB0aGlzLnVwZGF0ZVRpdGxlLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHRpdGxlOiBcIkZha2VDb21wb25lbnQwXCJcbiAgICAgICAgfTtcblxuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJGYWtlQ29tcG9uZW50MDogcmVuZGVyXCIpO1xuXG4gICAgICAgIHJldHVybiA8ZGl2PlxuXG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS50aXRsZX06XG5cbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gdGhpcy51cGRhdGVUaXRsZSgpfT5cbiAgICAgICAgICAgICAgICBDbGljayBNZVxuICAgICAgICAgICAgPC9CdXR0b24+XG5cbiAgICAgICAgICAgIDxGYWtlQ29tcG9uZW50MS8+XG5cbiAgICAgICAgPC9kaXY+O1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlVGl0bGUoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3RpdGxlOiBcIkZha2VDb21wb25lbnQwOiBcIiArIFwiOiBcIiArIG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKX0pO1xuICAgIH1cblxufVxuXG5cbmludGVyZmFjZSBJUHJvcHMge1xufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbiAgICByZWFkb25seSB0aXRsZTogc3RyaW5nO1xufVxuXG5cbiJdfQ==