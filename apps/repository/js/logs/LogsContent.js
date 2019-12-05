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
const ReleasingReactComponent_1 = __importDefault(require("../framework/ReleasingReactComponent"));
const MemoryLogger_1 = require("../../../../web/js/logger/MemoryLogger");
const react_json_view_1 = __importDefault(require("react-json-view"));
const log = Logger_1.Logger.create();
class Styles {
}
Styles.LogMessage = {
    display: 'flex',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
};
Styles.LogFieldTimestamp = {
    fontWeight: 'bold',
    fontFamily: 'Courier New, monospace',
    marginRight: '5px',
    whiteSpace: 'nowrap',
};
Styles.LogFieldMsg = {
    fontFamily: 'Courier New, monospace',
    whiteSpace: 'nowrap',
    overflow: 'none'
};
Styles.LogFieldArgs = {
    marginLeft: '5px'
};
class LogsContent extends ReleasingReactComponent_1.default {
    constructor(props, context) {
        super(props, context);
        this.state = {
            messages: MemoryLogger_1.MemoryLogger.toView()
        };
    }
    componentWillMount() {
        this.releaser.register(MemoryLogger_1.MemoryLogger.addEventListener(() => {
            this.setState({ messages: MemoryLogger_1.MemoryLogger.toView() });
        }));
    }
    render() {
        const messages = [...this.state.messages];
        const argsRenderable = (args) => {
            if (args) {
                if (Array.isArray(args)) {
                    if (args.length > 0) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
                return true;
            }
            return false;
        };
        return messages.reverse()
            .map(current => {
            let className = "";
            if (current.level === 'warn') {
                className = 'alert-warning';
            }
            if (current.level === 'error') {
                className = 'alert-danger';
            }
            const RenderJSON = () => {
                if (argsRenderable(current.args)) {
                    return (React.createElement("div", { style: Styles.LogFieldArgs },
                        React.createElement(react_json_view_1.default, { src: current.args, name: 'args', shouldCollapse: () => true })));
                }
                return (React.createElement("div", null));
            };
            return React.createElement("div", { style: Styles.LogMessage, className: className, key: current.idx },
                React.createElement("div", { style: Styles.LogFieldTimestamp }, current.timestamp),
                React.createElement("div", { style: Styles.LogFieldMsg }, current.msg),
                React.createElement(RenderJSON, null));
        });
    }
}
exports.default = LogsContent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9nc0NvbnRlbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJMb2dzQ29udGVudC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQStCO0FBQy9CLDJEQUFzRDtBQUV0RCxtR0FBMkU7QUFDM0UseUVBQW9FO0FBQ3BFLHNFQUF3QztBQUV4QyxNQUFNLEdBQUcsR0FBRyxlQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFFNUIsTUFBTSxNQUFNOztBQUVNLGlCQUFVLEdBQXdCO0lBQzVDLE9BQU8sRUFBRSxNQUFNO0lBQ2YsVUFBVSxFQUFFLFFBQVE7SUFDcEIsUUFBUSxFQUFFLFFBQVE7Q0FDckIsQ0FBQztBQUVZLHdCQUFpQixHQUF3QjtJQUNuRCxVQUFVLEVBQUUsTUFBTTtJQUNsQixVQUFVLEVBQUUsd0JBQXdCO0lBQ3BDLFdBQVcsRUFBRSxLQUFLO0lBQ2xCLFVBQVUsRUFBRSxRQUFRO0NBQ3ZCLENBQUM7QUFFWSxrQkFBVyxHQUF3QjtJQUM3QyxVQUFVLEVBQUUsd0JBQXdCO0lBQ3BDLFVBQVUsRUFBRSxRQUFRO0lBQ3BCLFFBQVEsRUFBRSxNQUFNO0NBQ25CLENBQUM7QUFFWSxtQkFBWSxHQUF3QjtJQUM5QyxVQUFVLEVBQUUsS0FBSztDQUNwQixDQUFDO0FBSU4sTUFBcUIsV0FBWSxTQUFRLGlDQUF1QztJQUU1RSxZQUFZLEtBQWEsRUFBRSxPQUFZO1FBQ25DLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFdEIsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNULFFBQVEsRUFBRSwyQkFBWSxDQUFDLE1BQU0sRUFBRTtTQUNsQyxDQUFDO0lBRU4sQ0FBQztJQUdNLGtCQUFrQjtRQUVyQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FDbEIsMkJBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUU7WUFDL0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFDLFFBQVEsRUFBRSwyQkFBWSxDQUFDLE1BQU0sRUFBRSxFQUFDLENBQUMsQ0FBQztRQUNyRCxDQUFDLENBQUMsQ0FDTCxDQUFDO0lBRU4sQ0FBQztJQUVNLE1BQU07UUFFVCxNQUFNLFFBQVEsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUUxQyxNQUFNLGNBQWMsR0FBRyxDQUFDLElBQVMsRUFBVyxFQUFFO1lBRTFDLElBQUksSUFBSSxFQUFFO2dCQUVOLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtvQkFFckIsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTt3QkFDakIsT0FBTyxJQUFJLENBQUM7cUJBQ2Y7eUJBQU07d0JBQ0gsT0FBTyxLQUFLLENBQUM7cUJBQ2hCO2lCQUVKO2dCQUVELE9BQU8sSUFBSSxDQUFDO2FBRWY7WUFFRCxPQUFPLEtBQUssQ0FBQztRQUVqQixDQUFDLENBQUM7UUFFRixPQUFPLFFBQVEsQ0FBQyxPQUFPLEVBQUU7YUFDVCxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFFMUIsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDO1lBRW5CLElBQUksT0FBTyxDQUFDLEtBQUssS0FBSyxNQUFNLEVBQUU7Z0JBQzFCLFNBQVMsR0FBRyxlQUFlLENBQUM7YUFDL0I7WUFFRCxJQUFJLE9BQU8sQ0FBQyxLQUFLLEtBQUssT0FBTyxFQUFFO2dCQUMzQixTQUFTLEdBQUcsY0FBYyxDQUFDO2FBQzlCO1lBRUQsTUFBTSxVQUFVLEdBQUcsR0FBRyxFQUFFO2dCQUVwQixJQUFJLGNBQWMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBRTlCLE9BQU8sQ0FBQyw2QkFBSyxLQUFLLEVBQUUsTUFBTSxDQUFDLFlBQVk7d0JBQ25DLG9CQUFDLHlCQUFTLElBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxHQUFHLENBQ3ZFLENBQUMsQ0FBQztpQkFFWDtnQkFFRCxPQUFPLENBQUMsZ0NBQVcsQ0FBQyxDQUFDO1lBRXpCLENBQUMsQ0FBQztZQUVGLE9BQU8sNkJBQUssS0FBSyxFQUFFLE1BQU0sQ0FBQyxVQUFVLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsT0FBTyxDQUFDLEdBQUc7Z0JBRXhFLDZCQUFLLEtBQUssRUFBRSxNQUFNLENBQUMsaUJBQWlCLElBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBTztnQkFDL0QsNkJBQUssS0FBSyxFQUFFLE1BQU0sQ0FBQyxXQUFXLElBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBTztnQkFHbkQsb0JBQUMsVUFBVSxPQUFFLENBRVgsQ0FBQztRQUVYLENBQUMsQ0FBQyxDQUFDO0lBRVAsQ0FBQztDQUVKO0FBekZELDhCQXlGQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL2xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IHtMb2dNZXNzYWdlfSBmcm9tICcuLi8uLi8uLi8uLi93ZWIvanMvbG9nZ2VyL0xvZ2dpbmcnO1xuaW1wb3J0IFJlbGVhc2luZ1JlYWN0Q29tcG9uZW50IGZyb20gJy4uL2ZyYW1ld29yay9SZWxlYXNpbmdSZWFjdENvbXBvbmVudCc7XG5pbXBvcnQge01lbW9yeUxvZ2dlcn0gZnJvbSAnLi4vLi4vLi4vLi4vd2ViL2pzL2xvZ2dlci9NZW1vcnlMb2dnZXInO1xuaW1wb3J0IFJlYWN0SnNvbiBmcm9tICdyZWFjdC1qc29uLXZpZXcnO1xuXG5jb25zdCBsb2cgPSBMb2dnZXIuY3JlYXRlKCk7XG5cbmNsYXNzIFN0eWxlcyB7XG5cbiAgICBwdWJsaWMgc3RhdGljIExvZ01lc3NhZ2U6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICB9O1xuXG4gICAgcHVibGljIHN0YXRpYyBMb2dGaWVsZFRpbWVzdGFtcDogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcbiAgICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgICAgICBmb250RmFtaWx5OiAnQ291cmllciBOZXcsIG1vbm9zcGFjZScsXG4gICAgICAgIG1hcmdpblJpZ2h0OiAnNXB4JyxcbiAgICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgfTtcblxuICAgIHB1YmxpYyBzdGF0aWMgTG9nRmllbGRNc2c6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XG4gICAgICAgIGZvbnRGYW1pbHk6ICdDb3VyaWVyIE5ldywgbW9ub3NwYWNlJyxcbiAgICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgICAgIG92ZXJmbG93OiAnbm9uZSdcbiAgICB9O1xuXG4gICAgcHVibGljIHN0YXRpYyBMb2dGaWVsZEFyZ3M6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XG4gICAgICAgIG1hcmdpbkxlZnQ6ICc1cHgnXG4gICAgfTtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dzQ29udGVudCBleHRlbmRzIFJlbGVhc2luZ1JlYWN0Q29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzLCBjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBtZXNzYWdlczogTWVtb3J5TG9nZ2VyLnRvVmlldygpXG4gICAgICAgIH07XG5cbiAgICB9XG5cblxuICAgIHB1YmxpYyBjb21wb25lbnRXaWxsTW91bnQoKTogdm9pZCB7XG5cbiAgICAgICAgdGhpcy5yZWxlYXNlci5yZWdpc3RlcihcbiAgICAgICAgICAgIE1lbW9yeUxvZ2dlci5hZGRFdmVudExpc3RlbmVyKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHttZXNzYWdlczogTWVtb3J5TG9nZ2VyLnRvVmlldygpfSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICBjb25zdCBtZXNzYWdlcyA9IFsuLi50aGlzLnN0YXRlLm1lc3NhZ2VzXTtcblxuICAgICAgICBjb25zdCBhcmdzUmVuZGVyYWJsZSA9IChhcmdzOiBhbnkpOiBib29sZWFuID0+IHtcblxuICAgICAgICAgICAgaWYgKGFyZ3MpIHtcblxuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGFyZ3MpKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBtZXNzYWdlcy5yZXZlcnNlKClcbiAgICAgICAgICAgICAgICAgICAgICAgLm1hcChjdXJyZW50ID0+IHtcblxuICAgICAgICAgICAgbGV0IGNsYXNzTmFtZSA9IFwiXCI7XG5cbiAgICAgICAgICAgIGlmIChjdXJyZW50LmxldmVsID09PSAnd2FybicpIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSAnYWxlcnQtd2FybmluZyc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjdXJyZW50LmxldmVsID09PSAnZXJyb3InKSB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lID0gJ2FsZXJ0LWRhbmdlcic7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IFJlbmRlckpTT04gPSAoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBpZiAoYXJnc1JlbmRlcmFibGUoY3VycmVudC5hcmdzKSkge1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoPGRpdiBzdHlsZT17U3R5bGVzLkxvZ0ZpZWxkQXJnc30+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3RKc29uIHNyYz17Y3VycmVudC5hcmdzfSBuYW1lPXsnYXJncyd9IHNob3VsZENvbGxhcHNlPXsoKSA9PiB0cnVlfS8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2Pik7XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gKDxkaXY+PC9kaXY+KTtcblxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgcmV0dXJuIDxkaXYgc3R5bGU9e1N0eWxlcy5Mb2dNZXNzYWdlfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0ga2V5PXtjdXJyZW50LmlkeH0+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtTdHlsZXMuTG9nRmllbGRUaW1lc3RhbXB9PntjdXJyZW50LnRpbWVzdGFtcH08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtTdHlsZXMuTG9nRmllbGRNc2d9PntjdXJyZW50Lm1zZ308L2Rpdj5cblxuXG4gICAgICAgICAgICAgICAgPFJlbmRlckpTT04vPlxuXG4gICAgICAgICAgICA8L2Rpdj47XG5cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUHJvcHMge1xuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVN0YXRlIHtcbiAgICBtZXNzYWdlczogUmVhZG9ubHlBcnJheTxMb2dNZXNzYWdlPjtcbn1cbiJdfQ==