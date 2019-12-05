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
const Progress_1 = __importDefault(require("reactstrap/lib/Progress"));
const Firebase_1 = require("../../firebase/Firebase");
const Firestore_1 = require("../../firebase/Firestore");
const Percentages_1 = require("polar-shared/src/util/Percentages");
class CrowdfundingProgress extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.init = this.init.bind(this);
        this.init().catch(err => console.error("Unable to obtain crowdfunding campaign status: ", err));
        this.state = {};
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            Firebase_1.Firebase.init();
            const firestore = yield Firestore_1.Firestore.getInstance();
            const ref = firestore.collection("crowdfunding").doc("2019-04");
            ref.onSnapshot(snapshot => {
                const data = snapshot.data();
                if (!data) {
                    return;
                }
                const status = data;
                this.setState({ status });
            });
        });
    }
    render() {
        if (this.state.status === undefined) {
            return React.createElement("div", null);
        }
        else {
            const { value, goal } = this.state.status;
            const perc = Math.floor(Percentages_1.Percentages.calculate(value, goal));
            return React.createElement("div", { style: { display: 'flex' } },
                React.createElement("div", { className: "mt-auto mb-auto text-primary ml-2 mr-1" },
                    "$",
                    this.state.status.value.toLocaleString()),
                React.createElement("div", { className: "mt-auto mb-auto", style: { flexGrow: 1 } },
                    React.createElement(Progress_1.default, { value: perc, className: "" })),
                React.createElement("div", { className: "mt-auto mb-auto text-primary ml-1 mr-2" },
                    "$",
                    this.state.status.goal.toLocaleString()));
        }
    }
}
exports.CrowdfundingProgress = CrowdfundingProgress;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3Jvd2RmdW5kaW5nUHJvZ3Jlc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJDcm93ZGZ1bmRpbmdQcm9ncmVzcy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQStCO0FBQy9CLHVFQUErQztBQUMvQyxzREFBaUQ7QUFDakQsd0RBQW1EO0FBQ25ELG1FQUE4RDtBQUU5RCxNQUFhLG9CQUFxQixTQUFRLEtBQUssQ0FBQyxTQUF5QjtJQUVyRSxZQUFZLEtBQWEsRUFBRSxPQUFZO1FBQ25DLEtBQUssQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVqQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxpREFBaUQsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRWhHLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBRXBCLENBQUM7SUFFYSxJQUFJOztZQUVkLG1CQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDaEIsTUFBTSxTQUFTLEdBQUcsTUFBTSxxQkFBUyxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBRWhELE1BQU0sR0FBRyxHQUFHLFNBQVMsQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBRWhFLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBRXRCLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFFN0IsSUFBSSxDQUFFLElBQUksRUFBRTtvQkFDUixPQUFPO2lCQUNWO2dCQUVELE1BQU0sTUFBTSxHQUFHLElBQTBCLENBQUM7Z0JBRTFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxDQUFDO1lBRTVCLENBQUMsQ0FBQyxDQUFDO1FBRVAsQ0FBQztLQUFBO0lBRU0sTUFBTTtRQUVULElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUssU0FBUyxFQUFFO1lBQ2pDLE9BQU8sZ0NBQU0sQ0FBQztTQUNqQjthQUFNO1lBRUgsTUFBTSxFQUFDLEtBQUssRUFBRSxJQUFJLEVBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztZQUV4QyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLHlCQUFXLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBRTVELE9BQU8sNkJBQUssS0FBSyxFQUFFLEVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBQztnQkFFaEMsNkJBQUssU0FBUyxFQUFDLHdDQUF3Qzs7b0JBQ2pELElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FDeEM7Z0JBRU4sNkJBQUssU0FBUyxFQUFDLGlCQUFpQixFQUFDLEtBQUssRUFBRSxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUM7b0JBQ2pELG9CQUFDLGtCQUFRLElBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUMsRUFBRSxHQUFHLENBQ3BDO2dCQUVOLDZCQUFLLFNBQVMsRUFBQyx3Q0FBd0M7O29CQUNqRCxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQ3ZDLENBRUosQ0FBQztTQUVWO0lBRUwsQ0FBQztDQUVKO0FBakVELG9EQWlFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9ncmVzcyBmcm9tICdyZWFjdHN0cmFwL2xpYi9Qcm9ncmVzcyc7XG5pbXBvcnQge0ZpcmViYXNlfSBmcm9tICcuLi8uLi9maXJlYmFzZS9GaXJlYmFzZSc7XG5pbXBvcnQge0ZpcmVzdG9yZX0gZnJvbSAnLi4vLi4vZmlyZWJhc2UvRmlyZXN0b3JlJztcbmltcG9ydCB7UGVyY2VudGFnZXN9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC9QZXJjZW50YWdlcyc7XG5cbmV4cG9ydCBjbGFzcyBDcm93ZGZ1bmRpbmdQcm9ncmVzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIElTdGF0ZT4ge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHM6IElQcm9wcywgY29udGV4dDogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcbiAgICAgICAgdGhpcy5pbml0ID0gdGhpcy5pbml0LmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5pbml0KCkuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoXCJVbmFibGUgdG8gb2J0YWluIGNyb3dkZnVuZGluZyBjYW1wYWlnbiBzdGF0dXM6IFwiLCBlcnIpKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge307XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGFzeW5jIGluaXQoKSB7XG5cbiAgICAgICAgRmlyZWJhc2UuaW5pdCgpO1xuICAgICAgICBjb25zdCBmaXJlc3RvcmUgPSBhd2FpdCBGaXJlc3RvcmUuZ2V0SW5zdGFuY2UoKTtcblxuICAgICAgICBjb25zdCByZWYgPSBmaXJlc3RvcmUuY29sbGVjdGlvbihcImNyb3dkZnVuZGluZ1wiKS5kb2MoXCIyMDE5LTA0XCIpO1xuXG4gICAgICAgIHJlZi5vblNuYXBzaG90KHNuYXBzaG90ID0+IHtcblxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHNuYXBzaG90LmRhdGEoKTtcblxuICAgICAgICAgICAgaWYgKCEgZGF0YSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3Qgc3RhdHVzID0gZGF0YSBhcyBDcm93ZGZ1bmRpbmdTdGF0dXM7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3N0YXR1c30pO1xuXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5zdGF0dXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIDxkaXYvPjtcbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgY29uc3Qge3ZhbHVlLCBnb2FsfSA9IHRoaXMuc3RhdGUuc3RhdHVzO1xuXG4gICAgICAgICAgICBjb25zdCBwZXJjID0gTWF0aC5mbG9vcihQZXJjZW50YWdlcy5jYWxjdWxhdGUodmFsdWUsIGdvYWwpKTtcblxuICAgICAgICAgICAgcmV0dXJuIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCd9fT5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtYXV0byBtYi1hdXRvIHRleHQtcHJpbWFyeSBtbC0yIG1yLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgJHt0aGlzLnN0YXRlLnN0YXR1cy52YWx1ZS50b0xvY2FsZVN0cmluZygpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC1hdXRvIG1iLWF1dG9cIiBzdHlsZT17e2ZsZXhHcm93OiAxfX0+XG4gICAgICAgICAgICAgICAgICAgIDxQcm9ncmVzcyB2YWx1ZT17cGVyY30gY2xhc3NOYW1lPVwiXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtYXV0byBtYi1hdXRvIHRleHQtcHJpbWFyeSBtbC0xIG1yLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgJHt0aGlzLnN0YXRlLnN0YXR1cy5nb2FsLnRvTG9jYWxlU3RyaW5nKCl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PjtcblxuICAgICAgICB9XG5cbiAgICB9XG5cbn1cblxuXG5pbnRlcmZhY2UgSVByb3BzIHtcbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG4gICAgcmVhZG9ubHkgc3RhdHVzPzogQ3Jvd2RmdW5kaW5nU3RhdHVzO1xufVxuXG5pbnRlcmZhY2UgQ3Jvd2RmdW5kaW5nU3RhdHVzIHtcbiAgICByZWFkb25seSB2YWx1ZTogbnVtYmVyO1xuICAgIHJlYWRvbmx5IGdvYWw6IG51bWJlcjtcbn1cbiJdfQ==