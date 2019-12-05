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
const EditorsPicksContent_1 = require("./EditorsPicksContent");
const RepoHeader_1 = require("../repo_header/RepoHeader");
class EditorsPicksScreen extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }
    render() {
        return (React.createElement("div", { id: "doc-repository" },
            React.createElement("header", null,
                React.createElement(RepoHeader_1.RepoHeader, { persistenceLayerManager: this.props.persistenceLayerManager })),
            React.createElement("div", { className: "m-1" },
                React.createElement("h3", null, "Suggested Content"),
                React.createElement("p", { className: "text-muted", style: { fontSize: '18px' } }, "In order to get you up and running quickly, we've compiled a list of interesting documents you might like to start with."),
                React.createElement("p", null, "When you add any of these documents they will be automatically downloaded and added to your repository."),
                React.createElement(EditorsPicksContent_1.EditorsPicksContent, null))));
    }
}
exports.default = EditorsPicksScreen;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRWRpdG9yc1BpY2tzU2NyZWVuLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRWRpdG9yc1BpY2tzU2NyZWVuLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSw2Q0FBK0I7QUFDL0IsK0RBQTBEO0FBQzFELDBEQUFxRDtBQUlyRCxNQUFxQixrQkFBbUIsU0FBUSxLQUFLLENBQUMsU0FBeUI7SUFFM0UsWUFBWSxLQUFhLEVBQUUsT0FBWTtRQUNuQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRXRCLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFDWixDQUFDO0lBRU4sQ0FBQztJQUVNLE1BQU07UUFFVCxPQUFPLENBRUgsNkJBQUssRUFBRSxFQUFDLGdCQUFnQjtZQUVwQjtnQkFDSSxvQkFBQyx1QkFBVSxJQUFDLHVCQUF1QixFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsdUJBQXVCLEdBQUcsQ0FDckU7WUFHVCw2QkFBSyxTQUFTLEVBQUMsS0FBSztnQkFFaEIsb0RBQTBCO2dCQUUxQiwyQkFBRyxTQUFTLEVBQUMsWUFBWSxFQUFDLEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUMsK0hBRy9DO2dCQUVKLHlJQUdJO2dCQUVKLG9CQUFDLHlDQUFtQixPQUFFLENBRXBCLENBRUosQ0FFVCxDQUFDO0lBQ04sQ0FBQztDQUVKO0FBNUNELHFDQTRDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7RWRpdG9yc1BpY2tzQ29udGVudH0gZnJvbSAnLi9FZGl0b3JzUGlja3NDb250ZW50JztcbmltcG9ydCB7UmVwb0hlYWRlcn0gZnJvbSAnLi4vcmVwb19oZWFkZXIvUmVwb0hlYWRlcic7XG5pbXBvcnQge01lc3NhZ2VCYW5uZXJ9IGZyb20gJy4uL01lc3NhZ2VCYW5uZXInO1xuaW1wb3J0IHtQZXJzaXN0ZW5jZUxheWVyTWFuYWdlcn0gZnJvbSAnLi4vLi4vLi4vLi4vd2ViL2pzL2RhdGFzdG9yZS9QZXJzaXN0ZW5jZUxheWVyTWFuYWdlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVkaXRvcnNQaWNrc1NjcmVlbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcywgY29udGV4dDogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICB9O1xuXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICA8ZGl2IGlkPVwiZG9jLXJlcG9zaXRvcnlcIj5cblxuICAgICAgICAgICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgIDxSZXBvSGVhZGVyIHBlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyPXt0aGlzLnByb3BzLnBlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyfS8+XG4gICAgICAgICAgICAgICAgPC9oZWFkZXI+XG5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS0xXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgPGgzPlN1Z2dlc3RlZCBDb250ZW50PC9oMz5cblxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCIgc3R5bGU9e3tmb250U2l6ZTogJzE4cHgnfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICBJbiBvcmRlciB0byBnZXQgeW91IHVwIGFuZCBydW5uaW5nIHF1aWNrbHksIHdlJ3ZlIGNvbXBpbGVkXG4gICAgICAgICAgICAgICAgICAgICAgICBhIGxpc3Qgb2YgaW50ZXJlc3RpbmcgZG9jdW1lbnRzIHlvdSBtaWdodCBsaWtlIHRvIHN0YXJ0IHdpdGguXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIFdoZW4geW91IGFkZCBhbnkgb2YgdGhlc2UgZG9jdW1lbnRzIHRoZXkgd2lsbCBiZSBhdXRvbWF0aWNhbGx5XG4gICAgICAgICAgICAgICAgICAgICAgICBkb3dubG9hZGVkIGFuZCBhZGRlZCB0byB5b3VyIHJlcG9zaXRvcnkuXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgICA8RWRpdG9yc1BpY2tzQ29udGVudC8+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUHJvcHMge1xuICAgIHJlYWRvbmx5IHBlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyOiBQZXJzaXN0ZW5jZUxheWVyTWFuYWdlcjtcblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElTdGF0ZSB7XG5cbn1cblxuIl19