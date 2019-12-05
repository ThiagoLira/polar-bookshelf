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
const Button_1 = __importDefault(require("reactstrap/lib/Button"));
const GroupJoins_1 = require("../../../../web/js/datastore/sharing/rpc/GroupJoins");
const Logger_1 = require("polar-shared/src/logger/Logger");
const Toaster_1 = require("../../../../web/js/ui/toaster/Toaster");
const Groups_1 = require("../../../../web/js/datastore/sharing/db/Groups");
const AuthHandler_1 = require("../../../../web/js/apps/repository/auth_handler/AuthHandler");
const log = Logger_1.Logger.create();
class GroupJoinButton extends react_1.default.PureComponent {
    constructor(props) {
        super(props);
        this.onJoin = this.onJoin.bind(this);
        this.state = {};
    }
    render() {
        return (react_1.default.createElement("div", { className: "mr-1 ml-1" },
            react_1.default.createElement(Button_1.default, { color: "primary", size: "sm", onClick: () => this.onJoin(), className: "pl-2 pr-2" }, "Join")));
    }
    onJoin() {
        const handler = () => __awaiter(this, void 0, void 0, function* () {
            yield AuthHandler_1.AuthHandlers.requireAuthentication();
            const group = yield Groups_1.Groups.getByName(this.props.name);
            if (!group) {
                Toaster_1.Toaster.error("No group named: " + this.props.name);
                return;
            }
            Toaster_1.Toaster.info("Joining group...");
            const request = {
                groupID: group.id
            };
            yield GroupJoins_1.GroupJoins.exec(request);
            Toaster_1.Toaster.success("Joining group...done");
        });
        handler()
            .catch(err => log.error("Unable to join group: ", err));
    }
}
exports.GroupJoinButton = GroupJoinButton;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3JvdXBKb2luQnV0dG9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiR3JvdXBKb2luQnV0dG9uLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBLGtEQUEwQjtBQUMxQixtRUFBMkM7QUFHM0Msb0ZBRzZEO0FBQzdELDJEQUFzRDtBQUN0RCxtRUFBOEQ7QUFDOUQsMkVBR3dEO0FBQ3hELDZGQUF5RjtBQUV6RixNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFNUIsTUFBYSxlQUFnQixTQUFRLGVBQUssQ0FBQyxhQUE2QjtJQUVwRSxZQUFZLEtBQWE7UUFDckIsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRWIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVyQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQ1osQ0FBQztJQUVOLENBQUM7SUFHTSxNQUFNO1FBRVQsT0FBTyxDQUVILHVDQUFLLFNBQVMsRUFBQyxXQUFXO1lBRXRCLDhCQUFDLGdCQUFNLElBQUMsS0FBSyxFQUFDLFNBQVMsRUFDZixJQUFJLEVBQUMsSUFBSSxFQUNULE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQzVCLFNBQVMsRUFBQyxXQUFXLFdBSXBCLENBRVAsQ0FFVCxDQUFDO0lBRU4sQ0FBQztJQUVPLE1BQU07UUFFVixNQUFNLE9BQU8sR0FBRyxHQUFTLEVBQUU7WUFFdkIsTUFBTSwwQkFBWSxDQUFDLHFCQUFxQixFQUFFLENBQUM7WUFFM0MsTUFBTSxLQUFLLEdBQUcsTUFBTSxlQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFdEQsSUFBSSxDQUFFLEtBQUssRUFBRTtnQkFDVCxpQkFBTyxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNwRCxPQUFPO2FBQ1Y7WUFFRCxpQkFBTyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBRWpDLE1BQU0sT0FBTyxHQUFxQjtnQkFDOUIsT0FBTyxFQUFFLEtBQUssQ0FBQyxFQUFFO2FBQ3BCLENBQUM7WUFFRixNQUFNLHVCQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRS9CLGlCQUFPLENBQUMsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFFNUMsQ0FBQyxDQUFBLENBQUM7UUFFRixPQUFPLEVBQUU7YUFDSixLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLHdCQUF3QixFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDaEUsQ0FBQztDQUVKO0FBL0RELDBDQStEQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludCByZWFjdC9uby1tdWx0aS1jb21wOiAwLCByZWFjdC9wcm9wLXR5cGVzOiAwICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdHN0cmFwL2xpYi9CdXR0b24nO1xuaW1wb3J0IHtHcm91cElEU3RyfSBmcm9tIFwiLi4vLi4vLi4vLi4vd2ViL2pzL2RhdGFzdG9yZS9EYXRhc3RvcmVcIjtcbmltcG9ydCB7TlVMTF9GVU5DVElPTn0gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvdXRpbC9GdW5jdGlvbnNcIjtcbmltcG9ydCB7XG4gICAgR3JvdXBKb2luUmVxdWVzdCxcbiAgICBHcm91cEpvaW5zXG59IGZyb20gXCIuLi8uLi8uLi8uLi93ZWIvanMvZGF0YXN0b3JlL3NoYXJpbmcvcnBjL0dyb3VwSm9pbnNcIjtcbmltcG9ydCB7TG9nZ2VyfSBmcm9tIFwicG9sYXItc2hhcmVkL3NyYy9sb2dnZXIvTG9nZ2VyXCI7XG5pbXBvcnQge1RvYXN0ZXJ9IGZyb20gXCIuLi8uLi8uLi8uLi93ZWIvanMvdWkvdG9hc3Rlci9Ub2FzdGVyXCI7XG5pbXBvcnQge1xuICAgIEdyb3VwTmFtZVN0cixcbiAgICBHcm91cHNcbn0gZnJvbSBcIi4uLy4uLy4uLy4uL3dlYi9qcy9kYXRhc3RvcmUvc2hhcmluZy9kYi9Hcm91cHNcIjtcbmltcG9ydCB7QXV0aEhhbmRsZXJzfSBmcm9tIFwiLi4vLi4vLi4vLi4vd2ViL2pzL2FwcHMvcmVwb3NpdG9yeS9hdXRoX2hhbmRsZXIvQXV0aEhhbmRsZXJcIjtcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG5leHBvcnQgY2xhc3MgR3JvdXBKb2luQnV0dG9uIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5vbkpvaW4gPSB0aGlzLm9uSm9pbi5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIH07XG5cbiAgICB9XG5cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci0xIG1sLTFcIj5cblxuICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLm9uSm9pbigpfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGwtMiBwci0yXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgSm9pblxuXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uSm9pbigpIHtcblxuICAgICAgICBjb25zdCBoYW5kbGVyID0gYXN5bmMgKCkgPT4ge1xuXG4gICAgICAgICAgICBhd2FpdCBBdXRoSGFuZGxlcnMucmVxdWlyZUF1dGhlbnRpY2F0aW9uKCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGdyb3VwID0gYXdhaXQgR3JvdXBzLmdldEJ5TmFtZSh0aGlzLnByb3BzLm5hbWUpO1xuXG4gICAgICAgICAgICBpZiAoISBncm91cCkge1xuICAgICAgICAgICAgICAgIFRvYXN0ZXIuZXJyb3IoXCJObyBncm91cCBuYW1lZDogXCIgKyB0aGlzLnByb3BzLm5hbWUpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgVG9hc3Rlci5pbmZvKFwiSm9pbmluZyBncm91cC4uLlwiKTtcblxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdDogR3JvdXBKb2luUmVxdWVzdCA9IHtcbiAgICAgICAgICAgICAgICBncm91cElEOiBncm91cC5pZFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgYXdhaXQgR3JvdXBKb2lucy5leGVjKHJlcXVlc3QpO1xuXG4gICAgICAgICAgICBUb2FzdGVyLnN1Y2Nlc3MoXCJKb2luaW5nIGdyb3VwLi4uZG9uZVwiKTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIGhhbmRsZXIoKVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBsb2cuZXJyb3IoXCJVbmFibGUgdG8gam9pbiBncm91cDogXCIsIGVycikpO1xuICAgIH1cblxufVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcblxuICAgIHJlYWRvbmx5IG5hbWU6IEdyb3VwTmFtZVN0cjtcblxufVxuXG5pbnRlcmZhY2UgSVN0YXRlIHtcbn1cbiJdfQ==