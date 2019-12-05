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
const LogsContent_1 = __importDefault(require("./LogsContent"));
const CopyLogsToClipboardButton_1 = __importDefault(require("./CopyLogsToClipboardButton"));
const ClearLogsButton_1 = __importDefault(require("./ClearLogsButton"));
const FixedNav_1 = require("../FixedNav");
const RepoHeader_1 = require("../repo_header/RepoHeader");
const log = Logger_1.Logger.create();
class LogsScreen extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }
    render() {
        return (React.createElement(FixedNav_1.FixedNav, { id: "doc-repository" },
            React.createElement("header", null,
                React.createElement(RepoHeader_1.RepoHeader, { persistenceLayerManager: this.props.persistenceLayerManager }),
                React.createElement("div", { style: { display: 'flex' }, className: "p-1" },
                    React.createElement("div", { className: "mb-1" },
                        React.createElement(CopyLogsToClipboardButton_1.default, null)),
                    React.createElement("div", { className: "ml-1 mb-1" },
                        React.createElement(ClearLogsButton_1.default, null)))),
            React.createElement(FixedNav_1.FixedNavBody, { className: "container-fluid" },
                React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col-lg-12" },
                        React.createElement("div", { className: "mb-2 p-1" },
                            React.createElement(LogsContent_1.default, null)))))));
    }
}
exports.default = LogsScreen;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9nc1NjcmVlbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkxvZ3NTY3JlZW4udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUMvQiwyREFBc0Q7QUFFdEQsZ0VBQXdDO0FBQ3hDLDRGQUFvRTtBQUNwRSx3RUFBZ0Q7QUFDaEQsMENBQW1EO0FBQ25ELDBEQUFxRDtBQUdyRCxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFNUIsTUFBcUIsVUFBVyxTQUFRLEtBQUssQ0FBQyxTQUF5QjtJQUVuRSxZQUFZLEtBQWEsRUFBRSxPQUFZO1FBQ25DLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUNaLENBQUM7SUFFTixDQUFDO0lBRU0sTUFBTTtRQUVULE9BQU8sQ0FFSCxvQkFBQyxtQkFBUSxJQUFDLEVBQUUsRUFBQyxnQkFBZ0I7WUFFekI7Z0JBRUksb0JBQUMsdUJBQVUsSUFBQyx1QkFBdUIsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLHVCQUF1QixHQUFHO2dCQUUxRSw2QkFBSyxLQUFLLEVBQUUsRUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFDLEVBQUUsU0FBUyxFQUFDLEtBQUs7b0JBRTFDLDZCQUFLLFNBQVMsRUFBQyxNQUFNO3dCQUNqQixvQkFBQyxtQ0FBeUIsT0FBRSxDQUMxQjtvQkFFTiw2QkFBSyxTQUFTLEVBQUMsV0FBVzt3QkFDdEIsb0JBQUMseUJBQWUsT0FBRSxDQUNoQixDQUVKLENBRUQ7WUFFVCxvQkFBQyx1QkFBWSxJQUFDLFNBQVMsRUFBQyxpQkFBaUI7Z0JBRXJDLDZCQUFLLFNBQVMsRUFBQyxLQUFLO29CQUVoQiw2QkFBSyxTQUFTLEVBQUMsV0FBVzt3QkFFdEIsNkJBQUssU0FBUyxFQUFDLFVBQVU7NEJBQ3JCLG9CQUFDLHFCQUFXLE9BQUUsQ0FDWixDQUVKLENBRUosQ0FFSyxDQUVSLENBRWQsQ0FBQztJQUNOLENBQUM7Q0FFSjtBQXZERCw2QkF1REMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSAncG9sYXItc2hhcmVkL3NyYy9sb2dnZXIvTG9nZ2VyJztcbmltcG9ydCB7UmVwb1NpZGViYXJ9IGZyb20gJy4uL1JlcG9TaWRlYmFyJztcbmltcG9ydCBMb2dzQ29udGVudCBmcm9tICcuL0xvZ3NDb250ZW50JztcbmltcG9ydCBDb3B5TG9nc1RvQ2xpcGJvYXJkQnV0dG9uIGZyb20gJy4vQ29weUxvZ3NUb0NsaXBib2FyZEJ1dHRvbic7XG5pbXBvcnQgQ2xlYXJMb2dzQnV0dG9uIGZyb20gJy4vQ2xlYXJMb2dzQnV0dG9uJztcbmltcG9ydCB7Rml4ZWROYXYsIEZpeGVkTmF2Qm9keX0gZnJvbSAnLi4vRml4ZWROYXYnO1xuaW1wb3J0IHtSZXBvSGVhZGVyfSBmcm9tICcuLi9yZXBvX2hlYWRlci9SZXBvSGVhZGVyJztcbmltcG9ydCB7UGVyc2lzdGVuY2VMYXllck1hbmFnZXJ9IGZyb20gJy4uLy4uLy4uLy4uL3dlYi9qcy9kYXRhc3RvcmUvUGVyc2lzdGVuY2VMYXllck1hbmFnZXInO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ3NTY3JlZW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SVByb3BzLCBJU3RhdGU+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBJUHJvcHMsIGNvbnRleHQ6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgfTtcblxuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgPEZpeGVkTmF2IGlkPVwiZG9jLXJlcG9zaXRvcnlcIj5cblxuICAgICAgICAgICAgICAgIDxoZWFkZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgPFJlcG9IZWFkZXIgcGVyc2lzdGVuY2VMYXllck1hbmFnZXI9e3RoaXMucHJvcHMucGVyc2lzdGVuY2VMYXllck1hbmFnZXJ9Lz5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnfX0gY2xhc3NOYW1lPVwicC0xXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb3B5TG9nc1RvQ2xpcGJvYXJkQnV0dG9uLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTEgbWItMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDbGVhckxvZ3NCdXR0b24vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8L2hlYWRlcj5cblxuICAgICAgICAgICAgICAgIDxGaXhlZE5hdkJvZHkgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTJcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMiBwLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvZ3NDb250ZW50Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8L0ZpeGVkTmF2Qm9keT5cblxuICAgICAgICAgICAgPC9GaXhlZE5hdj5cblxuICAgICAgICApO1xuICAgIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElQcm9wcyB7XG4gICAgcmVhZG9ubHkgcGVyc2lzdGVuY2VMYXllck1hbmFnZXI6IFBlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElTdGF0ZSB7XG5cbn1cbiJdfQ==