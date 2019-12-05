"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Feedback_1 = require("../../../../../web/js/ui/feedback/Feedback");
const Toaster_1 = require("../../../../../web/js/ui/toaster/Toaster");
const MachineIDs_1 = require("../../../../../web/js/util/MachineIDs");
const ISODateTimeStrings_1 = require("polar-shared/src/metadata/ISODateTimeStrings");
const UserFeedback_1 = require("../../../../../web/js/telemetry/UserFeedback");
const SplashKeys_1 = require("../SplashKeys");
const LocalPrefs_1 = require("../../../../../web/js/util/LocalPrefs");
const Version_1 = require("polar-shared/src/util/Version");
class NPSModal extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.onRated = this.onRated.bind(this);
    }
    render() {
        return (react_1.default.createElement(Feedback_1.Feedback, { category: 'net-promoter-score', title: 'How likely are you to recommend Polar?', from: "Not likely", to: "Very likely", onRated: (rating) => this.onRated(rating) }));
    }
    onRated(rating) {
        LocalPrefs_1.LocalPrefs.set(SplashKeys_1.SplashKeys.NET_PROMOTER_SCORE, rating);
        Toaster_1.Toaster.success("Thanks for your feedback!");
        const version = Version_1.Version.get();
        const userFeedback = {
            machine: MachineIDs_1.MachineIDs.get(),
            text: null,
            netPromoterScore: rating,
            created: ISODateTimeStrings_1.ISODateTimeStrings.create(),
            version
        };
        UserFeedback_1.UserFeedbacks.write(userFeedback)
            .catch(err => console.error("Unable to write user feedback: ", err));
    }
}
exports.NPSModal = NPSModal;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTlBTTW9kYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJOUFNNb2RhbC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxrREFBMEI7QUFDMUIseUVBQW9FO0FBRXBFLHNFQUFpRTtBQUNqRSxzRUFBaUU7QUFDakUscUZBQWdGO0FBQ2hGLCtFQUEyRTtBQUMzRSw4Q0FBeUM7QUFDekMsc0VBQWlFO0FBQ2pFLDJEQUFzRDtBQUV0RCxNQUFhLFFBQVMsU0FBUSxlQUFLLENBQUMsU0FBeUI7SUFFekQsWUFBWSxLQUFhO1FBQ3JCLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNiLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVNLE1BQU07UUFFVCxPQUFPLENBRUgsOEJBQUMsbUJBQVEsSUFBQyxRQUFRLEVBQUMsb0JBQW9CLEVBQzdCLEtBQUssRUFBQyx3Q0FBd0MsRUFDOUMsSUFBSSxFQUFDLFlBQVksRUFDakIsRUFBRSxFQUFDLGFBQWEsRUFDaEIsT0FBTyxFQUFFLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBRXpELENBQUM7SUFDTixDQUFDO0lBRU8sT0FBTyxDQUFDLE1BQWM7UUFFMUIsdUJBQVUsQ0FBQyxHQUFHLENBQUMsdUJBQVUsQ0FBQyxrQkFBa0IsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUV0RCxpQkFBTyxDQUFDLE9BQU8sQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1FBRTdDLE1BQU0sT0FBTyxHQUFHLGlCQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7UUFFOUIsTUFBTSxZQUFZLEdBQUc7WUFDakIsT0FBTyxFQUFFLHVCQUFVLENBQUMsR0FBRyxFQUFFO1lBQ3pCLElBQUksRUFBRSxJQUFJO1lBQ1YsZ0JBQWdCLEVBQUUsTUFBTTtZQUN4QixPQUFPLEVBQUUsdUNBQWtCLENBQUMsTUFBTSxFQUFFO1lBQ3BDLE9BQU87U0FFVixDQUFDO1FBRUYsNEJBQWEsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDO2FBQzVCLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsaUNBQWlDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUU3RSxDQUFDO0NBQ0o7QUF6Q0QsNEJBeUNDIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50IHJlYWN0L25vLW11bHRpLWNvbXA6IDAsIHJlYWN0L3Byb3AtdHlwZXM6IDAgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge0ZlZWRiYWNrfSBmcm9tICcuLi8uLi8uLi8uLi8uLi93ZWIvanMvdWkvZmVlZGJhY2svRmVlZGJhY2snO1xuaW1wb3J0IHtSYXRpbmd9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3dlYi9qcy91aS9mZWVkYmFjay9GZWVkYmFjayc7XG5pbXBvcnQge1RvYXN0ZXJ9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3dlYi9qcy91aS90b2FzdGVyL1RvYXN0ZXInO1xuaW1wb3J0IHtNYWNoaW5lSURzfSBmcm9tICcuLi8uLi8uLi8uLi8uLi93ZWIvanMvdXRpbC9NYWNoaW5lSURzJztcbmltcG9ydCB7SVNPRGF0ZVRpbWVTdHJpbmdzfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL21ldGFkYXRhL0lTT0RhdGVUaW1lU3RyaW5ncyc7XG5pbXBvcnQge1VzZXJGZWVkYmFja3N9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3dlYi9qcy90ZWxlbWV0cnkvVXNlckZlZWRiYWNrJztcbmltcG9ydCB7U3BsYXNoS2V5c30gZnJvbSAnLi4vU3BsYXNoS2V5cyc7XG5pbXBvcnQge0xvY2FsUHJlZnN9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3dlYi9qcy91dGlsL0xvY2FsUHJlZnMnO1xuaW1wb3J0IHtWZXJzaW9ufSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL3V0aWwvVmVyc2lvbic7XG5cbmV4cG9ydCBjbGFzcyBOUFNNb2RhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMub25SYXRlZCA9IHRoaXMub25SYXRlZC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgPEZlZWRiYWNrIGNhdGVnb3J5PSduZXQtcHJvbW90ZXItc2NvcmUnXG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU9J0hvdyBsaWtlbHkgYXJlIHlvdSB0byByZWNvbW1lbmQgUG9sYXI/J1xuICAgICAgICAgICAgICAgICAgICAgIGZyb209XCJOb3QgbGlrZWx5XCJcbiAgICAgICAgICAgICAgICAgICAgICB0bz1cIlZlcnkgbGlrZWx5XCJcbiAgICAgICAgICAgICAgICAgICAgICBvblJhdGVkPXsocmF0aW5nKSA9PiB0aGlzLm9uUmF0ZWQocmF0aW5nKX0vPlxuXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblJhdGVkKHJhdGluZzogUmF0aW5nKSB7XG5cbiAgICAgICAgTG9jYWxQcmVmcy5zZXQoU3BsYXNoS2V5cy5ORVRfUFJPTU9URVJfU0NPUkUsIHJhdGluZyk7XG5cbiAgICAgICAgVG9hc3Rlci5zdWNjZXNzKFwiVGhhbmtzIGZvciB5b3VyIGZlZWRiYWNrIVwiKTtcblxuICAgICAgICBjb25zdCB2ZXJzaW9uID0gVmVyc2lvbi5nZXQoKTtcblxuICAgICAgICBjb25zdCB1c2VyRmVlZGJhY2sgPSB7XG4gICAgICAgICAgICBtYWNoaW5lOiBNYWNoaW5lSURzLmdldCgpLFxuICAgICAgICAgICAgdGV4dDogbnVsbCxcbiAgICAgICAgICAgIG5ldFByb21vdGVyU2NvcmU6IHJhdGluZyxcbiAgICAgICAgICAgIGNyZWF0ZWQ6IElTT0RhdGVUaW1lU3RyaW5ncy5jcmVhdGUoKSxcbiAgICAgICAgICAgIHZlcnNpb25cblxuICAgICAgICB9O1xuXG4gICAgICAgIFVzZXJGZWVkYmFja3Mud3JpdGUodXNlckZlZWRiYWNrKVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKFwiVW5hYmxlIHRvIHdyaXRlIHVzZXIgZmVlZGJhY2s6IFwiLCBlcnIpKTtcblxuICAgIH1cbn1cblxuaW50ZXJmYWNlIElQcm9wcyB7XG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xufVxuXG4iXX0=