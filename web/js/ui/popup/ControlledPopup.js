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
const Popover_1 = __importDefault(require("reactstrap/lib/Popover"));
const Optional_1 = require("polar-shared/src/util/ts/Optional");
const Points_1 = require("../../Points");
const DocFormatFactory_1 = require("../../docformat/DocFormatFactory");
const Logger_1 = require("polar-shared/src/logger/Logger");
const ISODateTimeStrings_1 = require("polar-shared/src/metadata/ISODateTimeStrings");
const log = Logger_1.Logger.create();
class ControlledPopup extends React.Component {
    constructor(props) {
        super(props);
        this.docFormat = DocFormatFactory_1.DocFormatFactory.getInstance();
        this.toggle = this.toggle.bind(this);
        this.onTriggerPopupEvent = this.onTriggerPopupEvent.bind(this);
        this.state = {
            active: false,
        };
    }
    componentWillMount() {
        this.props.popupStateEventDispatcher.addEventListener(event => {
            this.setState(event);
        });
        this.props.triggerPopupEventDispatcher.addEventListener(event => {
            this.onTriggerPopupEvent(event);
        });
    }
    componentWillUnmount() {
        this.moveElementToBody();
    }
    render() {
        return (React.createElement("div", { id: "comment-popup-box" },
            React.createElement("div", { id: this.props.id + '-anchor' }),
            React.createElement(Popover_1.default, { placement: this.props.placement, id: this.props.id + '-popover', isOpen: this.state.active, target: this.props.id + '-anchor', toggle: this.toggle, style: {} }, this.props.children)));
    }
    toggle() {
        if (this.selection) {
            const active = !this.selection.isCollapsed;
            this.setState({
                active,
                activated: ISODateTimeStrings_1.ISODateTimeStrings.create()
            });
            if (!active) {
                this.moveElementToBody();
            }
        }
    }
    moveElementToBody() {
        const id = `${this.props.id}-anchor`;
        const anchorElement = document.getElementById(id);
        if (!anchorElement) {
            return;
        }
        const doc = anchorElement.ownerDocument;
        anchorElement.parentElement.removeChild(anchorElement);
        doc.body.appendChild(anchorElement);
    }
    onTriggerPopupEvent(event) {
        const pageElements = document.querySelectorAll(".page");
        const pageElement = pageElements[event.pageNum - 1];
        this.selection = event.selection;
        let origin = Optional_1.Optional.of(pageElement.getBoundingClientRect())
            .map(rect => {
            return { 'x': rect.left, 'y': rect.top };
        })
            .get();
        if (this.docFormat.name === 'html') {
            origin = { x: 0, y: 0 };
        }
        const point = event.point;
        const relativePoint = Points_1.Points.relativeTo(origin, point);
        const offset = event.offset || { x: 0, y: 0 };
        const top = relativePoint.y + offset.y;
        const left = relativePoint.x + offset.x;
        const id = `${this.props.id}-anchor`;
        const cssText = `position: absolute; top: ${top}px; left: ${left}px;`;
        const anchorElement = document.getElementById(id);
        if (anchorElement) {
            anchorElement.style.cssText = cssText;
            anchorElement.parentElement.removeChild(anchorElement);
            pageElement.insertBefore(anchorElement, pageElement.firstChild);
            this.setState({
                active: true,
            });
        }
        else {
            log.warn("Could not find anchor element for id: " + id);
        }
    }
}
exports.ControlledPopup = ControlledPopup;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udHJvbGxlZFBvcHVwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQ29udHJvbGxlZFBvcHVwLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBK0I7QUFHL0IscUVBQTZDO0FBQzdDLGdFQUEyRDtBQUUzRCx5Q0FBb0M7QUFFcEMsdUVBQWtFO0FBRWxFLDJEQUFzRDtBQUV0RCxxRkFBbUc7QUFFbkcsTUFBTSxHQUFHLEdBQUcsZUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTVCLE1BQWEsZUFBZ0IsU0FBUSxLQUFLLENBQUMsU0FBdUM7SUFNOUUsWUFBWSxLQUFVO1FBQ2xCLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUViLElBQUksQ0FBQyxTQUFTLEdBQUcsbUNBQWdCLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFaEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUUvRCxJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1QsTUFBTSxFQUFFLEtBQUs7U0FDaEIsQ0FBQztJQUVOLENBQUM7SUFFTSxrQkFBa0I7UUFFckIsSUFBSSxDQUFDLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMxRCxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUM1RCxJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEMsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDO0lBR00sb0JBQW9C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QUFHLEdBQUcsYUFBYSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLE1BQU0sSUFBSSxHQUFHLGFBQWEsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUV4QyxNQUFNLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxTQUFTLENBQUM7UUFDckMsTUFBTSxPQUFPLEdBQUcsNEJBQTRCLEdBQUcsYUFBYSxJQUFJLEtBQUssQ0FBQztRQUV0RSxNQUFNLGFBQWEsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRWxELElBQUksYUFBYSxFQUFFO1lBRWYsYUFBYSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBSXRDLGFBQWEsQ0FBQyxhQUFjLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBRXhELFdBQVcsQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUVoRSxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUNWLE1BQU0sRUFBRSxJQUFJO2FBQ2YsQ0FBQyxDQUFDO1NBRU47YUFBTTtZQUNILEdBQUcsQ0FBQyxJQUFJLENBQUMsd0NBQXdDLEdBQUcsRUFBRSxDQUFDLENBQUM7U0FDM0Q7SUFFTCxDQUFDO0NBRUo7QUFsTEQsMENBa0xDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtJRXZlbnREaXNwYXRjaGVyfSBmcm9tICcuLi8uLi9yZWFjdG9yL1NpbXBsZVJlYWN0b3InO1xuaW1wb3J0IHtUcmlnZ2VyUG9wdXBFdmVudH0gZnJvbSAnLi9UcmlnZ2VyUG9wdXBFdmVudCc7XG5pbXBvcnQgUG9wb3ZlciBmcm9tICdyZWFjdHN0cmFwL2xpYi9Qb3BvdmVyJztcbmltcG9ydCB7T3B0aW9uYWx9IGZyb20gJ3BvbGFyLXNoYXJlZC9zcmMvdXRpbC90cy9PcHRpb25hbCc7XG5pbXBvcnQge1BvaW50fSBmcm9tICcuLi8uLi9Qb2ludCc7XG5pbXBvcnQge1BvaW50c30gZnJvbSAnLi4vLi4vUG9pbnRzJztcbmltcG9ydCB7RG9jRm9ybWF0fSBmcm9tICcuLi8uLi9kb2Nmb3JtYXQvRG9jRm9ybWF0JztcbmltcG9ydCB7RG9jRm9ybWF0RmFjdG9yeX0gZnJvbSAnLi4vLi4vZG9jZm9ybWF0L0RvY0Zvcm1hdEZhY3RvcnknO1xuaW1wb3J0IHtQb3B1cFN0YXRlRXZlbnR9IGZyb20gJy4vUG9wdXBTdGF0ZUV2ZW50JztcbmltcG9ydCB7TG9nZ2VyfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL2xvZ2dlci9Mb2dnZXInO1xuaW1wb3J0IHtnZXRTb3VyY2VGaWxlfSBmcm9tICd0c2xpbnQnO1xuaW1wb3J0IHtJU09EYXRlVGltZVN0cmluZywgSVNPRGF0ZVRpbWVTdHJpbmdzfSBmcm9tICdwb2xhci1zaGFyZWQvc3JjL21ldGFkYXRhL0lTT0RhdGVUaW1lU3RyaW5ncyc7XG5cbmNvbnN0IGxvZyA9IExvZ2dlci5jcmVhdGUoKTtcblxuZXhwb3J0IGNsYXNzIENvbnRyb2xsZWRQb3B1cCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxDb250cm9sbGVkUG9wdXBQcm9wcywgSVN0YXRlPiB7XG5cbiAgICBwcml2YXRlIHNlbGVjdGlvbj86IFNlbGVjdGlvbjtcblxuICAgIHByaXZhdGUgZG9jRm9ybWF0OiBEb2NGb3JtYXQ7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogYW55KSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLmRvY0Zvcm1hdCA9IERvY0Zvcm1hdEZhY3RvcnkuZ2V0SW5zdGFuY2UoKTtcblxuICAgICAgICB0aGlzLnRvZ2dsZSA9IHRoaXMudG9nZ2xlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25UcmlnZ2VyUG9wdXBFdmVudCA9IHRoaXMub25UcmlnZ2VyUG9wdXBFdmVudC5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgICB9O1xuXG4gICAgfVxuXG4gICAgcHVibGljIGNvbXBvbmVudFdpbGxNb3VudCgpOiB2b2lkIHtcblxuICAgICAgICB0aGlzLnByb3BzLnBvcHVwU3RhdGVFdmVudERpc3BhdGNoZXIuYWRkRXZlbnRMaXN0ZW5lcihldmVudCA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKGV2ZW50KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5wcm9wcy50cmlnZ2VyUG9wdXBFdmVudERpc3BhdGNoZXIuYWRkRXZlbnRMaXN0ZW5lcihldmVudCA9PiB7XG4gICAgICAgICAgICB0aGlzLm9uVHJpZ2dlclBvcHVwRXZlbnQoZXZlbnQpO1xuICAgICAgICB9KTtcblxuICAgIH1cblxuXG4gICAgcHVibGljIGNvbXBvbmVudFdpbGxVbm1vdW50KCk6IHZvaWQge1xuICAgICAgICB0aGlzLm1vdmVFbGVtZW50VG9Cb2R5KCk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICA8ZGl2IGlkPVwiY29tbWVudC1wb3B1cC1ib3hcIj5cblxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9e3RoaXMucHJvcHMuaWQgKyAnLWFuY2hvcid9Lz5cblxuICAgICAgICAgICAgICAgIDxQb3BvdmVyIHBsYWNlbWVudD17dGhpcy5wcm9wcy5wbGFjZW1lbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e3RoaXMucHJvcHMuaWQgKyAnLXBvcG92ZXInfVxuICAgICAgICAgICAgICAgICAgICAgICAgIGlzT3Blbj17dGhpcy5zdGF0ZS5hY3RpdmV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PXt0aGlzLnByb3BzLmlkICsgJy1hbmNob3InfVxuICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZT17dGhpcy50b2dnbGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t9fT5cblxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cblxuICAgICAgICAgICAgICAgIDwvUG9wb3Zlcj5cblxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHRvZ2dsZSgpIHtcblxuICAgICAgICAvLyBUT0RPOiB3ZSBrZWVwIHRoZSBkaWFsb2cgb3BlbiB0b28gbG9uZyBhcyB3ZSBhcmVuJ3QgcmVhbGx5IHRvbGQgd2hlblxuICAgICAgICAvLyB0aGUgYWN0aXZlIHNlbGVjdGlvbiBnb2VzIGF3YXkgc28gd2Ugc2hvdWxkIHVwZGF0ZSBBY3RpdmVTZWxlY3Rpb25zXG4gICAgICAgIC8vIHRvIHNlbmQgYW4gdXBkYXRlZCBldmVudCB3aGVuIHNlbGVjdGlvbiBpcyBkZXN0cm95ZWQsIG5vdCBqdXN0XG4gICAgICAgIC8vIGNyZWF0ZWQuICBXZSBzaG91bGQgaGF2ZSBhbiBldmVudCB0eXBlIG9mICdjcmVhdGVkJyBhbmQgJ2Rlc3Ryb3llZCdcblxuICAgICAgICBpZiAodGhpcy5zZWxlY3Rpb24pIHtcblxuICAgICAgICAgICAgY29uc3QgYWN0aXZlID0gISB0aGlzLnNlbGVjdGlvbi5pc0NvbGxhcHNlZDtcblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgYWN0aXZlLFxuICAgICAgICAgICAgICAgIGFjdGl2YXRlZDogSVNPRGF0ZVRpbWVTdHJpbmdzLmNyZWF0ZSgpXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKCEgYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlRWxlbWVudFRvQm9keSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICAvL1xuICAgICAgICAvL1xuICAgICAgICAvLyBpZiAodGhpcy5zdGF0ZS5pbml0aWFsKSB7XG4gICAgICAgIC8vICAgIC8vIGtlZXAgdGhlIGFjdGl2ZSBzdGF0ZSBidXQgc2V0IGluaXRpYWwgdG8gZmFsc2VcbiAgICAgICAgLy9cbiAgICAgICAgLy8gICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAvLyAgICAgICAgIGFjdGl2ZTogdGhpcy5zdGF0ZS5hY3RpdmUsXG4gICAgICAgIC8vICAgICAgICAgaW5pdGlhbDogZmFsc2VcbiAgICAgICAgLy8gICAgIH0pO1xuICAgICAgICAvL1xuICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAvL1xuICAgICAgICAvLyAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIC8vICAgICAgICAgYWN0aXZlOiAhIHRoaXMuc3RhdGUuYWN0aXZlLFxuICAgICAgICAvLyAgICAgICAgIGluaXRpYWw6IGZhbHNlXG4gICAgICAgIC8vICAgICB9KTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gfVxuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBtb3ZlRWxlbWVudFRvQm9keSgpIHtcblxuICAgICAgICBjb25zdCBpZCA9IGAke3RoaXMucHJvcHMuaWR9LWFuY2hvcmA7XG4gICAgICAgIGNvbnN0IGFuY2hvckVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG5cbiAgICAgICAgaWYgKCEgYW5jaG9yRWxlbWVudCkge1xuICAgICAgICAgICAgLy8gYWxyZWFkeSBtaXNzaW5nIGFuZCBub3Qgb24gdGhlIHBhZ2UuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBkb2MgPSBhbmNob3JFbGVtZW50IS5vd25lckRvY3VtZW50O1xuICAgICAgICBhbmNob3JFbGVtZW50IS5wYXJlbnRFbGVtZW50IS5yZW1vdmVDaGlsZChhbmNob3JFbGVtZW50ISk7XG4gICAgICAgIGRvYyEuYm9keS5hcHBlbmRDaGlsZChhbmNob3JFbGVtZW50ISk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uVHJpZ2dlclBvcHVwRXZlbnQoZXZlbnQ6IFRyaWdnZXJQb3B1cEV2ZW50KSB7XG5cbiAgICAgICAgLy8gd2UgbmVlZCB0byBwbGFjZSB0aGUgYW5jaG9yIGVsZW1lbnQgcHJvcGVybHkgb24gdGhlIHBhZ2UgYW5kIHRoZVxuICAgICAgICAvLyBwb3B1cCBpZCBkaXNwbGF5ZWQgcmVsYXRpdmUgdG8gdGhlIGFuY2hvci5cblxuICAgICAgICBjb25zdCBwYWdlRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBhZ2VcIik7XG5cbiAgICAgICAgY29uc3QgcGFnZUVsZW1lbnQgPSBwYWdlRWxlbWVudHNbZXZlbnQucGFnZU51bSAtIDFdO1xuXG4gICAgICAgIHRoaXMuc2VsZWN0aW9uID0gZXZlbnQuc2VsZWN0aW9uO1xuXG4gICAgICAgIGxldCBvcmlnaW46IFBvaW50ID1cbiAgICAgICAgICAgIE9wdGlvbmFsLm9mKHBhZ2VFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpKVxuICAgICAgICAgICAgICAgICAgICAubWFwKHJlY3QgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsneCc6IHJlY3QubGVmdCwgJ3knOiByZWN0LnRvcH07XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5nZXQoKTtcblxuICAgICAgICAvLyBvbmUgb2ZmIGZvciB0aGUgaHRtbCB2aWV3ZXIuLi4gSSBob3BlIHdlIGNhbiB1bmlmeSB0aGVzZSBvbmUgZGF5LlxuICAgICAgICBpZiAodGhpcy5kb2NGb3JtYXQubmFtZSA9PT0gJ2h0bWwnKSB7XG4gICAgICAgICAgICBvcmlnaW4gPSB7eDogMCwgeTogMH07XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwb2ludCA9IGV2ZW50LnBvaW50O1xuXG4gICAgICAgIGNvbnN0IHJlbGF0aXZlUG9pbnQ6IFBvaW50ID1cbiAgICAgICAgICAgIFBvaW50cy5yZWxhdGl2ZVRvKG9yaWdpbiwgcG9pbnQpO1xuXG4gICAgICAgIGNvbnN0IG9mZnNldCA9IGV2ZW50Lm9mZnNldCB8fCB7eDogMCwgeTogMH07XG5cbiAgICAgICAgY29uc3QgdG9wID0gcmVsYXRpdmVQb2ludC55ICsgb2Zmc2V0Lnk7XG4gICAgICAgIGNvbnN0IGxlZnQgPSByZWxhdGl2ZVBvaW50LnggKyBvZmZzZXQueDtcblxuICAgICAgICBjb25zdCBpZCA9IGAke3RoaXMucHJvcHMuaWR9LWFuY2hvcmA7XG4gICAgICAgIGNvbnN0IGNzc1RleHQgPSBgcG9zaXRpb246IGFic29sdXRlOyB0b3A6ICR7dG9wfXB4OyBsZWZ0OiAke2xlZnR9cHg7YDtcblxuICAgICAgICBjb25zdCBhbmNob3JFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuXG4gICAgICAgIGlmIChhbmNob3JFbGVtZW50KSB7XG5cbiAgICAgICAgICAgIGFuY2hvckVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IGNzc1RleHQ7XG5cbiAgICAgICAgICAgIC8vIG5vdyBtb3ZlIHRoZSBlbGVtZW50IHRvIHRoZSBwcm9wZXIgcGFnZS5cblxuICAgICAgICAgICAgYW5jaG9yRWxlbWVudC5wYXJlbnRFbGVtZW50IS5yZW1vdmVDaGlsZChhbmNob3JFbGVtZW50KTtcblxuICAgICAgICAgICAgcGFnZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGFuY2hvckVsZW1lbnQsIHBhZ2VFbGVtZW50LmZpcnN0Q2hpbGQpO1xuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBhY3RpdmU6IHRydWUsXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbG9nLndhcm4oXCJDb3VsZCBub3QgZmluZCBhbmNob3IgZWxlbWVudCBmb3IgaWQ6IFwiICsgaWQpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb250cm9sbGVkUG9wdXBQcm9wcyB7XG5cbiAgICByZWFkb25seSBpZDogc3RyaW5nO1xuXG4gICAgcmVhZG9ubHkgcGxhY2VtZW50OiBDb250cm9sbGVkUG9wdXBQbGFjZW1lbnQ7XG5cbiAgICByZWFkb25seSBwb3B1cFN0YXRlRXZlbnREaXNwYXRjaGVyOiBJRXZlbnREaXNwYXRjaGVyPFBvcHVwU3RhdGVFdmVudD47XG5cbiAgICByZWFkb25seSB0cmlnZ2VyUG9wdXBFdmVudERpc3BhdGNoZXI6IElFdmVudERpc3BhdGNoZXI8VHJpZ2dlclBvcHVwRXZlbnQ+O1xuXG59XG5cbmludGVyZmFjZSBJU3RhdGUge1xuXG4gICAgYWN0aXZlOiBib29sZWFuO1xuXG4gICAgLy8gdGltZXN0YW1wIHNvIHRoYXQgd2UgY2FuIGZvcmNlIHJlYWN0aXZhdGlvblxuICAgIGFjdGl2YXRlZD86IElTT0RhdGVUaW1lU3RyaW5nO1xuXG59XG5cbmV4cG9ydCB0eXBlIENvbnRyb2xsZWRQb3B1cFBsYWNlbWVudCA9ICd0b3AnIHwgJ2JvdHRvbSc7XG4iXX0=