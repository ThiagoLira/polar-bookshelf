"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ReleasingReactComponent_1 = __importDefault(require("../framework/ReleasingReactComponent"));
class ExtendedReactTable extends ReleasingReactComponent_1.default {
    constructor(props, context) {
        super(props, context);
        const keyboardHandler = (event) => {
            const state = this.state;
            if (state.selected === undefined) {
                return;
            }
            if (event.key === "ArrowUp") {
                const selected = Math.max(state.selected - 1, 0);
                this.onSelectedRow(selected);
            }
            if (event.key === "ArrowDown") {
                const selected = state.selected + 1;
                this.onSelectedRow(selected);
            }
        };
    }
    onSelectedRow(selected) {
        const state = this.state;
        this.setState(Object.assign(Object.assign({}, state), { selected }));
    }
}
exports.ExtendedReactTable = ExtendedReactTable;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXh0ZW5kZWRSZWFjdFRhYmxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRXh0ZW5kZWRSZWFjdFRhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsbUdBQTJFO0FBRTNFLE1BQWEsa0JBQWtELFNBQVEsaUNBQTZCO0lBRWhHLFlBQVksS0FBVSxFQUFFLE9BQVk7UUFDaEMsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztRQUV0QixNQUFNLGVBQWUsR0FBRyxDQUFDLEtBQW9CLEVBQUUsRUFBRTtZQUs3QyxNQUFNLEtBQUssR0FBcUIsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUUzQyxJQUFJLEtBQUssQ0FBQyxRQUFRLEtBQUssU0FBUyxFQUFFO2dCQUM5QixPQUFPO2FBQ1Y7WUFFRCxJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssU0FBUyxFQUFFO2dCQUN6QixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNqRCxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ2hDO1lBRUQsSUFBSSxLQUFLLENBQUMsR0FBRyxLQUFLLFdBQVcsRUFBRTtnQkFDM0IsTUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7Z0JBQ3BDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDaEM7UUFFTCxDQUFDLENBQUM7SUFVTixDQUFDO0lBT1MsYUFBYSxDQUFDLFFBQWdCO1FBQ3BDLE1BQU0sS0FBSyxHQUFxQixJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzNDLElBQUksQ0FBQyxRQUFRLGlDQUFLLEtBQUssS0FBRSxRQUFRLElBQUcsQ0FBQztJQUN6QyxDQUFDO0NBRUo7QUFoREQsZ0RBZ0RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlbGVhc2luZ1JlYWN0Q29tcG9uZW50IGZyb20gJy4uL2ZyYW1ld29yay9SZWxlYXNpbmdSZWFjdENvbXBvbmVudCc7XG5cbmV4cG9ydCBjbGFzcyBFeHRlbmRlZFJlYWN0VGFibGU8UCwgUyBleHRlbmRzIElSZWFjdFRhYmxlU3RhdGU+IGV4dGVuZHMgUmVsZWFzaW5nUmVhY3RDb21wb25lbnQ8UCwgUz4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IGFueSwgY29udGV4dDogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcblxuICAgICAgICBjb25zdCBrZXlib2FyZEhhbmRsZXIgPSAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHtcblxuICAgICAgICAgICAgLy8gVE9ETzogb25seSBkbyB0aGlzIGlmIHRoZSBjdXJyZW50IHJlYWN0IGNvbXBvbmVudCBoYXMgZm9jdXMgYnV0XG4gICAgICAgICAgICAvLyBJJ20gbm90IHN1cmUgaWYgSSBjYW4gZmlndXJlIHRoaXMgb3V0Li4uXG5cbiAgICAgICAgICAgIGNvbnN0IHN0YXRlOiBJUmVhY3RUYWJsZVN0YXRlID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICAgICAgaWYgKHN0YXRlLnNlbGVjdGVkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChldmVudC5rZXkgPT09IFwiQXJyb3dVcFwiKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBNYXRoLm1heChzdGF0ZS5zZWxlY3RlZCAtIDEsIDApO1xuICAgICAgICAgICAgICAgIHRoaXMub25TZWxlY3RlZFJvdyhzZWxlY3RlZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChldmVudC5rZXkgPT09IFwiQXJyb3dEb3duXCIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZCA9IHN0YXRlLnNlbGVjdGVkICsgMTtcbiAgICAgICAgICAgICAgICB0aGlzLm9uU2VsZWN0ZWRSb3coc2VsZWN0ZWQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH07XG5cbiAgICAgICAvLyAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywga2V5Ym9hcmRIYW5kbGVyKTtcbiAgICAgICAvL1xuICAgICAgIC8vICB0aGlzLnJlbGVhc2VyLnJlZ2lzdGVyKHtcbiAgICAgICAvLyAgICAgIHJlbGVhc2U6ICgpID0+IHtcbiAgICAgICAvLyAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBrZXlib2FyZEhhbmRsZXIpO1xuICAgICAgIC8vICAgICAgfVxuICAgICAgIC8vIH0pO1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHdoZW4gc29tZW9uZSBjbGlja3MgYSByb3cgaW4gdGhlIHRhYmxlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNlbGVjdGVkXG4gICAgICovXG4gICAgcHJvdGVjdGVkIG9uU2VsZWN0ZWRSb3coc2VsZWN0ZWQ6IG51bWJlcikge1xuICAgICAgICBjb25zdCBzdGF0ZTogSVJlYWN0VGFibGVTdGF0ZSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoey4uLnN0YXRlLCBzZWxlY3RlZCB9KTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUmVhY3RUYWJsZVN0YXRlIHtcbiAgICBzZWxlY3RlZD86IG51bWJlcjtcbn1cblxuIl19