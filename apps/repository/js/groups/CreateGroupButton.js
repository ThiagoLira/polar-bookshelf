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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Logger_1 = require("polar-shared/src/logger/Logger");
const AuthHandler_1 = require("../../../../web/js/apps/repository/auth_handler/AuthHandler");
const react_router_dom_1 = require("react-router-dom");
const log = Logger_1.Logger.create();
class CreateGroupButton extends react_1.default.PureComponent {
    constructor(props) {
        super(props);
        this.onCreate = this.onCreate.bind(this);
        this.state = {};
    }
    render() {
        return (react_1.default.createElement(react_router_dom_1.Link, { to: { pathname: "/groups/create" }, onClick: () => this.onCreate(), className: "btn btn-success btn-sm" }, "Create Group"));
    }
    onCreate() {
        const handler = () => __awaiter(this, void 0, void 0, function* () {
            yield AuthHandler_1.AuthHandlers.requireAuthentication();
        });
        handler()
            .catch(err => log.error("Unable to join group: ", err));
        return false;
    }
}
exports.CreateGroupButton = CreateGroupButton;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3JlYXRlR3JvdXBCdXR0b24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJDcmVhdGVHcm91cEJ1dHRvbi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQSxrREFBMEI7QUFRMUIsMkRBQXNEO0FBTXRELDZGQUF5RjtBQUN6Rix1REFBc0M7QUFFdEMsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLE1BQWEsaUJBQWtCLFNBQVEsZUFBSyxDQUFDLGFBQTZCO0lBRXRFLFlBQVksS0FBYTtRQUNyQixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFYixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXpDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFDWixDQUFDO0lBRU4sQ0FBQztJQUdNLE1BQU07UUFJVCxPQUFPLENBRUgsOEJBQUMsdUJBQUksSUFBQyxFQUFFLEVBQUUsRUFBQyxRQUFRLEVBQUUsZ0JBQWdCLEVBQUMsRUFDaEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFDOUIsU0FBUyxFQUFDLHdCQUF3QixtQkFBb0IsQ0FFL0QsQ0FBQztJQUVOLENBQUM7SUFFTyxRQUFRO1FBRVosTUFBTSxPQUFPLEdBQUcsR0FBUyxFQUFFO1lBRXZCLE1BQU0sMEJBQVksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBRS9DLENBQUMsQ0FBQSxDQUFDO1FBRUYsT0FBTyxFQUFFO2FBQ0osS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRTVELE9BQU8sS0FBSyxDQUFDO0lBRWpCLENBQUM7Q0FFSjtBQTFDRCw4Q0EwQ0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQgcmVhY3Qvbm8tbXVsdGktY29tcDogMCwgcmVhY3QvcHJvcC10eXBlczogMCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3RzdHJhcC9saWIvQnV0dG9uJztcbmltcG9ydCB7R3JvdXBJRFN0cn0gZnJvbSBcIi4uLy4uLy4uLy4uL3dlYi9qcy9kYXRhc3RvcmUvRGF0YXN0b3JlXCI7XG5pbXBvcnQge05VTExfRlVOQ1RJT059IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL3V0aWwvRnVuY3Rpb25zXCI7XG5pbXBvcnQge1xuICAgIEdyb3VwSm9pblJlcXVlc3QsXG4gICAgR3JvdXBKb2luc1xufSBmcm9tIFwiLi4vLi4vLi4vLi4vd2ViL2pzL2RhdGFzdG9yZS9zaGFyaW5nL3JwYy9Hcm91cEpvaW5zXCI7XG5pbXBvcnQge0xvZ2dlcn0gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvbG9nZ2VyL0xvZ2dlclwiO1xuaW1wb3J0IHtUb2FzdGVyfSBmcm9tIFwiLi4vLi4vLi4vLi4vd2ViL2pzL3VpL3RvYXN0ZXIvVG9hc3RlclwiO1xuaW1wb3J0IHtcbiAgICBHcm91cE5hbWVTdHIsXG4gICAgR3JvdXBzXG59IGZyb20gXCIuLi8uLi8uLi8uLi93ZWIvanMvZGF0YXN0b3JlL3NoYXJpbmcvZGIvR3JvdXBzXCI7XG5pbXBvcnQge0F1dGhIYW5kbGVyc30gZnJvbSBcIi4uLy4uLy4uLy4uL3dlYi9qcy9hcHBzL3JlcG9zaXRvcnkvYXV0aF9oYW5kbGVyL0F1dGhIYW5kbGVyXCI7XG5pbXBvcnQge0xpbmt9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuZXhwb3J0IGNsYXNzIENyZWF0ZUdyb3VwQnV0dG9uIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5vbkNyZWF0ZSA9IHRoaXMub25DcmVhdGUuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICB9O1xuXG4gICAgfVxuXG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuXG4gICAgICAgIC8vIFRPRE86IHRoaXMgZG9lc24ndCB3b3JrIHRoZSB3YXkgSSBuZWVkIGl0IHRvIHdvcmsgYmVjYXVzZSB0aGUgbGlua1xuICAgICAgICAvLyBpcyB0cmlnZ2VyZWQgQkVGT1JFIC4uLiBub3QgYWZ0ZXIuIHdlIHJlcXVpcmUgYXV0aGVudGljYXRpb24uXG4gICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgIDxMaW5rIHRvPXt7cGF0aG5hbWU6IFwiL2dyb3Vwcy9jcmVhdGVcIn19XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLm9uQ3JlYXRlKCl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3MgYnRuLXNtXCI+Q3JlYXRlIEdyb3VwPC9MaW5rPlxuXG4gICAgICAgICk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uQ3JlYXRlKCkge1xuXG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSBhc3luYyAoKSA9PiB7XG5cbiAgICAgICAgICAgIGF3YWl0IEF1dGhIYW5kbGVycy5yZXF1aXJlQXV0aGVudGljYXRpb24oKTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIGhhbmRsZXIoKVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBsb2cuZXJyb3IoXCJVbmFibGUgdG8gam9pbiBncm91cDogXCIsIGVycikpO1xuXG4gICAgICAgIHJldHVybiBmYWxzZTtcblxuICAgIH1cblxufVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcblxufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbn1cbiJdfQ==