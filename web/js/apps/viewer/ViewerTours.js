"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const ReactDOM = __importStar(require("react-dom"));
const React = __importStar(require("react"));
const ViewerTour_1 = require("./ViewerTour");
const LoadExampleDocs_1 = require("../repository/onboarding/LoadExampleDocs");
class ViewerTours {
    static createWhenNecessary(fingerprint) {
        if (fingerprint === LoadExampleDocs_1.LoadExampleDocs.MAIN_ANNOTATIONS_EXAMPLE_FINGERPRINT) {
            this.create();
        }
    }
    static create() {
        const id = 'viewer-tour-container';
        let container = document.getElementById(id);
        if (container) {
            return;
        }
        container = document.createElement('div');
        container.id = id;
        ReactDOM.render(React.createElement(ViewerTour_1.ViewerTour, null), container);
    }
}
exports.ViewerTours = ViewerTours;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmlld2VyVG91cnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJWaWV3ZXJUb3Vycy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsb0RBQXNDO0FBS3RDLDZDQUErQjtBQUMvQiw2Q0FBd0M7QUFDeEMsOEVBQXlFO0FBRXpFLE1BQWEsV0FBVztJQUViLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxXQUFtQjtRQUVqRCxJQUFJLFdBQVcsS0FBSyxpQ0FBZSxDQUFDLG9DQUFvQyxFQUFFO1lBQ3RFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNqQjtJQUVMLENBQUM7SUFFTSxNQUFNLENBQUMsTUFBTTtRQUVoQixNQUFNLEVBQUUsR0FBRyx1QkFBdUIsQ0FBQztRQUNuQyxJQUFJLFNBQVMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRTVDLElBQUksU0FBUyxFQUFFO1lBQ1gsT0FBTztTQUNWO1FBRUQsU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUMsU0FBUyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFFbEIsUUFBUSxDQUFDLE1BQU0sQ0FFWCxvQkFBQyx1QkFBVSxPQUFFLEVBRWIsU0FBUyxDQUVaLENBQUM7SUFFTixDQUFDO0NBRUo7QUFoQ0Qsa0NBZ0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7UHJpb3JpdGl6ZWRTcGxhc2hlc30gZnJvbSAnLi4vLi4vLi4vLi4vYXBwcy9yZXBvc2l0b3J5L2pzL3NwbGFzaC9Qcmlvcml0aXplZFNwbGFzaGVzJztcbmltcG9ydCB7U3luY0Jhcn0gZnJvbSAnLi4vLi4vdWkvc3luY19iYXIvU3luY0Jhcic7XG5pbXBvcnQge1JlcG9zaXRvcnlUb3VyfSBmcm9tICcuLi9yZXBvc2l0b3J5L1JlcG9zaXRvcnlUb3VyJztcbmltcG9ydCB7SGFzaFJvdXRlciwgUm91dGUsIFN3aXRjaH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1ZpZXdlclRvdXJ9IGZyb20gJy4vVmlld2VyVG91cic7XG5pbXBvcnQge0xvYWRFeGFtcGxlRG9jc30gZnJvbSAnLi4vcmVwb3NpdG9yeS9vbmJvYXJkaW5nL0xvYWRFeGFtcGxlRG9jcyc7XG5cbmV4cG9ydCBjbGFzcyBWaWV3ZXJUb3VycyB7XG5cbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZVdoZW5OZWNlc3NhcnkoZmluZ2VycHJpbnQ6IHN0cmluZykge1xuXG4gICAgICAgIGlmIChmaW5nZXJwcmludCA9PT0gTG9hZEV4YW1wbGVEb2NzLk1BSU5fQU5OT1RBVElPTlNfRVhBTVBMRV9GSU5HRVJQUklOVCkge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGUoKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGUoKSB7XG5cbiAgICAgICAgY29uc3QgaWQgPSAndmlld2VyLXRvdXItY29udGFpbmVyJztcbiAgICAgICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcblxuICAgICAgICBpZiAoY29udGFpbmVyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGFpbmVyLmlkID0gaWQ7XG5cbiAgICAgICAgUmVhY3RET00ucmVuZGVyKFxuXG4gICAgICAgICAgICA8Vmlld2VyVG91ci8+LFxuXG4gICAgICAgICAgICBjb250YWluZXJcblxuICAgICAgICApO1xuXG4gICAgfVxuXG59XG4iXX0=