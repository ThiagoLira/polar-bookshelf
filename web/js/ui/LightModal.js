"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Platforms_1 = require("polar-shared/src/util/Platforms");
class LightModal extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const style = {
            position: "absolute",
            zIndex: 999999999,
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center'
        };
        if (!Platforms_1.Platforms.isMobile()) {
            style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        }
        return (react_1.default.createElement("div", { className: "p-auto", style: style }, this.props.children));
    }
}
exports.LightModal = LightModal;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGlnaHRNb2RhbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkxpZ2h0TW9kYWwudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsa0RBQTBCO0FBQzFCLCtEQUEwRDtBQUUxRCxNQUFhLFVBQVcsU0FBUSxlQUFLLENBQUMsU0FBeUI7SUFFM0QsWUFBWSxLQUFhO1FBQ3JCLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUViLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFDWixDQUFDO0lBRU4sQ0FBQztJQUVNLE1BQU07UUFHVCxNQUFNLEtBQUssR0FBd0I7WUFHL0IsUUFBUSxFQUFFLFVBQVU7WUFDcEIsTUFBTSxFQUFFLFNBQVM7WUFDakIsSUFBSSxFQUFFLENBQUM7WUFDUCxHQUFHLEVBQUUsQ0FBQztZQUNOLEtBQUssRUFBRSxNQUFNO1lBQ2IsTUFBTSxFQUFFLE1BQU07WUFHZCxPQUFPLEVBQUUsTUFBTTtZQUNmLFVBQVUsRUFBRSxRQUFRO1NBRXZCLENBQUM7UUFHRixJQUFJLENBQUUscUJBQVMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUV4QixLQUFLLENBQUMsZUFBZSxHQUFHLG9CQUFvQixDQUFDO1NBQ2hEO1FBRUQsT0FBTyxDQUVILHVDQUFLLFNBQVMsRUFBQyxRQUFRLEVBQ2xCLEtBQUssRUFBRSxLQUFLLElBRVosSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBRWxCLENBRVQsQ0FBQztJQUVOLENBQUM7Q0FFSjtBQWhERCxnQ0FnREMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtQbGF0Zm9ybXN9IGZyb20gXCJwb2xhci1zaGFyZWQvc3JjL3V0aWwvUGxhdGZvcm1zXCI7XG5cbmV4cG9ydCBjbGFzcyBMaWdodE1vZGFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcywgSVN0YXRlPiB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogSVByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICB9O1xuXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcigpIHtcblxuXG4gICAgICAgIGNvbnN0IHN0eWxlOiBSZWFjdC5DU1NQcm9wZXJ0aWVzID0ge1xuXG4gICAgICAgICAgICAvLyB0aGUgcG9zaXRpb25pbmdcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgICB6SW5kZXg6IDk5OTk5OTk5OSxcbiAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG5cbiAgICAgICAgICAgIC8vIGZvcmNlIHRoaW5ncyB0byBiZSBjZW50ZXJlZFxuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcidcblxuICAgICAgICB9O1xuXG5cbiAgICAgICAgaWYgKCEgUGxhdGZvcm1zLmlzTW9iaWxlKCkpIHtcbiAgICAgICAgICAgIC8vIG9uIG1vYmlsZSB3ZSBkb24ndCB3YW50IHRvIHVzZSBhIG1vZGFsLlxuICAgICAgICAgICAgc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYmEoMCwgMCwgMCwgMC43KSc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtYXV0b1wiXG4gICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZX0+XG5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cblxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgKTtcblxuICAgIH1cblxufVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcbn1cblxuaW50ZXJmYWNlIElTdGF0ZSB7XG59XG4iXX0=