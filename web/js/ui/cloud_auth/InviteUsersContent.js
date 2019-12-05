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
const Styles = {
    icon: {
        fontSize: '120px',
        margin: '20px',
        color: '#007bff'
    },
};
class InviteUsersContent extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (React.createElement("div", { className: "intro p-1" },
            React.createElement("div", { className: "text-center" },
                React.createElement("i", { className: "fas fa-envelope-open", style: Styles.icon }),
                React.createElement("h1", { className: "title" }, "Invite Your Colleagues to Polar")),
            React.createElement("p", { className: "subtitle", style: Styles.overview }, "One month free of cloud storage for every user you invite!"),
            React.createElement("p", null,
                "Get a ",
                React.createElement("b", null, "free"),
                " month of Polar cloud storage for every user you invite. Once they purchase Polar cloud sync for sixty days we'll credit your account.  Invite as many users as you would like!"),
            React.createElement("p", null, "Just enter their emails below and we'll send them an invitation."),
            React.createElement("p", null, "We'll also give you the option to follow them once we enable document sharing in a future release!"),
            React.createElement("label", { className: "text-muted" }, "Enter email addresses below:"),
            React.createElement("textarea", { autoFocus: true, onChange: (element) => this.props.onInvitedUserText(element.currentTarget.value), style: { width: '100%', height: '100px' } })));
    }
}
exports.InviteUsersContent = InviteUsersContent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW52aXRlVXNlcnNDb250ZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiSW52aXRlVXNlcnNDb250ZW50LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSw2Q0FBK0I7QUFJL0IsTUFBTSxNQUFNLEdBQWM7SUFFdEIsSUFBSSxFQUFFO1FBQ0YsUUFBUSxFQUFFLE9BQU87UUFDakIsTUFBTSxFQUFFLE1BQU07UUFDZCxLQUFLLEVBQUUsU0FBUztLQUduQjtDQUVKLENBQUM7QUFFRixNQUFhLGtCQUFtQixTQUFRLEtBQUssQ0FBQyxTQUF5QjtJQUVuRSxZQUFZLEtBQWEsRUFBRSxPQUFZO1FBQ25DLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFFMUIsQ0FBQztJQUVNLE1BQU07UUFFVCxPQUFPLENBQ0gsNkJBQUssU0FBUyxFQUFDLFdBQVc7WUFFdEIsNkJBQUssU0FBUyxFQUFDLGFBQWE7Z0JBRXhCLDJCQUFHLFNBQVMsRUFBQyxzQkFBc0IsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLElBQUksR0FBTTtnQkFFNUQsNEJBQUksU0FBUyxFQUFDLE9BQU8sc0NBQXFDLENBRXhEO1lBRU4sMkJBQUcsU0FBUyxFQUFDLFVBQVUsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLFFBQVEsaUVBRzFDO1lBRUo7O2dCQUNVLHNDQUFXO2tNQUlqQjtZQUVKLGtHQUdJO1lBRUosb0lBR0k7WUFFSiwrQkFBTyxTQUFTLEVBQUMsWUFBWSxtQ0FBcUM7WUFFbEUsa0NBQVUsU0FBUyxFQUFFLElBQUksRUFDZixRQUFRLEVBQUUsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsRUFDaEYsS0FBSyxFQUFFLEVBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFDLEdBRXRDLENBRVQsQ0FFVCxDQUFDO0lBQ04sQ0FBQztDQUVKO0FBdkRELGdEQXVEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7SVN0eWxlTWFwfSBmcm9tICcuLi8uLi9yZWFjdC9JU3R5bGVNYXAnO1xuXG5cbmNvbnN0IFN0eWxlczogSVN0eWxlTWFwID0ge1xuXG4gICAgaWNvbjoge1xuICAgICAgICBmb250U2l6ZTogJzEyMHB4JyxcbiAgICAgICAgbWFyZ2luOiAnMjBweCcsXG4gICAgICAgIGNvbG9yOiAnIzAwN2JmZidcbiAgICAgICAgLy8gbWluV2lkdGg6ICczNTBweCcsXG4gICAgICAgIC8vIHdpZHRoOiAnMzUwcHgnXG4gICAgfSxcblxufTtcblxuZXhwb3J0IGNsYXNzIEludml0ZVVzZXJzQ29udGVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcywgY29udGV4dDogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcblxuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW50cm8gcC0xXCI+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWVudmVsb3BlLW9wZW5cIiBzdHlsZT17U3R5bGVzLmljb259PjwvaT5cblxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5JbnZpdGUgWW91ciBDb2xsZWFndWVzIHRvIFBvbGFyPC9oMT5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3VidGl0bGVcIiBzdHlsZT17U3R5bGVzLm92ZXJ2aWV3fT5cbiAgICAgICAgICAgICAgICAgICAgT25lIG1vbnRoIGZyZWUgb2YgY2xvdWQgc3RvcmFnZSBmb3IgZXZlcnkgdXNlclxuICAgICAgICAgICAgICAgICAgICB5b3UgaW52aXRlIVxuICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICBHZXQgYSA8Yj5mcmVlPC9iPiBtb250aCBvZiBQb2xhciBjbG91ZCBzdG9yYWdlIGZvciBldmVyeVxuICAgICAgICAgICAgICAgICAgICB1c2VyIHlvdSBpbnZpdGUuIE9uY2UgdGhleSBwdXJjaGFzZSBQb2xhciBjbG91ZCBzeW5jIGZvclxuICAgICAgICAgICAgICAgICAgICBzaXh0eSBkYXlzIHdlJ2xsIGNyZWRpdCB5b3VyIGFjY291bnQuICBJbnZpdGUgYXMgbWFueSB1c2Vyc1xuICAgICAgICAgICAgICAgICAgICBhcyB5b3Ugd291bGQgbGlrZSFcbiAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgSnVzdCBlbnRlciB0aGVpciBlbWFpbHMgYmVsb3cgYW5kIHdlJ2xsIHNlbmQgdGhlbSBhblxuICAgICAgICAgICAgICAgICAgICBpbnZpdGF0aW9uLlxuICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICBXZSdsbCBhbHNvIGdpdmUgeW91IHRoZSBvcHRpb24gdG8gZm9sbG93IHRoZW0gb25jZSB3ZSBlbmFibGVcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQgc2hhcmluZyBpbiBhIGZ1dHVyZSByZWxlYXNlIVxuICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+RW50ZXIgZW1haWwgYWRkcmVzc2VzIGJlbG93OjwvbGFiZWw+XG5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgYXV0b0ZvY3VzPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGVsZW1lbnQpID0+IHRoaXMucHJvcHMub25JbnZpdGVkVXNlclRleHQoZWxlbWVudC5jdXJyZW50VGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDBweCd9fT5cblxuICAgICAgICAgICAgICAgIDwvdGV4dGFyZWE+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICk7XG4gICAgfVxuXG59XG5cbmludGVyZmFjZSBJUHJvcHMge1xuXG4gICAgb25JbnZpdGVkVXNlclRleHQ6ICh0ZXh0OiBzdHJpbmcpID0+IHZvaWQ7XG5cbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG5cbn1cblxuXG4iXX0=