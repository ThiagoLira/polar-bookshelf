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
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const FixedNav_1 = require("../FixedNav");
const RepoHeader_1 = require("../repo_header/RepoHeader");
const Groups_1 = require("../../../../web/js/datastore/sharing/db/Groups");
const Logger_1 = require("polar-shared/src/logger/Logger");
const GroupsTable_1 = require("./GroupsTable");
const CreateGroupButton_1 = require("./CreateGroupButton");
const VerticalAlign_1 = require("../../../../web/js/ui/util/VerticalAlign");
const log = Logger_1.Logger.create();
class GroupsScreen extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }
    componentWillMount() {
        const doHandle = () => __awaiter(this, void 0, void 0, function* () {
            const groups = yield Groups_1.Groups.topGroups();
            this.setState({ groups });
        });
        doHandle().catch(err => log.error("Unable to get groups: ", err));
    }
    render() {
        return (React.createElement(FixedNav_1.FixedNav, { id: "doc-repository" },
            React.createElement("header", null,
                React.createElement(RepoHeader_1.RepoHeader, { persistenceLayerManager: this.props.persistenceLayerManager })),
            React.createElement(FixedNav_1.FixedNavBody, null,
                React.createElement("div", { className: "container" },
                    React.createElement("div", { className: "row" },
                        React.createElement("div", { className: "col" },
                            React.createElement("div", { className: "mt-4 mb-4 text-grey700" },
                                React.createElement("div", { className: "text-xl" }, "Groups allow you to share documents and highlights."),
                                React.createElement("div", { className: "mt-2" },
                                    "This is still a ",
                                    React.createElement("b", null, "beta"),
                                    " feature but we're actively working on making it production-ready.  You can add documents to groups, and see annotations and comments by other users.  We're going to be adding improved commenting and working on making it easy to share documents."),
                                React.createElement("div", { className: "mt-1" },
                                    "If you're interested in using group in your organization we'd love to ",
                                    React.createElement("a", { href: "https://kevinburton1.typeform.com/to/Ze4mqY" }, "get your feedback"),
                                    ".")),
                            React.createElement("div", { className: "mt-2 p-2 border-top border-left border-right bg-grey000" },
                                React.createElement("div", { style: { display: 'flex' }, className: "w-100" },
                                    React.createElement("div", { style: { flexGrow: 1 } },
                                        React.createElement("h3", null, "Groups")),
                                    React.createElement(VerticalAlign_1.VerticalAlign, null,
                                        React.createElement(CreateGroupButton_1.CreateGroupButton, null)))),
                            React.createElement(GroupsTable_1.GroupsTable, { persistenceLayerManager: this.props.persistenceLayerManager, groups: this.state.groups })))))));
    }
}
exports.GroupsScreen = GroupsScreen;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JvdXBzU2NyZWVuLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiR3JvdXBzU2NyZWVuLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBK0I7QUFDL0IsMENBQW1EO0FBQ25ELDBEQUFxRDtBQUVyRCwyRUFBNkU7QUFDN0UsMkRBQXNEO0FBQ3RELCtDQUEwQztBQUMxQywyREFBc0Q7QUFDdEQsNEVBQXVFO0FBRXZFLE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU1QixNQUFhLFlBQWEsU0FBUSxLQUFLLENBQUMsU0FBeUI7SUFFN0QsWUFBWSxLQUFhLEVBQUUsT0FBWTtRQUNuQyxLQUFLLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRXRCLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFDWixDQUFDO0lBRU4sQ0FBQztJQUdNLGtCQUFrQjtRQUVyQixNQUFNLFFBQVEsR0FBRyxHQUF3QixFQUFFO1lBRXZDLE1BQU0sTUFBTSxHQUFHLE1BQU0sZUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBRXhDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxDQUFDO1FBRTVCLENBQUMsQ0FBQSxDQUFDO1FBRUYsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBRXRFLENBQUM7SUFFTSxNQUFNO1FBRVQsT0FBTyxDQUVILG9CQUFDLG1CQUFRLElBQUMsRUFBRSxFQUFDLGdCQUFnQjtZQUV6QjtnQkFFSSxvQkFBQyx1QkFBVSxJQUFDLHVCQUF1QixFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsdUJBQXVCLEdBQUcsQ0FFckU7WUFFVCxvQkFBQyx1QkFBWTtnQkFFVCw2QkFBSyxTQUFTLEVBQUMsV0FBVztvQkFFdEIsNkJBQUssU0FBUyxFQUFDLEtBQUs7d0JBRWhCLDZCQUFLLFNBQVMsRUFBQyxLQUFLOzRCQUVoQiw2QkFBSyxTQUFTLEVBQUMsd0JBQXdCO2dDQUNuQyw2QkFBSyxTQUFTLEVBQUMsU0FBUywwREFFbEI7Z0NBRU4sNkJBQUssU0FBUyxFQUFDLE1BQU07O29DQUNELHNDQUFXOzRSQUl6QjtnQ0FFTiw2QkFBSyxTQUFTLEVBQUMsTUFBTTs7b0NBRWxCLDJCQUFHLElBQUksRUFBQyw2Q0FBNkMsd0JBQXNCO3dDQUN4RSxDQUVKOzRCQUVOLDZCQUFLLFNBQVMsRUFBQyx5REFBeUQ7Z0NBRXBFLDZCQUFLLEtBQUssRUFBRSxFQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUMsRUFDeEIsU0FBUyxFQUFDLE9BQU87b0NBRWxCLDZCQUFLLEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUM7d0NBQ3JCLHlDQUFlLENBQ2I7b0NBRU4sb0JBQUMsNkJBQWE7d0NBQ1Ysb0JBQUMscUNBQWlCLE9BQUUsQ0FDUixDQUVkLENBRUo7NEJBRU4sb0JBQUMseUJBQVcsSUFBQyx1QkFBdUIsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLHVCQUF1QixFQUMzRCxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FFdkMsQ0FFSixDQUNKLENBRUssQ0FFUixDQUVkLENBQUM7SUFDTixDQUFDO0NBRUo7QUFoR0Qsb0NBZ0dDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtGaXhlZE5hdiwgRml4ZWROYXZCb2R5fSBmcm9tICcuLi9GaXhlZE5hdic7XG5pbXBvcnQge1JlcG9IZWFkZXJ9IGZyb20gJy4uL3JlcG9faGVhZGVyL1JlcG9IZWFkZXInO1xuaW1wb3J0IHtQZXJzaXN0ZW5jZUxheWVyTWFuYWdlcn0gZnJvbSAnLi4vLi4vLi4vLi4vd2ViL2pzL2RhdGFzdG9yZS9QZXJzaXN0ZW5jZUxheWVyTWFuYWdlcic7XG5pbXBvcnQge0dyb3VwLCBHcm91cHN9IGZyb20gXCIuLi8uLi8uLi8uLi93ZWIvanMvZGF0YXN0b3JlL3NoYXJpbmcvZGIvR3JvdXBzXCI7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvbG9nZ2VyL0xvZ2dlclwiO1xuaW1wb3J0IHtHcm91cHNUYWJsZX0gZnJvbSBcIi4vR3JvdXBzVGFibGVcIjtcbmltcG9ydCB7Q3JlYXRlR3JvdXBCdXR0b259IGZyb20gXCIuL0NyZWF0ZUdyb3VwQnV0dG9uXCI7XG5pbXBvcnQge1ZlcnRpY2FsQWxpZ259IGZyb20gXCIuLi8uLi8uLi8uLi93ZWIvanMvdWkvdXRpbC9WZXJ0aWNhbEFsaWduXCI7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuZXhwb3J0IGNsYXNzIEdyb3Vwc1NjcmVlbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcywgY29udGV4dDogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICB9O1xuXG4gICAgfVxuXG5cbiAgICBwdWJsaWMgY29tcG9uZW50V2lsbE1vdW50KCk6IHZvaWQge1xuXG4gICAgICAgIGNvbnN0IGRvSGFuZGxlID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBncm91cHMgPSBhd2FpdCBHcm91cHMudG9wR3JvdXBzKCk7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2dyb3Vwc30pO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgZG9IYW5kbGUoKS5jYXRjaChlcnIgPT4gbG9nLmVycm9yKFwiVW5hYmxlIHRvIGdldCBncm91cHM6IFwiLCBlcnIpKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgPEZpeGVkTmF2IGlkPVwiZG9jLXJlcG9zaXRvcnlcIj5cblxuICAgICAgICAgICAgICAgIDxoZWFkZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgPFJlcG9IZWFkZXIgcGVyc2lzdGVuY2VMYXllck1hbmFnZXI9e3RoaXMucHJvcHMucGVyc2lzdGVuY2VMYXllck1hbmFnZXJ9Lz5cblxuICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxuXG4gICAgICAgICAgICAgICAgPEZpeGVkTmF2Qm9keT5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgbWItNCB0ZXh0LWdyZXk3MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14bFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdyb3VwcyBhbGxvdyB5b3UgdG8gc2hhcmUgZG9jdW1lbnRzIGFuZCBoaWdobGlnaHRzLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMgaXMgc3RpbGwgYSA8Yj5iZXRhPC9iPiBmZWF0dXJlIGJ1dCB3ZSdyZSBhY3RpdmVseSB3b3JraW5nIG9uIG1ha2luZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0IHByb2R1Y3Rpb24tcmVhZHkuICBZb3UgY2FuIGFkZCBkb2N1bWVudHMgdG8gZ3JvdXBzLCBhbmQgc2VlIGFubm90YXRpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5kIGNvbW1lbnRzIGJ5IG90aGVyIHVzZXJzLiAgV2UncmUgZ29pbmcgdG8gYmUgYWRkaW5nIGltcHJvdmVkIGNvbW1lbnRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmQgd29ya2luZyBvbiBtYWtpbmcgaXQgZWFzeSB0byBzaGFyZSBkb2N1bWVudHMuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJZiB5b3UncmUgaW50ZXJlc3RlZCBpbiB1c2luZyBncm91cCBpbiB5b3VyIG9yZ2FuaXphdGlvbiB3ZSdkIGxvdmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIDxhIGhyZWY9XCJodHRwczovL2tldmluYnVydG9uMS50eXBlZm9ybS5jb20vdG8vWmU0bXFZXCI+Z2V0IHlvdXIgZmVlZGJhY2s8L2E+LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yIHAtMiBib3JkZXItdG9wIGJvcmRlci1sZWZ0IGJvcmRlci1yaWdodCBiZy1ncmV5MDAwXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCd9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEwMFwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2ZsZXhHcm93OiAxfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5Hcm91cHM8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFZlcnRpY2FsQWxpZ24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDcmVhdGVHcm91cEJ1dHRvbi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9WZXJ0aWNhbEFsaWduPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JvdXBzVGFibGUgcGVyc2lzdGVuY2VMYXllck1hbmFnZXI9e3RoaXMucHJvcHMucGVyc2lzdGVuY2VMYXllck1hbmFnZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncm91cHM9e3RoaXMuc3RhdGUuZ3JvdXBzfS8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPC9GaXhlZE5hdkJvZHk+XG5cbiAgICAgICAgICAgIDwvRml4ZWROYXY+XG5cbiAgICAgICAgKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUHJvcHMge1xuICAgIHJlYWRvbmx5IHBlcnNpc3RlbmNlTGF5ZXJNYW5hZ2VyOiBQZXJzaXN0ZW5jZUxheWVyTWFuYWdlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJU3RhdGUge1xuICAgIHJlYWRvbmx5IGdyb3Vwcz86IFJlYWRvbmx5QXJyYXk8R3JvdXA+O1xufVxuIl19