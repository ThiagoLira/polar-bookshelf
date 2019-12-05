"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Logger_1 = require("polar-shared/src/logger/Logger");
const log = Logger_1.Logger.create();
class Styles {
}
Styles.notice = {
    position: 'fixed',
    width: '450px',
    bottom: '10px',
    right: '15px',
    zIndex: 9999,
};
Styles.intro = {
    fontWeight: 'bold',
    fontSize: '22px',
    margin: '5px 0px 10px 0px'
};
class BubbleModal extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const display = this.props.disabled ? 'none' : 'block';
        return (react_1.default.createElement("div", { style: { display } },
            react_1.default.createElement("div", { className: "p-3 m-2 rounded", style: Styles.notice }, this.props.children)));
    }
}
exports.BubbleModal = BubbleModal;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnViYmxlTW9kYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJCdWJibGVNb2RhbC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxrREFBMEI7QUFDMUIsMkRBQXNEO0FBRXRELE1BQU0sR0FBRyxHQUFHLGVBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUU1QixNQUFNLE1BQU07O0FBRU0sYUFBTSxHQUF3QjtJQUV4QyxRQUFRLEVBQUUsT0FBTztJQUNqQixLQUFLLEVBQUUsT0FBTztJQUNkLE1BQU0sRUFBRSxNQUFNO0lBQ2QsS0FBSyxFQUFFLE1BQU07SUFDYixNQUFNLEVBQUUsSUFBSTtDQUVmLENBQUM7QUFFWSxZQUFLLEdBQXdCO0lBRXZDLFVBQVUsRUFBRSxNQUFNO0lBQ2xCLFFBQVEsRUFBRSxNQUFNO0lBQ2hCLE1BQU0sRUFBRSxrQkFBa0I7Q0FFN0IsQ0FBQztBQU1OLE1BQWEsV0FBWSxTQUFRLGVBQUssQ0FBQyxTQUF5QjtJQUU1RCxZQUFZLEtBQVU7UUFDbEIsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRWIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUNaLENBQUM7SUFFTixDQUFDO0lBRU0sTUFBTTtRQUVULE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUV4RCxPQUFPLENBRUgsdUNBQUssS0FBSyxFQUFFLEVBQUMsT0FBTyxFQUFDO1lBRWpCLHVDQUFLLFNBQVMsRUFBQyxpQkFBaUIsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLE1BQU0sSUFFaEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBRWxCLENBRUosQ0FFVCxDQUFDO0lBQ04sQ0FBQztDQUVKO0FBN0JELGtDQTZCQyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludCByZWFjdC9uby1tdWx0aS1jb21wOiAwLCByZWFjdC9wcm9wLXR5cGVzOiAwICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbG9nZ2VyL0xvZ2dlcic7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuY2xhc3MgU3R5bGVzIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgbm90aWNlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xuXG4gICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICB3aWR0aDogJzQ1MHB4JyxcbiAgICAgICAgYm90dG9tOiAnMTBweCcsXG4gICAgICAgIHJpZ2h0OiAnMTVweCcsXG4gICAgICAgIHpJbmRleDogOTk5OSxcblxuICAgIH07XG5cbiAgICBwdWJsaWMgc3RhdGljIGludHJvOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xuXG4gICAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICAgICAgZm9udFNpemU6ICcyMnB4JyxcbiAgICAgICAgbWFyZ2luOiAnNXB4IDBweCAxMHB4IDBweCdcblxuICAgIH07XG5cbn1cblxuLyoqXG4gKi9cbmV4cG9ydCBjbGFzcyBCdWJibGVNb2RhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IGFueSkge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgfTtcblxuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgY29uc3QgZGlzcGxheSA9IHRoaXMucHJvcHMuZGlzYWJsZWQgID8gJ25vbmUnIDogJ2Jsb2NrJztcblxuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheX19PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTMgbS0yIHJvdW5kZWRcIiBzdHlsZT17U3R5bGVzLm5vdGljZX0+XG5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUHJvcHMge1xuICAgIHJlYWRvbmx5IGRpc2FibGVkPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJU3RhdGUge1xufVxuIl19