"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const reactstrap_1 = require("reactstrap");
const electron_1 = require("electron");
class RestartForUpdateButton extends react_1.default.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (react_1.default.createElement("div", { style: {
                width: '500px',
                position: 'fixed',
                right: 10,
                bottom: 10,
                zIndex: 9999,
            }, className: "border rounded shadow p-3 m-2 text-white bg-dark" },
            react_1.default.createElement("div", { style: {
                    display: 'flex',
                    verticalAlign: 'middle'
                }, className: "mb-3" },
                react_1.default.createElement("div", { className: "mr-3 text-success mt-auto mb-auto" },
                    react_1.default.createElement("i", { style: { fontSize: '50px' }, className: "fas fa-check" })),
                react_1.default.createElement("div", { className: "mt-1 mb-1" },
                    react_1.default.createElement("div", { className: "mb-1", style: { fontSize: '18px' } },
                        react_1.default.createElement("b", null, "Update available."),
                        " Please restart."),
                    react_1.default.createElement("div", { className: "mt-1 mb-1 h6" }, "An update was downloaded and ready to be installed. Please restart to install the latest version."))),
            react_1.default.createElement("div", null,
                react_1.default.createElement("div", { className: "text-center text-white" },
                    react_1.default.createElement(reactstrap_1.Button, { onClick: () => electron_1.ipcRenderer.send('app-update:quit-and-install'), style: {
                            fontWeight: 'bold'
                        }, size: "lg", color: "success" }, "Restart")))));
    }
}
exports.RestartForUpdateButton = RestartForUpdateButton;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVzdGFydEZvclVwZGF0ZUJ1dHRvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlJlc3RhcnRGb3JVcGRhdGVCdXR0b24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsa0RBQTBCO0FBQzFCLDJDQUF3RDtBQUV4RCx1Q0FBcUM7QUFFckMsTUFBYSxzQkFBdUIsU0FBUSxlQUFLLENBQUMsU0FBbUI7SUFFakUsWUFBWSxLQUFVO1FBQ2xCLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUVqQixDQUFDO0lBRU0sTUFBTTtRQUVULE9BQU8sQ0FFSCx1Q0FBSyxLQUFLLEVBQUU7Z0JBQ1IsS0FBSyxFQUFFLE9BQU87Z0JBQ2QsUUFBUSxFQUFFLE9BQU87Z0JBQ2pCLEtBQUssRUFBRSxFQUFFO2dCQUNULE1BQU0sRUFBRSxFQUFFO2dCQUNWLE1BQU0sRUFBRSxJQUFJO2FBQ2YsRUFDSSxTQUFTLEVBQUMsa0RBQWtEO1lBRTdELHVDQUFLLEtBQUssRUFBRTtvQkFDUixPQUFPLEVBQUUsTUFBTTtvQkFDZixhQUFhLEVBQUUsUUFBUTtpQkFDMUIsRUFDSSxTQUFTLEVBQUMsTUFBTTtnQkFFakIsdUNBQUssU0FBUyxFQUFDLG1DQUFtQztvQkFFOUMscUNBQUcsS0FBSyxFQUFFLEVBQUMsUUFBUSxFQUFFLE1BQU0sRUFBQyxFQUFFLFNBQVMsRUFBQyxjQUFjLEdBQUssQ0FFekQ7Z0JBRU4sdUNBQUssU0FBUyxFQUFDLFdBQVc7b0JBRXRCLHVDQUFLLFNBQVMsRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFFLEVBQUMsUUFBUSxFQUFFLE1BQU0sRUFBQzt3QkFDM0MsNkRBQXdCOzJDQUN0QjtvQkFFTix1Q0FBSyxTQUFTLEVBQUMsY0FBYyx3R0FJdkIsQ0FFSixDQUVKO1lBRU47Z0JBRUksdUNBQUssU0FBUyxFQUFDLHdCQUF3QjtvQkFDbkMsOEJBQUMsbUJBQU0sSUFBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsc0JBQVcsQ0FBQyxJQUFJLENBQUMsNkJBQTZCLENBQUMsRUFDOUQsS0FBSyxFQUFFOzRCQUNILFVBQVUsRUFBRSxNQUFNO3lCQUNyQixFQUNELElBQUksRUFBQyxJQUFJLEVBQ1QsS0FBSyxFQUFDLFNBQVMsY0FFZCxDQUNQLENBRUosQ0FHSixDQUVULENBQUM7SUFDTixDQUFDO0NBRUo7QUFyRUQsd0RBcUVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7QnV0dG9uLCBQb3BvdmVyLCBQb3BvdmVyQm9keX0gZnJvbSAncmVhY3RzdHJhcCc7XG5pbXBvcnQgUG9wcGVyIGZyb20gJ3BvcHBlci5qcyc7XG5pbXBvcnQge2lwY1JlbmRlcmVyfSBmcm9tIFwiZWxlY3Ryb25cIjtcblxuZXhwb3J0IGNsYXNzIFJlc3RhcnRGb3JVcGRhdGVCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8YW55LCBhbnk+IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgd2lkdGg6ICc1MDBweCcsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDEwLFxuICAgICAgICAgICAgICAgIGJvdHRvbTogMTAsXG4gICAgICAgICAgICAgICAgekluZGV4OiA5OTk5LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIHJvdW5kZWQgc2hhZG93IHAtMyBtLTIgdGV4dC13aGl0ZSBiZy1kYXJrXCI+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbjogJ21pZGRsZSdcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWItM1wiPlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItMyB0ZXh0LXN1Y2Nlc3MgbXQtYXV0byBtYi1hdXRvXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIHN0eWxlPXt7Zm9udFNpemU6ICc1MHB4J319IGNsYXNzTmFtZT1cImZhcyBmYS1jaGVja1wiPjwvaT5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEgbWItMVwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTFcIiBzdHlsZT17e2ZvbnRTaXplOiAnMThweCd9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj5VcGRhdGUgYXZhaWxhYmxlLjwvYj4gUGxlYXNlIHJlc3RhcnQuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xIG1iLTEgaDZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBbiB1cGRhdGUgd2FzIGRvd25sb2FkZWQgYW5kIHJlYWR5IHRvIGJlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFsbGVkLiBQbGVhc2UgcmVzdGFydCB0byBpbnN0YWxsIHRoZSBsYXRlc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJzaW9uLlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IGlwY1JlbmRlcmVyLnNlbmQoJ2FwcC11cGRhdGU6cXVpdC1hbmQtaW5zdGFsbCcpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogJ2JvbGQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJsZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwic3VjY2Vzc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlc3RhcnRcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICk7XG4gICAgfVxuXG59XG4iXX0=