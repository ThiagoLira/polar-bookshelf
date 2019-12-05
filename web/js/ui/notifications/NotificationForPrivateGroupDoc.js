"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Button_1 = __importDefault(require("reactstrap/lib/Button"));
const Toaster_1 = require("../toaster/Toaster");
const Logger_1 = require("polar-shared/src/logger/Logger");
const GroupJoins_1 = require("../../datastore/sharing/rpc/GroupJoins");
const UserImage_1 = require("./UserImage");
const log = Logger_1.Logger.create();
class NotificationForPrivateGroupDoc extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.onAdd = this.onAdd.bind(this);
    }
    render() {
        const { invitation } = this.props;
        const doc = invitation.docs[0];
        const from = invitation.from;
        return (react_1.default.createElement("div", { className: "" },
            react_1.default.createElement("div", { className: "text-lg" }, doc.title),
            react_1.default.createElement("div", null, doc.description || ""),
            react_1.default.createElement("p", { className: "border-left border-secondary ml-1 pl-1 mt-1" }, invitation.message),
            react_1.default.createElement("div", { style: { display: 'flex' } },
                react_1.default.createElement("div", { className: "mt-auto mb-auto", style: {
                        flexGrow: 1,
                        display: 'flex'
                    } },
                    react_1.default.createElement(UserImage_1.UserImage, { name: from.name, image: from.image }),
                    react_1.default.createElement("div", { className: "mt-auto mb-auto ml-1" }, from.name)),
                react_1.default.createElement("div", { className: "mt-auto mb-auto" },
                    react_1.default.createElement(Button_1.default, { color: "success", size: "sm", onClick: () => this.onAdd(), style: {
                            fontSize: '15px',
                            fontWeight: 'bold'
                        }, className: "" },
                        react_1.default.createElement("i", { className: "fas fa-plus", style: { marginRight: '5px' } }),
                        " Add \u00A0")))));
    }
    onAdd() {
        const persistenceLayer = this.props.persistenceLayerProvider();
        Toaster_1.Toaster.info("Adding documents to document repository");
        const { invitation } = this.props;
        GroupJoins_1.GroupJoins.execAndAdd(persistenceLayer, invitation)
            .then(() => Toaster_1.Toaster.success("Added documents successfully to document repository."))
            .catch(err => {
            const msg = "Failed to add document to repository: ";
            log.error(msg, err);
            Toaster_1.Toaster.error(msg + err.message);
        });
    }
}
exports.NotificationForPrivateGroupDoc = NotificationForPrivateGroupDoc;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm90aWZpY2F0aW9uRm9yUHJpdmF0ZUdyb3VwRG9jLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiTm90aWZpY2F0aW9uRm9yUHJpdmF0ZUdyb3VwRG9jLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGtEQUEwQjtBQUMxQixtRUFBMkM7QUFLM0MsZ0RBQTJDO0FBQzNDLDJEQUFzRDtBQUN0RCx1RUFBa0U7QUFDbEUsMkNBQXNDO0FBRXRDLE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU1QixNQUFhLDhCQUErQixTQUFRLGVBQUssQ0FBQyxTQUF5QjtJQUUvRSxZQUFZLEtBQWE7UUFDckIsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRWIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUV2QyxDQUFDO0lBRU0sTUFBTTtRQUVULE1BQU0sRUFBQyxVQUFVLEVBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ2hDLE1BQU0sR0FBRyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0IsTUFBTSxJQUFJLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQztRQUU3QixPQUFPLENBRUgsdUNBQUssU0FBUyxFQUFDLEVBQUU7WUFFYix1Q0FBSyxTQUFTLEVBQUMsU0FBUyxJQUNuQixHQUFHLENBQUMsS0FBSyxDQUNSO1lBRU4sMkNBQ0ssR0FBRyxDQUFDLFdBQVcsSUFBSSxFQUFFLENBQ3BCO1lBRU4scUNBQUcsU0FBUyxFQUFDLDZDQUE2QyxJQUNyRCxVQUFVLENBQUMsT0FBTyxDQUNuQjtZQUVKLHVDQUFLLEtBQUssRUFBRSxFQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUM7Z0JBRXpCLHVDQUFLLFNBQVMsRUFBQyxpQkFBaUIsRUFDM0IsS0FBSyxFQUFFO3dCQUNILFFBQVEsRUFBRSxDQUFDO3dCQUNYLE9BQU8sRUFBRSxNQUFNO3FCQUNsQjtvQkFFRiw4QkFBQyxxQkFBUyxJQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHO29CQUVoRCx1Q0FBSyxTQUFTLEVBQUMsc0JBQXNCLElBQ2hDLElBQUksQ0FBQyxJQUFJLENBQ1IsQ0FFSjtnQkFFTix1Q0FBSyxTQUFTLEVBQUMsaUJBQWlCO29CQUM1Qiw4QkFBQyxnQkFBTSxJQUFDLEtBQUssRUFBQyxTQUFTLEVBQ2YsSUFBSSxFQUFDLElBQUksRUFDVCxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUMzQixLQUFLLEVBQUU7NEJBQ0gsUUFBUSxFQUFFLE1BQU07NEJBQ2hCLFVBQVUsRUFBRSxNQUFNO3lCQUNyQixFQUNELFNBQVMsRUFBQyxFQUFFO3dCQUVoQixxQ0FBRyxTQUFTLEVBQUMsYUFBYSxFQUFDLEtBQUssRUFBRSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsR0FBRztzQ0FFdEQsQ0FFUCxDQUVKLENBRUosQ0FFVCxDQUFDO0lBRU4sQ0FBQztJQUVPLEtBQUs7UUFFVCxNQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztRQUUvRCxpQkFBTyxDQUFDLElBQUksQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO1FBRXhELE1BQU0sRUFBQyxVQUFVLEVBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBRWhDLHVCQUFVLENBQUMsVUFBVSxDQUFDLGdCQUFnQixFQUFFLFVBQVUsQ0FBQzthQUM5QyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsaUJBQU8sQ0FBQyxPQUFPLENBQUMsc0RBQXNELENBQUMsQ0FBQzthQUNuRixLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDVCxNQUFNLEdBQUcsR0FBRyx3Q0FBd0MsQ0FBQztZQUNyRCxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUNwQixpQkFBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxDQUFDO0lBRVgsQ0FBQztDQUVKO0FBekZELHdFQXlGQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0c3RyYXAvbGliL0J1dHRvbic7XG5pbXBvcnQge0dyb3VwTWVtYmVySW52aXRhdGlvbn0gZnJvbSAnLi4vLi4vZGF0YXN0b3JlL3NoYXJpbmcvZGIvR3JvdXBNZW1iZXJJbnZpdGF0aW9ucyc7XG5pbXBvcnQge0dyb3VwRGF0YXN0b3Jlc30gZnJvbSAnLi4vLi4vZGF0YXN0b3JlL3NoYXJpbmcvR3JvdXBEYXRhc3RvcmVzJztcbmltcG9ydCB7R3JvdXBEb2NSZWZ9IGZyb20gJy4uLy4uL2RhdGFzdG9yZS9zaGFyaW5nL0dyb3VwRGF0YXN0b3Jlcyc7XG5pbXBvcnQge1BlcnNpc3RlbmNlTGF5ZXJQcm92aWRlcn0gZnJvbSAnLi4vLi4vZGF0YXN0b3JlL1BlcnNpc3RlbmNlTGF5ZXInO1xuaW1wb3J0IHtUb2FzdGVyfSBmcm9tICcuLi90b2FzdGVyL1RvYXN0ZXInO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge0dyb3VwSm9pbnN9IGZyb20gJy4uLy4uL2RhdGFzdG9yZS9zaGFyaW5nL3JwYy9Hcm91cEpvaW5zJztcbmltcG9ydCB7VXNlckltYWdlfSBmcm9tICcuL1VzZXJJbWFnZSc7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuZXhwb3J0IGNsYXNzIE5vdGlmaWNhdGlvbkZvclByaXZhdGVHcm91cERvYyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5vbkFkZCA9IHRoaXMub25BZGQuYmluZCh0aGlzKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgY29uc3Qge2ludml0YXRpb259ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgZG9jID0gaW52aXRhdGlvbi5kb2NzWzBdO1xuICAgICAgICBjb25zdCBmcm9tID0gaW52aXRhdGlvbi5mcm9tO1xuXG4gICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbGdcIj5cbiAgICAgICAgICAgICAgICAgICAge2RvYy50aXRsZX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIHtkb2MuZGVzY3JpcHRpb24gfHwgXCJcIn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImJvcmRlci1sZWZ0IGJvcmRlci1zZWNvbmRhcnkgbWwtMSBwbC0xIG10LTFcIj5cbiAgICAgICAgICAgICAgICAgICAge2ludml0YXRpb24ubWVzc2FnZX1cbiAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnfX0+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC1hdXRvIG1iLWF1dG9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXhHcm93OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCdcbiAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPFVzZXJJbWFnZSBuYW1lPXtmcm9tLm5hbWV9IGltYWdlPXtmcm9tLmltYWdlfS8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtYXV0byBtYi1hdXRvIG1sLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZnJvbS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC1hdXRvIG1iLWF1dG9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJzdWNjZXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5vbkFkZCgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxNXB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1wbHVzXCIgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICc1cHgnIH19Lz4gQWRkICZuYnNwO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICApO1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkFkZCgpIHtcblxuICAgICAgICBjb25zdCBwZXJzaXN0ZW5jZUxheWVyID0gdGhpcy5wcm9wcy5wZXJzaXN0ZW5jZUxheWVyUHJvdmlkZXIoKTtcblxuICAgICAgICBUb2FzdGVyLmluZm8oXCJBZGRpbmcgZG9jdW1lbnRzIHRvIGRvY3VtZW50IHJlcG9zaXRvcnlcIik7XG5cbiAgICAgICAgY29uc3Qge2ludml0YXRpb259ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBHcm91cEpvaW5zLmV4ZWNBbmRBZGQocGVyc2lzdGVuY2VMYXllciwgaW52aXRhdGlvbilcbiAgICAgICAgICAgIC50aGVuKCgpID0+IFRvYXN0ZXIuc3VjY2VzcyhcIkFkZGVkIGRvY3VtZW50cyBzdWNjZXNzZnVsbHkgdG8gZG9jdW1lbnQgcmVwb3NpdG9yeS5cIikpXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBtc2cgPSBcIkZhaWxlZCB0byBhZGQgZG9jdW1lbnQgdG8gcmVwb3NpdG9yeTogXCI7XG4gICAgICAgICAgICAgICAgbG9nLmVycm9yKG1zZywgZXJyKTtcbiAgICAgICAgICAgICAgICBUb2FzdGVyLmVycm9yKG1zZyArIGVyci5tZXNzYWdlKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgfVxuXG59XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICAgIHJlYWRvbmx5IGludml0YXRpb246IEdyb3VwTWVtYmVySW52aXRhdGlvbjtcbiAgICByZWFkb25seSBwZXJzaXN0ZW5jZUxheWVyUHJvdmlkZXI6IFBlcnNpc3RlbmNlTGF5ZXJQcm92aWRlcjtcbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG59XG4iXX0=