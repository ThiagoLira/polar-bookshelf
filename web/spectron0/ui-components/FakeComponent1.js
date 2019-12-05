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
class FakeComponent1 extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
        this.updateTitle = this.updateTitle.bind(this);
        this.state = {
            title: 'FakeComponent1'
        };
    }
    render() {
        console.log("FakeComponent1: render");
        return React.createElement("div", null,
            this.state.title,
            ":",
            React.createElement(reactstrap_1.Button, { onClick: () => this.updateTitle() }, "Click Me"));
    }
    updateTitle() {
        this.setState({ title: "FakeComponent1: " + new Date().toISOString() });
    }
}
exports.FakeComponent1 = FakeComponent1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmFrZUNvbXBvbmVudDEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJGYWtlQ29tcG9uZW50MS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsNkNBQStCO0FBQy9CLDJDQUFrQztBQUVsQyxNQUFhLGNBQWUsU0FBUSxLQUFLLENBQUMsYUFBNkI7SUFFbkUsWUFBWSxLQUFhLEVBQUUsT0FBWTtRQUNuQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRXRCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFL0MsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNULEtBQUssRUFBRSxnQkFBZ0I7U0FDMUIsQ0FBQztJQUNOLENBQUM7SUFFTSxNQUFNO1FBRVQsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBRXRDLE9BQU87WUFFRixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUs7O1lBRWpCLG9CQUFDLG1CQUFNLElBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsZUFFaEMsQ0FFUCxDQUFDO0lBQ1gsQ0FBQztJQUNPLFdBQVc7UUFDZixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUMsS0FBSyxFQUFFLGtCQUFrQixHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLEVBQUMsQ0FBQyxDQUFBO0lBQ3pFLENBQUM7Q0FFSjtBQTlCRCx3Q0E4QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0J1dHRvbn0gZnJvbSBcInJlYWN0c3RyYXBcIjtcblxuZXhwb3J0IGNsYXNzIEZha2VDb21wb25lbnQxIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcywgY29udGV4dDogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcblxuICAgICAgICB0aGlzLnVwZGF0ZVRpdGxlID0gdGhpcy51cGRhdGVUaXRsZS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB0aXRsZTogJ0Zha2VDb21wb25lbnQxJ1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJGYWtlQ29tcG9uZW50MTogcmVuZGVyXCIpO1xuXG4gICAgICAgIHJldHVybiA8ZGl2PlxuXG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS50aXRsZX06XG5cbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gdGhpcy51cGRhdGVUaXRsZSgpfT5cbiAgICAgICAgICAgICAgICBDbGljayBNZVxuICAgICAgICAgICAgPC9CdXR0b24+XG5cbiAgICAgICAgPC9kaXY+O1xuICAgIH1cbiAgICBwcml2YXRlIHVwZGF0ZVRpdGxlKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHt0aXRsZTogXCJGYWtlQ29tcG9uZW50MTogXCIgKyBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCl9KVxuICAgIH1cblxufVxuXG5cbmludGVyZmFjZSBJUHJvcHMge1xufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbiAgICByZWFkb25seSB0aXRsZTogc3RyaW5nO1xufVxuXG5cbiJdfQ==