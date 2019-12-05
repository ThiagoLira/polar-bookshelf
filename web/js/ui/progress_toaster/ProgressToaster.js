"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
class ProgressToaster extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            progressUpdate: {
                title: ""
            }
        };
        const doUpdate = (progressUpdate) => {
            this.setState({ progressUpdate });
        };
        const progressUpdater = {
            update(progressUpdate) {
                doUpdate(progressUpdate);
            }
        };
        this.props.progressUpdaterLatch.resolve(progressUpdater);
    }
    render() {
        return (react_1.default.createElement("div", { style: {
                width: '500px',
                position: 'fixed',
                right: 10,
                bottom: 10,
                zIndex: 9999,
            }, className: "bg-white border rounded shadow p-2 m-2" },
            react_1.default.createElement("div", { style: {
                    display: 'flex',
                    verticalAlign: 'middle'
                }, className: "" },
                react_1.default.createElement("div", { className: "mr-2 text-dark mt-auto mb-auto", style: {
                        whiteSpace: 'nowrap'
                    } },
                    react_1.default.createElement("b", null, this.state.progressUpdate.title || "")),
                react_1.default.createElement("div", { className: "mt-1 mb-1 p-1", style: {
                        textOverflow: 'ellipsis',
                        direction: 'rtl',
                        textAlign: 'left',
                        overflow: 'hidden',
                        whiteSpace: 'nowrap'
                    } }, this.state.progressUpdate.status || ""))));
    }
}
exports.ProgressToaster = ProgressToaster;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZ3Jlc3NUb2FzdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUHJvZ3Jlc3NUb2FzdGVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGtEQUEwQjtBQU8xQixNQUFhLGVBQWdCLFNBQVEsZUFBSyxDQUFDLFNBQXlCO0lBRWhFLFlBQVksS0FBVTtRQUNsQixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFYixJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1QsY0FBYyxFQUFFO2dCQUNaLEtBQUssRUFBRSxFQUFFO2FBQ1o7U0FDSixDQUFDO1FBRUYsTUFBTSxRQUFRLEdBQUcsQ0FBQyxjQUE4QixFQUFFLEVBQUU7WUFDaEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFDLGNBQWMsRUFBQyxDQUFDLENBQUM7UUFDcEMsQ0FBQyxDQUFDO1FBRUYsTUFBTSxlQUFlLEdBQUc7WUFFcEIsTUFBTSxDQUFDLGNBQThCO2dCQUNqQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDN0IsQ0FBQztTQUVKLENBQUM7UUFFRixJQUFJLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUU3RCxDQUFDO0lBRU0sTUFBTTtRQUVULE9BQU8sQ0FFSCx1Q0FBSyxLQUFLLEVBQUU7Z0JBQ1IsS0FBSyxFQUFFLE9BQU87Z0JBQ2QsUUFBUSxFQUFFLE9BQU87Z0JBQ2pCLEtBQUssRUFBRSxFQUFFO2dCQUNULE1BQU0sRUFBRSxFQUFFO2dCQUNWLE1BQU0sRUFBRSxJQUFJO2FBQ2YsRUFDSSxTQUFTLEVBQUMsd0NBQXdDO1lBRW5ELHVDQUFLLEtBQUssRUFBRTtvQkFDUixPQUFPLEVBQUUsTUFBTTtvQkFDZixhQUFhLEVBQUUsUUFBUTtpQkFDMUIsRUFDSSxTQUFTLEVBQUMsRUFBRTtnQkFFYix1Q0FBSyxTQUFTLEVBQUMsZ0NBQWdDLEVBQzFDLEtBQUssRUFBRTt3QkFDSCxVQUFVLEVBQUUsUUFBUTtxQkFDdkI7b0JBRUYseUNBQ0ssSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FDdEMsQ0FFRjtnQkFFTix1Q0FBSyxTQUFTLEVBQUMsZUFBZSxFQUMxQixLQUFLLEVBQUU7d0JBQ0gsWUFBWSxFQUFFLFVBQVU7d0JBQ3hCLFNBQVMsRUFBRSxLQUFLO3dCQUNoQixTQUFTLEVBQUUsTUFBTTt3QkFDakIsUUFBUSxFQUFFLFFBQVE7d0JBQ2xCLFVBQVUsRUFBRSxRQUFRO3FCQUN2QixJQUNBLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQ3JDLENBRUosQ0FFSixDQUVULENBQUM7SUFDTixDQUFDO0NBRUo7QUEzRUQsMENBMkVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7QnV0dG9uLCBQb3BvdmVyLCBQb3BvdmVyQm9keX0gZnJvbSAncmVhY3RzdHJhcCc7XG5pbXBvcnQgUG9wcGVyIGZyb20gJ3BvcHBlci5qcyc7XG5pbXBvcnQge2lwY1JlbmRlcmVyfSBmcm9tIFwiZWxlY3Ryb25cIjtcbmltcG9ydCB7UHJvZ3Jlc3N9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC9Qcm9ncmVzc1RyYWNrZXInO1xuaW1wb3J0IHtMYXRjaH0gZnJvbSBcInBvbGFyLXNoYXJlZC9zcmMvdXRpbC9MYXRjaFwiO1xuXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NUb2FzdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgcHJvZ3Jlc3NVcGRhdGU6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGRvVXBkYXRlID0gKHByb2dyZXNzVXBkYXRlOiBQcm9ncmVzc1VwZGF0ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cHJvZ3Jlc3NVcGRhdGV9KTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBwcm9ncmVzc1VwZGF0ZXIgPSB7XG5cbiAgICAgICAgICAgIHVwZGF0ZShwcm9ncmVzc1VwZGF0ZTogUHJvZ3Jlc3NVcGRhdGUpIHtcbiAgICAgICAgICAgICAgICBkb1VwZGF0ZShwcm9ncmVzc1VwZGF0ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnByb3BzLnByb2dyZXNzVXBkYXRlckxhdGNoLnJlc29sdmUocHJvZ3Jlc3NVcGRhdGVyKTtcblxuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHdpZHRoOiAnNTAwcHgnLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICAgICAgICAgIHJpZ2h0OiAxMCxcbiAgICAgICAgICAgICAgICBib3R0b206IDEwLFxuICAgICAgICAgICAgICAgIHpJbmRleDogOTk5OSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIGJvcmRlciByb3VuZGVkIHNoYWRvdyBwLTIgbS0yXCI+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbjogJ21pZGRsZSdcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci0yIHRleHQtZGFyayBtdC1hdXRvIG1iLWF1dG9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnByb2dyZXNzVXBkYXRlLnRpdGxlIHx8IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2I+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xIG1iLTEgcC0xXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogJ3J0bCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnbGVmdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnByb2dyZXNzVXBkYXRlLnN0YXR1cyB8fCBcIlwifVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICApO1xuICAgIH1cblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElQcm9wcyB7XG5cbiAgICByZWFkb25seSBwcm9ncmVzc1VwZGF0ZXJMYXRjaDogTGF0Y2g8UHJvZ3Jlc3NVcGRhdGVyPjtcblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElTdGF0ZSB7XG5cbiAgICByZWFkb25seSBwcm9ncmVzc1VwZGF0ZTogUHJvZ3Jlc3NVcGRhdGU7XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBQcm9ncmVzc1VwZGF0ZXIge1xuICAgIHVwZGF0ZShwcm9ncmVzc1VwZGF0ZTogUHJvZ3Jlc3NVcGRhdGUpOiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFByb2dyZXNzVXBkYXRlIHtcblxuICAgIC8qKlxuICAgICAqIFRoZSB0aXRsZSB0byBkaXNwbGF5XG4gICAgICovXG4gICAgcmVhZG9ubHkgdGl0bGU/OiBzdHJpbmc7XG5cbiAgICByZWFkb25seSBzdGF0dXM/OiBzdHJpbmcgfCBKU1guRWxlbWVudDtcblxuICAgIHJlYWRvbmx5IHByb2dyZXNzPzogUHJvZ3Jlc3M7XG5cbn1cbiJdfQ==