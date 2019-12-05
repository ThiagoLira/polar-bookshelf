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
class AnkiReviewContent extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (React.createElement("div", { className: "border rounded m-2", style: { width: '450px' } },
            React.createElement("div", { className: "text-center p-3" },
                React.createElement("h3", null,
                    "Enjoying ",
                    React.createElement("b", null, "Anki Sync"),
                    " with Polar?")),
            React.createElement("p", { className: "text-justify mb-2 pl-2 pr-2" },
                "How are we doing? Is the ",
                React.createElement("b", null, "Anki sync"),
                " functionality in Polar working for you?"),
            React.createElement("div", { className: "border-top border-bottom ml-2 mr-2 mb-10 p-3 text-center" },
                React.createElement("div", { style: { display: 'flex' } },
                    React.createElement(StarButton, null),
                    React.createElement(StarButton, null),
                    React.createElement(StarButton, null),
                    React.createElement(StarButton, null),
                    React.createElement(StarButton, null))),
            React.createElement("div", { className: "text-right p-1" },
                React.createElement(Button_1.default, { color: "primary" }, "Later"))));
    }
}
exports.AnkiReviewContent = AnkiReviewContent;
class StarButton extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (React.createElement(Button_1.default, { color: "light m-1" },
            React.createElement("i", { style: { fontSize: '40px' }, className: "fas fa-star" })));
    }
}
exports.StarButton = StarButton;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW5raVJldmlld0NvbnRlbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJBbmtpUmV2aWV3Q29udGVudC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQStCO0FBQy9CLG1FQUEyQztBQUUzQyxNQUFhLGlCQUFrQixTQUFRLEtBQUssQ0FBQyxTQUF5QjtJQUVsRSxZQUFZLEtBQWEsRUFBRSxPQUFZO1FBQ25DLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVNLE1BQU07UUFFVCxPQUFPLENBRUgsNkJBQUssU0FBUyxFQUFDLG9CQUFvQixFQUFDLEtBQUssRUFBRSxFQUFDLEtBQUssRUFBRSxPQUFPLEVBQUM7WUFFdkQsNkJBQUssU0FBUyxFQUFDLGlCQUFpQjtnQkFDNUI7O29CQUFhLDJDQUFnQjttQ0FBaUIsQ0FDNUM7WUFFTiwyQkFBRyxTQUFTLEVBQUMsNkJBQTZCOztnQkFFYiwyQ0FBZ0I7MkRBR3pDO1lBRUosNkJBQUssU0FBUyxFQUFDLDBEQUEwRDtnQkFFckUsNkJBQUssS0FBSyxFQUFFLEVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBQztvQkFDekIsb0JBQUMsVUFBVSxPQUFFO29CQUNiLG9CQUFDLFVBQVUsT0FBRTtvQkFDYixvQkFBQyxVQUFVLE9BQUU7b0JBQ2Isb0JBQUMsVUFBVSxPQUFFO29CQUNiLG9CQUFDLFVBQVUsT0FBRSxDQUNYLENBRUo7WUFFTiw2QkFBSyxTQUFTLEVBQUMsZ0JBQWdCO2dCQUMzQixvQkFBQyxnQkFBTSxJQUFDLEtBQUssRUFBQyxTQUFTLFlBQWUsQ0FDcEMsQ0FFSixDQUVULENBQUM7SUFDTixDQUFDO0NBRUo7QUE1Q0QsOENBNENDO0FBVUQsTUFBYSxVQUFXLFNBQVEsS0FBSyxDQUFDLFNBQWtDO0lBRXBFLFlBQVksS0FBYSxFQUFFLE9BQVk7UUFDbkMsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRU0sTUFBTTtRQUVULE9BQU8sQ0FFSCxvQkFBQyxnQkFBTSxJQUFDLEtBQUssRUFBQyxXQUFXO1lBQ3JCLDJCQUFHLEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUMsRUFBRSxTQUFTLEVBQUMsYUFBYSxHQUFLLENBQ3JELENBRVosQ0FBQztJQUNOLENBQUM7Q0FFSjtBQWpCRCxnQ0FpQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0c3RyYXAvbGliL0J1dHRvbic7XG5cbmV4cG9ydCBjbGFzcyBBbmtpUmV2aWV3Q29udGVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcywgY29udGV4dDogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIHJvdW5kZWQgbS0yXCIgc3R5bGU9e3t3aWR0aDogJzQ1MHB4J319PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBwLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgzPkVuam95aW5nIDxiPkFua2kgU3luYzwvYj4gd2l0aCBQb2xhcj88L2gzPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1qdXN0aWZ5IG1iLTIgcGwtMiBwci0yXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgSG93IGFyZSB3ZSBkb2luZz8gSXMgdGhlIDxiPkFua2kgc3luYzwvYj4gZnVuY3Rpb25hbGl0eSBpbiBQb2xhclxuICAgICAgICAgICAgICAgICAgICB3b3JraW5nIGZvciB5b3U/XG5cbiAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci10b3AgYm9yZGVyLWJvdHRvbSBtbC0yIG1yLTIgbWItMTAgcC0zIHRleHQtY2VudGVyXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4J319PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YXJCdXR0b24vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YXJCdXR0b24vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YXJCdXR0b24vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YXJCdXR0b24vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YXJCdXR0b24vPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0IHAtMVwiPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiPkxhdGVyPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICk7XG4gICAgfVxuXG59XG5cblxuaW50ZXJmYWNlIElQcm9wcyB7XG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xuXG59XG5cbmV4cG9ydCBjbGFzcyBTdGFyQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFN0YXJCdXR0b25Qcm9wcywgSVN0YXRlPiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzLCBjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cImxpZ2h0IG0tMVwiPlxuICAgICAgICAgICAgICAgIDxpIHN0eWxlPXt7Zm9udFNpemU6ICc0MHB4J319IGNsYXNzTmFtZT1cImZhcyBmYS1zdGFyXCI+PC9pPlxuICAgICAgICAgICAgPC9CdXR0b24+XG5cbiAgICAgICAgKTtcbiAgICB9XG5cbn1cblxuaW50ZXJmYWNlIFN0YXJCdXR0b25Qcm9wcyB7XG5cbn1cbiJdfQ==