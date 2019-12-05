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
const Logger_1 = require("polar-shared/src/logger/Logger");
const EventListener_1 = require("../../../../web/js/reactor/EventListener");
const log = Logger_1.Logger.create();
class ReleasingReactComponent extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.releaser = new EventListener_1.Releaser();
        this.componentWillUnmount = this.componentWillUnmount.bind(this);
    }
    componentWillUnmount() {
        log.info("Releasing resources with releaser");
        this.releaser.release();
    }
}
exports.default = ReleasingReactComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVsZWFzaW5nUmVhY3RDb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJSZWxlYXNpbmdSZWFjdENvbXBvbmVudC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsNkNBQStCO0FBQy9CLDJEQUFzRDtBQUN0RCw0RUFBa0U7QUFFbEUsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLE1BQXFCLHVCQUE4QixTQUFRLEtBQUssQ0FBQyxTQUFlO0lBSTVFLFlBQVksS0FBUSxFQUFFLE9BQVk7UUFDOUIsS0FBSyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztRQUhQLGFBQVEsR0FBRyxJQUFJLHdCQUFRLEVBQUUsQ0FBQztRQUl6QyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBRU0sb0JBQW9CO1FBQ3ZCLEdBQUcsQ0FBQyxJQUFJLENBQUMsbUNBQW1DLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzVCLENBQUM7Q0FFSjtBQWRELDBDQWNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtMb2dnZXJ9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvbG9nZ2VyL0xvZ2dlcic7XG5pbXBvcnQge1JlbGVhc2VyfSBmcm9tICcuLi8uLi8uLi8uLi93ZWIvanMvcmVhY3Rvci9FdmVudExpc3RlbmVyJztcblxuY29uc3QgbG9nID0gTG9nZ2VyLmNyZWF0ZSgpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWxlYXNpbmdSZWFjdENvbXBvbmVudDxQLCBTPiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQLCBTPiB7XG5cbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgcmVsZWFzZXIgPSBuZXcgUmVsZWFzZXIoKTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBQLCBjb250ZXh0OiBhbnkpIHtcbiAgICAgICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuICAgICAgICB0aGlzLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gdGhpcy5jb21wb25lbnRXaWxsVW5tb3VudC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjb21wb25lbnRXaWxsVW5tb3VudCgpOiB2b2lkIHtcbiAgICAgICAgbG9nLmluZm8oXCJSZWxlYXNpbmcgcmVzb3VyY2VzIHdpdGggcmVsZWFzZXJcIik7XG4gICAgICAgIHRoaXMucmVsZWFzZXIucmVsZWFzZSgpO1xuICAgIH1cblxufVxuXG4iXX0=